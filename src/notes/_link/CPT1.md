---
title: CPT1
description: CPT1 (carnitine palmitoyltransferase 1) is the outer-mitochondrial-membrane enzyme that transfers long-chain acyl groups to carnitine, the rate-limiting and allosterically malonyl-CoA-regulated gatekeeper of mitochondrial fatty acid beta-oxidation.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein
  - enzyme
  - metabolism
aliases: [Carnitine Palmitoyltransferase 1, CPT I, CPT1A, CPT1B, Carnitine O-palmitoyltransferase 1, CPT-1]
---

# CPT1

**CPT1** (carnitine palmitoyltransferase 1) is the first enzyme of the carnitine shuttle and the committed, rate-limiting step of mitochondrial long-chain fatty acid β-oxidation. It sits on the cytosolic face of the outer mitochondrial membrane, transfers long-chain acyl groups from acyl-CoA to carnitine, and is allosterically inhibited by [[Malonyl-CoA]] — which makes it the switch that decides whether a cell burns fat or carbohydrate. Its inner-membrane partner [[CPT2]] performs the reverse reaction inside the matrix.

> [!important] Why the malonyl-CoA gate is the whole point
> Because CPT1 activity determines the partition of substrate between fatty acid oxidation and lipogenesis, CPT1 flux is the single most important control point in fuel selection. High malonyl-CoA (fed state, insulin signaling) closes the gate; low malonyl-CoA (fasting, exercise, [[AMPK]] activation) opens it. Any description of CPT1 that omits malonyl-CoA inhibition is missing its defining regulatory property.

## Structure & Isoforms

- Human CPT1A is 773 amino acids (~95 kDa) with an N-terminal mitochondrial targeting sequence that targets it to the **outer** mitochondrial membrane. The mature enzyme is a homotrimer bound to the outer membrane via an integral membrane anchor.
- CPT1A and CPT1B (encoded by *CPT1B*) are paralogs with roughly 85% identity and a key tissue-specific difference in N-terminal regulatory phosphorylation sites.
  - **CPT1A** — liver, kidney, small intestine, adipose tissue, heart, and brain. Hepatic CPT1A is the enzyme that gates ketogenesis.
  - **CPT1B** — skeletal muscle and heart; the muscle isoform is the one that gates fat oxidation during exercise.
- The catalytic site contains a conserved histidine (His263 in human CPT1A) that abstracts the proton from carnitine's hydroxyl, and a conserved aspartate (Asp329) coordinating the carnitine amino group — analogous to the residues mutated in CPT2 deficiency.

> [!warning] Non-canonical localizations
> CPT1 has been reported on the plasma membrane and in other compartments, distinct from its mitochondrial pool, in association with metabolic signaling. These findings are real but incompletely characterized; canonical metabolic statements about CPT1 should be read as referring to the mitochondrial outer-membrane enzyme.

## Mechanism of Action & Pathways

**The carnitine shuttle (step 1 of 2).** Cytosolic long-chain acyl-CoA cannot cross the inner mitochondrial membrane. CPT1 transesterifies it with carnitine (from [[L-Carnitine]] and its transporter) to form acylcarnitine. The carnitine-acylcarnitine translocase exchanges acylcarnitine into the matrix for free carnitine out. [[CPT2]] then regenerates matrix acyl-CoA, which enters the β-oxidation spiral. Long-chain acyl-CoA, unlike medium-chain acyl-CoA, cannot bypass this shuttle — which is why medium-chain triglycerides are used therapeutically in carnitine shuttle defects.

**Malonyl-CoA inhibition.** Malonyl-CoA, the product of acetyl-CoA carboxylase, binds a distinct regulatory site on CPT1's cytosolic face and inhibits activity. The malonyl-CoA concentration therefore reports the cell's lipogenic state to the oxidation machinery.

- Fed state → insulin → acetyl-CoA carboxylase active → malonyl-CoA high → CPT1 inhibited → fatty acids esterified into lipid rather than oxidized.
- Fasting/exercise → [[AMPK]] phosphorylates and inhibits acetyl-CoA carboxylase → malonyl-CoA low → CPT1 active → β-oxidation and [[Ketogenesis]].
- This is the mechanism behind the " Randle cycle" concept: substrate competition between fat and glucose oxidation is enforced enzymatically at CPT1.

**Downstream.** Matrix acyl-CoA enters the β-oxidation spiral, generating acetyl-CoA, NADH, and FADH₂; acetyl-CoA enters the TCA cycle or is diverted to ketogenesis. CPT1 flux therefore sets whole-body fuel partitioning between fatty acids and glucose.

## Physiological Function

- **Fasting fuel supply.** Hepatic CPT1A permits the liver to oxidize fatty acids and produce ketone bodies during fasting, sparing glucose for the brain — with [[Ketogenesis]] as the specific hepatic output.
- **Exercise.** Muscle CPT1B permits reliance on intramuscular fatty acid oxidation at moderate-to-high exercise intensity; defects manifest as exercise-induced rhabdomyolysis and myoglobinuria.
- **Thermogenesis and metabolic flexibility.** Adipose and muscle CPT1 support [[Metabolic Flexibility]] — the ability to switch fuel preference with changing demand.
- **Reciprocal regulation with lipogenesis.** Because CPT1 and acetyl-CoA carboxylase sit on the same malonyl-CoA axis, CPT1 activity is a readout of the lipogenic/oxidative balance central to [[Insulin Resistance]] and metabolic disease.

