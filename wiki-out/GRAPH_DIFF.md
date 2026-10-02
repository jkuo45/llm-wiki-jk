# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Projects/llm-wiki-jk/graphify-out/graph.json` (4368 nodes, 11864 edges)
- Wiki graph:    `/Users/johnnykuo/Projects/llm-wiki-jk/wiki-out/graph.json` (3360 nodes, 41371 edges)

## Node overlap

- **Shared** (in both): 3150
- **Wiki-only** (linked, no triple): 210
- **Triples-only** (triple, no wikilink): 1218

## Edge overlap

- Overlap is classified by (source, target) pair, relation-agnostic. Unique pairs: triples 11011 / wiki 41371 — the triples graph carries 11864 links over 11011 pairs (853 parallel-relation links preserved by the MultiDiGraph rebuild).

- **Wiki-only pairs** (under-extracted triples / curation gaps): 34364
- **Triples-only pairs** (not surfaced as a wikilink): 4004

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| Epigenetics and aging | 66 |
| Histone Variant | 66 |
| NAFLD | 62 |
| Kidney Diseases | 58 |
| Immunity | 50 |
| Growth Factor Receptor | 50 |
| MET | 49 |
| Embryogenesis | 48 |
| FASN | 46 |
| Intestine | 44 |
| Endocytosis | 43 |
| Membrane Trafficking | 43 |
| High-fat Diet | 40 |
| Cytokine Storm | 40 |
| Radiotherapy | 40 |
| Helminth | 38 |
| Histone H2AX | 37 |
| Leptin Signaling | 34 |
| D-dimer | 34 |
| FN1 | 34 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| Adrenochrome formation | 11 |
| Females | 9 |
| Sodium Chloride | 5 |
| Mice | 4 |
| SIRT1 and SIRT2 | 4 |
| slow COMT | 4 |
| JAK-STAT3 | 4 |
| Physical Activity | 4 |
| Biphasic Dose Response | 4 |
| COMT Val158 allele | 4 |
| Alkylating agent | 3 |
| TRIM28 | 3 |
| Radiation Therapy | 3 |
| H4K16 | 3 |
| S6K1/2 | 3 |
| SIRT7 depletion | 3 |
| anti-inflammatory properties | 3 |
| Antioxidant Properties | 3 |
| Cutaneous Melanoma | 3 |
| Reactive Species | 3 |

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
| Zone 2 Cardio | Mitochondrial Biogenesis |
| ZKSCAN3 | Lysosomal and autophagy genes |
| Zinc Supplementation | Alzheimer's Disease |
| Zinc Finger | DNA |
| Zellweger syndrome | PEX gene mutations |
| Zellweger syndrome | Neonatal Adrenoleukodystrophy |
| Zeb1 | CDH1 |
| ZCCHC11 | TUTase |
| ZBP1 | Pattern Recognition Receptors |
| ZBP1 | PANoptosome |
| ZBP1 | Necroptosis |
| Z-DNA | ZBP1 |
| YAP1 | Cancer |
| Yamanaka Factors | HFF1 |
| Yamanaka Factors | Epigenetic Remodeling |
| XBP1 | UPRE |
| XBP1 | leucine zipper transcription Factors |
| Xanthine Oxidase | Superoxide anion |
| X-Chromosome Inactivation | Dosage Compensation |
| X-Chromosome Inactivation | Barr Body |
