// Prompt interface: prompt panel, suggestion chips, wiki entity tooltips, wiki modal,
// and graph highlighting for prompt turns.

import * as THREE from 'three';

import { RAW_NODES, RAW_EDGES, TRANSLATIONS, descByLabel, descByLabelZh, noteUrl, nodeMap, LEGEND, adjacency, graphData, loadRolesMeta, loadLinkPrediction } from './data.js';
import { state } from './state.js';
import {
  camera, nodeObjects, nodeMeshes, edgeObjects, edgeOffColor, animateCamera,
  applyNodeState, applyEdgeState, setLabelVisibility, resetVisualState,
  restoreDefaultLabels,
} from './core.js';
import { clearTrace, clearCommunityFocus, setActiveWindow, exportGraphPNG, rebindTracePanel, showInfo, showEdgeInfo, showCommunityInfo, hideNodeInfo, setNodeActionBuilder } from './ui.js';
import { deselectNode, selectNode } from './interaction.js';
import { esc, renderMarkdown, wikiExcerpt, escapeRegex, labelBoundaryRegex } from './markdown.js';
import { updateHash } from './routing.js';
import { currentTheme } from './theme.js';
import { getUiLang, setUiLang, persistUiLang, onUiLangChange } from './i18n.js';

// ------------------------------------------------------------
// Elements + API endpoints
// ------------------------------------------------------------
const promptBtn = document.getElementById('btn-prompt');
const promptActivityDot = document.getElementById('prompt-activity-dot');
const promptPanel = document.getElementById('prompt-panel');
const promptMessages = document.getElementById('prompt-messages');
const promptInput = document.getElementById('prompt-input');
const promptSend = document.getElementById('prompt-send');
const promptCloseBtn = document.getElementById('prompt-close');
const promptLangBtns = Array.from(document.querySelectorAll('#prompt-panel .lang-toggle [data-lang]'));
const promptFilterToggle = document.getElementById('prompt-filter-toggle');
const promptFilterCheckbox = document.getElementById('prompt-filter-nodes');
const promptFilterCount = document.getElementById('prompt-filter-count');
const promptModes = document.getElementById('prompt-modes');
const graphifyCheckbox = document.getElementById('graphify-checkbox');
const promptTagPopup = document.getElementById('prompt-tag-popup');
const promptTags = document.getElementById('prompt-tags');
const promptModeSwitch = document.getElementById('prompt-mode-switch');
const analysisTools = document.getElementById('analysis-tools');
const htmlModeOverlay = document.getElementById('html-mode-overlay');
const htmlModeFrame = document.getElementById('html-mode-frame');
const htmlModeTitle = document.getElementById('html-mode-title');
const htmlModeClose = document.getElementById('html-mode-close');
const htmlModeDownload = document.getElementById('html-mode-download');
const responseModeWrap = document.getElementById('response-mode');

const API_BASE = (window.GRAPH_API_BASE || 'https://api.johnnykuo.com/v1').replace(/\/$/, '');
const INTENT_API = `${API_BASE}/intent`;
const EXECUTE_STREAM_API = `${API_BASE}/execute/stream`;
const SESSION_RESET_API = `${API_BASE}/session/reset`;

let promptOpen = false;
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

