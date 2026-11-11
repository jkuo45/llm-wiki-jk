---
title: Gene Set Enrichment Analysis
description: 基因集富集分析（GSEA）是一種計算方法，檢驗預先定義的基因集是否在排序基因列表的極端處過度富集；在 Ye 2026 研究中，它揭示衰老 CD8+ T 細胞中 NAD+ 代謝通路與發炎通路的富集。
protected: false
created: 2026-11-10
updated: 2026-11-10
tags:
  - analytical-technique
  - bioinformatics
  - gene-expression
  - pathway-analysis
aliases: [GSEA, Gene Set Enrichment Analysis, ssGSEA, Single-sample GSEA]
---

# Gene Set Enrichment Analysis

**基因集富集分析（GSEA）**是一種基於排序的計算方法，檢驗事先定義基因集（如 KEGG 通路或 Hallmark 簽名）的成員是否聚集於全基因組表現排序的頂部或底部，而非套用任意的差異表現門檻。它報告正規化富集分數與置換檢驗顯著性。單樣本變體（ssGSEA）計算各樣本的通路活性分數，使通路活性可與臨床變數相關分析。

## 在 Ye 2026 研究中的應用

> [!info] 來源：[[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]
> GSEA 顯示發炎反應通路在高衰老分數（HSS）T 細胞中富集，且在 FK866 處理的 CD8+ T 細胞中 [[Oxidative Phosphorylation]] 受抑制、[[Glycolysis]] 上調。GSEA 與表現分析證實結腸炎小鼠結腸 CD8+ T 細胞中 [[Nicotinate and Nicotinamide Metabolism|NAD+ 代謝]] 通路顯著富集，由 Nampt（[[NAMPT]]）下調及 Cd38、Sirt1、Parp1（[[CD38]]、[[SIRT1]]、[[PARP1]]）強力上調驅動。在依 NAD+ 與衰老 CD8+ 分數分層的 UC 患者中，高分者上調 TNFA-signalling-via-[[NF-κB]] 與 interferon-alpha-response 通路，低分者保留氧化磷酸化。

ssGSEA 衍生的 NAD+ 代謝與 HSS CD8+ T 細胞浸潤分數，是用作 [[Infliximab]] 與 [[Vedolizumab]] 無反應預測 [[Ulcerative Colitis|UC]] 生物標誌的兩個量值，並與內視鏡／Mayo 疾病活動相關。

## Documents

- [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]：全篇應用 GSEA/ssGSEA 以揭示 NAD+ 代謝與發炎特徵。

## Connections

- [[Nicotinate and Nicotinamide Metabolism]] — 在結腸炎 CD8+ T 細胞中富集的 KEGG 通路
- [[NAD+ Metabolic Reprogramming]] — 富集揭示的代謝軸
- [[NAMPT]]、[[CD38]]、[[SIRT1]]、[[PARP1]] — 驅動富集的基因
- [[Oxidative Phosphorylation]]、[[Glycolysis]]、[[NF-κB]] — GSEA 評分的通路
- [[Single-Cell RNA-seq]]、[[Spatial Transcriptomics]] — 同研究中的互補分析方法
- [[Ulcerative Colitis]]、[[Infliximab]]、[[Vedolizumab]] — 臨床相關與生物標誌背景

## Linking Summary

- 新增連結：[[Oxidative Phosphorylation]]、[[Glycolysis]]、[[Nicotinate and Nicotinamide Metabolism]]、[[NAMPT]]、[[CD38]]、[[SIRT1]]、[[PARP1]]、[[NF-κB]]、[[NAD+ Metabolic Reprogramming]]、[[Single-Cell RNA-seq]]、[[Spatial Transcriptomics]]、[[Ulcerative Colitis]]、[[Infliximab]]、[[Vedolizumab]]
- 建議新建的實體註記：[[Hallmark Gene Sets]]、[[Normalized Enrichment Score]]、[[DESeq2]]
- 應加強的強連結：[[Gene Set Enrichment Analysis]] ↔ [[Nicotinate and Nicotinamide Metabolism]]、[[Gene Set Enrichment Analysis]] ↔ [[Single-Cell RNA-seq]]
