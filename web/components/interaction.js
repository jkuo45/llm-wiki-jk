// Pointer interaction: raycasting, hover, click, drag, node/edge selection,
// tooltips, edge labels. Attaches label event handlers + container listeners.

import * as THREE from 'three';

import {
  container, camera, renderer, controls, nodeObjects, nodeMeshes, labelObjects, edgeSegments,
  edgeList, edgePositions, edgePosAttr,
  edgeLabel, edgeLabelDiv, edgeOffColor, EDGE_ACCENT, setEdgeVisual, setEdgeFilter,
  animateCamera, CAMERA_OFFSET, midpoint, requestRender,
  addStickyRing, removeStickyRing, restoreDefaultLabels, restoreSelectedLabels,
  showHoverLabels, setLabelVisibility, applyNodeState, applyEdgeState, resetVisualState,
} from './core.js';
import { state, stickyNodes, velocities } from './state.js';
import { nodeMap, adjacency, TRANSLATIONS, predicateZh } from './data.js';
import { showInfo, showEdgeInfo, hideNodeInfo, activateRoute, highlightTraceNodes } from './ui.js';
import { updateHash } from './routing.js';
import { esc } from './markdown.js';

// ------------------------------------------------------------
// Raycaster + hover state
// ------------------------------------------------------------
const raycaster = new THREE.Raycaster();
raycaster.params.Points = { threshold: 2 };
raycaster.params.Line = { threshold: 5 };
  const mouse = new THREE.Vector2();
  const tooltip = document.getElementById('tooltip');

  // Map a LineSegments raycast hit to its edge object (hit.index is the first
  // vertex of the segment; two vertices per edge => segment = index / 2).
  function edgeFromIntersect(hit) {
    if (!hit) return null;
    const entry = edgeList[Math.floor(hit.index / 2)];
    return entry ? entry.edge : null;
  }
let lastHoveredNodeId = null;

const btnUnstick = document.getElementById('btn-unstick');

// ------------------------------------------------------------
// Tooltip helpers
// ------------------------------------------------------------
function nodeTooltipHTML(nodeData) {
  const zhTWName = TRANSLATIONS[nodeData.label] || '';
  const displayName = zhTWName && zhTWName !== nodeData.label
    ? `${esc(nodeData.label)} / ${esc(zhTWName)}`
    : esc(nodeData.label);
  const sticky = stickyNodes.has(nodeData.id) ? '<br><span style="color:#4E79A7">Sticky / 已固定</span>' : '';
  const roles = Array.isArray(nodeData.roles) ? nodeData.roles.filter(Boolean) : [];
  const rolesHTML = roles.length
    ? `<br>${roles.map(r => `<span class="role-badge" data-role="${esc(r)}">${esc(r)}</span>`).join(' ')}`
    : '';
  return `<b>${displayName}</b><br>Type: ${esc(nodeData.file_type || 'concept')}<br>Community: ${esc(nodeData.community_name)}<br>Degree: ${nodeData.degree}${rolesHTML}${sticky}`;
}

function showNodeTooltip(nodeData, left, top) {
  tooltip.innerHTML = nodeTooltipHTML(nodeData);
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
  tooltip.classList.add('visible');
}

// ------------------------------------------------------------
// Edge labels
// ------------------------------------------------------------
function showEdgeLabel(edge) {
  const fromMesh = nodeObjects.get(edge.from);
  const toMesh = nodeObjects.get(edge.to);
  if (fromMesh && toMesh) edgeLabel.position.copy(midpoint(fromMesh.position, toMesh.position));

  const labelText = state.analysisUiLang === 'zh-TW'
    ? (predicateZh(edge.label) || edge.label || '')
    : (edge.label || '');
  const confidence = edge.confidence || '';
  edgeLabelDiv.innerHTML = `<b>${esc(labelText)}</b> <span style="opacity:0.6;font-size:9px">${esc(confidence)}</span>`;
  edgeLabelDiv.style.display = 'block';
  edgeLabel.visible = true;

  if (state.hoveredEdge && state.hoveredEdge !== edge) {
    resetEdgeStyle(state.hoveredEdge);
  }
  state.hoveredEdge = edge;
  setEdgeVisual(edge, EDGE_ACCENT, 0.9);
}

