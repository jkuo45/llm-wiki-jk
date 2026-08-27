# Triples vs Wiki Graph Diff

- Triples graph: `/Users/johnnykuo/Documents/llm-wiki-jk/graphify-out/graph.json` (2624 nodes, 3768 edges)
- Wiki graph:    `/Users/johnnykuo/Documents/llm-wiki-jk/wiki-out/wiki-graph.json` (2995 nodes, 34851 edges)

## Node overlap

- **Shared** (in both): 1510
- **Wiki-only** (linked, no triple): 1485
- **Triples-only** (triple, no wikilink): 1114

## Edge overlap

- **Wiki-only edges** (under-extracted triples / curation gaps): 33273
- **Triples-only edges** (not surfaced as a wikilink): 2190

## Top 20 wiki-only nodes (linked but absent from triples)

| Node | Degree |
| --- | --- |
| TP53 | 184 |
| cGAS | 96 |
| Phosphorylation | 87 |
| Cell Cycle | 83 |
| STING | 83 |
| TGFβ | 75 |
| Macrophage | 75 |
| Ubiquitination | 72 |
| Rheumatoid Arthritis | 71 |
| Fibroblast | 68 |
| Endothelial Cells | 68 |
| Type I Interferon | 66 |
| Metabolism | 66 |
| Replicative Senescence | 65 |
| Epigenetics and aging | 64 |
| Flavonoid | 61 |
| IL-1α | 60 |
| Histone Variant | 60 |
| Mitochondrial Permeability Transition Pore | 57 |
| Unfolded Protein Response | 57 |

## Top 20 triples-only nodes (triple but no wikilink)

| Node | Degree |
| --- | --- |
| NF-κB | 48 |
| Adrenochrome formation | 11 |
| TGFβ | 11 |
| IL-1β | 9 |
| HIF-1α | 8 |
| LXRα | 6 |
| PPARγ | 6 |
| Physical Activity | 4 |
| TNFα | 4 |
| PGC-1α | 4 |
| JAK-STAT3 | 4 |
| SIRT1 and SIRT2 | 4 |
| SIRT3 deficiency | 4 |
| SIRT6 overexpression | 3 |
| Streptomyces avermectinius | 3 |
| Dietary AGEs | 3 |
| Advanced Glycation End Products formation | 3 |
| PI3K/Akt | 3 |
| catechol flavonoid | 3 |
| Dietary Advanced Glycation End Products | 3 |

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
| Warburg Effect | p53 |
| Warburg Effect | HIF-1α |
| Vitamin E | Singlet Oxygen |
| Vitamin E | Prostate Cancer |
| Vitamin E | cancer risk in slow COMT |
| Vitamin E | cancer in fast COMT |
| Vitamin C | Mitochondrial Biogenesis |
| Vitamin C | Methemoglobin |
| Vitamin B3 | Acute Lung Injury |
| VEGFc | VEGF Family |
| VEGFc | Lymphangiogenesis |
