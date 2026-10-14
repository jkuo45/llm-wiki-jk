---
title: NLRC4
description: NLRC4 (IPAF) is a NOD-like receptor with a CARD domain that acts as the
  adaptor of the NAIP-NLRC4 inflammasome, recruiting caspase-1 to cleave GSDMD, IL-1beta
  and IL-18, and driving pyroptosis.
protected: false
created: 2026-10-01
updated: 2026-10-02
tags:
  - protein
  - gene
  - innate-immunity
  - inflammation
aliases: [NLR family, caspase-associated recruitment domain-containing protein 4, NLRC4 inflammasome, IPAF, ICE-protease-activating factor, NAIP-NLRC4 inflammasome]
---

# NLRC4

**NLRC4** (NLR family, CARD-containing protein 4; originally ICE-protease-activating factor, IPAF) is a cytosolic pattern-recognition receptor of the [[NOD-like Receptors|NOD-like receptor]] family and the catalytic adaptor of the **NAIP-NLRC4 inflammasome**. NLRC4 is unusual among inflammasome components: it is not itself the primary pathogen sensor. It nucleates the inflammasome once an upstream NAIP sensor protein has bound a bacterial ligand, and then recruits pro-caspase-1 to execute the inflammatory response.

## Structure and Mechanism

NLRC4 has the canonical three-domain NLR architecture: an N-terminal caspase-activation and recruitment domain (CARD), a central nucleotide-binding NACHT domain, and a C-terminal leucine-rich repeat (LRR) domain. NLRC4 was originally cloned as a structural homologue of Apaf-1 because of its CARD and ATP-binding site, and renamed once that architecture placed it in the NLR family.

Activation proceeds as a discrete cascade: **trigger** (cytosolic flagellin or a type III secretion system component) → **sensor** (NAIP) → **nucleator** (NLRC4) → **adaptor** (ASC) → **effector** (caspase-1). Ligand-bound NAIP oligomerises NLRC4 through NACHT-domain interactions; NLRC4 then recruits pro-caspase-1 either directly by CARD-CARD contact or via [[ASC]], which co-localises into a speck. Activated [[Caspase-1]] cleaves [[Gasdermin D|GSDMD]], whose N-terminal fragment oligomerises into membrane pores, and matures pro-IL-1β and [[IL-18]] for release through those pores. The pores produce lytic, inflammatory death — [[Pyroptosis]].

> [!info] NAIP sets specificity, not NLRC4
> The murine genome encodes seven Naip paralogues that partition ligand recognition: Naip1 senses the T3SS needle protein, Naip2 the inner rod protein, and Naip5/Naip6 flagellin. Humans encode a single functional NAIP that responds to both T3SS proteins and flagellin. No study has demonstrated direct binding of flagellin or T3SS components to NLRC4 itself — ligand specificity is entirely upstream.

## Host Defence and Beyond

NLRC4-dependent caspase-1 activation was genetically proven in 2004 in *Nlrc4*-deficient macrophages, which fail to activate caspase-1 after *Salmonella typhimurium*. Pathogens routed through this axis include *S. typhimurium*, *Legionella pneumophila* (type IV secretion system), *Pseudomonas aeruginosa* and *Shigella flexneri*. Pyroptosis itself contributes to defence by destroying the replication niche of cytosolic bacteria; in cells lacking caspase-1 or GSDMD, NLRC4 instead recruits caspase-8 and drives an apoptotic fallback that can still process pro-IL-1β.

NLRC4 has also been implicated in [[Panoptosis]], in inflammasome-independent functions (phagosome maturation, inducible nitric oxide synthase, autophagy), and in tumour biology, where its roles are still context-dependent and contested.

## Autoinflammatory Disease

Gain-of-function NLRC4 mutations cause a spectrum of autoinflammatory syndromes with early-onset enterocolitis, appendicitis, arthritis and oral ulceration, alongside the more familiar periodic fever and urticarial rash. Serum [[IL-18]] elevation is characteristic and is the marker that most reliably tracks NLRC4-associated disease activity.

> [!important] Pharmacology
> NLRC4 has been targeted in proof-of-concept work with small-molecule inhibitors of its ATPase activity, and antiserum against IL-18 shows benefit in IL-18-driven disease. [[MCC950]], a selective NLRP3 inhibitor, does not inhibit NLRC4 — inflammasome-selective pharmacology depends on the sensor.

## Documents
- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|crosstalk of cell death mechanisms]] — describes caspase-1-deficient cells compensating for lost pyroptosis by switching to caspase-8-dependent apoptosis triggered by NLRC4 and AIM2 inflammasome activation.
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases|Roles of SIRT3 in aging and aging-related diseases]] — cites evidence that SIRT3-mediated deacetylation of NLRC4 promotes inflammasome activation, linking the sensor to the sirtuin redox axis.

## Connections
- [[NOD-like Receptors]] — NLRC4 is a member of the NLR family, the innate immune sensors that survey the cytosol for pathogen-associated and damage-associated patterns.
- [[Inflammasome]] — NLRC4 provides the nucleation and caspase-1 recruitment step of the NAIP-NLRC4 inflammasome, one of several sensor-defined inflammasome architectures.
- [[Caspase-1]] — Caspase-1 is the effector protease NLRC4 activates; it matures IL-1β and IL-18 and cleaves GSDMD to create pyroptotic pores.
- [[Pyroptosis]] — Gasdermin D pores opened downstream of NLRC4 activation produce the lytic inflammatory cell death that also denies intracellular bacteria a replicative niche.
- [[Gasdermin D]] — The pore-forming substrate whose cleavage by caspase-1 executes the pyroptotic outcome of NAIP-NLRC4 inflammasome activation.
- [[IL-18]] — IL-18 is the cytokine most tightly associated with NLRC4-associated autoinflammatory disease in humans, and circulating levels often track disease activity.
- [[Macrophages]] — Macrophages are the cell type in which NAIP-NLRC4 activation, pyroptosis and IL-1β/IL-18 release were originally characterised.
- [[Innate Immunity]] — NLRC4 is a core innate immune sensor for cytosolic Gram-negative bacterial components and links pattern recognition to inflammatory caspase execution.
- [[Apoptosis]] — When caspase-1 or GSDMD is unavailable, NLRC4 still signals by recruiting caspase-8, converting the response into apoptosis.

## Linking Summary
- New links added: [[NOD-like Receptors]], [[Inflammasome]], [[Caspase-1]], [[Pyroptosis]], [[Gasdermin D]], [[IL-1β]], [[IL-18]], [[Macrophages]], [[Innate Immunity]], [[Apoptosis]], [[Panoptosis]], [[MCC950]], [[ASC]], [[NLRP3 Inflammasome]]
- Suggested notes to create: [[NAIP]], [[Bacterial Flagellin]], [[Type III Secretion System]], [[Inflammasome-Associated Autoinflammatory Disease]], [[Periodic Fever]]
- Strong connections to strengthen: [[NLRC4]] ↔ [[NAIP]], [[NLRC4]] ↔ [[Pyroptosis]], [[NLRC4]] ↔ [[Inflammasome]]