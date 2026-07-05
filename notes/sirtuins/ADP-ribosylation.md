---
type: entity
category: pathway
aliases: [ADP-ribosylation, mono-ADP-ribosylation, poly-ADP-ribosylation, ADP-ribosyltransferase]
relations:
  - predicate: associated_with
    target: "Sirtuins"
    sources: [pmc.ncbi.nlm.nih.gov/articles/PMC6449673/]
    created: 2026-07-03
    updated: 2026-07-03
  - predicate: regulates
    target: "notes/_link/DNA Repair"
    sources: [pmc.ncbi.nlm.nih.gov/articles/PMC6449673/]
    created: 2026-07-03
    updated: 2026-07-03
---

# ADP-ribosylation

**ADP-ribosylation** is a reversible post-translational modification in which one or more ADP-ribose moieties from [[NAD+]] are transferred to specific amino acid residues (such as glutamate, aspartate, lysine, arginine, or cysteine) on a target protein. 

It plays a crucial role in several cellular processes, including:
- Cell signaling and transduction
- [[notes/_link/DNA Repair|DNA damage repair]]
- Genomic stability and chromatin regulation
- Gene expression regulation
- Apoptosis and cell death pathways

## Types of ADP-ribosylation

1. **Mono-ADP-ribosylation (MARylation):** The addition of a single ADP-ribose unit to a protein. 
2. **Poly-ADP-ribosylation (PARylation):** The addition of multiple, polymerized ADP-ribose units to form long, branching chains. This is primarily catalyzed by Poly-ADP-ribose polymerases (PARPs), such as [[notes/_link/PARP1|PARP1]].

## Sirtuins with ADP-ribosyltransferase Activity

While mammalian [[Sirtuins]] are most famously recognized for their [[notes/_link/Histone Modification|deacetylase]] activities, several family members function as ADP-ribosyltransferases, using [[NAD+]] to modify substrates:

- **[[SIRT4]]**: Possesses primary mono-ADP-ribosyltransferase activity. For example, it ribosylates and inhibits [[Glutamate Dehydrogenase (GDH)]] in pancreatic β-cells, suppressing insulin secretion in response to glutamine.
- **[[SIRT6]]**: Exhibits mono-ADP-ribosyltransferase activity alongside deacetylation and deacylation. Under [[notes/_link/DNA Damage|DNA damage]] conditions, SIRT6 ribosylates proteins like PARP1, stimulating its double-strand break repair activity, and ribosylates Kap1 to suppress transposable elements.
- **[[SIRT7]]**: Also exhibits weak ADP-ribosylation activity involved in nucleolar chromatin organization and transcriptional regulation.

## Connections

- [[NAD+]]: The obligatory donor of the ADP-ribose group.
- [[Sirtuins]]: Enzymes (specifically [[SIRT4]] and [[SIRT6]]) that catalyze mono-ADP-ribosylation.
- [[notes/_link/PARP1]]: The master catalyst of poly-ADP-ribosylation in response to genotoxic stress.

## Linking Summary:
- New links added: [[NAD+]], [[Sirtuins]], [[SIRT4]], [[SIRT6]], [[Glutamate Dehydrogenase (GDH)]], [[notes/_link/DNA Repair]], [[notes/_link/DNA Damage]], [[notes/_link/PARP1]]
- Suggested new entity notes to create: [[PARylation]], [[MARylation]]
- Strong connections to strengthen: [[ADP-ribosylation]] ↔ [[Sirtuins]], [[ADP-ribosylation]] ↔ [[NAD+]]
