---
title: Phosphatidylserine
description: Phosphatidylserine is an anionic aminophospholipid confined to the inner leaflet of the plasma membrane in healthy cells; its exposure on the outer leaflet is a universal "eat-me" signal that drives efferocytosis, and it is also the required negative charge for membrane curvature and for Ca2+-dependent clotting complex assembly.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - lipid
  - cell-membrane
  - apoptosis
aliases: [Phosphatidylserine, PS, PtdSer, PtdSer, 1,2-Diacyl-sn-glycero-3-phospho-L-serine]
---

# Phosphatidylserine

**Phosphatidylserine** (PS; PtdSer) is an anionic aminophospholipid — serine head group on a diacylglycerol backbone, typically with a saturated sn-1 chain and an unsaturated sn-2 chain. Humans synthesise it almost entirely in the **endoplasmic reticulum** (via the CDP-choline and CDP-ethanolamine pathways, PS synthase in the ER membrane) and it is trafficked to and maintained in the inner leaflet of the plasma membrane. On the inner leaflet it is highly concentrated because it carries a −1 charge and is therefore energetically disfavoured from the outer leaflet, which is hydrophobic.

## Asymmetric Distribution and Its Loss

The asymmetry is actively enforced: **ATP11C** and ATP11B flippases use ATP to move PS from the outer to the inner leaflet, while the Ca²⁺-activated scramblase **Xkr8** does the reverse. In healthy cells flippase activity dominates, so the outer leaflet is PS-poor.

> [!warning] Clinical caveat
> This asymmetry is a fragile, actively maintained gradient, not a thermodynamic default. Any cell that loses flippase activity or gains scramblase activity becomes a phagocytic target — which is why PS exposure is used diagnostically (Annexin V staining) and prognostically, and why extracellular vesicles that carry externalised PS are rapidly cleared before they can deliver a useful payload.

During [[Apoptosis]] the enzyme is dismantled in a specific order: **caspases cleave ATP11C** (disabling the flippase) and **caspase-activated Xkr8 (and TMEM16F)** is activated, together producing rapid, irreversible, cell-wide PS exposure. In necrosis the exposure is different — patchy, and driven by membrane failure rather than enzymatic control — which is why PS is a far more specific marker of apoptosis than of necrosis.

## The "Eat-Me" Signal

Surface PS is the best-characterised eat-me signal in the mammalian immune system (Birge et al., 2016). It is detected directly by a family of receptors:

- **TIM-4** on macrophages and dendritic cells — binds PS without triggering any signalling of its own; it is a tether, and the actual engulfment signal comes from integrins in the same particle
- **BAI1** and **MerTK**, which signal through [[GAS6]]/[[MerTK]] and ELMO/DOCK180/Rac
- **Stabilin-2** and **MFG-E8**, which bridge PS to integrins αvβ3/αvβ5
- **Annexin V** — not a receptor, but the standard laboratory probe; fluorescently labelled Annexin V binds PS with high, Ca²⁺-dependent affinity, which is what makes flow-cytometric apoptosis detection work at all

Beyond engulfment, PS carries chemokines on the apoptotic-cell surface, where they form "find-me" gradients that recruit [[Monocytes]] and neutrophils to sites of cell death.

> [!info] Requirement for engulfment, not just a trigger
> PS exposure is frequently described as permissive rather than instructive. The important mechanistic point is that efferocytosis is an *active, energetically expensive* process: the phagocyte must generate membrane and engage Rac-driven actin remodelling to internalise the corpse. PS recognition supplies the specific address label, but the engulfment machinery downstream must be intact for clearance. In macrophages that have lost clearance capacity, PS-positive corpses accumulate rather than being removed.

## Beyond Apoptosis: Coagulation, Membrane Shape, and Myofibrils

> [!warning] Under-documented but consequential
> PS is a required cofactor for the **tenase complex** — the assembly of [[Factor XIIIa]]-activated factor Xa, [[Prothrombin]], and phospholipid into the prothrombinase complex on a membrane surface, and the function of **phospholip scramblase (PLSCR1)**. This is why PS exposure on activated platelets is functionally meaningful and why plasma PS levels track coagulation activity. Because a small amount of membrane PS is enormously more effective than soluble lipid, the anionic surface requirement is a genuine switch, not a rate adjustment.

