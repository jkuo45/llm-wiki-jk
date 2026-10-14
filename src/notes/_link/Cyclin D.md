---
title: Cyclin D
description: 'Cyclin D (CCND1/CCND2/CCND3) is the family of G1/S-specific regulatory subunits that activate CDK4 and CDK6 to phosphorylate Retinoblastoma Protein, release E2F, and commit cells to S phase; CCDN1 amplification and overexpression are among the most common oncogenic lesions in human cancer.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - cell-cycle
  - cancer
  - signaling
  - transcription-factor
aliases: [CCND, Cyclin D1, Cyclin D2, Cyclin D3, CCND1, CCND2, CCND3, BCL-1, PRAD1]
---

# Cyclin D

## Overview

"Cyclin D" is a **family name**, not a single protein. Three paralogs are
encoded in humans — **CCND1** (Cyclin D1), **CCND2** (Cyclin D2), and **CCND3**
(Cyclin D3). They are functionally interchangeable G1/S-specific cyclins whose
shared job is to activate [[CDK4 6]] so that [[Retinoblastoma Protein|Rb]] is
phosphorylated and [[E2F]] transcription factors are released. Cyclin D1 was
the first member identified, in 1991, by functional complementation in budding
yeast lacking CLN genes; it was originally named BCL-1/PRAD1 because it is
frequently translocated in mantle zone B-cell lymphomas and is estrogen-
responsive in breast cancer.

A standalone note exists for the most-studied member: [[Cyclin D1]].

## Structure and domains

All three D-type cyclins are ~295 residues and share a common cyclin box
fold, but they are **not** interchangeable at the regulatory level.

- A conserved **cyclin box** (residues ~27–152) forms the primary docking
  surface for the CDK4/6 kinase domain and supplies substrate specificity to
  the holoenzyme.
- A second, weaker interaction surface (residues ~262–295) contacts the
  N-lobe of CDK4/6 and further stabilizes the complex.
- Cyclin D1 uniquely carries a C-terminal **PEST degradation motif** (a
  sequence rich in proline, glutamate, serine, and threonine) that targets the
  protein for ubiquitin-dependent turnover at the G1/S transition. Cyclin D2
  lacks a comparable PEST element and is substantially more stable, which is
  why it is a far less common oncogene but is a robust mitogen in B-lineage
  and germinal-center B cells.
- Cyclin D1 has been reported to carry an additional C-terminal **CRY-box**
  that modulates transcription and, in some reports, nuclear localization.

> [!info] Cyclin D is not a transcription factor
> Unlike Cyclin E or Cyclin A, Cyclin D-type subunits have little intrinsic
> enzymatic or DNA-binding activity. Their dominant function is as regulatory
> partners that set CDK4/6 substrate specificity and, independently, as
> non-catalytic transcriptional coactivators (e.g. with [[ATF5]], or with
> histone acetyltransferases such as p300/CBP) that do not require the kinase.

## Mechanism of action

1. **Mitogen sensing.** Growth-factor and integrin signals drive transcription
   of *CCND1* and, more slowly, stabilize the mRNA and protein. Cyclin D
   accumulates in the cytoplasm in quiescent cells and translocates to the
   nucleus upon stimulation.
2. **Complex assembly.** Nuclear Cyclin D binds CDK4 or CDK6. The assembly and
   nuclear import of the complex is facilitated by a ternary complex with the
   CDK inhibitor [[CDKN1B]] (p27), which paradoxically promotes nuclear
   translocation and nuclear localization of the D-type-cyclin–CDK4 complex
   while modulating its activity.
3. **Rb phosphorylation.** The complex mono-phosphorylates Rb early in G1, a
   "hypophosphorylation" step that primes the protein. Later, Cyclin E–CDK2
   hyperphosphorylates Rb, releasing E2F.
4. **E2F activation.** Free E2F transactivates genes required for DNA
   replication and nucleotide supply, committing the cell to the G1/S
   transition.
5. **Turnover.** At G1/S, MAP kinase phosphorylation of Thr283 licenses
   D-type cyclins for ubiquitination by the **CRL4^AMBRA1** (DCAF3) E3 ligase
   complex, followed by proteasomal degradation. Cyclin D3 can also be
   targeted by **SCF^FBXL2**. Loss of AMBRA1 stabilizes all three D-type
   cyclins, hyperphosphorylates Rb, and causes developmental and
   hyperproliferative phenotypes.
6. **Transcriptional co-regulation.** Independently of CDK4/6, Cyclin D binds
   and modulates the activity of a subset of Hox proteins (weakest for
   anterior, strongest for HOXB1/HOXC9/HOXD10) and of the transcription factor
   ATF5.

> [!warning] Cyclin D is a *sensor*, not just a driver
> Cyclin D–CDK4/6 complexes are best understood as integrators of
> mitogenic and anti-mitogenic signals rather than as a simple throttle. Cells
> can enter G1 with cyclin D present but with Rb hypophosphorylated, and
> cyclin D levels integrate signals from well before the G1/S window — which is
> why cyclin D translation rate in the *mother* cell cycle can bias the
> proliferation-versus-quiescence decision of the *daughter* cell.

