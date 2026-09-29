---
title: ASCT2
description: ASCT2 (SLC1A5) is a sodium-dependent neutral amino acid transporter that is the principal plasma-membrane importer of glutamine, and a well-characterized metabolic dependency of cancer cells.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein, membrane-transporter, metabolism, cancer-metabolism, drug-target]
aliases: [SLC1A5, alanine-serine-cysteine transporter 2, neutral amino acid transporter B0, ATB0]
---

# ASCT2

**ASCT2** (encoded by *SLC1A5*) is the cell-surface transporter that imports
[[Glutamine]] and the other small neutral amino acids into most mammalian cells. It is a
sodium-coupled obligatory exchanger rather than a channel: substrate uptake is driven
inward by the Na+ gradient maintained by the Na+/K+-ATPase, and export of the exchanged
neutral amino acid is a stoichiometric consequence.

## Family and function

ASCT2 belongs to the solute carrier family 1 (SLC1), a group of glutamate transporters,
and functions as the obligatory amino-acid exchange partner of the System ASC
transporter. Its substrate range is broad but small: glutamine, alanine, serine,
cysteine, asparagine, threonine, glycine, and (weakly) proline and alanine analogues. It
is broadly expressed — gut epithelium, liver, placenta, and most proliferating tissues —
and is the main route by which extracellular glutamine is made available to the cytosol
and mitochondrion.

ASCT2 is distinct from the *other* glutamine transporter, [[SLC38A2]] (SNAT2), which is a
symporter, and from the broad neutral amino acid transporter [[SLC38A9]]. Loss of ASCT2
is generally tolerated in animal models by upregulating alternative transporters, whereas
sustained SLC1A5 deletion in human tumours is growth-limiting.

> [!warning] Not the same as SLC1A5 transport in the brain
> ASCT2 also appears in astrocytes and neuron–glia signalling, and the transporter's
> contribution to cerebral glutamine handling is separate from its tumour role.

## Cancer biology: glutamine addiction

Proliferating cells — including most cancers — depend on glutamine for three purposes:
replenishing the [[TCA cycle]] (glutaminolysis), supplying nitrogen for nucleotide and
amino-acid synthesis, and generating reducing equivalents.
ASCT2 is the entry gate, so it is a high-frequency dependency in cancers and a
therapeutic target. Inhibiting it in preclinical models reduces proliferation, induces
autophagy, and can radiosensitize tumours.

Two vault contexts make this specific:

- **[[SLC1A5]]** is the direct transcriptional target of [[miR-137]] in [[Melanoma]]; loss
  of miR-137 raises SLC1A5, sustains [[Glutathione]] synthesis and the [[GPX4]] arm of
  the antioxidant defense, and thereby blunts [[Ferroptosis]].
- **Glutamine availability** shapes the redox state more broadly. Glutamine entry
  supports GSH production, so ASCT2 loss is, indirectly, a ferroptosis-priming event.

## Pharmacology

There is no approved SLC1A5 inhibitor. Preclinical work has used the competitive
inhibitor **JPH203** (a prodrug of the uptaken form JPH203) and gene-silencing approaches.
Erastin, a well-known GPX4 inhibitor used in ferroptosis work, also acts on System
x(c)- rather than ASCT2, but has off-target effects at the SLC1A5/step in some reports.
Target validation in human patients is incomplete, and normal tissue tolerance — gut and
liver in particular — is the open question.

## Documents

- [[Glutamine]] — the principal cargo; explains why the transporter is a dependency in
  proliferating tissue and how its loss perturbs nitrogen and redox metabolism.

## Connections

- [[Glutamine]] — ASCT2 is the main import route for glutamine, and the reason
  "glutamine addiction" is druggable at the membrane. Suppressing import collapses both
  TCA anaplerosis and nitrogen supply.
- [[SLC1A5]] — same gene, different emphasis: the SLC1A5 note carries the miR-137 /
  melanoma ferroptosis axis, this note the transporter biology and pharmacology. The two
  should eventually be merged or cross-referenced to avoid duplicate entities for one
  gene.
- [[Glutaminase]] — the downstream enzyme that converts imported glutamine to glutamate.
  ASCT2 (import) and [[Glutaminase]] (activation) are the two serial control points of
  the same pathway, and both are independently targeted.
- [[Ferroptosis]] — because ASCT2 supports GSH synthesis, its loss lowers the reductive
  capacity that [[GPX4]] requires, making SLC1A5 loss a ferroptosis-amplifying event
  rather than a purely nutritional one.
- [[mTORC1]] — glutamine-derived α-ketoglutarate is a key signal to mTORC1 and to
  epigenetic demethylases, so nutrient import through ASCT2 links transport to
  signalling and chromatin states.

## Linking Summary

- New links added: [[SLC38A2]], [[SLC38A9]], [[Glutaminase]], [[Melanoma]], [[miR-137]],
  [[Ferroptosis]], [[Glutathione]], [[GPX4]], [[TCA cycle]], [[mTORC1]], [[Nucleotide]]
- Suggested notes to create: [[System ASC]], [[Neutral Amino Acid Transporter]],
  [[Glutaminolysis]], [[SLC1A5 Inhibition]]
- Strong connections to strengthen: [[ASCT2]] ↔ [[SLC1A5]] (same gene — resolve
  duplicate-entity risk), [[ASCT2]] ↔ [[Glutamine]]
