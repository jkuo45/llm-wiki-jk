---
title: CPT2
description: Carnitine palmitoyltransferase 2, a mitochondrial inner-membrane enzyme that regenerates acyl-CoA from acylcarnitine in the matrix, the second step of the carnitine shuttle enabling long-chain fatty acid β-oxidation; a SIRT5 desuccinylation target linked to cardiac metabolism.
protected: false
created: 2026-08-18
updated: 2026-08-18
tags:
  - protein
  - enzyme
  - metabolism
aliases: [Carnitine Palmitoyltransferase 2, CPT II, Carnitine O-palmitoyltransferase 2]
---
# CPT2

**CPT2** (carnitine palmitoyltransferase 2) is a nuclear-encoded mitochondrial enzyme anchored to the inner mitochondrial membrane on the matrix side. It catalyzes the second step of the carnitine shuttle — the conversion of long-chain acylcarnitine back to acyl-CoA and free carnitine inside the matrix — thereby providing the substrate for mitochondrial fatty acid β-oxidation. Because the outer-membrane enzyme [[CPT1]] is allosterically inhibited by malonyl-CoA, the shuttle (including CPT2) is the rate-limiting entry point for long-chain fatty acid oxidation in most tissues.

## Overview

- Expressed at high levels in tissues with robust oxidative capacity: [[Skeletal Muscle]], heart ([[Cardiomyocytes]]), [[Liver]], and kidney.
- Distal to the malonyl-CoA regulatory checkpoint: CPT2 itself is not allosterically regulated, so flux through the second step is largely substrate-driven.
- A well-established target of [[SIRT5]], the mitochondrial NAD⁺-dependent desuccinylase, which removes succinyl marks from CPT2 and other β-oxidation enzymes to modulate fatty acid oxidation (FAO).

## Structure & Domains

- Human CPT2 is synthesized as a ~658-amino-acid precursor (~70 kDa) containing an N-terminal mitochondrial targeting presequence that is cleaved upon import into the matrix; the mature protein runs at ~67–71 kDa.
- CPT2 belongs to the carnitine acyltransferase family and shares the conserved carnitine O-palmitoyltransferase domain architecture with CPT1 and carnitine acetyltransferase (CrAT).
- The active site contains a catalytic histidine (His372 in human numbering) that abstracts a proton from the carnitine hydroxyl, plus a conserved aspartate (Asp376) coordinating the carnitine amino group — residues that are mutational hotspots in CPT2 deficiency.
- The enzyme operates as a homotetramer on the inner membrane, functionally coupled to the carnitine-acylcarnitine translocase (CACT) that exchanges cytosolic acylcarnitine for matrix carnitine.

## Mechanism of Action & Pathways

- **Carnitine shuttle (two-step)**: cytosolic [[CPT1]] (outer membrane) transesterifies long-chain acyl-CoA + carnitine → acylcarnitine; CACT transports acylcarnitine across the inner membrane; matrix CPT2 reverses the reaction, regenerating acyl-CoA for β-oxidation and releasing carnitine for recycling.
- **Downstream fate of matrix acyl-CoA**: β-oxidation spiral producing acetyl-CoA, NADH, and FADH₂; acetyl-CoA feeds the TCA cycle and drives hepatic ketogenesis during fasting.
- **[[SIRT5]] regulation**: SIRT5 desuccinylates CPT2 (Lys424, mouse numbering), increasing CPT2 activity and FAO flux. This post-translational control couples cellular succinyl-CoA levels to mitochondrial fuel selection — a mechanism particularly relevant to cardiac and hepatic [[Metabolism]] under metabolic stress.
- **Pathway integration**: malonyl-CoA produced by acetyl-CoA carboxylase 2 inhibits CPT1 (not CPT2); thus insulin signaling, AMPK, and glucose oxidation state converge on the shuttle's first step, while SIRT5 acts on the second.

## Physiological Function

- **Fasting fuel supply**: permits skeletal muscle and heart to oxidize long-chain fatty acids, sparing glucose for the brain.
- **Hepatic ketogenesis**: supports the liver's production of ketone bodies during fasting and prolonged exercise.
- **Exercise metabolism**: supports endurance work in muscle; defects manifest as exercise-induced rhabdomyolysis.
- **[[Insulin Resistance]] context**: impaired CPT2 flux with reduced FAO contributes to intramyocellular [[Lipid Metabolism]] dysfunction; restoring FAO via SIRT5-desuccinylation has been proposed as a metabolic intervention in diabetic cardiomyopathy.

