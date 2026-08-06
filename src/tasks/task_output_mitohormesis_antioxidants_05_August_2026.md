# Mitohormesis and Antioxidant Interference

**Date:** 05_August_2026
**Query:** Do antioxidants block mitohormesis? Which specific antioxidants have the most evidence for interference? Does timing matter?

---

## Core finding: antioxidants can block mitohormesis

- Mitohormesis requires a **transient, acute ROS pulse** as the signal to trigger adaptive cytoprotective responses (catalase upregulation, chaperone expression, UPRmt, mitochondrial biogenesis)
- Antioxidants quench that ROS signal, preventing the hormetic response from being initiated
- This may explain the disappointing results of large antioxidant clinical trials (SELECT, HOPE, Bjelakovic meta-analysis)
- The wiki explicitly states: "Chronic antioxidant supplementation can inhibit the hormetic response and thereby block the cytoprotective adaptations that mitohormesis normally induces. This may explain the disappointing results of antioxidant clinical trials, where large meta-analyses generally failed to show benefit and in some cases suggested increased mortality. Supporting evidence comes from human studies showing that antioxidant supplements inhibit the salutary benefits of exercise, which is itself viewed as a mild stressor. Antioxidants presumably prevent the rise in mitochondrial ROS that is required to trigger the adaptive response." (`_triples.json:2878`, confidence 0.9, source: `_document_ - Mitohormesis - 2014_FEB.md`)

---

## Specific antioxidants ranked by evidence for interference

### NAC (N-acetylcysteine) — strongest direct evidence

- **Mechanism:** NAC scavenges mitochondrial ROS and replenishes glutathione, directly quenching the ROS signal that triggers mitohormesis
- **Key experimental evidence:**
  - In *C. elegans*, glucose restriction normally increases mitochondrial respiration → ROS → catalase induction → lifespan extension. **NAC pre-treatment completely abolished** both the ROS rise and the longevity benefit (`Mitohormesis - 2014_FEB.md:103`)
  - "Worms given 2DG but pre-treated with the antioxidant N-acetylcysteine (NAC) showed no evidence of a rise in ROS levels or the subsequent induction of catalase expression. Remarkably, antioxidant treatment also blocked the lifespan extension normally seen with glucose restriction" (`Mitohormesis - 2014_FEB.md:103`)
- **Wiki's own note:** "Its antioxidant benefit is context-dependent, as complete ROS suppression can blunt adaptive hormetic signaling" (`N-Acetylcysteine.md:29`)
- **Dual role in protocols:** NAC is used therapeutically in [[GlyNAC]] and [[SASP-Remodeling Aminochrome Complex]] protocols with **deliberate timing** — as a buffer to prevent a hormetic pulse from crossing into cytotoxic territory, not as a chronic supplement
  - In the SRAC strategy, GlyNAC acts as a continuous redox buffer across both phases: "During Phase 1, it replenishes glutathione reserves before [[Carbazochrome]] exposure, preventing the hormetic ROS pulse from crossing into cytotoxic 'vicious' [[Redox Cycling]]. During Phase 2, it protects healthy tissue from collateral oxidative stress during [[Fisetin]]-induced senescent cell lysis and debris clearance." (`GlyNAC.md:17`)
- **Redox Vaccination protocol:** Lists "NAC co-treatment" (N-acetylcysteine to scavenge ROS and block the initiating signal) as a blocking agent to study hormetic signaling (`Redox Vaccination.md:74`)
- **PRDX6 interaction:** NAC is also a selective inhibitor of the **peroxidase** activity of [[PRDX6]] (IC50 ≈ 15.5 µM), which is distinct from its ROS-scavenging role (`NAC.md:16`, `PRDX6.md:28`)

### Vitamin C (ascorbic acid) — strongest human evidence for exercise interference

- **Mechanism:** Water-soluble; regenerates vitamin E in membranes; scavenges aqueous-phase ROS; decreases muscle mitochondrial biogenesis when taken around exercise
- **Key evidence:**
  - **Gomez-Cabrera et al., 2008** (Am J Clin Nutr, PMID: 18175748): "Oral administration of vitamin C decreases muscle mitochondrial biogenesis and hampers training-induced adaptations in endurance performance" — directly cited in the mitohormesis review (`Mitohormesis - 2014_FEB.md:156`)
  - The exercise-antioxidant interference data is described as "supported by some human experimentation in which physical exercise is viewed as a stress and where the salutary benefits of exercise appeared to be inhibited in those subjects given antioxidant supplements" (`Mitohormesis - 2014_FEB.md:114`)
  - This is one of the cleanest human studies showing antioxidant interference with a hormetic stressor (exercise)
