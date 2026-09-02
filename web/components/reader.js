// Reader module: article registry, modal open/close, and hash-driven loading.
// Articles are organized by `group` (a logical article) × `lang` (en / zh).
// The article dropdown picks the group; the language toggle swaps within it.

import { state } from './state.js';
import { updateHash } from './routing.js';
import { ARTICLES, TASKS } from './data.js';
import { tLang, onUiLangChange } from './i18n.js';
import { registerModal, openModal, closeModal, isModalOpen } from './modal.js';

// ------------------------------------------------------------
// Article registry (semantic IDs, not file paths)
// Single source of truth: web/data/articles.json + tasks.json, loaded
// via data.js. Both registries are nested: one entry per logical item
// (`id`) with a `langs` block per language. They are flattened below to
// one row per item × lang, with `id` derived (en-US → the item id, other
// langs → <id>-<lang>) so existing URLs like #reader=<id>-zh keep
// resolving. Lang-level fields (title/path/dates) override group
// defaults; `active` is group-level.
// Only entries with `active: true` are listed/opened by the reader —
// set `active: false` while an entry is being edited so it stays hidden.
// Task outputs (tasks.json) carry kind: "task" and ids prefixed "task:" so they
// never collide with article groups in the hash route. Entity notes are not
// published to the website — the reader only browses articles + task outputs,
// so there is no third registries here. The source tabs (#reader-source) switch
// the dropdown between the two registries; task options are grouped by recency
// of their `updated` date (this week / this month / older).
// ------------------------------------------------------------

const flattenRegistry = (rows, kind) => rows.flatMap((a) => {
  const langs = Object.entries(a.langs || {});
  return langs.map(([lang, l]) => ({
    ...a, ...l, // lang-level title/path/dates override group defaults
    id: lang === 'en-US' ? a.id : `${a.id}-${lang.split('-')[0].toLowerCase()}`,
    group: a.id,
    lang,
  }));
}).map((row) => ({ ...row, kind }))
  .filter((a) => a.active !== false);

const ACTIVE_ARTICLES = flattenRegistry(ARTICLES, 'article');
const ACTIVE_TASKS = flattenRegistry(TASKS, 'task');
const ALL_ROWS = [...ACTIVE_ARTICLES, ...ACTIVE_TASKS];

const getArticle = (id) => ALL_ROWS.find((a) => a.id === id) || null;

// Index entry for a source mode — the reader's default landing entry (opened
// by tab clicks, the modal title, and whenever no specific article applies).
// Fixed here in code rather than flagged in the registry JSON.
const indexIdForMode = (mode) =>
  mode === 'tasks' ? 'tasks-index' : 'articles-index';

const getDefaultArticle = () =>
  getArticle(indexIdForMode('articles')) || ACTIVE_ARTICLES[0] || ACTIVE_TASKS[0];

// ------------------------------------------------------------
// Source mode (Articles vs Task Outputs tabs)
// ------------------------------------------------------------
let sourceMode = 'articles';
const rowsForMode = () =>
  sourceMode === 'tasks' ? ACTIVE_TASKS : ACTIVE_ARTICLES;

function setSourceMode(mode) {
  if (sourceMode === mode) return;
  sourceMode = mode;
  sourceBtns.forEach((btn) => btn.classList.toggle('active', btn.dataset.source === mode));
}

// Reader source-tab labels show both languages (English · zh-TW), pulled from
// the shared i18n table, so they read the same regardless of the active UI
// language.
const TAB_KEYS = {
  articles: 'readerTabArticles',
  tasks: 'readerTabTasks',
};

function applyTabLabels() {
  sourceBtns.forEach((btn) => {
    const key = TAB_KEYS[btn.dataset.source] || 'readerTabArticles';
    btn.textContent = `${tLang(key, 'en-US')} / ${tLang(key, 'zh-TW')}`;
  });
}

// ------------------------------------------------------------
// Group / language helpers (operate on a given registry)
// ------------------------------------------------------------
function sortedGroups(rows) {
  const groupKey = new Map();
  rows.forEach((a) => { if (!groupKey.has(a.group)) groupKey.set(a.group, a); });
  // Display order is derived here (not baked into the JSON): starred groups
  // first, then newest group first. Each group is a single dropdown option,
  // so en/zh pairs always stay together regardless of per-entry `created`
  // differences. Swap `created` for `updated` below if you'd rather sort by
  // last-modified.
  const groupCreated = (group) => rows
    .filter((a) => a.group === group)
    .reduce((max, a) => ((a.created || '') > max ? a.created : max), '');
  return Array.from(groupKey.keys())
    .sort((a, b) => {
      const starDiff = (rows.find((r) => r.group === b)?.starred ? 1 : 0) -
        (rows.find((r) => r.group === a)?.starred ? 1 : 0);
      if (starDiff) return starDiff;
      return groupCreated(b).localeCompare(groupCreated(a));
    });
}

