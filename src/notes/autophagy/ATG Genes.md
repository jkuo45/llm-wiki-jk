---
title: ATG Genes
description: ATG genes encode the core autophagy machinery first identified in yeast and named Apg/Nir/Atg; the roughly 35 human ATG genes encode the ULK1, class III PI3K and ubiquitin-like conjugation systems that build, close and deliver autophagosomes.
protected: false
created: 2026-10-01
updated: 2026-10-02
tags:
  - gene
  - autophagy
  - protein
aliases: [ATG genes, Autophagy genes, Apg genes, ATG family]
---

# ATG Genes

**ATG genes** are the genes encoding the core machinery of [[Autophagy]]. The set was defined in *Saccharomyces cerevisiae* through mutagenesis screens for mutants defective in autophagy (Apg), for autophagy in the absence of vacuolar protease activity (Nir), and finally unified under the **ATG** nomenclature; mammalian orthologues were identified in 1993 and functional conservation has since been tested by systematic knockout. Loss of essential ATG function is generally tolerated in mice until weaning and then lethal, and predictsably produces neurodegeneration, immune defects and intestinal disease.

> [!info] Naming convention
> Gene and protein symbols are **ATG#** in mammalian/vertebrate usage and **Atg#** in yeast usage. Several have accepted alternative names that predate the convention: ATG1 = ULK1, ATG4 = ATG4D, ATG8 = LC3/GABARAP, ATG9 = ATG9A, ATG14 = ATG14L (Barkor), ATG6 = BECN1 (Beclin 1).

## The Core Machinery by Step

**Initiation (nutrient sensing and cargo recruitment)** — the ULK1/ATG13/FIP200/ATG101 complex assembles on the [[ULK1]] scaffold when [[mTORC1]] is inhibited and AMPK is active; in yeast the equivalent is Atg1–Atg13–Atg17 with the Svp38/Scf38 complex.

**Nucleation** — the class III PI3K complex I (VPS34/PIK3C3–VPS15–[[Beclin1]]–[[Atg14]]) produces phosphatidylinositol 3-phosphate on the [[Phagophore Assembly Site]], recruiting WIPI proteins. Complex II, containing UVRAG instead of Atg14, is endosomal — so the ATG14 subunit decides autophagy-versus-endosome specificity.

**Elongation** — two ubiquitin-like conjugation systems run in parallel:
- ATG12–ATG5/ATG12–Atg16L1 complex, formed by [[Atg7]] (E1-like) and Atg10 (E2-like) acting on [[Atg12]] and [[Atg5]].
- LC3/GABARAP conjugation to phosphatidylethanolamine by [[Atg7]] and [[Atg3]], the two steps being deconjugated and re-ligated by the protease [[Atg4]].

**Closure and delivery** — [[Atg8]]/LC3 on the outer autophagosome membrane recruits SNARE machinery for [[Autophagosome-lysosome fusion|fusion]] with the [[Lysosome]]; [[Atg9]], [[Atg18]]/WIPI and Atg2 supply membrane and lipid for expansion.

## Regulation

- [[mTORC1]] and AMPK converge on ULK1; phosphorylation of the ULK1–ATG13–FIP10 complex by AMPK activates initiation, while mTORC1 phosphorylation inhibits it.
- The ATG8/LC3 system is read as a flux reporter: LC3-II accumulation with and without lysosomal blockade distinguishes increased autophagosome formation from impaired clearance.
- Post-translational control (phosphorylation, ubiquitination, acetylation) tunes each complex; ATG4D, for example, is set by a Dpf1–FAM176A switch that controls whether LC3 lipidation proceeds.

## Non-canonical Uses

Not all ATG-dependent autophagy degrades cargo: lipophagy, xenophagy, aggrephagy, mitophagy ([[Mitophagy]]) and ER-phagy use the same core machinery with different receptors, and so-called "non-canonical" functions include LC3-associated phagocytosis (LAP), CASM-mediated secretion of single-membrane vesicles, and secretory autophagy.

## Pathology and Therapeutics

ATG deficiency or dysregulation is implicated in inflammatory bowel disease (notably ATG16L1 variants in Crohn's disease), neurodegeneration, infection susceptibility, ageing, and cancer, where autophagy is both tumour-suppressing early and tumour-supporting later. Pharmacologically, VPS34 and ULK1 inhibitors (including the clinical-stage ULK1 inhibitor DCC-3116) block the machinery, whereas indirect induction via [[Rapamycin]], spermidine, [[Trehalose]] and [[mTORC1]] suppression raises flux.

## Documents

- [[_document_ - rubinsztein2011_autophagy_and_aging|Autophagy and aging (Rubinsztein et al.)]] — sets out the ATG machinery (Vps34–Beclin 1/Atg6–Atg14–Vps15, Atg1/ULK1–FIP200–Atg13, the Atg12–Atg5–Atg16 and Atg7/Atg3 LC3 conjugation reactions) and shows that ATG protein expression falls with age while ATG loss-of-function shortens lifespan in yeast, worms and flies.

## Connections

- [[Autophagy]] — The ATG genes are the machinery of autophagy; individual ATG notes are the components of this hub.
- [[ULK1]] — ATG1/ULK1 is the serine/threonine kinase that integrates nutrient and energy status and initiates autophagosome formation.
- [[Beclin1]] — ATG6/Beclin 1 is the scaffold of the class III PI3K complex, and its interaction with Bcl-2 family proteins sets the autophagy-apoptosis switch.
- [[Atg14]] — ATG14 is the subunit that restricts the class III PI3K complex to autophagosomes, distinguishing it from the endosomal complex II.
- [[Atg7]] — ATG7 is the shared E1-like enzyme of both the ATG12-ATG5 and the LC3/GABARAP conjugation systems, so it is required for autophagosome formation at both steps.
- [[Atg5]] — ATG5 pairs with ATG12 and ATG16L1 in the first conjugation system, which specifies autophagosome maturation and also has non-autophagic scaffolding roles.
- [[LC3]] — ATG8/LC3/GABARAP conjugation to phosphatidylethanolamine is the readout of autophagic activity used across the field.
- [[p62]] — p62 is the best-characterised selective-autophagy receptor and connects polyubiquitinated cargo to the ATG-built autophagosome.
- [[Mitophagy]] — Mitophagy uses the ATG machinery to clear damaged mitochondria, making the ATG genes required for both bulk and selective autophagy.
- [[mTORC1]] — mTORC1 is the master negative regulator of the ATG initiation complex, which is why [[Rapamycin]] and nutrient deprivation are the strongest pharmacological autophagy inducers.

## Linking Summary

- New links added: [[ATG10]], [[Atg10]], [[Atg2]], [[ATG16L1]], [[ATG101]], [[FIP200]], [[Atg9]], [[Atg4]], [[Phagophore Assembly Site]], [[LC3-associated Phagocytosis]], [[UVRAG]], [[ATG9A]]
- Suggested notes to create: [[ATG10]], [[LC3-associated Phagocytosis]], [[Aggrephagy]], [[Xenophagy]]
- Strong connections to strengthen: [[ATG Genes]] ↔ [[Autophagy]], [[ATG Genes]] ↔ [[Lysosome]], [[ATG Genes]] ↔ [[Selective Autophagy]], [[ATG Genes]] ↔ [[Aging]]
