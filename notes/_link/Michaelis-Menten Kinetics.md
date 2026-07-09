---
title: Michaelis-Menten Kinetics
description: The classical enzyme-kinetic framework describing reaction rate as a function of substrate concentration via Vmax and the Michaelis-Menten constant Km; central to the saturation requirement for drug hormesis.
created: 2026-07-09
updated: 2026-07-09
tags:
  - scientific-concept
  - enzyme-kinetics
aliases: [Michaelis-Menten, MM kinetics, Enzyme kinetics]
---

# Michaelis-Menten Kinetics

**Michaelis-Menten kinetics** describe the rate *v* of an enzyme-catalyzed reaction as a saturable function of substrate concentration *[S]*:

$$v = \frac{V_{max}[S]}{K_m + [S]}$$

where *Vmax* is the maximal rate and *Km* (the Michaelis-Menten constant) is the substrate concentration at half-maximal velocity. This framework underlies the activation–deactivation interactions in the coarse-grained signaling model of Cerrillo, Vidakovic & Míguez (2026) [^1].

## Relevance to Hormesis

In the three-node hormesis model, each interaction *i → j* is governed by a kinetic constant *kij* and a Michaelis-Menten constant *Kij*. The authors found that hormesis probability depends critically on the **Km of the backward (Target→Input) link (K21)**: when K21 is extremely low (deep saturation, [[Saturated Enzymatic Regime]]), the reaction rate becomes insensitive to substrate and hormesis probability rises ~10× [^1]. This saturation acts as a nonlinear threshold separating the two branches of the [[Incoherent Bivalent Motif]].

## Documents

- [[_document_ - biochemical_basis_hormesis_2026.04.20.719646v1.full|The Biochemical Basis of Hormesis]]
  - Uses Michaelis-Menten activation–deactivation kinetics for all node interactions and identifies low-K21 saturation as the hormesis amplifier.

## Connections

- [[Saturated Enzymatic Regime]] — the Vmax-limited portion of the MM curve
- [[Incoherent Bivalent Motif]] — motif whose hormesis is amplified by low Km
- [[Biphasic Dose-Response Curve]] — resulting signature
- [[Hormesis]] — broader phenomenon

## Linking Summary

- New links added: [[Saturated Enzymatic Regime]], [[Incoherent Bivalent Motif]], [[Biphasic Dose-Response Curve]], [[Hormesis]]
- Suggested new entity notes to create: [[Enzyme Kinetics]]
- Strong connections to strengthen: [[Michaelis-Menten Kinetics]] ↔ [[Saturated Enzymatic Regime]]; [[Michaelis-Menten Kinetics]] ↔ [[Incoherent Bivalent Motif]]

[^1]: Cerrillo G, Vidakovic H, Míguez DG. *The Biochemical Basis of Hormesis.* bioRxiv 2026.04.20.719646 (2026).
