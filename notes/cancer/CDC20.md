---
title: CDC20
description: Cell division cycle 20 (CDC20) is a ~55 kDa WD40 repeat protein that serves as the essential co-activator of the APC/C E3 ubiquitin ligase, governing the metaphase-to-anaphase transition and mitotic exit.
created: 2026-07-06
updated: 2026-07-06
tags:
  - protein
aliases: [Cell division cycle 20, p55CDC, Fizzy]
---

# CDC20

**CDC20** (Cell division cycle 20, also known as p55CDC or Fizzy in [[Drosophila]]) is a ~55 kDa WD40 repeat protein that serves as the essential co-activator of the [[APC-C]] (Anaphase-Promoting Complex/Cyclosome) E3 [[Ubiquitination|ubiquitin]] ligase during mitosis. It governs the metaphase-to-anaphase transition and mitotic exit by recruiting specific substrates for ubiquitination and [[Proteasome|proteasomal]] degradation.

## Structure

CDC20 is a multi-domain protein organized for both APC/C binding and substrate recognition:

- **N-terminal C-box** (CRYIP motif): Mediates direct binding to the TPR (tetratricopeptide repeat) subunits APC3/CDC27 and APC8/CDC23 of APC/C, docking the co-activator onto the complex.
- **WD40 repeat domain**: Seven WD40 repeats — each approximately 40 amino acids with a conserved Trp-Asp motif — fold into a seven-bladed β-propeller structure that forms the substrate-binding surface. The central channel and upper surface of the β-propeller recognize degradation motifs on target proteins.
- **KEN-box** and **D-box**: These motifs within CDC20 itself are recognized by APC-C-CDH1, targeting CDC20 for autocatalytic degradation after anaphase and ensuring the mitotic co-activator switch from CDC20 to [[CDH1]].
- **IR tail** (Ile-Arg motif at the extreme C-terminus): Binds APC10/DOC1, a core APC/C subunit that orients the substrate for efficient ubiquitin transfer.

## Function

CDC20 recruits substrates to APC/C by recognizing two classes of destruction motifs:

- **D-box** (destruction box, consensus RxxLxxxxN): Present on [[CYCLIN B1]], [[Securin]], and many other mitotic proteins.
- **KEN-box** (consensus KENxxxN/D/E): Present on [[Securin]], CDC20 itself, and [[BUBR1]].

APC-C-CDC20 ubiquitinates two critical substrates to trigger anaphase:

1. **[[CYCLIN B1]]** — the regulatory subunit of [[CDK1]]. Its degradation inactivates CDK1, licensing mitotic exit.
2. **[[Securin]]** — an inhibitor of separase, the protease that cleaves cohesin rings holding sister chromatids together. Securin destruction liberates separase, enabling sister chromatid separation at the metaphase-to-anaphase transition.

These two ubiquitination events constitute the minimal requirement for anaphase onset. Beyond this core role, APC-C-CDC20 also degrades [[Mcl-1]] during prolonged mitotic arrest, coupling SAC activation to the [[Apoptosis|apoptotic]] machinery. [[CDK1]]-dependent [[Phosphorylation|phosphorylation]] of Mcl-1 at Thr92 primes it for CDC20 recognition, directly linking mitotic kinase activity to cell death commitment.

## Regulation by the Spindle Assembly Checkpoint

CDC20 is the central node through which the spindle assembly checkpoint (SAC) blocks anaphase. In early mitosis, unattached kinetochores catalyze the assembly of the mitotic checkpoint complex (MCC), composed of [[MAD2]], [[BUBR1]], and [[BUB3]], which bind and sequester CDC20. MCC-bound CDC20 cannot activate APC/C, preventing [[Ubiquitination]] of cyclin B and securin. This provides time for all chromosomes to achieve bipolar attachment to spindle [[Microtubule|microtubules]] under tension.

Once the SAC is satisfied, the MCC disassembles via dynein-mediated stripping, p31comet-catalyzed release, and APC/C-dependent ubiquitination of MCC components. Released CDC20 rapidly activates APC/C, triggering the precipitous degradation of securin and cyclin B within minutes. CDC20 is then itself ubiquitinated by APC-C-CDH1 and degraded, completing the co-activator switch.

## Cancer Relevance

CDC20 is frequently overexpressed in human cancers, including [[Colon Cancer|colorectal]], [[Lung Cancer|lung]], [[Gastric Cancer|gastric]], [[Hepatocellular Carcinoma|hepatocellular]], and [[ovarian cancer|ovarian]] carcinomas, as well as [[leukemia|leukemias]] and [[Lymphoma|lymphomas]]. Overexpression arises through gene amplification, transcriptional upregulation by [[MYC]] and E2F family members, and reduced ubiquitin-dependent turnover.

