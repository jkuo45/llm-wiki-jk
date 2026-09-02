---
title: "Gender-Specific Attributes: Primary Vault Topics"
description: >
  Comprehensive audit of sex- and gender-dependent differences across the wiki vault's
  primary topic areas: sirtuins, MnSOD, thioredoxin-1, caspases/apoptosis, senescence/SASP,
  autophagy/mTOR/AMPK, NAD+ metabolism, NF-κB/inflammation, telomere biology, and cancer.
  Synthesizes vault content with peer-reviewed web research.
created: 2026-09-02
updated: 2026-09-02
tags: [task-output, gender, sex-differences, longevity, senescence, apoptosis, cancer, autophagy, nad, inflammation]
---

# Gender-Specific Attributes: Primary Vault Topics

## Summary

Sex and gender are among the most pervasive yet under-documented biological variables in the wiki vault. Across ~3,174 entity and document notes, only 6 files contained any meaningful discussion of sex differences — and those were limited to 5 entities from the sirtuin/redox axis. This audit expands coverage to the vault's primary topic areas and finds that **sex differences are biologically fundamental at every level**: cell death mode selection (females die by apoptosis, males by necrosis), senescent cell clearance (females benefit more from p16+ cell removal), inflammatory signaling (estrogen suppresses NF-κB/STING), metabolic sensing (rapamycin extends female lifespan more; CR extends male lifespan more), NAD+ homeostasis (males decline, females fluctuate), and cancer susceptibility (X-linked tumor suppressors protect females).

The overarching pattern is that **estrogen acts as a master sex-difference mediator** across nearly every pathway in the vault — sirtuins, MnSOD, NF-κB, STING, telomerase, p53, Bcl-2, and autophagy. Its loss at menopause represents a systems-level inflection point where female protective advantages erode, creating a "double hit" of aging that is absent in males.

**Vault Enrichment Status (2026-09-02):** Seven Priority 1 entity notes have been enriched with Sex Differences sections: [[MnSOD]], [[p53]], [[Apoptosis]], [[NAD+]], [[SASP]], [[SIRT3]], and [[Caspases]] (covered via [[Apoptosis]]). Twelve Priority 2 entities remain for future enrichment (see §XI). The p53-sex differences research was conducted as a deep-dive sub-report and is partially captured in the enriched entity notes and this document.

---

## Part I: Sirtuins, MnSOD, and Thioredoxin-1 (Original Scope)

### SIRT6 — Strongest Male-Specific Longevity Effect

**Vault Content:**
- SIRT6 overexpression extends median lifespan of **male** mice by 14.5%/9.9% with **no significant effect in females** (Kanfi et al., *Nature* 2012). Male benefit tracks reduced serum IGF-1 and downstream IIS (SIRT6.md, lines 87–221).
- Roichman et al. (2021, *Nat Commun*): Later study showed lifespan extension in **both** sexes, but effect remained **stronger in males**. **Not yet in the vault.**
- Finnish SIRT6 polymorphism rs117385980 associated with longevity in **Finnish men** specifically.

**Assessment:** Core male-specific finding well-documented. Roichman 2021 update and Finnish genetics need adding.

### SIRT3 — Estrogen-Dependent Expression and Mitochondrial Targeting

**Vault Content:**
- Intron 5 enhancer variant correlates with **male** lifespan >90 yr; rs11555236 associated with male longevity (Italian) but not replicated; TRELONG study found female-significant longevity SNPs (SIRT3.md, lines 129–208).
- NAMPT inhibitor KPT-9274 mediates **gender-dependent** murine anemia/nephrotoxicity via SIRT3/SOD deacetylation.

**Not in vault:** Estrogen via ER-α/β upregulates SIRT3 expression and mitochondrial targeting; female translational efficiency advantage (~30% higher protein-to-mRNA ratio for SIRT3/SIRT6); post-menopausal SIRT3 decline drives female cardiac aging.

### SIRT1 — Estrogen-Transcriptional Axis; Both-Sex Benefit

**Vault Content:**
- BRASTO (brain-specific SIRT1 overexpression) extends lifespan ~11% **in both sexes** — rare non-sex-specific longevity effect (SIRT1.md, line 150).
- SIRT1 KO: sterility in both sexes; Drosophila extra Sir2 copy extends lifespan more in **females** (29%) than males (18%).

**Not in vault:** Estrogen via ER-α/β is an upstream transcriptional activator of SIRT1; SIRT1–FOXO3 interaction shows stronger longevity genetic associations in females.

### MnSOD/SOD2 — Major Gap: Estrogen-Dependent Upregulation

**Vault Content:** Comprehensive biochemical note with no sex/gender section.

**Not in vault (critical):**
- Female cells express **higher SOD2 protein** abundance with enhanced antioxidant capacity.
- Estrogen directly upregulates SOD2 → lower oxidative damage in premenopausal females.
- SOD2 Ala16Val polymorphism effects differ by sex (stronger cancer associations in males for prostate/lung, females for breast).
- Post-menopausal decline in SIRT3 → reduced SOD2 deacetylation → accelerated female cardiac aging.

