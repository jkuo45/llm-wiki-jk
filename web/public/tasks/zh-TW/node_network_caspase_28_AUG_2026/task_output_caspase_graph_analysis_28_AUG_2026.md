---
title: Caspases — 圖譜分析（wiki + triples）＋文獻綜述
description: 在合併的 triples+wiki 圖譜上對全部 caspase 節點的多指標網絡分析（來源：13 個 caspase 實體；標的：細胞死亡、衰老與凋亡調控錨點），含逐層分解，並附 caspase 分類、受質、老化生物學與藥理學的文獻研究深究。
created: 2026-08-28
source: tasks/node_network_caspase_28_AUG_2026/task_output_caspase_graph_analysis_28_AUG_2026.md
author: []
tags:
  - task-output
  - caspases
  - apoptosis
  - pyroptosis
  - network-analysis
  - inflammaging
  - senescence
updated: 2026-08-28
---
# 任務輸出 — Caspase 網絡深究 — 2026年8月28日

**範圍：** 對知識庫中 caspase 家族的深究。兩個部分：
1. **網絡分析** — 多指標（分層分解、社群偵測、中心性、角色分類、路徑結構、個人化 PageRank、連結預測），在**合併圖譜**（`web/public/data/nodes.json` / `edges.json`，4,084 節點 / 31,842 邊——triples ∪ wiki 的正典聯集，逐邊標記來源層）上，以 13 個 caspase 來源 × 15 個標的錨點（細胞死亡模式、衰老樞紐、凋亡機械）進行。本目錄的原始輸出：`raw_caspases_combined_graph.txt`、`raw_caspases_wiki_graph_node.txt`、`raw_caspases_wiki_graph_link_prediction.txt`；角色來自 `web/public/data/node_roles.json`。
2. **文獻深究** — 補充圖譜之外的既有與新興 caspase 生物學（分類、活化平台、受質、老化、藥理學）。

圖譜模式說明：全篇以**合併圖譜為主要受質**；僅 wiki 或僅 triples 的數字在有差異處以分層分解呈現。triples 層對 caspases 的代表性嚴重不足（Caspase-1/4/12 與 Executioner Caspase 在該層度數僅 0–1），因此合併視圖才能讓家族分析站得住腳——並揭露僅看 wiki 層會隱藏的邊（見 §1.1）。

---

## 第一部分 — 網絡分析發現

### 1.1 結構地圖：兩個社群、一個家族

Louvain 社群偵測恰好沿著 caspases 的生物學分類邊界切開：

| 社群 | 成員 | Caspases |
| --- | --- | --- |
| c16 **Apoptosis**（57 節點） | Apoptosis、Caspase、Executioner Caspase、Apoptosome、XIAP | Caspase-2、-3、-6、-7、-8、-9、-10、-12 |
| c22 **Inflammaging**（54 節點） | Pyroptosis、Inflammasome、Gasdermin D | Caspase-1、-4、-5、-11 |

起始者／執行者之分在 c16 內部*並未*再細分——外源（CASP-8/10）、內源（CASP-9）與執行者（CASP-3/6/7）caspases 同屬一個社群，正確反映 wiki 將凋亡視為一個緊密互連的模組（CASP-3/8/9 的 k-core 為 15–16）。

**Caspase-2 在 wiki 層是離群值**：它落在一個微小的「Phosphorylation」社群（id 49，規模 19），而非凋亡模組。合併圖譜修正了這個圖像——見 §1.1b。

合併資料集自帶的社群標籤（合併時優先採用 triples 層後設資料）切得更細：**Caspase-2/7/10/12/Caspase 自成一個「Caspase-2」社群**，Caspase-1/11 與 Pyroptosis/Inflammasome 一起歸入「Senescent Cells」，只有 Caspase-3/6/9 與 Apoptosome/XIAP 位於「Apoptosis」。無論哪種切法，「死亡程序 vs 發炎楔形」的兩區塊家族結構在三種視圖中都穩定存在。

