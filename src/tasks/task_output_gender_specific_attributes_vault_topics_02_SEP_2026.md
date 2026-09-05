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

**Vault Enrichment Status (2026-09-02):** Seven Priority 1 entity notes have been enriched with Sex Differences sections: [[MnSOD]], [[p53]], [[Apoptosis]], [[NAD+]], [[SASP]], [[SIRT3]], and [[Caspases]] (covered via [[Apoptosis]]). All eleven Priority 2 entities listed in §XI have now also been enriched with Sex Differences sections: [[Senescence]], [[Senolytics]], [[NF-κB]], [[Telomere]], [[Autophagy]], [[mTORC1]], [[AMPK]], [[SIRT6]], [[Bcl-2]], [[Breast Cancer]], and [[Prostate Cancer]]. Companion hub notes ([[Cellular Senescence]], [[Senolytic]], [[Telomere Attrition]]) received cross-referencing sex-difference notes. **All six §XI Priority 3 cross-link and context actions are now complete (2026-09-02):** (1) estrogen–sirtuin hub cross-linked across [[SIRT1]]/[[SIRT3]]/[[SIRT6]]; (2) sex-specific cell death unified framework across [[Apoptosis]]↔[[Caspases]]↔[[p53]]↔[[Bcl-2]]; (3) NAD+↔[[PARP1]]↔sex linked across [[NAD+]]↔[[Telomere]]↔[[Apoptosis]]; (4) NF-κB↔SASP↔estrogen with a new Sex Differences section in [[Inflammaging]]; (5) cGAS-STING↔SASP↔sex with new Sex Differences notes in [[STING]] and [[cGAS]]; (6) the post-menopausal "estrogen cliff" cross-referenced across all affected notes. The p53-sex differences research was conducted as a deep-dive sub-report and is partially captured in the enriched entity notes and this document. (Note: the earlier header referenced "Twelve" Priority 2 entities; the §XI table enumerates eleven, all now complete.)

---

## Part I: Sirtuins, MnSOD, and Thioredoxin-1 (Original Scope)

### SIRT6 — Strongest Male-Specific Longevity Effect

**Vault Content:**
- SIRT6 overexpression extends median lifespan of **male** mice by 14.5%/9.9% with **no significant effect in females** (Kanfi et al., *Nature* 2012). Male benefit tracks reduced serum IGF-1 and downstream IIS (SIRT6.md, lines 87–221).
- Roichman et al. (2021, *Nat Commun* PMID 34050173): extends **both** sexes, male-stronger, via hepatic NAD+/gluconeogenesis — now in vault Sex Differences section.
- Finnish SIRT6 polymorphism rs117385980 associated with longevity in **Finnish men** specifically (Hirvonen 2017).

**Assessment:** Core male-specific finding well-documented. Table corrected to place Roichman both-sex effect in Both Sexes column.

### SIRT3 — Estrogen-Dependent Expression and Mitochondrial Targeting

**Vault Content (enriched 2026-09-02, verified in [[SIRT3]] Sex Differences section):**
- Intron 5 enhancer variant correlates with **male** lifespan >90 yr; rs11555236 associated with male longevity (Italian) but not replicated; TRELONG study found female-significant longevity SNPs (SIRT3.md, lines 129–208).
- NAMPT inhibitor KPT-9274 mediates **gender-dependent** murine anemia/nephrotoxicity via SIRT3/SOD deacetylation.
- E₂→ERα/β→SIRT3 transcription + mitochondrial targeting now in vault: estrogen sustains SIRT3 pools and matrix import where it deacetylates [[MnSOD]]/IDH2; loss at menopause derepresses ROS (SIRT3.md Sex Differences + estrogen–sirtuin hub cross-link to [[SIRT1]]/[[SIRT6]]).
- Female translational-efficiency advantage (~30% protein-to-mRNA) is in vault **explicitly flagged as pilot/preliminary — do not present as established**.
- Post-menopausal SIRT3 decline driving female cardiac aging is in vault **explicitly flagged as inferred, not RCT-proven** (mechanism: E₂ withdrawal → ↓SIRT3 → ↓SOD2 deacetylation → ↑oxidative stress).

