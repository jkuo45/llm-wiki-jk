---
title: SARM1–NAD+ 追蹤 — 圖譜衍生的機制圖譜
description: 從 graphify 知識圖譜萃取的 SARM1-NAD+ 關係綜合追蹤。涵蓋 SARM1 的 NADase 活性、NMN/NAD+ 比值感知、Wallerian 式退化機制、透過 MAPK/JNK/TRAF6 的訊號傳遞、疾病連接，以及治療介入（Disulfiram）。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - sarm1
  - nad-plus
  - wallerian-degeneration
  - axon-degeneration
  - nmnat2
  - neurodegenration
  - knowledge-graph
source: graphify graph query + notes/adrenochrome/SARM1.md
---

# SARM1–NAD+ 追蹤

> 透過 BFS/DFS 遍歷與節點解釋，從 wiki 知識圖譜（4714 個節點、8624 條邊、363 個社群）萃取。
> 日期：17_JUL_2026

## 圖譜位置

| 性質 | 值 |
|---|---|
| **節點** | SARM1 |
| **ID** | `adrenochrome_sarm1` |
| **來源** | `adrenochrome/SARM1.md` |
| **類型** | concept（酵素） |
| **社群** | 101 |
| **度** | 20 |

## 直接連接（來自圖譜）

| 來源 | 關係 | 標的 | 信心度 | 標的社群 |
|---|---|---|---|---|
| SARM1 | references | **Nad** | EXTRACTED | 101 |
| Nad | conceptually_related_to | SARM1 | INFERRED | 101 |
| SARM1 | references | **Nmn** | EXTRACTED | 101 |
| SARM1 | references | **Nmnat2** | EXTRACTED | 101 |
| SARM1 | references | **Nicotinamide** | EXTRACTED | 101 |
| SARM1 | references | **Glycolysis** | EXTRACTED | 152 |
| SARM1 | references | **MAPK** | EXTRACTED | 101 |
| SARM1 | references | **JNK** | EXTRACTED | 101 |
| SARM1 | references | **TRAF6** | EXTRACTED | 132 |
| SARM1 | references | **Phosphorylation** | EXTRACTED | 101 |
| SARM1 | references | **Disulfiram** | EXTRACTED | 101 |
| SARM1 | references | **ALS** | EXTRACTED | 101 |
| SARM1 | references | **Neuropathy** | EXTRACTED | 101 |
| SARM1 | references | **Glaucoma** | EXTRACTED | 101 |
| SARM1 | references | **Injury** | EXTRACTED | 101 |
| SARM1 | references | **Degeneration** | EXTRACTED | 101 |
| SARM1 | references | **Disease** | EXTRACTED | 13 |
| SARM1 | references | **Rossmann fold** | EXTRACTED | 101 |
| SARM1 | references | **Mononucleotide** | EXTRACTED | 101 |
| SARM1 | references | **Domain** | EXTRACTED | 101 |

## 相鄰的 NAD+ 代謝節點

| 節點 | 社群 | 角色 |
|---|---|---|
| **NMNAT** | 4/161 | NAD+ 合成酶 — 將 NMN → NAD+ 轉換 |
| **NMN** | 161 | 先驅物與 SARM1 活化因子 |
| **NAMPT** | 161 | 限速回收酵素（NAM → NMN） |
| **Nicotinamide** | 101 | NAD+ 切割產物 + 異位性抑制劑 |
| **Nicotinamide Riboside** | 161 | NAD+ 先驅物 |
| **PARP** | 161 | 競爭性 NAD+ 消耗者 |

## 機制：三相軸突 NAD+ 災難

### 相位 1 — 恆定狀態（健康軸突）

```
NMNAT2（t½ ~30 分，從細胞體持續遞送）
     │
     ▼
NMN ──▶ NAD+  （主動維持在 ~400 μM）
             │
             ▼
       SARM1 處於 ARM-TIR 自體抑制
       （NAD+ 結合 ARM 域，使 TIR 不活化）
             │
             ▼
       Nicotinamide 異位性地抑制 SARM1
```

### 相位 2 — 觸發（軸突損傷）

