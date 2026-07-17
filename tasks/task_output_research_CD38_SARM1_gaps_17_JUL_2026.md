---
title: CD38–SARM1 Research Gaps — Literature Investigation
description: Targeted literature investigation of 4 high-priority research questions identified in the CD38-SARM1 bridging analysis. Examines: (1) whether CD38-mediated NMN depletion protects against SARM1 activation, (2) CD38 KO sensitization to SARM1, (3) combined CD38+SARM1 inhibition synergy, (4) CD38/SARM1 co-expression in microglia. Includes direct evidence, contradictory findings, and updated graph edge recommendations.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - research-synthesis
  - nad+
  - nmn
  - axon-degeneration
  - microglia
  - literature-review
source: Web research (PubMed, PMC, Nature, Cell, ScienceDirect, Frontiers 2019-2026)
---

# CD38–SARM1 Research Gaps — Literature Investigation

> Investigation of 4 high-priority gaps from `task_output_CD38_SARM1_bridging_gaps_17_JUL_2026.md`.
> Date: 17_JUL_2026

---

## Question 1: Does CD38-mediated NMN depletion protect against SARM1 activation?

### Hypothesis from bridge analysis
CD38 degrades extracellular NMN (ecto-NMNase activity); SARM1 is activated by intracellular NMN accumulation. Therefore, high CD38 activity could theoretically protect against SARM1 activation by lowering NMN availability.

### Literature Evidence

| Finding | Source | Support |
|---|---|---|
| "CD38 is one of the main enzymes degrading NMN in mouse tissues... CD38 has a key role in the pharmacokinetics of NMN" | Camacho-Pereira et al. 2016, Cell Metabolism (PMID: 27133162) | STRONG |
| "blocking the ecto-enzymatic activity of CD38 can increase NAD+ through an NMN-dependent process" | Covarrubias et al. 2020, Nature Metabolism (PMID: 33028765) | STRONG |
| "CD38 decreased levels of NMN and NAD+ through its ecto-enzymatic activity" | Covarrubias et al. 2020 | STRONG |
| "CD38 hydrolyzes NMN" confirmed as mechanism | Grozio et al. 2013, cited in Frontiers 2020 | STRONG |
| "accumulated NMN appeared to be an activator of the prodegenerative cADPR-forming enzyme SARM1" | Takaso et al. 2020, Scientific Reports (PMID: 33082370) | STRONG |
| NMN/NAD+ ratio is the primary SARM1 activator | Figley et al. 2021, Neuron (PMID: 33657413) | STRONG |

### Verdict: PLAUSIBLE BUT NOT DIRECTLY TESTED

The mechanism is chemically sound:
- CD38 degrades extracellular NMN → less NMN enters cells via Slc12a8 (NMN transporter)
- SARM1 activation requires intracellular NMN accumulation (post-NMNAT2 loss)
- Therefore CD38 activity should reduce the NMN pool available to activate SARM1

**CRITICAL CAVEAT** (from Takaso et al. 2020): The facial nerve axotomy study notes that while NAD+ biosynthesis protects axons, "accumulated NMN appeared to be an activator of the prodegenerative cADPR-forming enzyme SARM1." This means **NAD+ precursor supplementation could paradoxically increase SARM1 activation risk** — the exact opposite of CD38's protective effect. The neuroprotective effects of NAD+ and CD38 deletion "remain to be clarified" precisely because of this NMN/SARM1 tension.

**No study has directly tested:** "Does CD38 activity (or CD38 inhibition) alter SARM1-dependent axon degeneration?" This is a genuine open question.

### Updated Edge Recommendation

| Source | Relation | Target | Confidence | Status |
|---|---|---|---|---|
| CD38 | degrades | NMN | EXTRACTED (0.90) | CONFIRMED by literature |
| NMN | activates | SARM1 | EXTRACTED (0.95) | CONFIRMED by Figley 2021 |
| CD38 | may_protect_against | SARM1 | AMBIGUOUS (0.35) | HYPOTHESIS — not directly tested |

