/* Twin-well lattice cell — apoptosis vs necrosis.
 * Original geometry: geodesic tensegrity membrane, phospholipid Fibonacci
 * bilayer, chromatin helices, cristae-fold mitochondria, microfluidic chip.
 * Not a reuse of the blob/capsule cell-death models.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const NODE = (n) =>
  `https://graph.johnnykuo.com/#node=${encodeURIComponent(n)}`;
const vlink = (n, label) =>
  `<a href="${NODE(n)}" target="_blank" rel="noopener">[[${label || n}]]</a>`;

const STR = {
  en: {
    flag: (i, n, title) => `Phase ${i}/${n} — ${title}`,
    meter: 'shared timeline',
    play: '▶ Play',
    pause: '⏸ Pause',
    labels: 'Labels',
    xray: 'X-ray view',
    both: 'Both models',
    apoWell: 'Apoptosis model',
    necWell: 'Necrosis model',
    hint: 'drag = orbit · scroll = zoom · click a structure · space = pause',
    clockApo: (h) => `apoptosis T+ ${h.toFixed(1)} h`,
    clockNec: (m) => `necrosis T+ ${m.toFixed(1)} min`,
    phaseOf: (a, b) => `Step ${a} of ${b}`,
    wellApo: 'apoptosis model',
    wellNec: 'necrosis model',
    chip: 'dual-model stage',
    phases: [
      {
        t: 'Baseline morphology',
        apoT: 'Intact, ATP-replete cell',
        necT: 'Intact, ATP-replete cell',
        apoM: 'PS restricted to inner leaflet',
        necM: 'Na+/K+-ATPase maintaining gradients',
        apo: 'The model cell shows an intact plasma membrane with phosphatidylserine confined to the cytosolic leaflet, dispersed chromatin, and polarized mitochondria with dense cristae sustaining ATP production.',
        nec: 'The contralateral model is morphologically identical: ATP-dependent transport maintains Na+/K+ gradients and cell volume. This is the final common state before the two trajectories diverge.',
        apo: 'The model cell shows an intact plasma membrane with phosphatidylserine confined to the cytosolic leaflet, dispersed chromatin, and polarized mitochondria with dense cristae sustaining ATP production.',
        nec: 'The contralateral model is morphologically identical: ATP-dependent transport maintains Na+/K+ gradients and cell volume. This is the final common state before the two trajectories diverge.',
        vault: ['Plasma Membrane', 'Mitochondria', 'NAD+', 'Adenosine Triphosphate'],
      },
      {
        t: 'Initiating insult',
        apoT: 'Death-receptor ligation / p53 activation',
        necT: 'Ischemia · chemical injury',
        apoM: 'DISC assembly; BH3-only induction',
        necM: 'OXPHOS arrest; ATP decline',
        apo: 'FasL or TRAIL trimerizes its receptor, recruiting FADD and pro-caspase-8 into the DISC with caspase-8 activation; genotoxic or oncogenic stress concurrently stabilizes p53, inducing BH3-only proteins (PUMA, NOXA). Both arms remain ATP-dependent.',
        nec: 'Oxygen or substrate deprivation — or direct toxin injury — arrests oxidative phosphorylation. Mitochondrial ATP output falls, and ATP-dependent transport begins to fail within minutes.',
        vault: ['FasL', 'TRAIL', 'Caspase-8', 'p53', 'Ischemia'],
      },
      {
        t: 'Commitment point',
        apoT: 'MOMP — point of no return',
        necT: 'Oncosis — transport failure',
        apoM: 'Bax/BAK oligomers · cytochrome c release',
        necM: 'Na+ and water influx · swelling',
        apo: 'Truncated BID couples caspase-8 to the mitochondrial pathway. Bax and BAK oligomerize in the outer mitochondrial membrane (MOMP), releasing cytochrome c and Smac/DIABLO to the cytosol. Plasma membrane integrity is preserved.',
        nec: 'Na+/K+-ATPase arrest collapses ionic gradients: Na+, Cl−, and water enter the cell (oncosis). This swelling is osmotic, distinct from actomyosin-driven apoptotic blebbing.',
        vault: ['BAX', 'BAK', 'Cytochrome c', 'Oncosis', 'Na+/K+-ATPase'],
      },
      {
        t: 'Execution signaling',
        apoT: 'Apoptosome assembly',
        necT: 'Ca2+ overload · mPTP opening',
        apoM: 'Apaf-1 heptamer · caspase-9 → caspase-3',
        necM: 'calpain activation · Δψm collapse',
        apo: 'Cytochrome c, Apaf-1, and dATP assemble the heptameric apoptosome, activating caspase-9 and the executioners caspase-3/7; CAD endonuclease, freed from ICAD, begins internucleosomal DNA cleavage. Smac neutralizes XIAP.',
        nec: 'Cytosolic Ca2+ rises (rendered as an indicator-channel signal), activating calpains that degrade cytoskeletal substrates including spectrin. Mitochondrial permeability transition pore opening collapses Δψm, unfolds cristae, and terminates ATP synthesis.',
        vault: ['Apoptosome', 'Apaf-1', 'Caspase-9', 'Caspase-3', 'Mitochondrial Permeability Transition Pore', 'Calpains'],
      },
      {
        t: 'Nuclear remodeling',
        apoT: 'Pyknosis · cell shrinkage',
        necT: 'Organelle swelling · karyolysis',
        apoM: 'chromatin condensation · volume loss',
        necM: 'chromatin disintegration · hydrolase leakage',
        apo: 'Caspase-3 signaling through ROCK1 drives cortical contraction and shrinkage. Chromatin condenses (pyknosis) with the nuclear envelope initially intact; DNA cleavage is internucleosomal, producing a ladder pattern on electrophoresis.',
        nec: 'Organelles swell while chromatin undergoes pyknosis, fragmentation (karyorrhexis), and dissolution (karyolysis). Lysosomal hydrolases leak into the cytosol. DNA degradation is nonspecific, producing a smear pattern.',
        vault: ['Caspase-3', 'DNA Damage', 'Lysosome'],
      },
      {
        t: 'Membrane outcome',
        apoT: 'PS externalization · blebbing',
        necT: 'Plasma membrane rupture',
        apoM: 'annexin V positivity · sealed bodies',
        necM: 'integrity loss · cytosol release',
        apo: 'Phospholipid scramblases externalize phosphatidylserine — detectable by annexin V binding and rendered as Annexin V–like outer-leaflet labeling. The membrane blebs and sheds sealed apoptotic bodies without cytosolic leakage.',
        nec: 'The membrane ruptures focally and then extensively, releasing cytosolic contents. In accidental necrosis this reflects mechanical failure, not a dedicated pore-forming program (cf. MLKL in necroptosis, gasdermins in pyroptosis).',
        vault: ['Apoptotic Bodies', 'Damage-Associated Molecular Patterns'],
      },
      {
        t: 'Clearance versus release',
        apoT: 'Efferocytosis',
        necT: 'DAMP release',
        apoM: 'macrophage engulfment · anti-inflammatory',
        necM: 'HMGB1 · ATP · mtDNA · uric acid',
        apo: 'Macrophage phosphatidylserine receptors mediate engulfment of apoptotic bodies (efferocytosis) with TGF-β and IL-10 release. Clearance is immunologically silent.',
        nec: 'HMGB1, ATP, mitochondrial DNA, and uric acid released from the ruptured cell act as DAMPs on pattern-recognition receptors (TLR2/4, P2X7, cGAS–STING), initiating sterile inflammation with ROS generation in neighboring cells.',
        vault: ['HMGB1', 'Inflammation', 'cGAS-STING Pathway'],
      },
      {
        t: 'Tissue outcome',
        apoT: 'Silent deletion',
        necT: 'Sterile inflammation · infarct',
        apoM: 'architecture preserved',
        necM: 'debris field · neutrophil recruitment',
        apo: 'No inflammatory infiltrate; tissue architecture is preserved. In vault models, female-derived cells preferentially engage this caspase-dependent arm under stress (XX neurons → apoptosome axis).',
        nec: 'Debris and DAMPs persist and recruit neutrophils; in vivo this corresponds to infarction with coagulative necrosis and autolysis. Male-derived cells preferentially engage PARP-1/AIF-dependent necrotic programs after ischemia. Apoptotic bodies that escape engulfment undergo secondary necrosis, converging on this endpoint.',
        vault: ['Apoptosis', 'Necrosis', 'Secondary Necrosis', 'Regulated Cell Death'],
      },
    ],
    info: {
      membraneA: ['Plasma membrane — apoptosis', 'PS externalization; blebbing; sealed fission', 'Contracts and sheds sealed, PS-positive bodies. Barrier function is maintained until engulfment.'],
      membraneN: ['Plasma membrane — necrosis', 'oncosis; focal-to-extensive rupture', 'Swells osmotically and ruptures. Cytosolic contents escape through the defects.'],
      chromatinA: ['Chromatin — pyknosis', 'CAD-mediated internucleosomal cleavage', 'Caspase-3 → CAD/ICAD. Condensation into a pyknotic mass with initially intact envelope; ladder pattern on electrophoresis.'],
      chromatinN: ['Chromatin — karyolysis', 'nonspecific degradation', 'Sequential pyknosis, karyorrhexis, and dissolution following swelling; smear pattern. Remnants leak with the cytosol.'],
      mitoA: ['Mitochondrion — MOMP', 'Bax/BAK permeabilization; organelle retained', 'Outer membrane permeabilized with cytochrome c release; the organelle remains structurally intact.'],
      mitoN: ['Mitochondrion — mPTP', 'Δψm collapse; swelling', 'Permeability transition unfolds cristae and abolishes ATP synthesis; the organelle swells and ruptures.'],
      cytc: ['Cytochrome c', 'mitochondrion → cytosol → apoptosome', 'Released exclusively after MOMP; with Apaf-1 and dATP it nucleates the heptameric apoptosome.'],
      apoptosome: ['Apoptosome', 'Apaf-1 heptamer', 'Sevenfold-symmetric scaffold that dimerizes and activates caspase-9.'],
      disc: ['DISC', 'Fas/TRAIL + FADD + caspase-8', 'Death-inducing signaling complex. c-FLIP isoforms modulate caspase-8 activation.'],
      body: ['Apoptotic body', 'membrane-sealed, PS-positive', 'Contains condensed chromatin within intact membrane; ligand for efferocytosis.'],
      mac: ['Macrophage', 'efferocytosis', 'Recognizes PS, internalizes apoptotic bodies, and secretes anti-inflammatory mediators.'],
      damp: ['DAMPs', 'HMGB1 / ATP / mtDNA / uric acid', 'Endogenous alarmins released on rupture; drive sterile inflammation in adjacent tissue.'],
      ps: ['Phosphatidylserine', 'inner-to-outer leaflet translocation', 'Outer-leaflet exposure (annexin V binding site) is the principal eat-me signal; restricted to apoptosis until secondary necrosis.'],
      ligand: ['Death ligand', 'FasL / TRAIL trimer', 'Extrinsic-pathway initiator engaging its cognate death receptor.'],
      ca: ['Cytosolic Ca2+ elevation', 'Fluo-4-like indicator channel', 'Rises as ATP-dependent extrusion fails; activates calpains and promotes mPTP opening. Rendered as a volume signal, not discrete sparks.'],
      atp: ['ATP', 'mitochondrial OXPHOS output', 'Replete in both models at baseline. Apoptosis consumes it as a cofactor; necrosis is precipitated by its loss.'],
    },
  },
  zh: {
    flag: (i, n, title) => `階段 ${i}/${n} — ${title}`,
    meter: '共用時間軸',
    play: '▶ 播放',
    pause: '⏸ 暫停',
    labels: '標籤',
    xray: 'X 光視圖',
    both: '雙模型',
    apoWell: '凋亡模型',
    necWell: '壞死模型',
    hint: '拖曳＝旋轉 · 滾輪＝縮放 · 點選結構 · 空白鍵＝暫停',
    clockApo: (h) => `凋亡 T+ ${h.toFixed(1)} 小時`,
    clockNec: (m) => `壞死 T+ ${m.toFixed(1)} 分`,
    phaseOf: (a, b) => `第 ${a}／${b} 步`,
    wellApo: '凋亡模型',
    wellNec: '壞死模型',
    chip: '雙模型對照台',
    phases: [
      {
        t: '基準形態',
        apoT: '完整、ATP 充足的細胞',
        necT: '完整、ATP 充足的細胞',
        apoM: 'PS 侷限於內葉',
        necM: '鈉鉀 ATP 酶維持梯度',
        apo: '模型細胞呈現完整的細胞膜，磷脂醯絲胺酸侷限於胞質側葉，染色質分散，粒線體具膜電位、嵴緻密，持續產生 ATP。',
        nec: '對側模型形態相同：依賴 ATP 的離子轉運維持鈉鉀梯度與細胞體積。此為兩條軌跡分歧前最後的共同狀態。',
        vault: ['Plasma Membrane', 'Mitochondria', 'NAD+', 'Adenosine Triphosphate'],
      },
      {
        t: '起始損傷',
        apoT: '死亡受體接合／p53 活化',
        necT: '缺血 · 化學性損傷',
        apoM: 'DISC 組裝；BH3-only 蛋白誘導',
        necM: '氧化磷酸化停滯；ATP 下降',
        apo: 'FasL 或 TRAIL 使受體三聚化，募集 FADD 與 pro-caspase-8 形成 DISC 並活化 caspase-8；基因毒性或致癌壓力同時穩定 p53，誘導 BH3-only 蛋白（PUMA、NOXA）。兩臂皆依賴 ATP。',
        nec: '缺氧或底物剝奪——或直接毒素損傷——使氧化磷酸化停滯。粒線體 ATP 輸出下降，依賴 ATP 的轉運於數分鐘內開始衰竭。',
        vault: ['FasL', 'TRAIL', 'Caspase-8', 'p53', 'Ischemia'],
      },
      {
        t: '不可逆點',
        apoT: 'MOMP——不歸點',
        necT: '腫脹性變性——轉運衰竭',
        apoM: 'Bax／BAK 寡聚 · 細胞色素 c 釋放',
        necM: '鈉水內流 · 腫脹',
        apo: '截短型 BID 將 caspase-8 偶聯至粒線體途徑。Bax 與 BAK 在粒線體外膜寡聚（MOMP），釋放細胞色素 c 與 Smac／DIABLO 至胞質。細胞膜完整性得以維持。',
        nec: '鈉鉀 ATP 酶停擺使離子梯度崩潰：鈉、氯與水進入細胞（腫脹性變性）。此腫脹屬滲透性質，與肌動球蛋白驅動的凋亡起泡不同。',
        vault: ['BAX', 'BAK', 'Cytochrome c', 'Oncosis', 'Na+/K+-ATPase'],
      },
      {
        t: '執行期訊號',
        apoT: '凋亡體組裝',
        necT: '鈣超載 · mPTP 開放',
        apoM: 'Apaf-1 七聚體 · caspase-9 → caspase-3',
        necM: 'calpain 活化 · 膜電位崩潰',
        apo: '細胞色素 c、Apaf-1 與 dATP 組裝七聚體凋亡體，活化 caspase-9 及執行者 caspase-3／7；脫離 ICAD 的 CAD 核酸內切酶開始核小體間 DNA 切斷。Smac 中和 XIAP。',
        nec: '胞質鈣升高（以指示劑通道訊號呈現），活化 calpain，水解包括血影蛋白在內的細胞骨架底物。粒線體通透轉換孔開放使膜電位崩潰、嵴展開，ATP 合成終止。',
        vault: ['Apoptosome', 'Apaf-1', 'Caspase-9', 'Caspase-3', 'Mitochondrial Permeability Transition Pore', 'Calpains'],
      },
      {
        t: '核重塑',
        apoT: '核固縮 · 細胞皺縮',
        necT: '胞器腫脹 · 核溶解',
        apoM: '染色質濃縮 · 體積縮小',
        necM: '染色質解體 · 水解酶外漏',
        apo: 'Caspase-3 經 ROCK1 驅動皮質收縮與皺縮。染色質濃縮（核固縮），核膜初期完整；DNA 切斷限於核小體間，電泳呈梯狀。',
        nec: '胞器腫脹，染色質經核固縮、碎裂（核碎裂）、溶解（核溶解）。溶酶體水解酶漏入胞質。DNA 降解無特異性，電泳呈塗抹狀。',
        vault: ['Caspase-3', 'DNA Damage', 'Lysosome'],
      },
      {
        t: '膜結局',
        apoT: 'PS 外翻 · 起泡',
        necT: '細胞膜破裂',
        apoM: 'annexin V 陽性 · 密封小體',
        necM: '完整性喪失 · 胞質釋放',
        apo: '磷脂翻轉酶將磷脂醯絲胺酸翻至外葉——可以 annexin V 結合檢測，以 Annexin V 樣外葉標記呈現。細胞膜起泡並脫落密封凋亡小體，無胞質外漏。',
        nec: '細胞膜先局灶、後廣泛破裂，釋放胞質內容物。意外性壞死的破裂屬機械性失效，而非專屬孔道程式（對照壞死性凋亡之 MLKL、焦亡之 gasdermin）。',
        vault: ['Apoptotic Bodies', 'Damage-Associated Molecular Patterns'],
      },
      {
        t: '清除 vs 釋放',
        apoT: '胞葬作用',
        necT: 'DAMP 釋放',
        apoM: '巨噬細胞吞噬 · 抗發炎',
        necM: 'HMGB1 · ATP · mtDNA · 尿酸',
        apo: '巨噬細胞磷脂醯絲胺酸受體介導凋亡小體吞噬（胞葬作用），並釋放 TGF-β 與 IL-10。清除過程無免疫原性。',
        nec: '破裂細胞釋出的 HMGB1、ATP、粒線體 DNA 與尿酸作為 DAMP，作用於模式識別受體（TLR2／4、P2X7、cGAS–STING），啟動無菌性炎症，鄰近細胞產生活性氧。',
        vault: ['HMGB1', 'Inflammation', 'cGAS-STING Pathway'],
      },
      {
        t: '組織結局',
        apoT: '沉默性清除',
        necT: '無菌性炎症 · 梗塞',
        apoM: '結構得以保存',
        necM: '碎片場 · 中性粒細胞募集',
        apo: '無炎性浸潤，組織結構得以保存。知識庫模型中，雌性來源細胞在壓力下偏好此 caspase 依賴臂（XX 神經元 → 凋亡體軸）。',
        nec: '碎片與 DAMP 滯留並募集中性粒細胞；在體內對應梗塞伴凝固性壞死與自溶。雄性來源細胞在缺血後偏好 PARP-1／AIF 依賴的壞死程序。未被吞噬的凋亡小體發生繼發性壞死，匯入此終點。',
        vault: ['Apoptosis', 'Necrosis', 'Secondary Necrosis', 'Regulated Cell Death'],
      },
    ],
    info: {
      membraneA: ['細胞膜 — 凋亡', 'PS 外翻；起泡；密封脫落', '收縮並脫落密封、PS 陽性小體。屏障功能維持至被吞噬。'],
      membraneN: ['細胞膜 — 壞死', '腫脹性變性；局灶至廣泛破裂', '滲透性腫脹後破裂。胞質內容物經破口外逸。'],
      chromatinA: ['染色質 — 核固縮', 'CAD 介導的核小體間切斷', 'Caspase-3 → CAD／ICAD。濃縮為核固縮團，核膜初期完整；電泳呈梯狀。'],
      chromatinN: ['染色質 — 核溶解', '非特異性降解', '腫脹後依次發生核固縮、核碎裂與溶解；電泳呈塗抹狀。殘餘隨胞質外漏。'],
      mitoA: ['粒線體 — MOMP', 'Bax／BAK 通透化；胞器保留', '外膜通透並釋放細胞色素 c；胞器結構完整。'],
      mitoN: ['粒線體 — mPTP', '膜電位崩潰；腫脹', '通透轉換使嵴展開並終止 ATP 合成；胞器腫脹破裂。'],
      cytc: ['細胞色素 c', '粒線體 → 胞質 → 凋亡體', '僅於 MOMP 後釋放；與 Apaf-1、dATP 成核七聚體凋亡體。'],
      apoptosome: ['凋亡體', 'Apaf-1 七聚體', '七重對稱支架，使 caspase-9 二聚並活化。'],
      disc: ['DISC', 'Fas／TRAIL＋FADD＋caspase-8', '死亡誘導訊號複合體。c-FLIP 亞型調節 caspase-8 活化。'],
      body: ['凋亡小體', '膜密封、PS 陽性', '膜內含濃縮染色質；為胞葬作用配體。'],
      mac: ['巨噬細胞', '胞葬作用', '識別 PS，內化凋亡小體，分泌抗發炎介質。'],
      damp: ['DAMP', 'HMGB1／ATP／mtDNA／尿酸', '破裂釋出的內源性警報素；驅動鄰近組織無菌性炎症。'],
      ps: ['磷脂醯絲胺酸', '內葉 → 外葉轉位', '外葉暴露（annexin V 結合位）為主要的「吃我」訊號；繼發性壞死前僅見於凋亡。'],
      ligand: ['死亡配體', 'FasL／TRAIL 三聚體', '外在途徑起始因子，接合其同源死亡受體。'],
      ca: ['胞質鈣升高', 'Fluo-4 樣指示劑通道', '依賴 ATP 的鈣外排失效後升高；活化 calpain 並促進 mPTP 開放。以體積訊號而非離散火花呈現。'],
      atp: ['ATP', '粒線體氧化磷酸化輸出', '基準狀態兩模型皆充足。凋亡以其為輔因子而消耗；壞死由其耗竭所觸發。'],
    },
  },
};

const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function fibonacciSphere(n, r) {
  const pts = [];
  const g = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (n === 1 ? 0 : (i / (n - 1)) * 2);
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const th = g * i;
    pts.push(new THREE.Vector3(Math.cos(th) * rad * r, y * r, Math.sin(th) * rad * r));
  }
  return pts;
}

function helixPoints(n, r, tight) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const lat = (t - 0.5) * Math.PI * 1.85;
    const lon = t * Math.PI * (10 + 8 * tight);
    const rr = r * (0.42 + 0.5 * Math.cos(lat * 0.35));
    pts.push(new THREE.Vector3(
      rr * Math.cos(lon) * Math.cos(lat),
      r * Math.sin(lat) * 0.72,
      rr * Math.sin(lon) * Math.cos(lat),
    ));
  }
  return pts;
}

function makeLabelSprite(text, tint) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  const w = Math.min(240, 20 + text.length * 11);
  g.fillStyle = 'rgba(20,18,16,0.82)';
  g.beginPath(); g.roundRect(128 - w / 2, 12, w, 36, 18); g.fill();
  g.strokeStyle = tint || 'rgba(255,255,255,0.35)';
  g.lineWidth = 2; g.stroke();
  g.fillStyle = '#f5efe2';
  g.font = '600 20px system-ui,sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 30);
  const tex = new THREE.CanvasTexture(c);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  s.scale.set(1.9, 0.48, 1);
  s.renderOrder = 20;
  return s;
}

function pickable(obj, key) {
  obj.userData.pick = key;
  obj.traverse((ch) => { ch.userData.pick = key; });
  return obj;
}

function makeCristaMito(rand, matOuter, matFold) {
  const g = new THREE.Group();
  const outer = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12), matOuter);
  outer.scale.set(0.52, 0.26, 0.26);
  outer.userData.isOuter = true;
  g.add(outer);
  for (let i = 0; i < 5; i++) {
    const pts = [];
    for (let t = 0; t <= 18; t++) {
      const x = -0.38 + (t / 18) * 0.76;
      const z = 0.07 * Math.sin(t * 0.85 + i * 0.9);
      pts.push(new THREE.Vector3(x, (i - 2) * 0.055, z));
    }
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.016, 5, false),
      matFold,
    );
    g.add(tube);
  }
  g.rotation.set(rand() * 6, rand() * 6, rand() * 6);
  g.userData.outer = outer;
  g.userData.baseScale = new THREE.Vector3().copy(g.scale);
  return g;
}

function makeApoptosome(mat) {
  const g = new THREE.Group();
  const spoke = new THREE.IcosahedronGeometry(0.07, 0);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const m = new THREE.Mesh(spoke, mat);
    m.position.set(Math.cos(a) * 0.16, 0, Math.sin(a) * 0.16);
    g.add(m);
  }
  const hub = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.012, 6, 18), mat);
  hub.rotation.x = Math.PI / 2;
  g.add(hub);
  return g;
}

function makeMacrophage(mat, edgeMat) {
  const g = new THREE.Group();
  const lobes = [
    [0, 0, 0, 0.55],
    [0.42, 0.08, 0.12, 0.32],
    [-0.35, -0.05, 0.22, 0.28],
    [0.1, 0.28, -0.3, 0.24],
  ];
  lobes.forEach(([x, y, z, r]) => {
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), mat);
    mesh.position.set(x, y, z);
    g.add(mesh);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(r, 1)),
      edgeMat,
    );
    wire.position.copy(mesh.position);
    g.add(wire);
  });
  return g;
}

export function boot({ lang = 'en' } = {}) {
  const S = STR[lang] || STR.en;
  const LO = matchMedia('(max-width: 700px)').matches;
  const LIPID = LO ? 140 : 260;
  const CYTO = LO ? 90 : 160;
  const DAMP_N = LO ? 80 : 140;

  const canvas = document.getElementById('an-canvas');
  const stage = document.getElementById('an-stage');
  const flagEl = document.getElementById('an-flag');
  const meterFill = document.getElementById('an-meterfill');
  const meterLabel = document.getElementById('an-meterlabel');
  const meterTrack = document.getElementById('an-metertrack');
  const clockApo = document.getElementById('an-clock-apo');
  const clockNec = document.getElementById('an-clock-nec');
  const tip = document.getElementById('an-tip');
  const playBtn = document.getElementById('an-play');
  const labelsBtn = document.getElementById('an-labels');
  const xrayBtn = document.getElementById('an-xray');
  const phaseBtns = document.getElementById('an-phases');

  document.getElementById('an-play').textContent = S.pause;
  labelsBtn.textContent = S.labels;
  xrayBtn.textContent = S.xray;
  document.getElementById('an-focus-both').textContent = S.both;
  document.getElementById('an-focus-apo').textContent = S.apoWell;
  document.getElementById('an-focus-nec').textContent = S.necWell;
  document.querySelector('.an-toolbar .hint').textContent = S.hint;
  meterLabel.textContent = S.meter;

  S.phases.forEach((p, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = `${i + 1}`;
    b.title = p.t;
    b.addEventListener('click', () => seek(i / S.phases.length + 0.01));
    phaseBtns.appendChild(b);
  });

  const qs = new URLSearchParams(location.search);
  if (qs.has('embed')) document.body.classList.add('is-embed');
  const embedA = document.getElementById('embedgo');
  if (embedA) {
    embedA.href = location.pathname + '?embed=1';
    embedA.addEventListener('click', (e) => {
      e.preventDefault();
      const url = location.pathname + '?embed=1';
      try { history.pushState({ embed: true }, '', url); } catch { location.href = url; return; }
      document.body.classList.add('is-embed');
      fit();
    });
  }

  let running = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  let showLabels = true;
  let xray = false;
  let t0 = performance.now();
  let acc = 0;
  const DUR = 48;
  let u = 0;
  let focus = 'both';

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = null;
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 80);
  const CAM = {
    both: { pos: new THREE.Vector3(0, 7.4, 16.5), tgt: new THREE.Vector3(0, 1.1, 0) },
    apo: { pos: new THREE.Vector3(-5.4, 3.6, 8.2), tgt: new THREE.Vector3(-5.2, 1.35, 0) },
    nec: { pos: new THREE.Vector3(5.4, 3.6, 8.2), tgt: new THREE.Vector3(5.2, 1.35, 0) },
  };
  camera.position.copy(CAM.both.pos);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 5;
  controls.maxDistance = 32;
  controls.target.copy(CAM.both.tgt);
  let camLock = false;
  controls.addEventListener('start', () => { camLock = true; });

  const amb = new THREE.AmbientLight(0xfff4e6, 0.7);
  scene.add(amb);
  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(6, 12, 8); scene.add(key);
  const fill = new THREE.DirectionalLight(0xb7d4ff, 0.45);
  fill.position.set(-8, 4, -6); scene.add(fill);
  const apoLamp = new THREE.PointLight(0x7fd4a8, 1.1, 10);
  apoLamp.position.set(-5.2, 2.4, 0); scene.add(apoLamp);
  const necLamp = new THREE.PointLight(0xff6a5a, 0.35, 10);
  necLamp.position.set(5.2, 2.4, 0); scene.add(necLamp);

  function applyTheme() {
    const dark = window.AppTheme?.isDark?.() === true;
    amb.intensity = dark ? 0.45 : 0.7;
    key.intensity = dark ? 0.85 : 1.15;
    plate.material.color.set(dark ? 0x1c2430 : 0xd4cec0);
    wellMat.color.set(dark ? 0x243044 : 0xc9c2b3);
  }

  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(22.5, 0.38, 12.2),
    new THREE.MeshStandardMaterial({ color: 0xd4cec0, roughness: 0.32, metalness: 0.12 }),
  );
  plate.position.y = -0.05;
  scene.add(plate);

  const wellMat = new THREE.MeshStandardMaterial({ color: 0xc9c2b3, roughness: 0.4, metalness: 0.08 });
  const ringGeo = new THREE.TorusGeometry(3.55, 0.08, 10, 48);
  [-5.2, 5.2].forEach((x) => {
    const ring = new THREE.Mesh(ringGeo, wellMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, 0.22, 0);
    scene.add(ring);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(3.5, 48), wellMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(x, 0.16, 0);
    scene.add(floor);
  });

  const septum = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 2.2, 11.4),
    new THREE.MeshStandardMaterial({ color: 0x9aa7b2, transparent: true, opacity: 0.28, roughness: 0.1 }),
  );
  septum.position.set(0, 1.2, 0);
  scene.add(septum);

  const ecm = new THREE.Group();
  const ecmMat = new THREE.LineBasicMaterial({ color: 0x8a7d68, transparent: true, opacity: 0.35 });
  const er = rng(7);
  for (let i = 0; i < 40; i++) {
    const pts = [];
    let p = new THREE.Vector3((er() - 0.5) * 20, 0.25 + er() * 0.15, (er() - 0.5) * 11);
    pts.push(p.clone());
    const dir = new THREE.Vector3(er() - 0.5, 0.02, er() - 0.5).normalize();
    for (let k = 0; k < 8; k++) {
      dir.x += (er() - 0.5) * 0.4; dir.z += (er() - 0.5) * 0.4; dir.normalize();
      p = p.clone().add(dir.clone().multiplyScalar(0.55));
      pts.push(p);
    }
    ecm.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), ecmMat));
  }
  scene.add(ecm);

  const lipidGeo = new THREE.ConeGeometry(0.045, 0.09, 5);
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();

  function makeCell(kind, origin, seed) {
    const rand = rng(seed);
    const root = new THREE.Group();
    root.position.copy(origin);
    scene.add(root);

    const isApo = kind === 'apo';
    const shellColor = isApo ? 0x6fbfa0 : 0xc47a6a;
    const ico = new THREE.IcosahedronGeometry(1.55, 2);
    const rest = Float32Array.from(ico.attributes.position.array);
    const skin = new THREE.Mesh(
      ico,
      new THREE.MeshStandardMaterial({
        color: shellColor, roughness: 0.45, metalness: 0.04,
        transparent: true, opacity: 0.16, side: THREE.DoubleSide,
      }),
    );
    const wire = new THREE.Mesh(
      ico,
      new THREE.MeshBasicMaterial({ color: shellColor, wireframe: true, transparent: true, opacity: 0.7 }),
    );
    root.add(skin, wire);

    const actin = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.42, 1)),
      new THREE.LineBasicMaterial({ color: isApo ? 0x3d7a62 : 0x8a4038, transparent: true, opacity: 0.55 }),
    );
    root.add(actin);

    const outerPts = fibonacciSphere(LIPID, 1.62);
    const innerPts = fibonacciSphere(LIPID, 1.48);
    const lipids = new THREE.InstancedMesh(
      lipidGeo,
      new THREE.MeshStandardMaterial({ color: 0xe8d5b5, roughness: 0.4 }),
      LIPID * 2,
    );
    lipids.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    col.set(0xe8d5b5);
    for (let i = 0; i < LIPID * 2; i++) {
      dummy.position.set(0, 0, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      lipids.setMatrixAt(i, dummy.matrix);
      lipids.setColorAt(i, col);
    }
    root.add(lipids);

    const nucEnv = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.62, 2),
      new THREE.MeshStandardMaterial({
        color: 0x8a7bb8, transparent: true, opacity: 0.18, roughness: 0.35, side: THREE.DoubleSide,
      }),
    );
    const nucWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.62, 1)),
      new THREE.LineBasicMaterial({ color: 0xb9a6e0, transparent: true, opacity: 0.8 }),
    );
    const nuc = new THREE.Group();
    nuc.add(nucEnv, nucWire);
    root.add(nuc);

    const strands = [];
    for (let s = 0; s < 3; s++) {
      const pts = helixPoints(80, 0.48, 0.7 + s * 0.18).map((p) => {
        const q = p.clone();
        q.applyAxisAngle(new THREE.Vector3(0, 1, 0), s * 0.9);
        return q;
      });
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      geo.userData.rest = pts.map((p) => p.clone());
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
        color: isApo ? 0xcbb6ff : 0xd4b8ff, transparent: true, opacity: 0.95,
      }));
      nuc.add(line);
      strands.push({ geo, line });
    }

    const mitoMat = new THREE.MeshStandardMaterial({
      color: 0xe09a4d, roughness: 0.35, emissive: 0x5a2a00, emissiveIntensity: 0.45,
    });
    const foldMat = new THREE.MeshStandardMaterial({ color: 0xffc878, roughness: 0.4, emissive: 0xff8a3d, emissiveIntensity: 0.25 });
    const mitos = [];
    for (let i = 0; i < (LO ? 5 : 7); i++) {
      const m = makeCristaMito(rand, mitoMat.clone(), foldMat.clone());
      const p = fibonacciSphere(7, 0.95)[i];
      m.position.copy(p);
      m.userData.home = p.clone();
      root.add(m);
      mitos.push(m);
    }

    const cytoGeo = new THREE.SphereGeometry(0.035, 6, 6);
    const cyto = new THREE.InstancedMesh(
      cytoGeo,
      new THREE.MeshStandardMaterial({ color: isApo ? 0xffe14d : 0xd9d2c4, roughness: 0.3, emissive: isApo ? 0xffc107 : 0x6a625a, emissiveIntensity: 0.6 }),
      CYTO,
    );
    root.add(cyto);
    const cytoHome = fibonacciSphere(CYTO, 1.05);

    const wheels = [];
    if (isApo) {
      const wmat = new THREE.MeshStandardMaterial({ color: 0xf0d878, emissive: 0xc9a227, emissiveIntensity: 0.5 });
      for (let i = 0; i < 3; i++) {
        const w = makeApoptosome(wmat);
        w.position.set((i - 1) * 0.45, 0.15, 0.35);
        w.scale.setScalar(0);
        root.add(w);
        wheels.push(w);
      }
    }

    const disc = new THREE.Group();
    if (isApo) {
      const dmat = new THREE.MeshStandardMaterial({ color: 0x51d88a, emissive: 0x1a8a4a, emissiveIntensity: 0.5 });
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const bead = new THREE.Mesh(new THREE.IcosahedronGeometry(0.08, 0), dmat);
        bead.position.set(Math.cos(a) * 0.14, Math.sin(a) * 0.14, 0);
        disc.add(bead);
      }
      disc.position.set(0, 0.2, 1.55);
      disc.scale.setScalar(0);
      root.add(disc);
    }

    const ligand = new THREE.Group();
    if (isApo) {
      const lmat = new THREE.MeshStandardMaterial({ color: 0x7fd4a8, emissive: 0x2d8a5a, emissiveIntensity: 0.4 });
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const bead = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), lmat);
        bead.position.set(Math.cos(a) * 0.12, 0.08, Math.sin(a) * 0.12);
        ligand.add(bead);
      }
      ligand.position.set(0.15, 0.4, 2.4);
      root.add(ligand);
    }

    const bodies = [];
    if (isApo) {
      for (let i = 0; i < 5; i++) {
        const b = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.28, 1),
          new THREE.MeshStandardMaterial({ color: 0xc9e8d4, transparent: true, opacity: 0.35, roughness: 0.4 }),
        );
        const bw = new THREE.LineSegments(
          new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.28, 1)),
          new THREE.LineBasicMaterial({ color: 0x7fd4a8, transparent: true, opacity: 0.85 }),
        );
        const grp = new THREE.Group();
        grp.add(b, bw);
        grp.scale.setScalar(0);
        const dir = fibonacciSphere(5, 1)[i];
        grp.userData.dir = dir;
        root.add(grp);
        bodies.push(grp);
      }
    }

    const mac = isApo ? makeMacrophage(
      new THREE.MeshStandardMaterial({ color: 0x6a8aaa, transparent: true, opacity: 0.35, roughness: 0.5 }),
      new THREE.LineBasicMaterial({ color: 0x9ec0dc, transparent: true, opacity: 0.8 }),
    ) : null;
    if (mac) {
      mac.position.set(-2.6, 0.7, 2.2);
      mac.scale.setScalar(0);
      root.add(mac);
    }

    const damp = new THREE.InstancedMesh(
      new THREE.OctahedronGeometry(0.05, 0),
      new THREE.MeshStandardMaterial({ color: 0xff5a5e, roughness: 0.3, emissive: 0x8a1018, emissiveIntensity: 0.5, transparent: true }),
      DAMP_N,
    );
    root.add(damp);
    const dampDir = fibonacciSphere(DAMP_N, 1);

    // Cytosolic Ca2+ as a Fluo-4-like indicator volume, not discrete sparks.
    const caShell = new THREE.Mesh(
      new THREE.SphereGeometry(1.12, 24, 16),
      new THREE.MeshBasicMaterial({ color: 0x2bff7a, transparent: true, opacity: 0, depthWrite: false }),
    );
    root.add(caShell);

    pickable(skin, isApo ? 'membraneA' : 'membraneN');
    pickable(nucEnv, isApo ? 'chromatinA' : 'chromatinN');
    mitos.forEach((m) => pickable(m, isApo ? 'mitoA' : 'mitoN'));
    if (isApo) {
      pickable(disc, 'disc');
      pickable(ligand, 'ligand');
      wheels.forEach((w) => pickable(w, 'apoptosome'));
      bodies.forEach((b) => pickable(b, 'body'));
      if (mac) pickable(mac, 'mac');
      pickable(cyto, 'cytc');
    } else {
      pickable(damp, 'damp');
      pickable(caShell, 'ca');
    }

    const lobes = [
      { dir: new THREE.Vector3(1, 0.2, 0.3).normalize(), k: 4.2, amp: 0.55 },
      { dir: new THREE.Vector3(-0.6, 0.5, 0.4).normalize(), k: 5.1, amp: 0.42 },
      { dir: new THREE.Vector3(0.1, -0.7, 0.5).normalize(), k: 4.6, amp: 0.38 },
      { dir: new THREE.Vector3(-0.2, 0.1, -1).normalize(), k: 5.4, amp: 0.48 },
    ];

    return {
      kind, root, skin, ico, rest, wire, actin, lipids, outerPts, innerPts,
      nuc, strands, mitos, cyto, cytoHome, wheels, disc, ligand, bodies, mac,
      damp, dampDir, caShell, lobes, isApo,
    };
  }

  const apo = makeCell('apo', new THREE.Vector3(-5.2, 1.55, 0), 11);
  const nec = makeCell('nec', new THREE.Vector3(5.2, 1.55, 0), 23);

  const neighbors = [];
  [[-8.6, 0.9, -2.4], [-8.2, 0.85, 2.6], [8.6, 0.9, -2.4], [8.3, 0.85, 2.5]].forEach((p, i) => {
    const g = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.7, 1)),
      new THREE.LineBasicMaterial({ color: 0x8a8174, transparent: true, opacity: 0.45 }),
    );
    g.position.set(p[0], p[1], p[2]);
    scene.add(g);
    neighbors.push({ mesh: g, necSide: i >= 2 });
  });

  const lblApo = makeLabelSprite(S.wellApo, '#7fd4a8');
  lblApo.position.set(-5.2, 3.55, 0); scene.add(lblApo);
  const lblNec = makeLabelSprite(S.wellNec, '#ff8a7a');
  lblNec.position.set(5.2, 3.55, 0); scene.add(lblNec);
  const lblChip = makeLabelSprite(S.chip, '#b9ac93');
  lblChip.position.set(0, 0.55, 5.6); scene.add(lblChip);
  const labelSprites = [lblApo, lblNec, lblChip];

  applyTheme();
  addEventListener('storage', applyTheme);

  function deformShell(cell, scale, blebAmt, tearAmt, psAmt) {
    const pos = cell.ico.attributes.position;
    const v = new THREE.Vector3();
    const nrm = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromArray(cell.rest, i * 3);
      nrm.copy(v).normalize();
      let extra = 0;
      if (blebAmt > 0.01) {
        cell.lobes.forEach((l) => {
          const d = 1 - nrm.dot(l.dir);
          extra += l.amp * blebAmt * Math.exp(-l.k * d * d);
        });
      }
      if (tearAmt > 0) {
        extra += tearAmt * 0.22 * Math.sin(v.x * 9.1 + v.y * 7.3);
        if ((Math.abs(v.x * 13 + v.z * 9) % 1) < tearAmt * 0.18) extra -= 0.55 * tearAmt;
      }
      v.multiplyScalar(scale * (1 + extra));
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    pos.needsUpdate = true;
    cell.ico.computeVertexNormals();

    // Annexin V–FITC-like channel: outer leaflet turns green on PS externalization.
    const psGreen = new THREE.Color().set(0xe8d5b5).lerp(new THREE.Color(0x2ed573), psAmt);
    const torn = new THREE.Color(0x6a2018);
    for (let i = 0; i < LIPID; i++) {
      const p = cell.outerPts[i].clone().multiplyScalar(scale);
      if (blebAmt > 0.01) {
        nrm.copy(p).normalize();
        cell.lobes.forEach((l) => {
          const d = 1 - nrm.dot(l.dir);
          p.addScaledVector(nrm, l.amp * blebAmt * Math.exp(-l.k * d * d));
        });
      }
      dummy.position.copy(p);
      dummy.lookAt(p.clone().add(p.clone().normalize()));
      const hide = tearAmt > 0.4 && (i % 7 < tearAmt * 4);
      dummy.scale.setScalar(hide ? 0 : 1);
      dummy.updateMatrix();
      cell.lipids.setMatrixAt(i, dummy.matrix);
      col.copy(hide ? torn : psGreen);
      cell.lipids.setColorAt(i, col);

      const q = cell.innerPts[i].clone().multiplyScalar(scale);
      dummy.position.copy(q);
      dummy.lookAt(new THREE.Vector3(0, 0, 0));
      dummy.scale.setScalar(hide ? 0 : 0.85);
      dummy.updateMatrix();
      cell.lipids.setMatrixAt(LIPID + i, dummy.matrix);
      col.set(0xcbb89a);
      cell.lipids.setColorAt(LIPID + i, col);
    }
    cell.lipids.instanceMatrix.needsUpdate = true;
    if (cell.lipids.instanceColor) cell.lipids.instanceColor.needsUpdate = true;
  }

  function updateCell(cell, uu) {
    const apoS = cell.isApo;
    const shrink = apoS ? 1 - 0.28 * smooth(0.38, 0.72, uu) : 1;
    const swell = apoS ? 1 : 1 + 0.58 * smooth(0.2, 0.58, uu);
    const scale = shrink * swell;
    const bleb = apoS ? smooth(0.5, 0.68, uu) * (1 - smooth(0.72, 0.88, uu)) : 0;
    const tear = apoS ? 0 : smooth(0.52, 0.72, uu);
    const psExt = apoS ? smooth(0.48, 0.62, uu) : 0;
    deformShell(cell, scale, bleb, tear, psExt);

    cell.skin.material.opacity = xray ? 0.04 : (apoS ? 0.16 : lerp(0.16, 0.08, tear));
    cell.wire.material.opacity = xray ? 0.25 : 0.7;
    cell.actin.scale.setScalar(scale);
    cell.actin.material.opacity = xray ? 0.2 : (apoS ? 0.55 : lerp(0.55, 0.15, tear));

    const pyk = apoS ? lerp(1, 0.62, smooth(0.4, 0.7, uu)) : lerp(1, 1.35, smooth(0.4, 0.75, uu));
    cell.nuc.scale.setScalar(pyk);
    cell.strands.forEach(({ geo, line }, si) => {
      const rest = geo.userData.rest;
      const arr = geo.attributes.position.array;
      const dissolve = apoS ? 0 : smooth(0.45, 0.85, uu);
      for (let i = 0; i < rest.length; i++) {
        const p = rest[i];
        arr[i * 3] = p.x * (1 + dissolve * 0.8 * Math.sin(i * 0.3 + uu * 8));
        arr[i * 3 + 1] = p.y * (1 - dissolve * 0.5);
        arr[i * 3 + 2] = p.z * (1 + dissolve * 0.8 * Math.cos(i * 0.21 + uu * 7));
      }
      geo.attributes.position.needsUpdate = true;
      line.material.opacity = apoS ? 0.95 : lerp(0.95, 0.08, dissolve);
    });

    cell.mitos.forEach((m, i) => {
      const home = m.userData.home;
      if (apoS) {
        const momp = smooth(0.22, 0.4, uu);
        m.position.copy(home).multiplyScalar(scale);
        m.scale.setScalar(lerp(1, 0.92, momp));
        m.traverse((ch) => {
          if (ch.material && ch.material.emissiveIntensity != null) {
            ch.material.emissiveIntensity = lerp(0.45, 0.15, momp);
          }
        });
      } else {
        const mptpSwell = smooth(0.32, 0.6, uu);
        m.position.copy(home).multiplyScalar(scale * lerp(1, 1.15, mptpSwell));
        m.scale.setScalar(lerp(1, 1.55, mptpSwell));
        m.traverse((ch) => {
          if (ch.material && ch.material.emissiveIntensity != null) {
            ch.material.emissiveIntensity = lerp(0.45, 0.02, mptpSwell);
            if (ch.material.color && ch.userData.isOuter) ch.material.color.set(0x8a5a38);
          }
        });
        m.visible = tear < 0.95;
      }
    });

    const cArr = cell.cyto;
    for (let i = 0; i < CYTO; i++) {
      dummy.position.copy(cell.cytoHome[i]);
      if (apoS) {
        const rel = smooth(0.28, 0.5, uu);
        dummy.position.lerp(new THREE.Vector3(
          (i % 5 - 2) * 0.12,
          0.05,
          0.2 + (i % 3) * 0.08,
        ), rel * 0.85);
        dummy.scale.setScalar(rel > 0.05 ? 1 : 0);
      } else {
        const leak = smooth(0.55, 0.8, uu);
        dummy.position.multiplyScalar(lerp(1, 2.8, leak));
        dummy.scale.setScalar(leak > 0.05 ? 1 : 0);
      }
      dummy.updateMatrix();
      cArr.setMatrixAt(i, dummy.matrix);
    }
    cArr.instanceMatrix.needsUpdate = true;
    cArr.material.opacity = apoS ? smooth(0.26, 0.4, uu) : smooth(0.55, 0.7, uu);

    if (apoS) {
      const dock = smooth(0.08, 0.2, uu);
      cell.ligand.position.set(0.15, 0.4, lerp(2.6, 1.7, dock));
      cell.ligand.visible = uu < 0.45;
      const d = smooth(0.14, 0.28, uu) * (1 - smooth(0.42, 0.55, uu));
      cell.disc.scale.setScalar(d);
      cell.wheels.forEach((w, i) => {
        const on = smooth(0.34 + i * 0.03, 0.48, uu);
        w.scale.setScalar(on);
        w.rotation.y = uu * 6 + i;
        w.visible = uu < 0.85;
      });
      cell.bodies.forEach((b, i) => {
        const pinch = smooth(0.62 + i * 0.015, 0.78, uu);
        const engulf = smooth(0.82, 0.96, uu);
        b.scale.setScalar(Math.max(0, pinch * (1 - engulf)));
        const dir = b.userData.dir;
        b.position.copy(dir).multiplyScalar(lerp(1.1, 2.1, pinch));
      });
      if (cell.mac) {
        const arrive = smooth(0.7, 0.84, uu);
        cell.mac.scale.setScalar(arrive);
        cell.mac.position.set(lerp(-2.6, -0.2, arrive), 0.55, lerp(2.2, 0.4, arrive));
        cell.mac.rotation.y = uu * 3;
      }
      cell.damp.visible = false;
      cell.caShell.material.opacity = 0;
    } else {
      cell.damp.visible = true;
      const release = smooth(0.58, 0.78, uu);
      for (let i = 0; i < DAMP_N; i++) {
        dummy.position.copy(cell.dampDir[i]).multiplyScalar(lerp(0.4, 2.7, release));
        // Brownian drift over bulk efflux: diffusion, not a ballistic burst.
        dummy.position.x += Math.sin(uu * 21 + i * 1.7) * 0.16 * release;
        dummy.position.y += Math.sin(uu * 17 + i * 2.3) * 0.12 * release;
        dummy.position.z += Math.cos(uu * 19 + i * 1.1) * 0.16 * release;
        dummy.rotation.set(i, uu * 8, i * 0.3);
        dummy.scale.setScalar(release > 0.04 ? (0.7 + (i % 3) * 0.4) : 0);
        dummy.updateMatrix();
        cell.damp.setMatrixAt(i, dummy.matrix);
      }
      cell.damp.instanceMatrix.needsUpdate = true;
      // Dilution as released DAMPs diffuse away late in the loop.
      cell.damp.material.opacity = 1 - smooth(0.88, 1.0, uu);
      const caLevel = smooth(0.3, 0.55, uu);
      const caFade = 1 - smooth(0.7, 0.9, uu);
      cell.caShell.scale.setScalar(scale * (1 + caLevel * 0.06));
      cell.caShell.material.opacity = caLevel * 0.26 * caFade * (0.9 + 0.1 * Math.sin(uu * 47));
    }
  }

  function phaseIndex(uu) {
    return clamp(Math.floor(uu * S.phases.length), 0, S.phases.length - 1);
  }

  function paintHud(uu) {
    const i = phaseIndex(uu);
    const p = S.phases[i];
    flagEl.textContent = S.flag(i + 1, S.phases.length, p.t);
    meterFill.style.width = `${uu * 100}%`;
    clockApo.textContent = S.clockApo(uu * 3);
    clockNec.textContent = S.clockNec(uu * 20);
    meterTrack.setAttribute('aria-valuenow', String(Math.round(uu * 100)));
    document.getElementById('an-apo-title').textContent = p.apoT;
    document.getElementById('an-apo-meta').textContent = p.apoM;
    document.getElementById('an-apo-body').textContent = p.apo;
    document.getElementById('an-nec-title').textContent = p.necT;
    document.getElementById('an-nec-meta').textContent = p.necM;
    document.getElementById('an-nec-body').textContent = p.nec;
    document.getElementById('an-vault').innerHTML = p.vault.map((n) => vlink(n)).join(' · ');
    document.getElementById('an-stepcount').textContent = S.phaseOf(i + 1, S.phases.length);
    [...phaseBtns.children].forEach((b, k) => b.classList.toggle('is-on', k === i));
    apoLamp.intensity = lerp(1.2, 0.35, smooth(0.5, 0.9, uu));
    necLamp.intensity = lerp(0.3, 1.6, smooth(0.55, 0.8, uu));
    neighbors.forEach((n) => {
      n.mesh.material.color.set(n.necSide ? (uu > 0.6 ? 0xc45a4a : 0x8a8174) : 0x8a8174);
      n.mesh.material.opacity = n.necSide && uu > 0.65 ? 0.75 : 0.45;
    });
    labelSprites.forEach((s) => { s.visible = showLabels; });
  }

  function seek(nextU) {
    u = clamp(nextU, 0, 0.999);
    acc = u * DUR * 1000;
    t0 = performance.now();
  }

  playBtn.addEventListener('click', () => {
    running = !running;
    t0 = performance.now();
    playBtn.textContent = running ? S.pause : S.play;
    playBtn.classList.toggle('is-on', running);
  });
  playBtn.classList.toggle('is-on', running);
  playBtn.textContent = running ? S.pause : S.play;

  labelsBtn.addEventListener('click', () => {
    showLabels = !showLabels;
    labelsBtn.classList.toggle('is-on', showLabels);
  });
  labelsBtn.classList.add('is-on');

  xrayBtn.addEventListener('click', () => {
    xray = !xray;
    xrayBtn.classList.toggle('is-on', xray);
  });

  function setFocus(which) {
    focus = which;
    camLock = false;
    ['both', 'apo', 'nec'].forEach((k) => {
      document.getElementById(`an-focus-${k}`).classList.toggle('is-on', k === which);
    });
  }
  document.getElementById('an-focus-both').addEventListener('click', () => setFocus('both'));
  document.getElementById('an-focus-apo').addEventListener('click', () => setFocus('apo'));
  document.getElementById('an-focus-nec').addEventListener('click', () => setFocus('nec'));
  setFocus('both');

  let dragging = false;
  meterTrack.addEventListener('pointerdown', (e) => {
    dragging = true;
    meterTrack.setPointerCapture(e.pointerId);
    scrub(e);
  });
  meterTrack.addEventListener('pointermove', (e) => { if (dragging) scrub(e); });
  meterTrack.addEventListener('pointerup', () => { dragging = false; });
  function scrub(e) {
    const r = meterTrack.getBoundingClientRect();
    seek((e.clientX - r.left) / r.width);
  }

  addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      playBtn.click();
    }
    if (e.key === 'ArrowRight') seek(u + 1 / S.phases.length);
    if (e.key === 'ArrowLeft') seek(u - 1 / S.phases.length);
  });

  const ray = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(scene.children, true);
    const hit = hits.find((h) => h.object.userData.pick);
    if (hit) {
      const inf = S.info[hit.object.userData.pick];
      if (inf) {
        tip.style.display = 'block';
        tip.style.left = `${e.clientX - r.left + 12}px`;
        tip.style.top = `${e.clientY - r.top + 12}px`;
        tip.innerHTML = `<b>${inf[0]}</b>${inf[2]}<br><code>${inf[1]}</code>`;
        canvas.style.cursor = 'pointer';
        return;
      }
    }
    tip.style.display = 'none';
    canvas.style.cursor = 'grab';
  });
  canvas.addEventListener('pointerleave', () => { tip.style.display = 'none'; });

  function fit() {
    const r = stage.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(fit).observe(stage);
  fit();

  function animate(now) {
    requestAnimationFrame(animate);
    if (running) {
      acc += now - t0;
      u = (acc / 1000 / DUR) % 1;
    }
    t0 = now;
    updateCell(apo, u);
    updateCell(nec, u);
    paintHud(u);
    if (!camLock) {
      const goal = CAM[focus];
      camera.position.lerp(goal.pos, 0.035);
      controls.target.lerp(goal.tgt, 0.035);
    }
    apo.root.rotation.y = Math.sin(now * 0.00015) * 0.08;
    nec.root.rotation.y = Math.sin(now * 0.00015 + 1.2) * 0.08;
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}
