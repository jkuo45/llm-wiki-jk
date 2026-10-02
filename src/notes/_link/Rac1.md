---
title: Rac1
description: 'Rac1 (Ras-related C3 botulinum toxin substrate 1) is a 21 kDa Rho-family
  small GTPase and the ubiquitously expressed prototype of the Rac subfamily.
  It cycles GDP/GTP under control of GEFs, GAPs and RhoGDI, and via PAK, WAVE
  and NADPH oxidase controls lamellipodia, adhesion, gene expression and the
  respiratory burst.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - gtpase
aliases: [Ras-related C3 Botulinum Toxin Substrate 1, RAC1, Rac1b, small GTPase Rac1]
---

# Rac1

Rac1 is a 21 kDa Rho-family small GTPase, the ubiquitously expressed
prototype of the [[Rac GTPase]] subfamily. It was originally identified as the
substrate of *Clostridium botulinum* C3 exoenzyme — the source of "ras-related
C3 botulinum toxin substrate" — and is now one of the best-characterised
signalling switches in the cell.

## Structure and domains

Rac1 has the canonical Ras-superfamily architecture shared by [[Rac GTPase]]
members:

- **G domain** (~residues 1–166) with the phosphate-binding P-loop
  (Gx4GKS/T), Switch I, Switch II, and the allosteric N/TKXD and ExSAK motifs.
  An **insert region** (β2–β3, α3/L7) adjacent to switch II is characteristic
  of Rho-family GTPases and shapes effector selectivity. Conserved Gly12 and
  Gln61 (Rac1 numbering) are the residues most often mutated in oncogenic
  alleles.
- **Hypervariable region (HVR)** at the C-terminus, containing a **polybasic
  region** — which also carries a nuclear-localization sequence — a
  **proline-rich segment** that binds SH3 domains, and the **CAAX box**.
  Geranylgeranylation of the CAAX cysteine, followed by endoproteolytic
  cleavage and carboxyl methylation, is what makes Rac1 a membrane protein;
  without it Rac1 is cytosolic/nuclear.

The HVR is not merely a targeting tag. It contributes directly to effector
binding — a basic-region mutant reduces PAK1 autophosphorylation, and Rac1's
C-terminus binds PIP5K, DGK, SmgGDS and Nedd4 — and the C-terminus can loop
back onto switch II, so nucleotide state and effector affinity are coupled.

## Mechanism

Rac1 is a binary switch. In the resting state most Rac1 is GDP-bound and held
in the cytosol by RhoGDI. Activation occurs in two steps:

1. Receptor stimulation ([[EGFR]], [[PDGFR]], [[Insulin Receptor]] integrin
   [[Integrin]], GPCRs) recruits and activates a RacGEF — Tiam1, β-PIX,
   P-REX1, Vav, DOCK — which catalyzes GDP release.
2. GTP-loaded Rac1 docks effectors. In the back of the cell, GDI is displaced
   and Rac1 reaches the plasma membrane.

Termination is by GAP-accelerated hydrolysis plus RhoGDI extraction. Rac1
activity is therefore spatially and temporally restricted, and signaling
specificity between Rac1, RAC2 and RAC3 derives mostly from the HVR and from
differences in GEF preference and in effector docking dynamics.

**Downstream effectors:**

- **WAVE regulatory complex.** Rac1-GTP binds IRSp53, which relieves WAVE2
  autoinhibition; WAVE2 then activates Arp2/3, generating branched actin and
  the lamellipodia and membrane ruffles at a migrating cell's leading edge.
- **PAK1** (and PAK2/3) via CRIB/GBD, linking Rac1 to [[ERK]]/[[MAPK]] and
  [[JNK]].
- **NADPH oxidase.** Rac1-GTP is required to assemble the Nox complex, so
  Rac1 is upstream of the phagocyte respiratory burst and of much
  [[Reactive Oxygen Species]] signaling.
- **[[NF-κB]].** Rac1 drives transcriptional output independent of its
  cytoskeletal role.

## Physiological roles

Rac1 is required for [[Cell Migration]] (leading-edge protrusion at the front
counterbalanced by [[RhoA]] at the rear), nascent [[Focal Adhesion]]
formation, [[Cell Adhesion]], [[Phagocytosis]] in macrophages and
[[Neutrophils]], neutrophil chemotaxis, and epithelial polarity.
Rac1−/− mice are viable but show impaired [[Cell Migration]] in multiple
tissues, defective [[Phagocytosis]] and reduced bone resorption by
[[Osteoclast]]s, since osteoclastogenesis requires Rac1-dependent
[[NADPH Oxidase]]-derived ROS. Rac1 also drives a growth-factor-independent
inflammatory program (NF-κB, ROS) and is required in [[Angiogenesis]].

