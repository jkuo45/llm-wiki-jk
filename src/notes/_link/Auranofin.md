---
title: Auranofin
description: Auranofin (Ridaura) is an oral gold(I) coordination compound — the triethylphosphine gold complex of tetraacetylthioglucose — FDA-approved for rheumatoid arthritis (1985) and repurposed as a first-in-class covalent inhibitor of the selenoprotein thioredoxin reductases (TXNRD1/TXNRD2), under clinical investigation as an anticancer, antiparasitic, and antibacterial agent.
created: 2026-09-01
updated: 2026-09-01
tags:
  - chemical-compound
  - repurposed-drug
  - txnrd-inhibitor
aliases: [Ridaura, SK&F-39162, Triethylphosphine gold, Gold(I) triethylphosphine tetraacetylthioglucose]
url: #
source: #
---

# Auranofin

**Auranofin** (marketed as **Ridaura®**) is an orally administered gold(I) coordination compound — the triethylphosphine gold complex of 2,3,4,6-tetra-O-acetyl-1-thio-β-D-glucopyranose (tetraacetylthioglucose). It was approved by the US FDA in 1985 for adult [[Rheumatoid Arthritis]] and has since become one of drug repurposing's flagship molecules: a **first-in-class covalent inhibitor of [[Thioredoxin reductase]]** (the selenoprotein TXNRD1/TXNRD2), now in clinical trials as an anticancer, antiparasitic, and antibacterial agent.

> [!important]
> Auranofin is the pharmacological probe for the [[Thioredoxin]] system covered throughout this vault. By irreversibly binding the catalytic selenocysteine of [[Thioredoxin reductase]], it prevents regeneration of [[Thioredoxin-1]] and [[Thioredoxin-2]], converting the cell's redox-balancing machinery into a source of lethal ROS — the basis of its anticancer, antiparasitic, and antimicrobial activity and of its relevance to [[Oxidative Stress]] biology.

## Chemical Properties & Classification

- **Class**: S-glycosyl gold coordination entity (ChEBI:2922); a gold(I) complex with a linear, two-coordinate Au(I) (d¹⁰) center.
- **IUPAC name**: (2,3,4,6-tetra-O-acetyl-1-thio-β-D-glucopyranosato-S)(triethylphosphine)gold.
- **Formula / mass**: C₂₀H₃₄AuO₉PS, MW ≈ 678.5; **~29% gold by mass**; CAS 34031-32-8.
- **Reactivity**: the soft, thiophilic Au(I) cation has high affinity for thiol (−SH) and selenol (−SeH) groups, forming **stable, irreversible Au–S / Au–Se adducts** — the chemical basis of its enzyme inhibition.
- **Prodrug logic**: the tetraacetylthioglucose (TGTA) ligand confers water solubility, stability, and oral absorption, while in biological media it is displaced to release the bioactive **[AuPEt₃]⁺ cation**. Serum albumin (Cys34 thiol) competes for the gold, a major bioavailability limitation.
- **Solid state**: a reportedly more water-soluble "polymorph B" could not be reproduced in modern crystallographic studies (2025) — a documented **"disappearing polymorph"** with solubility/bioavailability implications for the marketed form.

## Mechanism of Action

### Primary target — thioredoxin reductase (TXNRD)

- Auranofin is a potent, **irreversible inhibitor of both cytosolic (TXNRD1) and mitochondrial (TXNRD2)** [[Thioredoxin reductase]].
- The [AuPEt₃]⁺ cation coordinates the **C-terminal selenocysteine (Sec)** — the residue essential for catalytic activity — with up to four gold units bound per enzyme, disrupting the redox-active center.
- **Downstream consequences** for the thioredoxin system:
  - Oxidized [[Thioredoxin-1]] / [[Thioredoxin-2]] can no longer be recycled, so [[Peroxiredoxin|peroxiredoxin]] regeneration stalls and [[Hydrogen Peroxide]] / [[Reactive Oxygen Species|ROS]] accumulate.
  - Reduced Trx1 is no longer available to inhibit **[[ASK1]]**, de-repressing ASK1–JNK/[[p38 MAPK]] death signaling → [[Apoptosis]].
  - Mitochondrial TXNRD2 loss compromises redox defense and bioenergetics, promoting [[Ferroptosis]] in sensitive cells.
  - Gold also complexes **hydroselenide (HSe⁻)**, trapping the reactive selenium pool and broadly impairing selenoprotein biosynthesis.

