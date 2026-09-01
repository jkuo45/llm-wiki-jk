// Analysis-panel UI helpers: node/edge info card, Graph Query (trace) panel,
// settings popover, controls, zoom bar. The old sidebar was removed — node
// info and graph queries now live inside the analysis panel (#analysis-box).

import * as THREE from 'three';

import {
  RAW_NODES, LEGEND, TRACES, TRANSLATIONS, nodeMap, adjacency,
  descriptionMap, githubSourceUrl, noteUrl, predicateZh, DATASET_MODE,
} from './data.js';
import { state, persistSettings, resetSettings } from './state.js';
import {
  container, scene, camera, renderer, nodeObjects, nodeMeshes, edgeSegments, labelObjects,
  edgeOffColor, setLabelVisibility, setAllLabelVisibility, applyNodeState, applyEdgeState,
  resetVisualState, animateCamera, CAMERA_OFFSET, setPhysics,
  getZoomFraction, setZoomFromFraction, updateZoomBar,
  applyRestingEdges, setNodeSizeScale, applyLabelSize, applyNodeVisibility,
  refreshLabelLayout, visibilityRegistry,
  setSizeMetric, setAutoRotate, setAutoRotateSpeed, setZoomSpeed,
  setReduceMotion, setRenderQuality, applyLabelLanguage,
  applyAccentToScene, getAccentHex,
} from './core.js';
import { selectNode, deselectNode, setUiHooks } from './interaction.js';
import { updateHash } from './routing.js';
import { esc, renderMarkdown, wikiExcerpt } from './markdown.js';
import { setUiLang } from './i18n.js';
import { registerModal, openModal } from './modal.js';
import { h } from './ui/dom.js';
import { renderDetailCard } from './ui/DetailCard.js';
import { showWikiTooltip, showWikiTooltipHint, repositionWikiTooltip, hideWikiTooltip } from './ui/Tooltip.js';
import { toast } from './ui/Toast.js';
import { enhanceToggle } from './ui/Toggle.js';
import { enhanceIconButton } from './ui/IconButton.js';
import { enhanceSlider } from './ui/Slider.js';

// ------------------------------------------------------------
// Active-window highlight (analysis panel)
// ------------------------------------------------------------
const activePromptPanel = document.getElementById('analysis-panel');

// ------------------------------------------------------------
// Dataset-mode slider (Triples / Wiki / Combined), now inside Settings.
// The mode is baked into the current page via data.js (read from `mode=` in
// the URL hash), so changing it only updates the hash and reloads — the scene
// is rebuilt from the active dataset at module load. The slider runs from
// fewest to most edges (triples → wiki → combined); combined is the default
// union/merged graph and therefore the rightmost (highest) stop.
// ------------------------------------------------------------
const DATASET_ORDER = ['triples', 'wiki', 'combined']; // fewest → most edges
const DATASET_NAME = { triples: 'Triples', wiki: 'Wiki', combined: 'Combined' };

