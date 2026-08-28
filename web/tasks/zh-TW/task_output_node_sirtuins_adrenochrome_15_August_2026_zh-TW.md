---
title: Sirtuins × Adrenochrome 節點分析 — NetworkX & SciPy — 15 August 2026
description: SIRT1 / SIRT2 / SIRT3 與 Adrenochrome 在 wiki 知識圖譜中接近度的比較節點分析。跳數距離無鑑別力（皆為 2 跳）；路徑多重度、鄰域 Jaccard、Adamic-Adar、k-core、有效電阻、個人化 PageRank 與 Fiedler 分析解析出一個依指標而定的排名——SIRT3 在路線冗餘度上勝出，而 SIRT1 在流量接近度上勝出。
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
  - adrenochrome
  - graph-theory
source: graphify-out/graph.json + networkx/scipy analysis
author: []
---
# Sirtuins × Adrenochrome 節點分析 — NetworkX & SciPy

> 由圖譜衍生的比較節點分析。日期：15_August_2026
> 方法：`graphify-out/graph.json`（2479 節點 / 3388 條連結，有向）載入 NetworkX，投影為無向，移除自環，巨成分（2028 節點，共 209 個成分）用於所有指標計算。無 Matlab，純 `networkx` + `scipy`（numpy 稠密 `eigh`、`eigsh`、`svds`、`nx.pagerank`、`nx.core_number`、`nx.adamic_adar_index`）。

## 資料簡化說明

- 當前 `graph.json` 中的**節點 id** 為 snake_case 字串（`sirt1`、`adrenochrome`），不同於較早使用主題前綴 id（例如 `notes__link_sirt1`）的圖譜建構。任何下游腳本必須從標籤正規化 id。
- **跳數距離無鑑別力**：SIRT1、SIRT2、SIRT3 全都恰好距 Adrenochrome **2 跳**。下述每一項指標皆為回答「哪一個*在功能上*更接近」而存在，而跳數在此失效。

## 最短路徑多重度（NetworkX）

計算*所有*不同最短路徑及其第一跳橋接節點：

| Source → Adrenochrome | 最短路徑 | 橋接節點（第一跳） |
|---|---|---|
| SIRT3 | **2** | [[NF-κB]]、[[Oxidative Stress]] |
| SIRT1 | 1 | [[NF-κB]] |
| SIRT2 | 1 | [[NF-κB]] |

- SIRT3 經由**兩條獨立路線**到達 Adrenochrome 的區域——冗餘性 / 穩健性。
- SIRT1 與 SIRT2 依賴**單一橋樑**（[[NF-κB]]），為單點故障。

## 鄰域獨特性（degree + Jaccard）

| 測量 | SIRT1 | SIRT3 |
|---|---|---|
| Degree | 209 | 104 |
| 鄰居集合的 Jaccard 重疊 | **6.5%** | |

- SIRT1 的獨特鄰居圍繞轉錄 / 蛋白穩態聚集：[[LC3]]、[[Senescence]]、[[Lifespan]]、[[p53]]、[[HMGB1]]、[[FOXO1]] / [[FOXO3]]、脂肪酸代謝、miR-543。
- SIRT3 的獨特鄰居是粒線體代謝 / 老化：[[HIF-1α]]（抑制糖解）、生酮作用、pyruvate dehydrogenase E1α、[[H3K56ac]]、[[Intermittent Fasting]]、[[ATM]]、缺血–再灌注損傷、肥胖、癲癇、Human aging（長壽）。
- 結論：儘管共享「sirtuin」標籤，SIRT1 與 SIRT3 在圖譜中觸及**幾乎互不相交的功能性鄰域**。

## 共同鄰居 / 連結預測接近度（Adamic-Adar，NetworkX）

| 配對 | Adamic-Adar 分數 |
|---|---|
| SIRT3 → Adrenochrome | **0.556** |
| SIRT1 → Adrenochrome | 0.268 |

- 朝向 Adrenochrome 的潛在（缺失邊）拉力以 **SIRT3 最強**，與「最短路徑多重度」一節中的 2 路徑冗餘性一致。

## k-Core 巢狀結構（NetworkX）

| 節點 | k-core |
|---|---|
| SIRT1 | **6** |
| SIRT2 | 5 |
| SIRT3 | 5 |
| Adrenochrome | 4 |

- SIRT1 位於四者中最稠密的巢狀核心；Adrenochrome 相對於它是周邊的。

## 譜分析（SciPy — 稠密 `eigh`）

- **代數連通度** λ₂ = **0.0495**——巨成分健康（遠高於約 0 的斷連閾值）。
- **Fiedler vector**（最小非平凡特徵向量，譜對分軸）：SIRT1 +0.0029、SIRT3 +0.0028、SIRT2 +0.0032、Adrenochrome **−0.0017**。
- 解釋：圖譜的自然對分軸將 Adrenochrome（氧化還原 / 兒茶酚胺側）與 sirtuin 治理叢集分離；三個 sirtuin 皆本質上位於**邊界上**，與其氧化還原調節守門者角色一致。

## 有效電阻 / 通勤距離（SciPy — pseudoinverse Laplacian）

`R_eff(a,b) = pinv(L)[a,a] + pinv(L)[b,b] − 2·pinv(L)[a,b]`，經由稠密 `scipy.linalg.eigh`（設下閾值的特徵值）在 2028 節點的巨成分上計算。

| 配對 | R_eff（越低 = 越近） | 與 300 個隨機節點比較的 z 分數 |
|---|---|---|
| SIRT1 → Adrenochrome | **0.094** | −1.70 |
| SIRT3 → Adrenochrome | 0.103 | −1.68 |
| SIRT2 → Adrenochrome | 0.124 | −1.64 |

