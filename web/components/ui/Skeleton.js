// ui/Skeleton.js — loading placeholder renderers (Phase 5).
//
// Shimmer blocks that match the shape of the content they replace, so
// surfaces that stream/fetch data (notes gallery, admin list) show layout
// immediately instead of a spinner or a blank panel. Styling lives in
// three-graph.css (.ui-skeleton / .ui-skeleton-row).

import { h } from './dom.js';

export function skeletonBlock({ className = '', style = null } = {}) {
  return h('div', { class: `ui-skeleton ${className}`.trim(), style, 'aria-hidden': 'true' });
}

// Generic list skeleton: `count` rows of bar + short tail.
export function skeletonRows(count = 6) {
  const wrap = h('div', { class: 'ui-skeleton-list', role: 'status', 'aria-label': 'Loading / 載入中' });
  for (let i = 0; i < count; i++) {
    wrap.appendChild(h('div', { class: 'ui-skeleton-row' },
      h('div', { class: 'ui-skeleton ui-skeleton-bar' }),
      h('div', { class: 'ui-skeleton ui-skeleton-tail' })));
  }
  return wrap;
}

// Gallery-card skeleton: thumbnail block + two text lines.
export function skeletonCards(count = 6) {
  const wrap = h('div', { class: 'ui-skeleton-list ui-skeleton-gallery', role: 'status', 'aria-label': 'Loading / 載入中' });
  for (let i = 0; i < count; i++) {
    wrap.appendChild(h('div', { class: 'ui-skeleton-card' },
      h('div', { class: 'ui-skeleton ui-skeleton-thumb' }),
      h('div', { class: 'ui-skeleton ui-skeleton-line' }),
      h('div', { class: 'ui-skeleton ui-skeleton-line ui-skeleton-line--short' })));
  }
  return wrap;
}
