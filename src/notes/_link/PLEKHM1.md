---
title: PLEKHM1
description: PLEKHM1 (pleckstrin homology domain-containing family member 1) is a multi-domain autophagosome/endolysosome tethering effector that binds Rab7, the HOPS tethering complex, and LC3/GABARAP via an LIR motif to drive autophagosome-lysosome and endosome-lysosome fusion; biallelic loss causes an osteolysis syndrome.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - autophagy
  - membrane-trafficking
aliases: [PLEKHM1, KIAA0586, Autophagosome-lysosome fusion regulator, SKIP]
---

# PLEKHM1

**PLEKHM1** (pleckstrin homology domain-containing family member 1) is a cytosolic, multi-domain scaffolding protein that acts as a **molecular adaptor between the Rab7 endolysosomal system and the LC3/GABARAP autophagy machinery**. It is one of the best-characterised effectors that couples autophagosome identity to the fusion machinery, and it was the first Rab7 effector shown to engage both.

## Structure and Domains

Human PLEKHM1 is 1056 aa and carries six annotated domains:

- **RUN domain 1** — Rab7-GTP binding; this is the essential Rab7 anchor
- **PH domain 1** — binds anionic phospholipids, contributing to membrane association
- **PH domain 2** — engages the HOPS complex
- **LIR (LC3-interacting region)** — a WxxFF-type motif that binds the LC3/GABARAP lipidation pocket on autophagosomal membranes
- **SH3 domain** — binds dynamin-2, linking PLEKHM1 to the final scission step of late endosomal tubulation
- **RUN domain 2** — engages the small GTPase [[ARL8B]] on lysosomes

The architecture is a **four-way coincidence sensor**: PLEKHM1 tethers only where a Rab7-GTP-bearing membrane, an ARL8B-bearing lysosome, a HOPS complex, and an LC3-decorated membrane are all simultaneously present. This is why it localises so sharply to autophagosome–lysosome contact sites rather than coating either compartment.

> [!info] Mechanism
> McEwan et al. (2015, *EMBO J*) established the core logic: PLEKHM1 is recruited to autophagosomes through its LIR–LC3 interaction, and loss of the LIR abolishes both its autophagosomal localisation and the LC3 lipidation that accompanies fusion. Loss of the RUN1 domain blocks endolysosomal maturation. PLEKHM1 therefore sits on both pathways simultaneously — it is required for autophagosome clearance *and* for growth-factor receptor degradation through the endocytic route (EGFR turnover is impaired in PLEKHM1-deficient cells).

## Physiological Function

In **osteoclasts**, PLEKHM1 is essential for the vesicular trafficking that builds the ruffled border and the secretory lysosomes that resorb bone. Biallelic loss-of-function variants cause **osteolysis with a mild immunodeficient phenotype**, presenting in childhood with progressive bone resorption, short stature, and recurrent infections.

> [!warning] Clinical caveat
> The osteolysis phenotype is the best human evidence for PLEKHM1's non-autophagic role. It is a rare, recessively inherited syndrome with limited case series, so the exact contribution of each domain to bone resorption versus immune dysfunction is inferred largely from mouse models (Plekhm1-null mice) rather than from genotype–phenotype mapping in patients.

## Disease Relevance

- **Osteolysis / skeletal dysplasia.** As above.
- **Neurodegeneration.** Defective autophagosome clearance is a recurring finding in [[Parkinson's Disease]] and [[Alzheimer's Disease]] models, and PLEKHM1 sits in the same tethering step as disease-associated genes such as [[C9orf72]] and [[VCP]]. Whether PLEKHM1 itself is genetically implicated in human neurodegeneration is not established.
- **Cancer.** PLEKHM1 supports tumour cell survival under nutrient stress by maintaining autophagic flux, which has made it — and its Rab7/HOPS partners — indirect therapeutic targets. No PLEKHM1-directed agent is in clinical use.

## Documents

- [[GABARAP]] — GABARAP-family proteins (GABARAP, GABARAPL1, [[LC3]]/MAP1LC3B) are the Atg8 proteins whose lipidation PLEKHM1's LIR motif binds; the interaction is the physical basis of PLEKHM1's autophagosome specificity.
- [[LAMP1]] — LAMP1 marks the lysosomal membrane that PLEKHM1 tethers autophagosomes to; co-localisation of PLEKHM1 with LAMP1 at contact sites is the standard maturation readout, and HOPS/ARL8B-mediated fusion delivers LAMP1 to the fused compartment.

## Connections

- [[ORP1L]] — ORP1L is the upstream Rab7 effector that forms ER contact sites and recruits PLEKHM1 plus HOPS onto autophagosomes. This makes PLEKHM1's recruitment sterol-dependent, a link that is not obvious from PLEKHM1's own structure.
- [[Rab7]] — PLEKHM1's RUN1 domain binds Rab7-GTP, placing it on both late endosomes and autophagosomes. Rab7 is the shared membrane identity tag that lets PLEKHM1 find the right compartments.
- [[LAMP1]] — LAMP1 is the lysosomal membrane marker whose delivery to autophagosomes requires PLEKHM1/HOPS-mediated fusion. Depletion of LAMP1-positive lysosomes, or loss of PLEKHM1, both produce an accumulation of non-mature, fusion-incompetent autophagosomes.
- [[GABARAP]] — PLEKHM1's LIR motif binds GABARAP-family lipidated membrane proteins directly. This is unusual among Rab7 effectors and is what allows PLEKHM1 to convert a Rab7-positive autophagosome into a fusion-competent one.
- [[Autophagosome-lysosome fusion]] — PLEKHM1 is the tethering layer of this event; HOPS and ARL8B supply the downstream SNARE machinery it licenses.
- [[Autophagy]] — PLEKHM1 acts at the terminal, degradative step rather than at initiation, so its loss produces autophagosome accumulation with *high*, not low, apparent autophagic "activity" — a common interpretative trap in flux assays.
- [[Osteoclast]] — osteoclast ruffled-border formation and lysosome exocytosis depend on PLEKHM1, which is the defining human disease phenotype of the gene.
- [[Macrophage]] — PLEKHM1-dependent endolysosomal maturation of growth factor receptors is prominent in macrophages and other professional phagocytes, where cargo load is high.

## Linking Summary

- New links added: [[Rab7]], [[LC3]], [[Parkinson's Disease]], [[Alzheimer's Disease]], [[C9orf72]], [[VCP]], [[Autophagosome-lysosome fusion]], [[Autophagy]], [[Osteoclast]], [[Macrophage]], [[ORP1L]], [[LAMP1]], [[GABARAP]]
- Suggested notes to create: [[HOPS complex]], [[ARL8B]], [[Dynamin-2]], [[Osteolysis]] — removed as already existing: Lysosome, Vesicle Transport
- Strong connections to strengthen: [[PLEKHM1]] ↔ [[Autophagosome-lysosome fusion]] (the two notes should state the same tether-then-fuse ordering), [[PLEKHM1]] ↔ [[Rab7]]
