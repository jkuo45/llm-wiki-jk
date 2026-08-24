---
title: Autophagy in Companion Mammals (Dogs/Cats) and Longevity
description: Research synthesis of autophagy–aging biology in domesticated dogs and cats, translational interventions, TRIAD trial context, evidence gaps, and proposed experimental roadmap
created: 2026-07-23
updated: 2026-08-22
source: Wiki notes (autophagy/) + PubMed companion-animal literature + research-scientist synthesis
tags:
  - autophagy
  - longevity
  - canine
  - feline
  - companion-animals
  - rapamycin
  - caloric-restriction
  - mtor
  - triad
  - dog-aging-project
---

# Autophagy in Mammals (Dogs/Cats) and Longevity

**Task output:** `22_JULY_2026 06:58 PM PDT`  
**Scope:** Mechanistic link between [[Autophagy]] and longevity; species-specific evidence in companion dogs and cats; translational interventions; open questions and experimental roadmap.

---

## Executive Verdict

Autophagy is a **necessary mediator** of multiple longevity interventions across yeast → worms → flies → mice. Companion dogs are now the strongest non-laboratory mammalian system in which this hypothesis is being tested at **lifespan/healthspan scale** (Dog Aging Project; TRIAD rapamycin RCT). Direct feline autophagy–longevity data remain sparse. The practical claim is not “more autophagy always equals longer life,” but: **age-associated decline in competent autophagic flux drives tissue failure; restoring flux (not merely increasing LC3-II) is a plausible healthspan lever in dogs and, by homology, cats.**

---

## Part 1 — Mechanistic Core (from wiki + established biology)

### What autophagy does that matters for aging

[[Autophagy]] delivers cytoplasmic cargo to [[Lysosome|lysosomes]] for degradation and recycling. Types relevant to aging:

| Type | Cargo / route | Aging relevance |
|---|---|---|
| [[Macroautophagy]] | Bulk / selective cargo via [[Autophagosome]] | Proteostasis, organelle quality control |
| [[Mitophagy]] | Damaged mitochondria ([[PINK1]]/Parkin, BNIP3) | Limits ROS, apoptosis leak, mtDNA stress |
| [[Chaperone-Mediated Autophagy]] | KFERQ-motif proteins via [[LAMP-2A]] | Declines with age in liver; CMA rescue improves proteostasis |
| [[Selective Autophagy]] | Aggregates, pathogens, CDKIs via [[p62]] | Senescence control, inflammation |

**Initiation logic (conserved mammals including dog/cat):**

```
Nutrient/growth signals → mTORC1 ON  → ULK1 repressed → autophagy OFF
Energy stress (↑AMP/ATP) → AMPK ON  → ULK1 active + mTORC1 OFF → autophagy ON
NAD+ / SIRT1 → deacetylation of Atg proteins, FOXO, TFEB → transcriptional + post-translational boost
```

Wiki hubs: [[Autophagy]], [[mTORC1]], [[AMPK]], [[SIRT1]], [[TFEB]], [[Beclin1]], [[LC3]], [[p62]], [[Autophagic Flux]].

### Causal chain: autophagy ↔ longevity

From Rubinsztein et al. (Cell 2011) and subsequent work consolidated in vault notes:

1. **Genetic loss of ATG genes** shortens lifespan (yeast, *C. elegans*, *Drosophila*) and produces aging-like tissue phenotypes in tissue-specific mouse KOs (protein aggregates, lipofuscin, dysfunctional mitochondria).
2. **Longevity interventions require autophagy** — life-extension by caloric restriction, rapamycin, spermidine, resveratrol/SIRT1, and reduced IIS is abolished when autophagy is blocked.
3. **Age reduces autophagic capacity** — lower ATG expression, impaired lysosomal acidification, CMA decline (LAMP-2A), epigenetic repression of autophagy genes.

> [!IMPORTANT]
> **Flux, not snapshots**
> Elevated LC3-II or Beclin1 can mean **induction** *or* **block of clearance**. Longevity-relevant phenotype is **completed flux** (cargo → lysosome → recycling), ideally with lower p62 when flux is competent.

---

## Part 2 — Why companion dogs (and cats) matter