- **Pro-oxidant potential:** Vitamin C can act as a pro-oxidant under certain conditions (Fenton chemistry with iron), and its effects on mitohormesis specifically (vs. exercise adaptation more broadly) are not as cleanly separated in the wiki
- **Additional context:** Ascorbic acid reduces methemoglobin through a slower, nonenzymatic pathway; it is used as an alternative to methylene blue in G6PD deficiency (`Methylene Blue - StatPearls.md:60`)

### Vitamin E (α-tocopherol) — strong clinical trial evidence, weaker direct mechanistic link

- **Mechanism:** Lipid-soluble chain-breaking antioxidant; donates a hydrogen atom to lipid peroxyl radicals, converting them to stable hydroperoxides and yielding a relatively unreactive tocopheroxyl radical. Embedded in the membrane lipid bilayer, it intercepts chain propagation at the site of peroxidation. The tocopheroxyl radical must be regenerated by vitamin C or CoQ10; otherwise vitamin E is consumed and protection is exhausted.
- **Key evidence:**
  - **SELECT trial** (Lippman et al., 2009, JAMA, PMID: 19066370): Vitamin E supplementation (400 IU/day) **increased** prostate cancer risk by 17% in healthy men — cited as a key example of antioxidant supplementation failure (`Mitohormesis - 2014_FEB.md:180`)
  - **HOPE trial** (Lonn et al., 2005, JAMA, PMID: 15769967): Long-term vitamin E supplementation showed no cardiovascular benefit and a trend toward increased heart failure — also cited in the mitohormesis literature (`Mitohormesis - 2014_FEB.md:183`)
  - The wiki generalizes: "large meta-analysis studies suggests that in some cases, certain antioxidants may actually increase mortality" — vitamin E is a primary example
- **COMT genotype interaction:** Vitamin E's effects are **genotype-dependent**:
  - Slow COMT (Met/Met) individuals derive cancer-preventive benefit from vitamin E supplementation
  - Fast COMT (Val/Val) individuals may experience *increased* cancer risk
  - "Val158Met modulates the effect of vitamin E (alpha-tocopherol) supplementation on cancer prevention, such that slow COMT individuals derive protective benefit whereas fast COMT individuals may experience increased cancer risk. The proposed mechanism involves COMT-dependent metabolism of vitamin E-related catecholic intermediates and interactions with catecholestrogen handling." (`comt/_triples.json:325-326`)
  - This suggests the mitohormesis-blocking effect may vary by individual genetics
- **Caveat:** No direct experimental study in the wiki shows vitamin E blocking the mitohormetic ROS signal the way NAC does in *C. elegans*. The evidence is more epidemiological/trial-based.
- **Antioxidant network:** Vitamin E is part of a synergistic network — CoQ10 regenerates vitamin E by reducing the α-tocopheroxyl radical back to α-tocopherol, and vitamin C regenerates oxidized vitamin E in the aqueous phase (`oxidative_stress/_triples.json:662`)

### Summary table

| Antioxidant | Direct mechanistic evidence | Clinical trial evidence | Strength |
|---|---|---|---|
| **NAC** | Strong — completely blocks hormetic ROS signal in *C. elegans* (NAC + 2DG experiment) | Used therapeutically (GlyNAC/SRAC) with careful timing | Strongest |
| **Vitamin C** | Moderate — decreases mitochondrial biogenesis with exercise | Gomez-Cabrera 2008 human study (PMID: 18175748) | Strong |
| **Vitamin E** | Weak (indirect) — no direct hormetic ROS blockade shown | SELECT, HOPE trials — increased mortality/cancer; COMT genotype interaction | Moderate (clinical, not mechanistic) |

---

## The mechanism in detail: why ROS is the signal, not the damage

