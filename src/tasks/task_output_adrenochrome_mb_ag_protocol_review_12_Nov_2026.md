---
title: Adrenochrome, aminoguanidine and methylene blue protocol review
description: Evidence synthesis of vault protocol documents and published web pages for adrenochrome, aminoguanidine, methylene blue and carbazochrome, with recent external research through November 2026 and cross-reference to Nesci and Algieri 2026 mitochondrial dysfunction and inflammaging review, annotated by evidence tier.
created: 2026-11-12
updated: 2026-11-13
type: task-output
tags:
  - adrenochrome
  - aminoguanidine
  - methylene-blue
  - carbazochrome
  - mitohormesis
  - protocol-review
---

# Adrenochrome, aminoguanidine and methylene blue protocol review

Scope: synthesis of vault sources in `src/notes/adrenochrome/` (260 files), `src/notes/_link/` entity and document notes, `src/tasks/adrenochrome_mb_ag/` (26 files), recent tasks (`task_output_adrenochrome_eryptosis_crossover_04_Nov_2026`, `task_output_hardcoded_individual_biomarker_gates_26_Sep_2026`, Aug 2026 node-network traces) and the published page `web/public/pages/en-US/adrenochrome-protocol.html`, compared with external literature through 12 November 2026. Evidence tiers: Tier 1 = human randomized trial; Tier 2 = human cohort/association or historical clinical use; Tier 3 = rodent/in-vivo animal; Tier 4 = in-vitro or ex-vivo human cells; Tier 5 = hypothesis/untested.

The published page is labelled `[Speculative]` and states `untested in humans` (`adrenochrome-protocol.html:6-7,42,44-48`). That label is consistent with the vault evidence: the MRR, GOPS and SRAC combinations have no direct combination study; GOPS self-scores `7.2/10` and concedes it admits no direct combo studies (`_document_ - GOPS - glyco-oxidative proteostasis.md:29-39,93`).

## Evidence tier by compound

| Compound and claim | Tier | Status |
| --- | --- | --- |
| [[Adrenochrome]] as endogenous neurotoxin in dopaminergic loss | 4 | Supported mechanistically in cell models; 2026 data reported below strengthens the neurotoxicity direction and does not support deliberate exposure. |
| [[Methylene blue]] as methemoglobinemia antidote | 1 | Established clinical use. Not evidence for longevity use. |
| [[Methylene blue]] as catalytic redox cycler and tau agent | 3-4 | Rodent and cell data; staggered-start mouse data only. This search did not identify a 2024-2026 human RCT confirming cognitive or tau benefit. |
| [[Aminoguanidine]] as AGE inhibitor | 1-negative | Phase III diabetic nephropathy failed: glomerulonephritis and no significant benefit, not approved (`_link/Aminoguanidine.md:38-45`). No new RCT identified in 2024-2026. |
| [[Carbazochrome]] as hemostatic | 1 for bleeding; 5 for MRR hormesis | 2025 meta-analysis PMID 40676674 and triple-blind RCT PMID 39914600 address surgical bleeding only. |
| MRR, GOPS, SRAC combinations | 5 | Hypothesis. No tested combination; doses are illustrative estimates (page `:439-526,540`). |

## Recent external research relevant to vault claims

### Aminochrome and autophagosome-lysosome fusion, 2026

Briceño et al., *Antioxidants* 15(6):739 (PMC13295424; PMID 42352045), differentiated SH-SY5Y dopaminergic neurons exposed to 50 uM aminochrome for 16 h: LC3b-LAMP1 Pearson colocalization decreased 27% (`p<0.001`), LC3b-II intensity increased 81% (`p<0.01`), perinuclear vimentin aggregates increased 6-fold (`p<0.001`), ubiquitin mRNA increased 9-fold at 4 h (`p<0.001`), and no added LC3b-II increase with bafilomycin A1, consistent with impaired autophagic flux. Vinblastine potentiated the fusion block; rapamycin (10 uM) and trehalose (100 mM) preincubation partially attenuated death despite the fusion block. Mechanism reported: aminochrome-tubulin adducts, microtubule destabilization, blocked autophagosome-lysosome fusion, perinuclear and nuclear ubiquitin aggregates. Tier 4. The finding is in SH-SY5Y cells; it remains untested as a causal mechanism in human Parkinson disease.

