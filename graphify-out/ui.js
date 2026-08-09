// Sidebar UI: search, info panel, community legend, trace panel, controls,
// zoom bar, mobile sidebar toggle.

import * as THREE from 'three';

import {
  RAW_NODES, RAW_EDGES, LEGEND, TRACES, TRANSLATIONS, nodeMap, adjacency,
  descriptionMap, WIKI_CONTEXT, githubSourceUrl,
} from './data.js';
import { state } from './state.js';
import {
  container, nodeObjects, nodeMeshes, edgeObjects, edgeGroup, labelObjects,
  setLabelVisibility, setAllLabelVisibility, applyNodeState, applyEdgeState,
  resetVisualState, animateCamera, CAMERA_OFFSET, setPhysics,
  getZoomFraction, setZoomFromFraction, updateZoomBar,
} from './core.js';
import { selectNode, deselectNode, selectEdge } from './interaction.js';
import { updateHash } from './routing.js';
import { esc } from './markdown.js';

export const EMPTY_INFO_HTML = '<span class="empty">Click a node to inspect it / 點擊節點以檢查</span>';

// ------------------------------------------------------------
// Sidebar Toggle
// ------------------------------------------------------------
const mobileToggle = document.getElementById('mobile-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');

function openSidebar() {
  sidebar.classList.add('open');
  sidebar.classList.remove('closed');
  mobileToggle.classList.remove('visible');
  state.sidebarInfoActive = true;
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebar.classList.add('closed');
  mobileToggle.classList.add('visible');
  void mobileToggle.offsetHeight;
  state.sidebarInfoActive = false;
  deselectNode();
}

function toggleSidebar() {
  if (!sidebar.classList.contains('open')) {
    openSidebar();
  } else {
    closeSidebar();
  }
}

mobileToggle.addEventListener('click', toggleSidebar);
sidebarClose.addEventListener('click', closeSidebar);

// Sidebar starts open
openSidebar();
document.activeElement?.blur();

// ------------------------------------------------------------
// Search
// ------------------------------------------------------------
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = '';
  if (!q) { searchResults.style.display = 'none'; return; }

  const matches = RAW_NODES.filter(n => {
    const labelMatch = n.label.toLowerCase().includes(q);
    const zhTW = TRANSLATIONS[n.label] || '';
    const zhTWMatch = zhTW.toLowerCase().includes(q);
    return labelMatch || zhTWMatch;
  }).slice(0, 20);
  if (!matches.length) { searchResults.style.display = 'none'; return; }

  searchResults.style.display = 'block';
  matches.forEach(n => {
    const el = document.createElement('div');
    el.className = 'search-item';

    const zhTWLabel = TRANSLATIONS[n.label] || '';
    const displayText = zhTWLabel && zhTWLabel !== n.label
      ? `${n.label} / ${zhTWLabel}`
      : n.label;

    el.textContent = displayText;
    el.style.borderLeft = `3px solid ${n.color.background}`;
    el.style.paddingLeft = '8px';
    el.onclick = () => {
      selectNode(n.id);
      searchResults.style.display = 'none';
      searchInput.value = '';
    };
    searchResults.appendChild(el);
  });
});

document.addEventListener('click', e => {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.style.display = 'none';
  }
});

