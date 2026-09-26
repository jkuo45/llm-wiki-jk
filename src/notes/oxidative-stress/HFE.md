---
title: HFE
description: HFE is an iron-regulatory protein whose best-characterized common variants (C282Y, H63D) cause hereditary hemochromatosis by raising the labile iron pool, shifting the threshold for ferroptosis and lipid peroxidation in every downstream protocol.
created: 2026-09-26
updated: 2026-09-26
tags: [gene, iron-metabolism, hemochromatosis, ferroptosis, oxidative-stress]
aliases:
  - HFE gene
  - HLA-H
  - hemochromatosis gene
  - hereditary hemochromatosis
  - C282Y
  - p.Cys282Tyr
protected: false
---

# HFE

**HFE** is an iron-regulatory protein best known as the cause of the common form of hereditary hemochromatosis. Its variants do something no other common genotype in this vault does: they **fix the size of the labile iron pool for life**, which is the substrate of [[Fenton Reaction]] chemistry and therefore the rate-limiting variable in [[Ferroptosis]] and [[Lipid Peroxidation]]. A C282Y homozygote is not more likely to have iron overload — they are *already* iron-loaded, from roughly the third decade onward, without any dietary contribution.

> [!important] Why this gene is a hard-coded individual biomarker
> Iron overload is Mendelian at a non-trivial carrier rate, yet the vault's ferroptosis content ([[GPX4]], [[ACSL4]], [[FSP1]], [[Iron]]) is a pure mechanism catalogue with no mention of hereditary iron loading. Anyone designing a ferroptosis-adjacent intervention — induction or protection — should know which arm of the iron-distribution curve the subject is in, because the same plasma iron concentration means very different things in a C282Y homozygote and a wild-type individual. See [[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]].

## Structure and Domains

HFE is a type I transmembrane glycoprotein of 348 amino acids, encoded at **6q21.3** on the short arm of chromosome 6, in the MHC class III region immediately upstream of HLA-A. Its structure is built around a canonical MHC class I fold — a heavy chain with α1/α2 domains forming a groove, a single α3 domain, and non-covalent association with β2-microglobulin — despite having no immunological function. The name *HFE* is a contraction of "high Fe" (iron), itself a contraction of HLA-H.

Two α1/α2 regions are functionally critical:

- **The α1 helix** carries the C282 residue (cysteine 282), positioned to engage the hepcidin-binding surface of [[Ferroportin]] when the proteins contact one another.
- **The α2 helix** carries H63 (histidine 63), whose substitution to aspartate destabilizes a salt bridge, weakening HFE folding and surface expression.

Neither residue is a catalytic site. **HFE is a structural chaperone/scaffold, not an enzyme or a transporter** — this is why the disease is recessive and why heterozygous carriers are usually phenotypically silent.

## Mechanism of Action and Pathways

HFE functions downstream of transferrin-bound iron sensing, in the liver and duodenal enterocyte:

1. In the hepatocyte, transferrin-bound Fe³⁺ is delivered to the endosome and reduced to Fe²⁺ by STEAP3, imported by DMT1, and the released iron is sensed by the iron-regulatory proteins (IRP1/IRP2) and the cAMP-dependent control of [[Ferroportin]] export.
2. The liver senses body iron and secretes **hepcidin**, the master negative regulator of iron absorption. Hepcidin binds [[Ferroportin]] on the enterocyte and macrophage surface, triggering internalisation and degradation, which closes the iron-export gate.
3. **HFE is required to upregulate hepcidin** in response to iron overload. Loss of HFE function means the liver under-reads its own iron stores, hepcidin output stays inappropriately low, and [[Ferroportin]] remains on the surface.

The net result is a **duodenal "iron valve stuck open"**: unregulated, hepcidin-independent iron absorption regardless of body stores, plus reduced reticuloendothelial iron recycling efficiency. Iron accumulates preferentially in parenchyma — liver, heart, pancreas, skin, pituitary, joints — rather than in the safer reticuloendothelial sequestration of secondary iron overload.

The parallel to ferroptosis is exact, at a different stage of the same chain: **HFE loss raises the labile iron pool, [[Ferroportin]] is the efflux valve that would lower it, and [[GPX4]] is the antioxidant that would otherwise absorb the resulting peroxide pressure.** Three independent brakes on the same ferroptosis threshold, of which HFE sets the substrate supply.

## The Common Variants

| Variant | Codon | Mechanism | Genotype | Phenotype |
| --- | --- | --- | --- | --- |
| **C282Y** (c.845G>A) | Cys→Tyr 282 | Disrupts disulfide bonding, misfolds the α1 helix, fails to reach the cell surface | C282Y/C282Y | Hereditary hemochromatosis — >80% of common HH |
| **H63D** (c.187C>G) | His→Asp 63 | Charge-reversal, weakens an intrachain salt bridge, reduced surface expression | H63D/H63D | Little or no overload alone; acts as a co-factor |
| **S65C** (c.193A>T) | Ser→Cys 65 | Benign, silent marker | — | Used as a haplotype tag |

