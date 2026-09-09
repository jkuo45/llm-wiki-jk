---
title: Parthanatos Open Questions — Web Research Update
description: All 17 open questions from Moura et al. 2024 updated with 2014–2026 literature plus Q18 PARG-executionary synthesis — NAD/glycolysis/PARG/free-PAR/TRPM2-Ca2+/Nudix-AMP-autophagy/AIF-MIF/apoptosis crosstalk.
created: 2026-09-08
updated: 2026-09-09
type: task-output
tags:
  - parthanatos
  - parp1
  - nad-plus
  - glycolysis
  - parg
  - arh3
  - aif
  - mif
  - trpm2
  - nudix
  - ampk
  - autophagy
---

# Parthanatos Open Questions — Web Research Update
Date: 08_Sep_2026 12:00 PM PDT; extended 09_Sep_2026 with all remaining sections
Source framing: Moura et al. 2024, "Molecular mechanisms of cell death by parthanatos: More questions than answers" (PMC11445734) — all 17 open questions verbatim across 5 sections. Update below integrates 2014–2026 literature.

## 1. What factor(s) determine(s) whether NAD supplementation does or does not prevent parthanatos induction?

**Status: context-dependent, now mechanistically explainable. Direction: NAD rescues only the NAD-centric branch, not the PAR–hexokinase branch.**

- NAD-centric evidence (astrocytes, glucose-only media): Alano et al. 2004, 2010; Ying et al. 2005 — exogenous NAD+, pyruvate, α-ketoglutarate prevent death; FK866 NAD depletion alone phenocopies. Zong et al. 2004 — glycolysis-reliant cells more sensitive, pyruvate rescues. NR/NMN rescue in some settings: Nishida et al. 2022; Santofimia-Castaño et al. 2022.
- PAR-centric counter-evidence (cortical neurons, LN428 glioblastoma): Andrabi et al. 2014 (PNAS 111:10209); Fouquerel et al. 2014 (Cell Rep 8:1819) — profound FK866 NAD depletion without PARP hyperactivation does NOT cause ATP/glycolysis collapse; NR supplementation restores NAD pool but does NOT rescue ECAR/glycolysis or ATP loss.
- Determinants emerging:
  1. **PAR load vs NAD loss**: if PAR polymers are generated (PARP hyperactivation + PARG endo-activity), NAD alone is insufficient. If death is driven mainly by NAD/energy failure without large free-PAR burst, NAD rescues.
  2. **Carbon-source availability**: pyruvate/glutamine in medium bypasses hexokinase block and masks NAD effect (Andrabi 2014; Alano authors themselves flagged aCSF glucose-only artefact).
  3. **Compartmentalization**: nuclear/cytosolic NAD in rapid equilibrium vs separate mitochondrial pool (Cambronne 2016; Covarrubias 2021); mitochondrial PARP1 pool + SLC25A51 NAD transporter (Girardi/Kory/Luongo 2020) mean whole-cell NAD measurements mislead. Cytosolic NAD matters for glycolysis; mitochondrial NAD for respiration.
  4. **NAD salvage cost**: full NAD salvage costs 4 high-energy phosphates per ADP-ribose (Moura Fig.2); at high PAR turnover, salvage itself deepens ATP loss — supplementing precursors can feed PARP and worsen PAR burst (cf. NAMPT→NAD→PARP fuels parthanatos in psoriasis model, zebrafish 2021; NAD-biosynthesis-high ovarian cancer PARPi resistance 2024).
  5. **PARG/ARH3 status** (see 2026 preprint below): full PARG inhibition uncouples NAD depletion (still occurs) from ATP depletion/cell death (prevented) — so NAD readout alone does not predict survival.
- Practical direction: always report (a) medium (glucose-only vs +pyruvate), (b) compartment-resolved NAD + PAR levels, (c) PARG/ARH3 activity, (d) NR/NMN dose-timing. Test NAD + pyruvate vs NAD alone to dissect branches.

## 2. Is the inhibition of glycolysis necessary and/or sufficient for cell death by parthanatos?

**Status: central but neither strictly necessary nor sufficient alone. Direction: glycolysis block is the best-correlated metabolic lesion; AIF/MIF DNA cleavage is the parallel lethal arm.**

- For necessity: pyruvate/α-ketoglutarate bypass rescues death in both NAD-centric and PAR-centric models (Ying 2002/2003; Zong 2004; Andrabi 2014) — consistent with glycolytic block as bottleneck. OGD model 2024 (FASEB J 202302559R): PARP inhibition or WT-HK1 / PAR-binding-mutant-HK1 overexpression improves glycolysis + mitochondrial function + redox + survival together.
- Against sufficiency: (a) Bax/calpain KO cells: NAD+ falls but cells survive like DPQ-treated WT (cited in IJMS 2022 review) — metabolism lesion without AIF release insufficient. (b) AIF-independent parthanatos exists — retinal cells, macrophages, HK-2, pancreatic models show PARP-dependent death without detectable AIF translocation (Table 1, Moura 2024). (c) ATP levels do not always track infarct size in PARP1 KO MCAO (ibid.).
- Additional glycolytic target beyond HK1: GAPDH PARylation inhibits glycolysis in renal I/R (Devalaraja-Narashimha 2009); Krebs enzymes (SDH, α-KGDH, PDH) appear in PAR interactome (Fouquerel 2014 suppl.).
- PPP corollary: HK block starves PPP → NADPH/GSH loss (Hossain et al. 2024; Andrabi 2014 Fig.5E) — redox collapse may be the actual lethal output of glycolysis inhibition, not ATP per se.
- Direction: test necessity/sufficiency in ONE system with orthogonal rescues — (i) PBM-mutant HK1 knock-in, (ii) pyruvate + GSH-ester + NADPH support, (iii) MIF-nuclease inhibitor (Park et al. 2022) ± glycolysis rescue. If glycolysis rescue without AIF-block still dies (DNA fragmentation persists), glycolysis is contributory not sufficient.

