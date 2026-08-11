// URL hash bookkeeping. Depends only on shared state.

import { state } from './state.js';

export function updateHash(pushState = true) {
  if (state.suppressHashUpdate) return;
  const parts = [];
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
  const hash = parts.length ? '#' + parts.join('&') : '';
  const url = window.location.pathname + window.location.search + hash;
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
    const [k, v] = pair.split('=');
    if (k && v !== undefined) params[decodeURIComponent(k)] = decodeURIComponent(v);
  });
  return params;
}
