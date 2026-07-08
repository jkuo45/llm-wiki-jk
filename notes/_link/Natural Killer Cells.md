---
title: Natural Killer Cells
description: Innate lymphoid cells with cytotoxic activity against virus-infected and
  tumour cells, regulated by activating and inhibitory receptors that recognise MHC-I
  and stress ligands.
type: entity
created: 2026-07-08
updated: 2026-07-08
tags:
  - cell-type
  - immune-system
  - innate-immunity
  - cancer-immunology
aliases: [NK Cells, NK cells, Natural killer cells, CD56+ Cells]
---

# Natural Killer Cells

**Natural killer (NK) cells** are innate lymphoid cells that provide rapid cytotoxic responses against virus-infected cells and tumour cells without prior antigen sensitisation. They are part of the innate immune system's first line of defence, complementing the adaptive immune system (T and B cells). NK cells recognise target cells through a balance of activating and inhibitory receptors, and they kill via perforin/granzyme-mediated apoptosis and antibody-dependent cellular cytotoxicity (ADCC).

## Ontogeny & Subsets

- **Origin:** NK cells develop from common lymphoid progenitors in the bone marrow, with maturation occurring in secondary lymphoid tissues (lymph nodes, spleen, tonsils).
- **Development:** NK cell development requires IL-15, IL-7, and Flt3 ligand. The transcription factor T-bet and Eomes are essential for terminal maturation.
- **Subsets:**
  - **CD56^bright CD16− NK cells:** ~90% of NK cells in lymph nodes. High cytokine production (IFN-γ, TNF-α), low cytotoxicity. Regulatory function.
  - **CD56^dim CD16+ NK cells:** ~90% of NK cells in blood. High cytotoxicity, lower cytokine production. Main effector population for target cell killing.
  - **Tissue-resident NK cells:** Found in liver, uterus, lungs, and skin. Distinct transcriptional profiles and functions.

## Recognition & Activation

NK cell activity is determined by the integration of signals from activating and inhibitory receptors:

- **Inhibitory receptors:**
  - **KIR (Killer Immunoglobulin-like Receptors):** Recognise classical MHC-I molecules (HLA-A, -B, -C) on target cells. MHC-I expression signals "self" and inhibits NK killing.
  - **NKG2A/CD94:** Recognises HLA-E, a non-classical MHC-I molecule.
  - **Principle:** Cells with normal MHC-I expression are protected from NK killing ("missing-self" hypothesis).

- **Activating receptors:**
  - **NKG2D:** Recognises stress-induced ligands (MICA, MICB, ULBPs) upregulated on infected, transformed, or damaged cells.
  - **Natural cytotoxicity receptors (NCRs):** NKp30, NKp44, NKp46 recognise viral and tumour-associated ligands.
  - **CD16 (FcγRIIIA):** Binds IgG-coated cells, triggering antibody-dependent cellular cytotoxicity (ADCC). This is a major mechanism of therapeutic antibody action (e.g., rituximab, trastuzumab).

> [!important] Missing-Self Recognition
> NK cells use an elegant "missing-self" recognition strategy: normal cells express MHC-I, which engages inhibitory KIRs and prevents killing. Cells that downregulate MHC-I (common in viruses and tumours) lose inhibitory signals and become susceptible to NK-mediated killing. This complements CD8+ T cell recognition, which requires MHC-I.

## Effector Mechanisms

### Perforin/Granzyme Pathway
Upon target cell recognition, NK cells release cytotoxic granules containing:
- **Perforin:** Polymerises to form pores in the target cell membrane
- **Granzyme B:** Serine protease that enters through perforin pores and activates caspase cascades, inducing apoptosis
- **Granzyme A:** Induces caspase-independent cell death via DNA damage

### Antibody-Dependent Cellular Cytotoxicity (ADCC)
CD16 on NK cells binds the Fc portion of IgG antibodies coating target cells. Cross-linking of CD16 triggers degranulation and target cell killing. ADCC is the primary mechanism of action for therapeutic antibodies (rituximab, trastuzumab, cetuximab).

### Cytokine Production
NK cells produce:
- **IFN-γ:** Activates macrophages, upregulates MHC expression, promotes Th1 responses
- **TNF-α:** Pro-inflammatory cytokine with direct anti-tumour activity
- **GM-CSF:** Stimulates myeloid cell differentiation and activation
- **Chemokines (CCL3, CCL4, CCL5):** Recruit other immune cells

## Physiological Functions

### Antiviral Immunity
NK cells are critical for early defence against viral infections (herpesviruses, influenza, hepatitis B and C). They kill virus-infected cells and produce IFN-γ to activate antiviral macrophage responses. NK cell deficiency leads to severe herpesvirus infections.

### Tumour Immunosurveillance
NK cells provide immunosurveillance against transformed cells. They recognise stress ligands on tumour cells and kill via perforin/granzyme and ADCC. NK cell activity correlates with better prognosis in many cancers.

### Pregnancy
Uterine NK cells (CD56^bright) play essential roles in placental development, spiral artery remodelling, and immune tolerance of the semi-allogeneic foetus.

### Bone Marrow Transplantation
NK cell alloreactivity (KIR-ligand mismatch) contributes to the graft-versus-leukaemia effect in haematopoietic stem cell transplantation, particularly in haploidentical transplants.

## Role in Ageing & Senescence

