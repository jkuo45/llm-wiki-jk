// URL hash bookkeeping. Depends only on shared state.

import { state } from './state.js';

// Clean Reader URLs: every entry lives in the pathname
// (`/article/<slug>`, `/task/<bare>`, `/wiki/<bare>`), not the hash.
// No _redirects rule serves them — Workers Assets' SPA fallback
// (wrangler.jsonc) serves the shell for any unmatched path, and the shell
// reads the id from location.pathname. `/wiki/<bare>` is safe despite the
// .md asset prefix: assets are `/wiki/<lang>/…` (multi-segment) while a
// reader bare is a single segment, and asset matches always win first.
// Internal ids are unchanged (`<kind>/<bare>`), so getArticle, the
// dropdown, and search hits need no knowledge of the URL shape.
const READER_KINDS = new Set(['article', 'task', 'wiki']);
// Index entries collapse to the plural root: /articles, /tasks, /wiki
// (the -zh editions share the same index document, suffix preserved).
// The registry rows themselves stay — they are generated, and the default
// landing, source tabs, and back-links all resolve through them.
const INDEX_BARE = { article: 'articles-index', task: 'tasks-index', wiki: 'wiki-index' };
const INDEX_PLURAL = { article: 'articles', task: 'tasks', wiki: 'wiki' };
export function readerPathForId(id) {
  if (typeof id !== 'string') return null;
  const slash = id.indexOf('/');
  if (slash === -1) return null;
  const kind = id.slice(0, slash);
  const bare = id.slice(slash + 1);
  if (!READER_KINDS.has(kind) || !bare) return null;
  const zh = bare.endsWith('-zh');
  const stem = zh ? bare.slice(0, -3) : bare;
  if (stem === INDEX_BARE[kind]) return '/' + INDEX_PLURAL[kind] + (zh ? '-zh' : '');
  return '/' + kind + '/' + encodeURIComponent(bare);
}

export function readerIdFromPath(pathname) {
  // Plural index roots first (/articles, /tasks, /wiki, optional -zh).
  const idx = /^\/(articles|tasks|wiki)(-zh)?\/?$/.exec(pathname || '');
  if (idx) {
    const kind = { articles: 'article', tasks: 'task', wiki: 'wiki' }[idx[1]];
    return kind + '/' + INDEX_BARE[kind] + (idx[2] || '');
  }
  // Bare ids never contain '/', so a multi-segment remainder under any
  // prefix is an asset path (e.g. /wiki/en-US/…md), never a reader URL.
  const m = /^\/(article|task|wiki)\/([^/]+?)\/?$/.exec(pathname || '');
  if (!m) return null;
  let bare = m[2];
  try { bare = decodeURIComponent(bare); } catch { /* malformed % — keep raw */ }
  return bare ? m[1] + '/' + bare : null;
}

// Panel paths, same deal as the reader: `/analysis` and `/notes/<id>`
// live in the pathname; legacy `/#analysis`, `/#notes=<id>` (and the
// `note=<id>` spelling) still restore via the hash fallback in graph-main.
// Note ids are encoded single segments (encodeURIComponent), so `/notes`
// (gallery) vs `/notes/<id>` (lightbox) can never collide with assets —
// nothing is served under /notes/ or /analysis/.
export function notesIdFromPath(pathname) {
  const m = /^\/notes(?:\/([^/]+?))?\/?$/.exec(pathname || '');
  if (!m) return null;
  if (!m[1]) return true; // bare /notes → gallery
  let id = m[1];
  try { id = decodeURIComponent(id); } catch { /* malformed % — keep raw */ }
  return id || true;
}

export function analysisFromPath(pathname) {
  return /^\/analysis\/?$/.test(pathname || '');
}

// The panel is labelled "Prompt" in the UI, so the canonical path is
// /prompt; /chat (the internal flag name) still resolves as a legacy alias.
export function chatFromPath(pathname) {
  return /^\/(prompt|chat)\/?$/.test(pathname || '');
}

// Bare-fragment section fallback: hand-authored `/article/<slug>#animations`
// (or `#tour=on&step=2`) carries no `section=` key. Known hash keys are
// excluded so `#notes`/`#chat` etc. are never mistaken for a section id.
const KNOWN_HASH_KEYS = new Set([
  'mode', 'notes', 'note', 'page', 'noteview', 'uilang', 'trace', 'route',
  'node', 'edge', 'reader', 'section', 'chat', 'analysis',
]);
export function bareSectionFromParams(params) {
  if (!params) return null;
  if (typeof params.tour === 'string') {
    return params.step !== undefined
      ? `tour=${params.tour}&step=${params.step}`
      : `tour=${params.tour}`;
  }
  const bare = Object.keys(params).filter((k) => params[k] === true && !KNOWN_HASH_KEYS.has(k));
  return bare.length === 1 ? bare[0] : null;
}