### Thioredoxin-1 — Male-Biased Lifespan Extension

**Vault Content:** Male Trx1-Tg mice extend early lifespan; females show no significant extension. Chronic overexpression increases lymphoma risk (Thioredoxin-1.md, lines 98–102).

**Assessment:** Adequately covered. The bidirectional Trx1 ↔ estrogen receptor redox modulation (line 79) is present but under-emphasized.

### 6. CD38 Inhibitor 78c — Sex-Specific Adverse Reactions

- ~14% lifespan boost in **males**; many **females** showed severe adverse reactions leading to early euthanasia (CD38 inhibitor 78c.md, lines 32–39).

---

## Part II: Caspases and Apoptosis — Females Die by Apoptosis, Males by Necrosis

### Core Paradigm

> **This is arguably the most fundamental sex difference in the vault, and it is completely absent from all caspase/apoptosis notes.**

Under stress, cells from females preferentially undergo **caspase-dependent apoptosis** (controlled, non-inflammatory), while cells from males preferentially undergo **PARP-1/AIF-dependent necrosis** (uncontrolled, proinflammatory). This divergence is **cell-autonomous** (persists in hormone-free media and prepubertal animals) and has massive implications for stroke, MI, neurodegeneration, and cancer therapy.

### Key Findings

| Feature | Females (XX) | Males (XY) | Citation |
|---|---|---|---|
| **Primary death mode** | Caspase-dependent apoptosis | PARP-1/AIF-dependent necrosis | Liu et al., *Stroke* 2009; McCullough et al., *J Cereb Blood Flow Metab* 2005 |
| **Caspase-3 activation** | Higher after ischemia; pan-caspase inhibitor protects females only | Lower after ischemia | Liu et al., *Stroke* 2009 |
| **Caspase-8 activation** | ~3× greater; nuclear translocation (XX only) | Lower; no nuclear translocation | Sharma et al., *ASN Neuro* 2011 |
| **Cytochrome C release** | Earlier (30 min vs 1 hr); more robust | Delayed | Sharma et al., *ASN Neuro* 2011 |
| **AIF translocation** | Delayed/minimal | Earlier (by 30 min); robust | Sharma et al., *ASN Neuro* 2011 |
| **Bcl-2 expression** | Higher (estrogen-driven) | Lower | Dubal et al., *J Neurosci* 1999 |
| **Bax expression** | Lower (basal) | Higher | Tsukahara et al., *J Neurobiol* 2006 |
| **PARP-1 inhibition** | Exacerbates injury (protective in females) | Protective (reduces infarct) | McCullough et al., 2005 |
| **Post-MI apoptosis** | 2.6% apoptotic index | 25.9% (10× higher) | Abbate et al., *Heart* 2005 |

### Mechanism: The X/Y Death-Pathway Divergence

- **XX neurons**: Mitochondrial cytochrome C → apoptosome → caspase-9 → caspase-3; caspase-8 also activated and translocates to nucleus to cleave PARP-2.
- **XY neurons**: PARP-1 overactivation → NAD+ depletion → energy failure → AIF release from mitochondria → nuclear translocation → large-scale (50-kbp) DNA fragmentation (caspase-independent).
- **Bax KO eliminates sex differences** in brain neuron number (Forger et al., *PNAS* 2004). **Bcl-2 overexpression also eliminates sex differences** (Zup et al., *J Neurosci* 2003).

### Sex Differences in p53 Regulation

- p53 promoter contains **4 ERα responsive elements** — estrogen activates p53 transcription but also physically sequesters p53, inhibiting its pro-apoptotic function (Desai et al., *Cells* 2025).
- **Testosterone inhibits p53** in skeletal muscle via FoxO3a modulation (Pronsato et al., *Steroids* 2017).
- **X-linked miRNAs** (e.g., miR-504) target TP53 3'-UTR — females have dosage advantage in p53 regulation via X-chromosome escapees.
- TP53 mutation frequency is **higher in male tumors** across 12 non-reproductive cancer types (Haupt et al., 2019).

### Sex-Specific Bcl-2 Family

- Estrogen upregulates **Bcl-2** (neuroprotection): post-ischemic Bcl-2 >60% higher in females (Dubal et al., *J Neurosci* 1999; Alkayed et al., 2001).
- Estrogen upregulates **Bcl-w** and downregulates **Bim** in Alzheimer's context (Patterson et al., *J Neurosci* 2007).
- Sex-specific Bcl-2/Bax ratios in hypothalamic sexual differentiation (Tsukahara et al., 2006).

### Implications for Therapy

> **Caspase inhibitors may preferentially protect females; PARP-1/AIF inhibitors may preferentially protect males.** This has been confirmed experimentally in stroke models and represents a high-impact clinical translation opportunity.

### Vault Gap Assessment

**Zero sex/gender mentions** in any of: Apoptosis.md, Caspases.md, Intrinsic Pathway.md, Extrinsic Pathway.md, Apoptosome.md, DISC.md, or p53.md. This is the largest single gap in the vault's sex-difference coverage.

---

