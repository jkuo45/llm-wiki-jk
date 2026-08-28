// Notes panel — gallery + lightbox with OCR transcripts and persistent
// annotation overlays, deep links to the linked paper and graph entities.
// Sibling of the analysis (#prompt) panel.

import { esc } from './markdown.js';
import { updateHash, parseHash } from './routing.js';
import { state } from './state.js';
import { openPromptComposer } from './prompt.js';
import { getUiLang, setUiLang, persistUiLang, onUiLangChange } from './i18n.js';

const API_BASE = (import.meta.env.VITE_API_BASE || window.GRAPH_API_BASE).replace(/\/$/, '');
const NOTES_API = `${API_BASE}/notes`;

// GitHub-first image host. Every committed note image lives at the
// deterministic path src/images/<id>/<file> (thumbnail: <stem>.thumb.<ext>) in
// this repo, so the browser loads it straight from raw.githubusercontent
// instead of proxying image bytes through the API. The API `/v1/notes/image`
// endpoint remains only as the onerror fallback (staged drafts, not-yet-pushed
// images, or raw.githubusercontent cache lag). Override for local dev or a
// different deploy branch with:  window.GRAPH_NOTES_IMAGE_BASE = '…';
const GH_NOTES_BASE = (window.GRAPH_NOTES_IMAGE_BASE
  || 'https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/dev/src/images').replace(/\/$/, '');

// Bilingual (zh-TW) display labels for the controlled tag vocabulary. The raw
// slug remains the source of truth for filtering/search — only the rendered
// text is localized via `tagLabel()`. Resolved against the Vite base URL
// (same convention as components/data.js).
const NOTES_DATA_BASE = import.meta.env.BASE_URL + 'data/';
let TAG_LABELS = null;            // { <slug>: '繁體中文 label' } once loaded
let tagLabelsPending = false;

function refreshTagLabels() {
  renderGallery();                                          // cards + card badges
  if (!comboboxPopup.hidden) renderCombobox();              // tag suggestions
  if (!lightboxEl.hidden && currentNote) renderLightbox();  // lightbox tag chips
}

function loadTagLabels() {
  if (TAG_LABELS !== null || tagLabelsPending) return;
  tagLabelsPending = true;
  fetch(NOTES_DATA_BASE + 'notes-tags-zh-TW.json?v=' + Date.now())
    .then((r) => (r.ok ? r.json() : {}))
    .then((d) => {
      TAG_LABELS = d || {};
      if (uiLang === 'zh-TW') refreshTagLabels();
    })
    .catch(() => { TAG_LABELS = {}; })
    .finally(() => { tagLabelsPending = false; });
}

// Localized display label for a tag slug. Returns the zh-TW label when the
// panel language is 繁體中文 and a label exists; otherwise the raw slug.
function tagLabel(tag) {
  if (uiLang !== 'zh-TW') return tag;
  return (TAG_LABELS && TAG_LABELS[tag]) || tag;
}

loadTagLabels();

// ------------------------------------------------------------
// DOM refs
// ------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const notesPanel = $('notes-panel');

const notesBtn = $('btn-notes');
const notesClose = $('notes-close');
const browseEl = $('notes-browse');
const uploadEl = $('notes-upload');
const lightboxEl = $('notes-lightbox');
const searchInput = $('notes-search');
const sortBtn = $('notes-sort');
const comboboxPopup = $('notes-combobox-popup');
const notesCombobox = $('notes-combobox');
const fieldsEl = document.querySelector('.notes-combobox-field');
const notesSearchClear = $('notes-search-clear');
const langToggles = Array.from(document.querySelectorAll('#notes-panel .lang-toggle, #notes-lightbox .lang-toggle'));
const langBtns = Array.from(document.querySelectorAll('#notes-panel .lang-toggle [data-lang], #notes-lightbox .lang-toggle [data-lang]'));
const galleryEl = $('notes-gallery');
const emptyEl = $('notes-empty');

const lbBack = $('notes-lb-back');
const lbTopPrev = $('notes-lb-top-prev');
const lbTopNext = $('notes-lb-top-next');
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
const lbTags = $('notes-lb-tags');
const annDownload = $('notes-lb-ann-download');
const annClear = $('notes-lb-ann-clear');
const annColors = $('notes-ann-colors');
const labelModal = $('notes-label-modal');
const labelInput = $('notes-label-input');
const labelOk = $('notes-label-ok');
const labelCancel = $('notes-label-cancel');

// ------------------------------------------------------------
// State
// ------------------------------------------------------------
let notes = [];
let documents = [];
let filterQ = '';
// Selected tag filters (multiselect). Notes must carry every tag in this set
// (AND semantics), combined with the free-text `filterQ` query.
const activeTags = new Set();
// Gallery sort direction by `updated` date. true = newest first (descending),
// false = oldest first (ascending). Matches the view that was open when the
// sort toggle last changed.
let sortDesc = true;
let uiLang = getUiLang(); // panel + note-content language; shared across screens
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

