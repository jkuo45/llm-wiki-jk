---
title: NAD+ 代謝與 CD38–SARM1 競爭 — 合併圖譜綜合分析
description: 將 2026 年 7 月的九份 CD38/SARM1 追蹤產出整合至目前的合併圖譜建置（4,821 個節點／47,925 條邊），重新推導 NAD+ 消費者層級、CD38↔SARM1 競爭與 NMN 連結指標，稽核 NAD+ 模組內的跨層分歧（wiki 已統一、triples 仍分散）與萃取缺口，並闡述 CD38 抑制的藥理學悖論及其文獻解析。
created: 2026-10-20
updated: 2026-11-11
source: src/tasks/cd38_sarm1_nad_trace/ (9 outputs, 17–21 Jul 2026) + web/public/data/{nodes,edges,wiki-nodes,triples-nodes}.json (build 02_Oct_2026, hash `3d9d2c9fe214c0d2`) + notes/_link/{NAD+,CD38,SARM1,NAMPT,NMN,Nicotinamide Riboside}.md
tags:
  - task-output
  - nad-plus
  - cd38
  - sarm1
  - knowledge-graph
  - metabolism
  - aging
  - sirtuins
  - graph-analysis
author: []
---

# NAD+ 代謝與 CD38–SARM1 競爭 — 合併圖譜綜合分析

**日期**：20_Oct_2026
**就頁面建置用途而言，取代**：`src/tasks/cd38_sarm1_nad_trace/` 中的九份個別追蹤產出（2026 年 7 月 17–21 日）。這些文件仍是主要的文獻依據；本檔案針對目前的圖譜建置重新推導*定量*層，並增補 7 月追蹤無法提出的三大發現。

> [!important] 本次合併的原因
> 7 月的追蹤是在 4,714 個節點／8,624 條邊的圖譜上計算的（僅 triples 層）。網站目前提供的是**4,821 個節點／47,925 條邊**的合併資料集（build 02_Oct_2026，hash `3d9d2c9fe214c0d2`）。NAD+ 模組內的節點度數、社群歸屬與邊清單皆已改變。若仍直接引用 7 月快照的圖譜數字，將誤述目前的資料集。

---

## 推導依據

| 產物 | 角色 |
|---|---|
| `web/public/data/nodes.json` + `edges.json` | 合併聯集 — 權威版本，4,821 個節點／47,925 條邊 |
| `web/public/data/wiki-nodes.json` + `wiki-edges.json` | Wiki 共提及層，3,486 個節點／44,994 條邊 |
| `web/public/data/triples-nodes.json` + `triples-edges.json` | 型別化 triples 層，3,493 個節點／6,605 條邊 |
| `src/notes/_link/{NAD+,CD38,SARM1,NAMPT,NMN,Nicotinamide Riboside}.md` | Vault 實體筆記（主要論述） |
| `src/tasks/cd38_sarm1_nad_trace/*.md`（9 份檔案） | 7 月文獻依據的追蹤（引據主張時為主要依據） |

**指標慣例** — 與 `caspase-graph-analysis.html` 使用的內部慣例一致：
- **Degree** = 合併聯集中的相異鄰居數（平行邊合併）。
- **in / out** = 合併聯集中的邊入射次數。
- **k-core** = 原始無向投影上聯集圖的核心編號。
- **Community** = 合併資料集的 Leiden 標籤。共享 node id 以 triples 為準；wiki 獨有的 id 採用 wiki 標籤，並加上 +1000 的社群編號偏移。

重現方式：

```bash
uv run --with networkx python3 - <<'PY'
import json, networkx as nx
nodes = json.load(open("web/public/data/nodes.json"))
edges = json.load(open("web/public/data/edges.json"))
G = nx.MultiDiGraph()
for n in nodes: G.add_node(n["id"])
for e in edges: G.add_edge(e["from"], e["to"])
Gund = G.to_undirected(reciprocal=False)
Gs = nx.Graph(Gund)
kcore = nx.core_number(Gs)
by = {}
for n in nodes: by.setdefault(n["label"], []).append(n["id"])
for lab, ids in sorted(by.items()):
    nid = ids[0]
    nb = set()
    for e in edges:
        if e["from"] == nid: nb.add(e["to"])
        if e["to"] == nid: nb.add(e["from"])
    print(f"{lab:42s} deg={len(nb):4d} "
          f"in={sum(1 for e in edges if e['to']==nid):4d} "
          f"out={sum(1 for e in edges if e['from']==nid):4d} "
          f"kcore={kcore.get(nid,0):3d}")
PY
```