function hideEdgeLabel() {
  edgeLabelDiv.style.display = 'none';
  edgeLabel.visible = false;
  if (state.hoveredEdge) {
    resetEdgeStyle(state.hoveredEdge);
    state.hoveredEdge = null;
  }
}

function resetEdgeStyle(edge) {
  if (state.selectedNode) {
    const connected = edge.from === state.selectedNode || edge.to === state.selectedNode;
    setEdgeVisual(edge, connected ? EDGE_ACCENT : edgeOffColor(), connected ? 0.8 : 0.05);
  } else if (state.selectedEdge) {
    const sel = edge === state.selectedEdge;
    setEdgeVisual(edge, sel ? EDGE_ACCENT : edgeOffColor(), sel ? 0.9 : 0.05);
  } else {
    const ba = (edge.color && edge.color.opacity != null ? edge.color.opacity : 1) * 0.6;
    setEdgeVisual(edge, edgeOffColor(), ba);
  }
}

edgeLabelDiv.addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.hoveredEdge) {
    selectEdge(state.hoveredEdge);
  }
});

// ------------------------------------------------------------
// Label event handlers (labels are created in core.js)
// ------------------------------------------------------------
function attachLabelHandlers() {
  labelObjects.forEach((label, id) => {
    const nodeData = nodeMap.get(id);
    if (!nodeData) return;
    const div = label.element;

    div.addEventListener('mouseenter', () => {
      state.hoveredNode = nodeObjects.get(id);
      hideEdgeLabel();
      container.style.cursor = 'pointer';
      const rect = container.getBoundingClientRect();
      const labelRect = div.getBoundingClientRect();
      showNodeTooltip(nodeData, labelRect.left - rect.left, labelRect.bottom - rect.top + 6);
    });

    div.addEventListener('mouseleave', () => {
      state.hoveredNode = null;
      tooltip.classList.remove('visible');
      container.style.cursor = 'default';
    });

    div.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dragMoved) return; // a drag that started on the label shouldn't select
      selectNode(id);
    });

    // Start node dragging from the label itself (same flow as the node mesh:
    // plain drag, Cmd/Ctrl for group drag, touch long-press for group drag).
    div.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      const mesh = nodeObjects.get(id);
      if (!mesh) return;
      e.stopPropagation();
      e.preventDefault();
      beginNodeDrag(e, mesh);
    });
  });
}

// ------------------------------------------------------------
// Mouse move: hover + raycasting
// ------------------------------------------------------------
function processHover(event) {
  if (event.target !== renderer.domElement) return;
  const rect = container.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  if (isDragging) return;

  // When a node is selected, check edges first so edge labels show up
  if (state.selectedNode) {
    const edgeIntersects = raycaster.intersectObject(edgeSegments, false);
    if (edgeIntersects.length > 0) {
      const edge = edgeFromIntersect(edgeIntersects[0]);
      if (edge) {
        state.hoveredNode = null;
        tooltip.classList.remove('visible');
        container.style.cursor = 'pointer';
        showEdgeLabel(edge);
        return;
      }
    }

    const nodeIntersects = raycaster.intersectObjects(nodeMeshes);
    if (nodeIntersects.length > 0) {
      const mesh = nodeIntersects[0].object;
      if (mesh.userData.nodeData) {
        state.hoveredNode = mesh;
        hideEdgeLabel();
        container.style.cursor = 'grab';
        showNodeTooltip(mesh.userData.nodeData, event.clientX - rect.left + 15, event.clientY - rect.top + 15);
        if (lastHoveredNodeId !== mesh.userData.nodeId) {
          lastHoveredNodeId = mesh.userData.nodeId;
          showHoverLabels(mesh.userData.nodeId);
        }
        return;
      }
    }

    state.hoveredNode = null;
    hideEdgeLabel();
    container.style.cursor = 'default';
    tooltip.classList.remove('visible');
    if (lastHoveredNodeId) {
      lastHoveredNodeId = null;
      restoreSelectedLabels();
    }
    return;
  }

  // No node selected - normal behavior (nodes first, then edges)
  const nodeIntersects = raycaster.intersectObjects(nodeMeshes);
  if (nodeIntersects.length > 0) {
    const mesh = nodeIntersects[0].object;
    if (mesh.userData.nodeData) {
      state.hoveredNode = mesh;
      hideEdgeLabel();
      container.style.cursor = 'grab';
      showNodeTooltip(mesh.userData.nodeData, event.clientX - rect.left + 15, event.clientY - rect.top + 15);
      if (lastHoveredNodeId !== mesh.userData.nodeId) {
        lastHoveredNodeId = mesh.userData.nodeId;
        showHoverLabels(mesh.userData.nodeId);
      }
      return;
    }
  }

  const edgeIntersects = raycaster.intersectObject(edgeSegments, false);
  if (edgeIntersects.length > 0) {
    const edge = edgeFromIntersect(edgeIntersects[0]);
    if (edge) {
      state.hoveredNode = null;
      tooltip.classList.remove('visible');
      container.style.cursor = 'pointer';
      showEdgeLabel(edge);
      return;
    }
  }

  state.hoveredNode = null;
  hideEdgeLabel();
  container.style.cursor = 'default';
  tooltip.classList.remove('visible');
  if (lastHoveredNodeId) {
    lastHoveredNodeId = null;
    restoreDefaultLabels();
  }
}

