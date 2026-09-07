// fly.js — Phase 3 trace flythrough ("Play route").
// Cinematic camera ride along a query.json route path with text stepped per
// stop in the analysis-panel info card. Curve points come from live node
// positions, so it works in graph and cell mode on any dataset.
//
// ui.js owns the trace panel DOM (Play buttons live there and dynamic-import
// this module to avoid a static cycle); this module statically imports the
// highlight/card helpers from ui.js.

import * as THREE from 'three';
import { nodeMap } from './data.js';
import {
  scene, camera, controls, nodeObjects,
  requestRender, animateCamera, CAMERA_OFFSET,
} from './core.js';
import { state } from './state.js';
import { activateRoute, renderFlyStopCard } from './ui.js';

const DWELL_PER_STOP = 1.7; // seconds at 1× speed
const CAM_SCALE = 0.55;

let flight = null; // { trace, routeIdx, stops, curve, flyT, last, speed, playAll, bar, sprite, stopIdx, savedAutoRotate }

export function isFlying() { return !!flight; }
export function flyingStop() { return flight ? flight.stopIdx : -1; }

function reducedMotion() {
  return state.settings.reduceMotion ||
    (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

function validStops(route) {
  return (route.path || []).filter((id) => nodeObjects.has(id));
}

function makePulseSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(124,179,212,0.9)');
  g.addColorStop(1, 'rgba(124,179,212,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({
    map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(16, 16, 1);
  return sprite;
}

// Start a flight. Falls back to plain activateRoute when the route has fewer
// than 2 mappable stops. Returns true when a flight started.
export function startFly(trace, routeIdx, opts = {}) {
  stopFly({ silent: true });
  const route = trace.routes[routeIdx];
  if (!route) return false;
  const stops = validStops(route);
  // Highlight + hash first (no camera flight — we drive the camera).
  activateRoute(trace, routeIdx, { noFly: true });

  if (stops.length < 2 || reducedMotion()) {
    // Step mode: no curve animation; stops advance via bar buttons/arrows.
    flight = {
      trace, routeIdx, stops, curve: null, flyT: 0, last: 0,
      speed: 1, playAll: false, stepMode: true, stopIdx: -1, bar: null, sprite: null,
    };
    if (stops.length) goToStop(0);
    buildBar();
    attachKeys();
    listenCanvas();
    return true;
  }

  const pts = stops.map((id) => nodeObjects.get(id).position.clone());
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const sprite = makePulseSprite();
  scene.add(sprite);
  flight = {
    trace, routeIdx, stops, curve, flyT: 0, last: performance.now(),
    speed: opts.speed || 1, playAll: !!opts.playAll, stepMode: false,
    stopIdx: -1, bar: null, sprite,
    savedAutoRotate: controls.autoRotate,
  };
  controls.autoRotate = false;
  controls.enabled = false;
  buildBar();
  attachKeys();
  listenCanvas();
  goToStop(0);
  requestRender();
  return true;
}

function goToStop(i) {
  if (!flight) return;
  const n = flight.stops.length;
  flight.stopIdx = Math.max(0, Math.min(n - 1, i));
  flight.flyT = flight.stopIdx; // snap progress to the stop boundary
  renderFlyStopCard(flight.trace, flight.routeIdx, flight.stopIdx);
  updateBar();
  if (flight.stepMode) {
    // Jump the camera instantly (animateCamera is instant under reduce-motion).
    const m = nodeObjects.get(flight.stops[flight.stopIdx]);
    if (m) animateCamera(m.position.clone().add(CAMERA_OFFSET), m.position.clone());
  }
  requestRender();
}

export function stepStop(delta) {
  if (!flight || !flight.stops.length) return;
  const next = flight.stopIdx + delta;
  if (next < 0 || next >= flight.stops.length) {
    if (next >= flight.stops.length) advanceRoute();
    return;
  }
  goToStop(next);
}

function advanceRoute() {
  if (!flight) return;
  const { trace, routeIdx, playAll } = flight;
  if (playAll && routeIdx + 1 < trace.routes.length) {
    const speed = flight.speed;
    startFly(trace, routeIdx + 1, { playAll: true, speed });
    return;
  }
  // Natural end: settle on the standard route view (midpoint flight + card).
  const t = flight.trace, r = flight.routeIdx;
  stopFly({ silent: true });
  activateRoute(t, r);
}

// Per-frame tick, wired into graph.js animate(). Returns true when it moved
// the camera (caller marks the frame dirty).
export function flyTick(now) {
  if (!flight || flight.stepMode) return false;
  const dt = Math.min(0.1, (now - flight.last) / 1000);
  flight.last = now;
  const n = flight.stops.length;
  flight.flyT += (dt * flight.speed) / DWELL_PER_STOP;
  if (flight.flyT >= n - 1) {
    advanceRoute();
    return true;
  }
  const u = flight.flyT / (n - 1);
  const idx = Math.round(flight.flyT);
  if (idx !== flight.stopIdx) goToStop(idx);

  const pos = flight.curve.getPoint(Math.max(0, Math.min(1, u)));
  const stopMesh = nodeObjects.get(flight.stops[flight.stopIdx]);
  const look = stopMesh ? stopMesh.position : pos;
  const desired = pos.clone().addScaledVector(CAMERA_OFFSET, CAM_SCALE);
  camera.position.lerp(desired, 0.07);
  controls.target.lerp(look, 0.1);
  camera.lookAt(controls.target);
  if (flight.sprite) {
    const lead = Math.max(0, Math.min(1, u + 0.015));
    flight.sprite.position.copy(flight.curve.getPoint(lead));
  }
  return true;
}

export function setFlySpeed(speed) {
  if (flight) {
    flight.speed = speed;
    const sel = flight.bar && flight.bar.querySelector('.fly-speed');
    if (sel) sel.value = String(speed);
  }
}

// --- fly bar (progress + transport), mounted atop #trace-routes -----------

function buildBar() {
  const host = document.getElementById('trace-routes');
  if (!host || (flight && flight.bar)) return;
  const bar = document.createElement('div');
  bar.className = 'fly-bar';
  bar.innerHTML =
    '<button type="button" class="fly-btn fly-prev" title="Previous stop (←)">←</button>' +
    '<button type="button" class="fly-btn fly-stop" title="Stop flight (Esc)">■</button>' +
    '<button type="button" class="fly-btn fly-next" title="Next stop (→)">→</button>' +
    '<span class="fly-pill">Stop 1/1</span>' +
    '<span class="fly-progress"><span class="fly-progress-fill"></span></span>' +
    '<select class="fly-speed" title="Flight speed" aria-label="Flight speed">' +
    '<option value="0.5">0.5×</option><option value="1" selected>1×</option><option value="2">2×</option>' +
    '</select>';
  host.prepend(bar);
  flight.bar = bar;
  bar.querySelector('.fly-prev').addEventListener('click', (e) => { e.stopPropagation(); stepStop(-1); });
  bar.querySelector('.fly-next').addEventListener('click', (e) => { e.stopPropagation(); stepStop(1); });
  bar.querySelector('.fly-stop').addEventListener('click', (e) => { e.stopPropagation(); stopFly(); });
  const sel = bar.querySelector('.fly-speed');
  sel.value = String(flight.speed || 1);
  if (flight.stepMode) sel.style.display = 'none';
  sel.addEventListener('change', () => setFlySpeed(parseFloat(sel.value) || 1));
  updateBar();
}

function updateBar() {
  if (!flight || !flight.bar) return;
  const n = flight.stops.length || 1;
  const pill = flight.bar.querySelector('.fly-pill');
  if (pill) pill.textContent = `Stop ${flight.stopIdx + 1}/${n}`;
  const fill = flight.bar.querySelector('.fly-progress-fill');
  if (fill) fill.style.width = `${((flight.stopIdx + 1) / n) * 100}%`;
  // Highlight the played stop in the route rows.
  flight.bar.parentElement?.querySelectorAll('.trace-route').forEach((el, i) => {
    el.classList.toggle('flying', i === flight.routeIdx);
  });
}

function removeBar() {
  if (flight && flight.bar) {
    flight.bar.remove();
    flight.bar = null;
  }
  document.querySelectorAll('.trace-route.flying').forEach((el) => el.classList.remove('flying'));
}

// --- interruption: keys + canvas ------------------------------------------

function onKey(e) {
  if (!flight) return;
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
  if (e.key === 'Escape') { e.preventDefault(); stopFly(); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); stepStop(1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); stepStop(-1); }
}

function attachKeys() {
  document.addEventListener('keydown', onKey);
}

function detachKeys() {
  document.removeEventListener('keydown', onKey);
}

let canvasAbort = null;
function listenCanvas() {
  const canvas = document.querySelector('#graph canvas');
  if (!canvas) return;
  canvasAbort = new AbortController();
  canvas.addEventListener('pointerdown', () => stopFly(), { signal: canvasAbort.signal });
}

function unlistenCanvas() {
  if (canvasAbort) { canvasAbort.abort(); canvasAbort = null; }
}

window.addEventListener('fly-cancel', () => stopFly({ silent: true }));

// Stop the flight. silent=true leaves highlight/card untouched (a new
// highlight is about to replace it); otherwise re-assert the route view.
export function stopFly(opts = {}) {
  if (!flight) return;
  const f = flight;
  flight = null;
  detachKeys();
  unlistenCanvas();
  removeBar();
  if (f.sprite) {
    scene.remove(f.sprite);
    f.sprite.material.map?.dispose?.();
    f.sprite.material.dispose?.();
  }
  controls.enabled = true;
  if (typeof f.savedAutoRotate === 'boolean') controls.autoRotate = f.savedAutoRotate;
  if (!opts.silent && f.trace) activateRoute(f.trace, f.routeIdx, { noFly: true });
  requestRender();
}

// Node lookup helper for the stop card (ui.js imports this back).
export function flyNodeLabel(id) {
  const n = nodeMap.get(id);
  return n ? n.label : id;
}