export function setupDatasetSlider() {
  const input = document.getElementById('set-dataset');
  const output = document.getElementById('set-dataset-val');
  if (!input) return;
  // Sync the control to the active (hash) mode — combined (default) = rightmost.
  const index = DATASET_ORDER.indexOf(DATASET_MODE);
  input.value = index >= 0 ? index : 2;
  if (output) output.textContent = DATASET_NAME[DATASET_MODE] || 'Combined';

  const commit = () => {
    const i = Math.max(0, Math.min(2, parseInt(input.value, 10) || 2));
    const next = DATASET_ORDER[i];
    if (next === DATASET_MODE) return; // nothing to change
    const params = new URLSearchParams(location.hash.replace(/^#\/?/, ''));
    if (next === 'combined') {
      params.delete('mode'); // combined is the default — no mode in the hash
    } else {
      params.set('mode', next);
    }
    const qs = params.toString();
    if (qs) {
      location.hash = '#' + qs;
    } else {
      history.pushState(null, '', location.pathname + location.search);
    }
    location.reload();
  };

  input.addEventListener('input', () => {
    const i = Math.max(0, Math.min(2, parseInt(input.value, 10) || 2));
    if (output) output.textContent = DATASET_NAME[DATASET_ORDER[i]] || 'Combined';
  });
  input.addEventListener('change', commit);
}

export function setActiveWindow(name) {
  activePromptPanel.classList.remove('active', 'dimmed');

  const activeEl = name === 'prompt' && activePromptPanel.classList.contains('open')
    ? activePromptPanel
    : null;

  if (activeEl) {
    activeEl.classList.add('active');
    activePromptPanel.classList.remove('dimmed');
  }
}

document.addEventListener('pointerdown', (e) => {
  if (activePromptPanel.contains(e.target)) setActiveWindow('prompt');
  else setActiveWindow(null);
});
document.addEventListener('focusin', (e) => {
  if (activePromptPanel.contains(e.target)) setActiveWindow('prompt');
});

// ------------------------------------------------------------
// Node / edge info card (inside the analysis panel)
// ------------------------------------------------------------
const infoCard = document.getElementById('at-node-detail');

// Analysis-button indicator: when a node detail is loaded into the info card,
// light the floating analysis button's green dot and toast the user so they
// know something is loaded in the (possibly closed) analysis panel.
let lastLoadedNotifyId = null;

// ------------------------------------------------------------
// Shared toast (see ui/Toast.js). The old single #detail-loaded-toast
// element is retired — toasts now stack, support variants, and live in
// one persistent aria-live region.
// ------------------------------------------------------------
export function showToast(text) {
  toast.show(text);
}

function notifyDetailLoaded(nodeId, label) {
  if (!nodeId || nodeId === lastLoadedNotifyId) return;
  lastLoadedNotifyId = nodeId;
  const dot = document.getElementById('analysis-activity-dot');
  if (dot) dot.classList.add('on');
  const useZh = state.analysisUiLang === 'zh-TW';
  showToast(useZh
    ? `「${label}」已載入分析面板`
    : `“${label}” loaded in the analysis panel`);
}

// ------------------------------------------------------------
// Entity-note tooltip + modal. The DOM (#wiki-tooltip / #wiki-modal*) lives in
// index.html and analysis.js wires the close handlers, so here we only populate
// and show. Entity note links in the node/community cards render as tooltip
// spans (.at-node-note-link) instead of navigating straight to GitHub.
// Tooltip show/position/hide mechanics live in ui/Tooltip.js (shared with the
// prompt-entity tooltip in analysis.js).
// ------------------------------------------------------------
const wikiModalOverlay = document.getElementById('wiki-modal-overlay');
const wikiModalTitle = document.getElementById('wiki-modal-title');
const wikiModalBody = document.getElementById('wiki-modal-body');
const wikiModalLink = document.getElementById('wiki-modal-link');
// Shared with analysis.js (which wires the close handlers via modal.js).
registerModal('wiki-modal', wikiModalOverlay);

function nodeDescById(nid) {
  const nd = nodeMap.get(nid);
  if (!nd) return '';
  const useZh = state.analysisUiLang === 'zh-TW';
  return useZh ? (nd.description_zh_TW || nd.description || '') : (nd.description || '');
}

function showNodeWikiTooltip(anchor) {
  const title = anchor.dataset.wiki || '';
  const gh = anchor.dataset.gh || '';
  const desc = nodeDescById(anchor.dataset.nid);
  if (!desc) {
    if (!gh) return;
    showWikiTooltipHint(anchor, title, 'View note on GitHub ↗');
    return;
  }
  const excerpt = wikiExcerpt(desc);
  if (!excerpt) return;
  showWikiTooltip(anchor, { title, body: excerpt, hint: 'Click to expand' });
}

function openNodeWikiModal(anchor) {
  const title = anchor.dataset.wiki || '';
  const gh = anchor.dataset.gh || '';
  const desc = nodeDescById(anchor.dataset.nid);
  wikiModalTitle.textContent = title.replace(/_/g, ' ');
  if (desc) {
    wikiModalBody.innerHTML = renderMarkdown(desc);
  } else {
    wikiModalBody.innerHTML = gh
      ? '<p>No summary is stored for this entity. Open the full note on GitHub.</p>'
      : '<p>No summary is stored for this entity.</p>';
  }
  wikiModalLink.href = gh || '#';
  wikiModalLink.toggleAttribute('disabled', !gh);
  openModal('wiki-modal');
  hideWikiTooltip();
}

infoCard.addEventListener('mouseover', (e) => {
  const a = e.target.closest('.at-node-note-link');
  if (!a) { hideWikiTooltip(); return; }
  showNodeWikiTooltip(a);
});
infoCard.addEventListener('mousemove', (e) => {
  const a = e.target.closest('.at-node-note-link');
  if (a) repositionWikiTooltip(a);
});
infoCard.addEventListener('mouseleave', hideWikiTooltip);
infoCard.addEventListener('click', (e) => {
  const a = e.target.closest('.at-node-note-link');
  if (a) { e.preventDefault(); openNodeWikiModal(a); }
});
infoCard.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const a = e.target.closest('.at-node-note-link');
  if (a) { e.preventDefault(); openNodeWikiModal(a); }
});

