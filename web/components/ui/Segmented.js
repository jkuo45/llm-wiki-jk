// ui/Segmented.js — mutually-exclusive button group (Phase 2).
//
// One implementation of the four segmented controls the app previously
// hand-rolled (theme Light/Dark, reader Articles/Tasks, chat MD/HTML,
// admin tabs): roving tabindex + Arrow-key navigation, aria-checked
// radiogroup semantics, `.active` class kept in sync.
//
//   createSegmented({ options, value, ariaLabel, onChange }) — builds one.
//   enhanceSegmented(container, { valueAttr, onChange }) — adopts an
//     existing group; child buttons expose their value via `valueAttr`
//     (default: data-value, falling back to data-lang / data-theme /
//     data-mode / data-source when present).

import { h } from './dom.js';

const FALLBACK_ATTRS = ['data-value', 'data-lang', 'data-theme', 'data-mode', 'data-source', 'data-tab'];

function valueOf(btn, valueAttr) {
  for (const a of (valueAttr ? [valueAttr, ...FALLBACK_ATTRS] : FALLBACK_ATTRS)) {
    if (btn.hasAttribute(a)) return btn.getAttribute(a);
  }
  return btn.dataset.value || '';
}

function attach(container, buttons, { valueAttr, onChange } = {}) {
  if (!container.getAttribute('role')) container.setAttribute('role', 'radiogroup');

  const api = {
    el: container,
    buttons,
    get() {
      const active = buttons.find(b => b.classList.contains('active'));
      return active ? valueOf(active, valueAttr) : null;
    },
    set(value) {
      buttons.forEach(b => {
        const on = valueOf(b, valueAttr) === value;
        b.classList.toggle('active', on);
        b.setAttribute('aria-checked', String(on));
        b.tabIndex = on ? 0 : -1;
      });
    },
  };

  buttons.forEach((btn) => {
    btn.setAttribute('role', 'radio');
    btn.type = 'button';
    btn.addEventListener('click', () => {
      if (api.get() === valueOf(btn, valueAttr)) return; // no re-select churn
      api.set(valueOf(btn, valueAttr));
      if (onChange) onChange(api.get());
    });
    btn.addEventListener('keydown', (e) => {
      const i = buttons.indexOf(btn);
      let next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = buttons[(i + 1) % buttons.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = buttons[(i - 1 + buttons.length) % buttons.length];
      else if (e.key === 'Home') next = buttons[0];
      else if (e.key === 'End') next = buttons[buttons.length - 1];
      if (next) {
        e.preventDefault();
        next.focus();
        next.click(); // routes through the click path → onChange fires once
      }
    });
  });

  api.set(api.get()); // normalize initial aria/tabindex from the static markup
  return api;
}

export function enhanceSegmented(container, { valueAttr, onChange } = {}) {
  if (!container) throw new Error('enhanceSegmented: container is required');
  const buttons = Array.from(container.querySelectorAll('button'));
  if (!buttons.length) throw new Error('enhanceSegmented: no buttons found');
  return attach(container, buttons, { valueAttr, onChange });
}

export function createSegmented({ options, value, ariaLabel, onChange, valueAttr = 'data-value' } = {}) {
  if (!Array.isArray(options) || !options.length) {
    throw new Error('createSegmented: `options` is required');
  }
  const container = h('div', {
    class: 'ui-segmented', role: 'radiogroup',
    'aria-label': ariaLabel || 'options',
  }, options.map(o => h('button', {
    type: 'button', class: 'ui-segmented-btn', [valueAttr]: o.value,
    title: o.title || undefined, 'aria-label': o.ariaLabel || o.title || o.label,
  }, o.label)));
  const api = attach(container, Array.from(container.querySelectorAll('button')), { valueAttr, onChange });
  if (value != null) api.set(value);
  return api;
}
