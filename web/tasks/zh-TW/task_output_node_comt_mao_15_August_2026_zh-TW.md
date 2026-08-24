---
title: COMT × MAO 節點分析 vs 多巴胺 / 腎上腺素 — 15 August 2026
description: "兩個兒茶酚胺代謝酵素 COMT 與 MAO 對受質 Dopamine 與 Epinephrine 在 wiki 知識圖譜中的比較節點分析。跳數距離無鑑別力（皆為直接邊）；Adamic-Adar、k-core、有效電阻 z 分數、Fiedler vector 與個人化 PageRank 解析出一幅鮮明不對稱的圖像：COMT 是緊密連結、高流量的中樞，與兩種兒茶酚胺緊密接線；而 MAO 是低 degree 的周邊節點，其唯一實質拉力指向 Epinephrine。透過 scripts/04_node_analysis.py 重現。"
created: 2026-08-15
updated: 2026-08-15
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - scipy
  - spectral-analysis
  - comt
  - mao
  - dopamine
  - epinephrine
  - graph-theory
source: graphify-out/graph.json + scripts/04_node_analysis.py (networkx/scipy)
author: []
---

# COMT × MAO 節點分析 vs 多巴胺 / 腎上腺素

> 由圖譜衍生的比較節點分析。日期：15_August_2026
> 方法：`uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources comt mao --targets dopamine epinephrine`
> 語料：`graphify-out/graph.json`（2479 節點 / 3388 條有向連結），無向投影，移除自環，分析巨成分（2028 節點，共 209 個成分）。

## 資料簡化說明

- 圖譜節點 id 為 snake_case 字串；腳本以不區分大小寫的方式解析實體標籤。
- **跳數距離平凡地無鑑別力**：每一對 source–target 恰好相距 **1 條邊**（在語料中它們在代謝上相鄰）。所有具鑑別力的訊號皆來自下述的 networkx / scipy 指標。

## 最短路徑多重度（NetworkX）

| 配對 | 最短路徑 | 橋接節點（第一跳） |
|---|---|---|
| COMT → Dopamine | 1 | —（直接邊） |
| COMT → Epinephrine | 1 | —（直接邊） |
| MAO → Dopamine | 1 | [[Epinephrine]] |
| MAO → Epinephrine | 1 | —（直接邊） |

- COMT 直接連結到兩種兒茶酚胺；MAO 到達 Dopamine **僅能經由 Epinephrine**（無直接邊）。

## 鄰域獨特性（degree + Jaccard）

| 測量 | COMT | MAO | Dopamine | Epinephrine |
|---|---|---|---|---|
| Degree | 57 | **2** | 12 | 21 |

成對 Jaccard：COMT–MAO **0.017**、COMT–Dopamine 0.015、COMT–Epinephrine 0.013、MAO–Dopamine **0.000**、MAO–Epinephrine 0.045、Dopamine–Epinephrine 0.031。

- MAO 與 Dopamine **共享鄰居為零**——它在圖譜中僅有的足跡是 [[Epinephrine]] 與 [[Hydrogen Peroxide]]（degree 2）。
- COMT 的獨特鄰域是基因型 / 藥理學：[[Berberine]]、[[Betaine]]、COMT Val 對偶基因、Catechols、D2 receptor、染色體 22q11.21、COMT inhibitor 補充劑。
- Dopamine 的軌道是神經毒理學（[[Dopaminochrome]]、[[Dopamine o-quinone]]、[[Neuromelanin]]、[[Substantia Nigra Pars Compacta]]）；Epinephrine 的軌道是心代謝氧化（[[Adrenochrome]]、[[Adrenaline-quinone]]、[[Myeloperoxidase]]、[[Neutrophils]]、[[Metanephrine]]）。

## Adamic-Adar 連結預測接近度（每個 source × 每個 target）

| 配對 | Adamic-Adar |
|---|---|
| COMT → Dopamine | 0.514 |
| COMT → Epinephrine | **0.721** |
| MAO → Dopamine | **0.000** |
| MAO → Epinephrine | 0.379 |

- COMT 最強的潛在邊拉力指向 Epinephrine；MAO 對 Dopamine 沒有任何潛在拉力，對 Epinephrine 則有中等拉力。

## k-Core 巢狀結構（NetworkX）

| 節點 | k-core |
|---|---|
| COMT | **4** |
| Dopamine | 4 |
| Epinephrine | 4 |
| MAO | **2** |

