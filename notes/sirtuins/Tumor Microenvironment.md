---
type: entity
category: biological process
aliases:
  - Tumor Microenvironment
  - TME
  - Cancer Microenvironment
database_ids:
  mesh: D059016
relations:
  - predicate: contains
    target: "CD38"
    sources: []
  - predicate: associated_with
    target: "Cancer"
    sources: []
  - predicate: modulated_by
    target: "Daratumumab"
    sources: []
  - predicate: modulated_by
    target: "Isatuximab"
    sources: []
created: 2026-07-03
updated: 2026-07-03
---

# Tumor Microenvironment

The **Tumor Microenvironment (TME)** refers to the complex, heterogeneous cellular and non-cellular milieu surrounding and infiltrating a tumor mass. It profoundly influences tumor growth, invasion, metastasis, immune evasion, and response to therapy. The TME is increasingly recognized as a major therapeutic target — particularly in immuno-oncology.

## Cellular Components

| Cell Type | Role in TME |
|---|---|
| **Tumor-associated macrophages (TAMs)** | Often adopt an immunosuppressive (M2-like) phenotype; secrete IL-10, TGF-β; promote angiogenesis |
| **Myeloid-derived suppressor cells (MDSCs)** | Suppress T-cell and NK-cell activity; highly CD38⁺ in some cancers |
| **Regulatory T cells (Tregs)** | Dampen anti-tumor immune responses; express [[CD38]] and are targeted by anti-CD38 mAbs |
| **Cancer-associated fibroblasts (CAFs)** | Remodel ECM, supply growth factors, promote immune exclusion |
| **NK cells** | Anti-tumor effectors; targeted by anti-CD38 mAbs for ADCC |
| **CD8⁺ cytotoxic T cells** | Primary anti-tumor effectors; often exhausted in TME |
| **Bregs (regulatory B cells)** | Suppress anti-tumor immunity via IL-10 and TGF-β |
| **Endothelial cells** | Form the tumor vasculature; regulate immune cell infiltration |

## Non-Cellular Components

- **Extracellular matrix (ECM)**: Provides structural scaffold; can be a physical barrier to T-cell infiltration.
- **Cytokines/chemokines**: IL-6, IL-10, TGF-β, VEGF, CXCL12 — create an immunosuppressive milieu.
- **Metabolic factors**: Hypoxia, lactate, adenosine, and NAD⁺ depletion (via [[CD38]]) suppress immune function.

## CD38 in the TME

**[[CD38]]** is expressed on multiple immunosuppressive TME cell populations (Tregs, MDSCs, TAMs, Bregs). Its enzymatic activity depletes [[NAD+]] in the TME and generates **adenosine** (via CD73), which further suppresses anti-tumor T-cell and NK-cell responses.

Anti-CD38 therapies ([[Daratumumab]], [[Isatuximab]]) can reshape the TME by:
- Eliminating CD38⁺ Tregs and MDSCs, restoring T/NK cell function
- Reducing adenosine-mediated immunosuppression
- Combining with checkpoint inhibitors (e.g., anti-PD-1/PD-L1) to achieve synergistic TME remodeling

## Therapeutic Targeting

- **Checkpoint inhibitors** (anti-PD-1, anti-PD-L1, anti-CTLA-4): Restore T-cell anti-tumor activity
- **Anti-CD38 mAbs** ([[Daratumumab]], [[Isatuximab]]): Deplete suppressive CD38⁺ cells
- **Isatuximab + cemiplimab** (anti-PD-1): In trials for advanced solid tumors
- **Adenosine pathway**: CD73 inhibitors, A2A receptor antagonists
- **CAR-T cell therapies**: Engineered to resist TME-mediated exhaustion

## Connections

- [[CD38]] — expressed on TME immunosuppressive cells; major target
- [[Cancer]] — TME is integral to tumor biology across all cancers
- [[Daratumumab]], [[Isatuximab]] — anti-CD38 mAbs that remodel the TME
- [[Multiple Myeloma]] — bone marrow TME critical in MM pathogenesis
- [[NAD+]] — depleted in TME by CD38; relevant to metabolic immunosuppression
- [[Inflammation]] — chronic inflammation in TME links to tumor promotion

---

## Linking Summary

- New links added: [[CD38]], [[Cancer]], [[Daratumumab]], [[Isatuximab]], [[Multiple Myeloma]], [[NAD+]], [[Inflammation]]
- Suggested new entity notes: [[cADPR]], [[Adenosine Pathway]], [[CAF (Cancer-Associated Fibroblast)]]
- Strong connections: [[Tumor Microenvironment]] ↔ [[CD38]], [[Tumor Microenvironment]] ↔ [[Cancer]]