> [!warning] 儲存的 `degree` 欄位並非聯集度數
> `nodes.json` 攜帶自來源層繼承的 `degree` 屬性（見 `scripts/combined/build.py`——合併時共享 id 的節點保留 triples 節點的欄位）。在 **2,158 個共享節點中的 2,157 個**，該儲存值*低於*合併聯集中實際的入射邊數，因為聯集在 wiki 層的共提及邊之上再疊加。NAD+ 儲存 `degree: 51`，實際在 277 個相異鄰居之間承載 321 條入射邊。
> 本文件及已發布頁面中的所有度數均為**重新計算的聯集度數**，而非儲存欄位。既有的 `caspase-graph-analysis` 頁面亦適用相同慣例（Caspase-3：儲存 29，聯集 76）。

---

## 消費者層級

NAD+ 並非可透過補充而還原的靜態量。它是至少四種酵素系統共享的受質池，這些系統分屬不同的時間尺度與不同的細胞區室；而各系統所造成的受質虧缺最終匯聚於同一下游標的：sirtuin 催化、需要 NAD+ 的反應。

| 消費者 | 區室 | 時間尺度 | 觸發因素 | 特徵 |
|---|---|---|---|---|
| **CD38** | 細胞外／細胞表面 | 數小時–數年 | 衰老相關發炎、免疫細胞浸潤 | NAD+ ↓、NMN ↓、cADPR ↑ |
| **SARM1** | 細胞內（軸突） | 數分鐘 | 損傷 → NMNAT2 喪失 | NAD+ → ~0、Wallerian degeneration |
| **PARP1 / PARP2** | 細胞核 | 數小時 | DNA 損傷 | NAD+ ↓、PAR ↑ |
| **Sirtuins** | 細胞核／細胞質／粒線體 | 持續 | — | NAD+ 作為催化輔受質被消耗 |
| **CD73** | 細胞外 | 持續 | — | NAD+ → adenosine（競爭受質） |

Vault 中不顯而易見、值得在頁面上明確表述的架構：**sirtuins 本身也是消費者**。每一次去乙醯反應都會將一個 NAD+ 水解為 nicotinamide 與 OAADPr。因此，NAD+ 的重補並非代謝中性——sirtuins 本身即為消耗的一部分。

### 供應端

- **Preiss–Handler**：nicotinamide → nicotinic acid → NAD+（即 NAMPT 所 bypass 的途徑）。
- **Salvage**（多數哺乳類組織中的優勢途徑）：nicotinamide → 經 **NAMPT**（限速步驟）生成 NMN → 經 **NMNAT** 生成 NAD+。
- **Nicotinamide riboside 途徑**：NR → 經 NRK1/NRK2 生成 NMN → 經 NMNAT 生成 NAD+。

NAMPT 在兩種相反策略中是同一種酵素：它是長壽策略中應予保存的主控調節者，但在腫瘤學中則是應予*抑制*的標的（FK866），使 PARP 驅動的 DNA 修復失效。

---

## NAD+ 模組的現行建置指標

**合併聯集**（權威版本）。社群為合併資料集的標籤。

