---
title: Parthanatos
description: PARP-1-dependent regulated cell death executed by PAR polymer signaling
  to mitochondrial AIF and nuclear MIF nuclease; caspase-independent, with large-scale
  DNA fragmentation and NAD+ depletion.
protected: true
created: 2026-09-03
updated: 2026-09-08
tags: [biological-process, cell-death, regulated-cell-death, neurodegeneration]
url: #
source: #
aliases: [PARP-1-dependent cell death, PAR-mediated cell death]
---

# Parthanatos

**Parthanatos** (PAR + Thanatos) is the [[PARP1]]-dependent regulated death defined by hyperactivated [[PARP1]] -> toxic poly(ADP-ribose) ([[PAR]]) accumulation -> [[PAR]] binding to mitochondrial [[Apoptosis-Inducing Factor|AIF]] -> [[Apoptosis-Inducing Factor|AIF]] release and co-translocation with [[MIF]] (PAAN) to nucleus -> large-scale DNA fragmentation. It is caspase-independent, obligately [[PARP1]]-dependent, and distinct from [[Apoptosis]], [[Necrosis]], [[Necroptosis]], [[Ferroptosis]], and [[Pyroptosis]].

> [!info] Parthanatos in one sentence
> Severe DNA damage hyperactivates [[PARP1]] to make long branched [[PAR]]; [[PAR]] exits nucleus via histone H1.2, hits cytosol/mitochondria to inhibit [[Hexokinase-1]] and to bind [[Apoptosis-Inducing Factor|AIF]] at Arg588/Lys589/Arg592, releasing [[Apoptosis-Inducing Factor|AIF]] to recruit [[MIF]] nuclease to nucleus for chromatinolysis.

## Overview

Unlike apoptosis (caspase ladder, silent) and accidental necrosis (ATP collapse, swelling), parthanatos shows: loss of membrane integrity + phosphatidylserine externalization **without** cell swelling or apoptotic bodies, mitochondrial depolarization with early [[Apoptosis-Inducing Factor|AIF]] release **preceding** cytochrome c, ~50-kb large-scale fragmentation, Annexin V+/PI+, energy-independent in classic table, and strict rescue by [[PARP1]] deletion/inhibition but not by z-VAD-fmk.

Gold-standard models: MNNG 50-500 uM 5-25 min in HeLa/CHO/MEFs; NMDA 500 uM 5 min in cortical neurons; H2O2, NO, peroxynitrite, oxygen-glucose deprivation. Harlequin mice (80% [[Apoptosis-Inducing Factor|AIF]] reduction) resist NMDA/[[PAR]] but develop oxidative neurodegeneration, proving [[Apoptosis-Inducing Factor|AIF]] bifunctionality.

## Core cascade

### 1. DNA damage -> [[PARP1]] hyperactivation

Glutamate excitotoxicity (NMDA -> Ca2+ -> calmodulin -> nNOS -> NO + superoxide -> peroxynitrite), ROS, alkylators (MNNG/MMS), ischemia-reperfusion, pathologic alpha-synuclein/Abeta, MPTP. [[PARP1]] 116 kDa senses breaks via zinc fingers, uses [[NAD+]] to make 10-500x [[PAR]], hundreds of units, on self/histones/repair factors. Mild damage = repair; severe = death signal. DNA-independent routes exist via ERK2 and AIMP2.

### 2. [[PAR]] generation and export

[[PAR]] peaks nuclear/cytosolic at 15 min, mitochondrial at 30 min (COX1 colocalization), ~80 nM at 60 min -> ~60% neuronal death. Purified [[PAR]] delivered by lipid carrier kills dose/length-dependently, blocked by [[PARG]]/phosphodiesterase, not z-VAD. Carrier is PARylated histone H1.2; E3 ligase [[Iduna]] (RNF146) ubiquitinates H1.2 to block export. PAR-binding motif on [[Apoptosis-Inducing Factor|AIF]]-D3 (Arg588/Lys589/Arg592) separate from DNA-binding site; mutation retains oxidase/DNA binding but blocks release/death.

