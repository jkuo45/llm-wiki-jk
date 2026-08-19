// Notes panel — gallery + lightbox with OCR transcripts and persistent
// annotation overlays, deep links to the linked paper and graph entities.
// The upload screen (files) is hidden for now. Sibling of the
// analysis (#chat) panel.

import { descByLabel, noteUrl, RAW_NODES } from './data.js';
import { esc, renderMarkdown } from './markdown.js';
import { updateHash, parseHash } from './routing.js';
import { state } from './state.js';
import { openPromptComposer } from './chat.js';

const API_BASE = (window.GRAPH_API_BASE || 'https://api.johnnykuo.com/v1').replace(/\/$/, '');
const NOTES_API = `${API_BASE}/notes`;
const MAX_PAGES = 24;
const MAX_BYTES = 30 * 1024 * 1024;

// ------------------------------------------------------------
// DOM refs
// ------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const notesPanel = $('notes-panel');
const notesBox = $('notes-box');
const notesBtn = $('btn-notes');
const notesClose = $('notes-close');
const modeSwitch = $('notes-mode-switch');
const browseEl = $('notes-browse');
const uploadEl = $('notes-upload');
const lightboxEl = $('notes-lightbox');
const searchInput = $('notes-search');
const searchPopup = $('notes-search-popup');
const docFilter = $('notes-doc-filter');
const topicBtn = $('notes-topic-btn');
const topicPopup = $('notes-topic-popup');
const topicBadge = $('notes-topic-badge');
const langToggle = $('notes-lang');
const langBtns = Array.from(document.querySelectorAll('#notes-lang [data-lang]'));
const galleryEl = $('notes-gallery');
const emptyEl = $('notes-empty');

const drop = $('notes-drop');
const fileInput = $('notes-file');
const pickBtn = $('notes-pick');
const pagesPreview = $('notes-pages-preview');
const titleField = $('notes-title-field');
const docField = $('notes-doc-field');
const topicField = $('notes-topic-field');
const entitiesField = $('notes-entities-field');
const tagsField = $('notes-tags-field');
const entityList = $('notes-entity-list');
const submitBtn = $('notes-submit');
const uploadStatus = $('notes-upload-status');

const lbBack = $('notes-lb-back');
const lbTitle = $('notes-lb-title');
const lbView = $('notes-lb-view');
const lbBody = $('notes-lb-body');
const lbImg = $('notes-lb-img');
const lbSvg = $('notes-lb-svg');
const lbZoomable = $('notes-lb-zoomable');
const lbImgwrap = $('notes-lb-imgwrap');
const lbPrev = $('notes-lb-prev');
const lbNext = $('notes-lb-next');
const lbPages = $('notes-lb-pages');
const lbOcr = $('notes-lb-ocr');
const lbSendPrompt = $('notes-lb-send-prompt');
const lbStatus = $('notes-lb-status');
const lbEntities = $('notes-lb-entities');
const lbTags = $('notes-lb-tags');
const annDownload = $('notes-lb-ann-download');
const annClear = $('notes-lb-ann-clear');
const annColors = $('notes-ann-colors');
const labelModal = $('notes-label-modal');
const labelInput = $('notes-label-input');
const labelOk = $('notes-label-ok');
const labelCancel = $('notes-label-cancel');
const zoomIn = $('notes-lb-zoomin');
const zoomOut = $('notes-lb-zoomout');
const fitBtn = $('notes-lb-fit');

// ------------------------------------------------------------
// State
// ------------------------------------------------------------
let notes = [];
let documents = [];
let filterQ = '';
let filterTopic = '';
let filterDoc = '';   // active document filter ('' = all documents)
let uiLang = 'en-US'; // panel + note-content language; persisted across visits
try {
  const savedLang = localStorage.getItem('llm-wiki-notes-ui-lang');
  if (savedLang === 'en-US' || savedLang === 'zh-TW') uiLang = savedLang;
} catch (e) { /* localStorage unavailable — keep the default */ }
let loaded = false;
let loading = false;
let apiDown = false;
let loadPromise = null;

let currentNote = null;      // note object being viewed in the lightbox
let currentPage = 1;
let naturalW = 0, naturalH = 0;
let zoom = 1, panX = 0, panY = 0;
let annTool = null;          // circle | rect | arrow | label
let annColor = '#ffcc00';
let drawing = null;          // in-progress shape
let panning = null;
let viewMode = false;        // fullscreen image view (side details hidden)

let draftFiles = [];         // { file, thumb }
let statusTimer = null;

// ------------------------------------------------------------
// UI language (EN / 中) — panel chrome strings + note-content selection.
// Sibling of the Reader's article language toggle: `uiLang` picks both the
// panel's own labels and, per note, `note.translations[uiLang]` when present
// (falling back to the root/original fields).
// ------------------------------------------------------------
const UI_STRINGS = {
  'en-US': {
    panelClose: 'Close panel',
    notesViewAria: 'Notes view',
    searchPlaceholder: 'Search notes, OCR, entities, tags',
    filterByTopic: 'Filter by topic',
    allTopics: 'All topics',
    filterByDocument: 'Filter by document',
    allDocuments: 'All documents',
    panelLanguage: 'Panel language',
    langEn: 'English (US)',
    langZh: '繁體中文（台灣）',
    galleryLoading: 'Loading notes…',
    galleryApiDown: 'Notes API unreachable — could not load notes.',
    galleryNoMatch: 'No notes match your filters.',
    galleryEmpty: 'No handwritten notes yet.',
    back: '← Back',
    backToGallery: 'Back to gallery',
    prevImg: 'Previous image',
    nextImg: 'Next image',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    fit: 'Fit',
    viewLabel: '⛶ View',
    detailsLabel: '⛶ Details',
    viewFull: 'Fullscreen view of the note',
    viewDetails: 'Show details panel',
    annDownload: 'Download this page as a PNG with the annotations drawn in',
    transcript: 'Transcript',
    entities: 'Entities',
    tags: 'Tags',
    annotations: 'Annotations',
    none: 'none',
    noTranscript: 'No transcript yet.',
    ocrFailed: 'The existing transcription failed — the OCR model could not read the image (it may not support vision).',
    sendPromptBtn: '→ Prompt',
    sendPrompt: 'Send this transcript to the analysis Prompt',
    noUsableTranscript: 'This note has no usable transcript yet',
    openNoteToSend: 'Open a note to send its transcript',
    toolCircle: 'Circle highlight',
    toolCircleLabel: '∘ Circle',
    toolRect: 'Rectangle highlight',
    toolRectLabel: '▭ Rect',
    toolArrow: 'Arrow',
    toolArrowLabel: '→ Arrow',
    toolLabel: 'Text label',
    toolLabelLabel: 'A Label',
    clearAnn: 'Clear',
    clearAnnTitle: 'Clear annotations on current page',
    colorYellow: 'Yellow',
    colorGreen: 'Green',
    colorBlue: 'Blue',
    colorRed: 'Red',
    colorPurple: 'Purple',
  },
  'zh-TW': {
    panelClose: '關閉面板',
    notesViewAria: '筆記檢視',
    searchPlaceholder: '搜尋筆記、OCR、實體與標籤',
    filterByTopic: '主題篩選',
    allTopics: '全部主題',
    filterByDocument: '文件篩選',
    allDocuments: '全部文件',
    panelLanguage: '面板語言',
    langEn: '英語（美國）',
    langZh: '繁體中文（台灣）',
    galleryLoading: '載入筆記中…',
    galleryApiDown: '無法連線 Notes API — 無法載入筆記。',
    galleryNoMatch: '沒有符合篩選條件的筆記。',
    galleryEmpty: '尚無手寫筆記。',
    back: '← 返回',
    backToGallery: '返回圖庫',
    prevImg: '上一張',
    nextImg: '下一張',
    zoomIn: '放大',
    zoomOut: '縮小',
    fit: '重設',
    viewLabel: '⛶ 檢視',
    detailsLabel: '⛶ 詳情',
    viewFull: '筆記全螢幕檢視',
    viewDetails: '顯示詳情面板',
    annDownload: '將此頁及標註下載為 PNG',
    transcript: '文字稿',
    entities: '實體',
    tags: '標籤',
    annotations: '標註',
    none: '無',
    noTranscript: '尚無文字稿。',
    ocrFailed: '既有的文字稿轉錄失敗 — OCR 模型無法讀取圖片（可能不支援視覺）。',
    sendPromptBtn: '→ 傳送至提示',
    sendPrompt: '將此文字稿傳送至分析提示',
    noUsableTranscript: '此筆記尚無可用的文字稿',
    openNoteToSend: '開啟筆記以傳送其文字稿',
    toolCircle: '圓形標註',
    toolCircleLabel: '∘ 圓形',
    toolRect: '矩形標註',
    toolRectLabel: '▭ 矩形',
    toolArrow: '箭頭',
    toolArrowLabel: '→ 箭頭',
    toolLabel: '文字標籤',
    toolLabelLabel: 'A 標籤',
    clearAnn: '清除',
    clearAnnTitle: '清除目前頁面的標註',
    colorYellow: '黃色',
    colorGreen: '綠色',
    colorBlue: '藍色',
    colorRed: '紅色',
    colorPurple: '紫色',
  },
};

