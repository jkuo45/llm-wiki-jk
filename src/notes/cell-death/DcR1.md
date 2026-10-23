---
title: DcR1
description: DcR1 (TRAIL-R3/TNFRSF10C) is a TNF-superfamily decoy receptor that sequesters TRAIL without a functional death domain, sparing normal cells and contributing to tumour resistance to TRAIL-based therapies.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [receptor, apoptosis, cell-death, cancer]
url: #
source: #
aliases: [TRAIL-R3, DCR1, TNFRSF10C]
---

# DcR1

## Overview

**DcR1** (decoy receptor 1), also known as TRAIL-R3, DCR1, or TNFRSF10C, is a soluble and membrane-associated member of the TNF receptor superfamily that binds [[TRAIL]] but cannot transduce an apoptotic signal. Its extracellular cysteine-rich domain is closely related to the ligand-binding domains of the functional death receptors [[DR4]] (TRAIL-R1) and [[DR5]] (TRAIL-R2), yet its cytoplasmic tail lacks a functional death domain, so it acts as a **sink** for TRAIL rather than as a signalling receptor. DcR1 is the principal explanation for the celebrated tumour selectivity of TRAIL: most normal tissues express decoy receptors, whereas many tumour cells do not.

## Structure & Domains

DcR1 is a product of *TNFRSF10C* that exists as a soluble glycoprotein (soluble DcR1, shed from the cell surface by proteolytic cleavage) and as a glycosylphosphatidylinositol-anchored membrane form whose cytoplasmic tail is devoid of a death domain. Its ectodomain retains the two CRD modules that bind TRAIL with high affinity, allowing it to form non-functional, ligand-independent complexes with TRAIL trimers.

## Mechanism of Action & Pathways

- **Ligand sequestration**: DcR1 binds TRAIL and either blocks TRAIL from reaching DR4/DR5 or co-assembles with them into mixed, signalling-incompetent complexes, lowering effective free ligand.
- **Caspase-8 modulation**: Because DcR1 contains a truncated death domain, it can still influence DISC assembly in cis or trans, dampening the efficiency of pro-[[Caspase-8]] recruitment and reducing the apoptotic threshold.
- **Distribution**: DcR1 expression is highest in normal tissues — notably liver, heart, lung, and haematopoietic compartments — which is why systemic TRAIL administration is comparatively well tolerated.

> [!info] Selectivity is relative, not absolute
> Decoy receptor expression is a protective buffer, not an on/off switch. Tumours that over-express DcR1 become TRAIL-resistant, but tumours that lose DcR1 can still resist TRAIL through other routes such as Caspase-8 silencing, FLIP up-regulation, or inactivation of downstream caspases.

## Physiological Function

DcR1 contributes to tissue homeostasis by modulating TRAIL tone in organs that express abundant TRAIL. It also participates in the clearance of soluble TRAIL, and DcR1 polymorphisms have been associated with autoimmune disease susceptibility and with the kinetics of TRAIL-containing membrane vesicles.

## Pathology & Clinical Relevance

- **Normal-cell sparing**: DcR1 (together with [[DcR2]]) underlies the therapeutic window of recombinant TRAIL and of TRAIL-receptor agonist antibodies, sparing hepatocytes and other normal cells.
- **Tumour resistance**: High DcR1 expression correlates with resistance to TRAIL-based therapy in several tumours and is an adverse prognostic marker.
- **Therapeutic exploitation**: Neutralising DcR1/DcR2 with blocking antibodies, or engineering TRAIL variants with reduced decoy-receptor affinity, is an active strategy to restore TRAIL sensitivity in resistant tumours.

## Documents

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]] — decoy receptors as a mechanism of extrinsic apoptosis evasion.

## Connections

- [[TRAIL]] — the ligand whose activity DcR1 sequesters
- [[DR4]] / [[DR5]] — the functional death receptors that DcR1 competes with
- [[DcR2]] — the second TRAIL decoy receptor, with a comparable but not identical tissue distribution
- [[Caspase-8]] — the initiator whose recruitment is dampened by decoy-receptor competition
- [[Apoptosis]] — the pathway DcR1 modulates rather than executes
- [[Cancer]] — decoy-receptor expression as a resistance mechanism and therapeutic target

## Linking Summary

- New entity note in `src/notes/cell-death/` (TRAIL-pathway receptor; no prior note existed).
- New links added: [[TRAIL]], [[DR4]], [[DR5]], [[DcR2]], [[Caspase-8]], [[Apoptosis]], [[Cancer]].
- Suggested new entity notes to create: [[Decoy Receptor]], [[TRAIL Receptor Agonist Antibodies]], [[c-FLIP]].
- Strong connections to strengthen: [[DcR1]] ↔ [[TRAIL]], [[DcR1]] ↔ [[DcR2]], [[DcR1]] ↔ [[DR5]].
