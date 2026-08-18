// Notes panel — gallery + lightbox with OCR transcripts and persistent
// annotation overlays, deep links to the linked paper and graph entities.
// The upload screen (files / camera) is hidden for now. Sibling of the
// analysis (#chat) panel.

import { RAW_NODES, descByLabel, noteUrl, githubSourceUrl } from './data.js';
import { esc, renderMarkdown } from './markdown.js';
import { selectNode } from './interaction.js';
import { updateHash, parseHash } from './routing.js';
import { state } from './state.js';

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
const topicFilter = $('notes-topic-filter');
const galleryEl = $('notes-gallery');
const emptyEl = $('notes-empty');
const countEl = $('notes-count');

const drop = $('notes-drop');
const fileInput = $('notes-file');
const pickBtn = $('notes-pick');
const cameraBtn = $('notes-camera');
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
const lbEdit = $('notes-lb-edit');
const lbGraph = $('notes-lb-graph');
const lbDoc = $('notes-lb-doc');
const lbImg = $('notes-lb-img');
const lbSvg = $('notes-lb-svg');
const lbZoomable = $('notes-lb-zoomable');
const lbImgwrap = $('notes-lb-imgwrap');
const lbPrev = $('notes-lb-prev');
const lbNext = $('notes-lb-next');
const lbPages = $('notes-lb-pages');
const lbOcr = $('notes-lb-ocr');
const lbTranscribe = $('notes-lb-transcribe');
const lbEntities = $('notes-lb-entities');
const lbTags = $('notes-lb-tags');
const annSave = $('notes-lb-ann-save');
const annClear = $('notes-lb-ann-clear');
const annColors = $('notes-ann-colors');
const zoomIn = $('notes-lb-zoomin');
const zoomOut = $('notes-lb-zoomout');
const fitBtn = $('notes-lb-fit');

// Camera
const cameraOverlay = $('camera-overlay');
const cameraVideo = $('camera-video');
const camCapture = $('camera-capture');
const camClose = $('camera-close');

// ------------------------------------------------------------
// State
// ------------------------------------------------------------
let notes = [];
let documents = [];
let filterQ = '';
let filterTopic = '';
let loaded = false;
let loading = false;
let apiDown = false;
let apiError = '';
let loadPromise = null;

let currentNote = null;      // note object being viewed in the lightbox
let currentPage = 1;
let naturalW = 0, naturalH = 0;
let zoom = 1, panX = 0, panY = 0;
let annTool = null;          // circle | rect | arrow | label
let annColor = '#ffcc00';
let drawing = null;          // in-progress shape
let panning = null;
let editMode = false;
let viewMode = false;        // fullscreen image view (side details hidden)

let draftFiles = [];         // { file, thumb }
let cameraStream = null;
let statusTimer = null;

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
  notesPanel.classList.remove('open');
  notesBtn.classList.remove('open');
  stopCamera();
  setLightbox(null);
  syncNotesKeyboard();
  syncNotesHash();
}

// Push the current notes-panel view into the shared state so the URL
// hash reflects it (`#notes` = gallery, `&note=<id>` = lightbox, plus page /
// fullscreen flags) and the URL can be shared / restored.
function syncNotesHash(pushState = true) {
  const viewingNote = currentNote && !lightboxEl.hidden;
  state.notesOpen = notesPanel.classList.contains('open');
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
  if (tab) { setView(tab.dataset.view); syncNotesHash(); }
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (cameraOverlay.hasAttribute('hidden')) {
    if (!lightboxEl.hidden) { goBackToGallery(); return; }
    if (notesPanel.classList.contains('open')) closeNotes();
  } else {
    stopCamera();
  }
});

