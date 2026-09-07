/* Inside the Cell — a to-scale three.js human cell with vault-grounded process tours.
 * Scale: 1 world unit = 1 µm. Cell Ø 20 µm (typical cultured human cell).
 * Shared by pages/en-US/inside-the-cell.html and pages/zh-TW/inside-the-cell.html.
 * Add a future tour by pushing to TOURS and adding STR entries — no scene changes needed.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* ============================== i18n strings ============================== */
const VLT = {
  Adrenochrome: 'Adrenochrome', Adrenolutin: 'Adrenolutin',
  'Leuco-adrenochrome': 'Leuco-adrenochrome', 'Adrenochrome Pathway': 'Adrenochrome Pathway',
  NQO1: 'NQO1', MAO: 'MAO', Glutathione: 'Glutathione', 'DT-diaphorase': 'DT-diaphorase',
  Detoxification: 'Detoxification', 'Adrenochrome Semiquinone Radical': 'Adrenochrome Semiquinone Radical',
  SIRT1: 'SIRT1', SIRT2: 'SIRT2', SIRT3: 'SIRT3', SIRT4: 'SIRT4', SIRT5: 'SIRT5',
  SIRT6: 'SIRT6', SIRT7: 'SIRT7', Sirtuins: 'Sirtuins', 'NAD+': 'NAD+',
  Ivermectin: 'Ivermectin', Fenbendazole: 'Fenbendazole', PAK1: 'PAK1', YAP1: 'YAP1',
  STAT3: 'STAT3', mTOR: 'mTOR', 'P-gp': 'P-gp', KPNB1: 'KPNB1', Tubulin: 'Tubulin',
  GLUT1: 'GLUT1', 'Hexokinase 2': 'Hexokinase 2', p53: 'p53', MDM2: 'MDM2',
  Apoptosis: 'Apoptosis', Autophagy: 'Autophagy', 'Warburg Effect': 'Warburg Effect',
};
const vlink = (n) => `<a href="https://graph.johnnykuo.com/#node=${encodeURIComponent(n)}" target="_blank" rel="noopener">[[${VLT[n] || n}]]</a>`;

