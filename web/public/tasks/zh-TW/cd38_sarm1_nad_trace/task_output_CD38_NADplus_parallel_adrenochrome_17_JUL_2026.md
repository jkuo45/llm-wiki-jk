---
title: CD38–NAD+ 消耗 — 通往腎上腺色素反防禦的平行追蹤
description: 平行圖譜追蹤，展示 CD38 驅動的 NAD+ 耗竭如何加重腎上腺色素的氧化負擔，並使 sirtuin 防禦系統飢餓。銜接至 task_output_adrenochrome_sirtuins_trace_17_JUL_2026.md。萃取自 graphify 知識圖譜（4714 個節點、8624 條邊、363 個社群）。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - nad-plus
  - sirtuins
  - sirt3
  - parp1
  - inflammaging
  - adrenochrome
  - redox-homeostasis
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + notes/_link/CD38.md + notes/_link/NAD+.md + task_output_CD38_NADplus_trace_17_JUL_2026.md
---

# CD38–NAD+ 消耗 — 通往腎上腺色素反防禦的平行追蹤

> 透過 BFS/DFS 遍歷與節點解釋，從 wiki 知識圖譜萃取。
> 日期：17_JUL_2026
>  companion 文件：`task_output_adrenochrome_sirtuins_trace_17_JUL_2026.md`

## 為何這是一條平行追蹤

腎上腺色素追蹤顯示 sirtuin 透過三條路徑*對抗*腎上腺色素驅動的氧化壓力：
1. NAD⁺/NR 救援（粒線體激效性，mitohormesis）
2. SIRT3 → MnSOD 酵素性防禦
3. 細胞凋亡保護

此追蹤展示**複合性損害**：CD38 是主要的年齡相關 NAD⁺ 消耗者。藉由耗竭 NAD⁺，CD38 **使腎上腺色素超載所依賴的 sirtuin 防禦飢餓**。兩條追蹤共享相同的樞紐節點 — `[[NAD+]]`、`[[Nicotinamide Riboside]]`、`[[SIRT3]]`、`[[Sirtuins]]`、`[[Redox Homeostasis]]`。

## 圖譜位置 — CD38（正典節點）

| 性質 | 值 |
|---|---|
| **節點** | CD38 |
| **ID** | `link_cd38` |
| **度** | 8 條直接連接（連至 `link_*` 正典節點） |

### 直接連接（即時驗證）

| 來源 | 關係 | 標的 |
|---|---|---|
| CD38 | references | NAD+ (`link_nad`) |
| CD38 | references | SIRT3 (`link_sirt3`) |
| CD38 | references | Sirtuins (`link_sirtuins`) |
| CD38 | references | PARP1 (`link_parp1`) |
| CD38 | references | cADPR (`link_cadpr`) |
| CD38 | references | NMN (`link_nmn`) |
| CD38 | references | Quercetin (`link_quercetin`) |
| CD38 | references | SARM1 (`link_sarm1`) |

> 註：較豐富的 CD38 文件節點（`notes__link_cd38`）攜帶 12+ 條連接，包含 Inflammaging、Nicotinamide Riboside、Daratumumab、Isatuximab — 見 `task_output_CD38_NADplus_trace_17_JUL_2026.md`。

## 複合軸（跨社群）

```
Inflammaging ──(招募 CD38+ 免疫細胞)──> CD38
                                                    │ consumes
                                                    ▼
                                               NAD+ depletion
                                                    │ starves
                         ┌──────────────────────────┼───────────────────────────┐
                         ▼                          ▼                           ▼
                   SIRT3 activity ↓           Sirtuin activity ↓           PARP1 ↓
                   （粒線體去乙醯化              （壓力反應）                （DNA 修復）
                    失效）                                               
                         │                          │
                         ▼                          ▼
                   MnSOD 未被活化           氧化還原防禦崩潰
                         │                          │
                         └──────────>  氧化壓力 ↑  <──────────────┐
                                           ▲                              │
                                           │ 腎上腺色素自氧化              │
                                           └──────── 腎上腺色素 ────────┘
```

