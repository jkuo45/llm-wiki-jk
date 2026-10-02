---
title: Histone H2B
description: Histone H2B is one of the four canonical core histones, present as two copies per nucleosome octamer as the obligate partner of H2A; its best-known modification is K120 monoubiquitination, a co-transcriptional mark that is an obligate precursor to H3K4 and H3K79 methylation, and its C-terminal motif is a major docking site for FACT and TFIIS.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, chromatin, histone, nucleosome, histone-modification]
aliases: [H2B, HIST1H2BB, H2B/type 1-B, histone H2B type 1-B]
---

# Histone H2B

**Histone H2B** is a core histone of the [[Nucleosome]], present as **two copies
per octamer**. It is the obligate heterodimer partner of [[Histone H2A]]: an
H2A–H2B dimer is a stable structural unit, and H2B supplies most of the
interactions with [[DNA]] and with the [[DNA Replication|replication]] and
transcription machinery at the dimer's exposed face.

> [!important] H2BK120ub is a licensing mark, not just a regulatory mark
> Monoubiquitination of H2B at lysine 120 is one of the most functionally
> demanding single modifications in the nucleus, because downstream H3
> methylation (H3K4me3 via COMPASS, H3K79me via Dot1L) does not occur
> until H2BK120ub is present and then removed. It is best understood as a
> kinetic gate or licensing step on transcription, DNA replication, and the
> [[DNA Damage Response]] — the modification has to arrive and be erased on the
> right timescale for chromatin to proceed.

## Structure and Octamer Position

H2B carries the histone fold — three α-helices joined by loops — but unlike H2A
it presents a comparatively featureless outer surface to the DNA that wraps the
dimer's outer face, making it the main DNA-contact surface of the nucleosome
alongside H3. Its long, lysine-rich N-terminal tail is one of the most
accessible unstructured regions in the nucleus and carries a high density of
basic charge that participates in nucleosome–nucleosome contacts and in
compaction.

The C-terminal tail contains the **H2B motif**, a conserved sequence whose
residues form a binding site used by factors including TFIIS and by the SAGA
deubiquitinase module (SGF29/USP22), making the H2B C-terminus a recurring
structural recognition element independent of its modifications.

## Modifications

- **H2BK120ub (and H2BK123ub in some organisms)** — written co-transcriptionally
  by the RNF20/RNF40 heterodimer in vertebrates, with nucleosome spacing
  enforced by the ATPase [[FIP200]]. It gates H3K4me3 and H3K79 methylation and
  is removed by the SAGA DUB module so that elongation can proceed; a
  steady-state mark would block the cycle. Ubiquitination also has
  replication-independent roles in transcription initiation and in
  [[Homologous Recombination]]-linked repair.
- **H2BK5ac and H2BK12ac** — acetylation at lysine 5 (and the paralogous sites)
  is associated with active transcription and with nucleosome destabilisation
  in promoter proximal regions; H2BK5ac is used as a marker for active
  enhancers.
- **H2BK34ac** is functionally tied to transcriptional elongation and
  enhancer activity in the yeast literature.
- **Serine 112 O-GlcNAcylation** has been reported to promote H2BK120ub
  installation.

> [!warning] Ubiquitination here is not the degradation signal
> Histone ubiquitination is a dense, highly reversible code read by dedicated
> domains; only polyubiquitin chains of the K48 topology route a protein to the
  [[Proteasome]]. Because H2BK120ub is mono-, it signals locally and is not a
  degradation tag, and describing "ubiquitinated histone" as "histone destined
  for destruction" is wrong.

## Cross-talk with H2A and H3

H2B is the coupling point between the two halves of the octamer. H2BK120ub
directly opposes H2AK119ub and the two marks are mutually exclusive: PRC1
monoubiquitylation of H2A at K119 is the repressive Polycomb mark, and it
blocks the activating H2BK120ub route, and vice versa. The **acidic patch**
formed jointly by H2A and H2B is the docking surface for bromodomain and PHD
readers, and for the ATPase subunits of remodeling complexes, so H2B's
contribution to that surface is inseparable from [[Histone H2A]]'s.

Because H2B is directly adjacent to H3 in the octamer, H2B ubiquitination also
cross-talks with the H3K4 and H3K79 methylation systems, which is the basis of
the trans-histone chemistry in this region.

## Clinical and Experimental Relevance

