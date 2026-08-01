---
title: DdCBE
description: DddA-derived cytosine base editors, a class of programmable base-editing tools that make targeted C-to-T edits in mitochondrial DNA without creating double-strand breaks; an emerging approach to correct pathogenic mtDNA mutations.
protected: false
created: 2026-08-01
updated: 2026-08-01
tags:
  - genetic-tool
  - gene-editing
  - mitochondria
  - base-editing
  - therapeutic-strategy
aliases:
  - DdCBE
  - DddA-derived cytosine base editor
  - mitochondrial base editor
  - DddAtox
url: #
source: #
---

# DdCBE

**DddA-derived cytosine base editors (DdCBEs)** are programmable base-editing tools that catalyze targeted C-to-T nucleotide conversions within [[Mitochondrial DNA|mitochondrial DNA]] (mtDNA) without introducing double-strand breaks. They exploit **DddA**, a cytidine deaminase from the bacterium *Burkholderia cenocepacia*, which deaminates cytosine to uracil in dsDNA (unlike the ssDNA-specific deaminases used in nuclear base editing). In a DdCBE, a split DddA is fused to programmable DNA-binding domains — usually [[TALE|TALE]] repeat arrays — and a mitochondrial targeting sequence; dimerization of the split halves on target DNA restores deaminase activity, converting a targeted C to T and thereby correcting or introducing pathogenic mutations.

## Design and Mechanism

- **DddA (DddAtox)**: A double-stranded-DNA-specific cytidine deaminase that can operate on relaxed duplex DNA in the mitochondrial genome.
- **Split architecture**: DddA is split into two inactive halves, each fused to a TALE array targeting one strand; binding of both monomers on adjacent half-sites reassembles the active deaminase, confining editing to the targeted locus.
- **Mitochondrial targeting**: A [[Mitochondrial Targeting Sequence]] imports the fusion proteins into the [[Mitochondrial Matrix]] through the [[Translocase of the Outer Mitochondrial Membrane|TOM]]/[[Translocase of the Inner Mitochondrial Membrane|TIM]] machinery.
- **Outcome**: C→T (or G→A on the complementary strand) editing corrects a mutant base; because editing is nick-free, mtDNA is not degraded and the corrected sequence is retained. Uracil-DNA glycosylase inhibitor (UGI) is often co-delivered to bias repair toward retention of the edited base.

## Contrast with Nuclease-Based Editing

- **DdCBEs** correct the mutant sequence in situ, leaving both wild-type and corrected genomes intact — suitable for homoplasmic or high-heteroplasmy mutations.
- **[[mitoZFNs]] / [[mitoTALENs]]** instead cleave and destroy mutant genomes, relying on wild-type repopulation — only effective when a residual wild-type population exists (heteroplasmic states).
- DdCBEs therefore extend therapeutic reach to mutations where selective elimination is impossible, although bystander edits and editing efficiency remain challenges.

## Applications in Mitochondrial Disease

- Demonstrated correction of pathogenic point mutations in patient-derived cybrids and, with AAV delivery, in vivo in mouse models (e.g., the m.5024C>T [[MELAS]] model).
- Positioned alongside mitoZFNs and mitoTALENs as a strategy to manipulate mtDNA genotype in mitochondrial disease and aging (Bautista & López-Cortés, 2026).
- Broader mitochondrial genome editing also includes RNA-free approaches and engineered deaminases with improved specificity.

## Challenges and Limitations

- **Bystander edits**: Deamination can occur at nearby C residues within the editing window, requiring careful gRNA/TALE design.
- **Efficiency and specificity**: Editing rates are often moderate, and off-target mtDNA edits can arise.
- **Delivery**: Mitochondrial import of large protein fusions remains a bottleneck.

## Documents

- [[mitoTALENs]]
  - Positions DdCBE base editors alongside nuclease-based heteroplasmy shifting as complementary mtDNA-editing platforms.
- [[mitoZFNs]]
  - Notes DdCBEs as the base-editing counterpart to zinc-finger nuclease elimination.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - Discusses mtDNA-editing strategies, including base editing, to reverse heteroplasmy-driven mitochondrial decline.

## Connections

- [[Mitochondrial DNA]] — The genome targeted for C-to-T base editing.
- [[TALE]] — The programmable DNA-binding domain that guides DddA to its target.
- [[mitoTALENs]] — Nuclease-based counterpart that eliminates mutant mtDNA.
- [[mitoZFNs]] — Nuclease-based counterpart that eliminates mutant mtDNA.
- [[Heteroplasmy]] — Editing can correct mutant genomes regardless of heteroplasmy level.
- [[Mitochondrial Targeting Sequence]] — Directs DdCBE fusions into the matrix.
- [[MELAS]] — A common mtDNA disease targeted for base editing.

## Linking Summary

- New links added: [[Mitochondrial DNA]], [[TALE]], [[mitoTALENs]], [[mitoZFNs]], [[Heteroplasmy]], [[Mitochondrial Targeting Sequence]], [[MELAS]]
- Suggested new entity notes to create: none
- Strong connections to strengthen:
    - [[DdCBE]] ↔ [[Mitochondrial DNA]]
    - [[DdCBE]] ↔ [[mitoTALENs]] / [[mitoZFNs]]