function t(key) {
  return (UI_STRINGS[uiLang] && UI_STRINGS[uiLang][key]) || UI_STRINGS['en-US'][key] || '';
}

// Manifest notes may carry per-language content in `note.translations`
// (e.g. translations.zh-TW.ocr). Prefer the active language, then fall back
// to the root (original) fields.
function activeTitle(note) {
  const tr = (note.translations || {})[uiLang];
  return (tr && tr.title) || note.title || '';
}

function activeOcr(note) {
  const tr = (note.translations || {})[uiLang];
  return (tr && tr.ocr) || note.ocr || '';
}

// Apply the current UI language to the whole panel: toggle the EN/中 buttons,
// hide/show the bilingual `.ui-en` / `.ui-zh` spans, rewrite data-i18n labels,
// repopulate the filter options, and re-render whatever view is open.
function applyUiLang(lang) {
  if (lang !== 'en-US' && lang !== 'zh-TW') lang = 'en-US';
  uiLang = lang;
  try { localStorage.setItem('llm-wiki-notes-ui-lang', uiLang); } catch (e) { /* ignore */ }

  langBtns.forEach((b) => b.classList.toggle('active', b.dataset.lang === uiLang));
  notesPanel.querySelectorAll('.ui-en').forEach((el) => { el.hidden = uiLang !== 'en-US'; });
  notesPanel.querySelectorAll('.ui-zh').forEach((el) => { el.hidden = uiLang === 'en-US'; });

  notesPanel.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && t(key)) {
      el.textContent = t(key);
      el.setAttribute('aria-label', t(key));
    }
  });
  notesPanel.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key && t(key)) el.title = t(key);
  });

  modeSwitch.setAttribute('aria-label', t('notesViewAria'));
  notesClose.setAttribute('aria-label', t('panelClose'));
  langToggle.setAttribute('aria-label', t('panelLanguage'));
  langBtns.forEach((b) => { b.title = t(b.dataset.lang === 'zh-TW' ? 'langZh' : 'langEn'); });
  searchInput.placeholder = t('searchPlaceholder');
  closeSearchPopup();
  populatePickers();

  renderGallery();
  setViewMode(viewMode);
  if (!lightboxEl.hidden && currentNote) renderLightbox();
  syncNotesHash();
}

langBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang && lang !== uiLang) applyUiLang(lang);
  });
});

const ARROW_MARKER = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
ARROW_MARKER.setAttribute('id', 'notes-arrowhead');
ARROW_MARKER.setAttribute('markerWidth', '8');
ARROW_MARKER.setAttribute('markerHeight', '8');
ARROW_MARKER.setAttribute('refX', '7');
ARROW_MARKER.setAttribute('refY', '4');
ARROW_MARKER.setAttribute('orient', 'auto');
const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
arrowPath.setAttribute('d', 'M0,0 L8,4 L0,8 Z');
arrowPath.setAttribute('fill', '#ffcc00');
ARROW_MARKER.appendChild(arrowPath);

function imageUrl(note, page, thumb) {
  const base = `${NOTES_API}/image/${encodeURIComponent(note.id)}/${page}`;
  return thumb ? base + '?thumb=1' : base;
}

function noteTopic(note) { return (note.topic || 'misc').trim(); }

// ------------------------------------------------------------
// Panel open / close
// ------------------------------------------------------------
function openNotes() {
  notesPanel.classList.add('open');
  notesBtn.classList.add('open');
  syncNotesKeyboard();
  ensureIndexLoaded();
  syncNotesHash();
}
function closeNotes() {
  closeTopicPopup();
  closeSearchPopup();
  notesPanel.classList.remove('open');
  notesBtn.classList.remove('open');
  setLightbox(null);
  updatePromptAvailability();
  syncNotesKeyboard();
  syncNotesHash();
}

// Push the current notes-panel view into the shared state so the URL
// hash reflects it (`#notes` = gallery, `&note=<id>` = lightbox, plus page /
// fullscreen flags) and the URL can be shared / restored.
function syncNotesHash(pushState = true) {
  const viewingNote = currentNote && !lightboxEl.hidden;
  state.notesOpen = notesPanel.classList.contains('open');
  state.notesDoc = filterDoc || '';
  state.notesUiLang = uiLang;
  state.notesNoteId = viewingNote ? currentNote.id : null;
  state.notesPage = viewingNote ? currentPage : null;
  state.notesViewMode = viewingNote ? viewMode : false;
  updateHash(pushState);
}

function syncNotesKeyboard() {
  if (!notesPanel.classList.contains('open') || !window.visualViewport) {
    notesPanel.style.bottom = '';
    return;
  }
  const kb = Math.max(0, window.innerHeight - window.visualViewport.height);
  notesPanel.style.bottom = kb > 0 ? kb + 'px' : '';
}
if (window.visualViewport) window.visualViewport.addEventListener('resize', syncNotesKeyboard);
window.addEventListener('resize', syncNotesKeyboard);

notesBtn.addEventListener('click', () => {
  if (notesPanel.classList.contains('open')) { closeNotes(); return; }
  // Only one overlay at a time: close the analysis panel if it is open.
  const chatClose = $('chat-close');
  const chatOpen = document.getElementById('chat-panel')?.classList.contains('open');
  if (chatOpen && chatClose) chatClose.click();
  openNotes();
});
// Conversely, if the analysis panel opens while notes are up, close notes first.
document.addEventListener('click', (e) => {
  if (notesPanel.classList.contains('open') && e.target.closest('#btn-chat')) closeNotes();
}, true);
notesClose.addEventListener('click', closeNotes);

