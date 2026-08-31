---
title: ME2
description: Malic Enzyme 2, the mitochondrial isoform of malic enzyme that converts malate to pyruvate while generating NADPH; a SIRT3 delactylation and SIRT5 desuccinylation substrate at the nexus of tumor redox balance and metabolic plasticity.
protected: false
created: 2026-08-31
updated: 2026-08-31
tags:
  - enzyme
  - metabolism
  - redox
  - cancer
  - entity
type: entity
entity_type_1: enzyme
aliases:
  - Malic Enzyme 2
  - Malate dehydrogenase (decarboxylating, NAD+)
  - ME2
---

# ME2

**ME2** (malic enzyme 2, *ME2*) is the mitochondrial isoform of malic enzyme, a homotetrameric NAD(P)-malic enzyme that catalyzes the reversible oxidative decarboxylation of **L-malate to pyruvate** with the reduction of **NADP⁺ to NADPH** (and, secondarily, NAD⁺ to NADH). By generating mitochondrial NADPH and feeding pyruvate into the [[TCA cycle]], ME2 links carbon flux to both bioenergetics and redox defense, making it a hub of tumor **metabolic plasticity** and **redox equilibrium**.

## Reaction & Compartmentation

- **Reaction:** L-Malate + NADP⁺ → Pyruvate + CO₂ + NADPH (+ H⁺)
- **Mitochondrial localization:** ME2 resides in the mitochondrial matrix, functionally coupled to malate–aspartate shuttle flux and to TCA-cycle anaplerosis.
- **Isoform topology:** three mammalian malic enzymes exist — ME1 (cytosolic, NADP⁺), ME2 and ME3 (mitochondrial). ME2 is the principal mitochondrial NADPH-generating isoform and is the one implicated in tumor metabolism.

## Role in Tumor Metabolism

ME2 sits at a critical junction: it both supplies **NADPH** (the reducing currency for glutathione regeneration and reductive biosynthesis) and generates **pyruvate** that can feed mitochondrial oxidation or lactate generation — a position squarely inside the glycolysis–OXPHOS plasticity axis modulated by [[SIRT3]].

- **Redox contribution:** mitochondrial NADPH supports [[Glutathione]]/[[Thioredoxin]] regeneration, countering mitochondrial reactive oxygen species ([[Reactive Oxygen Species]]) production.
- **Metabolic flexibility:** by converting malate to pyruvate, ME2 provides oxidative substrate and modulates the balance between glutamine/malate utilization and glycolysis.
- **Tumorigenic support:** ME2 upregulation promotes metabolic flexibility and survival in the tumor microenvironment; its activity supports proliferation when carbon and redox demands are high.

## Post-Translational Regulation: Lactylation and Deacylation Crosstalk

ME2 is regulated by competing acylation/erasure PTMs — an emerging layer of the redox-metabolic interplay:

### SIRT3-mediated delactylation (anti-tumor)

> [!info] Source: Chen et al., *Cancer Cell Int* 2025 (doi:10.1007/s13402-025-01058-5) — SIRT3-mediated delactylation of malic enzyme 2 disrupts redox balance and inhibits colorectal cancer growth
> **ME2 K352 lactylation** (driven by lactate, a Warburg by-product) enhances ME2 enzymatic activity, boosting NADPH production and mitochondrial respiration. **[[SIRT3]] acts as a delactylase** for ME2, removing the K352 lactyl mark and thereby *inhibiting* ME2 activity. In colorectal cancer (HCT116) models, disrupting ME2 lactylation (K352R delactylation-mimic) elevates ROS, raises the NADP⁺/NADPH ratio, shifts malate/lactate/pyruvate levels, and suppresses tumor growth and proliferation *in vivo*. SIRT3's delactylation of ME2 is thus a **tumor-suppressive** breaker of oncogenic redox maintenance — a mechanistic counterpoint to SIRT3's own oncogenic deacetylation axes (e.g., [[ACC1]], [[SHMT2]]).

### SIRT5-mediated desuccinylation (pro-tumor)

Parallel work shows **[[SIRT5]]** interacts with and **desuccinylates ME2 at K346**, *increasing* ME2 activity and promoting colorectal cancer growth — the mirror-image modification at a nearby residue. ME2 therefore integrates opposite signals: SIRT3 (delactylation → suppresses ME2, anti-tumor) and SIRT5 (desuccinylation → activates ME2, pro-tumor), illustrating how mitochondrial sirtuins compete to set the redox/metabolic setpoint through a single enzyme.

## Clinical Relevance & Therapeutic Angle

- **Apparent paradox, resolved by context:** SIRT3's delactylation of ME2 is anti-tumor (CRC), whereas SIRT3's deacetylation of other enzymes is pro-tumor — underscoring that SIRT3's net role is substrate- and context-dependent.
- **Therapeutic strategy:** targeting ME2 **lactylation** is proposed as a cancer therapy; modulating the [[Lactylation]]/delactylation balance (rather than ME2 activity alone) could selectively disrupt tumor redox maintenance.
- **Detecting the acylation code:** the NADP⁺/NADPH ratio, ROS levels, and mitochondrial respiration are readouts of ME2 acylation state — useful biomarkers for stratifying tumors by their reliance on malic-enzyme-driven redox buffering.

## Connections

- [[SIRT3]] — delactylates ME2 at K352, inhibiting activity and disrupting tumor redox balance (anti-tumor in CRC)
- [[SIRT5]] — desuccinylates ME2 at K346, activating it and promoting CRC growth (pro-tumor)
- [[Lactylation]] — lactate-derived lysine acylation that enhances ME2 activity; erased by SIRT3
- [[NADPH]] — product of ME2; currency of antioxidant regeneration
- [[Pyruvate]] — product of ME2; feeds TCA cycle and glycolysis-derived lactate
- [[TCA cycle]] — ME2's pyruvate/NADPH outputs feed oxidative metabolism
- [[Reactive Oxygen Species]] — ME2-derived NADPH counters mitochondrial ROS
- [[Metabolic Plasticity]] — ME2 couples malate/pyruvate/NADPH flux to the glycolysis–OXPHOS switch
- [[Redox Homeostasis]] — NADPH-driven redox balance maintained in part by ME2
- [[Colorectal Cancer]] — tumor where the SIRT3-ME2 delactylation axis suppresses growth
- [[Glutathione]] — antioxidant supported by ME2-derived NADPH

## Linking Summary

- New links added: [[SIRT3]], [[SIRT5]], [[Lactylation]], [[NADPH]], [[Pyruvate]], [[TCA cycle]], [[Reactive Oxygen Species]], [[Metabolic Plasticity]], [[Redox Homeostasis]], [[Colorectal Cancer]], [[Glutathione]]
- Suggested new entity notes to create: [[SIRT5]] (exists), [[Lactylation]] (exists)
- Strong connections to strengthen:
  - [[ME2]] ↔ [[SIRT3]] — delactylation suppresses ME2 and tumor redox maintenance
  - [[ME2]] ↔ [[SIRT5]] — desuccinylation activates ME2, opposite effect
  - [[ME2]] ↔ [[Metabolic Plasticity]] — malate/pyruvate/NADPH hub of the switch
