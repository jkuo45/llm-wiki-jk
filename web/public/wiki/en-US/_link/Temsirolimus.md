---
title: Temsirolimus
description: The ester prodrug of sirolimus, an intravenous mTOR inhibitor approved for advanced renal cell carcinoma; it binds FKBP12 to inhibit mTORC1, causing G1 arrest, reduced VEGF synthesis and anti-angiogenic effects.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - drug
  - pharmacology
  - oncology
  - chemical-compound
aliases: [Torisel, CCI-779, temsirolimus (CCI-779)]
---

# Temsirolimus

**Temsirolimus** (CCI-779, brand name **Torisel**) is a water-soluble ester prodrug of [[Rapamycin|sirolimus]], developed by Wyeth and approved by the FDA in May 2007 and by the EMA in November 2007 for advanced [[Renal Cell Carcinoma]]. It is a member of the [[Rapalogs|rapalog]] class — the second-generation mTOR inhibitors developed to improve the solubility and pharmacokinetics of rapamycin — and is a [[Targeted Therapy|targeted therapy]] by pathway even though it is approved on histology rather than a biomarker.

## Chemistry and disposition

Temsirolimus is the 3-hydroxy-2-(hydroxymethyl)-2-methylpropanoic acid ester of sirolimus, giving it an aqueous solubility sirolimus lacks and permitting intravenous administration. It is **not a competitive inhibitor itself** — it is inert until converted in vivo to sirolimus. Reported half-lives are ~17.3 h for temsirolimus and ~54.6 h for sirolimus; metabolism is hepatic, excretion roughly 78% faecal and 4.6% urinary.

> [!info] Prodrug caveat
> Some clinical literature, including manufacturer framing, describes temsirolimus as the active agent. The pharmacology review evidence and subsequent analyses support the opposite: the parent is rapidly and extensively converted to sirolimus, and its antiproliferative and antiangiogenic effects are attributed primarily to the metabolite. This is a recurring disagreement in the mTOR-inhibitor literature and is worth flagging rather than smoothing over.

## Mechanism of action

Temsirolimus (via sirolimus) binds the FKBP12 protein to form a complex that allosterically inhibits **mTORC1** (and, at higher exposures, mTORC2) by binding its FRB domain. The consequences:

- **Translation and growth.** mTORC1 is the master nutrient and growth signal. Its inhibition reduces S6K1 and 4E-BP1 phosphorylation, suppressing cap-dependent translation, ribosome biogenesis and cell-cycle protein synthesis, and producing G1 cell-cycle arrest.
- **HIF-1α degradation.** The mechanism specific to renal cell carcinoma: mTOR inhibition reduces the translation of [[HIF-1α]], so less HIF-1α protein accumulates even though VHL-mediated degradation of the protein itself is intact. Since HIF-1α drives VEGF, this cuts off the angiogenic programme. In VHL-mutant clear cell RCC — where loss of VHL already prevents HIF-1α degradation — the drug blocks the *synthesis* half of the problem. This is why the drug is matched to that tumour type.
- **Angiogenesis.** Reduced VEGF synthesis, plus direct endothelial effects, produce the antiangiogenic activity demonstrated in rhabdomyosarcoma xenografts.
- **Immune modulation.** mTORC1 inhibition constrains effector T cell and dendritic cell function, and the drug is also an immunosuppressant in the transplant setting (via the same FKBP12–mTOR calcineurin-inhibition axis as sirolimus).

## Efficacy

The pivotal trial (Hudes et al. 2007) randomised 626 previously untreated, poor-prognosis advanced RCC patients to temsirolimus, interferon-α, or the combination. Median overall survival was **10.9 months** with temsirolimus, 7.3 months with interferon-α, and 8.4 months with the combination — a significant improvement over interferon-α, and notably the combination was *worse* than temsirolimus alone.

## Toxicity and clinical caveats

The adverse-effect profile is characteristically **metabolic rather than cytotoxic**: fatigue, skin rash, mucositis, decreased haemoglobin and lymphocytes, hypertriglyceridaemia, hyperglycaemia, hypophosphataemia. This is the profile of a cytostatic agent with a narrow marrow effect, and it is a genuine advantage over oral multikinase inhibitors in symptom burden.

> [!warning] Pulmonary toxicity
> Temsirolimus is associated with **pneumonitis / interstitial lung disease**, the most clinically important serious toxicity. Risk rises with doses above 25 mg and with abnormal baseline pulmonary function or pre-existing lung disease. Presentation is dry cough, fever, eosinophilia, chest pain and exertional dyspnoea, and onset can be early (days to weeks) or very late (months to years). This is a diagnosis of exclusion, and it can be fatal.

> [!warning] Treatment-related mortality
> A 2013 meta-analysis of mTOR inhibitors in cancer found **increased treatment-related mortality** versus controls, and the excess was attributed largely to pneumonitis. The single-agent survival benefit in poor-prognosis RCC therefore comes with a real, under-appreciated fatality rate, and the drug is not benign despite its favourable toxicity profile relative to TKIs.

Infusion reactions are common; same-day hypersensitivity reactions were usually not severe, and diphenhydramine 25–50 mg premedication 30 minutes before infusion is recommended. Hepatic impairment requires dose reduction or avoidance, and the drug is a pregnancy category D agent.

## Relevance to autophagy and aging