export function hideNodeInfo() {
  if (infoCard) infoCard.hidden = true;
  routeCardRerender = null;
  detailHistory = [];
  currentView = null;
  // NOTE: do NOT clear #analysis-subrow-left here — it now holds the hidden
  // #prompt-filter-nodes state holder used by the graph quantity filter, which
  // must persist independently of the detail card.
  // Nothing is loaded in the info card anymore — clear the analysis button's
  // loaded indicator (refreshActivity() re-lights it if prompt work is active).
  lastLoadedNotifyId = null;
  const dot = document.getElementById('analysis-activity-dot');
  if (dot) dot.classList.remove('on');
}

// ------------------------------------------------------------
// Shared detail-card building blocks. The sheet structure itself
// (head / scroll / metrics / context / sections / actions) lives in
// ui/DetailCard.js — these helpers only build the graph-specific
// link spans and action wiring.
// ------------------------------------------------------------

const LINK_ICON = '<svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1H9V7M9 1L1 9"/></svg>';

function linkIcon() {
  return h('span', { html: LINK_ICON, 'aria-hidden': 'true' });
}

// Wiki-note span: opens the shared entity modal on click/Enter (delegated
// listeners on #at-node-detail), with a hover tooltip.
function noteLink(label, nid, href) {
  return h('span', {
    class: 'at-node-link at-node-note-link',
    dataset: { wiki: label, nid, gh: href },
    role: 'button', tabindex: '0',
  }, label, ' ', linkIcon());
}

function ghLink(text, href) {
  return h('a', { href, target: '_blank', rel: 'noopener', class: 'at-node-link' },
    text, ' ', linkIcon());
}

function neighborSpan(nid, color, ...children) {
  return h('span', {
    class: 'neighbor-link',
    style: `border-left-color:${color}`,
    dataset: { nid },
  }, ...children);
}

// Bilingual display name: "Label / 中文" when a real translation exists.
function localizedName(label) {
  const zh = TRANSLATIONS[label] || '';
  return zh && zh !== label ? `${label} / ${zh}` : label;
}

// Map the analysis.js action callbacks onto DetailCard's action props.
function cardActions(actions) {
  if (!actions) return null;
  const filterWord = state.analysisUiLang === 'zh-TW' ? '篩選' : 'Filter';
  const filterFn = actions.onFocus || actions.onIsolate;
  return {
    filter: filterFn ? {
      label: actions.filterCount != null ? `${filterWord} (${actions.filterCount})` : filterWord,
      active: !!(actions.filterActive && actions.filterActive()),
      onClick: filterFn,
    } : null,
    sets: {
      a: actions.onAddA ? { inSet: () => !!(actions.isInA && actions.isInA()), onToggle: actions.onAddA } : null,
      b: actions.onAddB ? { inSet: () => !!(actions.isInB && actions.isInB()), onToggle: actions.onAddB } : null,
    },
  };
}

