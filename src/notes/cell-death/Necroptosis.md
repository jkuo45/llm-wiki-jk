---
title: Necroptosis
description: Regulated necrotic cell death executed by the RIPK1-RIPK3-MLKL necrosome when caspase-8 is blocked; lytic and inflammatory, bridging cell death, innate immunity, and disease.
protected: true
created: 2026-07-04
updated: 2026-09-03
tags: [biological-process, cell-death, inflammation, regulated-cell-death]
url: #
source: #
aliases: [Programmed Necrosis, programmed necrosis]
---

# Necroptosis

**Necroptosis** is the regulated form of [[Necrosis]] — a programmed, lytic cell death that looks necrotic (swelling, membrane rupture, [[Damage-Associated Molecular Patterns|DAMP]] release) but is executed by a defined kinase cascade: [[RIPK1]] → [[RIPK3]] → [[MLKL]]. It is the third choice downstream of death-receptor signaling when survival ([[NF-κB]]) fails and [[Apoptosis]] ([[Caspase-8]]) is blocked.

> [!info] Necroptosis in one sentence
> Death-receptor ligation builds Complex I (survival) → Complex IIa/IIb (apoptosis) → necrosome (necroptosis). Active [[Caspase-8]] cleaves [[RIPK1]]/[[RIPK3]] and suppresses necroptosis; inhibited [[Caspase-8]] lets the necrosome form, phosphorylated [[MLKL]] makes membrane pores, and the cell ruptures.

## Overview

Unlike accidental necrosis (ATP collapse, trauma) and non-lytic apoptosis (blebbing, silent clearance), necroptosis is **programmed yet inflammatory**. Morphology: plasma membrane rupture, cytoplasmic swelling, moderate chromatin condensation. Biochemistry: necrosome formation, RIPK1/RIPK3/MLKL phosphorylation, DAMP release. Function: backup death when pathogens or tumors block caspases; cost is sterile [[Inflammation]] that clears debris but drives disease if uncontrolled.

## TNFR1 pathway: three choices

### Complex I — survival

[[TNFα]] binding to [[TNFR1]] recruits [[TRADD]], RIPK1, [[TRAF2]], LUBAC, cIAP1/cIAP2, [[CYLD]], and NEMO/IKK. Polyubiquitinated RIPK1 recruits [[TAK1]] and the IKK complex (NEMO/IKKα/IKKβ), which degrades IκB and activates [[NF-κB]] survival/inflammatory transcription. First choice: live.

### Complex IIa / IIb — apoptosis

When [[NF-κB]] activation is suppressed and RIPK1 is deubiquitinated, RIPK1 with [[FADD]], TRADD, and pro-[[Caspase-8]] assembles cytosolic Complex IIa (ripoptosome) → active caspase-8 → executioner caspases → extrinsic [[Apoptosis]], with RIPK1 cleavage. If cIAPs are depleted, Complex IIb (RIPK1/FADD/caspase-8, no TRADD) does the same via RIPK1 kinase activity. Second choice: quiet death.

### Necrosome — necroptosis

When [[Caspase-8]] is absent or inhibited (z-VAD-FMK, viral inhibitors, genetic deletion), RIPK1 recruits and activates [[RIPK3]] via RHIM interactions; RIPK3 phosphorylates [[MLKL]] (human Thr357/Ser358). Phosphorylated MLKL oligomerizes, translocates to the plasma membrane, forms cation pores → osmotic swelling, rupture, DAMP release. [[PGAM5]] anchors the necrosome and couples it to [[DRP1]]-driven mitochondrial fission. Third choice: lytic death.

> [!important] RIPK1-independent routes
> [[TLR3]]/[[TLR4]] activation (dsRNA/LPS) signals via TRIF–RIPK3, and viral/Z-nucleic-acid sensing via [[ZBP1]]/DAI–RIPK3, forming necrosomes **without RIPK1**. The death domain of [[RIPK1]] normally restrains ZBP1- and TRIF-mediated death.

## Regulation

