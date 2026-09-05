---
title: "Cell-Death Quadrants: Controlled vs Uncontrolled x Inflammatory vs Non-Inflammatory Vault Lens"
description: Vault-wide framework mapping every major topic through the controlled/uncontrolled and inflammatory/non-inflammatory lens from the gender audit, with sex overlay and practical audit protocol.
created: 2026-09-04
updated: 2026-09-05
tags: [task-output, cell-death, apoptosis, necrosis, sex-differences, inflammation, senescence, ferroptosis]
---

# Cell-Death Quadrants: Looking at the Vault Through Controlled / Inflammatory Lens

## Summary

The gender audit (`src/tasks/task_output_gender_specific_attributes_vault_topics_02_SEP_2026.md:92`) states the seed distinction: females favor **caspase-dependent apoptosis (controlled, non-inflammatory)** while males favor **PARP-1/AIF-dependent regulated necrosis / parthanatos (programmed, lytic, pro-inflammatory; Q3b)**, cell-autonomously.

That single sentence generalizes to a vault-wide 2x2 applicable to every topic: **controlled vs uncontrolled** (programmed, ATP-dependent, membrane-contained vs bioenergetic collapse, membrane rupture) crossed with **inflammatory vs non-inflammatory** (DAMP/cytokine release + immune recruitment vs silent clearance).

Vault verification (2026-09-04): `graphify-out/graph.json` (3403 nodes / 6356 edges), `wiki-out/graph.json` (3067 nodes / 36348 edges), 231 notes mention at least one regulated-death term. Dedicated entity notes already exist for all quadrant members: [[Apoptosis]], [[Necrosis]], [[Necroptosis]], [[Parthanatos]], [[Pyroptosis]], [[Ferroptosis]], [[Autophagic Cell Death]], [[Secondary Necrosis]], [[SASP]], [[NLRP3]], [[PARP1]], [[Sirtuin-Caspase Crosstalk]].

**Sex overlay:** XX biases to Q1 (controlled/silent); XY biases to Q3 (lytic/inflammatory — Q3a accidental + Q3b regulated necrosis). Estrogen is the quadrant-shifter holding females in Q1 until menopause (the estrogen cliff → Q1 to Q2/Q3 shift).

## Definitions

| Axis | Controlled | Uncontrolled |
| --- | --- | --- |
| Energetics | ATP-dependent, ordered | ATP-depleted, passive/collapse |
| Membrane | Preserved until efferocytosis; blebbing, apoptotic bodies | Early rupture; swelling ([[Oncosis]]), DAMP spill |
| Execution | Defined protease/kinase/polymer cascade (caspases, RIPK1/3/MLKL, PAR/AIF, lipid-peroxidase checkpoints) | Ion-pump failure, calpain/cathepsin, unprogrammed rupture (Q3a only) |
| Reversibility | Checkpoint-gated (Bcl-2, IAPs, GPX4/FSP1, PARG/Iduna, Necrostatin-1) | Point of no return (mPTP, LMP) or bioenergetic block downstream of checkpoint failure (HK-1 block)

| Axis | Non-inflammatory | Inflammatory |
| --- | --- | --- |
| Signal | Phosphatidylserine, silent efferocytosis | DAMPs ([[HMGB1]], ATP, uric acid, DNA, histones), IL-1beta/IL-18, SASP |
| Receptors | MerTK, TIM4 on phagocytes | [[TLR2]]/[[TLR4]]/[[TLR9]], [[RAGE]], [[P2X7 Receptor]], [[NLRP3]], [[cGAS-STING Pathway]] |
| Outcome | Resolution | Sterile inflammation, repair or chronic disease |

## The Four Quadrants (vault-grounded)

### Q1 — Controlled / Non-inflammatory (silent removal)

- **Core:** intrinsic/extrinsic [[Apoptosis]] (cytochrome C → apoptosome → [[Caspase-9]] → [[Caspase-3]]; [[Caspase-8]]→executioners), restrained by [[Bcl-2]]/Bcl-xL, [[XIAP]], [[SIRT1]]→p53/FOXO deacetylation, [[SIRT3]]→CypD/IDH2, [[SIRT5]]→cytochrome C.
- **Housekeeping:** [[Autophagy]]/mitophagy (PINK1/Parkin clearing ROS sources), NAD+ salvage sustaining SIRTs.
- **Vault anchor:** `src/notes/_link/Apoptosis.md:15` defines apoptosis as removal "without inducing inflammation"; `src/notes/_link/Sirtuin-Caspase Crosstalk.md:24-33` details SIRT brake on caspases.
- **Sex:** XX-default. Higher caspase-3/8 activation, earlier cytochrome C, E2→Bcl-2 support (`src/notes/_link/Apoptosis.md:50-77`).

