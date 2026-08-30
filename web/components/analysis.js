// Analysis interface: Graph Analysis panel (offline dataset analytics), the
// floating prompt/chat window, suggestion chips, wiki entity tooltips/modal,
// HTML-mode responses, and graph highlighting for prompt turns.

import * as THREE from 'three';

import { RAW_NODES, RAW_EDGES, TRANSLATIONS, descByLabel, descByLabelZh, noteUrl, nodeMap, LEGEND, adjacency, GRAPH_META, loadRolesMeta, loadLinkPrediction, SUGGESTED_PROMPTS } from './data.js';
import { state } from './state.js';
import {
  camera, nodeObjects, edgeSegments, edgeOffColor,
  animateCamera,
  applyNodeState, applyEdgeState, setLabelVisibility, resetVisualState,
  restoreDefaultLabels, applyNodeVisibility, visibilityRegistry,
} from './core.js';
import { clearTrace, clearCommunityFocus, setActiveWindow, exportGraphPNG, rebindTracePanel, showInfo, showEdgeInfo, showCommunityInfo, setNodeActionBuilder, showToast } from './ui.js';
import { deselectNode, selectNode } from './interaction.js';
import { esc, renderMarkdown, wikiExcerpt, escapeRegex } from './markdown.js';
import { updateHash } from './routing.js';
import { currentTheme } from './theme.js';
import { getUiLang, setUiLang, persistUiLang, onUiLangChange, t } from './i18n.js';
import { INTENT_API, EXECUTE_STREAM_API, postJSON, resetSession, sseEvents } from './api.js';
import { matchNodesInText, edgesBetween, bfsFromSets, computeDatasetStats } from './analytics.js';
import { promptSignIn } from './auth.js';
import { registerModal, openModal, closeModal, isModalOpen, anyModalOpen } from './modal.js';

// ------------------------------------------------------------
// Elements + API endpoints
// ------------------------------------------------------------
const analysisBtn = document.getElementById('btn-analysis');
const analysisActivityDot = document.getElementById('analysis-activity-dot');
const analysisPanel = document.getElementById('analysis-panel');
const chatBtn = document.getElementById('btn-chat');
const chatActivityDot = document.getElementById('chat-activity-dot');
const chatPanel = document.getElementById('chat-panel');
const chatCloseBtn = document.getElementById('chat-close');
const promptMessages = document.getElementById('prompt-messages');
const promptInput = document.getElementById('prompt-input');
const promptSend = document.getElementById('prompt-send');
const analysisCloseBtn = document.getElementById('analysis-close');
const promptLangBtns = Array.from(
  document.querySelectorAll('#analysis-panel .lang-toggle [data-lang], #chat-panel .lang-toggle [data-lang]'));
const promptFilterCheckbox = document.getElementById('prompt-filter-nodes');
// Persistent quantity filter pill — rendered into the analysis sub-row slot and
// floats above the full-screen detail card (the sub-row has a raised z-index).
const gqfPillSlot = document.getElementById('gqf-pill-slot');
const analysisModes = document.getElementById('analysis-modes');
const graphifyCheckbox = document.getElementById('graphify-checkbox');
const promptTagPopup = document.getElementById('prompt-tag-popup');
const promptTags = document.getElementById('prompt-tags');
const analysisTools = document.getElementById('analysis-tools');
const htmlModeOverlay = document.getElementById('html-mode-overlay');
const htmlModeFrame = document.getElementById('html-mode-frame');
const htmlModeTitle = document.getElementById('html-mode-title');
const htmlModeDownload = document.getElementById('html-mode-download');
registerModal('html-mode', htmlModeOverlay);
registerModal('wiki-modal', document.getElementById('wiki-modal-overlay'));
const responseModeWrap = document.getElementById('response-mode');

let promptOpen = false; // floating chat window open
let analysisPanelOpen = false; // graph-tools panel open
let promptBusy = false;
let promptHighlightedNodes = [];
// Tracks whether a conversation has started (the message array contents are no
// longer kept client-side — conversational context now lives server-side, keyed
// by promptSessionId). Used only to light the Prompt tab's activity dot.
let promptActive = false;
// opencode session id, assigned by the server on the first turn. Sending it back
// keeps follow-up questions in the same conversation without re-uploading the
// whole transcript on every request.
let promptSessionId = null;

// ------------------------------------------------------------
// UI language (EN / 中) — panel chrome strings for the whole analysis panel.
// Sibling of the Notes panel's language toggle: `uiLang` drives both the
// Prompt and Graph (Explore) surfaces. Persisted across visits, synced to the
// URL hash by routing.js (`&uilang=`), and restored from deep links.
// ------------------------------------------------------------
let uiLang = getUiLang(); // analysis/graph panel language; shared across screens

// Panel chrome strings (UI_STRINGS) and the shared t() lookup live in
// i18n.js — one dictionary shared with the Notes panel.

// ------------------------------------------------------------
// Graphify routing switch
// ------------------------------------------------------------
// Checked (default): every turn is routed through a graphify graph operation
// (explain / path / query / analyze). Unchecked: the turn is answered from the
// wiki by the prompt model, even if the text happens to say "graphify".
// The switch resets to on with the rest of the session state on reload.
function graphifyEnabled() {
  return !!(graphifyCheckbox && graphifyCheckbox.checked);
}

function syncGraphifyUI() {
  const on = graphifyEnabled();
  analysisModes.classList.toggle('graphify-off', !on);
  promptInput.placeholder = on
    ? t('inputPlaceholderGraphOn')
    : t('inputPlaceholderGraphOff');
}

graphifyCheckbox.addEventListener('change', () => {
  syncGraphifyUI();
  promptInput.focus();
});

// ------------------------------------------------------------
// UI language — sibling of the Notes panel's toggle. Apply the active language
// to the whole analysis panel: toggle the EN/中 buttons, rewrite data-i18n
// labels/titles on static chrome, re-render the active view, and sync state.
// ------------------------------------------------------------
function applyUiLang(lang) {
  if (lang !== 'en-US' && lang !== 'zh-TW') lang = 'en-US';
  uiLang = lang;
  persistUiLang(uiLang);
  state.analysisUiLang = uiLang;

  promptLangBtns.forEach((b) => b.classList.toggle('active', b.dataset.lang === uiLang));
  [...promptLangBtns].forEach((b) => { b.title = t(b.dataset.lang === 'zh-TW' ? 'langZh' : 'langEn'); });
  const langToggle = document.querySelector('#analysis-panel .lang-toggle');
  if (langToggle) langToggle.setAttribute('aria-label', t('panelLanguage'));

  // Apply i18n to both panels' chrome (graph tools + chat window).
  document.querySelectorAll('#analysis-panel [data-i18n], #chat-panel [data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && t(key)) { el.textContent = t(key); el.setAttribute('aria-label', t(key)); }
  });
  document.querySelectorAll('#analysis-panel [data-i18n-title], #chat-panel [data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key && t(key)) el.title = t(key);
  });
  analysisCloseBtn.setAttribute('aria-label', t('panelClose'));
  if (chatCloseBtn) chatCloseBtn.setAttribute('aria-label', t('panelClose'));
  const analysisLangToggle = document.querySelector('#analysis-panel .lang-toggle');
  if (analysisLangToggle) analysisLangToggle.setAttribute('aria-label', t('panelLanguage'));
  const chatLangToggle = document.querySelector('#chat-panel .lang-toggle');
  if (chatLangToggle) chatLangToggle.setAttribute('aria-label', t('panelLanguage'));
  // Response-mode button tooltips (chrome without data-i18n markers).
  document.querySelectorAll('#response-mode .resp-mode-btn').forEach((b) => {
    b.title = t(b.dataset.mode === 'md' ? 'respModeAskTitle' : 'respModeHtmlTitle');
  });

  syncGraphifyUI();
  renderAnalysisTools();
  // Re-render suggestion chips in the new language (no-op once they've been
  // removed after the first message).
  const suggestionsDiv = document.getElementById('prompt-suggestions');
  if (suggestionsDiv) {
    suggestionOffset = 0;
    suggestionsDiv.innerHTML = pageSuggestionsHTML();
  }
  updateHash();
}

// Restore the analysis panel's UI language from URL-hash params during hash
// restore (graph.js restoreFromHash). `updateHash` is suppressed by the caller.
export function applyAnalysisUiLang(lang) {
  if ((lang === 'en-US' || lang === 'zh-TW') && lang !== uiLang) applyUiLang(lang);
}

promptLangBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang && lang !== uiLang) { applyUiLang(lang); setUiLang(lang); }
  });
});
// Re-render this panel whenever the shared language changes elsewhere.
onUiLangChange((lang) => { if (lang && lang !== uiLang) applyUiLang(lang); });

// ------------------------------------------------------------
// Response view mode (MD / HTML) — choose how a response is rendered.
//   html : open the response in the standalone HTML-mode page (pages.css) (default)
//   md   : render markdown inline in the prompt bubble
// The per-message globe button still lets you open HTML on demand in MD mode.
// ------------------------------------------------------------
let responseMode = 'html'; // 'md' | 'html'

if (responseModeWrap) {
  responseModeWrap.querySelectorAll('.resp-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      responseMode = btn.dataset.mode === 'html' ? 'html' : 'md';
      responseModeWrap.querySelectorAll('.resp-mode-btn').forEach(b => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    });
  });
}

// Append the user's chosen output format as a spec to the message sent to the
// server (the model responds with .md markdown or a standalone .html doc).
// Idempotent so it is never doubled when the server echoes the message back.
function withOutputSpec(text) {
  if (!text) return text;
  if (/\[Output format: \.(md|html)\]/.test(text)) return text;
  if (responseMode === 'html') {
    // Tell the model which visual palette to match so generated diagrams
    // blend with the site's active theme (light is the default).
    const styleSpec = currentTheme() === 'light'
      ? 'Match this page visual style: light theme with background #F6F3EC, white cards #FFFFFF with a 1px #E2DCCE border and 12px border radius, body text #22304A, muted text #4B5563, and accent colors teal #0F766E, red #C0392B, amber #B45309, purple #6D5BD0, blue #2563A8, green #1E7A4E. Build diagrams from an SVG element with a viewBox (for example 0 0 1000 500), using rounded-rect nodes or cards, legible dark text labels, subtle 1px #E2DCCE strokes, and a small legend where it aids reading. Keep each diagram self-contained and responsive (width 100%).'
      : 'Match this page visual style: dark theme with background #0f0f1a, cards #1a1a2e with a 1px #2a2a4e border and 12px border radius, body text #e0e0e0, and accent colors teal #3EC9A7, red #E4575E, amber #E8A33D, purple #9D8DF1, blue #5DA8FF, green #58D68D. Build diagrams from an SVG element with a viewBox (for example 0 0 1000 500), using rounded-rect nodes or cards, legible text labels, subtle 1px #2a2a4e strokes, and a small legend where it aids reading. Keep each diagram self-contained and responsive (width 100%).';
    const spec = [
      '[Output format: .html]',
      'Respond with HTML and ONLY HTML. Do not wrap the answer in markdown code fences, and do not add any prose, commentary, or explanation outside the HTML. Output must be valid HTML content directly renderable in a page (you may include inline style elements and SVG; no external assets, no scripts).',
      'When it helps clarity, enrich the answer with diagrams and charts. Use inline SVG only — pure SVG markup plus CSS, no external images, no img elements, and no JavaScript chart libraries (no Chart.js, D3, or Mermaid).',
      styleSpec,
    ].join('\n\n');
    return `${text}\n\n${spec}`;
  }
  return `${text}\n\n[Output format: .md]`;
}

