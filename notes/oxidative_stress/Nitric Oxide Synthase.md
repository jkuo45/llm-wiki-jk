---
type: entity
category: enzyme
aliases:
  - "NOS"
  - "NO synthase"
tags:
  - "oxidative_stress"
  - "nitric_oxide"
  - "vasodilation"
created: 2026-05-09
updated: 2026-07-04
---

# Nitric Oxide Synthase
Nitric oxide synthases (NOSs) are a family of enzymes catalyzing the production of [[notes/_link/Nitric Oxide]] (NO) from [[L-arginine]]. They play a vital role in vascular tone and neurotransmission, and their dysfunction is often associated with [[Endothelial Dysfunction]].

## Linking Summary
- New links added: [[notes/_link/Nitric Oxide]], [[L-arginine]], [[Endothelial Dysfunction]]
- Suggested new entity notes to create: [[NOS isoforms]], [[eNOS]], [[iNOS]]
- Strong connections to strengthen: [[Nitric Oxide Synthase]] ↔ [[notes/_link/Nitric Oxide]]

## Isoforms and Tissue Distribution

Three distinct NOS isoforms, encoded by separate genes, differ in regulation, tissue expression, and physiological roles:

### Neuronal NOS (nNOS, NOS1)
- **Gene**: NOS1 (chromosome 12q24.22)
- **Expression**: Central and peripheral neurons, skeletal muscle, kidney macula densa
- **Regulation**: Calcium/calmodulin-dependent; activated by [[notes/_link/NMDA receptor]] stimulation and calcium influx
- **Function**: [[Neurotransmission]], [[notes/_link/Long-term potentiation]] (LTP), regulation of cerebral blood flow; NO from nNOS acts as a [[notes/_link/Non-coding RNA|retrograde messenger]]

### Inducible NOS (iNOS, NOS2)
- **Gene**: NOS2 (chromosome 17q11.2-q12)
- **Expression**: [[notes/_link/Macrophage|Macrophages]], [[notes/_link/Neutrophils]], hepatocytes, vascular smooth muscle, endothelial cells (induced)
- **Regulation**: Transcriptionally regulated by [[NF-kappa B]], [[TNF-alpha]], [[IL-1b]], and [[notes/_link/LPS]]; calcium-independent once expressed
- **Function**: High-output NO production for [[Innate Immunity|innate immune defense]]; sustained NO at nanomolar–micromolar levels mediates [[notes/_link/Macrophage]] killing of pathogens

### Endothelial NOS (eNOS, NOS3)
- **Gene**: NOS3 (chromosome 7q36.1)
- **Expression**: Vascular endothelium, cardiac myocytes, platelets, [[Hippocampus|hippocampal neurons]]
- **Regulation**: Calcium/calmodulin-dependent; activated by [[Shear Stress]], [[VEGF]], [[notes/_link/Bradykinin]], [[notes/_link/Estrogen]]; regulated by [[notes/_link/Akt]]-mediated phosphorylation at Ser1177 and [[notes/_link/PP2A]]-mediated dephosphorylation
- **Function**: [[notes/_link/Vasodilation]], inhibition of [[Platelet aggregation]], maintenance of vascular barrier function, regulation of [[Angiogenesis]]

## Domain Structure and Cofactor Requirements

All NOS isoforms are homodimeric flavo-hemoproteins. Each monomer consists of:

- **N-terminal oxygenase domain**: Binding sites for heme, [[Tetrahydrobiopterin|BH₄]], and [[L-arginine]]
- **C-terminal reductase domain**: Binding sites for [[FAD]], [[FMN]], and [[NADPH]]
- **Calmodulin-binding linker**: Connecting the two domains; CaM binding enables electron flow from reductase to oxygenase

### Key Cofactors
| Cofactor | Role | Deficiency Consequence |
|----------|------|----------------------|
| [[Tetrahydrobiopterin|BH₄]] | Stabilizes heme-dioxygen complex; facilitates L-arginine oxidation | eNOS uncoupling → O₂⁻• production |
| [[FAD]] | Accepts electrons from NADPH | Impaired electron transfer |
| [[FMN]] | Transfers electrons to heme | Impaired NO synthesis |
| [[Heme]] (Fe-protoporphyrin IX) | Binds O₂ for L-arginine hydroxylation | Complete loss of catalytic activity |
| Zinc (Zn²⁺) | Stabilizes dimer interface | Dimer dissociation and inactivation |

## eNOS Regulation and Post-Translational Modifications

eNOS activity is exquisitely controlled through:

### Phosphorylation Sites
- **Ser1177** (human eNOS): [[notes/_link/Akt]]-mediated activating phosphorylation (most critical)
- **Ser633**: [[PKA]]- and [[notes/_link/AMPK]]-mediated activation
- **Thr495**: [[notes/_link/PKC]]-mediated inhibitory phosphorylation; dephosphorylation by [[notes/_link/PP2A]] activates eNOS
- **Ser114**: [[notes/_link/p38 MAPK]]-mediated inhibitory phosphorylation under inflammatory stress

