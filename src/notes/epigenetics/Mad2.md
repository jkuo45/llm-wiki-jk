---
title: Mad2
description: Mad2 (MAD2L1) is the checkpoint-sensing component of the mitotic spindle assembly checkpoint; it binds Cdc20 to inhibit APC/C activity until every kinetochore is correctly attached, thereby preventing aneuploidy.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, cell-cycle, checkpoint, mitosis, chromosome-segregation]
aliases: [Mad2, MAD2L1, MAD2, Mitotic Arrest Deficient 2, Mad2A, Mad2B, Mad2 pseudogene]
---

# Mad2

**Mad2** (mitotic arrest deficient 2; gene symbol *MAD2L1*) is the sensor component
of the mitotic spindle assembly checkpoint (SAC). It couples kinetochore
attachment state to the cell-cycle engine: unattached or improperly attached
kinetochores generate a signal that sequesters Mad2 in a closed conformation
capable of binding Cdc20, and Mad2-bound Cdc20 is catalytically inert, so the
[[Anaphase Promoting Complex-Cyclosome]] cannot ubiquitinate securin and cyclin B.

> [!info] The logic in one line
> Mad2 is the gate that converts "a chromosome is not ready" into "anaphase does
> not begin". Once satisfied, unattached kinetochores are no longer signalling,
> Mad2 is released from Cdc20, and the switch flips irreversibly toward the
> metaphase-to-anaphase transition.

## Forms and Mechanism

Mad2 is famous for a **closed–open conformational switch**, resolved
structurally by Huang and colleagues in 2006 and the clearest single-molecule
illustration of conformational proofreading in the cell.

- **Closed Mad2** (C-Mad2) is the checkpoint-active form: it dimerizes into a
  tight **MAD2:Mad2** heterotetramer, creating a composite surface that grips
  the C-terminal **MAD2-interacting motif (MIM)** of Cdc20. This interaction
  sterically occludes Cdc20's ubiquitin-substrate assembly site.
- **Open Mad2** (O-Mad2) is the soluble monomer with the same C-terminal
  "safety belt" geometry but lacking the composite Cdc20-binding surface. The
  safety belt is held closed by a tight interaction between the N-terminal and
  C-terminal regions.

The switch is allosteric and irreversible in the activating direction: once
C-Mad2:Cdc20 forms, a second Mad2 "safety belt" latches over the first. The
consequence is that a single unattached kinetochore can generate enough C-Mad2
to saturate cellular Cdc20 and arrest the cell — the checkpoint is a
threshold-free switch, not a graded rheostat.

The C-terminal **MAD2-interacting motif of Cdc20** is the hot-spot: mutations
there (Cdc20 residues R132, P137, R132A) abolish Mad2 binding and produce
**mitotic checkpoint failure** despite fully assembled, tension-bearing
kinetochores.

> [!warning] Mad2 has four pseudogenes
> The human genome carries *MAD2L1P1–P4*, transcribed and sometimes translated.
> This genomic complexity is a genuine confounder in both mapping and
> immunohistochemistry, and it is the reason *MAD2L1* rather than "Mad2" is the
> correct gene to name.

## Roles

**Preventing aneuploidy.** Loss of Mad2 in mice causes precocious anaphase,
massive chromosome missegregation, and embryonic lethality; partial loss produces
mosaic variegated aneuploidy phenotypes. Cells surviving Mad2 loss accumulate
aneuploidy, which drives both proliferative and degenerative phenotypes.

**SAC-independent functions.** Mad2 also localizes to kinetochores, centrosomes,
and chromatin in a checkpoint-independent manner, and has reported roles in
mitochondrial function and in receptor trafficking at the kinetochore.

**The MAD2-containing mitotic checkpoint complex.** Mad2 acts in the MCC
together with BubR1 (also Mad3), Bub3, and Cdc20, with which it forms the
tetrameric mitotic checkpoint complex that is the principal direct APC/C
inhibitor.

## Disease Relevance

> [!important] Partial loss is the oncogenic case
> Complete Mad2 loss is embryonic-lethal. The clinically relevant lesion is
> *partial* loss of function — the dose left is enough to survive but not enough
> to be accurate. Human *MAD2L1* mutations are associated with mosaic variegated
> aneuploidy syndrome and with cancer predisposition, and reduced Mad2 protein
> has been reported across a range of tumours.

The mechanistic reason this matters is that **aneuploidy is both an outcome and
an accelerant**: missegregation produces chromosome instability, which
accelerates the mutation rate, which drives further instability. Chronic
checkpoint attenuation is therefore a plausible general feature of malignancy
rather than a mutation confined to particular tumour types. In one notable case,
*Mad2* knockout murine thymocytes develop spontaneous tumours — chiefly
lymphomas — without any single collaborating oncogenic lesion, which is direct
evidence that checkpoint insufficiency alone is sufficient to promote
tumorigenesis in that lineage.

## Documents
- (no document notes yet)

## Connections
- [[Anaphase Promoting Complex-Cyclosome]] — Mad2 inhibits APC/C by sequestering
  its co-activator Cdc20. The entire checkpoint reduces to that one inhibition:
  no Cdc20, no securin or cyclin B ubiquitination, no destruction by the
  [[26S Proteasome]], no anaphase.
- [[BubR1]] — BubR1 (Mad3) is Mad2's obligate partner in the mitotic checkpoint
  complex and supplies the dominant unattached-kinetochore binding activity.
  Mad2 supplies Cdc20 inhibition; the checkpoint fails if either is deficient.
- [[Cyclin B]] — cyclin B degradation is the event whose timing the checkpoint
  controls. Held undegraded by checkpoint-mediated APC/C inhibition, cyclin B
  sustains CDK1 activity and enforces the metaphase arrest; once destroyed, cells
  exit mitosis irreversibly.
- [[Aging]] — spindle assembly checkpoint efficiency declines with age in several
  model organisms, and chromosome missegregation accumulates with age. Mad2
  sits on that path, and the dose-reduction sensitivity above is the reason
  checkpoint decay is enough to raise cancer incidence with age.
- [[Aneuploidy]] — Mad2 is the direct brake on aneuploidy, and its attenuation is
  the canonical upstream cause.
- [[Proteasome]] — the checkpoint governs destruction, not synthesis. Mad2's
  whole influence on the proteasome is indirect and purely regulatory: by
  blocking APC/C, it keeps substrates away from the 26S.

## Linking Summary
- New links added: [[Anaphase Promoting Complex-Cyclosome]], [[BubR1]],
  [[Cyclin B]], [[26S Proteasome]], [[Aging]], [[Aneuploidy]], [[Proteasome]]
- Suggested notes to create: [[Spindle Assembly Checkpoint]] — removed as already existing: CDC20
  [[Kinetochore]], [[Chromosome Segregation]], [[Chromosomal Instability]],
  [[Mosaic Variegated Aneuploidy]], [[MAD2-binding Motif]],
  [[Mitotic Checkpoint Complex]], [[Mitosis]]
- Strong connections to strengthen: [[Mad2]] ↔ [[Anaphase Promoting Complex-Cyclosome]],
  [[Mad2]] ↔ [[BubR1]], [[Mad2]] ↔ [[Aneuploidy]]