// ------------------------------------------------------------
// Index / gallery
// ------------------------------------------------------------
async function loadIndex() {
  loading = true;
  apiDown = false;
  apiError = '';
  renderGallery();
  try {
    const resp = await fetch(NOTES_API);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    notes = Array.isArray(data.notes) ? data.notes : [];
    documents = Array.isArray(data.documents) ? data.documents : [];
    populatePickers();
    // Mark the index as loaded BEFORE rendering so the post-fetch gallery
    // render actually draws the cards (previously it bailed early, showing
    // the placeholder until a later filter re-render).
    loaded = true;
    renderGallery();
  } catch (err) {
    apiDown = true;
    apiError = (err && err.message) || 'Unknown error';
    notes = [];
    documents = [];
    renderGallery();
    console.warn('notes index failed:', err);
  } finally {
    loading = false;
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
  // Topic filter
  const topics = [...new Set(notes.map(noteTopic))].sort();
  topicFilter.innerHTML = '<option value="">All topics / 全部主題</option>' +
    topics.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join('');
  topicFilter.value = filterTopic;

  // Upload → document picker
  docField.innerHTML = '<option value="">None</option>' +
    documents.map((d) => `<option value="${esc(d.filename)}">${esc(d.filename)}</option>`).join('');

  // Entity autocomplete (graph node labels)
  const labels = [...new Set(RAW_NODES.map((n) => n.label))].slice(0, 4000);
  entityList.innerHTML = labels.map((l) => `<option value="${esc(l)}"></option>`).join('');

  // Search placeholder hints from the first card
  searchInput.placeholder = notes.length
    ? 'Search notes, OCR, entities, tags / 搜尋筆記...'
    : 'Search notes, OCR, entities, tags / 搜尋筆記...';
}

function filteredNotes() {
  const q = filterQ.trim().toLowerCase();
  return notes.filter((n) => {
    if (filterTopic && noteTopic(n) !== filterTopic) return false;
    if (!q) return true;
    const hay = [
      n.title, n.topic, n.document, (n.ocr || ''),
      (n.entities || []).join(' '),
      (n.tags || []).join(' '),
    ].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

function renderGallery() {
  const list = filteredNotes();
  countEl.textContent = apiDown ? '—' : `${list.length} / ${notes.length}`;
  if (apiDown) {
    galleryEl.innerHTML = apiErrorBanner();
    emptyEl.hidden = true;
    const retry = $('notes-retry');
    if (retry) retry.addEventListener('click', () => loadIndex());
    return;
  }
  if (!loaded) {
    galleryEl.innerHTML = '<div class="notes-empty">Notes live on the API server — open the <b>Handwritten Notes</b> panel with the backend running to see your uploads.</div>';
    emptyEl.hidden = true;
    return;
  }
  if (!list.length) {
    galleryEl.innerHTML = '';
    emptyEl.hidden = false;
    emptyEl.textContent = notes.length
      ? 'No notes match your filters.'
      : 'No handwritten notes yet.';
    return;
  }
  emptyEl.hidden = true;
  galleryEl.innerHTML = list.map(cardHTML).join('');
  galleryEl.querySelectorAll('.notes-card').forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener('click', () => openLightbox(findNote(id)));
  });
}

// A fetch that never returned (TypeError: Failed to fetch) usually means the
// API is unreachable or the browser blocked the cross-origin call. Give the
// user the actionable detail instead of a silent empty state.
function apiErrorBanner() {
  const isLocal = location.protocol === 'file:' ||
    ['localhost', '127.0.0.1', '::1'].includes(location.hostname);
  const devHint = isLocal
    ? `<p class="notes-muted">Running locally? This page auto-points at the dev API (<code>http://127.0.0.1:8000/v1</code>) — start it with <code>./deploy/dev.sh</code> and serve <b>web/</b> over <code>http://localhost</code>.</p>`
    : '';
  const offline = navigator.onLine === false
    ? '<p class="notes-muted">You appear to be offline.</p>' : '';
  return `<div class="notes-api-error">
    <b>Handwritten Notes API unreachable</b>
    <p class="notes-muted">Could not load notes from <code>${esc(NOTES_API)}</code> (${esc(apiError)}).</p>
    ${offline}
    ${devHint}
    <button id="notes-retry" type="button" class="notes-retry">Retry</button>
  </div>`;
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
    ? `<img class="notes-card-thumb" src="${esc(imageUrl(n, first.page, true))}" alt="${esc(n.title)}" loading="lazy">`
    : '<div class="notes-card-thumb"></div>';
  const doc = n.document
    ? `<span class="notes-badge" title="${esc(n.document)}">${esc(shortDoc(n.document))}</span>` : '';
  const entities = (n.entities || []).slice(0, 3).map((e) =>
    `<span class="notes-badge">${esc(e)}</span>`).join('');
  const tags = (n.tags || []).slice(0, 3).map((t) =>
    `<span class="notes-badge topic">#${esc(t)}</span>`).join('');
  const ocrBadge = n.has_ocr ? '<span class="notes-badge ocr">OCR</span>' : '';
  const draftBadge = n.draft ? '<span class="notes-badge draft">draft</span>' : '';
  const snip = (n.ocr || '').replace(/--- Page \d+ ---\s*/g, ' ').slice(0, 220);
  return `<div class="notes-card" data-id="${esc(n.id)}" title="${esc(n.title)}">
    ${thumb}
    <div class="notes-card-body">
      <div class="notes-card-title">${esc(n.title)}</div>
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
});
topicFilter.addEventListener('change', () => {
  filterTopic = topicFilter.value;
  renderGallery();
});

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
  renderGallery();
  syncNotesHash();
}

// Toggle the fullscreen image view (side details hidden, image fills the panel).
function setViewMode(on) {
  viewMode = on;
  lbBody.classList.toggle('view-mode', viewMode);
  lbView.textContent = viewMode ? '⛶ Details' : '⛶ View';
  lbView.title = viewMode ? 'Show details panel / 顯示詳情' : 'Fullscreen view of the note / 全螢幕檢視';
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
  lbTitle.textContent = n.title;
  lbTitle.title = n.title;
  lbDoc.disabled = !n.document;
  const ocrText = (n.ocr || '').trim();
  const ocrBroken = looksLikeOcrFailure(ocrText);
  // OCR is temporarily disabled until the wiki-util model is vision-capable.
  lbTranscribe.disabled = true;
  lbTranscribe.title = 'OCR temporarily unavailable';
  lbTranscribe.textContent = 'Transcribe';
  renderPagesStrip();
  setPage(currentPage);
  renderOcr();
  renderChips();
  renderEditMode(false);
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

function renderPagesStrip() {
  const pages = currentNote.pages || [];
  lbPages.innerHTML = pages.map((p) =>
    `<button class="${p.page === currentPage ? 'page-active' : ''}" data-page="${p.page}" title="Page ${p.page}">
      <img src="${esc(imageUrl(currentNote, p.page, true))}" alt="Page ${p.page}">
    </button>`).join('');
  lbPages.querySelectorAll('button').forEach((b) =>
    b.addEventListener('click', () => changePage(parseInt(b.dataset.page, 10))));
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
    const text = window.prompt('Label text:', '');
    if (text && text.trim()) addAnnotation({ type: 'label', x: d.start.x, y: d.start.y, label: text.trim() });
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

annSave.addEventListener('click', async () => {
  if (!currentNote) return;
  annSave.disabled = true;
  annSave.textContent = 'Saving…';
  try {
    const resp = await fetch(`${NOTES_API}/${encodeURIComponent(currentNote.id)}/annotations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ annotations: currentNote.annotations || [] }),
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    currentNote.annotations = data.annotations;
    syncGalleryNote(currentNote);
    setStatus('Annotations saved.', true);
  } catch (err) {
    setStatus('Failed to save annotations.', false);
    console.warn('annotations save failed:', err);
  } finally {
    annSave.disabled = false;
    annSave.textContent = 'Save annotations';
  }
});
annClear.addEventListener('click', () => {
  if (!currentNote) return;
  currentNote.annotations = (currentNote.annotations || []).filter((a) => a.page !== currentPage);
  renderAnnotations();
});