- MAO 被排除在 COMT 與兩種兒茶酚胺共享的較稠密酵素 / 譜系核心之外。

## 譜分析（SciPy — 稠密 eigh）

- **代數連通度** λ₂ = **0.0495**（與所有分析相同的巨成分）。
- **Fiedler vector**（對分軸）：COMT **+0.0274**（遠離邊界），MAO +0.0028，Dopamine +0.0066，Epinephrine +0.0050。
- 在這四個節點中，COMT 是位於圖譜自然對分其中一側最為鮮明者——其代謝 / 基因型叢集與圖譜其餘部分乾淨可分離。

## 有效電阻 / 通勤距離（pseudoinverse Laplacian）

`R_eff` 經由設下閾值的稠密 `eigh` 計算，零模型為每個 target 取 300 個隨機節點。

| 配對 | R_eff（越低 = 越近） | z |
|---|---|---|
| COMT → Dopamine | 0.216 | −1.66 |
| COMT → Epinephrine | **0.195** | −1.74 |
| MAO → Dopamine | 0.736 | −0.70 |
| MAO → Epinephrine | 0.552 | −1.07 |

- COMT 明顯比隨機預期更接近兩種兒茶酚胺；MAO 僅勉強 / 未顯著地更接近（Dopamine z = −0.70）。
- 儘管兩者皆為「兒茶酚胺代謝的酵素」，MAO 到目標區域的通勤距離約比 COMT 大 3–4 倍。

## 個人化 PageRank — 隨機游走接近度（networkx）

| 目標種子 | COMT | MAO |
|---|---|---|
| Dopamine | **#3**（0.03671） | #380（0.00023） |
| Epinephrine | **#3**（0.02622） | #14（0.01190） |

- 以 Dopamine 為種子，COMT 是整個圖譜中第 #3 最接近的節點；MAO 為 #380（流量占比低約 4 個數量級）。
- 以 Epinephrine 為種子，COMT 仍為 #3，但 MAO 升至 #14（擴散流經 MAO–Epinephrine 直接邊）。
- 排名連貫性：COMT = 兩個受質的高流量中樞；MAO = 周邊，僅與 Epinephrine 局部耦合。

## 跨指標綜合

| 指標 | COMT | MAO |
|---|---|---|
| 對兩個標的直接相鄰 | 是 | 僅 Epinephrine |
| Adamic-Adar | 0.51–0.72 | 0–0.38 |
| k-core | 4 | 2 |
| 有效電阻 z | **−1.66 / −1.74** | −0.70 / −1.07 |
| 以 Dopamine 為種子的 PPR 排名 | #3 | #380 |

**生物學解讀**：在語料拓撲中，COMT 是兒茶酚胺處理的*系統性*中樞——稠密、高流量、與基因型連結——而 MAO 則是一個周邊的代謝輻條（spoke），其與多巴胺譜系的連結取決於是否通過腎上腺素。一個 1-hop 的 BFS 答案（「COMT 與 MAO 皆相鄰」）會抹除這種「酵素中樞 vs. 酵素周邊」的區別，而每一個高階測量都復原了此區別。

## 注意事項與方法學備註

- 無向投影；關係語意被折疊。
- 僅取巨成分；移除自環；排除 src/tasks/_triples.json。
- Fiedler 特徵向量的符號是任意的；請比較大小 / 相對位置，而非符號。
- 刻意避免使用 `eigsh(which='SM')` 與截斷的 `svds`（見 task_output_sirtuins_adrenochrome_node_analysis_15_August_2026.md）。
- Adamic-Adar 為 0.000 表示共同鄰居為零，未必表示相關性為零。
- 數值可經 `scripts/04_node_analysis.py` 重現；預設種子 1。

## 建議後續行動

- 在另一個酵素軸上執行相同演練，例如 `--sources nqo1 dt_diaphorase --targets menadione`，以測試「中樞 vs. 周邊」的不對稱是否為酵素–受質配對的普遍特徵。
- 追蹤 SIRT1 / SIRT2 → Dopamine vs Epinephrine，以結合 sirtuin 與兒茶酚胺分析。
- 比較 COMT 基因型軸節點（Val / Met）與熱點殘基，以測試譜對分軸是否與基因型分群對齊。
- 依 `confidence_score`（EXTRACTED vs INFERRED）對邊加權並重新執行，觀察 MAO 的周邊地位在信心加權圖譜中是否持續。