## Part III: Cellular Senescence and SASP

### Senescent Cell Accumulation

| Finding | Mechanism | Citation |
|---|---|---|
| Male mice accumulate more senescent cells across lifespan; females "catch up" near end of life | Sex differences in telomere attrition and cellular maintenance | Yousefzadeh et al., 2020; Foster, 2025, *Front Aging Neurosci* |
| **Female mice carry higher p16+ burden** (especially liver) and derive **most benefit from p16+ cell clearance** | p16-3MR ablation enhanced grip strength, skin regeneration, liver repair **exclusively in females** | *Adv Sci*, 2026 |
| p16+ and p21+ cells are **distinct non-overlapping subpopulations** | Sex differences reflect which senescence arm is dominant (females: p16; males: p53/p21) | Admas et al., *EMBO J*, 2025 |
| Males reach inverted CD4:CD8 ratio earlier; females show greater overall immune remodeling | Faster male naive T-cell exhaustion; female autoimmunity shift | Sopena-Rios et al., *Nature Aging* 2026 |

### SASP Composition

- Sex and BMI significantly influence SASP factor levels; 17 SASP factors correlate with age after adjustment (Schafer et al., *eLife* 2020).
- **Estrogen suppresses NF-κB–driven SASP** via ERβ: enhances IκBα expression and reduces p65 binding to pro-inflammatory promoters (Giroux et al., 2012).
- Males with depression show **higher SASP index** than females with depression (J Gerontol A, 2025).

### cGAS–STING Pathway

- **cGAS/STING activity significantly higher in aged males** than females; driven by lower mtTFA and TREX1 (mitochondrial DNA clearance "safety valves") in males (Feng et al., *JCI Insight* 2024).
- **Estrogen directly suppresses STING transcription** via ERα + HDAC3 binding to STING promoter (*Front Immunol* 2024).

### Immunosenescence

- Males: faster naive T-cell exhaustion, earlier CD4:CD8 inversion, heightened inflammatory state.
- Females: greater overall immune remodeling (17% vs 7% of immune neighborhoods change with age); shift toward self-reactive/autoimmune state after age 50.
- This underlies the **female longevity advantage** (better pathogen defense) and **female autoimmune vulnerability** (78% of autoimmune disease cases).

### Senolytic Therapy: Sex-Dependent Responses

| Finding | Context | Citation |
|---|---|---|
| D+Q: females benefit more cognitively/metabolically; males show adverse metabolic effects (↑ plasma insulin) | APP^NL−F/NL−F^ mice | *GeroScience* 2024 |
| Fisetin: improves cognition in **males** without affecting amyloid pathology | APP/PS1 mice | *GeroScience* 2024 |
| D+Q: worsened HCC in males at same dose beneficial in females | C57BL/6 mice | Cited in *GeroScience* 2024 |
| Senolytics preserved cognition in males but failed to rescue memory in older females (estradiol depletion independent of senescence) | F344 rats | *Int J Mol Sci* 2025 review |
| **No sex-stratified navitoclax data exist** | — | Open gap |

### Vault Gap Assessment

**Zero sex/gender mentions** in Senescence.md, SASP.md (except incidental GDF15 note), Senolytic.md, Senolytics.md, Cellular Senescence.md. Major gap across the entire senescence topic.

---

## Part IV: Autophagy, mTOR, and AMPK

### Autophagy: Sex-Specific Death-Pathway Coupling

- **Male neurons** undergo autophagy more readily and die under starvation/OGD; **female neurons** mobilize fatty acids and depend less on autophagy (Du et al., *J Biol Chem* 2009).
- After stroke: males rapidly induce **canonical autophagy** (Beclin-1↑, LC3-II↑, p62↓); females use a **Beclin-1-independent (ATG7) route** (Patrizz et al., *Cells* 2021).
- Males show **higher basal Beclin-1/LC3** in cardiac tissue (Oliván et al., 2014).
- **Estrogen is bidirectional**: suppresses autophagy in ischemic neurons (via mTOR-ULK) but promotes prosurvival autophagy in ER+ breast cancer (driving antiestrogen resistance).

### mTORC1: Sex-, Muscle-, and Fed-State–Dependent

- mTORC1 activation (p70S6K1): **higher in males when fasted, higher in females when fed** (*Am J Physiol Regul Integr* 2024).
- **Female cardiac mTOR signaling is ERβ-specified**; males maintain both mTORC1/mTORC2 (Gürgen, *Hypertension* 2013).
- KRAS-mutant pancreatic cancer: **androgen–AR signaling drives mTORC1 activation** specifically in males (Gökduman, 2023).

### AMPK: Male-Biased Hepatic Activation

- Hepatic AMPK induction under fructose/MASLD is **~3-fold higher in males**; female protection tied to estrogen → AMPK activation (Spruss et al. 2012; Yang 2022).

### Rapamycin: Females Get Greater Lifespan Extension

- **Females show larger relative lifespan extension** from rapamycin (replicated across 3 ITP cohorts), partly via higher blood drug levels (Miller, *Aging Cell* 2014; Harrison, *Nature* 2009).
- Dosing regimen matters: 3-month early-life exposure benefits **males only** (Strong, *Aging Cell* 2020).

