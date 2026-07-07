---
title: GATOR1
description: GATOR1 is a protein complex that acts as a GAP for Rag proteins, negatively
  regulating mTORC1 activity in response to amino acid levels.
type: entity
created: 2026-07-04
updated: 2026-07-07
tags:
  - protein
aliases: []
---

# GATOR1

GATOR1 (GTPase Activator Toward Rags 1) is a heterotrimeric GTPase-activating protein (GAP) complex that acts as a master negative regulator of [[mTORC1]] in response to intracellular amino acid availability. It functions upstream of the [[Rag proteins]] (RagA/B and RagC/D) by stimulating their GTP hydrolysis, thereby keeping mTORC1 tethered in an inactive state at the cytosolic face of the [[Lysosome]] until amino acids are sensed.

## Structure & Composition

GATOR1 is composed of three subunits: [[DEPDC5]] (dishevelled, EGL-10, and pleckstrin domain-containing protein 5), [[NPRL2]] (nitrogen permease regulator-like 2), and [[NPRL3]] (nitrogen permease regulator-like 3). DEPDC5 forms the structural scaffold and contains the GAP catalytic center, while NPRL2 and NPRL3 are required for stable complex assembly and membrane localization. The complex localizes to the lysosomal surface, where it directly contacts the Ragulator-Rag platform that recruits mTORC1. In nematodes, the corresponding SEPA-1/EPG-4/EPG-3 complex couples amino acid starvation to [[Selective Autophagy]] of the endoplasmic reticulum (All may be conserved upstream sensors of nutrient stress).

## Mechanism of Action

GATOR1 acts as a GAP specifically toward RagA and RagB (the "A/B" arm of the Rag dimer), accelerating conversion of active RagA/B-GTP to inactive RagA/B-GDP. In the GDP-bound state, the Rag heterodimer cannot productively bind and recruit [[mTORC1]] to the lysosomal membrane, preventing its activation by [[Rheb]]. This GAP activity is opposed by GATOR2 (a positive regulator that inhibits GATOR1), and together the GATOR1/GATOR2 axis integrates amino acid sufficiency signals. When intracellular amino acids are abundant, GATOR2 suppresses GATOR1, allowing RagA/B to remain GTP-loaded and mTORC1 to activate. Under starvation, GATOR1 GAP activity prevails, RagA/B-GDP dominates, and mTORC1 dissociates and is inactivated, which de-represses [[TFEB]] and induces [[Autophagy]].

## Physiological & Pathological Function

GATOR1 is the focal point of cellular amino acid sensing. Germline loss-of-function mutations in DEPDC5, NPRL2, or NPRL3 cause focal cortical dysplasia, epileptogenesis, and hamartomatous overgrowth syndromes, reflecting constitutive mTORC1 hyperactivation and dysregulated growth. In cancer, DEPDC5 inactivation is found in several tumor types where it drives mTORC1-dependent proliferation and metabolic reprogramming. Conversely, pharmacological or genetic augmentation of GATOR1 activity (or disruption of GATOR2) is being explored as a means to inhibit mTORC1 in [[Cancer]] and to promote [[Autophagy]] for [[Neurodegeneration]] and [[Aging]] interventions.

## Connections

- [[mTORC1]]: GATOR1 is the primary GAP that inactivates RagA/B to keep mTORC1 off under amino acid starvation.
- [[Rag proteins]]: Direct GAP substrate of GATOR1; Rag GTPase nucleotide state controls mTORC1 recruitment.
- [[DEPDC5]]: Scaffold and catalytic subunit of the GATOR1 complex; mutation causes mTORopathies.
- [[NPRL2]]: Structural subunit of GATOR1 required for complex stability and GAP activity.
- [[NPRL3]]: Structural subunit of GATOR1; loss causes constitutive mTORC1 activation.
- [[TFEB]]: Downstream effector de-repressed when GATOR1 keeps mTORC1 inactive, driving [[Lysosome]] biogenesis.
- [[GATOR2]]: Negative regulator of GATOR1 that transmits amino acid sufficiency to mTORC1.
- [[Rheb]]: Lysosomal GTPase whose ability to activate mTORC1 is gated by GATOR1-controlled Rag state.

## Linking Summary
- New links added: [[DEPDC5]], [[NPRL2]], [[NPRL3]], [[Rheb]], [[GATOR2]], [[Rag proteins]], [[mTORC1]], [[TFEB]], [[Lysosome]], [[Selective Autophagy]], [[Autophagy]], [[Cancer]], [[Neurodegeneration]], [[Aging]]
- Suggested new entity notes to create: [[GATOR2]], [[Ragulator]], [[Amino Acid Sensing]]
- Strong connections to strengthen: [[GATOR1]] ↔ [[mTORC1]], [[GATOR1]] ↔ [[Rag proteins]]
