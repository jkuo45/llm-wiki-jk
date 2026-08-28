---
title: 非瑟酮作為 COMT 抑制劑 — 衰老溶解交集與實驗計畫
description: 評估非瑟酮作為衰老溶解類黃酮與 COMT（兒茶酚-O-甲基轉移酶）受質-抑制劑的雙重活性（IC50 2.6–5.8 µM），包含其 O-甲基化為 Geraldol、依劑量與基因型而定的藥物動力學複雜性、對長壽方案的意涵，以及提出的實驗計畫。
created: 2026-07-27
updated: 2026-08-22
source: wiki entity notes (COMT, Fisetin, Senolytic, Catecholamines) + primary literature synthesis
tags:
  - task-output
  - fisetin
  - comt
  - senolytic
  - catecholamines
  - geraldol
  - flavonoid
  - longevity
author: []
---
# COMT × 非瑟酮：研究評估與實驗提案

**主持人（Principal Investigator）報告**
**日期：** 09_July_2026 02:50 AM PDT
**主題：** 評估非瑟酮作為 COMT 調節劑及其對長壽的雙重衰老溶解–神經調節潛力

---

## 摘要

[[Fisetin]]（非瑟酮，3,3′,4′,7-四羥基黃酮）是一種天然 [[Flavonoid]]（類黃酮），具有已證實的 [[Senolytic|衰老溶解]]、神經保護、抗發炎與抗氧化特性。它也是一種已驗證的 [[COMT]]（兒茶酚-O-甲基轉移酶）抑制劑，對人類肝臟 COMT 的 [[IC50]] 值落在低微莫耳範圍（2.6–5.8 µM）。此雙重活性——同時清除 [[Senescent Cells]]（衰老細胞）並調節 [[Catecholamines|catecholamine]]/[[Dopamine]]（多巴胺）代謝——創造了一個藥理學上有趣但機制上複雜的交集。本報告評估非瑟酮調節 COMT 的實證基礎、其對長壽研究的意涵，並提出嚴謹的實驗計畫。

> [!IMPORTANT]
> **關鍵發現**
> 非瑟酮不僅是被動的 COMT 抑制劑。它是一種**受質-抑制劑**，本身被 COMT O-甲基化，生成活性代謝物 [[Geraldol]]（3′,4′,7-三羥基-3′-甲氧基黃酮）。這意味著 COMT 活性直接塑造非瑟酮的藥物動力學命運，且非瑟酮的 COMT 抑制是受質競爭性的——帶來依劑量與基因型而定的複雜性，而此複雜性在長壽研究中未被充分探討。

---

## 分子概況：非瑟酮作為 COMT 受質與抑制劑

### 直接 COMT 抑制證據

| 參數 | 值 | 來源 |
|-----------|-------|--------|
| IC₅₀（COMT，大鼠肝臟，以 [[Dopamine]] 為受質） | 5.78 µM | Paudel 等人 2019（PMID: 31258092） |
| IC₅₀（COMT，人類肝細胞質，2-OH-[[Estrogen\|E₂]] 甲基化） | 3.3–4.5 µM | Zhu 等人 2004（Drug Metab Dispos 32:497） |
| IC₅₀（COMT，人類肝細胞質，4-OH-[[Estrogen\|E₂]] 甲基化） | 2.6–4.2 µM | Zhu 等人 2004 |
| 抑制類型 | 混合型（競爭性 + 非競爭性） | Zhu 等人 2004 |
| [[Monoamine oxidase\|MAO-A]] 抑制（IC₅₀） | 7.33 µM | Paudel 等人 2019 |
| MAO-B 抑制 | 不顯著 | Paudel 等人 2019 |

### 機制：非瑟酮作為 COMT 受質

非瑟酮含有一個兒茶酚基團（3′,4′-二羥基 B 環），可作為 COMT 介導 O-甲基化的受質。這由 Poor 等人（2016, Biomed Pharmacother 83:998–1005）直接證實：

- 非瑟酮被 COMT 代謝為 [[Geraldol]]（3′-O-甲基非瑟酮）
- 此代謝活化是濃度依賴的
- 此過程消耗 [[SAMe]] 並生成 [[SAH]]（S-腺苷同半胱胺酸），一種 COMT 的強效回饋抑制劑
- 在低濃度時：非瑟酮主要作為受質（經歷甲基化）
- 在較高濃度時：非瑟酮作為競爭性抑制劑（佔據活性位點而未被有效甲基化）

