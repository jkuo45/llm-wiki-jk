// Chat interface: chat panel, suggestion chips, wiki entity tooltips, wiki modal,
// and graph highlighting for chat turns.

import * as THREE from 'three';

import { RAW_NODES, RAW_EDGES, TRANSLATIONS, WIKI_CONTEXT, nodeMap, LEGEND, adjacency } from './data.js';
import { state } from './state.js';
import {
  camera, nodeObjects, nodeMeshes, edgeObjects, labelObjects, animateCamera,
  applyNodeState, applyEdgeState, setLabelVisibility, resetVisualState,
  restoreDefaultLabels,
} from './core.js';
import { clearTrace, clearCommunityFocus, setActiveWindow, exportGraphPNG } from './ui.js';
import { deselectNode, selectNode } from './interaction.js';
import { esc, renderMarkdown, wikiExcerpt, escapeRegex, labelBoundaryRegex } from './markdown.js';
import { updateHash } from './routing.js';

// ------------------------------------------------------------
// Elements + API endpoints
// ------------------------------------------------------------
const chatBtn = document.getElementById('btn-chat');
const chatActivityDot = document.getElementById('chat-activity-dot');
const chatPanel = document.getElementById('chat-panel');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatNewBtn = document.getElementById('chat-new');
const chatCloseBtn = document.getElementById('chat-close');
const chatFilterToggle = document.getElementById('chat-filter-toggle');
const chatFilterCheckbox = document.getElementById('chat-filter-nodes');
const chatFilterCount = document.getElementById('chat-filter-count');
const chatModes = document.getElementById('chat-modes');
const graphifyCheckbox = document.getElementById('graphify-checkbox');
const graphifyOps = document.getElementById('graphify-ops');
const chatTagPopup = document.getElementById('chat-tag-popup');
const chatTags = document.getElementById('chat-tags');
const chatModeSwitch = document.getElementById('chat-mode-switch');
const analysisTools = document.getElementById('analysis-tools');

const API_BASE = (window.GRAPH_API_BASE || 'https://api.johnnykuo.com').replace(/\/$/, '');
const INTENT_API = `${API_BASE}/intent`;
const EXECUTE_STREAM_API = `${API_BASE}/execute/stream`;
const SESSION_RESET_API = `${API_BASE}/session/reset`;

let chatOpen = false;
let chatBusy = false;
let chatHighlightedNodes = [];
let chatHighlightedEdges = [];
// In-memory conversation history (session only; intentionally NOT persisted to
// localStorage/sessionStorage so a refresh clears it). Rendered in the panel and
// kept as a fallback; conversational context now lives server-side, keyed by
// chatSessionId.
let chatHistory = [];
// opencode session id, assigned by the server on the first turn. Sending it back
// keeps follow-up questions in the same conversation without re-uploading the
// whole transcript on every request.
let chatSessionId = null;

// ------------------------------------------------------------
// Graphify routing switch
// ------------------------------------------------------------
// Checked (default): every turn is routed through a graphify graph operation
// (explain / path / query / analyze). Unchecked: the turn is answered from the
// wiki by the chat model, even if the text happens to say "graphify".
// The switch resets to on with the rest of the session state on reload.
const OP_TEMPLATES = {
  query: { text: 'Query ', caret: null },
  explain: { text: 'Explain ', caret: null },
  path: { text: 'Path from  to ', caret: 10 },
};

function graphifyEnabled() {
  return !!(graphifyCheckbox && graphifyCheckbox.checked);
}

function syncGraphifyUI() {
  const on = graphifyEnabled();
  chatModes.classList.toggle('graphify-off', !on);
  chatInput.placeholder = on
    ? 'Analyze the graph — type @ to tag nodes (e.g. @NAD+ @SIRT1)'
    : 'Analyze the wiki — type @ to tag nodes (e.g. @NAD+ @SIRT1)';
}

graphifyCheckbox.addEventListener('change', () => {
  syncGraphifyUI();
  chatInput.focus();
});

// Op chips prefill an operation template so the three graph ops stay discoverable.
graphifyOps.addEventListener('click', (e) => {
  const btn = e.target.closest('.graphify-op');
  if (!btn) return;
  const tpl = OP_TEMPLATES[btn.dataset.op];
  if (!tpl) return;
  chatInput.value = tpl.text;
  chatInput.focus();
  const pos = tpl.caret === null ? tpl.text.length : tpl.caret;
  chatInput.setSelectionRange(pos, pos);
});

syncGraphifyUI();

// Message + close icons for the floating analysis button (SVG, stroke style like
// the other inline icons so they inherit the button's text color). The icon is
// a static chart/diagram glyph; the button simply toggles the analysis panel.

chatBtn.addEventListener('click', () => {
  chatOpen = !chatOpen;
  chatPanel.classList.toggle('open', chatOpen);
  chatBtn.classList.toggle('open', chatOpen);
  if (!chatOpen) setActiveWindow(null);
  if (chatOpen) chatInput.focus();
  syncChatPanelKeyboard();
  state.analysisOpen = chatOpen;
  state.analysisMode = panelMode;
  updateHash();
});

// Fix for mobile keyboards: on iOS (and older Android) the virtual keyboard
// overlays fixed elements instead of resizing the layout viewport, so the
// composer's send button gets buried under it. `visualViewport` reports the
// visible area above the keyboard — raise the panel's bottom edge to match.
// Android with `interactive-widget=resizes-content` already shrinks
// `innerHeight`, so the offset self-corrects to zero there.
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

function closeChat() {
  chatOpen = false;
  chatPanel.classList.remove('open');
  chatBtn.classList.remove('open');
  chatBtn.innerHTML = MSG_ICON;
  setActiveWindow(null);
  state.analysisOpen = false;
  updateHash();
}

chatCloseBtn.addEventListener('click', closeChat);

// ------------------------------------------------------------
// Message rendering
// ------------------------------------------------------------
function sanitizeChatInput(text) {
  if (!text || typeof text !== 'string') return '';
  let t = text.replace(/<[^>]+>/g, '');
  t = t.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '');
  t = t.replace(/\s+/g, ' ').trim();
  return t.slice(0, 500);
}

function addChatMessage(text, type, badge) {
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  if (type === 'bot') {
    let html = '';
    if (badge) html += `<span class="chat-badge ${badge}">${badge}</span>`;
    html += formatBotMessage(text);
    div.innerHTML = html;
    addCopyButton(div, text);
  } else {
    div.textContent = text;
  }
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

const COPY_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

function addCopyButton(div, text) {
  const btn = document.createElement('button');
  btn.className = 'chat-copy-btn';
  btn.title = 'Copy to clipboard / 複製';
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
      btn.title = 'Copied / 已複製';
      btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = COPY_ICON;
        btn.title = 'Copy to clipboard / 複製';
      }, 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  });
  div.appendChild(btn);
}