**Research verification:**
- ER→SIRT3 induction: ER activation increases SIRT3 via Sirt3-promoter activation and NRF2 nuclear translocation; GPER agonist G-1 reverses OVX-induced cardiac Sirt1/3 loss and restores SOD activity in OVX+T2D rats (PLOS ONE 2023, PMID review of G-1/OVX-T2D model); E₂ restores SIRT1 (2.7× protein) and blocks AngII hypertrophy/apoptosis ER-dependently (ICI 182,780 blocks; Obesity Med Cell Longev 2014).
- Human cardiac aging is female-specific: old (50–68 yr) vs young (17–40 yr) female ventricles show ↓SIRT1 + ↓SIRT3 + ↓SOD2 + NF-κB/pro-inflammatory shift with ↑macrophages; no such change in aged male hearts (Aging 2019, PMC6503880). Supports estrogen-cliff model; observational, not RCT.
- Tissue-dependent exception — breast cancer: SIRT3 overexpression in ER+ MCF-7 desensitizes cells to E₂ proliferative effect, disrupts ERα–p53 interaction (↑p53/AIF/ERα, ↓Ac-SOD2, ↓proliferation/migration/colony formation; E₂ only partially rescues) — i.e. tumor-suppressive SIRT3↔ERα antagonism, opposite direction from cardiac/metabolic induction (Pinterić et al., Antioxidants 2020;9:294). SIRT3-KO mice develop exclusively ERα+ mammary tumors; SIRT3 axis of the UPRmt compensates for ERα axis loss with age (PMC8680335 perspective).
- K68-Ac clarification: the inhibitory acetyl mark is **SOD2-K68-Ac** (SIRT3 substrate), not SIRT3-K68 — SIRT3 deacetylates SOD2-K68 to activate dismutase; SIRT3 inhibition raises SOD2-K68-Ac (e.g. jionoside B1 MST Kd ~15.8 µM, Biomolecules 2026 TNBC/cisplatin model). Use [[MnSOD]] K68-Ac terminology, not "SIRT3 K68-Ac".

### SIRT1 — Estrogen-Transcriptional Axis; Both-Sex Benefit

**Vault Content (enriched 2026-09-02, verified in [[SIRT1]] Sex Differences — Estrogen–Sirtuin Hub):**
- BRASTO (brain-specific SIRT1 overexpression) extends lifespan ~11% **in both sexes** — rare non-sex-specific longevity effect (SIRT1.md, line 150).
- SIRT1 KO: sterility in both sexes; Drosophila extra Sir2 copy extends lifespan more in **females** (29%) than males (18%).
- Bidirectional, tissue-dependent E₂↔SIRT1/ER crosstalk now in vault: E₂→ER sustains SIRT1 pools (females preserve SIRT1 with age; males decline faster) **and** SIRT1 represses ligand-independent ERα activation — not unidirectional E₂→SIRT1 (SIRT1.md E₂↔ER↔SIRT1 section + reciprocal [[SIRT3]] hub link).
- SIRT1–FOXO3 female-leaning longevity association noted in vault hub (SIRT1→FOXO3a→[[MnSOD]]/CAT antioxidant program); treat as genetic-association level, not proven causal mechanism.

**Research verification:**
- E₂ induces SIRT1: 17β-estradiol markedly induces Sirt1 expression (3T3-L1; OVX+AngII hearts 2.8× mRNA/2.7× protein); ERα+SIRT1 form a positive feedback loop suppressing autophagy/adiposity (higher Sirt1 in control females than males; abolished by S1tg overexpression — Xu et al., Cell Death Discov 2021). Cardiac E₂ protection requires SIRT1 (niacinamide blocks) and ER (ICI 182,780 blocks) with AMPK co-activation (Oxid Med Cell Longev 2014).
- SIRT1 represses ER: SIRT1 inhibition (sirtinol/knockdown) activates ERα-dependent transcription **with and without estrogen** → ↑estrogen-responsive genes + proliferation; ER antagonists (4HT/fulvestrant) suppress it — defining ligand-independent ERα activation repressed by SIRT1 (Elangovan et al., J Endocrinol 2013;218:273). Conversely SIRT1 inhibition disrupts basal ERα-promoter complexes → ↓ERα expression and ↓E₂-dependent growth in mammary epithelium (Yao et al., Carcinogenesis 2010) — direction is context/dose-dependent, hence "bidirectional/tissue-dependent."
- SIRT1–FOXO3: SIRT1 deacetylates FOXO3a → ↑[[MnSOD]], CAT, GSH programs (vault SIRT1 mechanism section); FOXO3 longevity variants show female-leaning associations in some cohorts — retain as association-level claim only.

### MnSOD/SOD2 — Major Gap: Estrogen-Dependent Upregulation

**Vault Content:** Comprehensive biochemical note with no sex/gender section.

**Not in vault (critical):**
- Female cells express **higher SOD2 protein** abundance with enhanced antioxidant capacity.
- Estrogen directly upregulates SOD2 → lower oxidative damage in premenopausal females.
- SOD2 Ala16Val: prostate/lung signals stronger in males; breast null overall (26-study n=38,008 null) — do not claim stronger female breast association.
- Post-menopausal decline in SIRT3 → reduced SOD2 deacetylation → accelerated female cardiac aging (inferred).

### Thioredoxin-1 — Male-Biased Lifespan Extension

**Vault Content:** Male Trx1-Tg mice extend early lifespan only (no max extension); females show no significant extension. Chronic overexpression increases lymphoma risk (Thioredoxin-1.md, lines 98–102; Pérez et al. *J Gerontol A* 2011).

**Assessment:** Adequately covered. The bidirectional Trx1 ↔ estrogen receptor redox modulation (line 79) is present but under-emphasized.

### 6. CD38 Inhibitor 78c — Sex-Specific Efficacy/Toxicity

