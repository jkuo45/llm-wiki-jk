---
title: Pyruvate Dehydrogenase
description: Mitochondrial enzyme complex that converts pyruvate to acetyl-CoA, the committed step feeding the TCA cycle. Its activity gates glucose-derived carbon entry into the mitochondrial citrate–acetyl-CoA axis.
created: 2026-07-31
updated: 2026-09-14
tags:
  - enzyme
  - metabolism
  - mitochondrial
aliases:
  - PDH
  - PDHC
  - pyruvate dehydrogenase complex
  - PDC
---

# Pyruvate Dehydrogenase

**Pyruvate dehydrogenase (PDH, PDHC)** is the mitochondrial multienzyme complex that catalyzes the irreversible oxidative decarboxylation of [[Pyruvate]] to [[Acetyl-CoA]], producing NADH and CO2. It is the committed step linking [[Glycolysis]] to the [[TCA cycle|TCA cycle]] and is regulated by phosphorylation (PDK/[[PDP]] cycle): PDH kinases (PDK1–4) inactivate it, while PDH phosphatases reactivate it.

## Overview

PDH is a large complex built on a dihydrolipoamide acetyltransferase (E2) core with pyruvate dehydrogenase (E1), dihydrolipoamide dehydrogenase (E3), and the cofactors thiamine pyrophosphate, lipoic acid, CoA, and FAD. High acetyl-CoA/CoA, NADH/NAD+, and ATP ratios inhibit it; pyruvate and Ca2+ activate it.

## Role in Senescence

PDH was identified as a mitochondrial gatekeeper for oncogene-induced senescence: its activity determines pyruvate flux into the TCA cycle, and its inhibition blocks the senescence-associated metabolic program. More broadly, the PDH–pyruvate–citrate–acetyl-CoA axis sustains the [[Acetyl-CoA]] pool used for [[Histone Acetylation|histone acetylation]] at [[SASP|SASP]] loci in senescent cells, upstream of mitochondrial pyruvate entry via the [[MPC|mitochondrial pyruvate carrier]].

> [!info] Source: [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
> Kaplon et al. (2013) established PDH as the mitochondrial gatekeeper of senescence (ref [^11]); this study places PDH upstream of the mitochondrial citrate–acetyl-CoA axis that drives H3K27ac-dependent SASP gene expression.

**Necroptosis regulation.** [[RIPK3]] directly phosphorylates threonine 135 on the E3 subunit of PDC, enhancing its catalytic activity, aerobic respiration, and mitochondrial [[ROS]]. This respiratory burst feeds back on the necrosome by promoting [[RIPK1]] autophosphorylation and RIPK3 recruitment, so PDC activity — and the [[MPC]]-dependent supply of [[Pyruvate]] — promotes [[Necroptosis]]. Conversely, PDC blockade, pyruvate depletion, or MPC inhibition (e.g. [[UK5099]]) suppresses TNF-induced necroptosis, and [[MLKL]] is required for RIPK3 to reach mitochondria-localized PDC (Yang et al., *Nat Cell Biol* 2018).

## Documents

- [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
  - Contextualizes PDH as the entry point of the mitochondrial metabolic checkpoint controlling SASP chromatin.
- [[_document_ - RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis|Yang et al. 2018 — RIP3 targets PDC to increase aerobic respiration in TNF-induced necroptosis]]
  - RIPK3 phosphorylates PDC-E3 at Thr135 to drive aerobic respiration and mitochondrial ROS, coupling PDC activity to necrosome assembly.
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - Lists RIPK3-phosphorylated PDC (E3 Thr135) among the non-MLKL substrates linking necroptosis to cancer metabolic reprogramming, while noting the broader disease relevance remains an open question.

## Connections

- [[RIPK3]] — RIPK3 phosphorylates the PDC E3 subunit (Thr135) to enhance activity and drive the respiratory–ROS arm of [[Necroptosis]]
- [[Necroptosis]] — Cell-death program promoted by PDC-dependent aerobic respiration and mitochondrial ROS
- [[RIPK1]] — Autophosphorylated downstream of PDC/ROS to reinforce necrosome assembly
- [[MLKL]] — Required for RIPK3 access to mitochondria-localized PDC
- [[ROS]] — Mitochondrial by-product of enhanced PDC/respiratory flux that feeds back on the necrosome
- [[UK5099]] — MPC inhibitor that blocks the upstream pyruvate supply to PDC
- [[Pyruvate]] — PDH substrate
- [[Acetyl-CoA]] — PDH product feeding the TCA cycle
- [[TCA cycle]] — Receives PDH-derived acetyl-CoA
- [[MPC]] — Mitochondrial pyruvate import upstream of PDH
- [[Glycolysis]] — Source of pyruvate
- [[SASP]] — Secretory phenotype gated by PDH-driven mitochondrial metabolism

## Linking Summary

- New links added: [[Pyruvate]], [[Acetyl-CoA]], [[TCA cycle]], [[MPC]], [[Glycolysis]], [[SASP]], [[RIPK3]], [[Necroptosis]], [[RIPK1]], [[MLKL]], [[ROS]], [[UK5099]]
- Suggested new entity notes to create: [[Pyruvate Dehydrogenase Kinase]]
- Strong connections to strengthen:
    - [[Pyruvate Dehydrogenase]] ↔ [[Pyruvate]] ↔ [[Acetyl-CoA]] ↔ [[TCA cycle]]
    - [[Pyruvate Dehydrogenase]] ↔ [[RIPK3]] ↔ [[Necroptosis]]
- Source enrichment (2026-09-14): [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — PDC as a non-MLKL RIPK3 substrate in cancer metabolic reprogramming.
