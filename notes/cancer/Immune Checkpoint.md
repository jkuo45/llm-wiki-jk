---
title: Immune Checkpoint
description: Inhibitory pathways in the immune system that maintain self-tolerance and are co-opted by tumors to evade immune destruction
type: entity
created: 2026-07-09
updated: 2026-07-09
tags: [scientific-concept, immunology, cancer, immunotherapy]
aliases: [Immune Checkpoint Pathway, Checkpoint Inhibition]
url: #
source: #
---

# Immune Checkpoint

## Overview

Immune checkpoints are inhibitory receptor-ligand pathways that regulate [[T cell]] activity, preventing autoimmunity and limiting collateral tissue damage during immune responses. Tumors exploit these checkpoints to evade antitumor immunity. [[Immune Checkpoint Inhibitors|Immune checkpoint inhibitors]] (ICIs) have revolutionized [[Cancer]] treatment.

## Key Checkpoints

- **[[PD-1]]/[[PD-L1]]**: PD-1 on activated T cells binds PD-L1 on tumor cells and antigen-presenting cells, suppressing T cell effector function.
- **[[CTLA-4]]**: Competes with [[CD28]] for [[B7]] costimulatory ligands (CD80/CD86) on APCs, attenuating T cell activation.
- **[[LAG-3]]**: Inhibits T cell proliferation and cytokine production.
- **[[TIM-3]]**: Promotes T cell exhaustion when bound by [[galectin-9]] or [[HMGB1]].
- **[[TIGIT]]**: Competes with [[CD226]] for [[CD155]]/[[CD112]] ligands on tumor cells.

## Role in Senescence & STING

[[STING]] activation in the [[Tumor Microenvironment]] can upregulate [[PD-L1]] expression, linking the [[cGAS-STING Pathway]] to immune checkpoint engagement. In [[Lung Cancer]], [[KRAS]]-[[LKB1]] mutant tumors silence STING, leading to reduced type I interferon and PD-L1 expression, which paradoxically reduces T cell infiltration but also diminishes sensitivity to ICI therapy. Senescent cells can upregulate [[PD-L1]] and [[PD-L2]] as part of the [[SASP]], contributing to immune evasion.

---

## Documents

- [[_document_ - Cellular senescence and senescence_associated secretory phenotype via the cGAS_STING signaling pathway in cancer|Cellular senescence and SASP via cGAS-STING]]
  - Describes STING silencing in KRAS-LKB1 mutant lung cancer and its impact on PD-L1 expression and immune evasion.

## Connections

- [[PD-1]]/[[PD-L1]]: Dominant checkpoint axis; modulated by STING signaling
- [[cGAS-STING Pathway]]: STING activation upregulates PD-L1; silencing enables immune evasion
- [[Lung Cancer]]: KRAS-LKB1 mutant tumors silence STING, reducing checkpoint expression
- [[SASP]]: Senescent cells upregulate checkpoint ligands as part of SASP
- [[Immune Checkpoint Inhibitors]]: Therapeutic antibodies targeting these pathways

## Linking Summary

- New links added: [[PD-1]], [[PD-L1]], [[CTLA-4]], [[LAG-3]], [[TIM-3]], [[TIGIT]], [[Immune Checkpoint Inhibitors]]
- Suggested new entity notes to create: [[B7]] (CD80/CD86), [[CD28]], [[T cell exhaustion]]
- Strong connections to strengthen: [[Immune Checkpoint]] ↔ [[cGAS-STING Pathway]] (STING-PD-L1 axis), [[Immune Checkpoint]] ↔ [[Lung Cancer]] (KRAS-LKB1 context)
