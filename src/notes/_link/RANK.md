---
title: RANK
description: 'RANK (TNFRSF11A) is a 616-residue type I transmembrane TNF receptor family
  member and the sole signaling receptor for RANKL. It trimerizes upon ligand binding,
  recruits TRAF6 through its cytoplasmic tail, and drives osteoclast differentiation
  via NF-κB, MAPK, PI3K-Akt and NFATc1.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor
  - signaling
aliases: [Receptor Activator of NF-κB, TNFRSF11A, TRANCE-R, ODFR, CD26, PDB2]
---

# RANK

RANK (receptor activator of nuclear factor-κB, gene symbol *TNFRSF11A*) is a
type I transmembrane receptor of the tumor necrosis factor receptor (TNFR)
superfamily and the only signaling receptor for [[RANKL]]. It is the master
switch for [[Osteoclast]] formation, activation and survival, and its loss
produces a distinctive skeletal and immune phenotype in both mice and humans.

## Structure and domains

Human RANK is a 616-residue type I transmembrane glycoprotein; the gene lies
on chromosome 18q. The extracellular region carries four cysteine-rich
pseudorepeats (CRDs), each roughly 40 residues with six conserved cysteines —
the modular fold that defines TNF-family receptors. RANK is unusual in that
CRD2, CRD3 and CRD4 lack one canonical internal disulfide bond, which is
substituted in part by an extensive hydrogen-bond network and, in CRD3, by a
**noncanonical Cys125–Cys127 disulfide**. This extra bridge at the tip of
"Loop3" fixes the loop's topology and is the main determinant of RANK's
specificity for RANKL over other TNF ligands — mutating Cys127 or Glu126
abolishes ligand binding. Crystal structures of RANK–RANKL (and of
RANKL–OPG) showed the receptor docking into three crevices
on a trimeric ligand.

The cytoplasmic tail is 383 residues and contains three TRAF-binding
motifs. TRAF6 binds a membrane-proximal Pro-X-Glu-X-X-(aromatic/acid) motif;
TRAF1, TRAF2, TRAF3 and TRAF5 bind a more distal region. A conserved
membrane-proximal region distinct from the TRAF motifs binds
phospholipase-Cγ2 and is needed for calcium flux.

## Mechanism and downstream signaling

RANK has no intrinsic enzymatic activity. Ligand binding (typically by
membrane-bound RANKL on an adjacent cell) clusters the receptor into
trimers, and the tail recruits [[TRAF6]], which is the dominant adaptor:
TRAF6-deficient mice show severe osteopetrosis. Activated TRAF6 signals
through the TAB1/TAB2–[[TAK1]] complex to activate the [[IKK complex]] and
therefore canonical [[NF-κB]] signaling, and independently through
[[MAPK]] pathways — [[JNK]], [[p38 MAPK]] and [[ERK]] — plus
[[PI3K]]/[[Akt]].

> [!info] The master transcription factor is NFATc1
> NF-κB and AP-1 (via induction of *c-Fos*) act upstream, but the osteoclast
> identity program is written by NFATc1, which requires sustained
> [[Calcium Signaling|calcium oscillations]]. Those oscillations are generated
> by RANK in synergy with ITAM-bearing co-receptors (OSCAR, TREM-2, PIR-A)
> that signal through Syk and PLCγ2. Loss of any component of either pathway
> blocks osteoclastogenesis.

RANK also drives lysosomal biogenesis in osteoclasts indirectly: RANK
activation promotes [[TFEB]] nuclear translocation (via PKCβ) and [[TFE3]]
phosphorylation through [[MAPK]], raising expression of lysosomal hydrolases
needed for bone resorption.

## Physiological roles

- **Bone remodeling.** M-CSF upregulates RANK on monocyte/macrophage-lineage
  precursors; RANKL from osteoblast-lineage cells then triggers
  differentiation, fusion into multinucleated osteoclasts, and survival.
  Mice lacking *Tnfsf11* or *Tnfrsf11a* develop severe osteopetrosis with
  defective tooth eruption.
