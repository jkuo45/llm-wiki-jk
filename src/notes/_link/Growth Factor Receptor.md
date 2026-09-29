---
title: Growth Factor Receptor
description: Growth factor receptors are cell-surface receptors — almost all receptor tyrosine kinases — that bind secreted peptide growth factors such as EGF, FGF, VEGF, PDGF and insulin-like factors. Ligand binding induces oligomerisation and trans-autophosphorylation on cytoplasmic tyrosines, generating docking sites that trigger RAS–MAPK, PI3K–AKT and PLCγ signalling.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - receptor
  - signaling
  - kinase
aliases: [growth factor receptors, GFR, receptor tyrosine kinase, RTK, tyrosine kinase receptor]
---

# Growth Factor Receptor

"Growth factor receptor" is not a single protein but a functional class: the cell-surface receptors for polypeptide growth factors. With a handful of exceptions (the TGF-β family, which are **serine/threonine** kinases — see [[TGF-beta Receptor]] — and the cytokine receptors (e.g. the IL-6 receptor/gp130 and leptin receptor systems), which have no intrinsic kinase activity and recruit [[JAK2|JAK]] family kinases), growth factor receptors are **receptor tyrosine kinases (RTKs)**: single-pass transmembrane proteins with an extracellular ligand-binding region, one transmembrane α-helix, and a cytoplasmic kinase domain.

> [!info] Architecture
> The archetypal RTK has three regions: extracellular ligand-binding domain(s), a single membrane-spanning helix of ~25–38 residues, and an intracellular tyrosine kinase domain. The insulin receptor family is the exception that proves the rule — it is a pre-formed disulfide-linked (α₂)β₂ heterotetramer, so ligand binding does not create the dimer but re-arranges it.

> [!info] Activation mechanism
> The consensus mechanism, established for [[EGFR]] and reviewed by Ullrich and Schlessinger (1990), is:
> 1. **Ligand binding** to the extracellular region raises the local effective concentration of two receptor monomers.
> 2. **Dimerization** (or, for pre-dimeric receptors, a rearrangement of the existing dimer) brings the two cytoplasmic kinase domains into register.
> 3. **Trans-autophosphorylation**: each kinase phosphorylates tyrosines on the other's cytoplasmic tail. Activation is a *relational* event — a monomer alone is essentially inert.
> 4. The phosphotyrosines become **docking sites** for SH2-domain and PTB-domain proteins, which convert a small number of membrane-proximal phosphotyrosines into a large, specific signalling output.
>
> A useful refinement from the modern structural literature: RTK dimers are best described not as a single state but as an **ensemble of microstates** with different kinase-dimer conformations, only some of which are phosphorylation-competent. This is how two different ligands bound to the same receptor produce different phosphorylation patterns, and why receptor overexpression alone can increase signalling.

The three canonical downstream arms are:

| Arm | Adaptors | Effector | Output |
|---|---|---|---|
| RAS–MAPK | GRB2/SOS, SHC | [[ERK]], [[p38 MAPK]], [[JNK]] | Proliferation, differentiation, immediate-early gene expression |
| PI3K–AKT–mTOR | [[PI3K]], Grb2/IRS | [[Akt]], [[mTORC1]] | Survival, growth, metabolism, protein synthesis |
| PLCγ–IP3–DAG | PLCγ | IP₃R, PKC | Calcium signalling, [[Calcium Signaling]] |

## Negative regulation

Signalling is switched off as deliberately as it is on. [[PTEN]] dephosphorylates PI₃K lipids; [[SHP2]] and other protein tyrosine phosphatases dephosphorylate the receptor itself; E3 ubiquitin ligases such as Cbl ubiquitinate it for endocytosis and [[Proteasome|proteasomal]] turnover; and receptor internalisation itself changes signalling — continuing PI3K signalling from endosomes produces a spatially distinct, temporally extended response. Loss of any of these brakes is a common cancer mechanism.

## Clinical and research relevance

> [!info] Cancer
> RTK signalling is kept permanently off in roughly half of all human cancers, most often by a single activating event: amplification or overexpression of the receptor ([[EGFR]] in lung and glioblastoma, [[HER2]] in breast), an activating point mutation ([[EGFR]] L858R, T790R), or an autocrine loop in which the tumour both makes the ligand and expresses the receptor. This is why RTKs are the single most successfully drugged receptor class: the EGFR inhibitors, [[Lapatinib]], anti-HER2 antibodies, [[Imatinib]] and KRAS-pathway drugs all trace back to this mechanism.

