---
title: Manganese Superoxide Dismutase (MnSOD/SOD2)
description: Manganese Superoxide Dismutase (MnSOD/SOD2) is the primary mitochondrial antioxidant enzyme responsible for dismutating Superoxide (O₂⁻) to hydrogen peroxide (H₂O₂) and oxygen. It is encoded by the SOD2 gene and imported into the mitochondrial matrix.
created: 2026-07-04
updated: 2026-09-02
tags:
  - protein
  - antioxidant
  - oxidative-stress
  - acetylation
  - sirtuin-substrate
  - sod2
  - manganese-superoxide-dismutase
  - mn-sod
  - mnsod
aliases: [SOD2, Superoxide Dismutase 2, Manganese Superoxide Dismutase, Manganese superoxide dismutase, Mn-SOD, MnSOD2]
---

# Manganese Superoxide Dismutase (MnSOD/SOD2)

**Manganese Superoxide Dismutase (MnSOD/SOD2)** is the primary mitochondrial antioxidant enzyme responsible for dismutating [[Superoxide]] (O₂⁻) to hydrogen peroxide (H₂O₂) and oxygen. It is encoded by the nuclear SOD2 gene and imported into the [[Mitochondria]] matrix, where it forms a homotetrameric complex essential for [[Mitochondrial]] redox homeostasis. By intercepting superoxide at its site of generation in the electron transport chain, MnSOD constitutes the first line of defense against mitochondrial [[Oxidative Stress]] and is a central node through which [[Sirtuins]] regulate longevity.

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

### The Hormetic Threshold

MnSOD sits at the heart of a paradox central to [[Mitohormesis]]. Genetic or pharmacological *partial* reduction of MnSOD activity elevates steady-state [[Superoxide anion]], which paradoxically extends [[Lifespan]] in flies and worms by activating stress-resistance transcription factors (e.g., [[FOXO]], HSF-1, and the [[UPRmt]]). Complete loss, by contrast, is catastrophic — causing dilated cardiomyopathy, neurodegeneration, and early lethality in mice. MnSOD is thus both an essential protector and a tunable rheostat of the mitochondrial redox set-point; its activity level, set by the opposing [[SIRT3]]/[[SIRT4]] signals captured in the [[SIRT3/SIRT4 Ratio]], determines where a cell sits on the mitochondrial [[Hormetic Window]].

> [!info] Hormetic threshold
> Mild MnSOD deficit signals "mitochondrial stress" without causing collapse, engaging the same adaptive circuitry triggered by calorie restriction and other longevity interventions. Sirtuin pathways ([[Sirtuins]]) and [[Lipid Peroxidation]] of cardiolipin further modulate MnSOD-dependent signaling, linking antioxidant capacity to redox-coupled longevity networks.

## Clinical Relevance

MnSOD polymorphisms (notably the Ala16Val variant) modulate mitochondrial import efficiency and are associated with cancer risk and neurodegenerative phenotypes. Therapeutics that boost SIRT3 activity — [[Honokiol]], [[NAD+]] precursors, [[Resveratrol]] — represent strategies to enhance MnSOD function in ageing and metabolic disease. MnSOD therefore bridges the [[NAD+]]–sirtuin axis to the core oxidative-balance machinery of the cell.

## Sex Differences

> [!important] Estrogen is a master regulator of SOD2 expression and activity
> The SOD2/MnSOD axis shows some of the most pronounced sex-dependent regulation in the vault. Females express higher SOD2 protein levels, maintain better antioxidant defense, and are partially protected from mitochondrial oxidative stress until menopause — when estrogen withdrawal removes this protection and accelerates cardiac and vascular aging.

### Estrogen-Dependent SOD2 Upregulation

