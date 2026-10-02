---
title: IRS1
description: 'IRS1 (insulin receptor substrate 1) is a 1242-residue cytoplasmic signalling scaffold with a PH domain, a PTB domain, and a large unstructured tail bearing dozens of phosphotyrosine and phosphoserine motifs. It transduces insulin and IGF1R signals to PI3K-AKT-mTOR and RAS-MAPK, and its serine phosphorylation by S6K is the canonical mechanism of nutritionally induced insulin resistance.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - insulin
  - mtor
  - insulin-resistance
aliases: [Insulin Receptor Substrate 1, IRS-1, IRS1_HUMAN]
---

# IRS1

## Overview

IRS1 is not an enzyme and not a receptor. It is a **docking scaffold**: a
large, mostly unstructured cytoplasmic protein whose only job is to be
phosphorylated by [[Insulin Receptor|INSR]] and [[IGF1R]] and then to assemble
the SH2-domain proteins that carry the signal onward. Nearly all of insulin's
metabolic action runs through IRS1 → PI3K → [[Akt]], and nearly all of the
pathology of insulin resistance runs through IRS1's own serine
phosphorylation.

Human IRS1 is 1242 residues (UniProt P35568); mouse IRS1 is 1244.

## Structure and domains

- **PH domain** (residues ~12–115) — an N-terminal pleckstrin-homology
  domain. Its best-established role is *negative*: it binds the PH domain of
  the scaffold protein **PHIP**, and it is required for IRS1 recruitment to
  the plasma membrane and for IRS1 to function at all. IRS1 also forms a
  ternary complex with **DGKZ** and **PIP5K1A** in the absence of insulin;
  insulin stimulation decreases this DGKZ interaction.
- **IRS-type PTB domain** (residues ~160–264) — binds the **NPXY motif**
  of the tyrosine-phosphorylated [[Insulin Receptor]] and [[IGF1R]].
  The adjacent **YXXM motifs** are the binding sites for the p85 regulatory
  subunit of [[PI3K]].
- **Large unstructured C-terminal tail** (residues ~265–1242) — this is where
  IRS1's character lives. It contains many YXXM and YXXΦ motifs (YXXM binds
  p85/PI3K directly; other Y-phosphotyrosines recruit GRB2, and Tyr896 is
  required for GRB2 binding) and dozens of serine sites that act as
  inhibitory phosphorylation switches. Being largely disordered gives IRS1
  enormous combinatorial capacity in a very small protein — which is
  simultaneously its strength and the reason it is such a rich source of
  conflicting literature.
- **No catalytic domain, no transmembrane segment.** IRS1 is entirely
  cytoplasmic, and its subcellular localisation (cytoplasmic vs nuclear)
  correlates with the transition from proliferation to chondrogenic
  differentiation.

## Mechanism of action

1. **Receptor engagement.** Ligand-bound INSR or IGF1R autophosphorylates its
   NPXY motif; IRS1 PTB docks there.
2. **Tyrosine phosphorylation.** The receptor kinase phosphorylates IRS1
   tyrosines in the tail; phosphorylated YXXM motifs then recruit the p85
   subunit of PI3K, GRB2 (via Tyr896), NCK1, NCK2, and SHP2.
3. **PI3K–AKT.** PI3K generates PIP3 at the plasma membrane; AKT is
   recruited and activated. AKT then: activates [[mTORC1]] and hence protein
   synthesis; phosphorylates and inactivates [[Bad]] for survival;
   phosphorylates and inhibits GSK3 (which drives glycogen synthesis); and
   phosphorylates [[FoxO1]], suppressing gluconeogenesis. IRS1–AKT–FoxO1
   therefore simultaneously *promotes* peripheral glucose uptake and
   *suppresses* hepatic glucose output.
4. **RAS–MAPK.** IRS1 phosphorylation recruits GRB2, which activates the GEF
   **SOS1**, triggering RAS → RAF → MEK → ERK, which regulates gene expression
   and cooperates with PI3K for growth and differentiation.
5. **Wnt/β-catenin.** IRS1 is a *positive* regulator of Wnt/β-catenin
   signalling, through suppressing autophagic degradation of DVL2 — a
   non-canonical, IRS1-phosphorylation-independent function.
6. **Protein synthesis and translation.** IRS1 also modulates
   translation initiation machinery independently of the above, and IRS1 is
   itself a substrate of PKR/EIF2AK2 and ALK.

## Regulation and degradation — the insulin resistance node

