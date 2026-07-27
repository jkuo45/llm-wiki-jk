---
title: AP-1
description: Dimeric bZIP transcription factor (Jun/Fos family) that acts as a pioneer factor opening SASP enhancers, drives inflammatory cytokine expression, and bridges senescence, antioxidant defense, autophagy, and neuroinflammation.
created: 2026-07-04
updated: 2026-07-21
tags:
  - protein
  - transcription-factor
  - pioneer-factor
  - senescence
  - sasp
  - inflammation
  - aging
aliases:
  - Activator Protein 1
  - AP1
---

# AP-1

AP-1 (Activator Protein-1) is a dimeric basic leucine zipper (bZIP) transcription factor composed of Jun (c-Jun, JunB, JunD) and Fos (c-Fos, FosB, Fra-1, Fra-2) subunits, with additional dimerization partners from the ATF and MAF families. It binds TPA-response elements (TREs; consensus TGAG/CTCA) and cAMP-response elements (CREs) to regulate proliferation, apoptosis, differentiation, inflammation, and stress responses. In the senescence field, AP-1 is recognized as a pioneer factor that opens closed chromatin at super-enhancers flanking [[SASP|Senescence-Associated Secretory Phenotype]] genes.

## Structure & Dimerization

AP-1 dimers are stabilized by coiled-coil interactions between the leucine zipper regions of each subunit. The basic region contacts the DNA major groove. Dimer composition determines DNA-binding specificity and transcriptional output: Jun homodimers bind TREs weakly, whereas Jun-Fos heterodimers bind with higher affinity. ATF subunits shift specificity toward CREs. [[c-Jun]] is the best-characterized AP-1 subunit in senescence and is sufficient to partially reverse the senescence growth arrest when depleted.

## Mechanism of Action

**Pioneer factor activity:** AP-1 (particularly c-Jun-containing dimers) binds nucleosomal DNA at otherwise inaccessible enhancer regions and initiates chromatin opening. In senescence, this pioneer activity is directed toward loci encoding SASP components, enabling subsequent recruitment of [[BRD4]], [[CEBPα]], and [[P300]] to H3K27ac-marked super-enhancers.

**Regulation:** AP-1 activity is controlled at multiple levels:
- **Transcriptional:** Immediate-early induction by mitogens, stress, and oncogene activation
- **Post-translational:** Phosphorylation by [[JNK]] (c-Jun N-terminal kinase), [[p38 MAPK]], and [[ERK]] regulates stability and transactivation potential
- **Epigenetic buffering:** [[HDAC4]] is recruited to H3K27ac loci and, through interaction with [[HDAC3]], buffers AP-1-driven senescence enhancers until HDAC4 is degraded upon senescence entry

**NF-κB synergy:** AP-1 and [[NF-κB]] co-regulate SASP gene expression. AP-1 pioneering opens enhancer chromatin; NF-κB (via its p65 subunit) provides the primary transcriptional activation signal. Depletion of AP-1 reduces NF-κB-regulated SASP gene expression, demonstrating their interdependence.

## Physiological Functions

### Senescence & SASP

AP-1 acts as the upstream pioneer that opens senescence-activated super-enhancers in [[Replicative Senescence]] and [[Oncogene-Induced Senescence]]. The AP-1→H3K27ac→BRD4/CEBPα axis drives expression of NF-κB-regulated SASP genes, including [[IL-6]], [[IL-8]], [[TNFα]], [[CXCL1]], [[CXCL5]], and [[MMP-3]]. AP-1 is required for both the senescence growth arrest and the pro-inflammatory secretome.

### Antioxidant Defense

AP-1 regulates antioxidant enzyme expression (e.g., [[Catalase]]) and is activated by [[Reactive Oxygen Species]] via upstream kinases ([[JNK]], [[p38 MAPK]]). It competes with [[NRF2]] for limited transcriptional co-activators such as CBP/p300, creating a redox-sensitive regulatory switch: when AP-1 activity is high (inflamed state), NRF2-driven antioxidant gene expression is suppressed, and vice versa.

### Inflammatory Signaling

AP-1 is a convergent node for multiple inflammatory pathways. [[TNFα]] activates AP-1 via TRAF2-ASK1-JNK signaling. [[AGE]]-[[RAGE]] signaling activates AP-1 via MAPK cascades. [[IL-1 Receptor]] signaling activates AP-1 via TRAF6-MAPK. AP-1 in turn drives transcription of pro-inflammatory cytokines and chemokines ([[IL-6]], [[IL-8]], [[CXCL1]], [[CXCL5]], [[CCL2]], [[CCL5]]), completing feed-forward inflammatory loops.

### Autophagy & Cell Death

AP-1-driven SASP cytokines (particularly [[CXCL5]]) promote [[Inflammaging]], which [[Caloric Restriction]] suppresses. Caloric restriction activates [[Autophagy]] via [[AMPK]]/[[mTOR]] signaling, shifting cell fate decisions toward autophagic cell death. This positions AP-1 as an indirect regulator of the senescence-autophagy switch.

## Pathology & Clinical Relevance

### Neuroinflammation

