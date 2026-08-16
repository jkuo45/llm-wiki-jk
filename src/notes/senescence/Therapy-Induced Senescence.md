---
title: Therapy-Induced Senescence
description: Therapy-induced senescence (TIS) is a form of cellular senescence triggered by chemotherapeutic drugs or ionizing radiation, characterized by permanent cell cycle arrest, DNA damage foci, and an inducible SASP with dual roles in tumor suppression and relapse.
created: 2026-07-09
updated: 2026-08-16
tags:
  - biological-process
  - senescence
  - cancer
  - chemotherapy
  - cancer-therapy
  - dna-damage
  - sasp
aliases:
  - TIS
  - therapy-induced senescence
  - treatment-induced senescence
protected: true

---
# Therapy-Induced Senescence

Therapy-induced senescence (TIS) is a form of cellular senescence provoked by cytotoxic cancer therapies — DNA-damaging chemotherapeutics (e.g., [[Doxorubicin]], [[Etoposide]], [[Cisplatin]]), ionizing radiation (typically a single 10 Gy X-ray dose), or other genotoxic stresses — as well as by persistent DNA damage response (DDR). First characterized as an unintended side effect, TIS is now recognized as a deliberate therapeutic outcome — a built-in tumor-suppressive program that prevents proliferation of damaged malignant cells (Ewald et al., 2010, *J Natl Cancer Inst* 102:1536-1546; PMID 20858887). TIS is a major in vitro and in vivo model used to study the senescence-associated secretory phenotype ([[SASP|Senescence-Associated Secretory Phenotype]]) and its epigenetic regulation.

## Definition

TIS is a state of essentially irreversible [[Cell Cycle]] arrest provoked in tumor cells by genotoxic cancer therapies. Like other senescence types, TIS cells display enlarged morphology, senescence-associated β-galactosidase activity, DDR markers such as [[H2A.X|γ-H2A.X]], and a pro-inflammatory secretome. It is one of three principal senescence models discussed alongside [[Oncogene-Induced Senescence|oncogene-induced senescence (OIS)]] and replicative senescence (RS).

## Triggers

- **DNA-damaging chemotherapeutics**: Doxorubicin, [[Etoposide]], [[Cisplatin]], cyclophosphamide — agents that create [[DNA Damage]] lesions triggering a persistent DDR.
- **Ionizing radiation**: Causes double-strand breaks that engage the ATM/ATR–Chk1/Chk2–p53 axis.
- **CDK4/6 inhibitors**: [[Palbociclib]], abemaciclib, ribociclib induce senescence-like arrest in [[Breast Cancer|estrogen receptor-positive breast cancer]] cells by mimicking the [[p16]]–[[Rb|Retinoblastoma Protein]] pathway without triggering a full DDR.
- **BET inhibitors**: Compounds targeting [[BRD4]] suppress proliferation and induce senescence in some cancer models.

## Molecular Mechanisms

TIS engages the same core arrest machinery as other forms of [[Senescence]]:

1. **p53/[[p21 CIP1|p21]] axis**: Genotoxic stress stabilizes [[p53]], which transcriptionally induces p21. p21 inhibits [[CDK2]]/cyclin E, enforcing G1/S arrest.
2. **p16/[[Rb|Retinoblastoma Protein]] axis**: Sustained arrest is locked in by p16-mediated inhibition of [[CDK4 6|CDK4/6]], maintaining Rb in its hypophosphorylated, growth-suppressive state.
3. **[[SASP|Senescence-Associated Secretory Phenotype]]**: TIS cells typically develop a pro-inflammatory SASP via [[NF-κB]] and [[cGAS-STING Pathway|cGAS-STING signaling]], driven by persistent DNA damage signaling and accumulation of [[Cytoplasmic Chromatin Fragments|cytoplasmic DNA]].
4. **Apoptosis resistance**: Upregulation of [[Senescent cell anti-apoptotic pathways|SCAPs]] (Bcl-2 family, PI3K/Akt) allows TIS cells to survive despite genotoxic injury.

## Mechanisms (Epigenetic and DNA-Damage Driven)

- Genotoxic stress generates persistent DNA damage foci termed "[[DNA-SCARS|DNA segments with chromatin alterations reinforcing senescence]]" (DNA-SCARS), which may evict histones from nucleosomes and render chromatin flexible for transcriptional reprogramming, including SASP induction.
- DNA-SCARS are precursors to cytoplasmic chromatin fragments ([[Cytoplasmic Chromatin Fragments|CCF]]), which are sensed by [[cGAS-STING Pathway|cGAS–STING]] to drive NF-κB-mediated SASP.
- TIS is accompanied by global histone loss (20–40% from damaged chromatin), enhancer remodeling marked by [[H3K27ac]], and activation of senescence super-enhancers, mirroring RS and OIS.
- Epigenetic modulators behave similarly across models: knockdown of [[MLL1]], [[KDM4]], [[DOT1L]], [[BRD4]], or [[HMGB2]] blocks SASP without releasing the TIS arrest.

## Dual Role in Cancer

### Tumor-Suppressive Effects
- **Proliferative arrest**: TIS halts tumor cell division, preventing outgrowth of damaged clones.
- **Immune recruitment**: SASP factors ([[IL-6]], [[CXCL10]], [[CCL2]]) recruit [[Natural Killer Cells|NK cells]], [[Macrophages|macrophages]], and [[T Lymphocyte|T cells]] to clear senescent tumor cells — a process termed [[Senescence Surveillance]].
- **Paracrine senescence**: SASP components can induce senescence in neighboring tumor cells, amplifying therapeutic effect.