function detailLangProps() {
  return { value: state.analysisUiLang, onChange: setNodeLang };
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

// Apply a language chosen in the detail head: persist + broadcast the shared
// language (which re-renders the analysis + notes panels), then re-render the
// current detail card in place.
// Records each node/edge card the user views so that clicking through
// Connections (or selecting other nodes/edges) can be undone with Back.
const DETAIL_HISTORY_MAX = 50;
let detailHistory = [];   // stack of earlier views (last entry = most recent)
let currentView = null;   // { type:'node', id, actions } | { type:'edge', edge } | { type:'community', cid }
let routeCardRerender = null; // re-render fn for the transient route card (not tracked in currentView)

// Registered by analysis.js: builds the Graph-mode quick actions (Filter / A / B)
// for a node when the detail sheet is opened from a path that doesn't supply an
// explicit `actions` object (panel open, graph node click). Kept here as a hook
// to avoid introducing a circular import between ui.js and analysis.js.
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
  const n = nodeMap.get(nodeId);
  notifyDetailLoaded(nodeId, n.label || nodeId);
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
    const nbName = localizedName(nb ? nb.label : target);
    return neighborSpan(target, color, nbName, edge.label ? ` — ${edge.label}` : '');
  });

  // Context text: surface the zh-TW translation when the analysis panel is in
  // zh-TW and the node carries a real translation; otherwise the canonical
  // en-US description (which is also the zh fallback emitted by the rebuild).
  const useZh = state.analysisUiLang === 'zh-TW';
  const description = useZh
    ? (n.description_zh_TW || descriptionMap.get(nodeId))
    : descriptionMap.get(nodeId);

  const displayCommunity = localizedName(n.community_name);
  const commColor = LEGEND.find(c => c.cid === n.community);

  // Biological role badges (from the auto-role classifier baked into
  // nodes.json by scripts/triples/rebuild.py). Periphery is omitted
  // from display — at ~74% of nodes it carries no signal.
  const roles = (Array.isArray(n.roles) ? n.roles : []).filter(r => r && r !== 'Periphery');

  // Source (node): deep link to the wiki note when one exists for the label
  // (reconstructed from the manifest), else the triple-source file link. The
  // note renders as a tooltip span (not an outbound link) — the GitHub link
  // moves into the shared entity modal opened on click/hover.
  const noteHref = noteUrl(n.label) || (n.source_file ? githubSourceUrl(n.source_file) : '');

  const edgeSourceField = n.source_file
    ? h('div', { class: 'field node-edge-source' },
        h('span', { class: 'info-muted' }, 'Source (edge):'),
        ghLink(n.source_file.split('/').pop(), githubSourceUrl(n.source_file)))
    : null;

  renderDetailCard(infoCard, {
    title: localizedName(n.label),
    badge: n.file_type || 'concept',
    onClose: hideNodeInfo,
    onBack: detailHistory.length ? goBackDetail : null,
    lang: detailLangProps(),
    metrics: [
      commColor && { key: 'Community', value: displayCommunity, swatch: commColor.color },
      { key: 'Degree', value: String(n.degree) },
      { key: 'PageRank', value: (n.pagerank || 0).toFixed(5) },
      { key: 'Betweenness', value: (n.betweenness || 0).toFixed(4) },
      { key: 'Clustering', value: (n.clustering || 0).toFixed(3) },
      { key: 'k-core', value: String(n.k_core || 0) },
      roles.length && { key: 'Roles', rowClass: 'at-kv-roles',
        value: roles.map(r => h('span', { class: 'role-badge', dataset: { role: r } }, r)) },
    ].filter(Boolean),
    rows: [h('div', { class: 'field node-source-row' },
      h('span', { class: 'info-muted' }, 'Source (node):'),
      noteHref ? noteLink(n.label, n.id, noteHref) : '—')],
    context: { text: description, max: 2800, footer: edgeSourceField },
    sections: neighbors.length
      ? [{ heading: `Connections (${neighbors.length})`, items: neighborItems }]
      : [],
    actions: cardActions(actions),
  });
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
  const fromDisplay = localizedName(fromNode ? fromNode.label : edge.from);
  const toDisplay = localizedName(toNode ? toNode.label : edge.to);
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

  renderDetailCard(infoCard, {
    title: 'Relation / 關聯',
    onClose: hideNodeInfo,
    onBack: detailHistory.length ? goBackDetail : null,
    lang: detailLangProps(),
    rows: [h('div', { class: 'field', style: 'margin-top:6px' },
      neighborSpan(edge.from, fromNode ? fromNode.color.background : '#555', fromDisplay),
      h('div', { class: 'route-arrow' },
        `↓ ${displayRelation}`,
        confidence ? h('span', { class: 'conf-hint' }, confidence) : null),
      neighborSpan(edge.to, toNode ? toNode.color.background : '#555', toDisplay))],
    context: { text: edgeDesc, max: 1200 },
  });
}

// Community card: rendered into the same slide-up detail sheet when clicking a
// community row in the analysis panel. Surfaces the community's hub concept
// (description + wiki note), topology metrics, and its most-connected members.
// `actions` (optional) provides Isolate / Set A / Set B callbacks from analysis.js.
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

  // Representative description: fall back to the top-degree member when the hub
  // node has no description. Mirror the node sheet's zh-TW handling.
  const descNode = (hub && hub.description) ? hub : members[0];
  const useZh = state.analysisUiLang === 'zh-TW';
  const description = descNode
    ? (useZh ? (descNode.description_zh_TW || descNode.description || '') : (descNode.description || ''))
    : '';

  const hubNoteHref = hub ? (noteUrl(hub.label) || (hub.source_file ? githubSourceUrl(hub.source_file) : '')) : '';

  const memberItems = members.slice(0, 12).map(n => {
    const color = (n.color && n.color.background) || '#555';
    return neighborSpan(n.id, color, localizedName(n.label), ' ',
      h('span', { class: 'at-comm-count' }, String(n.degree || 0)));
  });

  renderDetailCard(infoCard, {
    title: localizedName(c.label),
    badge: 'community',
    badgeColor: c.color,
    onClose: hideNodeInfo,
    onBack: detailHistory.length ? goBackDetail : null,
    lang: detailLangProps(),
    metrics: [
      { key: 'Community', value: `#${c.cid}`, swatch: c.color },
      { key: 'Nodes', value: String(members.length) },
      { key: 'Size', value: String(c.count || members.length) },
      { key: 'Hub', value: hub ? hub.label : c.label },
    ],
    rows: [h('div', { class: 'field node-source-row' },
      h('span', { class: 'info-muted' }, 'Source:'),
      hubNoteHref ? noteLink(hub.label, hub.id, hubNoteHref) : '—')],
    context: { text: description },
    sections: memberItems.length
      ? [{ heading: `Top members (${members.length})`, items: memberItems }]
      : [],
    actions: cardActions(actions),
  });
}
document.addEventListener('click', e => {
  const el = e.target.closest('.neighbor-link');
  if (el && el.dataset.nid !== undefined) {
    selectNode(el.dataset.nid);
  }
});

