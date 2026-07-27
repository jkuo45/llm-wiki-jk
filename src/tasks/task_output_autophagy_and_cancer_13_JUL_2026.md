---
title: Autophagy During Chemotherapy — Conflicting and Agreeing Views
description: Research findings on the dual role of autophagy in cancer chemotherapy, compiled from wiki notes and web literature (2013–2025)
created: 2026-07-13
type: task-output
---

# Autophagy During Chemotherapy: Conflicting and Agreeing Views

> [!note] Source Context
> This report was compiled from wiki notes (primarily the sirtuins, autophagy, and cancer directories) and web literature (2013–2025). It was triggered by the passage describing SIRT5-mediated LDHB deacetylation and autophagy hyperactivation in gastric and colorectal cancer.

---

## Summary

Autophagy during chemotherapy is **not a settled consensus** — it is one of the most actively debated questions in cancer biology. The dominant view is that autophagy is primarily **pro-survival in established tumours under chemotherapy stress**, but clinical trial results have been mixed. The field is moving toward **context-specific autophagy modulation** rather than blanket inhibition or activation.

---

## The Three Camps

### Camp 1: Autophagy = Pro-Survival (Protects Tumour Cells from Chemotherapy)

This is the **majority view** and the basis for most clinical trials using hydroxychloroquine (HCQ) as an autophagy inhibitor combined with chemotherapy.

#### Wiki Evidence

- **Ivermectin document** (`notes/cancer/_document_ - Ivermectin, a potential anticancer drug...`):
  > "autophagy can help tumors adapt to the nutritional deficiency of the tumor microenvironment, and to a certain extent, protect tumor cells from chemotherapy- or radiotherapy-induced injury"

- **Hydroxychloroquine note** (`notes/_link/Hydroxychloroquine.md`):
  > "combined with chemotherapy to block cytoprotective autophagy in Cancer cells"

- **PDA note** (`notes/_link/PDA.md`):
  > "KRAS-driven autophagy supports tumor metabolism and survival; hydroxychloroquine (autophagy inhibitor) is being investigated as an adjunct to chemotherapy"

- **SIRT5 note** (`notes/sirtuins/SIRT5.md`):
  > "SIRT5 desuccinylates [[LDHB]] to hyperactivate autophagy, providing cancer cells with recycled nutrients"

- **LDHB note** (`notes/sirtuins/LDHB.md`):
  > "Hyperactivation of LDHB by SIRT5 shifts the intracellular lactate/pyruvate balance, leading to metabolic stress that triggers excessive autophagy... providing cancer cells with recycled nutrients and resistance to metabolic stress."

- **Autophagy wiki** (`notes/autophagy/Autophagy.md`):
  > "In established tumors, autophagy acts as a survival mechanism, allowing cancer cells to survive the harsh, nutrient-poor, and hypoxic conditions of the tumor microenvironment."

- **B Cell note** (`notes/autophagy/B Cell.md`):
  > "excessive or dysregulated autophagy can support survival of malignant B cells in Cancer (e.g., B-cell lymphomas, chronic lymphocytic leukemia) under hypoxia and chemotherapy pressure"

#### Web Evidence

- **Dwyer & Chodosh (2024, *Breast Cancer Research*)**:
  - Autophagy is *required* for mammary tumour recurrence
  - Dormant residual tumour cells that survive therapy rely on autophagy for survival
  - Inhibiting autophagy (chloroquine, ATG5/ATG7 knockdown, BECN1 deletion) **killed dormant tumour cells and prevented recurrence**
  - "inhibiting autophagy results in the death of dormant mammary tumor cells in vivo"
  - URL: https://link.springer.com/article/10.1186/s13058-024-01878-7

- **Cell Death & Disease (2025)**:
  - Chloroquine + oxaliplatin in osteosarcoma and colorectal cancer
  - Autophagy inhibition "effectively suppressed tumour cell death" and "exerts preferential cytotoxicity toward dormant cancer cells"
  - Dual therapeutic advantage: cytostatic agents kill proliferating cells; chloroquine specifically eradicates dormant cells
  - URL: https://www.nature.com/articles/s41419-025-08304-6

- **Granato et al. (2013, *PLOS ONE*)**:
  - Bortezomib-induced JNK and autophagy activation was **pro-survival** in Primary Effusion Lymphoma
  - Inhibiting JNK or autophagy increased bortezomib cytotoxicity
  - URL: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0075965

