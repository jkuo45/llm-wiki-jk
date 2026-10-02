---
title: HOPS Complex
description: The HOPS complex is a conserved six-subunit homotypic fusion and protein sorting tethering complex, built on a VPS16-VPS33-VPS18-VPS11 core, that couples Rab7-GTP on late endosomes and lysosomes to SNARE assembly and membrane fusion.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein-complex, membrane-traffic, lysosome, tethering, autophagy]
aliases: [HOPS complex, Homotypic Fusion and Vacuole Protein Sorting complex, HOPs, CCC-HOPS, HOPS]
---

# HOPS Complex

The **HOPS complex** — homotypic fusion and protein sorting complex — is the
tethering factor that licenses fusion of late endosomes and lysosomes with each
other and with autophagosomes. It does not perform fusion itself; it *tethers*
two membranes at a distance, engages the Rab7 small GTPase on the target
membrane, and stabilizes the trans-SNARE complex that finally drives the merge.
It is the endosomal counterpart of the COPII and COPI coat machinery's role in
earlier secretory steps, and the functional relative of the CORVET complex that
does the same job one step earlier, at the endosome.

> [!info] Where HOPS sits in the fusion sequence
> Fusion of a Rab7-bearing lysosome with an autophagosome proceeds as
> **Rab7-GTP recruitment → tethering by HOPS → trans-SNARE zippering → lipid
> merging**. HOPS is therefore not a motor and not a fusogen: removing it leaves
> membranes correctly sorted and tethered nowhere, so fusion fails despite
> competent SNAREs.

## Subunits

The mammalian complex is a heterohexamer of two overlapping subcomplexes:

| Subcomplex | Subunits | Role |
|---|---|---|
| HOPS-SKD core | VPS16, VPS33A, VPS18, VPS11 | shared with CORVET; structural scaffold and SM protein binding |
| HOPS-specific | VPS39, VPS41 | confer lysosomal targeting and Rab7 selectivity |

All six subunits share an N-terminal β-propeller followed by an α-helical
bundle. The α-helical domains form a helical bundle that positions the complex
across the membrane pair, while the β-propeller of VPS33A — the SM protein — sits
on the target SNARE and is the subunit that couples tethering to the fusion
machinery.

Subunit nomenclature is a genuine trap in this family. VPS11, VPS16, VPS18, and
VPS33 form the core of *both* HOPS and CORVET, so a mutation in one of them
disrupts both complexes and has the most severe endosomal phenotype — early-to-
late endosome trafficking fails before lysosomal fusion is even attempted.
Mutations in VPS39 or VPS41 affect HOPS specifically and therefore present as a
pure lysosomal-fusion defect.

> [!info] Peripheral partners
> VPS18 recruits VPS41 to the human complex via an N-terminal interaction that
> has been resolved structurally, and the whole assembly is held together by a
> conserved dimerization interface. In *Saccharomyces cerevisiae* HOPS function
> is further regulated by phosphorylation of VPS41 by the casein kinase YCK3,
> which lowers the complex's affinity for vacuolar lipids.

## Mechanism

1. **Rab7 capture.** Active Rab7-GTP on the lysosome membrane recruits HOPS
   through VPS39 and VPS41.
2. **Membrane tethering.** The complex spans two membranes, holding them within
   fusion-competent proximity.
3. **SNARE assembly.** VPS33A binds the assembled trans-SNARE complex on the
   target membrane and protects it from disassembly, committing the pair to
   fuse. HOPS also spatially controls where in the membrane SNAREs assemble.
4. **Fusion and re-equilibration.** The lipid bilayer merges and the tether
   dissociates.

HOPS is not the only tether: the effector [[PLEKHM1]] recruits HOPS onto
Rab7-positive autophagosomes, and the retromer-associated RILP–Rabin–Rab7
module helps concentrate Rab7 and thus HOPS. Disrupting HOPS arrests
autophagosomes and phagosomes at the tethering stage, producing
accumulations that are large, Rab7-positive, and SNARE-negative — a diagnostic
signature distinct from a fusion-defect block.

## Roles in Autophagy & Phagosome Maturation