function setView(view) {
  // The Upload screen is hidden (notes arrive via the backend); Browse is the
  // only reachable view. Programmatic requests for upload snap back to browse.
  if (view !== 'browse') view = 'browse';
  modeSwitch.querySelectorAll('.chat-mode-tab').forEach((t) => {
    const active = t.dataset.view === view;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  browseEl.hidden = view !== 'browse';
  uploadEl.hidden = view !== 'upload';
  lightboxEl.hidden = true;
  currentNote = null;
}
modeSwitch.addEventListener('click', (e) => {
  const tab = e.target.closest('.chat-mode-tab');
  if (!tab) return;
  if (tab.dataset.view === 'prompt') { sendTranscriptToPrompt(); return; }
  setView(tab.dataset.view); syncNotesHash();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!lightboxEl.hidden) { goBackToGallery(); return; }
  if (notesPanel.classList.contains('open')) closeNotes();
});

// ------------------------------------------------------------
// Index / gallery
// ------------------------------------------------------------
async function loadIndex() {
  loading = true;
  apiDown = false;
  renderGallery(); // show the loading spinner while the fetch is in flight
  try {
    const resp = await fetch(NOTES_API);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    notes = Array.isArray(data.notes) ? data.notes : [];
    documents = Array.isArray(data.documents) ? data.documents : [];
    populatePickers();
    loaded = true;
  } catch (err) {
    apiDown = true;
    notes = [];
    documents = [];
    console.warn('notes index failed:', err);
  } finally {
    loading = false;
    renderGallery(); // draw the real content (or empty/error state) now
  }
}

// Resolve once the index has been fetched at least once. openNotes and URL-hash
// restore share the same in-flight load so a deep link can open the lightbox as
// soon as the gallery data lands (and never starts a duplicate fetch).
function ensureIndexLoaded() {
  if (loaded) return Promise.resolve();
  if (!loadPromise) loadPromise = loadIndex();
  return loadPromise.finally(() => { loadPromise = null; });
}

function populatePickers() {
  // Topic filter — rendered as a popup menu behind the funnel icon button.
  const topics = [...new Set(notes.map(noteTopic))].sort();
  const topicItems = [{ value: '', label: t('allTopics') }]
    .concat(topics.map((tp) => ({ value: tp, label: tp })));
  topicPopup.innerHTML = topicItems.map((it) => {
    const active = filterTopic === it.value;
    return `<button type="button" class="notes-popup-item topic" data-topic="${esc(it.value)}" role="option" aria-selected="${active}">
      <span class="popup-topic">${esc(it.label)}</span>
      <span class="popup-check" ${active ? '' : 'hidden'}>✓</span>
    </button>`;
  }).join('');
  topicPopup.querySelectorAll('[data-topic]').forEach((b) =>
    b.addEventListener('click', () => setTopicFilter(b.dataset.topic)));
  updateTopicBadge();

  // Document filter — built from the notes that actually carry a document so
  // every option leads to a non-empty gallery (versus listing the full
  // `_document_` index, most of which have no notes yet).
  const docs = [...new Set(notes.map((n) => (n.document || '').trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));
  docFilter.innerHTML = `<option value="">${esc(t('allDocuments'))}</option>` +
    docs.map((d) => `<option value="${esc(d)}">${esc(shortDoc(d))}</option>`).join('');
  docFilter.value = filterDoc;
  docFilter.disabled = !docs.length;

  // Search placeholder hint
  searchInput.placeholder = t('searchPlaceholder');

  // NOTE: The Upload screen is disabled (its tab and view are hidden, and
  // setView() snaps any non-browse request back to browse). It therefore does
  // NOT populate the upload-only controls here — populating them was expensive:
  // the entity <datalist> built up to 4000 <option> nodes and the document
  // picker grew with every src/notes document, all for a view that can't be
  // reached. If upload is re-enabled, restore that population here.
}

function filteredNotes() {
  const q = filterQ.trim().toLowerCase();
  return notes.filter((n) => {
    if (filterTopic && noteTopic(n) !== filterTopic) return false;
    if (filterDoc && (n.document || '') !== filterDoc) return false;
    if (!q) return true;
    const hay = [
      activeTitle(n), n.topic, n.document, (activeOcr(n) || ''),
      (n.entities || []).join(' '),
      (n.tags || []).join(' '),
    ].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

function renderGallery() {
  const list = filteredNotes();
  if (apiDown) {
    galleryEl.innerHTML = '';
    emptyEl.hidden = false;
    emptyEl.textContent = t('galleryApiDown');
    return;
  }
  if (loading) {
    galleryEl.innerHTML = `<div class="notes-loading"><span class="spinner"></span><span>${esc(t('galleryLoading'))}</span></div>`;
    emptyEl.hidden = true;
    return;
  }
  if (!list.length) {
    galleryEl.innerHTML = '';
    emptyEl.hidden = false;
    emptyEl.textContent = notes.length
      ? t('galleryNoMatch')
      : t('galleryEmpty');
    return;
  }
  emptyEl.hidden = true;
  galleryEl.innerHTML = list.map(cardHTML).join('');
  galleryEl.querySelectorAll('.notes-card').forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener('click', () => openLightbox(findNote(id)));
  });
}

function findNote(id) {
  return notes.find((n) => n.id === id) || currentNote;
}

// Keep the in-memory gallery in sync after edits/OCR so cards reflect the
// latest state without a manual refresh.
function syncGalleryNote(n) {
  const i = notes.findIndex((x) => x.id === n.id);
  if (i >= 0) notes[i] = n;
}

function cardHTML(n) {
  const first = (n.pages || [])[0];
  const thumb = first
    ? `<img class="notes-card-thumb" src="${esc(imageUrl(n, first.page, true))}" alt="${esc(n.title)}" loading="lazy" decoding="async">`
    : '<div class="notes-card-thumb"></div>';
  const doc = n.document
    ? `<span class="notes-badge" title="${esc(n.document)}">${esc(shortDoc(n.document))}</span>` : '';
  const entities = (n.entities || []).slice(0, 3).map((e) =>
    `<span class="notes-badge">${esc(e)}</span>`).join('');
  const tags = (n.tags || []).slice(0, 3).map((t) =>
    `<span class="notes-badge topic">#${esc(t)}</span>`).join('');
  const ocrBadge = n.has_ocr ? '<span class="notes-badge ocr">OCR</span>' : '';
  const draftBadge = n.draft ? '<span class="notes-badge draft">draft</span>' : '';
  const snip = (activeOcr(n) || '').replace(/--- Page \d+ ---\s*/g, ' ').slice(0, 220);
  return `<div class="notes-card" data-id="${esc(n.id)}" title="${esc(activeTitle(n))}">
    ${thumb}
    <div class="notes-card-body">
      <div class="notes-card-title">${esc(activeTitle(n))}</div>
      <div class="notes-card-meta">
        <span class="notes-badge topic">${esc(noteTopic(n))}</span>
        ${doc}${entities}<span class="notes-badge">${(n.pages || []).length}p</span>
        ${ocrBadge}${draftBadge}
      </div>
      ${snip ? `<p class="notes-ocr-snip">${esc(snip)}</p>` : ''}
      ${tags ? `<div class="notes-card-meta">${tags}</div>` : ''}
    </div>
  </div>`;
}

function shortDoc(filename) {
  const base = filename.startsWith('_document_ - ') ? filename.slice('_document_ - '.length) : filename;
  return base.length > 46 ? base.slice(0, 43) + '…' : base;
}

// ------------------------------------------------------------
// Filters
// ------------------------------------------------------------
searchInput.addEventListener('input', () => {
  filterQ = searchInput.value;
  renderGallery();
  updateSearchPopup();
});
searchInput.addEventListener('keydown', (e) => {
  if (!searchPopup.hidden && searchMatchesList.length) {
    if (e.key === 'ArrowDown') { e.preventDefault(); searchIdx = (searchIdx + 1) % searchMatchesList.length; highlightSearch(); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); searchIdx = (searchIdx - 1 + searchMatchesList.length) % searchMatchesList.length; highlightSearch(); return; }
    if (e.key === 'Enter') { e.preventDefault(); selectSearchMatch(searchIdx < 0 ? 0 : searchIdx); return; }
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeSearchPopup(); return; }
  }
});
docFilter.addEventListener('change', () => {
  filterDoc = docFilter.value;
  renderGallery();
  syncNotesHash();
});
topicBtn.addEventListener('click', () => {
  if (topicPopup.hidden) {
    populatePickers(); // refresh active check + labels while closed→open
    topicPopup.hidden = false;
    topicBtn.setAttribute('aria-expanded', 'true');
  } else {
    closeTopicPopup();
  }
});

// ------------------------------------------------------------
// Search combobox + topic filter popup
// ------------------------------------------------------------
let searchMatchesList = [];
let searchIdx = -1;

function searchMatches() {
  const q = filterQ.trim().toLowerCase();
  if (!q) return [];
  return notes.filter((n) => {
    const hay = [
      activeTitle(n), (activeOcr(n) || ''), n.document,
      (n.entities || []).join(' '), (n.tags || []).join(' '),
    ].join(' ').toLowerCase();
    return hay.includes(q);
  }).slice(0, 8);
}

function updateSearchPopup() {
  const matches = searchMatches();
  if (!matches.length) { closeSearchPopup(); return; }
  searchMatchesList = matches;
  searchIdx = -1;
  searchPopup.innerHTML = matches.map((n, i) =>
    `<button type="button" class="notes-popup-item" data-idx="${i}" role="option" aria-selected="false">
      <span class="popup-topic">${esc(activeTitle(n))}</span>
      <span class="popup-sub">${esc(noteTopic(n))}</span>
    </button>`).join('');
  searchPopup.hidden = false;
  searchInput.setAttribute('aria-expanded', 'true');
  searchPopup.querySelectorAll('[data-idx]').forEach((b) =>
    b.addEventListener('click', () => selectSearchMatch(parseInt(b.dataset.idx, 10))));
}

function highlightSearch() {
  searchPopup.querySelectorAll('[data-idx]').forEach((b) =>
    b.classList.toggle('active', parseInt(b.dataset.idx, 10) === searchIdx));
}

function selectSearchMatch(idx) {
  const n = searchMatchesList[idx];
  if (!n) return;
  closeSearchPopup();
  searchInput.value = activeTitle(n);
  filterQ = activeTitle(n);
  renderGallery();
  openLightbox(findNote(n.id));
}

function closeSearchPopup() {
  searchPopup.hidden = true;
  searchPopup.innerHTML = '';
  searchMatchesList = [];
  searchIdx = -1;
  searchInput.setAttribute('aria-expanded', 'false');
}

function setTopicFilter(value) {
  filterTopic = value;
  closeTopicPopup();
  renderGallery();
}

function closeTopicPopup() {
  topicPopup.hidden = true;
  topicBtn.setAttribute('aria-expanded', 'false');
}

function updateTopicBadge() {
  const has = !!filterTopic;
  topicBadge.hidden = !has;
  if (has) topicBadge.textContent = filterTopic;
  topicBtn.classList.toggle('active', has);
}

// Clicking anywhere outside a popup (or its trigger) closes it.
document.addEventListener('pointerdown', (e) => {
  if (!e.target.closest('.notes-topic-wrap')) closeTopicPopup();
  if (!e.target.closest('.notes-search-wrap')) closeSearchPopup();
}, true);

// ------------------------------------------------------------
// Lightbox
// ------------------------------------------------------------
function openLightbox(note) {
  currentNote = note;
  currentPage = (note.pages && note.pages[0] && note.pages[0].page) || 1;
  browseEl.hidden = true;
  uploadEl.hidden = true;
  lightboxEl.hidden = false;
  setViewMode(false);
  renderLightbox();
  syncNotesHash();
}
function setLightbox(note) {
  if (!note) { currentNote = null; return; }
  openLightbox(note);
}
lbBack.addEventListener('click', goBackToGallery);

function goBackToGallery() {
  lightboxEl.hidden = true;
  browseEl.hidden = false;
  uploadEl.hidden = true;
  currentNote = null;
  setViewMode(false);
  updatePromptAvailability();
  renderGallery();
  syncNotesHash();
}

// Toggle the fullscreen image view (side details hidden, image fills the panel).
function setViewMode(on) {
  viewMode = on;
  lbBody.classList.toggle('view-mode', viewMode);
  lbView.textContent = viewMode ? t('detailsLabel') : t('viewLabel');
  lbView.title = viewMode ? t('viewDetails') : t('viewFull');
  syncNotesHash();
}
lbView.addEventListener('click', () => setViewMode(!viewMode));

// Models without vision return a refusal instead of a transcript when asked to
// read an image. Detect those so a failed attempt is not treated as a finished,
// cached OCR result.
const OCR_FAIL_RE = /OCR_FAILED|cannot (transcribe|process|read)|can'?t (process|read|see)|unable to (process|read|see)|doesn'?t support|does not support image|no vision|image files? directly|not support images?|use (google lens|microsoft lens)/i;
function looksLikeOcrFailure(text) {
  return !!(text && OCR_FAIL_RE.test(text));
}

function renderLightbox() {
  const n = currentNote;
  if (!n) return;
  lbTitle.textContent = activeTitle(n);
  lbTitle.title = activeTitle(n);
  renderPagesStrip();
  setPage(currentPage);
  renderOcr();
  renderChips();
  renderAnnotations();
}

function pageInfo(page) {
  return (currentNote.pages || []).find((p) => p.page === page) || null;
}

function setPage(page) {
  const n = currentNote;
  const pages = (n.pages || []).length || 1;
  currentPage = Math.min(Math.max(1, page), pages);
  const info = pageInfo(currentPage);
  zoom = 1; panX = 0; panY = 0; naturalW = 0; naturalH = 0;
  if (info) {
    lbImg.src = imageUrl(n, currentPage, false);
    lbImg.onload = () => {
      naturalW = lbImg.naturalWidth || 1000;
      naturalH = lbImg.naturalHeight || Math.round(naturalW * 0.8);
      lbSvg.setAttribute('viewBox', `0 0 ${naturalW} ${naturalH}`);
      lbSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      updateZoom();
      renderAnnotations();
    };
  } else {
    lbImg.removeAttribute('src');
    lbSvg.removeAttribute('viewBox');
  }
  // ←/→ move across every image in the gallery (not just pages of one note),
  // so back/forth steps to the previous/next image in Browse order.
  const entries = imageEntries();
  const idx = currentImageIndex();
  lbPrev.disabled = idx <= 0 || entries.length === 0;
  lbNext.disabled = idx < 0 || idx >= entries.length - 1 || entries.length === 0;
  renderPagesStrip();
}

// The bottom filmstrip mirrors the lightbox's ←/→ navigation, which steps
// through EVERY image in the current (filtered) gallery — not just one note's
// pages. So it renders all gallery images, highlights the one being viewed,
// and clicking any thumbnail jumps to it.
function renderPagesStrip() {
  const entries = imageEntries();
  if (!entries.length) {
    lbPages.innerHTML = '';
    return;
  }
  const curIdx = currentImageIndex();
  lbPages.innerHTML = entries.map((e, i) => {
    const multi = (e.note.pages || []).length > 1;
    const label = multi
      ? `${activeTitle(e.note)} · page ${e.page}`
      : activeTitle(e.note);
    return `<button class="${i === curIdx ? 'page-active' : ''}" data-idx="${i}" title="${esc(label)}">
      <img src="${esc(imageUrl(e.note, e.page, true))}" alt="${esc(label)}" loading="lazy" decoding="async">
    </button>`;
  }).join('');
  lbPages.querySelectorAll('button').forEach((b) =>
    b.addEventListener('click', () => goToImage(parseInt(b.dataset.idx, 10))));
  // Keep the active thumbnail in view so the filmstrip tracks navigation.
  const activeBtn = lbPages.querySelector('.page-active');
  if (activeBtn) activeBtn.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

// Jump the lightbox to a specific gallery image (filmstrip thumbnail click).
function goToImage(idx) {
  const entries = imageEntries();
  const target = entries[idx];
  if (!target) return;
  if (target.note.id !== currentNote?.id) {
    currentNote = target.note;
    renderLightbox();
  }
  changePage(target.page);
}

// Flip to a specific page and persist it in the URL hash (replaceState — page
// flips shouldn't add a history entry per click, but the shared page number
// stays in the URL).
function changePage(page) {
  setPage(page);
  syncNotesHash(false);
}

// ------------------------------------------------------------
// Gallery image navigation (lightbox ←/→): move across every image of every
// note in the current Browse gallery, not just the pages of one note.
// ------------------------------------------------------------
// Flat, gallery-ordered list of { note, page } for every image.
function imageEntries() {
  return filteredNotes().flatMap((n) => (n.pages || []).map((p) => ({ note: n, page: p.page })));
}

// Index of the currently viewed image within imageEntries(), or 0 if the note
// isn't in the current gallery, or -1 when there are no images at all.
function currentImageIndex() {
  const entries = imageEntries();
  if (!entries.length) return -1;
  let idx = entries.findIndex((e) => e.note.id === currentNote?.id && e.page === currentPage);
  if (idx === -1) idx = entries.findIndex((e) => e.note.id === currentNote?.id);
  return idx !== -1 ? idx : 0;
}

// Step +1 (forward) or -1 (back) through the gallery's images. Crossing a note
// boundary switches the open note; within a note it just flips the page.
function navigateImage(delta) {
  const entries = imageEntries();
  if (!entries.length) return;
  const target = currentImageIndex() + delta;
  if (target < 0 || target >= entries.length) return;
  const { note, page } = entries[target];
  if (note.id !== currentNote?.id) {
    currentNote = note;
    renderLightbox();
  }
  changePage(page);
}

lbPrev.addEventListener('click', () => navigateImage(-1));
lbNext.addEventListener('click', () => navigateImage(+1));
// Arrow keys step through images while the lightbox is open (ignored while
// typing in a metadata field).
document.addEventListener('keydown', (e) => {
  if (lightboxEl.hidden) return;
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
  if (e.key === 'ArrowLeft') { navigateImage(-1); e.preventDefault(); }
  else if (e.key === 'ArrowRight') { navigateImage(+1); e.preventDefault(); }
});

// ------------------------------------------------------------
// Zoom / pan
// ------------------------------------------------------------
function updateZoom() {
  lbZoomable.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
}
zoomIn.addEventListener('click', () => { zoom = Math.min(6, zoom * 1.35); updateZoom(); });
zoomOut.addEventListener('click', () => { zoom = Math.max(1, zoom / 1.35); if (zoom === 1) { panX = 0; panY = 0; } updateZoom(); });
fitBtn.addEventListener('click', () => { zoom = 1; panX = 0; panY = 0; updateZoom(); });

lbImgwrap.addEventListener('wheel', (e) => {
  e.preventDefault();
  zoom = Math.min(6, Math.max(1, zoom * (e.deltaY > 0 ? 0.85 : 1.18)));
  updateZoom();
}, { passive: false });

lbImgwrap.addEventListener('pointerdown', (e) => {
  if (annTool) { beginDraw(e); return; }
  if (zoom > 1) {
    panning = { startX: e.clientX, startY: e.clientY, px: panX, py: panY };
    lbImgwrap.classList.add('panning');
  }
});
window.addEventListener('pointermove', (e) => {
  if (panning) {
    panX = panning.px + (e.clientX - panning.startX);
    panY = panning.py + (e.clientY - panning.startY);
    updateZoom();
  } else if (drawing) {
    updateDraw(e);
  }
});
window.addEventListener('pointerup', () => {
  if (panning) { panning = null; lbImgwrap.classList.remove('panning'); }
  if (drawing) finishDraw();
});

// ------------------------------------------------------------
// Annotation overlay
// ------------------------------------------------------------
function setAnnTool(tool) {
  annTool = tool;
  document.querySelectorAll('.notes-ann-tools button').forEach((b) =>
    b.classList.toggle('active', b.dataset.tool === tool));
}
document.querySelectorAll('.notes-ann-tools button').forEach((b) =>
  b.addEventListener('click', () => setAnnTool(b.dataset.tool === annTool ? null : b.dataset.tool)));
annColors.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-color]');
  if (!b) return;
  annColor = b.dataset.color;
  annColors.querySelectorAll('button').forEach((x) => x.classList.toggle('active', x === b));
  ARROW_MARKER.querySelector('path').setAttribute('fill', annColor);
});

