// Analysis-panel UI helpers: node/edge info card, Graph Query (trace) panel,
// settings popover, controls, zoom bar. The old sidebar was removed — node
// info and graph queries now live inside the analysis panel (#prompt-box).

import * as THREE from 'three';

import {
  RAW_NODES, LEGEND, TRACES, TRANSLATIONS, nodeMap, adjacency,
  descriptionMap, githubSourceUrl, noteUrl, predicateZh,
} from './data.js';
import { state } from './state.js';
import {
  container, scene, camera, renderer, nodeObjects, nodeMeshes, edgeGroup, labelObjects,
  edgeOffColor, setLabelVisibility, setAllLabelVisibility, applyNodeState, applyEdgeState,
  resetVisualState, animateCamera, CAMERA_OFFSET, setPhysics,
  getZoomFraction, setZoomFromFraction, updateZoomBar,
} from './core.js';
import { selectNode, deselectNode } from './interaction.js';
import { updateHash } from './routing.js';
import { esc } from './markdown.js';
import { setUiLang } from './i18n.js';

// ------------------------------------------------------------
// Active-window highlight (dataset panel vs prompt panel)
// ------------------------------------------------------------
const activeDatasetPanel = document.getElementById('dataset-panel');
const activePromptPanel = document.getElementById('prompt-panel');

export function setActiveWindow(name) {
  const panels = [activeDatasetPanel, activePromptPanel];
  panels.forEach(el => el.classList.remove('active', 'dimmed'));

  const activeEl = name === 'dataset' && activeDatasetPanel.classList.contains('visible')
    ? activeDatasetPanel
    : name === 'prompt' && activePromptPanel.classList.contains('open')
      ? activePromptPanel
      : null;

  if (activeEl) {
    activeEl.classList.add('active');
    panels.forEach(el => {
      const isVisible = el === activeDatasetPanel
        ? el.classList.contains('visible')
        : el.classList.contains('open');
      if (el !== activeEl && isVisible) el.classList.add('dimmed');
    });
  }
}

document.addEventListener('pointerdown', (e) => {
  if (activeDatasetPanel.contains(e.target)) setActiveWindow('dataset');
  else if (activePromptPanel.contains(e.target)) setActiveWindow('prompt');
  else setActiveWindow(null);
});
document.addEventListener('focusin', (e) => {
  if (activeDatasetPanel.contains(e.target)) setActiveWindow('dataset');
  else if (activePromptPanel.contains(e.target)) setActiveWindow('prompt');
});

// ------------------------------------------------------------
// Node / edge info card (inside the analysis panel)
// ------------------------------------------------------------
const infoCard = document.getElementById('at-node-detail');

export function hideNodeInfo() {
  if (infoCard) infoCard.hidden = true;
  routeCardRerender = null;
  detailHistory = [];
  currentView = null;
}

// ------------------------------------------------------------
// Node/edge detail head language toggle.
// The detail sheet renders bilingual content from `state.analysisUiLang`
// (shared with the analysis panel). A small EN/中 toggle in the head makes it
// switchable in place; the head is laid out as two rows to fit it.
// ------------------------------------------------------------
function headLangToggle() {
  const cur = state.analysisUiLang === 'zh-TW' ? 'zh-TW' : 'en-US';
  return `<div class="at-node-head-langs" role="group" aria-label="Language / 語言">
    <button type="button" data-nlang="en-US" class="${cur === 'en-US' ? 'active' : ''}" title="English (US)">EN</button>
    <button type="button" data-nlang="zh-TW" class="${cur === 'zh-TW' ? 'active' : ''}" title="繁體中文（台灣）">中</button>
  </div>`;
}

// Wire the head toggle buttons (recreated on every render) and sync their
// active state to the shared analysis-panel language.
function bindHeadLangToggle() {
  if (!infoCard) return;
  infoCard.querySelectorAll('.at-node-head [data-nlang]').forEach((b) => {
    b.classList.toggle('active', b.dataset.nlang === state.analysisUiLang);
    b.addEventListener('click', () => setNodeLang(b.dataset.nlang));
  });
}

// Apply a language chosen in the detail head: persist + broadcast the shared
// language (which re-renders the analysis + notes panels), then re-render the
// current detail card in place.
function setNodeLang(lang) {
  if (lang !== 'en-US' && lang !== 'zh-TW') return;
  setUiLang(lang);
  if (!infoCard || infoCard.hidden) return;
  if (currentView) {
    if (currentView.type === 'node') renderNodeInfo(currentView.id, currentView.actions);
    else if (currentView.type === 'community') renderCommunityInfo(currentView.cid, currentView.actions);
    else renderEdgeInfo(currentView.edge);
  } else if (routeCardRerender) {
    routeCardRerender(); // transient route card — re-render in place
  }
}

const LINK_ICON = '<svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1H9V7M9 1L1 9"/></svg>';

// Context / evidence text inside a card that matches the metrics-card look.
// `footer` (optional) is appended inside the card — the node view uses it to
// fold the Source (edge) document link into the same card.
function contextCard(text, max = 2800, footer = '') {
  if (!text) return footer ? `<div class="field" style="margin-top:8px">${footer}</div>` : '';
  return `<div class="wiki-context-card"><span class="info-muted">Context</span><div class="wiki-context-text">${esc(text.slice(0, max))}${text.length > max ? '…' : ''}</div>${footer}</div>`;
}

