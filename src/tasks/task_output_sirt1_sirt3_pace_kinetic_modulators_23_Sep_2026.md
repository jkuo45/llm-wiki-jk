---
title: "SIRT1/SIRT3 Pace & Kinetic Modulators — Rate-Setting Therapeutics (Not Classical On/Off)"
description: Web research on therapeutics that target SIRT1 or SIRT3 through reaction speed, cofactor flux, and catalytic efficiency rather than binary inhibition/activation — including the Guan 2024 steady-state SIRT3 activators (compounds 5329973 / 5689785) and the CCM-SRX pipeline.
created: 2026-09-23
updated: 2026-09-23
tags: [task-output, sirt1, sirt3, enzyme-kinetics, nad-metabolism, pace-of-aging, cd38, nampt, drug-discovery]
---

# SIRT1/SIRT3 Pace & Kinetic Modulators

Generated: 23_Sep_2026 03:10 PM PDT.
Context: two-round web research (23_Sep_2026) on SIRT1/SIRT3 therapeutics framed around **speed/pace** — compounds that change how fast the enzymes run (K~m~, k~cat~/K~m~, cofactor turnover) rather than switching them on/off. Sources are external (web); wiki cross-references are marked.

## Framing

Three non-binary routes set SIRT1/SIRT3 reaction rates:

1. **Kinetic modulators** — change K~m~ or catalytic efficiency (k~cat~/K~m~) of the enzyme itself.
2. **Cofactor flux control** — change the supply/decay rate of [[NAD+]] (the co-substrate), which sets velocity without binding the sirtuin.
3. **Pace-of-aging endpoints** — interventions measured by rate-of-decline biomarkers such as [[DunedinPACE]] rather than by target occupancy.

## Route 1 — Kinetic modulators

### SIRT1 STACs are K~m~-modulators, not on/off switches
- Resveratrol / SRT1720 / SRT2104 documented mechanism: **lower K~m~ for the acetyl-peptide substrate**, no change in V~max~ or K~m~ for NAD+ (Pacholec 2010, JBC, PMC2832982; catalysis review PMC3327882).
- Effect is substrate-dependent — requires fluorophore or hydrophobic +1/+6 residues; native PGC-1α/FOXO3a respond only in some assays.
- [[Glu230]] allosteric site required for the activating effect (wiki: `sirtuins/Glu230.md`; structure Nat Commun 2015, ncomms8645).
- Verdict: "SIRT1 activator" ≈ "SIRT1 kinetic modulator whose effect depends on which substrate you time." Wiki anchors: [[STACs]], [[Sirtuin Activators]].

### SIRT3 steady-state catalytic-efficiency modulators — the cleanest speed story
- **Guan et al., *Phys Rev X* 14, 041019 (22 Oct 2024)** — "SIRT3-Activating Compounds that Fully Recover Catalytic Activity under NAD+ Depletion" (DOI 10.1103/PhysRevX.14.041019).
  - ~1.2M-compound virtual screen → two hits: **5329973** and **5689785**.
  - Mechanism: *mechanism-based activation* — modulator changes local active-site conformational degrees of freedom; **~2× catalytic efficiency with respect to NAD+** (k~cat~/K~m,NAD+); first reported *steady-state* SIRT3 activators.
  - Fully recovers SIRT3 activity at **50% NAD+** (aged-state concentration); works across multiple aging-study cell lines.
  - [[Honokiol]] re-classified: non-steady-state (transient activator, *inhibitory* at steady state). 5689785 beats honokiol and NMN on 3/4 MnSOD lysines; NMN wins at K68 specifically.
- Related scaffolds (independent of NAD+/substrate, raise substrate turnover): 1,4-dihydropyridines MC2789/MC2971/3c (PMC10388363); 1,4-DHP Chem Biol 2019 review (PMC9653166).
- Orthogonal allosteric approach: **SKLB-11A** (PDB 9KTK), sub-µM, unique Leu298 site, cardioprotection-focused.

## Route 2 — Cofactor flux pace-setters (no sirtuin binding)

