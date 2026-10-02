---
title: CHK1
description: "CHK1 (CHEK1) is the CMGC-family serine/threonine checkpoint kinase activated by ATR at stalled replication forks; it delays cell-cycle progression by inhibiting CDC25 phosphatases and activating WEE1, and is a major oncology drug target."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - kinase
  - dna-damage-response
  - cancer
aliases: [Checkpoint Kinase 1, CHEK1, Chk1, CHK1L]
---

# CHK1

**Overview:** CHK1 is a ~476-amino-acid serine/threonine kinase of the **CMGC kinase group** (the same group as [[CDK]] and [[MAPK]]). It is the effector kinase of the ATR arm of the DNA damage response. CHK1 is **essential** in mammals: knockout causes embryonic lethality, and even partial loss sensitises cells to DNA-damaging agents.

## Structure and domains

- **Kinase domain (N-terminal, ~residues 1–176)** — a bilobal kinase fold with an activation loop whose tip carries **Thr345**. Phosphorylation of Thr345 by ATR (with autophosphorylation contributing in cis) locks the loop into position and pairs with the catalytic glutamate (Glu275) at the C-helix, generating the active conformation.
- **SQ/TQ motif region (~residues 345–405)** — the disordered C-terminal region immediately following the activation loop. ATR specifically phosphorylates **Ser345**; the adjacent **Ser/S Thr (SQ) sites (Ser317, Ser328, Ser345, Thr390)** are phosphorylated by **CHK1 autophosphorylation** in cis and are essential for full CHK1 activity and stability.
- **Kinase-inhibitory domain (KID, ~residues 393–415)** — binds the kinase domain's substrate groove intramolecularly, capping and inhibiting CHK1 in the absence of activation. ATAD2/ELG1 and the PP2A phosphatase control KID occupancy.
- **C-terminal tail** — leucine-rich repeats (LRRs) that recognise the C-termini of replication protein A (RPA)-coated ssDNA at stalled forks; CHK1-LRR/CLIP (CHEK1L) is the constitutively nuclear alternative isoform with distinct function.

## Mechanism of action

1. **Activation.** Single-strand DNA at a stalled replication fork is coated by replication protein A (RPA). ATR–ATRIP is recruited, and ATR phosphorylates CHK1 at Ser345. Autophosphorylation on adjacent SQ/TQ sites completes activation and promotes full substrate phosphorylation.
2. **Intra-S checkpoint.** Activated CHK1 phosphorylates and promotes proteasomal degradation of **PHOSPH1**, and abrogates origin firing by phosphorylating Treslin (CHK1-binding protein) and inhibiting DBF4-dependent kinase. Result: no new origins start, so already-started forks are not starved of nucleotide.
3. **G2/M checkpoint.** CHK1 phosphorylates [[CDC25]] phosphatases (binding them via its kinase domain and phosphorylating Ser216), which both inactivates them and creates a 14-3-3-binding site that sequesters them in the cytoplasm. Simultaneously CHK1 phosphorylates and activates **WEE1**, which adds the inhibitory Thr14/Tyr15 phosphates to CDK1. Together this holds CDK1–cyclin B inactive until replication is complete.
4. **Fork stabilisation and repair.** CHK1 stabilises stalled forks and suppresses nuclease-mediated degradation, promoting homologous recombination repair rather than collapse.
5. **Transcriptional output.** CHK1 activates p53 (via ATM and CHK2, and directly) and induces stress gene expression; it also regulates the G1/S transition, centrosome duplication, and replication-licensing.

> [!important] CHK1 is the guardian of replication-fork integrity
> ATR senses the lesion; CHK1 executes the response. ATR and CHK1 have partly separable substrates, so ATR inhibition and CHK1 inhibition are not interchangeable pharmacologically.

## Disease relevance

