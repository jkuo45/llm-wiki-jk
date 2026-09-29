---
title: WIPI2
description: WIPI2 is a seven-bladed beta-propeller phosphoinositide effector that binds PI(3)P via its FRRG motif and recruits the ATG12-ATG5-ATG16L1 complex to the omegasome, licensing LC3/GABARAP lipidation at the phagophore and creating a positive feedback loop with PI3KC3-C1.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - autophagy
  - lipid-binding
aliases: [WIPI2b, WIPI2d, WD repeat domain phosphoinositide interacting protein 2, WIPI49-like protein 2, PROPPIN]
---

# WIPI2

**WIPI2** is one of four human WIPI proteins and is the linchpin connecting two compulsory
steps of autophagosome biogenesis: the local production of [[PtdIns3P]] by the class III
PI3K complex (PI3KC3-C1) and the lipidation of ATG8-family proteins by the
ATG12–ATG5–ATG16L1 "E3" complex. Without WIPI2, LC3-positive autophagosomes fail to form
even when the kinase, the lipid and the conjugation machinery are all present.

## Structure and lipid binding

WIPI2 belongs to the **PROPPIN** (proteins that bind phosphoinositides) family, whose
members adopt a **seven-bladed β-propeller** fold. Yeast has three (Atg18, Atg21, Hsv2);
humans have four orthologues, WIPI1–4. Binding is two-fold:

- A conserved **FRRG (Phe-Arg-Arg-Gly) motif** in blades 1 and 5 that recognises the
  headgroups of [[PtdIns3P]] and PI(3,5)P₂.
- A hydrophobic loop in **blade 6** that inserts into the acyl chain region, giving
  tight-but-reversible membrane association.

WIPI2 is produced in **six alternatively spliced isoforms** with overlapping function. WIPI2b
is the most studied in cells; WIPI2d is the workhorse for reconstitution.

## The WIPI2–ATG16L1 interaction

Dooley et al. (*Molecular Cell* 2014) identified WIPI2b as the direct recruiter of
ATG16L1. The interaction uses two solvent-exposed arginines, **R108 and R125**, in the
cleft between blades 2 and 3, which pair with acidic residues **E226 and E230** on
ATG16L1 (its WIPI2-interacting region, W2IR, residues 207–246).

The 1.85 Å crystal structure of WIPI2d bound to W2IR (Chang et al., *eLife* 2021) showed
the W2IR adopts an α-helix that docks into an electropositive, hydrophobic groove between
blades 2 and 3. Interface mutants (H85E, I92E, K88E) abolish E3 recruitment and LC3
lipidation on giant unilamellar vesicles; R108E/R125E reduce it substantially while
retaining PI(3)P binding.

Comparison across the four WIPIs splits them into two functional subclasses:

| WIPI | W2IR-binding | Function |
| --- | --- | --- |
| WIPI1, WIPI2 | Yes | Localise ATG12–5–16L1, drive ATG8 lipidation |
| WIPI3, WIPI4 | No — bind W3/W4IR | Localise ATG2, direct lipid supply to the nascent phagophore |

## Two distinct functions, not one

Reconstitution on giant unilamellar vesicles made an important distinction that cell-based
studies had conflated:

> [!info] WIPI2 does not merely tether the E3 — it activates it
> Ectopically tethering the E3 to a membrane **in the absence of WIPI2** is insufficient to
> support LC3 lipidation. WIPI2 is required for *functional* recruitment and is proposed to
> allosterically activate the E3 complex, possibly by reorienting it or by communicating
> between the WIPI2 binding site on ATG16L1 and the ATG3 binding site on ATG12–ATG5.
> Whether lipidation proceeds in *cis* on the omegasome or in *trans* across the gap to an
> adjacent phagophore remains unresolved.

WIPI2 and PI3KC3-C1 also **mutually promote each other's recruitment**, forming a positive
feedback loop: PI(3)P recruits WIPI2, WIPI2 recruits more PI3KC3-C1, which produces more
PI(3)P. This loop gives the rapid, burst-like kinetics observed for autophagosome formation.

