---
title: mitoZFNs
description: Mitochondria-targeted zinc finger nucleases that selectively cleave mutant mtDNA to shift heteroplasmy toward wild-type genomes; the first demonstrated mtDNA-editing approach for mitochondrial disease.
created: 2026-07-31
updated: 2026-07-31
tags:
  - genetic-tool
  - gene-editing
  - mitochondria
  - therapeutic-strategy
aliases:
  - mitoZFN
  - mitochondrial ZFN
---

# mitoZFNs

**mitoZFNs** (mitochondria-targeted zinc finger nucleases) are engineered nucleases that selectively cleave mutant [[Mitochondrial DNA|mtDNA]] inside mitochondria to shift heteroplasmy toward wild-type genomes. Each monomer fuses a zinc-finger DNA-binding array — engineered to recognize a specific mtDNA sequence containing a pathogenic mutation — with the FokI cleavage domain and a [[Mitochondrial Targeting Sequence]]. Because pathogenic mutations create allele-specific zinc-finger recognition sites, the mutant molecule is preferentially cleaved and degraded while wild-type mtDNA survives and repopulates the organelle. mitoZFNs were the first mtDNA-editing platform demonstrated in mammalian cells and remain a benchmark for heteroplasmy shifting.

## Design and Mechanism

- **Zinc finger array**: Tandem Cys2-His2 zinc fingers are assembled to recognize 3–6 bp per finger across a target sequence spanning the mutation, providing single-nucleotide discrimination between mutant and wild-type alleles.
- **FokI nuclease**: Obligate heterodimeric cleavage domain; two mitoZFN monomers bind adjacent half-sites and dimerize to introduce a double-strand break.
- **Mitochondrial import**: An N-terminal mitochondrial targeting sequence directs the fusion protein through the [[Translocase of the Outer Mitochondrial Membrane|TOM]]/[[Translocase of the Inner Mitochondrial Membrane|TIM]] import machinery into the [[Mitochondrial Matrix]].
- **Outcome**: Double-strand cleavage of the mutant molecule leads to its degradation; wild-type mtDNA replicates to restore copy number, progressively reducing mutant heteroplasmy over cell divisions.

## Applications in Mitochondrial Disease

> [!info] First Proof of Concept
> Minczuk et al. (2006, *Nucleic Acids Research*; PMID 16790528) demonstrated that mitochondria-targeted restriction-endonuclease-like activity could selectively degrade mtDNA carrying the m.8993 T>C mutation. Gammage et al. (2014, *Nature Communications*) then established mitoZFNs as a robust platform for heteroplasmy shifting in patient cybrids, including the common m.3243A>G [[MELAS]] mutation.

- **Heteroplasmy shifting**: The therapeutic goal is to reduce mutant load below the pathogenic threshold (roughly >60–80% for many mtDNA diseases) to restore [[Oxidative Phosphorylation]].
- **In vivo validation**: AAV-delivered mitoZFNs shifted heteroplasmy in the heart and muscle of m.5024C>T mouse models and, in later work, in a m.3243A>G model, demonstrating functional rescue.
- Positioned alongside [[mitoTALENs]] and other mtDNA-editing platforms as a strategy to **selectively eliminate mutant mtDNA** in mitochondrial disease and aging (Bautista & López-Cortés, 2026).

## Challenges and Limitations

- **Specificity engineering**: Each zinc-finger array must be custom-built and validated for allele discrimination; zinc finger binding is more context-sensitive than TALE repeats.
- **Delivery and import**: Efficient mitochondrial import of large fusion proteins remains a bottleneck; expression approaches are required since exogenous protein uptake into the matrix is limited.
- **Heteroplasmy dependence**: Only applicable to heteroplasmic mutations; homoplasmic genomes are not spared by selective elimination.
- **Off-target effects**: Nonspecific cleavage could transiently reduce wild-type copy number, delaying repopulation.

## Research and Geroscience Relevance

- Age-related somatic [[Mitochondrial DNA|mtDNA]] mutations contribute to mitochondrial dysfunction, [[Mitochondrial Dysfunction-Associated Senescence|MiDAS]], and stem cell aging (Bautista & López-Cortés, 2026).
- mtDNA-editing tools such as mitoZFNs are proposed as future interventions to reverse heteroplasmy-driven bioenergetic decline and its downstream inflammatory and senescence consequences.

## Documents

- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - Lists mitoZFNs among mtDNA-editing strategies used to selectively eliminate mutant mtDNA in the context of mitochondrial disease and aging.

## Connections

- [[Mitochondrial DNA]] — The target genome; mitoZFNs cleave mutant molecules selectively.
- [[Mitochondria]] — The organelle in which the editing reaction occurs.
- [[Mitochondrial Targeting Sequence]] — Directs import of the fusion protein into the matrix.
- [[mitoTALENs]] — The TALE-based counterpart with similar design principles.
- [[MELAS]] — A common mtDNA disease targeted for heteroplasmy shifting in proof-of-concept studies.
- [[Mitochondrial Dysfunction]] — The pathological state mitoZFNs aim to correct.
- [[Oxidative Phosphorylation]] — Respiratory function restored as mutant load is reduced.
- [[Mitochondrial Dysfunction-Associated Senescence]] — Downstream senescence program driven by mtDNA-driven mitochondrial failure.

## Linking Summary

- New links added: [[Mitochondrial DNA]], [[Mitochondria]], [[Mitochondrial Targeting Sequence]], [[mitoTALENs]], [[MELAS]], [[Mitochondrial Dysfunction]], [[Oxidative Phosphorylation]], [[Mitochondrial Dysfunction-Associated Senescence]], [[Translocase of the Outer Mitochondrial Membrane]], [[Translocase of the Inner Mitochondrial Membrane]]
- Suggested new entity notes to create: [[Heteroplasmy]], [[Zinc Finger]], [[FokI]], [[DdCBE]]
- Strong connections to strengthen: [[mitoZFNs]] ↔ [[Mitochondrial DNA]], [[mitoZFNs]] ↔ [[mitoTALENs]]
