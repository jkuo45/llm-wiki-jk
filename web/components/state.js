// Mutable application state shared across modules.
// Module-local mutable containers that must be shared across modules live here too.

// ------------------------------------------------------------
// Persisted user settings (graph view preferences). Loaded once at module
// init so the Three.js scene builds with the saved values; ui.js writes on
// change and persists via persistSettings(). Physics is intentionally NOT
// persisted — the layout is precomputed and a physics run on load would yank
// the graph around, so it always starts off.
// ------------------------------------------------------------
export const SETTINGS_KEY = 'llm-wiki-graph-settings';
export const SETTINGS_DEFAULTS = {
  showLabels: true,
  showEdges: true,
  edgeOpacity: 0.25,        // resting edge alpha (0–1)
  edgeColorMode: 'source',  // 'source' → gray/orange by edge kind | 'mono' → single colour
  edgeColor: '#9aa3b2',     // mono edge colour (defaults to the wiki-edge gray)
  nodeSizeScale: 1,         // 0.5–2 × base node radius
  sizeMetric: 'default',    // 'default' | 'degree' | 'pagerank' | 'uniform'
  edgeMinConfidence: 0,     // hide edges with confidence_score below this (0 = show all)
  labelSensitivity: 50,     // 0–100 — 50 matches the original degree thresholds
  labelSize: 13,            // px base font size for .node-label
  labelLang: 'both',        // 'both' | 'en' | 'zh' — node label text
  minDegree: 0,             // hide nodes with degree below this
  autoRotate: false,        // slow turntable spin
  autoRotateSpeed: 2,       // OrbitControls units (2 ≈ one orbit / 30 s)
  zoomSpeed: 1.2,           // OrbitControls zoom speed
  reduceMotion: false,      // skip camera flights + force auto-rotate off
  renderQuality: 'retina',  // 'retina' (≤2× DPR) | 'standard' (1×) | 'performance' (0.75×)
  accentColor: '',          // '' = theme default (light #0F766E / dark #4E79A7); hex string overrides --accent
  cellMode: false,          // cytoplasm view: membrane + organelle anchors
};

function loadSettings() {
  const s = { ...SETTINGS_DEFAULTS };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved && typeof saved === 'object') {
        // Only copy keys whose type matches the default (guards corrupt saves).
        for (const k of Object.keys(SETTINGS_DEFAULTS)) {
          if (typeof saved[k] === typeof SETTINGS_DEFAULTS[k]) s[k] = saved[k];
        }
      }
    }
  } catch (e) { /* corrupt or unavailable storage — keep defaults */ }
  return s;
}

export function persistSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); } catch (e) { /* ignore */ }
}

export function resetSettings() {
  state.settings = { ...SETTINGS_DEFAULTS };
  persistSettings();
}

export const state = {
  selectedNode: null,
  selectedEdge: null,
  hoveredNode: null,
  hoveredEdge: null,
  activeTrace: null,
  activeRouteIdx: -1,
  focusedCommunity: null,
  physicsEnabled: false,
  showLabels: true,
  settings: loadSettings(),
  theme: 'light', // 'light' | 'dark' — mirrors the llm-wiki-theme preference
  suppressHashUpdate: false,
  readerId: null,
  readerSection: null,
  analysisOpen: false,
  analysisMode: 'graph',
  analysisUiLang: 'en-US', // analysis panel language ('en-US' | 'zh-TW')
  chatOpen: false, // floating prompt/chat window (bottom-right launcher)
  // Notes panel (gallery / lightbox). Synced to the URL hash by
  // notes.js → routing.updateHash() so a note can be deep-linked.
  notesOpen: false,
  notesNoteId: null,
  notesPage: null,
  notesViewMode: false,
  notesUiLang: 'en-US', // panel/note content language ('en-US' | 'zh-TW')
  // Minimap (graph overview, bottom-right).
  minimapBackbone: false, // true → show only Core-backbone edges
};

export const stickyNodes = new Set();
export const velocities = new Map();
