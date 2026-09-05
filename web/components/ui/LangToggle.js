// ui/LangToggle.js — EN / 繁體中文 toggle (Phase 2).
//
// Standardizes the bilingual toggle that appears in six places (analysis
// panel, chat panel, notes panel, notes lightbox, reader, detail-card head):
// radiogroup semantics + arrow-key navigation via Segmented, plus a
// shared `change` event. Feature modules keep their language-application
// logic; they only hand this primitive the container.
//
// NOTE: existing `.lang-toggle` groups are adopted incrementally — modules
// with i18n-entangled title logic (analysis.js) migrate in Phase 4.

import { enhanceSegmented } from './Segmented.js';

export function enhanceLangToggle(container, { onChange } = {}) {
  const seg = enhanceSegmented(container, { onChange });
  return {
    el: seg.el,
    get: seg.get,
    set(lang) { seg.set(lang === 'zh-TW' ? 'zh-TW' : 'en-US'); },
  };
}
