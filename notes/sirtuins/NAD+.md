---
type: entity
category: chemical
aliases:
  - NAD+
  - nicotinamide adenine dinucleotide
  - NAD
  - oxidised NAD
database_ids:
  chebi: CHEBI:15846
relations:
  - predicate: required_by
    target: "[[notes/sirtuins/SIRT1]]"
    sources:
      - PMID:10693811
  - predicate: required_by
    target: "[[Sir2 (yeast)]]"
    sources:
      - PMID:10693811
  - predicate: consumed_in
    target: "[[Sirtuin Deacetylation Reaction]]"
    sources:
      - PMID:11106374
  - predicate: sensed_by
    target: "[[Sirtuin Family]]"
    sources:
      - PMID:MICHAN2007
created: 02_July_2026 08:57 PM PDT
updated: 02_July_2026 08:57 PM PDT
---
# NAD+

**[[NAD+]]** (Nicotinamide Adenine Dinucleotide) is a critical coenzyme found in every cell in the body. It is essential for energy [[notes/_link/Metabolism]] and serves as a vital signaling molecule for various biological processes.

## Functions
*   **Energy Production**: Acts as an electron carrier in the mitochondria for ATP production.
*   **Sirtuin Activation**: Serves as a mandatory co-substrate for the **[[Sirtuins]]** family of proteins (e.g., [[notes/sirtuins/SIRT1]], [[SIRT6]]).
*   **[[notes/_link/DNA Repair]]**: Used by PARP enzymes to detect and repair DNA damage.

## NAD+ and [[notes/_link/Aging]]
NAD+ levels naturally decline with age. This decline is linked to:
*   **Mitochondrial Dysfunction**: Reduced capacity for energy production.
*   **Reduced Sirtuin Activity**: Leading to loss of epigenetic control and increased [[notes/_link/Inflammation]].
*   **Reduced Repair Capacity**: Accumulation of DNA damage.

### Linking Summary:
- New links added: [[notes/_link/Metabolism]], [[Sirtuins]], [[notes/sirtuins/SIRT1]], [[SIRT6]], [[notes/_link/DNA Repair]], [[notes/_link/Aging]], [[notes/_link/Inflammation]]
- Suggested new entity notes to create: [[NMN]], [[NR]], [[PARP Enzymes]], [[CD38]]
- Strong connections to strengthen: [[NAD+]] ↔ [[Sirtuins]], [[NAD+]] ↔ [[notes/_link/Metabolism]]

# NAD+

**NAD⁺** (nicotinamide adenine dinucleotide, oxidised form) is a fundamental coenzyme and metabolite in all living cells that serves as an **obligatory co-substrate** for all sirtuin-catalysed reactions. NAD⁺ links cellular energy status and redox state to sirtuin-mediated gene regulation, establishing sirtuins as metabolic sensors.

## Role in Sirtuin Biology

### Obligatory Co-Substrate
All sirtuins — from bacterial CobB to all seven mammalian sirtuins ([[notes/sirtuins/SIRT1]]–[[SIRT7]]) — absolutely require NAD⁺ to catalyse their reactions. The deacetylation reaction is:

> **Acetyl-Lys-protein + NAD⁺ → deacetyl-Lys-protein + [[OAADPr]] + nicotinamide**

One molecule of NAD⁺ is hydrolysed per deacetylation event. The unique by-product [[OAADPr]] (2′-*O*-acetyl-ADP-ribose) is generated alongside nicotinamide.

### Metabolic Sensing
The absolute dependence on NAD⁺ suggests that sirtuins evolved as **sensors of cellular energy and redox states** coupled to the metabolic status of the cell. As NAD⁺/NADH ratios fluctuate with metabolic activity (e.g., during fasting or caloric restriction), sirtuin activity adjusts accordingly.

### Caloric Restriction and NAD⁺
[[notes/_link/Caloric Restriction]] and fasting increase NAD⁺ levels (and/or the NAD⁺/NADH ratio), which in turn activates sirtuins — particularly [[notes/sirtuins/SIRT1]]. This provides a plausible biochemical mechanism linking dietary energy status to sirtuin-mediated longevity pathways.

### Nicotinamide Feedback Inhibition
Nicotinamide — released as a by-product of sirtuin-mediated NAD⁺ hydrolysis — acts as a **product inhibitor** of sirtuin activity. The yeast enzyme **PNC1** (and its orthologue NAMPT in mammals) can convert nicotinamide back to NAD⁺, maintaining sirtuin activity. This forms a feedback regulation loop relevant to CR-mediated longevity.

## Role in ADP-Ribosylation
For sirtuins with primary **mono-ADP-ribosyl transferase activity** (namely [[SIRT4]] and [[SIRT6]]), NAD⁺ serves as an ADP-ribose donor. The ADP-ribose moiety is transferred to target proteins (e.g., GDH by SIRT4), while nicotinamide is released.

## Historical Context

The discovery that Sir2 deacetylase activity is **absolutely dependent on NAD⁺** was a landmark finding:
- Landry et al. (2000): Demonstrated NAD⁺-dependent deacetylase activity.
- Imai et al. (2000): Confirmed Sir2 as an NAD⁺-dependent histone deacetylase and proposed that deacetylation (not ADP-ribosylation) is the primary mechanism.
- This NAD⁺ dependence distinguished sirtuins (Class III HDACs) from all other known histone deacetylases (Classes I, II, IV).

## NAD⁺ and Neuroprotection

SIRT1-mediated neuroprotection in the context of axonal degeneration requires **Nmnat** (nicotinate mononucleotide adenylyltransferase), a key NAD⁺ biosynthetic enzyme. Increased nuclear NAD⁺ biosynthesis activates [[notes/sirtuins/SIRT1]] and prevents axonal/Wallerian degeneration, demonstrating NAD⁺ as a neuroprotective metabolite.

## Connections

- [[notes/sirtuins/SIRT1]] — primary mammalian sirtuin; robust NAD⁺-dependent deacetylase
- [[Sir2 (yeast)]] — founding sirtuin; NAD⁺ dependence first established here
- [[OAADPr]] — unique metabolic by-product of NAD⁺-dependent deacetylation
- [[notes/_link/Caloric Restriction]] — increases NAD⁺ levels, activating sirtuins
- [[SIRT4]] — uses NAD⁺ as ADP-ribose donor for GDH modification
- [[SIRT6]] — uses NAD⁺ as ADP-ribose donor for ADP-ribosylation
- [[notes/_link/Resveratrol]] — STAC that activates SIRT1 in an NAD⁺-dependent manner

## Linking Summary

- New links added: [[notes/sirtuins/SIRT1]], [[Sir2 (yeast)]], [[OAADPr]], [[notes/_link/Caloric Restriction]], [[SIRT4]], [[SIRT6]], [[notes/_link/Resveratrol]]
- Suggested new entity notes to create: [[Nmnat]], [[PNC1 (yeast)]], [[NAMPT]], [[NAD⁺/NADH Ratio]]
- Strong connections to strengthen: [[NAD+]] ↔ [[notes/sirtuins/SIRT1]], [[NAD+]] ↔ [[notes/_link/Caloric Restriction]]
