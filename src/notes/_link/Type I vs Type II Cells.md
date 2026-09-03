---
title: Type I vs Type II Cells
description: The distinction between type I cells that execute death-receptor apoptosis directly via caspase-8 to caspase-3 and type II cells that require Bid-mediated mitochondrial amplification.
protected: false
created: 2026-09-03
updated: 2026-09-03
tags:
  - mechanism
  - cell-death
  - apoptosis
  - signaling
url: #
source: #
aliases: [type I cells, type II cells, type I vs type II apoptosis]
---

# Type I vs Type II Cells

The **type I / type II** distinction (Scaffidi et al. 1998) classifies cells by how much mitochondrial
help death-receptor [[Apoptosis]] needs. It determines where the [[Caspase-8-c-FLIP Rheostat]]'s
decision is finalized — at the [[DISC]] or at the mitochondrion.

## Mechanism

- **Type I cells** (e.g. SKW6.4, H9 lymphocytes): strong [[DISC]] formation generates enough active
  [[Caspase-8]] to process [[Caspase-3]] directly; [[Bcl-2]] overexpression does *not* protect.
  Rheostat outcome is read out (almost) entirely at the receptor.
- **Type II cells** (e.g. Jurkat, CEM, hepatocytes, pancreatic β-cells): weak DISC output makes
  [[Caspase-8]] insufficient; the signal must be amplified by [[Caspase-8]] → [[Bid]] → tBid →
  [[BAX]]/[[BAK]] → [[Mitochondrial outer membrane permeabilization|MOMP]] → apoptosome →
  [[Caspase-9]] → [[Caspase-3]]. [[Bcl-2]]/Bcl-xL overexpression blocks death here.
- **Molecular basis:** DISC stoichiometry (FADD/[[Caspase-8]]/[[c-FLIP]] ratios), [[XIAP]] levels
  restraining [[Caspase-3]], and mitochondrial priming set the type; some cells switch type with
  differentiation or transformation.

## Physiological Function

Hepatocytes — the classic type II parenchyma — explain why liver-specific *Cflip* reduction
devastates the liver (Tsuchiya 2015 review): with weak DISCs, any upward nudge in [[Caspase-8]]
output is mitochondrially amplified into organ failure.

## Pathology & Clinical Relevance

- **Therapy prediction:** [[TRAIL]] agonists kill type I tumors directly but need Bcl-2-family
  co-targeting (venetoclax/navitoclax) in type II tumors.
- **Rheostat interaction:** in type II cells, even modest FLIP_L downregulation is lethal because
  MOMP amplifies small caspase-8 gains — the therapeutic window exploited by HDAC-inhibitor +
  TRAIL combinations.

## Documents

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - DISC-output thresholds and mitochondrial crosstalk framing the type I/II divide.

## Connections

- [[Caspase-8]] — the initiator whose DISC output defines the type
- [[DISC]] — strong in type I, weak in type II
- [[Bid]] / [[BAX]] / [[BAK]] — the type-II amplification relay
- [[Caspase-3]] / [[Caspase-9]] — direct vs mitochondrially-routed executioners
- [[Bcl-2]] — the type-II-specific brake
- [[c-FLIP]] — rheostat tuner with amplified leverage in type II cells
- [[TRAIL]] — therapy whose efficacy is type-dependent
- [[Apoptosis]] — the shared endpoint

## Linking Summary

- New links added: [[Caspase-8]], [[DISC]], [[Bid]], [[BAX]], [[BAK]], [[Caspase-3]],
  [[Caspase-9]], [[Bcl-2]], [[c-FLIP]], [[TRAIL]], [[Apoptosis]]
- Suggested new entity notes to create: (none outstanding)
- Strong connections to strengthen: [[Type I vs Type II Cells]] ↔ [[Caspase-8]],
  [[Type I vs Type II Cells]] ↔ [[Bid]]