**Cancer.** CHK1 is a **dependency** in tumours with high replicative stress — including those with *BRCA1/2* loss, *TP53* mutation, RAS activation, or MYC overexpression — because such cells rely on the intra-S checkpoint to survive. CHK1 inhibitors (prexasertib, rabusertib, and the earlier failed MK-8776/SCH 900776) have shown activity in combination with genotoxic agents, though monotherapy responses have been modest and clinical development has been challenging. Truncated or kinase-dead CHK1 has been reported in selected tumours.

**SARS-CoV-2 and viral infection.** SARS-CoV-2 infection triggers DNA damage and senescence via **CHK1 degradation**, with the viral N protein binding damage-induced lncRNAs and impairing 53BP1 recruitment.

**Other.** CHK1 is a direct transcriptional target of [[c-Myc|MYC]], providing a molecular link between oncogene activation and the replication-stress response. CHK1 loss also impairs embryonic development and contributes to degenerative disease phenotypes in mouse models.

**Toxicity context.** Because normal proliferating cells also depend on CHK1, its inhibition produces myelosuppression and GI toxicity — the main dose-limiting class effects.

## Documents

- [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis 2023]] — reports that mitochondrial ROS can activate nuclear CHK1 redox-dependently, followed by CHK1-dependent phosphorylation of the mitochondrial ssDNA-binding protein SSBP1, linking chemotherapeutic mitochondrial ROS to checkpoint signalling and platinum resistance.
- [[_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities|Cellular senescence and SASP in tumor progression and therapeutic opportunities]] — cites SARS-CoV-2–induced DNA damage via CHK1 degradation and impaired 53BP1 recruitment, driving cellular senescence.

## Connections
- [[ATR]] — the kinase that phosphorylates and activates CHK1 at Ser345; ATR and CHK1 together form the principal replication-stress checkpoint.
- [[CDC25]] — CHK1 phosphorylates CDC25, triggering its sequestration and proteasomal degradation and thereby holding CDK1 inactive.
- [[CDK]] — CHK1 acts on CDK1 and CDK2 through the WEE1/CDC25 axis to delay S phase and mitosis.
- WEE1 — the mitotic inhibitor kinase CHK1 activates; with [[CDC25]] it forms the bistable mitotic switch CHK1 controls.
- [[ATM]] — the checkpoint kinase of the double-strand-break arm, which cross-talks with and can substitute for CHK1 in some contexts.
- [[DNA Damage Response]] — CHK1 is a core component of the DDR, coordinating replication arrest, fork stabilisation, and repair.
- [[p53]] — CHK1 activates p53 directly and via ATM/CHK2, linking checkpoint activation to the p21 arrest response.
- [[Senescence]] — checkpoint activation coupled to unrepaired damage (as after SARS-CoV-2–induced CHK1 degradation) drives the senescence programme and SASP.
- [[MYC]] — MYC transcriptionally induces CHK1, coupling oncogene-driven replication stress to checkpoint dependence.
- [[Reactive Oxygen Species]] — mitochondrial ROS can activate CHK1 in a redox-dependent manner, an example of mitohormetic signalling reaching the nucleus.
- [[Quiescence]] — mitotic entry is blocked by WEE1/CDK1 in G2; CHK1 activity is the checkpoint that permits or prevents G2/M and hence whether an arrested cell re-enters division.

## Linking Summary
- New links added: [[c-Myc]], [[53BP1]], [[MDC1]], [[Homologous Recombination]]
- Suggested notes to create: [[CHEK1]], [[ATR-ATRIP]], [[WEE1]], [[MYT1]], [[RPA]], [[Treslin]], [[DBF4]], [[Prexasertib]], [[Rabusertib]], [[Phosphatase Regulation]], [[CLIP Domain]], [[Replication Fork Stability]] 53BP1, Homologous Recombination, MDC1, c-Myc
- Strong connections to strengthen: [[CHK1]] ↔ [[ATR]], [[CHK1]] ↔ [[CDC25]], [[CHK1]] ↔ [[DNA Damage Response]], [[CHK1]] ↔ [[p53]]
