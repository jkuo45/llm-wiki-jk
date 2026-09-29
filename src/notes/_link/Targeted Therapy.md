---
title: Targeted Therapy
description: Cancer treatment modality in which drugs are aimed at a specific molecular dependency of a tumour — an oncogene, a receptor kinase, a blood vessel, or an immune checkpoint — rather than at the nonspecific damage of rapidly dividing cells.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - oncology
  - pharmacology
  - drug
  - cancer
aliases: [molecularly targeted therapy, molecular targeted therapy, precision oncology, targeted cancer therapy]
---

# Targeted Therapy

**Targeted therapy** (also *molecularly targeted therapy* or *precision oncology*) is a cancer treatment modality in which a drug is aimed at a specific molecular target that a particular tumour depends on — an activated oncogene, a receptor [[Tyrosine Kinase|tyrosine kinase]], a blood vessel pathway, or an immune checkpoint — rather than at the generic machinery of rapid cell division that [[Chemotherapy]] attacks. Together with hormonal therapy and cytotoxic chemotherapy it is one of the three main pharmacotherapeutic pillars of cancer care.

> [!info] The defining idea
> The rationale is **dependency**. A tumour that harbours, say, a BCR-ABL translocation, a mutant EGFR, or HER2 amplification has a specific addiction to that pathway; blocking the dependency selectively shrinks the tumour while leaving normal cells that do not depend on it largely untouched. That is the source of both the efficacy and the characteristic toxicity profile of targeted agents: toxicity comes from the same pathway being used by normal tissue (a HER2 inhibitor cardiotoxic because cardiomyocytes express HER2 signalling, a VEGFR inhibitor causing hypertension because VEGF is a vasodilator, a BCR-ABL inhibitor causing myelosuppression because haematopoiesis needs the signal).

## Classes

**Small-molecule kinase inhibitors.** Most are ATP-competitive or allosteric inhibitors of [[Tyrosine Kinase|tyrosine kinases]] — [[Imatinib]] (BCR-ABL, c-KIT, PDGFR), erlotinib and osimertinib (EGFR), lapatinib (HER2), vemurafenib (BRAF), sunitinib and pazopanib (VEGFR, PDGFR), alectinib and lorlatinib (ALK), selpercatinib (RET), capmatinib (MET). See [[Tyrosine Kinase Inhibitors]] and [[Receptor Tyrosine Kinases]]. Non-kinase small-molecule targets also qualify: proteasome inhibitors, PI3K inhibitors, and IDH1/2, PARP, and KRAS G12C inhibitors.

**Monoclonal antibodies.** Antibodies against cell-surface or soluble targets: trastuzumab (HER2), cetuximab and panitumumab (EGFR), bevacizumab (VEGF-A), ramucirumab (VEGFR2), and the checkpoint inhibitors (PD-1, PD-L1, CTLA-4) which are mechanistically [[Immunotherapy]] as much as targeted therapy. Because most targeted agents are biologics, "biologic therapy" is sometimes used synonymously in an oncology context — though the modalities do overlap rather than coincide, and antibody-drug conjugates deliberately combine a targeted binder with a cytotoxic payload.

**Hormonal and pathway-specific agents.** Aromatase inhibitors, anti-androgens, and CDK4/6 inhibitors are targeted in the sense of acting on a named dependency rather than on DNA.

**Anti-angiogenic agents.** [[VEGF]] and VEGFR blockade are targeted at a tumour's blood supply rather than its DNA; [[Temsirolimus]] (mTOR inhibition, reducing HIF-1α-driven VEGF synthesis) and [[Bevacizumab]] are the archetype examples, and are the closest thing targeted therapy has to an anti-stromal strategy.

## Biomarker-driven selection

The defining methodological advance is that targeted therapy is chosen by **molecular assay, not by histology**. Tumours are profiled for mutations, amplifications, fusions, and expression of the target, and the drug is matched to the dependency. The Cancer Cell Line Encyclopedia and successor resources (Ghandi et al. 2019) exist precisely to define the genotype–drug-response map, and the practical standard of care is now a molecular panel on the pretreatment biopsy or blood.

> [!warning] Resistance is the central problem
> Targeted therapy's specific weakness is that single-driver cancers mutate or bypass the targeted node, typically within 6–18 months. Mechanisms include secondary mutations in the drug-binding pocket (EGFR T790M, KIT D816V), activation of parallel bypass pathways (RAS/MAPK reactivation downstream of a lost RTK, receptor switching), and phenotypic change (adenocarcinoma to small-cell transformation in EGFR-mutant lung cancer, and MET amplification). This is why combination regimens, and cycling to a mechanistically different agent, are the norm rather than the exception.

## Contrast with chemotherapy and immunotherapy

