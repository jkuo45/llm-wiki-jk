---
title: LC3B
description: 'Microtubule-associated protein 1B light chain 3 (MAP1LC3B), the most abundant mammalian ATG8-family protein. LC3B is lipidated to the inner autophagosomal membrane and acts as a membrane-bound binding platform for cargo receptors through LIR motif recognition; it is the standard biochemical marker of autophagic flux.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - autophagy
aliases: [MAP1LC3B, LC3-2, MAP1-LC3B, LC3B]
---

# LC3B

LC3B is the microtubule-associated protein 1B light chain 3, gene symbol *MAP1LC3B*. It is the most abundant and most heavily used of the six mammalian ATG8-family proteins and the one nearly all "autophagy is upregulated" experiments measure.

> [!warning] Term ambiguity
> "LC3" without a letter suffix is used loosely in the literature to mean either the whole family or specifically LC3B. This note is about **LC3B** only. The mammalian ATG8 family comprises LC3A, LC3B, LC3C, [[GABARAP]], GABARAPL1, and GABARAPL2; the LC3 subfamily acts at autophagosome formation, the GABARAP subfunction at maturation/fusion.

## Structure and domains

LC3B is a small (~14 kDa cytosolic precursor, ~26 kDa when lipidated) ubiquitin-fold protein built from:

- An **N-terminal arm** ending in the `Gly` that the ATG4 protease exposes.
- A **C-terminal core** surface lined by the two LIR-binding pockets, the hydrophobic type-1 (HP1) and type-2 (HP2) slots that engage the Trp and Leu of a WxxL LIR motif, with a buried Phe side chain providing most of the binding energy.
- A **tubulin-binding region** overlapping LIR pocket 1. This is why LC3 was originally described as a microtubule-associated protein, and why high-resolution imaging can confuse LC3-positive puncta with microtubule association.
- An N-terminal **degron** that is the key degradation signal. LC3B (and LC3C) carry a prominent degron recognised by the ATG4B protease; LC3A lacks it, which is one of the main reasons LC3A accumulates far more than LC3B in most tissues and cell types.

## Lipidation and the LC3-I / LC3-II assay

LC3B cycles between two states, and the ratio between them is the standard proxy for autophagy:

> [!info] Mechanism
> In a nutrient-rich cell, LC3B is cytosolic and unmodified (**LC3-I**, ~16 kDa on gel). ATG4 cleaves off the N-terminal arm, exposing a Gly that is then conjugated to **phosphatidylethanolamine** by the ATG12–ATG5–ATG16L1 complex with ATG8 conjugation machinery (**LC3-II**, lipidated, ~14 kDa + lipid). LC3-II is recruited into the forming [[Autophagosome]] on both the inner and outer membrane, and the LC3B on the *inner* membrane is extruded into the cytosol when the autophagosome matures and fuses with the [[Lysosome]]. Deconjugation is by ATG4, and on the outer membrane LC3B is shed with the autophagosome, then ubiquitinated and cleared by the proteasome.

**The central interpretive caveat:** because LC3-II is also degraded by the lysosome, high LC3-II is ambiguous. It can mean *more autophagosomes formed*, or it can mean *autophagosomes formed but the lysosome is blocked* (as with a V-ATPase or lysosomal protease inhibitor). Only with a flux-sensitive pair (LC3-II turnover with and without a lysosomal blockade, or a tandem GFP-LC3 reporter) does the measurement mean what people assume it means. The vault document on caloric restriction makes exactly this point: inhibiting autophagosome–lysosome fusion with chloroquine produces the same rise in LC3-II and p62 that a genuinely increased flux would.