**Caspase-8 / [[c-FLIP]] rheostat.** Caspase-8 homodimers drive apoptosis and cleave RIPK1, RIPK3, and [[CYLD]], blocking necroptosis. Caspase-8/[[c-FLIP]] long-isoform heterodimers retain enough activity to cleave RIPK1/RIPK3 → survival + necroptosis blockade. Short-isoform heterodimers inhibit caspase-8 more fully while enhancing Complex II assembly → apoptosis blocked, necroptosis favored. Genetic proof: caspase-8- or FADD-deficient embryonic lethality is fully rescued by RIPK3/MLKL/RIPK1 knockout.

**Ubiquitination.** cIAP/LUBAC-mediated RIPK1 ubiquitination favors Complex I survival; CYLD deubiquitination licenses kinase-dependent death.

**ROS and mitochondria.** Mitochondrial ROS promotes RIPK1 autophosphorylation and RIPK3 recruitment; ROS-driven MPTP opening feeds the RIPK1/RIPK3/MLKL axis. [[PINK1]]/[[Parkin]] [[Mitophagy]] clears ROS sources and restrains necroptosis; severe damage flips the [[PGAM5]]–Drp1 hinge from mitophagy to necroptotic fission. [[PGAM5]] fully activates Drp1 by dephosphorylating Ser637 and facilitating Ser616 phosphorylation, and prolongs mPTP opening via CypD phosphorylation in parallel to [[MLKL]] pores. The effect is context- and species-dependent (human PGAM5-S isoform; weak in murine BMDMs).

> [!note]
> Source: Exp Mol Med 2025 Qi et al.; iScience 2024 He et al.; J Adv Res 2026 Plantainoside D as first PGAM5-specific inhibitor
> See [[PGAM5]] supplemental research (2024–2026) for disease models and inhibitor detail.

**Sirtuins.** [[SIRT3]] is context-dependent: it promotes [[Apoptosis]] and necroptosis to suppress cancer growth, yet protects against stress injury; SIRT3 deficiency aggravates hyperglycemic mitochondrial damage, ROS, necroptosis, and [[NLRP3]] activation in diabetic cardiomyopathy. SIRT1/SIRT3 failure also silences PINK1/Parkin mitophagy, raising ROS that feeds necroptosis and [[Ferroptosis]].

## Physiological function

Host defense when viruses block caspases (RIPK1–[[MAVS]] interferon axis or necroptotic sacrifice of infected cells); elimination of apoptosis-resistant damaged cells; DAMP-driven recruitment of immune cells for cleanup and repair.

## Pathology and clinical relevance

Uncontrolled DAMP release converts defense into chronic inflammation: cancer, [[Alzheimer's Disease]], [[Parkinson's Disease]], multiple sclerosis, pulmonary, liver, enteric, and cardiac disease. Vault highlights:

- **Neurodegeneration / ischemia-reperfusion injury.** RIPK1 activation drives neuronal loss and infarct damage; [[Necrostatin-1]] is neuroprotective preclinically.
- **Diabetic cardiomyopathy.** SIRT3 deficiency → ROS + necroptosis + NLRP3 (Song et al. 2021).
- **Kidney injury.** SIRT2 knockdown modulates cisplatin-induced apoptosis, necroptosis, and inflammation; folic-acid AKI is ferroptosis- (not necroptosis-) driven, while complex-I-inhibition models show mitophagy-dependent ROS leading to both necroptosis and ferroptosis.
- **Cancer.** Evading regulated death is a hallmark; SIRT3-driven necroptosis can suppress tumor growth, while tumor necrosis-associated inflammation can paradoxically support [[Metastasis]]. Cystine-starvation (CHAC1/GCN2-eIF2α-ATF4) co-induces necroptosis and ferroptosis in triple-negative breast cancer.

### Sex dimorphism — renal IRI (single-study)

Renal ischemia-reperfusion shows a male-biased, earlier and more sustained necroptotic program: male C57BL/6J kidneys upregulate RIPK1 (~10-fold vs ~5-fold in females) and RIPK3 (~8-fold, peaking 72 h vs delayed 48 h female peak) with p-RIPK1/p-MLKL, higher creatinine/BUN, and delayed recovery across 0–72 h reperfusion; ovariectomy blunts female protection and narrows the gap, implicating ovarian hormones (Tran et al., *Biomedicines* 2025;13:2085, doi:10.3390/biomedicines13092085, PMCID PMC12467248). Caveats: single time-course study (n=5/group), no knockout/inhibitor causality, authors state the limitation. Cardiac/cerebral male-biased necroptosis, direct testosterone-vs-estrogen titration on the necrosome, and X-linked regulators are unverified — not asserted here.

