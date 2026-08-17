// Entry module: wires everything together, drives the render loop, handles
// resize, stats, dataset panel, and URL-hash restore.

import { RAW_NODES, RAW_EDGES, LEGEND, TRACES } from './data.js';
import { state } from './state.js';
import {
  container, scene, camera, renderer, labelRenderer, controls, nodeObjects,
  applyForces, updateStickyRings, updateZoomBar,
} from './core.js';
import { parseHash } from './routing.js';
import { activateTrace, activateRoute, clearTrace, setActiveWindow } from './ui.js';
import { selectNode, deselectNode, selectEdge } from './interaction.js';
import { esc } from './markdown.js';
import { openReader, closeReader, isReaderOpen } from './reader.js';
// Side-effect import: chat.js attaches its own listeners.
import './chat.js';

// ------------------------------------------------------------
// Stats footer (derived from data)
// ------------------------------------------------------------
document.getElementById('stats').textContent = `${RAW_NODES.length} nodes · ${RAW_EDGES.length} edges · ${LEGEND.length} communities`;

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

const datasetScroll = document.getElementById('dataset-scroll');
datasetScroll.innerHTML = `
  <button id="dataset-close" class="panel-close" title="Close / 關閉">&times;</button>
  <h2>About the Dataset / 關於資料集</h2>

  <h3>Stats / 資料統計</h3>
  <ul class="dataset-stats">
    <li><b>${RAW_NODES.length}</b> nodes &middot; <b>${RAW_EDGES.length}</b> edges</li>
    <li><b>${totalCommunities}</b> communities <small>(${LEGEND.length} shown, ${thinCount} thin omitted)</small></li>
    <li><b>${sourceDocCount}</b> source documents</li>
    <li><b>${confidencePct('EXTRACTED')}</b> EXTRACTED &middot; <b>${confidencePct('INFERRED')}</b> INFERRED &middot; <b>${confidencePct('AMBIGUOUS')}</b> AMBIGUOUS</li>
  </ul>

  <h3>Core Concepts / 核心節點</h3>
  <p class="dataset-intro"><b>"God" Nodes</b> (most-connected hubs, by degree). Community size matches the sidebar legend:</p>
  <ol class="god-nodes">
    ${godNodes.map(n => {
      const cc = communityCountMap.get(n.community);
      return `<li><b>${esc(n.label)}</b> <span class="degree">${n.degree} edges</span>${cc ? ` <span class="degree muted">&middot; ${cc}-node community</span>` : ''}</li>`;
    }).join('')}
  </ol>

  <h3>How to Use / 使用方式</h3>
  <ul class="dataset-list">
    <li><b>Search</b> nodes in the left panel, or <b>Graph Query</b> to find paths.</li>
    <li><b>Drag</b> nodes to explore; Cmd/Ctrl-drag moves their neighbors.</li>
    <li><b>Chat</b> — ask questions and follow up conversationally.</li>
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

datasetBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  datasetPanel.classList.toggle('visible');
});
datasetPanel.addEventListener('click', (e) => {
  if (e.target.id === 'dataset-close' || e.target === datasetPanel) {
    datasetPanel.classList.remove('visible');
    setActiveWindow(null);
  }
});
document.addEventListener('click', (e) => {
  if (!datasetPanel.contains(e.target) && !datasetBtn.contains(e.target)) {
    datasetPanel.classList.remove('visible');
    setActiveWindow(null);
  }
});

// ------------------------------------------------------------
// Hash restore (also used by popstate)
// ------------------------------------------------------------
function restoreFromHash(params) {
  state.suppressHashUpdate = true;
  if (params && params.reader) {
    openReader(params.reader, { section: params.section || null });
  } else if (isReaderOpen()) {
    closeReader();
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
  state.suppressHashUpdate = false;
}

window.addEventListener('popstate', () => {
  restoreFromHash(parseHash());
});

// ------------------------------------------------------------
// Loading overlay
// ------------------------------------------------------------
document.getElementById('loading').classList.add('hidden');

// ------------------------------------------------------------
// Animation loop
// ------------------------------------------------------------
function animate() {
  requestAnimationFrame(animate);

  if (state.physicsEnabled) {
    applyForces();
  }

  updateStickyRings();
  controls.update();
  updateZoomBar();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

animate();

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
  history.replaceState({ hash: window.location.hash }, '', window.location.href);
}
