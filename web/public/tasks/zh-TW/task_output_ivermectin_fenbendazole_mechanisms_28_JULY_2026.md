---
title: "抗癌機制：伊維菌素與芬苯達唑 — 協同作用與綜合影響"
description: 分析伊維菌素與芬苯達唑互補的抗癌機制，聚焦於協同作用、收斂路徑，以及藥物老藥新用中併用治療的依據。
created: 2026-07-28
updated: 2026-08-22
tags:
  - cancer
  - drug-repositioning
  - ivermectin
  - fenbendazole
  - mechanisms
  - synergy
source: wiki knowledge base (entity notes + ingested review documents)
author: []
---
# 抗癌機制：伊維菌素與芬苯達唑 — 協同作用與綜合影響

根據 wiki 知識庫綜合整理：實體筆記（`Ivermectin.md`、`Fenbendazole.md`、`Benzimidazole.md`、`GLUT1.md`、`Hexokinase 2.md`）與來源回顧文獻（Tang et al. 2020；Nguyen et al. 2024）。所有證據皆屬臨床前階段（細胞株 + 異種移植模型）。兩種化合物作為抗癌藥物皆無臨床試驗。

> [!TIP]
> **這兩種老藥新用的抗寄生蟲藥，鎖定癌症生物學中根本不同的節點——伊維菌素在激酶/訊號樞紐，芬苯達唑在結構/代謝機器。兩者的機制大致不重疊，這正是為何在藥物老藥新用文獻中，它們越來越常被討論為潛在的併用藥物。**

---

## 伊維菌素 — 機制

### PAK1 降解（主要標的）

[[PAK1]]（p21 活化激酶 1）位於多條致癌訊號級聯的交會點。伊維菌素不只是抑制 PAK1 活性——它透過泛素-蛋白酶體路徑**促進 PAK1 蛋白的蛋白酶體降解**，且不影響 PAK1 mRNA 水平（Dou et al. 2016，PMID: 27302166）。蛋白酶體抑制劑 MG132 可反轉此效應。

PAK1 缺失的下游後果：

- **MAPK 級聯受抑制** — PAK1 通常透過 RAF 活化 MEK1/2 → ERK1/2。缺少 PAK1 時，透過 RAS-MAPK 的增生訊號被削弱（在黑色素瘤與鼻咽癌中已證實）。
- **Akt/mTOR 路徑受抑制** — PAK1 透過 PDK1 活化 PI3K/Akt 訊號。其降解移除關鍵的 Akt 活化因子，解除對自噬起始的抑制。
- **Wnt/β-catenin 受擾** — PAK1 促進 β-catenin 的胞質累積與核轉位。伊維菌素的 PAK1 抑制阻斷大腸直腸癌中 Wnt 驅動的轉錄（AXIN2、LGR5、ASCL2 等下游標的）。
- **NF-κB 受抑制** — PAK1 促進 NF-κB 的核活化；其缺失削弱促存活的發炎訊號。
- **STAT3 軸切斷** — PAK1-STAT3 軸驅動癌症幹細胞的自我更新。伊維菌素切斷此連結，抑制 CSC 中 NANOG、OCT-4 與 SOX-2 的表現。

> [!IMPORTANT]
> **PAK1 不只是眾多標的其中之一——它是伊維菌素協調大多數抗癌效應的*樞紐*。該回顧稱之為伊維菌素在乳癌、卵巢癌、鼻咽癌與黑色素瘤中的「主要宿主激酶標的」。**

### YAP1 抑制

[[YAP1]]（Yes-associated protein 1）是 Hippo 路徑的效應子致癌基因。伊維菌素在以下情況抑制 YAP1 表現/活性：

- **胃癌** — YAP1 高的細胞株（MKN1、SH-10-TC）對伊維菌素敏感；YAP1 低的細胞株（MKN7、MKN28）具抗性（Nambara et al. 2017，PMID: 29296196）。
- **肝細胞癌** — 伊維菌素在自發性肝癌 Mob1b⁻/⁻ 小鼠中阻斷 YAP1 活性（Nishio et al. 2016）。
- **肺癌** — 透過 YAP1 抑制來抑制 H1299 細胞增生。