// Render the merged node info card: identity + wiki/source links + context +
// topology metrics + clickable connections. `actions` (optional) adds the
// Graph-mode Focus / Set A / Set B buttons via callbacks supplied by prompt.js.
// ---- Back-navigation history for the node/edge detail sheet ----
// Records each node/edge card the user views so that clicking through
// Connections (or selecting other nodes/edges) can be undone with Back.
const DETAIL_HISTORY_MAX = 50;
let detailHistory = [];   // stack of earlier views (last entry = most recent)
let currentView = null;   // { type:'node', id, actions } | { type:'edge', edge } | { type:'community', cid }
let routeCardRerender = null; // re-render fn for the transient route card (not tracked in currentView)

// Registered by prompt.js: builds the Graph-mode quick actions (Filter / A / B)
// for a node when the detail sheet is opened from a path that doesn't supply an
// explicit `actions` object (panel open, graph node click). Kept here as a hook
// to avoid introducing a circular import between ui.js and prompt.js.
let nodeActionBuilder = null;
export function setNodeActionBuilder(build) { nodeActionBuilder = build; }

function viewEq(a, b) {
  if (!a || !b) return false;
  if (a.type !== b.type) return false;
  if (a.type === 'node') return a.id === b.id;
  if (a.type === 'community') return a.cid === b.cid;
  return a.edge === b.edge;
}

export function showInfo(nodeId, actions) {
  if (!nodeMap.get(nodeId) || !infoCard) return;
  if (!actions && nodeActionBuilder) actions = nodeActionBuilder(nodeId);
  if (currentView && !viewEq(currentView, { type: 'node', id: nodeId })) {
    detailHistory.push(currentView);
    if (detailHistory.length > DETAIL_HISTORY_MAX) detailHistory.shift();
  }
  currentView = { type: 'node', id: nodeId, actions };
  renderNodeInfo(nodeId, actions);
}

export function goBackDetail() {
  const prev = detailHistory.pop();
  if (!prev) return;
  currentView = prev;
  if (prev.type === 'node') renderNodeInfo(prev.id, prev.actions);
  else if (prev.type === 'community') renderCommunityInfo(prev.cid, prev.actions);
  else renderEdgeInfo(prev.edge);
}

