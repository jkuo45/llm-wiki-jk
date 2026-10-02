---
title: Cytokinesis
description: Cytokinesis is the physical division of the cytoplasm that completes cell division, executed by an actomyosin contractile ring constricting the cleavage furrow followed by ESCRT-mediated abscission of the intercellular bridge.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - biological-process
  - cell-cycle
  - cytoskeleton
aliases: [Cytokinetic division, Cleavage Furrow]
---

# Cytokinesis

**Cytokinesis** is the division of the cytoplasm that follows chromosomal segregation and converts one cell into two. It is a mechanically demanding process: the cell must build a contractile apparatus inside a membrane that is itself being constricted, hold it stable against the inward tension of the two separating daughter nuclei, and then sever the connection between the daughters at precisely the right moment. It is executed in two canonical stages — **furrow ingression** driven by an actomyosin ring, and **abscission** carried out by the [[ESCRT]] machinery.

> [!info] Cytokinesis is separate from mitosis
> Mitosis segregates duplicated chromosomes into two nuclei; cytokinesis partitions the cytoplasm. They are coordinated but mechanistically distinct processes, and they can fail independently — a cell can complete mitosis and then fail cytokinesis, producing a tetraploid binucleate cell. That distinction is why "division" outcomes must be reported as either a nuclear or a cytokinetic event.

## Contractile Ring Assembly

The ring assembles in the equatorial plane, where an equatorial microtubule array delivers centralspindlin and the centralspindlin-binding kinesin-6 motors (MKLP2 in mammalian cells) to the cortex. There:

- **Centralspindlin** binds [[RhoA]] GEF activity locally — principally via the Ect2/Ect2B scaffold and the centralspindlin-interacting kinesin — producing a sharply localized cortical RhoA ring despite the abundance of RhoA elsewhere in the cortex.
- **RhoA** activates [[ROCK]], which both activates [[Myosin]] II (NMII) by direct phosphorylation and promotes actin filament assembly through [[Formin]]-like effectors.
- **Actin and myosin II** form the ring proper. Myosin II is the force-generating element: loss of NMII function prevents cell rounding, blocks ring constriction, and produces cytokinetic failure and tetraploidy (PMID: 42694276).
- **Anillin** stabilizes the ring at the midbody and recruits septins, which form a diffusion barrier at the midbody that keeps ring components from leaking along the intercellular bridge.

> [!important] Septins as a spatial boundary
> Septin filaments form a ring at the midbody that functions as a diffusion barrier, partitioning the intercellular bridge membrane from the bulk plasma membrane. This spatial confinement is what lets the ring contract only in the equatorial plane rather than constricting the cell globally — without it, actomyosin depolymerization elsewhere in the cortex produces a catastrophically non-specific constriction. Septin ring assembly is dependent on anillin and on phosphatidylinositol 4,5-bisphosphate, whose local synthesis by septin-associated PIPKIγ isoforms controls centralspindlin association with the midbody (PMID: 41654539).

## Cleavage Furrow Ingression

RhoA activation initiates signaling through ROCK and the centralspindlin–Ect2 complex, driving actin polymerization and myosin II activation. The ring constricts, deepening the furrow and thinning the intercellular bridge into a stalk containing the midbody — the remnant of the spindle apparatus. Stabilization of the bridge against the tensile load of the separating nuclei is provided by the septin barrier and by microtubules.

## Abscission

The final cut is performed by the endosomal sorting complexes required for transport (ESCRT) machinery:

- **CHMP7** (an ISTD1/DAG1-bound ESCRT-III component) is enriched at the midbody via the ISTD1–DAG1 scaffold and nucleates the ESCRT-III polymer.
- Spiral ESCRT-III filaments assemble along the bridge membrane, and constriction of this spiral produces membrane scission — a topology that allows ESCRT to sever a membrane neck from its own cytoplasmic side, something no other membrane-remodeling machinery does directly.
- Vps4 then disassembles the ESCRT-III polymer, and the separated daughters inherit distinct membrane patches.

> [!warning] Abscission timing is not incidental
> ESCRT-III cannot act while the midbody microtubules remain intact; abscission is therefore delayed until spindle disassembly permits scission. This couples the timing of cytoplasmic division to completion of mitosis. Long-lived bridges — retained midbodies, or bridges with compromised microtubules — are a recognized feature of senescence, stem cells, and some tumors, and long-lived bridges can promote cGAS-mediated inflammatory signaling via retained DNA/cytoplasmic material.

## Cytokinesis Failure & Disease

Cytokinesis failure produces a **binucleate tetraploid** cell. This is not merely a size abnormality:

- The tetraploid cell can re-enter the [[Cell Cycle]] and divide again, propagating polyploidy; subsequent divisions can generate aneuploid daughter cells.
- Polyploidization and aneuploidy are strongly associated with tumorigenesis, and a long-standing hypothesis holds that cytokinetic failure and consequent aneuploidy contribute to cancer initiation, particularly in the context of loss of p53-dependent arrest (PMID: 42694276).
- Tetraploidy also occurs in normal tissues — hepatocytes and skeletal muscle are stably or occasionally polyploid, and polyploidy in normal tissues is an active area of description (PMID: 40117022).
- Cytokinesis failure is a recognized feature of **cellular senescence** in some contexts, and loss of [[Mitochondrial Fusion|Mitochondrial fusion/fission]] balance couples to the cytoskeletal changes that accompany altered cell-cycle exit.

> [!info] The C. elegans precedent
> Mutations that disrupt cytokinetic components — the septins, anillin, and contractile ring components — were first identified in *C. elegans* and are standardly named for the phenotype they produce (e.g., *anillin*, *septin* mutants). The genetics of cytokinesis was substantially built in this system before corresponding mammalian genes and functions were established.

## Links in the Vault Context

- **Cytoskeletal coupling.** The actin–myosin basis of cytokinesis is the same machinery that underlies [[Actin Cytoskeleton]] force generation; the vault's [[Cytokinesis]] links from [[Actin Cytoskeleton]] describe exactly this contractile ring.
- **Cell cycle and checkpoints.** Cytokinesis occurs at the end of [[Mitosis]] and is gated by [[Cell Cycle]] checkpoints, notably the [[Spindle Assembly Checkpoint]] (SAC), which ensures segregation is correct before the cell commits to division.
- **Aneuploidy and cancer.** Cytokinesis failure is one of the mechanisms of chromosomal instability and is therefore relevant to the cancer and [[Genomic Instability]] literature.
- **Aging and senescence.** Cytokinesis failure and its consequences accumulate with age, and polyploidy in senescent cells is a documented, if underappreciated, senescence phenotype.

## Documents

- [[_document_ - Molecular Insights into Reprogramming-Initiation Events Mediated by the OSKM Gene Regulatory Network|Molecular Insights into Reprogramming-Initiation Events Mediated by the OSKM Gene Regulatory Network]] — discusses the transcriptional events initiating reprogramming, in which cell-cycle re-entry and division efficiency are early determinants of reprogramming success.
- [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]] — covers cell-cycle exit and its regulation, which is the state cytokinesis must re-enter to leave.

## Connections

- [[Cell Division]] — cytokinesis is the cytoplasmic half of cell division; this note is the detail behind the "cytoplasmic division" entry in the broader note.
- [[Cell Cycle]] — cytokinesis is the terminal event of the cycle and is coordinated with mitotic exit and spindle disassembly.
- [[Mitosis]] — cytokinesis immediately follows and is mechanically coupled to mitosis via the spindle, centralspindlin, and the midbody.
- [[Actin Cytoskeleton]] — the contractile ring is assembled from the same actin architecture that drives migration and adhesion; the vault's Actin Cytoskeleton note already documents the ring as its central example.
- [[RhoA]] — local RhoA activity is the initiating signal for contractile ring assembly and the target of equatorial RhoGEF recruitment by centralspindlin.
- [[Myosin]] — myosin II is the force-generating component of the ring; its loss is sufficient to cause cytokinetic failure and tetraploidy.
- [[ESCRT]] — the ESCRT-III spiral performs the actual membrane scission at abscission; this is a rare example of membrane severing from the cytoplasmic face.
- [[Microtubule]] — the spindle midzone and centralspindlin are delivered along microtubules, and abscission cannot complete until midbody microtubules are disassembled.
- [[Apoptosis]] — cytokinetic failure and retained midbodies can contribute to the pro-inflammatory consequences of dead or senescent cells, linking mechanical division failure to inflammatory signaling.
- [[p53]] — p53-dependent arrest is the checkpoint that responds to the aneuploidy and polyploidy arising from cytokinetic failure.

## Linking Summary

- New links added: [[Cell Division]], [[Cell Cycle]], [[Mitosis]], [[Actin Cytoskeleton]], [[RhoA]], [[Myosin]], [[ESCRT]], [[Microtubule]], [[Apoptosis]], [[p53]], [[Genomic Instability]], [[Mitochondrial Fusion]]
- Suggested notes to create: [[Septin]], [[Anillin]], [[Centralspindlin]], [[ROCK]], [[ROCK1]], [[ROCK2]], [[Abscission]], [[Intercellular Bridge]], [[Spindle Assembly Checkpoint]], [[Tetraploidy]], [[Formin]], [[Non-Muscle Myosin II]] — removed as already existing: Aneuploidy
- Strong connections to strengthen: [[Actin Cytoskeleton]] ↔ [[Cytokinesis]] (the vault's Actin Cytoskeleton note names cytokinesis as the contractile ring's context but the edge is one-directional), [[Mitosis]] ↔ [[Cytokinesis]] (the vault's Mitosis note lists cytokinesis as a successor stage without a resolvable target).