---
title: NRF2
description: NRF2 (Nuclear factor erythroid 2-related factor 2) is a master transcription
  factor that regulates the expression of antioxidant proteins and phase II detoxification
  enzymes that protect against ox...
type: entity
created: 2026-07-04
updated: 2026-07-04
tags:
  - Gene
  - antioxidant
aliases: [Nrf2, Nuclear factor erythroid 2-related factor 2, NF-E2-related factor 2, NFE2L2]
database_ids:
  hgnc: HGNC:7782
  uniprot: Q16236
relations:
  - predicate: regulates
    target: "notes/_link/Glutathione"
    sources: []
  - predicate: inhibits
    target: "NF-kappa B"
    sources: []
  - predicate: is activated by
    target: "SIRT1"
    sources: []
  - predicate: is activated by
    target: "Alpha-Lipoic Acid"
    sources: []
  - predicate: is activated by
    target: "Flavonoids"
    sources: []
  - predicate: induces
    target: "Ferritin"
    sources: []

---




# NRF2

**NRF2 (Nuclear factor erythroid 2-related factor 2)** is a master transcription factor that regulates the expression of antioxidant proteins and phase II detoxification enzymes that protect against oxidative damage triggered by injury, inflammation, and xenobiotic stressors.

## Structure & Regulation

NRF2 belongs to the basic leucine zipper (bZIP) transcription factor family and heterodimerizes with small MAF proteins (MAFF, MAFG, MAFK) to bind antioxidant response elements (AREs) in the promoters of target genes. Under basal conditions, NRF2 is sequestered in the cytoplasm by its inhibitor **KEAP1** (Kelch-like ECH-associated protein 1), which targets NRF2 for ubiquitination and proteasomal degradation via the CUL3/RBX1 E3 ubiquitin ligase complex. KEAP1 contains multiple reactive cysteine residues (Cys151, Cys273, Cys288) that function as redox sensors. Electrophiles, reactive oxygen species (ROS), and xenohormetic compounds modify these cysteines, inducing a conformational change in KEAP1 that prevents NRF2 ubiquitination. Newly synthesized NRF2 then escapes KEAP1-mediated repression, translocates to the nucleus, and activates ARE-driven transcription.

## Target Genes & Functions

NRF2 induces over 200 cytoprotective genes, including:
- **Antioxidant Enzymes**: [[Superoxide Dismutase|SOD1]], [[Catalase]], [[Glutathione Peroxidase|GPx]], [[Peroxiredoxin]]
- **Glutathione Synthesis**: Glutamate-cysteine ligase (GCL, both catalytic GCLC and modifier GCLM subunits), Glutathione synthetase (GSS), [[Glutathione|GSH]]
- **Phase II Detoxification**: [[NQO1]], [[HO-1]] (HMOX1), [[UGT1A1]]
- **Iron Metabolism**: Ferritin heavy chain (FTH1) — whose ferroxidase activity converts Fe2+ to Fe3+ for safe storage, limiting [[Fenton Reaction]] chemistry
- **NADPH Regeneration**: [[G6PD]], [[PGD]], [[ME1]], [[IDH1]] — supporting reducing equivalents for antioxidant systems
- **Thioredoxin System**: [[Thioredoxin]] (TXN), [[Thioredoxin reductase]] (TXNRD1)
- **Proteasome Subunits**: [[PSMB5]], [[PSMA1]] — enhancing proteasomal degradation of oxidized proteins

## Role in Mitohormesis

NRF2 is a key participant in the hormetic induction of stress resistance. In *C. elegans*, the homolog [[SKN-1]] mediates the longevity benefits associated with mitochondrial oxidant release, and SKN-1 has been shown to directly bind to mitochondria. This mitohormetic pathway links transient mitochondrial ROS production to NRF2-dependent transcriptional upregulation of protective genes, a mechanism conserved across metazoans.

## Sirtuin Regulation

[[SIRT1]] activates NRF2 by modifying KEAP1 structure, leading to NRF2 nuclear translocation and promoting antioxidant gene expression. [[SIRT6]] overexpression in the brain enhances NRF2 signaling and reduces [[Oxidative Stress]].

## Redox Signaling & Cross-talk

NRF2 exhibits mutual antagonism with [[NF-kappa B]]: RelA (p65) competes with NRF2 for the transcriptional coactivator [[CBP]]/[[P300]], and NRF2 activation suppresses NF-κB target genes through multiple mechanisms, including heme oxygenase-1 (HO-1) activity. This cross-talk positions NRF2 as a central node in the switch between pro-inflammatory and anti-inflammatory transcriptional programs.

## Clinical Relevance

NRF2 activation is a therapeutic strategy for conditions characterized by oxidative stress, including [[Chronic Obstructive Pulmonary Disease]], [[Asthma]], [[Neurodegenerative Diseases|neurodegenerative diseases]], [[Cardiovascular Disease]], and [[Diabetes Mellitus]]. Pharmacological NRF2 activators include [[Sulforaphane]] (from broccoli sprouts), [[Dimethyl fumarate]] (Tecfidera, approved for [[Multiple Sclerosis]]), [[Bardoxolone methyl]], and [[Oltipraz]]. Paradoxically, in established [[Cancer|cancers]], constitutive NRF2 activation can confer therapeutic resistance by enhancing detoxification of chemotherapeutic agents and promoting cell survival, a phenomenon termed the "NRF2 paradox."

NRF2 is a master transcription factor regulating antioxidant defense.

#

## Connections
- [[Keap1]] — Cytoplasmic inhibitor that targets NRF2 for degradation under basal conditions
- [[Antioxidant Response Element]] — DNA binding site for NRF2 target gene activation
- [[NF-kappa B]] — Mutual antagonism; competes for CBP/p300 coactivator
- [[SIRT1]] — Activates NRF2 by modifying KEAP1 structure
- [[SIRT6]] — Enhances NRF2 signaling in the brain
- [[HO-1]] — NRF2 target gene with anti-inflammatory activity
- [[NQO1]] — Canonical NRF2 target detoxification enzyme
- [[SKN-1]] — C. elegans NRF2 homolog mediating mitohormetic longevity

## Linking Summary
- New links added: [[Keap1]], [[Antioxidant Response Element]], [[NF-kappa B]], [[SIRT1]], [[SIRT6]], [[HO-1]], [[NQO1]], [[SKN-1]], [[Sulforaphane]], [[Dimethyl fumarate]], [[Bardoxolone methyl]], [[Chronic Obstructive Pulmonary Disease]], [[Asthma]], [[Multiple Sclerosis]], [[Fenton Reaction]]
- Suggested new entity notes to create: [[Oltipraz]], [[MAFG]], [[MAFF]], [[CUL3]]
- Strong connections to strengthen: [[NRF2]] ↔ [[Keap1]], [[NRF2]] ↔ [[Oxidative Stress]], [[NRF2]] ↔ [[NF-kappa B]]