> [!warning] Clinical caveat
> Resistance is the dominant clinical problem, and it is mechanistically predictable rather than mysterious. In EGFR-mutant lung cancer the standard sequence is: primary kinase-domain mutation → on-target resistance (T790M gatekeeper, then C797S) → off-target bypass (MET amplification, HER2 loss, histological transformation to small-cell or squamous). The same logic applies to [[BRAF]]-mutant melanoma under BRAF inhibitors. The genuine difficulty is heterogeneity: resistance is often polyclonal, so a drug that works on the dominant clone leaves a resistant one behind.

> [!info] Ageing context
> RTK signalling is downstream of the nutrient-sensing pathways the vault studies elsewhere: [[IGF-Akt Signaling|IGF-1/Akt]] acts through the insulin receptor family, and reducing it is a converging strategy across [[Caloric Restriction|caloric restriction]], [[Fasting]] and [[mTOR]] inhibition. Acute injury responses (liver regeneration after partial hepatectomy) are also largely driven by EGFR and HGF/c-Met signalling.

## Documents
- [[Growth Factor]]
  - The vault's inbound link from the ligand side; supplies the pan-family framing that this note complements with the receptor-side mechanism.
- [[BIG1]]
  - The vault's inbound link. BIG1 (a [[P300|CBP/p300]] coactivator-related chromatin factor in a lysine acetylation context) is noted here as an example of a node where signalling output and chromatin state are coupled, which is the endpoint that RTK autophosphorylation acts on.

## Connections

- [[Growth Factor]] — the ligand class. Almost every growth factor note in the vault ([[EGF]], [[FGF]], [[VEGF]], [[PDGF]], [[TGFβ]], [[HGF]]) points back here, since the receptor is where the growth factor's signal enters the cell.
- [[Receptor Tyrosine Kinases]] — the parent class note; this note is the growth-factor-facing view of the same biology.
- [[EGFR]] — the founding and best-characterised member (Ullrich & Schlessinger, 1990) and the one on which the dimerisation-autophosphorylation model was built.
- [[Kinase]] and [[Tyrosine Kinase]] — the catalytic domain and its chemistry; RTK activity is a kinase activity, and ATP-competitive inhibition is the shared drug mechanism.
- [[PI3K-Akt Signaling]] and [[ERK Signaling]] — the two dominant downstream outputs, and the two arms most often co-activated in tumours.
- [[PTEN]] — the principal negative regulator of the PI3K arm; PTEN loss and RTK activation are functionally equivalent oncogenic events.
- [[SHP2]] and [[MDM2]] — phosphatase and ubiquitin-ligase brakes on the pathway; SHP2 is itself an oncogenic driver in leukaemia when mutated, and MDM2 ubiquitinates activated receptors for endocytic turnover. Their loss prolongs signalling without any change in receptor sequence.
- [[Insulin Receptor]] and [[IGF1R]] — pre-dimeric members of the class whose activation mechanism differs from the monomeric consensus.
- [[HSC70]] — the Hsp90 chaperone cycle that stabilises RTK kinase domains (e.g. [[HER2]]) is why the whole Hsp90 inhibitor class works at all, and it links this note to the chaperone notes.
- [[Angiogenesis]] — VEGF receptor signalling on endothelium is the most therapeutically exploited growth factor receptor axis in the vault.

## Linking Summary
- New links added: [[Receptor Tyrosine Kinases]], [[EGFR]], [[Kinase]], [[Tyrosine Kinase]], [[PI3K-Akt Signaling]], [[ERK Signaling]], [[PTEN]], [[SHP2]], [[MDM2]], [[Insulin Receptor]], [[IGF1R]], [[TGF-beta Receptor]], [[Calcium Signaling]], [[Angiogenesis]], [[Hsp90]], [[JAK2]], [[Leptin Signaling]]
- Suggested notes to create: [[EGF]], [[PDGF]], [[VEGFR]], [[c-Met]], [[HGF]], [[SH2 Domain]], [[PTB Domain]], [[Grb2]], [[SHC]], [[SOS]], [[Cbl]], [[Endosomal Signalling]], [[Receptor Downregulation]], [[Neuregulin]]
- Strong connections to strengthen: [[Growth Factor Receptor]] ↔ [[EGFR]], [[Growth Factor Receptor]] ↔ [[Hsp90]], [[Growth Factor Receptor]] ↔ [[PI3K-Akt Signaling]]
