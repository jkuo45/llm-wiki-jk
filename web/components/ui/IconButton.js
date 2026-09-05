// ui/IconButton.js — icon button with busy/ok/err state surface (Phase 2).
//
// Two entry points:
//   createIconButton({ icon, label, title, onClick }) — builds a new button
//     (for JS-composed UI; Phase 3+).
//   enhanceIconButton(el, { label }) — adopts an EXISTING static button and
//     adds the state API without touching its markup (used to migrate
//     hand-rolled icon swaps, e.g. the save-PNG spinner in ui.js).
//
// State API (both modes):
//   setBusy()  — disabled + spinner icon + original label stashed
//   setOk(ms)  — transient success check
//   setErr(ms) — transient failure cross
//   restore()  — back to the original icon/title/label
//   setHidden(bool)

import { h } from './dom.js';

const SPINNER = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9" opacity=".9"/></svg>';
const OK_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ERR_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

function attach(el) {
  const original = { html: el.innerHTML, title: el.title, label: el.getAttribute('aria-label') };
  let restoreTimer = null;
  return {
    el,
    setState(icon, title, cls, ms) {
      clearTimeout(restoreTimer);
      el.classList.remove('busy', 'ok', 'err');
      if (cls) el.classList.add(cls);
      if (icon) el.innerHTML = icon;
      if (title) el.title = title;
      el.disabled = cls === 'busy';
      if (ms) restoreTimer = setTimeout(api.restore, ms);
    },
    setBusy() { this.setState(SPINNER, 'Working… / 處理中…', 'busy'); },
    setOk(ms = 1800) { this.setState(OK_ICON, 'Done ✓ / 完成 ✓', 'ok', ms); },
    setErr(ms = 1800) { this.setState(ERR_ICON, 'Failed ✗ / 失敗 ✗', 'err', ms); },
    restore() {
      clearTimeout(restoreTimer);
      el.classList.remove('busy', 'ok', 'err');
      el.innerHTML = original.html;
      if (original.title) el.title = original.title;
      if (original.label) el.setAttribute('aria-label', original.label);
      el.disabled = false;
    },
    setHidden(hidden) { el.hidden = !!hidden; },
  };
}

export function enhanceIconButton(el) {
  if (!el) throw new Error('enhanceIconButton: element is required');
  return attach(el);
}

export function createIconButton({ icon, label, title, onClick, hidden = false } = {}) {
  if (!label) throw new Error('createIconButton: `label` is required (aria-label)');
  const el = h('button', {
    type: 'button', class: 'ui-icon-btn',
    'aria-label': label, title: title || label,
    onclick: onClick, hidden: hidden || undefined,
    html: icon || '',
  });
  return attach(el);
}