A 2026 preprint on aminochrome as single-neuron neurotoxin is consistent with this direction. This search did not identify a human aminochrome exposure trial.

### Carbazochrome hemostasis, 2025

Carbazochrome sodium sulfonate plus tranexamic acid was reported more effective than tranexamic acid alone for bleeding control in a 2025 meta-analysis (PMID 40676674, cited by 6 at search time). A 2025 randomized triple-blind study of intravenous carbazochrome sodium sulfonate (PMID 39914600) addresses perioperative bleeding. No NRF2/SIRT1, Complex III superoxide, or hormesis endpoint was reported in these sources. Tier 1 for the bleeding indication; Tier 5 for MRR triggering.

### Methylene blue, 2024-2026

This search did not identify a new randomized human trial of methylene blue for cognition, tau pathology, methemoglobinemia-independent mitochondrial benefit, or lifespan. Vault claims rest on earlier work: Atamna, FASEB J. 2008 (fibroblast senescence); Atamna, Redox Biol. 2015; Tucker, Mol Neurobiol. 2018; Xiong et al., Sci Rep. 2017, all cited in `senescence/_document_ - Mitochondrial dysfunction in cellular senescence...:946-966`. Tier 4 for senescence delay in culture; Tier 3 for tau-transgenic mouse prevention data where treatment started before pathology.

### Aminoguanidine, 2024-2026

A 2024 glycation review (Uceda et al., Biophys Rev) retains pimagedine as prototype dicarbonyl trap for methylglyoxal and glyoxal. No revival of the diabetic nephropathy program was identified. The negative human result (Tier 1-negative) therefore stands as the highest-tier human evidence, and the vault's long-term use carries the reported toxicity pattern (pro-oxidant activity, autoimmune reactions, vitamin B6 depletion; `Aminoguanidine.md:38-45`).

## Protocol structure as documented in vault

- **MRR (mitohormetic redox relay)** (`_document_ - MRR - mitohormesis.md`, created 2026-06-15, updated 2026-07-09): carbazochrome trigger plus methylene blue shunt plus NR/NMN fuel plus urolithin A cleanup, proposed to activate NRF2/SIRT1/PGC-1a. Proposed assays only (`:66-74`); Tier 4-5.
- **GOPS (glyco-oxidative proteostasis)** (`_document_ - GOPS - glyco-oxidative proteostasis.md`, 2026-06-19): [[Adrenochrome monoaminoguanidine]] plus spermidine 1-5 mg plus carnosine 500 mg-1 g. No direct combination study (`:39,93`); Tier 5.
- **SRAC (SASP-remodeling aminochrome complex)** (`_document_ - SRAC - SASP-Remodeling Aminochrome Complex.md`, 2026-07-04, updated 2026-07-09): Phase 1 AMM plus methylene blue plus rapamycin 5 mg/week plus GlyNAC, then Phase 2 fisetin; nanoparticle delivery removed and rapamycin/fisetin sequenced in the 08-09 Jul revision (`:18-24`); Tier 4-5.
- **Outline dosing** (`outline_adrenochrome_mb_ag_protocol_27_JUN_2026-00.md:53-55`): methylene blue 0.5-2 mg/kg/day oral; aminoguanidine 150-300 mg twice daily; histamine-intolerance risk flagged. The web protocol prints methylene blue 37-75 mg/day, rapamycin 5 mg/week, fisetin 500-1500 mg, aminoguanidine 150-300 mg twice daily (`:439-526`), with a disclaimer that all dosing is estimates, not validated regimens (`:540`).

## Unresolved mechanistic contradictions

### Carbazochrome redox activity

`Carbazochrome.md:43-45` states the semicarbazone blocks one-electron reduction, rendering carbazochrome redox-silent, while `Carbazochrome.md:49` claims MRR-relevant superoxide generation from Complex III. The Aug 2026 Round-3 trace (`node_network_adrenochrome_24_AUG_2026/...:35-38`) adjudicated carbazochrome as redox-attenuated and removed the Complex-I edge as an evidence-based null. The MRR trigger claim remains undemonstrated with semicarbazone chemistry as currently described.

