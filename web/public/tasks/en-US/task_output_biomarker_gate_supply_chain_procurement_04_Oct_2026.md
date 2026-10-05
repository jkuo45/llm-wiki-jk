---
title: Biomarker Gates — Supply Chain and Procurement Audit
description: Gate-by-gate audit of what can actually be bought for the 17 hard-coded individual biomarkers in web/public/pages/en-US/hard-coded-biomarker-gates.html, at what price and turnaround, in which regulatory tier. Establishes that the commercially real gates are the drug-metabolism ones (CYP2C9/VKORC1/CYP2D6/SLCO1B1), that the page's recommended minimum panel is procurement-infeasible as written, and identifies ten structural gaps — absent enzyme-activity assays, no CPIC guideline for CYP3A5-sirolimus, no commercial p70S6K1 assay, no standardized microbial-metabotype phenotype, ancestry-incomplete CYP3A5 panels, counselling as the true bottleneck, and compounded/supplement QC risk downstream of the test.
created: 2026-10-04
updated: 2026-10-04
tags:
  - task-output
  - biomarkers
  - pharmacogenomics
  - supply-chain
  - clinical-laboratory
  - metabotypes
  - comt
  - autophagy
  - oxidative-stress
source: web research (2026-10-04) against web/public/pages/en-US/hard-coded-biomarker-gates.html
---

# Biomarker Gates — Supply Chain and Procurement Audit

## The problem this document addresses

`hard-coded-biomarker-gates.html` compiles seventeen discrete individual values, grades them
A–D, and recommends a **three-assay minimum panel** — [[COMT]] rs4680, urolithin metabotype,
[[CYP3A5]] status. That page argues the gates are unmeasured. It does not ask the prior question:
**can they be measured, by a laboratory that reports a result a clinician can act on, at a price
someone will pay?**

This audit answers that for every gate on the page. The short version:

> [!important] Every gate on the page is technically measurable today. Almost none of them is
> procurable as a clinical test with a validated report — and the ones that *are* procurable are
> the pharmacokinetic drug-metabolism gates the page lists as "recommended but not implemented",
> not the mechanistically interesting ones the panel is built from.

The asymmetry is the finding. Sequencing is a commodity. Interpretation, phenotype assignment,
and guideline plumbing are the scarce supply, and none of the page's Grade A mechanistic gates
have any.

---

## Procurement tiers

Four tiers, in descending order of what you can do with the result.

### Tier 1 — Clinically procurable, guideline-backed, closed loop

