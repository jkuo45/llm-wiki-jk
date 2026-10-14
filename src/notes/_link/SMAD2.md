---
title: SMAD2
description: 'SMAD2 (MADH2) is a receptor-regulated SMAD phosphorylated at its C-terminal
  SSXS motif by TGF-beta, activin and Nodal type I receptors. Unlike SMAD3 it
  lacks direct DNA binding because of an exon-3 insert, and it is required for
  embryonic axis patterning and definitive endoderm specification.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - transcription-factor
aliases: [Mothers Against Decapentaplegic Homolog 2, MADH2, SMAD2beta, SMAD2Δexon3, JV18-1]
---

# SMAD2

SMAD2 (*MADH2*, also cloned as JV18-1) is a **receptor-regulated SMAD (R-SMAD)**
of the [[TGF-beta Signaling Pathway|TGF-β/activin/Nodal branch**, acting
alongside [[SMAD3]] and in complex with [[SMAD4]]. It is phosphorylated
directly at its C-terminal SSXS motif by type I receptors — principally ALK5
([[TGFBR1]]) for TGF-β and ALK4/ALK7 for Nodal and activin.

## Structure

SMAD2 is ~552 residues with the canonical SMAD architecture: an N-terminal
**MH1** DNA-binding domain, a divergent proline/serine-rich **linker**, and a
C-terminal **MH2** domain.

The distinguishing feature of SMAD2 is a **30-residue insert in the MH1
domain, encoded by alternatively spliced exon 3**, which disrupts the
β-hairpin that makes the SBE (Smad-binding element, 5′-CAGAC) contact. Full-
length SMAD2 therefore **cannot bind DNA directly**. The short isoform
**SMAD2Δex3** (also written SMAD2β) lacks the insert, regains SMAD3-like DNA
binding, and is the isoform that carries essentially all of SMAD2's essential
developmental function.

SMAD2's MH2 domain docks type I receptors via its L3 loop and basic patch;
its linker contains CDK/MAPK/GSK3 phosphorylation sites (the cross-talk hub),
a PY motif that SMURF ligases recognize, and two potential casein-kinase-II
and PKC threonine sites contributed by the exon-3 insert. Unlike SMAD3,
SMAD2 contacts nuclear pore components directly through its MH2 domain rather
than using only importin-β.

## Mechanism and functions

Ligand → type II receptor → type I receptor → SMAD2 C-terminal
phosphorylation → SMAD2/SMAD4 heterotrimer → nuclear accumulation →
transcription with DNA-binding cofactors (FOXH1, and partners such as SNAIL)
and coactivators/repressors including [[CBP]] and [[P300]]. SMAD2 can also
act in nuclear complexes **without** SMAD4, as a co-activator or co-repressor
on SMAD3/SMAD4-occupied promoters — and in that role it tends to recruit
corepressors, which is why losing it can *increase* transcription of some
targets.

> [!info] Two separable SMAD2 functions
> Developmental genetics separates them cleanly. Smad2-null mice die around
> E8.5: the anterior visceral endoderm fails to form, so the embryo loses
> anterior–posterior polarity and cannot organize mesoderm. Expression of only
> SMAD2Δex3 — or of a human SMAD3 cDNA — fully rescues axis patterning and
> definitive endoderm specification and yields viable, fertile animals. So the
> DNA-binding-negative full-length isoform is dispensable in vivo; the
> developmental requirement is for SMAD2 signaling capacity at the right
> level and tissue (the visceral endoderm), not for SMAD2's own DNA contact.

Beyond development, SMAD2 is required for [[Quiescence]], growth arrest, and
the epithelial-to-mesenchymal programme. It cooperates with [[Rac1]]:
TGF-β1-induced [[SMAD2]]/p38 activation depends on Rac1-derived ROS in
keratinocytes and pancreatic ductal adenocarcinoma cells.

## Disease relevance

- **Cancer.** SMAD2 is a tumor suppressor, but a weak and contested one.
  Inactivating *SMAD2* mutations are reported in a minority of colorectal and
  lung cancers, and SMAD2 sits at 18q21 adjacent to SMAD4. In *Apc* mutant
  mice, Smad2 loss did not change polyp number or histopathology in one study
  but increased invasive carcinoma and sudden death from obstruction in
  another — i.e. it accelerates malignant progression without initiating
  tumors, less dramatically than Smad4 loss.
- **Fibrosis.** SMAD2 is the R-SMAD most implicated in fibrotic TGF-β output.
  [[SIRT6]] inhibits TGF-β1-induced myofibroblast differentiation by
  inactivating TGF-β1/[[SMAD2]] signaling, and [[SIRT6]] deacetylates
  conserved Lys54 on SMAD2 in hepatic stellate cells to alleviate liver
  fibrosis. Pharmacologic TGF-β blockade with [[Pirfenidone]] in
  non-small-cell lung cancer reduces proliferation partly through this axis.
- **Linker phosphorylation as a tunable interface.** Linker phosphorylation
  (by CDK, MAPK, PKC, JNK) redirects SMAD2's gene output toward
  proliferation, invasion and stemness-associated programs. In NSCLC, loss of
  phospho-SMAD2-linker reduces proliferation and migration and shifts
  expression toward the short SMAD2ΔE3 splice form.

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease]] — reports that SIRT6 inhibits TGF-β1-induced myofibroblast differentiation by inactivating TGF-β1/SMAD2 signaling, that SIRT6 deacetylates Lys54 on SMAD2 in hepatic stellate cells to alleviate liver fibrosis, and that SIRT7 promotes cardiac fibrosis via SMAD2 and ERK activation.

