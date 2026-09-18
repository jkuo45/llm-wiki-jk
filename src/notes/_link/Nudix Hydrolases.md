---
title: Nudix Hydrolases
description: Nudix phosphodiesterases cleave free ADP-ribose into AMP and ribose-5-phosphate,
  linking PAR turnover to AMPK signaling and NAD+ salvage cost in parthanatos.
protected: false
created: 2026-09-08
updated: 2026-09-14
tags: [enzyme, adp-ribosylation, parthanatos, energy-metabolism]
url: #
source: #
aliases: [NUDIX, Nudix Box Hydrolases, ADP-ribose Pyrophosphatases]
---

# Nudix Hydrolases

**Nudix hydrolases** (NUDT family, e.g. NUDT5/NUDT9-type ADPR pyrophosphatases) cleave the phosphodiester bond of free ADP-ribose → AMP + ribose-5-phosphate (R5P). In [[Parthanatos]] they sit downstream of [[PARG]]/[[ARH3]]: PAR → ADP-ribose monomers → (Nudix) → AMP/R5P → R5P→PRPP→NMN→[[NAD+]] salvage at a cost of ~4 high-energy phosphates per cycle, with AMP accumulation feeding AMPK–mTORC1 signaling.

> [!info] Nudix in one sentence
> Nudix enzymes convert the PAR-catabolism product ADP-ribose into the metabolic signals (AMP) and salvage substrates (R5P) that couple PAR turnover to ATP burn and autophagic overlay.

## Overview

- Substrates: free ADP-ribose (preferred); some members act on protein-phosphoribose remnants in vitro (detection in cells limited).
- Outputs: AMP re-phosphorylated to ATP at 2-phosphate cost; R5P→PRPP at 2 further phosphates — full NAD+ salvage accounting (Moura 2024 Fig.2). At ~0.3 mM NAD(H) vs ~3–4 mM ATP, full turnover is a substantial ATP sink.
- Signaling: MNNG raises AMP/ATP → AMPK activation → mTORC1 inhibition (Ethier et al. 2012); autophagic figures in some parthanatos models (Zhou 2013; Jiang 2018) — protective vs executive unresolved.
- Competition: ADP-ribose partitioned between [[TRPM2]] gating (Ca2+ arm) and Nudix degradation (AMP arm); relative flux unknown.
- Open: whether Nudix loss is required for parthanatos; AMP-from-ADPR vs ATP-loss-from-glycolysis contribution to AMPK activation.

## Documents

List of documents that mention this entity

- Task synthesis: `task_output_parthanatos_open_questions_08_Sep_2026.md`
  - Q4 coupling route; Moura 2024 Fig.2 salvage-cost accounting.
- [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
  - Nudix degradation of free [[ADP-ribose]] to [[AMP]] + ribose-5-phosphate, the ~4-ATP salvage cost per ADP-ribose, and the AMP→[[AMPK]]–[[mTORC1]] arm; whether Nudix enzymes are required for parthanatos is an open question.

## Connections

- [[Parthanatos]] — Nudix step links PAR catabolism to energy/salvage signaling.
- [[PARG]] — upstream monomer supplier (exo activity predominant).
- [[ARH3]] — parallel monomer supplier.
- [[NAD+]] — salvage endpoint; salvage cost deepens ATP loss.
- [[TRPM2]] — competing ADP-ribose consumer (Ca2+ influx).
- [[Glycolysis]] — parallel ATP-loss arm via [[Hexokinase-1]].
- [[Autophagy]] — AMPK–mTORC1 overlay of unclear polarity.

## Linking Summary

- New note in src/notes/_link/ per parthanatos open-questions task recommendation.
- New links added: [[Parthanatos]], [[PARG]], [[ARH3]], [[NAD+]], [[TRPM2]], [[Glycolysis]], [[Hexokinase-1]], [[Autophagy]].
- Strong connections to strengthen: [[Nudix Hydrolases]] ↔ [[PARG]], [[Nudix Hydrolases]] ↔ [[Parthanatos]].
- Source enrichment (2026-09-14): Moura et al. 2024 — Nudix as the ADP-ribose→AMP/R5P node and salvage-cost ATP sink. New links: [[ADP-ribose]], [[AMPK]], [[mTORC1]].