// ------------------------------------------------------------
// UI language (EN / 中) — panel chrome strings + note-content selection.
// Sibling of the Reader's article language toggle: `uiLang` picks both the
// panel's own labels and, per note, `note.translations[uiLang]` when present
// (falling back to `note.translations['en-US']`, then to legacy root fields).
// ------------------------------------------------------------
const UI_STRINGS = {
  'en-US': {
    panelClose: 'Close panel',
    searchPlaceholder: '🔎 Search notes, transcripts, tags, etc.',
    done: 'Done',
    sectionNotes: 'Notes',
    filterByTopic: 'Filter by topic',
    allTopics: 'All topics',
    filterByDocument: 'Filter by document',
    allDocuments: 'All documents',
    sortDesc: 'Sort by created date — newest first',
    sortAsc: 'Sort by created date — oldest first',
    filterByTagPrefix: 'Filter by tag: ',
    panelLanguage: 'Panel language',
    langEn: 'English (US)',
    langZh: '繁體中文（台灣）',
    galleryLoading: 'Loading notes…',
    galleryApiDown: 'Notes API unreachable — could not load notes.',
    galleryNoMatch: 'No notes match your filters.',
    galleryEmpty: 'No notes yet.',
    removeTagFilter: 'Remove tag filter',
    back: '← Gallery',
    backToGallery: 'Back to gallery',
    prevImg: 'Previous image',
    prevNav: '← Previous',
    nextNav: 'Next →',
    nextImg: 'Next image',
    viewLabel: '⛶ Full',
    detailsLabel: '⛶ Details',
    viewFull: 'Fullscreen view of the note',
    viewDetails: 'Show details panel',
    annDownload: 'Download this page as a PNG with the annotations drawn in',
    transcript: 'Transcript',
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
    starred: 'Starred',
  },
  'zh-TW': {
    panelClose: '關閉面板',
    searchPlaceholder: '搜尋轉錄筆記、標籤',
    done: '完成',
    sectionNotes: '筆記',
    filterByTopic: '主題篩選',
    allTopics: '全部主題',
    filterByDocument: '文件篩選',
    allDocuments: '全部文件',
    sortDesc: '依建立日期排序 — 最新在前',
    sortAsc: '依建立日期排序 — 最舊在前',
    filterByTagPrefix: '以標籤篩選: ',
    panelLanguage: '面板語言',
    langEn: '英語（美國）',
    langZh: '繁體中文（台灣）',
    galleryLoading: '載入筆記中…',
    galleryApiDown: '無法連線 Notes API — 無法載入筆記。',
    galleryNoMatch: '沒有符合篩選條件的筆記。',
    galleryEmpty: '尚無任何筆記。',
    removeTagFilter: '移除標籤篩選',
    back: '← 圖庫',
    backToGallery: '返回圖庫',
    prevImg: '上一張',
    prevNav: '← 上一張',
    nextNav: '下一張 →',
    nextImg: '下一張',
    viewLabel: '⛶ 全螢幕',
    detailsLabel: '⛶ 詳情',
    viewFull: '筆記全螢幕檢視',
    viewDetails: '顯示詳情面板',
    annDownload: '將此頁及標註下載為 PNG',
    transcript: '文字稿',
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
    starred: '已加星號',
  },
};

function t(key) {
  return (UI_STRINGS[uiLang] && UI_STRINGS[uiLang][key]) || UI_STRINGS['en-US'][key] || '';
}

// Manifest notes carry per-language content in `note.translations`
// (e.g. translations.en-US.title/ocr). Prefer the active language, then fall
// back to the default locale (en-US), then to legacy root fields.
function activeTitle(note) {
  const tr = (note.translations || {})[uiLang] || (note.translations || {})['en-US'];
  return (tr && tr.title) || note.title || '';
}

function activeOcr(note) {
  const tr = (note.translations || {})[uiLang] || (note.translations || {})['en-US'];
  return (tr && tr.ocr) || note.ocr || '';
}

// Apply the current UI language to the whole panel: toggle the EN/中 buttons,
// hide/show the bilingual `.ui-en` / `.ui-zh` spans, rewrite data-i18n labels,
// repopulate the filter options, and re-render whatever view is open.
function applyUiLang(lang) {
  if (lang !== 'en-US' && lang !== 'zh-TW') lang = 'en-US';
  uiLang = lang;
  persistUiLang(uiLang);

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

  notesClose.setAttribute('aria-label', t('panelClose'));
  langToggles.forEach((el) => el.setAttribute('aria-label', t('panelLanguage')));
  langBtns.forEach((b) => { b.title = t(b.dataset.lang === 'zh-TW' ? 'langZh' : 'langEn'); });
  searchInput.placeholder = t('searchPlaceholder');
  closeCombobox();

  renderGallery();
  renderSortButton();
  setViewMode(viewMode);
  if (!lightboxEl.hidden && currentNote) renderLightbox();
  updateCloseLabel();
  syncNotesHash();
}

langBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang && lang !== uiLang) { applyUiLang(lang); setUiLang(lang); }
  });
});
// Re-render this panel whenever the shared language changes elsewhere.
onUiLangChange((lang) => { if (lang && lang !== uiLang) applyUiLang(lang); });

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
  const info = (note.pages || []).find((p) => p.page === page);
  if (!info) return '';
  const file = info.file || '';
  const dot = file.lastIndexOf('.');
  const stem = dot > 0 ? file.slice(0, dot) : file;
  const ext = dot > 0 ? file.slice(dot) : '';
  const name = (thumb && ext) ? `${stem}.thumb${ext}` : file;
  return `${GH_NOTES_BASE}/${encodeURIComponent(note.id)}/${encodeURIComponent(name)}`;
}

// API fallback for images that aren't on GitHub yet (staged drafts,
// not-yet-pushed commits) — the browser can still get them from the server.
function apiImageUrl(note, page, thumb) {
  const base = `${NOTES_API}/image/${encodeURIComponent(note.id)}/${page}`;
  return thumb ? base + '?thumb=1' : base;
}

// Swap an <img> to the API fallback if its GitHub URL fails to load. Guards
// against double-fallback and against overwriting an already-swapped src.
function bindImageFallback(img, note, page, thumb) {
  img.addEventListener('error', () => {
    if (img.dataset.ghFallback) return;
    img.dataset.ghFallback = '1';
    const fb = apiImageUrl(note, page, thumb);
    if (fb && img.src !== fb) img.src = fb;
  });
}

// Lightbox full-res image: same GitHub-first + API fallback. Fires after
// setPage() assigns lbImg.src, reading the current note/page at that time.
lbImg.addEventListener('error', () => {
  if (!currentNote) return;
  if (lbImg.dataset.ghFallback) return;
  lbImg.dataset.ghFallback = '1';
  const fb = apiImageUrl(currentNote, currentPage, false);
  if (fb && lbImg.src !== fb) lbImg.src = fb;
});