### Translational advantages of the dog

| Feature | Implication |
|---|---|
| Shared environment / exposome | Same pollutants, lifestyle, pathogens as owners |
| Extreme size/breed genetics | Natural variance in lifespan (toy vs giant) |
| Short lifespan vs human | Lifespan trials finish in years, not decades |
| Spontaneous age diseases | MMVD, CKD, cognitive dysfunction, cancer, sarcopenia |
| Epigenetic clocks | Canine DNA methylation clocks track biological age |

Cats share indoor exposome and spontaneous age disease (CKD, hyperthyroidism, cognitive dysfunction) but have **far fewer autophagy-focused studies**.

### Dog as geroscience model (key citations)

- Creevy et al., *Cold Spring Harb Perspect Med* 2016 — companion dog as longevity-dividend model (PMID 26729759)
- Kaeberlein, Creevy, Promislow — Dog Aging Project framework (PMID 27143112)
- Horvath et al. 2022 — DNA methylation clocks for dogs and humans (PMID 35580182)
- Coleman et al. 2025 — **TRIAD** trial design (PMID 39951177)

---

## Part 3 — Canine evidence: autophagy in aging tissues

### Skeletal muscle / sarcopenia

**Pagano et al., *Vet J* 2015 (PMID 26257260)**  
Geriatric dog muscle vs young:

- Atrophy, sarcoplasmic vacuolization, mitochondrial alterations
- ↑ Beclin1, ↑ LC3-II; ↓ p62 in 80% of old samples
- Authors interpret **enhanced autophagy** as a contributor to age-related muscle atrophy

> [!WARNING]
> **Interpretation nuance**
> Lower p62 + higher LC3-II is consistent with **active flux**, but chronic hyperactivation of catabolism without anabolic compensation can **drive** sarcopenia. Longevity goal in muscle is **balanced** quality control (mitophagy of damaged organelles) without unchecked bulk protein loss — ideally paired with resistance-type loading and adequate amino acids (esp. leucine).

### Cardiac valve aging — MMVD (high clinical impact)

**Tang et al., *Autophagy* 2025 (PMID 39988732)** — landmark canine/human-relevant mechanism paper:

- Myxomatous mitral valve disease (MMVD) = major age-dependent valve disease in dogs (and humans)
- Senescent activated valve interstitial cells (aVICs) show **impaired autophagic flux** and immature autophagosomes
- mTOR-dependent autophagy induction (rapamycin, torin-1) **attenuates senescence**, lowers CDKN2A/p16 and CDKN1A/p21, reduces SASP
- ATG7/ATG3 overexpression restores flux and reverses senescent phenotype; ATG deficiency induces it
- **Novel mechanism:** SQSTM1/p62-mediated selective autophagy **directly degrades p16 and p21** (independent of UPS)

**Translational punchline:** In canine MMVD cells, restoring autophagy is **anti-senescent**, not merely cytoprotective. This is a direct molecular bridge from mTOR inhibition → autophagy → CDKI clearance → less SASP.

Related: Tang et al. 2023 (*Cell Prolif*, PMID 36869852) — TGF-β → PI3K/AKT/mTOR drives myofibroblast transition and senescence in canine MMVD VICs; mTOR antagonism reverses phenotype.

### Mesenchymal stem cells / regenerative aging

**Deng et al., *Int J Mol Sci* 2021 (PMID 34768788)**  
Canine bone marrow MSCs:

- Passaging induces senescence (p16/p21, SA-β-gal, TNF-α/IL-6, loss of SOX2/Nanog)
- **Curcumin** (≈1 µM) delays senescence **via autophagy activation** (↑LC3-II, ULK1, ATG7/12; ↓p62)
- Rapamycin phenocopies; 3-MA worsens senescence; curcumin rescues 3-MA block

**Agyapong et al., *PLoS One* 2025 (PMID 40700373)**  
Aged canine lung MSCs: reduced proliferative capacity, **reduced autophagy**, reduced migration, increased ROS — quiescence modulates age phenotypes.

### Other canine nodes

- Oleuropein aglycone — antioxidant/anti-ageing signals in canine skeletal muscle cells (PMID 38555794)
- Beclin1 overexpression in MDCK cells — reduces telomerase, enhances apoptosis (context-dependent dual role; PMID 33723159)