### Caloric Restriction: Males Benefit More

- ~95–96% of CR studies ignore sex; where studied, **young males get greater metabolic benefit** (*eLife* 2023).
- Historic McCay 1935: CR extended lifespan **only in males**.
- Combined CR + exercise: benefits mediated through **distinct sex-specific molecular pathways** in skeletal muscle (Singh et al., *Biol Sex Differ* 2024).

### Disease-Specific Autophagy Sex Differences

- **Stroke**: male neurons die via PARP-1/AIF; females via caspases — minocycline benefits only male patients clinically.
- **MASLD/NAFLD**: male-specific susceptibility via persistent mTORC1 → *Lpin1*.
- **Alzheimer's**: female vulnerability linked to autophagy differences; male astrocytes show enriched apoptotic pathways while females show Wnt/cell cycle alterations.

### Vault Gap Assessment

**Zero sex/gender mentions** in Autophagy.md, mTOR.md, mTORC1.md, Beclin1.md, AMPK.md. All five notes treat these pathways as sex-neutral, missing fundamental biology.

---

## Part V: NAD+ Metabolism — The Male Decline

### NAD+ Levels and Aging

| Finding | Mechanism | Citation |
|---|---|---|
| Men have higher whole-blood NAD+ than women (34.5 vs 31.3 μmol/L) but men **decline with age** while women's levels **fluctuate without monotonic decline** | Sex hormones modulate NAD+ homeostasis; PARP hyperactivation in males | Guan et al., *Front Endocrinol* 2022 |
| Women have higher NAD+/NADH **redox ratios** (1.33 vs 1.09); this narrows with biological age | Estrogen–ERα–PARP-1 axis | Schwarzmann et al., *Biosci Rep* 2021 |
| PARP activity increases with age in **male skin but NOT female skin**; inversely correlates with NAD+ in males (r=−0.639) | Estrogen stabilizes PARP-1 on DNA, preventing hyperactivation | Maver et al., *PLoS ONE* 2012 |

### CD38 and Ovarian NAD+ Decline

- CD38 (primary NADase) rises with reproductive aging in the female ovary → directly depletes ovarian NAD+ → fertility loss.
- CD38 KO mice preserve NAD+ and mitochondrial function into old age; have larger primordial follicle pools (Wang et al., *Nature Aging* 2023).
- Human CD38 mRNA higher in follicular cells from women >35 vs <25 years (Zhang et al., *iScience* 2023).

### PARP-1: Male Toxicity, Female Protection

- PARP-1 knockout **protects males** from ischemic brain injury but **exacerbates damage in females** (McCullough et al., 2005).
- Loss of PARP-1 abrogates estradiol's neuroprotective potential.
- This is the **mirror image** of the caspase paradigm: PARP-1 drives male necrotic death; its removal is harmful in females who rely on the caspase pathway.

### NMN/NR Supplementation

- Limited human sex-stratified data. Preclinical: NAMPT overexpression extends lifespan with magnitude varying by sex.
- Women entering perimenopause/menopause face a "double decline" — hormonal shifts compounding age-related NAD+ changes.

### Vault Gap Assessment

**Zero sex/gender mentions** in NAD+.md. The PARP-1 sex divergence and ovarian CD38 biology are entirely absent.

---

## Part VI: NF-κB and Inflammation

### NF-κB Activation

- Estrogen inhibits NF-κB through **bimodal ERβ mechanism**: (1) enhances IκBα expression; (2) reduces p65 binding to pro-inflammatory promoters.
- The MyD88/methylated ER-α complex (required for NF-κB transcriptional activity) is found in **35/35 testicular samples** and **3/11 post-menopausal ovaries** but **0/29 pre-menopausal ovaries** — demonstrating estrogen's direct interruption of NF-κB activation in situ (Giroux et al., 2012).

### Inflammatory Cytokine Profiles

- Women mount **stronger in vivo** pro-inflammatory responses to endotoxin: +45% TNF-α, +43% IL-6 vs men (Engler et al., 2017).
- **Resting basal**: men have higher IL-6 (42 vs 15 pg/mL), IL-1β (45 vs 5), TNF-α (90 vs 25) — driven partly by higher monocyte counts.
- Hormonal contraceptive use amplifies women's pro-inflammatory response (+60% TNF-α).

### The Female Autoimmune Paradox

Women account for **~78% of autoimmune disease cases** globally:
1. **TLR7 dose effect**: escapes X-inactivation in ~25% of cases → ~2× TLR7 protein → stronger antiviral responses AND lupus susceptibility.
2. **Xist lncRNA complexes**: generate ribonucleoprotein complexes that activate autoimmune pathways (Chang et al., *Cell* 2024).
3. **Estrogen concentration-dependent**: low/moderate estrogen is pro-inflammatory; high estrogen (pregnancy) is anti-inflammatory.

### Inflammaging