| Gate | Product / route | Cost, turnaround | Notes |
| --- | --- | --- | --- |
| **HFE** C282Y / H63D | Reference-lab HFE genotyping (e.g. Mayo HFE analysis), plus ferritin + transferrin saturation | Standard send-out; Medicare-covered | The one fully closed-loop gate on the page. Guidelines carry the page's TSAT >45% + ferritin >300/200 ng/mL phlebotomy thresholds. Cascade testing of first-degree relatives is guideline-recommended. |
| **G6PD deficiency** | STANDARD G6PD (SD Biosensor) — WHO-prequalified 18 Dec 2024, first G6PD test to be prequalified; AccessBio G6PD Biosensor; spectrophotometry as reference | Quantitative point-of-care, result in ~2 min from 10 µL capillary or venous blood | [[Methylene blue]] contraindication gate. Cheapest and fastest item on the page. |
| **Whole-blood sirolimus trough** | CLIA LC-MS/MS at reference labs (Mayo, Cincinnati Children's, academic TDM cores); immunoassay alternatives from Thermo | Same-day to next-day; therapeutic range 5–15 ng/mL | The page's own Figure 7 band (9–15 ng/mL) sits inside the laboratory range. Robust, cheap, universally available. |
| **MC1R** variant class | Full-gene NGS via hereditary skin-cancer / melanoma-pancreatic panels (Invitae 01561, 01713; Labcorp 899169) | 10–21 calendar days (14 d average) | R-class classification for melanoma risk is exactly what the panel returns. Skin phenotype is a free but inadequate proxy for the R/r distinction. |
| **CYP3A5** (*1 expressor / non-expressor) | Within a CPIC Tier 1 PGx panel; CPT **81231** | 10–14 days; ~**$174.81** average Medicare reimbursement for CYP3A4+CYP3A5 genotyping after the Dec 2020 CMS coverage expansion | Best-documented reimbursement on the page: a 560-patient kidney transplant program reported **>99.5% of claims reimbursed**. See the gap section — the allele coverage and the drug label are both problems. |

### Tier 2 — Commercially available but restricted

| Gate | Route | Restriction |
| --- | --- | --- |
| **APOE** ε2/ε3/ε4 | FDA-cleared 23andMe APOE ε4 report (rs429353); HCPCS **S3852** | Payers advise *against* DTC APOE (BCBS MA: "DTC APOE testing is not advised"); ACP/ACMG consensus discourages predictive testing in asymptomatic people. The guideline-supported indication is lecanemab ARIA risk discussion — not the page's cGAS or ketogenic uses. Apolipoprotein E genotype for AD risk is available and largely unusable for this page's purposes. |
| **Karyotype / 45,X / 47,XXY** | Clinical cytogenetics / karyotype | Available, but ordered for prenatal and paediatric indications. Adult 45,X identification is incidental in almost all cases; there is no screening pathway and reproductive stage is not a laboratory test at all. |

### Tier 3 — Reachable only as research send-out or raw data

| Gate | Route | What is actually purchasable |
| --- | --- | --- |
| **Urolithin metabotype** (UM-A/B/0) | LC-MS/MS service (e.g. Creative Proteomics): free UA + total UA standard panel, UB / UC / iso-UA as add-ons, UA-d₃ internal standard, LOD 0.05 ng/mL, LOQ 0.1 ng/mL, ICH M10-validated, urine / plasma / serum / faeces / tissue | The **analyte** is procurable on a project-priced quote. The **UM-A/B/0 classification** is not a standardized clinical product, has no reference standard, and has no cut-off consensus — see the corrections section. |
| **TMAO producer status** | [[Trimethylamine N-oxide]] LC-MS/MS; Quest lists a TMAO test (TS_TMAO) | A concentration is procurable. Producer-status phenotyping after a standardised choline/carnitine challenge is not a clinical product, and no universally standardised reference range exists. |
| **Soluble Klotho** | Research-use-only sandwich ELISA (IBL 27998, explicitly "for research purpose only, do not use for clinical diagnosis"); IP–IB in-house assay is the reference method; consumer "assay" kits sold as RUO | No reference ranges, no clinical-grade assay, CSF-compartment in the cited literature. Treat as a research readout. |
| **All remaining germline SNPs** (COMT rs4680, NQO1 rs1800566, CYP1A2 rs762551, ADORA2A rs5751876, ALDH2 rs671, SOD2 rs4880, TERT rs2853669, KL-VS rs9536314/rs9527025, SIRT3/SIRT6 rs11555236/rs4980329/rs117385980/rs9997679, PON1 rs662/rs854560) | Consumer whole-genome sequencing: Nebula 30x **$249** (+$295/3-year membership), 100x $899, 12–14 wk; Sequencing.com 30x from **$399**, health screens $399–529, 2–8 wk (ultra-rapid 2–3 wk), genetic counselling +$179 | All page SNPs are present in a consumer VCF. **None of them is reported as a phenotype by any cleared or commissioned test.** The result is a raw data row requiring interpretation the vendor does not supply and the payer will not cover. |
| **mtDNA haplogroup** | 23andMe / Nebula mtDNA haplogroup reports | Freely available. Correctly excluded from dosing by the page. |

### Tier 4 — No supply

| Gate / readout | Status |
| --- | --- |
| **PON1** paraoxonase / diazoxonase activity | Research-only. No routine clinical assay. This is the measurement the page itself calls "the informative one" (after Jarvik 2000). |
| **NQO1** activity in saliva / biopsy | Research-only (Siegel 1999 and successors). |
| **MnSOD activity** (SOD2 rs4880) | Research-only. The page's Grade C "never the SNP alone" instruction cannot be followed in a clinical lab. |
| **p70S6K1 Thr389** phosphorylation | No commercial assay. Research ELISA/Western only. This is the page's required pharmacodynamic readout for rapamycin non-response vs under-exposure. |
| **FKBP1A** loss-of-function sequencing | No clinical order; not a PGx gene. Only via exome/genome or research. |
| **X-chromosome inactivation skewing**, **KEAP1/NRF2 haplotypes as dosing variables** | Grade D research priorities. No supply, correctly. |

### Reference layer — the drug-metabolism gates the page defers

The page's `anatNote` records CYP2C9/VKORC1, CYP2D6 and SLCO1B1 as "recommended but not
implemented here — CPIC-level determinants for agents already in use." These are, in procurement
terms, **the best-supplied gates on the entire page**:

- CPIC and DPWG prescribing guidelines exist; FDA lists ~300 medications with PGx-driven dosing
  guidance or warnings.
- AMP Tier 1 / Tier 2 panel design, so they ride along in every clinical PGx panel at marginal cost.
- Billing and coding guidance exists (MolDX A57384); Medicare PGx coverage since Dec 2020 for CPIC
  drugs.
- 23andMe's FDA-cleared DTC PGx report covers exactly this set — 8 genes, 33 variants
  (CYP2C19, CYP2C9, CYP3A5, UGT1A1, DPYD, TPMT, SLCO1B1, CYP2D6).

> [!warning] Structural inversion
> The gates with complete commercial and guideline infrastructure are pharmacokinetic and
> pharmacodynamic — the category the page grades B and describes as "currently misreported as
> pharmacological non-response." The gates the page grades A on mechanism are the ones with no
> supply chain whatsoever. A reader who follows the page's minimum panel will order raw data from
> a consumer WGS vendor for the A-grade gates and can obtain a fully reimbursed clinical test for
> the B-grade ones.

---

## Structural gaps

### The recommended minimum panel cannot be procured as written

| Panel member | Procurement status |
| --- | --- |
| COMT rs4680 | Not on any cleared or commissioned panel. Raw data only, or a research add-on. |
| Urolithin metabotype | Analyte procurable on quote; phenotype classification has no reference standard. |
| CYP3A5 status | Clinical, reimbursed, 10–14 days. The only obtainable member. |
| Whole-blood sirolimus trough | Routinely procurable, same-day. |
| p70S6K1 Thr389 | Not procurable in any commercial form. |

Two of five are obtainable, one is a quote, two are raw data. The page presents this as a
"minimal panel"; it is a research agenda.

### 1. Genotype–phenotype discordance is unprocurable, and the page depends on it

The page's own gold callout: *where genotype predicts function, genotype is sufficient; where it
does not, measure the enzyme.* That instructs the reader toward three enzyme activity assays —
PON1 diazoxonase, NQO1, MnSOD — **none of which any routine clinical lab sells.** The
substitute the page recommends is unavailable, which silently converts a Grade C "weak prior plus
activity assay" into a Grade C "weak prior."

### 2. No guideline exists for the page's flagship CYP3A5 use

CPIC's CYP3A5 guideline covers **tacrolimus**, and explicitly states it "is not intended to
recommend for or against CYP3A5 genotype testing in transplants" — the evidence is
pharmacokinetic, with no demonstrated outcome benefit. There is **no CPIC or DPWG guideline for
CYP3A5 → sirolimus/rapamycin.** The entire basis of the page's rapamycin row rests on
extrapolation from a different drug in a different population. The page's grade of B is
generous; the supply chain will not even acknowledge the pair.

### 3. Pharmacodynamic readouts are the missing half

Whole-blood trough is cheap, same-day, universally available. p70S6K1 Thr389 — which the page
requires to distinguish pharmacological non-response from inadequate exposure — has no commercial
assay. So a fully genotyped rapamycin user still cannot execute the page's own decision rule.
The rule is analytically sound and operationally unrunnable.

### 4. Microbiome gates have an assay but not a phenotype

The polyphenol-metabotype literature is explicit that quantitative high/low producer cut-offs
**should not** be used to define a metabotype: the cut-off "is arbitrary" and "depends on many
variables, including gastrointestinal motility, sample collection time, food matrix, the lag
period between the last intake of precursor and sample analysis, and the sensitivity of the
analytical procedure." A high/low/non-producer trichotomy for [[Trimethylamine N-oxide]] inherits
the same defect. What can be reported is a **concentration after a standardised challenge** —
which is a weaker claim than a gate, and the page's `under-exposed` / `blind` classifications
currently assume the stronger one.

### 5. The page's urolithin shares are contradicted by current literature

The page hard-codes UM-A 40% / UM-B 10% / UM-0 50% for all four reference populations and derives
"~60% of ellagitannin users produce no urolithin" from it. The larger cohort data do not support
a fixed 50%:

> [!info] Age-dependent metabotype distribution (Caucasian cohort, n = 839)
> UM-0 was approximately constant at **~10%** across ages 5–90. UM-A declined from **85% to 55%**
> through adulthood while UM-B rose from **15% to 45%**, stabilising at roughly 35–40 years of age.

The ~40%/10%/~10% figures elsewhere come from specific challenge protocols, not from a
population distribution. This is procurement-relevant, not cosmetic: a "60% of users on the wrong
side of the gate" register figure is not robust to method, and a send-out LC-MS/MS lab will
report a number under *its* protocol, not under the page's.

### 6. Commercial CYP3A5 panels break exactly where the page says the gate matters

CPIC warns that most genetic tests examine only CYP3A5*3, while **\*6, \*7 and \*26** may not be
included depending on assay — and these are the reduced-function alleles that matter in
African-ancestry populations. The page assigns CYP3A5 expressors 65% in Black/African-ancestry
individuals, the highest exposure of any gate in its register. A *3-only panel returns the wrong
answer in precisely that group. In a 560-patient transplant program, only ~66% of
self-identified Black patients were expressors — self-reported race was a poor proxy for genotype,
which is the general point and applies to the page's ancestry selector as well.

> [!tip] Procurement specification
> Order CYP3A5 **\*1 / \*3 / \*6 / \*7 / \*26** explicitly, and require star-allele diplotypes plus
> a metaboliser phenotype call as discrete reportable fields. A positive/negative *3 result is
> not an acceptable deliverable.

### 7. Ordering supply is cheap; interpretation supply is the constraint

Every consumer vendor bundles counselling into the price — Jeen Health £210 with a complimentary
30-minute GP appointment, UK analysis on Illumina PGx arrays at Eurofins UK, ~4 week turnaround;
GetTested EU €249.99 at 6–8 weeks; Sequencing.com +$179 for counselling. Payer PGx policies
(Carelon clinical guideline updated 2025-11-15; MolDX A57384 billing and coding) generally
condition coverage on counselling. Meanwhile CPIC requires results be reported as **discrete,
person-level** entries so point-of-care CDS can fire — a consumer PDF does not satisfy this.

Sequencing capacity is not the bottleneck. Accredited genetic-counselling capacity and person-level
EHR reporting with decision support are, and neither is a procurement you can solve by choosing a
vendor.

### 8. Regulatory tier for lifestyle and longevity agents

- FDA has **not** authorised any DTC pharmacogenetics test that predicts response to a specific
  drug; the CYP2C19 clopidogrel/citalopram clearance (2020) remains the exception, not the pattern.
- NHS England commissions CYP2C19 for mavacamten (NICE TA913, SSC2750) and is piloting it for
  stroke/TIA (NICE DG59, Oct 2024–Apr 2025). **CYP3A5 is not available via the National Genomic
  Test Directory.** Scottish arrangements differ.
- **The page's actual agents are almost entirely outside regulated supply.** Rapamycin is
  compounded; α-tocopherol, fisetin, quercetin, urolithin A, methyl donors and methylene blue
  protocols sit in the supplement or compounding tier, where the page's Grade A gene–drug
  relationships have no regulator to file them with.

### 9. Downstream intervention QC is worse than assay QC

Procuring a genotype is the low-risk step.

- **Sirolimus** is compounded under 503A/503B. Documented purity in unregulated product ranges
  from **5% to 75%**; contributing causes include inaccurate API weighing at batch scale, degradation
  in shipping without cold chain, and expired or low-grade API. Defensible practice: a
  **per-lot independent Certificate of Analysis** naming an external laboratory (identity,
  purity, potency, endotoxin, sterility), a GMP-registered API supplier, and PCAB accreditation.
  In-house-only testing is a disqualifying signal. "Research use only" APIs **cannot** be used in
  human compounding. FDA CDER warning letters to compounders rose roughly 50% in FY2025.
- **Urolithin A** is chemically synthesised, largely China-sourced API, sold at ~$59–99/month
  retail. There is **no national standard for urolithin A content** in health products — an
  explicit regulatory gap named in a 2025 UHPLC method-validation paper. One commercial capsule
  assayed at **27.5% UA against a 27.8% label claim**, i.e. the good case; the gap is the absence
  of a standard that would make the bad case detectable.
- A single GMAP benchmark underpins most of the page's claims about UA: 250–2000 mg single
  ascending dose, 250–1000 mg/day multiple dose, 60 healthy elderly subjects, with dose-proportional
  plasma exposure. Off-label consumer use has no relationship to that dosing.

### 10. Supplier consolidation is a live risk on the stored asset

Consumer genotyping is not a durable procurement. 23andMe filed for Chapter 11 in 2025 and its
assets changed hands; Labcorp acquired Invitae. A 2025 consumer PGx review notes the vendor field
is dense and consolidating. The hard-coded gate concept depends on a **lifetime-valid** result —
"Jeen Health" markets its report on exactly that premise — so the durability of the data store is
part of the procurement, and it is the one thing no vendor contract guarantees.

---

## A defensible procurement order

Sequenced by what closes a loop, not by what is mechanistically interesting.

**Now — clinically procurable, guideline-backed**

1. **G6PD** point-of-care before any [[Methylene blue]] protocol. Two minutes, WHO-prequalified,
   and it is a documented contraindication rather than a dose question.
2. **HFE** genotyping + ferritin + transferrin saturation in anyone with iron-overload or
   ferroptosis-adjacent protocol. Fully guideline-anchored; the phlebotomy thresholds on the page
   are the guideline's own.
3. **Whole-blood sirolimus trough**, LC-MS/MS, any reference lab, before any rapamycin trial or
   dose escalation. Same-day. This is what turns a "non-responder" label into a measurement.
4. **CYP3A5 \*1/\*3/\*6/\*7/\*26** within a CPIC Tier 1 PGx panel, if and only if a CYP3A5-indicated
   drug is in play — accepting that for sirolimus specifically there is no guideline.

**Reasonable, with stated caveats**

5. **APOE** genotyping where an AD-directed therapy (lecanemab, donanemab) is genuinely in scope —
   the one indication where the payer pathway exists. Not for the page's cGAS or ketogenic rows.
6. **MC1R** full-gene sequencing if melanoma risk is the clinical question.

**Research send-out budget line**

7. **Urolithin A LC-MS/MS after a standardised pomegranate challenge**, reported as
   **analyte concentration with the protocol stated**, not as a UM-A/B/0 call. Insist on the
   analyte-level output, because the phenotype classification is the part that is not
   standardized.

**Do not promise**

8. p70S6K1 Thr389, PON1 / NQO1 / MnSOD activity, FKBP1A, TERT rs2853669, KL-VS, SIRT3/SIRT6,
   SOD2 rs4880, ALDH2 rs671, CYP1A2 rs762551. These are research or consumer-WGS-raw-data only.
   For these the page's Grade B–D entries stand, and the absence of measurement is correctly
   recorded as the finding.

---

## Corrections this audit forces on the page

| Page statement | Correction |
| --- | --- |
| UM-A 40 / UM-B 10 / UM-0 50, identical across populations | Age-dependent: UM-0 ~10% constant, UM-A 85→55%, UM-B 15→45% stabilising at 35–40 y (n = 839). The 40/10/50 split is protocol-specific. |
| "Only direct urolithin A administration is applicable" to metabotype 0 | Keep the claim; drop the implied precision. The correct deliverable is a challenge-test UA concentration. |
| CYP3A5 as a Grade B rapamycin gate | No CPIC or DPWG guideline exists for the pair. Grade B overstates the guideline position; the supply chain does not recognise it at all. |
| "SNP **plus** measured MnSOD activity (never the SNP alone)" | The activity assay does not exist in routine supply. Either drop the instruction or label it research-only. |
| "SNP **plus** diazoxonase activity assay" (PON1) | Same. The page's own preferred measurement is unavailable. |
| p70S6K1 Thr389 as required PD readout | Not commercially procurable. Restate as a research readout so the panel is executable. |
| CYP3A5 ancestry column (65% expressor, Black/African-ancestry) | Requires \*6/\*7/\*26 coverage to be true. Most commercial panels test \*3 only. Add this to the assay string on the gate card. |
| "CYP2C9/VKORC1, CYP2D6 and SLCO1B1 … recommended but not implemented here" | These are the **best-supplied** gates on the page — guideline, panel, billing code, payer coverage. The `anatNote` currently reads as a shortfall; it is the opposite. |
| sirolimus trough band 9–15 ng/mL (Figure 7) | Consistent with the 5–15 ng/mL laboratory therapeutic range. No change needed; worth stating explicitly, since it makes the PD loop closeable. |

---

## Entities surfaced for creation (Step 3)

Present as prose or bare data here; not created by this task. Checked against
`src/notes/**` — no same-named file exists.

- **CYP3A5** (gene, PGx; CPIC guideline, star-allele nomenclature)
- **Pharmacogenomics testing** (clinical panel tiering, CPIC / DPWG / PharmGKB / GTR)
- **Therapeutic drug monitoring** (sirolimus LC-MS/MS trough)
- **Therapeutic drug monitoring, pharmacogenomic** — may fold into the above
- **SOD2** (rs4880, MnSOD import trafficking)
- **ALDH2** (rs671, \*2)
- **CYP1A2** (rs762551, caffeine)
- **TERT promoter** (rs2853669, somatic TERTp)
- **KL-VS** (KLOTHO rs9536314 / rs9527025)
- **Urolithin A commercialization** (content standard gap, Mitopure/Timeline, GMAP benchmark)
- **Compounded sirolimus QC** (503A/503B, per-lot COA, PCAB)

---

## Sources

Primary regulatory and guideline documents:

- CPIC guideline for CYP3A5 genotype and tacrolimus dosing — Birdwell KA, Decker B, Barbarino JM,
  et al. *Clin Pharmacol Ther* 2015;98(1):19–24. doi:10.1002/cpt.113 — including the explicit
  limitation on commercial allele coverage (\*6, \*7, \*26) and the "not intended to recommend for
  or against" statement.
- Implementation of CYP3A4/3A5 genotyping in a large kidney transplant program — 560 patients,
  >99.5% payer reimbursement, CPT 81231, ~$174.81 average Medicare rate, race-as-proxy failure
  (~66% of self-identified Black patients expressors).
- NHS England Genomic Medicine Service, National Genomic Test Directory; East Genomics CYP2C19
  implementation guidance (Dec 2025) — CYP2C19 commissioned for mavacamten only; **CYP3A5 not on
  the directory**.
- WHO prequalification of the STANDARD G6PD diagnostic, 18 December 2024.
- FDA, Direct-to-Consumer Tests — no authorised DTC PGx test predicting response to a specific drug.
- CMS MolDX pharmacogenomics testing article A57384 / LCD L39073; Carelon Pharmacogenetic Testing
  clinical guideline (archived 2025-11-15, updated 2026-01-01).

Assay and supply:

- Urolithin A LC-MS/MS service specifications — UA-d₃ internal standard, LOD 0.05 ng/mL,
  ICH M10 validation, multi-matrix.
- Urolithin metabotype age-dependence and methobype-definition limits — *Urolithins: a
  Comprehensive Update* (PMC9787965); *Open Medicinal Chemistry Journal* 2025.
- Quest Diagnostics test directory, TMAO (TS_TMAO); no universally standardised TMAO reference
  range; lack of standardized diagnostic assays limiting clinical applicability (BMC Nephrology,
  2025).
- Soluble Klotho assay performance — Neyra JA et al. *Clin Kidney J* 2020;13(2):235 (IP–IB vs
  commercial ELISA); IBL 27998 RUO labelling.
- UHPLC determination of urolithin A in health products, PMC11901897 (2025) — absence of national
  standards; 27.5% measured vs 27.8% label.
- Regulatory status of peptide compounding (2025) — per-lot independent COA, GMP API grade,
  503A/503B, RUO prohibition; documented purity 5–75% in unregulated product; CDER warning
  letters up ~50% FY2025.
- Consumer PGx and WGS supply — Jeen Health £210 / 4 wk / Eurofins UK Illumina PGx arrays;
  GetTested €249.99 / 6–8 wk; Nebula 30x $249 + $295 membership, 100x $899; Sequencing.com 30x
  from $399, 2–8 wk, counselling +$179.
- Clinical panel supply — Fulgent PGx Focus (AMP Tier 1, 10–14 d); Invitae hereditary skin cancer
  01561 and melanoma-pancreatic 01713; Labcorp/Invitae 899169 (MC1R).
- 23andMe PGS Pharmacogenetic Reports (DEN180028) — 8 genes, 33 variants; APOE ε4 genetic health
  risk report (rs429353).
- Consumer PGx review, PMC13003769 (2025); El Rouby N, Johnson JA. *NEJM Evidence* 2025;
  4(10):EVIDra2400343.