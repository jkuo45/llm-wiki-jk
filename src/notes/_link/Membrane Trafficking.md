---
title: Membrane Trafficking
description: The directed, coat- and motor-protein-dependent transport of lipids, proteins and cargo between membrane compartments and to the plasma membrane, organised by Rab GTPases, tethering complexes and SNARE-mediated fusion.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - cell-biology
aliases: [vesicle trafficking, vesicular transport, intracellular transport]
---

# Membrane Trafficking

**Membrane trafficking** is the process by which cells move lipids, soluble proteins and transmembrane cargo between membrane-bound compartments and to/from the cell surface. It is not a single pathway but a family of related ones — the secretory route, endocytic uptake, endosomal maturation, lysosomal delivery, and recycling — all of which depend on the same four-part logic: **cargo selection, budding, directed transport, and fusion**.

## The core cycle

**Cargo selection and budding.** Cytosolic coat adaptors read sorting signals on transmembrane receptors or lumenal cargo receptors. In the ER-to-Golgi direction, [[COPII]] coat assembly at ER exit sites packages secretory cargo. In the Golgi-to-plasma-membrane and intra-Golgi direction, [[COPI]] does the same in reverse, recruited by Arf-family GTPases. At the plasma membrane, [[Clathrin]] with its adaptors (AP-1, AP-2) performs receptor-mediated endocytosis, and coat assembly is followed by [[Dynamin]]-mediated scission. Coat components are shed after budding and recycled.

> [!info] Mechanism
> Coat assembly curves the membrane, scission releases a free vesicle, and the coat is removed so that the vesicle can then dock. The coat's job is cargo selection and shape change, not propulsion.

**Directed transport.** Vesicles are moved along [[Microtubule]]s and [[Actin]] filaments by motor proteins — [[Kinesin]] anterogradely, [[Dynein]] retrogradely toward minus ends, and [[Myosin]] along actin near the cortex. [[Miro]] and related adaptors link motors to vesicles. Long-range transport is microtubule-based and fast; short-range cortical delivery is actin/myosin-based.

**Docking and tethering.** Organelles are marked by their own [[Rab]] GTPases — [[Rab5]] on early endosomes, [[Rab7]] on late endosomes and lysosomes. Rab-GTP-bound effectors include long multisubunit **tethering complexes** such as [[CORVET]] and [[HOPS]], whose job is to grab a matching vesicle and hold it close to the target membrane so that fusion competence can be achieved.

**Fusion.** Tethering brings v-SNAREs ([[VAMP8]], syntaxin, [[STX17]]) and t-SNAREs together; zippering of the four-helix bundles collapses the gap and opens a fusion pore. [[Calcium Ions|calcium]] entry, sensed by synaptotagmin-like proteins, is the main trigger for regulated exocytosis; the 2013 Nobel Prize in Physiology or Medicine recognised this vesicular exocytosis machinery.

## Endosomal maturation as the paradigm

The best-characterised version of the whole cycle is endosome maturation. [[Rab5]] recruits [[Vps34]], generating [[PtdIns3P]] and driving early-endosome homotypic fusion. Rab5 then hands off to [[Rab7]] via the [[Mon1-Ccz1]] GEF — a spatial and temporal switch that converts an early endosome into a late endosome. Failure to complete this switch leaves enlarged, Rab5-positive, Rab7-negative endosomes, exactly what is seen in [[Legionella]] infection and in Rab7 loss-of-function models.

> [!info] Mechanism
> Because tethering and fusion are specified by which Rab is active on each membrane, the Rab switch *is* the compartment-identity decision. Cargo sorting, not bulk membrane mixing, is what determines whether a vesicle goes to the lysosome or back to the surface.

## Why it matters for stress and disease

Trafficking is not merely logistics. Disrupted trafficking sits upstream of several disease processes:

- **Neurodegeneration** — defects in endolysosomal trafficking, including Rab and tethering components, impair autophagic flux and aggregate clearance in [[Parkinson's Disease]] and [[Alzheimer's Disease|ALzheimer's disease]].
- **Autophagy** — autophagosome–lysosome fusion requires Rab7, HOPS, and [[Rubicon]]; blockade of this step produces cargo accumulation without increased autophagosome formation.
- **Lysosomal storage** — [[Lysosomal Storage Diseases]] and [[Niemann-Pick disease|Niemann–Pick disease]] are, mechanistically, trafficking and sorting defects as much as catabolic enzyme defects.
- **Immune signalling and pathogen entry** — [[Toll-like Receptor]] and [[NLRP3]] signalling depend on endosomal trafficking of signalling complexes, and pathogens including [[Legionella]] hijack the endosomal maturation machinery directly.
- **Cancers and chemoresistance** — ABC transporters such as [[P-glycoprotein]] traffic from intracellular reservoirs to the plasma membrane, which is a trafficking event; and loss of apical polarity in carcinomas misroutes surface receptors.
- **Aging** — trafficking efficiency declines with age, and the pool of "responsive" endosomes shrinks, contributing to reduced clearance of aggregated protein.

The discovery of the coat/tether/SNARE logic by Rothman, Schekman and Südhof is the framework underlying essentially all of this.

## Documents

- [[BIG1]]
  - The vault's example of trafficking control: BIG1 (GBF1) is a Arf1 GEF that drives COPI coat recruitment at the Golgi, i.e. it sets the rate of retrograde Golgi-to-ER and intra-Golgi flux.

## Connections

- [[Vesicle Transport]] — The vault's existing node for the vesicle movement steps; this note covers the coat/tether/SNARE logic that underlies them.
- [[Rab5]] — Early-endosome identity marker; its conversion to Rab7 via Mon1-Ccz1 defines the maturation switch.
- [[Rab7]] — Late-endosome/lysosome identity; pairs with HOPS and RILP to drive fusion and motor recruitment.
- [[Mon1-Ccz1]] — The GEF that executes the Rab5-to-Rab7 handoff at endosomes and autophagosomes.
- [[Endocytosis]] — One arm of the trafficking network; produces the early endosomes that mature through the Rab switch.
- [[Phagosome]] — Forms by fusion of early-endosome-derived membranes, so phagosome maturation is Rab-regulated endosomal maturation.
- [[SNARE proteins]] — The final fusion executors; zippering is what makes the compartment exchange content.
- [[Endoplasmic Reticulum]] — Origin of the COPII secretory route and the site of protein folding quality control.
- [[Autophagy]] — Depends on lysosomal delivery of cargo, which requires the Rab7/HOPS fusion machinery.
- [[V-ATPase]] — Acidifies lysosomal and endosomal lumen; vesicle delivery and lumenal acidification are functionally coupled.
- [[Rab8]] — Exocytic Rab at the plasma membrane, the counterpart to Rab5 in the recycling and exocytosis direction.
- [[VAMP8]] — A v-SNARE with a well-characterised role in autophagosome–lysosome fusion.

## Linking Summary

- New links added: [[COPII]], [[COPI]], [[Clathrin]], [[Dynamin]], [[Dynein]], [[Kinesin]], [[Myosin]], [[Miro]], [[CORVET]], [[HOPS]], [[STX17]], [[VAMP8]], [[Vps34]], [[PtdIns3P]], [[Rubicon]], [[RILP]], [[Rab8]], [[Legionella]], [[Lysosomal Storage Diseases]], [[Toll-like Receptor]], [[P-glycoprotein]].
- Suggested notes to create: [[Niemann-Pick disease]], [[Calcium Ions]], [[Arf1]], [[Rab GTPase]], [[Caveolin]], [[Endosome]], [[AP2 complex]], [[Adaptor]], [[Secretory pathway]], [[Golgi apparatus]], [[TGN]], [[SNAP receptor]], [[Caveolin]].
- Strong connections to strengthen: [[Mon1-Ccz1]] ↔ [[Rab7]], [[Rab5]] ↔ [[Rab7]], [[Vesicle Transport]] ↔ [[Membrane Trafficking]], [[Autophagy]] ↔ [[Rab7]] ↔ [[Rubicon]].
