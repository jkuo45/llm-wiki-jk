// Three.js scene construction + shared scene-level helpers.
// Builds nodes/edges/labels once, provides physics, zoom, sticky rings,
// label-visibility and highlight primitives used by interaction/ui/prompt.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

import { RAW_NODES, RAW_EDGES, LEGEND, TRANSLATIONS, nodeMap, adjacency } from './data.js';
import { state, stickyNodes, velocities } from './state.js';
import { esc } from './markdown.js';

// Restore the persisted view toggles BEFORE the scene builds, so the initial
// creation passes (createLabel visibility, edgeSegments visibility) honour them.
state.showLabels = state.settings.showLabels !== false;

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

// Resting edge colours by edge kind: wikilink edges (`links_to`, from the
// wiki graph) render gray; triples-extracted relation edges render orange.
// The resting alpha and (optionally) a single override colour come from the
// persisted user settings (state.settings — see state.js). Highlight code
// paths (hover, selection, traces) call edgeOffColor() instead so dimming
// states read correctly on either background.
const WIKI_EDGE_HEX = 0x9AA3B2;   // gray — links_to
const TRIPLE_EDGE_HEX = 0xE8833A; // orange — triples-extracted edges

export function edgeRestingStyle(edge) {
  const s = state.settings;
  if (s.edgeColorMode === 'mono') {
    const hex = parseInt(String(s.edgeColor).replace('#', ''), 16);
    if (!Number.isNaN(hex)) return { hex, alpha: s.edgeOpacity };
  }
  return edge && edge.label === 'links_to'
    ? { hex: WIKI_EDGE_HEX, alpha: s.edgeOpacity }
    : { hex: TRIPLE_EDGE_HEX, alpha: s.edgeOpacity };
}

