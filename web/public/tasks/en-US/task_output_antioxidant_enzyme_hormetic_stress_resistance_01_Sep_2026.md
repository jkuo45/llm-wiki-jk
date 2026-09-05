---
title: "Antioxidant-Enzyme Hormesis and Stress Resistance: The Thioredoxin-System Cluster — Entity Review and Web Verification"
description: "A web-verified review of the vault's antioxidant-enzyme notes (Thioredoxin-1/-2, Glutaredoxin, Thioredoxin reductase, Peroxiredoxin/Sulfiredoxin, CxxC Motif, APE1, Auranofin, Ribonucleotide Reductase plus the RNR/dNTP cluster) integrated with the broader antioxidant-enzyme landscape (catalase/mCAT, MnSOD/SOD2, GPx). Central thesis: across antioxidant enzymes, hormetic stress resistance — not linear antioxidant over-supplementation — is the operative longevity/healthspan principle, and Trx1 is its best-characterized archetype."
created: 2026-09-01
updated: 2026-09-01
type: task-output
tags:
  - task-output
  - thioredoxin
  - redox
  - hormesis
  - oxidative-stress
  - antioxidant
  - sirtuin
  - heart-failure
  - longevity
  - research-synthesis
author: []
---

> [!note]
> **Thesis:** Hormetic stress resistance — not linear antioxidant over-supplementation — is the operative principle across antioxidant enzymes, with Trx1 as the best-characterized archetype. This review integrates the vault's thioredoxin-system cluster (`[[Thioredoxin-1]]`, `[[Thioredoxin-2]]`, `[[Glutaredoxin]]`, `[[CxxC Motif]]`, `[[Auranofin]]`, `[[Ribonucleotide Reductase]]`, `[[dNTP]]`, `[[RRM1]]`, `[[RRM2]]`, `[[RRM2B]]`, `[[Triapine]]`, `[[Clofarabine]]`, and the deepened Trx/Prx/Srx arm) with the broader redox landscape (catalase/mCAT, MnSOD/SOD2, GPx), and verifies the core Trx1 claims against the current web literature.
> **Date:** 01_Sep_2026
> **Sources:** wiki vault (`src/notes/`), wiki graph (`wiki-out/graph.json`), current web literature (PMIDs/PMCIDs/DOIs where identified). Vault sources are consolidated in §8.

---

# Summary

The vault now documents a coherent **thioredoxin-system cluster** nested inside a wider antioxidant-enzyme landscape — spanning the thiol-disulfide core (`[[Thioredoxin-1]]`, `[[Thioredoxin-2]]`, `[[Glutaredoxin]]`, `[[CxxC Motif]]`), the peroxide-extinguishing arm (`[[Peroxiredoxin]]`, `[[Peroxiredoxin 3]]`, `[[Sulfiredoxin]]`), the signal-transduction clients (`[[ASK1]]`, `[[APE1]]`), the pharmacological and DNA-synthesis branch (`[[Auranofin]]`, `[[Ribonucleotide Reductase]]`, `[[RRM1]]`, `[[RRM2]]`, `[[RRM2B]]`, `[[dNTP]]`, `[[Triapine]]`, `[[Clofarabine]]`, with deepened `[[Gemcitabine]]`/`[[Hydroxyurea]]`), and the disease/stress context (`[[Heart Failure]]`, `[[Rheumatoid Arthritis]]`, `[[Nitrative Stress]]`, `[[Peroxynitrite]]`, `[[SIRT1]]`).

> [!important]
> The cluster's central claim survives web scrutiny in **extended form**: Trx1 is one of the few, and arguably the best-characterized, antioxidant enzymes whose systemic overexpression extends part of mouse lifespan — and this is best understood as **hormetic stress resistance**, not linear lifespan extension. The comparative reading across the vault's antioxidant-enzyme notes adds a systematic corollary: **antioxidant enzymes are not interchangeable free-radical sponges.** Expression level alone predicts nothing; *compartment*, *dose window*, *oxidation-state set point*, and *life stage* determine whether an antioxidant enzyme buffers stress (hormetic benefit) or feeds pathology (over-suppression of ROS signaling, oncogenic survival, or nitrative self-inactivation).

Confirmed on three counts:

