---
title: 26S Proteasome
description: The 26S proteasome is the ATP-dependent holoenzyme (20S core capped by one or two 19S regulatory particles) that recognizes polyubiquitin tags, unfolds the substrate, and translocates it into the catalytic core for degradation — the central effector of the ubiquitin-proteasome system.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein-complex, protein-degradation, ubiquitin, proteostasis, post-translational-modification]
aliases: [26S proteasome, 26S Proteasome, Proteasome holoenzyme, PA700]
---

# 26S Proteasome

The **26S proteasome** is the ATP-dependent protease that executes the bulk of
selective protein degradation in eukaryotes. It is the terminal effector of the
[[Ubiquitin-Proteasome System]]: the upstream E1/E2/E3 cascade decides *which*
protein is marked, and the 26S performs the physical destruction. Structurally it
is a heterodimer — a [[Ubiquitin-dependent 20S proteasome|20S core particle]]
capped at one or both ends by a **19S regulatory particle** (also called PA700).

> [!info] The division of labour
> The 19S cap recognizes the ubiquitin signal, removes the ubiquitin chain,
> opens the pore, unfolds the substrate, and feeds it to the core. The 20S core
> does no recognition and no unfolding — it only hydrolyses the polypeptide. This
> split is why the same core particle can function standalone (see below) while
> the holoenzyme is ATP- and ubiquitin-dependent.

## 19S Regulatory Particle

The regulatory particle splits functionally into a **base** and a **lid**:

- **Base**: a hexameric AAA+ ATPase ring (Rpt1–Rpt6 / PSMC1–6) that grips the
  unstructured initiation region of the substrate, translocates it through the
  narrow pore, and — critically — ensures the translocated chain exits the
  adjacent 20S chamber only after it has been unfolded and committed to
  degradation, which is how the enzyme avoids degrading substrates that have not
  yet made a commitment.
- **Lid**: contains the ubiquitin receptors (Rpn1/PSMD2, Rpn10/PSMD4,
  Rpn13/ADRM1), the Rpn11 metalloprotease that cleaves ubiquitin en bloc off
  en bloc-degradation substrates, and the Rpn2/Rpn9/Rpn12 assembly.

Ubiquitin chains are removed by DUBs before commitment and are recycled intact
— this is what makes the proteasome catalytic rather than stoichiometric in
ubiquitin.

## Assembly, Dynamics & Alternative Conformations

26S assembly proceeds from the base outward: ATPase subunits assemble
cooperatively, the 19S cap is added to a pre-formed 20S, and lid subunits are
incorporated last. The mature holoenzyme is not static — it exists in an
equilibrium between "engaged" and "off" states, and between conformations with
one versus two caps.

> [!warning] Caps and disassembly are functionally meaningful
> 26S disassembly is not merely a failure state. Under hypoxia, disassembly
> releases free 20S core particles that retain the ability to degrade disordered
> substrates and even the ubiquitin tag itself in a ubiquitin-independent manner.
> Cells therefore carry both proteasome species simultaneously, in variable
> proportions, and the 26S/20S ratio shifts with metabolic state.

Other regulators include the assembly chaperones (PACS1/2, ATPases of the AAA
class, PDEM1, and the 19S-specific assembly factor UMP1), the disassembly factor
p97/VCP, and the alternative regulatory particles PA28 (11S) and PA200, which can
cap the 20S in place of or alongside the 19S and shift substrate preference and
peptide output.

## Protein Synthesis, Cell Cycle & Disease

The 26S is not only a quality-control organelle — it is coupled to translation.
Its association with ribosomes and its co-translational degradation of nascent
chains are what make misfolded products never reach the cytosol. It is also the
executioner for cell-cycle control: the [[Anaphase Promoting Complex-Cyclosome]]
ubiquitinates securin and cyclin B, and the 26S destroys them to license anaphase
onset and mitotic exit. Loss of checkpoint competence therefore translates
directly into aneuploidy.

