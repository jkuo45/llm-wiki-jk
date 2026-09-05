---
title: Sirtuin-Caspase Crosstalk
description: The bidirectional regulatory loop between sirtuins (NAD+-dependent deacetylases) and caspases (apoptotic executioner proteases) — sirtuins generally suppress caspase-dependent apoptosis, while caspases feed back to cleave and inactivate sirtuins, locking in cell death.
protected: false
created: 2026-08-28
updated: 2026-08-31
tags:
  - apoptosis
  - sirtuin
  - caspase
  - cell-death
url: #
source: #
aliases:
  - Sirtuin-Caspase Interaction
  - Sirtuin-caspase axis
  - Sirtuin/Caspase axis
---

# Sirtuin-Caspase Crosstalk

**Sirtuin-Caspase Crosstalk** describes the reciprocal regulatory relationship between the seven mammalian [[Sirtuins]] (NAD⁺-dependent deacetylases) and the [[Caspases]] (aspartate-specific apoptotic proteases). The relationship is fundamentally **bidirectional**: sirtuins act as cell-survival factors that throttle caspase activation, while caspases, once engaged, feed back to cleave and dismantle sirtuins — converting a survival program into an irreversible death ratchet.

## Direction 1 — Sirtuins suppress caspases (mostly anti-apoptotic)

- **[[SIRT1]]** is the best-characterized brake. It deacetylates **[[FOXO4]]**, suppressing the pro-apoptotic proteases **[[Caspase-3]]** and **[[Caspase-7]]** in transformed epithelial cells; deacetylates **[[p53]]**, downregulating **[[Bax]]** and caspase-3; and suppresses **[[Caspase-1]]** (pyroptosis) via the NRF2/PGC-1α axis. SIRT1 also deacetylates **14-3-3ζ**, a direct **[[Caspase-2]]** regulator, sensitizing cells to caspase-2-dependent death when SIRT1 is inhibited. Additionally, SIRT1 suppresses ER stress-mediated apoptosis by reducing expression of CHOP and **[[Caspase-12]]** in intestinal epithelial cells (in vivo and in vitro IBD models; Wu et al. 2022).
- **[[SIRT2]]** is context-dependent and can *promote* apoptosis: overexpression raises cleaved caspase-3 and Bax while lowering Bcl-2; the inhibitor **AGK2** blocks this via JNK/FOXO3a → Bim.
- **[[SIRT3]]** is dual: anti-apoptotic under stress (delays Cytochrome c release and the "subsequent activation of caspases" by deacetylating CypD, IDH2, Bcl-2) yet pro-apoptotic in malignancy (enhances caspase-9 cleavage; deacetylates Mcl-1 and GSK-3β toward Bax activation).
- **[[SIRT4]]** prevents apoptosis upstream by shifting the pro-caspase-9/caspase-9 and procaspase-3/caspase-3 ratios and blocking Bax translocation; in the mammalian signaling survey, **[[Caspases]] are listed as negative regulators of SIRT4**.
- **[[SIRT5]]** deacetylates **[[Cytochrome c]]**, ameliorating Cyt-C leakage and caspase-3 activation.
- **[[SIRT6]]** is a tumour suppressor that induces massive apoptosis in cancer cells (but not normal cells) via **[[p53]]/p73-dependent, [[ATM]]-mediated** pathways requiring its mono-ADP-ribosyltransferase activity (Van Meter et al., *Cell Cycle* 2011). It also suppresses NF-κB target gene promoters through **H3K9 deacetylation**, indirectly dampening caspase-dependent inflammatory death, and protects cardiomyocytes from p53/Fas-dependent apoptosis.
- **[[SIRT7]]** promotes cell survival by attenuating the DNA damage response and **[[p53]]** signaling (limited data, but completes the family picture).

### Direction 1b — Sirtuins suppress inflammatory caspases (NLRP3 / Caspase-1 / pyroptosis)

Sirtuins also throttle the **inflammasome–caspase-1 axis**, blocking IL-1β/IL-18 maturation and pyroptotic death:

