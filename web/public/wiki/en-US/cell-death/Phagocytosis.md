---
title: Phagocytosis
description: Phagocytosis is the actin-driven engulfment of large particles by professional phagocytes, culminating in phagosome formation and fusion with lysosomes for degradation; specialised forms include efferocytosis, LC3-associated phagocytosis and LAP-independent corpse clearance.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [biological-process, innate-immunity, clearance, vesicular-traffic, inflammation]
aliases: [Phagocytosis, Phagocytic uptake]
---

# Phagocytosis

**Phagocytosis** is the receptor-driven internalisation of large particles —
bacteria, dead cells, apoptotic bodies, and inorganic material — by eukaryotic
cells into a membrane-bound compartment destined for lysosomal degradation. It
is distinct from endocytosis in scale and in purpose: it is the actin-dependent
engulfment of cargo too big for clathrin-coated vesicles, and it is how the
innate immune system physically removes both pathogens and its own dead cells.

> [!info] Cells that do it
> "Professional" phagocytes — [[Macrophage|macrophages]], monocytes,
> dendritic cells, [[Neutrophils]] — do it constitutively. Microglia do it in
> brain, Kupffer cells in liver, osteoclasts in bone, and
> [[Retinal Pigment Epithelium]] cells in the eye, each with a locally specific
> cargo load.

## Mechanism

**Recognition and opsonization.** The particle surface must present a signal the
phagocyte can read. Three classes of receptor are central:

- **Pattern recognition receptors** reading conserved microbial features —
  [[Toll-like Receptor|TLRs]], scavenger receptors, lectins such as the mannose
  receptor, and C-type lectin receptors. These drive *non-opsonized* phagocytosis.
- **Fcγ receptors** reading aggregated IgG opsonins.
- **Complement receptors** reading [[Complement System|complement]] fragments,
  chiefly C3b and iC3b.

**Signalling.** Receptor engagement clusters the receptor and its transducing
chains — often ITAM-bearing adaptors for FcγR, or the MerTK-associated chains for
efferocytosis — and activates Src-family kinases, PI3K, and Rac1/Cdc42. This is
the so-called "engulfment signal", distinct from the priming signal that
activates inflammatory transcription.

**Engulfment.** Actin polymerisation beneath the bound particle drives
membrane protrusion, forming a cup that closes and pinches off. This requires
rearrangement of the actin cytoskeleton, and small GTPases switch between an
"engulfment-competent" and an "inhibition-of-phagocytosis" state in response to
the ratio of activating and inhibitory signals received.

**Phagosome maturation.** The nascent [[Phagosome]] fuses sequentially with
early endosomes (Rab5), late endosomes, and finally [[Lysosome|Lysosomes]] (Rab7).
Tethering and fusion of each step use the machinery of the endolysosomal system,
including [[HOPS Complex]], so a fusion defect arrests maturation rather than
engulfment.

**Killing and digestion.** The phagolysosome acidifies (typically pH 4.5–5.0) and
generates ROS via [[NADPH Oxidase|respiratory burst]] and reactive nitrogen
species. Contents are degraded by lysosomal hydrolases; indigestible residue is
exocytosed or retained as a residual body.

> [!important] Phagosome maturation is the usually-skipped step
> Ingesting a particle is easy; degrading it is the hard part. Several
> intracellular pathogens deliberately arrest maturation — *Mycobacterium
> tuberculosis* in particular survives in an immature phagosome by blocking the
> Rab5→Rab7 conversion. Failure of maturation is also the lesion in
> chronic granulomatous disease, where defective NADPH oxidase leaves the
> phagolysosome intact but chemically unable to kill.

## Specialised Forms

**Efferocytosis** is the clearance of apoptotic cells — a specific, actively
anti-inflammatory form of phagocytosis. It is initiated by "find-me" signals
released by the dying cell (ATP/UTP via P2Y2, lysophosphatidylcholine,
S1P, CX3CL1) that recruit macrophages before they ever touch the corpse.
Efferocytosis suppresses [[Inflammation]] by promoting IL-10 and TGF-β release
and by activating the nuclear receptor [[NRF2]]-linked metabolic programme, and
it is a major mechanism of inflammation resolution and of apoptotic-cell
clearance during development.

**LC3-associated phagocytosis (LAP)** is a non-canonical autophagy pathway in
which [[LC3]] is conjugated onto the single-membrane phagophore by the
ATG7/ATG3/Laminin B receptor machinery rather than by ATG5-dependent autophagy.
It requires NADPH oxidase activity and culminates in phagosome–lysosome fusion.

**Erythrophagocytosis** in the spleen and liver clears senescent red cells daily
— roughly 1% of the erythrocyte pool — in a process gated by the spleen
macrophage's ability to discriminate "old" from "not-yet-old" cells.

