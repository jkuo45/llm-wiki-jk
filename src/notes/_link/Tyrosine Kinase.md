---
title: Tyrosine Kinase
description: Enzymes that transfer a phosphate group from ATP onto tyrosine residues of substrate proteins, functioning as binary on/off switches in signalling; the group is split into receptor tyrosine kinases and non-receptor cytosolic kinases and constitutes the largest single drug target class in oncology.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - enzyme
  - kinase
  - signaling
aliases: [protein tyrosine kinase, PTK, tyrosine protein kinase, TK]
---

# Tyrosine Kinase

A **tyrosine kinase** is an enzyme that catalyses the transfer of a γ-phosphate from [[ATP]] to the hydroxyl group of a **tyrosine** residue on a target protein. Phosphorylation of tyrosine is a reversible, binary, and highly specific covalent modification — a switch — and the ~90 tyrosine kinases encoded by the human genome make the human kinome the largest druggable enzyme family in existence. They are split into two structural and functional classes: **receptor tyrosine kinases** (RTKs) embedded in the plasma membrane, and **non-receptor (cytosolic) tyrosine kinases** such as the [[SRC kinase|SRC family]], ABL, JAK, SYK and FAK.

> [!info] Why phosphorylation is a switch
> Tyrosine phosphorylation creates a docking site. Phosphotyrosine is read by SH2 domains, PTB domains, and 14-3-3 proteins, so a single kinase's output is a *change in who can bind*, not a change in the substrate's chemistry. Phosphorylation is reversible by protein tyrosine phosphatases (PTPs) such as PTP1B and SHP2, and a fully-on cell is a kinase-amplified, phosphatase-countered equilibrium. The reason this matters: the amount of signal a cell produces is set by the ratio of kinase to phosphatase activity on each substrate, which is why PTPs are as drug-relevant as the kinases themselves.

## Receptor tyrosine kinases

RTKs are single-pass transmembrane proteins with an extracellular ligand-binding domain, a single transmembrane helix, and a cytoplasmic tyrosine kinase domain. The canonical activation cycle is:

1. Ligand (a growth factor) binds the extracellular domain, usually causing dimerisation — either ligand-induced (insulin receptor) or pre-formed dimers that are allosterically rearranged (EGFR family).
2. The cytoplasmic kinase domains trans-phosphorylate each other on activation-loop tyrosines, relieving autoinhibition and activating the kinase.
3. Phosphotyrosines in the cytoplasmic tail become docking sites for SH2-domain and PTB-domain proteins — adapter proteins, phosphatases, and the Ras GEF machinery.
4. Signalling branches into Ras–MAPK (proliferation), PI3K–AKT–mTOR (survival, growth, metabolism), PLCγ (calcium, PKC), and STAT (transcription).

> [!warning] Activation is not the only failure mode
> RTK-driven cancer is caused by **gain-of-function activation** (amplification, activating mutation, autocrine ligand loop) as often as by anything else, and the therapeutic consequence is the acquired-resistance pattern documented in [[Targeted Therapy]]: secondary mutations in the ATP-binding pocket, activation of downstream bypass routes such as MET amplification, and receptor family switching. RTKs are also implicated in loss-of-function disease, e.g. insulin receptor mutations causing type A insulin resistance, and RET loss-of-function in Hirschsprung disease versus RET gain-of-function in MEN2 and medullary thyroid carcinoma.

**The RTK families**: EGFR/ERBB (4 members; the most therapeutically exploited), Insulin receptor and IGF-1R, PDGFR, VEGFR1–3, FGFR1–4, KIT, MET/HEPGAR, RET, TRK, ALK, AXL, and the Ephrins and TAM receptors. See [[Receptor Tyrosine Kinases]].

## Non-receptor tyrosine kinases

These lack a transmembrane domain and are activated by other means — autophosphorylation driven by another kinase, by adaptor-mediated clustering, or by binding to phosphorylated peptides. They are the transducers *downstream* of RTKs and the receptors for cytokines.