| 節點 | Deg（聯集） | in | out | k-core | Clustering | 社群 |
|---|---:|---:|---:|---:|---:|---|
| NAD+ | 277 | 267 | 54 | 20 | 0.048 | NAD+ |
| Sirtuins | 187 | 141 | 60 | 20 | 0.061 | Sirtuins |
| Nicotinamide Riboside | 112 | 68 | 61 | 20 | 0.085 | Nicotinamide Riboside |
| Apigenin | 106 | 40 | 87 | 20 | 0.082 | Senescence-Associated Secretory Phenotype |
| PARP1 | 91 | 67 | 53 | 20 | 0.110 | Parthanatos |
| Microglia | 76 | 62 | 24 | 20 | 0.133 | Microgliosis |
| Glycolysis | 69 | 60 | 26 | 19 | 0.099 | HIF-1α |
| NMN | 65 | 62 | 11 | 19 | 0.161 | Nicotinamide Mononucleotide |
| CD38 | 48 | 38 | 28 | 19 | 0.174 | CD38 |
| NAMPT | 46 | 39 | 17 | 18 | 0.175 | Heart Failure |
| Nicotinamide Mononucleotide | 33 | 6 | 27 | 17 | 0.146 | Nicotinamide Mononucleotide |
| SARM1 | 31 | 18 | 27 | 16 | 0.247 | Nicotinamide Riboside |
| CD157 | 26 | 4 | 24 | 16 | 0.172 | Nicotinamide Riboside |
| SLC25A51 | 20 | 2 | 20 | 16 | 0.295 | NAD+ |
| ML385 | 19 | 0 | 19 | 19 | 0.415 | NRF2 |
| Axon Degeneration | 19 | 9 | 16 | 11 | 0.433 | Nicotinamide Riboside |
| ADP-Ribose | 19 | 10 | 16 | 12 | 0.263 | ADP-Ribose |
| Wallerian Degeneration | 13 | 7 | 10 | 11 | 0.603 | NAD+ |
| Disulfiram | 13 | 9 | 8 | 11 | 0.705 | Paracrine Senescence |
| DSRM-3716 / GSK-428 | 13 | 8 | 7 | 11 | 0.795 | NAD+ |
| NB-4746 | 12 | 9 | 4 | 11 | 0.864 | NAD+ |
| Chemotherapy-Induced Peripheral Neuropathy | 12 | 3 | 11 | 11 | 0.697 | NAD+ |
| NMNAT2 | 8 | 4 | 7 | 8 | 0.750 | NAD+ |
| cADPR (Cyclic ADP-ribose) | 7 | 5 | 3 | 5 | 0.571 | NAD+ |
| CZ-48 | 4 | 2 | 4 | 4 | 1.000 | NAD+ |

\* Microglia 在 wiki 層單獨即有 75 個相異鄰居；上表數字為合併聯集。

### 解讀指標

7 月追蹤無法提出的三大觀察：

**1. NAD+ 模組的 k-core 上限為 20，且模組內幾乎所有節點皆處於該層。**
NAD+（20）、Sirtuins（20）、NR（20）、Apigenin（20）、PARP1（20）、Microglia（20）皆達到聯集的最高 k-core——20 為本建置確認的聯集全域上限。CD38 為 19，NAMPT 為 18，SARM1 為 16。這是**深度嵌入的核心，而非周邊附屬**——NAD+ 模組是 vault 的結構支柱之一，其結構地位與 SIRT1/SASP god-node 鄰域相當，而非僅屬主題層級的註腳。

**2. 兩種 NADase 的聚集係數互為反轉。**
CD38 的 clustering 為 0.174，SARM1 的 clustering 為 0.247——儘管 SARM1 的度數*較低*（31 對 48），其鄰居之間的互連程度卻更高。解讀如下：SARM1 位於緊密且自我指涉的損傷／軸突退化鄰域之中（TIR domain、NMNAT2、Wallerian degeneration、Axon Degeneration、Disulfiram、DSRM-3716、GSK-428、NB-4746、CIPN——31 個鄰居中有 9 個即為其自身的藥理學與解剖裝置），而 CD38 的鄰居則分散於免疫細胞、腫瘤微環境與 sirtuin 領域。**CD38 是擴散的中樞；SARM1 是封閉的專家。**兩者是不同的治療標的。

**3. 抑制劑節點與其標的幾乎呈現完全團塊化。**
CZ-48 的 clustering 為 1.000，NB-4746 為 0.864，DSRM-3716 / GSK-428 為 0.795，Disulfiram 為 0.705。每種 SARM1 抑制劑的鄰居幾乎全部都是其他 SARM1 藥理學節點。圖譜已將藥理學學成一個封閉的子團塊——值得注意的是，`Disulfiram` 攜帶的社群標籤為 **Paracrine Senescence**，而非 NAD+。它是一種老藥，其主要用途是酒精使用障礙；圖譜將其歸入衰老社群，而其 SARM1 邊將其拉回 NAD+ 軸線。

