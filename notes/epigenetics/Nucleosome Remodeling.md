---
type: entity
category: biological_process
entity_type: "Biological Process"
created: 2024-01-01
updated: 2024-07-04
---

# Nucleosome Remodeling

**Nucleosome Remodeling** is the ATP-dependent process by which [[Nucleosome|nucleosomes]] — the fundamental unit of [[Chromatin]] — are repositioned, evicted, or restructured to regulate [[DNA]] accessibility for [[Transcription]], [[DNA Replication]], [[DNA Repair]], and [[Recombination]]. It is an essential epigenetic mechanism that operates in concert with [[Histone Modification|histone modifications]] and [[DNA Methylation]].

## ATP-Dependent Remodeling Complexes

All ATP-dependent remodelers share a conserved [[ATPase]] domain of the [[SNF2 family]] but differ in associated domains and targeting mechanisms:

| Family | ATPase | Primary Function | Unique Features |
|---|---|---|---|
| **SWI/SNF** (BAF/PBAF) | [[BRG1]]/[[BRM]] | Nucleosome sliding and ejection | [[Bromodomain]] for acetyl-lysine recognition |
| **ISWI** | [[SNF2H]]/[[SNF2L]] | Nucleosome spacing, assembly | [[SANT domain]], [[SLIDE domain]] |
| **CHD** | [[CHD1]]–[[CHD9]] | Nucleosome sliding, H3K4me3 recognition | [[Chromodomain]] for methyl-lysine binding |
| **INO80** | [[INO80]]/[[SWR1]] | Histone variant exchange (H2A.Z), DNA repair | [[Insertion domain]] for actin/ARP binding |

## Mechanisms

Remodelers use the energy of [[ATP]] hydrolysis to:

1. **Slide nucleosomes:** Move the histone octamer along DNA without disrupting it (ISWI, SWI/SNF).
2. **Evict nucleosomes:** Remove one or both H2A-H2B dimers or the entire octamer (SWI/SNF).
3. **Histone variant exchange:** Replace canonical histones with variants like [[H2A.Z]] or [[H3.3]] (INO80/SWR1).
4. **Space nucleosomes:** Arrange evenly spaced arrays around transcribed genes (ISWI).

## Role in Senescence and Aging

- [[SWI/SNF]] activity declines with age, contributing to heterochromatin loss at [[LINE-1]] elements.
- [[SAHF|Senescence-associated heterochromatin foci]] formation requires [[HIRA]]-dependent deposition of [[H3.3]] at PML bodies.
- [[CHD3]]/[[CHD4]] ([[NuRD complex]]) are upregulated in senescent cells, contributing to the repressive chromatin at proliferation genes.
- [[INO80]] inhibition sensitizes senescent cells to [[DNA Damage]], suggesting a vulnerability.

## Experimental Tools

- **[[MNase-seq]]:** Maps nucleosome positions genome-wide.
- **[[ATAC-seq]]:** Identifies accessible chromatin regions.
- **Chemical inhibitors:** [[PFI-3]] (BRG1/BRM), [[AU-15330]] (SWI/SNF), [[I-BRD9]] (BRD9).
- **dCas9-remodeler fusions:** Targeted recruitment of BRG1 to specific loci for functional validation.

### Linking Summary:
- New links added: [[Nucleosome]], [[Chromatin]], [[Epigenetics]], [[SWI/SNF]], [[ISWI]], [[CHD]], [[INO80]], [[SAHF]], [[NuRD complex]], [[DNA Replication]], [[Transcription]]
- Suggested new entity notes to create: [[BAF complex]], [[PBAF complex]], [[HIRA complex]], [[H2A.Z]]
- Strong connections to strengthen: [[Nucleosome Remodeling]] ↔ [[Chromatin]], [[Nucleosome Remodeling]] ↔ [[Epigenetics]]
