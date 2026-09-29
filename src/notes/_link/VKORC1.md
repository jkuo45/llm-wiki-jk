---
title: VKORC1
description: VKORC1 is the 163-residue endoplasmic-reticulum membrane oxidoreductase that recycles vitamin K epoxide back to vitamin K hydroquinone, sustaining gamma-carboxylation of clotting factors, and is the pharmacological target of warfarin.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - drug-target
aliases: [Vitamin K Epoxide Reductase Complex 1, VKOR, VKORC, hsVKOR]
---

# VKORC1

**VKORC1** is the small integral membrane protein that runs the [[Vitamin K]] cycle. It
sits in the [[Endoplasmic Reticulum|ER]] membrane, reduces vitamin K epoxide (KO) first to
the quinone (K) and then to the hydroquinone (KH₂), and thereby supplies the reduced
vitamin K that [[gamma-Glutamyl Carboxylase]] requires to carboxylate clotting factors and
other vitamin K-dependent proteins. It is the target of [[Warfarin]], which makes it one of
the most pharmacogenetically important drug targets in medicine.

## Structure and catalytic mechanism

VKORC1 is unusually small: **163 amino acids**, four predicted transmembrane helices, and
no cofactors. Catalysis uses four conserved cysteines arranged as two working pairs:

- **Cys132 and Cys135** form the *active-site redox centre* — the C132XXC135 motif. Cys135
  is the nucleophile that attacks the substrate.
- **Cys43 and Cys51** are the *electron-relay* pair. They reduce the C132/C135 pair, and
  receive their reducing equivalents from ER glutathione or redox partner proteins.

The cycle, reconstructed from structures of human VKOR and the bacterial/Trachycera
homologs, runs as follows. A reduced Cys135 forms a charge-transfer complex with the
naphthoquinone ring of the substrate, whose isoprenoid tail occupies a hydrophobic tunnel
lined by Phe83, Phe87 and Tyr88. Substrate adduct binding drives the protein from an
*open* to a *closed* conformation, which positions Cys43 adjacent to the Cys51–C132
disulfide for thiol–disulfide exchange. Reduced Cys132 then resolves the Cys135–substrate
adduct, releasing the fully reduced product and returning the enzyme to the open,
non-catalytic state. Roughly half of cellular VKORC1 sits in this "fully oxidised" product-
release state at any moment.

> [!info] Topology is still debated
> A 4-transmembrane topology is supported by large-scale variant-effect sequencing of 2,695
> VKOR missense variants plus evolutionary-coupling analysis, and by a hydropathy/lipidation
> mutagenesis study reporting 3 TM. Structural work on bacterial and *Trachycera* homologs
> suggests 4. The cytoplasmic-versus-luminal disposition of the Cys43/Cys51 loop — which
> must face the cytosol to receive reducing equivalents — differs between models. Treat the
> exact arrangement as unsettled.

## Warfarin pharmacology

[[Warfarin]] binds in the same hydrophobic pocket as the vitamin K naphthoquinone,
stabilising the closed conformation but making no redox chemistry. Two features make binding
essentially irreversible in practice:

- **Tyr139 and Asn80** hydrogen-bond to the para-diketones of the quinone. Tyr139
  substitutions (notably the rodent Y139F) confer warfarin resistance by blocking this bond.
- The same two residues are *also* required for substrate binding and for raising the
  redox potential of the quinone. This dual role explains why VKORC1 binds VKAs with such
  high affinity.

Molecular-dynamics work identifies a distinct **warfarin-binding motif, TY139A**, in which
warfarin's coumarin ring makes a T-shaped π–π stack with Tyr139. Whether warfarin acts as a
pure competitive inhibitor with vitamin K is contested: reversible, irreversible, and
competitive/non-competitive mechanisms have all been proposed, and more recent work supports
reversible inhibition with >70% of activity restorable after washout.