// ------------------------------------------------------------
// Node Info Panel
// ------------------------------------------------------------
export function showInfo(nodeId) {
  const n = nodeMap.get(nodeId);
  if (!n) return;

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

  const description = descriptionMap.get(nodeId);
  const wikiCtx = WIKI_CONTEXT[nodeId] || null;

  const zhTWName = TRANSLATIONS[n.label] || '';
  const displayName = zhTWName && zhTWName !== n.label ? `${n.label} / ${zhTWName}` : n.label;

  const zhTWCommunity = TRANSLATIONS[n.community_name] || '';
  const displayCommunity = zhTWCommunity && zhTWCommunity !== n.community_name ? `${n.community_name} / ${zhTWCommunity}` : n.community_name;

  const wikiLink = wikiCtx
    ? `<a href="${esc(wikiCtx.wiki_url)}" target="_blank" rel="noopener" style="color:#4E79A7;text-decoration:none;font-size:14px">${esc(wikiCtx.wiki_path.split('/').pop())} <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1H9V7M9 1L1 9"/></svg></a>`
    : '—';

  const wikiDesc = wikiCtx && wikiCtx.description
    ? `<div class="field" style="margin-top:8px"><span style="color:#aaa;font-size:14px">Context (node):</span><br><div class="wiki-context-text" style="font-size:15px;color:#bbb;line-height:1.7;max-height:260px;overflow-y:auto;margin-top:6px">${esc(wikiCtx.description.slice(0, 2800))}${wikiCtx.description.length > 2800 ? '…' : ''}</div></div>`
    : '';

  const edgeSourceLink = n.source_file
    ? `<a href="${esc(githubSourceUrl(n.source_file))}" target="_blank" rel="noopener" style="color:#4E79A7;text-decoration:none;font-size:14px">${esc(n.source_file.split('/').pop())} <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1H9V7M9 1L1 9"/></svg></a>`
    : '-';

  const edgeDesc = description
    ? `<div class="field" style="margin-top:8px"><span style="color:#aaa;font-size:14px">Context (edge):</span><br><div style="font-size:14px;color:#bbb;line-height:1.7;max-height:160px;overflow-y:auto;margin-top:6px">${esc(description.slice(0, 700))}${description.length > 700 && n.source_file ? `… <a href="${esc(githubSourceUrl(n.source_file))}" target="_blank" rel="noopener" style="color:#4E79A7;text-decoration:none;font-size:13px">[read more]</a>` : ''}</div></div>`
    : '';

  document.getElementById('info-content').innerHTML = `
    <div class="field"><b>${esc(displayName)}</b></div>
    <div class="field">Type: ${esc(n.file_type || 'unknown')}</div>
    <div class="field">Community: ${esc(displayCommunity)}</div>
    <div class="field"><span style="color:#aaa;font-size:14px">Source (node):</span> ${wikiLink}</div>
    ${wikiDesc}
    <div class="field" style="margin-top:8px;border-top:1px solid #2a2a4e;padding-top:8px"><span style="color:#aaa;font-size:14px">Source (edge):</span> ${edgeSourceLink}</div>
    ${edgeDesc}
    <div class="field">Degree: ${n.degree}</div>
    ${neighbors.length ? `<div class="field" style="margin-top:12px;color:#aaa;font-size:14px">Connections (${neighbors.length})</div><div id="neighbors-list">${neighborItems}</div>` : ''}
  `;
}

document.addEventListener('click', e => {
  const el = e.target.closest('.neighbor-link');
  if (el && el.dataset.nid !== undefined) {
    selectNode(el.dataset.nid);
  }
});