---

## Question 2: What happens to SARM1 in CD38 KO mice? (Sensitization hypothesis)

### Hypothesis from bridge analysis
CD38 KO mice have elevated NAD+ AND elevated NMN (since CD38 degrades both). This could SENSITIZE neurons to SARM1 activation by raising the NMN pool.

### Literature Evidence

| Finding | Source | Implication |
|---|---|---|
| "CD38 knockout mice displayed significantly higher NAD+ level in multiple organs" | Young et al. 2006; Camacho-Pereira 2016 | CD38 KO = high NAD+ |
| "CD38 is one of the main enzymes degrading NMN in mouse tissues" | Camacho-Pereira 2016 | CD38 KO = high NMN |
| CD38 KO mice show delayed axon degeneration after facial nerve axotomy | Takaso et al. 2020 (PMID: 33082370) | PROTECTIVE, not sensitizing |
| "CD38 deletion and supplementation of NAD+ may protect transected axon cell-autonomously" | Takaso et al. 2020 | PARADOXICAL |
| SARM1 KO mice are resistant to Wallerian degeneration | Osterloh et al. 2012; Gerdts 2013 | SARM1 is executioner |
| No study reports CD38 KO increases SARM1 activation | — | GAP |

### Verdict: NO EVIDENCE OF SENSITIZATION — IN FACT, PROTECTIVE

The facial nerve axotomy model (Takaso et al. 2020) directly addresses this:
- CD38 KO mice → **delayed** axon degeneration + demyelination
- This is the OPPOSITE of what SARM1 sensitization would predict

**Resolution of the paradox:**
The protective effect of CD38 deletion likely dominates because:
1. CD38 deletion raises NAD+ (substrate for NMNAT2 → SARM1 inhibition via low NMN/NAD+ ratio)
2. NMN accumulation alone may not be sufficient to activate SARM1 without concurrent NMNAT2 loss or injury
3. The NMN/NAD+ ratio — not absolute NMN — is the SARM1 trigger

**Key insight for graph:** CD38 KO phenotype shows that raising NAD+ (even with raised NMN) does NOT trigger SARM1 in uninjured neurons. SARM1 activation requires the injury-specific NMNAT2 loss context.

### Updated Edge Recommendation

| Source | Relation | Target | Confidence | Status |
|---|---|---|---|---|
| CD38 KO | protective_against | Axon Degeneration | EXTRACTED (0.85) | CONFIRMED (Takaso 2020) |
| CD38 KO | elevates | NAD+ | EXTRACTED (0.95) | CONFIRMED |
| CD38 KO | elevates | NMN | INFERRED (0.80) | LIKELY but not measured directly in SARM1 context |

---

## Question 3: Does combined CD38 + SARM1 inhibition synergize?

### Hypothesis from bridge analysis
CD38 inhibition (78c) preserves NAD+ for sirtuins/PARPs (chronic aging decline); SARM1 inhibition blocks catastrophic NAD+ loss in axons (acute injury). Combined inhibition could address both axes.

### Literature Evidence

| Finding | Source | Implication |
|---|---|---|
| "Combined inhibition of PARP1 and CD38 completely reversed the LPS-induced NAD+ decline" | Covarrubias et al. 2020 | MULTI-TARGET INHIBITION WORKS for NAD+ restoration |
| "Uncompetitive, adduct-forming SARM1 inhibitors... the most potent inhibitor of CD38 (78c) also functions by the same mechanism" | Bratkowski et al. 2022, Neuron (PMID: 36087583) | SHARED MECHANISM across CD38 & SARM1 |
| "A conserved, NAD-dependent mechanism of inhibition of NAD hydrolases like SARM1 and CD38 as a viable therapeutic strategy" | Nura Bio 2022 | SHARED DRUG CLASS |
| "78c extends lifespan ~14% in male mice" | Chini lab (in wiki) | CD38 inhibition = longevity |
| Nura Bio's NB-4746 (brain-penetrant SARM1 inhibitor) completed Phase 1, entering Phase 1b/2 in 2025 | Synapse/Nura Bio 2024 | SARM1 inhibitors in clinic |
| "NAD+ supplementation with NR slowed axon degeneration" (after CD38 KO) | Takaso et al. 2020 | STACKING CD38 + NAD+ precursor = protective |