> [!warning] Warfarin uncouples the two half-reactions
> Reducing KO to KH₂ is a four-electron process delivered as two two-electron steps. A
> 2018 dissection found that warfarin inhibits the *overall* carboxylation-supporting
> activity ~400-fold more strongly than KO→K reduction itself (only two- to threefold), and
> inhibits K→KH₂ reduction much less than the overall reaction. The implication is that
> warfarin breaks a cooperation between VKORC1 and a **second, warfarin-resistant
> vitamin K quinone reductase** that is present in liver but not necessarily in every
> tissue — which is why vitamin K rescues warfarin overdose, and why tissues may differ in
> their sensitivity.

## Genetic variation

VKORC1 is one of the largest contributors to warfarin dose variability.

- *rs9923231* (−1639G>A) and *rs9934438* (*1173T>C*) are associated with **lower** dose
  requirements (~24–26 mg/week vs ~35 mg/week); *rs7294* (9041A) with higher requirements
  (~40 mg/week).
- Combined with *CYP2C9* genotype, age, body size and INR, VKORC1 explains roughly a quarter
  of the variance in stabilised dose — the single largest genetic contributor.
- Rare coding variants cause warfarin resistance (>105 mg/week) or sensitivity
  (<10 mg/week). Large-scale functional data indicate resistance arises almost entirely
  from variants that **abrogate drug binding**, not from increased enzyme abundance.
- Homozygous loss-of-function variants cause vitamin K-dependent clotting factor deficiency
  of type 2 (VKCFD2), presenting with bleeding diathesis in infancy.

## Paralogue and non-haemostatic roles

**VKORC1L1** (formerly TMEM173) is a tissue-restricted paralog that reduces the quinone but
has minimal epoxide-reductase activity; it supports bone mineralisation and inhibits
vascular calcification by generating vitamin K for the matrix Gla protein
carboxylation pathway. This makes the VKOR axis relevant to
[[Osteoporosis]] and to ectopic calcification in chronic kidney disease, not only to
[[Anticoagulation]].

## Connections

- [[Vitamin K Epoxide Reductase]] — VKORC1 is the protein this note's parent topic names;
    the two notes cover the same enzyme from the pathway and the pharmacology sides.
- [[Warfarin]] — the principal clinical inhibitor of VKORC1; all genotype–dose relationships
  flow from this interaction.
- [[Vitamin K]] — the substrate cycle VKORC1 runs; without it the carboxylase runs out of
  reduced cofactor within minutes.
- [[Osteoporosis]] — VKORC1L1's vitamin K supply drives matrix Gla protein carboxylation
  that inhibits bone resorption and ectopic calcification.
- [[Anticoagulation]] — the therapeutic category that exists because VKORC1 can be
  pharmacologically shut down.
- [[SIRT1]] — NAD+-dependent sirtuin activity is linked to vitamin K cycle flux and to
  clotting factor carboxylation in aged vessels; direct regulation of VKORC1 by SIRT1 is
  not firmly established.
- [[Endoplasmic Reticulum]] — the membrane compartment VKORC1 resides in and from which it
  receives reducing equivalents.

## Documents

- [[Warfarin]]
  - Source for VKORC1 as warfarin's molecular target and for the genotype–dose relationships
    that make the gene pharmacogenetically actionable.

## Linking Summary

- New links added: [[Warfarin]], [[Vitamin K]], [[Anticoagulation]], [[Osteoporosis]],
  [[Endoplasmic Reticulum]], [[SIRT1]], [[VKORC1L1]], [[gamma-Glutamyl Carboxylase]]
- Suggested notes to create: [[gamma-Glutamyl Carboxylase]], [[VKORC1L1]],
  [[Vitamin K Cycle]], [[Vitamin K-Dependent Clotting Factor Deficiency Type 2]],
  [[Matrix Gla Protein]], [[Tyr139]]
- Strong connections to strengthen: [[VKORC1]] ↔ [[Warfarin]],
  [[VKORC1]] ↔ [[Vitamin K Epoxide Reductase]]