---

## 兩種 NADase 之間的競爭

### 相同的化學反應、相反的細胞區室

CD38 與 SARM1 皆為 NAD+ glycohydrolase，將相同的受質切割為相同的產物（nicotinamide + ADP-ribose + cADPR），且兩者皆具 base-exchange 活性。差異在於動力學與定位，而非化學反應：

- **CD38** — 較低的 K_m（優先消費者），位於細胞外，為 ecto-enzyme。
- **SARM1** — NAD-cyclizing 活性較高（更有效率的 cADPR 生成者），位於細胞內，在軸突中具催化作用。

Zhao et al. 2019（*iScience*，PMID 31128467）：*「SARM1 catalysis was similar to CD38, despite having no sequence similarity… SARM1 had much higher NAD-cyclizing activity.」*

### NMN 連結

```
EXTRACELLULAR                              INTRACELLULAR
CD38 (ecto-NMNase)                        SARM1 activator
  degrades NMN → NAM + ribose               rising NMN/NAD+ ratio
        │                                          │
        ▼                                          ▼
  less NMN enters cells                      ARM-domain binding
        │                                          │
        └──────────► lower neuronal NAD+ buffer ◄─┘
                     → SARM1 closer to threshold
```

圖譜編碼的悖論：**高 CD38 活性可能保護，避免 SARM1 啟動**，因為降解細胞外的 NMN 可使細胞內的 NMN 保持低量。反之，**為長壽而抑制 CD38，可能使神經元對 SARM1 依賴的 Wallerian degeneration 更為敏感。**

### CZ-48 作為藥理分歧探針

CZ-48（sulfo-ara-F-NMN）最清楚地證明：儘管受質與產物化學反應相同，兩種酵素仍可分離：

| 化合物 | 對 CD38 的作用 | 對 SARM1 的作用 |
|---|---|---|
| **CZ-48** | **抑制** | **啟動** |

它是 vault 中唯一對兩種 NADase 具相反作用的分子。在目前圖譜中，它位於 wiki 層的 `NAD+` 社群，具 4 個相異鄰居，clustering 為 1.000——是教科書級的分歧節點。

### 文獻解析（誠實的部分）

7 月的綜合分析將該悖論標示為即時風險。後續專門的文獻調查（`task_output_research_CD38_SARM1_gaps_17_JUL_2026.md`）分兩步將其解析：

**問題 1——CD38 介導的 NMN 耗竭，是否保護，避免 SARM1 啟動？**
*結論：合理但未經直接檢驗。*化學反應機制成立，且每個環節皆有獨立證據——CD38 是小鼠組織中降解 NMN 的主要酵素之一（Camacho-Pereira 2016，PMID 27133162）；阻斷 CD38 的 ecto-enzymatic 活性，可經由 NMN 依賴的程序提升 NAD+（Covarrubias 2020，PMID 33028765）；累積的 NMN 似乎啟動促退化的 cADPR 生成酵素 SARM1（Takaso 2020，PMID 33082370）；NMN/NAD+ 比率是主要的 SARM1 啟動者（Figley 2021，*Neuron*，PMID 33657413）。但尚無研究直接檢驗 CD38 活性或抑制是否改變 SARM1 依賴的軸突退化。

**問題 2——CD38 KO 小鼠中 SARM1 的狀態為何？**
*結論：無致敏證據——實際上具保護作用。*這是瓦解該悖論的發現。Takaso 2020（PMID 33082370）顯示，CD38 knockout 小鼠在顔面神經軸切術後呈現**延遲的**軸突退化——與 SARM1 致敏的預測*相反*。

兩結論不同的原因：

1. CD38 缺失提升 NAD+，而 NMNAT2 需要 NAD+ 以生成更多的 NAD+——保護作用占優勢。
2. 僅有 NMN 累積，不足以在缺乏損傷特異的 NMNAT2 喪失背景下啟動 SARM1。
3. 觸發者是**比率**（NMN/NAD+），而非絕對 NMN 量。提升 NAD+ 即使絕對 NMN 上升，仍會降低該比率。