## Disease relevance

- **[[Melanoma]].** The **P29S** substitution in switch I occurs in 4–9% of
  sun-exposed melanomas. It is a fast-cycling allele: reduced GTP hydrolysis
  and enhanced binding to PAK1, MLK3 and the WAVE regulatory complex, without
  the effect on intrinsic exchange seen in the RAC1B splice variant.
  Constitutively active mutants (G12V, Q61K) have been found in advanced
  germ-cell tumors.
- **RAC1B splice variant.** Alternative inclusion of exon 3b inserts 19 amino
  acids just C-terminal to switch II, producing a fast-cycling, largely
  GTP-bound protein that cannot bind RhoGDI, does not induce lamellipodia, and
  signals poorly to PAK1 and JNK. RAC1B is overexpressed in [[Breast Cancer]],
  [[Colorectal Cancer]] and [[Lung Cancer]] and acts largely as an antagonist
  of RAC1 in [[TGF-beta Signaling Pathway|TGF-β]] responses.
- **Other tumors.** Rac1 upregulation cooperates with [[KRAS]] and BRAF
  driving proliferation, and Rac1 appears in TGF-β-driven [[EMT]].
- **Neurodegeneration.** Rac1 controls dendrite formation and maturation;
  altered RAC1 splicing and elevated RAC1B have been reported in
  [[Alzheimer's Disease]] brains.

> [!warning] Therapeutic reality check
> No approved drug targets Rac1 directly. Clinical targeting is upstream:
  RTK and MEK inhibitors, and PAK inhibitors (FRAX597, IPA-3) in
  preclinical development. Rac1–GEF interaction inhibitors (NSC23766,
  EHop-016) are tool compounds with inadequate potency for the clinic.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — states that mTORC2 controls the actin cytoskeleton partly through the GTP loading of RhoA and Rac1, alongside PKCα and paxillin.

## Connections

- [[Rac GTPase]] — the family note: Rac1 is the prototype, and family-level specificity versus RAC2/RAC3/RHOG comes from the hypervariable region.
- [[RhoA]] — its functional antagonist in migration: Rac1 protrudes the leading edge, RhoA contracts the rear; the balance sets cell shape and motility mode.
- [[PAK1]] — the principal kinase effector, connecting Rac1-GTP to MAPK signaling.
- [[Actin Cytoskeleton]] — Rac1's best-known output is Arp2/3-dependent branched actin and lamellipodia.
- [[mTORC2]] — mTORC2 loss reduces GTP loading of Rac1 and perturbs actin polymerization and cell morphology.
- [[NADPH Oxidase]] — Rac1-GTP is required to build the oxidase complex, so Rac1 sits upstream of ROS generation in phagocytes and osteoclasts.
- [[KRAS]] — frequently cooperates with Rac1 in transformation, and both signal through shared GEFs.

## Linking Summary

- New links added: [[Rac GTPase]], [[RhoA]], [[PAK1]], [[Actin Cytoskeleton]], [[NADPH Oxidase]], [[NF-κB]], [[ERK]], [[MAPK]], [[JNK]], [[EGFR]], [[PDGFR]], [[Insulin Receptor]], [[Integrin]], [[Focal Adhesion]], [[Cell Adhesion]], [[Cell Migration]], [[Phagocytosis]], [[Neutrophils]], [[Reactive Oxygen Species]], [[Melanoma]], [[KRAS]], [[BRAF]], [[Breast Cancer]], [[Colorectal Cancer]], [[Lung Cancer]], [[Alzheimer's Disease]], [[EMT]], [[Osteoclast]], [[mTORC2]], [[Rac1b]], [[Arp2/3]], [[PAK2]], [[PAK3]], [[RhoGDI]]
- Suggested notes to create: [[Rac1b]], [[Arp2/3]], [[PAK3]], [[RhoGDI]], [[IRSp53]], [[WAVE Regulatory Complex]], [[Tiam1]] — removed as already existing: PAK2, SmgGDS
- Strong connections to strengthen: [[Rac1]] ↔ [[Rac GTPase]], [[Rac1]] ↔ [[RhoA]], [[Rac1]] ↔ [[NADPH Oxidase]], [[Rac1]] ↔ [[PAK1]]