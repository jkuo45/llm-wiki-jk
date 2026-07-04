---
type: entity
category: chemical
aliases:
  - Suramin
database_ids:
  pubchem: 5361
relations:
  - predicate: inhibits
    target: "[[SIRT1]]"
    sources:
      - s41392-022-01257-8
  - predicate: inhibits
    target: "[[SIRT2]]"
    sources:
      - s41392-022-01257-8
  - predicate: inhibits
    target: "[[SIRT5]]"
    sources:
      - s41392-022-01257-8
created: 2026-07-03
updated: 2026-07-03
---

# Suramin

**Suramin** is a large polyanionic urea derivative originally developed in the early 20th century as an antiparasitic drug for the treatment of African trypanosomiasis (sleeping sickness). Beyond its classic anti-protozoal and purinergic antagonist properties, suramin is recognized as a highly potent **pan-sirtuin inhibitor** targeting **[[SIRT1]]**, **[[SIRT2]]**, and **[[SIRT5]]**.

---

## Chemical Properties & Classification

- **Class**: Polyanionic urea derivative; naphthylamine derivative.
- **Target Selectivity**: Potent, multi-target sirtuin inhibitor:
  - **SIRT1**: $IC_{50} = 297\ \text{nM}$ ($0.297\ \mu\text{M}$)
  - **SIRT2**: $IC_{50} = 1150\ \text{nM}$ ($1.15\ \mu\text{M}$)
  - **SIRT5**: $IC_{50} = 22\ \mu\text{M}$

---

## Pharmacodynamics & Pharmacokinetics

### Mechanism of Action
Suramin features multiple highly charged sulfonic acid groups that enable it to bind directly to the basic channels of sirtuins. It competitively interferes with the binding of both the NAD⁺ co-substrate and the peptide substrate, locking the enzyme in an inactive state.

### Physiological & Pathological Impacts
- **Protection Against Disc Degeneration**: In spinal models, suramin has been shown to protect against intervertebral disc degeneration (IDD). It exerts these beneficial effects by directly inhibiting the inflammatory NF-$\kappa$B signaling pathway.
- **Mitochondrial Perturbation**: Suramin treatment perturbs mitochondrial membrane potential and significantly reduces cellular ATP levels in rapidly dividing leukemia and solid tumor cells, suppressing their bioenergetic survival.
- **Antiviral and Anticancer Action**: Due to its ability to disrupt multiple sirtuins (especially the nuclear SIRT1 and mitochondrial/cytosolic SIRT2/5), suramin demonstrates broad-spectrum antiviral and cytostatic anticancer properties in a variety of disease models.

---

## Applications

- **Historical & Infectious Diseases**: Standard-of-care drug for trypanosomiasis and river blindness (onchocerciasis).
- **Oncology & Epigenetics**: Studied as a therapeutic agent to block sirtuin-mediated cancer cell survival.
- **Spinal Degeneration Models**: Utilized in research surrounding intervertebral disc health and anti-inflammatory therapies.

---

## Connections & Related Entities

- **[[SIRT1]]**, **[[SIRT2]]**, & **[[SIRT5]]** — direct molecular sirtuin targets.
- **[[notes/_link/NFKB|NF-κB]]** — pathway inhibited by suramin to alleviate spinal disc degeneration.
- **[[Cancer]]** — disease context where suramin's anti-sirtuin and mitochondrial effects are exploited.

---

## Linking Summary

- **New Links Added**: [[SIRT1]], [[SIRT2]], [[SIRT5]], [[notes/_link/NFKB]], [[Cancer]]
- **Suggested New Notes to Create**: [[Trypanosomiasis]], [[Intervertebral Disc Degeneration]]
- **Strong Connections to Strengthen**: [[Suramin]] ↔ [[SIRT1]], [[Suramin]] ↔ [[SIRT5]]
