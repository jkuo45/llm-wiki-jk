---
title: Caspase-3
description: Primary executioner (effector) caspase of apoptosis; cleaves a wide array of cellular substrates to dismantle the cell and serves as the convergence point of intrinsic and extrinsic apoptotic pathways and the gold-standard apoptosis marker.
protected: false
created: 2026-07-04
updated: 2026-08-28
tags:
  - enzyme
  - protein
  - apoptosis
  - caspase
  - cell-death
url: #
source: #
aliases:
  - Caspase 3
  - CPP32
  - Yama
  - SCA-1
  - CASP3
  - Apopain
---

# Caspase-3

## Overview

[[Caspase-3]] is the primary executioner (effector) caspase in apoptosis, responsible for cleaving the majority of apoptotic substrates. It sits at the convergence of the intrinsic ([[Caspase-9]]-dependent) and extrinsic ([[Caspase-8]]-dependent) pathways and is the most widely used marker of apoptotic cell death (via cleaved caspase-3 immunostaining).

## Structure & Activation

Procaspase-3 is a ~32 kDa zymogen containing an N-terminal prodomain, a large subunit (p17), and a small subunit (p12). It is activated by proteolytic cleavage at Asp175-Ser176 and Asp9-Ser10 by initiator caspases:

- **Intrinsic pathway**: [[Caspase-9]] cleaves procaspase-3 at the [[Apoptosome]]
- **Extrinsic pathway**: [[Caspase-8]] directly cleaves procaspase-3 (type I cells) or indirectly via Bid→MOMP→Caspase-9 (type II cells); [[Caspase-10]] can also cleave procaspase-3

Active Caspase-3 is a heterotetramer (p17/p12)₂ forming two active sites, with broad substrate specificity for aspartate-containing motifs (DXXD↓).

## Mechanism of Action & Pathways

Active Caspase-3 cleaves >1000 cellular substrates, including:

- **DNA repair**: [[PARP1]] (cleavage at DEVD↓G inactivates repair, conserving ATP for apoptosis)
- **DNA fragmentation**: [[ICAD]] (cleavage releases [[CAD]], the Caspase-Activated DNase, to fragment DNA)
- **Nuclear structure**: [[Lamins]] (dismantles nuclear lamina, leading to nuclear condensation)
- **Cytoskeleton**: [[Actin]], [[Gelsolin]] (cell shrinkage and cytoskeletal disassembly), [[Rho-associated kinase]] ([[ROCK1]]) — cleavage produces a constitutively active kinase that drives membrane blebbing

> [!info] Convergence Point of Apoptotic Pathways
> Caspase-3 integrates signals from both the extrinsic pathway (via [[Caspase-8]]) and the intrinsic pathway (via [[Caspase-9]]). Its activation marks the irreversible commitment to apoptotic cell death.

## Regulation

Caspase-3 activity is modulated by post-translational modifications:

- **[[Phosphorylation]]**: [[p38 MAPK]] phosphorylates Caspase-3 at Ser150, suppressing its activity; reversed by [[PP2A]].
- **[[PKCδ]]**: Directly enhances Caspase-3 activity.
- **Inhibition by IAPs**: [[XIAP]] and [[cIAP1]]/[[cIAP2]] bind and inhibit Caspase-3. [[Smac DIABLO]] relieves this inhibition. TBK1-mediated XIAP degradation releases this brake.

## Physiological Function

Caspase-3 is essential for normal development, immune system homeostasis, and tissue remodeling. Caspase-3 knockout mice exhibit brain hyperplasia, cranial malformations, and perinatal lethality, underscoring its non-redundant role in developmental apoptosis.

## Pathology & Clinical Relevance

- **Cancer**: Tumor cells frequently evade Caspase-3 activation through overexpression of [[XIAP]], loss of upstream caspases, or mutations in the intrinsic pathway. Cleaved caspase-3 is used as a biomarker for treatment-induced apoptosis.
- **Neurodegeneration**: Excessive Caspase-3 activation contributes to neuronal death in Alzheimer's disease, Parkinson's disease, and stroke.
- **Degenerative diseases**: Inappropriate Caspase-3 activation drives pathology in cardiac ischemia, liver disease, and autoimmune conditions.

## Role in Cancer Research

- **Apoptosis Marker**: Detection of cleaved caspase-3 by immunohistochemistry or western blot is the gold standard marker for apoptosis in cancer research and drug development.
- **Therapeutic Induction**: Many chemotherapeutic agents (including [[Cisplatin]], [[Taxol]], [[Doxorubicin]]) ultimately kill cancer cells through Caspase-3-dependent apoptosis.
- **Melittin Study**: [[melittin]] treatment has been shown to induce cleaved caspase-3 in [[triple-negative breast cancer]] cells.

## Relationship to SIRT1 (caspase → sirtuin feedback)

> [!info] Reciprocal to SIRT1's suppression of Caspase-3
> Beyond SIRT1 suppressing Caspase-3 (via FOXO4 deacetylation), the axis runs backwards: **Caspase-3 and [[Caspase-9]] directly cleave SIRT1** during apoptosis. The cleavage site is the C-terminal **DEPDVP(704–709)** motif; cleaved SIRT1 relocalizes from nucleus to cytoplasm and is then poly-ubiquitinated by the E3 ligase TRIM28 (ATM-dependent) and degraded, reinforcing the death program (Ohsawa & Miura, FEBS Lett 2006; PMID 35541916, Int J Biol Sci 2022). Notably, cytoplasmic SIRT1 becomes *pro*-apoptotic — an effect that is caspase-dependent but deacetylase-independent — so caspase cleavage flips SIRT1 from survival factor to death promoter.