藥理學上的關鍵在於：**僅抑制 CD38，並非機制上暗示的 SARM1 致敏風險。**風險附著於 NAD+*前驅物*補充，此類補充提升 NMN，但缺乏 CD38 缺失同時產生的補償性 NAD+ 上升。

> [!tip] 應予頁面採用的修正解讀
> Vault 自身的警示——「為長壽而以 CD38 單一療法提升 NAD+，可能無意間使神經元對 SARM1 依賴的 Wallerian degeneration 更為敏感」——就 CD38 抑制而言**表述過強**。該警示對 **NR/NMN 補充**成立（Takaso 明確的附帶警示：*「accumulated NMN appeared to be an activator of the prodegenerative cADPR-forming enzyme SARM1」*），但無法通過 CD38-KO 軸切術資料的檢驗。頁面必須以此方式陳述，否則將高估風險。

### 第三種共享機制

除受質與 NMN 連結之外，78c 與 SARM1 抑制劑在機制上相連：兩者皆作為 NAD 依賴酵素的**加合物形成型非競爭抑制劑**——這是 NAD 依賴的保守機制（Bratkowski et al. 2022，*Neuron*）。因此，藥理學上可分離，並不意謂機制上相互獨立。

---

## 中樞神經區室圖譜

Microglia 的 CD38 對比神經元的 SARM1，據 `task_output_CD38_CNS_microglia_SARM1_neuron_17_JUL_2026.md`：

| 性質 | Microglial CD38 | Neuronal SARM1 |
|---|---|---|
| 細胞類型 | Microglia（腦內常駐巨噬細胞） | 神經元（細胞體、軸突、粒線體） |
| 時間尺度 | 慢性（衰老、神經發炎） | 急性（損傷，數分鐘） |
| 觸發因素 | 衰老相關發炎、免疫啟動 | 軸突切斷、NMNAT2 耗竭 |
| 輸出 | 神經發炎、前驅物耗竭 | 軸突 NAD+ 崩潰、Wallerian degeneration |
| 疾病關聯 | 神經發炎、衰老腦 | TBI、神經病變、青光眼、ALS、AD、PD |

兩條圖譜上合理的交互作用路徑：**前驅物競爭**（microglial CD38 降低神經元的 NAD+ 緩衝，使損傷較易觸發 SARM1）與**發炎→損傷級聯**（神經發炎提高軸突的脆弱性，使 TBI／缺血在已受壓的軸突中觸發 SARM1）。

在目前的建置中，兩軸匯聚至同一疾病：**Chemotherapy-Induced Peripheral Neuropathy** 同時是 *CD38* 與 *SARM1* 的 wiki 層鄰居，位於 `NAD+` 社群，clustering 為 0.697。CIPN 為 **wiki-only**——該節點在 triples 層完全不存在——而自 CD38 與 SARM1 抵達它的兩條 `links_to` 邊，皆為 wiki 共提及邊，沒有型別化對應邊。

7 月的 SARM1 追蹤已將 CIPN 列為 SARM1 鄰居。新之處在於*匯聚*：CIPN 作為被**兩種** NADase 抵達的節點，並在 triples 層中完全不可見。7 月追蹤所用的 triples 圖中，CIPN 節點及其三條邊皆不存在。

---

## 治療版圖

依所標的消耗途徑組織，而非依化合物分類。

| 標的 | 作用劑 | 機制 | 證據 | 備註 |
|---|---|---|---|---|
| CD38 | 78c | 加合物形成型非競爭抑制劑 | 雄性小鼠約 14% 壽命延長；雌性出現嚴重不良反應需施行安樂死 | 具性別差異 |
| CD38 | quercetin、apigenin | 天然黃酮類 | 較弱、多效 | 同時具有 SIRT／PI3K 作用 |
| CD38 | daratumumab、isatuximab | 抗 CD38 單株抗體（ADCC／直接凋亡） | 腫瘤學——多發性骨髓瘤 | 非長壽用途 |
| CD38 | ML385 | NRF2 抑制劑 | 將 CD38 連結至氧化壓力模組 | 社群 NRF2，19 條 out-edges，0 條 in-edges |
| SARM1 | Disulfiram | 共價修飾 TIR 半胱胺酸 | 老藥新用；臨床階段 | 社群標籤：Paracrine Senescence |
| SARM1 | DSRM-3716 | 非共價結合口袋 | 臨床前 | |
| SARM1 | GSK-428 | 喹唑啉類，nM 級 IC₅₀ | 臨床前 | |
| SARM1 | NB-4746 | 穿越血腦屏障，臨床階段（Nura Bio） | 臨床前／臨床 | |
| 受質池 | NR、NMN | 前驅物重補 | 臨床前；受 CD38 閘控 | 提升 NMN → SARM1 致敏風險 |
| 受質池 | NAMPT | FK866 | 腫瘤學——*耗竭* NAD+ | 反向策略，相同酵素 |
| PARP | PARP 抑制 | 阻斷第三條消耗途徑 | CD38 + PARP 抑制完全逆轉 LPS 誘導的 NAD+ 下降，單獨抑制皆失敗（Covarrubias 2020） | 多消費者抑制的先例 |

