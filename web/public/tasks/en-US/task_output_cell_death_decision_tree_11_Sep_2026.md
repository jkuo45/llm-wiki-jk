---
title: Cell Death Decision Tree - Stress and Cell Type
description: Flowchart mapping stress conditions and cell types to cell death modalities
created: 2026-09-11
updated: 2026-09-11
tags: [cell-death, decision-tree, stress-response, cell-type, sex-dimorphism]
---

# Cell Death Decision Tree

Source synthesis: `src/notes/cell-death/`, `src/notes/_link/` stress notes, PANoptosis reviews Jul 2026.
Generated: 11_Sep_2026 08:00 AM PDT.

## Master flowchart — stress to modality

```mermaid
flowchart TD
    S["Stress input"] --> ATP{"ATP preserved?"}
    ATP -- "No: ischemia, severe ATP collapse" --> NEC["Accidental necrosis / oncosis\nNa+/K+ fail → Ca2+ overload → mPTP → rupture\nSex-neutral bypass"]
    ATP -- "Yes" --> SEX{"Sex / hormonal context?\nXY male-like vs XX female-like\nOVX / low-estrogen → male-like"}
    SEX -- "all →" --> MITO["Mitochondrial hub\nMOMP? mPTP? mtROS? mtDNA release?"]

    MITO --> LIG{"Death ligand + caspase-8?"}
    LIG -- "TNFa / FasL / TRAIL\ncaspase-8 active" --> APOP_EX["Extrinsic apoptosis\nDISC → casp-8 → casp-3/7"]
    LIG -- "Caspase-8 blocked\n(z-VAD, viral, TAK1 loss)\n+ RIPK1/3 present" --> NECRO["Necroptosis\nRIPK1→RIPK3→MLKL pores\nXY / renal IRI male-high"]
    LIG -- "No ligand" --> DNA{"Severe DNA damage?"}

    DNA -- "Yes: MNNG, ROS, NMDA/NO,\nAβ, α-syn" --> PARP{"PARP-1 hyperactive\n10-500x PAR?\nXY favors YES → parthanatos\nXX favors NO → apoptosis"}
    PARP -- "Yes, caspase-independent\nXY / male-like" --> PARTH["Parthanatos\nPAR → AIF+MIF nuclear cleavage"]
    PARP -- "No, p53-driven\nXX / female-like" --> APOP_IN["Intrinsic apoptosis\np53→PUMA/BAX/BAK→MOMP→casp-9→casp-3\nXX favors; Q-VD protects females"]
    DNA -- "No" --> INF{"PAMP/DAMP + inflammasome?"}

    INF -- "LPS, mtDNA, K+ efflux,\nhypoxia, lysosomal damage\nXX estradiol restrains priming" --> PYRO["Pyroptosis\nNLRP3/AIM2→casp-1→GSDMD + IL-1β/18"]
    INF -- "ZBP1/AIM2/RIPK1/NLRP12\n+ IFN priming" --> PAN["PANoptosis\nXY→RIPK3/necro skew\nXX→casp-8/apop skew"]
    INF -- "No" --> IRON{"Iron + PUFA + GPX4 loss?\nXY susceptible\nXX NRF2 resilient"}

    IRON -- "Erastin, RSL3, cystine starvation\np53→SLC7A11, ACSL4/LOX" --> FERRO["Ferroptosis\nLipid peroxidation, no caspase"]
    IRON -- "No" --> ER{"ER stress / starvation?"}

    ER -- "Prolonged PERK-ATF4-CHOP" --> APOP_IN
    ER -- "Early / hypoxia /\nmTOR inhibition" --> AUTO["Adaptive autophagy\n→ ADCD if excessive"]
    ER -- "Reperfusion ROS burst\n+ mtDNA + Ca2+" --> PAN

    APOP_EX --> T12{"DISC strength?"}
    T12 -- "Strong: lymphocytes Type I" --> DIE1["Direct casp-8→casp-3\nBcl-2 resistant"]
    T12 -- "Weak: hepatocyte, β-cell,\nJurkat Type II" --> DIE2["Bid→MOMP→casp-9→casp-3\nBcl-2 sensitive"]

    NECRO --> K{"MLKL K+ efflux?"}
    K -- "Yes" --> PYRO
    PYRO --> G{"GSDMD level?"}
    G -- "Low: neuron, mast cell" --> APOP_IN
    G -- "High: macrophage" --> DIE3["Lytic pyroptosis"]
```

