---
title: VDAC
description: 'VDAC (voltage-dependent anion channel, mitochondrial porin) is a family of ~280-residue 19-stranded beta-barrel outer mitochondrial membrane proteins that form a general diffusion pore for metabolites. Human VDAC1 is the dominant isoform and acts as a metabolic checkpoint, a Ca2+ handling gate, a component of the permeability transition pore complex, and a PINK1-Parkin substrate in mitophagy.'
protected: true
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - ion-channel
  - mitochondrial-membrane
  - metabolism
  - apoptosis
aliases: [Voltage-Dependent Anion Channel, mitochondrial porin, Porin, VDAC1, VDAC2, VDAC3, eukporin]

---

# VDAC

**VDAC** (voltage-dependent anion channel; "mitochondrial porin"; Pfam PF01459) is a family of outer mitochondrial membrane **β-barrel porins** that form the main aqueous conduit between the intermembrane space and the cytosol. Mammals express three isoforms — **VDAC1, VDAC2, VDAC3** — and VDAC1 is by far the dominant.

> [!warning]
> **Ambiguity: family vs. isoform.** The name "VDAC" denotes both the protein family and, in most experimental usage, VDAC1 specifically. Almost every mechanistic claim below is a **VDAC1** claim; VDAC2 and VDAC3 are less abundant, less well characterised, and behave differently (VDAC3 in particular is uniquely redox-regulated and is more discriminating for anions than VDAC1). Claims about "VDAC" that are not isoform-specific should be read as VDAC1 claims.

A second ambiguity: whether VDAC exists in the **plasma membrane** as well as the mitochondrial outer membrane remains **genuinely debated**. UniProt annotates both; the plasma-membrane/maxi-anion-channel literature is contested. Mitochondrial localisation is not in question.

## Structure

- **~280 residues**, forming a **19-stranded anti-parallel β-barrel** spanning the outer membrane. The odd strand count and the long, unusually short β-strands make VDAC a structurally distinctive outer-membrane class.
- **E73** — a negatively charged side chain oriented toward the hydrophobic membrane — is a key residue, uniquely placed for proton transfer and redox sensing.
- The **helical N-terminus** folds back into the pore mouth and is the principal determinant of voltage-gated behaviour.
- Three independent 3D structures were solved in 2008 by NMR and by X-ray crystallography (mouse and human VDAC1; PDB 1XNA-family era and 3LQC/2W3O/3K75/5E6Q); all agreed on the 19-stranded architecture. A 2010 analysis confirmed these represent a biologically relevant native conformation rather than a crystallographic artefact.
- **Oligomerisation.** VDAC1 forms homodimers and homotrimers. Oligomerisation is required for scramblase activity and has been proposed as the mechanism by which a large enough pore opens for [[Cytochrome c]] to pass.

## Mechanism

> [!info]
> **Voltage gating.** VDAC is open at low or zero membrane potential and closes above **30–40 mV**. Crucially, both states pass simple salts; the difference is in **organic anions**, the category into which most metabolites fall. The open state is anion-selective with high metabolite conductance; the closed state becomes cation-selective with limited metabolite passage. So "closing" VDAC is not about ions in the electrophysiological sense — it is metabolic starvation by an ion-channel-like device.

Voltage sensing involves several [[Lysine]] residues and **Glu152**; the coupling between voltage and conformational change is not fully resolved. The classical model (Colombini, Blachly-Dyson & Forte) holds that closing removes a large section of the protein from the pore, reducing effective pore radius. Activity is **inhibited by [[Nitric Oxide]]**.

**Phospholipid scramblase.** VDAC1 also catalyses phospholipid scrambling across the outer membrane — translocating both anionic and zwitterionic lipids — and this function is mechanistically **unrelated** to channel activity. Oligomerisation is required. This is a second, non-channel function of the same protein.

## Metabolic function

VDAC is best understood as a **metabolic checkpoint controller**, because the choice of which metabolite leaves the intermembrane space determines which pathway runs in the cytosol.