- **SIRT1** deacetylates **spliced XBP1s** (downstream of AMPKα) in macrophages, which then inhibits **[[NLRP3]]** inflammasome assembly, preventing Caspase-1 activation. Quercetin-mediated SIRT1 activation also attenuates NLRP3 inflammasome activation and apoptosis in liver injury models (EX-527 reverses this).
- **SIRT3** suppresses NLRP3 inflammasome activation by reducing mitochondrial ROS — SIRT3-deficient macrophages show amplified NLRP3 oligomerization and more severe inflammatory cell infiltration.
- **SIRT2** modulates NLRP3 inflammasome activation via **α-tubulin** deacetylation, linking it to vascular inflammation and insulin resistance–associated endothelial dysfunction (context-dependent, both protective and deleterious reported).

> [!info] Location decides the verdict for SIRT1
> **Nuclear SIRT1 = anti-apoptotic** (deacetylates p53, FOXO4). **Cytoplasmic SIRT1 = pro-apoptotic** — and this pro-death form is *caspase-dependent but deacetylase-independent*. So the subcellular fate of SIRT1 flips its function (Jin et al. 2007; 2025 *Biochem. Biophys. Res. Commun.*).

## Direction 2 — Caspases cleave and inactivate sirtuins (feedback)

- **SIRT1 is a direct caspase substrate.** **[[Caspase-9]]** (initiator) and **[[Caspase-3]]** (executioner) cleave SIRT1, relocalizing it from nucleus → cytoplasm during apoptosis (Ohsawa & Miura, FEBS Lett 2006). Under severe DNA damage the cleavage site is the C-terminal **DEPDVP(704–709)** motif; cleavage is mediated by *multiple* caspases and is conserved with PARP, ATM, and DNA-PKcs cleavage (PMID 35541916, *Int. J. Biol. Sci.* 2022).
- **TRIM28 couples cleavage to degradation.** Cleaved SIRT1 binds the E3 ligase **TRIM28** more strongly, accelerating poly-ubiquitination and proteasomal degradation — an ATM→TRIM28→SIRT1 axis in the DNA-damage response. The two PTMs are reciprocal: suppressing the proteasome reduces caspase cleavage, and cleavage enhances TRIM28-mediated turnover (PMID 35541916).
- **SIRT4 is gated by caspases.** Caspases are upstream negative regulators of SIRT4 (mammalian signaling-pathway survey), the reciprocal of SIRT4's own anti-apoptotic restraint on procaspase-3/9.
- **Executioner caspases inactivate Gasdermin D.** **[[Caspase-3]]** and **[[Caspase-7]]** cleave **[[Gasdermin D|GSDMD]]**, disabling its pore-forming N-terminal fragment and suppressing pyroptosis. This extends the caspase feedback network beyond sirtuin cleavage — executioner caspases simultaneously dismantle apoptotic substrates while blocking the pyroptotic effector (c-FLIP note; Eskander et al. 2025).

## Physiological & pathological relevance

The crosstalk is a **cell-fate switch**: sirtuins (fueled by [[NAD+]]) preserve the cell by holding caspases in check through FOXO/Bcl-2/Cytochrome c axes; once apoptosis triggers, caspase cleavage of SIRT1 both removes the brake and converts SIRT1 into a death promoter, ensuring commitment. This axis is central to cancer (SIRT1 inhibition selectively kills tumor vs. normal epithelial cells), chemotherapy response (cleaved caspase-3 as biomarker), neurodegeneration, and ischemia-reperfusion injury.

### SIRT3–Caspase-1–Parkin: a self-amplifying mitophagy-vs-pyroptosis toggle

