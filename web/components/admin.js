// Admin panel — DB-backed content flags for the site's content registry.
//
// Curation state (starred / active) used to live in markdown frontmatter /
// static JSON; changing it meant a rebuild + deploy. This panel toggles rows
// in the Supabase content_flags table through the FastAPI adapter:
//   GET  /v1/flags  -> current flag overlay (public)
//   POST /v1/flags  -> batch upsert (super-admin; the API's auth_gate enforces
//                      it — a signed-in non-admin just gets 403 here)
//
// The panel's lists come from already-public sources, so no admin read API
// is needed:
//   articles / tasks   -> data/articles.json, data/tasks.json (static site)
//   image notes + docs -> GET /v1/notes (notes[] + documents[])
//   wiki notes         -> data/nodes.json (id = norm entity id)
//
// Static/frontmatter flags remain the offline fallback: until a flag exists
// in the DB the UI falls back to the baked-in value, and if the API is
// unreachable the panel simply reports it.

import { esc } from './markdown.js';
import { authHeaders, isSignedIn, onSessionChange, promptSignIn } from './auth.js';
import { t } from './i18n.js';

const API_BASE = (import.meta.env.VITE_API_BASE || window.GRAPH_API_BASE).replace(/\/$/, '');
const FLAGS_API = `${API_BASE}/flags`;
const NOTES_API = `${API_BASE}/notes`;
const DATA_BASE = import.meta.env.BASE_URL + 'data/';

const TABS = [
  { type: 'article', label: 'Articles / 文章' },
  { type: 'task_output', label: 'Tasks / 任務' },
  { type: 'wiki_note', label: 'Wiki / 節點' },
  { type: 'document', label: 'Docs / 文獻' },
  { type: 'image_note', label: 'Notes / 筆記' },
];

// Eye icon used for the Active toggle on each row.
const EYE = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
const EYE_OFF = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

const panel = document.getElementById('admin-panel');
const btn = document.getElementById('btn-admin');

// Kill-switch: content_flags isn't live yet (see deploy/supabase/
// content_flags.sql + scripts/sync/content_to_db.py). Flip to true once the SQL
// has run and the backfill is seeded to surface the admin panel.
const ADMIN_ENABLED = false;
const closeBtn = document.getElementById('admin-close');
const tabsEl = document.getElementById('admin-tabs');
const searchEl = document.getElementById('admin-search');
const listEl = document.getElementById('admin-list');
const emptyEl = document.getElementById('admin-empty');
const errorEl = document.getElementById('admin-error');
const statusEl = document.getElementById('admin-status');

let activeTab = 'article';
let flags = {};              // { <type>: { <id>: { starred?, active? } } } from the DB
let items = {};              // { <type>: [{id, title, meta, staticStarred, staticActive}] }
let loaded = new Set();      // tabs whose items have been fetched
let loadErrors = new Set();  // tabs whose source fetch failed
let loadToken = 0;           // guards against out-of-order async loads

// ---------------------------------------------------------------------
// Visibility: the toolbar button appears once a session exists.
// ---------------------------------------------------------------------
onSessionChange((signedIn) => {
  btn.hidden = !signedIn || !ADMIN_ENABLED;
  if (!signedIn || !ADMIN_ENABLED) closeAdmin();
});

// ---------------------------------------------------------------------
// Panel open / close (mirrors the notes panel's single-overlay rule)
// ---------------------------------------------------------------------
function openAdmin() {
  panel.classList.add('open');
  btn.classList.add('open');
  errorEl.hidden = true;
  ensureLoaded(activeTab);
}

function closeAdmin() {
  panel.classList.remove('open');
  btn.classList.remove('open');
}

btn.addEventListener('click', () => {
  if (panel.classList.contains('open')) { closeAdmin(); return; }
  if (!isSignedIn()) { promptSignIn(); return; }
  // Only one overlay at a time: close the notes + analysis panels.
  const notesOpen = document.getElementById('notes-panel')?.classList.contains('open');
  if (notesOpen) document.getElementById('notes-close')?.click();
  const analysisOpen = document.getElementById('analysis-panel')?.classList.contains('open');
  if (analysisOpen) document.getElementById('analysis-close')?.click();
  openAdmin();
});

