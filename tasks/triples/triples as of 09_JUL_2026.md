
---
> [!NOTE]
> **Mechanistic extraction** (filtered: excludes `has_type` triples) outputs tight knowledge graphs with domain-specific predicates — `deacetylates`, `phosphorylates`, `activates`, `inhibits`, `causes` — each encoding a direct causal or functional relationship. These graphs are small (~150–310 edges) and high precision, best for pathway verification, drug mechanism reasoning, and literature-backed claims. 80–99% high confidence indicates a mature, cohesive field where entities routinely co-occur in the same sentence (textbook knowledge).
> 
> **Co-occurrence extraction** (epigenetics, 30.3% high confidence) prioritizes recall over precision. Entities are linked when they appear in the same textual context; confidence is determined by textual proximity (same sentence = high, same paragraph = medium, same document = low). With 7,338 edges across 830 nodes — 30–50× larger than any mechanistic topic — and predicates dominated by `co_occurs_with` (4,528) and `mentions` (1,803), this graph captures bibliometric associations rather than causal mechanisms. It is designed for discovery: surfacing weak signals and cross-domain connections in fragmented or emerging fields. 20–30% high confidence indicates a research frontier where most links are document-level, not yet tightly coupled in the literature.
> 
> Neither style is "better" — they are complementary. Mechanistic confirms known pathways; co-occurrence reveals potential connections. Confidence % in co-occurrence acts as a **cohesion metric**: how tightly entities cluster in the literature, not how "correct" the triples are. There is no fixed target — the appropriate range depends on the goal (90%+ for verification, 20–40% for exploration).

| Topic            | High %    | Edges | Predicates | Top predicate                                                                               | Extraction style |
| ---------------- | --------- | ----- | ---------- | ------------------------------------------------------------------------------------------- | ---------------- |
| adrenochrome     | **93.4%** | 242   | 56         | `is (11), induces (6), promotes (5), activates (4), binds_to (4)`                           | mechanistic      |
| autophagy        | **89.6%** | 154   | 79         | `phosphorylates (19), activates (11), inhibits (10), regulates (8), induces (6)`            | mechanistic      |
| comt             | **83.5%** | 200   | 89         | `is (29), is_associated_with (11), modulates (7), supports (6), impacts (6)`                | mechanistic      |
| epigenetics      | **30.3%** | 7338  | 19         | `co_occurs_with (4528), mentions (1803), causes (406), connected_to (322), links_to (90)`   | co-occurrence    |
| neuromelanin     | **97.7%** | 218   | 25         | `bidirectionally_linked_with (104), is_a (30), causes (18), converts_to (12), binds_to (8)` | mechanistic      |
| oxidative_stress | **99.2%** | 236   | 127        | `produces (13), causes (13), activates (11), contributes to (9), reduces (7)`               | mechanistic      |
| sirtuins         | **97.7%** | 311   | 125        | `deacetylates (53), inhibits (30), activates (22), localizes to (10), represses (10)`       | mechanistic      |
| **senescence**   | **87.4%** | 270   | 108        | `is_suppressed_by (13), is_a_type_of (12), is_regulated_by (12), is_inhibited_by (11)`     | mechanistic      |
| **cancer**       | **71.8%** | 266   | 102        | `is_inhibited_by (24), is_driven_by (15), inhibits (13), includes (12), is_induced_by (11)` | mechanistic      |

---

#### adrenochrome triples

**adrenochrome** — 228 nodes · 242 edges · 56 relation types · 93.4% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 228                                                                                             |
| Triples (edges)   | 242                                                                                             |
| Unique predicates | 56                                                                                              |
| Confidence high   | 226 (93.4%)                                                                                     |
| Top subjects      | Adrenochrome (13), Methylene blue (7), NAD+ (4), Epinephrine (4), Carbazochrome (4)            |
| Top objects       | chemical (40), enzyme (13), protein (11), biological_process (11), medical_condition (9)        |
| Top predicates    | is (11), induces (6), promotes (5), activates (4), binds_to (4)                                 |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_adrenochrome.svg" alt="adrenochrome triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_adrenochrome.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/adrenochrome/_triples.json)