## Physiological and disease relevance

- WIPI2 is essential for starvation-induced bulk [[Macroautophagy]] and for xenophagic
  clearance of *Salmonella typhimurium*: WIPI2b coats the phagophore membrane around the
  bacterium and is required for LC3 lipidation and bacterial restriction.
- ATG16L1 mutants that bind FIP200 but cannot bind WIPI2 cannot rescue autophagy in
  ATG16L1-deficient MEFs — so the two recruitment routes are not redundant.
- **Ageing relevance:** ectopic WIPI2b expression restores a normal rate of autophagosome
  biogenesis in aged neurons (Stavoe et al. 2019). Autophagic flux declines with age, and
  WIPI2 is one of the few nodes shown to be rescuable.
- **ULK1 phosphorylation:** WIPI2b is a novel ULK1 substrate. Phosphorylation at **S68**
  disrupts the electrostatic WIPI2b–ATG16L1 interface (>60% loss of binding; S68D fails to
  rescue ATG16L1 or LC3 puncta in WIPI2-KO cells), while phosphorylation at **S284**
  disrupts an amphipathic helix in the 6CD loop and reduces membrane association, with no
  effect on ATG16L1 or ULK1 binding. The proposed sequence is S68 first (releasing ATG16L1),
  then S284 (releasing WIPI2b from the membrane), allowing autophagosome maturation to
  proceed.

## Documents

- [[PtdIns3P]]
  - Supplies the omegasomal lipid signal WIPI2 reads, and the PI3KC3-C1–WIPI2 positive
    feedback loop that this note builds on.

## Connections

- [[PtdIns3P]] — the lipid WIPI2 binds; its local production by PI3KC3-C1 is the signal WIPI2
  reads to place autophagosome formation at ER-membrane omegasomes.
- [[Phagophore Assembly Site]] — the PI(3)P-rich membrane WIPI2 decorates and on which the
  ATG conjugation machinery is assembled.
- [[Atg16L1]] — WIPI2's direct binding partner; the W2IR helix docks into the WIPI2
  groove between blades 2 and 3.
- [[LC3]] — the ATG8 whose lipidation WIPI2 licenses; WIPI2 puncta are LC3-positive.
- [[Macroautophagy]] — the process WIPI2 makes possible by coupling lipid production to
  membrane ATG8 conjugation.
- [[Autophagy]] — the parent process; WIPI2 is specific to the macroautophagic route.
- [[ULK1]] — the kinase that phosphorylates WIPI2b at S68 and S284 to time WIPI2
  disengagement from the phagophore.
- [[FIP200]] — the parallel, non-redundant ATG16L1 recruitment route that WIPI2 must
  complement for full autophagy.
- [[PI3K]] — the class III kinase complex producing the lipid that WIPI2 senses.
- [[Aging]] — WIPI2b overexpression restores autophagosome biogenesis rates in aged
  neurons, making it a candidate point of intervention for age-related autophagic decline.
- [[Selective Autophagy]] and [[Mitophagy]] — WIPI2-dependent machinery is shared by these
  selective routes, though cargo recognition is set by receptors rather than by WIPI2.

## Linking Summary

- New links added: [[PtdIns3P]], [[Phagophore Assembly Site]], [[Atg16L1]], [[LC3]],
  [[Macroautophagy]], [[Autophagy]], [[ULK1]], [[FIP200]], [[PI3K]], [[Aging]],
  [[Selective Autophagy]], [[Mitophagy]]
- Suggested notes to create: [[Omegasome]], [[PROPPIN]], [[Phagophore]] — removed as already existing: Atg8
  [[ATG12]], [[ATG5]], [[Class III PI3K Complex]], [[ATG3]], [[ATG7]],
  [[Giant Unilamellar Vesicle]], [[Xenophagy]], [[Salmonella Typhimurium]]
- Strong connections to strengthen: [[WIPI2]] ↔ [[PtdIns3P]],
  [[WIPI2]] ↔ [[Atg16L1]], [[WIPI2]] ↔ [[Macroautophagy]]
