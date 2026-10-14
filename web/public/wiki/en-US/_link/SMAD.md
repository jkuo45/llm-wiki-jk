---
title: SMAD
description: 'SMAD proteins are the primary intracellular signal transducers of the TGF-beta
  superfamily. Eight human SMADs fall into three classes: receptor-regulated
  R-SMADs (1, 2, 3, 5, 8), the common mediator SMAD4, and inhibitory SMADs
  (6, 7).'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - transcription-factor
aliases: [Smad, SMADs, Smads, Mad-related protein, MADH]
---

# SMAD

> [!info] Family note
> "SMAD" refers to the eight human **SMAD proteins** — the name is a
> contraction of *Sma* (C. elegans) and *Mad* (Drosophila). SMAD2, SMAD3 and
> SMAD4 each have their own note; this is the family overview.

SMADs are the transducers of the [[TGF-beta Signaling Pathway|TGF-β
superfamily]]. They have no catalytic activity: they work purely through
protein–protein and protein–DNA interactions. Humans encode eight:

| Class | Members | Role |
|---|---|---|
| **R-SMAD** (receptor-regulated) | SMAD1, SMAD2, SMAD3, SMAD5, SMAD8 | Directly phosphorylated by type I receptors |
| **Co-SMAD** (common mediator) | SMAD4 | Obligate partner of all R-SMADs |
| **I-SMAD** (inhibitory) | SMAD6, SMAD7 | Antagonize R-SMAD signaling |

R-SMADs split further by which receptors activate them: **SMAD1/5/8** are the
BMP branch, **SMAD2/3** the TGF-β/activin/Nodal/myostatin branch. SMAD4 is
not ligand-restricted and partners with every R-SMAD.

## Structure

SMADs are ~500 residues with two conserved globular domains joined by a
divergent **linker**:

- **MH1 (Mad-homology 1) N-terminal domain.** Present in R-SMADs and SMAD4,
  absent from SMAD6/7. Contains a zinc-stabilized DNA-binding module whose
  β-hairpin recognizes the palindromic **Smad-binding element (SBE)**, 5′-CAGAC.
  Also carries a nuclear localization signal.
- **Linker (~100–120 residues).** Serine/proline-rich and not conserved across
  subgroups. It contains phosphorylation sites for [[CDK]], [[MAPK]] and
  GSK3 (cross-talk with other pathways), a PY motif recognized by the WW
  domains of SMURF ubiquitin ligases, and — in SMAD4 — a nuclear export signal.
- **MH2 C-terminal domain.** The most versatile interaction module in the
  pathway. Its L3 loop and basic surface bind activated type I receptors in
  R-SMADs, and bind phosphorylated R-SMAD tails in SMAD4. A contiguous
  "hydrophobic corridor" on its surface contacts cytoplasmic retention
  proteins, nucleoporins and DNA-binding cofactors. In R-SMADs it ends in the
  C-terminal **SSXS motif** that type I receptor kinases phosphorylate; SMAD4
  and I-SMADs lack this motif and are never phosphorylated there.

> [!warning] SMAD2 does not bind DNA
> Full-length SMAD2 contains a 30-residue insert encoded by exon 3 that
> disrupts the MH1 β-hairpin, so it cannot bind the SBE. The shorter
> **SMAD2Δex3** (also called SMAD2β) isoform lacks the insert and binds DNA
> like SMAD3 — and mice expressing only SMAD2Δex3 are viable and fertile.
> SMAD2 therefore enters transcription complexes as a co-activator or
> co-repressor alongside DNA-bound SMAD3/SMAD4 rather than as a direct DNA
> binder.

## Mechanism

1. A secreted TGF-β-family ligand binds a type II receptor, which recruits
   and phosphorylates a type I receptor (ALK5/[[TGFBR1]] for TGF-β; ALK1/2/3/6
   for BMPs).
2. The activated type I receptor docks the matching R-SMAD — facilitated by
   SARA/endofin scaffolds — and phosphorylates its SSXS motif.
3. Phosphorylation changes the MH2 conformation, releasing the R-SMAD from the
   receptor and exposing the SMAD4-binding surface.
4. R-SMADs oligomerize with SMAD4; heterotrimers of two R-SMADs plus one
   SMAD4 are the predominant functional unit, though R-SMAD homotrimers,
   R-SMAD dimers and heterotrimers with different R-SMAD pairs all form and
   target distinct genes.