syncGraphifyUI();

// Message + close icons for the floating analysis button (SVG, stroke style like
// the other inline icons so they inherit the button's text color). The icon is
// a static chart/diagram glyph; the button simply toggles the analysis panel.

// The chat launcher lives in the analysis panel context: it is only visible
// while the graph-tools panel is open (and hidden while the chat window
// itself is up, since the window already fills the screen).
function updateChatBtn() {
  if (!chatBtn) return;
  chatBtn.classList.toggle('visible', analysisPanelOpen && !promptOpen);
}

analysisBtn.addEventListener('click', () => {
  analysisPanelOpen = !analysisPanelOpen;
  analysisPanel.classList.toggle('open', analysisPanelOpen);
  analysisBtn.classList.toggle('open', analysisPanelOpen);
  if (!analysisPanelOpen) setActiveWindow(null);
  state.analysisOpen = analysisPanelOpen;
  state.analysisMode = 'graph';
  updateChatBtn();
  // Surface the info card for whatever is already selected when the panel
  // opens (node/edge info now lives in the analysis panel, not a sidebar).
  if (analysisPanelOpen) {
    if (state.selectedNode) showInfo(state.selectedNode);
    else if (state.selectedEdge) showEdgeInfo(state.selectedEdge);
  }
  updateHash();
});

// Floating chat window (bottom-right launcher): toggles the near-full-screen
// prompt/chat surface independently of the graph-tools panel.
// Mobile keyboards: on iOS (and older Android) the virtual keyboard overlays
// fixed elements instead of resizing the layout viewport, so the composer's
// send button gets buried under it. `visualViewport` reports the visible area
// above the keyboard — raise the chat window's bottom edge to match. Android
// with `interactive-widget=resizes-content` already shrinks `innerHeight`, so
// the offset self-corrects to zero there.
function syncChatPanelKeyboard() {
  if (!chatPanel) return;
  if (!chatPanel.classList.contains('open') || !window.visualViewport) {
    chatPanel.style.bottom = '';
    return;
  }
  const keyboard = Math.max(0, window.innerHeight - window.visualViewport.height);
  chatPanel.style.bottom = keyboard > 0 ? keyboard + 'px' : '';
}
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', syncChatPanelKeyboard);
}
window.addEventListener('resize', syncChatPanelKeyboard);
syncChatPanelKeyboard();

function openChatPanel() {
  if (!chatPanel || promptOpen) return;
  promptOpen = true;
  chatPanel.classList.add('open');
  chatBtn.classList.add('open');
  state.chatOpen = true;
  updateChatBtn();
  syncChatPanelKeyboard();
  promptInput.focus();
  updateHash();
}

function closeChatPanel() {
  promptOpen = false;
  chatPanel.classList.remove('open');
  chatBtn.classList.remove('open');
  state.chatOpen = false;
  updateChatBtn();
  syncChatPanelKeyboard();
  setActiveWindow(null);
  updateHash();
}

chatBtn.addEventListener('click', () => {
  if (promptOpen) closeChatPanel();
  else openChatPanel();
});

analysisCloseBtn.addEventListener('click', () => {
  analysisPanelOpen = false;
  analysisPanel.classList.remove('open');
  analysisBtn.classList.remove('open');
  setActiveWindow(null);
  state.analysisOpen = false;
  updateChatBtn();
  updateHash();
});

if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChatPanel);

// ------------------------------------------------------------
// Message rendering
// ------------------------------------------------------------
function sanitizePromptInput(text) {
  if (!text || typeof text !== 'string') return '';
  let clean = text.replace(/<[^>]+>/g, '');
  clean = clean.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '');
  clean = clean.replace(/\s+/g, ' ').trim();
  return clean.slice(0, 4000);
}

function addPromptMessage(text, type) {
  const div = document.createElement('div');
  div.className = `prompt-msg ${type}`;
  div.textContent = text;
  promptMessages.appendChild(div);
  promptMessages.scrollTop = promptMessages.scrollHeight;
  return div;
}

const COPY_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

function addCopyButton(div, text) {
  const btn = document.createElement('button');
  btn.className = 'prompt-copy-btn';
  btn.title = t('copy');
  btn.setAttribute('aria-label', 'Copy message');
  btn.innerHTML = COPY_ICON;
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    try {
      const textToCopy = String(text || '');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const ta = document.createElement('textarea');
        ta.value = textToCopy;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      btn.classList.add('copied');
      btn.title = t('copied');
      btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = COPY_ICON;
        btn.title = t('copy');
      }, 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  });
  div.appendChild(btn);
}

// "Open HTML page" affordance on a bot message: re-opens the standalone
// pages.css page for that response (used to reopen after closing the overlay).
// `query` is the user's question, used as a title fallback.
function addOpenHtmlButton(div, text, query) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'prompt-page-btn';
  btn.textContent = t('openHtmlPage');
  btn.title = t('openHtmlTitle');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openHtmlMode(text, suggestPageTitle(text, query));
  });
  div.appendChild(btn);
}

// Entity summaries come straight from graph.json node descriptions (every
// node has one), keyed by label so prompt [[entity]] links can show a brief
// excerpt on hover. wiki-context.json is retired.

function formatBotMessage(text) {
  // Render full markdown (headers, lists, tables, code, bold, links, etc.).
  let html = renderMarkdown(text);
  // Wiki links: [[Name]] or [[Name|Display]] -> open wiki modal on click
  html = html.replace(/\[\[([^\]\|]+?)(?:\|([^\]]+?))?\]\]/g, (m, name, display) => {
    const wikiBase = name.trim().replace(/\.md$/i, '');
    if (!wikiBase || !descByLabel.has(wikiBase)) return esc(m);
    const label = (display || name).trim();
    return `<span class="prompt-entity-link" data-wiki="${esc(wikiBase)}">${esc(label)}</span>`;
  });
  // Long code blocks: collapse them so they don't dominate the response.
  html = html.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,
    '<details class="md-code"><summary>Code</summary><pre><code>$1</code></pre></details>');
  return html;
}

// ------------------------------------------------------------
// Wiki entity tooltip
// ------------------------------------------------------------
const wikiTooltipEl = document.getElementById('wiki-tooltip');
let wikiTooltipVisible = false;

function positionWikiTooltip(anchor) {
  if (!wikiTooltipVisible) return;
  const r = anchor.getBoundingClientRect();
  let left = r.left;
  let top = r.bottom + 8;
  const tw = wikiTooltipEl.offsetWidth || 340;
  const th = wikiTooltipEl.offsetHeight || 160;
  if (left + tw > window.innerWidth - 8) left = window.innerWidth - tw - 8;
  if (top + th > window.innerHeight - 8) top = r.top - th - 8;
  if (left < 8) left = 8;
  if (top < 8) top = 8;
  wikiTooltipEl.style.left = left + 'px';
  wikiTooltipEl.style.top = top + 'px';
}

function showWikiTooltip(anchor) {
  // Surface the zh-TW description when the prompt UI is in zh-TW and a real
  // translation exists; otherwise fall back to the canonical English summary.
  const zh = uiLang === 'zh-TW' ? descByLabelZh.get(anchor.dataset.wiki) : null;
  const desc = zh || descByLabel.get(anchor.dataset.wiki);
  if (!desc) { hideWikiTooltip(); return; }
  const excerpt = wikiExcerpt(desc);
  if (!excerpt) return;
  const title = anchor.textContent.trim() || (anchor.dataset.wiki || '');
  wikiTooltipEl.innerHTML = `<b>${esc(title)}</b>${esc(excerpt)}<br><span class="wiki-tooltip-hint">Click to expand</span>`;
  wikiTooltipVisible = true;
  wikiTooltipEl.classList.add('visible');
  positionWikiTooltip(anchor);
}

function hideWikiTooltip() {
  if (!wikiTooltipVisible) return;
  wikiTooltipVisible = false;
  wikiTooltipEl.classList.remove('visible');
}

promptMessages.addEventListener('mouseover', (e) => {
  const anchor = e.target.closest('.prompt-entity-link');
  if (!anchor || !anchor.dataset.wiki) { hideWikiTooltip(); return; }
  showWikiTooltip(anchor);
});

promptMessages.addEventListener('mousemove', (e) => {
  if (!wikiTooltipVisible) return;
  const anchor = e.target.closest('.prompt-entity-link');
  if (anchor) positionWikiTooltip(anchor);
});

promptMessages.addEventListener('mouseleave', hideWikiTooltip);
promptMessages.addEventListener('scroll', hideWikiTooltip, { passive: true });

// ------------------------------------------------------------
// Wiki Modal
// ------------------------------------------------------------
const wikiModalOverlay = document.getElementById('wiki-modal-overlay');
const wikiModalTitle = document.getElementById('wiki-modal-title');
const wikiModalBody = document.getElementById('wiki-modal-body');
const wikiModalLink = document.getElementById('wiki-modal-link');

function openWikiModal(wikiKey) {
  const zh = uiLang === 'zh-TW' ? descByLabelZh.get(wikiKey) : null;
  const desc = zh || descByLabel.get(wikiKey);
  if (!desc) return;
  const title = wikiKey.replace(/_/g, ' ');
  wikiModalTitle.textContent = title;
  wikiModalBody.innerHTML = renderMarkdown(desc);
  const ghHref = noteUrl(wikiKey);
  wikiModalLink.href = ghHref || '#';
  wikiModalLink.toggleAttribute('disabled', !ghHref);
  openModal('wiki-modal');
  hideWikiTooltip();
}

function closeWikiModal() {
  closeModal('wiki-modal');
}

// ------------------------------------------------------------
// HTML mode — render a prompt response as a standalone page styled with pages.css
// ------------------------------------------------------------
let htmlModeDoc = '';
let htmlModeRaw = ''; // raw server HTML — kept so the doc can be rebuilt on theme switch

// Collapse fenced code blocks (```...```) into <details> so long code samples
// don't dominate the rendered page. Code is escaped so it shows as text.
function collapseFencedCode(html) {
  return html.replace(/```(\w*)\n?([\s\S]*?)```/g, (m, lang, code) => {
    const safe = esc(code.replace(/\n+$/, ''));
    const label = lang ? `Code · ${esc(lang)}` : 'Code';
    return `<details class="md-code"><summary>${label}</summary><pre><code>${safe}</code></pre></details>`;
  });
}

// Inline HTML render: inject a server-authored HTML document directly into the
// prompt bubble so it renders visually (diagrams, cards, tables) instead of
// appearing as escaped markdown/code. Scripts are stripped — the iframe modal
// is script-sandboxed, but inline injection has no sandbox, so this is mandatory
// defense-in-depth. The <html>/<head>/<body> wrapper is dropped (only the body
// content is embedded) so we don't nest document roots inside the message.
// Any <style> blocks inside the body are preserved (the model emits inline/SVG
// styles this way); they apply document-wide, which is acceptable for authored
// response content.
function renderInlineHtml(html) {
  const raw = String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<script\b[^>]*>/gi, '');
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : raw;
}