## Tool compounds

| Target | Agents |
|---|---|
| Activators | PAMPs, [[TNFα]] + z-VAD-FMK (caspase blockade flips TNF to necroptosis) |
| RIPK1 inhibition | [[Necrostatin-1]] |
| RIPK3 inhibition | GSK872, HS-1371 |
| MLKL inhibition | Necrosulfonamide (also blocks [[Gasdermin D]]) |
| PGAM5 inhibition (preclinical) | Plantainoside D — blocks phosphatase activity and oligomerization |
| HSP90 (RIPK1/RIPK3 assembly) | Kongensin A, tanespimycin |
| NET/PADI4 axis | DNase, Cl-amidine |

> [!tip] Death-dissection panel
> Combine [[Necrostatin-1]] (necroptosis) + z-VAD-FMK (apoptosis) + [[Ferrostatin-1]]/liproxstatin-1 (ferroptosis). Death blocked by Nec-1 but not the others implicates RIPK1-dependent necroptosis.

## Crosstalk

- **Necroptosis → [[Pyroptosis]]**: MLKL K⁺ efflux activates the [[NLRP3]] [[Inflammasome]] (RIPK3/MLKL/NLRP3 axis); RIPK3 can also activate NLRP3 without MLKL.
- **Necroptosis ↔ [[Autophagy]]**: RIPK3–AMPK–ULK1/beclin-1 triggers early autophagy, but TNF-necroptosis blocks late autophagosome–lysosome fusion; MLKL membrane association inhibits autophagic flux.
- **Necroptosis ↔ [[Ferroptosis]]**: shared ROS/cysteine/HSP90 nodes; MLKL-driven PUFA depletion halts ferroptosis while [[ACSL4]] overexpression makes membranes MLKL-resistant (ACSL4 knockdown inhibits ferroptosis, activates necroptosis).
- **Necroptosis ↔ [[Mitophagy]]**: PINK1/Parkin mitophagy lowers mtROS and restrains necroptosis; RIPK3–PGAM5–Drp1 fission serves mitophagy under mild damage and necroptotic rupture under severe damage.
- **Necroptosis ↔ [[Apoptosis]]**: mutually compensatory — blocking RIPK3/MLKL reroutes to apoptosis with altered kinetics; RIPK3 kinase-dead mutants switch to adaptor-driven apoptosis.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - Canonical TNFR1 Complex I/IIa/IIb/necrosome schema; RIPK1-independent TRIF/ZBP1 arms; PGAM5 necrosome anchoring; caspase-8/c-FLIP rheostat; MLKL crosstalk to pyroptosis/autophagy/ferroptosis; activator/inhibitor tables.
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
  - SIRT3 promotes apoptosis and necroptosis to inhibit cancer growth but protects in stress injury; SIRT3 deficiency promotes necroptosis and NLRP3 in diabetic cardiomyopathy; SIRT2 modulates cisplatin renal apoptosis/necroptosis.
- [[_document_ - Ferroptosis past present and future|Ferroptosis past present and future]]
  - Table 1 contrast of ferroptosis/apoptosis/autophagy/necroptosis; complex-I-inhibition ROS co-triggering necroptosis + ferroptosis; folic-acid AKI as ferroptosis-not-necroptosis control.
- [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018 review]]
  - Timeline synthesis: TNFR1 Complex I/II/necrosome, non-classical TRIF/ZBP1 arms, RIPK1/RIPK3 phospho-site map, RIPK3 inflammasome scaffolding, bacterial/viral evasion, neurodegeneration (ALS/PD/MS/SCI) and Nec-1/SAHA/24S-OHC agents.

## Connections