---

## Part 4 — Feline evidence (thin but directionally consistent)

PubMed-specific hits for *feline autophagy + aging* are scarce. What can be stated rigorously:

1. **Core machinery is conserved** — cats express the same mTOR/AMPK/ULK1/Beclin1/LC3/p62/TFEB axis; no reason to expect fundamentally different wiring.
2. **Species physiology differs** — obligate carnivore metabolism (high protein, limited carb handling), distinct CKD epidemiology, different body composition aging curves. Fasting/CR protocols validated in dogs **do not transfer 1:1** to cats without hepatic lipidosis risk assessment.
3. **Clinical aging syndromes** (CKD, cognitive dysfunction, osteoarthritis, cancer) are autophagy-plausible targets by homology to dog/mouse/human, but **direct flux measurements in aged cat tissues are largely missing**.
4. Companion animal nutrition literature (e.g. Hill, *Proc Nutr Soc* 2009) documents large survival effects of dietary restriction in dogs (Labrador CR ~+2 years; protein/P restriction doubles median survival in CKD contexts) — **feline CR longevity RCTs with autophagy endpoints do not exist at comparable rigor**.

> [!TIP]
> **Research gap ranking**
> Highest-value missing experiment: age-stratified autophagic flux (LC3 turnover ± bafilomycin, p62, TFEB localization, LAMP-2A) in cat kidney, heart, skeletal muscle, and brain — parallel to existing canine datasets.

---

## Part 5 — Longevity interventions in companion mammals

### Caloric / dietary restriction (strongest historical dog data)

- Labrador retriever lifelong food restriction: delayed osteoarthritis, **~1.8–2 year lifespan extension** (Kealy/Lawler lineage studies; summarized in companion-animal nutrition reviews).
- Mechanism (general mammalian, wiki-supported): CR → AMPK↑ / IGF-1↓ / mTORC1↓ / SIRT1↑ → autophagy + mitochondrial biogenesis + reduced inflammation.
- Autophagy is **required** for CR longevity in model organisms; dog tissue-level confirmation of flux during CR is incomplete but mechanistically expected.

**Practical canine notes:** Lean body condition score is one of the most evidence-backed “longevity drugs” available to owners. Avoid protein starvation in seniors — pair mild energy restriction with high-quality protein to protect muscle.

**Practical feline notes:** Aggressive fasting risks **hepatic lipidosis**. Prefer controlled portion reduction, high-protein adequacy, and gradual weight loss under veterinary supervision — not multi-day fasts.

### Rapamycin / mTOR inhibition — TRIAD

**Test of Rapamycin In Aging Dogs (TRIAD)** — Coleman et al., *Geroscience* 2025 (PMID 39951177):

- Parallel-group, double-masked, randomized, placebo-controlled, multicenter
- Healthy middle-aged dogs from Dog Aging Project
- Endpoints: **lifespan + healthspan metrics**
- First rigorous pharmacologic geroscience trial with lifespan endpoints **outside the lab, in any species**

**Mechanistic expectation (not yet TRIAD primary outcome):** intermittent low-dose rapamycin → mTORC1 partial inhibition → ULK1 de-repression → improved autophagic flux + immune/metabolic effects. Prior small canine cardiac studies suggested improved diastolic function with short-course rapamycin (pre-TRIAD literature; interpret cautiously).

**MMVD cell data (Tang 2025)** already show rapamycin/torin-1 reverse senescence via autophagy in canine valve cells — high biological plausibility that cardiac aging endpoints could move.

### Other autophagy-linked agents with canine data

| Agent | Canine signal | Mechanism (abbrev.) | Evidence level |
|---|---|---|---|
| Rapamycin / torin-1 | MMVD VICs; MSC senescence; TRIAD ongoing | mTORC1↓ → autophagy↑ | Strong mech. + ongoing RCT |
| Curcumin | cBMSC senescence rescue | Autophagy-dependent | In vitro |
| Oleuropein aglycone | Muscle cell anti-oxidative/age markers | Redox + possible autophagy crosstalk | In vitro |
| Spermidine | Strong model-organism longevity; arterial aging (wiki doc) | eIF5A/TFEB, HAT inhibition | Sparse companion-animal RCTs |
| Metformin | Theoretical AMPK→autophagy | Metabolic | Limited canine aging RCTs |
| Exercise | Expected AMPK/TFEB benefits | Multi-pathway | Clinical common sense; under-measured flux |