const UI_STRINGS = {
  'en-US': {
    panelClose: 'Close panel',
    panelLanguage: 'Panel language',
    langEn: 'English (US)',
    langZh: '繁體中文（台灣）',
    modeSwitchLabel: 'Analysis mode',
    modeAsk: 'Prompt',
    modeGraph: 'Graph',
    filterLabel: 'Filter',
    filterTitle: 'Only show the highlighted nodes and their links',
    graphifyLabel: 'Graphify',
    graphifyTitle: 'On: run graph operations (explain / trace / path). Off: answer from the wiki.',
    graphifyOff: 'Wiki retrieval',
    respModeLabel: 'MODE',
    respModeAskTitle: 'Render response as inline markdown',
    respModeHtmlTitle: 'Render response as a standalone HTML page',
    sendLabel: 'Send',
    sendTitle: 'Send',
    inputPlaceholderGraphOn: 'Analyze the graph — type @ to tag nodes (e.g. @NAD+ @SIRT1)',
    inputPlaceholderGraphOff: 'Analyze the wiki — type @ to tag nodes (e.g. @NAD+ @SIRT1)',
    thinking: 'Thinking',
    answering: 'Answering',
    translating: 'Translating',
    serverError: 'Server error',
    streamError: 'Stream error. Please try again.',
    noResponse: 'No response received.',
    couldNotReach: 'Could not reach the prompt server.',
    copy: 'Copy to clipboard',
    copied: 'Copied',
    openHtmlPage: 'Open HTML page ↗',
    openHtmlTitle: 'Open this response as a standalone HTML page',
    removeTag: 'Remove tag',
    tagHint: 'Remove tag',
    suggestMore: 'Suggest more analyses',
    // Explore / Graph analytics
    datasetOverview: 'Dataset Overview',
    networkTopology: 'Network Topology',
    communities: 'Communities',
    communityNote: 'by community',
    topHubs: 'Top Hubs',
    hubsNote: 'by degree — click to focus, A/B to compare',
    connectors: 'Connectors / Bridges',
    connectorsNote: 'by betweenness',
    pagerankLeaders: 'PageRank Leaders',
    pagerankNote: 'by pagerank',
    compareTitle: 'Compare Two Node Sets',
    compareHint: 'Add nodes — or entire communities — to Set A (blue) or Set B (purple) via the A/B buttons, then compare their shared neighborhood, Jaccard similarity, and shortest connecting paths. Press Enter to run the comparison.',
    setALabel: 'Set A',
    setBLabel: 'Set B',
    addToSetA: 'Add to Set A',
    addToSetB: 'Add to Set B',
    addCommToSetA: 'Add community to Set A',
    addCommToSetB: 'Add community to Set B',
    runCompare: 'A and B',
    runCompareTitle: 'Analyze Set A vs Set B — or press Enter',
    promptBtn: '→ Prompt',
    promptBtnTitle: 'Send this selection to the Prompt panel as an analysis query',
    reset: 'Reset',
    resetTitle: 'Reset analysis',
    saveBtn: 'Save',
    saveBtnTitle: 'Export this selection as JSON',
    graphQuery: 'Graph Query',
    graphQuerySelect: 'Select a query…',
    traceClear: 'Clear Trace',
    searchNodes: 'Search & Filter',
    searchNodesNote: 'by label — click to focus, A/B to compare',
    searchPlaceholder: 'Search nodes…',
    searchEmpty: 'No matching nodes',
    clearHighlights: 'Clear highlights',
    metricNodes: 'Nodes',
    metricEdges: 'Edges',
    metricCommunities: 'Communities',
    metricAvgDegree: 'Avg degree',
    metricDensity: 'Density',
    metricGodNodes: 'God nodes',
    topoMeanClustering: 'Mean clustering',
    topoMaxKCore: 'Max k-core',
    topoMeanPagerank: 'Mean pagerank',
    topoMedianDegree: 'Median degree',
    topoBridges: 'Bridging nodes',
    compareEmpty: 'Add at least one node or community to both Set A and Set B.',
    compareSetA: 'Set A',
    compareSetB: 'Set B',
    compareNeighborhoodA: 'Neighborhood (incl. neighbors) A',
    compareNeighborhoodB: 'Neighborhood (incl. neighbors) B',
    compareSharedNeighborhood: 'Shared neighborhood',
    compareJaccard: 'Jaccard',
    compareShortestPath: 'Shortest A → B',
    compareSteps: 'Steps',
    compareNoPath: 'No direct path within 6 steps.',
    exportNeedSelection: 'Add nodes or communities to Set A / Set B before exporting.',
    promptNeedSelection: 'Add nodes or communities to Set A / Set B before sending to Prompt.',
    nodeInfoLabel: 'Details',
    focusNode: 'Focus',
    // Per-node topology labels
    propertyCommunity: 'Community',
    propertyDegree: 'Degree',
    propertyPagerank: 'Pagerank',
    propertyBetweenness: 'Betweenness',
    propertyClustering: 'Clustering',
    propertyKCore: 'k-core',
    propertySource: 'Source file',
    // Analysis download actions
    downloadJson: 'Download analysis as JSON',
    downloadPng: 'Download highlighted subgraph as PNG',
    roleExplorer: 'Role Explorer',
    roleExplorerNote: 'auto-classified from the metric fingerprint — click to list, again to clear',
    roleRule: 'Rule',
    roleThresholds: 'Live thresholds',
    predictedTitle: 'Predicted Connections',
    predictedNote: 'Adamic-Adar link prediction — non-adjacent entities whose shared neighbours imply unstated biology',
    predictedVia: 'via',
    crossCommFlag: 'cross-community',
    surprisingTitle: 'Surprising Connections',
    surprisingNote: 'cross-community anomalies flagged at build time',
    looseCommunity: 'loose',
    looseCommunityTitle: 'Low intra-community cohesion (edge density) — members are mostly wired to other communities',
  },
  'zh-TW': {
    panelClose: '關閉面板',
    panelLanguage: '面板語言',
    langEn: '英語（美國）',
    langZh: '繁體中文（台灣）',
    modeSwitchLabel: '分析模式',
    modeAsk: '提示',
    modeGraph: '圖譜',
    filterLabel: '篩選',
    filterTitle: '只顯示被高亮的節點及其連結',
    graphifyLabel: '圖譜化',
    graphifyTitle: '開啟：執行圖譜操作（說明 / 追蹤 / 路徑）。關閉：由 wiki 回答。',
    graphifyOff: 'Wiki 檢索',
    respModeLabel: '模式',
    respModeAskTitle: '以內嵌 Markdown 呈現回應',
    respModeHtmlTitle: '以獨立 HTML 頁面呈現回應',
    sendLabel: '傳送',
    sendTitle: '傳送',
    inputPlaceholderGraphOn: '分析圖譜 — 輸入 @ 標記節點（例如 @NAD+ @SIRT1）',
    inputPlaceholderGraphOff: '分析 wiki — 輸入 @ 標記節點（例如 @NAD+ @SIRT1）',
    thinking: '思考中',
    answering: '回答中',
    translating: '翻譯中',
    serverError: '伺服器錯誤',
    streamError: '串流錯誤，請重試。',
    noResponse: '未收到回應。',
    couldNotReach: '無法連線至聊天伺服器。',
    copy: '複製到剪貼簿',
    copied: '已複製',
    openHtmlPage: '以 HTML 頁面開啟 ↗',
    openHtmlTitle: '以獨立 HTML 頁面開啟此回應',
    removeTag: '移除標記',
    tagHint: '移除標記',
    suggestMore: '產生更多分析建議',
    datasetOverview: '資料集概覽',
    networkTopology: '網路拓撲',
    communities: '社群',
    communityNote: '依社群',
    topHubs: '高樞紐節點',
    hubsNote: '依度數 — 點擊聚焦，A/B 比較',
    connectors: '橋接節點',
    connectorsNote: '依介數',
    pagerankLeaders: 'PageRank 領袖',
    pagerankNote: '依 PageRank',
    compareTitle: '比較兩個節點集合',
    compareHint: '透過 A/B 按鈕將節點——或整個社群——加入集合 A（藍色）或集合 B（紫色），比較它們的共同鄰域、Jaccard 相似度與最短路徑。按 Enter 執行比較。',
    setALabel: '集合 A',
    setBLabel: '集合 B',
    addToSetA: '加入集合 A',
    addToSetB: '加入集合 B',
    addCommToSetA: '將社群加入集合 A',
    addCommToSetB: '將社群加入集合 B',
    runCompare: 'A 和 B',
    runCompareTitle: '分析集合 A 與 B — 或按 Enter',
    promptBtn: '→ 提示',
    promptBtnTitle: '將此選擇傳送至 Prompt 面板作為分析查詢',
    reset: '重設',
    resetTitle: '重設分析',
    saveBtn: '儲存',
    saveBtnTitle: '匯出選擇為 JSON',
    graphQuery: '圖形查詢',
    graphQuerySelect: '選擇查詢…',
    traceClear: '清除追蹤',
    searchNodes: '搜尋與篩選',
    searchNodesNote: '依名稱 — 點擊聚焦，A/B 比較',
    searchPlaceholder: '搜尋節點…',
    searchEmpty: '沒有相符的節點',
    clearHighlights: '清除高亮',
    metricNodes: '節點',
    metricEdges: '邊',
    metricCommunities: '社群',
    metricAvgDegree: '平均度數',
    metricDensity: '密度',
    metricGodNodes: '關鍵節點',
    topoMeanClustering: '平均聚類係數',
    topoMaxKCore: '最大 k-core',
    topoMeanPagerank: '平均 PageRank',
    topoMedianDegree: '中位數度數',
    topoBridges: '橋接節點',
    compareEmpty: '請在集合 A 與集合 B 中至少各加入一個節點或社群。',
    compareSetA: '集合 A',
    compareSetB: '集合 B',
    compareNeighborhoodA: '鄰域（含鄰居）A',
    compareNeighborhoodB: '鄰域（含鄰居）B',
    compareSharedNeighborhood: '共同鄰域',
    compareJaccard: 'Jaccard',
    compareShortestPath: 'A → B 最短路徑',
    compareSteps: '步數',
    compareNoPath: '在 6 步內無直接路徑。',
    exportNeedSelection: '請先在集合 A / B 加入節點或社群再匯出。',
    promptNeedSelection: '請先在集合 A / B 加入節點或社群再傳送至提示。',
    nodeInfoLabel: '詳情',
    focusNode: '聚焦',
    propertyCommunity: '社群',
    propertyDegree: '度數',
    propertyPagerank: 'PageRank',
    propertyBetweenness: '介數',
    propertyClustering: '聚類',
    propertyKCore: 'k-core',
    propertySource: '來源檔案',
    downloadJson: '下載分析 JSON',
    downloadPng: '下載高亮子圖 PNG',
    roleExplorer: '角色探索',
    roleExplorerNote: '由指標指紋自動分類 — 點擊列出，再點清除',
    roleRule: '規則',
    roleThresholds: '即時閾值',
    predictedTitle: '預測連結',
    predictedNote: 'Adamic-Adar 連結預測 — 無直接相連但共用鄰居暗示尚未記錄的生物學關聯之實體',
    predictedVia: '經由',
    crossCommFlag: '跨社群',
    surprisingTitle: '意外連結',
    surprisingNote: '建構時標記的跨社群異常連結',
    looseCommunity: '鬆散',
    looseCommunityTitle: '社群內聚度（邊密度）偏低 — 成員大多與其他社群相連',
  },
};