### 1.1b 分層分解：triples 層補足了什麼

合併聯集上的逐節點度數分解（T = triples 邊，W = wiki 邊）：

| Caspase | triples 度 | wiki 度 | 合併度 | 合併社群 |
| --- | --- | --- | --- | --- |
| Caspase-3 | 7 | 50 | **57** | Apoptosis |
| Caspase-8 | 4 | 37 | **41** | Caspase-8 |
| Caspase-9 | 7 | 30 | **37** | Apoptosis |
| Caspase-7 | 1 | 21 | **22** | Caspase-2 |
| Caspase-2 | 4 | 10 | **14** | Caspase-2 |
| Caspase-10 | 2 | 12 | **14** | Caspase-2 |
| Caspases | 2 | 16 | **18** | Apoptosis |
| Caspase-6 | 3 | 9 | **12** | Apoptosis |
| Caspase-1 | 1 | 24 | **25** | Senescent Cells |
| Caspase-5 / -11 | 2 / 1 | 8 / 9 | **10 / 10** | Paracrine Senescence / Senescent Cells |
| Caspase-4、Caspase-12、Executioner Caspase | 0–0–0 | 10 / 6 / 10 | **10** | Inflammaging / Caspase-2 / Apoptosis |

（合併規則對共享節點優先採用 triples 層的社群標籤，因此例如 Caspase-1 帶著其 triples 指派的「Senescent Cells」——§1.1 的 wiki Inflammaging 楔形在拓撲上不變。）

**只有合併視圖看得到的邊**（T 標記，wiki 層缺席）：

- **`Caspase-2 → PIDDosome / PIDD / RAIDD`（各為度 2）與 `→ CDK1`** —— PIDDosome 活化軸**確實存在於知識庫中，但只在 triples 層**。Caspase-2 在 wiki 層的社群離群因此是*分層假象*，不是知識缺漏（此點修訂 §1.1 的僅 wiki 發現）。
- `Caspase-9 → c-ABL / ERK / Akt`、`Caspase-8 → SHP1 / SRC/LYN kinases`、`Caspase-3 → Ivermectin / melittin`（重新定位藥物群）、`Caspase-6 → Lamins` —— 磷酸化／激酶接線是 triples 層的獨特貢獻。
- `Caspase-1 / -11 / -5 → Inflammasome / Noncanonical Inflammasome / IL-1α` —— 僅有的 triples 層 inflammasome 邊；CASP-1 在該層只有度 1。

**要點：** triples 層貢獻 caspases 的*調控／激酶與 inflammasome 支架*邊；wiki 層貢獻*死亡程序*邊。任何只用單一層的 caspase 分析都會系統性地漏掉一半的故事——例如僅 wiki 的運行會誤報「沒有 PIDDosome」。

### 1.2 中心性、k-core 巢套與生物學角色

角色類別來自知識庫的逐節點分類器（`scripts/_node_roles_lib.py`）；角色在 triples 層計算，因此角色的*類別*（而非量級）才是訊號——請與下方中心性層級一併解讀。出處說明：合併資料集*內建*的 degree/PageRank/k-core 欄位承載 triples 層的數值（合併時優先 triples 後設資料），因此此處的度數欄是真正的合併聯集（§1.1b），而 PageRank/k-core 是分層產物——`raw_caspases_combined_graph.txt` 中的聯集重算確認了同樣的排序：