- **Chromik et al. (2024, PMC)**:
  - Autophagy inhibition in PDAC enhances dendritic cell cross-presentation and antitumor immunity
  - Combined autophagy inhibition + dendritic cell recruitment induced antitumor immunity and enhanced immune checkpoint blockade sensitivity
  - URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11647207/

### Camp 2: Autophagy = Pro-Death (Kills Tumour Cells During Chemotherapy)

#### Wiki Evidence

- **Ivermectin document**:
  > "some autophagy activators can increase the sensitivity of tumors to radiotherapy and chemotherapy by inducing autophagy, and excessive activation of autophagy can also lead to tumor cell death"

- **Autophagy wiki** (`notes/autophagy/Autophagy.md`):
  > "Excessive activation of autophagy can lead to tumor cell death. Improving autophagy activity has become a new approach in cancer therapy."

- **Caloric Restriction document** (`notes/autophagy/_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting.md`):
  > "prolonged calorie restriction with excessive autophagy response is harmful and can stimulate a type II Autophagic Cell Death"

- **Autophagic Cell Death note** (`notes/_link/Autophagic Cell Death.md`):
  > "prolonged calorie restriction with excessive autophagy response is harmful and can stimulate a type II Autophagic Cell Death"

#### Web Evidence

- **Galluzzi et al. (2017, *Nature Reviews Clinical Oncology*)**:
  - Activating autophagy can *potentiate* immunogenic chemotherapy and radiation
  - Autophagy helps present tumour antigens to the immune system
  - URL: https://pubmed.ncbi.nlm.nih.gov/27845767/

- **Bortezomib in multiple myeloma** (contrasting with the PEL lymphoma finding):
  - In tumours with high basal ER stress (e.g., multiple myeloma), bortezomib-induced autophagy **contributes to cell death** rather than survival
  - This is context-dependent — same drug, opposite autophagy outcome in different tumour types

- **Rapamycin for longevity note** (`notes/_link/_document_ - Rapamycin for longevity...`):
  > "while autophagy may suppress tumor initiation by clearing damaged cellular components, it can also support the survival and growth of established tumors... enhancing autophagy in aging populations with elevated cancer risks may inadvertently promote oncogenesis"

### Camp 3 (Growing Consensus): Context-Dependent — It Depends

#### Wiki Evidence

- **Ivermectin document**:
  > "the specific environment of tumor cells will determine whether autophagy enhances or inhibits tumor development"

- **Autophagy wiki**:
  > "its function may vary according to several biological factors, including tumor type, progression stage and genetic landscape, along with oncogene activation and tumor suppressor inactivation"

- **SIRT1 in CRC** (`notes/sirtuins/_document_ - sirtuins in health and disease...`):
  > "SIRT1 affects CRC in a dose-dependent manner... Heterozygous deletion induces c-Myc expression, enhancing glutamine metabolism and subsequent proliferation, autophagy and cancer formation. In contrast, homozygous deletion triggers apoptotic pathways, increases cell death, diminishes autophagy, and reduces cancer formation."

- **Caloric Restriction document**:
  > "autophagy can suppress or enhance cancer growth depending on the cellular microenvironment and disease stage"

#### Web Evidence

- **Kinsella (2011, *Frontiers in Oncology*)**:
  > "autophagy plays a dual role of either pro-cell survival or pro-cell death in response to these cancer treatments, depending on the cellular context and the nature of the treatment"
  - URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC3356061/

- **Autophagy literature review (2010, *Autophagy*)**:
  > "the current autophagy literature is often viewed as confusing, because of its dual role and association with apparently contradictory roles, such as survival and cell death"
  - URL: https://www.tandfonline.com/doi/abs/10.4161/auto.6.3.11625

- **Frontiers editorial (2021/2026)**:
  > "How autophagy switch from pro-survival to pro-death signal? How selective is autophagy in controlling cell-death?"
  - URL: https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2021.684049/full

---

## Clinical Trial Evidence (Hydroxychloroquine + Chemotherapy)

### Trials Showing Benefit (Pro-Survival Camp Supported)