// Apply the active theme to the 3D scene (background). Resting edge colours
// (gray/orange by edge kind) are theme-invariant, so edges need no recolour on
// switch — highlighted/selected edges keep their accent across the toggle. DOM
// surfaces (node labels, tooltips, panels) are themed by the light stylesheet.
export function applyGraphTheme(light) {
  state.theme = light ? 'light' : 'dark';
  scene.background = new THREE.Color(light ? SCENE_BG_LIGHT : SCENE_BG_DARK);
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

// Render-quality presets: devicePixelRatio caps. 'retina' is the default;
// 'performance' renders below 1× and upscales (GPU-bound scenes only).
const RENDER_QUALITY_PR = { retina: 2, standard: 1, performance: 0.75 };
function pixelRatioFor(quality) {
  const cap = RENDER_QUALITY_PR[quality] != null ? RENDER_QUALITY_PR[quality] : RENDER_QUALITY_PR.retina;
  return Math.min(window.devicePixelRatio || 1, cap);
}
export function setRenderQuality(quality) {
  state.settings.renderQuality = quality;
  const pr = pixelRatioFor(quality);
  renderer.setPixelRatio(pr);
  if (minimap.setQuality) minimap.setQuality(pr);
  requestRender();
}

export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
// Persisted render-quality setting (see pixelRatioFor / setRenderQuality).
renderer.setPixelRatio(pixelRatioFor(state.settings.renderQuality));
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
// Camera interaction settings (settings modal).
controls.zoomSpeed = state.settings.zoomSpeed || 1.2;
controls.autoRotate = !!state.settings.autoRotate && !state.settings.reduceMotion;
controls.autoRotateSpeed = state.settings.autoRotateSpeed || 2;
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
// Live sticky-node indicator rings (torus meshes), keyed by node id. Declared
// here so visibility recompute (applyNodeVisibility) can hide rings of hidden
// nodes from the very first module-init call.
const stickyRings = new Map();

// Label degree threshold is zoom-relative: zoomed out only hubs are labeled,
// zooming in progressively reveals lower-degree labels. The user's label
// sensitivity setting (0–100, 50 = these defaults) scales the whole range:
// higher sensitivity → lower thresholds → more labels on screen.
const LABEL_THRESHOLD_FAR = 60;   // zoomed out (min labels)
const LABEL_THRESHOLD_NEAR = 10;  // zoomed in (max labels)

function labelThresholdScale() {
  // sensitivity 0   → ×2 (hubs only)
  // sensitivity 50  → ×1 (original behaviour)
  // sensitivity 100 → ×0 (every node is a candidate, decluttering still applies)
  return Math.max(0, 1 - (state.settings.labelSensitivity - 50) / 50);
}

function currentLabelThreshold() {
  const frac = Math.max(0, Math.min(1, getZoomFraction())); // 0 = far, 1 = close
  const m = labelThresholdScale();
  const far = LABEL_THRESHOLD_FAR * m;
  const near = LABEL_THRESHOLD_NEAR * m;
  return far + (near - far) * frac;
}

// Low segment count: at graph scale the spheres are tiny, and halving the
// vertex cost across ~2.6k draw calls matters far more than silhouette
// smoothness (16x12 → 10x8 ≈ 50% fewer triangles).
const sphereGeometry = new THREE.SphereGeometry(1, 10, 8);

// Upper bound for sqrt-normalised PageRank sizing (sizeMetric = 'pagerank').
const MAX_PAGERANK = Math.max(...RAW_NODES.map(n => n.pagerank || 0), 1e-12);

// Base (unscaled) node radius per the size-metric setting. The persisted
// node-size multiplier is applied on top (see applyNodeSizes).
function baseRadiusFor(nodeData) {
  switch (state.settings.sizeMetric) {
    case 'degree':
      return 1.5 + Math.sqrt(nodeData.degree || 0) * 1.8;
    case 'pagerank':
      return 1.5 + 12 * Math.sqrt((nodeData.pagerank || 0) / MAX_PAGERANK);
    case 'uniform':
      return 3;
    default:
      return Math.max(1.5, nodeData.size * 0.4); // precomputed combined metric
  }
}

function createNodeMesh(nodeData) {
  const baseRadius = baseRadiusFor(nodeData);
  const radius = baseRadius * (state.settings.nodeSizeScale || 1);
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
  mesh.userData = { nodeId: nodeData.id, nodeData, baseRadius };
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
const edgeHex = [];                    // last-set color hex per edge (theme restore)
const edgeAlphaVal = [];               // last-set alpha per edge
const edgeFiltered = [];               // 1 = hidden by prompt node filter
export let edgePositions, edgePosAttr;
let edgeColors, edgeAlphas, edgeColorAttr, edgeAlphaAttr;
// For each node id, the segment indexes of the edges touching it. Lets
// interaction.js update only the edges that actually move during a drag
// instead of scanning every edge on each pointermove.
export const edgeSegmentsByNode = new Map();
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

// ------------------------------------------------------------
// Central node/edge visibility. Two filters compose here so they can never
// fight over the same `visible` flag:
//   • min-degree setting  (state.settings.minDegree — settings modal)
//   • analysis prompt filter (analysis.js registers its highlighted id-set
//     here instead of writing mesh.visible / edge filters directly)
// Labels follow automatically — every label pass checks mesh.visible.
// ------------------------------------------------------------
export const visibilityRegistry = { promptEnabled: false, promptIds: null };

function degreeVisible(id) {
  const n = nodeMap.get(id);
  return !n || (n.degree || 0) >= state.settings.minDegree;
}

function promptVisible(id) {
  const p = visibilityRegistry;
  return !p.promptEnabled || !!(p.promptIds && p.promptIds.has(id));
}

// Edge confidence gate (settings modal): hides extraction edges whose score
// falls below the threshold. Edges without a score (or threshold 0) pass.
function edgeConfidenceVisible(edge) {
  const min = state.settings.edgeMinConfidence;
  if (!min) return true;
  return edge.confidence_score == null || edge.confidence_score >= min;
}

// Recompute mesh.visible for every node and the hidden flag for every edge
// from the composing filters. Safe to call during an active trace or
// selection: highlight styling lives in the material/edge visual arrays and
// is untouched; only visibility changes.
export function applyNodeVisibility() {
  nodeMeshes.forEach(m => {
    m.visible = degreeVisible(m.userData.nodeId) && promptVisible(m.userData.nodeId);
  });
  edgeList.forEach(({ edge }) => {
    const endsOK = degreeVisible(edge.from) && promptVisible(edge.from) &&
      degreeVisible(edge.to) && promptVisible(edge.to);
    setEdgeFilter(edge, !endsOK || !edgeConfidenceVisible(edge));
  });
  // A sticky (dragged) node that gets hidden by a filter must not leave its
  // indicator ring floating in place.
  stickyRings.forEach((ring, nodeId) => {
    const mesh = nodeObjects.get(nodeId);
    if (mesh) ring.visible = mesh.visible;
  });
  requestRender();
}

// Re-apply the resting edge style (settings-driven colour/alpha) to every
// edge. Callers must guard against clobbering active highlight states —
// see edgesAtRest() in ui.js.
export function applyRestingEdges() {
  edgeList.forEach(({ edge }) => {
    const rest = edgeRestingStyle(edge);
    setEdgeVisual(edge, rest.hex, rest.alpha);
  });
  requestRender();
}

// Recompute every node's base radius (size metric) and scale (size slider),
// then refresh label offsets (they ride on mesh.scale) and sticky rings.
function applyNodeSizes() {
  nodeMeshes.forEach(m => {
    m.userData.baseRadius = baseRadiusFor(m.userData.nodeData);
    const r = m.userData.baseRadius * (state.settings.nodeSizeScale || 1);
    m.scale.set(r, r, r);
    const label = labelObjects.get(m.userData.nodeId);
    if (label) {
      label.position.copy(m.position);
      label.position.y += r + 2;
    }
  });
  stickyRings.forEach((ring, nodeId) => {
    const mesh = nodeObjects.get(nodeId);
    if (mesh) ring.scale.set(mesh.scale.x * 1.5, mesh.scale.x * 1.5, mesh.scale.x * 1.5);
  });
  requestRender();
}

// Re-derive node radii from the persisted scale (slider 0.5–2×).
export function setNodeSizeScale(scale) {
  state.settings.nodeSizeScale = scale;
  applyNodeSizes();
}

// Switch the sizing basis (default combined metric / degree / pagerank / uniform).
export function setSizeMetric(metric) {
  state.settings.sizeMetric = metric;
  applyNodeSizes();
}

// Apply the label size setting as a CSS custom property (base .node-label
// font-size); the .zh sub-label scales via calc() in the stylesheet.
export function applyLabelSize(px) {
  document.documentElement.style.setProperty('--node-label-size', `${px}px`);
}

// Re-run the default label layout after a setting that affects it (label
// sensitivity, label size, min-degree). Respects active traces/selections.
export function refreshLabelLayout() {
  if (state.activeTrace) return;
  if (state.selectedNode) { restoreSelectedLabels(); return; }
  setAllLabelVisibility();
}

// Re-render every label's text for the label-language setting and re-run the
// declutter layout (line count affects the overlap heuristic).
export function applyLabelLanguage() {
  labelObjects.forEach((label, id) => {
    const nd = nodeMap.get(id);
    if (nd && label.element) label.element.innerHTML = labelHtmlFor(nd);
  });
  refreshLabelLayout();
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
for (let i = 0; i < E; i++) {
  const { fromMesh, toMesh, edge } = edgeList[i];
  const p = i * 6;
  edgePositions[p] = fromMesh.position.x;
  edgePositions[p + 1] = fromMesh.position.y;
  edgePositions[p + 2] = fromMesh.position.z;
  edgePositions[p + 3] = toMesh.position.x;
  edgePositions[p + 4] = toMesh.position.y;
  edgePositions[p + 5] = toMesh.position.z;
  // Resting style: gray for links_to (wikilinks), orange for triples edges.
  const rest = edgeRestingStyle(edge);
  edgeHex[i] = rest.hex;
  edgeAlphaVal[i] = rest.alpha;
  edgeFiltered[i] = 0;
  _edgeColor.set(rest.hex);
  for (let k = 0; k < 2; k++) {
    const o = p + k * 3;
    edgeColors[o] = _edgeColor.r;
    edgeColors[o + 1] = _edgeColor.g;
    edgeColors[o + 2] = _edgeColor.b;
  }
  edgeAlphas[i * 2] = rest.alpha;
  edgeAlphas[i * 2 + 1] = rest.alpha;
  edgeToIndex.set(edge, i);
  let segs = edgeSegmentsByNode.get(edge.from);
  if (!segs) { segs = []; edgeSegmentsByNode.set(edge.from, segs); }
  segs.push(i);
  segs = edgeSegmentsByNode.get(edge.to);
  if (!segs) { segs = []; edgeSegmentsByNode.set(edge.to, segs); }
  segs.push(i);
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
// Persisted Edges toggle (settings modal).
edgeSegments.visible = state.settings.showEdges !== false;
// Honour the persisted min-degree filter from the first frame (labels are
// created after this, and createLabel checks mesh.visible).
applyNodeVisibility();

// ------------------------------------------------------------
// Labels (only for high-degree nodes initially). Event handlers
// are attached by interaction.js via attachLabelHandlers().
// ------------------------------------------------------------
// Node label text per the label-language setting. 'both' (default) stacks the
// Chinese translation under the English label; 'en'/'zh' show one line (zh
// falls back to the English label when no translation exists).
function labelHtmlFor(nodeData) {
  const zhTWLabel = TRANSLATIONS[nodeData.label] || '';
  const hasZh = !!(zhTWLabel && zhTWLabel !== nodeData.label);
  const lang = state.settings.labelLang;
  if (lang === 'zh' && hasZh) return esc(zhTWLabel);
  if (lang !== 'en' && hasZh) {
    return `${esc(nodeData.label)}<br><span class="zh">${esc(zhTWLabel)}</span>`;
  }
  return esc(nodeData.label);
}

function createLabel(nodeData, mesh) {
  const div = document.createElement('div');
  div.className = 'node-label';
  div.dataset.nodeId = nodeData.id;
  div.innerHTML = labelHtmlFor(nodeData);

  const label = new CSS2DObject(div);
  label.position.copy(mesh.position);
  label.position.y += mesh.scale.y + 2;
  // mesh.visible honours the min-degree / prompt filters (applyNodeVisibility).
  label.visible = state.showLabels && nodeData.degree >= currentLabelThreshold() && mesh.visible;
  scene.add(label);
  labelObjects.set(nodeData.id, label);
}

RAW_NODES.forEach(n => {
  const mesh = nodeObjects.get(n.id);
  if (mesh) createLabel(n, mesh);
});

// Apply the persisted label size before the first render.
applyLabelSize(state.settings.labelSize);

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
// .node-label CSS sizes (base 13px / .zh 11px, scaled by the --node-label-size
// setting). Only used for overlap tests — slight overestimates are fine since
// "some overlap is okay".
function labelHalfExtents(nodeData) {
  const fs = (state.settings.labelSize || 13) / 13;
  const zhTWLabel = TRANSLATIONS[nodeData.label] || '';
  const hasZh = !!(zhTWLabel && zhTWLabel !== nodeData.label);
  // Only 'both' renders a second line; 'en'/'zh' are single-line.
  const hasZhLine = state.settings.labelLang !== 'en' && hasZh && state.settings.labelLang !== 'zh';
  const hw = (Math.min(nodeData.label.length, 14) * 3.4 + 8) * fs; // ~0.6 × font-size per char
  const hh = (hasZhLine ? 16 : 10) * fs;
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
  const _proj = new THREE.Vector3();
  labelObjects.forEach((label, id) => {
    const nodeData = nodeMap.get(id);
    const mesh = nodeObjects.get(id);
    if (!state.showLabels || !nodeData || nodeData.degree < currentLabelThreshold()) return;
    if (!mesh || !mesh.visible) return;
    const v = _proj.copy(mesh.position).project(camera);
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
    const rest = edgeRestingStyle(edge);
    setEdgeVisual(edge, rest.hex, rest.alpha);
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
  // Keep the slider's ARIA state in sync with the visual position.
  const track = document.getElementById('zoom-slider-track');
  if (track) track.setAttribute('aria-valuenow', rounded);
}

// ------------------------------------------------------------
// Camera animation + vector helpers
// ------------------------------------------------------------
export const CAMERA_OFFSET = new THREE.Vector3(160, 40, 80);

// Camera interaction setters (settings modal). The render loop calls
// controls.update() every frame, so auto-rotate keeps rendering on its own
// once enabled (update() reports movement → dirty frame).
export function setAutoRotate(enabled) {
  state.settings.autoRotate = !!enabled;
  controls.autoRotate = !!enabled && !state.settings.reduceMotion;
  requestRender();
}

export function setAutoRotateSpeed(speed) {
  state.settings.autoRotateSpeed = speed;
  controls.autoRotateSpeed = speed;
}

export function setZoomSpeed(speed) {
  state.settings.zoomSpeed = speed;
  controls.zoomSpeed = speed;
}

export function setReduceMotion(on) {
  state.settings.reduceMotion = !!on;
  // A spinning camera is exactly what reduce-motion exists to stop.
  if (on) controls.autoRotate = false;
  requestRender();
}

export function midpoint(a, b) {
  return new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
}

export function animateCamera(targetPosition, lookAtTarget) {
  const startPos = camera.position.clone();
  const startTarget = controls.target.clone();
  // Respect prefers-reduced-motion and the settings-modal Reduce-motion
  // toggle: skip the eased flight entirely.
  const reduceMotion = state.settings.reduceMotion ||
    (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (reduceMotion) {
    camera.position.copy(targetPosition);
    controls.target.copy(lookAtTarget);
    controls.update();
    return;
  }
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

// ------------------------------------------------------------
// Minimap — label-free top-down overview (bottom-right)
// A dedicated mini-scene (own points/lines geometry, updated from the live
// node positions each render) so it can highlight graph structure three ways:
//   • Community hulls — translucent convex hull per community (shape)
//   • Backbone-only   — just edges touching a "Core backbone" node (skeleton)
//   • Metric heat     — node tint by degree or betweenness (mass)
// An amber footprint line shows where the main camera sits and what it aims
// at; indicator + mini content live on layer 1, which the main camera never
// sees. DOM labels (CSS2D) are excluded automatically.
// ------------------------------------------------------------
export const minimap = (() => {
  // Rendered at the desktop size (220px) and CSS-scaled down on smaller
  // viewports, so the backing store always has enough pixels to stay crisp.
  const SIZE = 220;
  const CORE_ROLE = 'Core backbone';
  const MODES = ['community', 'degree', 'betweenness'];
  const MODE_LABEL = { community: 'Communities', degree: 'Degree', betweenness: 'Betweenness' };

  const el = document.createElement('div');
  el.id = 'graph-minimap';
  const canvas = document.createElement('canvas');
  el.appendChild(canvas);
  const controlsEl = document.createElement('div');
  controlsEl.className = 'minimap-controls';
  const modeBtn = document.createElement('button');
  modeBtn.type = 'button';
  modeBtn.className = 'minimap-mode-btn';
  modeBtn.title = 'Minimap colouring';
  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'minimap-backbone-btn';
  backBtn.textContent = '⌁';
  backBtn.title = 'Backbone-only edges';
  controlsEl.append(modeBtn, backBtn);
  // Fixed-orientation cue: the needle rotates opposite the map so it always
  // points at world north (-Z), while the N stays upright and legible.
  const northEl = document.createElement('div');
  northEl.className = 'minimap-north';
  northEl.innerHTML = '<div class="minimap-needle">▲</div><div class="minimap-n">N</div>';
  el.appendChild(northEl);
  const needleEl = northEl.querySelector('.minimap-needle');
  el.appendChild(controlsEl);
  container.appendChild(el);

  const miniRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  miniRenderer.setSize(SIZE, SIZE, false);
  miniRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // Heading-following top-down view: the ortho camera sits above the graph
  // centre, but its `up` vector tracks the main camera's horizontal viewing
  // direction, so the map rotates as you orbit — your heading always points
  // up-screen (GPS-style). Falls back to the last heading when looking
  // straight down/up (no horizontal component).
  const miniCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 5000);
  const lastUp = new THREE.Vector3(0, 0, -1);
  miniCamera.up.copy(lastUp);
  miniCamera.position.set(0, 1000, 0);
  miniCamera.lookAt(0, 0, 0);
  miniCamera.layers.enable(1);

  const miniScene = new THREE.Scene();
  const layer1 = (o) => { o.layers.set(1); return o; };

  // ---- Node points (one vertex per node; colours swapped per mode) ----
  const nodes = RAW_NODES.filter((n) => nodeMap.has(n.id));
  const nodeCount = nodes.length;
  const positions = new Float32Array(nodeCount * 3);
  const communityColors = new Float32Array(nodeCount * 3);
  const degreeColors = new Float32Array(nodeCount * 3);
  const betweennessColors = new Float32Array(nodeCount * 3);
  const legendColor = new Map(LEGEND.map((l) => [l.cid, l.color]));
  const tmpColor = new THREE.Color();

  // Heat ramp for metric modes: muted steel → amber → hot red.
  const HEAT_LOW = new THREE.Color('#5a6c8c');
  const HEAT_MID = new THREE.Color('#E8A33D');
  const HEAT_HIGH = new THREE.Color('#E4575E');

  function heatColor(t) {
    if (t < 0.6) return tmpColor.copy(HEAT_LOW).lerp(HEAT_MID, t / 0.6);
    return tmpColor.copy(HEAT_MID).lerp(HEAT_HIGH, (t - 0.6) / 0.4);
  }

  const maxDegree = Math.max(...nodes.map((n) => n.degree || 0), 1);
  const maxBetween = Math.max(...nodes.map((n) => n.betweenness || 0), 1e-12);
  const isCore = nodes.map((n) => (n.roles || []).includes(CORE_ROLE));

  nodes.forEach((n, i) => {
    // Community colours come straight from the legend (matches main view).
    tmpColor.set(legendColor.get(n.community) || '#888888');
    communityColors.set([tmpColor.r, tmpColor.g, tmpColor.b], i * 3);
    // Perceptual sqrt scaling — hubs pop without drowning the mid-field.
    heatColor(Math.sqrt((n.degree || 0) / maxDegree));
    degreeColors.set([tmpColor.r, tmpColor.g, tmpColor.b], i * 3);
    heatColor(Math.sqrt((n.betweenness || 0) / maxBetween));
    betweennessColors.set([tmpColor.r, tmpColor.g, tmpColor.b], i * 3);
  });

  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const colorAttr = new THREE.BufferAttribute(communityColors, 3);
  pointsGeo.setAttribute('color', colorAttr);
  const nodePoints = layer1(new THREE.Points(pointsGeo, new THREE.PointsMaterial({
    size: 3.5, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.95,
  })));
  miniScene.add(nodePoints);

  // ---- Edges: full graph + backbone subset (either endpoint is core) ----
  const edgePairs = [];
  RAW_EDGES.forEach((e) => {
    const a = nodeMap.get(e.from), b = nodeMap.get(e.to);
    if (a && b) edgePairs.push([a.id, b.id]);
  });

  function makeEdgeLines(pairs, color, opacity) {
    const arr = new Float32Array(pairs.length * 6);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    const lines = layer1(new THREE.LineSegments(geo, new THREE.LineBasicMaterial({
      color, transparent: true, opacity,
    })));
    miniScene.add(lines);
    return { lines, pairs, arr };
  }

  const allEdges = makeEdgeLines(edgePairs, 0x555f7a, 0.35);
  const backboneEdges = makeEdgeLines(
    edgePairs.filter(([a, b]) => {
      const na = nodeMap.get(a), nb = nodeMap.get(b);
      return (na.roles || []).includes(CORE_ROLE) || (nb.roles || []).includes(CORE_ROLE);
    }),
    0xE8A33D, 0.8
  );
  backboneEdges.lines.visible = false;

  // ---- Community convex hulls (monotone chain over XZ, rebuilt per render) ----
  const byCommunity = new Map();
  nodes.forEach((n) => {
    if (!byCommunity.has(n.community)) byCommunity.set(n.community, []);
    byCommunity.get(n.community).push(n.id);
  });

  function convexHull(pts) {
    if (pts.length < 3) return pts;
    const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [];
    for (const pt of p) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pt) <= 0) lower.pop();
      lower.push(pt);
    }
    const upper = [];
    for (let i = p.length - 1; i >= 0; i--) {
      const pt = p[i];
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pt) <= 0) upper.pop();
      upper.push(pt);
    }
    upper.pop(); lower.pop();
    return lower.concat(upper);
  }

  const hullGroup = layer1(new THREE.Group());
  miniScene.add(hullGroup);
  const posOf = new Map(nodes.map((n) => [n.id, new THREE.Vector3()]));
  // Preallocated per-community hull lines: position buffers are sized for the
  // worst-case hull (every member + the closing point) and reused every
  // render — refreshHulls only rewrites the used prefix and adjusts the draw
  // range, so steady-state rendering allocates nothing. (The buffers contain
  // stale zeros beyond the draw range, so culling is disabled.)
  const hullLines = [];
  byCommunity.forEach((ids, cid) => {
    if (ids.length < 3) return;
    const arr = new Float32Array((ids.length + 1) * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    geo.setDrawRange(0, 0);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: new THREE.Color(legendColor.get(cid) || '#888888'), transparent: true, opacity: 0.35,
    }));
    line.frustumCulled = false;
    hullGroup.add(line);
    hullLines.push({ geo, ids, arr });
  });

  function refreshHulls() {
    for (const { geo, ids, arr } of hullLines) {
      const pts = [];
      for (const id of ids) {
        const v = posOf.get(id);
        if (v) pts.push([v.x, v.z]);
      }
      const hull = convexHull(pts);
      if (hull.length < 3) { geo.setDrawRange(0, 0); continue; }
      let o = 0;
      for (const [x, z] of hull) { arr[o++] = x; arr[o++] = 0; arr[o++] = z; }
      arr[o] = hull[0][0]; arr[o + 1] = 0; arr[o + 2] = hull[0][1]; // close the loop
      geo.setDrawRange(0, hull.length + 1);
      geo.attributes.position.needsUpdate = true;
    }
  }

  // ---- Camera footprint indicator (amber) ----
  const indicatorColor = 0xE8A33D;
  const indicator = new THREE.Group();
  // Preallocated two-point buffer — rewritten (not reallocated) each render.
  const camLineArr = new Float32Array(6);
  const camLineGeo = new THREE.BufferGeometry();
  camLineGeo.setAttribute('position', new THREE.BufferAttribute(camLineArr, 3));
  const camLine = new THREE.Line(camLineGeo, new THREE.LineBasicMaterial({ color: indicatorColor }));
  const targetDot = new THREE.Mesh(
    new THREE.CircleGeometry(5, 16),
    new THREE.MeshBasicMaterial({ color: indicatorColor })
  );
  targetDot.rotation.x = -Math.PI / 2; // face up
  indicator.add(camLine, targetDot);
  indicator.traverse((o) => o.layers.set(1));
  miniScene.add(indicator);

  // ---- Controls wiring ----
  let modeIdx = 0;
  function applyMode() {
    const mode = MODES[modeIdx];
    modeBtn.textContent = MODE_LABEL[mode];
    colorAttr.array = mode === 'community' ? communityColors
      : mode === 'degree' ? degreeColors : betweennessColors;
    colorAttr.needsUpdate = true;
    hullGroup.visible = mode === 'community';
    requestRender();
  }
  modeBtn.addEventListener('click', () => {
    modeIdx = (modeIdx + 1) % MODES.length;
    applyMode();
  });
  backBtn.addEventListener('click', () => {
    state.minimapBackbone = !state.minimapBackbone;
    backBtn.classList.toggle('active', state.minimapBackbone);
    allEdges.lines.visible = !state.minimapBackbone;
    backboneEdges.lines.visible = state.minimapBackbone;
    requestRender();
  });
  applyMode();

  // ---- Per-render update + draw ----
  const box = new THREE.Box3();
  const center = new THREE.Vector3();
  const sizeV = new THREE.Vector3();
  const _miniFwd = new THREE.Vector3();

  function syncPositions() {
    nodes.forEach((n, i) => {
      const mesh = nodeObjects.get(n.id);
      const v = mesh ? mesh.position : posOf.get(n.id);
      if (!v) return;
      posOf.get(n.id).copy(mesh ? mesh.position : v);
      positions[i * 3] = v.x; positions[i * 3 + 1] = v.y; positions[i * 3 + 2] = v.z;
    });
    pointsGeo.attributes.position.needsUpdate = true;

    const fill = ({ pairs, arr, lines }) => {
      pairs.forEach(([a, b], j) => {
        const va = posOf.get(a), vb = posOf.get(b);
        const o = j * 6;
        if (!va || !vb) { arr[o] = arr[o + 3] = NaN; return; }
        arr[o] = va.x; arr[o + 1] = va.y; arr[o + 2] = va.z;
        arr[o + 3] = vb.x; arr[o + 4] = vb.y; arr[o + 5] = vb.z;
      });
      lines.geometry.attributes.position.needsUpdate = true;
    };
    fill(allEdges);
    fill(backboneEdges);
  }

  function render() {
    box.makeEmpty();
    for (const m of nodeMeshes) if (m.visible) box.expandByObject(m);
    if (box.isEmpty()) return;
    box.getCenter(center);
    box.getSize(sizeV);
    // Square-fit the graph bounds with a small margin.
    const half = Math.max(sizeV.x, sizeV.z) * 0.58 + 20;
    miniCamera.left = -half; miniCamera.right = half;
    miniCamera.top = -half; miniCamera.bottom = half;
    miniCamera.position.set(center.x, 1000, center.z);
    // Rotate the map with the current view: screen-up follows the main
    // camera's horizontal forward direction (camera → orbit target).
    const p = camera.position, t = controls.target;
    _miniFwd.subVectors(t, p);
    _miniFwd.y = 0;
    if (_miniFwd.lengthSq() > 1e-6) {
      lastUp.copy(_miniFwd.normalize());
    }
    miniCamera.up.copy(lastUp);
    miniCamera.lookAt(center.x, 0, center.z);
    miniCamera.updateProjectionMatrix();

    // North needle: world north (0,0,-1) in screen space sits at
    // atan2(-up.x, -up.z) clockwise from screen-up — rotate the needle by
    // exactly that so it always points at true north.
    needleEl.style.transform = `rotate(${Math.atan2(-lastUp.x, -lastUp.z)}rad)`;

    syncPositions();
    if (hullGroup.visible) refreshHulls();

    // Camera footprint: line from the main camera's XZ position to its target.
    camLineArr[0] = p.x; camLineArr[1] = 0; camLineArr[2] = p.z;
    camLineArr[3] = t.x; camLineArr[4] = 0; camLineArr[5] = t.z;
    camLineGeo.attributes.position.needsUpdate = true;
    targetDot.position.set(t.x, 0, t.z);

    miniRenderer.render(miniScene, miniCamera);
  }

  // Main-renderer quality changes propagate here so the overview stays crisp.
  function setQuality(pr) {
    miniRenderer.setPixelRatio(pr);
  }

  return { render, setQuality };
})();
