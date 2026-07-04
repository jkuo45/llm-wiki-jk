---
type: entity
category: "metabolite"
aliases:
  - "¹O₂"
  - "1O2"
tags:
  - "oxidative_stress"
  - "ros"
  - "photosensitization"
created: 2026-05-09
updated: 2026-07-04
---

# Singlet Oxygen

## Definition
Singlet oxygen ($^1O_2$) is an electronically excited state of molecular oxygen. It is a highly reactive non-radical species that specifically targets molecules with double bonds.

## Biological Role
- **Source:** Produced during photosensitization (exposure to light and sensitizers), by the action of myeloperoxidase in immune cells, or during the decomposition of lipid hydroperoxides.
- **Pathology:** Involved in skin and eye damage due to UV radiation.
- **Signaling:** Plays a role in signaling, particularly in plants.

## Impact and Toxicity
- **Membrane Damage:** Reacts with double bonds in lipids (e.g., cholesterol) and amino acids (histidine, tryptophan), leading to membrane dysfunction.
- **Genotoxicity:** Can cause DNA damage, though less common than other ROS.

## Electronic Structure and Generation Pathways
Singlet oxygen exists in two excited states: the higher-energy $^1\Sigma_g^+$ state (t½ ~10⁻¹¹ s in solution) and the lower-energy $^1\Delta_g$ state (t½ ~3 μs in water, ~100 μs in non-polar solvents). The $^1\Delta_g$ state is the predominant biologically relevant species, lying 94 kJ/mol above the triplet ground state ($^3\Sigma_g^-$). Its electron configuration (π* orbital with paired spins) eliminates the spin restriction that normally prevents ground-state triplet oxygen from reacting directly with singlet biomolecules, making $^1O_2$ highly reactive toward electron-rich double bonds.

Three major generation pathways exist in biological systems. **Photosensitization** is the most well-characterized route: a photosensitizer (e.g., porphyrins, riboflavin, bilirubin, or synthetic compounds used in photodynamic therapy) absorbs light, transitions to an excited triplet state via intersystem crossing, and transfers energy directly to ground-state oxygen — a Type II photosensitization mechanism. **Enzymatic generation** occurs during the [[notes/_link/Respiratory Burst]]: [[notes/_link/Myeloperoxidase]] in [[notes/_link/Neutrophils]] produces hypochlorous acid (HOCl), which reacts with [[notes/_link/Hydrogen Peroxide]] to generate singlet oxygen via the chloroperoxidase-like reaction ($HOCl + H_2O_2 \rightarrow ^1O_2 + H_2O + HCl$). **Non-enzymatic generation** arises from the thermal decomposition of lipid hydroperoxides (ROOH) during [[Lipid Peroxidation]] and from the Russell mechanism, where two peroxyl radicals (ROO•) combine via a linear tetroxide intermediate.

## Chemical Reactivity and Molecular Targets
Singlet oxygen reacts predominantly through ene-type addition, [4+2] cycloaddition (Diels-Alder), and [2+2] cycloaddition to electron-rich double bonds. In [[Lipid Peroxidation]], $^1O_2$ directly oxidizes cholesterol primarily at the C5–C6 double bond to yield 5α-hydroperoxycholesterol, a species that inserts into membranes and disrupts bilayer fluidity. Polyunsaturated fatty acids (PUFAs) in [[Cell membranes]] undergo Type II (non-radical) photooxidation to conjugated hydroperoxides with shifted double bond configurations, initiating chain reactions that amplify oxidative membrane damage.