// Derive a short, human-readable page title for an HTML-mode response so the
// modal header / download file aren't all labelled "wiki" or "Response". We
// prefer the first heading (h1-h3); if none, fall back to the first meaningful
// text run (tags stripped), capped to a sane length. When the response yields
// nothing usable, fall back to the user's question (query), then "Response".
function suggestPageTitle(text, query) {
  const stripped = String(text || '').replace(/<script[\s\S]*?<\/script>/gi, '');
  const h = stripped.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
  let title = h ? h[1] : stripped.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  title = title.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (!title && query) {
    title = String(query)
      .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1') // wiki links -> label
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  if (!title) return 'Response';
  return title.length > 80 ? title.slice(0, 77).trim() + '…' : title;
}

function buildHtmlModeDoc(text, title) {
  // In HTML mode the model returns a .html document (including inline SVG
  // diagrams), so inject it RAW rather than through the markdown escaper (which
  // would turn <svg> into literal text). Scripts are blocked by the iframe
  // sandbox; we also strip <script> tags here as defense-in-depth.
  const raw = String(text || '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<script\b[^>]*>/gi, '');
  const content = collapseFencedCode(raw);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<link rel="stylesheet" href="pages/themes/theme-01/pages.css">
<link rel="stylesheet" href="pages/themes/theme-01/pages-light.css" id="theme-light"${currentTheme() === 'light' ? '' : ' disabled'}>
<style>
  body { background: var(--bg); }
  .wrap { padding-top: 32px; padding-bottom: 72px; }
  .md-meta { color: var(--mute); font-size: .85rem; margin: 0 0 24px; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
  .md-body { font-size: 1rem; }
  .md-body h1 { font-size: 1.9rem; margin-bottom: 8px; }
  .md-body h2 { font-size: 1.4rem; }
  .md-body h3 { font-size: 1.1rem; }
  .md-body code { background: var(--code-bg); }
  .md-code { border: 1px solid var(--line); border-radius: 10px; margin: 12px 0; background: var(--md-code-bg, var(--bg)); overflow: hidden; }
  .md-code > summary { cursor: pointer; padding: 8px 12px; color: var(--dim); font-size: .85rem; user-select: none; }
  .md-code > summary:hover { color: var(--teal); }
  .md-code > pre { margin: 0; border-top: 1px solid var(--line); }
  .md-body svg { max-width: 100%; height: auto; display: block; }
  .md-body svg text { fill: var(--text); font-family: inherit; }
  .md-body .wikilink { color: var(--teal); text-decoration: none; border-bottom: 1px dotted var(--link-dash, rgba(62,201,167,.55)); }
  .md-body .wikilink:hover { color: var(--teal-hover); }
</style>
</head>
<body>
<div class="wrap">
  <article class="md-body">${content}</article>
</div>
</body>
</html>`;
}

function openHtmlMode(text, title) {
  if (!htmlModeOverlay || !htmlModeFrame) return;
  htmlModeRaw = text;
  htmlModeDoc = buildHtmlModeDoc(text, title || 'Response');
  if (htmlModeTitle) htmlModeTitle.textContent = title || 'Response';
  htmlModeFrame.srcdoc = htmlModeDoc;
  openModal('html-mode');
}

function closeHtmlMode() {
  if (!htmlModeOverlay) return;
  closeModal('html-mode');
  if (htmlModeFrame) htmlModeFrame.srcdoc = '';
  htmlModeDoc = '';
  htmlModeRaw = '';
}
// Rebuild an open HTML-mode document when the site theme changes (theme.js
// dispatches site-theme-change). The sandboxed frame cannot run a bootstrap
// script, so the pages-light.css disabled state is baked in at build time.
window.addEventListener('site-theme-change', () => {
  if (!isModalOpen('html-mode') || !htmlModeFrame) return;
  if (!htmlModeDoc) return;
  const title = htmlModeTitle ? htmlModeTitle.textContent : 'Response';
  htmlModeDoc = buildHtmlModeDoc(htmlModeRaw || htmlModeDoc, title);
  htmlModeFrame.srcdoc = htmlModeDoc;
});
if (htmlModeDownload) {
  htmlModeDownload.addEventListener('click', () => {
    if (!htmlModeDoc) return;
    const blob = new Blob([htmlModeDoc], { type: 'text/html' });
    const a = document.createElement('a');
    const safe = (htmlModeTitle ? htmlModeTitle.textContent : 'response').replace(/[^\w\u4e00-\u9fff\-]+/g, '_').slice(0, 60);
    a.download = `response-${safe}.html`;
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
  });
}
// Allow the in-iframe "back" link to close the overlay.
window.addEventListener('message', (e) => {
  if (e.data === 'html-mode-close') closeHtmlMode();
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (anyModalOpen()) return; // modal.js closes the topmost overlay itself
  const nodeCard = document.getElementById('at-node-detail');
  if (nodeCard && !nodeCard.hidden) { closeNodeDetail(); return; }
  if (chatPanel.classList.contains('open')) { closeChatPanel(); return; }
  if (analysisPanel.classList.contains('open')) {
    analysisCloseBtn.click();
  }
});

// Enter in Graph mode runs the Set A/B comparison (equivalent to the
// &#9166; A and B button). Ignore keystrokes aimed at text fields or buttons,
// which already have native Enter behavior.
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' || e.shiftKey) return;
  const target = e.target;
  if (target && (target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' || target.isContentEditable)) return;
  if (analysisPanel.classList.contains('open')) {
    e.preventDefault();
    runCompare();
  }
});

// Delegate click on prompt entity links to open modal
promptMessages.addEventListener('click', (e) => {
  const anchor = e.target.closest('.prompt-entity-link');
  if (!anchor || !anchor.dataset.wiki) return;
  e.preventDefault();
  e.stopPropagation();
  openWikiModal(anchor.dataset.wiki);
});

// ------------------------------------------------------------
// Send / receive prompt
// ------------------------------------------------------------
async function sendPromptMessage() {
  const raw = promptInput.value;
  const clean = sanitizePromptInput(raw);
  if (!clean || promptBusy) return;

  // Explicitly tagged nodes travel with the request as server-side context.
  const tags = Array.from(promptTagSet.values()).map(n => n.label);

  promptBusy = true;
  promptSend.disabled = true;
  promptInput.value = '';
  clearPromptTags();
  setPromptThinking(true);

  // Hide suggestions after first message
  const suggestions = document.getElementById('prompt-suggestions');
  if (suggestions) suggestions.remove();

  addPromptMessage(clean, 'user');
  promptActive = true;
  refreshActivity();

  const typingDiv = addPromptMessage(t('thinking'), 'typing');
  typingDiv.innerHTML = '<span id="typing-label">Thinking</span><span id="typing-elapsed" class="typing-elapsed"></span><span class="typing-dots"><span></span><span></span><span></span></span>';

  const typingStart = performance.now();
  const typingElapsed = typingDiv.querySelector('#typing-elapsed');
  let typingTimerId = setInterval(() => {
    typingElapsed.textContent = `(${((performance.now() - typingStart) / 1000).toFixed(1)}s)`;
  }, 100);

  try {
    // Phase 1: Parse intent
    const intentResp = await postJSON(INTENT_API, {
      message: withOutputSpec(clean),
      session_id: promptSessionId,
      graphify: graphifyEnabled(),
      tags,
    });

    if (!intentResp.ok) {
      if (intentResp.status === 401 || intentResp.status === 403) {
        promptSignIn();
        promptMessages.removeChild(typingDiv);
        addPromptMessage(t('signInRequired'), 'error');
        return;
      }
      promptMessages.removeChild(typingDiv);
      addPromptMessage(t('serverError'), 'error');
      return;
    }

    const intentData = await intentResp.json();

    // Server-side conversation handle; reused for every subsequent turn.
    if (intentData.session_id) promptSessionId = intentData.session_id;

    // Update indicator only when a translation pass will actually run. Prompt
    // turns answer in the user's language natively, so no translation step.
    const willTranslate = intentData.lang && intentData.lang !== 'en'
      && ['query', 'explain', 'path', 'analyze'].includes(intentData.intent);
    if (willTranslate) {
      typingDiv.querySelector('#typing-label').textContent = t('translating');
    }

    if (intentData.intent === 'prompt' && intentData.message) {
      // Streaming path for prompt intent — streams thinking + answer
      await streamPromptResponse(intentData, typingDiv, typingStart, typingTimerId, clean, tags);
      typingTimerId = null; // consumed by streamPromptResponse
    } else {
      // Single-event path for graph ops / greeting (still uses streaming endpoint)
      await streamGraphOp(intentData, typingDiv, typingStart, typingTimerId, clean, tags);
      typingTimerId = null;
    }
  } catch (e) {
    if (typingDiv.parentNode) promptMessages.removeChild(typingDiv);
    addPromptMessage(t('couldNotReach'), 'error');
  } finally {
    if (typingTimerId) { clearInterval(typingTimerId); typingTimerId = null; }
    promptBusy = false;
    promptSend.disabled = false;
    setPromptThinking(false);
    promptInput.focus();
  }
}

async function streamPromptResponse(intentData, typingDiv, typingStart, typingTimerId, clean, tags) {
  const labelEl = typingDiv.querySelector('#typing-label');
  labelEl.textContent = t('thinking');

  // Add collapsible thinking trace container
  const traceDiv = document.createElement('div');
  traceDiv.className = 'prompt-thinking-trace';
  traceDiv.style.display = 'none';
  typingDiv.appendChild(traceDiv);

  let reasoningBuf = '';
  let textBuf = '';
  let traceContent = null;
  let traceOpen = false;
  let finalElapsed = 0;
  let serverHighlightNodes = [];
  let serverHighlightEdges = [];

  try {
    const resp = await postJSON(EXECUTE_STREAM_API, {
      intent: intentData.intent,
      message: withOutputSpec(intentData.message),
      session_id: promptSessionId,
      tags,
    });

    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status}`);
    }

    for await (const evt of sseEvents(resp)) {
        if (evt.type === 'reasoning' && evt.text) {
          reasoningBuf += evt.text;
          labelEl.textContent = t('thinking');
          if (!traceContent) {
            traceDiv.style.display = 'block';
            traceDiv.innerHTML = '<span class="prompt-trace-toggle">&#9654; Thinking trace</span>'
              + '<div class="prompt-trace-content"><div></div></div>';
            traceContent = traceDiv.querySelector('.prompt-trace-content');
            traceDiv.querySelector('.prompt-trace-toggle').addEventListener('click', () => {
              traceOpen = !traceOpen;
              traceContent.style.display = traceOpen ? 'block' : 'none';
              if (traceOpen) {
                traceContent.scrollTop = traceContent.scrollHeight;
                promptMessages.scrollTop = promptMessages.scrollHeight;
              }
            });
          }
          traceContent.textContent = reasoningBuf;
          if (traceOpen) {
            traceContent.scrollTop = traceContent.scrollHeight;
            promptMessages.scrollTop = promptMessages.scrollHeight;
          }
        } else if (evt.type === 'text' && evt.text) {
          textBuf += evt.text;
          labelEl.textContent = t('answering');
        } else if (evt.type === 'highlight') {
          serverHighlightNodes = evt.highlight_nodes || [];
          serverHighlightEdges = evt.highlight_edges || [];
        } else if (evt.type === 'done') {
          finalElapsed = evt.elapsed || ((performance.now() - typingStart) / 1000);
        } else if (evt.type === 'error') {
          throw new Error(evt.text || 'Stream error');
        }
    }
  } catch (e) {
    if (typingDiv.parentNode) promptMessages.removeChild(typingDiv);
    addPromptMessage(t('streamError'), 'error');
    if (typingTimerId) clearInterval(typingTimerId);
    throw e; // re-throw so finally in caller handles cleanup
  }

  // Remove typing indicator
  if (typingDiv.parentNode) promptMessages.removeChild(typingDiv);
  if (typingTimerId) clearInterval(typingTimerId);

  const responseText = textBuf || t('noResponse');
  const badge = 'wiki';

  // Build final message with elapsed time + optional thinking trace
  const div = document.createElement('div');
  div.className = 'prompt-msg bot';

  let html = '';
  if (badge) html += `<span class="prompt-badge ${badge}">${badge}</span>`;

  // Elapsed time badge
  const secs = finalElapsed > 0 ? finalElapsed : ((performance.now() - typingStart) / 1000);
  html += `<span class="prompt-elapsed" title="Thinking time">${secs.toFixed(1)}s</span>`;

  // Thinking trace (collapsible, if any)
  if (reasoningBuf) {
    html += '<details class="prompt-thinking-details">'
      + '<summary class="prompt-thinking-summary">Thinking trace</summary>'
      + '<div class="prompt-thinking-body">' + esc(reasoningBuf) + '</div>'
      + '</details>';
  }

  html += responseMode === 'html' ? `<div class="prompt-html-inline">${renderInlineHtml(responseText)}</div>` : formatBotMessage(responseText);
  div.innerHTML = html;
  addCopyButton(div, responseText);
  if (responseMode === 'html') addOpenHtmlButton(div, responseText, clean);
  promptMessages.appendChild(div);
  promptMessages.scrollTop = promptMessages.scrollHeight;

  // Highlight relevant nodes
  const highlighted = highlightForMessage(clean, { text: responseText, highlight_nodes: serverHighlightNodes, highlight_edges: serverHighlightEdges });
  if (highlighted.nodes.length > 0) {
    highlightPromptNodes(highlighted.nodes, highlighted.edges, highlighted.primary);
  }
}