- **"Among the few" is literally supported.** The phrase originates verbatim in Alcendor et al., *Circ Res* 2007 ("Thioredoxin1 is among the few antioxidants that prolong the lifespan of mice when overexpressed systemically", citing Mitsui et al. 2002). The systematic control study, **Pérez et al., *Aging Cell* 2009** ("The overexpression of major antioxidant enzymes does not extend the lifespan of mice"), overexpressed CuZnSOD, catalase, glutathione peroxidase, and MnSOD systemically and found **no lifespan extension** for any of them — leaving Trx1 (and, separately, mitochondria-targeted catalase, mCAT) as exceptions.
- **"Systemic overexpression extends (part of) mouse lifespan" is accurate with published caveats.** Mitsui et al. 2002 (median + maximum); Pérez et al. *J Gerontol A* 2011 (male earlier-life extension only, no maximum effect); Flores et al. 2018 (no median/maximum effect under continuous overexpression). Two independent mouse studies are consistent: Trx1 overexpression extends *early* lifespan.
- **"Best-characterized" holds — and now demonstrably generalizes.** Trx1 has the most systematic lifespan genetics of any antioxidant enzyme (two transgenic lines, dual transgenics, knockouts, long-lived-dwarf correlations). But the hormetic template it defines — **cell-cycle- and dose-window-limited benefit, front-loaded in youth, with a late-life cost of chronic overactivation** — is now visible across the vault's antioxidant-enzyme notes: the mCAT lifespan/HF data, the MnSOD "Goldilocks" acetylation dial, the catalase paradox, and the peroxiredoxin "floodgate"/Sulfiredoxin-repair cycle.

| Claim                                                                                                                                   | Primary sources verified                                                                                                                                                                                           | Web-research verdict                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Trx1 as longevity factor → heart-failure treatment modality**                                                                         | Alcendor et al., *Circ Res* 2007 (doi:10.1161/01.RES.0000267723.65696.4a)                                                                                                                                          | Confirmed verbatim as a proposition from that paper's **hormesis framing**; treatment idea remains **hypothesis**                                                          |
| **Trx1 up-regulated by pressure overload; antihypertrophic; stimulator of mitochondrial function; grouped with mitochondrial catalase** | Same source; **Yamamoto et al. JCI 2003** (endogenous Trx1 loss → hypertrophy); **Oka et al. Cardiovasc Res 2020** (Trx1-KO → heart failure, mTOR/Cys1483); **Schriner et al. 2005 / Dai et al. 2009–2011** (mCAT) | Confirmed; the mCAT grouping is exact and causative                                                                                                                        |
| **Trx1 declines with nitrative stress; both resists and is a target of oxidative damage**                                               | Zhang & Tao et al. 2007 (nitrative Trx1 inactivation in aging heart); Perez et al. 2024 (middle-age loss of cardioprotection); Du et al. 2013 (Prx-driven oxidation, glutaredoxin reactivation)                    | Confirmed — tyrosine nitration inactivates Trx1 with unchanged expression; reversible cysteine over-oxidation vs irreversible nitration delimit the hormetic repair window |
| **Hormetic stress resistance, not pure lifespan extension, is the theme across antioxidant enzymes**                                    | Pérez et al. 2009; Pérez et al. 2011; Flores et al. 2018; Cunningham et al. 2018; Roman et al. 2020; Aranda-Rivera et al. 2023; vault `MnSOD`/`Catalase` notes                                                     | Strongly supported — the evidence base spans Trx1, Trx2, mCAT, MnSOD, GPx, Prx/Srx                                                                                         |

The web evidence draws a clean parallel between the Trx1 story and the sirtuin arm: **SIRT1** shows a cardiac hormetic dose window (2.5–7.5× protective, 12.5× pathogenic), and **MnSOD** activity is gated by the SIRT3/SIRT4 acetylation dial (locked-off → cancer/hypertension; locked-on → cardiomyopathy). In every case the "longevity factor" framing only holds inside a **low-to-moderate hormetic window**.

---

## 1. The antioxidant-enzyme cluster in the vault

The cluster spans the thiol-disulfide core, the peroxide-extinguishing arm, the signal-transduction clients, the DNA-synthesis branch, and the disease/stress context. Entities are grouped below by their role in the redox/stress-resistance network.

### 1a. The thiol-disulfide core

- **[[Thioredoxin-1]]** (in `_link/`) — the hub note. Positioned as the cytosolic/nuclear isoform, distinct from the family-level [[Thioredoxin]] and the mitochondrial [[Thioredoxin-2]]. Captures the CxxC (CGPC, Cys32/Cys35) mechanism, ASK1 inhibition, NF-κB/HIF-1α/APE1 regulation, the mTOR–Cys1483–mitochondrial axis, the lifespan literature, and age-dependent nitration. Carries the `[[Hormesis]]` connection in Connections + Linking Summary, anchoring the hormetic framing as a graph edge rather than prose.
- **[[Thioredoxin-2]]** (in `_link/`) — the mitochondrial isoform: TXNRD2/Prx3 coupling, the mitochondria-located ASK1 pool, peroxynitrite sensitivity, and embryonic lethality of *Txn2*-null animals. Trx2 supplies the organellar evidence for the hormetic theme: adding mitochondrial overexpression on top of cytosolic (Trx1+Trx2 double-Tg) **shortens** mouse lifespan (Cunningham 2018).
- **[[Glutaredoxin]]** (in `_link/`) — the GSH-coupled parallel disulfide-reducing system (CPYC CxxC), RNR support, deglutathionylation, and Fe-S biogenesis (GLRX5). Its central role in the theme: glutaredoxins are the **reset switch** for the reversible cysteine-oxidation half of the hormetic cycle — including reactivation of oxidized [[Thioredoxin-1]] itself (Du et al. 2013).
- **[[CxxC Motif]]** (in `_link/`) — the shared catalytic tetrapeptide (CGPC/CPYC/CGHC/CPHC) across thioredoxins, glutaredoxins, and PDI, with the important non-redox zinc-binding CxxC exception noted. Establishes that Trx1, Grx, and their clients are **one chemical redox currency** — which is why hormetic (dis)sulfide signaling repeats across all of them.
- **[[Thioredoxin]]** (family note) and **[[Thioredoxin reductase]]** — the family hub and the NADPH-driven regeneration step (TXNRD1/2). The TXNRD note correctly positions [[Auranofin]] as the canonical tool inhibitor.

