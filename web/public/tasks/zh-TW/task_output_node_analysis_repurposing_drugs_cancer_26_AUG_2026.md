---
title: 節點分析——伊維菌素、芬苯達唑與甲苯達唑對上癌症及腫瘤亞型
description: 運用 scripts/analysis/node_analysis.py 對老藥新用藥物群集（伊維菌素、芬苯達唑、甲苯達唑）對上 Cancer 樞紐與三種腫瘤亞型所做的 NetworkX 多節點分析——指標指紋、路徑多重性、Jaccard 鄰域、Adamic–Adar、有效電阻與個人化 PageRank 顯示：單邊脆弱的主張卻帶有異常高的連結預測裕度、苯并咪唑之間是機制上不重疊的孿生對、腫瘤亞型被藥物社群捕獲而非歸入 Cancer 社群，以及一個使伊維菌素從 Cancer 種子排名第 #2 的 PPR 反轉。
created: 2026-08-26
updated: 2026-08-26
source: graphify-out/graph.json (2624 nodes / 2127 giant-component nodes / 3318 edges) + scripts/analysis/node_analysis.py
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - cancer
  - drug-repositioning
  - ivermectin
  - fenbendazole
  - mebendazole
  - personalized-pagerank
  - adamic-adar
author: []
starred: false
---

# 節點分析——伊維菌素、芬苯達唑與甲苯達唑對上癌症及腫瘤亞型

> [!NOTE]
> **任務**：針對 vault 的老藥新用抗寄生蟲藥群集對上腫瘤學語料執行 `scripts/analysis/node_analysis.py`——刻畫每個藥物的指標指紋、檢驗圖譜支持「藥物→癌症」主張的強度，並將指標聯合閱讀為生物學而非排名。
> **日期**：26_AUG_2026
> **圖譜**：`graphify-out/graph.json` — 2,624 節點 / 2,127 巨大連通分量節點 / 3,318 邊（較 8 月 16 日參考頁面更新的建構）
> **範圍**：`[[Ivermectin]]`、`[[Fenbendazole]]`、`[[Mebendazole]]`（來源）× `[[Cancer]]`、`[[Glioblastoma]]`、`[[Cholangiocarcinoma]]`、`[[Renal Cell Carcinoma]]`（標的）

---

## 可重現性

```bash
uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py \
    --sources ivermectin fenbendazole mebendazole \
    --targets cancer glioblastoma cholangiocarcinoma "renal cell carcinoma"
```

邊證據傾印（接觸四個錨點節點的所有三元組）另外透過一小段針對 `graph.json` links 的 NetworkX 程式碼取得。

---

## 指標指紋

| 節點 | Degree (in/out) | PageRank | Betweenness | Clustering | k-core | 社群 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Ivermectin | 44 (13/31) | 0.00141 | 0.0149 | 0.052 | 5 | "Ivermectin"（29） |
| Fenbendazole | 20 (6/14) | 0.00069 | 0.0026 | 0.131 | 5 | "Fenbendazole"（22） |
| Mebendazole | 9 (0/9) | 0.00022 | 0.0004 | 0.361 | 5 | "Fenbendazole"（22） |
| Cancer | 74 (37/37) | 0.00345 | **0.0585** | 0.043 | **6** | "Cancer"（30） |
| Glioblastoma | 7 (3/4) | 0.00034 | 0.0012 | 0.143 | 5 | "Fenbendazole"（22） |
| Cholangiocarcinoma | 6 (3/3) | 0.00032 | 0.0001 | 0.333 | 5 | "Fenbendazole"（22） |
| Renal Cell Carcinoma | 6 (3/3) | 0.00032 | 0.0007 | 0.267 | 5 | "Fenbendazole"（22） |

- 方向優先判讀：
  - 伊維菌素高度外向（31 出 vs 13 入）——散播者形態。
  - 甲苯達唑是純源頭（in-degree 0）。
  - Cancer 完美平衡（37/37）——收集兼廣播的程式。
- 社群擺放本身已屬異常——見下方的「捕獲」發現。

---

## 聯合閱讀指標所得的結論

### 藥物→癌症主張騎在具有巨大連結預測裕度的單薄邊上

- 每條最短路徑多重性都是 **1**，且沒有共享的首跳橋樑：
  - `Ivermectin --[is_treated_by|0.75]--> Cancer`、`--[inhibits|0.8]--> Glioblastoma`、`--[inhibits|0.7]--> Cholangiocarcinoma`、`--[inhibits|0.7]--> RCC`。
  - `Fenbendazole --[is_treated_by|0.75]--> Cancer`，加上以 0.65 的 inhibits/repositioned 邊通到所有三種亞型。
  - 甲苯達唑→膠質母細胞瘤是唯一多重性為 2 的案例（經由 Cancer 與經由 Fenbendazole）。