function latestUpdated(group) {
  return ALL_ROWS
    .filter((a) => a.group === group && a.updated)
    .reduce((max, a) => (a.updated > max ? a.updated : max), '');
}

function groupTitle(rows, group) {
  const en = rows.find((a) => a.group === group && a.lang === 'en-US');
  const zh = rows.find((a) => a.group === group && a.lang === 'zh-TW');
  const base = en || zh || rows.find((a) => a.group === group);
  if (!base) return group;
  if (zh) return `${base.title} · ${zh.title}`;
  return base.title;
}

function groupHasLang(group, lang) {
  return ALL_ROWS.some((a) => a.group === group && a.lang === lang);
}

function resolveForGroup(group, lang) {
  return (
    ALL_ROWS.find((a) => a.group === group && a.lang === lang) ||
    ALL_ROWS.find((a) => a.group === group) ||
    null
  );
}

function currentArticle() {
  return (state.readerId && getArticle(state.readerId)) || getDefaultArticle();
}

// ------------------------------------------------------------
// DOM refs
// ------------------------------------------------------------
const overlay = document.getElementById('page-modal-overlay');
registerModal('reader', overlay, { closeOnBackdrop: true, onClose: readerClosedCleanup });
const frame = document.getElementById('page-modal-frame');
const openLink = document.getElementById('page-modal-open');
const select = document.getElementById('reader-select');
const langBtns = Array.from(document.querySelectorAll('#reader-lang [data-lang]'));
const prevBtn = document.getElementById('reader-prev');
const modalTitle = document.getElementById('page-modal-title');
const sourceBtns = Array.from(document.querySelectorAll('#reader-source [data-source]'));

// ------------------------------------------------------------
// Session stack of visited articles (route history)
// ------------------------------------------------------------
const readerStack = [];

function updatePrevBtn() {
  prevBtn.disabled = readerStack.length < 2;
}

// ------------------------------------------------------------
// Rendering
// ------------------------------------------------------------
function loadArticle(article, section) {
  const anchor = section ? '#' + encodeURIComponent(section) : '';
  let url;
  if (article.kind === 'task' && article.path.endsWith('.md')) {
    // Task outputs are raw markdown rendered by the shared md-viewer shell;
    // index pages are plain HTML and load directly.
    url = 'pages/md-viewer.html?kind=task&src=' +
      encodeURIComponent('../' + article.path) + anchor;
  } else {
    url = article.path + anchor;
  }
  frame.src = url;
  openLink.href = url;
}