### Pro-Tumorigenic Risks
- **SASP-driven relapse**: Persistent SASP creates a chronic inflammatory microenvironment that can paradoxically promote proliferation of surviving tumor cells and therapy resistance.
- **Senescence escape**: A small population of TIS cells can override the arrest and re-enter the cell cycle, seeding recurrence (Lee & Schmitt, 2019, *Nat Cell Biol* 21:94-101; PMID 30602768).
- **Immunosuppression**: Factors like [[Prostaglandin E2|PGE2]] secreted by TIS cells can suppress anti-tumor immunity (Loo et al., 2017, *Cancer Discov* 7:522-538).

## Therapeutic Implications

- **Senolytics**: Drugs such as [[ABT-737]] (Bcl-2 inhibitor), [[Dasatinib]] + [[Quercetin]], and [[BET inhibitors]] can selectively eliminate TIS cells, reducing the pro-tumorigenic SASP burden.
- **Senomorphics**: Agents that suppress the SASP without killing cells (e.g., [[Rapamycin]], glucocorticoids, [[Metformin]]) may limit TIS-driven inflammation while preserving arrest. Epigenetic inhibitors (BET/KDM4/DOT1L) in oncology trials could be repurposed to tame TIS-associated inflammation.
- **Combination strategies**: Sequencing senescence-inducing therapy with senolytic clearance is an active area of clinical investigation.

## Documents

- [[_document_ - Cellular senescence and senescence‐associated secretory phenotype via the cGAS_STING signaling pathway in cancer|Cellular senescence and SASP via cGAS-STING in cancer]]
  - Reviews TIS as a form of senescence triggered by chemotherapeutic drugs and radiation, discussing its dual role in cancer suppression and SASP-driven tumor promotion.

- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]]
  - Presents TIS (induced by doxorubicin, etoposide, or 10 Gy irradiation) as a key senescence model in which DNA-SCARS, histone loss, CCF, and H3K27ac enhancer remodeling orchestrate SASP, and in which epigenetic modulators act senomorphically.

## Connections

- [[Senescence]] — TIS is a subtype of cellular senescence.
- [[SASP|Senescence-Associated Secretory Phenotype]] — TIS cells secrete SASP factors via DDR and cGAS-STING.
- [[DNA Damage]] — The initiating trigger for TIS.
- [[p53]] — Master regulator of TIS through p21 induction.
- [[p21 CIP1|p21]] — Key effector of TIS cell cycle arrest.
- [[p16]] — Locks in sustained TIS arrest.
- [[cGAS-STING Pathway]] — Drives SASP in TIS cells.
- [[DNA-SCARS]] — Persistent damage foci driving TIS chromatin changes.
- [[Cytoplasmic Chromatin Fragments]] — cGAS–STING SASP trigger in TIS.
- [[Oncogene-Induced Senescence]] — Alternative senescence model.
- [[Senolytic]] — Eliminates TIS cells to reduce relapse risk.
- [[Senomorphic]] — Suppresses TIS-associated SASP.
- [[Senomorphic Therapy]] — Suppresses TIS-associated SASP.
- [[Breast Cancer]] — CDK4/6 inhibitors induce TIS in ER+ breast cancer.
- [[MLL1]] / [[KDM4]] / [[DOT1L]] / [[BRD4]] / [[HMGB2]] — Epigenetic modulators whose knockdown blocks SASP in TIS.
- [[Senescence Surveillance]] — Immune clearance of TIS cells.

## Linking Summary

- New links added: [[Therapy-Induced Senescence]], [[Senescence]], [[SASP|Senescence-Associated Secretory Phenotype]], [[DNA Damage]], [[p53]], [[p21 CIP1|p21]], [[p16]], [[cGAS-STING Pathway]], [[Senolytic]], [[Senomorphic]], [[Senomorphic Therapy]], [[Breast Cancer]], [[Cytoplasmic Chromatin Fragments]], [[Senescence Surveillance]], [[Chemotherapy]], [[Etoposide]], [[Cisplatin]], [[Palbociclib]], [[CDK4 6]], [[CDK2]], [[Rb|Retinoblastoma Protein]], [[NF-κB]], [[IL-6]], [[CXCL10]], [[CCL2]], [[Natural Killer Cells]], [[Macrophages]], [[T Lymphocyte]], [[Prostaglandin E2]], [[ABT-737]], [[Dasatinib]], [[Quercetin]], [[BET inhibitors]], [[Rapamycin]], [[Metformin]], [[Senescent cell anti-apoptotic pathways|SCAPs]], [[DNA-SCARS]], [[H3K27ac]], [[MLL1]], [[KDM4]], [[DOT1L]], [[BRD4]], [[HMGB2]], [[Oncogene-Induced Senescence]], [[Doxorubicin]], [[H2A.X|γ-H2A.X]]
- Suggested new entity notes to create: [[Ionizing Radiation]], [[BET inhibitors]], [[DNA-SCARS]], [[Doxorubicin]], [[Etoposide]], [[Replicative Senescence]]
- Strong connections to strengthen: [[Therapy-Induced Senescence]] ↔ [[Senescence]], [[Therapy-Induced Senescence]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]], [[Therapy-Induced Senescence]] ↔ [[Senolytic]], [[Therapy-Induced Senescence]] ↔ [[Breast Cancer]], [[Therapy-Induced Senescence]] ↔ [[Senomorphic]]