```
損傷將軸突與細胞體切斷
     │
     ▼
NMNAT2 供應切斷 → NMNAT2 蛋白酶體降解（t½ ~30 分）
     │
     ▼
NMN 累積（不再轉換為 NAD+）
     │
     ▼
NMN/NAD+ 比值上升  ← 主要代謝觸發因子
     │
     ▼
NMN 結合 ARM 域 → 解除自體抑制
```

### 相位 3 — 災難（NAD+ 耗竭 → Wallerian 式退化）

```
活化的 SARM1 經由 SAM 域八聚化
     │
     ▼
TIR 域二聚化 → 形成複合 NADase 活性位點
     │
     ▼
NAD+ 以高速率消耗：NAD+ 從 ~400 μM 降至 ~0（數分鐘內）
     │
     ├──▶ 糖解停止（GAPDH 需要 NAD+）
     ├──▶ ATP 生成停止
     ├──▶ 膜電位喪失
     ├──▶ Ca²⁺ 內流
     └──▶ 軸突碎裂（Wallerian 式退化，30-60 分鐘）
```

### 酵素產物

SARM1 切割 NAD+ 生成：

| 產物 | 功能 |
|---|---|
| **Nicotinamide** | 亦作為回饋性異位抑制劑 |
| **ADP-ribose（ADPR）** | 主要切割產物 |
| **cADPR** | 動員 Ca²⁺ 的第二信使（微量但存在） |

SARM1 也具有 base-exchange 活性，類似 CD38 — 將菸鹼醯胺交換為游離鹼基如菸鹼酸以生成 NAADP。

## 非 NADase 訊號傳遞（支架功能）

SARM1 具有不依賴其 NADase 活性的 TIR 域介導訊號功能：

```
SARM1（支架）
     │
     ├──▶ TRAF6 招募
     │       │
     │       └──▶ JNK 路徑活化
     │
     ├──▶ p38 MAPK 活化
     │
     └──▶ TLR3/TLR4 負調控
```

此訊號功能經由連至 MAPK、JNK 與 TRAF6 的邊在圖譜中被捕捉。

## 疾病連接

| 疾病 | 圖譜證據 | 機制 |
|---|---|---|
| **ALS** | EXTRACTED 邊 | SARM1 在脊髓運動神經元中上調；KO 適度延長 SOD1^G93A 小鼠的存活 |
| **化療誘發周邊神經病變** | Neuropathy 邊 | 紫杉烷/鉑劑經由 NMNAT2 下調活化 SARM1；SARM1 KO 保護 |
| **青光眼** | EXTRACTED 邊 | 視網膜神經節細胞退化涉及 SARM1 |
| **創傷性腦損傷** | Injury 邊 | 瀰漫性軸突損傷活化 SARM1；抑制減少病理 |
| **阿茲海默症** | 社群 28（經由 NMNAT） | Aβ 與 tau 在培養神經元中觸發依賴 SARM1 的 NAD+ 耗竭 |
| **帕金森氏症** | 社群 69（經由 NMNAT） | 可能在多巴胺能軸突退化中扮演角色 |
| **缺血性中風** | Injury 邊 | SARM1 促成續發性軸突損傷 |

## 治療介入

| 介入 | 類型 | 機制 |
|---|---|---|
| **Disulfiram** | FDA 核准的老藥新用 | TIR 域半胱氨酸的共價修飾（不可逆） |
| **DSRM-3716** | 次世代小分子 | 非共價，佔據 NAD+-結合口袋 |
| **GSK-428** | Quinazoline 骨架抑制劑 | 正位型，高 potency（nM IC₅₀） |

## 圖譜健康評估

- **度：** 20 條直接連接（圖譜中連接最多的 NAD+ 消耗者）
- **社群隔離：** 主要位於社群 101（腎上腺色素群集）
- **跨社群邊：** TRAF6（132）、Glycolysis（152）、Disease（13）
- **信心度分佈：** 19 個 EXTRACTED、1 個 INFERRED
- **圖譜缺口：** 儘管共享 NAD+ 受質，仍無連至 CD38（78）、cADPR（19）或 PARP1（99）的邊
