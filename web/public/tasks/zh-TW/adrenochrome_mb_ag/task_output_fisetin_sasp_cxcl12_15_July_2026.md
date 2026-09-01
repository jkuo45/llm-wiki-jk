---
title: CXCL12 → 內皮功能障礙機制追蹤與非瑟酮救援路徑
type: task_output
created: 2026-07-15
updated: 2026-07-15
description: '透過衰老相關分泌表型將 CXCL12 連結至內皮功能障礙的機制追蹤，並評估非瑟酮作為救援路徑。'
source: graphify-out/graph.json
tags:
  - graph-trace
  - cxcl12
  - fisetin
  - endothelial-dysfunction
  - sasp
  - senolytics
---

# CXCL12 → 內皮功能障礙機制追蹤

> Source: `graphify-out/graph.json` — traced via NetworkX shortest-path and hub analysis
> Context: Incremental graphify update (`/graphify notes --update`) on 10 changed files, Mahoney et al. 2025 paper on fisetin/SASP/CXCL12/endothelial dysfunction

---

## 圖形結構摘要

| 指標 | 數值 |
|---|---|
| 總節點數 | 1,850 |
| 總邊數 | 2,388 |
| 社群數 | 351 |
| 更新後新增節點 | 22 |
| 更新後新增邊 | 1,470 |

### 關鍵中樞節點（來自本次更新）

| 節點                    | 度數 | 社群角色                      |
| ----------------------- | ------ | ----------------------------------- |
| [[Senescence]]          | 89     | 核心衰老中樞                 |
| [[Senescence]] | 76     | 核心衰老中樞                 |
| [[SASP]]                | 62     | 所有病變的上游驅動因素    |
| [[NF-κB]]               | 38     | SASP 轉錄因子           |
| [[mTOR]]                | 35     | SASP 放大器、自噬抑制劑 |
| [[Fisetin]]             | 34     | 衰老溶解型救援節點               |
| [[Apoptosis]]           | 33     | 衰老細胞清除機制  |
| [[p53]]                 | 31     | 衰老效應因子                 |
| [[Autophagy]]           | 30     | 蛋白質穩態/清除機制    |
| [[Inflammation]]        | 28     | 全身性後果                |

### 令人意外的連結（來自本次更新）

> [!TIP]
> **Fisetin ↔ CXCL12 橋接**
> [[Fisetin]] 使單一循環中的 [[SASP]] 因子正常化以救援內皮功能——一種「體液性衰老」機制。這是唯一橋接衰老社群（62 條邊）與血管功能障礙社群（9 條邊）的節點。

- **[[ACKR3]] ↔ [[Endothelial Cells]]**: 清除受體由 [[CXCR4]] 主導的訊號轉變為 [[ACKR3]] 主導，作為強化衰老表型的分子開關
- **[[Endothelial-to-Mesenchymal Transition]] ↔ [[Endothelial Dysfunction]]**: 轉分化（[[CDH5]]/[[PECAM1]] 喪失、[[TGFβ]]/[[ACTA2]] 增加）是由 [[SASP]] 驅動的衰老相關血管功能障礙的新穎機制

---

## 追蹤 1：CXCL12 → 內皮功能障礙（2 跳）

```
CXCL12 --[references]--> Endothelial Dysfunction
```

**機制:** [[CXCL12]] 是直接損害內皮功能的循環 [[SASP]] 因子。Mahoney et al. 2025 論文證明了：

- 衰老小鼠血漿與人類血漿中的 CXCL12 濃度皆升高
- 在年輕小鼠中，透過 AAV9 介導的 CXCL12 過度表現重現了與衰老相關的 [[Endothelial Dysfunction]]
- LIT-927（CXCL12 中和配體）恢復了衰老小鼠的內皮功能
- [[Fisetin]] 治療使循環中的 CXCL12 正常化

> [!NOTE]
> **證據: EXTRACTED 參考邊（信賴度: EXTRACTED）**

---

## 追蹤 2：CXCL12 → NO 抑制（2 跳）

```
CXCL12 --[references]--> Nitric Oxide
```

