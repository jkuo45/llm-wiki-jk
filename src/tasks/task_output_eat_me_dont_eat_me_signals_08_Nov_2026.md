---
title: Eat-me and don't-eat-me phagocytic signals — comparative inventory
description: Compiled inventory of pro-phagocytic (eat-me) and anti-phagocytic (don't-eat-me) cell-surface signals with receptors, execution machinery, physiological contexts, and evidence-tier annotations, synthesized from vault notes plus published reviews (Birge 2016; Khalaji 2023; Xiao 2024).
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

Scope: a signal-by-signal inventory of the pro-phagocytic (eat-me) and anti-phagocytic (don't-eat-me) display molecules that govern efferocytosis and tumor-cell phagocytosis. Compiled from vault notes ([[Efferocytosis]], [[Eryptosis]], [[Phosphatidylserine]], [[CD47]], [[Calreticulin]]) plus published reviews: Birge et al. 2016 (Cell Death Differ; PMID 26941762), Khalaji et al. 2023 (PMID 37050342), Xiao et al. 2024 (Chin J Cancer Res; DOI 10.1002/cac2.12579), Park & Kim 2017 (PMID 28676998). Evidence tiers: Tier 1 = human RCT/intervention; Tier 2 = human cohort/association; Tier 3 = rodent/in-vivo animal; Tier 4 = in-vitro/ex-vivo; Tier 5 = hypothesis. Signal biochemistry is Tier 4 (cellular assays) unless stated; clinical implications noted separately. No clinical intervention signal has reached Tier 1 except upstream PD-1/PD-L1 and, arguably, CD47 blockade in trials (Phases 1–3), noted under each signal.

## Eat-me signals

Signals exposed on the dying, stressed, or infected cell that tag it for engulfment. Most recognize a common endpoint: loss of plasma-membrane lipid asymmetry.

| Signal | Exposed on / context | Recognized by | Notes (evidence tier) |
| --- | --- | --- | --- |
| [[Phosphatidylserine]] (PS) | Universal: outer leaflet of apoptotic, eryptotic, activated-platelet, and tumor-cell membranes; [[Apoptotic Bodies]] | Direct PS receptors (TIM-family/TIM-4, BAI1, stabilin-1/2, TIME4) and bridging molecules (Annexin A1 proper, Gas6/Protein S→[[MerTK]]-type TAM receptors, MFGE8/annexin V-shaped bridging → integrins) | The best-characterized mammalian eat-me signal (Birge 2016; Tier 4). Execution requires [[Scramblase]] activation + [[Flippase]] inactivation: Ca²⁺ activates TMEM16F/ANO6 in [[Eryptosis]]; caspases cleave ATP11C and activate XKR8 in [[Apoptosis]]. PS is itself immunosuppressive — uptake of PS-positive material skews macrophages toward HO-1-producing, anti-inflammatory states (Tier 4–3) |
| [[Calreticulin]] (surface-exposed) | Cell surface after anthracycline chemotherapy, photodynamic therapy, some radiotherapy; dominant eat-me signal in immunogenic cell death | LRP1/CD91 and CRT-binding integrins on phagocytes; removal of the opposing [[CD47]] brake licenses uptake | Oxidized surface CRT is a potent phagocyte attractant; two-death-signal logic: CRT drives uptake while tumor antigens from the same death trigger the adaptive response (Tier 4) |
| [[Cardiolipin]] (externalized) | Outer surface of stressed mitochondria and of dying cells; cytochrome-c-dependent pathway | MQGBP1-coupled PGE2-dependent pathway and related phagocyte recognition | Also an endogenous mitochondrial-derived eat-me signal in mitochondrial clearance during [[Apoptosis]] (Tier 4) |
| Oxidized phospholipids / oxidized-LDL epitopes | Oxidatively stressed cells; atheromatous debris | Scavenger receptors (CD36, SR-A, LOX-1) | Primary basis of unstable-plaque foam-cell uptake; overlaps with PS via oxPS determinants (Tier 4) |
| Desialylated glycans (senescent erythrocytes) | Aged [[Erythrocyte]]s — desialylation is the classical senescent eat-me cue; neuraminidase treatment experimentally drives PS exposure | Naturally occurring IgG autoantibodies (frequently against [[Anion Exchanger 1|AE1/band 3]]) → Fc-receptor bridging | Distinct from the PS route: nota eryptosis. Desialylation bridges the two clearance programs, since sialidase exposure and PS exposure co-occur (Tier 4) |
| Ubiquitin chains on damaged organelles | Parkin-tagged mitochondria ([[PINK1]]/Parkin pathway); also mitophagic receptors | Autophagy receptors [[p62]], NBR1, NDP52, OPTN | The "eat-me" logic of mitophagy mirrors efferocytosis at the organelle scale (Tier 4; PINK1/Parkin failure → familial Parkinson's disease) |
| Extracellular-matrix-anchored [[CXCL14]] | Early senescence secretome, before NF-κB/IL-6 SASP matures | Macrophage, DC, NK, T-cell recruiters (unidentified receptor) | An "eat-me/come-find-me" chemoattractant rather than a surface tag; retained on endothelial glycosaminoglycans (Tier 4) |
| Complement C1q (as bridging opsonin) | Apoptotic cells; classical pathway sensor | C1q-bridging uptake via calreticulin+integrins on phagocytes | Also reprints the CRT connection: CRT is the C1q receptor on phagocyte surface, i.e., {{cite detail not re-derived here}}; listed here for completeness (Tier 4) |

Complementary class — find-me signals (recruitment, not engulfment): lysophosphatidylcholine→G2A, nucleotides ATP/UTP→P2RY2, S1P→GPR-type routes; PS-bound chemokines on apoptotic corpses form "find-me" gradients, so PS is also a recruiter, not only a tag (Tier 4; see [[Monocytes]]).

## Don't-eat-me signals

Anti-phagocytic ceilings. Most act through inhibitory ITIM-bearing or homophilic receptors on the phagocyte; cancer and fibrosis overexpress them ("the tumor's cloaking devices" — Khalaji 2023).

| Signal | Expressed on | Recognized by | Notes (evidence tier) |
| --- | --- | --- | --- |
| [[CD47]] | Nearly all nucleated cells + erythrocytes — the canonical brake | [[SIRPalpha|SIRPα]] on macrophages/DCs → ITIM, SHP-1/2, myosin-II accumulation blocks engulfment | Ubiquitously expressed "don't eat me" signal; levels rise with age in some tissues. Loss on aged erythrocytes removes the brake and accelerates clearance (Tier 4; Tier 3 in RBC models). Anti-CD47 (magrolimab et al.) in cancer trials blocks CD47–SIRPα and is the most advanced eat/don't-eat intervention; strategies include monoclonal antibodies, SIRPα decoy, and bispecifics (Phases 1–3; no approval as of writing) |
| CD24 | Human tumors (not mouse — murine Cd24a differs functionally), developing hematopoietic cells | [[Siglec-10]] on macrophages → inhibitory SHP-1 | "Overpowered don't-eat-me" alongside CD47: CD24–Siglec-10 blockade augments phagocytosis of CD24-expressing human tumors tested (Barkal et al. 2019; PubMed Q, Tier 4) |
| PD-L1 (CD274) | Tumor cells, inflamed tissues | PD-1 on macrophages, at the phagocytic synapse | PD-1/PD-L1 signaling on macrophages also licenses tumor-cell phagocytosis when blocked — the same pair that gates T-cell checkpoints (Gordon et al. 2017, JEM; Tier 4; PD-1/PD-L1 blockade itself reached Tier 1 in oncology) |
| Sialic acid / α2,8-polysialic acid | Healthy viable cells (immune, neural lineages) | Siglecs (inhibitory I-type lectins, incl. Siglec-10, Siglec-7) | Removal by sialidase converts the cell to an eat-me state; age-related desialylation of erythrocytes links to the eat-me table above (Tier 4) |
| β2-microglobulin (+MHC-I display) | Nucleated cells, esp. neurons and other long-lived cells | PILRβ, KIR-family, LILR family on microglia/macrophages | Surface MHC-I density sets an anti-phagocytic threshold; aged neurons with reduced β2M/MHC-I display become phagocytosed by microglia in rodent and organotypic slice models (Tier 3) |
| CD31 (PECAM-1) | Endothelium, platelets, leukocytes | CD31–CD31 homophilic engagement on live leukocytes; lost competence on apoptotic cells | "Live-cell don't-eat-me" badge: homophilic CD31 engagement blocks uptake only while the target cell can signal through it (reported in vitro; Tier 4) |
| SLAMF7 (CS1) | Plasma cells, myeloma cells, NK cells | SLAMF7–SLAMF7 homotypic binding on macrophages | Anti-SLAMF7 antibody elotuzumab captures/neutralizes the anti-phagocytic pair to license NK-cell and macrophage killing in myeloma (elotuzumab reached Tier 1 in myeloma combinations) |

## The balance rule and its failure modes

Efferocytosis is not triggered by one signal but by the ratio of eat-me to don't-eat-me display; [[Calreticulin]] vs [[CD47]] is the archetype (the "comparison of the relative display" logic, Tier 4). Pathway logic:

1. Healthy cell → asymmetry maintained (PS inside via [[Flippase]]; [[CD47]], sialic acid, MHC-I outside) → no phagocytosis.
2. Death or stress → flippase off + [[Scramblase]] on (Ca²⁺-driven in [[Eryptosis]]; caspase-driven in [[Apoptosis]]) → PS flips outward; in aged cells CD47 is often lost with age → ratio flips → engulfment, non-inflammatory when PS-mediated.
3. Disease states exploit the wrong limb:
   - Cancer overexpresses brakes (CD47, CD24, PD-L1) — "don't eat me" blockade is a cancer-immunotherapy strategy (Khalaji 2023).
   - Fibrosis and atherosclerosis impair efferocytosis downstream (impaired eat-me recognition), producing necrotic-core and persistent inflammation (atherosclerosis efferocytosis data, Tier 4–3).
   - [[Eryptosis]] in excess (CKD, sepsis, hemoglobinopathies) saturates clearance and delivers PS-positive procoagulant cells — see [[Eryptosis]] and the eryptosis excess/under-clearance task output.
4. Immunogenic-cell-death therapy exploits the eat-me side: surface [[Calreticulin]] displays after anthracyclines, photodynamic therapy, some radiotherapy. The eat-me signal also biases the adaptive response, since DC uptake of PS-positive corpses is tolerogenic unless paired with CRT + danger signals.

## Open problems

- Which cells in a given tissue read which pairing (CD47 vs CD24 vs C1q–CRT) is context-dependent and not fully mapped in vivo (Tier 5 across tissues).
- Blocking a don't-eat-me brake in fibrosis or atherosclerosis is mechanistically plausible but not human-validated; existing anti-CD47 clinical data are oncology-only (Tier 2–3 in trials).
- Quantifying a tissue's CD47:sialic acid:PS ratio at single-cell resolution is an unresolved technical gap (not re-derived from cited sources).

## Related vault entries

[[Phosphatidylserine]] · [[CD47]] · [[Calreticulin]] · [[Efferocytosis]] · [[Eryptosis]] · [[Flippase]] · [[Scramblase]] · [[Apoptotic Bodies]] · [[Kupffer Cell]] · [[Cardiolipin]] · [[CXCL14]] · [[SIRPalpha]] · [[Annexin V]] · [[PINK1]] · [[p62]]

## Suggested follow-up work

- Enrich [[CD47]], [[Calreticulin]], [[Efferocytosis]] with the trial-stage detail and the CD24–Siglec-10 axis.
- Candidate new entity notes: Siglec-10, MerTK (as "Axl/Mer/Tyro3 TAM-family" single note if preferred), β2-microglobulin (anti-phagocytic function), CD31 live-cell anti-phagocytic function, PD-L1 macrophage arm. Place by the §7 rule: CD24/Siglec-10 → `_link/` unless a topic home qualifies; MerTK → immune/efferocytosis home.
