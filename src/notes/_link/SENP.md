---
title: SENP
description: SENP is the family of SUMO-specific cysteine proteases (SENP1-3 and SENP5-7) that mature SUMO precursors by removing their C-terminal extension and reverse SUMOylation by cleaving SUMO off target proteins.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - gene
aliases: [SUMO-specific protease, sentrin-specific protease, deSUMOylase, Ulp]
---

# SENP

**SENP** refers to the family of **SUMO-specific proteases** — cysteine proteases that perform the two functions bracketing the SUMO cycle: cleaving the C-terminal extension off SUMO precursors to expose the di-glycine needed for conjugation (SUMO maturation), and removing [[SUMO]] from modified substrates (deSUMOylation). In humans there are six: **SENP1, SENP2, SENP3, SENP5, SENP6, and SENP7** (the SENP4 gene is non-functional). In budding yeast the functional enzymes are **Ulp1** and **Ulp2**, from which the "Ulp" family name derives.

> [!info] Mechanism
> Each SENP has a conserved **C-terminal catalytic domain** and a variable **N-terminal regulatory domain** that determines subcellular localization and substrate preference. The catalytic domain is a papain-like cysteine protease built on a Cys–His–Asp triad; in [[SENP1]] (643 residues, ~73 kDa) the residues are Cys603, His533, and Asp550. SENP1 attacks the SUMO C-terminus at the Gly-Gly↓Ala-Thr-Tyr scissile bond, and structural work shows it isomerizes the scissile peptide bond to drive hydrolysis, a mechanism distinct from canonical papain proteases.

## Substrate preferences

The paralogues are not interchangeable. SENP1 and SENP2 prefer SUMO1 and SUMO2 and are predominantly nuclear (SENP1 carries a C-terminal nuclear export signal; SENP2 is exported to the cytosol by p90RSK-mediated Thr368 phosphorylation under disturbed blood flow). SENP3, SENP5, SENP6, and SENP7 are primarily **SUMO2/3-specific**, are more cytosolic, and are the enzymes implicated in the rapid, global SUMO2/3 conjugation that follows heat shock and other cellular stresses. The differential affinity of each protease for individual SUMO paralogues was resolved structurally in SENP1–SUMO1 and SENP1–SUMO2 complexes.

## Functional roles

- **SUMO maturation.** Without SENP activity the SUMO C-terminus remains extended and cannot be adenylated by SAE1 or ligated to a substrate lysine.
- **Bulk deSUMOylation under stress.** The stress-response wave of SUMO2/3 conjugation is a transient protective state; SENP3/6/7 rapidly reverse it.
- **Cell-cycle control.** In yeast, Ulp2 continually trims polySUMO chains back to the monomodified state, preventing precocious cell-cycle transitions; this is opposed by Cdc5 phosphorylation of Ulp2, itself reversed by the Rts1–PP2A phosphatase. Persistent polySUMOylation then recruits SUMO-targeted ubiquitin ligases (STUbLs) and segregases, diverting substrates toward proteasomal turnover.
- **Transcriptional regulation.** SUMOylation of transcriptional regulators frequently correlates with transcriptional inhibition, and SENP activity is often the switch that restores expression.
- **DNA damage response.** SUMO acts as a molecular glue in repair foci, and SENPs control the lifetime of those assemblies across base excision repair, nucleotide excision repair, non-homologous end joining, and homologous recombination.

> [!warning] Clinical caveat
> No SENP inhibitor is an approved drug, and the paralogues' non-redundant substrate preferences mean that a "SENP" claim in a paper needs to name the paralogue. SENP3 and SENP6 also have non-catalytic, scaffolding roles reported in cell-cycle and DNA-damage contexts, so loss-of-function phenotypes do not always map cleanly onto deSUMOylation activity.

## Documents

- [[SUMOylation]]
  - The vault's SUMOylation note defines the E1/E2/E3 cascade and names the SENP family as the enzymes that reverse the modification; this note supplies the paralogue-resolved detail that the pathway-level note deliberately leaves out.

## Connections

- [[SUMO]] — SENP is the enzyme class that both matures SUMO precursors and removes the modifier from substrates, so the size of the SUMO pool and the steady-state level of SUMOylation are set by SENP activity.
- [[SUMOylation]] — the reversible modification that SENPs create and erase; SENP activity sets both the amplitude and the duration of the SUMO signal.
- [[SENP1]] — the founding member, the best-characterized paralogue structurally and biochemically, and the entry point for the catalytic triad and nuclear localization.
- [[Post-translational Modification]] — SUMOylation is one of several post-translational modifications the vault tracks, and the deSUMOylation arm is unusual in being a dedicated, specific protease family rather than a general proteolysis route.
- [[Autophagy]] — SENP activity tunes the SUMOylation state of autophagy regulators such as TFEB, ULK1, and GABARAP, which sets the threshold for autophagic induction.
- [[Ubiquitin]] — polySUMOylation is a signal that can recruit SUMO-targeted ubiquitin ligases, coupling the two modification systems in the yeast cell-cycle and DNA-maintenance literature.

## Linking Summary

- New links added: [[SUMO]], [[SUMOylation]], [[SENP1]], [[Post-translational Modification]], [[Autophagy]], [[Ubiquitin]]
- Suggested notes to create: [[SENP2]], [[SENP3]], [[SENP6]], [[SENP7]], [[Ulp1]], [[Ulp2]], [[SUMO1]], [[SUMO2]], [[PolySUMOylation]], [[SUMO-interacting Motif]] — removed as already existing: UBC9
- Strong connections to strengthen: [[SENP]] ↔ [[SUMO]], [[SENP]] ↔ [[SUMOylation]], [[SENP1]] ↔ [[SENP]]