## Physiological role

- **Tissue patterning.** Cyclin D1 is expressed in many renewing epithelia;
  Cyclin D2 is prominent in B-lymphocyte progenitors and is required for
  normal B-cell development; Cyclin D3 is broadly expressed at lower levels
  and is largely redundant with D1 in mice (D3-null animals are viable).
- **Stem and progenitor cell control.** Cyclin D1 drives proliferation of
  hepatic and other tissue progenitors after injury and is required for
  postnatal mammary gland development.
- **Antimitogenic integration.** Contact inhibition, TGF-β signalling, DNA
  damage, and nutrient/energy state all converge on the Cyclin D–CDK4/6–Rb
  axis, either by blocking cyclin expression or by engaging INK4
  ([[CDKN2A]]) and CIP/KIP inhibitors.

## Pathology and clinical relevance

> [!important] Cyclin D1 is one of the most frequently deregulated oncogenes
> - **Amplification/overexpression:** 11q13 amplification of *CCND1* occurs in
>   roughly 20–30% of breast cancers and is associated with high ER expression,
>   which makes cyclin D1 status historically a surrogate for hormone
>   receptor status. Cyclin D1 overexpression is also common in mantle cell
>   lymphoma, colorectal cancer, and endometrial cancer.
> - **Translocation:** the *CCND1*–IGH translocation t(11;14)(q13;q32)
>   defines mantle zone B-cell lymphoma and is the origin of the "BCL-1"
>   name.
> - **Therapeutic target:** [[CDK4 6]] inhibitors are the most direct
>   pharmacological consequence. Palbociclib, ribociclib, and abemaciclib
>   are approved in HR-positive/HER2-negative breast cancer, and abemaciclib
>   extends adjuvant therapy. Their mechanism is *not* purely cytostatic:
>   CDK4/6 inhibition also drives senescence in many contexts, remodels the
>   tumour immune microenvironment, and can produce the paradoxical effect of
>   increased AMBRA1 loss conferring resistance via redistribution of D-type
>   cyclins onto CDK2.
> - **Resistance:** amplification of CDK2/cyclin E, RB1 loss, CDK6
>   upregulation, and E2F-driven bypass programs are recurring resistance
>   mechanisms; loss of AMBRA1 is also reported to reduce CDK4/6-inhibitor
>   sensitivity.

> [!warning] Non-oncologic roles
> Cyclin D1 also participates in DNA repair (homologous recombination), in
> mitochondrial metabolism and redox homeostasis, and in neuronal
> differentiation — hence its interest outside cancer biology proper.

## Documents

- [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]] — Cyclin D–CDK4/6 and Cyclin E–CDK2 drive G1/S passage; Cyclin D translation rate in the mother cell cycle influences the daughter's proliferation-versus-quiescence decision.

## Connections

- [[CDK4 6]] — Cyclin D is the exclusive regulatory partner that activates CDK4/6; the kinase activity is meaningless without the cyclin.
- [[Retinoblastoma Protein]] — the principal substrate; mono-phosphorylated early in G1 and hyperphosphorylated by Cyclin E–CDK2 at G1/S, releasing E2F.
- [[E2F]] — the transcription factor whose liberation is the point of the Cyclin D–CDK4/6–Rb cascade; [[E2F1]] is a specific member.
- [[CDKN2A]] — INK4 inhibitors bind CDK4/6 directly and block Cyclin D complex formation, whereas the CIP/KIP inhibitor [[CDKN1B]] promotes Cyclin D–CDK4 nuclear assembly.
- [[CDKN1B]] — p27 acts as a chaperone as well as an inhibitor: it is required for efficient nuclear translocation of Cyclin D–CDK4, then released by Cyclin E–CDK2.
- [[Cyclin D1]] — the specific paralog covered separately, and the one most often meaning when "cyclin D" is used in a clinical context.
- [[AMPK]] — energy stress acts on the same Rb node indirectly, by inhibiting upstream growth signalling and, in AMPK-active states, restraining Cyclin D–CDK4/6 output.
- [[Quiescence]] — Cyclin D abundance and translation rate are the readouts of the proliferation-versus-quiescence decision.

## Linking Summary

- New links added: [[CDK4 6]], [[CDKN1B]], [[CDKN2A]], [[AMPK]], [[Quiescence]]
- Suggested notes to create: [[CCND1]], [[CCND2]], [[CCND3]], [[CRL4]], [[AMBRA1]], [[FBXL2]], [[Hox]], [[Palbociclib]], [[Ribociclib]], [[Abemaciclib]], [[INK4]], [[CIP/KIP]], [[PEST motif]]
- Strong connections to strengthen: [[Cyclin D]] ↔ [[CDK4 6]], [[Cyclin D]] ↔ [[Cyclin D1]], [[Cyclin D]] ↔ [[AMPK]]