### Secondary targets

- **Proteasome-associated deubiquitinases UCHL5 and USP14**: inhibition roughly comparable to [[Bortezomib]], impairing ubiquitin-proteasome protein turnover (second cytotoxic mechanism).
- **[[NF-κB]] signaling**: blocks IKK/NF-κB activation, contributing to both anti-inflammatory (RA) and pro-apoptotic (cancer) effects.
- Additional: STAT3 inhibition, induction of heme oxygenase-1 ([[HO-1]]), and modulation of T-cell activation and phagocytic function.

### Cell-death outcomes in cancer

- Tumors up-regulate the thioredoxin system for redox fitness; TXNRD inhibition pushes them beyond a ROS threshold, triggering **combined apoptosis and ferroptosis** with selectivity over non-transformed cells.
- **Sensitivity biomarkers**: low **CA12** expression and high mutant-[[p53]] predict responsiveness in non-small-cell lung and pancreatic organoid models, while strong NF-κB survival signaling confers resistance.

## Pharmacodynamics & Pharmacokinetics

- **Absorption**: only ~25% of administered gold is absorbed; intact auranofin is never detected in blood (rapid metabolism) — **gold itself** is the measured analyte.
- **Distribution**: ~40% of blood gold in red cells, ~60% bound to serum proteins; serum albumin (Cys34) sequesters gold via thiol exchange, limiting tumor delivery.
- **Half-life**: mean terminal plasma t½ ≈ 26 days (range 21–31); body t½ ≈ 80 days; **steady state reached after ~3 months** of daily dosing.
- **Elimination**: ~60% of absorbed gold in urine, remainder in feces — high fecal gold (up to ~13 µM after oral dosing) supports intestinal antiparasitic applications.
- **Clinically achievable levels**: at 6 mg/day, steady-state gold ≈ 0.46–0.68 µg/mL (~0.46–1.5 µM equivalents) — near the in-vitro cytotoxic threshold (~1 µM), motivating combination strategies.
- **Combination pharmacology**: supplementing the displaced TGTA ligand (or the dietary thiol **pantethine**) rescues auranofin from serum-albumin inactivation and restores anticancer efficacy (2025, *Nat Commun*); synergy reported with AKT inhibitors (MK2206) and PARP inhibitors ([[Olaparib]]).

## Applications

### Rheumatoid arthritis (approved indication)

- FDA-approved (1985) for active, progressive adult [[Rheumatoid Arthritis]] as a second-line "gold" DMARD after NSAID failure; **6 mg/day oral** (3 mg bid), may increase to 9 mg/day after 6 months.
- Mechanism in RA incompletely understood — gold salts suppress phagocytosis and inflammatory mediator release and induce HO-1.
- **Adverse effects** (well characterized from >4,000-patient trials): diarrhea (~42%, the dose-limiting toxicity), rash (~26%), stomatitis, proteinuria/nephrotoxicity, and cytopenias (anemia, leukopenia, thrombocytopenia) requiring laboratory monitoring.

### Cancer repurposing (investigational)

- **Clinical trials**: recurrent ovarian/peritoneal cancer (NCT01747798, NCT03456700), chronic lymphocytic leukemia (NCT01419691), non-small-cell lung cancer (NCT01737502); most programs remain Phase I–II.
- **Preclinical**: potent anti-lymphoma activity via TXNRD-dependent ROS and energy-metabolism collapse; lung/pancreatic patient-derived organoid efficacy with low-CA12 biomarker selection; synergistic combinations with [[Bortezomib]], olaparib, and chemotherapeutics.