### 3. Cytosolic dual hit

- **Bioenergetics:** [[PAR]] binds/inhibits [[Hexokinase-1]], releases it from mitochondria -> glycolysis block, [[NAD+]]/ATP depletion, PPP/GSH/NADPH fall. Pyruvate/alpha-ketoglutarate bypass rescues in astrocyte models; cortical/glioblastoma models show NAD+ loss alone insufficient, HK-1 block primary. Salvage cost 4 ATP per ADP-ribose plus Nudix AMP -> AMPK-mTORC1 signaling adds autophagic overlay.
- **Death:** [[PAR]] binds extramitochondrial [[Apoptosis-Inducing Factor|AIF]] pool (20-30% on outer membrane cytosolic side) -> conformational release. Mature [[Apoptosis-Inducing Factor|AIF]] 62 kDa (67 kDa precursor, Met53/Ala54 cleavage), intermembrane + outer pool; 62->57 kDa calpain cleavage seen in ischemia but dispensable for canonical parthanatos.

### 4. [[Apoptosis-Inducing Factor|AIF]]-[[MIF]] nuclear chromatinolysis

Cytosolic [[Apoptosis-Inducing Factor|AIF]] binds [[MIF]] (PAAN, PD-D/E(X)K nuclease, E22 critical, tautomerase-independent). [[HDAC6]] keeps [[MIF]] deacetylated to permit binding; [[HDAC6]] inhibition -> acetylation -> no translocation. Co-translocation; [[MIF]] endo+exonuclease on ssDNA, [[Apoptosis-Inducing Factor|AIF]] boosts DNA affinity. Alternative AIF-CypA-H2AX nuclease proposed; EndoG ruled out in mammals. HSP70 (aa 150-228, ATPase) sequesters [[Apoptosis-Inducing Factor|AIF]] cytosolically as brake.

## Regulation

- **[[PARG]]/[[ARH3]]:** highly active erasers. Overexpression protects (infarct reduced); deletion lethal E3.5, sensitizes to MNNG/menadione. 2026 Hoch-lab preprint (bioRxiv 2026.05.12.724507): parthanatos strictly requires PARG activity in RPE1/MNNG — full inhibition blocks ATP loss/death but not NAD+ loss (NAD/ATP uncoupled); low residual PARG suffices; ARH3 KO no effect in that system; new 53-kDa splice isoform PARG53 revises PARG55/60 annotation and explains CRISPR-vs-inhibitor discrepancy. Paradox: knockdown protects in H2O2 but not MNNG models; endo- vs exo-glycosidase balance (mostly monomers, few free chains) plus auto-PARP1 inhibition confounds. [[ARH3]] loss sensitizes to ischemia, human mutants show neurodegeneration.
- **[[NAD+]] compartment:** nuclear/cytosolic pool hit first; mitochondrial pool via SLC25A51 plus mito-[[PARP1]] debated. NR/NMN rescue context-dependent. [[SIRT1]] competes for [[NAD+]]; SIRT1-PARP1-AIF axis gates survival vs death.
- **Ca2+:** ADP-ribose monomers open [[TRPM2]] -> Ca2+ influx; ER release contributes. Chelation protects renal I/R and H2O2 but not MNNG models. Calpain/mPTP downstream candidates, not obligatory.
- **Caspase switch:** low damage -> transient NAD+/ATP dip -> apoptosis; high damage -> prolonged depletion -> parthanatos. Apoptotic caspases cleave [[PARP1]] to prevent parthanatos.

## Pathology and clinical relevance

