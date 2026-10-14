---
title: Hrk
description: 'Hrk (DP5, harakiri, BID3) is a pro-apoptotic BH3-only member of the Bcl-2 family. It is 91 residues long, localises to mitochondria, is transcriptionally induced by p53 and by neuronal stress, and kills by selectively binding the anti-apoptotic proteins Bcl-2 and Bcl-xL rather than by directly activating Bax or Bak.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - apoptosis
  - bcl-2-family
  - neurodegeneration
aliases: [Harakiri, DP5, BID3, BH3-interacting domain-containing protein 3, Neuronal death protein DP5, Activator of apoptosis harakiri]
---

# Hrk

## Overview

Hrk is one of the ten or so mammalian **BH3-only proteins** — a
structurally minimal subgroup of the [[Bcl-2 family]] that *initiate*
mitochondrial apoptosis rather than executing it. The name comes from the
Japanese *harakiri* (ritual suicide), chosen because expression of the protein
was lethal to the transfecting cell; the original paper also stressed that the
gene encodes a death-promoting rather than death-preventing protein.

Hrk is tiny — 91 residues — and was the founding member of the "BH3-only"
classification, having (in the original report) *no* detectable BH1 or BH2
domain and only a short stretch homologous to BH3 regions. Later work
confirmed and refined its selectivity.

## Structure and domains

- **Size.** 91 residues (UniProt O00198); it is among the smallest known
  BH3-only proteins, comparable to BimEL (though longer) and smaller than
  [[Bad]].
- **BH3 domain** (residues ~33–47, the only annotated motif) — a 15-residue
  amphipathic α-helix that inserts into the hydrophobic binding groove of
  anti-apoptotic Bcl-2 proteins. Deleting 16 residues spanning this region
  (the "ΔBH3" mutant) abolishes both Hrk's interaction with Bcl-2/Bcl-xL and
  most of its killing activity, showing that the BH3 helix is the functional
  core.
- **C-terminal transmembrane segment** (residues ~69–87) — targets Hrk to
  mitochondria, where its BH3 domain can reach the target proteins.
- **No other domains.** There is no catalytic activity, no other recognisable
  module, and no significant sequence homology to Bcl-2 family members outside
  the BH3 stretch.

## Mechanism of action

> [!info] Indirect, not direct, effector
> Hrk does **not** bind or activate [[BAX]] or [[BAK]]. In the original
> study Hrk bound selectively to the *survival-promoting* proteins
> [[Bcl-2]] and [[Bcl-xL]] but not to the pro-apoptotic homologues Bax and Bak.
> Its logic is therefore the **indirect effector** model: neutralise the
> anti-apoptotic brakes, and let the resident direct effectors Bax/Bak
> oligomerise in mitochondrial outer membrane pores and cause
> permeabilisation. This places Hrk upstream of, not at, the point of no
> return — which is also why Hrk output is sensitive to the rest of the
> network, and why high Hrk abundance alone does not guarantee apoptosis.

- **Transcriptional induction.** *HRK* is a direct transcriptional target of
  **p53** after DNA damage, alongside [[BAX]] and [[PUMA]]. Because it is
  *induced*, Hrk is a p53-responsive, apoptosis-permissive molecule.
- **Post-translational control.** Like other BH3-only proteins, Hrk is
  regulated by phosphorylation; in the related protein [[Bim]], phosphorylation
  (e.g. by ERK/JNK) of an ELR-containing preceding sequence changes its
  affinity for the Bcl-2 groove. Whether Hrk behaves identically is less well
  established.
- **Mitochondrial association.** Recent work shows that Hrk localisation at
  mitochondria can alter mitochondrial *morphology* independently of other
  Bcl-2 proteins — suggesting a non-canonical, structural role in addition to
  BH3-mediated sequestration.
- **Interaction with p32/C1QBP.** Yeast two-hybrid screening identified the
  mitochondrial protein p32 (C1QBP) as an Hrk interactor. p32 forms a
  homotrimeric channel; Hrk–p32 interaction depends on p32's conserved
  C-terminal region. Hrk-induced apoptosis is suppressed by p32 mutants
  lacking the mitochondrial signal sequence or the conserved C-terminal
  region, and siRNA knockdown of p32 protects cells from Hrk-mediated
  apoptosis — evidence that p32 links Hrk to mitochondria and regulates
  Hrk-mediated killing.

