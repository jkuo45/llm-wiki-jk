---
title: ATR
description: Ataxia Telangiectasia and Rad3-related protein kinase, a central sensor of replication stress and single-stranded DNA that activates the DNA damage checkpoint and drives senescence
protected: false
created: 2026-07-04
updated: 2026-07-13
tags:
  - protein
  - kinase
  - dna-damage-response
  - senescence
  - cell-cycle
aliases:
  - Ataxia Telangiectasia and Rad3-related
  - ATR Serine/Threonine Kinase
---

## Overview

[[ATR]] (Ataxia Telangiectasia and Rad3-related) is a serine/threonine protein kinase that serves as a central sensor and transducer of replication stress and single-stranded DNA (ssDNA) lesions. ATR is essential for maintaining genomic stability by activating the intra-S and G2/M DNA damage checkpoints. Together with [[ATM]], ATR orchestrates the DNA damage response (DDR) that can lead to cell cycle arrest, DNA repair, or [[Senescence|cellular senescence]].

## Activation Mechanism

- Activated primarily by stalled replication forks and long stretches of exposed ssDNA
- ssDNA is coated by Replication Protein A (RPA), which recruits ATR via its obligate partner ATRIP (ATR-interacting protein)
- Full activation requires additional cofactors: TopBP1 (recruited via the 9-1-1 complex at dsDNA-ssDNA junctions) and ETAA1
- ATR preferentially phosphorylates substrates on SQ/TQ motifs, with a strong preference for S/T-Q sites

## Key Substrates and Downstream Signaling

- **CHK1**: Primary downstream effector kinase; ATR phosphorylates CHK1 at Ser317 and Ser345, activating it
- CHK1 then phosphorylates CDC25 phosphatases, leading to their degradation or cytoplasmic sequestration, thereby inhibiting CDK activation and halting cell cycle progression
- ATR also phosphorylates RPA, H2AX (forming γ-H2AX at stalled forks), and numerous repair factors
- In senescence, persistent ATR/CHK1 signaling maintains the DDR signal that sustains cell cycle arrest

## Role in Cellular Senescence

ATR plays a critical role in initiating and maintaining senescence:

- **Replicative senescence**: When telomeres shorten to a critical length, they are recognized as DNA lesions, activating both [[ATM]] (for DSBs) and ATR (for uncapped telomeres with ssDNA overhangs)
- **Oncogene-induced senescence (OIS)**: Oncogene activation causes DNA hyper-replication, generating stalled forks and ssDNA that activate ATR
- **Therapy-induced senescence**: Chemotherapeutic agents that cause replication stress activate ATR signaling
- ATR signals through CHK1 → p53 → p21 and through CHK1 → CDC25 degradation → CDK inhibition → Rb hypophosphorylation

> [!info] Source: Dong et al. 2024
> ATR and ATM are the earliest checkpoint kinases activated during the DNA damage response in replicative senescence. They phosphorylate various proteins including CHK2, which transmits DDR signals by phosphorylating p53. Oncogene-induced senescence arises from DDR activation driven by oncogene-induced DNA hyper-replication.

## Pathological Significance

### Cancer
- ATR is frequently overexpressed in cancers with high replication stress (e.g., KRAS-mutant tumors)
- ATR mutations cause Seckel syndrome (microcephalic dwarfism) due to impaired replication stress response
- ATR inhibitors (e.g., ceralasib, elimusertib) are in clinical trials, often combined with DNA-damaging agents
- Tumors with ATR pathway defects are sensitive to PARP inhibitors and other replication stress-inducing therapies

### Aging
- Decline in ATR function with age may contribute to accumulation of DNA damage and age-related genomic instability
- Persistent ATR activation in senescent cells contributes to the chronic DDR signal that sustains SASP

## Connections

- [[ATM]] — Partner kinase in the DDR; ATM responds to DSBs while ATR responds to ssDNA/stalled forks
- [[CHK1]] — Primary downstream effector of ATR signaling
- [[CHK2]] — Shared downstream target with ATM; both kinases phosphorylate CHK2
- [[p53]] — ATR/CHK1 pathway activates p53, inducing p21 and cell cycle arrest
- [[Senescence]] — ATR activation initiates the DDR that drives both replicative and stress-induced senescence
- [[DNA Damage]] — ATR is a central sensor of replication-associated DNA damage
- [[Oncogene-Induced Senescence]] — OIS is driven by ATR activation from oncogene-induced replication stress
- [[Therapy-Induced Senescence]] — Chemotherapy-induced replication stress activates ATR
- [[Senescence-Associated Heterochromatin Foci]] — Persistent ATR signaling contributes to SAHF formation

## Documents

- [[_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities|Cellular senescence and SASP in tumor progression and therapeutic opportunities]]
  - Identifies ATR as one of the earliest checkpoint kinases activated in replicative senescence, alongside ATM

## Linking Summary

- New links added: [[CHK1]], [[DNA Damage]], [[Senescence-Associated Heterochromatin Foci]]
- Suggested new entity notes to create: None
- Strong connections to strengthen:
    - [[ATR]] ↔ [[ATM]]
    - [[ATR]] ↔ [[Senescence]]
    - [[ATR]] ↔ [[DNA Damage]]
