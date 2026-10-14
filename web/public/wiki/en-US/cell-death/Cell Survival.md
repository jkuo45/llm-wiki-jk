---
title: Cell Survival
description: Cell survival signalling is the set of pro-survival pathways — chiefly PI3K-AKT-mTOR, NF-κB and MAPK — that maintain a cell alive in the face of stress by opposing apoptosis, suppressing death-receptor output and rewiring metabolism.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [cell-signaling, cancer, apoptosis, signaling, therapeutic-resistance]
aliases: [Survival, survival signaling, pro-survival signaling, cell survival]
---

# Cell Survival

**Cell survival** is not a discrete pathway but the net effect of a family of signalling circuits that keep a stressed cell alive rather than letting it execute a death programme. In the vault's usage — [[Oncogene]], [[BRAF]], [[MEK1_2]] and [[Growth Factor]] all describe their targets as regulating proliferation, differentiation *and survival* — the term appears as the third arm of the classic growth-factor response triad, downstream of receptor tyrosine kinases and the [[RAS]]–[[RAF]]–MEK–[[ERK]] cascade.

> [!warning] "Survival" is not simply "not apoptotic"
> Survival signalling is often equated with resistance to apoptosis, and reviews do distinguish the two. But the programmes are not interchangeable: survival signals also suppress necroptosis, restrain senescence, sustain metabolism, and block the pro-death arm of death-receptor signalling while leaving the pro-inflammatory arm intact. This is why a cell can be simultaneously apoptosis-resistant and ferroptosis- or necroptosis-permissive.

## Principal Circuits

**PI3K-AKT-mTOR.** Receptor tyrosine kinases activate PI3K, generating PIP3 and recruiting AKT. AKT phosphorylates and inhibits pro-apoptotic factors — BIM (a [[Bcl-2 family|Bcl-2 family]] member), BAD, FOXO transcription factors, and caspase-9 — while activating mTOR, which suppresses autophagy and drives the anabolic growth programme. This is the dominant survival axis in cancers and the target of PI3K and AKT inhibitors in development.

**NF-κB.** RelA/p50 (or c-Rel) is held in check by IκBα until IKK-mediated phosphorylation triggers IκBα degradation. Once nuclear, NF-κB induces anti-apoptotic genes (BCL-2, BCL-XL, XIAP, survivin, c-IAPs) alongside pro-proliferative and pro-survival ones (cyclin D1, MYC). Constitutive NF-κB activation is a signature of many haematological malignancies and is a recognised mechanism of [[Drug Resistance|drug resistance]].

**MAPK/ERK.** Beyond driving proliferation, ERK output stabilises [[BIM]] and BAD by phosphorylating them, which paradoxically *promotes* apoptosis unless further modified; and ERK-mediated RSK activation sets BIM stability. The survival-vs-death outcome of ERK signalling is therefore context- and modification-state dependent rather than fixed.

**Death-receptor signalling.** In TNF-receptor signalling, Complex I — assembled on the membrane — polyubiquitinates RIPK1 and activates NF-κB, supporting survival and inflammation. Only when NF-κB output is suppressed does the same receptor switch to Complex II, recruiting FADD and caspase-8 to trigger apoptosis, or — if caspase-8 is blocked — necroptosis. The receptor therefore encodes survival and death simultaneously, with the outcome set by which complex forms.

## Metabolic Coupling

Survival signalling is inseparable from metabolism. AKT-driven glucose uptake, [[Glycolysis]] and lipogenesis meet the nutrient requirements of a cell that is not permitted to die; mTORC1 blocks [[Autophagy]] by phosphorylating ULK1, removing the recycling route that would otherwise supply the same substrates. Senescent cells, which are metabolically active but permanently growth-arrested, sit at the boundary between this — their survival signalling supports the [[SASP]] while their cell-cycle arrest blocks division.

> [!important] Survival signalling is a therapeutic double edge
> Every survival axis is a resistance mechanism. PI3K-AKT-mTOR activation confers resistance to chemotherapy and to targeted therapy; NF-κB activation confers resistance to apoptosis-inducing agents; and inhibiting survival signalling can convert a resistant tumour to an apoptotic one — while simultaneously worsening the toxicity of the same inhibition in normal tissue, because survival signalling there protects against physiological apoptosis and maintains tissue homeostasis.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|crosstalk_cell_death_mechanisms]] — the clearest vault statement of the mechanism this note covers: TNF receptor Complex I polyubiquitinates RIPK1 and activates NF-κB to maintain cell survival, with the switch to Complex II (apoptosis) or the necrosome (necroptosis) occurring only when NF-κB output is suppressed.

## Connections

- [[Apoptosis]] — survival signalling's principal counterweight; the two are mechanistically opposed and co-expressed in most tumours.
- [[Oncogene]] — oncogene activation promotes survival alongside proliferation and differentiation, and survival is what lets a clone persist after an oncogenic insult.
- [[BRAF]] and [[MEK1_2]] — the RAF-MEK arm of the MAPK cascade transmits growth factor signals that regulate proliferation, differentiation and survival, and is the target of the vault's MEK inhibitor notes.
- [[RAS]] — the upstream GTPase that couples receptor tyrosine kinase activation to the MAPK and PI3K survival outputs.
- [[Autophagy]] — a survival mechanism in its own right, suppressed by mTORC1 under AKT signalling; the functional counterpart of survival signalling during nutrient stress.
- [[Senescence]] — senescence requires both stable cell-cycle arrest and active survival signalling; without the latter the cell simply dies.
- [[mTORC1]] — the node through which AKT enforces growth and blocks the autophagic recycling route.
- [[NF-κB]] — the principal transcriptional arm of survival signalling, inducing both anti-apoptotic and growth genes.
- [[Akt]] — the central kinase effector of the PI3K survival axis, and a direct transcriptional target of oncogenic signalling.
- [[Angiogenesis]] — the tumour vascular supply that lets a surviving clone expand rather than regress.
- [[Drug Resistance]] — clinically, sustained survival signalling is the dominant mechanism by which tumours outlive their targeted therapy.

## Linking Summary

- New links added: [[Apoptosis]], [[Oncogene]], [[BRAF]], [[MEK1_2]], [[RAS]], [[ERK]], [[Autophagy]], [[Senescence]], [[mTORC1]], [[NF-κB]], [[Akt]], [[PI3K]], [[Angiogenesis]], [[Glycolysis]], [[SASP]], [[mTOR]]
- Suggested notes to create: [[Death Receptor Signaling]]
- Strong connections to strengthen: [[Apoptosis]] ↔ [[Cell Survival]] ↔ [[Bcl-2 family]] (the three notes that most obviously belong to one loop currently have no edge between them), [[Oncogene]] ↔ [[Cell Survival]] ↔ [[BRAF]] (the growth-factor response triad is asserted in three notes and anchored by none), [[Senescence]] ↔ [[Cell Survival]] ↔ [[SASP]] (senescence is stable only because survival signalling persists while arrest holds — the coupling that makes senolytics work at all)