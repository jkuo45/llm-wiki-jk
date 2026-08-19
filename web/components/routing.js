// URL hash bookkeeping. Depends only on shared state.

import { state } from './state.js';

export function updateHash(pushState = true) {
  if (state.suppressHashUpdate) return;
  const parts = [];
  // Notes panel first so the hash always opens with #notes when it's shown.
  if (state.notesOpen) {
    parts.push('notes');
    if (state.notesUiLang && state.notesUiLang !== 'en-US') {
      parts.push(`uilang=${encodeURIComponent(state.notesUiLang)}`);
    }
    if (state.notesNoteId) {
      parts.push(`note=${encodeURIComponent(state.notesNoteId)}`);
      if (state.notesPage != null) {
        parts.push(`page=${state.notesPage}`);
      }
      if (state.notesViewMode) {
        parts.push('noteview=full');
      }
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
  if (state.readerId) {
    parts.push(`reader=${encodeURIComponent(state.readerId)}`);
    if (state.readerSection) {
      parts.push(`section=${encodeURIComponent(state.readerSection)}`);
    }
  }
  if (state.analysisOpen) {
    parts.push('analysis');
    parts.push(`mode=${encodeURIComponent(state.analysisMode)}`);
  }
  const hash = parts.length ? '#' + parts.join('&') : '';
  const url = window.location.pathname + window.location.search + hash;
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