## Connections

- [[SMAD4]] — SMAD2's obligate nuclear partner; heterotrimers of two R-SMADs plus one SMAD4 are the functional transcription unit.
- [[SMAD3]] — its sibling in the TGF-β/activin branch; SMAD3 binds DNA directly where SMAD2 cannot, and loss of each gives a distinct phenotype.
- [[SMAD]] — the family note covering MH1/MH2 architecture, the SSXS motif, and I-SMAD negative feedback.
- [[TGF-beta Signaling Pathway]] — SMAD2 is the transducer for this branch; its activation is the receptor-level readout.
- [[TGFBR1]] and [[TGF-beta Receptor]] — the type I and type II kinases that phosphorylate SMAD2's SSXS motif.
- [[TGF-beta1]] — the dominant ligand driving SMAD2 activation and its growth-inhibitory and fibrotic output.
- [[Rac1]] — Rac1-derived ROS is required for efficient TGF-β1-induced SMAD2 and p38 activation in keratinocytes and pancreatic cancer cells.
- [[SIRT6]] — deacetylates SMAD2 at Lys54 in hepatic stellate cells, restraining hepatic stellate activation and liver fibrosis.
- [[Pirfenidone]] — TGF-β blockade in NSCLC acts partly through reducing SMAD2/3 signaling.

## Linking Summary

- New links added: [[SMAD]], [[SMAD4]], [[SMAD3]], [[TGF-beta Signaling Pathway]], [[TGFBR1]], [[TGF-beta Receptor]], [[TGF-beta1]], [[CBP]], [[P300]], [[Rac1]], [[Quiescence]], [[EMT]], [[Fibrosis]], [[SIRT6]], [[SIRT7]], [[SIRT4]], [[SIRT2]], [[AMPK]], [[ERK]], [[Pirfenidone]], [[Lung Cancer]], [[Colorectal Cancer]], [[Pancreatic Ductal Adenocarcinoma]], [[Smad Anchor for Receptor Activation]], [[FOXO3]], [[Snail]], [[STAT3]], [[Smad7]], [[CDK]]
- Suggested notes to create: [[SMAD2Δexon3]], [[FOXH1]], [[Smad Anchor for Receptor Activation]], [[Endoderm]], [[Definitive Endoderm]] — removed as already existing: Myofibroblast, SMURF2, Smad7, Snail
- Strong connections to strengthen: [[SMAD2]] ↔ [[SMAD4]], [[SMAD2]] ↔ [[TGF-beta Signaling Pathway]], [[SMAD2]] ↔ [[SIRT6]]