function annPos(e) {
  const r = lbZoomable.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return { x: 0.5, y: 0.5 };
  const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
  return { x, y };
}

function beginDraw(e) {
  const p = annPos(e);
  drawing = { tool: annTool, start: p, end: { ...p } };
  e.preventDefault();
}
function updateDraw(e) {
  if (!drawing) return;
  drawing.end = annPos(e);
  const d = drawing;
  if (d.tool === 'label') return;
  if (d.el) d.el.remove();
  d.el = drawTmp(d);
}
function finishDraw() {
  const d = drawing;
  drawing = null;
  if (!d) return;
  if (d.tool === 'label') {
    openLabelModal(d.start);
    return;
  }
  const ex = d.end.x, ey = d.end.y;
  if (d.tool === 'circle') {
    // Radius normalized to image width: compute in natural pixels, then divide.
    const r = Math.hypot((ex - d.start.x) * naturalW, (ey - d.start.y) * naturalH) / naturalW;
    addAnnotation({ type: 'circle', x: d.start.x, y: d.start.y, r });
  } else if (d.tool === 'rect') {
    addAnnotation({
      type: 'rect',
      x: Math.min(d.start.x, ex), y: Math.min(d.start.y, ey),
      w: Math.abs(ex - d.start.x), h: Math.abs(ey - d.start.y),
    });
  } else if (d.tool === 'arrow') {
    addAnnotation({ type: 'arrow', x1: d.start.x, y1: d.start.y, x2: ex, y2: ey });
  }
}

