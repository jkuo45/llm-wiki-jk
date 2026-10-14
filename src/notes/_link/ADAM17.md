---
title: ADAM17
description: ADAM17 (TACE) is a zinc metalloprotease and the dominant cell-surface sheddase, releasing soluble TNF-alpha, IL-6 receptor, EGFR ligands and other ectodomains; it is the target of broad-spectrum metalloproteinase inhibitors.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein, enzyme, protease, signaling, inflammation]
aliases: [TACE, tumor necrosis factor-alpha-converting enzyme, CD156B, ADAM metallopeptidase domain 17]
---

# ADAM17

**ADAM17** (also **TACE**, tumor necrosis factor-alpha-converting enzyme; CD156B) is a
~110 kDa single-pass type I transmembrane protein of the *a disintegrin and metalloprotease*
family and the first-identified, and generally dominant, cell-surface **sheddase**. It
cleaves transmembrane proteins just below the plasma membrane, releasing their soluble
ectodomains into the extracellular space and simultaneously removing the membrane-tethered
"brake" on them.

## Structure and domain organization

ADAM17 is an 824-residue polypeptide with, from the N-terminus: a pro-domain, a
catalytic **metalloprotease** domain, a **disintegrin** domain, a cysteine-rich domain, an
EGF-like domain, a transmembrane segment, and a short cytoplasmic tail. The pro-domain
keeps the enzyme latent; removal of the pro-domain (by another protease such as furin) at
the Golgi and trafficking to the surface relieves this block. The cytoplasmic tail carries
sites for phosphorylation and adaptor binding, which is how the enzyme is coupled to
[[Src|Src-family]] kinases, [[MAPK|ERK]] and trafficking machinery.

The disintegrin and cysteine-rich domains confer the protein interactions — with
[[Integrin|integrins]], [[IL-6R]] and other substrates — that make ADAM17 a
"substrate-presentation"-gated enzyme: it is not simply constitutively active, but becomes
active where substrate and protease are co-clustered, classically in **cholesterol-rich
membrane rafts**. Most endogenous mature ADAM17 appears to sit in a perinuclear
(trans-Golgi) compartment, with only a small surface pool.

## Substrates and functions

The canonical substrate is **pro-[[TNFα]]** (a 26 kDa type II membrane pro-cytokine),
which is biologically active in its membrane form for juxtacrine signalling and is
cleaved at the Ala76-Val77 bond to release the 17 kDa soluble TNF-alpha that mediates
paracrine [[TNF Signaling]]. Beyond TNF, ADAM17 releases:

- **[[IL-6R]]** — shedding the soluble receptor trans-signalling axis, which drives
  [[JAK-STAT Signaling|STAT3]] activation by [[IL-6]] without membrane receptor engagement.
- **EGFR ligands** — [[Amphiregulin]], TGF-alpha, HB-EGF, neuregulin — thereby coupling
  ADAM17 activity to [[EGFR]] and [[MAPK]] activation.
- **[[Notch Signaling]]** — ADAM17 (with ADAM10) performs the S3 cleavage that releases
  the Notch intracellular domain.
- **L-selectin, chemokines (CXCL8/IL-8, CCL2), syndecan-1, ACE2**, and a long tail of
  adhesion molecules and receptors.

Regulation is by [[TIMP3]] (a potent endogenous ADAM17 inhibitor), by ERK-mediated
phosphorylation of the cytoplasmic tail at Thr735, and by iRhom2-dependent trafficking.

> [!info] Why the anti-TNF and anti-IL-6R drugs work indirectly
> Because the soluble, paracrine forms of TNF-alpha and IL-6R depend on ADAM17, a
> sheddase inhibitor reduces both cytokine axes. This is mechanistically distinct from
> blocking the receptor itself.

## Clinical significance

- **Inflammation.** ADAM17 activity is elevated in [[Inflammatory Bowel Disease]] and
  rheumatoid arthritis, driving excess TNF-alpha and IL-6R release.
- **Cancer.** In [[non-small-cell lung cancer]], radiation-induced ADAM17 activation
  (reported as furin-mediated pro-form cleavage) sheds multiple survival factors and
  promotes radioresistance; ADAM17 has been proposed as a radiosensitization target.
- **SARS-CoV-2.** ADAM17 both supports viral entry and cleaves [[ACE2]] into soluble
  form, which is *protective* by absorbing virions, while simultaneously amplifying
  TNF/IL-6 inflammatory tone. The net direction is genuinely contested.
- **Therapeutics.** Broad-spectrum metalloproteinase inhibitors failed in oncology
  largely because of ADAM17-related toxicity (TACE is required for normal homeostasis).
  Selectivity rather than potency is the current design problem.

> [!warning] Clinical caveat
> No ADAM17-specific inhibitor is approved. Batimastat/marimastat-class drugs are
  non-selective and were abandoned; the therapeutic window is narrow because ADAM17
  has indispensable physiological roles.

## Documents

- [[IL-6R]] — ADAM17 sheds the IL-6 receptor ectodomain, enabling soluble
  receptor trans-signalling via gp130/STAT3.
- [[TIMP3]] — the ECM-anchored endogenous inhibitor that restrains ADAM17 proteolysis.
- [[TNFα]] — the founding substrate; pro-TNF-alpha to soluble TNF-alpha conversion.

## Connections

- [[IL-6R]] — ADAM17 cleavage converts membrane IL-6R into a soluble, agonistic receptor
  that trans-signals without cellular IL-6R, which is why the IL-6/IL-6R axis in the
  [[SASP]] is protease-controlled rather than transcription-controlled.
- [[TIMP3]] — TIMP3 is the principal physiological brake on ADAM17; loss of TIMP3 shifts
  the protease:inhibitor balance toward constitutive shedding and is pro-inflammatory and
  pro-metastatic.
- [[TNFα]] — ADAM17 was cloned as the TNF-alpha converting enzyme; this remains its
  best-characterized role and the rationale for anti-TNF therapy.
- [[Amphiregulin]] — shedding of the EGFR ligand amphiregulin couples stromal ADAM17
  activity to epithelial EGFR signalling, an example of paracrine reprogramming.
- [[Notch Signaling]] — the ADAM17/ADAM10 S3 cleavage of [[Notch]] is what makes the
  pathway switchable, linking sheddase activity to developmental and homeostatic
  transcriptional programs.

## Linking Summary

- New links added: [[Src]], [[MAPK]], [[Integrin]], [[TIMP3]], [[Amphiregulin]],
  [[EGFR]], [[Notch]], [[Notch Signaling]], [[IL-6]], [[JAK-STAT Signaling]],
  [[TNF Signaling]], [[Inflammatory Bowel Disease]], [[non-small-cell lung cancer]],
  [[SARS-CoV-2]], [[ACE2]], [[SASP]]
- Suggested notes to create: [[iRhom2]], [[Ectodomain Shedding]], [[Tissue Factor]],
  [[ADAM10]], [[EGFR Ligands]]
- Strong connections to strengthen: [[TIMP3]] ↔ [[ADAM17]], [[ADAM17]] ↔ [[SASP]]
