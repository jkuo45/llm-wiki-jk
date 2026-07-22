---
title: DNA Damage
description: DNA damage refers to any chemical or physical alteration to the
  structure of DNA that deviates from the canonical Watson-Crick base pairing. Unlike
  DNA Mutation, which are heritable sequence ch...
created: 2026-07-04
updated: 2026-07-06
tags:
  - biological-process
aliases: [DNA lesion, DNA injury, genomic damage]

---

# DNA Damage

**DNA damage** refers to any chemical or physical alteration to the structure of [[DNA]] that deviates from the canonical Watson-Crick base pairing. Unlike [[DNA Mutation|mutations]], which are heritable sequence changes, DNA damage is a chemical lesion that can often be repaired. Mammalian cells experience tens of thousands of DNA damage events per cell per day from both endogenous and exogenous sources.

## Sources of DNA Damage

### Endogenous Sources

- **[[Reactive Oxygen Species]]** — produced by [[Mitochondria]] during [[Oxidative Phosphorylation]]; generate 8-oxo-dG (8-oxoguanine), thymine glycol, and single-strand breaks. Estimated 1 × 10^5 oxidative lesions per cell per day.
- **[[Hydrolysis]]** — spontaneous depurination (loss of purine bases) occurs at ~10,000 events per cell per day. Deamination of [[Cytosine]] to [[Uracil]] occurs at ~200 events per day.
- **Replication Errors** — DNA polymerase misincorporation errors (~1 per 10^5 bases per replication), though most are corrected by proofreading and [[Mismatch Repair]].
- **[[Lipid Peroxidation]] Byproducts** — [[Malondialdehyde]] and [[4-Hydroxynonenal]] form exocyclic DNA adducts.
- **[[Alkylation]]** — [[S-adenosylmethionine]] can non-enzymatically methylate DNA, producing [[N7-methylguanine]] and [[O6-methylguanine]].

### Exogenous Sources

- **[[Ultraviolet Radiation]]** — causes cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts between adjacent pyrimidines
- **[[Ionizing Radiation]]** — produces double-strand breaks (DSBs), single-strand breaks, and clustered lesions via direct energy deposition and [[Radiolysis]] of water
- **Chemical Carcinogens** — [[Polycyclic Aromatic Hydrocarbons]], [[Aflatoxin B1]], [[Benzo[a]pyrene]], [[Aromatic amines]], and [[Nitrosamines]] form bulky DNA adducts
- **[[Chemotherapy]] Agents** — [[Cisplatin]] (intrastrand crosslinks), [[Doxorubicin]] (topoisomerase II poisons), [[Etoposide]] (topoisomerase II inhibitors), alkylating agents ([[Cyclophosphamide]], [[Temozolomide]])
- **Environmental Toxins** — [[Arsenic]], [[Cadmium]], [[Tobacco smoke]]

## Types of DNA Lesions

- **Single-Strand Breaks (SSBs)** — nick in one DNA strand; most frequent lesion (~10^5 per cell per day)
- **Double-Strand Breaks (DSBs)** — both strands severed; most dangerous lesion; ~10-50 per cell per day from endogenous sources
- **Base Modifications** — [[8-oxo-dG]], [[O6-methylguanine]], thymine glycol, etheno adducts
- **Bulky Adducts** — covalent attachment of large chemical groups to DNA bases (e.g., benzo[a]pyrene diol epoxide adducts, cisplatin crosslinks)
- **Pyrimidine Dimers** — UV-induced covalent linkages between adjacent pyrimidines
- **DNA Crosslinks** — interstrand crosslinks (ICLs) or intrastrand crosslinks that covalently tether DNA strands
- **Abasic Sites (AP sites)** — loss of a purine or pyrimidine base via spontaneous hydrolysis or glycosylase activity
- **Mismatches** — non-Watson-Crick base pairing from replication errors

## DNA Damage Response

The cellular response to DNA damage is orchestrated by the **[[DNA Damage Response]] (DDR)**, a signaling network that coordinates:

- **Damage Sensing** — [[MRE11]]-[[RAD50]]-[[NBS1]] (MRN complex) senses DSBs; [[RPA]] coats single-stranded DNA; [[PCNA]] detects replication stress
- **Signal Transduction** — [[ATM]] (primary DSB sensor), [[ATR]] (replication stress sensor), [[DNA-PKcs]] (NHEJ pathway)
- **Effector Activation** — [[CHK1]], [[CHK2]], [[p53]], [[BRCA1]], [[MDC1]], [[53BP1]]
- **Cellular Outcomes** — [[Cell Cycle Arrest]], [[DNA Repair]], [[Apoptosis]], [[Senescence]], or [[Autophagy]]

### Key Signaling Kinases

