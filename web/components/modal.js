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
export function openModal(name) {
  const entry = registry.get(name);
  if (!entry || elVisible(entry)) return;
  entry.lastFocus = document.activeElement;
  showEl(entry, true);
  stack.push(name);
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
// ------------------------------------------------------------
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || stack.length === 0) return;
  e.preventDefault();
  closeModal(stack[stack.length - 1]);
});