- **Membrane curvature.** PS's small, highly negative, strongly hydrated head group is preferred at bilaterally-curved membranes and is the reason PS concentrates in the inner leaflet at all. Its physical behaviour makes it a contributor to, not merely a passenger of, membrane shape.
- **Skeletal muscle.** Sarcolemmal PS is concentrated in the transverse tubular system and is essential for the membrane interactions of the dystrophin–glycoprotein complex; loss of PS localisation is a reported early feature of several muscular dystrophies.
- **Membranous organelles.** PS is enriched in the inner mitochondrial membrane leaflet-facing compartment, and mitochondrial PS has its own synthesising and remodelling enzymes distinct from the ER pool. It functions in [[Apoptosis]] signalling as part of the mitochondrial outer membrane permeabilisation surface.

## Documents

- [[Annexin V]] — the vault's Annexin V note establishes PS as the ligand; this note supplies the biochemistry of the ligand and the scramblase/flippase machinery behind the signal.
- [[RAGE]] — the vault's RAGE note lists PS among RAGE's ligands. This is a reported but relatively minor and less well-characterised ligand class compared with [[Advanced Glycation End Products|AGEs]] and [[HMGB1]]; the efferocytosis literature is the far better-sourced context for PS biology.

## Connections

- [[Apoptosis]] — PS exposure is the canonical, caspase-controlled surface change of apoptosis, and it is what makes the dying cell findable. In any experiment claiming to show apoptosis, PS externalisation is the assay that grounds the claim.
- [[Annexin V]] — Annexin V is the practical probe for PS exposure, and PS is why Annexin V staining works. The pairing is the basis of essentially all flow-cytometric and histological apoptosis detection.
- [[Annexin A1]] — annexin A1 is an annexin that binds PS preferentially at low pH, which is exactly the condition inside a phagolysosome; it forms part of the machinery that promotes phagosome maturation and clearance after the corpse has been engulfed.
- [[Efferocytosis]] — the process PS is best known for. Distinguish it from [[Necrosis]] in which exposure is patchy and follows membrane failure rather than enzymatic control.
- [[RAGE]] — RAGE is reported to bind PS, adding PS to its already broad DAMP ligand repertoire. This remains a lesser-evidenced ligand relationship than RAGE–AGE or RAGE–HMGB1.
- [[Prothrombin]] — PS-rich platelet membranes assemble the prothrombinase/tenase complex that generates thrombin; this is the physiological payoff of PS anionic charge that is independent of any cell-death context.
- [[Dystrophin]] — sarcolemmal PS in the T-tubule system is required for the dystrophin-associated glycoprotein complex to function, which is one of the non-mechanical contributions of this lipid to muscle physiology.
- [[Monocytes]] — PS-bound chemokines on apoptotic corpses form "find-me" gradients that recruit monocytes and neutrophils, so PS functions as more than an eat-me marker.
- [[Apoptotic Bodies]] — the membrane-bound fragments shed during apoptosis retain exposed PS and are themselves an important clearance route for the eat-me signal.

## Linking Summary

- New links added: [[Apoptosis]], [[Annexin V]], [[Annexin A1]], [[RAGE]], [[Prothrombin]], [[Dystrophin]], [[Monocytes]], [[Apoptotic Bodies]], [[Factor XIIIa]]
- Suggested notes to create: [[Efferocytosis]], [[Xkr8]], [[ATP11C]], [[Phospholipid Asymmetry]], [[TIM-4]], [[GAS6]], [[MerTK]], [[MFG-E8]], [[BAI1]], [[Aminophospholipid]], [[Platelet Activation]] — removed as already existing: Scramblase
- Strong connections to strengthen: [[Phosphatidylserine]] ↔ [[Apoptosis]] (caspase→Xkr8/ATP11C ordering should be stated in both), [[Phosphatidylserine]] ↔ [[Annexin V]]
