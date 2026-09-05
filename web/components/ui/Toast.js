// ui/Toast.js — shared transient-notification queue (Phase 1).
//
// Replaces the hand-rolled single #detail-loaded-toast element in ui.js.
// Features the old implementation lacked:
//   - queue-safe: multiple toasts stack instead of overwriting each other
//   - variants (info / ok / err) with an accent left border
//   - one persistent live region (role="status") so screen readers announce
//     messages without the DOM churning per-toast
//
// Usage:
//   import { toast } from './ui/Toast.js';
//   toast.show('Saved');                          // info, 2.4 s
//   toast.show('Save failed', { variant: 'err' }); // error styling
//   toast.show('Done', { variant: 'ok', duration: 4000 });

import { h } from './dom.js';

const MAX_VISIBLE = 3;
const EXIT_MS = 180;

let container = null;

function ensureContainer() {
  if (container) return container;
  container = h('div', { id: 'ui-toasts', role: 'status', 'aria-live': 'polite' });
  document.body.appendChild(container);
  return container;
}

export function show(text, { variant = 'info', duration = 2400 } = {}) {
  const root = ensureContainer();

  // Cap the stack: drop the oldest toast immediately when over budget.
  while (root.children.length >= MAX_VISIBLE) root.firstChild.remove();

  const el = h('div', { class: `ui-toast ui-toast--${variant}` }, text);
  root.appendChild(el);
  // Double rAF so the entry transition always runs even for back-to-back calls.
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('visible')));

  let timer = null;
  const dismiss = () => {
    if (!el.isConnected) return;
    clearTimeout(timer);
    el.classList.remove('visible');
    setTimeout(() => el.remove(), EXIT_MS);
  };
  if (duration > 0) timer = setTimeout(dismiss, duration);

  return dismiss;
}

export const toast = { show };