// Notes no longer carry a `topic` field — categorization lives in tags.
// Derive a display topic from the tags list (prefer the topic-style
// tag when present, otherwise the first tag). The controlled vocabulary
// of valid topic slugs is auto-derived from the src/notes/*/ directory
// layout and exported to web/data/topics.json by 03_rebuild_from_triples.py,
// so adding a topic folder needs no code change. Until that JSON loads
// (null), fall back to the tag list as before.
let KNOWN_TOPICS = null;        // string[] once loaded from topics.json
let topicsPending = false;

function loadTopics() {
  if (KNOWN_TOPICS !== null || topicsPending) return;
  topicsPending = true;
  fetch(NOTES_DATA_BASE + 'topics.json?v=' + Date.now())
    .then((r) => (r.ok ? r.json() : []))
    .then((d) => {
      KNOWN_TOPICS = Array.isArray(d) ? d : [];
      refreshTagLabels();        // re-render cards with the resolved topic
    })
    .catch(() => { KNOWN_TOPICS = []; })
    .finally(() => { topicsPending = false; });
}

loadTopics();                  // kick off the fetch after KNOWN_TOPICS is initialized

function noteTopic(note) {
  const tags = note.tags || [];
  const list = KNOWN_TOPICS || [];
  const hit = tags.find((t) => list.includes(t));
  return (hit || tags[0] || 'misc').trim();
}

const MONTHS_SHORT = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
// Short "MMM YYYY" (uppercase) banner date for a note, derived from its
// `created` date (falling back to `updated`), matching the gallery sort order.
function noteMonthYear(n) {
  const d = (n.created && /^\d{4}-\d{2}-\d{2}/.test(n.created)) ? n.created
    : (n.updated && /^\d{4}-\d{2}-\d{2}/.test(n.updated)) ? n.updated : '';
  if (!d) return '';
  const [y, m] = d.split('-');
  const mon = MONTHS_SHORT[parseInt(m, 10) - 1];
  return (mon && y) ? `${mon} ${y}` : '';
}

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
  closeCombobox();
  notesPanel.classList.remove('open');
  notesBtn.classList.remove('open');
  currentNote = null;
  // Reset to the gallery view so reopening always lands there.
  lightboxEl.hidden = true;
  browseEl.hidden = false;
  updateCloseLabel();
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
  const promptClose = $('prompt-close');
  const promptOpen = document.getElementById('prompt-panel')?.classList.contains('open');
  if (promptOpen && promptClose) promptClose.click();
  openNotes();
});
// Conversely, if the analysis panel opens while notes are up, close notes first.
document.addEventListener('click', (e) => {
  if (notesPanel.classList.contains('open') && e.target.closest('#btn-prompt')) closeNotes();
}, true);
// The header close (×) doubles as the back-to-gallery control in the
// single-image view. It always stays an × icon; only its help text reflects
// the current view: "Back to gallery" while an image is open, "Close panel"
// on the gallery.
function updateCloseLabel() {
  const key = !lightboxEl.hidden ? 'backToGallery' : 'panelClose';
  notesClose.title = t(key);
  notesClose.setAttribute('aria-label', t(key));
}
notesClose.addEventListener('click', () => {
  if (!lightboxEl.hidden) { goBackToGallery(); return; }
  closeNotes();
});

function setView(view) {
  // The Upload screen is hidden (notes arrive via the backend); Browse is the
  // only reachable view. Programmatic requests for upload snap back to browse.
  if (view !== 'browse') view = 'browse';
  browseEl.hidden = view !== 'browse';
  uploadEl.hidden = view !== 'upload';
  lightboxEl.hidden = true;
  currentNote = null;
  updateCloseLabel();
}

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
    // If the user opened the combobox before the fetch resolved, fill it now.
    if (!comboboxPopup.hidden) renderCombobox();
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

// Case-insensitive AND check: does the note carry every tag in the set?
function noteHasTags(n, tags) {
  if (!tags.length) return true;
  const noteTags = (n.tags || []).map((t) => String(t).toLowerCase());
  const wanted = tags.map((t) => String(t).toLowerCase());
  return wanted.every((t) => noteTags.includes(t));
}

// Free-text query match against title/OCR/doc/tags/entities.
function noteMatchesText(n, q) {
  if (!q) return true;
  const hay = [
    activeTitle(n), noteTopic(n), n.document, (activeOcr(n) || ''),
    (n.tags || []).join(' '), (n.entities || []).join(' '),
  ].join(' ').toLowerCase();
  return hay.includes(q);
}

function filteredNotes() {
  const q = filterQ.trim().toLowerCase();
  const list = notes.filter((n) => noteHasTags(n, [...activeTags]) && noteMatchesText(n, q));
  // Sort by `created` date (falling back to `updated` when it is missing),
  // direction driven by the sort toggle: newest first by default, oldest first
  // when toggled. `created`/`updated` are ISO-ish `YYYY-MM-DD` strings, which
  // compare correctly lexicographically. Missing dates sort last; the note id
  // breaks ties stably.
  const dateKey = (n) => {
    const d = (n.created && /^\d{4}-\d{2}-\d{2}/.test(n.created)) ? n.created : (n.updated || '');
    return d;
  };
  return list.sort((a, b) => {
    // Starred notes float to the top regardless of the date-toggle direction,
    // mirroring the reader/registry behavior for starred articles & tasks.
    const starDiff = (b.starred ? 1 : 0) - (a.starred ? 1 : 0);
    if (starDiff) return starDiff;
    const ad = dateKey(a);
    const bd = dateKey(b);
    if (ad !== bd) {
      // Equal dates → newest-first tiebreak is irrelevant; keep stable per direction.
      if (ad === '' || bd === '') return ad === '' ? 1 : -1; // missing dates last
      return sortDesc ? (ad < bd ? 1 : -1) : (ad < bd ? -1 : 1);
    }
    return (b.id || '').localeCompare(a.id || '');
  });
}

// Reflect the current sort state on the sort-toggle button: highlight whichever
// chevron matches the active direction and localize its tooltip.
function renderSortButton() {
  if (!sortBtn) return;
  sortBtn.classList.toggle('sort-asc', !sortDesc);
  sortBtn.classList.toggle('sort-desc', sortDesc);
  const tip = sortDesc ? t('sortDesc') : t('sortAsc');
  sortBtn.title = tip;
  sortBtn.setAttribute('aria-label', tip);
}