function renderNodeInfo(nodeId, actions) {
  const n = nodeMap.get(nodeId);
  if (!n || !infoCard) return;
  routeCardRerender = null;

  const neighbors = adjacency.get(nodeId) || [];
  const neighborItems = neighbors.map(({ target, edge }) => {
    const nb = nodeMap.get(target);
    const color = nb ? nb.color.background : '#555';
    const label = edge.label ? ` — ${esc(edge.label)}` : '';
    const nbLabel = nb ? nb.label : target;
    const nbZhTW = TRANSLATIONS[nbLabel] || '';
    const nbDisplayName = nbZhTW && nbZhTW !== nbLabel ? `${nbLabel} / ${nbZhTW}` : nbLabel;
    return `<span class="neighbor-link" style="border-left-color:${esc(color)}" data-nid="${esc(target)}">${esc(nbDisplayName)}${label}</span>`;
  }).join('');

  // Context text: surface the zh-TW translation when the analysis panel is in
  // zh-TW and the node carries a real translation; otherwise the canonical
  // en-US description (which is also the zh fallback emitted by the rebuild).
  const useZh = state.analysisUiLang === 'zh-TW';
  const description = useZh
    ? (n.description_zh_TW || descriptionMap.get(nodeId))
    : descriptionMap.get(nodeId);

  const zhTWName = TRANSLATIONS[n.label] || '';
  const displayName = zhTWName && zhTWName !== n.label ? `${n.label} / ${zhTWName}` : n.label;

  const zhTWCommunity = TRANSLATIONS[n.community_name] || '';
  const displayCommunity = zhTWCommunity && zhTWCommunity !== n.community_name ? `${n.community_name} / ${zhTWCommunity}` : n.community_name;
  const commColor = LEGEND.find(c => c.cid === n.community);

  // Biological role badges (from the auto-role classifier baked into
  // nodes.json by scripts/03_rebuild_from_triples.py). Periphery is omitted
  // from display — at ~74% of nodes it carries no signal.
  const roles = (Array.isArray(n.roles) ? n.roles : []).filter(r => r && r !== 'Periphery');
  const rolesHTML = roles.length
    ? roles.map(r => `<span class="role-badge" data-role="${esc(r)}">${esc(r)}</span>`).join(' ')
    : '';

  // Source (node): deep link to the wiki note when one exists for the label
  // (reconstructed from the manifest), else the triple-source file link.
  const noteHref = noteUrl(n.label) || (n.source_file ? githubSourceUrl(n.source_file) : '');
  const wikiLink = noteHref
    ? `<a href="${esc(noteHref)}" target="_blank" rel="noopener" class="at-node-link">${esc(n.label)} ${LINK_ICON}</a>`
    : '—';

  const edgeSourceLink = n.source_file
    ? `<a href="${esc(githubSourceUrl(n.source_file))}" target="_blank" rel="noopener" class="at-node-link">${esc(n.source_file.split('/').pop())} ${LINK_ICON}</a>`
    : '-';

  const edgeSourceField = `<div class="field node-edge-source"><span class="info-muted">Source (edge):</span> ${edgeSourceLink}</div>`;
  const wikiDesc = contextCard(description, 2800, edgeSourceField);

  const inA = !!(actions && actions.isInA && actions.isInA());
  const inB = !!(actions && actions.isInB && actions.isInB());
  const filterWord = state.analysisUiLang === 'zh-TW' ? '篩選' : 'Filter';
  const filterLabel = actions && actions.filterCount != null ? `${filterWord} (${actions.filterCount})` : filterWord;
  const filterActive = !!(actions && actions.filterActive && actions.filterActive());
  const actionsHTML = actions ? `
    <div class="at-node-actions">
      ${actions.onFocus ? `<button type="button" class="at-node-btn at-focus${filterActive ? ' on' : ''}" title="Filter / 篩選">${esc(filterLabel)}</button>` : ''}
      ${actions.onAddA ? `<button type="button" class="at-node-btn at-add${inA ? ' on' : ''}" data-set="a" title="Add to Set A / 加入集合 A">A</button>` : ''}
      ${actions.onAddB ? `<button type="button" class="at-node-btn at-add${inB ? ' on' : ''}" data-set="b" title="Add to Set B / 加入集合 B">B</button>` : ''}
    </div>` : '';

  const hasBack = detailHistory.length > 0;
  const backBtn = hasBack ? '<button type="button" class="at-node-back" aria-label="Back" title="Back">&larr;</button>' : '';

  infoCard.innerHTML = `
    <div class="at-node-head">
      <div class="at-node-head-top">
        ${backBtn}
        <span class="at-node-title">${esc(displayName)} <span class="node-type">${esc(n.file_type || 'concept')}</span></span>
        <button type="button" class="at-node-close" aria-label="Close">&times;</button>
      </div>
      <div class="at-node-head-divider"></div>
      ${headLangToggle()}
    </div>
    <div class="at-node-scroll">
      <div class="at-node-metrics">
        ${commColor ? `<div class="at-kv"><span class="key"><span class="sw" style="background:${esc(commColor.color)}"></span>Community</span><span class="val">${esc(displayCommunity)}</span></div>` : ''}
        <div class="at-kv"><span class="key">Degree</span><span class="val">${esc(String(n.degree))}</span></div>
        <div class="at-kv"><span class="key">PageRank</span><span class="val">${esc((n.pagerank || 0).toFixed(5))}</span></div>
        <div class="at-kv"><span class="key">Betweenness</span><span class="val">${esc((n.betweenness || 0).toFixed(4))}</span></div>
        <div class="at-kv"><span class="key">Clustering</span><span class="val">${esc((n.clustering || 0).toFixed(3))}</span></div>
        <div class="at-kv"><span class="key">k-core</span><span class="val">${esc(String(n.k_core || 0))}</span></div>
        ${rolesHTML ? `<div class="at-kv at-kv-roles"><span class="key">Roles</span><span class="val">${rolesHTML}</span></div>` : ''}
      </div>
      <div class="field node-source-row"><span class="info-muted">Source (node):</span> ${wikiLink}</div>
      ${wikiDesc}
      ${neighbors.length ? `<div class="field info-connections">Connections (${neighbors.length})</div><div id="neighbors-list">${neighborItems}</div>` : ''}
    </div>
    <div class="at-node-head-actions-row">
      ${actionsHTML}
    </div>
  `;

  infoCard.querySelector('.at-node-close').addEventListener('click', hideNodeInfo);
  const backEl = infoCard.querySelector('.at-node-back');
  if (backEl) backEl.addEventListener('click', goBackDetail);
  if (actions && actions.onFocus) {
    infoCard.querySelector('.at-focus').addEventListener('click', actions.onFocus);
  }
  if (actions && (actions.onAddA || actions.onAddB)) {
    const btnA = infoCard.querySelector('.at-add[data-set="a"]');
    const btnB = infoCard.querySelector('.at-add[data-set="b"]');
    const sync = () => {
      if (btnA && actions.isInA) btnA.classList.toggle('on', actions.isInA());
      if (btnB && actions.isInB) btnB.classList.toggle('on', actions.isInB());
    };
    if (actions.onAddA && btnA) btnA.addEventListener('click', () => { actions.onAddA(); sync(); });
    if (actions.onAddB && btnB) btnB.addEventListener('click', () => { actions.onAddB(); sync(); });
  }
  bindHeadLangToggle();
  infoCard.hidden = false;
}

// Relation card for a selected edge (replaces the old sidebar edge info).
export function showEdgeInfo(edge) {
  if (!infoCard) return;
  if (currentView && !viewEq(currentView, { type: 'edge', edge })) {
    detailHistory.push(currentView);
    if (detailHistory.length > DETAIL_HISTORY_MAX) detailHistory.shift();
  }
  currentView = { type: 'edge', edge };
  renderEdgeInfo(edge);
}