Among amino acids, histidine, tryptophan, methionine, cysteine, and tyrosine are the primary targets. Histidine reacts with $^1O_2$ at $k \approx 5 \times 10^7$ M⁻¹s⁻¹ to form endoperoxide intermediates that decompose to a mixture of products, including aspartic acid and urea derivatives — a reaction exploited in histidine-mediated protein photooxidation. Tryptophan oxidation yields N-formylkynurenine, a chromophore associated with cataract formation in the ocular lens. $^1O_2$ also damages guanine in [[notes/_link/DNA]] specifically at the C8 position via [4+2] cycloaddition, producing 8-oxodG (see [[8-oxo-2'-deoxyguanosine]]) as a minor product alongside spiroiminodihydantoin and guanidinohydantoin lesions that are potently mutagenic.

## Clinical and Pathological Relevance
The most direct clinical connection involving singlet oxygen is **[[Photodynamic Therapy]]** (PDT), a cancer treatment in which a photosensitizer is administered systemically or locally and activated by light of a specific wavelength within the tumor. The resulting $^1O_2$ generation causes localized tumor cell death via [[notes/_link/Apoptosis]], direct [[notes/_link/Necrosis]], and vascular shutdown. Approved photosensitizers include porfimer sodium (Photofrin™), 5-aminolevulinic acid (which induces protoporphyrin IX accumulation), and verteporfin. PDT is effective against [[notes/_link/Cancer|carcinomas]] of the skin, lung, esophagus, and bladder, with the advantage of minimal systemic toxicity due to the requirement for local light activation.

In dermatology, singlet oxygen mediates UV-induced photoaging and photocarcinogenesis. UVA radiation (320–400 nm) penetrates the dermis and generates $^1O_2$ through endogenous photosensitizers (porphyrins, flavins, melanin precursors), inducing matrix metalloproteinase (MMP) expression that degrades [[notes/_link/ECM|extracellular matrix]] [[Collagen]] and [[Elastin]]. This process, termed solar elastosis, manifests clinically as wrinkling, leathery texture, and actinic damage. Endogenous quenchers of $^1O_2$ include [[notes/_link/Vitamin E]] (α-tocopherol) at $k \approx 10^8$ M⁻¹s⁻¹ in lipid phases, [[notes/_link/Beta-carotene]] (a physical quencher, $k \approx 10^{10}$ M⁻¹s⁻¹), and [[notes/_link/Melatonin]]. [[notes/_link/Ascorbic Acid]] (vitamin C) and [[notes/_link/Uric Acid]] also contribute to aqueous-phase $^1O_2$ quenching, though their activities are lower than in lipid environments.

## Connections
- [[notes/_link/Reactive Oxygen Species]]: A member of the ROS family.
- [[Alpha-Lipoic Acid]]: Can act as a scavenger for singlet oxygen.
- [[notes/_link/Vitamin E]]: Provides protection against singlet oxygen in lipid environments.
- [[notes/_link/Myeloperoxidase]]: Key enzymatic source during the immune respiratory burst.
- [[notes/_link/Neutrophils]]: Primary immune cells that generate singlet oxygen via MPO.
- [[notes/_link/Apoptosis]]: A downstream outcome of PDT-generated singlet oxygen in tumor cells.

### Linking Summary:
- New links added: [[notes/_link/Reactive Oxygen Species]], [[Alpha-Lipoic Acid]], [[notes/_link/Vitamin E]]
- Suggested new entity notes to create: [[Photosensitization]], [[notes/_link/Myeloperoxidase]]
- Strong connections to strengthen: [[Singlet Oxygen]] ↔ [[notes/_link/Vitamin E]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[notes/_link/Myeloperoxidase]], [[notes/_link/Neutrophils]], [[notes/_link/Hydrogen Peroxide]], [[notes/_link/Respiratory Burst]], [[Lipid Peroxidation]], [[notes/_link/DNA]], [[8-oxo-2'-deoxyguanosine]], [[notes/_link/Cancer]], [[notes/_link/Apoptosis]], [[notes/_link/ECM]], [[notes/_link/Melatonin]], [[notes/_link/Ascorbic Acid]], [[notes/_link/Beta-carotene]], [[notes/_link/Uric Acid]]
- Suggested new entity notes to create: [[Photodynamic Therapy]], [[Photosensitizer]], [[Solar Elastosis]], [[Type II Photooxidation]]
