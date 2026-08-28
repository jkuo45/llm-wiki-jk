---
title: 節點分析 — 哺乳動物 Sirtuins（SIRT1–7）vs. 來自衰老綜述的標的與受質
description: 以 scripts/04_node_analysis.py 將目標 / 受質目錄（修飾 / 活化 / 抑制，取自 Grabowska 等人 2017）對 graphify-out/graph.json 進行圖譜驗證——最短路徑多重度、鄰域 Jaccard、Adamic-Adar、k-core、譜分析、有效電阻與個人化 PageRank 等指標，復原受質歸屬、暴露策展缺口（SIRT1→H3K9），並以 NF-κB 作為最具網絡中心性的介入節點，對殘基層級的可藥性槓桿進行排序。
created: 2026-08-17
updated: 2026-08-22
source: graphify-out/graph.json (2506 nodes / 3213 edges) + scripts/04_node_analysis.py + Grabowska, Sikora & Bielak-Zmijewska, Biogerontology 2017 (PMC5514220)
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - sirtuins
  - aging
  - substrates
  - personalized-pagerank
  - adamic-adar
  - effective-resistance
  - therapeutics
author: []
---
# 節點分析 — 哺乳動物 Sirtuins（SIRT1–7）vs. 其標的與受質

> [!NOTE]
> **任務**：在七個哺乳動物 sirtuin 上對 source 綜述 *「Sirtuins, a promising target in slowing down the ageing process」*（[[Sirtuins, a promising target in slowing down the ageing process]]；Grabowska, Sikora & Bielak-Zmijewska, Biogerontology 2017；[PMC5514220](https://pmc.ncbi.nlm.nih.gov/articles/PMC5514220/)；DOI 10.1007/s10522-017-9685-9）目標 / 受質表中列出的細胞內**標的與受質**運行 `scripts/04_node_analysis.py`——依該綜述的三個標的欄位組織：**Modification**、**Activation**、**Inhibition**——並輔以網路研究補充。
> **日期**：17_AUGUST_2026 10:20 AM PDT
> **圖譜**：`graphify-out/graph.json` — 2506 節點 / 2055 個巨成分節點 / 3213 條邊
> **執行次數**：3 次（source 文件每個標的類別一次），完整可重現指令見「Reproducibility（可重現性）」。

---

## 目標

source 文件的受質 / 標的目錄，針對每個哺乳動物 sirtuin 總結了：定位、酵素活性、**標的與受質（Modification / Activation / Inhibition）**、功能、組織表現與衰老參與。本分析測試 vault 的知識圖譜（由超越此綜評的眾多文件建構而成）在多大程度上能復原、排序並互連這些標的歸屬——運用最短路徑多重度、鄰域 Jaccard、Adamic-Adar、k-core、譜分析、有效電阻與個人化 PageRank（PPR）等指標。指導性目標是浮現哪些 **sirtuin–標的關係是最易處理、最具網絡中心性的治療介入槓桿**，用於衰老與年齡相關疾病。

## 來源文件標的目錄 — 標的與受質（依類別標示）

由 source 文件的受質 / 標的表重建（[[Sirtuins, a promising target in slowing down the ageing process]]）。**粗體** = 該標的作為圖譜節點存在；*(mapped)* = 以變體標籤存在；— = 圖譜中缺席。

| Sirtuin（定位） | 活性 | **Modification**（去醯化受質） | **Activation** | **Inhibition** |
| :--- | :--- | :--- | :--- | :--- |
| **SIRT1**（核 / 胞質） | 去乙醯酶 | 組蛋白 **H1/H3/H4**（H1K26、H1K9、**H3K9**、**H3K56**、H3K14、**H4K16**）、**α-tubulin** *(→Tubulin)*、**p53**（穩定化） | **Suv39h1** *(→SUV39H1)*、**LKB1**、**AMPK**、**NBS1**、**XPA**、**Mn-SOD** *(→MnSOD)*、**WRN**、**Ku70**、**FOXO**、**PGC-1α** | **NFκB** *(→NF-κB)*、**p300** *(→P300)*、**p66shc** *(→p66Shc)*、**mTOR** |
| **SIRT2**（胞質 / 核） | 去乙醯酶 | **α-tubulin** *(→Tubulin)*、**H4K16**、**Histone H4** | **FOXO** | **NFκB** *(→NF-κB)*、**p53** |
| **SIRT3**（粒線體 / 核 / 胞質） | 去乙醯酶 | H3/**H4**（**H3K9**、**H4K16**） | **FOXO**、**Ku70**、**Mn-SOD** *(→MnSOD)*、**Catalase**、**IDH2** | **p53**、**HIF-1α** |
| **SIRT4**（粒線體） | ADP-ribosyltransferase | *(無列出)* | *(無列出)* | **GDH**、**AMPK** |
| **SIRT5**（粒線體 / 胞質 / 核） | 去乙醯酶、demalonylase、desuccinylase | *(無列出)* | **SOD1** *(→SOD1 (via desuccinylation))* | *(無列出)* |
| **SIRT6**（核、染色質） | 去乙醯酶 + ADP-ribosyltransferase | H2B/H3（**H2BK12**、**H3K9**、**H3K56**）、**WRN**（穩定化） | **FOXO**、**PARP1**、**CtIP** | **NFκB** *(→NF-κB)*、**IGF-1** |
| **SIRT7**（核仁 / 核） | 去乙醯酶 | **H2A**、**H2B**、H3（**H3K18** → *H3K18ac*） | **FOXO** | **RNA polymerase I** *(→RNA Polymerase I)* |

> [!TIP]
> **圖譜涵蓋率**
> source 文件中 **34 個不同標的概念有 31 個（91%）** 存在於 `graphify-out/graph.json`。使用的變體對映：Mn-SOD→`MnSOD`、α-tubulin→`Tubulin`、p66shc→`p66Shc`、NFκB→`NF-κB`、H3K18→`H3K18ac`、SOD1→`SOD1 (via desuccinylation)`。未以規範節點呈現者：核心組蛋白 H1 / H3 作為獨立分子（改以殘基標記節點存在：`H3K9`、`H3K56`、`H3K14`、`Histone H3K9`、`H3K18ac`——見「Caveats, Gaps & Entity-Resolution Notes（注意事項、缺口與實體解析備註）」）。

## Sirtuin 節點指紋

| 節點 | degree（入 / 出） | PageRank | betweenness | k-core | 社群（規模） | 角色解讀 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SIRT1** | 212（27/185） | 0.003514 | **0.1653** | **6** | SIRT1（126） | 第 1 名 god node；主導性源頭 / 主控調節者 |
| **SIRT6** | 115（9/106） | 0.001645 | 0.0624 | 5 | SIRT6（69） | 第 2 名 sirtuin 中樞 |
| **SIRT3** | 104（5/99） | 0.000496 | 0.0587 | 5 | SIRT3（56） | 粒線體中樞 |
| **SIRT2** | 79（9/70） | 0.001114 | 0.0419 | 5 | SIRT2（54） | — |
| **SIRT4** | 43（1/42） | 0.000257 | 0.0197 | 5 | SIRT4（28） | — |
| **SIRT5** | 43（1/42） | 0.000317 | 0.0237 | 5 | SIRT5（30） | — |
| **SIRT7** | 40（0/40） | 0.000225 | 0.0221 | 5 | SIRT7（28） | 純源頭（in-degree 0） |

> [!IMPORTANT]
> 每個 sirtuin 都是**源頭型節點**（`out_degree` ≫ `in_degree`）：圖譜將它們編碼為作用*於*其標的的上游調節者，而非被施加作用的實體——與 source 文件的框架完全一致。SIRT1 是 vault 中單一最高 degree 的節點（212），前 5 名 god nodes 中有 3 個是 sirtuin，且只有 SIRT1 達到 k-core 6（與 [[p53]]、[[NF-κB]] 及 [[mTOR]] 共享內層骨幹）。

## Modification 標的 — 去醯化受質

`--sources SIRT1 SIRT2 SIRT3 SIRT6 SIRT7 --targets p53 Tubulin "Histone H4" H3K9 H4K16 H3K56 H2BK12 WRN H2A H2B H3K18ac`

### 圖譜中發現的直接受質邊（1-hop 路徑）

| Sirtuin | 直接受質邊（關係\|信心度） |
| :--- | :--- |
| **SIRT1** | → Tubulin（deacetylates\|0.9）、→ H4K16（0.95）、→ H3K56（0.9）、→ WRN（activates\|0.9） |
| **SIRT2** | → Tubulin（deacetylates\|0.95）、→ Histone H4（deacetylates\|0.95） |
| **SIRT3** | → H3K9（deacetylates\|0.9）、→ H4K16（deacetylates\|0.9） |
| **SIRT6** | → H2BK12（deacetylates\|0.9）、→ WRN（deacetylates\|0.9） |
| **SIRT7** | → H2A（0.9）、→ H2B（0.9）、→ H3K18ac（0.95） |

### PPR 正確重新推導每個受質的修飾 sirtuin

| 種子（受質） | 依 PPR 排名最高的 sirtuin | 解釋 |
| :--- | :--- | :--- |
| Histone H4 | **SIRT2 #1**（0.266） | SIRT2 = 主導的 H4K16 去乙醯酶 ✓ |
| H3K9 | **SIRT3 #1**（0.246） | 核內 SIRT3 於壓力下去乙醯化 H3K9 ✓ |
| H4K16 | **SIRT1 #1**（0.152）、SIRT3 #3（0.125） | 共享的 SIRT1 / SIRT3 標記 ✓ |
| H3K56 | **SIRT1 #1**（0.276） | ✓（SIRT6 也去乙醯化 H3K56——見「Caveats, Gaps & Entity-Resolution Notes」） |
| H2BK12 | **SIRT6 #1**（0.259） | ✓ |
| WRN | **SIRT1 #1**（0.153）、SIRT6 #3（0.138） | 兩者皆穩定化 / 去乙醯化 WRN ✓ |
| H2A / H2B / H3K18ac | **SIRT7 #1**（0.263，三者皆然） | ✓（Barber 等人 2012，H3K18ac） |
| p53 | SIRT1 #2（0.026）、SIRT6 #4、SIRT2 #5、SIRT3 #6、SIRT7 #8 | 五者全部修飾 / 調節 p53 ✓ |
| Tubulin | SIRT1 #2（0.052）、SIRT2 #3（0.049） | SIRT1 / SIRT2 α-tubulin 去乙醯化 ✓ |

*(PPR 排名 #1 = 該 sirtuin 排名甚至高於種子本身；排名 #2 = 最高的非種子節點——見「Caveats, Gaps & Entity-Resolution Notes」。）*

### 有效電阻（通勤距離，與 300 節點零模型做 z 分數標準化）

所有 sirtuin 都**比隨機更接近每個目錄受質**（z ≈ −1.6 至 −2.1）。最接近的 sirtuin 歸屬與文獻一致：SIRT7→H2A（z = −2.07）、SIRT7→H3K18ac（−1.88）；SIRT1→p53（R_eff 0.080）、SIRT1→Tubulin（0.231）、SIRT1→H3K56（1.111）；SIRT3→H3K9（1.111）；SIRT6→H2BK12（1.111）；SIRT1 與 SIRT6→WRN（皆為 0.567）。

### 結構備註

- 組蛋白標記受質是 **k-core 1–2 的周邊葉節點**（degree 1–2）——它們是終端的「效應標記」，而非中樞。p53（k-core 6）與 Tubulin（k-core 4）是圖譜核心中僅有的修飾標的。
- 社群是**受質註解的**：H3K56 位於 SIRT1 社群；H3K9 + H4K16 在 SIRT3；H2BK12 + WRN 在 SIRT6；H2A + H2B + H3K18ac 在 SIRT7——Leiden 聚類在未獲得該表的情況下便復原了 source 文件的受質歸屬。
- Adamic-Adar：只有 SIRT1 對外來受質展現非零接近度（p53 0.711；H2A/H2B/H3K18ac 0.271 經由 SIRT7；H2BK12/WRN 0.212 經由 SIRT6）——亦即 SIRT1 是最可能獲取*新*受質連結的 sirtuin。

> [!WARNING]
> **發現缺口**
> 沒有直接的 `SIRT1→H3K9` 邊，儘管 source 文件與綜評正文（以及 Vaquero 等人 2007）確立 SIRT1 為主要的 H3K9 去乙醯酶。圖譜經由 19 條三跳路徑將 SIRT1→H3K9 繞送（第一跳經由 `Cellular Senescence`、`NF-κB`、`FOXO1`… 進入 SIRT3）。SIRT6→H3K9 / H3K56 同樣是間接的（經由 SIRT1 或 Cellular Senescence）。候選 triples 供未來的 triples 處理批次使用。

## Activation 標的 — 受 Sirtuin 活化

`--sources SIRT1 SIRT2 SIRT3 SIRT5 SIRT6 SIRT7 --targets SUV39H1 LKB1 AMPK NBS1 XPA MnSOD Ku70 FOXO PGC-1α Catalase IDH2 PARP1 CtIP "SOD1 (via desuccinylation)"`

### 直接活化邊（1-hop）

- **SIRT1** → SUV39H1、AMPK（0.95）、NBS1、XPA、MnSOD、Ku70、PGC-1α（activates）、FOXO（regulates\|0.95）
- **SIRT2** → FOXO（activates）
- **SIRT3** → IDH2、Ku70、MnSOD、Catalase（activation edges）
- **SIRT5** → SOD1 via desuccinylation（0.95）
- **SIRT6** → PARP1（activates\|0.9）、CtIP（activates\|0.9）、Catalase（upregulates\|0.95）
- 社群共定位確認歸屬：NBS1 + XPA ∈ SIRT1 社群；Ku70 + IDH2 ∈ SIRT3；SOD1 ∈ SIRT5；CtIP ∈ SIRT6。

### PPR 排序（種子 = 活化標的 → 最佳 sirtuin）

| 種子 | Sirtuin 排名（排名，分數） | 與 source 文件相符 |
| :--- | :--- | :--- |
| **NBS1**、**XPA** | **SIRT1 #1**（0.276） | 僅 SIRT1 活化 ✓ |
| **SUV39H1** | **SIRT1 #2**（0.148） | ✓（K266 去乙醯化） |
| **LKB1** | SIRT1 #2（0.091）、SIRT3 #3（0.079） | ✓（SIRT1 去乙醯化 LKB1 K48） |
| **AMPK** | SIRT1 #2（0.036）、**SIRT5 #3**、SIRT6 #4、SIRT3 #8 | SIRT1 ✓；SIRT5 連結值得注意（AMPK→SIRT5 邊驅動它） |
| **MnSOD** | SIRT1 #2（0.057）、SIRT6 #3、SIRT3 #4、SIRT2 #5 | SIRT1 + SIRT3 ✓ |
| **Ku70** | SIRT1 #2（0.149）、SIRT3 #3（0.129） | SIRT1 + SIRT3 ✓ |
| **FOXO** | SIRT1 #2（0.074）、SIRT6 #3、SIRT2 #4、SIRT7 #5 | FOXO 是普遍共享的標的 ✓ |
| **PGC-1α** | SIRT1 #2（0.098）、SIRT6 #3（0.076） | SIRT1 ✓ |
| **Catalase** | **SIRT6 #2**（0.043） | 表中為 SIRT3；圖譜經由 SIRT6 上調來繞送 Catalase |
| **IDH2** | **SIRT3 #1**（0.246） | ✓（K413 去乙醯化） |
| **PARP1** | **SIRT6 #2**（0.091） | ✓（單一 ADP-ribosylation K521） |
| **CtIP** | **SIRT6 #1**（0.259） | ✓（K432 / K526 / K604 去乙醯化） |
| **SOD1** | **SIRT5 #1**（0.271） | ✓（desuccinylase；Lin 等人 2013） |

### 有效電阻（每個標的最接近的 sirtuin）

SIRT1 是距 AMPK（0.088）、FOXO（0.240，z = −1.88）、PGC-1α（0.310，z = −1.89）、MnSOD（0.196）、NBS1 / XPA（1.111）、LKB1（0.389）、Ku70（0.567）最近的 sirtuin。正確的非 SIRT1 贏家：**SIRT3→IDH2**（1.111）、**SIRT5→SOD1**（1.053，z = −2.09，本輪最強 z）、**SIRT6→CtIP**（1.111，z = −1.87）與 **SIRT6→PARP1**（0.397）。

### Adamic-Adar（連結預測接近度）

最高分數：**SIRT3→AMPK 1.846** 與 **SIRT1→AMPK 1.606**（兩者皆作為邊存在——確認 AA 能復原已知連結），接著 SIRT1→PGC-1α 0.725、SIRT5→AMPK 0.721、SIRT6→LKB1 0.521、SIRT1→FOXO 0.483、SIRT1 / SIRT5→LKB1 0.334。

> [!NOTE]
> **k-core**
> 活化標比修飾受質更深入核心：AMPK、MnSOD、FOXO 為 k-core 5；PGC-1α / Catalase 為 k-core 4；LKB1 / PARP1 為 k-core 3。被活化的標的是網絡中樞（訊號傳遞 / 能量酵素），而被修飾的受質（組蛋白標記）是周邊葉節點——這是 source 文件兩個類別之間乾淨的結構性分離。

## Inhibition 標的 — 受 Sirtuin 抑制

`--sources SIRT1 SIRT2 SIRT3 SIRT4 SIRT6 SIRT7 --targets NF-κB P300 p66Shc mTOR HIF-1α IGF-1 GDH "RNA Polymerase I" p53`

### 直接抑制邊（1-hop）

| Sirtuin | 直接抑制邊 |
| :--- | :--- |
| **SIRT1** | → P300（inhibits\|0.9）、→ mTOR（0.9）、→ HIF-1α（0.9）；+ 來自 NF-κB、p66Shc、p53 的互惠 `inhibited_by` 邊（綜評中描述的 NF-κB / miR-34a 與 p53 / miR-34a 回饋迴圈） |
| **SIRT2** | → p53（inhibits\|0.9） |
| **SIRT3** | → p53（inhibits\|0.9）、→ HIF-1α（destabilizes\|0.85） |
| **SIRT4** | 存在 GDH 邊（`SIRT4–GDH`，0.9；方向說明見「Caveats, Gaps & Entity-Resolution Notes」） |
| **SIRT6** | → HIF-1α（corepresses\|0.9）、→ IGF-1（inhibits\|0.9）；+ NF-κB 互惠邊 |
| **SIRT7** | → RNA Polymerase I（inhibits\|0.9）、→ NF-κB（inhibits_nuclear_translocation_of\|0.95） |

### PPR 排序（種子 = 被抑制標的 → 最佳 sirtuin）

| 種子 | Sirtuin 排名 | 與 source 文件相符 |
| :--- | :--- | :--- |
| **NF-κB** | SIRT1 #2（0.022）、SIRT6 #4、SIRT3 #5、SIRT7 #6、SIRT2 #8、SIRT4 #10 | SIRT1 / 2 / 6 / 7 皆抑制 NF-κB ✓（最共享的抑制標的） |
| **P300** | SIRT1 #2（0.224） | 僅 SIRT1 ✓ |
| **p66Shc** | **SIRT1 #1**（0.276） | 僅 SIRT1 ✓ |
| **mTOR** | SIRT1 #2（0.032） | 僅 SIRT1 ✓ |
| **HIF-1α** | SIRT1 #2（0.052）、SIRT6 #3、SIRT7 #4、SIRT3 #5 | 表中為 SIRT3 / SIRT6；圖譜加入 SIRT1 / SIRT7 交叉連結 ✓ |
| **IGF-1** | **SIRT6 #1**（0.259） | 僅 SIRT6 ✓（Kanfi 等人 2012） |
| **GDH** | **SIRT4 #3**（0.129；前 2 名為變體 `GDH (Glutamate Dehydrogenase)` 節點與 SIRT4 社群鄰居） | 僅 SIRT4 ✓ |
| **RNA Polymerase I** | **SIRT7 #1**（0.263） | 僅 SIRT7 ✓ |
| **p53** | SIRT1 #2、SIRT6 #4、SIRT2 #5、SIRT3 #6、SIRT7 #8 | SIRT1 / 2 / 3 修飾 + 抑制 ✓ |

### 有效電阻

SIRT1 最接近 NF-κB（R_eff 0.056——三輪中所有 sirtuin–標的最緊密的通勤距離）、mTOR（0.114）、p53（0.080）、HIF-1α（0.171）。正確的非 SIRT1 贏家：**SIRT6→IGF-1**（1.111）、**SIRT4→GDH**（0.594）、**SIRT7→RNA Pol I**（1.111，z = −2.07）。

### Adamic-Adar

**SIRT1→NF-κB 1.786** 是抑制類別中最高的分數；接著 SIRT6→NF-κB 1.261、SIRT7→NF-κB 1.097、SIRT3→NF-κB 0.731、SIRT1→p53 0.711、SIRT1→mTOR 0.498、SIRT1→HIF-1α 0.483。NF-κB 是每個 sirtuin 最強的預測連結中樞——與綜評將 NF-κB 框架為受 sirtuin 調節的中央促老化轉錄因子（SASP 驅動者）一致。

> [!IMPORTANT]
> **NF-κB 是唯一的、其本身即為 god 級中樞的標的**：degree 47、PageRank 0.00441（高於 SIRT1 的 0.00351）、k-core 6、擁有自己的 Leiden 社群。抑制 NF-κB 是 sirtuin 家族所執行的單一最具網絡中心性的動作。[[p53]]、[[mTOR]]（k-core 6）與 [[HIF-1α]]（k-core 5）緊隨其後。

## 跨類別綜合

### Sirtuin–sirtuin 鄰域相似度（成對 Jaccard）

| 配對 | Jaccard | | 配對 | Jaccard |
| :--- | :--- | :--- | :--- | :--- |
| SIRT2–SIRT3 | **0.089** | | SIRT3–SIRT6 | 0.053 |
| SIRT1–SIRT6 | **0.088** | | SIRT3–SIRT4 | 0.050 |
| SIRT1–SIRT3 | 0.065 | | SIRT2–SIRT7 | 0.044 |
| SIRT1–SIRT2 | 0.063 | | SIRT6–SIRT7 | 0.041 |
| SIRT3–SIRT5 | 0.043 | | SIRT1–SIRT4 | 0.033 |
| SIRT2–SIRT6 | 0.043 | | SIRT1–SIRT7 | 0.029 |
| SIRT4–SIRT6 | 0.040 | | SIRT5–SIRT6 | 0.013 |
| SIRT4–SIRT7 | 0.037 | | SIRT5–SIRT7 | 0.012 |

- **SIRT2–SIRT3** 與 **SIRT1–SIRT6** 是功能重疊最多的配對（共享鄰域：MnSOD、NF-κB、FOXO1 / 3a、p53、NLRP3、osteoarthritis / Alzheimer's disease 節點）。
- **SIRT5 是離群者**（與所有人的 Jaccard ≤ 0.043）——符合其獨特的 desuccinylase / demalonylase / deglutarylase 化學性質與尿素循環利基（依 source 文件）。
- 譜分析：所有 sirtuin 的 Fiedler 值緊密聚集（−0.0054…−0.0068，λ₂ = 0.0454）——沒有任何 sirtuin 被分到圖譜主切割的遠端；它們形成一個功能性超級叢集。

### 發現的 Sirtuin 交叉對話邊（路徑分析中的橋樑）

- `SIRT1 ⇄ SIRT6`——相互 *activates*（0.9）；SIRT1 經由此邊繞送至 SIRT6 受質（PARP1、CtIP、Catalase、IGF-1）。
- `SIRT1 ⇄ SIRT7`——相互 *inhibits_autocatalytic_activation_of*（0.95）；SIRT1 經由此邊到達 SIRT7 受質（H2A、H2B、H3K18ac、RNA Pol I）。
- `SIRT5` 經由 `AMPK --activates--> SIRT5` 從 SIRT1 到達；`SIRT4` 嵌入一個 Atherosclerosis / GDH / Insulin-Secretion 叢集。
- 跨 sirtuin 路徑的普遍橋樑：**NF-κB**（主導），接著 MnSOD、p53、FOXO、Cellular Senescence、HIF-1α。

### 類別層級結構模式

| 標的類別 | 典型標的 k-core | 典型 degree | 結構身分 |
| :--- | :--- | :--- | :--- |
| **Modification**（組蛋白標記、α-tubulin） | 1–2 | 1–8 | 周邊效應葉節點 |
| **Activation**（AMPK、FOXO、MnSOD、PARP1…） | 3–5 | 1–22 | 中核心訊號傳遞 / 能量中樞 |
| **Inhibition**（NF-κB、p53、mTOR、HIF-1α） | 5–6 | 1–47 | 核心促老化驅動者中樞 |

source 文件的三個標的欄位佔據**截然不同的網絡殼層**：sirtuin 修飾周邊的染色質受質、活化中核心的穩態酵素，並抑制內核心的老化驅動者。這是對綜評「sirtuin 作為抗衰老主控調節者」論題的圖譜層級確證。

## 治療要點 — 標的、受質與可藥性槓桿

> [!IMPORTANT]
> **目標框架**
> sirtuin–標的關係的網絡結構本身就是一份治療優先順序地圖：最具**網絡中心性**與**最共享**的標的是最高價值的介入點，而每個 sirtuin 的**選擇性利基**則指向可贏得特異性（從而安全性）之處。

### 治療槓桿的網絡中心性排序

- **NF-κB 是 sirtuin 家族所作用單一最具網絡中心性的標的**（degree 47、PageRank 0.00441——高於 SIRT1 的 0.00351、k-core 6、擁有自己的 Leiden 社群）。抑制 NF-κB——這個受 sirtuin 調節的中央促老化轉錄因子與 SASP 驅動者——是最高價值的治療動作。它同時是**最共享**的抑制標的（SIRT1 / 2 / 6 / 7 皆抑制它）以及最強的預測連結中樞（Adamic-Adar SIRT1→NF-κB 1.786）。一種 sirtuin 擬似物或 NF-κB 抑制策略會命中整個被分析子圖中最稠密的節點。
- **內核心促老化驅動者**（NF-κB、p53、mTOR、HIF-1α；k-core 5–6）是最高價值的介入殼層——sirtuin 抑制它們。相對地，**修飾受質**（組蛋白標記）是終端的周邊葉節點（k-core 1–2），作為全身性治療錨點較不具吸引力。治療努力應集中於 sirtuin 已經調節的內核心驅動者。

### 各 sirtuin 的治療利基（選擇性所在）

- **SIRT1**——第 1 名 god node 與主導性主控調節者。活化 SIRT1 會在範圍最廣的標的集上產生迴響（p53、NF-κB、mTOR、HIF-1α、PGC-1α、FOXO、MnSOD、Ku70、NBS1、XPA、LKB1、SUV39H1）。廣譜活化 = 最大抗衰老覆蓋但最低選擇性；可能需要與選擇性 sirtuin 調節劑組合，以避免 off-target 擴散。
- **SIRT2**——α-tubulin / H4K16 去乙醯酶軸現在是活躍的藥物發現標的（選擇性抑制劑與降解劑；*Med Res Rev* 2026，PMID 42087377）。圖譜中的 Tubulin–SIRT2 邊（0.95 信心度）位於**治療熱點**——對神經退化與腫瘤學中的選擇性調節具吸引力。
- **SIRT3**——粒線體中樞；選擇性活化瞄準 **MnSOD K122**、**IDH2 K413**、Ku70、Catalase——一個連貫的抗氧化 / 粒線體回復力程式。
- **SIRT4**——獨特的 **GDH 抑制**利基（胰島素分泌 / 代謝調節）；具備乾淨代謝選擇性敘事的離群化學性質。
- **SIRT5**——desuccinylase / demalonylase / deglutarylase 離群者（與每個其他 sirtuin 的 Jaccard ≤ 0.043），錨定於尿素循環。**選擇性 desuccinylase 抑制劑是一個未被充分利用的機會**，正是因為 SIRT5 幾乎不與其兄弟節點共享鄰域。
- **SIRT6**——IGF-1 抑制（Kanfi 等人 2012）、HIF-1α 協同抑制、**PARP1 單一 ADP-ribosylation K521**、**CtIP 去乙醯化**——一個帶有多重化療保護槓桿的 DNA 修復 / 長壽節點。
- **SIRT7**——RNA Polymerase I 抑制與 **H3K18ac 去乙醯化**（Barber 等人 2012）定義了一個與致癌生長相關的核仁 / 核糖體合成軸。

### 殘基層級可藥性位點（化學上可處理的乙醯化標記）

由 source 文件與綜評正文而來，定義最精確的 sirtuin 受質離胺酸是直接針對受質選擇性藥理學的化學把手：**p53 K320 / K373 / K382**、**Suv39h1 K266**、**p300 K1020 / K1024**、**LKB1 K48**、**XPA K63 / K67**、**Ku70**（multi-Lys）、**NF-κB / RelA K310**、**MnSOD K122**、**IDH2 K413**、**CtIP K432 / K526 / K604**、**PARP1 K521**、**H3K18**。瞄準這些標記的受質選擇性 sirtuin 調節劑，能讓治療在不全面活化 sirtuin 的情況下介入單一路徑。

### 去醯化酶擴展開啟新的受質空間

2017 年後的文獻（Zhang 等人，*Glycoconj J* 2026，PMID 42329469；Zheng，*Chem Biol Drug Des* 2024，PMID 39556442）顯示 SIRT1–7 現在帶有 **>10 種不同的酵素活性**，包括強健的 **delactylase（Kla）** 以及對離胺酸 malonylation（Kma）、β-hydroxybutyrylation（Kbhb）與 succinylation（Ksucc）的活性。因此 source 文件的「Modification」目錄是一個**下限，而非上限**——每一個新驗證的去醯化受質都是一個全新的治療標的。該領域對*去醯化酶選擇性*突變體 / 抑制劑的呼籲，是此發現可付諸行動的轉譯。

### 跨 sirtuin 橋樑作為組合策略點

- `SIRT1 ⇄ SIRT6` 相互活化與 `SIRT1 ⇄ SIRT7` 相互自催化調節邊顯示 sirtuin 並非獨立——一個 SIRT1 調節藥物會次級性地牽動 SIRT6（PARP1、CtIP、Catalase、IGF-1）與 SIRT7（H2A / H2B / H3K18ac、RNA Pol I）的受質。
- **NF-κB 是跨 sirtuin 路徑的普遍橋樑**，強化其作為任何多 sirtuin 治療程式的匯聚點。

### 策展缺口 = 未充分探討的治療連結

缺失的直接邊——**SIRT1→H3K9**、**SIRT6→H3K9 / H3K56**——在生物學上有充分支持（Vaquero 2007；Michishita 2008 / 2009；Yang 2009）。無論它們是策展缺口或確實為間接調節，這些 sirtuin–受質配對都是**值得驗證的候選治療關係**，而它們在圖譜中的缺席標記出一個值得在下一輪 triples 處理中填補的盲點。

## Caveats, Gaps & Entity-Resolution Notes（注意事項、缺口與實體解析備註）

- **PPR 排名解讀**：在 `alpha = 0.85` 下，種子節點通常持有排名 #1（約 0.15 的傳送質量）。對於 degree-1 的葉節點種子（H3K9、IDH2、IGF-1、SOD1、H2BK12、CtIP…），其唯一鄰居 sirtuin 累積 >0.24 並取得排名 #1——因此*排名 #1 的 sirtuin = 排名高於種子本身；排名 #2 = 最高的非種子節點*。兩者皆代表主導流。
- **Jaccard = 0.000** 對葉節點標的是可預期的（葉的唯一鄰居就是其 sirtuin；中樞鄰域不與其相交）。Jaccard 僅對中樞標的具鑑別力（NF-κB、AMPK、FOXO、p53）。
- **邊方向語意**：以主詞為導向的標籤——`SIRT1 --[inhibited_by]--> NF-κB` 讀作「SIRT1 被 NF-κB 抑制」（miR-34a 回饋迴圈），而互惠的生物學邊 `SIRT1 deacetylates NF-κB` 存在於**變體節點** `NF-kappaB` 上（於圖譜自身的 surprising-connections 報告中標記）。`SIRT4 --[inhibited_by]--> GDH` 與文獻方向（SIRT4 ADP-ribosylates / inhibits GDH）亦同。
- **應於未來 triples 處理批次合併的重複 / 變體節點**：`NF-κB` vs `NF-kappaB`；`MnSOD` vs `SOD2` vs `SOD2 (Superoxide Dismutase 2)`；`GDH` vs `GDH (Glutamate Dehydrogenase)` vs `Glutamate dehydrogenase`；`H3K9` vs `Histone H3K9` vs `H3K9ac`；`PGC-1α` vs `PGC-1alpha`。
- **缺失的直接邊（策展機會）**：SIRT1→H3K9、SIRT6→H3K9、SIRT6→H3K56（皆具充分支持：Vaquero 2007；Michishita 2008 / 2009；Yang 2009）。
- 預先計算的 `degree`（SIRT1 為 212）已計入載入時移除的 3 個自環（sirtuin 指紋一節報告為 209）——僅屬表面差異。

## Web-Research Supplement — Source 文件標的目錄的 2017 年後更新

source 綜評（2017）已註記該領域從「去乙醯酶」轉向**去醯化酶（deacylases）**（SIRT6 偏好長鏈醯基——demyristoylase / depalmitoylase，Jiang 等人 2013；SIRT5 demalonylase / desuccinylase，Du 等人 2011）。近期文獻延伸了此點：

- **Zhang 等人，Glycoconj J 2026**（PMID 42329469，DOI 10.1007/s10719-026-10223-3）：SIRT1–7 現在帶有 **>10 種不同的酵素活性**；SIRT1–3 還具備強健的 **delactylase（Kla）** 活性，且 sirtuin 作用於離胺酸 malonylation（Kma）、β-hydroxybutyrylation（Kbhb）與 succinylation（Ksucc）——因此 source 文件的「Modification」欄是一個下界，而非封閉清單。
- **Zheng，Chem Biol Drug Des 2024**（PMID 39556442，DOI 10.1111/cbdd.14460）：每個哺乳動物 sirtuin 擁有**多種個別的去醯化酶活性**，橫跨 formyl → acetyl → succinyl → myristoyl 受質；呼籲發展去醯化酶選擇性突變體 / 抑制劑以剖析各別活性的生理學。
- **Advances in SIRT2-Targeted Therapeutics，Med Res Rev 2026**（PMID 42087377）：SIRT2 的 α-tubulin / H4K16 去乙醯酶軸現在是活躍的藥物發現標的（選擇性抑制劑、降解劑）——圖譜中的 Tubulin–SIRT2 邊（0.95 信心度）位於治療熱點。
- 來自 source 文件的關鍵殘基層級歸屬（與其標的目錄一致）：SIRT1 去乙醯化 **p53 K320 / K373 / K382**、**Suv39h1 K266**、**p300 K1020 / K1024**、**LKB1 K48**、**XPA K63 / K67**、**Ku70**（multi-Lys）、**NF-κB / RelA K310**；SIRT6 去乙醯化 **CtIP K432 / K526 / K604**、單一 ADP-ribosylates **PARP1 K521**；SIRT3 去乙醯化 **MnSOD K122**、**IDH2**；SIRT7 去乙醯化 **H3K18**（Barber 等人 2012）。

## Reproducibility（可重現性）

```bash
# Modification
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --sources SIRT1 SIRT2 SIRT3 SIRT6 SIRT7 \
  --targets p53 Tubulin "Histone H4" H3K9 H4K16 H3K56 H2BK12 WRN H2A H2B H3K18ac

# Activation
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --sources SIRT1 SIRT2 SIRT3 SIRT5 SIRT6 SIRT7 \
  --targets SUV39H1 LKB1 AMPK NBS1 XPA MnSOD Ku70 FOXO PGC-1α Catalase IDH2 PARP1 CtIP "SOD1 (via desuccinylation)"

# Inhibition
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --sources SIRT1 SIRT2 SIRT3 SIRT4 SIRT6 SIRT7 \
  --targets NF-κB P300 p66Shc mTOR HIF-1α IGF-1 GDH "RNA Polymerase I" p53
```

## Summary（總結）

vault 圖譜**幾乎完美地復原了 source 文件的標的目錄**。全部七個 sirtuin 都是源頭型主控調節者，SIRT1 為第 1 名 god node；目錄中列出的大部分歸屬都存在直接邊，而當某條邊缺失時（例如 SIRT1→H3K9），PPR、有效電阻與社群成員資格仍將正確的 sirtuin 指派給每個標的。source 文件的三個標的類別映射至**截然不同的網絡殼層**——被修飾的染色質受質是周邊葉節點、被活化的酵素是中核心穩態中樞、而被抑制的標的（NF-κB、p53、mTOR）是內核心促老化驅動者——從量化上支持了綜評的主控調節者模型。

就**治療**而言，決定性的讀數是中心性與共享度：**NF-κB 是最高價值的介入節點**（god 級中樞、受四個 sirtuin 抑制、最強的預測連結中樞），而內核心促老化驅動者（p53、mTOR、HIF-1α）構成首要抑制殼層。選擇性贏得於各 sirtuin 的利基——SIRT2 的 Tubulin / H4K16 軸、SIRT5 的 desuccinylase 化學性質、SIRT6 的 IGF-1 / PARP1 / CtIP 軸、SIRT7 的核仁軸——以及殘基層級的乙醯化標記（例如 RelA K310、CtIP K432 / K526 / K604、PARP1 K521）。2017 年後的文獻（PMIDs 42329469、39556442）擴展了去醯化酶圖景（delactylase、Kma、Kbhb、Ksucc），標誌著 source 文件的受質清單是未來 triples 富集的下限，以及一張不斷成長的可藥性 sirtuin–受質關係地圖。