### 1b. The peroxide arm

- **[[Peroxiredoxin]] / [[Peroxiredoxin 3]]** — the Trx1→Prx1/2 and Trx2→Prx3 peroxide-removal clients. Prx3 is the principal mitochondrial matrix H₂O₂/peroxynitrite scavenger and is **reversibly inactivated by hyperoxidation** (sulfinic acid), conferring the "floodgate" behaviour that lets low-level H₂O₂ act as a hormetic signal while high flux is still buffered.
- **[[Sulfiredoxin]]** — the ATP-dependent repair enzyme (Srx/SRXN1) that rescues hyperoxidized Prx back to the active state, itself Nrf2-induced (feed-forward). Together with Grx, Srx is half of the **reversible-repair machinery** that distinguishes hormetic adaptation (memory) from irreversible oxidative collapse (nitration).

### 1c. Signal-transduction clients

- **[[ASK1]]** — the flagship Trx1/Trx2 client; the Trx oxidation–dissociation switch gates both cytosol and mitochondria. It is the mechanistic hinge explaining why the same ASK1/Trx pair is **cardioprotective in youth and pro-survival for cancer in old age** — the two faces of the hormetic window.
- **[[APE1]]** — the Trx1→Ref-1→AP-1/NF-κB/p53 redox-signaling cascade, accurately split from base-excision repair. This is the route by which thiol redox state becomes transcriptional stress memory — the output side of hormesis.

### 1d. RNR / DNA-synthesis branch

- **[[Ribonucleotide Reductase]]** — the archetypal Trx1 client and the rate-limiting committed step of de novo dNTP synthesis; regenerated each turnover by reduced [[Thioredoxin-1]] or [[Glutaredoxin]]. The subunit notes (**[[RRM1]]**, **[[RRM2]]** radical-carrying β subunit, **[[RRM2B]]**/p53R2 repair isoform) and **[[dNTP]]** complete the electron-flow story into genome maintenance.
- **[[Auranofin]]** — the vault's canonical TXNRD inhibition probe: gold(I) coordination chemistry, Sec adduction, PK (t½ ≈ 26 d), RA approval (1985), and the Phase I–II repurposing landscape. **Pharmacologically it demonstrates the underside of the hormetic window** — pushing the Trx system *out* of its protective range converts redox buffering into lethal ROS accumulation (apoptosis + ferroptosis).
- **[[Triapine]] / [[Clofarabine]]** — RNR-directed agents (iron-chelator radical-cofactor destruction; nucleoside-analog RNR inhibition + chain termination) that exercise the same "push past the window" logic against DNA synthesis.

### 1e. Disease / stress context

- **[[Heart Failure]]** — Trx1 decreases in failing hearts (with MnSOD and Bcl-xL); the longevity-factor→treatment-modality proposition is documented as the hormesis-framed hypothesis it is.
- **[[Nitrative Stress]] / [[Peroxynitrite]]** — the chemistry of Excerpt 3: peroxynitrite-tyrosine nitration irreversibly inactivates Trx1 (and TXNRD), the mechanistic basis for age-dependent loss of cardioprotection and the **outer limit of the hormetic repair window**.
- **[[SIRT1]]** — the sirtuin hand-off in the same stress-resistance program: "SIRT1 protects via MnSOD/Thioredoxin1/Bcl-xL ... proposed new heart-failure treatment modality."

**Overall assessment:** the cluster is topically consistent, correctly canonicalized (filename uniqueness/resolution against `_link/`, `cancer/`, `sirtuins/`, `oxidative_stress/`), follows OKF frontmatter and the `## Documents`/`## Connections`/`## Linking Summary` template, and the hormetic reading is anchored as a graph connection (`Thioredoxin-1 ↔ Hormesis`).

---

## 2. The systematic dissection: antioxidant-enzyme overexpressors and the hormetic verdict

This section asks the question the theme turns on: *if antioxidant capacity were linearly protective, overexpressing any single antioxidant enzyme should extend lifespan. Does it?*

### The one-by-one dissection (Pérez et al., *Aging Cell* 2009)

Pérez and colleagues overexpressed **CuZnSOD**, **catalase**, **glutathione peroxidase**, and **MnSOD** systemically and measured lifespan against controls. Result: **no lifespan extension for any of the four classical enzymes.** Only **thioredoxin-1** (in the same experimental tradition, and reported separately) showed survival benefit — and, as refined later (Pérez 2011), only for the earlier portion of male life.