---

#### autophagy triples

**autophagy** — 179 nodes · 154 edges · 79 relation types · 89.6% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 179                                                                                             |
| Triples (edges)   | 154                                                                                             |
| Unique predicates | 79                                                                                              |
| Confidence high   | 138 (89.6%)                                                                                     |
| Top subjects      | TFEB (18), mTORC1 (14), Autophagy (8), Spermidine (7), HLH-30 (5)                              |
| Top objects       | Autophagy (15), mTORC1 (6), TFEB at S211 (5), Intermittent Fasting (3), Aging (3)              |
| Top predicates    | phosphorylates (19), activates (11), inhibits (10), regulates (8), induces (6)                  |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_autophagy.svg" alt="autophagy triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_autophagy.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/autophagy/_triples.json)

---

#### comt triples

**comt** — 228 nodes · 200 edges · 89 relation types · 83.5% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 228                                                                                             |
| Triples (edges)   | 200                                                                                             |
| Unique predicates | 89                                                                                              |
| Confidence high   | 167 (83.5%)                                                                                     |
| Top subjects      | COMT (15), Val158Met (9), D2 receptor (6), Met/Met genotype (6), Val/Val genotype (6)          |
| Top objects       | COMT (9), alternative anti-inflammatory for slow COMT (3), PFC (3), catechols (3), working memory (3) |
| Top predicates    | is (29), is_associated_with (11), modulates (7), supports (6), impacts (6)                      |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_comt.svg" alt="comt triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_comt.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/comt/_triples.json)

---

#### epigenetics triples

**epigenetics** — 830 nodes · 7,338 edges · 19 relation types · 30.3% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 830                                                                                             |
| Triples (edges)   | 7,338                                                                                           |
| Unique predicates | 19                                                                                              |
| Confidence high   | 2,225 (30.3%)                                                                                   |
| Top subjects      | Cellular Mechanisms and Regulation of Quiescence (179), Epigenetics and aging (121), Small molecule compounds that induce cellular senescence (112), Induced Pluripotent Stem Cells (96), OSKM (94) |
| Top objects       | Induced Pluripotent Stem Cells (134), Yamanaka Factors (130), Cancer (123), Cellular Reprogramming (93), Aging (77) |
| Top predicates    | co_occurs_with (4528), mentions (1803), causes (406), connected_to (322), links_to (90)         |

> [!warning]
> Epigenetics uses co-occurrence extraction, not mechanistic. Confidence % reflects textual proximity, not biological causation. This graph is for discovery and hypothesis generation, not pathway verification.

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_epigenetics.svg" alt="epigenetics triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_epigenetics.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/epigenetics/_triples.json)

---

#### neuromelanin triples

**neuromelanin** — 139 nodes · 218 edges · 25 relation types · 97.7% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 139                                                                                             |
| Triples (edges)   | 218                                                                                             |
| Unique predicates | 25                                                                                              |
| Confidence high   | 213 (97.7%)                                                                                     |
| Top subjects      | Neuromelanin (35), Autophagy (8), Parkinson's Disease (8), Dopamine (7), Alpha-Synuclein (4)    |
| Top objects       | Parkinson's Disease (28), Neuromelanin (25), Dopamine (8), Neuroinflammation (7), Alpha-Synuclein (6) |
| Top predicates    | bidirectionally_linked_with (104), is_a (30), causes (18), converts_to (12), binds_to (8)       |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_neuromelanin.svg" alt="neuromelanin triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_neuromelanin.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/neuromelanin/_triples.json)

---

#### oxidative_stress triples

**oxidative_stress** — 239 nodes · 236 edges · 127 relation types · 99.2% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 239                                                                                             |
| Triples (edges)   | 236                                                                                             |
| Unique predicates | 127                                                                                             |
| Confidence high   | 234 (99.2%)                                                                                     |
| Top subjects      | Peroxynitrite (11), Oxidative Stress (8), Superoxide Radicals (7), Hydroxyl Radicals (6), NADPH Oxidase (6) |
| Top objects       | Lipid Peroxidation (9), Superoxide Radicals (8), Hydrogen Peroxide (7), NF-kappa B (7), Nitric Oxide (6) |
| Top predicates    | produces (13), causes (13), activates (11), contributes to (9), reduces (7)                     |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_oxidative_stress.svg" alt="oxidative stress triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_oxidative_stress.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/oxidative_stress/_triples.json)

