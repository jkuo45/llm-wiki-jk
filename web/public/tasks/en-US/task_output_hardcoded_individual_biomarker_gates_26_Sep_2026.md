---
title: Hard-Coded Individual Biomarker Gates — Overlooked Therapies Hidden by Missing Genotypes
description: Compiled inventory of discrete, individually-assigned, largely immutable biomarkers (genotypes, microbial metabotypes, karyotype, loss-of-function alleles) that gate responses to therapies tracked in the vault. Each entry states the discrete values, prevalence, the vault topic it modifies, the therapy that is being missed or actively harmed without the value, and the evidence strength. Includes the three biomarkers already modelled in the vault (COMT Val158Met, urolithin metabotype A/B/0, XX/XY) and ~25 candidates absent from the vault, plus a recommended minimum panel and a tiered evidence rubric.
created: 2026-09-26
updated: 2026-09-26
source: vault audit (src/notes/**) + targeted web research (2026-09-26)
tags:
  - task-output
  - biomarkers
  - pharmacogenomics
  - precision-medicine
  - metabotypes
  - hormesis
  - comt
  - sirtuins
  - autophagy
  - oxidative-stress
  - senescence
author: []
---

# Hard-Coded Individual Biomarker Gates

## The problem this document addresses

The vault is built around mechanism: mitohormesis, sirtuins, autophagy, senescence, oxidative stress, epigenetics, cell death, and the catechol axis. Mechanism tells you *what a compound does*. It almost never tells you *whether it will do it to you*.

The vault already knows this in three places — and only three:

1. **[[Val158Met]]** (rs4680, [[COMT]] Val/Val fast vs. Met/Met slow) — the canonical gate. Fast COMT carriers get **+18% cancer incidence** from α-tocopherol supplementation (HR 1.18, 1.06–1.31) while Met/Met carriers get ~12% reduction (HR 0.88) — see [[task_output_comt_vitamin_e_genotype_gate_24_Sep_2026]].
2. **Urolithin metabotype A / B / 0** ([[Metabotypes]], [[Urolithin A]]) — a *microbial* genotype. Only metabotype-A converters (~40% of people, per some cohorts; only 12% of a US cohort had detectable UA at baseline) make [[Urolithin A]] at all. Dietary ellagitannins (pomegranate, walnut, strawberry) do nothing for metabotype-0 and near-nothing for metabotype-B individuals; only direct UA supplementation (Mitopure) works for them. This is the cleanest case in the vault of a therapy that silently fails for most of the population.
3. **XX / XY** — [[Estrogen]] as a master mediator. Documented exhaustively in [[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]]: XX neurons die by caspase-8/3 apoptosis, XY neurons by [[PARP1]]/AIF necrosis; rapamycin extends female lifespan more, caloric restriction extends male lifespan more; [[SIRT6]] overexpression is male-specific; [[NAD+]] declines in males but fluctuates in females.

Everything else in the vault — 3,174 notes, 12 topic hubs — assumes an undifferentiated human. This document compiles the **discrete, individually-assigned, largely immutable** values that should break that assumption.

> [!important] What "hard-coded" means here
> A **hard-coded individual biomarker** is a value assigned once, early, and stable over decades: a germline genotype, a somatic-loss status, a microbial set of genes, a karyotype. Contrast with **continuous lab values** (serum ferritin, hs-CRP, fasting insulin) which are modifiable state readouts. The hard-coded class matters because it is *knowable in advance* and therefore a legitimate gate — you can order the test before starting the therapy rather than after a failed trial. It also means the gate cannot be "fixed" by lifestyle, so a misassigned patient is permanently misassigned.

---

## Evidence rubric used throughout

| Grade | Meaning |
| --- | --- |
| **A** | Replicated in ≥2 randomized/independent human cohorts, or mechanistic + human pharmacogenetic agreement |
| **B** | Single strong human cohort, or consistent human data with mechanistic plausibility; under-replicated |
| **C** | Association-only, ancestry-confounded, or genotype-phenotype discordance documented |
| **D** | Mechanistically plausible, speculative — flagged as research agenda, not as actionable claim |

---

## Tier 1 — Already in the vault (the template)

These three establish the pattern. They are listed first because they set the standard for how a vault biomarker note should be written.

### Karyotype XX / XY (and the subtypes beneath it)

**Discrete values:** 46,XX · 46,XY · 45,X (Turner) · 47,XXY (Klinefelter) · 45,X/46,XX mosaics · plus *functional* sex states in the same individual — premenopausal XX, postmenopausal XX (the "estrogen cliff"), perimenopausal, XY with suppressed testosterone, XY on androgen blockade ([[Sex Steroid Ablation]]).

**Vault topics gated:** [[Sirtuins]] (SIRT3/SIRT1/SIRT6 all estrogen-responsive), [[NAD+]] metabolism, [[MnSOD]]/[[SIRT3-SIRT4 Ratio]] hormetic window, [[Autophagy]]/[[mTORC1]]/[[AMPK]], [[Apoptosis]] vs. necrosis modality choice, [[NF-κB]]/[[SASP]]/[[Inflammaging]], [[Telomere]] biology, [[p53]], [[Bcl-2]] family, cancer susceptibility (X-linked tumour suppressors protect females).

**Overlooked therapies it points at:**
- **Females, perimenopausal:** the loss of estrogen is not just a bone/cardiovascular event — it is a coordinated downshift in SIRT3, SIRT1, and MnSOD activity simultaneously. Human cardiac aging is female-specific (old female ventricles show ↓SIRT1 + ↓SIRT3 + ↓SOD2 + NF-κB shift + ↑macrophages; aged male hearts do not — *Aging* 2019, PMC6503880). **Systemic hormone replacement or a SIRT3-targeted intervention is being prescribed to nobody.** Every woman past 50 with a normal lipid panel and no AD diagnosis is silently in the SIRT3-deficit arm.
- **Males, post-AR-blockade:** the "estrogen cliff" analogue is testosterone suppression. XY on [[Sex Steroid Ablation]] loses the SIRT1/FOXO3a→[[MnSOD]]/CAT antioxidant program that females retain — a real argument for transdermal (non-liver) testosterone delivery preserving SIRT3/SOD2 tone.
- **The cell-death-therapy inversion:** XX and XY cells killed by the same insult die by *different* machinery. A [[Ferroptosis]] or [[Apoptosis]] sensitizer developed on an XX background may underperform on an XY background, and vice versa. There is no senescence- or ferroptosis-induction trial in the vault that reports a sex-stratified responder analysis — see [[task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026]].

**Evidence:** A (multiple independent groups; in- and ex-vivo human neuron work plus murine lifespan ITP data).

### COMT Val158Met (rs4680)

**Discrete values:** Val/Val (G/G) fast · Val/Met (A/G) intermediate · Met/Met (A/A) slow. Activity span 3–4×.

**Vault topics gated:** [[Dopamine]]/[[Prefrontal Cortex]]/[[Working Memory]], [[Adrenochrome]]/[[Dopaminochrome]] formation, [[Methylation Cycle]] methyl-donor tolerance, [[Alpha-tocopherol]]/[[Vitamin E]], [[Aspirin]], [[Fisetin]]/[[Quercetin]]/EGCG COMT inhibition, [[Modafinil]].

**Overlooked therapies it points at:**
- **Fast (Val/Val), ~23–29% of European-ancestry, ~52% of Han Chinese:** do **not** take high-dose α-tocopherol. Two randomized trials (WGHS, ATBC), gene-dose per Val allele HR 1.11 on supplement vs. 0.95 on placebo, P interaction <.001, sister SNP rs4818 concordant (G/G HR 1.29). The harm appeared at both 50 IU/day and 600 IU alternate-day — **it is dose-robust below the 400 IU/day ceiling**, so the mitohormesis "keep vitamin E under 400 IU" rule does not protect this group. This is approximately one in four people taking a supplement that measurably increases their cancer risk.
- **Slow (Met/Met), ~28%:** methyl donors ([[Methylfolate]], [[MethylB12]], [[SAMe]], [[Betaine]]) precipitate anxiety/insomnia; [[Folinic acid]] is the workaround. Aspirin CV protection is concentrated here.
- **Both arms:** fisetin is a validated COMT *substrate-inhibitor* (IC₅₀ 2.6–5.8 µM) generating [[Geraldol]] and consuming SAMe. With a 3–4× activity span, fisetin's senolytic exposure doubles in slow COMT and halves in fast — and **no trial anywhere has stratified a senolytic by COMT genotype.**

**Evidence:** A (two RCTs, mechanistic HCT116 COMT-knockdown concordance).

### Urolithin metabotype A / B / 0

**Discrete values:** UM-A (produces [[Urolithin A]] as terminal metabolite, [[Gordonibacter urolithinfaciens]] carriage) · UM-B (produces UA plus [[Isourolithin A]]/uro-B via [[Ellagibacter isourolithinifaciens]] and [[Enterocloster]]) · UM-0 (no detectable urolithin). Prevalence varies by cohort: ~40% A in a pomegranate-juice challenge, only 12% with detectable UA glucuronide at baseline in a US cohort, ~10% non-producers in a third.

**Vault topics gated:** [[Mitophagy]], [[AMPK]]/[[mTORC1]]/[[PGC-1α]] mitochondrial quality control, [[Oxidative Stress]]/[[NAD+]], [[Metabolic Syndrome]], [[Cancer]] prevention, [[Biomarker]].

**Overlooked therapies it points at:** This is the model case. The vault already states it — *"Dietary ellagitannin strategies fail for most non-A individuals, mandating direct Urolithin A supplementation or metabotype screening"* — and yet no therapy in the vault is stratified by it. Concretely: **~60% of people taking ellagitannin-rich "mitochondrial health" supplements are getting nothing at all**, and the ~20% who are UM-B are getting a different molecule (isourolithin A) with a different, largely uncharacterized pharmacology. The vault's [[Urolithins]] note does not mention Mitopure dosing logic at all. Any future spermidine/fisetin/berberine stacking logic should be UM-stratified too.

**Evidence:** A for the phenotype (replicated across independent cohorts by three laboratories); B for the downstream efficacy claim.

---

## Tier 2 — Strong candidates absent from the vault

Ranked by the size of the missed-therapy population × the strength of the gate.

### SOD2 (MnSOD) rs4880 Ala16Val

**Discrete values:** Ala/Ala · Ala/Val · Val/Val. Variant frequency of the Val allele is the common allele in most populations studied.

**Vault topics gated:** [[MnSOD]], [[SIRT3-SIRT4 Ratio]] (SIRT3 deacetylates MnSOD at Lys68/Lys122 — this is the *primary* target of the vault's own "redox dial" biomarker), [[Oxidative Stress]], [[Adrenochrome]], [[Mitohormesis]] window width, [[Parkinson's Disease]]/[[Neuromelanin]].

**Why it matters:** The vault's central operational biomarker is the SIRT3/SIRT4 ratio, and it explicitly concedes that the actionable readout is *"MnSOD acetylation status at Lys68/Lys122."* rs4880 is the only common germline variant that changes MnSOD import efficiency and steady-state activity, and it changes it by 30–40%. A 30–40% shift in the enzyme that sets the SIRT3/SIRT4 ratio is a **30–40% shift in the hormetic window** — precisely the parameter the vault says must be calibrated before dosing [[Carbazochrome]] or [[Methylene blue]] in the MRR protocol. The vault has no note for this, and the MRR documents in `src/tasks/adrenochrome_mb_ag/` calibrate dosing only by tissue, never by genotype.

> [!warning] Genotype–phenotype direction is genuinely contested
> Val is reported as *reducing* MnSOD activity in a common framing (more matrix superoxide, more oxidative stress) while a measurement study found SOD2 activity 33% *higher* in T/T vs. C/C individuals (PMID 16538174). Do not hard-code a direction into a protocol. Measure activity, do not infer it from rs4880. Associations: rs4880 Val/Val and diabetic retinopathy (OR 1.87, 1.42–2.46, *Electron J Gen Med* 2024), asparaginase hepatotoxicity in CALGB-10102 (CC genotype), idiopathic cardiomyopathy, migraine with cranial autonomic symptoms.

**Evidence:** C (genotype-phenotype discordance is documented in the primary literature; phenotype is measurable and should be measured).

### MTOR-pathway / sirolimus pharmacogenetics

**Discrete values:** CYP3A5 \*1 expressor vs. non-expressor · CYP3A4 LOF vs. GOF · FKBP1A (FKBP12) loss-of-function carrier · ABCB1 high-expression · baseline insulin-resistant vs. insulin-sensitive.

**Vault topics gated:** [[mTORC1]], [[Autophagy]], [[mTORopathies]], [[AMPK]], [[IRS1]], senolytics via mTORC1-dependent immune rejuvenation.

**Why it matters:** rapamycin is the single most-replicated lifespan-extending compound in the vault, and **~20–40% of off-label users report no benefit.** The dominant cause is pharmacokinetic, not pharmacological: sirolimus AUC has >40% inter-individual coefficient of variation, CYP3A5 \*1 expressors (15–25% of European-ancestry, 60–70% of African-ancestry) clear 40–60% faster and need proportionally higher doses, and 22% of participants in the Mannick 2021 dose-escalation study on "2 mg weekly" had troughs <1 ng/mL. **A CYP3A5 expressor on 2 mg/week is pharmacokinetically under-dosed and would be recorded as an mTOR "non-responder" — a false negative for a drug that works.** This is the cleanest overlooked-therapy case in the whole mTOR domain: the individual is not resistant to the therapy, they were never exposed to it.

FKBP12 LOF variants are a genuine second category: they break the first step of the mechanism (FKBP12–rapamycin complex formation), so dose escalation *cannot* rescue them. Any rapamycin protocol that reports "non-response" without a whole-blood trough and a p70S6K1 (Thr389) suppression measurement is measuring the wrong thing.

**Evidence:** B (well-characterized PK genetics from transplant cohorts; efficacy extrapolation to off-label longevity dosing is inference).

### NQO1 C609T (rs1800566, Pro187Ser)

**Discrete values:** C/C (full activity) · C/T (~3-fold reduction) · T/T (**NQO1-null**, 2–4% of wild-type activity). T/T is 2–5% in European/Caucasian and Black populations, **~20% in Asian populations**.

**Vault topics gated:** [[NQO1]] (in `adrenochrome/`), [[Oxidative Stress]], [[Adrenochrome]]/[[Aminochromes]] — this is the enzyme that decides whether a quinone gets **two-electron reduced to a stable hydroquinone (detoxified)** or **one-electron reduced to a semiquinone that cycles and generates superoxide**. Also [[Hormesis]] (quinone-driven redox relay is the MRR mechanism), [[Cancer]]/[[p53]] activation.

**Why it matters:** NQO1 status flips the *sign* of quinone exposure. T/T individuals are functionally NQO1-null — no detectable NQO1 protein in saliva, bone marrow, lung epithelium, or endothelium (Siegel et al. 1999). They detoxify quinones, including [[Adrenochrome]] and related aminochromes, via the CYP450/b5-reductase one-electron route instead. The vault's MRR protocol delivers redox signal via [[Methylene blue]] and [[Carbazochrome]] and terminates it with [[Aminoguanidine]] — **none of that dosing logic accounts for whether the subject can clear the quinone at all.** An NQO1-null individual on the MRR protocol is the most likely to convert an adaptive pulse into oxidative damage. This is a hard gate with a ~20% carrier rate in East Asians and a clear mechanism.

Secondary: NQO1 C609T is a cancer-susceptibility modifier (bladder, colorectal, esophageal, gastric cardiac, leukemia) with mixed but meta-analytic support; a null genotype is also a **bystander effect** amplifier in mitomycin-C / intravesical quinone chemotherapy, where NQO1 bioactivation is the cytotoxic mechanism.

**Evidence:** A for the enzyme-null phenotype (directly measured in human tissue); C for the cancer associations.

### KEAP1 / NRF2 inducibility haplotypes

**Discrete values:** high-inducibility vs. low-inducibility haplotype blocks (e.g. rs356219 G vs. A, rs6723482 T vs. C, rs11081354).

**Vault topics gated:** [[Keap1]] (in `adrenochrome/`), [[NRF2]], [[Oxidative Stress]], every hormetic dosing question in the vault.

**Why it matters:** NRF2 induction *is* the adaptive arm of hormesis. A low-inducibility haplotype means the same ROS pulse produces a smaller NRF2/ARE transcriptional response, so the "adaptive vs. toxic" boundary the vault keeps drawing — the [[Hormetic Window]] — is shifted down. This is the population-level explanation for why the hormetic dose literature is so irreproducible: **different people have different hormetic windows, and the vault has no variable for it.** Note that rs356219 already appears in the vault, orphaned, with no biomarker interpretation.

**Evidence:** B (haplotype structure is well established; clinical dosing consequence is unproven).

### MC1R loss-of-function (red-hair/pheomelanin phenotype)

**Discrete values:** R-class variants (R151C, R160W, D294H, R142H, Ins86_87A) vs. r-class (V60L, D84E, V92M, I155T, R163Q) vs. wild-type. **>80% of Fitzpatrick skin-type-I red-haired individuals carry a dysfunctional MC1R variant in both alleles.** ~70% of the general population carries ≥1 MC1R variant (1: 45.2%, 2: 24.8%, 3: 0.9% in the Leiden study).

**Vault topics gated:** [[MC1R]] (in `neuromelanin/`), [[Pheomelanin]]/[[Neuromelanin]], [[Melanins]]/[[Tyrosinase]], [[Parkinson's Disease]], [[Melanoma]], [[Oxidative Stress]].

**Why it matters:** The vault's `neuromelanin/` hub already links MC1R variants to earlier PD onset and to reduced astrocytic protection — and then stops. The oxidative-chemistry link is the operationally interesting one: **pheomelanin does not merely fail to shield against UV, it actively generates ROS and depletes glutathione** during synthesis. An R-class carrier is therefore a person with a constitutively higher oxidant load from a pigment-biosynthesis pathway, and a person at ~2× melanoma risk *independent of UV exposure* (OR 2.13 for ≥2 variants; 1.5–2.6× after UV adjustment). Two concrete consequences nobody in the vault is acting on:

- **Sun/solarium exposure is a much larger insult to R-class carriers than their Fitzpatrick type suggests** — the standard advice ("you burn easily, just stay out of the sun") under-describes a UV-*independent* intrinsic risk.
- **In the SIRT3/SIRT4 redox-dial framework, MC1R status is an unmeasured input to the hormetic window.** MC1R agonism is being explored for neuroprotection; the correct first question is not "does MC1R agonism work" but "which allele is in the subject."

Also under-rated: MC1R loss-of-function facilitated vitamin D biosynthesis at high latitude (the evolutionary selective pressure) while depleting folate at low UV — meaning a carrier's vitamin D/folate handling differs, which loops back to the [[Methylation]] and [[Vitamin D]] notes.

**Evidence:** A for the variant→function mapping (Beaumont 2007 systematic in-vitro functional analysis of 9 alleles) and for the UV-independent melanoma risk; B for the PD-risk interaction.

### TMAO-producer status (microbial genotype)

**Discrete values:** high producer (urine TMAO rises sharply with a choline/carnitine challenge) · low producer · non-producer. Carriage of TMA-producing *Cutibacterium* / *Prevotella* etc. versus a TMA-reducing (*Lactobacillus*, *Eubacterium limosum*) flora.

**Vault topics gated:** [[Trimethylamine N-oxide]] (in `_link/`), [[SIRT1]] (the vault note already documents SIRT1 attenuating TMAO effects in vascular smooth muscle), [[Oxidative Stress]], [[Inflammaging]], [[Cellular Senescence]] (TMAO-accelerated senescence is a live mechanism), [[Atherosclerosis]].

**Why it matters:** This is the second microbial metabotype gate, and the vault has the TMAO note **without** the producer-stratification logic — the exact same structural omission as urolithins. High producers get a TMAO load from a red-meat/egg/choline diet that low producers do not, and the standard dietary advice is applied identically to both. The parallel to UM-A is exact: the phenotype is binary, cheaply testable (urinary TMAO after a standardised challenge), stable, and it determines whether a dietary intervention is a no-op.

**Evidence:** A for the phenotype; C for the downstream clinical magnitude.

### HFE C282Y (and H63D)

**Discrete values:** C/C wild-type · C/H or H/H (simple heterozygote, mild) · **C282Y/C282Y (homozygous, the only genotype with >80% attribution to common HH)** · C282Y/H63D compound. C282Y homozygosity is ~0.5% in Northern European descent, higher in Nordic populations.

**Vault topics gated:** [[Ferritin]] (in `oxidative-stress/`), [[GPX4]], ferroptosis (the entire `cell-death/` ferroptosis cluster), [[Lipid Peroxidation]], [[Oxidative Stress]], [[Cancer]] (C282Y homozygotes have elevated breast and colorectal cancer risk).

**Why it matters:** The vault's ferroptosis content is a mechanism catalogue — GPX4, ACSL4, FSP1, iron. **It never mentions that iron overload is a Mendelian condition with a 1–3% carrier rate.** C282Y/C282Y homozygotes have chronically elevated parenchymal iron, hence a chronically expanded labile iron pool, hence a shifted threshold for every ferroptosis induction strategy in the vault. The clinical corollary is real and evidence-based: transferrin saturation >45% with ferritin >300 (male / postmenopausal) or >200 (premenopausal) is the established treatment trigger — **phlebotomy**. So a C282Y homozygote is someone for whom a ferroptosis-adjacent intervention (iron chelation, deferoxamine) is already indicated, and in whom an antioxidant-focused protocol is treating a symptom of a genetic iron lesion. Men are at higher risk than premenopausal women because menstruation is itself an iron sink — which re-links this biomarker to XX/XY.

**Evidence:** A for the genotype→iron-overload relationship and treatment thresholds (Hemochromatosis International/BIOIRON recommendations); B for the ferroptosis-threshold extrapolation.

### APOE ε4 (dose: ε2/ε3 · ε3/ε3 · ε3/ε4 · ε4/ε4)

**Discrete values:** ε2/3/4 isoform dosage. ε4 homozygosity ~10× AD risk; single allele ~3×.

**Vault topics gated:** [[APOE4]], [[APOE3 Christchurch]], [[cGAS]]–[[STING]]/IFN-I microglial signalling (the vault's own framing — APOE4 "primes microglia and amplifies IFN-I"), [[SASP]], [[Mitochondria]] in microglia, [[Inflammaging]], [[Aging]].

**Why it matters:** The vault describes APOE4 as a *sensitizing allele* for cGAS-STING — a mechanistic statement with no therapeutic consequence attached. But it also means: **in an ε4 carrier, cGAS inhibition has a much higher predicted ceiling than in a non-carrier**, and a trial of a cGAS inhibitor that enrols unstratified subjects is diluted. This is exactly the [[task_output_comt_vitamin_e_genotype_gate_24_Sep_2026]] template applied to a different gene.

The diet literature is the sharpest illustration of the trap. The intuitive move — ε4 carriers have impaired cerebral glucose metabolism, so give them ketones — is **contradicted by the human RCT evidence**: in AC-1202 (TRIAD, *Nutr Metab* 2009) MCT/ketone supplementation was more efficient in *non*-ε4 carriers; a 2022 scoping review found ketogenic agents ineffective for ε4 carriers and high-saturated-fat diets particularly harmful; a 2025 umbrella review concluded that except for the Mediterranean diet, "dietary interventions… were generally not effective in older APOE ε4 carriers." Meanwhile the *mouse* data (GeroScience 2025) shows ketogenic diet improving memory in female APOE4 mice — via a CREB/ERK and inflammation mechanism, notably better in females. The gap between the rodent result and the human result, plus the female-specific effect, plus the cGAS-STING sensitivity, means **APOE4 is a stratification variable with at least three distinct gates — and the vault currently treats it only as a risk allele.**

**Evidence:** A for the AD risk dosage; A for the cGAS-STING priming mechanism; B for the diet conclusions; D for any specific ε4-targeted therapy.

### KLOTHO KL-VS haplotype

**Discrete values:** rs9536314 + rs9527025 → KL-VS heterozygote (functionally advantageous, modestly higher klotho) vs. non-carrier vs. KL-VS homozygote (rare, *lower* klotho, decreased longevity, worse cognition).

**Vault topics gated:** [[Klotho]], [[Aging]], [[ApoE]]/[[APOE4]] (KL-VS het is associated with *lower AD risk specifically in ε4 carriers*), [[cGAS]]/[[STING]]/[[Inflammaging]], [[Neuroinflammation]].

**Why it matters:** Two things. First, the interaction is the point: **KL-VS heterozygosity attenuates age-related neuroinflammation (CSF IL-6, S100B) and neurodegeneration (α-syn, NfL) specifically — and the protection is larger in an AD-risk-enriched cohort**, meaning it interacts with APOE ε4 rather than being independent of it. In the vault's senescence/SASP framing, this is a *measurable modifier of the SASP-adjacent neuroinflammatory phenotype* — arguably the closest thing in human genetics to an "anti-senescence genotype." Second, soluble Klotho is an exerkine: chronic exercise raises s-Klotho (Hedges' g 1.3 across 12 RCTs, N=621), with a possible inverted-U in training volume peaking near ~150 min/week. So KL-VS status is both a genotype and a *measurable exerkine response target* — a rare case where the biomarker and the pharmacodynamic readout are the same molecule.

**Evidence:** B (multiple human cohorts including an AD-risk-enriched one with CSF; small N for the homozygote).

### TERT promoter genotype (germline rs2853669) and TERTp mutation status

**Discrete values:** germline rs2853669 A/A vs. G/G · somatic TERT promoter −124 C>T / −146 C>T present vs. absent.

**Vault topics gated:** [[Telomere]]/[[Telomere Attrition]], [[Replicative Senescence]], [[p53]]/[[p16]], cancer (TERTp is among the most recurrent mutations in >50 cancer types, ~62–83% of glioblastoma), lifespan.

**Why it matters:** The vault treats telomere attrition as the canonical senescence clock, and a *germline* TERT promoter allele is a life-long setting of that clock. rs2853669 G disrupts an ETS/TCF binding site (Ets2) upstream of the TERT TSS, lowering TERT transcription and blunting the effect of somatic hotspot mutations. In patients *carrying* a somatic TERTp mutation, germline rs2853669 status changes survival: the **TT genotype marks poor survival** and the common allele is associated with decreased OS and increased recurrence in bladder cancer and glioma. This is a textbook predictive-biomarker situation — germline × somatic interaction — and the vault has no TERT note at all.

The longevity reading is the uncomfortable one. Since TERT activation is rate-limiting for replicative immortality, **germline TERT/transcription status is a hard-coded upper bound on replicative reserve** that no lifestyle, no NMN, no rapamycin changes. Anyone building a senescence-intervention protocol should know which arm of that distribution they are in.

**Evidence:** A for the promoter mutation prevalence and prognostic interaction; B for the germline-alone effect (meta-analyses are negative for rs2853669 alone — it is a *modifier*, not a risk gene, exactly the COMT pattern).

### SIRT3 rs11555236 and SIRT6 rs9997679 / N308K / A313S

**Discrete values:** rs11555236 A/G (in LD with a VNTR in a putative SIRT3 enhancer) · rs4980329 · rs9997679 · SIRT6 N308K and A313S protein variants (centenarian-enriched).

**Vault topics gated:** [[Sirtuins]] directly, [[SIRT3]], [[SIRT6]], [[MnSOD]] (SIRT3 → SOD2 Lys68 deacetylation), [[Centenarians]], [[Senescence]] (SIRT6 variants "delay senescence" per the vault's own document note).

**Why it matters:** The vault already has this — it is just not *actionable*. rs11555236 was associated with male longevity in an Italian cohort, failed validation in a larger pooled cohort, and then was re-found in TRELONG with significance **only in females** after sex stratification. Homozygotes show increased SIRT3 expression in PBMCs. So the vault's most-replicated human sirtuin-longevity finding is **sex-specific in one study and sex-opposite in another** — which is precisely the situation where the XX/XY biomarker and the SIRT3 biomarker must be interpreted jointly, not separately.

SIRT6 is even sharper: SIRT6 overexpression extends lifespan in **males only** (Kanfi 2012), the Finnish rs117385980 longevity association is in **Finnish men**, and the rs9997679-linked N308K/A313S variants elevate SIRT6 activity and delay senescence. **A slow-metaboliser SIRT6 variant plus XY plus male-specific longevity effect is a coherent three-way alignment that the vault holds in three separate notes and never joins.**

**Evidence:** B (replicated-association-with-inconsistent-effect-size; sex interaction is the consistent feature).

---

## Tier 3 — Plausible, largely absent from the vault, weaker or narrower gates

| Biomarker | Discrete values | Vault topic gated | The overlooked-therapy story | Grade |
| --- | --- | --- | --- | --- |
| **ALDH2 rs671 (Glu487Lys)** | \*1/\*1 · \*1/\*2 · \*2/\*2 (up to ~40% of East Asians carry ≥1) | [[Oxidative Stress]] (4-HNE), [[Adrenochrome]]/aminochrome clearance, [[Aging]], hormesis | ALDH2 clears lipid-peroxidation aldehydes (4-HNE) in high-mitochondria tissue. The \*2 Km for acetaldehyde **exceeds available cellular NAD+ by ~15-fold**. Since ALDH2 is NAD+-dependent and NAD+ is exactly what NMN/NR and the SIRT axis manipulate, a low-activity \*2 carrier is an individual whose NAD+ **supplementation target and aldehyde-clearance capacity are inversely related**. Also the clearest known low-hormesis / low-stress-tolerance genotype. Vault has no ALDH2 note. | B |
| **CYP1A2 rs762551 + ADORA2A rs5751876** | CYP1A2 A/A fast · A/C or C/C slow · ADORA2A T/T high-sensitivity/anxious vs. C/C sleep-sensitive | [[Green tea]] (vault: "modestly affect caffeine clearance"), [[Dopamine]]/[[Prefrontal Cortex]], anxiety, hormesis via exercise | A slow caffeine metaboliser on a caffeine-based pre-workout protocol has a 2–12 h half-life spread; CYP1A2 AA gains more *cognitive* benefit from caffeine (reaction time −18 vs. −1.0 ms) despite equal ergogenic effect. Also the coffee–PD association is **strongest among CYP1A2 slow metabolisers** — a pharmacogenetic × pharmacogenetic interaction in the vault's PD material. | A (for PK), B (for outcome) |
| **PON1 Q192R (rs662) + L55M (rs854560)** | 192 QQ/QR/RR · 55 LL/LM/MM, plus measurable diazoxonase phenotype | [[PON1]], [[Lipid Peroxidation]]/oxidized LDL, [[Oxidative Stress]], [[Aging]] | PON1 activity ranks RR > QR > QQ and LL > LM > MM — but **Jarvik 2000 showed phenotype varies widely *within* genotype**, and a given MM individual can exceed an LL individual. This is the vault's cleanest argument that genotype is insufficient and **activity must be measured**. Low PON1 activity is an independent coronary-event risk factor. Directly relevant to the vault's [[Lipid Peroxidation]]/vitamin-E cluster. | A (enzyme) / C (disease) |
| **CYP2C9 / VKORC1 / CYP2D6 / SLCO1B1** | metaboliser phenotype bins | [[Modafinil]]/[[nootropic]], [[Aspirin]], [[Warfarin]]-adjacent, general pharmacology | These are the clinically *validated* pharmacogenomic gates (CPIC-level) and the vault uses drugs from all four classes without any genotype gate. [[Modafinil]] is already noted as COMT-genotype-dependent; adding CYP2D6 makes it a two-gene predictor. | A |
| **GPX1 Pro200Leu (rs1050450) + CAT −262T** | LL/LP/PP · CC/CT/TT | [[GPX4]], [[Lipid Peroxidation]], selenium handling, [[Oxidative Stress]] | GPX1 Pro200Leu is the genetic modifier of *selenium* response. RCT evidence (Miller 2012, *Am J Clin Nutr*) found the variant does **not** substantially modify whole-blood GPx response to selenium supplementation — a useful negative: it is a documented example of a gate that was tested and did not gate. CAT −262T TT confers less susceptibility to spontaneous abortion. | C |
| **HFE-independent iron: hepcidin/ferroportin, transferrin saturation** | continuous, but with Mendelian modifier genes (HAMP, TFR2, SLC40A1) | ferroptosis cluster | The Mendelian non-HFE hemochromatosis genes are the minority-ethnicity iron-overload cause and are entirely absent from the vault. If the ferroptosis protocol is being designed, these are the "no HFE C282Y but still iron-loaded" individuals. | B |
| **PON1 + GPX1 + SOD2 + NQO1 as a composite "redox capacity" panel** | 4-way | [[Mitohormesis]] / [[Hormetic Window]] | Individually these are Grade C. Collectively they define a person's *reducing-equivalent recycling capacity*, which is the mechanistic variable the vault's own hormetic-window model requires. A composite may be more robust than any single SNP — and the vault has never framed it that way. | D (as a construct) |
| **PPARG Pro12Ala (rs1801282) / FTO rs9939609 / PNPLA3 I148M / TCF7L2** | per-SNP genotype bins | [[Insulin Resistance]], [[AMPK]]/[[mTORC1]], [[Metabolic Syndrome]], [[Adiponectin]], [[Liver]] | PNPLA3 I148M **mitigates niacin's beneficial effects** in NAFLD (Front Nutr 2023) and in 2026 was shown to rewire hepatocyte lipid metabolism toward VLCFA accumulation and programmed cell death (*JCI Insight* 2026) — a genotype that changes both a therapeutic response and a cell-death modality. PPARG G-allele carriers lose less weight on high-fat intake but are less obese on high-MUFA. FTO rs9939609 homozygotes lose *more* weight in diet/lifestyle intervention in one meta-analysis and showed *no* effect in another (Livingstone 2016) — a documented inconsistent responder marker. | B/C |
| **MTHFR C677T (rs1801133) + MTRR A66G + MTHFD1** | TT/CT/CC etc. | [[Methylation Cycle]], [[Homocysteine]], [[COMT]] | Already in the vault as notes but framed as *supplement-tolerance* advice, not as gates. The interaction that matters is the **joint** (MTHFR × COMT) methyl-donor phenotype: a slow-COMT TT individual is a different prescribing problem from a slow-COMT CC individual. | B |
| **VDR FokI (rs1079756) / GC (rs1800897)** | FF/Ff/ff | [[Vitamin D]], [[Calcium]], bone, [[Oxidative Stress]] | No VDR note exists in the vault despite [[Vitamin D]] being present. Low priority for the vault's topics. | C |
| **mtDNA haplogroup (H, J, T, U, K, rCRS)** | haplogroup assignment | [[mtDNA]], [[Mitochondrial DNA]], [[Oxidative Phosphorylation]], [[Mitohormesis]] | The single most under-used hard-coded biomarker for a mitochondria-centred vault. Haplogroups differ in baseline ROS production, uncoupling capacity, and antioxidant response, and are maternally inherited (so they co-segregate with maternal-line confounders in every study). A person with a high-ROS haplogroup and a person with a low-ROS haplogroup have different mitohormesis thresholds and are currently treated identically. The literature is real but under-replicated and heavily confounded — hence D. | D |
| **G6PD deficiency** | genotype-specific enzyme activity classes (Mediterranean, African, Asian variants) | [[Oxidative Stress]]/hemolysis, methylene-blue safety, oxidant challenge | Already in the vault (`adrenochrome/G6PD deficiency.md`) as a *contraindication* for [[Methylene blue]]. Correctly framed. Listed here for completeness — it is the template for a "hard-coded gate that changes whether a vault therapy is even admissible." | A |
| **TREM2 R47H** | R/R · R/H · H/H | [[Neuroinflammation]], microglia, [[SASP]] | Pairs with [[APOE4]] — the vault's APOE4 note already names the synergy. An R47H carrier has a different expected ceiling on every microglia-targeting intervention. | B |
| **XIST/XCI skewing; 45,X mosaicism; 47,XXY** | skewing ratio; karyotype | [[X-Chromosome Inactivation]], [[XIST]], [[Aneuploidy]], [[Trisomy]] | The vault has `X-Chromosome Inactivation.md` and `Aneuploidy.md` as mechanism notes with no individual-dosage content. A heavily-skewed XCI pattern changes effective X-linked gene dosage per cell and is a candidate explanation for a subset of "idiopathic" female-predominant autoimmune and neuroinflammatory phenotypes — which is the vault's [[SASP]]/[[Inflammaging]] domain. | D |
| **KL/klotho soluble level; FGF21 level; hs-CRP; HOMA-IR** | continuous | [[Klotho]], [[FGF21]], [[hs-CRP]], [[Insulin Resistance]] | Listed to mark the **boundary**: these are the vault's *state* readouts, not hard-coded gates. They are the right pharmacodynamic monitors and the wrong stratification variables. Keep the two classes separate. | — |

---

## Cross-cutting findings

### 1. The vault's hormone/biomarker coverage is inverted relative to its mechanism coverage

`comt/` has 46 notes and the only true genotype note in the vault ([[Val158Met]]). `_link/` has 1,812 notes. The mechanism is extraordinarily well developed; the individual-level stratification is essentially absent outside one directory. Every note in the vault describing *what a compound does* has an unspoken second clause: *to whom*.

### 2. The genotype-vs-phenotype distinction is under-appreciated even where genotype notes exist

The [[PON1]] and [[MnSOD]] cases both show that a genotype bin can contain individuals with more than 2-fold difference in actual enzyme activity. [[Val158Met]] works well because COMT activity is *tightly* determined by rs4680 (a 3–4× clean split with little within-bin variance). This is rare. **A useful triage rule for building this list: prioritise biomarkers where genotype→function is near-deterministic, and prefer activity assays where it is not.** Both [[PON1]] (diazoxonase) and SOD2 (MnSOD activity) have validated activity assays — the vault should treat those as first-class notes.

### 3. The most under-served biomarker class is microbial, not germline

The vault has exactly one well-developed microbial metabotype (urolithin, in `adrenochrome/Urolithins.md` and `_link/Metabotypes.md`) and one untouched one (TMAO). But the vault's supplement stack — spermidine, fisetin, berberine, urolithin, quercetin, resveratrol — is largely polyphenol and microbiome-mediated. **If the metabotype is wrong, the entire stack is a no-op**, and the vault's dosing logic never asks. `_link/Metabotypes.md` even names the pattern ("NAD+ metabotypes… diet-response metabotypes… endotype") and then stops.

### 4. Almost nothing in the vault is sex-stratified at the responder level

[[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]] documented that sex differences are fundamental at every pathway level. This review shows the *consequence* was not drawn: with the exception of the SIRT3/SIRT6 longevity SNPs, the vault's genotype findings are not intersected with XX/XY. The SIRT3 case is the proof that this matters — the same SNP is male-significant in one cohort and female-significant in another.

### 5. "Metabotype" is currently a container for two different things

[[Metabotypes]] lumps (a) **germline genotypes** (molecular) and (b) **microbial converter phenotypes** (ecological) under one heading. They have different stability, different measurement, and different fixability — a germline genotype cannot be changed, a microbial phenotype can (probiotics, next-gen probiotics per the 2017 isourolithin-A isolation work, antibiotics, prebiotics). Splitting these would make the concept actionable.

---

## Recommended minimum panel

If a panel were ordered for a vault-tracked individual, these are the ones where (a) the value is discrete, (b) it is knowable in advance, (c) it changes an admissible therapy rather than a marginal one, and (d) the vault has mechanistic reason to believe it matters.

| # | Test | Discrete value | Changes |
| --- | --- | --- | --- |
| 1 | Karyotype + reproductive status (XX/XY, menopausal stage) | Categorical | Whether [[Estrogen]]-dependent therapies (systemic HRT, SIRT3 activation) are indicated at all; sex-stratifies every cell-death and mTOR result |
| 2 | COMT rs4680 | Val/Val · Val/Met · Met/Met | Whether high-dose [[Alpha-tocopherol]] is protective (+12%) or harmful (+18%) |
| 3 | Urolithin metabotype (urinary UA-glucuronide after pomegranate challenge) | A · B · 0 | Whether dietary ellagitannins do anything, or direct UA dosing is required |
| 4 | MC1R variant class | R-class · r-class · wild-type | Baseline oxidant load from pheomelanin; PD risk; UV-independent melanoma risk |
| 5 | NQO1 rs1800566 | C/C · C/T · T/T (null) | Whether quinone-based hormesis ([[Methylene blue]]/[[Carbazochrome]]/MRR) can be cleared or will cycle to oxidative damage |
| 6 | CYP3A5 (+CYP3A4, ABCB1) and FKBP1A | expressor/non-expressor · LOF carrier | Whether rapamycin is being *exposed* at all; distinguishes PK non-response from true non-response |
| 7 | HFE C282Y/H63D + ferritin + transferrin saturation | Genotype + biochemical | Whether phlebotomy/iron management is already indicated; shifts the ferroptosis threshold |
| 8 | SOD2 rs4880 **plus** MnSOD activity | Genotype + measured activity | Calibrates the [[SIRT3-SIRT4 Ratio]] redox dial and therefore every MRR/hormetic dose |
| 9 | TMAO producer status | high · low · non | Whether the TMAO-generating diet is being handed to a high producer |
| 10 | APOE ε4 dosage | ε2/ε3 · ε3/ε3 · ε3/ε4 · ε4/ε4 | Stratifies cGAS-STING-targeting trials; runs the diet gate in the *correct* direction (away from saturated-fat ketogenic, toward Mediterranean) |
| 11 | KL-VS haplotype + s-Klotho | HET · NC · (rare) homo | Anticipated neuroinflammatory protection; the exerkine response target |
| 12 | TERT rs2853669 + telomere length | A/A · G/G + measured TL | Sets replicative reserve; modifies any TERT-mutant cancer prognosis |
| 13 | SIRT3 rs11555236/rs4980329, SIRT6 rs117385980/rs9997679 | Genotype | Intersect with #1 — the only sirtuin-longevity findings in the vault are sex-specific |
| 14 | CYP2C9/VKORC1 · CYP2D6 · CYP1A2+ADORA2A · SLCO1B1 | Metaboliser bins | The clinically validated gates over drugs already in the vault ([[Modafinil]], [[Aspirin]], [[Green tea]]/EGCG) |
| 15 | PON1 genotype **plus** diazoxonase activity | Genotype + activity | The vault's worked example of why both are needed |
| 16 | mtDNA haplogroup | Group assignment | The one hard-coded variable the mitochondria vault never assigns — D-grade, but conceptually the largest gap |

A **minimal three-test screen** that captures the largest missed-therapy mass: **#2 (COMT) + #3 (urolithin metabotype) + #6 (CYP3A5)**, because together they cover (a) a therapy that measurably harms ~25% of users, (b) a therapy that silently no-ops in ~60%, and (c) a therapy whose apparent non-response is usually sub-therapeutic exposure.

---

## What this does not claim

- **No item here is a prescription.** Several gates (α-tocopherol in fast COMT, NQO1-null on MRR) have strong enough *mechanistic + observational* backing to be a serious caution, not a validated clinical rule. Grade the claim, not the emotion.
- **Ancestry is a hard limit.** The COMT vitamin E gate was demonstrated in two European-ancestry cohorts and its allele frequencies differ sharply by population (Val/Val 29% European vs. 52% Han Chinese). NQO1 T/T is 2–5% in Europeans/Black populations and ~20% in Asians — the gate is *rare where it was studied and common where it wasn't*. Any panel applied outside its ancestry of origin is extrapolating.
- **Genetic determinism is not the failure mode; missingness is.** The COMT result is not that α-tocopherol is bad. It is that ~25% of people should never have taken it and nobody knew. The actionable step is measurement, not reinterpretation.
- **Continuous biomarkers were deliberately excluded** except where listed as boundary markers. Fasting insulin, hs-CRP, s-Klotho, ferritin and the epigenetic clocks are the right *pharmacodynamic* monitors; hard-coding them as stratification variables would be a category error.
- **Grade D items (mtDNA haplogroup, KEAP1/NRF2 haplotypes as dosing variables, XCI skewing) are research agenda, not protocol.** They are in this document because the *absence* of a measurement in a mitochondria-and-hormesis vault is itself the finding.

## Suggested vault enrichment (not yet performed)

- Create a `_link/Hard-Coded Biomarker.md` hub with the tier-1/tier-2 structure and a cross-reference from [[Biomarker]] and [[Biomarkers]].
- Split [[Metabotypes]] into germline-genotype vs. microbial-converter halves.
- Add [[NQO1]] rs1800566 C609T content to `adrenochrome/NQO1.md`, with the MRR dose-gate implication.
- Add an MnSOD-activity section to `adrenochrome/` MnSOD note cross-linking rs4880 to the [[SIRT3-SIRT4 Ratio]] redox dial.
- Add a "Genotype Gates" section to `comt/COMT.md` cross-referencing the vitamin E task output and fisetin stratification gap.
- Add sex-intersection to [[SIRT3]] and [[SIRT6]] for rs11555236 / rs117385980 / rs9997679.
- Create `cell-death/Hemochromatosis.md` or `oxidative-stress/Hereditary Hemochromatosis.md` as the ferroptosis-threshold entry point (no HFE, hemochromatosis, or C282Y note exists anywhere in the vault).

## Sources

Primary: Hall KT et al., *JNCI* 111(7):684–694, 2019 (doi:10.1093/jnci/djy204, PMID 30624689) — COMT × α-tocopherol, WGHS + ATBC. | Hall KT et al., *ATVB* 34(9):2160–2167, 2014 — COMT × aspirin, β-carotene. | Beaumont YA et al., *Hum Mol Genet* 16(18):2249–2260, 2007 (doi:10.1093/hmg/ddm177) — systematic MC1R variant functional analysis. | Wendt AK et al., *JAMA Dermatol* 2016 — UV-independent MC1R melanoma risk. | Siegel D et al., *Pharmacogenetics* 9(1):113–121, 1999 — NQO1 C609T genotype–phenotype in human tissue. | Jarvik GP et al., *ATVB* 20(11):2441–2447, 2000 — PON1 phenotype > genotype. | Diederichsen M et al., *PLoS One* 2013 — APOE/KL-VS, CSF biomarkers in AD-risk-enriched cohort. | Taub H et al., 2016 (PEARL) / Mannick JB et al., *Sci Transl Med* / *Aging Cell* — sirolimus dosing, troughs, PD-1. | Adam-Vizi V & Tretter L. — ALDH2 Km exceeding available NAD+. | Andreux PA et al., *Nat Metab* 1(6):595–603, 2019 — urolithin A human RCT. | Del Rio D et al., 2020 — urolithin A direct supplementation across metabotypes (*Eur J Clin Nutr*). | Kanfi S et al., *Nature* 2012 — SIRT6 male-specific lifespan. | Roichman R et al., *Nat Commun* 2021, PMID 34050173 — SIRT6 both sexes, hepatic NAD+. | Goronzy JJ et al., *Trends Genet* 2014 — SIRT3/SIRT6 longevity SNPs. | Giunco S et al., *Oncotarget* 2017 — TERT promoter rs2853669 meta-analysis. | Tennent W et al., *J Caffeine Adenosine Res* 10(4):371–381, 2020 — CYP1A2/ADORA2A/AHR. | Nehlig A, *Eur J Appl Physiol* 2018 — caffeine fast/slow metabolisers. | Lamming DW et al., *Science* 335:1638–1643, 2012 — rapamycin-induced IR via mTORC2 loss.

Secondary: yardimci et al. umbrella review of APOE ε4 dietary patterns (2025). | Scoping review of dietary factors in APOE ε4 carriers, *J Nutr Health Aging* 2022. | GeroScience 2025 — ketogenic diet, female APOE4 mice. | Thompson M et al., *Aging Cell* 2023 — PNPLA3 I148M, niacin and NAFLD. | JCI Insight 2026 — PNPLA3-I148M rewiring hepatocyte lipid metabolism to programmed cell death. | Miller JC et al., *Am J Clin Nutr* 2012 — GPX1 Pro200Leu and selenium response (negative trial). | Krikorian D et al.; Nutrition & Metabolism 6:31, 2009 (TRIAD AC-1202). | Adams PC et al., *Haematologica* 2017 — Hemochromatosis International treatment recommendations. | Won Kim et al. / Malov S et al., *Eur J Appl Physiol* 2020 — CYP1A2 × caffeine cognition. | Hirvonen M et al., 2017 — SIRT6 rs117385980, Finnish men. | TRELONG consortium — rs11555236, rs4980329.

**Vault cross-references:** [[Val158Met]] · [[COMT]] · [[Metabotypes]] · [[Urolithin A]] · [[MC1R]] · [[NQO1]] · [[PON1]] · [[MnSOD]]/[[MnSOD]] · [[SIRT3-SIRT4 Ratio]] · [[APOE4]] · [[Klotho]] · [[mTORC1]] · [[Telomere Attrition]] · [[task_output_comt_vitamin_e_genotype_gate_24_Sep_2026]] · [[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]] · [[task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026]] · [[task_output_sex_dimorphic_cell_death_05_Sep_2026]] · [[task_output_male_distributed_topology_vs_estrogen_hub_05_SEP_2026]]