## 3. How do free PAR chains inhibit hexokinase activity?

**Status: two non-exclusive mechanisms, best-supported model = direct PAR binding to PBM + VDAC dissociation. Direction: PBM-blocking peptides / pbmHK-1 knock-in is the decisive test.**

- HK1/HK2 contain strong PAR-binding motif (PBM) (Gagné et al. 2008; Andrabi 2014 Fig.5A; Fouquerel 2014 MS). Evidence:
  - PAR co-IPs HK1 after MNNG; total HK protein unchanged, activity falls at 15 min — before NAD+ falls (Andrabi 2014).
  - Purified PAR directly inhibits HK activity in lysates; PARG-predigested PAR does not (Andrabi 2014 Fig.5D; Fouquerel 2014 in vitro assay).
  - PBM required: Fouquerel shows PBM-dependent inhibition; 2024 OGD paper: PAR-binding-mutant HK-1 (pbmHK-1) overexpression protects glycolysis/mito/redox/survival vs WT-HK1.
- Localization mechanism: HK1 normally docks to outer-mitochondrial VDAC coupling glycolysis→OXPHOS. MNNG causes HK1 mobilization mitochondria→cytosol with activity loss (Fouquerel 2014; Saraiva 2010 precedent; Ullu 2002 — release drops membrane potential, promotes death). Model: cytosolic PAR binds HK1 → conformational inhibition and/or VDAC dissociation.
- Open sub-questions (still unresolved):
  - Free vs protein-conjugated PAR as inhibitor? PARG-endo generates free chains; exo generates monomers (Barkauskaite 2015 — exo predominant). How free chains escape nuclear PARG at sufficient length/complexity to reach cytosol is unknown; chain length/branching correlates with toxicity (Andrabi 2006 BioPorter PAR delivery).
  - PARG paradox: PARG-KD rescues glycolysis in LN428 (Fouquerel) but PARG-overexpression rescues in neurons (Andrabi) — implies dose/context determines whether PARG creates the inhibitor (free PAR) or destroys it (Mashimo 2013 dual-function hypothesis).
  - AIF–HK link: Andrabi hypothesizes PAR-induced AIF release disrupts AIF–HK interaction contributing to HK loss — untested.
- Direction: (a) cryo-EM/structure of HK1–PAR complex, chain-length titration; (b) VDAC–HK1 FRET before/after PAR; (c) PARG53 splice-variant-aware PARG manipulation (see §5/2026 preprint); (d) test GAPDH co-inhibition in same lysates.

## 4. Are NAD+ and ATP depletion mechanistically connected?

**Status: yes but dissociable — at least three coupling routes plus one uncoupling proof. Direction: treat as parallel outputs of PAR turnover, not a single linear chain.**

- Coupling routes:
  1. **NAD-as-cofactor**: NAD+ loss limits GAPDH/LDH/TCA/NADH→OXPHOS (classical suicide hypothesis, Berger 1985; Ha & Snyder 1999).
  2. **Salvage cost**: NAD resynthesis from NAM + ADP-ribose-derived R5P/PRPP costs 4 ATP-equivalents per cycle (Moura Fig.2; Formentini 2009; Buonvicino 2013). High PAR turnover → ATP burn + AMP accumulation → ANT inhibition (blocks ADP import into mitochondria) → further ATP synthesis failure.
  3. **PAR–HK glycolysis block** (§3) → glycolytic ATP failure → secondary mitochondrial failure (pyruvate/glutamine rescue proves mitochondrial defects largely downstream of glycolysis in neurons — Andrabi 2014).
  4. **Nudix → AMP → AMPK–mTORC1**: ADP-ribose → AMP + R5P via Nudix; AMP/ATP rise activates AMPK, inhibits mTORC1 (Ethier et al. 2012) — links energy state to autophagy response of unclear protective/lethal role.
- Uncoupling proof (latest):
  - Andrabi/Fouquerel 2014: FK866 NAD depletion → respiration defect only, no glycolysis/ATP collapse; MNNG → glycolysis/ATP collapse precedes NAD fall.
  - **2026 preprint (de Moura/Hoch lab, bioRxiv 2026.05.12.724507)**: full PARG inhibition prevents ATP depletion and parthanatos but NOT NAD+ depletion — NAD and ATP formally uncoupled; low residual PARG suffices for death; ARH3 KO no effect in RPE1/MNNG system. Demonstrates PAR formation + PAR hydrolysis both required; ATP tracks death better than NAD.
- Direction: time-resolved, compartment-resolved NAD/ATP/AMP/PAR + ECAR/OCR in same well; PARG-titration (not just KO vs WT — KO confounds PARP1 auto-PAR accumulation/Gogola 2018); Nudix-KD to quantify AMP-route contribution; SLC25A51 manipulation to test mitochondrial-NAD arm.

## 5. Is there more extensive crosstalk between apoptosis and parthanatos, or only mutual antagonism (energy-block vs PARP1 cleavage)?

**Status: more extensive than the two-node textbook diagram. Direction: BID–calpain–BAX–AIF axis + AIF/MIF nuclease + 89-kDa PARP1-fragment carrier are the concrete extensions.**