export const STR = {
  en: {
    tabExplore: 'Explore', tabAdreno: 'Adrenochrome pathway', tabSirtuin: 'Sirtuins',
    tabCombi: 'IVM × FBZ cancer trace',
    labels: 'Labels', rotate: 'Rotate', cutaway: 'Cutaway',
    stepOf: (a, b) => `Step ${a} of ${b}`, prev: '← Prev', next: 'Next →', play: '▶ Auto-play', pause: '⏸ Pause',
    exploreTitle: 'Cellular components', exploreBody: 'Click any structure in the cell — or a button below — to read its real size, job, and vault links. Drag to orbit, scroll to zoom, right-drag to pan.',
    vaultRef: 'Vault refs', organelles: 'Organelles',
    overviewFlag: 'Free explore — click a structure',
    orgs: {
      membrane: { n: 'Plasma membrane', s: 'Ø 20 µm cell · bilayer ≈ 8 nm thick', d: 'Selective barrier and signalling surface: receptors, channels and transporters decide what enters. Catecholamines such as adrenaline act at its receptors, while oxidized species and ROS challenge its lipids.' },
      nucleus: { n: 'Nucleus', s: 'Ø ≈ 6 µm · double envelope, ~2,000 pores', d: 'Genome vault. SIRT1 and SIRT6 deacetylate histones and transcription factors (p53, FOXO, NF-κB) here; chromatin state here is the main sirtuin readout.' },
      nucleolus: { n: 'Nucleolus', s: 'Ø ≈ 2 µm · inside the nucleus', d: 'Ribosome factory — rRNA transcription and assembly. SIRT7 lives here, activating RNA polymerase I and ribosome biogenesis.' },
      mito: { n: 'Mitochondrion', s: 'Ø 0.5–1 µm × 1–4 µm · ~hundreds per cell', d: 'ATP and ROS: the electron transport chain powers the cell and leaks superoxide. MAO sits on the outer membrane (H₂O₂ byproduct); SIRT3/4/5 tune matrix enzymes (AceCS2, SOD2, GDH, CPS1). Adrenochrome redox cycling hits here first.' },
      rer: { n: 'Rough endoplasmic reticulum', s: 'Sheets hugging the nucleus · tubules ≈ 50 nm', d: 'Protein synthesis and folding — ribosome-studded sheets feeding the secretory path. Oxidative protein folding here is another ROS source.' },
      ser: { n: 'Smooth endoplasmic reticulum', s: 'Tubular network · tubules ≈ 50 nm', d: 'Lipid synthesis, Ca²⁺ storage and detox chemistry (cytochrome P450). Calcium released here talks to mitochondria at contact sites.' },
      golgi: { n: 'Golgi apparatus', s: 'Stack ≈ 1–2 µm across · cisternae ≈ 30 nm thick', d: 'Post office: glycosylation, sorting and vesicle dispatch to the membrane, lysosomes and outside. Watch vesicles shuttle live.' },
      lysosome: { n: 'Lysosome', s: 'Ø 0.2–0.5 µm · pH ≈ 4.5–5', d: 'Recycling stomach — acid hydrolases digest cargo from autophagy and endocytosis. Oxidized catecholamine pigment (neuromelanin-like) ends up in lysosome-related granules.' },
      peroxisome: { n: 'Peroxisome', s: 'Ø 0.1–1 µm', d: 'Peroxide specialist: β-oxidation of very-long-chain fatty acids and catalase that destroys H₂O₂ — a quiet partner in the redox story.' },
      ribosome: { n: 'Ribosome', s: 'Ø ≈ 25 nm (shown ×4)', d: 'Protein builders, free in cytosol and on the rough ER. ~25 nm each — thousands fit in the space of one mitochondrion.' },
      centrosome: { n: 'Centrosome + microtubules', s: 'Centrioles Ø 0.25 × 0.5 µm · microtubules Ø 25 nm', d: 'Microtubule-organizing centre: the rail network for vesicles, organelles and chromosome segregation. SIRT2 deacetylates α-tubulin on these rails and regulates autophagy via ATG4B.' },
      npc: { n: 'Nuclear pore complex', s: 'Ø ≈ 120 nm · ~2,000 per nucleus', d: 'Gated turnstiles of the nuclear envelope — proteins and RNA shuttle through; SIRT1 itself shuttles nucleus ↔ cytosol.' },
    },
    adrenoSteps: [
      { t: 'Adrenaline on the edge', b: 'Epinephrine (adrenaline) pools in cytosol and extracellular fluid. Trace metals, superoxide and myeloperoxidase-derived oxidants strip one electron: the semiquinone radical, then adrenaline-quinone. Green particles stream inward from outside the cell.', legend: [['#51ff9e', 'epinephrine inflow']], vault: ['Adrenochrome Pathway', 'Adrenochrome'] },
      { t: 'Cyclization — the point of no return', b: 'Adrenaline-quinone undergoes 1,4-Michael cyclization (t½ ≈ 2–5 min) to leuco-adrenochrome, the colorless hydroquinone. No enzyme needed — pure chemistry, right here in the cytosol.', legend: [['#ffe14d', 'quinone → leuco-adrenochrome']], vault: ['Leuco-adrenochrome', 'Adrenochrome Pathway'] },
      { t: 'Adrenochrome + redox cycling', b: 'Leuco-adrenochrome oxidizes to red adrenochrome, throwing off superoxide with each turn. Adrenochrome ↔ semiquinone redox cycling amplifies ROS far beyond the first oxidation — watch red particles converge on the mitochondria.', legend: [['#ff5a4d', 'adrenochrome → mitochondria'], ['#ff7a1a', 'superoxide']], vault: ['Adrenochrome', 'Adrenochrome Semiquinone Radical'] },
      { t: 'The mitochondrial hit', b: 'Mitochondria take the hit: MAO on the outer membrane adds H₂O₂, cytochrome c oxidizes catechols in the intermembrane space, and redox cycling poisons respiration (GPX4/mitochondrial toxicity in the vault). The cluster flashes — this is the damage the protocols aim to prevent.', legend: [['#ff5a4d', 'ROS burst'], ['#ffb347', 'stressed mitochondria']], vault: ['MAO', 'Detoxification'] },
      { t: 'Detox branch — NQO1, GSH, COMT/MAO', b: 'Defenses engage. NQO1/DT-diaphorase performs a safe 2-electron reduction (skipping the radical); glutathione transferases conjugate quinones; ascorbate recycles them chemically. Meanwhile canonical clearance runs: COMT → metanephrine in cytosol, MAO → aldehyde → VMA at mitochondria. Green = safe exit.', legend: [['#51ff9e', 'detoxified / excreted'], ['#7fd4ff', 'NQO1 · GSH · ascorbate']], vault: ['NQO1', 'DT-diaphorase', 'Glutathione', 'MAO'] },
      { t: 'Fate — adrenolutin → pigment', b: 'What escapes detox rearranges (alkaline) to adrenolutin — green-fluorescent — and polymerizes toward neuromelanin-like pigment, stored in lysosome-related granules. Dark granules accumulate by the lysosome; protein arylation by quinones is the collateral damage.', legend: [['#9a7bd0', 'adrenolutin → pigment'], ['#3a3348', 'pigment granules']], vault: ['Adrenolutin', 'Adrenochrome'] },
    ],
    sirtuinSteps: [
      { t: 'One fuel, seven addresses', b: 'All seven sirtuins burn the same fuel: NAD⁺ → nicotinamide + acyl-ADP-ribose per deacylation. Nuclear/cytosolic/mitochondrial NAD⁺ pools, the NAMPT salvage pathway and the CD38 competitor set the budget. Blue particles trace NAD⁺ traffic between mitochondria and nucleus.', legend: [['#7fd4ff', 'NAD⁺ traffic']], vault: ['Sirtuins', 'NAD+'] },
      { t: 'SIRT1 — the nuclear generalist', b: 'SIRT1 patrols euchromatin (shuttling to cytosol under stress). It deacetylates histones H1/H3/H4 plus p53 (braking apoptosis), FOXO1/3a (stress resistance, autophagy), PGC-1α (mitochondrial biogenesis) and NF-κB RelA (anti-inflammatory).', legend: [['#b79aff', 'SIRT1 territory — nucleoplasm']], vault: ['SIRT1'] },
      { t: 'SIRT6 — the chromatin guardian', b: 'SIRT6 clings to heterochromatin: H3K9ac/H3K56ac deacetylation silences LINE-1 retrotransposons and stabilizes telomeres; it ADP-ribosylates PARP1 for double-strand-break repair and co-represses HIF-1α and NF-κB.', legend: [['#8a6ff0', 'SIRT6 — heterochromatin']], vault: ['SIRT6'] },
      { t: 'SIRT7 — the nucleolar specialist', b: 'SIRT7 sits in the nucleolus activating RNA polymerase I (rRNA → ribosome biogenesis — the opposite of SIRT1’s repression via TAFI68), deacetylating GATA4 (anti-hypertrophic) and repressing p21.', legend: [['#d0b8ff', 'SIRT7 — nucleolus']], vault: ['SIRT7'] },
      { t: 'SIRT2 — the cytoskeleton tuner', b: 'SIRT2 works the cytosol and rides the microtubules it deacetylates (α-tubulin); it enters the nucleus in G2/M for mitotic chromatin condensation and licenses autophagy by priming ATG4B for LC3 processing. Cyan flow runs along one rail.', legend: [['#51e0ff', 'SIRT2 — microtubule rail']], vault: ['SIRT2'] },
      { t: 'SIRT3 — the mitochondrial powerhouse', b: 'SIRT3 is the matrix workhorse and the only sirtuin tied to human longevity: it activates AceCS2 (fuel entry) and IDH2, deacetylates MnSOD/SOD2 (ROS detox), tunes OPA1-driven fusion and destabilizes HIF-1α. Induced by fasting and calorie restriction.', legend: [['#ffb347', 'SIRT3 — matrix deacetylation']], vault: ['SIRT3'] },
      { t: 'SIRT4 — the brake', b: 'SIRT4 is mostly an ADP-ribosyltransferase, not a deacetylase: it ADP-ribosylates and inhibits glutamate dehydrogenase (blunting amino-acid-stimulated insulin secretion) and inhibits MTPα (fatty-acid oxidation). Calorie restriction turns it down — the mirror of SIRT1/3.', legend: [['#ff8a5a', 'SIRT4 — GDH brake']], vault: ['SIRT4'] },
      { t: 'SIRT5 — the acyl editor', b: 'SIRT5 is a weak deacetylase but a strong desuccinylase/demalonylase/deglutarylase: it activates CPS1 (urea cycle) and HMGCS2 (ketogenesis) and tunes IDH2, SDHA, LCAD and SOD1 across the TCA cycle, fat oxidation and redox defense.', legend: [['#4ad6b5', 'SIRT5 — acyl editing']], vault: ['SIRT5'] },
    ],
    combiSteps: [
      { t: 'Two drugs, two job descriptions [preclinical]', b: 'Ivermectin (teal) removes oncogenic signals; fenbendazole (orange) removes structural and metabolic machinery. Primary targets barely overlap — that non-overlap is the whole combination thesis. All mechanisms here are preclinical: cell lines and xenografts, no clinical trials.', legend: [['#3ec9a7', 'ivermectin entry'], ['#f5a65b', 'fenbendazole entry']], vault: ['Ivermectin', 'Fenbendazole'] },
      { t: 'Ivermectin at the gate — P-gp blockade', b: 'At the membrane, ivermectin potently inhibits P-gp and MRP1/2/3 efflux pumps, raising intratumoral retention of co-administered drugs — including fenbendazole — without raising systemic dose. (Its antiparasitic GluCl targets do not exist in humans: the safety-margin pivot behind repurposing.)', legend: [['#3ec9a7', 'P-gp blocked — drugs stay in']], vault: ['Ivermectin', 'P-gp'] },
      { t: 'Ivermectin in the cytosol — PAK1 falls', b: 'Ivermectin drives proteasomal degradation of PAK1, a hub upstream of Akt/mTOR, NF-κB, STAT3 and Wnt — plus independent YAP1 (Hippo) inhibition. Kinase-addicted survival signaling collapses from the top down.', legend: [['#3ec9a7', 'PAK1 → Akt/mTOR · YAP1 · STAT3 off']], vault: ['PAK1', 'YAP1', 'STAT3', 'mTOR'] },
      { t: 'Ivermectin at the nucleus — import blocked', b: 'Ivermectin blocks KPNB1 (importin-β1) nuclear transport at the pore and suppresses Wnt/β-catenin, STAT3 and NF-κB transcription — including the PAK1–STAT3 cancer-stem-cell program (NANOG/OCT4/SOX2).', legend: [['#3ec9a7', 'KPNB1 blockade · stem program off']], vault: ['KPNB1', 'Ivermectin'] },
      { t: 'Fenbendazole on the rails — spindle wrecked', b: 'Fenbendazole binds the colchicine site of β-tubulin and destabilizes microtubules: the mitotic spindle cannot hold, and cells arrest in G2/M. Watch the orange flow run down a rail that is coming apart.', legend: [['#f5a65b', 'β-tubulin destabilized — G2/M arrest']], vault: ['Fenbendazole', 'Tubulin'] },
      { t: 'Fenbendazole starves + disinhibits — Warburg off, p53 on', b: 'GLUT1 down plus hexokinase-2 inhibition chokes glycolysis (Warburg blockade → NADPH/glutathione collapse), while MDM2/MdmX suppression stabilizes p53 → p21 arrest. Metabolism and the genome guardian fall in one move.', legend: [['#f5a65b', 'GLUT1/HK2 down · p53 stabilized']], vault: ['GLUT1', 'Hexokinase 2', 'p53', 'MDM2', 'Warburg Effect'] },
      { t: 'Convergence — redox catastrophe at the mitochondria', b: 'Both drugs funnel into the same endpoints from different doors: ΔΨm collapse and cytochrome-c release meet NADPH-depleted antioxidant defenses — ROS pushed past the lethal threshold (apoptosis, autophagy, pyroptosis). SIRT3/SIRT6 and the NAD+ gate set sensitivity — the bridge back to the Sirtuins tour. Hypothesis only: untested clinically.', legend: [['#ff5a4d', 'ROS past lethal threshold'], ['#ffb347', 'mitochondrial collapse']], vault: ['Apoptosis', 'Autophagy', 'SIRT3', 'SIRT6', 'NAD+'] },
    ],
  },
  zh: {
    tabExplore: '探索', tabAdreno: '腎上腺色素路徑', tabSirtuin: 'Sirtuins',
    tabCombi: 'IVM × FBZ 抗癌追蹤',
    labels: '標籤', rotate: '旋轉', cutaway: '剖面',
    stepOf: (a, b) => `步驟 ${a} / ${b}`, prev: '← 上一步', next: '下一步 →', play: '▶ 自動播放', pause: '⏸ 暫停',
    exploreTitle: '細胞組件', exploreBody: '點擊細胞中的任何結構（或下方按鈕），查看其真實尺寸、功能與知識庫連結。可拖曳旋轉、滾輪縮放、右鍵平移。',
    vaultRef: '知識庫', organelles: '胞器',
    overviewFlag: '自由探索 — 點擊一個結構',
    orgs: {
      membrane: { n: '細胞膜', s: '細胞直徑 20 µm · 雙層約 8 nm', d: '選擇性屏障與訊號表面：受體、通道與轉運蛋白決定何者進入。腎上腺素等兒茶酚胺作用於其受體，而氧化產物與 ROS 威脅其脂質。' },
      nucleus: { n: '細胞核', s: '直徑約 6 µm · 雙層核膜、約 2,000 個核孔', d: '基因組金庫。SIRT1 與 SIRT6 在此去乙醯化組蛋白與轉錄因子（p53、FOXO、NF-κB）；染色質狀態是主要的 sirtuin 讀出。' },
      nucleolus: { n: '核仁', s: '直徑約 2 µm · 位於核內', d: '核糖體工廠——rRNA 轉錄與組裝。SIRT7 居於此，活化 RNA 聚合酶 I 與核糖體生源。' },
      mito: { n: '粒線體', s: '直徑 0.5–1 µm × 長 1–4 µm · 每細胞數百個', d: 'ATP 與 ROS：電子傳遞鏈供能並洩漏超氧陰離子。MAO 位於外膜（副產 H₂O₂）；SIRT3/4/5 調節基質酶（AceCS2、SOD2、GDH、CPS1）。腎上腺色素氧化還原循環首先打擊此處。' },
      rer: { n: '粗糙內質網', s: '緊貼細胞核的片層 · 管徑約 50 nm', d: '蛋白質合成與摺疊——表面佈滿核糖體，供給分泌路徑。此處的氧化性蛋白摺疊也是 ROS 來源之一。' },
      ser: { n: '平滑內質網', s: '管狀網絡 · 管徑約 50 nm', d: '脂質合成、Ca²⁺ 儲存與解毒化學（細胞色素 P450）。釋出的鈣在接觸位點與粒線體對話。' },
      golgi: { n: '高爾基體', s: '直徑約 1–2 µm · 扁囊厚約 30 nm', d: '郵局：糖基化、分選，以囊泡發往細胞膜、溶酶體與胞外。可即時觀察囊泡穿梭。' },
      lysosome: { n: '溶酶體', s: '直徑 0.2–0.5 µm · pH 約 4.5–5', d: '回收胃——酸性水解酶消化自噬與內吞送來的貨物。氧化兒茶酚胺色素（類神經黑色素）最終進入溶酶體相關顆粒。' },
      peroxisome: { n: '過氧化物酶體', s: '直徑 0.1–1 µm', d: '過氧化物專家：極長鏈脂肪酸 β-氧化與清除 H₂O₂ 的過氧化氫酶——氧化還原故事中的安靜夥伴。' },
      ribosome: { n: '核糖體', s: '直徑約 25 nm（顯示放大 ×4）', d: '蛋白質建造者，游離於胞質並附著於粗糙內質網。每個約 25 nm——一個粒線體的空間可容納數千個。' },
      centrosome: { n: '中心體與微管', s: '中心粒直徑 0.25 × 長 0.5 µm · 微管直徑 25 nm', d: '微管組織中心：囊泡、胞器與染色體分離的軌道網。SIRT2 去乙醯化這些軌道上的 α-微管蛋白，並經 ATG4B 調控自噬。' },
      npc: { n: '核孔複合體', s: '直徑約 120 nm · 每核約 2,000 個', d: '核膜的門禁——蛋白質與 RNA 經此穿梭；SIRT1 本人也在核質之間穿梭。' },
    },
    adrenoSteps: [
      { t: '邊緣的腎上腺素', b: '腎上腺素匯集於胞質與胞外液。微量金屬、超氧陰離子與髓過氧化物酶衍生氧化劑奪去一個電子：半醌自由基，再到腎上腺素醌。綠色粒子自胞外流入。', legend: [['#51ff9e', '腎上腺素流入']], vault: ['Adrenochrome Pathway', 'Adrenochrome'] },
      { t: '環化——不歸點', b: '腎上腺素醌經 1,4-Michael 環化（半衰期約 2–5 分鐘）生成無色的白腎上腺色素。無需酶——純化學，就在胞質中發生。', legend: [['#ffe14d', '醌 → 白腎上腺色素']], vault: ['Leuco-adrenochrome', 'Adrenochrome Pathway'] },
      { t: '腎上腺色素與氧化還原循環', b: '白腎上腺色素氧化為紅色腎上腺色素，每轉一圈釋出超氧陰離子。腎上腺色素 ↔ 半醌的氧化還原循環將 ROS 放大到遠超初次氧化——看紅色粒子匯聚到粒線體。', legend: [['#ff5a4d', '腎上腺色素 → 粒線體'], ['#ff7a1a', '超氧陰離子']], vault: ['Adrenochrome', 'Adrenochrome Semiquinone Radical'] },
      { t: '粒線體受擊', b: '粒線體首當其衝：外膜 MAO 添產 H₂O₂，膜間隙的細胞色素 c 氧化兒茶酚，氧化還原循環毒害呼吸（知識庫中的 GPX4／粒線體毒性）。星團閃爍——這正是各方案要預防的損傷。', legend: [['#ff5a4d', 'ROS 爆發'], ['#ffb347', '受壓粒線體']], vault: ['MAO', 'Detoxification'] },
      { t: '解毒分支——NQO1、GSH、COMT/MAO', b: '防禦啟動。NQO1／DT-黃遞酶做安全的雙電子還原（跳過自由基）；穀胱甘肽轉移酶結合醌類；維生素 C 化學性回收。同時經典清除運行：胞質 COMT → 甲氧基腎上腺素，粒線體 MAO → 醛 → VMA。綠色＝安全出口。', legend: [['#51ff9e', '已解毒／排出'], ['#7fd4ff', 'NQO1 · GSH · 維生素 C']], vault: ['NQO1', 'DT-diaphorase', 'Glutathione', 'MAO'] },
      { t: '結局——腎上腺螢光素 → 色素', b: '逃過解毒者（鹼性）重排為腎上腺螢光素——綠色螢光——並聚合成類神經黑色素，存於溶酶體相關顆粒。深色顆粒在溶酶體旁累積；醌類的蛋白芳基化是附帶損傷。', legend: [['#9a7bd0', '腎上腺螢光素 → 色素'], ['#3a3348', '色素顆粒']], vault: ['Adrenolutin', 'Adrenochrome'] },
    ],
    sirtuinSteps: [
      { t: '同一燃料，七個地址', b: '七種 sirtuin 燒同一種燃料：每次去醯化消耗 NAD⁺ → 菸鹼醯胺 ＋ 醯基-ADP-核糖。核／質／粒線體 NAD⁺ 池、NAMPT 補救路徑與 CD38 競爭者決定預算。藍色粒子描繪粒線體與核之間的 NAD⁺ 交通。', legend: [['#7fd4ff', 'NAD⁺ 交通']], vault: ['Sirtuins', 'NAD+'] },
      { t: 'SIRT1——細胞核多面手', b: 'SIRT1 巡邏常染色質（壓力下穿梭到胞質）。去乙醯化組蛋白 H1/H3/H4，以及 p53（煞停凋亡）、FOXO1/3a（抗壓、自噬）、PGC-1α（粒線體生源）與 NF-κB RelA（抗發炎）。', legend: [['#b79aff', 'SIRT1 轄區——核質']], vault: ['SIRT1'] },
      { t: 'SIRT6——染色質守衛', b: 'SIRT6 緊貼異染色質：H3K9ac/H3K56ac 去乙醯化使 LINE-1 反轉錄轉座子靜默、端粒穩定；ADP-核糖基化 PARP1 修復雙股斷裂，並共抑制 HIF-1α 與 NF-κB。', legend: [['#8a6ff0', 'SIRT6——異染色質']], vault: ['SIRT6'] },
      { t: 'SIRT7——核仁專家', b: 'SIRT7 居於核仁，活化 RNA 聚合酶 I（rRNA → 核糖體生源——與 SIRT1 經 TAFI68 的抑制相反），去乙醯化 GATA4（抗心肌肥大）並抑制 p21。', legend: [['#d0b8ff', 'SIRT7——核仁']], vault: ['SIRT7'] },
      { t: 'SIRT2——細胞骨架調音師', b: 'SIRT2 在胞質工作，沿著它去乙醯化的微管（α-微管蛋白）運行；G2/M 期入核促有絲分裂染色質凝縮，並為 ATG4B 引發 LC3 加工、放行自噬。青色粒子沿一條軌道流動。', legend: [['#51e0ff', 'SIRT2——微管軌道']], vault: ['SIRT2'] },
      { t: 'SIRT3——粒線體主力', b: 'SIRT3 是基質主力，也是唯一與人類長壽直接相關的 sirtuin：活化 AceCS2（燃料入口）與 IDH2，去乙醯化 MnSOD/SOD2（ROS 解毒），調節 OPA1 介導的融合，並使 HIF-1α 失穩。禁食與熱量限制誘導它。', legend: [['#ffb347', 'SIRT3——基質去乙醯化']], vault: ['SIRT3'] },
      { t: 'SIRT4——煞車', b: 'SIRT4 主要是 ADP-核糖基轉移酶而非去乙醯化酶：ADP-核糖基化並抑制穀氨酸脫氫酶（鈍化胺基酸刺激的胰島素分泌），抑制 MTPα（脂肪酸氧化）。熱量限制把它調低——與 SIRT1/3 互為鏡像。', legend: [['#ff8a5a', 'SIRT4——GDH 煞車']], vault: ['SIRT4'] },
      { t: 'SIRT5——醯基編輯器', b: 'SIRT5 去乙醯化弱，但去琥珀醯／丙二醯／戊二醯化強：活化 CPS1（尿素循環）與 HMGCS2（酮體生成），調節 TCA、脂肪氧化與氧化還原防禦中的 IDH2、SDHA、LCAD、SOD1。', legend: [['#4ad6b5', 'SIRT5——醯基編輯']], vault: ['SIRT5'] },
    ],
    combiSteps: [
      { t: '兩種藥，兩份工作說明［臨床前］', b: '伊維菌素（青色）移除致癌訊號；芬苯達唑（橙色）移除結構與代謝機械。主要標靶幾乎不重疊——這種不重疊正是組合論點的全部。此處所有機制皆屬臨床前：細胞株與異種移植，尚無臨床試驗。', legend: [['#3ec9a7', '伊維菌素進入'], ['#f5a65b', '芬苯達唑進入']], vault: ['Ivermectin', 'Fenbendazole'] },
      { t: '伊維菌素守門——P-gp 封鎖', b: '在細胞膜，伊維菌素強效抑制 P-gp 與 MRP1/2/3 外排泵，提高併用藥物（含芬苯達唑）在腫瘤內的滯留，而無需提高全身劑量。（其抗寄生蟲 GluCl 標靶在人類不存在：重新定位背後的安全餘裕轉折。）', legend: [['#3ec9a7', 'P-gp 被封——藥物留在胞內']], vault: ['Ivermectin', 'P-gp'] },
      { t: '伊維菌素在胞質——PAK1 倒下', b: '伊維菌素驅動 PAK1 的蛋白酶體降解——PAK1 是 Akt/mTOR、NF-κB、STAT3 與 Wnt 上游的樞紐；另獨立抑制 YAP1（Hippo）。激酶依賴的存活訊號自上而下崩潰。', legend: [['#3ec9a7', 'PAK1 → Akt/mTOR · YAP1 · STAT3 關閉']], vault: ['PAK1', 'YAP1', 'STAT3', 'mTOR'] },
      { t: '伊維菌素在核——進口被封', b: '伊維菌素在核孔阻斷 KPNB1（importin-β1）核運輸，並抑制 Wnt/β-catenin、STAT3 與 NF-κB 轉錄——包括 PAK1–STAT3 癌症幹細胞計畫（NANOG/OCT4/SOX2）。', legend: [['#3ec9a7', 'KPNB1 封鎖 · 幹細胞計畫關閉']], vault: ['KPNB1', 'Ivermectin'] },
      { t: '芬苯達唑上軌——紡錘體被毀', b: '芬苯達唑結合 β-微管蛋白的秋水仙鹼位點，使微管不穩定：有絲分裂紡錘體無法維持，細胞停滯於 G2/M。看橙色粒子沿一條正在解體的軌道流動。', legend: [['#f5a65b', 'β-微管蛋白不穩定——G2/M 停滯']], vault: ['Fenbendazole', 'Tubulin'] },
      { t: '芬苯達唑斷糧＋解鎖——瓦伯格關、p53 開', b: 'GLUT1 下調加己糖激酶 2 抑制，掐住糖解（瓦伯格阻斷 → NADPH／穀胱甘肽崩潰）；同時 MDM2/MdmX 抑制穩定 p53 → p21 停滯。代謝與基因組守衛一舉而下。', legend: [['#f5a65b', 'GLUT1/HK2 下降 · p53 穩定']], vault: ['GLUT1', 'Hexokinase 2', 'p53', 'MDM2', 'Warburg Effect'] },
      { t: '匯聚——粒線體的氧化還原災難', b: '兩種藥從不同入口匯入相同終點：ΔΨm 崩潰與細胞色素 c 釋放，遇上 NADPH 耗竭的抗氧化防禦——ROS 被推過致死閾值（凋亡、自噬、焦亡）。SIRT3/SIRT6 與 NAD+ 閘門決定敏感度——回到 Sirtuins 導覽的橋樑。純屬假說：臨床未驗證。', legend: [['#ff5a4d', 'ROS 超過致死閾值'], ['#ffb347', '粒線體崩潰']], vault: ['Apoptosis', 'Autophagy', 'SIRT3', 'SIRT6', 'NAD+'] },
    ],
  },
};