## Physiological and pathological roles

- **Neuronal development and disease.** Hrk is named "DP5, neuronal death
  protein." It is expressed in brain, with elevated levels in
  glutamate-exposed or ischaemic neurons, and it is a p53-responsive
  mediator of neuronal apoptosis after DNA damage. Hrk also accumulates in
  reactive astrocytes in end-stage mutant **SOD1** mouse spinal cord, alongside
  Bid and BNIP3L.
- **Loss of Hrk is survivable but alters developmental cell death.** Hrk
  deficiency attenuates programmed cell death in the developing murine nervous
  system — yet, notably, does **not** affect neuron apoptosis caused by
  Bcl-xL deficiency. That dissociation is informative: Hrk and Bcl-xL act at
  partially distinct points in the same apoptotic circuit.
- **Cancer.** Hrk is a candidate tumour suppressor. Its promoter is
  hypermethylated in a range of tumours, and methylation-associated
  downregulation has been reported in gliomas (including
  temozolomide-resistant glioblastoma models) and other cancers. Hrk
  expression is also a pharmacodynamic read-out in studies asking whether
  BH3 mimetics engage the Bcl-2 network.

## Documents

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]] — classifies Hrk among the BH3-only pro-apoptotic proteins (with Bid, Bim, Puma, Noxa, Bad, Bmf, Bik) that initiate the intrinsic pathway on DNA damage, growth factor deprivation, or ER stress.

## Connections

- [[Bcl-2 family]] — Hrk is a BH3-only initiator in the "indirect effector" subclass; understanding Hrk requires the family classification by BH-domain content.
- [[Bcl-2]] and [[Bcl-xL]] — Hrk's direct, selective targets. Neutralising these anti-apoptotic proteins is how Hrk triggers [[Apoptosis]]; overexpressors of either suppress Hrk-induced death.
- [[Apoptosis]] — Hrk promotes apoptosis through the intrinsic (mitochondrial) pathway; deleting its BH3 helix abolishes its killing activity.
- [[Bad]] — the closest functional comparator: another BH3-only protein, similarly selective for Bcl-2/Bcl-xL, and similarly p53-inducible after DNA damage.
- [[p53]] — a direct transcriptional activator of *HRK* after DNA damage, which is why Hrk loss blunts p53's apoptotic arm without affecting its arrest arm.
- [[BAX]] and [[BAK]] — Hrk does **not** bind these direct effectors; it acts by disabling their antagonists, so Bax/Bak are the obligate downstream executioners.
- [[Cytochrome c]] — released only once Hrk's inhibition of Bcl-2/Bcl-xL permits MOMP and Bax/Bak pore formation; cytochrome c then feeds the [[Apoptosome]].
- [[MOMP]] — the point Hrk indirectly enables.
- [[Mitochondria]] — Hrk's C-terminal transmembrane segment localises it to the outer mitochondrial membrane, where it acts; recent work suggests it can also reshape mitochondrial morphology independently of other Bcl-2 proteins.
- [[Alzheimer's Disease]] and [[Parkinson's Disease]] — neurodegenerative settings where BH3-only proteins including Hrk accumulate in stressed neurons; Hrk is a candidate disease-modifying node for these BH3 profiles.

## Linking Summary

- New links added: [[Bcl-2 family]], [[Bcl-2]], [[Bcl-xL]], [[Bad]], [[p53]], [[BAX]], [[BAK]], [[Cytochrome c]], [[Apoptosome]], [[MOMP]], [[Mitochondria]], [[Apoptosis]], [[Alzheimer's Disease]], [[Parkinson's Disease]]
- Suggested notes to create: [[BH3 domain]], [[BH3-only protein]], [[Direct effector]], [[Indirect effector]], [[C1QBP]], [[p32]], [[BH3 mimetic]], [[Pro-apoptotic protein]] — removed as already existing: Bcl-xL, Bid, Bim, Hrk, Mitochondrial outer membrane permeabilization, Noxa, Puma, SOD1, Venetoclax
- Strong connections to strengthen: [[Hrk]] ↔ [[Bcl-2]] ↔ [[Bcl-xL]], [[Hrk]] ↔ [[p53]], [[Hrk]] ↔ [[Bcl-2 family]]