### Protein-Protein Interactions
- **[[notes/_link/Caveolin-1]]**: Binds eNOS in [[Caveolae]], maintaining it in an inactive state; calcium-calmodulin displaces caveolin
- **[[Hsp90]]**: Facilitates [[notes/_link/Akt]]-mediated eNOS activation
- **[[notes/_link/Dynamin-2]]**: Promotes eNOS internalization in endothelial cells

### Subcellular Localization
eNOS is predominantly membrane-associated at the [[Golgi apparatus]] and [[Plasma Membrane]] caveolae. Subcellular targeting determines coupling efficiency and NO output—Golgi-localized eNOS is more coupled, whereas plasma membrane eNOS may be more prone to uncoupling.

## eNOS Uncoupling: Mechanisms and Consequences

When BH₄ or L-arginine are limiting, the NOS dimer reduces O₂ instead of L-arginine, producing [[Superoxide Radicals]] rather than NO. This **eNOS uncoupling** is a central mechanism in [[Endothelial Dysfunction]]:

### Triggers for Uncoupling
1. **BH₄ oxidation**: [[Peroxynitrite]] (ONOO⁻) rapidly oxidizes BH₄ to BH₂ (k ≈ 10⁶ M⁻¹s⁻¹), which cannot support coupled NO synthesis
2. **L-arginine depletion**: Arginase upregulation (by [[TNF-alpha]] and [[IL-1b]]) and [[ADMA]] accumulation reduce substrate availability
3. **Cysteine oxidation**: [[notes/_link/Reactive Oxygen Species]] oxidize the zinc-thiolate cluster (Cys96 and Cys101) in eNOS, disrupting dimerization
4. **S-glutathionylation**: eNOS S-glutathionylation at Cys689 and Cys908 switches eNOS from NO to O₂⁻• production

### Consequences of Uncoupling
- **Loss of NO production**: Impaired vasodilation, platelet inhibition
- **Superoxide generation**: O₂⁻• scavenges any remaining NO (k ≈ 1.9 × 10¹⁰ M⁻¹s⁻¹) to form [[Peroxynitrite]]
- **Amplification cycle**: Peroxynitrite further oxidizes BH₄ and nitrates eNOS tyrosine residues, sustaining uncoupling

## iNOS and Inflammatory Nitrative Stress

iNOS produces NO at high rates (µM/min) sustained over hours to days following [[notes/_link/LPS]] or cytokine stimulation. This high-output NO interacts with [[NADPH Oxidase]]-derived superoxide to generate [[Peroxynitrite]], driving [[Nitrative Stress]]:

- **Protein tyrosine nitration**: 3-nitrotyrosine formation (biomarker of nitrative stress in [[notes/_link/Inflammation]])
- **Lipid peroxidation**: Initiation by NO₂• and ONOO⁻
- **[[notes/_link/Mitochondrial Dysfunction]]**: Inhibition of complex I and IV by ONOO⁻
- **DNA damage**: Deamination and nitration of [[Nucleic Acids|DNA bases]]

iNOS-derived NO also exerts immunosuppressive effects by inhibiting [[notes/_link/NFRB|NF-κB]] in a negative feedback loop and by modulating [[notes/_link/T cell]] function.

## Pharmacological and Therapeutic Considerations

### NOS Inhibitors
- **Non-selective**: L-NAME (Nᴳ-nitro-L-arginine methyl ester), L-NMMA
- **nNOS-selective**: 7-nitroindazole, ARL-17477
- **iNOS-selective**: 1400W, GW274150, L-NIL
- **eNOS-sparing**: Given the essential role of eNOS in vascular health

### Therapeutic Strategies
- **BH₄ supplementation**: Sepiapterin restores BH₄ levels and recouples eNOS in clinical trials for [[notes/_link/Pulmonary Hypertension]] and [[notes/_link/Diabetes Mellitus]]
- **Folic acid**: Stabilizes BH₄ binding and directly scavenges superoxide
- **L-arginine / L-citrulline**: Restoring substrate availability
- **Antioxidant recoupling**: [[Catalase]] and [[notes/_link/Superoxide Dismutase]] mimetics (e.g., [[MitoQ]]) reduce superoxide and BH₄ oxidation

### Clinical Relevance
- [[Endothelial Dysfunction]]: eNOS uncoupling is a core pathological mechanism
- [[notes/_link/Sepsis]]: iNOS overproduction causes refractory hypotension
- [[notes/_link/Stroke]]: nNOS-derived NO mediates excitotoxic neuronal death
- [[notes/_link/Atherosclerosis]]: Impaired eNOS activity accelerates plaque formation
- [[notes/_link/Parkinson's Disease]]: nNOS and iNOS contribute to dopaminergic neuron loss

### Connections
- [[NADPH Oxidase]]: Cooperative partner in ROS-RNS crosstalk
- [[Peroxynitrite]]: Principal cytotoxic product of NO-superoxide interaction
- [[Reactive Nitrogen Species]]: Broader RNS family
- [[Endothelial Dysfunction]]: Arising from NOS uncoupling
- [[ADMA]]: Endogenous NOS inhibitor
- [[Nitrative Stress]]: iNOS-driven pathology
- [[notes/_link/Akt]]: Key upstream kinase for eNOS Ser1177 phosphorylation