- Mitohormesis is the concept that mild, pulsed mitochondrial stress — from brief caloric restriction, intense exercise, temperature extremes, or certain phytochemicals — triggers a robust adaptive response that enhances cellular resilience, longevity, and metabolic efficiency by upregulating endogenous antioxidants and improving mitochondrial quality control (`mitohormesis, heart rate variability.md:230`)
- The mitohormetic trigger: "Mitohormesis relies on creating a temporary, acute increase in reactive oxygen species (ROS) or a transient cellular energy deficit. This activates key nutrient-sensing and stress-response pathways like AMPK, PGC-1α, SIRT1, and NRF2. Together, these pathways drive mitochondrial biogenesis (creating new mitochondria), stimulate mitophagy (clearing old/dysfunctional mitochondria), and boost the cell's internal antioxidant defense systems, leaving you with a highly efficient, resilient metabolic engine." (`mitohormesis, heart rate variability.md:237`)
- Mitochondrial ROS are active participants in mitohormesis, functioning as **signaling molecules** rather than mere damage agents (`Mitohormesis - 2014_FEB.md:103`)
- In model organisms, mild mitochondrial stress eliciting mitohormesis consistently translates into longer lifespan. Examples include activation of the retrograde response in yeast, UPRmt activation in *C. elegans* via knockdown of the mitochondrial ribosomal protein mrps-5 or the cytochrome c oxidase subunit cco-1, respiratory-chain inhibition in worms, flies, and mice, and glucose restriction. In each case the hormetic, cytoprotective response — chaperones, detoxification, antioxidant defenses — appears required for the lifespan extension. (`_triples.json:2830`)
- In *C. elegans*, there is significant evidence that an augmented cytoprotective response, be it the induction of chaperones, xenobiotic detoxification or antioxidant defenses, is tightly coupled and required for most, if not all, lifespan extensions (Shore et al., 2012) (`Mitohormesis - 2014_FEB.md:114`)

### The NAC + 2DG experiment in detail

- One of the first clear examples came from studies in which glucose metabolism was impaired either pharmacologically by exposing worms to 2-deoxy-D-glucose (2DG), or by simply restricting glucose availability (Schulz et al., 2007). Both maneuvers resulted in an extension of lifespan.
- A more detailed examination of metabolism demonstrated that restricting glucose availability resulted in a presumed compensatory increase in mitochondrial respiration, with evidence for increased utilization of fat through β-oxidation. These metabolic changes appeared to require activation of *aak-2*, the *C. elegans* homolog of AMP-dependent kinase (AMPK).
- Consistent with the observed increase in mitochondrial respiration, treatment of worms with 2DG resulted in an increase in ROS levels. Following this oxidative stress, the level of the hydrogen peroxide scavenging enzyme catalase was elevated approximately one week after 2DG exposure.
- **The critical finding:** Worms given 2DG but pre-treated with the antioxidant N-acetylcysteine (NAC) showed no evidence of a rise in ROS levels or the subsequent induction of catalase expression. Remarkably, antioxidant treatment also blocked the lifespan extension. (`Mitohormesis - 2014_FEB.md:103`)

### The yeast TOR experiment

- In yeast, a reduction in TOR signaling results in an extension of chronological lifespan. A careful analysis revealed that reducing TOR signaling led to an initial increase in mitochondrial ROS production (Pan et al., 2011).
- Rather than being harmful, this mROS production was required for the increased lifespan observed.
- Remarkably, expression of the antioxidant protein manganese superoxide dismutase **reduced** lifespan while treatment with the redox-cycling compound menadione **extended** lifespan.
- mROS are sensed by the two kinases Tel1p and Rad53p (Schroeder et al., 2013), the yeast homologs of mammalian ATM and Chk2. Activation of this pathway results in alterations in epigenetic silencing through a mechanism involving the sirtuin family of deacetylases. (`Mitohormesis - 2014_FEB.md:107`)

---

## Timing: does separating antioxidants from exercise preserve the hormetic benefit?

### What the wiki says explicitly

- Mitohormesis relies on "a temporary, acute increase in reactive oxygen species (ROS) or a transient cellular energy deficit" (`mitohormesis, heart rate variability.md:237`)
- The overarching strategy: "apply acute, targeted stressors followed by deep recovery, avoiding chronic stress" (`mitohormesis, heart rate variability.md:230`)
- The wiki's most precise timing guidance targets the **post-workout window**: "High-dose synthetic antioxidants (e.g., Vitamin C or E pills) post-workout: These blunt the necessary acute ROS signal required for mitohormetic adaptation. Let your body do the work." (`mitohormesis, heart rate variability.md:252`)
- The triples reinforce: "high-dose synthetic antioxidants taken post-workout blunt the necessary acute ROS signal required for mitohormetic adaptation, reinforcing that a transient ROS pulse is the essential trigger for the protective response" (`_triples.json:2974`)

