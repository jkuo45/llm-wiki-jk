---
title: Manganese Superoxide Dismutase (MnSOD/SOD2)
description: Manganese Superoxide Dismutase (MnSOD/SOD2) is the primary mitochondrial antioxidant enzyme responsible for dismutating Superoxide (O₂⁻) to hydrogen peroxide (H₂O₂) and oxygen. It is encoded by the SOD2 gene and imported into the mitochondrial matrix.
created: 2026-07-04
updated: 2026-07-16
tags:
  - protein
  - antioxidant
  - oxidative-stress
  - acetylation
  - sirtuin-substrate
  - SOD2
  - Manganese Superoxide Dismutase
  - Mn-SOD
  - MnSOD
  - MnSOD
---

# Manganese Superoxide Dismutase (MnSOD/SOD2)

**Manganese Superoxide Dismutase (MnSOD/SOD2)** is the primary mitochondrial antioxidant enzyme responsible for dismutating [[Superoxide]] (O₂⁻) to hydrogen peroxide (H₂O₂) and oxygen. It is encoded by the nuclear [[SOD2]] gene and imported into the [[Mitochondria]] matrix, where it forms a homotetrameric complex essential for [[Mitochondrial]] redox homeostasis. By intercepting superoxide at its site of generation in the electron transport chain, MnSOD constitutes the first line of defense against mitochondrial [[Oxidative Stress]] and is a central node through which [[Sirtuins]] regulate longevity.

## Structure and Mechanism

MnSOD is a ~25 kDa nuclear-encoded protein synthesized as a precursor with an N-terminal mitochondrial targeting sequence that is cleaved upon import into the matrix. The mature enzyme assembles into a homotetramer, each monomer binding one manganese ion at the active site. The catalytic cycle alternates between Mn³⁺ and Mn²⁺ oxidation states: superoxide reduces Mn³⁺ to Mn²⁺ while being oxidized to O₂, and a second superoxide oxidizes Mn²⁺ back to Mn³⁺ while being reduced to H₂O₂. The H₂O₂ product is then detoxified by [[Catalase]] and peroxiredoxins/glutathione peroxidases. Because superoxide itself is a poor signaling molecule but a potent source of downstream radicals (via [[Fenton Reaction|Fenton chemistry]] generating hydroxyl radical), MnSOD activity determines the redox tone of the matrix.

A ring of **11 positively charged residues** surrounds the active-site channel, including [[Lys68]]. This positive charge is essential for attracting the negatively charged superoxide substrate into the catalytic core (Borgstahl et al. 1992).

## Lysine Acetylation Sites

MnSOD contains multiple reversible acetyl-lysine residues that regulate its enzymatic activity. Four sites have been identified in both humans and mice by mass spectrometry: **K53, [[Lys68]], K89, and K122** (with additional sites K130, K154, K194, K221 reported in some studies). These lysines are evolutionarily conserved across species from yeast to mammals.

### Lys68 — The Human Primary Site

[[Lys68]] is the **primary acetylation site in human MnSOD** (Chen et al. 2011, EMBO Reports):

- Acetylation at [[Lys68]] **negatively regulates** MnSOD activity — the K68Q acetylation-mimetic mutant showed ~60% decreased specific activity
- [[Lys68]] is part of the ring of positively charged residues surrounding the active-site channel. Acetylation neutralizes the positive charge, reducing affinity for both the Mn³⁺ cofactor and superoxide substrate
- **iTRAQ mass spectrometry**: [[SIRT3]] overexpression decreased [[Lys68]]-acetylated MnSOD from 54.2% → 35.7%; SIRT3 knockdown increased it to **87.7%**
- K68R (deacetylation-mimic) did **not** increase activity like K122R — suggesting K68 has a structural role beyond just acetylation status

> [!warning] The [[Lys68]] peroxidase switch
> [[Lys68]]-acetylated MnSOD **destabilizes the homotetramer**, shifting it to a **monomeric form**. The monomer gains **40-fold increased peroxidase activity** (instead of dismutase activity). This means [[Lys68]]-Ac converts MnSOD from a superoxide scavenger into a **pro-oxidant** — generating H₂O₂ via peroxidase chemistry rather than clearing superoxide. This drives HIF2α stabilization → stemness genes (Oct4, Sox2, Nanog) → breast cancer invasiveness (Zhu et al. 2019, Nature Communications).

**Disease associations of [[Lys68]]-Ac:**

- **Breast cancer**: [[Lys68]]-Ac is enriched in luminal B subtype; promotes tamoxifen, cisplatin, and doxorubicin resistance via mitochondrial metabolic reprogramming (Gao et al. 2021)
- **Stemness reprogramming**: [[Lys68]]-Ac → mtROS → HIF2α → Oct4/Sox2/Nanog → cancer stem cell phenotype (He et al. 2019, PNAS)
- **Hypertension**: SOD2-K68R deacetylation-mimetic mice were **completely protected** from angiotensin II-induced hypertension — no increase in mitochondrial superoxide, preserved endothelial NO, protected vasorelaxation (Dikalova et al. 2024, AJP Heart)

