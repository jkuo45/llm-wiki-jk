---
title: 圖譜指標（wiki + triples）— 合併圖
description: 合併（triples + wiki）知識圖譜的指標分析——在聯集拓撲（4,084 節點 / 36,982 邊）上重新計算中心性、角色分布、相對 triples 圖的連通性對比（連通分量 223→123、k-core 6→20、巨型分量 82%→94%）、wiki 獨有核心節點的整合（cGAS、STING、Phosphorylation…）、p53/TP53 合併，以及獲得 wiki 加成的共享中樞——並附帶以下注意事項：儲存的合併指標指紋沿用了各來源圖的數值。勘誤說明——wiki 先前曾將單一的 p53/TP53 實體拆成兩個節點（p53 蛋白 + TP53 基因）；現已合併為 p53，成為共享的聯集核心節點。
created: 2026-08-27
updated: 2026-08-27
source: web/data/nodes.json + edges.json (combined, scripts/05_build_combined.py) + graphify-out/graph.json (triples)
tags:
  - task-output
  - knowledge-graph
  - combined-graph
  - node-analysis
  - pagerank
  - betweenness-centrality
  - k-core
  - networkx
author: []
---

# 合併知識圖譜的節點層級網絡分析

> [!NOTE]
> **任務**：對**合併圖**（triples + Obsidian-wiki 連結）執行與產出 `web/pages/node-analysis-examples-biology.html`（triples 圖參考頁）相同的每節點指標分析，在實際的聯集拓撲上重新計算中心性指紋，並凸顯合併圖特有的發現。
> **日期**：27_Aug_2026 06:15 PM PDT
> **範圍**：`web/data/nodes.json` + `web/data/edges.json`（標準合併資料集，由 `scripts/05_build_combined.py` 建置）· `graphify-out/graph.json`（triples，27_Aug_2026 以正規化 id 重建）· `scripts/04_node_analysis.py` 慣例 · 重新計算的聯集指標（參數見 §3）

---

## 1 · 合併圖是什麼

vault 現在在網頁檢視器中提供三個圖譜資料集（**combined** 為預設）：

| 資料集 | 節點 | 邊 | 來源 |
| --- | ---: | ---: | --- |
| Triples | 2,629 | 3,832 | `_triples.json` 萃取 → `graphify-out/graph.json` |
| Wiki | 2,994 | 34,850 | Obsidian `[[wikilinks]]`（實體筆記）→ `wiki-out/wiki-graph.json` |
| **Combined** | **4,084** | **36,982** | 兩者的聯集（`05_build_combined.py`） |

合併節點集的組成（以 node id 計——皆經 `norm()` 正規化，因此 `NF-κB` 在三個圖中都是 `nf_kappab`）：

- **共享（triples + wiki）：1,539**
- **wiki 獨有：1,455**
- **triples 獨有：1,090**

> [!note] 勘誤（本次執行）
> wiki 先前曾為單一實體產出**兩個**節點——`p53`（蛋白）與 `tp53`（`TP53` 基因筆記，它也帶有別名 `p53`，並因排序在前而劫持了大部分 `[[p53]]` 連結）。兩個節點現已合併進標準的 `p53` 節點（別名 `TP53`、`Cellular tumor antigen p53`），所有 `[[TP53]]` 連結也重新指向 `[[p53]]`。重建後，**p53 是共享的聯集核心節點**（聯集 degree 211、k-core 20、PageRank 0.00341）——它*不是* wiki 獨有的葉節點。這就是「TP53」不再出現於下方 §2.3 wiki 獨有表格的原因。

聯集中的邊來源：

- **兩圖皆有：1,700**（4.6%）
- **wiki 獨有：33,150**（89.7%）
- **triples 獨有：2,132**（5.8%）

> [!important] 指紋注意事項
> 合併節點上儲存的 `nodes.json` 指紋是**沿用各來源圖**：triples 節點帶 triples 側指標，wiki 獨有節點帶 wiki 側指標，共享節點帶 triples 數值（community/color/description 優先採用 triples）。聯集拓撲在建置時**並未**重新分析。因此下列數字是**在真正的聯集上重新計算的**（有向 PageRank；無向 betweenness/clustering/k-core；角色經由 `_node_roles_lib`），是真正的合併圖指標，可與 triples 圖參考頁相互比較。

---

## 2 · 重點發現——合併圖特有之處