---

## Part 6 — Tissue-specific aging map (dogs)

| Tissue / syndrome | Autophagy status with age | Longevity-relevant outcome | Intervention signal |
|---|---|---|---|
| Skeletal muscle / sarcopenia | Markers ↑ but may be catabolic | Strength, frailty, mobility | Balanced flux + load + protein |
| Mitral valve (MMVD) | Flux **impaired** in senescent aVICs | Heart failure, mortality | Rapamycin restores flux, clears p16/p21 |
| MSCs (marrow, lung) | Flux/function ↓ | Repair capacity, inflammaging | Curcumin, rapamycin (in vitro) |
| Kidney | Age pathology described; flux data thin | CKD progression | CR / phosphate control; autophagy unmeasured |
| Brain (CCD) | Expected proteostasis failure | Cognition | Homology to AD/PD autophagy failure |
| Immune system | Expected decline (wiki: immune aging docs) | Infection, cancer | Autophagy inducers under study generally |

---

## Part 7 — Pharmacologist lens: high-potential combos for companion mammals

### Combo A — Intermittent mTORC1 inhibition + protein-timed refeeding (dogs)

1. **Rationale:** Rapamycin opens autophagy window; timed amino acids (esp. leucine around activity) support muscle protein synthesis without continuous mTORC1 hyperactivity. Positive loop: better mitochondria → less ROS → less senescence → less SASP.
2. **Agents:** Low-dose intermittent rapamycin (TRIAD-like) + resistance-type activity + adequate dietary protein.
3. **Potential:** Sarcopenia + cardiac aging + immune aging.
4. **Feasibility scores (1–10):** Plausibility 9 · Druggability 7 · Hormetic window 6 · Safety 5 (immunosuppression, dyslipidemia, delayed healing) · Translational 8 (TRIAD infrastructure) · Regulatory 6.
5. **Risks:** Over-suppression of mTORC2 with chronic daily dosing; infection; impaired wound healing. Prefer intermittent schedules; exclude dogs with active infection/neoplasia per protocol.
6. **Roadmap:** Secondary TRIAD analyses for LC3 turnover, p62, TFEB, frailty index, echocardiographic diastolic indices, epigenetic age.

### Combo B — AMPK/TFEB axis without chronic mTOR blockade (cats-first friendly)

1. **Rationale:** Cats poorly tolerate aggressive CR; need autophagy via AMPK (exercise, metformin-class if safe), TFEB activators (trehalose, spermidine-class), and lysosomal support without deep mTORC1 shutdown.
2. **Agents (hypothetical):** Controlled activity + high-protein weight management + spermidine or trehalose pilot ± carefully dosed metformin (vet PK required).
3. **Potential:** CKD, cognitive aging, obesity-related inflammation.
4. **Feasibility:** Plausibility 7 · Druggability 5 · Hormetic window 6 · Safety 5 (feline drug metabolism) · Translational 4 · Regulatory 3.
5. **Risks:** Hepatic lipidosis from fasting; unknown feline PK for many “longevity” nutraceuticals.
6. **Roadmap:** Establish feline flux baselines first; then 8–12 week nutraceutical pilots with renal panels + muscle mass + cognitive scores.

### Combo C — Senomorphic autophagy restoration in MMVD

1. **Rationale:** Tang 2025 — p62-selective autophagy degrades p16/p21. Pair mTOR inhibitor with mild mitochondrial hormesis (exercise, low-dose uncoupling research agents — **not** clinical yet) and TFEB support.
2. **Agents:** Rapamycin ± curcumin-class polyphenol (bioavailability-limited) ± exercise.
3. **Potential:** Delay MMVD progression in small-breed dogs.
4. **Feasibility:** Plausibility 8 · Druggability 6 · Safety 5 · Translational 7 (natural canine MMVD cohorts exist).
5. **Risks:** Context-dependent autophagy in cancer; polyphenol–drug interactions.
6. **Roadmap:** Prospective MMVD stage B1/B2 dogs — echo + circulating SASP panel + PBMC autophagic flux.