- Estrogen (17β-estradiol) directly upregulates **SOD2 protein expression** via ERα/ERβ-mediated transcriptional activation. Female cells in multiple experimental contexts show greater SOD2 protein abundance, enhanced antioxidant capacity, and a fusion-biased mitochondrial network (Vina et al., *Free Radic Biol Med* 2005; *Clin Sci* 2017).
- Estrogen signaling increases both SOD2 mRNA transcription and post-transcriptional protein stabilization, contributing to the lower oxidative damage observed in premenopausal females.
- SOD2 protein-level and activity differences exist between sexes **despite similar mRNA levels** — indicating post-transcriptional regulation (acetylation, estrogen-mediated translation) as the primary mechanism (MDPI, *Int J Mol Sci* 2025).

### SOD2 Ala16Val (rs4880) Polymorphism × Sex Interactions

The Ala16Val variant affects mitochondrial import efficiency: **Val/Val** homozygotes have lower mitochondrial SOD2 processing, resulting in reduced matrix antioxidant capacity.

- **Males**: Stronger associations with prostate cancer (OR 1.52 for Val/Val), lung cancer, and head/neck cancer risk.
- **Females**: Stronger associations with breast cancer (especially ER-negative subtypes) and thyroid cancer risk.
- The sex-specific risk profiles likely reflect interactions between SOD2 import efficiency and sex-hormone-modulated mitochondrial metabolic demands (Kang, *Gene* 2013; Xu et al., *PLoS ONE* 2014).

### Post-Menopausal Decline: The SIRT3–SOD2 Axis

> [!warning] Menopause removes the estrogen → SIRT3 → SOD2 protection
> Female-specific downregulation of SIRT3 in aged hearts reduces deacetylation of MnSOD at Lys68/K122, diminishing its antioxidant activity. This contributes to the accelerated cardiac aging and increased heart failure risk observed in postmenopausal women.

- In aged female mouse hearts, both SIRT3 and SOD2 protein levels decline more steeply than in age-matched males, associated with a decline in mitochondrial anti-oxidative defense (*Aging & Disease*, 2024).
- The mechanism: estrogen withdrawal → reduced ERα-mediated SIRT3 transcription → reduced SIRT3 mitochondrial import → reduced MnSOD deacetylation → increased mitochondrial superoxide → oxidative damage accumulation.
- This represents a systems-level inflection point: premenopausal women maintain higher SOD2 activity via the estrogen→SIRT3→SOD2 axis; post-menopause, this protective circuit collapses.

### SOD2 Knockout Mouse Phenotype

- **Sod2⁻/⁻ mice** die within the first month of life from oxidative damage (dilated cardiomyopathy, neurodegeneration, hepatic lipid accumulation).
- **Sod2⁺/⁻ heterozygotes** show increased DNA damage, cancer susceptibility, and accelerated aging — with some evidence of sex-dependent severity, though most studies use mixed-sex cohorts.

### Therapeutic Implications

- **Sex-specific dosing** of SIRT3 activators (honokiol, NAD+ precursors) may be warranted: post-menopausal females may require higher doses to compensate for lost estrogen-mediated SIRT3 expression.
- **SOD2 polymorphism genotyping** could inform sex-specific cancer risk assessment and antioxidant supplementation strategies.

## Documents

