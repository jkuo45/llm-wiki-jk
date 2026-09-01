// ui/AsyncState.js — loading / error / empty / ready state machine (Phase 1).
//
// Gives every async surface one consistent visual grammar instead of ad-hoc
// spinners and silent empty renders. The `states` map is required per
// surface; each renderer returns a Node (or null for 'ready' hand-offs).
//
// Usage:
//   const boot = createAsyncState({
//     loading:  () => h('div', { class: 'spinner' }),
//     error:    (err, retry) => h('button', { onclick: retry }, 'Retry'),
//     empty:    () => h('p', {}, 'Nothing here yet.'),
//     ready:    () => null,
//   });
//   boot.set('loading');
//   try { const data = await load(); boot.set(data.length ? 'ready' : 'empty', data); }
//   catch (err) { boot.set('error', err); }

import { h } from './dom.js';

export function createAsyncState({ states, initial = 'loading' } = {}) {
  if (!states || typeof states !== 'object') {
    throw new Error('createAsyncState: `states` map is required');
  }
  const el = h('div', { class: 'ui-async-state' });
  let retryFn = null;
  let currentState = null;

  function set(state, data) {
    if (!(state in states)) {
      throw new Error(`createAsyncState: unknown state "${state}" ` +
        `(have: ${Object.keys(states).join(', ')})`);
    }
    currentState = state;
    // The error renderer receives a retry callback that re-enters 'loading'.
    const retry = () => set('loading', data);
    retryFn = state === 'error' ? retry : null;
    el.replaceChildren();
    const rendered = states[state](data, retry);
    if (rendered) el.appendChild(rendered);
    el.dataset.state = state;
  }

  if (states[initial]) set(initial);
  return {
    el,
    set,
    get state() { return currentState; },
    get retry() { return retryFn; },
  };
}