- Males accumulate age-related inflammatory changes **earlier** (innate cell activation, elevated basal cytokines).
- Pre-menopausal women maintain robust adaptive immunity → inflammaging onset is **delayed**.
- Post-menopause: CRP/IL-6 rise, inflammaging **accelerates** — the "estrogen cliff."

### Vault Gap Assessment

**Zero sex/gender mentions** in NF-κB.md, TNFα.md, Inflammation.md, Inflammaging.md. The estrogen–NF-κB–STING axis is a unifying framework absent from the vault.

---

## Part VII: Telomere Biology — The Female Advantage

### Telomere Length

- Women have **longer telomeres** at virtually every age. Difference present at birth.
- Men show faster attrition: ~43 bp/year vs ~26 bp/year (Gardner et al., 2014).
- Meta-analysis of 36 cohorts (36,230 participants): standardized sex difference 0.090 (95% CI 0.015–0.166).

### Mechanisms for Female Advantage

| Mechanism | Explanation | Citation |
|---|---|---|
| **DKC1 biallelic expression** | Before X-inactivation, female embryo cells express dyskerin (telomerase component) from BOTH X alleles → higher telomerase → elongated telomeres before implantation | Lansdorp, *Aging Cell* 2022 |
| **Estrogen → TERT activation** | Estrogen responsive elements in TERT promoter directly stimulate telomerase transcription | Barrett & Richardson 2011 |
| **Estrogen antioxidant** | Protects telomeres from oxidative damage | Mayer et al. 2006 |
| **Testosterone is unfavorable** | Lacks antioxidant properties; may increase oxidative stress-induced telomere damage | Gardner et al. 2014 |

### The Long Telomere Paradox in Premenopausal Women

UK Biobank data (n=445,399):
- **Premenopausal women**: longer LTL paradoxically associated with **increased** years of life lost (+0.705 yr/SD), mainly from cancer (+3.0 yr) and CVD (+2.7 yr).
- **Postmenopausal women**: longer LTL → decreased YLL (−0.387 yr/SD), similar to male pattern.
- Hormonal involvement strongly suggested by the menopause transition point (Li et al., 2025).

### Vault Gap Assessment

**Zero sex/gender mentions** in Telomere.md or Telomere Attrition.md.

---

## Part VIII: Cancer Biology — X-Linked Protection and Hormonal Modulation

### Cancer Incidence

- **Broad male predominance** at most non-reproductive sites persists after adjusting for smoking, alcohol, BMI — pointing to biological (hormonal/immunologic/X-linked) drivers (Jackson et al., 2022).
- SEER M/F ratios: esophageal & bladder ~4×; liver/HCC 2.8; kidney 2.0; colorectal ~1.4; GBM ~1.6 with female survival advantage.

### X-Linked Tumor Suppressors (EXITS)

Six X-linked genes (**ATRX, CNKSR2, DDX3X, KDM5C, KDM6A, MAGEC3**) are loss-of-function mutated more often in males across 21 tumor types (vs 0/18,053 autosomal genes). Female **biallelic expression** protects against single-hit inactivation (Dunford et al., *Nature Genetics* 2017).

### KRAS: Sex-Specific Mutation Patterns

- NSCLC: KRAS **G12C enriched in females** (65% of G12C are women); males have more STK11 & TP53 co-alterations (poor immunotherapy prognosis).
- mCRC: females have higher KRAS mutation frequency (48.8% vs 42.6%, p=0.002).

### Immune Checkpoint Inhibitors

- Early claim of male ICI advantage (Conforti, 2018) was **not confirmed** by larger meta-analyses (Wallis et al., *JAMA Oncol* 2019, 23 RCTs): both sexes benefit equally (HR 0.75 vs 0.77).
- Effect depends more on cancer type, line, and PD-L1 status than sex.

### Sex Hormones in Non-Sex-Organ Cancers

| Cancer | Hormone | Effect | Citation |
|---|---|---|---|
| **Lung** | ERβ | Overexpressed in 60–80% of NSCLC; local aromatase drives intratumoral estrogens | *Front Oncol* 2023 |
| **Colorectal** | Estrogen | Protective (immune/microbiota); HRT reduces postmenopausal CRC risk | *Biol Sex Differ* 2024 |
| **Liver** | Testosterone | Higher T raises HCC risk (2–4:1 male excess); HBV upregulates AR | *Cancers* 2025 |
| **Melanoma** | Testosterone | Higher T raises incidence; ligand-activated AR drives invasiveness | *Cancers* 2025 |
| **GBM** | Both | Testosterone/AR promotes proliferation & CSCs; estrogen/ERβ protective | *Life* 2024 |

### Vault Gap Assessment

Breast Cancer.md and Prostate Cancer.md mention sex only in passing. All other cancer notes (Hallmarks, KRAS, etc.) lack sex/gender discussion. The EXITS framework and hormonal modulation of non-sex-organ cancers are entirely absent.

---

## Part IX: Unifying Framework — Estrogen as Master Mediator

The following diagram represents how estrogen modulates virtually every major pathway in the vault:

