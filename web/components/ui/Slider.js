// ui/Slider.js — labeled range control with synced <output> readout (Phase 2).
//
// One implementation of the settings sheet's eight hand-rolled
// label + range + output rows: value formatting, input/change split
// (input = live preview, change = commit/persist point), and a `set()`
// that keeps input + output in sync (used by settings reset).
//
//   enhanceSlider(input, { output, format, onInput, onCommit }) — adopts
//     the existing <input type=range> (keeps ids / CSS) + its <output>.
//   createSlider({ label, min, max, step, value, format, onInput, onCommit })
//     — builds a full labeled row for JS-composed UI (Phase 3+).

import { h } from './dom.js';

const DEFAULT_FORMAT = (v) => String(v);

function attach(input, { output, format = DEFAULT_FORMAT, onInput, onCommit } = {}) {
  const update = (raw) => {
    const v = parseFloat(raw);
    if (output) output.textContent = format(v);
    return v;
  };
  if (output && !output.textContent) update(input.value);
  input.addEventListener('input', () => {
    const v = update(input.value);
    if (onInput) onInput(v);
  });
  input.addEventListener('change', () => {
    const v = update(input.value);
    if (onCommit) onCommit(v);
  });
  return {
    el: input,
    get() { return parseFloat(input.value); },
    set(v) { input.value = v; update(input.value); },
  };
}

export function enhanceSlider(input, opts = {}) {
  if (!input) throw new Error('enhanceSlider: input element is required');
  const output = opts.output
    || (input.getAttribute('aria-describedby') && document.getElementById(input.getAttribute('aria-describedby')))
    || null;
  return attach(input, { ...opts, output });
}

export function createSlider({ label, min, max, step, value, format, onInput, onCommit, id } = {}) {
  if (!label) throw new Error('createSlider: `label` is required');
  const inputId = id || 'ui-slider-' + Math.random().toString(36).slice(2, 8);
  const output = h('output', { for: inputId });
  const input = h('input', {
    type: 'range', id: inputId, min, max, step, value,
    'aria-label': label,
  });
  const row = h('div', { class: 'settings-row settings-slider-row' }, [
    h('div', { class: 'settings-row-head' }, [
      h('label', { for: inputId }, label),
      output,
    ]),
    input,
  ]);
  attach(input, { output, format, onInput, onCommit });
  return { el: row, input, output };
}
