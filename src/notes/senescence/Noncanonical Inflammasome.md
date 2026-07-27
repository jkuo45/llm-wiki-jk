---
title: Noncanonical Inflammasome
description: >-
  The noncanonical inflammasome is an innate immune surveillance pathway in which
  caspase-4/5 (human) or caspase-11 (mouse) directly sense cytosolic LPS and cleave
  gasdermin D and IL-1α, driving pyroptosis and SASP-mediated inflammation.
created: 2026-07-11
updated: 2026-07-11
tags:
  - protein-complex
  - innate-immunity
  - inflammation
  - senescence
  - sasp
aliases: [Noncanonical Inflammasome, noncanonical inflammasome, caspase-11 inflammasome]
---

# Noncanonical Inflammasome

The **noncanonical inflammasome** is an innate immune signaling pathway that relies on the direct cytosolic detection of lipopolysaccharide (LPS) from Gram-negative bacteria by inflammatory caspases — **[[Caspase-4]]** and **[[Caspase-5]]** in humans, and **[[Caspase-11]]** in mice. Unlike the canonical inflammasome (which uses sensor proteins like NLRP3 to activate [[Caspase-1]]), the noncanonical pathway has no upstream sensor protein — LPS binds directly to the caspase, inducing its oligomerization and activation.

This pathway was first described by Kayagaki et al. (2011, Nature, PMID 22002605) and has since been recognized as a critical surveillance mechanism for Gram-negative bacterial infections, sterile inflammation, and — importantly — the [[SASP|Senescence-Associated Secretory Phenotype]].

## Molecular Mechanism

### Step 1: Cytosolic LPS Detection

LPS gains access to the cytosol through:

- **Bacterial invasion** of the cytosol (e.g., Burkholderia spp.)
- **Outer membrane vesicles (OMVs)** secreted by bacteria
- **GBP (guanylate-binding protein) and IRGB10** — interferon-induced proteins that disrupt bacterial membranes, liberating LPS into the cytosol
- **Endosomal escape** during phagocytosis of Gram-negative bacteria

Hexa-acylated lipid A (the bioactive moiety of LPS) binds directly to the CARD domain of caspase-4/5/11, inducing caspase dimerization and auto-proteolytic activation.

> [!info] Human vs. Mouse Caspases
> Humans lack caspase-11 but possess two paralogs: **caspase-4** (constitutively expressed) and **caspase-5** (inducible by type I and II interferons). Both bind hexa-acylated LPS. Caspase-4 appears to be the primary sensor for transfected LPS, while caspase-5 becomes more important during actual bacterial infections. Caspase-11 in mice is inducible and essential for host defense against Gram-negative sepsis.

### Step 2: Gasdermin D Cleavage — Pyroptosis

Active caspase-4/5/11 cleaves **gasdermin D (GSDMD)** between its N-terminal pore-forming domain and C-terminal inhibitory domain. The liberated N-terminal fragment:

1. Migrates to the plasma membrane
2. Binds phosphatidylinositol phosphates on the inner leaflet
3. Oligomerizes to form pores (~10–20 nm diameter)
4. Causes osmotic swelling, membrane rupture, and **pyroptosis**

> [!warning] Pyroptosis Amplifies Inflammation
> Gasdermin D pores also serve as conduits for IL-1β and IL-18 release prior to full membrane rupture. Together with [[NINJ1]], GSDMD pores drive the highly inflammatory form of cell death that releases all cytoplasmic DAMPs — including [[IL-1α]], [[HMGB1]], and [[mtDNA]] — into the extracellular space.

### Step 3: NLRP3/Caspase-1 Activation (Secondary)

Gasdermin D pore formation triggers **potassium efflux**, which activates the **canonical [[Inflammasome|NLRP3 inflammasome]]** → caspase-1 → processing and secretion of IL-1β and IL-18. Thus, the noncanonical pathway activates the canonical pathway downstream, amplifying the inflammatory response.

### Step 4: IL-1α Cleavage — The Senescence Connection

> [!important] Noncanonical Inflammasome and SASP
> Wiggins et al. (2019, Aging Cell, PMID 30916891) discovered that **IL-1α is a direct substrate of caspase-5 and caspase-11**, cleaved at a conserved site distinct from the calpain cleavage site. This cleavage is essential for IL-1α release and SASP establishment during cellular senescence.

Key findings:

- **Caspase-5** (human) or **caspase-11** (mouse) cleaves pro-IL-1α at a conserved site, generating fully active cytokine
- **CASP5 knockdown** in senescent IMR-90 and WI-38 fibroblasts reduces surface IL-1α, cleaved IL-1α release, and downstream [[IL-6]], [[IL-8]], [[CCL2]] — without affecting senescence arrest
- **Caspase-11** is required for SASP-driven [[Senescence Surveillance]] of senescent hepatocytes *in vivo*
- Importantly, **IL-1β is not released** from senescent cells despite transcriptional upregulation — only IL-1α processing occurs, independently of caspase-1/NLRP3/ASC
- The [[cGAS-STING Pathway|cGAS–STING]] pathway controls CASP5 expression upstream — cGAS knockdown reduces CASP5 expression, linking cytoplasmic chromatin sensing to IL-1α processing

This reveals a **noncanonical inflammasome–IL-1α–SASP axis** that operates independently of the canonical NLRP3/caspase-1 pathway in senescent cells.

## Dual Inflammasome Axis in Senescent Tissue

The noncanonical and canonical inflammasomes operate in a complementary, cell-type-specific manner:

| Feature | Noncanonical (senescent cells) | Canonical (macrophages) |
|---------|-------------------------------|------------------------|
| **Caspase** | Caspase-5 (human) / Caspase-11 (mouse) | Caspase-1 |
| **Sensor** | None (direct LPS binding) | NLRP3, AIM2, NLRC4 |
| **Primary substrate** | IL-1α, GSDMD | IL-1β, IL-18, GSDMD |
| **SASP relevance** | Drives IL-1α-dependent SASP | Amplifies inflammation via IL-1β |
| **Cell death** | Pyroptosis (via GSDMD) | Pyroptosis (via GSDMD) |

In the senescent tissue microenvironment:

1. **Senescent cell** activates noncanonical inflammasome (caspase-5/11) → IL-1α cleavage → surface translocation → SASP
2. **Neighbouring macrophage** encounters DAMPs from senescent cells → activates canonical NLRP3 inflammasome → IL-1β maturation → amplified inflammation
3. **Pyroptotic debris** from both cell types releases additional DAMPs, creating a feedforward inflammatory loop

## Regulation

- **IFN-γ**: Strongly induces caspase-5 expression; also inhibits IL-1α trafficking to the macrophage surface (Chan et al., 2020)
- **cGAS–STING**: Drives interferon signaling that controls caspase-5 transcription
- **Type I interferons**: Upregulate caspase-11 expression in mice
- **GBP/IRGB10**: Interferon-induced proteins that facilitate cytosolic LPS access
- **Negative regulators**: Caspase-11 auto-proteolysis at the interdomain linker; IRF8; TXNIP

## Clinical / Pathological Relevance

- **Sepsis**: Excessive noncanonical inflammasome activation drives lethal endotoxic shock (caspase-11 in mice; caspase-4/5 in humans)
- **Cellular senescence**: Caspase-5/11-mediated IL-1α cleavage drives SASP and chronic inflammation
- **Cancer**: CASP5 mutations are associated with cancer susceptibility; SASP-driven senescence surveillance depends on caspase-11 in vivo
- **Inflammatory bowel disease**: Noncanonical inflammasome activated by gut microbiota LPS
- **Atherosclerosis**: Noncanonical inflammasome in macrophages contributes to plaque inflammation
- **Neuroinflammation**: Caspase-11 activated in microglia during neurodegenerative conditions

## Documents

List of documents in the wiki that mention this entity

- [[_document_ - Senecent cell activate neighboring macrophages|Senescent cells activate neighbouring macrophages]]
  - Details how caspase-5/11 cleaves IL-1α at a conserved site in senescent cells, driving surface translocation and SASP; describes the dual noncanonical/canonical inflammasome axis in senescent tissue.

## Connections

- [[Inflammasome]] — The noncanonical inflammasome is a distinct pathway from the canonical NLRP3/caspase-1 inflammasome
- [[Caspase-5]] — Human noncanonical effector caspase; cleaves IL-1α and GSDMD
- [[Caspase-11]] — Mouse noncanonical effector caspase; cleaves IL-1α and GSDMD
- [[Caspase-4]] — Human noncanonical caspase; primary sensor for cytosolic LPS
- [[Caspase-1]] — Canonical caspase activated downstream of noncanonical inflammasome via GSDMD/K⁺ efflux → NLRP3
- [[IL-1α]] — Direct substrate of caspase-5/11; its cleavage is essential for SASP establishment
- [[Interleukin 1β|IL-1β]] — Processed by caspase-1 downstream of noncanonical inflammasome activation
- [[SASP|Senescence-Associated Secretory Phenotype]] — Noncanonical inflammasome-mediated IL-1α cleavage is the critical upstream trigger for SASP
- [[Senescent Cells]] — Activate noncanonical inflammasome to process IL-1α and establish SASP
- [[Senescence Surveillance]] — Caspase-11 is required for immune clearance of senescent hepatocytes in vivo
- [[cGAS-STING Pathway|cGAS–STING]] — Drives interferon-dependent caspase-5 expression upstream
- [[Macrophages]] — Recruit to senescent cells and activate canonical NLRP3 inflammasome, amplifying inflammation
- [[NF-κB|NF-κB]] — Transcriptional priming of pro-IL-1β; also regulates CASP5 expression
- [[NINJ1]] — Cooperates with GSDMD pores to execute pyroptotic membrane rupture
- [[Atherosclerosis]] — Noncanonical inflammasome contributes to chronic vascular inflammation

## Linking Summary

- New links added: [[Caspase-5]], [[Caspase-11]], [[Caspase-4]], [[Caspase-1]], [[IL-1α]], [[Interleukin 1β|IL-1β]], [[SASP|Senescence-Associated Secretory Phenotype]], [[Senescent Cells]], [[Senescence Surveillance]], [[cGAS-STING Pathway|cGAS–STING]], [[Macrophages]], [[NF-κB|NF-κB]], [[NINJ1]], [[Atherosclerosis]]
- Suggested new entity notes to create: [[Gasdermin D]], [[GBP]], [[IRGB10]]
- Strong connections to strengthen:
    - [[Noncanonical Inflammasome]] ↔ [[IL-1α]]
    - [[Noncanonical Inflammasome]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]
    - [[Noncanonical Inflammasome]] ↔ [[Caspase-5]]
    - [[Noncanonical Inflammasome]] ↔ [[Senescent Cells]]
    - [[Noncanonical Inflammasome]] ↔ [[Inflammasome]]