### 2.1 wiki 連結把 triples 的碎片縫合成一張稠密網絡

在聯集上 versus 單獨 triples 圖重新計算連通性：

| 指標 | Triples | Combined（聯集） | Δ |
| --- | ---: | ---: | ---: |
| 連通分量 | **223** | **123** | −100 |
| 巨型分量（節點） | 2,147（81.7%） | 3,839（**94.0%**） | +1,692 |
| 最大 k-core | **6** | **20** | +14 |
| 平均 clustering | — | 0.290 | — |

triples 圖低估了連通性：其 18% 的節點位於巨型分量之外，且內部核心止於 k = 6。加入 `links_to` wiki 邊之後，周邊節點被收攏進核心——**k-core 6 → 20** 是合併圖最強烈的單一訊號。節點的「骨幹」排名若不說明是在哪個圖上計算的，就毫無意義（見 §4）。

### 2.2 角色分布在聯集上劇烈變動

在聯集上重新計算的角色（相同的 `_node_roles_lib` 規則，門檻值重新校準至聯集——見注意事項）：

| 角色 | Triples（參考頁） | Combined（聯集） | 解讀 |
| --- | ---: | ---: | --- |
| Spreader | 205（7.9%） | **2,026（49.6%）** | wiki 連結是撰寫產生的出邊 → 大多數節點看起來都像源頭 |
| Periphery | 1,925（74.2%） | **1,055（25.8%）** | 葉節點被拉入連通核心 |
| Module member | 71（2.7%） | 799（19.6%） | 稠密的局部鄰域 |
| Bottleneck | 260（10.0%） | 409（10.0%） | betweenness 前十分位（重新校準） |
| Sink | n/a | 359（8.8%） | |
| Core backbone | 99（3.8%） | 180（4.4%） | k-core ≥ max−1 |
| Master regulator | 51（2.0%） | 89（2.2%） | source ∧ endorsed |

> [!warning] wiki 邊上的散播 vs. 角色
> wiki 邊是無類型的（`links_to`，方向 = 筆記撰寫方向）且 `confidence = 1.0`。Spreader 的暴增是**邊類型造成的語意假象**，而非生物學主張：wikilink 上的 out-degree 計算的是一則筆記提及了幾則其他實體筆記。在合併圖上，請解讀 *degree/k-core/連通性*；除非限定於 triples 的類型化邊，否則對*有向角色語意*（spreader/sink）應謹慎看待。

### 2.3 wiki 獨有節點位於核心，而非周邊

排名靠前的 wiki 獨有節點（僅存在於 wiki 圖）**已整合進聯集的稠密核心**（k-core 15–20），並非懸掛的葉節點：

| 節點 | Degree（聯集） | k-core | 角色（聯集） |
| --- | ---: | ---: | --- |
| cGAS | 96 | 18 | Sink · Bottleneck |
| Phosphorylation | 87 | 17 | Spreader · Master regulator · Bottleneck |
| STING | 83 | 16 | Sink · Bottleneck |
| Cell Cycle | 83 | 15 | Sink · Bottleneck |
| Macrophage | 75 | 20 | Spreader · Bottleneck · Core backbone |
| Ubiquitination | 72 | 17 | Spreader · Bottleneck |
| NMN | 71 | 19 | Sink · Bottleneck |
| Rheumatoid Arthritis | 71 | 20 | Spreader · Bottleneck · Core backbone |
| Endothelial Cells | 68 | 18 | Bottleneck |
| Fibroblast | 68 | 17 | Sink · Bottleneck |
| Type I Interferon | 66 | 16 | Sink |

> [!note] p53/TP53 已移出此表
> 合併之後，**p53 是*共享*節點**（現在同時帶有 triples 與 wiki 邊），因此不再是 wiki 獨有條目。在聯集上，它是按 wiki in-degree 計的圖上第 3 大單一實體中樞：聯集 degree **211**（k-core 20、PageRank 0.00341、Sink · Bottleneck · Core backbone），且是聯集 PageRank 的領先上升者之一（見 §2.4）。目前最大的 wiki 獨有節點是 **cGAS**（96，k-core 18）。

解讀：wiki 語料補上了 triples 萃取未能充分呈現的**機制／過程詞彙**（cGAS–STING 軸、泛素化、細胞週期调控、NMN/NAD+）；這些節點深接於 aging/senescence 核心內部。wiki 獨有節點的 PageRank 前段（勘誤後）：Autophagosome（0.00174）、Epigenetic Aging、Atg1、Epigenetic Alterations、Cell Cycle、Histone Variant、PARK2、mPTP、Phosphorylation、NMN。

