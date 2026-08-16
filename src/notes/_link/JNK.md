---
title: JNK
description: c-Jun N-terminal kinase (stress-activated protein kinase); a stress-activated MAPK that regulates apoptosis, proliferation, and inflammation by phosphorylating BAX, Bim, Mcl-1, and c-Jun, with context-dependent (pro-apoptotic vs pro-survival) roles in cancer.
protected: false
created: 2026-07-06
updated: 2026-08-16
tags:
  - enzyme
  - kinase
  - apoptosis
  - stress
  - mapk
  - inflammation
  - cancer
url: #
source: #
aliases:
  - c-Jun N-terminal kinase
  - JNK MAPK
  - MAPK8
  - Stress-activated protein kinase
  - SAPK
---

# JNK

## Overview

[[JNK]] (c-Jun N-terminal kinase), also known as stress-activated protein kinase (SAPK), is a stress-activated member of the [[MAPK]] family that translates cellular stress — including UV, oxidative, genotoxic, and cytokine stress — into transcriptional and apoptotic responses. JNK has context-dependent roles in apoptosis: it can promote cell death by phosphorylating pro-apoptotic substrates like [[BAX]], [[Bim]], and [[Mcl-1]], or promote survival through NF-κB activation. The outcome depends on the duration, intensity, and subcellular localization of JNK signaling. In cancer, its function is famously dual — capable of suppressing tumors by triggering death or promoting them by driving survival and invasive signaling.

## Structure & Activation

JNK exists as three genes (JNK1/MAPK8, JNK2/MAPK9, JNK3/MAPK10) with multiple splice variants; JNK1 and JNK2 are broadly expressed. JNKs are serine/threonine kinases activated by dual phosphorylation of a TPY motif (Thr183/Tyr185) in the activation loop. Upstream MAP2Ks MKK4 and MKK7 are themselves activated by MAP3Ks (ASK1, MEKK1, MLK3) responsive to ROS, calcium, and receptor signals. JNK is activated by UV radiation, oxidative stress, cytokines, and growth factor withdrawal. Activated JNK translocates to the nucleus and phosphorylates substrates including c-Jun (enhancing AP-1 activity), the BH3-only protein [[Bim]], the anti-apoptotic protein [[Mcl-1]], and p53.

## Mechanism of Action & Pathways

- **BAX Phosphorylation**: Under stress conditions (e.g., UV, oxidative stress, growth factor withdrawal), JNK phosphorylates [[BAX]] at Thr167. Unlike the ERK-mediated phosphorylation at the same site (which creates a pro-survival Pin1 binding motif), JNK-mediated phosphorylation promotes BAX activation, conformational change, and mitochondrial translocation, leading to apoptosis.
- **Bim Phosphorylation**: JNK phosphorylates [[Bim]], displacing it from [[Microtubule]]-associated dynein complexes to activate [[Bax]]/Bak.
- **Mcl-1 Phosphorylation**: JNK phosphorylates and destabilizes [[Mcl-1]], removing a survival brake.
- **Transcriptional Regulation**: Through c-Jun/AP-1, JNK induces pro-apoptotic genes (e.g., [[FasL]], Bim) and pro-inflammatory/proliferative gene programs.

> [!info] Context-Dependent Phosphorylation at Thr167
> The same residue on [[BAX]] (Thr167) is targeted by both survival and death kinases: [[ERK2]] phosphorylation promotes survival via [[Pin1]] binding, while JNK or [[p38 MAPK]] phosphorylation promotes apoptosis. This represents a molecular coincidence detector where the cellular context (survival vs. stress signals) determines the outcome of a single phosphorylation event.

## Physiological & Pathological Function

JNK is a sensor of [[Oxidative Stress]] and genotoxic damage, coupling these insults to either repair or death. Context determines outcome: sustained JNK in normal cells favors death (suppressing tumor initiation), whereas in established tumors chronic JNK activation can support survival, [[EMT]], and [[Metastasis]] via cytokine and AP-1 networks. In hepatocellular and other carcinomas, JNK signaling can be co-opted to enhance invasion and resistance to [[Chemotherapy]]. Conversely, JNK activation by certain cytotoxic therapies contributes to their efficacy. In neurodegeneration, JNK-mediated apoptosis contributes to neuronal death in Alzheimer's, Parkinson's, and stroke; in metabolic disease, JNK activation in obesity contributes to insulin resistance and hepatic steatosis.

## Clinical & Research Relevance

JNK isoforms are pursued as targets, though isoform-specific inhibitors (e.g., SP600125, AS601245) have seen limited clinical success because of the pathway's pleiotropy. The therapeutic strategy often focuses on modulating JNK contextually — e.g., combining JNK activation with agents that lower the [[Apoptosis]] threshold, or inhibiting JNK in tumors where it drives invasive signaling.

## Documents

- [[task_output_caspase_01_JUN_2026|Molecular Mechanisms of Caspase and Bcl-2 Family Regulation]]
  - Identifies JNK as a kinase that can phosphorylate BAX at Thr167 to promote apoptosis, contrasting with ERK-mediated pro-survival phosphorylation at the same site.

- [[_document_ - Caspase|Caspase]]
  - JNK and p38 MAPK phosphorylate Bim at Ser65 (mouse) to activate it under control of IL-3.

- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
  - An initial study identified GSK3 as the major kinase for T163; a more recent study demonstrated JNK primarily phosphorylates T163, triggering subsequent phosphorylation events.

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
  - p53 can act as an antioxidant factor to suppress oxidative stress by regulating redox-related proteins, including Jun N-terminal kinase (JNK).

## Connections

- [[BAX]] — JNK phosphorylates BAX at Thr167 to promote apoptosis
- [[ERK2]] — Opposing kinase that phosphorylates BAX Thr167 for survival via Pin1
- [[Pin1]] — Isomerase that determines the outcome of BAX Thr167 phosphorylation (survival if ERK, death if JNK)
- [[p38 MAPK]] — Related stress kinase that can also phosphorylate BAX Thr167 and Bim
- [[Bim]] — BH3-only protein phosphorylated and activated by JNK
- [[Mcl-1]] — Anti-apoptotic protein destabilized by JNK phosphorylation
- [[MAPK]] — The kinase family to which JNK belongs
- [[Apoptosis]] — Death program driven by JNK under stress conditions
- [[NFKB]] — JNK can activate NF-κB for survival signaling in some contexts
- [[GM-CSF]] — Growth factor whose withdrawal activates JNK
- [[Oxidative Stress]] — A principal physiological activator of JNK
- [[Inflammation]] — AP-1/c-Jun programs downstream of JNK
- [[EMT]] — Invasive program that can be promoted by chronic JNK signaling
- [[Chemotherapy]] — Efficacy influenced by JNK-dependent death or survival
- [[Metastasis]] — JNK signaling supports invasive phenotypes in established tumors

## Linking Summary

- New links added: [[BAX]], [[ERK2]], [[Pin1]], [[p38 MAPK]], [[Apoptosis]], [[NFKB]], [[GM-CSF]], [[MAPK]], [[Bim]], [[Mcl-1]], [[Oxidative Stress]], [[Inflammation]], [[EMT]], [[Metastasis]], [[Chemotherapy]]
- Suggested new entity notes to create: [[MKK4]], [[MKK7]], [[ASK1]], [[c-Jun]], [[AP-1]], [[SP600125]]
- Strong connections to strengthen:
    - [[JNK]] ↔ [[BAX]]
    - [[JNK]] ↔ [[ERK2]]
    - [[JNK]] ↔ [[Bim]]
    - [[JNK]] ↔ [[Mcl-1]]