function t(key) {
  return (UI_STRINGS[uiLang] && UI_STRINGS[uiLang][key]) || UI_STRINGS['en-US'][key] || '';
}

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
  promptModes.classList.toggle('graphify-off', !on);
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
  const langToggle = document.getElementById('prompt-lang');
  if (langToggle) langToggle.setAttribute('aria-label', t('panelLanguage'));

  promptPanel.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && t(key)) { el.textContent = t(key); el.setAttribute('aria-label', t(key)); }
  });
  promptPanel.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key && t(key)) el.title = t(key);
  });
  promptCloseBtn.setAttribute('aria-label', t('panelClose'));
  // Response-mode button tooltips (chrome without data-i18n markers).
  document.querySelectorAll('#response-mode .resp-mode-btn').forEach((b) => {
    b.title = t(b.dataset.mode === 'md' ? 'respModeAskTitle' : 'respModeHtmlTitle');
  });

  syncGraphifyUI();
  if (panelMode === 'explore') renderAnalysisTools();
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

promptBtn.addEventListener('click', () => {
  promptOpen = !promptOpen;
  promptPanel.classList.toggle('open', promptOpen);
  promptBtn.classList.toggle('open', promptOpen);
  if (!promptOpen) setActiveWindow(null);
  if (promptOpen) promptInput.focus();
  syncPromptPanelKeyboard();
  state.analysisOpen = promptOpen;
  // Surface the info card for whatever is already selected when the panel
  // opens (node/edge info now lives in the analysis panel, not a sidebar).
  if (promptOpen) {
    if (state.selectedNode) showInfo(state.selectedNode);
    else if (state.selectedEdge) showEdgeInfo(state.selectedEdge);
  }
  // Do NOT overwrite state.analysisMode here: setPanelMode already keeps it in
  // canonical hash form ('graph' / 'prompt') synced with `panelMode`, while
  // panelMode itself uses the UI tab names ('explore' / 'ask').
  updateHash();
});