### Q2 — Controlled / Inflammatory (programmed alarm)

- **Core:** [[Pyroptosis]] (PRR+ASC+pro-caspase-1 → caspase-1 → IL-1beta/IL-18 + [[Gasdermin D]] pores), [[Necroptosis]] ([[RIPK1]]→[[RIPK3]]→[[MLKL]] pores when [[Caspase-8]] blocked), senescence arrest + [[SASP]] (NF-κB, cGAS-STING, mTOR/p38-driven IL-6/IL-8/MMPs/CXCL12).
- **Bridges:** MLKL K+ efflux → [[NLRP3]]; RIPK3 → NLRP3 without MLKL; minority MOMP (BAX/BAK) → mtDNA → cGAS-STING → SASP without death.
- **Vault anchors:** `src/notes/_link/Necroptosis.md:15-22` ("programmed yet inflammatory"); `src/notes/cancer/Pyroptosis.md:17-19`; `src/notes/senescence/SASP.md:88-110` (NF-κB + cGAS-STING regulation).
- **Sex:** estrogen restrains NLRP3 priming via ERbeta/PELP1 (OVX models) and STING via ERα-HDAC3, but [[Gasdermin D]] executor scores can be female-biased post-trauma — priming vs executor must be separated (`src/notes/cancer/Pyroptosis.md:29`).

### Q3 — Inflammatory rupture (accidental + regulated necrosis)

- **Q3a — accidental [[Necrosis]] (uncontrolled):** ATP depletion → Na+/K+-ATPase failure → oncosis → Ca2+ overload → calpain, ROS → mPTP, LMP → cathepsins. No defined cascade, no checkpoint rescue.
- **Q3b — regulated necrosis (programmed, lytic):** [[Parthanatos]] (PARP1 hyperactivation → PAR → [[Apoptosis-Inducing Factor]] + [[MIF]] nuclease + HK-1 glycolysis block + NAD+/ATP depletion; no swelling, ~50-kb fragmentation, z-VAD-resistant, PARP-inhibitor-rescued) and [[Ferroptosis]] (GPX4/GSH or FSP1-CoQ10 failure → iron-dependent lipid peroxidation → membrane rupture; rescued by GPX4/FSP1 support, iron chelation). Both are checkpoint-gated (PARG/Iduna, GPX4/FSP1) like Q2, but grouped in Q3 by lytic/inflammatory outcome.
- **Vault anchors:** `src/notes/_link/Necrosis.md:17,52-78` (ATP collapse, DAMP/sterile inflammation table); `src/notes/_link/Parthanatos.md:17-24` (caspase-independent, PAR/AIF, 50-kb fragmentation); `src/notes/_link/Ferroptosis.md:16,23-37` (GPX4 + FSP1-CoQ10-NADPH + SIRT3-SLC25A22 axes).
- **Sex:** XY-default for parthanatos (PARP deletion protects males only, harms females; `src/notes/_link/Parthanatos.md:60`, `src/notes/_link/PARP1.md:63`); male-biased RIPK3/MLKL in renal IRI; Gpx4-KO injures male but spares female kidney via NRF2; testosterone sensitizes (`src/notes/_link/Ferroptosis.md:41`).

### Q4 — Uncontrolled / Non-inflammatory (rare control)

- Mostly empty by design: severe ATP exhaustion where DAMP sensing fails (e.g. late in vitro exhaustion, immunologically cold collapse). Use as null hypothesis when classifying — if a death looks uncontrolled but silent, check for failed efferocytosis assay or missing DAMP readout rather than asserting Q4.

### The critical bridge: [[Secondary Necrosis]]

Uncleared Q1 becomes Q3: apoptotic cells/bodies not efferocytosed → membrane failure → HMGB1/ATP/DNA → same TLR/RAGE/NLRP3 machinery as primary necrosis (`src/notes/_link/Secondary Necrosis.md:15-17`). Explains why cell-culture "apoptosis" past the clearance window reads inflammatory, and why Annexin V+/PI gating matters.

## Vault Topics Mapped to Quadrants

Grouped by sex pattern (last column), strongest XX vs XY divergence first.

### Core XX vs XY executor divergence