- 三個 sirtuin 都比隨機預期更有意義地接近 Adrenochrome（z ≈ −1.7），但彼此間僅略有差異（依此全局流量指標）。
- SIRT1 名義上最近；SIRT2 最遠。

## 個人化 PageRank — 隨機游走接近度（NetworkX）

`nx.pagerank(personalization={Adrenochrome: 1.0}, α=0.85)`——源自 Adrenochrome 的擴散流：

| 節點 | 排名（共 2028） | PPR 分數 |
|---|---|---|
| SIRT1 | **#63** | 0.00422 |
| SIRT3 | #71 | 0.00295 |
| SIRT2 | #110 | 0.00127 |

- 依隨機游走流量，SIRT1 最接近 Adrenochrome，SIRT3 次之，SIRT2 遠遠落後。

## 跨指標綜合 — 排名翻轉

| 指標類別 | 贏家 | 意義 |
|---|---|---|
| 最短路徑多重度（§1） | **SIRT3** | 冗餘路線 → 穩健性 |
| Adamic-Adar（§3） | **SIRT3** | 最強的潛在連結拉力 |
| k-core（§4） | **SIRT1** | 最深的巢狀核心 |
| 有效電阻（§6） | **SIRT1** | 全局流量接近度 |
| 個人化 PageRank（§7） | **SIRT1** | 擴散流量接近度 |
| Fiedler（§5） | 全體 ≈ 邊界 | 氧化還原守門者定位 |

**生物學解讀**：SIRT3 經由多條特定的壓力連結（[[Oxidative Stress]] + [[NF-κB]]）接線*進入* Adrenochrome 的區域；SIRT1 只是位於一個高流量的中央區域。一個 2-hop 的 BFS 答案（「相同」）正好會抹除本分析所復原的訊號。

## 注意事項與方法學備註

- 圖譜投影為**無向**以計算節點指標；邊關係語意被折疊。
- 移除自環；排除孤立 / 重複成分（僅取巨成分）。
- Degree 值與較早的 `task_output_adrenochrome_sirtuins_trace_17_JUL_2026`（例如此處 SIRT1 為 209 而彼處為 198）不同，因為圖譜以不同的 id 配置重建。
- `scipy.sparse.linalg.eigsh` 在 `'SM'` 模式下會對奇異 Laplacian 回傳平凡零特徵值，並給出相等的 Fiedler 座標——這是文獻記載的陷阱。請改用稠密 `eigh` 或非零的 `sigma` shift-invert。
- `svds`（截斷最大成分）**不是**有效的通勤時間替代；請使用由設下閾值的特徵值建構的偽逆。
- PPR 排名 / 分數與電阻距離對 α 及巨成分包含與否敏感；請將報告數值視為比較性，而非絕對值。

## 建議後續行動

- 在 **COMT / MAO** 配對對 [[Dopamine]] / [[Epinephrine]] 上重複相同的 7 項測量演練，以測試「穩健性 vs. 流量」的分歧是否具普遍性。
- 依 `confidence_score` 對邊加權，並比較加權與未加權的電阻。
- 對所有 `community_name` 中樞的 Fiedler 符號做差分，以描繪 sirtuin 邊界分隔了哪些社群。

## 解釋

這是一個知識圖譜接近度分析，提出一個天真的跳數計數無法回答的問題：**哪個 sirtuin 在功能上最接近 Adrenochrome**，既然三者都恰好相距 2 跳。

**核心發現——排名取決於指標，而此依賴性正是訊號所在：**

| 指標類別 | 贏家 | 測量內容 |
|---|---|---|
| 冗餘性 / 穩健性 | **SIRT3** | 2 條獨立最短路徑（經由 [[Oxidative Stress]] *與* [[NF-κB]]）vs. SIRT1 / SIRT2 的單橋依賴；最強的潛在連結拉力（Adamic-Adar 0.556 vs 0.268） |
| 流量 / 接近度 | **SIRT1** | 最高 k-core（6）、最低有效電阻（0.094 vs 0.124）、頂級 PPR 排名（#63 vs #110） |
| 拓撲 | 全體 ≈ | Fiedler vector 將三者皆置於對分邊界附近——與共享的氧化還原守門者定位一致 |

**生物學解讀：** SIRT3 是刻意接線*進入* Adrenochrome 壓力區域的——它與 Adrenochrome 的連結通過粒線體氧化還原 / 壓力反應（[[Oxidative Stress]]、[[NF-κB]]、[[HIF-1α]]、缺血–再灌注），在那裡它有機制上的業務理由存在。SIRT1 則位於圖譜中高流量的中央區域；它的接近是身為中樞（degree 209 vs SIRT3 的 104）的副產物，而非特定路徑設計的結果。圖譜自身的結構將 SIRT3 編碼為*屬於* adrenochrome 鄰域的那個 sirtuin。

**分析本身提出的警示旗幟**（皆有效）：

- 投影為無向——邊方向語意遺失。
- 僅取巨成分（2028 / 2479 節點）——約 18% 節點被排除。
- 數值為比較性而非絕對性（對 α 與成分包含與否敏感）。
- 指標分歧（SIRT1 vs SIRT3）鑑於兩種不同的圖譜角色是可預期的——但 z 分數（−1.7）說明*三者*相對隨機預期都確實接近。

簡言之：**沒有單一的「贏家」**——SIRT3 贏了*接線*，SIRT1 贏了*流量*；兩者回答不同的問題（特異性 vs. 中心性）。值得注意的是，建議的後續行動（COMT / MAO vs [[Dopamine]] / [[Epinephrine]]）是測試此「穩健性 vs. 流量」分歧是否為兒茶酚胺代謝叢集普遍模式的恰當方式。
