---
title: Spatial Transcriptomics
description: Spatial transcriptomics maps gene expression within intact tissue sections; in the Ye 2026 study it localizes senescent CD8+ T cells to mucosal niches with high NAD+ metabolism scores in ulcerative colitis.
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

**Spatial transcriptomics** comprises methods that quantify gene expression while retaining the two-dimensional coordinates of the tissue section — by spatial barcoding of mRNA on arrayed spots, by in-situ sequencing, or by imaging-based multiplexed RNA detection. Unlike dissociative [[Single-Cell RNA-seq|scRNA-seq]], it preserves tissue architecture, enabling cell-type signatures and pathway activities to be assigned to histological niches and neighbour relationships.

## Use in the Ye 2026 study

> [!info] Source: [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]
> Human colonic spatial transcriptomics data (GSE189184) were processed with the Seurat spatial framework. Spatial module scores for the high-senescence-score (HSS) [[Senescent CD8+ T Cells|CD8+ T-cell]] signature and the [[Nicotinate and Nicotinamide Metabolism|NAD+ metabolism]] signature were computed per spot (75th-percentile cutoff). Healthy colon is dominated by an HSS-low/NAD-low homeostatic niche, with the HSS-high/NAD-high "senescent niche" at 5.6%; in UC tissue the double-high niche expands to 16.7%.

The spatial co-localization supports the interpretation that senescent CD8+ T cells arise within local mucosal niches of [[NAD+ Metabolic Reprogramming|NAD+ dysregulation]] in [[Ulcerative Colitis]], rather than being uniformly distributed. It complements the dissociation-based [[Single-Cell RNA-seq]] and bulk [[Gene Set Enrichment Analysis]] evidence.

## Documents

- [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]: applies spatial transcriptomics (GSE189184) to map the senescent/NAD+ niche in human UC colon.

## Connections

- [[Single-Cell RNA-seq]] — dissociative counterpart method used in the same study
- [[Gene Set Enrichment Analysis]] — pathway-scoring approach applied to spatial spots
- [[Nicotinate and Nicotinamide Metabolism]] — NAD+ signature scored spatially
- [[Senescent CD8+ T Cells]] — HSS signature scored spatially
- [[NAD+ Metabolic Reprogramming]] — metabolic axis localized to the double-high niche
- [[Ulcerative Colitis]] — tissue context
- [[Intestinal Barrier]] — mucosal architecture preserved by the method

## Linking Summary

- New links added: [[Single-Cell RNA-seq]], [[Gene Set Enrichment Analysis]], [[Nicotinate and Nicotinamide Metabolism]], [[Senescent CD8+ T Cells]], [[NAD+ Metabolic Reprogramming]], [[Ulcerative Colitis]], [[Intestinal Barrier]]
- Suggested new entity notes to create: [[Seurat]], [[GSE189184]], [[Visium]]
- Strong connections to strengthen: [[Spatial Transcriptomics]] ↔ [[Single-Cell RNA-seq]], [[Spatial Transcriptomics]] ↔ [[NAD+ Metabolic Reprogramming]]