// Flip the gallery sort between updated-date descending and ascending.
function toggleSort() {
  sortDesc = !sortDesc;
  renderSortButton();
  renderGallery();
}
if (sortBtn) sortBtn.addEventListener('click', toggleSort);
renderSortButton(); // paint the default icon/tooltip once all refs/state exist

// Whether any filter is active: a free-text query and/or selected tag chips.
function isFiltering() {
  return !!filterQ.trim() || activeTags.size > 0;
}

function renderGallery() {
  // Show the clear-× (in place of the caret) whenever a filter/search is active.
  notesCombobox.classList.toggle('filtering', isFiltering());
  renderTagChips();
  const list = filteredNotes();
  if (apiDown) {
    galleryEl.classList.add('centered');
    galleryEl.innerHTML = '';
    emptyEl.hidden = false;
    emptyEl.textContent = t('galleryApiDown');
    return;
  }
  if (loading) {
    galleryEl.classList.add('centered');
    galleryEl.innerHTML = `<div class="notes-loading"><span class="spinner"></span><span>${esc(t('galleryLoading'))}</span></div>`;
    emptyEl.hidden = true;
    return;
  }
  if (!list.length) {
    galleryEl.classList.add('centered');
    galleryEl.innerHTML = '';
    emptyEl.hidden = false;
    emptyEl.textContent = notes.length
      ? t('galleryNoMatch')
      : t('galleryEmpty');
    return;
  }
  emptyEl.hidden = true;
  galleryEl.classList.remove('centered');
  galleryEl.innerHTML = list.map(cardHTML).join('');
  galleryEl.querySelectorAll('.notes-card').forEach((card) => {
    const id = card.dataset.id;
    // A click on a tag badge toggles that tag as a gallery filter; any other
    // click opens the note's lightbox.
    card.addEventListener('click', (e) => {
      const badge = e.target.closest('.notes-badge.tag-filter');
      if (badge && badge.dataset.tag) { toggleTag(badge.dataset.tag); return; }
      openLightbox(findNote(id));
    });
    const note = findNote(id);
    const first = note && (note.pages || [])[0];
    const img = card.querySelector('.notes-card-thumb');
    if (note && first && img) {
      bindImageFallback(img, note, first.page, true);
    }
  });
}

// ------------------------------------------------------------
// Gallery uses a plain CSS grid (see #notes-gallery in three-graph.css):
// cards are laid out in aligned rows/columns and are never re-packed
// vertically, so no JS layout balancing is required.
// ------------------------------------------------------------

function findNote(id) {
  return notes.find((n) => n.id === id) || currentNote;
}

function cardHTML(n) {
  const first = (n.pages || [])[0];
  const img = first
    ? `<img class="notes-card-thumb" src="${esc(imageUrl(n, first.page, true))}" alt="${esc(activeTitle(n))}" loading="lazy" decoding="async">`
    : '';
  const topic = tagLabel(noteTopic(n)).toUpperCase();
  const star = `<span class="notes-star ${n.starred ? 'on' : 'off'}" title="${n.starred ? esc(t('starred')) : ''}">${n.starred ? '★' : '☆'}</span>`;
  const tags = (n.tags || []).map((tag) =>
    `<span class="notes-badge topic tag-filter" data-tag="${esc(tag)}" title="${esc(t('filterByTagPrefix') + tagLabel(tag))}">${esc(tagLabel(tag))}</span>`).join('');
  const snip = (activeOcr(n) || '').replace(/--- Page \d+ ---\s*/g, ' ').slice(0, 800);
  const doc = n.document ? `<div class="notes-doc">${esc(n.document)}</div>` : '';
  const meta = (tags || doc)
    ? `<div class="context">
        ${tags ? `<div class="notes-card-meta">${tags}</div>` : ''}
        ${doc}
      </div>`
    : '';
  const monthYear = noteMonthYear(n);
  return `<div class="notes-card" data-id="${esc(n.id)}" title="${esc(activeTitle(n))}">
    <div class="img-wrap">${img}</div>
    <div class="notes-card-body">
      <div class="fig-label"><span class="fig-label-text">${star}${esc(`Note · ${topic}`)}</span>${monthYear ? `<span class="fig-label-date">${esc(monthYear)}</span>` : ''}</div>
      <h3 class="notes-card-title">${esc(activeTitle(n))}</h3>
      ${snip ? `<p class="caption notes-ocr-snip">${esc(snip)}</p>` : ''}
      ${meta}
    </div>
  </div>`;
}

// ------------------------------------------------------------
// Filters
// ------------------------------------------------------------
searchInput.addEventListener('focus', () => {
  renderCombobox();
  comboboxPopup.hidden = false;
  searchInput.setAttribute('aria-expanded', 'true');
});
searchInput.addEventListener('input', () => {
  filterQ = searchInput.value;
  renderGallery();
  renderCombobox();
});
// Drop the active filter/search and restore the full gallery. Stops the click
// from also toggling the dropdown via the field's cursor:text handler.
notesSearchClear.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  searchInput.value = '';
  filterQ = '';
  activeTags.clear();
  renderTagChips();
  renderGallery();
  searchInput.focus();   // refocus the field; focus() reopens the dropdown...
  closeCombobox();       // ...so close it again for a clean cleared state
});
searchInput.addEventListener('keydown', (e) => {
  if (!comboboxPopup.hidden && comboboxItems.length) {
    if (e.key === 'ArrowDown') { e.preventDefault(); comboboxIdx = (comboboxIdx + 1) % comboboxItems.length; highlightCombobox(); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); comboboxIdx = (comboboxIdx - 1 + comboboxItems.length) % comboboxItems.length; highlightCombobox(); return; }
    if (e.key === 'Enter') { e.preventDefault(); comboboxItems[Math.max(0, comboboxIdx)].click(); return; }
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeCombobox(); return; }
  }
});

