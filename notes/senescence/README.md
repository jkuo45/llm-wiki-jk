---
title: Senescence notes
aliases: []
description: Index of wiki notes for cellular senescence and senotherapeutics
created: 2026-07-09
updated: 2026-07-15
---
# Senescence

This directory contains notes and research regarding [[Senescence|cellular senescence]] — a state of permanent cell-cycle arrest triggered by diverse stresses and orchestrated by the [[p53]]/[[p21 CIP1|p21]] and [[p16 INK4a|p16]]/[[RB1|Rb]] pathways, sustained by the [[SASP|Senescence-Associated Secretory Phenotype]], [[Senescence-Associated Heterochromatin Foci|SAHF]], and chromatin remodeling. It covers senescence subtypes ([[Replicative Senescence]], [[Oncogene-Induced Senescence]], [[Therapy-Induced Senescence]], [[Stress-Induced Premature Senescence]]), [[Senescent Cells]] and their [[Senescence Surveillance|immune clearance]], [[Senescence-associated mitochondrial dysfunction|mitochondrial dysfunction]], [[Paracrine Senescence|paracrine spread]], [[Immunosenescence]], [[Tumor Microenvironment|TME]] interactions via SASP components like [[Galectin-9]] and [[PD-L1]], and [[Senotherapeutic|senotherapeutics]] ([[Senolytic|senolytics]], [[Senomorphic|senomorphics]]).


  **entity_relevance_score_1 (1-10)**: This score measures the centrality of the entity to the core senescence program and its therapeutic targeting.

   * 10 (Core): The process itself, its defining secretory phenotype, or the arrested cell.
   * 7-9 (High): Principal senescence subtypes, hallmark structures, or canonical senotherapeutic classes.
   * 4-6 (Moderate): Specific biomarkers, signaling nodes, or context-dependent effectors.
   * 1-3 (Low/Tangential): Entities with a distant or context-specific connection to senescence.

**entity_sentiment_score_1 (-1,0,1):**  This score reflects the functional directionality of the entity relative to senescence and tissue health.

   * 1 (Beneficial/Positive): Immune clearance of senescent cells, senotherapeutics, or physiological roles (development, wound healing).
   * 0 (Neutral/Structural): Core structural components, scaffold proteins, or entities with complex, dual roles depending on cellular context.
   * -1 (Detrimental/Negative): The arrested/pro-inflammatory senescent state, the SASP, or pathological accumulations driving aging.

## Maintenance

- Last updated: 15_July_2026 11:00 AM PDT
- Total count of entities: 38

## Documents

