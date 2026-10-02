---
title: YY1
description: 'YY1 is a ubiquitously expressed GLI-Kruppel zinc finger transcription factor that acts as both an activator and a repressor. Its four C-terminal C2H2 zinc fingers and acidic/glycine-rich N-terminal region make it a structural regulator of enhancer-promoter looping and a component of the INO80 chromatin remodelling complex.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription-factor
  - zinc-finger
  - chromatin
  - neurodevelopment
aliases: [Yin Yang 1, Yin-yang 1, INO80S, NF-E1, UCRBP, GADEVS protein]

---

# YY1

**YY1** (UniProt P25490; 414 residues, human locus 14q32.2) is a ubiquitously expressed **GLI-Krüppel-class zinc finger transcription factor** that activates some promoters and represses others. The "yin-yang" of the name is literal: the same protein, at the same site, does the opposite thing depending on context. That context-dependence is not a rhetorical flourish — it is the defining experimental problem of the field, and it is why YY1's *mechanism* is described here in terms of binding-site consensus and cofactor recruitment rather than as a simple on/off switch.

> [!warning]
> **Cofactor-context caveat.** Because YY1's output depends on which partners occupy the promoter — [[P300]], [[HDAC3]], [[Polycomb Group Proteins|PRC2]], [[SMAD Proteins|SMADs]] — statements of the form "YY1 activates gene X" are only meaningful with the cofactor specified. Where the cofactor is unknown, treat the direction of effect as unresolved.

## Structure and domains

YY1 is built from a small number of modules with unusually clear domain boundaries:

| Region | Residues | Function |
| --- | --- | --- |
| N-terminal acidic / glycine-rich region | 1–170 (with discrete subregions at 33–81 and 116–260) | binds [[P300]]/CBP and [[HDAC3]]; transcription activation; PARP1 site |
| Linker | 261–294 | nuclear localisation; conformational flexibility |
| Four C2H2 zinc fingers | 296–320, 325–347, 353–377, 383–407 | sequence-specific DNA binding, plus dimerisation |

- **Consensus site:** 5′-CCGCCATNTT-3′. Some genes carry a longer motif that gives higher-affinity binding. Methylation of the initial CpG dinucleotide greatly reduces binding affinity — a direct molecular coupling between [[Methylation]] and YY1-dependent transcription.
- **Structure solved by co-crystallisation** with the adeno-associated virus P5 initiator element (PDB 1UBD) defined the four-finger cluster.
- **Nuclear trafficking** is determined principally by the C-terminus; YY1 associates with the nuclear matrix and the nucleolus.
- **In vivo footprinting** (Gal et al. 2013) later revised the consensus considerably — YY1 occupies far more of the genome in cells than in vitro binding studies suggested, so the 11-bp motif is an underestimate.

## Mechanism

YY1 acts by three distinguishable routes:

1. **Direct** activation or repression at sites overlapping the transcription start site.
2. **Indirect** regulation via cofactor recruitment — the acidic N-terminal domain can recruit either histone acetyltransferases or histone deacetylases to the same promoter, which is the mechanical basis of the yin-yang behaviour.
3. **Structural** regulation — YY1 shapes chromatin topology rather than sequence output.

> [!info]
> **YY1 as a loop anchor.** The most important recent work (Weintraub et al., *Cell* 2017, PMID 29224777) establishes YY1 as a **structural regulator of enhancer–promoter loops**: YY1 homodimerises through its zinc fingers and physically bridges enhancers to their target promoters. YY1 haploinsufficiency disrupts loop architecture genome-wide rather than altering the expression of any one YY1-bound gene. This reframes YY1 from a sequence-specific transcription factor into an architectural protein.

**Membership in chromatin-remodelling complexes.** YY1 is a proposed core subunit of the **INO80 chromatin remodelling complex**, attached to the DBINO domain of INO80, targeting that complex to YY1-responsive elements. It is also an accessory component of the **PR-DUB** polycomb repressive deubiquitinase complex (BAP1–ASXL–MBD5/6), interacting with BAP1 through its zinc-finger domain and with HCFC1 through its glycine-rich region.

**Other interaction partners reported:** c-Myc (association inhibits YY1 transcriptional activity), [[Notch]]/Notch1 (association suppresses Notch transactivation), RYBP, SAP30, FKBP3, ATF6, seryl-tRNA synthetase, and SMAD1/SMAD4 (YY1 acts synergistically with them on BMP response elements).

## Regulatory modification

