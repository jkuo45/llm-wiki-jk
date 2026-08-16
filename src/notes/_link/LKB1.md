---
title: LKB1
description: Liver kinase B1 (STK11) is a tumor suppressor serine/threonine kinase and the primary upstream kinase activating AMPK under energy stress; deacetylated by SIRT1 and SIRT3 to coordinate metabolic adaptation, autophagy induction, and tumour suppression.
protected: false
created: 2026-07-04
updated: 2026-08-16
tags:
  - kinase
  - ampk-signaling
  - tumor-suppressor
  - metabolic-regulation
  - protein
entity_type_1: kinase
aliases:
  - STK11
  - Serine/Threonine Kinase 11
  - Liver Kinase B1
  - Serine/threonine-protein kinase STK11
  - Polarization-related gene LKB1
url: https://www.uniprot.org/uniprot/Q15831
source: https://www.genecards.org/cgi-bin/carddisp.pl?gene=STK11
---

# LKB1

## Overview

[[LKB1]] (Liver Kinase B1), also known as STK11 (Serine/Threonine Kinase 11), is a tumor suppressor serine/threonine kinase that serves as the primary upstream kinase activating [[AMPK]] under conditions of energy stress. LKB1 phosphorylates and activates 14 AMPK-family kinases, making it a central node in the cellular stress response network that regulates energy sensing, metabolic regulation, cell polarity, and autophagy.

## Structure and Domains

- **Gene:** STK11, located on chromosome 19p13.3
- **Protein:** ~433 amino acid serine/threonine kinase containing an N-terminal nuclear localisation signal (NLS), a central serine/threonine kinase domain, and a C-terminal regulatory domain
- **Heterotrimeric complex:** LKB1 functions with two regulatory subunits:
  - **[[STRAD]]** (STE20-related adaptor): A pseudokinase that binds LKB1 and promotes its translocation from the nucleus to the cytoplasm.
  - **[[MO25]]** (Mouse protein 25): A scaffold protein that stabilises the LKB1-STRAD interaction and enhances LKB1 catalytic activity by ~100-fold.
- Without STRAD and MO25 binding, LKB1 remains in the nucleus and exhibits minimal kinase activity. This tripartite complex is essential for LKB1 function.

## Mechanism of Action

### AMPK Activation

LKB1 is constitutively active when bound to STRAD and MO25 cofactors and phosphorylates its primary substrate, [[AMPK]], at Thr172 within the activation loop of the AMPK α-subunit under low-energy conditions (high AMP/ATP ratio). This activation:

- Increases [[NAD+]] biosynthesis through stimulation of [[NAMPT]]
- Enhances [[SIRT1]] activity indirectly by increasing NAD+ availability
- Promotes [[Mitochondrial Biogenesis]] and [[Fatty acid oxidation]]
- Inhibits mTORC1 signaling and anabolic processes

The sequential steps of energy sensing are:

1. **Energy Stress Detection**: Rising AMP:ATP or ADP:ATP ratios are sensed by AMPK, which undergoes conformational changes promoting LKB1-mediated phosphorylation.
2. **Phosphorylation**: LKB1 phosphorylates AMPK at Thr172, increasing AMPK activity by >100-fold.
3. **Downstream Effects**: Activated AMPK phosphorylates a broad network of substrates including [[ULK1]], [[TSC2]], [[Raptor]], [[PFKFB3]], and [[PGC-1α]], switching cells from anabolic (ATP-consuming) to catabolic (ATP-producing) metabolism.

### SIRT1-LKB1 Reciprocal Loop

A key regulatory circuit exists between SIRT1 and LKB1:

- **SIRT1 → LKB1:** SIRT1 [[Deacetylation|deacetylates]] LKB1, enhancing its kinase activity and ability to activate AMPK
- **AMPK → SIRT1:** AMPK activation increases NAD+ biosynthesis via NAMPT, indirectly enhancing SIRT1 activity
- This positive feedback loop amplifies metabolic adaptation during [[Fasting]] and [[Caloric Restriction]]

> [!info] Source: [[_document_ - The Sirtuin Network Linking NAD+ Metabolism, Mitochondrial Function, and Metabolic Homoeostasis]]
> SIRT1 can activate AMPK through deacetylation of LKB1, establishing a positive feedback loop that amplifies metabolic adaptation during energy stress. AMPK increases NAD+ biosynthesis and SIRT1 activity, whereas SIRT1 activates LKB1/AMPK signalling, together driving mitochondrial biogenesis and oxidative adaptation under low-energy conditions.

### AMPK-Related Kinases

LKB1 also phosphorylates and activates 12 other AMPK-related kinases (ARKs), including [[NUAK1]]/[[NUAK2]], [[SIK1]]-[[SIK3]], [[BRSK1]]/[[BRSK2]], [[QSK]]/[[MARK1]]-[[MARK4]], and [[SNRK]], which regulate cell polarity, neuronal development, and gene expression.

## Role in Autophagy

LKB1 is a major trigger for [[Autophagy]] induction:

- **AMPK-ULK1 Axis**: LKB1 → AMPK → ULK1 represents a canonical signalling cascade that initiates autophagy under energy stress. AMPK directly phosphorylates and activates [[ULK1]], and simultaneously inhibits [[mTORC1]] by phosphorylating [[TSC2]] and [[Raptor]].
- **Sirtuin Convergence**: Both [[SIRT1]] and [[SIRT3]] deacetylate LKB1, enhancing its cytoplasmic localisation and AMPK-activating capacity.

## Sirtuin Regulation of LKB1

