// Entry module: wires everything together, drives the render loop, handles
// resize, dataset panel, and URL-hash restore.

import { RAW_EDGES, RAW_NODES, TRACES, DATA_ERROR } from './data.js';
import { h } from './ui/dom.js';
import { createAsyncState } from './ui/AsyncState.js';
import { state } from './state.js';
import {
  container, scene, camera, renderer, labelRenderer, controls, nodeObjects,
  applyForces, updateStickyRings, updateZoomBar, renderState, minimap,
} from './core.js';
import { parseHash } from './routing.js';
import { activateTrace, activateRoute, clearTrace, setupDatasetSlider, syncCellToggle } from './ui.js';
import { isCellMode, enterCellMode, exitCellMode, cellTick } from './cell.js';
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
// Side-effect import: admin.js wires the DB-backed star-flag panel.
import './admin.js';

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
  // Cytoplasm cell view: hash `cell=1` wins; enter/exit only on change so
  // back/forward restores faithfully without replaying the transition.
  const wantCell = !!(params && (params.cell === true || params.cell === '1'));
  if (wantCell && !isCellMode()) enterCellMode({ skipHash: true });
  else if (!wantCell && isCellMode()) exitCellMode({ skipHash: true });
  syncCellToggle();
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
// Boot gate: error / empty / ready. On a critical dataset failure
// (DATA_ERROR from data.js) or a loaded-but-empty dataset, the
// #loading overlay becomes an explicit error / empty screen with
// a Retry action instead of the app silently rendering nothing.
// ------------------------------------------------------------
const loadingEl = document.getElementById('loading');

if (DATA_ERROR || RAW_NODES.length === 0) {
  const boot = createAsyncState({
    loading: () => null, // initial overlay markup already shows the spinner
    error: (err, retry) => h('div', { class: 'boot-state boot-state--error' }, [
      h('div', { class: 'boot-state-icon', html: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' }),
      h('h2', {}, 'Failed to load graph data / 圖形資料載入失敗'),
      h('p', { class: 'boot-state-detail' }, String((err && err.message) || err)),
      h('button', { class: 'boot-state-btn', type: 'button', onclick: retry }, 'Retry / 重試'),
    ]),
    empty: () => h('div', { class: 'boot-state boot-state--empty' }, [
      h('h2', {}, 'This dataset is empty / 此資料集為空'),
      h('p', { class: 'boot-state-detail' },
        'The graph data loaded successfully but contains no nodes — check the latest graph rebuild.'),
      h('button', { class: 'boot-state-btn', type: 'button', onclick: () => location.reload() }, 'Reload / 重新載入'),
    ]),
  });
  loadingEl.replaceChildren(boot.el);
  if (DATA_ERROR) {
    boot.set('error', DATA_ERROR);
    console.error('[boot] dataset error:', DATA_ERROR);
  } else {
    boot.set('empty');
    console.warn('[boot] dataset loaded but contains zero nodes');
  }
  loadingEl.classList.remove('hidden');
  loadingEl.dataset.mode = 'error';
} else {
  loadingEl.classList.add('hidden');
}
// eslint-disable-next-line no-unused-vars -- boot gate ends here; fallthrough below only runs when data is healthy
var BOOT_FAILED = !!(DATA_ERROR || RAW_NODES.length === 0);
if (!BOOT_FAILED) {

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

  // Cytoplasm drift + master-regulator pulse (cell.js). Returns true when it
  // moved anything, which keeps the on-demand loop rendering that frame.
  if (isCellMode() && cellTick(performance.now())) {
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
} else if (state.settings.cellMode) {
  // No hash: honor the persisted Cell toggle from a previous visit.
  enterCellMode({ skipHash: true });
  syncCellToggle();
}

// Wire the Triples / Wiki / Combined dataset slider (inside Settings).
setupDatasetSlider();
} // end boot-healthy guard (boot gate above skips the scene loop on error/empty)
