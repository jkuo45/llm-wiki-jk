---
type: entity
category: "metabolite"
aliases:

tags:
  - "oxidative_stress"
  - "cell_membrane"
  - "lipid_peroxidation"
created: 2026-05-09
updated: 2026-07-04
---

# Lipids

## Definition
Lipids are a diverse group of organic compounds that are insoluble in water but soluble in organic solvents. They include fats, oils, waxes, and certain vitamins. In a biological context, they are essential components of [[Cell membranes]] and serve as energy storage molecules.

## Role in Oxidative Stress
Lipids are highly susceptible to [[notes/oxidative_stress/Oxidative Stress]], particularly those containing polyunsaturated fatty acids. This process, known as [[Lipid Peroxidation]], involves a free radical chain reaction that leads to the degradation of [[Cell membranes]] and the formation of toxic by-products like [[Malondialdehyde]] (MDA).

## Connections
- [[notes/oxidative_stress/Oxidative Stress]]: Lipids are one of the primary targets of ROS-induced damage.
- [[Lipid Peroxidation]]: The specific chemical process of lipid degradation by free radicals.
- [[notes/_link/Atherosclerosis]]: Oxidation of lipids (specifically LDL) is a key trigger for plaque formation.

### Linking Summary:
- New links added: [[Cell membranes]], [[notes/oxidative_stress/Oxidative Stress]], [[Lipid Peroxidation]], [[Malondialdehyde]], [[notes/_link/Atherosclerosis]]
- Suggested new entity notes to create: [[Cell membranes]]
- Strong connections to strengthen: [[Lipids]] ↔ [[Lipid Peroxidation]]

## Detailed Lipid Peroxidation Cascade

### Initiation, Propagation, and Termination
[[notes/oxidative_stress/Lipid Peroxidation]] proceeds through a classical free radical chain reaction. **Initiation**: A ROS species — most often [[notes/oxidative_stress/Hydroxyl Radicals|•OH]] or [[Peroxynitrite]] (ONOO⁻) — abstracts a bis-allylic hydrogen atom from a polyunsaturated fatty acid (PUFA), generating a carbon-centered lipid radical (L•). **Propagation**: L• reacts rapidly with O₂ to form a [[lipid peroxyl radical]] (LOO•), which abstracts hydrogen from adjacent PUFAs, perpetuating the chain. A single initiation event can oxidize hundreds of fatty acid molecules. **Termination**: Radical–radical recombination or chain-breaking antioxidants such as [[notes/_link/Vitamin E]] (α-tocopherol) and [[Coenzyme Q10]] (ubiquinol) donate a hydrogen atom to LOO•, yielding a stable lipid hydroperoxide (LOOH) and a non-reactive antioxidant radical.

### Major End-Products and Biomarkers
* **F₂-Isoprostanes** — Prostaglandin-like compounds formed by non-enzymatic peroxidation of [[arachidonic acid]]. 8-Iso-PGF₂α (8-isoprostane) is the gold-standard biomarker of [[notes/oxidative_stress/Oxidative Stress]] in vivo, measurable in plasma, urine, and exhaled breath condensate.
* **[[notes/oxidative_stress/Malondialdehyde]] (MDA)** — A three-carbon dialdehyde generated from peroxidation of PUFAs containing ≥3 double bonds. MDA reacts with [[DNA]] bases (forming M₁dG adducts) and protein lysine residues, forming advanced lipoxidation end-products (ALEs).
* **[[4-Hydroxynonenal]] (4-HNE)** — A highly reactive α,β-unsaturated aldehyde derived from ω-6 PUFA peroxidation. 4-HNE forms Michael adducts with cysteine, histidine, and lysine residues, modifying protein structure and function at low micromolar concentrations.
* **Acrolein** — The simplest unsaturated aldehyde, generated from peroxidation of ω-3 and ω-6 PUFAs; a potent electrophile that depletes [[notes/_link/Glutathione]] and forms protein carbonyls.

