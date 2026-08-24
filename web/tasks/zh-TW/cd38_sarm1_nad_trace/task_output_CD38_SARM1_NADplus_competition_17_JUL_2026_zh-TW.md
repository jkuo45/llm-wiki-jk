---
title: CD38 ↔ SARM1 NAD+ 競爭 — 圖譜衍生的機制圖譜
description: CD38-SARM1 NAD+ 競爭軸的追蹤，萃取自 graphify 知識圖譜（4714 個節點、8624 條邊、363 個社群）。更新了先前的缺口註記 — 目前的圖譜現已解析出一條直接的 CD38↔SARM1 邊，以及共享的 NAD+ 與 cADPR 鄰居。涵蓋 NMN 橋接代謝物、針對 NAD+ 池的區室化競爭、CZ-48 的藥理分歧，以及與腎上腺色素追蹤的 sirtuin/氧化還原防禦收斂。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - nad-plus
  - nmn
  - cadr
  - nicotinamide-riboside
  - sirtuins
  - axonal-degeneration
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + task_output_CD38_SARM1_bridging_gaps_17_JUL_2026.md + task_output_SARM1_NADplus_trace_17_JUL_2026.md + task_output_CD38_NADplus_parallel_adrenochrome_17_JUL_2026.md
---

# CD38 ↔ SARM1 NAD+ 競爭追蹤

> 透過 BFS/DFS 遍歷與節點解釋，從 wiki 知識圖譜萃取。
> 日期：17_JUL_2026
> 取代 `task_output_CD38_SARM1_bridging_gaps_17_JUL_2026.md` 中的缺口標記（現已在圖譜中解析）。

## 圖譜位置 — 即時驗證

| 性質 | CD38 | SARM1 |
|---|---|---|
| **正典 ID** | `link_cd38` | `link_sarm1` |
| **度** | 15 | 8 |
| **直接邊** | ✅ `link_cd38 → link_sarm1` 存在 | |
| **共享鄰居** | `link_nad`、`link_cadpr` | |

> **對先前缺口註記的更正：** 較早的 `bridging_gaps` 文件報告「無直接 CD38↔SARM1 邊」。目前的圖譜建構解決了此問題 — 現已存在一條直接邊，且兩個節點都收斂於 `[[NAD+]]`（共享受質）與 `[[cADPR]]`（共享產物）。其中描述的機制重疊仍然有效；結構性缺口已關閉。

## 競爭軸

CD38 與 SARM1 都是**NAD+ glycohydrolase**，將相同受質切割為相同產物（NAM + ADPR + cADPR）。它們競爭共享的 NAD+ 池，但作用於不同的時間尺度與區室：

```
                      共享的 NAD+ 池
                             │
           ┌─────────────────┴─────────────────┐
           ▼                                   ▼
    CD38（胞外酵素）                    SARM1（胞內）
    社群 78                              社群 101
    慢性（數小時–數年）                 急性（數分鐘）
    免疫細胞、WAT、肝臟、腦              神經元（軸突、粒線體）
           │                                   │
           ▼                                   ▼
    NAD+ → NAM + ADPR + cADPR           NAD+ → NAM + ADPR + cADPR
    （耗損先驅物可得性）                （災難性軸突耗竭）
           │                                   │
           └──────────>  Sirtuin / 氧化還原防禦被飢餓  <─┘
                               （與腎上腺色素追蹤收斂）
```

## NMN 橋樑（關鍵代謝連結）

`[[NMN]]` 是兩個消耗者之間的關鍵橋接代謝物：

```
胞外 NMN ──▶ CD38（ecto-NMNase）
                          │ 降解 → NAM + ribose
                          ▼
                     可供細胞攝取的 NMN 減少
                          │
                          ▼
                     胞內 NMN 降低
                          │
                          ▼
                     SARM1 較少被活化（NMN/NAD+ 比值維持低）

胞內 NMN ──▶ SARM1 活化因子
                          │ 上升的 NMN/NAD+ 比值
                          ▼
                     SARM1 ON → NAD+ 災難（Wallerian 式退化）
```

