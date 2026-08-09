// Chat interface: chat panel, suggestion chips, wiki entity tooltips, wiki modal,
// and graph highlighting for chat turns.

import * as THREE from 'three';

import { RAW_NODES, RAW_EDGES, TRANSLATIONS, WIKI_CONTEXT, nodeMap } from './data.js';
import { state } from './state.js';
import {
  camera, nodeObjects, nodeMeshes, edgeObjects, labelObjects, animateCamera,
  applyNodeState, applyEdgeState, setLabelVisibility, resetVisualState,
} from './core.js';
import { clearTrace, clearCommunityFocus, setActiveWindow } from './ui.js';
import { deselectNode } from './interaction.js';
import { esc, renderMarkdown, wikiExcerpt, escapeRegex, labelBoundaryRegex } from './markdown.js';

// ------------------------------------------------------------
// Elements + API endpoints
// ------------------------------------------------------------
const chatBtn = document.getElementById('chat-btn');
const chatPanel = document.getElementById('chat-panel');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMaximizeBtn = document.getElementById('chat-maximize');
const chatNewBtn = document.getElementById('chat-new');
const chatCloseBtn = document.getElementById('chat-close');
const chatHighlightBadge = document.getElementById('chat-highlight-badge');

const INTENT_API = 'https://api.johnnykuo.com/api/intent';
const EXECUTE_API = 'https://api.johnnykuo.com/api/execute';

let chatOpen = false;
let chatBusy = false;
let chatHighlightedNodes = [];
let chatHighlightedEdges = [];
// In-memory conversation history (session only; intentionally NOT persisted to
// localStorage/sessionStorage so a refresh clears it). Used to give follow-up
// questions context of the ongoing conversation.
let chatHistory = [];

chatBtn.addEventListener('click', () => {
  chatOpen = !chatOpen;
  chatPanel.classList.toggle('open', chatOpen);
  chatBtn.classList.toggle('open', chatOpen);
  chatBtn.innerHTML = chatOpen ? '&#10005;' : '&#128172;';
  if (!chatOpen) setActiveWindow(null);
  if (chatOpen) chatInput.focus();
});

const MAXIMIZE_ICON = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 1H1V5"/><path d="M9 13H13V9"/><path d="M1 9V13H5"/><path d="M13 5V1H9"/></svg>';
const RESTORE_ICON = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 5V1H5"/><path d="M13 9V13H9"/><path d="M5 13H1V9"/><path d="M9 1H13V5"/></svg>';

chatMaximizeBtn.addEventListener('click', () => {
  const maximized = chatPanel.classList.toggle('maximized');
  chatMaximizeBtn.innerHTML = maximized ? RESTORE_ICON : MAXIMIZE_ICON;
  chatMaximizeBtn.title = maximized ? 'Restore window / 還原視窗' : 'Maximize window / 放大視窗';
  if (maximized) chatInput.focus();
});

function closeChat() {
  chatOpen = false;
  chatPanel.classList.remove('open');
  chatBtn.classList.remove('open');
  chatBtn.innerHTML = '&#128172;';
  setActiveWindow(null);
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

  chatBusy = true;
  chatSend.disabled = true;
  chatInput.value = '';

  // Hide suggestions after first message
  const suggestions = document.getElementById('chat-suggestions');
  if (suggestions) suggestions.remove();

  addChatMessage(clean, 'user');
  chatHistory.push({ role: 'user', content: clean });

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
      body: JSON.stringify({ message: clean }),
    });

    if (!intentResp.ok) {
      chatMessages.removeChild(typingDiv);
      chatHistory.pop();
      addChatMessage('Server error', 'error');
      return;
    }

    const intentData = await intentResp.json();

    // Update indicator if translation will happen
    if (intentData.lang && intentData.lang !== 'en') {
      typingDiv.querySelector('#typing-label').textContent = 'Translating';
    }

    // Phase 2: Execute graph op + optional translation
    const execResp = await fetch(EXECUTE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: intentData.intent,
        lang: intentData.lang,
        question: intentData.question,
        node: intentData.node,
        from_node: intentData.from_node,
        to_node: intentData.to_node,
        message: intentData.message,
        history: chatHistory,
      }),
    });

    chatMessages.removeChild(typingDiv);

    if (!execResp.ok) {
      chatHistory.pop();
      addChatMessage('Server error', 'error');
      return;
    }

    const data = await execResp.json();
    const badge = data.type === 'chat' ? 'wiki' : (data.type === 'query' || data.type === 'explain' || data.type === 'path') ? 'graphify' : null;
    addChatMessage(data.text, 'bot', badge);
    chatHistory.push({ role: 'assistant', content: data.text });

    if (data.text || data.highlight_nodes?.length) {
      // Always highlight the nodes most related to the user's query AND the
      // assistant's response: server-provided highlights take priority, then we
      // fall back to (and merge with) a local relevance match over node labels.
      const highlighted = highlightForMessage(clean, data);
      if (highlighted.nodes.length > 0) {
        highlightChatNodes(highlighted.nodes, highlighted.edges, highlighted.primary);
      }
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

chatSend.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
});

// Auto-resize textarea
chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 80) + 'px';
});

