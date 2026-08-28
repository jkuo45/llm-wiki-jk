"use strict";

/* Wiki-link tooltips sourced directly from web/data/nodes.json node
 * descriptions. Converts [[Entity]] / [[Entity|Display]] in page prose into
 * hover-tooltip spans. Reuses the shared #netTip element and
 * showTip/moveTip/hideTip helpers from pages-core.js.
 *
 * Highlighting is applied immediately (no network needed); the definition
 * tooltip is enriched once nodes.json has loaded. The file is fetched from a
 * path relative to this page (web/pages/ -> ../data/nodes.json), and every
 * node carries a description, so tooltip coverage is complete.
 *
 * A MutationObserver also processes content rendered after load (e.g.
 * explorer tabs that swap innerHTML), so wiki links in dynamic cards get
 * tooltips on every render, not just the initial one.
 */

(function () {
  if (typeof showTip !== "function") return; // tooltip infra missing

  var CTX_URL = "../data/nodes.json";
  var MAP = null; // populated after fetch

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  }

  // Build lookup maps from nodes.json (a top-level array of node objects):
  // keyed by node label (exact and lowercase) and by normalized node id.
  function buildMap(nodes) {
    var byLabel = {}, byId = {};
    (nodes || []).forEach(function (n) {
      if (!n.description) return;
      var info = { description: n.description, label: n.label };
      byId[n.id] = info;
      byLabel[n.label] = info;
      var lower = n.label.toLowerCase();
      if (!byLabel[lower]) byLabel[lower] = info;
    });
    return { byLabel: byLabel, byId: byId };
  }

  function lookup(key) {
    if (!MAP) return null;
    key = (key || "").trim();
    return (
      MAP.byLabel[key] ||
      MAP.byLabel[key.toLowerCase()] ||
      MAP.byId[key] ||
      MAP.byId[norm(key)] ||
      null
    );
  }

  function tipFor(key, disp) {
    var e = lookup(key);
    if (e && e.description) {
      var body = e.description.replace(/\s+/g, " ").trim();
      if (body.length > 300) {
        var c = body.lastIndexOf(".", 300);
        body = (c > 150 ? body.slice(0, c) : body.slice(0, 300)).replace(/[.,;:]\s*$/, "") + "…";
      }
      return (
        '<b style="color:var(--teal)">' + esc(disp) + "</b><br>" +
        '<span style="color:var(--text)">' + esc(body) + "</span>"
      );
    }
    return '<span style="color:var(--dim)">No wiki note yet for ' + esc(disp) + "</span>";
  }

  function attach(span, key, disp) {
    span.addEventListener("mouseenter", function () {
      showTip(tipFor(key, disp));
    });
    span.addEventListener("mousemove", moveTip);
    span.addEventListener("mouseleave", hideTip);
  }

  function processNode(node) {
    var text = node.nodeValue;
    if (text.indexOf("[[") === -1) return;
    var re = /\[\[([^\]]+?)\]\]/g, m, last = 0,
      frag = document.createDocumentFragment(), changed = false;
    while ((m = re.exec(text))) {
      changed = true;
      if (m.index > last)
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var inner = m[1];
      var pipe = inner.indexOf("|");
      var key = (pipe >= 0 ? inner.slice(0, pipe) : inner).trim();
      var disp = (pipe >= 0 ? inner.slice(pipe + 1) : inner).trim();
      var span = document.createElement("span");
      span.className = "wikilink";
      span.setAttribute("data-wiki", key);
      span.textContent = disp;
      attach(span, key, disp);
      frag.appendChild(span);
      last = re.lastIndex;
    }
    if (changed) {
      if (last < text.length)
        frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }
  }

  function acceptText(n) {
    if (!n.nodeValue || n.nodeValue.indexOf("[[") === -1)
      return NodeFilter.FILTER_REJECT;
    var p = n.parentNode;
    if (
      p &&
      (p.tagName === "SCRIPT" ||
        p.tagName === "STYLE" ||
        p.tagName === "SVG" ||
        p.tagName === "NOSCRIPT" ||
        p.tagName === "TEXTAREA")
    )
      return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }

  function processAdded(node) {
    if (node.nodeType === 3) { processNode(node); return; } // text node
    if (node.nodeType !== 1) return; // only elements contain text
    // Snapshot text nodes first: processNode() replaces the walker's current
    // node (replaceChild), which ends a live TreeWalker traversal early and
    // skips every later node (chips, list items). Process from a snapshot —
    // same pattern as run() above.
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, { acceptNode: acceptText });
    var all = [];
    while (walker.nextNode()) all.push(walker.currentNode);
    for (var i = 0; i < all.length; i++) processNode(all[i]);
  }

  function initObserver() {
    if (typeof MutationObserver !== "function") return;
    var mo = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) processAdded(added[j]);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  function run() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      { acceptNode: acceptText },
      false
    );
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(processNode);
  }

  function loadContext() {
    // Pages may embed a lightweight node subset as window.__WIKI_CTX__
    // (generated from web/data/nodes.json) so tooltips work even when the
    // page is opened directly from disk (file://), where fetch() is blocked
    // by CORS. Falls back to fetching the full node list over HTTP when absent.
    if (window.__WIKI_CTX__ && Array.isArray(window.__WIKI_CTX__) && window.__WIKI_CTX__.length) {
      MAP = buildMap(window.__WIKI_CTX__);
      return;
    }
    if (typeof fetch !== "function") return;
    fetch(CTX_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (nodes) { MAP = buildMap(nodes); })
      .catch(function () { /* tooltips stay unavailable; highlight still works */ });
  }

  // Highlight immediately (independent of network); enrich tooltips when ready.
  // The observer keeps tooltips working in dynamically rendered content.
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", function () { run(); initObserver(); loadContext(); });
  else { run(); initObserver(); loadContext(); }
})();