YAP1 是不同於 PAK1 的標的——伊維菌素確實具有真正不同的作用機制分支。

### 計畫性細胞死亡（三種模式）

#### 凋亡（粒線體/內在路徑）

- 伊維菌素降低粒線體膜電位（ΔΨm）
- 上調促凋亡的 [[Bax]]，下調抗凋亡的 [[Bcl-2]]
- 促進細胞色素 c 從粒線體釋放至胞質
- 活化 caspase-9 → caspase-3 級聯 → PARP 切割
- 誘導 ROS 生成，放大凋亡訊號
- 已證實於：HeLa、腎細胞癌（5 株）、CML K562、膠質母細胞瘤 U87/T98G、大腸直腸癌、卵巢癌細胞

#### 自噬（PAK1/Akt/mTOR 依賴）

- 伊維菌素增加自噬通量以及 LC3、Beclin-1、Atg5 的表現
- 直接觀察到自噬體形成
- 機制：PAK1 降解 → Akt 去磷酸化 → mTOR 失活 → 解除對 Beclin-1 複合體的抑制 → 自噬體成核
- 在乳癌（MCF-7、MDA-MB-231）：自噬是*主要*死亡模式——抑制自噬（chloroquine、wortmannin、Beclin-1/Atg5 siRNA）會降低伊維菌素的抗癌活性
- 在黑色素瘤（SK-MEL-28）：自噬是*保護性*的——抑制它*增強*凋亡。TFE3 核轉位（Ser321 去磷酸化）透過 ROS 路徑驅動自噬。

> [!WARNING]
> **自噬悖論：在某些癌症中自噬會致死，在另一些癌症中則保護。該回顧指出此交互作用依脈絡而定，尚未完全釐清。**

#### 細胞焦亡（發炎型細胞死亡）

- 在乳癌細胞（MDA-MB-231、4T1）：伊維菌素增加 LDH 釋放、caspase-1 活化、細胞腫脹/破裂
- 假設路徑：伊維菌素 → P2×4/P2×7 受體活化 → ROS → NLRP3 發炎體組裝（ASC + NLRP3 + pro-caspase-1）→ 活化的 caspase-1 → GSDMD 切割 → 膜孔形成 → IL-1β/IL-18 分泌 + 細胞焦亡死亡
- 三種模式中最不確立者——僅有一項研究直接證實

### 粒線體功能障礙

在腎細胞癌與 CML 中運作的一個獨立機制：

- 伊維菌素優先殺死癌細胞，同時保留正常細胞
- 降低粒線體膜電位、抑制粒線體呼吸、瓦解 ATP 生成
- 粒線體燃料 acetyl-L-carnitine（ALCAR）與抗氧化劑 N-acetyl-L-cysteine（NAC）可反轉此效應——確認粒線體/ROS 專一性
- 在腎細胞癌：影響 5 株細胞而不傷害正常腎細胞（Zhu et al. 2017，PMID: 28847725）
- 在 CML：選擇性地誘導 K562 相對於正常骨髓的粒線體功能障礙（Wang et al. 2018，PMID: 29428725）

### 其他分子標的

- **[[HSP27]]** — 伊維菌素抑制 HSP27 磷酸化，增強抗 EGFR 藥物（erlotinib、cetuximab）在肺癌與大腸直腸癌中的活性（Nappi et al. 2020，JCI）
- **[[KPNB1]]**（importin-β1）— 透過卵巢癌中的 shRNA/CRISPR 篩選確認；伊維菌素透過 KPNB1 依賴的機制阻斷細胞週期並誘導凋亡；與 paclitaxel 協同，在體內幾乎完全抑制腫瘤生長（Kodama et al. 2017）
- **[[P-gp]]** 抑制 — 伊維菌素是強效的 P-糖蛋白抑制劑，透過阻斷藥物外排來逆轉 MDR。最早於 1996 年確認（Didier & Loor）。亦抑制 MRP1/2/3。
- **SIN3 共抑制因子** — 在 TNBC 中，伊維菌素作為 SID（SIN3-interaction domain）擬態，阻斷 SID-paired 兩性螺旋 2 交互作用，恢復 tamoxifen 敏感性
- **氯離子通道調節** — 在白血病中，伊維菌素增加 Cl⁻ 內流 → 質膜超極化 → ROS 生成 → 細胞死亡（Sharmeen et al. 2010，PMID: 20644115）

