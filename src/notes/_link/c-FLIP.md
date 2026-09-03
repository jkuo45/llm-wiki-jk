---
title: c-FLIP
description: FLICE-like inhibitory protein (c-FLIP/CFLAR) — an enzymatically inactive caspase-8 homolog whose isoforms set the apoptose/necroptose/pyroptose switch by tuning caspase-8 activity inside death receptor and inflammasome complexes.
protected: false
created: 2026-08-29
updated: 2026-09-03
tags:
  - protein
  - cell-death
  - apoptosis
  - necroptosis
url: #
source: #
aliases:
  - FLICE-like inhibitory protein
  - CFLAR
  - CASP8 and FADD-like apoptosis regulator
  - c-FLIPL
  - c-FLIPS
---

# c-FLIP

**c-FLIP** (FLICE-like inhibitory protein, encoded by *CFLAR*) is an enzymatically inactive homolog of [[Caspase-8]] that heterodimerizes with it and thereby decides whether a death-receptor stimulus ends in [[Apoptosis]], [[Necroptosis]], or cell survival. It is the tuning knob on the caspase-8 molecular switch.

## Mechanism

- **c-FLIP_L (long isoform)**: caspase-8/c-FLIP_L heterodimers suppress both apoptosis and necroptosis by reducing caspase-8 catalytic activity — yet retain *enough* residual activity to cleave and inactivate **[[RIPK1]] and [[RIPK3]]**, the key necroptosis substrates. Net effect: survival + necroptosis blockade.
- **c-FLIP_S (short isoform)**: heterodimers with the short isoform inhibit caspase-8 more completely while *enhancing* complex II (ripoptosome) assembly — inhibiting apoptosis and **promoting necroptosis**.
- **Switch points**: pharmacological or viral inhibition of caspase-8 (z-VAD-FMK, viral c-FLIP mimetics) flips TNF signaling to necroptosis; high [[RIPK3]] expression with basal caspase-8 inhibition does the same.
- **Pyroptosis arm**: the caspase-8/c-FLIP complex also participates in [[NLRP3]] [[Inflammasome]] activation, and c-FLIP-bearing complexes can promote caspase-8-mediated [[Gasdermin D|GSDMD]] cleavage — so c-FLIP touches all three TNFR1 fates.

> [!info]
> Genetic proof of the switch: embryonic lethality in caspase-8- or FADD-deficient mice is fully rescued by RIPK3/MLKL/RIPK1 knockout — the lethal phenotype is necroptosis running unchecked when the caspase-8/c-FLIP brake is removed.

## Rheostat Logic (Quantitative Tuning)

The full account lives at [[Caspase-8-c-FLIP Rheostat]]; the essentials:

- **Heterodimer energetics favor restraint.** The [[Caspase-8]]/FLIP_L heterodimer (PDB 3H13) forms with
  lower activation energy than the [[Caspase-8]] homodimer, so at low receptor occupancy the complex is
  heterodimer-dominated and [[Apoptosis]] is blocked; at high occupancy, scarce FLIP_L is titrated out
  and the remaining heterodimers *accelerate* homodimer activation (Micheau 2002; Smyth 2020).
- **Short isoforms terminate, long isoform tethers.** FLIP_S/R incorporation caps DED-chain elongation
  at the [[DISC]]; FLIP_L promotes short-chain oligomerization while keeping the complex membrane-bound
  via its uncleavable pseudo-caspase domain (no Asp210/216/223 equivalent, no intradimer cut).
- **Turnover resets the dial.** Rapid [[Proteasome]]-mediated degradation (Itch, Cbl/Cbl-b, Mind bomb 1,
  TRAF7, CHIP) plus PKC/ROS phosphorylation and S-nitrosylation switches move the FLIP_L:procaspase-8
  ratio on minute timescales — the parameter every mathematical model (Bentele, Lavrik, Neumann,
  Kallenberger) identifies as fate-determining.
- **Ripoptosome corollary.** Without cIAPs, caspase activity itself becomes the rheostat: FLIP_L
  heterodimers cleave [[RIPK1]] and disassemble the ripoptosome (survival), FLIP_S heterodimers cannot
  (→ [[Necroptosis]] via [[RIPK3]]/[[MLKL]]) — Feoktistova 2011.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - c-FLIP isoforms as the caspase-8 rheostat setting the apoptosis/necroptosis balance, with c-FLIP_S favoring necroptosis and c-FLIP_L preserving just enough caspase-8 activity to cleave RIPK1/RIPK3.

- [[_document_ - The Long Form of FLIP Is an Activator of Caspase-8 at the Fas DISC|Micheau et al. 2002]]
  - Biochemical foundation of the rheostat: FLIP_L heterodimerizes with procaspase-8 at the Fas DISC, drives interdimer cleavage, blocks intradimer processing.

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - The rheostat paper: 2 MDa ripoptosome; caspase activity controlled by cFLIP isoforms decides apoptosis vs necroptosis; FLIP_L suppresses, FLIP_S promotes assembly.

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Systems review: DISC stoichiometry, ubiquitin-proteasome tuning, kinetic models, conditional-knockout physiology of the switch.

## Connections

- [[Caspase-8-c-FLIP Rheostat]] — the dedicated hub note for the quantitative switch
- [[FADD]] — adaptor nucleating the DED chains c-FLIP regulates
- [[DISC]] — membrane platform where the isoform ratio is read out
- [[Caspase-10]] — second paralogous partner of FLIP_L heterodimers (Beclin-1/BCLAF1 axis)

- [[Caspase-8]] — the heterodimer partner; c-FLIP is its inactive paralog and rheostat
- [[RIPK1]] / [[RIPK3]] — substrates whose cleavage by residual caspase-8/c-FLIP_L activity blocks necroptosis
- [[Necroptosis]] — unleashed when c-FLIP (or caspase-8) activity drops below the cleavage threshold
- [[Apoptosis]] — suppressed by both isoforms, via different complex dynamics
- [[NLRP3]] — caspase-8/c-FLIP complex participates in inflammasome activation (pyroptosis arm)
- [[TNFα]] — the death-ligand context in which the c-FLIP rheostat operates
- [[Sirtuin-Caspase Crosstalk]] — c-FLIP adds a post-translational rheostat to the caspase-switch network alongside caspase-1 cleavage of [[Parkin]] and caspase-3/-7 inactivation of [[Gasdermin D|GSDMD]]

## Linking Summary

- New links added: [[Caspase-8]], [[RIPK1]], [[RIPK3]], [[Necroptosis]], [[Apoptosis]], [[NLRP3]], [[TNFα]], [[Inflammasome]], [[Sirtuin-Caspase Crosstalk]]
- Rheostat update (03_Sep_2026): [[Caspase-8-c-FLIP Rheostat]], [[FADD]], [[DISC]], [[Caspase-10]], [[Proteasome]], [[MLKL]]; documents Micheau 2002, Feoktistova 2011, Tsuchiya 2015
- Suggested new entity notes to create: (done 03_Sep_2026: [[Ripoptosome]])
- Strong connections to strengthen: [[c-FLIP]] ↔ [[Caspase-8]], [[c-FLIP]] ↔ [[RIPK3]]