// Community focus cleanup — kept as a no-op-ish reset for analysis.js highlights
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
// Graph Query (trace panel) — rendered inside #analysis-tools by analysis.js.
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

  applyEdgeState(edge => {
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
  applyEdgeState(edge => {
    return routePairs.has(`${edge.from}::${edge.to}`);
  }, 0x7cb3d4, 1, edgeOffColor(), 0.02);

  setLabelVisibility(routeNodeIds);

  // Show route mechanism in the analysis-panel info card
  if (state.analysisOpen && infoCard) {
    const renderRouteCard = () => {
      const pathItems = route.path.flatMap((id, i) => {
        const n = nodeMap.get(id);
        const label = n ? n.label : id;
        const color = n ? n.color.background : '#555';
        const items = [neighborSpan(id, color, label)];
        if (i < route.path.length - 1) items.push(h('div', { class: 'route-arrow' }, '↓'));
        return items;
      });
      renderDetailCard(infoCard, {
        title: route.name,
        badge: `${route.hops} hop${route.hops !== 1 ? 's' : ''}`,
        badgeClass: 'route-meta',
        onClose: hideNodeInfo,
        lang: detailLangProps(),
        rows: [h('div', { class: 'route-path' }, pathItems)],
        context: route.mechanism
          ? { text: route.mechanism, max: Infinity, className: 'route-mechanism' }
          : null,
      });
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
// Settings — full-screen slide-up bottom sheet (gear button toggles it; a
// dimmed backdrop sits behind). The sheet is hoisted to <body> at runtime so
// position:fixed is viewport-relative and its z-index isn't trapped under
// #controls / #graph.
// ------------------------------------------------------------
const settingsBtn = document.getElementById('btn-settings');
const settingsPopover = document.getElementById('settings-popover');

// Hoist the sheet + a backdrop to body level so the fixed positioning and high
// z-index apply against the viewport, not the controls rail's stacking context.
let settingsBackdrop = null;
if (settingsPopover && settingsPopover.parentElement) {
  settingsBackdrop = document.createElement('div');
  settingsBackdrop.id = 'settings-backdrop';
  settingsBackdrop.hidden = true;
  document.body.appendChild(settingsBackdrop);
  document.body.appendChild(settingsPopover);
}

function openSettings() {
  if (!settingsPopover) return;
  settingsPopover.hidden = false;
  if (settingsBackdrop) settingsBackdrop.hidden = false;
  if (settingsBtn) settingsBtn.classList.add('active');
}
function closeSettings() {
  if (settingsPopover) settingsPopover.hidden = true;
  if (settingsBackdrop) settingsBackdrop.hidden = true;
  if (settingsBtn) settingsBtn.classList.remove('active');
}

if (settingsBtn && settingsPopover) {
  settingsPopover.addEventListener('click', (e) => e.stopPropagation());
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (settingsPopover.hidden) openSettings(); else closeSettings();
  });
  const settingsClose = document.getElementById('settings-close');
  if (settingsClose) settingsClose.addEventListener('click', closeSettings);
  if (settingsBackdrop) settingsBackdrop.addEventListener('click', closeSettings);
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

const savePngBtn = enhanceIconButton(document.getElementById('btn-save-png'));
document.getElementById('btn-save-png').addEventListener('click', async () => {
  savePngBtn.setBusy();
  try {
    await exportGraphPNG('graph.png');
    savePngBtn.setOk();
    savePngBtn.el.title = 'Saved graph.png ✓ / 已另存 graph.png ✓';
  } catch (err) {
    console.error('PNG export failed:', err);
    savePngBtn.setErr();
    savePngBtn.el.title = 'Save failed / 儲存失敗';
    toast.show('Could not export the graph as PNG / PNG 匯出失敗', { variant: 'err' });
  }
});

// Display toggles (settings popover) — adopted by ui/Toggle.js so
// aria-pressed and the .active class can never drift apart.
const physicsToggle = enhanceToggle(document.getElementById('btn-physics'), {
  onChange: () => setPhysics(!state.physicsEnabled),
});
const labelsToggle = enhanceToggle(document.getElementById('btn-labels'), {
  onChange: (on) => {
    state.showLabels = on;
    state.settings.showLabels = on;
    persistSettings();
    setAllLabelVisibility();
  },
});
const edgesToggle = enhanceToggle(document.getElementById('btn-edges'), {
  onChange: (on) => {
    edgeSegments.visible = on;
    state.settings.showEdges = on;
    persistSettings();
  },
});

// Initialize toggle states from the (persisted) settings.
labelsToggle.set(state.showLabels);
edgesToggle.set(edgeSegments.visible);

// ------------------------------------------------------------
// Settings — appearance / labels / filters controls (persisted)
// Every control reads and writes state.settings (see state.js); changes are
// applied immediately to the scene and persisted on 'change' (the final
// commit for a slider drag) plus on the reset button.
// ------------------------------------------------------------

// True when no highlight state owns the edge colours — re-applying the
// resting style during a selection/trace/prompt-highlight would clobber it.
function edgesAtRest() {
  return !state.selectedNode && !state.selectedEdge && !state.activeTrace &&
    !visibilityRegistry.promptEnabled &&
    !(visibilityRegistry.promptIds && visibilityRegistry.promptIds.size);
}

const edgeColorModeSel = document.getElementById('set-edge-color-mode');
const edgeColorInput = document.getElementById('set-edge-color');
// Legacy direct element refs still needed (selects + colour inputs are not
// migrated in Phase 2; sliders/toggles are adopted via the ui/ primitives).
const sizeMetricSel = document.getElementById('set-size-metric');
const labelLangSel = document.getElementById('set-label-lang');
const renderQualitySel = document.getElementById('set-render-quality');
const settingsResetBtn = document.getElementById('btn-settings-reset');

// ------------------------------------------------------------
// Settings controls, adopted by the ui/ primitives (Phase 2).
// Sliders: `input` = live preview, `change` = commit/persist.
// Null-safe adopters: every control is optional markup.
// ------------------------------------------------------------
function slider(id, outId, opts) {
  const input = document.getElementById(id);
  const output = outId ? document.getElementById(outId) : null;
  return input ? enhanceSlider(input, { output, ...opts }) : null;
}
function toggleCtl(id, opts) {
  const el = document.getElementById(id);
  return el ? enhanceToggle(el, opts) : null;
}

const edgeOpacityCtl = slider('set-edge-opacity', 'set-edge-opacity-val', {
  format: (v) => Math.round(v * 100) + '%',
  onInput: (v) => {
    state.settings.edgeOpacity = v;
    if (edgesAtRest()) applyRestingEdges();
  },
  onCommit: persistSettings,
});
const nodeSizeCtl = slider('set-node-size', 'set-node-size-val', {
  format: (v) => Number(v).toFixed(1) + '\u00d7',
  onInput: (v) => setNodeSizeScale(v),
  onCommit: persistSettings,
});
const labelSensCtl = slider('set-label-sensitivity', 'set-label-sensitivity-val', {
  format: (v) => Math.round(v) + '%',
  onInput: (v) => {
    state.settings.labelSensitivity = Math.round(v);
    refreshLabelLayout();
  },
  onCommit: persistSettings,
});
const labelSizeCtl = slider('set-label-size', 'set-label-size-val', {
  format: (v) => Math.round(v) + 'px',
  onInput: (v) => {
    state.settings.labelSize = Math.round(v);
    applyLabelSize(state.settings.labelSize);
    refreshLabelLayout(); // declutter half-extents depend on the font size
  },
  onCommit: persistSettings,
});
const minDegreeCtl = slider('set-min-degree', 'set-min-degree-val', {
  format: (v) => '\u2265 ' + Math.round(v),
  onInput: (v) => {
    state.settings.minDegree = Math.round(v);
    applyNodeVisibility();
    refreshLabelLayout();
  },
  onCommit: persistSettings,
});
const minConfCtl = slider('set-min-confidence', 'set-min-confidence-val', {
  format: (v) => '\u2265 ' + Math.round(v * 100) + '%',
  onInput: (v) => {
    state.settings.edgeMinConfidence = v;
    applyNodeVisibility();
  },
  onCommit: persistSettings,
});
const rotateSpeedCtl = slider('set-rotate-speed', 'set-rotate-speed-val', {
  format: (v) => Number(v).toFixed(1),
  onInput: (v) => setAutoRotateSpeed(v),
  onCommit: persistSettings,
});
const zoomSpeedCtl = slider('set-zoom-speed', 'set-zoom-speed-val', {
  format: (v) => Number(v).toFixed(1) + '\u00d7',
  onInput: (v) => setZoomSpeed(v),
  onCommit: persistSettings,
});

const autorotateToggle = toggleCtl('btn-autorotate', {
  onChange: () => {
    setAutoRotate(!state.settings.autoRotate);
    autorotateToggle.set(autorotateEffective());
    persistSettings();
  },
});
const reduceMotionToggle = toggleCtl('btn-reduce-motion', {
  onChange: () => {
    setReduceMotion(!state.settings.reduceMotion);
    reduceMotionToggle.set(!!state.settings.reduceMotion);
    // Auto-rotate is force-disabled by reduce-motion — reflect that.
    if (autorotateToggle) autorotateToggle.set(autorotateEffective());
    persistSettings();
  },
});

function syncEdgeColorVisibility() {
  if (edgeColorInput) edgeColorInput.hidden = state.settings.edgeColorMode !== 'mono';
}

// Auto-rotate is only effective when reduce-motion is off; the toggle reflects
// the effective state.
function autorotateEffective() {
  return !!state.settings.autoRotate && !state.settings.reduceMotion;
}

// Accent colour — presets + custom picker
const accentPresetsEl = document.getElementById('accent-presets');
const accentColorInput = document.getElementById('set-accent-color');
function applyAccent(hex) {
  if (hex && /^#[0-9a-fA-F]{6}$/.test(hex)) {
    document.documentElement.style.setProperty('--accent', hex);
  } else {
    document.documentElement.style.removeProperty('--accent');
  }
  applyAccentToScene();
}
function syncAccentSwatches(hex) {
  if (!accentPresetsEl) return;
  const norm = (hex || '').toLowerCase();
  accentPresetsEl.querySelectorAll('.accent-swatch').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.accent.toLowerCase() === norm);
  });
  if (accentColorInput && hex) accentColorInput.value = hex;
}

