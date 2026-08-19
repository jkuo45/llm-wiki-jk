// Three.js scene construction + shared scene-level helpers.
// Builds nodes/edges/labels once, provides physics, zoom, sticky rings,
// label-visibility and highlight primitives used by interaction/ui/chat.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import { RAW_NODES, RAW_EDGES, LEGEND, TRANSLATIONS, nodeMap, adjacency } from './data.js';
import { state, stickyNodes, velocities } from './state.js';
import { esc } from './markdown.js';

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
  edgeObjects.forEach(line => {
    if (line.material.color.getHex() === oldOff) {
      line.material.color.set(newOff);
    }
  });
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
renderer.setPixelRatio(window.devicePixelRatio);
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
export const labelThreshold = 15;

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
// Edge objects
// ------------------------------------------------------------
export const edgeObjects = [];
export const edgeGroup = new THREE.Group();
scene.add(edgeGroup);

RAW_EDGES.forEach(e => {
  const fromMesh = nodeObjects.get(e.from);
  const toMesh = nodeObjects.get(e.to);
  if (!fromMesh || !toMesh) return;

  const geometry = new THREE.BufferGeometry().setFromPoints([fromMesh.position.clone(), toMesh.position.clone()]);
  const material = new THREE.LineBasicMaterial({
    color: EDGE_OFF_DARK,
    transparent: true,
    opacity: e.color.opacity * 0.6,
    linewidth: 1,
  });
  const line = new THREE.Line(geometry, material);
  line.userData = { edge: e, fromMesh, toMesh };
  edgeGroup.add(line);
  edgeObjects.push(line);
});

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
  edgeObjects.forEach(line => {
    const { fromMesh, toMesh, edge } = line.userData;
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
  edgeObjects.forEach(line => {
    const { fromMesh, toMesh } = line.userData;
    const positions = line.geometry.attributes.position;
    positions.setXYZ(0, fromMesh.position.x, fromMesh.position.y, fromMesh.position.z);
    positions.setXYZ(1, toMesh.position.x, toMesh.position.y, toMesh.position.z);
    positions.needsUpdate = true;
  });

  // Update edge label position if hovering an edge
  if (state.hoveredEdge && edgeLabel.visible) {
    const { fromMesh, toMesh } = state.hoveredEdge.userData;
    edgeLabel.position.copy(midpoint(fromMesh.position, toMesh.position));
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
}

export function removeStickyRing(nodeId) {
  const ring = stickyRings.get(nodeId);
  if (ring) {
    scene.remove(ring);
    stickyRings.delete(nodeId);
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
export function setLabelVisibility(visibleIds) {
  labelObjects.forEach((label, id) => {
    const mesh = nodeObjects.get(id);
    label.visible = visibleIds.has(id) && mesh && mesh.visible && state.showLabels;
  });
}

export function setAllLabelVisibility() {
  labelObjects.forEach((label, id) => {
    const nodeData = nodeMap.get(id);
    const mesh = nodeObjects.get(id);
    label.visible = state.showLabels && nodeData && nodeData.degree >= labelThreshold && mesh && mesh.visible;
  });
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
}

export function applyEdgeState(isOn, onColor, onOpacity, offColor, offOpacity) {
  edgeObjects.forEach(line => {
    const on = isOn(line);
    line.material.color.set(on ? onColor : offColor);
    line.material.opacity = on ? onOpacity : offOpacity;
  });
}

export function resetVisualState() {
  nodeMeshes.forEach(m => {
    m.material.emissiveIntensity = 0.15;
    m.material.opacity = 0.92;
  });
  edgeObjects.forEach(line => {
    line.material.opacity = line.userData.edge.color.opacity * 0.6;
    line.material.color.set(edgeOffColor());
  });
  restoreDefaultLabels();
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