- [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
  - JCI review (2026) on cGAS-STING in brain disorders. Senescence-relevant angles: [[Astrocyte Senescence|astrocyte senescence]], [[Cellular Senescence]] in glia (amplified by [[APOE4]]/[[TREM2]]), senescent-cell cGAS-STING via [[Micronuclei|micronuclear envelope rupture]] ([[Barrier-to-Autointegration Factor 1|BAF1]] loss), and [[Senomorphic]]-style suppression of the cGAS-STING/SASP axis. Core entities: [[cGAS]], [[STING]], [[cGAS-STING Pathway]], [[Microglia]], [[Neuroinflammation]].

- [[_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities|Dong et al. 2024 Senescence and SASP in Tumors]]
  - Comprehensive review (Dong et al., 2024, Molecular Cancer, PMC11365203) covering senescence types (RS, OIS, TIS, rare forms), biomarkers (SA-β-gal, p16, p21), SASP composition, and the double-edged SASP role in tumors: beneficial (immune surveillance via [[NK Cells|NK]] and [[CD8+ T cells|CD8+ T cells]] recruitment, cell-cycle arrest) vs. detrimental (EMT, stemness, angiogenesis, [[Tumor Microenvironment|TME]] remodeling). Therapeutic strategies: senolytics ([[Dasatinib]], [[Quercetin]], [[Navitoclax]], BET degraders, ADCs, galactose nanoparticles) and senomorphics (NF-κB, JAK/STAT, mTOR inhibitors). Highlights [[Galectin-9]] and [[PD-L1]] as SASP factors reshaping the TME.

  - [[_document_ - cellular_senescence_ipf_diseases-14-00201|Cellular Senescence in IPF (Baurzhan et al., 2026)]]
    - Narrative review synthesizing senescence mechanisms in [[Idiopathic Pulmonary Fibrosis|IPF]]—[[Telomere Attrition|telomere attrition]], [[Mitochondrial Dysfunction|mitochondrial dysfunction]], [[TGFβ|TGF-β]], and the [[SASP]]—and senolytic/senomorphic strategies ([[Dasatinib|dasatinib]]+[[Quercetin|quercetin]] pilot, polyphenols). Core entities: [[Alveolar Type II Cells]], [[Fibroblast]], [[NEMO]], [[PINK1]], [[EF24]], [[Hesperetin]], [[Luteoloside]].

  - [[_document_ - Senolytic Treatment With Fisetin Reverses Age‐Related Endothelial Dysfunction Partially Mediated by SASP Factor CXCL12|Mahoney et al. 2025 — Fisetin Reverses Age-Related Endothelial Dysfunction]]
    - Single-cell transcriptomics study showing fisetin eliminates senescent ECs in vivo, identifies CXCL12 as the key SASP factor driving age-related endothelial dysfunction via NO suppression, mitochondrial ROS, and EndoMT. Core entities: [[Fisetin]], [[CXCL12]], [[Endothelial Cells]], [[Endothelial Dysfunction]], [[Endothelial-to-Mesenchymal Transition]], [[ACKR3]].

| entity                                              |     datetime updated      | entity_type_1          | relevance_1 | sentiment_1 | justification                                                                                                     |
| :-------------------------------------------------- | :-----------------------: | :--------------------- | :---------: | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| [[Senescence]]                                      | 09_July_2026 12:00 PM PDT | Biological Process     |     10      |      0      | The senescence program itself; hub of the topic.                                                                  |
| [[Senescent Cells]]                                 | 09_July_2026 12:00 PM PDT | Biological Process     |     10      |     -1      | The arrested, apoptosis-resistant cells that accumulate with age.                                                 |
| [[SASP|Senescence-Associated Secretory Phenotype]] | 09_July_2026 12:00 PM PDT | Biological Process     |     10      |     -1      | The SASP is the pro-inflammatory effector arm of senescence.                                                      |
| [[Paracrine Senescence]]                            | 09_July_2026 12:00 PM PDT | Biological Process     |      9      |     -1      | Bystander spread of senescence through SASP factors.                                                              |
| [[Paracrine Reprogramming]]                         | 11_July_2026 12:00 PM PDT | Biological Process     |      8      |      0      | SASP factors alter the differentiation status (stemness, EMT, lineage) of neighbouring cells; dual role.          |
| [[CCL20]]                                           | 11_July_2026 12:00 PM PDT | Chemical Compound      |      5      |     -1      | SASP CC-chemokine (MIP-3α); CCR6 axis recruits TH17 cells and drives paracrine arrest.                            |
| [[Myeloid-Derived Suppressor Cells]]                | 11_July_2026 12:00 PM PDT | Cell Type              |      6      |     -1      | Immunosuppressive myeloid cells recruited/expanded by SASP (GM-CSF, CCL2, IL-6); impair senescent-cell clearance. |
| [[Therapy-Induced Senescence]]                      | 09_July_2026 12:00 PM PDT | Biological Process     |      9      |     -1      | Senescence provoked by chemo/radiation; a major model and clinical concern.                                       |
| [[Immunosenescence]]                                | 09_July_2026 12:00 PM PDT | Biological Process     |      8      |     -1      | Age-related deterioration of immune function with senescence-like features.                                       |
| [[Senescence Surveillance]]                         | 09_July_2026 12:00 PM PDT | Biological Process     |      8      |      1      | Immune-mediated clearance of senescent cells.                                                                     |
| [[Senescence-associated mitochondrial dysfunction]] | 09_July_2026 12:00 PM PDT | Biological Process     |      8      |     -1      | SAMD drives SASP via ROS and mtDNA release.                                                                       |
| [[Senescence-Associated Heterochromatin Foci]]      | 09_July_2026 12:00 PM PDT | Biological Structure   |      8      |      0      | DAPI-dense heterochromatin enforcing arrest.                                                                      |
| [[Senescence-Associated Distension of Satellites]]  | 09_July_2026 12:00 PM PDT | Biological Structure   |      7      |      0      | Decompaction of pericentromeric heterochromatin in senescence.                                                    |
| [[Senescent cell anti-apoptotic pathways]]          | 09_July_2026 12:00 PM PDT | Biological Process     |      9      |     -1      | SCAPs let senescent cells resist apoptosis.                                                                       |
| [[Senolytics]]                                      | 09_July_2026 12:00 PM PDT | Pharmacological Action |      9      |      1      | Drugs that selectively kill senescent cells.                                                                      |
| [[Senolytic]]                                       | 09_July_2026 12:00 PM PDT | Pharmacological Action |      8      |      1      | A single senolytic compound/intervention.                                                                         |
| [[Senolytic Therapy]]                               | 09_July_2026 12:00 PM PDT | Therapeutic Strategy   |      9      |      1      | Therapeutic strategies exploiting SCAPs to eliminate senescent cells.                                             |
| [[Senomorphic]]                                     | 09_July_2026 12:00 PM PDT | Pharmacological Action |      8      |      1      | Suppresses SASP without killing senescent cells.                                                                  |
| [[Senomorphic Therapy]]                             | 09_July_2026 12:00 PM PDT | Therapeutic Strategy   |      8      |      1      | Therapies targeting NF-kB, mTOR, JAK-STAT, cGAS-STING to suppress SASP.                                           |
| [[Senotherapeutic]]                                 | 09_July_2026 12:00 PM PDT | Pharmacological Action |      8      |      1      | Umbrella term for any intervention targeting senescent cells.                                                     |
| [[Senotherapy]]                                     | 09_July_2026 12:00 PM PDT | Therapeutic Strategy   |      8      |      1      | Class of interventions mitigating effects of senescence on aging.                                                 |
| [[Acute Stress-Associated Phenotype]]               | 10_July_2026 12:00 PM PDT | Biological Process     |      7      |     -1      | Acute ATM/TRAF6/TAK1 stress response that transitions into the chronic SASP; blocked by apigenin via PRDX6/HSPA8. |
| [[Activin A]]                                        | 12_July_2026 12:00 PM PDT | Growth Factor          |      5      |      0      | TGF-β family SASP component; ALK4/SMAD2/3 mediates paracrine senescence alongside TGF-β1 and BMP2.               |
| [[CDKN2B]]                                           | 12_July_2026 12:00 PM PDT | Kinase Inhibitor       |      6      |      0      | Encodes p15^INK4b; key CDK inhibitor induced by TGF-β in paracrine senescence; cooperates with p21.              |
| [[BrdU]]                                             | 13_July_2026 12:00 PM PDT | Chemical Compound      |      3      |      0      | Thymidine analog proliferation marker; reduced BrdU incorporation is a readout of senescence-associated arrest.   |
| [[VEGFc]]                                            | 13_July_2026 12:00 PM PDT | Growth Factor          |      5      |     -1      | VEGF-C SASP growth factor induced during OIS; promotes lymphangiogenesis/angiogenesis and paracrine signalling.  |
| [[Tumor Microenvironment]]                           | 13_July_2026 12:00 PM PDT | Biological Structure   |      7      |      0      | Cross-topic entity; SASP reshapes TME via immunosuppression, angiogenesis, and EMT; placed in _link/ hub.         |
| [[Galectin-9]]                                       | 13_July_2026 12:00 PM PDT | Cytokine              |      5      |     -1      | SASP immunosuppressive lectin; increases Tregs and M2 macrophages; impairs anti-tumor immunity in TME.           |
| [[PD-L1]]                                            | 13_July_2026 12:00 PM PDT | Immune Checkpoint      |      7      |     -1      | SASP-associated immune checkpoint; CD73/adenosine and Galectin-9 axis contribute to immunosuppression in TME.   |
| [[Alveolar Type II Cells]]                             | 13_July_2026 12:00 PM PDT | Cell Type              |      8      |     -1      | Surfactant lung progenitor; most senescence-vulnerable epithelial population in IPF; SASP seeds fibroblast activation. |
| [[Fibroblast]]                                        | 13_July_2026 12:00 PM PDT | Cell Type              |      8      |     -1      | Mesenchymal ECM producer; senescent IPF fibroblasts resist apoptosis and amplify fibrogenic signaling. |
| [[NEMO]]                                             | 13_July_2026 12:00 PM PDT | Protein                |      6      |      0      | IKKγ scaffold; relays DDR (ATM) to NF-κB/SASP in senescence. |
| [[EF24]]                                              | 13_July_2026 12:00 PM PDT | Chemical Compound      |      5      |      0      | Curcumin analog; suppresses oxidative-stress epithelial senescence via PTEN/PI3K. |
| [[Hesperetin]]                                       | 13_July_2026 12:00 PM PDT | Chemical Compound      |      4      |      0      | Citrus flavonoid; restores autophagy/reduces ROS, antifibrotic in IPF. |
| [[Luteoloside]]                                       | 13_July_2026 12:00 PM PDT | Chemical Compound      |      4      |      0      | Flavonoid glycoside; autophagy-restoring, antifibrotic in IPF. |
| [[Endothelial Cells]]                                 | 15_July_2026 11:00 AM PDT | Cell Type              |      8      |     -1      | Most senescence-susceptible vascular cell type; senescent ECs secrete CXCL12 as key SASP factor driving endothelial dysfunction. |
| [[Endothelial-to-Mesenchymal Transition]]              | 15_July_2026 11:00 AM PDT | Biological Process     |      7      |     -1      | Transdifferentiation of ECs driven by SASP/CXCL12; mechanism of age-related endothelial dysfunction. |
| [[ACKR3]]                                              | 15_July_2026 11:00 AM PDT | Receptor               |      5      |      0      | CXCL12 scavenger receptor; altered Cxcl12-Ackr3 vs Cxcl12-Cxcr4 signaling in senescent ECs with aging. |
| [[CXCR4]]                                              | 15_July_2026 11:00 AM PDT | Receptor               |      5      |      0      | Principal CXCL12 receptor; Cxcl12-Cxcr4 interactions decrease with aging in senescent ECs. |
