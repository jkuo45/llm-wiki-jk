---
title: FTO
description: FTO is the founding m6A RNA demethylase, an Fe(II)/2-oxoglutarate-dependent dioxygenase that oxidatively demethylates N6-methyladenosine in RNA and is best known as the gene harbouring the commonest obesity-associated variant in humans.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - gene
  - enzyme
  - epigenetics
  - rna-modification
  - obesity
aliases:
  - fat mass and obesity-associated gene
  - FTO domain protein
  - alpha-ketoglutarate-dependent dioxygenase FTO
---

# FTO

FTO (fat mass and obesity-associated) sits on chromosome 16q12.2. It was
originally cloned in 1997 as a protein of unknown function that happened to
be the nearest gene to the FTO locus, the strongest obesity susceptibility
locus found in genome-wide association studies. It was only in 2011 that its
actual enzymatic function was identified: FTO is the first known RNA
N6-methyladenosine demethylase, the reaction that launched the modern
[[m6A Modification|m6A]] field.

## Chemistry

FTO is an Fe(II) and 2-oxoglutarate-dependent dioxygenase, structurally a
2OG dioxygenase rather than any kind of methyltransferase or hydrolase. It
catalyses oxidative demethylation of [[N6-methyladenosine]]:

FTO consumes molecular oxygen and 2-oxoglutarate to hydroxylate m6A to
N6-hydroxymethyladenosine, which then spontaneously decomposes to adenosine
plus formaldehyde. FTO is the only known protein in the human proteome that
demethylates nucleic acid bases, and the chemistry explains its vulnerability to
2OG-competitive inhibitors and chelators.

> [!warning] Substrate preference is context-dependent, and the field has not converged
> Early work established FTO as an m6A demethylase. Mauer et al. (2017) then
> reported that FTO's preferred substrate is m6Am at the cap-proximal position
> of mRNA rather than internal m6A, and that FTO contributes little to global
> m6A levels. Later work, including FTO-dependent demethylation of LINE1 repeat
> RNA regulating chromatin state in mouse embryonic stem cells, supports a
> strong substrate preference rather than the general "m6A eraser" role
> implied by the acronym. The simple picture - FTO is the m6A eraser, ALKBH5 is
> another - is a teaching simplification; for most bulk m6A, [[METTL3]] and the
> other writers dominate and eraser-mediated reversal is quantitative and
> site-specific rather than wholesale.

## Substrate preference and the m6A landscape

Within the m6A system, FTO functions as one of two erasers, the other being
[[ALKBH5]]. The writers are the [[METTL3]]/METTL14 methyltransferase complex
plus the methyltransferases for m6Am and for m1A. The output of this system
governs mRNA stability, translation efficiency, splicing, and nuclear export,
which is why FTO's targets reach into every one of those layers.

Where FTO demethylates, the result is increased stability and increased
translation. Where FTO is absent, m6A-marked transcripts decay.

## Genetics: what the obesity variant actually does

The first FTO obesity variant, rs9931289 (intron 1, C/T), and its proxies
rs9934406 and rs9934606 form a strong linkage disequilibrium block. The causal
mechanism was not the transcript FTO encodes. Rather, the risk allele of
rs9931289 creates a binding site for the transcription factor C/EBPZ (also
CEBPD), a transcriptional enhancer that increases FTO expression in nearby
cis-regulatory elements and in adipocyte progenitor cells. The link between
FTO genotype and obesity therefore runs through FTO *regulatory* elements, not
through FTO coding sequence.

> [!warning] Clinical caveats
> The FTO-obesity association is real but modest, of the order of a
> 1.2-1.3-fold change in obesity risk per risk allele, with effect sizes that
> are smaller still once physical activity and diet are accounted for. FTO is
> not a useful monogenic obesity gene, and it is not currently a validated
> drug target for weight loss. Treating FTO as "the obesity gene" is a
> misreading of the original GWAS.

## Metabolic and disease biology

Reported functions span several axes, and not all are equally well replicated:

- **Adipose tissue and energy balance**: FTO deficiency in mice protects
  against high-fat-diet obesity, with enhanced [[Thermogenesis]] and browning of
  white adipocytes, reportedly through an m6A-dependent increase in HIF1A
  expression. FTO is also expressed in the hypothalamus, where it regulates
  food intake.