// Push current settings into every control (used on init/reset). Slider/toggle
// controllers keep their output readouts and aria state in sync internally.
function syncSettingsInputs() {
  const s = state.settings;
  if (edgeOpacityCtl) edgeOpacityCtl.set(s.edgeOpacity);
  if (edgeColorModeSel) {
    edgeColorModeSel.value = s.edgeColorMode;
    syncEdgeColorVisibility();
    if (edgeColorInput) edgeColorInput.value = s.edgeColor;
  }
  if (nodeSizeCtl) nodeSizeCtl.set(s.nodeSizeScale);
  if (sizeMetricSel) sizeMetricSel.value = s.sizeMetric;
  if (labelSensCtl) labelSensCtl.set(s.labelSensitivity);
  if (labelSizeCtl) labelSizeCtl.set(s.labelSize);
  if (labelLangSel) labelLangSel.value = s.labelLang;
  if (minDegreeCtl) minDegreeCtl.set(s.minDegree);
  if (minConfCtl) minConfCtl.set(s.edgeMinConfidence);
  if (autorotateToggle) autorotateToggle.set(autorotateEffective());
  if (reduceMotionToggle) reduceMotionToggle.set(!!s.reduceMotion);
  if (rotateSpeedCtl) rotateSpeedCtl.set(s.autoRotateSpeed);
  if (zoomSpeedCtl) zoomSpeedCtl.set(s.zoomSpeed);
  if (renderQualitySel) renderQualitySel.value = s.renderQuality;
  if (accentColorInput || accentPresetsEl) {
    const ac = s.accentColor && /^#[0-9a-fA-F]{6}$/.test(s.accentColor) ? s.accentColor : '';
    if (ac) {
      applyAccent(ac);
      syncAccentSwatches(ac);
    } else {
      // No override — ensure inline var is cleared so theme default shows
      document.documentElement.style.removeProperty('--accent');
      applyAccentToScene();
      const cur = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0F766E';
      if (accentColorInput) accentColorInput.value = cur.startsWith('#') ? cur : '#0F766E';
      syncAccentSwatches('');
    }
  }
}

