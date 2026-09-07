// cell.js — cytoplasm ("Cell") view: membrane + organelle anchors (Phase 1)
// + Brownian drift, role-based glow/pulse, minimap cell handling (Phase 2).
// Reads the active dataset (nodeObjects / nodeMeshes from core.js), so no
// pipeline or data-file changes are needed.

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { nodeMap } from './data.js';
import {
  scene, camera, nodeObjects, nodeMeshes, edgeList, setEdgeVisual,
  setAllLabelVisibility, setPhysics, animateCamera, requestRender,
  edgeRestingStyle, edgePosAttr, labelObjects, minimap,
} from './core.js';
import { state, persistSettings } from './state.js';
import { subscribeTheme } from './theme.js';

// Community-name (lowercase) substring match → organelle key.
// Wiki communities share names with triples (cids offset +1000), so match on
// name, never on numeric cid.
export const ORGANELLE_MAP = {
  nucleus: {
    label: 'Nucleus',
    color: 0x4E79A7,
    match: ['sirt1', 'sirt6', 'sirt7', 'aging', 'dna methylation', 'heterochromatin', 'parp', 'p53', 'chromatin'],
  },
  mitochondria: {
    label: 'Mitochondria',
    color: 0xE8833A,
    match: ['sirt3', 'sirt4', 'sirt5', 'mitochondria', 'mitophagy', 'ros', 'oxidative stress', 'nad+', 'atp', 'uqcr', 'complex i'],
  },
  lysosome: {
    label: 'Lysosome / Autophagy',
    color: 0x9C6BDE,
    match: ['tfeb', 'autophagy', 'mtor', 'apoptosis', 'bcl-2', 'ferroptosis', 'lysosom', 'mitophagy', 'p62', 'lc3'],
  },
  er: {
    label: 'Endoplasmic Reticulum',
    color: 0x7FB3D5,
    match: ['endoplasmic', 'reticulum', 'er stress', 'er-stress', 'unfolded protein response', 'eif2', 'xbp1', 'atf6'],
  },
  golgi: {
    label: 'Golgi Apparatus',
    color: 0xF2C14E,
    match: ['golgi', 'cisterna'],
  },
  peroxisome: {
    label: 'Peroxisome',
    color: 0x52C39C,
    match: ['peroxis'],
  },
  proteasome: {
    label: 'Proteasome',
    color: 0xC97B8A,
    match: ['proteasom', 'ubiquitin'],
  },
  membrane: {
    label: 'Membrane',
    color: 0x59A14F,
    // Extracellular signals / disease contexts sit on the membrane shell.
    match: ['adrenochrome', 'cancer', 'sasp', 'cgas-sting', 'sting', 'inflamm', 'il-6', 'il-8', 'il-1', 'atherosclerosis', 'foam cell'],
  },
  // Anything unmatched falls through to cytosol.
};

export function organelleFor(nodeData) {
  const name = String(nodeData.community_name || nodeData.label || '').toLowerCase();
  for (const [key, org] of Object.entries(ORGANELLE_MAP)) {
    if (key === 'membrane') continue; // membrane handled by caller preference below
    if (org.match.some((m) => name.includes(m))) return key;
  }
  // Membrane check last so generic terms (e.g. 'cancer') don't swallow nuclei.
  if (ORGANELLE_MAP.membrane.match.some((m) => name.includes(m))) return 'membrane';
  return 'cytosol';
}

let active = false;
let membrane = null;
let membraneWire = null;
let organelleGroup = null;
let savedPositions = new Map();
let savedEdgeAlpha = new Map();
let cellRadius = 300;
// Phase 2: drift + pulse state. driftBase holds the settled anchor position
// per node; the tick adds a small sinusoidal offset around it. transitioning
// is true during the enter/exit lerp so the tick doesn't fight the flight.
let driftBase = new Map();
let driftParams = new Map();
let pulseMeshes = [];
let rolesOwnScene = false;
let transitioning = false;

