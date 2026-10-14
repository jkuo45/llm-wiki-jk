---
title: Mon1-Ccz1
description: A heterodimeric Rab7 guanine nucleotide exchange factor that executes the Rab5-to-Rab7 switch at endosomes and autophagosomes, recruiting Rab7 and driving late-endosome and lysosome identity.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - autophagy
aliases: [MON1-CCZ1 complex, MON1, CCZ1, CCZ1B, KB1]
---

# Mon1-Ccz1

**Mon1–Ccz1** is a conserved heterodimeric **guanine nucleotide exchange factor (GEF)** for the late-endosomal GTPase [[Rab7]] (yeast homolog **Ypt7**). It is the enzyme that decides *when* and *where* a membrane stops being an early endosome and becomes a late endosome: by loading GDP-loaded Rab7 with GTP, it creates the Rab7-positive membrane domain that recruits HOPS, RILP, and motor adaptors and thereby commits the compartment to the lysosomal route.

## Architecture

The complex is a head-to-tail heterodimer. **MON1** is a long α-helical protein with an N-terminal lipid-binding domain and a C-terminal head that provides most of the Rab7-binding surface. **CCZ1** is a smaller protein that stabilises MON1 and contributes the Rab7 contact surface. In metazoans CCZ1 has two paralogues, **CCZ1A** and **CCZ1B**, with partially redundant function; in yeast there is a single *ccz1* gene. The complex also has to be activated by phosphorylation — in yeast, Ccz1 phosphorylation by casein kinase-related kinases is required for efficient Rab7 activation, and in mammalian cells the analogous regulatory phosphorylation is less completely mapped.

The closest functional relatives are **TRAPPIII** and **Mon1–Ccz1**'s own paralogous "CORVET" partner, the **MACH–Om1** complex in yeast, which acts on Rab5 instead. Mon1–Ccz1 and MACH–Om1 are structurally related but functionally specialised for different Rab substrates, which is a nice illustration of how parallel tethering complexes evolve.

> [!info] Mechanism
> A GEF accelerates the exchange of GDP for GTP on a Rab. Because Rab-GTP is the form that recruits effectors — tethering complexes, motor adaptors, lipid-modifying enzymes — the GEF is the switch that turns on a whole downstream trafficking programme. Mon1–Ccz1's job is specifically to load GTP onto Rab7.

## The Rab5-to-Rab7 conversion

Endosomal maturation is the textbook function of Mon1–Ccz1, and the switch is spatially and temporally constrained rather than diffuse:

1. Early endosomes are Rab5-positive, with [[Rab5]] recruiting [[Vps34]] to generate [[PtdIns3P]] and driving homotypic fusion.
2. Rab5-positive endosomes also recruit **Mon1–Ccz1** (and the SAND-1/MON1 pathway in some systems) to their membrane.
3. Mon1–Ccz1 activates Rab7 **locally**, in a restricted patch on the endosomal membrane.
4. The Rab7 patch grows; RILP is recruited and binds both Rab7 and the dynein motor via myosin-Va, engaging the late-endosome in retrograde movement.
5. As Rab7 domain expands, Rab5 is inactivated and removed from the membrane. The conversion is spatially segregated — this is the mechanism that keeps the two Rab domains from mixing on the same membrane.

**Experimental evidence for the switch.** Deleting MON1 in yeast produces giant, enlarged, exclusively Rab5-positive endosomes with no Rab7 anywhere; the compartments are stuck at the maturation stage. The same enlarged Rab5-positive/Rab7-negative phenotype is seen in mammalian cells expressing dominant-negative or depleted Mon1–Ccz1, and in some mammalian disease models. This is exactly the lesion exploited by [[Legionella]] pneumophila, which blocks the Rab5→Rab7 conversion to retain a vacuolar niche in which it can replicate rather than being delivered to lysosomes.

## Role in autophagy

Mon1–Ccz1 is also required for autophagosome maturation, and this is where the vault's autophagy notes connect most directly.

> [!info] Autophagy mechanism
> The autophagosome matures toward a degradative identity in a stepwise, Rab-driven manner: Rab5 (via ATG12–ATG14/ATG8) to Rab7, then Rab7-dependent recruitment of the PI3P effector [[WIPI2]], and finally autophagosome–lysosome fusion. Mon1–Ccz1 is recruited to autophagosomes through direct interaction with ATG8/LC3, and it is this recruitment — not just endosomal localisation — that positions Rab7 activation on the autophagosome. The sequential RAB1–RAB5–RAB7 cascade is a recognised maturation code: it acts as a "maturation checkpoint" so that the autophagosome is not licensed to fuse with the lysosome until it is properly sealed and cargo-laden.

