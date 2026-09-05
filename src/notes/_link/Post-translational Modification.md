---
title: Post-translational Modification
description: Covalent modifications of proteins after ribosomal synthesis that rapidly
  alter protein function, localization, stability, and interactions, expanding the
  functional proteome far beyond the 20 canonical amino acids.
created: 2026-08-31
updated: 2026-08-31
tags:
  - scientific-concept
aliases:
  - PTM
  - post-translational modifications
  - posttranslational modification
---

# Post-translational Modification

**Post-translational modifications (PTMs)** are covalent chemical modifications of proteins that occur after or during ribosomal synthesis. By covalently modifying amino acid side chains or protein backbones, PTMs expand the functional diversity of the proteome far beyond the 20 canonical amino acids — enabling an estimated >1,000,000 proteoforms from ~20,000 human genes. PTMs regulate virtually every aspect of protein biology: activity, conformation, localization, stability, charge, and intermolecular interactions.

> [!important]
> More than **650 types** of protein modifications have been described to date (UniProt PTM list), with >2,000,000 PTM sites experimentally validated. The most common PTMs — phosphorylation, acetylation, methylation, ubiquitination, and glycosylation — account for over 90% of reported modifications.

## Major Classes of PTMs

### Reversible Enzymatic Modifications

These are the best-characterized and most dynamically regulated PTMs:

| Modification | Target Residues | Writer Enzymes | Eraser Enzymes | Key Functions |
|---|---|---|---|---|
| **[[Phosphorylation]]** | Ser, Thr, Tyr (+ His, Asp) | Kinases | Phosphatases | Signal transduction, cell cycle, metabolism |
| **[[Acetylation]]** | Lys, N-terminus | HATs / Acyltransferases | HDACs / [[Sirtuins]] | Transcription, metabolism, protein stability |
| **[[Ubiquitination]]** | Lys | E1/E2/E3 cascade | DUBs | Protein degradation, signaling, DNA repair |
| **Methylation** | Lys, Arg | KMTs / PRMTs | KDMs / JMJDs | Epigenetics, transcription, signaling |
| **SUMOylation** | Lys | E1/E2/E3 (SUMO) | SENPs | Nuclear transport, transcription, DNA repair |
| **S-sulfhydration** | Cys | — | — | Redox signaling, vasodilation |
| **S-nitrosylation** | Cys | — | — | NO signaling, apoptosis |
| **ADP-ribosylation** | Various | PARPs / ARTs | ARHs / PARGs | DNA repair, transcription |

### Irreversible / Covalent Modifications

- **Proteolytic cleavage**: Proteases remove signal peptides, activate zymogens, and process precursors (e.g., proinsulin → insulin). This controls protein localization and activity.
- **Disulfide bond formation**: Oxidative formation of Cys–Cys bridges stabilizes extracellular proteins.
- **Citrullination**: PAD enzymes deiminate Arg to citrulline; regulates gene expression and is implicated in autoimmune diseases (rheumatoid arthritis).

### Non-Enzymatic Modifications

Many PTMs arise spontaneously from chemical reactions between reactive metabolites and amino acid side chains:

- **Oxidation** (carbonylation): ROS modify Pro, Arg, Lys, Thr residues — irreversible; marker of oxidative damage and aging.
- **Glycation**: Reducing sugars react with Lys/Arg to form advanced glycation end-products (AGEs); implicated in diabetes complications.
- **Malonylation, succinylation, crotonylation**: Lys acylations driven by metabolite availability (malonyl-CoA, succinyl-CoA, crotonyl-CoA); some are non-enzymatic.

## Writers, Erasers, and Readers

PTM regulation follows the **"Writer–Eraser–Reader"** paradigm:

1. **Writers** install modifications: kinases, acetyltransferases, methyltransferases, E1/E2/E3 enzymes
2. **Erasers** remove them: phosphatases, deacetylases (HDACs, [[Sirtuins]]), demethylases, DUBs
3. **Readers** recognize and translate modifications into downstream responses: bromodomains (acetyl-Lys), chromodomains (methyl-Lys), 14-3-3 domains (phospho-Ser/Thr), UBAs (ubiquitin)

This system enables rapid, reversible, and context-dependent regulation of protein function.

## PTM Crosstalk

PTMs rarely act in isolation. **PTM crosstalk** occurs when one modification influences another:

- **Priming**: One PTM creates a binding site or prerequisite for a second PTM (e.g., H3S10 phosphorylation primes H3K14 acetylation).
- **Competition**: Two PTMs compete for the same residue (e.g., Lys acetylation vs. methylation vs. ubiquitination on the same site).
- **Antagonism**: One PTM prevents another (e.g., phosphorylation blocks ubiquitination at the same site, stabilizing the protein).

