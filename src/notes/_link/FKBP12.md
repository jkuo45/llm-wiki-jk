---
title: FKBP12
description: 'FKBP12 (FKBP1A) is a 12 kDa peptidyl-prolyl isomerase of the FKBP family whose rapamycin/FK506-binding pocket couples ligand occupancy to allosteric inhibition of the FRB domain of mTOR. It is the intracellular receptor for rapamycin and for the calcineurin inhibitors FK506 and tacrolimus.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - enzyme
  - mtor
  - signaling
  - pharmacology
aliases: [FK506 Binding Protein 12kDa, FKBP1A, FKBP1, FKBP-12, Calstabin-1, Immunophilin FKBP12, Rotamase]
---

# FKBP12

## Overview

FKBP12 is a **protein, not a family**: the name is unambiguous for
**FKBP1A** (also called FKBP1, calstabin-1, rotamase, or HEB; UniProt P62942).
It is the prototype member of the **FKBP family** of peptidyl-prolyl
cis-trans isomerases, which also includes the larger cytosolic FKBP52
([[FKBP38]] and [[FKBP8]] are mitochondrial FKBP family members) and the
secreted FKBP-family chaperones. What makes FKBP12 singularly important is
that its small hydrophobic binding pocket recognises two clinically important
macrolides — [[Rapamycin]] and FK506/tacrolimus — and thereby acts as a
*signal-conversion hub* in three otherwise unrelated pathways.

## Structure and domains

- **Size.** Mature FKBP12 is 108–109 residues (~12 kDa), generated from a
  108-residue chain encoded by *FKBP1A*. It is unusually small for a
  human enzyme and is one of the few proteins that folds stably and
  independently.
- **Domain.** A single **FKBP domain** spanning essentially the entire chain
  (UniProt domain annotation ~20–108), built on a five-stranded β-barrel
  closed by a short α-helix. The β-barrel has an internal hydrophobic cavity
  lined by side chains from both the N- and C-terminal halves of the chain —
  which is why the ligand-binding site is conformationally closed only when
  the two halves are correctly packed.
- **Binding pocket.** The **rapamycin/FK506 (FKBP) binding pocket** is
  geometrically complementary to the macrocyclic pipecolate region of
  rapamycin and FK506. The same pocket binds the Gly-Ser-rich **GS motif** of
  type I TGF-β-family receptors and the **Leu-Pro** sequence adjacent to the
  activating residues of TGFBR1.
- **Catalytic residues.** The PPIase active site (Phe26, Phe36, Arg42,
  Phe55, Tyr82, His87, Asp92, Phe99) overlaps with the FK506-binding pocket,
  so both substrates and the macrolides compete for the same cavity.
- **No signal peptide.** FKBP12 is entirely cytosolic and free of any
  transmembrane segment or targeting sequence.

## Mechanism and functions

> [!info] The PPIase activity is largely a side job
> FKBP12's role in mTOR signalling and in immunosuppression does not require
> its isomerase activity. Ligand binding changes the surface electrostatics of
> FKBP12 and creates a new protein–protein interface — FKBP12 is best
> understood as a *conformationally switchable adaptor*, not as an enzyme
> whose catalytic output matters.

### The mTOR axis

1. [[Rapamycin]] enters cells, binds the FKBP12 pocket, and the
   FKBP12–rapamycin complex docks onto the **FRB (FKBP12–rapamycin-binding)
   domain** of the FRB-containing subunits of mTOR.
2. Because the FKBP12–rapamycin–FRB ternary complex sterically occludes the
   mTOR kinase active site, mTORC1 is acutely and specifically inhibited.
3. This is why the complex is called a **molecular glue**: neither partner is
   inhibitory alone.
4. mTORC2 is acutely **rapamycin-insensitive** because rictor (mTORC2's
   defining subunit) sterically shields the mTOR kinase region so the FRB is
   inaccessible. With prolonged exposure, however, rapamycin can inhibit
   mTORC2 indirectly by blocking assembly of the mTORC2 complex.
5. Selectivity within the FKBP family also depends on expression: FKBP8
   competes for rapamycin, and high FKBP8 levels can confer partial rapamycin
   resistance.

> [!warning] The rapamycin-binding pocket ≠ the PPIase pocket
> Because [[HSP90β]] also binds FKBP12 (via its own PPIase domain, in a
> complex with FKBP51/FKBP52, p23, and Hop), any drug that saturates the
> FKBP12 pocket perturbs both mTOR signalling and chaperone function. This
> coupling is one reason systemically FKBP12-binding drugs have off-target
> toxicity.

### Calcium handling

FKBP12 binds the intracellular calcium-release channels **RyR1, RyR2, and
RyR3**, forming a stabilizing complex with calstabin1 (FKBP12). Rapamycin and
FK506 block this interaction dose-dependently. Loss of FKBP12 function
destabilizes the ryanodine receptors and produces abnormal intracellular
calcium cycling — the mechanism studied in *calstabin2* (FKBP8)-null mice and
relevant to heart failure and arrhythmia, though the human disease association
for FKBP12 loss specifically is less established.

### TGF-β / activin signalling

