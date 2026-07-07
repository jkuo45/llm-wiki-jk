---
title: TransitID
description: A proximity labeling method developed by Alice Ting's lab for mapping proteome spatial and temporal dynamics by distinguishing proteins transitioning between cellular compartments using orthogonal split-biotin ligases with time-resolved labeling.
type: entity
created: 2026-07-04
updated: 2026-07-06
tags:
  - Analytical Technique
aliases: []
---

# TransitID

## Overview

TransitID is a proximity labeling method developed by [[Alice Ting's lab]] that enables the systematic mapping of proteome spatial and temporal dynamics. Unlike conventional [[Proximity labeling]] approaches that capture static protein localization, TransitID distinguishes proteins transitioning between cellular compartments — such as from the [[Cytosol]] to [[Mitochondria]] or from the [[Nucleus]] to the cytosol — by incorporating a time-resolved labeling strategy. The method leverages split versions of two orthogonal promiscuous biotin ligases, enabling the simultaneous or sequential labeling of distinct compartments and the identification of proteins that move from one compartment to another.

## Method

TransitID employs two orthogonal biotin ligases: split-[[TurboID]] and split-[[BioID|BirA]], each targeted to a different cellular compartment via signal peptides or localization tags. The "in" compartment is labeled with split-TurboID, which uses [[biotin-phenol]] as a substrate and catalyzes rapid biotinylation within a short labeling window (minutes). The "out" (destination) compartment is labeled with split-BirA, which uses an alternative biotin analog (e.g., [[alkyne-biotin]]) that can be distinguished chemically. After time-gated labeling, cells are lysed and proteins are enriched via [[streptavidin]] pulldown. [[Mass Spectrometry]] is used to identify dual-labeled proteins — those that were biotinylated by TurboID in the source compartment and subsequently captured by BirA in the target compartment, indicating active transit.

The temporal resolution is achieved by controlling the availability of each biotin substrate: biotin-phenol is added first for a defined pulse in the source compartment, then washed out before the alternative biotin analog is added to capture proteins that have moved into the destination compartment. The dual-biotinylation signature is detected through specialized enrichment and [[LC-MS/MS]] workflows.

## Applications

TransitID has been applied to identify proteins undergoing [[retrograde transport]] from [[Mitochondria]] to the [[Cytosol]], a process implicated in [[mitochondrial stress]] signaling and the [[Integrated Stress Response]]. It has also been used to study [[nuclear export]] and [[nuclear import]] kinetics under basal and stressed conditions, revealing how proteins like [[DELE1]] and [[ATFS-1]] translocate to report mitochondrial dysfunction. Additional applications include profiling [[heat shock]]-induced protein relocalization, [[ER stress]]-dependent translocation of transcription factors, and the dynamics of signaling proteins such as [[NF-κB]] and [[MAP kinases]] that shuttle between compartments during pathway activation.

## Connections

- [[Proximity labeling]]
- [[BioID]]
- [[TurboID]]
- [[Mitochondrion]]
- [[Proteomics]]
- [[Mass Spectrometry]]
- [[Alice Ting's lab]]

## Linking Summary

- New links added: [[Alice Ting's lab]], [[Proximity labeling]], [[BioID]], [[TurboID]], [[Mitochondrion]], [[Proteomics]], [[Mass Spectrometry]], [[Cytosol]], [[Nucleus]], [[biotin-phenol]], [[streptavidin]], [[LC-MS/MS]], [[retrograde transport]], [[mitochondrial stress]], [[Integrated Stress Response]], [[nuclear export]], [[nuclear import]], [[DELE1]], [[ATFS-1]], [[heat shock]], [[ER stress]], [[NF-κB]], [[MAP kinases]]
- Suggested new entity notes to create: [[Alice Ting's lab]], [[Proximity labeling]], [[BioID]], [[TurboID]], [[biotin-phenol]], [[retrograde transport]]
- Strong connections to strengthen: [[TransitID]] ↔ [[Proximity labeling]], [[TransitID]] ↔ [[TurboID]], [[TransitID]] ↔ [[Mass Spectrometry]], [[TransitID]] ↔ [[Mitochondrion]]