## Pathology & Clinical Relevance

- **CPT2 deficiency** (OMIM 600650): an autosomal recessive long-chain fatty acid oxidation disorder with three main phenotypes:
  - **Myopathic (mildest, most common)**: exercise-induced muscle pain, weakness, and recurrent rhabdomyolysis with myoglobinuria, often triggered by prolonged exercise, fasting, cold, or infection. The common founder allele is p.Ser113Leu.
  - **Infantile hepatic**: hypoketotic hypoglycemia, hepatomegaly, Reye-like episodes, cardiomyopathy, arrhythmia.
  - **Neonatal (severe)**: dysmorphism, cardiomyopathy, seizures, early death.
- **Diagnosis**: plasma acylcarnitine profile showing elevated long-chain species (C16:0, C18:0, C18:1); urine acylglycines; CPT2 enzyme assay in fibroblasts or muscle; confirmatory molecular testing of the CPT2 gene.
- **Management**: avoidance of fasting, low-long-chain-fat/high-carbohydrate diet, medium-chain triglyceride (MCT) supplementation (bypasses CPT1/CPT2), carnitine supplementation, aggressive hydration during rhabdomyolysis crises.
- **Diabetic cardiomyopathy / cardiac ischemia**: reduced myocardial FAO and lipid overload contribute to lipotoxicity and contractile dysfunction; the [[SIRT5]]–CPT2 desuccinylation axis has been reported to rescue FAO and improve cardiac function in models of diabetic cardiomyopathy — the subject of a pending sirtuin-focused document awaiting ingestion (see Linking Summary).

## Documents

- No wiki documents ingested yet. Source material pending ingestion from the sirtuin research-gap analysis (`src/tasks/task_output_sirtuin_research_gaps_14_August_2026.md`), which flags CPT2 as a SIRT5 substrate in cardiac FAO.

## Connections

- [[SIRT5]]: Mitochondrial desuccinylase that activates CPT2 (Lys424 desuccinylation), enhancing FAO; the CPT2–SIRT5 axis is central to the pending sirtuin cardiac-metabolism paper.
- [[Mitochondria]]: CPT2 is a resident inner-membrane enzyme of the matrix-facing side, central to mitochondrial fuel oxidation.
- [[Metabolism]] / [[Lipid Metabolism]]: CPT2 sits at the gateway of long-chain fatty acid oxidation; flux through it shapes whole-body fuel partitioning.
- [[Cardiomyocytes]]: CPT2 is essential for cardiac FAO; its dysfunction is linked to lipotoxic cardiomyopathy.
- [[Skeletal Muscle]]: Major site of CPT2 expression; myopathic CPT2 deficiency causes exercise-induced rhabdomyolysis.
- [[Insulin Resistance]]: FAO impairment through the carnitine shuttle contributes to ectopic lipid accumulation and metabolic inflexibility.

## Linking Summary

- New links added: [[SIRT5]], [[Mitochondria]], [[Metabolism]], [[Lipid Metabolism]], [[Cardiomyocytes]], [[Skeletal Muscle]], [[Insulin Resistance]], [[Liver]].
- Suggested new entity notes to create: [[CPT1]] (carnitine palmitoyltransferase 1 — the outer-membrane regulatory step, currently unresolved in the vault), [[Fatty Acid Oxidation]] (central pathway hub), [[Myocardial Infarction]], [[Diabetic Cardiomyopathy]].
- Strong connections to strengthen:
  - [[SIRT5]] ↔ [[CPT2]] — mechanistic pairing for the pending cardiac-metabolism document.

- Justification: CPT1 is the canonical partner enzyme of CPT2 and is referenced in numerous FAO contexts across the vault; a [[Fatty Acid Oxidation]] hub would consolidate the growing number of metabolism notes. The [[SIRT5]] ↔ [[CPT2]] edge is the core finding of the pending Tier 1 paper and should be cross-referenced once ingested.
