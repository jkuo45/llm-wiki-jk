---
type: entity
category: protein
aliases:
  - eNOS
  - NOS3
  - Endothelial NOS
  - Constitutive NOS
database_ids:
  uniprot: P29474
  hgnc: HGNC:7876
relations:
  - predicate: deacetylates_and_activates
    target: "[[eNOS]]"
    sources:
      - Mattagajasingh 2012
  - predicate: upregulates_expression
    target: "[[eNOS]]"
    sources:
      - Xia 2013
  - predicate: promotes
    target: "[[Nitric Oxide]]"
    sources:
      - Mattagajasingh 2012
created: 2026-07-04
updated: 2026-07-04
---

# Endothelial Nitric Oxide Synthase (eNOS)

**Endothelial Nitric Oxide Synthase (eNOS/NOS3)** is a constitutively expressed enzyme that catalyzes the conversion of L-arginine to [[Nitric Oxide]] (NO) in the vascular endothelium. NO produced by eNOS diffuses to underlying vascular smooth muscle, activating soluble guanylyl cyclase and promoting [[Vasodilation]].

## SIRT1 Regulation

[[SIRT1]] directly deacetylates eNOS at multiple lysine residues (including K496 and K506), enhancing its enzymatic activity. Deacetylation promotes eNOS homodimerization and increases its affinity for calmodulin and [[NAD+]] cofactors. [[Resveratrol]]-activated SIRT1 potently increases eNOS expression and NO output, a mechanism central to resveratrol's cardioprotective and vasodilatory effects.

## Physiological Role

eNOS is highly expressed in endothelial cells lining the vasculature. Its NO product regulates vascular tone, inhibits platelet aggregation, suppresses leukocyte adhesion, and modulates [[Mitochondrial Biogenesis]] via [[PGC-1α]] activation. eNOS uncoupling — where the enzyme produces [[Superoxide]] instead of NO — is a hallmark of endothelial dysfunction in [[Atherosclerosis]], [[Hypertension]], and [[Diabetes]].

## Connections

- [[SIRT1]] — Deacetylates and activates eNOS, promoting NO production and vasodilation
- [[Resveratrol]] — Activates SIRT1, which upregulates eNOS expression and activity
- [[NAD+]] — Essential cofactor for both SIRT1 deacetylase activity and eNOS catalysis
- [[PGC-1α]] — NO from eNOS stimulates PGC-1α, driving mitochondrial biogenesis
- [[Nitric Oxide]] — Primary enzymatic product; key vasodilatory signaling molecule
- [[AMPK]] — Phosphorylates eNOS at Ser1177, activating it in parallel to SIRT1

## Linking Summary

- New links added: [[eNOS]], [[Nitric Oxide]], [[Vasodilation]], [[Mitochondrial Biogenesis]], [[Superoxide]], [[Atherosclerosis]], [[Hypertension]], [[Diabetes]]
- Suggested new entity notes to create: [[Vasodilation]], [[Nitric Oxide Signaling]]
- Strong connections to strengthen: [[SIRT1]] ↔ [[eNOS]], [[Resveratrol]] ↔ [[eNOS]]
