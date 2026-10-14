---
title: SERCA
description: SERCA pumps are the sacro/endoplasmic reticulum Ca2+-ATPase family of P-type ATPases encoded by ATP2A1-3, which move cytosolic calcium into the ER/SR lumen against gradient and thereby terminate muscle contraction, buffer cytosolic calcium and shape calcium signalling.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [protein-family, membrane-transport, calcium-signaling, p-type-atpase]
aliases: [SERCA, SERCA pump, sarco/endoplasmic reticulum Ca2+-ATPase, sarcoplasmic/endoplasmic reticulum calcium ATPase, SERCA pumps]
---

# SERCA

**SERCA** pumps (sarco/endoplasmic reticulum Ca²⁺-ATPases) are a family of P-type cation pumps in the membrane of the endoplasmic reticulum and its muscle-specialised derivative, the [[Sarcoplasmic Reticulum|sarcoplasmic reticulum (SR)]]. They hydrolyse ATP to move cytosolic Ca²⁺ into the organelle lumen, against a steep electrochemical gradient, and they are the principal mechanism by which cytosolic calcium is lowered in every nucleated cell. In muscle this is not a housekeeping function — it is the event that ends contraction.

> [!warning] The family and its dominant cardiac isoform are different things
> The vault's [[SERCA2a]] note covers the SERCA2a isoform (*ATP2A2*), which dominates in cardiac and slow-twitch muscle. That isoform is the one that matters for cardiac physiology, cardiac disease, and NAD⁺/[[SIRT1]]-dependent regulation. Links written simply as "SERCA" in the vault refer to the family or the machinery generically — for instance in [[Necrosis]] and [[Cardiomyocyte Toxicity]], where pump impairment is one of several converging causes of cytosolic calcium overload. Where the isoform is specifically meant, this note says SERCA2a.

## Genes and Isoforms

Three genes encode the family, and alternative splicing generates roughly ten isoforms:

| Gene | Main isoforms | Distribution |
| --- | --- | --- |
| *ATP2A1* | SERCA1a, SERCA1b | Fast-twitch (type II) skeletal muscle |
| *ATP2A2* | SERCA2a, SERCA2b, SERCA2c | SERCA2a in cardiac and slow-twitch muscle; SERCA2b ubiquitous and low-level |
| *ATP2A3* | SERCA3a–f | Mostly smooth muscle, brain, platelets |

Isoform abundance is developmentally regulated and shifts with normal [[Aging|ageing]] — an isoform-composition change that alters SR calcium handling independently of total SERCA expression. All isoforms transport two Ca²⁺ ions per ATPase cycle.

## Mechanism

SERCA alternates between E1 and E2 conformations, driven by ATP phosphorylation and dephosphorylation of a conserved aspartate:

- **E1 (high-affinity, cytosolic-facing)** binds cytosolic calcium with high affinity and low capacity.
- **Phosphorylation of the conserved Asp** locks the high-affinity state and commits the pump to the transport cycle, preventing calcium slip-back into the cytosol.
- **E2 (low-affinity, lumenal-facing)** opens to the lumen and releases calcium at low affinity.

The result is a roughly 10,000-fold calcium gradient across the SR membrane with a lumen calcium concentration an order of magnitude above cytosolic. The structural mechanism is well characterised from SERCA1a crystal structures capturing most conformational states along the cycle.

## Physiological Roles

- **Excitation–contraction coupling** — SR calcium release via the [[Ryanodine Receptor]] activates contraction; SERCA must remove the calcium again for relaxation. SERCA activity therefore sets relaxation rate (lusitropy) directly, and reduced SERCA function produces diastolic calcium overload.
- **Calcium buffering in all cells** — the ER lumen holds the largest intracellular calcium store, and SERCA's pumping maintains both store load and low resting cytosolic calcium. Calcium-dependent signalling — gene expression, secretion, metabolism, cell death — is gated by this gradient.
- **ER stress coupling** — ER calcium depletion impairs protein folding and activates the unfolded protein response; SERCA activity is upstream of that.
- **Platelet activation** — the dense tubular system of resting platelets is an SERCA3-rich calcium store, and its depletion is part of the activation response.
- **Mitochondrial calcium crosstalk** — ER calcium taken up by the mitochondrial calcium uniporter shapes mitochondrial metabolism; SERCA's refill rate sets how much calcium is available for that transfer.

> [!important] Regulation is dense, and much of it is redox-sensitive
> SERCA isoforms are subject to sumoylation, phosphorylation, **acetylation**, glutathionylation, ubiquitination and nitration, and isoform-specific residues are disproportionately enriched in reported modification sites. Redox and nitration modification of SERCA is a direct route by which oxidative stress becomes a contractile defect — which is why SERCA sits alongside mitochondrial damage in the cardiotoxicity and necrosis notes of this vault. In cardiac muscle, phospholamban is the dominant physiological brake on SERCA2a, and its phosphorylation state sets the pumping rate.