- Males median +17%/max +14% (pooled max +9%); females no significant benefit with excess non-fatal euthanasias (Peclat et al., *Aging Cell* 2022:e13589, PMID 35263032; CD38 inhibitor 78c.md, lines 32–39). 78c preserves/raises NAD+ (not depletes).

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
| **Caspase-8 activation** | Markedly greater; nuclear translocation XX-predominant (Sharma model; Liu found increase in both, female-predominant) | Lower; no/weak nuclear translocation | Sharma et al., *ASN Neuro* 2011 |
| **Cytochrome C release** | Earlier; more robust (exact 30 min vs 1 hr needs primary page check) | Delayed | Sharma et al., *ASN Neuro* 2011 |
| **AIF translocation** | Delayed/minimal | Earlier; robust (by ~1 hr in Sharma; exact 30-min delta unverified) | Sharma et al., *ASN Neuro* 2011 |
| **Bcl-2 expression** | Higher with E2 support (OVX+E2 vs OVX-oil design; not intact F vs M %) | Lower (adult cardiac/post-MI context M lower) | Dubal et al., *J Neurosci* 1999 (PMID 10414967) |
| **Bax expression** | Higher in female SDN-POA/MPNc developmentally (F>M, with higher caspase-3); lower in adult female heart post-MI | Higher in adult male heart post-MI; lower in male SDN-POA developmentally | Tsukahara et al., *J Neurobiol* 2006 (SDN context F>M); Biondi-Zoccai et al., *Heart* 2005 (adult cardiac M>F) |
| **PARP-1 inhibition** | Exacerbates injury (protective in females) | Protective (reduces infarct) | McCullough et al., 2005 |
| **Post-MI apoptosis** | 2.6% apoptotic index | 25.9% (10× higher) | Biondi-Zoccai/Abbate et al., *Heart* 2005 |

### Mechanism: The X/Y Death-Pathway Divergence

- **XX neurons**: Mitochondrial cytochrome C → apoptosome → caspase-9 → caspase-3; caspase-8 also activated and translocates to nucleus to cleave PARP-2.
- **XY neurons**: PARP-1 overactivation → NAD+ depletion → energy failure → AIF release from mitochondria → nuclear translocation → large-scale (50-kbp) DNA fragmentation (caspase-independent).
- **Bax KO reduces/abolishes overall-number sex differences** in BNSTp/AVPV (Forger et al., *PNAS* 2004; TH+ AVPV dopaminergic dimorphism remains). **Bcl-2 overexpression reduces** sex differences (Zup et al., *J Neurosci* 2003; title says reduces, TH+ exception).

### Sex Differences in p53 Regulation

- Estrogen bidirectionally crosstalks with p53 (transcriptional activation + physical sequestration/inhibition of pro-apoptotic function); specific count of ERα elements needs primary citation (prior “4 ERα elements / Desai Cells 2025” unverified).
- **Testosterone reduces p-p53 in C2C12 oxidative-stress model** via FoxO3a modulation (Pronsato et al., *Steroids* 2017) — narrow in vitro finding, do not generalize systemically.
- **X-linked miR-504** (Xq26.3) targets TP53 3'-UTR (Hu *Mol Cell* 2010) — female dosage advantage via escapees is hypothesis, no evidence miR-504 escapes XCI.
- Higher population frequency of TP53-mutant cancers in males across 12/13 non-reproductive types (Haupt et al., *Nat Commun* 2019) — driven by incidence + per-tumor rate.

### Sex-Specific Bcl-2 Family

- Estrogen upregulates **Bcl-2** (neuroprotection): E2 prevents injury-induced bcl-2 downregulation in OVX females (Dubal et al., *J Neurosci* 1999, PMID 10414967; Alkayed et al., 2001). No intact female-vs-male % — prior “>60% higher” removed.
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
| **Female mice carry higher p16+ burden** (especially liver) and derive **most benefit from p16+ cell clearance** | p16-3MR ablation enhanced grip strength, skin regeneration, liver repair **with female-specific benefit** | *Adv Sci* 2025-online/2026-issue (PMID 41168880) |
| p16+ and p21+ cells are **distinct non-overlapping subpopulations** (sex-to-arm mapping is inference, not tested) | Sex differences may reflect which senescence arm is dominant (hypothesis: females p16; males p53/p21) | Chandra et al., *EMBO J* 2025 (PMID 41162753; prior “Admas” author name corrected) |
| Males reach inverted CD4:CD8 ratio earlier; females show greater overall immune remodeling | Faster male naive T-cell exhaustion; female autoimmunity shift | Sopena-Rios et al., *Nature Aging* 2026 |

### SASP Composition

- Sex and BMI significantly influence SASP factor levels; 17/24 SASP factors correlate with age after adjustment for sex+BMI, GDF15 top age/frailty marker (Schafer et al., *JCI Insight* 2020) — GDF15 is covariate effect, no male/female direction.
- **Estrogen suppresses NF-κB–driven SASP** via ERβ: enhances IκBα expression and reduces p65 binding (general estrogen–NF-κB biology; exact Giroux 2012 mapping unverified).
- Reported higher SASP index in males with depression (J Gerontol A, 2025 — needs PMID/verification).