// ------------------------------------------------------------
// Search + document combobox
// ------------------------------------------------------------
let comboboxItems = [];
let comboboxIdx = -1;

// Notes matching the current query (title/OCR/tags/document).
function searchMatches() {
  const q = filterQ.trim().toLowerCase();
  if (!q) return [];
  return notes.filter((n) => {
    const hay = [
      activeTitle(n), (activeOcr(n) || ''), n.document,
      (n.tags || []).join(' '), (n.entities || []).join(' '),
    ].join(' ').toLowerCase();
    return hay.includes(q);
  }).slice(0, 12);
}

// Faceted count for a candidate tag in the dropdown: how many notes match the
// current filters (free-text query + every selected tag) AND also carry this
// tag. This is exactly what the gallery would show if the user added it, so
// the numbers always stay consistent with the result set.
function countWithTag(tag) {
  const q = filterQ.trim().toLowerCase();
  return notes.filter((n) =>
    noteHasTags(n, [...activeTags, tag]) && noteMatchesText(n, q)).length;
}

// Distinct tag labels across every note, most-referenced first, so the
// empty-query dropdown surfaces the most useful suggestions up front.
function distinctTags() {
  const counts = new Map();
  for (const n of notes) {
    const seen = new Set();
    for (const tg of n.tags || []) {
      const key = String(tg).trim();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]); // [[label, count], ...] most-referenced first
}

// Own the dropdown with tag suggestions up front, then every note's image
// title when empty, all narrowed to matches while typing.
function renderCombobox() {
  const q = filterQ.trim().toLowerCase();
  const cap = q ? 12 : 100; // keep the empty-query dropdown from ballooning
  const tagCounts = q
    ? distinctTags().filter(([t]) =>
        t.toLowerCase().includes(q)
        || (tagLabel(t) || '').toLowerCase().includes(q)).slice(0, cap)
    : distinctTags().slice(0, cap);
  const matches = q ? searchMatches() : notes;
  const parts = [];
  if (tagCounts.length) {
    parts.push(`<div class="notes-section-label">${esc(t('tags'))}</div>`);
    // Dynamic faceted counts: each number predicts how many notes that tag
    // would yield *in addition to* the current text query + selected tags,
    // so the dropdown always matches what the gallery shows.
    parts.push(tagCounts.map(([t]) => tagItemHTML(t, countWithTag(t))).join(''));
  }
  if (matches.length) {
    parts.push(`<div class="notes-section-label">${esc(t('sectionNotes'))}</div>`);
    parts.push(matches.map((n) => noteItemHTML(n)).join(''));
  } else if (!tagCounts.length) {
    parts.push(`<div class="notes-section-label">${esc(t('galleryNoMatch'))}</div>`);
  }
  // Sticky footer so the dropdown always has an explicit close affordance on
  // touch (tap-away deliberately does NOT open a card — see the outside-tap
  // handler above). No data-note/data-tag → stays out of arrow-key items.
  parts.push(`<button type="button" class="notes-popup-done" data-combobox-done>${esc(t('done'))}</button>`);
  comboboxPopup.innerHTML = parts.join('');
  comboboxItems = Array.from(comboboxPopup.querySelectorAll('[data-note], [data-tag]'));
  comboboxIdx = -1;
  comboboxPopup.querySelectorAll('[data-note]').forEach((b) =>
    b.addEventListener('click', () => openNoteFromCombobox(b.dataset.note)));
  comboboxPopup.querySelectorAll('[data-tag]').forEach((b) =>
    b.addEventListener('click', () => toggleTag(b.dataset.tag)));
  const doneBtn = comboboxPopup.querySelector('[data-combobox-done]');
  if (doneBtn) doneBtn.addEventListener('click', dismissCombobox);
}

function noteItemHTML(n) {
  return `<button type="button" class="notes-popup-item note" data-note="${esc(n.id)}" role="option">
    <span class="popup-topic">${esc(activeTitle(n))}</span>
    <span class="popup-sub">${esc(noteTopic(n))}</span>
  </button>`;
}
function tagItemHTML(tag, count) {
  const sub = count != null ? `(${count})` : esc(t('tags'));
  const selected = activeTags.has(tag) ? ' selected' : '';
  // Unselected tags that would yield zero notes with the current filter are
  // dimmed (still toggleable) so users don't chase dead-end combinations.
  const zero = !selected && count === 0 ? ' zero' : '';
  const check = activeTags.has(tag) ? '<span class="popup-check" aria-hidden="true">✓</span>' : '';
  return `<button type="button" class="notes-popup-item${selected}${zero}" data-tag="${esc(tag)}" role="option">
    ${check}
    <span class="popup-topic">${esc(tagLabel(tag))}</span>
    <span class="popup-sub">${sub}</span>
  </button>`;
}

function highlightCombobox() {
  comboboxItems.forEach((b, i) => b.classList.toggle('active', i === comboboxIdx));
}

function openNoteFromCombobox(id) {
  const n = findNote(id);
  if (!n) return;
  dismissCombobox();   // close the list + drop focus so the keyboard collapses
  searchInput.value = activeTitle(n);
  filterQ = activeTitle(n);
  renderGallery();
  openLightbox(n);
}

// A tag suggestion toggles it in the multiselect filter (adds/removes from
// `activeTags`) and re-renders the gallery + chips + dropdown state.
function toggleTag(tag) {
  if (activeTags.has(tag)) activeTags.delete(tag);
  else activeTags.add(tag);
  renderTagChips();
  renderGallery();
  renderCombobox();
}

// Render the selected-tag chips inside the combobox field, ahead of the search
// input. Each chip shows its tag with an inline × to drop just that tag.
function renderTagChips() {
  fieldsEl.querySelectorAll('.notes-tag-chip').forEach((el) => el.remove());
  const insertBefore = searchInput;
  for (const tag of activeTags) {
    const chip = document.createElement('span');
    chip.className = 'notes-tag-chip';
    chip.textContent = tagLabel(tag);
    chip.title = tag;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'notes-chip-remove';
    remove.setAttribute('aria-label', t('removeTagFilter'));
    remove.title = t('removeTagFilter');
    remove.textContent = '×';
    remove.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleTag(tag);
    });
    chip.appendChild(remove);
    fieldsEl.insertBefore(chip, insertBefore);
  }
}