```
ESTROGEN (E2)
  │
  ├──→ ERα/β → SIRT1 transcription ↑
  ├──→ ERα/β → SIRT3 expression & mitochondrial targeting ↑
  ├──→ ERα/β → SOD2 protein abundance ↑
  ├──→ ERα/β → Bcl-2 transcription ↑ (neuroprotection)
  ├──→ ERα/β → IκBα expression ↑ → NF-κB suppression
  ├──→ ERα/β → HDAC3 → STING transcription ↓ → cGAS-STING suppression
  ├──→ ERα → PARP-1 stabilization → prevents hyperactivation
  ├──→ TERT promoter → telomerase activity ↑
  ├──→ p53 promoter (4 ERα elements) → dual activation/sequestration
  └──→ Anti-oxidant (direct) → telomere protection
```

**At menopause, E2 withdrawal simultaneously:**
- Removes SIRT1/3 transcriptional support → mitochondrial dysfunction
- Removes SOD2 upregulation → oxidative stress increase
- Removes NF-κB suppression → inflammaging acceleration
- Removes STING suppression → cGAS-STING activation
- Removes PARP-1 stabilization → NAD+ depletion accelerates
- Removes telomerase activation → telomere attrition speeds up
- Removes Bcl-2 neuroprotection → neuronal vulnerability increases

This **systems-level inflection** is the mechanistic basis for the post-menopausal acceleration of female aging — a concept absent from the vault.

---

## Part X: Summary Table — Sex-Specific Attributes by Entity

| Entity | Male-Specific | Female-Specific | Both Sexes | Key Mechanism |
|--------|--------------|----------------|------------|---------------|
| **SIRT6** | Lifespan ↑14.5% via IGF-1↓ | Modest benefit (Roichman 2021) | KO lethal | SIRT6→IGF-1↓→IIS↓ |
| **SIRT3** | Intron 5 enhancer ↔ male longevity | TRELONG SNPs female-significant; higher protein/mRNA | Deacetylates MnSOD | E2→ERα→SIRT3 transcription |
| **SIRT1** | — | Higher protein with age; stronger FOXO3 associations | BRASTO extends both ~11% | E2→ERα/β→SIRT1 |
| **MnSOD/SOD2** | — | Higher protein; estrogen-dependent; post-menopausal decline | Core SIRT3 substrate | E2→SOD2 expression |
| **Trx1** | Lifespan extension (Pérez 2011) | No lifespan extension | Modulates ER redox | Male-biased; cancer risk |
| **Caspases** | Lower activation; PARP-1/AIF necrosis dominant | Higher activation; caspase-dependent apoptosis dominant | — | XX vs XY death-pathway divergence |
| **p53** | Higher mutation frequency in tumors; testosterone inhibits | Estrogen dual-regulates (activation + sequestration) | Central tumor suppressor | E2→4 ERα elements on p53 promoter |
| **Bcl-2** | Lower expression | Higher (estrogen-driven); neuroprotective | — | E2→Bcl-2 transcription |
| **Senescence** | More senescent cells early life; p53/p21 dominant arm | Higher p16+ burden; derive most from p16+ clearance | p16 and p21 are distinct subtypes | Sex-hormone–dependent senescence arm |
| **SASP** | Higher SASP burden (in depression); earlier inflammaging | Estrogen suppresses NF-κB–driven SASP | GDF-15 sex-correlated | E2→NF-κB suppression |
| **cGAS-STING** | Higher activity in aged males; lower mtTFA/TREX1 | Estrogen suppresses STING via ERα-HDAC3 | — | E2→STING promoter deacetylation |
| **Autophagy** | Higher basal Beclin-1/LC3; canonical autophagy | Beclin-1-independent (ATG7) route; estrogen bidirectional | Both use autophagy | Sex-specific death-pathway coupling |
| **mTORC1** | Higher p70S6K1 when fasted | Higher p70S6K1 when fed; ERβ-specified in heart | Central growth regulator | Fed-state and sex-dependent |
| **Rapamycin** | 3-month early exposure benefits males only | Greater overall lifespan extension | Extends both | Higher blood levels in females |
| **Caloric Restriction** | Greater metabolic benefit (young); lifespan extension | Less studied; less benefit historically | — | McCay 1935: male-only |
| **NAD+** | Higher baseline but progressive decline; PARP-driven | Higher NAD+/NADH ratio; fluctuating (not declining); CD38 in ovary | Both decline in tissues | E2→PARP-1 stabilization |
| **NF-κB** | Higher basal activity | Estrogen suppresses via ERβ→IκBα↑ | Master inflammatory TF | E2→NF-κB inhibition |
| **Inflammation** | Higher basal IL-6, IL-1β, TNF-α; earlier inflammaging | Stronger in vivo responses; delayed inflammaging; autoimmune risk | — | X-linked immune gene dosage |
| **Telomeres** | Shorter; faster attrition (~43 bp/yr) | Longer; slower attrition (~26 bp/yr); DKC1 advantage | — | DKC1 biallelic; E2→TERT |
| **Cancer** | Higher incidence (most types); more TP53 mutations | X-linked tumor suppressor advantage; ERβ protective in lung/GBM/CRC | EXITS framework | X-chromosome biallelic protection |
| **CD38 inhibitor 78c** | ~14% lifespan boost | Severe adverse reactions | NAD+ depletion | Sex-specific toxicity |

