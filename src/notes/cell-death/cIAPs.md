---
title: cIAPs
description: Cellular inhibitor of apoptosis proteins cIAP1 and cIAP2 (BIRC2/BIRC3) — E3 ubiquitin ligases that ubiquitinate RIPK1 to sustain survival signaling and preclude ripoptosome assembly.
protected: true
created: 2026-09-03
updated: 2026-09-14
tags:
  - protein
  - cell-death
  - ubiquitin
  - cancer
url: #
source: #
aliases: [cIAP1, cIAP2, BIRC2, BIRC3, cellular IAPs]
---

# cIAPs

**cIAPs** (cellular inhibitor of apoptosis proteins — **cIAP1/BIRC2** and **cIAP2/BIRC3**) are RING-type
E3 [[Ubiquitin]] ligases that sit at the top of the death-vs-survival decision. By ubiquitinating
[[RIPK1]] inside TNFR1 complex I they lock in NF-κB/MAPK survival signaling; by continuously clearing
compartmentalized [[RIPK1]] they preclude spontaneous [[Ripoptosome]] assembly. Their removal is the
single trigger that derepresses the [[Caspase-8-c-FLIP Rheostat]] in the cytosol.

## Structure & Domains

- **BIR domains** (baculovirus IAP repeat, ×3) — protein-interaction modules; BIR2 binds the
  Smac/DIABLO IBM motif, the basis of Smac-mimetic antagonism.
- **CARD** — caspase-recruitment domain involved in auto-regulation.
- **RING domain** — confers E3 ligase activity toward [[RIPK1]], themselves (auto-ubiquitination and
  proteasomal self-destruction upon Smac-mimetic binding), and other complex-I residents (TRAF2/5).

## Mechanism of Action & Pathways

- **Complex I stabilization.** Upon TNFα–[[TNFR1]] engagement, cIAP1/2 (with TRAF2/5) attach K63- and
  linear ubiquitin chains to [[RIPK1]], creating the scaffold for IKK/NF-κB and MAPK activation and
  for *CFLAR* ([[c-FLIP]]) transcription — survival signaling that simultaneously raises the
  rheostat's brake.
- **Ripoptosome suppression.** cIAP-mediated degradation of free [[RIPK1]] keeps its cytosolic pool
  below the assembly threshold; loss of cIAPs (Smac mimetics, genotoxic stress via Tenev et al. 2011,
  TLR3 stimulation via Feoktistova et al. 2011) lets [[RIPK1]] accumulate, expose its DD, recruit
  [[FADD]], and nucleate the [[Ripoptosome]].
- **Not the degradation per se.** Proteasome blockade (MG-132) degrades cIAPs yet still permits
  ripoptosome formation, implying it is cIAP control of *compartmentalized* [[RIPK1]] — not bulk
  cIAP levels — that gates assembly.

> [!warning] Antagonist paradox
> Smac mimetics trigger rapid cIAP auto-ubiquitination and loss, which is pro-death in tumors — but
> the resulting death is [[Apoptosis]] only when the [[Caspase-8]]/[[c-FLIP|FLIP_L]] axis can
> disassemble the [[Ripoptosome]]; c-FLIP_S-high or [[Caspase-8]]-low cells default to inflammatory
> [[Necroptosis]] instead.

## Physiological Function

cIAPs maintain innate-immune homeostasis: they restrain TLR3/TRIF-to-[[Ripoptosome]] signaling so
that dsRNA sensing does not constitutively kill, and they keep TNF signaling in its
pro-survival (complex I) mode in barrier epithelia.

## Pathology & Clinical Relevance

- **Cancer:** *BIRC2/3* amplification occurs in multiple carcinomas; Smac mimetics (birinapant,
  LCL161, xevinapant) are in trials to force [[Ripoptosome]]-mediated tumor death — efficacy tracks
  with [[RIPK3]] proficiency and low [[c-FLIP|FLIP_S]].
- **Therapy resistance:** tumors evade IAP antagonists by silencing [[RIPK3]] or overexpressing
  [[c-FLIP]], converting ripoptosome signaling back to survival.
- **Lysosomal backup:** proteasome-independent (lysosomal) cIAP turnover (e.g. TWEAK-driven)
  provides a second physiological route to ripoptosome licensing.

## Documents

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - cIAP loss as the trigger of spontaneous 2 MDa ripoptosome formation; MG-132 epistasis.
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - cIAP–RIPK1 ubiquitination as the upstream gate of the c-FLIP switch.
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - Places cIAP-mediated RIPK1 ubiquitination in the multilayered regulation of the necroptosis network and discusses IAP-antagonist strategies and resistance mechanisms.

## Connections

- [[Ripoptosome]] — the complex whose assembly cIAPs preclude
- [[RIPK1]] — the principal ubiquitination substrate
- [[Ubiquitin]] / [[Proteasome]] — the modification and turnover machinery
- [[TNFR1]] / [[TNFR1 complex II]] — receptor context of complex-I vs complex-II fate
- [[Caspase-8]] / [[c-FLIP]] — the rheostat pair unleashed when cIAPs fall
- [[Necroptosis]] / [[Apoptosis]] — the death outputs of derepression
- [[XIAP]] — the third IAP family member (direct caspase binder, distinct mechanism)

## Linking Summary

- New links added: [[Ripoptosome]], [[RIPK1]], [[Ubiquitin]], [[Proteasome]], [[TNFR1]],
  [[TNFR1 complex II]], [[Caspase-8]], [[c-FLIP]], [[Necroptosis]], [[Apoptosis]], [[XIAP]]
- Suggested new entity notes to create: (done 03_Sep_2026: [[Smac mimetics]], [[BIRC2]]; pre-existing: [[TRAF2]], [[TRIF]])
- Strong connections to strengthen: [[cIAPs]] ↔ [[Ripoptosome]], [[cIAPs]] ↔ [[RIPK1]],
  [[cIAPs]] ↔ [[Caspase-8-c-FLIP Rheostat]]
- Source enrichment (2026-09-14): [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — cIAP/RIPK1 ubiquitination in the necroptosis regulatory network; resolves the prior red document link.