function closeCombobox() {
  comboboxPopup.hidden = true;
  comboboxPopup.innerHTML = '';
  comboboxItems = [];
  comboboxIdx = -1;
  searchInput.setAttribute('aria-expanded', 'false');
}

// Fully dismiss the search dropdown: close the popup AND drop focus from the
// input so the mobile keyboard collapses. Used by the Done button and by the
// outside-tap dismissal (Escape alone would close the list but leave the
// keyboard floating over the gallery).
function dismissCombobox() {
  closeCombobox();
  searchInput.blur();
}

// Clicking anywhere outside the combobox closes its dropdown. On touch, that
// same pointerdown would then fire a click on the gallery card beneath,
// accidentally opening it — so swallow the click that follows a dismissal tap,
// but only when it lands on a card (deliberate taps like the lang toggle or
// the panel close still work normally).
let suppressOutsideTap = false;
let tapOrigin = null;   // { x, y, id } of the dismissal pointerdown

document.addEventListener('pointerdown', (e) => {
  // A fresh pointerdown while the popup is already closed clears any stale
  // flag from a dismissal gesture that never produced a click (defensive).
  if (comboboxPopup.hidden) { suppressOutsideTap = false; return; }
  if (e.target.closest('.notes-combobox')) return;
  dismissCombobox();
  // A touch/pen tap-away is frequently a dismissal gesture — swallow its
  // click so it can't accidentally open a card. Mouse clicks are deliberate,
  // so they can open the card in the same click after the dropdown closes.
  if (e.pointerType !== 'mouse') {
    suppressOutsideTap = true;
    tapOrigin = { x: e.clientX, y: e.clientY, id: e.pointerId };
  }
}, true);

// If the finger travelled, it was a scroll/drag, not a tap — nothing to swallow.
document.addEventListener('pointerup', (e) => {
  if (!suppressOutsideTap || !tapOrigin || e.pointerId !== tapOrigin.id) return;
  if (Math.hypot(e.clientX - tapOrigin.x, e.clientY - tapOrigin.y) > 10) {
    suppressOutsideTap = false;
    tapOrigin = null;
  }
}, true);

document.addEventListener('pointercancel', () => {
  suppressOutsideTap = false;
  tapOrigin = null;
});

document.addEventListener('click', (e) => {
  if (!suppressOutsideTap) return;
  suppressOutsideTap = false;
  tapOrigin = null;
  if (e.target.closest('.notes-card')) {
    e.stopPropagation();
    e.preventDefault();
  }
}, true);

// ------------------------------------------------------------
// Lightbox
// ------------------------------------------------------------
function openLightbox(note) {
  pointers.clear(); pinch = null;
  currentNote = note;
  currentPage = (note.pages && note.pages[0] && note.pages[0].page) || 1;
  browseEl.hidden = true;
  uploadEl.hidden = true;
  lightboxEl.hidden = false;
  updateCloseLabel();
  setViewMode(false);
  renderLightbox();
  syncNotesHash();
}
lbBack.addEventListener('click', goBackToGallery);

function goBackToGallery() {
  pointers.clear(); pinch = null;
  lightboxEl.hidden = true;
  browseEl.hidden = false;
  uploadEl.hidden = true;
  currentNote = null;
  updateCloseLabel();
  setViewMode(false);
  updatePromptAvailability();
  renderGallery();
  syncNotesHash();
}

// Toggle the fullscreen image view (side details hidden, image fills the panel).
// The floating "Full" button over the image toggles this; the overlay ←/→
// arrows keep navigating next/previous image while in full view.
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
  const star = n.starred ? `<span class="notes-star on" title="${esc(t('starred'))}">★</span>` : '';
  lbTitle.innerHTML = `${star}${esc(activeTitle(n))}`;
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
    lbImg.dataset.ghFallback = '';
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
  // The overlay ←/→ arrows and the top-bar Previous/Next all step through the
  // gallery one image at a time: within a multi-page note that moves
  // page-to-page; past its last page it hops to the next/previous note. All
  // four are disabled only at the very first / very last image of the gallery.
  const entries = imageEntries();
  const idx = currentImageIndex();
  const atStart = !entries.length || idx <= 0;
  const atEnd = !entries.length || idx < 0 || idx >= entries.length - 1;
  lbPrev.disabled = atStart;
  lbNext.disabled = atEnd;
  lbTopPrev.disabled = atStart;
  lbTopNext.disabled = atEnd;
  renderPagesStrip();
}

// The bottom filmstrip shows every image in the current (filtered) gallery —
// one thumbnail per note (and per page for multi-page notes) — highlights the
// one being viewed, and clicking any thumbnail jumps straight to it.
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
  lbPages.querySelectorAll('button').forEach((b) => {
    b.addEventListener('click', () => goToImage(parseInt(b.dataset.idx, 10)));
    const e = entries[parseInt(b.dataset.idx, 10)];
    const img = b.querySelector('img');
    if (e && img) bindImageFallback(img, e.note, e.page, true);
  });
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
// Gallery image index (filmstrip): flat, gallery-ordered list of { note, page }
// for every image. The filmstrip thumbnails and all four navigation arrows
// (overlay ←/→ + top-bar Previous/Next) drive navigation through this list.
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

