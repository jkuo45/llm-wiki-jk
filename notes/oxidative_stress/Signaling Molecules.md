---
type: entity
category: metabolite
aliases:
  - "chemical messengers"
  - "second messengers"
tags:
  - "oxidative_stress"
  - "redox_signaling"
created: 2026-05-09
updated: 2026-07-04
---

# Signaling Molecules

## Definition
Signaling molecules (or chemical messengers) are molecules that transmit information between cells or within a single cell to coordinate biological processes.

## Role in Oxidative Stress
While often viewed as harmful, low levels of [[notes/_link/Reactive Oxygen Species]] (ROS) and [[Reactive Nitrogen Species]] (RNS) function as critical signaling molecules. This process is known as **redox signaling**.

## Key Messengers
- **[[notes/_link/Hydrogen Peroxide]]**: A stable ROS that acts as a second messenger in insulin signaling and growth factor pathways.
- **[[notes/_link/Nitric Oxide]]**: A gasotransmitter involved in [[Vasodilation]] and neurotransmission.
- **[[Superoxide Radicals]]**: Can modulate the activity of [[Iron-Sulfur Clusters]] in proteins.

## Connections
- [[notes/_link/Apoptosis]]: ROS levels determine the threshold for programmed cell death.
- [[Immunity]]: ROS are used to signal the presence of pathogens.
- [[Differentiation]]: Redox state influences stem cell fate.

### Linking Summary:
- New links added: [[notes/_link/Reactive Oxygen Species]], [[Reactive Nitrogen Species]], [[notes/_link/Hydrogen Peroxide]], [[notes/_link/Nitric Oxide]], [[Vasodilation]], [[Superoxide Radicals]], [[Iron-Sulfur Clusters]], [[notes/_link/Apoptosis]], [[Immunity]], [[Differentiation]]
- Suggested new entity notes to create: [[Iron-Sulfur Clusters]], [[Vasodilation]]
- Strong connections to strengthen: [[Signaling Molecules]] ↔ [[notes/_link/Hydrogen Peroxide]]

## The Cysteine Code: Redox-Sensitive Protein Switches

The primary mechanism by which [[notes/_link/Hydrogen Peroxide|H2O2]] transduces signals is through reversible oxidation of cysteine thiols (Cys-SH) in target proteins. Specific cysteine residues are "redox-sensitive" because their local electrostatic environment lowers the thiol pKa from the typical value of ~8.5 to as low as ~4.5–5.5, making them ionized to thiolate (Cys-S−) at physiological pH. Thiolates are ~10^8-fold more reactive toward H2O2 than protonated thiols, enabling rapid and selective oxidation. The initial oxidation product is a sulfenic acid (Cys-SOH), which is unstable and either condenses with a nearby thiol to form a disulfide bond or is further oxidized to sulfinic (Cys-SO2H) or sulfonic (Cys-SO3H) acid. While sulfenylation and disulfide formation are reversible (by [[notes/_link/Thioredoxin]] and [[notes/_link/Glutathione]]/glutaredoxin systems), sulfinic and sulfonic acids are irreversible modifications that require proteolytic removal. This "cysteine redox code" — the pattern of reversible versus irreversible oxidation — determines whether the signaling event is transient (regulatory) or permanent (damage-associated). The best-characterized targets include [[Protein Tyrosine Phosphatases]] (PTP1B, SHP-2, PTEN), whose active-site cysteine (Cys-215 in PTP1B) is oxidized to sulfenic acid upon H2O2 exposure, transiently inactivating phosphatase activity and allowing tyrosine kinase signaling to proceed unchecked.

## H2O2 Diffusion and Gradients: The Peroxiporin Model

