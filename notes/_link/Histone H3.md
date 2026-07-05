---
type: entity
category: protein
aliases:
  - H3
  - Histone H3.1
  - Histone H3.2
  - Histone H3.3
  - H3 histone family
database_ids:
  uniprot: P68431
  hgnc: HGNC:4766
  mesh: D006653
relations:
  - predicate: regulates
    target: "[[Autophagy]]"
    sources:
      - 10.1016/j.mad.2013.04.004
  - predicate: activated_by
    target: "[[notes/_link/Spermidine]]"
    sources:
      - 10.1038/ncb1909
created: 2026-07-04
updated: 2026-07-04
---

# Histone H3

**Histone H3** is one of the five core histone proteins that form the [[notes/_link/Nucleosome|nucleosome]] structure in eukaryotic chromatin. Along with [[Histone H4]], [[Histone H2A]], and [[Histone H2B]], it packages DNA into structural units. Histone H3 is among the most highly conserved proteins across eukaryotes and is extensively modified by post-translational modifications that regulate chromatin dynamics, gene expression, and [[notes/_link/DNA Damage]] repair.

## Structure

Histone H3 consists of a globular core domain (the histone fold) and a flexible N-terminal tail that protrudes from the nucleosome. The N-terminal tail (approximately 40 amino acids) is rich in basic residues (lysine and arginine) and is the primary site of post-translational modifications. The core domain, together with histone H4, forms a tetramer (H3-H4)2 that organizes the central 120–130 bp of DNA wrapped around the nucleosome.

Mammals encode multiple H3 variants:
- **H3.1 and H3.2**: Replication-dependent canonical histones expressed during S phase
- **H3.3**: Replication-independent variant deposited throughout the cell cycle, enriched at active genes and regulatory regions
- **CENP-A**: Centromere-specific H3 variant essential for kinetochore assembly

## Post-Translational Modifications

Histone H3 carries a dense array of PTMs on its N-terminal tail, collectively constituting the "histone code":

### Acetylation
Acetylation of lysine residues neutralizes the positive charge, reducing DNA-histone interaction and promoting an open, transcriptionally active [[Euchromatin|euchromatin]] state. Key acetylation sites include:
- **H3K9ac**: Marks active promoters, correlates with transcriptional activation
- **H3K14ac**: Enriched at enhancers and active gene bodies
- **H3K18ac**: Associated with active transcription; declines with age in some tissues
- **H3K23ac**, **H3K27ac**: Enriched at active regulatory elements; H3K27ac specifically marks active enhancers

Acetylation is catalyzed by [[Histone Acetyltransferase|histone acetyltransferases]] (HATs) and reversed by [[Histone Deacetylase|histone deacetylases]] (HDACs) and sirtuins.

### Methylation
Lysine and arginine methylation can be activating or repressive depending on the site and degree (mono-, di-, tri-methylation):
- **H3K4me3**: Marks active transcription start sites
- **H3K9me3**: Enriched at constitutive [[Heterochromatin|heterochromatin]]; repressive mark
- **H3K27me3**: Deposited by Polycomb repressive complexes; marks facultative heterochromatin
- **H3K36me3**: Enriched in transcribed gene bodies; linked to [[notes/_link/Alternative Splicing]]
- **H3K79me2/3**: Associated with active transcription and [[notes/_link/Telomere Attrition|telomere]] regulation

### Phosphorylation
- **H3S10ph**: Marks mitotic chromosomes; also induced by cellular stress and growth factor signaling
- **H3S28ph**: Associated with gene activation upon mitogenic or stress stimuli

### Other Modifications
- **Ubiquitination**: H3K23 and H3K27 can be ubiquitinated, influencing transcription and DNA repair
- **Citrullination**: Conversion of arginine to citrulline by PAD enzymes, linked to [[notes/_link/Neutrophils|neutrophil]] extracellular trap formation

## Role in Autophagy Regulation

Histone H3 serves as a critical epigenetic node through which [[notes/_link/Spermidine|spermidine]] induces [[Autophagy|autophagy]]. Spermidine inhibits histone acetyltransferases (particularly EP300/p300), leading to global de-acetylation of histone H3. This de-acetylation promotes the transcription of autophagy-related genes (e.g., [[notes/_link/LC3|LC3]], [[notes/_link/Atg|Atg]] family members) by altering chromatin accessibility at their promoters. The mechanism is independent of [[notes/_link/mTOR]] inhibition, distinguishing spermidine from rapamycin-class autophagy inducers.

## Role in Aging

Histone H3 modifications undergo reproducible changes with age:
- **Global loss of H3K9me3** and **H3K27me3**: Contributes to [[Heterochromatin|heterochromatin]] loss, genomic instability, and aberrant gene expression
- **Increased H3K18ac** and **H3K27ac**: Linked to [[notes/_link/Inflammation|inflammatory]] gene activation in aged tissues ([[notes/_link/Inflammaging]])
- **Decline in H3K4me3** at promoters of metabolic and stress-response genes

These age-related histone H3 changes are counteracted by interventions that extend healthspan, including [[notes/_link/Caloric Restriction|caloric restriction]], [[notes/_link/Rapamycin|rapamycin]], and spermidine supplementation.

## Clinical Relevance

Abnormal histone H3 modifications are implicated in:
- **Cancer**: Mutations in H3.3 (H3F3A, H3F3B) and H3.1 (HIST1H3B) drive pediatric gliomas (H3K27M) and bone tumors (H3G34W/V)
- **Neurodegeneration**: Altered H3 acetylation contributes to memory decline and [[notes/_link/Tau|tau]] pathology
- **Cardiovascular Disease**: H3 modification patterns influence [[Endothelial Dysfunction|endothelial dysfunction]] and [[Arterial Stiffness|arterial stiffening]]

## Connections

- **[[Autophagy]]**: Spermidine-induced H3 de-acetylation activates autophagy gene transcription
- **[[notes/_link/Spermidine]]**: Inhibits HATs (p300) leading to H3 de-acetylation
- **[[notes/_link/Aging]]**: Age-related H3 modification changes drive heterochromatin loss and cellular dysfunction
- **[[Epigenetics]]**: Histone H3 PTMs constitute a major layer of epigenetic regulation
- **[[notes/_link/Histone Modification]]**: Broader category encompassing all histone PTMs
- **[[Histone Acetyltransferase]]**: Enzymes that acetylate H3; inhibited by spermidine

## Linking Summary

- New links added: [[notes/_link/Histone H3]], [[notes/_link/Nucleosome]], [[Histone H4]], [[Histone H2A]], [[Histone H2B]], [[notes/_link/Alternative Splicing]], [[notes/_link/LC3]], [[notes/_link/Atg]], [[Epigenetics]], [[Arterial Stiffness]]
- Suggested new entity notes to create: [[Histone H4]], [[Histone H2A]], [[Histone H2B]], [[Heterochromatin]], [[Euchromatin]], [[Histone Deacetylase]]
- Strong connections to strengthen: [[notes/_link/Spermidine]] ↔ [[notes/_link/Histone H3]], [[notes/_link/Histone H3]] ↔ [[Autophagy]]
