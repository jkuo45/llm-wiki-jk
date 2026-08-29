# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Projects/llm-wiki-jk/graphify-out/graph.json` (2654 nodes, 3896 edges)
- Wiki graph:    `/Users/johnnykuo/Projects/llm-wiki-jk/wiki-out/wiki-graph.json` (3007 nodes, 35150 edges)

## Node overlap

- **Shared** (in both): 1563
- **Wiki-only** (linked, no triple): 1444
- **Triples-only** (triple, no wikilink): 1091

## Edge overlap

- **Wiki-only edges** (under-extracted triples / curation gaps): 33422
- **Triples-only edges** (not surfaced as a wikilink): 2168

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| cGAS | 96 |
| Phosphorylation | 87 |
| STING | 83 |
| Cell Cycle | 83 |
| Macrophage | 75 |
| Ubiquitination | 73 |
| NMN (Nicotinamide Mononucleotide) | 71 |
| Rheumatoid Arthritis | 71 |
| Fibroblast | 68 |
| Endothelial Cells | 68 |
| Metabolism | 66 |
| Type I Interferon | 66 |
| Replicative Senescence | 65 |
| Epigenetics and aging | 64 |
| Flavonoid | 61 |
| Histone Variant | 60 |
| Unfolded Protein Response | 57 |
| Citric Acid Cycle | 57 |
| Calcium | 56 |
| Extracellular Matrix | 56 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| Adrenochrome formation | 11 |
| SIRT3 deficiency | 4 |
| JAK-STAT3 | 4 |
| SIRT1 and SIRT2 | 4 |
| Physical Activity | 4 |
| catechol flavonoid | 3 |
| H3K9 | 3 |
| Advanced Glycation End Products formation | 3 |
| Streptomyces avermectinius | 3 |
| Dietary AGEs | 3 |
| Dietary Advanced Glycation End Products | 3 |
| PI3K/Akt | 3 |
| SIRT6 overexpression | 3 |
| SIRT7 depletion | 3 |
| lipogenesis | 2 |
| Chemotherapy Resistance | 2 |
| Reactive Oxygen Species generation | 2 |
| stress responses | 2 |
| AGE-modified proteins | 2 |
| Synthetic STAC | 2 |

## Top 20 wiki-only edges (suggest extracting as triples)

| Source | Target | Link count |
| --- | --- | --- |
| Zscan4 | TAK1 | 1.0 |
| Zscan4 | SASP | 1.0 |
| Zscan4 | PRDX6 | 1.0 |
| Zscan4 | HSPA8 | 1.0 |
| Zscan4 | Apigenin | 1.0 |
| Zscan4 | Acute Stress-Associated Phenotype | 1.0 |
| Zone 2 Cardio | Mitochondria | 1.0 |
| Zone 2 Cardio | Metabolic Flexibility | 1.0 |
| Zone 2 Cardio | HIIT | 1.0 |
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
