---
title: TNFR1 complex II
description: The cytosolic secondary TNF receptor complex of TRADD, RIPK1, FADD, caspase-8 and c-FLIP that forms after RIPK1 deubiquitination and executes the apoptosis-necroptosis-survival decision.
protected: true
created: 2026-09-03
updated: 2026-09-10
tags:
  - protein-complex
  - cell-death
  - apoptosis
  - necroptosis
url: #
source: #
aliases: [TNFR1 Complex II, complex II, TNF complex II, death-inducing complex II, Ripoptosome, Complex IIa, Complex IIb]
---

# TNFR1 complex II

**TNFR1 complex II** is the cytosolic, death-competent successor of TNFR1 complex I. After the
TNFα–[[TNFR1]] membrane complex has signaled survival, the deubiquitinase CYLD strips ubiquitin
chains from [[RIPK1]]; TRADD–[[RIPK1]] then dissociate from the receptor and recruit [[FADD]],
procaspase-8 and [[c-FLIP]] — assembling a soluble [[DISC]]-like platform where the
[[Caspase-8-c-FLIP Rheostat]] decides between [[Apoptosis]], [[Necroptosis]] and survival.

> [!warning] Naming collision
> This is **not** mitochondrial [[Complex II]] (succinate dehydrogenase) — the shared name refers to
> both being the "second complex" in their respective pathways. Links here always mean the TNFR1
> death complex.

## Structure & Components

- **Membrane precursor (complex I):** [[TNFR1]]–[[TRADD]]–[[RIPK1]]–TRAF2/5–[[cIAPs]]; heavily
  ubiquitinated [[RIPK1]] scaffolds IKK/NF-κB and MAPK survival output and induces *CFLAR*
  ([[c-FLIP]]) transcription.
- **Transition:** CYLD-mediated K63 deubiquitination of [[RIPK1]] dissolves complex I; the
  TRADD–[[RIPK1]] heterodimer leaves the membrane.
- **Complex II proper:** TRADD + [[RIPK1]] + [[FADD]] + procaspase-8/[[Caspase-10]] + [[c-FLIP]]
  isoforms, joined by DED–DED interactions exactly as in the [[DISC]].

## Mechanism of Action & Pathways

- **Homodimer dominance → apoptosis.** Sufficient procaspase-8 homodimers fully process, activate
  [[Caspase-3]]/[[Caspase-7]] and [[Bid]], and execute [[Apoptosis]] — the outcome complex I-derived
  FLIP_L is calibrated to *prevent* unless the TNF signal is overwhelming.
- **FLIP_L heterodimers → brake.** [[Caspase-8]]/FLIP_L complexes cleave [[RIPK1]] locally without
  releasing apoptotic signal: complex II is disarmed, [[Necroptosis]] is blocked, and the
  complex-I survival program wins.
- **FLIP_S heterodimers → necroptosis.** Inactive complexes leave [[RIPK1]] intact; if [[RIPK3]]
  and [[MLKL]] are present, the necrosome forms and the cell undergoes [[Necroptosis]] — notably
  under pharmacological [[Caspase-8]] blockade (z-VAD-FMK), which phenocopies FLIP_S.
- **Feedback wiring.** Because complex I upregulates [[c-FLIP|FLIP_L]], the strength and duration of
  the initial survival signal directly set the apoptotic threshold of the complex II that follows —
  the rheostat's transcriptional arm.

## Physiological Function

Complex II is the execution checkpoint that converts a survival-licensed TNF response into death only
when warranted: developmental tissue remodeling, killing of infected cells after the NF-κB-dependent
antimicrobial program has run, and termination of excess inflammatory signaling.

## Pathology & Clinical Relevance

