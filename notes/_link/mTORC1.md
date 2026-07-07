---
title: mTORC1
description: 'mTORC1 (mechanistic target of rapamycin complex 1) is a multi-protein
  signaling complex that integrates nutrient, energy, and growth factor signals to
  coordinate Cell Growth, Protein Synthesis,...'
type: entity
created: 2024-01-01
updated: 2026-07-06
tags:
  - protein
aliases: [mechanistic target of rapamycin complex 1, mTOR Complex 1, mTORC1]

---

# mTORC1

**mTORC1** (mechanistic target of rapamycin complex 1) is a multi-protein signaling complex that integrates nutrient, energy, and growth factor signals to coordinate [[Cell Growth]], [[Protein Synthesis]], [[Lipid Synthesis]], [[Ribosome Biogenesis]], and [[Autophagy]]. It is the central node of the [[mTOR]] signaling network and a master regulator of anabolic-catabolic balance in eukaryotic cells.

## Structure and Subunits

mTORC1 is a large (~300 kDa) multiprotein assembly built around the [[mTOR]] serine/threonine kinase (catalytic core), with five core subunits:

- **mTOR** — the catalytic subunit belonging to the [[PIKK]] family; contains N-terminal HEAT repeats, a FAT domain, an FRB domain (rapamycin-binding), and a C-terminal kinase domain
- **Raptor** (regulatory-associated protein of mTOR) — scaffolding protein that recruits mTORC1 substrates ([[S6K1]] and [[4E-BP1]]) via TOS motifs
- **mLST8** (mammalian lethal with SEC13 protein 8) — binds the mTOR kinase domain and stabilizes catalytic activity
- **PRAS40** (proline-rich Akt substrate of 40 kDa) — inhibitory subunit; dissociates upon Akt-mediated phosphorylation to relieve repression
- **Deptor** (DEP domain-containing mTOR-interacting protein) — negative regulator that binds mTOR and inhibits kinase activity; itself suppressed by growth factor signaling

Raptor is the defining mTORC1-specific subunit (distinguishing it from [[mTORC2]]). The complex localizes to the [[Lysosome]] surface in its active state, where it encounters its upstream activator [[Rheb]].

## Regulation and Activation

mTORC1 integrates signals from four major inputs:

### 1. Growth Factors (PI3K-Akt-TSC axis)
[[Growth Factor]] binding to [[Receptor Tyrosine Kinases]] activates [[Class I PI3K]], producing [[PIP3]], which recruits [[Akt]] to the plasma membrane. Akt phosphorylates and inhibits the [[TSC1]]-[[TSC2]] complex, a [[GTPase-activating protein]] (GAP) toward [[Rheb]]. Rheb-GTP directly activates mTORC1 at the lysosomal surface. Akt also phosphorylates PRAS40, relieving its inhibition of mTORC1.

### 2. Amino Acids (Rag GTPase axis)
[[Amino Acids]], particularly [[Leucine]] and [[Arginine]], signal through the [[Ragulator]]-[[Rag GTPase]] system to recruit mTORC1 to the [[Lysosome]]. The Rag heterodimer (RagA/B bound to RagC/D) tethers mTORC1 to the lysosomal surface via Raptor interaction, bringing it into proximity of Rheb-GTP. This amino-acid sensing mechanism is mediated by the [[GATOR1]]-GATOR2 complexes, [[Sestrins]], and [[CASTOR1]].

### 3. Energy Status (AMPK-TSC2 / AMPK-Raptor)
Low cellular energy (high [[AMP]]/[[ATP]] ratio) activates [[AMPK]], which phosphorylates:
- [[TSC2]] — enhancing its GAP activity toward Rheb, suppressing mTORC1
- [[Raptor]] — directly inhibiting mTORC1 by promoting [[14-3-3]] binding
This provides a direct energy checkpoint preventing anabolic processes when ATP is limiting.

### 4. Stress and Hypoxia (REDD1 / BNIP3)
[[Hypoxia]] and [[DNA Damage]] induce [[REDD1]]/DDIT4, which activates TSC2 and suppresses mTORC1. [[Hypoxia]] also induces [[BNIP3]] and [[BNIP3L]], promoting [[Mitophagy]] and indirectly suppressing mTORC1. [[p53]] (the guardian of the genome) represses mTORC1 activity under genotoxic stress.

## Downstream Effectors

mTORC1 phosphorylates two major substrate families to drive anabolism:

### S6 Kinase 1
mTORC1 phosphorylates and activates [[S6K1]] at Thr389. S6K1 in turn phosphorylates:
- [[S6 ribosomal protein]] — promotes translation of 5'-TOP mRNAs
- [[eIF4B]] — enhances helicase activity for mRNA unwinding
- [[PDCD4]] — promotes its degradation, relieving eIF4A inhibition
- [[IRS1]] — negative feedback to PI3K-Akt signaling