5. The complex shuttles into the nucleus, where SMADs work through the SBE but
   achieve specificity by cooperating with sequence-specific transcription
   factors — FOXH1, SNAIL, and AP-1 among them — and with cofactors
   including [[CBP]]/[[P300]], [[SUMO]]-regulatory machinery and chromatin
   remodelers.

R-SMADs shuttle continuously between nucleus and cytoplasm even without
signal, reading out receptor activity; and beyond transcription they
participate in microRNA maturation via the Drosha microprocessor complex.

## Regulation and specificity

- **I-SMADs.** SMAD7 binds activated type I receptors and recruits SMURF1/2,
  degrading the receptor; SMAD6 preferentially blocks BMP signaling; SMAD7 is
  general. Because both TGF-β and BMP induce I-SMADs, this is a conserved
  negative-feedback loop.
- **Non-Smad signaling.** Type II receptors can also signal through
  TRAF6 → [[NF-κB]], and through [[PI3K]], [[ERK]] and [[JNK]], which feed
  back into linker phosphorylation.
- **Linker phosphorylation** by CDK, MAPK and GSK3 is the main route by which
  cell-cycle state and other pathways tune SMAD output; it controls stability,
  nuclear residency and transcriptional specificity.

## Physiological and disease roles

TGF-β superfamily signaling governs embryogenesis, [[Quiescence]], immune
regulation and tissue homeostasis. Its dysregulation underlies fibrosis,
autoimmunity and cancer. Because TGF-β is tumor-suppressive early (growth
arrest, cytostasis) but tumor-promoting late ([[EMT]], invasion), SMAD loss
accelerates malignant progression rather than initiating tumors: in *Apc*
mutant mice, Smad2 loss promotes invasion without changing polyp number,
whereas Smad4 loss is more aggressive still.

> [!important] Causal distinction between the family members
> SMAD4 is the only SMAD with a well-established tumor-suppressor role
> (pancreatic adenocarcinoma, juvenile polyposis). SMAD2 is mutated at lower
> frequency and with less clear functional consequence; SMAD3 is essentially
> unmutated in human cancer.

## Documents

- (no document notes yet)

## Connections

- [[SMAD Proteins]] — a closer companion note on the family's structural logic; use together with this overview.
- [[SMAD2]] and [[SMAD3]] — the TGF-β/activin branch R-SMADs; SMAD2 uniquely lacks direct DNA binding because of its exon-3 insert.
- [[SMAD4]] — the single Co-SMAD, obligate partner of every R-SMAD and the family's tumor suppressor.
- [[Smad7]] — the general I-SMAD, the conserved negative feedback on TGF-β signaling.
- [[TGF-beta Signaling Pathway]] — the pathway SMADs transduce; the receptor–SMAD architecture is the whole point of the canonical route.
- [[TGF-beta Receptor]] and [[TGFBR1]] — the type II and type I kinases that phosphorylate the SSXS motif.
- [[TGF-beta1]] — the best-studied ligand, responsible for much TGF-β's growth-inhibitory and fibrotic output.

## Linking Summary

- New links added: [[SMAD Proteins]], [[SMAD2]], [[SMAD3]], [[SMAD4]], [[Smad7]], [[TGF-beta Signaling Pathway]], [[TGF-beta Receptor]], [[TGFBR1]], [[TGF-beta1]], [[CDK]], [[MAPK]], [[NF-κB]], [[PI3K]], [[ERK]], [[JNK]], [[CBP]], [[P300]], [[SUMO]], [[EMT]], [[Quiescence]], [[Smad Anchor for Receptor Activation]], [[SMURF]]
- Suggested notes to create: [[SMURF]], [[Smad Anchor for Receptor Activation]], [[Smad-binding Element]], [[SMAD1]], [[SMAD5]], [[SMAD8]], [[SMAD6]], [[FOXH1]], [[Activin]], [[Nodal]], [[Bone Morphogenetic Protein]] — removed as already existing: GSK3, Myostatin
- Strong connections to strengthen: [[SMAD]] ↔ [[SMAD Proteins]], [[SMAD2]] ↔ [[SMAD4]], [[SMAD4]] ↔ [[Pancreatic Cancer]], [[SMAD]] ↔ [[TGF-beta Signaling Pathway]]