- **Cancer**: FTO is overexpressed in many tumour types and acts on
  [[MYC]], [[FOXO]], and signalling pathways, promoting proliferation,
  self-renewal, and resistance. In [[Acute Myeloid Leukemia]] FTO promotes
  leukaemic stem cell self-renewal, and pharmacological FTO inhibition was
  reported to impair that self-renewal in vitro and in vivo (Huang et al.,
  2019). The translational case is early.
- **Cardiometabolic disease**: associations with type 2 diabetes,
  cardiovascular disease, and chronic kidney disease are widely reported, with
  the [[Insulin Resistance]] mechanism contested.
- **Stem cell pluripotency**: FTO promotes the naive state in mouse embryonic
  stem cells by stabilising [[NANOG]]-related transcripts; loss of FTO biases
  cells toward the primed state.

### Pharmacology

FTO inhibitors fall into three chemical classes: metal-chelating (2OG/iron
competitors, the earliest and least selective), substrate-competitive oxalyl-
amino-acid scaffolds such as FB23-2 (IC50 ~2.6 micromolar), and later
scaffold-optimised antileukaemia agents. **Meclofenamic acid**, an
anti-inflammatory NSAID, was identified as a potent FTO inhibitor that reduces
AML growth in vivo - an unexpectedly druggable starting point from an old drug
class. No FTO inhibitor has entered clinical development; the field is still
in the tool-compound stage.

## Connections

- [[N6-methyladenosine]] — the modified nucleotide FTO was discovered to
  demethylate; the substrate of the defining reaction.
- [[m6A Modification]] — the system FTO sits inside, alongside writers
  ([[METTL3]]) and the other eraser [[ALKBH5]].
- [[METTL3]] — the writer that lays down the m6A that FTO is proposed to
  remove; the writer-eraser pairing is what makes m6A a switch.
- [[ALKBH5]] — the second eraser, an FTO paralog in the 2OG dioxygenase
  family, and a better-defined demethylase in several settings.
- [[Methylation]] — the general epitranscriptomic process; FTO is the
  reversible arm of one specific mark.
- [[Obesity]] — the phenotype the gene is named for, and the association that
  made it famous.
- [[Type 2 Diabetes]] and [[Insulin Resistance]] — the cardiometabolic
  phenotypes the risk variants associate with, with mechanisms still debated.
- [[Brown Adipose Tissue]] and [[Thermogenesis]] — the energy-expenditure arm
  of FTO biology, via browning of white adipocytes.
- [[MYC]] — a key FTO target in several cancers, where FTO stabilises MYC
  mRNA and promotes proliferation.
- [[FOXO]] — another reported FTO target; FTO-dependent m6A demethylation of
  FOXO transcripts is a reported route to altered stress-response and
  apoptosis.
- [[Cancer]] and [[Acute Myeloid Leukemia]] — the disease contexts in which FTO
  inhibition is being actively pursued.
- [[C/EBPZ]] — the transcription factor whose binding site is created by the
  FTO obesity risk allele; this is the actual molecular consequence of the
  common variant.

## Documents

- [[N6-methyladenosine]] — supplies the substrate chemistry and the oxidative
  demethylation route through N6-hydroxymethyladenosine and formaldehyde.
- [[m6A Modification]] — places FTO inside the writer/eraser/reader system and
  documents the m6Am and LINE1-substrate findings that qualify the simple model.

## Linking Summary

- New links added: [[N6-methyladenosine]], [[m6A Modification]], [[METTL3]], [[ALKBH5]], [[Methylation]], [[Obesity]], [[Type 2 Diabetes]], [[Insulin Resistance]], [[Brown Adipose Tissue]], [[Thermogenesis]], [[MYC]], [[FOXO]], [[Cancer]], [[Acute Myeloid Leukemia]], [[C/EBPZ]]
- Suggested notes to create: [[FTO inhibitor]], [[m6Am]], [[YTHDF]], [[2-Oxoglutarate]], [[CEBPD]], [[Meclofenamic acid]], [[HIF1A]] — removed as already existing: Iron, METTL14, Nanog
- Strong connections to strengthen: [[FTO]] <-> [[m6A Modification]] (writer/eraser balance and substrate-preference controversy), [[FTO]] <-> [[Obesity]] (the rs9931289-CEBPZ enhancer mechanism belongs in both)