### 4E-BP Family
mTORC1 phosphorylates [[4E-BP1]], [[4E-BP2]], and [[4E-BP3]], causing their release from [[eIF4E]]. Free eIF4E assembles into the [[eIF4F]] initiation complex (eIF4E, eIF4A, eIF4G) to initiate cap-dependent translation. Hypophosphorylated 4E-BPs sequester eIF4E, blocking translation initiation.

### Additional Targets
- [[Lipin-1]] — phosphorylation blocks nuclear translocation, promoting [[Lipid Synthesis]]
- [[TFEB]] — mTORC1 phosphorylates TFEB, retaining it in the [[Cytosol]]; mTORC1 inhibition permits TFEB nuclear translocation and [[Lysosomal Biogenesis]]
- [[SREBP-1c]] — mTORC1-S6K1 signaling activates SREBP-1c, driving [[Lipid Synthesis]] and [[Cholesterol]] biogenesis
- [[HIF-1α]] — mTORC1 promotes HIF-1α translation, enabling [[Glycolysis]] and angiogenesis

## Physiological Functions

### Cell Growth and Proliferation
mTORC1 drives [[Cell Growth]] by increasing protein and lipid synthesis. Cells lacking mTORC1 signaling are smaller and proliferate more slowly. In [[Quiescence]], mTORC1 is suppressed and cells maintain a state of reduced anabolism.

### Autophagy Regulation
mTORC1 inhibits [[Autophagy]] by phosphorylating [[ULK1]] and [[ULK2]] at Ser757, disrupting the ULK1-[[AMPK]] interaction. mTORC1 also phosphorylates TFEB and [[TFE3]], preventing [[Lysosomal Biogenesis]]. Pharmacological mTORC1 inhibition with [[Rapamycin]] or [[Torin]] is a potent inducer of autophagy.

### Metabolism
mTORC1 promotes [[Glycolysis]] via HIF-1α stabilization, increases [[Nucleotide Synthesis]] via [[ATF4]] signaling, and drives [[Mitochondrial Biogenesis]] through [[PGC1-α]] and [[YY1]] coactivation.

### Immune Function
mTORC1 is critical for [[T Cell]] activation, [[B Cell]] differentiation, and [[Dendritic Cell]] function. In T cells, mTORC1 promotes [[effector T cell]] (Th1, Th17) differentiation, while mTORC2 favors [[Treg]] development.

## Pathology and Clinical Relevance

### Cancer
mTORC1 is hyperactivated in 60-80% of human cancers via:
- Loss of [[PTEN]] (most common)
- [[PIK3CA]] activating mutations
- [[Akt]] amplification
- [[TSC1]]/[[TSC2]] loss ([[Tuberous Sclerosis Complex]])
- [[STK11]]/[[LKB1]] loss ([[Peutz-Jeghers Syndrome]])

Constitutive mTORC1 signaling drives uncontrolled [[Cell Proliferation]], [[Angiogenesis]], and metabolic reprogramming.

### Tuberous Sclerosis Complex
Loss-of-function mutations in [[TSC1]] or [[TSC2]] cause Tuberous Sclerosis, a neurodevelopmental disorder characterized by benign tumors (hamartomas), epilepsy, [[Autism]], and renal [[Angiomyolipoma]]. mTORC1 hyperactivation is the direct pathogenic mechanism.

### Metabolic Disease
Chronic mTORC1 activation in [[Adipose Tissue]], [[Liver]], and [[Pancreatic β-cells]] contributes to [[Insulin Resistance]], [[Type 2 Diabetes Mellitus]], and [[Obesity]]. S6K1-mediated [[IRS1]] phosphorylation creates negative feedback that desensitizes PI3K-Akt signaling.

### Aging
mTORC1 hyperactivation is a conserved driver of [[Aging]]. Genetic or pharmacological suppression of mTORC1 extends [[Lifespan]] across species (yeast, worms, flies, mice). [[Rapamycin]] and [[Rapalogs]] extend murine lifespan and delay multiple hallmarks of aging including [[Cellular Senescence]], [[Mitochondrial Dysfunction]], and [[Proteostasis]] decline. mTORC1 inhibition recapitulates many benefits of [[Caloric Restriction]].

### Therapeutic Targeting
[[Rapamycin]] (sirolimus), [[Everolimus]], [[Temsirolimus]], and [[Ridaforolimus]] are FDA-approved [[mTOR inhibitors]] that target mTORC1 via allosteric FRB-domain binding. Second-generation [[ATP-competitive mTOR inhibitors]] (Torin, [[AZD8055]], [[INK128]]) target both mTORC1 and mTORC2 catalytic activity. [[Rapalogs]] are used as [[Immunosuppressants]], anticancer agents, and are under investigation as [[Geroprotectors]].

#

## Documents

