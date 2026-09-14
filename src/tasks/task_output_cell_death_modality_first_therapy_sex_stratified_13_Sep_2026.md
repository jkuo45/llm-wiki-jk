---
title: "Cell-Death-Modality-First Therapeutics with Sex Stratification: Framework, Sex-Stratified Stroke Trial Design, and the Parthanatos Translation Gap"
description: "Three-part research write-up: (1) the modality-first/patient-second drug-development framework and whether it is common or overlooked; (2) a concrete sex-stratified acute ischemic stroke trial design (PARP/parthanatos arm for males, pan-caspase + ER-beta arm for females) grounded in vault evidence; (3) the clinical-translation gap for Parthanatos (JPI-289/amelparib) with recommended note update."
created: 2026-09-13
updated: 2026-09-13
tags: [task-output, research, cell-death, parthanatos, apoptosis, necroptosis, ferroptosis, pyroptosis, sex-dimorphism, precision-medicine, stroke, estrogen, ER-beta, bh3-profiling, gasdermin, trial-design]
author: []
---

# Cell-Death-Modality-First Therapeutics with Sex Stratification

Synthesis of external literature with vault cross-references (`src/notes/cell-death/`, `src/notes/_link/`).
Generated: 13_Sep_2026 09:08 PM PDT.
Methods: targeted web search (reviews, ClinicalTrials.gov, journal primary sources) + vault note inspection. Companion vault reads: [[Parthanatos]], [[PARP1]], [[Apoptosis]], [[Pyroptosis]], [[Estrogen Receptor]], plus `src/tasks/task_output_sex_dimorphic_cell_death_05_Sep_2026.md`, `src/tasks/task_output_cell_death_modality_distribution_research_13_Sep_2026.md`, `src/tasks/task_output_cell_death_quadrants_controlled_inflammatory_lens_04_SEP_2026.md`.

## Abstract / bottom line

Two distinct practices are frequently conflated under "cell-death-targeted therapy":

1. **Effector-side drug design** — building a molecule against a modality's machinery (BCL-2, RIPK1, gasdermins, GPX4, PARP-1, caspases). This is **common, active, and growing** across the pipeline.
2. **Patient-side modality selection** — measuring (or predicting) which death pathway dominates in a *given patient* and matching therapy to it. This is **rare and only emerging**, and almost exclusively in oncology.
3. **Sex as the modality stratifier** — choosing a therapy because the patient's sex predicts the dominant death executor (male → PARP/AIF parthanatos; female → cytochrome-c/caspase apoptosis). This is **real, repeatedly validated preclinical biology, and essentially absent from clinical trials** — the single most under-exploited aperture in the space.

The best-validated example in all of biomedicine is ischemic brain injury: male neurons die by parthanatos, female neurons die by intrinsic apoptosis, cell-autonomously (XY vs XX), and the corresponding inhibitors rescue only the matching sex. Yet the only parthanatos-targeting clinical program (JPI-289/amelparib) was built on male-typical biology and enrolled without sex stratification. The framework is **conceptually sound, mechanistically grounded, and clinically overlooked**.

---

## Part 1 — The framework: "modality-first, patient-second" development

### 1.1 Effector-side targeting is standard practice