---

## Part 8 — Hypotheses (testable)

**H1 (primary):** Middle-aged dogs with higher baseline autophagic flux (PBMCs or muscle) have slower epigenetic age acceleration and lower 5-year mortality, independent of breed/size.

**H2:** TRIAD rapamycin extends healthspan **contingent on** measurable increases in autophagic flux; non-responders on flux biomarkers will show null clinical benefit.

**H3:** In canine MMVD, circulating or valve p16/p21 protein burden inversely correlates with p62-mediated selective autophagy capacity; rapamycin reduces CDKI burden *in vivo*.

**H4:** Aged cats with early CKD show reduced renal CMA (LAMP-2A) and macroautophagic flux; interventions that restore lysosomal acidification slow creatinine/SDMA rise more than calorie cut alone.

**H5:** Breed size–lifespan inverse relationship is partly mediated by IGF-1/mTOR tone → chronic autophagy suppression in giant breeds.

---

## Part 9 — Experimental roadmap (priority order)

### Immediate (0–12 months)

1. **Standardize flux assays** for companion animals: LC3-II turnover ± bafilomycin in PBMCs; p62 ELISA/WB; TFEB nuclear fraction; optional LAMP-2A for CMA.
2. **Age–breed matrix** in dogs: young vs geriatric; small vs giant; lean vs obese — muscle + PBMC.
3. **Feline baseline atlas** (n≥12/age bin): kidney, muscle, PBMC flux.

### Near-term (1–3 years)

4. Nested biomarker study inside TRIAD / DAP: pre-post rapamycin flux + frailty + echo + methylation age.
5. MMVD prospective cohort: stage-stratified autophagy/SASP panel.
6. Canine CR (body condition intervention) with flux endpoints — ethical, owner-implementable.

### Medium-term (3–7 years)

7. Feline controlled weight-loss trial with renal and cognitive endpoints + flux.
8. Combination pilots: intermittent rapamycin + exercise prescription in prefrail dogs.
9. Genetic/genomic: ATG/mTOR pathway variants vs breed longevity.

### Biomarker panel (recommended)

| Domain | Readouts |
|---|---|
| Autophagic flux | LC3-II ± lysosomal inhibitor, p62, ULK1-pS555 |
| Lysosome | LAMP1/2, cathepsin activity, lysosomal pH probes (ex vivo) |
| Mitophagy | PINK1/Parkin markers, mtDNA CN, residual OCR |
| Senescence | p16, p21, SA-β-gal (tissue), SASP (IL-6, TGF-β, MMPs) |
| Systemic aging | Frailty index, muscle mass (DEXA/CT), epigenetic clock |
| Clinical | Echo (MMVD), SDMA/creatinine, cognitive scores |

---

## Part 10 — What is established vs open

### Established (high confidence)

- Autophagy is conserved and longevity-coupled in model organisms; inhibition blocks multiple longevity pathways.
- Dogs spontaneously develop human-like age diseases; DAP/TRIAD make them the leading translational geroscience species.
- Canine MMVD senescent cells have **defective autophagy**; restoring mTOR-regulated autophagy clears p16/p21 via p62 (2025).
- Canine MSC senescence is autophagy-sensitive (curcumin/rapamycin).
- Lifelong food restriction extends Labrador lifespan substantially.

### Probable but incomplete

- TRIAD will show lifespan/healthspan benefit partly via autophagy (trial ongoing; do not overclaim).
- Aged dog muscle “↑autophagy markers” reflects stress adaptation that can become maladaptive without anabolism.
- Cats would benefit from similar mTOR/AMPK strategies with species-specific dosing.

### Open / weak

- Direct proof that raising autophagy **extends feline lifespan**.
- Optimal quantitative “flux set point” for each tissue (muscle ≠ valve ≠ kidney).
- Whether spermidine, NR/NMN, urolithin A, etc. move clinical endpoints in pet dogs/cats.
- Cancer risk tradeoffs of long-term autophagy modulation in pets.

---