### What the landmark studies actually tested

- Both the Ristow 2009 (PNAS) and Gomez-Cabrera 2008 studies used **chronic daily supplementation** (vitamin C 1000mg/day + vitamin E 400 IU/day for 4 weeks alongside exercise), not acute timing around exercise
- Neither study tested whether temporal separation (e.g., vitamin C at breakfast, exercise at evening) preserves the hormetic benefit
- The Ristow study showed the antioxidant-supplemented group **failed to upregulate endogenous defense enzymes** (SOD, GPx) and did not achieve the insulin-sensitizing effects of exercise
- Ristow et al. is cited as: "Antioxidants prevent health-promoting effects of physical exercise in humans. Proc Natl Acad Sci U S A. 2009;106:8665–8670. doi: 10.1073/pnas.0903485106" (PMID: 19433800) (`Mitohormesis - 2023_NOV.md:417`)

### The body's own antioxidant response is the point

- The *goal* of mitohormesis is to upregulate **endogenous** antioxidant defenses; exercise itself does this via NRF2 activation
- "Exercise (especially intense, varied training) – acute ROS bursts that drive mitochondrial biogenesis, antioxidant upregulation, metabolic adaptation, and higher resting energy expenditure" (`oxidative_stress/README.md:18`)
- "Moderate exercise is an antioxidant: upregulation of antioxidant genes by training" (Gomez-Cabrera et al., 2008, cited at `adrenochrome/_document_ - The role of glycation...md:154`)
- Exogenous antioxidants **prevent** this upregulation — the exogenous supply signals "you don't need to build your own"
- The Ristow study explicitly showed: the antioxidant-supplemented group failed to upregulate endogenous SOD and GPx, while the exercise-only group successfully did so

### Practical inference

- The ROS pulse lasts hours, not days; the acute spike from exercise peaks during and immediately after the bout, then subsides as endogenous enzymes are upregulated
- Vitamin C has a tissue half-life of ~10-20 days; even if taken hours before exercise, tissue levels are already elevated and will blunt the ROS signal
- The wiki specifically flags post-workout antioxidants as the problem, suggesting the signaling cascade is most active in the hours immediately following exercise
- **Bottom line:** it's likely the chronic steady-state elevation of exogenous antioxidants that blocks mitohormesis, not just acute timing around exercise. Taking high-dose vitamin C or E daily — regardless of when — likely suppresses the signal because tissue levels remain elevated around the clock
- The wiki does not have evidence on whether temporal separation works; this is an inference from mechanism, not a tested hypothesis

### What to do instead (from the mitohormesis protocol)

- Skip synthetic antioxidant pills entirely
- Get antioxidants from **polyphenol-rich foods** (xenohormetins): blueberries, dark chocolate (cacao), green tea (EGCG), and extra virgin olive oil — these plant defense compounds act as mild stressors that activate the NRF2 and sirtuin pathways (`mitohormesis, heart rate variability.md:242`)
- **Cruciferous vegetables:** Broccoli sprouts (rich in sulforaphane) for potent NRF2 activation and upregulation of Phase II detoxification enzymes (`mitohormesis, heart rate variability.md:243`)
- **Omega-3 fatty acids (EPA/DHA):** Wild-caught salmon, sardines, or algae oil to optimize mitochondrial membrane fluidity and reduce systemic baseline inflammation (`mitohormesis, heart rate variability.md:244`)
- **CoQ10 / Ubiquinol & PQQ:** For optimal electron transport chain function and synergistic stimulation of mitochondrial biogenesis (`mitohormesis, heart rate variability.md:245`)
- **MCT oil (caprylic acid / C8):** Provides a direct, efficient mitochondrial fuel that increases endogenous ketone production, acting as a signaling molecule to promote mitohormesis (`mitohormesis, heart rate variability.md:246`)
- **NAD+ precursors (NMN or NR):** Support the NAD+/SIRT1 axis, crucial for mitochondrial health and energy sensing (`mitohormesis, heart rate variability.md:247`)
- Let exercise-induced ROS do its job — the body's endogenous response is the therapeutic goal

### Foods and substances to avoid (from the mitohormesis protocol)

