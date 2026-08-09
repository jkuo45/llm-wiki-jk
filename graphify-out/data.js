// Data loading + derived lookup structures. Single top-level await entry point.

const GITHUB_BASE = 'https://github.com/jkuo45/llm-wiki-jk/blob/dev/';

async function getJSON(url, logName) {
  try {
    const resp = await fetch(url + '?v=' + Date.now());
    return await resp.json();
  } catch (e) {
    console.warn(`Could not load ${logName}:`, e);
    return null;
  }
}

async function loadAllData() {
  const status = document.getElementById('load-status');
  if (status) status.textContent = 'Loading data...';
  const [RAW_NODES, RAW_EDGES, LEGEND, graphData, MANIFEST, WIKI_CONTEXT, TRACES, TRANSLATIONS] = await Promise.all([
    getJSON('nodes.json', 'nodes'),
    getJSON('edges.json', 'edges'),
    getJSON('legend.json', 'legend'),
    getJSON('graph.json', 'graph'),
    getJSON('manifest.json', 'manifest'),
    getJSON('wiki-context.json', 'wiki-context'),
    getJSON('traces.json', 'traces'),
    getJSON('translations-zh-TW.json', 'translations'),
  ]);
  return {
    RAW_NODES: RAW_NODES || [],
    RAW_EDGES: RAW_EDGES || [],
    LEGEND: LEGEND || [],
    graphData: graphData || {},
    MANIFEST: MANIFEST || {},
    WIKI_CONTEXT: WIKI_CONTEXT || {},
    TRACES: TRACES || [],
    TRANSLATIONS: TRANSLATIONS || {},
  };
}

export const { RAW_NODES, RAW_EDGES, LEGEND, graphData, MANIFEST, WIKI_CONTEXT, TRACES, TRANSLATIONS } = await loadAllData();

export const nodeMap = new Map();
RAW_NODES.forEach(n => nodeMap.set(n.id, n));

export const descriptionMap = new Map();
(graphData.nodes || []).forEach(n => {
  if (n.description) descriptionMap.set(n.id, n.description);
});

export const adjacency = new Map();
RAW_EDGES.forEach(e => {
  if (!adjacency.has(e.from)) adjacency.set(e.from, []);
  if (!adjacency.has(e.to)) adjacency.set(e.to, []);
  adjacency.get(e.from).push({ target: e.to, edge: e });
  adjacency.get(e.to).push({ target: e.from, edge: e });
});

const fileToPath = new Map();
Object.keys(MANIFEST).forEach(p => {
  if (p.endsWith('.md')) {
    fileToPath.set(p.split('/').pop(), p);
  }
});

export function githubSourceUrl(sourceFile) {
  const fullPath = fileToPath.get(sourceFile);
  return GITHUB_BASE + (fullPath ? 'src/' + fullPath : sourceFile);
}
