---
type: entity
category: metabolite
aliases:
  - Nicotinamide Mononucleotide
  - NMN
  - β-NMN
database_ids:
  chebi: CHEBI:25378
  pubchem: 4787763
relations:
  - predicate: precursor_of
    target: "NAD+"
    sources: []
  - predicate: activates
    target: "Sirtuins"
    sources: []
created: 2026-07-05
updated: 2026-07-05
---

# NMN (Nicotinamide Mononucleotide)

**Nicotinamide Mononucleotide (NMN)** is an endogenous nucleotide derived from vitamin B3 (niacin) and a direct biosynthetic precursor to [[NAD+]] (nicotinamide adenine dinucleotide). NMN serves as a key intermediate in the NAD+ salvage pathway, where it is converted to NAD+ by the enzyme [[NAMPT]] (nicotinamide phosphoribosyltransferase) and NMNAT (nicotinamide mononucleotide adenylyltransferase).

## Mechanism as a Pan-Sirtuin Activator

NMN does not directly bind or activate any individual sirtuin. Instead, it functions as a **universal indirect pan-sirtuin activator** by raising cellular [[NAD+]] concentrations. Since all seven mammalian sirtuins ([[SIRT1]]–[[SIRT7]]) require NAD+ as an obligate co-substrate for their deacetylase and deacylase activities, elevating NAD+ levels via NMN supplementation potentiates the catalytic activity of the entire sirtuin family.

## Therapeutic Relevance

- **Metabolic Health**: NMN supplementation has been shown to improve insulin sensitivity, mitochondrial function, and energy metabolism in preclinical models of obesity and aging.
- **Cardiovascular Protection**: NMN restores NAD+ levels in aged endothelial cells, improving vascular function and reducing atherosclerotic burden.
- **Neuroprotection**: NMN crosses the blood-brain barrier and may protect against age-related cognitive decline by restoring neuronal NAD+ pools.
- **Longevity**: NMN supplementation extends lifespan in model organisms, mimicking many benefits of [[Caloric Restriction]].

## Dietary Sources and Bioavailability

- **Edamame (immature soybeans)**: ~1.0–1.2 mg/g dry weight
- **Broccoli**: ~0.25–0.30 mg/g
- **Cucumber**: ~0.25–0.30 mg/g
- **Cabbage**: ~0.25 mg/g
- **Avocado**: ~0.25 mg/g
- **Tomato**: ~0.25 mg/g

Dietary NMN is rapidly degraded in the gut by the enzyme CD38 and intestinal alkaline phosphatase, limiting oral bioavailability. Strategies to enhance NMN delivery include enteric-coated formulations, liposomal encapsulation, and co-administration with CD38 inhibitors.

## Connections

- [[NAD+]] — direct biosynthetic precursor; NMN is converted to NAD+ by NMNAT
- [[NAMPT]] — rate-limiting enzyme in the NAD+ salvage pathway that converts nicotinamide to NMN
- [[Nicotinamide Riboside]] — another NAD+ precursor; NR is phosphorylated to NMN before entering the NAD+ pool
- [[Sirtuins]] — NMN indirectly activates all sirtuins by boosting NAD+ availability
- [[Caloric Restriction]] — NMN supplementation mimics CR-induced NAD+ elevation
- [[CD38]] — degrades NMN; CD38 inhibitors preserve NMN levels

---

## Linking Summary

- New links added: [[NAD+]], [[NAMPT]], [[Nicotinamide Riboside]], [[Sirtuins]], [[SIRT1]], [[Caloric Restriction]], [[CD38]]
- Suggested new entity notes to create: [[NMNAT]]
- Strong connections to strengthen: [[NMN]] ↔ [[NAD+]], [[NMN]] ↔ [[Nicotinamide Riboside]]