---

## Part XI: Recommendations for Vault Enrichment

### Priority 1 — Critical Gaps (High-Impact, Well-Established) ✅ Completed 2026-09-02

| Entity | Gap | Recommendation | Status |
|--------|-----|----------------|--------|
| **MnSOD/SOD2** | No sex/gender section | Add "Sex Differences": estrogen-dependent SOD2 upregulation, female protein advantage, polymorphism×sex interactions, post-menopausal decline | ✅ Added to [[MnSOD]] |
| **p53** | Zero sex discussion | Add section on E2–p53 bidirectional regulation (4 ERα elements), X-linked miRNA regulation, sex-specific TP53 mutation patterns in cancer | ✅ Added to [[p53]] |
| **Apoptosis** | Zero sex discussion | Add "Sex Differences in Cell Death Mode" section: XX caspase-apoptosis vs XY PARP-1/AIF-necrosis; Bcl-2/Bax sex differences; therapeutic implications | ✅ Added to [[Apoptosis]] |
| **Caspases** | Zero sex discussion | Cross-reference with Apoptosis.md sex differences; note caspase-3/8 sex-specific activation patterns | ✅ Covered in [[Apoptosis]] sex differences section |
| **NAD+** | Zero sex discussion | Add section on male PARP-driven NAD+ decline, female CD38 ovarian biology, sex-specific supplementation considerations | ✅ Added to [[NAD+]] |
| **SASP** | Near-zero sex discussion | Add "Sex Differences" section: estrogen–NF-κB suppression, sex-specific SASP composition, male-biased SASP burden | ✅ Added to [[SASP]] |
| **SIRT3** | Missing estrogen mechanism | Add E2→ERα→SIRT3 expression/mitochondrial targeting; female translational efficiency; post-menopausal decline | ✅ Added to [[SIRT3]] |

### Priority 2 — Important Gaps

| Entity | Gap | Recommendation |
|--------|-----|----------------|
| **Senescence** | Zero sex discussion | Add section on p16 vs p21 sex-specific arm dominance; female p16+ clearance benefit; male earlier senescence onset |
| **Senolytics** | Zero sex discussion | Add sex-dependent efficacy note: D+Q female-biased benefit; fisetin male-biased; no navitoclax sex data |
| **NF-κB** | Zero sex discussion | Add section on estrogen–ERβ–NF-κB axis; IκBα upregulation; post-menopausal NF-κB derepression |
| **Telomere** | Zero sex discussion | Add "Sex Differences" section: female advantage mechanisms (DKC1, E2→TERT, antioxidant), attrition rates, paradox in premenopausal women |
| **Autophagy** | Zero sex discussion | Add section on sex-specific death-pathway coupling (males: Beclin-1/canonical; females: ATG7/alternative); estrogen bidirectionality |
| **mTORC1** | Zero sex discussion | Add note on sex-specific activation patterns; ERβ specification in female heart; rapamycin sex differences |
| **AMPK** | Zero sex discussion | Add note on male-biased hepatic activation; estrogen–AMPK in females |
| **SIRT6** | Missing Roichman 2021 | Add both-sex benefit (males still stronger); Finnish male-specific longevity polymorphism |
| **Bcl-2** | Zero sex discussion | Add estrogen–Bcl-2 neuroprotection axis; sex-specific Bcl-2/Bax in disease contexts |
| **Breast Cancer** | Sex discussed only in passing | Elaborate on ERα biology, sex-specific treatment resistance, subtype-specific sex differences |
| **Prostate Cancer** | Sex discussed only in passing | Add note on AR signaling as paradigm of male-specific cancer biology; cross-link with androgen–mTORC1 |

### Priority 3 — Cross-Links and Context

| Action | Details |
|--------|---------|
| **Create estrogen–sirtuin cross-link** | Connect estrogen→SIRT1/3/6 axis across SIRT1.md, SIRT3.md, SIRT6.md |
| **Create sex-specific cell death cross-link** | Connect Apoptosis.md ↔ Caspases.md ↔ p53.md ↔ Bcl-2 family notes with unified sex-difference framework |
| **Cross-link NAD+ ↔ PARP-1 ↔ sex** | Connect NAD+.md ↔ Telomere.md ↔ Apoptosis.md with PARP-1 sex-divergence |
| **Cross-link NF-κB ↔ SASP ↔ estrogen** | Connect NF-κB.md ↔ SASP.md ↔ Inflammaging.md with estrogen suppression axis |
| **Cross-link cGAS-STING ↔ SASP ↔ sex** | Connect cGAS-STING in senescence notes with estrogen–STING suppression |
| **Add post-menopausal acceleration framework** | The "estrogen cliff" concept should be cross-referenced across all affected notes |

---

## Part XII: Sources Referenced

