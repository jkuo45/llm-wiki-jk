---
title: CDK
description: "Cyclin-dependent kinases (CDKs) are the CMGC-family serine/threonine kinases whose catalytic activity is gated by cyclin binding; the 11 mammalian members fall into cell-cycle CDKs (CDK1/2/4/6), transcriptional CDKs (CDK8/9/12/13) and CDK5, which has no canonical activating cyclin."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - kinase
  - cell-cycle
aliases: [Cyclin-Dependent Kinase, Cyclin-dependent kinases, CDKs, cdc2]
---

# CDK

**Overview:** **CDK** is not one protein but a **family** of serine/threonine protein kinases. The term is used both collectively (the CDK family) and informally for a specific member (usually CDK1, the "cdc2" homologue). This note is written as a family note; individual members have their own notes where they are the primary subject ([[CDK1]], [[CDK2]], [[CDK5]]).

CDKs belong to the **CMGC kinase group** (cyclin-dependent kinases, MAP kinases, glycogen synthase kinases, CDC-like kinases), one of the largest kinase groups in the human genome. Eleven genes encode canonical CDKs (*CDK1*–*CDK13*, skipping *CDK4*'s numbering gaps), plus CDK-like proteins such as PITALRE and the CDKL kinases.

## Conserved architecture

All CDKs share a bilobal kinase fold with:

- A **small lobe** containing the glycine-rich loop (GxGxxG) and the catalytic lysine (typically K33).
- A **large lobe** containing the catalytic aspartate (D176 in CDK2 numbering).
- The **activation loop (T-loop)**, a flexible segment whose tip carries a conserved threonine (Thr161 in CDK2) that, when phosphorylated, bridges the two lobes and locks the active conformation.
- The **C-helix**, whose glutamate (Glu51 in CDK2) interacts with the T-loop lysine only when the T-loop is phosphorylated — the paired switch that makes CDK activation phosphorylation-dependent.

> [!info] Regulation is entirely by partner, phosphorylation, and inhibitor
> Unlike most kinases, a CDK is catalytically *inert as a monomer*. Full activation requires: (1) cyclin binding, which repositions the T-loop and realigns catalytic residues; (2) activating phosphorylation of the T-loop threonine by CDK-activating kinase (CAK; CDK7–cyclin H–MAT1); and (3) removal of inhibitory phosphorylation. A fourth control is the binding of CDK inhibitors.

**Inhibitory phosphorylation.** WEE1 and MYT1 phosphorylate Thr14 and Tyr15 in CDK1 (and CDK2), preventing ATP binding. [[CDC25]] phosphatases reverse this at the G2/M transition — the switch is bistable and driven by positive feedback on CDC25.

**Inhibitor families.** The **INK4** family (p16INK4A, p15INK4b, p18INK4C, p19INK4D) binds the CDK4/6 catalytic cleft as a monomer and is *selective* for CDK4/6. The **Cip/Kip** family (p21, p27, p57) binds the cyclin–CDK complex as a pseudo-substrate; it inhibits CDK2 complexes but is a *poor* inhibitor of monomeric CDK4/6 and, in some contexts, can act as an assembly factor. This distinction explains why CDK4/6 inhibition lowers the pRb threshold (driving senescence/apoptosis) while CDK2 inhibition acts differently.

## Family members and what distinguishes them

| CDK | Cyclin partners | Principal role | Distinguishing features |
| --- | --- | --- | --- |
| CDK1 | Cyclin A, B | Master mitotic regulator (M phase entry, mitosis) | Only essential CDK; "M-phase promoting factor" with cyclin B; the prototype |
| CDK2 | Cyclin A, E, (B) | G1/S transition, S phase, DNA replication | Central to the restriction point; distinctive conformational dynamics; redundant with CDK1 in many cells |
| CDK4 / CDK6 | Cyclin D1–3 | Early G1, Rb phosphorylation | Partially redundant with each other; INK4-selective; the druggable cancer target |
| CDK5 | p35/p39 (non-cyclin) | Neuronal differentiation, synaptic function | Uniquely *not* activated by a cyclin — activated by the neuronal regulatory subunits p35 (CDK5R1) and p39 (CDK5R2); also involved in DNA damage response |
| CDK7 | Cyclin H (+MAT1) | CAK: phosphorylates all other CDKs on their T-loop; also part of TFIIH, so it phosphorylates Pol II CTD Ser5 | Constitutively active "master kinase"; not a cell-cycle regulator per se |
| CDK8 / CDK19 | Cyclin C | Kinase module of the Mediator complex; also phosphorylates transcription factors incl. p53, EIF4G1 | Binds cyclin C as a hexamer with MED13; loss leads to activation of stress/immune gene programmes |
| CDK9 | Cyclin T1/T2/T3 | P-TEFb: phosphorylates RNA polymerase II CTD Ser2 to pause-release RNA elongation | Central to HIV transcription (with Tat); targeted by flavopiridol and atuveciclib |
| CDK12 / CDK13 | Cyclin K | Transcription elongation and DNA damage response; spliceosome regulation | Kinase-domain mutations in CDK12 occur in advanced solid tumours |
| CDK10 | Cyclin? (unresolved) | Transcriptional regulation, MSL complex | Least well characterised canonical CDK |

> [!warning] "CDK" without a number is ambiguous
> Naming conventions vary between fields and vendors. When reading a paper, check whether "CDK" means the family, CDK1 (cdc2), or a generic cyclin-dependent kinase.

## Mechanism and physiology

Cell-cycle CDKs enforce **orderly, irreversible phase transitions**. The core mechanism is **bistability**: active CDK phosphorylates its own inhibitors and inhibitors of its activating phosphatases, and inactivates them. This converts graded growth signals into an all-or-none decision. CDK4/6–cyclin D phosphorylates [[Retinoblastoma Protein|Rb]], releasing [[E2F]] to drive S-phase gene expression; CDK2–cyclin E then commits the cell past the restriction point; CDK1–cyclin B triggers mitosis.

CDKs also couple the cell cycle to the environment: quiescent cells express high [[CDK Inhibitor|CDK inhibitor]] levels and low cyclin, and mitogenic signalling lowers inhibitors to permit entry. Beyond the cell cycle, transcriptional CDKs couple nutrient and energy state to gene expression — CDK8/19 modules are activated by stress and metabolic signals, and CDK9 activity is gated by neuronal activity and by [[BRD4]] binding.

## Disease relevance and therapeutics

| Disease context | Mechanism |
| --- | --- |
| Breast, lung, colorectal cancer | Cyclin D–CDK4/6 axis overactive via cyclin D overexpression, RB1 loss of function, or CDK4/6 amplification |
| [[Multiple Myeloma]] and other lymphoid malignancies | High Cyclin D–CDK6 activity; CDK4/6 inhibition is standard there |
| Neurodegeneration | CDK5/p35 mislocalization in tauopathies and [[Alzheimer's Disease|Alzheimer disease]]; CDK5 inhibition is explored but no agent is approved |
| HIV | CDK9/P-TEFb drives Tat-dependent transcription; investigational |
| CDK12-mutant tumours | Loss of transcriptional proofreading, conferring resistance to DNA-damaging agents |

Approved CDK4/6 inhibitors — [[Palbociclib]], [[Ribociclib]], [[Abemaciclib]] — inhibit CDK4/6 to maintain a hypophosphorylated Rb, arrest cells in G1, and trigger [[Senescence]] or [[Apoptosis]]. Palbociclib is also the first CDK inhibitor approved in HR-positive/HER2-negative metastatic breast cancer. CDK9 and CDK12/13 inhibitors remain investigational.

## Documents

- [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]] — cyclin–CDK complexes, CDK inhibitors (p21, p27, p57), and Rb phosphorylation define the G0-versus-G1 quiescence decision; high cyclin D/E and CDK4/6 promote proliferation, whereas loss of CDK inhibitor activity permits re-entry.
- [[_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities|Cellular senescence and SASP in tumor progression and therapeutic opportunities]] — the p16/Rb versus p53/p21 routes to senescence, both converging on CDK inhibition.
- [[_document_ - Small molecule compounds that induce cellular senescence|Small molecule compounds that induce cellular senescence]] — CDK inhibitors used as senescence-inducing agents.
- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]] — how tumour cells disable CDK-dependent arrest.
- [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]] — the p53–p21 (CDKN1A) axis, a CDK-inhibitor-mediated node, regulates ferroptosis sensitivity.
- [[_document_ - Kinase|Kinase]] — kinase-substrate table placing CDK4/6 among the kinases that phosphorylate S142.

