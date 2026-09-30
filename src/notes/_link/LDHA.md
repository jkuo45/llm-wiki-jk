---
title: LDHA
description: Lactate dehydrogenase A, the muscle-type M subunit of the LDH
  tetramer, which catalyses pyruvate-to-lactate conversion and regenerates NAD+
  under anaerobic conditions; upregulated in tumours, where it sustains the
  Warburg effect.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - metabolism
  - cancer
aliases: [Lactate Dehydrogenase A, LDH-A, M4, LDH1, GSD11, HEL-S-133P]
---

# LDHA

**LDHA** is the *A* (M, muscle) subunit of the lactate dehydrogenase family,
encoded by the *LDHA* gene on chromosome 11p15.1. It catalyses the reversible
oxidation of [[Pyruvate]] to [[L-lactate]] with the coupled reduction of
[[NADH]] to [[NAD+]]:

> pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺

It functions as one subunit of a **tetramer** alongside its sister subunit
[[LDHB]].

## Mechanism

> [!info] The point of LDH is cofactor regeneration, not energy
> [[Glycolysis]] ends at pyruvate. If pyruvate cannot enter the mitochondrion —
> because oxygen is limiting, or because mitochondria are not being used —
> glycolysis stalls and [[NAD+]] is exhausted, since the NADH made at GAPDH has
> nowhere to go. LDHA closes the loop by oxidising pyruvate back to lactate,
> regenerating NAD+ so the glyceraldehyde-3-phosphate dehydrogenase step can
> keep running. This is what allows ATP generation to continue without oxygen,
> and it is why the reaction is described as fermentative despite making no
> ATP itself.

Human LDH uses **His193** as the catalytic proton acceptor, coordinated with
NADH-binding residues Arg99/Asn138 and substrate-binding residues Arg106,
Arg169, and Thr248. The signature difference between the subunits is a single
residue substitution — alanine in LDHA replaced by glutamine in LDHB — which
modestly changes NAD+ binding kinetics and substrate specificity but does not
change the active-site chemistry.

## Isoenzymes and tissue distribution

LDH is a family of five tetramers with different tissue distributions:

| Isoform | Subunits | Predominant tissue |
| --- | --- | --- |
| LDH-1 | 4 H | Heart, red blood cells, brain |
| LDH-2 | 3 H : 1 M | Reticuloendothelial system |
| LDH-3 | 2 H : 2 M | Lung |
| LDH-4 | 1 H : 3 M | Kidney, placenta, pancreas |
| LDH-5 | 4 M | Liver, striated muscle, brain |

Two additional subunits exist: **LDHC** (testis-specific) and **LDHBx**, a
readthrough product of the *LDHB* transcript in which the stop codon is
reinterpreted, adding seven residues including a peroxisomal targeting signal —
giving peroxisomal lactate oxidation capacity that the canonical enzyme lacks.

> [!info] The Nernst consequence
> Because LDH-1 predominates in myocardium, myocardial injury releases an
> LDH-1-rich enzyme pool, and an LDH-1 > LDH-2 ratio (an "LDH flip") signals
> infarction. This has largely been superseded clinically by troponin I and T,
  which are far more specific. LDHA/LDH-5 is instead a marker of liver and
  skeletal muscle damage.

## Cancer metabolism

LDHA is one of the most consistently upregulated genes in human cancers, and it
is a *driver*, not merely a marker, of the [[Warburg Effect]]:

- Regenerating [[NAD+]] keeps glycolysis running, and glycolysis supplies the
  ribose and biosynthetic intermediates proliferating cells need.
- Lactate is not a waste product but a fuel and a signalling molecule: it
  drives tumour acidification, suppresses hypoxic immune effector function,
  and is imported by other cells — including activated [[T Cell|T cells]] —
  for oxidation.
- LDHA expression is induced by hypoxia through [[HIF-1α]], which binds an
  HRE in the *LDHA* promoter.

