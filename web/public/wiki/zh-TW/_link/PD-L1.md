---
title: PD-L1
description: 程式性死亡配體 1（CD274/B7-H1）；一種透過結合 PD-1 抑制 T 細胞功能的跨膜蛋白，是癌症中關鍵的免疫檢查點，也是衰老腫瘤微環境中 SASP 訊號調節的標的。
protected: false
created: 2026-07-06
updated: 2026-11-08
tags: [protein, immune-checkpoint, cancer, immunology, senescence]
aliases: [CD274, B7-H1, programmed death-ligand 1, program death ligand 1]
---

# PD-L1

## 概覽

[[PD-L1]]（Programmed Death-Ligand 1，又稱 CD274 或 B7-H1）是 B7 家族的跨膜蛋白，作為 T 細胞上 PD-1 受體的共抑制配體。腫瘤細胞與抗原呈現細胞上的 PD-L1 表現是癌症免疫逃脫的主要機制。PD-L1 與 PD-1 的接合傳遞抑制性訊號，抑制 T 細胞活化、增生與細胞激素產生，導致 T 細胞耗竭與免疫耐受。

## 分子機制

- 結合活化 T 細胞、B 細胞與骨髓細胞上的 [[PD-1]] 受體
- PD-1/PD-L1 接合招募 SHP-2 磷酸酶，使 TCR 訊號分子去磷酸化
- 導致 T 細胞無反應、耗竭與凋亡
- 在多種情境下表現於腫瘤細胞、抗原呈現細胞與基質細胞

## 表現調控

PD-L1 表現由多條路徑調控：

- **IFN-γ 訊號**：透過 JAK/STAT1/IRF1 軸的主要 PD-L1 誘導者
- **致癌訊號**：PI3K/AKT、MAPK 與 ALK 路徑在轉錄上上調 PD-L1
- **表觀遺傳調控**：啟動子甲基化與組蛋白修飾
- **轉錄後**：miRNA 媒介的調控與 mRNA 穩定性
- **腺苷訊號**：在衰老的 [[Tumor Microenvironment]] 中，CD73 產生的腺苷透過腺苷受體訊號上調巨噬細胞上的 PD-L1 表現

> [!info] 來源：Dong et al. 2024
> 在衰老 TME 中，來自衰老腫瘤細胞的 IL-6 升高腺苷水平，透過 JAK/STAT3 訊號促進巨噬細胞中的 CD73 表現。腺苷隨後上調人類巨噬細胞的 PD-L1 表現，進一步抑制抗腫瘤免疫。靶向 CD73 增強抗 PD-L1 免疫療法的療效。

## 在衰老與 SASP 中的角色

[[SASP]] 透過多種間接機制影響 PD-L1 表現：

- SASP 衍生的腺苷（透過 CD73）上調巨噬細胞上的 PD-L1
- SASP 發炎細胞激素可在腫瘤與免疫細胞上誘導 PD-L1
- SASP 媒介的免疫抑制與 PD-L1/PD-1 軸協同創造免疫排除的 TME

## 在癌症中的角色

- **免疫逃脫**：許多癌細胞表現 PD-L1 以抑制 T 細胞活性，讓腫瘤逃脫免疫反應。
- **乳癌**：PD-L1 表現在 [[triple-negative breast cancer]] 與 [[HER2-enriched breast cancer]] 中偏高。
- **調控**：[[melittin]] 已顯示可顯著降低腫瘤中的 PD-L1 表現。

## 抗吞噬（巨噬細胞）臂

除了 T 細胞檢查點外，巨噬細胞吞噬突觸處的 PD-L1–PD-1 接合也傳遞抗吞噬（「don't-eat-me」）訊號：腫瘤相關巨噬細胞表現的 PD-1 抑制腫瘤細胞吞噬，因此抗 PD-1/抗 PD-L1 阻斷獨立於 T 細胞效果之外，授權對 PD-L1 表現腫瘤細胞的攝取（Gordon et al. 2017, J Exp Med；Tier 4——PD-1/PD-L1 阻斷本身在腫瘤學已達 Tier 1）。因此 PD-L1 與 [[CD47]]、[[CD24]]–[[Siglec-10]] 及 MHC-I/[[B2M]] 屬於同一抗吞噬展示類別；見 [[Efferocytosis]]。

## 治療靶向

- **抗 PD-L1 抗體**：Atezolizumab、durvalumab、avelumab
- **抗 PD-1 抗體**：Pembrolizumab、nivolumab（靶向受體）
- **與 senolytics 合併**：清除衰老細胞可能減少 PD-L1 驅動的免疫抑制
- **與 CD73 抑制劑合併**：在衰老 TME 中阻斷腺苷媒介的 PD-L1 上調

> [!tip] 治療意涵
> 將 senolytic 療法與靶向 PD-L1/PD-1 的免疫檢查點抑制劑合併，可能克服 TME 中衰老細胞創造的免疫抑制屏障，恢復抗腫瘤免疫監視。

## Documents

- [[_document_ - Honeybee venom and melittin suppress growth factor receptor activation in HER2-enriched and triple-negative breast cancer - npj Precision Oncology|Honeybee venom and melittin suppress growth factor receptor activation]]
  - 免疫檢查點蛋白 PD-L1 降低活化 T 細胞的功能；melittin 減弱 PD-L1 水平，可能改善抗腫瘤免疫反應。

## Connections

- [[Tumor Microenvironment]] — PD-L1 是 TME 內表現的關鍵免疫檢查點分子
- [[CD73]] — CD73 產生的腺苷上調巨噬細胞上的 PD-L1 表現
- [[SASP]] — SASP 因子透過腺苷與發炎訊號間接促進 PD-L1 表現
- [[STAT3]] — JAK/STAT3 路徑媒介 SASP IL-6 對 CD73 的上調
- [[IL-6]] — 驅動腺苷-CD73-PD-L1 軸的 SASP 細胞激素
- [[Senescent Cells]] — 促進 PD-L1 媒介免疫抑制的 SASP 因子來源
- [[CD8 T cells]] — PD-L1 抑制 CD8+ T 細胞功能，阻止腫瘤細胞殺害
- [[triple-negative breast cancer]] — PD-L1 表現偏高的亞型
- [[melittin]] — 減弱 PD-L1 水平，可能改善抗腫瘤免疫反應
- [[HER2-enriched breast cancer]] — PD-L1 表現偏高的亞型
- [[PD-1]] — PD-L1 的受體
- [[Siglec-10]] / [[CD24]] / [[CD47]] / [[B2M]] — 巨噬細胞吞噬突觸的平行「don't-eat-me」訊號；PD-1/PD-L1 阻斷授權腫瘤細胞吞噬（Gordon et al. 2017, JEM）

## Linking Summary

- 新增連結：[[PD-L1]]、[[HER2-enriched breast cancer]]、[[melittin]]、[[triple-negative breast cancer]]、[[PD-1]]、[[Tumor Microenvironment]]、[[CD73]]、[[SASP]]、[[IL-6]]
- 建議建立的新實體筆記：無（本筆記）
- 待加強的連結：
    - [[CD73]] ↔ [[PD-L1]]
    - [[SASP]] ↔ [[PD-L1]]
    - [[Tumor Microenvironment]] ↔ [[PD-L1]]
    - [[PD-L1]] ↔ [[triple-negative breast cancer]]