### 雙策略協同作用

- **策略 A——慢性**：CD38 抑制劑 + NR → 恢復受質供應以供 sirtuin 催化（數小時–數年尺度）。
- **策略 B——急性**：SARM1 抑制劑 → 防止軸突崩潰（數分鐘尺度）。

協同而非相加的原因：兩策略針對**同一受質池的不同區室與不同時間尺度**，因此合併覆蓋廣於任一單獨策略。

> [!warning] 該協同邊在圖譜中不存在
> 沒有已萃取的協同邊連結 CD38 抑制劑與 SARM1 抑制劑。該命題依建構方式為 AMBIGUOUS（0.45）——它是依匯聚的節點邏輯推斷，唯一的支持先例是 **CD38 + PARP**，而非 CD38 + SARM1。任何已發表的 CD38+SARM1 協同主張，必須標示為未經檢驗。
>
> NMN 致敏警示仍適用於**策略 A 的前驅物成分**（NR/NMN），理由如前所述——但不適用於單獨的 CD38 抑制。

---

## 跨層分歧：wiki 已統一 triples 仍分散的模組

這是目前建置中最清晰的結構發現。

逐層數字為**該層自身邊清單中的相異鄰居數**，而非儲存的 `degree` 屬性——與上述聯集數字的修正相同。

| 節點 | Wiki nb | Triples nb | Wiki 社群 | Triples 社群 | 解讀 |
|---|---:|---:|---|---|---|
| NAD+ | 270 | 38 | NAD+ | NAD+ | 兩層皆為中樞 |
| CD38 | 42 | 16 | NAD+ | **CD38** | 跨社群分裂 |
| SARM1 | 31 | 4 | NAD+ | **Nicotinamide Riboside** | 分裂 |
| NAMPT | 42 | 8 | NAD+ | **Heart Failure** | 分裂——salvage 酵素被歸入心臟社群 |
| NMNAT2 | 8 | — | NAD+ | — | wiki-only |
| Nicotinamide Riboside | 70 | 60 | NAD+ | Nicotinamide Riboside | 分裂 |
| NMN | 65 | 1 | NAD+ | Nicotinamide Mononucleotide | 兩層皆有——但見下方的影子節點列 |
| Nicotinamide Mononucleotide | 5 | 29 | **AMPK** | Nicotinamide Mononucleotide | 分裂，方向相反 |
| Glycolysis | 66 | 6 | Mitochondrial Respiration | **HIF-1α** | 分裂 |
| PARP1 | 89 | 11 | PARP1 | **Parthanatos** | 分裂 |
| Quercetin | 65 | 12 | Cellular Senescence | **Fisetin** | 分裂 |
| Apigenin | 94 | 39 | Senescence-Associated Secretory Phenotype | **p53** | 分裂 |
| Disulfiram | 12 | 1 | NAD+ | **Paracrine Senescence** | 分裂 |
| Microglia | 75 | 3 | Alzheimer's Disease | Microgliosis | 分裂 |
| Neuron | 28 | 3 | Alzheimer's Disease | Humanin | 分裂 |
| cADPR (Cyclic ADP-ribose) | 7 | — | NAD+ | — | wiki-only |
| cADP-Ribose | — | 1 | — | CD38 | triples-only |
| CD38 Inhibitor 78c | 11 | 7 | NAD+ | NAD+ | **兩層皆有**——但兩層的標籤拼寫不同 |
| ML385 | 19 | 1 | Nrf2 | NRF2 | 分裂 |
| DSRM-3716 / GSK-428 | 13 | — | NAD+ | — | wiki-only |
| NB-4746 | 12 | — | NAD+ | — | wiki-only |
| CZ-48 | 4 | — | NAD+ | — | wiki-only |

