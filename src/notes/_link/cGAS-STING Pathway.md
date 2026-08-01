---
title: cGAS-STING Pathway
description: The cGAS-STING complex is an innate immune sensor that detects cytoplasmic
  DNA and activates inflammatory interferon signalling, playing a crucial role in SASP
  activation and age-related inflammation.
created: 2026-07-07
updated: 2026-07-13
tags:
  - biological-process
  - senescence
  - innate-immunity
  - inflammation
  - signaling-pathway
  - neuroinflammation
  - neurodegeneration
aliases: [cGAS–STING, cyclic GMP-AMP synthase-stimulator of interferon genes, STING pathway]
---

# cGAS–STING Pathway

The **cyclic GMP–AMP synthase–stimulator of interferon genes (cGAS–STING)** complex is an innate immune sensor that detects DNA in the cytosol and activates inflammatory interferon signalling. It is a crucial driver of the [[SASP|Senescence-Associated Secretory Phenotype]] and age-associated inflammation (Dougherty et al., 2019/2020, PMID 31624094; Gorgoulis et al., 2019).

## Mechanism in Senescence

During [[Senescence]], cGAS–STING is activated by cytoplasmic DNA from multiple sources:

### Cytoplasmic DNA Sources
1. **Cytoplasmic Chromatin Fragments (CCFs)**: Downregulation of [[DNASE2]] and [[TREX1]] in senescent cells reduces degradation and permits accumulation of chromosomal DNA fragments.
2. **Mitochondrial DNA (mtDNA)**: Released through [[BAX]]/[[BAK]] macropores during [[Minority MOMP]] (miMOMP) — see [[mtDNA]] and [[Senescence-associated mitochondrial dysfunction|SAMD]].
3. **[[LINE-1]] retrotransposable elements**: Elevated in late senescence; cytoplasmic LINE-1 cDNA triggers interferon signalling.

### Sensing Mechanism
- [[TOP1]] cleavage complexes (TOP1cc) and [[G3BP1]] assist cGAS recognition/binding to CCFs.
- [[Toll-like Receptor 2|TLR2]] activates the SASP via the cGAS–STING–NF-κB cascade during OIS.
- cGAS synthesizes cyclic GMP–AMP (cGAMP), which binds and activates [[STING]].
- STING translocates from ER to Golgi, recruiting [[TBK1]], which phosphorylates [[IRF3]] (type I IFN) and activates [[NF-κB]] (pro-inflammatory cytokines).

## Downstream Effects

### SASP Activation
- Drives expression of [[IL-6]], [[IL-8]], [[CXCL2]], [[CXCL10]], [[CCL3]], [[CCL5]], and [[TNFα]].
- Inhibiting cGAS or STING greatly suppresses NF-κB activation in therapy-induced senescence.
- Both interferon and NF-κB outputs are part of cGAS–STING signaling.

### Age-Related Inflammation
- Cytosolic DNA from mitochondria and cGAS–STING drive ageing-associated SASP-like low-grade inflammation ([[Inflammaging]]).
- STING inhibition reduced inflammatory-cell accumulation in kidneys of aged mice and attenuated Il-1β, Il-6, Tnf, Cxcl9, Cxcl10 expression.

### Immune Modulation
- Drives innate responses beneficial (cancer immunosurveillance) and detrimental (chronic inflammation).
- Maintains the SASP through [[LINE-1]] de-repression, creating a feed-forward loop.

## Cross-talk with Other Pathways

cGAS–STING intersects with [[p38 MAPK]], [[JAK]]–[[STAT3]], and [[mTORC1|mTOR]] signaling, all of which modulate SASP intensity. It is a principal conduit linking mitochondrial stress ([[Senescence-associated mitochondrial dysfunction|SAMD]]) to the pro-inflammatory secretome ([[Paracrine Senescence]]).

## Independence from the Mitochondrial Acetyl-CoA SASP Axis

The mtDNA–cGAS–STING arm of the SASP is genetically separable from the mitochondrial citrate–acetyl-CoA epigenetic arm. In senescence models, the mtDNA signal released through [[BAX]]/[[BAK]] (minority MOMP) requires cGAS–STING for maximal SASP, but the [[H3K27ac]] program at SASP loci is sustained by the mitochondrial pyruvate→citrate→acetyl-CoA export axis ([[MPC]]/[[SLC25A1]]/[[ACLY]]), independent of mtDNA and STING signaling.

