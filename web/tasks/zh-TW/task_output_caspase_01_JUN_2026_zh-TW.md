---
title: Caspase 與 Bcl-2 家族調控的分子機制
description: 探討凋亡訊號網絡內五個關鍵分子連結的研究報告，聚焦於癌症與細胞存活中 caspase 與 Bcl-2 家族調控的生化機制。
published: 2026-06-01
created: 2026-07-16
source: tasks/task_output_caspase_01_JUN_2026.md
author: []
tags:
  - apoptosis
  - caspase
  - bcl-2-family
  - cancer
  - phosphorylation
  - phosphatase
  - cell-death
updated: 2026-07-16
---

# 研究報告：Caspase 與 Bcl-2 家族調控的分子機制

本報告探討在凋亡訊號網絡中識別出的五個關鍵分子連結，聚焦於其生化機制及在癌症與細胞存活中的意涵。

### 策略性交互作用摘要

| 調節者 | 夥伴 | 修飾 | 功能轉變 |
| :------------ | :------ | :-------------------- | :---------------------------------- |
| **Caspase-8** | SHP1 | 去磷酸化 | **死亡機器**（凋亡） |
| **Caspase-7** | PAK2 | 磷酸化 | **中和的效應者**（存活） |
| **Bax** | Pin1 | 磷酸化/異構化 | **失活支架**（存活） |
| **Bak** | PTPN5 | 去磷酸化 | **獲得許可的殺手**（凋亡） |
| **XIAP** | TBK1 | 磷酸化 | **自我毀滅**（凋亡） |

---

## Caspase-8 ↔ SHP1 (PTPN6)

**酪胺酸磷酸化「開關」**

- **機制**：在許多癌症（例如結腸癌、膠質母細胞瘤）中，**Src 家族激酶**（[[Src]]、Lyn）磷酸化 **[[Caspase-8]]** 於 **Tyr380**（或依異構型為 Tyr397/Tyr465）。
- **功能結果**：此磷酸化抑制 Caspase-8 的蛋白水解切割與成熟，阻斷外在凋亡路徑。

> [!IMPORTANT]
> **磷酸化 Caspase-8 的非典型角色**
> 磷酸化的 Caspase-8（pY-Casp8）作為招募 **FAK**、**Calpain-2** 與 **PI3K** 的支架，促進細胞遷移、轉移與存活訊號（例如 NF-κB、mTORC1）。這代表從死亡效應者到促遷移支架的獲得功能（gain-of-function）開關。

- **SHP1 的修復角色**：**[[SHP1]]**（PTPN6）是移除這些抑制性磷酸基團的磷酸酶。SHP1 的去磷酸化恢復細胞對死亡配體（[[TRAIL]]、[[FasL]]）的敏感性。
- **癌症連結**：許多腫瘤經由啟動子高甲基化表觀遺傳靜默 _PTPN6_（SHP1），使 Caspase-8 維持在其促遷移、抗凋亡狀態。

## Caspase-7 ↔ PAK2

**乳癌中的雙層抑制**

- **機制**：**[[PAK2]]**（p21 活化激酶 2）直接結合並磷酸化 **[[Caspase-7]]** 於三個殘基：**Ser30**、**Thr173** 與 **Ser239**。
- **抑制邏輯**：
  - **Ser30**：位於前結構域（prodomain）；磷酸化阻礙與其活化劑 **[[Caspase-9]]** 的相互作用，阻止初始活化。
  - **Ser239**：位於活性位點附近；磷酸化在空間上阻礙受質結合，即使「活化」的分子也被中和。

> [!WARNING]
> **乳癌中的臨床意義**
> PAK2 在浸潤性導管癌中常過表現。此軸是對 DNA 損傷化療藥物（例如 staurosporine）抗藥性的主要驅動因子。標靶 PAK2–Caspase-7 交互作用代表恢復化療敏感性的潛在策略。

## Bax ↔ Pin1

**異構酶介導的存活開關**

- **機制**：在存活細胞激素（例如 [[GM-CSF]]）反應下，**[[ERK2]]**（ERK1/2）路徑磷酸化 **[[BAX]]** 於 **Thr167**。
- **Pin1 的交互作用**：這產生一個被 peptidyl-prolyl isomerase **[[Pin1]]** 辨識的 pThr-Pro 基序。Pin1 結合催化構形變化，將 Bax 鎖定在失活狀態，阻止其轉位至粒線體與後續的寡聚化。

> [!NOTE]
> **Thr167 處依脈絡的磷酸化**
> 雖然 ERK 介導的 Thr167 磷酸化是促存活的，同一位點在壓力下可被 [[JNK]] 或 [[p38 MAPK]] 標靶以促進凋亡。Pin1 作為決定此修飾促存活 vs. 促死亡結果的關鍵開關。

