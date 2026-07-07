---
type: entity
title: RNA-seq
description: '**RNA-seq** (RNA sequencing) is a high-throughput sequencing method
  that profiles the complete set of RNA transcripts in a biological sample. It quantifies
  Gene Expression, detects Alternative Spli...'
created: 2026-07-04
updated: 2026-07-06
entity_type_1: Analytical Technique
aliases: [RNA Sequencing, Whole Transcriptome Sequencing]
---
# RNA-seq

**RNA-seq** (RNA sequencing) is a high-throughput sequencing method that profiles the complete set of [[RNA]] transcripts in a biological sample. It quantifies [[Gene Expression]], detects [[Alternative Splicing]], identifies novel transcripts, and discovers [[RNA Editing]] events.

## Workflow

1. RNA extraction and quality assessment
2. [[Poly-A Selection]] or [[Ribosomal RNA Depletion]] for enrichment
3. Reverse transcription to [[cDNA]] (complementary DNA)
4. [[Adapter Ligation]] and [[PCR Amplification]] to create a sequencing library
5. High-throughput sequencing ([[Illumina]], [[PacBio]], [[Nanopore]])
6. Bioinformatic analysis: [[Read Alignment]] ([[STAR]], [[HISAT2]]), [[Quantification]] ([[featureCounts]], [[Salmon]]), [[Differential Expression]] ([[DESeq2]], [[edgeR]])

## Applications

- [[Transcriptomics]] — global gene expression profiling
- [[Single-Cell RNA-seq]] (scRNA-seq) — transcriptomes of individual cells
- [[Bulk RNA-seq]] — averaged expression across cell populations
- [[Long-read RNA-seq]] — full-length isoform detection (Iso-Seq)
- [[Small RNA-seq]] — [[miRNA]], [[siRNA]], [[piRNA]] profiling

#

## Connections
- [[Gene Expression]] — RNA-seq measures transcript abundance
- [[Transcriptomics]] — RNA-seq is the primary tool for transcriptome analysis
- [[Alternative Splicing]] — RNA-seq detects splice variants
- [[Single-Cell RNA-seq]] — single-cell resolution transcriptomics
- [[DESeq2]] — statistical method for differential expression analysis
- [[Illumina]] — dominant sequencing platform for RNA-seq
- [[PCR]] — amplification step in library preparation
- [[miRNA]] — can be profiled with small RNA-seq protocols

## Linking Summary
- New links added: [[RNA]], [[Gene Expression]], [[Alternative Splicing]], [[RNA Editing]], [[cDNA]], [[Illumina]], [[PacBio]], [[Nanopore]], [[Transcriptomics]], [[Single-Cell RNA-seq]], [[miRNA]], [[siRNA]], [[piRNA]], [[PCR]], [[Poly-A Selection]], [[Ribosomal RNA]]
- Suggested new entity notes to create: [[Read alignment]], [[Differential expression]], [[DESeq2]], [[Salmon (software)]], [[STAR aligner]], [[featureCounts]], [[scRNA-seq]], [[Long-read sequencing]]
- Strong connections to strengthen: [[RNA-seq]] ↔ [[Gene Expression]], [[RNA-seq]] ↔ [[Transcriptomics]]
