---
title: Epigenetic Clock
description: An Epigenetic Clock is a biochemical estimator of biological age based on DNA Methylation changes at specific CpG sites that accrue predictably with age.
type: entity
created: 2024-01-01
updated: 2026-07-06
tags:
  - Scientific Concept
  - epigenetics
aliases: []
---

# Epigenetic Clock

An **[[Epigenetic Clock]]** is a statistical estimator of biological (as opposed to chronological) age built from [[DNA Methylation]] measurements at a defined set of CpG sites whose methylation changes predictably with age. By scoring these sites and applying a trained algorithm, researchers can estimate an individual's biological age, which may diverge from their chronological age.

## Mechanism and Construction

Most clocks are trained on genome-wide methylation arrays (e.g., Illumina 450K/EPIC). They select CpGs whose methylation strongly correlates with chronological age across tissues, then fit a weighted linear or elastic-net model. Key generations:

- **First-generation clocks** (Horvath, Hannum): estimate chronological age with high accuracy across tissues.
- **Second-generation clocks** — [[DNAmGrimAge]], [[PhenoAge]], DunedinPACE: trained to predict morbidity, mortality, and physiological decline rather than time, capturing "pace of aging."
- **Third-generation / "reversal" clocks** (e.g., DunedinPoAm): estimate the deviation from a reference aging trajectory.

## Biological vs. Chronological Age

If biological age exceeds chronological age — **age acceleration** — the individual faces higher risk for age-related disease and mortality. Conversely, "negative age acceleration" is associated with healthier aging. Clocks are notably robust across blood, saliva, and many tissues, though tissue-specific clocks exist.

## Reversibility and [[Epigenetic Drift]]

A striking property is that DNAm age may be partially reversible. The loss of methylation fidelity with age — [[Epigenetic Drift]] — produces both global hypomethylation and focal hypermethylation at Polycomb targets. Interventions such as [[Caloric Restriction]], [[Metformin]], and partial cellular reprogramming have shown measurable clock reversal in some studies, motivating use of clocks as endpoints in [[Rejuvenation]] and geroscience trials.

## Applications in Research and Medicine

- **Longevity interventions**: Testing whether a treatment actually slows molecular aging.
- **Disease risk**: Clock acceleration predicts [[Cardiovascular Disease]], [[Cancer]], and [[Neurodegenerative Diseases]] before symptoms.
- **Forensic and developmental**: Estimating donor age and assessing developmental/epigenetic maturity.

## Connections

- [[Aging]] — The primary phenomenon measured by these clocks.
- [[DNA Methylation]] — The molecular substrate used to calculate the clock score.
- [[DNAmGrimAge]] — A highly accurate, mortality-predictive second-generation clock.
- [[Epigenetic Drift]] — Age-related methylation noise that clocks partly capture.
- [[Rejuvenation]] — Clocks are used to track reversal of epigenetic aging.
- [[Biomarker]] — Epigenetic clocks are the leading quantitative aging biomarker.

## Linking Summary

- New links added: [[Aging]], [[DNA Methylation]], [[DNAmGrimAge]], [[Epigenetic Drift]], [[Rejuvenation]], [[Caloric Restriction]], [[Metformin]], [[Cardiovascular Disease]], [[Cancer]], [[Neurodegenerative Diseases]], [[Biomarker]]
- Suggested new entity notes to create: [[Horvath Clock]], [[Hannum Clock]], [[PhenoAge]], [[DunedinPACE]], [[Age Acceleration]]
- Strong connections to strengthen: [[Epigenetic Clock]] ↔ [[Aging]], [[Epigenetic Clock]] ↔ [[DNA Methylation]]