- **Refined carbohydrates and sugars:** Cause excess, uncoupled ROS production without the hormetic benefit (`mitohormesis, heart rate variability.md:250`)
- **Industrial seed oils:** High in easily oxidized linoleic acid, which damages delicate mitochondrial membranes (`mitohormesis, heart rate variability.md:251`)
- **High-dose synthetic antioxidants (e.g., Vitamin C or E pills) post-workout:** These blunt the necessary acute ROS signal required for mitohormetic adaptation. Let your body do the work. (`mitohormesis, heart rate variability.md:252`)
- **Constant snacking / chronic overeating:** Abolishes the fasting-induced AMPK signal necessary for mitophagy (`mitohormesis, heart rate variability.md:253`)

---

## Exercise protocol (from the mitohormesis protocol)

- **HIIT & sprint interval training (SIT):** 1–2 times per week. Brief, maximal efforts generate the perfect acute ROS spike and lactate accumulation to trigger PGC-1α (the master regulator of mitochondrial biogenesis) (`mitohormesis, heart rate variability.md:262`)
- **Zone 2 cardio:** 3–4 times per week (45–60 min). Builds the aerobic base, increases mitochondrial volume, and improves fat oxidation efficiency (`mitohormesis, heart rate variability.md:263`)
- **Breathwork:** Apnea or intermittent hypoxic breathing exercises (e.g., Wim Hof method) induce mild, brief hypoxia, which is a potent mitohormetic stressor (`mitohormesis, heart rate variability.md:266`)
- **Cold exposure:** Cold plunges or cold showers (1–3 minutes) activate brown adipose tissue and induce uncoupling protein 1 (UCP1), leading to increased mitochondrial density (`mitohormesis, heart rate variability.md:269`)

---

## Clinical trial evidence: antioxidant supplementation failures

- Numerous randomized studies have, in general, failed to demonstrate a benefit from antioxidant therapy and large meta-analysis studies suggests that in some cases, certain antioxidants may actually increase mortality (Bjelakovic et al., 2007; Lippman et al., 2009; Lonn et al., 2005) (`Mitohormesis - 2014_FEB.md:114`)
- There are a number of possible explanations for why antioxidants have in general been ineffective including issues of improper dosing or insufficient localization to the mitochondrial source of ROS
- It is possible that the hint that antioxidants might increase cancer incidence may be a result of the ability of antioxidants to protect genetically damaged pre-cancerous cells from undergoing apoptosis
- It is also possible that chronic low dose antioxidants inhibit the normal hormetic response and therefore block the induction of a broad array of cytoprotective measures the organism would normally undertake
- As Ristow put it, antioxidants were "worse than useless" — in two very large randomized controlled trials, antioxidants increased the incidence of cancer, especially of lung cancer in smokers. Antioxidants also increased all-cause mortality. The results were so disturbing that two trials were stopped earlier than planned. Also disturbing is the finding that antioxidants accelerate cancer progression and promote metastasis. (`Rapamycin for longevity opinion article.md:100`)

### Specific trials cited

| Trial | Year | Intervention | Outcome | Citation |
|---|---|---|---|---|
| **SELECT** (Lippman et al.) | 2009 | Vitamin E 400 IU/day + Selenium | Increased prostate cancer risk 17% | PMID: 19066370, JAMA |
| **HOPE** (Lonn et al.) | 2005 | Vitamin E 400 IU/day | No CV benefit; trend toward increased heart failure | PMID: 15769967, JAMA |
| **Bjelakovic meta-analysis** | 2007 | Various antioxidants | Increased mortality in some analyses | Cited in `Mitohormesis - 2014_FEB.md:114` |
| **Ristow et al.** | 2009 | Vitamin C 1000mg + Vit E 400 IU/day × 4 weeks with exercise | Blocked exercise-induced insulin sensitization and endogenous antioxidant upregulation | PMID: 19433800, PNAS |
| **Gomez-Cabrera et al.** | 2008 | Vitamin C oral supplementation with exercise | Decreased muscle mitochondrial biogenesis; hampers training adaptations | PMID: 18175748, Am J Clin Nutr |

---

## NAC in therapeutic protocols (context-dependent use)

- NAC is not universally harmful — it has a **dual role** depending on context:
  - **As a chronic supplement:** Likely blocks mitohormesis by quenching the ROS signal
  - **As a timed buffer in hormetic protocols:** Used deliberately to prevent a hormetic pulse from becoming cytotoxic
- In the [[SASP-Remodeling Aminochrome Complex]] strategy, GlyNAC acts as a continuous redox buffer across both phases:
  - Phase 1: Replenishes glutathione reserves before [[Carbazochrome]] exposure, preventing the hormetic ROS pulse from crossing into cytotoxic "vicious" redox cycling
  - Phase 2: Protects healthy tissue from collateral oxidative stress during [[Fisetin]]-induced senescent cell lysis and debris clearance (`GlyNAC.md:17`)
