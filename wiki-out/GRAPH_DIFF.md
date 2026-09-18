# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Projects/llm-wiki-jk/graphify-out/graph.json` (3493 nodes, 6605 edges)
- Wiki graph:    `/Users/johnnykuo/Projects/llm-wiki-jk/wiki-out/graph.json` (3146 nodes, 37454 edges)

## Node overlap

- **Shared** (in both): 2132
- **Wiki-only** (linked, no triple): 1014
- **Triples-only** (triple, no wikilink): 1361

## Edge overlap

- Overlap is classified by (source, target) pair, relation-agnostic. Unique pairs: triples 6285 / wiki 37454 — the triples graph carries 6605 links over 6285 pairs (320 parallel-relation links preserved by the MultiDiGraph rebuild).

- **Wiki-only pairs** (under-extracted triples / curation gaps): 34124
- **Triples-only pairs** (not surfaced as a wikilink): 2955

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| Macrophage | 76 |
| Fibroblast | 69 |
| Endothelial Cells | 69 |
| Glutathione Peroxidase 4 | 68 |
| Histone Variant | 64 |
| Epigenetics and aging | 64 |
| Citric Acid Cycle | 59 |
| Unfolded Protein Response | 57 |
| MMP-12 | 55 |
| Caenorhabditis elegans | 54 |
| PARK2 | 54 |
| Atg1 | 53 |
| ALS | 50 |
| Immunity | 49 |
| Cardiomyocyte Toxicity | 49 |
| Fat Oxidation | 46 |
| Caspase-8-c-FLIP Rheostat | 45 |
| Insulin | 44 |
| Retrograde Response | 44 |
| Mitochondrial outer membrane permeabilization | 42 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| Adrenochrome formation | 11 |
| Females | 9 |
| NF-kB | 5 |
| Sodium Chloride | 5 |
| Cell Migration | 5 |
| slow COMT | 4 |
| SIRT3 deficiency | 4 |
| Biphasic Dose Response | 4 |
| Physical Activity | 4 |
| COMT Val158 allele | 4 |
| SIRT1 and SIRT2 | 4 |
| DNA Polymerase | 4 |
| Mice | 4 |
| JAK-STAT3 | 4 |
| Dietary Advanced Glycation End Products | 3 |
| H4K16 | 3 |
| catechol flavonoid | 3 |
| Securin | 3 |
| H3K9 | 3 |
| Reactive Species | 3 |

## Top 20 wiki-only edges (suggest extracting as triples)

| Source | Target | Link count |
| --- | --- | --- |
| Zscan4 | SASP | 1.0 |
| Zscan4 | PRDX6 | 1.0 |
| Zscan4 | HSPA8 | 1.0 |
| Zscan4 | Apigenin | 1.0 |
| Zscan4 | Acute Stress-Associated Phenotype | 1.0 |
| Zone 2 Cardio | Mitochondria | 1.0 |
| Zone 2 Cardio | Metabolic Flexibility | 1.0 |
| Zone 2 Cardio | Heart Rate Variability | 1.0 |
| Zone 2 Cardio | Autophagy | 1.0 |
| ZKSCAN3 | TFEB | 1.0 |
| ZKSCAN3 | Starvation | 1.0 |
| ZKSCAN3 | Lysosome | 1.0 |
| ZKSCAN3 | LC3 | 1.0 |
| ZKSCAN3 | CRM1 | 1.0 |
| ZKSCAN3 | Autophagy | 1.0 |
| Zinc Finger | TALE | 1.0 |
| Zinc Finger | mitoZFNs | 1.0 |
| Zinc Finger | Mitochondrial Targeting Sequence | 1.0 |
| Zinc Finger | Mitochondrial Matrix | 1.0 |
| Zinc Finger | Mitochondrial DNA | 1.0 |

## Top 20 triples-only edges (not reflected in any wikilink)

| Source | Target |
| --- | --- |
| Zone 2 Cardio | Mitochondrial Biogenesis |
| ZKSCAN3 | Lysosomal and autophagy genes |
| Zinc Supplementation | Alzheimers Disease |
| Zellweger syndrome | PEX gene mutations |
| Zeb1 | CDH1 |
| ZCCHC11 | TUTase |
| ZBP1 | PANoptosome |
| ZBP1 | Necroptosis |
| YAP1 | Cancer |
| Yamanaka Factors | HFF1 |
| Yamanaka Factors | Epigenetic Remodeling |
| Xanthine Oxidase | Superoxide anion |
| X-Chromosome Inactivation | Dosage Compensation |
| X-Chromosome Inactivation | Barr Body |
| Working Memory | limited-capacity cognitive system |
| Working Memory | balanced dopamine in Prefrontal Cortex |
| Wnt | EMT |
| Withaferin A | SIRT3 for anti-fibrotic effect |
| William C. Campbell | Nobel Prize in Physiology or Medicine |
| Western Diet | NLRP3-Dependent Trained Immunity |