| Domain | Q1 (baseline homeostasis) | Q2 (infection, wound, transformed cell, acute SASP) | Q3 (Q3a accidental / Q3b regulated necrosis) | Sex pattern |
| --- | --- | --- | --- | --- |
| Caspases/p53/Bcl-2 | Caspase-3/8/9, Bcl-2/Bcl-w setpoint | Caspase-1/ASC/NLRP3, GSDMD/E (casp-3/7 cleave GSDMD to block pyroptosis) | PARP-1/AIF/MIF, Bax/Bak miMOMP→STING | XX-caspase vs XY-PAR/AIF; Q-VD-OPh female-only, PARP-i male-only |
| NAD+/PARP/CD38 | Salvage (NR/NMN), SIRT competition for NAD+ | PARP1→NF-κB, ATM-PARP1-IKK→SASP, MIF→NLRP3 | PARP hyperactivation → NAD+/ATP depletion → parthanatos | Male PARP-driven NAD+ decline; female ovarian CD38; combined CD38+PARP inhibition rescues where single fails |
| Autophagy/mTOR/AMPK | PINK1/Parkin mitophagy restrains necroptosis/parthanatos | RIPK3-AMPK-ULK1 early autophagy then flux block; caspase-1 cleaves Parkin → pyroptosis wins | Excessive/prolonged CR-autophagy → type-II death; HK-1 block → AMPK-mTORC1 overlay | Male canonical Beclin-1 vs female ATG7 route post-stroke |

### Estrogen-held Q1 with menopausal release

| Domain | Q1 (baseline homeostasis) | Q2 (infection, wound, transformed cell, acute SASP) | Q3 (Q3a accidental / Q3b regulated necrosis) | Sex pattern |
| --- | --- | --- | --- | --- |
| Sirtuins/MnSOD/Trx1 | SIRT1/3/6→p53/FOXO/CypD/IDH2/MnSOD brake | SIRT failure → NLRP3/pyroptosis, necroptosis | SIRT failure → ROS/mPTP necrosis, ferroptosis | E2→SIRT1/3→SOD2 holds Q1; menopause releases brake |
| NF-κB/inflammation | IκBα, SIRT6-H3K9 restraint | MyD88/ERα-p65, TLR/ZBP1→RIPK3, cGAS-STING→IFN | DAMP storm (HMGB1→TLR/RAGE, ATP→P2X7→NLRP3) | E2 restrains priming; post-menopause derepression |
| Telomere | TERT, shelterin, E2 antioxidant | DDR→ATM-PARP1-IKK→NF-κB→SASP; CCF→cGAS | Critically short → crisis/necrosis | Female DKC1/TERT advantage; menopause accelerates attrition |

### Male-early burden with post-menopausal female acceleration

| Domain | Q1 (baseline homeostasis) | Q2 (infection, wound, transformed cell, acute SASP) | Q3 (Q3a accidental / Q3b regulated necrosis) | Sex pattern |
| --- | --- | --- | --- | --- |
| Senescence/SASP | p16/p21 arrest, p53 restraint of SASP | SASP (IL-6/IL-8/CCL2/CXCL12/MMPs), LINE1→IFN, IL-6/8→ACase→ferroptotic spread | Persistent senescence → tissue necrosis/fibrosis milieu | Male higher systemic SASP; female post-menopausal acceleration; D+Q female-biased, fisetin male-biased |
| Cancer | Apoptosis evasion as hallmark; SIRT6 pro-apoptotic in tumors | Therapy-induced senescence/SASP, pyroptosis/necroptosis as therapy goal | Tumor necrosis → pro-metastatic inflammation; cystine-starvation co-induces necroptosis+ferroptosis in TNBC | MBOAT1-ER / MBOAT2-AR gate ferroptosis + hormonal blockade synergy; EXITS X-protection |

### Key crosstalk ratchets (bidirectional, from vault)

- SIRT↔caspase: SIRTs suppress caspases; caspase-3/9 cleave SIRT1 at DEPDVP(704-709)→TRIM28 degradation, locking in death; caspase-3/7 cleave GSDMD to block pyroptosis.
- SIRT3↔caspase-1↔Parkin: SIRT3 lowers mtROS→restrains NLRP3; caspase-1 cleaves Parkin→blocks mitophagy→more ROS→more NLRP3 (feed-forward to Q2).
- PARP1↔SIRT1: shared NAD+ pool; chronic PARP suppresses SIRT deacetylation (PGC-1α/FOXO/p53); caspases cleave PARP1 to prevent parthanatos (Q1 vs Q3 switch by damage dose).
- Necroptosis↔ferroptosis: shared ROS/cysteine/HSP90; MLKL depletes PUFA→halts ferroptosis while ACSL4 overexpression resists MLKL (membrane-lipid gate).