> [!WARNING]
> **關鍵意涵**
> 非瑟酮的 COMT 抑制並非簡單的開/關藥理效應。它是濃度依賴、基因型敏感，並生成可能本身具有獨特生物活性的活性代謝物（geraldol）。任何檢視非瑟酮神經或長壽效應的研究都必須考量此代謝交互作用。

### 結構–活性關係脈絡

非瑟酮屬於 [[Flavonol]]（黃酮醇）類，具有兒茶酚 B 環。與已知 [[COMT Inhibitors]] 比較：

| 化合物 | COMT IC₅₀ (µM) | 機制 |
|----------|----------------|-----------|
| [[Quercetin]]（槲皮素） | 0.9–1.5 | 競爭性（兒茶酚受質） |
| 非瑟酮（Fisetin） | 2.6–5.8 | 混合型（競爭性 + 非競爭性） |
| (+)-[[Catechin]]（兒茶素） | 0.86 | 競爭性 |
| [[EGCG]] | 0.04–0.07 | 緊密結合抑制劑 |
| Entacapone（臨床） | ~0.23 | 競爭性（硝基兒茶酚） |
| Tolcapone（臨床） | ~0.048 | 競爭性（硝基兒茶酚） |

非瑟酮的 COMT 抑制效價中等——比臨床 COMT 抑制劑弱約 10–50 倍，但落在可透過膳食補充或營養藥物劑量達到的範圍內（特別是增強生物可用率的製劑）。

---

## 多重藥理：衰老溶解與 COMT 調節軸

### 衰老溶解活性（主要長壽機制）

非瑟酮的衰老溶解特性已充分驗證：

- **[[Bcl-2]]/[[Bcl-xL]] 抑制：** 非瑟酮結合抗凋亡 Bcl-2 家族蛋白的疏水溝，使衰老細胞對 [[Apoptosis]]（凋亡）敏感。計算建模（PMC11914956）確認有利的結合能：Bcl-2:非瑟酮 = −22.2 至 −35.1 kcal/mol（依電離狀態而異）；Bcl-xL 選擇性在藥理上較受偏好。
- **[[PI3K]]-[[Akt]] 路徑抑制：** 非瑟酮抑制 PI3K，降低年長內皮細胞中 Akt 磷酸化並抑制 Bcl-2/Bcl-xL 表現（Ji 等人 2025，PMID: 38789909）。
- **體內效力：** 間歇給藥（100 mg/kg/天，1 週給藥/2 週停藥）降低老年小鼠骨骼肌、主動脈與脂肪組織中的衰老細胞負擔。Cdkn1a（[[p21]]）表現降低約 46%（Murray 等人 2025）。
- **[[SASP]] 抑制：** 非瑟酮降低循環 SASP 因子，包含 [[CXCL12]]，部分救援年齡相關內皮功能障礙（PMID: 40894771）。
- **壽命延長：** 野生型小鼠晚年期口服非瑟酮延長中位與最大壽命（Yousefzadeh 等人 2018）。

### COMT 抑制：治療潛力與風險

#### 潛在效益：

- **[[Dopamine]] 在 [[Prefrontal Cortex\|prefrontal cortex]]（前額葉皮質）中的增強：** COMT 是 PFC 中主要的多巴胺降解酶。適度的 COMT 抑制可增強工作記憶與執行功能，特別是在具有 Val/Val（快速 COMT）基因型之個體中。這與老化伴隨前額葉多巴胺張力下降相關。

- **[[Estrogen]]（雌激素）代謝調節：** COMT 將兒茶酚雌激素（2-OH-E₂、4-OH-E₂）甲基化為較低基因毒性的甲氧基雌激素。非瑟酮的抑制可能改變雌激素代謝，帶來複雜的組織依賴後果。2-甲氧基雌二醇（2-MeO-E₂）是抗血管新生與促凋亡的；其形成減少在癌症脈絡下理論上可能不利，但淨效應取決於組織雌激素水平與局部 COMT 表現。