- **Immune system.** RANK is expressed on T cells and [[Dendritic cells]] and
  is required for dendritic-cell survival, lymph node organogenesis, and
  T-cell/dendritic-cell communication.
- **Mammary gland.** RANK/RANKL signaling in the mammary gland is required for
  development of the lactating gland during pregnancy.
- **Reverse signaling.** RANKL itself can act as a receptor; RANK-expressing
  extracellular vesicles released by osteoclasts can trigger osteoblast
  differentiation — "reverse signaling" in the opposite direction.

## Pathology and clinical relevance

Loss-of-function *TNFRSF11A* mutations cause **autosomal recessive
osteopetrosis with hypogammaglobulinemia**, an osteoclast-poor form of
osteopetrosis (Guerrini et al., *Am J Hum Genet* 2008). Activating mutations
cause **familial expansile osteolysis** and **juvenile Paget disease**;
RANKL mutations cause a related recessive osteopetrosis. In
[[Osteoporosis]] and rheumatoid arthritis, the RANKL/RANK ratio shifts toward
RANKL, and T-cell–derived RANKL drives focal bone erosion in
[[Periodontitis]] and [[Rheumatoid Arthritis]].

> [!important] Therapeutic target
> RANK itself is not directly drugged, but the axis is: Denosumab, a fully
> human IgG2 monoclonal antibody against RANKL, is approved for
> postmenopausal and glucocorticoid-induced osteoporosis, hormone-ablation
> bone loss, prevention of skeletal-related events in [[Multiple Myeloma]] and
> solid-tumor bone metastases, and giant cell tumor of bone. RANK expression in
> human breast tumors has also been associated with outcome, supporting the
> idea that tumor-cell RANK drives bone metastasis.

## Documents

- [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]] — establishes that RANK, together with M-CSF, activates TFE3 through MAPK-dependent phosphorylation and that RANK activates TFEB via PKCβ to drive osteoclast lysosomal biogenesis and bone resorption.

## Connections

- [[RANKL]] — the only ligand; binding trimerizes RANK and initiates all downstream signaling. The RANK/RANKL/OPG triad is the central regulator of bone resorption.
- [[TRAF6]] — the essential cytoplasmic adaptor; TRAF6-deficient mice are osteopetrotic, making it the node through which RANK reaches IKK and MAPKs.
- [[Osteoclast]] — the cell whose differentiation, activation and survival RANK controls; its resorption machinery is TFEB/lysosome-dependent downstream of RANK.
- [[NF-κB]] — canonical pathway engaged via TRAF6–TAK1–IKK; required for osteoclastogenesis alongside NFATc1.
- [[TFE3]] — MAPK-dependent downstream transcription factor linking RANK to myeloid and osteoclast lineage commitment.

## Linking Summary

- New links added: [[RANKL]], [[TRAF6]], [[TAK1]], [[IKK complex]], [[IKKbeta]], [[NF-κB]], [[JNK]], [[p38 MAPK]], [[ERK]], [[PI3K]], [[Akt]], [[Calcium Signaling]], [[Osteoprotegerin]], [[Osteoclast]], [[Osteoporosis]], [[Periodontitis]], [[Rheumatoid Arthritis]], [[Multiple Myeloma]], [[Denosumab]], [[TFEB]], [[TFE3]], [[MAPK]], [[Osteopetrosis]], [[M-CSF]], [[NFATc1]], [[Osteoblast]], [[Dendritic cells]]
- Suggested notes to create: [[Osteopetrosis]], [[M-CSF]], [[NFATc1]], [[Osteoblast]], [[Osteoprotegerin]], [[Denosumab]], [[LGR4]], [[Familial Expansile Osteolysis]]
- Strong connections to strengthen: [[RANK]] ↔ [[RANKL]], [[RANK]] ↔ [[Osteoclast]], [[TSC]] ↔ [[Rheb]]