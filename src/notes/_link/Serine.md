---
title: Serine
description: A hydroxyl-bearing amino acid that serves as the primary substrate for mitochondrial
  one-carbon metabolism via SHMT2, linking amino acid metabolism to nucleotide biosynthesis,
  NADPH regeneration, and epigenetic regulation — a pathway frequently hijacked by cancer cells.
created: 2026-07-23
updated: 2026-08-31
tags:
  - amino-acid
  - chemical-compound
---

# Serine

**Serine** is a hydroxyl-bearing, non-essential amino acid with diverse roles in metabolism, signaling, and biosynthesis. Serine is the primary substrate for **mitochondrial one-carbon metabolism**, serves as a major site of regulatory [[Phosphorylation]] on proteins like [[DRP1]], and is a critical metabolite whose uptake and synthesis are frequently reprogrammed in [[Cancer]].

## Overview

Serine can be obtained from the diet or synthesized endogenously from the glycolytic intermediate 3-phosphoglycerate (via the phosphorylated pathway: PHGDH → PSAT1 → PSPH). Serine occupies a central metabolic hub, connecting:

- **Glycolysis** (serine is synthesized from a glycolytic intermediate)
- **One-carbon metabolism** (serine → glycine + one-carbon unit via [[SHMT2]])
- **Glutathione synthesis** (serine → cysteine → glutathione)
- **Sphingolipid biosynthesis** (serine + palmitoyl-CoA → ceramide)
- **Protein synthesis** and **Phosphorylation** (Ser residues are the most common phosphorylation target)

## Serine as a Phosphorylation Site

Serine is the **most abundant phosphorylated residue** in eukaryotic proteins (~86.4% of all phosphosites). This makes serine residues critical nodes in signal transduction.

### Regulatory Phosphorylation Sites on DRP1

- **Ser585**: phosphorylated by CDK1/cyclin B during mitosis, coordinating mitochondrial division with cell cycle progression.
- **Ser616**: phosphorylated by [[ERK|ERK2/MAPK1]], which activates fission.
- **Ser637**: phosphorylated by [[Protein Kinase A]], which retains DRP1 in the [[Cytosol|cytosol]], inhibiting fission and sparing mitochondria from autophagic degradation during starvation or cell death.

The opposing effects of these serine phosphorylations illustrate how a single protein integrates mitotic, growth-factor, and metabolic signals to maintain [[Mitochondrial Integrity]].

## Serine Metabolism and One-Carbon Metabolism

> [!important]
> Serine is the dominant source of one-carbon units in proliferating cells. The conversion of serine to glycine by [[SHMT2]] in the mitochondria is the **primary entry point** for one-carbon metabolism, which fuels nucleotide biosynthesis, NADPH regeneration, and methylation reactions.

### Mitochondrial One-Carbon Pathway

The mitochondrial pathway is now recognized as the dominant source of one-carbon units in cancer cells (~75% of total one-carbon production):

1. **Serine → Glycine + 5,10-methylene-THF** (catalyzed by [[SHMT2]])
2. **5,10-methylene-THF → 10-formyl-THF** (catalyzed by MTHFD2)
3. **10-formyl-THF → Formate + THF** (catalyzed by MTHFD1L)

Formate exported from mitochondria feeds the cytoplasmic folate cycle (MTHFD1), providing one-carbon units for:
- **De novo purine synthesis** (adenine, guanine)
- **Thymidylate (dTMP) synthesis** (via TYMS)
- **Methionine remethylation** and **SAM-dependent methylation** (DNA, RNA, histones, lipids)

### NADPH Production

The SHMT2 → MTHFD2 branch also generates NADPH, which is essential for:
- Reductive biosynthesis (fatty acid synthesis, nucleotide synthesis)
- Redox defense (regenerating reduced glutathione)
- Suppressing oxidative stress

## Role in Cancer

> [!warning]
> Serine metabolism is frequently hijacked by cancer cells. Many tumors are "serine-addicted" — they upregulate serine synthesis enzymes (PHGDH) or serine transporters to fuel one-carbon metabolism and support rapid proliferation.

