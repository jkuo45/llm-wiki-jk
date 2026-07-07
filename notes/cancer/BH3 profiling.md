---
title: BH3 profiling
description: Functional assay developed by Anthony Letai that determines a cancer cell's dependence on specific anti-apoptotic Bcl-2 family proteins and predicts sensitivity to BH3-mimetic drugs.
type: entity
created: 2026-07-06
updated: 2026-07-06
tags:
  - Analytical Technique
aliases: [BH3 profiling assay, mitochondrial priming assay]
---

# BH3 profiling

**BH3 profiling** is a functional assay developed by Anthony Letai and colleagues at the Dana-Farber Cancer Institute that determines the dependence of a cancer cell on specific anti-apoptotic [[Bcl-2]] family proteins. It measures mitochondrial apoptotic priming — how close a cell is to the threshold of committing to [[Apoptosis]] via [[MOMP]] (mitochondrial outer membrane permeabilization). The assay is widely used to predict sensitivity to BH3-mimetic drugs and to guide rational combination therapy in hematologic malignancies and solid tumors.

## Principle

The assay takes advantage of the fact that the [[Bcl-2]] family of proteins governs the commitment step of intrinsic [[Apoptosis]] through a network of interactions between pro-apoptotic and anti-apoptotic members. In BH3 profiling, cells are gently permeabilized (typically with digitonin) and exposed to a panel of synthetic BH3 peptides, each of which binds selectively to specific anti-apoptotic [[Bcl-2]] proteins. The peptides mimic the action of endogenous BH3-only proteins.

If a cancer cell depends on a particular anti-apoptotic protein for survival (e.g., [[Mcl-1]] or [[Bcl-xL]] or [[Bcl-2]] itself), the corresponding BH3 peptide will competitively displace sequestered pro-apoptotic effectors ([[Bax]] and [[Bak]]) from that anti-apoptotic protein. This unleashes [[Bax]]/[[Bak]] oligomerization on the mitochondrial outer membrane, leading to [[MOMP]] and release of [[Cytochrome c]] into the cytosol. The readout is a loss of mitochondrial membrane potential (ΔΨm), which can be quantified by flow cytometry or fluorescence microscopy using potential-sensitive dyes such as JC-1 (which shifts from red to green fluorescence upon depolarization) or TMRE (which loses fluorescence upon depolarization). The extent of depolarization correlates with the degree of apoptotic priming and identifies the essential anti-apoptotic protein(s).

## BH3 Peptide Classes

Each BH3 peptide reports on a specific dependency:

- **[[Bad]] BH3 peptide**: Binds and inhibits [[Bcl-2]] and [[Bcl-xL]] but not [[Mcl-1]]. A strong response indicates dependence on [[Bcl-2]] or [[Bcl-xL]].
- **HRK BH3 peptide**: Selectively targets [[Bcl-xL]]. A response narrows the dependency to [[Bcl-xL]] specifically, distinguishing it from [[Bcl-2]] dependence.
- **[[Noxa]] BH3 peptide**: Selectively binds [[Mcl-1]] (and to a lesser extent A1/Bfl-1). A response indicates [[Mcl-1]] dependence.
- **[[Puma]] BH3 peptide**: Binds all anti-apoptotic [[Bcl-2]] proteins. It provides a readout of overall apoptotic priming — the total mitochondrial proximity to the apoptotic threshold, irrespective of which specific protein is mediating survival.
- **[[Bim]] BH3 peptide**: Binds all anti-apoptotic [[Bcl-2]] family members with high affinity. Like [[Puma]], it measures maximal priming and serves as a positive control for the assay.

By comparing the response across this peptide panel, one can deconvolve which anti-apoptotic protein(s) the cell is "addicted" to. The dynamic BH3 profiling variant (which measures changes in priming after drug treatment) can further detect early engagement of the apoptotic pathway.

## Clinical Applications

BH3 profiling has been translated into clinical oncology to guide the use of BH3-mimetic drugs:

- **[[Navitoclax]] (ABT-263)**: A [[Bcl-xL]]/[[Bcl-2]] inhibitor. BH3 profiling identifies tumors with [[Bcl-xL]] or [[Bcl-2]] dependence that are likely to respond. Use is limited by on-target thrombocytopenia due to [[Bcl-xL]] dependence in platelets.
- **Venetoclax (ABT-199)**: A selective [[Bcl-2]] inhibitor approved for chronic lymphocytic leukemia (CLL) and acute myeloid leukemia (AML). BH3 profiling robustly predicts venetoclax response, especially in CLL where malignant cells are often [[Bcl-2]]-dependent. High [[Mcl-1]] expression is a major mechanism of venetoclax resistance, and BH3 profiling can identify this escape pathway.
- **[[Mcl-1]] inhibitors (e.g., AMG 176, S63845)**: In development for cancers with [[Mcl-1]] dependence, including multiple myeloma, AML, and triple-negative breast cancer. BH3 profiling using the [[Noxa]] peptide identifies dependency and predicts sensitivity.
- **Combination therapy**: BH3 profiling is used to rationally combine BH3 mimetics (e.g., venetoclax + [[Mcl-1]] inhibitor) by revealing co-dependencies, and to schedule chemotherapy by measuring changes in priming after initial treatment.

Beyond hematology, BH3 profiling is being evaluated in solid tumors (breast, lung, ovarian) and in the context of targeted therapy resistance (e.g., [[BRAF]] inhibitor-resistant melanoma).

## Connections

- [[Bcl-2]]: BH3 profiling determines dependence on anti-apoptotic Bcl-2 family members including Bcl-2 itself.
- [[Apoptosis]]: The assay measures proximity to the apoptotic threshold via mitochondrial outer membrane permeabilization.
- [[MOMP]]: The functional endpoint of BH3 profiling is MOMP, detected as loss of mitochondrial membrane potential.
- [[Cytochrome c]]: Released upon MOMP; its cytosolic appearance is the direct consequence of successful BH3 peptide engagement.
- [[Mcl-1]]: A key anti-apoptotic protein whose dependence is detected by the Noxa BH3 peptide.
- [[Navitoclax]]: A Bcl-xL/Bcl-2 inhibitor whose response is predicted by BH3 profiling.
- [[Venetoclax]]: A selective Bcl-2 inhibitor whose response in CLL/AML is strongly associated with BH3 profiling results.

## Linking Summary

- New links added: [[Bad]], [[Bcl-2]], [[Bcl-xL]], [[Bim]], [[Noxa]], [[Puma]], [[Mcl-1]], [[Apoptosis]], [[MOMP]], [[Cytochrome c]], [[Navitoclax]]
- Suggested new entity notes to create: [[Venetoclax]], [[BH3 proteins]], [[HRK]]
- Strong connections to strengthen: [[BH3 profiling]] ↔ [[Venetoclax]], [[BH3 profiling]] ↔ [[Mcl-1]], [[BH3 profiling]] ↔ [[Apoptosis]]
