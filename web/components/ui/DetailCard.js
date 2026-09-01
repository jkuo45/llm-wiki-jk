// ui/DetailCard.js — the slide-up entity detail sheet (Phase 3).
//
// ONE structural render path for the four card variants that were previously
// four near-duplicate innerHTML templates in ui.js (~300 duplicated lines):
//   node · edge (relation) · community · trace-route
//
// Callers map their domain data into props; this module owns the structure
// (head / scroll / metrics / context / sections / actions) and the wiring
// (close, back, head language toggle, Filter / Set A / Set B buttons).
// All text renders as DOM text nodes — no caller-side escaping needed.
// Special link spans (note links, neighbor links) are passed in as
// pre-built Nodes so the delegated listeners in ui.js keep working.

import { h } from './dom.js';
import { enhanceSegmented } from './Segmented.js';

function kvRow({ key, value, swatch, rowClass }) {
  const keyEl = h('span', { class: 'key' },
    swatch ? h('span', { class: 'sw', style: `background:${swatch}` }) : null,
    key);
  const valEl = h('span', { class: 'val' });
  for (const v of [].concat(value)) valEl.append(v.nodeType ? v : String(v));
  return h('div', { class: 'at-kv' + (rowClass ? ' ' + rowClass : '') }, keyEl, valEl);
}

function contextBlock({ text, max = 2800, footer, className }) {
  if (!text) {
    return footer ? h('div', { class: 'field', style: 'margin-top:8px' }, footer) : null;
  }
  const clipped = Number.isFinite(max) && text.length > max
    ? text.slice(0, max) + '…'
    : text;
  return h('div', { class: className || 'wiki-context-card' },
    className ? null : h('span', { class: 'info-muted' }, 'Context'),
    h('div', { class: 'wiki-context-text' }, clipped),
    footer || null);
}

function actionsRow(actions) {
  if (!actions) return null;
  const row = h('div', { class: 'at-node-actions' });
  if (actions.filter) {
    const { label, active, onClick } = actions.filter;
    const btn = h('button', {
      type: 'button', class: 'at-node-btn at-focus' + (active ? ' on' : ''),
      title: 'Filter / 篩選',
      onclick: () => {
        onClick();
        if (actions.filter.active) btn.classList.toggle('on', !!actions.filter.active());
      },
    }, label);
    row.appendChild(btn);
  }
  for (const set of ['a', 'b']) {
    const cfg = actions.sets && actions.sets[set];
    if (!cfg) continue;
    const btn = h('button', {
      type: 'button',
      class: 'at-node-btn at-add' + (cfg.inSet() ? ' on' : ''),
      'data-set': set,
      title: `Add to Set ${set.toUpperCase()} / 加入集合 ${set.toUpperCase()}`,
      onclick: () => {
        cfg.onToggle();
        btn.classList.toggle('on', !!cfg.inSet());
      },
    }, set.toUpperCase());
    row.appendChild(btn);
  }
  return row.children.length ? row : null;
}

/**
 * Render a detail card into `container` (replacing its content).
 *
 * @param {HTMLElement} container  the #at-node-detail sheet
 * @param {Object} p
 *   title       {string}                    card title (plain text)
 *   badge       {string}                    optional type chip after the title
 *   badgeClass  {string}                    chip class (default 'node-type')
 *   badgeColor  {string}                    optional chip color
 *   onBack      {Function|null}             back-nav handler (omit → no button)
 *   onClose     {Function}                  close handler
 *   lang        {{value, onChange}|null}    head EN/中 toggle
 *   metrics     {Array<{key,value,swatch,rowClass}>|null}
 *   rows        {Array<Node>}               pre-built field rows
 *   context     {{text,max,footer}|null}    context/evidence card
 *   sections    {Array<{heading,items,containerId}>|null}
 *   actions     {{filter,sets}|null}        Filter / Set A / Set B
 *   fullBleedTop {boolean}                  route cards: no default row spacing
 */
export function renderDetailCard(container, p = {}) {
  const headLang = p.lang
    ? enhanceSegmented(
        h('div', { class: 'at-node-head-langs' },
          h('button', { type: 'button', 'data-nlang': 'en-US', title: 'English (US)' }, 'EN'),
          h('button', { type: 'button', 'data-nlang': 'zh-TW', title: '繁體中文（台灣）' }, '中')),
        { valueAttr: 'data-nlang', onChange: p.lang.onChange })
    : null;
  if (headLang && p.lang.value) headLang.set(p.lang.value);

  const scroll = h('div', { class: 'at-node-scroll' });

  if (p.metrics && p.metrics.length) {
    scroll.appendChild(h('div', { class: 'at-node-metrics' },
      p.metrics.map(kvRow).filter(Boolean)));
  }
  for (const row of p.rows || []) scroll.appendChild(row);
  const ctx = p.context && contextBlock(p.context);
  if (ctx) scroll.appendChild(ctx);
  for (const s of p.sections || []) {
    if (!s.items || !s.items.length) continue;
    scroll.appendChild(h('div', { class: 'field info-connections' }, s.heading));
    const list = h('div', { id: s.containerId || 'neighbors-list' }, s.items);
    scroll.appendChild(list);
  }

  const actions = actionsRow(p.actions);

  container.replaceChildren(
    h('div', { class: 'at-node-head' },
      h('div', { class: 'at-node-head-top' },
        p.onBack ? h('button', {
          type: 'button', class: 'at-node-back',
          'aria-label': 'Back', title: 'Back',
          onclick: p.onBack, html: '&larr;',
        }) : null,
        h('span', { class: 'at-node-title' },
          p.title,
          p.badge ? h('span', {
            class: p.badgeClass || 'node-type',
            style: p.badgeColor ? `color:${p.badgeColor}` : undefined,
          }, p.badge) : null),
        h('button', {
          type: 'button', class: 'at-node-close',
          'aria-label': 'Close', onclick: p.onClose, html: '&times;',
        })),
      h('div', { class: 'at-node-head-divider' }),
      headLang ? headLang.el : null),
    scroll,
    actions ? h('div', { class: 'at-node-head-actions-row' }, actions) : null,
  );
  container.hidden = false;
}
