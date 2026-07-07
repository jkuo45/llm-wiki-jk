---
name: triples-section
description: Maintain the triples knowledge graph sections in README.md — sort alphabetically, add zh-TW translations for top subjects/objects/predicates.
---

# Triples Section Workflow

Maintain the `#### <topic> triples` blocks in the README's project area. Each block follows this structure:

```markdown
#### <topic> triples

**<topic>** — <nodes> nodes · <edges> edges · <predicates> relation types · <confidence>% high confidence

| Metric             | Value |
| ------------------ | ----- |
| Entities (nodes)   | ...   |
| Triples (edges)    | ...   |
| Unique predicates  | ...   |
| Confidence high    | ...   |
| Top subjects       | ...   |
| Top domain objects | ...   |
| Top predicates     | ...   |
| zh-TW              | ...   |

<img src="notes/<topic>/_triples_<topic>.svg" alt="<Topic> triples" width="100%">

---
```

## Workflow Steps

### 1. Sort sections alphabetically

Reorder the `#### <topic> triples` sections by `<topic>` alphabetically (case-insensitive). Each block is separated by `---`. Move entire blocks (from `####` through `---`) as atomic units.

### 2. Add zh-TW translation row

After each `| Top predicates | ... |` row, insert a `| zh-TW | ... |` row with Traditional Chinese translations for all top subjects, objects, and predicates. Format:

```
| zh-TW | 主詞：<translated subject>(count)、...；受詞：<translated object>(count)、...；謂語：<translated predicate>(count)、... |
```

### 3. Translation conventions

| English                                 | zh-TW          |
| --------------------------------------- | -------------- |
| Adrenochrome                            | 腎上腺素紅     |
| Epinephrine                             | 腎上腺素       |
| Leuco-adrenochrome                      | 白腎上腺素紅   |
| Methemoglobin                           | 變性血紅蛋白   |
| Autophagy                               | 自噬           |
| Spermidine                              | 亞精胺         |
| Intermittent Fasting                    | 間歇性禁食     |
| Aging                                   | 衰老           |
| Parkinson's Disease                     | 帕金森病       |
| Dopamine                                | 多巴胺         |
| Alpha-Synuclein                         | α-突觸核蛋白   |
| Neuroinflammation                       | 神經炎症       |
| Neuromelanin                            | 神經黑色素     |
| Oxidative Stress                        | 氧化壓力       |
| Peroxynitrite                           | 過氧亞硝酸鹽   |
| Superoxide Radicals                     | 超氧自由基     |
| Hydroxyl Radicals                       | 羥自由基       |
| Lipid Peroxidation                      | 脂質過氧化     |
| Hydrogen Peroxide                       | 過氧化氫       |
| Nitric Oxide                            | 一氧化氮       |
| Resveratrol                             | 白藜蘆醇       |
| Mitochondria                            | 線粒體         |
| Cancer                                  | 癌症           |
| PFC / prefrontal cortex                 | 前額葉皮層     |
| catechols                               | 兒茶酚         |
| working memory                          | 工作記憶       |
| Induced Pluripotent Stem Cells          | 誘導多能幹細胞 |
| Yamanaka Factors                        | 山中因子       |
| Cellular Reprogramming                  | 細胞重編程     |
| Epigenetics                             | 表觀遺傳學     |
| Senescence                              | 衰老(細胞衰老) |
| Predicates: causes                      | 導致           |
| Predicates: activates                   | 激活           |
| Predicates: inhibits                    | 抑制           |
| Predicates: induces                     | 誘導           |
| Predicates: promotes                    | 促進           |
| Predicates: regulates                   | 調控           |
| Predicates: modulates                   | 調節           |
| Predicates: phosphorylates              | 磷酸化         |
| Predicates: deacetylates                | 去乙醯化       |
| Predicates: represses                   | 抑制轉錄       |
| Predicates: is / is_a                   | 是 / 是一種    |
| Predicates: associated_with             | 與...相關      |
| Predicates: co_occurs_with              | 與...共現      |
| Predicates: mentions                    | 提及           |
| Predicates: connected_to                | 連接至         |
| Predicates: links_to                    | 鏈接至         |
| Predicates: bidirectionally_linked_with | 雙向關聯       |
| Predicates: converts_to                 | 轉化為         |
| Predicates: binds_to                    | 結合至         |
| Predicates: produces                    | 產生           |
| Predicates: contributes to              | 促成           |
| Predicates: reduces                     | 減少           |
| Predicates: localizes to                | 定位至         |
| Predicates: supports                    | 支持           |
| Predicates: impacts                     | 影響           |

### 4. Verification

After editing, verify:

- Sections remain in alphabetical order
- Each `zh-TW` row correctly translates all terms in the corresponding `Top subjects`, `Top domain objects`, and `Top predicates` rows
- Counts in parentheses match between English and zh-TW rows
- All table columns align correctly
