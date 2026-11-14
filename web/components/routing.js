// URL hash bookkeeping. Depends only on shared state.

import { state } from './state.js';

// Clean Reader URLs: article entries live in the pathname
// (`/article/<slug>`), not the hash. Task/wiki entries stay on the legacy
// hash form (`#reader=task/<id>`, `#reader=wiki/<id>`) because `/wiki/*`
// is the raw .md asset prefix (a rewrite there swallows note fetches) and
// `/note/*` + `/output/*` already serve those entries standalone.
// Internal ids are unchanged (`article/<bare>`), so getArticle, the
// dropdown, and search hits need no knowledge of the URL shape.
export function readerPathForId(id) {
  if (typeof id !== 'string' || !id.startsWith('article/')) return null;
  const bare = id.slice('article/'.length);
  return bare ? '/article/' + encodeURIComponent(bare) : null;
}

export function readerIdFromPath(pathname) {
  const m = /^\/article\/(.+?)\/?$/.exec(pathname || '');
  if (!m) return null;
  let bare = m[1];
  try { bare = decodeURIComponent(bare); } catch { /* malformed % — keep raw */ }
  return bare ? 'article/' + bare : null;
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
  // Notes panel first so the hash always opens with #notes when it's shown.
  //   #notes          → gallery open (no note selected)
  //   #notes=<id>     → lightbox open on that note (legacy `note=<id>` still read)
  if (state.notesOpen) {
    if (state.notesNoteId) {
      parts.push(`notes=${encodeURIComponent(state.notesNoteId)}`);
      if (state.notesPage != null) {
        parts.push(`page=${state.notesPage}`);
      }
      if (state.notesViewMode) {
        parts.push('noteview=full');
      }
    } else {
      parts.push('notes');
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
  // Articles: reader id goes in the pathname (see readerPathForId); the
  // section stays in the hash (`/article/<slug>#section=<id>`). Task/wiki:
  // legacy `#reader=<kind>/<id>` hash form, pathname reset to `/`.
  const articlePath = state.readerId ? readerPathForId(state.readerId) : null;
  if (state.readerId && !articlePath) {
    // Keep the `/` in `kind/id` literal: encodeURIComponent would turn it
    // into %2F, which still round-trips but hides the namespace the change
    // was made for. `/` never collides with the `&`/`=` hash separators.
    parts.push(`reader=${encodeURIComponent(state.readerId).replace(/%2F/gi, '/')}`);
  }
  if (state.readerId && state.readerSection) {
    parts.push(`section=${encodeURIComponent(state.readerSection)}`);
  }
  if (state.chatOpen) {
    parts.push('chat');
    if (state.analysisUiLang && state.analysisUiLang !== 'en-US') {
      parts.push(`uilang=${encodeURIComponent(state.analysisUiLang)}`);
    }
  }
  if (state.analysisOpen) {
    parts.push('analysis');
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
  const url = (articlePath || '/') + window.location.search + hash;
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