List of documents that mention this entity

  - [[_document_ - sirtuins (resveratrol), gemini|sirtuins (resveratrol), gemini]]
    - Mentioned in this document

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - SIRT6 also promoted AMPK expression, thus upregulating antioxidant-encoding gene expression of MnSOD and Catalase, thereby suppressing oxidative stress.

  - [[_document_ - MRR - mitohormesis|mitohormesis]]
    - The Mitohormetic Redox-Relay uses carbazochrome (adrenochrome derivative) to generate controlled ROS pulses that are processed by MnSOD/SOD2, linking adrenochrome metabolism to sirtuin-mediated antioxidant defense.

  - [[_document_ - Mitohormesis - 2014_FEB|Mitohormesis (2014)]]
    - Discusses MnSOD as a nodal antioxidant whose partial suppression promotes mitohormesis.

  - [[_document_ - Fisetin—In Search of Better Bioavailability—From Macro to Nano Modifications A Review|Fisetin review]]
    - Notes senotherapeutic modulation of oxidative-stress defenses and biomarker upregulation of MnSOD.

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
- [[Superoxide]] — The substrate MnSOD dismutates (O₂⁻ → H₂O₂) at its site of generation in the ETC.
- [[Hydrogen Peroxide]] — MnSOD's enzymatic product; feeds the peroxiredoxin/thioredoxin water-evolving arm of the same redox relay.
- [[Peroxiredoxin 3]] — The principal matrix H₂O₂ scavenger that consumes the H₂O₂ MnSOD produces; it is regenerated by Trx2 — MnSOD and Prx3/Trx are the two coupled halves of the mitochondrial peroxide-relay (`SOD2 → H₂O₂ → Prx3/Trx2 → H₂O`).
- [[Thioredoxin-2]] — Regenerates Prx3 master; mitochondrial water-arm of the matrix peroxide-relay driven by MnSOD.
- [[Thioredoxin-1]] — Cytosolic parallel redox arm of the same stress-resistance program; both Trx1 and MnSOD are co-decreased in failing hearts and gated by sirtuin/FOXO/Nrf2 control (independent redox arms, no direct protein interaction).
- [[Glutaredoxin]] — Reverses S-glutathionylation of MnSOD (and matrix proteins), restoring enzyme activity — the Grx/GSH reset hand on MnSOD itself.
- [[Mitohormesis]] — Partial MnSOD suppression extends lifespan via adaptive stress signaling (the hormetic-threshold paradox).
- [[Superoxide anion]] — The substrate MnSOD dismutates in the mitochondrial matrix (O₂⁻ → H₂O₂ + O₂).
- [[Sirtuins]] — Redox and sirtuin pathways (SIRT3/SIRT4, SIRT1/FOXO3a, SIRT6) co-regulate MnSOD expression and activity.
- [[Lifespan]] — Genetic/pharmacological titration of MnSOD activity modulates longevity across flies, worms, and mice.
- [[Lipid Peroxidation]] — Cardiolipin peroxidation both signals and results from MnSOD-dependent redox tone.

## Linking Summary
- New links added: [[MnSOD]], [[Catalase]], [[Fenton Reaction]], [[DNA Damage]], [[Apoptosis]], [[Neurodegeneration]], [[Cardiovascular Disease]], [[Caloric Restriction]], [[Exercise]], [[FOXO3a]], [[Lys68]], [[Lys122]], [[Adrenochrome]], [[Superoxide]], [[Hydrogen Peroxide]], [[Peroxiredoxin 3]], [[Thioredoxin-2]], [[Thioredoxin-1]], [[Glutaredoxin]], [[Mitohormesis]], [[Superoxide anion]], [[Sirtuins]], [[Lifespan]], [[Lipid Peroxidation]], [[FOXO]], [[UPRmt]], [[Hormetic Window]]
- Suggested new entity notes to create: [[Mitochondrial Antioxidant Defense]], [[Superoxide]], [[SIRT3/SIRT4 Ratio]]
- Strong connections to strengthen: [[SIRT3]] ↔ [[MnSOD]], [[SIRT1]]/[[FOXO3a]] ↔ [[MnSOD]], [[SIRT3/SIRT4 Ratio]] ↔ [[MnSOD]], [[Adrenochrome]] ↔ [[MnSOD]], [[MnSOD]] ↔ [[Peroxiredoxin 3]] (peroxide-relay), [[MnSOD]] ↔ [[Thioredoxin-1]]/[[Thioredoxin-2]] (shared stress-resistance program), [[MnSOD]] ↔ [[Mitohormesis]] (hormetic-threshold paradox) + [[Mitohormesis]] ↔ [[Sirtuins]]
