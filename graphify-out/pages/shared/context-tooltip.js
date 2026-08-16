"use strict";

/* Wiki-link tooltips sourced directly from graphify-out/wiki-context.json.
 * Converts [[Entity]] / [[Entity|Display]] in page prose into hover-tooltip
 * spans. Reuses the shared #netTip element and showTip/moveTip/hideTip
 * helpers from pages-core.js.
 *
 * Highlighting is applied immediately (no network needed); the definition
 * tooltip is enriched once wiki-context.json has loaded. The context file is
 * fetched from a path relative to this page (graphify-out/pages/ -> ../wiki-context.json).
 */

(function () {
  if (typeof showTip !== "function") return; // tooltip infra missing

  var CTX_URL = "../wiki-context.json";
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

  // Build lookup maps from wiki-context.json: keyed by note-label (basename of
  // wiki_path) and by normalized node id.
  function buildMap(ctx) {
    var byLabel = {}, byId = {};
    Object.keys(ctx).forEach(function (id) {
      var info = ctx[id];
      byId[id] = info;
      var path = info && info.wiki_path ? info.wiki_path : "";
      var label = path.split("/").pop().replace(/\.md$/, "");
      if (label) {
        byLabel[label] = info;
        byLabel[label.toLowerCase()] = info;
      }
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
      var link = e.wiki_url ? '<br><span style="color:var(--teal)">Open note ↑</span>' : "";
      return (
        '<b style="color:var(--teal)">' + esc(disp) + "</b><br>" +
        '<span style="color:var(--text)">' + esc(body) + "</span>" + link
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
    span.addEventListener("click", function () {
      var e = lookup(key);
      if (e && e.wiki_url) window.open(e.wiki_url, "_blank", "noopener");
    });
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

  function run() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (n) {
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
        },
      },
      false
    );
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(processNode);
  }

  function loadContext() {
    if (typeof fetch !== "function") return;
    fetch(CTX_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (ctx) { MAP = buildMap(ctx); })
      .catch(function () { /* tooltips stay unavailable; highlight still works */ });
  }

  // Highlight immediately (independent of network); enrich tooltips when ready.
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", function () { run(); loadContext(); });
  else { run(); loadContext(); }
})();