// Step to the previous image in the current (filtered) gallery. `goToImage`
// crosses note boundaries as needed: single-page notes step note-to-note, while
// multi-page notes first step page-to-page within the open note.
function goPrevImage() {
  const idx = currentImageIndex();
  if (idx > 0) goToImage(idx - 1);
}
function goNextImage() {
  const entries = imageEntries();
  const idx = currentImageIndex();
  if (idx >= 0 && idx < entries.length - 1) goToImage(idx + 1);
}
// The overlay ←/→ arrows and the top-bar Previous/Next are equivalent — they
// both navigate next/previous image. The disabled states are managed in setPage.
lbPrev.addEventListener('click', goPrevImage);
lbNext.addEventListener('click', goNextImage);
lbTopPrev.addEventListener('click', goPrevImage);
lbTopNext.addEventListener('click', goNextImage);
// Arrow keys navigate the same way while the lightbox is open (ignored while
// typing in a metadata field). They respect the button disabled state so the
// very first/last image stays non-navigable.
document.addEventListener('keydown', (e) => {
  if (lightboxEl.hidden) return;
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
  if (e.key === 'ArrowLeft') { if (lbPrev && !lbPrev.disabled) goPrevImage(); e.preventDefault(); }
  else if (e.key === 'ArrowRight') { if (lbNext && !lbNext.disabled) goNextImage(); e.preventDefault(); }
});

// ------------------------------------------------------------
// Zoom / pan
// ------------------------------------------------------------
// Apply the current zoom/pan state to the stage. Rendering is always instant:
// the on-image zoom controls are gone, so every interaction (wheel, drag, pinch)
// must track the pointer 1:1 with no transition lag.
function updateZoom() {
  lbZoomable.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
}

// On-screen size of the fitted (natural) image inside the current stage.
function fitScale() {
  if (!naturalW || !naturalH) return 0;
  const rect = lbImgwrap.getBoundingClientRect();
  const w = rect.width, h = rect.height;
  if (w <= 0 || h <= 0) return 0;
  return Math.min(w / naturalW, h / naturalH);
}

// Keep the zoomed image inside the viewport so the user can never "lose" it by
// panning it off-screen. Because at zoom 1 the image always fits the stage,
// clamping also forces the pan back to center — which clears any leftover
// offset from a previous zoom-out.
function clampPan() {
  const rect = lbImgwrap.getBoundingClientRect();
  const w = rect.width, h = rect.height;
  if (w <= 0 || h <= 0) return;
  const s = fitScale();
  if (!s) return;
  const imgW = naturalW * s * zoom;
  const imgH = naturalH * s * zoom;
  const maxX = Math.max(0, (imgW - w) / 2);
  const maxY = Math.max(0, (imgH - h) / 2);
  panX = Math.max(-maxX, Math.min(maxX, panX));
  panY = Math.max(-maxY, Math.min(maxY, panY));
}

// Apply one zoom step of `factor`, keeping the wrapper-space point under the
// cursor anchored so the area you are looking at stays put while you zoom — no
// drift. Driven by the wheel and pinch now that the on-image buttons are gone.
function zoomFocal(factor, clientX, clientY) {
  const old = zoom;
  const next = Math.min(6, Math.max(1, old * factor));
  const rect = lbImgwrap.getBoundingClientRect();
  if (next !== old && rect.width > 0 && rect.height > 0) {
    const ox = rect.left + rect.width / 2;
    const oy = rect.top + rect.height / 2;
    const k = next / old;
    panX = (clientX - ox) - (clientX - ox - panX) * k;
    panY = (clientY - oy) - (clientY - oy - panY) * k;
  }
  zoom = next;
  clampPan();
  updateZoom();
}

// Wheel zooms toward the cursor and stays anchored there.
lbImgwrap.addEventListener('wheel', (e) => {
  e.preventDefault();
  zoomFocal(e.deltaY > 0 ? 0.85 : 1.18, e.clientX, e.clientY);
}, { passive: false });

// Pointer bookkeeping for pan + two-finger pinch. Kept in a Map keyed by
// pointerId so multiple pointers (pinch) can be tracked independently.
const pointers = new Map();
let pinch = null;

lbImgwrap.addEventListener('pointerdown', (e) => {
  // Clicks on the floating controls overlaid on the image (the Full button)
  // must pass through untouched: grabbing the pointer here would retarget the
  // subsequent click away from the button.
  if (e.target.closest('.notes-lb-zoom')) return;
  try { lbImgwrap.setPointerCapture(e.pointerId); } catch (_) { /* capture unsupported */ }
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (pointers.size === 2) {
    // A second finger turns the gesture into a pinch: cancel whatever the
    // first finger was doing (pan or draw) and start tracking the two points.
    panning = null;
    drawing = null;
    lbImgwrap.classList.remove('panning');
    const ps = [...pointers.values()];
    pinch = { x1: ps[0].x, y1: ps[0].y, x2: ps[1].x, y2: ps[1].y, zoom, panX, panY };
    return;
  }
  if (pointers.size > 1) return;

  if (annTool) { beginDraw(e); return; }
  if (zoom > 1) {
    panning = { startX: e.clientX, startY: e.clientY, px: panX, py: panY };
    lbImgwrap.classList.add('panning');
  }
  e.preventDefault();
});

function updatePinch() {
  const ps = [...pointers.values()];
  if (ps.length < 2) return;
  const [a, b] = ps;
  const dist = Math.hypot(a.x - b.x, a.y - b.y);
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const startDist = Math.hypot(pinch.x2 - pinch.x1, pinch.y2 - pinch.y1);
  const startMidX = (pinch.x1 + pinch.x2) / 2;
  const startMidY = (pinch.y1 + pinch.y2) / 2;

  zoom = Math.min(6, Math.max(1, pinch.zoom * (startDist > 0 ? dist / startDist : 1)));
  const rect = lbImgwrap.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    const ox = rect.left + rect.width / 2;
    const oy = rect.top + rect.height / 2;
    // Content point that sat under the fingers at pinch start…
    const cX = (startMidX - ox - pinch.panX) / pinch.zoom;
    const cY = (startMidY - oy - pinch.panY) / pinch.zoom;
    // …stays anchored under the fingers now (zooms about the moving midpoint,
    // which also lets the pinch pan two-dimensionally).
    panX = (midX - ox) - cX * zoom;
    panY = (midY - oy) - cY * zoom;
  }
  clampPan();
  updateZoom();
}