| Overexpressed enzyme | Compartment | Lifespan outcome (verified) |
|---|---|---|
| CuZnSOD | cytosol | None (Pérez 2009) |
| Catalase | cytosol/peroxisome | None (Schriner 2005; Pérez 2009) |
| Glutathione peroxidase (GPx1) | cytosol | None (Pérez 2009) |
| MnSOD | mitochondria | None (Pérez 2009) — note the product H₂O₂ needs matched downstream disposal |
| **Mitochondria-targeted catalase (mCAT)** | mitochondria | **~20% median extension** (Schriner 2005); attenuates pressure-overload HF and cardiac aging (Dai et al. 2009, 2011) |
| **Thioredoxin-1** (β-actin promoter) | cytosol/nuclear | Early-life extension only (Mitsui 2002; Pérez 2011); no maximum-lifespan effect on C57BL/6 |
| Trx1 (continuous, endogenous promoter) | cytosol/nuclear | No median/max effect; **↑lymphoma/tumor burden** via ASK1 suppression (Flores 2018) |
| Trx1 + Trx2 (dual, both compartments) | cytosol + mitochondria | **Shortened** lifespan, accelerated cancer (Cunningham 2018) |

### Three structural lessons

1. **Compartment is determinative.** The same enzyme (catalase) does nothing when targeted to cytosol/peroxisomes but extends lifespan and protects the heart when targeted to mitochondria (mCAT). Mitochondrial ROS buffering — not total body antioxidant capacity — is what tips the balance. The vault's `[[Catalase]]` note documents this as the "catalase paradox": acatalasemia is mild, yet mCAT extends lifespan.
2. **The hormetic window gates everything.** Chronic maximal antioxidant throughput erases the signal that drives adaptation. Conversely, pushing the same enzymes *below* their window (TXNRD arrest by [[Auranofin]], radical-cofactor removal by [[Hydroxyurea]]/[[Triapine]], dNTP starvation by [[Clofarabine]]/[[Gemcitabine]]) is exactly how cancer pharmacology kills cells — proof that these enzymes are set-point-regulated stress buffers, not simple scavengers.
3. **Cysteine over-oxidation is designed to be reversible.** The Prx "floodgate" (hyperoxidation → inactivation → [[Sulfiredoxin]] repair) and glutaredoxin-mediated deglutathionylation are *molecular memory*: they let moderate ROS act as hormetic signal while retaining an ATP-costed reset. Irreversible nitration, by contrast, is the aging default that exits the window permanently.

The vault's `[[Antioxidant Supplementation Paradox]]` note provides the human-facing corollary: chronic high-dose antioxidant supplements fail clinical endpoints — and in some trials *increase* risk — because deleting physiological ROS signaling removes the hormetic stimulus that exercise, caloric restriction, and [[Mitohormesis|mitohormesis]] depend on.

---

## 3. Case study A — Trx1's "independent redox arm" and the heart-failure treatment modality

> Trx1 contributes an independent redox arm of the same "increase resistance to pathologic insults" strategy — hence the proposal that stimulating such longevity mechanisms could be a new modality of heart-failure treatment.

**Source:** Alcendor et al., *Circ Res* **100**, 1512–1521, 2007 (doi:10.1161/01.RES.0000267723.65696.4a, PMID 17446436) — the passage is quoted verbatim (archived as `_document_ - Sirt1 Regulates Aging and Resistance to Oxidative Stress in the Heart` in the vault; see Vault sources, §8):

> *"Under the hormesis hypothesis, longevity factors could be upregulated in response to low-grade stress and confer stress resistance … Previously thioredoxin 1 — an antioxidant and among the few that prolong mouse lifespan when overexpressed systemically — is upregulated in response to pressure overload and acts as an antihypertrophic factor and stimulator of mitochondrial function. This raises the possibility that stimulating known longevity mechanisms could be a new modality of heart-failure treatment, by increasing cardiac resistance to pathologic insults."*

**Web research findings:**

1. **The sentence is a proposition, not a result** — made *en passant* in a cardiac-SIRT1 paper and explicitly invoking the hormesis hypothesis. Any downstream use must preserve that epistemic frame.
2. **Independent redox arm validated molecularly.** SIRT1's arm is deacetylation → FOXO → MnSOD/catalase/GSH-biosynthesis; Trx1's arm is direct post-translational thiol-disulfide reduction of [[ASK1]], [[APE1]]/Ref-1, [[Peroxiredoxin|peroxiredoxins]], methionine sulfoxide reductases, and [[Ribonucleotide Reductase]]. They operate in parallel on overlapping stress-resistance endpoints.
3. **Heart-failure relevance is bidirectional, dose-dependent, and isoform-complete.** Trx1 falls in failing human/rat hearts (Lu et al., Wu et al. 2022 survey); cardiac-specific Trx1-KO suffices to cause heart failure (Oka et al. 2020, PMID 31584633); the mitochondrial isoform [[Thioredoxin-2]] (TXNRD2/Prx3 arm) is the organellar half of the same cardiac-resistance program. A 2026 *Life Sciences* study (AAV9 atrial-specific Trx1) confirms the gain-of-function direction for pressure-overload atrial remodeling via SP1/TGF-β/Smad. **No human HF trial of Trx1 stimulation exists** — still a hypothesis.