| Trial | Cancer Type | Design | Outcome | Source |
|---|---|---|---|---|
| Phase I/II (2019) | Renal cell carcinoma | Everolimus + HCQ | 45% achieved 6-month PFS; disease control in 67% | AACR *Clin Cancer Res* |
| Phase 1b/2 (2024) | HR+/HER2− breast cancer | HCQ + high-dose CDK4/6i | Promising outcomes, manageable toxicity | *Med* (Cell Press) |
| Preclinical + in vivo (2025) | Osteosarcoma, colorectal | CQ + oxaliplatin | Preferential cytotoxicity toward dormant cells; prevented metastasis | *Cell Death & Disease* |

### Trials Showing No Benefit

| Trial | Cancer Type | Design | Outcome | Source |
|---|---|---|---|---|
| Phase II (2025) | Platinum-sensitive relapsed ovarian | Chemo + HCQ vs. chemo alone | ORR: 85% vs 80% (p=0.65); PFS: 12 vs 11 months (p=0.56); OS: 16 vs 21 months (p=0.49) | *Discover Oncology* |
| Phase 2 (2019) | Advanced pancreatic | Gem/nab-paclitaxel ± HCQ | No clear survival improvement | *JAMA Oncol* |

### Ongoing Trials

| Trial | Cancer Type | Design | Status | Source |
|---|---|---|---|---|
| Phase I (ASCO 2025) | KRAS-mutant PDAC | Binimetinib + HCQ | Recruiting/completed enrollment | *JCO* 43(16_suppl) |
| NCT04214418 | Various | Autophagy inhibitor + ICIs | Ongoing | ClinicalTrials.gov |

---

## Key Determinants of Autophagy's Role

The literature identifies several factors that determine whether autophagy is pro-survival or pro-death during chemotherapy:

### Tumour Type
- **RAS-mutant cancers** (pancreatic, colorectal): Strongly autophagy-dependent; autophagy inhibition most promising here
- **Multiple myeloma**: High basal ER stress → autophagy can be pro-death
- **Breast cancer (dormant cells)**: Autophagy clearly pro-survival for recurrence
- **Ovarian cancer**: Mixed results; HCQ added no benefit in phase II

### Disease Stage
- **Pre-malignant / early**: Autophagy is tumour-suppressive (clears damaged organelles, maintains genomic stability)
- **Established tumour**: Autophagy becomes pro-survival (feeds tumour metabolism)
- **Post-treatment dormant cells**: Autophagy is strongly pro-survival (enables recurrence)

### Genetic Background
- **Beclin-1 monoallelic loss**: Tumour-prone; autophagy deficiency accelerates tumorigenesis
- **p53 status**: p53-mutant tumours favour autophagy induction for survival
- **PI3K/Akt/mTOR pathway**: Oncogene activation suppresses autophagy; its inhibition (e.g., everolimus) induces autophagy as a resistance mechanism

### Timing and Combination Strategy
- **Autophagy inhibition AFTER chemo**: May target dormant residual cells (Chodosh 2024)
- **Autophagy inhibition DURING chemo**: May be less effective (ovarian cancer trial)
- **Autophagy inhibition + immunotherapy**: Emerging as the stronger approach (PDAC/DC study)

---

## The SIRT5–LDHB Axis in Context

The original passage describes a specific mechanism:

1. **SIRT5** deacetylates **LDHB** at specific lysine residues
2. Hyperactivated LDHB shifts the lactate/pyruvate balance
3. Metabolic stress triggers **excessive, non-canonical autophagy**
4. This autophagy provides cancer cells with recycled nutrients

This falls squarely in **Camp 1** (pro-survival autophagy in established tumours). The SIRT5–LDHB axis is one mechanism by which cancer cells **hijack** the autophagy machinery for survival. Key connections:

- SIRT5 is overexpressed in GC, CRC, HCC, NSCLC → tumour-promoting
- SIRT5 is resistant to nicotinamide inhibition → sustained activity in tumour microenvironment
- Targeting SIRT5-mediated LDHB deacetylation could suppress autophagic survival without blanket autophagy inhibition

---

## Synthesis and Future Directions

### Current State of Knowledge
- **No single consensus** — autophagy is context-dependent in cancer therapy
- **Majority view**: Autophagy is primarily pro-survival in established tumours under chemotherapy stress
- **Clinical translation**: HCQ + chemo trials have shown **modest and inconsistent results**
- **Emerging approach**: Context-specific modulation rather than blanket inhibition

