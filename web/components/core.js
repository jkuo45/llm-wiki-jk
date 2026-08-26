// Three.js scene construction + shared scene-level helpers.
// Builds nodes/edges/labels once, provides physics, zoom, sticky rings,
// label-visibility and highlight primitives used by interaction/ui/prompt.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import { RAW_NODES, RAW_EDGES, LEGEND, TRANSLATIONS, nodeMap, adjacency } from './data.js';
import { state, stickyNodes, velocities } from './state.js';
import { esc } from './markdown.js';

// On-demand rendering: the render loop only draws when something changed
// (dirty flag, damping controls, or active physics) so the GPU/CPU is not
// burned 60×/sec while the scene is idle.
export const renderState = { dirty: true };
export function requestRender() { renderState.dirty = true; }

// ------------------------------------------------------------
// Theme-driven 3D colors. The site defaults to light (matching the reader /
// article pages); theme.js calls applyGraphTheme() at startup and on toggle
// so the scene follows before the first rendered frame.
// ------------------------------------------------------------
const SCENE_BG_LIGHT = 0xF6F3EC;   // cream, matches pages-light --bg / three-graph-light body
const SCENE_BG_DARK = 0x0f0f1a;    // existing dark navy
const EDGE_OFF_LIGHT = 0x9a9486;   // warm grey readable on cream
const EDGE_OFF_DARK = 0x4a4a6a;    // existing muted indigo

// Current theme-aware "resting" edge color. Highlight code paths (hover,
// selection, traces) call this instead of a hard-coded dark grey so edges
// read correctly on either background.
export function edgeOffColor() {
  return state.theme === 'light' ? EDGE_OFF_LIGHT : EDGE_OFF_DARK;
}

// Apply the active theme to the 3D scene (background + resting edges). DOM
// surfaces (node labels, tooltips, panels) are themed by the light
// stylesheet, so only the canvas needs JS here.
export function applyGraphTheme(light) {
  state.theme = light ? 'light' : 'dark';
  scene.background = new THREE.Color(light ? SCENE_BG_LIGHT : SCENE_BG_DARK);
  const oldOff = light ? EDGE_OFF_DARK : EDGE_OFF_LIGHT;
  const newOff = edgeOffColor();
  // Only reset edges currently at the previous off color; highlighted/selected
  // edges keep their accent color across the switch.
  for (let i = 0; i < edgeList.length; i++) {
    if (edgeHex[i] === oldOff) setEdgeVisual(edgeList[i].edge, newOff, edgeAlphaVal[i]);
  }
  requestRender();
}

// ------------------------------------------------------------
// Renderer / camera / controls
// ------------------------------------------------------------
export const container = document.getElementById('graph');
export const scene = new THREE.Scene();
// Light is the site-wide default; applyGraphTheme() updates this on toggle.
scene.background = new THREE.Color(SCENE_BG_LIGHT);

export const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 10000);
camera.position.set(-120, 0, 500);

export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
container.appendChild(renderer.domElement);

