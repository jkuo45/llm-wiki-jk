---
title: Mitochondrial Dysfunction-Associated Senescence
description: A form of cellular senescence triggered by mitochondrial dysfunction, driven by NAD+/NADH collapse and AMPK–p53 signaling, and characterized by a p53-dependent SASP with an attenuated IL-1-dependent inflammatory arm.
created: 2026-07-31
updated: 2026-07-31
tags:
  - biological-process
  - senescence
  - mitochondria
  - aging
  - metabolism
aliases:
  - MiDAS
  - mitochondrial dysfunction-associated senescence
  - mitochondrial dysfunction-induced senescence
---

# Mitochondrial Dysfunction-Associated Senescence

**Mitochondrial dysfunction-associated senescence (MiDAS)** is a distinct form of [[Cellular Senescence]] triggered by mitochondrial perturbation rather than canonical genotoxic stressors. It was first characterized by Wiley et al. (2016; PMID 27716483) in cells with experimentally induced mitochondrial dysfunction, which enter [[Cell Cycle|cell-cycle arrest]] through a pathway dependent on [[AMPK]] and [[p53]] — without the classic [[DNA Damage]] response engaged by [[Replicative Senescence]] or genotoxic [[Stress-Induced Senescence|stress-induced senescence]]. MiDAS is centrally relevant to aging because it links the age-related decline in [[NAD+]] and mitochondrial fitness to the accumulation of senescent cells and [[Inflammaging]].

## Trigger: The NAD+/NADH Axis

> [!info] Central Mechanism
> A reduced NAD+/NADH ratio — not ROS overload per se — is sufficient to trigger MiDAS. Falling NAD+ activates [[AMPK]], which stabilizes [[p53]], leading to p21-mediated cell-cycle arrest (Wiley et al., 2016).

- Mitochondrial complex I inhibition (e.g., with [[Rotenone]]) or genetic ablation of respiratory chain components lowers NAD+ availability and raises NADH, tipping the NAD+/NADH ratio downward.
- The reduced ratio activates [[AMPK]] (a low-energy sensor), which phosphorylates and stabilizes [[p53]].
- Stabilized [[p53]] transcriptionally induces [[p21 CIP1|p21]], enforcing a stable [[Cell Cycle|G1 arrest]] — mechanistically analogous to the p53–p21 arm of other senescence forms but activated through metabolic rather than DDR signaling.
- [[ROS]] is not the obligatory trigger; MiDAS can be induced under conditions where oxidative stress is negligible, distinguishing it from ROS-driven senescence.

## Distinct Secretory Phenotype

- MiDAS cells display a **p53-dependent SASP** with an **attenuated IL-1-dependent inflammatory arm**: production of [[IL-1α]]/[[IL-1β]] and their downstream targets is suppressed relative to other senescence forms.
- [[IL-6]] and additional SASP factors can still be secreted, meaning MiDAS is not "non-inflammatory" but rather skewed toward a specific, less classical NF-κB–driven profile.
- This context dependence means SASP-modulating senomorphics must be evaluated against MiDAS's specific output, not a generic SASP fingerprint (see [[p21 CIP1|p21]] note for p21-depletion effects during MiDAS).

## Relationship to Senescence-Associated Mitochondrial Dysfunction (SAMD)

MiDAS is closely related to, but distinct from, [[Senescence-associated mitochondrial dysfunction]] (SAMD):

- **SAMD** describes the mitochondrial deterioration *that occurs within* already-senescent cells and fuels the canonical pro-inflammatory [[SASP]] via [[Reactive Oxygen Species|ROS]], [[Minority MOMP]], and [[Mitochondrial DNA|mtDNA]] release through the [[cGAS-STING Pathway|cGAS–STING axis]].
- **MiDAS** is the senescence program *initiated by* mitochondrial dysfunction itself and is marked by a dampened IL-1 arm.
- Together they form a feedback loop: mitochondrial dysfunction initiates MiDAS, and once senescent, cells develop SAMD that sustains low-grade inflammation.

## Role in Aging and Inflammaging

- [[NAD+]] depletion during aging — driven by hyperactivity of [[CD38]], [[PARP1]], and [[SARM1]] — is a central metabolic bottleneck that enforces MiDAS in tissues, particularly in aged [[Stem Cells]] (Bautista & López-Cortés, 2026).
- MiDAS in stem cell compartments contributes to loss of quiescence, impaired regenerative capacity, and premature exhaustion, coupling mitochondrial decline to tissue aging.
- Reduced sirtuin activity ([[SIRT1]], [[SIRT3]]) consequent to NAD+ depletion weakens antioxidant defenses and mitochondrial detoxification, reinforcing the MiDAS-prone state and feeding [[Inflammaging]].