### Remain in Q1 and Q2

- **Q1 (baseline homeostasis):** Q1 is Controlled / Non-inflammatory — silent removal via [[Apoptosis]], mitophagy, and SIRT/NAD+ housekeeping with membrane intact and efferocytosis leading to resolution. Hold here is the therapeutic direction: the listed mechanisms are brakes that keep cells in Q1 and prevent drift to Q2 or Q3.
- **Q1 at rest means baseline homeostasis:** day-to-day turnover stays silent with no acute threat. On infection, wounding, or transformation, leave Q1 transiently for Q2 alarm then resolve back.
- **Healthy goal is not permanent Q1 lock:** hold Q1 at rest, mount competent transient Q2 on demand, resolve fast back to Q1, and avoid chronic Q2 or any Q3. Q2 is needed transiently for host defense, tumor suppression, and wound healing, while too much Q1 death itself causes disease such as neuron loss.
- **Q4 is a near-empty control:** true uncontrolled rupture without inflammatory signal is essentially a null set because rupture spills DAMPs by physics. Apparent Q4 is usually missed readout, degraded DAMPs, sensor tolerance, or misclassified [[Secondary Necrosis]].

## How to Read Any Vault Note Through This Lens

- **Classify the death described:** programmed/checkpoint-gated (named protease/kinase/polymer cascade: caspases, RIPK1/3/MLKL, PAR/AIF/MIF, GPX4/FSP1) vs accidental (swelling, rupture, ATP fall, mPTP/LMP without defined cascade); inflammatory (DAMPs, IL-1beta/IL-18, SASP, immune recruitment) vs silent (efferocytosis, resolution). Note Q3b is programmed yet lytic — classify by cascade first, outcome second.
- **Locate bridges:** is there failed clearance (→ [[Secondary Necrosis]]), caspase-8 inhibition (→ necrosome), GSH/GPX4 or CoQ10/FSP1 failure (→ ferroptosis), PAR accumulation + AIF nuclear + NAD+ fall with z-VAD resistance (→ parthanatos), CCF/mtDNA + STING + IFN (→ SASP)?
- **Apply sex overlay:** does the mechanism use XX effectors (caspase-3/8, Bcl-2, XIAP mosaicism) or XY effectors (PARP1/AIF/MIF, RIPK3/MLKL, NRF2-low)? Is estrogen restraint (ERbeta→NLRP3, ERα-HDAC3→STING, E2→SIRT/SOD2/Bcl-2) present, and does menopause/OVX flip the quadrant?
- **Graph-check:** `graphify query "<entity> cell death inflammation"` (BFS; `--dfs` for chain, `--budget N` to cap), `graphify path "<entity>" "Apoptosis"` vs `graphify path "<entity>" "Parthanatos"` / `"Ferroptosis"` / `"Pyroptosis"`, `graphify explain "<entity>"` citing `source_location`. Confirm wikilink paths exist in `wiki-out/graph.json` before asserting crosstalk.

Minimal dissection panel (from vault tool tables): PARP inhibitor (parthanatos) + z-VAD-FMK/Q-VD-OPh (apoptosis) + [[Necrostatin-1]] (necroptosis) + [[Ferrostatin-1]]/liproxstatin-1 (ferroptosis); add VX-765 (caspase-1) and PAANIB-1 ([[MIF]] nuclease) when Q2 suspected. Confirm with AIF nuclear + PAR + NAD+ (parthanatos), p-MLKL (necroptosis), GSDMD-NT + IL-1beta (pyroptosis), BODIPY-lipid-ROS + MDA/4-HNE with DFO rescue (ferroptosis), Annexin V+/PI− vs PI+ (apoptosis vs secondary necrosis).

## Therapeutic Corollaries

- Q1 therapies aim to restore silent removal (BH3 mimetics, SIRT activation, NAD+ salvage) — preferentially relevant to XX biology; caspase inhibitors protect females only in stroke models.
- Q2 therapies aim to tune alarm (NLRP3/GSDMD, RIPK1/3/MLKL, STING, SASP/senomorphics: rapamycin, metformin, apigenin, NRTIs for LINE1, CTPI2 for SLC25A1 acetyl-CoA arm) — stratify by priming (estrogen-restrained) vs executor (GSDMD can be female-biased).
- Q3 therapies aim to prevent rupture — Q3a: prevent collapse (ATP support, Ca2+/mPTP/LMP control); Q3b: checkpoint rescue (PARP inhibitors, PAANIB-1, HDAC6 modulation of MIF, PARG/Iduna potentiation, GPX4/FSP1 support, iron chelation, MBOAT-directed hormonal combinations) — PARP inhibition protects males but worsens females; Gpx4 rescue is NRF2-dependent in females.
- Avoid Q1→Q3 conversion errors: late in vitro "apoptosis" is often [[Secondary Necrosis]]; caspase blockade without RIPK3/MLKL cover flips Q1 to Q2.