function reducedMotion() {
  return state.settings.reduceMotion ||
    (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

// True when a trace/selection owns node+edge styling — cell mode must not
// clobber it with role glow or the resting-edge dim.
function highlightOwnsScene() {
  return !!(state.activeTrace || state.selectedNode || state.selectedEdge);
}

function themeMembraneColor() {
  return state.theme === 'light' ? 0x0F766E : 0x4E79A7;
}

function computeRadius() {
  const center = new THREE.Vector3();
  nodeMeshes.forEach((m) => { if (m.visible) center.add(m.position); });
  const visible = nodeMeshes.filter((m) => m.visible).length || 1;
  center.divideScalar(visible);
  let max = 0;
  nodeMeshes.forEach((m) => {
    if (!m.visible) return;
    max = Math.max(max, m.position.distanceTo(center));
  });
  return { center, radius: Math.max(220, max * 1.3 + 60) };
}

function anchorOffsets(R) {
  return {
    nucleus: new THREE.Vector3(0, R * 0.30, 0),
    mitochondria: new THREE.Vector3(R * 0.44, -R * 0.16, R * 0.20),
    lysosome: new THREE.Vector3(-R * 0.44, -R * 0.20, -R * 0.16),
    er: new THREE.Vector3(-R * 0.02, -R * 0.44, R * 0.30),
    golgi: new THREE.Vector3(R * 0.34, R * 0.30, -R * 0.36),
    peroxisome: new THREE.Vector3(-R * 0.36, R * 0.36, R * 0.26),
    proteasome: new THREE.Vector3(R * 0.12, -R * 0.02, -R * 0.44),
    membrane: null, // shell placement, per-node direction
    cytosol: new THREE.Vector3(0, 0, 0),
  };
}

// Rendered organelle bodies: relative radius + optional y-flattening
// (ER/Golgi read as cisternae stacks when squashed).
const ORGANELLE_BLOBS = [
  { key: 'nucleus', r: 0.16, flat: 1 },
  { key: 'mitochondria', r: 0.09, flat: 1 },
  { key: 'lysosome', r: 0.07, flat: 1 },
  { key: 'er', r: 0.12, flat: 0.45 },
  { key: 'golgi', r: 0.075, flat: 0.5 },
  { key: 'peroxisome', r: 0.05, flat: 1 },
  { key: 'proteasome', r: 0.05, flat: 1 },
];

function targetFor(nodeData, anchors, R) {
  const org = organelleFor(nodeData);
  if (org === 'membrane') {
    // Deterministic pseudo-random shell direction from node id hash.
    let h = 0;
    for (let i = 0; i < nodeData.id.length; i++) h = (h * 31 + nodeData.id.charCodeAt(i)) >>> 0;
    const theta = (h % 628) / 100;
    const phi = (((h >> 8) % 314) / 314) * Math.PI;
    const r = R * 0.92;
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi) * 0.8,
      r * Math.sin(phi) * Math.sin(theta),
    );
  }
  const a = anchors[org] || anchors.cytosol;
  const spread = org === 'cytosol' ? R * 0.55 : 26 + Math.min(60, (nodeData.degree || 0) * 2.5);
  // Deterministic jitter from id hash so enter/exit is stable across toggles.
  let h = 7;
  for (let i = 0; i < nodeData.id.length; i++) h = (h * 33 + nodeData.id.charCodeAt(i)) >>> 0;
  const rnd = (s) => {
    h = (h * 1664525 + 1013904223 + s * 97) >>> 0;
    return (h % 1000) / 1000 - 0.5;
  };
  return new THREE.Vector3(a.x + rnd(1) * spread * 2, a.y + rnd(2) * spread * 2, a.z + rnd(3) * spread * 2);
}

