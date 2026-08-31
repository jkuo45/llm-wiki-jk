---
title: Sirtuins × Catecholamines 綜合節點分析 — 15 August 2026
description: SIRT1 / SIRT3 / SIRT2 + COMT / MAO 對兒茶酚胺 Dopamine 與 Epinephrine 在 wiki 知識圖譜中的綜合節點分析。SIRT1 對 Dopamine 的路線最豐富（經由老化 / 神經退化橋樑的 7 條最短路徑），SIRT3 帶有唯一的潛在氧化還原邊，COMT 是直接代謝流量中樞，MAO 維持周邊。跳數距離無鑑別力（皆 ≤2 跳）；每一項 networkx / scipy 指標都區分出三種截然不同的兒茶酚胺接近度模式。
created: 2026-08-16
updated: 2026-08-22
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - scipy
  - spectral-analysis
  - sirtuins
  - comt
  - mao
  - dopamine
  - epinephrine
  - graph-theory
source: graphify-out/graph.json + scripts/analysis/node_analysis.py (networkx/scipy)
author: []
---
# Sirtuins × Catecholamines 綜合節點分析

> 由圖譜衍生的比較節點分析。日期：15_August_2026
> 方法：`uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py --sources sirt1 sirt3 sirt2 comt mao --targets dopamine epinephrine`
> 語料：`graphify-out/graph.json`（2479 節點 / 3388 條有向連結），無向投影，移除自環，分析巨成分（2028 節點，共 209 個成分）。

## 資料簡化說明

- 所有 source–target 配對皆相距 ≤2 跳；跳數距離無鑑別力。所有訊號皆來自下述的 networkx / scipy 指標。
- 所列橋接節點為最短路徑上的第一跳節點；多個橋接節點 = 進入目標鄰域的冗餘路線。

## 最短路徑多重度（NetworkX）