### Lys122 — The Mouse Primary Site

[[Lys122]] is the **primary acetylation site in mouse MnSOD** (Tao et al. 2010, Molecular Cell):

- K122 is **evolutionarily conserved** across species (yeast, Drosophila, mouse, rat, bovine)
- K122R (deacetylation-mimic) **increased MnSOD activity** and **decreased mitochondrial superoxide**
- K122Q (acetylation-mimic) had the **opposite effect** — decreased activity, increased superoxide
- In Sirt3⁻/⁻ mice, K122 was **hyperacetylated**, MnSOD activity was decreased (but protein levels unchanged)
- 36-hour fasting deacetylated K122, linking it to **nutrient sensing**
- K122R prevented **oncogene (Ras)-indortalization** of Sirt3⁻/⁻ MEFs and inhibited IR-induced genomic instability
- [[SIRT3]] co-expression increased MnSOD activity in wild-type but had **no effect** on K122R or K122Q mutants — confirming K122 is the direct SIRT3 target

### The Species Puzzle

Three laboratories published simultaneously in 2010 identifying different "primary" acetylation sites:

- **Chen lab**: [[Lys68]] (human cells)
- **Tao/Gius lab**: K122 (mouse cells)
- **Qiu/Chen lab**: K53 and K89 (mouse cells)

This likely reflects species-specific differences in acetylation patterns, cellular context, and methodological approaches. Recent work suggests **all sites contribute** — MnSOD contains multiple reversible acetyl-lysines that are differentially regulated by cellular context, stress type, and metabolic state.

### [[Lys68]] vs K122 — Functional Comparison

| Feature | [[Lys68]] | K122 |
|---------|-----|------|
| **Species prominence** | Human (primary) | Mouse (primary) |
| **Structural location** | Active-site channel ring (α1/α2 helices) | Tetramer interface |
| **Acetylation effect** | Destabilizes tetramer → monomer → peroxidase gain | Reduces dismutase activity directly |
| **Functional switch** | Dismutase → peroxidase (pro-oxidant) | Active → inactive (loss of function) |
| **Disease link** | Cancer stemness, hypertension, drug resistance | Cancer susceptibility, IR-induced damage |
| **Physiological trigger** | Ethanol metabolism, nutrient status | Fasting, ionizing radiation |

### The Goldilocks Problem

[[Lys68]] must cycle between acetylated and deacetylated states. Too much acetylation → cancer, drug resistance, hypertension. Too little → cardiomyopathy, senescence. MnSOD K68R knock-in mice (constitutively deacetylated, always "on") developed **dilated cardiomyopathy** at 4 months with increased cellular senescence and lipid peroxidation (Schell et al. 2025). Any therapy must restore **dynamic cycling**, not lock the switch.

## Sirtuin Regulation

MnSOD is a paradigm of sirtuin-mediated metabolic control:

- [[SIRT3]] deacetylates MnSOD at Lys68 and Lys122, dramatically increasing its ROS-scavenging activity. This deacetylation is enhanced by [[Honokiol]], a small-molecule SIRT3 activator.
- [[SIRT6]] upregulates MnSOD expression through [[AMPK]] activation.
- [[SIRT1]] contributes indirectly via [[FOXO3a]]-dependent transcriptional upregulation of SOD2.
- Conversely, [[SIRT4]] inhibits MnSOD activity through ADP-ribosylation, representing a counter-regulatory mechanism within the sirtuin network.

The opposing effects of SIRT3 and SIRT4 create the **[[SIRT3/SIRT4 Ratio]]**, a molecular redox dial that determines MnSOD activity and the mitochondrial [[Hormetic Window]].

## Therapeutic Targeting of [[Lys68]] Acetylation

No direct [[Lys68]]-targeting drug exists. The primary therapeutic strategy is **indirect — activating SIRT3** to restore deacetylation capacity:

**SIRT3 Activators (preclinical):**

| Compound | Status | Mechanism | Key Finding |
|----------|--------|-----------|-------------|
| [[Honokiol]] | Preclinical | SIRT3 activator | Reverses cardiac hypertrophy; deacetylates MnSOD [[Lys68]]/K122 |
| C12 | Preclinical (Lu et al. 2017) | Direct SIRT3 activator | Crystal structure solved (PDB: 5gxo); promotes [[Lys68]] deacetylation |
| 2-APQC | Preclinical (Fu et al. 2024) | Structure-based SIRT3 activator | Reduced [[Lys68]] and K122 acetylation in cardiomyocytes |
| SKLB-11A | Preclinical (2025) | Allosteric SIRT3 activator | First-in-class; submicromolar affinity; prevents cardiotoxicity |
| SZC-6 | Preclinical (Liu et al. 2025) | Coumarin-based allosteric activator | Stronger than C12; protects against diabetic kidney disease |
| DHP compounds | Tool compounds | 1,4-dihydropyridine-based | ~5-fold SIRT3 activation; confirmed [[Lys68]] deacetylation in cells |

