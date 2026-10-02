---
title: Nuclear Receptor
description: Members of a superfamily of ligand-activated transcription factors that bind hormone, retinoid, vitamin D, fatty acid or xenobiotic ligands and regulate target gene transcription through a zinc-finger DNA-binding domain, a ligand-binding domain and two activation functions.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein-family, transcription-factor, gene-regulation, nuclear-receptor]
aliases: [Nuclear Receptor, nuclear receptors, NR, steroid receptor, nuclear hormone receptor]
---

# Nuclear Receptor

Nuclear receptors are a superfamily of ~48 human transcription factors that act as intracellular receptors for lipid-soluble signalling molecules. Unlike membrane receptors, they read the signal directly in the cytosol or nucleus and translate it into gene transcription, which is why their action is slow in onset, long in duration, and unusually pleiotropic.

> [!info] The defining property
> A nuclear receptor's activity is set by two independent inputs: which ligand it binds, and which coregulator the bound receptor recruits. Ligand binding changes the conformation of the ligand-binding domain, which creates or exposes a binding surface for coactivators. This modularity — separable domains, separable activation functions — is what made the superfamily one of the most productive target classes in pharmacology.

## Domain Architecture

| Domain | Residues | Function |
|---|---|---|
| N-terminal domain (NTD) | Variable, unstructured | **AF-1** (activation function 1) — largely ligand-independent; interacts with coactivators and with cell-specific transcription factors |
| DNA-binding domain (DBD) | ~70 residues, two C4 zinc fingers | Sequence-specific recognition of hormone response elements, dimerisation; the most conserved domain and the basis of target-gene specificity |
| Ligand-binding domain (LBD) | ~250 residues, ~12 α-helices around a hydrophobic pocket | Ligand binding, conformational switching, coactivator surface, **AF-2** — largely ligand-dependent |
| Hinge region | ~30 residues | Nuclear localisation signals, oligomerisation interfaces |

The two activation functions are the basis of the superfamily's pharmacology. **AF-1** in the NTD retains activity even after ligand depletion and mediates gene activation by unliganded or antagonist-bound receptors — which is how selective receptor modulators (SERMs) work. **AF-2** is formed by the last helix of the LBD, H12, which repositions on ligand binding to form a charge clamp for the LXXLL motif of coactivators. Antiandrogens such as bicalutamide work by occupying the pocket and specifically occluding the AF-2 surface while leaving AF-1 intact.

## Subfamilies

- **Class I (glucocorticoid, mineralocorticoid, androgen, progesterone, estrogen receptors)** — classical steroid receptors; a genomic or cytosolic/nuclear shuttle depending on the receptor. [[Androgen Receptor]], [[Estrogen Receptor]].
- **Class II (retinoic acid, retinoid X, thyroid hormone, vitamin D receptors, and the orphan receptors such as [[ERRalpha]])** — generally nuclear resident.
- **Class III/IV (PPARs, FXR, LXR, CAR, PXR, VDR co-regulatory partners)** — heterodimerise with RXR and sense dietary, xenobiotic and metabolic ligands.
- **NR0 ("zero") DAX1, SHP** — atypical, act as corepressors rather than ligand-activated receptors.

## Coregulators and the Chromatin Link

Nuclear receptors have essentially no intrinsic enzyme activity; all their output comes from recruited coregulators.

- **Coactivators** (SRC1–3/NCoA, PGC-1α, ARA70, TRBP) bind the AF-2 surface of agonist-bound receptors and carry histone acetyltransferase activity themselves or recruit [[CBP]]/[[P300]]. Acetylating neighbouring histones is how a nuclear receptor opens chromatin over its target promoters — placing nuclear receptors directly inside the vault's [[Histone Acetylation]] machinery.
- **Corepressors** (NCoR, SMRT, DAX1) bind the unliganded receptor and recruit [[HDAC|HDACs]], closing chromatin and silencing basal transcription.
- Ligand, [[SIRT1|sirtuins]] and coactivator availability all gate the same switch. [[SIRT1]] deacetylates p300/CBP and several nuclear receptor coactivators, so NAD+ status feeds into nuclear receptor output — a direct link between the [[NAD+]] axis and transcriptional metabolism.