### 抗血管新生與抗轉移效應

- 在膠質母細胞瘤：伊維菌素誘導人腦微血管內皮細胞凋亡，顯著抑制血管新生（Liu et al. 2016，PMID: 27771251）
- 在黑色素瘤：降低動物模型中的肺轉移
- 在肺癌：透過抑制 EMT 減少轉移

---

## 芬苯達唑 — 機制

### 微管去穩定化（主要結構機制）

芬苯達唑結合 β-[[Tubulin]] 的**秋水仙素位點**，阻止聚合成 [[Microtubule]]。這與更廣泛的 [[Benzimidazole]] 類（mebendazole、albendazole）機制相同，但親和力中等——被描述為「中等程度的微管去穩定化試劑」（Dogra et al. 2018，*Scientific Reports*）。

後果：

- **有絲分裂紡錘體破壞** — 染色體無法正確排列/分離
- **G2/M 細胞週期停滯** — 細胞停滯在中期-後期檢查點
- **有絲分裂災難 → 凋亡** — 長期停滯觸發死亡
- 相較於 [[Vincristine]]（長春花生物鹼），芬苯達唑的微管結合親和力較低，但全身毒性也較低

### 糖解抑制（代謝飢餓）

芬苯達唑最具特色的抗癌機制，不同於其微管效應：

#### GLUT1 下調

- 芬苯達唑降低癌細胞中過表達的主要葡萄糖轉運蛋白 [[GLUT1]] 的表面表現
- 這直接損害 [[Glucose uptake]]，使腫瘤缺乏其主要燃料
- GLUT1 通常由缺氧下的 HIF-1α 與 Akt/mTOR 訊號誘導——芬苯達唑擾亂此軸

#### Hexokinase 2 抑制

- 芬苯達唑下調/抑制 [[Hexokinase 2]]（HK2），即糖解的第一個限速酵素
- HK2 在癌症中格外重要：它結合粒線體 VDAC 通道，利用粒線體 ATP，並*同時阻斷凋亡*（透過防止細胞色素 c 釋放與凋亡體組裝）
- 透過抑制 HK2，芬苯達唑達成雙重打擊：（1）瓦解糖解通量，以及（2）在粒線體層次解除對凋亡的抑制
- 與 GLUT1 抑制協同，造成加成的代謝封鎖

#### Warburg 效應干擾

- 癌細胞即使有氧也優先使用有氧糖解（[[Warburg Effect]]）
- 芬苯達唑在兩個層次擾亂此代謝程式——葡萄糖輸入（GLUT1）與第一個關鍵步驟（HK2）
- 這使細胞同時缺乏 ATP 與生合成中間物（如五碳糖磷酸路徑所需的葡萄糖-6-磷酸等）

### p53 活化

芬苯達唑與相關苯并咪唑透過特定機制活化 p53 腫瘤抑制因子：

- **下調 [[MDM2]] 與 [[MdmX]]** — 這些是在許多腫瘤中組成性降解 p53 的 E3 泛素連接酶
- 隨著 MDM2/MdmX 受抑，p53 蛋白累積
- 穩定的 p53 轉活化促凋亡標的（Bax、PUMA、Noxa）與細胞週期停滯基因（p21）
- 這在帶有野生型 p53 但 MDM2 過表達的腫瘤中特別相關（一種常見的抗藥機制）
- 由 Mrkvová et al. 2019（*Molecules*）在 MDMX 過表達的腫瘤細胞中證實

### 氧化壓力誘導

