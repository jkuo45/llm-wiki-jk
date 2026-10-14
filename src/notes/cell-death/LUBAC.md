---
title: LUBAC
description: Linear ubiquitin chain assembly complex, the trimeric RBR E3 ligase (HOIP, HOIL-1L, SHARPIN) that is the sole source of Met1-linked linear polyubiquitin and a gatekeeper of NF-kB activation versus TNF-induced cell death.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [protein-complex, ubiquitin, nf-kb, apoptosis, signaling]
aliases: [LUBAC, HOPS complex, Linear ubiquitin chain assembly complex, M1 ligase]
---

# LUBAC

**LUBAC** (linear ubiquitin chain assembly complex) is a trimeric E3 ubiquitin
ligase and the **only** known enzyme complex that generates *linear*
polyubiquitin chains — head-to-tail linkages formed between the C-terminal
carboxylate of one ubiquitin and the N-terminal Met1 α-amino group of the next.
Every other ubiquitin linkage uses a lysine side chain; M1 linkages are unique
in requiring no lysine at all.

## Structure & Subunits

| Subunit | Gene | Role |
|---|---|---|
| **HOIP** | RNF31 | Catalytic centre. Its RING–IBR–RING (RBR) domain carries the ligase activity, and its C-terminal Linear ubiquitin chain Determining Domain (LDD) confers linear-linkage specificity. HOIP deficiency completely ablates LUBAC activity. |
| **HOIL-1L** | RBCK1 | Second RBR E3; binds linear chains through its Npl4 zinc finger (NZF) domain. Required for complex assembly, stability and retention in the TNFR1 signalling complex — HOIL-1 deficiency is as lethal as HOIP deficiency in mice. Acts as a *regulatory*, attenuating influence on HOIP's catalytic activity. |
| **SHARPIN** | SIPL1 | Accessory/scaffold; also an NZF-containing linear-ubiquitin binder. Not equally essential: SHARPIN-deficient cells retain substantial linear ubiquitination via HOIL-1/HOIP. |

> [!info] A RING/HECT hybrid
> LUBAC combines a general RBR mechanism with an unusual two-step mode of
> catalysis: HOIP uses both RING-type and HECT-type chemistry, and the
> LDD is what makes the product linear rather than lysine-linked. Truncated
> HOIP carrying only RBR plus LDD is catalytically sufficient in vitro,
> without HOIL-1L or SHARPIN.

Stabilization of the trimer is cooperative: LUBAC-tethering motifs N-terminal
to the UBL domains of HOIL-1L and SHARPIN heterodimerize into a single
globular domain, and a stapled peptide mimicking that motif blocks
trimerization and inhibits both LUBAC ligase activity and IKK activation more
efficiently than HOIP-based disruption.

## Mechanism of Action

LUBAC is recruited to signalling complexes by recognition of pre-existing K63
ubiquitin chains through the NZF domains of HOIP and SHARPIN. It also binds
[[NEMO]] (IKKγ) directly through the HOIP NZF1 domain and conjugates linear
ubiquitin to it. At the [[TNFR1 complex I|TNFR1 complex I]], this
scaffolds the IKK complex and enables IKKβ activation, IκBα phosphorylation
and [[NF-κB]] nuclear translocation — the branch that promotes cell survival
and inflammatory gene expression.

> [!warning] The switch is the point
> Linear ubiquitination of NEMO is the switch between the two fates of a
> TNF-stimulated cell: NF-κB activation and survival when LUBAC is present,
> versus RIPK1-FADD-CASP-8 complex II assembly and apoptosis when NF-κB
> signalling is suppressed. LUBAC therefore acts as a brake on
> TNF-induced cell death, not merely as an activator of inflammation.

Chains are trimmed by the linear-specific deubiquitinases
[[OTULIN]] and [[CYLD]], which sets the amplitude and duration of the signal.

## Disease & Clinical Relevance

- **TNFR1-mediated cell death.** SHARPIN or HOIP deficiency in mice causes
  severe inflammation in adulthood or embryonic lethality respectively, owing
  to deregulated TNFR1-mediated cell death. HOIL-1 and HOIP both prevent
  embryonic lethality at mid-gestation by interfering with aberrant TNFR1-
  mediated endothelial cell death — partly, but not entirely, through RIPK1
  kinase activity.
