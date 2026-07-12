---
title: Inflammasome
description: >-
  Inflammasomes are cytosolic supramolecular immune complexes that activate
  inflammatory caspases to process IL-1 family cytokines and induce pyroptosis,
  serving as critical mediators of innate immunity and sterile inflammation.
created: 2026-07-11
updated: 2026-07-11
tags:
  - protein-complex
  - innate-immunity
  - inflammation
  - senescence
  - inflammation
aliases: [Inflammasome, inflammasomes]
---

# Inflammasome

**Inflammasomes** are cytosolic supramolecular complexes of the innate immune system that assemble in response to pathogen-associated molecular patterns (PAMPs) and damage-associated molecular patterns (DAMPs). They activate inflammatory caspases — primarily [[Caspase-1]] in the canonical pathway — which proteolytically process pro-IL-1β and pro-IL-18 into their mature, secreted forms, and cleave gasdermin D (GSDMD) to trigger pyroptosis, a highly inflammatory form of programmed cell death.

Inflammasome activity is central to host defence against infection, but when chronically activated by sterile stimuli (e.g., cellular senescence, metabolic stress, mitochondrial damage), it drives persistent [[Inflammation]] and contributes to age-related diseases, neurodegeneration, cardiovascular disease, and [[Cancer]].

## Composition and Assembly

### Core Components

An inflammasome typically consists of three elements:

1. **Sensor protein** — detects the activating stimulus (e.g., NLRP3, AIM2, NLRC4, NLRP1, pyrin)
2. **Adaptor protein ASC** (apoptosis-associated speck-like protein containing a CARD) — bridges sensor to effector via PYD–PYD and CARD–CARD interactions
3. **Effector caspase** — most commonly [[Caspase-1]] (canonical); [[Caspase-4]], [[Caspase-5]], or [[Caspase-11]] (noncanonical)

### Assembly Mechanism

Upon ligand binding, sensor proteins undergo conformational change and oligomerize. PYD-containing sensors (NLRP3, AIM2, pyrin) recruit ASC through PYD–PYD interactions, forming helical filaments known as **ASC specks** — large supramolecular organizing centers (SMOCs). ASC then recruits caspase-1 through CARD–CARD interactions, inducing caspase-1 dimerization and auto-proteolytic activation. The active caspase-1 p33/p10 heterodimer cleaves its substrates.

> [!info] Structural Insights
> Cryo-EM studies have revealed that the active NLRP3–NEK7–ASC complex comprises ~10–11 NLRP3 subunits forming a disc-shaped structure, with NEK7 bound at the periphery. The PYD filament protrudes orthogonally from the disc center, recruiting ASC through helical polymerization (Fu et al., Nat Rev Immunol, 2024).

## Major Inflammasome Types

### NLRP3 Inflammasome

The most extensively studied inflammasome. NLRP3 is expressed in myeloid cells (macrophages, dendritic cells, neutrophils) and is activated by a remarkably diverse set of stimuli:

- **PAMPs**: bacterial toxins, viral RNA, fungal hyphae
- **DAMPs**: ATP, uric acid crystals, cholesterol crystals, [[mtDNA]], [[HMGB1]]
- **Endogenous signals**: amyloid-β, α-synuclein, protein aggregates
- **Metabolic stress**: ceramides, saturated fatty acids, glucose

NLRP3 activation requires a **two-step process**:
1. **Priming** (Signal 1): NF-κB-dependent transcriptional upregulation of NLRP3 and pro-IL-1β (e.g., via TLR ligation, LPS)
2. **Activation** (Signal 2): Assembly triggered by K⁺ efflux, Ca²⁺ flux, reactive oxygen species, lysosomal destabilization, or mitochondrial dysfunction

> [!tip] NLRP3 and Senescence
> NLRP3 inflammasome activation is linked to immune senescence and is a plausible driver of the SASP. Senescent cells accumulate DAMPs (HMGB1, mtDNA, oxidized lipids) that can activate NLRP3 in neighbouring macrophages, amplifying the inflammatory milieu (Spadaro et al., 2016).

### AIM2 Inflammasome