| Caspase | 度 | k-core | 角色 | 解讀 |
| --- | --- | --- | --- | --- |
| **Caspase-3** | 57 | 16 | **Sink**、Bottleneck | 家族中最高度數、PageRank 最高（0.00129）——家族樞紐；萬物匯入的終端拆解蛋白酶 |
| **Caspase-8** | 41 | 15 | **Sink、Master regulator、Bottleneck** | 最高出度（30）；唯一被評為主調控者的 caspase——整個家族匯流的死亡受體收斂點 |
| **Caspase-9** | 37 | 15 | **Sink**、Bottleneck | PageRank 僅次於 CASP-3（0.00120）；apoptosome 錨點，內源臂上與 CASP-3 相同的 Sink 簽名 |
| Caspase-1 | 25 | 13 | Periphery | 發炎側的錨點；*Periphery* 反映其度 1 的 triples 殘段——triples 層最大的 caspase 盲點（合併度 25） |
| Caspase-7 | 22 | 12 | Spreader | 嵌在凋亡核心中 |
| Caspase-2 | 14 | 10 | Bottleneck | 小而非冗餘的連接器——合併圖譜還原了它的 PIDDosome 軸（§1.1b），與其 DDR 定位一致 |
| Caspases | 18 | 12 | Spreader | 外向的定義性樞紐 |
| Caspase-10 | 14 | 10 | Spreader、Bottleneck | 廣播多於接收（與其偏弱的 Adamic-Adar 表現一致） |
| Caspase-5 / -11 / -4 | 10 | 10 | Spreader (5)、Periphery (11)、Spreader+Module (4) | 近重複（兩兩 Jaccard 0.82）——非典型 inflammasome 三人組是同一塊語境 |
| Caspase-6 | 12 | 9 | Spreader | 執行者臂的邊緣 |
| Caspase-12 | 6 | 5 | Spreader | 圖譜中最弱的 caspase |

**Caspase-4/5/11 的 Jaccard = 0.818** —— 整個來源集合中最高的冗餘度。三者的筆記在連結拓撲上可以互換；若未來要整併，這三者是天然的 `_link/` 式合併候選（不過保留各自獨立筆記在生物學上也站得住腳：4/5 為人類、11 為小鼠直系同源）。

**跨層一致性：** CASP-8/3/9 在兩層的指標中都是承重脊柱，而 CASP-1——發炎老化的旗艦——則是 triples 層近乎缺席的 `_triples.json` 接線所造成的產物。任何 triples 重建都應優先補強 inflammasome 楔形。

### 1.3 最短路徑結構：誰橋接到誰

在**合併巨型連通分量**（3,839 節點）上計算；路由與 wiki 層一致——triples 層新增的 caspase 邊都落在以下最短路徑之外。

- **Caspase-1 → Pyroptosis / Inflammasome**：直接一跳（其主場）。抵達 **Ferroptosis** 需要經過約 20 個橋接節點的 81 條不同最短路徑（NLRP3 Inflammasome、IL-1β/IL-18、AIM2、Cardiolipin、MCC950…），而抵達 **Cellular Senescence** 只經 5 個橋接（Inflammaging、Inflammation、Paracrine Senescence、Idiopathic Pulmonary Fibrosis、Drosha）。稀疏的衰老橋接集是真正的圖譜發現：**CASP-1 與衰老的連結幾乎完全由發炎老化的敘事所中介**，而非直接的分子連結。
- **Caspase-3/8/9 → Apoptosis**：合併 Adamic-Adar 親近度主導（CASP-3 15.9、CASP-8 12.3、CASP-9 10.7、CASP-7 6.6）——死亡模組的脊柱覆蓋良好，且聯集把 CASP-3 *推上*首位（triples 層的激酶邊強化了其共享鄰居重疊）。
- **最弱的凋亡接線**：Caspase-12（AA 1.94，與 inflammasome/pyroptosis 完全沒有親近度）；Caspase-10（AA 4.3 但度數低，與 CASP-8 的 Jaccard 僅 0.26）。
- **Caspase-2 在合併圖上最強的錨點是 Apoptosis 本身（AA 4.18）** —— 領先 p53（1.38）與 SASP（0.33）。攜帶其 PIDDosome/CDK1 邊的聯集確認 CASP-2 屬於死亡程序；缺的是通往 Apoptosis 的直接邊——這是缺陷，不是生物學問題。

### 1.4 跨模式的死亡路徑（以各標的為種子的 PPR 流量）

