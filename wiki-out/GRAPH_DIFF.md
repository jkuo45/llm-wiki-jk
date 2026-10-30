# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Projects/llm-wiki-jk/graphify-out/graph.json` (3493 nodes, 6605 edges)
- Wiki graph:    `/Users/johnnykuo/Projects/llm-wiki-jk/wiki-out/graph.json` (3553 nodes, 46463 edges)

## Node overlap

- **Shared** (in both): 2161
- **Wiki-only** (linked, no triple): 1392
- **Triples-only** (triple, no wikilink): 1332

## Edge overlap

- Overlap is classified by (source, target) pair, relation-agnostic. Unique pairs: triples 6285 / wiki 46463 — the triples graph carries 6605 links over 6285 pairs (320 parallel-relation links preserved by the MultiDiGraph rebuild).

- **Wiki-only pairs** (under-extracted triples / curation gaps): 43091
- **Triples-only pairs** (not surfaced as a wikilink): 2913

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| Macrophage | 113 |
| Eryptosis | 92 |
| Endothelial Cells | 80 |
| Chronic Inflammation | 72 |
| Histone Variant | 72 |
| Fibroblast | 71 |
| Kidney Diseases | 69 |
| Epigenetics and aging | 67 |
| NAFLD | 66 |
| Insulin | 66 |
| Citric Acid Cycle | 64 |
| Cell Signaling | 64 |
| Unfolded Protein Response | 64 |
| Erythrocytes | 62 |
| Caenorhabditis elegans | 59 |
| FASN | 58 |
| Hypertension | 57 |
| Atg1 | 56 |
| MMP-12 | 56 |
| Endocytosis | 55 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| Adrenochrome formation | 11 |
| Ascorbic Acid | 10 |
| Females | 9 |
| ROS | 7 |
| Antioxidants | 7 |
| CDK4 | 5 |
| Sodium Chloride | 5 |
| NF-kB | 5 |
| p21 | 5 |
| Biphasic Dose Response | 4 |
| Mice | 4 |
| slow COMT | 4 |
| Physical Activity | 4 |
| JAK-STAT3 | 4 |
| SIRT3 deficiency | 4 |
| SIRT1 and SIRT2 | 4 |
| COMT Val158 allele | 4 |
| CDK6 | 4 |
| IGF-1 | 3 |
| SIRT6 overexpression | 3 |

## Top 20 wiki-only edges (suggest extracting as triples)

| Source | Target | Link count |
| --- | --- | --- |
| Zscan4 | SASP | 1.0 |
| Zscan4 | PRDX6 | 1.0 |
| Zscan4 | HSC70 | 1.0 |
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
