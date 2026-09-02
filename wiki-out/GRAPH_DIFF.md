# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Projects/llm-wiki-jk/graphify-out/graph.json` (3005 nodes, 5066 edges)
- Wiki graph:    `/Users/johnnykuo/Projects/llm-wiki-jk/wiki-out/graph.json` (3030 nodes, 35740 edges)

## Node overlap

- **Shared** (in both): 1814
- **Wiki-only** (linked, no triple): 1216
- **Triples-only** (triple, no wikilink): 1191

## Edge overlap

- Overlap is classified by (source, target) pair, relation-agnostic. Unique pairs: triples 4800 / wiki 35740 — the triples graph carries 5066 links over 4800 pairs (266 parallel-relation links preserved by the MultiDiGraph rebuild).

- **Wiki-only pairs** (under-extracted triples / curation gaps): 33320
- **Triples-only pairs** (not surfaced as a wikilink): 2380

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| cGAS | 96 |
| Phosphorylation | 89 |
| Macrophage | 76 |
| Ubiquitination | 75 |
| Endothelial Cells | 68 |
| Fibroblast | 68 |
| Replicative Senescence | 67 |
| Epigenetics and aging | 64 |
| Flavonoid | 61 |
| Histone Variant | 60 |
| Citric Acid Cycle | 57 |
| Unfolded Protein Response | 57 |
| MMP-12 | 55 |
| Caenorhabditis elegans | 54 |
| Atg1 | 53 |
| PARK2 | 52 |
| Transcription factor EB | 50 |
| ALS | 50 |
| Transcription Factor | 50 |
| Immunity | 49 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| Adrenochrome formation | 11 |
| COMT Val158 allele | 5 |
| slow COMT | 4 |
| Mice | 4 |
| SIRT3 deficiency | 4 |
| Physical Activity | 4 |
| NF-kB | 4 |
| SIRT1 and SIRT2 | 4 |
| Cutaneous Melanoma | 4 |
| JAK-STAT3 | 4 |
| S6K1/2 | 3 |
| Advanced Glycation End Products formation | 3 |
| H3K9 | 3 |
| Antioxidant Properties | 3 |
| Dietary Advanced Glycation End Products | 3 |
| TRIM28 | 3 |
| catechol flavonoid | 3 |
| Streptomyces avermectinius | 3 |
| SIRT7 depletion | 3 |
| methyl donor supplements | 3 |

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
| Zellweger syndrome | PEX gene mutations |
| YAP1 | Cancer |
| Working Memory | limited-capacity cognitive system |
| Working Memory | balanced dopamine in Prefrontal Cortex |
| Withaferin A | SIRT3 for anti-fibrotic effect |
| William C. Campbell | Nobel Prize in Physiology or Medicine |
| Western blot analysis | Acetylated p53, histone 3 and gamma-tubulin |
| Vitamin E | Singlet Oxygen |
| Vitamin E | Prostate Cancer |
| Vitamin E | cancer risk in slow COMT |
| Vitamin E | cancer in fast COMT |
| Vitamin C | Mitochondrial Biogenesis |
| Vitamin C | Methemoglobin |
| Vitamin B3 | Acute Lung Injury |
| VEGFc | VEGF Family |
| VEGFc | Lymphangiogenesis |
| VCAM-1 | VLA-4 (alpha4beta1 integrin) on leukocytes |
| Valine | TCA cycle |