在**合併巨型連通分量**上的個人化 PageRank 顯示，每種死亡模式把「行走質量」流向哪些 caspases：

| 種子節點 | 領先 caspases（排名 / 分數） | 解讀 |
| --- | --- | --- |
| Pyroptosis | **CASP-1 #5 (0.0095)**、CASP-4 #10、CASP-11 #11、CASP-5 #12 | 乾淨的發炎性 caspase 簽名 |
| Inflammasome | CASP-1 #7 (0.0075)、CASP-4 #16、CASP-11 #18、CASP-5 #19 | 同一楔形 |
| Apoptosis | CASP-3 #22 (0.0023)、CASP-8 #29、CASP-9 #47 | 乾淨的凋亡簽名；CASP-4/5/11 沉降至約 #1400 名之外 |
| Necroptosis | **CASP-8 #25 (0.0029)** | 正確——CASP-8 是已知的 necroptosis 守門者（抑制 RIPK1/RIPK3）；漂亮的湧現捕捉 |
| Gasdermin D | CASP-4 #7 (0.0148)、CASP-11 #8、CASP-5 #9、CASP-1 #16 | GSDMD 切割夥伴正確分組 |
| Apoptosome / XIAP / Executioner Caspase | CASP-3 #3、CASP-7 #5–8、CASP-9 #5–6 | 內源路徑機械被完整還原 |
| Ferroptosis | 所有 caspases 排名 #286–2167 | **沒有任何 caspase 擁有 ferroptosis** —— 正確（鐵死亡不依賴 caspase），但文獻中 CASP-8/GSDMD/caspase-3 促進鐵死亡的段落是覆蓋缺口 |
| Senescence / SASP / Autophagy | 所有 caspases 排名 #278–2167，最佳始終是 CASP-3（#278/#411/#455） | **衰老–caspase 連結是圖譜最弱的區域** |

合併圖的排名與 wiki 層運行相差僅數名——結論對分層穩健；聯集的新增邊只會強化分數，不會重排名次。

### 1.5 預測的缺失連結（連結預測）

對非相鄰節點對計算 Adamic-Adar，來自互補的視角：正典產物（`04_link_prediction.py` → `web/public/data/link-prediction.json`，triples 層的全球前 150 對）、wiki 層掃描（`raw_caspases_wiki_graph_link_prediction.txt`），以及**主要的合併圖掃描**（`raw_caspases_combined_graph.txt`，完整逐 caspase 清單）。以下回報合併聯集分數（完整流程運行：`raw_caspases_combined_graph.txt`）；它們吸收了 wiki 層的數字（例如 wiki 掃描的 CASP-3→Senescence 0.54 在聯集上成為 0.52（12），CASP-1→SASP 0.69（13）不變）。完整合併運行還補上了分層運行看不到的頭條：**Caspase-3 → Apoptosis AA 15.9 —— 全圖最高的 caspase–標的親近度**。

**來自正典產物**（僅 4 個含 caspase 的對擠進前 150 名）：

1. **Caspase-3 ↔ Caspase-6**（AA 2.31，共享：Caspase-9/8、Lamins）—— 真實生物學；CASP-6 由 CASP-3 活化並切割 Lamins
2. **Inhibitor of Apoptosis Proteins ↔ XIAP**（AA 2.08）—— XIAP 是 IAP 家族原型；值得一條 `is_member_of` 邊
3. **Cancer ↔ Caspase-3**（AA 1.82，跨社群）—— 以及 **Ivermectin ↔ melittin**（AA 2.00，跨社群；兩者都是 CASP-3 在合併圖上的直接鄰居）—— 癌症重新定位群再次指向 caspase-3 介導的凋亡作為其機制橋樑

**來自合併圖掃描**，經文獻裁決後最可行的預測：

