---
title: Acid ceramidase
description: A lysosomal hydrolase (ASAH1, aCDase) that cleaves ceramide into sphingosine and free fatty acids, controlling the ceramide/S1P rheostat in sphingolipid metabolism; recently identified as a novel regulator of ferroptosis sensitivity in senescent cells and implicated in Farber disease, SMA-PME, and multiple cancers.
created: 2026-07-24
updated: 2026-07-27
tags:
  - enzyme
  - lipid-metabolism
  - sphingolipid-metabolism
  - senescence
  - ferroptosis
  - cancer
  - lysosomal-storage-disease
  - neurodegeneration
aliases:
  - ASAH1
  - ACase
  - aCDase
  - Acid ceramidase (ASAH1)
  - N-acylsphingosine amidohydrolase 1
---

# Acid ceramidase

**Acid ceramidase (ACase; encoded by [[ASAH1]])** is a lysosomal hydrolase that catalyzes the hydrolysis of [[Ceramide|ceramide]] into [[Sphingosine|sphingosine]] and a free fatty acid. By controlling the ceramide ↔ sphingosine/sphingosine-1-phosphate rheostat, it sits at a central node of [[Sphingolipid Metabolism|sphingolipid metabolism]] and, as newly shown, of cellular [[Lipid Metabolism|membrane lipid composition]] that governs [[Ferroptosis|ferroptotic]] vulnerability.

## Structure & Domains

Human acid ceramidase is a heterodimeric glycoprotein assembled from a catalytic α-subunit (~40 kDa) and a protective β-subunit (~13 kDa), both derived from a single ASAH1 precursor (pre-proenzyme, ~53 kDa) by autocatalytic processing in the lysosome. The active site contains a nucleophilic cysteine (Cys143) within a catalytic triad (Ser–Glu–His) typical of the NIT family of amidases. The enzyme is optimally active at acidic pH (~4.5) within the lysosomal lumen; its stability and activity are notably elevated in [[Senescent Cells|senescent cells]], where it is refractory to complete knockdown.

The crystal structure of human ACase was solved in both proenzyme and autocleaved forms at 2.5 Å resolution (Gebai et al., 2018, *Nat Commun*; PDB: 5U7Z). In the proenzyme, the catalytic center is buried and protected from solvent. Autocleavage triggers a conformational change exposing a hydrophobic channel leading to the active site. A hydrophobic surface surrounding the substrate-binding channel serves as a membrane-attachment site where the enzyme accepts substrates facilitated by the accessory protein **saposin-D**. Most disease-causing mutations destabilize the protein fold rather than directly impairing catalysis.

## Mechanism of Action & Pathways

- **Ceramide catabolism:** ACase cleaves the *N*-acyl linkage of [[Ceramide|ceramide]], releasing [[Sphingosine|sphingosine]] (which is re-phosphorylated to [[Sphingosine-1-phosphate|S1P]]) and a free fatty acid. This diverts substrate away from [[Sphingomyelin|sphingomyelin]] synthesis and reduces the ceramide pool.
- **Reverse (synthase) activity:** At neutral pH, ACase can synthesize ceramide from sphingosine and free fatty acids, creating a context-dependent bidirectional switch.
- **Membrane lipid remodeling (novel, ferroptosis link):** Ceramide synthesis consumes free saturated (SFA) and monounsaturated (MUFA) fatty acids, limiting their availability for phospholipid PUFA incorporation. By *breaking down* [[Ceramide|ceramide]], ACase **releases free SFAs/MUFAs** that—via the [[Lands cycle]]—are exchanged into the *sn-2* position of membrane [[Phospholipid|phospholipids]], increasing the [[PUFA|polyunsaturated fatty acid (PUFA)]] content (notably [[Arachidonic acid|arachidonic acid]]-containing species). These PUFA-PLs are the preferred substrates for [[Lipid Peroxidation|lipid peroxidation]], the execution step of [[Ferroptosis]].
- **Pro-survival vs. pro-death duality:** Elevated ACase raises [[Sphingosine|sphingosine]]/S1P, classically *anti-[[Apoptosis|apoptotic]]* and pro-survival in [[Senescent Cells|senescent cells]]. This same metabolic shift, however, inadvertently creates a **pro-ferroptotic lipid profile**, sensitizing the cells to [[Ferroptosis]].