| Modality | Drug classes | Clinical status (as of Sep 2026) |
| --- | --- | --- |
| **Apoptosis** | BH3 mimetics (BCL-2/MCL-1/BCL-XL: venetoclax, navitoclax, MCL-1 programs), death-receptor agonists, IAP antagonists (LCL161 geared trial in TNBC, 2018) | Venetoclax approved; MCL-1/BCL-XL in trials; IAP-antagonist + chemo trials stratified by gene signature |
| **Necroptosis** | RIPK1 inhibitors (GSK2982772; Sanofi/Denali SIR1-365) | Ph2 reached (psoriasis, UC, RA); well-tolerated but no efficacy separation; programs largely deprioritized. First-in-class RIPK1 → human was 2017 (Weisel, *Pharmacol Res Perspect*) |
| **Pyroptosis** | Gasdermin platform (GSDMD/GSDME); inflammasome (NLRP3) inhibitors | Early/translational; GSDME biology is the cleanest "modality-switch" story (Nature 2017) |
| **Ferroptosis** | GPX4/System x_c⁻ pathway inducers and inhibitors | No approvals; reviews state patient-population selection is the missing step; first Ph1s beginning (e.g., CNSI-Fe(II) NCT06048367; Houston Methodist myeloma program) |
| **Parthanatos** | PARP-1 inhibitors (DPQ, PJ-34, veliparib, olaparib; stroke-specific: JPI-289/amelparib, MP-124) | Massive oncology success via **HRD/synthetic lethality — not parthanatos**. Only stroke program: JPI-289 Ph2a (NCT03062397) |

So "kill the cell *via* pathway X" is normal drug design. The non-obvious part is choosing X *from* the patient.

### 1.2 Patient-side modality selection: the three exemplars

**A. BH3 profiling (apoptotic priming) — closest to deployed modality-first medicine.** Functional assay (Letai lab) measuring mitochondrial "priming" and BCL-2-family dependencies with BH3 peptides or mimetic toolkits. Pretreatment priming predicts chemo/radiation response; *dynamic* BH3 profiling (DBP) measures the therapy-induced Δpriming *before* cells die (days earlier), and now runs on microfluidic devices for biopsy-scale samples. This is the field's proof that "measure the executor state, then match the drug" works — but it is tumor-only and not yet standard of care.

**B. GSDME modality switch — a drug whose mechanism is literally "retarget the death modality."** Chemotherapies kill via apoptosis when GSDME is silenced (promoter hypermethylated in most cancers) and via *pyroptosis* (immunogenic) when GSDME is expressed (caspase-3 cleaves GSDME → GSDME-N pores). Decitabine (DNMTi) can re-express GSDME and switch the modality; GSDME methylation is proposed as a chemo-response biomarker (including a neoadjuvant breast-cancer predictive ANN model, 2024). Side-effect corollary: high GSDME in normal tissue explains chemo toxicity — so modality selection has a safety axis too.

**C. Ferroptosis stratification — explicitly flagged as missing.** Recent reviews (e.g., *Signal Transduct Target Ther* 2024; prostate-cancer precision review 2026) state that identifying the responsive patient population (by tumor genotype, iron/lipid-peroxidation state, GPX4/SLC7A11 status) is "crucial for successful clinical trials" — i.e., the field itself admits the patient-selection layer is unfinished.

### 1.3 Sex as a modality stratifier: real biology, no trials

The vault already houses the strongest evidence set (see [[Parthanatos]] §Sex dimorphism, [[PARP1]], [[Apoptosis]], [[Pyroptosis]], `task_output_sex_dimorphic_cell_death_05_Sep_2026.md`):

- **Male (XY) death arm — parthanatos:** nNOS → PARP-1 → PAR → AIF/MIF. PARP-1 deletion, nNOS blockade, or PARP inhibition reduces infarct in males only; Harlequin (AIF-deficient) adults protected in males only (McCullough 2005 PMID 15689952; Yuan 2009; Hagberg 2004).
- **Female (XX) death arm — intrinsic apoptosis:** higher, earlier cytochrome-c → caspase-9/3/8; pan-caspase inhibition (Q-VD-OPh) protects females only; PARP-1 loss *worsens* female injury by shunting to caspases (Liu 2011 *Stroke* 42:739–745 PMID 21311064; Du 2004 PMID 15365098).
- **Estrogen sits on the same axis:** 17β-estradiol neuroprotection is female-specific and PARP-1-dependent; ERβ agonism, not ERα, restrains NLRP3/pyroptosis in females (vault [[Pyroptosis]]; Xu 2016 PMID 26928197; Zhu 2026 *J Clin Invest* e196636); ERβ deficiency drives macrophage pyroptosis.

