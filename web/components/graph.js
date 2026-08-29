// Entry module: wires everything together, drives the render loop, handles
// resize, dataset panel, and URL-hash restore.

import { RAW_NODES, RAW_EDGES, LEGEND, TRACES, GRAPH_META, nodeMap, I18N_COVERAGE, DATASET_MODE, DATASET_LABELS } from './data.js';
import { state } from './state.js';
import {
  container, scene, camera, renderer, labelRenderer, controls, nodeObjects,
  applyForces, updateStickyRings, updateZoomBar, renderState, minimap,
} from './core.js';
import { parseHash } from './routing.js';
import { activateTrace, activateRoute, clearTrace, setActiveWindow, setupDatasetToggle } from './ui.js';
import { selectNode, deselectNode, selectEdge } from './interaction.js';
import { esc } from './markdown.js';
import { openReader, closeReader, isReaderOpen } from './reader.js';
// Side-effect import: analysis.js attaches its own listeners.
import { applyAnalysisUiLang } from './analysis.js';
// Notes panel (gallery / upload / lightbox).
import { isNotesOpen, closeNotes, restoreNotes } from './notes.js';
// Side-effect import: theme.js wires the settings popover theme toggle.
import './theme.js';
// Side-effect import: auth.js shows the login overlay until a session exists
// and keeps the Supabase access token available to API callers.
import './auth.js';
import { registerModal, toggleModal, closeModal } from './modal.js';

// ------------------------------------------------------------
// Dataset info panel (derived from data)
// ------------------------------------------------------------
const totalCommunities = new Set(RAW_NODES.map(n => n.community)).size;
const thinCount = Math.max(0, totalCommunities - LEGEND.length);
const isolatedCount = RAW_NODES.filter(n => (n.degree || 0) <= 1).length;
const sourceDocCount = new Set(RAW_NODES.map(n => n.source_file).filter(Boolean)).size;
const confidenceCounts = {};
RAW_EDGES.forEach(e => {
  const c = e.confidence || 'UNKNOWN';
  confidenceCounts[c] = (confidenceCounts[c] || 0) + 1;
});
const confidencePct = (c) => `${((confidenceCounts[c] || 0) / RAW_EDGES.length * 100).toFixed(1)}%`;
const godNodes = [...RAW_NODES].sort((a, b) => (b.degree || 0) - (a.degree || 0)).slice(0, 10);
const communityCountMap = new Map(LEGEND.map(c => [c.cid, c.count]));
// Curated top-10 from the build (graphify.analyze.god_nodes — noise-filtered,
// recomputed every rebuild). Falls back to the naive degree ranking above
// when absent.
const curatedGods = GRAPH_META && Array.isArray(GRAPH_META.god_nodes)
  ? GRAPH_META.god_nodes
  : godNodes.map(n => ({ id: n.id, label: n.label, degree: n.degree }));
// i18n coverage counters emitted by the rebuild (i18n-coverage.json).
const i18nTotal = I18N_COVERAGE.triples_total || RAW_EDGES.length;
const i18nStalePct = i18nTotal ? (((I18N_COVERAGE.stale_triples || 0) / i18nTotal) * 100).toFixed(1) : '—';
const i18nMissingZh = I18N_COVERAGE.missing_zh ?? '—';
const i18nGenerated = I18N_COVERAGE.generated || '';

