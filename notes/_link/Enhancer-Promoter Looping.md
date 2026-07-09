---
title: Enhancer-Promoter Looping
description: Physical chromatin contacts that bring enhancers into proximity with gene promoters, rewired in senescence to drive SASP gene transcription within TADs.
type: entity
created: 2025-07-09
updated: 2025-07-09
tags:
  - scientific-concept
  - 3d-genome
  - gene-regulation
  - senescence
aliases:
  - EP looping
  - enhancer-promoter contact
---

# Enhancer-Promoter Looping

Enhancer–promoter looping (EP looping) is the physical folding of chromatin that brings a distal enhancer into close spatial proximity with the promoter of its target gene, enabling enhancer-bound transcription factors and co-activators to engage the basal transcription machinery. In cellular senescence, large-scale rewiring of the EP network is a primary mechanism by which the epigenetic landscape activates [[SASP]] genes, as reviewed in the npj Aging survey (Dasgupta et al., 2024; https://doi.org/10.1038/s41514-024-00172-2).

## Definition

An EP loop is a chromatin contact, typically detected by Hi-C, promoter capture Hi-C, or ChIA-PET, in which an enhancer and a promoter are spatially co-localized within the same [[Topologically Associating Domain|TAD]]. Looping is mediated by cohesin/CTR9–NIPBL loop extrusion and anchored by transcription-factor and CTCF binding.

## Formation and Mechanism

Loops form as cohesin extrudes chromatin until it encounters convergent CTCF sites or is stalled by bound factors. Active loops are marked by enhancer RNAs (eRNAs), [[H3K27ac]], [[H3K4me1]], and binding of pioneer factors such as [[AP-1]] and readers such as [[BRD4]]. In senescence, transcription-dependent cohesin repositioning rewires loops (Olan et al., 2020, PMID 33177495), and the [[METTL3]]/METTL14 complex promotes senescence-associated contacts independently of its m6A catalytic activity (Liu et al., 2021, PMID 33712796).

## Role in SASP

The SASP is governed by enhancer–promoter rewiring: enhancers that become hyper-connected to SASP promoters correspond to elevated SASP transcription (Olan et al., 2020; Wang et al., 2023). Upon senescence entry, enhancers marked by [[H3K27ac]] are globally remodeled, and the majority of enhancer activation occurs de novo from previously unmarked chromatin (Martinez-Zamudio et al., 2020, PMID 32439934). EP loops place these new enhancers — often organized as [[Super-enhancer|super-enhancers]] — in contact with key SASP genes such as [[IL-6]] and [[IL-8]]. The pioneer factor AP-1 opens these enhancers; BRD4 and [[CEBPα]] bind them and facilitate looping/transcription.

## Mechanistic Details

EP looping translates the altered histone-mark landscape into precise gene activation. Active enhancers (H3K4me1/H3K27ac, eRNAs) loop to SASP promoters, recruiting the transcriptional machinery and [[NFKB|NF-κB]] to induce secretion. Loss of boundary factors such as [[HMGB2]] or redistribution of METTL3/14 perturbs these loops and changes SASP output. Thus the 3D contact map is as informative as the linear epigenome for predicting SASP.

## Clinical and Therapeutic Relevance

Because EP-loop formation depends on readers/writers (BRD4, p300, METTL3/14, HDAC4), these are candidate [[Senomorphic|senomorphic]] targets (Tasdemir et al., 2016; Di Giorgio et al., 2021, PMID 33948120). Multi-way interaction mapping by long-read sequencing may refine loop-targeted therapies.

## Documents

- [[_document_ - The role of the dynamic epigenetic landscape in senescence_orchestrating SASP expression]] — Enhancer-promoter looping within TADs, hyper-connected to SASP promoters, is a key driver of SASP transcription in senescence.

## Connections

- [[Topologically Associating Domain]]: The domain within which EP loops form.
- [[Super-enhancer]]: Large enhancer clusters driving SASP via looping.
- [[H3K27ac]]: Active-enhancer mark at looped SASP enhancers.
- [[AP-1]]: Pioneer factor that opens SASP enhancers for looping.
- [[BRD4]]: Reader at looped enhancers driving SASP.
- [[SASP]]: EP rewiring drives SASP transcription.

## Linking Summary

- New links added: [[Topologically Associating Domain]], [[Super-enhancer]], [[H3K27ac]], [[H3K4me1]], [[AP-1]], [[BRD4]], [[CEBPα]], [[NFKB]], [[METTL3]], [[HMGB2]], [[IL-6]], [[IL-8]], [[SASP]], [[Senomorphic]], [[Senescence]]
- Suggested new entity notes to create: [[CTCF]], [[Cohesin]], [[Enhancer RNA]]
- Strong connections to strengthen: [[Enhancer-Promoter Looping]] ↔ [[Super-enhancer]]; [[Enhancer-Promoter Looping]] ↔ [[SASP]]