// ------------------------------------------------------------
// Community Legend (click-to-focus)
// ------------------------------------------------------------
function renderKeyNodeSpans(parent, items) {
  parent.innerHTML = '<div style="color:#aaa;font-size:14px;margin:10px 0 6px">Key Nodes</div>';
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

function focusOnCommunity(cid) {
  // If already focused, unfocus
  if (state.focusedCommunity === cid) {
    clearCommunityFocus();
    return;
  }

  if (state.activeTrace) clearTrace();
  state.focusedCommunity = cid;

  document.querySelectorAll('.legend-item').forEach(item => {
    if (item.dataset.cid === String(cid)) {
      item.classList.add('focused');
      item.classList.remove('dimmed');
    } else {
      item.classList.remove('focused');
      item.classList.add('dimmed');
    }
  });

  const target = new Set();
  RAW_NODES.forEach(n => {
    if (n.community === cid) target.add(n.id);
  });
  applyNodeState(target, 1, 0.4, 0.08, 0.05);
  setLabelVisibility(target);

  applyEdgeState(line => {
    const { edge } = line.userData;
    const fromNode = nodeMap.get(edge.from);
    const toNode = nodeMap.get(edge.to);
    return (fromNode && fromNode.community === cid) || (toNode && toNode.community === cid);
  }, 0x4E79A7, 0.6, 0x4a4a6a, 0.02);

  // Show key nodes for this community (top 15 by degree)
  const communityKeyNodes = document.getElementById('community-key-nodes');
  const communityNodes = RAW_NODES
    .filter(n => n.community === cid)
    .sort((a, b) => b.degree - a.degree)
    .slice(0, 15)
    .map(n => {
      const zhTW = TRANSLATIONS[n.label] || '';
      return {
        id: n.id,
        label: zhTW && zhTW !== n.label ? `${n.label} / ${zhTW}` : n.label,
        title: `Degree: ${n.degree}`,
      };
    });
  renderKeyNodeSpans(communityKeyNodes, communityNodes);
}

export function clearCommunityFocus() {
  state.focusedCommunity = null;
  document.querySelectorAll('.legend-item').forEach(item => {
    item.classList.remove('focused', 'dimmed');
  });
  document.getElementById('community-key-nodes').innerHTML = '';

  // Restore to trace state if active, otherwise default
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

const legendEl = document.getElementById('legend');
LEGEND.forEach(c => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.dataset.cid = c.cid;

  const zhTWLabel = TRANSLATIONS[c.label] || '';
  const bilingualLabel = zhTWLabel && zhTWLabel !== c.label
    ? `${c.label}<br><span style="color:#888;font-size:13px">${zhTWLabel}</span>`
    : c.label;

  item.innerHTML = `
    <div class="legend-dot" style="background:${c.color}"></div>
    <span class="legend-label">${bilingualLabel}</span>
    <span class="legend-count">${c.count}</span>
  `;

  item.addEventListener('click', () => focusOnCommunity(c.cid));
  legendEl.appendChild(item);
});

// ------------------------------------------------------------
// Trace Panel
// ------------------------------------------------------------
const traceSelect = document.getElementById('trace-select');
const traceSummary = document.getElementById('trace-summary');
const traceRoutes = document.getElementById('trace-routes');
const traceKeyNodes = document.getElementById('trace-key-nodes');
const traceClear = document.getElementById('trace-clear');
const traceHeader = document.getElementById('trace-header');
const traceBody = document.getElementById('trace-body');
const traceChevron = document.getElementById('trace-chevron');
traceBody.classList.add('open');
traceChevron.classList.add('open');

// Populate trace dropdown
TRACES.forEach(t => {
  const opt = document.createElement('option');
  opt.value = t.id;
  opt.textContent = t.title;
  traceSelect.appendChild(opt);
});

// Toggle trace panel
traceHeader.addEventListener('click', () => {
  traceBody.classList.toggle('open');
  traceChevron.classList.toggle('open');
});

// Select trace
traceSelect.addEventListener('change', () => {
  const traceId = traceSelect.value;
  if (!traceId) { clearTrace(); return; }
  const trace = TRACES.find(t => t.id === traceId);
  if (trace) activateTrace(trace);
});

// Clear trace
traceClear.addEventListener('click', clearTrace);

export function clearTrace() {
  state.activeTrace = null;
  state.activeRouteIdx = -1;
  traceSelect.value = '';
  traceSummary.innerHTML = '';
  traceRoutes.innerHTML = '';
  traceKeyNodes.innerHTML = '';
  traceClear.style.display = 'none';
  resetVisualState();
  updateHash();
}

export function activateTrace(trace) {
  state.activeTrace = trace;
  state.activeRouteIdx = -1;
  state.focusedCommunity = null;
  traceSelect.value = trace.id;
  traceClear.style.display = 'block';

  // Clear community focus styling
  document.querySelectorAll('.legend-item').forEach(item => {
    item.classList.remove('focused', 'dimmed');
  });
  document.getElementById('community-key-nodes').innerHTML = '';

  // Show summary
  const sourceLink = trace.sourceUrl
    ? `<div style="margin-top:8px"><a href="${esc(trace.sourceUrl)}" target="_blank" rel="noopener" style="color:#4E79A7;font-size:14px;text-decoration:none;display:inline-flex;align-items:center;gap:4px">📄 Full Document <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1H9V7M9 1L1 9"/></svg></a></div>`
    : '';
  traceSummary.innerHTML = `<div style="color:#aaa;font-size:14px;margin-bottom:6px">${esc(trace.question)}</div><div style="font-size:15px">${esc(trace.summary)}</div>${sourceLink}`;

  // Show routes
  traceRoutes.innerHTML = '';
  trace.routes.forEach((route, idx) => {
    const div = document.createElement('div');
    div.className = 'trace-route';
    div.innerHTML = `<span class="trace-route-name">${esc(route.name)}</span><span class="trace-route-hops">${route.hops} hop${route.hops !== 1 ? 's' : ''}</span>`;
    div.addEventListener('click', () => activateRoute(trace, idx));
    traceRoutes.appendChild(div);
  });

  // Show key nodes
  renderKeyNodeSpans(traceKeyNodes, trace.keyNodes.map(kn => ({
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
  }, 0x4E79A7, 0.8, 0x4a4a6a, 0.02);

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
  }, 0x7cb3d4, 1, 0x4a4a6a, 0.02);

  setLabelVisibility(routeNodeIds);

  // Show route mechanism in info panel
  if (state.sidebarInfoActive) {
    const pathHtml = route.path.map((id, i) => {
      const n = nodeMap.get(id);
      const label = n ? n.label : id;
      const color = n ? n.color.background : '#555';
      const arrow = i < route.path.length - 1 ? `<div style="color:#4E79A7;font-size:14px;padding:2px 8px">↓</div>` : '';
      return `<span class="neighbor-link" style="border-left-color:${esc(color)}" data-nid="${esc(id)}">${esc(label)}</span>${arrow}`;
    }).join('');
    document.getElementById('info-content').innerHTML = `
      <div class="field"><b>${esc(route.name)}</b><span style="color:#666;font-size:13px;margin-left:8px">${route.hops} hop${route.hops !== 1 ? 's' : ''}</span></div>
      <div style="margin:10px 0">${pathHtml}</div>
      <div class="field" style="font-size:15px;color:#bbb;line-height:1.7">${esc(route.mechanism)}</div>
    `;
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
// Controls
// ------------------------------------------------------------
document.getElementById('btn-reset').addEventListener('click', () => {
  clearTrace();
  deselectNode();
  animateCamera(new THREE.Vector3(-120, 0, 500), new THREE.Vector3(-120, 0, 0));
});

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