closeBtn.addEventListener('click', closeAdmin);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (panel.classList.contains('open')) closeAdmin();
});

// ---------------------------------------------------------------------
// Data loading
// ---------------------------------------------------------------------
async function fetchJson(url, opts) {
  const r = await fetch(url, opts);
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r.json();
}

async function loadFlags() {
  const data = await fetchJson(FLAGS_API);
  flags = data.flags || {};
}

// DB flag wins; an unset flag (or absent row) falls back to the static value
// baked into the site data at build time.
function flagOf(type, id, key, staticVal) {
  const f = flags[type] && flags[type][id];
  if (f && Object.prototype.hasOwnProperty.call(f, key)) return !!f[key];
  return staticVal;
}

function registerItems(type, rows) {
  items[type] = rows;
  loaded.add(type);
}

async function ensureLoaded(type) {
  if (loaded.has(type)) { render(); return; }
  const token = ++loadToken;
  statusEl.textContent = 'Loading… / 載入中…';
  try {
    // The flag overlay is shared across tabs; load it alongside the first.
    if (!loaded.size) await loadFlags();
  } catch (e) {
    showError(
      e.message.includes('503')
        ? 'Database not configured — flag editing unavailable. / 資料庫未設定，無法編輯旗標。'
        : `Could not load flags: ${e.message}`
    );
  }
  try {
    switch (type) {
      case 'article':
      case 'task_output': {
        const file = type === 'article' ? 'articles.json' : 'tasks.json';
        const data = await fetchJson(DATA_BASE + file);
        const rows = (type === 'article' ? data : data.tasks || [])
          .filter((a) => a.id && a.id !== 'articles-index' && a.id !== 'tasks-index')
          .map((a) => {
            const en = a.langs?.['en-US'] || {};
            /* Task flags are keyed by the markdown filename (same key the
               backfill script + tasks-index page use), articles by id. */
            const id = type === 'article'
              ? a.id
              : (en.filename || String(a.id).replace(/^task:/, '') + '.md');
            return {
              id,
              title: String(en.title || a.id),
              meta: en.created || '',
              staticStarred: a.starred === true,
              staticActive: a.active !== false,
            };
          });
        registerItems(type, rows);
        break;
      }
      case 'wiki_note': {
        const nodes = await fetchJson(DATA_BASE + 'nodes.json');
        registerItems(type, (Array.isArray(nodes) ? nodes : [])
          .filter((n) => n && n.id && n.label)
          .map((n) => ({
            id: n.id,
            title: n.label,
            meta: n.file_type || n.community_name || '',
            staticStarred: false,
            staticActive: true,
          })));
        break;
      }
      case 'document':
      case 'image_note': {
        const data = await fetchJson(NOTES_API);
        if (type === 'image_note') {
          registerItems(type, (data.notes || []).map((n) => ({
            id: n.id,
            title: n.title || n.id,
            meta: [n.document, n.created].filter(Boolean).join(' · '),
            staticStarred: n.starred === true,
            staticActive: !n.draft,
          })));
        } else {
          registerItems(type, (data.documents || []).map((d) => ({
            id: d.filename,
            title: d.filename.replace(/^_document_ - /, ''),
            meta: d.topic || '',
            staticStarred: false,
            staticActive: true,
          })));
        }
        break;
      }
    }
    loadErrors.delete(type);
  } catch (e) {
    loadErrors.add(type);
    loaded.delete(type);
    showError(`Could not load ${type} list: ${e.message}`);
  }
  if (token === loadToken) {
    statusEl.textContent = '';
    render();
  }
}

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.hidden = false;
}

// ---------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------
tabsEl.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-tab]');
  if (!b) return;
  activeTab = b.dataset.tab;
  tabsEl.querySelectorAll('button').forEach((x) => x.classList.toggle('active', x === b));
  errorEl.hidden = true;
  ensureLoaded(activeTab);
});

searchEl.addEventListener('input', () => render());