Primary death in post-mitotic neurons: stroke/MCAO (minutes-scale [[PAR]]/NO; PARP KO/inhibition, [[PARG]] overexpression protective; male-biased benefit), Parkinson (alpha-synuclein PFF -> NOS -> [[PARP1]]; [[PAR]] accelerates fibrillization feed-forward; PARP KO/inhibition and PAANIB-1 protective), Alzheimer (Abeta/tau/metal ROS; [[PAR]] colocalizes plaques/tangles; PARP KO preserves cognition), ALS (TDP43/SOD1/FUS/C9ORF72; veliparib/olaparib protective), Huntington (htt repair-scaffold deficit, caudate [[PARP1]] high, INO-1001 protective; CSF [[PAR]] paradox), plus diabetes, colitis, retinal/cochlear I/R, shock (sex-stratified protection: see Sex dimorphism below).

## Sex dimorphism

Ischemic parthanatos signaling is sexually dimorphic. In adult mouse MCAO, PARP-1 deletion, nNOS blockade, or PARP inhibition (7-nitroindazole; PJ-34) reduces infarct in males but worsens injury in females, and PARP-1 loss abolishes 17β-estradiol neuroprotection — estradiol replacement paradoxically increases infarction in PARP-1−/− ovariectomized females (McCullough et al. 2005, *J Cereb Blood Flow Metab*, PMID 15689952). PAR formation and nuclear [[Apoptosis-Inducing Factor|AIF]] translocation occur in both sexes, but kill only males: PARP-1 deletion suppresses PAR/AIF equally yet protects males only, and Harlequin AIF-deficient adults are protected in males only (Yuan et al. 2009, *Exp Neurol* 217:210–218). The neonatal pattern matches — PARP-1 disruption preferentially protects males from perinatal hypoxia-ischemia (Hagberg et al. 2004, *J Neurochem* 90:1068–1075), while females die via cytochrome-c/caspase-3, rescued by the pan-caspase inhibitor Q-VD-OPh in females only (*Stroke* 2011;42:739–745). Sex-chromosome complement alone recapitulates the split in vitro: XY neurons favor AIF-mediated caspase-independent death, XX neurons cytochrome-c/caspase death (Du et al. 2004, *J Biol Chem* 279:38563–38570). Caveat: neonatal Harlequin protection is additive with caspase inhibition in both sexes (Zhu et al. 2006, *Cell Death Differ*), so the male-selective AIF effect is adult-specific and model-dependent. No verified sex difference exists for the [[MIF]]/PAAN nuclease step. See also [[Apoptosis]] for the XX-caspase counterpart.

## Tool compounds

| Target | Agents |
|---|---|
| [[PARP1]] hyperactivation | DPQ, DHIQ, benzamide/3-aminobenzamide, PJ34, veliparib, olaparib, INO-1001, 4'-methoxyflavone, 3',4'-dimethoxyflavone |
| [[PAR]] signal | Anti-PAR antibodies, [[PARG]] overexpression, [[Iduna]] potentiation, crocetin via NOX2/HK-1 protection |
| [[Apoptosis-Inducing Factor|AIF]] release/translocation | No direct inhibitor; PAR-binding-dead AIF proof-of-concept, HSP70 overexpression, calpastatin in ischemia models |
| [[Apoptosis-Inducing Factor|AIF]]-[[MIF]] interaction | [[HDAC6]] inhibitors disrupt (acetylate [[MIF]]) |
| [[MIF]] nuclease | PAANIB-1 brain-penetrant selective inhibitor |
| Bioenergetics | Pyruvate/alpha-ketoglutarate bypass, NR/NMN in permissive models, Ca2+ chelation in H2O2/renal I/R |

> [!tip] Death-dissection panel
> Combine PARP inhibitor (parthanatos) + z-VAD-FMK (apoptosis) + [[Necrostatin-1]] (necroptosis) + [[Ferrostatin-1]] (ferroptosis). Death blocked by PARP inhibition but not z-VAD implicates parthanatos; confirm with [[Apoptosis-Inducing Factor|AIF]] nuclear translocation + [[PAR]] accumulation + NAD+ fall.