Loss of Mon1–Ccz1 therefore blocks autophagy **at the maturation step**, producing a phenotype indistinguishable in outline from an autophagosome–lysosome fusion defect: cargo accumulates, LC3 puncta accumulate, and autophagic flux is impaired. The distinction from a lysosomal defect is that the lysosomes themselves are functional.

## Disease relevance

Human genetic data are thinner than the cell biology. CCZ1B has been implicated in ciliogenesis-associated phenotypes and in genome-wide association signals for obesity, and MON1/CCZ1 perturbations have been linked in model systems to ciliary function and lipid metabolism — consistent with the fact that Rab7-dependent trafficking is required for cilium assembly and for the endosomal recycling that feeds it. These are association-level and model-level observations; a firmly established human Mendelian MON1-CCZ1 disease is not something I can verify, and I would not claim one.

## Documents

- [[Rab5]]
  - The Rab whose endosomal domain is replaced by Rab7; the vault's Rab5 note states the handoff explicitly and names Mon1–Ccz1 as the GEF that performs it.

## Connections

- [[Rab5]] — The early-endosome Rab whose domain is replaced during maturation; Mon1–Ccz1 is recruited by Rab5-positive endosomes and its activation of Rab7 terminates the Rab5 phase.
- [[Rab7]] — The direct substrate; Mon1–Ccz1 is its principal GEF, and Rab7-GTP is what recruits HOPS, RILP and motors and commits the compartment to the lysosome.
- [[HOPS]] — The Rab7 tethering complex recruited downstream of Mon1–Ccz1; the GEF and the tether are sequential steps in the same maturation programme.
- [[CORVET]] — The Rab5-directed structural paralogue of Mon1–Ccz1; the pair exemplifies how separate tethering complexes are specialised for different Rab substrates.
- [[RILP]] — Rab7 effector that couples the newly Rab7-positive membrane to dynein/myosin-Va for retrograde transport of the maturing endosome.
- [[Vps34]] — Recruited by Rab5 to make PtdIns3P on early endosomes; PI3P signalling is what recruits Mon1–Ccz1, linking lipid signalling to the Rab switch.
- [[PtdIns3P]] — The phosphoinositide that positions Mon1–Ccz1 on the endosomal membrane and thereby makes the Rab conversion spatially restricted.
- [[LC3]] — Direct interaction partner that recruits Mon1–Ccz1 to autophagosomes, making the Rab7-activation step autophagosome-specific rather than purely endosomal.
- [[WIPI2]] — Rab7/PI3P effector acting at the intermediate maturation stage between Rab5 and lysosome fusion.
- [[Autophagy]] — The process whose maturation step depends on Mon1–Ccz1; loss blocks flux at the Rab7 transition, giving an accumulation phenotype resembling a fusion defect.
- [[Legionella]] — Exploits the Rab5→Rab7 block produced by Mon1–Ccz1 loss to avoid lysosomal delivery and replicate in an endosomal vacuole.
- [[Membrane Trafficking]] — The parent process; Mon1–Ccz1 is the specific GEF step within the endosomal maturation module.

## Linking Summary

- New links added: [[Rab7]], [[HOPS]], [[CORVET]], [[RILP]], [[Vps34]], [[PtdIns3P]], [[LC3]], [[WIPI2]], [[Legionella]], [[Autophagy]], [[Membrane Trafficking]].
- Suggested notes to create: [[CCZ1A]], [[CCZ1B]], [[MACH-Om1]], [[TRAPPIII]], [[Rab7 GEF]], [[Endosome maturation]], [[SAND-1]], [[Myosin Va]] — removed as already existing: Autophagosome, LC3
- Strong connections to strengthen: [[Mon1-Ccz1]] ↔ [[Rab7]] (GEF-substrate), [[Mon1-Ccz1]] ↔ [[Rab5]] (the switch), [[Mon1-Ccz1]] ↔ [[HOPS]] ↔ [[RILP]] (sequential maturation steps), [[Mon1-Ccz1]] ↔ [[LC3]] ↔ [[Autophagy]].
