---
title: TLR6
description: Toll-like receptor 6, a cell-surface innate immune receptor that heterodimerizes with TLR2 to recognize diacylated lipopeptides and lipoteichoic acid via MyD88-dependent signaling.
created: 2026-09-10
updated: 2026-09-10
tags:
  - receptor
  - innate-immunity
  - pattern-recognition-receptor
  - toll-like-receptor
aliases:
  - Toll-like receptor 6
  - CD286
---

# TLR6

## Overview

**TLR6 (Toll-like receptor 6, CD286)** is a cell-surface [[Toll-like Receptor|toll-like receptor]] that functions as an obligate heterodimer partner of [[TLR2]]. The TLR2/TLR6 complex recognizes diacylated bacterial lipopeptides (e.g. MALP-2), [[Lipoteichoic Acid|lipoteichoic acid (LTA)]], zymosan, and related Gram-positive/mycoplasma/fungal ligands. Unlike [[TLR3]] and [[TLR4]], TLR6 signals exclusively through the [[MyD88]] adaptor, never through [[TRIF]].

## Structure & Localization

TLR6 is a type I transmembrane glycoprotein with an extracellular leucine-rich repeat (LRR) ectodomain for ligand sensing and a cytoplasmic Toll/IL-1 receptor (TIR) domain for adaptor recruitment. It resides on the plasma membrane, where it pairs with [[TLR2]] upon ligand binding. The human *TLR6* gene clusters with *TLR1* and *TLR10* on chromosome 4p14, reflecting their shared evolutionary origin as TLR2 co-receptors.

## Mechanism of Action & Signaling

1. Diacylated lipopeptide or LTA binding induces TLR2/TLR6 heterodimerization; [[CD36]] acts as a co-receptor that captures and delivers lipid ligands (LTA, diacylglycerides) to the complex.
2. The TIR domains recruit MAL/TIRAP, which bridges to [[MyD88]] → IRAK4/IRAK1 → TRAF6.
3. TRAF6 activates TAK1 → the IKK complex → [[NF-κB]] nuclear translocation, plus [[MAPK]] cascades (p38, ERK, JNK).
4. Output is pro-inflammatory cytokines ([[TNF-alpha|TNF-α]], [[IL-6]], [[IL-1β]]) with little to no type I interferon, since the [[TRIF]]–IRF3 axis is not engaged.

**Discrimination logic.** The TLR2 subunit is shared, but the partner sets specificity: TLR2/TLR1 senses triacylated lipopeptides (e.g. Pam3CSK4), while TLR2/TLR6 senses diacylated lipopeptides (e.g. Pam2CSK4, MALP-2) — a structural distinction that lets one receptor scaffold cover both classes of bacterial lipoproteins.

## Physiological Function

TLR6 extends innate coverage to Gram-positive bacteria, mycoplasma, and fungi whose walls lack LPS. The TLR2/TLR6–[[CD36]]–[[MyD88]] axis drives rapid neutrophil/monocyte recruitment and is a major sensor of [[PAMP|pathogen-associated molecular patterns]] such as LTA in the gut, skin, and lung mucosa.

## Pathology & Clinical Relevance

- TLR6-deficient mice show impaired cytokine responses to MALP-2, LTA, and zymosan with increased susceptibility to Gram-positive challenge — establishing TLR6 as non-redundant in vivo.
- Excessive TLR2/TLR6 signaling contributes to sepsis-related hyperinflammation and sterile inflammatory disease; diacylated lipopeptide mimetics (e.g. Pam2CSK4, MALP-2 derivatives) are studied as vaccine adjuvants.
- Candidate-gene studies have linked variants in the TLR1/6/10 cluster to tuberculosis and inflammatory disease susceptibility, but these associations remain emerging rather than established.

## Documents

- [[Lipoteichoic Acid]]
  - Identifies the [[TLR2]]/[[TLR6]] heterodimer (with [[CD36]]) as the primary receptor complex for LTA recognition, signaling via [[MyD88]]-dependent [[NF-κB]] and [[MAPK]] pathways.
- [[PAMP]]
  - Lists [[TLR2]] (with TLR1/TLR6) as the sensor for peptidoglycan, lipoteichoic acid, and lipoproteins.

## Connections

- [[TLR2]] → heterodimerizes with → [[TLR6]] (diacylated ligands)
- [[TLR6]] → signals via → [[MyD88]] (never [[TRIF]])
- [[CD36]] → co-receptor delivering lipid ligands to → TLR2/[[TLR6]]
- [[Lipoteichoic Acid]] → recognized by → [[TLR2]]/[[TLR6]]
- [[NF-κB]] — downstream transcription factor of TLR6 signaling
- [[PAMP]] — ligand class sensed by TLR6

## Linking Summary

- New links added: [[Toll-like Receptor]], [[TLR2]], [[MyD88]], [[TRIF]], [[CD36]], [[Lipoteichoic Acid]], [[NF-κB]], [[MAPK]], [[TNF-alpha]], [[IL-6]], [[IL-1β]], [[PAMP]]
- Suggested new entity notes to create: [[TLR1]] (remaining TLR2 co-receptor without a note)
- Strong connections to strengthen: [[TLR6]] ↔ [[TLR2]], [[TLR6]] ↔ [[Lipoteichoic Acid]], [[TLR6]] ↔ [[CD36]]
