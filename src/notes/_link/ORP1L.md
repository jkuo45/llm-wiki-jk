---
title: ORP1L
description: Oxysterol-binding protein-related protein 1L (ORP1L, gene OSBPL1) is a Rab7 effector and sterol-sensing lipid transfer protein that couples cholesterol levels in late endosomes and autophagosomes to the formation of ER membrane contact sites, thereby positioning autophagosomes for lysosomal fusion.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - autophagy
  - lipid-metabolism
  - membrane-trafficking
aliases: [OSBPL1, Oxysterol-binding protein-related protein 1L, ORP-1, Oxysterol-binding protein 1]
---

# ORP1L

**ORP1L** (oxysterol-binding protein-related protein 1L; gene *OSBPL1*, mouse *Osbpl1*) is a ~890 aa member of the OSBP-related protein (ORP) family of sterol transfer proteins, a relative of the [[Oxysterols|oxysterol]]-handling OSBP. It is the longest of the mammalian ORPs, with an N-terminal **oxysterol-binding domain (ORD)** that acts as a reversible cholesterol sensor and a C-terminal **homodimerisation domain** that drives its dimerisation. Human *OSBPL1* variants are strongly associated with cholesterol gallstone disease and with a specific form of autosomal dominant nephropathy.

## Sterol Sensing and Lipid Transfer

The ORD domain is unusually selective for cholesterol itself, rather than for oxysterols, and binding is non-catalytic: cholesterol occupies the hydrophobic pocket and locks the domain in a closed conformation. In the cholesterol-bound state ORP1L can engage the ER membrane protein **VAP-A/B** through its C-terminal two-helix motif, forming ER–late-endosome (LE) membrane contact sites. The N-terminal PH domain, which binds PI(4)P on endosomal membranes, anchors the complex in the correct orientation so that cholesterol can be transferred downhill from the cholesterol-rich late endosome back to the ER.

> [!info] Mechanism
> ORP1L is a **gradient sensor, not a pump**. It reports how much cholesterol the compartment holds by determining whether a contact site with the ER is permitted. Under low-cholesterol conditions the ORD pocket is open and VAP-A contacts form, letting cholesterol flow to the ER; when cholesterol is abundant the pocket closes, contacts dissolve, and cholesterol is retained.

*OSBPL1* knockdown blocks LDL-derived cholesterol egress from late endosomes, causing cholesterol accumulation in the late endolysosomal (LEL) compartment and reduced sterol flux to the ER, bile, and steroidogenic organelles (Zhao et al., 2017).

## Autophagosome Positioning

ORP1L is a second, distinct [[Rab7]] effector besides [[RILP]] — both recognise Rab7-GTP on late endosomes and autophagosomes. ORP1L controls **transport of autophagosomes into the juxtanuclear region and their subsequent fusion with lysosomes**: in ORP1L-deficient cells autophagosomes stay peripheral, do not mature, and autophagic flux collapses, whereas the alternative minus-end transport route through [[FYCO1]] cannot fully compensate (Wijdeven et al., 2016, *Nat Commun*).

> [!info] Coupling to PLEKHM1
> ORP1L sits upstream of the fusion machinery. ORP1L-mediated ER contact sites are required to recruit [[PLEKHM1]] and the [[HOPS complex]] onto Rab7-positive autophagosomes; without that recruitment, autophagosome–lysosome tethering and fusion fail. This makes cholesterol availability a rate-limiting input to autophagic flux, not merely a by-product of it.

Cholesterol loading of autophagosomes is a point of contention in the field: some work finds that experimentally added cholesterol *inhibits* autophagosome–lysosome fusion, so the sign of the cholesterol effect depends on compartment and stage. The ORP1L transport/positioning mechanism is better supported than a simple "more cholesterol, more flux" model.

## Clinical Relevance

- **Cholelithiasis.** *OSBPL1* variants (notably the E248Q allele) are the strongest common genetic risk factor for symptomatic gallstone disease in European populations. The mechanism is coherent: reduced ER cholesterol export lowers biliary cholesterol solubility, favouring cholesterol crystal nucleation.
- **Nephropathy.** Autosomal dominant tubulointerstitial kidney disease with *OSBPL1* variants appears to involve tubule epithelial vulnerability rather than systemic sterol misregulation; the mechanism is not fully settled.
- **Lipid homeostasis.** ORP1L is one of several ORPs (with [[ABCD1]]-family peroxisomal transport and the ER-anchored ORP5) that partition cholesterol flux between the ER, lysosomes, plasma membrane, and bile.

## Connections to Neighbouring Pathways

Because ORP1L couples ER and lysosomal sterol pools, its loss destabilises [[Lysosome|lysosomal]] homeostasis generally, not just autophagosome trafficking. The connection to [[Cholesterol]] is bidirectional: cholesterol-rich late endolysosomes recruit ORP1L, and the contact sites ORP1L builds are themselves the cholesterol sink.

## Documents

- [[Lysosomal Localization]] — positions ORP1L as the RILP-opposing, cholesterol-sensitive Rab7 effector that determines lysosomal positioning; this vault's framing of lysosomal positioning rests on that effector pair.

## Connections

- [[PLEKHM1]] — PLEKHM1 is the downstream fusion effector that ORP1L's ER contact sites help recruit to Rab7-positive autophagosomes. Loss of ORP1L leaves autophagosomes peripheral and unprimed for PLEKHM1/HOPS-mediated fusion.
- [[Rab7]] — ORP1L binds Rab7-GTP, which is how a sterol sensor gets positioned on late endosomes and autophagosomes at all. Rab7 is the shared anchor for both the ORP1L and RILP transport pathways.
- [[RILP]] — RILP and ORP1L are the two competing minus-end Rab7 effectors, one transporting along [[Microtubule|microtubules]] and the other anchoring to the ER. Han et al. (2024) report direct RILP–ORP1L interaction that competitively displaces the VAP-A contact site.
- [[Cholesterol]] — the ORD domain binds free cholesterol as its regulatory ligand, making ORP1L a cholesterol-sensing switch rather than a passive transporter.
- [[FYCO1]] — FYCO1 is the plus-end transport arm of lysosomal positioning; the existence of both arms is why the loss of one (ORP1L) only partially, not totally, disables positioning.
- [[Autophagy]] — ORP1L loss blocks autophagic flux at the tethering/fusion step, giving it a genetic handle on lysosomal degradative capacity independent of autophagosome formation.

## Linking Summary

- New links added: [[Oxysterols]], [[Rab7]], [[Cholesterol]], [[Microtubule]], [[Autophagy]], [[RILP]], [[FYCO1]], [[PLEKHM1]], [[ABCD1]], [[Lysosome]]
- Suggested notes to create: [[HOPS complex]], [[VAP-A]], [[Phospholipid Transfer Protein]], [[PtdIns4P]], [[Gallstone Disease]] — removed as already existing: Autophagic Lysosome Reformation
- Strong connections to strengthen: [[ORP1L]] ↔ [[PLEKHM1]] (recruitment order should be stated explicitly in both notes), [[ORP1L]] ↔ [[Rab7]]