async function streamGraphOp(intentData, typingDiv, typingStart, typingTimerId, clean, tags) {
  let textBuf = '';
  let highlightNodes = [];
  let highlightEdges = [];
  let primaryNode = null;
  let analysisData = null;

  try {
    const resp = await postJSON(EXECUTE_STREAM_API, {
      intent: intentData.intent,
      lang: intentData.lang,
      question: intentData.question,
      node: intentData.node,
      from_node: intentData.from_node,
      to_node: intentData.to_node,
      nodes: intentData.nodes,
      analysis: intentData.analysis,
      message: withOutputSpec(intentData.message || clean),
      session_id: promptSessionId,
      tags,
    });

    if (!resp.ok) {
      if (resp.status === 401 || resp.status === 403) promptSignIn();
      throw new Error(`HTTP ${resp.status}`);
    }

    for await (const evt of sseEvents(resp)) {
      if (evt.type === 'text') {
        textBuf = evt.text || '';
        highlightNodes = evt.highlight_nodes || [];
        highlightEdges = evt.highlight_edges || [];
        primaryNode = evt.primary_node || null;
        analysisData = evt.analysis_data || null;
      }
    }
  } catch (e) {
    if (typingDiv.parentNode) promptMessages.removeChild(typingDiv);
    addPromptMessage(t('serverError'), 'error');
    if (typingTimerId) clearInterval(typingTimerId);
    return;
  }

  if (typingDiv.parentNode) promptMessages.removeChild(typingDiv);
  if (typingTimerId) clearInterval(typingTimerId);

  // Badge names the graph op that produced the answer (explain / path / analyze / query).
  const op = ['query', 'explain', 'path', 'analyze'].includes(intentData.intent)
    ? intentData.intent : null;
  const div = document.createElement('div');
  div.className = 'prompt-msg bot';
  let html = `<span class="prompt-badge graphify">${op ? `graphify · ${op}` : 'graphify'}</span>`;
  const secs = ((performance.now() - typingStart) / 1000);
  html += `<span class="prompt-elapsed" title="Thinking time">${secs.toFixed(1)}s</span>`;
  html += responseMode === 'html' ? `<div class="prompt-html-inline">${renderInlineHtml(textBuf)}</div>` : formatBotMessage(textBuf);
  div.innerHTML = html;
  addCopyButton(div, textBuf);
  if (responseMode === 'html') addOpenHtmlButton(div, textBuf, clean);
  promptMessages.appendChild(div);
  promptMessages.scrollTop = promptMessages.scrollHeight;

  if (textBuf || highlightNodes.length) {
    const highlighted = highlightForMessage(clean, { text: textBuf, highlight_nodes: highlightNodes, highlight_edges: highlightEdges, primary_node: primaryNode });
    if (highlighted.nodes.length > 0) {
      highlightPromptNodes(highlighted.nodes, highlighted.edges, highlighted.primary);
    }
  }

  // Custom node analysis: offer JSON + PNG downloads of the computed result.
  if (intentData.intent === 'analyze' && analysisData) {
    addAnalysisActions(div, analysisData);
  }
}

// Build the download row for a custom node analysis message.
function addAnalysisActions(div, data) {
  const primaryLabel =
    (data && data.nodes && data.nodes[0] && data.nodes[0].label) || 'analysis';
  const safe = String(primaryLabel).replace(/[^\w\u4e00-\u9fff\-]+/g, '_').slice(0, 60);

  const row = document.createElement('div');
  row.className = 'prompt-analysis-actions';

  const jsonBtn = document.createElement('button');
  jsonBtn.className = 'prompt-analysis-btn';
  jsonBtn.type = 'button';
  jsonBtn.textContent = '⬇ JSON';
  jsonBtn.title = t('downloadJson');
  jsonBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.download = `analysis-${safe}.json`;
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
  });

  const pngBtn = document.createElement('button');
  pngBtn.className = 'prompt-analysis-btn';
  pngBtn.type = 'button';
  pngBtn.textContent = '⬇ PNG';
  pngBtn.title = t('downloadPng');
  pngBtn.addEventListener('click', () => {
    exportGraphPNG(`analysis-${safe}.png`);
  });

  row.appendChild(jsonBtn);
  row.appendChild(pngBtn);
  div.appendChild(row);
}

promptSend.addEventListener('click', sendPromptMessage);
promptInput.addEventListener('keydown', (e) => {
  // @-tag popup keyboard navigation takes priority over send
  if (promptTagPopup.classList.contains('visible') && tagMatches.length) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      tagActiveIdx = (tagActiveIdx + 1) % tagMatches.length;
      renderTagPopup();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      tagActiveIdx = (tagActiveIdx - 1 + tagMatches.length) % tagMatches.length;
      renderTagPopup();
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      selectTagNode(tagMatches[tagActiveIdx]);
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      selectTagNode(tagMatches[tagActiveIdx]);
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      closeTagPopup();
      return;
    }
  }
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendPromptMessage();
  }
});

// Auto-resize textarea + @-tag popup on input
promptInput.addEventListener('input', () => {
  promptInput.style.height = 'auto';
  promptInput.style.height = Math.min(promptInput.scrollHeight, 160) + 'px';
  updateTagPopup();
  refreshActivity();
});

// ------------------------------------------------------------
// @-tag node autocomplete
// ------------------------------------------------------------
let promptTagSet = new Map(); // nodeId -> node data for currently tagged nodes
let tagMatches = [];
let tagActiveIdx = -1;

// Find the "@token" being typed before the caret. Only "@" preceded by
// whitespace/start-of-input counts (so emails/words like "name@host" don't
// trigger the picker).
function getTagToken() {
  const val = promptInput.value;
  const caret = promptInput.selectionStart;
  const before = val.slice(0, caret);
  const atIdx = before.lastIndexOf('@');
  if (atIdx === -1) return null;
  if (atIdx > 0 && !/\s/.test(before[atIdx - 1])) return null;
  return { atIdx, query: before.slice(atIdx + 1) };
}

function tagMatchesFor(query) {
  const q = String(query || '').toLowerCase();
  if (!q) return [];
  const matches = [];
  RAW_NODES.forEach(n => {
    const label = String(n.label || '').toLowerCase();
    const zh = String(TRANSLATIONS[n.label] || '').toLowerCase();
    if (label.includes(q) || zh.includes(q)) matches.push(n);
  });
  matches.sort((a, b) => {
    const ap = String(a.label).toLowerCase().startsWith(q) ? 0 : 1;
    const bp = String(b.label).toLowerCase().startsWith(q) ? 0 : 1;
    if (ap !== bp) return ap - bp;
    return (b.degree || 0) - (a.degree || 0);
  });
  return matches.slice(0, 20);
}

function renderTagPopup() {
  promptTagPopup.innerHTML = tagMatches.map((n, i) => {
    const zh = TRANSLATIONS[n.label] || '';
    const zhText = zh && zh !== n.label ? ` <span class="zh-mini">${esc(zh)}</span>` : '';
    return `<div class="prompt-tag-item${i === tagActiveIdx ? ' active' : ''}" data-idx="${i}" role="option" aria-selected="${i === tagActiveIdx}" id="prompt-tag-item-${i}">
      <span class="tag-kind">@</span>
      <span>${esc(n.label)}${zhText}</span>
      <span class="tag-degree">${n.degree}</span>
    </div>`;
  }).join('');
  const active = promptTagPopup.querySelector('.active');
  if (active) promptTagPopup.setAttribute('aria-activedescendant', active.id);
  promptTagPopup.classList.add('visible');
}

function updateTagPopup() {
  const token = getTagToken();
  if (!token || !token.query) { closeTagPopup(); return; }
  const matches = tagMatchesFor(token.query);
  if (!matches.length) { closeTagPopup(); return; }
  tagMatches = matches;
  tagActiveIdx = 0;
  renderTagPopup();
}

function closeTagPopup() {
  tagMatches = [];
  tagActiveIdx = -1;
  promptTagPopup.classList.remove('visible');
  promptTagPopup.innerHTML = '';
  promptTagPopup.removeAttribute('aria-activedescendant');
}

function renderTagChips() {
  promptTags.innerHTML = '';
  promptTagSet.forEach(node => {
    const chip = document.createElement('span');
    chip.className = 'prompt-tag-chip';
    chip.dataset.id = node.id;
    const labelSpan = document.createElement('span');
    labelSpan.className = 'tag-label';
    labelSpan.textContent = '@' + node.label;
    const rm = document.createElement('button');
    rm.type = 'button';
    rm.className = 'tag-remove';
    rm.title = t('removeTag');
    rm.textContent = '×';
    chip.appendChild(labelSpan);
    chip.appendChild(rm);
    promptTags.appendChild(chip);
  });
  refreshActivity();
}