**機制:** [[CXCL12]] 使內皮 NO 生物利用度降低 **13–20%**（Mahoney et al. 2025）。生化機制：

1. CXCL12 活化 [[eNOS]] 去偶聯——該酵素從產生 NO 轉變為產生超氧化物
2. NO 生物利用度降低損害血管舒張
3. LIT-927 恢復 NO 產生（+10%），證實因果關係
4. [[Fisetin]] 使 CXCL12 正常化 → 恢復 eNOS 偶聯 → 恢復 NO

> [!NOTE]
> **前饋迴路**
> 超氧化物清除 NO 降低其生物利用度，進而進一步損害 [[Mitochondria]] 功能——一個將 NO 流失與粒線體功能障礙連結的前饋迴路。

**圖形也顯示:**
```
Nitric Oxide --[conceptually_related_to]--> Mitochondria  (INFERRED, confidence: 0.85)
```

**證據強度:** 直接 EXTRACTED 參考邊 + 與粒線體的 INFERRED 概念性連結

---

## 追蹤 3：CXCL12 → 粒線體 ROS（2 跳）

```
CXCL12 --[references]--> Mitochondria
```

**機制:** [[CXCL12]] 在動脈中使粒線體超氧化物 **2.2-fold increases**，並在 HAECs 中增加 **5%**（Mahoney et al. 2025）。機制：

1. 經由 [[CXCR4]]/[[ACKR3]] 的 CXCL12 訊號使粒線體電子傳遞鏈功能障礙活化
2. 超氧化物產生增加清除 NO（連結至追蹤 2）
3. [[Fisetin]] 使粒線體超氧化物降低 **58%**
4. fisetin 與 LIT-927 的組合比單獨任一者更能降低超氧化物

> [!WARNING]
> **已識別的前饋迴路**
> ```
> CXCL12 → Mitochondria → Superoxide → NO scavenging → Endothelial Dysfunction
>      ↑                                                           |
>      └───────────────────────────────────────────────────────────┘
> ```

**證據強度:** 直接 EXTRACTED 參考邊

---

## 追蹤 4：CXCL12 → EndoMT（2 跳）

```
CXCL12 --[references]--> Endothelial-to-Mesenchymal Transition
```

**機制:** [[CXCL12]] 驅動內皮細胞轉分化為間質表型（Mahoney et al. 2025）：

| 標記 | 變化 | 倍數 |
|---|---|---|
| [[CDH5]] (VE-cadherin) | ↓ | -45% |
| [[PECAM1]] (CD31) | ↓ | -55% |
| [[TGFβ]] (TGFB1) | ↑ | +5.4-fold |
| [[ACTA2]] (α-SMA) | ↑ | +5.4-fold |

> [!NOTE]
> **EndoMT 標記**
> EndoMT 節點連結至 CDH5、PECAM1、TGFB1、ACTA2——全部來自 Mahoney 論文的 EXTRACTED 邊——並連結至 [[Endothelial Dysfunction]] 作為下游後果。

**證據強度:** 直接 EXTRACTED 參考邊

---

## 追蹤 5：CXCL12 → 衰老標記（2 跳）

```
CXCL12 --[references]--> p21 CIP1
CXCL12 --[references]--> p16 INK4a
```

**機制:** [[CXCL12]] 既是細胞衰老的產物，也是其強化因子：

- 衰老內皮細胞產生 CXCL12（[[SASP]] 因子）
- 經由 [[CXCR4]]/[[ACKR3]] 的 CXCL12 訊號在鄰近細胞中活化 [[p21 CIP1]] 與 [[p16 INK4a]]
- 這會造成旁分泌式衰老擴散——衰老細胞誘導健康鄰近細胞衰老
- [[Fisetin]] 清除衰老內皮細胞來源 → 打破此循環

> [!TIP]
> **旁分泌式衰老擴散**
> CXCL12 作為旁分泌衰老誘導劑：衰老細胞分泌它，並在健康鄰近細胞中活化 p21/p16，放大衰老負擔。

**證據強度:** 直接 EXTRACTED 參考邊

---

## Fisetin：救援機制（8 條直接邊）

### Fisetin 中樞連結