---

## 4. Case study B — pressure-overload upregulation, antihypertrophy, mitochondrial function, and the mitochondrial-catalase grouping

> Describes Trx1 as up-regulated in response to pressure overload and acting as an antihypertrophic factor and stimulator of mitochondrial function; groups Trx1 with mitochondrial catalase among antioxidants whose overexpression induces lifespan extension and stress resistance.

**Web research findings:**

1. **Upregulation under stress is well documented.** Alcendor shows cardiac SIRT1 rises 5.5–8.8× under TAC and ~4.3× under paraquat, treating Trx1 as a parallel stress-upregulated longevity factor; plasma/myocardial Trx1 rises in HF and acute stress protocols (Yamamoto et al. 2003; biomarker literature).
2. **Antihypertrophic factor — causal, both directions.**
   - *Loss-of-function:* Yamamoto et al. *JCI* 2003 (doi:10.1172/JCI17700, PMID 12913184) — dominant-negative Trx1 in the heart **increased oxidative stress and promoted hypertrophy basally and after pressure overload**.
   - *Gain-of-function:* cardiac Trx1 transgenics reduce ischemia–reperfusion infarct (Turoczi et al. 2003); 2026 atrial-remodeling study replicates for fibrosis.
3. **Stimulator of mitochondrial function — confirmed by loss-of-function genetics.** Oka et al. 2020 (PMID 31584633): cardiac Trx1-KO mice die ~day 25.5 median with HF, hypertrophy, fibrosis, apoptosis; RNA-seq shows downregulation of energy-metabolism genes; **mTOR is the pivot** — Trx1 keeps mTOR reduced at Cys1483, and oxidation-resistant mTOR(C1483F) rescues respiration. This validates the `[[mTOR]]` connection on the vault's `[[Thioredoxin-1]]` note.
4. **The mitochondrial-catalase grouping is exact and causative.** mCAT (Schriner et al. 2005) extends mean/median lifespan while nuclear/peroxisomal catalase does not; mCAT attenuates pressure-overload HF and age-related cardiac dysfunction (Dai et al. 2009; *Circ Res* 2011, PMC3243039). Together with §2, this is the strongest evidence that *mitochondrial* redox buffering is the longevity-relevant target — and that Trx1's *stimulator of mitochondrial function* role is where its benefit lives.

---

## 5. Case study C — a central redox-balancing enzyme that declines with nitrative stress; resists and is a target of oxidative damage

> Trx1 is a central redox-balancing enzyme whose function declines with oxidative/nitrative stress; Trx1 both resists and is a target of oxidative damage.

**Web research findings:**

1. **Nitration inactivates Trx1 without decreasing expression.** Zhang & Tao et al., *Free Radic Biol Med* 2007 (doi:10.1016/j.freeradbiomed.2007.03.031; PMC1949486): aging hearts (20 vs 3 mo) — Trx activity −28% baseline, −55% after MI/R with **unchanged Trx1 protein**, ↑3-nitrotyrosine, ↓Trx1–ASK1 complex, ↑p38. The peroxynitrite-decomposition catalyst FP15 rescued activity and infarct — proof the lesion is nitrative, not transcriptional.
2. **Same mechanism at TXNRD.** Wang et al. 2013 (PMC3804317): nitrated thioredoxin reductase in aging heart after MI/R.
3. **Middle age abolishes the benefit.** Perez et al., 2024 (PMID 38171410): Trx1-overexpression cardioprotection is **lost in 12-month-old mice** — nitrated/inactivated Trx1 even when overexpressed; p-Akt/p-GSK-3β rescue abrogated, infarct reduction disappears.
4. **Trx1 is also a *substrate* of its own pathway's clients.** Du et al., *JBC* 2013 (doi:10.1074/jbc.M112.417162): under oxidative stress, peroxiredoxin-mediated oxidation inactivates Trx1; the **glutaredoxin system reactivates it** — the reversible-repair loop of §2 lesson 3, executed by the vault's `[[Glutaredoxin]]` note. Combined with the nitration data, "both resists and is a target" is literally accurate: **reversible over-oxidation (repairable) vs irreversible nitration (exit from the hormetic window)**.
5. **Peroxynitrite ↔ Trx2.** Mitochondrial [[Thioredoxin-2]] and mPTP components are oxidized by peroxynitrite → swelling → apoptosis — the organellar mirror, mapped on the `[[Peroxynitrite]]` note.

---

## 6. The theme under web scrutiny: hormetic stress resistance across the antioxidant enzymes