Senses cytoplasmic double-stranded DNA (bacterial, viral, or self-DNA from damaged nuclei or mitochondria). AIM2 forms a direct CARD-containing complex that recruits caspase-1 without requiring ASC for cell death induction, though ASC is needed for maximal IL-1β processing.

### NLRC4 Inflammasome

Activated by cytoplasmic bacterial flagellin and type III secretion system components. NAIP proteins act as co-receptors that directly bind bacterial ligands and recruit NLRC4 through NACHT–NACHT interactions. NLRC4 can directly recruit caspase-1 via its CARD, but ASC recruitment is required for full IL-1β processing.

### NLRP1 Inflammasome

Contains a C-terminal CARD that recruits ASC directly. Activated by Bacillus anthracis lethal toxin and muramyl dipeptide. Human NLRP1 also responds to the intracellular danger signal UDP via the protease DPP9.

### Pyrin Inflammasome

Senses bacterial RhoA inactivation (e.g., by Clostridium difficile toxin B). Pyrin forms an ASC-dependent inflammasome that activates caspase-1.

## Downstream Effectors

### Gasdermin D (GSDMD) — Pyroptosis

All inflammatory caspases (caspase-1, -4, -5, -11) cleave GSDMD between the N-terminal pore-forming domain and the C-terminal inhibitory domain. The liberated N-terminal fragment oligomerizes in the plasma membrane, forming pores (~10–20 nm) that cause osmotic swelling, membrane rupture, and **pyroptosis**. Together with [[NINJ1]], GSDMD pores induce a highly inflammatory form of cell death that releases cytoplasmic contents — including mature IL-1β, IL-18, and DAMPs — into the extracellular space.

> [!warning] Pyroptosis Amplifies Inflammation
> Pyroptotic cell death releases intracellular IL-1α, HMGB1, mtDNA, and other DAMPs that activate surrounding cells, creating a feedforward inflammatory loop. In the context of [[Senescent Cells]], this can amplify the SASP-driven inflammatory microenvironment.

### IL-1β and IL-18 Processing

- **Pro-IL-1β** (31 kDa) → cleaved by caspase-1 → mature IL-1β (17 kDa) → secreted
- **Pro-IL-18** (24 kDa) → cleaved by caspase-1 → mature IL-18 (18 kDa) → secreted
- Pro-IL-18 is constitutively expressed; pro-IL-1β requires transcriptional priming

## Inflammasome in Senescence

The inflammasome operates in both senescent cells and neighbouring immune cells:

### In Senescent Cells

- **Noncanonical inflammasome** (caspase-5/11) cleaves IL-1α — not IL-1β — during senescence, driving the SASP (Wiggins et al., 2019).
- Caspase-5 expression is interferon-responsive and controlled upstream by the [[cGAS-STING Pathway|cGAS–STING]] pathway.
- IL-1β is transcriptionally upregulated in senescent cells but is **not** processed or released — only IL-1α processing occurs.
- The SASP is independent of NLRP3/caspase-1/ASC in the senescent cell itself.

### In Neighbouring Macrophages

- Macrophages recruited to senescent cells encounter DAMPs (HMGB1, mtDNA, oxidized lipids) that activate the **canonical NLRP3 inflammasome**.
- NLRP3 activation → caspase-1 → IL-1β maturation and pyroptosis.
- This creates a dual inflammasome axis: noncanonical (caspase-5/11) in senescent cells + canonical (NLRP3/caspase-1) in macrophages, amplifying tissue inflammation.

> [!info] Inflammasome Crosstalk in Atherosclerosis
> In advanced atherosclerotic plaques, senescent macrophages, endothelial cells, and smooth muscle cells all accumulate. NLRP3 inflammasome activation by cholesterol crystals in macrophages synergizes with noncanonical inflammasome activation in senescent cells, driving chronic vascular inflammation.

## Regulation

- **NF-κB**: Transcriptional priming of NLRP3 and pro-IL-1β
- **Autophagy**: Clears damaged mitochondria and inflammasome components, restraining activation
- **cGAS–STING**: Drives interferon signaling that upregulates caspase-5 expression
- **mTOR**: Promotes IL-1α translation; [[Rapamycin]] suppresses inflammasome priming
- **AMPK**: Inhibits NLRP3 activation under physiological hypoxia
- **Negative regulators**: Pyrin-only proteins (POPs), CARD-only proteins (COPs), and MCC950 (NLRP3-specific inhibitor)