| 預測 | AA（共享） | 裁決 |
| --- | --- | --- |
| **Caspase-9 → Cancer** | 0.90 (16) | 全圖最強的 caspase 預測；臨床相關性完全由傳遞路徑承載（見下方跨切模式）。 |
| **Caspase-3 → Cancer / Chemotherapy** | 0.82 (20) / 0.60 (10) | 強——榜首未連結鄰居；整併邊候選。 |
| **Caspase-2 → Apoptosis** | 0.82 (11) | 強。CASP-2 的凋亡／DDR 角色有文獻支持；它缺的是通往 Apoptosis 的直接邊——是正規化缺陷，不是知識缺漏。 |
| **Caspase-1 → SASP** | 0.69 (13) | **強。** CASP-1 是核心的 SASP 擴大器（IL-1β→NF-κB）。目前只經 Inflammaging 傳遞連結。 |
| **Caspase-3 → 氧化壓力 / 衰老 / NF-κB** | 0.53 (14) / 0.52 (12) / 0.46 (15) | **強。** CASP-3 的非凋亡性衰老強化角色（Tang 2012，PMID 22863278）；ROS–caspase 放大迴路文獻充分。直接填補下方缺口 (4)。 |
| **Caspase-9 → BAX / Bim / Bad** | 0.33/0.30/0.31 (9–13) | 內源臂缺少通往 BCL-2 家族的顯式上游接線；BH3 類似物（ABT-263）senolytic 路徑應由此經過。 |
| **Caspase-8 → BH3 mimetics / Dasatinib** | 0.24 / 0.23 | Senolytic 邊候選：D+Q 重新接通 CASP-8/3；dasatinib 是等待直接連結的圖譜鄰居。 |
| **Caspase-10 → TRAIL** | 0.44 (9) | TRAIL-R/DISC 生物學；CASP-10 是 TRAIL 路徑的起始者——竟未被直接引用。 |
| **Caspase-12 → Unfolded Protein Response** | 0.12 (3) | 分數低但屬教科書級 ER 壓力 caspase；連向圖上已存在的 UPR 節點。 |
| **Caspase-4/5/11 → NLRP3 Inflammasome、IL-18、cGAS-STING** | 0.17/0.15/0.14 | 三人組的上游感測器（NLRP3、cGAS-STING→非典型引動）與 IL-18 受質皆共享鄰居豐富但未連結。 |
| **Caspase-1 → Canakinumab / Anakinra** | 0.15 / 0.14 | 治療臂：IL-1β/IL-1R 阻斷劑（CANTOS 語境）已存在為節點，但與其標的路徑效應蛋白酶沒有邊。 |

跨切模式：**「Cancer」與「Chemotherapy」同時是 CASP-2、-3、-8、-9 的榜首未連結鄰居**（CASP-9→Cancer AA 0.90 是合併 caspase 掃描中最強的單一分數）——凋亡執行臂的臨床相關性完全由傳遞路徑承載。加入 `Caspase-3 --executes--> Cancer cell death` / `Chemotherapy --activates--> Caspase-9/3` 類型的邊，能把四條弱分數路徑整併成一個有證據支持的模組。

### 1.6 圖譜缺口（候選增補標的）

1. **PIDDosome 只存在於 triples 層** —— `Caspase-2 → PIDDosome/PIDD/RAIDD` 軸存在於該層（§1.1b），但 wiki 層沒有代表；任何僅 wiki 的視圖都會誤報其缺席。wiki 筆記應交叉連結此軸。
2. **沒有 Caspase-14 節點** —— 表皮分化 caspase 完全缺席。
3. **鐵死亡–caspase 交叉對話缺失**：文獻支持的邊（CASP-8 經抑制性磷酸化情境促進鐵死亡；CASP-3 切割 GSDME 將凋亡轉為焦亡並調控鐵死亡）皆未收錄。**Gasdermin E** 沒有節點。
4. **衰老橋接僅停在敘事層級**（Inflammaging、Paracrine Senescence）——CASP-3→GSDME、CASP-1→IL-1α（非典型 SASP 驅動者）、CASP-8/RIPK1 衰老出口等分子橋接缺席。
5. **衰老細胞的凋亡抗性** —— BCL-2/BCL-xL/ABT-263（navitoclax）senolytic 臂存在（Bcl-2 family 節點，k-core 15），但與 caspases **拓撲上不連通**（CASP-4/5/11 vs Bcl-2 family 的 Jaccard = 0.000；CASP-3 對 Bcl-2 family 的 AA 很低）。senolytic 重新接通凋亡的故事沒有被接成邊路徑。
6. **Caspase-3 (at Ser150)** 在 triples 圖中以度 1 殘段存在（PAK2 磷酸化失活語境）—— 正規化候選。

