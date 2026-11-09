---
title: Eat-me and don't-eat-me phagocytic signals — comparative inventory
description: Compiled inventory of pro-phagocytic (eat-me) and anti-phagocytic (don't-eat-me) cell-surface signals with receptors, execution machinery, physiological contexts, and evidence-tier annotations, synthesized from vault notes plus published reviews.
created: 2026-11-08
updated: 2026-11-08
type: task-output
tags:
  - cell-death
  - efferocytosis
  - phagocytosis
  - immunology
  - cancer-immunotherapy
  - eryptosis
---

# Eat-me and don't-eat-me phagocytic signals — comparative inventory

Scope: a signal-by-signal inventory of the pro-phagocytic (eat-me) and anti-phagocytic (don't-eat-me) display molecules that govern efferocytosis and tumor-cell phagocytosis. Compiled from vault notes ([[Efferocytosis]], [[Eryptosis]], [[Phosphatidylserine]], [[CD47]], [[Calreticulin]]) plus published reviews: Birge et al. 2016 (*Cell Death Differ*; PMID 26915293), Khalaji et al. 2023 (*Heliyon*; PMID 37822610), Xiao et al. 2024 (*Cancer Communications* 44(7):791–832; DOI 10.1002/cac2.12579; PMID 38923737), Park & Kim 2017 (*Exp Mol Med*; PMID 28496201), Kelley & Ravichandran 2021 (*EMBO Rep*; PMID 34041845). Evidence tiers: Tier 1 = human RCT / approved intervention; Tier 2 = human trial / association; Tier 3 = rodent / in-vivo animal; Tier 4 = in-vitro / ex-vivo; Tier 5 = hypothesis. Signal biochemistry is Tier 4 (cellular assays) unless stated; clinical implications noted separately. Inhibitory receptors raise the activation threshold for engulfment; the "ratio" is shorthand for integrated pro- and anti-phagocytic signalling, not a measured arithmetic difference.

## Eat-me signals

Signals exposed on dying, stressed, or infected cells that tag the cell for engulfment. Most converge on loss of plasma-membrane lipid asymmetry.

| Signal | Exposed on / context | Recognized by | Notes (evidence tier) |
| --- | --- | --- | --- |
| [[Phosphatidylserine]] (PS) | Universal: outer leaflet of apoptotic, eryptotic, activated-platelet, and tumor-cell membranes; [[Apoptotic Bodies]] | Direct PS receptors (TIM-4, BAI1, stabilin-2) and bridging molecules (Gas6/Protein S → [[MerTK]]-type TAM receptors; MFGE8 → integrins) | Best-characterized mammalian eat-me signal (Birge 2016; Tier 4). Execution requires [[Scramblase]] activation + [[Flippase]] inactivation: Ca²⁺ activates TMEM16F/ANO6 in [[Eryptosis]]; caspases cleave ATP11C and activate XKR8 in [[Apoptosis]]. PS-positive uptake skews macrophages toward HO-1-producing, anti-inflammatory states (Tier 4–3) |
| [[Calreticulin]] (surface-exposed) | Cell surface after anthracycline chemotherapy, photodynamic therapy, some radiotherapy; dominant eat-me signal in immunogenic cell death | LRP1/CD91 on phagocytes; removal of the opposing [[CD47]] brake licenses uptake | Surface CRT is recognized by LRP1/CD91 (Gardai et al. 2005, *Cell* 123:321–334). CRT is also a reported C1q-binding co-receptor, and secreted or cleaved CRT can act as an opsonin (Cockram et al. 2019; PNAS 2025). Two-death-signal logic: CRT drives uptake while tumor antigens from the same death trigger the adaptive response (Tier 4) |
| [[Cardiolipin]] (externalized) | Outer surface of stressed mitochondria and of dying cells; cardiolipin peroxidation is cytochrome-c-linked | CD36 on macrophages for extracellular cardiolipin; LC3 for intracellular mitophagic clearance | Externalized cardiolipin is a CD36-dependent eat-me signal (Balasubramanian et al. 2015, *Sci Signal* 8:ra95; PMID 26396268). Translocation to the outer mitochondrial membrane recruits LC3 for mitophagy (Chu et al. 2013, *Nat Cell Biol* 15:1197–1205; PMID 24036476) (Tier 4) |
| Oxidized phospholipids / oxidized-LDL epitopes | Oxidatively stressed cells; atheromatous debris | Scavenger receptors (CD36, SR-A, LOX-1) | Primary basis of unstable-plaque foam-cell uptake; overlaps with PS via oxPS determinants (Tier 4) |
| Desialylated glycans (senescent erythrocytes) | Aged [[Erythrocyte]]s — desialylation is the classical senescent eat-me cue; neuraminidase treatment experimentally drives PS exposure | Naturally occurring IgG autoantibodies (frequently against [[Anion Exchanger 1\|AE1/band 3]]) → Fc-receptor bridging | Distinct from the PS route: not eryptosis. Desialylation bridges the two clearance programs, since desialylation and PS exposure co-occur (Tier 4) |
| Ubiquitin chains on damaged organelles | Parkin-tagged mitochondria ([[PINK1]]/Parkin pathway); also mitophagic receptors | Autophagy receptors [[p62]], NBR1, NDP52, OPTN | The "eat-me" logic of mitophagy mirrors efferocytosis at the organelle scale (Tier 4; PINK1/Parkin failure → familial Parkinson's disease) |
| Extracellular-matrix-anchored [[CXCL14]] | Early senescence secretome, before NF-κB/IL-6 SASP matures | Macrophage, DC, NK, T-cell recruiters (unidentified receptor) | An "eat-me/come-find-me" chemoattractant rather than a surface tag; retained on endothelial glycosaminoglycans (Tier 4) |
| SLAMF7 (CS1 / CD319) | Hematopoietic tumour cells (myeloma, some lymphoma), plasma cells, NK cells; also macrophages | Homotypic SLAMF7–SLAMF7 binding with Mac-1 (CD11b/CD18) on macrophages → FcRγ/DAP12, Syk/Btk | Pro-phagocytic eat-me signal, not a brake: SLAMF7 is required for macrophage phagocytosis of hematopoietic tumor cells during CD47–SIRPα blockade (Chen et al. 2017, *Nature* 544:493–497; PMID 28424516) (Tier 4). Requirement disputed (He et al. 2019, *Nat Commun* 10:533); the SLAM-family brakes are SLAMF3/SLAMF4 (Xiao 2024). Elotuzumab is approved in myeloma combinations (Tier 1) via NK-cell ADCC and macrophage ADCP, not by neutralizing an inhibitory pair |
| Complement C1q (as bridging opsonin) | Apoptotic cells; classical pathway sensor | C1q bridging to surface calreticulin / CD91 (LRP1) on phagocytes | Echoes the CRT connection: CRT (cC1qR) is a reported C1q-binding co-receptor with CD91/LRP1 (Ogden et al. 2001; Verneret et al. 2014); the assignment is debated because CRT has no transmembrane domain (Park & Kim 2017). Listed for completeness (Tier 4) |

Complementary class — find-me signals (recruitment, not engulfment): LPC → G2A/GPR4, nucleotides ATP/UTP → P2Y2 (PANX1-dependent release), S1P → S1PR1–5, CX3CL1/fractalkine → CX3CR1, RP S19 → CD88, TyrRS → CXCR3, EMAPII → CXCR1/CX3CR1 (Xiao 2024, Table 2; Tier 4). PS is listed among find-me cues in some reviews, but it is primarily the eat-me tag; see [[Monocytes]].

## Don't-eat-me signals

Anti-phagocytic ceilings. Most act through inhibitory ITIM-bearing receptors on the phagocyte; cancer and fibrosis overexpress them.

| Signal | Expressed on | Recognized by | Notes (evidence tier) |
| --- | --- | --- | --- |
| [[CD47]] | Nearly all nucleated cells + erythrocytes — the canonical brake | [[SIRPalpha\|SIRPα]] on macrophages/DCs → ITIM, SHP-1/2, myosin-II accumulation blocks engulfment | Ubiquitously expressed; levels rise with age in some tissues (arteries, lung, photoaged skin; Rogers et al. 2020, *Cells* 9:1695; PMID 32679764). Loss on aged erythrocytes removes the brake and accelerates clearance (Tier 4; Tier 3 in RBC models; Khandelwal et al. 2007, PMID 17725740). Anti-CD47 agents (monoclonal antibodies, SIRPα decoys, bispecifics) remain investigational with no approval: Gilead terminated magrolimab in 2024 after ENHANCE-3 showed futility and increased deaths (FDA full hold in AML/MDS); remaining solid-tumor trials were removed from the pipeline; other agents had further setbacks in 2024–25 (Tier 2) |
| CD24 | Human tumors (murine Cd24a differs functionally), developing hematopoietic cells | [[Siglec-10]] on macrophages → inhibitory SHP-1 | Reported as an additional don't-eat-me signal alongside CD47: CD24–Siglec-10 blockade augments phagocytosis of CD24-expressing human tumors (Barkal et al. 2019, *Nature*; PMID 31367043) (Tier 4) |
| PD-L1 (CD274) | Tumor cells, inflamed tissues | PD-1 on macrophages, at the phagocytic synapse | PD-L1 engaging PD-1 on macrophages suppresses phagocytosis; blocking the pair licenses tumor-cell uptake (Gordon et al. 2017, *Nature* 545:495–499; PMID 28514441) (Tier 4). PD-1/PD-L1 blockade is approved in oncology (Tier 1) for T-cell checkpoint blockade, not specifically for the macrophage arm |
| Sialic acid / α2,8-polysialic acid | Healthy viable cells (immune, neural lineages) | Siglecs (inhibitory I-type lectins, incl. Siglec-10, Siglec-7; α2,8-polysialic acid is recognized by Siglec-11) | Removal by sialidase converts the cell to an eat-me state; age-related desialylation of erythrocytes links to the eat-me table (Tier 4) |
| β2-microglobulin (+ MHC-I display) | Nucleated cells; tumor cells frequently up-regulate the axis | LILRB1 (ILT2) on macrophages; LILRB2 / PirB in mouse CNS | Surface MHC-I/β2M sets an anti-phagocytic threshold via LILRB1; disruption of either MHC-I or LILRB1 potentiated tumor-cell phagocytosis in vitro and in mouse models (Barkal et al. 2018, *Nat Immunol* 19:76–84; PMID 29180808) (Tier 3). PILRβ is an activating CD99 receptor and KIRs are NK-cell receptors, not this brake |
| CD31 (PECAM-1) | Endothelium, platelets, leukocytes | CD31–CD31 homophilic engagement on live leukocytes; lost competence on apoptotic cells | "Live-cell don't-eat-me" badge: homophilic CD31 engagement blocks uptake only while the target cell can signal through it (reported in vitro; Tier 4) |

## The balance rule and its failure modes

Efferocytosis is not triggered by one signal but by the integrated display of eat-me and don't-eat-me ligands; [[Calreticulin]] vs [[CD47]] is the archetype (Tier 4). Inhibitory receptors raise the activation threshold needed for engulfment (Kelley & Ravichandran 2021); the ratio is a qualitative shorthand, not a measured quantity. Pathway logic:

1. Healthy cell → asymmetry maintained (PS inside via [[Flippase]]; [[CD47]], sialic acid, MHC-I outside) → no phagocytosis.
2. Death or stress → flippase off + [[Scramblase]] on (Ca²⁺-driven in [[Eryptosis]]; caspase-driven in [[Apoptosis]]) → PS flips outward; in aged cells CD47 is often lost with age → threshold crossed → engulfment, non-inflammatory when PS-mediated.
3. Disease states exploit the wrong limb:
   - Cancer overexpresses brakes (CD47, CD24, PD-L1) — "don't eat me" blockade is a cancer-immunotherapy strategy (Khalaji 2023).
   - Fibrosis and atherosclerosis impair efferocytosis downstream (impaired eat-me recognition), producing necrotic-core and persistent inflammation (atherosclerosis efferocytosis data, Tier 4–3).
   - [[Eryptosis]] in excess (CKD, sepsis, hemoglobinopathies) saturates clearance and delivers PS-positive procoagulant cells — see [[Eryptosis]] and the eryptosis excess/under-clearance task output.
4. Immunogenic-cell-death therapy exploits the eat-me side: surface [[Calreticulin]] displays after anthracyclines, photodynamic therapy, some radiotherapy. The eat-me signal also biases the adaptive response, since DC uptake of PS-positive corpses is tolerogenic unless paired with CRT + danger signals.

## Open problems

- Which cells in a given tissue read which pairing (CD47 vs CD24 vs C1q–CRT) is context-dependent and not fully mapped in vivo (Tier 5 across tissues).
- Blocking a don't-eat-me brake in fibrosis or atherosclerosis is mechanistically plausible but not human-validated; existing anti-CD47 clinical data are oncology-only (Tier 5).
- Quantifying a tissue's CD47:sialic acid:PS ratio at single-cell resolution is an unresolved technical gap (not re-derived from cited sources).

## Related vault entries

[[Phosphatidylserine]] · [[CD47]] · [[Calreticulin]] · [[Efferocytosis]] · [[Eryptosis]] · [[Flippase]] · [[Scramblase]] · [[Apoptotic Bodies]] · [[Kupffer Cell]] · [[Cardiolipin]] · [[CXCL14]] · [[SIRPalpha]] · [[Annexin V]] · [[PINK1]] · [[p62]]

## Suggested follow-up work

- Enrich [[CD47]], [[Calreticulin]], [[Efferocytosis]] with the trial-stage detail and the CD24–Siglec-10 axis.
- Candidate new entity notes: Siglec-10, MerTK (as "Axl/Mer/Tyro3 TAM-family" single note if preferred), β2-microglobulin (anti-phagocytic function), CD31 live-cell anti-phagocytic function, PD-L1 macrophage arm, SLAMF7 (eat-me, Mac-1). Place by the §7 rule: CD24/Siglec-10 → `_link/` unless a topic home qualifies; MerTK → immune/efferocytosis home.