- **vs [[Chemotherapy]]** — cytotoxic chemotherapy targets processes shared by all dividing cells (DNA replication, microtubules, topoisomerases), producing a narrow therapeutic window that is dose-limited by marrow and nerve toxicity. Targeted therapy aims at a tumour-restricted dependency, widening the window where a dependency exists and giving no benefit at all where it does not.
- **vs [[Immunotherapy]]** — checkpoint inhibitors do not target a tumour molecule; they release a systemic brake on T cells, so their efficacy tracks immunogenicity rather than genotype, and they can produce durable responses after targeted agents have failed. Combination of the two is a major current strategy, particularly where a targeted agent is used to debulk and an checkpoint inhibitor to control residual disease.
- **vs [[Radiotherapy]]** — radiotherapy is a local DNA-damaging modality; it is not targeted therapy, though radiosensitising targeted agents (PARP inhibitors, mTOR inhibitors) are used with it.

> [!warning] Clinical caveat
> "Targeted" is a marketing term as much as a pharmacological one, and it is widely over-applied to agents with no demonstrated biomarker-selected benefit. Targeted therapy is only genuinely targeted where a validated biomarker identifies the patients who benefit; the label by itself predicts nothing. Response rates in biomarker-unselected populations are frequently modest, and each class carries class-specific toxicities (rash, diarrhoea, hypertension, cardiotoxicity, pneumonitis, secondary malignancies) that require monitoring rather than reassurance.

## Documents

- [[Chemotherapy]] — the cytotoxic modality that targeted therapy is defined against and is most often combined with or sequenced after; the chemotherapy document supplies the nonspecific-proliferation contrast this note is built on.

## Connections

- [[Chemotherapy]] — Chemotherapy and targeted therapy are complementary rather than competing: chemotherapy provides rapid cytoreduction and broad applicability, while targeted therapy supplies depth of response and duration in tumours with a defined dependency. The clinical question is sequencing, and the answer is tumour-specific — the poor-prognosis renal cell carcinoma trial in which [[Temsirolimus]] was compared with [[Interferon]] is the standard example.
- [[Tyrosine Kinase Inhibitors]] — Tyrosine kinase inhibitors are the largest single class of targeted agents, and [[Tyrosine Kinase]] is the enzyme class they all share. This note's "small-molecule kinase inhibitors" section is a category view of a note set that treats the pharmacology in detail.
- [[Receptor Tyrosine Kinases]] — Most targeted-oncology drugs act on receptor tyrosine kinases (EGFR, HER2, VEGFR, ALK, RET, MET, KIT, PDGFR, FGFR), which are also the surface receptors that define whether a tumour is druggable by an antibody or a small molecule.
- [[Immunotherapy]] — Checkpoint blockade and targeted therapy address the same disease from opposite directions, one by removing a tumour dependency and the other by removing an immune brake. Their combination is the standard answer to acquired resistance to either, and stromal exclusion of T cells is itself a driver of checkpoint-inhibitor resistance that anti-angiogenic targeted agents partly address.
- [[Temsirolimus]] — Temsirolimus is a targeted agent by pathway but without a companion diagnostic: it is approved on the basis of histology (advanced renal cell carcinoma with poor prognostic features) rather than a biomarker. It is also the clearest case in this vault of a targeted agent whose primary mechanism is mTOR inhibition with autophagy and metabolic rather than purely proliferative consequences.
- [[VEGF]] — VEGF and VEGFR blockade is targeted therapy aimed at the tumour microenvironment rather than the tumour cell, and it is the mechanistic basis for combining anti-angiogenics with checkpoint inhibitors.
- [[Chemotherapy-Induced Peripheral Neuropathy]] — Cytotoxic neuropathy is the dose-limiting toxicity of the nonspecific modality, and is one of the main practical reasons to shift patients onto targeted agents when a dependency is present.
- [[Radiotherapy]] — Radiotherapy remains a local cytotoxic modality; targeted agents enter the field mainly as radiosensitisers (PARP inhibitors, mTOR inhibitors, anti-angiogenics) rather than as substitutes for it.
- [[MET gene]] — MET is a receptor tyrosine kinase and a validated targeted-therapy axis in renal cell carcinoma and in EGFR-resistant lung cancer, and a worked example of the bypass-resistance mechanism.
- [[SRC kinase]] — SRC is a non-receptor tyrosine kinase and an amplification-driven target in colorectal cancer; it is also a common bypass route when the primary RTK driver is blocked.

## Linking Summary

- New links added: [[Tyrosine Kinase Inhibitors]], [[Receptor Tyrosine Kinases]], [[Immunotherapy]], [[Temsirolimus]], [[VEGF]], [[Chemotherapy-Induced Peripheral Neuropathy]], [[Radiotherapy]], [[MET gene]], [[SRC kinase]]
- Suggested notes to create: [[Imatinib]], [[Osimertinib]], [[Bevacizumab]], [[Trastuzumab]], [[Atezolizumab]], [[Idelumab]], [[Oncogene Dependency]], [[Acquired Drug Resistance]], [[Biomarker-Driven Therapy]], [[Antibody-Drug Conjugates]], [[Circulating Tumor DNA]], [[Tyrosine Kinase]]
- Strong connections to strengthen: [[Targeted Therapy]] ↔ [[Immunotherapy]], [[Targeted Therapy]] ↔ [[Chemotherapy]], [[Receptor Tyrosine Kinases]] ↔ [[Tyrosine Kinase Inhibitors]]
