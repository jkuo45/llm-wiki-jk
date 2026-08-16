---
title: Caspase-8
description: Initiator protease of the extrinsic apoptotic pathway; activated by death receptor signaling (FasL/TRAIL) and subject to regulatory phosphorylation that switches it between pro-death and pro-survival (pro-migratory) functions.
protected: false
created: 2026-07-06
updated: 2026-08-16
tags:
  - enzyme
  - apoptosis
  - caspase
  - cancer
  - cell-death
url: #
source: #
aliases:
  - Caspase 8
  - FLICE
  - MACH
  - CAP4
---

# Caspase-8

## Overview

[[Caspase-8]] is an initiator protease that plays a central role in the [[Extrinsic Pathway]] of [[Apoptosis|apoptosis]]. It is activated upon oligomerization at death-inducing signaling complexes (DISCs) formed by death receptors such as [[Fas]] and [[TRAIL]] receptors, and initiates the caspase cascade leading to activation of executioner caspases and apoptotic cell death.

## Structure & Activation

Caspase-8 contains two N-terminal death effector domains (DEDs) that mediate recruitment to DISCs, and a C-terminal catalytic domain with a large (p18) and small (p10) subunit. Upon death receptor ligation by [[FasL]] or [[TRAIL]] — e.g., via [[Fas]], [[DR4]], [[DR5]] — the Death-Inducing Signaling Complex ([[DISC]]) forms and recruits adapter proteins ([[TRADD]], [[FADD]]) as well as pro-caspase-8. Proximity-induced auto-proteolytic cleavage activates it. Active Caspase-8 then directly activates executioner caspases ([[Caspase-3]], [[Caspase-7]]) or cleaves the BH3-only protein Bid to engage the mitochondrial pathway.

## Mechanism of Action & Pathways

- **Extrinsic Apoptosis**: Caspase-8 is the primary initiator caspase downstream of death receptors ([[Fas]], [[TRAIL]]-R1/R2, [[TNFR1]]). It directly cleaves and activates executioner caspases like [[Caspase-3]] and [[Caspase-7]] in type I cells.
- **Mitochondrial Amplification**: In type II cells, Caspase-8 cleaves [[Bid]] into truncated Bid (tBid), which activates [[BAX]] and [[BAK]] to trigger [[Mitochondrial outer membrane permeabilization|MOMP]], linking the extrinsic to the [[Intrinsic Pathway]].
- **Non-Canonical Scaffolding**: Phosphorylated Caspase-8 acquires scaffolding functions independent of its protease activity, promoting cell survival, migration, and therapy resistance.

> [!important] Tyrosine Phosphorylation Switch
> In many cancers (colon, glioblastoma), [[SRC kinase|Src]] family kinases — including [[FYN]] and [[LYN]] — phosphorylate Caspase-8 at Tyr380 (or Tyr397/Tyr465 depending on isoform). Tyr397/Tyr465 phosphorylation inhibits proteolytic cleavage and maturation, blocking the extrinsic apoptotic pathway. Phosphorylated Caspase-8 (pY-Casp8) instead acts as a pro-survival scaffold, recruiting **FAK**, **Calpain-2**, and **PI3K**, promoting cell migration, metastasis, and survival signaling (NF-κB, mTORC1).

## Regulation

Caspase-8 activity is regulated by several kinases through [[Phosphorylation|phosphorylation]]:

- **[[SRC kinase|SRC]], [[FYN]], [[LYN]]**: Phosphorylate Caspase-8 at Tyr380/397 (also Tyr465 for LYN), providing a mechanism for [[Apoptosis]] suppression. The phosphorylated form (pY-Casp8) promotes cell migration and metastasis, particularly in [[Colon Cancer]] and glioblastoma.
- **[[p38 MAPK]]**: Phosphorylates Caspase-8 at Ser364, suppressing its activity.
- **[[SHP1]]**: A phosphatase that dephosphorylates Caspase-8 at Tyr380/397 to restore its pro-apoptotic function. Recruitment of SHP1 is facilitated by phosphorylation at Tyr310.

## Physiological Function

Caspase-8 is essential for embryonic development, immune system homeostasis, and elimination of virus-infected or damaged cells. Loss-of-function mutations cause severe immunodeficiency (autosomal recessive CASP8 deficiency) with impaired T cell, B cell, and NK cell activation. Caspase-8 also functions in non-apoptotic roles including NF-κB activation and necroptosis suppression (via cleavage of RIPK1).

