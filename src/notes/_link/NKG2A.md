---
title: NKG2A
description: NKG2A (KLRC1), an inhibitory C-type lectin-like receptor that pairs with CD94 to recognize HLA-E and deliver ITIM-mediated stop signals to NK cells and a subset of T cells.
protected: false
created: 2026-07-25
updated: 2026-07-25
tags: [receptor, protein, immunology, nk-cell, immune-checkpoint]
url: #
source: #
aliases: [KLRC1, CD94-NKG2A, NKG2A/CD94]
---

## Overview

NKG2A is an inhibitory receptor encoded by *KLRC1* and expressed as a heterodimer with the invariant signaling partner CD94 on natural killer (NK) cells and a minority of CD8+ T cells. The complex recognizes **[[HLA-E]]** — the non-classical MHC class Ib molecule that presents leader peptides derived from classical HLA-A/B/C molecules. Engagement of HLA-E by CD94/NKG2A recruits SHP-1 via immunoreceptor tyrosine-based inhibitory motifs (ITIMs), delivering a potent "stop" signal that overrides activating receptors and prevents cytotoxicity.

## Structure and Signaling

- NKG2A is a type II transmembrane C-type lectin-like protein; it lacks an intracellular signaling domain and depends on CD94 for cell-surface expression and ITIM transduction.
- Upon HLA-E binding, NKG2A ITIMs are phosphorylated and recruit SHP-1, dephosphorylating downstream activation pathways (e.g., Syk/ZAP70-linked cascades) in NK cells.

> [!important] Because HLA-E is stabilized by peptides from other HLA molecules, NKG2A effectively reports on the overall HLA expression of a target cell: low HLA-I ("missing-self") reduces HLA-E surface levels, relieving NKG2A inhibition and permitting NK killing.

## Role in Immune Evasion

Elevated HLA-E is a recurring immune-escape strategy. In senescence and malignancy, **[[HLA-E]]** up-regulation engages CD94/NKG2A on NK cells and CD8+ T cells, blunting their cytotoxic function. This is a major axis of **[[Immune Evasion]]**, operating in parallel with PD-1/PD-L1 checkpoint engagement.

- **Senescent cells** and **[[Cancer]]** cells that raise HLA-E become invisible to NKG2A+ killers.
- Blocking NKG2A (e.g., monoclonal antibody monalizumab) can restore NK- and T-cell cytotoxicity and is being explored in combination immunotherapy.

## Relationship to Other Checkpoints

NKG2A and **[[PD-1]]** are independent inhibitory circuits that can be co-expressed on exhausted CD8+ T cells; combinatorial blockade (anti-NKG2A + anti-PD-1) shows synergistic reinvigoration in preclinical models.

## Documents

- Knowledge-graph triple contexts (HLA-E / NKG2A / immune evasion relationships) served as the primary source; enriched with established innate-immunology literature.

## Connections

- [[HLA-E]]: Ligand; surface levels determine NKG2A-mediated inhibition.
- [[Immune Evasion]]: NKG2A engagement by HLA-E is a core escape mechanism.
- [[CD8+ T Cell]]: Subset of T cells co-express CD94/NKG2A and are inhibited accordingly.
- [[Cancer]]: HLA-E/NKG2A axis mediates tumor immune escape.

## Linking Summary

- New links added: [[HLA-E]], [[Immune Evasion]], [[CD8+ T Cell]], [[Cancer]]
- Suggested new entity notes to create: [[NK Cells]], [[CD94]], [[Checkpoint Inhibitor]]
- Strong connections to strengthen: [[NKG2A]] ↔ [[PD-1]] (co-inhibitory exhaustion axis)