- **Substrates:** ATP, ADP, pyruvate, malate, and other metabolites — so VDAC communicates extensively with cytosolic and mitochondrial metabolic enzymes.
- **Hexokinase binding.** Cytosolic hexokinase (HK1, HK2) and glucokinase bind VDAC, positioning glycolysis at the mouth of the channel. Creatine kinase does the same on the matrix side. This **HK–VDAC complex** is the classical coupling of [[Glycolysis]] to [[Oxidative Phosphorylation]].
- **Warburg effect.** The HK1–VDAC interaction is the mechanistic basis of the 1974 Warburg observation that tumour cells run glycolysis even under normoxia: hexokinase-driven glycolytic flux requires VDAC, so VDAC overexpression is a common feature of the transformed metabolic phenotype.
- **Calcium.** VDAC is a major regulator of Ca²⁺ flux into and out of mitochondria. Because Ca²⁺ is a cofactor for pyruvate dehydrogenase and isocitrate dehydrogenase, VDAC permeability sets both energy production and metabolic homeostasis.

> [!info]
> **The MAM junction.** VDAC1 is part of an HSPA9 (GRP75)–IP3R1–VDAC1 complex at ER–mitochondria contact sites ([Mitochondria-Associated Membranes|MAMs]]) that transfers Ca²⁺ from the ER lumen to the intermembrane space, delivering it to the [[MCU]]. SIRT3 protects neurons from hyperglycaemia-induced Ca²⁺ overload by inhibiting exactly this VDAC1/GRP75/IP3R complex. This is the clearest example of VDAC as a signalling platform rather than a pore.

## Role in regulated cell death

VDAC sits at the intersection of three death mechanisms:

1. **Apoptosis.** VDAC mediates [[Cytochrome c]] efflux. It forms a functional unit with the Bcl-2 family: **[[BAX]]** interacts directly with VDAC to increase pore size and promote cytochrome c release, whereas anti-apoptotic Bcl-xL produces the opposite effect (Shimizu et al., *Nature* 1999). Anti-VDAC antibodies interfere with Bax-mediated release. Because oligomerisation may create the permissive pore, VDAC is an attractive target for chemotherapeutic development — though it is *not* an essential component of the [[Mitochondrial Permeability Transition Pore|mPTP]].
2. **Permeability transition.** VDAC is a component of the mPTP complex (with SPG7/Afg3L2 and PPIF/cyclophilin D) and interacts with [[Cyclophilin D]]. Note the caveat: VDAC *may participate* in PTP formation, but it is not required for it.
3. **Ferroptosis.** Erastin acts on VDACs as well as [[System Xc-|System Xc⁻]], and RAS–RAF–MEK-driven oxidative death involving VDACs (Yagoda et al., *Nature* 2007) is a canonical non-apoptotic route to mitochondrial dysfunction.

**Post-translational control.**
- **Parkin.** In depolarised mitochondria VDAC1 acts downstream of [[PINK1]] and [[Parkin]]: polyubiquitination by Parkin promotes [[Mitophagy]], while **monoubiquitination decreases mitochondrial Ca²⁺ influx and thereby inhibits apoptosis**. [[USP30]] deubiquitinates VDAC1. This makes VDAC1 the meeting point of the mitophagy and apoptosis decisions.
- **NEK1 phosphorylation at Ser193** drives the *closed* conformation, limiting permeability and preventing apoptotic death after injury.
- **AKT–GSK3B** phosphorylation stabilises VDAC1, probably by blocking ubiquitin-mediated proteasomal degradation.
- Binds ceramide, phosphatidylcholine, [[Cholesterol]] and oxysterols; interacts with amyloid-β and APP.

## Clinical relevance

- **Neurodegeneration.** Pharmacological inhibition of mPTP or VDAC1 mitigates neurodegeneration in TDP-43 proteinopathy models by preventing cytosolic [[mtDNA]] escape and the resulting [[STING]]-driven microglial senescence. Note the model-dependence: mPTP inhibition does not reduce cytosolic mtDNA in a neuronal line carrying a distinct TDP-43 mutation, so the route to mtDNA release is trigger- and cell-type-specific.
- **MAM calcium overload.** Hyperglycaemia-driven VDAC1/GRP75/IP3R activation underlies hippocampal neuronal apoptosis and cognitive deficits in diabetes.
- **Cancer.** VDAC1 overexpression supports glycolytic flux and survival; it is a candidate metabolic target, and BCL2L1 and BAK1 both act *through* VDAC1.
- **Ischemia.** NEK1-mediated VDAC1 closure is protective after injury, one of the few cases where closing VDAC is the therapeutic direction.
- **Diagnostic use.** VDAC1 is a standard Western-blot loading control, which is a genuine confound in the literature: many published "unchanged VDAC1" claims are loading-control artefacts rather than measurements.

## Documents

