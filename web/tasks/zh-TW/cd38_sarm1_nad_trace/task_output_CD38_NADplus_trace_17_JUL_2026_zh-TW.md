---
title: CD38–NAD+ 追蹤 — 圖譜衍生的機制圖譜
description: 從 graphify 知識圖譜（notes 語料庫，4714 個節點、8624 條邊）萃取的 CD38-NAD+ 關係綜合追蹤。涵蓋 CD38 的酵素活性、其作為主要年齡相關 NAD+ 消耗者的角色、對 SIRT3/PARP1 的下游效應、治療介入，以及通往發炎老化的跨社群連接。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - nad-plus
  - aging
  - inflammaging
  - sirtuins
  - parp1
  - knowledge-graph
source: graphify graph query + notes/_link/CD38.md + notes/_link/NAD+.md
---

# CD38–NAD+ 追蹤

> 透過 BFS/DFS 遍歷與節點解釋，從 wiki 知識圖譜（4714 個節點、8624 條邊、363 個社群）萃取。
> 日期：17_JUL_2026

## 圖譜位置

| 性質 | 值 |
|---|---|
| **節點** | CD38 |
| **ID** | `link_cd38` |
| **來源** | `_link/CD38.md` |
| **類型** | concept（酵素） |
| **社群** | 78 |
| **度** | 12 |

## 直接連接（來自圖譜）

| 來源 | 關係 | 標的 | 信心度 | 標的社群 |
|---|---|---|---|---|
| CD38 | references | **NAD+** | EXTRACTED | 78 |
| CD38 | references | **Inflammaging** | EXTRACTED | 10 |
| CD38 | references | **Sirtuins** | EXTRACTED | 78 |
| CD38 | references | **SIRT3** | EXTRACTED | 79 |
| CD38 | references | **Nicotinamide Riboside** | EXTRACTED | 78 |
| CD38 | references | **Nicotinamide Mononucleotide** | EXTRACTED | 78 |
| CD38 | references | **PARP1** | EXTRACTED | 99 |
| CD38 | references | **Quercetin** | EXTRACTED | 22 |
| CD38 | references | **cADPR** | EXTRACTED | 19 |
| CD38 | references | **Multiple Myeloma** | EXTRACTED | 181 |
| CD38 | references | **Daratumumab** | EXTRACTED | 78 |
| CD38 | references | **Isatuximab** | EXTRACTED | 78 |
| CD73 | conceptually_related_to | CD38 | INFERRED | 78 |

## 超邊：消耗 NAD+ 的胞外酵素

- **標籤：** 消耗 NAD+ 的胞外酵素
- **節點：** CD38、CD73、NAD+
- **關係：** participate_in
- **信心度：** INFERRED (0.70)
- **來源：** `_link/CD38.md`

## 酵素活性

CD38 是一種多功能胞外酵素，透過三種催化活性切割 NAD+：

| 活性 | 受質 → 產物 | 功能 |
|---|---|---|
| **ADP-ribosyl cyclase** | NAD+ → **cADPR**（社群 19） | 從 ER 動員 Ca²⁺ |
| **NAD+ glycohydrolase** | NAD+ → ADPR + Nicotinamide | 主要的 NAD+ 消耗 |
| **NAADP synthase**（base-exchange） | NADP+ → NAADP | 溶酶體 Ca²⁺ 釋放 |
| **Ecto-NMNase** | 胞外 NMN → NAM + ribose | 降解 NAD+ 先驅物 |

CD38 也催化 base-exchange 反應，可生成有毒的 NAD+ 衍生物（例如 isoniazid-NAD 加合物）。

## 機制：發炎老化 → CD38 → NAD+ 下降軸

### 老化螺旋（跨社群，EXTRACTED）

```
Inflammaging（社群 10）
    │
    ▼  〔驅使 CD38+ 免疫細胞浸潤〕
CD38（社群 78）
    │
    ▼  〔以 NAD+ 為受質消耗〕
NAD+ depletion（社群 78）
    │
    ├──▶ SIRT3 activity ↓（社群 79）→ 粒線體功能障礙
    ├──▶ Sirtuin activity ↓（社群 78）→ 受損的壓力反應
    ├──▶ PARP1 competition ↓（社群 99）→ 受損的 DNA 修復
    └──▶ 更多發炎 → 更多 CD38 ← 回饋迴圈
```

### 筆記中的關鍵實驗證據

| 發現 | 模型 | 來源 |
|---|---|---|
| CD38 基因剔除保留 NAD+ 濃度 | 小鼠 | `_link/CD38.md` |
| CD38 KO 提升 SIRT3 活性，改善粒線體功能 | 老化小鼠 | `_link/CD38.md` |
| CD38 抑制劑 78c 延長壽命約 14%（雄性小鼠） | 小鼠 | `_link/CD38.md` |
| CD38 降解 NMN 與 NR 先驅物 | 體外 | `_link/CD38.md` |
| CD38+ 免疫細胞隨年齡浸潤組織 | 小鼠 WAT、肝臟 | Covarrubias et al. 2020（Nature Metabolism） |

### 免疫細胞浸潤模型（來自 2020 研究）

老化 → 衰老細胞累積 → SASP（senescence-associated secretory phenotype）→ 招募 CD38+ 免疫細胞（巨噬細胞、T 細胞）進入組織 → CD38 的胞外酵素活性降解胞外 NAD+ 與 NMN → 實質細胞缺乏 NAD+ 先驅物 → 代謝功能障礙。

## 受 CD38 活性影響的下游 NAD+ 標的

| 標的 | 社群 | CD38 驅動 NAD+ 耗竭的效應 |
|---|---|---|
| **SIRT3** | 79 | 粒線體去乙醯化受損 → ROS ↑、ATP ↓ |
| **Sirtuins（全體）** | 78 | 廣泛去乙醯化失敗 → 代謝失調 |
| **PARP1** | 99 | DNA 修復能力降低 → 基因組不穩定 |
| **Glycolysis** | 152 | GAPDH 需要 NAD+ → 潛在能量赤字 |

## 圖譜中的治療介入

| 介入 | 與 CD38 的連接 | 社群 | 信心度 |
|---|---|---|---|
| **CD38 抑制劑 78c** | 選擇性小分子抑制劑 | 78（經由 CD38） | EXTRACTED |
| **Quercetin** | 天然類黃酮抑制劑 | 22 | EXTRACTED |
| **Apigenin** | 天然類黃酮抑制劑 | 22 | INFERRED |
| **Nicotinamide Riboside** | NAD+ 先驅物（亦被 CD38 降解） | 78 | EXTRACTED |
| **Nicotinamide Mononucleotide** | NAD+ 先驅物（亦被 CD38 降解） | 78 | EXTRACTED |
| **Daratumumab** | 抗 CD38 單株抗體（ADCC/CDC） | 78 | EXTRACTED |
| **Isatuximab** | 抗 CD38 單株抗體（直接細胞凋亡） | 78 | EXTRACTED |

## 圖譜健康評估

- **度：** 12 條直接連接
- **跨社群邊：** 2（Inflammaging [10]、Quercetin [22]、PARP1 [99]）
- **信心度分佈：** 11 個 EXTRACTED、1 個 INFERRED（CD73 連接）
- **偵測到的懸空邊：** CD38 節點無
- **圖譜缺口：** 儘管共享 NAD+ 受質與重疊的 cADPR 生成，仍無直接的 CD38 ↔ SARM1 邊
