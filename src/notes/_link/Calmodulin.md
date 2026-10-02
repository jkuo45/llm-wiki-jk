---
title: Calmodulin
description: "Calmodulin is a 148-residue four-EF-hand Ca2+ sensor that, on calcium binding, exposes a hydrophobic surface and activates hundreds of targets including CaM kinases, calcineurin, and NOS, making it the cell's most-used calcium decoder."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - calcium-signaling
  - signal-transduction
aliases: [CaM, Calmodulin (CaM), CALM1, CALM2, CALM3]
---

# Calmodulin

**Overview:** Calmodulin (CaM) is one of the most abundant and most conserved proteins in eukaryotes. At 148 amino acids (~16.7 kDa) it is a **Ca²⁺ sensor** with four EF-hands. On binding calcium it undergoes a conformational opening that exposes a hydrophobic binding surface, allowing it to engage several hundred different target proteins. CaM is the paradigm of **promiscuous, conformation-driven signalling**: the calcium signal carries no information of its own, and specificity comes entirely from the target.

## Structure and domains

- **Two globular lobes** — an N-terminal lobe (residues 1–77) and a C-terminal lobe (residues 81–148), each containing **two EF-hands**, joined by a central α-helix (residues 65–92) that in the crystal structure is extended but remains largely **disordered in solution**. The two lobes are independent domains; proteolysis separates them and each retains calcium binding.
- **Four EF-hands** — 29-residue helix-loop-helix motifs. EF-hands 1 and 2 (N-lobe) bind Ca²⁺ with lower affinity (~10<sup>−7</sup>–10<sup>−6</sup> M) than EF-hands 3 and 4 (C-lobe, ~10<sup>−7</sup> M), so the **N-lobe acts as the initial sensor at low calcium** and the C-lobe completes the response at higher calcium.
- **Ca²⁺-dependent conformational states** — in the apo state the EF-hand helices are collapsed in a compact arrangement; in the Ca²⁺-saturated state each lobe opens so the helices lie roughly perpendicular to one another, converting the protein from a compact dumbbell into an elongated, flexible molecule that presents hydrophobic patches.

> [!warning] CaM is a family of three near-identical genes
> *CALM1*, *CALM2*, and *CALM3* encode proteins differing by a few residues and are often not distinguished in the literature. CaM is also essentially identical across vertebrates and has no close paralog with a distinct function — which is why CaM note papers rarely exist.

## Mechanism and target diversity

CaM's ability to activate so many targets with high selectivity rests on **induced fit and target-driven conformational selection**, not on a canonical sequence motif:

1. **Ca²⁺ binding opens the lobes**, removing the inhibitory intra-lobe interactions and exposing hydrophobic surface.
2. **Target binding wraps CaM around the peptide.** Many targets bind a single globular lobe; others bind both lobes, forcing CaM into a characteristic **"dumbbell", "L-shaped", or "encapsulated" (fully wrapped) topology**. The wrapped conformation is unusual because it buries most of CaM's surface, including its own regulatory residues.
3. **Post-translational modulation.** CaM is itself phosphorylated by *CaM kinases* (which it activates), myosin light chain kinase (MLCK), and casein kinase II; phosphorylation lowers the affinity of some targets and blocks others. CaM can also be *n*-myristoylated, acetylated, and subject to poly-ADP-ribosylation.

**Key target classes:**

| Target | What CaM does |
| --- | --- |
| [[CaMKII]] and other CaM kinases | Binds the regulatory segment, displacing a pseudosubstrate/autoinhibitory helix to activate the kinase |
| Adenylate cyclase (bacterial CaM-dependent isoforms) and PDEs | Modulate cyclic nucleotide production |
| Calcineurin (PP2B) | Activates the Ca²⁺/CaM-dependent Ser/Thr phosphatase; the key route from calcium to T-cell activation |
| [[Nitric Oxide Synthase]] (eNOS/nNOS/iNOS) | Binds and activates; couples calcium to NO production |
| MLCK | Activates smooth-muscle contraction |
| [[Ryanodine Receptor]] (RyR), IP₃R, channels | Modulate calcium release and excitability |
| Tubulin, MAP2, cytoskeletal proteins | Regulate [[Microtubule|microtubule]] dynamics |
| Hsp90, enzymes (hexokinase, adenylyl cyclase) | Metabolic and chaperone control |

Calmodulin is structurally homologous to **troponin C** in muscle, but troponin C carries an extra N-terminal helix and is constitutively bound to troponin I, which is why it has a much narrower target repertoire.

## Physiological role

CaM transduces essentially all [[Calcium Signaling|calcium signals]] in eukaryotes — from fertilization and muscle contraction to synaptic plasticity, cell division, [[Metabolism|metabolism]], and secretion. Its ubiquity and small size make it a useful **calcium biosensor** in imaging experiments (e.g. FRET-based CaM sensors such as CaM- and CaMKK-coupled reporters).

