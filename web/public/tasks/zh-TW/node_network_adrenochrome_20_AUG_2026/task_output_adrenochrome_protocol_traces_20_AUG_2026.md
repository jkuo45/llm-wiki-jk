---
title: "腎上腺色素協定網路追蹤（MB + AG + 堆疊）"
description: 將四節點四重奏研究以圖譜網路擴展至完整的腎上腺色素協定——亞甲藍、氨基胍，以及支援堆疊（卡巴色腙、尿石素 A、亞精胺、雷帕黴素、非瑟酮、肌酸、白藜蘆醇）——依個人化 PageRank 與至腎上腺色素的最短路徑耦合度排序。
created: 2026-08-20
tags:
  - task-output
  - adrenochrome
  - knowledge-graph
  - methylene-blue
  - aminoguanidine
  - network-analysis
---

# 任務輸出 — 腎上腺色素協定網路追蹤（MB + AG + 堆疊）— 2026 年 8 月 20 日

**圖譜建構：** `graphify-out/graph.json` — 2,596 個節點 / 3,737 條邊（巨連通分量 2,110 / 3,295），指標計算於 2026-08-20 18:21:44（建構 `867a5ae5fdb8a46c`）
**工具：** `scripts/analysis/node_analysis.py`（RANDOM_SEED=1 慣例）
**目的：** 將 8 月 20 日的四節點四重奏研究（adrenochrome ↔ mitohormesis/autophagy/sirtuins）擴展至完整的**腎上腺色素協定**：亞甲藍（MB）、氨基胍（AG），以及支援堆疊（carbazochrome、ascorbic acid、urolithin A、spermidine、rapamycin、fisetin、creatine、resveratrol）。餵入即時網頁 `web/pages/en-US/adrenochrome-protocol-node-network-analysis.html`。

## 執行紀錄

| 紀錄 | 指令 |
| --- | --- |
| `run_log_A_sources_mb_ag_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py --sources methylene_blue aminoguanidine --targets adrenochrome` |
| `run_log_B_sources_adrenochrome_targets_mb_ag.txt` | `uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py --sources adrenochrome --targets methylene_blue aminoguanidine` |
| `run_log_C_sources_arms_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py --sources mitohormesis autophagy sirtuins --targets adrenochrome` |
| `run_log_D_sources_protocol_stack_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py --sources urolithin_a spermidine rapamycin fisetin creatine resveratrol carbazochrome ascorbic_acid --targets adrenochrome` |

## 重要發現

### 協定藥劑是與腎上腺色素耦合最緊密的外源節點

以 **Adrenochrome** 為種子的個人化 PageRank（藥劑排名）：

| 節點 | PPR 排名 | 分數 | 至腎上腺色素的路徑 |
| --- | --- | --- | --- |
| Aminoguanidine | **#4** | 0.01401 | **直接** `reacts_with(0.9)` |
| Methylene blue | **#8** | 0.00929 | 經由 Complex I / Oxidative Stress / Hemolysis 的 3 條路徑 |
| Carbazochrome | **#14** | 0.00716 | **直接** `is_an_intermediate_for(0.95)` |
| Ascorbic Acid | **#15** | 0.00689 | **直接** `reduces(0.75)` |
| Rapamycin | #59 | 0.00432 | 經由 NF-κB / OXPHOS / Ox Stress 的 3 條路徑 |
| Mitohormesis | #89 | 0.00195 | 經由 Reactive Oxygen Species 的 1 條路徑 |
| Urolithin A | #90 | 0.00187 | 經由 NF-κB / Ox Stress / ROS 的 3 條路徑 |
| Autophagy | #93 | 0.00174 | 經由 Neuromelanin 的 1 條路徑 |
| Creatine | #95 | 0.00164 | 經由 ROS 的 1 條路徑 |
| Fisetin | #147 | 0.00072 | 經由 Senescence/COMT/Flavonoids/SASP/Senomorphic 的 7 條路徑 |
| Spermidine | #174 | 0.00061 | 經由 Oxidative Stress 的 1 條路徑 |
| Resveratrol | #181 | 0.00057 | 經由 COMT/SAMD/SASP/SIRT1/SIRT3 的 8 條路徑 |
| Sirtuins | #305 | 0.00029 | 經由 SASP/NF-κB 的 1 條路徑 |

反向：以 **Aminoguanidine** 為種子，Adrenochrome 排名 **#3**（0.02318）；以 **Methylene blue** 為種子，排名 **#7**（0.01090）。兩個方向皆進入前十——比任何適應性程式（正向 #89/#93/#305；反向 #60/#58/#147）都更緊密。

### 進入觸發點的三條直接化學邊（倍數 1，無橋接）

- `Aminoguanidine --[reacts_with|0.9]--> Adrenochrome`（來源：`_document_ - US4501923A - Process for preparing adrenochrome.md`）
- `Carbazochrome --[is_an_intermediate_for|0.95]--> Adrenochrome`（同一專利文件；儲存方向為 Adr → Carbazochrome，無向列印會反轉）
- `Ascorbic Acid --[reduces|0.75]--> Adrenochrome`；另加 `Ascorbic Acid --[inhibits|0.9]--> Adrenochrome formation`