- **TNF-driven disease:** anti-TNF biologics (rheumatoid arthritis, Crohn's, psoriasis) act upstream
  of this checkpoint; complex-II dysregulation (e.g. CYLD loss, cIAP depletion) pushes
  epithelia toward death and chronic inflammation.
- **Cancer:** death-receptor agonists ([[TRAIL]], FasL mimetics) aim to force complex-II-like
  assembly toward [[Apoptosis]]; [[c-FLIP]] overexpression and [[RIPK3]] silencing are the two
  canonical escape routes.
- **Intestinal homeostasis:** IEC-specific *Cflip* deletion is perinatally lethal via TNFR1-driven
  complex-II death, rescued by *Tnfrsf1a* co-deletion (Tsuchiya 2015 review).

## Complex IIa vs IIb (Consolidated)

**Complex II (TNFR1)** is the cytosolic death complex forming after [[TNFR1 complex I]] dissolves: **IIa** (TRADD/FADD/pro-caspase-8 ripoptosome → active caspase-8 → executioner caspases → extrinsic [[Apoptosis]]) and **IIb** (RIPK1/FADD/caspase-8 without TRADD when cIAPs are depleted, same apoptotic outcome via RIPK1 kinase activity). It is the "second choice" (quiet death) of the TNFR1 decision.

When [[Caspase-8]] is absent or inhibited, Complex II cannot complete apoptosis and instead hands RIPK1 to [[RIPK3]] via RHIM interactions — the necrosome assembly step of [[Necroptosis]]. The caspase-8/c-FLIP isoform rheostat (long heterodimers block necroptosis, short heterodimers favor it) tunes this handoff.

## Documents

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Complex I → II transition, NF-κB-driven FLIP_L pre-conditioning of complex II output.
- [[_document_ - The Long Form of FLIP Is an Activator of Caspase-8 at the Fas DISC|Micheau et al. 2002]]
  - Heterodimer cleavage logic that applies identically at complex II DED chains.
- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - The receptor-independent (ripoptosome) counterpart of complex-II decision logic.

## Connections

- [[TNFR1]] / [[TNFα]] — the receptor and ligand initiating the complex-I → II sequence
- [[TRADD]] — adaptor bridging receptor to RIPK1 in both complexes
- [[RIPK1]] — the deubiquitination switch between complex I and II
- [[cIAPs]] — ligases whose activity keeps signaling in complex-I mode
- [[FADD]] / [[DISC]] — shared adaptor and architectural cousin
- [[Caspase-8]] / [[c-FLIP]] — the rheostat pair executing the complex-II decision
- [[RIPK3]] / [[MLKL]] — necroptosis effectors for the FLIP_S outcome
- [[Ripoptosome]] — the receptor-independent sister platform
- [[Apoptosis]] / [[Necroptosis]] — the two death outputs
- [[Necroptosis]] — Complex II is the launchpad rerouted to the necrosome when caspase-8 is blocked.
- [[Apoptosis]] — the default Complex II output via caspase-8 → executioner caspases.
- [[Caspase-8]] — the effector whose activity state decides apoptosis vs necroptosis.
- [[TNFR1 complex I]] — predecessor survival complex whose dissolution births Complex II.
- [[RIPK1]] — shared subunit transitioning from scaffold (Complex I) to kinase (Complex II/necrosome).

## Linking Summary

- New links added: [[TNFR1]], [[TNFα]], [[TRADD]], [[RIPK1]], [[cIAPs]], [[FADD]], [[DISC]],
  [[Caspase-8]], [[c-FLIP]], [[RIPK3]], [[MLKL]], [[Ripoptosome]], [[Apoptosis]], [[Necroptosis]],
  [[Caspase-8-c-FLIP Rheostat]]
- Suggested new entity notes to create: (done 03_Sep_2026: [[CYLD]], [[TNFR1 complex I]])
- Strong connections to strengthen: [[TNFR1 complex II]] ↔ [[Caspase-8-c-FLIP Rheostat]],
  [[TNFR1 complex II]] ↔ [[Ripoptosome]], [[TNFR1 complex II]] ↔ [[RIPK1]]

## Linking Summary (Consolidated from Complex II (TNFR1).md)

- New note in src/notes/_link/ as cross-topic entity (table audit 2026-09-03: Core-machinery coverage for the cell-death comparison page).
- New links added: [[Necroptosis]], [[Apoptosis]], [[Caspase-8]], [[TNFR1 complex I]], [[RIPK1]].
- Suggested new entity notes to create: [[FADD]], [[c-FLIP]].
- Strong connections to strengthen: [[TNFR1 complex II]] ↔ [[Necroptosis]], [[TNFR1 complex II]] ↔ [[Apoptosis]].
