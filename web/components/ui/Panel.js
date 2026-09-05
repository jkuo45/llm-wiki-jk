// ui/Panel.js — slide-in panel shell adopter (Phase 4).
//
// The app has four independently hand-rolled panels (analysis, chat, notes,
// admin) that each repeat the same open/close mechanics: an `.open` class on
// the panel, a matching class on the launcher button, a close button, and
// scattered state flags. This adopter owns those mechanics once.
//
// NOTE: panels intentionally do NOT join the modal.js overlay stack — they
// are non-modal side surfaces (the graph stays interactive), so no focus
// trap and no aria-modal. Escape ordering is handled by the feature modules
// (they already sequence panel-vs-modal closing explicitly).
//
//   enhancePanel(panelEl, {
//     openClass,          // class toggled on the panel (default 'open')
//     button,             // launcher button (gets the same class)
//     closeButton,        // explicit close control (optional)
//     focusEl,            // element to focus on open (default: none)
//     onOpen, onClose,    // hooks run after the class/state update
//   })
//   → { open(), close(), toggle(), isOpen }

export function enhancePanel(panelEl, {
  openClass = 'open',
  button = null,
  closeButton = null,
  focusEl = null,
  onOpen = null,
  onClose = null,
} = {}) {
  if (!panelEl) throw new Error('enhancePanel: panel element is required');

  const api = {
    el: panelEl,
    isOpen() { return panelEl.classList.contains(openClass); },
    open() {
      if (api.isOpen()) return;
      panelEl.classList.add(openClass);
      if (button) {
        button.classList.add(openClass);
        button.setAttribute('aria-expanded', 'true');
      }
      // Focus management: an explicit focusEl wins (chat → composer);
      // otherwise move focus into the panel itself (tabindex="-1" region)
      // so keyboard users aren't left behind on the launcher.
      const target = focusEl || panelEl;
      try { target.focus({ preventScroll: true }); } catch (err) {}
      if (onOpen) onOpen();
    },
    close() {
      if (!api.isOpen()) return;
      panelEl.classList.remove(openClass);
      if (button) {
        button.classList.remove(openClass);
        button.setAttribute('aria-expanded', 'false');
      }
      if (onClose) onClose();
    },
    toggle() { api.isOpen() ? api.close() : api.open(); },
  };

  if (closeButton) closeButton.addEventListener('click', () => api.close());

  // A11y: the panel is a labelled region; the launcher reflects its state.
  panelEl.setAttribute('role', 'region');
  panelEl.setAttribute('tabindex', '-1');
  if (button) button.setAttribute('aria-expanded', String(api.isOpen()));

  return api;
}
