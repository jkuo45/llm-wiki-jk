---
title: Acid Ceramidase
description: Lysosomal hydrolase that cleaves ceramide into sphingosine and free fatty acid; overexpressed 5-20x in senescent cells, driving ferroptotic sensitivity via the Lands cycle.
created: 2026-07-28
updated: 2026-07-28
tags:
  - enzyme
  - sphingolipid-metabolism
  - ferroptosis
  - senescence
  - senolytic
  - lysosomal
aliases:
  - ACase
  - aCDase
  - Acid ceramidase
  - ASAH1 protein
---

# Acid Ceramidase

## Overview

[[Acid Ceramidase]] (ACase, aCDase; encoded by [[ASAH1]]) is a lysosomal hydrolase that cleaves [[Ceramide]] into [[Sphingosine]] and a free fatty acid. It controls the ceramide ↔ [[Sphingosine-1-phosphate]] (S1P) rheostat — a metabolic switch governing cell fate between apoptosis and survival.

## Structure

- **Heterodimeric glycoprotein:** Catalytic α-subunit (~40 kDa) + protective β-subunit (~13 kDa), both derived from a single ASAH1 precursor by autocatalytic processing in the lysosome
- **Active site:** Nucleophilic cysteine (Cys143) within a Ser–Glu–His catalytic triad (NIT family amidase)
- **Crystal structure:** PDB 5U7Z (2.5 Å) — in the proenzyme, the catalytic center is buried; autocleavage exposes a hydrophobic channel leading to the active site
- **pH optimum:** ~4.5 (lysosomal lumen); at neutral pH, ACase can exhibit reverse ceramide synthase activity

## Catalytic Function

- **Primary reaction:** Ceramide + H₂O → Sphingosine + Free fatty acid
- **Substrate range:** Ceramides with varying fatty acyl chain lengths (C14–C26)
- **Cysteine amidase:** Activity blocked by thiol-reactive agents and covalent inhibitors targeting Cys143

## Mechanism in Ferroptosis

> [!info] Novel Regulatory Axis
> ACase overexpression in senescent cells creates a pro-ferroptotic membrane lipid profile **independent of GPX4/GSH and iron axes** — a completely unexpected role discovered in 2026 (Soriano-Castell et al., Cell Death Dis).

- ACase is overexpressed 5- to 20-fold in replicatively senescent cells
- Breaks down ceramide, **releasing free SFAs/MUFAs** that enter the [[Lands cycle]]
- Liberated fatty acids are exchanged into the sn-2 position of membrane phospholipids, **enriching PUFA-containing species**
- Membrane PUFA-PLs are the preferred substrates for iron-dependent [[Lipid Peroxidation]] — the execution step of [[Ferroptosis]]
- ACase knockdown or pharmacological inhibition ([[ARN14794]]) **reduces membrane PL-PUFA content** and protects cells from RSL3-induced ferroptosis

## Role in Senescence

> [!tip] The Pro-Survival Paradox
> Elevated ACase raises sphingosine/S1P (anti-apoptotic, helping senescent cells resist death via SCAP pathways). The same metabolic shift **inadvertently creates pro-ferroptotic vulnerability** as an unintended consequence.

- Senescence features persist after ACase KD: high p21 expression, high SA-β-gal activity, elevated IL-6/IL-8 secretion
- ACase inhibition is therefore a **senomorphic** strategy — it removes ferroptotic vulnerability without reversing the senescence arrest

## Paracrine Propagation via SASP

- SASP cytokines [[IL-6]] and [[IL-8]] induce ACase upregulation in neighboring proliferative cells
- This establishes a **SASP → ACase → pro-ferroptotic lipid profile** axis that spreads ferroptotic vulnerability through tissue

## Inhibitors

| Inhibitor | IC50 (hAC) | Key Features |
|-----------|------------|--------------|
| [[ARN14794]] | ~100 nM | Used in the Soriano-Castell 2026 ferroptosis study |
| [[ARN14974]] | 79 nM | Systemically active, brain-penetrant |
| [[Carmofur]] | 29 nM | Clinically approved (Japan); crosses BBB |

## Documents

- [[task_output_acid_ceramidase_27_July_2026|Acid Ceramidase in Ferroptosis & Cellular Senescence]]
  - Landmark 2026 study revealing ACase as a novel GPX4/GSH/iron-independent regulator of ferroptosis in senescent cells.

## Connections

- [[ASAH1]] — Gene encoding acid ceramidase
- [[Ceramide]] — Primary substrate; cleaved into sphingosine + free fatty acid
- [[Sphingosine]] — Product of ceramide hydrolysis
- [[Sphingosine-1-phosphate]] — Downstream signaling lipid; pro-survival
- [[Ferroptosis]] — ACase overexpression sensitizes senescent cells to ferroptotic death
- [[Senescence]] — ACase is overexpressed 5-20x in replicatively senescent cells
- [[SASP]] — IL-6/IL-8 induce paracrine ACase upregulation
- [[Lands cycle]] — Liberated fatty acids enter this membrane remodeling pathway
- [[Lipid Peroxidation]] — PUFA-enriched membranes are substrates for iron-dependent peroxidation
- [[GPX4]] — Classical ferroptosis regulator; ACase acts independently
- [[ARN14794]] — Pharmacological inhibitor used in the 2026 study
- [[Carmofur]] — Clinically approved ACase inhibitor (Japan)

## Linking Summary

- New links added: [[ASAH1]], [[Ceramide]], [[Sphingosine]], [[Sphingosine-1-phosphate]], [[Ferroptosis]], [[Senescence]], [[SASP]], [[Lands cycle]], [[Lipid Peroxidation]], [[GPX4]], [[ARN14794]], [[Carmofur]]
- Suggested new entity notes to create: [[ARN14974]], [[Farber disease]]
- Strong connections to strengthen:
    - [[Acid Ceramidase]] ↔ [[Ferroptosis]]
    - [[Acid Ceramidase]] ↔ [[Senescence]]
    - [[Acid Ceramidase]] ↔ [[Ceramide]]