- 但 Adamic–Adar 分數極端高：**Ivermectin→Cancer 9.68**、Fenbendazole→Cancer 4.47、Mebendazole→Cancer 2.30——遠超 sirtuin 執行紀錄中的任何數值（最高 1.85）。
- 聯合解讀（多重性 1 × 高 AA × 中等 R_eff z ≈ −1.6 至 −1.9）：
  - 真實的關聯被漏斗化到*每對各只有一條已策展的咽喉點*。
  - 依參考頁面的分類法：限速邊，其唯一因果主張既是精確的介入陳述*也是*策展盲區。
  - 已量化的擴充佇列：文獻中幾乎必然存在比每對所捕捉那一條更多的機制邊。

### 伊維菌素是多效性散播者；苯并咪唑則是一對緊密相連的孿生對

- 伊維菌素的出星同時廣播到機制上互不相關的多個程式：
  - 訊號抑制——Akt、mTOR、Wnt、YAP1、STAT3、NF-kB、PAK1。
  - 細胞死亡誘導——Apoptosis、Autophagy、Pyroptosis、Caspase-3。
  - 抗藥性反轉——P-gp、Multidrug Resistance；與 Cisplatin、Docetaxel、Paclitaxel 協同。
  - 幹性——Cancer Stem Cells 被抑制；Oct4、Sox2 被抑制；Partial Reprogramming 被阻礙。
  - 形態 = 高 out-degree + 中等 betweenness + 自身具名社群——酸性神經醯胺酶式的散播者特徵。
- 孿生對證據：
  - **Jaccard(Fenbendazole, Mebendazole) = 0.421**——共享 Tubulin、Microtubule、Benzimidazole、Glycolysis、Apoptosis；PARP1/PARP2 式的脫靶孿生警告在此適用。
  - 對其中一個苯并咪唑驗證的主張，應預設可移植到另一個，除非已被區分開來。
- 但兩種策略截然不同：
  - Jaccard(Ivermectin, Fenbendazole) = 0.178，且共享集合主要是*適應症*（Cancer、亞型、Leukemia、Drug Repositioning）而非*機制*。
  - 僅 Fenbendazole 有的鄰居是 Tubulin、Hexokinase 2、GLUT1、p53、MDM2、Metabolic Reprogramming——微管 + 糖解破壞。
  - 僅 Ivermectin 有的鄰居是訊號/幹性/抗藥性節點。
  - 兩個名稱相近的「老藥新用抗寄生蟲藥」擁有真正不同的網絡地址——圖譜反對把它們當成同一類效果來對待。

### 腫瘤亞型住在藥物社群裡，而不是 Cancer 社群

- 社群 28（「Fenbendazole」）包含 Fenbendazole、Mebendazole，**以及** Glioblastoma、Cholangiocarcinoma、RCC——而它們的父節點 Cancer 卻坐在社群 9。
- 鄰域佐證：
  - Jaccard(Cancer, Glioblastoma) = **0.027**——亞型幾乎不分享其父節點的鄰域。
  - Glioblastoma 的額外節點：Acid ceramidase、Chemotherapy、Temozolomide（加上兩個藥物）。
  - Cholangiocarcinoma–Glioblastoma 的 Jaccard 0.625 是共策展偽影（共享：Cancer、Cancer Stem Cells、Chemotherapy 及兩個藥物），不是共享的腫瘤生物學。
- 解讀：
  - 這些腫瘤節點是從聚焦老藥新用的實體筆記中擷取出來的，因此它們的整個網絡身分就是「伊維菌素/芬苯達唑的標的」。
  - 迄今在本 vault 中量到的最乾淨的文件重力效應——擷取來源壓過了生物學本體論。
  - 實務後果：在獨立的腫瘤學邊存在之前，任何基於社群的導航或對這些亞型的模組層級處理目前都不可信。

### 個人化 PageRank 反轉了全域排名

- 全域 PageRank 排序：Cancer（0.00345）≫ Ivermectin（0.00141）> Fenbendazole > Mebendazole。
- 種子化的流量卻相反：
  - 以 **Cancer** 為種子的 PPR：Ivermectin 在整個 2,127 節點分量中排**第 #2**（0.01409）；Fenbendazole #7；Mebendazole #25。
  - 以 Glioblastoma 為種子：Ivermectin #4、Fenbendazole #7。
  - 以 Cholangiocarcinoma 為種子：Ivermectin #3、Fenbendazole #4。
  - 以 RCC 為種子：Fenbendazole #3、Ivermectin #4。