> [!important] Source: [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
> Depleting mtDNA or inhibiting STING ([[STING Inhibitors|SN011]]) did not prevent H3K27ac loss at SASP loci when [[SLC25A1]] was inhibited — the acetyl-CoA checkpoint operates in parallel to cGAS–STING. Both arms converge on SASP gene activation but engage distinct upstream signals, so combined or selective targeting may differentially tune the secretome. SLC25A1 inhibition ([[CTPI2]]) selectively suppresses the metabolic arm and improves healthspan in aged mice.

## Therapeutic Targeting
- **NRTIs (lamivudine/3TC)**: Inhibit [[LINE-1]] propagation, reducing cGAS–STING–NF-κB SASP.
- **Olive phenols**: Preserve [[Lamin B1]], reducing cGAS/STING/NF-κB-mediated SASP.
- **STING inhibitors** (e.g., H-151): Reduce age-related inflammation and senescent-cell accumulation.
- **cGAS inhibitors**: Suppress SASP activation.
These constitute a major arm of [[Senomorphic Therapy]].

## Role in Neuroinflammation & Neurodegeneration

> [!info] Source: [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
> cGAS–STING is a central driver of chronic [[Neuroinflammation]] across brain disorders, active in [[Microglia]], [[Astrocytes]], [[Neuron|neurons]], and [[Endothelial Cells|endothelial cells]].

- **Convergent proteinopathy trigger:** [[Amyloid Beta|Aβ]], [[Tau|tau]], [[Alpha-synuclein|α-synuclein]], mutant [[SOD1]], [[TDP-43]], and mutant [[Huntingtin|huntingtin]] converge on [[mtDNA]] leakage (via [[Mitochondrial Permeability Transition Pore|mPTP]]/[[VDAC1]]/[[BAX]]) to activate the pathway; the [[Tau|tau]]–[[PQBP1]] complex activates cGAS DNA-independently.
- **Maladaptive glial states:** Sustained cGAS–STING/[[Type I Interferon|IFN-I]] signaling promotes pro-inflammatory microglia and reactive [[Astrocytes]] (neurotoxic A1), drives [[Astrocyte Senescence|astrocyte senescence]], and generates a distinct IFN-I microglial subpopulation—separate from [[Disease-Associated Microglia|DAM]]—that correlates with synapse loss and cognitive decline.
- **Cognitive resilience:** In tauopathy, microglial cGAS/IFN-I restrains neuronal [[MEF2C]] resilience programs; pharmacological cGAS inhibition phenocopies the protective [[APOE3 Christchurch]] (R136S) allele. AD risk alleles [[APOE4]] and [[TREM2]] R47H synergistically amplify the pathway.
- **Propagation:** [[cGAMP]] spreads via [[Gap Junction|gap junctions]] (CX36) and [[PANX1]] channels; neuronal [[IFNAR1]] transmits microglial IFN-I to neurons.
- **BBB & periphery:** Endothelial activation disrupts the [[Blood-Brain Barrier|BBB]] (via [[Pyroptosis]]); microglial STING protects it. [[Hematopoietic Stem Cell|HSCs]] suppress the pathway to maintain quiescence.

## Clinical / Pathological Relevance

cGAS–STING hyperactivation is implicated in sterile inflammation of ageing, lupus-like autoimmunity (TREX1 deficiency), SASP-driven fibrosis and cancer progression, and chronic [[Neuroinflammation]] in [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Amyotrophic Lateral Sclerosis]], [[Huntington's Disease]], and [[Frontotemporal Dementia]]. Its inhibition ([[cGAS Inhibitors]] RU.521/TDI; [[STING Inhibitors]] H151) is a leading strategy to blunt [[Inflammaging]] and neurodegeneration—though the pathway's homeostatic roles mandate context-dependent, cell-type–selective modulation.

#

## Documents

List of documents that mention this entity

  - [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|The SASP and its physiological and pathological implications]]
    - Reviews cGAS–STING as a key SASP regulator activated by cytoplasmic DNA from CCFs, mtDNA, and LINE1 elements. Discusses its role in age-related inflammation and therapeutic targeting.

  - [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]]
    - Describes mtDNA/cGAS-STING as a central SASP-activating axis in senescence.

  - [[_document_ - The role of the dynamic epigenetic landscape in senescence_orchestrating SASP expression]]
    - Review describes how cytoplasmic chromatin fragments (enriched for heterochromatin marks) and derepressed retrotransposons (LINE-1, HERV) activate cGAS–STING–NF-κB to drive SASP and inflammaging.

  - [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
    - Comprehensive review of cGAS–STING in the brain: canonical/noncanonical mechanisms, proteinopathy triggers, glial state regulation, BBB integrity, peripheral immune surveillance, and therapeutic targeting in neurodegeneration.

  - [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
    - Shows the mtDNA–cGAS–STING arm of the SASP is separable from the mitochondrial acetyl-CoA/H3K27ac arm; mtDNA depletion or STING inhibition (SN011) does not block H3K27ac loss upon SLC25A1 inhibition.

## Connections
- [[SASP|Senescence-Associated Secretory Phenotype]] — cGAS–STING is a key driver of SASP factor transcription
- [[NF-κB]] — downstream effector of cGAS–STING signalling
- [[IL-6]] — SASP cytokine activated by cGAS–STING
- [[IL-8]] — SASP chemokine activated by cGAS–STING
- [[DNA Damage Response]] — source of cytoplasmic DNA activating cGAS
- [[LINE-1]] — retrotransposable element providing cytoplasmic DNA ligand
- [[BAX]] — releases mitochondrial DNA through macropores
- [[BAK]] — releases mitochondrial DNA through macropores
- [[Toll-like Receptor 2|TLR2]] — activates SASP via cGAS–STING–NF-κB cascade
- [[DNASE2]] — degrades cytoplasmic DNA; downregulated in senescence
- [[TREX1]] — degrades cytoplasmic DNA; downregulated in senescence
- [[G3BP1]] — assists cGAS recognition of CCFs
- [[TOP1]] — cleavage complexes assist cGAS sensing
- [[Inflammaging]] — cGAS–STING drives age-associated chronic inflammation
- [[Aging]] — cGAS–STING activation contributes to age-related pathology
- [[Senomorphic Therapy]] — NRTIs and olive phenols target cGAS–STING SASP
- [[mtDNA]] — principal cytosolic DNA ligand in senescence
- [[TBK1]] / [[IRF3]] / [[STING]] — core signaling components
- [[Epigenetic Alterations]] — epigenetic derepression of retrotransposons fuels cGAS–STING SASP
- [[Senescence-Associated Heterochromatin Foci]] — CCF may arise from heterochromatinized regions
- [[Histone Variant]] — histone dynamics influence CCF generation and SASP
- [[DNA Methylation]] — hypomethylation of retroelements promotes their derepression
- [[BRD4]] — H3K27ac reader at SASP enhancers downstream of cGAS–STING
- [[KDM4]] — opens chromatin at SASP loci downstream of cGAS–STING–NF-κB
- [[EZH2]] — H3K27me3 deposition restrains SASP at cGAS–STING target genes
- [[Neuroinflammation]] — cGAS–STING is a central driver across brain disorders
- [[Microglia]] — dominant cellular source of cGAS in the diseased brain
- [[Type I Interferon]] — principal maladaptive output driving neurodegeneration
- [[PQBP1]] — adaptor for DNA-independent cGAS activation by tau
- [[MEF2C]] — neuronal resilience program restrained by microglial cGAS/IFN-I
- [[APOE4]] / [[TREM2]] — AD risk alleles amplifying the pathway
- [[APOE3 Christchurch]] — resilience allele phenocopied by cGAS inhibition
- [[IFNAR1]] — neuronal receptor transmitting microglial IFN-I
- [[Blood-Brain Barrier]] — context-dependent regulation by endothelial vs microglial STING
- [[MPC]] — pyruvate entry feeding the parallel acetyl-CoA SASP arm
- [[SLC25A1]] — mitochondrial citrate carrier of the parallel acetyl-CoA SASP arm
- [[ACLY]] — cytosolic acetyl-CoA generator of the parallel acetyl-CoA SASP arm
- [[CTPI2]] — SLC25A1 inhibitor suppressing the metabolic SASP arm in vivo
- [[Acetyl-CoA]] — substrate for the H3K27ac SASP program independent of cGAS–STING

## Linking Summary
- New links added: [[cGAS-STING Pathway|cGAS–STING]], [[NF-κB]], [[IL-6]], [[IL-8]], [[CXCL2]], [[CXCL10]], [[CCL3]], [[CCL5]], [[TNFα]], [[DNASE2]], [[TREX1]], [[BAX]], [[BAK]], [[TOP1]], [[G3BP1]], [[Toll-like Receptor 2|TLR2]], [[LINE-1]], [[TBK1]], [[IRF3]], [[STING]], [[mtDNA]], [[Minority MOMP]], [[Senescence-associated mitochondrial dysfunction|SAMD]], [[Inflammaging]], [[Paracrine Senescence]], [[p38 MAPK]], [[JAK]], [[STAT3]], [[mTORC1|mTOR]], [[Epigenetic Alterations]], [[Senescence-Associated Heterochromatin Foci]], [[Histone Variant]], [[DNA Methylation]], [[BRD4]], [[KDM4]], [[EZH2]], [[MPC]], [[SLC25A1]], [[ACLY]], [[ACSS2]], [[CTPI2]], [[Acetyl-CoA]], [[STING Inhibitors]]
- Suggested new entity notes to create: [[cGAS]], [[IFI16]], [[CCL3]]
  - Strong connections to strengthen: cGAS-STING Pathway ↔ [[SASP|Senescence-Associated Secretory Phenotype]], cGAS-STING Pathway ↔ [[Inflammaging]], cGAS-STING Pathway ↔ [[Aging]], cGAS-STING ↔ [[mtDNA]]