window.addEventListener('pointermove', (e) => {
  const p = pointers.get(e.pointerId);
  if (p) { p.x = e.clientX; p.y = e.clientY; }
  if (pinch) { updatePinch(); return; }
  if (panning) {
    panX = panning.px + (e.clientX - panning.startX);
    panY = panning.py + (e.clientY - panning.startY);
    clampPan();
    updateZoom();
  } else if (drawing) {
    updateDraw(e);
  }
});

function endNotePointer(e) {
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinch = null;
}
window.addEventListener('pointerup', endNotePointer);
window.addEventListener('pointercancel', endNotePointer);
window.addEventListener('lostpointercapture', endNotePointer);

window.addEventListener('pointerup', () => {
  if (panning) { panning = null; lbImgwrap.classList.remove('panning'); }
  if (drawing) finishDraw();
});

// Re-clamp the pan when the stage changes size (collapsing the side panel or
// resizing the window) so the note never silently ends up off-center/off-screen.
if (typeof ResizeObserver !== 'undefined') {
  const lbWrapResize = new ResizeObserver(() => {
    if (lightboxEl.hidden || !currentNote) return;
    clampPan();
    updateZoom();
  });
  lbWrapResize.observe(lbImgwrap);
}

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
  // Map against the image's on-screen box, not the wrapping stage. The wrapper
  // now fills the whole stage (the image is centered/letterboxed inside it), so
  // that rect would include margins and misplace annotations on portrait notes.
  const r = lbImg.getBoundingClientRect();
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
  if (!naturalW || !naturalH) { flashTranscriptStatus('Page image not ready yet.'); return; }
  const canvas = document.createElement('canvas');
  canvas.width = naturalW;
  canvas.height = naturalH;
  const ctx = canvas.getContext('2d');
  try {
    // Load the full-res page fresh with CORS so drawing it does not taint the
    // canvas (a cross-origin img drawn without CORS would block toDataURL).
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onerror = () => {
      // GitHub copy not reachable — fall back to the API for the export.
      img.onerror = null;
      img.src = apiImageUrl(n, currentPage, false);
    };
    img.src = imageUrl(n, currentPage, false);
    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });
    ctx.drawImage(img, 0, 0, naturalW, naturalH);
  } catch (err) {
    flashTranscriptStatus('Could not load the page image for export.');
    console.warn('annotated-image export: page load failed:', err);
    return;
  }
  drawAnnotationsToCanvas(ctx, naturalW, naturalH);
  const a = document.createElement('a');
  a.download = `${n.id}-p${currentPage}-annotated.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
  flashTranscriptStatus('Downloaded annotated page.');
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

// Returns the trimmed transcript when the note can be analyzed, or false.
function usableTranscript(note) {
  if (!note) return false;
  const text = (activeOcr(note) || '').trim();
  if (!text) return false;
  if (looksLikeOcrFailure(text)) return false;
  return text;
}

// Enable/disable the lightbox "→ Prompt" button based on whether the open note
// has a usable transcript.
function updatePromptAvailability() {
  const usable = usableTranscript(currentNote);
  const tip = usable
    ? t('sendPrompt')
    : currentNote
      ? t('noUsableTranscript')
      : t('openNoteToSend');
  if (lbSendPrompt) {
    lbSendPrompt.disabled = !usable;
    lbSendPrompt.title = tip;
  }
}

// Build the analysis prompt: instruction line + note metadata + OCR transcript.
function buildTranscriptPrompt(note) {
  const ocr = (activeOcr(note) || '').trim();
  // Merge tags + entities into one labeled list (deduped) so both travel to the
  // analysis agent as plain text.
  const combined = [...new Set([...(note.tags || []), ...(note.entities || []).map(String)])]
    .map((s) => String(s).trim()).filter(Boolean);
  const header = [
    'Analyze this handwritten note transcript and summarize the key insights, mechanisms, and biomedical entities it mentions.',
    `Note: ${activeTitle(note) || '(untitled)'}`,
    combined.length ? `Entities/tags: ${combined.join(', ')}` : '',
    note.document ? `Document: ${note.document}` : '',
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
// (the note's tags and entities are included as plain text) for review and send.
function sendTranscriptToPrompt() {
  // Capture the note before closeNotes() nulls the module-level currentNote.
  const note = currentNote;
  const text = usableTranscript(note);
  if (!text) {
    flashTranscriptStatus(t('noUsableTranscript'));
    return;
  }
  closeNotes();
  openPromptComposer(buildTranscriptPrompt(note));
}
lbSendPrompt.addEventListener('click', sendTranscriptToPrompt);
updatePromptAvailability();
// Apply the default UI language for the initial render WITHOUT pushing a URL
// hash entry. At module load this runs before graph.js reads the hash to
// restore a shared deep link (#notes&note=...); pushing the empty default
// state here would wipe that hash before restore runs.
state.suppressHashUpdate = true;
applyUiLang(uiLang);
state.suppressHashUpdate = false;

// ------------------------------------------------------------
// Tag chips
// ------------------------------------------------------------
function renderChips() {
  if (!currentNote) return;
  const tags = currentNote.tags || [];
  lbTags.innerHTML = tags.length
    ? tags.map((tag) => `<button type="button" class="notes-chip tag-chip" data-tag="${esc(tag)}" title="${esc(t('filterByTagPrefix'))}${esc(tagLabel(tag))}">${esc(tagLabel(tag))}</button>`).join('')
    : `<span class="notes-muted">${esc(t('none'))}</span>`;
  // Clicking a tag chip goes back to the gallery view with that tag applied
  // as a filter (same multiselect semantics as the gallery card badges).
  lbTags.querySelectorAll('.tag-chip[data-tag]').forEach((chip) => {
    chip.addEventListener('click', () => {
      if (!activeTags.has(chip.dataset.tag)) toggleTag(chip.dataset.tag);
      goBackToGallery();
    });
  });
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
//   &noteview=full  → open in fullscreen image view
// Called by graph.js's restoreFromHash; updateHash is suppressed during restore.
export async function restoreNotes(params) {
  if (!notesPanel.classList.contains('open')) openNotes();
  setView('browse');
  if (params && params.uilang && params.uilang !== 'en-US') {
    applyUiLang(params.uilang);
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
export { closeNotes };