// ui/index.js — barrel export for the shared UI primitives.
//
// Layering rule: ui/* imports NOTHING from app modules (data.js, core.js,
// state.js, …). Feature modules import from here.
//
// Primitives come in two flavours:
//   createX(...)  — build new elements for JS-composed UI (Phase 3+)
//   enhanceX(el)  — adopt existing static markup (keeps ids/CSS), used for
//                   the incremental migration of index.html controls

export { h, delegate } from './dom.js';
export { show, toast } from './Toast.js';
export { createAsyncState } from './AsyncState.js';
export { createIconButton, enhanceIconButton } from './IconButton.js';
export { createToggle, enhanceToggle } from './Toggle.js';
export { createSegmented, enhanceSegmented } from './Segmented.js';
export { createSlider, enhanceSlider } from './Slider.js';
export { enhanceLangToggle } from './LangToggle.js';
export { renderDetailCard } from './DetailCard.js';