The mapping is therefore exactly the user's intuition: **"targeting parthanatos for men, ER-dependent protection for women."** Clinically: nothing tests it. That is the gap Part 2 addresses.

---

## Part 2 — Worked example: sex-stratified acute ischemic stroke trial

Concept design (straw-man protocol; requires modeling, regulatory, and KOL input — not a validated protocol).

### 2.1 Rationale

- Modality split is the best-validated in biomedicine (adult MCAO, neonatal HI, XY/XX cultures).
- JPI-289 (amelparib, Jeil): water-soluble PARP-1 inhibitor, IC50 ~18.5 nM (PARP activity) / 10.7 nM (cellular PAR); 49% infarct reduction in monkey tMCAO (vs 21% for MP-124); Ph1 in **healthy male volunteers**; Ph2a NCT03062397 (acute ischemic stroke, SOC + tPA) without sex stratification.
- Female side candidates exist but are undeveloped for stroke: pan-caspase inhibitors (preclinical Q-VD-OPh; clinical emricasan validated the class in humans but missed in NASH), ERβ-selective agonism (erteberel/LY500307 reached Ph2 in schizophrenia/BPH/perimenopausal depression; ERB-041 in IBD — discontinued programs, reusable).

### 2.2 Design

**Population:** moderate-to-large anterior-circulation AIS (ASPECTS ≥ 6), treatment window ≤ 6 h (PARP window is minutes-scale after reperfusion; intends co-administration with thrombolysis/thrombectomy), both sexes.

**Pre-randomization stratification (independent of arm):** sex × hormonal status: male / pre-menopausal female / peri-menopausal female / post-menopausal female (proxy: FSH + last-menses date; age ≥ 55 as fallback).

**Core design — matched-pair, sex-stratified, biomarker-adaptive:**

| Arm | Population | Investigational treatment | Mechanism match |
| --- | --- | --- | --- |
| A | Males (all hormonal states) | PARP-1 inhibitor (amelparib-class; or PJ-34-class CNS-penetrant) + SOC | Blocks the male-predominant parthanatos executor (PAR → AIF/MIF) |
| B | Females (all hormonal states) | Pan-caspase-3 inhibitor (Q-VD-OPh-class; emricasan as registered comparate for safety) **±** ERβ-selective agonist add-on (erteberel/LY500307-class repurposing; OSU-ERβ-12-class if available) + SOC | Blocks female-predominant intrinsic apoptosis; ERβ axis restrains NLRP3/pyroptosis and preserves PARP-1 needed for estradiol protection |

Each sex arm is a randomized, double-blind, placebo-controlled comparison (2:1 treatment:placebo), run within one adaptive platform so biomarker and safety data are shared.

**Modality-verification biomarker backbone** (feasible in acute stroke, mostly blood/CSF):
- Parthanatos: plasma/CSF PAR polymer (ELISA), NAD⁺ dip; peripheral surrogate only (nuclear AIF translocation is tissue-only).
- Apoptosis: serum M30/M65 (CK18 fragments, validated apoptosis biomarkers), cleaved caspase-3 in CSF, cfDNA ~180-bp ladder (nucleosomal pattern).
- Lytic/necrosis: cfDNA high-molecular-weight smear, HMGB1, LDH isozymes.
- Rescue readout regardless of modality: 24–72 h MRI infarct volume, 90-day mRS shift.

**Key decision rule (the entire point of the design):** the primary analysis is the **modality-stratified treatment effect** — e.g., PARP inhibitor responders are expected to be biomarker-PAR-high (and male), caspase-inhibitor responders biomarker-cleaved-caspase-3-high (and female). Pre-specify that a null overall effect with a sex × modality interaction is *not* a failed trial but the core hypothesis. Include Bayesian adaptive allocation toward the stratum where each drug shows signal, and a pre-planned futility stop per sex arm.

