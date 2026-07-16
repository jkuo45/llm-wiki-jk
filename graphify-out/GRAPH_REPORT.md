# Graph Report - notes  (2026-07-16)

## Corpus Check
- Large corpus: 2593 files · ~2,260,009 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 2539 nodes · 36849 edges · 46 communities (37 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Adrenochrome Core
- Adrenochrome & Autophagy Cancer
- Melanin & Dopamine Metabolites
- AGEs & Glycation
- Alzheimer & Amyloid
- MITF & Autophagy TFEB
- Longevity Genes & Stress
- TGF-beta & Tumor Microenvironment
- Inflammasome & Pyroptosis
- Epigenetic Senescence & m6A
- Fasting & Ketogenesis
- Pluripotency & Reprogramming
- mTOR Signaling
- Epigenetic Clock & Drift
- NF-kB & Inflammation
- BRCA & Cell Cycle
- ATG Autophagy Machinery
- Senolytics & Senescence
- CDK & Cell Cycle
- NAD+ Precursors & CD38
- Mitohormesis & Redox
- PGC-1alpha & Xenohormesis
- Lysosome & Autolysosome
- NAD+ Gut Microbiome
- Insulin & Metabolic
- C. elegans Autophagy
- Immune Autophagy & Aging
- ECM & Focal Adhesion
- miRNA Biogenesis
- Fisetin Bioavailability
- Peroxisome & Beta-Oxidation
- Humanin & Mitochondrial Peptides
- IDO Kynurenine Pathway
- Macrophage & T-cell Cytokines
- Aging Theories & Chromatin
- Endothelial-Mesenchymal Transition
- Adherens Junction & Cadherin
- Adrenochrome PubChem
- Aminoguanidine PubChem
- Silver Oxide PubChem
- Rubinsztein Autophagy-Aging
- TFEB Disease Model
- RGD Cancer Targeting
- Cellular Rejuvenation Trial
- Resting Metabolic Rate
- Thymic Rejuvenation

## God Nodes (most connected - your core abstractions)
1. `Comt notes` - 1483 edges
2. `Oxidative Stress` - 591 edges
3. `Cancer` - 552 edges
4. `Senescence-Associated Secretory Phenotype` - 488 edges
5. `The sirtuin family in health and disease` - 464 edges
6. `Apoptosis` - 451 edges
7. `Autophagy` - 421 edges
8. `Aging` - 401 edges
9. `Inflammation` - 354 edges
10. `SIRT1` - 312 edges

## Surprising Connections (you probably didn't know these)
- `Acetyl-CoA` --links_to--> `Peroxisomes Explained`  [EXTRACTED]
  _link/Acetyl-CoA.md → autophagy/_document_ - peroxisomes, autophagy.md
- `Cellular senescence and SASP in tumor progression and therapeutic opportunities` --links_to--> `PD-L1`  [EXTRACTED]
  senescence/_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities.md → cancer/PD-L1.md
- `Cellular senescence and SASP in tumor progression and therapeutic opportunities` --links_to--> `Therapy-Induced Senescence`  [EXTRACTED]
  senescence/_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities.md → cancer/Therapy-Induced Senescence.md
- `Cellular senescence and SASP in tumor progression and therapeutic opportunities` --links_to--> `ATM`  [EXTRACTED]
  senescence/_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities.md → _link/ATM.md
- `Cellular senescence and SASP in tumor progression and therapeutic opportunities` --links_to--> `ATR`  [EXTRACTED]
  senescence/_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities.md → _link/ATR.md

## Communities (46 total, 9 thin omitted)

### Community 0 - "Adrenochrome Core"
Cohesion: 0.06
Nodes (330): Abram Hoffer, Adrenaline catabolism, adrenaline-quinone, Adrenochromatization, Adrenochrome, Adrenochrome Hypothesis, Adrenochrome Pathway, Adrenochrome Semiquinone Radical (+322 more)

### Community 1 - "Adrenochrome & Autophagy Cancer"
Cohesion: 0.07
Nodes (314): MAVS, Retinoic-acid-inducible protein I-like receptor, RIPK1, Wound Healing, MAPK Signaling, RAS, A1/Bfl-1, ABT-263 (+306 more)

### Community 2 - "Melanin & Dopamine Metabolites"
Cohesion: 0.07
Nodes (236): 5,6-Dihydroxyindole, Atrogin-1, Carbazochrome sulfonic acid, Cysteinyldopa, 'Pharmacological Effects of Urolithin A and Its Role in Muscle Health and Performance: Current Knowledge and Prospects', Dopachrome, Dopaquinone, Ellagibacter isourolithinifaciens (+228 more)

### Community 3 - "AGEs & Glycation"
Cohesion: 0.07
Nodes (217): 3-deoxyglucosone, ABG, Adrenochrome monoaminoguanidine, Advanced Glycation End Products, AGER1, Alagebrium, Aldehyde Dehydrogenases, Aldo-Keto Reductases (+209 more)

### Community 4 - "Alzheimer & Amyloid"
Cohesion: 0.19
Nodes (98): cDNA, Pyroptosis, SLC19A1, 5xFAD, Adaptive Immune System, AIM2, Alzheimer's Disease, Amyloid Beta (+90 more)

### Community 5 - "MITF & Autophagy TFEB"
Cohesion: 0.13
Nodes (87): MITF, Transcription factor EB, 14-3-3 protein, ACAT1, ALKBH5, Autophagic Flux, Autophagy Inhibitor, bHLH-LZ Transcription Factors (+79 more)

### Community 6 - "Longevity Genes & Stress"
Cohesion: 0.15
Nodes (80): 2-deoxy-D-glucose, aak-2, Actinonin, ATF5, c-Jun N-terminal kinase, cco-1, clk-1, Doxycycline (+72 more)

### Community 7 - "TGF-beta & Tumor Microenvironment"
Cohesion: 0.15
Nodes (79): SMAD3, TGF-β, TGF-β Signaling, Exosomes, Tumour Microenvironment, VEGF, Fibrosis, alpha-1 Antitrypsin (+71 more)

### Community 8 - "Inflammasome & Pyroptosis"
Cohesion: 0.15
Nodes (76): Caspase-1, Interleukin 1β, NLRP3 Inflammasome, BET inhibitors, DAMP, Hepatocellular Carcinoma, Lipoteichoic Acid, MMP (+68 more)

### Community 9 - "Epigenetic Senescence & m6A"
Cohesion: 0.25
Nodes (76): METTL3, MLL1, Therapy-Induced Senescence, Epigenetic changes during aging and their reprogramming potential, The role of the dynamic epigenetic landscape in senescence: orchestrating SASP expression, H3K27me3, H3K9me3, Histone Variant (+68 more)

### Community 10 - "Fasting & Ketogenesis"
Cohesion: 0.15
Nodes (73): Dietary Restriction, GCN5, IGF1, Intermittent Fasting, Ketogenesis, Ketogenic Diet, PPAR-alpha, Caenorhabditis elegans (+65 more)

### Community 11 - "Pluripotency & Reprogramming"
Cohesion: 0.26
Nodes (72): Assembloids, BIG1, Blastocyst, BMP Signaling Pathway, Cellular Reprogramming, CRISPR, Differentiation, Disease Modeling (+64 more)

### Community 12 - "mTOR Signaling"
Cohesion: 0.20
Nodes (68): 4E-BP1, Deptor, mTOR signaling at a glance, eIF4E, mLST8, mSIN1, mTORC2, PRAS40 (+60 more)

### Community 13 - "Epigenetic Clock & Drift"
Cohesion: 0.20
Nodes (58): Transcriptome, HDACs, CHD4, DNA Methylation, DNAmGrimAge, Epigenetic alterations—The silent indicator for early aging and age‐associated, Epigenetic Clock, Epigenetic Drift (+50 more)

### Community 14 - "NF-kB & Inflammation"
Cohesion: 0.23
Nodes (54): NF-κB, TRAF6, Mitoxantrone, 5Z-7-oxozeaenol, Amphiregulin, Apigenin, AUF1, BAFF (+46 more)

### Community 15 - "BRCA & Cell Cycle"
Cohesion: 0.20
Nodes (48): BRCA1, BRCA, 5-Azacytidine, Aphidicolin, Bromodeoxyuridine, Busulfan, Camptothecin, CDKN1A (+40 more)

### Community 16 - "ATG Autophagy Machinery"
Cohesion: 0.27
Nodes (47): Ambra-1, Atg1, Atg101, Atg12, Atg13, Atg14, Atg16, Atg16L1 (+39 more)

### Community 17 - "Senolytics & Senescence"
Cohesion: 0.23
Nodes (44): Senomorphics, Age-Related Diseases, Alveolar Type II Cells, BMI1, CDKN2A, Chemokines, Chondrocytes, Dasatinib (+36 more)

### Community 18 - "CDK & Cell Cycle"
Cohesion: 0.26
Nodes (44): Abemaciclib, CDK4/6, Anaphase Promoting Complex-Cyclosome, CDK Inhibitor, CDKN1B, CDKN1C, Cohesin, Cyclin (+36 more)

### Community 19 - "NAD+ Precursors & CD38"
Cohesion: 0.28
Nodes (40): CD157, Nicotinamide Riboside—The Current State of Research and Therapeutic Uses, Nicotinamide, Nicotinic acid, SARM1, BMAL1, CD38, CD73 (+32 more)

### Community 20 - "Mitohormesis & Redox"
Cohesion: 0.29
Nodes (37): Rossmann fold, TGF-beta1, Cardiac Fibrosis, FOXO3a, HIF-1α, Hormetic Window, Redox Vaccination, SOD2 (+29 more)

### Community 21 - "PGC-1alpha & Xenohormesis"
Cohesion: 0.25
Nodes (36): Carbazochrome, Mitohormetic Redox-Relay, PGC1α, Retinoid X receptor α, LKB1, PGC1-α, Google AI Studio, Phytochemicals (+28 more)

### Community 22 - "Lysosome & Autolysosome"
Cohesion: 0.29
Nodes (33): Amino Acid Sensing, AP2, AP4, Autolysosome, Autophagic Lysosome Reformation, CASTOR1, CASTOR2, 'Lysosome biogenesis: Regulation and functions' (+25 more)

### Community 23 - "NAD+ Gut Microbiome"
Cohesion: 0.37
Nodes (31): NAD+ Precursors Nicotinamide Mononucleotide (NMN) and Nicotinamide Riboside, 'The Gut Microbiome, Aging, and Longevity: A Systematic Review', Acetate, Acetyl-CoA, Acetylation, Actinobacteria, Akkermansia, Alpha Diversity (+23 more)

### Community 24 - "Insulin & Metabolic"
Cohesion: 0.21
Nodes (30): Insulin Resistance, Adipogenesis, Adipose Tissue, Exercise, Fatty acid, Glucagon, Glucokinase, GLUT4 (+22 more)

### Community 25 - "C. elegans Autophagy"
Cohesion: 0.47
Nodes (30): Atg15, ATG-16.2, ATGL, Caenorhabditis elegans, CeTOR, DAF-2, DAF-7, HLH-30 (+22 more)

### Community 26 - "Immune Autophagy & Aging"
Cohesion: 0.33
Nodes (28): Adaptive Immune Response, Autophagy, Autophagy Inducer, B Cell, Caloric Restriction Mimetics, CD8+ T Cell, Chaperone-Mediated Autophagy, Autophagy takes it all – autophagy inducers target immune aging (+20 more)

### Community 27 - "ECM & Focal Adhesion"
Cohesion: 0.37
Nodes (25): Basal Lamina, c-Met, Connective Tissue, Contact Inhibition, Extracellular Matrix, FAK Signaling, Focal Adhesion, Hepatocyte Growth Factor (+17 more)

### Community 28 - "miRNA Biogenesis"
Cohesion: 0.47
Nodes (23): DGCR8, Drosha, miR-217, miR-378, miR-543, Argonaute, Dicer, Double-stranded RNA-binding domain (+15 more)

### Community 29 - "Fisetin Bioavailability"
Cohesion: 0.75
Nodes (21): Geraldol, Bioavailability, Cyclodextrins, Fisetin—In Search of Better Bioavailability—From Macro to Nano Modifications: A Review, Fisetin, Flavonol, Human Serum Albumin, Inulin (+13 more)

### Community 30 - "Peroxisome & Beta-Oxidation"
Cohesion: 0.51
Nodes (20): ABCD1, Adrenoleukodystrophy, Beta-Oxidation, Peroxisomes Explained, ESCRT, PERO1, Peroxisome, Peroxisome Biogenesis Network (+12 more)

### Community 31 - "Humanin & Mitochondrial Peptides"
Cohesion: 0.36
Nodes (16): Intraperitoneal, Allosteric Regulation, Amyloid Precursor Protein, CPEO, Humanin: a harbinger of mitochondrial-derived peptides?, FPRL1, Humanin, IGF1R (+8 more)

### Community 32 - "IDO Kynurenine Pathway"
Cohesion: 0.97
Nodes (16): B18R, 3-Hydroxykynurenine, Aryl Hydrocarbon Receptor, indoleamine 2,3-dioxygenase, Epacadostat, IDO1, IDO2, Interferon-gamma (+8 more)

### Community 33 - "Macrophage & T-cell Cytokines"
Cohesion: 0.69
Nodes (15): CD206, CD4+ T Cells, CD86, CD9, IL-10, IL-12, IL-13, IL-4 (+7 more)

### Community 34 - "Aging Theories & Chromatin"
Cohesion: 0.99
Nodes (13): Antagonistic Pleiotropy, Chromatin Modifiers, Double-Strand Break, Epigenetic Landscape, Information Theory of Aging, Mutations, Relocalization of Chromatin Modifiers (RCM) Hypothesis, Retrotransposon (+5 more)

### Community 35 - "Endothelial-Mesenchymal Transition"
Cohesion: 1.14
Nodes (9): ACKR3, ACTA2, CDH5, CXCL12, CXCR4, Endothelial-to-Mesenchymal Transition, LIT-927, PECAM1 (+1 more)

### Community 36 - "Adherens Junction & Cadherin"
Cohesion: 0.60
Nodes (6): Actin Cytoskeleton, Adherens Junction, Cadherin, CDH1, CDH2, RhoA

## Knowledge Gaps
- **16 isolated node(s):** `Aminoguanidine`, `Adrenochrome`, `Silver(1+) oxide`, `This method to reverse cellular aging is about to be tested in humans`, `Thymic Rejuvenation and Aging` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Oxidative Stress` connect `Adrenochrome Core` to `Adrenochrome & Autophagy Cancer`, `Melanin & Dopamine Metabolites`, `AGEs & Glycation`, `Alzheimer & Amyloid`, `MITF & Autophagy TFEB`, `Longevity Genes & Stress`, `Epigenetic Senescence & m6A`, `Fasting & Ketogenesis`, `mTOR Signaling`, `Epigenetic Clock & Drift`, `NF-kB & Inflammation`, `BRCA & Cell Cycle`, `ATG Autophagy Machinery`, `Senolytics & Senescence`, `CDK & Cell Cycle`, `NAD+ Precursors & CD38`, `Mitohormesis & Redox`, `PGC-1alpha & Xenohormesis`, `Lysosome & Autolysosome`, `Insulin & Metabolic`, `Immune Autophagy & Aging`, `Macrophage & T-cell Cytokines`, `Aging Theories & Chromatin`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `Cancer` connect `Adrenochrome & Autophagy Cancer` to `Adrenochrome Core`, `Melanin & Dopamine Metabolites`, `AGEs & Glycation`, `Alzheimer & Amyloid`, `MITF & Autophagy TFEB`, `TGF-beta & Tumor Microenvironment`, `Inflammasome & Pyroptosis`, `Epigenetic Senescence & m6A`, `Fasting & Ketogenesis`, `Pluripotency & Reprogramming`, `mTOR Signaling`, `Epigenetic Clock & Drift`, `NF-kB & Inflammation`, `BRCA & Cell Cycle`, `ATG Autophagy Machinery`, `Senolytics & Senescence`, `CDK & Cell Cycle`, `NAD+ Precursors & CD38`, `Immune Autophagy & Aging`, `ECM & Focal Adhesion`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Why does `Senescence-Associated Secretory Phenotype` connect `NF-kB & Inflammation` to `Adrenochrome Core`, `Adrenochrome & Autophagy Cancer`, `Melanin & Dopamine Metabolites`, `AGEs & Glycation`, `Alzheimer & Amyloid`, `Longevity Genes & Stress`, `TGF-beta & Tumor Microenvironment`, `Inflammasome & Pyroptosis`, `Epigenetic Senescence & m6A`, `Fasting & Ketogenesis`, `mTOR Signaling`, `Epigenetic Clock & Drift`, `BRCA & Cell Cycle`, `Senolytics & Senescence`, `CDK & Cell Cycle`, `NAD+ Precursors & CD38`, `Mitohormesis & Redox`, `PGC-1alpha & Xenohormesis`, `Immune Autophagy & Aging`, `miRNA Biogenesis`, `Fisetin Bioavailability`, `Endothelial-Mesenchymal Transition`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **What connects `Aminoguanidine`, `Adrenochrome`, `Silver(1+) oxide` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Adrenochrome Core` be split into smaller, more focused modules?**
  _Cohesion score 0.06392189370912775 - nodes in this community are weakly interconnected._
- **Should `Adrenochrome & Autophagy Cancer` be split into smaller, more focused modules?**
  _Cohesion score 0.06601412262672718 - nodes in this community are weakly interconnected._
- **Should `Melanin & Dopamine Metabolites` be split into smaller, more focused modules?**
  _Cohesion score 0.07479264334655608 - nodes in this community are weakly interconnected._