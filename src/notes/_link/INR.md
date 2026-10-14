---
title: INR
description: International Normalized Ratio, a dimensionless standardization of the
  prothrombin time that corrects for the sensitivity of the thromboplastin reagent
  used; the primary monitoring parameter for warfarin anticoagulation.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biomarker
  - clinical-test
  - coagulation
aliases: [International Normalized Ratio, Prothrombin Time INR, PT/INR]
---

# INR

The **international normalized ratio** (INR) is a standardised, reagent-independent
measure of the extrinsic and common coagulation pathways. It is derived from the
prothrombin time (PT) and exists because raw PT values in seconds are not
comparable between laboratories, instruments, or reagent lots.

> [!info] The calculation
> INR = (PT<sub>test</sub> / PT<sub>normal</sub>)<sup>ISI</sup>
>
> The **ISI** (International Sensitivity Index) is assigned by each manufacturer to
> a batch of tissue factor extract, indicating how it compares with the WHO
> international reference thromboplastin. More sensitive reagents have ISI near
> 1.0; less sensitive ones run 2.0–3.0. PT<sub>normal</sub> is the geometric mean
> PT of a reference group.

Because the ISI is in the exponent, reagent error is compressed: raising the ISI
to a power greater than one reduces the inflation of PT seen with less sensitive
thromboplastins. The ISI is calibrated against the WHO BSB 81/43 international
standard plasma.

## Interpretation

- Unanticoagulated reference range: **0.8–1.2**.
- Standard oral anticoagulation target: **2.0–3.0**.
- Mechanical heart valves, some venous thromboembolism indications, and
  antiphospholipid syndrome may warrant **2.5–3.5**.
- A "high" INR means the blood clots *slower* in vitro — the patient is
  under-anticoagulated and bleeds.

> [!warning] Clinical caveat
> An unexpectedly high INR in a patient not on an anticoagulant has a completely
> different differential than the same value in a warfarin-treated patient. Causes
> include liver synthetic failure, vitamin K deficiency, disseminated
> intravascular coagulation, warfarin or long-acting antibiotic (e.g.
> fluconazole) effect, heparin contamination of the sample, and lupus
> anticoagulant — the last of which typically prolongs aPTT more than PT.

## Assay methodology

Blood is drawn into a sodium citrate tube (fixed 1:9 citrate:blood ratio; an
underfilled tube is rejected because excess citrate chelates the calcium needed
for clotting), centrifuged to plasma, then recalcified with calcium-phospholipid
reagent. Tissue factor (animal-derived or recombinant) is added to initiate the
extrinsic pathway, and clotting time is recorded optically or mechanically.

The PT is sensitive to factors **I (fibrinogen), II (prothrombin), V, VII, and
X**. Because factor VII has the shortest half-life (~6 hours), the PT is the
earliest screening test to move in vitamin K deficiency or early liver disease —
which is why it is monitored far more frequently than the aPTT at the start of
warfarin therapy.

## Pharmacology of the drug being monitored

INR is the readout for [[Warfarin]] and [[Coumadin]], which block the recycling
of reduced [[Vitamin K]] by inhibiting [[Vitamin K Epoxide Reductase]] (VKORC1).
Warfarin is a racemate; the S-enantiomer is roughly 3–5× more potent and is the
one monitored clinically. A fresh INR is required before each dose decision —
the half-life of warfarin's effect is 36–42 hours, far longer than its plasma
half-life (~36–49 hours for the S-enantiomer), because the drug's effect
outlives its clearance.

In the [[Liver]], vitamin K is used as a cofactor by γ-glutamyl carboxylase to
convert specific glutamate residues in prothrombin, [[Protein C]], and related
"Gla" proteins; only the carboxylated forms can chelate calcium and participate
in the coagulation complex.

> [!info] Related readouts
> The aPTT assays the intrinsic pathway (VIII, IX, XI, XII plus common), and is
> the monitor of choice for heparin and unfractionated anticoagulation. Neither
> PT/INR nor aPTT is sensitive to factor XIII deficiency or to
> [[D-dimer]], which is a fibrinolysis product.

## Documents

- [[Warfarin]]
  - The drug whose dosing is titrated to this number; the stub's sole inbound
    document link, retained here.

## Connections

- [[Warfarin]] — Warfarin's anticoagulant effect is quantitated entirely by the
  INR. A target range of 2.0–3.0 for most indications, higher for mechanical
  valves, is the practical expression of the drug's therapeutic index.

- [[Vitamin K]] — The vitamin whose recycling Warfarin blocks. The relationship
  runs through VKORC1, and the same pathway explains why INR rises in dietary
  vitamin K deficiency and in broad-spectrum antibiotic use.

- [[Prothrombin]] — The clotting factor whose circulating, carboxylated, gamma-
  carboxyglutamate-bearing form is the substrate the PT assay reports on; low
  prothrombin activity is one of the main reasons the INR is high.

- [[Liver]] — The liver synthesises factors II, V, VII, IX, X, and fibrinogen, so
  hepatic synthetic failure raises the INR. This is a diagnostic use distinct
  from drug monitoring.

- [[aPTT]] — The companion coagulation assay covering the intrinsic pathway. A
  normal aPTT with an isolated raised INR points to extrinsic-pathway or liver
  causes rather than a shared-pathway factor deficiency.

## Linking Summary

- New links added: [[Coumadin]], [[Vitamin K]], [[Vitamin K Epoxide Reductase]],
  [[Prothrombin]], [[Protein C]], [[Liver]], [[aPTT]], [[D-dimer]]
- Suggested notes to create: [[Thromboplastin]], [[Tissue Factor]],
  [[Lupus Anticoagulant]], [[Disseminated Intravascular Coagulation]]
- Strong connections to strengthen: [[Warfarin]] ↔ [[Vitamin K Epoxide Reductase]]