H2BK120ub is a readout used to map active transcription genome-wide, and the
FACT complex ([[SSRP1]]/[[SUPT16H]]) is required for transcription through
nucleosomes and for replication fork progression, so H2B sits in both
[[Transcription]] and [[DNA Replication]] by structure rather than by
regulation. Germline and somatic mutations in H2B-encoding genes are rare and
poorly characterised, which is itself informative: unlike H3 or H2A variants,
H2B has no well-established variant system, and its biochemistry is dominated
by modification chemistry rather than by structural variants.

## Documents
- [[_document_ - Epigenetic changes during aging and their reprogramming potential]] — transcriptional and chromatin programmes that shift with age, in which H2B modification status participates.
- [[_document_ - The role of the dynamic epigenetic landscape in senescence_orchestrating SASP expression]] — the co-transcriptional H2B/H3 axis as part of the senescent chromatin programme.

## Connections
- [[Histone H2A]] — H2B's obligate dimer partner; the two together form the acidic patch and the H2A–H2B dimer is the structural unit that DNA wraps.
- [[Histone H3]] — H2B is the structural bridge to the H3–H4 tetramer and the initiating point for H3K4me3 and H3K79 methylation.
- [[Nucleosome]] — H2B is two of the eight subunits of the core particle.
- [[Histone Modification]] — H2BK120ub is the defining example of a modification whose function is its regulated turnover rather than its steady-state presence.
- [[FIP200]] — the ATPase subunit that sets nucleosome spacing for the RNF20/RNF40 ubiquitin ligase, so H2BK120ub density is a spacing readout.
- [[SSRP1]] — FACT complex subunit that binds the H2B C-terminal region to pass DNA through and around nucleosomes during transcription and replication.
- [[SUPT16H]] — FACT's catalytic partner, which together with SSRP1 defines the nucleosome-reorganising activity that H2B structure directly enables.
- [[HUWE1]] — a large E3 ligase with documented activity on the H2A/H2B axis, linking H2B to ubiquitin turnover and to nucleosome-associated proteolysis.
- [[Chromatin Remodeling]] — H2B participates in the nucleosome remodelling and variant-exchange reactions that determine accessibility.
- [[Transcription]] — H2BK120ub is co-transcriptional and its cycling is required for productive elongation through nucleosomes.
- [[DNA Replication]] — H2BK120ub and the FACT complex are required for replication fork progression past nucleosomes.
- [[DNA Damage Response]] — H2BK120ub participates in damage-response chromatin organisation alongside the H2A.X/γ-H2AX axis.
- [[Polycomb Group Proteins]] — PRC1's repressive H2AK119ub mark is mutually exclusive with activating H2BK120ub, making H2B part of the Polycomb/active antagonism.
- [[Chromatin]] — H2B abundance and modification status are the structural and regulatory parameters of chromatin.
- [[Homologous Recombination]] — H2B ubiquitination participates in repair-pathway chromatin regulation.
- [[Histone H2A.Z]] — the H2A variant most often studied in H2A–H2B dimer context; its deposition changes the acidic patch of the dimer H2B occupies.
- [[E3 Ubiquitin Ligase]] — the RNF20/RNF40 and HUWE1 ligases that write ubiquitin onto H2B are the direct enzymology behind H2BK120ub.
- [[Proteasome]] — the reason histone ubiquitination code semantics differ from protein degradation: only poly-K48 chains target the proteasome.

## Linking Summary
- New links added: [[Histone H2A]], [[Histone H3]], [[Nucleosome]], [[Histone Modification]], [[FIP200]], [[SSRP1]], [[SUPT16H]], [[HUWE1]], [[Chromatin Remodeling]], [[Transcription]], [[DNA Replication]], [[DNA Damage Response]], [[Polycomb Group Proteins]], [[Chromatin]], [[Homologous Recombination]], [[Histone H2A.Z]], [[E3 Ubiquitin Ligase]], [[Proteasome]], [[H3K4me3]], [[H3K27me3]], [[H3K9me3]], [[H3K27ac]], [[Histone H4]], [[H3K79me3]], [[Acetylation]], [[Ubiquitination]], [[SAGA]], [[RNF20]], [[RNF40]], [[Fact]], [[Dot1L]]
- Suggested notes to create: [[H2BK120ub]], [[RNF20]], [[RNF40]], [[SAGA]], [[Fact]], [[H3K79me3]], [[TFIIS]], [[COMPASS]], [[Protrudin]], [[H2B Variant]], [[Histone H2B Ubiquitination]] — removed as already existing: CTCF, DOT1L
- Strong connections to strengthen: [[Histone H2B]] ↔ [[Histone H2A]], [[Histone H2B]] ↔ [[FIP200]], [[Histone H2B]] ↔ [[SSRP1]]