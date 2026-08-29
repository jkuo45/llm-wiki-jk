---
title: 合併 CD38 + SARM1 抑制的協同 — 圖譜衍生的機制圖譜
description: 合併 CD38 與 SARM1 抑制的協同潛力追蹤，萃取自 graphify 知識圖譜（4714 個節點、8624 條邊、363 個社群）。將慢性 NAD+ 耗竭（CD38）、急性災難性耗竭（SARM1）與 sirtuin/氧化還原防禦（腎上腺色素軸）整合為單一介入邏輯。涵蓋 NR 補充、78c/quercetin/apigenin CD38 抑制劑、Disulfiram/DSRM-3716/GSK-428 SARM1 抑制劑，以及 NMN 致敏矛盾。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - nad-plus
  - nicotinamide-riboside
  - sirtuins
  - combination-therapy
  - axonal-degeneration
  - inflammaging
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md + task_output_CD38_NADplus_parallel_adrenochrome_17_JUL_2026.md + task_output_SARM1_NADplus_trace_17_JUL_2026.md
---

# 合併 CD38 + SARM1 抑制協同追蹤

> 透過 BFS/DFS 遍歷與節點解釋，從 wiki 知識圖譜萃取。
> 日期：17_JUL_2026
> 建基於：`task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md`

## 圖譜位置 — 即時驗證

`notes__link_cd38` 文件節點（度 19）直接連接到關鍵協同角色，確認了結構基礎：

| CD38 文件節點連接至 | 在協同中的角色 |
|---|---|
| `notes__link_sarm1` | 直接邊 — 共享 NAD+ 競爭 |
| `notes__link_nr` | Nicotinamide Riboside — NAD+ 先驅物 |
| `notes__link_nad+` | 共享受質池 |
| `notes__link_sirtuins` / `notes__link_sirt3` | 需保護的防禦系統 |
| `notes__link_quercetin` | CD38 抑制劑 |
| `notes__link_cz_48` | 藥理分歧探針 |
| `notes__link_inflammaging` | CD38 上游驅動因子 |
| `notes__link_microglia` | CD38 作用所在的 CNS 區室 |

圖譜中不存在直接的協同邊（組合療法尚未作為邊萃取）— 因此本追蹤為源自收斂節點邏輯的 **INFERRED / AMBIGUOUS**，與先前任務文件所指出的文獻缺口一致。

## 兩次打擊的 NAD+ 脆弱性

來自三條 companion 追蹤，NAD+–sirtuin–氧化還原軸遭受三個獨立的耗竭：

```
腎上腺色素  ── 氧化負載 ──┐
                                   ├──▶ SIRTUIN / 氧化還原防禦被飢餓
CD38          ── 慢性 NAD+ 耗竭（發炎老化） ─┤        │
                                   │                └─▶ 氧化壓力 ↑、細胞凋亡
SARM1         ── 急性災難性耗竭（損傷） ─┘
```

單一介入只處理一次打擊。**協同邏輯：** 組合藥劑，使每次打擊同時被阻斷。

## 介入邏輯 — 兩條互補的路線

### 路線 A — 慢性 NAD+ 恢復（標的 CD38 + 腎上腺色素）

```
發炎老化 ──▶ CD38（胞外-NADase）────消耗────▶ NAD+ ↓
         │                                        │
         │  CD38 抑制劑（78c / Quercetin / Apigenin）
         ▼                                        ▼
    CD38 活性 ↓ ──▶ NAD+ 保存 ──▶ Sirtuins/SIRT3 活化
                                                 │
                               NR（Nicotinamide Riboside）────提升池────┘
                                                 │
                                                 ▼
                                   MnSOD 活化 → 對抗腎上腺色素 ROS
```

- **CD38 抑制劑（圖譜確認）：** `notes__link_quercetin`（直接 CD38 邊）、`notes_sirtuins_cd38_inhibitor_78c`（連至 sirtuin）、`notes__link_apigenin`（INFERRED 抑制劑）。
- **NAD+ 先驅物：** `notes__link_nr`（Nicotinamide Riboside）— 提升 CD38 原本會消耗的池。
- **證據（來自 CD38 追蹤）：** CD38 KO 保存 NAD+；78c 延長壽命約 14%（雄性小鼠）；CD38 於胞外降解 NMN/NR，因此抑制提升先驅物可得性。

### 路線 B — 急性軸突保護（標的 SARM1）

