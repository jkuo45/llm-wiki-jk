---
title: Spindle Assembly Checkpoint
description: The surveillance network that delays anaphase until every kinetochore is correctly attached to spindle microtubules, halting APC/C activity through the Mad2-BubR1-Bub3-Cdc20 mitotic checkpoint complex.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [protein-complex, cell-cycle, mitosis, checkpoint, chromosome-segregation]
aliases: [Spindle Assembly Checkpoint, SAC, mitotic checkpoint, spindle checkpoint, mitotic checkpoint complex, MCC]
---

# Spindle Assembly Checkpoint

The **spindle assembly checkpoint** (SAC, or mitotic checkpoint) is a
surveillance network that blocks the metaphase-to-anaphase transition until
every chromosome is properly bi-oriented on the mitotic spindle. Its function
is fidelity: a cell that passes the checkpoint with even one unattached or
misoriented kinetochore missegregates chromosomes and becomes
[[Aneuploidy|aneuploid]].

## Core Components

Components were first identified in budding yeast as *Bub* (budding
uninhibited by benzimidazole) and *Mad* (mitotic arrest deficient) proteins:

- [[Mad2]] (MAD2L1) — the sensor/amplifier. Unattached kinetochores act as a
  catalytic platform that convert open Mad2 (O-Mad2) into closed Mad2 (C-Mad2),
  the form that binds Cdc20.
- [[BubR1]] (BUB1B) — the kinetochore-localized checkpoint kinase and the
  principal Cdc20 inhibitor. It also stabilizes correct kinetochore-microtubule
  attachments, so its checkpoint and chromosome-congression functions are
  partly separable.
- **Bub3** — the BubR1 binding partner that recruits BubR1 to unattached
  kinetochores; the BubR1 GLEBS domain mediates the interaction.
- [[CDC20|Cdc20]] — not strictly a checkpoint component but the target: the
  activating cofactor of the [[APC-C]].

## Mechanism of Action

The only known downstream target is Cdc20, the substrate-binding subunit of
the [[Anaphase Promoting Complex-Cyclosome]] (APC/C), the E3 ubiquitin ligase
whose activity is required for sister-chromatid separation.

1. Any unattached kinetochore generates a "wait-anaphase" signal, with Mad2 as
   the transducer.
2. C-Mad2 binds Cdc20, and the resulting Mad2–Cdc20 complex recruits
   BubR1–Bub3.
3. The four components assemble the **mitotic checkpoint complex** (MCC),
   which potently inhibits APC/C — about 3000-fold more efficiently than
   recombinant Mad2 alone.
4. With APC/C inhibited, [[Securin]] and [[CYCLIN B1|cyclin B1]] are not
   degraded; separase stays sequestered, sister chromatids stay joined, and
   Cdk1 activity persists.

> [!info] MCC is pre-assembled, not built at the kinetochore
> A notable refinement of the classic model: MCC exists as a preformed pool in
> interphase cells, allowing rapid APC/C inhibition on mitotic entry.
> Unattached kinetochores do not generate the complex — they *sustain*
> inhibition of an already-assembled MCC. Both Mad2 and BubR1 can each inhibit
> Cdc20 in vitro, but both are required for full checkpoint function in vivo,
> consistent with cooperative rather than redundant action.

## Attachment Surveillance

The checkpoint responds not only to attachment but to the *tension* generated
by correct attachment. BubR1 monitors attachment stability and CENP-E function
at kinetochores, and Bub3 is required for establishing efficient
kinetochore–microtubule attachments. A single unattached chromosome is
sufficient to inhibit anaphase onset, so the checkpoint is a logical AND gate
over all chromosomes.

## Failure, Ageing and Therapeutic Targeting

Weakened SAC activity is a well-documented feature of ageing. Reduced BubR1
levels in mice cause both aneuploidy and a progeroid premature-ageing
phenotype, and human SAC efficiency declines with age — linking chromosome
separation fidelity to [[Aging]] biology rather than treating it as pure
oncology.

Because tumour cells are often aneuploid and depend on altered mitotic
kinases, the SAC is a therapeutic target rather than merely a brake: PLK1 and
the CENP-E/Mps1 axis are exploited by mitotic-kinase inhibitors that push
cells over the checkpoint threshold. The trade-off is on-target toxicity —
pushing the SAC too hard kills proliferating normal cells.

## Documents

- (no document notes yet)

## Connections

- [[Mad2]] — the kinetochore-localized sensor and Cdc20-binding half of the MCC.
- [[BubR1]] — the checkpoint kinase and dominant Cdc20 inhibitor; its loss causes
  aneuploidy and progeroid ageing.
- [[Anaphase Promoting Complex-Cyclosome]] — the E3 ligase the checkpoint
  inhibits; the only known target of the pathway.
- [[CDC20]] — the activating cofactor of APC/C and the substrate the MCC binds
  to shut the complex down.
- [[Securin]] — the anaphase inhibitor whose persistence, downstream of blocked
  APC/C, is what actually prevents chromatid separation.
- [[CYCLIN B1]] — degraded only when the checkpoint is satisfied, so its
  stability also sustains mitotic Cdk1 activity.
- [[Mitosis]] — the process the checkpoint guards; passage is the transition
  the checkpoint licenses.
- [[Sister Chromatids]] — the structures whose correct separation the checkpoint
  guarantees.
- [[Centromere]] — the chromosomal locus from which kinetochores, and hence the
  checkpoint signal, originate.
- [[Aneuploidy]] — the direct consequence of checkpoint failure, and the reason
  the pathway exists.
- [[Aging]] — SAC efficiency declines with age, and BubR1 loss produces a
  progeroid phenotype.
- [[Cell Cycle]] — the framework within which the SAC is a transition gate.
- [[Cell Cycle Arrest]] — the downstream consequence of sustained checkpoint
  signalling.

## Linking Summary

- New links added: [[Mad2]], [[BubR1]], [[Anaphase Promoting Complex-Cyclosome]],
  [[CDC20]], [[Securin]], [[CYCLIN B1]], [[Mitosis]], [[Sister Chromatids]],
  [[Centromere]], [[Aneuploidy]], [[Aging]], [[Cell Cycle]], [[Cell Cycle Arrest]]
- Suggested notes to create: [[Kinetochore]], [[BUB1B]], [[Bub3]], [[Mad1]],
  [[Mps1]], [[Separase]], [[Centrosome]], [[Mitotic Kinase Inhibitor]]
- Strong connections to strengthen: [[Spindle Assembly Checkpoint]] ↔ [[Mad2]],
  [[Spindle Assembly Checkpoint]] ↔ [[Anaphase Promoting Complex-Cyclosome]],
  [[Spindle Assembly Checkpoint]] ↔ [[Aneuploidy]]