---
title: VAMP8
description: VAMP8 (endobrevin) is a broadly expressed v-SNARE that mediates homotypic endosome and lysosome fusion and, in exocrine and endocrine cells, drives granule-to-granule fusion during sequential compound exocytosis.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - membrane-trafficking
aliases: [Endobrevin, VAMP8/endobrevin, synaptobrevin-3-like]
---

# VAMP8

**VAMP8** (also called **endobrevin**) is a small v-SNARE of the
[[SNARE proteins|SNARE]] superfamily. It is unusually widely expressed — it is present in
early and late [[Endocytosis|endosomes]] in most cell types, and also on secretory granules,
secretory vesicles, and autophagosome-related membranes. It was originally cloned as an
endobrevin because it drives homotypic endosome fusion in vitro; it was later shown to be
the dominant vesicular SNARE of regulated secretion in exocrine tissue and in insulin
granules.

## Structure

VAMP8 is a ~100-residue tail-anchored type II membrane protein. Its cytosolic N-terminal
longin domain carries three conserved heptad-repeat helices, of which helix 1 and helix 3
form the SNARE four-helix bundle with Q-SNARE helices. Its C-terminal transmembrane
segment also participates unusually strongly in bundle assembly — the transmembrane
helices of VAMP8 and syntaxin are "zippered" together. Unlike most SNAREs, VAMP8 is
**not** cleaved by tetanus toxin or botulinum toxins, because it lacks their cleavage
motifs; this makes it convenient for selective manipulation in vivo.

## SNARE partners

VAMP8 forms several distinct complexes depending on the cell type and membrane:

- **Syntaxin 3 + SNAP23** — granule-to-granule fusion in pancreatic acinar cells (see below).
- **Syntaxin 4 + SNAP23** — the classical plasma-membrane fusion complex in exocrine
  tissues; Reactome curates this as the secretory granule docking and fusion complex.
- **Syntaxin 7/8, VTI1B** — endosome-to-lysosome fusion.

Non-excitable cells generally lack SNAP25 and use SNAP23 as the ubiquitous
SNAP paralog in place of the neuron-specific SNAP25.

## Sequential compound exocytosis

Exocrine acinar cells must release a large mass of zymogen granules through a very small
apical membrane. They solve this by **sequential compound exocytosis**: one granule fuses
with the apical plasma membrane, and adjacent granules then fuse into the already-open
primary granule, all draining through a single fusion pore.

Genetic and imaging work separates the two steps cleanly:

- Primary (granule → plasma membrane) fusion uses **syntaxin 2 + SNAP23 + VAMP2**.
- Secondary (granule → granule) fusion uses a *different* complex: **syntaxin 3 + SNAP23 +
  VAMP8**, both with Munc18b as SM protein.

In *Vamp8* knockout mice, acinar cells accumulate roughly threefold more zymogen granules
and secretagogue-stimulated secretion from pancreatic fragments is nearly abolished.
Single-granule imaging shows a selective loss of secondary fusion events with no change in
the number or kinetics of primary fusion events — a rare clean dissociation that supports
the "two distinct SNARE complexes" model rather than a single fusion pore doing everything.

> [!info] Dual compartment role
> In the same knockout, the early endosomal compartment collapses: [[Rab5]], EEA1 and the
> endosomal adaptor D52 fall by more than 80%. VAMP8 is therefore not merely an exocytic
> SNARE — loss of the endosomal pool removes a membrane reservoir that zymogen granules
> require for maturation. VAMP8-positive granules accumulate endosomal and lysosomal
> marker proteins (VAMP7, LAMP1), consistent with trafficking through the
> constitutive-like secretory pathway.

## Other exocrine and secretory systems

*Vamp8* knockout mice show severe defects in salivary and lacrimal glands: accumulated
amylase and carbonic anhydrase VI, secretory granule accumulation, compromised
pilocarpine-stimulated secretion, and protein aggregates in lacrimal gland. VAMP8 protein
is detectable across salivary, lacrimal, sweat, sebaceous, mammary and prostate tissue.
In human mast cells, VAMP7 and VAMP8 (not VAMP2) are required for IgE-receptor-mediated
histamine release. In cytotoxic T lymphocytes and goblet cells, VAMP8 is similarly
required for granule exocytosis.

## Non-secretory functions

Both VAMP8 and syntaxin 2 localise to the midbody during cytokinesis;
overexpression of soluble non-anchored mutants causes abscission failure and binucleate
formation. VAMP8 also participates in autophagosome–lysosome fusion and in autophagic
lysosome reformation, where it acts with syntaxin 17.

## Clinical relevance

Defects in VAMP8-mediated trafficking are not an established monogenic disease, but the
protein appears in several disease-relevant contexts: reduced VAMP8-dependent granule
exocytosis is a candidate explanation for pancreatic insufficiency in cystic fibrosis, and
VAMP8/SNAP23 axis activity modulates neutrophil granule release and platelet granule
secretion, both relevant to thrombosis and to neutrophil extracellular trap formation.

## Documents

- [[SNARE proteins]]
  - Establishes VAMP8's position among v-SNAREs and the R-SNARE/Q-SNARE pairing logic that
    this note extends to granule-to-granule fusion.

## Connections

- [[SNARE proteins]] — VAMP8 is a member of this fusion-machinery family and exemplifies how
  one v-SNARE is paired with different Q-SNAREs for distinct fusion steps.
- [[Endocytosis]] — VAMP8's original and continuing role is homotypic endosome fusion, and its
  loss collapses the early endosomal system.
- [[Membrane Trafficking]] — VAMP8's whole function is to specify which membrane fuses with
  which, at which point in the trafficking itinerary.
- [[Exocytosis]] — in exocrine tissue, VAMP8 is the R-SNARE of regulated secretion and of
  sequential compound exocytosis.
- [[Lysosome Biogenesis]] — VAMP8 supports autophagosome/lysosome fusion and lysosome
  reformation downstream of [[Macroautophagy]].
- [[Inflammation]] — granule exocytosis in mast cells and neutrophils is a major route of
  inflammatory mediator release, and both require VAMP8.
- [[Ubiquitin Ligase]] — SNARE recycling after fusion is proteasome-dependent; blocking the
  proteasome traps SNAREs on membranes and raises cytosolic calcium, an entry point for
  inflammasome activation.

## Linking Summary

- New links added: [[SNARE proteins]], [[Endocytosis]], [[Membrane Trafficking]],
  [[Exocytosis]], [[Lysosome Biogenesis]], [[Inflammation]], [[Rab5]], [[Syntaxin]],
  [[SNAP23]], [[SNAP25]], [[VAMP2]], [[Munc18b]], [[VTI1B]], [[EEA1]], [[LAMP1]]
- Suggested notes to create: [[Exocytosis]], [[SNAP23]], [[SNAP25]], [[Syntaxin]],
  [[Syntaxin 4]], [[VAMP2]], [[Munc18b]], [[VTI1B]], [[Sequential Compound Exocytosis]],
  [[Zymogen Granule]], [[Syntaxin 17]]
- Strong connections to strengthen: [[VAMP8]] ↔ [[SNARE proteins]],
  [[VAMP8]] ↔ [[Membrane Trafficking]]