```
損傷 ──▶ NMNAT2 缺失 ──▶ NMN/NAD+ 比值 ↑ ──▶ SARM1 ON
                                               │ NADase
                                               ▼
                                    軸突 NAD+ → 0 → Wallerian 式退化
         │
         │  SARM1 抑制劑（Disulfiram / DSRM-3716 / GSK-428）
         ▼
    SARM1 OFF ──▶ 軸突中 NAD+ 保存 ──▶ 退化被阻斷
```

- **SARM1 抑制劑（來自 SARM1 追蹤）：** Disulfiram（共價 TIR 半胱氨酸）、DSRM-3716（非共價口袋）、GSK-428（quinazoline，nM IC₅₀）。
- **證據：** SARM1 KO 保護免於化療神經病變、TBI、青光眼；抑制劑在數分鐘內阻斷 NAD+ 災難。

## 協同論點

```
路線 A（CD38 抑制 + NR）  ──► 為 sirtuin 恢復慢性 NAD+ 池
路線 B（SARM1 抑制）      ──► 預防軸突中的急性 NAD+ 崩解
                                     │
                                     ▼
               合併 = 跨時間尺度的全身 NAD+ 韌性
                                     │
                                     ▼
               在發炎老化（慢性）與損傷（急性）兩者下
               Sirtuin/氧化還原防禦都維持上線
```

**為何是協同而非相加：** CD38 抑制作用於緩慢的老化/發炎老化時間尺度（數小時–數年）；SARM1 抑制作用於急性損傷時間尺度（數分鐘）。它們保護同一個 NAD+ 池的*不同區室與時間尺度*，因此合併覆蓋比任一單獨都廣。文獻先例：合併 CD38+PARP 抑制完全逆轉 LPS 誘發的 NAD+ 下降（Covarrubias 2020）— 支持多消耗者抑制優於單一標的的原則。

## NMN 致敏矛盾（關鍵注意事項）

來自競爭追蹤，高 CD38 活性降解胞外 NMN，可能**保護**免於 SARM1 活化（維持胞內 NMN 低下）。因此：

```
CD38 抑制 ──▶ NMN 保存 ──▶ 胞內 NMN ↑
                                          │
                                          ▼
                               SARM1 致敏風險（NMN/NAD+ 比值 ↑）
```

**意涵：** 為長壽而提升 NAD+ 的 CD38 單一療法，可能無意間致敏神經元，使其更易發生依賴 SARM1 的 Wallerian 式退化。這正是**合併 CD38 + SARM1 抑制**在圖譜邏輯上優於單獨 CD38 的原因 — 路線 B 中和了路線 A 創造的致敏風險。

## 建議的圖譜邊（AMBIGUOUS / 待新增）

| 來源 | 關係 | 標的 | 信心度 | 理由 |
|---|---|---|---|---|
| CD38 inhibitor | synergizes_with | SARM1 inhibitor | AMBIGUOUS (0.45) | 對共享 NAD+ 池的互補時間尺度/區室覆蓋 |
| NR + CD38 inhibitor | increases_risk_of | SARM1 activation | AMBIGUOUS (0.40) | NMN 保存假說，未測試 |
| Combined CD38+SARM1 inhib | protects | NAD+ pool | INFERRED (0.60) | 由 CD38+PARP 協同先例推論 |

## 圖譜健康評估

- **直接 CD38↔SARM1 邊：** ✅ 存在（`notes__link_cd38 → notes__link_sarm1`）
- **存在的抑制劑節點：** Quercetin（度 10）、78c（度 1→sirtuin）、Apigenin（度 10）、CZ-48（連至 CD38）
- **圖譜中缺失：** Disulfiram、DSRM-3716、GSK-428（SARM1 抑制劑）無圖譜節點 — 萃取缺口
- **協同邊：** 缺失（正確地，因為它是假說性的）
- **信心度：** 本追蹤由收斂節點邏輯 + 文獻推論而來；不存在萃取的協同邊

## 建議後續追蹤

- **微膠細胞-CD38 對比神經元-SARM1 CNS 圖譜** — 兩種抑制劑在腦中作用的位置。
- **NR + CD38 抑制劑劑量交互** — NMN 保存是否跨越 SARM1 活化閾值？
- **CD38+PARP 對比 CD38+SARM1** — 哪種雙重抑制配對展現最強的 NAD+ 救援。