| Source → Target | 最短路徑 | 橋接節點（第一跳） |
|---|---|---|
| SIRT1 → Dopamine | **7** | [[Aging]]、[[Parkinson's Disease]]、[[Resveratrol]]、[[Senescence]]、[[Tau]] |
| SIRT1 → Epinephrine | 5 | [[Aging]]、[[Cellular Senescence]]、[[NF-κB]]、[[Resveratrol]] |
| SIRT3 → Dopamine | 1 | [[Oxidative Stress]] |
| SIRT3 → Epinephrine | 6 | [[Cellular Senescence]]、[[Honokiol]]、[[Mitochondria]]、[[NF-κB]]、[[Oxidative Stress]] |
| SIRT2 → Dopamine | 3 | [[Parkinson's Disease]] |
| SIRT2 → Epinephrine | 2 | [[NF-κB]] |
| COMT → Dopamine | 1 | —（直接邊） |
| COMT → Epinephrine | 1 | —（直接邊） |
| MAO → Dopamine | 1 | [[Epinephrine]] |
| MAO → Epinephrine | 1 | —（直接邊） |

- **SIRT1 → Dopamine 是整組中單一路線最豐富的關係**（7 條不同最短路徑），且每一個橋接節點都是 geroscience / 神經退化中樞（Aging、PD、Senescence、Tau）加上 [[Resveratrol]]——亦即多巴胺連結是*間接且以老化為脈絡*的，而非酵素性的。
- **SIRT3 → Dopamine 恰有一條路線**——經由 [[Oxidative Stress]]（sirtuin 對兒茶酚胺持有的唯一潛在氧化還原邊）。
- COMT 距兩個受質皆 1 跳（直接代謝相鄰）；MAO 僅能經由 Epinephrine 到達 Dopamine。

## 鄰域獨特性（degree + 成對 Jaccard）

| 節點 | Degree |
|---|---|
| SIRT1 | 209 |
| SIRT3 | 104 |
| SIRT2 | 79 |
| COMT | 57 |
| Epinephrine | 21 |
| Dopamine | 12 |
| MAO | **2** |

- sirtuin–兒茶酚胺的 Jaccard 重疊約為 0.000–0.009（SIRT1 / 2 / 3 與任一兒茶酚胺幾乎不共享鄰居；僅 SIRT3–Dopamine 達到 0.009）。
- 酵素–受質的重疊是唯一具意義的（COMT–Dopamine 0.015、COMT–Epinephrine 0.013、MAO–Epinephrine 0.045）。
- 特徵鄰居：SIRT1 | geroscience / 蛋白穩態（[[Senescence]]、[[Lifespan]]、[[p53]]、[[LC3]]）；SIRT3 | 粒線體代謝（[[HIF-1α]]、生酮作用、[[H3K56ac]]）；Dopamine | 神經毒理學（[[Dopaminochrome]]、[[Neuromelanin]]、Substantia Nigra Pars Compacta）；Epinephrine | 心代謝氧化（[[Adrenochrome]]、[[Myeloperoxidase]]、[[Metanephrine]]）。

## Adamic-Adar 連結預測接近度

| 配對 | Adamic-Adar |
|---|---|
| COMT → Epinephrine | **0.721** |
| COMT → Dopamine | 0.514 |
| MAO → Epinephrine | 0.379 |
| SIRT3 → Dopamine | **0.289** |
| SIRT1 / 2 → 任一 | 0.000 |
| MAO → Dopamine | 0.000 |

- 唯一對兒茶酚胺具有非零潛在邊的 sirtuin 是 **SIRT3 → Dopamine**（經由氧化還原區域的共享鄰居拉力），與「最短路徑多重度」中單一的 Oxidative-Stress 橋接一致。
- COMT 是主導的潛在連結中樞；MAO 僅對 Epinephrine 有潛在拉力。

## k-Core 巢狀結構（NetworkX）

| 節點 | k-core |
|---|---|
| SIRT1 | **6** |
| SIRT3 | 5 |
| SIRT2 | 5 |
| COMT | 4 |
| Dopamine | 4 |
| Epinephrine | 4 |
| MAO | **2** |

## 譜分析（SciPy — 稠密 eigh）

- **代數連通度** λ₂ = **0.0495**（健康的巨成分，跨輪次一致）。
- **Fiedler vector**：sirtuin 位於對分邊界（−0.0028 至 −0.0032）；COMT **+0.0274** 是最偏移的節點（基因型 / 代謝叢集被乾淨分隔）；兒茶酚胺 +0.005 至 +0.007；MAO +0.0028。
- 解讀：圖譜的自然對分將 sirtuin 治理區域（邊界）與兒茶酚胺代謝區域（COMT 明確位於後者內部）分隔開來。

## 有效電阻 / 通勤距離（pseudoinverse Laplacian）

`R_eff` 經由設下閾值的稠密 `eigh` 計算；零模型為每個 target 取 300 個隨機節點。

| 節點 | → Dopamine（z） | → Epinephrine（z） |
|---|---|---|
| SIRT1 | 0.186（−1.71） | **0.156（−1.82）** |
| SIRT3 | 0.194（−1.70） | 0.165（−1.80） |
| SIRT2 | 0.214（−1.66） | 0.186（−1.76） |
| COMT | 0.216（−1.66） | 0.195（−1.74） |
| MAO | 0.736（−0.70） | 0.552（−1.07） |

- sirtuin 比 COMT 略接近兩種兒茶酚胺（皆對零模型顯著，z ≤ −1.66）。
- MAO 約遠 3–4 倍，且僅對 Epinephrine 為勉強顯著接近（z = −1.07）——周邊副產物模式。

## 個人化 PageRank — 隨機游走接近度

| 目標種子 | SIRT1 | SIRT3 | SIRT2 | COMT | MAO |
|---|---|---|---|---|---|
| Dopamine | #26（0.00463） | #28（0.00428） | #52（0.00206） | **#3（0.03671）** | #380（0.00023） |
| Epinephrine | #44（0.00331） | #53（0.00237） | #119（0.00091） | **#3（0.02622）** | #14（0.01190） |

- COMT 收到的擴散流量比任何 sirtuin 高 100 倍以上（直接相鄰 → 強的游走駐留度）；sirtuin 排名居中；MAO 從 Dopamine 幾乎不可見，但在以 Epinephrine 為種子時躍升至 #14（其唯一強邊）。

## 跨指標綜合 — 三種截然不同的兒茶酚胺接近度模式

| 模式 | 節點 | 特徵測量 |
|---|---|---|
| **以老化為脈絡** | SIRT1、SIRT2 | 對 Dopamine 的路線多重度（經由 Aging–PD–Senescence 橋樑的 7 / 3 條路徑）；零潛在邊；中等流量；邊界 Fiedler |
| **直接代謝中樞** | COMT | 1-hop 相鄰、最高 Adamic-Adar（0.51–0.72）、兩個 target 皆 #3 PPR、Fiedler 偏移最大 |
| **潛在氧化還原且粒線體** | SIRT3 | 到 Dopamine 的唯一 Oxidative-Stress 路線 + 唯一非零的 sirtuin Adamic-Adar（0.289）、到 Epinephrine 的 6 條路線 |
| **周邊副產物** | MAO | degree 2、k-core 2、近零電阻 z、除非經由 Epinephrine 否則無法到達 Dopamine |

**生物學解讀**：跳數計數報告「全部相鄰」；高階測量顯示 sirtuin 的多巴胺相關性是一種*老化 / 神經退化脈絡*現象（SIRT1 尤甚，經由冗餘的 geroscience 橋樑），COMT 是真正的酵素閘門，SIRT3 是唯一對多巴胺具有真實氧化還原 / 基因毒性連結的 sirtuin，而 MAO 是一個周邊輻條，僅能通過腎上腺素到達多巴胺譜系。這將兩項先前的分析（sirtuins × adrenochrome、COMT / MAO × catecholamines）調和為單一的接線地圖。

## 方法學備註與可重現性

- 指令：`uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py --sources sirt1 sirt3 sirt2 comt mao --targets dopamine epinephrine`（預設 `--seed 1`）。
- 無向投影；僅取巨成分；移除自環。
- Fiedler 特徵向量符號任意——請比較大小 / 相對位置。
- 避免使用 `eigsh(which='SM')` 與截斷的 `svds`（見 task_output_sirtuins_adrenochrome_node_analysis_15_August_2026.md）。
- Adamic-Adar 0.000 = 共同鄰居為零，而非相關性為零。