### Promising Directions
1. **Post-chemo autophagy inhibition** to target dormant residual cells (Chodosh 2024)
2. **Autophagy inhibition + immunotherapy** (enhances DC cross-presentation, checkpoint blockade sensitivity)
3. **Targeting specific autophagy regulators** (e.g., SIRT5–LDHB axis) rather than global autophagy
4. **Biomarker-driven patient selection** — identifying which tumours are autophagy-dependent
5. **Timing optimization** — sequential rather than concurrent autophagy modulation

### Open Questions
- How to switch autophagy from pro-survival to pro-death in a given tumour?
- Which biomarkers predict autophagy dependence?
- Can autophagy inducers (caloric restriction, metformin) sensitize tumours to chemo while protecting normal cells?
- What is the optimal timing window for autophagy inhibition relative to chemotherapy?

---

## References

### Wiki Sources
- `notes/sirtuins/SIRT5.md` — SIRT5 entity note
- `notes/sirtuins/LDHB.md` — LDHB entity note
- `notes/autophagy/Autophagy.md` — Autophagy entity note
- `notes/_link/Hydroxychloroquine.md` — HCQ entity note
- `notes/_link/PDA.md` — Pancreatic ductal adenocarcinoma note
- `notes/autophagy/B Cell.md` — B cell autophagy note
- `notes/_link/Autophagic Cell Death.md` — Autophagic cell death note
- `notes/sirtuins/_document_ - sirtuins in health and disease s41392-022-01257-8.md` — Sirtuins review
- `notes/cancer/_document_ - Ivermectin, a potential anticancer drug...md` — Ivermectin review
- `notes/autophagy/_document_ - Autophagy and intermittent fasting...md` — Autophagy & fasting review
- `notes/autophagy/_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting.md` — CR & autophagy review
- `notes/_link/_document_ - Rapamycin for longevity the pros, the cons, and future perspectives.md` — Rapamycin review

### Web Sources
1. Dwyer S, Chodosh LA (2024). "Autophagy is required for mammary tumor recurrence by promoting dormant tumor cell survival following therapy." *Breast Cancer Research*. https://link.springer.com/article/10.1186/s13058-024-01878-7
2. "Chloroquine Overcomes Chemotherapy Resistance and Suppresses Cancer Metastasis by Eradicating Dormant Cancer Cells." (2025) *Cell Death & Disease*. https://www.nature.com/articles/s41419-025-08304-6
3. Granato M et al. (2013). "JNK and Macroautophagy Activation by Bortezomib Has a Pro-Survival Effect in Primary Effusion Lymphoma Cells." *PLOS ONE*. https://doi.org/10.1371/journal.pone.0075965
4. Kinsella TJ (2011). "Impact of Autophagy on Chemotherapy and Radiotherapy Mediated Tumor Cytotoxicity: 'To Live or not to Live'." *Frontiers in Oncology*. PMC3356061
5. Galluzzi L et al. (2017). "Activating autophagy to potentiate immunogenic chemotherapy and radiation therapy." *Nat Rev Clin Oncol*. PMID: 27845767
6. Goenka A et al. (2025). "Targeting autophagy in platinum-sensitive relapsed ovarian cancer: randomized phase II trial of hydroxychloroquine with chemotherapy with biomarker correlation." *Discover Oncology*. https://link.springer.com/article/10.1007/s12672-025-01904-w
7. Phase I/II trial (2019). "Autophagy Inhibition to Augment mTOR Inhibition: a Phase I/II Trial of Everolimus and Hydroxychloroquine in Patients with Previously Treated Renal Cell Carcinoma." *Clin Cancer Res*. AACR
8. Phase 1b/2 trial (2024). "Targeting autophagy plus high-dose CDK4/6 inhibitors in advanced HR+HER2− breast cancer." *Med* (Cell Press). https://doi.org/10.1016/j.medj.2024.11.012
9. Haldar SD et al. (2025). "A phase I trial of binimetinib plus hydroxychloroquine in patients with previously treated metastatic pancreatic cancer." *JCO* 43(16_suppl):4152.
10. Chromik J et al. (2024). "Combined Autophagy Inhibition and Dendritic Cell Recruitment Induces Antitumor Immunity and Enhances Immune Checkpoint Blockade Sensitivity in Pancreatic Cancer." PMC11647207