> [!important] Serine phosphorylation of IRS1 is the textbook
> S6K-dependent negative feedback loop
> - **S6K feedback.** [[mTORC1]] activates [[S6K1]]/S6K2 (p70S6K), which
>   phosphorylate IRS1 at **Ser270, Ser636, and Ser1101** (mouse numbering),
>   inducing accelerated degradation of IRS1. The mTORC1 → S6K → IRS1
>   negative feedback loop has profound implications for both metabolic
>   disease and tumorigenesis, because the same loop that protects a cell from
>   over-growth also blunts insulin signalling.
> - **Site-specific inhibition.** Ser307, Ser312, Ser315, and Ser323
>   phosphorylation **inhibits insulin action through disruption of IRS1
>   interaction with INSR** — i.e. these inhibitory sites act by physically
>   uncoupling IRS1 from the receptor, not merely by degrading IRS1.
> - **mTOR-dependent degradation by CUL7.** The **CUL7–RBF–FBW8**
>   ubiquitin ligase complex targets IRS1 for ubiquitin-dependent
>   degradation in an mTOR- and S6K-dependent manner, binding IRS1 *after*
>   S6K phosphorylation. Cul7−/− embryonic fibroblasts accumulate IRS1 and
>   show increased downstream AKT and MEK/ERK activation, yet grow poorly and
>   display phenotypes reminiscent of oncogene-induced senescence — a
>   reminder that removing a negative regulator does not simply give you more
>   growth.
> - **Tensin-mediated dephosphorylation.** In skeletal muscle under anabolic
>   conditions, **tensin-2 (TNS2)** dephosphorylates IRS1 at **Tyr612**,
>   which triggers proteasomal degradation of IRS1.
> - **Other degradation routes.** IRS1 is ubiquitinated by **TRAF4** through
>   a Lys-29 linkage; this regulates IRS1 interaction with IGF1R and IRS1
>   tyrosine phosphorylation upon IGF1 stimulation.
> - **S-nitrosylation.** S-nitrosylation of IRS1 by **BLVRB** inhibits its
>   activity — a redox-sensitive regulatory input.

## Disease associations

- **Type 2 diabetes mellitus.** UniProt lists *IRS1* as potentially involved in
  T2D pathogenesis (MIM 125853) — as a *contributor to a multifactorial
  disorder*, not as a Mendelian disease gene.
- **The Arg971 polymorphism.** A common IRS1 variant (Arg971) reduces IRS1
  phosphorylation and, in some contexts, lets IRS1 act as an *inhibitor* of
  PI3K, producing global insulin resistance. It has been associated with
  in vivo insulin resistance, and with a cluster of insulin-resistance-related
  metabolic abnormalities contributing to atherosclerotic cardiovascular
  disease risk in type 2 diabetes. Mechanistically, IRS1/PI3K/PDPK1/AKT1
  signalling is impaired in carriers, with reduced insulin-stimulated
  endothelial nitric oxide release — a candidate mechanism for endothelial
  dysfunction.
- **Liver and branched-chain amino acids.** Hepatic insulin resistance and
  steatosis in metabolic dysfunction-associated steatotic liver disease, and
  branched-chain amino acid effects on insulin resistance, are areas where
  IRS1 serine phosphorylation state is a standard readout.
- **Oncogenesis.** IRS1 sits at the intersection of the nutritionally
  deregulated PI3K/AKT/mTOR axis and growth-factor signalling, so its
  degradation is a tumour suppressive event in some contexts (CUL7 loss) and
  its persistence is pro-survival in others. Its dual roles make IRS1 a good
  example of why pathway-membership alone does not predict whether a protein
  is oncogenic or not.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — insulin binding its receptor promotes INSR tyrosine kinase activity, IRS1 recruitment, PIP3 production through PI3K activation, and AKT recruitment at the plasma membrane; mTORC1 strongly represses the PI3K–AKT axis upstream of PI3K, and S6K1 activation by mTORC1 promotes IRS1 phosphorylation and reduces its stability — the S6K1-dependent negative feedback loop, with implications for metabolic disease and tumorigenesis.
- [[_document_ - biochemical_basis_hormesis_2026.04.20.719646v1.full|The Biochemical Basis of Hormesis]] — places IRS1 as the upstream Input node activated by insulin and inactivated by S6K (SK61_2) phosphorylation, and as the downstream terminus of the mTORC1→IRS1 backward link of the incoherent bivalent motif whose saturated enzymatic regime generates rapamycin hormesis.

## Connections