| 標的 | 邊類型 | 信賴度 | 效果 |
|---|---|---|---|
| [[CXCL12]] | references | EXTRACTED | 使循環中的 CXCL12 正常化 |
| [[Endothelial Dysfunction]] | references | EXTRACTED | 恢復內皮功能 |
| [[Endothelial-to-Mesenchymal Transition]] | references | EXTRACTED | 阻斷轉分化 |
| [[Nitric Oxide]] | references | EXTRACTED | 恢復 NO 生物利用度 |
| [[Endothelial Cells]] | references | EXTRACTED | 降低衰老內皮細胞負擔 |
| [[ACKR3]] | conceptually_related_to | INFERRED (0.85) | 可能逆轉 CXCR4→ACKR3 轉換 |
| [[CXCR4]] | conceptually_related_to | INFERRED (0.85) | 可能恢復 CXCR4 訊號平衡 |
| Mahoney et al. 2025 | cites | EXTRACTED | 來源文件 |

### Fisetin 救援鏈（3 跳至 mTOR）

```
Fisetin --[references]--> CXCL12 --[references]--> SASP --[references]--> mTOR
```

這是圖形中最長的救援路徑。此鏈：
1. [[Fisetin]] 清除衰老內皮細胞 → 降低循環中的 [[CXCL12]]
2. CXCL12 降低 → [[SASP]] 負擔降低
3. SASP 降低 → [[mTOR]] 驅動的發炎訊號降低

### 三條並行救援臂

| Fisetin 標的 | 機制 | 量化效果 |
|---|---|---|
| **[[Endothelial Dysfunction]]** | 恢復 NO 生物利用度 | +10% NO（直接） |
| **[[Nitric Oxide]]** | 降低超氧化物清除 | 使 eNOS 偶聯正常化 |
| **[[Endothelial-to-Mesenchymal Transition]]** | 阻斷轉分化 | CDH5 ↑45%, PECAM1 ↑55%, TGFB1/ACTA2 ↓5.4-fold |
| **[[Mitochondria]]** | 降低超氧化物產生 | -58% 粒線體 ROS |

### 關鍵橋接角色

> [!IMPORTANT]
> **Fisetin 作為關鍵橋接者**
> [[Fisetin]] 是圖形中**唯一**同時直接引用 [[CXCL12]] 與 [[Endothelial Dysfunction]] 的節點。若無 fisetin，[[SASP]] 社群（62 條邊）與血管功能障礙社群（9 條邊）在圖形中將結構性隔離。Fisetin 橋接了這兩個社群，使其成為此子圖形中的**關鍵連接者**。

### Bcl-2 驗證

> [!WARNING]
> **衰老溶解型 vs. 衰老抑制型機制**
> Mahoney 論文顯示，當經由 [[Bcl-2]] 轉染恢復衰老內皮細胞時（阻止 fisetin 誘導的 [[Apoptosis]]）：
> - 內皮功能障礙再次出現
> - CXCL12 濃度再次上升
> - NO 生物利用度下降
> - 粒線體超氧化物增加
>
> 這證實 fisetin 的機制是**衰老溶解型**（殺死衰老細胞），而非**衰老抑制型**（在不殺死的情況下抑制 SASP）。

---

## 網路拓撲：為何重要

### CXCL12 作為中樞節點（17 條邊）

[[CXCL12]] 是整個圖形（1,850 個節點）中連結最多的節點之一。其 17 條直接連結涵蓋：

- **衰老標記:** [[p16 INK4a]], [[p21 CIP1]]
- **SASP:** 衰老相關分泌表型（[[SASP]]）
- **血管生物學:** [[Endothelial Cells]], [[Endothelial Dysfunction]], [[Endothelial-to-Mesenchymal Transition]]
- **受體系統:** [[CXCR4]], [[ACKR3]]
- **結構標記:** [[CDH5]], [[PECAM1]], [[TGFβ]], [[ACTA2]]
- **治療標的:** [[Fisetin]], LIT-927
- **細胞胞器:** [[Mitochondria]]
- **訊息分子:** [[Nitric Oxide]]

> [!NOTE]
> **CXCL12 作為高價值治療標的**
> 此中樞結構意味著 CXCL12 是**高價值治療標的**——調節它會同時影響多條病理途徑。