function drawTmp(d) {
  const el = annShapeEl(d.tool, d.start, d.end, true);
  if (el) lbSvg.appendChild(el);
  return el;
}

function annShapeEl(tool, a, b, isTmp) {
  const color = isTmp ? annColor : (a.color || annColor);
  if (tool === 'circle') {
    const c = circleRect(a, b);
    return svgEl('circle', { cx: c.x, cy: c.y, r: c.r, fill: 'none', stroke: color, 'stroke-width': 3 });
  }
  if (tool === 'rect') {
    return svgEl('rect', {
      x: a.x * naturalW, y: a.y * naturalH,
      width: (b.x - a.x) * naturalW, height: (b.y - a.y) * naturalH,
      fill: color, 'fill-opacity': 0.22, stroke: color, 'stroke-width': 2.5,
    });
  }
  if (tool === 'arrow') {
    return svgEl('line', {
      x1: a.x * naturalW, y1: a.y * naturalH, x2: b.x * naturalW, y2: b.y * naturalH,
      stroke: color, 'stroke-width': 3, 'marker-end': 'url(#notes-arrowhead)',
    });
  }
  return null;
}

function circleRect(a, b) {
  const sx = a.x * naturalW, sy = a.y * naturalH, ex = b.x * naturalW, ey = b.y * naturalH;
  const r = Math.hypot(ex - sx, ey - sy);
  return { x: sx, y: sy, r };
}

