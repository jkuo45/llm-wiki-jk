# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Projects/llm-wiki-jk/graphify-out/graph.json` (4577 nodes, 12116 edges)
- Wiki graph:    `/Users/johnnykuo/Projects/llm-wiki-jk/wiki-out/graph.json` (3553 nodes, 46474 edges)

## Node overlap

- **Shared** (in both): 3187
- **Wiki-only** (linked, no triple): 366
- **Triples-only** (triple, no wikilink): 1390

## Edge overlap

- Overlap is classified by (source, target) pair, relation-agnostic. Unique pairs: triples 11262 / wiki 46474 — the triples graph carries 12116 links over 11262 pairs (854 parallel-relation links preserved by the MultiDiGraph rebuild).

- **Wiki-only pairs** (under-extracted triples / curation gaps): 39366
- **Triples-only pairs** (not surfaced as a wikilink): 4154

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| Chronic Inflammation | 72 |
| Histone Variant | 72 |
| Kidney Diseases | 69 |
| Epigenetics and aging | 67 |
| NAFLD | 66 |
| FASN | 58 |
| Endocytosis | 55 |
| MET | 54 |
| Immunity | 54 |
| Membrane Trafficking | 52 |
| Receptor Tyrosine Kinases | 52 |
| Growth Factor Receptor | 52 |
| Embryogenesis | 48 |
| Intestine | 46 |
| Radiotherapy | 45 |
| Angiotensin II Type 1 Receptor | 44 |
| Helminth | 43 |
| Cytokine Storm | 42 |
| Rac GTPase | 40 |
| High-fat Diet | 40 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| Adrenochrome formation | 11 |
| ROS | 10 |
| Females | 9 |
| Sodium Chloride | 5 |
| Nonselective Cation Channel | 5 |
| Lysosomal Storage Disorders | 4 |
| COMT Val158 allele | 4 |
| Mice | 4 |
| Physical Activity | 4 |
| Biphasic Dose Response | 4 |
| JAK-STAT3 | 4 |
| slow COMT | 4 |
| SIRT1 and SIRT2 | 4 |
| H4K16 | 3 |
| S6K1/2 | 3 |
| catechol flavonoid | 3 |
| SIRT7 depletion | 3 |
| H3K9 | 3 |
| TRIM28 | 3 |
| Antioxidant Properties | 3 |

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
| Zinc Finger | Mitochondrial Targeting Sequence | 1.0 |
| Zinc Finger | Mitochondrial Matrix | 1.0 |
| Zinc Finger | Mitochondrial DNA | 1.0 |
| Zinc Finger | Heteroplasmy | 1.0 |
| Zinc Finger | FokI | 1.0 |

## Top 20 triples-only edges (not reflected in any wikilink)

| Source | Target |
| --- | --- |
| zVAD | Caspases |
| Zone 2 Cardio | Mitochondrial Biogenesis |
| ZKSCAN3 | Lysosomal and autophagy genes |
| Zinc Supplementation | Alzheimer's Disease |
| Zinc Finger | DNA |
| Zinc | Eryptosis |
| Zidovudine | Eryptosis |
| Zellweger syndrome | PEX gene mutations |
| Zellweger syndrome | Neonatal Adrenoleukodystrophy |
| Zeb1 | CDH1 |
| Zearalenone | Eryptosis |
| ZCCHC11 | TUTase |
| ZBP1 | Pattern Recognition Receptors |
| ZBP1 | PANoptosome |
| ZBP1 | Necroptosis |
| Z-DNA | ZBP1 |
| YAP1 | Cancer |
| Yamanaka Factors | HFF1 |
| Yamanaka Factors | Epigenetic Remodeling |
| XBP1 | UPRE |