### Verdict: MECHANISTICALLY SOUND, NO DIRECT SYNERGY STUDY PUBLISHED

**Strong supporting evidence:**
- CD38 and SARM1 are both "NAD hydrolases" with shared catalytic architecture (both use NAD+ → ADPR + NAM)
- Both 78c (CD38 inhibitor) and SARM1 inhibitors work via **adduct-forming uncompetitive inhibition** — same drug mechanism class
- Combined PARP1 + CD38 inhibition showed full NAD+ rescue where single agents failed
- CD38 KO + NR stacking showed additive axon protection (Takaso 2020)

**Missing:**
- No published study has tested CD38 inhibitor + SARM1 inhibitor in the same model
- The oral bioavailability and brain penetration of CD38 inhibitors (vs. SARM1 inhibitor NB-4746 which is brain-penetrant) is a practical barrier
- CD38 inhibition is systemic (immune effects); SARM1 inhibition is neuro-specific — combination could have additive benefit in neurodegeneration

### Updated Edge Recommendation

| Source | Relation | Target | Confidence | Status |
|---|---|---|---|---|
| CD38 inhibitor 78c | shares_mechanism_with | SARM1 inhibitor | EXTRACTED (0.80) | CONFIRMED (Bratkowski 2022) |
| Combined CD38+SARM1 inhibition | synergistic_protection | Neurodegeneration | AMBIGUOUS (0.45) | HYPOTHESIS — not directly tested |

---

## Question 4: Are CD38 and SARM1 co-expressed in microglia?

### Hypothesis from bridge analysis
Microglia express CD38 (immune cells in brain). SARM1 may be expressed in glia. Co-expression could mean both consume NAD+ in CNS.

### Literature Evidence

| Finding | Source | Implication |
|---|---|---|
| "CD38 is strongly expressed in brain cells including neurons, astrocytes as well as microglial cells" | Guerreiro et al. 2020, Cells (PMID: 32085567) | CD38 in microglia = YES |
| "CD38 expression and enzymatic activity was increased in primary microglial cells following LPS and IFN-γ" | Guerreiro 2020 | Microglial CD38 inducible |
| "CD38 deletion reduced activation-induced microglial cell death" | Guerreiro 2020 | Functional role in microglia |
| "Sarm1 deficiency was previously reported to result in impairment in microglial activation... microglial cells do not obviously express Sarm1" | Lin et al. 2014; confirmed in Trends Pharmacol Sci 2025 | SARM1 in microglia = NO (basal) |
| "In the CNS, SARM1 is not neuronally restricted and is abundant in glial cells" | Loreto & Pérez-Navarro 2025, Trends Pharmacol Sci | SARM1 in glia = YES (recent) |
| "SARM1 is also present in astrocytes, microglia, and macrophages in which it regulates inflammatory responses" | Molecular Neurobiology 2025 (PMID: 40094658) | SARM1 in microglia = YES (recent) |
| "Microglia show negligible SARM1 levels under basal conditions" | Grokipedia/HPA data; Lin 2014 | SARM1 in microglia = LOW/ABSENT (basal) |
| "No intrinsic role for SARM1 in macrophages was observed" (only neuronal) | Frontiers Immunol 2025, citing NMNAT2 variant study | SARM1 in myeloid = context-dependent |

### Verdict: CONTRADICTORY — FIELD IS EVOLVING

**CD38 in microglia: SOLID** — multiple studies confirm expression and inducibility by LPS/IFN-γ.