- **[[ATM]]** — activates in response to DSBs; phosphorylates [[CHK2]], [[p53]], [[H2AX]] (γH2AX), [[BRCA1]], and [[SMC1]]
- **[[ATR]]** — activated by replication stress and stretches of [[RPA]]-coated ssDNA; phosphorylates [[CHK1]], [[WEE1]], and [[p53]]
- **[[DNA-PK]]** — critical for non-homologous end joining (NHEJ); cooperates with [[Ku70]]/[[Ku80]]

## DNA Repair Pathways

| Pathway | Lesions Repaired | Key Proteins |
|---|---|---|
| **[[Base Excision Repair]] (BER)** | Small base modifications (8-oxo-dG, uracil, alkylation) | [[OGG1]], [[APE1]], [[XRCC1]], [[POLB]], [[LIG3]] |
| **[[Nucleotide Excision Repair]] (NER)** | Bulky adducts, pyrimidine dimers | [[XPA]]-[[XPG]], [[ERCC1]]-[[XPF]], [[TFIIH]], [[CSA]], [[CSB]] |
| **[[Mismatch Repair]] (MMR)** | Replication errors, insertions/deletions | [[MSH2]], [[MSH6]], [[MLH1]], [[PMS2]], [[EXO1]] |
| **[[Non-Homologous End Joining]] (NHEJ)** | DSBs (all cell cycle phases) | [[Ku70]], [[Ku80]], [[DNA-PKcs]], [[XRCC4]], [[LIG4]] |
| **[[Homologous Recombination]] (HR)** | DSBs (S/G2 phase) | [[BRCA1]], [[BRCA2]], [[RAD51]], [[MRE11]], [[RAD50]], [[NBS1]] |
| **[[Interstrand Crosslink Repair]] (ICLR)** | DNA crosslinks | [[FANCA]]-[[FANCM]] (Fanconi anemia pathway) |
| **[[Direct Reversal]] (DR)** | O6-methylguanine | [[MGMT]], [[ABH2]], [[ABH3]] |

## Pathology and Disease Relevance

### Cancer
Defects in [[DNA Repair]] are causal in many hereditary cancer syndromes: [[BRCA1]]/[[BRCA2]] mutations ([[Breast Cancer]], [[ovarian cancer]]), [[MSH2]]/[[MLH1]] mutations ([[Lynch Syndrome]], [[Colorectal Cancer]]), [[XPA]]/[[XPC]] mutations ([[Xeroderma Pigmentosum]], 1000× increased [[Skin Cancer]] risk). Somatic mutations in DDR genes are found across all cancer types. [[PARP inhibitors]] ([[Olaparib]], [[Niraparib]]) exploit synthetic lethality in [[BRCA]]-deficient tumors.

### Aging
Accumulation of DNA damage with age drives [[Stem Cell Exhaustion]] and [[Senescence]]. Accelerated aging syndromes result from DDR defects: [[Werner Syndrome]] ([[WRN]] helicase), [[Bloom Syndrome]] ([[BLM]] helicase), [[Ataxia Telangiectasia]] ([[ATM]] deficiency), [[Cockayne Syndrome]] ([[CSA]]/[[CSB]] mutations).

### Neurodegeneration
Neurons are particularly vulnerable to DNA damage due to high [[Oxidative Stress]] and limited repair capacity. [[Alzheimer's Disease]], [[Parkinson's Disease]], and [[Amyotrophic Lateral Sclerosis]] all show elevated DNA damage levels.

### Inborn Errors of Repair
Rare genetic disorders from DDR deficiencies: [[Xeroderma Pigmentosum]] (skin cancer), [[Fanconi Anemia]] (bone marrow failure, cancer), [[Nijmegen Breakage Syndrome]] ([[NBS1]] mutation; immunodeficiency, radiation sensitivity).

#

# 

## Documents

List of documents that mention this entity

  - [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]]
    - For instance, the activation of p53 in response to DNA Damage rapidly activates AMPK through an unknown process, which in turn phosphorylates and thereby activates TSC2 (Feng et al., 2005).

  - [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]]
    - Contact-dependent interactions, DNA Damage, and certain soluble factors promote quiescence, whereas growth factor signaling and Extracellular Matrix interactions stimulate proliferation. Extracellular signals in vitro.

  - [[_document_ - Molecular Insights into Reprogramming-Initiation Events Mediated by the OSKM Gene Regulatory Network|Molecular Insights into Reprogramming-Initiation Events Mediated by the OSKM Gene Regulatory Network]]
    - Experiments confirmed that upon viral transduction, the immediate response is Innate Immunity, which induces Reactive Oxygen Species, oxidative DNA Damage, p53 activation, Senescence, and Apoptosis, ultimately leading to a reduction in the Cellular Reprogra...

  - [[_document_ - Small molecule compounds that induce cellular senescence|Small molecule compounds that induce cellular senescence]]
    - Keywords: Senescence, Cell Stress, DNA Damage, DNA Replication Stress, Epigenetic Modifiers, Aging --- Senescence is a stable arrest of the Cell Cycle and is characterized by complex phenotypic changes.

  - [[_document_ - sirtuins (overview, CD38 KO risks, cancer therapies)|sirtuins (overview, CD38 KO risks, cancer therapies)]]
    - Key functions: Regulates TAFI68 (via RNA Pol I), ribosome biogenesis, DNA Damage repair, chromatin organization. Involved in stress response and Metabolism.

  - [[_document_ - sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i|sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i]]
    - SIRT1-dependent deacetylation of p53 inhibits its transactivation activity and suppresses Apoptosis in response to Oxidative Stress and DNA Damage . Although the SIRT1/p53 pathway may promote a beneficial effect in different diseases, Chen et al.