## Physiology & Disease Relevance

- **Retinal pigment epithelium.** Every photoreceptor outer segment is shed daily
  and phagocytosed by RPE cells through MERTK–αvβ5. Failure accumulates
  undegraded POS, drusen forms, and drives
  [[Macular Degeneration]].
- **Neuronophagia.** Degenerating pigmented neurons release
  [[Neuromelanin]], a potent chemoattractant, and are engulfed by microglia —
  see [[Neuronophagia]].
- **Senescence.** Phagocytic clearance is one route by which senescent cells are
  removed; failure of clearance lets persistent SASP secretion sustain chronic
  inflammation (see [[Senescent Cells]] and [[Senescence Surveillance]]).
- **Infectious disease and host defence.** Phagocytosis is the primary effector
  mechanism of innate immunity, and defects in it — neutropenia, CGD,
  hypogammaglobulinaemia with impaired opsonization — produce recurrent
  bacterial infection.
- **Atherosclerosis and inflammatory disease.** Efferocytosis of apoptotic
  foam cells in the plaque is normally protective; when it fails, the necrotic
  core forms and amplifies inflammation.
- **Opsonin-independent clearance** in the eye and lung also occurs
  non-phagocytically, which limits how far a phagocytosis phenotype generalizes
  to a given tissue.

## Documents
- [[_document_ - Lysosome biogenesis Regulation and functions|Lysosome biogenesis: Regulation and functions]] — establishes that phagocytosis of apoptotic or living cells generates phagosomes that fuse with lysosomes, and shows how phagolysosome shrinkage feeds phagolysosome and autolysosome reformation.
- [[_document_ - Autophagy takes it all – autophagy inducers target immune aging|Autophagy takes it all — autophagy inducers target immune aging]] — treats phagocytic capacity as one component of the age-associated decline in innate immune defence.

## Connections
- [[Phagosome]] — the phagosome is the product of engulfment and the substrate
  of maturation. Engulfment without maturation gives a large acid-poor vesicle
  full of cargo; fusion machinery failure gives an arrested intermediate-stage
  phagosome. These are distinguishable phenotypes experimentally.
- [[Macrophage]] — macrophages are the primary phagocyte and the main effector of
  efferocytosis. Their phagocytic programming is tissue-determined: alveolar
  macrophages are poor phagocytes for inert particles, while microglia are
  professional phagocytes for neuronal debris.
- [[Autophagy]] — LAP links phagocytosis to the autophagy machinery through LC3
  conjugation on a single membrane, blurring the line between the two pathways.
  LC3 lipidation on phagosomes uses ATG7/ATG3 and requires NADPH oxidase,
  whereas canonical autophagy requires ATG5.
- [[Complement System]] — complement fragments are the major opsonins in the
  absence of antibody, and C3b/C3bi deposition converts a particle from
  invisible to phagocytosable. Complement and phagocytosis are therefore one
  pathway in two halves.
- [[Innate Immune System]] — phagocytosis is the effector arm of innate immunity:
  recognition is germline-encoded and pathogen-pattern-based, with no need for
  prior sensitization.
- [[Retinal Pigment Epithelium]] — daily photoreceptor outer-segment clearance via
  MERTK/αvβ5 makes RPE cells among the most heavily phagocytic cells in the body.
  Failure of this single pathway is sufficient to cause retinal degeneration.
- [[LC3]] — LC3 conjugation on phagosome membranes defines LAP and is the
  mechanistic point where phagocytosis and autophagy pathways converge.

## Linking Summary
- New links added: [[Macrophage]], [[Neutrophils]], [[Phagosome]], [[Lysosome]],
  [[Rab5]], [[Rab7]], [[HOPS Complex]], [[Complement System]],
  [[Toll-like Receptor]], [[NADPH Oxidase]], [[NRF2]], [[Inflammation]],
  [[Innate Immune System]], [[Autophagy]], [[LC3]], [[Retinal Pigment Epithelium]],
  [[Macular Degeneration]], [[Neuromelanin]], [[Neuronophagia]],
  [[Senescent Cells]], [[Senescence Surveillance]]
- Suggested notes to create: [[Efferocytosis]], [[Opsonization]],
  [[Phagosome Maturation]], [[LC3-associated Phagocytosis]], [[Respiratory Burst]],
  [[Chronic Granulomatous Disease]], [[MertK]], [[Find-Me Signals]],
  [[Professional Phagocyte]], [[Chronic Granulomatous disease]]
- Strong connections to strengthen: [[Phagocytosis]] ↔ [[Phagosome]],
  [[Phagocytosis]] ↔ [[Macrophage]], [[Phagocytosis]] ↔ [[Efferocytosis]]