// Fix for mobile keyboards: on iOS (and older Android) the virtual keyboard
// overlays fixed elements instead of resizing the layout viewport, so the
// composer's send button gets buried under it. `visualViewport` reports the
// visible area above the keyboard — raise the panel's bottom edge to match.
// Android with `interactive-widget=resizes-content` already shrinks
// `innerHeight`, so the offset self-corrects to zero there.
function syncPromptPanelKeyboard() {
  if (!promptPanel) return;
  if (!promptPanel.classList.contains('open') || !window.visualViewport) {
    promptPanel.style.bottom = '';
    return;
  }
  const keyboard = Math.max(0, window.innerHeight - window.visualViewport.height);
  promptPanel.style.bottom = keyboard > 0 ? keyboard + 'px' : '';
}
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', syncPromptPanelKeyboard);
}
window.addEventListener('resize', syncPromptPanelKeyboard);
syncPromptPanelKeyboard();

function closePrompt() {
  promptOpen = false;
  promptPanel.classList.remove('open');
  promptBtn.classList.remove('open');
  setActiveWindow(null);
  state.analysisOpen = false;
  updateHash();
}

promptCloseBtn.addEventListener('click', closePrompt);

// ------------------------------------------------------------
// Message rendering
// ------------------------------------------------------------
function sanitizePromptInput(text) {
  if (!text || typeof text !== 'string') return '';
  let t = text.replace(/<[^>]+>/g, '');
  t = t.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '');
  t = t.replace(/\s+/g, ' ').trim();
  return t.slice(0, 4000);
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
const wikiModalClose = document.getElementById('wiki-modal-close');

