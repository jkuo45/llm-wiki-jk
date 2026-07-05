---
type: entity
category: biological_process
entity_type: "Biological Process"
created: 2024-01-01
updated: 2024-07-04
---

# Gene Expression

**[[Gene Expression]]** is the biological process by which information from a [[Gene|gene]] is used to synthesize a functional gene product — typically [[Protein|protein]] via [[Transcription|transcription]] and [[Translation|translation]], or functional [[Non-coding RNA|non-coding RNA]]. Epigenetic regulation controls every level of gene expression from chromatin accessibility to mRNA stability.

## Epigenetic Layers of Regulation

**1. Chromatin Accessibility (Transcription-Level)**
Gene transcription requires that promoters and enhancers are accessible to the transcriptional machinery. [[Euchromatin]] (open, acetylated, H3K4me3-marked) permits transcription; [[Heterochromatin]] (condensed, methylated H3K9me3/H3K27me3) blocks it. [[Nucleosome Remodeling|Nucleosome remodelers]] ([[SWI/SNF]], [[ISWI]], [[CHD]]) slide or evict nucleosomes to expose regulatory elements.

**2. RNA Polymerase II Pausing and Elongation**
Even after transcription initiation, [[RNA Polymerase II]] often pauses at promoter-proximal regions. [[P-TEFb]] ([[CDK9]]/[[Cyclin T1]]) phosphorylates the Pol II CTD to release pausing. [[H3K36me3]] in gene bodies suppresses cryptic initiation during elongation.

**3. Co-transcriptional and Post-transcriptional Regulation**
- [[Alternative Splicing|Alternative splicing]] is influenced by [[H3K36me3]] (recruits splicing factors via [[SRSF1]], [[MRG15]]).
- [[mRNA stability]] is regulated by [[MicroRNA|miRNAs]] (e.g., [[let-7]] targets [[HMGA2]], [[LIN28]]), which are themselves epigenetically controlled.
- [[N6-methyladenosine|m⁶A]] modification of mRNA (by [[METTL3/METTL14]]) affects splicing, export, and translation, and is linked to the [[Epigenetic Clock|aging clock]].

## Quantitative Methods for Measuring Gene Expression

| Method | What It Measures | Resolution | Epigenetic Context |
|---|---|---|---|
| [[RNA-seq]] | Steady-state mRNA | Transcript-level | Best paired with [[ATAC-seq]] / [[CUT&Tag]] |
| [[Nascent RNA-seq]] | Active transcription | Nucleotide-level | Distinguishes transcriptional from post-transcriptional regulation |
| [[RT-qPCR]] | Specific transcript abundance | Gene-specific | Gold standard for validation |
| [[Single-cell RNA-seq]] | Expression per cell | Single-cell | Reveals epigenetic heterogeneity |

## Gene Expression in Senescence and Aging

During [[Cellular Senescence|senescence]], hundreds of genes are silenced through [[SAHF|SAHF-mediated]] heterochromatinization, including [[E2F]] target proliferation genes ([[MCM2]], [[PCNA]], [[CCNA2]]). Simultaneously, [[SASP]] genes ([[IL6]], [[IL8]], [[CXCL1]], [[MMP3]]) are activated through [[NF-κB]] and [[CEBPB|C/EBPβ]] whose chromatin becomes more accessible. Age-related [[Epigenetic Drift|epigenetic drift]] causes stochastic changes in gene expression across tissues, contributing to loss of cellular identity and functional decline.

### Linking Summary:
- New links added: [[Transcription]], [[Translation]], [[Non-coding RNA]], [[Epigenetics]], [[notes/_link/Senescence]], [[SASP]]
- Suggested new entity notes to create: [[Nascent RNA-seq]], [[ATAC-seq]], [[CUT&Tag]], [[RNA-seq]], [[Single-cell RNA-seq]]
- Strong connections to strengthen: [[Gene Expression]] ↔ [[Transcription]], [[Gene Expression]] ↔ [[Epigenetics]]
