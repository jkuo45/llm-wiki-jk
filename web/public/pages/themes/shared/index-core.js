/* Shared index helpers — single source of truth for articles-index.html
   and tasks-index.html (previously copy-pasted: esc/highlight, query
   parsing, rel-age/bucket, flags overlay URL, reader-navigate announce,
   debounced search wiring). Load before the page's inline script:
     <script src="themes/shared/index-core.js"></script>
   Exposed as window.IndexCore. */
window.IndexCore = (function () {
  "use strict";

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  /* Escape each split part so matches are highlighted on raw text (never
     inside HTML entities), then wrap matched parts in <mark>. */
  function highlight(text, tokens) {
    if (!tokens.length) return esc(text);
    var re = new RegExp("(" + tokens.map(escRe).join("|") + ")", "gi");
    return text.split(re)
      .map(function (part, i) { return i % 2 ? '<mark class="search-hit">' + esc(part) + "</mark>" : esc(part); })
      .join("");
  }
  function parseQuery(q) {
    return q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  }
  /* The registry generators can emit array-valued fields when a source
     frontmatter scalar folds onto continuation lines — flatten so
     downstream .replace() calls never crash. */
  function asStr(v) {
    return Array.isArray(v) ? v.join(" ") : String(v == null ? "" : v);
  }

  function ageDays(iso) {
    if (!iso) return NaN;
    return (Date.now() - new Date(iso).getTime()) / 864e5;
  }
  function relAge(iso) {
    if (!iso) return "";
    var ms = Date.now() - new Date(iso).getTime();
    if (ms < 864e5) return "today";
    var days = Math.floor(ms / 864e5);
    if (days < 7) return days + "d";
    if (days < 30) return Math.floor(days / 7) + "w";
    if (days < 365) return Math.floor(days / 30) + "mo";
    return (days / 365).toFixed(1) + "y";
  }
  function bucket(iso) {
    var days = ageDays(iso);
    if (isNaN(days)) return 3;
    return days <= 7 ? 1 : days <= 30 ? 2 : 3;
  }
  /* Bucket 4 is reserved for de-emphasized entries (articles.json
     `weight > 0`, e.g. *-articles-and-figures indexes). Pages assign it
     explicitly — bucket() above never returns it — so all index-type
     entries group together in one trailing section regardless of date.
     Unused buckets render nothing (callers skip empty groups), so pages
     without weighted entries (e.g. tasks-index) are unaffected. */
  var BUCKETS = [
    ["Starred", "星標", ""],
    ["Created this week", "本週建立", "fresh"],
    ["Created this month", "本月建立", "recent"],
    ["Older", "較早", "old"],
    ["Indexes", "索引附錄", "old"],
  ];
  /* Recency variant for pages sorted by the newer of created/updated
     (e.g. articles-index). Same shape/count as BUCKETS so bucket indexes
     stay interchangeable; labels are verb-neutral ("This week") because
     each card states whether its recency comes from creation or update. */
  var UPDATED_BUCKETS = [
    ["Starred", "星標", ""],
    ["This week", "本週", "fresh"],
    ["This month", "本月", "recent"],
    ["Older", "較早", "old"],
    ["Indexes", "索引附錄", "old"],
  ];

  /* DB-backed flag overlay (content_flags via the FastAPI adapter).
     Currently OFF everywhere — static flags only. Flip per page to
     re-enable (see deploy/supabase/content_flags.sql). */
  var FLAGS_OVERLAY_ENABLED = false;
  function flagsUrl() {
    return (window.LLM_WIKI_API_BASE || "https://api.johnnykuo.com/v1").replace(/\/$/, "") + "/flags";
  }

  /* Embedded in the Reader: announce navigation so the parent
     dropdown/lang toggle updates immediately (before iframe load). */
  function announceNavigate(id) {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "reader-navigate", id: id }, window.location.origin);
      }
    } catch (e) { /* standalone view — nothing to notify */ }
  }

  function restoreQuery(box, key) {
    try { box.value = sessionStorage.getItem(key) || ""; } catch (e) { /* storage unavailable */ }
  }
  function persistQuery(box, key) {
    try { sessionStorage.setItem(key, box.value); } catch (e) { /* storage unavailable */ }
  }
  /* Debounced re-render on input; the query survives navigation via
     sessionStorage so returning from an article keeps the filter. */
  function wireSearch(box, clearBtn, storageKey, render) {
    var timer = null;
    box.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(render, 150);
    });
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        box.value = "";
        clearTimeout(timer);
        render();
        box.focus();
      });
    }
    return function cancel() { clearTimeout(timer); };
  }

  return {
    esc: esc,
    escRe: escRe,
    highlight: highlight,
    parseQuery: parseQuery,
    asStr: asStr,
    relAge: relAge,
    bucket: bucket,
    BUCKETS: BUCKETS,
    UPDATED_BUCKETS: UPDATED_BUCKETS,
    FLAGS_OVERLAY_ENABLED: FLAGS_OVERLAY_ENABLED,
    flagsUrl: flagsUrl,
    announceNavigate: announceNavigate,
    restoreQuery: restoreQuery,
    persistQuery: persistQuery,
    wireSearch: wireSearch,
  };
})();