### 2.3 Risks and honest caveats

- **Death-modality markers are imperfect in vivo:** cfDNA and M30/M65 cannot fully separate parthanatos from necrosis; peripheral surrogates of AIF translocation do not exist. Tissue (penumbra biopsy) is unavailable in humans — this is why the trial tests surrogate-verified enrollment.
- **Program precedents are discouraging:** emricasan (pan-caspase) missed its NASH endpoints and possibly worsened fibrosis (*J Hepatol* 2020); chronic estradiol stroke trials failed (WEST, WHI — more fatal strokes); JPI-289's Ph2a status is stalled/unknown; RIPK1 inhibitors showed target engagement without efficacy in immune-mediated disease (a caution for monotherapy modality blockade).
- **PARP inhibitors carry oncology-grade safety (myelosuppression, QTc)** not tuned for acute stroke; dose-finding in a time-critical disease is hard.
- **Sex × hormonal status is a proxy for effector state, not a guarantee:** aged females converge toward male-like inflammatory/PARP death (Jog & Caricchio 2013), so the female arm may need age-stratified analysis or a pre-specified "post-menopausal female = dual therapy" branch.
- **Regulatory:** one-label-per-trial makes sex-specific labeling conceptually awkward; the design should be framed as two companion trials under one protocol (like master protocols) rather than a sex-restricted label.

### 2.4 Why this could be the flagship "modality-first" case

- The biology is validated in two species, two developmental windows, and in sex-segregated culture — as strong as any preclinical modality claim in the field.
- Both interventions already have clinical-phase small molecules (amelparib; emricasan-class; erteberel-class) — no de novo chemistry.
- It is the single place where "parthanatos for men / ER-caspase for women" is testable with existing assets.

---

## Part 3 — The Parthanatos clinical-translation gap (for the [[Parthanatos]] note)

### 3.1 Facts assembled for the note update

- **JPI-289 / amelparib** (Jeil Pharmaceutical): the only parthanatos-targeting (PARP-1) program in stroke. IC50 18.5 nM against PARP-1 activity, 10.7 nM cellular PAR; neuroprotective in rat OGD, tMCAO/pMCAO, and monkey tMCAO (~49% infarct reduction). Ph1 in healthy **male** volunteers; Ph2a (NCT03062397) and registries list no sex-stratified design; later translational work shows Treg upregulation in AIS patients. (Vault cross-ref: `task_output_sex_dimorphic_cell_death_05_Sep_2026.md`, which also records NCT01983358.)
- **Sex-stratified cell-death stroke trial:** none exists as of Sep 2026 (registry search).
- **Female-arm molecular space:** pan-caspase inhibition (Q-VD-OPh preclinical-only, female-only rescue); emricasan (clinical pan-caspase, NASH miss 2020); ERβ-selective agonists (erteberel LY500307 — Ph2 schizophrenia NCT01874756, perimenopausal depression NCT03689543, BPH — discontinued; ERB-041 Ph2 IBD; OSU-ERβ-12 preclinical 2026, PK-superior to erteberel); non-feminizing ER-silent estradiol analogues (Wise 2004) never left preclinical.
- **Estradiol-based clinical stroke trials failed** (WEST, WHI chronic E2) — the female strategy should be modality-matched (caspase) and ERβ-targeted, not chronic estrogen.

### 3.2 Recommended note text

Appended to the [[Parthanatos]] §Sex dimorphism section (implemented in this session):

> Clinical translation of the sex split remains untested. The only parthanatos-targeting stroke program, JPI-289 (amelparib, Jeil; PARP-1 IC50 18.5 nM; ~49% infarct reduction in monkey tMCAO), ran its Ph1 in healthy male volunteers and its Ph2a (NCT03062397, acute ischemic stroke) without sex stratification — male-selective biology was never used to design it. No sex-stratified cell-death neuroprotection trial exists. Female-side candidates are further behind: pan-caspase inhibition is the modality-matched strategy (Q-VD-OPh, female-only rescue), but clinical pan-caspase data (emricasan, NASH Ph2b miss) are discouraging, and ERβ-selective agonism (erteberel/LY500307, ERB-041) has reached Ph2 only in non-stroke indications. Chronic estradiol stroke trials failed (WEST, WHI), so female-arm design should target the executor (caspase-3) and ERβ axis, not replace estrogen.