- [[RIPK1]] — master switch; scaffold for survival/apoptosis, kinase for necrosome assembly; target of [[Necrostatin-1]].
- [[RIPK3]] — necrosome kinase phosphorylating MLKL; adaptor-vs-kinase duality controlling apoptosis-vs-necroptosis.
- [[MLKL]] — pseudokinase executor forming membrane pores; K⁺-efflux bridge to NLRP3/pyroptosis.
- [[Caspase-8]] — active form cleaves RIPK1/RIPK3/CYLD to suppress necroptosis; its inhibition is the necroptotic trigger.
- [[c-FLIP]] — inactive homolog tuning caspase-8; long isoform blocks necroptosis, short isoform promotes it.
- [[FADD]] — DISC adaptor coupling TRADD/RIPK1 to caspase-8; its loss is rescued by RIPK3/MLKL deletion.
- [[TRADD]] — TNFR1 adaptor nucleating Complex I (survival) vs Complex II (death).
- [[TNFR1]] — canonical death receptor initiating the Complex I → II → necrosome sequence.
- [[TNFα]] — ligand whose signal flips to necroptosis when NF-κB is blocked and caspase-8 inhibited.
- [[ZBP1]] — Z-nucleic-acid sensor forming RIPK1-independent ZBP1–RIPK3 necrosomes.
- [[PGAM5]] — mitochondrial phosphatase anchoring the necrosome and gating the mitophagy↔necroptosis hinge via Drp1.
- [[Necrosis]] — unregulated parent process of which necroptosis is the programmed form.
- [[Apoptosis]] — quiet alternative suppressed-or-supplanted depending on caspase-8 status.
- [[Pyroptosis]] — inflammatory lytic death secondarily triggered via MLKL–NLRP3.
- [[Ferroptosis]] — mutually alternative lytic fate gated by ROS and ACSL4 membrane-lipid state.
- [[Mitophagy]] — ROS-clearing restraint on necroptosis via PINK1/Parkin.
- [[NLRP3]] — inflammasome activated by MLKL pores, linking necroptosis to pyroptotic cytokines.
- [[Inflammation]] — DAMP-driven outcome that is protective acutely and pathogenic chronically.
- [[Necrostatin-1]] — defining RIPK1 tool inhibitor separating necroptosis from apoptosis/ferroptosis.
- [[NF-κB]] — Complex I survival output whose blockade licenses Complex II/necrosome formation.
- [[SIRT3]] — context-dependent gate: pro-necroptotic in cancer, anti-necroptotic in metabolic/stress injury.
- [[Regulated Cell Death]] — parent program grouping necroptosis with apoptosis, pyroptosis, and ferroptosis.

## Linking Summary

- New links added: [[RIPK1]], [[RIPK3]], [[MLKL]], [[Caspase-8]], [[c-FLIP]], [[FADD]], [[TRADD]], [[TNFR1]], [[TNFα]], [[ZBP1]], [[PGAM5]], [[Necrosis]], [[Apoptosis]], [[Pyroptosis]], [[Ferroptosis]], [[Mitophagy]], [[NLRP3]], [[Inflammation]], [[Necrostatin-1]], [[NF-κB]], [[SIRT3]], [[Regulated Cell Death]], [[Damage-Associated Molecular Patterns]], [[TLR3]], [[TLR4]], [[DRP1]], [[PINK1]], [[Parkin]], [[CYLD]], [[TAK1]], [[ACSL4]], [[Metastasis]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[MAVS]]
- Suggested new entity notes to create: [[RHIM domain]], [[TNFR1 complex I]], [[Complex IIa (RIPK1)]], [[GSK872]], [[Necrosulfonamide]]
- Strong connections to strengthen: [[Necroptosis]] ↔ [[RIPK3]], [[Necroptosis]] ↔ [[MLKL]], [[Necroptosis]] ↔ [[Caspase-8]], [[Necroptosis]] ↔ [[PGAM5]], [[Necroptosis]] ↔ [[NLRP3]]
- Sex-dimorphism enrichment (2026-09-03): male-biased RIPK1/RIPK3/p-MLKL in renal IRI, OVX-narrowed (Tran 2025, single-study, no KO causality); cardiac/cerebral/testosterone/X-linked claims excluded as unverified.
