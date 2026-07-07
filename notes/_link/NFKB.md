---
type: entity
title: NF-κB (Nuclear Factor Kappa B)
description: NF-κB (Nuclear Factor kappa-light-chain-enhancer of activated B cells)
  is a highly conserved pleiotropic transcription factor family that serves as the
  central orchestrator of inflammatory signalin...
created: 2026-07-03
updated: 2026-07-03
entity_type_1: Protein
aliases:
  - NF-κB
  - Nuclear Factor kappa B
  - RelA
  - p65
  - NF-kB
database_ids:
  uniprot: Q04206
  hgnc: HGNC:9955
  mesh: D016328
relations:
  - predicate: regulated_by
    target: "SIRT1"
    sources:
      - PMID:15152190
      - Michan 2007
  - predicate: regulated_by
    target: "SIRT2"
    sources:
      - PMID:24556264
      - Sirtuins in Health and Disease 2022
  - predicate: regulated_by
    target: "SIRT6"
    sources:
      - PMID:22006491
      - Sirtuins in Health and Disease 2022
  - predicate: regulated_by
    target: "SIRT7"
    sources:
      - Sirtuins in Health and Disease 2022
---




# NF-κB (Nuclear Factor Kappa B)

**NF-κB** (Nuclear Factor kappa-light-chain-enhancer of activated B cells) is a highly conserved pleiotropic transcription factor family that serves as the central orchestrator of inflammatory signaling, immune responses, cell survival, and cellular stress responses. In mammals, the most prevalent and transcriptionally active form of NF-κB is the **RelA/p50** heterodimer, where **RelA** (also known as **p65**) contains the transactivation domain required for gene transcription.

Under basal conditions, NF-κB is sequestered in the cytoplasm in an inactive complex with its inhibitory partner **IκB** (Inhibitor of NF-κB). Upon stimulation by pro-inflammatory signals (e.g., TNF-α, IL-1β, lipopolysaccharide, or reactive oxygen species), IκB is phosphorylated, ubiquitinated, and degraded, permitting the rapid translocation of active NF-κB to the nucleus to bind the promoters of its target genes.

---

## Regulation by Sirtuins

Sirtuins function as critical homeostatic brakes on the NF-κB pathway, suppressing chronic inflammatory signaling through diverse epigenetic and post-translational mechanisms.

```mermaid
graph TD
    SIRT1["SIRT1"] -- Deacetylates Lys310 --> RelA["RelA/p65 (NF-κB)"]
    SIRT2["SIRT2"] -- Deacetylates Lys310 --> RelA
    SIRT6["SIRT6"] -- Deacetylates Histone H3K9 at Promoters --> TransScript["Suppresses Promoters"]
    SIRT3["SIRT3"] -- Limits Mitochondrial ROS --> NFKB_Activation["Prevents Activation"]
    SIRT4["SIRT4"] -- Inhibits PI3K/Akt Signaling --> NFKB_Activation
    RelA -- Transcriptionally Represses --> SIRT1
    RelA -- Transcriptionally Represses --> SIRT6
    
    style SIRT1 fill:#1a365d,stroke:#3182ce,stroke-width:2px,color:#fff
    style SIRT2 fill:#1a365d,stroke:#3182ce,stroke-width:2px,color:#fff
    style SIRT6 fill:#1a365d,stroke:#3182ce,stroke-width:2px,color:#fff
    style RelA fill:#742a2a,stroke:#e53e3e,stroke-width:2px,color:#fff
```

### 1. SIRT1-Mediated Deacetylation
SIRT1 directly interacts with and deacetylates the **RelA/p65** subunit at **Lysine 310 (Lys³¹⁰)**. 
- **Functional Impact**: Acetylation of Lys³¹⁰ is essential for the full transactivation potential of NF-κB. SIRT1-mediated deacetylation of Lys³¹⁰ strongly suppresses NF-κB-dependent transcription of pro-inflammatory cytokines (such as TNF-α, IL-1β, IL-6, and metalloproteinases).
- **Apoptosis Crosstalk**: By repressing NF-κB-mediated survival genes, SIRT1 deacetylation sensitizes cells (particularly cancer cells) to TNF-α-induced apoptosis.
- **Inflammatory Feedback**: Exposure to environmental stressors (e.g., cigarette smoke in COPD, obesity-induced lipids) disrupts the physical association between SIRT1 and RelA, prompting hyperacetylation and hyperactivation of pro-inflammatory genes.

