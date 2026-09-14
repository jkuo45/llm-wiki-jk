---
title: TARG1
description: TARG1 (OARD1/C6orf130) is a macrodomain ADP-ribosylhydrolase erasing Asp/Glu-MARylation and terminal PAR
protected: false
created: 2026-09-08
updated: 2026-09-08
tags: [enzyme, adp-ribosylation, dna-repair]
url: #
source: #
aliases: [Terminal ADP-ribose glycohydrolase 1, OARD1, O-acyl-ADP-ribose deacylase 1, C6orf130]
---

# TARG1

**TARG1** (terminal ADP-ribose glycohydrolase 1, gene `OARD1`, formerly `C6orf130`) is a macrodomain-family [[ADP-ribosylation]] eraser. It hydrolyzes mono-ADP-ribose linked to aspartate/glutamate residues, cleaves the terminal protein-proximal ADP-ribose of [[PAR]] chains, and deacylates O-acyl-ADP-ribose metabolites (O-acetyl, O-propionyl, O-butyryl) to ADP-ribose plus short-chain fatty acid.

> [!info] TARG1 in one sentence
> After [[PARG]] trims bulk [[PAR]], TARG1 removes the last protein-linked ADP-ribose on Asp/Glu plus O-acyl-ADP-ribose, guarding replication and DNA repair; its loss is synthetic lethal with [[PARG]] deficiency.

## Overview

- ~17 kDa macrodomain protein (human OARD1); structures solved apo (4J5Q), ADP-ribose-bound (4J5S), ADP-HPD-bound (4J5R).
- Substrates: Asp/Glu-MARylation, terminal Asp/Glu-linked [[PAR]] residue, O-acyl-ADP-ribose; inactive toward Arg/Lys-linked MARylation.
- ADP-ribose product feedback-inhibits the deacylase reaction.
- Nucleolar / DNA-damage-site localization; recruited after genotoxic stress.

## Structure & Catalytic mechanism

Macrodomain fold (compact alpha-beta-alpha sandwich) with an ADP-ribose-binding cleft distinct from [[PARG]]. Catalytic residues for OAADPr/MAR hydrolysis are not conserved with MacroD1/MacroD2, indicating a different residue set performing the same 1''-ester hydrolysis: activated water attacks the C1'' of the protein-proximal ribose, releasing unmodified Asp/Glu.

## Physiological function

- **DNA-damage reversal:** removes Asp/Glu-MARylation written by [[PARP1]]/[[PARP2]]/PARP10-family writers; loss sensitizes cells to topoisomerase-II, ATR, and [[PARP inhibitors]].
- **PARG partnership:** [[PARG]] cannot remove terminal protein-linked MAR; TARG1 completes erasure. Dual TARG1/PARG loss causes toxic [[ADP-ribosylation]] accumulation, replication stress, and genomic instability ([[PARP1]]-mediated).
- **Metabolite cleanup:** converts O-acetyl-ADP-ribose (sirtuin by-product, see [[Sirtuins]]) to ADP-ribose; requires prior [[PAR]] degradation by [[PARG]] for full flux.

## Pathology & Clinical relevance

- TARG1/PARG synthetic lethality proposed as cancer biomarker for PARP/PARG inhibitor response; `HPF1` deficiency (serine-pathway switch) exacerbates TARG1-loss toxicity.
- Germline variation in `OARD1` linked in GeneCards to developmental phenotypes (brachydactyly entries); mechanistic disease role still emerging.
- Viral-macrodomian drug-design parallel: human TARG1/MacroD chemistry informs inhibitors of SARS-CoV nsp3 macrodomain de-MARylation (see [[SARS-CoV-2]]).

## Documents

List of documents that mention this entity

No documents ingested yet.

## Connections

- [[PARG]] — upstream bulk PARase; synthetic-lethal partner.
- [[PARP1]] — writer whose Asp/Glu marks TARG1 erases.
- [[PAR]] — terminal-residue substrate after chain trimming.
- [[MacroD1]] — paralogous Asp/Glu eraser, mitochondrial.
- [[MacroD2]] — paralogous Asp/Glu eraser, cytosolic/nuclear.
- [[ARH3]] — complementary Ser-MAR eraser; HPF1 crosstalk node.
- [[ARH1]] — complementary Arg-MAR eraser.
- [[ADP-ribosylation]] — Asp/Glu-deMARylation arm of the cycle.
- [[PARP inhibitors]] — sensitizing drug class in TARG1-deficient cells.
- [[Sirtuins]] — OAADPr producers upstream of TARG1 deacylase activity.

## Linking Summary

- New note in src/notes/_link/ as cross-topic entity (dna-repair / sirtuins / cell-death).
- New links added: [[PARG]], [[PARP1]], [[PAR]], [[MacroD1]], [[MacroD2]], [[ARH3]], [[ARH1]], [[ADP-ribosylation]], [[PARP inhibitors]], [[Sirtuins]].
- Suggested new entity notes to create: [[HPF1]].
- Strong connections to strengthen: [[TARG1]] ↔ [[PARG]], [[TARG1]] ↔ [[ADP-ribosylation]].