- **生物結果**：此機制保護細胞（特別是嗜酸性球）免於凋亡。破壞 ERK-Bax-Pin1 複合物或抑制 Pin1 會觸發 Bax 活化與 [[Mitochondrial outer membrane permeabilization|MOMP]]。

## Bak ↔ PTPN 家族（PTPN2、PTPN5、PTPN23）

**授權「粒線體殺手」**

- **機制**：**[[BAK]]** 透過於 **Tyr108** 的抑制性磷酸化，維持在粒線體上的失活狀態。
- **磷酸酶**：Bak 要被活化，必須在 Tyr108 去磷酸化。此「授權」由 **[[PTPN5]]**（STEP）以及 PTPN2 與 PTPN23 介導。

> [!WARNING]
> **K-RAS/ERK 對 Bak 活化的阻斷**
> 在 K-RAS 突變癌症（例如結腸癌）中，過度活化的 ERK1/2 磷酸化並**失活 PTPN5**。這將 Bak 鎖定在其失活的磷酸化狀態，提供對凋亡的深刻抗藥性。此機制直接將 RAS 路徑突變連結至凋亡抗藥性。

- **癌症連結**：PTPN2 與 PTPN23 的遺傳缺失或下調在 T 細胞白血病與上皮癌中常見，提高了 Bak 活化的閾值。

## XIAP ↔ TBK1 / IKKε

**RING 結構域自泛素化開關**

- **機制**：在先天免疫反應中（例如病毒感染），激酶 **[[TBK1]]** 與 **[[IKKepsilon]]** 磷酸化 **[[XIAP]]** 於其 RING 指狀結構域內的 **Ser430**。
- **分子結果**：此磷酸化觸發 XIAP 的 **Lys48 連結自泛素化**（於 Lys322 與 Lys328）。
- **降解**：泛素化的 XIAP 被 **[[Proteasome]]** 快速降解。

> [!IMPORTANT]
> **TBK1 與 AKT 對 XIAP 穩定性的對立角色**
> XIAP 的降解移除對 [[Caspase-3|caspases 3]]、[[Caspase-7]] 與 [[Caspase-9]] 的「煞車」，使細胞對凋亡敏感。這與 **[[Akt]]** 介導於 **Ser87** 的磷酸化功能相反，後者*穩定* XIAP 以促進腫瘤存活。TBK1 與 Akt 訊號之間的平衡決定了 XIAP 水平與凋亡閾值。

- **生物結果**：XIAP 的降解移除對 caspase 的煞車，使細胞對凋亡敏感。

#

## 文件

- [[task_output_caspase_01_JUN_2026|Molecular Mechanisms of Caspase and Bcl-2 Family Regulation]]
  - 詳述凋亡訊號網絡內五個調控交互作用的主要來源文件，聚焦於癌症中的磷酸化/去磷酸化開關。

## 連結

- [[Apoptosis]] — 全部五個交互作用都調節細胞死亡與存活之間的平衡
- [[Cancer]] — 每一軸都涉及腫瘤對凋亡的抗藥性
- [[BAX]] ↔ [[BAK]] — 受不同磷酸酶調節的 MOMP 平行效應者
- [[Caspase-8]] ↔ [[Caspase-7]] ↔ [[Caspase-9]] — 受轉譯後調節的起始者與執行者 caspase
- [[XIAP]] — caspase 的中央抑制者，受 TBK1 與 Akt 兩者調節
- [[Akt]] ↔ [[TBK1]] — 控制 XIAP 穩定性的對立激酶

## 連結摘要

- 新增連結：[[Caspase-8]]、[[Caspase-7]]、[[Caspase-9]]、[[Caspase-3]]、[[XIAP]]、[[PAK2]]、[[Pin1]]、[[PTPN5]]、[[SHP1]]、[[Src]]、[[FAK]]、[[IKKepsilon]]、[[TRAIL]]、[[FasL]]、[[JNK]]
- 充實既有連結：[[BAX]]、[[BAK]]、[[ERK2]]、[[Akt]]、[[TBK1]]、[[GM-CSF]]、[[p38 MAPK]]、[[mTORC1]]、[[NFKB]]、[[Proteasome]]、[[Calpain]]、[[Apoptosis]]、[[Caspases]]
- 待加強的強連結：
    - [[Caspase-8]] ↔ [[SHP1]]
    - [[Caspase-7]] ↔ [[PAK2]]
    - [[BAX]] ↔ [[Pin1]]
    - [[BAK]] ↔ [[PTPN5]]
    - [[XIAP]] ↔ [[TBK1]]
