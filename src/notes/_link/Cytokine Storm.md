---
title: Cytokine Storm
description: Systemic hyperinflammatory syndrome in which innate immune cells release pro-inflammatory cytokines (IL-6, IL-1, TNF-alpha, IFN-gamma) at levels that overwhelm normal regulatory feedback, driving endothelial activation, capillary leak, hypotension and multiorgan failure. Classically described in severe sepsis, cytokine release syndrome after CAR-T or checkpoint blockade, and in viral infections such as COVID-19.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [immune-response, inflammation, clinical-concept, cytokine, pathysiology]
aliases: [Cytokine release syndrome, CRS, Hyperinflammatory syndrome, Cytokine cascade]
---

# Cytokine Storm

A **cytokine storm** is a clinical-pathological syndrome, not a single molecule. It describes a state in which activated [[Macrophage|macrophages]] (and, in some settings, [[T Cell|T cells]], [[Monocytes|monocytes]] and [[Neutrophils|neutrophils]]) release pro-inflammatory cytokines faster than the host can clear them, and faster than endogenous anti-inflammatory feedback can suppress them. The result is a self-amplifying inflammatory state that damages the host more than the original trigger.

> [!info] Why the label is contested
> "Cytokine storm" is a descriptive clinical term, not a diagnostic entity. There is no universally agreed measurement, threshold, or duration that defines it. A 2025 mechanistic review (Hiti, *Current Opinion in Virology*) notes that the field increasingly distinguishes *cell-type-specific* hyperactivation — a macrophage-centric state in much cytokine release syndrome (CRS) — from the diffuse, multisystem syndrome implied by the older name. Serum cytokine concentrations are poor surrogates: cytokine levels are extremely compartment-dependent (measured in plasma, they may not reflect lung, liver or CNS concentrations), and single-analyte assays systematically miss the synergistic network.

## Circulating mediators

The mediators most consistently associated with severe cytokine release are:

- [[IL-6]] — the single most-cited driver. Signals through [[IL-6R]] and gp130, driving hepatic acute-phase protein synthesis, fever, and vascular endothelial activation. Some reviews propose specific clinical cutoffs (e.g. plasma IL-6 > ~19.5 pg/mL) for severity stratification in [[COVID-19]], but cutoffs are assay- and cohort-specific and not validated as diagnostic.
- [[TNF-alpha]] and [[Interferon-gamma]] — the classic macrophage-derived pair. Their combination, rather than either alone, has been used in animal models to reproduce a bona fide "storm."
- [[IL-1β]] — requires proteolytic maturation via [[NLRP3]] and the [[Inflammasome]]; [[Anakinra]] blocks this arm.
- [[IL-10]] — usually *anti*-inflammatory, but it is also elevated, and a high IL-10:IL-6 ratio has been proposed as a marker of immunoparalysis rather than of a protective response. This is one place where the simple "high = bad" reading fails.

> [!warning] IL-6 is not unambiguously pro-inflammatory
> [[IL-6]] is frequently described as a pro-inflammatory cytokine, but trans-signalling through membrane-bound [[IL-6R]] and classic signalling through soluble receptor are biologically distinct, and IL-6 signalling is required for muscle regeneration and for hepatic regenerative responses. Therapeutic IL-6 blockade is not a general "anti-inflammation" intervention; [[Tocilizumab]] carries a boxed warning for serious infection and for hepatic toxicity and has been associated with rebound inflammation after rapid IL-6 blockade.

## Amplification loops

Cytokine storms propagate through at least four documented self-amplifying circuits:

1. **NF-κB feedback.** NF-κB drives both cytokine production and the inflammasome; the products of those cytokines (IL-1, TNF) further activate NF-κB.
2. **JAK-STAT trans-signalling.** IL-6/IFN signalling via [[JAK-STAT Signaling]] induces IL-6 and other cytokine genes, extending the inflammatory transcriptional programme beyond the initiating cell.
3. **Complement and coagulation.** [[Complement System]] activation and endothelial injury feed back into further neutrophil and monocyte recruitment, producing the microvascular thrombosis seen in [[COVID-19]] and in [[Sepsis]].
4. **Catecholamine and ROS amplification.** Sympathetic surge and [[Reactive Oxygen Species|ROS]] generation in the shocked patient suppress further viral clearance while amplifying NF-κB activity.

## Downstream consequences

The vascular phenotype is the reason cytokine storms kill. Systemic endothelial activation, as described in [[Endothelial Dysfunction]] and [[Vascular Inflammation]], produces capillary leak, loss of vascular tone, and myocardial depression — the physiology of [[Acute Respiratory Distress Syndrome]] and vasoplegic shock ([[Vasoplegic Shock]]). Alongside this:

- **Fever and metabolic collapse.** Sustained hyperthermia and catabolic cytokines drive the muscle wasting and fatigue seen in post-ICU weakness.
- **Coagulopathy.** Elevated [[PAI-1]] suppresses fibrinolysis, raising [[D-dimer]] and the risk of microthrombi and [[Pulmonary Embolism]].
- **Immunoparalysis.** Despite the name, a late cytokine storm is frequently followed by profound [[Lymphopenia]] — anergy of adaptive immunity, which is why secondary bacterial and fungal infection frequently follows the initial hyperinflammatory phase.
- **Neurotoxicity.** In the CNS this manifests as [[Neurotoxicity|delirium]], seizures, and in extreme cases fatal cerebral edema; in the ICU setting it overlaps with the [[Long COVID]] syndrome.

## Triggers and clinical contexts

| Context | Typical features | Notes |
| --- | --- | --- |
| Bacterial sepsis | Multi-organ failure, high mortality | Cytokine storm is a late-phase sepsis phenotype, not present in early sepsis (which may be immunoparalytic) |
| Viral pneumonia | [[SARS-CoV-2]], influenza, RSV | "Hyperinflammation" typically appears 1–2 weeks after symptom onset, not at presentation |
| CAR-T therapy / immune checkpoint blockade | Fever, hypotension, hypoxia, coagulopathy | Macrophage activation, partly via CD40L–CD40, is the leading model for iatrogenic CRS |
| Hemophagocytic syndromes | Fever, splenomegaly, cytopenias | Shares a cytokine axis with malignancy-associated and infection-associated syndromes |
| Autoimmune / autoinflammatory disease | Onset without an infectious trigger | Familial cold autoinflammatory disease and periodic fever syndromes sit on the same axis |

> [!warning] Clinical caveat
> Fever, elevated CRP and raised inflammatory markers are non-specific. Many patients with severe infection, [[Obesity]], [[Diabetes]] or [[Atherosclerosis]] have elevated baseline cytokines without a storm. No biomarker or ratio reliably distinguishes a treatable cytokine storm from appropriate infection response, and blanket immunosuppression in early sepsis is harmful. Targeted blockade ([[Tocilizumab]], [[Anakinra]], corticosteroids, IL-1R blockade in the right subset) has trial support only in selected indications; the sepsis literature as a whole has failed to show benefit.

## Documents

- [[COVID-19]] — the modern clinical exemplar of infection-associated hyperinflammation; the source of most modern IL-6-targeted trial data.
- [[Lymphopenia]] — the paradoxical adaptive-immune collapse that follows or accompanies the innate hyperinflammatory phase.
- [[SARS-CoV-2]] — the initiating antigen; the timing of the storm relative to viral clearance distinguishes it from direct viral cytopathic lung injury.

## Connections

- [[IL-6]] — the mediator most consistently implicated across infection-associated and iatrogenic cytokine release syndrome, and the only one with an established targeted therapy in routine use. The causal direction is bidirectional: IL-6 drives endothelial activation, and endothelial damage further raises IL-6.
- [[Inflammasome]] — supplies mature [[IL-1β]] via [[NLRP3]] activation, providing the second major druggable arm of the storm. Inflammasome activation is tightly coupled to mitochondrial damage and ROS, which links this note directly to mitochondrial redox biology.
- [[Sepsis]] — the archetypal setting, and the cautionary tale: cytokine blockade failed in unselected sepsis, which is why "storm" is now treated as a phenotype to be identified rather than a diagnosis to be assumed.
- [[Macrophage Polarization]] — the macrophage is the dominant effector cell in most cytokine release syndromes, and its polarisation state determines whether release is pro- or anti-inflammatory.
- [[NLRP3]] — inflammasome activation is both downstream of cytokine signalling and upstream of IL-1 release, making it a convergence point where nutrient sensing, mitochondrial redox state, and innate immune amplification intersect.

## Linking Summary
- New links added: [[Macrophage]], [[T Cell]], [[Monocytes]], [[Neutrophils]], [[IL-6]], [[TNF-alpha]], [[Interferon-gamma]], [[IL-1β]], [[IL-10]], [[NLRP3]], [[Inflammasome]], [[NF-κB]], [[JAK-STAT Signaling]], [[Complement System]], [[Anakinra]], [[Endothelial Dysfunction]], [[Vascular Inflammation]], [[Acute Respiratory Distress Syndrome]], [[Sepsis]], [[SARS-CoV-2]], [[COVID-19]], [[Lymphopenia]], [[PAI-1]], [[D-dimer]], [[Pulmonary Embolism]], [[Reactive Oxygen Species]], [[Long COVID]], [[Neurotoxicity]], [[Obesity]], [[Diabetes]], [[Atherosclerosis]]
- Suggested notes to create: [[Cytokine Release Syndrome]], [[Tocilizumab]], [[Hemophagocytic Lymphohistiocytosis]], [[CAR T Cell Therapy]], [[Dengue Fever]], [[Ebola Virus]], [[Cytokine Release Syndrome Severity Grading]]
- Strong connections to strengthen: [[NLRP3]] ↔ [[Mitochondrial ROS]], [[IL-6]] ↔ [[IL-6R]], [[Sepsis]] ↔ [[Long COVID]]
