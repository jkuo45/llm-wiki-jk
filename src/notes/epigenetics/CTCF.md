---
title: CTCF
description: CTCF is a CCCTC-binding zinc-finger transcriptional regulator that acts as the principal chromatin insulator, binding loop anchors to halt cohesin loop extrusion and thereby define topologically associating domain boundaries.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, chromatin, transcription-factor, insulator, genome-architecture]
aliases: [CTCF, CCCTC-binding factor, CTCF1, CTCFL]
---

# CTCF

**CTCF** (CCCTC-binding factor, officially *CCCTC-binding factor like
transcriptional regulator*) is the best-characterized chromatin insulator in
mammalian genomes. It is a ~19 kDa, 11-zinc-finger protein that, in the modern
picture of genome organization, functions primarily as a **stalling barrier for
cohesin**: cohesin is extruded along chromatin in a loop, and CTCF bound at
convergently oriented sites halts that extrusion. The stalled loops are the
physical substrate of topologically associating domains.

> [!important] The architectural vs. classical dichotomy
> CTCF was originally identified as a silencer that blocked enhancer access to a
> promoter when bound between them — the "classical insulator" model. That model
> is real but it is not the dominant function. CTCF is now best understood as a
> loop-anchoring and boundary-marking factor. The two roles overlap heavily and
> the older enhancer-blocking terminology persists in the literature.

## Mechanism

- **DNA binding.** Eleven C2H2 zinc fingers, of which fingers 2–4 form a
  sequence-specific core recognizing a ~15 bp motif containing a variable
  central dinucleotide; fingers 8–11 make non-specific upstream contacts that
  increase affinity. Roughly 40–50 bp is protected in CTCP footprints by MNase
  in most human cell lines, implying occupancy well below 100% at many sites.
- **Directional blocking.** A loop-extruding cohesin complex approaching a
  bound CTCF from the *upstream* side is blocked; approaching from the
  downstream side it passes freely. Convergent motif orientation is therefore
  the structural grammar of the insulator: it is the orientation of the pair,
  not the presence of either site alone, that creates the boundary.
- **Clustering and insulation.** Boundaries are enriched for *clusters* of
  CTCF sites in mixed orientation, which insulate by asymmetric blocking —
  only the inward-facing site in a cluster actually arrests extrusion, so the
  cluster as a whole provides both a stop and a permissive passage.
- **Additional architecture.** CTCF contributes to a second, cohesin-independent
  layer of folding that is enriched at TAD corners and compartment boundaries,
  and it acts as a barrier at replication origins and at the insulators that
  separate topologically associating domain sub-TADs.

> [!warning] Boundaries are only part of the domain
> A TAD boundary is robust when CTCF sites are accessible and clustered, and
  fragile when they are methylated or closed. Local insulation and global
  insulation are separable phenomena, and acute CTCF depletion decouples them.

## Biological Contexts

**Imprinting and X-inactivation.** CTCF sits at the *H19*/*IGF2* imprinting
control region, where methylation of the imprinting control element switches
which insulator flank is bound and therefore which enhancers can reach the
promoters. The same logic governs CTCF-dependent X-chromosome pairing and
*Xist* spread.

**Development and disease.** Boundary deletion phenotypes are remarkably
position-dependent: removing the boundary at the *WNT6*–*EPHA4*–*PAX3* locus
deregulates limb patterning, and removing a sub-TAD boundary in the mouse
α-globin locus dysregulates the genes it partitions. CTCF loss of function
therefore produces disease by *rewiring* enhancer–promoter contacts rather than
by any loss of catalytic activity.

**Transcription factor binding and methylation.** CTCF occupancy is sensitive to
[[DNA Methylation]] at CpG residues within its motifs; methylation of a boundary
site is a plausible route by which inflammation, ageing, or tumour epigenetics
alter enhancer–promoter wiring.

## Disease Associations

CTCF dysregulation is recurrent in cancer, where *CTCF* site mutations and
copy-number changes are frequent in breast, colorectal, prostate and other
tumours. Two mechanisms are described: loss of insulation permitting oncogene
activation from a neighbouring enhancer, and altered CTCF occupancy changing
which enhancers can contact a promoter. In neurodegeneration, loss of
architectural gene function disrupts the chromatin landscape that underlies
neuronal identity and transcriptional programmes.

> [!warning] Rare monogenic disease
> *CTCF* variants cause a neurodevelopmental disorder with intellectual
> disability, microcephaly, and dysmorphic facies. These are heterozygous
> loss-of-function alleles with variable expressivity — a small, distinct
> clinical entity rather than a common cause of neurodegeneration.

## Documents
- (no document notes yet)

## Connections
- [[Cohesin]] — cohesin is the molecular motor that extrudes the loops CTCF
  stops. CTCF is absolutely required for CTCF–CTCF loop anchors and for TAD
  insulation, but it is not required for cohesin to load or for sister chromatid
  cohesion — those are separable cohesin functions.
- [[Topologically Associating Domain]] — convergent CTCF sites generate the
  domain boundaries seen in Hi-C maps. The domains in the community
  epigenetics vocabulary are inferred largely from CTCP/cohesin contact maps, so
  CTCF is both the producer and the readout of the annotation.
- [[Enhancer-Promoter Looping]] — insulation restricts enhancer–promoter
  communication to within-domain. Loss of a boundary lets enhancers reach
  promoters they should not, which is the mechanistic route from CTCF mutation
  to ectopic gene activation.
- [[DNA Methylation]] — methylation of CpG residues within CTCF motifs reduces
  binding, which makes CTCF occupancy a point at which epigenetic change becomes
  an architectural change.
- [[X-Chromosome Inactivation]] — CTCF-based chromatin pairing coordinates
  counting and silencing of X chromosomes; loss of CTCF-mediated pairing
  disorganises this process.
- [[Transcription Factor]] — CTCF is a DNA-binding regulator whose occupancy is
  shaped by local chromatin state, making it a standard example of TF binding
  being governed by the epigenome.
- [[MHC Class Ib]] — CTCF sites shape the 3D neighbourhood of immune-regulatory
  loci, and loss of insulation is one route by which inflammatory and immune
  genes come under aberrant enhancer control.

## Linking Summary
- New links added: [[Cohesin]], [[Topologically Associating Domain]],
  [[Enhancer-Promoter Looping]], [[DNA Methylation]], [[X-Chromosome Inactivation]],
  [[Transcription Factor]], [[MHC Class Ib]]
- Suggested notes to create: [[Loop Extrusion]], [[Chromatin Insulator]],
  [[H19/IGF2 Imprinting Control Region]], [[Hi-C]], [[CTCF Binding Site]],
  [[Neurodevelopmental Disorder]], [[Nuclear Architecture]]
- Strong connections to strengthen: [[CTCF]] ↔ [[Cohesin]],
  [[CTCF]] ↔ [[Topologically Associating Domain]], [[CTCF]] ↔ [[Enhancer-Promoter Looping]]