// ------------------------------------------------------------
// OCR transcript
// ------------------------------------------------------------
async function runTranscribe() {
  // OCR is temporarily disabled — the button stays inert.
  if (lbTranscribe.disabled) return;
  if (!currentNote || (currentNote.ocr || '').trim()) return;
  lbTranscribe.disabled = true;
  lbTranscribe.textContent = 'Transcribing…';
  lbOcr.classList.add('loading');
  lbOcr.textContent = 'Reading the handwriting…';
  try {
    const resp = await fetch(`${NOTES_API}/transcribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: currentNote.id }),
    });
    if (!resp.ok) {
      const detail = resp.status === 503 ? 'OCR service unavailable.' :
        (await resp.json().catch(() => ({}))).detail || `HTTP ${resp.status}`;
      throw new Error(detail);
    }
    const data = await resp.json();
    const text = (data.ocr || '').trim();
    if (looksLikeOcrFailure(text)) {
      lbOcr.textContent = 'The OCR model could not read this image (it may not support vision). Nothing was saved — switch the wiki-util model to one with vision and try again.';
      return; // do not store a refusal as a finished transcript
    }
    currentNote.ocr = text;
    currentNote.has_ocr = !!text;
    syncGalleryNote(currentNote);
    renderOcr();
  } catch (err) {
    lbOcr.textContent = `Transcription failed: ${err.message}`;
  } finally {
    lbTranscribe.disabled = true; // OCR temporarily disabled
    lbTranscribe.textContent = 'Transcribe';
    lbOcr.classList.remove('loading');
  }
}
lbTranscribe.addEventListener('click', runTranscribe);

function renderOcr() {
  const text = (currentNote && currentNote.ocr || '').trim();
  if (!text) {
    lbOcr.textContent = 'No transcript yet. Press Transcribe to read the handwriting once.';
    lbOcr.classList.remove('ocr-warn');
  } else if (looksLikeOcrFailure(text)) {
    lbOcr.textContent = 'The previous transcription failed — the OCR model could not read the image (it may not support vision). You can try again after the wiki-util model is vision-capable.';
    lbOcr.classList.add('ocr-warn');
  } else {
    lbOcr.textContent = text;
    lbOcr.classList.remove('ocr-warn');
  }
}

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
    : '<span class="notes-muted">none</span>';
  lbEntities.querySelectorAll('.notes-chip').forEach((c) =>
    c.addEventListener('click', (e) => {
      e.stopPropagation();
      openWikiModal(c.dataset.entity, e);
    }));
  lbTags.innerHTML = tags.length
    ? tags.map((t) => `<span class="notes-chip tag-chip">#${esc(t)}</span>`).join('')
    : '<span class="notes-muted">none</span>';
}

lbGraph.addEventListener('click', () => {
  if (!currentNote) return;
  const names = (currentNote.entities || []).map((e) => String(e).toLowerCase());
  let found = null;
  for (const node of RAW_NODES) {
    if (names.includes(node.label.toLowerCase())) { found = node; break; }
  }
  if (!found) {
    setStatus('No entities from this note exist in the graph.', false);
    return;
  }
  selectNode(found.id);
});

// ------------------------------------------------------------
// Metadata edit (lightbox)
// ------------------------------------------------------------
function renderEditMode(mode) {
  editMode = mode;
  lbEdit.textContent = mode ? 'Done' : 'Edit';
  if (!mode) { renderChips(); return; }
  lbEntities.innerHTML = `<input class="notes-edit-input" id="lb-entities-input" value="${esc((currentNote.entities || []).join(', '))}" list="notes-entity-list" placeholder="SIRT1, NAD+">`;
  lbTags.innerHTML = `<input class="notes-edit-input" id="lb-tags-input" value="${esc((currentNote.tags || []).join(', '))}" placeholder="aging, metabolism">`;
  const done = () => {
    const ents = tokens($('lb-entities-input').value);
    const tagsIn = tokens($('lb-tags-input').value).map((t) => t.toLowerCase().replace(/ /g, '-'));
    saveMetadata(ents, tagsIn);
  };
  $('lb-entities-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') done(); });
  $('lb-tags-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') done(); });
}
lbEdit.addEventListener('click', () => renderEditMode(!editMode));

