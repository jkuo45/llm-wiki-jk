---
title: Radiotherapy
description: The therapeutic use of ionizing radiation to damage tumour DNA; the mechanism is indirect, via radiolysis of water and the resulting radical chemistry that fixes DNA damage, and the tumour kill is governed by the linear-quadratic cell survival relationship and the oxygen enhancement ratio.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - therapy
  - oncology
  - radiobiology
aliases:
  - Radiation therapy
  - Radiation oncology
  - Radiotherapeutic
---

# Radiotherapy

**Radiotherapy** treats cancer with ionising radiation — photons, electrons or
protons — delivered in one to dozens of fractions. It is used in roughly half of all
cancer patients at some point in their treatment, as definitive therapy, as
adjuvant therapy after surgery, or as palliative treatment for symptomatic
metastases. Its sister discipline is [[Chemotherapy]]: they differ in mechanism
(direct chemical damage versus oxidatively generated radical damage) and in their
tendency to affect rapidly dividing cells, but they are routinely combined and share
the same dose-limiting toxicity, [[Bone Marrow]]-derived and normal tissue damage.

This note covers the biology and clinical physics. The hypoxia-radiosensitivity
framing is developed separately in [[Radiation Therapy]].

## Mechanism of cell kill

> [!info] Mechanism
> Ionising radiation kills cells **indirectly**. Photons and electrons interact with
> water and with cellular macromolecules to produce ionisation events; the resulting
> excited and ionised water molecules dissociate into hydroxyl radicals (·OH),
> hydrogen radicals and superoxide, plus molecular hydrogen peroxide. It is
> estimated that roughly two-thirds of radiation-induced DNA damage is caused by these
> secondary radicals rather than by direct energy deposition on the DNA. The hydroxyl
> radical is so reactive that it damages whatever it is adjacent to within a
> nanometre, which is why the chemistry is not repairable at the lesion level — repair
> must happen at the level of the DNA break.

The lethal lesion is the **DNA double-strand break**, produced either by a single
high-energy track or, far more often, by two independent single-strand breaks close
enough in space and time to be converted into one. Double-strand breaks are the
mechanistic link to the vault's DNA damage notes: the cell faces
[[Non-homologous End Joining]] and [[Homologous Recombination]] as options, in a
decision governed by [[53BP1]], [[BRCA1]], [[MDC1]] and [[γ-H2AX]], with
[[RNF168]] supplying the ubiquitin domain that recruits them.

## Oxygen enhancement

**Molecular oxygen is a potent radiosensitiser.** In the absence of oxygen the
secondary radicals recombine harmlessly, so damage is not "fixed" and can be
chemically restored; with oxygen present, the damage becomes irreversible. The
**oxygen enhancement ratio** (typically 2.5–3.0 for low LET radiation) is the dose
ratio between anoxic and oxygenated conditions needed for equal effect.

This is the single most important biological fact in radiation oncology. Solid
tumours contain regions of severe [[Hypoxia]] because their vasculature is
disorganised and disorganised vessels both leak and shunt, so poorly perfused tissue
is radioresistant. The 4Rs of radiobiology — Repair, Reassortment, Repopulation and
Reoxygenation — exist to describe how to defeat that: reoxygenation is what makes
fractionation work, since the intervening hours between fractions allow hypoxic cells
to re-enter the oxygenated, radiosensitive compartment.

## The linear-quadratic model

Clonogenic survival is described by

    SF(D) = exp(−αD − βD²)

where α captures single-track lethal damage and β the interaction of two sublethal
lesions (two nearby single-strand breaks converting to a double-strand break). The
ratio **α/β** is the fractionation sensitivity: a low α/β (early-reacting normal
tissue, and most tumours) means fractionation spares the tissue relative to the
tumour, which is the entire basis of conventional fractionation.