function buildMembrane(center, R) {
  disposeCellObjects();
  const geo = new THREE.SphereGeometry(R, 40, 28);
  const mat = new THREE.MeshPhongMaterial({
    color: themeMembraneColor(), transparent: true, opacity: 0.06,
    side: THREE.DoubleSide, depthWrite: false, shininess: 80,
  });
  membrane = new THREE.Mesh(geo, mat);
  membrane.position.copy(center);
  membrane.renderOrder = -10;
  scene.add(membrane);
  const wgeo = new THREE.SphereGeometry(R * 1.001, 18, 12);
  const wmat = new THREE.MeshBasicMaterial({
    color: themeMembraneColor(), wireframe: true, transparent: true, opacity: 0.07, depthWrite: false,
  });
  membraneWire = new THREE.Mesh(wgeo, wmat);
  membraneWire.position.copy(center);
  scene.add(membraneWire);

  organelleGroup = new THREE.Group();
  const anchors = anchorOffsets(R);
  for (const d of ORGANELLE_BLOBS) {
    const org = ORGANELLE_MAP[d.key];
    const rad = R * d.r;
    const m = new THREE.Mesh(
      new THREE.IcosahedronGeometry(rad, 1),
      new THREE.MeshPhongMaterial({
        color: org.color, transparent: true, opacity: 0.22,
        emissive: org.color, emissiveIntensity: 0.12, depthWrite: false,
      }),
    );
    if (d.flat !== 1) m.scale.set(1.25, d.flat, 1);
    m.position.copy(center).add(anchors[d.key]);
    m.userData.organelle = d.key;
    organelleGroup.add(m);
    const div = document.createElement('div');
    div.className = 'node-label organelle-label';
    div.textContent = org.label;
    const lab = new CSS2DObject(div);
    lab.position.copy(m.position);
    lab.position.y += rad * (d.flat !== 1 ? d.flat : 1) + 4;
    organelleGroup.add(lab);
  }
  scene.add(organelleGroup);
}

function disposeCellObjects() {
  for (const o of [membrane, membraneWire, organelleGroup]) {
    if (!o) continue;
    scene.remove(o);
    o.traverse?.((c) => {
      c.geometry?.dispose?.();
      if (Array.isArray(c.material)) c.material.forEach((m) => m.dispose?.());
      else c.material?.dispose?.();
      if (c.element) c.element.remove();
    });
  }
  membrane = membraneWire = organelleGroup = null;
}

function lerpTo(targets, done) {
  if (reducedMotion()) {
    targets.forEach((p, id) => nodeObjects.get(id)?.position.copy(p));
    syncEdgePositions();
    setAllLabelVisibility();
    requestRender();
    done?.();
    return;
  }
  transitioning = true;
  const starts = new Map();
  targets.forEach((p, id) => {
    const m = nodeObjects.get(id);
    if (m) starts.set(id, m.position.clone());
  });
  const t0 = performance.now();
  const dur = 800;
  function frame(now) {
    const t = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - t, 3);
    targets.forEach((p, id) => {
      const m = nodeObjects.get(id);
      const s = starts.get(id);
      if (m && s) m.position.lerpVectors(s, p, e);
    });
    syncEdgePositions();
    requestRender();
    if (t < 1) requestAnimationFrame(frame);
    else {
      // Re-pin labels to final positions.
      transitioning = false;
      setAllLabelVisibility();
      requestRender();
      done?.();
    }
  }
  requestAnimationFrame(frame);
}

export function syncEdgePositions() {
  if (!edgePosAttr) return;
  const arr = edgePosAttr.array;
  edgeList.forEach(({ fromMesh, toMesh }, i) => {
    const p = i * 6;
    arr[p] = fromMesh.position.x; arr[p + 1] = fromMesh.position.y; arr[p + 2] = fromMesh.position.z;
    arr[p + 3] = toMesh.position.x; arr[p + 4] = toMesh.position.y; arr[p + 5] = toMesh.position.z;
  });
  edgePosAttr.needsUpdate = true;
  // Keep CSS2D labels pinned above their meshes during the flight.
  nodeMeshes.forEach((m) => {
    const lab = labelObjects.get(m.userData.nodeId);
    if (lab) {
      lab.position.copy(m.position);
      lab.position.y += m.scale.y + 2;
    }
  });
  requestRender();
}

export function isCellMode() { return active; }

// ------------------------------------------------------------
// Phase 2: role-based glow + Brownian drift.
// Roles come straight from nodes.json (n.roles); no fetch needed.
// Priority: Master regulator > Bottleneck > Core backbone > Sink > Periphery.
// Only applied when no trace/selection owns the scene (highlightOwnsScene).
// ------------------------------------------------------------
const ROLE_STYLE = {
  'Master regulator': { opacity: 1, emissive: 0.5, pulse: true },
  Bottleneck: { opacity: 1, emissive: 0.45 },
  'Core backbone': { opacity: 0.95, emissive: 0.3 },
  Sink: { opacity: 0.9, emissive: 0.2 },
  Periphery: { opacity: 0.5, emissive: 0.05 },
};
const ROLE_PRIORITY = ['Master regulator', 'Bottleneck', 'Core backbone', 'Sink', 'Periphery'];

