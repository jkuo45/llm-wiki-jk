---
title: XIAP
description: X-linked inhibitor of apoptosis protein; the only IAP family member that directly binds and inhibits active caspases, regulated by opposing phosphorylation signals from TBK1 and Akt.
created: 2026-07-16
updated: 2026-07-16
tags:
  - protein
  - apoptosis
  - cancer
  - ubiquitin
  - cell-death
url: #
source: #
aliases:
  - X-linked inhibitor of apoptosis
  - BIRC4
  - API3
  - IAP-like protein
---

# XIAP

## Overview
[[XIAP]] (X-linked inhibitor of apoptosis protein) is a member of the inhibitor of apoptosis (IAP) family that directly binds and inhibits the catalytic activity of executioner caspases ([[Caspase-3]], [[Caspase-7]]) and the initiator caspase [[Caspase-9]]. Unlike other IAPs (cIAP1, cIAP2), XIAP is the only family member with direct caspase-inhibitory activity, making it a central node in apoptotic regulation.

## Structure & Domains
XIAP contains three baculovirus IAP repeat (BIR) domains and a RING finger E3 ubiquitin ligase domain:
- **BIR2 domain**: Binds and inhibits [[Caspase-3]] and [[Caspase-7]] via a surface groove that occludes the active site
- **BIR3 domain**: Binds and inhibits [[Caspase-9]] by preventing dimerization
- **RING domain**: Possesses E3 ubiquitin ligase activity; mediates autoubiquitination and degradation when phosphorylated at Ser430

## Mechanism of Action & Pathways
XIAP acts as a molecular "brake" on the caspase cascade. When caspases are activated, XIAP binds and neutralizes them, preventing substrate cleavage. This inhibition is relieved by:
- **Smac DIABLO**: Released from mitochondria during MOMP, Smac DIABLO binds BIR domains and displaces caspases
- **TBK1/IKKε-mediated degradation**: Phosphorylation of the RING domain at Ser430 triggers Lys48-linked autoubiquitination and proteasomal degradation

> [!important] Opposing Phosphorylation Signals on XIAP
> **TBK1** phosphorylates XIAP at Ser430 (RING domain), triggering degradation and sensitizing cells to apoptosis. **Akt** phosphorylates XIAP at Ser87, stabilizing it and promoting tumor survival. The balance between these signals determines XIAP levels and apoptotic threshold in cancer cells.

## Pathology & Clinical Relevance
- **Cancer**: XIAP is frequently overexpressed in cancers, contributing to chemotherapy resistance. Its stabilization by [[Akt]] signaling is a major survival mechanism.
- **Therapeutic Targeting**: Smac mimetics (e.g., birinapant, LCL161) are small molecules designed to mimic Smac DIABLO and displace caspases from XIAP, restoring apoptotic sensitivity. Clinical trials are ongoing in hematologic malignancies and solid tumors.
- **Neurodegeneration**: XIAP inhibition of caspases may contribute to neuronal survival; XIAP loss exacerbates neurodegeneration in animal models.

## Documents

- [[task_output_caspase_01_JUN_2026|Molecular Mechanisms of Caspase and Bcl-2 Family Regulation]]
  - Details the TBK1/IKKε-mediated phosphorylation and degradation of XIAP, and its functional opposition to Akt-mediated stabilization.

## Connections

- [[TBK1]] — Phosphorylates XIAP at Ser430, triggering ubiquitination and degradation
- [[IKKepsilon]] — Co-kinase with TBK1 that phosphorylates XIAP
- [[Akt]] — Phosphorylates XIAP at Ser87, stabilizing it to promote survival
- [[Caspase-3]] — Executioner caspase directly inhibited by XIAP BIR2 domain
- [[Caspase-7]] — Executioner caspase directly inhibited by XIAP BIR2 domain
- [[Caspase-9]] — Initiator caspase directly inhibited by XIAP BIR3 domain
- [[Smac DIABLO]] — Mitochondrial antagonist that displaces caspases from XIAP
- [[Proteasome]] — Degrades ubiquitinated XIAP after TBK1-mediated phosphorylation
- [[NFKB]] — Survival pathway that can transcriptionally upregulate XIAP
- [[Apoptosis]] — The process XIAP inhibits by blocking the caspase cascade

## Linking Summary

- New links added: [[TBK1]], [[IKKepsilon]], [[Akt]], [[Caspase-3]], [[Caspase-7]], [[Caspase-9]], [[Smac DIABLO]], [[Proteasome]], [[NFKB]], [[Apoptosis]]
- Suggested new entity notes to create: [[Smac mimetics]], [[IAP family]]
- Strong connections to strengthen:
    - [[XIAP]] ↔ [[TBK1]]
    - [[XIAP]] ↔ [[Akt]]
    - [[XIAP]] ↔ [[Caspase-3]]
    - [[XIAP]] ↔ [[Smac DIABLO]]