### Enzymatic Lipid Oxidation: ALOX, COX, and CYP Pathways
In addition to non-enzymatic oxidation, [[Lipoxygenase]]s (ALOX15, ALOX5) and [[Cyclooxygenase]]s ([[COX-1]], [[COX-2]]) catalyze stereospecific lipid peroxidation as part of physiological signaling. [[ALOX15]] oxygenates [[notes/oxidative_stress/Linoleic acid]] to 13-HODE and arachidonic acid to 15-HETE. During [[notes/_link/Inflammation]], COX-2 generates prostanoids (PGE₂, PGD₂, TXA₂), while ALOX5 produces [[leukotrienes]] (LTB₄, LTC₄). [[Cytochrome P450]] (CYP) epoxygenases generate [[epoxyeicosatrienoic acids]] (EETs), which are anti-inflammatory and vasodilatory. Overlap between enzymatic and non-enzymatic pathways complicates attribution of specific oxidized lipids to oxidative stress versus inflammatory signaling.

### Physiological Versus Pathological Lipid Peroxidation
At low levels, lipid peroxidation products serve as signaling molecules. 4-HNE at sub-µM concentrations activates [[Nrf2]] (via Keap1 alkylation), inducing an adaptive antioxidant response through [[notes/oxidative_stress/ARE|antioxidant response element (ARE)]]-driven genes ([[notes/oxidative_stress/Glutathione Peroxidase|GPX2]], [[NQO1]], [[notes/oxidative_stress/HO-1|Heme oxygenase-1]], [[notes/oxidative_stress/Catalase]]). At high concentrations, 4-HNE (>10 µM) triggers [[notes/_link/Apoptosis]] through [[JNK]] activation, [[cytochrome c]] release, and [[caspase-3]] cleavage. The duality of lipid peroxidation — hormetic signaling versus cytotoxicity — depends on the magnitude and duration of the oxidative insult.

### Ferroptosis: Iron-Dependent Lipid Peroxidation Cell Death
[[Ferroptosis]] is a non-apoptotic form of cell death driven by iron-dependent [[notes/oxidative_stress/Lipid Peroxidation]], specifically the accumulation of [[phosphatidylethanolamine]] hydroperoxides (PE-OOH) containing [[arachidonic acid]] (C20:4) or [[adrenic acid]] (C22:4). The process is negatively regulated by [[GPX4]] ([[notes/oxidative_stress/Glutathione Peroxidase 4]]), which directly reduces phospholipid hydroperoxides, and [[FSP1]] (ferroptosis suppressor protein 1), which generates [[Coenzyme Q10|ubiquinol]] to trap lipid radicals. Ferroptosis is implicated in [[ischemia-reperfusion injury]], [[notes/oxidative_stress/Neurodegeneration|neurodegeneration]], and cancer therapy, linking [[notes/oxidative_stress/Lipids]] directly to [[notes/_link/Reactive Oxygen Species]]-dependent cell fate decisions.

## Linking Summary (New Additions)
- New links added: [[notes/oxidative_stress/Hydroxyl Radicals]], [[Peroxynitrite]], [[notes/_link/Vitamin E]], [[notes/oxidative_stress/Coenzyme Q10]], [[notes/oxidative_stress/Malondialdehyde]], [[notes/oxidative_stress/Malondialdehyde]], [[4-Hydroxynonenal]], [[notes/_link/Glutathione]], [[notes/oxidative_stress/Glutathione Peroxidase]], [[notes/oxidative_stress/Catalase]], [[notes/_link/Apoptosis]], [[notes/oxidative_stress/Neurodegeneration]], [[notes/_link/Reactive Oxygen Species]], [[notes/_link/Atherosclerosis]], [[notes/_link/Inflammation]]
- Suggested new entity notes to create: [[Ferroptosis]], [[Isoprostanes]], [[GPX4]], [[FSP1]], [[Lipoxygenase]], [[Cyclooxygenase]], [[Leukotrienes]], [[Nrf2]], [[NQO1]], [[Heme oxygenase-1]], [[Acrolein]], [[Arachidonic acid]]
- Strong connections to strengthen: [[Lipids]] ↔ [[Ferroptosis]], [[Lipids]] ↔ [[notes/_link/Glutathione]], [[Lipids]] ↔ [[notes/_link/Vitamin E]]
