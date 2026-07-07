---
title: RIPK1
description: RIPK1 (Receptor-interacting serine/threonine-protein kinase 1) is a 76 kDa kinase and death domain-containing protein that serves as a central molecular switch governing cell fate decisions between survival, apoptosis, and necroptosis.
type: entity
created: 2026-07-04
updated: 2026-07-06
tags:
  - enzyme
aliases: []
---

# RIPK1

RIPK1 (Receptor-interacting serine/threonine-protein kinase 1) is a 76 kDa signaling protein that functions as a master regulator of cell fate decisions. Through its scaffold and kinase activities, RIPK1 determines whether a cell survives, undergoes apoptosis, or executes necroptosis in response to inflammatory and infectious stimuli.

## Structure

RIPK1 comprises three major functional domains. The N-terminal kinase domain catalyzes serine/threonine phosphorylation and is essential for RIPK1-dependent signaling in necroptosis and certain apoptosis contexts. The intermediate domain contains a RIP homotypic interaction motif (RHIM) that mediates homotypic interactions with other RHIM-containing proteins including [[RIPK3]] and TRIF, enabling the formation of signaling complexes. The C-terminal death domain (DD) facilitates interactions with death domain-containing proteins such as [[TNFR1]], [[TRADD]], and [[FADD]], tethering RIPK1 to receptor complexes at the plasma membrane.

## Signaling Pathways

RIPK1 sits at the apex of a signaling cascade initiated by the binding of [[TNFα]] to [[TNFR1]]. Upon ligand engagement, RIPK1 is recruited into Complex I, a membrane-associated signaling platform that also contains [[TRADD]], [[TRAF2]], [[TRAF5]], and the E3 ubiquitin ligases cIAP1/cIAP2. Within Complex I, ubiquitination of RIPK1 by cIAPs promotes the recruitment of the IKK complex and TAK1, leading to [[NF-κB]] activation and the transcription of prosurvival genes.

When [[NF-κB]] signaling is impaired or deubiquitination of RIPK1 occurs, RIPK1 dissociates from Complex I and assembles into cytosolic Complex II. In Complex IIa, RIPK1 scaffolds [[FADD]] and [[caspase-8]], promoting caspase-8 dimerization and activation. Active caspase-8 cleaves downstream executioner caspases, resulting in extrinsic [[apoptosis]]. If caspase-8 activity is compromised — through pharmacological inhibition, viral inhibitors, or genetic deletion — RIPK1 instead partners with [[RIPK3]] via RHIM-mediated interactions. RIPK3 then phosphorylates MLKL, which translocates to the plasma membrane to execute [[necroptosis]], a lytic and immunogenic form of cell death.

The kinase activity of RIPK1 serves as the critical switch between these outcomes. When RIPK1 kinase activity is engaged, it drives the formation of the necrosome (RIPK1–RIPK3–MLKL). Conversely, kinase-inactive RIPK1 can still scaffold survival or apoptotic complexes, underscoring the distinction between its scaffold and enzymatic functions.

## MAVS Connection

RIPK1 also functions in antiviral innate immunity through its interaction with [[MAVS]] (Mitochondrial Antiviral Signaling protein). In the [[Retinoic-acid-inducible protein I-like receptor|RIG-I/MDA5]] pathway, viral RNA detection by RIG-I or MDA5 triggers MAVS aggregation on the mitochondrial outer membrane. MAVS recruits RIPK1 along with TRAF3 and [[TRAF6]] to activate [[IRF3]] and [[NF-κB]], driving type I interferon production. This places RIPK1 at the intersection of cell death regulation and antiviral signaling: during viral infection, RIPK1 may either promote interferon-mediated clearance or — if viral inhibitors compromise caspase-8 — execute necroptosis as a host defense mechanism. This MAVS–RIPK1 axis is particularly important in RNA virus infections such as influenza and Sendai virus, where RIPK1 deficiency impairs interferon induction and increases viral susceptibility.

## Pathology

Loss-of-function and gain-of-function mutations in RIPK1 produce distinct disease phenotypes. Heterozygous mutations in the kinase domain that hyperactivate RIPK1 cause CRIA syndrome (cleavage-resistant RIPK1-induced autoinflammatory syndrome), a severe autoinflammatory disease characterized by recurrent fevers, lymphadenopathy, and elevated acute-phase reactants. These mutations prevent caspase-8-mediated cleavage of RIPK1 at Asp324, locking RIPK1 in an active state that drives [[NF-κB]] hyperactivation and inflammatory cytokine production. Targeted RIPK1 kinase inhibitors are in clinical development for CRIA syndrome and other [[inflammation]]-driven conditions.

In neurodegenerative contexts, RIPK1 activation contributes to neuronal loss in [[Alzheimer's Disease]], [[Parkinson's Disease]], and amyotrophic lateral sclerosis by promoting necroptosis and neuroinflammation. RIPK1 kinase inhibitors such as necrostatin-1 have shown neuroprotective effects in preclinical models, reducing axonal degeneration and microglial activation. RIPK1 also mediates cell death following ischemia-reperfusion injury in the heart, brain, and kidney, where necroptosis contributes to tissue damage. The broad involvement of RIPK1 in sterile and pathogen-driven [[inflammation]] makes it an attractive therapeutic target across multiple disease areas.

## Connections

- [[MAVS]]: RIPK1 is recruited to MAVS aggregates on mitochondria during antiviral signaling to activate IRF3 and NF-κB for type I interferon production.
- [[Apoptosis]]: RIPK1 scaffolds FADD and caspase-8 in Complex IIa to drive extrinsic apoptosis when NF-κB signaling is blocked.
- [[Necroptosis]]: When caspase-8 is inhibited, RIPK1 kinase activity drives RIPK3/MLKL-dependent necroptosis.
- [[NF-κB]]: Within Complex I, ubiquitinated RIPK1 recruits IKK and TAK1 to activate canonical NF-κB signaling and promote cell survival.
- [[TNFα]]: TNFα binding to TNFR1 triggers RIPK1 recruitment and the formation of signaling complexes that dictate cell fate.
- [[TNFR1]]: RIPK1 binds TNFR1 through its C-terminal death domain to initiate downstream signaling cascades.
- [[Inflammation]]: RIPK1-mediated necroptosis and CRIA syndrome demonstrate key roles in sterile and autoinflammatory disease.
- [[Retinoic-acid-inducible protein I-like receptor]]: RIG-I/MDA5 sensors activate MAVS, which recruits RIPK1 for antiviral IFN induction.

## Linking Summary

- New links added: [[TRADD]], [[FADD]], [[TRAF2]], [[TRAF5]], [[TRAF6]], [[RIPK3]], [[Caspase-8]], [[MLKL]], [[IRF3]], [[IKK]], [[TAK1]], [[CRIA syndrome]], [[Necrostatin-1]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Ischemia-reperfusion injury]]
- Suggested new entity notes to create: [[Necrosome]], [[RHIM domain]], [[Complex I (TNFR1)]], [[Complex IIa (RIPK1)]], [[cIAP1]], [[cIAP2]]
- Strong connections to strengthen: [[RIPK1]] ↔ [[MAVS]], [[RIPK1]] ↔ [[TNFα]], [[RIPK1]] ↔ [[Necroptosis]], [[RIPK1]] ↔ [[NF-κB]]