// Map wiki file basename -> wiki-context entry, so chat [[entity]] links can
// show a brief excerpt on hover.
const wikiCtxByFile = new Map();
Object.values(WIKI_CONTEXT).forEach(v => {
  if (v && v.wiki_path) {
    const base = String(v.wiki_path).split('/').pop().replace(/\.md$/i, '');
    if (base && !wikiCtxByFile.has(base)) wikiCtxByFile.set(base, v);
  }
});

function formatBotMessage(text) {
  let html = esc(text);
  // Bold: **text**
  html = html.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  // Inline code: `text`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Wiki links: [[Name]] or [[Name|Display]] -> open wiki modal on click
  html = html.replace(/\[\[([^\]\|]+?)(?:\|([^\]]+?))?\]\]/g, (m, name, display) => {
    const wikiBase = name.trim().replace(/\.md$/i, '');
    if (!wikiBase || !wikiCtxByFile.has(wikiBase)) return esc(m);
    const label = (display || name).trim();
    return `<span class="chat-entity-link" data-wiki="${esc(wikiBase)}" style="color:#7cb3d4;text-decoration:underline;cursor:pointer">${esc(label)}</span>`;
  });
  // Node links: make node names clickable in highlight results
  html = html.replace(/^(\d+)\.\s/gm, '<span style="color:#666">$1.</span> ');
  // Convert newlines
  html = html.replace(/\n/g, '<br>');
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
  const ctx = wikiCtxByFile.get(anchor.dataset.wiki);
  const excerpt = ctx && ctx.description ? wikiExcerpt(ctx.description) : '';
  if (!excerpt) return;
  const title = anchor.textContent.trim() || (anchor.dataset.wiki || '');
  wikiTooltipEl.innerHTML = `<b>${esc(title)}</b>${esc(excerpt)}<br><span style="color:#666;font-size:11px;margin-top:4px;display:inline-block">Click to expand</span>`;
  wikiTooltipVisible = true;
  wikiTooltipEl.classList.add('visible');
  positionWikiTooltip(anchor);
}

function hideWikiTooltip() {
  if (!wikiTooltipVisible) return;
  wikiTooltipVisible = false;
  wikiTooltipEl.classList.remove('visible');
}

chatMessages.addEventListener('mouseover', (e) => {
  const anchor = e.target.closest('.chat-entity-link');
  if (!anchor || !anchor.dataset.wiki) { hideWikiTooltip(); return; }
  showWikiTooltip(anchor);
});

chatMessages.addEventListener('mousemove', (e) => {
  if (!wikiTooltipVisible) return;
  const anchor = e.target.closest('.chat-entity-link');
  if (anchor) positionWikiTooltip(anchor);
});

chatMessages.addEventListener('mouseleave', hideWikiTooltip);
chatMessages.addEventListener('scroll', hideWikiTooltip, { passive: true });

// ------------------------------------------------------------
// Wiki Modal
// ------------------------------------------------------------
const wikiModalOverlay = document.getElementById('wiki-modal-overlay');
const wikiModalTitle = document.getElementById('wiki-modal-title');
const wikiModalBody = document.getElementById('wiki-modal-body');
const wikiModalLink = document.getElementById('wiki-modal-link');
const wikiModalClose = document.getElementById('wiki-modal-close');

function openWikiModal(wikiKey) {
  const ctx = wikiCtxByFile.get(wikiKey);
  if (!ctx) return;
  const title = ctx.wiki_path ? ctx.wiki_path.split('/').pop().replace(/\.md$/i, '') : wikiKey.replace(/_/g, ' ');
  wikiModalTitle.textContent = title;
  wikiModalBody.innerHTML = renderMarkdown(ctx.description || 'No content available.');
  wikiModalLink.href = ctx.wiki_url || '#';
  wikiModalOverlay.classList.add('visible');
  hideWikiTooltip();
}

function closeWikiModal() {
  wikiModalOverlay.classList.remove('visible');
}

wikiModalClose.addEventListener('click', closeWikiModal);
wikiModalOverlay.addEventListener('click', (e) => {
  if (e.target === wikiModalOverlay) closeWikiModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (wikiModalOverlay.classList.contains('visible')) { closeWikiModal(); return; }
  if (chatPanel.classList.contains('open')) { closeChat(); return; }
  const datasetPanelEl = document.getElementById('dataset-panel');
  if (datasetPanelEl && datasetPanelEl.classList.contains('visible')) {
    datasetPanelEl.classList.remove('visible');
    setActiveWindow(null);
  }
});

// Delegate click on chat entity links to open modal
chatMessages.addEventListener('click', (e) => {
  const anchor = e.target.closest('.chat-entity-link');
  if (!anchor || !anchor.dataset.wiki) return;
  e.preventDefault();
  e.stopPropagation();
  openWikiModal(anchor.dataset.wiki);
});

// ------------------------------------------------------------
// Send / receive chat
// ------------------------------------------------------------
async function sendChatMessage() {
  const raw = chatInput.value;
  const clean = sanitizeChatInput(raw);
  if (!clean || chatBusy) return;

  // Explicitly tagged nodes travel with the request as server-side context.
  const tags = Array.from(chatTagSet.values()).map(n => n.label);

  chatBusy = true;
  chatSend.disabled = true;
  chatInput.value = '';
  clearChatTags();

  // Hide suggestions after first message
  const suggestions = document.getElementById('chat-suggestions');
  if (suggestions) suggestions.remove();

  addChatMessage(clean, 'user');
  chatHistory.push({ role: 'user', content: clean });
  refreshActivity();

  const typingDiv = addChatMessage('Thinking', 'typing');
  typingDiv.innerHTML = '<span id="typing-label">Thinking</span><span id="typing-elapsed" style="color:#666;font-size:12px;min-width:42px;display:inline-block"></span><span class="typing-dots"><span></span><span></span><span></span></span>';

  const typingStart = performance.now();
  const typingElapsed = typingDiv.querySelector('#typing-elapsed');
  let typingTimerId = setInterval(() => {
    typingElapsed.textContent = `(${((performance.now() - typingStart) / 1000).toFixed(1)}s)`;
  }, 100);

  try {
    // Phase 1: Parse intent
    const intentResp = await fetch(INTENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: clean,
        session_id: chatSessionId,
        graphify: graphifyEnabled(),
        tags,
      }),
    });

    if (!intentResp.ok) {
      chatMessages.removeChild(typingDiv);
      chatHistory.pop();
      addChatMessage('Server error', 'error');
      return;
    }

    const intentData = await intentResp.json();

    // Server-side conversation handle; reused for every subsequent turn.
    if (intentData.session_id) chatSessionId = intentData.session_id;

    // Update indicator only when a translation pass will actually run. Chat
    // turns answer in the user's language natively, so no translation step.
    const willTranslate = intentData.lang && intentData.lang !== 'en'
      && ['query', 'explain', 'path', 'analyze'].includes(intentData.intent);
    if (willTranslate) {
      typingDiv.querySelector('#typing-label').textContent = 'Translating';
    }

    if (intentData.intent === 'chat' && intentData.message) {
      // Streaming path for chat intent — streams thinking + answer
      await streamChatResponse(intentData, typingDiv, typingStart, typingTimerId, clean, tags);
      typingTimerId = null; // consumed by streamChatResponse
    } else {
      // Single-event path for graph ops / greeting (still uses streaming endpoint)
      await streamGraphOp(intentData, typingDiv, typingStart, typingTimerId, clean, tags);
      typingTimerId = null;
    }
  } catch (e) {
    if (typingDiv.parentNode) chatMessages.removeChild(typingDiv);
    chatHistory.pop();
    addChatMessage('Could not reach the chat server.', 'error');
  } finally {
    if (typingTimerId) { clearInterval(typingTimerId); typingTimerId = null; }
    chatBusy = false;
    chatSend.disabled = false;
    chatInput.focus();
  }
}

