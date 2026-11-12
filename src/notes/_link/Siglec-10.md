---
title: Siglec-10
description: Siglec-10 (SIGLEC10) is an inhibitory I-type lectin on macrophages and other leukocytes that recognizes sialylated — and via CD24, non-sialylated — "don't-eat-me" signals, dampening phagocytosis of viable healthy cells.
protected: false
created: 2026-11-08
updated: 2026-11-08
tags:
  - receptor
  - immunology
  - innate-immunity
  - phagocytosis
aliases:
  - SIGLEC10
  - Sialic acid-binding Ig-like lectin 10
---

## Overview

**Siglec-10** (sialic acid-binding Ig-like lectin 10, gene *SIGLEC10*) is a transmembrane inhibitory receptor of the Siglec family, expressed in humans on macrophages, B cells, eosinophils, and subsets of dendritic and NK cells (notably absent in mice — the mouse orthologue *Siglec-g* is functionally distinct, which matters for transcription). It is a core reader of the anti-phagocytic ("don't-eat-me") display layer of healthy cells: ligation through its cytoplasmic [[ITIM]]-like signaling motifs engages SHP-1/SHP-2 phosphatases and suppresses the actomyosin machinery of engulfment.

## Structure & Domains

- Extracellular: one V-set Ig-like domain with the canonical disulfide loop plus one or more C2-set Ig domains; V-set domain binds sialic acids and certain protein ligands.
- Transmembrane: single pass.
- Cytoplasmic: two immune-receptor tyrosine-based inhibitory motifs (ITIMs / ITIM-like) → recruitment of SHP phosphatases.

## Mechanism of Action & Pathways

- **Sialic-acid recognition.** Siglec-10 binds α2,3/α2,6-linked sialic acids on glycoproteins of viable cells, setting an anti-phagocytic ceiling that sialidase activity removes — desialylation converts a cell toward an eat-me state (the route followed by aged [[Erythrocyte]]s).
- **CD24–Siglec-10 anti-phagocytic axis.** CD24 on the target cell binds Siglec-10 on macrophages independent of sialic-acid engagement and delivers a potent "don't-eat-me" signal: blockade of either CD24 or Siglec-10 restored macrophage phagocytosis of the CD24-expressing human tumor cells tested (Barkal et al. 2017, Nat Immunol; Tier 4). The axis operates alongside, and additive to, [[CD47]]–[[SIRPalpha|SIRPα]].
- **Apoptotic cell tolerance.** Siglec-10 also contributes to recognition of surface-calreticulin-deficient/self contexts; loss-of-function associations with dysregulated inflammatory responses have been reported in Chinese cohorts (Tier 2).

## Physiological Function

- Sets the phagocytic uptake threshold on macrophages so viable, sialylated, CD24-positive self cells are spared.
- Restrains inflammatory signaling in macrophages and B cells via inhibitory phosphatase recruitment.
- Contributes to the self/non-self discrimination that keeps [[Efferocytosis]] selective for dying cells.

## Pathology & Clinical Relevance

- **Tumor immune evasion.** CD24-positive human tumors (e.g., ovarian, triple-negative breast subsets) exploit Siglec-10 to resist macrophage phagocytosis; anti-CD24 or anti-Siglec-10 agents in preclinical development restore uptake (Tier 4; see [[Immune Evasion]]).
- **Species gap.** No functional mouse orthologue, so target validation is humanized-model-dependent (unverified at scale).
- **Pharmacology adjacency.** Siglec-11/Siglec-14 family members share the sialic-acid recognition logic; [[PD-L1]]-macrophage checkpoint blockade operates in the same phagocytic-synapse space.

## Documents

- [[task_output_eat_me_dont_eat_me_signals_08_Nov_2026|Eat-me / don't-eat-me signal inventory]]: Siglec-10 positioned as the core anti-phagocytic receptor recognizing CD24 and sialic-acid display.

## Connections

- [[CD24]] — CD24 is the protein ligand whose macrophage engagement through Siglec-10 delivers the anti-phagocytic signal; blocking either side restores phagocytosis.
- [[B2M]] — Parallel don't-eat-me display (MHC-I/B2M recognized by other inhibitory receptors); both set phagocytic thresholds on viable cells.
- [[CD47]] — The parallel, better-known don't-eat-me axis; CD47–SIRPα and CD24–Siglec-10 act additively on macrophages.
- [[Efferocytosis]] — Siglec-10 enforces self-spare during clearance decisions.
- [[Immune Evasion]] — CD24-high tumors use Siglec-10 to resist myeloid attacks.

## Linking Summary

- Bidirectional: [[CD24]] (ligand axis — primary pairing), [[CD47]] (parallel inhibitory axis), [[B2M]] (parallel anti-phagocytic display), [[Efferocytosis]] (process it gates), [[Immune Evasion]] (pathological use by tumors).
- Justification: Siglec-10 is defined by its role as the macrophage-side reader of the CD24 anti-phagocytic signal; its connections center on the don't-eat-me balance with [[CD47]] and the clearance decisions of [[Efferocytosis]].