### 1.7 增補佇列（按文獻支持 × 圖譜影響排序）

1. `Caspase-2 → Apoptosis` 直接連結（修復離群相鄰缺陷）
2. `Caspase-3 ↔ Cellular Senescence`（非凋亡角色；PMID 22863278）
3. `Caspase-1 → SASP`（IL-1β/NF-κB 擴大器；PMID 23562091）
4. 內源臂的 BCL-2 家族接線：`Caspase-9 → BAX/Bim/Bad`、`BH3 mimetics → Caspase-9`（senolytic 橋樑）
5. `Caspase-8 → Necroptosis`（RIPK1 守門者——PPR 已偵測到，卻沒有邊陳述它）
6. 非典型三人組上游：`NLRP3 / cGAS-STING → Caspase-4/5/11`、`Caspase-1 → IL-18`
7. 新實體：Gasdermin E、Caspase-14（PIDDosome 已存在於 triples 層——改為從 wiki 的 Caspase-2 筆記交叉連結）
8. 治療邊：Canakinumab/Anakinra → IL-1β 軸；Dasatinib → Caspase-8

---

## 第二部分 — 文獻深究：Caspases

### 2.1 分類

14 個人類 caspases（半胱胺酸—天門冬胺酸蛋白酶，CASP1–CASP14）按功能與序列同源性分組：

- **起始者** —— CASP-8、-9、-10、-2。長的 N 端前驅結構域把它們招募到活化平台；活化靠誘導接近的**二聚化**，而非蛋白酶解。
- **執行者** —— CASP-3、-6、-7。短前驅結構域、非活性酶原二聚體；由起始者切割其間域連結子而活化。
- **發炎性** —— CASP-1、-4、-5、-11（小鼠 11 為人類 4/5 的直系同源）、-12。CASP-12 在多數人類中為截斷假基因衍生，並負調控 CASP-1。
- **CASP-14** —— 表皮分化；既非凋亡也非發炎。

### 2.2 結構域與活化平台

保守架構：前驅結構域（CASP-1/2/4/5/9/12 為 CARD；CASP-8/10 為 DED；執行者皆無）＋大（p20）＋小（p10）催化次單元；活性酶為 (p20/p10)₂ 異四聚體。

1. **Apoptosome**（內源）：Cytochrome c + Apaf-1 + dATP → 七聚體平台 → 以 CARD–CARD 招募 pro-CASP-9（Li et al. 2000，PMID 10529249；Riedl & Salvesen 2007，PMID 17344876）。
2. **DISC**（外源）：死亡受體（FasL/TRAIL/TNF-α）→ FADD → pro-CASP-8/10 的 DED 聚集；第二型細胞經 CASP-8 切割 Bid 放大（Li et al. 1998，PMID 9808642）。
3. **Inflammasomes**：NLRP3/NLRP1/NLRC4/AIM2/pyrin + ASC → pro-CASP-1；**非典型**的 CASP-4/5/11 藉 CARD 直接結合細胞質 LPS（Shi et al. 2014，PMID 25043016）。

**調控：** XIAP 抑制 CASP-3/-7/-9；粒線體釋出的 Smac/DIABLO 中和 XIAP；病毒 serpins CrmA/SPI-2 標的 CASP-1/-8。

### 2.3 關鍵受質