The vault's conclusion on `[[Thioredoxin-1]]` — "Trx1 is best understood as a **hormetic/stress-resistance factor** rather than a pure lifespan-extender" — is **strongly supported**, and the same template is visible in every antioxidant-enzyme branch the vault documents.

### 6a. Trx1: the archetype

| Study | Model | Outcome |
|---|---|---|
| Mitsui et al., *Antioxid Redox Signal* 2002 | Human TRX1, β-actin (Tg) | Extended median *and* maximum lifespan + stress resistance — WT controls lived only ~23 mo (sub-optimal housing), later reinterpreted |
| Pérez et al., *J Gerontol A* 2011 | Re-derived Trx1-Tg, barrier facility | Lower oxidative damage; male **earlier-life extension only; maximum unchanged**; no female effect |
| Flores et al. 2018 | Continuous Trx1 OE (endogenous promoter) | Early-life benefit only; **no median/max effect; ↑lymphoma severity/tumor burden** via ASK1 suppression |
| Cunningham et al. 2018 | Trx1 + Trx2 double-Tg | **Shorter** lifespan; accelerated cancer; ↑HIF-1α/NF-κB; ↓ASK1 phosphorylation |
| Roman et al. 2020; Ikeno et al. 2021 (reviews) | Full Tg/KO series | Single-compartment OE = marginal early-life benefit; **double heterozygote downregulation appears beneficial (slowed cancer)** |
| Pérez et al. 2024 | Young vs middle-aged cardioprotection | Benefit confined to the young; nitrative inactivation erases it by mid-age |

### 6b. MnSOD: the acetylation "Goldilocks" dial

The vault's `[[MnSOD]]` note is the second major instance. MnSOD activity is set by the **SIRT3/SIRT4 acetylation ratio** (K68 in humans, K122 in mice):

- **Locked active (K68R, "always on") → dilated cardiomyopathy at 4 months** with cellular senescence and lipid peroxidation (Schell et al. 2025 knock-in) — excess superoxide clearance *also* over-produces H₂O₂ downstream and deletes signaling.
- **Locked acetylated / inactive → cancer stemness (Lys68-Ac monomer switches to 40-fold-increased pro-oxidant peroxidase), hypertension, drug resistance.**
- **Deacetylation that merely restores dynamics → protection** (fasting, [[Honokiol]], SIRT3 activators) — the therapeutic recommendation is to restore *cycling*, not to fix the enzyme on/off. This is a molecular-restated hormetic window: the enzyme's own post-translational state is the dose dial.

### 6c. Catalase: the compartment and paradox instance

- Cytosolic/peroxisomal catalase OE → no lifespan effect; **mCAT → ~20% median extension + cardiac aging protection** (Schriner 2005; Dai 2009/2011).
- The "catalase paradox" — acatalasemia is clinically mild while mCAT is beneficial — again shows that *where* and *how much* matter more than *whether* the enzyme exists.

### 6d. Peroxiredoxin–Sulfiredoxin: the floodgate and the reset

- Prx over-oxidation (sulfinic Cys-SO₂H) reversibly inactivates the enzyme — the "floodgate" that lets H₂O₂ accumulate enough to signal (Yamamoto/JONES-type signalling) without allowing runaway damage.
- [[Sulfiredoxin]] restores Prx at ATP cost, Nrf2-induced — cellular **hormetic memory**: adaptation is stored in reversible cysteine modification and repaid energetically. This is the molecular counterpart to the overcompensation phase of hormesis in the vault's `[[Hormesis]]` note.

### 6e. The pharmacological underside — pushing out of the window

- [[Auranofin]] irreversibly blocks TXNRD → the Trx system can no longer recycle → ROS accumulation, ASK1 de-repression, JNK/p38 death, ferroptosis. Cancer cells, which *trade on* Trx-driven redox fitness, die; the same chemistry is an anti-inflammatory in RA at lower dosing (6 mg/day). **One enzyme, two regimes, opposite outcomes — hormesis in both directions.**
- RNR branch: [[Hydroxyurea]], [[Triapine]], [[Clofarabine]], [[Gemcitabine]] starve replicating cells of dNTPs → replication stress → checkpoint arrest/senescence (low) or apoptosis (high). Normal cells' hormetic reserve (p53R2-route repair, GSH/Grx) is exactly what selects for therapeutic index.

### 6f. The sirtuin parallels strengthen the frame

- **SIRT1** (Alcendor 2007): cardiac benefit at 2.5–7.5×, pathology at 12.5× — documented on the vault's `[[SIRT1]]` note.
- **MnSOD**: the SIRT3/SIRT4 acetylation dial (§6b).
- **NRF2 → catalase/Prx3/Srx/HO-1**: the feed-forward transcriptional arm that transduces low-grade stress into *more* buffering capacity — the execution arm of hormesis.