> [!warning] Clinical caveat — the LDH-to-lactate fallacy
> Elevated serum LDH correlates with tumour burden and is used in monitoring
  many malignancies, but circulating LDH is largely a marker of cell lysis and
  release, not evidence that the enzyme is driving glycolysis in the tumour.
  Conversely, the claim that a tumour's lactate comes from LDHA specifically is
  over-read: LDHB is expressed in many tumours and both subunits form mixed
  tetramers in vivo. LDHA-selective inhibition as a therapeutic strategy has
  strong preclinical rationale but limited clinical validation, and inhibiting
  LDH risks impairing the anaerobic glycolysis of normal tissue in the same
  tumour.

**LDHA inhibitors** include oxamate, epigallocatechin gallate, quinoline
3-sulfonamides, and the liver-targeted clinical candidate CHK-336, developed
for primary hyperoxaluria. Oxamate and phenformin show synergy in
preclinical models.

## Genetics and disease

Biallelic *LDHA* variants cause **exertional myoglobinuria** — exercise-induced
muscle cramps, rhabdomyolysis, haemoglobinuria, and elevated CK — with
compensatory upregulation of muscle LDHB. Chronic haemolysis from
haemoglobinuria is a distinctive secondary feature.

## Connections

- [[LDHB]] — LDHA's heterodimer partner; the two subunits assemble
  combinatorially into five isoforms, and the LDHA/LDHB ratio is what reports
  tissue of origin in the serum isoenzyme pattern. The stub's sole inbound
  document link is retained in the Documents section.

- [[Pyruvate]] — The substrate. LDHA is the enzyme that decides whether
  pyruvate is oxidised in the mitochondrion by
  [[Pyruvate Dehydrogenase]] or reduced to lactate;
  that branch point is the core of aerobic-versus-anaerobic metabolism.

- [[Warburg Effect]] — LDHA upregulation is the enzyme-level mechanism of
  aerobic glycolysis in cancer. Warburg's observation that tumours ferment
  glucose even with oxygen available is, in modern terms, a statement about
  maintained glycolytic flux and NAD+ recycling.

- [[L-lactate]] — The product, and an active metabolite in its own right:
  a fuel for oxidative tissue, a substrate for gluconeogenesis via the Cori
  cycle, and a paracrine signal that suppresses immune effector cells.

- [[Glycolysis]] — LDHA maintains the NAD+/NADH ratio that allows the
  energy-yielding phase of glycolysis to continue. Without it, anaerobic ATP
  production halts.

- [[HIF-1α]] — The transcriptional regulator that induces LDHA under hypoxia.
  This couples LDHA upregulation to the oxygen status of the tumour
  microenvironment.

- [[NADH]] and [[NAD+]] — The cofactor pair whose ratio LDHA directly sets.
  The enzyme sits upstream of the [[Sirtuins]] and the
  mitochondrial redox chain, which is why lactate metabolism and NAD+ salvage
  are mechanistically linked in the vault's redox notes.

- [[Exercise]] — Exertional myoglobinuria from *LDHA* deficiency is one of the
  clearest genotype-to-phenotype links in metabolic myopathy, and the
  distinguishing feature is that muscle pain and pigmenturia are provoked by
  anaerobic exercise specifically.

- [[Cancer]] — LDHA is among the most reproducibly upregulated metabolic genes
  across tumour types, and the therapeutic attempt to exploit it runs into the
  problem that normal tissue shares the same glycolytic dependency.

## Documents

- [[LDHB]]
  - The stub's sole inbound document link, retained. Supplies the heterodimer
    partner and the five-isoenzyme framework that gives LDHA its tissue
    context.

## Linking Summary

- New links added: [[Pyruvate]], [[L-lactate]], [[Glycolysis]], [[NADH]],
  [[NAD+]], [[Warburg Effect]], [[Hypoxia]], [[HIF-1α]], [[Cancer]],
  [[Exercise]], [[Sirtuins]], [[Peroxisome]], [[Metabolites]]
- Suggested notes to create: [[Lactate Dehydrogenase]], [[LDHC]], [[LDHBx]],
  [[Lactate Shuttle]], [[Cori Cycle]], [[Oxamate]],
  [[Myoglobinuria]], [[Glucose Transporter 1]], [[Tumor Microenvironment]]
- Strong connections to strengthen: [[LDHA]] ↔ [[LDHB]], [[LDHA]] ↔ [[Warburg Effect]],
  [[LDHA]] ↔ [[Pyruvate]], [[LDHA]] ↔ [[HIF-1α]]