## Pathology

- **Heart failure** — reduced SERCA2a expression and activity is a hallmark of both systolic and diastolic dysfunction, producing SR calcium overload, slowed relaxation and defective calcium sparks that contribute to arrhythmogenesis.
- **Calcium overload in cardiotoxicity and necrosis** — SERCA impairment, whether from oxidative/nitrosative modification, ATP depletion, or direct adduct formation, is a shared contributor to the cytosolic calcium rise that activates calpains, phospholipases and the mitochondrial permeability transition in dying cells.
- **Darier disease** — loss-of-function *ATP2A2* mutations cause a skin disorder with keratotic papules and nail abnormalities, highlighting that even non-muscle SERCA2 matters for epithelial adhesion.
- **Vacuolar myopathy** — a homozygous *ATP2A2* variant has been described altering SERCA2 function in skeletal muscle and producing a novel vacuolar myopathy (medRxiv, 2024).

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease]] — establishes the SIRT1–SERCA2a axis in heart failure: reduced SERCA2a level and activity are major features of failing hearts, SIRT1 knockout elevates SERCA2a acetylation and causes dysfunction and cardiac defects, and pharmacological SIRT1 activation restores SERCA2a activity by deacetylation at K492.

## Connections

- [[SERCA2a]] — the dominant cardiac isoform and the child of this family note; everything the vault says about SERCA in cardiac physiology, heart failure and sirtuin regulation refers to this isoform specifically.
- [[Sarcoplasmic Reticulum]] — the organelle whose membrane houses SERCA; calcium release from this lumen triggers contraction and SERCA refills it.
- [[Ryanodine Receptor]] — the release channel on the same membrane; SERCA and the ryanodine receptor are the paired uptake and release arms of SR calcium cycling, and their relative activity determines calcium spark dynamics.
- [[Ca2+]] — the substrate and the signal; SERCA is one of the two or three systems (with the plasma-membrane calcium ATPase and the sodium-calcium exchanger) that set resting cytosolic calcium.
- [[SIRT1]] — deacetylates SERCA2a at K492, restoring pump activity; this is the vault's clearest NAD⁺-dependent control point for calcium homeostasis.
- [[Heart Failure]] — reduced SERCA2a expression and activity is a major molecular feature, and the target of gene-transfer and pharmacological restoration strategies.
- [[Necrosis]] — SERCA impairment is one of the converging routes to cytosolic calcium overload and the activation of calcium-dependent proteases in necrotic cell death.
- [[Cardiomyocyte Toxicity]] — anthracycline and other cardiotoxin injury compromises SERCA alongside the ryanodine receptor, contributing to disrupted calcium handling and contractile failure.
- [[Mitochondria]] — ER calcium refilled by SERCA is what the mitochondrial calcium uniporter takes up, linking SERCA to mitochondrial metabolism.
- [[Oxidative Stress]] — redox and nitration modification of SERCA converts oxidative stress into a direct contractile defect.

## Linking Summary

- New links added: [[SERCA2a]], [[Sarcoplasmic Reticulum]], [[Ryanodine Receptor]], [[Ca2+]], [[SIRT1]], [[Heart Failure]], [[Necrosis]], [[Cardiomyocyte Toxicity]], [[Mitochondria]], [[Oxidative Stress]]
- Suggested notes to create: [[Phospholamban]] (the dominant physiological inhibitor of cardiac SERCA2a, already flagged as a missing note by the SERCA2a note), [[ATP2A1]] and [[ATP2A3]] (the sibling genes, which the SERCA2a note's sibling list does not yet cover), [[Sarco-Endoplasmic Reticulum Calcium ATPase]] as a gene-family-level note if the gene cluster is worth its own page, [[Calcium Spark]] (the local release event SERCA terminates), [[Darier Disease]] (the *ATP2A2* loss-of-function phenotype), [[Lusitropy]] (relaxation rate, the functional readout of SERCA activity), [[Na+/Ca2+ exchanger]] (the competing extrusion route that SERCA's failure shifts calcium onto)
- Strong connections to strengthen: [[SERCA]] ↔ [[SERCA2a]] ↔ [[SIRT1]] (the family/isoform split is now resolved, but the SERCA2a note should reciprocally link back to this family note), [[Cardiomyocytes]] ↔ [[SERCA]] ↔ [[Ryanodine Receptor]] (the cardiomyocyte note writes "SERCA2a pump" behind a [[SERCA]] link; the release/uptake pairing is the vault's most-used cardiac mechanism), [[Necrosis]] ↔ [[SERCA]] ↔ [[Ca2+]] (calcium overload as a shared route to necrotic death is asserted in three notes with no shared anchor), [[Cardiomyocyte Toxicity]] ↔ [[SERCA]] ↔ [[Heart Failure]] (SERCA dysfunction is the mechanistic bridge between cardiotoxin exposure and chronic heart failure, and neither note says so)