## Crosstalk

- **Parthanatos <-> [[Apoptosis]]:** mutual antagonism (NAD+/ATP switch; caspase cleavage of [[PARP1]]) plus cooperation nodes: calpain–BID–BAX–[[Apoptosis-Inducing Factor|AIF]] axis (calpain-cleaved BID → tBID → BAX → AIF release, caspase-independent), [[89-kDa PARP1 Fragment]] as cytoplasmic PAR carrier driving AIF death (2025), HK1–VDAC dissociation lowering apoptotic threshold. [[Apoptosis-Inducing Factor|AIF]] translocation in apoptosis likely epiphenomenon or PARP-dependent secondary.
- **Parthanatos <-> [[Necroptosis]]:** both considered regulated necrosis subsets; TNF-alpha + [[PARP1]] ATP depletion links; but PAR/[[Apoptosis-Inducing Factor|AIF]] signature unique.
- **Parthanatos <-> [[Autophagy]]:** AMPK-mTORC1 activation and autophagic figures in some models; protective vs executive role unresolved.
- **Parthanatos <-> [[Ferroptosis]]:** shared ROS/JNK/MAPK/mTOR upstream, GSH/NADPH fall via HK-1/PPP; PARP activity during autophagy promotes ferroptosis in some models.
- **Parthanatos -> inflammation:** [[PARP1]] co-activates NF-kB; fragmented DNA as DAMP -> cGAS-STING, AIM2, [[NLRP3]]; [[MIF]] drives NLRP3 IL-1beta and is PD/AD biomarker.
- **Parthanatos <-> [[Mitophagy]]:** PINK1/Parkin clears ROS sources restraining [[PARP1]]; caspase/MIF-nuclease axis opposes.

## Documents

List of documents that mention this entity

- [[_document_ - Parthanatos Fatokun 2014 mitochondrial mechanisms|Fatokun et al. 2014 Br J Pharmacol]]
  - Defining review (~597 cites): PARP-1/PAR/AIF choreography, MNNG/NMDA gold standards, PARG/AIF/PAAN biology, energy-depletion rejection, pan-disease table, inhibitor generations.
- [[_document_ - Parthanatos Wang 2009 PAR signals to AIF|Wang et al. 2009 Exp Neurol]]
  - PAR translocation nucleus->mitochondria as commitment point; Table 1 apoptosis/necrosis/autophagy/parthanatos features; AIF isoforms/pools; calpain debate; HSP70 brake.
- [[_document_ - Parthanatos Yang 2024 mechanisms therapeutics|Yang et al. 2024 Biochem Pharmacol]]
  - Update: H1.2/Iduna export, HK-1 bioenergetics, Arg588/Lys589/Arg592 PAR motif, AIF-MIF/HDAC6/PAANIB-1, neuroinflammation cGAS/AIM2/NLRP3, PD/AD/ALS/HD/stroke specifics, structural inhibitor guide.
- [[_document_ - Parthanatos Andrabi 2006 PAR polymer death signal|Andrabi et al. 2006 PNAS]]
  - Founding proof: purified PAR kills dose-/length-dependently (≥60-mer, ≥20 nM, ~80 nM endogenous after NMDA); PARG/PD1 predigestion, anti-PAR serum, cytosolic PARG halve NMDA/MNNG death; PARG-Tg −62% vs PARG+/− +56% MCAO infarct.
- [[_document_ - Parthanatos Andrabi 2008 mitochondrial nuclear crosstalk|Andrabi/Dawson 2008 Ann NY Acad Sci]]
  - Term coined (PAR + Thanatos); PAR→AIF nuclear-mitochondrial crosstalk; PARG-KO lethality; Harlequin AIF model; BAX/calpain/mPTP candidates left open.
- [[_document_ - Parthanatos David 2009 messenger of death|David et al. 2009 Front Biosci]]
  - PAR-not-NAD+ thesis; PARP domain/synthesis chemistry; AIF flavoprotein biology; PARG isoform genetics; BAX/calpain/PTP wiring as open questions.

