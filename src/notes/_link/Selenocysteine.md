---
title: Selenocysteine
description: Selenocysteine (Sec) is the 21st proteinogenic amino acid — a serine analog in which selenium replaces the side-chain oxygen. It is incorporated by recoding the UGA stop codon and serves as the catalytic residue of selenoenzymes (GPx, TrxR, deiodinases) that defend redox homeostasis.
created: 2026-08-24
updated: 2026-08-24
tags:
  - amino-acid
  - selenoprotein
  - redox
  - translation
  - antioxidant
aliases: [Sec, 21st amino acid, Selenylcysteine]
---

# Selenocysteine

**Overview:** [[Selenocysteine]] (Sec, symbol **U**) is the **21st amino acid** incorporated into proteins by the standard translational machinery. Structurally it is an analog of [[Serine]] (and [[Cysteine]]) in which the side-chain oxygen is replaced by selenium: HO–CH₂–CH(NH₂)–COOH → HSe–CH₂–CH(NH₂)–COOH. Because it is inserted **co-translationally at in-frame UGA codons** that would otherwise terminate translation, Sec is described as being encoded by the "recoded" stop codon rather than by a dedicated codon of its own.

## Structure and chemical distinctiveness

- The side chain is a **selenol (–SeH)**. Its pKa is ~5.2, far lower than the ~8.3 pKa of the [[Cysteine]] thiol.
- At physiological pH the selenol is predominantly **deprotonated to the selenolate (–Se⁻)**, a far stronger nucleophile and electrophile than the thiolate.
- This makes Sec the **catalytically superior** redox center of selenoenzymes: [[Glutathione Peroxidase]] and [[Thioredoxin reductase]] achieve peroxidase/thiol-reductase rates that cysteine analogs cannot match. See [[How Cysteine and Selenocysteine Guard Cells Against Aging and Oxidative Damage]] for a side-by-side redox comparison.

> [!info]
> Source: [[How Cysteine and Selenocysteine Guard Cells Against Aging and Oxidative Damage]]
> The lower pKa of the Sec selenol (~5.2 vs ~8.3 for Cys) means Sec is reactive in its deprotonated form at physiological pH, explaining its superior catalytic role in GPx and TrxR.

## Biosynthesis of the aminoacyl-tRNA

In eukaryotes and archaea, Sec is built **on its tRNA** rather than free in solution:

1. **Charging** — seryl-tRNA synthetase loads [[Serine]] onto tRNA[Ser]Sec → Ser-tRNA[Ser]Sec.
2. **Phosphorylation** — PSTK (O-phosphoseryl-tRNA kinase) converts it to O-phosphoseryl-tRNA[Ser]Sec.
3. **Substitution** — SepSecS (SEPSECS, selenocysteine synthase) replaces the phosphoseryl group with Sec, using **monoselenophosphate** as the selenium donor.
4. **Selenium activation** — [[Selenium]] is converted to monoselenophosphate by SEPHS2 (selenophosphate synthetase 2).

In bacteria the analogous pathway uses SelA (Sec synthase), SelD (selenophosphate synthetase), SelB (Sec-specific elongation factor), and SelC (tRNA[Ser]Sec).

## Mechanism of incorporation (UGA recoding)

- The **[[UGA codon]]**, normally a translation stop signal, is reinterpreted as Sec when the mRNA bears a **SECIS element** — a conserved stem-loop in the 3′UTR of eukaryotic selenoprotein mRNAs.
- **[[SECISBP2]]** (SBP2) binds the SECIS element and recruits the ternary complex of **eEFSec** (the dedicated Sec elongation factor), GTP, and tRNA[Ser]Sec, delivering Sec to the ribosomal A site.
- A **post-transcriptional modification** of tRNA[Ser]Sec — the 2′-*O*-ribose methylation **Um34** at position 34 — is required for efficient recoding of a subset of selenoproteins. **[[FTSJ1]]** is the Um34 methyltransferase; its loss causes ribosomal stalling and reduced UGA recoding (see [[Selenocysteine tRNA methylation promotes oxidative stress resistance in melanoma metastasis]]).

> [!important]
> Source: [[Selenocysteine tRNA methylation promotes oxidative stress resistance in melanoma metastasis]]
> FTSJ1-mediated Um34 methylation of tRNA[Ser]Sec is necessary for efficient selenocysteine insertion at UGA codons; loss of Um34 collapses antioxidant selenoprotein translation and suppresses melanoma metastatic colonization, positioning FTSJ1/Um34 as a metastasis-selective therapeutic target.