function onClick(event) {
  // Only act on direct canvas clicks; clicks on UI chrome (toolbar buttons,
  // panels, etc.) bubble up to the container and must not select nodes.
  if (event.target !== renderer.domElement) return;
  if (dragMoved) return;

  const rect = container.getBoundingClientRect();
  const clickMouse = new THREE.Vector2(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  );
  raycaster.setFromCamera(clickMouse, camera);

  const nodeIntersects = raycaster.intersectObjects(nodeMeshes);
  const clickedMesh = nodeIntersects.length > 0 ? nodeIntersects[0].object : null;
  const clickedNodeId = clickedMesh ? clickedMesh.userData.nodeId : null;

  if (clickedNodeId) {
    if (stickyNodes.has(clickedNodeId)) {
      unstickNode(clickedNodeId);
    } else if (state.selectedNode === clickedNodeId) {
      deselectNode();
    } else {
      selectNode(clickedNodeId);
    }
  } else if (state.hoveredEdge) {
    selectEdge(state.hoveredEdge);
  } else {
    deselectNode();
  }
}

// Throttle hover raycasting to one rAF: a flood of mousemove events should
// not trigger one raycast each (2.6k node meshes + edges). Skip entirely
// while dragging, and coalesce multiple moves within a frame into one pass.
let hoverFrame = null;
let pendingHoverEvent = null;
function onMouseMove(event) {
  if (event.target !== renderer.domElement) return;
  pendingHoverEvent = event;
  if (isDragging || hoverFrame !== null) return;
  hoverFrame = requestAnimationFrame(() => {
    hoverFrame = null;
    if (pendingHoverEvent) processHover(pendingHoverEvent);
  });
}
container.addEventListener('mousemove', onMouseMove);
container.addEventListener('click', onClick);

// ------------------------------------------------------------
// Node dragging
// ------------------------------------------------------------
const dragPlane = new THREE.Plane();
const dragOffset = new THREE.Vector3();
const intersection = new THREE.Vector3();
let isDragging = false;
let draggedNode = null;
let dragMoved = false;
let dragStartPos = new THREE.Vector2();
let dragGroup = [];
let longPressTimer = null;
let longPressActive = false;

function activateGroupDrag(mesh) {
  dragGroup = [];
  const neighbors = adjacency.get(mesh.userData.nodeId) || [];
  neighbors.forEach(({ target }) => {
    const neighborMesh = nodeObjects.get(target);
    if (neighborMesh) {
      dragGroup.push({
        mesh: neighborMesh,
        offset: neighborMesh.position.clone().sub(mesh.position),
      });
    }
  });
}

