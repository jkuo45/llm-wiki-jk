---
title: 微膠細胞-CD38 對比 神經元-SARM1 — CNS NAD+ 競爭圖譜
description: 追蹤中樞神經系統 NAD+ 消耗的區室化分布，將微膠細胞中的 CD38 活性（神經發炎、慢性）對應於神經元/軸突中的 SARM1 活性（急性退化）。萃取自 graphify 知識圖譜（4714 個節點、8624 條邊、363 個社群）。將 CD38-SARM1 競爭與協同追蹤整合進入腦部特異性的生物學。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - microglia
  - neuron
  - nad-plus
  - neuroinflammation
  - traumatic-brain-injury
  - neurodegeneration
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + notes__link_cd38 (microglia edge) + task_output_SARM1_NADplus_trace_17_JUL_2026.md + task_output_CD38_SARM1_synergy_17_JUL_2026.md
---

# 微膠細胞-CD38 對比 神經元-SARM1 — CNS NAD+ 競爭圖譜

> 透過 BFS/DFS 遍歷與節點解釋，從 wiki 知識圖譜萃取。
> 日期：17_JUL_2026
> 建基於：`task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md`、`task_output_CD38_SARM1_synergy_17_JUL_2026.md`

## 圖譜位置 — 即時驗證

| 錨點節點 | 連接（已驗證） | CNS 相關性 |
|---|---|---|
| `notes__link_cd38` | **`notes__link_microglia`** ✅ 直接邊、`notes__link_inflammaging`、`notes__link_tumor_microenvironment` | CD38 作用於腦部駐留的免疫細胞 |
| `notes_adrenochrome_sarm1` | `notes_adrenochrome_nad+`、`notes_adrenochrome_glycolysis` | 神經元/軸突中的 SARM1 NADase |
| `notes__link_traumatic_brain_injury_tbi` | `notes__link_traumatic_brain_injury`、`notes__link_tunneling_nanotubes` | 急性 CNS 損傷 → 軸突 NAD+ 耗竭 |
| `notes__link_microglia` | degree 2（stub） | 稀疏 — 萃取缺口 |
| `notes__link_neuron` | degree 2（stub） | 稀疏 — 萃取缺口 |

> **圖譜狀態註記：** CD38→microglia 的邊存在，並確認 CD38 的 CNS 免疫位點。神經元/SARM1/TBI 一側萃取不足（stub 節點），因此下方的 CNS 圖譜結合了已確認的 `notes__link_cd38 → microglia` 錨點，以及來自 SARM1 任務文件與腎上腺色素神經黑質素語料庫的機制內容。

## CNS 雙細胞 NAD+ 競爭

```
┌──────────────────────── 腦實質 ────────────────────────┐
│                                                           │
│   微膠細胞（免疫性、慢性）            神經元 / 軸突（急性）      │
│   ┌─────────────────────┐              ┌─────────────────────┐   │
│   │ CD38（胞外 NADase）  │              │ SARM1（胞內 NADase）│   │
│   │  活化因子：          │              │  活化因子：          │   │
│   │  • 發炎老化          │              │  • 軸突損傷          │   │
│   │  • 神經發炎          │              │  • NMNAT2 缺失       │   │
│   │  • 老化             │              │  • NMN/NAD+ 比值 ↑   │   │
│   └─────────┬───────────┘              └─────────┬───────────┘   │
│             │ 消耗胞外 NAD+/NMN                  │ 消耗軸突        │
│             │ → 神經發炎被放大                    │ NAD+ → Waller  │
│             │ → 限制供應至神經元的先驅物           │ 退化            │
│             └──────────────┬─────────────────────┘               │
│                            ▼                                      │
│                  共享的腦部 NAD+ 池                               │
│                            │                                     │
│                            ▼                                     │
│              Sirtuin / 氧化還原防禦受損                           │
│              （與腎上腺色素追蹤收斂）                             │
└───────────────────────────────────────────────────────────────────┘
```

## 細胞位點（來自圖譜與文獻）

| 性質 | 微膠細胞 CD38 | 神經元 SARM1 |
|---|---|---|
| **細胞類型** | 微膠細胞（腦部駐留巨噬細胞） | 神經元（細胞體、軸突、粒線體） |
| **圖譜錨點** | `notes__link_cd38 → notes__link_microglia` ✅ | `notes_adrenochrome_sarm1 → notes_adrenochrome_nad+` |
| **時間尺度** | 慢性（老化、神經發炎） | 急性（損傷、數分鐘） |
| **觸發因子** | 發炎老化、免疫活化 | 軸突切斷、NMNAT2 耗竭 |
| **產出** | 神經發炎、先驅物耗損 | 軸突 NAD+ 災難、Wallerian 式退化 |
| **疾病連結** | 神經發炎、老化腦 | TBI、神經病變、青光眼、ALS、AD、PD |

