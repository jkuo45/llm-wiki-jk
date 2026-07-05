---
type: entity
category: chemical_process
aliases:
  - "LPO"
tags:
  - "oxidative_stress"
  - "cell_membrane"
  - "free_radicals"
created: 2026-05-09
updated: 2026-07-04
---

# Lipid Peroxidation
Lipid peroxidation is the process in which free radicals "steal" electrons from the lipids in [[Cell membranes]], resulting in cell damage. It leads to the formation of reactive products like [[Malondialdehyde]] and is a hallmark of [[Oxidative Stress]]. Antioxidants like [[notes/_link/Vitamin E]] are essential for inhibiting this process.

## Initiation, Propagation, and Termination
Lipid peroxidation proceeds through three classical free radical chain reaction phases: initiation, propagation, and termination.

**Initiation** occurs when a reactive radical species (most notably [[Hydroxyl Radicals]] (•OH), [[Peroxynitrite]] (ONOO⁻), or a ferryl–oxygen complex) abstracts a hydrogen atom from a bis-allylic methylene group ($-\text{CH}_2-$) in a polyunsaturated fatty acid (PUFA). This hydrogen abstraction is energetically favorable because the resulting carbon-centered radical (L•) is resonance-stabilized by the adjacent double bonds. PUFAs such as linoleic acid (18:2), arachidonic acid (20:4), and docosahexaenoic acid (22:6) are particularly susceptible due to their multiple bis-allylic positions. The rate of initiation is determined by both the number of bis-allylic hydrogens and the strength of the attacking radical.

**Propagation** is a rapid, self-sustaining cycle. The lipid alkyl radical (L•) reacts with molecular oxygen ($O_2$) at near-diffusion-limited rates ($k \approx 10^8$ M⁻¹s⁻¹) to form a lipid peroxyl radical (LOO•). The peroxyl radical is sufficiently reactive to abstract a hydrogen atom from an adjacent PUFA, generating a lipid hydroperoxide (LOOH) and a new alkyl radical that continues the chain. Each initiating event can thus produce dozens to hundreds of oxidized lipid molecules before chain termination occurs. The lipid hydroperoxides themselves are unstable and can undergo transition metal-catalyzed decomposition via the [[Fenton reaction]] (LOOH + Fe²⁺ → LO• + OH⁻ + Fe³⁺), generating alkoxyl radicals (LO•) that propagate new chains — a branching reaction that amplifies damage exponentially.

**Termination** occurs when two radical species combine to form non-radical products: L• + L• → L–L, L• + LOO• → LOOL, or 2 LOO• → LOOL + O₂ (Russell mechanism). Chain-breaking [[notes/_link/Antioxidants]] such as [[notes/_link/Vitamin E]] (α-tocopherol) intercept peroxyl radicals at rate constants of $k \approx 10^6$ M⁻¹s⁻¹, donating a hydrogen atom to form a relatively stable tocopheroxyl radical that does not propagate. [[notes/_link/Ascorbic Acid]] (vitamin C) regenerates α-tocopherol from its radical form at the membrane–water interface, exemplifying the synergistic interaction between lipophilic and hydrophilic antioxidants.

## Major Products and Downstream Reactivity
The primary products of lipid peroxidation are **lipid hydroperoxides** (LOOH), which are relatively stable but can decompose into a wide array of secondary products. Among the most pathologically relevant are:

- **[[Malondialdehyde]] (MDA)**: A three-carbon dialdehyde formed from the cyclization and fragmentation of PUFAs with ≥3 double bonds, particularly arachidonic acid and docosahexaenoic acid. MDA is a genotoxic electrophile that forms adducts with [[DNA]] (primarily dG residues, generating M₁dG lesions) and proteins (lysine, histidine, and arginine side chains).
- **4-Hydroxynonenal (4-HNE)**: A highly reactive α,β-unsaturated aldehyde produced specifically from n-6 PUFAs (arachidonic acid, linoleic acid). 4-HNE is a weak acid ($pK_a$ ~4.7) that forms covalent adducts with proteins via Michael addition to cysteine, histidine, and lysine residues, and can be detoxified by [[notes/_link/Glutathione]]-S-transferases (GST) and aldehyde dehydrogenases (ALDH). 4-HNE is also a signaling molecule at low concentrations, activating the [[notes/_link/NRF2]]/ARE cytoprotective pathway.
- **Acrolein**: The simplest and most reactive unsaturated aldehyde, formed from PUFA peroxidation and polyamine metabolism. Acrolein has the highest electrophilicity among lipid peroxidation products, rapidly depleting glutathione and forming protein adducts that impair proteasomal function.
- **Isoprostanes**: Prostaglandin-like compounds formed non-enzymatically by free radical-catalyzed peroxidation of arachidonic acid. F₂-isoprostanes (e.g., 8-iso-PGF₂α) are widely considered the most reliable biomarkers of endogenous [[Oxidative Stress]] in vivo.

