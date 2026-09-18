---
title: PANoptosome
description: The PANoptosome is the multiprotein complex that co-assembles pyroptosis, apoptosis, and necroptosis — nucleated by sensors such as ZBP1, AIM2, or loss of TAK1 — producing PANoptosis that single-pathway inhibitors cannot block.
protected: false
created: 2026-09-14
updated: 2026-09-14
tags: [protein-complex, cell-death, inflammation, innate-immunity]
url: #
source: #
aliases: [PANoptosome complex]
---

# PANoptosome

The **PANoptosome** is the supramolecular signaling complex that coordinates [[PANoptosis]] — the simultaneous execution of [[Pyroptosis]], [[Apoptosis]], and [[Necroptosis]]. Its defining feature is non-redundancy: because the three lethal arms are co-assembled in one platform, blocking any single pathway does not prevent death.

## Composition and nucleation

- **Shared core:** [[RIPK1]], [[RIPK3]], [[FADD]], and [[Caspase-8]] — the death-receptor/necroptosome machinery.
- **Pyroptotic arm:** [[Caspase-1]], [[NLRP3]], and ASC (PYCARD); gasdermin pore formation.
- **Apoptotic arm:** caspase-8–dependent executioner caspases.
- **Necroptotic arm:** RIPK3-phosphorylated [[MLKL]] and membrane rupture.

Nucleation is triggered by innate-immune sensors:
- **[[ZBP1]]** senses viral/endogenous Z-nucleic acids and assembles a PANoptosome during viral infection or cytokine storm, directly linking the ZBP1–RIPK3 axis to co-activated death.
- **[[AIM2]]** nucleates PANoptosomes in response to distinct pathogens.
- **Loss of [[TAK1]]** kinase activity (e.g. via *Yersinia* effectors) converts the same signaling platform into a death switch.
- Cytokines, bacterial components, and viral nucleic acids can all serve as upstream triggers.

> [!info]
> Source: [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]]
> The review frames PANoptosomes as the point where cell-death crosstalk becomes an integrated network rather than parallel pathways: ZBP1-nucleated complexes simultaneously activate RIPK3/MLKL necroptosis, caspase-8-dependent apoptosis, and inflammasome-driven pyroptosis. PANoptosis is implicated in bacterial sepsis, inflammatory bowel disease, and neurodegenerative disorders.

## Therapeutic implication

Because the arms are co-assembled, single-pathway inhibitors ([[Z-VAD-FMK]], [[Necrostatin-1]]) often fail in PANoptotic settings. Effective intervention is expected to require targeting shared upstream sensors (e.g. [[ZBP1]], [[AIM2]]) or core platform components rather than individual death executors.

## Documents

- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - Describes ZBP1- and AIM2-nucleated PANoptosomes co-activating necroptosis, apoptosis, and pyroptosis; PANoptosis in sepsis, IBD, and neurodegeneration.
- [[PANoptosis]] (entity note)
  - Defines PANoptosis and the PANoptosome; ZBP1/TAK1 nucleation and non-redundancy.

## Connections

- [[PANoptosis]] — the death paradigm the complex executes.
- [[ZBP1]] — canonical nucleating sensor (viral Z-nucleic acids).
- [[AIM2]] — alternative nucleating sensor.
- [[RIPK1]] / [[RIPK3]] / [[FADD]] / [[Caspase-8]] — shared core components.
- [[Caspase-1]] / [[NLRP3]] / [[ASC]] — pyroptotic arm.
- [[MLKL]] — necroptotic arm.
- [[TAK1]] — its loss licenses PANoptosome assembly.
- [[Inflammation]] — the physiological output; DAMP/PAMP driven.

## Linking Summary

- New entity note in `src/notes/_link/` resolving the orphan [[PANoptosome]] link from [[PANoptosis]] (shared: cell-death / innate immunity / inflammation).
- New links added: [[PANoptosis]], [[Pyroptosis]], [[Apoptosis]], [[Necroptosis]], [[ZBP1]], [[AIM2]], [[RIPK1]], [[RIPK3]], [[FADD]], [[Caspase-8]], [[Caspase-1]], [[NLRP3]], [[ASC]], [[MLKL]], [[TAK1]], [[Inflammation]], [[Z-VAD-FMK]], [[Necrostatin-1]].
- Suggested new entity notes: [[ASC]] (verify), if orphan audit flags it.
- Strong connections to strengthen: [[PANoptosome]] ↔ [[ZBP1]], [[PANoptosome]] ↔ [[PANoptosis]].