export const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(container.clientWidth, container.clientHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
// Bound the label layer's stacking context so floating UI chrome inside #graph
// (controls, zoom bar, dataset panel) always sits above node labels.
labelRenderer.domElement.style.zIndex = '0';
container.appendChild(labelRenderer.domElement);

export const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(170, 0, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 50;
controls.maxDistance = 2000;
controls.zoomSpeed = 1.2;
controls.addEventListener('change', requestRender);

// Screen-space label overlaps change with the camera, so recompute the
// decluttering after each pan/zoom gesture settles (debounced — 'end' can
// fire in bursts while damping). Skipped when a trace/selection owns labels.
let declutterTimer = null;
controls.addEventListener('end', () => {
  clearTimeout(declutterTimer);
  declutterTimer = setTimeout(() => {
    if (!state.activeTrace && !state.selectedNode) setAllLabelVisibility();
  }, 150);
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(100, 100, 100);
scene.add(directionalLight);
const backLight = new THREE.DirectionalLight(0x4E79A7, 0.3);
backLight.position.set(-100, -50, -100);
scene.add(backLight);

// ------------------------------------------------------------
// Node objects
// ------------------------------------------------------------
export const nodeObjects = new Map();
export const nodeMeshes = [];
export const labelObjects = new Map();
const labelThreshold = 15;

const sphereGeometry = new THREE.SphereGeometry(1, 16, 12);

function createNodeMesh(nodeData) {
  const radius = Math.max(1.5, nodeData.size * 0.4);
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color(nodeData.color.background),
    emissive: new THREE.Color(nodeData.color.background),
    emissiveIntensity: 0.15,
    shininess: 60,
    transparent: true,
    opacity: 0.92,
  });
  const mesh = new THREE.Mesh(sphereGeometry, material);
  mesh.scale.set(radius, radius, radius);
  mesh.userData = { nodeId: nodeData.id, nodeData };
  return mesh;
}

// Initialize positions using community clusters
const communityCenters = new Map();
let communityIndex = 0;
const clusterRadius = 200;  

LEGEND.forEach(c => {
  const angle = (communityIndex / LEGEND.length) * Math.PI * 2;
  const r = clusterRadius * (0.5 + 0.5 * Math.random());
  communityCenters.set(c.cid, new THREE.Vector3(
    Math.cos(angle) * r,
    (Math.random() - 0.5) * clusterRadius * 0.5,
    Math.sin(angle) * r
  ));
  communityIndex++;
});

RAW_NODES.forEach(n => {
  const mesh = createNodeMesh(n);
  const center = communityCenters.get(n.community) || new THREE.Vector3(0, 0, 0);
  const spread = 40 + n.degree * 3;
  mesh.position.set(
    center.x + (Math.random() - 0.5) * spread,
    center.y + (Math.random() - 0.5) * spread,
    center.z + (Math.random() - 0.5) * spread
  );
  scene.add(mesh);
  nodeMeshes.push(mesh);
  nodeObjects.set(n.id, mesh);
});

// ------------------------------------------------------------
// Edge objects — merged into a single THREE.LineSegments so all edges
// render in ONE draw call (was one THREE.Line per edge = thousands of
// draw calls). Per-edge visual state (color + alpha + filter) is stored in
// typed arrays and pushed to vertex attributes on change.
// ------------------------------------------------------------
export const EDGE_ACCENT = 0x4E79A7;
export const edgeList = [];            // [{ edge, fromMesh, toMesh }] indexed by segment
export let edgeSegments = null;        // THREE.LineSegments (raycast target)
const edgeToIndex = new Map();         // edge object -> segment index
const edgeBaseAlpha = [];              // resting alpha per edge
const edgeHex = [];                    // last-set color hex per edge (theme restore)
const edgeAlphaVal = [];               // last-set alpha per edge
const edgeFiltered = [];               // 1 = hidden by prompt node filter
export let edgePositions, edgePosAttr;
let edgeColors, edgeAlphas, edgeColorAttr, edgeAlphaAttr;
const _edgeColor = new THREE.Color();

function writeEdge(i) {
  const p = i * 6;
  const hidden = edgeFiltered[i];
  _edgeColor.set(edgeHex[i]);
  for (let k = 0; k < 2; k++) {
    const o = p + k * 3;
    edgeColors[o] = _edgeColor.r;
    edgeColors[o + 1] = _edgeColor.g;
    edgeColors[o + 2] = _edgeColor.b;
  }
  const a = hidden ? 0 : edgeAlphaVal[i];
  edgeAlphas[i * 2] = a;
  edgeAlphas[i * 2 + 1] = a;
}

export function setEdgeVisual(edge, hex, alpha) {
  const i = edgeToIndex.get(edge);
  if (i == null) return;
  edgeHex[i] = hex;
  edgeAlphaVal[i] = alpha;
  writeEdge(i);
  edgeColorAttr.needsUpdate = true;
  edgeAlphaAttr.needsUpdate = true;
  requestRender();
}

export function setEdgeFilter(edge, hidden) {
  const i = edgeToIndex.get(edge);
  if (i == null) return;
  edgeFiltered[i] = hidden ? 1 : 0;
  writeEdge(i);
  edgeColorAttr.needsUpdate = true;
  edgeAlphaAttr.needsUpdate = true;
  requestRender();
}

RAW_EDGES.forEach(e => {
  const fromMesh = nodeObjects.get(e.from);
  const toMesh = nodeObjects.get(e.to);
  if (!fromMesh || !toMesh) return;
  edgeList.push({ edge: e, fromMesh, toMesh });
});

const E = edgeList.length;
edgePositions = new Float32Array(E * 6);
edgeColors = new Float32Array(E * 6);
edgeAlphas = new Float32Array(E * 2);
const off = edgeOffColor();
for (let i = 0; i < E; i++) {
  const { fromMesh, toMesh, edge } = edgeList[i];
  const p = i * 6;
  edgePositions[p] = fromMesh.position.x;
  edgePositions[p + 1] = fromMesh.position.y;
  edgePositions[p + 2] = fromMesh.position.z;
  edgePositions[p + 3] = toMesh.position.x;
  edgePositions[p + 4] = toMesh.position.y;
  edgePositions[p + 5] = toMesh.position.z;
  const ba = (edge.color && edge.color.opacity != null ? edge.color.opacity : 1) * 0.6;
  edgeBaseAlpha[i] = ba;
  edgeHex[i] = off;
  edgeAlphaVal[i] = ba;
  edgeFiltered[i] = 0;
  _edgeColor.set(off);
  for (let k = 0; k < 2; k++) {
    const o = p + k * 3;
    edgeColors[o] = _edgeColor.r;
    edgeColors[o + 1] = _edgeColor.g;
    edgeColors[o + 2] = _edgeColor.b;
  }
  edgeAlphas[i * 2] = ba;
  edgeAlphas[i * 2 + 1] = ba;
  edgeToIndex.set(edge, i);
}

const edgeGeometry = new THREE.BufferGeometry();
edgePosAttr = new THREE.BufferAttribute(edgePositions, 3);
edgeColorAttr = new THREE.BufferAttribute(edgeColors, 3);
edgeAlphaAttr = new THREE.BufferAttribute(edgeAlphas, 1);
edgeGeometry.setAttribute('position', edgePosAttr);
edgeGeometry.setAttribute('aColor', edgeColorAttr);
edgeGeometry.setAttribute('aAlpha', edgeAlphaAttr);
const edgeMaterial = new THREE.ShaderMaterial({
  transparent: true,
  depthWrite: false,
  vertexShader: [
    'attribute vec3 aColor;',
    'attribute float aAlpha;',
    'varying vec3 vColor;',
    'varying float vAlpha;',
    'void main() {',
    '  vColor = aColor;',
    '  vAlpha = aAlpha;',
    '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
    '}',
  ].join('\n'),
  fragmentShader: [
    'varying vec3 vColor;',
    'varying float vAlpha;',
    'void main() {',
    '  gl_FragColor = vec4(vColor, vAlpha);',
    '}',
  ].join('\n'),
});
edgeSegments = new THREE.LineSegments(edgeGeometry, edgeMaterial);
edgeSegments.frustumCulled = false;
scene.add(edgeSegments);

// ------------------------------------------------------------
// Labels (only for high-degree nodes initially). Event handlers
// are attached by interaction.js via attachLabelHandlers().
// ------------------------------------------------------------
function createLabel(nodeData, mesh) {
  const div = document.createElement('div');
  div.className = 'node-label';
  div.dataset.nodeId = nodeData.id;

  const zhTWLabel = TRANSLATIONS[nodeData.label] || '';
  if (zhTWLabel && zhTWLabel !== nodeData.label) {
    div.innerHTML = `${esc(nodeData.label)}<br><span class="zh">${esc(zhTWLabel)}</span>`;
  } else {
    div.textContent = nodeData.label;
  }

  const label = new CSS2DObject(div);
  label.position.copy(mesh.position);
  label.position.y += mesh.scale.y + 2;
  label.visible = state.showLabels && nodeData.degree >= labelThreshold;
  scene.add(label);
  labelObjects.set(nodeData.id, label);
}

RAW_NODES.forEach(n => {
  const mesh = nodeObjects.get(n.id);
  if (mesh) createLabel(n, mesh);
});

// ------------------------------------------------------------
// Edge label (reusable, appears on hover)
// ------------------------------------------------------------
export const edgeLabelDiv = document.createElement('div');
edgeLabelDiv.className = 'edge-label';
export const edgeLabel = new CSS2DObject(edgeLabelDiv);
edgeLabel.visible = false;
scene.add(edgeLabel);

// ------------------------------------------------------------
// Physics (3D force-directed layout)
// ------------------------------------------------------------
let physicsIterations = 0;
const maxPhysicsIterations = 300;

RAW_NODES.forEach(n => velocities.set(n.id, new THREE.Vector3(0, 0, 0)));

export function setPhysics(enabled) {
  state.physicsEnabled = enabled;
  if (enabled) physicsIterations = 0;
}

export function applyForces() {
  if (!state.physicsEnabled) return;

  const repulsionStrength = 500;
  const attractionStrength = 0.005;
  const damping = 0.85;
  const centerGravity = 0.001;
  const maxVelocity = 10;

  // Repulsion between nodes (sample for performance)
  const sampleSize = Math.min(200, nodeMeshes.length);
  const step = Math.max(1, Math.floor(nodeMeshes.length / sampleSize));

  for (let i = 0; i < nodeMeshes.length; i += step) {
    const meshA = nodeMeshes[i];
    if (stickyNodes.has(meshA.userData.nodeId)) continue;
    const velA = velocities.get(meshA.userData.nodeId);

    for (let j = i + step; j < nodeMeshes.length; j += step) {
      const meshB = nodeMeshes[j];
      const velB = velocities.get(meshB.userData.nodeId);

      const dx = meshA.position.x - meshB.position.x;
      const dy = meshA.position.y - meshB.position.y;
      const dz = meshA.position.z - meshB.position.z;
      const distSq = dx * dx + dy * dy + dz * dz + 0.01;
      const dist = Math.sqrt(distSq);

      if (dist > 200) continue;

      const force = repulsionStrength / distSq;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      const fz = (dz / dist) * force;

      velA.x += fx;
      velA.y += fy;
      velA.z += fz;
      if (!stickyNodes.has(meshB.userData.nodeId)) {
        velB.x -= fx;
        velB.y -= fy;
        velB.z -= fz;
      }
    }
  }

  // Attraction along edges
  edgeList.forEach(({ fromMesh, toMesh, edge }) => {
    const fromSticky = stickyNodes.has(edge.from);
    const toSticky = stickyNodes.has(edge.to);
    if (fromSticky && toSticky) return;
    const velFrom = velocities.get(edge.from);
    const velTo = velocities.get(edge.to);

    const dx = toMesh.position.x - fromMesh.position.x;
    const dy = toMesh.position.y - fromMesh.position.y;
    const dz = toMesh.position.z - fromMesh.position.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz + 0.01);

    const idealLength = 50 + (fromMesh.userData.nodeData.degree + toMesh.userData.nodeData.degree) * 0.5;
    const force = (dist - idealLength) * attractionStrength;

    const fx = (dx / dist) * force;
    const fy = (dy / dist) * force;
    const fz = (dz / dist) * force;

    if (!fromSticky) {
      velFrom.x += fx;
      velFrom.y += fy;
      velFrom.z += fz;
    }
    if (!toSticky) {
      velTo.x -= fx;
      velTo.y -= fy;
      velTo.z -= fz;
    }
  });

  // Center gravity
  nodeMeshes.forEach(mesh => {
    if (stickyNodes.has(mesh.userData.nodeId)) return;
    const vel = velocities.get(mesh.userData.nodeId);
    vel.x -= mesh.position.x * centerGravity;
    vel.y -= mesh.position.y * centerGravity;
    vel.z -= mesh.position.z * centerGravity;
  });

  // Apply velocities with damping
  nodeMeshes.forEach(mesh => {
    const nodeId = mesh.userData.nodeId;
    if (stickyNodes.has(nodeId)) return;
    const vel = velocities.get(nodeId);
    vel.multiplyScalar(damping);

    const speed = vel.length();
    if (speed > maxVelocity) {
      vel.multiplyScalar(maxVelocity / speed);
    }

    mesh.position.add(vel);

    const label = labelObjects.get(nodeId);
    if (label) {
      label.position.copy(mesh.position);
      label.position.y += mesh.scale.y + 2;
    }
  });

  // Update edge positions
  for (let i = 0; i < edgeList.length; i++) {
    const { fromMesh, toMesh } = edgeList[i];
    const p = i * 6;
    edgePositions[p] = fromMesh.position.x;
    edgePositions[p + 1] = fromMesh.position.y;
    edgePositions[p + 2] = fromMesh.position.z;
    edgePositions[p + 3] = toMesh.position.x;
    edgePositions[p + 4] = toMesh.position.y;
    edgePositions[p + 5] = toMesh.position.z;
  }
  edgePosAttr.needsUpdate = true;

  // Update edge label position if hovering an edge
  if (state.hoveredEdge && edgeLabel.visible) {
    const fromMesh = nodeObjects.get(state.hoveredEdge.from);
    const toMesh = nodeObjects.get(state.hoveredEdge.to);
    if (fromMesh && toMesh) edgeLabel.position.copy(midpoint(fromMesh.position, toMesh.position));
  }

  physicsIterations++;
  if (physicsIterations >= maxPhysicsIterations) {
    state.physicsEnabled = false;
    document.getElementById('btn-physics').classList.remove('active');
  }
}

// ------------------------------------------------------------
// Sticky node visual indicator
// ------------------------------------------------------------
const stickyRingGeometry = new THREE.TorusGeometry(1, 0.06, 8, 32);
const stickyRingMaterial = new THREE.MeshBasicMaterial({ color: 0x4E79A7, transparent: true, opacity: 0.7 });
const stickyRings = new Map();

export function addStickyRing(mesh) {
  if (stickyRings.has(mesh.userData.nodeId)) return;
  const ring = new THREE.Mesh(stickyRingGeometry, stickyRingMaterial);
  ring.scale.set(mesh.scale.x * 1.5, mesh.scale.x * 1.5, mesh.scale.x * 1.5);
  ring.position.copy(mesh.position);
  ring.lookAt(camera.position);
  scene.add(ring);
  stickyRings.set(mesh.userData.nodeId, ring);
  requestRender();
}

export function removeStickyRing(nodeId) {
  const ring = stickyRings.get(nodeId);
  if (ring) {
    scene.remove(ring);
    stickyRings.delete(nodeId);
    requestRender();
  }
}

export function updateStickyRings() {
  stickyRings.forEach((ring, nodeId) => {
    const mesh = nodeObjects.get(nodeId);
    if (mesh) {
      ring.position.copy(mesh.position);
      ring.lookAt(camera.position);
    }
  });
}

// ------------------------------------------------------------
// Label visibility helpers
// ------------------------------------------------------------

// Rough on-screen half-extents (px) of a node's label box, matching the
// 13px/11px CSS sizes in three-graph.css. Only used for overlap tests —
// slight overestimates are fine since "some overlap is okay".
function labelHalfExtents(nodeData) {
  const hasZh = !!(TRANSLATIONS[nodeData.label] && TRANSLATIONS[nodeData.label] !== nodeData.label);
  const hw = Math.min(nodeData.label.length, 14) * 3.4 + 8; // ~0.6 × font-size per char
  const hh = hasZh ? 16 : 10;
  return { hw, hh };
}

// Greedy screen-space decluttering: candidates (already gated by the degree
// threshold) are kept in descending degree order; a label is dropped when its
// projected box overlaps an already-kept one. The 0.85 shrink factor lets
// near-misses through, so sparse areas keep every label and only crowded
// clusters thin out.
function declutteredLabelIds() {
  const w = container.clientWidth;
  const h = container.clientHeight;
  const candidates = [];
  labelObjects.forEach((label, id) => {
    const nodeData = nodeMap.get(id);
    const mesh = nodeObjects.get(id);
    if (!state.showLabels || !nodeData || nodeData.degree < labelThreshold) return;
    if (!mesh || !mesh.visible) return;
    const v = mesh.position.clone().project(camera);
    if (v.z > 1 || v.x < -1.2 || v.x > 1.2 || v.y < -1.2 || v.y > 1.2) return; // behind camera / far off-screen
    const { hw, hh } = labelHalfExtents(nodeData);
    candidates.push({
      id,
      degree: nodeData.degree,
      x: (v.x * 0.5 + 0.5) * w,
      y: (-v.y * 0.5 + 0.5) * h,
      hw, hh,
    });
  });
  candidates.sort((a, b) => b.degree - a.degree);
  const kept = [];
  const visible = new Set();
  for (const c of candidates) {
    const clash = kept.some((k) =>
      Math.abs(k.x - c.x) < (k.hw + c.hw) * 0.85 &&
      Math.abs(k.y - c.y) < (k.hh + c.hh)
    );
    if (!clash) {
      kept.push(c);
      visible.add(c.id);
    }
  }
  return visible;
}

export function setLabelVisibility(visibleIds) {
  labelObjects.forEach((label, id) => {
    const mesh = nodeObjects.get(id);
    label.visible = visibleIds.has(id) && mesh && mesh.visible && state.showLabels;
  });
  requestRender();
}

export function setAllLabelVisibility() {
  const visibleIds = declutteredLabelIds();
  labelObjects.forEach((label, id) => {
    label.visible = visibleIds.has(id);
  });
  requestRender();
}

export function restoreDefaultLabels() {
  // If a trace is active, don't restore default labels
  if (state.activeTrace) return;
  setAllLabelVisibility();
}

export function showHoverLabels(nodeId) {
  // If a trace is active and no node is selected, keep trace labels
  if (state.activeTrace && !state.selectedNode) return;
  const neighbors = adjacency.get(nodeId) || [];
  const neighborIds = new Set(neighbors.map(n => n.target));
  neighborIds.add(nodeId);
  setLabelVisibility(neighborIds);
  requestRender();
}

export function restoreSelectedLabels() {
  if (!state.selectedNode) {
    restoreDefaultLabels();
    return;
  }
  const neighbors = adjacency.get(state.selectedNode) || [];
  const neighborIds = new Set(neighbors.map(n => n.target));
  neighborIds.add(state.selectedNode);
  setLabelVisibility(neighborIds);
  requestRender();
}

// ------------------------------------------------------------
// Highlight primitives + visual-state reset
// ------------------------------------------------------------
export function applyNodeState(onSet, onOpacity, onEmissive, offOpacity, offEmissive) {
  nodeMeshes.forEach(m => {
    const on = onSet.has(m.userData.nodeId);
    m.material.opacity = on ? onOpacity : offOpacity;
    m.material.emissiveIntensity = on ? onEmissive : offEmissive;
  });
  requestRender();
}

export function applyEdgeState(isOn, onColor, onOpacity, offColor, offOpacity) {
  edgeList.forEach(({ edge }) => {
    const on = isOn(edge);
    setEdgeVisual(edge, on ? onColor : offColor, on ? onOpacity : offOpacity);
  });
  requestRender();
}

export function resetVisualState() {
  nodeMeshes.forEach(m => {
    m.material.emissiveIntensity = 0.15;
    m.material.opacity = 0.92;
  });
  edgeList.forEach(({ edge }) => {
    const ba = (edge.color && edge.color.opacity != null ? edge.color.opacity : 1) * 0.6;
    setEdgeVisual(edge, edgeOffColor(), ba);
  });
  restoreDefaultLabels();
  requestRender();
}

// ------------------------------------------------------------
// Zoom bar math
// ------------------------------------------------------------
export function getZoomFraction() {
  const dist = camera.position.distanceTo(controls.target);
  const minD = controls.minDistance;
  const maxD = controls.maxDistance;
  // 0 = zoomed out (far), 1 = zoomed in (close)
  return 1 - (Math.log(dist) - Math.log(minD)) / (Math.log(maxD) - Math.log(minD));
}

export function setZoomFromFraction(frac) {
  const minD = controls.minDistance;
  const maxD = controls.maxDistance;
  const dist = minD * Math.pow(maxD / minD, 1 - frac);
  const dir = camera.position.clone().sub(controls.target).normalize();
  camera.position.copy(controls.target).addScaledVector(dir, dist);
  controls.update();
}

let lastZoomPct = -1;

export function updateZoomBar() {
  const frac = getZoomFraction();
  const pct = Math.max(0, Math.min(1, frac)) * 100;
  const rounded = Math.round(pct);
  if (rounded === lastZoomPct) return;
  lastZoomPct = rounded;
  const fill = document.getElementById('zoom-slider-fill');
  const thumb = document.getElementById('zoom-slider-thumb');
  fill.style.height = pct + '%';
  thumb.style.bottom = `calc(${pct}% - 6px)`;
}

// ------------------------------------------------------------
// Camera animation + vector helpers
// ------------------------------------------------------------
export const CAMERA_OFFSET = new THREE.Vector3(160, 40, 80);

export function midpoint(a, b) {
  return new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
}

export function animateCamera(targetPosition, lookAtTarget) {
  const startPos = camera.position.clone();
  const startTarget = controls.target.clone();
  const duration = 800;
  const startTime = Date.now();

  function frame() {
    const elapsed = Date.now() - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = 1 - Math.pow(1 - t, 3);

    camera.position.lerpVectors(startPos, targetPosition, eased);
    controls.target.lerpVectors(startTarget, lookAtTarget, eased);
    controls.update();

    if (t < 1) requestAnimationFrame(frame);
  }
  frame();
}