注：上表「分裂」為「分裂」之筆誤，已讀作分裂。

> [!warning] 請依節點 **id** 而非 label 比較兩層
> 兩層對同一批節點的拼寫不同：wiki 層寫 `CD38 Inhibitor 78c` 與 `NMN (Nicotinamide Mononucleotide)`，triples 層寫 `CD38 inhibitor 78c` 與 `NMN`。若以渲染後的 label 連接兩層，會無聲地丟失這些列，並使 wiki-only 節點看起來在兩層皆不存在。
> 上表以標準節點 id 連接。

**wiki 層已將整個 NAD+ 模組統一為單一的 `NAD+` 社群**——CD38、SARM1、NAMPT、NMNAT2、NR、CZ-48、Disulfiram、DSRM-3716、GSK-428、NB-4746、SLC25A51、Wallerian Degeneration 與 CIPN 皆位於其中。**triples 層仍將同一軸線分散於五個無關社群**，其中一個將 salvage 酵素 NAMPT 歸入 Heart Failure，另一個將 SARM1 抑制劑 Disulfiram 歸入 Paracrine Senescence。

合併資料集對共享 id 沿用了 triples 標籤（`scripts/combined/build.py`：「Triples wins for description / community / color on shared ids」），這正是合併 `community` 欄仍顯示 CD38、SARM1 與 NAMPT 分散的 triples 標籤的原因。這是**合併優先規則的已知代價**：較為一致的 wiki 分群已存在於資料中，卻對所有共享節點自預設 UI 隱藏。

實務後果：直接讀取合併資料集社群標籤的分析，將誤劃 NAD+ 模組的範圍。應改讀 wiki 層對這些節點的標籤。

---

## NAD+ 模組內的萃取缺口

| 缺口 | 證據 | 影響 |
|---|---|---|
| `cADPR` 存在為兩個節點 | `cADPR (Cyclic ADP-ribose)`（wiki-only，7 nb，社群 NAD+）對 `cADP-Ribose`（triples-only，1 nb，社群 CD38） | 兩種 NADase 的鈣訊號產物分裂為兩個節點身份，且 triples 側拼寫沒有筆記涵蓋。 |
| `NMN` 存在影子節點 | `nmn`（wiki 65 nb／triples 1 nb，wiki 標籤 `NMN (Nicotinamide Mononucleotide)`）對 `nicotinamide_mononucleotide`（wiki 5 nb／triples 29 nb，社群 AMPK） | 全頁的橋接代謝物存在為兩個節點身份，且**層強弱互為反轉**——圖譜無法辨識兩者為同一分子。由於 NMN 連結 CD38 與 SARM1，一半的連結經過一個不知自身為何物的節點。 |
| 同一節點 id 的層間標籤漂移 | wiki 層寫 `CD38 Inhibitor 78c` 與 `NMN (Nicotinamide Mononucleotide)`；triples 層寫 `CD38 inhibitor 78c` 與 `NMN` | 以渲染後 label 連接兩層時，會無聲地丟失這些列。化合物亦以論述而非識別符索引，阻礙系統性的化合物層級查詢。 |
| SARM1 抑制劑缺席於 triples | DSRM-3716 / GSK-428 / NB-4746 / CZ-48 為 **wiki-only**（13／13／12／4 nb）；Disulfiram 為 12 wiki nb 對 1 triples nb | 型別化層無法以有向邊表達 SARM1 藥理學；其僅以 wiki 共提及形式存續。 |
| `ML385` 近乎單向 | 19 個 wiki 鄰居、1 個 triples 鄰居，合併入邊為 **0**；社群標籤跨層不同（wiki `Nrf2`，triples `NRF2`） | NRF2 抑制劑向 CD38 *向外* 連接而無回邊——單向萃取假象，外加社群標籤漂移。 |
| `Microglia`／`Neuron` 為 stub | 合併儲存 degree 各為 3（聯集 76／29） | 中樞神經區室圖譜所依賴的節點，在型別化層中幾乎未獲解析。 |