function addAnnotation(ann) {
  currentNote.annotations = currentNote.annotations || [];
  currentNote.annotations.push({
    id: `a${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    page: currentPage,
    color: annColor,
    ...ann,
  });
  renderAnnotations();
}

function renderAnnotations() {
  // Clear is only actionable once the current page has at least one annotation.
  annClear.disabled = !(currentNote && (currentNote.annotations || []).some((a) => a.page === currentPage));
  lbSvg.innerHTML = '';
  if (!naturalW || !naturalH || !currentNote) return;
  if (!lbSvg.querySelector('defs')) lbSvg.appendChild(ARROW_MARKER);
  (currentNote.annotations || []).forEach((a) => {
    if (a.page !== currentPage) return;
    const el = annotationEl(a);
    if (el) lbSvg.appendChild(el);
  });
}

function annotationEl(a) {
  const color = a.color || '#ffcc00';
  switch (a.type) {
    case 'circle':
      return svgEl('circle', {
        cx: a.x * naturalW, cy: a.y * naturalH, r: (a.r || 0) * naturalW,
        fill: 'none', stroke: color, 'stroke-width': 3.5, 'class': 'ann',
      });
    case 'rect':
      return svgEl('rect', {
        x: a.x * naturalW, y: a.y * naturalH,
        width: (a.w || 0) * naturalW, height: (a.h || 0) * naturalH,
        fill: color, 'fill-opacity': 0.25, stroke: color, 'stroke-width': 2.5, 'class': 'ann',
      });
    case 'arrow':
      return svgEl('line', {
        x1: a.x1 * naturalW, y1: a.y1 * naturalH, x2: a.x2 * naturalW, y2: a.y2 * naturalH,
        stroke: color, 'stroke-width': 3.5, 'marker-end': 'url(#notes-arrowhead)', 'class': 'ann',
      });
    case 'label':
      return svgEl('text', {
        x: a.x * naturalW, y: a.y * naturalH,
        fill: color, 'class': 'ann', 'font-size': 16,
      }, a.label || '');
  }
  return null;
}

function svgEl(tag, attrs, text) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (text !== undefined) el.textContent = text;
  return el;
}

// Download the current page with the annotation overlay burned into a PNG.
// Annotations are no longer POSTed back to the server (the overlay lives in
// the exported image).
annDownload.addEventListener('click', () => downloadAnnotationsImage());
annClear.addEventListener('click', () => {
  if (!currentNote) return;
  currentNote.annotations = (currentNote.annotations || []).filter((a) => a.page !== currentPage);
  renderAnnotations();
});

// ------------------------------------------------------------
// Label text input modal (replaces window.prompt)
// ------------------------------------------------------------
let pendingLabel = null; // { x, y } normalized tap point for the label

function openLabelModal(start) {
  pendingLabel = start;
  labelInput.value = '';
  labelModal.hidden = false;
  setTimeout(() => labelInput.focus(), 0);
}
function closeLabelModal() {
  labelModal.hidden = true;
  pendingLabel = null;
}
function commitLabel() {
  const text = labelInput.value.trim();
  if (text && pendingLabel) {
    addAnnotation({ type: 'label', x: pendingLabel.x, y: pendingLabel.y, label: text });
  }
  closeLabelModal();
}
labelOk.addEventListener('click', commitLabel);
labelCancel.addEventListener('click', closeLabelModal);
labelModal.addEventListener('click', (e) => { if (e.target === labelModal) closeLabelModal(); });
labelInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); commitLabel(); }
  else if (e.key === 'Escape') { e.preventDefault(); closeLabelModal(); }
});

function drawAnnotationsToCanvas(ctx, W, H) {
  for (const a of (currentNote.annotations || [])) {
    if (a.page !== currentPage) continue;
    const color = a.color || '#ffcc00';
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    switch (a.type) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(a.x * W, a.y * H, (a.r || 0) * W, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case 'rect': {
        ctx.globalAlpha = 0.25;
        ctx.fillRect(a.x * W, a.y * H, (a.w || 0) * W, (a.h || 0) * H);
        ctx.globalAlpha = 1;
        ctx.strokeRect(a.x * W, a.y * H, (a.w || 0) * W, (a.h || 0) * H);
        break;
      }
      case 'arrow': {
        const x1 = a.x1 * W, y1 = a.y1 * H, x2 = a.x2 * W, y2 = a.y2 * H;
        const ang = Math.atan2(y2 - y1, x2 - x1);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        const len = 11;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - len * Math.cos(ang - 0.4), y2 - len * Math.sin(ang - 0.4));
        ctx.lineTo(x2 - len * Math.cos(ang + 0.4), y2 - len * Math.sin(ang + 0.4));
        ctx.closePath();
        ctx.fill();
        break;
      }
      case 'label':
        ctx.font = '16px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.fillText((a.label || ''), a.x * W, a.y * H);
        break;
    }
  }
}

async function downloadAnnotationsImage() {
  const n = currentNote;
  if (!n) return;
  if (!naturalW || !naturalH) { setStatus('Page image not ready yet.', false); return; }
  const canvas = document.createElement('canvas');
  canvas.width = naturalW;
  canvas.height = naturalH;
  const ctx = canvas.getContext('2d');
  try {
    // Load the full-res page fresh with CORS so drawing it does not taint the
    // canvas (a cross-origin img drawn without CORS would block toDataURL).
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl(n, currentPage, false);
    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });
    ctx.drawImage(img, 0, 0, naturalW, naturalH);
  } catch (err) {
    setStatus('Could not load the page image for export.', false);
    console.warn('annotated-image export: page load failed:', err);
    return;
  }
  drawAnnotationsToCanvas(ctx, naturalW, naturalH);
  const a = document.createElement('a');
  a.download = `${n.id}-p${currentPage}-annotated.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
  setStatus('Downloaded annotated page.', true);
}

// ------------------------------------------------------------
// OCR transcript (display-only — transcription is handled server-side /
// via reconciliation, not from the browser)
// ------------------------------------------------------------
function renderOcr() {
  const text = (currentNote && activeOcr(currentNote) || '').trim();
  if (!text) {
    lbOcr.textContent = t('noTranscript');
    lbOcr.classList.remove('ocr-warn');
  } else if (looksLikeOcrFailure(text)) {
    lbOcr.textContent = t('ocrFailed');
    lbOcr.classList.add('ocr-warn');
  } else {
    lbOcr.textContent = text;
    lbOcr.classList.remove('ocr-warn');
  }
  updatePromptAvailability();
}

// ------------------------------------------------------------
// Send the open note's transcript to the analysis Prompt
// ------------------------------------------------------------
// Composed prompts are capped here so the message (+ the output-format spec that
// withOutputSpec appends on send) stays under the API's 4000-char limit.
const PROMPT_CHAR_CAP = 3000;

function notePromptTab() {
  return modeSwitch.querySelector('.chat-mode-tab[data-view="prompt"]');
}

// Returns the trimmed transcript when the note can be analyzed, or false.
function usableTranscript(note) {
  if (!note) return false;
  const text = (activeOcr(note) || '').trim();
  if (!text) return false;
  if (looksLikeOcrFailure(text)) return false;
  return text;
}

// Enable/disable the header Prompt tab (activity dot) and the lightbox "→ Prompt"
// button based on whether the open note has a usable transcript.
function updatePromptAvailability() {
  const usable = usableTranscript(currentNote);
  const tab = notePromptTab();
  const tip = usable
    ? t('sendPrompt')
    : currentNote
      ? t('noUsableTranscript')
      : t('openNoteToSend');
  if (tab) {
    tab.classList.toggle('has-activity', !!usable);
    tab.title = tip;
  }
  if (lbSendPrompt) {
    lbSendPrompt.disabled = !usable;
    lbSendPrompt.title = tip;
  }
}

// Resolve a note's entity names to graph node labels (only those that exist in
// the graph can be @-tagged as structured context).
function graphLabelsFor(entities) {
  if (!Array.isArray(entities) || !entities.length) return [];
  const labelSet = new Set(RAW_NODES.map(n => n.label));
  return entities.map((e) => String(e).trim()).filter((e) => labelSet.has(e));
}

// Build the analysis prompt: instruction line + note metadata + OCR transcript.
function buildTranscriptPrompt(note) {
  const ocr = (note.ocr || '').trim();
  const header = [
    'Analyze this handwritten note transcript and summarize the key insights, mechanisms, and biomedical entities it mentions.',
    `Note: ${activeTitle(note) || '(untitled)'}`,
    note.topic ? `Topic: ${note.topic}` : '',
    note.document ? `Document: ${note.document}` : '',
    (note.entities || []).length ? `Entities: ${note.entities.join(', ')}` : '',
    '---',
    ocr,
  ].filter(Boolean).join('\n');
  return header.length > PROMPT_CHAR_CAP
    ? header.slice(0, PROMPT_CHAR_CAP) + '\n…(transcript truncated — remaining text omitted)'
    : header;
}

// Transient inline feedback in the transcript heading (e.g. "open a note first").
function flashTranscriptStatus(msg, timeout = 4200) {
  if (!lbStatus) return;
  lbStatus.textContent = msg;
  clearTimeout(flashTranscriptStatus._timer);
  flashTranscriptStatus._timer = setTimeout(() => { lbStatus.textContent = ''; }, timeout);
}

// Hand the open note's transcript to the analysis agent: close Notes, open the
// Analysis panel in Prompt mode with the transcript pre-loaded in the composer
// (entities @-tagged) for the user to review and send.
function sendTranscriptToPrompt() {
  // Capture the note before closeNotes() nulls the module-level currentNote.
  const note = currentNote;
  const text = usableTranscript(note);
  if (!text) {
    // In the lightbox the inline status is visible; in the gallery there's no
    // note to analyze, so just hand the user a fresh Prompt composer.
    if (note) {
      flashTranscriptStatus(t('noUsableTranscript'));
      return;
    }
    closeNotes();
    openPromptComposer('');
    return;
  }
  closeNotes();
  openPromptComposer(buildTranscriptPrompt(note), graphLabelsFor(note.entities));
}
lbSendPrompt.addEventListener('click', sendTranscriptToPrompt);
updatePromptAvailability();
applyUiLang(uiLang);

// ------------------------------------------------------------
// Entity / tag chips + wiki modal
// ------------------------------------------------------------
function openWikiModal(key, event) {
  const overlay = $('wiki-modal-overlay');
  const desc = descByLabel.get(key);
  if (!desc) {
    const url = noteUrl(key);
    if (url) window.open(url, '_blank', 'noopener');
    return;
  }
  $('wiki-modal-title').textContent = key.replace(/_/g, ' ');
  $('wiki-modal-body').innerHTML = renderMarkdown(desc);
  $('wiki-modal-link').href = noteUrl(key) || '#';
  overlay.classList.add('visible');
  event && event.stopPropagation();
}

function renderChips() {
  if (!currentNote) return;
  const entities = currentNote.entities || [];
  const tags = currentNote.tags || [];
  lbEntities.innerHTML = entities.length
    ? entities.map((e) => `<button class="notes-chip" data-entity="${esc(e)}">${esc(e)}</button>`).join('')
    : `<span class="notes-muted">${esc(t('none'))}</span>`;
  lbEntities.querySelectorAll('.notes-chip').forEach((c) =>
    c.addEventListener('click', (e) => {
      e.stopPropagation();
      openWikiModal(c.dataset.entity, e);
    }));
  lbTags.innerHTML = tags.length
    ? tags.map((tag) => `<span class="notes-chip tag-chip">#${esc(tag)}</span>`).join('')
    : `<span class="notes-muted">${esc(t('none'))}</span>`;
}

// ------------------------------------------------------------
// Upload
// ------------------------------------------------------------
function tokens(str) {
  return String(str || '').split(',').map((s) => s.trim()).filter(Boolean);
}

pickBtn.addEventListener('click', () => fileInput.click());
drop.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => { addFiles([...fileInput.files]); fileInput.value = ''; });

['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('drag'); }));
['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));
drop.addEventListener('drop', (e) => addFiles([...e.dataTransfer.files]));

async function addFiles(fileList) {
  const ok = [];
  let skipped = 0;
  for (const f of fileList) {
    if (!/^image\/(jpe?g|png|webp|gif)$/.test(f.type || '')) { skipped += 1; continue; }
    if (f.size > MAX_BYTES) { skipped += 1; continue; }
    if (draftFiles.length + ok.length >= MAX_PAGES) { skipped += 1; break; }
    const compressed = await compressImage(f);
    ok.push({ upload: compressed.blob, thumb: compressed.thumb, name: f.name });
  }
  if (skipped > 0) {
    setStatus(`${skipped} file(s) skipped — accepted formats: JPG, PNG, WebP, GIF (≤30 MB).`, false);
  }
  draftFiles.push(...ok);
  renderDraftPreview();
}

// Downscale + JPEG-encode a photo in the browser before upload. Photos are
// typically 2–8 MB straight off a phone; compressed pages upload in a few
// hundred KB so they survive restrictive proxy body limits and load faster.
// PNG/WebP lose transparency — acceptable for handwritten notes. GIFs are
// passed through untouched to preserve animation.
function compressImage(file, maxDim = 2400, quality = 0.82) {
  return new Promise((resolve) => {
    const type = (file.type || '').toLowerCase();
    if (type === 'image/gif') {
      resolve({ blob: file, thumb: null });
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width * scale));
      const h = Math.max(1, Math.round(img.height * scale));
      const cv = document.createElement('canvas');
      cv.width = w; cv.height = h;
      cv.getContext('2d').drawImage(img, 0, 0, w, h);

      // Thumbnail (≈320px) for the preview grid.
      const tw = Math.min(320, w);
      const th = Math.max(1, Math.round(h * (tw / w)));
      const tc = document.createElement('canvas');
      tc.width = tw; tc.height = th;
      tc.getContext('2d').drawImage(cv, 0, 0, tw, th);
      const thumb = tc.toDataURL('image/jpeg', 0.72);

      cv.toBlob((blob) => {
        URL.revokeObjectURL(url);
        resolve({
          blob: blob && blob.size < file.size ? blob : file,
          thumb,
        });
      }, 'image/jpeg', quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve({ blob: file, thumb: null }); };
    img.src = url;
  });
}

function renderDraftPreview() {
  pagesPreview.innerHTML = draftFiles.map((d, i) =>
    `<div class="notes-page-thumb">
      ${d.thumb ? `<img src="${d.thumb}" alt="Page ${i + 1}">` : '<img alt="">'}
      <span class="page-num">${i + 1}</span>
      <button class="rm" data-i="${i}" title="Remove page">×</button>
    </div>`).join('');
  pagesPreview.querySelectorAll('.rm').forEach((b) =>
    b.addEventListener('click', () => {
      draftFiles.splice(parseInt(b.dataset.i, 10), 1);
      renderDraftPreview();
    }));
}

submitBtn.addEventListener('click', async () => {
  if (!draftFiles.length) { setStatus('Add at least one image first.', false); return; }
  // Guard against restrictive proxy body limits (nginx defaults to 1 MB): warn
  // before a doomed round-trip. The server still accepts up to 30 MB/file.
  const totalBytes = draftFiles.reduce((s, d) => s + (d.upload ? d.upload.size : 0), 0);
  if (totalBytes > 1024 * 1024) {
    setStatus(`Upload is ~${(totalBytes / (1024 * 1024)).toFixed(1)} MB total — if the server rejects it, raise nginx client_max_body_size (see deploy/README). Common default is 1 MB.`, false);
  } else {
    uploadStatus.textContent = '';
  }
  submitBtn.disabled = true;
  uploadStatus.className = 'notes-upload-status';
  uploadStatus.textContent = 'Uploading…';
  const fd = new FormData();
  draftFiles.forEach((d) => fd.append('files', d.upload, d.name || 'page.jpg'));
  fd.append('title', titleField.value.trim());
  fd.append('topic', topicField.value.trim());
  fd.append('document', docField.value);
  fd.append('entities', JSON.stringify(tokens(entitiesField.value)));
  fd.append('tags', JSON.stringify(tokens(tagsField.value)));
  try {
    const resp = await fetch(`${NOTES_API}/upload`, { method: 'POST', body: fd });
    if (!resp.ok) {
      let detail = `HTTP ${resp.status}`;
      try {
        const body = await resp.json();
        if (body && body.detail) detail = String(body.detail);
      } catch (_) { /* non-JSON error body */ }
      throw new Error(detail);
    }
    const note = await resp.json();
    draftFiles = [];
    renderDraftPreview();
    titleField.value = ''; topicField.value = ''; entitiesField.value = ''; tagsField.value = ''; docField.value = '';
    setStatus('Uploaded. You can now open it and run OCR.', true);
    await loadIndex();
    setView('browse');
    openLightbox(note);
  } catch (err) {
    const isFetchAbort = typeof err === 'object' && err && err.name === 'AbortError';
    console.warn('upload failed:', err);
    setStatus(isFetchAbort ? 'Upload aborted.' : `Upload failed — ${netErrorText(err)}`, false);
  } finally {
    submitBtn.disabled = false;
  }
});

function setStatus(msg, ok) {
  uploadStatus.className = 'notes-upload-status' + (ok ? '' : ' error');
  uploadStatus.textContent = msg;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => { uploadStatus.textContent = ''; }, 8000);
}

// A fetch that rejects with `TypeError: Failed to fetch` means the request
// never completed (server unreachable, or the browser blocked the cross-origin
// call because the response carried no CORS headers). Turn that into a
// readable, actionable message.
function netErrorText(err) {
  const base = (err && err.message) || 'Unknown error';
  const local = location.protocol === 'file:' ||
    ['localhost', '127.0.0.1', '::1'].includes(location.hostname);
  const parts = [`${base} (${API_BASE})`];
  if (navigator.onLine === false) parts.push('you appear to be offline.');
  else if (local)
    parts.push('running locally? start the dev API with ./deploy/dev.sh (this page auto-points at http://127.0.0.1:8000/v1 when served from localhost).');
  else
    parts.push('the API may be down, the page origin not in ALLOWED_ORIGINS, or the request exceeded the proxy body-size limit (raise nginx client_max_body_size).');
  return parts.join(' — ');
}

// ------------------------------------------------------------
// URL-hash restore / deep links
// ------------------------------------------------------------
export function isNotesOpen() {
  return notesPanel.classList.contains('open');
}

// Restore the notes panel from URL-hash params:
//   #notes          → open the panel to the gallery (browse) view
//   &note=<id>      → open that note in the lightbox
//   &page=N         → open that page of the note
//   &noteview=full  → toggle the fullscreen image view
// Called by graph.js's restoreFromHash; updateHash is suppressed during restore.
export async function restoreNotes(params) {
  if (!notesPanel.classList.contains('open')) openNotes();
  setView('browse');
  if (params && params.uilang && params.uilang !== 'en-US') {
    applyUiLang(params.uilang);
  }
  if (params && params.doc) {
    filterDoc = params.doc;
    docFilter.value = filterDoc;
  }
  renderGallery();
  if (!params || !params.note) return;
  try {
    await ensureIndexLoaded();
  } catch (err) {
    return; // API unreachable — the gallery shows the error banner instead.
  }
  // Bail if the hash changed while the gallery was loading (e.g. the user
  // pressed Back before the fetch resolved) — don't force-open a stale note.
  if (parseHash()?.note !== params.note) return;
  const note = notes.find((n) => n.id === params.note);
  if (!note) return; // unknown / deleted id → stays in gallery view
  openLightbox(note);
  const page = parseInt(params.page, 10);
  if (page && page >= 1) setPage(page);
  setViewMode(params.noteview === 'full');
}

// Kick the panel open on initial load if already referenced (no-op guard).
export { openNotes, closeNotes };