## Connections

- [[PARP1]] — sensor/executor; hyperactivation defines parthanatos; target of DPQ/PJ34/veliparib/olaparib.
- [[Apoptosis-Inducing Factor|AIF]] — mitochondrial flavoprotein; PAR binding -> release -> nuclear commitment point; Hq model.
- [[PAR]] — polymer death signal; length/dose toxicity; H1.2-carried.
- [[MIF]] — PAAN nuclease; E22-dependent AIF recruitment; PAANIB-1 target; PD/AD biomarker.
- [[PARG]] — PAR eraser; overexpression protects, deletion lethal/sensitizing; context-dependent promoter/suppressor.
- [[Iduna]] — PAR-dependent E3 blocking H1.2-PAR export.
- [[Hexokinase-1]] — PAR-inhibited glycolytic gate; bioenergetic failure node.
- [[Nudix Hydrolases]] — ADP-ribose → AMP/R5P; salvage-cost and AMPK overlay.
- [[89-kDa PARP1 Fragment]] — apoptotic p89 as cytoplasmic PAR carrier bridging to AIF death.
- [[NAD+]] — consumed substrate; compartment-specific depletion; SIRT competition; NR/NMN rescue context.
- [[TRPM2]] — ADP-ribose Ca2+ channel linking PAR catabolism to calpain/mPTP candidates.
- [[HDAC6]] — deacetylates MIF to license AIF-MIF binding/translocation.
- [[Apoptosis]] — caspase-dependent counterpart; ATP-switch and PARP-cleavage mutual exclusion; XX vs XY sex divergence.
- [[Necroptosis]] — regulated-necrosis sibling; RIPK/MLKL vs PAR/AIF distinction.
- [[Ferroptosis]] — ROS/GSH/NADPH overlap via HK-1/PPP.
- [[Autophagy]] — AMPK-mTORC1 overlay; mitophagy restraint.
- [[NLRP3]] — inflammasome amplified by PARP-1/NF-kB and MIF; bridge to pyroptosis.
- [[SIRT1]] — NAD+ competitor gating PARP-1/AIF survival.
- [[Regulated Cell Death]] — parent program grouping parthanatos with apoptosis/necroptosis/pyroptosis/ferroptosis.

## Linking Summary

- New note in src/notes/_link/ as cross-topic entity (apoptosis/oxidative-stress/sirtuins/neurodegeneration/cancer).
- New links added: [[PAR]], [[MIF]], [[PARG]], [[Iduna]], [[Hexokinase-1]], [[Parthanatos]], [[Regulated Cell Death]], [[NLRP3]], [[SIRT1]], [[TRPM2]], [[HDAC6]], [[NAD+]], [[Apoptosis-Inducing Factor|AIF]], [[PARP1]], [[Apoptosis]], [[Necroptosis]], [[Ferroptosis]], [[Pyroptosis]], [[Autophagy]], [[Necrosis]].
- Suggested new entity notes to create: [[PAR]], [[MIF]], [[PARG]], [[Iduna]], [[Hexokinase-1]], [[PAANIB-1]], [[H1.2]].
- Strong connections to strengthen: [[Parthanatos]] <-> [[PARP1]], [[Parthanatos]] <-> [[Apoptosis-Inducing Factor|AIF]], [[Parthanatos]] <-> [[MIF]], [[Parthanatos]] <-> [[NAD+]], [[Parthanatos]] <-> [[Apoptosis]] (sex-difference arm).
- Sex-dimorphism enrichment (2026-09-03): male-PARP/AIF vs female-caspase split across adult MCAO, neonatal HI, and XY/XX cultures (McCullough 2005; Yuan 2009; Hagberg 2004; Du 2004; Stroke 2011; Zhu 2006 caveat); no MIF/PAAN sex claim.