NK cell function declines with age (immunosenescence):
- **Reduced cytotoxicity:** Aged NK cells have decreased perforin content and impaired degranulation
- **Impaired ADCC:** CD16 signalling is diminished in elderly individuals
- **Reduced cytokine production:** IFN-γ production declines
- **Expanded CD56^dim population:** Shift toward less functional subsets
- **Senescent cell clearance:** NK cells are important for clearing senescent cells; reduced NK function may contribute to accumulation of senescent cells with age

## Pathological Roles

### Cancer
NK cells have both protective and context-dependent roles in cancer:
- **Anti-tumorigenic:** Direct killing of tumour cells, ADCC, IFN-γ production
- **Immunosuppression:** Tumour microenvironment factors (TGF-β, IDO, PGE₂) suppress NK cell function, enabling tumour immune evasion
- **Metastasis suppression:** NK cells are particularly important for controlling metastatic spread

### Viral Infections
NK cells are critical for controlling herpesvirus infections (CMV, EBV, HSV). CMV has evolved sophisticated evasion strategies (downregulating NKG2D ligands, expressing MHC-I decoys).

### Autoimmunity
Aberrant NK cell activation contributes to tissue damage in autoimmune diseases (type 1 diabetes, rheumatoid arthritis, multiple sclerosis).

## Clinical Relevance

- **Cancer immunotherapy:**
  - **Anti-CD20 (rituximab):** Depletes B cells via NK cell-mediated ADCC
  - **Anti-HER2 (trastuzumab):** Kills HER2+ breast cancer cells via ADCC
  - **NK cell adoptive transfer:** Infusion of expanded/activated NK cells for cancer treatment
  - **CAR-NK cells:** Chimeric antigen receptor-engineered NK cells with improved tumour specificity
  - **Bispecific engagers:** Molecules that simultaneously bind NK cell activating receptors and tumour antigens

- **Checkpoint inhibitors:** Anti-NKG2A (monalizumab) and anti-KIR (lirilumab) checkpoint inhibitors aim to unleash NK cell anti-tumour activity.

- **Biomarkers:** NK cell count and cytotoxic activity are prognostic markers in cancer and predictors of response to antibody therapy.

## Key Studies & References

- Vivier E et al. (2011) "Innate or adaptive immunity? The example of natural killer cells" *Science* 331:44-9. PMID: [21212348](https://pubmed.ncbi.nlm.nih.gov/21212348)
- Ljunggren HG & Kärre K (1990) "In search of the 'missing self': MHC molecules and NK cell recognition" *Immunol Today* 11:237-44. PMID: [2279026](https://pubmed.ncbi.nlm.nih.gov/2279026)
- Sun JC et al. (2011) "Innate lymphoid cell-mediated killing of cancer cells requires granzymes and IFN-γ" *Nat Immunol* 12:757-63. PMID: [21765416](https://pubmed.ncbi.nlm.nih.gov/21765416)
- Miller JS & Lanier LL (2019) "Natural killer cells in cancer immunotherapy" *Annu Rev Cancer Biol* 3:77-103. PMID: [31214452](https://pubmed.ncbi.nlm.nih.gov/31214452)

#

## Documents

List of documents that mention this entity

  - [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Review 2024]]: NK cells are discussed as important effectors for clearing senescent cells; age-related decline in NK cell function may contribute to accumulation of senescent cells and the establishment of the SASP.

## Connections

  - [[Interferon-gamma|IFN-γ]]: Major cytokine produced by NK cells; activates macrophages and promotes antiviral/anti-tumour immunity
  - [[TNFα]]: Pro-inflammatory cytokine produced by NK cells with direct anti-tumour activity
  - [[CCL5]]: Chemokine produced by NK cells; recruits T cells, monocytes, and other NK cells
  - [[CXCL10]]: Chemokine that recruits NK cells and enhances their cytotoxicity
  - [[TGFβ]]: Immunosuppressive cytokine in the tumour microenvironment that inhibits NK cell function
  - [[Senescence]]: NK cells clear senescent cells; age-related NK dysfunction contributes to senescent cell accumulation
  - [[Cancer]]: NK cells provide immunosurveillance; tumour microenvironment suppresses NK function
  - [[Immune System]]: NK cells are a key component of the innate immune system
  - [[ADCC]]: Antibody-dependent cellular cytotoxicity is a major NK cell effector mechanism for therapeutic antibodies
  - [[Bone Marrow]]: NK cells develop from common lymphoid progenitors in the bone marrow
  - [[Multiple Myeloma]]: NK cell depletion contributes to immunosuppression; daratumumab (anti-CD38) triggers NK-mediated ADCC

## Linking Summary

  - New links added: [[Interferon-gamma|IFN-γ]], [[TNFα]], [[CCL5]], [[CXCL10]], [[TGFβ]], [[Senescence]], [[Cancer]], [[Immune System]], [[Bone Marrow]], [[Multiple Myeloma]]
  - Suggested new entity notes to create: [[KIR]], [[NKG2D]], [[Perforin]], [[Granzyme B]], [[CD16]], [[CAR-NK]], [[Immunosenescence]]
  - Strong connections to strengthen: [[Natural Killer Cells]] ↔ [[Cancer]], [[Natural Killer Cells]] ↔ [[Senescence]], [[Natural Killer Cells]] ↔ [[CCL5]]
  - Justification: NK cells bridge innate and adaptive immunity and are central to cancer immunosurveillance, antiviral defence, and senescent cell clearance. Their age-related decline is a key mechanism of immunosenescence.