Compound heterozygosity (C282Y/H63D or C282Y/S65C) carries a **moderate** risk of overload; **<2%** progress to clinical disease. Simple C282Y heterozygosity (C/H) confers only mildly raised ferritin, and the 12-year Sydney study (Zaloumis 2015) found essentially no excess clinical disease — **most people carrying one C282Y allele should be reassured, not monitored as patients.**

> [!warning] C282Y homozygosity is ancestry-specific
> Prevalence tracks northern European descent, highest in Nordic populations, and is *rare* in East Asian and African-ancestry populations. Their iron overload is instead most often driven by secondary causes ( transfusional, hemolytic, ineffective erythropoiesis) or by **non-HFE hemochromatosis** (below). A negative HFE test in a non-European-ancestry individual excludes very little.

## Non-HFE Hemochromatosis

The minority of iron overload is Mendelian in other genes, and these are the cases most relevant to a vault whose ferroptosis framing is mechanism-first:

- **HAMP (hepcidin antimicrobial peptide)** — juvenile hemochromatosis type 1; severe early-onset overload, the most aggressive form.
- **HFE2 / TFR2** — juvenile hemochromatosis type 2, hepcidin-pathway.
- **SLC40A1 / ferroportin (type 4, aka ferroportin disease)** — gain-of-function *FPN* disease: high [[Ferroportin]] activity, hepcidin-resistant, characteristically **macrophage-predominant iron loading rather than parenchymal**, and it *raises* rather than lowers the labile pool in circulating macrophages. Already noted at [[Ferroportin]].
- **HJV / HFE2, TMPRSS6** — juvenile types 3 and 6.

## Ferroptosis and Lipid Peroxidation Consequence

This is the vault-relevant consequence, and it is under-appreciated because iron is treated in the ferroptosis literature as a *modulator* rather than a *cause*:

- **The threshold shifts.** Ferroptosis requires redox-active Fe²⁺ to drive the [[Fenton Reaction]] and generate hydroxyl radicals that initiate phospholipid peroxidation. A chronically enlarged labile iron pool means a given quantity of lipid peroxide pressure, or a given GPX4 impairment, produces death sooner. The individual threshold in a C282Y homozygote is lower than in a wild-type subject at identical biochemical iron status measured in serum — because serum ferritin is an *inadequate* readout of parenchymal loading.
- **Ferritin is an acute-phase reactant.** Elevated serum ferritin can reflect inflammation rather than iron, and the clinical thresholds below were derived in the absence of significant inflammation. In the vault's SASP/inflammaging context this is a live confounder.
- **Antioxidant protocols can be treating a symptom of a genetic iron lesion.** A high-dose antioxidant or chelation-free redox protocol in a C282Y homozygote is aimed at downstream damage while the upstream driver continues.
- **Conversely, ferroptosis-induction strategies — including any cancer therapy modelled on the [[_document_ - Ferroptosis past present and future|Ferroptosis]] review — start closer to the threshold in an iron-loaded individual**, which is a pre-existing dose variable.

## Clinical Presentation and Biomarkers

Iron overload is one of the few conditions in medicine with a **genotype-plus-biochemistry treatment rule that is consensus-based** (Hemochromatosis International / BIOIRON recommendations, Adams et al., approved May 2017):

- **Biochemical overload** = transferrin saturation **> 45%** plus serum ferritin **> 300 µg/L (male and postmenopausal female)** or **> 200 µg/L (premenopausal female)**.
- **Indication for phlebotomy**: C282Y/C282Y homozygote *with* biochemical overload. The recommendation is explicit that genotype alone is not an indication — penetrance is low, and only a minority of C282Y homozygotes ever express clinical disease.
- **Chelation (e.g. [[Deferoxamine]])**: reserved for anaemic patients, advanced disease, or when phlebotomy is contraindicated.

The classical triad — "bronze diabetes" (pancreatic: [[Diabetes]], [[Insulin Resistance]]), skin hyperpigmentation, and hypogonadism — is late disease. Earlier and more common are fatigue, arthralgia of the 2nd/3rd metacarpophalangeal joints, and elevated ALT. Cardiac involvement is a leading cause of death: iron deposition in cardiomyocytes drives dilated cardiomyopathy and [[Arrhythmias]] independent of any other risk factor. **Progressive iron overload is associated with substantially elevated [[Hepatocellular Carcinoma]] risk once fibrosis/cirrhosis is established** — a genotype-level exception to "iron is not a carcinogen."

## Sex Differences