- **[[SRC kinase|SRC family]]** — SRC, FYN, YSK, BLK, HCK, LCK. Central to integrin adhesion, bone resorption, and TCR signalling. LCK initiates T cell receptor signalling; FYN and SRC are the leading drug target in the ALK-inhibitor combinations used for resistant disease.
- **ABL** — ABL1 and ABL2. ABL1 is fused to BCR in the Philadelphia chromosome, producing the constitutively active BCR-ABL kinase of chronic myeloid leukaemia and some acute lymphoblastic leukaemias. It is the founding example of successful targeted therapy via [[Imatinib]], and also the source of the imatinib-resistance mutation catalogue.
- **JAK family** — JAK1/2/3 and TYK2 are the receptors for type I/II cytokine receptors, transducing cytokine signals to STATs. Loss-of-function JAK variants cause immunodeficiency; gain-of-function JAK2 causes polycythaemia vera and related myeloproliferative neoplasms; and TYK2 is a validated drug target in [[Autoimmune Disease]] (deucravacitinib).
- **SYK, BTK, HCK, LYN** — B-cell and myeloid immunoreceptor signalling; BTK is a validated target in B-cell malignancies and in multiple sclerosis.
- **FAK, PYK2, ACK1/TNK2, and the TAM family** — integrin and adhesion signalling, the mechanism by which cells sense their substrate.
- **ZAP70** — T cell receptor proximal kinase.

## Non-nuclear functions

Beyond signalling to transcription, tyrosine kinases have direct structural and metabolic roles. The clearest example: **titin**, the giant sarcomeric protein, has its own dedicated titin kinase domain. Membrane-associated tyrosine kinases also have glycolytic functions (HK2 association) and nuclear functions (EGFR and ABL translocate to the nucleus to regulate transcription and to repair nuclear DNA, a function revealed by the nuclear localisation of ABL in response to genotoxic stress).

## Therapeutic relevance

Tyrosine kinases are the most intensively targeted enzyme family in medicine. All the first-generation successful targeted cancer drugs are tyrosine kinase inhibitors ([[Tyrosine Kinase Inhibitors]]), covering BCR-ABL, EGFR, HER2, BRAF, ALK, RET, MET, KIT, PDGFR, VEGFR, JAK, BTK, CDK and MEK. The pharmacology is discussed at the class level in [[Tyrosine Kinase Inhibitors]]; the class is a standard component of [[Targeted Therapy]], and resistance is the field's defining problem.

> [!warning] Selectivity caveat
> "Selective" kinase inhibitors are rarely fully selective. ATP is structurally similar across the ~500 kinases in the human kinome, and type I inhibitors must engage the conserved ATP pocket, so off-target kinase binding is expected and is often the mechanism of both on-target toxicities (e.g. VEGFR inhibitors causing hypertension, PDGFR inhibitors causing oedema) and off-target ones. The class's credibility rests on pharmacogenomic selection — the drug is chosen to match the tumour's dependency — not on the inhibitor being kinome-clean.

## Documents

- [[MET gene]] — MET is a receptor tyrosine kinase, and the vault's MET gene note is the case study of a receptor RTK as a cancer dependency and as a bypass-resistance escape route.
- [[SRC kinase]] — SRC is the archetypal non-receptor tyrosine kinase, and its note supplies the integrin-adhesion, bone-resorption and kinase-inhibitor detail this note summarises.
- [[Tyrosine Kinase Inhibitors]] — the class-level pharmacology note covering the ATP-competitive mechanism, selectivity problems, resistance mechanisms, and the individual agents.

## Connections

