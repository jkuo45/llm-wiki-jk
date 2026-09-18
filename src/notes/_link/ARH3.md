---
title: ARH3
description: ARH3 (ADPRHL2) is a 39-kDa Mg2+-dependent ADP-ribosylhydrolase that
  erases serine-MARylation and degrades PAR exoglycosidically
protected: false
created: 2026-09-06
updated: 2026-09-14
tags: [enzyme, adp-ribosylation, dna-repair, parthanatos, neurodegeneration]
url: #
source: #
aliases: [ADP-ribosylhydrolase 3, ADPRHL2, ARH3, Poly(ADP-ribose) glycohydrolase-like enzyme]
---

# ARH3

**ARH3** (ADP-ribosylhydrolase 3, gene `ADPRHL2`) is the 39-kDa mammalian poly(ADP-ribose) glycohydrolase-like enzyme identified by Oka, Kato and Moss (J Biol Chem 2006). It is the third member of the ARH family (ARH1/ARH2/ARH3) and the only known hydrolase that removes serine-linked mono-ADP-ribose, plus a slow exoglycosidase for [[PAR]] chains, [[O-acetyl-ADP-ribose]] and alpha-[[NAD+]].

> [!info] ARH3 in one sentence
> [[PARP1]]/HPF1 writes serine-ADPr to initiate [[PAR]]; [[PARG]] degrades long chains endo/exo but cannot remove the terminal protein-linked ADPr; ARH3 finishes the job by cleaving the Ser-ADPr bond and trimming short/free PAR, suppressing [[Parthanatos]].

## Overview

- 363 aa, ~39 kDa, 6 exons, N-terminal mitochondrial-targeting sequence.
- Ubiquitous: ~65% cytosol, ~25% mitochondrial matrix, ~10% nucleus.
- 41% similarity / ~20% identity to ARH1; vicinal Asp77/Asp78 plus Asp314/Asp316 coordinate a binuclear Mg2+ center; Glu41 is catalytic.
- Substrates: Ser-ADPr (primary physiological), [[PAR]] O-glycosidic bond, `O-acetyl-ADP-ribose`, alpha-[[NAD+]]; only trace activity on Arg-ADPr at high enzyme/long incubation (ARH1 is the Arg eraser). No activity on Cys/Asn/diphthamide linkages.
- Competitively inhibited by ADP-ribose; stereospecific for the alpha-anomer at C-1''.

## Structure & Catalytic mechanism

Crystal structures (Mueller-Dieckmann et al. 2006 apo; later ADPr-bound) show an ARH fold distinct from the macrodomain of [[PARG]]: a narrow cavity docking only the terminal ADP-ribose, explaining strict exo-mode cleavage.

MgA aligns substrate, MgB mediates binding; Glu41 activates water351 for nucleophilic attack on C1' of the distal ribose. Ca2+ distorts the dimetal center and inhibits. Key mutants D77N/D78N, E41Q abolish activity while retaining ADP-ribose binding.

Compared with [[PARG]]: [[PARG]] (macrodomain, Glu755/Asp737, no metals) cleaves endo- and exo-, prefers long protein-bound chains, generates free oligo-PAR + monomers but leaves terminal MAR; ARH3 cleaves any-length chains exo-only plus the protein-Ser bond.

## Physiological function

- **DNA-damage reversal:** with [[PARG]], completes the PAR cycle. [[PARG]] removes bulk polymer; ARH3 removes terminal Ser-MAR on [[PARP1]], histones and hundreds of HPF1-dependent substrates. `ARH3-KO` cells accumulate Ser-MAR; `HPF1-KO` shows the opposite.
- **Mitochondrial PAR/OAADPr control:** only active mitochondrial PAR degrader — short [[PARG]] splice forms PARG55/60 lack exon 5 and are inactive. By degrading OAADPr from [[SIRT3]]/[[SIRT5]] deacetylation, links [[Sirtuins]] to mitochondrial redox.
- **Parthanatos brake:** `Arh3-/-` MEFs show exaggerated nuclear [[PAR]] at 10 min post-H2O2, cytoplasmic translocation by 30 min, [[Apoptosis-Inducing Factor|AIF]] release and caspase-independent death. Re-expression rescues. Cytoplasmic [[PAR]] also inhibits Rab5 endocytosis in this model. Caveat (2026 RPE1/MNNG preprint, bioRxiv 2026.05.12.724507): ARH3 KO had no effect on parthanatos execution in that system — protective role is insult/cell-type dependent.

