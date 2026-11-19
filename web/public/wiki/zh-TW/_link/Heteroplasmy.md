---
title: Heteroplasmy
description: 野生型與突變型粒線體 DNA 分子共存於同一細胞、組織或個體之中；突變基因組的比例決定疾病外顯性，也是 mtDNA 編輯療法的標的。
protected: false
created: 2026-08-01
updated: 2026-11-11
tags:
  - genetic-concept
  - mitochondria
  - mitochondrial-dna
  - genetics
aliases:
  - heteroplasmy
  - mtDNA heteroplasmy
  - heteroplasmic
url: #
source: #
---

# Heteroplasmy（異質性）

**異質性（heteroplasmy）**描述一種[[Mitochondrial DNA|粒線體 DNA（mtDNA）]]基因型在同一細胞、組織或生物體內共存的情形。由於每個細胞含有數百至數千個 mtDNA 拷貝，分布於數十個類核體（nucleoid）之中，致病突變通常與野生型分子並存；**突變異質性負荷**（突變基因組的比例）是決定生化功能障礙與臨床疾病是否顯現的主要因素。異質性的相反概念為**同質性（homoplasmy）**，即細胞內所有 mtDNA 分子具有相同序列的狀態。

## 異質性的來源

- **母系遺傳瓶頸**：在卵子發生過程中，mtDNA 族群經歷遺傳瓶頸，使突變負荷可在世代之間劇烈變動；輕度受影響的母親可能傳遞低度或高度的異質性給子代。
- **體細胞突變累積**：由於 mtDNA 複製率高、鄰近[[Mitochondrial ROS|活性氧]]，且修復能力相對有限，新突變終生持續產生。這些體細胞突變在細胞與組織之間形成異質性程度的鑲嵌分布。
- **細胞分裂時的分離**：mtDNA 隨機分配（伴隨複製動態）至子代細胞，因此異質性程度會漂移，並隨時間呈現組織與細胞特異性。

## 閾值效應

> [!important] 閾值效應
> 臨床症狀通常僅在突變異質性超過生化閾值時出現，該閾值依突變種類與組織而異，常見約為 60–80%。低於此閾值時，野生型 mtDNA 可透過[[Mitochondrial Fusion|粒線體融合]]與蛋白質恆定品質管制對突變分子進行互補，維持足夠的呼吸輸出。此閾值概念構成異質性調整療法的理論基礎：即使僅部分降低突變負荷，亦可恢復功能。

- 野生型 mtDNA 可在粒線體網路內透過互補，緩衝突變分子的效應。
- 高能量需求組織（[[Skeletal Muscle]]、心臟、腦）與快速分裂的區室對高異質性最為敏感。
- 胞器之間的[[Mitochondrial Fusion|融合]]可混合內容物並稀釋突變基因組，而片段化則削弱此緩衝作用。

## 異質性與老化

- 體細胞 mtDNA 突變隨年齡在分裂後與[[Stem Cells|幹細胞]]區室中累積，驅動突變基因組的選殖性擴增，並使老年組織中的異質性上升（Bautista & López-Cortés, 2026）。
- [[Intestinal Stem Cell|腸道幹細胞]]中的高異質性損害 LGR5+ 細胞功能與類器官形成能力，此作用由 ATF5 驅動的[[Mitochondrial Unfolded Protein Response|UPR^mt^]] 活化所介導，並可被[[NMN]]逆轉。
- 異質性上升既被視為老化的標誌，也被視為幹細胞老化的驅動因素，將呼吸功能不足導入發炎訊號與代謝–表觀遺傳重編程。
- 在幹細胞區室中，粒線體年齡與胞器異質性（而非僅異質性本身）可區分功能上不同的次族群。

## 異質性作為治療標的

- 由於疾病僅在突變負荷超過閾值時顯現，**降低異質性**使其趨向野生型，是粒線體疾病與老化領域的核心治療目標。
- **選擇性清除**策略僅切割突變型 mtDNA 分子：[[mitoZFNs]]（鋅指核酸酶）與[[mitoTALENs]]（TALE–FokI 核酸酶）優先於突變基因組導入雙股斷裂，隨後被降解，而野生型分子重新填充細胞。
- [[DdCBE]]（DddA 衍生的胞嘧啶鹼基編輯器）提供另一種基於切口的策略，用於校正突變序列而非清除突變分子。
- 病患 cybrid 與小鼠模式（例如 m.8993 T>C 與 m.3243A>G [[MELAS]] 突變）的概念驗證研究顯示，異質性調整可恢復[[Oxidative Phosphorylation|氧化磷酸化]]。

> [!info] 來源：[[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026]]
> 閾值效應並非固定不變：它取決於變異嚴重度、受累基因、組織能量需求與 mtDNA 絕對拷貝數。在老化的過程中，選殖性擴增可使突變負荷超過 OXPHOS 失效的閾值，將異質性轉化為生物能量學上的病理狀態。

## 文件

- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - 將體細胞 mtDNA 異質性上升描述為老化的標誌，同時也是幹細胞耗竭的驅動因素，並列出 mitoTALENs/mitoZFNs 作為調整異質性的介入手段。
- [[mitoTALENs]]
  - 描述突變型 mtDNA 的等位基因特異性 TALE–FokI 切割如何使異質性趨向野生型基因組。
- [[mitoZFNs]]
  - 描述以鋅指核酸酶調整異質性的方式，此為首個被證實的 mtDNA 編輯平台。
- [[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026 — Mitochondrial dysfunction and inflammaging]]：強調閾值效應隨組織與拷貝數變動，及其在年齡相關呼吸鏈缺陷中的角色。

## 連結

- [[Mitochondrial DNA]] — 異質性即野生型與突變型 mtDNA 基因型的共存。
- [[Mitochondrial Fusion]] — 基於融合的互補可緩衝突變異質性的效應。
- [[Mitochondrial ROS]] — 活性氧驅動體細胞 mtDNA 突變，形成異質性。
- [[Mitochondrial Unfolded Protein Response]] — UPR^mt^ 活化將 mtDNA 突變負荷與幹細胞功能障礙連結。
- [[mitoTALENs]] — 以 TALE 為基礎的核酸酶，透過切割突變型 mtDNA 改變異質性。
- [[mitoZFNs]] — 以鋅指為基礎的核酸酶，可改變異質性。
- [[DdCBE]] — 鹼基編輯替代方案，用於校正突變序列而非清除突變分子。
- [[MELAS]] — 常見的 mtDNA 疾病，為異質性調整療法的目標。
- [[Oxidative Phosphorylation]] — 隨突變負荷降低而恢復的呼吸功能。
- [[Stem Cells]] — 幹細胞區室對老化過程中上升的異質性敏感。

## 連結摘要

- 新增連結：[[Mitochondrial DNA]]、[[Mitochondrial Fusion]]、[[Mitochondrial ROS]]、[[Mitochondrial Unfolded Protein Response]]、[[mitoTALENs]]、[[mitoZFNs]]、[[DdCBE]]、[[MELAS]]、[[Oxidative Phosphorylation]]、[[Stem Cells]]
- 建議建立的新實體筆記：無
- 待強化的強連結：
    - [[Heteroplasmy]] ↔ [[Mitochondrial DNA]]
    - [[Heteroplasmy]] ↔ [[mitoTALENs]] / [[mitoZFNs]]