- [[Insulin Receptor]] — the primary receptor kinase; IRS1's PTB domain binds the receptor's NPXY motif, and inhibitory serine phosphorylation (Ser307/312/315/323) works by disrupting exactly this interaction.
- [[IGF1R]] — the second receptor that phosphorylates IRS1; IRS1 is the shared substrate that lets the insulin and IGF axes converge on PI3K and MAPK.
- [[PI3K]] — IRS1's phosphorylated YXXM motifs recruit the p85 regulatory subunit, generating PIP3 and recruiting AKT; this is the step that carries almost all of insulin's metabolic effect.
- [[Akt]] — the direct effector of IRS1-driven PI3K; activates [[mTORC1]], inactivates [[Bad]], inhibits GSK3, and phosphorylates [[FoxO1]] to suppress gluconeogenesis.
- [[mTORC1]] — the feedback node: mTORC1 activates S6K, S6K phosphorylates and destabilises IRS1, and mTORC1 also acts back on the PI3K–AKT axis upstream of PI3K, forming a documented double negative-feedback architecture.
- [[S6K1]] — the kinase that phosphorylates IRS1 at Ser270/636/1101 and triggers its accelerated degradation; the mechanistic heart of the S6K-dependent negative feedback loop.
- [[SK61_2]] — the S6K2 paralog, identified in the hormesis model as the phosphatase-kinase that inactivates IRS1 and thereby closes the mTORC1→IRS1 backward link.
- [[Insulin Signaling]] — IRS1 is the node that makes IRS1 the canonical insulin-signalling entity rather than one pathway among several.
- [[Insulin Resistance]] — serine phosphorylation of IRS1 is the canonical molecular mechanism; the S6K feedback loop is why chronic nutrient excess produces insulin resistance.
- [[Type 2 Diabetes]] — the clinical endpoint of IRS1 serine hyper-phosphorylation and of the Arg971 variant's association with insulin resistance and cardiovascular risk.
- [[Insulin Sensitivity]] — the functional readout that IRS1 phosphorylation state governs and that [[Fasting]] and caloric restriction improve.
- [[Incoherent Bivalent Motif]] — in the hormesis network model, IRS1 is the Input node and the terminus of the mTORC1→IRS1 backward link whose saturation produces rapamycin hormesis.
- [[Saturated Enzymatic Regime]] and [[Biphasic Dose-Response Curve]] — the regime and curve shapes assigned to the mTORC1/S6K/IRS1 axis in that model.
- [[Autophagy Inducer]] — caloric restriction and intermittent [[Fasting]] lower insulin/IGF signalling, relieving mTORC1 and thereby restoring autophagy and improving IRS1 signalling.
- [[Wnt]] and [[β-Catenin]] — IRS1 positively regulates Wnt/β-catenin by suppressing autophagic degradation of DVL2, a non-canonical function independent of its phosphorylation state.

## Linking Summary

- New links added: [[Insulin Receptor]], [[IGF1R]], [[PI3K]], [[Akt]], [[mTORC1]], [[S6K1]], [[SK61_2]], [[Insulin Signaling]], [[Insulin Resistance]], [[Insulin Sensitivity]], [[Type 2 Diabetes]], [[Incoherent Bivalent Motif]], [[Saturated Enzymatic Regime]], [[Biphasic Dose-Response Curve]], [[Autophagy Inducer]], [[Wnt]], [[β-Catenin]], [[Bad]], [[FoxO1]], [[Fasting]]
- Suggested notes to create: [[IRS1]], [[IRS-type PTB domain]], [[Plecksrtrin homology domain]], [[PHIP]], [[DGKZ]], [[PIP5K1A]], [[SOS1]], [[GRB2]], [[SHC]], [[NCK1]], [[SHP2]], [[PTPN11]], [[DVL2]], [[Tensin-2]], [[TNS2]], [[CUL7]], [[FBW8]], [[RBF]], [[Skp1]], [[TRAF4]], [[BLVRB]], [[S-nitrosylation]], [[Serine 307]], [[Serine 636]], [[Serine 1101]], [[Arg971]], [[Nitric oxide]], [[Gluconeogenesis]], [[Glycogen synthesis]], [[FOXO1]], [[Insulin receptor substrate family]], [[IRS1–4]]
- Strong connections to strengthen: [[IRS1]] ↔ [[S6K1]] ↔ [[mTORC1]], [[IRS1]] ↔ [[PI3K]] ↔ [[Akt]], [[IRS1]] ↔ [[Insulin Resistance]]