function renderEdgeInfo(edge) {
  if (!infoCard) return;
  routeCardRerender = null;
  const fromNode = nodeMap.get(edge.from);
  const toNode = nodeMap.get(edge.to);
  const fromLabel = fromNode ? fromNode.label : edge.from;
  const toLabel = toNode ? toNode.label : edge.to;
  const fromZhTW = TRANSLATIONS[fromLabel] || '';
  const toZhTW = TRANSLATIONS[toLabel] || '';
  const fromDisplay = fromZhTW && fromZhTW !== fromLabel ? `${fromLabel} / ${fromZhTW}` : fromLabel;
  const toDisplay = toZhTW && toZhTW !== toLabel ? `${toLabel} / ${toZhTW}` : toLabel;
  const relationLabel = edge.label || '';
  const confidence = edge.confidence || '';
  // Localize the relationship predicate for the zh UI (display only — the
  // graph keeps English predicates as canonical).
  const displayRelation = state.analysisUiLang === 'zh-TW'
    ? (predicateZh(relationLabel) || relationLabel)
    : relationLabel;
  // Edge evidence/context, bilingual per the panel language.
  const edgeDesc = state.analysisUiLang === 'zh-TW'
    ? (edge.context_zh_TW || edge.context || '')
    : (edge.context || edge.context_zh_TW || '');

  const hasBack = detailHistory.length > 0;
  const backBtn = hasBack ? '<button type="button" class="at-node-back" aria-label="Back" title="Back">&larr;</button>' : '';

  infoCard.innerHTML = `
    <div class="at-node-head">
      <div class="at-node-head-top">
        ${backBtn}
        <span class="at-node-title">Relation / 關聯</span>
        <button type="button" class="at-node-close" aria-label="Close">&times;</button>
      </div>
      <div class="at-node-head-divider"></div>
      ${headLangToggle()}
    </div>
    <div class="at-node-scroll">
      <div class="field" style="margin-top:6px">
        <span class="neighbor-link" style="border-left-color:${esc(fromNode ? fromNode.color.background : '#555')}" data-nid="${esc(edge.from)}">${esc(fromDisplay)}</span>
        <div class="route-arrow">↓ ${esc(displayRelation)} ${confidence ? `<span class="conf-hint">${esc(confidence)}</span>` : ''}</div>
        <span class="neighbor-link" style="border-left-color:${esc(toNode ? toNode.color.background : '#555')}" data-nid="${esc(edge.to)}">${esc(toDisplay)}</span>
      </div>
      ${contextCard(edgeDesc, 1200)}
    </div>
  `;

  infoCard.querySelector('.at-node-close').addEventListener('click', hideNodeInfo);
  const backEl = infoCard.querySelector('.at-node-back');
  if (backEl) backEl.addEventListener('click', goBackDetail);
  bindHeadLangToggle();
  infoCard.hidden = false;
}

// Community card: rendered into the same slide-up detail sheet when clicking a
// community row in the analysis panel. Surfaces the community's hub concept
// (description + wiki note), topology metrics, and its most-connected members.
// `actions` (optional) provides Isolate / Set A / Set B callbacks from prompt.js.
export function showCommunityInfo(cid, actions) {
  const c = LEGEND.find(x => x.cid === cid);
  if (!c || !infoCard) return;
  if (currentView && !viewEq(currentView, { type: 'community', cid })) {
    detailHistory.push(currentView);
    if (detailHistory.length > DETAIL_HISTORY_MAX) detailHistory.shift();
  }
  currentView = { type: 'community', cid, actions };
  renderCommunityInfo(cid, actions);
}