if (edgeColorModeSel && edgeColorInput) {
  edgeColorModeSel.addEventListener('change', () => {
    state.settings.edgeColorMode = edgeColorModeSel.value;
    syncEdgeColorVisibility();
    if (edgesAtRest()) applyRestingEdges();
    persistSettings();
  });
  edgeColorInput.addEventListener('input', () => {
    state.settings.edgeColor = edgeColorInput.value;
    if (state.settings.edgeColorMode === 'mono' && edgesAtRest()) applyRestingEdges();
  });
  edgeColorInput.addEventListener('change', persistSettings);
}

if (sizeMetricSel) {
  sizeMetricSel.addEventListener('change', () => {
    setSizeMetric(sizeMetricSel.value);
    persistSettings();
  });
}

if (labelLangSel) {
  labelLangSel.addEventListener('change', () => {
    state.settings.labelLang = labelLangSel.value;
    applyLabelLanguage();
    persistSettings();
  });
}

if (renderQualitySel) {
  renderQualitySel.addEventListener('change', () => {
    setRenderQuality(renderQualitySel.value);
    persistSettings();
  });
}

if (accentPresetsEl) {
  accentPresetsEl.querySelectorAll('.accent-swatch').forEach((btn) => {
    btn.addEventListener('click', () => {
      const hex = btn.dataset.accent;
      state.settings.accentColor = hex;
      applyAccent(hex);
      syncAccentSwatches(hex);
      persistSettings();
    });
  });
}
if (accentColorInput) {
  accentColorInput.addEventListener('input', () => {
    const hex = accentColorInput.value;
    state.settings.accentColor = hex;
    applyAccent(hex);
    syncAccentSwatches(hex);
  });
  accentColorInput.addEventListener('change', persistSettings);
}

