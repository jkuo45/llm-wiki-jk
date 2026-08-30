// Shared modal / overlay manager (vanilla JS, no framework).
//
// Centralises what every module used to hand-roll: the `.visible` class
// toggle, Escape-key handling (topmost overlay first), backdrop-click
// dismissal, focus save/restore, and an open-overlay stack so nested or
// stacked overlays close in the right order.
//
// Usage:
//   registerModal('wiki-modal', 'wiki-modal-overlay');            // idempotent
//   registerModal('reader', 'page-modal-overlay', {
//     closeOnBackdrop: true,
//     onClose: () => { ...cleanup... },
//   });
//   openModal('reader'); closeModal('reader'); isModalOpen('reader');
//
// Panels that use a different visibility mechanism can opt into inline
// display toggling with `mode: 'display'` (show => style.display='flex').

const registry = new Map(); // name -> { el, closeOnBackdrop, onClose, mode, lastFocus }
const stack = [];           // names of currently open overlays, bottom → top

function resolveEl(elOrId) {
  return typeof elOrId === 'string' ? document.getElementById(elOrId) : elOrId;
}

function elVisible(entry) {
  return entry.mode === 'display'
    ? entry.el.style.display === 'flex'
    : entry.el.classList.contains('visible');
}

function showEl(entry, visible) {
  if (entry.mode === 'display') {
    entry.el.style.display = visible ? 'flex' : 'none';
  } else {
    entry.el.classList.toggle('visible', visible);
  }
}

// ------------------------------------------------------------
// Registration (idempotent — shared overlays may be registered
// by whichever module loads first; others reuse the entry).
// ------------------------------------------------------------
export function registerModal(name, elOrId, opts = {}) {
  if (registry.has(name)) return registry.get(name);
  const entry = {
    el: resolveEl(elOrId),
    closeOnBackdrop: opts.closeOnBackdrop !== false,
    onClose: opts.onClose || null,
    mode: opts.mode || 'class',
    lastFocus: null,
  };
  if (!entry.el) throw new Error(`modal.js: no element for "${name}"`);
  // Dialog semantics + focus-trap anchor. Overlays are application-modal
  // surfaces (reader, wiki modal, HTML mode), so expose them as dialogs and
  // keep Tab cycling inside while open.
  entry.el.setAttribute('role', 'dialog');
  entry.el.setAttribute('aria-modal', 'true');
  if (!entry.el.hasAttribute('tabindex')) entry.el.setAttribute('tabindex', '-1');
  registry.set(name, entry);

  // Backdrop dismissal: a click landing on the overlay itself (not its
  // children) closes the overlay. Close buttons (id `X-close` for overlay
  // `X-overlay`, or any `[data-modal-close]` descendant) also close it.
  entry.el.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-modal-close], .modal-close');
    const btnId = entry.el.id ? entry.el.id.replace(/-overlay$/, '') + '-close' : null;
    const isCloseBtn = closeBtn || (btnId && e.target.closest('#' + btnId));
    if (isCloseBtn) {
      closeModal(name);
      return;
    }
    if (!entry.closeOnBackdrop) return;
    if (e.target !== entry.el) return;
    if (stack[stack.length - 1] !== name) return; // only the topmost overlay
    closeModal(name);
  });
  return entry;
}

// ------------------------------------------------------------
// Open / close / query
// ------------------------------------------------------------
// Focusable elements inside an overlay, in DOM order (Tab/Shift+Tab cycle).
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), ' +
  'select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function openModal(name) {
  const entry = registry.get(name);
  if (!entry || elVisible(entry)) return;
  entry.lastFocus = document.activeElement;
  showEl(entry, true);
  stack.push(name);
  // Establish a focus context inside the overlay so the Tab trap below works
  // immediately (focusing the container itself doesn't disturb the caret or
  // scroll position, and screen readers announce the dialog is open).
  try { entry.el.focus({ preventScroll: true }); } catch (err) {}
}

export function closeModal(name) {
  const entry = registry.get(name);
  if (!entry || !elVisible(entry)) return;
  showEl(entry, false);
  const i = stack.lastIndexOf(name);
  if (i !== -1) stack.splice(i, 1);
  if (entry.onClose) entry.onClose();
  if (entry.lastFocus && typeof entry.lastFocus.focus === 'function') {
    try { entry.lastFocus.focus({ preventScroll: true }); } catch (err) {}
  }
  entry.lastFocus = null;
}

export function toggleModal(name) {
  if (isModalOpen(name)) closeModal(name);
  else openModal(name);
}

export function isModalOpen(name) {
  const entry = registry.get(name);
  return !!(entry && elVisible(entry));
}

export function anyModalOpen() {
  return stack.length > 0;
}

// ------------------------------------------------------------
// Keyboard: one listener for all registered overlays. Escape closes
// the topmost open overlay; when one is open the event is consumed so
// per-panel handlers (analysis panel, notes gallery) don't also fire.
// Tab is trapped inside the topmost overlay while it is open.
// ------------------------------------------------------------
document.addEventListener('keydown', (e) => {
  if (stack.length === 0) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal(stack[stack.length - 1]);
    return;
  }
  if (e.key !== 'Tab') return;
  const entry = registry.get(stack[stack.length - 1]);
  if (!entry || !entry.el) return;
  const focusables = Array.from(entry.el.querySelectorAll(FOCUSABLE))
    .filter((el) => el.offsetParent !== null || el === document.activeElement);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;
  const inside = entry.el.contains(active);
  if (!inside) {
    // Focus drifted outside (e.g. click on the canvas) — pull it back in.
    e.preventDefault();
    (e.shiftKey ? last : first).focus({ preventScroll: true });
  } else if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus({ preventScroll: true });
  } else if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus({ preventScroll: true });
  }
});