function renderCommunityInfo(cid, actions) {
  if (!infoCard) return;
  routeCardRerender = null;
  const c = LEGEND.find(x => x.cid === cid);
  if (!c) return;

  const members = RAW_NODES
    .filter(n => n.community === cid)
    .sort((a, b) => (b.degree || 0) - (a.degree || 0));
  const hub = RAW_NODES.find(n => n.label === c.label);

  const zhTWName = TRANSLATIONS[c.label] || '';
  const displayName = zhTWName && zhTWName !== c.label ? `${c.label} / ${zhTWName}` : c.label;

  // Representative description: fall back to the top-degree member when the hub
  // node has no description. Mirror the node sheet's zh-TW handling.
  const descNode = (hub && hub.description) ? hub : members[0];
  const useZh = state.analysisUiLang === 'zh-TW';
  const description = descNode
    ? (useZh ? (descNode.description_zh_TW || descNode.description || '') : (descNode.description || ''))
    : '';

  const wikiLink = (hub && (noteUrl(hub.label) || (hub.source_file ? githubSourceUrl(hub.source_file) : '')))
    ? `<a href="${esc(noteUrl(hub.label) || githubSourceUrl(hub.source_file))}" target="_blank" rel="noopener" class="at-node-link">${esc(hub.label)} ${LINK_ICON}</a>`
    : '—';

  const memberLinks = members.slice(0, 12).map(n => {
    const nbZhTW = TRANSLATIONS[n.label] || '';
    const nbDisplay = nbZhTW && nbZhTW !== n.label ? `${n.label} / ${nbZhTW}` : n.label;
    const color = (n.color && n.color.background) || '#555';
    return `<span class="neighbor-link" style="border-left-color:${esc(color)}" data-nid="${esc(n.id)}">${esc(nbDisplay)} <span class="at-comm-count">${n.degree || 0}</span></span>`;
  }).join('');

  const inA = !!(actions && actions.isInA && actions.isInA());
  const inB = !!(actions && actions.isInB && actions.isInB());
  const filterWord = state.analysisUiLang === 'zh-TW' ? '篩選' : 'Filter';
  const filterLabel = actions && actions.filterCount != null ? `${filterWord} (${actions.filterCount})` : filterWord;
  const filterActive = !!(actions && actions.filterActive && actions.filterActive());
  const actionsHTML = actions ? `
    <div class="at-node-actions">
      ${actions.onIsolate ? `<button type="button" class="at-node-btn at-focus${filterActive ? ' on' : ''}" title="Filter / 篩選">${esc(filterLabel)}</button>` : ''}
      ${actions.onAddA ? `<button type="button" class="at-node-btn at-add${inA ? ' on' : ''}" data-set="a" title="Add to Set A / 加入集合 A">A</button>` : ''}
      ${actions.onAddB ? `<button type="button" class="at-node-btn at-add${inB ? ' on' : ''}" data-set="b" title="Add to Set B / 加入集合 B">B</button>` : ''}
    </div>` : '';

  const hasBack = detailHistory.length > 0;
  const backBtn = hasBack ? '<button type="button" class="at-node-back" aria-label="Back" title="Back">&larr;</button>' : '';

  infoCard.innerHTML = `
    <div class="at-node-head">
      <div class="at-node-head-top">
        ${backBtn}
        <span class="at-node-title">${esc(displayName)} <span class="node-type" style="color:${esc(c.color)}">community</span></span>
        <button type="button" class="at-node-close" aria-label="Close">&times;</button>
      </div>
      <div class="at-node-head-divider"></div>
      ${headLangToggle()}
    </div>
    <div class="at-node-scroll">
      <div class="at-node-metrics">
        <div class="at-kv"><span class="key"><span class="sw" style="background:${esc(c.color)}"></span>Community</span><span class="val">#${c.cid}</span></div>
        <div class="at-kv"><span class="key">Nodes</span><span class="val">${members.length}</span></div>
        <div class="at-kv"><span class="key">Size</span><span class="val">${c.count || members.length}</span></div>
        <div class="at-kv"><span class="key">Hub</span><span class="val">${esc(hub ? hub.label : c.label)}</span></div>
      </div>
      <div class="field node-source-row"><span class="info-muted">Source:</span> ${wikiLink}</div>
      ${contextCard(description)}
      ${memberLinks ? `<div class="field info-connections">Top members (${members.length})</div><div id="neighbors-list">${memberLinks}</div>` : ''}
    </div>
    <div class="at-node-head-actions-row">
      ${actionsHTML}
    </div>
  `;

  infoCard.querySelector('.at-node-close').addEventListener('click', hideNodeInfo);
  const backEl = infoCard.querySelector('.at-node-back');
  if (backEl) backEl.addEventListener('click', goBackDetail);
  if (actions && actions.onIsolate) {
    infoCard.querySelector('.at-node-actions .at-node-btn:not(.at-add)').addEventListener('click', actions.onIsolate);
  }
  if (actions && (actions.onAddA || actions.onAddB)) {
    const btnA = infoCard.querySelector('.at-node-actions .at-add[data-set="a"]');
    const btnB = infoCard.querySelector('.at-node-actions .at-add[data-set="b"]');
    const sync = () => {
      if (btnA && actions.isInA) btnA.classList.toggle('on', actions.isInA());
      if (btnB && actions.isInB) btnB.classList.toggle('on', actions.isInB());
    };
    if (actions.onAddA && btnA) btnA.addEventListener('click', () => { actions.onAddA(); sync(); });
    if (actions.onAddB && btnB) btnB.addEventListener('click', () => { actions.onAddB(); sync(); });
  }
  bindHeadLangToggle();
  infoCard.hidden = false;
}
document.addEventListener('click', e => {
  const el = e.target.closest('.neighbor-link');
  if (el && el.dataset.nid !== undefined) {
    selectNode(el.dataset.nid);
  }
});

// Community focus cleanup — kept as a no-op-ish reset for prompt.js highlights
// (the old sidebar legend that drove it was removed).
export function clearCommunityFocus() {
  state.focusedCommunity = null;
  if (state.activeTrace) {
    if (state.activeRouteIdx >= 0) {
      activateRoute(state.activeTrace, state.activeRouteIdx);
    } else {
      highlightTraceNodes(state.activeTrace);
    }
  } else {
    resetVisualState();
  }
}

// ------------------------------------------------------------
// Graph Query (trace panel) — rendered inside #analysis-tools by prompt.js.
// Element refs are re-bound after every renderAnalysisTools() rebuild.
// ------------------------------------------------------------
let traceSelectEl = null;
let traceSummaryEl = null;
let traceRoutesEl = null;
let traceKeyNodesEl = null;
let traceClearEl = null;

export function rebindTracePanel() {
  traceSelectEl = document.getElementById('trace-select');
  traceSummaryEl = document.getElementById('trace-summary');
  traceRoutesEl = document.getElementById('trace-routes');
  traceKeyNodesEl = document.getElementById('trace-key-nodes');
  traceClearEl = document.getElementById('trace-clear');
  if (!traceSelectEl) return;

  // Repopulate the dropdown (idempotent — the card is rebuilt on re-render).
  traceSelectEl.innerHTML = '<option value="">Select a query…</option>';
  TRACES.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = t.title;
    traceSelectEl.appendChild(opt);
  });
  if (state.activeTrace) traceSelectEl.value = state.activeTrace.id;

  traceSelectEl.addEventListener('change', () => {
    const traceId = traceSelectEl.value;
    if (!traceId) { clearTrace(); return; }
    const trace = TRACES.find(t => t.id === traceId);
    if (trace) activateTrace(trace);
  });

  if (traceClearEl) traceClearEl.addEventListener('click', clearTrace);
}