// Relative age label for the freshness highlight ("today", "2d", "5mo").
function relativeAge(updated) {
  const ms = Date.now() - new Date(updated).getTime();
  if (ms < 864e5) return 'today';
  const days = Math.floor(ms / 864e5);
  if (days < 7) return `${days}d`;
  if (days < 30) return `${Math.floor(days / 7)}w`;
  if (days < 365) return `${Math.floor(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

// Freshness bucket from an ISO `updated` date: 0 ≤7d, 1 ≤30d, 2 older.
function recencyBucket(updated) {
  if (!updated) return 2;
  const days = (Date.now() - new Date(updated).getTime()) / 864e5;
  if (days <= 7) return 0;
  if (days <= 30) return 1;
  return 2;
}

const BUCKET_LABELS = [
  'Updated this week / 本週更新',
  'Updated this month / 本月更新',
  'Older / 較早',
];

function optionHTML(rows, group) {
  const title = groupTitle(rows, group);
  const star = rows.find((r) => r.group === group)?.starred ? '★ ' : '';
  if (sourceMode !== 'tasks') {
    return `<option value="${group}">${star}${title}</option>`;
  }
  // Task outputs carry a relative-age suffix so freshness is visible in the
  // closed dropdown too; grouping into recency optgroups does the rest.
  const updated = latestUpdated(group);
  const suffix = updated ? ` · ${relativeAge(updated)}` : '';
  return `<option value="${group}">${star}${title}${suffix}</option>`;
}

function buildOptions() {
  const rows = rowsForMode();
  const groups = sortedGroups(rows);
  if (sourceMode === 'tasks') {
    // Group task options by recency of their last modification.
    const buckets = [[], [], []];
    groups.forEach((g) => buckets[recencyBucket(latestUpdated(g))].push(g));
    select.innerHTML = buckets
      .map((bucket, i) => bucket.length
        ? `<optgroup label="${BUCKET_LABELS[i]} (${bucket.length})">` +
          bucket.map((g) => optionHTML(rows, g)).join('') +
          '</optgroup>'
        : '')
      .join('');
  } else {
    select.innerHTML = groups.map((g) => optionHTML(rows, g)).join('');
  }
  // Nothing opened yet → preselect the source's index entry so the Reader
  // button opens the index by default (openReader re-selects afterwards).
  if (!state.readerId) {
    const idx = rows.find((r) => r.group === indexIdForMode(sourceMode));
    if (idx) select.value = idx.group;
  }
}

function setSelectFor(article) {
  select.value = article.group;
}

function setLangToggleFor(article) {
  langBtns.forEach((btn) => {
    const lang = btn.dataset.lang;
    btn.disabled = !groupHasLang(article.group, lang);
    btn.classList.toggle('active', lang === article.lang);
  });
}

// ------------------------------------------------------------
// Open / close (exported for graph.js hash restore)
// `restore = true` for hash-restore/popstate: reconcile the session
// stack to the current article instead of pushing a new entry.
// ------------------------------------------------------------
export function openReader(id, { restore = false, section = null } = {}) {
  const article = getArticle(id) || getDefaultArticle();
  if (!article) return;
  // Tabs follow the opened entry (deep links may target the other source).
  setSourceMode(
    article.kind === 'task' ? 'tasks' : 'articles'
  );
  buildOptions();
  if (restore) {
    const idx = readerStack.indexOf(article.id);
    if (idx === -1) {
      readerStack.push(article.id);
    } else {
      readerStack.length = idx + 1;
    }
  } else if (readerStack[readerStack.length - 1] !== article.id) {
    readerStack.push(article.id);
  }
  loadArticle(article, section);
  // No section specified → default to the top of the page. Also handles the
  // case where `frame.src` is unchanged (reopening the same article), which
  // would otherwise keep the previous scroll position.
  if (!section) {
    const w = frame.contentWindow;
    if (w) w.scrollTo(0, 0);
  }
  setSelectFor(article);
  setLangToggleFor(article);
  openModal('reader');
  state.readerId = article.id;
  state.readerSection = section;
  updatePrevBtn();
  if (!restore) updateHash();
}

export function closeReader() {
  closeModal('reader');
}

// Cleanup runs via the modal manager's onClose (covers ESC/backdrop/close
// button and programmatic closes alike).
function readerClosedCleanup() {
  stopSectionTracking();
  state.readerId = null;
  state.readerSection = null;
  readerStack.length = 0;
  updatePrevBtn();
  updateHash();
}

export function isReaderOpen() {
  return isModalOpen('reader');
}

// ------------------------------------------------------------
// Active-section tracking inside the article iframe.
// Updates state.readerSection as the user scrolls, so the current
// section is persisted in the hash (`&section=<id>`) and restored
// on reload / back navigation.
// ------------------------------------------------------------
let scrollRaf = null;
let trackingDoc = null;

function pollActiveSection() {
  const doc = trackingDoc;
  if (!doc || !isReaderOpen()) return;
  const sections = Array.from(doc.querySelectorAll('section[id]'));
  if (!sections.length) return;
  const navBottom = 60; // sticky nav offset within the article
  // Only a section actually scrolled under the nav counts. At the top of the
  // article no section qualifies, so we clear the section (opening without a
  // section must default to the top of the page, not the first section).
  let active = null;
  for (const s of sections) {
    if (s.getBoundingClientRect().top <= navBottom + 1) active = s.id;
  }
  if (active !== state.readerSection) {
    state.readerSection = active;
    updateHash(false);
  }
}

function onScroll() {
  if (scrollRaf !== null) return;
  scrollRaf = requestAnimationFrame(() => {
    scrollRaf = null;
    pollActiveSection();
  });
}

function startSectionTracking() {
  stopSectionTracking();
  try {
    trackingDoc = frame.contentDocument;
    frame.contentWindow.addEventListener('scroll', onScroll, { passive: true });
  } catch (e) {
    /* cross-origin or inaccessible document */
  }
}

function stopSectionTracking() {
  if (trackingDoc && frame.contentWindow) {
    frame.contentWindow.removeEventListener('scroll', onScroll);
  }
  if (scrollRaf !== null) {
    cancelAnimationFrame(scrollRaf);
    scrollRaf = null;
  }
  trackingDoc = null;
}

/* In-frame article links announce themselves via postMessage so the
   dropdown / lang toggle update immediately on click (the frame `load`
   handler below is the fallback that reconciles after navigation). */
window.addEventListener('message', (e) => {
  if (e.origin !== window.location.origin) return;
  if (!e.data || e.data.type !== 'reader-navigate') return;
  const article = getArticle(e.data.id);
  if (!article || article.id === state.readerId) return;
  if (readerStack[readerStack.length - 1] !== article.id) {
    readerStack.push(article.id);
  }
  state.readerId = article.id;
  state.readerSection = null;
  setSelectFor(article);
  setLangToggleFor(article);
  updateHash();
  updatePrevBtn();
});

frame.addEventListener('load', () => {
  // If navigation happened via an in-frame link (rather than the dropdown),
  // reconcile the dropdown / lang toggle / hash with the page now loaded.
  const matched = matchFrameArticle();
  if (matched && matched.id !== state.readerId) {
    if (readerStack[readerStack.length - 1] !== matched.id) {
      readerStack.push(matched.id);
    }
    state.readerId = matched.id;
    state.readerSection = null;
    setSelectFor(matched);
    setLangToggleFor(matched);
    updateHash();
    updatePrevBtn();
  }
  // Opened without a section → default to the top of the page. Guards against
  // the browser restoring a previous iframe scroll position on reload.
  if (!state.readerSection) {
    const w = frame.contentWindow;
    if (w) w.scrollTo(0, 0);
  }
  startSectionTracking();
});

// Match the iframe's current location against the registry by page path.
// Full-path match first; the basename fallback requires an exact basename
// match unique across both registries (endsWith would wrongly map
// tasks-index.html onto articles-index's index.html).
function matchFrameArticle() {
  try {
    const path = frame.contentWindow.location.pathname;
    const exact = ALL_ROWS.find((a) => path.endsWith('/' + a.path));
    if (exact) return exact;
    const file = path.split('/').pop();
    const groups = new Set(
      ALL_ROWS.filter((a) => a.path.split('/').pop() === file).map((a) => a.group)
    );
    if (groups.size !== 1) return null;
    const group = groups.values().next().value;
    return ALL_ROWS.find((a) => a.group === group) || null;
  } catch {
    return null; // cross-origin or inaccessible location
  }
}

// ------------------------------------------------------------
// Wire up (button, select, language toggle, overlay, keyboard)
// ------------------------------------------------------------
const readerBtn = document.getElementById('btn-reader');

buildOptions();
updatePrevBtn();
applyTabLabels();

// Re-render tab labels + the dropdown when the shared UI language changes.
onUiLangChange(() => {
  applyTabLabels();
  const cur = state.readerId ? getArticle(state.readerId) : null;
  buildOptions();
  if (cur) setSelectFor(cur);
});

function openSelected() {
  const group = select.value;
  if (!group) return;
  const lang = currentArticle().lang;
  const article = resolveForGroup(group, lang);
  if (article) openReader(article.id, { section: state.readerSection });
}

readerBtn.addEventListener('click', openSelected);

select.addEventListener('change', openSelected);

// Source tabs: swap the dropdown between articles and task outputs. If the
// reader is already open, jump straight to that source's index.
sourceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.source;
    if (mode === sourceMode) return;
    setSourceMode(mode);
    buildOptions();
    const idx = getArticle(indexIdForMode(mode)) || rowsForMode()[0];
    if (!idx) return;
    if (isReaderOpen()) {
      openReader(idx.id, { section: null });
    } else {
      select.value = idx.group;
    }
  });
});

langBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    const cur = currentArticle();
    const target = resolveForGroup(cur.group, lang);
    if (target && target.id !== cur.id) {
      openReader(target.id, { section: state.readerSection });
    }
  });
});

prevBtn.addEventListener('click', () => {
  if (readerStack.length > 1) history.back();
});

// Clicking the modal title returns to the current source's index page.
modalTitle.addEventListener('click', () => {
  const idx = getArticle(indexIdForMode(sourceMode));
  if (idx && idx.id !== state.readerId) openReader(idx.id);
});

// ESC / backdrop / close-button handling is delegated to modal.js
// ('reader' is registered below with readerClosedCleanup as onClose).

