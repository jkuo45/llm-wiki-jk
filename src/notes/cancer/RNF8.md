---
title: RNF8
description: RNF8 is a RING finger E3 ubiquitin ligase that initiates the chromatin ubiquitination cascade at DNA double-strand breaks, writing K63-linked polyubiquitin on neighbouring H2A and H2AX to recruit downstream repair factors including 53BP1 and BRCA1.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, e3-ligase, dna-repair, ubiquitination, radiation-biology]
aliases: [RNF8, Ring finger protein 8, hRNF8]
---

# RNF8

**RNF8** is a RING finger E3 ubiquitin ligase that acts as the initiator of the
ubiquitin cascade at sites of DNA double-strand break (DSB). It is the enzyme
that converts a plain chromatin lesion into a platform that hundreds of repair
proteins can read: without the K63-linked polyubiquitin chains RNF8 writes,
virtually no downstream DSB signalling occurs.

> [!info] The cascade in one line
> ATM phosphorylates H2AX → **MDC1 binds γH2AX** and amplifies the signal →
> **RNF8** is recruited and writes K63-linked chains on H2A/H2AX → **RNF168**
  extends them → 53BP1, RAP80, BRCA1 and the shieldin complex dock onto those
  chains and choose repair pathway. RNF8 sits at the top of that chain.

## Structure & Mechanism

RNF8 is a 485-residue protein with an N-terminal FHA domain and a C-terminal
RING finger. The RING finger is the catalytic core: it binds E2 conjugating
enzymes directly via the RING–E2 interface, raising the E2's transfer rate to
ubiquitin roughly two orders of magnitude above free E2 and positioning ubiquitin
for direct transfer onto substrate lysine. Unlike E3s built from HECT or RBR
domains, RNF8 does not form a covalent thioester intermediate with ubiquitin.

The FHA domain is a phosphothreonine-binding module, and it is how RNF8 is
localized: RNF8 is not recruited to a break by ubiquitin, it is recruited by
phosphorylated MDC1. This ordering matters — the FHA domain makes RNF8
phospho-dependent, which is why RNF8 foci form only after ATM kinase activity,
never before.

The chains RNF8 itself writes are predominantly **K63-linked**, and in
mammalian cells RNF8 contributes substantially to the K13/K15 ubiquitination of
H2A and H2AX rather than acting on the histones alone. The chains function as a
landing platform, not as a degradation signal — the opposite of K48 linkage.

> [!warning] RNF8 does more than write ubiquitin
> RNF8 is also reported to restrain p53-dependent apoptosis independently of its
> ligase activity at the chromatin, by regulating the acetyltransferase TIP60.
> The relative contributions of the repair and anti-apoptotic functions remain
> incompletely partitioned, and results obtained with catalytically dead RNF8
  mutants should be read with that in mind.

## Biological Roles

**DSB repair.** RNF8 knockout cells show a marked reduction in 53BP1 and BRCA1
focus formation, defective RNF168 recruitment, and radiosensitivity. RNF8 loss
biases repair away from homologous recombination — the 53BP1-dependent,
end-protection-dominant outcome — and is associated with genomic instability.
The relationship to BRCA1 is worth noting because it underlies a real clinical
correlation: BRCA1-mutant tumours that retain RNF8/53BP1 activity repair by
error-prone end resection and resection-independent joining, which is why
PARP-inhibitor resistance is so strongly associated with BRCA1 loss.

**Class switching.** RNF8 ubiquitinates histones flanking immunoglobulin
switch regions, which recruits the activation-induced cytidine deaminase (AID)
to the switch regions. Its loss abolishes class-switch recombination outright.

**Genome instability and cancer.** RNF8 is a tumour suppressor by the usual
logic: loss causes breaks that are not repaired, and unrepaired breaks are
mutagenic. Reduced RNF8 protein has been reported in breast, prostate and
pancreatic tumour tissue, and mechanistically it promotes resistance to
DNA-damaging chemotherapy and to PARP inhibitors.

**Viral restriction.** Several viruses encode antagonists of the RNF8/RNF168
axis, which is consistent with its antiviral function.

## Human Disease

Biallelic loss-of-function of RNF8 has been reported in a small number of
patients with a primary immunodeficiency phenotype combining severe
lymphopenia, defective T-cell proliferation, radiosensitivity, and chromosomal
instability — the combination typical of an ionizing-radiation-sensitivity
disorder. It is a very rare genopathy; the human data are a case series, not a
cohort.

## Documents
- (no document notes yet)

## Connections
- [[MDC1]] — MDC1 is the essential recruiting platform. It binds γH2AX through
  its BRCT domains, accumulates at the break, and presents its
  phospho-threonine sites to the FHA domain of RNF8. Without MDC1, RNF8 cannot
  focus, and the entire downstream cascade fails — MDC1 sits functionally
  upstream of RNF8 rather than beside it.
- [[RNF168]] — RNF168 acts downstream and in parallel: it extends the K63 chains
  RNF8 initiates onto H2A and H2AX and is the ligase whose activity drives 53BP1
  recruitment. Loss of either ligase blocks repair; loss of RNF168 additionally
  destabilizes RNF8, so the pair is epistatic rather than redundant.
- [[Ubiquitination]] — RNF8 is a textbook E3 ligase and the archetypal example of
  signalling, not proteolytic, ubiquitin use: K63 chains signal a repair site,
  whereas the K48 chains that mark a protein for [[Proteasome]] degradation are
  the other major linkage grammar. The same chemistry, opposite instruction.
- [[Ubiquitin-Proteasome System]] — the E2 partners RNF8 draws on (Ubc13–Uev1A
  for K63 chains, UbcH5 for other linkages) are shared with the proteasomal
  pathway, so the ubiquitin economy is coupled even though the output here is
  binding rather than degradation.
- [[53BP1]] — 53BP1 reads the K63 polyubiquitin RNF8 writes, via its tandem UBZ
  domains, and enforces end protection and non-homologous end joining. RNF8
  knockout cells lose 53BP1 foci; this is the functional readout most often used
  to score RNF8 activity experimentally.
- [[BRCA1]] — the RAP80-containing shieldin complex competes with BRCA1–PALB2
  assembly at the same ubiquitin-modified chromatin. Which branch wins determines
  whether the break is resected and repaired faithfully or protected and repaired
  error-prone.
- [[DNA Repair]] — RNF8 is a core signalling component rather than a catalytic
  repair enzyme: it does not resect, ligate, or unwind. Its function is to
  convert lesion recognition into a recruitable signalling surface, which is why
  its loss produces a checkpoint-defective, error-prone repair phenotype rather
  than a complete block.

## Linking Summary
- New links added: [[MDC1]], [[RNF168]], [[Ubiquitination]],
  [[Ubiquitin-Proteasome System]], [[53BP1]], [[BRCA1]], [[DNA Repair]],
  [[Proteasome]]
- Suggested notes to create: [[RING Finger]], [[53BP1–BRCA1 Choice]] — removed as already existing: γ-H2AX
  [[FHA Domain]], [[E2 Conjugating Enzyme]], [[Class-Switch Recombination]],
  [[Immunodeficiency]], [[RADIOSENSITIVITY]], [[PARP Inhibitor]]
- Strong connections to strengthen: [[RNF8]] ↔ [[MDC1]], [[RNF8]] ↔ [[RNF168]],
  [[RNF8]] ↔ [[DNA Repair]]