### Adrenochrome monoaminoguanidine and dicarbonyl trapping

[[Aminoguanidine]] traps 1,2-dicarbonyls through its free, nucleophilic hydrazine group (`-NH-NH2`). In [[Adrenochrome monoaminoguanidine]], that group is consumed to form the hydrazone bond to the indoline-dione core (`_document_ - glyco-oxidative modulation.md:38-45`). AMM AGE inhibition therefore lacks a stated mechanism; the vault lists prodrug hydrolysis, guanidine-only activity, or metal chelation as untested alternatives, yet GOPS/SRAC documents continue to assert dicarbonyl trapping by AMM in senescent cells. Systematic evaluation of AMM in modern aging or collagen crosslinking models is lacking in peer-reviewed literature (`glyco-oxidative modulation.md:55`).

### Aminochrome and autophagy direction

The 2026 SH-SY5Y results report aminochrome blockade of autophagosome-lysosome fusion with accumulation of perinuclear and nuclear aggregates. The protocol direction (deliberate aminochrome-family redox cycling intended to activate autophagy) is opposite to the reported effect of aminochrome itself; rapamycin-containing phases attenuate death in vitro without restoring fusion. Briceño et al. methods used 50 uM aminochrome (480 nm, molar extinction coefficient 3058 M-1 cm-1); these values are specific to that model and are not generalized to other aminochromes.

## Safety gates identified within vault evidence

- **[[NQO1]] rs1800566:** C609T T/T is functionally null (2-4% wild-type activity, Siegel et al. 1999). The Sep 2026 gate analysis (`task_output_hardcoded_individual_biomarker_gates_26_Sep_2026.md:123-129`) reports ~20% carrier rate in East Asians and no stratification in MRR dosing; NQO1-null subjects clear quinones via one-electron CYP450/b5-reductase cycling instead of two-electron detoxification. `NQO1.md:62` records the same gap.
- **[[G6PD]] deficiency:** methylene blue contraindication for hemolysis. Framed correctly in the vault as an admissibility gate, but no screening protocol is defined (gap analysis 09 Jul 2026 `:35-40`).
- **Serotonin syndrome:** methylene blue is a potent MAO-A inhibitor; co-administration with SSRI/SNRI agents is contraindicated (`_link/_document_ - methylene blue and aminguanidine.md:85`).
- **Histamine intolerance:** aminoguanidine inhibits gut diamine oxidase; long-term use is reported to produce dietary histamine intolerance and autoimmune reactions (`_link/_document_ - methylene blue and aminguanidine.md:87,89-90`).
- **Methemoglobinemia:** methylene blue is both the proposed shuttle and the antidote for methemoglobinemia; co-oximetry, not pulse oximetry, is required to detect methemoglobin (`task_output_adrenochrome_gap_analysis_09_JUL_2026.md:35-40`).
- **[[MnSOD]] rs4880 and [[COMT]]:** Sep 2026 gates report a 30-40% shift in MnSOD activity altering the SIRT3/SIRT4 hormetic window by the same fraction (`:102-104`), and [[COMT]] status as a gate for adrenochrome/dopaminochrome formation (`:73`). Neither gate is encoded in protocol dosing.
- **Hoffer hypothesis:** [[Adrenochrome Hypothesis]] in schizophrenia (Hoffer/Osmond, 1950s) was not confirmed in Canadian MRC and APA trials and was abandoned by mainstream psychiatry by the 1970s (`Abram Hoffer.md:39`). Mixed/unreplicated erythrocyte lysis reports remain unreliable (`Adrenochrome Hypothesis.md:31`).

## Cross-reference to Nesci and Algieri 2026 (inflammaging review)

Source: Nesci S, Algieri C. Mitochondrial dysfunction and inflammaging: a mechanistic bridge between bioenergetic failure and senescence. Geroscience 2026-10-08, doi:10.1007/s11357-026-02588-y (`src/notes/senescence/_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence.md`). The review does not discuss [[Adrenochrome]], [[Aminoguanidine]], [[Carbazochrome]] or [[Methylene blue]] directly except for [[Urolithin A]] as a MRR component; cross-reference below is therefore mechanistic, not direct.

