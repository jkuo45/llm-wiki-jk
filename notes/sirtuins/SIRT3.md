---
type: entity
category: protein
aliases:
  - Sirtuin 3
  - mitochondrial sirtuin 3
  - SIRT3 deacetylase
database_ids:
  uniprot: Q9NTG7
  hgnc: HGNC:14931
relations:
  - predicate: deacetylates
    target: "[[AceCS2]]"
    sources:
      - PMID:16788062
  - predicate: regulates
    target: "[[Mitochondrial Biogenesis]]"
    sources:
      - PMID:15653680
  - predicate: associated_with
    target: "[[Longevity]]"
    sources:
      - PMID:16284263
  - predicate: expressed_in
    target: "[[Brown Adipose Tissue]]"
    sources:
      - PMID:15653680
  - predicate: associated_with
    target: "[[Breast Cancer]]"
    sources:
      - PMID:17003781
created: 2026-07-02
updated: 2026-07-02
---

# SIRT3

**SIRT3** (Sirtuin 3) is a **mitochondrial sirtuin** classified in phylogenetic **Class Ib** alongside yeast Hst2, [[SIRT2]], and sirtuins from other fungi and protozoa. It is the primary deacetylase in the mitochondrial matrix, playing key roles in energy metabolism, thermogenesis, mitochondrial biogenesis, and reactive oxygen species (ROS) regulation.

## Enzymatic Activity

SIRT3 exhibits both:

- **Robust NAD⁺-dependent deacetylase activity** (primary activity; see [[NAD+]])
- **Mono-ADP-ribosyl transferase activity** (detected)

Key substrate: **[[AceCS2]]** (acetyl-CoA synthetase 2, mitochondrial isoform) — deacetylation activates this enzyme, regulating carbon entry into the tricarboxylic acid (TCA) cycle for ATP production.

## Subcellular Localisation

**Mitochondrial** — along with [[SIRT4]] and [[SIRT5]], SIRT3 is one of the three mitochondrial sirtuins. It is localised specifically to the **mitochondrial matrix**.

## Metabolic Functions

### AceCS2 Activation

SIRT3 deacetylates and thereby activates **[[AceCS2]]**, the mitochondrial isoform of acetyl-CoA synthetase. Given that SIRT3 (like [[SIRT1]]) is induced by [[notes/_link/Caloric Restriction]], this suggests that during food limitation, SIRT3 regulates the rate of fatty acid synthesis and the proportion of carbon shuttled into the TCA cycle for ATP production.

### Mitochondrial Biogenesis and Thermogenesis

SIRT3 is induced in **brown adipose tissue (BAT)** during cold exposure, where it promotes expression of mitochondrial genes including:

- **UCP1** (uncoupling protein 1, critical for thermogenesis)
- **[[PGC-1α]]** (master regulator of mitochondrial biogenesis)
- **Cytochrome c oxidase subunits II and IV** (COX II and COX IV)
- **ATP synthase**

The BAT of obese mice has **less SIRT3 protein** and decreased expression of mitochondrial proteins, implicating SIRT3 in metabolic dysregulation in obesity.

### ROS Regulation

SIRT3 **decreases mitochondrial membrane potential** and **reduces reactive oxygen species production** while **increasing cellular respiration**.

## Human Longevity Association

A variant of the _SIRT3_ gene — specifically in an **enhancer within intron 5** — correlates with **male lifespan beyond 90 years**, directly implicating SIRT3 in human longevity.

## Cancer

SIRT3 (along with [[SIRT7]]) is highly transcribed in **lymph-node positive breast biopsies** (a stage where cancer has spread to lymph nodes), suggesting a potential role in breast cancer progression.

## Ion Channel Regulation

SIRT3, by producing [[OAADPr]], may regulate the **TRPM2** ion channel alongside [[SIRT2]]. Decreasing SIRT3 expression reduces OAADPr-mediated cell death.

## Connections

- [[SIRT1]] — cytoplasmic counterpart; SIRT1 deacetylates AceCS1 (cytoplasmic) while SIRT3 deacetylates AceCS2 (mitochondrial)
- [[SIRT2]] — same phylogenetic class; both produce OAADPr and regulate TRPM2
- [[SIRT4]] — fellow mitochondrial sirtuin; different primary enzymatic activity (ADP-ribosylation)
- [[SIRT5]] — fellow mitochondrial sirtuin
- [[NAD+]] — obligatory co-substrate
- [[OAADPr]] — by-product of deacetylation
- [[notes/_link/Caloric Restriction]] — SIRT3 is induced by CR; mediates metabolic adaptations
- [[PGC-1α]] — target gene; SIRT3 promotes PGC-1α expression in BAT
- [[Longevity]] — SIRT3 intron 5 enhancer variant associated with male lifespan >90 years

## Linking Summary

- New links added: [[NAD+]], [[OAADPr]], [[notes/_link/Caloric Restriction]], [[PGC-1α]], [[SIRT1]], [[SIRT2]], [[SIRT4]], [[SIRT5]], [[Longevity]], [[TRPM2]], [[AceCS2]]
- Suggested new entity notes to create: [[UCP1]], [[Brown Adipose Tissue (BAT)]]
- Strong connections to strengthen: [[SIRT3]] ↔ [[notes/_link/Caloric Restriction]], [[SIRT3]] ↔ [[Longevity]], [[SIRT3]] ↔ [[AceCS2]]

# SIRT3

SIRT3 is a major mitochondrial sirtuin with both deacetylase and mono-ADP-ribosyl transferase activities. It regulates mitochondrial metabolism, thermogenesis, and helps prevent oxidative stress by suppressing [[Reactive Oxygen Species]]. It acts as a tumor suppressor by destabilizing [[HIF-1α]].

### Linking Summary:

- New links added: [[NAD+]], [[HIF-1α]], [[Reactive Oxygen Species]]
- Suggested new entity notes to create:
- Strong connections to strengthen: [[SIRT3]] ↔ [[HIF-1α]], [[SIRT3]] ↔ [[Reactive Oxygen Species]], [[SIRT3]] ↔ [[NAD+]]