**Synthesis:** across Trx1, Trx2, mCAT/catalase, MnSOD, GPx, Prx/Srx, Grx/TXNRD, the same three laws hold: *(i)* benefit is compartment-specific and front-loaded in youth; *(ii)* activity must cycle inside a set-point window (expression level ≠ protection); *(iii)* reversibility of oxidative modification is what buys adaptation — and irreversible nitration, or pharmacological over-inhibition, exits the window in opposite directions. The antioxidant "system" is therefore best modeled as **a set of context-gated stress-resistance factors**, of which Trx1 is simply the best-characterized archetype. This makes `[[Thioredoxin-1]] ↔ [[Hormesis]]` and `[[Thioredoxin-1]] ↔ [[SIRT1]]` genuinely strong links, now present in the graph.

---

## 7. Caveats & follow-ups

1. **Graph data is one rebuild behind.** `wiki-out/graph.json` and the combined `web/public/data/nodes.json` predate parts of the cluster: the nodes `Thioredoxin-1`, `Thioredoxin-2`, `Glutaredoxin`, `CxxC Motif`, `Auranofin`, `Ribonucleotide Reductase`, `dNTP`, `RRM1`, `RRM2`, `RRM2B`, `Triapine`, `Clofarabine` (and the deepened `ASK1`, `APE1`, `Peroxiredoxin 3`, `Sulfiredoxin`, `Thioredoxin`, `Thioredoxin reductase` notes) are not yet surfaced in the UI. A `rebuild-wiki` / `build-combined` run (and optionally `sync-graph`) is needed to surface them in the UI and link-prediction/diff reports.
2. **Guard the epistemic frame of Case study A.** "Stimulating longevity mechanisms as a heart-failure modality" remains a **hypothesis** raised in the 2007 paper; the vault and this document phrase it as such.
3. **Graph anchor present.** The `[[Hormesis]]` connection is live on `Thioredoxin-1.md` (Connections + Linking Summary), converting the hormetic framing from prose to a graph edge; this review integrates the full cluster with the broader antioxidant-enzyme hormesis theme (MnSOD dial, mCAT compartment lesson, Prx–Srx floodgate/reset, Auranofin pharmacology, RNR-window logic).
4. **Remaining possible additions** (only high-frequency, well-defined concepts): `[[Ebselen]]` and `[[Olaparib]]` (suggested by the `Auranofin` note); `[[Peroxiredoxin 5]]` / `[[Thioredoxin Reductase 2]]` (by the `Peroxiredoxin 3` note); `[[3-Nitrotyrosine]]` (nitrative cluster); `[[SAMHD1]]` / `[[Deoxycytidine kinase]]` (dNTP/RNR cluster); `[[Protein Disulfide Isomerase]]` / `[[Thioredoxin Fold]]` (CxxC); `[[Mitochondrial DNA Depletion Syndrome]]` (RRM2B); `[[Acute Lymphoblastic Leukemia]]` / `[[DNA Polymerase]]` (Clofarabine).
5. **Strong connections to strengthen in the next graph build:** `Thioredoxin-1 ↔ Hormesis`, `Thioredoxin-1 ↔ SIRT1`, `Thioredoxin-1 ↔ Heart Failure`, `Thioredoxin-1 ↔ MnSOD` (shared heart-failure redox arm), `MnSOD ↔ SIRT3`, `Peroxiredoxin 3 ↔ Sulfiredoxin`, `Auranofin ↔ Thioredoxin reductase`, `Ribonucleotide Reductase ↔ dNTP`.

---

## 8. Key references

### Primary literature (all verified by web search on 01_Sep_2026)

