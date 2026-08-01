---
title: FokI
description: A type IIS restriction endonuclease from Flavobacterium okeonokoites whose catalytic cleavage domain is the obligate-dimeric nuclease module used in zinc finger nucleases, TALENs, and mitoTALENs to introduce site-specific double-strand breaks.
protected: false
created: 2026-08-01
updated: 2026-08-01
tags:
  - enzyme
  - gene-editing
  - genetic-tool
  - molecular-biology
aliases:
  - FokI
  - FokI nuclease
  - FokI cleavage domain
  - Flavobacterium okeonokoites endonuclease
url: #
source: #
---

# FokI

**FokI** is a type IIS restriction endonuclease originally isolated from the bacterium *Flavobacterium okeonokoites*. It binds a non-palindromic DNA recognition site (GGATG) but cleaves DNA nonspecifically a short distance downstream, making it a "cut-away-from-the-site" enzyme. Its separable DNA-binding and cleavage domains are the basis of modular synthetic nucleases: the natively non-sequence-specific **FokI cleavage domain** is fused to a programmable DNA-binding module to create site-specific nucleases such as [[Zinc Finger|zinc finger nucleases]], TALE–nucleases, and [[mitoTALENs]].

## Structure and Catalysis

- **Type IIS architecture**: A single polypeptide contains both a specific DNA-binding domain and a nonspecific catalytic (cleavage) domain; cleavage occurs 9–13 bp downstream of the recognition site.
- **Obligate dimerization**: The FokI catalytic domain is active only as a dimer. In engineered nucleases, this property is exploited for specificity — two monomers fused to distinct DNA-binding modules must bind adjacent half-sites (typically 5–7 bp apart) for the cleavage domains to dimerize and cut.
- **Heterodimeric variants**: Engineered mutations (e.g., ELD/KKR) produce obligate heterodimers that preferentially pair wild-type partner domains, reducing off-target homodimeric cutting.
- **Double-strand break formation**: The nicked monomers combine to introduce a double-strand break with staggered overhangs that engage cellular repair (typically non-homologous end joining or homology-directed repair).

## Role in Synthetic Nucleases

- **Zinc finger nucleases ([[Zinc Finger|ZFNs]])**: FokI cleavage domain fused to zinc-finger arrays — the first broadly adopted programmable nuclease platform.
- **TALENs ([[TALE|TALE]] nucleases)**: FokI fused to transcription activator-like effector repeat arrays.
- **[[mitoTALENs]] / [[mitoZFNs]]**: Mitochondria-targeted variants in which a [[Mitochondrial Targeting Sequence]] directs the TALE/ZF–FokI fusion into the [[Mitochondrial Matrix]] to cleave mutant [[Mitochondrial DNA|mtDNA]] selectively, shifting [[Heteroplasmy]] toward wild-type genomes (Bacman et al., 2013, PMID 23242366).

## Documents

- [[mitoTALENs]]
  - FokI is the obligate-dimeric cleavage domain of mitoTALENs; two monomers must bind adjacent half-sites for mutant mtDNA cutting.
- [[mitoZFNs]]
  - FokI is the nuclease module of mitoZFNs, the first mtDNA-editing platform demonstrated in mammalian cells.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - Lists mitoTALENs/mitoZFNs (FokI-based) among heteroplasmy-shifting mtDNA-editing strategies.

## Connections

- [[TALE]] — Programmable DNA-binding module fused to FokI in TALENs and mitoTALENs.
- [[Zinc Finger]] — Alternative DNA-binding module fused to FokI in ZFNs and mitoZFNs.
- [[mitoTALENs]] — TALE–FokI nucleases for mtDNA editing.
- [[mitoZFNs]] — Zinc-finger–FokI nucleases for mtDNA editing.
- [[Mitochondrial DNA]] — The genome cleaved by FokI-based mtDNA editors.
- [[Heteroplasmy]] — Selective mutant cleavage shifts heteroplasmy.
- [[Mitochondrial Targeting Sequence]] — Directs FokI fusions into the mitochondrial matrix.

## Linking Summary

- New links added: [[TALE]], [[Zinc Finger]], [[mitoTALENs]], [[mitoZFNs]], [[Mitochondrial DNA]], [[Heteroplasmy]], [[Mitochondrial Targeting Sequence]]
- Suggested new entity notes to create: none
- Strong connections to strengthen:
    - [[FokI]] ↔ [[mitoTALENs]]
    - [[FokI]] ↔ [[mitoZFNs]]
