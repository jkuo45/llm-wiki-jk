---
title: Amelparib
description: JPI-289, a water-soluble small-molecule PARP-1 inhibitor that targets parthanatos in ischemia-reperfusion; the only parthanatos-directed program to reach clinical testing (Ph2a in acute ischemic stroke, up to now run without sex stratification despite male-biased efficacy in preclinical stroke).
protected: false
created: 2026-09-13
updated: 2026-09-13
tags: [chemical, drug, parp-inhibitor, cell-death, stroke, neuroprotection]
url: #
source: #
aliases: [JPI-289, JPI 289]
---

# Amelparib

**Amelparib** (developmental code **JPI-289**) is a small-molecule inhibitor of [[PARP1]] poly(ADP-ribose) polymerase-1, developed by Jeil Pharmaceutical Co. (South Korea) as a neuroprotective agent for acute ischemic stroke. Pharmacologically it is a parthanatos-targeting agent: by blocking the hyperactivated [[PARP1]] → [[PAR]] → [[Apoptosis-Inducing Factor|AIF]]/[[MIF]] death cascade it intervenes at the defined molecular cause of [[Parthanatos]], rather than at the downstream apoptosis machinery. It is the only [[Parthanatos]]-directed program to have reached human testing, and — critically — the clinical program was designed without sex stratification despite strong preclinical evidence that the PARP/AIF neuroprotection it encodes is male-biased.

## Chemical Properties & Classification

- Class: small-molecule, **water-soluble** [[PARP1|PARP-1]] inhibitor — aqueous solubility was an explicit design goal (in contrast to earlier lipophilic tool PARP inhibitors) to support parenteral dosing in the acute-stroke time window.
- Potency (JPI-289 parent): IC50 ≈ 18.5 nmol/L against PARP-1 catalytic activity; ≈ 10.7 nmol/L against cellular [[PAR]] formation (peak PAR assay) in rat cortical neurons (referenced in PMID 28370165).
- Selectivity/safety margin in vitro: no effect on rat cortical neuron viability up to 1 mmol/L (trypan blue and LDH release). Selectivity against other PARP family members and off-target profile not disclosed in reviewed public sources.
- Candidate structure/chemotype: not publicly disclosed in the reviewed literature; characterization in the public record is functional (enzyme/cellular potency, solubility, CNS/plasma PK) rather than structural.

## Pharmacodynamics & Pharmacokinetics

- Mechanism: competitive/substrate-competitive inhibition of PARP-1's ADP-ribosyltransferase activity, preventing toxic long-branched [[PAR]] polymer accumulation that drives [[Parthanatos]]; it also blocks the energy drain of PARP-1 hyperactivation ([[NAD+]]/[[ATP]] depletion) that kills post-mitotic neurons in ischemia-reperfusion.
- In vitro ischemia model: treatment 2 h after 2 h oxygen-glucose deprivation (OGD) attenuated PARP activity and restored cellular [[NAD+]] and [[ATP]]; no viability loss at concentrations up to 1 mmol/L (PMID 28370165).
- In vivo stroke models: reduced infarct volume and brain swelling in both transient and permanent MCAO rat models; in a monkey tMCAO stroke model JPI-289 reduced infarction volume by ~49%, compared with ~21% for the earlier candidate MP-124 (Jeil/KDDF nonclinical disclosure) — positioning it as the most effective PARP inhibitor tested in a primate stroke model.
- Immune-modulatory pharmacodynamics: in ischemic-stroke patients, PARP-1 inhibition with JPI-289 raised regulatory T-cell (Treg) proportions among PBMCs at high dose (10 µmol/L ex vivo; median 2.3% vs reduced baseline), with increased FOXP3/CTLA-4 mRNA — an anti-inflammatory Treg-upregulating effect proposed to contribute to outcome benefit.
- Human PK/PD: Phase 1 single- and multiple-ascending-dose studies (randomized, double-blind, placebo-controlled, **healthy male volunteers**) established tolerability and PK to support Phase 2.

## Applications