### cGAS–STING Pathway

- **cGAS/STING activity higher in aged males in diabetic kidney rat model**; driven by lower mtTFA and TREX1 in males (Khedr/Dissanayake et al., *JCI Insight* 2024 — kidney T2DN rats, not generic aging).
- **Estrogen represses STING transcription** via ERα + HDAC3 binding to STING promoter (Chen et al., *Cancers* 2022 endometrial cells; restated by *Front Immunol* 2024 review — extrapolation to aging).

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
- Males show **higher basal Beclin-1/LC3** in cardiac ventricles (Campesi et al., *Life Sci* 2013; prior Oliván 2014 studied spinal cord/muscle, not heart).
- **Estrogen is bidirectional**: suppresses autophagy in ischemic neurons (via mTOR-ULK) but promotes prosurvival autophagy in ER+ breast cancer (driving antiestrogen resistance).

### mTORC1: Sex-, Muscle-, and Fed-State–Dependent

- mTORC1 activation (p70S6K1): **reported higher in males when fasted, higher in females when fed** (*Am J Physiol Regul Integr* 2024 — direction needs full-text check; Ballesteros 2016 found opposite fasted F>M in liver/heart).
- **Female cardiac mTOR signaling is ERβ-specified**; males maintain both mTORC1/mTORC2 (Gürgen, *Hypertension* 2013).
- KRAS-mutant pancreatic cancer androgen–AR→mTORC1 male-specific claim (Gökduman, 2023 — unverified, needs primary).

### AMPK: Male-Biased Hepatic Activation

- Hepatic AMPK induction under fructose/MASLD is **~3-fold higher in males**; female protection tied to estrogen → AMPK activation (Spruss et al. 2012; Yang 2022).

### Rapamycin: Females Get Greater Lifespan Extension

- **Females show larger relative lifespan extension** from rapamycin (replicated across 3 ITP cohorts), partly via higher blood drug levels (Miller, *Aging Cell* 2014; Harrison, *Nature* 2009).
- Dosing regimen matters: 3-month late-life (20–23 mo) transient exposure benefits **males only** (Strong, *Aging Cell* 2020); Bitto *eLife* 2016 3-mo high-dose at 20–21 mo benefited both (strain/dose-dependent).

### Caloric Restriction: Males Benefit More

- ~96.6% mouse / 95.7% human CR studies ignore sex; where studied, **young males get greater metabolic benefit** (Suchacki et al., *eLife* 2023).
- Historic McCay 1935 used mixed-sex rats (pioneer; modern sex-stratified CR came decades later).
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
| Men have higher whole-blood NAD+ than women (34.5 vs 31.3 μmol/L) but men **decline with age** while women's levels **fluctuate without monotonic decline** (whole-blood compartment) | Sex hormones modulate NAD+ homeostasis; PARP association | Yang et al. (Guan senior), *Front Endocrinol* 2022 |
| Women have higher NAD+/NADH **redox ratios** (1.33 vs 1.09; plasma compartment, n=205) ; this narrows with biological age | Estrogen–ERα–PARP-1 axis (hypothesis) | Schwarzmann et al., *Biosci Rep* 2021 |
| PARP activity increases with age in **male skin but NOT female skin** when including newborns (r=−0.639 PARP-NAD+); adults-only n.s.; tissue NAD+ declines in both sexes | Estrogen stabilization hypothesis, not direct proof | Massudi/Grant/Braidy et al., *PLoS ONE* 2012 (prior “Maver” corrected) |

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

- Estrogen inhibits NF-κB through ERβ (enhances IκBα, reduces p65 binding — separate literature) and through MyD88/methylated ER-α cytoplasmic control of p65-S468 (IκB degradation unaffected).
- The MyD88/methylated ER-α complex (required for NF-κB transcriptional activity) is found in **35/35 testicular samples** and **3/11 post-menopausal ovaries** but **0/29 pre-menopausal ovaries** — demonstrating estrogen's direct interruption of NF-κB activation in situ (El Sabeh et al., *J Inflamm Res* 2021; prior “Giroux 2012” corrected).

### Inflammatory Cytokine Profiles

- Women mount **stronger in vivo** pro-inflammatory responses to endotoxin: +45% TNF-α, +43% IL-6 vs men (Engler et al., 2025 medRxiv LPS study; prior “2017” corrected).
- **Resting basal**: prior exact pg/mL values (IL-6 42 vs 15, IL-1β 45 vs 5, TNF-α 90 vs 25) removed as implausible/unsourced — normal resting IL-6 ~1–2 pg/mL; direction (higher basal in men) is qualitative only.
- Hormonal contraceptive use amplifies women's pro-inflammatory response (+60% TNF-α in HC+ subgroup, 2025 preprint).

### The Female Autoimmune Paradox