### Shared mechanism: OXPHOS decline and Complex I/III electron leak

Nesci and Algieri frame ageing as a vicious cycle in which impaired OXPHOS lowers ATP output and membrane potential while increasing electron leak at [[Complex I]] and [[Complex III]], generating [[Reactive Oxygen Species]] that damage mtDNA, lipids and proteins further. The vault MRR protocol proposes [[Methylene blue]] as a Complex I-to-Complex IV electron shunt and carbazochrome/MB pulsing as a hormetic ROS signal. The review's framing is consistent with the vault's own dose-flip observation (MB wellness window ~0.5-4 mg; pro-oxidant flip above 2 mg/kg, `_link/Methylene blue.md:32-33`): in aged mitochondria with compromised antioxidant buffering and altered [[Iron|iron]] homeostasis, added redox cycling is reported to sensitize cells to lipid peroxidation and ferroptosis rather than to remain adaptive. The review defines [[Ferroptosis]] by iron-dependent phospholipid peroxidation with stimulus-dependent mitochondrial involvement (dispensable after direct [[GPX4]] inhibition in the systems examined), while the vault's adrenochrome-as-ferroptosis-inducer claim (GPX4 selenocysteine arylation, analogous to RSL3) remains Tier 5.

### NAD+/NADH ratio and the MiDAS secretome

In MiDAS, reduced [[NAD+]]/[[NADH]] ratio engages [[AMPK]]-dependent [[p53]] activation: the axis maintains [[p21]]-dependent arrest while restraining the [[IL-1beta|IL-1]]-dependent arm of the [[SASP]], producing a rewired rather than amplified secretome. Restoration of redox balance (e.g., pyruvate supplementation in experimental systems) partially rescues the IL-1 arm and shifts MiDAS toward a more canonical SASP. The vault protocol includes NR/NMN to raise NAD+ status and expects reduced senescence burden. Under the MiDAS model, NAD+ repletion predicts a qualitative shift in SASP composition, not measured clearance of senescent cells. The review reports no human data establishing that NAD+ restoration removes senescent cells or slows ageing.

### Autophagy, mitophagy and lysosomal flux

Nesci and Algieri state that increased autophagy-marker abundance should not be equated with increased degradative flux; impaired acidification or proteolytic activity limits mitochondrial turnover despite upstream mitophagy signals, and mitophagic clearance restrains [[NLRP3 inflammasome|NLRP3]] activation in macrophage systems. The 2026 aminochrome data (50 uM, LC3b-LAMP1 colocalization -27%, no added LC3b-II with bafilomycin A1) are consistent with this flux-block pattern. MRR/SRAC assign rapamycin, [[Urolithin A]] and trehalose-like induction the cleanup role. The review reports that in the cited RCT of urolithin A (n=66 older adults, 2 months), muscle endurance improved but the primary outcomes, 6-min walk distance and maximal ATP production, were not statistically significant between groups, and the authors state these data do not establish slowed ageing or mitophagy mediation. The protocol's cleanup step therefore has the same Tier 1-negative status in humans as aminoguanidine.

### Minority MOMP, mtDNA DAMPs and readouts absent from protocol

The review describes [[Minority MOMP|minority MOMP]] enabling BAX/BAK-dependent mtDNA release and [[cGAS-STING Pathway|cGAS-STING]]-mediated SASP regulation without cell death, with mtDNA, [[Cardiolipin]], [[N-Formyl Peptides|N-formyl peptides]] and mitochondrial ROS engaging [[TLR9]], [[NLRP3]] and cGAS-STING to produce sterile inflammation. The authors state prevalence and quantitative contribution of minority MOMP to physiological human ageing are not established, and that inflammatory output should be interpreted jointly by metabolic state, membrane integrity, DAMP accessibility and neighbour sensing capacity. The vault protocol's proposed readouts (SIRT3/SIRT4 ratio, HRV-gated dosing, methemoglobin by co-oximetry) do not include cytosolic mtDNA, cGAS-STING activity or NLRP3 readouts. A quinone-pulsing protocol evaluated without DAMP sensing would miss the review's central amplification loop.