## Physiological functions (the selenoproteome)

Humans express ~25 [[Selenoprotein|selenoproteins]]. Major families:

- **Glutathione peroxidases ([[Glutathione Peroxidase|GPx1–GPx4, GPx6]])** — reduce hydroperoxides using [[Glutathione]]; [[Glutathione Peroxidase 4|GPx4]] is the central inhibitor of [[Ferroptosis]].
- **Thioredoxin reductases ([[Thioredoxin reductase|TrxR1–TrxR3]])** — maintain the [[Thioredoxin]] system and broad redox control.
- **Iodothyronine deiodinases (DIO1–DIO3)** — activate/inactivate thyroid hormone ([[Triiodothyronine]]).
- **Selenoprotein P** — [[Selenium]] transport and extracellular antioxidant defense.
- **Methionine sulfoxide reductases, selenoprotein N, selenoprotein H, and others** — protein repair, ER stress, redox signaling.

## Pathology and clinical relevance

- **Selenoprotein deficiency disorders** — loss-of-function mutations in [[SECISBP2]] or in the tRNA[Ser]Sec gene impair UGA recoding, causing reduced GPx/TrxR/deiodinase activity, abnormal thyroid hormone metabolism, and multisystem phenotypes.
- **Cancer — dual role.** Sec-dependent antioxidant enzymes suppress oxidative damage and genomic instability, yet the same antioxidant capacity can be co-opted by tumors: enhanced Um34-modified tRNA[Ser]Sec supports [[Melanoma]] metastatic survival under oxidative stress (Nease et al., 2024).
- **Aging and neurodegeneration.** With age, mitochondrial dysfunction raises [[Reactive Oxygen Species]] while [[Glutathione]] regeneration and selenoprotein expression decline, contributing to redox imbalance and neurodegenerative disease (Pace et al., 2025).
- **Dietary selenium** — selenoprotein expression is tuned by [[Selenium]] availability, linking nutrition to redox resilience.

#

## Documents

  - [[Selenocysteine tRNA methylation promotes oxidative stress resistance in melanoma metastasis]]
    - Identifies [[FTSJ1]] as the Um34 tRNA methyltransferase required for efficient UGA recoding of Sec; shows Sec translation drives melanoma metastasis.
  - [[How Cysteine and Selenocysteine Guard Cells Against Aging and Oxidative Damage]]
    - Narrative review contrasting the thiol (Cys) and selenol (Sec) redox defenses, Sec's pKa advantage, and selenoprotein decline in aging.

## Connections

  - [[FTSJ1]]: installs Um34 on tRNA[Ser]Sec; required for efficient UGA recoding of a subset of selenoproteins.
  - [[UGA codon]]: normally a stop codon; reinterpreted as Sec via the SECIS element.
  - [[SECISBP2]]: binds SECIS and recruits eEFSec/tRNA[Ser]Sec to the ribosome.
  - [[Selenium]]: source of the Sec side chain via monoselenophosphate (SEPHS2).
  - [[Glutathione Peroxidase]]: Sec is the catalytic residue reducing hydroperoxides.
  - [[Thioredoxin reductase]]: Sec-dependent reductase of the thioredoxin system.
  - [[Ferroptosis]]: GPx4 (a Sec enzyme) is the central brake on ferroptotic death.
  - [[Oxidative Stress]]: Sec-containing enzymes are the principal buffer of ROS.
  - [[Melanoma]]: Sec translation (Um34-dependent) enables metastatic oxidative-stress resistance.
  - [[Aging]]: selenoprotein expression and redox capacity decline with age.

## Linking Summary

  - New links added: [[FTSJ1]], [[UGA codon]], [[SECISBP2]], [[Selenoprotein]], [[Melanoma]], plus reinforcement of [[Selenium]], [[Glutathione Peroxidase]], [[Thioredoxin reductase]], [[Ferroptosis]], [[Oxidative Stress]], [[Aging]].
  - Suggested new entity notes to create: [[eEFSec]] (EEFSEC), [[SEPHS2]], [[PSTK]], [[SepSecS]], [[Deiodinase]], [[Selenoprotein P]]
  - Strong connections to strengthen: [[Selenocysteine]] ↔ [[FTSJ1]], [[Selenocysteine]] ↔ [[UGA codon]], [[Selenocysteine]] ↔ [[Ferroptosis]] (via GPx4)