export function updateHash(pushState = true) {
  if (state.suppressHashUpdate) return;
  const parts = [];
  // Preserve the dataset mode (wiki / triples only). Combined is the default
  // and is never written to the hash; the mode is read from the hash once at
  // page load (data.js), so every hash rewrite must carry a non-default mode
  // forward — otherwise any interaction (select, reset camera…) drops it and
  // a reload falls back to the combined default.
  const currentParams = new URLSearchParams(location.hash.replace(/^#\/?/, ""));
  const mode = currentParams.get("mode");
  if (mode === "wiki" || mode === "triples") parts.push(`mode=${encodeURIComponent(mode)}`);
  // Notes panel: id lives in the pathname (/notes, /notes/<id>); page /
  // noteview / uilang stay in the hash. Legacy `#notes=<id>` still read.
  // Only one panel owns the pathname (reader > notes > analysis > chat);
  // a panel that loses the path keeps its hash form so combined state
  // round-trips.
  const readerPath = state.readerId ? readerPathForId(state.readerId) : null;
  const notesPath = state.notesOpen && !readerPath
    ? (state.notesNoteId ? '/notes/' + encodeURIComponent(state.notesNoteId) : '/notes')
    : null;
  const analysisPath = state.analysisOpen && !readerPath && !notesPath ? '/analysis' : null;
  const chatPath = state.chatOpen && !readerPath && !notesPath && !analysisPath ? '/prompt' : null;
  if (state.notesOpen) {
    if (!notesPath) {
      parts.push(state.notesNoteId
        ? `notes=${encodeURIComponent(state.notesNoteId)}` : 'notes');
    }
    if (state.notesNoteId && state.notesPage != null) {
      parts.push(`page=${state.notesPage}`);
    }
    if (state.notesNoteId && state.notesViewMode) {
      parts.push('noteview=full');
    }
    if (state.notesUiLang && state.notesUiLang !== 'en-US') {
      parts.push(`uilang=${encodeURIComponent(state.notesUiLang)}`);
    }
  }
  if (state.activeTrace) {
    parts.push(`trace=${encodeURIComponent(state.activeTrace.id)}`);
    if (state.activeRouteIdx >= 0) parts.push(`route=${state.activeRouteIdx}`);
  }
  if (state.selectedNode) {
    parts.push(`node=${encodeURIComponent(state.selectedNode)}`);
  }
  if (state.selectedEdge) {
    parts.push(`edge=${encodeURIComponent(state.selectedEdge.from)},${encodeURIComponent(state.selectedEdge.to)}`);
  }
  // Reader id goes in the pathname (see readerPathForId); the section
  // stays in the hash (`/<kind>/<bare>#section=<id>`).
  if (state.readerId && state.readerSection) {
    parts.push(`section=${encodeURIComponent(state.readerSection)}`);
  }
  if (state.chatOpen) {
    if (!chatPath) parts.push('chat');
    if (state.analysisUiLang && state.analysisUiLang !== 'en-US') {
      parts.push(`uilang=${encodeURIComponent(state.analysisUiLang)}`);
    }
  }
  if (state.analysisOpen) {
    if (!analysisPath) parts.push('analysis');
    if (state.analysisUiLang && state.analysisUiLang !== 'en-US') {
      parts.push(`uilang=${encodeURIComponent(state.analysisUiLang)}`);
    }
  } else if (state.activeTrace || state.selectedNode || state.selectedEdge) {
    // Panel closed but a selection persists: mark `analysis=off` so the hash
    // round-trips faithfully (restore keeps the panel closed) while a
    // hand-authored `#node=…` deep link (no marker) still opens it on restore.
    parts.push('analysis=off');
  }
  const hash = parts.length ? '#' + parts.join('&') : '';
  const url = (readerPath || notesPath || analysisPath || chatPath || '/') + window.location.search + hash;
  // Skip when nothing changed — avoids stacking duplicate history entries when
  // several handlers push the same state in quick succession (e.g. opening a
  // note runs openLightbox → setPage). Compare full
  // URLs: the relative `url` above rewrites against the current location.
  if (new URL(url, window.location.href).href === window.location.href) return;
  if (pushState) {
    history.pushState({ hash }, '', url);
  } else {
    history.replaceState({ hash }, '', url);
  }
}

export function parseHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return null;
  const params = {};
  hash.split('&').forEach(pair => {
    if (!pair) return;
    const eq = pair.indexOf('=');
    if (eq === -1) {
      params[decodeURIComponent(pair)] = true;
    } else {
      const k = pair.slice(0, eq);
      const v = pair.slice(eq + 1);
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v);
    }
  });
  return params;
}
