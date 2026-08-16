---
title: MLL1
description: Histone-lysine N-methyltransferase 2A (KMT2A), the major H3K4me3 methyltransferase that regulates development and hematopoiesis, drives MLL-rearranged leukemias, and restrains SASP by sustaining the DNA damage response in senescent cells.
protected: false
created: 2026-07-09
updated: 2026-08-16
tags:
  - enzyme
  - gene
  - epigenetics
  - histone-methyltransferase
  - senescence
  - sasp
  - leukemia
  - cancer
aliases:
  - KMT2A
  - Histone-lysine N-methyltransferase 2A
  - Mixed Lineage Leukemia 1
  - HRX
  - ALL-1
  - CXXC7
url: #
source: #
---

# MLL1

## Overview

MLL1 (mixed-lineage leukemia 1), also known as KMT2A (histone-lysine N-methyltransferase 2A), is a [[histone methyltransferase]] that deposits the activating mark histone H3 lysine 4 trimethylation ([[H3K4me3]]) at promoters of actively transcribed genes, a hallmark of active [[transcription]]. It is a master regulator of [[HOX gene]] expression during [[development]] and [[hematopoiesis]]. In senescence, MLL1 emerges as an unexpected brake on the [[SASP|Senescence-Associated Secretory Phenotype]]: its depletion or inhibition reduces SASP expression without releasing the senescence growth arrest, doing so primarily by impairing the DNA damage response (DDR) rather than by removing H3K4me3.

## Structure & Domains

- Contains multiple functional domains: AT-hooks, [[CXXC domain]] (binds unmethylated [[CpG islands]]), PHD fingers, bromodomain, and SET domain (catalytic).
- The catalytic SET domain of MLL1 transfers methyl groups from SAM to H3K4.
- [[Menin]] (encoded by [[MEN1]]) is a critical co-factor that recruits MLL1 to chromatin.
- MLL1 operates in multiprotein complexes containing WDR5, RBBP5, ASH2L, and DPY30 (the WRAD subcomplex) that are required for full catalytic activity.

## Function

H3K4me3 is a canonical "active" mark recognized by chromatin readers (e.g., TAF3, ING proteins, BPTF) that promote transcription initiation. MLL1 complexes are recruited to chromatin through transcription-factor and CpG-island interactions, establishing bivalent and active promoter states during development and differentiation. MLL1 is essential for maintaining H3K4me3 at promoters of housekeeping and developmental genes, and its N-terminal translocation partners (in MLL-rearranged leukemias) drive aberrant H3K4me3 at oncogenic loci.

## Role in Cancer: MLL Rearrangements

- **[[MLL rearrangements]]**: Chromosomal translocations involving MLL1 at 11q23 produce oncogenic fusion proteins (e.g., MLL-AF4, MLL-AF9, MLL-ENL).
- These fusions are found in aggressive [[leukemia|leukemias]], particularly infant leukemia and therapy-related AML.
- The fusion proteins retain the N-terminal [[menin]]-binding domain, making menin inhibitors (e.g., [[revumenib]]/SNDX-5613) a therapeutic strategy.

## Role in Senescence / SASP

The review describes MLL1 as a histone methyltransferase responsible for H3K4me3, paired with [[EZH2]] (which deposits the repressive [[H3K27me3]]). Whereas EZH2 inhibition derepresses SASP by removing H3K27me3 from SASP loci, MLL1 behaves differently. Depleting or inhibiting MLL1 decreases SASP expression, but the overall reduction in H3K4me3 at SASP loci is only moderate and does not track with the large drop in SASP transcription. Instead, MLL1 loss reduces SASP primarily by preventing activation of the DDR pathway (ref. 66). This reveals a mechanistically distinct route: MLL1 supports the DNA-damage signaling that itself drives SASP, so its inhibition is senomorphic — it blunts SASP while leaving the senescence-associated cell-cycle arrest intact.

## Mechanistic Details

- H3K4me3/H3K27me3 "mesas" and H3K27me3-depleted "canyons" characterize the enhancer landscape of replicative senescent cells; MLL1 sustains the active arm of this balance.
- MLL1's SASP effect is DDR-dependent, placing it upstream of DDR→SASP signaling rather than at the SASP promoter per se.
- As with [[KDM4]] and [[DOT1L]], MLL1 knockdown prevents SASP emergence without affecting arrest, a hallmark of a senomorphic (not senolytic) mechanism.

## Therapeutic Relevance

MLL1/KMT2A inhibitors (e.g., menin-MLL1 interaction blockers such as [[revumenib]]/SNDX-5613) are in clinical trials for MLL-rearranged leukemias (NCT04065399, NCT03797109). The review notes that disrupting MLL1 epigenetics can suppress SASP without affecting growth arrest, supporting future repurposing of KMT2A-targeted agents as [[Senomorphic|senomorphics]] for age-related inflammation.

## Documents

- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]]
  - The review presents MLL1 (KMT2A) as the H3K4me3 methyltransferase whose depletion reduces SASP primarily by impairing DDR activation rather than by loss of H3K4me3, positioning MLL1 inhibition as a senomorphic strategy that spares the senescence arrest.

## Connections

- [[EZH2]]: opposing H3K27me3 methyltransferase in senescence enhancer balance
- [[H3K4me3]]: activating mark deposited by MLL1
- [[DNA Damage]]: MLL1 loss impairs the DDR that drives SASP
- [[SASP|Senescence-Associated Secretory Phenotype]]: MLL1 is a senomorphic SASP regulator
- [[Menin]]: Essential co-factor for MLL1 activity
- [[HOX genes]]: Key transcriptional targets of MLL1
- [[Leukemia]]: MLL rearrangements drive aggressive leukemias
- [[KDM4]] / [[DOT1L]]: Other epigenetic SASP modulators with senomorphic knockdown phenotype
- [[Senomorphic]]: MLL1 inhibition blunts SASP while preserving growth arrest

## Linking Summary

- New links added: [[EZH2]], [[H3K4me3]], [[H3K27me3]], [[DNA Damage]], [[SASP|Senescence-Associated Secretory Phenotype]], [[KDM4]], [[DOT1L]], [[Senomorphic]], [[Senescence]], [[Menin]], [[SET domain]], [[CXXC domain]], [[HOX genes]], [[MLL rearrangements]], [[revumenib]]
- Suggested new entity notes to create: [[H3K4me3]], [[WRAD Complex]], [[Menin]], [[Menin inhibitors]]
- Strong connections to strengthen: [[MLL1]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]] (DDR-dependent senomorphic), [[MLL1]] ↔ [[EZH2]] (H3K4me3/H3K27me3 balance), [[MLL1]] ↔ [[Menin]] (co-factor), [[MLL1]] ↔ [[Leukemia]] (translocations)