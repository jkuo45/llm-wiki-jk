---
type: entity
category: metabolite
aliases:
  - "superoxide"
  - "O₂•⁻"
  - "O2-"
tags:
  - "oxidative_stress"
  - "ros"
  - "mitochondria"
created: 2026-05-09
updated: 2026-07-04
---

# Superoxide Radicals

## Definition
Superoxide radicals ($O_2^{\bullet-}$) are reactive oxygen species (ROS) formed by the addition of a single electron to molecular oxygen ($O_2$). They are the "primary" ROS that often trigger the formation of other, more reactive species.

## Biological Role
- **Source:** Primarily generated as a byproduct of the [[notes/_link/Mitochondria|mitochondrial]] electron transport chain (Complex I and III) and by specialized enzymes like [[NADPH Oxidase]] and [[Xanthine Oxidase]].
- **Immune System:** Essential for the "oxidative burst" in phagocytes used to destroy pathogens.
- **Signaling:** Acts as a signaling molecule at low concentrations.

## Impact and Toxicity
- **Protein Damage:** Directly targets iron-sulfur (Fe-S) centers in proteins (e.g., aconitase), releasing free iron.
- **Cascade Trigger:** Reacts with other molecules to form [[notes/_link/Hydrogen Peroxide]], [[Hydroxyl Radicals]], and [[Peroxynitrite]].

## Generation Mechanisms and Kinetics
Mitochondrial superoxide production occurs predominantly at Complex I (NADH:ubiquinone oxidoreductase) during reverse electron transport and at Complex III (ubiquinol:cytochrome c oxidoreductase) via semiquinone autoxidation. Under physiological conditions, ~1–3% of consumed O₂ escapes as superoxide, though this fraction increases under [[notes/_link/Hypoxia]] or with respiratory chain impairment. Extramitochondrial sources include [[NADPH Oxidase]] (NOX1–5 and DUOX1/2), which actively produces superoxide rather than releasing it as a byproduct; [[Xanthine Oxidase]] during purine catabolism; and the [[notes/_link/Monoamine oxidase]]-dependent catabolism of biogenic amines, which generates [[notes/_link/Hydrogen Peroxide]] as a secondary product.

The spontaneous and enzymatic dismutation of superoxide proceeds at different rates depending on pH. At neutral pH, the non-enzymatic rate constant is ~2 × 10⁵ M⁻¹s⁻¹, but [[notes/_link/Superoxide Dismutase]] (SOD) accelerates this to ~2 × 10⁹ M⁻¹s⁻¹ — a diffusion-limited rate. Three SOD isoforms exist: cytosolic CuZnSOD (SOD1), mitochondrial MnSOD (SOD2), and extracellular CuZnSOD (SOD3). The product of all dismutation reactions is [[notes/_link/Hydrogen Peroxide]] ($H_2O_2$), which must be further detoxified by [[Catalase]] or [[Glutathione Peroxidase]].

## Reaction with Metal Centers and Other Radicals
Superoxide exhibits a particular affinity for iron-sulfur ([4Fe-4S]) cluster-containing dehydratases such as aconitase (in the [[notes/_link/Mitochondria|mitochondrial]] tricarboxylic acid cycle) and fumarase. Oxidation of the cluster releases Fe²⁺, inactivating the enzyme and simultaneously providing catalytic iron for the [[Fenton reaction]]. This feed-forward loop amplifies [[notes/_link/Hydroxyl Radicals]] production. The near-diffusion-limited reaction ($k \approx 6.7 \times 10^9$ M⁻¹s⁻¹) between superoxide and [[notes/_link/Nitric Oxide]] generates [[Peroxynitrite]] (ONOO⁻), a potent nitrating and oxidizing species that mediates much of the cytotoxicity associated with nitric oxide overproduction. Superoxide also reduces cytochrome c (Fe³⁺ → Fe²⁺), a reaction that can modulate [[notes/_link/Apoptosis]] signaling through the mitochondrial permeability transition pore.

## Clinical and Pathological Significance
Superoxide overproduction is a central pathogenic mechanism in [[notes/_link/Ischemia-reperfusion Injury]], where the abrupt reintroduction of oxygen upon reperfusion triggers a burst of superoxide from damaged [[notes/_link/Mitochondria]] and [[Xanthine Oxidase]] in endothelial cells. In [[notes/_link/Cardiovascular Disease]], NOX-derived superoxide in the vascular wall consumes [[notes/_link/Nitric Oxide]] (a process termed "NO sink"), impairing endothelium-dependent vasodilation and promoting [[notes/_link/Atherosclerosis]]. In [[notes/_link/Neurodegenerative Diseases]] such as [[notes/_link/Amyotrophic Lateral Sclerosis]], mutations in SOD1 cause a toxic gain-of-function that enhances superoxide production and protein aggregation within motor neurons. The [[notes/_link/Respiratory Burst]] of [[notes/_link/Neutrophils]] and [[notes/_link/Macrophage|macrophages]], driven by NOX2 (gp91phox), is indispensable for innate immunity; genetic defects in any of the NOX2 subunits cause chronic granulomatous disease, characterized by recurrent, life-threatening infections.

## Connections
- [[notes/oxidative_stress/Oxidative Stress]]: Acts as a major initiator.
- [[notes/_link/Superoxide Dismutase]]: The primary enzyme responsible for neutralizing superoxide.
- [[notes/_link/Nitric Oxide]]: Reacts nearly instantly to form [[Peroxynitrite]].
- [[notes/_link/Apoptosis]]: Superoxide-mediated cytochrome c release can trigger the intrinsic apoptotic cascade.
- [[notes/_link/Hypoxia]]: Hypoxic conditions alter superoxide generation kinetics at Complex III.

### Linking Summary:
- New links added: [[notes/_link/Mitochondria]], [[NADPH Oxidase]], [[Xanthine Oxidase]], [[notes/_link/Hydrogen Peroxide]], [[Hydroxyl Radicals]], [[Peroxynitrite]], [[notes/oxidative_stress/Oxidative Stress]], [[notes/_link/Superoxide Dismutase]], [[notes/_link/Nitric Oxide]]
- Suggested new entity notes to create: [[Iron-Sulfur Clusters]], [[Oxidative Burst]]
- Strong connections to strengthen: [[Superoxide Radicals]] ↔ [[notes/_link/Superoxide Dismutase]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[notes/_link/Hypoxia]], [[notes/_link/Monoamine oxidase]], [[Catalase]], [[Glutathione Peroxidase]], [[notes/_link/Apoptosis]], [[notes/_link/Ischemia-reperfusion Injury]], [[notes/_link/Cardiovascular Disease]], [[notes/_link/Atherosclerosis]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Amyotrophic Lateral Sclerosis]], [[notes/_link/Neutrophils]], [[notes/_link/Macrophage]], [[notes/_link/Respiratory Burst]], [[notes/_link/Mitochondrial Dysfunction]], [[Fenton reaction]]
- Suggested new entity notes to create: [[Aconitase]], [[Chronic Granulomatous Disease]], [[NOX2]]
