// Reader module: article registry, modal open/close, and hash-driven loading.
// Articles are organized by `group` (a logical article) × `lang` (en / zh).
// The article dropdown picks the group; the language toggle swaps within it.

import { state } from './state.js';
import { updateHash } from './routing.js';
import { ARTICLES } from './data.js';

// ------------------------------------------------------------
// Article registry (semantic IDs, not file paths)
// Single source of truth: web/data/articles.json, loaded via data.js.
// The registry is nested: one entry per logical article (`id`) with a
// `langs` block per language. It is flattened below to one row per
// article × lang, with `id` derived (en-US → the article id, other
// langs → <id>-<lang>) so existing URLs like #reader=<id>-zh keep
// resolving. Lang-level fields (title/path/dates) override group
// defaults; `active`/`default` are group-level.
// Only articles with `active: true` are listed/opened by the reader —
// set `active: false` in articles.json while an article is being
// edited so it stays hidden until it's ready. Entries missing the
// property are treated as active.
// ------------------------------------------------------------

const ACTIVE_ARTICLES = ARTICLES.flatMap((a) => {
  const langs = Object.entries(a.langs || {});
  return langs.map(([lang, l], i) => ({
    ...a, ...l, // lang-level title/path/dates override group defaults
    id: lang === 'en-US' ? a.id : `${a.id}-${lang.split('-')[0].toLowerCase()}`,
    group: a.id,
    lang,
    // `active`/`default` are group-level in articles.json; keep `default`
    // on the first language row only so getDefaultArticle() is deterministic
    // (matches the old flat-schema behavior where default marked one entry).
    default: i === 0 ? a.default : undefined,
  }));
}).filter((a) => a.active !== false);

const getArticle = (id) => ACTIVE_ARTICLES.find((a) => a.id === id) || null;
const getDefaultArticle = () => ACTIVE_ARTICLES.find((a) => a.default) || ACTIVE_ARTICLES[0];

// ------------------------------------------------------------
// Group / language helpers
// ------------------------------------------------------------
const groupKey = new Map();
ACTIVE_ARTICLES.forEach((a) => { if (!groupKey.has(a.group)) groupKey.set(a.group, a); });

// Display order is derived here (not baked into articles.json): newest group
// first. Each group is a single dropdown option, so en/zh pairs always stay
// together regardless of per-article `created` differences. Swap `created`
// for `updated` below if you'd rather sort by last-modified.
function groupCreated(group) {
  return ACTIVE_ARTICLES
    .filter((a) => a.group === group)
    .reduce((max, a) => (a.created > max ? a.created : max), '');
}
const sortedGroups = Array.from(groupKey.keys())
  .sort((a, b) => groupCreated(b).localeCompare(groupCreated(a)));

function groupTitle(group) {
  const en = ACTIVE_ARTICLES.find((a) => a.group === group && a.lang === 'en-US');
  const zh = ACTIVE_ARTICLES.find((a) => a.group === group && a.lang === 'zh-TW');
  const base = en || zh || groupKey.get(group) || ACTIVE_ARTICLES[0];
  if (zh) return `${base.title} · ${zh.title}`;
  return base.title;
}

function groupHasLang(group, lang) {
  return ACTIVE_ARTICLES.some((a) => a.group === group && a.lang === lang);
}

function resolveForGroup(group, lang) {
  return (
    ACTIVE_ARTICLES.find((a) => a.group === group && a.lang === lang) ||
    ACTIVE_ARTICLES.find((a) => a.group === group) ||
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
const frame = document.getElementById('page-modal-frame');
const openLink = document.getElementById('page-modal-open');
const select = document.getElementById('reader-select');
const langBtns = Array.from(document.querySelectorAll('#reader-lang [data-lang]'));
const prevBtn = document.getElementById('reader-prev');
const modalTitle = document.getElementById('page-modal-title');

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
  frame.src = article.path + anchor;
  openLink.href = article.path + anchor;
}

function buildOptions() {
  select.innerHTML = sortedGroups
    .map((g) => `<option value="${g}">${groupTitle(g)}</option>`)
    .join('');
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
  overlay.classList.add('visible');
  state.readerId = article.id;
  state.readerSection = section;
  updatePrevBtn();
  if (!restore) updateHash();
}

export function closeReader() {
  stopSectionTracking();
  overlay.classList.remove('visible');
  state.readerId = null;
  state.readerSection = null;
  readerStack.length = 0;
  updatePrevBtn();
  updateHash();
}

export function isReaderOpen() {
  return overlay.classList.contains('visible');
}

// ------------------------------------------------------------
// Active-section tracking inside the article iframe.
// Updates state.readerSection as the user scrolls, so the current
// section is persisted in the hash (`&section=<id>`) and restored
// on reload / back navigation.
// ------------------------------------------------------------
const SECTION_POLL_MS = 150;
let sectionTimer = null;

function pollActiveSection() {
  const doc = frame.contentDocument;
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

function startSectionTracking() {
  stopSectionTracking();
  sectionTimer = setInterval(pollActiveSection, SECTION_POLL_MS);
}

function stopSectionTracking() {
  if (sectionTimer) {
    clearInterval(sectionTimer);
    sectionTimer = null;
  }
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
function matchFrameArticle() {
  try {
    const path = frame.contentWindow.location.pathname;
    return (
      ACTIVE_ARTICLES.find((a) => path.endsWith('/' + a.path)) ||
      ACTIVE_ARTICLES.find((a) => path.endsWith(a.path.split('/').pop()))
    ) || null;
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

function openSelected() {
  const group = select.value;
  if (!group) return;
  const lang = currentArticle().lang;
  const article = resolveForGroup(group, lang);
  if (article) openReader(article.id, { section: state.readerSection });
}

readerBtn.addEventListener('click', openSelected);

select.addEventListener('change', openSelected);

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

// Clicking the modal title returns to the reader index page.
modalTitle.addEventListener('click', () => {
  const idx = getArticle('articles-index');
  if (idx && idx.id !== state.readerId) openReader(idx.id);
});

overlay.addEventListener('click', (e) => {
  if (e.target.id === 'page-modal-close' || e.target === overlay) {
    closeReader();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isReaderOpen()) {
    closeReader();
  }
});