function highlightTaggedNodes() {
  const ids = Array.from(promptTagSet.keys());
  if (!ids.length) { clearPromptHighlights(); return; }
  const edges = edgesBetween(ids);
  highlightPromptNodes(ids, edges, ids[0]);
}

function selectTagNode(node) {
  const token = getTagToken();
  if (!token) return;
  const val = promptInput.value;
  const before = val.slice(0, token.atIdx);
  const after = val.slice(promptInput.selectionStart);
  const insertion = '@' + node.label;
  promptInput.value = before + insertion + ' ' + after;
  const caret = (before + insertion + ' ').length;
  promptInput.setSelectionRange(caret, caret);
  promptInput.style.height = 'auto';
  promptInput.style.height = Math.min(promptInput.scrollHeight, 160) + 'px';
  promptTagSet.set(node.id, node);
  renderTagChips();
  highlightTaggedNodes();
  closeTagPopup();
  promptInput.focus();
}

function removeTagChip(id) {
  const node = promptTagSet.get(id);
  promptTagSet.delete(id);
  if (node) {
    const escLabel = escapeRegex(node.label);
    const re = new RegExp('@' + escLabel + '(?=\\s|$|@)', 'i');
    promptInput.value = promptInput.value.replace(re, '').replace(/\s{2,}/g, ' ').trim();
    promptInput.style.height = 'auto';
    promptInput.style.height = Math.min(promptInput.scrollHeight, 160) + 'px';
  }
  renderTagChips();
  highlightTaggedNodes();
  promptInput.focus();
}

function clearPromptTags() {
  promptTagSet = new Map();
  promptTags.innerHTML = '';
}

promptTagPopup.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  const item = e.target.closest('.prompt-tag-item');
  if (!item) return;
  selectTagNode(tagMatches[Number(item.dataset.idx)]);
});

promptTagPopup.addEventListener('mousemove', (e) => {
  const item = e.target.closest('.prompt-tag-item');
  if (!item) return;
  const idx = Number(item.dataset.idx);
  if (idx !== tagActiveIdx) {
    tagActiveIdx = idx;
    renderTagPopup();
  }
});

promptTags.addEventListener('click', (e) => {
  const rm = e.target.closest('.tag-remove');
  if (rm) { removeTagChip(rm.closest('.prompt-tag-chip').dataset.id); return; }
  const chip = e.target.closest('.prompt-tag-chip');
  if (chip && nodeMap.has(chip.dataset.id)) selectNode(chip.dataset.id);
});

// ------------------------------------------------------------
// Suggestion chips
// ------------------------------------------------------------
// Recipes live in web/public/data/suggested-prompts.json, keyed by UI
// language ('en-US' / 'zh-TW') and loaded via data.js. Keep every `tags`
// entry a canonical node label so tagSuggestionNodes() can match RAW_NODES
// in both languages.
const RECIPE_GROUPS = SUGGESTED_PROMPTS;
// Language-aware recipe pool: only the recipes for the active UI language.
function currentRecipes() {
  const groups = RECIPE_GROUPS[uiLang] || RECIPE_GROUPS['en-US'];
  return groups.groups.flatMap(g => g.items);
}
const SUGGESTIONS_PER_PAGE = 7;
let suggestionOffset = 0;

function suggestionHTML(q) {
  const tags = (q.tags || []).join(',');
  return `<button class="prompt-suggestion" data-query="${esc(q.q)}" data-tags="${esc(tags)}">&ldquo;${esc(q.q)}&rdquo;</button>`;
}

function pageSuggestionsHTML() {
  const recipes = currentRecipes();
  const items = [];
  for (let i = 0; i < SUGGESTIONS_PER_PAGE; i++) {
    const q = recipes[(suggestionOffset + i) % recipes.length];
    items.push(suggestionHTML(q));
  }
  return `<div class="prompt-suggestion-group">${items.join('')}</div>` +
    `<button class="prompt-suggestion prompt-suggestion-more" data-action="generate">${esc(t('suggestMore'))}</button>`;
}

function appendSuggestions(parent) {
  const div = document.createElement('div');
  div.className = 'prompt-suggestions';
  div.id = 'prompt-suggestions';
  // Initial page starts at offset 0.
  suggestionOffset = 0;
  div.innerHTML = pageSuggestionsHTML();
  parent.appendChild(div);
}

async function generateSuggestions() {
  const suggestionsDiv = document.getElementById('prompt-suggestions');
  if (!suggestionsDiv) return;

  // Advance by a full page, wrapping around the flattened recipe pool.
  const recipes = currentRecipes();
  suggestionOffset = (suggestionOffset + SUGGESTIONS_PER_PAGE) % recipes.length;
  suggestionsDiv.innerHTML = pageSuggestionsHTML();
}

function tagSuggestionNodes(labels) {
  const nodes = [];
  labels.forEach(label => {
    const node = RAW_NODES.find(n => n.label === label);
    if (node && !promptTagSet.has(node.id)) nodes.push(node);
  });
  nodes.forEach(node => promptTagSet.set(node.id, node));
  renderTagChips();
  highlightTaggedNodes();
}

// Delegate clicks on suggestion chips (initial + generated)
promptMessages.addEventListener('click', (e) => {
  const btn = e.target.closest('.prompt-suggestion');
  if (!btn) return;
  if (btn.dataset.action === 'generate') {
    generateSuggestions();
  } else {
    promptInput.value = btn.dataset.query;
    if (btn.dataset.tags) {
      tagSuggestionNodes(btn.dataset.tags.split(',').map(s => s.trim()).filter(Boolean));
    }
    promptInput.focus();
  }
});

function resetPrompt() {
  // Release the server-side session so the next turn starts with clean context.
  if (promptSessionId) {
    const stale = promptSessionId;
    promptSessionId = null;
    resetSession(stale);
  }
  promptActive = false;
  promptMessages.innerHTML = '';
  clearPromptHighlights();
  compareA = [];
  compareB = [];
  renderCompareSets();
  clearPromptTags();
  appendSuggestions(promptMessages);
  promptInput.value = '';
  promptInput.focus();
  refreshActivity();
}

// ------------------------------------------------------------
// Prompt Graph Highlighting
// ------------------------------------------------------------
// matchNodesInText / edgesBetween / computeDatasetStats / bfsFromSets live in
// analytics.js (pure graph math over the active dataset).

// Combine server-declared highlights (nodes + edges) with a local relevance
// match over the user query and assistant response, then return a canonical
// node list (+ the subset of edges among them).
function highlightForMessage(queryText, data) {
  const serverNodes = (data.highlight_nodes || []).filter(Boolean);
  const serverEdges = (data.highlight_edges || []).filter(p => Array.isArray(p) && p.length >= 2);
  const localSet = matchNodesInText(queryText + ' ' + (data.text || ''));
  const allSet = new Set(serverNodes);
  localSet.forEach(id => allSet.add(id));
  const nodes = Array.from(allSet);
  // Edges: start from server edges that still connect present nodes, then add
  // any additional edges among the final (server+local) node set.
  const serverEdgePresent = serverEdges.filter(([a, b]) => allSet.has(a) && allSet.has(b));
  const pairSet = new Set(serverEdgePresent.map(([a, b]) => [a, b].sort().join('::')));
  edgesBetween(nodes).forEach(([a, b]) => {
    const key = [a, b].sort().join('::');
    if (!pairSet.has(key)) {
      pairSet.add(key);
      serverEdgePresent.push([a, b]);
    }
  });
  // Designate a "primary" node to frame the camera on. The server knows best:
  // prefer its explicit `primary_node` when it's in the highlighted set; fall
  // back to the highest-degree node among those we matched/highlighted.
  let primary = data.primary_node && allSet.has(data.primary_node) ? data.primary_node : null;
  if (!primary && nodes.length) {
    primary = nodes.sort((a, b) =>
      (nodeMap.get(b)?.degree || 0) - (nodeMap.get(a)?.degree || 0)
    )[0];
  }
  return { nodes, edges: serverEdgePresent, primary };
}

function highlightPromptNodes(nodeIds, edgePairs, primaryNodeId) {
  // Clear any existing trace or community focus
  if (state.activeTrace) clearTrace();
  if (state.focusedCommunity !== null) clearCommunityFocus();
  if (state.selectedNode) deselectNode();

  promptHighlightedNodes = nodeIds;
  const idSet = new Set(nodeIds);

  applyNodeState(idSet, 1, 0.6, 0.06, 0.03);

  // Highlight edges
  const edgePairSet = new Set(edgePairs.map(p => `${p[0]}::${p[1]}`));
  applyEdgeState(edge => {
    const fwd = `${edge.from}::${edge.to}`;
    const rev = `${edge.to}::${edge.from}`;
    return edgePairSet.has(fwd) || edgePairSet.has(rev);
  }, 0x4E79A7, 0.8, edgeOffColor(), 0.02);

  setLabelVisibility(idSet);

  // Offer node filtering with a count of highlighted nodes
  promptFilterCheckbox.disabled = false;
  applyPromptNodeFilter();
  refreshQuantityPill();

  // Frame the camera on the primary node (if any), positioning it toward the
  // top-left of the viewport so the side panel on the right doesn't cover it.
  // Without a primary node, fall back to centering on the highlighted group.
  const primaryMesh = primaryNodeId ? nodeObjects.get(primaryNodeId) : null;
  const targetPos = primaryMesh
    ? primaryMesh.position.clone()
    : (() => {
        const meshes = nodeIds.map(id => nodeObjects.get(id)).filter(Boolean);
        if (!meshes.length) return null;
        const center = new THREE.Vector3();
        meshes.forEach(m => center.add(m.position));
        return center.divideScalar(meshes.length);
      })();

  if (targetPos) {
    // Camera flies in along the node's direction and looks slightly away from
    // it, so the node sits in the upper-left quadrant of the view. The chat
    // window (nearly full-screen when open) covers the viewport, so keep the
    // target well inside the visible graph area.
    const hasSidebar = window.innerWidth >= 1200;
    const chatOpen = chatPanel.classList.contains('open');
    const dist = 320;
    const direction = targetPos.clone().sub(camera.position);
    if (direction.lengthSq() > 0.0001) direction.normalize();
    const offsetDir = new THREE.Vector3(-1, 1, -1).normalize(); // up-left-forward
    const camPos = targetPos.clone().addScaledVector(direction, dist * 0.4)
      .addScaledVector(offsetDir, dist);
    const lookShift = hasSidebar
      ? (chatOpen ? new THREE.Vector3(0.55, -0.3, 0) : new THREE.Vector3(0.35, -0.3, 0)).normalize()
      : new THREE.Vector3(0, 0, 0);
    const lookTarget = targetPos.clone().addScaledVector(lookShift, dist * 0.4);
    animateCamera(camPos, lookTarget);
  }
}

function clearPromptHighlights() {
  promptHighlightedNodes = [];
  promptFilterCheckbox.checked = false;
  promptFilterCheckbox.disabled = true;
  applyPromptNodeFilter();
  refreshQuantityPill();

  resetVisualState();
}

