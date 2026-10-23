---
title: Fas
description: Fas (CD95/APO-1/FasR/TNFRSF6) is a TNF-superfamily death receptor that assembles the DISC with FADD and Caspase-8 to trigger extrinsic apoptosis, and whose blockade of Caspase-8 diverts signaling into RIPK1/RIPK3/MLKL necroptosis.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [receptor, apoptosis, cell-death, immunology]
url: #
source: #
aliases: [CD95, FasR, TNFRSF6, APO-1]
---

# Fas

## Overview

**Fas** (CD95, also known as FasR, TNFRSF6, and APO-1) is the prototypical member of the death-receptor subgroup of the TNF receptor superfamily. It is a type I transmembrane glycoprotein that transduces an extrinsic apoptotic signal upon ligation by its ligand [[FasL]], and it is one of the few receptors able to convert a cytokine signal directly into executioner caspase activation. Fas sits at the intersection of three processes: canonical extrinsic [[Apoptosis]], the [[Necroptosis]] switch that operates when the caspase arm is blocked, and the control of immune homeostasis by cytotoxic lymphocytes.

## Structure & Domains

Fas is a 335-residue type I membrane protein with an extracellular cysteine-rich ligand-binding domain (three disulfide-rich CRD modules) and a single transmembrane helix. The cytoplasmic tail contains the **death domain (DD)**, an ~80-amino-acid motif that recruits signalling adaptors through homotypic interactions. Unlike [[TNFR1]], Fas carries its death domain as a constitutive part of the receptor rather than as a C-terminal appended module, which is why its signalling complex is simpler and forms spontaneously upon ligand binding.

## Mechanism of Action & Pathways

- **DISC assembly**: Trimeric [[FasL]] binds Fas and clusters the intracellular tails. The adaptor [[FADD]] docks through its own death domain, and pro-caspase-8 binds FADD through its death effector domain. The resulting [[DISC]] triggers proximity-induced auto-activation of [[Caspase-8]].
- **Execution**: Active Caspase-8 cleaves executioner caspases ([[Caspase-3]], [[Caspase-7]]) directly, or cleaves [[Bid]] to engage the mitochondrial amplification loop, converting a limited extrinsic signal into a full intrinsic apoptotic programme.
- **Necroptosis switch**: When Caspase-8 activity is blocked pharmacologically (e.g. by [[Z-VAD-FMK]]) or genetically, the Fas signal is routed to a RIPK1–RIPK3 necrosome that phosphorylates [[MLKL]] and executes [[Necroptosis]]. Caspase-8 is therefore the brake on the necrosome, and its loss in caspase-8-deficient animals causes lethal RIPK1/RIPK3-dependent inflammation.

> [!info] Caspase-8 as the fate selector
> The same Fas/FasL input therefore yields apoptosis when Caspase-8 is available and necroptosis when it is not — the same binary logic that governs [[Erythronecroptosis]] versus [[Eryptosis]] in red cells.

## Physiological Function

Fas is constitutively expressed on most nucleated cells and is required for activation-induced cell death of chronically stimulated T cells, for the elimination of virus-infected and transformed cells by [[Natural Killer Cells]] and cytotoxic T cells, and for maintaining immune privilege in the eye, testis and placenta. In mature [[Erythrocytes]], Fas is one of the few death-receptor-type proteins retained, and Fas/FasL engagement is an established induction route for both eryptosis and erythronecroptosis.

## Pathology & Clinical Relevance

- **Cancer**: Loss of Fas surface expression, *FAS* mutations, and up-regulation of decoy receptors are among the best-characterised mechanisms by which tumour cells escape immune-mediated killing in [[Cancer]], [[leukemia]], and [[cervical cancer]]. Conversely, Fas expression marks chemosensitivity, so its down-regulation often accompanies acquired drug resistance.
- **Autoimmunity**: Defective Fas/FasL signalling causes autoimmune lymphoproliferative syndrome, with lymphadenopathy, splenomegaly and autoantibody production.
- **Therapeutics**: Fas-targeted agonism is limited by the short half-life of FasL and by normal-tissue toxicity; the pathway is instead exploited indirectly, for example by restoring Caspase-8 activity via [[SHP1]] dephosphorylation in resistant tumours.

## Documents

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]] — Fas (CD95) named alongside TNFR1 as a canonical death receptor.
- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]] — Fas as a cell-surface trigger of the extrinsic pathway.

## Connections

- [[FasL]] — the ligand whose trimerization clusters Fas and nucleates the DISC
- [[FADD]] — adaptor that bridges Fas to pro-Caspase-8 at the DISC
- [[Caspase-8]] — initiator caspase and the brake that prevents necroptosis
- [[RIPK1]] / [[RIPK3]] / [[MLKL]] — necrosome arm engaged when Caspase-8 is blocked
- [[Necroptosis]] — alternative fate of Fas signalling without Caspase-8
- [[Apoptosis]] / [[Extrinsic Pathway]] — the canonical outcome of Fas activation
- [[Erythrocytes]] / [[Erythronecroptosis]] / [[Eryptosis]] — red-cell death modalities sharing the Fas/FasL entry point
- [[Cancer]] — tumour evasion via Fas loss and decoy-receptor up-regulation
- [[Bid]] — cleaved by Caspase-8 to link the extrinsic and mitochondrial pathways

## Linking Summary

- Relocated from `src/notes/cancer/` to `src/notes/cell-death/` (death-receptor core machinery); content expanded to full entity depth.
- New links added: [[Caspase-8]], [[RIPK1]], [[RIPK3]], [[MLKL]], [[Necroptosis]], [[Erythrocytes]], [[Erythronecroptosis]], [[Eryptosis]], [[Bid]], [[Z-VAD-FMK]], [[Natural Killer Cells]], [[SHP1]].
- Suggested new entity notes to create: [[Death Domain]], [[Autoimmune Lymphoproliferative Syndrome]].
- Strong connections to strengthen: [[Fas]] ↔ [[FasL]], [[Fas]] ↔ [[Caspase-8]], [[Fas]] ↔ [[Necroptosis]].
