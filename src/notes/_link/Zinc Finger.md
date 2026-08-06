---
title: Zinc Finger
description: A conserved protein structural motif in which zinc ions coordinate cysteine and histidine residues to form a compact DNA-binding domain; arrays of zinc fingers are used as programmable DNA-recognition modules in zinc finger nucleases and mitoZFNs.
protected: false
created: 2026-08-01
updated: 2026-08-01
tags:
  - protein-domain
  - gene-editing
  - genetic-tool
  - molecular-biology
aliases:
  - zinc finger
  - zinc finger domain
  - Cys2-His2
  - ZF
  - ZFN
url: #
source: #
---

# Zinc Finger

A **zinc finger** is a small, conserved protein structural motif in which one or more zinc ions are coordinated by cysteine and histidine residues, folding the polypeptide into a compact domain that binds DNA, RNA, or protein. The canonical **Cys2-His2 (C2H2)** zinc finger — the most abundant DNA-binding domain in eukaryotic transcription factors — comprises ~30 amino acids folded into a beta-hairpin and an alpha-helix; the alpha-helix inserts into the DNA major groove, with a few key residues making base-specific contacts. Because individual fingers recognize ~3 bp of DNA, tandem arrays of 3–6 fingers provide programmable, sequence-specific DNA recognition used in synthetic nucleases, transcription factors, and the mtDNA-editing platform [[mitoZFNs]].

## Structure and DNA Recognition

- **Cys2-His2 motif**: The consensus sequence is (Tyr/Phe)-X-Cys-X(2-4)-Cys-X3-Phe-X5-Leu-X2-His-X3-5-His, with the two cysteines and two histidines coordinating a single zinc ion.
- **Alpha-helix contacts**: Residues at positions -1, 2, 3, and 6 of the recognition helix contact bases in the major groove; a canonical recognition code (e.g., Arg→G, Asp→C) allows semi-rational design.
- **Array architecture**: Fingers are connected by flexible linkers; adjacent fingers bind tandem subsites, extending target specificity to ~9–18 bp for 3–6 finger arrays.
- **Context dependence**: Unlike the 1:1 [[TALE]] code, zinc finger recognition depends on neighboring residues, making engineering more context-sensitive and requiring empirical validation.

## Role in Synthetic Nucleases

- **Zinc finger nucleases (ZFNs)**: Fusion of a zinc finger array to the obligate-dimeric [[FokI]] cleavage domain yields a site-specific nuclease; two ZFN monomers binding adjacent half-sites dimerize FokI to introduce a double-strand break. ZFNs were the first broadly adopted programmable nuclease platform.
- **[[mitoZFNs]]**: Mitochondria-targeted ZFNs in which a [[Mitochondrial Targeting Sequence]] directs the zinc-finger–FokI fusion into the [[Mitochondrial Matrix]] to cleave mutant [[Mitochondrial DNA|mtDNA]] selectively, shifting [[Heteroplasmy]] toward wild-type genomes (Gammage et al., 2014). This was the first mtDNA-editing platform demonstrated in mammalian cells.

## Applications and Limitations

- **Applications**: Genome editing, transcriptional regulation, and heteroplasmy shifting in mitochondrial disease and aging.
- **Limitations**: Context-sensitive specificity requires custom design and validation; large repetitive arrays are difficult to deliver; off-target binding can reduce wild-type mtDNA copy number.

## Documents

- [[mitoZFNs]]
  - Zinc finger arrays are the DNA-binding component of mitoZFNs, engineered for single-nucleotide allele discrimination in mtDNA.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - Lists mitoZFNs among mtDNA-editing strategies for heteroplasmy shifting.

## Connections

- [[FokI]] — The nuclease domain fused to zinc finger arrays in ZFNs and mitoZFNs.
- [[mitoZFNs]] — Zinc-finger-based mitochondria-targeted nucleases.
- [[TALE]] — An alternative programmable DNA-binding module with a simpler 1:1 recognition code.
- [[Mitochondrial DNA]] — The target genome for zinc-finger-based mtDNA editing.
- [[Heteroplasmy]] — Selective mutant cleavage shifts heteroplasmy.
- [[Mitochondrial Targeting Sequence]] — Directs zinc-finger–FokI fusions into the matrix.

## Linking Summary

- New links added: [[FokI]], [[mitoZFNs]], [[TALE]], [[Mitochondrial DNA]], [[Heteroplasmy]], [[Mitochondrial Targeting Sequence]]
- Suggested new entity notes to create: none
- Strong connections to strengthen:
    - [[Zinc Finger]] ↔ [[mitoZFNs]]
    - [[Zinc Finger]] ↔ [[FokI]]
