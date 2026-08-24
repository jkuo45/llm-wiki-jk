---
title: CD38–SARM1 橋接缺口 — 缺失的邊、代謝重疊與研究機會
description: 研究綜合，辨識 CD38 與 SARM1 追蹤之間所有缺失的連接。涵蓋共享 NAD+ 受質競爭、NMN 橋接節點、cADPR 生成重疊、CZ-48 藥理分歧、組織區室化、NAD+ 消耗者階層，以及建議新增的圖譜邊。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - nad-plus
  - nmn
  - knowledge-graph-gaps
  - research-synthesis
source: graphify graph analysis + web research (PubMed 33010451, PMC 6555258, Nature Metabolism 2020, iScience 2019, JBC 2024, Cell & Bioscience 2023)
---

# CD38–SARM1 橋接缺口

> 研究綜合，辨識 wiki 知識圖譜中 CD38（社群 78）與 SARM1（社群 101）追蹤之間缺失的連接。
> 日期：17_JUL_2026

> **狀態更新（17_JUL_2026）：** 缺口 1 現已在目前的圖譜建構中解析。一條直接邊 `link_cd38 → link_sarm1` 存在，且兩個節點共享 `link_nad`（NAD+）與 `link_cadpr`（cADPR）作為鄰居。完整的更新追蹤：`task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md`。缺口 2–7（NMN 橋樑、CZ-48、區室化、消耗者階層、巨噬細胞重疊）仍作為 AMBIGUOUS/假說性的研究方向有效。

## 執行摘要

圖譜在 CD38 與 SARM1 之間**無直接邊**（graphify path 回傳「找不到路徑」）。然而已發表的文獻顯示廣泛的機制重疊：兩者都是 NAD+ glycohydrolase，具有幾乎相同的催化活性，兩者都從 NAD+ 生成 cADPR，兩者都有 base-exchange 活性以生成 NAADP，並且它們透過 **NMN** 節點在代謝上被橋接 — CD38 於胞外降解 NMN，而 SARM1 則由胞內 NMN 累積所活化。

本文件辨識出 **7 類缺口**，並提出圖譜邊與研究方向。

---

## 缺口 1：無直接 CD38 ↔ SARM1 邊

### 目前圖譜狀態
```
CD38（社群 78）────/──── 無邊 ────/──── SARM1（社群 101）
```

### 文獻證據

| 發現 | 來源 |
|---|---|
| 「SARM1 的催化作用與 CD38 相似，儘管沒有序列相似性。兩者催化相似的系列反應，但 SARM1 具有更高的 NAD-環化活性。」 | Zhao et al. 2019, iScience（PMID: 31128467） |
| 「合成 NAADP 的潛在候選者之一是新發現的 NADase SARM1。」 | Chini et al., PMC 6555258 |
| CD38 與 SARM1 都被歸類為將 NAD+ → NAM + ADPR + cADPR 切割的 NAD+ glycohydrolase（NADase） | 共識回顧 |

### 建議新增的邊

| 來源 | 關係 | 標的 | 信心度 | 理由 |
|---|---|---|---|---|
| CD38 | conceptually_related_to | SARM1 | INFERRED (0.70) | 兩者都是具有相似催化活性的 NAD+ glycohydrolase |
| SARM1 | similar_to | CD38 | INFERRED (0.65) | 相同受質（NAD+）、相同產物（ADPR、cADPR、NAM）、base-exchange 活性 |
| CD38 | functionally_competes_with | SARM1 | AMBIGUOUS | 競爭共享的 NAD+ 池，但在不同區室 |

---

## 缺口 2：NMN 作為關鍵橋接代謝物

CD38 與 SARM1 之間最強的代謝連結是透過 **NMN**。

### NMN 橋樑

```
                    CD38（胞外酵素，社群 78）
                     │
胞外 NMN ──┤
                     │
                     └──▶ 降解 NMN → NAM + ribose
                          （限制可供細胞的 NMN 可得性）
                     
胞內 NMN ──▶ SARM1 活化因子（社群 101）
                          （上升的 NMN/NAD+ 比值觸發活化）
                          
NMNAT2 ──▶ 將 NMN 轉換為 NAD+（社群 161）
               │
               └──▶ 當缺失時，NMN 累積 → SARM1 ON
```

