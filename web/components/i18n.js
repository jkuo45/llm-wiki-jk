// Shared UI language across every app surface (graph/analysis panel, node/edge
// detail head, notes panel). A single persisted preference drives all screens:
// toggling the language anywhere updates the shared state and notifies the other
// panels via a window CustomEvent, so they re-render in the same language.

import { state } from './state.js';

export const UI_LANG_STORAGE_KEY = 'llm-wiki-ui-lang';
// Legacy per-panel keys, read once on first launch to migrate an existing
// preference over to the shared key.
const LEGACY_KEYS = ['llm-wiki-analysis-ui-lang', 'llm-wiki-notes-ui-lang'];
// Window event broadcast on every language change. detail = the new language.
export const UI_LANG_EVENT = 'wiki:uilang';

// The persisted shared language: the shared key if set, otherwise the first
// legacy per-panel preference (migrated to the shared key on first use),
// otherwise 'en-US'.
export function getUiLang() {
  try {
    const v = localStorage.getItem(UI_LANG_STORAGE_KEY);
    if (v === 'en-US' || v === 'zh-TW') return v;
    for (const k of LEGACY_KEYS) {
      const prev = localStorage.getItem(k);
      if (prev === 'en-US' || prev === 'zh-TW') {
        try { localStorage.setItem(UI_LANG_STORAGE_KEY, prev); } catch (e) { /* ignore */ }
        return prev;
      }
    }
  } catch (e) { /* localStorage unavailable — default */ }
  return 'en-US';
}

// Persist a language and update the shared state WITHOUT broadcasting. Used by
// each panel's own applyUiLang so initial load / hash restore converge on the
// shared value without triggering re-entrant re-renders.
export function persistUiLang(lang) {
  if (lang !== 'en-US' && lang !== 'zh-TW') lang = 'en-US';
  state.analysisUiLang = lang;
  state.notesUiLang = lang;
  try { localStorage.setItem(UI_LANG_STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  try { localStorage.setItem('llm-wiki-analysis-ui-lang', lang); } catch (e) { /* ignore */ }
  try { localStorage.setItem('llm-wiki-notes-ui-lang', lang); } catch (e) { /* ignore */ }
}

// Persist the language, update shared state, and broadcast the change to every
// panel so they all re-render in the new language. Call on user toggles.
export function setUiLang(lang) {
  if (lang !== 'en-US' && lang !== 'zh-TW') lang = 'en-US';
  persistUiLang(lang);
  window.dispatchEvent(new CustomEvent(UI_LANG_EVENT, { detail: lang }));
}

// Subscribe a panel's local applyUiLang to shared language changes. The handler
// should guard on its own current language to stay idempotent.
export function onUiLangChange(handler) {
  window.addEventListener(UI_LANG_EVENT, (e) => handler(e.detail));
}
