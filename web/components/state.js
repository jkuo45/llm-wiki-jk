// Mutable application state shared across modules.
// Module-local mutable containers that must be shared across modules live here too.

export const state = {
  selectedNode: null,
  selectedEdge: null,
  hoveredNode: null,
  hoveredEdge: null,
  activeTrace: null,
  activeRouteIdx: -1,
  focusedCommunity: null,
  physicsEnabled: false,
  showLabels: true,
  sidebarInfoActive: true,
  suppressHashUpdate: false,
  readerId: null,
  readerSection: null,
  analysisOpen: false,
  analysisMode: 'graph',
};

export const stickyNodes = new Set();
export const velocities = new Map();