function openWikiModal(wikiKey) {
  const zh = uiLang === 'zh-TW' ? descByLabelZh.get(wikiKey) : null;
  const desc = zh || descByLabel.get(wikiKey);
  if (!desc) return;
  const title = wikiKey.replace(/_/g, ' ');
  wikiModalTitle.textContent = title;
  wikiModalBody.innerHTML = renderMarkdown(desc);
  wikiModalLink.href = noteUrl(wikiKey) || '#';
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
  const t = String(text || '').replace(/<script[\s\S]*?<\/script>/gi, '');
  const h = t.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
  let title = h ? h[1] : t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
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
<link rel="stylesheet" href="pages/shared/pages.css">
<link rel="stylesheet" href="pages/shared/pages-light.css" id="theme-light"${currentTheme() === 'light' ? '' : ' disabled'}>
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
  htmlModeOverlay.classList.add('visible');
}

function closeHtmlMode() {
  if (!htmlModeOverlay) return;
  htmlModeOverlay.classList.remove('visible');
  if (htmlModeFrame) htmlModeFrame.srcdoc = '';
  htmlModeDoc = '';
  htmlModeRaw = '';
}

if (htmlModeClose) htmlModeClose.addEventListener('click', closeHtmlMode);
if (htmlModeOverlay) {
  htmlModeOverlay.addEventListener('click', (e) => {
    if (e.target === htmlModeOverlay) closeHtmlMode();
  });
}
// Rebuild an open HTML-mode document when the site theme changes (theme.js
// dispatches site-theme-change). The sandboxed frame cannot run a bootstrap
// script, so the pages-light.css disabled state is baked in at build time.
window.addEventListener('site-theme-change', () => {
  if (!htmlModeOverlay || !htmlModeOverlay.classList.contains('visible') || !htmlModeFrame) return;
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
  if (wikiModalOverlay.classList.contains('visible')) { closeWikiModal(); return; }
  if (htmlModeOverlay && htmlModeOverlay.classList.contains('visible')) { closeHtmlMode(); return; }
  const nodeCard = document.getElementById('at-node-detail');
  if (nodeCard && !nodeCard.hidden) { closeNodeDetail(); return; }
  if (promptPanel.classList.contains('open')) { closePrompt(); return; }
  const datasetPanelEl = document.getElementById('dataset-panel');
  if (datasetPanelEl && datasetPanelEl.classList.contains('visible')) {
    datasetPanelEl.classList.remove('visible');
    setActiveWindow(null);
  }
});

