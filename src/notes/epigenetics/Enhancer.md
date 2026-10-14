---
title: Enhancer
description: Cis-regulatory DNA element that raises transcription of a target gene from variable distance and orientation, marked by open chromatin, H3K4me1, and (when active) H3K27ac.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [gene-regulation, chromatin, epigenetics, transcription]
aliases: [Enhancers, cis-regulatory enhancer, transcriptional enhancer]
---

# Enhancer

An **enhancer** is a cis-regulatory DNA sequence that increases transcription
of a target gene from a distance, independent of orientation, and often
independent of which promoter it eventually engages. Enhancers are the
elements that give a genome cell-type specificity: they convert a
housekeeping promoter into a cell-identity programme.

## Chromatin Signature

Enhancers sit in nucleosome-depleted, nuclease-accessible chromatin. Two
histone marks define them:

- **H3K4me1** — monomethylation at H3K4, laid down by MLL3/MLL4, present on
  both primed (poised) and active enhancers. It also recruits the BAF
  chromatin-remodelling complex (to keep chromatin open) and [[Cohesin]] (to
  promote enhancer-promoter proximity), and stimulates p300/CBP acetyltransferase
  activity.
- **H3K27ac** — acetylation at H3K27, the mark that separates **active**
  from **poised** enhancers. Creyghton et al. showed H3K27ac-positive sites are
  selectively transcribed into short RNAs even without H3K4me1, supporting its
  role as a deterministic feature of active enhancers rather than a
  correlate. H3K27ac appears to help recruit the RNA Pol II pre-initiation
  complex onto enhancer chromatin and may maintain the open conformation.

Five chromatin states are described: **active** (open, H3K4me1 + H3K27ac,
eRNA-producing), **primed** (H3K4me1 only, closed, no eRNA), **latent**
(unmarked until stimulus), **poised** (H3K4me1 with H3K27me3), and
**repressed**.

> [!info] Mechanism
> Sequence-specific [[Transcription Factor]]s bind the enhancer, recruit
> p300/CBP to deposit H3K27ac, and RNA Pol II transcribes the enhancer
> bidirectionally to produce **enhancer RNAs** (eRNAs). The eRNA and
> Mediator-dependent contacts are required for productive
> [[Enhancer-Promoter Looping]] to the target promoter, where the enhancer
> stimulates promoter-proximal pause release.

## Large and Super Enhancers

[[Super-enhancer|Super-enhancers]] are large clusters of neighbouring
enhancers with unusually high activity, occupied by clusters of lineage
master TFs and producing disproportionate transcriptional output. They are
why a single TFs identity programme can dominate a cell type.

## Disease and Redistribution

Enhancers are enriched for disease-associated variants: mutations in distal
enhancers rather than in the genes they regulate underlie a large share of
human disease — the classic case being β-globin locus disruption causing
thalassaemia without any mutation in the globin genes. Enhancer–promoter
rewiring is also a recurring feature of disease states, including senescence:
in senescent cells the most notable chromatin state transitions occur at
enhancers rather than promoters, with widespread accessibility gain in
gene-poor enhancer regions, de novo enhancer activation from previously
unmarked chromatin, and hyper-connected enhancer hubs driving [[SASP]] gene
expression.

## Documents

- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression|role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]]
  - Source of the senescence-specific enhancer findings: enhancer accessibility
    gain, de novo activation, super-enhancer behaviour, and enhancer-promoter
    rewiring as the mechanism behind SASP transcription.

## Connections

- [[H3K4me1]] — the priming mark present on both poised and active enhancers;
  the H3K4me1-without-H3K4me3 signature is how candidate enhancers are called.
- [[H3K27ac]] — the discriminator between active and poised enhancers, and
  the mark used with H3K4me1 to define candidate enhancers in practice.
- [[Super-enhancer]] — the clustered, high-activity form of enhancer that
  drives cell-type identity programmes.
- [[Enhancer-Promoter Looping]] — the physical mechanism by which a distal
  enhancer reaches its promoter; [[Cohesin]] and H3K4me1 promote the contact.
- [[Transcription Factor]] — lineage-specific factors binding enhancer motif
  clusters are what make an enhancer active in one cell type and inert in another.
- [[CTCF]] — shares architectural roles with enhancers in defining topological
  domains that constrain which promoter an enhancer may contact.
- [[ATAC-seq]] — maps the open chromatin that marks enhancers experimentally.
- [[Histone Variant]] and [[Chromatin]] — the nucleosome and packaging context
  in which enhancer accessibility is set.
- [[SASP]] — senescent enhancer rewiring is a major driver of SASP transcription.

## Linking Summary

- New links added: [[H3K4me1]], [[H3K27ac]], [[Super-enhancer]],
  [[Enhancer-Promoter Looping]], [[Transcription Factor]], [[Cohesin]], [[CTCF]],
  [[ATAC-seq]], [[SASP]], [[Chromatin]], [[Histone Variant]]
- Suggested notes to create: [[Enhancer RNA]], [[MLL3/MLL4]]
  [[BAF Complex]], [[Poised Enhancer]], [[Transcription Activator-Like Enhancer]]
- Strong connections to strengthen: [[Enhancer]] ↔ [[H3K27ac]],
  [[Enhancer]] ↔ [[Super-enhancer]], [[Enhancer]] ↔ [[SASP]]