- 結論：
  - 從每一個癌症端的視角出發，漫遊質量都不成比例地流入老藥新用群集，先於持有 k-core 6 外殼的 senescence/sirtuin 核心。
  - vault 的 Cancer 樞紐目前回答「什麼治療你？」的音量大於「什麼驅動你？」——在於此區域使用 PPR 做標的探索前值得知道這點，因為通用型排名恰恰會埋掉這些藥物。

### Cancer 本身是平衡的主控程式，也是本樣本的頂級瓶頸

- 完美對稱（in 37 / out 37）、k-core 6、betweenness 0.0585——此樣本中最高，甚至在參考建構上超過 SASP 的 0.0555。
- 收集病因：Aging 相關、KRAS 突變、MDM2 擴增、p53 突變；Senescence、Therapy-Induced Senescence、Paracrine Senescence 都 `can_promote→ Cancer`（0.68–0.72）。
- 廣播特徵/驅動者/療法：十餘個 0.95 的 `is_driven_by` 節點，加上標準照護邊（Cisplatin、Docetaxel、trastuzumab、BET inhibitors、BH3 mimetics）。
- `Cellular Senescence --promotes--> Cancer` 這條邊可追溯到酸性神經醯胺酶文件——使 Cancer 成為長壽語料與腫瘤學語料交會的結構接點。

### 一旦權重到位，信心不對稱將懲罰藥物主張

- 本體論/特徵邊跑在 0.95–0.97（`is_a`、`is_driven_by`、`binds Tubulin`）；除少數例外，每條藥物主張都只帶 0.65–0.8，且四條 Fenbendazole/Mebendazole 邊在 GRAPH_REPORT 中被標記為 AMBIGUOUS。
- 目前的中心性完全忽略權重（重建時 `weight` 在中心性之後才附加）：
  - 若以反轉信心距離重新計算，恰好會把這些藥物通道拉得最長。
  - 老藥新用敘事佔據了結構上的中心位置（Ivermectin k-core 5、緊鄰 Cancer），但證據支持度卻是樣本中最弱的。
  - 當加權指標到位時，預期此區域會出現全圖最大的重新排名。

### 光譜擺放平淡無奇

- 全部七個節點都坐在 Fiedler 切割的同一側（+0.0036…+0.0044；λ₂ = 0.0464）——沒有任何分裂到遠端的半圖。
- 解讀：老藥新用的小宇宙被收納在主要超級群集之內；「藥物作為核心上的緊密連結葉節點」拓撲，與上述一切一致。

---

## 有效電阻明細

| 配對 | R_eff | z 對照零模型（n=300） |
| :-- | :-- | :-- |
| Ivermectin ↔ Cancer | 0.066 | −1.81 |
| Fenbendazole ↔ Cancer | 0.116 | −1.72 |
| Mebendazole ↔ Cancer | 0.193 | −1.59 |
| Ivermectin ↔ Glioblastoma | 0.245 | −1.77 |
| Fenbendazole ↔ Cholangiocarcinoma | 0.297 | −1.68 |
| Mebendazole ↔ RCC | 0.383 | −1.74 |

- 所有配對都遠低於隨機零模型平均值（約 1.12–1.42）：每個「藥物–腫瘤」接近度都是真實布線，不是偶然鄰接。
- 每一列內部的排序（Ivermectin < Fenbendazole < Mebendazole）恰與 degree/策展深度同步——這是「分離藥物顯著度的是策展量而非生物學」的第二個獨立特徵。

---

## 總體判斷

- 就治療面而言，圖譜呈現的是兩種互補策略，而非單一類效果：
  - 伊維菌素作為廣效、多軸的抑制劑（訊號 + 細胞死亡 + 抗藥性反轉 + 幹性）。
  - 芬苯達唑/甲苯達唑作為連貫的微管加糖解模組，其成員是機械上的孿生體。
- 就結構面而言，每個數字同時也在記錄策展不足：
  - 盡管 Adamic–Adar 裕度達兩位數，主張卻只有單邊。
  - 腫瘤亞型被藥物社群捕獲，亞型–父節點重疊趨近於零。
  - 信心分數相對於結構中心性呈倒置（最弱的支持落在最中心的斷言上）。
- AA 對多重性的落差（9.68 vs 1）就是下一輪攝入工作的量化規模；PPR 反轉（來自 Cancer 的第 #2 流量）則是警告：目前的排名讓老藥新用敘事的特權遠超出其證據權重。
