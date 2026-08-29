// Data loading + derived lookup structures. Single top-level await entry point.

const GITHUB_BASE = 'https://github.com/jkuo45/llm-wiki-jk/blob/dev/';

// JSON data files live in web/public/data/ (kept out of the app root so the
// root only holds code, assets, and config). Resolved against the Vite base
// URL so it works in dev, preview, and the bundled production build.
const DATA_BASE = import.meta.env.BASE_URL + 'data/';

// Cache busting: the rebuild script writes data/version.json containing a
// content hash. The tiny version file is fetched with a no-cache query
// string; the larger data files then use the hash (stable within a build, so
// browsers can cache them across visits) instead of Date.now(), which forced
// re-downloading ~11 MB on every page load.
let CACHE_HASH = '';

async function loadCacheTag() {
  try {
    const resp = await fetch(DATA_BASE + 'version.json?x=' + Date.now());
    if (resp.ok) {
      const v = await resp.json();
      CACHE_HASH = (v && (v.hash || v.tag || v.generated)) || '';
    }
  } catch (e) {
    /* version.json missing -> fall back to Date.now() busting below */
  }
}

async function getJSON(name, logName) {
  try {
    const q = CACHE_HASH ? ('?v=' + CACHE_HASH) : ('?v=' + Date.now());
    const resp = await fetch(DATA_BASE + name + q);
    if (!resp.ok) throw new Error(`${resp.status} ${resp.statusText} for ${name}`);
    return await resp.json();
  } catch (e) {
    console.warn(`Could not load ${logName}:`, e);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Critical path vs deferred load
//
// First paint needs: nodes, edges, legend, graph metadata, translations,
// i18n coverage, traces, article/task registries, and predicates. The full
// graph.json (9.5 MB) is NOT loaded — its node array merely duplicated the
// descriptions already present in nodes.json, and only its small `metadata`
// block was consumed (now split into graph-meta.json, ~25 KB).
//
// MANIFEST (~0.5 MB) is deferred: it is only used to resolve GitHub source
// URLs at runtime (hover/click tooltips), so its lookup maps are built
// lazily on first use once the background fetch completes.
// ---------------------------------------------------------------------------
async function loadAllData() {
  const status = document.getElementById('load-status');
  if (status) status.textContent = 'Loading data...';
  await loadCacheTag();
  const [RAW_NODES, RAW_EDGES, LEGEND, GRAPH_META, TRANSLATIONS, I18N_COVERAGE, TRACES, ARTICLES, TASKS, PREDICATES, SUGGESTED_PROMPTS] = await Promise.all([
    getJSON('nodes.json', 'nodes'),
    getJSON('edges.json', 'edges'),
    getJSON('legend.json', 'legend'),
    getJSON('graph-meta.json', 'graph-meta'),
    getJSON('translations-zh-TW.json', 'translations'),
    getJSON('i18n-coverage.json', 'i18n-coverage'),
    getJSON('query.json', 'traces'),
    getJSON('articles.json', 'articles'),
    getJSON('tasks.json', 'tasks'),
    getJSON('predicates-zh-TW.json', 'predicates'),
    getJSON('suggested-prompts.json', 'suggested-prompts'),
  ]);
  return {
    RAW_NODES: RAW_NODES || [],
    RAW_EDGES: RAW_EDGES || [],
    LEGEND: LEGEND || [],
    GRAPH_META: GRAPH_META || {},
    TRANSLATIONS: TRANSLATIONS || {},
    I18N_COVERAGE: I18N_COVERAGE || {},
    TRACES: TRACES || [],
    ARTICLES: ARTICLES || [],
    TASKS: (TASKS && TASKS.tasks) || [],
    PREDICATES: PREDICATES || {},
    SUGGESTED_PROMPTS: SUGGESTED_PROMPTS || {},
  };
}

// ---------------------------------------------------------------------------
// Dataset mode: triples | wiki | combined
//
// The vault yields two graphs that share node ids by norm(label): the triples
// graph (from _triples.json extractions) and the wiki graph (from Obsidian
// [[wikilinks]]). The deployed viewer can show either, or their union. The
// mode is read from the URL hash (`mode=wiki`) so it is shareable/restorable.
// ---------------------------------------------------------------------------
export const DATASET_MODE = getMode();

function getMode() {
  const params = new URLSearchParams(location.hash.replace(/^#\/?/, ""));
  const m = params.get("mode");
  return m === "wiki" || m === "triples" ? m : "combined"; // combined is default
}

export const DATASET_LABELS = {
  triples: "Triples graph (extracted relations)",
  wiki: "Wiki graph (Obsidian wikilinks)",
  combined: "Combined (triples + wiki)", // default dataset
};

// Source-specific datasets (triples keeps the descriptive `triples-*` files;
// the canonical nodes.json/edges.json/... is the combined dataset).
async function loadTriplesData() {
  const [N, E, L, M] = await Promise.all([
    getJSON("triples-nodes.json", "triples-nodes"),
    getJSON("triples-edges.json", "triples-edges"),
    getJSON("triples-legend.json", "triples-legend"),
    getJSON("triples-graph-meta.json", "triples-graph-meta"),
  ]);
  return { nodes: N || [], edges: E || [], legend: L || [], meta: M || {} };
}

async function loadWikiData() {
  const [N, E, L, M] = await Promise.all([
    getJSON("wiki-nodes.json", "wiki-nodes"),
    getJSON("wiki-edges.json", "wiki-edges"),
    getJSON("wiki-legend.json", "wiki-legend"),
    getJSON("wiki-graph-meta.json", "wiki-graph-meta"),
  ]);
  return { nodes: N || [], edges: E || [], legend: L || [], meta: M || {} };
}

// The combined dataset is now the CANONICAL nodes.json / edges.json /
// legend.json / graph-meta.json produced by scripts/05_build_combined.py. It
// is loaded on the critical path for the default "combined" mode; the source
// datasets (triples-* / wiki-*) are loaded only when that mode is selected.

// Live bindings: importers see reassigned values because they reference the
// exported name directly (no destructuring-into-const at their top level).
export let RAW_NODES = [];
export let RAW_EDGES = [];
export let LEGEND = [];
export let GRAPH_META = {};
export let MANIFEST = {};
export let TRACES = [];
export let TRANSLATIONS = {};
export let ARTICLES = [];
export let TASKS = [];
export let PREDICATES = {};
export let I18N_COVERAGE = {};
export let SUGGESTED_PROMPTS = {}; // suggested chat prompts, keyed by UI language

const loaded = await loadAllData();
RAW_NODES = loaded.RAW_NODES;
RAW_EDGES = loaded.RAW_EDGES;
LEGEND = loaded.LEGEND;
GRAPH_META = loaded.GRAPH_META;
TRANSLATIONS = loaded.TRANSLATIONS;
I18N_COVERAGE = loaded.I18N_COVERAGE;
TRACES = loaded.TRACES;
ARTICLES = loaded.ARTICLES;
TASKS = loaded.TASKS;
PREDICATES = loaded.PREDICATES;
SUGGESTED_PROMPTS = loaded.SUGGESTED_PROMPTS;

// ---------------------------------------------------------------------------
// Select the active dataset (triples / wiki / combined) by URL-hash mode.
// RAW_NODES / RAW_EDGES / LEGEND / GRAPH_META are reassigned BEFORE the
// derived lookup structures below are built, so nodeMap / adjacency always
// describe the active dataset (and core.js builds the scene from them).
// ---------------------------------------------------------------------------
let _active;
if (DATASET_MODE === "wiki") {
  _active = await loadWikiData();
} else if (DATASET_MODE === "triples") {
  _active = await loadTriplesData();
} else {
  // combined (the default): the critical-path load (nodes.json) IS the
  // backend-generated combined dataset; nothing more to fetch.
  _active = { nodes: RAW_NODES, edges: RAW_EDGES, legend: LEGEND, meta: GRAPH_META };
}
RAW_NODES = _active.nodes;
RAW_EDGES = _active.edges;
LEGEND = _active.legend;
GRAPH_META = _active.meta;
console.log(`[dataset] mode=${DATASET_MODE}: ${RAW_NODES.length} nodes, ${RAW_EDGES.length} edges`);

// Fetch the heavier manifest in the background — it is not needed for first
// paint, only for source-link resolution at runtime.
loadCacheTag().then(() => {
  const q = CACHE_HASH ? ('?v=' + CACHE_HASH) : ('?v=' + Date.now());
  return fetch(DATA_BASE + 'manifest.json' + q);
}).then(r => r.ok ? r.json() : null).then(m => { if (m) MANIFEST = m; }).catch(() => {});

// ------------------------------------------------------------
// Lazy analysis artifacts — fetched on first Graph-mode open rather
// than at page load. roles-meta.json (~1 KB) carries the role rule
// catalog + live thresholds; link-prediction.json holds the
// Adamic-Adar missing-link candidates and god-node PPR profiles
// emitted by scripts/04_link_prediction.py.
// ------------------------------------------------------------
let ROLES_META = null;
export async function loadRolesMeta() {
  if (ROLES_META) return ROLES_META;
  // Role Explorer is mode-aware: triples -> triples roles, wiki -> wiki roles,
  // combined (default) -> canonical roles.
  const name = DATASET_MODE === 'triples' ? 'triples-roles-meta.json'
    : DATASET_MODE === 'wiki' ? 'wiki-roles-meta.json'
    : 'roles-meta.json';
  ROLES_META = (await getJSON(name, 'roles-meta')) || {};
  return ROLES_META;
}

let LINK_PREDICTION = null;
export async function loadLinkPrediction() {
  if (LINK_PREDICTION) return LINK_PREDICTION;
  const empty = { params: {}, summary: {}, candidates: [], ppr_similar: {} };
  const name = DATASET_MODE === 'triples' ? 'link-prediction.json' : 'wiki-link-prediction.json';
  LINK_PREDICTION = (await getJSON(name, 'link-prediction')) || empty;
  return LINK_PREDICTION;
}

// ------------------------------------------------------------
// Derived lookup structures (built from RAW_NODES / RAW_EDGES so the
// 9.5 MB graph.json is no longer required for descriptions).
// ------------------------------------------------------------
export const nodeMap = new Map();
RAW_NODES.forEach(n => nodeMap.set(n.id, n));

export const descriptionMap = new Map();
export const descriptionZhMap = new Map();
export const descByLabel = new Map();
export const descByLabelZh = new Map();
RAW_NODES.forEach(n => {
  if (n.description) {
    descriptionMap.set(n.id, n.description);
    if (!descByLabel.has(n.label)) descByLabel.set(n.label, n.description);
    const lower = n.label.toLowerCase();
    if (!descByLabel.has(lower)) descByLabel.set(lower, n.description);
  }
  const zh = n.description_zh_TW;
  if (zh && zh !== n.description) {
    descriptionZhMap.set(n.id, zh);
    if (!descByLabelZh.has(n.label)) descByLabelZh.set(n.label, zh);
    const lower = n.label.toLowerCase();
    if (!descByLabelZh.has(lower)) descByLabelZh.set(lower, zh);
  }
});

// Localize a relationship predicate for display in the zh UI. Falls back to
// the English predicate when untranslated. Hand-maintained in
// web/data/predicates-zh-TW.json.
export function predicateZh(pred) {
  if (!pred) return pred;
  return PREDICATES[pred] || PREDICATES[pred.replace(/_/g, ' ')] || pred;
}

export const adjacency = new Map();
RAW_EDGES.forEach(e => {
  if (!adjacency.has(e.from)) adjacency.set(e.from, []);
  if (!adjacency.has(e.to)) adjacency.set(e.to, []);
  adjacency.get(e.from).push({ target: e.to, edge: e });
  adjacency.get(e.to).push({ target: e.from, edge: e });
});

// Case-insensitive basename -> exact manifest path, so note links survive
// label/file-name case differences. Built lazily once MANIFEST has loaded.
let _manifestMapsBuilt = false;
const fileToPath = new Map();
const fileToPathLower = new Map();
function ensureManifestMaps() {
  if (_manifestMapsBuilt || !MANIFEST) return;
  Object.keys(MANIFEST).forEach(p => {
    if (p.endsWith('.md')) fileToPath.set(p.split('/').pop(), p);
  });
  Object.keys(MANIFEST).forEach(p => {
    if (p.endsWith('.md')) {
      const base = p.split('/').pop();
      const lower = base.toLowerCase();
      if (!fileToPathLower.has(lower)) fileToPathLower.set(lower, p);
    }
  });
  _manifestMapsBuilt = true;
}

export function githubSourceUrl(sourceFile) {
  ensureManifestMaps();
  const fullPath = fileToPath.get(sourceFile);
  return GITHUB_BASE + (fullPath ? 'src/' + fullPath : sourceFile);
}

// GitHub URL of the wiki note for a node label, when a matching note file
// exists in the manifest ('' otherwise).
export function noteUrl(label) {
  ensureManifestMaps();
  const p = fileToPath.get(label + '.md') || fileToPathLower.get((label + '.md').toLowerCase());
  return p ? GITHUB_BASE + 'src/' + p : '';
}
