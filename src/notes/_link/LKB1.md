---
title: LKB1
description: Liver kinase B1; tumor suppressor and upstream kinase of AMPK, deacetylated by SIRT1 to activate AMPK signaling
protected: false
created: 2026-08-04
updated: 2026-08-04
tags:
  - kinase
  - ampk-signaling
  - tumor-suppressor
  - metabolic-regulation
  - entity
type: entity
entity_type_1: kinase
aliases:
  - STK11
  - Serine/Threonine Kinase 11
  - Liver Kinase B1
url: https://www.uniprot.org/uniprot/Q15831
source: https://www.genecards.org/cgi-bin/carddisp.pl?gene=STK11
---

# LKB1

## Overview

[[LKB1]] (Liver Kinase B1), also known as STK11 (Serine/Threonine Kinase 11), is a tumor suppressor serine/threonine kinase that serves as the primary upstream kinase activating [[AMPK]] under conditions of energy stress. LKB1 plays a central role in cellular energy sensing, metabolic regulation, and cell polarity.

## Structure & Function

- **Gene:** STK11, located on chromosome 19p13.3
- **Protein:** ~433 amino acid serine/threonine kinase
- **Activation:** LKB1 is constitutively active when bound to STRAD and MO25 cofactors
- **Primary substrate:** AMPK (AMP-activated protein kinase), activated by LKB1-mediated phosphorylation at Thr172

## Mechanism of Action

### AMPK Activation

LKB1 phosphorylates and activates [[AMPK]] under low-energy conditions (high AMP/ATP ratio). This activation:
- Increases [[NAD+]] biosynthesis through stimulation of [[NAMPT]]
- Enhances [[SIRT1]] activity indirectly by increasing NAD+ availability
- Promotes [[Mitochondrial Biogenesis]] and [[Fatty acid oxidation]]
- Inhibits mTORC1 signaling and anabolic processes

### SIRT1-LKB1 Reciprocal Loop

A key regulatory circuit exists between SIRT1 and LKB1:
- **SIRT1 → LKB1:** SIRT1 [[Deacetylation|deacetylates]] LKB1, enhancing its kinase activity and ability to activate AMPK
- **AMPK → SIRT1:** AMPK activation increases NAD+ biosynthesis via NAMPT, indirectly enhancing SIRT1 activity
- This positive feedback loop amplifies metabolic adaptation during [[Fasting]] and [[Caloric Restriction]]

> [!info] Source: [[_document_ - The Sirtuin Network Linking NAD+ Metabolism, Mitochondrial Function, and Metabolic Homoeostasis]]
> SIRT1 can activate AMPK through deacetylation of LKB1, establishing a positive feedback loop that amplifies metabolic adaptation during energy stress. AMPK increases NAD+ biosynthesis and SIRT1 activity, whereas SIRT1 activates LKB1/AMPK signalling, together driving mitochondrial biogenesis and oxidative adaptation under low-energy conditions.

## Physiological Function

- **Energy sensing:** Central mediator of cellular response to energy depletion
- **Metabolic regulation:** Coordinates glucose and lipid metabolism through AMPK activation
- **Cell polarity:** Establishes epithelial cell polarity through interaction with PAR complex
- **Tumor suppression:** Loss-of-function mutations cause Peutz-Jeghers syndrome and various cancers

## Pathology & Clinical Relevance

- **Peutz-Jeghers syndrome:** Autosomal dominant condition caused by germline LKB1 mutations; characterized by hamartomatous polyps and increased cancer risk
- **Cancer:** Somatic LKB1 mutations found in lung adenocarcinoma, cervical cancer, and other malignancies
- **Metabolic disease:** LKB1 dysfunction impairs AMPK-mediated metabolic adaptation, contributing to insulin resistance and metabolic inflexibility

## Documents

- [[_document_ - The Sirtuin Network Linking NAD+ Metabolism, Mitochondrial Function, and Metabolic Homoeostasis]]
  - Describes the SIRT1-LKB1-AMPK reciprocal activation loop as a key regulatory circuit in metabolic adaptation. SIRT1 deacetylates LKB1 to activate AMPK, while AMPK increases NAD+ to enhance SIRT1 activity.

## Connections

- [[AMPK]] — Primary downstream target; LKB1 phosphorylates AMPK at Thr172 to activate it
- [[SIRT1]] — Deacetylates LKB1 to enhance its kinase activity; reciprocal positive feedback loop
- [[NAMPT]] — AMPK activation increases NAMPT expression, boosting NAD+ biosynthesis
- [[NAD+]] — Central metabolite linking LKB1-AMPK signaling to sirtuin activity
- [[Mitochondrial Biogenesis]] — LKB1-AMPK-SIRT1 axis drives mitochondrial biogenesis via PGC-1α
- [[Fatty acid oxidation]] — AMPK activation promotes fatty acid oxidation through ACC phosphorylation
- [[Caloric Restriction]] — LKB1-AMPK pathway mediates metabolic adaptation to caloric restriction
- [[Fasting]] — Energy depletion activates LKB1-AMPK signaling
- [[Metabolic Flexibility]] — LKB1-AMPK axis enables fuel switching between glucose and fatty acids
- [[mTOR]] — AMPK activation by LKB1 inhibits mTORC1, suppressing anabolic processes

## Linking Summary

- New links added: [[AMPK]], [[SIRT1]], [[NAMPT]], [[NAD+]], [[Mitochondrial Biogenesis]], [[Fatty acid oxidation]], [[Caloric Restriction]], [[Fasting]], [[Metabolic Flexibility]], [[mTOR]]
- Suggested new entity notes to create: None
- Strong connections to strengthen:
  - [[LKB1]] ↔ [[SIRT1]] — SIRT1 deacetylates LKB1 to enhance AMPK activation; key reciprocal loop
  - [[LKB1]] ↔ [[AMPK]] — Direct phosphorylation relationship; primary upstream kinase