// Shared drag-start used by both the node mesh raycast and label pointerdown.
// Computes pointer coords + drag plane and arms the drag (incl. group/long-press).
function beginNodeDrag(event, mesh) {
  const rect = container.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  isDragging = true;
  draggedNode = mesh;
  dragMoved = false;
  dragStartPos.set(event.clientX, event.clientY);
  controls.enabled = false;
  container.style.cursor = 'grabbing';
  dragPlane.setFromNormalAndCoplanarPoint(
    camera.getWorldDirection(new THREE.Vector3()),
    mesh.position
  );
  raycaster.setFromCamera(mouse, camera);
  if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
    dragOffset.copy(intersection).sub(mesh.position);
  }

  dragGroup = [];
  longPressActive = false;
  if (event.metaKey || event.ctrlKey) {
    activateGroupDrag(mesh);
  } else if (event.pointerType === 'touch') {
    longPressTimer = setTimeout(() => {
      longPressActive = true;
      activateGroupDrag(mesh);
      const mat = mesh.material;
      const origEmissive = mat.emissiveIntensity;
      mat.emissiveIntensity = 0.8;
      setTimeout(() => { mat.emissiveIntensity = origEmissive; }, 200);
      if (navigator.vibrate) navigator.vibrate(30);
    }, 500);
  }

  event.preventDefault();
}

function onMouseDown(event) {
  if (event.target !== renderer.domElement) return;
  if (event.button !== 0) return;
  const rect = container.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodeMeshes);
  if (intersects.length > 0) {
    beginNodeDrag(event, intersects[0].object);
  }
}

function onMouseDrag(event) {
  if (!isDragging || !draggedNode) return;
  const dx = event.clientX - dragStartPos.x;
  const dy = event.clientY - dragStartPos.y;
  if (dx * dx + dy * dy > 9) {
    dragMoved = true;
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
  }
  const rect = container.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
    draggedNode.position.copy(intersection.sub(dragOffset));
    stickyNodes.add(draggedNode.userData.nodeId);
    const label = labelObjects.get(draggedNode.userData.nodeId);
    if (label) {
      label.position.copy(draggedNode.position);
      label.position.y += draggedNode.scale.y + 2;
    }
    updateEdgesForNode(draggedNode);

    dragGroup.forEach(({ mesh, offset }) => {
      mesh.position.copy(draggedNode.position).add(offset);
      stickyNodes.add(mesh.userData.nodeId);
      const gLabel = labelObjects.get(mesh.userData.nodeId);
      if (gLabel) {
        gLabel.position.copy(mesh.position);
        gLabel.position.y += mesh.scale.y + 2;
      }
      updateEdgesForNode(mesh);
    });

    // Node positions changed outside the physics loop — mark the frame dirty
    // so the main canvas and the minimap both track the drag (physics is off
    // by default, so nothing else would trigger a redraw).
    requestRender();

    tooltip.classList.remove('visible');
  }
}

function onMouseUp() {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }

  if (isDragging && draggedNode) {
    const vel = velocities.get(draggedNode.userData.nodeId);
    if (vel) vel.set(0, 0, 0);
    addStickyRing(draggedNode);

    dragGroup.forEach(({ mesh }) => {
      const gVel = velocities.get(mesh.userData.nodeId);
      if (gVel) gVel.set(0, 0, 0);
      addStickyRing(mesh);
    });

    btnUnstick.style.display = 'flex';
  }
  isDragging = false;
  draggedNode = null;
  dragGroup = [];
  longPressActive = false;
  controls.enabled = true;
  container.style.cursor = 'default';
}

function updateEdgesForNode(mesh) {
  const nodeId = mesh.userData.nodeId;
  for (let i = 0; i < edgeList.length; i++) {
    const { edge, fromMesh, toMesh } = edgeList[i];
    if (edge.from === nodeId || edge.to === nodeId) {
      const p = i * 6;
      edgePositions[p] = fromMesh.position.x;
      edgePositions[p + 1] = fromMesh.position.y;
      edgePositions[p + 2] = fromMesh.position.z;
      edgePositions[p + 3] = toMesh.position.x;
      edgePositions[p + 4] = toMesh.position.y;
      edgePositions[p + 5] = toMesh.position.z;
    }
  }
  edgePosAttr.needsUpdate = true;
}

container.addEventListener('pointerdown', onMouseDown);
container.addEventListener('pointermove', onMouseDrag);
container.addEventListener('pointerup', onMouseUp);
container.addEventListener('pointerleave', onMouseUp);