function renderKeyNodeSpans(parent, items) {
  if (!parent) return;
  parent.innerHTML = '<div class="key-nodes-title">Key Nodes</div>';
  items.forEach(item => {
    const span = document.createElement('span');
    span.className = 'trace-key-node';
    span.textContent = item.label;
    span.title = item.title;
    span.addEventListener('click', () => {
      if (nodeObjects.has(item.id)) selectNode(item.id);
    });
    parent.appendChild(span);
  });
}

export function clearTrace() {
  state.activeTrace = null;
  state.activeRouteIdx = -1;
  if (traceSelectEl) traceSelectEl.value = '';
  if (traceSummaryEl) traceSummaryEl.innerHTML = '';
  if (traceRoutesEl) traceRoutesEl.innerHTML = '';
  if (traceKeyNodesEl) traceKeyNodesEl.innerHTML = '';
  if (traceClearEl) traceClearEl.style.display = 'none';
  resetVisualState();
  updateHash();
}

export function activateTrace(trace) {
  state.activeTrace = trace;
  state.activeRouteIdx = -1;
  state.focusedCommunity = null;
  if (traceSelectEl) traceSelectEl.value = trace.id;
  if (traceClearEl) traceClearEl.style.display = 'block';

  // Show summary
  const sourceLink = trace.sourceUrl
    ? `<div style="margin-top:8px"><a href="${esc(trace.sourceUrl)}" target="_blank" rel="noopener" class="trace-source-link">📄 Full Document <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1H9V7M9 1L1 9"/></svg></a></div>`
    : '';
  if (traceSummaryEl) {
    traceSummaryEl.innerHTML = `<div class="trace-question">${esc(trace.question)}</div><div style="font-size:15px">${esc(trace.summary)}</div>${sourceLink}`;
  }

  // Show routes
  if (traceRoutesEl) {
    traceRoutesEl.innerHTML = '';
    trace.routes.forEach((route, idx) => {
      const div = document.createElement('div');
      div.className = 'trace-route';
      div.innerHTML = `<span class="trace-route-name">${esc(route.name)}</span><span class="trace-route-hops">${route.hops} hop${route.hops !== 1 ? 's' : ''}</span>`;
      div.addEventListener('click', () => activateRoute(trace, idx));
      traceRoutesEl.appendChild(div);
    });
  }

  // Show key nodes
  renderKeyNodeSpans(traceKeyNodesEl, trace.keyNodes.map(kn => ({
    id: kn.id,
    label: kn.label,
    title: kn.role,
  })));

  highlightTraceNodes(trace);
  updateHash();
}

function getTraceNodeIds(trace) {
  const ids = new Set();
  trace.keyNodes.forEach(kn => ids.add(kn.id));
  trace.routes.forEach(route => route.path.forEach(id => ids.add(id)));
  if (trace.centerNode) ids.add(trace.centerNode.id);
  return ids;
}

function getTraceEdgePairs(trace) {
  const pairs = new Set();
  trace.routes.forEach(route => {
    for (let i = 0; i < route.path.length - 1; i++) {
      const a = route.path[i], b = route.path[i + 1];
      pairs.add(`${a}::${b}`);
      pairs.add(`${b}::${a}`);
    }
  });
  return pairs;
}

export function highlightTraceNodes(trace) {
  const traceIds = getTraceNodeIds(trace);
  const traceEdges = getTraceEdgePairs(trace);

  applyNodeState(traceIds, 1, 0.5, 0.08, 0.05);

  applyEdgeState(line => {
    const { edge } = line.userData;
    const key = `${edge.from}::${edge.to}`;
    return traceEdges.has(key);
  }, 0x4E79A7, 0.8, edgeOffColor(), 0.02);

  setLabelVisibility(traceIds);
}