- **Acetylation and deacetylation** of YY1 by CBP/P300 and HDACs toggle its activity — the classic mechanism cited for context-dependent repression versus activation.
- **PARP1 poly-ADP-ribosylates YY1** transiently upon DNA damage, *decreasing* YY1's affinity for its cognate binding sites. This is a direct checkpoint: PARylated YY1 releases its DNA and stops transactivating.
- **CK2 phosphorylation at Ser118** blocks caspase-7 cleavage of YY1 during apoptosis.
- **Caspase-7 cleaves YY1** during apoptosis.
- **Ubiquitinated**; also sumoylated.

## Physiological function and disease

- **Development.** YY1-null mice die early; the protein is required for normal embryogenesis and lineage specification, including anterior/posterior patterning.
- **DNA repair.** YY1 binds DNA recombination intermediates including Holliday junction structures *in vitro*, and participates in [[Non-homologous End Joining|double-strand break repair]]. The cGAS-STING-YY1 axis has been implicated in LCN2-dependent astrocyte senescence in a mouse model of Parkinson's disease (Jiang et al., *Cell Death Differ.* 2023).
- **Viral restriction.** YY1 represses HIV-1 transcription and virion production, cooperating with LSF at the long terminal repeat, and binds a regulatory sequence in LINE-1.
- **Imprinting.** YY1 regulates imprinted genes, which is the proposed route by which it acquires oncogenic potential.

> [!warning]
> **Gabriele-De Vries syndrome (GADEVS, OMIM 617557).** Haploinsufficiency of YY1 — heterozygous deletions, missense and nonsense variants — causes an autosomal dominant neurodevelopmental disorder: intellectual disability, dysmorphic facial features, feeding problems, intrauterine growth restriction, variable cognitive impairment, behavioural problems and congenital malformations (PMID 28575647). GADEVS presents with transcriptional *and* chromatin dysfunction, exactly as the loop-anchoring model predicts. Unlike most transcription-factor disorders, YY1 haploinsufficiency is comparatively mild for a neurodevelopmental phenotype, likely reflecting some redundancy with related zinc finger proteins.

## Documents

- [[_document_ - mTOR signaling at a glance]] — Cunningham et al. (Nature 2007): mTORC1 controls [[PGC-1α]] transcriptional activity by altering its physical interaction with YY1, establishing YY1 as a nutrient-sensing transcriptional switch that gates mitochondrial biogenesis.

## Connections

- [[PGC-1α]] — YY1 is the transcription factor that holds PGC-1α at its target promoters; mTORC1 phosphorylates YY1 and releases PGC-1α, so YY1 sits directly on the nutrient-sensing arm of the mitochondrial biogenesis pathway.
- [[mTOR]] — mTORC1 phosphorylates YY1 to disengage the YY1–PGC-1α complex. This is the specific mechanism by which [[Rapamycin]] lowers mitochondrial gene expression and [[Mitochondrial Biogenesis]].
- [[P300]] — CBP/P300 acetylates YY1 and relieves its repression; the same cofactor partnership that makes YY1 an activator rather than a repressor.
- [[HDAC3]] — the deacetylase counterweight recruited to YY1. IFRD1 works by favouring HDAC3 recruitment to p65; for YY1, HDAC1/HDAC2/HDAC3 recruitment via SIN3A and FKBP3 drives repression.
- [[PARP1]] — DNA damage poly-ADP-ribosylates YY1 and lowers its DNA-binding affinity, directly linking the repair machinery to transcriptional shutdown.
- [[c-Myc]] — physical association with c-Myc inhibits YY1 transcriptional activity; both are proto-oncogenes, and co-occurrence drives proliferative programmes.
- [[Polycomb Group Proteins]] — YY1 recruits the PRC2/EED-EZH2 complex to repressed targets, and is an accessory component of PR-DUB, so YY1 is a hub between Polycomb repression and BAP1-mediated deubiquitination.
- [[Non-homologous End Joining]] — YY1 binds recombination intermediates and participates in double-strand break repair.

## Linking Summary
- New links added: [[PGC-1α]], [[mTOR]], [[P300]], [[HDAC3]], [[PARP1]], [[c-Myc]], [[Polycomb Group Proteins]], [[SMAD Proteins]], [[Notch]], [[Non-homologous End Joining]], [[Methylation]]
- Suggested notes to create: [[YY1 Enhancer-Promoter Loops]], [[INO80 Complex]], [[BAP1]], [[PR-DUB Complex]], [[INO80S]], [[Gabriele-De Vries Syndrome]], [[SMAD1]], [[HCFC1]], [[Holliday Junction]]
- Strong connections to strengthen: [[YY1]] ↔ [[mTOR]] ↔ [[PGC-1α]]; [[YY1]] ↔ [[P300]] ↔ [[HDAC3]]; [[YY1]] ↔ [[Polycomb Group Proteins]]