> [!info]
> The acetylation–methylation–ubiquitination competition on Lys residues is a central regulatory mechanism in cancer. For example, p53 is regulated by >50 PTM sites, where the balance of acetylation, phosphorylation, and ubiquitination determines its transcriptional activity and protein stability.

## PTMs in Disease

### Cancer

- Dysregulated **phosphorylation** cascades (MAPK, JAK/STAT, PI3K/AKT) are a hallmark of cancer.
- Loss of tumor suppressors through aberrant **ubiquitination** (e.g., MDM2-mediated p53 degradation).
- Altered **acetylation** and **methylation** patterns reshape the epigenetic landscape, activating oncogenes or silencing tumor suppressors.

### Neurodegeneration

- **Tau hyperphosphorylation** is a defining feature of Alzheimer's disease.
- **α-Synuclein** phosphorylation at Ser129 is enriched in Lewy bodies in Parkinson's disease.
- Mutant huntingtin **palmitoylation** loss increases neurotoxicity in Huntington's disease.

### Metabolic Disease

- Protein **acetylation** regulates insulin sensitivity; global SIRT1 overexpression improves glucose tolerance.
- Disrupted **malonylation** of metabolic enzymes may contribute to type 2 diabetes.

### Aging

- Accumulation of irreversible oxidative PTMs (**carbonylation**, oxidation) marks protein damage during aging.
- Age-related decline in PTM enzyme activity (e.g., sirtuin activity declines with age, reducing NAD+-dependent deacetylation capacity).

## Sirtuins as PTM Regulators

The [[Sirtuins]] family (SIRT1–SIRT7) is a central group of **NAD+-dependent protein deacetylases** that regulate metabolic PTMs:

- **[[SIRT1]]**: Nuclear — deacetylates histones (H3, H4), p53, PGC-1α, NF-κB
- **[[SIRT2]]**: Cytoplasmic — deacetylates α-tubulin, histone H4K16
- **[[SIRT3]]**: Mitochondrial — deacetylates >100 mitochondrial substrates including [[MnSOD]], [[AceCS2]], [[PYCR1]], [[SHMT2]]
- **[[SIRT4]]**: Mitochondrial — ADP-ribosyltransferase activity
- **[[SIRT5]]**: Mitochondrial — desuccinylase, demalonylase, deglutarylase (regulates SHMT2, CPS1)
- **[[SIRT6]]**: Nuclear — deacetylates H3K9, H3K56; involved in DNA repair and telomere maintenance
- **[[SIRT7]]**: Nucleolar — deacetylates H3K18

## Connections

- [[Acetylation]] — The most extensively studied PTM regulated by sirtuins; acetyl-Lys marks on metabolic enzymes and histones
- [[Phosphorylation]] — The most abundant PTM in eukaryotes (~1/3 of the proteome is phosphorylated at any time)
- [[Ubiquitination]] — Targets proteins for proteasomal degradation; overlaps with acetylation on Lys residues
- [[Sirtuins]] — NAD+-dependent deacetylases (and deacylases) that serve as both erasers and metabolic sensors
- [[SIRT3]] — Mitochondrial deacetylase with >100 substrates; PTM of metabolic enzymes drives dual cancer roles
- [[Histone Modification]] — PTMs on histones regulate chromatin structure and gene expression
- [[Chromatin]] — PTM-driven chromatin remodeling controls DNA accessibility
- [[Gene Expression]] — PTMs regulate transcription factor activity and epigenetic marks
- [[Cancer]] — Dysregulated PTMs are a hallmark of cancer initiation and progression
- [[Aging]] — Irreversible oxidative PTMs accumulate; reversible PTM capacity declines
- [[Metabolism]] — PTMs link nutrient status to protein function (e.g., acetyl-CoA → acetylation; NAD+ → sirtuin activity)

## Documents

- [[_document_ - Post-translational Modification in Control of SIRT1 Stability during DNA Damage Response]]
  - Document note on PTM regulation of SIRT1 stability during DNA damage.

## Linking Summary

- New links added: [[Acetylation]], [[Phosphorylation]], [[Ubiquitination]], [[Sirtuins]], [[SIRT1]], [[SIRT2]], [[SIRT3]], [[SIRT4]], [[SIRT5]], [[SIRT6]], [[SIRT7]], [[MnSOD]], [[AceCS2]], [[PYCR1]], [[SHMT2]], [[Histone Modification]], [[Chromatin]], [[Gene Expression]], [[Cancer]], [[Aging]], [[Metabolism]]
- Suggested new entity notes to create: (PTM note is the new note)
- Strong connections to strengthen:
    - [[Post-translational Modification]] ↔ [[Sirtuins]] (sirtuins as major PTM erasers)
    - [[Post-translational Modification]] ↔ [[Cancer]] (PTM dysregulation in cancer)
    - [[Post-translational Modification]] ↔ [[Aging]] (PTM accumulation and decline)