> [!info]
> Source: [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> The review positions ARH3 with [[PARG]] as the hydrolase pair that erases [[PAR]] and liberates free [[ADP-ribose]]: [[PARG]] removes bulk polymer, ARH3 trims short/free chains and the terminal protein-linked ADP-ribose. Whether PAR hydrolases promote or inhibit parthanatos is one of the review's open questions, and ARH3's contribution is model-dependent (protective in ischaemia/H2O2 systems, dispensable in MNNG/RPE1).

## Pathology & Clinical relevance

- **CONDSIAS:** biallelic `ADPRHL2` loss causes stress-induced childhood-onset neurodegeneration with variable ataxia and seizures (autosomal recessive); severe cases fatal. PARP inhibition prevents [[PAR]] accumulation and death in ARH3-deficient cells — proposed therapeutic.
- **Ischemia / oxidative stress:** ARH3 loss sensitizes to ischemia; overexpression protects. Complements nuclear 110-kDa [[PARG]]: [[PARG]] endo-activity generates exportable free [[PAR]]; ARH3 trims it.
- **Cancer:** short oligomers (<5 units) are poor [[PARG]] substrates; ARH3 may compensate, implying ARH3 inhibition could potentiate [[PARG]] inhibitors / [[PARP inhibitors]] trapping. Selective ARH3 inhibitors in preclinical development.

## Documents

List of documents that mention this entity

- [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
  - Places ARH3 in the PAR-erasure pair with [[PARG]]; PAR-hydrolase promotion-vs-inhibition and free-ADP-ribose generation are open questions, and ARH3 is dispensable in the MNNG/RPE1 parthanatos model.

## Connections

- [[PARP1]] — writes the Ser-ADPr/PAR signal ARH3 erases; HPF1 complex defines the initiation site.
- [[PARG]] — partner eraser; bulk endo/exo PARase that cannot remove terminal MAR.
- [[PAR]] — co-substrate; long chains to PARG, short/free chains and terminal residue to ARH3.
- [[Parthanatos]] — ARH3 suppresses PAR-AIF death; loss sensitizes.
- [[Apoptosis-Inducing Factor|AIF]] — downstream effector released by the PAR ARH3 normally clears.
- [[NAD+]] — alpha-NAD+ substrate; PAR turnover restores the energy reservoir.
- [[Sirtuins]] — OAADPr from SIRT deacetylation is an ARH3 substrate.
- [[ADP-ribosylation]] — ARH3 is the Ser-deMARylase arm of the cycle.
- [[ARH1]] — paralog; Arg-specific, <1% PAR activity of ARH3.
- [[PARP inhibitors]] — rescue ARH3-deficiency phenotypes; synergy rationale with PARG inhibitors.

## Linking Summary

- New note in src/notes/_link/ as cross-topic entity (sirtuins / cell-death / DNA repair).
- New links added: [[PARP1]], [[PARG]], [[PAR]], [[Parthanatos]], [[Apoptosis-Inducing Factor|AIF]], [[NAD+]], [[Sirtuins]], [[ADP-ribosylation]], [[ARH1]], [[PARP inhibitors]], [[O-acetyl-ADP-ribose]], [[SIRT3]], [[SIRT5]].
- Suggested new entity notes to create: [[PARG]], [[ARH1]], [[HPF1]].
- Strong connections to strengthen: [[ARH3]] ↔ [[PARG]], [[ARH3]] ↔ [[Parthanatos]], [[ARH3]] ↔ [[ADP-ribosylation]].
- Source enrichment (2026-09-14): Moura et al. 2024 — ARH3 as the second eraser liberating free [[ADP-ribose]]; model-dependent role in parthanatos. New links: [[ADP-ribose]].