### Anti-infective (investigational)

- **Intestinal protozoa**: amebiasis (*Entamoeba histolytica*) and giardiasis (*Giardia lamblia*) — oral dosing reaches fecal gold ≥25× the *E. histolytica* IC₅₀; Phase II studies completed.
- **Bacterial**: tuberculosis (Phase II) and broad gram-positive activity (including MRSA in preclinical models).
- **Viral**: HIV-1 investigational use.

## Limitations & Safety

- **Narrow therapeutic/clinical window**: monotherapy cancer efficacy often demands concentrations at or above those achievable in patients, so biomarker-guided selection and combinations are essential.
- **Long half-life / accumulation**: extended-persistence risks (≥15–35 day plasma t½) complicate dose optimization; adverse events are mostly mild/self-limiting in RA use but include GI, hematologic, and renal effects.
- **Off-target thiol reactivity**: gold's intrinsic promiscuity (albumin, other selenoproteins, GSH-related enzymes) underlies both its broad application and its selectivity challenges.

## Documents

No vault document yet specifically covers auranofin; it is discussed within the thioredoxin-system and redox-biology context of [[Thioredoxin-1]], [[Thioredoxin]], [[Thioredoxin reductase]], and [[Rheumatoid Arthritis]].

## Connections

- [[Thioredoxin reductase]] — primary molecular target; the [AuPEt₃]⁺ cation irreversibly adducts the TXNRD1/2 catalytic selenocysteine.
- [[Thioredoxin-1]] — regeneration of the cytosolic isoform is blocked, de-repressing ASK1 and stalling peroxiredoxin-based H₂O₂ clearance.
- [[Thioredoxin-2]] — TXNRD2 inhibition compromises mitochondrial redox defense and bioenergetics.
- [[ASK1]] — Trx1 oxidation relieves ASK1 inhibition, driving JNK/p38 death signaling exploited in cancer.
- [[Peroxiredoxin]] — cannot be regenerated once TXNRD is blocked, allowing peroxide accumulation.
- [[Reactive Oxygen Species]] / [[ROS]] — the cytotoxic product of TXNRD inhibition.
- [[Ferroptosis]] — cell-death modality engaged in auranofin-sensitive cancers.
- [[Apoptosis]] — death pathway engaged via ASK1 and mitochondrial stress.
- [[NF-κB]] — inhibited (IKK), contributing to anti-inflammatory and pro-apoptotic effects.
- [[Proteasome]] — indirect impairment via UCHL5/USP14 deubiquitinase inhibition.
- [[Oxidative Stress]] — the redox-balance pillar auranofin weaponizes against cancer cells.
- [[Bortezomib]] — comparator/partner; proteasome-pathway inhibition is mechanistically related.
- [[Rheumatoid Arthritis]] — the original approved indication.
- [[Cancer]] — the principal repurposing field.
- [[Glutathione]] — parallel thiol antioxidant system whose capacity modifies auranofin sensitivity.

## Linking Summary

- New links added: [[Thioredoxin]], [[Thioredoxin-1]], [[Thioredoxin-2]], [[Thioredoxin reductase]], [[ASK1]], [[Peroxiredoxin]], [[Reactive Oxygen Species]], [[ROS]], [[Ferroptosis]], [[Apoptosis]], [[NF-κB]], [[Proteasome]], [[Oxidative Stress]], [[Bortezomib]], [[Rheumatoid Arthritis]], [[Cancer]], [[Glutathione]], [[Hydrogen Peroxide]], [[HO-1]]
- Suggested new entity notes to create: [[Ebselen]] (selenoprotein-modulating compound), [[Olaparib]] (PARP-inhibitor synergy partner)
- Strong connections to strengthen: [[Auranofin]] ↔ [[Thioredoxin reductase]], [[Auranofin]] ↔ [[Thioredoxin-1]], [[Auranofin]] ↔ [[Rheumatoid Arthritis]]