### 文獻證據

| 發現 | 來源 |
|---|---|
| CD38 是一種 ecto-NMNase：「阻斷 CD38 的胞外酵素活性可透過依賴 NMN 的過程提升 NAD+」 | Covarrubias et al. 2020, Nature Metabolism |
| 胞外 NMN 在被送入實質細胞之前被 CD38 降解 | Covarrubias et al. 2020 |
| 「CD38 透過其胞外酵素活性降低 NMN 與 NAD+ 的濃度」 | Covarrubias et al. 2020 |
| NMN 累積是 SARM1 解除自體抑制的直接觸發因子 | Zhao et al. 2019; Shi et al. 2022, Molecular Cell |
| 「SARM1 是神經元中 NMN/NAD+ 比值的代謝感測器」 | Cell & Bioscience 回顧 2023 |

### 關鍵見解：CD38 活性可能調節 SARM1 張力

- CD38 降解胞外 NMN → 可供細胞攝取的 NMN 減少 → 可供活化 SARM1 的胞內 NMN 減少
- 因此：**高 CD38 活性可能透過維持 NMN 低下而保護**免於 SARM1 活化
- 相反地：**CD38 抑制**（78c、Quercetin）保存 NMN → 可能**致敏神經元中的 SARM1 活化**
- 這是一個具臨床相關性的交互作用，尚無任何研究直接測試

### 建議新增的邊

| 來源 | 關係 | 標的 | 信心度 | 理由 |
|---|---|---|---|---|
| CD38 | degrades | NMN | EXTRACTED (0.90) | 確立的 ecto-NMNase 活性 |
| CD38 | regulates_availability_of | NMN | INFERRED (0.80) | CD38 控制胞外 NMN 池 |
| NMN | activates | SARM1 | EXTRACTED (0.95) | NMN 是直接異位性活化因子 |
| CD38 | modulates | SARM1 | AMBIGUOUS (0.40) | 經由 NMN 可得性 — 假說性，未直接測試 |

---

## 缺口 3：共享的 cADPR 生成

### 目前圖譜狀態
```
cADPR（社群 19）
     │
     └── CD38 references（EXTRACTED）
     
SARM1 ──/── 無邊 ──/── cADPR
```

### 文獻證據

| 發現 | 來源 |
|---|---|
| 「SARM1 被活化…以環化 NAD 並生成 Ca²⁺ 訊息分子 cADPR」 | Zhao et al. 2019, iScience |
| 「SARM1 的催化…具有比 CD38 更高的 NAD-環化活性，使其在提升 cADPR 上更有效率」 | Zhao et al. 2019 |
| 「SARM1 切割 NAD+ 以生成 Nam、ADP ribose 與 cyclic ADP-ribose（cADPR）」 | Bowie et al. 2024, JBC |
| CZ-48 活化 SARM1 以生成 cADPR、耗竭 NAD 與 ATP、誘發非凋亡性死亡 | Zhao et al. 2019 |

### 建議新增的邊

| 來源 | 關係 | 標的 | 信心度 | 理由 |
|---|---|---|---|---|
| SARM1 | produces | cADPR | EXTRACTED (0.90) | SARM1 NADase 的直接催化產物 |
| cADPR | regulates | Calcium Signaling | EXTRACTED (0.85) | cADPR 的經典功能 |
| CD38 | also_produces | cADPR | EXTRACTED (0.95) | ADP-ribosyl cyclase 活性 |

---

## 缺口 4：CZ-48 的藥理分歧

CZ-48（sulfo-ara-F-NMN）是一種合成的 NMN 類似物，對 CD38 與 SARM1 具有**相反效應**：

| 化合物 | 對 CD38 的效應 | 對 SARM1 的效應 |
|---|---|---|
| **CZ-48**（sulfo-ara-F-NMN） | **抑制** | **活化** |
| **CZ-48（內生性 NMN）** | 受質（被降解） | 活化因子（異位性） |

### 文獻證據

