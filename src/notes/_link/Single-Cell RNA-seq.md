---
title: Single-Cell RNA-seq
description: Single-cell RNA sequencing measures the transcriptome of individual cells rather than bulk tissue, resolving heterogeneous cell populations and states that averaging hides; droplet platforms with molecular barcodes made it routine, but dropout, batch effects and stochastic expression remain its defining analytic problems.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [analytical-technique, transcriptomics, genomics]
aliases: [scRNA-seq, single cell RNA sequencing, scRNAseq, snRNA-seq, single-nucleus RNA-seq]
---

# Single-Cell RNA-seq

**Single-cell RNA sequencing (scRNA-seq)** measures the transcriptome of each cell individually instead of averaging over a sample. Because mRNA yield from one cell is tiny, the technique is built on cell **barcodes** and **unique molecular identifiers**, which assign reads to their cell of origin and count per transcript molecule rather than per read. Its arrival via droplet microfluidics (Drop-seq, inDrop, 10x Genomics) made it routine to profile tens to hundreds of thousands of cells per experiment.

Its central payoff is **heterogeneity resolution**: distinct cell types, transient states and rare populations that bulk [[RNA-seq]] mathematically cannot separate.

## Protocol Families

- **Full-length (Smart-seq2, Quartz-seq)** — random-primed reverse transcription across the whole transcript. Fewer cells, but better sensitivity, isoform resolution and allelic assignment.
- **3'/5' tag-based (10x, Drop-seq, CEL-seq2, STRT-seq)** — cheaper, scalable, and tagged, which is why they dominate. They are biased toward 3' ends, so intra-gene comparisons of isoform usage are limited.

Standard preprocessing is quality control (gene counts, molecular counts, mitochondrial and ribosomal fractions, doublet removal), library-size normalisation, highly-variable-gene selection, dimensionality reduction — almost always PCA, then t-SNE or UMAP — and graph-based clustering.

## Analytical Caveats

> [!warning] Dropout is a design property, not noise to smooth away
> Most genes read as zero in most cells, and detection in a given cell is partly stochastic. Bulk differential-expression statistics are therefore biased when applied here; specialised methods (MAST, NEBULA, ZINB-WaVE, or pseudo-bulk approaches) are required. "Biological replicates" also means something different: each cell is unique, so replicates must be individuals, not cells.

Other structural problems:

- **Batch effects.** Preparation batch, platform and donor differences can generate artifactual clusters; Harmony, Seurat CCA and scMerge integrate datasets, but over-correction can erase real rare populations.
- **Embedding choice is interpretive.** t-SNE gives better average cluster separation and preserves local neighbourhoods; UMAP is more stable across parameters, preserves somewhat more global structure and scales better. Neither is a measurement — the axes are not variables and cluster area means nothing. Reading a principal tree as a developmental trajectory is a common and largely invalid inference.
- **Annotation remains partly human.** Marker-based and reference-mapping approaches are fast and accurate for well-covered immune populations, less so for rare or novel states.

## Applications

The technique's impact on ageing research has been substantial: single-cell transcriptomics showed that senescence is not a single state but several — growth-arrested cells, marker-positive cells, and an ECM-associated group — which is why the field now requires multiple markers. Combined with caloric restriction it produced single-cell atlases of immune ageing from over 200,000 cells. In [[Disease Modeling]] it defines which cells respond to a perturbation, and paired with [[ATAC-seq]] gives cell-type-resolved chromatin accessibility.

> [!info] Related but distinct
> scRNA-seq is one member of the vault's [[Single-cell Omics]] family, alongside single-cell ATAC-seq and multimodal approaches. Spatial transcriptomics is complementary rather than substitutive: it keeps tissue context at lower resolution and sensitivity.

## Documents
- [[_document_ - Mitochondrial dysfunction in cellular senescence a bridge to neurodegenerative disease|Mitochondrial dysfunction in cellular senescence a bridge to neurodegenerative disease]] — uses single-cell and single-nucleus RNA-seq to show that senescence resolves into several distinct transcriptional clusters, motivating multi-marker definitions of senescence.
- [[_document_ - Autophagy takes it all – autophagy inducers target immune aging|Autophagy takes it all]] — describes a single-cell transcriptomic atlas of over 210,000 cells and nuclei dissecting immune changes with aging and caloric restriction at cellular resolution.

## Connections
- [[RNA-seq]] — scRNA-seq is the single-cell resolution of the same assay family, trading throughput and sensitivity per cell for heterogeneity resolution that bulk sampling destroys.
- [[Single-cell Omics]] — This note covers the transcriptomic member of the single-cell family; the shared limitation across all of them is sparse, high-dimensional data.
- [[Gene Expression]] — scRNA-seq lets gene expression be assigned to specific cell states rather than to an average tissue composition.
- [[Cellular Senescence]] — Single-cell transcriptomics revealed that senescent cells occupy multiple distinct states, the direct evidence for treating senescence as heterogeneous rather than monolithic.
- [[Transcriptome]] — A single-cell transcriptome is the unit of measurement; across cells it reconstructs the population transcriptome with cell-type resolution.
- [[ATAC-seq]] — Combining scRNA-seq with single-cell ATAC-seq assigns regulatory activity to cell types and links chromatin state to transcription.
- [[Disease Modeling]] — Because it reports which specific cell types respond, scRNA-seq is the standard readout for whether a disease phenotype or drug effect is cell-type specific.

## Linking Summary
- New links added: [[RNA-seq]], [[Single-cell Omics]], [[Gene Expression]], [[Cellular Senescence]], [[Transcriptome]], [[ATAC-seq]], [[Disease Modeling]]
- Suggested notes to create: [[Dimensionality Reduction]], [[Batch Effect Correction]], [[UMAP]], [[Trajectory Inference]], [[Pseudotime]], [[Droplet Microfluidics]], [[Unique Molecular Identifier]], [[Spatial Transcriptomics]], [[Cell Type Annotation]]
- Strong connections to strengthen: [[Single-Cell RNA-seq]] ↔ [[RNA-seq]], [[Single-Cell RNA-seq]] ↔ [[Cellular Senescence]]