Elevated CDC20 drives chromosome instability (CIN) and [[Aneuploidy|aneuploidy]] by partially overriding the SAC, accelerating mitotic progression even in the presence of misattached kinetochores. This permits segregation errors — lagging chromosomes, micronuclei, and merotelic attachments — that fuel intratumor heterogeneity, metastasis, and drug resistance. High CDC20 expression correlates with poor prognosis, advanced tumor stage, and reduced overall survival across diverse cancer types.

CDC20 is an emerging therapeutic target. Pharmacological inhibitors of APC-C-CDC20 include **proTAME** (a prodrug of TAME that competes with D-box-containing substrates for APC/C binding) and **apcin** (which binds CDC20's D-box receptor pocket, blocking substrate recruitment). These agents induce mitotic arrest and [[Apoptosis]] and synergize with [[Microtubule|microtubule]]-targeting agents such as [[paclitaxel]]. However, the narrow therapeutic window imposed by CDC20's essential role in normal cell division remains a significant challenge. Strategies to exploit elevated CDC20 levels in tumors for selective vulnerability — for example, through synthetic lethality with SAC defects — are under active investigation.

## Documents

List of documents that mention this entity

  - [[_document_ - Caspase|Caspase]]
    - CDC20-containing APC/C and SCF-FBW7 target Mcl-1 for ubiquitination and degradation during mitotic arrest; CDK1 phosphorylation primes Mcl-1 at Thr92 for CDC20 recognition, directly coupling mitotic kinase activity to apoptotic commitment, while JNK and p38 MAPK pathways modulate this turnover.

  - [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
    - These studies have shown that in addition to the mechanisms described above, two E3 ligases, APC-C CDC20 (APC-C with CDC20) and SCF Complex FBW7, target Mcl-1 for destruction during mitosis \[ – \].


## Connections

- [[APC-C]]: CDC20 is the mitotic co-activator of the APC/C E3 ubiquitin ligase.
- [[CYCLIN B1]]: D-box-containing substrate ubiquitinated by APC-C-CDC20 to drive mitotic exit.
- [[Securin]]: Substrate whose degradation by APC-C-CDC20 liberates separase for anaphase.
- [[CDK1]]: Kinase whose activity is silenced by APC-C-CDC20-mediated cyclin B destruction.
- [[CDH1]]: Post-anaphase APC/C co-activator that replaces CDC20 and targets it for degradation.
- [[MAD2]]: SAC component that directly binds and inhibits CDC20.
- [[BUBR1]]: SAC component containing a KEN-box that sequesters CDC20 in the MCC.
- [[BUB3]]: SAC scaffold that stabilizes the mitotic checkpoint complex.
- [[Mcl-1]]: Substrate degraded by APC-C-CDC20 during prolonged mitotic arrest.
- [[Mitosis]]: The cell-cycle phase governed by APC-C-CDC20 activity.
- [[Ubiquitination]]: The post-translational modification catalyzed by APC-C-CDC20.
- [[Proteasome]]: Degrades ubiquitinated proteins targeted by APC-C-CDC20.
- [[Apoptosis]]: Triggered by APC-C-CDC20-mediated Mcl-1 destruction during mitotic arrest.
- [[Aneuploidy]]: Consequence of CDC20 overexpression-driven chromosome instability.
- [[Spindle checkpoint]]: The surveillance mechanism that gates CDC20 activation.

## Linking Summary

- New links added: [[APC-C]], [[CYCLIN B1]], [[CDK1]], [[CDH1]], [[Mcl-1]], [[Mitosis]], [[Ubiquitination]], [[Proteasome]], [[Apoptosis]], [[Microtubule]], [[Phosphorylation]], [[Aneuploidy]], [[Colon Cancer]], [[Lung Cancer]], [[Gastric Cancer]], [[Hepatocellular Carcinoma]], [[ovarian cancer]], [[leukemia]], [[Lymphoma]], [[Drosophila]], [[paclitaxel]]
- Suggested new entity notes to create: [[Securin]], [[MAD2]], [[BUBR1]], [[BUB3]], [[Spindle checkpoint]], [[MYC]]
- Strong connections to strengthen: [[CDC20]] ↔ [[APC-C]], [[CDC20]] ↔ [[CYCLIN B1]], [[CDC20]] ↔ [[Securin]], [[CDC20]] ↔ [[MAD2]]