---

#### sirtuins triples

**sirtuins** — 327 nodes · 311 edges · 125 relation types · 97.7% high confidence

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 327                                                                                             |
| Triples (edges)   | 311                                                                                             |
| Unique predicates | 125                                                                                             |
| Confidence high   | 304 (97.7%)                                                                                     |
| Top subjects      | SIRT1 (65), Resveratrol (28), SIRT6 (25), SIRT3 (19), SIRT2 (14)                               |
| Top objects       | SIRT1 (8), Mitochondria (6), NFKB (6), SIRT6 (5), AMPK (4)                                     |
| Top predicates    | deacetylates (53), inhibits (30), activates (22), localizes to (10), represses (10)             |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_sirtuins.svg" alt="sirtuins triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_sirtuins.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/sirtuins/_triples.json)

---

#### senescence triples

**senescence** — 117 nodes · 270 edges · 108 relation types · 87.4% high confidence

| Metric            | Value                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 117                                                                                               |
| Triples (edges)   | 270                                                                                               |
| Unique predicates | 108                                                                                               |
| Confidence high   | 236 (87.4%)                                                                                       |
| Top subjects      | SASP (38), Senescence (17), Senescent Cells (12), Paracrine Senescence (12), Senolytics (11)      |
| Top objects       | SASP (36), Senolytics (8), Senescence (8), Aging (7), Senomorphics (7)                            |
| Top predicates    | is_suppressed_by (13), is_a_type_of (12), is_regulated_by (12), is_inhibited_by (11), is_induced_by (9) |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_senescence.svg" alt="senescence triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_senescence.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/senescence/_triples.json)

---

#### cancer triples

**cancer** — 131 nodes · 266 edges · 102 relation types · 71.8% high confidence

| Metric            | Value                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| Entities (nodes)  | 131                                                                                               |
| Triples (edges)   | 266                                                                                               |
| Unique predicates | 102                                                                                               |
| Confidence high   | 191 (71.8%)                                                                                       |
| Top subjects      | Cancer (30), Ivermectin (14), Apoptosis (13), MOMP (12), Bcl-2 family (11)                       |
| Top objects       | Ivermectin (9), Bcl-2 (9), Cancer (9), Apoptosis (8), p53 (7)                                    |
| Top predicates    | is_inhibited_by (24), is_driven_by (15), inhibits (13), includes (12), is_induced_by (11)         |

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_cancer.svg" alt="cancer triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_cancer.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/notes/cancer/_triples.json)

---

#### senescence + cancer

**senescence × cancer** — 142 nodes · 455 edges · merged cross-topic graph

| Metric            | Value                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Senescence triples | 270                                                                                             |
| Cancer triples     | 266                                                                                             |
| Total (merged)     | 455 unique edges                                                                                |
| Shared nodes       | 142 entities appearing in both topics                                                           |
| Top shared hubs    | Cancer, Senescence, p53, NF-κB, BRD4, SCAPs, SASP, Apoptosis, Aging                            |

> [!tip]
> The merged graph reveals how senescence and cancer intersect mechanistically. Shared hubs — **p53**, **NF-κB**, **BRD4**, **SCAPs**, **Aging** — are the bridges between tumor suppression and the senescence-associated secretory phenotype. These are the high-value targets for therapies that address both age-related tissue decline and cancer risk simultaneously.

<img src="https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_senescence_cancer.svg" alt="senescence + cancer merged triples" width="100%" style="max-height: 750px;">

[full size .svg](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/media/kg_graph/_triples_senescence_cancer.svg) · [link to .json](https://raw.githubusercontent.com/jkuo45/llm-wiki-jk/refs/heads/dev/tasks/triples/triples_senescence_cancer.json)