function currentTokens() {
  return searchEl.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

function matches(item, tokens) {
  if (!tokens.length) return true;
  const hay = `${item.title} ${item.id} ${item.meta}`.toLowerCase();
  return tokens.every((tk) => hay.includes(tk));
}

function render() {
  const rows = items[activeTab] || [];
  const tokens = currentTokens();
  const shown = rows.filter((it) => matches(it, tokens));
  listEl.innerHTML = shown.map((it) => {
    const starred = flagOf(activeTab, it.id, 'starred', it.staticStarred);
    const active = flagOf(activeTab, it.id, 'active', it.staticActive);
    return `
      <div class="admin-row${active ? '' : ' inactive'}" data-id="${esc(it.id)}">
        <button type="button" class="admin-star ${starred ? 'on' : ''}"
                title="${t('starred')}" data-flag="starred" data-id="${esc(it.id)}">${starred ? '★' : '☆'}</button>
        <button type="button" class="admin-active ${active ? 'on' : ''}"
                title="${active ? 'Active / 啟用' : 'Inactive / 停用'}" data-flag="active" data-id="${esc(it.id)}">${active ? EYE : EYE_OFF}</button>
        <div class="admin-main">
          <div class="admin-title">${esc(it.title)}</div>
          <div class="admin-meta">${esc(it.id)}${it.meta ? ` · ${esc(it.meta)}` : ''}</div>
        </div>
      </div>`;
  }).join('');
  emptyEl.hidden = !!shown.length || !!loadErrors.has(activeTab);
  emptyEl.textContent = rows.length ? 'No items match the filter. / 沒有符合的項目' : 'Nothing to show.';
}

// ---------------------------------------------------------------------
// Flag toggling (optimistic; single-item batch POST). One handler covers
// both flags — each button carries data-flag="starred"|"active".
// ---------------------------------------------------------------------
let pending = new Set(); // "<type>:<id>:<flag>" keys with an in-flight request

listEl.addEventListener('click', async (e) => {
  const btnEl = e.target.closest('.admin-star, .admin-active');
  if (!btnEl) return;
  const flag = btnEl.dataset.flag;
  const id = btnEl.dataset.id;
  const key = `${activeTab}:${id}:${flag}`;
  if (pending.has(key)) return;

  const item = (items[activeTab] || []).find((it) => it.id === id) || {};
  const staticVal = flag === 'starred' ? !!item.staticStarred : !!item.staticActive;
  const oldVal = flagOf(activeTab, id, flag, staticVal);
  const newVal = !oldVal;

  // Optimistic flip.
  flags[activeTab] = flags[activeTab] || {};
  flags[activeTab][id] = { ...(flags[activeTab][id] || {}), [flag]: newVal };
  updateToggleButtons(id, flag, newVal);

  pending.add(key);
  try {
    const r = await fetch(FLAGS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify({ items: [{ content_type: activeTab, content_id: id, [flag]: newVal }] }),
    });
    if (r.status === 401) { promptSignIn(); throw new Error('Sign-in required'); }
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    const data = await r.json();
    flags = data.flags || {};
    updateToggleButtons(id, flag, newVal);
  } catch (err) {
    // Revert + surface the failure.
    flags[activeTab] = flags[activeTab] || {};
    flags[activeTab][id] = { ...(flags[activeTab][id] || {}), [flag]: oldVal };
    showError(`Could not save ${flag} for “${id}”: ${err.message}`);
    statusEl.textContent = 'Save failed / 儲存失敗';
    setTimeout(() => { statusEl.textContent = ''; render(); }, 2500);
    return;
  } finally {
    pending.delete(key);
  }
  statusEl.textContent = 'Saved / 已儲存';
  setTimeout(() => { statusEl.textContent = ''; }, 1500);
});

// Reflect a flag's current value on the matching toggle button (post-merge
// server state or optimistic flip). Re-rendering would lose scroll position.
function updateToggleButtons(id, flag, val) {
  const sel = flag === 'starred' ? '.admin-star' : '.admin-active';
  const btnEl = listEl.querySelector(`${sel}[data-id="${CSS.escape(id)}"]`);
  if (!btnEl) return;
  btnEl.classList.toggle('on', val);
  if (flag === 'starred') btnEl.textContent = val ? '★' : '☆';
  else btnEl.innerHTML = val ? EYE : EYE_OFF;
  btnEl.closest('.admin-row')?.classList.toggle('inactive', flag === 'active' && !val);
}