- **[[Levodopa\|L-DOPA]] 協同（若適用）：** 在 [[Parkinson's Disease]]（帕金森氏症）模型中，非瑟酮的 COMT 抑制可增強 L-DOPA 效力——類似 entacapone，但帶有額外的衰老溶解效益。

#### 潛在風險：

- **[[Catecholamines|Catecholamine]] 堆積：** 過度 COMT 抑制可能升高 [[Epinephrine]]/[[Norepinephrine]]，特別是在氧化壓力條件下，可能增加的自氧化生成 [[Aminochromes|aminochromes]]（adrenochrome、dopaminochrome）。這是機制上的疑慮，而非非瑟酮劑量下的實證觀察。

- **兒茶酚 [[Estrogen]] 堆積：** 抑制 COMT 介導的兒茶酚雌激素 O-甲基化可能增加損傷 DNA 的醌中間體形成——可能與雌激素受體陽性組織相關。

- **[[SAMe]]/[[SAH]] 失衡：** 非瑟酮是 COMT 受質；其甲基化消耗 SAMe 並生成 SAH。慢性高劑量非瑟酮可能改變 SAMe:SAH 比值，影響全局甲基化能力。這對已經有改變甲基化動力學的慢速 COMT（Met/Met）個體特別相關。

- **依基因型的效應：** 慢速 COMT 個體（Met/Met，約 20–30% 歐洲人）已經有升高的突觸多巴胺。外加非瑟酮介導的 COMT 抑制可能將多巴胺水平推入 PFC 功能的次佳範圍之上（倒 U 型關係），可能損害而非增強認知。

---

## 藥物動力學考量

### 生物可用率挑戰

非瑟酮有惡名昭彰的極差口服 [[Bioavailability|bioavailability]]：

- **游離非瑟酮血清 t₁/₂：** 2.7 分鐘（靜脈）、<90 分鐘（口服）於大鼠
- **人類 Cmax（未製劑，口服 1000 mg）：** ~10 ng/mL（~33 nM）——遠低於 COMT 抑制的 IC₅₀（2.6–5.8 µM）
- **代謝物：** 快速結合為硫酸鹽/葡萄糖醛酸鹽；O-甲基化為 [[Geraldol]]

### 增強生物可用率製劑

| 製劑 | 生物可用率增強 | 達成之 Cmax |
|-------------|---------------------------|---------------|
| FF-20（FENUMAT 水凝膠） | 較未製劑 26.9 倍 | 238.2 ng/mL（~780 nM） |
| S-[[SNEDDS]] 結腸標靶 | 4.4–6.9 倍 | 大鼠模型 |
| [[Nanoparticles\|Nanosuspension]] | 改善（大鼠數據） | ~225 nm 顆粒 |

> [!NOTE]
> **生物可用率 vs. COMT 閾值**
> 即使以最佳目前製劑，峰值血漿非瑟酮濃度（~0.8 µM）仍低於 COMT 抑制的 IC₅₀。這提示**標準營養藥物劑量（100–500 mg）的膳食非瑟酮補充，不太可能在周邊組織產生有意義的系統性 COMT 抑制。** 然而：
> - **胃腸道的局部濃度**可能短暫超過 IC₅₀，潛在影響腸道 COMT
> - **腦部穿透**可能達到較高局部濃度，因非瑟酮的親脂性（log P = 3.2）與報導的 [[Blood-Brain Barrier|BBB]] 穿越
> - **間歇高劑量方案**（如衰老溶解試驗所用：20 mg/kg/天持續 5 天）可能短暫達到抑制濃度
> - **[[Geraldol]]**（COMT 生成的代謝物）可能有尚未被表徵的獨特 COMT 抑制特性

### 進行中的臨床試驗

- **NCT06796374：** 年輕與老年成人非瑟酮動力學比較（100 mg 與 1000 mg 劑量，± 槲皮素）。本試驗將提供年齡依賴的非瑟酮藥物動力學，以及合併給予的 COMT 抑制劑槲皮素對非瑟酮代謝效應的關鍵數據。
- 多項第一期/二期衰老溶解試驗（非瑟酮用於衰弱、骨關節炎、糖尿病腎病）—— 藥物動力學次要終點待定。

---

## 待調查假說

### COMT 抑制在衰老溶解劑量下具治療相關性
**原理：** 雖然標準補充可能達不到 COMT 抑制性血漿濃度，但間歇高劑量衰老溶解方案（人類 20 mg/kg × 5 天）可能達到短暫抑制水平，特別是在腦組織。
**檢測：** 測量老年受試者非瑟酮/geraldol 給藥前後的血漿與 CSF 水平，以及 COMT 活性（經由多巴胺/甲氧基酪胺比值）。

### COMT 基因型改變非瑟酮的衰老溶解與認知效應
**原理：** Val/Val 個體（快速 COMT）有較低基線多巴胺；非瑟酮介導的 COMT 抑制可增強認知。Met/Met 個體（慢速 COMT）可能經歷進一步 COMT 抑制的不良神經化學效應。
**檢測：** 依 COMT [[Val158Met]] 基因型分層非瑟酮臨床試驗參與者；測量認知終點與衰老標記作為共同主要結果。

### COMT 抑制助於非瑟酮的神經保護效應
**原理：** 若非瑟酮抑制腦部 COMT，這可增強多巴胺張力並增強 ERK/CREB/BDNF 訊號——這些路徑已與非瑟酮的神經保護相關。
**檢測：** 在 COMT 基因敲除小鼠或合併使用選擇性 COMT 抑制劑，確定非瑟酮的神經保護效應是否被減弱或增強。使用 [¹⁸F]-FMT 的 PET 成像測量體內 COMT 活性。

### [[Geraldol]] 具有獨特生物活性
**原理：** Geraldol 由 COMT 介導的非瑟酮甲基化生成。已在血漿中檢出，水平超過游離非瑟酮。其 COMT 抑制與衰老溶解特性尚未被表徵。
**檢測：** 合成 geraldol；評估 COMT 抑制（IC₅₀、Ki、機制）、Bcl-2/Bcl-xL 結合（對接、SPR）、衰老細胞模型中的衰老溶解活性，以及體內藥物動力學。

---

## 提出的實驗計畫

### 第一階段：體外表徵

#### 非瑟酮–COMT 結合與動力學
- **酵素：** 重組人類 S-COMT 與 MB-COMT
- **受質：** [[Dopamine]]、[[Norepinephrine]]、[[Epinephrine]]、2-OH-[[Estrogen|E₂]]、4-OH-E₂
- **方法：** 以 [³H]-[[SAMe]] 的放射化學分析；[[Michaelis-Menten Kinetics|Michaelis-Menten]] 與 Lineweaver-Burk 動力學分析
- **終點：** Ki、IC₅₀、機制（競爭性/非競爭性/混合型）、受質選擇性
- **對照：** Entacapone（正向）、[[Quercetin]]（結構類似物）
- **新穎添加：** 於每個抑制劑濃度以 LC-MS/MS 測量非瑟酮 O-甲基化速率（[[Geraldol]] 形成），以量化受質-抑制劑分配

#### 雙重衰老溶解–COMT 活性
- **細胞模型：** 衰老 IMR-90 纖維母細胞（[[Etoposide|etoposide]] 誘導）、原代衰老 [[Endothelial Cells|endothelial cells]]、衰老前脂肪細胞
- **共同分析：** SA-β-Gal、[[p21]]/[[p16]] Western、SASP ELISA 面板（[[IL-6]]、[[IL-8]]、[[CXCL12]]、[[MMP-3]]）、凋亡（[[Caspase-3]]/7）、COMT 活性（細胞裂解液中多巴胺/甲氧基酪胺比值）
- **劑量反應：** 0.1–50 µM 非瑟酮（以涵蓋 COMT 的 IC₅₀）
- **關鍵問題：** 非瑟酮的衰老溶解活性是否與其 COMT 抑制相關或依賴之？

#### 計算建模
- **分子對接：** 非瑟酮、geraldol 與槲皮素進入 COMT 晶體結構（PDB: 3BWM、4A76）與 Bcl-2/Bcl-xL（PDB: 4LVT、2XA0）
- **MD 模擬：** 非瑟酮–COMT 與非瑟酮–Bcl-2 複合物的 100–500 ns 軌跡；自由能微擾（FEP）計算
- **網絡藥理學：** 使用 STRING 與 KEGG 路徑分析，將非瑟酮的多標的概況映射到 COMT、Bcl-2、Bcl-xL、[[PI3K]]、LOX、MAO、[[NF-κB]]、[[NRF2]]、[[AMPK]]、[[mTOR]]
- **QSAR：** 從具有修飾 B 環兒茶酚的非瑟酮衍生物預測 COMT 抑制（以測試兒茶酚對 COMT 活性 vs. 衰老溶解活性是否為必要）

### 第二階段：體內概念驗證

#### 老年小鼠中的非瑟酮藥物動力學與 COMT 活性
- **動物：** 年輕（6 月）與老年（24 月）C57BL/6J 小鼠
- **劑量：** 非瑟酮 20 mg/kg/天 × 5 天（衰老溶解方案）或 100 mg/kg 間歇（如 Murray 等人 2025）
- **取樣：** 最後一劑後 1、4、8、24 小時的血清、腦、肝、脂肪
- **分析物：** 非瑟酮、geraldol、非瑟酮-葡萄糖醛酸鹽、非瑟酮-硫酸鹽（LC-MS/MS）；多巴胺、DOPAC、3-MT、HVA（腦微透析或組織均質）；SAH、SAMe（LC-MS/MS）
- **COMT 活性：** 肝與腦細胞質的體外 COMT 分析
- **關鍵終點：** 將腦部非瑟酮/geraldol 水平與 COMT 抑制幅度及多巴胺代謝物比值相關聯

#### COMT 基因型–非瑟酮交互作用
- **動物：** COMT [[Val158Met]] 基因敲入小鼠（Jackson Labs 可得）或野生型 vs. COMT 雜合基因敲除
- **設計：** 2×2 因子（基因型 × 非瑟酮處理）
- **終點：** [[Frailty]] 指數、握力、rotarod、新物體辨識、Y-迷宮；腦、肌肉、脂肪中的衰老標記（[[p16]]、[[p21]]、SA-β-Gal）；腦部 COMT 活性
- **關鍵檢測：** 非瑟酮對 Met/Met（慢速 COMT）小鼠的效益是否少於或多於 Val/Val（快速 COMT）小鼠？

#### 非瑟酮於 COMT 基因敲除小鼠
- **原理：** 若 COMT 抑制助於非瑟酮的效應，效益幅度在 COMT-null 背景下應不同
- **設計：** 野生型 vs. COMT⁻/⁻ 小鼠，年輕與老年，給予載劑或非瑟酮
- **終點：** 壽命（若統計檢力足夠）、健康span 標記、衰老負擔、腦神經傳導物質概況、認知測試

### 第三階段：臨床轉譯

#### 藥物基因體臨床試驗（第二期）
- **設計：** 隨機、雙盲、安慰劑對照
- **族群：** ≥60 歲成人，富集 Val/Val 與 Met/Met COMT 基因型
- **介入：** 非瑟酮（1000 mg/天 × 5 天，每月重複）或匹配安慰劑 × 12 個月
- **主要終點：** [[Epigenetic Aging|Epigenetic age]]（GrimAge、DunedinPACE）、衰弱指數
- **次要終點：** 認知功能（MoCA、數字廣度）、血漿 SASP 面板、COMT 活性（血漿多巴胺/甲氧基酪胺）、非瑟酮/geraldol PK、安全性（肝功能、[[Homocysteine]]）
- **探索性：** 周邊免疫細胞單細胞轉錄組學（衰老標記）、腦部 MRI（若可行）

---

## 風險評估與緩解

| 風險 | 可能性 | 影響 | 緩解 |
|------|-----------|--------|------------|
| 衰老溶解劑量的非瑟酮未達到 COMT 抑制性腦部水平 | 中 | 高 | 於第二階段直接測量腦部非瑟酮；考慮鼻內給藥 |
| 非瑟酮 COMT 抑制於慢速 COMT 個體造成兒茶酚胺過量 | 低–中 | 中 | 所有臨床試驗依基因型分層；初期將 Met/Met 排除於高劑量組 |
| 慢性非瑟酮甲基化造成的 SAMe 耗竭 | 低 | 中 | 監測第二與第三階段的 SAMe:SAH 比值；必要時補充甲基供體 |
| Geraldol 具有不利活性概況 | 未知 | 中 | 獨立表徵 geraldol（實驗 1.3） |
| 非瑟酮的衰老溶解與 COMT 效應在藥理上獨立（無協同） | 中 | 低 | 這實際上具參考價值；將解耦兩機制以利優化 |

---

## 需立即關注的文獻缺口

- **無非瑟酮體內調節腦部 COMT 活性的直接測量。** 所有既有 COMT 抑制數據皆為體外。這是單一最關鍵的缺口。

- **[[Geraldol]] 藥理學本質上未被表徵。** 非瑟酮的 COMT 生成代謝物無已發表的 COMT 抑制、衰老溶解活性或受體結合數據。

- **無臨床試驗依 COMT 基因型對非瑟酮結果分層。** 考量 COMT 活性跨基因型差異達 3–4 倍，這是明顯的疏漏。

- **慢性非瑟酮補充的 [[SAMe]]/[[SAH]] 動力學未受研究。** 由於非瑟酮是 COMT 受質，慢性給藥可能影響系統性甲基化能力——對老化中的表觀遺傳維護至關重要。

- **非瑟酮對體內兒茶酚 [[Estrogen]] 代謝的效應未知。** COMT 介導兒茶酚雌激素 O-甲基化的體外抑制（Zhu 等人 2004）尚未有體內研究跟進。這對激素敏感癌症風險有意涵。

- **COMT 抑制 vs. 衰老溶解活性的劑量反應尚未建立。** 非瑟酮在何濃度有意義地抑制 COMT？這低於、等於或高於衰老溶解閾值？兩種活性可能在不同濃度範圍運作。

---

## 結論

非瑟酮是合法的 [[COMT Inhibitors|COMT 抑制劑]] 與 COMT 受質，具有中等效價（IC₅₀ ~3–6 µM）。其藥理概況獨特地二分：

- **低濃度（nM）：** 主要作為 COMT 受質（經歷 O-甲基化為 [[Geraldol]]）
- **中間濃度（低 µM）：** 混合型 COMT 抑制併 [[Monoamine oxidase|MAO-A]] 抑制
- **較高濃度（中 µM）：** 透過 [[Bcl-2]]/[[Bcl-xL]] 抑制的衰老溶解活性

COMT 抑制與衰老溶解濃度範圍的重疊不確定，且可能依細胞類型與組織而定。當前證據不支持「膳食非瑟酮補充在體內產生有意義 COMT 抑制」的結論，但此假說未被充分檢測，特別是搭配增強生物可用率製劑或於衰老溶解給藥方案下。

> [!TIP]
> **底線**
> 非瑟酮值得作為雙重 COMT 調節劑與 [[Senolytic|senolytic]] 研究，但 COMT 軸在長壽文獻中幾乎完全被忽略。在對非瑟酮健康span 效益的任何 COMT 相關機制主張提出之前，必須進行系統性的藥物基因體研究——從依 COMT 基因型分層並直接測量腦部 COMT 活性的小鼠研究開始。

---

## 參考文獻（選錄）

- Paudel YN 等人（2019）。Evaluation of Selected Natural Compounds as Dual Inhibitors of COMT and MAO. PMID: 31258092
- Zhu BT 等人（2004）。Strong Inhibitory Effects of Tea Catechins and Bioflavonoids on COMT-Mediated O-Methylation of Catechol Estrogens. Drug Metab Dispos 32:497.
- Poor M 等人（2016）。Structure related effects of flavonoid aglycones on cell cycle progression of HepG2 cells: metabolic activation of fisetin and quercetin by COMT. Biomed Pharmacother 83:998–1005.
- Yousefzadeh MJ 等人（2018）。Fisetin is a senotherapeutic that extends health and lifespan. EBioMedicine 36:18–28.
- Murray K 等人（2025）。Intermittent Supplementation With Fisetin Improves Physical Function and Decreases Cellular Senescence in Skeletal Muscle With Aging. Aging Cell. PMID: 40093023
- Mahoney S 等人（2025）。Senolytic treatment with fisetin reverses age-related endothelial dysfunction partially mediated by SASP factor CXCL12. PMID: 40894771
- Ji XM 等人（2025）。Fisetin Clears Senescent Cells Through the Pi3k-Akt-Bcl-2/Bcl-xl Pathway. Pharm Res. PMID: 38789909
- PMC11914956. Fisetin as a Blueprint for Senotherapeutic Agents – Elucidating Geroprotective and Senolytic Properties with Molecular Modeling.
- Krishnakumar IM 等人（2022）。Enhanced bioavailability and pharmacokinetics of a novel hybrid-hydrogel formulation of fisetin. J Nutr Sci 11:e72.
- Zhu BT 等人（2010）。O-Methylation of Catechol Estrogens by Human Placental COMT: Interindividual Differences. Drug Metab Dispos.

---

## 文件

- [[_document_ - Fisetin—In Search of Better Bioavailability—From Macro to Nano Modifications A Review|Fisetin Bioavailability Review]]
  - 涵蓋克服非瑟酮極差口服生物可用率的奈米遞送策略；與達成 COMT 抑制性血漿濃度相關。
- [[_document_ - COMT How to Optimize Your Supplements for Your COMT Genotype|COMT Genotype Supplement Optimization]]
  - 討論依 COMT 基因型的補充劑交互作用，包含非瑟酮作為 COMT 抑制劑。
- [[_document_ - Fisetin is a senotherapeutic that extends health and lifespan|Fisetin Senotherapeutic & Lifespan]]
  - 建立非瑟酮作為最強效黃酮類衰老溶解劑的主要效力研究；老年小鼠的壽命延長。

## 連結

- [[COMT]]：主要酵素標的；非瑟酮是經驗證的受質-抑制劑，具混合型動力學
- [[Fisetin]]：具雙重衰老溶解–COMT 藥理的母化合物
- [[Geraldol]]：非瑟酮經 COMT 生成的活性代謝物；藥理未表徵
- [[Val158Met]]：決定 COMT 活性與非瑟酮反應的關鍵基因型修飾因子
- [[Dopamine]]：PFC 中主要 COMT 受質；非瑟酮介導的抑制可增強多巴胺張力
- [[Bcl-2]] / [[Bcl-xL]]：非瑟酮衰老溶解機制標靶的抗凋亡蛋白
- [[SASP]]：被非瑟酮抑制的衰老相關分泌表型
- [[SAMe]] / [[SAH]]：非瑟酮 O-甲基化期間消耗/生成的甲基化輔因子
- [[Estrogen]]：受 COMT 抑制調節的兒茶酚雌激素代謝
- [[PI3K]]-[[Akt]]：非瑟酮於衰老細胞中抑制的訊號路徑
- [[AMPK]] / [[mTOR]] / [[NRF2]]：非瑟酮網絡藥理概況中的長壽路徑
- [[Senolytic]]：非瑟酮的主要治療分類
- [[Parkinson's Disease]]：與 COMT 抑制潛在的 L-DOPA 協同
- [[Epigenetic Aging]]：提出的臨床試驗中的主要終點

## 連結摘要

- 新增連結：[[COMT]]、[[Fisetin]]、[[Geraldol]]、[[Val158Met]]、[[Dopamine]]、[[Catecholamines]]、[[Epinephrine]]、[[Norepinephrine]]、[[Bcl-2]]、[[Bcl-xL]]、[[PI3K]]、[[Akt]]、[[SASP]]、[[CXCL12]]、[[IL-6]]、[[IL-8]]、[[MMP-3]]、[[SAMe]]、[[SAH]]、[[Estrogen]]、[[Flavonoid]]、[[Flavonol]]、[[Quercetin]]、[[Catechin]]、[[EGCG]]、[[AMPK]]、[[mTOR]]、[[NRF2]]、[[NF-κB]]、[[p21]]、[[p16]]、[[Caspase-3]]、[[Etoposide]]、[[Endothelial Cells]]、[[Frailty]]、[[Epigenetic Aging]]、[[Homocysteine]]、[[Blood-Brain Barrier]]、[[SNEDDS]]、[[Nanoparticles]]、[[Bioavailability]]、[[Michaelis-Menten Kinetics]]、[[MMP-3]]、[[Parkinson's Disease]]、[[Levodopa]]、[[Monoamine oxidase]]、[[Aminochromes]]、[[IC50]]、[[Senolytic]]、[[Senescent Cells]]、[[Apoptosis]]、[[Prefrontal Cortex]]、[[Catechol-O-methyltransferase]]
- 建議新建實體筆記：[[Bcl-xL]]、[[Entacapone]]、[[Tolcapone]]、[[Opicapone]]、[[Senolytic Dosing Protocol]]
- 待加強的強連結：
  - [[Fisetin]] ↔ [[COMT]] — 具濃度依賴藥理的受質-抑制劑關係
  - [[Fisetin]] ↔ [[Geraldol]] — 代謝母-子關係；geraldol 藥理未表徵
  - [[COMT]] ↔ [[Val158Met]] ↔ [[Fisetin]] — 基因型分層反應假說
  - [[Fisetin]] ↔ [[Bcl-2]] / [[Bcl-xL]] — 經由抗凋亡蛋白結合的衰老溶解機制
  - [[SAMe]] ↔ [[SAH]] ↔ [[Fisetin]] — 非瑟酮代謝期間的甲基化輔因子動力學
