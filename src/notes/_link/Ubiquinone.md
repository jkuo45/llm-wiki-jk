---
title: Ubiquinone
description: Ubiquinone (coenzyme Q10, CoQ10) is the oxidized form of a lipophilic electron carrier; in ferroptosis defense it is the FSP1 substrate reduced to ubiquinol, a membrane radical-trapping antioxidant, and a non-sterol product of the mevalonate pathway.
created: 2026-07-04
updated: 2026-08-24
tags:
  - biological-molecule
  - lipid-soluble-antioxidant
  - ferroptosis
  - electron-carrier
aliases: [Coenzyme Q10, CoQ10, ubiquinone-10]
---

# Ubiquinone

**Ubiquinone** (coenzyme Q10, **CoQ10**) is the **oxidized** form of a lipophilic benzoquinone electron carrier present in virtually all cellular membranes. Best known for shuttling electrons in the mitochondrial **electron transport chain**, it also serves as the **substrate of FSP1** in the plasma-membrane ferroptosis-defense system: FSP1 reduces ubiquinone to **ubiquinol (CoQ10H₂)**, the reduced radical-trapping antioxidant that halts phospholipid peroxidation.

## Biochemistry

Ubiquinone consists of a redox-active benzoquinone head group attached to a polyisoprenoid side chain (10 units in humans, hence CoQ10). It cycles reversibly between three redox states:

- **Ubiquinone (oxidized, CoQ10)**
- **Ubisemiquinone (one-electron radical, CoQ10•⁻)**
- **Ubiquinol (fully reduced, CoQ10H₂)**

This redox flexibility underlies both its role in bioenergetics and its antioxidant activity.

## Role in Ferroptosis Defense (FSP1 axis)

In the **FSP1–CoQ10–NAD(P)H pathway**, ubiquinone is the **direct electron acceptor** for [[FSP1]]:

> **Ubiquinone + NAD(P)H + H⁺ → Ubiquinol + NAD(P)⁺** (catalyzed by FSP1 at the plasma membrane)

The resulting **ubiquinol** donates a hydrogen atom to lipid peroxyl radicals (LOO•) during [[Lipid Peroxidation]], terminating radical-chain propagation and suppressing [[Ferroptosis]]. This makes ubiquinone/ubiquinol the **lipophilic radical-trapping antioxidant** that, together with [[GPX4]] and [[Glutathione]], guards cells against iron-dependent lipid peroxidation. See [[Coenzyme Q10]] for the broader antioxidant and ETC context.

## Mevalonate-Pathway Supply

Ubiquinone is a **non-sterol product of the [[Mevalonate pathway]]**. Because the MVA pathway also governs [[GPX4]] via selenocysteine-tRNA maturation, ubiquinone availability links MVA output to the FSP1 axis: interventions that divert MVA flux away from CoQ10 (e.g., [[Statins]] inhibiting HMG-CoA reductase, or squalene-synthase engagement by FIN56) **deplete ubiquinone and converge on FSP1**, increasing ferroptosis sensitivity. Thus ubiquinone is the molecular hinge on which the MVA pathway meets the FSP1 defense.

> [!info] Reduced vs oxidized terminology
> In this wiki, **Ubiquinone** denotes the oxidized CoQ10 used by FSP1; **ubiquinol** (the reduced form) is described within [[Coenzyme Q10]]. Both names resolve to the same chemical family.

## Physiological & Clinical Relevance

- **Mitochondrial ETC:** Ubiquinone shuttles electrons from Complex I/II to Complex III; its semiquinone intermediate is also a source of mitochondrial ROS when electron leak occurs.
- **Ferroptosis sensitivity:** Cellular ubiquinone levels set the capacity of the FSP1 axis; CoQ10 supplementation can bolster the radical trap.
- **Statin myopathy:** Reduced MVA-derived CoQ10/ubiquinone is a proposed mechanism of statin-associated muscle toxicity.

#

## Documents

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - Synthesis covering ubiquinone as the FSP1 substrate and its MVA-pathway sourcing.

## Connections

  - [[FSP1]]: NAD(P)H-dependent reductase that reduces ubiquinone to ubiquinol at the plasma membrane.
  - [[Coenzyme Q10]]: The same molecule; this note focuses on the oxidized (ubiquinone) form and FSP1 linkage.
  - [[NADPH]]: Electron donor for FSP1-mediated ubiquinone reduction.
  - [[GPX4]]: Parallel, GSH-dependent ferroptosis brake; ubiquinone/ubiquinol is the alternative defense.
  - [[Glutathione]]: Cofactor for GPX4; distinct from the FSP1–ubiquinone axis.
  - [[Mevalonate pathway]]: Biosynthetic source of ubiquinone; loss of output converges on FSP1.
  - [[Lipid Peroxidation]]: Process terminated by ubiquinol-derived radical trapping.
  - [[Ferroptosis]]: Cell death suppressed by the ubiquinone/ubiquinol radical trap.
  - [[Statins]]: Lower ubiquinone via MVA inhibition.

## Linking Summary

- New links added: [[FSP1]], [[Coenzyme Q10]], [[NADPH]], [[GPX4]], [[Glutathione]], [[Mevalonate pathway]], [[Lipid Peroxidation]], [[Ferroptosis]], [[Statins]]
- Suggested new entity notes to create: [[HMG-CoA reductase]] (rate-limiting MVA enzyme controlling ubiquinone supply), [[FIN56]] (squalene-synthase engager depleting ubiquinone)
- Strong connections to strengthen: [[Ubiquinone]] ↔ [[FSP1]], [[Ubiquinone]] ↔ [[Mevalonate pathway]], [[Ubiquinone]] ↔ [[Ferroptosis]]
