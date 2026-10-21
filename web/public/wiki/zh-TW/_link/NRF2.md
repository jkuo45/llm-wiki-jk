---
title: Nrf2
description: 轉錄因子（NF-E2-related factor 2），藉由結合 ARE/EpRE 元件來統籌抗氧化與解毒反應。
created: 2026-07-09
updated: 2026-10-21
tags:
  - protein
  - redox
  - transcription-factor
  - oxidative-stress
url: #
source: #
aliases:
  - NFE2L2
  - NF-E2-related factor 2
  - 核因子紅血球系 2 相關因子 2
---

# Nrf2

核因子紅血球系 2 相關因子 2（Nrf2）是一種 cap'n'collar 型基本白胺酸拉鍊（basic leucine zipper，CNC-bZIP）轉錄因子，作為細胞抗氧化與解毒防禦的主調節因子。在基礎條件下，Nrf2 被其抑制因子[[Keap1]]（Kelch-like ECH-associated protein 1）隔離在細胞質中；Keap1 是 Cullin-3 E3 泛素連接酶的受質調整蛋白，持續將 Nrf2 送往蛋白酶體降解。親電子與氧化性的傷害會修飾[[Keap1]]上的半胱胺酸殘基，破壞 Keap1–Cul3 的交互作用並穩定 Nrf2；Nrf2 隨後轉位進入細胞核，與小型 Maf 蛋白形成異二聚體，並結合標的基因啟動子上的抗氧化反應元件（ARE/EpRE）。

Nrf2 驅動一套廣泛的表現程式，包括穀胱甘肽生合成酵素（GCLC、GSH 還原酶）、硫氧還蛋白與過氧化還原蛋白系統、血基質加氧酶-1（HO-1）、[[NQO1]]（NAD(P)H:醌氧化還原酶 1），以及第二期解毒酵素。因此它位於抵禦[[ROS|活性氧]]與[[Oxidative Stress|氧化壓力]]的內源性保護頂端。

> [!important] 誘導劑無法挽救 null 基因型
> [[NQO1]]是最容易誘導的 ARE 標的之一，因此 NRF2 活化在多數人中會大幅提高其表現。**這個例外對氧化還原劑量的拿捏很重要：** NQO1\*2 C609T（rs1800566）的 T/T 基因型在功能上是酵素 null，原因是蛋白質不穩定，而非轉錄不足，因此 NRF2 活化無法恢復其活性。對該個體而言，以藥理方式誘導 NRF2 程式至多是*部分*替代——負責必然的兩電子醌還原的那一支抗氧化程式無論 NRF2 被推動到什麼程度都依然缺席。任何以「誘導 NRF2 以提高 NQO1」為前提的方案，都需要先知道基因型。見[[NQO1]]與[[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]]。

> [!info] Nrf2 是粒線體荷爾蒙化（mitohormesis）與異生物荷爾蒙化（xenohormesis）的中央效應者——輕微的粒線體活性氧或植物化學物質暴露會觸發荷爾蒙化適應反應，而此反應在很大程度上依賴 Nrf2。

Nrf2 與長壽途徑交會。它會被許多[[Sirtuins]]調節性介入共同活化，並與[[Autophagy|自噬]]共享下游效應器；其活化也是粒線體荷爾蒙化與衰老細胞清除文獻中反覆出現的主題。Nrf2 的失調與神經退化、發炎及癌症化學抗性有關，使其成為以氧化還原為基礎的介入措施的重要治療標的。

## 文件

  - [[_document_ - Mitohormesis - 2014_FEB|Mitohormesis 2014]]
    - 討論 Nrf2 作為對低劑量粒線體壓力進行粒線體荷爾蒙化適應的核心轉錄效應者。
  - [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis 2023]]
    - 涵蓋粒線體逆行訊號傳遞下游的 Nrf2 依賴性抗氧化程式設計。
  - [[_document_ - xenohormesis, mitohormesis|xenohormesis, mitohormesis]]
    - 透過異生物荷爾蒙化途徑，將膳食植物化學物質與 Nrf2 活化連結起來。
  - [[_document_ - as senotherapeutic agent|Senotherapeutic Agent]]
    - 將 Nrf2 活化描述為一種衰老細胞清除與氧化還原復原策略。
   - [[_document_ - Pharmacological Effects of Urolithin A and Its Role in Muscle Health and Performance Current Knowledge and Prospects|Urolithin A]]
     - 提及 Nrf2 參與尿石素 A 介導的粒線體品質與抗氧化效應。
   - [[_document_ - SIRT1 Protein roles at the nexus of health, disease, and therapeutics|SIRT1: Protein Roles at the Nexus (Chaqour, 2026)]]
     - 白藜蘆醇（一種活化 SIRT1 的化合物）透過 Nrf2/HO-1 介導的抗氧化防禦賦予血管保護。

   - [[task_output_comt_fisetin_senolytic_09_July_2026|COMT × Fisetin Research Evaluation]]
     - NRF2 被列為非瑟酮網路藥理學譜中的長壽途徑之一。擬提出的計算建模將使用 STRING 與 KEGG 分析，把非瑟酮的多標的譜對應到 NRF2、AMPK、mTOR、NF-κB、PI3K。

## 連結

  - [[Keap1]]：細胞質抑制因子，將 Nrf2 送去泛素化與降解，直到氧化修飾將其釋放。
  - [[Oxidative Stress]]：活化 Nrf2 的主要刺激，也是其標的基因所對抗的主要表型。
  - [[ROS]]：粒線體 ROS 充當逆行訊號，在粒線體荷爾蒙化期間活化 Nrf2。
  - [[Mitochondria]]：反應性氧訊號的來源，也是 Nrf2 保護型程式所維持品質的細胞器。
   - [[Autophagy]]：Nrf2 與自噬程式是共同受調控的壓力適應反應，標的重疊。
   - [[Resveratrol]]：白藜蘆醇在 SIRT1 下游活化 Nrf2/HO-1；[[HO-1]]：Nrf2 活化 HO-1 抗氧化防禦。

## 連結摘要

  - 新增連結：[[Nrf2]]、[[Keap1]]、[[Mitochondria]]、[[Oxidative Stress]]、[[ROS]]、[[Autophagy]]
  - 2026-09-26 新增：互惠的 [[NQO1]] 連結與 callout——NRF2 誘導無法挽救 NQO1*2 C609T 的 null 基因型，因為缺陷在於蛋白質不穩定而非轉錄不足。新增連結：[[NQO1]]、[[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]]。
  - 建議建立的新實體註記：[[ARE Element]]、[[Heme Oxygenase-1]]、[[Small Maf]]
  - 應強化的重點連結：[[Nrf2]] ↔ [[Sirtuins]]；[[Nrf2]] ↔ [[Keap1]]