## Connections
- [[DNA Repair]] — collective pathways that remove and correct DNA damage
- [[DNA Damage Response]] — signaling network that detects damage and coordinates repair
- [[ATM]] — master kinase for double-strand break signaling
- [[ATR]] — master kinase for replication stress signaling
- [[p53]] — tumor suppressor activated by DNA damage; transcriptionally regulates repair, apoptosis, senescence
- [[Reactive Oxygen Species]] — major endogenous source of oxidative DNA damage
- [[Oxidative Stress]] — promotes DNA damage via ROS production
- [[Senescence]] — persistent DNA damage signaling drives senescence induction
- [[Apoptosis]] — cell death pathway triggered by irreparable DNA damage
- [[Cancer]] — genomic instability from DNA damage accumulation is a hallmark of cancer
- [[Aging]] — age-related accumulation of DNA damage drives multiple aging hallmarks
- [[BRCA1]]/[[BRCA2]] — homologous recombination repair; mutated in hereditary breast and ovarian cancer
- [[Cisplatin]] — chemotherapeutic that induces DNA crosslinks
- [[PARP1]] — detects SSBs; target of PARP inhibitors in BRCA-deficient cancers
- [[Telomere]] — telomere shortening creates persistent DDR signals at chromosome ends
- [[Epigenetics]] — DNA damage can alter DNA methylation and chromatin states

## Linking Summary
- New links added: [[DNA]], [[DNA Mutation]], [[Reactive Oxygen Species]], [[Mitochondria]], [[Oxidative Phosphorylation]], [[Hydrolysis]], [[Cytosine]], [[Uracil]], [[Mismatch Repair]], [[Lipid Peroxidation]], [[Malondialdehyde]], [[4-Hydroxynonenal]], [[Alkylation]], [[S-adenosylmethionine]], [[Ultraviolet Radiation]], [[Ionizing Radiation]], [[Cisplatin]], [[Doxorubicin]], [[Etoposide]], [[Cyclophosphamide]], [[Temozolomide]], [[Arsenic]], [[Cadmium]], [[ATM]], [[ATR]], [[DNA-PKcs]], [[CHK1]], [[CHK2]], [[p53]], [[BRCA1]], [[BRCA2]], [[RAD51]], [[H2AX]], [[γ-H2AX]], [[Base Excision Repair]], [[Nucleotide Excision Repair]], [[Non-Homologous End Joining]], [[Homologous Recombination]], [[OGG1]], [[APE1]], [[XRCC1]], [[Ku70]], [[Ku80]], [[MGMT]], [[PARP1]], [[PARP inhibitors]], [[Olaparib]], [[Niraparib]], [[Werner Syndrome]], [[Bloom Syndrome]], [[Ataxia Telangiectasia]], [[Cockayne Syndrome]], [[Xeroderma Pigmentosum]], [[Fanconi Anemia]], [[Lynch Syndrome]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Amyotrophic Lateral Sclerosis]], [[Telomere]], [[Senescence]], [[Apoptosis]], [[Stem Cell Exhaustion]], [[Cancer]], [[Breast Cancer]], [[ovarian cancer]], [[Colorectal Cancer]], [[Skin Cancer]], [[Oxidative Stress]], [[Aging]]
- Suggested new entity notes to create: [[Direct Reversal repair]], [[AlkB homolog]], [[MRE11-RAD50-NBS1 complex]], [[Replication stress]], [[Clustered damage]], [[Synthetic lethality]], [[Genomic Instability]], [[Translesion synthesis]], [[Fanconi anemia pathway]]
  - Strong connections to strengthen: [[DNA Damage]] ↔ DNA Repair, [[DNA Damage]] ↔ [[Aging]], [[DNA Damage]] ↔ Cancer, [[DNA Damage]] ↔ Cellular Senescence, [[DNA Damage]] ↔ Oxidative Stress