**來自圖譜的矛盾現象：** 高 CD38 活性*降解胞外 NMN*，可能透過維持胞內 NMN 低下而**保護**神經元免於 SARM1 活化。相反地，**CD38 抑制**（78c、quercetin、apigenin）保存 NMN — 可能**致敏**神經元，使其更易發生依賴 SARM1 的退化。此交互作用為假說性（AMBIGUOUS），且文獻中尚未測試。

## CZ-48 的藥理分歧

`[[CZ-48]]`（sulfo-ara-F-NMN）是這兩種酵素分歧最清楚的示範：

| 化合物 | 對 CD38 的效應 | 對 SARM1 的效應 |
|---|---|---|
| **CZ-48** | **抑制** | **活化** |

這證實了儘管共享受質/產物的化學性質，它們在藥理上是可分的 NADase。

## 與腎上腺色素 / Sirtuin 追蹤的收斂

三條追蹤都共享相同的樞紐節點 — 確認單一、多重打擊的脆弱軸：

| 樞紐節點 | CD38 追蹤 | SARM1 追蹤 | 腎上腺色素追蹤 |
|---|---|---|---|
| `[[NAD+]]` | 被消耗（慢性） | 被消耗（急性） | ROS 的耗竭標的 |
| `[[Nicotinamide Riboside]]` | 先驅物（被 CD38 降解） | 先驅物 | 活化 SIRT |
| `[[Sirtuins]]` / `[[SIRT3]]` | 被 NAD+ 下降飢餓 | 被 NAD+ 下降飢餓 | 對抗氧化壓力 |
| `[[Redox Homeostasis]]` | 受損 | 受損 | 平衡點 |

**綜合：** 腎上腺色素、CD38 與 SARM1 是 NAD+–sirtuin–氧化還原軸上三個獨立的耗竭/失效。腎上腺色素施加氧化負載；CD38 施加慢性 NAD+ 耗竭（老化/發炎老化）；SARM1 施加急性災難性耗竭（損傷）。三者都使同一個 sirtuin 防禦失效。

## NAD+ 消耗者階層（共享池）

來自圖譜與文獻：

```
NAD+ ──▶ CD38   （主要的年齡相關消耗者，低 Km）
NAD+ ──▶ PARP1  （DNA 修復，社群 99）
NAD+ ──▶ SARM1  （災難性軸突，社群 101）
NAD+ ──▶ Sirtuins（訊號傳遞/去乙醯化，社群 78）
NAD+ ──▶ CD73   （腺苷生成，社群 78）
```

CD38+PARP 合併抑制完全逆轉 LPS 誘發的 NAD+ 下降（Covarrubias 2020）— 顯示組合抑制在圖譜邏輯上合理。

## 治療意涵（圖譜衍生）

- **NR + CD38 抑制劑**（來自腎上腺色素/CD38 平行追蹤）：恢復供 sirtuin 使用的慢性 NAD+。
- **SARM1 抑制劑**（Disulfiram / DSRM-3716 / GSK-428）：阻斷急性軸突崩解。
- **未解決的風險：** CD38 抑制可能提升 NMN 到足以致敏 SARM1 — 在神經相關情境中，值得採用協同抑制而非 CD38 單一療法。

## 圖譜健康評估

- **CD38 度：** 15（正典）/ 19（文件節點）
- **SARM1 度：** 8（正典）/ 20（文件節點 `adrenochrome_sarm1`）
- **直接 CD38↔SARM1 邊：** ✅ 現已存在（曾被標記為缺口）
- **共享鄰居：** `link_nad`、`link_cadpr`
- **剩餘缺口：** 圖譜中無直接的 CZ-48 節點邊；NMN-橋樑與巨噬細胞共表現邊仍為 AMBIGUOUS（假說性，非萃取）

## 建議後續追蹤

- **合併 CD38 + SARM1 抑制的協同** — 慢性 + 急性 NAD+ 保護。
- **跨區室的 NMN/NAD+ 比值感知** — 胞外 CD38 張力如何調節胞內 SARM1。
- **微膠細胞中的 CD38 對比神經元中的 SARM1** — CNS NAD+ 競爭圖譜。
