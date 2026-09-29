---
title: Malonyl-CoA
description: Malonyl-CoA is the three-carbon intermediate of de novo fatty acid synthesis made by ACC1/ACC2, and the key metabolic switch that represses mitochondrial fatty acid oxidation by inhibiting CPT1.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - metabolite
  - lipid-metabolism
  - metabolism
aliases: [malonyl coenzyme A, malonyl-Coenzyme A]
---

# Malonyl-CoA

**Malonyl-CoA** (malonyl coenzyme A) is a three-carbon thioester of [[Acetyl-CoA]] and the committed intermediate of de novo fatty acid synthesis. It is made by the biotin-dependent carboxylation of acetyl-CoA, catalysed by the acetyl-CoA carboxylases [[ACC1]] (cytosolic) and its paralogue [[ACC2]] (mitochondrial), and it is consumed by [[FASN]] as the two-carbon donor that drives each elongation cycle of palmitate synthesis.

## Dual role: substrate and brake

Malonyl-CoA is unusual among metabolic intermediates because it is simultaneously a *building block* and a *regulatory signal*.

> [!info] Mechanism
> Accumulated malonyl-CoA allosterically inhibits **carnitine palmitoyltransferase 1 (CPT1)**, the enzyme that transfers long-chain acyl groups from cytosolic CoA esters into the mitochondrial matrix for β-oxidation. Raising malonyl-CoA therefore simultaneously switches fatty acid synthesis **on** and fatty acid oxidation **off** — a coordinated anabolic state rather than two independent fluxes. Work in hypothalamic cells links malonyl-CoA to feeding behaviour, and knockout or overexpression of [[Malonyl-CoA decarboxylase]] (MCD), the enzyme that decarboxylates malonyl-CoA back to acetyl-CoA, shifts whole-body energy balance in rodents.

## Regulation

- **Fed state / insulin** — [[Insulin]] activates [[ACC1]] and inhibits MCD, so malonyl-CoA rises.
- **Fasting / energy stress** — [[AMPK]] phosphorylates [[ACC1]] at Ser79, inhibiting it, and phosphorylates MCD, activating it. Malonyl-CoA falls, CPT1 is released, and oxidation proceeds. AMPK signalling to ACC has been shown to be required for the fasting response in mice (Galic et al., 2018).
- **Citrate** allosterically activates ACC; **palmitoyl-CoA** inhibits it.

The malonyl-CoA/CPT1 axis is why the rat liver can oxidize fatty acids in the fasted state but not in the fed state, and it is the mechanistic basis for much of the interest in ACC inhibitors and CPT1 activators in metabolic disease.

## Clinical and research relevance

Malonyl-CoA levels are elevated in [[Obesity]], [[Insulin Resistance]] and [[NAFLD]]/[[NASH]], where the fed-like suppression of oxidation persists inappropriately. In cancer, ACC1 overexpression is common in lipogenic tumours (see [[ACC1]]). Genetic loss-of-function in *ACACA*/*ACACB* has been linked to lipodystrophy phenotypes in humans, though the clinical picture is still incompletely characterised — the certainty of the *mechanism* is much higher than the completeness of the *human genetics*.

Malonyl-CoA is short-lived, compartmentalised and non-ionisable, so it is measured almost exclusively in tissue extracts or by isotope-tracer inference rather than as a circulating biomarker.

## Documents

- [[ACC1]]
  - The rate-limiting enzyme that generates malonyl-CoA and thereby also sets the brake on CPT1; the ACC1 note frames malonyl-CoA as the shared node between lipogenesis and oxidation.

## Connections

- [[ACC1]] — Catalyses the acetyl-CoA → malonyl-CoA step; AMPK phosphorylation of ACC1 is the main hormonal brake on malonyl-CoA accumulation.
- [[FASN]] — Consumes malonyl-CoA as the two-carbon donor for each elongation cycle in fatty acid synthesis.
- [[AMPK]] — Phosphorylates ACC1 (inhibitory) and malonyl-CoA decarboxylase (activating), lowering malonyl-CoA during energy stress so oxidation can proceed.
- [[Malonyl-CoA decarboxylase]] — The catabolic counterpart that decarboxylates malonyl-CoA back to acetyl-CoA, setting the upper limit on the signal.
- [[Insulin]] — The fed-state hormone that promotes malonyl-CoA accumulation and thereby suppresses fatty acid oxidation.
- [[CPT1]] — The inhibited target; inhibition by malonyl-CoA is the step that blocks mitochondrial fatty acid import.
- [[Acetyl-CoA]] — The direct precursor in the ACC1 reaction and the product of MCD.
- [[Ketogenesis]] — Runs in the opposite metabolic state to that favoured by malonyl-CoA, since oxidation is suppressed whenever malonyl-CoA is high.

## Linking Summary

- New links added: [[Acetyl-CoA]], [[FASN]], [[AMPK]], [[Malonyl-CoA decarboxylase]], [[Insulin]], [[CPT1]], [[Ketogenesis]], [[Obesity]], [[Insulin Resistance]], [[NAFLD]], [[NASH]].
- Suggested notes to create: [[ACC2]], [[CPT1]], [[Carnitine shuttle]], [[Palmitate]], [[Lipogenesis]] — removed as already existing: Fatty acid oxidation
- Strong connections to strengthen: [[ACC1]] ↔ [[AMPK]] (phosphorylation switch), [[Malonyl-CoA]] ↔ [[Insulin Resistance]] (obesity as chronic fed-like state).