> [!info] Source: [[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> The SIRT1/sirtuin review cites evidence that a SIRT1 activator increases LC3B expression and promotes p62/SQSTM1 degradation in a concentration-dependent manner, and that activation of the AMPK/SIRT1 pathway promotes autophagic flux via downregulation of p62.

## Non-canonical functions

LC3B does considerably more than mark autophagosomes:

- **Selective autophagy.** LC3B is the docking platform on the autophagosomal membrane for soluble cargo receptors — [[p62]], NBR1, NDP52, optineurin — each of which tethers polyubiquitinated cargo through a ubiquitin-binding (UBA/UIM) domain to an LIR motif bound in the LC3B pocket. Parkin-dependent [[Mitophagy]] proceeds by PINK1 building a ubiquitin chain on outer-membrane proteins and parkin-linked receptors bridging that chain to LC3B.
- **Lipid droplet and lysosome-related autophagy.** LC3B has been reported to lipidate onto the surface of large lipid droplets independently of autophagosome formation.
- **Non-canonical secretory pathway.** LC3B is conjugated to single-membrane vesicles of the secretory pathway (including LAMP1-positive vesicles) independently of the core autophagy machinery.
- **Microtubule and immune signalling.** LC3B associates with tubulin and with signalling complexes, and the LC3B/lamin B1 nuclear envelope association implicated in sterile inflammation after nuclear envelope damage is LIR-dependent.

## Pathology and clinical relevance

> [!info] Source: [[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> The sirtuin review places LC3B in a multistep autophagy cascade involving SIRT1, Atg5, Atg7, Atg8, p62 and AMPK, in which SIRT1 is reported to form a molecular complex with Atg5, Atg7 and Atg8 and to be sufficient on its own to stimulate basal autophagic rates.

Autophagy defects involving LC3B are described in neurodegenerative disease, in which aggregates that normally carry LIR motifs and are handed to autophagosomes accumulate. Clinically, LC3B immunohistochemistry, GFP-LC3 puncta counting, and phospho-S65 LC3 staining are all used as research readouts, and phospho-S65 is a more specific activation marker than total LC3B. Biologically, it is a long-standing open question whether raising LC3B is beneficial (more cargo delivered) or harmful (LC3B is also an autophagy substrate and an interferon-inducible inflammatory scaffold); most evidence favours context dependence.

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]] — places LC3B downstream of SIRT1 in a cAMP/PKA–AMPK–SIRT1 axis, reports SIRT1-driven increases in LC3B expression and p62 degradation, and describes SIRT1 complexing with Atg5/Atg7/Atg8 to stimulate basal autophagy.

## Connections

- [[LC3]] — Family-level note covering LC3A, LC3B, LC3C and the GABARAP subfamily; LC3B is the dominant member of the LC3 subfamily.
- [[GABARAP]] — Sibling ATG8 subfamily; LC3 proteins act earlier in autophagosome biogenesis, GABARAP proteins at maturation and fusion.
- [[LIR Motif]] — The WxxL consensus that LC3B's two hydrophobic pockets bind; this is the molecular basis of all LC3B-dependent selective cargo recognition.
- [[p62]] — The prototype soluble cargo receptor, linking polyubiquitinated aggregates to lipidated LC3B; the other half of the standard LC3-II/p62 flux pair.
- [[Autophagosome]] — LC3B is the constitutive membrane marker of the autophagosome, lining both the inner and outer limiting membrane.
- [[Mitophagy]] — Receptor-mediated and parkin-dependent mitophagy both converge on LC3B: NIX, BNIP3, FUNDC1 and p62 all use LIR motifs to dock onto LC3B.
- [[Parkin]] — Parkin builds the ubiquitin signal on damaged mitochondria; the mitophagy receptors then bridge that signal to LC3B for engulfment.
- [[Atg4B]] — The protease that both creates the LC3B maturation site and deconjugates lipidated LC3-II; also the reason LC3B's own degron makes it a preferred substrate.
- [[Autophagy]] — LC3B lipidation is the canonical biochemical readout of macroautophagy initiation.
- [[Selective Autophagy]] — LC3B's LIR-binding surface is the shared membrane platform on which every selective autophagy pathway converges.

## Linking Summary

- New links added: [[LC3]], [[GABARAP]], [[LIR Motif]], [[p62]], [[Autophagosome]], [[Mitophagy]], [[Parkin]], [[Atg4B]], [[Selective Autophagy]], [[Lysosome]], [[Lipid Droplet]]
- Suggested notes to create: [[MAP1LC3A]], [[MAP1LC3C]], [[ATG8 Family]], [[LC3-interacting Region]], [[Phospho-S65 LC3]]
- Strong connections to strengthen: [[LC3B]] ↔ [[LC3]] (the family note should say explicitly which member is which), [[LC3B]] ↔ [[p62]] (the flux-pair logic is documented on the p62 side but not here)
