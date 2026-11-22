---
title: Ripoptosome
description: A 2 MDa death-receptor-independent intracellular complex of RIPK1, FADD, caspase-8, caspase-10 and c-FLIP isoforms that forms when cIAPs are depleted and decides between apoptosis and necroptosis.
protected: true
created: 2026-09-03
updated: 2026-11-22
tags:
  - protein-complex
  - cell-death
  - apoptosis
  - necroptosis
url: #
source: #
aliases: [ripoptosome, RIPoptosome, Ripoptosome complex]
---

# Ripoptosome

The **ripoptosome** is a ~2 MDa intracellular death-signaling platform composed of [[RIPK1]],
[[FADD]], [[Caspase-8]], [[Caspase-10]] and [[c-FLIP]] isoforms. It assembles spontaneously —
without death-ligand engagement — whenever [[cIAPs]] are depleted (genotoxic stress, Smac mimetics,
TLR3 stimulation), and it is the complex in which the [[Caspase-8-c-FLIP Rheostat]] makes its
apoptosis-vs-necroptosis decision (Feoktistova et al. 2011; Tenev et al. 2011).

## Structure & Components

- **Core:** [[RIPK1]] is the obligate scaffold — its death domain (DD) binds [[FADD]] once RIPK1 is
  deubiquitinated and its DD exposed; without RIPK1 there is no ripoptosome (hence *Ripk1⁻/⁻* mice
  are viable while *Casp8⁻/⁻*/*Fadd⁻/⁻* mice are not).
- **DED chain:** [[FADD]] recruits procaspase-8/[[Caspase-10]]/[[c-FLIP]] via DED–DED interactions
  ([[Death Effector Domain|DED]]), mirroring [[DISC]] assembly but in the cytosol rather than at a receptor.
- **Size:** gel filtration places the fully assembled complex at ~2 MDa (fractions containing
  RIPK1 + caspase-8 + c-FLIP); caspase-8/RIPK1 association is essentially restricted to these
  high-molecular-weight fractions.
- **Regulators:** [[cIAPs]] (cIAP1/cIAP2) constitutively ubiquitinate compartmentalized RIPK1 and
  target it for degradation, precluding assembly; proteasome blockade (MG-132) alone suffices to
  trigger spontaneous formation (Feoktistova et al. 2011, Results 6C).
- **Assembly timing:** spontaneous assembly is cell-type specific — observed in HaCaT and MET-1,
  absent in primary keratinocytes (PKs) without IAP antagonism or TWEAK (doc Results 4C; Feoktistova
  2011).

## Mechanism of Action & Pathways

1. **Assembly trigger.** Loss of [[cIAPs]] (or TLR3–TRIF signaling, etoposide-induced genotoxic
   stress) stabilizes RIPK1 → DD-mediated FADD recruitment → DED-chain incorporation of
   procaspase-8 and [[c-FLIP]] isoforms.
2. **Homodimer outcome → apoptosis.** Procaspase-8 homodimers fully process, cleave and inactivate
   [[RIPK1]], disassemble the complex, and release active caspase-8 to drive [[Apoptosis]].
3. **FLIP_L outcome → survival.** [[Caspase-8]]/FLIP_L heterodimers cleave [[RIPK1]] (limited
   substrate repertoire, no released apoptotic signal), disassemble the platform, and the cell survives.
4. **FLIP_S outcome → necroptosis.** Inactive heterodimers cannot cleave [[RIPK1]]; the platform
   persists, [[RIPK1]] phosphorylates [[RIPK3]], [[MLKL]] is recruited and executed as [[Necroptosis]].
   Formation is necessary but not sufficient for death — downstream effector competence decides.
5. **cIAP gate.** MG-132 treatment alone triggers spontaneous assembly; combined IAP antagonism +
   MG-132 suppresses it — cIAPs control a *compartmentalized, modified* RIPK1 pool, not bulk levels
   (Feoktistova et al. 2011, Results 6C).

> [!important] Isoform opposition
> [[c-FLIP|FLIP_L]] *suppresses* ripoptosome formation while [[c-FLIP|FLIP_S]] *promotes* its
> assembly — the same two splice forms push the platform in opposite directions, which is why the
> FLIP_L:FLIP_S ratio, not total c-FLIP, is the predictive parameter.

## Physiological Function

The ripoptosome explains the otherwise paradoxical genetics of the extrinsic pathway: FADD and
caspase-8 knockouts die from unrestrained RIPK1–RIPK3 necroptosis because the ripoptosome can no
longer be disassembled by caspase-8-mediated RIPK1 cleavage. It also converts pro-inflammatory
cytokine signals into pro-death signals under IAP-antagonist therapy and links TLR3/dsRNA sensing
to [[Caspase-8]] activation without TNF signaling. Nec-1 (Necrostatin-1) blocks the spontaneous
FLIP_S-driven necroptosis in keratinocytes (doc Results 5C), and RIP1 kinase activity is the
required driver — Nec-1 and RIP3 knockdown both fully block IAP-antagonist-induced death in
HaCaT-FLIP_S.

## Pathology & Clinical Relevance

- **Cancer therapy:** Smac mimetics (IAP antagonists) deliberately induce ripoptosome formation to
  kill tumor cells; whether the tumor dies by [[Apoptosis]] or inflammatory [[Necroptosis]] depends
  on its [[c-FLIP]] isoform ratio and [[RIPK3]] expression — a stratification biomarker.
- **Inflammation:** keratinocyte (HaCaT) models show c-FLIP_S licenses RIPK3-dependent necroptosis
  in the absence of [[cIAPs]], relevant to TNF-independent skin inflammation.
- **RIPK3-inhibitor paradox:** kinase-dead RIPK3 (D161N) or RIPK3 inhibitors block [[Necroptosis]]
  but can redirect the ripoptosome toward [[Apoptosis]] in a FLIP_L-enhanced manner.

## Documents

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - Defining study: 2 MDa complex, cIAP control, isoform-opposed regulation, rheostat statement.
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Review synthesis: ripoptosome model figure, c-FLIP_S as assembly promoter, necrosome handoff.
- [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018]]
  - Places ripoptosome-derived RIPK1/RIPK3 signaling in the broader necroptosis landscape.

## Connections

- [[Caspase-8-c-FLIP Rheostat]] — the switch that operates inside this platform
- [[RIPK1]] — obligate core scaffold of the complex
- [[RIPK3]] / [[MLKL]] — downstream necroptosis effectors engaged when the complex persists
- [[FADD]] — adaptor bridging RIPK1 to the DED chain
- [[Caspase-8]] / [[c-FLIP]] / [[Caspase-10]] — the DED-chain trio whose stoichiometry decides fate
- [[cIAPs]] — E3 ligases whose presence precludes assembly
- [[DISC]] — the receptor-bound counterpart platform
- [[Death Effector Domain|DED]] — the shared dimerization module of the DED chain that builds the complex
- [[TLR3]] / [[TRIF]] — a RIPK1-dependent, FADD-independent route to caspase-8 activation distinct from the ripoptosome
- [[TNFR1 complex II]] — the related TNFR1-derived secondary complex
- [[Necroptosis]] / [[Apoptosis]] — the two death outputs

## Linking Summary

- New links added: [[RIPK1]], [[RIPK3]], [[MLKL]], [[FADD]], [[Caspase-8]], [[c-FLIP]],
  [[Caspase-10]], [[cIAPs]], [[DISC]], [[TNFR1 complex II]], [[Necroptosis]], [[Apoptosis]],
  [[Caspase-8-c-FLIP Rheostat]]
- Suggested new entity notes to create: (done 03_Sep_2026: [[TRIF]], [[Smac mimetics]])
- Source enrichment (2026-11-19): [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — DED-chain assembly of the ripoptosome; MC159 vFLIP promoting necroptosis via failure to cleave RIPK1; TLR3–TRIF atypical complex (RIPK1-dependent, FADD-independent). New links: [[Death Effector Domain|DED]], [[TLR3]].
- Strong connections to strengthen: [[Ripoptosome]] ↔ [[Caspase-8-c-FLIP Rheostat]],
  [[Ripoptosome]] ↔ [[RIPK1]], [[Ripoptosome]] ↔ [[cIAPs]]
- Source enrichment (2026-11-22): [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]] — MG-132 epistasis for the cIAP gate; spontaneous, cell-type-specific assembly (HaCaT yes, PK no); Nec-1/RIPK3 dependence of the FLIP_S route; HeLa species route via RIP3 WT/D161N (S3).