- [[MET gene]] — MET encodes a receptor tyrosine kinase, one of the RTK families this note enumerates. It is also the standard worked example of the bypass-resistance mechanism: MET amplification is a common route of escape from EGFR inhibition in lung cancer, which makes it simultaneously a target and a resistance node.
- [[SRC kinase]] — SRC is the founding non-receptor tyrosine kinase, discovered as a sarcoma virus oncogene. Its note covers the adhesion, osteoclast and T-cell signalling biology that this note compresses, and SRC is itself a drug target in combination with ALK inhibitors.
- [[Tyrosine Kinase Inhibitors]] — Inhibitors of this enzyme class are the largest drug family in oncology and the core of [[Targeted Therapy]]. The class note holds the pharmacology, the resistance catalogue, and the individual agents; this note holds the enzymology and the signalling architecture the inhibitors exploit.
- [[Receptor Tyrosine Kinases]] — The receptor subset of this enzyme class is where drug development is most concentrated. RTKs are the family whose members are simultaneously the drug target, the biomarker (an amplification or mutation), and the source of the acquired-resistance mutation.
- [[Kinase]] — Tyrosine kinases are one branch of the larger kinase superfamily, which includes serine/threonine kinases and the lipid kinases. The shared phosphotransfer chemistry is why ATP-competitive inhibition is the dominant drug design strategy across the whole family.
- [[Kinase Inhibitor]] — The general drug class of which tyrosine kinase inhibitors are the largest and best-studied example. The chemistry of ATP-site competition, and the structural similarity of the ATP pocket across kinases, are shared between the two notes.
- [[Phosphorylation]] — Tyrosine phosphorylation is the substrate-level event this enzyme performs, and its reversal by phosphatases is what makes the switch a switch. Nearly all signal amplification, memory and cross-talk in the cell runs through kinase-phosphatase equilibria.
- [[ATP]] — The phosphate donor for the whole kinase superfamily. Because the ATP site is highly conserved, a competitive inhibitor that binds it cannot be fully selective, which is the central pharmacochemistry of this class.
- [[Targeted Therapy]] — Tyrosine kinases are the dominant target class of targeted therapy; this enzyme family and that treatment modality are near-synonymous in oncology, with each kinase drug requiring a matching genomic biomarker.
- [[Imatinib]] — Imatinib is the proof of concept for the entire class: BCR-ABL is a constitutively active fusion tyrosine kinase, and its inhibition converted CML from a fatal disease to a managed one. The resistance mutations it selected for are the field's template.
- [[Oncogene Activation]] — Activated tyrosine kinases are among the most common oncogenes. The distinction between a proto-oncogene (activated by amplification/point mutation/fusion) and a tumour suppressor (inactivated) frames why kinase inhibition works so well in cancer: the target can be rendered dependency-addicted.
- FAK is the non-receptor tyrosine kinase that mechanosenses integrin adhesion and cell substrate interaction, making it the direct connection between this enzyme class and mechanotransduction.
- [[Reactive Oxygen Species]] — Tyrosine kinases and phosphatases are thiol-reactive enzymes, and the reversible oxidation of catalytic cysteines by H₂O₂ is a mechanism by which redox state directly sets kinase activity. This is a substantive, mechanistically real link between ROS signalling and phosphorylation-based signalling.

## Linking Summary

- New links added: [[Kinase]], [[Kinase Inhibitor]], [[Phosphorylation]], [[ATP]], [[Targeted Therapy]], [[Imatinib]], [[Focal Adhesion Kinase]], [[Reactive Oxygen Species]], [[Oncogene Activation]]
- Suggested notes to create: [[Protein Tyrosine Phosphatase]], [[SH2 Domain]], [[Phosphotyrosine]], [[ABR Tyrosine Kinase]], [[BCR-ABL]], [[Receptor Dimerization]], [[RTK Negative Regulation]], [[Kinome]], [[Structural Biology of the ATP Site]], [[Tyrosine Kinase Autoinhibition]]
- Strong connections to strengthen: [[Tyrosine Kinase]] ↔ [[Receptor Tyrosine Kinases]], [[Tyrosine Kinase]] ↔ [[Kinase]], [[Tyrosine Kinase Inhibitors]] ↔ [[Targeted Therapy]]
