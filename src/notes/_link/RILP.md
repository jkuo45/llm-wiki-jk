---
title: RILP
description: Rab7-interacting lysosomal protein, a Rab effector composed of an N-terminal dynein-dynactin recruiting module and a C-terminal Rab7-binding coiled coil that forms a dyad; it is the principal minus-end motor adaptor positioning late endosomes and lysosomes perinuclearly.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - autophagy
  - membrane-traffic
aliases:
  - Rab7-interacting lysosomal protein
  - RAB7IP
  - PP10141
---

# RILP

**RILP** (Rab7-interacting lysosomal protein, gene *RAB7IP*) is a ~401-residue
cytoplasmic effector of the small GTPase [[Rab7]]. It performs one job: it couples a
Rab7-positive membrane to cytoplasmic dynein–dynactin, so that late endosomes and
lysosomes move toward the microtubule minus end. It is the counterpart to the
plus-end adaptor [[FYCO1]], and the two determine where degradative compartments
sit in the cell.

## Architecture

RILP is built from two separable halves, which is why it is such a useful experimental
tool:

- **N-terminal region** binds the dynein intermediate chain and light chain and the
  dynactin p150Glued subunit, recruiting the motor complex.
- **C-terminal region** binds GTP-bound [[Rab7]]. The Rab7-binding domain forms a
  coiled-coil homodimer with two symmetric surfaces, giving a **Rab7–RILP₂–Rab7 dyad**
  in which one RILP dimer bridges two Rab7 molecules. Cryo-EM of Rab7-GTP with this
  domain shows engagement through the switch and interswitch regions together with
  the SF1 and SF4 motifs, and mutations disrupting either surface abolish
  late endosomal/lysosomal targeting of both proteins.

Expressing RILP-Ct (Rab7-binding, no motor recruitment) versus RILP-Nt (motor
recruitment, no Rab7 binding) is a standard way to dissect the two functions in cells.

> [!info] Mechanism
> RILP is a genuine *bridge*, not a motor itself: by binding Rab7 on the vesicle and
> dynein–dynactin in the cytoplasm at the same time, it mechanically couples an
> organelle to a motor on microtubules. Under high load the dynein motor falls off the
> microtubule while the adaptor stays bound, so RILP concentration sets transport
> efficiency. Organelle positioning is therefore a competition between RILP-mediated
> minus-end transport and FYCO1-mediated plus-end transport, both recruited by the
> same Rab7.

## What it controls

- **Positioning.** RILP drives centripetal movement of late endosomes, lysosomes and
  Rab7-positive phagosomes, and its overexpression clusters them perinuclearly.
- **Phagosome maturation and extension.** On Rab7-positive phagosomes, RILP both
  translocates them and promotes extension of tubules toward late endocytic
  compartments, which is how a phagosome finds a lysosome. This is the process
  pathogens subvert: *Salmonella* secretes SifA, which interacts with Rab7 and
  displaces RILP, uncoupling Rab7 from the motor and preventing SCV–lysosome fusion
  despite apparently active Rab7 recruitment.
- **Axonal retrograde transport.** Late endosomes must move retrogradely along
  dendrites toward somatic lysosomes; inhibiting dynein recruitment either by
  dynamitin or by RILP-Ct blocks this and degrades bulk dendritic membrane protein
  degradation.
- **V-ATPase assembly.** RILP binds the V1G1 subunit of the V-ATPase peripheral
  stalk, controlling its stability, localisation and assembly. Since lysosomal
  acidification drives cargo degradation, this links organelle positioning to
  degradative capacity. Recently RILP has also been reported to drive lysosomal
  cholesterol accumulation by inhibiting ER–endolysosome contacts.

## Other interactions

RILP is a shared effector of Rab7 and Rab34, and the two have overlapping but
distinct functions. Two paralogues, RLP1 and RLP2, share the Rab-binding module but
lack the ~62-residue region (amino acids 272–333) unique to RILP; transplanting that
segment into RLP1 confers the ability to regulate lysosomal morphology, and it
correlates with the ability to bind the GTP forms of both Rabs. RILP also interacts
with the HOPS complex via its VPS41 subunit, and with RalGDS to modulate RalA,
inhibiting invasion of breast cancer cells. Caspase-1 cleavage of RILP has been
reported to regulate cellular trafficking in neoplastic epithelial cells.

A constitutively active form, RILP-C33, which cannot be inactivated by caspase-1
cleavage, has been used to restore retrograde trafficking in models such as
Charcot–Marie–Tooth disease.

## Pathogen relevance

RILP is not merely a trafficking curiosity. The RILP–Rab7 axis is a recognised
target for host-pathogen manipulation, and the failure of Salmonella-induced
filaments to reach lysosomes despite Rab7 recruitment is a clean demonstration that
Rab recruitment alone is not sufficient readout of fusion competence.

## Documents

- [[Rab7]] — RILP's principal upstream regulator; the Rab7 note names RILP as the
  minus-end positioning effector recruited in the GTP-bound state, alongside FYCO1.
- [[Lysosomal Localization]] — the vault's note on organelle positioning, which
  places RILP–[[ORP1L]] in the minus-end arm opposite FYCO1's plus-end transport,
  and notes the perinuclear clustering that autophagic flux depends on.

## Connections

- [[Rab7]] — the GTPase that recruits RILP; RILP is the canonical and best
  structurally characterised Rab7 effector, and the Rab7–RILP pair converts Rab
  identity into directional transport.
- [[Lysosomal Localization]] — RILP is the mechanism by which late endosomes and
  lysosomes achieve the perinuclear clustering that autophagosome–lysosome
  apposition requires; disrupting RILP leaves autophagosomes formed but unsealed
  against lysosomes.
- [[Autophagy]] — autophagic flux requires lysosomes to be positioned where
  autophagosomes are, and RILP is the minus-end arm of that positioning; the C33
  cleavage-resistant form is a pharmacological rescue strategy in lysosomal
  trafficking disease models.
- [[FYCO1]] — the opposing, plus-end-directed Rab7 effector recruited through ORP1L
  and kinesin-1; together the two set the anteroposterior and radial position of
  degradative compartments.
- [[ORP1L]] — links RILP to the dynein machinery through bIII spectrin, and with
  RILP forms the tripartite ORP1L–Rab7–RILP complex through a non-canonical GTPase
  interaction surface.
- [[Lysosome]] — RILP's cargo; its motor recruitment, its control of lysosomal
  morphology, and its V-ATPase interaction all converge on the lysosome as organelle.
- [[Phagosome]] — the same minus-end transport and tubule-extension function applies
  to Rab7-positive phagosomes, making RILP essential for phagolysosome formation.
- [[Autophagic Flux]] — the practical readout; RILP loss leaves autophagosome numbers
  normal or high but blocks delivery to lysosomes, so flux falls without formation
  falling.

## Linking Summary

- New links added: [[Rab7]], [[Lysosomal Localization]], [[Autophagy]], [[FYCO1]],
  [[ORP1L]], [[Lysosome]], [[Phagosome]], [[Autophagic Flux]]
- Suggested notes to create: [[Dynein]], [[Dynactin]], [[RAB7IP]], [[Rab34]],
  [[V-ATPase]], [[RILP-C33]], [[HOPS Complex]], [[Microtubule]], [[MTOC]],
  [[Charcot-Marie-Tooth Disease]], [[Rif1]], [[Salmonella]], [[Phagosome Maturation]]
- Strong connections to strengthen: [[RILP]] ↔ [[Rab7]],
  [[RILP]] ↔ [[Lysosomal Localization]], [[RILP]] ↔ [[Autophagy]]
