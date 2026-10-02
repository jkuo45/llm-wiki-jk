---
title: CBP
description: "CBP (CREB-binding protein / CREBBP) is a 2442-residue transcriptional coactivator and lysine acetyltransferase that scaffolds enhancer-bound transcription factors to the Mediator complex and acetylates histones and non-histone targets including p53."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription
  - histone-acetylation
  - neurodegeneration
aliases: [CREB-binding Protein, CREBBP, CBP/p300, KAT2B, p300/CBP]
---

# CBP

**Overview:** CBP — the CREB-binding protein, gene *CREBBP*, UniProt name KAT2B — is a ~2442-amino-acid nuclear protein that functions both as a **transcriptional coactivator** and as a **lysine acetyltransferase (KAT)**. It is the functional paralog of [[P300]], sharing ~86% identity within their catalytic domains. CBP is one of the most heavily studied coactivators in biology because it sits at the convergence of almost every signal-responsive transcriptional pathway.

## Structure and domains

CBP is a linear, modular scaffold with a large number of intrinsically disordered regions (residues 1–41, 74–179, 266–290, 794–1083, 1556–1615). Its functional modules are:

| Domain | Approx. residues | Function |
| --- | --- | --- |
| TAZ1 (CBP-interacting domain 1) | 347–433 | Cyclin H–binding; mediates assembly of the TFIIH complex and docking to the TAZ domains of other CBP-interacting proteins |
| TAZ2 | ~1240–1320 | STAT and nuclear receptor coactivation; binds PCAF |
| KIX domain | 587–666 | Binds the phosphorylated CREB Ser133 motif and other phospho-TFs (SREBP, Elk-1, HSF1) |
| Bromodomain 1 | 1085–1192 | Acetyl-lysine reader; binds acetylated histones (H3K27ac region) and ASF1A |
| Bromodomain 2 | ~2080–2140 | Second acetyl-lysine reader with distinct ligand preference |
| Zinc finger / TAZ-type 3 | near 1100 | Zinc-binding module |
| KAT/HAT domain | 1323–1700 | The catalytic lysine acetyltransferase core |
| Bromodomain–SANT (BD-SANT) | 1740–1820 | Reads acetylated p53 and is required for full transcriptional activity |
| SRC-1/HDAC interaction (SID) | 1935–2000 | Binds nuclear receptors; couples CBP to the co-repressor machinery |

> [!info] Autoregulation by acetylation
> CBP acetylates its own bromodomains, creating a negative-feedback loop (Acetyl-K233, Acetyl-K236, Acetyl-K868) that switches CBP off after a transcriptional burst. Loss of these sites produces hyperactive, oncogenic CBP.

## Mechanism

CBP is recruited to a gene by one of two routes:

1. **Phosphorylated transcription factor binding.** Activated CREB phosphorylated at Ser133 docks into the KIX domain; STATs, Elk-1, SREBP, HSF1, and nuclear receptors use related KIX-dependent or TAZ-dependent contacts.
2. **Bromodomain binding of acetylated chromatin.** Bromodomain 1 reads H3K27ac and other acetyl marks on the enhancer, providing a second, sequence-independent anchor.

Once bound, CBP does three things at once:

- **Scaffolds** — its disordered regions simultaneously bind a dozen or more proteins (TFs, Mediator subunits, basal transcription factors, chromatin remodelers) and physically bridge them, so that enhancers are physically connected to the promoter. This bridging, not enzymatic activity, is arguably CBP's most essential product: the BRD4–Mediator axis operates on the same principle.
- **Acetylates chromatin.** The KAT domain acetylates histone H3 and H4 tails, neutralizing lysine charge and loosening nucleosomes to allow transcription. CBP strongly acetylates H3K27.
- **Acetylates non-histone targets.** These include [[p53]] (in a catalytically impaired, acetyl-mimic-like manner), [[FOXO]] proteins, nuclear receptor coactivators such as SRC-1/GRIP1, and several metabolic enzymes, giving CBP control over stability and activity, not just chromatin state.

## Physiological functions

- **Cell cycle and proliferation.** CBP acetylates and stabilizes the coactivators used by E2F, and cooperates with the [[RB1|Rb]]–E2F axis; loss of CBP halts proliferation in most contexts.
- **Differentiation and development.** CBP dosage is essential for embryonic development; heterozygous loss is the cause of Rubinstein-Taybi syndrome.
- **Memory and cognition.** Neuronal CBP is required for long-term potentiation and transcriptional memory; conditional deletion in adult mice impairs fear memory.
- **Metabolic reprogramming.** CBP is required for fasting/feeding transcriptional responses, gluconeogenesis, and mitochondrial biogenesis programs via [[PGC-1α]] and [[NRF2]].
- **Immune and inflammatory transcription.** CBP is an essential coactivator for [[NF-κB]], IRFs, and STATs, and is required for T-cell activation programs.

