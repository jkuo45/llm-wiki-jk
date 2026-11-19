---
title: Mitochondrial Dysfunction-Associated Senescence
description: 一種由粒線體功能障礙觸發的細胞衰老形式，由 NAD+/NADH 崩解與 AMPK–p53 訊號驅動，特徵為 p53 依賴的 SASP 與減弱的 IL-1 依賴性發炎分支。
created: 2026-07-31
updated: 2026-11-11
tags:
  - biological-process
  - senescence
  - mitochondria
  - aging
  - metabolism
aliases:
  - MiDAS
  - mitochondrial dysfunction-associated senescence
  - mitochondrial dysfunction-induced senescence
---

# Mitochondrial Dysfunction-Associated Senescence（粒線體功能障礙相關衰老）

**粒線體功能障礙相關衰老（mitochondrial dysfunction-associated senescence, MiDAS）**是一種由粒線體擾動（而非典型基因毒性壓力源）觸發的[[Cellular Senescence|細胞衰老]]獨特形式。此形式首由 Wiley 等人（2016；PMID 27716483）在以實驗方式誘發粒線體功能障礙的細胞中定性，這些細胞經由依賴[[AMPK]] 與[[p53]] 的路徑進入[[Cell Cycle|細胞週期停滯]] — 而不涉及[[Replicative Senescence|複製性衰老]]或基因毒性[[Stress-Induced Senescence|壓力誘發衰老]]所啟動的典型[[DNA Damage|DNA 損傷]]反應。MiDAS 與老化密切相關，因為它將年齡相關的[[NAD+]] 與粒線體適應力下降，連結至衰老細胞的累積與[[Inflammaging|發炎性老化]]。

## 觸發因子：NAD+/NADH 軸

> [!info] 核心機制
> NAD+/NADH 比值降低（而非活性氧本身的過載）即足以觸發 MiDAS。NAD+ 下降會活化[[AMPK]]，進而穩定[[p53]]，導致 p21 介導的細胞週期停滯（Wiley et al., 2016）。

- 抑制粒線體複合體 I（例如以[[Rotenone|魚藤酮]]處理）或基因剔除呼吸鏈組件，會降低 NAD+ 可用性並提高 NADH，使 NAD+/NADH 比值向下偏移。
- 降低的比值活化[[AMPK]]（低能量感測器），其磷酸化並穩定[[p53]]。
- 被穩定的[[p53]] 轉錄性誘導[[p21 CIP1|p21]]，執行穩定的[[Cell Cycle|G1 停滯]] — 機制上類似其他衰老形式的 p53–p21 分支，但經由代謝而非 DNA 損傷反應訊號活化。
- [[ROS]] 並非必要觸發因子；MiDAS 可在氧化壓力極低的條件下被誘發，此點使其有別於活性氧驅動的衰老。

## 獨特的分泌表型

- MiDAS 細胞展現 **p53 依賴的 SASP**，並具有**減弱的 IL-1 依賴性發炎分支**：相較於其他衰老形式，[[IL-1α]]/[[IL-1β]] 及其下游標的的產生受到抑制。
- [[IL-6]] 與其他 SASP 因子仍可被分泌，意即 MiDAS 並非「不發炎」，而是偏向特定、較不典型的 NF-κB 驅動譜型。
- 此種情境依賴性意味著調節 SASP 的衰老形態調節藥物必須針對 MiDAS 的特定輸出進行評估，而非以泛用的 SASP 指紋作為標準（關於 MiDAS 期間 p21 耗竭的效應，見[[p21 CIP1|p21]] 筆記）。

## 與衰老相關粒線體功能障礙（SAMD）的關係

MiDAS 與[[Senescence-associated mitochondrial dysfunction|衰老相關粒線體功能障礙]]（SAMD）密切相關但彼此不同：

- **SAMD** 描述*發生於*已衰老細胞*之內*的粒線體退化，並透過[[Reactive Oxygen Species|活性氧]]、[[Minority MOMP|少數 MOMP]] 以及經由[[cGAS-STING Pathway|cGAS–STING 軸]]的[[Mitochondrial DNA|mtDNA]] 釋放，助長典型促發炎的[[SASP]]。
- **MiDAS** 是*由*粒線體功能障礙本身*啟動*的衰老程式，其標記為減弱的 IL-1 分支。
- 兩者共同形成回饋迴路：粒線體功能障礙啟動 MiDAS，而細胞一旦衰老便發展出 SAMD，持續維持低度發炎。

## 在老化與發炎性老化中的角色

- 老化期間的[[NAD+]] 耗竭 — 由[[CD38]]、[[PARP1]] 與[[SARM1]] 的過度活性所驅動 — 是強制組織（尤其是老年[[Stem Cells|幹細胞]]）進入 MiDAS 的中央代謝瓶頸（Bautista & López-Cortés, 2026）。
- 幹細胞區室中的 MiDAS 促成靜止狀態喪失、再生能力受損與過早耗竭，將粒線體衰退與組織老化耦合。
- NAD+ 耗竭導致 sirtuin 活性（[[SIRT1]]、[[SIRT3]]）下降，削弱抗氧化防禦與粒線體解毒能力，強化易發生 MiDAS 的狀態並助長[[Inflammaging|發炎性老化]]。

