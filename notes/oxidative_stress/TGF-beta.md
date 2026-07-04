---
type: entity
category: "protein"
aliases:
  - "TGF-beta"
  - "transforming growth factor beta"
tags:
  - "oxidative_stress"
  - "cytokine"
  - "fibrosis"
created: 2026-05-09
updated: 2026-07-04
---

# TGF-beta
Transforming growth factor beta (TGF-beta) is a multifunctional cytokine that plays a role in cell growth, proliferation, and differentiation. It is a key mediator of [[Fibrosis]] and is influenced by the cellular level of [[notes/oxidative_stress/Oxidative Stress]] and chronic [[notes/_link/Inflammation]].

## Linking Summary
- New links added: [[Fibrosis]], [[notes/_link/Inflammation]], [[notes/oxidative_stress/Oxidative Stress]]
- Suggested new entity notes to create: [[Fibrosis]], [[Cytokine signaling]]
- Strong connections to strengthen: [[TGF-beta]] ↔ [[Fibrosis]]

## Redox Regulation of TGF-β Signaling

### TGF-β Receptor Activation and SMAD Phosphorylation
TGF-β signals through heteromeric complexes of [[TβRII]] (type II receptor, constitutively active kinase) and [[TβRI]] (type I receptor/[[ALK5]]). Ligand binding induces TβRII to transphosphorylate TβRI, which then phosphorylates [[R-SMAD]] proteins [[SMAD2]] and [[SMAD3]] at C-terminal SSXS motifs. Phosphorylated SMAD2/3 form complexes with [[SMAD4]] (Co-SMAD) and translocate to the nucleus to regulate gene expression. [[notes/oxidative_stress/Oxidative Stress]] directly modulates this pathway: [[notes/_link/Hydrogen Peroxide]] at low concentrations enhances TGF-β receptor kinase activity by oxidizing critical cysteine residues in the regulatory domain of TβRI, potentiating SMAD phosphorylation. Conversely, high-dose ROS can inactivate [[Protein phosphatases]] (e.g., [[PP2A]], [[PP1]]) that normally dephosphorylate SMADs, prolonging TGF-β signaling.

### NOX4-Dependent ROS Generation as a TGF-β Effector
A defining feature of TGF-β signaling is its induction of [[NADPH Oxidase 4]] ([[Nox4]]), a constitutively active ROS-generating enzyme. TGF-β upregulates Nox4 transcription in [[Fibroblasts]], [[Epithelial cells]], [[Endothelial cells]], and [[Mesangial cells]] via SMAD3 binding to the [[Nox4 promoter]]. Nox4 produces predominantly [[notes/_link/Hydrogen Peroxide]] (H₂O₂) in the [[Endoplasmic reticulum]] and [[Focal adhesion]] compartments, which then acts as a second messenger to activate downstream pathways:
- **Latent TGF-β activation**: H₂O₂ oxidizes the [[latency-associated peptide]] (LAP), releasing active TGF-β from the extracellular matrix ([[ECM]]), creating a positive amplification loop.
- **ECM gene expression**: H₂O₂ activates [[RhoA]]/[[ROCK]] signaling and [[SRF]]-dependent transcription of [[α-SMA]] (smooth muscle actin), [[Collagen type I]] ([[COL1A1]]), and [[Fibronectin]].
- **Epithelial–mesenchymal transition (EMT)**: Nox4-derived H₂O₂ is required for TGF-β-induced EMT, as Nox4 knockout or pharmacological inhibition ([[GKT137831]], [[Setanaxib]]) blocks mesenchymal marker expression and cell migration.