Women account for **~78–80% of autoimmune disease cases** globally:
1. **TLR7 dose effect**: escapes X-inactivation in B/monocytes → ~2× TLR7 protein → stronger antiviral responses AND lupus susceptibility (Souyris *Sci Immunol* 2018; exact “25%” needs citation).
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
- Men show faster attrition (exact ~43 vs ~26 bp/yr needs re-source; not in Gardner 2014 which found no age interaction).
- Meta-analysis of 36 cohorts (36,230 participants): standardized sex difference 0.090 (95% CI 0.015–0.166) (Gardner et al., 2014).

### Mechanisms for Female Advantage

| Mechanism | Explanation | Citation |
|---|---|---|
| **DKC1 biallelic expression** | Before X-inactivation, female embryo cells express dyskerin (telomerase component) from BOTH X alleles → higher telomerase → elongated telomeres before implantation (hypothesis) | Lansdorp, *Aging Cell* 2022 |
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

Six X-linked genes (**ATRX, CNKSR2, DDX3X, KDM5C, KDM6A, MAGEC3**) are loss-of-function mutated more often in males across 21 tumor types (vs 0/18,055 autosomal+PAR genes). Female **biallelic expression** protects against single-hit inactivation (Dunford et al., *Nature Genetics* 2017; prior “18,053” corrected).

### KRAS: Sex-Specific Mutation Patterns (needs primary sources — hold from firm claims)

- NSCLC: KRAS **G12C reported enriched in females** (65% of G12C are women — unverified, needs citation); males have more STK11 & TP53 co-alterations (poor immunotherapy prognosis — needs citation).
- mCRC: females have higher KRAS mutation frequency (48.8% vs 42.6%, p=0.002 — unverified, needs citation).

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
| **SIRT6** | Lifespan ↑14.5%/9.9% median via IGF-1↓ (Kanfi 2012) | — | Roichman 2021 extends both, male-stronger; KO lethal | SIRT6→IGF-1↓→IIS↓ (Kanfi); NAD+/gluconeogenesis (Roichman) |
| **SIRT3** | Intron 5 VNTR ↔ male longevity (Bellizzi 2005) | TRELONG SNPs female-significant; higher protein/mRNA (pilot, preliminary) | Deacetylates MnSOD | E2↔ERα→SIRT3 transcription (tissue-dependent) |
| **SIRT1** | — | Higher protein with age; stronger FOXO3 associations | BRASTO extends both ~11% | E2↔SIRT1/ER crosstalk, tissue-dependent (not unidirectional) |
| **MnSOD/SOD2** | — | Higher protein; estrogen-dependent; post-menopausal decline (inferred) | Core SIRT3 substrate | E2→SOD2 expression; Ala16Val male prostate/lung signal; breast null overall |
| **Trx1** | Early-life extension only, no max (Pérez 2011) | No lifespan extension | Modulates ER redox | Male-biased; cancer risk |
| **Caspases** | Lower activation; PARP-1/AIF necrosis dominant | Higher activation; caspase-dependent apoptosis dominant | — | XX vs XY death-pathway divergence (cell-autonomous trend) |
| **p53** | Higher population frequency of TP53-mutant cancer; testosterone ↓p-p53 in C2C12 oxidative model only | Estrogen bidirectionally crosstalks (activation + sequestration) | Central tumor suppressor | E2↔p53 crosstalk; miR-504/X-dosage is hypothesis |
| **Bcl-2** | Lower expression (adult cardiac/post-MI context) | Higher (E2-supported; OVX+E2 vs OVX-oil design) | — | E2→Bcl-2 transcription |
| **Senescence** | More senescent cells early life | Higher p16+ burden; benefit most from p16+ clearance | p16 and p21 are distinct subtypes (Chandra et al. EMBO J 2025); sex-to-arm mapping is inference | Sex-hormone–associated senescence arm (hypothesis) |
| **SASP** | Reported higher SASP index in males with depression (needs PMID) ; earlier inflammaging | Estrogen suppresses NF-κB–driven SASP | Sex/BMI covariate effect (e.g. GDF15 top age marker, Schafer 2020) | E2→NF-κB suppression |
| **cGAS-STING** | Higher activity in aged males in diabetic kidney rats; lower mtTFA/TREX1 | Estrogen represses STING via ERα-HDAC3 (Cancers 2022 cells; Front Immunol 2024 review) | — | E2→STING promoter deacetylation (extrapolated to aging) |
| **Autophagy** | Higher basal Beclin-1/LC3; canonical autophagy (cardiac: Campesi 2013) | Beclin-1-independent (ATG7) route; estrogen context-dependent | Both use autophagy | Sex-specific death-pathway coupling |
| **mTORC1** | Reported higher p70S6K1 when fasted (needs full-text check) | Reported higher p70S6K1 when fed; ERβ-specified in heart | Central growth regulator | Fed-state and sex-dependent (direction unverified) |
| **Rapamycin** | 3-month late-life (20–23 mo) transient benefits males only | Greater overall lifespan extension | Extends both (Bitto 3-mo high-dose benefits both; strain/dose-dependent) | Higher blood levels in females |
| **Caloric Restriction** | Greater metabolic benefit (young); lifespan extension | Less studied; aged sexes respond similarly | — | McCay 1935 mixed-sex pioneer; 96.6% mouse/95.7% human CR ignore sex |
| **NAD+** | Higher whole-blood baseline but declines with age; PARP-associated | Higher NAD+/NADH ratio; no monotonic blood decline; CD38 in ovary | Tissue NAD+ declines in both sexes | E2→PARP-1 stabilization is hypothesis |
| **NF-κB** | Higher basal activity | Estrogen suppresses via ERβ→IκBα↑ + ↓p65 binding (separate literature from MyD88/ER-α) | Master inflammatory TF | E2→NF-κB inhibition |
| **Inflammation** | Higher basal cytokines (qualitative); earlier inflammaging | Stronger in vivo LPS responses; delayed inflammaging; autoimmune risk (~80% female) | — | TLR7 escape + Xist + estrogen dose (not single dosage) |
| **Telomeres** | Shorter; faster attrition (exact bp/yr needs re-source; not Gardner 2014) | Longer; slower attrition; DKC1 advantage (hypothesized) | — | DKC1 biallelic (hypothesis); E2→TERT |
| **Cancer** | Higher incidence (most types); more TP53-mutant cancers | X-linked tumor suppressor advantage; ERβ protective in lung/GBM/CRC | EXITS framework (6 X vs 0/18,055 autosomal+PAR) | X-chromosome biallelic protection |
| **CD38 inhibitor 78c** | Males median +17%/max +14% (Peclat Aging Cell 2022) | No significant benefit; excess non-fatal euthanasias | NAD+ preservation/↑ | Sex-specific efficacy/toxicity |

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
| **SIRT3** | Missing estrogen mechanism | Add E2→ERα→SIRT3 expression/mitochondrial targeting; female translational efficiency; post-menopausal decline | ✅ Added to [[SIRT3]] (E₂→ER→SIRT3 + hub; ~30% pilot caveat; post-menopausal inferred caveat; SOD2-K68-Ac breast-cancer exception per Pinterić 2020) |