### Medication blunt vs heighten around menopause

Educational only, not medical advice. Blunt holds Q1 or damps Q2; heighten pushes Q2→Q3.

| Medication / class | Direction | Quadrant mechanism | Vault anchor |
| --- | --- | --- | --- |
| Menopausal hormone therapy (estradiol) | Blunt | ERβ→NLRP3 restraint, ERα-HDAC3→STING restraint, E2→SIRT/SOD2/Bcl-2 holds Q1 | KEEPS GDF15/TNFR1/FAS reduction; OVX NLRP3/STING models |
| Glucocorticoids (short course) | Blunt | Block SASP via IL-1α→NF-κB | [[Senomorphic Therapy]] SASP inhibition |
| [[Metformin]] / [[Rapamycin]] | Blunt | AMPK activation, mTOR SASP translation block, NF-κB dampening | SASP/mTOR sections; astrocyte senescence delay |
| [[Statins]] anti-inflammatory arm | Blunt | Rac1/Nox block, eNOS→NO→NF-κB inhibition, VCAM-1 down | [[VCAM-1]] statin notes |
| Aromatase inhibitors / tamoxifen / fulvestrant | Heighten toward Q3 | ER blockade → MBOAT1 down → MUFA shield loss → ferroptosis sensitivity; NLRP3/STING derepression | [[Ferroptosis]] MBOAT1-ER axis |
| [[Statins]] CoQ10-depletion arm | Heighten toward Q3 | Mevalonate block → CoQ10 loss → [[FSP1]] trap failure → ferroptosis | _triples.json FSP1-CoQ10; [[Coenzyme Q10]] statin notes |
| [[Doxorubicin]] / anthracyclines | Heighten toward Q3 | p53/Fas apoptosis overshoot plus iron-driven ferroptotic cardiomyopathy | SIRT6/SIRT4 cardioprotection notes |
| Acetaminophen / isoniazid (liver context) | Heighten toward Q3 | Glutathione depletion → GPX4 weakening plus NLRP3 activation | SIRT6 glutathione / SIRT1-NLRP3 liver notes |
| Chronic glucocorticoids | Heighten toward Q3 | Long-term bone-marrow adipose senescence despite acute SASP block | Paracrine senescence glucocorticoid note |

Stacking rule: estrogen-signal loss plus CoQ10/GSH loss combines three Q3 gates at once — STING/NLRP3 derepressed, FSP1 starved, GPX4 weakened.

## Gaps and Next Actions

- No vault-wide quadrant tags — consider `cell-death:Q1/Q2/Q3` + `inflammation:yes/no` in frontmatter or a quadrant index note (filename-unique, no [[links]] in frontmatter per AGENTS.md §3).
- [[Autophagic Cell Death]] is a stub (`src/notes/_link/Autophagic Cell Death.md:16-22`) — needs PINK1/Parkin vs RIPK3-PGAM5-Drp1 hinge detail from [[Necroptosis]].
- No sex-stratified navitoclax data; no verified MIF/PAAN sex difference; cardiac/cerebral necroptosis sex claims remain single-study (Tran 2025) — hold from firm claims.
- Proposed follow-ups: quadrant-tag the ~231 death-mode notes; add Q1→Q2→Q3 transition diagrams to [[Apoptosis]], [[Parthanatos]], [[Ferroptosis]], [[SASP]] Connections; rebuild-triples + rebuild-wiki to propagate new links.

## Sources

- Vault: [[Apoptosis]], [[Necrosis]], [[Necroptosis]], [[Parthanatos]], [[Pyroptosis]], [[Ferroptosis]], [[Secondary Necrosis]], [[Autophagic Cell Death]], [[SASP]], [[PARP1]], [[Sirtuin-Caspase Crosstalk]], [[NLRP3]], [[Gasdermin D]], [[MLKL]], [[Apoptosis-Inducing Factor]], [[Inflammaging]], [[STING]], [[cGAS]].
- Gender audit: `src/tasks/task_output_gender_specific_attributes_vault_topics_02_SEP_2026.md`.
- Graph artifacts: `graphify-out/graph.json`, `wiki-out/graph.json`, `web/public/data/nodes.json`.
