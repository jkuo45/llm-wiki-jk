---
title: Tumor Microenvironment
description: The complex cellular and acellular milieu surrounding tumor cells — stromal fibroblasts, immune cells, vasculature, and extracellular matrix — that shapes cancer progression, immune evasion, and therapeutic response, including senescence/SASP- and CD38/IPD-mediated remodeling.
created: 2026-07-03
updated: 2026-08-16
tags:
  - biological-process
  - cancer
  - tumor-biology
  - intercellular-signaling
  - immunology
  - senescence
  - sasp
aliases:
  - TME
  - tumor stroma
  - tumor niche
  - tumour microenvironment
  - Cancer Microenvironment
protected: true
---

# Tumor Microenvironment

The **tumor microenvironment (TME)** is the complex ecosystem of non-malignant cells, soluble factors, and extracellular matrix (ECM) that surrounds and interacts with tumor cells. It profoundly influences tumor growth, invasion, [[Metastasis]], immune evasion, and response to therapy, and is increasingly recognized as a major therapeutic target — particularly in immuno-oncology. The TME includes cancer-associated fibroblasts (CAFs), tumor-associated macrophages (TAMs), myeloid-derived suppressor cells (MDSCs), endothelial cells, pericytes, immune cells, and a dense remodeled ECM.

## Components

### Cellular Components

- **Cancer-Associated Fibroblasts (CAFs)**: Activated fibroblasts that secrete growth factors, cytokines, and proteases; major contributors to [[SASP|Senescence-Associated Secretory Phenotype]] signaling in the tumor stroma. Senescent fibroblasts with a SASP are a key source of pro-tumorigenic factors.
- **Tumor-Associated Macrophages (TAMs)**: Often polarized toward an M2-like, immunosuppressive phenotype; promote angiogenesis and tissue remodeling; secrete IL-10 and TGF-β. TAM polarization is metabolically coupled — a **SENP1–SIRT3–cholesterol axis** drives M2 bias and suppresses [[CD8 T cells|CD8⁺ T cells]] (see [[Tumor-Associated Macrophage]]).
- **Myeloid-Derived Suppressor Cells (MDSCs)**: Potently immunosuppressive myeloid cells that inhibit T cell and NK cell function and promote immune evasion; highly CD38⁺ in some cancers.
- **Regulatory T cells (Tregs)**: Dampen anti-tumor immune responses; express [[CD38]] and are targeted by anti-CD38 mAbs.
- **Endothelial Cells**: Form the tumor vasculature; respond to proangiogenic signals from tumor and stromal cells; regulate immune cell infiltration.
- **NK cells**: Anti-tumor effectors; targeted by anti-CD38 mAbs for ADCC.
- **CD8⁺ cytotoxic T cells**: Primary anti-tumor effectors; often functionally exhausted or excluded from the TME.
- **Bregs (regulatory B cells)**: Suppress anti-tumor immunity via IL-10 and TGF-β.
- **T Lymphocytes**: CD8+ T cells can kill tumor cells but are often exhausted or excluded from the TME.

### Acellular Components

- **Extracellular Matrix (ECM)**: Collagens, fibronectin, laminin, and proteoglycans that provide structural and signaling support. Remodeled by [[MMP-9|matrix metalloproteinases (MMPs)]]; can be a physical barrier to T-cell infiltration.
- **Soluble Factors**: Growth factors ([[VEGF]], HGF, bFGF), cytokines ([[IL-6]], [[IL-8]], [[TNFα]]), and chemokines ([[CCL2]], [[CXCL1]], CXCL12) that drive paracrine signaling and create an immunosuppressive milieu.
- **Extracellular Vesicles**: Exosomes and microvesicles that transfer cargo (proteins, miRNAs) between cells.
- **Metabolic factors**: Hypoxia, lactate, adenosine, and NAD⁺ depletion (via [[CD38]]) suppress immune function.

## Role of Senescence in the TME

Senescent cells accumulate in the TME, particularly following [[Therapy-Induced Senescence|cancer therapy]], and profoundly alter its composition:

- **Pro-tumorigenic SASP**: [[SASP|Senescence-Associated Secretory Phenotype]] (IL-6, IL-8, VEGF, MMPs, GROα) promote cancer cell proliferation, invasion, [[Angiogenesis]], and immune evasion.
- **Paracrine senescence**: SASP from therapy-induced senescent cells can induce senescence in neighboring stromal cells, amplifying the pro-tumorigenic niche.
- **Immune modulation**: SASP factors recruit immunosuppressive cells (MDSCs, TAMs) and impair [[Natural Killer Cells|NK cell]] and T cell function, enabling immune evasion.
- **ECM remodeling**: SASP proteases degrade and restructure the ECM, facilitating cancer cell migration and [[Metastasis]].

> [!warning] Therapy-Induced SASP
> Chemotherapy and radiation can induce senescence in both tumor and stromal cells. The resulting SASP may paradoxically promote tumor relapse, drug resistance, and metastatic dissemination — a major clinical concern motivating [[Senomorphic Therapy|senomorphic]] strategies.

### Pro-Tumor vs Anti-Tumor Remodeling

The impact of SASP on the TME varies by cell type and senescence trigger:

- **Pro-Tumor**: SASP promotes an immunosuppressive TME by recruiting MDSCs and M2 macrophages; IL-6 from senescent cells elevates adenosine via [[CD73]]/JAK/[[STAT3]] signaling, impairing T cell infiltration; SASP-driven [[Epithelial-to-mesenchymal transition|EMT]] and MMP-mediated ECM remodeling enhance invasion; SASP-induced angiogenesis provides tumor nutrients.
- **Anti-Tumor**: SASP recruits immune cells for [[Senescence Surveillance]] of damaged and pre-malignant cells; cell cycle arrest limits proliferation of precancerous cells; IFN-γ synergizes with SASP to enhance antigen presentation and immune surveillance.

> [!info] Source: Dong et al. 2024
> In melanoma, SASP-associated cytokines support immune surveillance; in HCC, hepatic SASP promotes tumor progression through macrophage polarization.

## CD38 in the TME

**[[CD38]]** is expressed on multiple immunosuppressive TME cell populations (Tregs, MDSCs, TAMs, Bregs). Its enzymatic activity depletes [[NAD+]] in the TME and generates **adenosine** (via CD73), which further suppresses anti-tumor T-cell and NK-cell responses.

Anti-CD38 therapies ([[Daratumumab]], [[Isatuximab]]) can reshape the TME by:
- Eliminating CD38⁺ Tregs and MDSCs, restoring T/NK cell function
- Reducing adenosine-mediated immunosuppression
- Combining with checkpoint inhibitors (e.g., anti-PD-1/PD-L1) to achieve synergistic TME remodeling

## Therapeutic Targeting

- **Senolytics** ([[Senolytic|Senolytics]]): Clear senescent cells from the TME, eliminating SASP sources.
- **Senomorphics** ([[Senomorphic Therapy]]): Suppress SASP factor production without killing senescent cells.
- **Immune checkpoint inhibitors**: Restore anti-tumor immunity in the TME (anti-PD-1, anti-PD-L1, anti-CTLA-4).
- **Anti-CD38 mAbs** ([[Daratumumab]], [[Isatuximab]]): Deplete suppressive CD38⁺ cells.
- **Isatuximab + cemiplimab** (anti-PD-1): In trials for advanced solid tumors.
- **Adenosine pathway**: [[CD73]] inhibitors, A2A receptor antagonists.
- **Anti-angiogenics**: Target VEGF and other proangiogenic SASP factors.
- **CAF reprogramming**: Normalize or deplete cancer-associated fibroblasts.
- **CAR-T cell therapies**: Engineered to resist TME-mediated exhaustion.

## Documents

- [[_document_ - The Senescence-Associated Secretory Phenotype The Dark Side of Tumor Suppression|SASP: The Dark Side of Tumor Suppression]]
  - Comprehensive characterization of how senescent cells alter the tissue microenvironment through SASP, promoting tumor progression via proliferation, invasion, angiogenesis, immune modulation, and ECM remodeling.

- [[_document_ - sirtuins (overview, CD38 KO risks, cancer therapies)|sirtuins (overview, CD38 KO risks, cancer therapies)]]
  - Cancer context is mixed: inhibiting CD38 can help in some tumor microenvironments (reducing immunosuppression), but CD38 has complex roles; no clear pro-cancer signal in aging mouse studies, but caution is needed.

## Connections