async function streamChatResponse(intentData, typingDiv, typingStart, typingTimerId, clean, tags) {
  const labelEl = typingDiv.querySelector('#typing-label');
  labelEl.textContent = 'Thinking';

  // Add collapsible thinking trace container
  const traceDiv = document.createElement('div');
  traceDiv.className = 'chat-thinking-trace';
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
    const resp = await fetch(EXECUTE_STREAM_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: intentData.intent,
        message: intentData.message,
        session_id: chatSessionId,
        tags,
      }),
    });

    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status}`);
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let sseBuf = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      sseBuf += decoder.decode(value, { stream: true });
      const lines = sseBuf.split('\n');
      sseBuf = lines.pop(); // keep incomplete line

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const payload = line.slice(6);
        if (!payload.trim()) continue;

        let evt;
        try {
          evt = JSON.parse(payload);
        } catch {
          continue;
        }

        if (evt.type === 'reasoning' && evt.text) {
          reasoningBuf += evt.text;
          labelEl.textContent = 'Thinking';
          if (!traceContent) {
            traceDiv.style.display = 'block';
            traceDiv.innerHTML = '<span class="chat-trace-toggle" style="cursor:pointer;color:#999;font-size:11px;user-select:none;display:block;width:fit-content">&#9654; Thinking trace</span>'
              + '<div class="chat-trace-content" style="display:none;margin-top:4px;padding:6px 8px;background:rgba(255,255,255,0.04);border-radius:4px;font-size:12px;color:#888;max-height:120px;overflow-y:auto;white-space:pre-wrap"><div></div></div>';
            traceContent = traceDiv.querySelector('.chat-trace-content');
            traceDiv.querySelector('.chat-trace-toggle').addEventListener('click', () => {
              traceOpen = !traceOpen;
              traceContent.style.display = traceOpen ? 'block' : 'none';
              if (traceOpen) {
                traceContent.scrollTop = traceContent.scrollHeight;
                chatMessages.scrollTop = chatMessages.scrollHeight;
              }
            });
          }
          traceContent.textContent = reasoningBuf;
          if (traceOpen) {
            traceContent.scrollTop = traceContent.scrollHeight;
            chatMessages.scrollTop = chatMessages.scrollHeight;
          }
        } else if (evt.type === 'text' && evt.text) {
          textBuf += evt.text;
          labelEl.textContent = 'Answering';
        } else if (evt.type === 'highlight') {
          serverHighlightNodes = evt.highlight_nodes || [];
          serverHighlightEdges = evt.highlight_edges || [];
        } else if (evt.type === 'done') {
          finalElapsed = evt.elapsed || ((performance.now() - typingStart) / 1000);
        } else if (evt.type === 'error') {
          throw new Error(evt.text || 'Stream error');
        }
      }
    }
  } catch (e) {
    if (typingDiv.parentNode) chatMessages.removeChild(typingDiv);
    chatHistory.pop();
    addChatMessage('Stream error. Please try again.', 'error');
    if (typingTimerId) clearInterval(typingTimerId);
    throw e; // re-throw so finally in caller handles cleanup
  }

  // Remove typing indicator
  if (typingDiv.parentNode) chatMessages.removeChild(typingDiv);
  if (typingTimerId) clearInterval(typingTimerId);

  const responseText = textBuf || 'No response received.';
  const badge = 'wiki';

  // Build final message with elapsed time + optional thinking trace
  const div = document.createElement('div');
  div.className = 'chat-msg bot';

  let html = '';
  if (badge) html += `<span class="chat-badge ${badge}">${badge}</span>`;

  // Elapsed time badge
  const secs = finalElapsed > 0 ? finalElapsed : ((performance.now() - typingStart) / 1000);
  html += `<span class="chat-elapsed" title="Thinking time">${secs.toFixed(1)}s</span>`;

  // Thinking trace (collapsible, if any)
  if (reasoningBuf) {
    html += '<details class="chat-thinking-details">'
      + '<summary class="chat-thinking-summary">Thinking trace</summary>'
      + '<div class="chat-thinking-body">' + esc(reasoningBuf) + '</div>'
      + '</details>';
  }

  html += formatBotMessage(responseText);
  div.innerHTML = html;
  addCopyButton(div, responseText);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  chatHistory.push({ role: 'assistant', content: responseText });

  // Highlight relevant nodes
  if (responseText) {
    const highlighted = highlightForMessage(clean, { text: responseText, highlight_nodes: serverHighlightNodes, highlight_edges: serverHighlightEdges });
    if (highlighted.nodes.length > 0) {
      highlightChatNodes(highlighted.nodes, highlighted.edges, highlighted.primary);
    }
  }
}

async function streamGraphOp(intentData, typingDiv, typingStart, typingTimerId, clean, tags) {
  let textBuf = '';
  let highlightNodes = [];
  let highlightEdges = [];
  let primaryNode = null;
  let analysisData = null;

  try {
    const resp = await fetch(EXECUTE_STREAM_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: intentData.intent,
        lang: intentData.lang,
        question: intentData.question,
        node: intentData.node,
        from_node: intentData.from_node,
        to_node: intentData.to_node,
        nodes: intentData.nodes,
        analysis: intentData.analysis,
        message: intentData.message || clean,
        session_id: chatSessionId,
        tags,
      }),
    });

    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let sseBuf = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      sseBuf += decoder.decode(value, { stream: true });
      const lines = sseBuf.split('\n');
      sseBuf = lines.pop();
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        let evt;
        try { evt = JSON.parse(line.slice(6)); } catch { continue; }
        if (evt.type === 'text') {
          textBuf = evt.text || '';
          highlightNodes = evt.highlight_nodes || [];
          highlightEdges = evt.highlight_edges || [];
          primaryNode = evt.primary_node || null;
          analysisData = evt.analysis_data || null;
        }
      }
    }
  } catch (e) {
    if (typingDiv.parentNode) chatMessages.removeChild(typingDiv);
    chatHistory.pop();
    addChatMessage('Server error', 'error');
    if (typingTimerId) clearInterval(typingTimerId);
    return;
  }

  if (typingDiv.parentNode) chatMessages.removeChild(typingDiv);
  if (typingTimerId) clearInterval(typingTimerId);

  // Badge names the graph op that produced the answer (explain / path / analyze / query).
  const op = ['query', 'explain', 'path', 'analyze'].includes(intentData.intent)
    ? intentData.intent : null;
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  let html = `<span class="chat-badge graphify">${op ? `graphify · ${op}` : 'graphify'}</span>`;
  const secs = ((performance.now() - typingStart) / 1000);
  html += `<span class="chat-elapsed" title="Thinking time">${secs.toFixed(1)}s</span>`;
  html += formatBotMessage(textBuf);
  div.innerHTML = html;
  addCopyButton(div, textBuf);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  chatHistory.push({ role: 'assistant', content: textBuf });

  if (textBuf || highlightNodes.length) {
    const highlighted = highlightForMessage(clean, { text: textBuf, highlight_nodes: highlightNodes, highlight_edges: highlightEdges, primary_node: primaryNode });
    if (highlighted.nodes.length > 0) {
      highlightChatNodes(highlighted.nodes, highlighted.edges, highlighted.primary);
    }
  }

  // Custom node analysis: offer JSON + PNG downloads of the computed result.
  if (intentData.intent === 'analyze' && analysisData) {
    addAnalysisActions(div, analysisData);
  }
}

// Build the download row for a custom node analysis message.
function addAnalysisActions(div, data, fallbackLabel) {
  const primaryLabel =
    (data && data.nodes && data.nodes[0] && data.nodes[0].label) || fallbackLabel || 'analysis';
  const safe = String(primaryLabel).replace(/[^\w\u4e00-\u9fff\-]+/g, '_').slice(0, 60);

  const row = document.createElement('div');
  row.className = 'chat-analysis-actions';

  const jsonBtn = document.createElement('button');
  jsonBtn.className = 'chat-analysis-btn';
  jsonBtn.type = 'button';
  jsonBtn.textContent = '⬇ JSON';
  jsonBtn.title = 'Download analysis as JSON / 下載 JSON';
  jsonBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.download = `analysis-${safe}.json`;
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
  });

  const pngBtn = document.createElement('button');
  pngBtn.className = 'chat-analysis-btn';
  pngBtn.type = 'button';
  pngBtn.textContent = '⬇ PNG';
  pngBtn.title = 'Download highlighted subgraph as PNG / 下載 PNG';
  pngBtn.addEventListener('click', () => {
    exportGraphPNG(`analysis-${safe}.png`);
  });

  row.appendChild(jsonBtn);
  row.appendChild(pngBtn);
  div.appendChild(row);
}

chatSend.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => {
  // @-tag popup keyboard navigation takes priority over send
  if (chatTagPopup.classList.contains('visible') && tagMatches.length) {
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
    sendChatMessage();
  }
});

// Auto-resize textarea + @-tag popup on input
chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 160) + 'px';
  updateTagPopup();
  refreshActivity();
});

// ------------------------------------------------------------
// @-tag node autocomplete
// ------------------------------------------------------------
let chatTagSet = new Map(); // nodeId -> node data for currently tagged nodes
let tagMatches = [];
let tagActiveIdx = -1;

// Find the "@token" being typed before the caret. Only "@" preceded by
// whitespace/start-of-input counts (so emails/words like "name@host" don't
// trigger the picker).
function getTagToken() {
  const val = chatInput.value;
  const caret = chatInput.selectionStart;
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
  chatTagPopup.innerHTML = tagMatches.map((n, i) => {
    const zh = TRANSLATIONS[n.label] || '';
    const zhText = zh && zh !== n.label ? ` <span style="color:#888;font-size:11px">${esc(zh)}</span>` : '';
    return `<div class="chat-tag-item${i === tagActiveIdx ? ' active' : ''}" data-idx="${i}">
      <span class="tag-kind">@</span>
      <span>${esc(n.label)}${zhText}</span>
      <span class="tag-degree">${n.degree}</span>
    </div>`;
  }).join('');
  chatTagPopup.classList.add('visible');
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
  chatTagPopup.classList.remove('visible');
  chatTagPopup.innerHTML = '';
}

function renderTagChips() {
  chatTags.innerHTML = '';
  chatTagSet.forEach(node => {
    const chip = document.createElement('span');
    chip.className = 'chat-tag-chip';
    chip.dataset.id = node.id;
    const labelSpan = document.createElement('span');
    labelSpan.className = 'tag-label';
    labelSpan.textContent = '@' + node.label;
    const rm = document.createElement('button');
    rm.type = 'button';
    rm.className = 'tag-remove';
    rm.title = 'Remove tag / 移除標記';
    rm.textContent = '×';
    chip.appendChild(labelSpan);
    chip.appendChild(rm);
    chatTags.appendChild(chip);
  });
  refreshActivity();
}

function highlightTaggedNodes() {
  const ids = Array.from(chatTagSet.keys());
  if (!ids.length) { clearChatHighlights(); return; }
  const edges = edgesBetween(ids);
  highlightChatNodes(ids, edges, ids[0]);
}

function selectTagNode(node) {
  const token = getTagToken();
  if (!token) return;
  const val = chatInput.value;
  const before = val.slice(0, token.atIdx);
  const after = val.slice(chatInput.selectionStart);
  const insertion = '@' + node.label;
  chatInput.value = before + insertion + ' ' + after;
  const caret = (before + insertion + ' ').length;
  chatInput.setSelectionRange(caret, caret);
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 160) + 'px';
  chatTagSet.set(node.id, node);
  renderTagChips();
  highlightTaggedNodes();
  closeTagPopup();
  chatInput.focus();
}

function removeTagChip(id) {
  const node = chatTagSet.get(id);
  chatTagSet.delete(id);
  if (node) {
    const escLabel = escapeRegex(node.label);
    const re = new RegExp('@' + escLabel + '(?=\\s|$|@)', 'i');
    chatInput.value = chatInput.value.replace(re, '').replace(/\s{2,}/g, ' ').trim();
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 160) + 'px';
  }
  renderTagChips();
  highlightTaggedNodes();
  chatInput.focus();
}

function clearChatTags() {
  chatTagSet = new Map();
  chatTags.innerHTML = '';
}

chatTagPopup.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  const item = e.target.closest('.chat-tag-item');
  if (!item) return;
  selectTagNode(tagMatches[Number(item.dataset.idx)]);
});

chatTagPopup.addEventListener('mousemove', (e) => {
  const item = e.target.closest('.chat-tag-item');
  if (!item) return;
  const idx = Number(item.dataset.idx);
  if (idx !== tagActiveIdx) {
    tagActiveIdx = idx;
    renderTagPopup();
  }
});

chatTags.addEventListener('click', (e) => {
  const rm = e.target.closest('.tag-remove');
  if (rm) { removeTagChip(rm.closest('.chat-tag-chip').dataset.id); return; }
  const chip = e.target.closest('.chat-tag-chip');
  if (chip && nodeMap.has(chip.dataset.id)) selectNode(chip.dataset.id);
});

// ------------------------------------------------------------
// Suggestion chips
// ------------------------------------------------------------
const RECIPE_GROUPS = [
  {
    title: 'Trace a mechanism / 追蹤機制',
    items: [
      { q: "Analyze the mechanism from Adrenochrome through Neuromelanin to Autophagy and TFEB, explaining how oxidized catecholamines feed lysosomal stress", tags: ["Adrenochrome", "Neuromelanin", "Autophagy", "TFEB"] },
      { q: "Trace how COMT channels catecholamines into the Adrenochrome Pathway, and where the Fisetin route loops back to ROS", tags: ["COMT", "Adrenochrome Pathway", "Fisetin", "ROS"] },
      { q: "NRF2 如何拮抗 NF-κB，而 Adrenochrome 又是如何透過氧化壓力橋接兩者？", tags: ["NRF2", "NF-κB", "Adrenochrome"] },
    ],
  },
  {
    title: 'Find drivers & connectors / 找出驅動因子',
    items: [
      { q: "Identify the top connector nodes bridging the NAD+ and Autophagy communities", tags: ["NAD+", "Autophagy"] },
      { q: "Which nodes have the highest betweenness across the Sirtuin and mTOR networks?", tags: ["Sirtuins", "mTORC1"] },
      { q: "Find the hubs that link CD38-driven NAD+ decline to SIRT1 and aging", tags: ["CD38", "NAD+", "SIRT1", "Aging"] },
    ],
  },
  {
    title: 'Compare interventions / 比較介入',
    items: [
      { q: "Compare the senolytic (Fisetin) versus senomorphic paths to senescent-cell clearance", tags: ["Fisetin", "mTORC1", "Autophagy"] },
      { q: "Contrast NR conversion to NAD+ upstream of SIRT1 with Fisetin's direct senolytic action", tags: ["Nicotinamide Riboside", "NAD+", "SIRT1", "Fisetin"] },
      { q: "NAD+ 為何是 Sirtuins 的必要條件，CD38 消耗 NAD+ 這一步如何成為老化關鍵開關？", tags: ["NAD+", "Sirtuins", "CD38"] },
    ],
  },
  {
    title: 'Enrich a node set / 擴充節點集合',
    items: [
      { q: "Given Creatine, SIRT1, FOXO and AMPK, map the autophagy handoff between them", tags: ["Creatine", "SIRT1", "FOXO", "AMPK", "Autophagy"] },
      { q: "Expand the Methylene blue → MAO → Aminoguanidine → Methemoglobinemia enzyme-inhibitor web", tags: ["Methylene blue", "Monoamine oxidase", "Aminoguanidine", "Methemoglobinemia"] },
      { q: "Ivermectin 如何誘發自噬抑制 NF-κB，並與 Adrenochrome 在同一子圖上交會？", tags: ["Ivermectin", "Autophagy", "NF-κB", "Adrenochrome"] },
    ],
  },
  {
    title: 'Pathology & clinical / 病理與臨床',
    items: [
      { q: "Trace MOMP through the Intrinsic Pathway to Caspase-9 and place SIRT1 on that line", tags: ["Bcl-2", "MOMP", "Intrinsic Pathway", "Caspase-9", "SIRT1"] },
      { q: "How does Honokiol protect MFN2 mitochondrial fusion and intersect Caspase-3 in cardiac hypertrophy?", tags: ["Honokiol", "MFN2", "Cardiac Hypertrophy", "Caspase-3"] },
      { q: "粒線體外膜透化、內在途徑與 Caspase 級聯之間的關係如何被 Sirtuins 調節？", tags: ["MOMP", "Intrinsic Pathway", "Caspase-9", "Sirtuins"] },
    ],
  },
];
const ALL_RECIPES = RECIPE_GROUPS.flatMap(g => g.items);
const SUGGESTIONS_PER_PAGE = 7;
let suggestionOffset = 0;

function suggestionHTML(q) {
  const tags = (q.tags || []).join(',');
  return `<button class="chat-suggestion" data-query="${esc(q.q)}" data-tags="${esc(tags)}">&ldquo;${esc(q.q)}&rdquo;</button>`;
}

function pageSuggestionsHTML() {
  const items = [];
  for (let i = 0; i < SUGGESTIONS_PER_PAGE; i++) {
    const q = ALL_RECIPES[(suggestionOffset + i) % ALL_RECIPES.length];
    items.push(suggestionHTML(q));
  }
  return `<div class="chat-suggestion-group">${items.join('')}</div>` +
    `<button class="chat-suggestion chat-suggestion-more" data-action="generate">Suggest more analyses</button>`;
}

function defaultSuggestionsHTML() {
  suggestionOffset = 0;
  return pageSuggestionsHTML();
}

function appendSuggestions(parent) {
  const div = document.createElement('div');
  div.className = 'chat-suggestions';
  div.id = 'chat-suggestions';
  div.innerHTML = defaultSuggestionsHTML();
  parent.appendChild(div);
}

async function generateSuggestions() {
  const suggestionsDiv = document.getElementById('chat-suggestions');
  if (!suggestionsDiv) return;

  // Advance by a full page, wrapping around the flattened recipe pool.
  suggestionOffset = (suggestionOffset + SUGGESTIONS_PER_PAGE) % ALL_RECIPES.length;
  suggestionsDiv.innerHTML = pageSuggestionsHTML();
}

function tagSuggestionNodes(labels) {
  const nodes = [];
  labels.forEach(label => {
    const node = RAW_NODES.find(n => n.label === label);
    if (node && !chatTagSet.has(node.id)) nodes.push(node);
  });
  nodes.forEach(node => chatTagSet.set(node.id, node));
  renderTagChips();
  highlightTaggedNodes();
}

// Delegate clicks on suggestion chips (initial + generated)
chatMessages.addEventListener('click', (e) => {
  const btn = e.target.closest('.chat-suggestion');
  if (!btn) return;
  if (btn.dataset.action === 'generate') {
    generateSuggestions();
  } else {
    chatInput.value = btn.dataset.query;
    if (btn.dataset.tags) {
      tagSuggestionNodes(btn.dataset.tags.split(',').map(s => s.trim()).filter(Boolean));
    }
    chatInput.focus();
  }
});

chatNewBtn.addEventListener('click', () => {
  // Release the server-side session so the next turn starts with clean context.
  if (chatSessionId) {
    const stale = chatSessionId;
    chatSessionId = null;
    fetch(SESSION_RESET_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'reset', session_id: stale }),
      keepalive: true,
    }).catch(() => {});
  }
  chatHistory = [];
  chatMessages.innerHTML = '';
  clearChatHighlights();
  compareA = [];
  compareB = [];
  renderCompareSets();
  clearChatTags();
  appendSuggestions(chatMessages);
  chatInput.value = '';
  chatInput.focus();
  refreshActivity();
});

// ------------------------------------------------------------
// Chat Graph Highlighting
// ------------------------------------------------------------
// A lowercase word-boundary index of node labels -> node id. Used to find the
// nodes "most related" to a query/response locally whenever the server does
// not (or does not fully) specify which nodes a chat turn touches.
const labelDataIndex = new Map();
RAW_NODES.forEach(n => {
  const label = String(n.label || '').toLowerCase().trim();
  if (label) labelDataIndex.set(label, n.id);
});

// Find nodes whose canonical label (or Chinese translation) appears in a blob
// of text (the user's question + the assistant's response).
function matchNodesInText(blob) {
  const text = ' ' + String(blob || '').toLowerCase() + ' ';
  const matchedIds = new Set();
  // Prefer exact English labels; skip empty ones.
  labelDataIndex.forEach((nodeId, label) => {
    if (!label) return;
    if (labelBoundaryRegex(label).test(text)) matchedIds.add(nodeId);
  });
  // Also match against translated labels where available.
  RAW_NODES.forEach(n => {
    const zh = TRANSLATIONS[n.label];
    if (!zh || !n.id || matchedIds.has(n.id)) return;
    if (labelBoundaryRegex(String(zh)).test(text)) matchedIds.add(n.id);
  });
  return matchedIds;
}

// Return only the set of edges whose endpoints are BOTH in the node set.
function edgesBetween(nodeIds) {
  const present = new Set(nodeIds);
  const pairs = new Map();
  RAW_EDGES.forEach(e => {
    if (present.has(e.from) && present.has(e.to)) {
      const key = [e.from, e.to].sort().join('::');
      if (!pairs.has(key)) pairs.set(key, [e.from, e.to]);
    }
  });
  return Array.from(pairs.values());
}

// Combine server-declared highlights (nodes + edges) with a local relevance
// match over the user query and assistant response, then return a canonical
// node list (+ the subset of edges among them).
function highlightForMessage(queryText, data) {
  const serverNodes = (data.highlight_nodes || []).filter(Boolean);
  const serverEdges = (data.highlight_edges || []).filter(p => Array.isArray(p) && p.length >= 2);
  const serverSet = new Set(serverNodes);
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

function highlightChatNodes(nodeIds, edgePairs, primaryNodeId) {
  // Clear any existing trace or community focus
  if (state.activeTrace) clearTrace();
  if (state.focusedCommunity !== null) clearCommunityFocus();
  if (state.selectedNode) deselectNode();

  chatHighlightedNodes = nodeIds;
  chatHighlightedEdges = edgePairs;
  const idSet = new Set(nodeIds);

  applyNodeState(idSet, 1, 0.6, 0.06, 0.03);

  // Highlight edges
  const edgePairSet = new Set(edgePairs.map(p => `${p[0]}::${p[1]}`));
  applyEdgeState(line => {
    const { edge } = line.userData;
    const fwd = `${edge.from}::${edge.to}`;
    const rev = `${edge.to}::${edge.from}`;
    return edgePairSet.has(fwd) || edgePairSet.has(rev);
  }, 0x4E79A7, 0.8, 0x4a4a6a, 0.02);

  setLabelVisibility(idSet);

  // Offer node filtering with a count of highlighted nodes
  chatFilterToggle.classList.add('visible');
  chatFilterCheckbox.disabled = false;
  chatFilterCount.textContent = nodeIds.length;
  applyChatNodeFilter();

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
    // panel (large by default) occupies the right side, so keep the target
    // well inside the visible graph area.
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

function clearChatHighlights() {
  chatHighlightedNodes = [];
  chatHighlightedEdges = [];
  chatFilterToggle.classList.remove('visible');
  chatFilterCheckbox.checked = false;
  chatFilterCheckbox.disabled = true;
  chatFilterCount.textContent = '0';
  applyChatNodeFilter();

  resetVisualState();
}

// Toggle whether the graph is cropped down to just the highlighted nodes (and
// the edges between them). OFF keeps the full graph with the highlight styling;
// ON hides every node/edge outside the highlighted set.
function applyChatNodeFilter() {
  const enabled = !!(chatFilterCheckbox && chatFilterCheckbox.checked);
  const idSet = new Set(chatHighlightedNodes);

  nodeMeshes.forEach(m => {
    m.visible = !enabled || idSet.has(m.userData.nodeId);
  });
  edgeObjects.forEach(line => {
    const { edge } = line.userData;
    line.visible = !enabled || (idSet.has(edge.from) && idSet.has(edge.to));
  });

  if (chatHighlightedNodes.length) {
    // Whatever the filter state, labels track the highlighted set (visibility
    // of non-highlighted meshes is already handled above).
    setLabelVisibility(idSet);
  } else {
    restoreDefaultLabels();
  }
}

chatFilterCheckbox.addEventListener('change', applyChatNodeFilter);

// ------------------------------------------------------------
// Panel mode (Prompt / Graph) — the panel is always full-screen
// ------------------------------------------------------------
let panelMode = 'explore'; // 'ask' (Prompt) | 'explore' (Graph) — Graph is the default view

function setPanelMode(mode) {
  panelMode = mode;
  state.analysisMode = mode === 'explore' ? 'graph' : 'prompt';
  chatPanel.classList.toggle('mode-explore', mode === 'explore');
  chatModeSwitch.querySelectorAll('.chat-mode-tab').forEach(t => {
    const active = t.dataset.mode === mode;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if (mode === 'explore') renderAnalysisTools();
  updateHash();
}

chatModeSwitch.addEventListener('click', (e) => {
  const tab = e.target.closest('.chat-mode-tab');
  if (!tab) return;
  setPanelMode(tab.dataset.mode);
});

// Activity dots: Prompt tab lights when a conversation is active; Graph tab
// lights when there are selections (tags / compare sets). The floating
// analysis button lights when either panel has active work.
function refreshActivity() {
  const promptActive = chatHistory.length > 0 ||
    (panelMode !== 'explore' && chatInput.value.trim().length > 0);
  const graphActive = compareA.length > 0 || compareB.length > 0;
  const promptTab = chatPanel.querySelector('.chat-mode-tab[data-mode="ask"]');
  const graphTab = chatPanel.querySelector('.chat-mode-tab[data-mode="explore"]');
  if (promptTab) promptTab.classList.toggle('has-activity', promptActive);
  if (graphTab) graphTab.classList.toggle('has-activity', graphActive);
  if (chatActivityDot) chatActivityDot.classList.toggle('on', promptActive || graphActive);
}

// ------------------------------------------------------------
// Explore mode — instant, offline dataset analytics
// ------------------------------------------------------------
// Memoized derived metrics computed once from the loaded graph. No server call:
// nodes already carry degree / pagerank / betweenness / community, and the
// LEGEND array describes communities.
let datasetStats = null;
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

function computeDatasetStats() {
  if (datasetStats) return datasetStats;
  const N = RAW_NODES.length, E = RAW_EDGES.length;
  const commIds = new Set(RAW_NODES.map(n => n.community));
  const nodesByCommunity = new Map();
  RAW_NODES.forEach(n => {
    if (!nodesByCommunity.has(n.community)) nodesByCommunity.set(n.community, []);
    nodesByCommunity.get(n.community).push(n);
  });
  const hubs = RAW_NODES.slice().sort((a, b) => (b.degree || 0) - (a.degree || 0));
  const connectors = RAW_NODES.slice().sort((a, b) => (b.betweenness || 0) - (a.betweenness || 0));
  const meanPagerank = RAW_NODES.reduce((s, n) => s + (n.pagerank || 0), 0) / Math.max(1, N);
  const crossComm = new Map();
  RAW_NODES.forEach(n => {
    const comms = new Set();
    (adjacency.get(n.id) || []).forEach(a => {
      const tn = nodeMap.get(a.target);
      if (tn) comms.add(tn.community);
    });
    crossComm.set(n.id, comms.size);
  });
  datasetStats = {
    N, E,
    communities: commIds.size,
    avgDegree: (2 * E) / Math.max(1, N),
    density: (2 * E) / (N * Math.max(1, N - 1)),
    godNodes: hubs.slice(0, 10),
    meanPagerank,
    hubs, connectors, nodesByCommunity, crossComm,
  };
  return datasetStats;
}

function atRowHTML(n, metric, kind, cross) {
  const zh = TRANSLATIONS[n.label] || '';
  const extra = kind === 'btw' ? ` · ${cross || 1} comm` : '';
  const meta = (kind === 'btw' ? `β ${(metric || 0).toFixed(3)}` : `deg ${metric}`) + extra;
  const ab = `<span class="at-ab">
      <button class="set-a" data-set="a" title="Add to Set A">A</button>
      <button class="set-b" data-set="b" title="Add to Set B">B</button>
    </span>`;
  const zhText = zh && zh !== n.label ? ` <span style="color:#888;font-size:11px">${esc(zh)}</span>` : '';
  return `<li class="at-row" data-id="${n.id}">
    <span class="at-name">${esc(n.label)}${zhText}</span>
    <span class="at-meta">${meta}</span>${ab}
  </li>`;
}

function exploreFocusNode(id) {
  const ids = Array.from(new Set([id, ...(adjacency.get(id) || []).map(a => a.target)]));
  highlightChatNodes(ids, edgesBetween(ids), id);
  chatFilterCheckbox.checked = false;
  applyChatNodeFilter();
}

function exploreIsolate(ids) {
  const primary = ids.slice().sort((a, b) => (nodeMap.get(b)?.degree || 0) - (nodeMap.get(a)?.degree || 0))[0];
  highlightChatNodes(ids, edgesBetween(ids), primary);
  chatFilterCheckbox.checked = true;
  applyChatNodeFilter();
}

function renderAnalysisTools() {
  const s = computeDatasetStats();
  const cards = [
    ['Nodes', s.N], ['Edges', s.E], ['Communities', s.communities],
    ['Avg degree', s.avgDegree.toFixed(2)], ['Density', s.density.toFixed(4)],
    ['God nodes', s.godNodes.length],
  ].map(([k, v]) => `<div class="at-card"><div class="v">${typeof v === 'number' ? v.toLocaleString() : v}</div><div class="k">${k}</div></div>`).join('');

  const hubRows = s.hubs.slice(0, 25).map(n => atRowHTML(n, n.degree, 'deg')).join('');
  const connRows = s.connectors.slice(0, 20).map(n => atRowHTML(n, n.betweenness, 'btw', s.crossComm.get(n.id))).join('');
  const commHTML = LEGEND.slice().sort((a, b) => b.count - a.count).map(c => {
    const top = (s.nodesByCommunity.get(c.cid) || [])
      .slice().sort((a, b) => (b.degree || 0) - (a.degree || 0)).slice(0, 3).map(n => n.label).join(', ');
    return `<div class="at-comm" data-cid="${c.cid}">
      <span class="sw" style="background:${esc(c.color)}"></span>
      <span class="at-comm-name">${esc(c.label)}</span>
      <span class="at-comm-count">${c.count} · ${top}</span>
      <span class="at-ab">
        <button class="set-a" data-set="a" title="Add community to Set A">A</button>
        <button class="set-b" data-set="b" title="Add community to Set B">B</button>
      </span>
    </div>`;
  }).join('');

  analysisTools.innerHTML = `
    <div class="at-section">
      <h4 class="at-h">Dataset Overview / 資料集概覽</h4>
      <div class="at-cards">${cards}</div>
      <button class="at-reset" data-action="clear">Clear highlights / 清除高亮</button>
    </div>
    <div class="at-section">
      <h4 class="at-h"><span>Top Hubs</span><span style="color:#666;font-weight:400;text-transform:none">by degree — click to focus, A/B to compare</span></h4>
      <ul class="at-list" id="at-hubs">${hubRows}</ul>
    </div>
    <div class="at-section">
      <h4 class="at-h"><span>Connectors / Bridges</span><span style="color:#666;font-weight:400;text-transform:none">by betweenness</span></h4>
      <ul class="at-list" id="at-connectors">${connRows}</ul>
    </div>
    <div class="at-section">
      <h4 class="at-h"><span>Communities / 社群</span><span style="color:#666;font-weight:400;text-transform:none">by community</span></h4>
      <div class="at-communities">${commHTML}</div>
    </div>
    <div class="at-section">
      <h4 class="at-h">Compare Two Node Sets</h4>
      <p class="at-hint">Add nodes — or entire communities — to Set A (blue) or Set B (purple) via the A/B buttons, then compare their shared neighborhood, Jaccard similarity, and shortest connecting paths.</p>
      <div class="at-compare-sets">
        <div class="at-set a" id="at-set-a"><div class="at-set-label">Set A</div><div class="at-set-chips"></div></div>
        <div class="at-set b" id="at-set-b"><div class="at-set-label">Set B</div><div class="at-set-chips"></div></div>
      </div>
      <div class="at-actions">
        <button class="at-compare-btn" id="at-compare-go">Compare A vs B</button>
        <button class="at-prompt-btn" id="at-send-prompt" title="Send this selection to the Prompt panel as an analysis query / 將此選擇傳送至 Prompt 面板">&#8594; Prompt</button>
        <button class="at-export-json-btn" id="at-export-json" title="Export this selection as JSON / 匯出選擇為 JSON">Save</button>
      </div>
      <div class="at-compare-result" id="at-compare-result"></div>
    </div>
  `;

  analysisTools.querySelector('[data-action="clear"]').addEventListener('click', () => {
    clearChatHighlights();
    compareA = []; compareB = [];
    renderCompareSets();
  });
  analysisTools.querySelectorAll('.at-row').forEach(row => {
    const id = row.dataset.id;
    row.addEventListener('click', (e) => {
      if (e.target.closest('.at-ab')) return;
      exploreFocusNode(id);
    });
    row.querySelectorAll('.at-ab button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompare(id, btn.dataset.set);
      });
    });
  });
  analysisTools.querySelectorAll('.at-comm').forEach(el => {
    const cid = Number(el.dataset.cid);
    const ids = (s.nodesByCommunity.get(cid) || []).map(n => n.id);
    const label = el.querySelector('.at-comm-name').textContent;
    el.addEventListener('click', (e) => {
      if (e.target.closest('.at-ab')) return;
      exploreIsolate(ids);
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
  analysisTools.querySelector('#at-export-json').addEventListener('click', exportSelectionJSON);
  renderCompareSets();
}

// Export the current Graph selection (Compare Sets A/B + selected nodes/edges)
// as a standalone .json file.
function exportSelectionJSON() {
  const ids = new Set([...entryIds(compareA), ...entryIds(compareB)]);
  if (!ids.size) {
    alert('Add nodes or communities to Set A / Set B before exporting.');
    return;
  }
  const safe = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  const nodes = RAW_NODES.filter(n => ids.has(n.id)).map(n => ({
    id: n.id, label: n.label, community: n.community,
    degree: n.degree, pagerank: n.pagerank, betweenness: n.betweenness,
    description: n.description,
  }));
  const edges = RAW_EDGES.filter(e => ids.has(e.from) && ids.has(e.to)).map(e => ({
    from: e.from, to: e.to, relation: e.relation, confidence: e.confidence,
  }));
  const data = {
    exported_at: new Date().toISOString(),
    selection: { node_count: ids.size, edge_count: edges.length },
    sets: { A: compareA, B: compareB },
    tagged_nodes: Array.from(chatTagSet.values()).map(n => ({ id: n.id, label: n.label })),
    nodes,
    edges,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.download = `selection-${safe}.json`;
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(a.href);
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
    alert('Add nodes or communities to Set A / Set B before sending to Prompt.');
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
  setPanelMode('ask');
  chatInput.value = text;
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 160) + 'px';
  // Tag the selected nodes so they travel as structured context.
  chatTagSet.clear();
  ids.forEach(id => {
    const n = nodeMap.get(id);
    if (n) chatTagSet.set(id, n);
  });
  renderTagChips();
  chatInput.focus();
  refreshActivity();
}

function neighborsOf(id) { return new Set((adjacency.get(id) || []).map(a => a.target)); }

function toggleCompare(id, set) {
  const arr = set === 'a' ? compareA : compareB;
  const i = arr.findIndex(e => e.type === 'node' && e.id === id);
  if (i >= 0) arr.splice(i, 1);
  else arr.push({ type: 'node', id });
  renderCompareSets();
}

function toggleCompareCommunity(cid, label, ids, set) {
  const arr = set === 'a' ? compareA : compareB;
  const i = arr.findIndex(e => e.type === 'community' && e.cid === cid);
  if (i >= 0) arr.splice(i, 1);
  else arr.push({ type: 'community', cid, label, ids: ids.slice() });
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
  const exportBtn = document.getElementById('at-export-json');
  if (exportBtn) exportBtn.disabled = !hasSelection;
  const promptBtn = document.getElementById('at-send-prompt');
  if (promptBtn) promptBtn.disabled = !hasSelection;
  refreshActivity();
}

function bfsFromSets(seedIds) {
  const distance = new Map();
  const from = new Map();
  const q = [];
  seedIds.forEach(id => { if (!distance.has(id)) { distance.set(id, 0); from.set(id, id); q.push(id); } });
  let head = 0; const MAX = 6;
  while (head < q.length) {
    const cur = q[head++];
    const d = distance.get(cur);
    if (d >= MAX) break;
    (adjacency.get(cur) || []).forEach(a => {
      if (!distance.has(a.target)) {
        distance.set(a.target, d + 1);
        from.set(a.target, from.get(cur));
        q.push(a.target);
      }
    });
  }
  return { distance, from };
}

function runCompare() {
  const res = document.getElementById('at-compare-result');
  const idsA = entryIds(compareA), idsB = entryIds(compareB);
  if (!idsA.size || !idsB.size) {
    res.innerHTML = '<span style="color:#E4575E">Add at least one node or community to both Set A and Set B.</span>';
    return;
  }
  const nA = new Set(); idsA.forEach(id => { nA.add(id); neighborsOf(id).forEach(x => nA.add(x)); });
  const nB = new Set(); idsB.forEach(id => { nB.add(id); neighborsOf(id).forEach(x => nB.add(x)); });
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
  highlightChatNodes(highlightIds, edgesBetween(highlightIds), primary);
  chatFilterCheckbox.checked = false;
  applyChatNodeFilter();

  res.innerHTML = `
    <div>Set A: <span class="at-metric">${idsA.size}</span> nodes · Set B: <span class="at-metric">${idsB.size}</span> nodes</div>
    <div>Neighborhood (incl. neighbors) A: <span class="at-metric">${nA.size}</span> · B: <span class="at-metric">${nB.size}</span></div>
    <div>Shared neighborhood: <span class="at-metric">${inter.size}</span> · Jaccard: <span class="at-metric">${jaccard.toFixed(3)}</span></div>
    ${topPairs.length
      ? `<table><thead><tr><th>Shortest A → B</th><th>Steps</th></tr></thead><tbody>${topPairs.map(p => `<tr><td>${esc(nodeMap.get(p[0])?.label || p[0])} → ${esc(nodeMap.get(p[1])?.label || p[1])}</td><td>${p[2]}</td></tr>`).join('')}</tbody></table>`
      : '<div>No direct path within 6 steps.</div>'}
  `;
}

// ------------------------------------------------------------
// Init
// ------------------------------------------------------------
// Sync the default mode (Graph/Explore) — sets the active tab and renders the
// analytics tools so they're ready when the panel opens.
state.suppressHashUpdate = true;
setPanelMode(panelMode);
state.suppressHashUpdate = false;
appendSuggestions(chatMessages);
refreshActivity();