## Cell-type selector — who dies how

```mermaid
flowchart LR
    C["Cell type + context"] --> N["Neuron / dopaminergic\nSNpc iron, NMDA, α-syn"]
    C --> H["Cardiomyocyte / renal tubule\nI/R, doxorubicin, cisplatin"]
    C --> I["Macrophage / microglia\nPAMP, LPS, OGD/R"]
    C --> E["Hepatocyte / β-cell / PDAC\nType II, sorafenib"]
    C --> F["Fibroblast / chondrocyte\nSenescent, OA"]
    C --> T["Cancer persister / TNBC\nMesenchymal, GPX4-addicted"]

    N --> N1["Parthanatos > ferroptosis > apoptosis\nXY→AIF, XX→caspase"]
    H --> H1["Ferroptosis + necroptosis\nMale-biased RIPK/MLKL\nFemale NRF2 resilient"]
    I --> I1["Pyroptosis → PANoptosis\nMitophagy suppresses"]
    E --> E1["Type II apoptosis + ferroptosis\nBcl-2 / venetoclax sensitive"]
    F --> F1["ACase-high ferroptosis\nNLRP3 pyroptosis in OA"]
    T --> T1["GPX4-dependent ferroptosis\nGSDME-high → pyroptosis switch"]
```

## Sex preference axis — integrated at SEX node, detail here

Apply after modality + cell-type are set. Sex shifts executor choice, not stress identity.

```mermaid
flowchart LR
    SEX{"Sex / hormonal context"} --> XY["XY / male\ntestosterone, low estradiol"]
    SEX --> XX["XX / female\nestradiol, NRF2 high"]
    SEX --> OVX["OVX / aged / low-estrogen"]

    XY --> XY1["Favor: parthanatos\nnecroptosis\nferroptosis"]
    XX --> XX1["Favor: caspase apoptosis\nrestrained NLRP3"]
    OVX --> OVX1["Male-like shift\n↑ RIPK/MLKL, ↑ NLRP3"]

    XY1 --> RX["Rescue: PARP inhib\nNec-1, Fer-1/DFO\nQ-VAD fails"]
    XX1 --> RF["Rescue: Q-VD-OPh\nBcl-2 / venetoclax\nPARP inhib harms"]
    OVX1 --> RO["Rescue: estradiol restores\nNRF2/GPX4, NLRP3 restraint"]
```

| Modality | Male bias | Female bias | Evidence anchor |
|---|---|---|---|
| [[Parthanatos]] | Strong XY — stroke/MI, NMDA, MPTP | Weak | PARP-1/AIF-KO protects males only; PARP inhib harms females |
| [[Apoptosis]] | Weak | Strong XX — cyto c/casp-3 | Q-VD-OPh protects females only; cell-autonomous XX→caspase |
| [[Necroptosis]] | Renal IRI, cardiac p-MLKL male-high | OVX narrows gap | Male RIPK1/RIPK3/p-MLKL; cisplatin AKI SIRT2 male |
| [[Ferroptosis]] | Tubule Gpx4-KO injures males | NRF2 resilient | Female NRF2/GPX4 shield; check kidney/heart/brain |
| [[Pyroptosis]] | High IL-1β output once primed | Estradiol restrains priming; trauma GSDMD score female-high | Estradiol→NLRP3 restraint; context-dependent readout |
| [[Necrosis]] | Neutral | Neutral | Dimorphism is in regulated executors, not oncosis itself |
| [[PANoptosis]] | ZBP1-RIPK3 skew to necro arm | Casp-8 skew to apoptotic arm | Same stimulus, different flux; validate per cell |

Rule: if male + neuronal/renal/IRI → test PARP/AIF + RIPK/MLKL + Fer-1 in parallel. If female + same → test caspase/Bcl-2 first, PARP inhib last.

## Decision table

