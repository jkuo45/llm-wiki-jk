---
title: CDC25
description: CDC25A, CDC25B and CDC25C are dual-specificity phosphatases that activate
  cyclin-dependent kinases by removing inhibitory phosphates; they are the decisive
  executors of DNA-damage checkpoint arrest and are recurrently overexpressed in cancer.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - enzyme
  - cell-cycle
  - dual-specificity-phosphatase
  - dna-damage-response
  - cancer
aliases:
  - CDC25
  - Cdc25
  - CDC25A
  - CDC25B
  - CDC25C
  - CDC25 phosphatase
  - Cdc25 phosphatases
---

# CDC25

The **CDC25** family comprises three human dual-specificity phosphatases — CDC25A,
CDC25B and CDC25C — that catalyse the dephosphorylation of inhibitory
serine/threonine and tyrosine residues on cyclin-dependent kinases, thereby switching
them on. They are the point at which cell-cycle arrest is released, and therefore the
point at which a DNA-damage checkpoint either holds or yields.

## Structure and Isoforms

CDC25 proteins share a catalytic C-terminal dual-specificity phosphatase (DSP) domain
of the HCxxxx5R motif family, an N-terminal regulatory domain containing
Cdk-interacting motifs, and a C-terminal Cdk-binding motif. They exist as
homodimers and are catalytically active as such. The three isoforms differ mainly in
regulation and cell-cycle timing:

- **CDC25A** — induced in late G1 by [[SREBP-1c|SREBP]]-independent mitogenic signalling
  through the [[PI3K-Akt Signaling]] and [[RAS|Ras]]-[[MAPK]] axes; it activates
  CDK2 to commit cells to S phase. It is also required for CDK2 activation during S
  phase, and mice with a conditional *Cdc25A* allele die of replicative failure.
- **CDC25B** — peaks in G2 and provides the small initial activation of
  [[CDK1]]–[[CYCLIN B1]] that triggers mitosis. It is believed to act at centrosomes
  and to be required for spindle formation.
- **CDC25C** — the G2/M checkpoint executor. It activates the CDK1–cyclin B1
  maturation-promoting factor at mitotic entry.

> [!info] Catalytic logic
> A CDK is held inactive by *inhibitory* phosphorylation — Tyr15 and Thr14 on CDK1 by
> the Wee1/Myt1 kinases, Thr14/Thr161 by CAK competition — and by sequestration. CDC25
> removes the inhibitory phosphates, and CDK autophosphorylation then locks the active
> conformation. Removing a phosphatase is therefore an efficient way to arrest the cycle.

## Mechanism and Checkpoint Control

- **DNA damage response** — Following DNA damage, [[ATM]] activates [[CHK2]], which
  phosphorylates and inactivates CDC25A, CDC25B and CDC25C, and stabilises [[p53]].
  The checkpoint's output is precisely the prevention of CDK activation: arrest in
  G1/S and G2/M, and stabilisation of replication origins.
- **Degradation as a second lever** — CDC25A is unstable, degraded by the
  [[SCF Complex|SCF]]-Skp2 ubiquitin ligase after phosphorylation by checkpoint kinases,
  and by the anaphase-promoting complex/cyclosome on mitotic exit. Dual control by
  both phosphorylation state and protein half-life means checkpoint recovery requires
  new protein synthesis.
- **Sequestration** — Cytoplasmic retention by [[14-3-3]] proteins binds phosphorylated
  CDC25 and keeps it away from nuclear CDK-cyclin complexes. The isoform-specific
  14-3-3σ sequesters CDC25C to enforce G2/M arrest after DNA damage.
- **Interplay with CDK1 anti-apoptotic licensing** — CDC25 activity also governs
  [[Caspase-2]] suppression: while CDK1 is held inactive by CDC25 inhibition,
  genotoxic arrest is survivable; uncontrolled CDC25 activity drives cells past the
  point of no return into mitotic catastrophe.

## Cancer Relevance

> [!important] CDC25 as an oncogene
> Overexpression and mislocalisation of CDC25A and CDC25B have been reported in a wide
> range of human tumours, and generally correlate with advanced stage and poor
> differentiation, making them attractive but difficult anticancer targets. The
> challenge is that CDC25 activity is essential in proliferating cells generally, so
> the therapeutic window is narrow and selectivity over normal tissues is the main
> obstacle.

- **Checkpoint bypass** — Loss of the CHK2-mediated inactivation route, or
  overexpression of CDC25, permits cells with damaged DNA to enter S or M phase,
  producing chromosome instability — the mutational engine of tumour evolution.
- **Prognostic value** — Elevated CDC25 expression has been reported in
  [[Hepatocellular Carcinoma]] and other carcinomas and correlates with aggressive
  phenotype.
- **Drug discovery** — Multiple small-molecule CDC25 inhibitors have been developed
  preclinically; the field has been limited by potency, selectivity and
  pharmacokinetic issues rather than by biological rationale.

## Documents

- (no document notes yet)

## Connections
- [[CDK1]] — CDC25C is the enzyme that switches CDK1 on at mitotic entry; this
  activation step is the proximate event that overrides G2/M arrest.
- [[CHK2]] — CHK2 phosphorylates all three CDC25 isoforms in response to DNA damage;
  inactivating them is how the checkpoint enforces cell-cycle arrest.
- [[ATM]] — ATM sits upstream of [[CHK2]] and therefore upstream of CDC25
  inactivation, making the ATM–CHK2–CDC25 axis the canonical checkpoint output chain.
- [[14-3-3]] — 14-3-3 proteins sequester phosphorylated CDC25 in the cytoplasm, a
  second, spatially distinct mechanism of restraining CDK activation.
- [[Cell Cycle]] — CDC25 activity is the switch that orders G1/S, S and G2/M
  transitions relative to DNA repair completion.
- [[Caspase-2]] — CDK1 activity suppresses caspase-2, so unchecked CDC25 activity
  removes an apoptotic brake as well as driving mitosis.
- [[Hepatocellular Carcinoma]] — Elevated CDC25 expression has been reported in
  hepatocellular carcinoma as an example of checkpoint-proximal overexpression in
  solid tumours.
- [[Phosphorylation]] — Both the activation of CDC25 (by CDK1) and its inhibition (by
  checkpoint kinases) are phosphorylation events, which is why CDC25 sits at the
  centre of phospho-signalling control of the cycle.

## Linking Summary
- New links added: [[CDK1]], [[CYCLIN B1]], [[CHK2]], [[ATM]], [[p53]], [[14-3-3]],
  [[Cell Cycle]], [[Caspase-2]], [[Hepatocellular Carcinoma]], [[MAPK]], [[Ras]],
  [[PI3K-Akt Signaling]], [[SCF Complex]], [[Phosphorylation]]
- Suggested notes to create: [[Wee1]], [[CAK]], [[Skp2]], [[Maturation-Promoting Factor]]
- Strong connections to strengthen: [[CDC25]] ↔ [[CDK1]], [[CDC25]] ↔ [[CHK2]]