## Clinical Significance

Nuclear receptors are one of the most druggable protein families in medicine. Steroid and synthetic glucocorticoids, antiandrogens, selective estrogen receptor modulators (tamoxifen, raloxifene), thyroid hormone, vitamin D analogues, retinoids (all-trans-retinoic acid in acute promyelocytic leukaemia) and PPAR agonists (pioglitazone, fibrates) are all nuclear receptor drugs.

Loss or dysregulation of the underlying receptor is oncogenic in several cancers — androgen receptor amplification in castration-resistant prostate cancer, ESR1 amplification in ER-positive breast cancer, loss of VHL-permitted nuclear receptor control in clear cell renal carcinoma. Inherited loss-of-function variants cause endocrine disease: androgen insensitivity syndrome, vitamin D-resistant rickets, McCune-Albright.

> [!warning] Big caveat for translational work
> "Nuclear receptor" activity is often inferred from ligand concentration alone, and total receptor abundance is a poor proxy for nuclear action. Many nuclear receptors are active as monomers or in heterodimers with RXR, and their target sets differ by cell type, which is why the same drug behaves very differently across tissues.

## Documents

- (no document notes yet)

## Connections

- [[Estrogen Receptor]] — a class I nuclear receptor; its ligand-independent AF-1 activity is the basis of selective oestrogen receptor modulators.
- [[Androgen Receptor]] — a class I receptor whose amplification and activation drive castration-resistant prostate cancer.
- [[ERRalpha]] — an orphan nuclear receptor that is not activated by oestrogen yet co-regulates with it, and a key node in mitochondrial metabolism.
- [[PPARγ]] — a class II heterodimeric nuclear receptor central to adipocyte biology and the target of pioglitazone.
- [[Transcription Factor]] — the superclass nuclear receptors belong to; nuclear receptors are distinguished by their modular domain architecture and ligand dependence.
- [[Histone Acetylation]] — the mechanism by which recruited coactivators activate target genes, placing nuclear receptors upstream of chromatin-opening marks such as [[H4K16ac]].
- [[CBP]] and [[P300]] — the histone acetyltransferase coactivators that nuclear receptors recruit in place of the AF-2 surface.
- [[HDAC]] — the corepressor-associated enzyme class recruited by unliganded receptors, the mirror image of coactivator recruitment.
- [[SIRT1]] — deacetylates nuclear receptor coactivators, making NAD+ availability a regulator of nuclear receptor output.
- [[NAD+]] — the metabolic substrate whose availability sets sirtuin activity, and therefore nuclear receptor transcriptional output.
- [[ERRalpha|Mitochondrial metabolism]] — the metabolic programme governed by nuclear receptors, the best-characterised case being ERRα control of oxidative phosphorylation.
- [[PGC-1α]] — a coactivator co-opted by several nuclear receptors, notably ERRα and PPARs, to drive mitochondrial biogenesis.
- [[Transcription]] — the level at which nuclear receptors act, through response elements in promoter and enhancer chromatin.
- [[Cancer]] — the disease context in which receptor amplification, ligand-independent activation and coactivator dysregulation are recurrent driver lesions.

## Linking Summary

- New links added: [[Estrogen Receptor]], [[Androgen Receptor]], [[ERRalpha]], [[PPARγ]], [[Transcription Factor]], [[Histone Acetylation]], [[CBP]], [[P300]], [[HDAC]], [[SIRT1]], [[NAD+]], [[PGC-1α]], [[H4K16ac]], [[Cancer]], [[Mitochondrial Biogenesis]]
- Suggested notes to create: [[Glucocorticoid Receptor]], [[Retinoic Acid Receptor]], [[Vitamin D Receptor]], [[PPAR]], [[RXR]], [[Thyroid Hormone Receptor]], [[Coactivator]], [[Corepressor]], [[NCoA]], [[Response Element]], [[Selective Estrogen Receptor Modulator]], [[HRE]], [[Nuclear Translocation]]
- Strong connections to strengthen: [[Nuclear Receptor]] ↔ [[Histone Acetylation]], [[Nuclear Receptor]] ↔ [[SIRT1]], [[Nuclear Receptor]] ↔ [[Estrogen Receptor]]