// ------------------------------------------------------------
// Suggestion chips
// ------------------------------------------------------------
const SUGGESTION_SETS = [
  ["Graphify trace from Adrenochrome through Sirtuins to Cellular Senescence and explain each hop", "How does NAD+ decline drive the SASP and what can SIRT1 do about it?", "Sirtuins 與細胞衰老：SIRT1 如何調控 SASP 與慢性發炎？"],
  ["Graphify trace from CD38 to NAD+ to SIRT1 and how this axis degrades with age", "Do SIRT1 and SIRT6 differ in how they restrain senescence and SASP?", "為什麼 NAD+ 會隨年齡下降，Sirtuins 如何參與這個過程？"],
  ["Graphify trace from Cellular Senescence to SASP to Inflammaging", "What distinguishes a senescent cell from a quiescent cell at the molecular level?", "Senolytics 與 senomorphic 在清除衰老細胞的策略上有何不同？"],
  ["Graphify trace from Adrenochrome to Inflammaging via the miR-217 epigenetic bridge", "Does adrenochrome push cells into senescence through the SASP, and which microRNAs mediate that?", "腎上腺素氧化與衰老分泌表型之間有哪些已知的連結？"],
  ["Graphify trace from SIRT1 to TFEB to Mitophagy and its role in clearing senescent mitochondria", "Why does SIRT1 fall during replicative senescence, and can NAD+ repletion restore its activity?", "Sirtuins 如何透過自噬與粒線體恆定來延緩細胞衰老？"],
  ["Graphify trace from Oxidative Stress through Sirtuins to Mitohormesis", "Can low-dose catecholamine oxidation products trigger a hormetic NRF2/PGC1A response that Sirtuins amplify?", "Sirtuins 對抗腎上腺素氧化損傷的分子機制是什麼？"],
  ["Graphify trace from NAD+ to BNIP3 mitophagy and how this intersects with senescence", "How does CD38-mediated NAD+ depletion link microglial inflammation to neuronal senescence?", "為什麼 SIRT1 活化需要足夠的 NAD+，而 CD38 會打破這個平衡？"],
  ["Graphify trace from Adrenochrome to Foam Cells via lipophagy and atherosclerosis", "How does neuromelanin formation relate to catecholamine oxidation, COMT genotype, and oxidative stress?", "腎上腺素氧化產物如何影響巨噬細胞與動脈粥樣硬化？"],
];
let suggestionIndex = 1;

function defaultSuggestionsHTML() {
  return `
    <button class="chat-suggestion" data-query="Graphify trace from Adrenochrome through Sirtuins to Cellular Senescence and explain each hop">Graphify trace from Adrenochrome through Sirtuins to Cellular Senescence and explain each hop</button>
    <button class="chat-suggestion" data-query="How does NAD+ decline drive the SASP and what can SIRT1 do about it?">How does NAD+ decline drive the SASP and what can SIRT1 do about it?</button>
    <button class="chat-suggestion" data-query="Sirtuins 與細胞衰老：SIRT1 如何調控 SASP 與慢性發炎？">Sirtuins 與細胞衰老：SIRT1 如何調控 SASP 與慢性發炎？</button>
    <button class="chat-suggestion chat-suggestion-more" data-action="generate">🧠 Suggest questions</button>
  `;
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

  // Cycle through preset suggestion sets
  const questions = SUGGESTION_SETS[suggestionIndex % SUGGESTION_SETS.length];
  suggestionIndex++;

  suggestionsDiv.innerHTML = questions.map(q =>
    `<button class="chat-suggestion" data-query="${esc(q)}">${esc(q)}</button>`
  ).join('') + `<button class="chat-suggestion chat-suggestion-more" data-action="generate">🧠 More</button>`;
}

// Delegate clicks on suggestion chips (initial + generated)
chatMessages.addEventListener('click', (e) => {
  const btn = e.target.closest('.chat-suggestion');
  if (!btn) return;
  if (btn.dataset.action === 'generate') {
    generateSuggestions();
  } else {
    chatInput.value = btn.dataset.query;
    chatInput.focus();
  }
});

chatNewBtn.addEventListener('click', () => {
  chatHistory = [];
  chatMessages.innerHTML = '';
  clearChatHighlights();
  appendSuggestions(chatMessages);
  chatInput.value = '';
  chatInput.focus();
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

  // Show highlight badge
  chatHighlightBadge.classList.add('visible');

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
    // it, so the node sits in the upper-left quadrant of the view.
    const hasSidebar = window.innerWidth >= 768;
    const dist = 320;
    const direction = targetPos.clone().sub(camera.position);
    if (direction.lengthSq() > 0.0001) direction.normalize();
    const offsetDir = new THREE.Vector3(-1, 1, -1).normalize(); // up-left-forward
    const camPos = targetPos.clone().addScaledVector(direction, dist * 0.4)
      .addScaledVector(offsetDir, dist);
    const lookTarget = targetPos.clone().addScaledVector(
      hasSidebar ? new THREE.Vector3(0.35, -0.3, 0).normalize()
                 : new THREE.Vector3(0, 0, 0),
      dist * 0.4
    );
    animateCamera(camPos, lookTarget);
  }
}

function clearChatHighlights() {
  chatHighlightedNodes = [];
  chatHighlightedEdges = [];
  chatHighlightBadge.classList.remove('visible');

  resetVisualState();
}

chatHighlightBadge.addEventListener('click', clearChatHighlights);

// ------------------------------------------------------------
// Init
// ------------------------------------------------------------
appendSuggestions(chatMessages);
