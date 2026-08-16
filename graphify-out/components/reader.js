// Reader module: article registry, modal open/close, and hash-driven loading.
// Articles are organized by `group` (a logical article) × `lang` (en / zh).
// The article dropdown picks the group; the language toggle swaps within it.

import { state } from './state.js';
import { updateHash } from './routing.js';

// ------------------------------------------------------------
// Article registry (semantic IDs, not file paths)
// ------------------------------------------------------------
export const ARTICLES = [
  {
    id: 'sirtuin-pleiotropy',
    group: 'sirtuin-pleiotropy',
    lang: 'en-US',
    title: 'Sirtuins - Pleiotropy in Tumor Cell Metabolism',
    path: 'pages/sirtuins_pleiotropic_roles.html',
    created: '2026-08-13',
    updated: '2026-08-15',
    default: true,
  },
  {
    id: 'sirtuin-pleiotropy-zh',
    group: 'sirtuin-pleiotropy',
    lang: 'zh-TW',
    title: 'Sirtuins - 腫瘤細胞代謝中的多效性（繁體中文）',
    path: 'pages/sirtuins_pleiotropic_roles_zh-TW.html',
    created: '2026-08-14',
    updated: '2026-08-16',
  },
  {
    id: 'sirtuin-disease-complications',
    group: 'sirtuin-disease-complications',
    lang: 'en-US',
    title: 'Sirtuins - Disease Complications',
    path: 'pages/sirtuins_disease_complications.html',
    created: '2026-08-14',
    updated: '2026-08-15',
  },
  {
    id: 'sirtuin-disease-complications-zh',
    group: 'sirtuin-disease-complications',
    lang: 'zh-TW',
    title: 'Sirtuins - 疾病併發症（繁體中文）',
    path: 'pages/sirtuins_disease_complications_zh-TW.html',
    created: '2026-08-14',
    updated: '2026-08-15',
  },
  {
    id: 'ivermectin-fenbendazole-anticancer',
    group: 'ivermectin-fenbendazole-anticancer',
    lang: 'en-US',
    title: '(Speculative) Ivermectin × Fenbendazole (complementary mechanisms)',
    path: 'pages/ivermectin-fenbendazole-anticancer.html',
    created: '2026-08-16',
    updated: '2026-08-16',
  },
  {
    id: 'ivermectin-fenbendazole-anticancer-zh',
    group: 'ivermectin-fenbendazole-anticancer',
    lang: 'zh-TW',
    title: '伊維菌素 × 芬苯達唑（互補抗癌機制）（繁體中文）',
    path: 'pages/ivermectin-fenbendazole-anticancer_zh-TW.html',
    created: '2026-08-16',
    updated: '2026-08-16',
  }
];

export const getArticle = (id) => ARTICLES.find((a) => a.id === id) || null;
export const getDefaultArticle = () => ARTICLES.find((a) => a.default) || ARTICLES[0];

// ------------------------------------------------------------
// Group / language helpers
// ------------------------------------------------------------
const groupKey = new Map();
ARTICLES.forEach((a) => { if (!groupKey.has(a.group)) groupKey.set(a.group, a); });

function stripSuffix(title) {
  return title.replace(/\s*（繁體中文）\s*$/, '');
}

function groupTitle(group) {
  const en = ARTICLES.find((a) => a.group === group && a.lang === 'en-US');
  const zh = ARTICLES.find((a) => a.group === group && a.lang === 'zh-TW');
  const base = en || zh || groupKey.get(group) || ARTICLES[0];
  if (zh) return `${base.title} · ${stripSuffix(zh.title)}`;
  return base.title;
}

function groupHasLang(group, lang) {
  return ARTICLES.some((a) => a.group === group && a.lang === lang);
}

function resolveForGroup(group, lang) {
  return (
    ARTICLES.find((a) => a.group === group && a.lang === lang) ||
    ARTICLES.find((a) => a.group === group) ||
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
  select.innerHTML = Array.from(groupKey.keys())
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
  let active = sections[0].id;
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

frame.addEventListener('load', startSectionTracking);

buildOptions();
updatePrevBtn();

// ------------------------------------------------------------
// Wire up (button, select, language toggle, overlay, keyboard)
// ------------------------------------------------------------
const readerBtn = document.getElementById('btn-reader');

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

buildOptions();
updatePrevBtn();
