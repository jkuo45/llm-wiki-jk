---
title: Mevalonate pathway
description: The mevalonate pathway regulates ferroptosis by controlling selenocysteine tRNA maturation and CoQ10/isoprenoid production that modulate GPX4 and antioxidant defenses.
protected: false
created: 2026-08-24
updated: 2026-08-24
tags: [pathway, ferroptosis, lipid-metabolism, isoprenoid]
aliases: [MVA pathway, mevalonate route, mevalonic acid pathway]
---
# Mevalonate pathway

The **mevalonate pathway (MVA pathway)** converts acetyl-CoA to isoprenoids, sterols (including cholesterol), and key intermediates such as isopentenyl pyrophosphate (IPP) and coenzyme Q10 ([[Coenzyme Q10|CoQ10]]/ubiquinone). Beyond cholesterol biosynthesis, it is an important upstream regulator of [[Ferroptosis]], influencing both [[GPX4]] activity (via selenocysteine tRNA maturation) and the [[FSP1]]–CoQ10 antioxidant axis.

## Biochemistry & Key Products

The pathway proceeds: acetyl-CoA → HMG-CoA → mevalonate (via HMG-CoA reductase) → IPP/DMAPP → downstream isoprenoids and sterols. Two ferroptosis-relevant branches are (1) **IPP/isoprenoid production** needed for selenocysteine tRNA maturation, and (2) **CoQ10 (ubiquinone-10)** synthesis, the lipophilic radical trap used by [[FSP1]].

## Mechanism of Action & Pathway

Inhibition of the MVA pathway downregulates the synthesis of selenocysteine tRNA, impairing insertion of selenocysteine into [[GPX4]] and thereby reducing GPX4 protein levels and activity—promoting ferroptosis (Yang et al., *Cell* 2014, PMID: 24439385). Separately, the pathway supplies the isoprenoid backbone for [[Coenzyme Q10|CoQ10]]; loss of MVA output diminishes the FSP1–CoQ10 plasma-membrane antioxidant, sensitizing cells to lipid peroxidation. Thus the MVA pathway intersects ferroptosis at two distinct nodes: GPX4 maturation and CoQ10 availability.

> [!info] Loss of ubiquinone converges on FSP1
> Because [[FSP1]] uses [[NADPH]] to reduce **ubiquinone (CoQ10)** to the radical-trapping ubiquinol, the MVA-derived CoQ10 pool is the rate-limiting substrate of the FSP1 axis. **Diverting MVA flux away from CoQ10** — by engaging **squalene synthase** (e.g., the Class III ferroptosis inducer FIN56) toward sterol/cholesterol synthesis, or by **HMG-CoA reductase inhibition** ([[Statins]]) — depletes ubiquinone and **converges on FSP1**, collapsing its radical trap *independently of GPX4*. This explains why NAD(P)H-dependent CoQ10 regeneration predicts ferroptosis sensitivity: without MVA-supplied ubiquinone, FSP1 cannot function even when NADPH is abundant (Doll et al., 2019). See the [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H deep-dive]].

> [!info] Statins and ferroptosis
> HMG-CoA reductase inhibitors (statins) suppress the MVA pathway. Depending on context, this can sensitize cells to ferroptosis via reduced CoQ10/selenoprotein maturation—a pleiotropic effect relevant to muscle toxicity and potential anti-cancer strategies.

## Physiological Function

The MVA pathway is central to membrane sterol homeostasis, prenylation of signaling proteins (Ras-family [[RAS]], [[RAF]], [[MEK]]), and CoQ10 biosynthesis for the electron transport chain.

## Pathology & Clinical Relevance

Pharmacological modulation of the MVA pathway is being explored to sensitize tumors to ferroptosis (e.g., combining statins or bisphosphonates with [[GPX4]]/system Xc- inhibitors). The pathway's dual control of GPX4 and CoQ10 makes it a strategic, if complex, therapeutic lever.

#

## Documents

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - The review explains that the MVA pathway affects GPX4 synthesis by regulating selenocysteine tRNA maturation (via IPP and CoQ10 products), thereby regulating ferroptosis.

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - Synthesis explaining how MVA-supplied ubiquinone is the FSP1 substrate and how its loss converges on FSP1 to predict ferroptosis sensitivity.

## Connections

  - [[GPX4]]: Selenocysteine incorporation depends on MVA-derived tRNA maturation
  - [[Coenzyme Q10]]: MVA product used by FSP1 antioxidant axis
  - [[FSP1]]: CoQ10-dependent ferroptosis suppressor
  - [[Ubiquinone]]: Oxidized CoQ10; the direct FSP1 substrate whose MVA supply gates the axis
  - [[NADPH]]: Electron donor that, with MVA-supplied ubiquinone, powers FSP1
  - [[Squalene synthase]]: Downstream enzyme of the sterol branch; its engagement diverts flux from CoQ10, depleting FSP1 substrate
  - [[Statins]]: HMG-CoA reductase inhibitors that lower CoQ10, converging on FSP1
  - [[RAS]] / [[RAF]] / [[MEK]]: Prenylation clients of the pathway

## Linking Summary

- New links added: [[GPX4]], [[Coenzyme Q10]], [[FSP1]], [[Ubiquinone]], [[NADPH]], [[Squalene synthase]], [[Statins]], [[RAS]], [[RAF]], [[MEK]], [[Lipid Peroxidation]], [[Ferroptosis]], [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026]]
- Suggested new entity notes to create: None
- Strong connections to strengthen:
    - [[Mevalonate pathway]] ↔ [[GPX4]]
    - [[Mevalonate pathway]] ↔ [[FSP1]]