For H2O2 to act as a second messenger, it must be generated in specific cellular compartments and reach defined targets without being consumed by the abundant [[notes/_link/Glutathione]] peroxidases (GPx) and [[Catalase|peroxiredoxins]] that maintain nanomolar steady-state H2O2 levels. The discovery that specific [[Aquaporins]] (AQP3, AQP5, AQP8, and AQP11) function as "peroxiporins" — channels that facilitate H2O2 diffusion across lipid bilayers — revolutionized our understanding of compartmentalized redox signaling. AQP3 and AQP8 are localized to the [[Plasma Membrane|plasma membrane]] and [[notes/_link/Mitochondria|mitochondrial membrane]], respectively, allowing H2O2 produced by [[NADPH Oxidase]] (at the plasma membrane) or by the [[notes/_link/Mitochondria|mitochondrial electron transport chain]] to exit into the cytosol without dissolving in or damaging the lipid bilayer. This creates steep concentration gradients: H2O2 produced by NOX enzymes at the [[Phagosome|phagosomal]] or [[Plasma Membrane|plasma membrane]] can reach local concentrations of 1–10 µM near the membrane while remaining at 10–50 nM in the bulk cytosol. These gradients enable spatial specificity — a [[Receptor Tyrosine Kinase]] (e.g., the [[EGF Receptor|EGF receptor]]) activated at the plasma membrane generates a localized H2O2 signal that inactivates PTP1B near the receptor while leaving distant PTP1B molecules active.

## Protein Tyrosine Phosphatases as Primary Redox Sensors

[[Protein Tyrosine Phosphatases]] (PTPs) are among the most sensitive and best-characterized redox signaling targets. All classical PTPs contain a conserved active-site motif, HC(X)5R(S/T), where the catalytic cysteine (pKa ~4.5–5.5) functions as a nucleophile in phosphotyrosine hydrolysis. H2O2 oxidizes this cysteine to the sulfenic acid intermediate (Cys-SOH), which then rapidly forms a cyclic sulfenylamide bond with the backbone amide of the adjacent serine residue, protecting against further irreversible oxidation to sulfinic acid. This sulfenylamide is specifically reduced by the [[notes/_link/Thioredoxin]] system, restoring phosphatase activity. The transient inactivation of PTPs by H2O2 during growth factor signaling allows [[Receptor Tyrosine Kinases]] to maintain their phosphorylated active state, transmitting proliferative signals. The tumor suppressor [[PTEN]] (phosphatase and tensin homolog) — which dephosphorylates PIP3 to terminate [[PI3K]]/[[Akt]] signaling — contains an active-site cysteine (Cys-124) that is particularly sensitive to H2O2. PTEN oxidation leads to sustained [[Akt]] activation and cell survival. This PTEN oxidation is a physiological signal downstream of growth factors and insulin, but becomes pathological when chronic [[notes/oxidative_stress/Oxidative Stress]] maintains PTEN in its oxidized, inactive state, promoting unchecked [[PI3K]]/[[Akt]]/[[mTOR]] signaling and contributing to [[Cancer]] and [[notes/_link/Metabolic Syndromes|insulin resistance]].

## Nitric Oxide and cGMP Signaling

[[notes/_link/Nitric Oxide]] (NO) signals primarily through activation of soluble guanylyl cyclase (sGC), which catalyzes the conversion of GTP to cGMP. NO binds to the ferrous heme iron (Fe^2+) in sGC, forming a nitrosyl-heme complex that activates the enzyme up to 200-fold. The resulting cGMP activates [[Protein Kinase G]] (PKG), which phosphorylates targets that regulate [[Vasodilation|vascular smooth muscle relaxation]], [[Platelet Aggregation|platelet aggregation]], and [[Neurotransmission|synaptic plasticity]]. NO also signals through [[S-nitrosylation]] — the covalent addition of NO to cysteine thiols forming S-nitrosothiols (SNOs). This modification is analogous to phosphorylation and is regulated by [[denitrosylases]] such as [[Thioredoxin]] and [[S-nitrosoglutathione reductase]] (GSNOR). S-nitrosylation of [[NF-kappa B]] (at Cys-62 in p50) and [[Caspase-3]] (at Cys-163) inhibits their activity, providing anti-inflammatory and anti-apoptotic signals respectively. Aberrant S-nitrosylation contributes to [[notes/_link/Neurodegenerative Diseases]] by modifying [[Parkin]] (promoting [[Mitophagy|mitophagy]] failure), [[GAPDH]] (promoting [[notes/_link/Apoptosis|apoptotic]] cell death), and [[Protein-disulfide isomerase]] (promoting protein misfolding).

