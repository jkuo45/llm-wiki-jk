---
title: MitoSOX
description: MitoSOX Red — a mitochondria-targeted fluorescent probe that detects superoxide (O₂⁻) production, used as a readout of mitochondrial oxidative stress shaped by sirtuin activity.
type: entity
protected: false
created: 2026-07-14
updated: 2026-07-14
tags:
  - assay
  - fluorescent-probe
  - mitochondrial-ros
  - redox-biomarker
url: #
source: #
aliases:
  - MitoSOX Red
  - Mitochondrial superoxide probe
---

# MitoSOX

**MitoSOX Red** is a cell-permeant, mitochondria-targeted hydroethidine derivative that is selectively oxidized by superoxide (O₂⁻) in the mitochondrial matrix, yielding a fluorescent product detected by flow cytometry or fluorescence microscopy. It is the standard live-cell readout of **mitochondrial superoxide burden**.

## Relevance to the Sirtuin System

Mitochondrial superoxide is a direct downstream output of [[MnSOD]] activity, which is in turn governed by [[SIRT3]]-mediated deacetylation at [[Lys68]] and [[Lys122]]:
- Enhanced SIRT3 activity (via genetic activation or small-molecule activators such as [[Honokiol]] and [[Dihydromyricetin]]) deacetylates and activates MnSOD, lowering MitoSOX fluorescence (reduced superoxide).
- Conversely, SIRT3 deficiency raises mitochondrial superoxide, increasing MitoSOX signal.
- **SIRT4 antagonism:** [[SIRT4]] mono-[[ADP-ribosylation|ADP-ribosylates]] and inhibits MnSOD, sustaining superoxide and raising MitoSOX; the **[[SIRT3-SIRT4 Ratio|SIRT3/SIRT4 ratio]]** thus sets the amplitude of the MitoSOX signal.

### Target-Engagement Endpoint

MitoSOX is a standard *in vitro* readout for sirtuin redox interventions. In the dual SIRT3-activation / SIRT4-inhibition fibrosis program, MitoSOX (real-time flow cytometry) is paired with acetyl-[[Lys68]]/[[Lys122]] Western blot and [[Seahorse XF Analyzer|Seahorse]] respirometry to quantify MnSOD flux and the resulting "redox rheostat" phenotype.

### Coupling to Adrenochrome

[[Adrenochrome]] [[Redox Cycling|redox cycling]] generates superoxide — the substrate MnSOD processes — so MitoSOX reports the burst kinetics of adrenochrome-derived superoxide. Cells with a high SIRT3/SIRT4 ratio rapidly quench this signal (within the **[[Hormetic Window|hormetic window]]**), whereas low-ratio cells (aged [[Cardiomyocytes|cardiomyocytes]], renal tubule cells) show amplified, prolonged MitoSOX signal shifting toward toxicity.

## Connections

  - [[MnSOD]]: The enzyme whose activity MitoSOX indirectly reports.
  - [[SIRT3]]: The deacetylase that lowers superoxide and thus MitoSOX signal.
  - [[SIRT4]]: Opposing sirtuin that raises superoxide and MitoSOX signal.
  - [[SIRT3-SIRT4 Ratio]]: Redox rheostat setting MitoSOX amplitude.
  - [[Lys68]], [[Lys122]]: MnSOD sites whose deacetylation reduces superoxide.
  - [[Honokiol]], [[Dihydromyricetin]]: SIRT3 activators that decrease MitoSOX readout.
  - [[Adrenochrome]]: Redox-cycling source of the superoxide MitoSOX detects.
  - [[Hormetic Window]]: Bounds protective vs. toxic MitoSOX output.

## Documents

  - [[SIRT3-SIRT4 Ratio|SIRT3/SIRT4 Ratio]]
    - Lists MitoSOX among surrogate markers (with MnSOD Lys68/Lys122 acetylation and 8-OHdG) for ratio-dependent SIRT3 activity.
  - [[task_output_sirtuins_recommendations_03_JULY_2026|Sirtuin Recommendations (03 JUL 2026)]]
    - Uses MitoSOX as a target-engagement endpoint for combined SIRT3 activation / SIRT4 inhibition.
  - [[task_output_sirtuins_mnsod_adrenochrome_06_JULY_2026|MnSOD in Sirtuin vs. Adrenochrome Pathways (06 JUL 2026)]]
    - Positions MitoSOX as the readout of adrenochrome-derived superoxide processed by MnSOD.
  - [[task_output_sirtuins_mnsod_adrenochrome_research_plan_04_JULY_2026|Adrenochrome Research Plan (04 JUL 2026)]]
    - Employs MitoSOX burst kinetics to test the SIRT3/SIRT4-MnSOD redox rheostat.

## Linking Summary

- New links added: [[MnSOD]], [[SIRT3]], [[SIRT4]], [[SIRT3-SIRT4 Ratio]], [[Lys68]], [[Lys122]], [[Honokiol]], [[Dihydromyricetin]], [[Adrenochrome]], [[Hormetic Window]], [[ADP-ribosylation]], [[ROS]], [[Oxidative Stress]], [[Cardiomyocytes]], [[Seahorse XF Analyzer]], [[Redox Cycling]]
- Suggested new entity notes to create: [[8-OHdG]], [[Hormetic Window]], [[Adrenochrome]], [[Seahorse XF Analyzer]]
- Strong connections to strengthen: [[MitoSOX]] ↔ [[SIRT3]]; [[MitoSOX]] ↔ [[MnSOD]]; [[MitoSOX]] ↔ [[SIRT4]]
