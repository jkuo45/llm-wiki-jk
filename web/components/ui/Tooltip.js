// ui/Tooltip.js — the shared wiki-entity tooltip singleton (Phase 4).
//
// Consolidates the two near-identical implementations that previously fought
// over the same #wiki-tooltip element (ui.js node-card links vs analysis.js
// prompt entity links): one positioning routine, one show/hide lifecycle,
// and repositioning on scroll/resize while visible.
//
// Content is passed as plain data and rendered as DOM text nodes — callers
// no longer hand-escape HTML.
//
// Usage (delegated hover wiring stays in the feature module):
//   showWikiTooltip(anchor, { title, body, hint });
//   repositionWikiTooltip(anchor);
//   hideWikiTooltip();

import { h } from './dom.js';

let el = null;
let visible = false;
let currentAnchor = null;
let repositionRAF = 0;

function ensureEl() {
  if (el) return el;
  el = document.getElementById('wiki-tooltip');
  if (!el) {
    el = h('div', { id: 'wiki-tooltip', role: 'tooltip' });
    document.body.appendChild(el);
  }
  return el;
}

// Shared viewport-aware placement: below the anchor, flipped above when it
// would overflow the bottom, clamped to an 8px margin on every edge.
function position(anchor) {
  const tip = ensureEl();
  const r = anchor.getBoundingClientRect();
  let left = r.left;
  let top = r.bottom + 8;
  const tw = tip.offsetWidth || 340;
  const th = tip.offsetHeight || 160;
  if (left + tw > window.innerWidth - 8) left = window.innerWidth - tw - 8;
  if (top + th > window.innerHeight - 8) top = r.top - th - 8;
  if (left < 8) left = 8;
  if (top < 8) top = 8;
  tip.style.left = left + 'px';
  tip.style.top = top + 'px';
}

function onReposition() {
  if (!visible || !currentAnchor) return;
  position(currentAnchor);
  repositionRAF = requestAnimationFrame(onReposition);
}

export function showWikiTooltip(anchor, { title, body, hint } = {}) {
  const tip = ensureEl();
  tip.replaceChildren(
    h('b', {}, title || ''),
    body || null,
    hint ? h('span', { class: 'wiki-tooltip-hint' }, hint) : null,
  );
  currentAnchor = anchor;
  visible = true;
  tip.classList.add('visible');
  position(anchor);
  cancelAnimationFrame(repositionRAF);
  repositionRAF = requestAnimationFrame(onReposition);
}

// Lightweight body-only variant matching the old "no summary stored" card.
export function showWikiTooltipHint(anchor, title, hint) {
  showWikiTooltip(anchor, { title, hint });
}

export function repositionWikiTooltip(anchor) {
  if (!visible || !anchor) return;
  currentAnchor = anchor;
  position(anchor);
}

export function hideWikiTooltip() {
  if (!visible || !el) return;
  visible = false;
  currentAnchor = null;
  cancelAnimationFrame(repositionRAF);
  el.classList.remove('visible');
}