if (settingsResetBtn) {
  settingsResetBtn.addEventListener('click', () => {
    resetSettings();
    syncSettingsInputs();
    // The Display toggles live in settings as well — re-sync them.
    state.showLabels = state.settings.showLabels !== false;
    edgeSegments.visible = state.settings.showEdges !== false;
    document.getElementById('btn-labels').classList.toggle('active', state.showLabels);
    document.getElementById('btn-edges').classList.toggle('active', edgeSegments.visible);
    if (edgesAtRest()) applyRestingEdges();
    setNodeSizeScale(state.settings.nodeSizeScale);
    setSizeMetric(state.settings.sizeMetric);
    applyLabelSize(state.settings.labelSize);
    applyLabelLanguage();
    applyNodeVisibility();
    refreshLabelLayout();
    setAutoRotate(state.settings.autoRotate);
    setAutoRotateSpeed(state.settings.autoRotateSpeed);
    setZoomSpeed(state.settings.zoomSpeed);
    setReduceMotion(state.settings.reduceMotion);
    setRenderQuality(state.settings.renderQuality);
    // Toggle buttons reflect the effective (post-reduce-motion) state.
    if (autorotateToggle) autorotateToggle.set(autorotateEffective());
    if (reduceMotionToggle) reduceMotionToggle.set(!!state.settings.reduceMotion);
  });
}

// Keep Three.js accent in sync when theme flips and no custom accent is set.
window.addEventListener('site-theme-change', () => {
  if (!state.settings.accentColor) {
    // No override — recompute from the now-active sheet's --accent
    applyAccentToScene();
    const cur = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    if (accentColorInput && cur.startsWith('#')) accentColorInput.value = cur;
  }
});

// Initialize control positions from the persisted settings.
syncSettingsInputs();

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

// Keyboard operation for the slider (role="slider" in index.html): Up/Right
// zoom in, Down/Left zoom out, Home/End jump to the extremes.
zoomTrack.addEventListener('keydown', (e) => {
  const step = 0.05;
  let handled = true;
  switch (e.key) {
    case 'ArrowUp': case 'ArrowRight': setZoomFromFraction(getZoomFraction() + step); break;
    case 'ArrowDown': case 'ArrowLeft': setZoomFromFraction(getZoomFraction() - step); break;
    case 'Home': setZoomFromFraction(0); break;
    case 'End': setZoomFromFraction(1); break;
    default: handled = false;
  }
  if (handled) { e.preventDefault(); updateZoomBar(); }
});

window.addEventListener('pointermove', (e) => {
  if (zoomDragging) zoomFromPointer(e);
});

window.addEventListener('pointerup', () => {
  zoomDragging = false;
});

updateZoomBar();

// The trace card lives inside #analysis-tools, which analysis.js renders at
// startup — rebind (no-op until those elements exist).
rebindTracePanel();

// Register the selection/info renderers with interaction.js (dependency
// inversion — see setUiHooks in interaction.js). These are hoisted function
// declarations, so they exist even though this runs at module-eval time.
setUiHooks({ showInfo, showEdgeInfo, hideNodeInfo, activateRoute, highlightTraceNodes });