## 治療意涵

- **[[NAD+]] 補充**（[[Nicotinamide Riboside|NR]]、[[NMN]]）可恢復 NAD+/NADH 平衡與 sirtuin 活性，對抗 MiDAS 的代謝觸發因子。
- 強化**粒線體品質管制**（[[Mitophagy|粒線體自噬]]誘導劑如[[Urolithin A|尿石素 A]]、經由[[PGC-1α]] 的粒線體生物生成）可減少起始的粒線體功能障礙。
- 介入具情境依賴性：在模式生物中，恢復 NAD+ 已顯示可延緩幹細胞衰老並延長壽命（Zhang et al., 2016）。

> [!info] 來源：[[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026]]
> 此回顧將 MiDAS 定位為位於組織退化上游的獨特衰老程式：直接的粒線體損傷誘發穩定停滯，並伴隨重編程的分泌體，其中 IL-1 依賴性發炎分支被削弱，而部分 SASP 因子仍維持。文中將代謝訊號（MiDAS）與粒線體區室化喪失（[[Minority MOMP]] → [[cGAS-STING Pathway|cGAS–STING]]）對照，視為對衰老表型相關但可區分的貢獻。

## 文件

- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - 將 NAD+ 耗竭描述為經由 AMPK–p53 訊號強制 MiDAS 的代謝瓶頸，並將其與具有減弱 IL-1 依賴性發炎分支之獨特分泌表型耦合；討論 MiDAS 於幹細胞老化情境中的角色。
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Review 2024]]
  - 將 MiDAS 列為具有 p53/p16 依賴、非典型分泌譜型的衰老狀態之一，並強調粒線體擾動相對於 NF-κB 驅動的衰老會產生獨特的 SASP 輸出。
- [[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026 — Mitochondrial dysfunction and inflammaging]]：將 MiDAS 定位為代謝性、AMPK–p53 驅動的衰老程式，具有減弱的 IL-1 依賴性 SASP 分支，有別於[[Senescence-associated mitochondrial dysfunction|SAMD]] 之 cGAS–STING/mtDNA 驅動的 SASP。

## 連結

- [[Cellular Senescence]] — MiDAS 是由粒線體功能障礙觸發的細胞衰老獨特形式。
- [[NAD+]] — NAD+/NADH 比值下降是 MiDAS 的中央代謝觸發因子。
- [[AMPK]] — 將 NAD+ 崩解傳遞至 p53 穩定化的低能量感測器。
- [[p53]] — MiDAS 停滯及其獨特 SASP 的核心介導者。
- [[p21 CIP1]] — 在 MiDAS 中，p21 介導 p53 下游的停滯。
- [[SASP]] — MiDAS 展現具減弱 IL-1 分支的 p53 依賴性 SASP。
- [[Senescence-associated mitochondrial dysfunction]] — 衰老細胞內部的粒線體退化；與 MiDAS 互為對照。
- [[Inflammaging]] — MiDAS 促成老化的慢性低度發炎。
- [[Mitochondrial DNA]] — mtDNA 釋放維持已建立衰老狀態中的促發炎訊號。
- [[cGAS-STING Pathway]] — 來自受損粒線體的細胞質 mtDNA 放大 SASP。
- [[Reactive Oxygen Species]] — 可伴隨 MiDAS 出現，但並非必要觸發因子。
- [[Mitochondria]] — 其功能障礙啟動此程式的胞器。
- [[Mitochondrial Dysfunction]] — 上游的起始事件。
- [[CD38]] / [[PARP1]] / [[SARM1]] — 消耗 NAD+ 的酶，其年齡相關活性使 NAD+ 耗竭並強制 MiDAS。
- [[Nicotinamide Riboside]] / [[NMN]] — 對抗 MiDAS 觸發因子的 NAD+ 前驅物。

## 連結摘要

- 新增連結：[[Cellular Senescence]]、[[NAD+]]、[[AMPK]]、[[p53]]、[[p21 CIP1]]、[[SASP]]、[[Senescence-associated mitochondrial dysfunction]]、[[Inflammaging]]、[[Mitochondrial DNA]]、[[cGAS-STING Pathway]]、[[Reactive Oxygen Species]]、[[Mitochondria]]、[[Mitochondrial Dysfunction]]、[[CD38]]、[[PARP1]]、[[SARM1]]、[[Nicotinamide Riboside]]、[[NMN]]、[[IL-6]]、[[IL-1β]]、[[Stress-Induced Senescence]]、[[Replicative Senescence]]、[[Stem Cells]]、[[SIRT1]]、[[SIRT3]]、[[Urolithin A]]、[[PGC-1α]]、[[Cell Cycle]]、[[Rotenone]]、[[Minority MOMP]]
- 建議建立的新實體筆記：[[Heteroplasmy]]、[[Mitochondrial Translation]]
- 待強化的強連結：[[Mitochondrial Dysfunction-Associated Senescence]] ↔ [[NAD+]]、[[Mitochondrial Dysfunction-Associated Senescence]] ↔ [[Senescence-associated mitochondrial dysfunction]]、[[Mitochondrial Dysfunction-Associated Senescence]] ↔ [[Inflammaging]]