const datasetScroll = document.getElementById('dataset-scroll');
datasetScroll.innerHTML = `
  <button id="dataset-close" class="panel-close" title="Close / 關閉">&times;</button>
  <h2>About the Dataset / 關於資料集</h2>

  <p class="dataset-mode"><b>Mode / 模式:</b> ${DATASET_LABELS[DATASET_MODE] || DATASET_MODE}</p>

  <h3>Stats / 資料統計</h3>
  <ul class="dataset-stats">
    <li><b>${RAW_NODES.length}</b> nodes &middot; <b>${RAW_EDGES.length}</b> edges</li>
    <li><b>${totalCommunities}</b> communities <small>(${LEGEND.length} shown, ${thinCount} thin omitted)</small></li>
    <li><b>${sourceDocCount}</b> ${DATASET_MODE === 'triples' ? 'source documents' : 'source notes'}</li>
    <li><b>${confidencePct('EXTRACTED')}</b> EXTRACTED &middot; <b>${confidencePct('INFERRED')}</b> INFERRED &middot; <b>${confidencePct('AMBIGUOUS')}</b> AMBIGUOUS</li>
    ${i18nTotal ? `<li><b>${i18nTotal.toLocaleString()}</b> triples &middot; <b>${i18nStalePct}%</b> stale (note edited after extraction) &middot; <b>${i18nMissingZh}</b> missing zh-TW<small>${i18nGenerated ? ` · ${esc(i18nGenerated)}` : ''}</small></li>` : ''}
  </ul>

  <h3>Core Concepts / 核心節點</h3>
  <p class="dataset-intro"><b>"God" Nodes</b> (most-connected hubs, noise-filtered at build time). Community size matches the graph legend:</p>
  <ol class="god-nodes">
    ${curatedGods.map(g => {
      const full = nodeMap.get(g.id);
      const cc = full ? communityCountMap.get(full.community) : null;
      return `<li><b>${esc(g.label)}</b> <span class="degree">${g.degree} edges</span>${cc ? ` <span class="degree muted">&middot; ${cc}-node community</span>` : ''}</li>`;
    }).join('')}
  </ol>

  <h3>How to Use / 使用方式</h3>
  <ul class="dataset-list">
    <li><b>Search</b> nodes and run <b>Graph Query</b> traces from the <b>Analysis panel</b> (Graph mode).</li>
    <li><b>Drag</b> nodes to explore; Cmd/Ctrl-drag moves their neighbors.</li>
    <li><b>Analysis panel</b> — open <b>Prompt</b> to query the graph, or <b>Graph</b> for instant dataset analytics.</li>
    <li><b>Click</b> edges and nodes to inspect relations and jump to source notes.</li>
  </ul>

  <h3>Knowledge Gaps / 缺口</h3>
  <p class="dataset-intro"><b>${isolatedCount}</b> isolated nodes (&le;1 connection) are candidates for missing edges or undocumented components.</p>

  <h3>Node Fields / 節點欄位</h3>
  <table class="dataset-table">
    <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>id</code></td><td>string</td><td>Unique snake_case identifier (e.g. <code>sirt1</code>)</td></tr>
      <tr><td><code>label</code></td><td>string</td><td>Human-readable display name (e.g. <code>SIRT1</code>)</td></tr>
      <tr><td><code>norm_label</code></td><td>string</td><td>Diacritics-stripped, lowercased label for fuzzy search</td></tr>
      <tr><td><code>file_type</code></td><td>string</td><td>Always <code>concept</code></td></tr>
      <tr><td><code>source_file</code></td><td>string</td><td>Originating document filename</td></tr>
      <tr><td><code>source_triples</code></td><td>string</td><td>Path to the <code>_triples.json</code> that produced this node</td></tr>
      <tr><td><code>description</code></td><td>string</td><td>Summarized context paragraph from the source</td></tr>
      <tr><td><code>community</code></td><td>int</td><td>Community cluster ID (Leiden algorithm)</td></tr>
      <tr><td><code>community_name</code></td><td>string</td><td>Human-readable community hub name</td></tr>
      <tr><td><code>community_size</code></td><td>int</td><td>Number of nodes in the node's community</td></tr>
      <tr><td><code>degree</code></td><td>int</td><td>Total connections (in + out)</td></tr>
      <tr><td><code>in_degree</code></td><td>int</td><td>Incoming edges</td></tr>
      <tr><td><code>out_degree</code></td><td>int</td><td>Outgoing edges</td></tr>
      <tr><td><code>pagerank</code></td><td>float</td><td>Global standard PageRank (alpha=0.85)</td></tr>
      <tr><td><code>betweenness_centrality</code></td><td>float</td><td>Fraction of shortest paths passing through this node</td></tr>
      <tr><td><code>clustering_coefficient</code></td><td>float</td><td>Local cohesiveness (fraction of neighbor triples that are edges)</td></tr>
      <tr><td><code>k_core_number</code></td><td>int</td><td>Deepest k-core the node belongs to</td></tr>
    </tbody>
  </table>

  <h3>Edge Fields / 邊緣欄位</h3>
  <table class="dataset-table">
    <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>source</code></td><td>string</td><td>Source node ID</td></tr>
      <tr><td><code>target</code></td><td>string</td><td>Target node ID</td></tr>
      <tr><td><code>relation</code></td><td>string</td><td>Relationship predicate (e.g. <code>promotes</code>, <code>inhibits</code>, <code>deacetylates</code>)</td></tr>
      <tr><td><code>confidence</code></td><td>string</td><td>Tier: <code>EXTRACTED</code> (99.3%) or <code>AMBIGUOUS</code> (0.7%)</td></tr>
      <tr><td><code>confidence_score</code></td><td>float</td><td>Numeric confidence (0.4–0.98)</td></tr>
      <tr><td><code>weight</code></td><td>float</td><td>Alias of <code>confidence_score</code> for weighted graph metrics</td></tr>
      <tr><td><code>source_file</code></td><td>string</td><td>Originating document filename</td></tr>
      <tr><td><code>source_triples</code></td><td>string</td><td>Path to the <code>_triples.json</code> that produced this edge</td></tr>
      <tr><td><code>context</code></td><td>string</td><td>Evidence sentence/paragraph from the source document</td></tr>
    </tbody>
  </table>

  <h3>Graph Metadata / 圖形中繼資料</h3>
  <table class="dataset-table">
    <thead><tr><th>Key</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>community_labels</code></td><td>dict</td><td><code>{community_id: hub_name}</code> mapping</td></tr>
      <tr><td><code>community_cohesion</code></td><td>dict</td><td><code>{community_id: float}</code> intra-community edge density</td></tr>
      <tr><td><code>community_sizes</code></td><td>dict</td><td><code>{community_id: int}</code> node counts</td></tr>
      <tr><td><code>god_nodes</code></td><td>list</td><td>Top 10 most connected entities (degree-ranked, noise-filtered)</td></tr>
      <tr><td><code>surprising_connections</code></td><td>list</td><td>Cross-community edges with high betweenness</td></tr>
      <tr><td><code>metrics_computed_at</code></td><td>string</td><td>Timestamp of metric computation</td></tr>
    </tbody>
  </table>

  <p class="dataset-source">
    <a href="https://github.com/jkuo45/llm-wiki-jk/tree/dev/web" target="_blank" rel="noopener">Data Source</a>
    &middot; <a href="https://github.com/jkuo45/llm-wiki-jk/blob/dev/graphify-out/GRAPH_REPORT.md" target="_blank" rel="noopener">Graph Report</a>
  </p>
`;

const datasetPanel = document.getElementById('dataset-panel');
const datasetBtn = document.getElementById('btn-dataset');
// Escape/backdrop/close-button handling lives in modal.js; the outside-click
// dismiss below stays because the dataset panel is a side panel, not a modal.
registerModal('dataset', datasetPanel, { closeOnBackdrop: false, onClose: () => setActiveWindow(null) });

datasetBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleModal('dataset');
});
document.addEventListener('click', (e) => {
  if (!datasetPanel?.contains(e.target) && !datasetBtn?.contains(e.target)) {
    closeModal('dataset');
  }
});

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