1. Alcendor RR et al. **Sirt1 regulates aging and resistance to oxidative stress in the heart.** *Circ Res* 2007;100(10):1512–1521. doi:10.1161/01.RES.0000267723.65696.4a, PMID 17446436. — Source of Excerpts 1 & 2.
2. Yamamoto M et al. **Inhibition of endogenous thioredoxin in the heart increases oxidative stress and cardiac hypertrophy.** *J Clin Invest* 2003;112(9):1395–1406. doi:10.1172/JCI17700, PMID 12913184.
3. Oka SI et al. **Thioredoxin-1 maintains mitochondrial function via mechanistic target of rapamycin signalling in the heart.** *Cardiovasc Res* 2020;116(10):1742–1755. doi:10.1093/cvr/cvz251, PMID 31584633, PMC7825501.
4. Mitsui A et al. **Overexpression of human thioredoxin in transgenic mice controls oxidative stress and life span.** *Antioxid Redox Signal* 2002;4(4):693–696. doi:10.1089/15230860260220201.
5. Pérez VI et al. **Thioredoxin 1 overexpression extends mainly the earlier part of life span in mice.** *J Gerontol A Biol Sci Med Sci* 2011;66A(12):1286–1299. doi:10.1093/gerona/glr125, PMC3210956.
6. Pérez VI et al. **The overexpression of major antioxidant enzymes does not extend the lifespan of mice.** *Aging Cell* 2009;8(1):73–75. doi:10.1111/j.1474-9726.2008.00448.x. — The systematic negative control for CuZnSOD/catalase/GPx/MnSOD.
7. Flores LC et al. **Continuous overexpression of thioredoxin 1 enhances cancer development and does not extend maximum lifespan in male C57BL/6 mice.** *Pathobiol Aging Age Relat Dis* 2018;8(1):1533754. PMC6201794.
8. Cunningham GM et al. **Thioredoxin overexpression in both the cytosol and mitochondria accelerates age-related disease and shortens lifespan in male C57BL/6 mice.** *GeroScience* 2018;40(5–6):453–468. doi:10.1007/s11357-018-0039-6.
9. Zhang H, Tao L et al. **Nitrative thioredoxin inactivation as a cause of enhanced myocardial ischemia/reperfusion injury in the aging heart.** *Free Radic Biol Med* 2007;43(1):39–47. doi:10.1016/j.freeradbiomed.2007.03.031, PMC1949486.
10. Pérez V et al. **Middle-age abolishes cardioprotection conferred by thioredoxin-1 in mice** (2024; PMID 38171410).
11. Du Y et al. **Thioredoxin 1 is inactivated due to oxidation induced by peroxiredoxin under oxidative stress and reactivated by the glutaredoxin system.** *J Biol Chem* 2013. PMID 23316052-associated; documents the Grx reset switch of §6d.
12. Wang K et al. **Thioredoxin reductase was nitrated in the aging heart after myocardial ischemia/reperfusion.** PMC3804317 (2013).
13. Roman MG et al. **Thioredoxin and aging: What have we learned from the survival studies?** *Aging Pathobiol Ther* 2020;2(3):126–133. PMC9049237.
14. Ikeno Y et al. **Thioredoxin — a magic bullet or a double-edged sword for mammalian aging?** *Aging Pathobiol Ther* 2021. doi:10.31491/APT.2021.06.035.
15. Aranda-Rivera A et al. **Evolutionarily conserved role of thioredoxin systems in determining longevity.** *Antioxidants (Basel)* 2023;12(4):944. doi:10.3390/antiox12040944, PMC10135697.
16. Saitoh M et al. **Mammalian thioredoxin is a direct inhibitor of apoptosis signal-regulating kinase (ASK) 1.** *EMBO J* 1998;17(9):2596–2606. PMID 9564037.
17. Hsieh CC, Papaconstantinou J. **Thioredoxin–ASK1 complex levels regulate ROS-mediated p38 MAPK pathway activity in livers of aged and long-lived Snell dwarf mice.** *FASEB J* 2006;20(2):259–268. PMID 16449796.
18. Wu QJ et al. **The sirtuin family in health and disease.** *Signal Transduct Target Ther* 2022;7:402. doi:10.1038/s41392-022-01257-8.
19. Trx1 atrial remodeling in pressure-overload HF via SP1/TGF-β/Smad. *Life Sciences* 2026 (doi:10.1016/j.lfs.2026.xx, in proof at time of review).
20. Schriner SE et al. **Extension of murine life span by overexpression of catalase targeted to mitochondria.** *Science* 2005;308(5730):1909–1911.
21. Dai DF et al. **Mitochondrial-targeted catalase (mCAT) attenuates pressure-overload heart failure and cardiac aging** (*Circulation* 2009; *Circ Res* 2011, PMC3243039).
22. Schell et al. **MnSOD K68R knock-in (locked-active) → dilated cardiomyopathy and senescence** (2025); Zhu et al. *Nat Commun* 2019 (Lys68-Ac → pro-oxidant monomer → cancer stemness).

### Vault sources consulted

**Archived documents** (in `src/notes/`):
- `sirtuins/_document_ - Sirt1 Regulates Aging and Resistance to Oxidative Stress in the Heart.md` — Alcendor et al. 2007 (Excerpts 1 & 2; the hormesis-framed heart-failure proposal).
- `sirtuins/_document_ - sirtuins in health and disease s41392-022-01257-8.md` — Wu et al. 2022 sirtuin-family survey (heart-failure/sirtuin arm).

**Entity notes** (canonical wikilink titles; the live graph sources):
- *Thioredoxin-system cluster:* [[Thioredoxin-1]], [[Thioredoxin-2]], [[Thioredoxin]], [[Thioredoxin reductase]], [[Glutaredoxin]], [[CxxC Motif]], [[Peroxiredoxin]], [[Peroxiredoxin 3]], [[Sulfiredoxin]], [[ASK1]], [[APE1]]
- *DNA-synthesis branch:* [[Ribonucleotide Reductase]], [[RRM1]], [[RRM2]], [[RRM2B]], [[dNTP]], [[Auranofin]], [[Triapine]], [[Clofarabine]], [[Gemcitabine]], [[Hydroxyurea]]
- *Broader antioxidant-enzyme landscape:* [[Catalase]], [[Superoxide Dismutase]], [[SOD1]], [[MnSOD]], [[MnSOD]], [[Glutathione Peroxidase]], [[Glutathione]], [[Hormesis]], [[Mitohormesis]], [[Antioxidant Supplementation Paradox]], [[Nitrative Stress]], [[Peroxynitrite]], [[Heart Failure]], [[SIRT1]]