### Heteroplasmy threshold and genotype gates

The review's mtDNA threshold model (functional recessiveness until a mutation- and tissue-specific heteroplasmy threshold, modulated by copy number) is structurally parallel to the vault's NQO1 rs1800566 gate (T/T functionally null, one-electron cycling instead of two-electron detoxification). Both describe competence thresholds that convert subclinical load into overt dysfunction, yet neither threshold is encoded in protocol dosing. Nesci and Algieri caution that respiratory deficiency in a cell does not imply ROS, senescence and inflammation occur in the same cells; the protocol's tissue-calibrated hormetic window makes the same unstated assumption in reverse.

### Clinical translation limits shared with SRAC

The review reports a randomized phase II trial of dasatinib plus quercetin (n=60 postmenopausal women) with no significant between-group difference in bone resorption marker, an open-label phase I dasatinib plus quercetin study in Alzheimer's disease (n=5, feasibility only, dasatinib but not quercetin detected in CSF), and an uncontrolled dapansutrile study in acute gout. SRAC uses fisetin sequentially rather than dasatinib plus quercetin, so the cited trials are analogous rather than direct, but the translation gap is shared: no validated tissue biomarker of senescence burden, mitophagy or mtDAMP activity in humans, no defined responder population, and a reported risk that chronic inflammasome or nucleic-acid-sensing suppression compromises host defence. The review concludes that changes in circulating biomarkers or selected performance measures do not establish restoration of mitochondrial quality control or slowing of ageing; the same conclusion applies to the vault protocol's biomarker claims.

## Summary

Recent evidence does not position adrenochrome-family compounds as validated protocol agents in humans. The highest-tier human data are negative for aminoguanidine (failed Phase III), positive only for narrow non-longevity indications for methylene blue (methemoglobinemia) and carbazochrome (hemostasis). The most recent mechanistic work (2026, Tier 4) characterizes aminochrome as an autophagosome-lysosome fusion blocker and proteotoxic agent in dopaminergic cells. Vault MRR/GOPS/SRAC constructs remain Tier 5 hypotheses with three load-bearing internal contradictions (carbazochrome redox silence vs trigger; hydrazine consumption vs AGE trapping; NQO1/G6PD genotype absent from dosing). Any future protocol revision requires, at minimum: a free-hydrazine assay for AMM, in-vivo hydrolysis kinetics for the conjugate, direct Complex III superoxide measurement at stated nanomolar carbazochrome doses, and genotype-stratified (NQO1, G6PD, rs4880) dose ranges before human exposure is proposed.

## Sources

- Vault: `src/notes/adrenochrome/Adrenochrome.md`, `Carbazochrome.md`, `NQO1.md`, `_document_ - glyco-oxidative modulation.md`, `Abram Hoffer.md`, `Adrenochrome Hypothesis.md`; `src/notes/_link/Methylene blue.md`, `Aminoguanidine.md`, `_document_ - methylene blue and aminguanidine.md`; `src/tasks/adrenochrome_mb_ag/` MRR/GOPS/SRAC documents and `outline_adrenochrome_mb_ag_protocol_27_JUN_2026-00.md`, `task_output_adrenochrome_gap_analysis_09_JUL_2026.md`; `src/tasks/task_output_adrenochrome_eryptosis_crossover_04_Nov_2026.md`, `task_output_hardcoded_individual_biomarker_gates_26_Sep_2026.md`; `web/public/pages/en-US/adrenochrome-protocol.html`, `adrenochrome-articles-and-figures.html`.
- External: Briceño et al., Antioxidants 2026;15(6):739 (PMC13295424); Alsaied et al. 2025 carbazochrome meta-analysis (PMID 40676674); Shi et al. 2025 carbazochrome RCT (PMID 39914600); Uceda et al., Biophys Rev 2024; Thornalley 2003 pimagedine review (PMID 14568006).
- Cross-reference: Nesci & Algieri, Geroscience 2026-10-08, doi:10.1007/s11357-026-02588-y; vault copy `src/notes/senescence/_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence.md`.