export function activateRoute(trace, routeIdx) {
  state.activeRouteIdx = routeIdx;
  const route = trace.routes[routeIdx];
  const routeNodeIds = new Set(route.path);

  // Update route buttons
  document.querySelectorAll('.trace-route').forEach((el, i) => {
    el.classList.toggle('active', i === routeIdx);
  });

  // Highlight only this route's nodes
  const allTraceIds = getTraceNodeIds(trace);
  nodeMeshes.forEach(m => {
    const id = m.userData.nodeId;
    if (routeNodeIds.has(id)) {
      m.material.opacity = 1;
      m.material.emissiveIntensity = 0.6;
    } else if (allTraceIds.has(id)) {
      m.material.opacity = 0.25;
      m.material.emissiveIntensity = 0.15;
    } else {
      m.material.opacity = 0.05;
      m.material.emissiveIntensity = 0.03;
    }
  });

  // Highlight route edges
  const routePairs = new Set();
  for (let i = 0; i < route.path.length - 1; i++) {
    routePairs.add(`${route.path[i]}::${route.path[i + 1]}`);
    routePairs.add(`${route.path[i + 1]}::${route.path[i]}`);
  }
  applyEdgeState(line => {
    const { edge } = line.userData;
    return routePairs.has(`${edge.from}::${edge.to}`);
  }, 0x7cb3d4, 1, edgeOffColor(), 0.02);

  setLabelVisibility(routeNodeIds);

  // Show route mechanism in the analysis-panel info card
  if (state.analysisOpen && infoCard) {
    const renderRouteCard = () => {
      const pathHtml = route.path.map((id, i) => {
        const n = nodeMap.get(id);
        const label = n ? n.label : id;
        const color = n ? n.color.background : '#555';
        const arrow = i < route.path.length - 1 ? `<div class="route-arrow">↓</div>` : '';
        return `<span class="neighbor-link" style="border-left-color:${esc(color)}" data-nid="${esc(id)}">${esc(label)}</span>${arrow}`;
      }).join('');
      infoCard.innerHTML = `
        <div class="at-node-head">
          <div class="at-node-head-top">
            <span class="at-node-title">${esc(route.name)} <span class="route-meta">${route.hops} hop${route.hops !== 1 ? 's' : ''}</span></span>
            <button type="button" class="at-node-close" aria-label="Close">&times;</button>
          </div>
          <div class="at-node-head-divider"></div>
          ${headLangToggle()}
        </div>
        <div class="at-node-scroll">
          <div class="route-path">${pathHtml}</div>
          <div class="route-mechanism">${esc(route.mechanism)}</div>
        </div>
      `;
      infoCard.querySelector('.at-node-close').addEventListener('click', hideNodeInfo);
      bindHeadLangToggle();
      infoCard.hidden = false;
    };
    routeCardRerender = renderRouteCard;
    renderRouteCard();
  }

  // Focus camera on route midpoint
  const routeMeshes = route.path.map(id => nodeObjects.get(id)).filter(Boolean);
  if (routeMeshes.length > 0) {
    const center = new THREE.Vector3(0, 0, 0);
    routeMeshes.forEach(m => center.add(m.position));
    center.divideScalar(routeMeshes.length);
    animateCamera(center.clone().add(CAMERA_OFFSET), center);
  }
  updateHash();
}

// ------------------------------------------------------------
// Settings popover (standalone gear button, bottom right)
// ------------------------------------------------------------
const settingsBtn = document.getElementById('btn-settings');
const settingsPopover = document.getElementById('settings-popover');

function closeSettings() {
  if (settingsPopover) settingsPopover.hidden = true;
  if (settingsBtn) settingsBtn.classList.remove('active');
}

  if (settingsBtn && settingsPopover) {
    settingsPopover.addEventListener('click', (e) => e.stopPropagation());
    settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPopover.hidden = !settingsPopover.hidden;
    settingsBtn.classList.toggle('active', !settingsPopover.hidden);
  });
  document.addEventListener('click', (e) => {
    if (settingsPopover.hidden) return;
    if (!settingsPopover.contains(e.target) && e.target !== settingsBtn) closeSettings();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSettings();
  });
}

// ------------------------------------------------------------
// Controls
// ------------------------------------------------------------
document.getElementById('btn-reset').addEventListener('click', () => {
  state.selectedEdge = null;
  clearTrace();
  deselectNode();
  clearCommunityFocus();
  animateCamera(new THREE.Vector3(-120, 0, 500), new THREE.Vector3(170, 0, 0));
});