## Clinical / Pathological Relevance

- **Autoinflammatory diseases**: Cryopyrin-associated periodic syndromes (CAPS) — gain-of-function NLRP3 mutations cause constitutive inflammasome activation
- **Cardiovascular disease**: NLRP3 activated by cholesterol crystals and oxidized LDL in atherosclerosis
- **Neurodegeneration**: Amyloid-β and α-synuclein activate NLRP3 in microglia
- **Type 2 diabetes**: Islet amyloid activates NLRP3 in pancreatic β-cells
- **Cancer**: Dual role — inflammasome can suppress tumorigenesis (immune surveillance) or promote it (chronic inflammation, immunosuppressive microenvironment)
- **Aging**: Inflammasome activation contributes to [[Inflammaging]] and age-related tissue degeneration

## Documents

List of documents in the wiki that mention this entity

- [[_document_ - Senecent cell activate neighboring macrophages|Senescent cells activate neighbouring macrophages]]
  - Details the dual inflammasome axis in senescent cell–macrophage interactions: noncanonical (caspase-5/11) in senescent cells and canonical (NLRP3/caspase-1) in recruited macrophages.

- [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]]
  - Discusses inflammasome-mediated SASP activation and the role of IL-1 signaling in establishing the senescence-associated secretory phenotype.

## Connections

- [[SASP|Senescence-Associated Secretory Phenotype]] — The SASP is driven by noncanonical inflammasome-mediated IL-1α cleavage in senescent cells
- [[Caspase-1]] — Canonical effector caspase; processes pro-IL-1β, pro-IL-18, and GSDMD
- [[Caspase-5]] / [[Caspase-11]] — Noncanonical effector caspases; directly cleave IL-1α and GSDMD
- [[IL-1α]] — Noncanonical inflammasome substrate; its cleavage and surface translocation drives the SASP
- [[Interleukin 1β|IL-1β]] — Canonical inflammasome substrate; processed by caspase-1 in macrophages
- [[IL-18]] — Canonical inflammasome substrate; promotes TH1 responses
- [[NFKB|NF-κB]] — Transcriptional priming of NLRP3 and pro-IL-1β
- [[cGAS-STING Pathway|cGAS–STING]] — Drives interferon-dependent caspase-5 expression upstream
- [[HMGB1]] — DAMP released during pyroptosis; activates TLR4 and RAGE
- [[mtDNA]] — Mitochondrial DNA DAMP that activates both cGAS–STING and NLRP3
- [[Macrophages]] — Primary cell type for inflammasome activation; recruited to senescent cells
- [[Senescent Cells]] — Activate noncanonical inflammasome (caspase-5/11) to process IL-1α
- [[Inflammaging]] — Chronic, low-grade inflammasome-driven inflammation during aging
- [[Autophagy]] — Clears damaged organelles and inflammasome components, restraining activation
- [[mTOR]] — Regulates IL-1α translation and inflammasome priming
- [[Calpain]] — Alternative IL-1α processing enzyme in senescent cells

## Linking Summary

- New links added: [[Caspase-1]], [[Caspase-5]], [[Caspase-11]], [[IL-1α]], [[Interleukin 1β|IL-1β]], [[IL-18]], [[NFKB|NF-κB]], [[cGAS-STING Pathway|cGAS–STING]], [[HMGB1]], [[mtDNA]], [[Macrophages]], [[Senescent Cells]], [[Inflammaging]], [[Autophagy]], [[mTOR]], [[Calpain]], [[NINJ1]]
- Suggested new entity notes to create: [[Gasdermin D]], [[NLRP3]], [[AIM2]], [[NLRC4]], [[ASC Speck]]
- Strong connections to strengthen:
    - [[Inflammasome]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]
    - [[Inflammasome]] ↔ [[Macrophages]]
    - [[Inflammasome]] ↔ [[Senescent Cells]]
    - [[Inflammasome]] ↔ [[Inflammaging]]