// Toggle whether the graph is cropped down to just the highlighted nodes (and
// the edges between them). OFF keeps the full graph with the highlight styling;
// ON hides every node/edge outside the highlighted set. Visibility itself is
// computed by core.applyNodeVisibility(), which composes this filter with the
// settings modal's min-degree filter (they share the same visible flags).
function applyPromptNodeFilter() {
  const enabled = !!(promptFilterCheckbox && promptFilterCheckbox.checked);
  const idSet = new Set(promptHighlightedNodes);
  visibilityRegistry.promptEnabled = enabled;
  visibilityRegistry.promptIds = idSet;
  applyNodeVisibility();

  if (promptHighlightedNodes.length) {
    // Whatever the filter state, labels track the highlighted set (visibility
    // of non-highlighted meshes is already handled above).
    setLabelVisibility(idSet);
  } else {
    restoreDefaultLabels();
  }
}

promptFilterCheckbox.addEventListener('change', applyPromptNodeFilter);

// Persistent "Filter (N)" quantity pill: crops the graph to just the highlighted
// nodes + their links. Rendered into the analysis sub-row (left of the language
// toggle) and floats above the detail card, so it stays visible after the card
// closes. Shown whenever nodes are highlighted, hidden otherwise.
function refreshQuantityPill() {
  if (!gqfPillSlot) return;
  const n = promptHighlightedNodes.length;
  if (!n) { gqfPillSlot.innerHTML = ''; return; }
  const active = !!(promptFilterCheckbox && promptFilterCheckbox.checked);
  const icon = `<svg class="gqf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`;
  gqfPillSlot.innerHTML = `<button type="button" class="gqf-btn${active ? ' on' : ''}" title="Clear filter / 清除篩選">${icon} ${esc(t('filterLabel'))} (<span class="gqf-count">${n}</span>)</button>`;
  gqfPillSlot.querySelector('.gqf-btn').addEventListener('click', () => {
    clearPromptHighlights();
  });
}

// ------------------------------------------------------------
// Panel layout: the analysis panel is graph-tools only; the prompt/chat UI
// lives in the floating chat window (see openChatPanel / closeChatPanel).
// ------------------------------------------------------------

// Activity dots: the chat launcher lights when a conversation is active; the
// graph-tools button lights when there are selections (tags / compare sets).
function refreshActivity() {
  const conversationActive = promptActive || promptInput.value.trim().length > 0;
  const graphActive = compareA.length > 0 || compareB.length > 0;
  if (chatActivityDot) chatActivityDot.classList.toggle('on', conversationActive);
  if (analysisActivityDot) analysisActivityDot.classList.toggle('on', graphActive);
}

// Prompt indicator: yellow (pulsing) while the assistant is generating, green
// when idle/ready. Drives the floating chat button's dot.
function setPromptThinking(on) {
  if (chatActivityDot) {
    chatActivityDot.classList.add('on');
    chatActivityDot.classList.toggle('thinking', on);
  }
}

// ------------------------------------------------------------
// Explore mode — instant, offline dataset analytics
// ------------------------------------------------------------
// Metrics come from analytics.computeDatasetStats() (memoized there).
// Compare sets hold entries: {type:'node', id} | {type:'community', cid, label, ids:[]}
let compareA = [];
let compareB = [];

function entryIds(entries) {
  const set = new Set();
  entries.forEach(e => {
    if (e.type === 'node') set.add(e.id);
    else (e.ids || []).forEach(id => set.add(id));
  });
  return set;
}

function atRowHTML(n, kind, s) {
  const zh = TRANSLATIONS[n.label] || '';
  const zhText = zh && zh !== n.label ? ` <span class="zh-mini">${esc(zh)}</span>` : '';
  let meta;
  if (kind === 'btw') {
    const cross = (s && s.crossComm && s.crossComm.get(n.id)) || 1;
    meta = `β ${(n.betweenness || 0).toFixed(3)} · ${cross} comm`;
  } else if (kind === 'pr') {
    meta = `PR ${(n.pagerank || 0).toFixed(4)}`;
  } else {
    meta = `deg ${n.degree}`;
  }
  const ab = `<span class="at-ab">
      <button class="set-a" data-set="a" title="${esc(t('addToSetA'))}">A</button>
      <button class="set-b" data-set="b" title="${esc(t('addToSetB'))}">B</button>
    </span>`;
  return `<li class="at-row" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(n.label)}">
    <span class="at-name">${esc(n.label)}${zhText}</span>
    <span class="at-meta">${meta}</span>${ab}
  </li>`;
}

function exploreFocusNode(id) {
  const ids = Array.from(new Set([id, ...(adjacency.get(id) || []).map(a => a.target)]));
  highlightPromptNodes(ids, edgesBetween(ids), id);
  promptFilterCheckbox.checked = true;
  applyPromptNodeFilter();
}

function exploreIsolate(ids) {
  const primary = ids.slice().sort((a, b) => (nodeMap.get(b)?.degree || 0) - (nodeMap.get(a)?.degree || 0))[0];
  highlightPromptNodes(ids, edgesBetween(ids), primary);
  promptFilterCheckbox.checked = true;
  applyPromptNodeFilter();
}

function renderAnalysisTools() {
  const s = computeDatasetStats();
  const cards = [
    [t('metricNodes'), s.N], [t('metricEdges'), s.E], [t('metricCommunities'), s.communities],
    [t('metricAvgDegree'), s.avgDegree.toFixed(2)], [t('metricDensity'), s.density.toFixed(4)],
    [t('metricGodNodes'), s.godNodes.length],
  ].map(([k, v]) => `<div class="at-card"><div class="v">${typeof v === 'number' ? v.toLocaleString() : v}</div><div class="k">${k}</div></div>`).join('');

  const topoCards = [
    [t('topoMeanClustering'), s.meanClustering.toFixed(3)],
    [t('topoMaxKCore'), s.maxKCore],
    [t('topoMeanPagerank'), s.meanPagerank.toFixed(5)],
    [t('topoMedianDegree'), s.medianDegree],
    [t('topoBridges'), s.bridgingCount],
  ].map(([k, v]) => `<div class="at-card"><div class="v">${typeof v === 'number' ? v.toLocaleString() : v}</div><div class="k">${k}</div></div>`).join('');

  const hubRows = s.hubs.slice(0, 40).map(n => atRowHTML(n, 'deg', s)).join('');
  const prRows = s.pagerankLeaders.slice(0, 40).map(n => atRowHTML(n, 'pr', s)).join('');
  const connRows = s.connectors.slice(0, 32).map(n => atRowHTML(n, 'btw', s)).join('');

  const cohesionMap = (GRAPH_META && GRAPH_META.community_cohesion) || {};
  const commHTML = LEGEND.slice().sort((a, b) => b.count - a.count).map(c => {
    const top = (s.nodesByCommunity.get(c.cid) || [])
      .slice().sort((a, b) => (b.degree || 0) - (a.degree || 0)).slice(0, 3).map(n => n.label).join(', ');
    // Intra-community edge density from the build's Leiden scoring. Values
    // < 0.15 flag "spaghetti" communities whose members are wired mostly
    // elsewhere — the same threshold scripts/04 reports on.
    const coh = cohesionMap[String(c.cid)];
    const loose = typeof coh === 'number' && coh < 0.15;
    return `<div class="at-comm" data-cid="${c.cid}">
      <div class="at-comm-main">
        <span class="sw" style="background:${esc(c.color)}"></span>
        <span class="at-comm-name">${esc(c.label)}</span>
        ${loose ? `<span class="at-comm-loose" title="${esc(t('looseCommunityTitle'))}">${esc(t('looseCommunity'))}</span>` : ''}
      </div>
      <div class="at-comm-foot">
        <span class="at-comm-count">${c.count} · ${esc(top)}</span>
        <span class="at-ab">
          <button class="set-a" data-set="a" title="${esc(t('addCommToSetA'))}">A</button>
          <button class="set-b" data-set="b" title="${esc(t('addCommToSetB'))}">B</button>
        </span>
      </div>
    </div>`;
  }).join('');

  analysisTools.innerHTML = `
    <section class="at-section at-span-12">
      <h4 class="at-h">${esc(t('datasetOverview'))}</h4>
      <div class="at-cards">${cards}</div>
    </section>
    <section class="at-section at-span-5">
      <h4 class="at-h">${esc(t('networkTopology'))}</h4>
      <div class="at-cards">${topoCards}</div>
    </section>
    <div class="at-row-pair">
      <section class="at-section">
        <h4 class="at-h"><span>${esc(t('graphQuery'))}</span><span class="at-note">${esc(t('graphQueryNote'))}</span></h4>
        <select class="at-trace-select" id="trace-select" title="${esc(t('graphQuery'))}">
          <option value="">${esc(t('graphQuerySelect'))}</option>
        </select>
        <div id="trace-summary"></div>
        <div id="trace-routes"></div>
        <div id="trace-key-nodes"></div>
        <button class="at-trace-clear" id="trace-clear">${esc(t('traceClear'))}</button>
      </section>
      <section class="at-section">
        <h4 class="at-h"><span>${esc(t('searchNodes'))}</span><span class="at-note">${esc(t('searchNodesNote'))}</span></h4>
        <input id="at-search-input" type="text" class="at-search-input" placeholder="${esc(t('searchPlaceholder'))}" autocomplete="off">
        <div id="at-search-results" class="at-search-results"></div>
      </section>
    </div>
    <section class="at-section at-span-12">
      <h4 class="at-h">${esc(t('roleExplorer'))}<span class="at-note">${esc(t('roleExplorerNote'))}</span></h4>
      <div id="at-role-chips" class="at-role-chips"></div>
      <div id="at-role-info" class="at-role-info" hidden></div>
      <ul class="at-list" id="at-role-list"></ul>
    </section>
    <section class="at-section at-span-6">
      <h4 class="at-h"><span>${esc(t('surprisingTitle'))}</span><span class="at-note">${esc(t('surprisingNote'))}</span></h4>
      <div id="at-surprise-list" class="at-surprise-list"></div>
    </section>
    <section class="at-section at-span-6">
      <h4 class="at-h"><span>${esc(t('predictedTitle'))}</span></h4>
      <p class="at-hint">${esc(t('predictedNote'))}</p>
      <div id="at-predicted-list" class="at-surprise-list"><div class="at-loading">…</div></div>
    </section>
    <section class="at-section at-span-7">
      <h4 class="at-h"><span>${esc(t('communities'))}</span><span class="at-note">${esc(t('communityNote'))}</span></h4>
      <div class="at-communities">${commHTML}</div>
    </section>
    <section class="at-section at-span-4">
      <h4 class="at-h"><span>${esc(t('topHubs'))}</span><span class="at-note">${esc(t('hubsNote'))}</span></h4>
      <ul class="at-list" id="at-hubs">${hubRows}</ul>
    </section>
    <section class="at-section at-span-4">
      <h4 class="at-h"><span>${esc(t('pagerankLeaders'))}</span><span class="at-note">${esc(t('pagerankNote'))}</span></h4>
      <ul class="at-list" id="at-pagerank">${prRows}</ul>
    </section>
    <section class="at-section at-span-4">
      <h4 class="at-h"><span>${esc(t('connectors'))}</span><span class="at-note">${esc(t('connectorsNote'))}</span></h4>
      <ul class="at-list" id="at-connectors">${connRows}</ul>
    </section>
    <section class="at-section at-span-12">
      <h4 class="at-h">${esc(t('compareTitle'))}</h4>
      <p class="at-hint">${esc(t('compareHint'))}</p>
      <div class="at-compare-sets">
        <div class="at-set a" id="at-set-a"><div class="at-set-label">${esc(t('setALabel'))}</div><div class="at-set-chips"></div></div>
        <div class="at-set b" id="at-set-b"><div class="at-set-label">${esc(t('setBLabel'))}</div><div class="at-set-chips"></div></div>
      </div>
      <div class="at-actions">
        <button class="at-compare-btn" id="at-compare-go" title="${esc(t('runCompareTitle'))}"><span class="enter-ico">&#9166;</span> ${esc(t('runCompare'))}</button>
        <button class="at-prompt-btn" id="at-send-prompt" title="${esc(t('promptBtnTitle'))}">${esc(t('analysisBtn'))}</button>
        <button id="prompt-new" title="${esc(t('resetTitle'))}">${esc(t('reset'))}</button>
      </div>
      <div class="at-compare-result" id="at-compare-result"></div>
    </section>
  `;

  analysisTools.querySelectorAll('.at-row').forEach(bindAtRow);
  analysisTools.querySelectorAll('.at-comm').forEach(el => {
    const cid = Number(el.dataset.cid);
    const ids = (s.nodesByCommunity.get(cid) || []).map(n => n.id);
    const label = el.querySelector('.at-comm-name').textContent;
    el.addEventListener('click', (e) => {
      if (e.target.closest('.at-ab')) return;
      showCommunityInfo(cid, {
        onIsolate: () => {
        if (promptFilterCheckbox.checked && promptHighlightedNodes.length) clearPromptHighlights();
        else exploreIsolate(ids);
      },
      onAddA: () => toggleCompareCommunity(cid, label, ids, 'a'),
      onAddB: () => toggleCompareCommunity(cid, label, ids, 'b'),
      isInA: () => compareA.some(e => e.type === 'community' && e.cid === cid),
      isInB: () => compareB.some(e => e.type === 'community' && e.cid === cid),
      filterCount: ids.length,
      filterActive: () => !!(promptFilterCheckbox.checked && promptHighlightedNodes.length),
    });
    });
    el.querySelectorAll('.at-ab button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompareCommunity(cid, label, ids, btn.dataset.set);
      });
    });
  });
  analysisTools.querySelector('#at-compare-go').addEventListener('click', runCompare);
  analysisTools.querySelector('#at-send-prompt').addEventListener('click', sendSelectionToPrompt);
  analysisTools.querySelector('#prompt-new').addEventListener('click', resetPrompt);
  rebindTracePanel();
  wireAnalysisSearch(s);
  renderCompareSets();
  // Async sections: filled once their lazy artifacts arrive.
  hydrateSurpriseList();
  hydratePredictedList();
  hydrateRoleExplorer(s);
}