// Enter in Graph mode runs the Set A/B comparison (equivalent to the
// &#9166; A and B button). Ignore keystrokes aimed at text fields or buttons,
// which already have native Enter behavior.
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' || e.shiftKey) return;
  const t = e.target;
  if (t && (t.tagName === 'BUTTON' || t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' ||
      t.tagName === 'SELECT' || t.isContentEditable)) return;
  if (panelMode !== 'explore' || !promptPanel.classList.contains('open')) return;
  e.preventDefault();
  runCompare();
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
    const intentResp = await fetch(INTENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: withOutputSpec(clean),
        session_id: promptSessionId,
        graphify: graphifyEnabled(),
        tags,
      }),
    });

    if (!intentResp.ok) {
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
    const resp = await fetch(EXECUTE_STREAM_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: intentData.intent,
        message: withOutputSpec(intentData.message),
        session_id: promptSessionId,
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
        message: withOutputSpec(intentData.message || clean),
        session_id: promptSessionId,
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
    return `<div class="prompt-tag-item${i === tagActiveIdx ? ' active' : ''}" data-idx="${i}">
      <span class="tag-kind">@</span>
      <span>${esc(n.label)}${zhText}</span>
      <span class="tag-degree">${n.degree}</span>
    </div>`;
  }).join('');
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
  return `<button class="prompt-suggestion" data-query="${esc(q.q)}" data-tags="${esc(tags)}">&ldquo;${esc(q.q)}&rdquo;</button>`;
}

function pageSuggestionsHTML() {
  const items = [];
  for (let i = 0; i < SUGGESTIONS_PER_PAGE; i++) {
    const q = ALL_RECIPES[(suggestionOffset + i) % ALL_RECIPES.length];
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
  suggestionOffset = (suggestionOffset + SUGGESTIONS_PER_PAGE) % ALL_RECIPES.length;
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
    fetch(SESSION_RESET_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'reset', session_id: stale }),
      keepalive: true,
    }).catch(() => {});
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
// A lowercase word-boundary index of node labels -> node id. Used to find the
// nodes "most related" to a query/response locally whenever the server does
// not (or does not fully) specify which nodes a prompt turn touches.
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
  applyEdgeState(line => {
    const { edge } = line.userData;
    const fwd = `${edge.from}::${edge.to}`;
    const rev = `${edge.to}::${edge.from}`;
    return edgePairSet.has(fwd) || edgePairSet.has(rev);
  }, 0x4E79A7, 0.8, edgeOffColor(), 0.02);

  setLabelVisibility(idSet);

  // Offer node filtering with a count of highlighted nodes
  promptFilterToggle.classList.add('visible');
  promptFilterCheckbox.disabled = false;
  promptFilterCount.textContent = nodeIds.length;
  applyPromptNodeFilter();

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
    // it, so the node sits in the upper-left quadrant of the view. The prompt
    // panel (large by default) occupies the right side, so keep the target
    // well inside the visible graph area.
    const hasSidebar = window.innerWidth >= 1200;
    const promptOpen = promptPanel.classList.contains('open');
    const dist = 320;
    const direction = targetPos.clone().sub(camera.position);
    if (direction.lengthSq() > 0.0001) direction.normalize();
    const offsetDir = new THREE.Vector3(-1, 1, -1).normalize(); // up-left-forward
    const camPos = targetPos.clone().addScaledVector(direction, dist * 0.4)
      .addScaledVector(offsetDir, dist);
    const lookShift = hasSidebar
      ? (promptOpen ? new THREE.Vector3(0.55, -0.3, 0) : new THREE.Vector3(0.35, -0.3, 0)).normalize()
      : new THREE.Vector3(0, 0, 0);
    const lookTarget = targetPos.clone().addScaledVector(lookShift, dist * 0.4);
    animateCamera(camPos, lookTarget);
  }
}