| 受質 | Caspase | 後果 |
| --- | --- | --- |
| Bid | CASP-8 | tBid → MOMP，內源放大 |
| PARP1 | CASP-3/-7 | 89 kDa 片段；DNA 修復失效；凋亡標記（PMID 8168123） |
| Gasdermin D | CASP-1/4/5/11 | GSDMD-N 成孔 → 細胞焦亡（PMID 26375003） |
| Pro-IL-1β / Pro-IL-18 | CASP-1 | 細胞激素成熟 |
| ROCK1 | CASP-3 | 起泡／凋亡小體（PMID 11792848） |
| Tau | CASP-6（-3） | D402 截斷，阿茲海默聚集體（PMID 29398122） |
| ICAD | CASP-3 | 釋出 CAD → DNA 片段化 |
| Lamin A/B、gelsolin | CASP-3/6 | 細胞骨架／細胞核崩解 |
| p62/SQSTM1、Beclin-1 | CASP-3/-8/-2 | 凋亡–自噬交叉對話 |

> [!info] 受質空間
> N 端蛋白體學已編錄 1,000+ 個 caspase 受質（Mahrus et al. 2008，PMID 18636095；CASBAH 資料庫）。執行者的非典型角色（CASP-3 參與巨噬細胞替代活化、肌母細胞分化）持續浮現。

### 2.4 老化生物學中的 caspases

**衰老細胞的凋亡抗性** —— 衰老細胞上調 BCL-2/BCL-xL/BCL-W、下調 Bim/Puma/Noxa，並呈現鈍化的 CASP-8/3 活化；senolytics（dasatinib+quercetin、navitoclax/ABT-263）部分正是靠重新接通這套機械起效（de Keizer 2017，PMID 28266040）。*圖譜呼應：§1.6(5) —— 這條軸即使在合併圖上也未接線。*

**CASP-3 / 衰老** —— CASP-3 在癌基因誘導衰老早期被活化，發揮非凋亡性的衰老強化功能（Tang et al. 2012，PMID 22863278）；仍有爭議、仍在研究中。這與 CASP-3 是*唯一*對 Senescence/SASP/Autophagy 有非平凡 PPR 流量的 caspase（§1.4）相符。

**CASP-1 / NLRP3 / 發炎老化** —— NLRP3→CASP-1→IL-1β 訊號隨年齡增強，驅動發炎老化與免疫衰老（Youm et al. 2013，PMID 23562091）、動脈粥狀硬化（PMID 31153200）、代謝衰退（PMID 21802169）與阿茲海默病理（Heneka et al. 2013，PMID 23233273）。CASP-1 經 IL-1β→NF-κB→IL-6/IL-8 成為核心的 SASP 擴大器。*圖譜呼應：c22「Inflammaging」社群正是這塊楔形。*

**CASP-2** —— 真正的腫瘤抑制者（基因敲除小鼠：中心體過剩、非整倍性、致癌物敏感的腫瘤發生）；切割 Beclin-1，串起腫瘤抑制、自噬抑制與凋亡；並涉及卵母細胞流失與 p53 上游的 DDR（PMID 19339967、31209125、22940864）。*圖譜呼應：其離群社群狀態（§1.1）是 wiki 層假象，但 p53/SASP 相鄰性（§1.3）是正確的擴充方向。*

**CASP-14** —— 角質細胞分化、filaggrin 加工、UVB 防護（PMID 17481861）；在老化／光老化皮膚中減少（標記或驅動未定）。知識庫中缺席。

### 2.5 藥理學