> [!warning] Model caveat
> The LQ model is well validated at conventional doses per fraction (roughly 2–3 Gy)
> and is the universal clinical workhorse for computing isoeffective doses. It is
> nonetheless contested at the high doses per fraction used in radiosurgery and
> hypofractionated stereotactic therapy, where Kirkpatrick, Brenner and Orton argue
> it overestimates cell death and that additional, non-DSB cell death mechanisms
> must be invoked. Brenner's counter-argument is that LQ remains mechanistically
> grounded in pairwise misrepair and is adequate over 2–15 Gy. Reported α, β and α/β
> values for human tumours vary substantially between studies, so any isoeffective-dose
> calculation should be treated as an estimate over a range, not a number.

## Techniques

- **External beam** — the standard. Conventional fractionation delivers ~1.8–2 Gy
  five days a week to a total of 50–70 Gy. Hypofractionation (fewer, larger doses)
  exploits a high α/β in the target and spares adjacent low-α/β tissue.
- **Stereotactic ablative radiotherapy and stereotactic radiosurgery** — a single
  or few very high, spatially precise doses; the ablative mechanism involves
  vascular damage and an anti-tumour immune response in addition to direct killing.
- **Brachytherapy** — sealed or semi-sealed sources placed in or next to the tumour,
  exploiting the short range of the radiation; used in cervix, prostate, breast and
  head-and-neck sites.
- **Particle therapy** — protons and heavier ions deposit energy with a Bragg peak,
  sparing distal normal tissue; a dosimetric rather than radiobiological advantage.
- **Radioimmunotherapy and targeted radionuclide therapy** — isotopes conjugated to
  antibodies or receptor ligands, exploiting tumour-specific antigen density rather
  than anatomy.

## Radio-sensitisation and combination therapy

Combining radiation with agents that either damage DNA, block repair, arrest the
cell cycle in G2 (the most radiosensitive phase), or improve tumour oxygenation
widens the therapeutic window. Radiosensitiser classes include [[PARP inhibitors]],
platinum agents, anthracyclines, antifolates, and inhibitors of the DNA damage
checkpoint such as [[ATM]] and [[ATR]] inhibitors. The vault's [[Chemotherapy]] note
covers the cytotoxic axis; the combinatorial rationale is the same — kill cells that
have been pushed into a vulnerable state.

## Toxicity

Acute effects track rapidly dividing tissue: mucositis, [[Bone Marrow]] suppression,
desquamation, and nausea. Late effects are damage to slowly proliferating or
non-dividing structures — fibrosis, telangiectasia, xerostomia from salivary gland
loss, vasculopathy, secondary malignancy, and cognitive decline after cranial
irradiation. The therapeutic index is defined by the distance between the
tumour-control probability and normal-tissue complication probability curves, and
[[p53]] status, oxygenation and α/β all move those curves.

Second malignancy is a real and quantifiable long-term risk: solid tumour risk rises
roughly 2-fold after breast irradiation, and it is why paediatric protocols use the
lowest effective dose and why at-risk syndromes historically precluded radiotherapy.

## Documents

- [[Chemotherapy]] — the other systemic pillar of cancer treatment, sharing
  [[Bone Marrow]]-derived toxicity and routinely combined with radiation; the
  combination is standard in small-cell lung cancer, oesophageal cancer, glioma and
  head-and-neck cancer.

## Connections

- [[Chemotherapy]] — the non-radiation systemic arm; the two are synergistic because
  chemo pushes cycling cells into G2/M (the most radiosensitive phases) while
  radiation kills cells that would otherwise repair chemo-induced damage.
- [[Radiation Therapy]] — the vault's note on hypoxia and radiosensitisation, sharing
  this note's mechanism; the two should be merged, and this is the duplication the
  Linking Summary flags.
- [[Ionizing Radiation]] — the physical agent, and the agent class whose DNA damage
  output engages the whole [[DNA Damage Response]] machinery.
- [[DNA Damage]] — the primary lesion; the lethal event is a double-strand break, so
  everything in the [[DNA Repair]] notes is downstream of the radiation event.
