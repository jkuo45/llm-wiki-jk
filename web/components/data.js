// Data loading + derived lookup structures. Single top-level await entry point.

const GITHUB_BASE = 'https://github.com/jkuo45/llm-wiki-jk/blob/dev/';

// JSON data files live in web/data/ (kept out of the app root so the root
// only holds code, assets, and config). Resolve relative to this module so
// it works no matter where the server root is.
const DATA_BASE = new URL('../data/', import.meta.url).href;

// Cache busting: the rebuild script writes data/version.json containing a
// content-hash tag. The tiny version file is fetched with a no-cache query
// string; the larger data files then use the tag (stable within a build, so
// browsers can cache them across visits) instead of Date.now(), which forced
// re-downloading ~11 MB on every page load.
let CACHE_TAG = '';

async function loadCacheTag() {
  try {
    const resp = await fetch(DATA_BASE + 'version.json?x=' + Date.now());
    if (resp.ok) {
      const v = await resp.json();
      CACHE_TAG = (v && (v.tag || v.generated)) || '';
    }
  } catch (e) {
    /* version.json missing -> fall back to Date.now() busting below */
  }
}

async function getJSON(name, logName) {
  try {
    const q = CACHE_TAG ? ('?v=' + CACHE_TAG) : ('?v=' + Date.now());
    const resp = await fetch(DATA_BASE + name + q);
    if (!resp.ok) throw new Error(`${resp.status} ${resp.statusText} for ${name}`);
    return await resp.json();
  } catch (e) {
    console.warn(`Could not load ${logName}:`, e);
    return null;
  }
}

async function loadAllData() {
  const status = document.getElementById('load-status');
  if (status) status.textContent = 'Loading data...';
  await loadCacheTag();
  const [RAW_NODES, RAW_EDGES, LEGEND, graphData, MANIFEST, TRACES, TRANSLATIONS, ARTICLES] = await Promise.all([
    getJSON('nodes.json', 'nodes'),
    getJSON('edges.json', 'edges'),
    getJSON('legend.json', 'legend'),
    getJSON('graph.json', 'graph'),
    getJSON('manifest.json', 'manifest'),
    getJSON('query.json', 'traces'),
    getJSON('translations-zh-TW.json', 'translations'),
    getJSON('articles.json', 'articles'),
  ]);
  return {
    RAW_NODES: RAW_NODES || [],
    RAW_EDGES: RAW_EDGES || [],
    LEGEND: LEGEND || [],
    graphData: graphData || {},
    MANIFEST: MANIFEST || {},
    TRACES: TRACES || [],
    TRANSLATIONS: TRANSLATIONS || {},
    ARTICLES: ARTICLES || [],
  };
}

export const { RAW_NODES, RAW_EDGES, LEGEND, graphData, MANIFEST, TRACES, TRANSLATIONS, ARTICLES } = await loadAllData();

export const nodeMap = new Map();
RAW_NODES.forEach(n => nodeMap.set(n.id, n));

export const descriptionMap = new Map();
(graphData.nodes || []).forEach(n => {
  if (n.description) descriptionMap.set(n.id, n.description);
});

// Entity summaries keyed by node label (exact + lowercase) — used for prompt
// [[Entity]] tooltips/wiki links instead of the retired wiki-context.json.
// Every graph.json node carries a description synthesized from triple
// contexts, so coverage is complete.
export const descByLabel = new Map();
(graphData.nodes || []).forEach(n => {
  if (!n.description) return;
  if (!descByLabel.has(n.label)) descByLabel.set(n.label, n.description);
  const lower = n.label.toLowerCase();
  if (!descByLabel.has(lower)) descByLabel.set(lower, n.description);
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

// Case-insensitive basename -> exact manifest path, so note links survive
// label/file-name case differences.
const fileToPathLower = new Map();
Object.keys(MANIFEST).forEach(p => {
  if (p.endsWith('.md')) {
    const base = p.split('/').pop();
    const lower = base.toLowerCase();
    if (!fileToPathLower.has(lower)) fileToPathLower.set(lower, p);
  }
});

export function githubSourceUrl(sourceFile) {
  const fullPath = fileToPath.get(sourceFile);
  return GITHUB_BASE + (fullPath ? 'src/' + fullPath : sourceFile);
}

// GitHub URL of the wiki note for a node label, when a matching note file
// exists in the manifest ('' otherwise). Replaces the wiki_url field of the
// retired wiki-context.json.
export function noteUrl(label) {
  const p = fileToPath.get(label + '.md') || fileToPathLower.get((label + '.md').toLowerCase());
  return p ? GITHUB_BASE + 'src/' + p : '';
}