| Node | Mechanism | Status |
| --- | --- | --- |
| [[CD38]] | NADase rising with age; drives age-related NAD decline **through SIRT3** (Camacho-Pereira, *Cell Metab* 2016) | Preclinical: `CD38 inhibitor 78c`, apigenin (wiki: `sirtuins/CD38 inhibitor 78c.md`) |
| [[NAMPT]] | Rate-limiting salvage enzyme; AMP/ATP energy-stress switch found 2025 (Mol Cell, PMID 40505662) | Tool compounds P7C3 / FK866; no clinical SIRT-tied agent |
| [[NMN]] / [[Nicotinamide Riboside]] / MIB-626 | Raise [NAD+] → raise velocity without enzyme binding | HK-660S Phase 2a (PSC; engages SIRT1+SIRT3, ALP −15.2%, PMC12016592); MIB-626 Phase 1/2 AD ([NCT05040321](https://clinicaltrials.gov/study/NCT05040321), completion 2026) |
| NAD+ turnover rate | Tracer study of whether older adults consume NAD+ faster | [NCT06882096](https://clinicaltrials.gov/study/NCT06882096) (Brigham, 2025–27) |
| Precursor kinetics | Head-to-head supply-side data | Cuenoud 2026 *Nat Metab*: NMN ≈ NR double whole-blood NAD+ at 14 days (via gut microbiota → NA); NAM only transient |

Classical STAC clinical outcome (mostly dead): GSK/Sirtris SRT2104/2379/3025 — ~8 trials, mostly neutral, development halted (Frontiers 2021, fphys.2021.752117). Selisistat/EX-527 (SIRT1 inhibitor, Huntington's) failed vs placebo — inhibition route, included only as contrast (wiki: [[EX-527]]).

## Route 3 — Pace-of-aging endpoints

- [[DunedinPACE]] (Belsky 2022, eLife 73420) is the standard pace metric; caloric restriction slowed pace of aging (Belsky 2018).
- **No published SIRT1/SIRT3-targeted trial uses DunedinPACE as a primary endpoint yet** — NAD+ trials measure NAD levels, not pace.

## Deep dive — compounds 5329973 / 5689785

### Identity (PubChem-confirmed)

| | **5329973** | **5689785** |
| --- | --- | --- |
| Formula / MW | C₁₄H₁₁Cl₃N₄O₂S / 405.7 | C₂₂H₃₀N₃O₃S / 416.6 |
| Scaffold | pyrazolo[3,4-d]pyrimidin-4-one; 2,4,6-trichlorophenyl; 3-methylthio; 6-(1-hydroxyethyl) | benzenesulfonamide–benzamide; diethylaminoethyl tail; dimethylphenyl |
| XLogP / TPSA | 3.5 / 103 Å² | 3.6 / 75.9 Å² |
| InChIKey | `KXGQXXLNTIYYLU-UHFFFAOYSA-N` | `LJKKGHCHTDPEOF-UHFFFAOYSA-N` |
| Stereo | 1 undefined stereocenter | none |

GeneCards lists **"SIRT3 activator 5329973"** as a curated target interaction (class: synthetic organic; mechanism: activation).

### Provenance
- Paper: Guan, Dumpati, Munshi, Chall, Bose, Rahnamoun, Reverdy, Errasti, Delacroix, Ghosh, **Chakrabarti** (2024). Affiliations: Chakrabarti Advanced Technology (NJ/India), PMC Isochem (France), McGill.
- Companion PDB entries: [8V5U](https://www.rcsb.org/structure/8V5U) (1.48 Å, SIRT3+p53-AMC+honokiol), 8V15, 8V2N — honokiol/carbaNAD complexes; **no co-crystal of 5329973/5689785 with SIRT3**, consistent with "no fixed allosteric site" being the claimed point.
- Precursor screen paper: Reverdy et al., *Bioorg Med Chem* 73:116999 (2022), PMID 36191547 — DEL + virtual screening, "best activator more potent than honokiol," atypical binding site.

### Development status (checked 23_Sep_2026)
- **Company**: CCM Biosciences (Chakrabarti Capital Management); founder/CEO is the paper's senior author — science is the company platform (EurekAlert release 8 Jan 2025).
- **Lead asset CCM-SRX**: SIRT3 agonist; indications Alzheimer's, Parkinson's, infertility (IVM/IVF/niPGT). **Highest phase: preclinical** (PatSnap Synapse, updated Aug 2026). Company site claims 200% activation at 1 µM; mouse studies ongoing; "outperformed NAD+ supplements and other sirtuin activators."
- **Trial claim vs. reality**: Jan 2025 press release said programs "entering clinical trials for efficacy in 2025." **No ClinicalTrials.gov registration exists** for CCM-SRX or these compounds (re-checked Sep 2026; nmn.com flagged the same gap Mar 2025).
- **No published in vivo efficacy paper** for 5329973/5689785 — mouse data exists only in press releases. No public PK, EC₅₀, or oral-bioavailability data found.

### Bottom line
Two tool compounds from a published kinetic-mechanism paper, now housed preclinically inside the author's company as CCM-SRX. The "clinical trials in 2025" claim remains unverified ~18 months on. They are the current best examples of therapeutics that target SIRT3 **by changing catalytic speed under cofactor decline** rather than by classical activation.

## Vault cross-references

- [[SIRT1]], [[SIRT3]] — the two target enzymes.
- [[STACs]], [[Sirtuin Activators]], [[Glu230]] — SIRT1 K~m~-modulation machinery.
- [[Honokiol]] — re-classified as non-steady-state by Guan 2024; wiki note could gain this kinetics caveat.
- [[CD38]], `sirtuins/CD38 inhibitor 78c.md`, [[NAMPT]] — cofactor-flux pace-setters.
- [[NMN]], [[Nicotinamide Riboside]], [[NAD+]] — supply-side kinetics.
- [[DunedinPACE]] — pace-of-aging endpoint (unused by SIRT trials so far).
- [[EX-527]] — inhibition-route contrast (failed in Huntington's).
- Suggested new entities if promoted from this task: `Compound 5329973`, `Compound 5689785`, `CCM-SRX` (or one combined `SIRT3 Steady-State Activators` note).

## Related tasks

- `task_output_sirt1_ktype_allosteric_activation_14_August_2026.md` — SIRT1 K-type (K~m~-lowering) mechanism; this task's Route 1 is the rate/pace generalization of that finding plus the SIRT3 counterpart.
- `task_output_turnover_rate_tradeoffs_22_Sep_2026.md` — cellular turnover-rate framing (adjacent use of "pace").