## Compartmentalized ROS Signaling Networks

Different subcellular compartments possess distinct ROS sources, sinks, and targets that allow spatially encoded signaling. In the [[notes/_link/Mitochondria|mitochondrial matrix]], [[Mitochondrial ROS|ROS]] produced at Complex I and III regulate [[HIF-1α]] stabilization, [[notes/_link/PGC-1α]] expression (retrograde signaling), and the [[Unfolded Protein Response]] (UPRmt). Mitochondrial H2O2 diffuses to the cytosol where it can oxidize [[AMPK|AMPKα]] at Cys-299/Cys-304, activating this energy sensor. In the [[Endoplasmic Reticulum]], ERO1 (ER oxidoreductin 1) generates H2O2 as a byproduct of protein disulfide bond formation, which is coupled to [[Glutathione Peroxidase 7]] (GPx7/GPx8) that eliminates excess H2O2. ER redox stress triggers the [[Unfolded Protein Response|UPR]] through PERK and IRE1α, which contain redox-sensitive cysteine residues. At the [[Plasma Membrane]], [[NADPH Oxidase]] (NOX) enzymes produce ROS into the extracellular space (NOX1–5) or into intracellular vesicles (NOX2 in phagocytes, DUOX1/2 in mucosal epithelia). The localization specificity is achieved through adaptor proteins (p47phox, NOXA1, p40phox) that assemble NOX complexes at specific membrane domains. This compartmentalization ensures that ROS signals remain exquisitely local — the "redox signalosome" concept posits that signaling ROS are generated within nanometers of their targets, creating microdomains of altered redox state without globally disrupting the cellular redox balance.

## Connections
- [[notes/_link/Thioredoxin]]: Primary system for reducing oxidized cysteine switches.
- [[notes/_link/Glutathione]]: Maintains general thiol redox buffering and participates in S-glutathionylation signaling.
- [[NOX Family|NADPH Oxidase]]: The major enzyme family producing signaling ROS.
- [[Aquaporins]] (AQP3, AQP8): Peroxiporins that channel H2O2 across membranes.
- [[PTEN]]: Redox-sensitive tumor suppressor; oxidized PTEN activates PI3K/Akt.
- [[Protein Kinase G]]: Mediates NO-cGMP signaling in vasodilation.
- [[S-nitrosylation]]: The equivalent of phosphorylation for NO signaling.
- [[notes/_link/mTOR]]: Downstream target of PI3K/Akt, activated when PTEN is oxidized.
- [[notes/_link/HIF-1α]]: Stabilized by mitochondrial ROS, linking metabolism to gene expression.
- [[Cancer]]: Dysregulated redox signaling drives proliferation, survival, and metastasis.
- [[notes/_link/Insulin]]: Insulin signaling generates H2O2 that amplifies the signaling cascade through PTP oxidation.

### Updated Linking Summary:
- New links added in this revision: [[notes/_link/Thioredoxin]], [[notes/_link/Glutathione]], [[Protein Tyrosine Phosphatases]], [[PTEN]], [[Aquaporins]], [[NADPH Oxidase]], [[notes/_link/Mitochondria]], [[Mitochondrial ROS]], [[notes/_link/HIF-1α]], [[notes/_link/PGC-1α]], [[Unfolded Protein Response]], [[AMPK]], [[notes/_link/mTOR]], [[PI3K]], [[Akt]], [[S-nitrosylation]], [[Parkin]], [[GAPDH]], [[Caspase-3]], [[Protein Kinase G]], [[Catalase]], [[Peroxiredoxins]], [[EGF Receptor]], [[Receptor Tyrosine Kinases]], [[Cancer]], [[notes/_link/Metabolic Syndromes]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Insulin]], [[notes/_link/Metabolism]], [[notes/_link/Apoptosis]]
- Suggested new entity notes to create: [[Peroxiporins]], [[Sulfenic Acid]], [[Cysteine Redox Code]], [[Sulfenylamide]], [[Denitrosylases]], [[GSNOR]], [[ERO1]], [[UPRmt]], [[Redox Signalosome]]