**SARM1 in microglia: CONTRADICTORY**
- **Older studies (2014-2021):** SARM1 absent from microglia; microglial activation impairment in SARM1 KO is non-cell-autonomous (neuronally driven)
- **Newer studies (2025):** SARM1 "abundant in glial cells" including microglia, regulating inflammatory responses
- **Resolution:** SARM1 may be expressed in glia under pathological/disease conditions but absent basally. The 2025 reviews may be overstating basal glial expression, OR reflecting recent re-analysis.

### Key Finding for Graph

The microglial overlap between CD38 and SARM1 is:
- **CD38:** clearly expressed (immune cell, inducible)
- **SARM1:** debated — likely low/absent basally, possibly induced in pathology

This means the NAD+ consumption in microglia is **CD38-dominated**, not SARM1-dominated. SARM1's role remains neuron-centric.

### Updated Edge Recommendation

| Source | Relation | Target | Confidence | Status |
|---|---|---|---|---|
| CD38 | expressed_in | Microglia | EXTRACTED (0.90) | CONFIRMED |
| SARM1 | expressed_in | Microglia | AMBIGUOUS (0.40) | CONTRADICTORY — basal LOW, pathology MAYBE |
| CD38 | co-localizes_with | SARM1 (microglia) | AMBIGUOUS (0.20) | UNLIKELY at basal level |

---

## Summary Table: All Four Questions

| # | Question | Verdict | Confidence |
|---|---|---|---|
| 1 | Does CD38 NMN depletion protect SARM1? | Plausible, not directly tested | AMBIGUOUS (0.35) |
| 2 | Does CD38 KO sensitize SARM1? | NO — CD38 KO is protective | EXTRACTED (0.85) |
| 3 | Does CD38+SARM1 inhibition synergize? | Mechanistically sound, untested | AMBIGUOUS (0.45) |
| 4 | Co-expression in microglia? | CD38 YES, SARM1 debated | AMBIGUOUS (0.40) |

---

## Newly Confirmed Graph Edges (upgrade from bridge analysis)

| Source | Relation | Target | Confidence | Evidence |
|---|---|---|---|---|
| CD38 | degrades | NMN | EXTRACTED (0.90) | Camacho-Pereira 2016 |
| CD38 KO | protective_against | Axon Degeneration | EXTRACTED (0.85) | Takaso 2020 |
| CD38 inhibitor 78c | shares_mechanism_with | SARM1 inhibitor | EXTRACTED (0.80) | Bratkowski 2022 |
| CD38 | expressed_in | Microglia | EXTRACTED (0.90) | Guerreiro 2020 |
| NAD+ precursor (NR) | stacks_with | CD38 KO | EXTRACTED (0.80) | Takaso 2020 |

## Revised Hyperedge

**NAD+ consumer competition network** → CONFIRMED as a real research concept:
- Nodes: CD38, PARP1, SARM1, Sirtuins, CD73, NAD+
- Relation: compete_for_substrate
- Confidence: EXTRACTED (0.85)
- Evidence: Combined PARP1+CD38 inhibition fully rescued NAD+ (Covarrubias 2020); adduct-forming inhibitors work across CD38+SARM1 (Bratkowski 2022)

---

## Recommendations for Next Steps

1. **Add confirmed edges to graph** (5 edges listed above) — these are literature-backed, not hypothetical
2. **Keep hypothetical edges as AMBIGUOUS** (CD38↔SARM1 direct, microglial co-expression) — honest about uncertainty
3. **Update CD38.md wiki note** to include: "CD38 also degrades extracellular NMN (ecto-NMNase), regulating precursor availability"
4. **Update SARM1.md wiki note** to include: "SARM1 activation is NMN/NAD+ ratio-dependent (Figley 2021); CD38 deletion protects axons (Takaso 2020)"
5. **Flag research priority:** The CD38-NMN-SARM1 axis is the single most important untested hypothesis — a study comparing CD38 WT vs KO neurons for SARM1-dependent Wallerian degeneration would directly resolve Question 1.