## Connections
- [[Cyclin]] — cyclin binding is an absolute requirement for CDK activity; cyclin abundance and CDK inhibitor balance set the activity threshold.
- [[CDK Inhibitor]] — INK4 and Cip/Kip families impose the threshold; [[p16INK4A]] selects CDK4/6 while p21/p27/p57 act on cyclin–CDK complexes.
- [[Retinoblastoma Protein]] and [[RB1]] — CDK4/6–cyclin D phosphorylates Rb to release [[E2F]]; the Rb–E2F switch is the canonical CDK output gate.
- [[CDC25]] — dephosphorylates CDK1 to trigger mitosis; the WEE1/CDC25 pair forms the mitotic switch.
- [[CDK1]] — the prototype and only essential CDK; the "M-phase promoting factor" partner of cyclin B.
- [[CDK2]] — G1/S driver and key node for the restriction point; the target of p21/p27-mediated arrest.
- [[CDK5]] — the CDK with no canonical cyclin, activated by p35/p39 and central to neuronal function.
- [[Cell Cycle]] — CDK activity is the engine of ordered phase transitions; quiescence is enforced by low cyclin plus high inhibitor.
- [[Quiescence]] — quiescent cells sit below the CDK activity threshold; restoring growth signalling crosses it.
- [[Quiescence|CDK reporters]] — live-cell CDK2 sensors and p27 fusions are used experimentally to mark quiescent cells.
- [[BRD4]] — binds P-TEFb (CDK9/cyclin T) to pause-release RNA polymerase II, coupling elongation to bromodomain signalling.
- [[Palbociclib]], [[Ribociclib]], [[Abemaciclib]] — the approved CDK4/6 inhibitors, whose clinical success is the clearest validation of CDK pharmacology.
- [[Senescence]] — chronic CDK4/6 inhibition enforces a hypophosphorylated Rb and drives senescence or apoptosis in tumour cells.
- [[Multiple Myeloma]] — Cyclin D–CDK6 dependence underlies its biology and its response to CDK4/6 inhibitors.

## Linking Summary
- New links added: [[Quiescence]] (CDK reporters as a quiescence readout)
- Suggested notes to create: [[CDK3]], [[CDK7]], [[CDK8]], [[CDK9]], [[CDK10]], [[CDK12]], [[CDK13]], [[CDK-activating Kinase (CAK)]], [[WEE1]], [[MYT1]], [[MAT1]], [[INK4]], [[Cip/Kip]], [[P-TEFb]], [[CDKL kinases]], [[Mediator Complex]] — removed as already existing: Cyclin, Cyclin B, Cyclin D1, Cyclin E, Restriction Point
- Strong connections to strengthen: [[CDK]] ↔ [[Cyclin]], [[CDK]] ↔ [[CDK Inhibitor]], [[CDK]] ↔ [[Retinoblastoma Protein]], [[CDK]] ↔ [[Cell Cycle]]