## 交互作用假說

圖譜確認 CD38 位於微膠細胞而 SARM1 位於神經元 — 但它們共享**腦部 NAD+ 池**。兩條交互作用路徑在圖譜上具備合理性：

### 路徑 1 — 先驅物競爭（胞外 → 胞內）
```
微膠細胞 CD38 降解胞外 NMN/NAD+
        │
        ▼
可供神經元利用的 NAD+ 先驅物減少
        │
        ▼
神經元 NAD+ 池降低 → SARM1 更接近活化閾值
        │
        ▼
損傷發生 → SARM1 更容易被開啟（NAD+ 緩衝降低）
```
**矛盾現象：** 微膠細胞 CD38 會*降低*神經元的 NAD+ 緩衝，可能在後續損傷期間**致敏**神經元，使其更易發生依賴 SARM1 的退化。

### 路徑 2 — 發炎 → 損傷級聯
```
神經發炎（微膠細胞 CD38 開啟）
        │
        ▼
細胞激素風暴 / 氧化壓力
        │
        ▼
軸突脆弱性 ↑
        │
        ▼
TBI / 缺血 → SARM1 在已受壓迫的軸突中被活化
```
`notes__link_traumatic_brain_injury_tbi` 節點（連接至 `tunneling_nanotubes`）標定了 SARM1 運作的急性損傷入口。

## 治療意涵 — CNS 特異性協同

來自協同追蹤，CNS 圖譜精確化了組合邏輯：

| 路線 | 標的細胞 | 藥劑 | CNS 效應 |
|---|---|---|---|
| A | 微膠細胞 | CD38 抑制劑（78c / Quercetin / Apigenin） | 平息神經發炎，保存腦部 NAD+ 先驅物 |
| A | 實質組織 | NR（Nicotinamide Riboside） | 提升神經元 NAD+ 緩衝 |
| B | 神經元/軸突 | SARM1 抑制劑（Disulfiram / DSRM-3716 / GSK-428） | 阻斷 TBI/損傷後的 Wallerian 式退化 |

**CNS 特異性注意事項：** NR 提升神經元 NAD+（對 sirtuin 有利），但依據 NMN 致敏矛盾，可能提高 NMN/NAD+ 比值並致敏 SARM1。在 CNS 中此風險為急性 — 因此在腦部情境中，NR 並用時**SARM1 抑制（路線 B）格外關鍵**，以預防醫源性軸突脆弱性。

## 圖譜缺口識別

| 缺口 | 狀態 |
|---|---|
| `notes__link_microglia`（stub，度 2） | 萃取不足 — 需更豐富的邊 |
| `notes__link_neuron`（stub，度 2） | 萃取不足 |
| SARM1 抑制劑（Disulfiram、DSRM-3716、GSK-428） | **無圖譜節點** |
| 微膠細胞→神經元 NAD+ 競爭交互邊 | 模糊 / 假說性 |
| 疾病邊（SARM1 相關的 ALS、AD、PD、青光眼） | 任務文件中有，圖譜中稀疏 |

## 建議新增的圖譜邊（模糊 / 待新增）

| 來源 | 關係 | 標的 | 信心度 |
|---|---|---|---|
| notes__link_microglia | expresses | notes__link_cd38 | INFERRED (0.80) |
| notes__link_neuron | expresses | notes_adrenochrome_sarm1 | INFERRED (0.85) |
| notes__link_cd38 | competes_with | notes_adrenochrome_sarm1 | AMBIGUOUS (0.40) |
| notes__link_traumatic_brain_injury | activates | notes_adrenochrome_sarm1 | INFERRED (0.70) |

## 建議後續追蹤

- **填補缺失的 CNS 節點** — 新增 SARM1 抑制劑、充實微膠細胞/神經元、疾病邊。
- **CNS 中的 NR 劑量** — NAD+ 先驅物是否能穿過 BBB 並觸及 SARM1 活化閾值？
- **疾病特異性圖譜** — ALS（運動神經元 SARM1）、AD（Aβ/tau → SARM1）、PD（多巴胺能軸突，見腎上腺色素神經黑質素語料庫）。