### Priority 2 — Important Gaps (✅ Completed 2026-09-02)

| Entity | Gap | Recommendation | Status |
|--------|-----|----------------|--------|
| **Senescence** | Zero sex discussion | Add section on p16 vs p21 sex-specific arm dominance; female p16+ clearance benefit; male earlier senescence onset | ✅ Added to [[Senescence]] (+ [[Cellular Senescence]]) |
| **Senolytics** | Zero sex discussion | Add sex-dependent efficacy note: D+Q female-biased benefit; fisetin male-biased; no navitoclax sex data | ✅ Added to [[Senolytics]] (+ [[Senolytic]]) |
| **NF-κB** | Zero sex discussion | Add section on estrogen–ERβ–NF-κB axis; IκBα upregulation; post-menopausal NF-κB derepression | ✅ Added to [[NF-κB]] |
| **Telomere** | Zero sex discussion | Add "Sex Differences" section: female advantage mechanisms (DKC1, E2→TERT, antioxidant), attrition rates, paradox in premenopausal women | ✅ Added to [[Telomere]] (+ [[Telomere Attrition]]) |
| **Autophagy** | Zero sex discussion | Add section on sex-specific death-pathway coupling (males: Beclin-1/canonical; females: ATG7/alternative); estrogen bidirectionality | ✅ Added to [[Autophagy]] |
| **mTORC1** | Zero sex discussion | Add note on sex-specific activation patterns; ERβ specification in female heart; rapamycin sex differences | ✅ Added to [[mTORC1]] |
| **AMPK** | Zero sex discussion | Add note on male-biased hepatic activation; estrogen–AMPK in females | ✅ Added to [[AMPK]] |
| **SIRT6** | Missing Roichman 2021 | Add both-sex benefit (males still stronger); Finnish male-specific longevity polymorphism | ✅ Added to [[SIRT6]] |
| **Bcl-2** | Zero sex discussion | Add estrogen–Bcl-2 neuroprotection axis; sex-specific Bcl-2/Bax in disease contexts | ✅ Added to [[Bcl-2]] |
| **Breast Cancer** | Sex discussed only in passing | Elaborate on ERα biology, sex-specific treatment resistance, subtype-specific sex differences | ✅ Added to [[Breast Cancer]] |
| **Prostate Cancer** | Sex discussed only in passing | Add note on AR signaling as paradigm of male-specific cancer biology; cross-link with androgen–mTORC1 | ✅ Added to [[Prostate Cancer]] |

### Priority 3 — Cross-Links and Context ✅ Completed 2026-09-02

