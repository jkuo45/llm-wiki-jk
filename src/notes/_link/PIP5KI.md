---
title: PIP5KI
description: PIP5KI refers to the type I phosphatidylinositol 4-phosphate 5-kinases (PIP5K1A, PIP5K1B, PIP5K1C) that phosphorylate PtdIns4P to PtdIns(4,5)P2; a distinct type II family (PIP4K2A-C, formerly PIP5K2) makes PI5P instead, and the two are being pursued as cancer targets.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - kinase
  - lipid-metabolism
  - signaling
aliases: [PIP5KI, Type I PIP5K, PIP5K1, Phosphatidylinositol 4-phosphate 5-kinase type 1, PI4P 5-kinase]
---

# PIP5KI

> [!warning] Nomenclature caveat
> "PIP5KI" is a family-level label, not a single protein, and it is easy to confuse with the type II family. **Type I PIP5Ks (PIP5K1A, PIP5K1B, PIP5K1C)** phosphorylate PI(4)P at the 5-position to make PI(4,5)P2 — the same lipid [[Phospholipase C]] consumes. **Type II PIP5Ks (PIP4K2A, PIP4K2B, PIP4K2C; formerly PIP5K2A-C)** phosphorylate PI at the 4-position to make PI(5)P, a different substrate with a different downstream reader. The name "PIP5K" persisted for both families after the substrate distinction was clarified, which is a persistent source of error in the literature. Where this vault means PI(4,5)P2 synthesis — as in [[PtdIns(4,5)P2]] and autophagic lysosome reformation — it means **type I**.

## Structure and Catalysis

Both families share a compact bilobal architecture with an N-terminal kinase domain and a disordered C-terminal tail. Type I PIP5Ks operate as **obligate dimers with intermolecular substrate channeling**: the C-terminal tail of one protomer reaches across and presents PI(4)P to the active site of its partner, so a dimer is a functional unit and monomerisation kills activity. All three PIP5K1 isoforms require PI(4)P in a membrane — they are membrane-anchored lipid kinases, not soluble ones, and they act locally rather than on bulk pools.

The enzymes are unusually sensitive to local membrane curvature and lipid composition, and they concentrate at membrane domains rather than distributing evenly. This is why a modest change in PIP5K abundance can produce a large change in local PI(4,5)P2 concentration and a much larger change in signalling output.

## Autophagic Lysosome Reformation

PIP5K1B and PIP5K1C are required for **autophagic lysosome reformation (ALR)** — the terminal step of [[Autophagy]] in which proto-lysosomal tubules bud from fully formed autolysosomes to regenerate a functional lysosomal pool (Yu et al., 2010, *Nat Cell Biol*; Chen et al., 2012, *Nat Cell Biol*). Localised PI(4,5)P2 on the autolysosome surface recruits [[Clathrin]] and the adaptor complex [[AP2]], which drive membrane invagination and scission of the tubules. Kinesin-1 ([[KIF5B]]) extends the nascent tubule.

> [!info] Why this matters for the vault's autophagy interest
> After a long starvation period, autolysosomes physically lose the capacity to degrade cargo. If they are not reformed, lysosomal depletion stalls autophagic flux even though initiation and fusion were normal. PIP5K1 loss therefore produces a *stalled but not obstructed* autophagosome/lysosome system — a distinctive signature distinct from the accumulation seen in lysosomal storage disease or in impaired fusion.

## Disease Relevance

> [!warning] Clinical caveat
> PIP5K family oncology is entirely preclinical. The type II (PIP4K2) arm is the more active drug target, and the naming confusion above means that claims of "PIP5K" inhibition in the literature may refer to either substrate.

- **Type II / PIP4K2A.** Pharmacological inhibition of PI5P 4-kinase α/β depletes PI5P, disrupts energy metabolism, and selectively kills p53-null tumour cells.
- **PIP4K2C.** Elevated in colorectal, breast, and other carcinomas; degrader and inhibitor programs (including the first-in-class degrader LRK-4189) target it in microsatellite-stable colorectal cancer.
- **Type I / PIP5K1A.** Required for invadopodia formation and survival in metastatic breast cancer models, which is the main rationale for type I kinases as anti-metastatic targets.
- **Infectious disease.** Type II PIP5K2C is a reported host factor for SARS-CoV-2 and MERS-CoV replication, and PIP4K2C inhibition restores autophagic flux in models of coronavirus infection.

## Documents

- [[PtdIns(4,5)P2]] — the substrate the type I enzymes produce and the hub lipid this family is defined by; this note is the kinase side of that hub's metabolism.

## Connections

- [[PtdIns(4,5)P2]] — PIP5KI is the terminal, rate-limiting step in the PI(4)P → PI(4,5)P2 conversion. The steepness of the local PI(4,5)P2 gradient at membranes is set by how much PIP5KI activity there is versus how fast [[Phospholipase C]] and phosphatases consume it.
- [[Phospholipase C]] — PLC is the main consumer of type-I-made PI(4,5)P2, cleaving it into IP3 and DAG. PIP5KI and PLC sit on opposite sides of the same lipid flux and set the shape of [[Calcium Signaling]] and [[PKC]] activation.
- [[Autophagic Lysosome Reformation]] — PIP5K1B/1C are required for ALR by generating the local PI(4,5)P2 that recruits clathrin and AP2 to the budding autolysosome. This is the most mechanistically specific role of the family in this vault.
- [[Autophagy]] — by controlling lysosome reformation, PIP5KI sets the ceiling on how much degradative capacity a cell can sustain over a long starvation interval.
- [[Cholesterol]] — PI(4,5)P2 is a key regulatory lipid for cholesterol homeostasis at the ER, and the OSBP-family sterol transfer proteins (see [[ORP1L]]) are recruited to PI(4,5)P2-rich ER membrane. PIP5KI activity therefore indirectly gates sterol transfer.
- [[KIF5B]] — kinesin-1 is the motor that extends the proto-lysosomal tubules whose scission PIP5KI-dependent PI(4,5)P2 enables; loss of KIF5B phenocopies loss of PIP5K1B in ALR assays.
- [[Clathrin]] — the canonical clathrin-coated-pit machinery, repurposed at the autolysosome surface for tubule scission in ALR.
- [[AP2]] — the adaptor complex that links clathrin coat assembly to the PI(4,5)P2-rich membrane curvature PIP5KI creates.

## Linking Summary

- New links added: [[PtdIns(4,5)P2]], [[Phospholipase C]], [[Autophagic Lysosome Reformation]], [[Autophagy]], [[Cholesterol]], [[ORP1L]], [[KIF5B]], [[Clathrin]], [[AP2]], [[Calcium Signaling]], [[PKC]]
- Suggested notes to create: [[Clathrin]], [[PIP4K2C]], [[PtdIns4P]], [[PI5P]], [[Phospholipid Kinase]], [[Clathrin-mediated Endocytosis]], [[Invadopodia]]
- Strong connections to strengthen: [[PIP5KI]] ↔ [[Autophagic Lysosome Reformation]] (the ALR note should name the specific PIP5K1 isoforms, not just "PIP5K"), [[PIP5KI]] ↔ [[PtdIns(4,5)P2]]