Temsirolimus belongs to the rapalog family, and is the drug with which the [[_document_ - Autophagy takes it all – autophagy inducers target immune aging]] document engages. Mechanically it is a partial mTORC1 inhibitor, so in vivo it induces [[Autophagy]] — but the clinically approved dosing schedule was chosen to preserve enough mTORC1 signalling to avoid the immunosuppression and metabolic toxicity of full rapamycin exposure, and the drug is not marketed or used as a geroprotector. Where mTOR inhibition is used to modulate immune aging, the rapalogs at lower and intermittent exposure are the research vehicle; clinical indication remains oncology and transplant.

## Documents

- [[Rapalog]] — Temsirolimus is one of the four clinically approved rapalogs (with sirolimus, everolimus and ridaforolimus); the rapalog document places it in the class and its historical development logic.
- [[Rapalogs]] — the class-level note covering the solubility/pharmacokinetics problem that motivated second-generation rapamycin analogues, which is exactly what temsirolimus was built to solve.
- [[_document_ - Autophagy takes it all – autophagy inducers target immune aging]] — the document treating mTOR-class autophagy inducers in the context of immune aging, in which the rapalogs including temsirolimus are the pharmacological tool.
- [[mTORC1]] — the direct pharmacological target of the sirolimus metabolite; the mTORC1 note holds the pathway biology and the mTORC1/mTORC2 selectivity discussion.

## Connections

- [[Rapamycin]] — Temsirolimus is a prodrug of sirolimus, and the pharmacological argument over how much of its activity is parent versus metabolite is unresolved in the literature. The FKBP12–mTOR binding mechanism is identical to rapamycin's.
- [[Rapalog]] — Temsirolimus is a rapalog by definition, sharing the FKBP12-dependent mTOR mechanism and differing from rapamycin only in the solubilising ester that permits IV dosing. Rapalogs are better tolerated than rapamycin precisely because mTORC1 inhibition is incomplete, and that incomplete inhibition is also why their autophagy-inducing capacity is partial.
- [[Rapalogs]] — The rapalog class exists because rapamycin's poor aqueous solubility and hyperlipidaemia limit it. Temsirolimus is the extreme case: fully solubilised for IV use, with a correspondingly shorter parent half-life and an efficacy that runs largely through its sirolimus metabolite.
- [[mTORC1]] — Temsirolimus's therapeutic mechanism is FKBP12-dependent mTORC1 inhibition: reduced S6K1/4E-BP1 signalling, reduced translation, G1 arrest. The mTORC1 note holds the pathway and the rapamycin-sensitivity rationales.
- [[mTOR]] — mTOR is the drug's target family, and the mTORC1 versus mTORC2 selectivity question governs the toxicity profile and the side-effect set.
- [[Renal Cell Carcinoma]] — RCC is the approved indication and the tumour type where the mechanism is most specific: mTOR inhibition cuts HIF-1α translation, cutting VEGF, in exactly the VHL-deficient tumour that over-produces HIF-1α. The 10.9 vs 7.3 month survival benefit over interferon-α is the drug's defining result.
- [[VEGF]] — Reduced HIF-1α translation reduces VEGF synthesis, which is the antiangiogenic arm of temsirolimus's mechanism and the reason it was grouped with antiangiogenics in the pivotal trial era.
- [[Targeted Therapy]] — Temsirolimus is a textbook targeted-therapy case with an unusual feature: it is targeted by pathway but selected by histology, with no companion diagnostic. It was the first agent to beat interferon in poor-prognosis RCC and remains the reference mTOR inhibitor.
- [[Autophagy]] — mTORC1 inhibition relieves the autophagy brake, and this is the mechanistic reason rapalogs appear at all in the autophagy-immune-aging literature. The clinical dosing deliberately limits mTORC1 suppression, so temsirolimus is a partial autophagy inducer in practice.
- [[Interferon]] — Interferon-α was the pre-2007 standard for poor-prognosis advanced RCC and is the comparator in the pivotal temsirolimus trial, and one of the two lesions (upper-tract, poor-risk) for which temsirolimus has since been displaced by tyrosine kinase inhibitors and combinations.
- [[Immunosenescence]] — The document that treats mTOR inhibition as an immune-aging intervention, and the reason partial-inhibition rapalogs are of interest in that context. Temsirolimus's immunosuppression and mucositis are the dose-limiting costs of the same mechanism.
- [[Sarcopenia]] — mTOR inhibition causes muscle wasting, and cancer-cachexia and treatment-associated muscle loss are clinically meaningful in the RCC population this drug is used in — a direct trade-off between anti-tumour mechanism and muscle mass.

## Linking Summary

- New links added: [[Rapamycin]], [[Rapalog]], [[Rapalogs]], [[mTOR]], [[Renal Cell Carcinoma]], [[VEGF]], [[Targeted Therapy]], [[Autophagy]], [[Interferon]], [[Immunosenescence]], [[Sarcopenia]]
- Suggested notes to create: [[Sirolimus]], [[Drug-Induced Pneumonitis]], [[mTOR Inhibitor-Associated Pneumonitis]] — removed as already existing: Clear cell renal cell carcinoma, Everolimus, FKBP12, HIF-1α, VHL, mTORC2
- Strong connections to strengthen: [[Temsirolimus]] ↔ [[mTORC1]], [[Rapamycin]] ↔ [[Rapalogs]], [[Autophagy]] ↔ [[Immunosenescence]]