> [!note] Clinical status
> No SIRT3-targeting molecule has yet entered clinical trials (PMC12917608, 2025). The most promising near-term path is allosteric SIRT3 activators like SZC-6 or SKLB-11A, which restore dynamic [[Lys68]] cycling rather than locking the switch.

**Other approaches:**

- **Caloric restriction / fasting**: 36h fasting deacetylates [[Lys68]] (Tao et al. 2010) — validated but adherence-limited
- **GC4419** (Galera Therapeutics): SOD mimetic that chemically replaces MnSOD function; was in Phase III trials for radiation-induced esophagitis — bypasses acetylation entirely
- **NAD+ precursors** ([[Nicotinamide Riboside]], [[Nicotinamide Mononucleotide]]): Fuel SIRT3 activity; indirect [[Lys68]] deacetylation

## Physiological and Pathological Role

MnSOD is a frontline defense against mitochondrial [[Oxidative Stress]]. Loss of MnSOD is embryonic lethal in mice; heterozygous knockout models show increased [[DNA Damage]], [[Apoptosis]], and susceptibility to [[Cancer]], [[Neurodegeneration]], and [[Cardiovascular Disease]]. The accumulation of unrecycled superoxide damages mitochondrial DNA, lipids (lipid peroxidation), and proteins, accelerating cellular senescence. Activation of MnSOD by sirtuins, particularly SIRT3, is a key mechanism underlying [[Caloric Restriction]] and [[Exercise]]-induced longevity benefits, and is thought to contribute to the healthspan extension observed in multiple longevity interventions.

## Clinical Relevance

MnSOD polymorphisms (notably the Ala16Val variant) modulate mitochondrial import efficiency and are associated with cancer risk and neurodegenerative phenotypes. Therapeutics that boost SIRT3 activity — [[Honokiol]], [[NAD+]] precursors, [[Resveratrol]] — represent strategies to enhance MnSOD function in ageing and metabolic disease. MnSOD therefore bridges the [[NAD+]]–sirtuin axis to the core oxidative-balance machinery of the cell.

## Documents

List of documents that mention this entity

  - [[_document_ - sirtuins (resveratrol), gemini|sirtuins (resveratrol), gemini]]
    - Mentioned in this document

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - SIRT6 also promoted AMPK expression, thus upregulating antioxidant-encoding gene expression of MnSOD and Catalase, thereby suppressing oxidative stress.

  - [[_document_ - MRR - mitohormesis|mitohormesis]]
    - The Mitohormetic Redox-Relay uses carbazochrome (adrenochrome derivative) to generate controlled ROS pulses that are processed by MnSOD/SOD2, linking adrenochrome metabolism to sirtuin-mediated antioxidant defense.

## Connections

- [[SIRT3]] — Directly deacetylates MnSOD at [[Lys68]]/K122, boosting enzymatic activity
- [[SIRT1]] — Upregulates SOD2 transcription via FOXO3a signaling
- [[SIRT6]] — Upregulates MnSOD via AMPK-dependent pathway
- [[SIRT4]] — Inhibits MnSOD activity via ADP-ribosylation
- [[SIRT3/SIRT4 Ratio]] — Determines MnSOD activity and mitochondrial hormetic window
- [[Resveratrol]] — Activates SIRT1/FOXO3a axis to upregulate MnSOD
- [[Honokiol]] — Small molecule activator of SIRT3, enhancing MnSOD deacetylation
- [[AMPK]] — Mediates SIRT6-driven MnSOD upregulation
- [[FOXO3a]] — Transcription factor mediating SIRT1-dependent SOD2 expression
- [[Oxidative Stress]] — Primary protection against, via superoxide dismutation
- [[Mitochondria]] — Primary subcellular localization and site of action
- [[Adrenochrome]] — Redox cycling of adrenochrome generates superoxide that MnSOD dismutates; links to Mitohormetic Redox-Relay

## Linking Summary
- New links added: [[SOD2]], [[Catalase]], [[Fenton Reaction]], [[DNA Damage]], [[Apoptosis]], [[Neurodegeneration]], [[Cardiovascular Disease]], [[Caloric Restriction]], [[Exercise]], [[FOXO3a]], [[Lys68]], [[Lys122]], [[Adrenochrome]]
- Suggested new entity notes to create: [[Mitochondrial Antioxidant Defense]], [[Superoxide]], [[SIRT3/SIRT4 Ratio]]
- Strong connections to strengthen: [[SIRT3]] ↔ [[MnSOD]], [[SIRT1]]/[[FOXO3a]] ↔ [[MnSOD]], [[SIRT3/SIRT4 Ratio]] ↔ [[MnSOD]], [[Adrenochrome]] ↔ [[MnSOD]]
