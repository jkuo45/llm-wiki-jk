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
    var t = Date.parse(iso);
    if (Number.isNaN(t)) return "date unknown";
    var ms = Date.now() - t;
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

  /* Single sort-direction toggle shared by both index pages. Returns a
     getter giving 1 (newest first, default) or -1 (oldest first) for the
     date term of the page comparator — starred/weight ordering never
     flips. Choice persists for the session across both pages; the button
     paints its own glyph (↓/↑) and tooltip. */
  function wireSort(btn, render) {
    var asc = false;
    try { asc = sessionStorage.getItem("index-sort-dir") === "asc"; } catch (e) { /* storage unavailable */ }
    function paint() {
      btn.textContent = asc ? "↑" : "↓";
      btn.setAttribute("aria-pressed", asc ? "true" : "false");
      btn.title = asc
        ? "Sort: oldest first / 排序：最舊在前"
        : "Sort: newest first / 排序：最新在前";
    }
    btn.addEventListener("click", function () {
      asc = !asc;
      try { sessionStorage.setItem("index-sort-dir", asc ? "asc" : "desc"); }
      catch (e) { /* storage unavailable */ }
      paint();
      render();
    });
    paint();
    return function () { return asc ? -1 : 1; };
  }

  /* Description language for the index cards, driven by the Reader's EN/中
     lang toggle (parent → child `reader-lang` postMessage, announced after
     every frame load and language switch). Cards always exist in both
     languages; this only picks which description to show. Standalone views
     stay English (page chrome is English). Returns a getter for render. */
  var descLang = "en-US";
  var descLangRender = null;
  window.addEventListener("message", function (e) {
    if (e.origin !== window.location.origin) return;
    if (!e.data || e.data.type !== "reader-lang") return;
    var lang = e.data.lang === "zh-TW" ? "zh-TW" : "en-US";
    if (lang === descLang) return;
    descLang = lang;
    if (descLangRender) descLangRender();
  });
  function wireDescLang(render) {
    descLangRender = render;
    return function () { return descLang; };
  }

  /* Trello-style stat chips for index cards: raw word count plus
     icon+count badges for images, links, and mermaid diagrams. Zero or
     missing counts are skipped; returns '' when there is nothing to show.
     SVGs inherit currentColor via CSS (.stat svg in index.css). */
  function statChips(stats) {
    if (!stats) return "";
    var ICONS = [
      ["words", "Words / 字數", '<path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>'],
      ["images", "Images / 圖片", '<path d="M4 6h16v12H4z"/><circle cx="9" cy="11" r="1.4"/><path d="M20 15l-4.5-4.5L12 14l-2-2-6 6"/>'],
      ["links", "Links / 連結", '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 1 0-5.7-5.7l-1.4 1.4"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0L5 13.3a4 4 0 1 0 5.7 5.7l1.4-1.4"/>'],
      ["diagrams", "Mermaid diagrams / 圖表", '<rect x="3.5" y="4" width="6" height="5" rx="1"/><rect x="14.5" y="15" width="6" height="5" rx="1"/><path d="M6.5 9v5.5a2 2 0 0 0 2 2H14"/>'],
    ];
    var out = "";
    ICONS.forEach(function (spec) {
      var n = Number(stats[spec[0]]) || 0;
      if (n <= 0) return;
      out += '<span class="stat" title="' + esc(spec[1]) + '"><svg viewBox="0 0 24 24" aria-hidden="true">' +
        spec[2] + "</svg>" + (spec[0] === "words" ? n.toLocaleString("en-US") : String(n)) + "</span>";
    });
    return out ? '<span class="stat-chips">' + out + "</span>" : "";
  }

  /* Tag pills for expanded index cards: en-first union deduped (en/zh
     tag sets are near-identical), boilerplate 'task-output' dropped, first
     5 shown, rest collapsed into a +N marker. Each pill is a button that
     wireTagPills toggles as the search filter; `active` (current query)
     paints the pressed state. Empty when nothing survives. */
  function tagPills(tags, active) {
    if (!Array.isArray(tags) || !tags.length) return "";
    var seen = {}, shown = [], total = 0;
    tags.forEach(function (raw) {
      var t = asStr(raw).trim();
      if (!t || t.toLowerCase() === "task-output") return;
      var key = t.toLowerCase();
      if (seen[key]) return;
      seen[key] = 1;
      total++;
      if (shown.length < 5) shown.push(t);
    });
    if (!total) return "";
    var html = shown.map(function (t) {
      var on = active === t;
      return '<button type="button" class="tag-pill' + (on ? " on" : "") + '" data-tag="' + esc(t) +
        '" title="' + (on ? "Clear filter / 清除篩選" : "Filter by " + esc(t) + " / 篩選") + '">' +
        esc(t) + "</button>";
    }).join("");
    if (total > shown.length) {
      html += '<span class="tag-pill more">+' + (total - shown.length) + "</span>";
    }
    return '<span class="tag-row">' + html + "</span>";
  }

  /* Delegated click: a pill sets the search query and re-renders; clicking
     the same pill again clears it (mirrors the clear button — focus the box
     either way so typing can refine). One listener per list; pills live in
     the same container the page already delegates other clicks from. */
  function wireTagPills(list, searchBox, render) {
    list.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest("button[data-tag]") : null;
      if (!btn || !list.contains(btn)) return;
      var tag = btn.getAttribute("data-tag") || "";
      searchBox.value = searchBox.value.trim() === tag ? "" : tag;
      render();
      searchBox.focus();
    });
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
    wireSort: wireSort,
    wireDescLang: wireDescLang,
    statChips: statChips,
    tagPills: tagPills,
    wireTagPills: wireTagPills,
    restoreQuery: restoreQuery,
    persistQuery: persistQuery,
    wireSearch: wireSearch,
  };
})();