| Action | Details | Status |
|--------|---------|--------|
| **Create estrogen–sirtuin cross-link** | Connect estrogen→SIRT1/3/6 axis across SIRT1.md, SIRT3.md, SIRT6.md | ✅ Added Sex Differences section to [[SIRT1]] (E₂→ER→SIRT1 hub + estrogen cliff); added reciprocal cross-link to [[SIRT3]]; [[SIRT6]] already linked |
| **Create sex-specific cell death cross-link** | Connect Apoptosis.md ↔ Caspases.md ↔ p53.md ↔ Bcl-2 family notes with unified sex-difference framework | ✅ [[Apoptosis]] ↔ [[Caspases]] ↔ [[p53]] ↔ [[Bcl-2]] unified XX-caspase / XY-PARP-1-AIF framework cross-linked on all four |
| **Cross-link NAD+ ↔ PARP-1 ↔ sex** | Connect NAD+.md ↔ Telomere.md ↔ Apoptosis.md with PARP-1 sex-divergence | ✅ [[NAD+]] ↔ [[Telomere]] ↔ [[Apoptosis]] via male PARP-driven NAD+ consumption / female estrogen-stabilized PARP-1 |
| **Cross-link NF-κB ↔ SASP ↔ estrogen** | Connect NF-κB.md ↔ SASP.md ↔ Inflammaging.md with estrogen suppression axis | ✅ Added Sex Differences section to [[Inflammaging]] (estrogen→NF-κB/cGAS-STING suppression, SASP, estrogen cliff); [[NF-κB]]/[[SASP]] already cross-linked |
| **Cross-link cGAS-STING ↔ SASP ↔ sex** | Connect cGAS-STING in senescence notes with estrogen–STING suppression | ✅ Added Sex Differences section to [[STING]] (ERα–HDAC3 suppression, post-menopausal derepression) + cross-link note to [[cGAS]] |
| **Add post-menopausal acceleration framework** | The "estrogen cliff" concept should be cross-referenced across all affected notes | ✅ Cross-referenced across [[SIRT1]], [[SIRT3]], [[NAD+]], [[NF-κB]], [[SASP]], [[Inflammaging]], [[STING]], [[Telomere]], [[Bcl-2]] |

---

## Part XII: Sources Referenced

### Vault Documents
- [[_document_ - Sirtuins Guardians of Mammalian Healthspan|Sirtuins: Guardians of Mammalian Healthspan (Giblin et al., 2014)]]
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in Health and Disease (Wu et al., 2022)]]
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases|Roles of SIRT3 in Aging (You & Wang, 2025)]]

### Vault Entity Notes
- [[SIRT1]], [[SIRT3]], [[SIRT6]], [[SIRT4]], [[MnSOD]], [[Thioredoxin-1]], [[Thioredoxin]], [[CD38 inhibitor 78c]]

### External Research — Estrogen–Sirtuin Hub (SIRT3/SIRT1 verification)
- **Pinterić et al.** Sirt3 exerts its tumor-suppressive role by increasing p53 and attenuating response to estrogen in MCF-7 cells. *Antioxidants.* 2020;9:294. (SIRT3 overexpression desensitizes ER+ MCF-7 to E₂, disrupts ERα–p53, ↓Ac-SOD2; E₂ only partially rescues.)
- **Papa & Germain.** Are the estrogen receptor and SIRT3 axes of the mitochondrial UPRmt compensatory? *PMC8680335* perspective. (ERα axis compensates age-related SIRT3 loss; SIRT3-KO mice develop ERα+ mammary tumors.)
- **Human cardiac sex differences:** female-specific ↓Sirt1/Sirt3/SOD2 + NF-κB shift in aged (50–68 yr) vs young (17–40 yr) female ventricles; no change in males. *Aging.* 2019 (PMC6503880).
- **GPER–SIRT1/3:** G-1 reverses OVX-induced cardiac Sirt1/3 loss, restores SOD, improves LV function in OVX+T2D rats. *PLOS ONE.* 2023 (G-1/OVX-T2D model).
- **Elangovan et al.** SIRT1 represses estrogen-signaling, ligand-independent ERα-mediated transcription and proliferation. *J Endocrinol.* 2013;216:273. (SIRT1 inhibition → ER-dependent transcription ± estrogen.)
- **Yao et al.** Inhibition of SIRT1 suppresses ERα expression via basal promoter complexes. *Carcinogenesis.* 2010;31:382. (Opposite-direction context for bidirectionality.)
- **Xu et al.** Sirt1 coordinates with ERα to regulate autophagy and adiposity (E₂ induces Sirt1; positive feedback loop). *Cell Death Discov.* 2021.
- **SIRT1–estrogen cardioprotection:** E₂→SIRT1→AMPK blocks AngII hypertrophy/apoptosis ER/SIRT1-dependently (ICI + niacinamide block). *Oxid Med Cell Longev.* 2014.
- **SOD2-K68-Ac readout:** SIRT3 deacetylates SOD2-K68; SIRT3 inhibition (jionoside B1, Kd ~15.8 µM) raises K68-Ac → ROS/apoptosis, sensitizes TNBC to cisplatin. *Biomolecules.* 2026.
- [[Apoptosis]], [[Caspases]], [[p53]], [[Intrinsic Pathway]], [[Extrinsic Pathway]], [[Apoptosome]], [[DISC]]
- [[Senescence]], [[SASP]], [[Senolytic]], [[Senolytics]], [[Cellular Senescence]], [[Immunosenescence]]
- [[Autophagy]], [[mTOR]], [[mTORC1]], [[Beclin1]], [[AMPK]]
- [[NAD+]], [[NF-κB]], [[TNFα]], [[Telomere]], [[NRF2]]
- [[Hallmarks of Cancer]], [[Breast Cancer]], [[Prostate Cancer]], [[KRAS]]