function primaryRole(roles) {
  if (!roles || !roles.length) return null;
  for (const r of ROLE_PRIORITY) if (roles.includes(r)) return r;
  return null;
}

function applyRoleStyling() {
  pulseMeshes = [];
  nodeMeshes.forEach((m) => {
    const nd = nodeMap.get(m.userData.nodeId);
    const role = primaryRole(nd && nd.roles);
    if (!role) return;
    const s = ROLE_STYLE[role];
    m.material.opacity = s.opacity;
    m.material.emissiveIntensity = s.emissive;
    if (s.pulse) pulseMeshes.push(m);
  });
}

function resetRoleStyling() {
  nodeMeshes.forEach((m) => {
    m.material.opacity = 0.92;
    m.material.emissiveIntensity = 0.15;
  });
  pulseMeshes = [];
}

function hash01(str, salt) {
  let h = salt >>> 0;
  for (let i = 0; i < str.length; i++) h = (h * 33 + str.charCodeAt(i)) >>> 0;
  return (h % 1000) / 1000;
}

function buildDriftParams(targets) {
  driftBase = new Map(targets);
  driftParams = new Map();
  targets.forEach((p, id) => {
    const nd = nodeMap.get(id);
    const deg = (nd && nd.degree) || 0;
    // Hubs drift less: amplitude falls with sqrt(degree).
    const amp = Math.min(9, 2.5 + 8 / Math.sqrt(deg + 1));
    driftParams.set(id, {
      amp,
      speed: 0.25 + hash01(id, 11) * 0.5, // rad/s
      phase: hash01(id, 77) * Math.PI * 2,
      phase2: hash01(id, 131) * Math.PI * 2,
    });
  });
}

// Per-frame tick, called from graph.js animate() while cell mode is active.
// Returns true when it moved anything (caller marks the frame dirty).
// Skipped during the enter/exit flight and under reduce-motion.
export function cellTick(now) {
  if (!active || transitioning || reducedMotion()) return false;
  const t = now / 1000;
  driftParams.forEach((d, id) => {
    const m = nodeObjects.get(id);
    const b = driftBase.get(id);
    if (!m || !b) return;
    m.position.set(
      b.x + Math.sin(t * d.speed + d.phase) * d.amp,
      b.y + Math.sin(t * d.speed * 0.8 + d.phase2) * d.amp * 0.7,
      b.z + Math.cos(t * d.speed * 0.9 + d.phase) * d.amp,
    );
  });
  // Master-regulator pulse: 0.35–0.65 emissive at ~0.5 Hz.
  for (const m of pulseMeshes) {
    const d = driftParams.get(m.userData.nodeId);
    const ph = d ? d.phase : 0;
    m.material.emissiveIntensity = 0.5 + 0.16 * Math.sin(t * 3 + ph);
  }
  syncEdgePositions();
  return true;
}