- **Autophagosome–lysosome fusion.** HOPS is required for the terminal fusion
  step of macroautophagy. Its loss blocks flux even when autophagosome
  formation and lysosomal acidification are normal — see
  [[Autophagosome-lysosome fusion]].
- **Phagosome maturation.** Sequential phagosome–endosome and phagosome–lysosome
  fusion proceeds through the same HOPS-dependent, Rab7-tagged step. Failure
  arrests phagosomes at the intermediate stage (see [[Phagosome]]).
- **Endosomal maturation and lysosome biogenesis.** HOPS is one of the
  machinery components required for autophagic lysosome reformation and for
  maintaining lysosome number (see [[Phagocytic Lysosome Reformation]]).
- **Golgi-to-lysosome trafficking.** HOPS delivers AP-3 and AP-1 vesicle cargo
  to lysosomes, tying it to lysosomal protein sorting as well as to fusion.

## Pathology

Mutations in HOPS subunits cause a recognizable lysosomal-storage-disease
phenotype. Biallelic *VPS18* and *VPS11* variants produce a congenital
arthrogryposis–renal dysplasia–chorioretinal dysplasia spectrum consistent with
their role in both fusion and endosomal sorting, and *VPS39*/VPS41* variants
produce milder, later-onset phenotypes dominated by dystonia and optic atrophy —
the pattern expected when only the lysosome-specific module is disrupted.

> [!warning] Do not confuse HOPS with HOP
> "HOP" (Hsp90-organizing protein, STIP1) is a different co-chaperone entirely.
> The two are routinely confused in the literature because the names look alike.

## Documents
- [[_document_ - Lysosome biogenesis Regulation and functions|Lysosome biogenesis: Regulation and functions]] — places HOPS in the sequence of autophagic lysosome reformation and phagolysosome shrinkage, the pathway where its loss leaves excess phagolysosomes.
- [[_document_ - From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery|From the regulatory mechanism of TFEB to its therapeutic implications]] — describes the endolysosomal fusion machinery that HOPS forms part of and that TFEB transcriptionally controls.

## Connections
- [[Rab7]] — active Rab7-GTP on the lysosomal membrane is the recruitment signal
  HOPS reads through its VPS39/VPS41 subunits. HOPS sits functionally downstream
  of Rab7: without Rab7 activation there is no tethering, and without HOPS there
  is no fusion despite normal Rab7.
- [[Autophagosome-lysosome fusion]] — HOPS is the tethering step of this
  pathway. Its loss blocks autophagic flux at the point where autophagosomes
  have matured and become Rab7-positive but have not yet merged.
- [[PLEKHM1]] — this Rab7 effector recruits HOPS onto the autophagosome and
  phagophore, providing the specificity that lets HOPS act on the right membrane
  pair. PLEKHM1 without HOPS cannot promote fusion.
- [[STX17]] — syntaxin-17 on the autophagosome pairs with VAMP7/VAMP8 on the
  lysosome to form the trans-SNARE complex that HOPS stabilizes. HOPS sets where
  those SNAREs assemble; the SNAREs execute the merge.
- [[ORP1L]] — cholesterol availability at ER–endolysosomal contact sites is
  required to recruit HOPS onto Rab7-positive autophagosomes. Cholesterol
  therefore acts upstream of HOPS as a rate-limiting input to autophagic flux.
- [[Phagosome]] — the same HOPS-dependent tethering step governs phagosome–lysosome
  fusion, which is why HOPS loss produces arrested intermediate-stage phagosomes
  as well as arrested autophagosomes.

## Linking Summary
- New links added: [[Rab7]], [[Autophagosome-lysosome fusion]], [[PLEKHM1]],
  [[STX17]], [[ORP1L]], [[Phagosome]], [[Phagocytic Lysosome Reformation]]
- Suggested notes to create: [[VPS39]], [[VPS41]], [[VPS33A]], [[CORVET]],
  [[RILP]], [[Vesicle Transport]], [[Lysosomal Storage Disease]],
  [[SNARE Assembly]], [[Tethering Complex]]
- Strong connections to strengthen: [[HOPS Complex]] ↔ [[Rab7]],
  [[HOPS Complex]] ↔ [[Autophagosome-lysosome fusion]], [[HOPS Complex]] ↔ [[PLEKHM1]]