A bidirectional circuit couples the sirtuin/caspase axis to mitochondrial quality control: **SIRT3** suppresses NLRP3 inflammasome activation by lowering mitochondrial ROS, protecting mitophagy. Conversely, **Caspase-1** cleaves **[[Parkin]]**, blocking mitophagy and amplifying mtROS — which in turn reactivates NLRP3/Caspase-1. This creates a feed-forward death loop where caspase-1-driven pyroptosis wins out once the SIRT3 brake fails, with implications for myocardial ischemia-reperfusion injury and sterile inflammation (Eskander et al., *Cell Death Discovery* 2025). PINK1-mediated mitophagy also suppresses Caspase-3/**[[Gasdermin E|GSDME]]**-dependent pyroptosis, adding a parallel caspase-3 arm to this switch.

> [!warning] Caveat — sirtuin inhibition is not always caspase-mediated
> In platelets, sirtuin inhibitors (sirtinol, EX-527, AGK2) trigger apoptosis-like death via p53–Bax but **without caspase-3** (calpain-mediated; PMC4424360). "Inhibit sirtuin → caspase activation" is therefore cell-type and context dependent.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al., Cell Death Discovery 2025)]]
  - Review of all six cell-death modes and their pairwise crosstalk; sirtuin-relevant content: SIRT1/SIRT3 as upstream PINK1/Parkin mitophagy activators, SIRT3 suppressing NLRP3 inflammasome activation, caspase-1 cleaving Parkin to block mitophagy, AMPK/SIRT1 inhibiting pyroptosis, and SIRT1–SIRT3 axis failure activating ferroptosis in myocardial ischemia-reperfusion injury.

- [[_document_ - sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i|Sirtuins in mammals (Michan & Sinclair)]]
  - SIRT1 via FOXO4 suppresses proapoptotic Caspase-3 and Caspase-7 in transformed cells; caspase-9 and Bcl-xL regulate SIRT1 cleavage, shifting it nucleus→cytoplasm during apoptosis.
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in health and disease (Wu et al., 2022)]]
  - SIRT1 deacetylates p53 → downregulates Bax/caspase-3; SIRT1 suppresses ER stress apoptosis via CHOP/Caspase-12 reduction in IBD; SIRT1/SIRT2/SIRT3 suppress NLRP3 inflammasome (SIRT1 via XBP1s deacetylation); SIRT4 prevents apoptosis via pro-caspase-9/caspase-9 and procaspase-3/caspase-3 ratios; caspases listed as SIRT4 negative regulators.
- [[_document_ - SIRT1 Protein roles at the nexus of health, disease, and therapeutics|SIRT1: Protein Roles at the Nexus (Chaqour, 2026)]]
  - SIRT1 deacetylates FOXO3a/FOXO4; cardiac overexpression downregulates caspase-3/Bax.
- [[_document_ - Caspase-mediated changes in Sir2alpha during apoptosis|Caspase-mediated changes in Sir2α during apoptosis (Ohsawa & Miura, FEBS Lett 2006)]]
  - Primary evidence: caspase-9/-3 directly cleave Sir2α → nuclear→cytoplasmic relocation; blocked by caspase-9 DN or Bcl-xL.
- [[_document_ - Post-translational Modification in Control of SIRT1 Stability during DNA Damage Response|SIRT1 stability in the DNA damage response (Ouyang et al., IJBS 2022)]]
  - DEPDVP(704–709) cleavage + [[KAP1|TRIM28]] polyubiquitination; ATM–TRIM28–SIRT1 axis in the DDR.
- [[_document_ - A Biotin Switch-Based Proteomics Approach Identifies 14-3-3zeta as a Target of Sirt1 in the Metabolic Regulation of Caspase-2|SIRT1–14-3-3ζ metabolic regulation of caspase-2 (Andersen et al., Mol Cell 2011)]]
  - SIRT1 deacetylates 14-3-3ζ (K49) to suppress caspase-2; PPP flux gates apoptotic sensitivity.
- External (not ingested): *Front. Cell Dev. Biol.* 2022 (PMC9354933) — SIRT3 deacetylates CypD/IDH2/Mcl-1/GSK-3β to tune apoptosis.

## Connections

- [[SIRT1]] — cleaved by Caspase-3/-9 at DEPDVP(704-709); nuclear anti- vs cytoplasmic pro-apoptotic
- [[SIRT2]] — promotes apoptosis via cleaved caspase-3/Bax; inhibited by AGK2
- [[SIRT3]] — dual role; deacetylates CypD/IDH2 (anti) and Mcl-1/GSK-3β (pro)
- [[SIRT4]] — gated by caspases as negative regulators; restrains procaspase-3/9
- [[SIRT5]] — deacetylates Cytochrome c, blocking caspase-3 activation
- [[SIRT6]] — tumour suppressor; induces p53/p73/ATM-dependent apoptosis in cancer cells; deacetylates H3K9 to suppress NF-κB target genes
- [[SIRT7]] — promotes survival by attenuating p53 and the DNA damage response
- [[Caspase-1]] — pyroptosis; suppressed by SIRT1 via NRF2/PGC-1α and NLRP3/XBP1s; cleaves Parkin to block mitophagy
- [[Caspase-2]] — gated by SIRT1 via 14-3-3ζ deacetylation
- [[Caspase-3]] — executioner; cleaves SIRT1 (feedback) and suppressed by SIRT1/FOXO4; inactivates GSDMD
- [[Caspase-7]] — executioner; suppressed by SIRT1/FOXO4; inactivates GSDMD
- [[Caspase-9]] — initiator; cleaves SIRT1 and suppressed by SIRT1 (intrinsic pathway)
- [[Caspase-12]] — ER stress effector; suppressed by SIRT1 via CHOP downregulation
- [[NLRP3]] — inflammasome sensor whose Caspase-1 activation is suppressed by SIRT1 (XBP1s), SIRT2 (α-tubulin), and SIRT3 (ROS)
- [[Parkin]] — cleaved by Caspase-1 to block mitophagy, amplifying the pyroptotic loop SIRT3 opposes
- [[p53]] — deacetylated by SIRT1, lowering Bax/caspase-3
- [[FOXO4]] — deacetylated by SIRT1, suppressing caspase-3/7
- [[Bcl-xL]] — blocks caspase-9, preventing SIRT1 cleavage
- [[Cytochrome c]] — SIRT3/SIRT5 substrate upstream of caspase activation
- [[Cyclophilin D|CypD]] — SIRT3-deacetylated MPT-pore regulator gating Cytochrome c release
- [[IDH2]] — SIRT3-activated NADPH/antioxidant source that delays caspase activation
- [[14-3-3]] — 14-3-3ζ deacetylated by SIRT1 to suppress Caspase-2
- [[AGK2]] — SIRT2 inhibitor; liberates caspase-3 in nucleated cells but kills platelets caspase-independently
- [[KAP1|TRIM28]] — E3 ligase coupling SIRT1 caspase-cleavage to degradation
- [[Apoptosis]] — the death program coordinated by this crosstalk
- [[NAD+]] — sirtuin co-substrate; ties sirtuin activity to metabolic state

## Linking Summary

- New links added: [[SIRT1]], [[SIRT2]], [[SIRT3]], [[SIRT4]], [[SIRT5]], [[SIRT6]], [[SIRT7]], [[Caspase-1]], [[Caspase-2]], [[Caspase-3]], [[Caspase-7]], [[Caspase-9]], [[Caspase-12]], [[NLRP3]], [[Parkin]], [[Gasdermin D]], [[Gasdermin E]], [[p53]], [[FOXO4]], [[Bcl-xL]], [[Cytochrome c]], [[KAP1|TRIM28]], [[Apoptosis]], [[NAD+]], [[Pyroptosis]], [[Cyclophilin D|CypD]], [[IDH2]], [[14-3-3]], [[AGK2]], [[CaMKII]], [[ATM]]
- Related existing notes enriched with crosstalk roles: [[Cyclophilin D|CypD]], [[IDH2]], [[AGK2]], [[14-3-3]], [[KAP1|TRIM28]], [[Caspase-2]], [[SIRT1]], [[Caspase-3]], [[Caspase-1]], [[NLRP3]], [[spliced X-box binding protein 1|XBP1s]]
- Strong connections to strengthen: [[Sirtuin-Caspase Crosstalk]] ↔ [[SIRT1]], [[Sirtuin-Caspase Crosstalk]] ↔ [[Caspase-3]], [[Sirtuin-Caspase Crosstalk]] ↔ [[Apoptosis]], [[Sirtuin-Caspase Crosstalk]] ↔ [[NLRP3]], [[Sirtuin-Caspase Crosstalk]] ↔ [[Parkin]]