### 2.4 共享中樞獲得大量 wiki 加成

對共享節點計算「聯集 PageRank − triples PageRank」（變動最大者）：

| 節點 | union PR | triples PR | Δ |
| --- | ---: | ---: | ---: |
| Oxidative Stress | 0.01143 | 0.00321 | +0.00822 |
| Cancer | 0.00924 | 0.00343 | +0.00581 |
| Apoptosis | 0.00745 | 0.00202 | +0.00543 |
| Inflammation | 0.00604 | 0.00062 | +0.00542 |
| ROS | 0.00537 | 0.00026 | +0.00511 |
| Mitochondria | 0.00504 | 0.00064 | +0.00440 |
| Autophagy | 0.00828 | 0.00414 | +0.00414 |
| Senescence | 0.00632 | 0.00277 | +0.00355 |
| Inflammaging | 0.00457 | 0.00142 | +0.00315 |
| Caloric Restriction | 0.00305 | 0.00075 | +0.00230 |
| p53 | 0.00341 | 0.00117 | +0.00225 |

每個既有的中樞都透過 wiki 的認可（endorsement）獲得 2–5 倍的 PageRank（ROS、Inflammation、Mitochondria 在 triples 中幾乎不可見）。**p53** 出現在此清單的原因：一旦合併後的 `p53` 筆記被視為同一實體（而非拆成 wiki 獨有的 `TP53` 節點），其聯集 PageRank（0.00341，約為 triples 值的 3 倍）反映了 wiki 中 184 條連結認可叢集的全部權重。

### 2.5 Bottleneck 重洗牌

聯集上的 betweenness 前段（無向）：**SIRT1 0.080**、Oxidative Stress 0.079、Cancer 0.069、SIRT3 0.056、Apoptosis 0.048、Aging 0.045、Autophagy 0.043、SASP 0.043。在 triples 圖上，參考案例是 **SASP 0.0555**。由 wiki 縫合的網絡重新分配了路徑中心性：SIRT1 與 Oxidative Stress 取代 SASP 成為首要橋樑——SASP 變成共同核心，而非獨佔主導。

### 2.6 NF-κB 的一致性已修正

在正規化 id 重建之後，`NF-κB` = `nf_kappab` **在所有三個圖中皆一致**，因此該實體在合併集中是**共享節點**（degree 368、k-core 20、聯集上的 Master regulator；聯集 PageRank 0.0055——第 10 名）。先前（舊版 `norm()`）triples（`nf_b`）與 wiki（`nf_kappab`）是兩個分開的節點；combined 模式分析會把該實體拆成兩半。

### 2.7 聯集中樞表（依重新計算的 degree 取前 15）

| 節點 | Degree | k-core | 來源 | 角色（聯集） |
| --- | ---: | ---: | --- | --- |
| Oxidative Stress | 607 | 20 | both | Sink · Master regulator |
| SIRT1 | 578 | 20 | both | Spreader · Master regulator |
| Cancer | 572 | 20 | both | Sink · Master regulator |
| SASP | 546 | 20 | both | Sink · Master regulator |
| Apoptosis | 444 | 20 | both | Sink · Master regulator |
| Autophagy | 423 | 20 | both | Sink · Master regulator |
| Aging | 395 | 20 | both | Sink · Master regulator |
| Senescence | 384 | 20 | both | Sink · Master regulator |
| SIRT3 | 370 | 20 | both | Spreader · Master regulator |
| NF-κB | 368 | 20 | both | Sink · Master regulator |
| Inflammation | 351 | 20 | both | Sink · Master regulator |
| Parkinson's Disease | 295 | 20 | both | Sink · Master regulator |
| Mitochondria | 290 | 20 | both | Sink · Master regulator |
| SIRT6 | 286 | 20 | both | Spreader · Master regulator |
| ROS | 284 | 20 | both | Sink · Bottleneck |

前 15 名全為 k-core 20 的共享節點——聯集的內殼就是既有的 triples 核心，再經 wiki 強化。

---

## 3 · 方法筆記

