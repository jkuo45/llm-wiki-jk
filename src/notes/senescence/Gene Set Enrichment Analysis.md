---
title: Gene Set Enrichment Analysis
description: Gene set enrichment analysis (GSEA) is a computational method that tests whether a predefined gene set is over-represented at the extremes of a ranked gene list; in the Ye 2026 study it identified enrichment of the NAD+ metabolism pathway and of inflammatory pathways in senescent CD8+ T cells.
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

**Gene set enrichment analysis (GSEA)** is a rank-based computational method that asks whether members of an a priori defined gene set (e.g. a KEGG pathway or Hallmark signature) cluster toward the top or bottom of a genome-wide expression ranking, rather than applying an arbitrary differential-expression cutoff. It reports a normalized enrichment score and significance by permutation. The single-sample variant (ssGSEA) computes a per-sample pathway activity score, enabling pathway activity to be correlated with clinical variables.

## Use in the Ye 2026 study

> [!info] Source: [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]
> GSEA showed the inflammatory-response pathway enriched in high-senescence-score (HSS) T cells, and suppressed [[Oxidative Phosphorylation]] with upregulated [[Glycolysis]] in FK866-treated CD8+ T cells. GSEA and expression profiling confirmed significant enrichment of the [[Nicotinate and Nicotinamide Metabolism|NAD+ metabolism]] pathway in colonic CD8+ T cells from colitis mice, driven by downregulated Nampt ([[NAMPT]]) and robustly upregulated Cd38, Sirt1 and Parp1 ([[CD38]], [[SIRT1]], [[PARP1]]). In UC patients stratified by NAD+ and senescent-CD8+ scores, high scorers show upregulated TNFA-signalling-via-[[NF-κB]] and interferon-alpha-response pathways while low scorers preserve oxidative phosphorylation.

ssGSEA-derived NAD+ metabolism and HSS CD8+ T-cell infiltration scores are the two quantities used as the predictive [[Ulcerative Colitis|UC]] biomarker for [[Infliximab]] and [[Vedolizumab]] non-response, and are correlated with endoscopic/Mayo disease activity.

## Documents

- [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]: applies GSEA/ssGSEA throughout to identify the NAD+ metabolism and inflammatory signatures.

## Connections

- [[Nicotinate and Nicotinamide Metabolism]] — KEGG pathway enriched in colitic CD8+ T cells
- [[NAD+ Metabolic Reprogramming]] — metabolic axis the enrichment identifies
- [[NAMPT]], [[CD38]], [[SIRT1]], [[PARP1]] — genes driving the enrichment
- [[Oxidative Phosphorylation]], [[Glycolysis]], [[NF-κB]] — pathways scored by GSEA
- [[Single-Cell RNA-seq]], [[Spatial Transcriptomics]] — complementary profiling methods in the same study
- [[Ulcerative Colitis]], [[Infliximab]], [[Vedolizumab]] — clinical correlation and biomarker context

## Linking Summary

- New links added: [[Oxidative Phosphorylation]], [[Glycolysis]], [[Nicotinate and Nicotinamide Metabolism]], [[NAMPT]], [[CD38]], [[SIRT1]], [[PARP1]], [[NF-κB]], [[NAD+ Metabolic Reprogramming]], [[Single-Cell RNA-seq]], [[Spatial Transcriptomics]], [[Ulcerative Colitis]], [[Infliximab]], [[Vedolizumab]]
- Suggested new entity notes to create: [[Hallmark Gene Sets]], [[Normalized Enrichment Score]], [[DESeq2]]
- Strong connections to strengthen: [[Gene Set Enrichment Analysis]] ↔ [[Nicotinate and Nicotinamide Metabolism]], [[Gene Set Enrichment Analysis]] ↔ [[Single-Cell RNA-seq]]