- **Colorectal cancer**: [[SHMT2]] is significantly upregulated; [[SIRT3]] deacetylates SHMT2 at Lys95, activating serine metabolism and promoting carcinogenesis (Wei et al., *Nature Communications* 2018).
- **Breast cancer**: PHGDH amplification and serine synthesis pathway activation are common in estrogen receptor-negative breast cancers.
- **Lung cancer**: Serine catabolism through SHMT2 supports nucleotide biosynthesis and tumor growth.
- **Chemoresistance**: 5-Fluorouracil (5-FU) resistance in CRC is partly driven by SHMT2-mediated upregulation of one-carbon metabolism, which replenishes nucleotide pools and enhances DNA damage repair.

### SIRT3 as a Metabolic Regulator of Serine Metabolism

The [[SIRT3]]–[[SHMT2]] axis represents a critical link between mitochondrial NAD+ metabolism and amino acid-driven cancer metabolism:
- SIRT3 deacetylation activates SHMT2 → increased serine consumption → elevated NADPH → enhanced nucleotide synthesis and redox defense
- This is an oncogenic function of SIRT3 — the same deacetylase activity that protects normal cells (via [[MnSOD]]/[[IDH2]]) drives cancer through metabolic enzyme activation

## Role in Aging

- Serine availability and one-carbon metabolism decline with age in some tissues.
- Dietary serine/glycine restriction can extend lifespan in animal models, potentially by modulating IGF-1 signaling and one-carbon flux.
- The relationship between serine metabolism and aging is complex and context-dependent.

## Connections

- [[SHMT2]] — The mitochondrial enzyme that converts serine to glycine; the primary entry point for one-carbon metabolism in cancer cells
- [[Glycine]] — The co-product of serine-to-glycine conversion; also used for glutathione synthesis
- [[NADPH]] — Generated by SHMT2/MTHFD2-driven one-carbon metabolism; essential for reductive biosynthesis and redox defense
- [[SIRT3]] — Deacetylates SHMT2 at Lys95, promoting serine metabolism and colorectal carcinogenesis
- [[Colorectal Cancer]] — SHMT2 is upregulated; SIRT3-SHMT2 axis drives serine-dependent proliferation
- [[Cancer]] — Serine metabolism is reprogrammed in many cancers; serine addiction is a metabolic hallmark
- [[Phosphorylation]] — Serine is the most abundant phosphorylated residue in eukaryotic proteins
- [[DRP1]] — Serine residues on DRP1 regulate mitochondrial fission
- [[Protein Kinase A]] — Phosphorylates DRP1 Ser637
- [[5-Fluorouracil]] — SHMT2-driven one-carbon metabolism contributes to 5-FU chemoresistance
- [[MTHFD2]] — Downstream enzyme in mitochondrial one-carbon metabolism
- [[Cysteine]] — Serine donates its carbon skeleton for cysteine biosynthesis
- [[Glutathione]] — Serine-derived cysteine is the rate-limiting precursor for glutathione synthesis
- [[Mitochondria]] — Serine catabolism occurs in the mitochondrial matrix via SHMT2

## Documents

- [[_document_ - Mitochondrial Fusion and Fission The fine-tune balance for cellular homeostasis|Mitochondrial Fusion and Fission review]]
  - Details DRP1 serine phosphorylation at Ser585, Ser616, and Ser637 by CDK1, ERK2, and PKA respectively.

- [[_document_ - The-hallmarks-of-protein-and-amino-acid-restriction|The Hallmarks of Protein and Amino Acid Restriction]]
  - Reviews the roles of serine in aging and dietary restriction.

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease]]
  - Describes SIRT3 deacetylation of SHMT2 and its role in serine metabolism and colorectal cancer.

## Linking Summary

- New links added: [[SHMT2]], [[Glycine]], [[NADPH]], [[SIRT3]], [[Colorectal Cancer]], [[Cancer]], [[5-Fluorouracil]], [[MTHFD2]], [[Cysteine]], [[Glutathione]], [[Mitochondria]], [[Phosphorylation]], [[DRP1]], [[Protein Kinase A]], [[ERK]], [[Cytosol]], [[Mitochondrial Fission]], [[Mitochondrial Integrity]]
- Suggested new entity notes to create: [[Cytosol]], [[MTHFD1L]], [[SHMT1]]
- Strong connections to strengthen:
    - [[Serine]] ↔ [[SHMT2]] (substrate-enzyme)
    - [[Serine]] ↔ [[SIRT3]] (indirect via SHMT2 deacetylation)
    - [[Serine]] ↔ [[Colorectal Cancer]] (serine metabolism in CRC)
    - [[Serine]] ↔ [[Cancer]] (metabolic reprogramming)