- **重新計算，而非沿用。** 上述數字是在聯集的無向投影上重新計算 degree / PageRank（α = 0.85、未加權，依 `enrich_graph_metrics` 慣例）以及 betweenness/clustering/k-core。儲存的 `nodes.json` 指紋屬各來源，不應被解讀為聯集指標。
- **重現（臨時操作，非追蹤的腳本）。** 由 `web/data/nodes.json` + `edges.json` 建立聯集 `DiGraph`（nodes：`id`/`label`/`in_triples`/`in_wiki`；edges：`from`→`to`），移除自環，然後：`nx.pagerank(G, alpha=0.85, max_iter=200)`；無向 `G.to_undirected()` → `nx.betweenness_centrality`、`nx.clustering`、`nx.core_number`、`nx.connected_components`；角色經由 `scripts/_node_roles_lib.py`（`compute_thresholds` + `classify`）。triples 比較以相同方式讀取 `graphify-out/graph.json`。
- **社群。** 沿用偏移合併的 legend（triples cids + wiki cids +1000）。Leiden **並未**在聯集上重新執行；重新分群會產生真正新的合併社群（自然的下一步，見 §5）。
- **角色。** `_node_roles_lib` 規則不變；門檻值是重新校準至聯集的百分位數，因此與 triples 頁面表格的計數僅在精神上可比，並非 1:1。
- **邊類型。** 聯集 89.7% 的邊是無類型的 wiki `links_to`；這些邊上的有向角色語意是撰寫假象（見 §2.2 警告）。

---

## 4 · 這在實務上代表什麼

1. **每項分析都要指明圖譜。** Degree、k-core、betweenness、PageRank 全都依圖而異；triples 圖與合併圖給出*性質上不同的*解讀（k-core 6 vs 20；首要 bottleneck 是 SASP vs SIRT1）。triples 圖參考頁（`node-analysis-examples-biology.html`）與先前的計算文件僅在 triples 圖上計算。
2. **合併圖是更好的連通性圖像**（94% 巨型分量、k-core 20）——結構性問題（哪些實體橋接不同領域、核心是什麼）應使用它。
3. **triples 圖是更好的*機制*圖像**——唯有它帶有類型化、依信心加權的關係（`promotes`、`inhibits`…）；方向性因果主張應使用它。將聯集分析限定於 `sources` 含 triples 的部分（2,132 triples 獨有 + 1,700 both = 類型化主幹）可在更稠密的拓撲上恢復類型化語意。
4. **wiki 獨有節點是第一等的核心實體**，而非獵奇葉節點：cGAS、STING、Cell Cycle、Ubiquitination、NMN、PARK2——許多在聯集中是 k-core 15–20，值得獲得與 triples 中樞相同的深度剖析待遇。**p53** 同樣值得深度剖析，但在其基因/蛋白筆記合併之後，是以*共享*中樞的身分（聯集 degree 211、k-core 20）。

---

## 5 · 建議的後續步驟

- **用 Leiden 對聯集重新分群**，並產出標準的 `combined graph.json`（節點內建聯集指標 + 角色，比照 triples 管線），讓 `04_node_analysis.py --graph combined-graph.json` 能在聯集上執行 path/multiplicity/PPR 分析。
- **類型化主幹分析：** 在聯集節點集上，對 triples 獨有 + 共享的邊集（約 3,832 條類型化邊）執行關係感知方法（`04_node_analysis.py`），以比較路徑結構與完整聯集。
- **wiki 角色去偏：** 在類型化子集上重新計算角色，把撰寫產生的 out-degree 與生物學上的廣播區分開來。
- **調和參考頁**（`node-analysis-examples-biology.html`）：加入合併圖章節或建立姊妹頁，並標明兩個圖譜。

---

## 參考資料

- `web/pages/node-analysis-examples-biology.html` — triples 圖指標/角色參考（2026 年 8 月 16 日）。
- `src/tasks/task_output_node_analysis_biology_16_AUG_2026.md` — 來源分析文件（triples 圖）。
- `scripts/03_rebuild_from_triples.py` — triples 重建（`enrich_graph_metrics`、`DENYLIST`、Leiden）。
- `scripts/05_rebuild_from_wiki.py` — wiki 圖建置（實體筆記、doc/task 排除）。
- `scripts/05_build_combined.py` — 合併資料集融合 + triples-vs-wiki 差異報告（`wiki-out/graph-diff.json`、`GRAPH_DIFF.md`）。
- `scripts/_node_roles_lib.py` — 共享角色分類器（`ROLE_DEFS`）。
- 重新計算的聯集指標 — 方法見本任務輸出之 §3。
