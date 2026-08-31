---
title: One-Carbon Metabolism
description: A network of interconnected folate- and methionine-cycle reactions that transfer one-carbon units (methyl, methylene, methenyl, formyl, formimino) between metabolites, supporting nucleotide biosynthesis, amino acid homeostasis, methylation, and redox balance.
created: 2026-08-31
updated: 2026-08-31
tags:
  - biological-process
aliases:
  - one-carbon unit metabolism
  - folate cycle
  - one-carbon metabolism
---

# One-Carbon Metabolism

**One-carbon metabolism** is a network of interconnected reactions that transfer single-carbon units (formyl, methenyl, methylene, methyl, and formimino groups) between metabolites using the cofactor **tetrahydrofolate (THF)**. This metabolic network is essential for nucleotide biosynthesis, amino acid homeostasis, epigenetic methylation, and redox balance. It is frequently reprogrammed in [[Cancer]] to support rapid proliferation.

> [!important]
> One-carbon metabolism connects [[Serine]], [[Glycine]], [[Folate]], [[Methionine]], and the [[Sirtuins|sirtuin]]-dependent [[NAD+]] axis. It is a central hub linking diet, metabolism, the epigenome, and disease.

## Two Compartments: Cytosolic and Mitochondrial

One-carbon metabolism operates in parallel in the cytoplasm and the mitochondria, with different functional emphases:

### Mitochondrial One-Carbon Metabolism

The mitochondrial pathway is the dominant source of one-carbon units in proliferating cells (~75% of total production):

1. **[[Serine]] → [[Glycine]] + 5,10-methylene-THF** — catalyzed by [[SHMT2]]
2. **5,10-methylene-THF → 10-formyl-THF** — catalyzed by [[MTHFD2]] (also generates [[NADPH]])
3. **10-formyl-THF → Formate + THF** — catalyzed by MTHFD1L

Formate is exported to the cytoplasm where it re-enters the cytosolic folate cycle (via MTHFD1) to provide one-carbon units for:

- **De novo purine synthesis** (GAR, AICAR transformylases)
- **Thymidylate (dTMP) synthesis** (methylene-THF + dUMP → dTMP, via TYMS)
- **Methionine regeneration** (via [[Homocysteine]] → methionine)
- **SAM-dependent methylation** of DNA, RNA, histones, and lipids

### Cytosolic One-Carbon Metabolism

- Generates one-carbon units primarily for cytoplasmic nucleotide and amino acid synthesis.
- Serine hydroxymethyltransferase 1 (**SHMT1**) transfers from serine to THF.

## Role in Cancer

> [!warning]
> One-carbon metabolism is a hallmark of cancer metabolic reprogramming. Enzymes including [[SHMT2]], [[MTHFD2]], MTHFD1L, and cytosolic MTHFD1/MTHFD2 are frequently upregulated in tumors, where they fuel nucleotide biosynthesis and NADPH production.

- **SHMT2** is upregulated across many cancers and correlates with poor prognosis.
- The [[SIRT3]]–[[SHMT2]] axis: SIRT3 deacetylation of SHMT2 (Lys95) activates serine-to-glycine conversion, increasing one-carbon flux and NADPH — promoting colorectal carcinogenesis.
- **Anti-folate chemotherapeutics** and nucleotide-synthesis inhibitors (e.g., methotrexate, [[5-Fluorouracil|5-FU/pemetrexed]]) target one-carbon metabolism. 5-FU resistance in colorectal cancer is partly mediated by SHMT2-driven mitochondrial one-carbon metabolism, which replenishes nucleotide pools and supports DNA damage repair.

## Role in Aging and Healthspan

- One-carbon metabolism influences lifespan through methylation status, homocysteine balance, and NADPH/redox homeostasis.
- Dietary serine/glycine restriction can extend lifespan in animal models, partly by modulating one-carbon flux and [[IGF-1]] signaling.
- Disruption of one-carbon metabolism is linked to neural tube defects (folate deficiency), cognitive decline, and cardiovascular disease.

## Connections

- [[Serine]] — The primary carbon donor for one-carbon metabolism (via SHMT2/SHMT1)
- [[Glycine]] — The co-product of serine-to-glycine conversion; also consumed by the glycine cleavage system
- [[SHMT2]] — Mitochondrial enzyme catalyzing serine → glycine + 5,10-methylene-THF; entry point for mitochondrial one-carbon metabolism
- [[MTHFD2]] — Mitochondrial enzyme generating NADPH and 10-formyl-THF; deacetylation substrate of SIRT3
- [[Folate]] — THF is the central one-carbon carrier cofactor
- [[NADPH]] — Produced by MTHFD2; essential for reductive biosynthesis and redox defense
- [[SIRT3]] — Regulates one-carbon metabolism via deacetylation of SHMT2 and MTHFD2
- [[Sirtuins]] — NAD+-dependent deacetylases connecting NAD+ status to one-carbon and amino acid metabolism
- [[Cancer]] — One-carbon metabolism is reprogrammed in tumors to support proliferation and chemoresistance
- [[Colorectal Cancer]] — SHMT2-driven one-carbon metabolism promotes CRC and 5-FU resistance
- [[5-Fluorouracil]] — Anti-cancer drug that targets nucleotide synthesis; its efficacy is modulated by one-carbon metabolism
- [[Homocysteine]] — Connected to one-carbon metabolism via methionine regeneration
- [[Methionine]] — Receives methyl groups from one-carbon metabolism for SAM production

## Documents

- [[_document_ - The-hallmarks-of-protein-and-amino-acid-restriction|The Hallmarks of Protein and Amino Acid Restriction]]
  - Discusses serine/glycine restriction and one-carbon metabolism in aging and lifespan.

## Linking Summary

- New links added: [[Serine]], [[Glycine]], [[SHMT2]], [[MTHFD2]], [[Folate]], [[NADPH]], [[SIRT3]], [[Sirtuins]], [[Cancer]], [[Colorectal Cancer]], [[5-Fluorouracil]], [[Homocysteine]], [[Methionine]]
- Suggested new entity notes to create: (One-Carbon Metabolism is the new note), [[MTHFD1L]], [[SHMT1]]
- Strong connections to strengthen:
    - [[One-Carbon Metabolism]] ↔ [[SHMT2]] (mitochondrial entry point)
    - [[One-Carbon Metabolism]] ↔ [[SIRT3]] (NAD+-linked regulation)
    - [[One-Carbon Metabolism]] ↔ [[Cancer]] (metabolic reprogramming)
