---
title: Smac mimetics
description: Small-molecule IAP antagonists mimicking the Smac/DIABLO IBM motif that trigger cIAP auto-destruction, licensing ripoptosome assembly and death-receptor sensitization in cancer therapy.
protected: true
created: 2026-09-03
updated: 2026-11-19
tags:
  - drug
  - cell-death
  - apoptosis
  - cancer
url: #
source: #
aliases: [IAP antagonists, Smac mimetic, birinapant, LCL161, xevinapant]
---

# Smac mimetics

**Smac mimetics** (inhibitor-of-apoptosis antagonists) are small molecules that mimic the
N-terminal IBM (IAP-binding motif) of mitochondrial Smac/DIABLO. By binding the BIR2/BIR3 domains
of [[cIAPs]], they force cIAP1/2 (and [[BIRC2]]-encoded cIAP1 in particular) into rapid
auto-ubiquitination and proteasomal self-destruction — removing the brake that precludes
[[Ripoptosome]] assembly and sensitizing tumor cells to death-ligand and TNF-driven killing.

## Mechanism of Action & Pathways

- **cIAP depletion.** Bivalent mimetics (birinapant) dimerize cIAP RING domains, triggering
  K48 auto-ubiquitination within minutes; monovalent compounds (LCL161, xevinapant/AT-406) act
  more gradually but reach the same endpoint: loss of [[RIPK1]] ubiquitination in TNFR1
  [[TNFR1 complex I|complex I]].
- **Ripoptosome licensing.** With [[cIAPs]] gone, cytosolic [[RIPK1]] accumulates, recruits
  [[FADD]]–[[Caspase-8]]–[[c-FLIP]], and nucleates the [[Ripoptosome]] — the exact experiment
  (IAP antagonist + poly I:C/TLR3) by which Feoktistova et al. defined the complex.
- **Death-quality decision.** The resulting death is [[Apoptosis]] only where the
  [[Caspase-8-c-FLIP Rheostat]] can disassemble the platform; [[c-FLIP|FLIP_S]]-high or
  [[RIPK3]]-proficient/[[Caspase-8]]-low tumors instead undergo inflammatory [[Necroptosis]].
- **Autocrine TNF loop.** Smac-mimetic treatment induces autocrine TNFα secretion in many lines,
  feeding [[TNFR1 complex II]] in parallel — dual platform pressure toward death.

## Physiological Function

Endogenous Smac/DIABLO is released from [[Mitochondria]] at [[Mitochondrial outer membrane permeabilization|MOMP]]
to neutralize [[XIAP]] and [[cIAPs]] during intrinsic [[Apoptosis]]; mimetics pharmacologically
reproduce this derepression without requiring mitochondrial damage.

## Pathology & Clinical Relevance

- **Trials:** birinapant, LCL161, xevinapant (head-and-neck, ovarian, myeloma) — single-agent
  activity is modest; combinations with [[TRAIL]] agonists, chemotherapy or checkpoint blockade aim
  to push licensed ripoptosomes over the death threshold.
- **Biomarkers:** intact [[RIPK3]]–[[MLKL]] axis, low [[c-FLIP|FLIP_S]], TNFα-competent
  microenvironment predict response; [[RIPK3]] silencing and [[c-FLIP]] overexpression are canonical
  resistance routes.
- **Toxicity logic:** normal barrier epithelia tolerate transient cIAP loss because their
  [[Caspase-8]]/FLIP_L axis disassembles incidental ripoptosomes — the same genetics that rescue
  *Casp8⁻/⁻* mice.

> [!info]
> Source: [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> The Smac-mimetic route is one of two demonstrated triggers of spontaneous, death-receptor-independent [[Ripoptosome]] assembly (with etoposide-induced genotoxic stress): an IAP antagonist combined with poly I:C causes [[cIAPs]] elimination via self-ubiquitylation and proteasomal degradation, after which the 2 MDa RIPK1–[[FADD]]–[[Caspase-8]]–[[c-FLIP]] complex assembles without any ligand. Which death follows is set by the c-FLIP isoform present: MC159 [[vFLIP]] expression under these conditions drives RIPK3-kinase-dependent necroptosis, and RIPK3 inhibition (chemical or the D161N active-site mutant) blocks necroptosis but instead routes the ripoptosome-like platform toward [[Apoptosis]], a shift enhanced by [[c-FLIP|FLIP_L]] in mouse embryonic fibroblasts.

## Documents

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - IAP-antagonist + poly I:C paradigm defining the ripoptosome; isoform-dependent death quality.
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Smac mimetic + poly I:C as the cIAP-loss trigger for spontaneous ripoptosome assembly; MC159 vFLIP necroptosis dependence on RIPK3 kinase activity; the RIPK3-inhibitor paradox in which the platform is redirected toward apoptosis, enhanced by FLIP_L.

## Connections

- [[cIAPs]] / [[BIRC2]] — the molecular targets depleted by mimetics
- [[Ripoptosome]] — the platform licensed by cIAP loss
- [[RIPK1]] — the deubiquitinated effector nucleating assembly
- [[XIAP]] — the third IAP target, directly relieved at caspases
- [[Caspase-8-c-FLIP Rheostat]] — the switch deciding death quality after licensing
- [[TRAIL]] — combination partner for forcing apoptotic output
- [[Apoptosis]] / [[Necroptosis]] — the two licensed death modes
- [[vFLIP]] — MC159 behaves like FLIP_S in the licensed ripoptosome and promotes necroptosis
- [[RIPK3]] — its kinase activity is required for the necroptosis outcome and its inhibition redirects toward apoptosis

## Linking Summary

- New links added: [[cIAPs]], [[BIRC2]], [[Ripoptosome]], [[RIPK1]], [[XIAP]],
  [[Caspase-8-c-FLIP Rheostat]], [[TRAIL]], [[Apoptosis]], [[Necroptosis]], [[Mitochondria]]
- Suggested new entity notes to create: [[Smac/DIABLO]]
- Strong connections to strengthen: [[Smac mimetics]] ↔ [[cIAPs]],
  [[Smac mimetics]] ↔ [[Ripoptosome]]
- Source enrichment (2026-11-19): [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — Smac mimetic + poly I:C as a cIAP-loss trigger for spontaneous ripoptosome assembly; MC159 vFLIP necroptosis requiring RIPK3 kinase activity; RIPK3-inhibitor redirection toward apoptosis enhanced by FLIP_L. New links: [[vFLIP]], [[RIPK3]].