- 芬苯達唑增加細胞內活性氧（ROS）水平
- 升高的 ROS → 對脂質、蛋白質、DNA 的氧化損傷 → 活化壓力激酶 → 凋亡
- 此 ROS 依賴的死亡路徑涉及 **MEK3/6 → p38 MAPK** 軸（Peng et al. 2022，*Chem Biol Interact*）——芬苯達唑及其合成類似物在 HeLa 細胞中調節此路徑
- 此機制與伊維菌素共享（兩者皆誘導 ROS 介導的死亡），但芬苯達唑的代謝破壞可能因瓦解依賴糖解通量的 NADPH/麩胱甘肽抗氧化系統而放大之

### 透過 p21 的細胞週期停滯

- 在肝細胞癌（H4IIE 細胞），芬苯達唑透過 **p21 介導的細胞週期停滯**誘導凋亡（Park 2022，*Biol Pharm Bull*）
- p21（CDKN1A）是 p53 下游的週期素依賴激酶抑制因子
- 這將 p53 活化機制連結至具體的細胞週期封鎖

### 其他路徑調節

- **NF-κB** — 芬苯達唑調節 NF-κB 訊號，但確切機制（直接 vs. 透過 ROS/p53 的間接）不如伊維菌素明確
- **MAPK** — MEK3/6-p38-MAPK 軸的參與暗示與壓力反應訊號的交互作用

---

## 互補機制 — 它們收斂與強化的地方

兩種藥物鎖定根本不同的主要標的，但它們的下游效應在多個關鍵節點收斂。此不重疊性正是合理併用的基礎。

### 透過粒線體的收斂性凋亡

兩種化合物都匯入內在（粒線體）凋亡路徑，但從不同的門進入：

- **伊維菌素** 直接去極化粒線體膜、瓦解 ATP 生成、上調 Bax/下調 Bcl-2，並釋放細胞色素 c——主要透過 PAK1 降解與 ROS 生成。
- **芬苯達唑** 間接地達到類似終點：透過抑制 HK2，將酵素從粒線體 VDAC 通道脫離。HK2 與 VDAC 的結合通常*阻擋*凋亡體組裝；移除它便解除對細胞色素 c 釋放與 caspase 活化的抑制。

> [!IMPORTANT]
> ****協同點：** 伊維菌素從訊號側攻擊粒線體（PAK1 → Akt/mTOR → 粒線體啟動），而芬苯達唑從代謝側攻擊（HK2 從 VDAC 脫離）。兩者併用，可能將細胞推過單獨任一藥物都達不到的凋亡閾值。**

### 放大的 ROS 級聯

兩種藥物各自獨立誘導 ROS——但透過不同的機制，且芬苯達唑可能放大伊維菌素的 ROS 訊號：

- **伊維菌素** 透過粒線體去極化與氯離子通道介導的膜超極化產生 ROS。
- **芬苯達唑** 透過氧化壓力誘導（MEK3/6 → p38 MAPK 軸）產生 ROS，*並*瓦解維持麩胱甘肽再生與細胞抗氧化防禦的主要還原當量 NADPH 的糖解供應。

> [!IMPORTANT]
> ****協同點：** 芬苯達唑的代謝飢餓耗竭了癌細胞通常用以中和 ROS 的 NADPH/麩胱甘肽緩衝。這降低了伊維菌素產生 ROS 效應的閾值，可能將次致死的氧化壓力轉化為致死性損傷。此併用可能達成「氧化還原災難」——同時從兩個方向壓垮腫瘤的抗氧化能力。**

### 多層次細胞週期封鎖

兩種藥物透過不同機制在不同的檢查點停滯細胞週期：

- **芬苯達唑** → 透過微管去穩定化（紡錘體組裝檢查點）造成 G2/M 停滯
- **伊維菌素** → 在某些情境中造成 G1/S 停滯（如 HeLa 細胞），在其他情境中造成 S 期停滯（如膽管癌）
- **芬苯達唑** → 透過 p53 穩定（MDM2/MdmX 抑制）造成 p21 介導的停滯
- **伊維菌素** → 細胞週期效應由 PAK1 缺失與下游路徑抑制介導

> [!IMPORTANT]
> ****協同點：** 被芬苯達唑的微管破壞困在 G2/M 的細胞無法逃入 S 期，而被伊維菌素困在 G1/S 的細胞無法到達有絲分裂。雙重檢查點陷阱使腫瘤更難透過任一單獨封鎖增殖。**