- [[_document_ - Ferroptosis past present and future]] — erastin's second target is VDACs, inducing mitochondrial dysfunction; and the RAS–RAF–MEK-dependent oxidative cell death route involving VDACs.
- [[_document_ - s41514-026-00424-3_reference_mitophagy_neuroprotection]] — Parkin ubiquitinates outer-membrane proteins including VDAC1 to tag mitochondria for autophagic clearance.
- [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation]] — VDAC1 opening is one route by which TDP-43 gains access to mitochondria, driving oxidative stress, mPTP/VDAC1 opening and mtDNA escape; VDAC1 inhibition mitigates neurodegeneration.
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases]] — SIRT3 protects hippocampal neurons from hyperglycaemia-induced apoptosis by inhibiting the VDAC1/GRP75/IP3R complex and reducing MAM formation.
- [[_document_ - Parthanatos Andrabi 2008 mitochondrial nuclear crosstalk]] — treats VDAC as an open mechanistic candidate in permeability transition, alongside ANT and cyclophilin D.

## Connections

- [[PINK1]] and [[Parkin]] — the mitophagy axis that ubiquitinates VDAC1; polyubiquitination triggers clearance, monoubiquitination blocks apoptosis by limiting Ca²⁺ entry, so VDAC1 ubiquitin state encodes the mitophagy-vs-apoptosis decision.
- [[Cytochrome c]] — VDAC1 mediates its efflux; the release step that commits a cell to caspase-dependent death.
- [[BAX]] — the pro-apoptotic Bcl-2 family member that acts by binding VDAC1 and enlarging the pore; Bcl-xL opposes this.
- [[Mitochondrial Permeability Transition Pore]] — VDAC1 is a component of the mPTP complex but is not required for pore function, which is the standard caveat in every mPTP discussion.
- [[Mitochondria-Associated Membranes]] — the HSPA9/GRP75–IP3R1–VDAC1 complex at ER–mitochondria contacts is the route by which cytosolic Ca²⁺ reaches [[MCU]], and is the node SIRT3 acts on.
- [[SIRT3]] — protects neurons by inhibiting the VDAC1/GRP75/IP3R complex; a direct link between a mitochondrial deacetylase and Ca²⁺-dependent cell death.
- [[Hexokinase-1]] — the glycolytic enzyme that docks to VDAC to couple [[Glycolysis]] to [[Oxidative Phosphorylation]]; the Warburg effect depends on this interaction.
- [[Warburg Effect]] — VDAC overexpression and the HK–VDAC complex are the mechanistic substrate of aerobic glycolysis in cancer.
- [[mtDNA]] and [[STING]] — VDAC1 opening is a route for mitochondrial DNA to reach the cytosol, where it activates the [[cGAS-STING Pathway]] and drives microglial senescence.
- [[Ferroptosis]] — erastin targets VDACs alongside System Xc⁻; RAS–RAF–MEK-driven VDAC-dependent oxidative death is a canonical ferroptosis-adjacent mechanism.
- [[Translocase of the Outer Mitochondrial Membrane]] — VDAC and TOM40 form one evolutionarily related β-barrel family of outer membrane proteins, the two components of the import and export machinery of the same membrane.

## Linking Summary
- New links added: [[PINK1]], [[Parkin]], [[USP30]], [[Cytochrome c]], [[BAX]], [[Bcl-2]], [[Mitochondrial Permeability Transition Pore]], [[Cyclophilin D]], [[Mitochondria-Associated Membranes]], [[MCU]], [[SIRT3]], [[Hexokinase-1]], [[Glucokinase]], [[Creatine Kinase]], [[Warburg Effect]], [[Glycolysis]], [[Oxidative Phosphorylation]], [[mtDNA]], [[STING]], [[Ferroptosis]], [[System Xc-]], [[Nitric Oxide]], [[Cholesterol]], [[Translocase of the Outer Mitochondrial Membrane]], [[Mitochondrial outer membrane permeabilization]]
- Suggested notes to create: [[VDAC Family]], [[Porin]], [[VDAC2]], [[VDAC3]], [[Phospholipid Scramblase]], [[NEK1]], [[Maxi-Anion Channel]], [[SPG7]], [[IP3R1]], [[E73]]
- Strong connections to strengthen: [[VDAC]] ↔ [[Parkin]] ↔ [[PINK1]] ↔ [[USP30]]; [[VDAC]] ↔ [[BAX]] ↔ [[Cytochrome c]] ↔ [[Apoptosis]]; [[VDAC]] ↔ [[SIRT3]] ↔ [[Mitochondria-Associated Membranes]] ↔ [[MCU]]