/* Oops-guard: no stray non-CJK text in zh step 4 (fixed below at build time validation). */

/* ============================== tour registry ============================== */
const TOURS = {
  explore: { steps: null },
  adreno: { steps: 'adrenoSteps', markers: 'adreno' },
  sirtuin: { steps: 'sirtuinSteps', markers: 'sirtuin' },
  combi: { steps: 'combiSteps', markers: 'combi' },
};

/* ============================== scene setup ============================== */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(20260907);
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const NUC = V3(-2.2, 0.6, 0), NUC_R = 3.0;
const CELL_R = 10;

export function initCellPage({ lang = 'en', canvas, els }) {
  const T = STR[lang] || STR.en;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.localClippingEnabled = true;
  const scene = new THREE.Scene();
  // No scene.background / fog: the canvas is transparent so the page (theme-02
  // sheet, light or dark) shows through and the viz always matches the page.
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  camera.position.set(0, 7, 27);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 4; controls.maxDistance = 55;
  controls.autoRotateSpeed = 0.7;

  scene.add(new THREE.AmbientLight(0xdfeaf2, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 1.9); key.position.set(8, 12, 10); scene.add(key);
  const rim = new THREE.DirectionalLight(0x7fd4ff, 0.8); rim.position.set(-10, -4, -8); scene.add(rim);
  const rosLight = new THREE.PointLight(0xff3a2a, 0, 30, 1.6); scene.add(rosLight);

  const pickMeshes = [];
  const HL = {}; // organelle id -> materials to pulse
  const tag = (mesh, oid) => { mesh.userData.oid = oid; pickMeshes.push(mesh); };
  const reg = (oid, mat) => { (HL[oid] = HL[oid] || []).push(mat); };

  /* ---- plasma membrane + proteins ---- */
  const memMat = new THREE.MeshPhysicalMaterial({ color: 0xe8a58c, roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.25, transparent: true, opacity: 0.10, side: THREE.DoubleSide, depthWrite: false });
  const membrane = new THREE.Mesh(new THREE.SphereGeometry(CELL_R, 64, 48), memMat);
  tag(membrane, 'membrane'); reg('membrane', memMat); scene.add(membrane);
  const protGeo = new THREE.CapsuleGeometry(0.09, 0.2, 4, 8);
  const protMat = new THREE.MeshStandardMaterial({ color: 0x7fd4ff, roughness: 0.4 });
  const proteins = new THREE.InstancedMesh(protGeo, protMat, 130);
  {
    const d = new THREE.Object3D(), up = V3(0, 1, 0);
    for (let i = 0; i < 130; i++) {
      const th = rnd() * Math.PI * 2, ph = Math.acos(2 * rnd() - 1);
      const n = V3(Math.sin(ph) * Math.cos(th), Math.cos(ph), Math.sin(ph) * Math.sin(th));
      d.position.copy(n).multiplyScalar(CELL_R);
      d.quaternion.setFromUnitVectors(up, n);
      d.updateMatrix(); proteins.setMatrixAt(i, d.matrix);
    }
  }
  proteins.userData.oid = 'membrane'; pickMeshes.push(proteins); scene.add(proteins);

  /* ---- actin cortex ---- */
  {
    const pts = [];
    for (let i = 0; i < 500; i++) {
      const th = rnd() * Math.PI * 2, ph = Math.acos(2 * rnd() - 1), r = 9.0 + rnd() * 0.6;
      const p = V3(r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph), r * Math.sin(ph) * Math.sin(th));
      const q = p.clone().add(V3((rnd() - 0.5) * 0.9, (rnd() - 0.5) * 0.9, (rnd() - 0.5) * 0.9));
      pts.push(p.x, p.y, p.z, q.x, q.y, q.z);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xe88aa0, transparent: true, opacity: 0.28 })));
  }

  /* ---- nucleus: envelope, pores, chromatin, nucleolus ---- */
  const nucGrp = new THREE.Group(); nucGrp.position.copy(NUC); scene.add(nucGrp);
  const nucMat = new THREE.MeshStandardMaterial({ color: 0x9a7bd0, roughness: 0.55, transparent: true, opacity: 0.5, emissive: 0x2a1a4a, emissiveIntensity: 0.55, side: THREE.DoubleSide, depthWrite: false });
  const nucOuter = new THREE.Mesh(new THREE.SphereGeometry(NUC_R, 48, 32), nucMat);
  tag(nucOuter, 'nucleus'); reg('nucleus', nucMat); nucGrp.add(nucOuter);
  const nucInner = new THREE.Mesh(new THREE.SphereGeometry(NUC_R - 0.1, 48, 32),
    new THREE.MeshStandardMaterial({ color: 0x8a68c8, roughness: 0.6, transparent: true, opacity: 0.28, side: THREE.BackSide, depthWrite: false }));
  nucInner.userData.oid = 'nucleus'; pickMeshes.push(nucInner); nucGrp.add(nucInner);
  // chromatin blobs
  const chromMat = new THREE.MeshStandardMaterial({ color: 0x6f4fb0, roughness: 0.7 });
  [[-1.2, 1.1, 0.6, 0.9], [1.1, -0.9, -0.8, 1.1], [0.2, 0.2, -1.5, 0.8], [-0.4, -1.5, 1.0, 0.7]].forEach(([x, y, z, r]) => {
    const c = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), chromMat);
    c.position.set(x, y, z); c.userData.oid = 'nucleus'; pickMeshes.push(c); nucGrp.add(c);
  });
  // nuclear pore complexes (Ø120nm → shown ~1.5×)
  {
    const g = new THREE.CylinderGeometry(0.09, 0.09, 0.16, 10);
    const m = new THREE.MeshStandardMaterial({ color: 0xffd97a, roughness: 0.4 });
    const inst = new THREE.InstancedMesh(g, m, 90);
    const d = new THREE.Object3D(), up = V3(0, 1, 0);
    for (let i = 0; i < 90; i++) {
      const th = rnd() * Math.PI * 2, ph = Math.acos(2 * rnd() - 1);
      const n = V3(Math.sin(ph) * Math.cos(th), Math.cos(ph), Math.sin(ph) * Math.sin(th));
      d.position.copy(n).multiplyScalar(NUC_R);
      d.quaternion.setFromUnitVectors(up, n);
      d.updateMatrix(); inst.setMatrixAt(i, d.matrix);
    }
    inst.userData.oid = 'npc'; pickMeshes.push(inst); reg('npc', m); nucGrp.add(inst);
  }
  // nucleolus
  const nolMat = new THREE.MeshStandardMaterial({ color: 0x5a3fa0, roughness: 0.6, emissive: 0x1c1038, emissiveIntensity: 0.7 });
  const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(1.0, 28, 20), nolMat);
  nucleolus.position.set(-0.6, 0.6, 0.7);
  tag(nucleolus, 'nucleolus'); reg('nucleolus', nolMat); nucGrp.add(nucleolus);

  /* ---- mitochondria (capsules Ø0.56 × ~2.2 µm, true scale) ---- */
  const mitoMat = new THREE.MeshStandardMaterial({ color: 0xffb347, roughness: 0.42, emissive: 0x5a2a00, emissiveIntensity: 0.45 });
  const cristaMat = new THREE.MeshStandardMaterial({ color: 0xc23d2a, roughness: 0.5, emissive: 0x5a0f0c, emissiveIntensity: 0.5 });
  const mitoGeo = new THREE.CapsuleGeometry(0.28, 1.64, 6, 14);
  const cristaGeo = new THREE.CapsuleGeometry(0.17, 1.3, 4, 10);
  const mitos = [];
  let guard = 0;
  while (mitos.length < 16 && guard++ < 800) {
    const p = V3((rnd() - 0.5) * 15, (rnd() - 0.5) * 12, (rnd() - 0.5) * 15);
    if (p.length() > 8.2 || p.distanceTo(NUC) < NUC_R + 1.4) continue;
    const g = new THREE.Group();
    const outer = new THREE.Mesh(mitoGeo, mitoMat);
    const inner = new THREE.Mesh(cristaGeo, cristaMat);
    outer.userData.oid = 'mito'; pickMeshes.push(outer);
    g.add(outer, inner);
    g.position.copy(p);
    g.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
    scene.add(g); mitos.push(g);
  }
  reg('mito', mitoMat); reg('mito', cristaMat);

  /* ---- rough ER: partial shells around nucleus + ribosome studs ---- */
  const rerMat = new THREE.MeshStandardMaterial({ color: 0xd9b98a, roughness: 0.6, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
  reg('rer', rerMat);
  const rerGrp = new THREE.Group(); rerGrp.position.copy(NUC); scene.add(rerGrp);
  const studPos = [];
  for (let s = 0; s < 4; s++) {
    const r = NUC_R + 0.75 + s * 0.55;
    const sh = new THREE.Mesh(
      new THREE.SphereGeometry(r, 40, 20, Math.PI * 0.55, Math.PI * 0.95, Math.PI * 0.22, Math.PI * 0.56), rerMat);
    sh.userData.oid = 'rer'; pickMeshes.push(sh); rerGrp.add(sh);
    for (let i = 0; i < 60; i++) {
      const ph = Math.PI * 0.55 + rnd() * Math.PI * 0.95, th = Math.PI * 0.22 + rnd() * Math.PI * 0.56;
      studPos.push(V3(
        NUC.x + r * Math.sin(th) * Math.cos(ph),
        NUC.y + r * Math.cos(th),
        NUC.z + r * Math.sin(th) * Math.sin(ph)));
    }
  }
  /* ---- smooth ER: tubules ---- */
  const serMat = new THREE.MeshStandardMaterial({ color: 0xe8cf9e, roughness: 0.55 });
  reg('ser', serMat);
  const serBase = V3(4.2, -0.6, 1.6);
  for (let i = 0; i < 4; i++) {
    const c = new THREE.CatmullRomCurve3([
      serBase.clone().add(V3(-1 + rnd(), rnd() * 2 - 1, rnd() * 2 - 1)),
      serBase.clone().add(V3(rnd() * 2, rnd() * 2.4 - 1.2, rnd() * 2 - 1)),
      serBase.clone().add(V3(1 + rnd(), rnd() * 2 - 1, rnd() * 2 - 1)),
    ]);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(c, 24, 0.09, 8), serMat);
    tube.userData.oid = 'ser'; pickMeshes.push(tube); scene.add(tube);
  }
  /* ---- free + RER ribosomes (Ø25nm, shown ×4 → r=0.05) ---- */
  const ribMat = new THREE.MeshStandardMaterial({ color: 0x8fd0c8, roughness: 0.5 });
  const ribGeo = new THREE.SphereGeometry(0.05, 8, 6);
  const ribCount = 500 + studPos.length;
  const ribosomes = new THREE.InstancedMesh(ribGeo, ribMat, ribCount);
  {
    const d = new THREE.Object3D();
    let i = 0;
    for (const p of studPos) { d.position.copy(p); d.updateMatrix(); ribosomes.setMatrixAt(i++, d.matrix); }
    let g2 = 0;
    while (i < ribCount && g2++ < 6000) {
      const p = V3((rnd() - 0.5) * 17, (rnd() - 0.5) * 15, (rnd() - 0.5) * 17);
      if (p.length() > 9.1 || p.distanceTo(NUC) < NUC_R + 0.4) continue;
      d.position.copy(p); d.updateMatrix(); ribosomes.setMatrixAt(i++, d.matrix);
    }
    ribosomes.count = i;
  }
  ribosomes.userData.oid = 'ribosome'; pickMeshes.push(ribosomes); scene.add(ribosomes);

  /* ---- Golgi: stacked cisternae + live shuttle vesicles ---- */
  const golgiMat = new THREE.MeshStandardMaterial({ color: 0x7fd4a8, roughness: 0.45 });
  reg('golgi', golgiMat);
  const GOLGI = V3(3.2, 2.8, -1.2);
  const golgiGrp = new THREE.Group(); golgiGrp.position.copy(GOLGI);
  golgiGrp.rotation.set(0.3, 0.5, 0.15); scene.add(golgiGrp);
  for (let i = 0; i < 5; i++) {
    const c = new THREE.Mesh(new THREE.SphereGeometry(1.5 - Math.abs(i - 2) * 0.18, 28, 12), golgiMat);
    c.scale.set(1, 0.16, 0.72);
    c.position.set((i - 2) * 0.22, (i - 2) * 0.42, 0);
    c.userData.oid = 'golgi'; pickMeshes.push(c); golgiGrp.add(c);
  }
  const vesMat = new THREE.MeshStandardMaterial({ color: 0xa8e6c5, roughness: 0.4 });
  const vesicles = [];
  for (let i = 0; i < 6; i++) {
    const v = new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 10), vesMat);
    v.userData.oid = 'golgi'; pickMeshes.push(v); scene.add(v);
    const dest = V3(6 + rnd() * 3, -2 + rnd() * 5, 2 + rnd() * 4).setLength(9.2);
    vesicles.push({ m: v, a: GOLGI.clone().add(V3(rnd() - 0.5, rnd() - 0.5, 1.2)), b: dest, ph: rnd(), sp: 0.05 + rnd() * 0.05 });
  }

  /* ---- lysosomes / peroxisomes / endosomes ---- */
  const lysoMat = new THREE.MeshStandardMaterial({ color: 0xd9403b, roughness: 0.35, emissive: 0x5a0f0c, emissiveIntensity: 0.6 });
  reg('lysosome', lysoMat);
  const LYSO = V3(-0.5, 3.6, 2.6);
  const lysoSpots = [LYSO, V3(5.5, 1.5, -3), V3(-5.5, -2.5, -2), V3(1.5, -5, -3.5), V3(-4, 4.5, -3.5), V3(6, -3.5, 1), V3(0.5, 5.5, 3.5)];
  for (const p of lysoSpots) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.26, 18, 14), lysoMat);
    m.position.copy(p); m.userData.oid = 'lysosome'; pickMeshes.push(m); scene.add(m);
  }
  const peroxMat = new THREE.MeshStandardMaterial({ color: 0x4ad6b5, roughness: 0.4, emissive: 0x0a3a30, emissiveIntensity: 0.5 });
  reg('peroxisome', peroxMat);
  let np = 0; guard = 0;
  let peroxAnchor = V3(5, -1, -4);
  while (np < 5 && guard++ < 500) {
    const p = V3((rnd() - 0.5) * 14, (rnd() - 0.5) * 11, (rnd() - 0.5) * 14);
    if (p.length() > 8.4 || p.distanceTo(NUC) < NUC_R + 0.8) continue;
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), peroxMat);
    m.position.copy(p); m.userData.oid = 'peroxisome'; pickMeshes.push(m); scene.add(m);
    if (np === 0) peroxAnchor = p.clone();
    np++;
  }
  // neuromelanin-like pigment granules (adrenochrome tour finale, hidden otherwise)
  const pigment = new THREE.Group();
  const pigMat = new THREE.MeshStandardMaterial({ color: 0x2c2536, roughness: 0.8, transparent: true, opacity: 0 });
  for (let i = 0; i < 12; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.13 + rnd() * 0.06, 10, 8), pigMat);
    m.position.copy(LYSO).add(V3((rnd() - 0.5) * 2.2, (rnd() - 0.5) * 2.2, (rnd() - 0.5) * 2.2));
    pigment.add(m);
  }
  pigment.visible = false; scene.add(pigment);

  /* ---- centrosome + microtubules (Ø25nm, true scale r=0.025 → shown 0.03) ---- */
  const CENT = V3(1.2, -3.2, 1.8);
  const centriMat = new THREE.MeshStandardMaterial({ color: 0x5aa8e8, roughness: 0.45 });
  reg('centrosome', centriMat);
  const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.5, 14), centriMat);
  const c2 = c1.clone();
  c1.position.copy(CENT); c2.position.copy(CENT).add(V3(0.35, 0.1, 0.1)); c2.rotation.z = Math.PI / 2;
  c1.userData.oid = 'centrosome'; c2.userData.oid = 'centrosome';
  pickMeshes.push(c1, c2); scene.add(c1, c2);
  const mtMat = new THREE.MeshStandardMaterial({ color: 0x6fc3e8, roughness: 0.5, transparent: true, opacity: 0.8 });
  reg('centrosome', mtMat);
  const mtEnds = [];
  for (let i = 0; i < 20; i++) {
    const dir = V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize();
    const mid = CENT.clone().add(dir.clone().multiplyScalar(2.4)).add(V3((rnd() - 0.5), (rnd() - 0.5), (rnd() - 0.5)));
    const end = CENT.clone().add(dir.clone().multiplyScalar(4.6 + rnd() * 2.4));
    if (end.length() > 9.3) end.setLength(9.3);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([CENT.clone(), mid, end]), 20, 0.03, 6), mtMat);
    tube.userData.oid = 'centrosome'; pickMeshes.push(tube); scene.add(tube);
    mtEnds.push({ mid, end });
  }

  /* ---- cytosol haze + extracellular drift ---- */
  function makePoints(n, gen, color, size, opacity) {
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const p = gen(); pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({ color, size, transparent: true, opacity, depthWrite: false });
    const pts = new THREE.Points(g, m); scene.add(pts);
    return pts;
  }
  const haze = makePoints(700, () => {
    for (let k = 0; k < 20; k++) {
      const p = V3((rnd() - 0.5) * 18, (rnd() - 0.5) * 16, (rnd() - 0.5) * 18);
      if (p.length() < 9.3 && p.distanceTo(NUC) > NUC_R + 0.3) return p;
    }
    return V3(5, 0, 5);
  }, 0x93a7b8, 0.05, 0.5);
  makePoints(60, () => V3((rnd() - 0.5) * 30, (rnd() - 0.5) * 26, (rnd() - 0.5) * 30).setLength(11 + rnd() * 4), 0x6a7d8f, 0.09, 0.55);

  /* ---- tour markers: sirtuin stations + adrenochrome stations ---- */
  function marker(color, pos, r = 0.22) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 }));
    m.position.copy(pos); m.visible = false; scene.add(m);
    return m;
  }
  const S = {
    s1: marker(0xb79aff, NUC.clone().add(V3(0.7, 0.9, 1.2))),
    s6: marker(0x8a6ff0, NUC.clone().add(V3(-1.2, -0.9, -0.8))),
    s7: marker(0xd0b8ff, NUC.clone().add(V3(-0.6, 0.6, 0.7))),
    s2: marker(0x51e0ff, mtEnds[0].mid.clone()),
    s3: marker(0xffb347, mitos[1].position.clone()),
    s4: marker(0xff8a5a, mitos[2].position.clone()),
    s5: marker(0x4ad6b5, mitos[3].position.clone()),
    mao: marker(0xff7a1a, mitos[0].position.clone(), 0.26),
    nqo1: marker(0x7fd4ff, V3(2.2, 0.2, 3.2), 0.26),
    ivmMem: marker(0x3ec9a7, V3(7.5, -2.5, 5.5).setLength(9.4), 0.26),
    ivmCyto: marker(0x3ec9a7, V3(2.2, 0.2, 3.2), 0.26),
    kpnb: marker(0x3ec9a7, NUC.clone().add(V3(1.8, 2.2, 1.4)), 0.26),
    fbzTub: marker(0xf5a65b, mtEnds[1].mid.clone(), 0.26),
    fbzMito: marker(0xf5a65b, mitos[0].position.clone(), 0.26),
    fbzMem: marker(0xf5a65b, V3(-6, 3, 6).setLength(9.4), 0.26),
    p53nuc: marker(0xb39df7, NUC.clone().add(V3(-0.5, -1.2, 1.0)), 0.26),
  };
  const sirtuinMarkers = [S.s1, S.s2, S.s3, S.s4, S.s5, S.s6, S.s7];
  const adrenoMarkers = [S.mao, S.nqo1];
  const combiMarkers = [S.ivmMem, S.ivmCyto, S.kpnb, S.fbzTub, S.fbzMito, S.fbzMem, S.p53nuc];

  /* ---- flow particle pool (tour molecule traffic) ---- */
  const FN = 700;
  const fGeo = new THREE.BufferGeometry();
  const fPos = new Float32Array(FN * 3), fCol = new Float32Array(FN * 3);
  fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
  fGeo.setAttribute('color', new THREE.BufferAttribute(fCol, 3));
  const fMat = new THREE.PointsMaterial({ size: 0.14, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false });
  const flows = new THREE.Points(fGeo, fMat);
  flows.visible = false; flows.frustumCulled = false; scene.add(flows);
  let emitters = []; // {a,b,color,count}
  const fSeed = new Float32Array(FN), fSpeed = new Float32Array(FN);
  for (let i = 0; i < FN; i++) { fSeed[i] = rnd(); fSpeed[i] = 0.10 + rnd() * 0.16; }
  const tmpC = new THREE.Color();
  function setEmitters(list) {
    emitters = list;
    if (!list.length) { flows.visible = false; return; }
    flows.visible = true;
    let i = 0;
    for (const e of list) {
      tmpC.set(e.color);
      for (let k = 0; k < e.count && i < FN; k++, i++) {
        fCol[i * 3] = tmpC.r; fCol[i * 3 + 1] = tmpC.g; fCol[i * 3 + 2] = tmpC.b;
      }
    }
    for (; i < FN; i++) { fPos[i * 3 + 1] = 999; }
    fGeo.attributes.color.needsUpdate = true;
  }
  const jitter = new THREE.Vector3();
  function tickFlows(time) {
    if (!emitters.length) return;
    let i = 0;
    for (const e of list0(emitters)) {
      for (let k = 0; k < e.count && i < FN; k++, i++) {
        const s = (fSeed[i] + time * fSpeed[i]) % 1;
        jitter.set(Math.sin(i * 12.9 + time * 3) * e.spread, Math.cos(i * 7.7 + time * 2.4) * e.spread, Math.sin(i * 5.3 + time * 2.9) * e.spread);
        fPos[i * 3] = e.a.x + (e.b.x - e.a.x) * s + jitter.x;
        fPos[i * 3 + 1] = e.a.y + (e.b.y - e.a.y) * s + jitter.y;
        fPos[i * 3 + 2] = e.a.z + (e.b.z - e.a.z) * s + jitter.z;
      }
    }
    fGeo.attributes.position.needsUpdate = true;
  }
  const list0 = (x) => x;

  /* ---- anchors for tour choreography ---- */
  const CYTO = V3(2.2, 0.2, 3.2), EXTRA = V3(0, 3, 12.5), MEMB = V3(7.5, -2.5, 5.5).setLength(9.4);
  const MITO_A = mitos[0].position.clone();
  rosLight.position.copy(MITO_A);

  const ADRENO_CAM = [
    { cam: [4, 4, 22], tgt: [1, 0, 2], hi: ['membrane'], fl: [{ a: EXTRA, b: CYTO, color: '#51ff9e', count: 260, spread: 0.7 }], mk: [] },
    { cam: [5, 2, 15], tgt: CYTO.toArray(), hi: [], fl: [{ a: CYTO.clone().add(V3(-2, 1, 0)), b: CYTO.clone().add(V3(2, -1, 0)), color: '#ffe14d', count: 300, spread: 0.8 }], mk: [] },
    { cam: [MITO_A.x + 4, MITO_A.y + 3, MITO_A.z + 11], tgt: MITO_A.toArray(), hi: ['mito'], fl: [{ a: CYTO, b: MITO_A, color: '#ff5a4d', count: 280, spread: 0.5 }, { a: MITO_A.clone().add(V3(-1.5, 1, 0)), b: MITO_A.clone().add(V3(1.5, -1, 0.5)), color: '#ff7a1a', count: 200, spread: 0.7 }], mk: [] },
    { cam: [MITO_A.x + 3, MITO_A.y + 2.5, MITO_A.z + 9], tgt: MITO_A.toArray(), hi: ['mito'], ros: 60, fl: [{ a: MITO_A.clone().add(V3(-2, 1.2, 0)), b: MITO_A.clone().add(V3(2, -1.2, 0.5)), color: '#ff5a4d', count: 380, spread: 0.9 }], mk: [S.mao] },
    { cam: [3, 3, 18], tgt: [1.5, 0, 2], hi: [], fl: [{ a: MITO_A, b: CYTO, color: '#51ff9e', count: 220, spread: 0.5 }, { a: CYTO, b: MEMB, color: '#51ff9e', count: 180, spread: 0.6 }, { a: CYTO.clone().add(V3(0, 1.5, -1)), b: CYTO.clone().add(V3(1, -1, 1)), color: '#7fd4ff', count: 160, spread: 0.8 }], mk: [S.mao, S.nqo1] },
    { cam: [LYSO.x + 2, LYSO.y + 2, LYSO.z + 10], tgt: LYSO.toArray(), hi: ['lysosome'], pigment: true, fl: [{ a: CYTO, b: LYSO, color: '#9a7bd0', count: 300, spread: 0.5 }], mk: [] },
  ];
  const SIR_CAM = [
    { cam: [0, 7, 27], tgt: [0, 0, 0], hi: [], fl: [{ a: mitos[4].position.clone(), b: NUC.clone().add(V3(1.5, 1.5, 1.5)), color: '#7fd4ff', count: 260, spread: 0.6 }], mk: sirtuinMarkers },
    { cam: [NUC.x + 2, NUC.y + 2.5, NUC.z + 10], tgt: NUC.toArray(), hi: ['nucleus'], fl: [{ a: NUC.clone().add(V3(-1.5, 1, 0.5)), b: NUC.clone().add(V3(1.5, -1, -0.5)), color: '#b79aff', count: 300, spread: 0.8 }], mk: [S.s1] },
    { cam: [NUC.x - 1, NUC.y - 1, NUC.z + 10], tgt: NUC.clone().add(V3(-1.2, -0.9, -0.8)).toArray(), hi: ['nucleus'], fl: [{ a: NUC.clone().add(V3(-2, 0, -1)), b: NUC.clone().add(V3(-0.5, -1.5, -0.5)), color: '#8a6ff0', count: 220, spread: 0.4 }], mk: [S.s6] },
    { cam: [NUC.x - 1, NUC.y + 2, NUC.z + 9], tgt: NUC.clone().add(V3(-0.6, 0.6, 0.7)).toArray(), hi: ['nucleolus'], fl: [{ a: NUC.clone().add(V3(-1.2, 1.2, 0.5)), b: NUC.clone().add(V3(0, 0, 1)), color: '#d0b8ff', count: 200, spread: 0.35 }], mk: [S.s7] },
    { cam: [CENT.x + 2, CENT.y + 2, CENT.z + 11], tgt: mtEnds[0].mid.toArray(), hi: ['centrosome'], fl: [{ a: CENT, b: mtEnds[0].end, color: '#51e0ff', count: 260, spread: 0.25 }], mk: [S.s2] },
    { cam: [mitos[1].position.x + 3, mitos[1].position.y + 2.5, mitos[1].position.z + 9], tgt: mitos[1].position.toArray(), hi: ['mito'], fl: [{ a: mitos[1].position.clone().add(V3(-1.2, 0.8, 0)), b: mitos[1].position.clone().add(V3(1.2, -0.8, 0)), color: '#ffb347', count: 240, spread: 0.45 }], mk: [S.s3] },
    { cam: [mitos[2].position.x + 3, mitos[2].position.y + 2.5, mitos[2].position.z + 9], tgt: mitos[2].position.toArray(), hi: ['mito'], fl: [{ a: mitos[2].position.clone().add(V3(-1.2, 0.8, 0)), b: mitos[2].position.clone().add(V3(1.2, -0.8, 0)), color: '#ff8a5a', count: 240, spread: 0.45 }], mk: [S.s4] },
    { cam: [mitos[3].position.x + 3, mitos[3].position.y + 2.5, mitos[3].position.z + 9], tgt: mitos[3].position.toArray(), hi: ['mito'], fl: [{ a: mitos[3].position.clone().add(V3(-1.2, 0.8, 0)), b: mitos[3].position.clone().add(V3(1.2, -0.8, 0)), color: '#4ad6b5', count: 240, spread: 0.45 }], mk: [S.s5] },
  ];
  const GLUT = V3(-6, 3, 6).setLength(9.4);
  const PAK1HUB = CYTO.clone().add(V3(1.2, 1.0, -1.0));
  const KPNB = NUC.clone().add(V3(1.8, 2.2, 1.4));
  const COMBI_CAM = [
    { cam: [0, 7, 27], tgt: [0, 0, 0], hi: [], fl: [{ a: EXTRA, b: CYTO, color: '#3ec9a7', count: 160, spread: 0.7 }, { a: EXTRA.clone().add(V3(3, -2, 0)), b: CYTO.clone().add(V3(2, -1, 1)), color: '#f5a65b', count: 160, spread: 0.7 }], mk: [S.ivmCyto, S.fbzTub] },
    { cam: [MEMB.x + 2, MEMB.y + 2, MEMB.z + 10], tgt: MEMB.toArray(), hi: ['membrane'], fl: [{ a: EXTRA.clone().add(V3(2, -3, -1)), b: MEMB, color: '#3ec9a7', count: 220, spread: 0.5 }, { a: MEMB, b: CYTO, color: '#f5a65b', count: 160, spread: 0.5 }], mk: [S.ivmMem] },
    { cam: [5, 2, 15], tgt: CYTO.toArray(), hi: [], fl: [{ a: CYTO.clone().add(V3(-2, 1.5, 0)), b: PAK1HUB, color: '#3ec9a7', count: 280, spread: 0.6 }], mk: [S.ivmCyto] },
    { cam: [NUC.x + 2, NUC.y + 2.5, NUC.z + 10], tgt: NUC.toArray(), hi: ['npc'], fl: [{ a: CYTO, b: KPNB, color: '#3ec9a7', count: 240, spread: 0.5 }], mk: [S.kpnb] },
    { cam: [CENT.x + 2, CENT.y + 2, CENT.z + 11], tgt: mtEnds[1].mid.toArray(), hi: ['centrosome'], fl: [{ a: CENT, b: mtEnds[1].end, color: '#f5a65b', count: 260, spread: 0.3 }], mk: [S.fbzTub] },
    { cam: [MITO_A.x + 3, MITO_A.y + 2.5, MITO_A.z + 10], tgt: MITO_A.toArray(), hi: ['mito'], fl: [{ a: GLUT, b: CYTO, color: '#f5a65b', count: 160, spread: 0.5 }, { a: CYTO, b: MITO_A, color: '#f5a65b', count: 180, spread: 0.5 }, { a: NUC.clone().add(V3(-1.5, 0, 0.5)), b: NUC.clone().add(V3(0.5, -1, 1)), color: '#b39df7', count: 140, spread: 0.5 }], mk: [S.fbzMito, S.fbzMem, S.p53nuc] },
    { cam: [MITO_A.x + 3, MITO_A.y + 2.5, MITO_A.z + 9], tgt: MITO_A.toArray(), hi: ['mito'], ros: 60, fl: [{ a: MITO_A.clone().add(V3(-2, 1.2, 0)), b: MITO_A.clone().add(V3(2, -1.2, 0.5)), color: '#ff5a4d', count: 260, spread: 0.9 }, { a: CYTO, b: MITO_A, color: '#3ec9a7', count: 120, spread: 0.5 }, { a: CYTO.clone().add(V3(1, 1, -1)), b: MITO_A.clone().add(V3(-1, 0, 1)), color: '#f5a65b', count: 120, spread: 0.5 }], mk: [S.fbzMito] },
  ];
  const CHORE = { adreno: ADRENO_CAM, sirtuin: SIR_CAM, combi: COMBI_CAM };

  /* ---- labels (projected HTML chips) ---- */
  const labelDefs = [
    { oid: 'membrane', fn: () => [CELL_R * 0.72, CELL_R * 0.72, 0] },
    { oid: 'nucleus', fn: () => NUC.toArray() },
    { oid: 'nucleolus', fn: () => NUC.clone().add(V3(-0.6, 1.6, 0.7)).toArray() },
    { oid: 'mito', fn: () => mitos[5].position.toArray(), dx: 30 },
    { oid: 'rer', fn: () => NUC.clone().add(V3(-4.4, 1.8, 1.2)).toArray() },
    { oid: 'ser', fn: () => serBase.toArray(), dy: -14 },
    { oid: 'golgi', fn: () => GOLGI.toArray(), dy: -16 },
    { oid: 'lysosome', fn: () => LYSO.toArray(), dx: 26 },
    { oid: 'peroxisome', fn: () => peroxAnchor.toArray(), dx: 30 },
    { oid: 'ribosome', fn: () => [5.6, -1.6, 3.2], dy: -12 },
    { oid: 'centrosome', fn: () => CENT.toArray(), dx: -30 },
    { oid: 'npc', fn: () => NUC.clone().add(V3(1.8, 2.2, 1.4)).toArray() },
  ];
  const tourLabelDefs = {
    adreno: [
      { key: 'MAO', fn: () => mitos[0].position.toArray(), dx: 34 },
      { key: 'NQO1 · GSH', fn: () => CYTO.toArray(), dy: -16 },
    ],
    sirtuin: [
      { key: 'SIRT1', fn: () => S.s1.position.toArray(), dy: -14 },
      { key: 'SIRT6', fn: () => S.s6.position.toArray(), dx: -30 },
      { key: 'SIRT7', fn: () => S.s7.position.toArray(), dx: 30 },
      { key: 'SIRT2', fn: () => S.s2.position.toArray(), dy: -14 },
      { key: 'SIRT3', fn: () => S.s3.position.toArray(), dy: -14 },
      { key: 'SIRT4', fn: () => S.s4.position.toArray(), dy: -14 },
      { key: 'SIRT5', fn: () => S.s5.position.toArray(), dy: -14 },
    ],
    combi: [
      { key: 'Ivermectin', fn: () => S.ivmCyto.position.toArray(), dy: -14 },
      { key: 'P-gp', fn: () => S.ivmMem.position.toArray(), dx: 30 },
      { key: 'KPNB1', fn: () => S.kpnb.position.toArray(), dx: -28 },
      { key: 'Fenbendazole', fn: () => S.fbzTub.position.toArray(), dy: -14 },
      { key: 'GLUT1/HK2', fn: () => S.fbzMem.position.toArray(), dx: -34 },
      { key: 'p53', fn: () => S.p53nuc.position.toArray(), dx: 28 },
    ],
  };
  const stage = els.stage;
  function makeChip(text, tour) {
    const d = document.createElement('div');
    d.className = 'ic-lbl' + (tour ? ' tour' : '');
    d.textContent = text;
    stage.appendChild(d);
    return d;
  }
  const baseChips = labelDefs.map((l) => ({ l, el: makeChip(T.orgs[l.oid].n, false) }));
  const adrenoChips = tourLabelDefs.adreno.map((l) => ({ l, el: makeChip(l.key, true) }));
  const sirtuinChips = tourLabelDefs.sirtuin.map((l) => ({ l, el: makeChip(l.key, true) }));
  const combiChips = tourLabelDefs.combi.map((l) => ({ l, el: makeChip(l.key, true) }));
  const PV = new THREE.Vector3();
  let showLabels = true, W = 800, H = 600;
  function placeChips(chips, active) {
    for (const { l, el } of chips) {
      let arr = null;
      try { arr = l.fn(); } catch (e) { arr = null; }
      if (!arr || !showLabels || !active) { el.style.display = 'none'; continue; }
      PV.set(arr[0], arr[1], arr[2]).project(camera);
      if (PV.z > 1 || PV.z < -1) { el.style.display = 'none'; continue; }
      el.style.display = 'block';
      el.style.left = ((PV.x * 0.5 + 0.5) * W + (l.dx || 0)) + 'px';
      el.style.top = ((-PV.y * 0.5 + 0.5) * H + (l.dy || 0)) + 'px';
    }
  }

  /* ---- UI state ---- */
  let mode = 'explore', stepIdx = 0, autoplay = false, rosPulse = false, lastAdvance = -99;
  let selected = null, pulseIds = new Set();
  const tween = { on: false, k: 0, camFrom: new THREE.Vector3(), camTo: new THREE.Vector3(), tgtFrom: new THREE.Vector3(), tgtTo: new THREE.Vector3() };
  function flyTo(cam, tgt) {
    tween.camFrom.copy(camera.position); tween.tgtFrom.copy(controls.target);
    tween.camTo.set(cam[0], cam[1], cam[2]); tween.tgtTo.set(tgt[0], tgt[1], tgt[2]);
    tween.k = 0; tween.on = true;
  }
  controls.addEventListener('start', () => { tween.on = false; });

  function legendHTML(items) {
    return (items || []).map(([c, s]) => `<span class="legend-dot" style="background:${c}"></span>${s}`).join(' &nbsp; ');
  }
  function vaultHTML(names) {
    return (names || []).map(vlink).join(' · ');
  }
  function renderPanel() {
    if (mode === 'explore') {
      const o = selected ? T.orgs[selected] : null;
      els.stepCount.textContent = '';
      els.stepTitle.textContent = o ? o.n : T.exploreTitle;
      els.stepBody.textContent = o ? o.d : T.exploreBody;
      els.stepMeta.textContent = o ? o.s : '';
      els.legend.innerHTML = '';
      els.vault.innerHTML = '';
      els.nav.style.display = 'none';
      els.orgList.style.display = 'flex';
      [...els.orgList.children].forEach((b) => b.classList.toggle('is-on', b.dataset.oid === selected));
      els.flag.textContent = T.overviewFlag;
    } else {
      const steps = T[TOURS[mode].steps];
      const st = steps[stepIdx];
      els.stepCount.textContent = T.stepOf(stepIdx + 1, steps.length);
      els.stepTitle.textContent = st.t;
      els.stepBody.textContent = st.b;
      els.stepMeta.textContent = '';
      els.legend.innerHTML = legendHTML(st.legend);
      els.vault.innerHTML = `<b>${T.vaultRef}:</b> ${vaultHTML(st.vault)}`;
      els.nav.style.display = 'flex';
      els.orgList.style.display = 'none';
      els.play.textContent = autoplay ? T.pause : T.play;
      els.flag.textContent = `${{ adreno: T.tabAdreno, sirtuin: T.tabSirtuin, combi: T.tabCombi }[mode]} · ${stepIdx + 1}/${steps.length}`;
    }
  }
  function applyStep() {
    const chore = CHORE[mode][stepIdx];
    pulseIds = new Set(chore.hi || []);
    setEmitters(chore.fl || []);
    sirtuinMarkers.forEach((m) => { m.visible = mode === 'sirtuin' && (chore.mk || []).includes(m); });
    adrenoMarkers.forEach((m) => { m.visible = mode === 'adreno' && (chore.mk || []).includes(m); });
    combiMarkers.forEach((m) => { m.visible = mode === 'combi' && (chore.mk || []).includes(m); });
    rosLight.intensity = chore.ros || 0;
    rosPulse = !!chore.ros;
    pigment.visible = !!chore.pigment;
    pigMat.opacity = chore.pigment ? 1 : 0;
    mitoMat.emissive.setHex(chore.ros ? 0x8a1408 : 0x5a2a00);
    mitoMat.emissiveIntensity = chore.ros ? 1.4 : 0.45;
    flyTo(chore.cam, chore.tgt);
    renderPanel();
    writeHash();
  }
  function setMode(m, keepStep) {
    mode = m; if (!keepStep) stepIdx = 0; autoplay = false; selected = null;
    pulseIds = new Set();
    if (m === 'explore') {
      setEmitters([]);
      sirtuinMarkers.forEach((mm) => { mm.visible = false; });
      adrenoMarkers.forEach((mm) => { mm.visible = false; });
      combiMarkers.forEach((mm) => { mm.visible = false; });
      rosLight.intensity = 0; pigment.visible = false;
      mitoMat.emissive.setHex(0x5a2a00); mitoMat.emissiveIntensity = 0.45;
      flyTo([0, 7, 27], [0, 0, 0]);
    } else applyStep();
    if (els.tabs) [...els.tabs.children].forEach((b) => {
      if (b.dataset && b.dataset.tour) b.classList.toggle('is-active', b.dataset.tour === m);
    });
    renderPanel();
    writeHash();
  }
  /* Deep links: #tour=<mode>&step=<n> — written on every change, read on load,
     so switching languages (or sharing the URL) restores the same section. */
  function writeHash() {
    try {
      const h = mode === 'explore' ? '#tour=explore' : `#tour=${mode}&step=${stepIdx + 1}`;
      history.replaceState(null, '', h);
    } catch (e) { /* non-browser / sandboxed contexts */ }
  }
  function readHash() {
    try {
      const h = location.hash || '';
      const tm = /tour=([a-z]+)/.exec(h);
      const sm = /step=(\d+)/.exec(h);
      if (tm && TOURS[tm[1]] && TOURS[tm[1]].steps) {
        const n = T[TOURS[tm[1]].steps].length;
        const s = sm ? parseInt(sm[1], 10) - 1 : 0;
        return { mode: tm[1], step: Math.min(Math.max(isNaN(s) ? 0 : s, 0), n - 1) };
      }
    } catch (e) { /* ignore */ }
    return null;
  }

  /* wire UI */
  els.orgList.innerHTML = '';
  for (const oid of Object.keys(T.orgs)) {
    const b = document.createElement('button');
    b.dataset.oid = oid; b.textContent = T.orgs[oid].n;
    b.onclick = () => { selected = oid; focusOrganelle(oid); renderPanel(); };
    els.orgList.appendChild(b);
  }
  if (els.tabs) [...els.tabs.children].forEach((b) => {
    if (b.dataset && b.dataset.tour) b.onclick = (e) => { if (e && e.preventDefault) e.preventDefault(); setMode(b.dataset.tour); };
  });
  els.prev.onclick = () => {
    const n = T[TOURS[mode].steps].length;
    stepIdx = (stepIdx - 1 + n) % n; autoplay = false; lastAdvance = clock.elapsedTime; applyStep();
  };
  els.next.onclick = () => {
    const n = T[TOURS[mode].steps].length;
    stepIdx = (stepIdx + 1) % n; autoplay = false; lastAdvance = clock.elapsedTime; applyStep();
  };
  els.play.onclick = () => { autoplay = !autoplay; lastAdvance = clock.elapsedTime; renderPanel(); };
  addEventListener('keydown', (e) => {
    if (mode === 'explore' || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight') els.next.onclick();
    if (e.key === 'ArrowLeft') els.prev.onclick();
  });

  const FOCUS = {
    membrane: [[0, 7, 27], [0, 0, 0]], nucleus: [[NUC.x + 1, NUC.y + 2, NUC.z + 10.5], NUC.toArray()],
    nucleolus: [[NUC.x, NUC.y + 1.5, NUC.z + 9], NUC.clone().add(V3(-0.6, 0.6, 0.7)).toArray()],
    mito: [[mitos[0].position.x + 3, mitos[0].position.y + 2, mitos[0].position.z + 9], mitos[0].position.toArray()],
    rer: [[NUC.x - 3, NUC.y + 4, NUC.z + 12], NUC.toArray()],
    ser: [[serBase.x + 2, serBase.y + 2, serBase.z + 10], serBase.toArray()],
    golgi: [[GOLGI.x + 2, GOLGI.y + 2, GOLGI.z + 10], GOLGI.toArray()],
    lysosome: [[LYSO.x + 2, LYSO.y + 2, LYSO.z + 9], LYSO.toArray()],
    peroxisome: [[4, 3, 19], [2, 0, 0]], ribosome: [[5, 2, 16], [2.5, 0, 2.5]],
    centrosome: [[CENT.x + 2, CENT.y + 2, CENT.z + 10], CENT.toArray()],
    npc: [[NUC.x + 2, NUC.y + 3, NUC.z + 10], NUC.toArray()],
  };
  function focusOrganelle(oid) {
    const f = FOCUS[oid];
    if (f) flyTo(f[0], f[1]);
    pulseIds = new Set([oid]);
    setTimeout(() => { if (mode === 'explore' && selected === oid) { pulseIds = new Set(); } }, 4000);
  }

  /* picking (click, not drag) */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let downAt = null;
  canvas.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerup', (e) => {
    if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return;
    const r = canvas.getBoundingClientRect();
    ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObjects(pickMeshes, false)[0];
    if (hit && hit.object.userData.oid && T.orgs[hit.object.userData.oid]) {
      selected = hit.object.userData.oid;
      if (mode !== 'explore') setMode('explore');
      focusOrganelle(selected); renderPanel();
    }
  });

  /* toolbar toggles */
  els.tglLabels.onclick = () => { showLabels = !showLabels; els.tglLabels.classList.toggle('is-on', showLabels); };
  els.tglLabels.classList.add('is-on');
  els.tglRotate.onclick = () => { controls.autoRotate = !controls.autoRotate; els.tglRotate.classList.toggle('is-on', controls.autoRotate); };
  const clipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 10);
  els.tglCut.onclick = () => {
    const on = els.tglCut.classList.toggle('is-on');
    clipPlane.constant = parseFloat(els.cutRange.value);
    renderer.clippingPlanes = on ? [clipPlane] : [];
    els.cutRange.disabled = !on;
  };
  els.cutRange.oninput = () => { clipPlane.constant = parseFloat(els.cutRange.value); };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  controls.autoRotate = !reduced;
  if (!controls.autoRotate) els.tglRotate.classList.remove('is-on');
  else els.tglRotate.classList.add('is-on');

  /* scale bar: world-units-per-pixel at target distance */
  function updateScaleBar() {
    const dist = camera.position.distanceTo(controls.target);
    const wpp = (2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / H;
    const target = 120 * wpp; // aim ~120px
    const opts = [0.5, 1, 2, 5, 10];
    let best = opts[0];
    for (const o of opts) if (Math.abs(o - target) < Math.abs(best - target)) best = o;
    els.scaleNum.textContent = best >= 1 ? `${best} µm` : `${best * 1000} nm`;
    els.scaleFill.style.width = `${Math.round(best / wpp)}px`;
  }

  /* resize */
  function size() {
    W = stage.clientWidth || 800; H = stage.clientHeight || 500;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
  }
  new ResizeObserver(size).observe(stage);
  addEventListener('resize', size); size();

  /* main loop */
  const clock = new THREE.Clock();
  const ease = (t) => t * t * (3 - 2 * t);
  const HL_OFF = new Map();
  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    if (tween.on) {
      tween.k = Math.min(1, tween.k + dt / 1.4);
      const e = ease(tween.k);
      camera.position.lerpVectors(tween.camFrom, tween.camTo, e);
      controls.target.lerpVectors(tween.tgtFrom, tween.tgtTo, e);
      if (tween.k >= 1) tween.on = false;
    }
    controls.update();
    // ambient life: vesicle shuttles, mito breathing, marker pulse
    for (const v of vesicles) {
      const s = (v.ph + time * v.sp) % 1;
      const go = s < 0.5 ? s * 2 : (1 - s) * 2;
      v.m.position.lerpVectors(v.a, v.b, go);
    }
    mitos.forEach((m, i) => { m.scale.setScalar(1 + 0.02 * Math.sin(time * 1.4 + i * 1.7)); });
    [...sirtuinMarkers, ...adrenoMarkers, ...combiMarkers].forEach((m, i) => {
      if (m.visible) m.scale.setScalar(1 + 0.25 * Math.sin(time * 3.5 + i));
    });
    // tour highlight pulse
    for (const [oid, mats] of Object.entries(HL)) {
      const on = pulseIds.has(oid);
      for (const mt of mats) {
        if (!HL_OFF.has(mt)) HL_OFF.set(mt, mt.emissiveIntensity);
        mt.emissiveIntensity = on ? HL_OFF.get(mt) + 0.9 + 0.5 * Math.sin(time * 4) : HL_OFF.get(mt);
      }
    }
    if (rosPulse) rosLight.intensity = 40 + 20 * Math.sin(time * 6);
    tickFlows(time);
    if (autoplay && mode !== 'explore' && time - lastAdvance > 9) {
      stepIdx = (stepIdx + 1) % T[TOURS[mode].steps].length;
      lastAdvance = time; applyStep();
    }
    renderer.render(scene, camera);
    placeChips(baseChips, true);
    placeChips(adrenoChips, mode === 'adreno');
    placeChips(sirtuinChips, mode === 'sirtuin');
    placeChips(combiChips, mode === 'combi');
    updateScaleBar();
  }
  const restored = readHash();
  if (restored) { mode = restored.mode; stepIdx = restored.step; }
  setMode(mode, true);
  tick();
}