Men are diagnosed at markedly higher rates and present later in the disease course, and the vault already has a sex-differences frame to attach this to (see [[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]]). The dominant mechanism is mundane and useful: **menstruation and pregnancy are iron sinks.** A premenopausal C282Y homozygote has a physiological bleed-off that a male of the same genotype lacks, which delays loading and lowers the penetrance. C282Y homozygous *females* in pregnancy carry a recognised risk of obstetric and cardiac complications and warrant monitoring rather than reassurance.

This makes HFE a good example of a biomarker whose meaning is **not** separable from XX/XY: the same genotype has a different clinical threshold in a postmenopausal female, a premenopausal female, and a male.

## Caveats

- **Penetrance is low.** Most C282Y homozygotes never develop clinical disease; genotype is a predisposition, not a diagnosis, and the guidelines say so.
- **Genotype is ancestry-dependent.** See the warning above.
- **Ferritin is not iron.** Acute-phase elevation, metabolic syndrome, and alcohol all raise it independently.
- **The genotype–ferroptosis-threshold link is mechanistically sound but not directly demonstrated in humans.** The inference chain (HFE loss → hepcidin under-response → raised labile pool → earlier ferroptosis at a given peroxide pressure) is well supported at each step; the *clinical* consequence for a ferroptosis-induction protocol has not been tested in a genotype-stratified trial, and no such trial exists.
- **Ferritin thresholds are treatment thresholds, not a ferroptosis biomarker.** They were validated for phlebotomy indications, not for redox-state assessment.

## Documents

List of documents that mention this entity

## Connections

- [[Ferroportin]]: The export valve HFE acts upstream of; loss of HFE function leaves it undegraded because hepcidin output is too low — the "iron valve stuck open" mechanism. SLC40A1 gain-of-function causes type 4 hemochromatosis.
- [[Ferritin]]: Sequesters the iron that HFE loss leaves in the labile pool; NRF2-induced ferritin and ferritinophagy are the cell-autonomous counterpart of the systemic defect.
- [[Iron]]: The substrate whose absorption HFE misreads.
- [[Transferrin]]: The plasma carrier whose saturation is the primary biochemical test for overload.
- [[Ferroptosis]]: The downstream consequence — a chronically enlarged labile iron pool lowers the threshold for iron-dependent death.
- [[GPX4]]: The antioxidant brake on the same threshold; the reason iron overload and lipid peroxidation are the same clinical problem.
- [[Fenton Reaction]]: The chemistry that converts the raised labile pool into hydroxyl radicals.
- [[Lipid Peroxidation]]: The pathway the released iron radicals initiate.
- Ferritinophagy: NCOA4-mediated selective autophagic degradation of ferritin, liberating stored iron into the labile pool. Ferritin.md uses the wiki link form for this same process.
- [[DMT1]] and [[STEAP3]]: The import and reduction steps supplying the cytosolic labile pool.
- [[NRF2]]: Induces ferritin and glutathione-linked defences; the adaptive arm that a genetically overloaded subject must mount lifelong.
- [[Deferoxamine]]: The chelator used when phlebotomy is unavailable or contraindicated.
- [[Diabetes]] and [[Insulin Resistance]]: The "bronze diabetes" endocrine phenotype of pancreatic loading.
- [[Hepatocellular Carcinoma]]: Cirrhosis-driven risk elevation, and the clearest example of iron as a co-carcinogen.
- [[Arrhythmias]]: Cardiac iron loading as a cause of arrhythmia and dilated cardiomyopathy independent of other risk factors.
- [[Selenium]]: Interacts with glutathione-peroxidase-based defences in the same oxidative axis.
- [[Estrogen]]: Menstruation as a physiological iron sink — why HFE penetrance is sex-dependent, tying this note to the vault's XX/XY frame.

## Linking Summary

- New links added: [[Ferroportin]], [[Ferritin]], [[Iron]], [[Transferrin]], [[Ferroptosis]], [[GPX4]], [[Fenton Reaction]], [[Lipid Peroxidation]], [[DMT1]], [[STEAP3]], [[NRF2]], [[Deferoxamine]], [[Diabetes]], [[Insulin Resistance]], [[Hepatocellular Carcinoma]], [[Arrhythmias]], [[Selenium]], [[Estrogen]], [[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]]
- Suggested new entity notes to create: [[Hepcidin]] (master negative regulator of iron absorption; the HAMP gene and the node HFE exists to activate), [[Hemochromatosis]] (if separated as a disease note from this gene note), [[Transferrin Saturation]] (the >45% threshold is currently plain text here).
- Strong connections to strengthen: [[HFE]] ↔ [[Ferroportin]]; [[HFE]] ↔ [[Ferroptosis]]; [[HFE]] ↔ [[Ferritin]]