Pharmacologically, the 26S is an exploited vulnerability. [[Bortezomib]],
ixazomib, and carfilzomib inhibit the β5 chymotrypsin-like site in
[[Multiple Myeloma]] and mantle cell lymphoma, where myeloma cells depend on
high proteasomal flux to survive immunoglobulin synthesis load. This strategy
carries forward to [[PROTAC]]s and molecular glues, which recruit the E3 rather
than inhibiting the protease — the same enzymatic machine, driven toward a
different substrate.

Proteasome capacity declines with [[Aging]] and is itself subject to
[[Oxidative Stress]] regulation, so the proteasome sits at the centre of
proteostasis failure in neurodegeneration and of the decline in damaged-protein
clearance with age.

## Documents
- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer: from pathogenesis to treatment]] — positions proteasome-inhibitor therapy among the non-apoptotic cancer cell-death strategies and describes the combinatory rationale.
- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]] — places proteasomal degradation alongside the other mechanisms tumour cells use to survive apoptosis-inducing therapy.

## Connections
- [[Proteasome]] — the generic vault-level entry; the 26S is the ATP- and
  ubiquitin-dependent holoenzyme form, distinct from the free 20S core that
  degrades oxidized proteins independently.
- [[Ubiquitin-Proteasome System]] — the 26S is the system's terminal effector. Tag
  specificity lives entirely upstream in the E3 layer, which is why one
  proteasome can degrade cyclin B, IκBα, p27, and SIRT2 without any intrinsic
  substrate specificity of its own.
- [[Anaphase Promoting Complex-Cyclosome]] — the APC/C is the E3 that licenses
  mitotic transitions by ubiquitinating securin and cyclin B for 26S destruction.
  The checkpoint→ubiquitin→proteasome axis is the mechanism that makes cell-cycle
  progression irreversible.
- [[Ubiquitination]] — defines the chain grammar the 26S reads: K48 chains are the
  canonical degradation signal that Rpn10/Rpn13 receptors engage, whereas K63
  chains mark sites for signalling (see [[RNF8]]) and are not substrates.
- [[Bortezomib]] — a reversible β5 inhibitor that exploits the elevated
  proteasomal demand of myeloma plasma cells. Its success validated the
  proteasome as a cancer vulnerability and is the direct ancestor of degrader
  chemistry.
- [[Multiple Myeloma]] — the paradigm clinical indication; immunoglobulin
  production in these cells creates a proteasomal load that the drug tips past
  the point of viability.
- [[Oxidative Stress]] — oxidative damage is the main substrate class handled by
  the free 20S core, and oxidized and misfolded protein accumulation when
  proteasome capacity falls is a core ageing lesion.
- [[Autophagy]] — the two systems are partly redundant and partly
  complementary: the proteasome handles soluble, ubiquitinated, mostly short-lived
  proteins, while autophagy handles aggregates and organelles. Their crosstalk is
  why inhibiting one tends to increase flux through the other.

## Linking Summary
- New links added: [[Proteasome]], [[Ubiquitin-dependent 20S proteasome]],
  [[Ubiquitin-Proteasome System]], [[Ubiquitination]], [[Ubiquitin]],
  [[Anaphase Promoting Complex-Cyclosome]], [[Bortezomib]],
  [[Multiple Myeloma]], [[PROTAC]], [[Oxidative Stress]], [[Aging]],
  [[Autophagy]], [[RNF8]]
- Suggested notes to create: [[19S Regulatory Particle]], [[20S Proteasome]],
  [[Proteasome Assembly]], [[Deubiquitinase]], [[Immunoproteasome]],
  [[Proteasome Inhibitor]], [[Carfilzomib]], [[Ixazomib]], [[Proteostasis]],
  [[AAA+ ATPase]]
- Strong connections to strengthen: [[26S Proteasome]] ↔ [[Ubiquitin-Proteasome System]],
  [[26S Proteasome]] ↔ [[Proteasome]],
  [[26S Proteasome]] ↔ [[Anaphase Promoting Complex-Cyclosome]]