### MB 透過共享的氧化還原／損傷橋接耦合，而非化學直接耦合

三條共同最短路徑，第一跳橋接為 **Complex I**、**Oxidative Stress**、**Hemolysis**。方向審計後的連線：`Complex I --[reduces|0.9]--> Adrenochrome`；`Methylene blue --[bypasses|0.9]--> Complex I/III`，`--[accepts_electrons_from|0.96]--> NADH`，`--[shunts_electrons_to|0.95]--> Cytochrome c`，`--[induces|0.88]--> Oxidative Stress`，`--[causes|0.94]--> Hemolysis`（以及 `Adrenochrome --[induces|0.75]--> Hemolysis`）。MB 亦帶有 `--[follows|0.95]--> Hormetic Window`。

### 譜接縫將化學層與程式層分隔開來

Fiedler 座標（λ₂ = 0.0463）：**觸發側（負）**：Creatine −0.0024、Ascorbic Acid −0.0023、Adrenochrome −0.0015、Fisetin −0.0010、Carbazochrome −0.0008、Resveratrol −0.0006。**適應側（正）**：Methylene blue +0.0013、Aminoguanidine +0.0021、Autophagy +0.0033、Urolithin A +0.0033、Mitohormesis +0.0034、Rapamycin +0.0036、Spermidine +0.0037、Sirtuins +0.0043。解讀：腎上腺色素的氧化還原夥伴（抗壞血酸、Complex-I 還原、carbazochrome）與觸發點歸為一側；協定的全身性調節劑（MB、AG）與適應性程式同側，並跨越接縫延伸過去。

### 其他值得注意者

- 相對 Adrenochrome 的有效電阻（虛無值 1.164 ± 0.595）：Rapamycin 0.130（z −1.74）最近；MB 0.164（z −1.68）；AG 0.186（z −1.64）；Carbazochrome 0.747（z −0.70）最遠，儘管存在直接邊——懸垂的化學節點。
- Adamic–Adar：MB → Adr **2.641**（迄今任何追蹤中最高；共享的 Complex I/Ox Stress/Hemolysis 鄰域提議一條 MB–Adr 邊），Rapamycin 1.999、Ascorbic 0.910、UA 0.885、AG 0.558；Fisetin/Resveratrol/Carbazochrome 為 0.000。
- Jaccard(Carbazochrome, Ascorbic Acid) = **0.143**——本研究中最高的成對值——僅共享 `Adrenochrome`。
- Carbazochrome 位於社群 #98，字面上命名為 **「Adrenochrome monoaminoguanidine」**（大小 6）；Spermidine 位於 Autophagy 社群（#34）內部。
- 適應臂刷新（紀錄 C）精確重現 8 月 20 日的四重奏基準（每臂倍數 1；橋接為 ROS / Neuromelanin / SASP；PPR #89/#93/#305；Fiedler +0.0034/+0.0033/+0.0043）。註：`Mitohormesis --requires--> ROS` 的置信度現印為 0.9（較早的紀錄印為 0.92）。
- 既有的方向陷阱再次確認：腳本印出 `NF-κB --[inhibits|0.6]--> Adrenochrome`；儲存的三元組為 `Adrenochrome --[inhibits|0.6]--> NF-κB`（含混不清，senomorphic 假說）。

## 排隊的後續追蹤

1. 完整階梯的置信度加權 PPR 重新排序（Phase 3 方法）。
2. MB ⇄ carbazochrome Complex-I 競爭子圖追蹤（在 `_document_ - combo therapy` 中標記的 MRR 放大器衝突）。
3. Hormetic Window / SIRT3-SIRT4 比值自我圖（ego-graph）追蹤（`SIRT3/SIRT4 ratio --determines(0.95)--> Hormetic Window`）。
4. 實體解析後的重跑（NF-κB 去重）——預期 Arm C 以及 Resveratrol/Fisetin 的多路徑計數變動最大。

> [!TIP]
> **佇列已於 2026 年 8 月 21 日執行**
> 所有排隊的追蹤皆作為第二輪（round 2）在 `src/tasks/node_network_adrenochrome_traces2_21_AUG_2026/`（執行 E–I；NR/NMN 燃料經由執行 E 併入）中運行。重要驚喜：NF-κB 合併對路徑拓撲而言是**量化的虛無結果**（第 4 項的預期被否證——H3 在實體解析後倖存）；MB ⇄ carbazochrome Complex-I 衝突在圖譜中**靜默無聲**（carbazochrome 不帶有任何 ETC 連線）；SIRT3/SIRT4 比值生物標記鏈是一條**兩邊的殘樁**，與其自身的組成節點斷開；而 NMN 是位於巨連通分量之外的度數為 1 的節點。詳見 `task_output_adrenochrome_protocol_traces_round2_21_AUG_2026.md` 以及即時頁面 §09 紀錄。