function clearPromptHighlights() {
  promptHighlightedNodes = [];
  promptFilterToggle.classList.remove('visible');
  promptFilterCheckbox.checked = false;
  promptFilterCheckbox.disabled = true;
  promptFilterCount.textContent = '0';
  applyPromptNodeFilter();

  resetVisualState();
}

// Toggle whether the graph is cropped down to just the highlighted nodes (and
// the edges between them). OFF keeps the full graph with the highlight styling;
// ON hides every node/edge outside the highlighted set.
function applyPromptNodeFilter() {
  const enabled = !!(promptFilterCheckbox && promptFilterCheckbox.checked);
  const idSet = new Set(promptHighlightedNodes);

  nodeMeshes.forEach(m => {
    m.visible = !enabled || idSet.has(m.userData.nodeId);
  });
  edgeObjects.forEach(line => {
    const { edge } = line.userData;
    line.visible = !enabled || (idSet.has(edge.from) && idSet.has(edge.to));
  });

  if (promptHighlightedNodes.length) {
    // Whatever the filter state, labels track the highlighted set (visibility
    // of non-highlighted meshes is already handled above).
    setLabelVisibility(idSet);
  } else {
    restoreDefaultLabels();
  }
}

promptFilterCheckbox.addEventListener('change', applyPromptNodeFilter);

// ------------------------------------------------------------
// Panel mode (Prompt / Graph) — the panel is always full-screen
// ------------------------------------------------------------
let panelMode = 'explore'; // 'ask' (Prompt) | 'explore' (Graph) — Graph is the default view

