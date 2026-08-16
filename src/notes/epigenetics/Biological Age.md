---
title: Biological Age
description: An epigenetic clock-derived estimate of biological aging based on DNA methylation at defined CpG sites, used as a biomarker of aging and mortality risk.
protected: false
created: 2026-08-15
updated: 2026-08-15
tags: [concept, epigenetics, aging, dna-methylation, biomarker]
url: #
source: Epigenetic Clock.md
aliases: [Epigenetic Age, Biological Aging]
---

## Overview

Biological age is a functional estimate of the aging state of an organism, distinct from chronological age. The most widely used biological age estimators are [[Epigenetic Clock|epigenetic clocks]], statistical models built from [[DNA Methylation]] measurements at a defined set of CpG sites across the genome. Trained on large cohorts, these clocks compute an epigenetic age that tracks chronological age but can also deviate from it, reflecting accelerated or decelerated biological aging.

## Mechanism

Epigenetic clocks exploit the reproducible correlation between age and methylation state at specific loci. First-generation clocks such as the [[Horvath Clock]] and [[Hannum Clock]] predict chronological age well but capture limited disease signal. Second-generation clocks, including [[PhenoAge]] and [[DunedinPACE]], integrate clinical biomarkers or measure the pace of aging, and predict morbidity and mortality more strongly. Clock acceleration — epigenetic age exceeding chronological age — is associated with cardiovascular disease, cancer, neurodegenerative conditions, and all-cause mortality risk.

> [!info]
> Unlike a single biomarker, epigenetic clocks reflect coordinated changes across hundreds of loci, making biological age a systemic readout of the [[Epigenome]] and a valuable endpoint for [[Hallmarks of Aging]] research.

## Clinical Relevance

Biological age is emerging as a surrogate endpoint in aging research and for evaluating anti-aging interventions such as [[Senolytics]], dietary restriction, and metabolic modulators. It also helps stratify individuals for preventive medicine, since accelerated epigenetic aging may precede clinical disease by years.

## Research & Limitations

Clocks differ in design, tissue specificity, and what they measure; a "true" biological age remains debated. Epigenetic drift, technical variation, and the influence of [[Genome stability|genome stability]] on methylation fidelity complicate interpretation. Nonetheless, epigenetic clocks remain among the most robust, reproducible biomarkers of biological age available.

#

## Documents

- [[Epigenetic Clock]]
  - The concept of biological age is operationalized through the epigenetic clock described in this note; this entity is the biological interpretation of the clock's output.
- [[_document_ - Epigenetic changes during aging and their reprogramming potential|Epigenetic changes during aging and their reprogramming potential]]
  - Discusses how epigenetic aging marks relate to biological age and whether reprogramming can reverse clock-derived age estimates.

## Connections

- [[Epigenetic Clock]]: The statistical model that produces an estimate of biological age from DNA methylation.
- [[DNA Methylation]]: The molecular substrate measured to compute epigenetic age.
- [[Horvath Clock]]: A multi-tissue first-generation clock predicting chronological age.
- [[PhenoAge]]: A second-generation clock incorporating clinical biomarkers to predict mortality risk.
- [[DunedinPACE]]: A measure of the pace of biological aging rather than age itself.
- [[Hallmarks of Aging]]: The broader framework in which biological age serves as an integrative biomarker.
- [[Epigenome]]: The genome-wide methylation landscape that clocks sample.

## Linking Summary

- New links added: [[Epigenetic Clock]], [[DNA Methylation]], [[Horvath Clock]], [[PhenoAge]], [[DunedinPACE]], [[Hallmarks of Aging]], [[Epigenome]], [[Senolytics]]
- Suggested new entity notes to create: [[Epigenetic Age Acceleration]], [[Levine Clock]]
- Strong connections to strengthen:
    - [[Epigenetic Clock]] ↔ [[Biological Age]]

  - Biological age is inseparable from the clock used to measure it, so linking to the clock notes anchors this concept in the graph. Suggested notes on age acceleration and the Levine (PhenoAge) methodology would enrich the biomarker cluster.