- GlyNAC is the only SRAC component administered continuously across both phases
- Clinical studies by Sekhar and colleagues in older adults (age 65–80): GlyNAC supplementation (100 mg/kg NAC + 100 mg/kg glycine daily for 24 weeks) produced improvements in oxidative stress (F2-isoprostanes reduced 40%), mitochondrial function (ATP production up 60%), insulin resistance (HOMA-IR down 30%), inflammation (TNFα, IL-6, CRP reduced 25–40%), and physical function (6-min walk +12%, grip strength +8%) (`GlyNAC.md:32`)

---

## Key wiki nodes and connections

- [[Mitohormesis]] — the central concept; transient mitochondrial stress triggers adaptive response
- [[Antioxidants]] — exogenous scavengers that can block the hormetic signal
- [[N-Acetylcysteine]] — strongest direct evidence for blocking; also used therapeutically with timing
- [[Vitamin C]] — strongest human evidence for exercise interference
- [[Vitamin E]] — clinical trial failures; COMT genotype interaction
- [[GlyNAC]] — therapeutic use of NAC with deliberate timing in SRAC protocol
- [[NRF2]] — the endogenous antioxidant pathway that exercise activates; polyphenol target
- [[AMPK]] — energy sensor activated by mitohormetic stress
- [[PGC-1α]] — master regulator of mitochondrial biogenesis, activated by exercise ROS
- [[SIRT1]] — sirtuin activated by NAD+ and mitohormetic signaling
- [[Catalase]] — hydrogen peroxide scavenging enzyme upregulated by mitohormesis
- [[Superoxide Dismutase]] — endogenous antioxidant upregulated by exercise training
- [[Glutathione]] — endogenous antioxidant; NAC replenishes this pool
- [[Exercise]] — primary hormetic stressor; drives mitochondrial biogenesis via ROS
- [[Caloric Restriction]] — another hormetic stressor activating AMPK/mitophagy
- [[Hormesis]] — the broader concept; mitohormesis is the mitochondrial-specific variant

---

## Sources

- `src/notes/_link/_document_ - Mitohormesis - 2014_FEB.md` — foundational review; NAC + 2DG experiment; yeast TOR experiment; exercise + antioxidant interference; SELECT/HOPE citations
- `src/notes/_link/_document_ - Mitohormesis - 2023_NOV.md` — DELE1-OMA1-HRI-ATF4 axis; metformin as mitohormetic agent; Ristow 2009 citation; exercise as low-cost hormetic intervention
- `src/notes/_link/_document_ - mitohormesis, heart rate variability.md` — practical protocol; post-workout antioxidant warning; dietary and behavioral recommendations
- `src/notes/_link/_triples.json` — structured triples: "Mitohormesis is_blocked_by Antioxidants" (confidence 0.9); post-workout antioxidant warning triple
- `src/notes/oxidative_stress/Oxidative Stress.md` — mitohormesis/oxidative hormesis framework; clinical trial caution; NRF2 as master regulator
- `src/notes/_link/N-Acetylcysteine.md` — NAC mechanism; hormetic signaling blunting note; GlyNAC context
- `src/notes/_link/NAC.md` — NAC as selective PRDX6 peroxidase inhibitor
- `src/notes/_link/Redox Vaccination.md` — NAC as blocking agent in hormesis studies
- `src/notes/adrenochrome/GlyNAC.md` — NAC/GlyNAC timing in SRAC protocol; clinical trial data
- `src/notes/comt/_triples.json` — vitamin E + COMT genotype interaction
- `src/notes/_link/_document_ - Rapamycin for longevity opinion article.md` — Ristow quote on antioxidants being "worse than useless"
- `src/notes/_link/PRDX6.md` — NAC as PRDX6 peroxidase inhibitor (IC50 15.5 µM)
- `src/notes/adrenochrome/_document_ - The role of glycation...md` — Gomez-Cabrera "moderate exercise is an antioxidant" citation
- `src/notes/oxidative_stress/README.md` — exercise as acute ROS burst driving adaptation
- `src/notes/senescence/_document_ - Mitochondrial dysfunction in cellular senescence...md` — chronic dietary thiols decreasing lifespan in *C. elegans*; ROS-generating compounds increasing lifespan