## Therapeutic Implications

- **[[NAD+]] repletion** ([[Nicotinamide Riboside|NR]], [[NMN]]) restores the NAD+/NADH balance and sirtuin activity, opposing the metabolic trigger of MiDAS.
- **Mitochondrial quality control** enhancement ([[Mitophagy]] inducers such as [[Urolithin A]], mitochondrial biogenesis via [[PGC-1α]]) reduces the initiating mitochondrial dysfunction.
- Interventions are context-dependent: restoring NAD+ has been shown to delay stem cell senescence and extend lifespan in model organisms (Zhang et al., 2016).

## Documents

- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging (Bautista 2026)]]
  - Frames NAD+ depletion as a metabolic bottleneck that enforces MiDAS via AMPK–p53 signaling and couples it to a distinct secretory phenotype with an attenuated IL-1–dependent inflammatory arm of the SASP; discusses MiDAS in the context of stem cell aging.
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Review 2024]]
  - Identifies MiDAS among senescence states with p53/p16-dependent, non-classical secretory profiles and emphasizes that mitochondrial perturbation produces unique SASP outputs relative to NF-κB-driven senescence.

## Connections

- [[Cellular Senescence]] — MiDAS is a distinct form of cellular senescence triggered by mitochondrial dysfunction.
- [[NAD+]] — NAD+/NADH ratio decline is the central metabolic trigger of MiDAS.
- [[AMPK]] — Low-energy sensor that relays NAD+ collapse to p53 stabilization.
- [[p53]] — Core mediator of MiDAS arrest and its distinct SASP.
- [[p21 CIP1]] — p21 mediates the arrest downstream of p53 in MiDAS.
- [[SASP]] — MiDAS exhibits a p53-dependent SASP with an attenuated IL-1 arm.
- [[Senescence-associated mitochondrial dysfunction]] — The mitochondrial deterioration inside senescent cells; reciprocal to MiDAS.
- [[Inflammaging]] — MiDAS contributes to chronic low-grade inflammation of aging.
- [[Mitochondrial DNA]] — mtDNA release sustains pro-inflammatory signaling in established senescence.
- [[cGAS-STING Pathway]] — Cytosolic mtDNA from damaged mitochondria amplifies SASP.
- [[Reactive Oxygen Species]] — Can accompany MiDAS but is not the obligatory trigger.
- [[Mitochondria]] — The organelle whose dysfunction initiates the program.
- [[Mitochondrial Dysfunction]] — The upstream initiating event.
- [[CD38]] / [[PARP1]] / [[SARM1]] — NAD+-consuming enzymes whose age-related activity depletes NAD+ and enforces MiDAS.
- [[Nicotinamide Riboside]] / [[NMN]] — NAD+ precursors that oppose the MiDAS trigger.

## Linking Summary

- New links added: [[Cellular Senescence]], [[NAD+]], [[AMPK]], [[p53]], [[p21 CIP1]], [[SASP]], [[Senescence-associated mitochondrial dysfunction]], [[Inflammaging]], [[Mitochondrial DNA]], [[cGAS-STING Pathway]], [[Reactive Oxygen Species]], [[Mitochondria]], [[Mitochondrial Dysfunction]], [[CD38]], [[PARP1]], [[SARM1]], [[Nicotinamide Riboside]], [[NMN]], [[IL-6]], [[IL-1β]], [[Stress-Induced Senescence]], [[Replicative Senescence]], [[Stem Cells]], [[SIRT1]], [[SIRT3]], [[Urolithin A]], [[PGC-1α]], [[Cell Cycle]], [[Rotenone]], [[Minority MOMP]]
- Suggested new entity notes to create: [[Heteroplasmy]], [[Mitochondrial Translation]]
- Strong connections to strengthen: [[Mitochondrial Dysfunction-Associated Senescence]] ↔ [[NAD+]], [[Mitochondrial Dysfunction-Associated Senescence]] ↔ [[Senescence-associated mitochondrial dysfunction]], [[Mitochondrial Dysfunction-Associated Senescence]] ↔ [[Inflammaging]]