| If you see | Favor | Rescue test |
|---|---|---|
| Caspase-3, cyto c, MOMP, no swelling | [[Apoptosis]] | z-VAD / Bcl-2 (Type II only) / venetoclax |
| p-MLKL, RIPK3, DAMPs, swelling | [[Necroptosis]] | Necrostatin-1, RIPK3/MLKL KO |
| IL-1β/IL-18, GSDMD pores, ASC specks | [[Pyroptosis]] | NLRP3 block (MCC950), casp-1 inhib |
| Lipid-ROS, iron, shrunken mitochondria, no caspase | [[Ferroptosis]] | Fer-1, liproxstatin-1, DFO, GPX4 rescue |
| PAR surge, AIF nuclear, ~50-kb fragments, NAD+/ATP fall | [[Parthanatos]] | PARP inhib (males), PARG, AIF block |
| All three arms together, single block fails | [[PANoptosis]] | Combined / upstream ZBP1/TAK1/RIPK1 |
| ATP absent, oncosis, calpains, cathepsins | [[Necrosis]] | Restore ATP / Ca2+ chelation (early only) |
| LC3/ATG, mTOR off, starvation/hypoxia | [[Autophagic Cell Death]] | Chloroquine / mTOR reactivation |

## Cell-type quick rules

* **Lymphocyte vs hepatocyte/β-cell:** use Type I vs Type II split — Bcl-2 protects only Type II.
* **Neuron:** default parthanatos/ferroptosis suspect; check sex (XY→PARP/AIF, XX→caspase) and GSDMD (low→apoptosis fallback).
* **Kidney/heart IRI:** test ferroptosis first (Fer-1), then necroptosis; expect male bias.
* **Macrophage:** default pyroptosis/PANoptosis; IFN priming + TNF-α/IFN-γ synergy is the gate.
* **Senescent fibroblast/chondrocyte:** test ACase/ferroptosis and NLRP3 in parallel.
* **Mesenchymal cancer:** test GPX4 addiction; GSDME-high → chemo triggers pyroptosis.

## Stress entry points

* **[[Endoplasmic Reticulum Stress]] / [[Integrated Stress Response]]** → CHOP duration decides autophagy vs apoptosis.
* **[[Reactive Oxygen Species]] / [[Hypoxia]] / [[Ischemia]]** → ROS→RIPK1 vs HIF-autophagy vs ATP-necrosis.
* **[[Ischemia-reperfusion Injury]]** → assume mixed death; validate PANoptosome (ASC/casp-8/RIPK3 colocalization), not single markers.
* **[[DNA Damage]] / [[Genotoxic Stress]]** → PARP hyperactivation threshold decides parthanatos vs p53 apoptosis.
* **[[Ca2+ overload]] / [[Excitotoxicity]]** → calpain/mPTP necrosis + NMDA-parthanatos feed-forward.

## Documents

* [[Regulated Cell Death]]
* [[Apoptosis]] / [[Necroptosis]] / [[Pyroptosis]] / [[Ferroptosis]] / [[Parthanatos]] / [[PANoptosis]] / [[Necrosis]] / [[Autophagic Cell Death]]
* [[Type I vs Type II Cells]]

## Connections

* [[ZBP1]] / [[RIPK1]] / [[RIPK3]] / [[MLKL]] — necroptosis/PANoptosome core
* [[NLRP3]] / [[Caspase-1]] / [[Gasdermin D]] / [[Gasdermin E]] — pyroptotic arm
* [[Caspase-8]] / [[Caspase-8-c-FLIP Rheostat]] / [[TAK1]] — apoptosis/necroptosis switch
* [[PARP1]] / [[Apoptosis-Inducing Factor]] — parthanatos axis
* [[GPX4]] / [[System Xc-]] / [[SLC7A11]] / [[ACSL4]] — ferroptosis axis
* [[Mitochondrial outer membrane permeabilization]] / [[Mitochondrial Permeability Transition Pore]] / [[Calcium Signaling]]

## Linking Summary

* Decision logic: ATP → caspase-8 → DNA/PARP → inflammasome/PANoptosome → iron/GPX4 → ER/CHOP.
* Cell-type overlay determines threshold, not pathway identity; sex determines executor (caspase vs PARP/AIF).