async function saveMetadata(entities, tags) {
  lbEdit.disabled = true;
  try {
    const resp = await fetch(`${NOTES_API}/${encodeURIComponent(currentNote.id)}/metadata`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entities, tags }),
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const updated = await resp.json();
    Object.assign(currentNote, updated);
    syncGalleryNote(currentNote);
    renderEditMode(false);
    renderLightbox();
    setStatus('Metadata saved.', true);
  } catch (err) {
    renderEditMode(false);
    setStatus('Failed to save metadata.', false);
    console.warn('metadata save failed:', err);
  } finally {
    lbEdit.disabled = false;
  }
}

lbDoc.addEventListener('click', () => {
  if (!currentNote || !currentNote.document) return;
  const url = githubSourceUrl(currentNote.document);
  if (url) window.open(url, '_blank', 'noopener');
});

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
// Camera capture
// ------------------------------------------------------------
async function openCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setStatus('Camera not supported in this browser — use file upload.', false);
    return;
  }
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false,
    });
    cameraVideo.srcObject = cameraStream;
    cameraOverlay.hidden = false;
    if (notesPanel.classList.contains('open')) syncNotesKeyboard();
  } catch (err) {
    setStatus('Camera unavailable — use file upload instead.', false);
    console.warn('getUserMedia failed:', err);
  }
}
cameraBtn.addEventListener('click', openCamera);
camClose.addEventListener('click', stopCamera);
cameraOverlay.addEventListener('click', (e) => { if (e.target === cameraOverlay) stopCamera(); });

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((t) => t.stop());
    cameraStream = null;
  }
  cameraVideo.srcObject = null;
  cameraOverlay.hidden = true;
}

camCapture.addEventListener('click', () => {
  if (!cameraStream || !cameraVideo.videoWidth) return;
  const cv = document.createElement('canvas');
  cv.width = cameraVideo.videoWidth;
  cv.height = cameraVideo.videoHeight;
  cv.getContext('2d').drawImage(cameraVideo, 0, 0, cv.width, cv.height);
  cv.toBlob(async (blob) => {
    if (!blob) { setStatus('Could not capture the photo.', false); return; }
    const file = new File([blob], `camera-${Date.now()}.jpg`, { type: 'image/jpeg' });
    await addFiles([file]);
    stopCamera();
    setView('upload');
  }, 'image/jpeg', 0.85);
});

window.addEventListener('beforeunload', stopCamera);

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