## Part 11 — Practical takeaways (non-prescriptive)

For **dogs** (discuss with veterinarian):

1. Maintain lean body condition — strongest real-world longevity lever.
2. Preserve muscle: adequate protein + regular activity (autophagy quality control ≠ chronic starvation catabolism).
3. Watch TRIAD results before routine off-label rapamycin outside trials/specialist care.
4. MMVD-prone breeds: early echo surveillance; autophagy/mTOR science is especially relevant here.

For **cats**:

1. Avoid crash diets / prolonged fasting (hepatic lipidosis).
2. High-protein, controlled-calorie feeding under vet guidance for overweight cats.
3. Treat CKD and cognitive aging as research priorities for autophagy biomarkers — not as proven supplement targets yet.

---

## Wiki cross-links

Primary: [[Autophagy]] · [[Autophagic Flux]] · [[Macroautophagy]] · [[Mitophagy]] · [[Chaperone-Mediated Autophagy]] · [[mTORC1]] · [[AMPK]] · [[SIRT1]] · [[TFEB]] · [[Beclin1]] · [[p62]] · [[LC3]] · [[Rapamycin]] · [[Caloric Restriction]] · [[Spermidine]] · [[Senescence]] · [[Aging]] · [[Autophagy Inducer]]

Documents:  
[[_document_ - rubinsztein2011_autophagy_and_aging]] ·  
[[_document_ - Autophagy takes it all – autophagy inducers target immune aging]] ·  
[[_document_ - The autophagy enhancer spermidine reverses arterial aging]] ·  
[[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]

---

## Key references

1. Rubinsztein DC, Mariño G, Kroemer G. Autophagy and aging. *Cell*. 2011. (vault: rubinsztein2011)
2. Pagano TB et al. Age related skeletal muscle atrophy and upregulation of autophagy in dogs. *Vet J*. 2015. PMID 26257260
3. Tang Q et al. Autophagy regulates cellular senescence… in myxomatous mitral valve degeneration. *Autophagy*. 2025. PMID 39988732
4. Coleman AE et al. TRIAD: study design and rationale. *Geroscience*. 2025. PMID 39951177
5. Deng J et al. Curcumin alleviates senescence of canine BMSCs by activating autophagy. *Int J Mol Sci*. 2021. PMID 34768788
6. Agyapong N et al. Quiescence modulates age-related changes in canine lung MSCs. *PLoS One*. 2025. PMID 40700373
7. Tang Q et al. TGF-β–PI3K/AKT/mTOR in canine MMVD. *Cell Prolif*. 2023. PMID 36869852
8. Creevy KE et al. Companion dog as model for longevity dividend. *Cold Spring Harb Perspect Med*. 2016. PMID 26729759
9. Kaeberlein M et al. Dog Aging Project. *Mamm Genome*. 2016. PMID 27143112
10. Horvath S et al. DNA methylation clocks for dogs and humans. *PNAS*. 2022. PMID 35580182
11. Polacchini G et al. Oleuropein aglycone in canine skeletal muscle cells. *Tissue Cell*. 2024. PMID 38555794
12. Hill RC. Nutritional therapies… lessons from companion animals. *Proc Nutr Soc*. 2009. PMID 19040782

---

## Linking Summary

- Synthesis draws on vault [[Autophagy]] network + external companion-animal literature (dogs >> cats).
- Strongest canine mechanistic bridge: **MMVD senescence ↔ failed p62-selective autophagy ↔ rapamycin rescue**.
- Strongest population intervention: **body condition / dietary restriction** (dogs); **TRIAD** is the pivotal ongoing pharmacologic test.
- Suggested new entity notes (if ingesting further): `Dog Aging Project`, `TRIAD`, `Myxomatous Mitral Valve Disease`, `Canine Sarcopenia`, `Feline Chronic Kidney Disease`.
- Strong connections to strengthen:
  - [[Rapamycin]] ↔ canine cardiac aging / MMVD
  - [[Autophagy]] ↔ [[Senescence]] via p16/p21 selective degradation
  - [[Caloric Restriction]] ↔ companion dog lifespan
  - [[mTORC1]] ↔ breed size / IGF-1 longevity axis (hypothesis)