> [!info] Source: [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
> In WI-38 [[Replicative Senescence|replicatively senescent]] fibroblasts, ACase is over-expressed 5- to 20-fold. Its knockdown or pharmacological inhibition (ARN14794) protects both proliferative and senescent cells against [[RSL3]]-induced [[Ferroptosis]] **independently of [[GPX4]]/[[Glutathione|GSH]] levels and of labile [[Iron|Fe²⁺]] regulation**, by lowering membrane PL-[[PUFA|PUFA]] content and thus the [[Lipid Peroxidation|LPO]] substrate pool.

## Physiological Function

ACase is essential for the turnover of [[Sphingomyelin|sphingomyelin]] and [[Ceramide|ceramide]] in virtually all tissues. In normal physiology, ACase activity tunes the ceramide/sphingosine rheostat that regulates proliferation, differentiation, and stress responses.

- **Lysosomal ceramide turnover:** Degrades ceramide derived from membrane sphingomyelin during lysosomal turnover.
- **Skin barrier function:** ASAH1 is strongly expressed in differentiated keratinocytes; it regulates the epidermal ceramide profile critical for barrier integrity (JBC, 2026).
- **Steroidogenesis:** ACase is a global regulator of steroidogenic capacity, controlling adrenocortical gene expression (Lucki et al., 2012).
- **Immune regulation:** ACase controls trained immunity (innate immune memory) via metabolic and epigenetic reprogramming of monocytes (Cell Reports, 2023). Inhibition of ACase suppresses the [[mTOR]] pathway and oxidative phosphorylation, reshaping the epigenetic landscape.
- **Secreted form:** In pathological states (e.g., [[Glioblastoma]], [[Prostate Cancer]]), ACase is secreted into the extracellular environment, where it can remodel the tumor microenvironment.

## Pathology & Clinical Relevance

### Lysosomal Storage Diseases (Loss-of-Function)

- **Farber disease (FD; OMIM #228000):** Biallelic loss-of-function mutations in *ASAH1* with <5% residual ACase activity cause a severe lysosomal storage disorder characterized by painful joint deformities, subcutaneous lipomatous nodules, vocal hoarseness, and neurological involvement. Often fatal by 2–3 years. <200 reported cases worldwide (Yu et al., 2018).
- **Spinal muscular atrophy with progressive myoclonic epilepsy (SMA-PME; OMIM #159950):** Hypomorphic *ASAH1* mutations retaining ~5–30% residual activity cause a milder, allelic disorder with childhood-onset motor neuron disease and progressive drug-resistant myoclonic epilepsy. The c.125C>T (p.Thr42Met) mutation is a recurrent hotspot. Death from respiratory failure or status epilepticus typically in adolescence (Cuinat et al., 2025).

### Senescence & Aging (Gain-of-Function)

- **Senolytic/senomorphic target:** ACase is over-expressed 5- to 20-fold in replicatively senescent cells, driving a pro-ferroptotic membrane lipid profile (Soriano-Castell et al., 2026). Its inhibition selectively removes [[Ferroptosis|ferroptotic vulnerability]] while leaving the senescence arrest and [[SASP]] intact.
- **Paracrine propagation:** SASP cytokines [[IL-6]]/[[IL-8]] induce ACase up-regulation and ferroptotic sensitization in neighboring proliferative cells ([[Paracrine Senescence]]), spreading ferroptotic vulnerability through tissue.
- **Therapeutic opportunity:** Because ACase is druggable with existing inhibitors (ARN14794), it represents a near-term translatable senotherapeutic target for age-related diseases.

### Cancer (Gain-of-Function)

ACase is over-expressed across a broad spectrum of malignancies, where it promotes survival via ceramide clearance and S1P production:

- **[[Glioblastoma]]:** ASAH1 is an independent poor-prognosis marker and is highly expressed in CD133+ glioblastoma stem-like cells (GSCs). ACase inhibition (carmofur) kills GSCs with IC50 11–104 µM, whereas temozolomide IC50 >750 µM — a >50-fold differential. Carmofur crosses the blood-brain barrier. ACase is also secreted by GSCs, remodeling the microenvironment (Doan et al., 2017).
- **[[Melanoma]]:** ACase over-expression in ~70% of melanomas; CRISPR-Cas9 ablation of *ASAH1* prevents cancer-initiating cell formation (Sci Rep, 2017). Pharmacological inhibition reduces tumor growth.
- **[[Prostate Cancer]]:** ACase over-expression confers radioresistance and chemoresistance; secreted by cancer cells into the microenvironment. ACase inhibitor B13 synergizes with radiation therapy (Mahdy et al., 2009).
- **Other cancers:** Elevated ACase reported in [[Breast Cancer|breast]], [[Colorectal Cancer|colon]], [[Head and Neck Cancer|head and neck]], [[Pancreatic Cancer|pancreatic]], and [[Lung Cancer|lung]] cancers, and [[Multiple Myeloma|multiple myeloma]].
- **Context-dependent duality:** Because cancer cells are often ferroptosis-prone (high iron, oxidative stress), ACase inhibition in certain contexts may paradoxically protect cancer cells — warranting careful tissue-specific evaluation.

### Neurodegeneration

- **[[Alzheimer's Disease]]:** ACase is implicated in amyloid-β-induced ceramide dysregulation and synaptic dysfunction.
- **SMA-PME** (see above): Motor neuron degeneration driven by ceramide accumulation in spinal cord.

### Metabolic & Inflammatory Disease

- **Type 2 diabetes:** Ceramide accumulation is linked to insulin resistance; ACase modulation may affect insulin sensitivity.
- **Trained immunity:** ACase inhibition suppresses innate immune memory, suggesting therapeutic potential in autoinflammatory disorders and atherosclerosis (Cell Reports, 2023).

## Inhibitors & Druggability

ACase is a well-established druggable target with several chemical classes of inhibitors:

| Inhibitor | Class | IC50 (hAC) | Key Features |
|-----------|-------|------------|--------------|
| **Carmofur** | 5-substituted pyrimidine (5-FU prodrug) | 29 nM | Clinically approved in Japan for [[Colorectal Cancer]] since 1981; crosses BBB; also inhibits FAAH, NAAA, SARS-CoV-2 Mpro |
| **ARN14974** | Benzoxazolone carboxamide | 79 nM | Systemically active in vivo; inhibits ACase in brain, liver, heart, lungs, kidney; used in the 2026 ferroptosis study |
| **ARN14794** | Benzoxazolone carboxamide analog | ~100 nM | Specifically used in the Soriano-Castell 2026 ferroptosis study |
| **Ceranib-1 / Ceranib-2** | Small molecule | ~1–10 µM | Also inhibits alkaline ceramidases; used in trained immunity research |
| **B-13 / LCL-521** | 2-substituted aminoethanol amide | ~µM | Synergistic with radiation in [[Prostate Cancer]]; inhibits neosis |
| **Tamoxifen** | SERM | ~µM | Repurposed ACase inhibitor |
| **DM102** | Pivaloylamide | ~µM | Synergistic with fenretinide |

The catalytic nucleophile (Cys143) is targeted by most potent inhibitors via a covalent warhead (reactive carbonyl or carbamoyl group). A hydrophobic tail occupies the fatty-acid-binding channel, while an aromatic head group fits the sphingosine-binding pocket. This excellent druggability provides a rare near-term translational advantage for the newly discovered [[Senolytic|senotherapeutic]] axis.

## Documents

  - [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile and exacerbates sensitivity to ferroptosis in WI-38 replicative senescent cells]]
    - Primary 2026 study (Cell Death and Disease) demonstrating ACase over-expression in replicative senescence drives a pro-ferroptotic membrane lipid profile, independently of GPX4/GSH and iron, and is transmitted via IL-6/IL-8 SASP.
  - [[_document_ - Could this enzyme help remove "zombie" cells from our tissues?|Salk press release — "Could this enzyme help remove 'zombie' cells…"]]
    - Public-facing summary of the Soriano-Castell/Maher study framing ACase as a target for clearing senescent "zombie" cells to support healthy aging.
  - [[task_output_acid_ceramidase_27_July_2026|Research synthesis: Acid Ceramidase in Ferroptosis & Cellular Senescence]]
    - Comprehensive research synthesis covering the ACase-ferroptosis-senescence axis, mechanistic model via the Lands cycle, independence from GPX4/GSH/iron, paracrine SASP propagation, and therapeutic implications.

## Connections

- [[Ceramide]] — ACase substrate; its breakdown releases free fatty acids that feed PUFA-phospholipid synthesis.
- [[Sphingosine]] / [[Sphingosine-1-phosphate|S1P]] — Products of ACase; pro-survival, anti-apoptotic signaling lipids.
- [[Sphingomyelin]] — Alternative ceramide consumer; ACase inhibition only modestly alters SM levels.
- [[Phospholipid]] — Membrane PLs whose PUFA content is increased by ACase activity.
- [[PUFA]] — The ferroptosis-substrate fatty acids enriched in membranes by ACase-driven remodeling.
- [[Lands cycle]] — The metabolic pathway by which ACase-liberated free fatty acids are incorporated into membrane PL-PUFAs.
- [[Saposin-D]] — Lysosomal accessory protein required for substrate presentation to ACase.
- [[WI-38]] — The fibroblast cell line in which the ACase-ferroptosis connection was discovered.
- [[ARN14794]] / [[ARN14974]] / [[Carmofur]] — Small-molecule ACase inhibitors; ARN14794 was used in the 2026 ferroptosis study.
- [[Ferroptosis]] — ACase is a novel positive regulator; its inhibition protects cells via a GPX4/GSH/iron-independent axis.
- [[GPX4]] — ACase inhibition *reduced* GPX4 expression yet still protected, indicating GPX4 is not the driver.
- [[Glutathione]] — GSH rises after ACase KD but protection persists even when GSH is depleted (BSO), confirming GSH-independence.
- [[Iron]] / [[Fenton Reaction]] — Labile Fe²⁺ rises (not falls) after ACase KD, ruling out iron as the mediator.
- [[ACSL4]] — Classical ferroptosis driver; ACase-KD lowers PL-PUFAs *without* changing ACSL4, so the two act through distinct mechanisms.
- [[Senescent Cells]] — ACase is strongly over-expressed in replicatively senescent cells and sensitizes them to ferroptosis.
- [[SASP]] — IL-6/IL-8 SASP cytokines induce ACase up-regulation and ferroptotic sensitization in neighboring cells.
- [[IL-6]] / [[IL-8]] — SASP factors sufficient to drive paracrine ACase up-regulation.
- [[RSL3]] — GPX4 inhibitor used to induce ferroptosis in the ACase study.
- [[Lipid Peroxidation]] — The downstream execution step whose substrate pool (PUFA-PLs) is set by ACase.
- [[Melanoma]] / [[Prostate Cancer]] / [[Glioblastoma]] — Cancers in which ACase over-expression drives tumorigenesis, radioresistance, and chemoresistance.
- [[Breast Cancer]] / [[Colorectal Cancer]] / [[Pancreatic Cancer]] / [[Lung Cancer]] — Additional malignancies with elevated ACase.
- [[Multiple Myeloma]] — ACase mediates proteasome inhibitor resistance.
- [[Alzheimer's Disease]] — ACase implicated in amyloid-β-induced ceramide dysregulation.
- [[Apoptosis]] — ACase activity opposes ceramide-mediated apoptosis via S1P signaling.
- [[mTOR]] — ACase inhibition suppresses mTOR signaling in trained immunity.

## Linking Summary

- New links added: [[Ceramide]], [[Sphingosine]], [[Sphingosine-1-phosphate]], [[Sphingomyelin]], [[Phospholipid]], [[PUFA]], [[Ferroptosis]], [[GPX4]], [[Glutathione]], [[Iron]], [[Fenton Reaction]], [[ACSL4]], [[Senescent Cells]], [[SASP]], [[IL-6]], [[IL-8]], [[RSL3]], [[Lipid Peroxidation]], [[Melanoma]], [[Prostate Cancer]], [[Glioblastoma]], [[Breast Cancer]], [[Colorectal Cancer]], [[Pancreatic Cancer]], [[Lung Cancer]], [[Multiple Myeloma]], [[Alzheimer's Disease]], [[Apoptosis]], [[mTOR]], [[Replicative Senescence]], [[Paracrine Senescence]], [[Senolytic]], [[Senomorphic]], [[Saposin-D]], [[Lands cycle]]
- Suggested new entity notes to create: (none — all identified entities now created)
- Strong connections to strengthen:
    - [[Acid ceramidase]] ↔ [[Ferroptosis]] — newly identified GPX4/GSH/iron-independent pro-ferroptotic axis
    - [[Acid ceramidase]] ↔ [[Senescent Cells]] — 5- to 20-fold over-expression in replicative senescence
    - [[Acid ceramidase]] ↔ [[SASP]] (via IL-6/IL-8) — paracrine propagation of ferroptotic vulnerability
    - [[Acid ceramidase]] ↔ [[Ceramide]] — enzyme-substrate relationship with dual physiological and pathological roles
    - [[Acid ceramidase]] ↔ [[Glioblastoma]] — ASAH1 as poor-prognosis marker and GSC target
    - [[Acid ceramidase]] ↔ [[Farber disease]] / [[SMA-PME]] — loss-of-function disease spectrum
    - [[Acid ceramidase]] ↔ [[ARN14794]] / [[ARN14974]] / [[Carmofur]] — druggable target with existing small-molecule inhibitors

- Justification: The ferroptosis link represents a completely novel, GPX4/GSH/iron-independent cell death regulatory axis with immediate translational potential given existing ACase inhibitors. The Farber/SMA-PME disease spectrum illustrates the severity gradient from complete to partial loss-of-function. The glioblastoma connection is particularly striking because carmofur (an existing approved drug) crosses the BBB and targets GSCs with >50-fold greater potency than temozolomide.