**關鍵見解：** CD38 驅動的 NAD⁺ 耗竭與腎上腺色素自氧化*收斂於同一個失效點* — 受損的 sirtuin/氧化還原防禦。它們是針對同一脆弱軸的兩次獨立打擊。

## 如何與腎上腺色素追蹤連接

| 腎上腺色素追蹤節點 | CD38 追蹤節點 | 共享角色 |
|---|---|---|
| Nicotinamide Riboside | NAD+ / NMN | NAD⁺ 先驅物；CD38 於胞外降解它們，使腎上腺色素救援路徑飢餓 |
| Sirtuins | Sirtuins | CD38 經由 NAD⁺ 耗竭使其飢餓的防禦系統 |
| SIRT3 | SIRT3 | 去乙醯化 MnSOD — 當 NAD⁺ 低下時失效 |
| Redox Homeostasis | （由 NAD⁺/SIRT 推得） | 兩條追蹤共同環繞的平衡點 |

### 語意橋樑

- 腎上腺色素 → **需要 NAD⁺/NR 來活化 SIRT** （腎上腺色素追蹤的路徑 A）。
- CD38 → **消耗同一個 NAD⁺/NR 池**（本追蹤）。
- 淨效應：隨年齡/發炎老化，CD38 上調抵消了腎上腺色素反防禦，將系統推向氧化壓力與細胞凋亡。

## 被 CD38 飢餓的下游標的（已驗證）

| 標的 | NAD⁺ 耗竭的效應 | 社群 |
|---|---|---|
| **SIRT3** | 粒線體去乙醯化受損 → ROS ↑、ATP ↓ | 79 |
| **Sirtuins（全體）** | 廣泛去乙醯化失敗 → 代謝失調 | 78 |
| **PARP1** | DNA 修復減少 → 基因組不穩定 | 99 |
| **Glycolysis** | GAPDH 需要 NAD⁺ → 能量赤字 | 152 |

## 治療重疊（兩條追蹤）

| 介入 | 在 CD38 追蹤中的角色 | 在腎上腺色素追蹤中的角色 |
|---|---|---|
| **Nicotinamide Riboside** | NAD⁺ 先驅物（但被 CD38 胞外-NMNase 降解） | 活化 SIRT 以對抗腎上腺色素 ROS |
| **Quercetin** | CD38 抑制劑（社群 22） | 類黃酮，抗氧化劑 |
| **CD38 抑制劑 78c** | 恢復 NAD⁺，提升 SIRT3 | 啟用 sirtuin 防禦 |
| **Apigenin** | 天然 CD38 抑制劑（INFERRED） | 類黃酮 |

> 策略意涵：在高 CD38 發炎老化下，單獨補充 NR 可能不足 — 將 NR 與 CD38 抑制劑（78c / quercetin / apigenin）配對，是恢復腎上腺色素反防禦的圖譜邏輯組合。

## 圖譜健康評估

- **CD38 度：** 8 個正典 + 12+ 個文件節點連接
- **跨社群邊：** Inflammaging、SARM1、PARP1、Quercetin — 確認跨社群觸及
- **已知缺口：** 儘管共享 NAD⁺ 受質，仍無直接的 CD38 ↔ SARM1 機制邊（標記於 `task_output_CD38_SARM1_bridging_gaps_17_jul_2026.md`）
- **懸空邊：** CD38 節點上未偵測到

## 建議後續追蹤

- **CD38 ↔ SARM1 NAD⁺ 競爭** — 同一池上的兩個 NAD⁺ 消耗者。
- **NR + CD38 抑制劑組合** — 在發炎老化中恢復腎上腺色素反防禦。
- **SIRT3–MnSOD–PGC-1α 軸**（來自腎上腺色素追蹤）於 NAD⁺ 耗竭條件下。