---

## NAD+ 代謝中的性別分歧

據 `_link/NAD+.md`——此為至今在頁面上無處安放的大段內容。

- 全血 NAD+ **34.5 µmol/L（男性）對 31.3（女性）**；男性自 60 歲起漸進下降，女性無單調下降而呈波動（Yang et al.，*Front Endocrinol* 2022）。
- NAD+/NADH 比率 **1.33（女性）對 1.09（男性）**，P<0.001；差距隨 biological age 縮小（Schwarzmann et al.，*Biosci Rep* 2021）。
- **PARP-1 作為男性的消耗引擎**：PARP 活性隨年齡在男性皮膚上升，在女性皮膚*不*上升；在男性，PARP 與 NAD+ 呈反相關（r=−0.639）。**PARP-1 knockout 保護男性免於缺血性腦損傷，但加重女性損傷**（McCullough et al. 2005）。
- **Estrogen 介導的 PARP-1 穩定化是假說**，並非直接證明——在頁面上必須標示為假說。
- **CD38 與卵巢 NAD+ 下降**：CD38 隨生殖衰老在卵巢上升；CD38-KO 小鼠的原始卵泡池較大、卵巢 NAD+ 較高、生育力較高；>35 歲女性卵泡細胞的人類 CD38 mRNA 較 <25 歲者高（Wang et al.，*Nature Aging* 2023）。
- **NMN 壽命、依性別分列**（Kane et al.，*bioRxiv* 2024）：女性**中位壽命 +8.5%**（無代謝改善）；男性代謝健康改善，但**無**壽命延長。Metabolomics：女性 Preiss–Handler 代謝較多，男性肝臟 salvage 代謝較多。
- 女性隨年齡保留較高的絕對 SIRT1 與 SIRT3 蛋白池（pilot *Biology* 2025——初步，必須標示為非確立結果）。

含意：前驅物劑量與閘控選擇可能需要依性別分層——男性可能更受益於 PARP-1 抑制以減緩消耗，女性更受益於 CD38 抑制以防止卵巢 NAD+ 下降。

---

## Vault 自身標示的未決問題

1. CD38 抑制是否改變 SARM1 依賴的軸突退化？**尚無研究。**
2. CD38 + SARM1 合併抑制是否有協同作用？**僅有 CD38 + PARP 例證。**
3. Microglia 中 CD38／SARM1 的共表現——圖譜節點為 stub。
4. NR + CD38 抑制劑劑量：NMN 保存是否越過 SARM1 啟動閾值？
5. CD38 + PARP 與 CD38 + SARM1，何者為較佳的雙組合？
6. 哪一個 NMN 比率重要——plasma、組織或軸突區室？
7. CIPN 匯聚（兩種 NADase 抵達同一適應症）反映共享因果軸，抑或為共提及假象？

---

## 自 7 月追蹤沿用的勘誤

| 7 月主張 | 目前狀態 |
|---|---|
| 「CD38 ↔ SARM1 之間不存在直接邊」（bridging_gaps，17 Jul） | **已取代。** 該邊現存在於兩層，且共享鄰居 NAD+ 與 cADPR。 |
| 「CD38 degree 12／15」 | 目前建置聯集度數為 **48**（wiki 42 nb，triples 16 nb）。 |
| 「SARM1 degree 8／20」 | 聯集度數為 **31**（wiki 31 nb，triples 4 nb）。 |
| 「NMN 連結邊仍為 AMBIGUOUS」 | 機制上未變；仍無研究。 |
| 「協同邊缺席」 | 仍缺席——正確如此。 |
| 「Disulfiram、DSRM-3716、GSK-428 無圖譜節點」 | **已解決。** 四者皆為節點；DSRM-3716、GSK-428、NB-4746 與 CZ-48 為 wiki-only，Disulfiram 存在於兩層。 |
| 「CD38 抑制可能使 SARM1 致敏」（原將 CD38 抑制標示為即時風險） | **陳述過強。** CD38-KO 軸切術資料具保護作用。風險附著於**前驅物補充**，而非 CD38 抑制。 |