- [[SIRT1]]: Cleaved by Caspase-3/-9 at DEPDVP(704-709); nuclear SIRT1 is anti-apoptotic, cytoplasmic cleaved SIRT1 is pro-apoptotic.
- TRIM28: E3 ligase coupling SIRT1 caspase-cleavage to ubiquitination/degradation in the DNA-damage response.
- [[Bcl-xL]]: Blocks caspase-9, preventing SIRT1 cleavage/relocalization.

## Documents

- [[task_output_caspase_01_JUN_2026|Molecular Mechanisms of Caspase and Bcl-2 Family Regulation]]
  - Discusses Caspase-3 as one of the caspases inhibited by XIAP, whose release (via TBK1-mediated XIAP degradation) sensitizes cells to apoptosis.

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]]
  - Cytoplasmic release of cytochrome c activates Caspase-3 via the formation of the Apoptosome, which is made up of cytochrome c, Apaf-1, and Caspase-9.

- [[_document_ - Caspase|Caspase]]
  - Caspases are broadly categorized into initiator caspases (e.g., Caspase-2, Caspase-8, Caspase-9, Caspase-10) and executioner caspases (e.g., Caspase-3, Caspase-6, Caspase-7).

- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
  - The cleavage (activation) of executioner caspases such as Caspase-3 or Caspase-7 is a hallmark of apoptosis.

- [[_document_ - Honeybee venom and melittin suppress growth factor receptor activation in HER2-enriched and triple-negative breast cancer - npj Precision Oncology|Honeybee venom and melittin suppress growth factor receptor activation]]
  - TNBC cells treated with honeybee venom or melittin were processed by a Caspase-3 assay to quantify apoptosis.

- [[_document_ - Ivermectin, a potential anticancer drug derived from an antiparasitic drug|Ivermectin, a potential anticancer drug]]
  - After intervention with IVM, the expression of Caspase-3 in DLD1 and Ls174T cells increased, indicating IVM has an apoptosis-inducing effect.

- [[_document_ - sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i|sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i]]
  - SIRT1 acting via FOXO4 suppresses the proapoptotic proteases Caspase-3 and Caspase-7 in transformed, but not untransformed, epithelial cells.

  - [[_document_ - Caspase-mediated changes in Sir2alpha during apoptosis|Caspase-mediated changes in Sir2α during apoptosis (Ohsawa & Miura, FEBS Lett 2006)]]
    - Caspase-9 and Caspase-3 directly cleave SIRT1 (Sir2α) and relocalize it nucleus→cytoplasm during apoptosis; blocked by dominant-negative caspase-9 or Bcl-xL.

  - [[_document_ - Post-translational Modification in Control of SIRT1 Stability during DNA Damage Response|SIRT1 stability in the DNA damage response (Ouyang et al., IJBS 2022)]]
    - C-terminal cleavage at DEPDVP(704-709) plus [[KAP1|TRIM28]]-mediated polyubiquitination/degradation under severe DNA damage; reciprocal PTMs that enhance DNA-damage-induced cell death.

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
  - An extract of Anoectochilus roxburghii flavonoids reduced neuron apoptosis by positively regulating SIRT1 expression, reducing expression of apoptosis-related molecules including Caspase-3.

## Connections

- [[Apoptosis]]: The process where Caspase-3 is the key executioner.
- [[Caspase-9]]: Upstream initiator caspase that activates Caspase-3 in the intrinsic pathway.
- [[Caspase-8]]: Upstream initiator caspase that activates Caspase-3 in the extrinsic pathway.
- [[Caspase-7]]: Executioner caspase with overlapping but distinct functions.
- [[XIAP]]: Direct inhibitor that binds and suppresses Caspase-3; TBK1-mediated degradation liberates it.
- [[TBK1]]: Kinase whose phosphorylation of XIAP leads to Caspase-3 liberation.
- [[Akt]]: Phosphorylates Caspase-9, indirectly suppressing Caspase-3 activation.
- [[PARP1]]: Classical Caspase-3 cleavage substrate used as apoptosis marker.
- [[ICAD]]: Cleavage by Caspase-3 activates DNA fragmentation.
- [[PKCδ]] / [[p38 MAPK]]: Regulatory kinases for Caspase-3.
- [[PP2A]]: Phosphatase that reverses p38 MAPK-mediated inhibition.
- [[melittin]]: Induces cleaved Caspase-3 in breast cancer cells.
- [[SIRT1]]: Cleaved by Caspase-3/-9 at DEPDVP(704-709) during apoptosis; reciprocal arm of the SIRT1→Caspase-3 suppression axis
- [[Bcl-xL]]: Inhibits caspase-9, preventing SIRT1 cleavage/relocalization
- TRIM28: E3 ligase coupling SIRT1 caspase-cleavage to degradation (DNA-damage response)

## Linking Summary

- New links added: [[Caspase-9]], [[Caspase-8]], [[Caspase-7]], [[XIAP]], [[TBK1]], [[Akt]], [[Apoptosis]], [[p38 MAPK]], [[PP2A]], [[Phosphorylation]], [[PARP1]], [[melittin]], [[SIRT1]], [[Bcl-xL]]
- Suggested new entity notes to create: [[PARP]], [[ICAD]], [[Apaf-1]], [[DFF45]], [[DISC (Death-Inducing Signalling Complex)]], [[CAD]]
- Strong connections to strengthen:
    - [[Caspase-3]] ↔ [[XIAP]]
    - [[Caspase-3]] ↔ [[Caspase-9]]
    - [[Caspase-3]] ↔ [[PKCδ]]
    - [[Caspase-3]] ↔ [[p38 MAPK]]
    - [[Caspase-3]] ↔ [[SIRT1]]