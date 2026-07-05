---
type: entity
category: metabolite
aliases:
  - "•OH"
  - "hydroxyl radical"
  - "OH radical"
tags:
  - "oxidative_stress"
  - "ros"
  - "dna_damage"
created: 2026-05-09
updated: 2026-07-04
---

# Hydroxyl Radicals

## Definition
Hydroxyl radicals ($\bullet OH$) are the most reactive and destructive species among all reactive oxygen species (ROS) in biological systems. They have a very short half-life and react instantly with almost any biological molecule they encounter.

## Biological Role
- **Source:** Primarily formed from [[notes/_link/Hydrogen Peroxide]] through the Fenton reaction (in the presence of $Fe^{2+}$ or $Cu^+$) or the Haber-Weiss reaction (interaction between [[Superoxide Radicals]] and [[notes/_link/Hydrogen Peroxide]]).
- **Beneficial Role:** None known; they are considered purely detrimental agents of damage.

## Impact and Toxicity
- **DNA Damage:** Causes direct strand breaks and base modifications (e.g., formation of [[8-oxo-2'-deoxyguanosine]]).
- **Lipid Peroxidation:** Initiates radical chain reactions that destroy cell membranes.
- **Protein Carbonylation:** Causes irreversible oxidative modifications to proteins, leading to loss of function.

## Fenton Chemistry and Site-Specific Generation
The Fenton reaction ($Fe^{2+} + H_2O_2 \rightarrow Fe^{3+} + \bullet OH + OH^-$) is the predominant source of hydroxyl radicals in biological systems. The reaction requires catalytic transition metals in their reduced form, typically Fe²⁺ or Cu⁺. Under physiological conditions, "free" iron is maintained at extremely low concentrations through sequestration by ferritin, transferrin, and heme proteins. However, under [[Oxidative Stress]], [[Superoxide Radicals]] can mobilize iron from ferritin and from damaged iron-sulfur clusters (e.g., in aconitase), providing the catalytic iron pool needed for sustained [[Fenton reaction]] activity. This creates a vicious cycle: superoxide releases iron, iron drives hydroxyl radical formation, and hydroxyl radicals damage additional iron-sulfur proteins, releasing yet more iron.

The Haber-Weiss reaction ($O_2^{\bullet-} + H_2O_2 \rightarrow \bullet OH + OH^- + O_2$) is thermodynamically feasible but kinetically negligible at physiological pH in the absence of iron catalysis; it is effectively the sum of the Fenton reaction (iron-catalyzed) coupled to superoxide-mediated iron reduction ($Fe^{3+} + O_2^{\bullet-} \rightarrow Fe^{2+} + O_2$). Thus, both pathways converge on iron-dependent chemistry, making transition metal availability the rate-limiting determinant of hydroxyl radical formation in vivo.

Because hydroxyl radicals react at diffusion-limited rates ($k \approx 10^9$–$10^{10}$ M⁻¹s⁻¹), they damage molecules within a radius of only ~1–2 nm from their site of generation. This "site-specific" damage means that iron-binding molecules — including [[DNA]] (histone-associated iron), membrane phospholipids (iron associated with headgroups), and proteins with metal-binding motifs — are preferential targets. DNA-bound iron, for instance, generates hydroxyl radicals that produce predominantly local lesions including 8-oxodG (see [[8-oxo-2'-deoxyguanosine]]), 8-hydroxyadenine, and strand breaks, rather than diffusing through the nucleus.

## DNA Damage and Mutagenesis
Hydroxyl radicals attack both the deoxyribose backbone and purine/pyrimidine bases. Hydrogen abstraction from the C4' position of deoxyribose produces a carbon-centered sugar radical that leads to single-strand breaks. Attack on guanine at C8 generates 8-oxodG, which mismatches with adenine during replication, causing G→T transversions — a mutational signature found in [[notes/_link/p53]] mutations in lung, breast, and colorectal cancers. Hydroxyl radicals also produce thymine glycol, 5-hydroxycytosine, and 8-hydroxyadenine, each with distinct miscoding properties. The [[notes/_link/DNA Repair]] enzyme [[OGG1]] (8-oxoguanine glycosylase) excises 8-oxodG via the base excision repair (BER) pathway; polymorphisms in OGG1 are associated with elevated cancer risk. When repair capacity is overwhelmed, accumulated hydroxyl radical-induced lesions drive [[notes/_link/Genomic Instability]], a hallmark of [[Cancer]] and [[notes/_link/Aging]].

## Clinical and Pathological Significance
Hydroxyl radicals are implicated in the pathogenesis of [[notes/_link/Ischemia-reperfusion Injury]], where reintroduction of O₂ after hypoxia provides [[notes/_link/Hydrogen Peroxide]] that reacts with the elevated pool of cytosolic Fe²⁺ liberated from damaged [[notes/_link/Mitochondria]] and degraded ferritin. In [[notes/_link/Neurodegenerative Diseases]], iron accumulation in the [[notes/_link/Substantia Nigra]] (in [[notes/_link/Parkinson's Disease]]) and in senile plaques (in [[notes/_link/Alzheimer's Disease]]) provides local catalysts for hydroxyl radical generation, contributing to neuronal loss. Chelation therapy with deferoxamine or the more brain-permeable deferiprone is under investigation as a strategy to limit hydroxyl radical-mediated neurotoxicity. In [[notes/_link/Atherosclerosis]], iron deposition within the arterial wall promotes LDL oxidation via hydroxyl radicals, accelerating plaque progression. The extreme reactivity of hydroxyl radicals makes direct scavenging impractical; therapeutic strategies therefore focus on upstream prevention — reducing [[notes/_link/Hydrogen Peroxide]] via [[Catalase]] and [[Glutathione Peroxidase]], sequestering transition metals, and limiting [[Superoxide Radicals]] production at its [[notes/_link/Mitochondria|mitochondrial]] and enzymatic sources.

## Connections
- [[Oxidative Stress]]: The terminal and most harmful mediator of oxidative damage.
- [[notes/_link/Hydrogen Peroxide]]: The primary precursor via transition metal catalysis.
- [[notes/_link/Antioxidants]]: Hard to neutralize directly due to their extreme reactivity; defense relies on preventing their formation (e.g., via [[Catalase]] or metal sequestration).
- [[notes/_link/Genomic Instability]]: Hydroxyl radical-induced DNA damage is a direct driver of genomic mutations.
- [[notes/_link/p53]]: Frequently mutated at guanine residues susceptible to hydroxyl radical attack.

### Linking Summary:
- New links added: [[notes/_link/Hydrogen Peroxide]], [[Superoxide Radicals]], [[8-oxo-2'-deoxyguanosine]], [[Oxidative Stress]], [[notes/_link/Antioxidants]], [[Catalase]]
- Suggested new entity notes to create: [[Fenton Reaction]], [[Haber-Weiss Reaction]], [[Lipid Peroxidation]]
- Strong connections to strengthen: [[Hydroxyl Radicals]] ↔ [[notes/_link/Hydrogen Peroxide]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[Fenton reaction]], [[DNA]], [[notes/_link/DNA Repair]], [[notes/_link/Genomic Instability]], [[Cancer]], [[notes/_link/Aging]], [[notes/_link/p53]], [[notes/_link/Ischemia-reperfusion Injury]], [[notes/_link/Mitochondria]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Parkinson's Disease]], [[notes/_link/Alzheimer's Disease]], [[notes/_link/Substantia Nigra]], [[notes/_link/Atherosclerosis]], [[Glutathione Peroxidase]], [[notes/_link/Mitochondrial Dysfunction]]
- Suggested new entity notes to create: [[OGG1]], [[Base Excision Repair]], [[8-Hydroxyadenine]], [[Thymine Glycol]]