### External Research — Caspases & Apoptosis
- **Liu F, Li Z, Li J, Siegel C, Yuan R, McCullough LD.** Sex differences in caspase activation after experimentally induced cerebral ischemia. *Stroke.* 2009;40(5):1842–1848. doi: 10.1161/STROKEAHA.108.538686. PMID: 19265047. (Females show higher/earlier caspase activation; pan-caspase inhibition protects females only.)
- **McCullough LD, Zeng Z, Blizzard KK, Debchoudhury I, Hurn PD.** Ischemic nitric oxide and poly(ADP-ribose) polymerase-1 in cerebral ischemia: male toxicity, female protection. *J Cereb Blood Flow Metab.* 2005;25(4):502–512. doi: 10.1038/sj.jcbfm.9600059. PMID: 15689952. (PARP-1 deletion protects males, exacerbates injury in females.)
- **McCullough LD, et al.** Sex differences in the response to PARP-1 deletion and caspase inhibition after stroke. *Stroke.* 2011;42(3):739–745. PMID: 21311064. PMC3066270. (Pan-caspase inhibitor Q-VD-OPh reduces infarct in females only.)
- **Yuan M, Siegel C, Zeng Z, Li J, Liu F, McCullough LD.** Sex differences in the response to activation of the poly(ADP-ribose) polymerase pathway after experimental stroke. *Exp Neurol.* 2009;217(1):210–218. doi: 10.1016/j.expneurol.2009.02.012. (PARP-1 pathway drives male necrotic death.)
- **Sharma J, Nelluru G, Wilson MA, Johnston MV, Hossain MA.** Sex-specific activation of cell death signalling pathways in cerebellar granule neurons exposed to oxygen glucose deprivation followed by reoxygenation. *ASN Neuro.* 2011;3(2):85–97. doi: 10.1042/AN20100032. PMID: 21382016. (XX: delayed caspase-8/3 with nuclear translocation of casp-8; XY: AIF release/PARP-1-dependent.)
- **Biondi-Zoccai GG, Abbate A, Bussani R, Camilot D, De Giorgio F, Marino M-P, Silvestri F, Baldi F, Biasucci LM, Baldi A.** Reduced post-infarction myocardial apoptosis in women: a clue to their different clinical course? *Heart.* 2005;91(1):99–101. doi: 10.1136/hrt.2003.018754. (Human autopsy: peri-infarct AI ~10× higher in men [25.9%] vs women [2.6%]; higher cardiac Bax in men. Note: first author is Biondi-Zoccai, not Abbate.)
- **Dubal DB, Shughrue PJ, Wilson ME, Merchenthaler I, Wise PM.** Estradiol modulates bcl-2 in cerebral ischemia: a potential contribution to neuroprotection. *J Neurosci.* 1999;19(15):6385–6393. PMID: 10414977. (Estrogen-driven Bcl-2 elevation → female apoptotic resistance.)
- **Forger NG, Rosen GJ, Waters EM, Jacob D, Simerly RB, de Vries GJ.** Deletion of Bax eliminates sex differences in the mouse forebrain. *Proc Natl Acad Sci USA.* 2004;101(37):13666–13671. doi: 10.1073/pnas.0404644101. PMID: 15342910. (Bax KO abolishes sex differences in neuron number.)
- **Zup SL, Carrier H, Waters EM, Tabor A, Bengston L, Rosen GJ, Simerly RB, Forger NG.** Overexpression of Bcl-2 reduces sex differences in neuron number in the brain and spinal cord. *J Neurosci.* 2003;23(6):2357–2362. doi: 10.1523/JNEUROSCI.23-06-02357.2003. (Bcl-2 overexpression also eliminates sex differences in cell number.)
- **Desai S et al.** (2025) *Cells* 14(5):363. Sex disparities in p53 regulation.
- **Li H, Pin S, Zeng Z, Wang MM, Andreasson KA, McCullough LD.** Sex differences in cell death. *Ann Neurol.* 2005;58(2):317–321. (Early formal statement of the XX-caspase / XY-PARP-1-AIF paradigm.)
- **Tang et al.** Sex differences during ischemic stroke. *Front Mol Neurosci.* 2022;15:860959. (Modern review; neurovascular-unit + cell-death dimorphism.)
- **Du L et al.** Sex differences in cell death pathways. Multiple publications, 2004–2011.

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