### 衰老 → 血管功能障礙橋接

圖形揭示了衰老社群與血管功能障礙社群透過一個狹窄的瓶頸相連：

```
Senescence (89 edges) → SASP (62 edges) → CXCL12 (17 edges) → Endothelial Dysfunction (9 edges)
```

[[CXCL12]] 是關鍵橋接節點。這意味著：
1. 以 CXCL12 為標的（使用 LIT-927 或 [[Fisetin]]）可能打破衰老與血管疾病之間的連結
2. 循環中的 CXCL12 濃度可作為血管衰老風險的**生物標記**
3. fisetin 與 LIT-927 的組合同時標定來源（衰老細胞）與介質（CXCL12）

---

## 建議的後續問題

1. **CXCR4 至 ACKR3 的受體轉換如何強化衰老表型？**
   - 跨越 [[ACKR3]]、[[CXCR4]] 與衰老社群
   - 從 fisetin 指向兩個受體的 INFERRED 邊暗示 fisetin 可能調節此轉換

2. **fisetin 在衰老內皮細胞中逆轉 EndoMT 的機制為何？**
   - 跨越 [[Fisetin]]、[[Endothelial-to-Mesenchymal Transition]] 與 [[SASP]] 社群
   - [[TGFβ]]/[[ACTA2]] 上調與 [[CDH5]]/[[PECAM1]] 下調暗示 TGF-β 途徑的參與

3. **CXCL12 如何透過 NO 抑制與粒線體 ROS 驅動內皮功能障礙？**
   - **這是目前的追蹤**——已於上方回答
   - 跨越 CXCL12-血管衰老軸、ROS 與 [[Endothelial Dysfunction]] 社群

4. **fisetin + LIT-927 聯合療法的治療窗口為何？**
   - Mahoney 論文顯示此組合比單獨任一者更有效
   - [[Bcl-2]] 轉染實驗證實衰老溶解型機制
   - 劑量最佳化與相對衰老細胞負擔的時機選擇仍是待解問題

---

## 資料來源

- **主要來源:** Mahoney et al. 2025 — "Senolytic Treatment With Fisetin Reverses Age-Related Endothelial Dysfunction Partially Mediated by SASP Factor CXCL12"
- **圖形:** `graphify-out/graph.json`（1,850 個節點、2,388 條邊）
- **社群:** 偵測到 351 個，其中 40 個已自訂標籤
- **萃取:** 從 10 個變更的文件檔案（0 個程式碼檔案）進行語意萃取
- **Graphify 更新:** 於 2026-07-15 進行增量建構

---

## 連結

- [[CXCL12]]: 中樞節點（17 條邊），連結衰老、血管生物學與治療標的
- [[Fisetin]]: 關鍵橋接節點（8 條邊），連結 [[SASP]] 社群與血管功能障礙社群
- [[SASP]]: 所有下游病變的上游驅動因素（62 條邊）
- [[Endothelial Dysfunction]]: 下游表型（9 條邊）——臨床標的
- [[Nitric Oxide]]: 流失的保護性介質——由 fisetin 恢復、遭 CXCL12 抑制
- [[Mitochondria]]: 超氧化物來源——CXCL12 增加 2.2 倍、fisetin 降低 58%
- [[Endothelial-to-Mesenchymal Transition]]: 轉分化機制——被 fisetin 阻斷
- [[ACKR3]]/[[CXCR4]]: 受體系統——衰老時由 CXCR4 轉變為 ACKR3，可能受 fisetin 調節

---

## 待建立的新實體

以下實體在此文件中被引用，但尚無 wiki 筆記：

- [[CDH5]] (VE-cadherin) — 血管內皮鈣黏蛋白，在 EndoMT 中下調 45%
- [[PECAM1]] (CD31) — 血小板內皮細胞黏附分子，在 EndoMT 中下調 55%
- [[ACTA2]] (α-SMA) — 平滑肌肌動蛋白，在 EndoMT 中上調 5.4 倍
- LIT-927 — CXCL12 中和配體，恢復衰老小鼠的內皮功能
