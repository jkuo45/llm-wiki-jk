---
type: entity
category: protein
aliases:
  - Epac1
  - RAPGEF3
  - Exchange Protein Directly Activated by cAMP 1
  - cAMP-GEFI
  - Rap Guanine Nucleotide Exchange Factor 3
database_ids:
  uniprot: O95398
  hgnc: HGNC:16729
relations:
  - predicate: activated_by
    target: "[[cAMP]]"
    sources:
      - Park 2012
  - predicate: triggers
    target: "[[Ca2+]] release"
    sources:
      - Park 2012
  - predicate: upstream_of
    target: "[[AMPK]]"
    sources:
      - Park 2012
created: 2026-07-04
updated: 2026-07-04
---

# Exchange Protein Directly Activated by cAMP 1 (Epac1/RAPGEF3)

**Exchange Protein Directly Activated by cAMP 1 (Epac1/RAPGEF3)** is a guanine nucleotide exchange factor (GEF) for the small [[GTPase]] Rap1 and Rap2. Unlike [[PKA]], Epac1 is activated directly by [[cAMP]] binding without requiring the regulatory subunit dissociation characteristic of PKA.

## Signaling Mechanism

Elevated [[cAMP]] from [[PDE4]] inhibition by [[Resveratrol]] binds Epac1, inducing a conformational change that exposes the catalytic GEF domain. Activated Epac1 triggers [[Ca2+]] release from the [[Endoplasmic Reticulum]] into the cytoplasm via [[IP3 receptors]] and ryanodine receptors. This cytoplasmic Ca2+ surge activates [[CaMKKβ]], which phosphorylates and activates [[AMPK]].

## Physiological Role

The Epac1→Ca2+→CaMKKβ→AMPK axis connects [[cAMP]] levels to cellular energy sensing. This pathway is essential for [[Resveratrol]]'s metabolic effects: PDE4 inhibition → ↑cAMP → Epac1 → Ca2+ → CaMKKβ → AMPK → [[NAMPT]] → ↑[[NAD+]] → [[SIRT1]] activation. Epac1 also regulates [[Insulin Secretion]], [[Cardiac Hypertrophy]], [[Vascular Permeability]], and [[Inflammation]].

## Connections

- [[cAMP]] — Direct activator of Epac1 via high-affinity cyclic nucleotide binding
- [[PDE4]] — PDE4 inhibition by resveratrol raises cAMP, activating Epac1
- [[Resveratrol]] — Upstream trigger through PDE4 inhibition and cAMP elevation
- [[CaMKKβ]] — Activated by Epac1-mediated Ca2+ release; phosphorylates AMPK
- [[AMPK]] — Downstream target of the Epac1→Ca2+→CaMKKβ cascade
- [[NAMPT]] — AMPK upregulates NAMPT, increasing NAD+ bioavailability
- [[NAD+]] — SIRT1 substrate; elevated via the Epac1→AMPK→NAMPT axis
- [[SIRT1]] — Ultimately activated by resveratrol→PDE4→cAMP→Epac1 pathway

## Linking Summary

- New links added: [[Epac1]], [[RAPGEF3]], [[GTPase]], [[Rap1]], [[IP3 receptors]], [[Endoplasmic Reticulum]], [[Insulin Secretion]], [[Cardiac Hypertrophy]], [[Vascular Permeability]]
- Suggested new entity notes to create: [[Rap1 Signaling]], [[IP3 Receptor]]
- Strong connections to strengthen: [[cAMP]] ↔ [[Epac1]], [[Epac1]] ↔ [[CaMKKβ]], [[Resveratrol]] ↔ [[Epac1]]