| 藥劑 | 標的 | 狀態 |
| --- | --- | --- |
| **Emricasan（IDN-6556）** | 泛 caspase | 臨床進展最深；NASH 纖維化的 Phase 2b ENCORE-NFH **未達主要終點**；無核准適應症 |
| **VX-765（belnacasan）** | CASP-1/4 | Phase 2（癲癇、類風濕性關節炎、乾癬；近期拓展 CNS 適應症）；未核准 |
| **Pralnacasan（VX-740）** | CASP-1 | 已中止（藥動／安全性） |
| Z-VAD-FMK、Ac-YVAD-CMK | 泛 / CASP-1 | 僅限研究工具（脫靶含 calpain） |
| MCC950、dapansutrile（OLT1177） | NLRP3（上游） | 間接調控 CASP-1；dapansutrile 進入 Phase 2（骨關節炎、心衰竭） |
| Disulfiram、necrosulfonamide | GSDMD | caspase 下游的焦亡阻斷劑 |
| Navitoclax / D+Q senolytics | BCL-2 家族 | 間接恢復衰老細胞中 caspase-3/8 的敏感性 |

> [!important] 轉譯缺口
> **截至 2026 年，沒有任何 caspase 抑制劑取得藥證。** 泛 caspase 抑制可能同時削弱受損細胞的凋亡清除；臨床上最活躍的戰場是 NLRP3/inflammasome 調控，而非直接標靶 caspase。「senolytic 重新活化 caspase」仍是願景，不是已實現的藥理學。

### 2.6 關鍵結論

1. Caspases 不只是死亡蛋白酶——發炎（1/4/5/11）、分化（14）、腫瘤抑制（2）與衰老調控（3）皆有角色。
2. 活化由平台支架決定（apoptosome/DISC/inflammasome）——平台身分決定結局。
3. 老化生物學在三條軸上與 caspase 糾纏：CASP-1 發炎老化、CASP-2 基因體穩定、衰老細胞的凋亡抗性。
4. 合併圖譜忠實重現家族的兩社群結構與 pyroptosis/necroptosis/apoptosis 的角色指派，但在 CASP-14、GSDME、鐵死亡交叉對話與 senolytic BCL-2↔caspase 軸上偏薄——這些都是具體的增補標的（§1.6–1.7）。PIDDosome 軸存在，但只在 triples 層（§1.6(1)）。

---

## 方法

所有指標都在**合併圖譜**（`web/public/data/nodes.json` / `edges.json`，triples ∪ wiki 的正典聯集，逐邊標記來源層——整個 `scripts/04_` 系列的 schema 相容輸入）上計算；wiki 層與 triples 層的數字在有差異處以分解形式呈現：

```bash
# 多指標 來源×標的 分析（最短路徑多重性、鄰居 Jaccard/簽名、
# Adamic-Adar、k-core、光譜、有效電阻、個人化 PageRank）
# —— 完整原始輸出：raw_caspases_combined_graph.txt（合併聯集）與
# raw_caspases_wiki_graph_node.txt（wiki 層）
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --graph <序列化為 graph.json schema 的合併聯集> \
  --sources caspase_1 caspase_2 caspase_3 caspase_4 caspase_5 caspase_6 \
            caspase_7 caspase_8 caspase_9 caspase_10 caspase_11 caspase_12 caspases \
  --targets apoptosis pyroptosis necroptosis inflammasome ferroptosis senescence \
            sasp p53 bcl_2_family autophagy caspase executioner_caspase \
            gasdermin_d apoptosome xiap

# 正典連結預測產物（triples 層的全球前 150 Adamic-Adar 對）
# + wiki 層與合併圖上的 caspase 專屬 AA 掃描
# （raw_caspases_wiki_graph_link_prediction.txt 與
# raw_caspases_combined_graph.txt，含逐層度數分解）
uv run --with networkx python3 scripts/04_link_prediction.py

# 生物學角色類別（Sink/Spreader/Bottleneck 等，triples 圖分類器，
# 經 scripts/_node_roles_lib.py）—— web/public/data/node_roles.json
uv run python3 scripts/04_role_query.py --node "Caspase-3"
```

光譜參數：合併巨型連通分量 λ₂ = 0.188（4,084 節點 / 3,839 巨型分量節點 / 31,719 邊）；wiki 層巨型連通分量 λ₂ = 0.802；PPR 阻尼 α = 0.85；有效電阻虛無樣本 n = 300。