// ------------------------------------------------------------
// Save graph as PNG (download)
// ------------------------------------------------------------
// Render the current scene (including any active highlight) to a PNG and
// download it under `filename`. Reuses a throwaway preserveDrawingBuffer layer
// and composites CSS2D node labels so names are visible in the export.
export async function exportGraphPNG(filename) {
  const mainBg = scene.background;
  const captureLayer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  let dataUrl = null;
  try {
    const cw = container.clientWidth, ch = container.clientHeight;
    captureLayer.setSize(cw, ch);
    captureLayer.setPixelRatio(window.devicePixelRatio);

    scene.background = null;
    captureLayer.render(scene, camera);
    dataUrl = captureLayer.domElement.toDataURL('image/png');
    scene.background = mainBg;
    renderer.render(scene, camera); // restore main canvas without an async gap

    const pxW = captureLayer.domElement.width;
    const pxH = captureLayer.domElement.height;
    const img = await new Promise((res, rej) => {
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = rej;
      im.src = dataUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = pxW; canvas.height = pxH;
    const ctx = canvas.getContext('2d');

    // Compute the screen-space bounding box of all visible nodes so the export
    // can be re-framed: centered in the frame with breathing room instead of
    // clipping at the current viewport edges.
    let bMinX = Infinity, bMinY = Infinity, bMaxX = -Infinity, bMaxY = -Infinity;
    const visible = [];
    const frameTol = 0.1 * Math.max(pxW, pxH);
    labelObjects.forEach((label) => {
      if (!label.visible || !label.element) return;
      const v = label.position.clone().project(camera);
      if (v.z < -1 || v.z > 1) return;
      const sx = (v.x + 1) / 2 * pxW;
      const sy = (1 - v.y) / 2 * pxH;
      if (sx < -frameTol || sx > pxW + frameTol || sy < -frameTol || sy > pxH + frameTol) return;
      visible.push({ label, sx, sy });
      if (sx < bMinX) bMinX = sx;
      if (sx > bMaxX) bMaxX = sx;
      if (sy < bMinY) bMinY = sy;
      if (sy > bMaxY) bMaxY = sy;
    });

    let drawScale = 1, drawOffsetX = 0, drawOffsetY = 0;
    const hasContent = visible.length && bMaxX > bMinX && bMaxY > bMinY;
    if (hasContent) {
      const MARGIN = 0.1; // 10% padding on each side of the frame
      const pad = 40 * (pxW / cw); // extra room so labels don't touch the edge
      const availW = pxW * (1 - 2 * MARGIN);
      const availH = pxH * (1 - 2 * MARGIN);
      const contentW = bMaxX - bMinX + pad * 2;
      const contentH = bMaxY - bMinY + pad * 2;
      drawScale = Math.max(0.2, Math.min(availW / contentW, availH / contentH, 3));
      drawOffsetX = (pxW - contentW * drawScale) / 2 - (bMinX - pad) * drawScale;
      drawOffsetY = (pxH - contentH * drawScale) / 2 - (bMinY - pad) * drawScale;
      // Clear and redraw the captured image fitted into the frame.
      ctx.clearRect(0, 0, pxW, pxH);
      ctx.drawImage(img, drawOffsetX, drawOffsetY, pxW * drawScale, pxH * drawScale);
    } else {
      ctx.drawImage(img, 0, 0, pxW, pxH);
    }

    // Composite CSS2D node labels so the PNG includes names.
    visible.forEach(({ label, sx, sy }) => {
      const el = label.element;
      const x = sx * drawScale + drawOffsetX;
      const y = sy * drawScale + drawOffsetY;
      const lines = (el.innerText || el.textContent || '').split('\n').filter(Boolean);
      if (!lines.length) return;
      const fs = parseFloat(getComputedStyle(el).fontSize) || 16;
      // Theme-aware label colors: read the live style so exported PNGs match
      // the active theme (light chips get dark text/light halo, dark get the
      // inverse). Fall back to the current theme's palette if a style is empty.
      const cs = getComputedStyle(el);
      const light = state.theme === 'light';
      const fill = cs.color || (light ? '#22304A' : '#e0e0e0');
      const chip = cs.backgroundColor || (light ? 'rgba(255,255,255,0.85)' : 'rgba(15,15,26,0.9)');
      const scale = (pxW / cw) * drawScale;
      ctx.font = `600 ${fs * scale}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
      ctx.textAlign = 'center';
      ctx.lineWidth = 3;
      ctx.strokeStyle = chip;
      ctx.fillStyle = fill;
      const lh = (fs + 3) * scale;
      const baseY = y - (lines.length - 1) * lh / 2 - 4 * scale;
      lines.forEach((line, i) => {
        const ly = baseY + i * lh;
        ctx.strokeText(line, x, ly);
        ctx.fillText(line, x, ly);
      });
    });

    const blob = await new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error('no-blob')), 'image/png'));
    const a = document.createElement('a');
    a.download = filename || 'graph.png';
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
    return true;
  } finally {
    scene.background = mainBg;
    renderer.render(scene, camera);
    captureLayer.dispose();
  }
}

document.getElementById('btn-save-png').addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  const origIcon = btn.innerHTML;
  const origTitle = btn.title;
  btn.disabled = true;
  try {
    await exportGraphPNG('graph.png');
    btn.classList.add('ok');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>';
    btn.title = 'Saved graph.png ✓ / 已另存 graph.png ✓';
  } catch (err) {
    btn.classList.add('err');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    btn.title = 'Save failed / 儲存失敗';
  } finally {
    btn.disabled = false;
    setTimeout(() => { btn.innerHTML = origIcon; btn.title = origTitle; btn.classList.remove('ok', 'err'); }, 1800);
  }
});

// Display toggles (settings popover)
document.getElementById('btn-physics').addEventListener('click', (e) => {
  setPhysics(!state.physicsEnabled);
  e.target.classList.toggle('active', state.physicsEnabled);
});

document.getElementById('btn-labels').addEventListener('click', (e) => {
  state.showLabels = !state.showLabels;
  e.target.classList.toggle('active', state.showLabels);
  setAllLabelVisibility();
});

document.getElementById('btn-edges').addEventListener('click', (e) => {
  edgeGroup.visible = !edgeGroup.visible;
  e.target.classList.toggle('active', edgeGroup.visible);
});

// Initialize button active states
document.getElementById('btn-labels').classList.add('active');
document.getElementById('btn-edges').classList.add('active');

// ------------------------------------------------------------
// Zoom Bar
// ------------------------------------------------------------
const zoomTrack = document.getElementById('zoom-slider-track');
let zoomDragging = false;

function zoomFromPointer(e) {
  const rect = zoomTrack.getBoundingClientRect();
  const y = (e.clientY - rect.top) / rect.height;
  setZoomFromFraction(1 - Math.max(0, Math.min(1, y)));
  updateZoomBar();
}

document.getElementById('zoom-in').addEventListener('click', () => {
  setZoomFromFraction(getZoomFraction() + 0.1);
  updateZoomBar();
});

document.getElementById('zoom-out').addEventListener('click', () => {
  setZoomFromFraction(getZoomFraction() - 0.1);
  updateZoomBar();
});

zoomTrack.addEventListener('pointerdown', (e) => {
  zoomDragging = true;
  zoomFromPointer(e);
  e.preventDefault();
});

window.addEventListener('pointermove', (e) => {
  if (zoomDragging) zoomFromPointer(e);
});

window.addEventListener('pointerup', () => {
  zoomDragging = false;
});

updateZoomBar();

// The trace card lives inside #analysis-tools, which prompt.js renders at
// startup — rebind (no-op until those elements exist).
rebindTracePanel();