---
title: Cell Death Comparison — Apoptosis, Necrosis, Necroptosis, Ferroptosis, Autophagy, Pyroptosis, Parthanatos
description: Seven-way compare table of major cell death programs synthesized from wiki notes with general-knowledge supplements.
created: 2026-09-03
updated: 2026-09-03
type: task-output
tags:
  - apoptosis
  - necrosis
  - necroptosis
  - ferroptosis
  - autophagy
  - pyroptosis
  - parthanatos
  - cell-death
---

# Cell Death Comparison — Apoptosis, Necrosis, Necroptosis, Ferroptosis, Autophagy, Pyroptosis, Parthanatos

> [!info]
> **Source Context**
> Primary sources from this wiki: [[Apoptosis]], [[Necrosis]], [[Necroptosis]], [[Ferroptosis]], [[Autophagy]], [[Autophagic Cell Death]], [[Pyroptosis]], [[Parthanatos]], [[Regulated Cell Death]], [[PARP1]], [[AIF]], plus raw documents for parthanatos (Fatokun 2014, Wang 2009, Yang 2024). `*` = general-knowledge supplement.

## ==One-line definitions==

- ==**[[Apoptosis]]** — classical programmed, non-lytic death. Caspase-dependent, ATP-dependent, silent clearance.==
- ==**[[Necrosis]]** — unregulated, passive death. ATP-depleted, swelling [[Oncosis]], early rupture, DAMP release, sterile [[Inflammation]].==
- ==**[[Necroptosis]]** — regulated necrosis. Looks like necrosis but executed by [[RIPK1]] -> [[RIPK3]] -> [[MLKL]] necrosome when [[Caspase-8]] is blocked.==
- ==**[[Ferroptosis]]** — regulated, iron-dependent death by unchecked [[Lipid Peroxidation]] when [[GPX4]] / [[Glutathione]] / [[System Xc-]] fails.==
- ==**[[Autophagy]]** — primarily survival/recycling to [[Lysosome]], not death. Excessive / failed flux causes [[Autophagic Cell Death]] (Type II).==
- ==**[[Pyroptosis]]** — inflammasome-driven lytic death via [[Caspase-1]] -> [[Gasdermin D]] pores + IL-1beta/IL-18.==
- ==**[[Parthanatos]]** — [[PARP1]]-dependent death via [[PAR]] -> mitochondrial [[AIF]] -> nuclear [[MIF]] nuclease; caspase-independent, large-scale DNA fragmentation, NAD+ depletion.==

[[Regulated Cell Death]] groups all except accidental necrosis.

## Compare table

|  | **[[Apoptosis]]** | **[[Necrosis]]** | **[[Necroptosis]]** | **[[Ferroptosis]]** | **[[Autophagy]]** | **[[Pyroptosis]]** | **[[Parthanatos]]** |
|---|---|---|---|---|---|---|---|
| **Regulated?** | yes | no, accidental | yes | yes | yes, pro-survival; death only if excessive | yes | yes |
| **Energy** | ATP-dependent | ATP-depleted | ATP-dependent kinase cascade | GSH/NADPH-dependent | mTORC1-inhibited, AMPK-activated | ATP-dependent inflammasome assembly | NAD+-consuming — PARP1 depletes NAD+/ATP |
| **Morphology** | shrinkage, blebbing intact, apoptotic bodies, DNA ladder | swelling [[Oncosis]], early rupture, DNA smear | swelling+rupture like necrosis, moderate condensation | shrunken dense mitochondria, no nuclear fragmentation, rupture | double-membrane [[Autophagosome]] -> autolysosome | swelling, 10-20nm pores, rupture, no ladder | chromatin condensation, 50-kbp fragments, depolarization, no apoptotic bodies* |
| **Immune** | silent, [[Annexin V]]+ | highly inflammatory: [[HMGB1]], [[ATP]], [[Uric Acid]] -> TLR/RAGE/[[NLRP3]] | inflammatory by design, DAMP release | inflammatory lipid [[Malondialdehyde]]/[[4-Hydroxynonenal]] | protective, clears DAMP sources | highly inflammatory: IL-1beta/IL-18 + [[HMGB1]], [[IL-1α]], mtDNA via pores | inflammatory via NAD+ collapse + DAMPs* |
| **Core machinery** | extrinsic Caspase-8 -> Caspase-3; intrinsic [[p53]] -> [[Bax]]/[[BAK]] -> [[Cytochrome c]] -> Caspase-9 -> Caspase-3; inhibited by [[Bcl-2]]/[[XIAP]] | Na/K pump failure -> [[Ca2+ overload]] -> [[Calpains]]; ROS -> [[mPTP]]; [[LMP]] -> [[Cathepsins]] | TNFα -> Complex I [[NF-κB]] -> Complex II apoptosis -> necrosome [[RIPK1]]->[[RIPK3]]->[[MLKL]] if Caspase-8 blocked; TRIF/[[ZBP1]] bypass | System Xc-[[SLC7A11]] -> GSH -> [[GPX4]]; parallel [[FSP1]]-[[Ubiquinone]]-NADPH; drivers [[ACSL4]], Fe2+ [[Fenton Reaction]], [[NCOA4]] | ULK1-[[FIP200]]; [[Beclin1]]-[[Vps34]]; Atg5-12-16L1 + [[LC3]]; [[TFEB]] via [[SIRT1]] | canonical: PRR+[[ASC]]+pro-Caspase-1 -> [[Caspase-1]] -> [[Gasdermin D]] pores + IL-1beta/IL-18; non-canonical: Caspase-4/5/11 sense LPS -> GSDMD -> K+ efflux -> NLRP3; Caspase-3/[[Gasdermin E]] arm | heavy DNA damage -> [[PARP1]] overactivation -> [[PAR]] -> [[AIF]] release -> [[MIF]] nuclear translocation -> large-scale fragmentation, caspase-independent |
| **Blocked by** | z-VAD-FMK, Bcl-2 | none specific | [[Necrostatin-1]], GSK872, necrosulfonamide | [[Ferrostatin-1]], liproxstatin-1, [[Deferoxamine]] | 3-MA/chloroquine; induced by [[Rapamycin]] | NLRP3 inhibitors, Caspase-1 inhibitors, disulfiram/GSDMD blockade* | PARP inhibitors, AIF blockade, NAD+ preservation* |
| **Crosstalk** | Caspase-8 cleaves RIPK1/3 to block necroptosis; Caspase-3/7 cleave GSDMD to block pyroptosis | secondary necrosis if apoptotic bodies not cleared | MLKL activates NLRP3 -> pyroptosis; RIPK3-AMPK triggers early autophagy then blocks flux | [[SIRT3]] failure feeds both necroptosis+ferroptosis via ROS | PINK1/Parkin mitophagy restrains necroptosis/NLRP3; Caspase-1 cleaves Parkin to break restraint | GSDMD pores license NLRP3; [[SIRT3]] lowers mtROS to suppress NLRP3 | SIRT1 promotes PARP1 survival via AIF; PARP1 competes with SIRTs for NAD+* |

## Takeaway

> Apoptosis = dismantle quietly; Necrosis = burst from energy collapse; Necroptosis = burst on purpose via RIPK/MLKL; Ferroptosis = rust from inside via iron+lipids; Autophagy = eat self to survive, die only if over-eaten; Pyroptosis = burst via inflammasome/Gasdermin to alarm immunity; Parthanatos = PARP/AIF/MIF suicide from irreparable DNA damage.