### 對 Warburg 效應的雙重攻擊

癌症的代謝重編程——[[Warburg Effect]]——由芬苯達唑直接、伊維菌素間接地鎖定：

- **芬苯達唑** 直接抑制 GLUT1（葡萄糖輸入）與 HK2（第一個糖解步驟），瓦解糖解管線。
- **伊維菌素** 抑制 Akt/mTOR 訊號軸（透過 PAK1 降解），而這是 GLUT1 表現與 HK2 活性的主要轉錄與轉譯後調節因子。Akt 磷酸化 HK2 促進其粒線體結合；mTOR 上調 HIF-1α，後者誘導 GLUT1 與其他糖解酵素。

> [!IMPORTANT]
> ****協同點：** 芬苯達唑攻擊代謝機器（執行工作的蛋白質），而伊維菌素攻擊*上調*該機器的訊號路徑。兩者併用，可能達成比單獨任一者更深層的代謝破壞——芬苯達唑移除酵素，伊維菌素移除否則會重建它們的訊號。**

### 收斂的 NF-κB 抑制

兩種化合物都調節 NF-κB——腫瘤存活、發炎與抗藥性的主控調節因子：

- **伊維菌素** 透過 PAK1 缺失抑制 NF-κB（PAK1 通常促進 NF-κB 核活化）。
- **芬苯達唑** 調節 NF-κB，可能透過 ROS/p53 介導的路徑間接作用。

來自兩個獨立方向的 NF-κB 合併抑制，可能更有效地下調抗凋亡基因（Bcl-xL、XIAP、cIAP）與維持腫瘤微環境的發炎細胞激素。

### 多重抗藥性逆轉

- **伊維菌素** 是 P-糖蛋白（P-gp）與 MDR 相關蛋白（MRP1/2/3）的直接、強效抑制劑，主動阻斷藥物外排幫浦。
- **芬苯達唑**（作為苯并咪唑）具有部分規避典型 P-gp 外排的機制——苯并咪唑並非總是被該幫浦辨認。

> [!IMPORTANT]
> ****協同點：** 伊維菌素的 P-gp 封鎖可能增加芬苯達唑（與其他併用化療藥）的細胞內滯留，提高有效的腫瘤藥物濃度，而無需增加全身劑量。**

---

## 理論併用依據

### 此配對在機制上合理的理由

| 維度 | 伊維菌素的貢獻 | 芬苯達唑的貢獻 | 綜合效應 |
| ------------------- | ------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **訊號** | PAK1/YAP1/Akt/mTOR 抑制 | 幾乎無直接訊號影響 | 伊維菌素移除致癌訊號；芬苯達唑利用由此產生的代謝弱點 |
| **結構** | 無直接微管效應 | 微管去穩定化 → 有絲分裂停滯 | 芬苯達唑困住分裂中的細胞；伊維菌素透過存活訊號防止逃脫 |
| **代謝** | 間接（Akt/mTOR → 糖解基因調節） | 直接（GLUT1 ↓、HK2 ↓、Warburg 破壞） | 芬苯達唑使細胞飢餓；伊維菌素防止代償性代謝重編程 |
| **ROS/凋亡** | 粒線體去極化、Cl⁻ 通道 ROS | 代謝 ROS + NADPH 耗竭 | 芬苯達唑解除抗氧化防禦武裝；伊維菌素將 ROS 推過致死閾值 |
| **p53** | 非主要機制 | MDM2/MdmX 抑制 → p53 穩定 | 芬苯達唑在帶野生型 p53/MDM2 過表達的腫瘤中恢復 p53 功能 |
| **幹細胞** | PAK1-STAT3 軸抑制（NANOG、OCT-4、SOX-2） | 未特異性證實 | 伊維菌素鎖定驅動復發的 CSC 族群 |
| **抗藥性** | 強效 P-gp/MDR 蛋白抑制劑 | 部分 P-gp 規避（苯并咪唑類） | 伊維菌素可能增強芬苯達唑的瘤內滯留 |
| **免疫** | HMGB1 釋放 → 免疫原性細胞死亡 | 較少描述 | 伊維菌素可能引發免疫系統辨認死亡腫瘤細胞 |

