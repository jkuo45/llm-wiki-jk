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
  theme: 'light', // 'light' | 'dark' — mirrors the llm-wiki-theme preference
  sidebarInfoActive: true,
  suppressHashUpdate: false,
  readerId: null,
  readerSection: null,
  analysisOpen: false,
  analysisMode: 'graph',
  // Notes panel (gallery / lightbox). Synced to the URL hash by
  // notes.js → routing.updateHash() so a note can be deep-linked.
  notesOpen: false,
  notesNoteId: null,
  notesPage: null,
  notesViewMode: false,
};

export const stickyNodes = new Set();
export const velocities = new Map();
