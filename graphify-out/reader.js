// Reader module: article registry, modal open/close, and hash-driven loading.

import { state } from './state.js';
import { updateHash } from './routing.js';

// ------------------------------------------------------------
// Article registry (semantic IDs, not file paths)
// ------------------------------------------------------------
export const ARTICLES = [
  {
    id: 'sirtuin-pleiotropy',
    title: 'Sirtuin Pleiotropic Roles / 去乙醯酶多效性',
    path: 'pages/sirtuin_pleiotropic_roles.html',
    default: true,
  },
];

export const getArticle = (id) => ARTICLES.find((a) => a.id === id) || null;
export const getDefaultArticle = () => ARTICLES.find((a) => a.default) || ARTICLES[0];

// ------------------------------------------------------------
// DOM refs
// ------------------------------------------------------------
const overlay = document.getElementById('page-modal-overlay');
const frame = document.getElementById('page-modal-frame');
const openLink = document.getElementById('page-modal-open');
const select = document.getElementById('reader-select');
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
function loadArticle(article) {
  frame.src = article.path;
  openLink.href = article.path;
}

function buildOptions() {
  select.innerHTML = ARTICLES.map(
    (a) => `<option value="${a.id}">${a.title}</option>`,
  ).join('');
}

function setSelect(id) {
  select.value = id;
}

// ------------------------------------------------------------
// Open / close (exported for graph.js hash restore)
// `restore = true` for hash-restore/popstate: reconcile the session
// stack to the current article instead of pushing a new entry.
// ------------------------------------------------------------
export function openReader(id, { restore = false } = {}) {
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
  loadArticle(article);
  setSelect(article.id);
  overlay.classList.add('visible');
  state.readerId = article.id;
  updatePrevBtn();
  if (!restore) updateHash();
}

export function closeReader() {
  overlay.classList.remove('visible');
  state.readerId = null;
  readerStack.length = 0;
  updatePrevBtn();
  updateHash();
}

export function isReaderOpen() {
  return overlay.classList.contains('visible');
}

// ------------------------------------------------------------
// Wire up (button, select, overlay, keyboard)
// ------------------------------------------------------------
const readerBtn = document.getElementById('btn-reader');

readerBtn.addEventListener('click', () => {
  const id = select.value || (getDefaultArticle() || {}).id;
  openReader(id);
});

select.addEventListener('change', () => {
  const id = select.value;
  if (getArticle(id)) openReader(id);
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
