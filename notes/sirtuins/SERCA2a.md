---
type: entity
category: protein
aliases:
  - ATP2A2
  - Sarco/Endoplasmic Reticulum Ca2+-ATPase 2a
  - SERCA2
  - Calcium pump 2
database_ids:
  uniprot: P16615
  hgnc: HGNC:812
relations:
  - predicate: deacetylated_by
    target: "SIRT1"
    sources:
      - Shinmura 2015
  - predicate: restored_by
    target: "SIRT1"
    sources:
      - Shinmura 2015
      - Gorski 2019
created: 2026-07-04
updated: 2026-07-04
---

# SERCA2a

**SERCA2a** (Sarco/Endoplasmic Reticulum Ca2+-ATPase 2a, encoded by *ATP2A2*) is a P-type ATPase that pumps Ca2+ from the cytosol into the sarcoplasmic reticulum lumen. It is the dominant SERCA isoform in cardiac muscle and is indispensable for excitation–contraction coupling, myocyte relaxation (lusitropy), and diastolic function.

## Structure and Mechanism

SERCA2a is a transmembrane protein embedded in the sarcoplasmic reticulum (SR) membrane. Its catalytic cycle alternates between high-affinity Ca2+-binding (E1) and low-affinity Ca2+-releasing (E2) conformations, driven by ATP hydrolysis. The pump sequesters two Ca2+ ions per ATP consumed, establishing the steep Ca2+ gradient required for rapid myofilament relaxation.

## Regulation by SIRT1

[[SIRT1]] directly deacetylates SERCA2a at lysine residue [[K492]], restoring its ATPase activity and Ca2+ uptake capacity. In failing hearts, SERCA2a expression and activity are diminished, contributing to diastolic Ca2+ overload and contractile dysfunction. SIRT1-mediated deacetylation at K492 counteracts this defect, improving SR Ca2+ load, contractility, and relaxation in cardiomyocytes. Pharmacological activation of SIRT1 (e.g., with resveratrol or [[NAD+]] precursors) enhances SERCA2a function and represents a therapeutic strategy for [[Heart Failure|heart failure]].

## Clinical Relevance

Loss of SERCA2a activity is a hallmark of advanced heart failure. Gene therapy approaches delivering SERCA2a (e.g., AAV1/SERCA2a in the CUPID trials) have been explored clinically. The SIRT1–SERCA2a axis provides an additional post-translational node for therapeutic intervention through sirtuin activation.

## Connections

- [[SIRT1]] — Deacetylates SERCA2a at K492, restoring Ca2+-ATPase activity in cardiomyocytes
- [[NAD+]] — Substrate for SIRT1 in the deacetylation reaction; NAD+ repletion potentiates SERCA2a function
- [[Heart Failure]] — Pathological state in which SERCA2a expression and activity are suppressed
- [[Resveratrol]] — SIRT1 activator shown to enhance SERCA2a activity in preclinical models
- [[Sarcoplasmic Reticulum]] — Subcellular compartment where SERCA2a resides and functions

## Linking Summary

- New links added: [[SERCA2a]], [[K492]], [[Heart Failure]], [[NAD+]], [[Resveratrol]], [[Sarcoplasmic Reticulum]]
- Suggested new entity notes to create: [[CUPID trial]], [[AAV1]]
- Strong connections to strengthen: [[SIRT1]] ↔ [[SERCA2a]]