### Mitochondrial ROS and SMAD-Independent Signaling
In addition to SMAD pathways, TGF-β signals through [[non-SMAD pathways]] including [[MAPK]] (ERK1/2, p38, JNK), [[PI3K]]/[[Akt]]/[[mTOR]], and [[Rho-like GTPase]]s. [[notes/oxidative_stress/Mitochondria|Mitochondrial]] ROS (mtROS) — generated from [[complex III]] of the electron transport chain — are required for TGF-β-mediated [[SMAD7]] downregulation, a key step that removes a negative feedback regulator and allows sustained SMAD2/3 signaling. TGF-β also suppresses [[PGC-1α]] (a master regulator of mitochondrial biogenesis) and [[PPARγ coactivator 1α|PGC-1α]]-dependent antioxidant gene expression, shifting the cellular redox balance toward a pro-oxidant state.

### TGF-β and Oxidative Stress in Fibrotic Disease
Excessive TGF-β signaling drives pathological [[Fibrosis]] in multiple organs, and [[notes/oxidative_stress/Oxidative Stress]] is a critical cofactor in this process:
* **Pulmonary fibrosis**: TGF-β-induced Nox4 expression in [[Lung fibroblasts]] is elevated in [[Idiopathic pulmonary fibrosis]] (IPF). [[Nintedanib]] and [[Pirfenidone]] — two FDA-approved IPF therapies — reduce TGF-β-driven ROS production. [[Setanaxib]] (GKT137831), a Nox1/4 inhibitor, is in clinical trials for IPF.
* **Liver fibrosis**: [[Hepatic stellate cell]] activation by TGF-β involves ROS-dependent [[JNK]] and [[NF-kappa B]] signaling. The [[Nrf2]] activator [[Bardoxolone methyl]] attenuates TGF-β-induced liver fibrosis by inducing [[notes/oxidative_stress/HO-1|HO-1]], [[notes/oxidative_stress/NQO1|NQO1]], and [[notes/oxidative_stress/Glutathione Peroxidase|GPX]].
* **Renal fibrosis**: In [[Diabetic nephropathy]], TGF-β-induced Nox4 in [[Podocytes]] and [[Mesangial cells]] causes [[notes/oxidative_stress/Extracellular matrix|ECM]] accumulation and [[proteinuria]].

### TGF-β as a Double-Edged Sword: Tumor Suppression vs. Progression
In early carcinogenesis, TGF-β acts as a [[tumor suppressor]] by inducing [[notes/oxidative_stress/Cyclin-dependent kinase inhibitors]] ([[p15]], [[p21]]) and [[notes/_link/Apoptosis]]. However, ROS-mediated inactivation of the [[PTEN]] tumor suppressor (via oxidation of its active site cysteine) and mutation of TGF-β pathway components (e.g., [[SMAD4 loss in pancreatic cancer]]) can convert TGF-β to a pro-tumorigenic factor that promotes invasion, [[Epithelial–mesenchymal transition|EMT]], and immune evasion. The redox status of the tumor microenvironment thus critically determines TGF-β's contextual effects.

## Linking Summary (New Additions)
- New links added: [[notes/_link/Hydrogen Peroxide]], [[notes/oxidative_stress/NADPH Oxidase]], [[Nox4]], [[notes/_link/Hydrogen Peroxide]], [[notes/oxidative_stress/Mitochondria]], [[notes/oxidative_stress/HO-1]], [[notes/oxidative_stress/Glutathione Peroxidase]], [[notes/oxidative_stress/Oxidative Stress]], [[notes/oxidative_stress/NF-kappa B]], [[notes/_link/Fibrosis]], [[notes/_link/Apoptosis]], [[notes/oxidative_stress/PPARγ]]
- Suggested new entity notes to create: [[Nox4]], [[SMAD2]], [[SMAD3]], [[SMAD4]], [[SMAD7]], [[ALK5]], [[Epithelial–mesenchymal transition]], [[Setanaxib]], [[Pirfenidone]], [[Nintedanib]], [[Idiopathic pulmonary fibrosis]], [[Hepatic stellate cell]], [[Diabetic nephropathy]]
- Strong connections to strengthen: [[TGF-beta]] ↔ [[Nox4]], [[TGF-beta]] ↔ [[notes/oxidative_stress/Mitochondria]], [[TGF-beta]] ↔ [[notes/_link/Fibrosis]]
