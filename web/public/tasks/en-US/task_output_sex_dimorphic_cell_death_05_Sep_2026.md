# Sex-Dimorphic Cell Death: Estimates, Timing, Aging Context, Therapeutics

Date: 05_Sep_2026 09:30 PM PDT
Sources: vault notes (Apoptosis, Parthanatos, NAD+, AIF, Bcl-2) + primary papers (full text where open)

## Direction (corrected premise)

- Females → [[Apoptosis]] (caspase-dependent, cytochrome-c → Caspase-9/3, nuclear Caspase-8).
- Males → [[Parthanatos]] / PARP-1/AIF necrosis (caspase-independent).
- No "% of death from pathway X" estimates exist. Evidence is relative / binary (which inhibitor rescues which sex) + one human ratio.

## Human post-MI apoptosis index (Biondi-Zoccai et al., Heart 2005;91:99-101, PMID 15604350)

- Design: autopsy n=15M/6F fatal AMI with permanent occlusion (<30h post-mortem); peri-infarct + remote; AI = TUNEL + cleaved caspase-3 co-positive / 100 fields; Bax IHC in 10M/4F.
- Numbers: peri-infarct AI median 25.9% (IQR 17.9-28.6) M vs 2.6% (0.5-14.1) F, p=0.003 (~10x ratio of medians). Remote ~2x trend M>F, p=0.066. Controls ~0.01%, no sex diff.
- Bax: 55% (44-61) M vs 14% (2.5-42) F, p=0.012 peri-infarct. AI and Bax correlate with bad remodeling (diameter/thickness r=+0.56 / +0.82).
- Multivariable: maleness independent predictor p=0.039.
- Caveats: n=6F (wide CI); fatal late AMI (15-25d) = survivor bias; TUNEL+caspase-3 blind to parthanatos/necrosis; observational, no causality. Authors state caution explicitly.

## Timing (Liu 2009 Stroke; Sharma 2011 ASN Neuro)

Liu (adult C57BL/6 MCAO 90min, Q-VD-OPh at reperfusion, 48h infarct):

- Female cytosolic cytochrome-c spike 6h (Q-VD-OPh-sensitive); male peak 12h (insensitive, likely secondary).
- Nuclear caspase-8 (57→43/18/10 kDa) both sexes, female-predominant sustained 6/12/24h.
- Cleaved caspase-3 up both sexes 6h, more robust female. Q-VD-OPh halves female infarct (intact/Ovx/E2/aged), zero male effect any dose.
- Nuclear AIF at 6h both sexes, Q-VD-OPh-insensitive — bystander in females.

Sharma (P7 CGN, sex-segregated, OGD 1.5h + 7h reox, WT vs Parp-1 KO):

- XY: AIF mito→perinuclear 30min → nuclear ~1h; cytochrome-c ≥1h.
- XX: cytochrome-c 30min, pronounced 1h; AIF retained to 1h (minor 2h).
- Caspase-3 activity 247% XX vs 134% XY; cleaved 17/19 kDa XX-only. Parp-1 KO shunts XY to caspases (KO-XY 188%).
- Caspase-8 ~3x + nuclear translocation XX-only.
- ATP: XX ~15% post-OGD → ~38% post-reox vs milder XY dip. LDH 62% XX vs 46% XY; PARP-1 KO protects XY 46→38%, not XX.

Model: XY fast PARP→AIF (~0.5-1h); XX early cytochrome-c (30min-6h) → sustained nuclear caspase-8 → delayed caspase-3.

## Marker-translocation times (what they are)

- Location = signal. Fractionation + WB (AIF 67 kDa mito→nuclear; cytochrome-c 15 kDa →cytosol; caspase-8 57→45/43/18 kDa nuclear; caspase-3 35→17/19 kDa) with prohibitin/VDAC/actin/H3 controls; confocal double-label (AIF+ATP-synthase, CytC+VDAC).
- Order assigns causality: XY AIF-first → caspases bystander (Q-VD-OPh lowers male caspase-3, no rescue); XX cytochrome-first → AIF bystander (females rescued despite ongoing AIF).
- Population-averaged (Liu pools 5 brains/lane) ±hours; Sharma single-cell sharper but in vitro.

## Male 10x apoptosis paradox (resolved)

- Brain: female > male caspase. Heart: male 10x female AI. No contradiction:
  1. Organ setpoint: female cardiomyocyte E2→Bcl-2/Bcl-w, low Bax → near-zero entry; male high Bax.
  2. Assay sees only completed caspase apoptosis, not parthanatos/necrosis.
  3. Fatal-case selection; survivors (female protection) unsampled.
  4. Guerra 1999: male failing hearts die more by both routes. Split = route taken; heart datum = how many enter any route.

## Jog & Caricchio 2013 (Cell Death Dis, e758) in aging context

- Male = PARP-1 necrosis (pro-inflammatory); female = caspase apoptosis (anti-inflammatory). E2 feminizes male death (PARP↓, apoptosis↑); broadly pro-survival in females. PARP active both sexes, execution male-only; female necrosis PARP/RIP-independent.
- Aging = convergence: menopause/andropause E2 loss + age-rising PARP + NAD+/SIRT decline → both sexes drift to male-like inflammatory PARP death → inflammaging/SASP. Young = divergent; old = convergent.
- Translation: PARP inhibitors/NAD+ precursors gain relevance with age in both sexes; E2/SERM window peri-menopausal; female necrosis route unidentified (MPTP/ferroptosis candidates).

## Why E2 in males (receptors exist)

- Males express ERα/ERβ/GPER (kidney, macrophage, brain, heart); low ligand via aromatase. Jog tests E2–ERα clamping of PARP-1 (Mabley 2005): pharmacologic E2 dose-dependently suppresses male PARP, induces renal caspase-3, upregulates male renal ERα mRNA. Females at ceiling.

## Current therapeutics implementing this: none directly

- JPI-289/Amelparib (Jeil): only stroke PARP inhibitor to clinic (Ph1 healthy males; Ph2a + tPA/thrombectomy NCT01983358/NCT03062397); unstratified, status stalled.
- Estrogen stroke trials failed (WEST, WHI: more fatal strokes on chronic E2). Field moved to timing hypothesis; 2026 meta-analysis still preclinical benefit only.
- Non-feminizing ER-silent analogues (Wise Stroke 2004): stronger neuroprotection, no uterine effect — never left preclinical, no company.
- Lupus nephritis pipeline = belimumab/voclosporin/obinutuzumab/ianalumab/CAR-T; no PARP or sex-stratified cell-death trial.
- Actionable now = trial design: stratify by sex × hormone status, sex-specific biomarkers (CSF PAR/nuclear AIF vs cleaved caspase-3/8).

## Key references

McCullough 2005 JCBFM; Du 2004 JBC; Li 2005 Ann Neurol; Hagberg 2004; Zhu 2006; Renolleau 2007; Yuan 2009 Exp Neurol; Liu 2009 Stroke (PMID 19265047); Sharma 2011 ASN Neuro (PMID 21382016); Yu 2002 Science; Guerra 1999 Circ Res; Biondi-Zoccai 2005 Heart; Jog 2013 Cell Death Dis; Tang 2022 Front Mol Neurosci; Lang & McCullough 2008 J Transl Med.
