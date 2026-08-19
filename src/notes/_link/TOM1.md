---
title: TOM1
description: Target of Myb1, a VHS/GAT-domain endosomal trafficking adaptor that sorts ubiquitinated membrane receptors to lysosomes, negatively regulates TLR/cytokine signaling, and participates in autophagy; a SIRT5 desuccinylation target linked to autophagic protection in cardiac ischemia.
protected: false
created: 2026-08-18
updated: 2026-08-18
tags:
  - protein
  - autophagy
aliases: [Target of Myb1, Target of Myb protein 1, TOM1 protein]
---
# TOM1

**TOM1** (target of Myb1) is a membrane-trafficking adaptor protein that couples ubiquitinated cargo to clathrin-coated endosomal machinery, directing receptors toward lysosomal degradation. It acts as a negative regulator of innate immune signaling ([[Toll-like Receptor]] and IL-1 receptor pathways) and has been implicated in selective [[Autophagy]]. In the cardiac context, TOM1 is a substrate of [[SIRT5]]: SIRT5-mediated desuccinylation stabilizes TOM1 and promotes autophagic flux, protecting the heart during myocardial infarction.

## Overview

- Encoded by the TOM1 gene (chromosome 22q13.1 in humans); ubiquitously expressed with enrichment in immune and cardiac tissue.
- Named for its discovery as a target of the Myb transcription factor in hematopoietic cells; later characterized as a general endosomal sorting adaptor.
- Functions in a trimeric complex with TOLLIP (Toll-interacting protein) and [[Clathrin]]-coated structures to recognize ubiquitinated cargo and traffic it from endosomes to lysosomes.

## Structure & Domains

- **VHS domain (N-terminus)**: Vps27/Hrs/STAM homology domain that binds membrane phospholipids and mediates recruitment to endosomal membranes.
- **GAT domain (central)**: GGA and Tom1 domain containing ubiquitin-binding capacity — the site of interaction with ubiquitinated cargo; also mediates TOLLIP and clathrin association.
- **C-terminal region**: contains clathrin-binding motifs and coiled-coil elements that recruit [[Clathrin]] to endosomal membranes.
- TOM1 lacks intrinsic enzymatic activity; its function is entirely adaptor-based (ubiquitin-sensing + membrane/machinery recruitment).

## Mechanism of Action & Pathways

- **Endosomal sorting of ubiquitinated cargo**: TOM1 (with TOLLIP and clathrin) recognizes K48/K63-ubiquitinated receptors on early endosomes and routes them into multivesicular bodies for lysosomal degradation, terminating signaling.
- **Negative regulation of innate immunity**: TOM1 recruitment to ubiquitinated [[Toll-like Receptor]] 4 and IL-1 receptor complexes accelerates their clearance, damping pro-inflammatory [[NF-κB]] and cytokine output; TOM1 knockdown enhances TLR- and IL-1β-driven inflammation.
- **Autophagy**: TOM1 participates in selective/ubiquitin-mediated [[Autophagy]], linking ubiquitinated substrates to autophagic machinery (e.g., through interactions with [[p62]]/SQSTM1 and GABARAP-family proteins) for clearance of damaged organelles and protein aggregates.
- **[[SIRT5]] regulation**: per the pending Tier 1 sirtuin paper, SIRT5 desuccinylates TOM1 at Lys48, stabilizing the protein and enhancing autophagic flux in ischemic cardiomyocytes — a cardioprotective, quality-control axis.

## Physiological Function

- **Membrane protein homeostasis**: constitutive turnover of ubiquitinated receptors (EGFR-family, TLRs, cytokine receptors) keeps signaling balanced.
- **Immune tolerance/regulation**: dampens excessive inflammatory responses by limiting receptor half-life; TOM1-deficient models show exaggerated cytokine production.
- **Autophagic quality control**: supports basal and stress-induced [[Autophagy]] in metabolically active tissues, including the heart.
- **Cardiac stress response**: autophagic clearance of damaged mitochondria and protein aggregates during ischemia/reperfusion limits [[Apoptosis]] and preserves [[Cardiomyocytes]] viability.

## Pathology & Clinical Relevance

- **Inflammatory disease**: reduced TOM1 activity is associated with enhanced TLR/NF-κB signaling and cytokine amplification, a mechanism relevant to chronic inflammatory states (e.g., atherosclerosis, metabolic inflammation).
- **Myocardial infarction**: the SIRT5–TOM1–autophagy axis is reported to protect cardiac function after ischemia by sustaining autophagic flux; loss of this regulation worsens ischemic injury (pending document ingestion).
- **Cancer**: TOM1-mediated receptor downregulation can suppress oncogenic growth-factor signaling; expression changes have been observed in several tumor types, though the mechanistic picture is less mature than for the immune/cardiac roles.

## Documents

- No wiki documents ingested yet. Source material pending ingestion from the sirtuin research-gap analysis (`src/tasks/task_output_sirtuin_research_gaps_14_August_2026.md`), which flags TOM1 as a SIRT5 substrate in cardiac autophagic protection.

## Connections

- [[SIRT5]]: Desuccinylates TOM1 (Lys48), stabilizing it and promoting protective autophagy in myocardial infarction (pending paper).
- [[Autophagy]]: TOM1 is an autophagy-related sorting adaptor; the SIRT5–TOM1 axis sustains autophagic flux in ischemic cardiomyocytes.
- [[Ubiquitin]]: TOM1 recognizes ubiquitinated cargo via its GAT domain — the molecular basis of its sorting and clearance functions.
- [[Lysosome]]: Terminal destination for TOM1-routed receptors and autophagic cargo.
- [[Toll-like Receptor]] / [[NF-κB]]: TOM1 negatively regulates TLR/IL-1R signaling, limiting NF-κB-driven cytokine production.
- [[Cardiomyocytes]]: Cardiac ischemia context in which SIRT5–TOM1–autophagy is cardioprotective.
- [[p62]]: Autophagic receptor with which TOM1 cooperates in selective autophagic clearance.

## Linking Summary

- New links added: [[SIRT5]], [[Autophagy]], [[Ubiquitin]], [[Lysosome]], [[Toll-like Receptor]], [[NF-κB]], [[Cardiomyocytes]], [[p62]].
- Suggested new entity notes to create: [[Endosome]] (trafficking hub; currently unresolved), [[Clathrin]] (central to TOM1's sorting mechanism), [[Myocardial Infarction]], [[TOLLIP]] (canonical binding partner).
- Strong connections to strengthen:
  - [[SIRT5]] ↔ [[TOM1]] — mechanistic pairing for the pending cardiac-autophagy document.
  - [[TOM1]] ↔ [[Autophagy]] — the cardioprotective autophagic-flux finding.

- Justification: [[Endosome]] and [[Clathrin]] are recurring concepts across the vault's trafficking and autophagy literature and would resolve multiple unresolved links; [[TOLLIP]] is TOM1's obligate functional partner. The [[SIRT5]] ↔ [[TOM1]] edge is the core finding of the pending Tier 1 paper.