- [[Non-homologous End Joining]] — one of the two repair outcomes available to a
  irradiated cell, and the one favoured in G1 and in cells lacking homologous
  recombination; a NHEJ-deficient tumour is hypersensitive to radiation.
- [[53BP1]] — commits the cell to NHEJ after irradiation, which is why 53BP1 status
  and 53BP1 loss in BRCA1-deficient tumours modulate radiation and PARP inhibitor
  response.
- [[BRCA1]] — HR deficiency makes cells hypersensitive to cross-linked and
  ionising radiation damage, and is the basis of exploiting radiation sensitivity
  with PARP inhibitors.
- [[PARP inhibitors]] — a leading radiosensitiser class: PARP inhibition prevents
  repair of the single-strand intermediates that become double-strand breaks, and
  in HR-deficient tumours locks in synthetic lethality.
- [[p53]] — status is one of the strongest determinants of radiation response; wild-type
  p53 cells arrest and die, mutant cells may continue dividing through damage.
- [[Cell Cycle]] — G2/M is the most radiosensitive phase and S the most resistant,
  which underlies the rationale for synchronising chemo before radiation.
- [[Reactive Oxygen Species]] — the proximate killer is the hydroxyl radical from
  water radiolysis, which is what makes radiation an oxidative stress and links it to
  the redox and mitohormesis biology elsewhere in the vault.
- [[Apoptosis]] — a principal death route after radiation, along with mitotic
  catastrophe and senescence; the balance depends on p53 and on the tissue.
- [[Cellular Senescence]] — a significant and long-lasting component of the
  irradiated tumour microenvironment, since surviving senescent cells secrete SASP
  factors that can promote tumour recurrence.
- [[Hypoxia]] — the determinant of radioresistance, and the target of the hypoxic cell
  sensitiser and oxygenation strategies; see also [[Radiosensitizer]].
- [[Radiosensitizer]] — the drug class whose whole purpose is to widen the therapeutic
  index; the vault's Radiation Therapy note cites a negative fenbendazole result here.
- [[Mitochondrial Function]] — mitochondrial ROS and the radioprotective role of
  NAD+-dependent sirtuin activation are the mechanistic bridge from radiation to the
  sirtuin biology that dominates the rest of this vault.

## Linking Summary

- New links added: [[Chemotherapy]], [[Radiation Therapy]], [[Ionizing Radiation]],
  [[DNA Damage]], [[Non-homologous End Joining]], [[53BP1]], [[BRCA1]],
  [[PARP inhibitors]], [[p53]], [[Cell Cycle]], [[Reactive Oxygen Species]],
  [[Apoptosis]], [[Cellular Senescence]], [[Hypoxia]], [[Radiosensitizer]],
  [[Mitochondrial Function]], [[DNA Repair]], [[γ-H2AX]]
- Suggested notes to create: [[Oxygen Enhancement Ratio]],
  [[Linear-Quadratic Model]], [[Brachytherapy]], [[Stereotactic Body Radiotherapy]],
  [[Radiofrequency Ablation]], [[Dose Fractionation]], [[Radiation Dose]],
  [[4Rs of Radiobiology]], [[Radiation-Induced Fibrosis]], [[Second Malignancy]],
  [[Neutron Therapy]], [[Proton Therapy]], [[Platinum]], [[Anthracyclines]],
  [[ATR Kinase]], [[Normal Tissue Complication Probability]],
  [[Tumour Control Probability]], [[Radiation Recall]], [[Bystander Effect]],
  [[Radioimmunotherapy]]
- Strong connections to strengthen: [[Radiotherapy]] ↔ [[Radiation Therapy]]
  (duplicate note — the hypoxia and radiosensitisation content in Radiation Therapy
  should be merged here and the orphan redirected), [[Radiotherapy]] ↔ [[Chemotherapy]],
  [[Radiotherapy]] ↔ [[DNA Damage]], [[Radiotherapy]] ↔ [[PARP inhibitors]]