| 發現 | 來源 |
|---|---|
| 「CZ-48 選擇性作用，活化 SARM1 但抑制 CD38」 | Zhao et al. 2019, iScience（PMID: 31128467） |
| 「一種可穿透細胞的 NMN 擬似物活化 SARM1 以生成 cyclic ADP-ribose 並誘發非凋亡性細胞死亡」 | Zhao et al. 2019 |
| CZ-48：「已被鑑定為 CD38 抑制劑的 NMN 合成類似物」 | Benchchem Application Note 2021 |

### 建議新增的邊

| 來源 | 關係 | 標的 | 信心度 | 理由 |
|---|---|---|---|---|
| CZ-48 | inhibits | CD38 | EXTRACTED (0.90) | 直接展示於 Zhao et al. 2019 |
| CZ-48 | activates | SARM1 | EXTRACTED (0.90) | 直接展示於 Zhao et al. 2019 |
| CZ-48 | is_analog_of | NMN | EXTRACTED (0.95) | 結構類似物 |

---

## 缺口 5：組織區室化

CD38 與 SARM1 作用於不同的次細胞與組織區室，卻競爭相同的全身性 NAD+ 池。

| 性質 | CD38 | SARM1 |
|---|---|---|
| **定位** | 細胞膜（胞外酵素）+ 粒線體膜間隙 | 胞質、軸突、粒線體標靶序列 |
| **酵素區域取向** | 胞外 | 胞內 |
| **主要組織** | 免疫細胞、廣泛 | 神經元（DRG、脊髓、腦） |
| **受質可及性** | 胞外 NAD+/NMN | 胞內 NAD+ |
| **作用時間尺度** | 慢性（數小時至數年） | 急性（數分鐘） |
| **組織特異性** | 廣泛（WAT、肝、血液、腦） | 狹窄（神經系統） |

### NAD+ 池問題

儘管有區室化，NAD+ 消耗者仍競爭重疊的池：

- 胞外 NAD+ → CD38 消耗 → 限制可供細胞的先驅物可得性
- 胞內 NAD+ → SARM1 消耗 → 軸突中的災難性耗竭
- 位於粒線體膜間隙的 CD38 → 在鄰近粒線體基質處消耗 NAD+
- SARM1 具有粒線體標靶序列 → 可能在粒線體處作用

### 研究缺口

CD38 介導的胞外 NMN 耗竭影響 SARM1 胞內 NMN/NAD+ 感知的程度尚未被直接研究。

---

## 缺口 6：NAD+ 消耗者階層

PARP1、CD38、SARM1、Sirtuins 與 CD73 都消耗 NAD+。它們的相對貢獻隨年齡與疾病狀態而改變。

### 目前圖譜狀態

```
NAD+ ──▶ CD38（社群 78）— 主要的年齡相關消耗者
NAD+ ──▶ PARP1（社群 99）— DNA 修復
NAD+ ──▶ SARM1（社群 101）— 災難性軸突
NAD+ ──▶ Sirtuins（社群 78）— 訊號傳遞/去乙醯化
NAD+ ──▶ CD73（社群 78）— 腺苷生成
```

### 競爭的文獻證據

| 發現 | 來源 |
|---|---|
| 「CD38 的 Km 低於大多數消耗 NAD+ 的酵素」 | npj Metabolic Health and Disease 2025 |
| 「改變一種酵素的活性或表現量會影響其他酵素的活性」 | Fang et al. 2017; SciDirect 2021 |
| 「合併抑制 PARP1 與 CD38 完全逆轉了 LPS 誘發的 NAD+ 下降」 | Covarrubias et al. 2020 |
| CD38 是「負責老化相關 NAD 下降的主要 NADase」（Chini 實驗室的典範轉移） | Chini, R01 AG058812 |

### 建議超邊

**NAD+ 消耗者競爭網絡**（新超邊）：
- 節點：CD38、PARP1、SARM1、Sirtuins、CD73、NAD+
- 關係：compete_for_substrate
- 信心度：EXTRACTED (0.85)
- 來源：多項回顧的共識

---

## 缺口 7：免疫細胞中的 SARM1（CD38 重疊）

最近的證據顯示 SARM1 表現於巨噬細胞中，並可微調免疫反應 — 這是它與 CD38 免疫角色重疊的功能領域。

