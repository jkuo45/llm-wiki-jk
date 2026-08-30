// Pure graph math over the active dataset — no DOM, no rendering. Consumed by
// analysis.js (Explore tools + prompt highlighting). Everything derives from
// data.js's live bindings, so it always describes the active dataset mode.

import { RAW_NODES, RAW_EDGES, TRANSLATIONS, nodeMap, adjacency } from './data.js';
import { labelBoundaryRegex } from './markdown.js';

// A lowercase index of node labels -> node id. Used to find the nodes "most
// related" to a query/response locally whenever the server does not (or does
// not fully) specify which nodes a prompt turn touches.
const labelDataIndex = new Map();
RAW_NODES.forEach(n => {
  const label = String(n.label || '').toLowerCase().trim();
  if (label) labelDataIndex.set(label, n.id);
});

// Find nodes whose canonical label (or Chinese translation) appears in a blob
// of text (the user's question + the assistant's response).
export function matchNodesInText(blob) {
  const text = ' ' + String(blob || '').toLowerCase() + ' ';
  const matchedIds = new Set();
  // Prefer exact English labels; skip empty ones.
  labelDataIndex.forEach((nodeId, label) => {
    if (!label) return;
    if (labelBoundaryRegex(label).test(text)) matchedIds.add(nodeId);
  });
  // Also match against translated labels where available.
  RAW_NODES.forEach(n => {
    const zh = TRANSLATIONS[n.label];
    if (!zh || !n.id || matchedIds.has(n.id)) return;
    if (labelBoundaryRegex(String(zh)).test(text)) matchedIds.add(n.id);
  });
  return matchedIds;
}

// Return only the set of edges whose endpoints are BOTH in the node set.
export function edgesBetween(nodeIds) {
  const present = new Set(nodeIds);
  const pairs = new Map();
  RAW_EDGES.forEach(e => {
    if (present.has(e.from) && present.has(e.to)) {
      const key = [e.from, e.to].sort().join('::');
      if (!pairs.has(key)) pairs.set(key, [e.from, e.to]);
    }
  });
  return Array.from(pairs.values());
}

// Multi-source BFS (max depth 6) from a seed set over the undirected adjacency.
// `distance` maps node -> hops from the nearest seed; `from` maps each reached
// node to the seed it was reached from (for "shortest A → B" reporting).
export function bfsFromSets(seedIds) {
  const distance = new Map();
  const from = new Map();
  const q = [];
  seedIds.forEach(id => { if (!distance.has(id)) { distance.set(id, 0); from.set(id, id); q.push(id); } });
  let head = 0; const MAX = 6;
  while (head < q.length) {
    const cur = q[head++];
    const d = distance.get(cur);
    if (d >= MAX) break;
    (adjacency.get(cur) || []).forEach(a => {
      if (!distance.has(a.target)) {
        distance.set(a.target, d + 1);
        from.set(a.target, from.get(cur));
        q.push(a.target);
      }
    });
  }
  return { distance, from };
}

// Memoized derived metrics computed once from the loaded graph. No server
// call: nodes already carry degree / pagerank / betweenness / community, and
// the LEGEND array describes communities.
let datasetStats = null;
export function computeDatasetStats() {
  if (datasetStats) return datasetStats;
  const N = RAW_NODES.length, E = RAW_EDGES.length;
  const commIds = new Set(RAW_NODES.map(n => n.community));
  const nodesByCommunity = new Map();
  RAW_NODES.forEach(n => {
    if (!nodesByCommunity.has(n.community)) nodesByCommunity.set(n.community, []);
    nodesByCommunity.get(n.community).push(n);
  });
  const hubs = RAW_NODES.slice().sort((a, b) => (b.degree || 0) - (a.degree || 0));
  const connectors = RAW_NODES.slice().sort((a, b) => (b.betweenness || 0) - (a.betweenness || 0));
  const pagerankLeaders = RAW_NODES.slice().sort((a, b) => (b.pagerank || 0) - (a.pagerank || 0));
  const meanPagerank = RAW_NODES.reduce((s, n) => s + (n.pagerank || 0), 0) / Math.max(1, N);
  const meanClustering = RAW_NODES.reduce((s2, n) => s2 + (n.clustering || 0), 0) / Math.max(1, N);
  const maxKCore = RAW_NODES.reduce((m, n) => Math.max(m, n.k_core || 0), 0);
  const degrees = RAW_NODES.map(n => n.degree || 0).sort((a, b) => a - b);
  const medianDegree = degrees.length ? degrees[Math.floor(degrees.length / 2)] : 0;
  const crossComm = new Map();
  RAW_NODES.forEach(n => {
    const comms = new Set();
    (adjacency.get(n.id) || []).forEach(a => {
      const tn = nodeMap.get(a.target);
      if (tn) comms.add(tn.community);
    });
    crossComm.set(n.id, comms.size);
  });
  const bridgingCount = RAW_NODES.filter(n => (crossComm.get(n.id) || 1) >= 2).length;
  datasetStats = {
    N, E,
    communities: commIds.size,
    avgDegree: degrees.length
      ? degrees.reduce((s, d) => s + d, 0) / degrees.length
      : 0,
    density: (2 * E) / (N * Math.max(1, N - 1)),
    godNodes: hubs.slice(0, 10),
    meanPagerank,
    meanClustering,
    maxKCore,
    medianDegree,
    bridgingCount,
    hubs, connectors, pagerankLeaders, nodesByCommunity, crossComm,
  };
  return datasetStats;
}