### Vault Documents
- [[_document_ - Sirtuins Guardians of Mammalian Healthspan|Sirtuins: Guardians of Mammalian Healthspan (Giblin et al., 2014)]]
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in Health and Disease (Wu et al., 2022)]]
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases|Roles of SIRT3 in Aging (You & Wang, 2025)]]

### Vault Entity Notes
- [[SIRT1]], [[SIRT3]], [[SIRT6]], [[SIRT4]], [[MnSOD]], [[Thioredoxin-1]], [[Thioredoxin]], [[CD38 inhibitor 78c]]
- [[Apoptosis]], [[Caspases]], [[p53]], [[Intrinsic Pathway]], [[Extrinsic Pathway]], [[Apoptosome]], [[DISC]]
- [[Senescence]], [[SASP]], [[Senolytic]], [[Senolytics]], [[Cellular Senescence]], [[Immunosenescence]]
- [[Autophagy]], [[mTOR]], [[mTORC1]], [[Beclin1]], [[AMPK]]
- [[NAD+]], [[NF-κB]], [[TNFα]], [[Telomere]], [[NRF2]]
- [[Hallmarks of Cancer]], [[Breast Cancer]], [[Prostate Cancer]], [[KRAS]]

### External Research — Caspases & Apoptosis
- Liu F et al. (2009) *Stroke* 40:1842–1848. Sex differences in caspase activation after stroke.
- Sharma J et al. (2011) *ASN Neuro* 3(2):e00056. Sex-specific cell death in cerebellar neurons.
- McCullough LD et al. (2005) *J Cereb Blood Flow Metab* 25:502–512. PARP-1: male toxicity, female protection.
- Abbate A et al. (2005) *Heart* 91:99–101. Reduced post-infarction apoptosis in women.
- Dubal DB et al. (1999) *J Neurosci* 19:6385–6393. Estradiol modulates bcl-2.
- Forger NG et al. (2004) *PNAS* 101:2010–2015. Bax deletion eliminates sex differences in brain.
- Desai S et al. (2025) *Cells* 14(5):363. Sex disparities in p53 regulation.
- Du L et al. Sex differences in cell death pathways. Multiple publications, 2004–2011.

### External Research — Senescence
- Ng et al. (2022) *Neurobiol Aging*. Evidence of sex differences in cellular senescence.
- *Adv Sci* (2026). Integrative omics reveal female-specific benefits of p16+ cell clearance.
- Feng et al. (2024) *JCI Insight*. cGAS/STING pathway sex dimorphism in diabetic kidney disease.
- Garbarino et al. (2020) *Alzheimer's & Dementia*. Head-to-head senolytic sex differences.
- Sopena-Rios et al. (2026) *Nature Aging*. Single-cell sex-specific immunosenescence.
- Schafer et al. (2020) *eLife*. The senescence-associated secretome as an indicator of age.
- Ungvari et al. (2025) *GeroScience*. Sex-specific mechanisms in vascular aging.

### External Research — Autophagy, mTOR, AMPK
- Patrizz et al. (2021) *Cells*. Sex-specific autophagy after ischemic stroke.
- Miller RA et al. (2014) *Aging Cell*. Rapamycin sex differences in lifespan (ITP).
- Harrison DE et al. (2009) *Nature*. Rapamycin lifespan extension.
- Strong R et al. (2020) *Aging Cell*. Rapamycin dosing regimen sex differences.
- Singh PB et al. (2024) *Biol Sex Differ*. CR + exercise sex-specific molecular pathways.

### External Research — NAD+ Metabolism
- Guan et al. (2022) *Front Endocrinol* 13:829658. Sex differences in NAD+ and aging.
- Maver et al. (2012) *PLoS ONE* 7:e42357. PARP activity sex differences.
- Wang et al. (2023) *Nature Aging* 3:1446–1459. CD38 in ovarian aging.
- Zhang et al. (2023) *iScience* 26(9):107949. CD38 KO and ovarian NAD+.

### External Research — NF-κB & Inflammation
- Giroux et al. (2012) *PLoS ONE* 7:e36890. Estrogen–NF-κB–MyD88 sex differences.
- Engler et al. (2017) *Innate Immunity* 23:318–328. Sex differences in cytokine response.
- Chang et al. (2024) *Cell*. Xist and autoimmunity (Stanford).
- Olivieri et al. (2023) *Mech Ageing Dev* 211:111792. Sex differences in inflammaging.

### External Research — Telomeres
- Gardner et al. (2014) *Exp Gerontol* 51:15–27. Sex differences in telomere length.
- Lansdorp (2022) *Aging Cell* 21:e13614. DKC1 hypothesis for female telomere advantage.
- Li et al. (2025) *Biomed Environ Sci*. Long telomere paradox in premenopausal women.

### External Research — Cancer
- Dunford et al. (2017) *Nature Genetics*. X-linked tumor suppressors (EXITS).
- Jackson SS et al. (2022) *Cancer*. Sex disparities in cancer incidence.
- Wallis CJD et al. (2019) *JAMA Oncol*. Immune checkpoint inhibitors sex differences.
- Haupt et al. (2019). p53 and cancer sex disparity across 12 tumor types.
