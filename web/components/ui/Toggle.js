// ui/Toggle.js — pressed-state toggle button (Phase 2).
//
// One implementation of the "active/inactive pill button" that the settings
// sheet previously hand-rolled five times (physics / labels / edges /
// auto-rotate / reduce motion): aria-pressed + `.active` class are always
// kept in sync, and callers flip state through the API instead of poking
// classList.
//
//   createToggle({ label, pressed, onChange, ariaLabel }) — builds a button.
//   enhanceToggle(el, { onChange }) — adopts an existing static button
//     (keeps its id / stylesheet hooks) and returns the same API.

import { h } from './dom.js';

function attach(el, onChange) {
  const api = {
    el,
    get() { return el.classList.contains('active'); },
    set(pressed) {
      el.classList.toggle('active', !!pressed);
      el.setAttribute('aria-pressed', String(!!pressed));
    },
  };
  el.setAttribute('aria-pressed', String(api.get()));
  if (!el.getAttribute('aria-label') && !el.textContent.trim()) {
    el.setAttribute('aria-label', el.title || 'toggle');
  }
  el.addEventListener('click', () => {
    api.set(!api.get());
    if (onChange) onChange(api.get());
  });
  return api;
}

export function enhanceToggle(el, { onChange } = {}) {
  if (!el) throw new Error('enhanceToggle: element is required');
  return attach(el, onChange);
}

export function createToggle({ label, pressed = false, onChange, ariaLabel } = {}) {
  if (!label) throw new Error('createToggle: `label` is required');
  const el = h('button', {
    type: 'button', class: 'ui-toggle' + (pressed ? ' active' : ''),
    'aria-pressed': String(!!pressed), title: label,
    'aria-label': ariaLabel || label,
  }, label);
  return attach(el, onChange);
}