List of documents that mention this entity

  - [[_document_ - Autophagy takes it all – autophagy inducers target immune aging|Autophagy takes it all – autophagy inducers target immune aging]]
    - The core process of autophagy is instigated by inhibition of mTORC1 and/or activation of AMPK (AMPK), both of which are canonical inducers of autophagy in response to metabolic stress.

  - [[_document_ - From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery|From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery]]
    - The mechanistic target of rapamycin complex 1 (mTORC1), an atypical serine/threonine kinase, controls the balance between anabolism and catabolism and responds to various signals, including nutrients \[\].

  - [[_document_ - Kinase|Kinase]]
    - M on TFEB | References (PMID) | | ----------------------------------- | ----------------- | --------------- | -------------------------------------------------------------------------------------------- | ----------------- | | S211 | Phosphorylation | mTORC...

  - [[_document_ - Lysosome biogenesis Regulation and functions|Lysosome biogenesis Regulation and functions]]
    - mTORC1 is recruited to lysosomes by a heterodimeric complex consisting of GTP-bound RagA/B and GDP-bound RagC/D, where it is activated by the Rheb GTPase (Angarola and Ferguson, 2019; Kim et al., 2008; Menon et al., 2014; Sancak et al., 2010; Sancak et al.,...

  - [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]]
    - Lysosome are also the site of activation of mTORC1, an evolutionary conserved serine/threonine kinase that regulates cell growth and division in response to energy levels, growth signals, and nutrients.

  - [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]
    - In such conditions, the AMPK activity inhibits mTORC1 and protein synthesis to minimize ATP consumption by controlling Anabolic and Catabolic processes \[\].

  - [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]]
    - mTOR nucleates at least two distinct multi-protein complexes, mTORC1 and mTORC2 (mTORC2) (reviewed by Guertin and Sabatini, 2007). mTORC1 mTORC1 has five components: mTOR, which is the catalytic subunit of the

  - [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
    - In this regard, it was also shown that _Mcl-1_ mRNA translation could be facilitated by mTORC1 (mammalian target of rapamycin complex 1), a downstream target of PI3K/Akt signaling, in a mouse lymphoma model (Figure 2) \[\].

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - In addition, cell proliferation due to repression of SIRT4 by the mTORC1 pathway has been identified.


## Connections
- [[mTOR]] — catalytic core of mTORC1; directly inhibited by rapamycin-FKBP12
- [[mTORC2]] — the second mTOR complex; insensitive to acute rapamycin, regulates Akt and cytoskeletal dynamics
- [[Raptor]] — mTORC1-specific scaffold; required for substrate recruitment
- [[Rheb]] — direct mTORC1 activator; GTP-bound Rheb binds the mTOR kinase domain
- [[TSC1]]/[[TSC2]] — negative regulators that inactivate Rheb via GAP activity
- [[AMPK]] — energy sensor that suppresses mTORC1 via TSC2 and Raptor phosphorylation
- [[Autophagy]] — mTORC1 is the master inhibitor of autophagy; mTORC1 inhibition induces autophagy
- [[Rapamycin]] — prototypical mTORC1 inhibitor; binds FKBP12-FRB interface
- [[S6K1]] — key downstream effector; phosphorylates multiple translational regulators
- [[4E-BP1]] — translation repressor; released from eIF4E upon mTORC1 phosphorylation
- [[TFEB]] — transcription factor for lysosomal genes; retained in cytosol by mTORC1
- [[Cellular Senescence]] — mTORC1 drives senescence-associated secretory phenotype; inhibition reduces SASP
- [[Aging]] — mTORC1 hyperactivation accelerates aging; inhibition extends lifespan
- [[Tuberous Sclerosis]] — monogenic mTORC1 hyperactivation syndrome

## Linking Summary
- New links added: [[mTOR]], [[Raptor]], [[mLST8]], [[PRAS40]], [[Deptor]], [[Cell Growth]], [[Protein Synthesis]], [[Lipid Synthesis]], [[Ribosome Biogenesis]], [[Autophagy]], [[Rheb]], [[Rag proteins]], [[AMPK]], [[TSC1]], [[TSC2]], [[S6K1]], [[4E-BP1]], [[TFEB]], [[ULK1]], [[HIF-1α]], [[SREBP-1c]], [[PGC1-α]], [[Cancer]], [[Tuberous Sclerosis Complex]], [[Rapamycin]], [[Everolimus]], [[Caloric Restriction]], [[Aging]], [[Insulin Resistance]], [[Leucine]], [[Ragulator]], [[GATOR1]], [[REDD1]], [[BNIP3]], [[Lipin-1]], [[ATF4]], [[PIK3CA]], [[PTEN]], [[STK11]], [[LKB1]], [[IRS1]], [[T Cell]], [[Immunosuppressants]]
- Suggested new entity notes to create: [[TOR signaling]], [[Rag GTPase]], [[Akt]], [[PI3K]], [[FKBP12]], [[Rapalogs]], [[Geroprotectors]]
- Strong connections to strengthen: [[mTORC1]] ↔ [[mTORC2]], [[mTORC1]] ↔ [[Autophagy]], [[mTORC1]] ↔ [[TSC2]], [[mTORC1]] ↔ [[Aging]], [[mTORC1]] ↔ [[Rapamycin]]
