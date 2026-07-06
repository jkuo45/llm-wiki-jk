---
type: entity
category: gene
entity_type: "Gene"
created: 2024-01-01
updated: 2024-07-04
---

# Tumor Suppressor Gene

A **[[Tumor Suppressor Gene]]** (TSG) encodes a protein that protects cells from neoplastic transformation. Unlike [[Oncogene|oncogenes]] (which promote proliferation when mutated or overexpressed), TSGs suppress tumor formation by regulating cell cycle arrest, [[Apoptosis|apoptosis]], [[DNA Repair|DNA repair]], [[Senescence|senescence]], and contact inhibition. The [[Knudson Two-Hit Hypothesis|Knudson two-hit hypothesis]] — requiring both alleles to be inactivated — applies to classical TSGs like [[RB1]] and [[p53]].

## Epigenetic Inactivation of TSGs

Inactivation of TSGs in [[Cancer]] occurs at approximately equal frequency through:
- **Genetic mutation** (point mutation, deletion, LOH).
- **Epigenetic silencing** (promoter [[CpG Island|CpG island]] hypermethylation).
- **Histone modifications** (loss of [[H3K27ac]], gain of [[H3K27me3]] via [[Polycomb Group Proteins|PRC2]]).

Epigenetic TSG silencing is reversible — unlike genetic inactivation — making it a therapeutic target for [[Epigenetic Modifiers|epidrugs]].

## Major Epigenetically Silenced TSGs in Cancer

| TSG | Cancer Type | Mechanism | Epidrug Response |
|---|---|---|---|
| [[CDKN2A]] (p16^INK4a^) | Melanoma, pancreatic, NSCLC | Promoter hypermethylation, PRC2-mediated H3K27me3 | [[Decitabine]] → re-expression |
| [[CDH1]] (E-cadherin) | Breast, gastric, lobular carcinoma | Promoter hypermethylation | [[5-Azacytidine]] + [[HDACi]] |
| [[MLH1]] | Colorectal, endometrial (MSI+) | Promoter hypermethylation | [[Decitabine]] → sensitivity to [[5-FU]] |
| [[BRCA1]] | Breast, ovarian | Hypermethylation of alternative promoter | Sensitivity to [[PARP inhibitors]] |
| [[RASSF1A]] | Lung, breast, renal | CpG island hypermethylation | Re-expression → apoptosis |
| [[VHL]] | Renal cell carcinoma | Hypermethylation (in subset) | [[HDAC inhibitors]] |

## TSG Silencing and Senescence

TSG inactivation is a major route of escape from [[Cellular Senescence|senescence]]. Loss of [[p53]] or [[RB1]] — or epigenetic silencing of [[CDKN2A]] — prevents OIS cells from mounting a stable arrest, allowing progression from adenoma to carcinoma. Conversely, TSGs are also effectors of senescence induction: p53 and RB1 are the non-redundant backbone of the senescence program, and their activation by [[Senolytic Drugs|senolytic therapies]] may enhance elimination of senescent cells.

## Therapeutic Reactivation Strategies

1. **[[Epigenetic Modifiers]]:** [[DNMT inhibitors|DNMTi]] + [[HDAC inhibitors|HDACi]] combinations (e.g., Decitabine + Vorinostat).
2. **Demethylating priming:** Low-dose Decitabine cycles to reprogram the [[Epigenome]] before chemotherapy.
3. **Epigenetic editing:** [[CRISPR]]-dCas9-[[TET1]] to demethylate specific TSG promoters.
4. **Transcriptional reactivation:** [[HDAC inhibitors]] (e.g., [[Panobinostat]]) to open silenced TSG chromatin.

### Linking Summary:
- New links added: [[Cancer]], [[p53]], [[RB1]], [[DNA Repair]], [[Senescence]], [[Epigenetic Modifiers]], [[Apoptosis]]
- Suggested new entity notes to create: [[CDH1]], [[MLH1]], [[RASSF1A]], [[VHL]], [[BRCA1]], [[Knudson Two-Hit Hypothesis]]
- Strong connections to strengthen: [[Tumor Suppressor Gene]] ↔ [[Cancer]], [[Tumor Suppressor Gene]] ↔ [[Senescence]]