export function enterCellMode(opts = {}) {
  if (active) return;
  active = true;
  state.settings.cellMode = true;
  persistSettings();
  setPhysics(false);
  const physBtn = document.getElementById('btn-physics');
  physBtn?.classList.remove('active');

  savedPositions = new Map();
  nodeMeshes.forEach((m) => savedPositions.set(m.userData.nodeId, m.position.clone()));

  const { center, radius } = computeRadius();
  cellRadius = radius;
  // Recenter anchors on the graph centroid so the membrane wraps the data.
  const anchors = anchorOffsets(radius);
  // Shift anchors into world space around center.
  for (const k of Object.keys(anchors)) {
    if (anchors[k]) anchors[k].add(center);
  }
  buildMembrane(center, radius);
  // Reposition organelle blobs around the centroid (buildMembrane used local
  // offsets; shift the group children into place, matched by organelle key).
  if (organelleGroup) {
    const byKey = new Map();
    organelleGroup.children.forEach((c) => {
      if (c.isMesh && c.userData.organelle) byKey.set(c.userData.organelle, c);
    });
    for (const d of ORGANELLE_BLOBS) {
      const mesh = byKey.get(d.key);
      if (mesh && anchors[d.key]) mesh.position.copy(anchors[d.key]);
    }
    // Labels are siblings of the meshes — re-pin them above their blob.
    organelleGroup.children.forEach((c) => {
      if (c.isMesh || !c.element) return;
      const text = c.element.textContent;
      const def = ORGANELLE_BLOBS.find((b) => ORGANELLE_MAP[b.key].label === text);
      if (def && anchors[def.key]) {
        c.position.copy(anchors[def.key]);
        c.position.y += R * def.r * (def.flat !== 1 ? def.flat : 1) + 4;
      }
    });
  }

  const targets = new Map();
  nodeMeshes.forEach((m) => {
    const nd = nodeMap.get(m.userData.nodeId) || m.userData.nodeData;
    const t = targetFor({ ...nd, id: m.userData.nodeId }, anchors, radius);
    // Membrane shell targets are centroid-relative in targetFor; recenter.
    if (organelleFor(nd) === 'membrane') t.add(center);
    targets.set(m.userData.nodeId, t);
  });
  buildDriftParams(targets);
  minimap.setCellMode(true);

  // Dim resting edges so the membrane + organelles read — but never clobber
  // an active trace/selection highlight (it is id-based, survives the move).
  rolesOwnScene = !highlightOwnsScene();
  savedEdgeAlpha = new Map();
  if (rolesOwnScene) {
    edgeList.forEach(({ edge }) => {
      const rest = edgeRestingStyle(edge);
      savedEdgeAlpha.set(edge, rest.alpha);
      setEdgeVisual(edge, rest.hex, rest.alpha * 0.35);
    });
    applyRoleStyling();
  }

  // Outside looking in: pull back to ~2.1× radius above-center.
  const camPos = center.clone().add(new THREE.Vector3(0, radius * 0.55, radius * 2.1));
  animateCamera(camPos, center);
  lerpTo(targets, () => {
    if (!opts.skipHash) import('./routing.js').then((r) => r.updateHash());
  });
  import('./routing.js').then((r) => r.updateHash());
  document.body.classList.add('cell-mode');
}

export function exitCellMode(opts = {}) {
  if (!active) return;
  active = false;
  state.settings.cellMode = false;
  persistSettings();
  disposeCellObjects();
  minimap.setCellMode(false);
  driftBase = new Map();
  driftParams = new Map();
  const rolesOwnSceneAtExit = rolesOwnScene;
  if (rolesOwnScene) resetRoleStyling();
  rolesOwnScene = false;
  const targets = savedPositions;
  // Restore resting edges; trace/selection highlights re-apply on top.
  import('./ui.js').then((ui) => {
    if (rolesOwnSceneAtExit) {
      edgeList.forEach(({ edge }) => {
        const rest = edgeRestingStyle(edge);
        setEdgeVisual(edge, rest.hex, savedEdgeAlpha.get(edge) ?? rest.alpha);
      });
    }
    // Re-assert trace/selection highlight if one owns the scene.
    if (state.activeTrace) {
      if (state.activeRouteIdx >= 0) ui.activateRoute(state.activeTrace, state.activeRouteIdx);
      else ui.highlightTraceNodes(state.activeTrace);
    }
  });
  animateCamera(new THREE.Vector3(-120, 0, 500), new THREE.Vector3(170, 0, 0));
  lerpTo(targets, () => {
    if (!opts.skipHash) import('./routing.js').then((r) => r.updateHash());
  });
  import('./routing.js').then((r) => r.updateHash());
  document.body.classList.remove('cell-mode');
}

export function toggleCellMode() {
  if (isCellMode()) exitCellMode();
  else enterCellMode();
}

subscribeTheme(() => {
  if (!active) return;
  const c = themeMembraneColor();
  membrane?.material.color.setHex(c);
  membraneWire?.material.color.setHex(c);
  requestRender();
});
