---
type: entity
category: enzyme
aliases:
  - "NOX"
  - "NADPH oxidase complex"
  - "NOX family"
tags:
  - "oxidative_stress"
  - "superoxide"
  - "immune_system"
created: 2026-05-09
updated: 2026-07-04
---

# NADPH Oxidase

## Definition
NADPH oxidase (NOX) is a family of membrane-bound enzyme complexes whose primary physiological function is the deliberate production of [[notes/_link/Reactive Oxygen Species]] (ROS), specifically [[Superoxide Radicals]].

## Biological Role
- **Function:** Catalyzes the transfer of electrons from NADPH to molecular oxygen to form superoxide.
- **Isoforms:** Includes NOX1 through NOX5 and the dual oxidases (DUOX1/2).
- **Immunity:** NOX2 (gp91phox) is essential for the "respiratory burst" in phagocytes to kill bacteria.
- **Signaling:** Produces low levels of ROS for intracellular signaling cascades.

## Impact on Health
- **Oxidative Stress:** Overactivity is a major driver of tissue damage in [[notes/_link/Cardiovascular Disease]], [[notes/_link/Diabetes Mellitus]], and neurodegenerative disorders.
- **Inflammation:** ROS produced by NOX enzymes activate pro-inflammatory transcription factors like [[NF-kappa B]].

## Structural Organization and Catalytic Mechanism
All NOX isoforms share a conserved catalytic core: the **NOX (gp91phox)** transmembrane subunit, which contains six transmembrane α-helices, two heme groups (coordinated by four histidine residues in helices III and V), and a cytoplasmic C-terminal NADPH- and FAD-binding domain. The electron transfer proceeds in a linear chain: NADPH → FAD → heme1 (inner) → heme2 (outer) → O₂ on the extracellular/luminal side, producing superoxide. The overall reaction is: $NADPH + 2O_2 \rightarrow NADP^+ + 2O_2^{\bullet-} + H^+$.

The phagocyte NOX2 system requires the assembly of multiple cytosolic subunits for activation: **p47phox** (organizer), **p67phox** (activator), **p40phox**, and the small GTPase **Rac1/2** (Rac2 in neutrophils, Rac1 in other cell types). Upon stimulation (by bacterial peptides, phorbol esters, or pro-inflammatory cytokines such as [[TNF-alpha]] and [[IL-1b]]), p47phox becomes phosphorylated by [[Protein Kinase C]] (PKC), triggering translocation of the entire cytosolic complex to the membrane, where it docks with the transmembrane flavocytochrome b₅₅₈ (p22phox + gp91phox). This assembly is required for electron flow; in its absence, the enzyme is catalytically silent.

## Isoform Diversity and Tissue Distribution
| Isoform | Primary Tissue Expression | Key Features |
|---------|-------------------------|--------------|
| NOX1 | Colon, vascular smooth muscle, prostate | Activators: NOXA1, NOXO1; Rac1-dependent |
| **NOX2** | **Phagocytes** ([[notes/_link/Neutrophils]], [[notes/_link/Macrophage|macrophages]]), microglia, endothelial cells | Classical gp91phox; requires p47phox/p67phox/Rac2 |
| NOX3 | Inner ear (vestibular and cochlear) | Required for otolith formation; hearing loss in null mice |
| **NOX4** | **Kidney**, vascular endothelium, fibroblasts, liver | Constitutively active; produces primarily $H_2O_2$ not superoxide; no need for cytosolic subunits |
| NOX5 | Lymphoid tissues, testis, vascular endothelium | Contains N-terminal Ca²⁺-binding EF-hand domains; activated by calcium |
| DUOX1/2 | Thyroid, lung airway epithelium, salivary glands | Peroxidase homology domain; produce $H_2O_2$ for [[Notes/Thyroid Hormone]] synthesis (DUOX2) |
NOX4 is unique among the family in that it is constitutively active and generates [[notes/_link/Hydrogen Peroxide]] directly rather than superoxide, likely through a rapid intramolecular dismutation or a two-electron reduction mechanism. NOX4 is predominantly intracellular, localized to the [[notes/_link/Endoplasmic Reticulum]] and [[notes/_link/Nucleus]], where it functions in cell differentiation, senescence, and insulin signaling rather than host defense.

## Physiological Roles Beyond Host Defense
Beyond the well-established role of NOX2 in innate immunity, NOX-derived ROS serve essential signaling functions:

- **Vascular tone regulation**: NOX1 and NOX4 in vascular smooth muscle and [[notes/_link/Endothelial Cells]] modulate [[notes/_link/Nitric Oxide]] bioavailability, [[Hypoxia]]-inducible factor (HIF) stabilization, and vascular remodeling. NOX4-derived $H_2O_2$ acts as a physiological vasodilator (endothelium-derived hyperpolarizing factor, EDHF) in some vascular beds.
- **Cellular differentiation**: NOX4 is upregulated during differentiation of [[notes/_link/Fibroblasts]] to myofibroblasts and is required for TGF-β1-induced differentiation.
- **[[notes/_link/Angiogenesis]]**: NOX-derived ROS activate [[notes/_link/VEGF]] signaling and endothelial tube formation.
- **[[notes/_link/Spermatogenesis]]**: DUOX enzymes support the oxidative maturation of spermatozoa in the epididymis.