| 發現 | 來源 |
|---|---|
| 「SARM1 在神經元中表現最高，也可在其他細胞中檢測到」 | Bowie et al. 2024, JBC |
| 「SARM1 的酵素活性影響巨噬細胞代謝…SARM1 可透過消耗 NAD+ 與改變的代謝微調巨噬細胞免疫反應」 | Bowie et al. 2024, JBC |
| CD38 在活化的巨噬細胞中高度表現並調節其 NAD+ 濃度 | Covarrubias et al. 2020 |

### 建議新增的邊

| 來源 | 關係 | 標的 | 信心度 | 理由 |
|---|---|---|---|---|
| SARM1 | regulates | Macrophage Metabolism | INFERRED (0.65) | JBC 2024 顯示 SARM1 NADase 影響巨噬細胞代謝 |
| SARM1 | expressed_in | Macrophages | INFERRED (0.50) | 可檢測但低於神經元的層級 |
| CD38 | co-expressed_with | SARM1 | AMBIGUOUS (0.35) | 兩者都見於巨噬細胞；表現重疊尚未明確表徵 |

---

## 摘要：所有建議的邊

### 直接邊

| # | 來源 | 關係 | 標的 | 信心度 | 類型 |
|---|---|---|---|---|---|
| 1 | CD38 | conceptually_related_to | SARM1 | INFERRED (0.70) | 功能相似性 |
| 2 | SARM1 | similar_to | CD38 | INFERRED (0.65) | 受質/產物重疊 |
| 3 | CD38 | functionally_competes_with | SARM1 | AMBIGUOUS | 共享 NAD+ 池 |
| 4 | CD38 | degrades | NMN | EXTRACTED (0.90) | Ecto-NMNase 活性 |
| 5 | CD38 | regulates_availability_of | NMN | INFERRED (0.80) | 胞外池控制 |
| 6 | NMN | activates | SARM1 | EXTRACTED (0.95) | 直接異位性活化因子 |
| 7 | CD38 | modulates | SARM1 | AMBIGUOUS (0.40) | 經由 NMN 可得性 |
| 8 | SARM1 | produces | cADPR | EXTRACTED (0.90) | 催化產物 |
| 9 | CZ-48 | inhibits | CD38 | EXTRACTED (0.90) | 選擇性藥理 |
| 10 | CZ-48 | activates | SARM1 | EXTRACTED (0.90) | 選擇性藥理 |

### 超邊

| # | 標籤 | 節點 | 信心度 |
|---|---|---|---|
| H1 | NAD+ 消耗者競爭網絡 | CD38、PARP1、SARM1、Sirtuins、CD73、NAD+ | EXTRACTED (0.85) |
| H2 | 消耗 NAD+ 的胞外酵素（現有） | CD38、CD73、NAD+ | INFERRED (0.70) — 擴展以加入 SARM1？否，SARM1 是胞內而非胞外。保持分開。 |

---

## 最高優先級研究問題

1. **CD38 介導的 NMN 耗竭是否保護免於 SARM1 活化？** — 尚無研究測試高 CD38 活性（經由減少胞外 NMN 可得性）是否降低可活化 SARM1 的胞內 NMN 池。這對組合療法有意涵：為抗衰老而抑制 CD38 可能無意間增加可活化 SARM1 的 NMN。

2. **CD38 KO 小鼠中的 SARM1 發生什麼？** — CD38 KO 小鼠具有升高的 NAD+ 與 NMN 濃度。這是否會致敏神經元，使其更易發生依賴 SARM1 的 Wallerian 式退化？若是，作為長壽策略的 CD38 抑制可能帶有神經學風險。

3. **合併 CD38 + SARM1 抑制是否協同？** — 若 CD38 抑制為 sirtuin/PARP 保存 NAD+，而 SARM1 抑制阻斷軸突中的災難性 NAD+ 損失，合併抑制可同時處理慢性年齡相關 NAD+ 下降與急性神經退化性 NAD+ 崩解。尚無研究測試此點。

4. **CD38 與 SARM1 是否在微膠細胞中共同表現？** — 微膠細胞表現 CD38（腦中的免疫細胞）且可能表現 SARM1。兩者都可能在中樞神經系統消耗 NAD+。微膠細胞中的 CD38 驅動神經發炎；神經元中的 SARM1 驅動軸突退化。此重疊尚未被描繪。
