---
title: Self-Renewal
description: Self-renewal is the intrinsic capacity of a stem cell to produce at least one daughter cell that retains the parent cell's undifferentiated identity, allowing indefinite propagation of the stem cell pool alongside differentiated progeny.
protected: false
created: 2026-10-01
updated: 2026-10-02
tags:
  - biological-process
  - stem-cell
  - cell-cycle
aliases: [Stem cell self-renewal, Self renewing capacity]
---

# Self-Renewal

**Self-renewal** is the defining functional property of a [[Stem Cells|stem cell]]: the ability to undergo a division that yields, on at least one side of the division, a daughter cell indistinguishable in state from the parent. Combined with the second property, potency (the ability to generate differentiated progeny), self-renewal defines a stem cell and separates it from a progenitor, which is already committed and can only divide finitely.

> [!info] Symmetry, asymmetry, and the division count
> Symmetric self-renewal expands the stem pool at the expense of differentiation; asymmetric self-renewal (one self-renewing, one differentiating daughter) holds pool size constant; symmetric differentiation depletes the pool. Tissue architecture dictates which mode predominates in a given organ — the intermingled "niche" model of stem and differentiating daughter cells.

## Molecular Control

Self-renewal is a transcriptional and chromatin state, not a single switch:

- **Pluripotency circuitry** — [[Oct4]], [[Sox2]] and [[Nanog]] form a self-reinforcing loop in [[Embryonic Stem Cells]]; high Oct4/Nanog favours self-renewal, whereas their loss triggers spontaneous differentiation. [[Klf4]] and c-Myc sit upstream as reprogramming factors.
- **Bivalent chromatin** — developmental promoters carry both activating (H3K4me3) and repressive (H3K27me3) marks held together by [[Polycomb Group Proteins]]; this poised state is resolved towards self-renewal genes when the programme is reinforced. [[Lin28]] sustains the let-7-resistant state that keeps proliferative programmes active.
- **Asymmetric determinants and cell-cycle architecture** — polarized determinants (Notch, Delta, Prickle, numb), oriented divisions, and a prolonged G1 phase with a low mitogen threshold (the "stem cell cycle") protect against differentiation.
- **Metabolic and niche control** — [[mTORC1]], hypoxic niche signalling, and intercellular paracrine loops set the threshold at which a stem cell divides while staying uncommitted.
- **Replicative capacity** — [[Telomerase]] (TERT) induction preserves division capacity; progressive shortening is a clock that eventually forces senescence or differentiation.

## Assay and Interpretation

Self-renewal is measured by **single-cell clonal assays**: plating one dissociated cell and scoring, after one or more passages, whether a colony can (a) be serially passaged and (b) still generate the full repertoire of tissue-appropriate lineages. Bulk proliferation assays cannot distinguish self-renewal from simple clonal expansion and are frequent sources of over-claiming; marker expression alone (e.g. Oct4 staining) is likewise insufficient.

## Therapeutic Relevance

[[Reprogramming]] exploits the same circuitry: forced expression of Oct4, Sox2, Klf4 and c-Myc reinstates a self-renewing state in fibroblasts, generating [[Induced Pluripotent Stem Cells]]. [[Partial Reprogramming]] and [[Rejuvenation]] strategies aim to restore a younger self-renewing transcriptional state without full pluripotency, avoiding [[Teratoma|tumour]] risk. Failure of self-renewal is also a core feature of [[Stem Cell Exhaustion]] and of many [[Aging|age-related]] tissue phenotypes, including hematopoietic and intestinal decline.

## Documents

- [[_document_ - Application of the Yamanaka Transcription Factors Oct4, Sox2, Klf4, and c-Myc from the Laboratory to the Clinic|Application of the Yamanaka Transcription Factors Oct4, Sox2, Klf4, and c-Myc from the Laboratory to the Clinic]] — describes how the OSKM factors interlock in a self-regulating loop, how Nanog acts through NuRD and Polycomb repressive complex 2 to sustain ES self-renewal, and cites the quantitative Oct-3/4 threshold separating self-renewal from differentiation.

## Connections

- [[Pluripotency]] — Pluripotency (capacity to form all three germ layers) and self-renewal are distinct but coupled: the pluripotency circuitry of Oct4/Sox2/Nanog is what actively suppresses differentiation and thereby sustains self-renewal.
- [[Nanog]] — Nanog is required for the maintenance of self-renewal in embryonic stem cells; its loss drives differentiation, and it recruits the NuRD and Polycomb complexes to lock the pluripotency network.
- [[Oct4]] — Oct4 expression level is the classic switch: high levels specify self-renewal, low levels specify differentiation (Niwa/Nishiyama, quantitative ES-cell model).
- [[Lin28]] — Lin28 blocks let-7 maturation, which relieves repression of proliferative and self-renewing transcripts and links developmental timing to the stem cell state.
- [[Hematopoietic Stem Cell]] — The haematopoietic system is the classic case where self-renewal is lifelong and quiescent: HSCs divide roughly once per year yet still repopulate the entire blood tree after ablation.
- [[Stem Cell Exhaustion]] — Loss of self-renewal capacity with age is the definition of exhaustion; restoring the circuitry is the therapeutic goal of rejuvenation and partial-reprogramming approaches.
- [[Partial Reprogramming]] — Partial reprogramming deliberately re-engages the self-renewal circuitry without reaching pluripotency, which is the entire risk-management strategy of the field.
- [[Reprogramming]] — Reprogramming is the inverse experimental problem: forcing a differentiated cell back into a self-renewing state by installing the pluripotency factors.

## Linking Summary

- New links added: [[Delta]], [[Notch]], [[H3K4me3]], [[G1 phase]], [[Microenvironment]]
- Suggested notes to create: [[Asymmetric Division]], [[Stem Cell Niche]], [[Delta]]
- Strong connections to strengthen: [[Self-Renewal]] ↔ [[Stem Cells]], [[Self-Renewal]] ↔ [[Induced Pluripotent Stem Cells]], [[Self-Renewal]] ↔ [[Telomerase]]