## Disease relevance

**Rubinstein-Taybi syndrome (RSTS).** Haploinsufficiency of *CREBBP* (RSTS type 1, the majority of cases) or *EP300* (type 2) causes a multiple congenital anomaly syndrome: intellectual disability, postnatal growth deficiency, distinctive facial features, and broad thumbs/great toes. The mechanism is haploinsufficiency of both HAT activity and scaffold function.

**Cancer.** Recurrent *CREBBP* mutations are common in [[Lymphoma|lymphomas]] (especially follicular and DLBCL, where they occur in a large fraction of cases) and in [[Bladder Cancer|bladder cancer]]. Truncating mutations that remove the HAT domain act as dominant negatives, producing a hyper-acetylated but non-functional CBP that recruits HDAC3/SMRT/NCOR corepressors to enhancers — an oncogenic state, and the basis of EZH2-inhibitor sensitivity in these tumors.

**Neurodegeneration.** Reduced CBP activity is implicated in [[Huntington's Disease|Huntingington's disease]], [[Alzheimer's Disease|Alzheimer disease]], and [[Parkinson's Disease|Parkinson's disease]] via impaired CREB-dependent transcription, and CBP loss contributes to the transcriptional decline seen in aging neurons.

> [!warning] Small-molecule targeting remains difficult
> Bromodomain inhibitors of CBP/p300 exist and show pre-clinical activity, but CBP's KAT domain and its huge scaffold surface have so far resisted clinically useful inhibitors. CBP is also required in normal physiology, so systemic inhibition carries real toxicity risk.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk between cell death mechanisms]] — surveys transcriptional coactivator nodes in death-receptor and stress signalling.

## Connections
- [[P300]] — the close paralog; CBP/p300 act as obligate coactivator pairs for most enhancer-bound transcription factors and share ~86% identity in the KAT domain.
- [[Histone Acetylation]] — the KAT domain's core enzymatic output, neutralising lysine charge on H3/H4 to open chromatin for transcription.
- [[Transcription Factor]] — CBP is recruited by phosphorylated or acetylated transcription factors through its KIX domain and bromodomains.
- [[CREB]] — the founding binding partner; CREB Ser133 phosphorylation docks into the CBP KIX domain and is the classic mechanism of cAMP-gene transcription.
- [[p53]] — CBP acetylates p53, and its BD-SANT domain reads acetylated p53; CBP both modifies and is allosterically activated by p53.
- [[Epigenetics]] and [[Chromatin]] — CBP is the paradigmatic coactivator of enhancer function and of enhancer–promoter looping.
- [[Induced Pluripotent Stem Cells]] — the OSKM network analysis documents a CREBBP-dependent pluripotency amplification path, tying CBP to reprogramming.
- [[Nuclear Receptor]] — many nuclear receptors recruit CBP/PCAF via their AF-2 activation domains and SID binding.
- [[Huntington's Disease]] — reduced CREB/CBP-dependent transcription is an established feature of striatal neurons in HD and a therapeutic target in HD models.
- [[NF-κB]] — CBP is the essential coactivator for NF-κB-dependent inflammatory gene induction, linking CBP to [[Inflammation]].
- [[FOXO]] — CBP acetylates FOXO proteins and cooperates with SIRT1 to control FOXO-dependent stress-resistance genes.

## Linking Summary
- New links added: [[Rubinstein-Taybi Syndrome]], [[Bladder Cancer]], [[EZH2]], [[HDAC3]]
- Suggested notes to create: [[Rubinstein-Taybi Syndrome]], [[SMRT/NCOR]], [[Bromodomain]], [[KAT2B]], [[Enhancer]], [[Dominant-Negative Mutation]], [[SREBP]], [[Mediator Complex]], [[SRC-1/GRIP1]] — removed as already existing: ASF1a, EZH2, H3K27ac, HAT, HDAC3
- Strong connections to strengthen: [[CBP]] ↔ [[P300]], [[CBP]] ↔ [[CREB]], [[CBP]] ↔ [[Histone Acetylation]], [[CBP]] ↔ [[Transcription Factor]]