## Physiological and Pathological Consequences
Lipid peroxidation compromises membrane integrity in several ways. The introduction of polar hydroperoxide groups into the hydrophobic core of the bilayer increases membrane fluidity, ion permeability, and the tendency toward fusion or fission. In [[notes/_link/Mitochondria]], cardiolipin peroxidation (mediated by [[notes/_link/Reactive Oxygen Species]] generated at Complex III) facilitates cytochrome c release and [[notes/_link/Apoptosis]] initiation. Loss of membrane barrier function in the [[notes/_link/Plasma Membrane]] leads to calcium influx, activation of [[notes/_link/Calpain]] proteases, and eventual necrotic cell death.

In [[notes/_link/Atherosclerosis]], the oxidative modification of LDL (oxLDL) by lipid peroxidation products is a initiating event: oxLDL is taken up unregulated by [[notes/_link/Macrophage|macrophage]] scavenger receptors (SR-A, CD36), forming foam cells that accumulate in the arterial intima. 4-HNE-modified proteins are abundant in human atherosclerotic lesions and stimulate pro-inflammatory signaling through [[notes/_link/NFKB]] activation. In [[notes/_link/Neurodegenerative Diseases]], elevated levels of 4-HNE and MDA have been detected in the cerebrospinal fluid and brain tissue of patients with [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], and [[notes/_link/Amyotrophic Lateral Sclerosis]], suggesting that lipid peroxidation contributes to neuronal dysfunction and death. 4-HNE adduction of the glutamate transporter GLT-1 (EAAT2) in astrocytes impairs glutamate clearance, leading to excitotoxicity, a convergent pathway in multiple neurodegenerative conditions.

## Connections
- [[notes/_link/Vitamin E]]: Crucial chain-breaking antioxidant in lipid phases.
- [[Malondialdehyde]]: A key reactive aldehyde product and biomarker.
- [[Oxidative Stress]]: The pathological condition under which lipid peroxidation escalates.
- [[notes/_link/Atherosclerosis]]: oxLDL formation via lipid peroxidation is a core pathogenic mechanism.
- [[notes/_link/Ferroptosis]]: A form of regulated cell death driven by iron-dependent lipid peroxidation.

### Linking Summary
- New links added: [[Malondialdehyde]], [[notes/_link/Vitamin E]], [[Oxidative Stress]], [[Cell membranes]]
- Suggested new entity notes to create: [[Free radicals]], [[Membrane damage]]
- Strong connections to strengthen: [[Lipid Peroxidation]] ↔ [[notes/_link/Vitamin E]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[Hydroxyl Radicals]], [[Peroxynitrite]], [[Fenton reaction]], [[notes/_link/Antioxidants]], [[notes/_link/Ascorbic Acid]], [[DNA]], [[notes/_link/Glutathione]], [[notes/_link/NRF2]], [[notes/_link/Mitochondria]], [[notes/_link/Apoptosis]], [[notes/_link/Macrophage]], [[CD36 Receptor]], [[notes/_link/NFKB]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], [[notes/_link/Amyotrophic Lateral Sclerosis]], [[notes/_link/Ferroptosis]], [[notes/_link/Inflammation]], [[notes/_link/Cardiovascular Disease]]
- Suggested new entity notes to create: [[4-Hydroxynonenal]], [[Isoprostanes]], [[Acrolein]], [[Oxidized LDL]], [[Calpain]]
