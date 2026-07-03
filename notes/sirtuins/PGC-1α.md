---
type: entity
category: protein
aliases:
  - PGC-1α
  - PPARGC1A
  - peroxisome proliferator-activated receptor gamma coactivator 1-alpha
  - PGC-1 alpha
database_ids:
  uniprot: Q9UBK2
  hgnc: HGNC:9237
relations:
  - predicate: deacetylated_by
    target: "[[notes/sirtuins/SIRT1]]"
    sources:
      - PMID:15744310
  - predicate: activated_by
    target: "[[notes/sirtuins/SIRT1]]"
    sources:
      - PMID:15744310
  - predicate: activated_by
    target: "[[Resveratrol]]"
    sources:
      - PMID:17112576
  - predicate: regulates
    target: "[[Mitochondrial Biogenesis]]"
    sources:
      - PMID:16618798
  - predicate: neuroprotects_against
    target: "[[Neurodegeneration]]"
    sources:
      - PMID:17055439
  - predicate: expressed_in
    target: "[[Brown Adipose Tissue]]"
    sources:
      - PMID:15653680
created: 02_July_2026 08:57 PM PDT
updated: 02_July_2026 08:57 PM PDT
---

# PGC-1α

**PGC-1α** (PPAR-γ Co-activator 1α; gene name *PPARGC1A*) is a **master transcriptional coactivator** that acts as a central regulator of **mitochondrial biogenesis**, **oxidative phosphorylation**, and **energy metabolism**. It is a key downstream effector of [[notes/sirtuins/SIRT1]] in multiple tissues, mediating many of the metabolic benefits associated with [[notes/_link/Caloric Restriction]] and [[Resveratrol]] treatment.

## Regulation by Sirtuins

[[notes/sirtuins/SIRT1]] **deacetylates PGC-1α**, which activates its transcriptional co-activator function. This deacetylation is a critical node linking cellular NAD⁺ status (sensed by [[notes/sirtuins/SIRT1]]) to mitochondrial function:

- **Hepatic glucose metabolism**: SIRT1-mediated PGC-1α deacetylation represses glycolysis and **increases hepatic glucose output** (gluconeogenesis).
- **Mitochondrial biogenesis**: SIRT1→PGC-1α activation induces expression of **oxidative phosphorylation genes** and promotes overall mitochondrial number and function.
- **Brown adipose tissue (BAT)**: [[notes/sirtuins/SIRT3]] promotes PGC-1α expression in BAT during cold exposure, contributing to thermogenesis.

## Metabolic Functions

PGC-1α regulates a broad metabolic gene programme including:
- **Oxidative phosphorylation gene expression** — promotes mitochondrial ATP production
- **Fatty acid oxidation** — particularly in skeletal muscle
- **Gluconeogenesis** — hepatic glucose production during fasting/CR
- **Mitochondrial biogenesis** — increasing mitochondrial number in energy-demanding tissues

## Neuroprotection

PGC-1α is a critical neuroprotective factor:
- **PGC-1α null mice** are significantly more sensitive to neuronal loss by reactive oxygen species-generating compounds:
  - **MPTP** (disrupts the substantia nigra)
  - **Kainic acid** (disrupts the hippocampus)
- Increasing PGC-1α levels substantially protects neurons from **oxidative-stress-induced death**.
- Given that mitochondrial dysfunction underlies many neurodegenerative diseases, SIRT1's regulation of PGC-1α activity is proposed as a primary mechanism of SIRT1-mediated **neuroprotection**.

## Resveratrol Studies

Both landmark in vivo resveratrol studies confirmed PGC-1α activation:
- **Baur et al. (2006)**: Resveratrol (22.4 mg/kg) in obese mice increased SIRT1 and PGC-1α activity, with increased mitochondria and improved metabolic profile.
- **Lagouge et al. (2006)**: Resveratrol (400 mg/kg) improved mitochondrial function and protected against metabolic disease by activating SIRT1 and PGC-1α.

## Caloric Restriction and Energy Sensing

PGC-1α integrates [[notes/_link/Caloric Restriction]] signals:
- CR increases [[NAD+]] → activates [[notes/sirtuins/SIRT1]] → deacetylates PGC-1α → triggers mitochondrial adaptation programme.
- This axis is proposed to underlie CR-mediated metabolic improvements in mammals.

## Connections

- [[notes/sirtuins/SIRT1]] — directly deacetylates and activates PGC-1α; primary regulatory relationship
- [[notes/sirtuins/SIRT3]] — promotes PGC-1α expression in brown adipose tissue
- [[Resveratrol]] — activates PGC-1α via SIRT1 stimulation *in vivo*
- [[notes/_link/Caloric Restriction]] — CR activates PGC-1α via the SIRT1 axis
- [[NAD+]] — elevated NAD⁺ → SIRT1 activation → PGC-1α deacetylation
- [[Mitochondrial Biogenesis]] — PGC-1α is the master regulator
- [[Neurodegeneration]] — PGC-1α loss sensitises neurons to oxidative damage (MPTP, kainic acid)

## Linking Summary

- New links added: [[notes/sirtuins/SIRT1]], [[notes/sirtuins/SIRT3]], [[Resveratrol]], [[notes/_link/Caloric Restriction]], [[NAD+]], [[Mitochondrial Biogenesis]]
- Suggested new entity notes to create: [[Mitochondrial Biogenesis]], [[MPTP]], [[Oxidative Phosphorylation]]
- Strong connections to strengthen: [[PGC-1α]] ↔ [[notes/sirtuins/SIRT1]], [[PGC-1α]] ↔ [[notes/_link/Caloric Restriction]], [[PGC-1α]] ↔ [[Neurodegeneration]]
