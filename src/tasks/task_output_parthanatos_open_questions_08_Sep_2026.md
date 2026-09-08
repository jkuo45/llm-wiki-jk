# Parthanatos Open Questions — Web Research Update
Date: 08_Sep_2026 12:00 PM PDT
Source framing: Moura et al. 2024, "Molecular mechanisms of cell death by parthanatos: More questions than answers" (PMC11445734) — Section "NAD+ depletion and inhibition of glycolysis" lists these 5 questions verbatim. Update below integrates 2014–2026 literature.

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

## Cross-cutting latest pointer (2024–2026)

- **PARG is the hinge**: 2026 Hoch-lab preprint resolves part of Table-1 heterogeneity — PARG activity required for parthanatos execution (ATP-loss arm), new 53-kDa splice isoform (PARG53; revises PARG55/60 annotation) explains CRISPR-vs-inhibitor discrepancy. Any future NAD/glycolysis/apoptosis experiment must genotype/quantify PARG isoforms and use graded inhibition, not just KO.
- **ARH3 protective, not executive** in tested human RPE1/MNNG system (ARH3 KO no effect on death) — but ARH3-deficient patients/mice hyper-sensitive to I/R-H2O2 parthanatos (Danhauser/Ghosh 2018) — insult/cell-type matters; epigenetic (histone MAR) alternative explanation still open (Hanzlikova 2020).
- **Therapeutic corollary**: HK-PBM blockade, PARG-tuned inhibition, MIF-nuclease inhibition, and TRPM2/calpain/BID interception are NAD-independent targets — relevant where NAD supplementation fails (§1).

### Key references (latest-first)
- PARG required, NAD/ATP uncoupled, PARG53 isoform — bioRxiv 2026.05.12.724507.
- OGD/HK-1 PBM mutant rescue — FASEB J 2024.03.18 (FJ.202302559R); Hossain et al. 2024 (GSH/NADPH).
- Moura et al. 2024 review (PMC11445734) — source of the 5 questions; Fig.1–2, Table 1.
- CNS-injury parthanatos + 89-kDa PARP1 PAR-carrier — Zhang et al. J Adv Res 2025; Mashimo/Onishi 2025.
- BID–calpain–BAX–AIF — Galán-Malo et al. Cell Death Differ 2012; Moubarak et al.
- HK inhibition mechanism — Andrabi et al. PNAS 2014; Fouquerel et al. Cell Rep 2014.
- NAD-rescue-positive — Alano 2004/2010; Ying 2005; Zong 2004; Nishida 2022; Santofimia-Castaño 2022.
- MIF nuclease — Wang et al. 2016; Park et al. 2022.
- Compartmentalization — Cambronne 2016; Covarrubias 2021; SLC25A51 Girardi/Kory/Luongo 2020; mtPARP1 Szczesny 2014/Herrmann 2021/Lee 2022.

## Notes on wiki integration
- Candidate [[Parthanatos]], [[PARP1]], [[Hexokinase-1]], [[PARG]], [[ARH3]], [[AIF]], [[MIF]], [[TRPM2]], [[NAD+]], [[Glycolysis]] cross-links; suggest enriching entity notes with §1–5 determinants rather than creating new notes.
- New entities to consider for Step 3 (orphan resolution): [[PARG53]], [[SLC25A51]], [[Nudix Hydrolases]], [[89-kDa PARP1 Fragment]] — verify canonical filenames before creating.
