---
title: Spatial Transcriptomics
description: 空間轉錄體學在完整組織切片中繪製基因表現；在 Ye 2026 研究中將衰老的 CD8+ T 細胞定位於潰瘍性結腸炎中 NAD+ 代謝分數高的黏膜微環境。
protected: false
created: 2026-11-10
updated: 2026-11-10
tags:
  - analytical-technique
  - transcriptomics
  - gene-expression
  - spatial-biology
aliases: [ST, Spatial transcriptome sequencing, Spatially resolved transcriptomics, Spatial omics]
---

# Spatial Transcriptomics

**Spatial transcriptomics** 包括一類方法，在定量基因表現的同時保留組織切片的二維座標——透過在陣列化位點上進行 mRNA 的空間條碼標定、原位定序，或基於影像的 multiplex RNA 偵測。與解離式的 [[Single-Cell RNA-seq|scRNA-seq]] 不同，它保留了組織結構，使細胞類型特徵與通路活性得以指派至組織學微環境與鄰近關係。

## 在 Ye 2026 研究中的應用

> [!info] Source: [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]
> 人類結腸空間轉錄體學資料（GSE189184）以 Seurat 空間框架處理。依位點計算高衰老分數（HSS）[[Senescent CD8+ T Cells|CD8+ T 細胞]]特徵與 [[Nicotinate and Nicotinamide Metabolism|NAD+ 代謝]]特徵的空間模組分數（第 75 百分位數截斷值）。健康結腸以 HSS 低/NAD 低的穩態微環境為主，HSS 高/NAD 高的「衰老微環境」為 5.6%；在 UC 組織中，雙高微環境擴增至 16.7%。

空間共定位支持這樣的詮釋：衰老的 CD8+ T 細胞產生於 [[Ulcerative Colitis]] 中 [[NAD+ Metabolic Reprogramming|NAD+ 失調]]的局部黏膜微環境，而非均勻分布。它補充了基於解離的 [[Single-Cell RNA-seq]] 與 bulk [[Gene Set Enrichment Analysis]] 證據。

## Documents

- [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]：應用空間轉錄體學（GSE189184）來繪製人類 UC 結腸中的衰老/NAD+ 微環境。

## Connections

- [[Single-Cell RNA-seq]] — 在同一研究中使用之解離型對應方法
- [[Gene Set Enrichment Analysis]] — 應用於空間位點的通路評分方法
- [[Nicotinate and Nicotinamide Metabolism]] — 以空間方式評分的 NAD+ 特徵
- [[Senescent CD8+ T Cells]] — 以空間方式評分的 HSS 特徵
- [[NAD+ Metabolic Reprogramming]] — 定位至雙高微環境的代謝軸
- [[Ulcerative Colitis]] — 組織背景
- [[Intestinal Barrier]] — 該方法保留的黏膜結構

## Linking Summary

- New links added: [[Single-Cell RNA-seq]], [[Gene Set Enrichment Analysis]], [[Nicotinate and Nicotinamide Metabolism]], [[Senescent CD8+ T Cells]], [[NAD+ Metabolic Reprogramming]], [[Ulcerative Colitis]], [[Intestinal Barrier]]
- Suggested new entity notes to create: [[Seurat]], [[GSE189184]], [[Visium]]
- Strong connections to strengthen: [[Spatial Transcriptomics]] ↔ [[Single-Cell RNA-seq]], [[Spatial Transcriptomics]] ↔ [[NAD+ Metabolic Reprogramming]]