FKBP12 is an inhibitory adaptor, not merely an inhibitor: it holds
[[TGFBR1]] (and ACVR1B/ALK4) in an inactive conformation and prevents
ligand-independent leaky activation of the type I receptor; ligand binding
displaces FKBP12 to release the signal; and released FKBP12 subsequently
recruits [[SMAD7]] to the receptor, acting as an adaptor that promotes
ubiquitination of the receptor by SMURF1 and thereby *duration-limits* the
activin signal. FK506, which dissociates FKBP12 from the receptor, also
blocks the FKBP12–SMAD7–SMURF1 interaction.

### Immunosuppression (FK506 / tacrolimus)

FK506 (tacrolimus) binds FKBP12, and the complex binds and inhibits
[[calcineurin]] phosphatase. Calcineurin dephosphorylation is required for
nuclear translocation of [[NFATc2]], so blocking it suppresses IL-2
transcription and T-cell activation. Cyclosporin A acts on calcineurin via a
different immunophilin (cyclophilin), not FKBP12. FKBP12 knockout T cells
resist FK506, confirming FKBP12 is the obligatory intracellular receptor.

### Other reported binding partners

GLMN (geminin — note the unrelated gene-naming collision with the replication
licensing protein [[Geminin]]), and FKBP12 forms a ternary complex with FKBP8,
HSP90, and its co-chaperones that participates in glucocorticoid receptor
signalling.

## Pathophysiology

> [!info] A candidate ALS gene
> *FKBP1A* variants cause **spastic paraplegia 13** (autosomal dominant, MIM
> 605280) and, in a distinct recessive form, **hypomyelinating leukodystrophy
> 4** (MIM 612233), presenting with infantile nystagmus, progressive spastic
> paraplegia, motor regression, and profound intellectual disability. These
> are the clearest direct evidence that FKBP12 loss is tolerated for decades of
> life in some carriers and lethal in others, depending on variant.

Beyond its drug target role, FKBP12 has been implicated in HIV replication, in
oxidative-stress signalling, and as part of a famitin–FKBP12 complex linked to
cardiomyocyte hypertrophy in *Drosophila* (a model with no direct human
equivalent).

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — defines FKBP12 as the intracellular rapamycin receptor: rapamycin binds FKBP12, the complex engages the FRB domain of mTOR, mTORC1 is inhibited, and mTORC2 is acutely insensitive because rictor shields the FRB.
- [[_document_ - biochemical_basis_hormesis_2026.04.20.719646v1.full|The Biochemical Basis of Hormesis]] — places FKBP12 in the rapamycin model as the direct intracellular rapamycin receptor that binds the FRB domain, with rictor shielding mTORC2's FRB and thereby making mTORC2 rapamycin-insensitive.

## Connections

- [[Rapamycin]] — FKBP12 is the obligatory intracellular receptor; neither FKBP12 nor rapamycin is inhibitory without the other, and the pair together form a ternary complex with the mTOR FRB domain.
- [[mTORC1]] — acutely inhibited by the FKBP12–rapamycin–FRB ternary complex, which sterically occludes the kinase active site; this is the mechanistic basis for the FKBP12–rapamycin axis in autophagy and longevity work.
- [[mTORC2]] — acutely rapamycin-insensitive because rictor shields the FRB; chronic rapamycin exposure can still suppress mTORC2 by blocking complex assembly.
- [[FKBP38]] and [[FKBP8]] — other FKBP-family members; FKBP8 competes for rapamycin and its loss destabilizes [[HSP90β]]-client complexes, FKBP38 is mitochondrial.
- [[calcineurin]] — the FK506/FKBP12 complex inhibits calcineurin, blocking [[NFATc2]] nuclear translocation and IL-2 transcription; this is the immunosuppressant mechanism and the reason FKBP12 is required for FK506 action.
- [[TGFBR1]] and [[SMAD]] — FKBP12 holds type I TGF-β/activin receptors inactive and then serves as a SMAD7–SMURF1 adaptor that limits signal duration; FK506 blocks this.
- [[HSP90β]] — FKBP12 binds Hsp90 within a multichaperone complex containing FKBP51/52, p23, and Hop, coupling the FKBP12 pocket to glucocorticoid receptor and kinase maturation.

## Linking Summary

- New links added: [[FKBP38]], [[FKBP8]], [[calcineurin]], [[NFATc2]], [[TGFBR1]], [[SMAD]], [[HSP90β]], [[Rapamycin]], [[Incoherent Bivalent Motif]]
- Suggested notes to create: [[FKBP1A]], [[FKBP51]], [[FKBP52]], [[p23]], [[Hop]], [[FRB]], [[FKBP family]], [[Tacrolimus]], [[FK506]], [[Cyclosporin A]], [[Cyclophilin]], [[Calstabin1]], [[Spastic paraplegia 13]], [[Hypomyelinating leukodystrophy 4]], [[Peptidyl-prolyl isomerase]], [[GLMN]] — removed as already existing: Cyclophilin A, HSP90β, Ryanodine Receptor, Smad7, Smurf1
- Strong connections to strengthen: [[FKBP12]] ↔ [[Rapamycin]] ↔ [[mTORC1]], [[FKBP12]] ↔ [[calcineurin]], [[FKBP12]] ↔ [[TGFBR1]]