- Established mutual antagonism (still holds):
  - Parthanatos→anti-apoptosis: severe ATP depletion precludes apoptotic execution; low/intermediate DNA damage → transient NAD/ATP dip → apoptosis; high damage → prolonged depletion → parthanatos (Nishida et al. 2022).
  - Apoptosis→anti-parthanatos: caspase cleavage of PARP1 (Asp214/Gly215, between DNA-binding and catalytic domains) inactivates hyperactivation (D'Amours 2001).
- Extensions with evidence:
  1. **Calpain–BID–BAX–AIF**: MNNG parthanatos/necroptosis requires sequential PARP1→calpain→BID cleavage (calpain-non-cleavable BID G70A/Δ68-71 blocks BAX + death)→tBID→mitochondrial BAX→AIF release (Moubarak/Galán-Malo/Susin, Cell Death Differ 2012; Polster 2005; Norberg 2008). BAX/BID are canonical apoptotic proteins operating caspase-independently here. Calpain also cleaves BAX to p18 fragment. TRPM2/ER Ca2+ influx (§ADP-ribose/TRPM2 in Moura review) is the candidate calpain trigger — but Ca2+ chelation protects vs H2O2 not MNNG (Bentle 2006), so insult-specific.
  2. **AIF in both**: AIF translocates in some apoptotic stimuli too, recently suggested PARP-dependent (Mashimo 2021); apoptotic vs parthanatic AIF release kinetics/pools differ (outer-membrane 30% pool rapid release precedes cytochrome c — Yu 2009).
  3. **89-kDa PARP1 fragment as PAR carrier**: 2025 work (Mashimo/Onishi; Zhang et al. J Adv Res 2025 review) — caspase-generated 89-kDa fragment serves as cytoplasmic PAR carrier to drive AIF-mediated apoptosis — i.e. apoptotic cleavage product actively feeds parthanatic signaling, blurring antagonism into cooperation. RSL3 ferroptosis–apoptosis crosstalk via PARP1 also reported 2025.
  4. **HK1–VDAC–BCL2 family**: HK–VDAC dissociation sensitizes to BAX/BAK MOMP and TNF-apoptosis (Ullu 2002; Shoshan-Barmatz/Front Physiol 2017) — parthanatic HK inhibition may lower apoptotic threshold in survivors.
  5. **MIF vs CypA/H2AX nuclease choice**: AIF–MIF nuclease (Wang 2016; MIF inhibitor protects in parkinsonism — Park 2022) vs AIF–CypA–H2AX intrinsic nuclease (Artus 2010; Novo 2022) — which complex forms may depend on caspase/calpain context.
  6. **Histopathology correlate**: high PARP1 without apoptotic bodies/necrosis = parthanatos; apoptotic bodies track PARP1 nuclear→cytoplasmic redistribution (Donizy 2013; Qiao 2024) — usable tissue classifier.
- Direction: in one MNNG/H2O2/NMDA panel, combine caspase inhibition (Q-VD), calpain inhibition, BID/BAX KO, TRPM2 KO, MIF-nuclease inhibition, and 89-kDa-fragment tracking. Readouts: PAR chain length, HK activity, ATP/NAD, AIF localization, DNA-fragment size (large-scale parthanatic vs oligonucleosomal apoptotic).

## 6. Do PAR hydrolases, and PARG in particular, promote or inhibit parthanatos execution?

**Status: both — dose-dependent hinge, now resolved toward "partial promotes / full block protects". Direction: use graded PARG inhibition + PARG53-aware genotyping.**

- See §PARG update block below + source-note quote: historic Table 1 heterogeneity (protective in Koh 2004 embryos, Andrabi 2006 neurons/MCAO, Tang 2010 MMS, Santofimia 2022 pancreas; detrimental in Cuzzocrea 2005 SAO shock, Fouquerel 2014 glioblastoma, Mashimo 2013 H2O2-MEFs; no effect in Blenn 2006 MNNG-MEFs, Munoz 2017 HK-2).
- 2026 resolution (de Moura/Hoch bioRxiv 2026.05.12.724507): full PARGi prevents death; 1–3 uM residual activity still kills; ARH3 KO neutral in RPE1/MNNG. Supports Mashimo dual-function: endo-activity makes free PAR (pro-death), high exo-activity destroys it (protective). Exo predominant (Barkauskaite 2015).
- Confounders: long-term PARG KO → auto-PARylated PARP1 accumulates → less DNA-engageable PARP1 → weaker PAR burst (Gogola 2018); PARG essential gene — viable exon-3/7 KOs are hypomorphs retaining PARG53 (Chen-group + Hoch-lab 2026).
- ARH3: protective in I/R + H2O2 patients/mice (Danhauser/Ghosh 2018) but alternative epigenetic explanation (histone-MAR scars → transcription deregulation, Hanzlikova 2020) still open; dispensable for MNNG/RPE1 death.
- Direction: PARG titration curves (0.3–10 uM PDD00017273 / COH34 / JA2131) + PARP1-mobility shift + MAR vs PAR-specific blots + PARG53 PCR; compare H2O2 vs MNNG vs NMDA in same background.

## 7. How are free PAR chains generated at sufficiently high amounts, protected from hydrolytic enzymes and then transported out of the nucleus?

**Status: largely unresolved; best clues = protein-free PAR synthesis + PAR-carrier fragments + cytosolic PARG isoforms. Direction: track PAR species, not just bulk PAR.**

- Generation: PARG endo-cut of protein-PAR → free chains; but nuclear PARG exo dominates → free chains must escape fast. New 2024 mechanism: PARP1 de novo protein-free PAR synthesis (Langelier et al., Mol Cell 2024) — no protein anchor needed, directly diffusible.
- Protection/transport unknown: no PAR exporter identified; candidates: (a) 89-kDa PARP1 caspase fragment as cytoplasmic PAR carrier (Mashimo/Onishi 2021; Zhang J Adv Res 2025); (b) PARylated shuttling proteins; (c) cytosolic PARG102/99 generating second-wave free PAR locally; (d) PAR–antibody neutralization in cytosol protects vs NMDA death (Andrabi 2006) proving cytosolic PAR is the lethal pool.
- Chain rules: long/branched > short/linear toxicity (Andrabi 2006 BioPorter); PARG-predigested PAR loses HK-inhibitory + AIF-releasing activity (Andrabi 2014; Fouquerel 2014).
- Direction: chain-length/branching MS + PAR-FRET biosensors (nucleus vs cytosol vs mitochondria) + PARG-endo-dead vs exo-dead mutants + 89-kDa-fragment tracking ± caspase inhibition.

## 8. Is ADP-ribose-induced TRPM2 gating necessary and/or sufficient for parthanatos execution?

**Status: contributory in oxidative/renal/I-R models, not universal. Direction: necessary in H2O2/TRPM2-high cells, dispensable in MNNG/low-TRPM2 systems.**

- For: H2O2 + amyloid-β striatal neurons, cardiomyocytes, β-cells, SH-SY5Y-TRPM2-OE, hippocampal neurons — TRPM2-KD/siRNA/PARPi reduces Ca2+ + death (Fonfria 2004/2005; Yang 2006; Ishii 2014; An 2019; Li 2017 — partly Zn2+-dependent). Renal I/R: PARPi or Ca2+ chelation each prevents death (Zhang 2014). ADPR gating needs PARG (Blenn 2011) linking PAR turnover to Ca2+.
- Against sufficiency/necessity: Ca2+ chelation protects vs H2O2 not MNNG (Bentle 2006); TRPM2 is plasma-membrane only — cannot explain ER release arm (Munoz 2017; Zhong 2018, PARG-independent). Some TRPM2 opens ROS-direct without ADPR (Wehage 2002). ATM-KO + PARGi death shows no AIF / no NAD fall — i.e. PAR-accumulation death without TRPM2–parthanatos (J Transl Med 2026).
- 2024–2025 mechanism refinements: TRPM2 needs ADPR + Ca2+ synergy + PIP2; NUDT9-H evolved enzyme→binding site; 2'-deoxy-ADPR superagonist with 4x higher Ca2+ sensitivity, activates at resting Ca2+ (Front Immunol 2024); PKC/NOX→ROS→PARP→TRPM2→PYK2/MEK/ERK→PARP positive feedback in microglia (Redox Rep 2025); Ca2+→lysosomal LMP→Zn2+→mito ROS→PARP→ADPR cycle, i.e. Ca2+ kills via lysosomal Zn2+ not direct mito Ca2+ (Biomolecules 2025 review).
- Direction: in one panel (H2O2 vs MNNG vs NMDA): TRPM2-KO + PARG-inhibited + 2-APB vs ER-store block; read ADPR (LC-MS), Ca2+ (cytosol + mito + ER), PAR, death ± PARP inhibition.

## 9. Are there TRPM2-dependent and TRPM2-independent modes of parthanatos?

**Status: yes — Table 1 already implies it; 2024–2026 data strengthens it. Direction: classify by insult + TRPM2 expression + Ca2+ source.**

- TRPM2-dependent: H2O2/ROS, renal I/R, striatal/cortical/hippocampal neurons, cardiomyocytes, microglial activation/death — PARP/PARG→ADPR→TRPM2→Ca2+ influx required for full death.
- TRPM2-independent: MNNG (Bentle 2006 chelation-insensitive), ER-store Ca2+ arm (Munoz 2017; Zhong propofol 2018 — ROS-ER-Ca2+-mito axis, PARG-independent), AIF-independent RPE/macrophage death (Jang 2017; Regdon 2019), ATM-KO PARGi replication-stress death.
- Mixed: myocardial I/R — TRPM2 worsens (Ca2+/Zn2+ overload, BBB/CD36/NMDAR) in brain/kidney/liver but may protect myocardium via Pyk2/Ca2+ tuning (Front Immunol 2024 review) — model/time/anesthetic-dependent.
- Direction: report TRPM2 isoform/expression + ADPR vs 2dADPR + extracellular-Ca2+-free vs ER-depleted conditions; do not generalize H2O2→MNNG.

## 10. What are the downstream molecular effects of TRPM2-mediated increases in intracellular Ca2+?

**Status: at least four arms; calpain–BID–BAX–AIF best-linked to parthanatos, Zn2+/mPTP/mito-fission emerging. Direction: dissect Ca2+→X→AIF vs Ca2+→bioenergetics.**

- (a) Calpain I → AIF truncation (57 kDa) + release; also BID→tBID→BAX→AIF (Polster 2005; Norberg 2008; Vosler 2009; Sun MPP+/MPTP 2018; Moubarak/Cabon BID–BAX axis) — but Wang 2009 shows calpain dispensable in some MNNG models.
- (b) mPTP opening → swelling/rupture → AIF/CytC/EndoG release (Yu 2006; Bernardi 2023 consensus review — ATP-synthase dimer core debated).
- (c) Mito fission/fragmentation + depolarization + NAD/ATP fall (Jang RPE 2017; photoreceptor light model — mTOR/PARP upstream of AIF).
- (d) Kinase feedback: Ca2+→PYK2/MEK/ERK→more PARP/TRPM2 (microglia 2025); Ca2+→lysosome→Zn2+→Complex-III ROS (Biomolecules 2025); Ca2+ modulates PARP1 itself by unclear mechanism (Zhang 2014) — bidirectional.
- Direction: Ca2+ chelator (BAPTA) vs TRPM2-KO vs calpain inhibitor (calpeptin/PD150606 + calpain-resistant AIF) vs mPTP inhibitor (CsA/NIM811) vs Zn2+ chelator (TPEN) in same MNNG/H2O2/NMDA matrix; read AIF size (62 vs 57 kDa), BAX/BID cleavage, OCR/ECAR, PAR.

## 11. Are Nudix hydrolases required for parthanatos execution?

**Status: no direct KO/KD proof in parthanatos; enzymology + salvage-cost logic says contributory, not executive. Direction: test NUDT5/9/16 + MTH1-class redundancy.**

- Known: NUDT5 (cytosolic dimer, Mg2+-dependent) + NUDT9 (mito matrix monomer) hydrolyze ADPR→AMP+R5P (Perraud/Shen 2003; Zha 2006/2008; Reactome R-HSA-2393939/2393954); NUDT16 regulates 53BP1 via de-ADP-ribosylation (Cancer Res 2020); NUDT5 also tunes purine salvage vs de novo + thiopurine pharmacology (JCI 2026) — i.e. Nudix sit at PAR→nucleotide-metabolism junction.
- Missing: no parthanatos paper KOs Nudix and shows death rescue; Palazzo/Daniels show protein-phosphoribose product only in vitro — in vivo relevance unclear.
- Direction: siNUDT5/9/12/16 ± MNNG/H2O2; read ADPR, AMP/ATP, PAR, AMPK-pT172, death ± PARGi; overexpress NUDT5 to test sufficiency for AMP-arm.

## 12. What is the relative contribution of AMP generated from ADP-ribose hydrolysis, as opposed to ATP depletion from glycolysis inhibition, for the AMPK activation/autophagy observed in parthanatos?

**Status: both feed AMP/ATP ratio; glycolysis block likely dominant for ATP fall, Nudix-AMP for AMPK sensing. Direction: uncouple with HK-PBM rescue vs Nudix KD.**

- Glycolysis arm: HK1-PAR block → glycolytic ATP failure → ADP-import failure via ANT inhibition by AMP (Formentini 2009; Buonvicino 2013) → mito ATP synthesis failure; pyruvate bypass rescues ATP + death in both NAD- and PAR-centric models.
- Salvage-cost arm: full NAD cycle costs 4 high-energy phosphates per ADPR (Moura Fig.2: AMP→ATP 2 + R5P→PRPP 2); NAD ~0.3 mM vs ATP ~3–4 mM — full NAD turnover alone can dent ATP substantially even before HK block.
- Readout: MNNG→AMPK→mTORC1 inhibition (Ethier 2012 HEK293); autophagy in cochlear/alkylation models (Zhou 2013; Jiang 2018) — but AMPK dogma now contested: AMPK can suppress ULK1 initiation while preserving machinery (Nat Commun 2023; BioEssays 2024; AJP-Cell 2025) — so p-AMPK ≠ autophagy flux.
- Direction: same-well time course ADPR/AMP/ATP/PAR/ECAR/OCR + p-AMPK/p-ULK1/p-S6K + LC3 flux (± bafilomycin); compare pbmHK-1 rescue vs NUDT5-KD vs PARG-full-block; test ANT inhibitor (bongkrekic acid) contribution.

## 13. How do AMPK activation and autophagy affect cell death by parthanatos?

**Status: unclear — protective in some, coincident in others; no clean epistasis. Direction: treat as modulator, test flux not markers.**

- Pro-survival hints: AMPK preserves ULK1 machinery from caspase shredding during energy stress (Nat Commun 2023); PAR accumulation accelerates autophagy after starvation in PARG-depleted cells without killing (CDD 2016); PD98059 restores mito activity + ATP during parthanatos without touching DNA damage (Huang 2014).
- Pro-death / coincident: mTOR-PARP crosstalk in photoreceptor parthanatos — mTOR/PARP KD each reduce nuclear 57-kDa AIF (Cell Commun Signal 2020); autophagy seen alongside parthanatos in cochlear marginal cells (Jiang 2018).
- 2026 AMPK-mito view (Trends Cell Biol Shaw 2026): AMPK drives fission/mitophagy/biogenesis — net effect depends on damage load.
- Direction: AMPK-KO/CA + mTORC1 manipulation + autophagy flux block (ATG7-KO, bafilomycin) under MNNG/H2O2/light; read AIF/MIF, PAR, ATP, large-scale vs oligonucleosomal DNA; avoid inferring flux from LC3-II alone.

## 14. What is the precise sequence of molecular events that promotes AIF release from mitochondria?

**Status: two-pool model emerging — rapid outer-membrane PAR-releasable pool (calpain-independent) vs inner-membrane truncated pool (calpain/mPTP/BAX-dependent). Direction: pool-specific assays.**

- Pool 1 (fast, parthanatic): 20–30% AIF loosely on cytosolic face of outer membrane (Yu 2009); PAR binds AIF 567–592 (R588/K589/K592); PAR-binding mutant cannot release, prevents death despite intact FAD/DNA/nuclease functions (Wang 2011; Dawson reviews 2024). NAD fall → depolarization + conformational change, then PAR C-terminus engagement → release before CytC/MPT (explains early AIF, late CytC).
- Pool 2 (slow, mixed): inner-membrane 62-kDa AIF → calpain/cathepsin N-truncation to 57 kDa (Met53/Ala54 presequence) → MOMP/mPTP/BAX/BID → release (Polster 2005; Otera 2005; Cao OGD 2007 — calpain-resistant AIF blocks release; Cabon BID→BAX; Sacca calpain→PARP feed-forward).
- Against calpain-central: Wang 2009 MNNG-MEFs — calpain inhibition/KO still releases AIF/dies.
- 2026 human PD clue: PAR colocalizes with VDAC1 + inside mitochondria in SNpc DA neurons, adjacent to mature Lewy bodies (Cell Death Dis 2026) — i.e. mito-PAR pool positioned to hit Pool 1 in disease.
- Direction: outer- vs inner-AIF fractionation + PAR-binding-dead (R588A/K589A/K592A) vs calpain-resistant knock-in + live PAR/AIF-FRET + mPTP/BAX/BID KOs, same insult.

## 15. How does translocation of AIF promote DNA fragmentation and what protein(s) catalyse(s) DNA cleavage?

**Status: MIF/PAAN nuclease is the lead executioner; AIF-intrinsic + CypA/H2AX as alternative/contextual. Direction: MIF-nuclease-dead vs AIF-nuclease assays head-to-head.**

- MIF/PAAN model (strongest genetics + drug): cytosolic AIF binds MIF (E22 region), co-translocates; MIF PD-D/E(X)K nuclease cuts ss/stem-loop DNA 3'-endo/exo → 20–50 kb large-scale fragments (Wang Science 2016). MIF-nuclease-dead or PAANIB-1 protects: PD α-syn-PFF/MPTP/AAV-α-syn (Park Cell 2022, IC50 ~0.28 uM MNNG, brain ~2 uM at 10 mg/kg, spares tautomerase/cytokine/APE1), MCAO, EAE/MS (Nat Neurosci 2026 — PAANIB-1 prevention + treatment paradigms, spares upstream PAR/AIF–MIF binding), HDAC6-regulated AIF/MIF acetylation gate (Yang Dawson 2024 review).
- AIF-intrinsic model: AIF + CypA + H2AX degradosome with AIF as nuclease (Artus EMBO J 2010; Novo PNAS Nexus 2022) — still cited but less drugged.
- Direction: MIF-E22Q vs MIF-tautomerase-dead vs AIF-DNA-binding-dead in same α-syn-PFF/MNNG system; read fragment size (pulse-field), MIF vs CypA co-IP, HDAC6 inhibition effect.

## 16. What defines AIF-dependent vs AIF-independent parthanatos and what fragments DNA in AIF-independent death?

**Status: cell-type + insult rule emerging; AIF-independent = PARP-dependent energy/mito-fission death without large-scale fragmentation. Direction: stop calling all PARP-death parthanatos without AIF test.**

- AIF-dependent: cortical/RGC/SH-SY5Y/MEF, HK-2-TGHQ-negative control shows the contrast — AIF-KD blocks death + fragmentation (Table 1 Moura; 661W light model — AIF-KD 64%→38% death).
- AIF-independent exemplars: ARPE-19/H2O2 (Jang CDD 2017 — no translocation, AIF-siRNA no rescue, no ladder, but NAD/ATP fall + fission/OPA1-L loss + depolarization; RGC-5/SH-SY5Y/MEF controls in same paper DO translocate); BMDM-H2O2 + HK-2-TGHQ + pancreatic ZZW-115 (Table 1 "No" AIF); MNNG-MEFs (cited in Jang discussion).
- What kills without AIF: energy collapse + mito fission/dysfunction; DNA fragmentation absent or small-scale; compensatory apoptosis↔necrosis balance (retina: low DFF45/40 + low caspase-8 → necrosis bias); LPS→SOD2 + glycolysis shift protects macrophages (Regdon 2019).
- Direction: always show AIF IF + subfraction + AIF-siRNA rescue + genomic gel in same line; if AIF-negative, test mito-fission (Drp1/OPA1), OCR/ECAR, and ferroptosis/oxytosis co-markers (retinal I/R expresses both — Sci Rep 2022).

## 17. What are the differences and similarities between apoptotic and parthanatic AIF translocation?

**Status: shared passenger, different vehicle + kinetics + nuclease + caspase-dependence. Direction: kinetic + interactor + fragment-size triad.**

- Similarities: AIF leaves mito → nucleus in both (Daugas 2000 apoptosis); outer-pool rapid release can precede CytC in parthanatos (Yu 2009) vs CytC-first in many apoptoses.
- Differences: parthanatic = PARP1-dependent, caspase-independent, PAR-binding (R588–592) required, MIF-nuclease large fragments; apoptotic = caspase-dependent, PARP1 cleaved/inactivated (Asp214/Gly215), 89-kDa fragment can paradoxically carry PAR to feed AIF-apoptosis (Mashimo 2021) — i.e. cooperation not just antagonism; MPT/CytC/caspase-3 typical.
- 2026 nuance: PAANIB-1 spares apoptosis/necroptosis/APE1 nuclease (Park 2022 suppl.) — parthanatic DNA cleavage pharmacologically separable.
- Direction: Q-VD vs olaparib vs PAANIB-1 matrix + AIF-PAR-binding mutant + 89-kDa tracking + fragment sizing + CytC vs AIF timing.

## 18. Is PARG executionary in parthanatos — i.e. does PARG activity execute death rather than merely modulate PAR turnover?

**Status: yes — executionary, dose-dependent hinge. Direction: treat PARG endo-activity as obligate execution step for free-PAR generation.**

- Executionary evidence (2026): de Moura/Hoch bioRxiv 2026.05.12.724507 — full PARG inhibition (10 uM PDD00017273) prevents MNNG death like olaparib in RPE1/HeLa/A549; 1–3 uM residual activity still kills; full block prevents ATP loss but NOT NAD+ loss — NAD/ATP uncoupled, ATP tracks death. ARH3 KO neutral in same system.
- Historic conflict resolved as dose effect (Moura Table 1): protective/PARG-required — Lu 2003 brain ischaemia, Blenn 2006 H2O2-MEFs (not MNNG), Fouquerel 2014 glioblastoma HK rescue by PARG-KD, Mashimo 2013 H2O2-MEFs, Cuzzocrea 2005 SAO shock; inhibitory/PARG-protective — Andrabi 2006 neuronal overexpression/KD + PARG+/- vs overexpressor MCAO, Yu 2006 NMDA-AIF, Zhou 2011 trophoblast UV, Koh 2004 embryos, Tang 2010 MMS, Santofimia 2022 pancreas; no effect — Blenn 2006 MNNG-MEFs, Munoz 2017 HK-2.
- Mechanism: partial PARG endo-activity generates free-PAR executioner (HK1-PBM inhibition + AIF 567–592 binding); full block starves free-PAR pool; very high exo-activity destroys free PAR (Mashimo 2013 dual-function; Barkauskaite 2015 exo-predominant). New PARG53 splice isoform (exon-1→8, catalytic) explains viable exon-3/7 KO hypomorphs retaining activity (Chen-group + Hoch-lab 2026); long-term KO confounds via auto-PARylated PARP1 accumulation (Gogola 2018).
- Source note (Moura et al. 2024, verbatim): > There is extensive but conflicting evidence as to the role of PARG in parthanatos, with several studies suggesting that PARG can either prevent or promote PARP1-dependent cell death. In favour of an inhibitory role, PARG overexpression reduced MNNG-induced cell death in mouse neuronal cultures (Andrabi et al., 2006) and reduced NMDA-induced AIF release from mitochondria (Yu et al., 2006) [...] In contrast, other studies suggest that PARG is necessary for, or at least contributes to, the process of parthanatos. PARG inhibition protected mice against brain ischaemia (Lu et al., 2003), and PARG silencing rendered cells more resistant to treatment with H2O2 but not MNNG (Blenn et al., 2006).
- Direction: PARG titration (0.3–10 uM PDD00017273/COH34/JA2131) + PARG53-aware PCR + MAR-vs-PAR blots + same-well NAD/ATP/PAR + HK activity + AIF localization; compare H2O2 vs MNNG vs NMDA.

## Cross-cutting latest pointer (2024–2026)

- **PARG is the hinge**: 2026 Hoch-lab preprint resolves part of Table-1 heterogeneity — PARG activity required for parthanatos execution (ATP-loss arm), new 53-kDa splice isoform (PARG53; revises PARG55/60 annotation) explains CRISPR-vs-inhibitor discrepancy. Any future NAD/glycolysis/apoptosis experiment must genotype/quantify PARG isoforms and use graded inhibition, not just KO.
- **ARH3 protective, not executive** in tested human RPE1/MNNG system (ARH3 KO no effect on death) — but ARH3-deficient patients/mice hyper-sensitive to I/R-H2O2 parthanatos (Danhauser/Ghosh 2018) — insult/cell-type matters; epigenetic (histone MAR) alternative explanation still open (Hanzlikova 2020).
- **Therapeutic corollary**: HK-PBM blockade, PARG-tuned inhibition, MIF-nuclease inhibition, and TRPM2/calpain/BID interception are NAD-independent targets — relevant where NAD supplementation fails (§1).

### PARG update — web research 08_Sep_2026

Hinge rule: partial PARG = pro-parthanatic (makes free PAR); full PARG block = protective (prevents ATP-loss arm, NAD still falls); ARH3 protective in I/R/H2O2 but dispensable in MNNG/RPE1.

- **PARG required + NAD/ATP uncoupled + PARG53 (de Moura et al., bioRxiv 2026.05.12.724507, doi:10.64898/2026.05.12.724507):** RPE1/HeLa/A549 MNNG — full PARG inhibition (10 uM PDD00017273) prevents death like olaparib; ARH3 KO no effect. 1–3 uM PARGi slows PAR turnover but still kills — only full block protects, explaining hypomorphic exon-3 KO clones that still die. Full PARGi prevents ATP loss but not NAD+ loss. New exon-1→8 splice variant PARG53 (53 kDa, catalytic) — annotated PARG55/60 mis-annotated/dead; KO/siRNA in exons 2–7 can leave PARG53 intact.
- **Toxic PAR overload in BER-deficient / non-dividing cells (ResearchSquare rs.3.rs-10223032/v1, Jul 2026, MOD568/MOD582):** XRCC1-KO MCF7 — progressive PAR accumulation → early OCR/mitoATP fall at 6 h without ECAR compensation → late AIF translocation. NRH restores NAD+ but worsens PAR + death — death tracks PAR, not NAD. Active in G1-arrested / senescence-like cells.
- **Condensate sequestration model (bioRxiv 2026.03.18.712393, Mar 2026):** parallel CRISPR PARGi vs PARPi — PARGi synthetic-lethal with XRCC1-LIG3-POLB, ALC1, ARH3, PARG itself, not HR deficiency. Prolonged PARGi traps PARP1/XRCC1 condensates post-repair, depleting free repair pool. PARP1 / NMNAT1 / UNG loss confers resistance.
- **PARGi without parthanatos — ATM-deficient prostate (J Transl Med 2026, s12967-026-08208-9):** PDD00017273 kills via TOP1-processed misincorporated ribonucleotides → S arrest, fork slowing, DSBs. No AIF translocation, no significant NAD depletion. PAR accumulation alone does not equal parthanatos.
- **Metabolic arm 2024:** cerebral I/R — PARPi reduces PARylation of HK-1 and LDH, restoring glycolysis (Chen et al., Eur J Pharmacol 2024, 176377); PARP1 de novo protein-free PAR synthesis (Langelier et al., Mol Cell 2024); PARG reverses Glu/Asp-MAR directly (Longarini & Matic, Nat Commun 2024, 15:4239) — Ser-PAR still needs ARH3.
- Practical: always report PARG isoform (PARG53-aware), inhibitor dose-titration (not just KO vs WT), and NAD + ATP + PAR in the same experiment.

### Key references (latest-first)
- PAR in human PD SNpc mito + VDAC1 colocalization — Cell Death Dis 2026, s41419-026-08880-1.
- MIF-nuclease blockade in EAE/MS neuroprotection — Nat Neurosci 2026, s41593-026-02201-7.
- PARG required, NAD/ATP uncoupled, PARG53 isoform — de Moura et al., bioRxiv 2026.05.12.724507, doi:10.64898/2026.05.12.724507.
- PARGi toxic PAR overload, BER-deficient / G1 / senescence-like — ResearchSquare rs.3.rs-10223032/v1 (MOD568/MOD582, Jul 2026).
- PARGi condensate sequestration, XRCC1-LIG3-POLB — bioRxiv 2026.03.18.712393.
- PARGi in ATM-deficient prostate, no parthanatos — J Transl Med 2026, s12967-026-08208-9.
- TRPM2–lysosome–Zn2+–mito ROS cycle — Biomolecules 2025, 15:1193; TRPM2 evolution/NUDT9-H — Sci Bull 2024; 2dADPR superagonist — Front Immunol 2024; microglial PKC/NOX–PYK2/MEK/ERK feedback — Redox Rep 2025.
- NUDT5/9 enzymology — Zha 2006/2008; Perraud/Shen 2003; NUDT5 purine/TP pharmacology — JCI 2026.
- AMPK rethink — Nat Commun 2023 (AMPK suppresses ULK1, preserves machinery); BioEssays 2024; AJP-Cell 2025; AMPK-mito — Trends Cell Biol 2026.
- MIF/PAAN nuclease + PAANIB-1 — Wang Science 2016; Park Cell 2022; Dawson Mov Disord 2024 review; PAAN/MIF chapter 2025 (PMID 39929577).
- AIF–PAR binding site / outer-membrane pool — Wang Sci Signal 2011; Yu ASN Neuro 2009; calpain-AIF OGD — J Neurosci 2007; mPTP consensus — Bernardi Cell Death Differ 2023; AIF-CypA-H2AX nuclease — Artus 2010; Novo 2022.
- AIF-independent RPE/macrophage — Jang CDD 2017; Regdon 2019; retinal I/R multi-death — Sci Rep 2022; photoreceptor mTOR-PARP-AIF — Cell Commun Signal 2020.
- OGD/HK-1 PBM mutant rescue — FASEB J 2024.03.18 (FJ.202302559R); Hossain et al. 2024 (GSH/NADPH).
- Moura et al. 2024 review (PMC11445734) — source of all 17 questions; Fig.1–2, Table 1.
- OGD/HK-1 PBM mutant rescue — FASEB J 2024.03.18 (FJ.202302559R); Hossain et al. 2024 (GSH/NADPH).
- Moura et al. 2024 review (PMC11445734) — source of the 5 questions; Fig.1–2, Table 1.
- CNS-injury parthanatos + 89-kDa PARP1 PAR-carrier — Zhang et al. J Adv Res 2025; Mashimo/Onishi 2025.
- BID–calpain–BAX–AIF — Galán-Malo et al. Cell Death Differ 2012; Moubarak et al.
- HK inhibition mechanism — Andrabi et al. PNAS 2014; Fouquerel et al. Cell Rep 2014.
- NAD-rescue-positive — Alano 2004/2010; Ying 2005; Zong 2004; Nishida 2022; Santofimia-Castaño 2022.
- MIF nuclease — Wang et al. 2016; Park et al. 2022.
- Compartmentalization — Cambronne 2016; Covarrubias 2021; SLC25A51 Girardi/Kory/Luongo 2020; mtPARP1 Szczesny 2014/Herrmann 2021/Lee 2022.

## Notes on wiki integration
- Candidate [[Parthanatos]], [[PARP1]], [[Hexokinase-1]], [[PARG]], [[ARH3]], [[AIF]], [[MIF]], [[TRPM2]], [[NAD+]], [[Glycolysis]], [[Calpain]], [[AMPK]], [[Autophagy]], [[Nudix Hydrolases]], [[Mitochondrial Permeability Transition Pore]] cross-links; suggest enriching entity notes with §1–17 determinants rather than creating new notes.
- New entities to consider for Step 3 (orphan resolution): [[PARG53]], [[SLC25A51]], [[Nudix Hydrolases]], [[89-kDa PARP1 Fragment]], [[PAANIB-1]], [[2'-Deoxy-ADPR]] — verify canonical filenames before creating.