AP-1 connects to [[cGAS-STING Pathway|the cGAS-STING pathway]] (direct edge in the knowledge graph), placing it at the center of microglial inflammatory responses. [[TNFα]] and [[IL-6]], both AP-1 targets, are key drivers of [[Neuroinflammation]] in [[Alzheimer's Disease]] and [[Parkinson's Disease]]. AP-1 activation in microglia contributes to the chronic neuroinflammatory state characteristic of neurodegenerative disease.

### Cancer

AP-1 has dual roles in cancer: the Jun/Fos proto-oncogenes can drive proliferation when aberrantly activated, but AP-1 is also required for [[Oncogene-Induced Senescence]], a tumor-suppressive barrier. In established tumors, AP-1-driven SASP can promote [[Tumor Microenvironment]] remodeling and therapy resistance.

### Aging

AP-1 activity increases with age across multiple tissues. It is a core component of the [[Inflammaging]] program through its regulation of the SASP. The AP-1→NF-κB axis is a proposed [[Senomorphic]] target: reducing AP-1-driven SASP while preserving the growth arrest could ameliorate age-related chronic inflammation.

## Documents

- [[_document_ - The role of the dynamic epigenetic landscape in senescence_orchestrating SASP expression]] — Review identifies AP-1 as a pioneer factor that binds SASP enhancers in RS/OIS, opening closed chromatin to initiate SASP transcription; its program is unleashed upon HDAC4 degradation.
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]] — Review shows AP-1 defines the temporal dynamics of the senescence-associated transcriptional network, including the SASP.
- [[_document_ - Oxidative Stress Harms and Benefits for Human Health]] — Documents AP-1 activation by oxidants as a mechanism linking oxidative stress to inflammation.
- [[task_output_ap1_trace_21_JUL_2026|Graph Trace: AP-1 as a Cross-Community Bridge]] — Graphify trace of AP-1's 66 connections across 4+ aging hallmarks.

## Connections

- [[c-Jun]]: core AP-1 subunit; its depletion partially reverses senescence arrest
- [[SASP|Senescence-Associated Secretory Phenotype]]: AP-1 pioneer-opening of SASP enhancers
- [[NF-κB]]: co-regulator of AP-1-opened SASP genes
- [[BRD4]]: co-binds H3K27ac at AP-1-opened super-enhancers
- [[HDAC4]]: buffers the AP-1 SASP program until degraded upon senescence
- [[HDAC3]]: deacetylase complexed with HDAC4 at AP-1 enhancers
- [[CEBPα]]: co-occupies AP-1-opened SASP enhancers
- [[H3K27ac]]: enhancer mark at AP-1-opened SASP loci
- [[cGAS-STING Pathway]]: upstream DNA-sensing pathway feeding AP-1 activation
- [[NRF2]]: competitive counter-regulator for CBP/p300 co-activators
- [[Catalase]]: AP-1-regulated antioxidant enzyme
- [[p38 MAPK]] / [[JNK]]: upstream kinases activating AP-1
- [[TNFα]] / [[IL-6]] / [[IL-8]]: AP-1 target SASP cytokines
- [[CXCL1]] / [[CXCL5]] / [[CCL2]] / [[CCL5]]: AP-1-regulated chemokines
- [[RAGE]]: upstream activator of AP-1 via MAPK
- [[Inflammaging]]: AP-1-driven chronic inflammation with age
- [[Caloric Restriction]]: suppresses the AP-1→inflammaging axis
- [[Super-enhancer]]: AP-1-opened senescence-activated SEs
- [[Enhancer-Promoter Looping]]: loops anchored by AP-1 at SASP loci
- [[KDM4]]: H3K9 demethylase cooperating with AP-1
- [[EZH2]]: H3K27me3 repressor opposing AP-1

## Linking Summary

- New links added: [[c-Jun]], [[CEBPα]], [[HDAC4]], [[HDAC3]], [[H3K27ac]], [[p38 MAPK]], [[JNK]], [[cGAS-STING Pathway]], [[NRF2]], [[Catalase]], [[CXCL1]], [[CXCL5]], [[CCL2]], [[CCL5]], [[RAGE]], [[Inflammaging]], [[Caloric Restriction]], [[Super-enhancer]], [[Enhancer-Promoter Looping]], [[KDM4]], [[EZH2]], [[Replicative Senescence]], [[Oncogene-Induced Senescence]], [[Cellular Senescence]], [[Tumor Microenvironment]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Neuroinflammation]], [[AMPK]], [[mTOR]], [[Autophagy]], [[Autophagic Cell Death]]
- Suggested new entity notes to create: [[c-Fos]], [[Fra-1]], [[JunB]], [[JunD]], [[ATF Family]], [[TPA-Response Element]]
- Strong connections to strengthen:
    - [[AP-1]] ↔ [[SASP]] (pioneer factor opening SASP enhancers)
    - [[AP-1]] ↔ [[NF-κB]] (co-regulatory partnership at SASP genes)
    - [[AP-1]] ↔ [[BRD4]] (H3K27ac reader at AP-1-opened enhancers)
    - [[AP-1]] ↔ [[NRF2]] (competitive co-activator recruitment)