> [!warning] Calmodulin itself is rarely mutated in disease
> Unlike its downstream targets, CaM is essentially invariant across mammals, and human disease is not caused by CaM mutation. Pathological relevance is almost always **indirect**: excessive or inappropriate CaM activation, altered CaM expression in tumours, or the well-documented requirement for CaM/CaMKII in [[Metastasis|invasion and metastasis]]. Human CALM mutations have been reported in a small number of cases of congenital heart disease and in autism-spectrum and neurodevelopmental phenotypes, with inconsistent evidence — treat these associations as uncertain.

## Clinical relevance

- **Cancer.** CaM levels and CaMKII/CaM-dependent signalling are elevated in many tumours and drive proliferation, migration, and metastasis. CaMKK2 (CaMKKβ) is a drug target, and CaMKK2 inhibitors have entered trials.
- **Cardiovascular disease.** CaM-dependent signalling mediates vascular smooth-muscle contraction, cardiac excitation–contraction coupling, and β-adrenergic inotropy; CaMKII over-activity contributes to pathological hypertrophy.
- **Neurodegeneration and aging.** CaM-dependent processes decline with age: synaptic CaM/CaMKII signalling weakens, and CaM-dependent trafficking and long-term potentiation are impaired. Age-related loss of CaM-regulated [[Mitochondrial Biogenesis]] programmes is one proposed route to the aging phenotype.
- **Reproductive biology.** CaM participates in sperm capacitation and the acrosome reaction.

## Documents

- [[_document_ - Sirtuins Guardians of Mammalian Healthspan|Sirtuins: Guardians of Mammalian Healthspan]] — CaMKKβ, a Ca²⁺/calmodulin-dependent kinase kinase, phosphorylates and stabilises [[SIRT1]] in endothelial cells under atheroprotective shear stress; loss of CaMKKβ or SIRT1 increases lesions on an [[ApoE]]-deficient background.
- [[_document_ - sirtuins (resveratrol), gemini|Sirtuins (resveratrol), gemini]] — the exercise/hormesis pathway: cytoplasmic Ca²⁺ rise activates the calmodulin-dependent kinase kinase [[CaMKKβ]], which then activates [[AMPK]].
- [[_document_ - From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery|From the regulatory mechanism of TFEB to its therapeutic implications]] — calcineurin, a calmodulin-dependent Ser/Thr phosphatase, dephosphorylates [[TFEB]] to regulate lysosomal biogenesis and autophagic flux.
- [[_document_ - 2018_Oliveira_POS-conditioning-hormesis_Front-Physiol|Preconditioning, hormesis, and oxidative stress (2018)]] — cites the redox regulation of the calcium/calmodulin-dependent protein kinases as a shared mechanism across dormancy-inducing stresses.

## Connections
- [[Calcium Signaling]] — CaM is the principal intracellular calcium decoder; Ca²⁺/CaM is the canonical second-messenger complex.
- [[CaMKII]] — the best-studied CaM target; Ca²⁺/CaM binding releases the kinase's autoinhibitory pseudosubstrate helix.
- [[CaMKKβ]] — CaM kinase kinase β phosphorylates [[SIRT1]] in endothelium and activates [[AMPK]] after exercise; it is the best-characterised route from Ca²⁺/CaM signalling to the sirtuin and AMPK networks.
- [[PKA]] — shares the cAMP second-messenger network with CaM and cooperates in many physiological responses.
- [[Nitric Oxide Synthase]] — CaM activates the NOS isoforms, linking calcium to NO signalling.
- [[Neuron]] and [[Synaptic plasticity]] — neuronal CaM/CaMKII signalling underlies activity-dependent plasticity and memory.
- [[Metabolism]] — CaM binds and regulates key metabolic enzymes including hexokinase and adenylyl cyclase.
- [[ApoE]] — the ApoE-deficient mouse background is the standard atherosclerosis model in which CaMKKβ/SIRT1 effects were tested.
- [[SIRT1]] — a direct downstream target of CaM-dependent kinase signalling in endothelium, providing a calcium→sirtuin route.
- [[Cell Cycle]] — CaM activates CaM kinases that feed into the CDK/Rb machinery during cell-cycle progression.
- [[Microtubule]] — CaM regulates tubulin polymerisation and microtubule-associated proteins during mitosis and neurite outgrowth.
- [[Apoptosis]] — CaM-dependent kinases regulate pro-apoptotic signalling, and Ca²⁺/CaM activity can oppose or promote apoptosis depending on context.

## Linking Summary
- New links added: [[Metastasis]]
- Suggested notes to create: [[EF-Hand]], [[EF-Hand Protein]], [[MLCK]], [[Troponin C]], [[CaMKK2]], [[Induced Conformational Change]], [[FRET]], [[CALM1]], [[Connexin]] calcineurin
- Strong connections to strengthen: [[Calmodulin]] ↔ [[Calcium Signaling]], [[Calmodulin]] ↔ [[CaMKII]], [[Calmodulin]] ↔ [[SIRT1]], [[Calmodulin]] ↔ [[ApoE]]