- **Haematopoiesis.** Triple-*Ripk3*/*Casp8*/*Hoil-1* knockout embryos die at
  late gestation from fetal haematopoietic defects that are rescued by
  co-deleting RIPK1 but not MLKL.
- **Humans.** HOIL-1 deficiency causes autoinflammation and autoimmune disease;
  human HOIL-1 deficiency has no overt phenotype in mice, a species
  difference still incompletely explained. Polyglucosan body myopathy is
  associated with an HOIL-1L A18P mutation that disrupts LUBAC-tethering
  motif folding and homodimerization.
- **Adaptive immunity.** All three components have roles in late thymocyte
  differentiation and FOXP3+ regulatory T-cell homeostasis, with HOIL-1/HOIP
  more important than SHARPIN.
- **Cancer.** LUBAC participates in inflammatory and oncogenic signalling;
  destabilizing the HOIL-1L/SHARPIN interface is proposed as a
  LUBAC-directed anticancer strategy.
- **Therapeutic proof of concept.** Gliotoxin suppresses NF-κB activation by
  selectively inhibiting LUBAC.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|crosstalk of cell death mechanisms]]
  - Places LUBAC explicitly in the TNFR1 complex I assembly alongside RIPK1,
    TRAF2, cIAP1, CYLD and NEMO, and describes the branch point between
    NF-κB-driven survival and complex II apoptosis.

## Connections

- [[SHARPIN]] — accessory subunit, NZF-containing linear-ubiquitin reader, and
  the origin of the cpdm (chronic proliferative dermatitis) mouse phenotype.
- [[OTULIN]] — linear-ubiquitin-specific deubiquitinase that trims the chains
  LUBAC assembles, and the sharpest available readout of LUBAC activity.
- [[CYLD]] — the second linear-chain DUB and the enzyme that competes with
  LUBAC for control of NF-κB signalling amplitude.
- [[NF-κB]] — the pathway LUBAC exists principally to switch on via linear
  ubiquitination of NEMO.
- [[TNFR1 complex I]] — the signalling complex where LUBAC is recruited and
  where its activity decides survival versus death.
- [[RIPK1]] — the kinase whose complex-I ubiquitylation requires LUBAC, and
  whose death-signalling capacity is held in check by that same activity.
- [[Apoptosis]] — the fate that follows when LUBAC-dependent NF-κB activation
  fails and complex II forms.
- [[Necroptosis]] — the parallel RIPK1/MLKL death route that becomes available
  when caspase-8 is inhibited and LUBAC is absent.
- [[Caspase-8]] — the protease of TNFR1 complex IIa, whose co-deletion with
  RIPK3 rescues HOIL-1-deficient embryos.
- [[MLKL]] — the executioner of necroptosis whose co-deletion with caspase-8 is
  required for HOIL-1-deficient mice to be viable.
- [[Ubiquitin]] — the substrate whose chain topology LUBAC uniquely specifies.
- [[Ubiquitination]] — the vault's hub note for M1 versus K48 versus K63 chain
  function.
- [[Innate Immunity]] — the functional class LUBAC serves across TNFR1, NOD2,
  TLR, NLRP3 and TCR signalling.
- [[Toll-like Receptor]] — one of the receptor families whose signalling
  depends on LUBAC activity.

## Linking Summary

- New links added: [[SHARPIN]], [[OTULIN]], [[CYLD]], [[NF-κB]],
  [[TNFR1 complex I]], [[RIPK1]], [[Apoptosis]], [[Necroptosis]], [[Caspase-8]],
  [[MLKL]], [[Ubiquitin]], [[Ubiquitination]], [[Innate Immunity]],
  [[Toll-like Receptor]]
- Suggested notes to create: [[HOIP]], [[HOIL-1L]], [[RBR Ligase]]
  [[Linear Polyubiquitin]], [[IKK Complex]], [[IKKbeta]], [[Chronic Proliferative Dermatitis]]
- Strong connections to strengthen: [[LUBAC]] ↔ [[NF-κB]],
  [[LUBAC]] ↔ [[OTULIN]], [[LUBAC]] ↔ [[TNFR1 complex I]],
  [[LUBAC]] ↔ [[Ubiquitination]]