### 併用可能克服單藥限制的理由

- **腫瘤異質性：** 腫瘤包含具有不同弱點的亞群。依賴激酶的細胞可能對伊維菌素有反應；依賴代謝的細胞可能對芬苯達唑有反應。兩者合併可擴大涵蓋範圍。
- **抗藥逃脫：** 上調替代存活路徑以逃脫伊維菌素訊號封鎖的細胞，仍可能被芬苯達唑的結構/代謝破壞捕獲，反之亦然。
- **劑量節省：** 若機制真正互補，每種藥物的較低劑量可能達到相同或更大的效力——降低高劑量下芬苯達唑肝毒性與伊維菌素神經毒性的風險。

---

## 來源

- Tang M et al. "Ivermectin, a potential anticancer drug derived from an antiparasitic drug." *Pharmacol Res* 2020;163:105207. PMID: 32971268, PMC7505114。
- Nguyen J et al. "Oral Fenbendazole for Cancer Therapy in Humans and Animals." *Anticancer Res* 2024;44(9):3725。
- Dou Q et al. "Ivermectin Induces Cytostatic Autophagy by Blocking the PAK1/Akt Axis in Breast Cancer." *Cancer Res* 2016;76(15):4457-4469. PMID: 27302166。
- Dogra N et al. "Fenbendazole acts as a moderate microtubule destabilizing agent and causes cancer cell death by modulating multiple cellular pathways." *Sci Rep* 2018;8。
- Nappi L et al. "Ivermectin inhibits HSP27 and potentiates efficacy of oncogene targeting in tumor models." *J Clin Invest* 2020;130(2):699-714. PMID: 31845908。
- Kodama M et al. "In vivo loss-of-function screens identify KPNB1 as a new druggable oncogene in epithelial ovarian cancer." *PNAS* 2017;114(35):E7301-E7310. PMID: 28811376。
- Nambara S et al. "Antitumor effects of the antiparasitic agent ivermectin via inhibition of Yes-associated protein 1 expression in gastric cancer." *Oncotarget* 2017;8(64):107666-107677. PMID: 29296196。
- Zhu M et al. "Antibiotic ivermectin preferentially targets renal cancer through inducing mitochondrial dysfunction and oxidative damage." *Biochem Biophys Res Commun* 2017;492(3):373-378. PMID: 28847725。
- Wang J et al. "Antibiotic ivermectin selectively induces apoptosis in chronic myeloid leukemia through inducing mitochondrial dysfunction and oxidative stress." *Biochem Biophys Res Commun* 2018;497(1):241-247. PMID: 29428725。
- Liu Y et al. "Anthelmintic drug ivermectin inhibits angiogenesis, growth and survival of glioblastoma through inducing mitochondrial dysfunction and oxidative stress." *Biochem Biophys Res Commun* 2016;480(3):415-421. PMID: 27771251。
- Mrkvová Z et al. "Benzimidazoles downregulate Mdm2 and MdmX and activate p53 in MdmX overexpressing tumor cells." *Molecules* 2019;24(21)。
- Peng Y et al. "Fenbendazole and its synthetic analog interfere with HeLa cells' proliferation and energy metabolism via inducing oxidative stress and modulating MEK3/6-p38-MAPK pathway." *Chem Biol Interact* 2022;361。
- Park D. "Fenbendazole suppresses growth and induces apoptosis of actively growing H4IIE hepatocellular carcinoma cells via p21-mediated cell-cycle arrest." *Biol Pharm Bull* 2022;45:184-193。

## 參考的 Wiki 實體筆記

- `notes/cancer/Ivermectin.md`
- `notes/cancer/Fenbendazole.md`
- `notes/cancer/Benzimidazole.md`
- `notes/cancer/GLUT1.md`
- `notes/cancer/Hexokinase 2.md`
- `notes/cancer/Microtubule.md`
- `notes/cancer/_document_ - Ivermectin, a potential anticancer drug derived from an antiparasitic drug.md`
- `notes/cancer/_document_ - Oral Fenbendazole for Cancer Therapy in Humans and Animals.md`