### 2. SIRT2-Mediated Deacetylation
Like SIRT1, cytoplasmic **SIRT2** is capable of deacetylating the RelA/p65 subunit in the cytoplasm or upon nuclear-cytoplasmic shuttling.
- **Microglial Activation**: Loss or inhibition of SIRT2 triggers hyperacetylation of NF-κB, accelerating microglial activation and neuroinflammation.
- **Systemic Inflammation**: Active SIRT2 deacetylates p65 to reduce circulating cytokine expression, exerting a protective role in rheumatoid arthritis and sepsis models.

### 3. SIRT6-Mediated Chromatin Silencing
Instead of directly targeting the transcription factor, **SIRT6** acts as a localized epigenetic repressor on chromatin.
- **H3K9 Deacetylation**: SIRT6 physically associates with the promoters of NF-κB target genes (such as *IL6* and *TNF*). There, it deacetylates Histone H3 at Lysine 9 (**H3K9ac**), inducing a compact chromatin state that physically blocks NF-κB transactivation.
- **Cardiomyocyte Protection**: SIRT6 downregulates NF-κB-dependent hypertrophy genes in the heart by reducing p300-mediated acetylation of p65, preventing pathological cardiac enlargement.

### 4. SIRT3 and SIRT4 Indirect Modulation
- **SIRT3**: Mitochondrial SIRT3 suppresses NF-κB activation indirectly by deacetylating and activating mitochondrial antioxidants (like **MnSOD/SOD2**), reducing mitochondrial reactive oxygen species (ROS) that would otherwise stimulate the IκB kinase (IKK) complex.
- **SIRT4**: Suppresses the upstream **PI3K/Akt** signaling pathway to prevent NF-κB activation and alleviate oxidized LDL-induced endothelial cell injury in atherosclerosis.

---

## Physiological Implications and Aging

### 1. Inflammaging
A hallmark of mammalian aging is **inflammaging**—a chronic, sterile, low-grade inflammatory state. This state is heavily driven by a progressive decline in sirtuin expression and activity, which removes the physiological "brakes" on NF-κB, resulting in hyperactivation of the inflammatory cascade.

### 2. Cellular Senescence
NF-κB is a master regulator of the **Senescence-Associated Secretory Phenotype (SASP)**. Sirtuin-mediated suppression of NF-κB transcription helps to repress the expression of SASP cytokines, thereby mitigating the spread of secondary senescence to neighboring cells.

### 3. Pathological Conditions
- **COPD/Emphysema**: Chronic cigarette smoke exposure decreases lung SIRT1 levels, permitting unrestrained NF-κB-mediated lung inflammation.
- **Atherosclerosis**: Macrophage foam cell formation is driven by NF-κB. SIRT1 activation inhibits *Lox-1*-mediated foam cell formation and plaque progression by suppressing NF-κB.
- **Cancer**: NF-κB hyperactivation promotes tumor cell survival and chemoresistance. Sirtuin-mediated inhibition of NF-κB represents a promising therapeutic angle to sensitize cancer cells to apoptosis.

---

## Connections

- **[[SIRT1]]** — Direct physical interactor and deacetylase of RelA/p65 Lys³¹⁰.
- **[[SIRT2]]** — Cytoplasmic deacetylase regulating RelA/p65 acetylation and microglial activation.
- **[[SIRT3]]** — Indirect regulator via mitochondrial ROS control.
- **[[SIRT6]]** — Chromatin-associated repressor deacetylating H3K9ac at NF-κB target promoters.
- **[[Inflammation]]** — NF-κB is the master transcriptional driver of inflammatory pathology.
- **[[Apoptosis]]** — NF-κB transcriptional suppression by sirtuins sensitizes cells to TNF-α-induced apoptosis.

- New links added: [[SIRT1]], [[SIRT2]], [[SIRT3]], [[SIRT6]], [[Inflammation]], [[Apoptosis]]
- Suggested new entity notes to create: [[TNFα]], [[MnSOD]], [[IκB]], [[RelA]]
- Strong connections to strengthen: [[SIRT1]] ↔ [[NFKB]], [[SIRT6]] ↔ [[NFKB]], [[Inflammation]] ↔ [[NFKB]]

## Linking Summary
- New links added: [[Apoptosis]], [[Inflammation]], [[IκB]], [[MnSOD]], [[NFKB]], [[RelA]], [[SIRT1]], [[SIRT2]], [[SIRT3]], [[SIRT6]], [[TNFα]]
- Suggested new entity notes to create: [[IκB]], [[RelA]]
- Strong connections to strengthen: [[NF-κB (Nuclear Factor Kappa B)]] ↔ [[Inflammation]], [[NF-κB (Nuclear Factor Kappa B)]] ↔ [[Apoptosis]], [[NF-κB (Nuclear Factor Kappa B)]] ↔ [[SIRT1]]