## Pathological Implications and Therapeutic Targeting
NOX overactivation contributes to the pathogenesis of multiple diseases through sustained ROS production that overwhelms local [[notes/_link/Antioxidants]] defenses:

- **[[notes/_link/Cardiovascular Disease]]**: NOX1, NOX2, and NOX4 are upregulated in [[notes/_link/Atherosclerosis|atherosclerotic]] vessels. NOX2 in infiltrating [[notes/_link/Macrophage|macrophages]] drives [[notes/_link/Lipid Peroxidation]] and [[notes/_link/Oxidized LDL]] formation. NOX4, despite its $H_2O_2$ production, may have a protective role in maintaining vascular function.
- **[[notes/_link/Hypertension]]**: Angiotensin II (via AT₁ receptor) potently activates NOX1 in vascular smooth muscle, and NOX2 in the [[notes/_link/Renal Cortex|kidney]] and [[notes/_link/Brain]]; NOX-deficient mice are protected from angiotensin II-induced hypertension.
- **[[notes/_link/Ischemia-reperfusion Injury]]**: NOX2 in [[notes/_link/Neutrophils]] produces a burst of superoxide upon reperfusion, contributing to tissue destruction in [[notes/_link/Myocardial Infarction]] and [[notes/_link/Stroke]].
- **[[notes/_link/Neurodegeneration]]**: NOX2 activation in [[notes/_link/Microglia]] drives sustained neuroinflammation and neuronal injury in [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], and [[notes/_link/Amyotrophic Lateral Sclerosis]].
- **[[Cancer]]**: NOX1 and NOX4 are frequently overexpressed in [[notes/_link/Colorectal Cancer]], [[notes/_link/Breast Cancer]], and [[notes/_link/Melanoma]], promoting proliferation, migration, and [[notes/_link/Angiogenesis]]. NOX4-derived $H_2O_2$ has also been implicated in [[notes/_link/Ferroptosis]] and [[notes/_link/Apoptosis]] resistance.

Pharmacological inhibitors of NOX enzymes include **diphenyleneiodonium** (DPI, non-selective), **apocynin** (reported NOX inhibitor, though its specificity is controversial), and more selective second-generation compounds such as **GSK2795039** (NOX2-selective) and **GKT137831** (NOX1/4 dual inhibitor), which is in clinical trials for [[notes/_link/Diabetic Nephropathy]] and [[notes/_link/Idiopathic Pulmonary Fibrosis]].

## Connections
- [[Superoxide Radicals]]: The primary product (except NOX4).
- [[notes/_link/Hydrogen Peroxide]]: NOX4 primarily produces $H_2O_2$.
- [[NF-kappa B]]: Often activated by NOX-derived ROS.
- [[notes/_link/Respiratory Burst]]: NOX2 is the catalytic engine of the phagocyte respiratory burst.
- [[notes/_link/Inflammation]]: NOX-derived ROS are central mediators of inflammatory signaling.

### Linking Summary:
- New links added: [[notes/_link/Reactive Oxygen Species]], [[Superoxide Radicals]], [[notes/_link/Cardiovascular Disease]], [[notes/_link/Diabetes Mellitus]], [[NF-kappa B]], [[notes/_link/Hydrogen Peroxide]]
- Suggested new entity notes to create: [[notes/_link/Respiratory Burst]], [[NOX2]], [[NOX4]]
- Strong connections to strengthen: [[NADPH Oxidase]] ↔ [[Superoxide Radicals]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[TNF-alpha]], [[IL-1b]], [[notes/_link/Neutrophils]], [[notes/_link/Macrophage]], [[notes/_link/Atherosclerosis]], [[notes/_link/Hypertension]], [[notes/_link/Ischemia-reperfusion Injury]], [[notes/_link/Neurodegeneration]], [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], [[notes/_link/Amyotrophic Lateral Sclerosis]], [[Cancer]], [[notes/_link/Colorectal Cancer]], [[notes/_link/Breast Cancer]], [[notes/_link/Ferroptosis]], [[notes/_link/Apoptosis]], [[notes/_link/Angiogenesis]], [[notes/_link/Inflammation]], [[notes/_link/Respiratory Burst]], [[notes/_link/Lipid Peroxidation]], [[notes/_link/Antioxidants]], [[notes/_link/Nitric Oxide]]
- Suggested new entity notes to create: [[GKT137831]], [[GSK2795039]], [[Apocynin]], [[Rac GTPase]], [[p47phox]], [[Flavocytochrome b558]]