// ------------------------------------------------------------
// Sticky node cleanup
// ------------------------------------------------------------
function unstickNode(nodeId) {
  stickyNodes.delete(nodeId);
  const vel = velocities.get(nodeId);
  if (vel) vel.set(0, 0, 0);
  removeStickyRing(nodeId);
  if (stickyNodes.size === 0) {
    btnUnstick.style.display = 'none';
  }
}

btnUnstick.addEventListener('click', () => {
  stickyNodes.forEach(id => {
    const vel = velocities.get(id);
    if (vel) vel.set(0, 0, 0);
    removeStickyRing(id);
  });
  stickyNodes.clear();
  btnUnstick.style.display = 'none';
});

// ------------------------------------------------------------
// Selection
// ------------------------------------------------------------
export function selectNode(nodeId) {
  state.selectedNode = nodeId;
  // A node selection supersedes any edge selection (selectEdge clears the node
  // in kind), so the hash/restore never carry both at once.
  state.selectedEdge = null;
  const mesh = nodeObjects.get(nodeId);
  if (!mesh) return;

  const neighbors = adjacency.get(nodeId) || [];
  const neighborIds = new Set(neighbors.map(n => n.target));
  neighborIds.add(nodeId);

  // Dim non-neighbors; neighbors + selected get the bright style
  applyNodeState(new Set([nodeId]), 1, 0.5, 0.3, 0.15);
  neighborIds.forEach(id => {
    const m = nodeObjects.get(id);
    if (m) {
      m.material.opacity = 0.9;
      m.material.emissiveIntensity = 0.3;
    }
  });

  applyEdgeState(edge => {
    return edge.from === nodeId || edge.to === nodeId || edge === state.selectedEdge;
  }, 0x4E79A7, 0.8, edgeOffColor(), 0.05);

  setLabelVisibility(neighborIds);

  // Load the detail card even while the analysis panel is closed: the floating
  // button's green dot + toast signal that something is loaded and waiting.
  showInfo(nodeId);

  const targetPos = mesh.position.clone();
  animateCamera(targetPos.clone().add(CAMERA_OFFSET), targetPos);
  updateHash();
}

export function deselectNode() {
  state.selectedNode = null;
  lastHoveredNodeId = null;

  // If an edge is still selected, restore to edge view
  if (state.selectedEdge) {
    selectEdge(state.selectedEdge);
    return;
  }

  state.selectedEdge = null;

  // If a trace is active, restore to trace highlighting
  if (state.activeTrace) {
    if (state.activeRouteIdx >= 0) {
      activateRoute(state.activeTrace, state.activeRouteIdx);
    } else {
      highlightTraceNodes(state.activeTrace);
    }
    hideNodeInfo();
    return;
  }

  resetVisualState();
  hideEdgeLabel();
  hideNodeInfo();
  updateHash();
}

export function selectEdge(edge) {
  state.selectedNode = null;
  state.selectedEdge = edge;
  lastHoveredNodeId = null;

  const fromId = edge.from;
  const toId = edge.to;

  // Dim all nodes, highlight source and target
  applyNodeState(new Set([fromId, toId]), 0.95, 0.5, 0.3, 0.15);

  applyEdgeState(e => e === edge, 0x4E79A7, 0.9, edgeOffColor(), 0.05);

  // Show labels for both nodes and their neighbors
  const visibleIds = new Set([fromId, toId]);
  (adjacency.get(fromId) || []).forEach(n => visibleIds.add(n.target));
  (adjacency.get(toId) || []).forEach(n => visibleIds.add(n.target));
  setLabelVisibility(visibleIds);

  // Show relation info in the analysis-panel card
  if (state.analysisOpen) {
    showEdgeInfo(edge);
  }

  // Focus camera on midpoint of edge
  const fromMesh = nodeObjects.get(fromId);
  const toMesh = nodeObjects.get(toId);
  if (fromMesh && toMesh) {
    const mid = midpoint(fromMesh.position, toMesh.position);
    animateCamera(mid.clone().add(CAMERA_OFFSET), mid);
  }
  updateHash();
}

// ------------------------------------------------------------
// Init
// ------------------------------------------------------------
attachLabelHandlers();