- [[Cancer]] — The TME is the non-malignant cellular context of tumors.
- [[SASP|Senescence-Associated Secretory Phenotype]] — Major modifier of the TME produced by senescent stromal cells.
- [[Senescent Cells]] — Accumulate in the TME and alter its properties.
- [[Paracrine Senescence]] — SASP-induced senescence spreads through the TME.
- [[Therapy-Induced Senescence]] — Treatment generates senescent cells in the TME.
- [[Senolytic]] — Clears senescent cells from the TME.
- [[Senomorphic Therapy]] — Suppresses SASP in the TME.
- [[Angiogenesis]] — SASP factors drive TME vascularization.
- [[Metastasis]] — TME remodeling facilitates cancer cell dissemination.
- [[Immune Evasion]] — TME components suppress anti-tumor immunity.
- [[Inflammaging]] — Chronic inflammation in the TME parallels age-related inflammaging.
- [[Fibroblasts]] — Stromal fibroblasts are major TME components.
- [[Macrophages]] — TAMs are prominent TME immune cells.
- [[Endothelial Cells]] — Form tumor vasculature in the TME.
- [[Natural Killer Cells]] — Anti-tumor effectors affected by TME immunosuppression.
- [[CD38]] — Expressed on TME immunosuppressive cells; major therapeutic target.
- [[CD73]] — Ecto-5'-nucleotidase that generates adenosine in the TME.
- [[NAD+]] — Depleted in the TME by CD38; relevant to metabolic immunosuppression.
- [[Daratumumab]] / [[Isatuximab]] — Anti-CD38 mAbs that remodel the TME.
- [[PD-L1]] — Immune checkpoint molecule expressed in the TME.
- [[STAT3]] — Mediates IL-6/CD73 adenosine axis in the TME.
- [[Multiple Myeloma]] — Bone marrow TME critical in MM pathogenesis.
- [[Inflammation]] — Chronic inflammation in TME links to tumor promotion.
- [[Tumor-Associated Macrophage]] — TAMs; SENP1-SIRT3-cholesterol axis drives M2 polarization and immunosuppression.
- [[SIRT3]] — mitochondrial deacetylase; SIRT3 in TAMs reprograms their metabolism (cholesterol) toward immunosuppression.
- [[Metabolic Plasticity]] — metabolic plasticity in tumor cells and immune cells shapes TME immunometabolism.
- [[Ferroptosis]] — iron/redox cell-death modality modulated by the SIRT3 network in the TME.

## Linking Summary (immunometabolism additions, 2026-08-31)

- New links added: [[Tumor-Associated Macrophage]], [[SIRT3]], [[Metabolic Plasticity]], [[Ferroptosis]]
- Strong connections to strengthen:
  - [[Tumor Microenvironment]] ↔ [[Tumor-Associated Macrophage]] — TAMs as the dominant immunosuppressive immune population
  - [[Tumor Microenvironment]] ↔ [[SIRT3]] — SIRT3-mediated immunometabolic reprogramming of TAMs

- New links added: [[Tumor Microenvironment]], [[Cancer]], [[SASP|Senescence-Associated Secretory Phenotype]], [[Senescent Cells]], [[Paracrine Senescence]], [[Therapy-Induced Senescence]], [[Senolytic]], [[Senomorphic Therapy]], [[Angiogenesis]], [[Metastasis]], [[Immune Evasion]], [[Inflammaging]], [[IL-6]], [[IL-8]], [[VEGF]], [[CCL2]], [[CXCL1]], [[MMP-9]], [[TNFα]], [[Fibroblasts]], [[Macrophages]], [[Endothelial Cells]], [[Natural Killer Cells]], [[CD38]], [[CD73]], [[NAD+]], [[Daratumumab]], [[Isatuximab]], [[Multiple Myeloma]], [[Inflammation]], [[PD-L1]], [[STAT3]], [[Epithelial-to-mesenchymal transition|EMT]], [[Senescence Surveillance]]
- Suggested new entity notes to create: [[Cancer-Associated Fibroblasts]], [[Tumor-Associated Macrophages]], [[Immune Evasion]], [[cADPR]], [[Adenosine Pathway]], [[CAF (Cancer-Associated Fibroblast)]]
- Strong connections to strengthen: [[Tumor Microenvironment]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]], [[Tumor Microenvironment]] ↔ [[Cancer]], [[Tumor Microenvironment]] ↔ [[Therapy-Induced Senescence]], [[Tumor Microenvironment]] ↔ [[CD38]]