---
title: TALE
description: Transcription activator-like effectors, natural DNA-binding repeat arrays from Xanthomonas bacteria that can be reprogrammed to recognize specific DNA sequences; the DNA-binding domain used in mitoTALENs and other gene-editing tools.
protected: false
created: 2026-08-01
updated: 2026-08-01
tags:
  - molecular-biology
  - gene-editing
  - genetic-tool
  - protein
aliases:
  - TALE
  - TAL effector
  - transcription activator-like effector
  - transcription activator-like effector nuclease
url: #
source: #
---

# TALE

**Transcription activator-like effectors (TALEs)** are naturally occurring DNA-binding proteins secreted by the plant-pathogenic bacterium *Xanthomonas*, where they translocate into host nuclei and activate host gene expression to promote infection. Their DNA-binding domain consists of a series of near-identical **34-amino-acid repeat units**, each recognizing a single DNA base pair. Because the repeat array can be reprogrammed simply by changing two hypervariable amino acids per repeat (the "repeat-variable diresidue," RVD), TALE arrays provide a modular, programmable DNA-binding scaffold widely used to build custom gene-editing tools, including TALE nuclease (TALEN) fusions and transcription factors.

## Structure and DNA Recognition

- **Repeat array**: Each 34-residue repeat folds into a two-helix bundle; the repeat-variable diresidue (RVD) at positions 12–13 contacts one base of the target DNA. The canonical code is HD→C, NI→A, NG→T, NN→G/A (the latter specificity being context-dependent).
- **1:1 code**: TALE repeats follow an essentially one-repeat-to-one-base code, making them easier to program than zinc-finger arrays, which recognize 3–4 bp per finger with more context dependence.
- **N- and C-terminal regions**: A type III secretion signal and translocation domain are N-terminal; nuclear-localization signals and a transcriptional activation domain are C-terminal in natural effectors. Synthetic constructs typically retain only the DNA-binding array.
- **Stringency**: A thymine immediately 5' of the target site is generally required for optimal binding.

## Applications in Gene Editing

- **TALE nuclease (TALEN)**: Fusing a TALE array to a nuclease domain such as [[FokI]] produces a site-specific nuclease; two monomers binding adjacent half-sites dimerize the cleavage domain and introduce a double-strand break. TALENs were used for genome editing in cells and organisms before the CRISPR era.
- **[[mitoTALENs]]**: Mitochondria-targeted TALE–FokI fusions that cleave mutant [[Mitochondrial DNA|mtDNA]] selectively, shifting [[Heteroplasmy]] toward wild-type genomes (Bacman et al., 2013, PMID 23242366). A [[Mitochondrial Targeting Sequence]] directs import into the [[Mitochondrial Matrix]].
- **Synthetic transcription factors**: TALE fusions with activation/repression domains regulate endogenous gene expression without cutting DNA.

## Advantages and Limitations

- **Advantages**: Simple, modular 1:1 DNA-recognition code; high specificity; amenable to allele discrimination at single-nucleotide resolution — a key requirement for cleaving only mutant mtDNA.
- **Limitations**: Large repetitive constructs are difficult to synthesize and deliver; repeats can undergo homologous recombination in host cells; each array must be custom-designed and validated.

## Documents

- [[mitoTALENs]]
  - TALE arrays are the DNA-binding component of mitoTALENs, programmed to recognize pathogenic mtDNA mutations and direct selective cleavage.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - Lists mitoTALENs (TALE-based) among mtDNA-editing strategies for heteroplasmy shifting.

## Connections

- [[FokI]] — The nuclease domain fused to TALE arrays in TALENs and mitoTALENs.
- [[mitoTALENs]] — TALE-based mitochondria-targeted nucleases.
- [[Mitochondrial DNA]] — The target genome for TALE-based mtDNA editing.
- [[Heteroplasmy]] — Shifting mutant load is the therapeutic goal of TALE-based editing.
- [[Zinc Finger]] — An alternative programmable DNA-binding module with a different recognition code.

## Linking Summary

- New links added: [[FokI]], [[mitoTALENs]], [[Mitochondrial DNA]], [[Heteroplasmy]], [[Zinc Finger]]
- Suggested new entity notes to create: [[TALE nuclease]]
- Strong connections to strengthen:
    - [[TALE]] ↔ [[mitoTALENs]]
    - [[TALE]] ↔ [[FokI]]
