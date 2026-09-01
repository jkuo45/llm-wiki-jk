// ui/dom.js — tiny element-builder + delegated-listener helpers.
//
// The safety contract for the whole ui/ layer:
//   - children passed to h() become TEXT NODES by default (XSS-safe);
//   - raw HTML is an explicit opt-in via the `html:` prop, and is only
//     ever fed trusted internal strings (SVG icons, app templates) —
//     never user/data-derived content.
//   - delegate() returns a disposer so feature modules can tear down
//     listeners deterministically instead of accumulating document-level
//     handlers across panel lifecycles.

export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k === 'html') el.innerHTML = v; // explicit opt-in — trusted strings only
    else if (k.startsWith('on') && typeof v === 'function') {
      el.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, String(v));
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  return el;
}

// Delegated event: one listener on `root`, matching `selector` descendants.
// Returns a disposer () => void.
export function delegate(root, type, selector, fn) {
  const handler = (e) => {
    const t = e.target.closest(selector);
    if (t && root.contains(t)) fn(e, t);
  };
  root.addEventListener(type, handler);
  return () => root.removeEventListener(type, handler);
}
