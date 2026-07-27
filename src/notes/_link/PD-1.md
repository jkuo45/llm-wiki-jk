---
title: PD-1
description: Programmed cell death protein 1 (PD-1; CD279), an inhibitory immune-checkpoint receptor expressed on T cells that dampens effector responses upon binding PD-L1/PD-L2.
protected: false
created: 2026-07-25
updated: 2026-07-25
tags: [immune-checkpoint, receptor, protein, immunology, cancer-immunology]
url: #
source: #
aliases: [Programmed cell death protein 1, CD279, PDCD1]
---

## Overview

PD-1 (programmed cell death protein 1), encoded by *PDCD1*, is an immunoreceptor tyrosine-based inhibitory motif (ITIM/ITSM)-containing receptor of the CD28 family. It is constitutively expressed at low levels on thymic medullary T cells and is markedly up-regulated on the surface of antigen-experienced and exhausted T cells, as well as on subsets of B cells and NK cells, following activation. By delivering negative signals that counteract CD28 co-stimulation, PD-1 functions as a physiological brake that limits collateral tissue damage during infection and maintains self-tolerance.

## Structure and Ligands

PD-1 is a type I transmembrane protein with a single extracellular IgV-like domain. Its intracellular tail contains two tyrosine-based motifs: an ITIM and an immunoreceptor tyrosine-based switch motif (ITSM). Engagement of PD-1 by its ligands — **[[PD-L1]]** (B7-H1/CD274) and PD-L2 (B7-DC/CD273) — recruits the phosphatases SHP-1 and SHP-2 to the ITSM, dephosphorylating downstream CD28/PI3K/AKT and RAS-MEK-ERK signaling components and thereby suppressing T-cell proliferation, cytokine production (IL-2, IFN-γ), and cytotoxicity.

## Mechanism of Action

- **Inhibitory signaling**: SHP-2 dephosphorylates CD28 and components of the TCR proximal signaling complex, lowering PI3K/AKT and MAPK output.
- **Exhaustion**: Chronic antigen exposure (persistent infection, cancer) drives sustained PD-1 upregulation and a hyporesponsive "exhausted" T-cell state.
- **Tissue tolerance**: PD-L1 is broadly expressed on hematopoietic and non-hematopoietic cells (endothelium, epithelium, tumor cells), positioning PD-1 as a localized "don't attack here" signal.

> [!important] The same PD-1/PD-L1 axis that protects healthy tissue is co-opted by tumors and senescent cells to establish **[[Immune Evasion]]**, allowing escape from T-cell and NK-cell clearance.

## Physiological and Pathological Roles

PD-1 is central to both peripheral tolerance and the failure of anti-tumor immunity. In aging, the accumulation of **[[Senescent Cells]]** can up-regulate ligands such as HLA-E and PD-L1, engaging PD-1 (and NKG2A) to blunt immune surveillance — a mechanism also operant in **[[Cancer]]** immune evasion.

## Therapeutic Landscape

Blocking antibodies against PD-1 (nivolumab, pembrolizumab) and PD-L1 (atezolizumab, avelumab) reinvigorate exhausted CD8+ T cells and are approved across many malignancies. Response is strongest in tumors with established neo-antigen burden and PD-L1 expression, but is limited by primary/resistance mechanisms and immune-related adverse events from loss of tolerance.

## Documents

- Knowledge-graph triple contexts (PD-1 / PD-L1 / immune evasion relationships) served as the primary source; enriched with established immunology literature.

## Connections

- [[PD-L1]]: Ligand; binding delivers the inhibitory signal to PD-1+ T cells.
- [[Immune Evasion]]: PD-1 engagement is a core mechanism by which tumors and senescent cells escape clearance.
- [[Cancer]]: PD-1 axis is the dominant checkpoint targeted by modern immunotherapy.
- [[Senescent Cells]]: Senescent cells exploit PD-L1/PD-1 to resist immune clearance.
- [[CD8+ T Cell]]: Principal PD-1+ effector population reinvigorated by checkpoint blockade.

## Linking Summary

- New links added: [[PD-L1]], [[Immune Evasion]], [[Cancer]], [[Senescent Cells]], [[CD8+ T Cell]]
- Suggested new entity notes to create: [[Checkpoint Inhibitor]], [[Tumor Antigen]]
- Strong connections to strengthen: [[PD-1]] ↔ [[HLA-E]] (NK/CD8 co-inhibition in senescence)