- **[[SIRT1]]**: Deacetylates LKB1 at K48, promoting its translocation from the nucleus to the cytoplasm and enhancing AMPK activation. This SIRT1-LKB1-AMPK axis is critical for caloric restriction-mediated metabolic benefits.
- **[[SIRT3]]**: Deacetylates LKB1 at multiple lysine residues in mitochondria, improving mitochondrial function, reducing ROS production, and activating AMPK during metabolic stress.

## Physiological Function

- **Energy sensing:** Central mediator of cellular response to energy depletion
- **Metabolic regulation:** Coordinates glucose and lipid metabolism through AMPK activation
- **Cell polarity:** Establishes epithelial cell polarity through interaction with PAR complex
- **Tumor suppression:** Loss-of-function mutations cause Peutz-Jeghers syndrome and various cancers

## Tumour Suppression & Clinical Relevance

- **Peutz-Jeghers Syndrome:** Autosomal dominant condition caused by germline *STK11* mutations; characterized by hamartomatous polyps and a 10–15-fold increased cancer risk (especially colorectal, gastric, pancreatic, breast, and gynaecological cancers).
- **Cancer:** Somatic LKB1 mutations found in non-small cell lung cancer (especially KRAS-mutant), cervical cancer, and pancreatic cancer.
- **Mechanisms:** LKB1 suppresses tumour growth through AMPK-mediated inhibition of mTORC1, maintenance of cell polarity, and regulation of metabolic checkpoints.
- **Metabolic disease:** LKB1 dysfunction impairs AMPK-mediated metabolic adaptation, contributing to insulin resistance and metabolic inflexibility.

## Documents

List of documents that mention this entity

  - [[_document_ - The Sirtuin Network Linking NAD+ Metabolism, Mitochondrial Function, and Metabolic Homoeostasis]]
    - Describes the SIRT1-LKB1-AMPK reciprocal activation loop as a key regulatory circuit in metabolic adaptation. SIRT1 deacetylates LKB1 to activate AMPK, while AMPK increases NAD+ to enhance SIRT1 activity.

  - [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]
    - Along with these changes, the AXIN-vacuolar H+‒ATPase complex regulates the activity of LKB1, resulting in the phosphorylation of AMPK. To minimize fatty acid synthesis, AMPK recalls acetyl-CoA carboxylases to trigger the oxidation of fatty acids.

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - AMPK can be activated by LKB1, the upstream regulator of AMPK, while activated AMPK reduces oxidative stress injury by promoting insulin sensitivity, fatty acid oxidation, and mitochondrial biosynthesis to generate ATP.

## Connections

- [[AMPK]] — Primary downstream target; LKB1 phosphorylates AMPK at Thr172 to activate it
- [[SIRT1]] — Deacetylates LKB1 to enhance its kinase activity; reciprocal positive feedback loop
- [[SIRT3]] — Deacetylates LKB1 in mitochondria, improving mitochondrial function and AMPK activation
- [[NAMPT]] — AMPK activation increases NAMPT expression, boosting NAD+ biosynthesis
- [[NAD+]] — Central metabolite linking LKB1-AMPK signaling to sirtuin activity
- [[Mitochondrial Biogenesis]] — LKB1-AMPK-SIRT1 axis drives mitochondrial biogenesis via PGC-1α
- [[Fatty acid oxidation]] — AMPK activation promotes fatty acid oxidation through ACC phosphorylation
- [[Caloric Restriction]] — LKB1-AMPK pathway mediates metabolic adaptation to caloric restriction
- [[Fasting]] — Energy depletion activates LKB1-AMPK signaling
- [[Metabolic Flexibility]] — LKB1-AMPK axis enables fuel switching between glucose and fatty acids
- [[mTOR]] — AMPK activation by LKB1 inhibits mTORC1, suppressing anabolic processes
- [[ULK1]] — Downstream target of AMPK; autophagy initiation
- [[mTORC1]] — Suppressed by LKB1-AMPK via TSC2 and Raptor phosphorylation
- [[Autophagy]] — Induced by LKB1-AMPK-ULK1 cascade
- [[Cancer]] — LKB1 is a tumour suppressor in multiple malignancies
- [[Peutz-Jeghers Syndrome]] — Hereditary syndrome caused by germline LKB1 mutations
- [[STRAD]] — Pseudokinase cofactor required for LKB1 cytoplasmic localization
- [[MO25]] — Scaffold cofactor that stabilises the LKB1 complex
- [[TSC2]] — AMPK substrate linking LKB1 to mTORC1 inhibition
- [[Raptor]] — AMPK substrate linking LKB1 to mTORC1 inhibition

## Linking Summary

- New links added: [[AMPK]], [[SIRT1]], [[SIRT3]], [[NAMPT]], [[NAD+]], [[Mitochondrial Biogenesis]], [[Fatty acid oxidation]], [[Caloric Restriction]], [[Fasting]], [[Metabolic Flexibility]], [[mTOR]], [[Autophagy]], [[ULK1]], [[mTORC1]], [[Cancer]], [[STRAD]], [[MO25]], [[TSC2]], [[Raptor]], [[Peutz-Jeghers Syndrome]]
- Suggested new entity notes to create: [[AMPK-related kinases]]
- Strong connections to strengthen:
  - [[LKB1]] ↔ [[SIRT1]] — SIRT1 deacetylates LKB1 to enhance AMPK activation; key reciprocal loop
  - [[LKB1]] ↔ [[AMPK]] — Direct phosphorylation relationship; primary upstream kinase
  - [[LKB1]] ↔ [[Autophagy]] — AMPK-ULK1 cascade linking energy stress to autophagy
  - [[SIRT3]] ↔ [[LKB1]] — Mitochondrial deacetylation enhancing AMPK activation

  - Justification: LKB1 is the convergence point for sirtuin-dependent regulation of AMPK, bridging energy sensing to autophagy, mitochondrial biogenesis, and tumour suppression across multiple tissues and contexts.