// ------------------------------------------------------------
// Surprising Connections (graph build metadata, now in graph-meta.json)
// ------------------------------------------------------------
// metadata.surprising_connections stores LABELS ("NF-kappaB"), not ids.
let labelToId = null;
function ensureLabelToId() {
  if (labelToId) return labelToId;
  labelToId = new Map();
  RAW_NODES.forEach(n => {
    const lower = n.label.toLowerCase();
    if (!labelToId.has(lower)) labelToId.set(lower, n.id);
  });
  return labelToId;
}

function hydrateSurpriseList() {
  const host = document.getElementById('at-surprise-list');
  if (!host) return;
  const items = (GRAPH_META && GRAPH_META.surprising_connections) || [];
  if (!items.length) {
    host.innerHTML = `<div class="at-empty">—</div>`;
    return;
  }
  const l2i = ensureLabelToId();
  host.innerHTML = items.map(sc => {
    const idA = l2i.get(String(sc.source || '').toLowerCase());
    const idB = l2i.get(String(sc.target || '').toLowerCase());
    return `<div class="at-surprise-row" ${idA && idB ? `data-a="${esc(idA)}" data-b="${esc(idB)}"` : ''}>
      <div class="at-surprise-pair">
        <b>${esc(sc.source)}</b> <span class="at-surprise-rel">→[${esc(sc.relation || '')}]→</span> <b>${esc(sc.target)}</b>
      </div>
      <div class="at-surprise-why" title="${esc(sc.why || '')}">${esc(sc.why || '')}</div>
    </div>`;
  }).join('');
  host.querySelectorAll('.at-surprise-row[data-a]').forEach(row => {
    row.addEventListener('click', () => exploreIsolate([row.dataset.a, row.dataset.b]));
  });
}

// ------------------------------------------------------------
// Predicted Connections (scripts/04_link_prediction.py artifact)
// ------------------------------------------------------------
async function hydratePredictedList() {
  const host = document.getElementById('at-predicted-list');
  if (!host) return;
  const lp = await loadLinkPrediction();
  // Re-find the host: a panel reset during the await would orphan this one.
  const live = document.getElementById('at-predicted-list');
  if (!live || host !== live) return;
  const cands = lp.candidates || [];
  if (!cands.length) {
    live.innerHTML = `<div class="at-empty">—</div>`;
    return;
  }
  const maxScore = cands[0].score || 1;
  const crossLabel = esc(t('crossCommFlag'));
  live.innerHTML = cands.slice(0, 40).map(c => `
    <div class="at-surprise-row at-pair-row" data-a="${esc(c.a)}" data-b="${esc(c.b)}">
      <div class="at-surprise-pair">
        <span class="at-name">${esc(c.label_a)} ↔ ${esc(c.label_b)}</span>
        ${c.cross_community ? `<span class="at-comm-loose">${crossLabel}</span>` : ''}
      </div>
      <div class="at-scorebar" title="Adamic-Adar ${c.score}">
        <span style="width:${Math.max(4, Math.round((c.score / maxScore) * 100))}%"></span>
      </div>
      <div class="at-surprise-why">${esc(t('predictedVia'))} [${esc((c.shared_top || []).join(', '))}] · ${c.shared_neighbors}</div>
    </div>`).join('');
  live.querySelectorAll('.at-pair-row').forEach(row => {
    row.addEventListener('click', () => exploreIsolate([row.dataset.a, row.dataset.b]));
  });
}

// ------------------------------------------------------------
// Role Explorer (roles-meta.json: rules + live thresholds + counts)
// ------------------------------------------------------------
const ROLE_CHIP_ORDER = ['Spreader', 'Sink', 'Master regulator', 'Bottleneck', 'Module member', 'Core backbone'];
let activeRole = null;

function fmtThreshold(v) {
  if (typeof v !== 'number') return String(v);
  if (Math.abs(v) >= 100) return v.toFixed(0);
  if (Math.abs(v) >= 1) return v.toFixed(2);
  return v.toExponential(2);
}

async function hydrateRoleExplorer(s) {
  const chipsHost = document.getElementById('at-role-chips');
  if (!chipsHost) return;
  let meta;
  try {
    meta = await loadRolesMeta();
  } catch (e) {
    return;
  }
  const liveChips = document.getElementById('at-role-chips');
  if (!liveChips || chipsHost !== liveChips) return; // panel was reset mid-fetch

  const counts = (meta.summary && meta.summary.role_counts) || {};
  liveChips.innerHTML = ROLE_CHIP_ORDER.map(role =>
    `<button class="at-chip${activeRole === role ? ' active' : ''}" data-role="${esc(role)}">
      ${esc(role)} <span class="at-chip-count">${counts[role] || 0}</span>
    </button>`
  ).join('');

  const info = document.getElementById('at-role-info');
  const list = document.getElementById('at-role-list');

  const renderInfo = (role) => {
    if (!info) return;
    const def = meta.rules && meta.rules[role] && meta.rules[role].definition;
    const th = meta.thresholds || {};
    if (!def) { info.hidden = true; return; }
    info.hidden = false;
    info.innerHTML =
      `<div><span class="key">${esc(t('roleRule'))}:</span> <code>${esc(def)}</code></div>` +
      `<div><span class="key">${esc(t('roleThresholds'))}:</span> ${Object.entries(th)
        .map(([k, v]) => `${esc(k.replace(/_/g, ' '))} <code>${fmtThreshold(v)}</code>`)
        .join(' · ')}</div>`;
  };

  const renderList = (role) => {
    if (!list) return;
    if (!role) { list.innerHTML = ''; return; }
    const members = RAW_NODES
      .filter(n => Array.isArray(n.roles) && n.roles.includes(role))
      .sort((a, b) => (b.pagerank || 0) - (a.pagerank || 0))
      .slice(0, 12);
    list.innerHTML = members.map(n => atRowHTML(n, 'deg', s)).join('');
    list.querySelectorAll('.at-row').forEach(bindAtRow);
  };

  liveChips.querySelectorAll('.at-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      activeRole = activeRole === chip.dataset.role ? null : chip.dataset.role;
      liveChips.querySelectorAll('.at-chip').forEach(c2 =>
        c2.classList.toggle('active', c2.dataset.role === activeRole));
      renderInfo(activeRole);
      renderList(activeRole);
    });
  });

  // Restore state if the panel re-rendered while a role stayed active.
  if (activeRole) { renderInfo(activeRole); renderList(activeRole); }
}

// Shared row binding for the hub / pagerank / connector / search lists.
// Clicking a row opens the node info sheet (with Focus / A / B actions).
function bindAtRow(row) {
  const id = row.dataset.id;
  row.addEventListener('click', (e) => {
    if (e.target.closest('.at-ab')) return;
    openNodeDetail(id);
  });
  // Keyboard path: Enter/Space activate a focused row (the A/B buttons inside
  // are real <button>s and already keyboard-operable).
  row.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if (e.target.closest('.at-ab')) return;
    e.preventDefault();
    openNodeDetail(id);
  });
  row.querySelectorAll('.at-ab button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCompare(id, btn.dataset.set);
    });
  });
}

// Live node search inside the Graph-mode tools (replaces the old sidebar search).
function wireAnalysisSearch(s) {
  const input = analysisTools.querySelector('#at-search-input');
  const results = analysisTools.querySelector('#at-search-results');
  if (!input || !results) return;
  const renderMatches = () => {
    const q = input.value.toLowerCase().trim();
    results.innerHTML = '';
    if (!q) { results.style.display = 'none'; return; }
    const matches = RAW_NODES.filter(n => {
      const labelMatch = n.label.toLowerCase().includes(q);
      const zhTW = TRANSLATIONS[n.label] || '';
      return labelMatch || zhTW.toLowerCase().includes(q);
    }).slice(0, 20);
    if (!matches.length) {
      results.innerHTML = `<div class="at-search-empty">${esc(t('searchEmpty'))}</div>`;
      results.style.display = 'block';
      return;
    }
    results.innerHTML = matches.map(n => atRowHTML(n, 'deg', s)).join('');
    results.querySelectorAll('.at-row').forEach(bindAtRow);
    results.style.display = 'block';
  };
  input.addEventListener('input', renderMatches);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { input.value = ''; results.innerHTML = ''; results.style.display = 'none'; }
  });
}

// Dismiss the search dropdown on outside click — registered once at the module
// level so it isn't re-attached on every renderAnalysisTools rebuild.
document.addEventListener('click', (e) => {
  const results = document.getElementById('at-search-results');
  const input = document.getElementById('at-search-input');
  if (!results || !input) return;
  if (results.style.display !== 'none' && !results.contains(e.target) && e.target !== input) {
    results.style.display = 'none';
  }
});