## Pathology & Clinical Relevance

- **Cancer**: Many tumors epigenetically silence _CASP8_ or maintain Caspase-8 in its pro-migratory, anti-apoptotic state via Src-mediated phosphorylation. Downregulation or silencing of Caspase-8 is observed in neuroblastoma and choriocarcinoma, contributing to evasion of apoptosis and therapy resistance. Tumors that silence _PTPN6_ (SHP1) specifically preserve the pro-survival Caspase-8 state.
- **Viral Immune Evasion**: Poxviruses and herpesviruses encode caspase-8 inhibitors (e.g., CrmA, vFLIP) to suppress host cell apoptosis.
- **Therapeutic Targeting**: Restoring Caspase-8 activity (e.g., via SHP1 reactivation or Src inhibition) is being explored as a strategy to sensitize resistant tumors to death ligands ([[TRAIL]], [[FasL]]).

## Documents

- [[task_output_caspase_01_JUN_2026|Molecular Mechanisms of Caspase and Bcl-2 Family Regulation]]
  - Details the SHP1-mediated dephosphorylation switch that restores Caspase-8 pro-apoptotic function in cancer cells.

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]]
  - Death receptors possess an intracellular death domain that recruits adapter proteins such as TRADD and FADD, as well as cysteine proteases like Caspase-8.

- [[_document_ - Caspase|Caspase]]
  - Caspases are broadly categorized into initiator caspases (e.g., Caspase-2, Caspase-8, Caspase-9, Caspase-10) and executioner caspases (e.g., Caspase-3, Caspase-6, Caspase-7).

- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
  - In response to various apoptotic stimuli, "initiator" caspases (Caspase-2, Caspase-8, Caspase-9, or Caspase-10) are activated, then cleave and activate the zymogenic forms of "executioner" caspases.

## Connections

- [[Extrinsic Pathway]] — The primary initiator caspase.
- [[FasL]] — A ligand that triggers Caspase-8 activation at the DISC.
- [[TRAIL]] — Another ligand that triggers Caspase-8 activation.
- [[Fas]] / [[DR4]] / [[DR5]] — Death receptors engaging Caspase-8.
- [[DISC]] — The death-inducing signaling complex where Caspase-8 is activated.
- [[Bid]] — Cleaved by Caspase-8 to link to the [[Intrinsic Pathway]].
- [[Caspase-3]] — Primary downstream executioner caspase activated by Caspase-8.
- [[Caspase-7]] — Downstream executioner caspase activated by Caspase-8 in type I cells.
- [[Caspase-9]] — Initiator caspase of the intrinsic pathway; Caspase-8 engages this via Bid cleavage.
- [[SRC kinase]] / [[FYN]] / [[LYN]] — Inhibitory kinases for Caspase-8.
- [[SHP1]] — Regulatory phosphatase that restores Caspase-8 apoptotic function.
- [[FAK]] — Recruited by phosphorylated Caspase-8 to promote migration and survival.
- [[PI3K]] — Co-recruited with FAK in the pY-Casp8 scaffolding complex.
- [[BAX]] / [[BAK]] — Effectors activated by Caspase-8-cleaved Bid in type II cells.
- [[NFKB]] — Survival pathway engaged by phosphorylated Caspase-8 scaffolding.

## Linking Summary

- New links added: [[SHP1]], [[Src]]/[[SRC kinase]], [[FYN]], [[LYN]], [[Caspase-7]], [[Caspase-3]], [[Caspase-9]], [[TRAIL]], [[FasL]], [[FAK]], [[BAX]], [[BAK]], [[Apoptosis]], [[DISC]], [[Bid]], [[Colon Cancer]], [[Phosphorylation]], [[p38 MAPK]]
- Suggested new entity notes to create: [[Type I vs Type II Cells]], [[Calpain-2]], [[vFLIP]]
- Strong connections to strengthen:
    - [[Caspase-8]] ↔ [[SHP1]]
    - [[Caspase-8]] ↔ [[SRC kinase]]
    - [[Caspase-8]] ↔ [[Apoptosis]]
    - [[Caspase-8]] ↔ [[Extrinsic Pathway]]