### 3.3 Status of this write-up's wiki change

- Done this session: `src/notes/cell-death/Parthanatos.md` — added the clinical-translation-gap paragraph to §Sex dimorphism; `updated:` bumped to 2026-09-13.
- Optional next steps: replicate the sex-stratification framing in [[PARP1]] §Sex-dimorphic PARP-1/AIF death (add JPI-289 + emricasan/ERβ candidates); create a dedicated [[Amelparib]] entity note; extend [[Estrogen Receptor]] with the ERβ-selective-agonist landscape.

---

## Where this goes next ("making it standard")

1. **Validate modality biomarkers in acute stroke cohorts** (PAR/cfDNA/M30 in blood at presentation; correlate with tissue modality from autopsy/large-hemispherectomy cases).
2. **Run the sex-stratified adaptive platform (Part 2)** with both enrollment strata in one master protocol; make sex × biomarker interaction a pre-specified primary.
3. **Oncology mirror:** push BH3 profiling and GSDME-methylation toward prospective trial selection; add sex-stratified analyses to ferroptosis programs at the outset.
4. **Regulatory framing:** educate toward companion-diagnostic-type labeling for modality, with sex as one input to the modality classifier.

## References (selected)

- McCullough LD et al. Estrogen-mediated neuroprotection after experimental stroke in male rats. *J Cereb Blood Flow Metab* 2005;25:1108. PMID 15689952.
- Yuan M et al. Sex differences in the response to activation of the poly(ADP-ribose) polymerase pathway after experimental stroke. *Exp Neurol* 2009;217:210–218.
- Liu F et al. Sex differences in the response to PARP-1 deletion and intervention in experimental stroke. *Stroke* 2011;42:739–745. PMID 21311064.
- Du L et al. Innate gender-based proclivity in response to cytotoxicity and programmed cell death pathway. *J Biol Chem* 2004;279:38563–38570.
- Hagberg H et al. PARP-1 disruption preferentially protects males from perinatal hypoxia-ischemia. *J Neurochem* 2004;90:1068–1075.
- Wang YY et al. (Nature 2017) Chemotherapy drugs induce pyroptosis through caspase-3 cleavage of a gasdermin. *Nature* 547:99–103 (GSDME switch).
- Zhaorigetu S et al. JPI-289 Ph2a, NCT03062397 (ClinicalTrials.gov); Kim et al. 2018a (JPI-289 stroke program).
- Singh M et al. Ferroptosis in cancer: mechanism and therapeutic potential. *Int J Mol Sci* 2025;26(8):3852; *Signal Transduct Target Ther* 2024 (ferroptosis stratification gap).
- Weisel K et al. RIPK1 inhibitor GSK2982772 — FIH (*Pharmacol Res Perspect* 2017) and Ph2 psoriasis (*Clin Pharmacol Ther* 2020) / UC (fail, *BMJ Open Gastro* 2021).
- Ryan J, Montero J, Rocco J, Letai A. iBH3: fixable BH3 profiling. *Biol Chem* 2016;397:671–678; Manzano-Muñoz A et al. Microfluidic dynamic BH3 profiling. *npj Precis Oncol* 2022.
- Harrison SA et al. Pan-caspase inhibition with emricasan in NASH. *J Hepatol* 2020;72:808.
- ERβ agonists: erteberel (LY500307) NCT01874756, NCT03689543; OSU-ERβ-12, *J Med Chem* 2026 (preclinical); Zhu et al. *J Clin Invest* 2026;136(10):e196636 (ERβ and pyroptosis).