> [!info] Transcriptional control
> CPT1A expression is upregulated by [[PPAR-alpha]]-driven catabolic programs and by [[AMPK]] in fasting; it is repressed in the fed, lipogenic state. Estrogen-related receptor alpha and some nuclear receptors also contribute. Post-translational control is chiefly via malonyl-CoA and via phosphorylation at isoform-specific N-terminal sites.

## Pathology & Clinical Relevance

- **CPT1A deficiency** — a rare autosomal recessive disorder of hepatic long-chain fatty acid oxidation presenting in infancy with hypoketotic hypoglycemia, hepatomegaly, cardiomyopathy, and elevated liver enzymes; treatable with dietary long-chain fat restriction plus medium-chain triglyceride supplementation.
- **CPT1B deficiency** — the commonest of the carnitine shuttle disorders; presents as exercise-induced myalgia and recurrent rhabdomyolysis, often after prolonged fasting, cold, or illness.
- **Metabolic disease.** Elevated malonyl-CoA and suppressed CPT1 flux are documented features of [[Insulin Resistance]], [[Obesity]] (no vault note yet), [[Non-alcoholic Fatty Liver Disease]], and [[Type 2 Diabetes Mellitus]] — contributing to ectopic lipid accumulation and lipotoxicity.
- **Cancer.** Tumor cells frequently depend on fatty acid oxidation, and CPT1A is emerging as both a metabolic marker and a therapeutic target. The review literature explicitly designates CPT1 rather than CPT2 as the "critical gatekeeper controlling the entry of fatty acids into mitochondrial oxidation," with FAO inhibition being pursued alongside immunotherapy because FAO is immunomodulatory within the tumor microenvironment (PMID: 41219902). Efficacy so far is preclinical.

> [!warning] Pharmacology status
> CPT1 inhibitors (etomoxir, perhexiline, and related compounds) are real pharmacological tools and are used experimentally, but none is approved as a therapeutic in humans; etomoxir in particular is limited by off-target acyl-CoA effects and a narrow window. Long-chain 3-hydroxyacyl-CoA dehydrogenase (VLCAD) deficiency is the main clinical indication where the relevant step is *downstream* of CPT1 rather than at CPT1 itself.

## Documents

- [[_document_ - Thymic Rejuvenation and Aging|Thymic Rejuvenation and Aging]] — discusses restoration of thymic function and links it to metabolic reprogramming, in which CPT1-dependent fatty acid oxidation is the relevant fuel-flux node.

## Connections

- [[CPT2]] — CPT2 is the inner-membrane partner that completes the carnitine shuttle; the two enzymes are consecutive and structurally homologous, and this pair is the vault's canonical fatty-acid-entry module.
- [[Malonyl-CoA]] — the allosteric inhibitor that defines CPT1's regulatory logic; malonyl-CoA concentration is the direct signal that couples the lipogenic state to the rate of fatty acid oxidation.
- [[L-Carnitine]] — the acyl carrier of the shuttle; carnitine availability is a required co-substrate, and carnitine supplementation is part of the management of CPT1 deficiency.
- [[AMPK]] — activates the catabolic program that lowers malonyl-CoA and therefore relieves malonyl-CoA inhibition of CPT1, matching energy state to fatty acid oxidation.
- [[ACC1]] — acetyl-CoA carboxylase produces the malonyl-CoA that inhibits CPT1; the ACC–CPT1 axis is the reciprocal pair of opposing lipogenic and oxidative control points.
- [[Beta-Oxidation]] — CPT1 is the committed, rate-limiting entry step of this pathway, and therefore the principal pharmacological and metabolic control point.
- [[Ketogenesis]] — hepatic CPT1A activity is what permits the liver to produce ketone bodies during fasting.
- [[Metabolic Flexibility]] — switching between fatty acid and glucose oxidation requires moving CPT1 flux, which is why CPT1 activity is a standard operational marker of metabolic inflexibility.
- [[Insulin Resistance]] — suppressed CPT1 flux and elevated malonyl-CoA are recurring features of the insulin-resistant state and contribute to ectopic lipid deposition.
- [[FASN]] — the vault's fatty-acid-synthesis notes already place CPT1 in the malonyl-CoA regulatory frame; FASN and CPT1 are the two arms of the same malonyl-CoA-controlled switch.

## Linking Summary

- New links added: [[CPT2]], [[Malonyl-CoA]], [[L-Carnitine]], [[AMPK]], [[ACC1]], [[Beta-Oxidation]], [[Ketogenesis]], [[Metabolic Flexibility]], [[Insulin Resistance]], [[Obesity]], [[Non-alcoholic Fatty Liver Disease]], [[Type 2 Diabetes Mellitus]], [[FASN]], [[mTORC1]]
- Suggested notes to create: [[Carnitine Shuttle]] (the pathway hub wrapping CPT1 and CPT2), [[Obesity]], [[PPAR-alpha]] (the transcriptional regulator of CPT1 expression), [[Etomoxir]] (the reference CPT1 inhibitor), [[Malonyl-CoA Decarboxylase]] (the enzyme that clears the inhibitor), [[Carnitine Palmitoyltransferase I Deficiency]]
- Strong connections to strengthen: [[CPT1]] ↔ [[CPT2]] (the two notes are currently one-directional — CPT2 already points here, this note points back), [[CPT1]] ↔ [[Malonyl-CoA]] (the defining regulatory relationship), [[CPT1]] ↔ [[ACC1]].