// Per-node detail popover — a compact card with the node's full metric set
// (all values are already in memory on each node) plus a wiki summary excerpt
// and quick actions (focus / add to Set A or B).
function openNodeDetail(id) {
  const n = nodeMap.get(id);
  if (!n) return;
  // Render the full node card (metrics + source links + context + connections)
  // with Graph-mode quick actions, reusing the shared ui.js renderer that node
  // clicks and trace routes also use.
  showInfo(id, buildNodeDetailActions(id));
}

// Graph-mode quick actions for a node detail sheet: focus/filter and add to
// Set A / B. Registered into ui.js so every open path (panel open, graph node
// click, search dropdown) renders the Filter/A/B row, not just this one.
function buildNodeDetailActions(id) {
  return {
    onFocus: () => {
      if (promptFilterCheckbox.checked && promptHighlightedNodes.length) clearPromptHighlights();
      else exploreFocusNode(id);
      // Keep the detail card open so the focus/filter state stays visible
      // (previously this called hideNodeInfo(), closing the card on every focus).
    },
    onAddA: () => toggleCompare(id, 'a'),
    onAddB: () => toggleCompare(id, 'b'),
    isInA: () => compareA.some(e => e.type === 'node' && e.id === id),
    isInB: () => compareB.some(e => e.type === 'node' && e.id === id),
    filterCount: 1 + (adjacency.get(id) || []).length,
    filterActive: () => !!(promptFilterCheckbox.checked && promptHighlightedNodes.length),
  };
}

setNodeActionBuilder(buildNodeDetailActions);

function closeNodeDetail() {
  const wrap = document.getElementById('at-node-detail');
  if (wrap) wrap.hidden = true;
}

// Build a natural-language analysis prompt from the current Graph selection
// (Compare Sets A/B) and drop it, pre-tagged with @mentions, into the Prompt
// composer. Switching modes also persists the selection in the URL hash.
function entryLabels(entries) {
  const out = [];
  entries.forEach(e => {
    if (e.type === 'node') {
      const n = nodeMap.get(e.id);
      if (n) out.push(n.label);
    } else if (e.label) {
      out.push(e.label);
    }
  });
  return out;
}

function sendSelectionToPrompt() {
  const ids = new Set([...entryIds(compareA), ...entryIds(compareB)]);
  if (!ids.size) {
    showToast(t('promptNeedSelection'));
    return;
  }
  const a = entryLabels(compareA);
  const b = entryLabels(compareB);
  let text;
  if (a.length && b.length) {
    text = `Analyze and compare these two node sets:\nSet A: ${a.map(l => '@' + l).join(', ')}\nSet B: ${b.map(l => '@' + l).join(', ')}\n\nWhat pathways, mechanisms, or biological themes connect or distinguish them?`;
  } else {
    const all = [...a, ...b];
    text = `Analyze the following nodes: ${all.map(l => '@' + l).join(', ')}.\nExplain their roles, interactions, and relevance to longevity and disease.`;
  }
  openChatPanel();
  promptInput.value = text;
  promptInput.style.height = 'auto';
  promptInput.style.height = Math.min(promptInput.scrollHeight, 160) + 'px';
  // Tag the selected nodes so they travel as structured context.
  promptTagSet.clear();
  ids.forEach(id => {
    const n = nodeMap.get(id);
    if (n) promptTagSet.set(id, n);
  });
  renderTagChips();
  promptInput.focus();
  refreshActivity();
}

// Open the floating chat window with `text` pre-loaded into the composer and
// `tags` (@-tagged graph node labels) pinned as structured context. Used by the
// Notes panel to hand a note's transcript to the prompt agent — closes Notes
// first so only the chat window is visible.
export function openPromptComposer(text, tags = []) {
  // Both surfaces are overlays — dismiss Notes before showing the chat.
  const notesPanel = document.getElementById('notes-panel');
  const notesClose = document.getElementById('notes-close');
  if (notesPanel && notesPanel.classList.contains('open') && notesClose) {
    notesClose.click();
  }
  openChatPanel();
  // Hide the suggestion chips only when we're handing over a real message to
  // review; an empty composer keeps them as a starting point.
  if (text) {
    const suggestions = document.getElementById('prompt-suggestions');
    if (suggestions) suggestions.remove();
  }
  promptInput.value = text || '';
  promptInput.style.height = 'auto';
  promptInput.style.height = Math.min(promptInput.scrollHeight, 160) + 'px';
  // Tag the resolved graph nodes so they travel as structured context (and get
  // highlighted on the graph).
  promptTagSet.clear();
  (tags || []).forEach(label => {
    const node = RAW_NODES.find(n => n.label === label);
    if (node && !promptTagSet.has(node.id)) promptTagSet.set(node.id, node);
  });
  renderTagChips();
  highlightTaggedNodes();
  promptInput.focus();
  refreshActivity();
}

function toggleCompare(id, set) {
  const arr = set === 'a' ? compareA : compareB;
  const other = set === 'a' ? compareB : compareA;
  const i = arr.findIndex(e => e.type === 'node' && e.id === id);
  if (i >= 0) arr.splice(i, 1);
  else {
    arr.push({ type: 'node', id });
    // Radio behavior: a node can only live in one set at a time.
    const o = other.findIndex(e => e.type === 'node' && e.id === id);
    if (o >= 0) other.splice(o, 1);
  }
  renderCompareSets();
}

function toggleCompareCommunity(cid, label, ids, set) {
  const arr = set === 'a' ? compareA : compareB;
  const other = set === 'a' ? compareB : compareA;
  const i = arr.findIndex(e => e.type === 'community' && e.cid === cid);
  if (i >= 0) arr.splice(i, 1);
  else {
    arr.push({ type: 'community', cid, label, ids: ids.slice() });
    // Radio behavior: a community can only live in one set at a time.
    const o = other.findIndex(e => e.type === 'community' && e.cid === cid);
    if (o >= 0) other.splice(o, 1);
  }
  renderCompareSets();
}

function removeEntry(set, idx) {
  const arr = set === 'a' ? compareA : compareB;
  if (idx >= 0 && idx < arr.length) arr.splice(idx, 1);
  renderCompareSets();
}

function renderCompareSets() {
  const fill = (elId, arr, cls) => {
    const el = document.getElementById(elId);
    if (!el) return;
    el.querySelector('.at-set-chips').innerHTML = arr.map((e, idx) => {
      let label, sub = '';
      if (e.type === 'node') { const n = nodeMap.get(e.id); label = n ? n.label : e.id; }
      else { label = e.label; sub = ` (${e.ids.length})`; }
      return `<span class="at-set-chip" data-idx="${idx}" data-set="${cls}">${esc(label)}${esc(sub)}<button data-idx="${idx}" data-set="${cls}">&times;</button></span>`;
    }).join('');
    el.querySelectorAll('.at-set-chip button').forEach(b => b.addEventListener('click', (e) => {
      e.stopPropagation();
      removeEntry(b.dataset.set, Number(b.dataset.idx));
    }));
  };
  fill('at-set-a', compareA, 'a');
  fill('at-set-b', compareB, 'b');
  const idsA = entryIds(compareA), idsB = entryIds(compareB);
  document.querySelectorAll('.at-row').forEach(row => {
    const id = row.dataset.id;
    const a = row.querySelector('.set-a'); if (a) a.classList.toggle('on', idsA.has(id));
    const b = row.querySelector('.set-b'); if (b) b.classList.toggle('on', idsB.has(id));
  });
  document.querySelectorAll('.at-comm').forEach(el => {
    const cid = Number(el.dataset.cid);
    const a = el.querySelector('.set-a'); if (a) a.classList.toggle('on', compareA.some(e => e.type === 'community' && e.cid === cid));
    const b = el.querySelector('.set-b'); if (b) b.classList.toggle('on', compareB.some(e => e.type === 'community' && e.cid === cid));
  });
  const hasSelection = compareA.length > 0 || compareB.length > 0;
  const atPromptBtn = document.getElementById('at-send-prompt');
  if (atPromptBtn) atPromptBtn.disabled = !hasSelection;
  refreshActivity();
}

function runCompare() {
  const res = document.getElementById('at-compare-result');
  const idsA = entryIds(compareA), idsB = entryIds(compareB);
  if (!idsA.size || !idsB.size) {
    res.innerHTML = `<span style="color:#E4575E">${esc(t('compareEmpty'))}</span>`;
    return;
  }
  const nb = (id) => new Set((adjacency.get(id) || []).map(a => a.target));
  const nA = new Set(); idsA.forEach(id => { nA.add(id); nb(id).forEach(x => nA.add(x)); });
  const nB = new Set(); idsB.forEach(id => { nB.add(id); nb(id).forEach(x => nB.add(x)); });
  const inter = new Set([...nA].filter(x => nB.has(x)));
  const uni = new Set([...nA, ...nB]);
  const jaccard = uni.size ? inter.size / uni.size : 0;

  const dist = bfsFromSets([...idsA]);
  const pairs = [];
  idsB.forEach(b => { if (dist.distance.has(b)) pairs.push([dist.from.get(b), b, dist.distance.get(b)]); });
  pairs.sort((x, y) => x[2] - y[2]);
  const topPairs = pairs.slice(0, 5);

  const highlightIds = Array.from(new Set([...idsA, ...idsB, ...inter]));
  const primary = idsA.size ? [...idsA][0] : null;
  highlightPromptNodes(highlightIds, edgesBetween(highlightIds), primary);
  promptFilterCheckbox.checked = false;
  applyPromptNodeFilter();

  res.innerHTML = `
    <div>${esc(t('compareSetA'))}: <span class="at-metric">${idsA.size}</span> ${esc(t('metricNodes'))} · ${esc(t('compareSetB'))}: <span class="at-metric">${idsB.size}</span> ${esc(t('metricNodes'))}</div>
    <div>${esc(t('compareNeighborhoodA'))}: <span class="at-metric">${nA.size}</span> · ${esc(t('compareNeighborhoodB'))}: <span class="at-metric">${nB.size}</span></div>
    <div>${esc(t('compareSharedNeighborhood'))}: <span class="at-metric">${inter.size}</span> · ${esc(t('compareJaccard'))}: <span class="at-metric">${jaccard.toFixed(3)}</span></div>
    ${topPairs.length
      ? `<table><thead><tr><th>${esc(t('compareShortestPath'))}</th><th>${esc(t('compareSteps'))}</th></tr></thead><tbody>${topPairs.map(p => `<tr><td>${esc(nodeMap.get(p[0])?.label || p[0])} → ${esc(nodeMap.get(p[1])?.label || p[1])}</td><td>${p[2]}</td></tr>`).join('')}</tbody></table>`
      : `<div>${esc(t('compareNoPath'))}</div>`}
  `;
}

// ------------------------------------------------------------
// Init
// ------------------------------------------------------------
// Render the graph analytics tools so they're ready when the panel opens, and
// seed the chat window with the suggestion chips.
state.analysisMode = 'graph';
state.suppressHashUpdate = true;
renderAnalysisTools();
applyUiLang(uiLang);
state.suppressHashUpdate = false;
appendSuggestions(promptMessages);
refreshActivity();