function setPanelMode(mode) {
  panelMode = mode;
  state.analysisMode = mode === 'explore' ? 'graph' : 'prompt';
  promptPanel.classList.toggle('mode-explore', mode === 'explore');
  promptModeSwitch.querySelectorAll('.prompt-mode-tab').forEach(t => {
    const active = t.dataset.mode === mode;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if (mode === 'explore') renderAnalysisTools();
  updateHash();
}

promptModeSwitch.addEventListener('click', (e) => {
  const tab = e.target.closest('.prompt-mode-tab');
  if (!tab) return;
  setPanelMode(tab.dataset.mode);
});

// Activity dots: Prompt tab lights when a conversation is active; Graph tab
// lights when there are selections (tags / compare sets). The floating
// analysis button lights when either panel has active work.
function refreshActivity() {
  const conversationActive = promptActive ||
    (panelMode !== 'explore' && promptInput.value.trim().length > 0);
  const graphActive = compareA.length > 0 || compareB.length > 0;
  const promptTab = promptPanel.querySelector('.prompt-mode-tab[data-mode="ask"]');
  const graphTab = promptPanel.querySelector('.prompt-mode-tab[data-mode="explore"]');
  if (promptTab) promptTab.classList.toggle('has-activity', conversationActive);
  if (graphTab) graphTab.classList.toggle('has-activity', graphActive);
  if (promptActivityDot) promptActivityDot.classList.toggle('on', conversationActive || graphActive);
}

// Prompt indicator: yellow (pulsing) while the assistant is generating, green
// when idle/ready. Drives the floating prompt button's dot and the Prompt tab dot.
function setPromptThinking(on) {
  if (promptActivityDot) {
    promptActivityDot.classList.add('on');
    promptActivityDot.classList.toggle('thinking', on);
  }
  const promptTab = promptPanel.querySelector('.prompt-mode-tab[data-mode="ask"]');
  if (promptTab) promptTab.classList.toggle('thinking', on);
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
  const pagerankLeaders = RAW_NODES.slice().sort((a, b) => (b.pagerank || 0) - (a.pagerank || 0));
  const meanPagerank = RAW_NODES.reduce((s, n) => s + (n.pagerank || 0), 0) / Math.max(1, N);
  const meanClustering = RAW_NODES.reduce((s2, n) => s2 + (n.clustering || 0), 0) / Math.max(1, N);
  const maxKCore = RAW_NODES.reduce((m, n) => Math.max(m, n.k_core || 0), 0);
  const degrees = RAW_NODES.map(n => n.degree || 0).sort((a, b) => a - b);
  const medianDegree = degrees.length ? degrees[Math.floor(degrees.length / 2)] : 0;
  const crossComm = new Map();
  RAW_NODES.forEach(n => {
    const comms = new Set();
    (adjacency.get(n.id) || []).forEach(a => {
      const tn = nodeMap.get(a.target);
      if (tn) comms.add(tn.community);
    });
    crossComm.set(n.id, comms.size);
  });
  const bridgingCount = RAW_NODES.filter(n => (crossComm.get(n.id) || 1) >= 2).length;
  datasetStats = {
    N, E,
    communities: commIds.size,
    avgDegree: (2 * E) / Math.max(1, N),
    density: (2 * E) / (N * Math.max(1, N - 1)),
    godNodes: hubs.slice(0, 10),
    meanPagerank,
    meanClustering,
    maxKCore,
    medianDegree,
    bridgingCount,
    hubs, connectors, pagerankLeaders, nodesByCommunity, crossComm,
  };
  return datasetStats;
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
  return `<li class="at-row" data-id="${n.id}">
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

  const cohesionMap = (graphData.metadata && graphData.metadata.community_cohesion) || {};
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
    <div class="at-row-pair">
      <section class="at-section">
        <h4 class="at-h"><span>${esc(t('graphQuery'))}</span></h4>
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
    <section class="at-section at-span-5">
      <h4 class="at-h">${esc(t('networkTopology'))}</h4>
      <div class="at-cards">${topoCards}</div>
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
        <button class="at-prompt-btn" id="at-send-prompt" title="${esc(t('promptBtnTitle'))}">${esc(t('promptBtn'))}</button>
        <button id="prompt-new" title="${esc(t('resetTitle'))}">${esc(t('reset'))}</button>
        <button class="at-export-json-btn" id="at-export-json" title="${esc(t('saveBtnTitle'))}">${esc(t('saveBtn'))}</button>
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
  analysisTools.querySelector('#at-export-json').addEventListener('click', exportSelectionJSON);
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
// Surprising Connections (graph.json build metadata)
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
  const items = (graphData.metadata && graphData.metadata.surprising_connections) || [];
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
// Predicted Connections (scripts/05_link_prediction.py artifact)
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
const ROLE_CHIP_ORDER = ['Spreader', 'Master regulator', 'Bottleneck', 'Module member', 'Core backbone'];
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
      hideNodeInfo();
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

// Export the current Graph selection (Compare Sets A/B + selected nodes/edges)
// as a standalone .json file.
function exportSelectionJSON() {
  const ids = new Set([...entryIds(compareA), ...entryIds(compareB)]);
  if (!ids.size) {
    alert(t('exportNeedSelection'));
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
    tagged_nodes: Array.from(promptTagSet.values()).map(n => ({ id: n.id, label: n.label })),
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
    alert(t('promptNeedSelection'));
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

// Open the analysis panel in Prompt (ask) mode with `text` pre-loaded into the
// composer and `tags` (@-tagged graph node labels) pinned as structured context.
// Used by the Notes panel to hand a note's transcript to the prompt agent — closes
// Notes first (they share the full-screen overlay) so only Analysis is visible.
export function openPromptComposer(text, tags = []) {
  // Both panels are full-viewport overlays — dismiss Notes before showing prompt.
  const notesPanel = document.getElementById('notes-panel');
  const notesClose = document.getElementById('notes-close');
  if (notesPanel && notesPanel.classList.contains('open') && notesClose) {
    notesClose.click();
  }
  state.analysisOpen = true;
  setPanelMode('ask');
  if (!promptPanel.classList.contains('open')) {
    promptOpen = true;
    promptPanel.classList.add('open');
    promptBtn.classList.add('open');
    syncPromptPanelKeyboard();
    updateHash();
  }
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
  const exportBtn = document.getElementById('at-export-json');
  if (exportBtn) exportBtn.disabled = !hasSelection;
  const atPromptBtn = document.getElementById('at-send-prompt');
  if (atPromptBtn) atPromptBtn.disabled = !hasSelection;
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
// Sync the default mode (Graph/Explore) — sets the active tab and renders the
// analytics tools so they're ready when the panel opens.
state.suppressHashUpdate = true;
setPanelMode(panelMode);
applyUiLang(uiLang);
state.suppressHashUpdate = false;
appendSuggestions(promptMessages);
refreshActivity();
