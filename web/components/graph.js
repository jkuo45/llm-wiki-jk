// Entry module: wires everything together, drives the render loop, handles
// resize, dataset panel, and URL-hash restore.

import { RAW_EDGES, TRACES } from './data.js';
import { state } from './state.js';
import {
  container, scene, camera, renderer, labelRenderer, controls, nodeObjects,
  applyForces, updateStickyRings, updateZoomBar, renderState, minimap,
} from './core.js';
import { parseHash } from './routing.js';
import { activateTrace, activateRoute, clearTrace, setupDatasetToggle } from './ui.js';
import { selectNode, deselectNode, selectEdge } from './interaction.js';
import { openReader, closeReader, isReaderOpen } from './reader.js';
// Side-effect import: analysis.js attaches its own listeners.
import { applyAnalysisUiLang } from './analysis.js';
// Notes panel (gallery / lightbox).
import { isNotesOpen, closeNotes, restoreNotes } from './notes.js';
// Side-effect import: theme.js wires the settings popover theme toggle.
import './theme.js';
// Side-effect import: auth.js shows the login overlay until a session exists
// and keeps the Supabase access token available to API callers.
import './auth.js';

// ------------------------------------------------------------
// Hash restore (also used by popstate)
// ------------------------------------------------------------
async function restoreFromHash(params) {
  state.suppressHashUpdate = true;
  if (params && params.reader) {
    openReader(params.reader, { section: params.section || null });
  } else if (isReaderOpen()) {
    closeReader();
  }
  if (params && (params.note || params.notes)) {
    // Notes wins over analysis when both are in the hash. Close the analysis
    // panel FIRST — clicking its button while notes is open would close notes
    // via the notes panel's btn-analysis capture listener.
    const analysisBtn = document.getElementById('btn-analysis');
    if (analysisBtn.classList.contains('open')) analysisBtn.click();
    // Await the (possibly async) notes restore so hash updates stay suppressed
    // through the gallery fetch + lightbox opening (openLightbox etc. push
    // visibility state otherwise). restoreFromHash is called fire-and-forget.
    await restoreNotes(params);
  } else if (isNotesOpen()) {
    closeNotes();
  }
  if (!params) {
    deselectNode();
    clearTrace();
    state.suppressHashUpdate = false;
    return;
  }
  if (params.trace) {
    const trace = TRACES.find(t => t.id === params.trace);
    if (trace) {
      activateTrace(trace);
      if (params.route !== undefined) {
        activateRoute(trace, parseInt(params.route, 10));
      }
    }
  } else {
    clearTrace();
  }
  if (params.edge) {
    const [from, to] = params.edge.split(',');
    const edge = RAW_EDGES.find(e => e.from === from && e.to === to);
    if (edge) selectEdge(edge);
  }
  if (params.node && nodeObjects.has(params.node)) {
    selectNode(params.node);
  } else if (!params.edge) {
    deselectNode();
  }
  // Analysis panel: open/close and restore mode/lang from the hash.
  // Notes wins when both are requested. The analysis flag has three states:
  //   bare `analysis`      → panel was OPEN: restore it + surface the info card
  //   `analysis=off`       → selection persisted but panel CLOSED: keep it
  //                          closed (faithful round-trip of an app-produced
  //                          "#node=…" closed state — never reopen)
  //   absent               → no analysis state recorded
  // A selection with NO analysis marker still opens the panel (hand-authored
  // deep-link intent), but a closed-with-selection state carries `analysis=off`
  // and is never auto-reopened.
  const notesActive = !!(params && (params.notes || params.note));
  const hasSelection = !!(params && (params.node || params.edge || params.trace));
  const analysisBtn = document.getElementById('btn-analysis');
  const panelOpen = analysisBtn.classList.contains('open');
  const hasAnalysisKey = !!(params && 'analysis' in params);
  const shouldOpen = !notesActive && (params.analysis === true || (!hasAnalysisKey && hasSelection));
  const shouldClose = !notesActive && (params.analysis === 'off' || (!hasAnalysisKey && !hasSelection && panelOpen));

  if (shouldOpen && !panelOpen) {
    analysisBtn.click();
    // Legacy deep links carrying `mode=prompt` (from the old Prompt/Graph tab
    // switch) open the floating chat window instead of the tools panel.
    if (params.mode === 'prompt') {
      const chatBtn = document.getElementById('btn-chat');
      if (chatBtn && !chatBtn.classList.contains('open')) chatBtn.click();
    }
    applyAnalysisUiLang(params.uilang);
  } else if (shouldClose && panelOpen) {
    analysisBtn.click();
  }
  // Floating prompt/chat window (bottom-right launcher): `chat` in the hash
  // means it was open. Close it when the marker is gone so back/forward and
  // pasted links round-trip faithfully.
  const chatBtnEl = document.getElementById('btn-chat');
  if (chatBtnEl) {
    const chatOpenNow = chatBtnEl.classList.contains('open');
    if (params && params.chat && !chatOpenNow) chatBtnEl.click();
    else if (params && !params.chat && chatOpenNow) chatBtnEl.click();
  }
  state.suppressHashUpdate = false;
}

// Guard against double-handling: back/forward between hash-only entries fires
// both popstate AND hashchange for the same final hash.
let lastRestoredHash = null;
function restoreFromHashEvent(params) {
  if (window.location.hash === lastRestoredHash) return;
  lastRestoredHash = window.location.hash;
  restoreFromHash(params);
}

window.addEventListener('popstate', () => restoreFromHashEvent(parseHash()));
// Same-document navigation to a deep link (pasting a #notes URL into an open
// tab, clicking a hash link) — without this no panel would restore.
window.addEventListener('hashchange', () => restoreFromHashEvent(parseHash()));

// ------------------------------------------------------------
// Loading overlay
// ------------------------------------------------------------
document.getElementById('loading').classList.add('hidden');

// ------------------------------------------------------------
// Animation loop (on-demand: only draws when dirty / damping / physics)
// ------------------------------------------------------------
let renderPaused = false;

function animate() {
  if (renderPaused) return;
  requestAnimationFrame(animate);

  if (state.physicsEnabled) {
    applyForces();
    renderState.dirty = true;
  }

  updateStickyRings();
  const controlsChanged = controls.update();
  updateZoomBar();

  if (renderState.dirty || controlsChanged) {
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    minimap.render();
    renderState.dirty = false;
  }
}

animate();

// Pause the entire rAF loop when the tab is hidden (saves CPU/GPU/battery);
// resume and force one redraw when it becomes visible again.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    renderPaused = true;
  } else if (renderPaused) {
    renderPaused = false;
    renderState.dirty = true;
    animate();
  }
});

// ------------------------------------------------------------
// Resize handler
// ------------------------------------------------------------
new ResizeObserver(() => {
  requestAnimationFrame(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    labelRenderer.setSize(width, height);
  });
}).observe(container);

// ------------------------------------------------------------
// Restore state from URL hash (use replaceState to avoid extra history entry)
// ------------------------------------------------------------
const hashParams = parseHash();
if (hashParams) {
  restoreFromHash(hashParams);
  lastRestoredHash = window.location.hash;
  history.replaceState({ hash: window.location.hash }, '', window.location.href);
}

// Wire the Triples / Wiki / Combined dataset toggle (marks the active tab).
setupDatasetToggle();
