---
title: ChIP-seq
description: Chromatin immunoprecipitation followed by sequencing, the standard genome-wide method for mapping where a DNA-binding protein, histone modification or chromatin-associated factor occupies the genome.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [analytical-technique, epigenetics, chromatin, genetics]
aliases: [ChIP-seq, ChIP-Seq, ChIP sequencing, chromatin immunoprecipitation sequencing, ChIP-seq]
---

# ChIP-seq

**ChIP-seq** maps the genome-wide occupancy of a protein or histone
modification. Crosslinked (or native) chromatin is sheared, immunoprecipitated
with an antibody against the factor of interest, and the recovered DNA is
sequenced; reads are aligned to the genome and enriched regions called as
peaks. It is the reference epigenomic assay and the experimental backbone of
much of the [[Epigenetics]] literature.

## What It Measures

The same workflow produces different biological claims depending on the
antibody target:

- **Transcription factors and other DNA-binding proteins** — direct occupancy.
  These give sharp peaks.
- **Histone modifications** — chromatin state. The enhancer-defining marks
  [[H3K4me1]] and [[H3K27ac]] produce sharp peaks; broad marks such as
  H3K36me3 or H3K9me3 produce broad domains requiring different peak callers.
- **Chromatin-associated proteins and nucleosomes** — machinery occupancy
  rather than sequence-specific binding.

Because enrichment is a *ratio* to background, ChIP-seq cannot distinguish
occupancy from chromatin accessibility. An apparent transcription factor peak
in open chromatin may reflect accessibility rather than binding — which is
exactly why [[ATAC-seq]] and [[CUT&Tag]] exist as complementary assays.

> [!warning] The main interpretive trap
> ChIP-seq measures co-purification, not direct binding. Any factor that
> rides on DNA or another protein in the same complex produces signal at a
> locus it never contacts. Pairing ChIP-seq with a footprinting or
> accessibility assay, or with genetic perturbation, is what turns occupancy
> into mechanism.

## Design and Analysis Pitfalls

- **Antibody specificity is the dominant failure mode.** Validation efforts
  from ENCODE and modENCODE found roughly a quarter of tested histone
  antibodies failed specificity criteria. An antibody that works for
  ChIP-PCR at a single locus is not automatically usable genome-wide; a
  common rule of thumb is ≥5-fold enrichment at several positive-control
  regions versus negative controls. Epitope-tagging the factor and
  immunoprecipitating with a monoclonal anti-tag reagent avoids the problem.
- **Fragmentation bias.** Open chromatin shears more readily than closed
  chromatin, so highly accessible regions carry higher background — inflating
  apparent signal exactly where biology is most interesting.
- **Fragment size.** 150–300 bp is optimal; over-sonication is worse for
  transcription factors than for histone modifications.
- **Cell number.** Standard protocols need 1–10 million cells per
  immunoprecipitation, yielding 10–100 ng of ChIP DNA. Low-input native
  protocols reach ~100,000 cells per IP but at the cost of rising unmapped and
  PCR-duplicate read fractions.
- **Controls and replication.** An input or mock-antibody control is required
  to build the background model; ENCODE standardizes on two independent
  biological replicates with irreproducible discovery rate thresholds.
- **Sequencing depth.** Depth requirements differ for sharp versus broad
  marks, and peak-calling algorithms do not agree well on broad profiles at low
  depth. Notably, many additional peaks with 3–7-fold enrichment appear only
  at much greater depth — and these may well be genuine low-affinity or
  nonspecific sites, so there is no a priori threshold that guarantees
  complete site discovery.
- **Peak callers.** Sharp-peak callers such as MACS suit transcription
  factors; broad-domain callers such as SICER and CCAT suit histone marks.
- **Repeat masking.** Multi-mapping reads are discarded by default, so peaks
  in highly repetitive regions are systematically missed — a real loss in
  heterochromatin and satellite work.

## Relative Strengths

ChIP-seq supersedes ChIP-chip on the axes that matter for epigenomics:
single-nucleotide resolution rather than array-scale 30–100 bp, no
hybridization noise, no signal saturation, coverage not limited to array probe
sequences, and multiplexability. Its competitors address its weaknesses rather
than replacing it: [[CUT&Tag]] and related tag-based methods need far less
input and better resolution, while [[ATAC-seq]] measures accessibility
without an antibody at all.

## Documents

- [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB and TFE3, linking lysosomes to cellular adaptation to stress]]
  - Uses ChIP-seq as primary evidence for TFEB binding to CLEAR elements at
    lysosomal gene promoters and for TFE3 target identification under ER stress.
- [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial
  metabolism and epigenetic crosstalk drive SASP]]
  - H3K27ac ChIP-seq analysis showing that loci gaining acetylation during
    senescence are markedly reduced following mitochondrial clearance.
- [[_document_ - 2025_Kim_DAMP-trained-immunity_Front-Immunol|DAMP-trained immunity]]
  - ChIP-seq analysis showing soluble urate induces H3K27ac and H3K4me3
    reprogramming in monocytes.
- [[_document_ - repurposing_apigen_senomorphic.09.09.611999v1.full|repurposing apigenin senomorphic]]
  - Cites the standard ChIP-seq false-positive methodology for peak calling.

## Connections

- [[CUT&Tag]] — the low-input, higher-resolution alternative that uses the same
  antibody logic with an enzyme tag instead of sequencing the whole fragment.
- [[ATAC-seq]] — maps the accessibility that ChIP-seq cannot distinguish from
  binding, and is the necessary companion for interpreting TF peaks.
- [[Enhancer]] — ChIP-seq for H3K4me1 and H3K27ac is the standard experimental
  definition of active enhancers.
- [[H3K4me1]] — one of the two enhancer marks mapped genome-wide by ChIP-seq.
- [[H3K27ac]] — the second enhancer mark, and the active/poised discriminator.
- [[Super-enhancer]] — super-enhancers are defined by ChIP-seq occupancy
  clusters of lineage TFs.
- [[Chromatin]] — the substrate the assay interrogates.
- [[Histone Variant]] — histone variant occupancy is a routine ChIP-seq application.
- [[Transcription Factor]] — the classic ChIP-seq target class.
- [[Epigenetics]] — the field ChIP-seq made genome-wide.

## Linking Summary

- New links added: [[CUT&Tag]], [[ATAC-seq]], [[Enhancer]], [[H3K4me1]], [[H3K27ac]],
  [[Super-enhancer]], [[Chromatin]], [[Histone Variant]], [[Transcription Factor]],
  [[Epigenetics]]
- Suggested notes to create: [[Peak Calling]]
  [[ENCODE]], [[Nucleosome]], [[CUT&RUN]], [[Antibody Validation]],
  [[Nucleosome]], [[Kinetochore]]
- Strong connections to strengthen: [[ChIP-seq]] ↔ [[ATAC-seq]],
  [[ChIP-seq]] ↔ [[CUT&Tag]], [[ChIP-seq]] ↔ [[Enhancer]]