- **Acute ischemic stroke (Ph2a).** NCT03062397: multi-center, randomized, double-blind, placebo-controlled Phase 2a of JPI-289 (low-dose and high-dose) in patients with acute ischemic stroke (≥19 y), developed for co-administration with thrombolysis (tPA) and, in later framing, thrombectomy. Status: stalled/unknown completion as of Sep 2026.
- **Sexed therapeutic target.** In adult mouse MCAO, PARP-1 deletion/inhibition or nNOS blockade reduces infarct in males but worsens or fails in females; PARP/AIF signaling occurs in both sexes yet kills only males ([[Parthanatos]] §Sex dimorphism; McCullough 2005 PMID 15689952; Yuan 2009; Liu 2011 *Stroke* 42:739–745 PMID 21311064). Despite this, the JPI-289 program ran its Ph1 in healthy males and its Ph2a without sex stratification or pre-specified sex × modality analysis — the clearest example in the cell-death field of a therapy built on sex-dimorphic biology whose design ignores it. A sex-stratified parthanatos-for-males arm is the natural reformulation (see `task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026.md` §Part 2).

## Documents

No dedicated document notes in the vault yet.
- Reviewed sources: PMID 28370165 (JPI-289 neuroprotection in hypoxic rat cortical neurons); NCT03062397 (Ph2a registry); NCT01983358 (Ph1 registry); Jeil/KDDF nonclinical disclosures (rat + monkey tMCAO infarct data); Treg-upregulation translational study in ischemic stroke patients.
- Cross-ref: `src/tasks/task_output_sex_dimorphic_cell_death_05_Sep_2026.md` (JPI-289 program status in the therapeutic landscape).

## Connections

- [[Parthanatos]] — the regulated death program this drug targets; [[PAR]]/[[Apoptosis-Inducing Factor|AIF]]/[[MIF]] cascade blocked by PARP-1 inhibition.
- [[PARP1]] — molecular target; hyperactivation defines the parthanatos death threshold.
- [[PAR]] — the toxic polymer signal whose formation the drug suppresses.
- [[NAD+]] — substrate consumed by hyperactive PARP-1; JPI-289 restores the pool in OGD models.
- [[PARP inhibitors]] — class context (olaparib/veliparib/rucaparib/niraparib/talazoparib in oncology via synthetic lethality; JPI-289 distinct — acute CNS + parthanatos).
- [[Stroke]] — primary clinical indication (acute ischemic stroke, co-therapy with tPA/thrombectomy).
- [[Ischemia-reperfusion Injury]] — the pathological context (excitotoxic NO → peroxynitrite → DNA damage → PARP-1).
- [[Apoptosis]] — female-side counterpart of the male-biased PARP/AIF neuroprotection; pan-caspase inhibition rescues females where PARP inhibition has no effect.
- [[Apoptosis-Inducing Factor|AIF]] — downstream effector whose nuclear translocation is the parthanatos commitment point that JPI-289 suppresses upstream.
- [[Estrogen Receptor]] — female-side strategy axis (ERβ agonism restrains the NLRP3/pyroptosis arm; estradiol neuroprotection requires intact PARP-1).

## Linking Summary

- New note created in `src/notes/cell-death/` (drug with clear primary home: parthanatos/stroke therapeutics).
- New links added: [[PARP1]], [[Parthanatos]], [[PAR]], [[NAD+]], [[PARP inhibitors]], [[Stroke]], [[Ischemia-reperfusion Injury]], [[Apoptosis]], [[Apoptosis-Inducing Factor|AIF]], [[MIF]], [[Estrogen Receptor]].
- Strong connections to strengthen: [[Amelparib]] ↔ [[Parthanatos]] (clinical-translation gap), [[Amelparib]] ↔ [[PARP1]] (sex-stratified neuroprotection), [[Amelparib]] ↔ [[Estrogen Receptor]] (male/female dual-arm design).
- Suggested future work: dedicated document notes for the JPI-289 nonclinical/clinical disclosures once full texts are accessible; resolve the chemical structure when disclosed.