---
title: Reading a Discovery Arrival - How Graph Metrics and Typed Edges Behave When New Entities Enter a Knowledge Graph (Ferroptosis 2012 and COVID/Vaccine as Worked Examples)
description: What happens to knowledge-graph calculations when a discovery is introduced and matures — the five-phase lifecycle traced metric-by-metric through a year-by-year replay of Ferroptosis 2012→2026 (betweenness ×1000, k-core 8→19, AA foreseeability 0.8→0.6) and COVID/Vaccine 2020→2026 (community boundary-straddling, the Lymphopenia seed as the single CD38/NAD+ bridge). Edges carry semantics and direction — the combined graph's 3,895 typed edges (inhibits/activates/promotes/protects_against + confidence + provenance) turn co-mention into implication - attribute transfer (statins inherit ferroptosis's iron/CoQ10 cloud), typed-path composition predicting unknown connections (COVID-19→SIRT3→(brake release)→ferroptosis, inferable years before the 2024 COVID-lung-ferroptosis paper), upstream/downstream lever analysis, and signed-triad inference. External worked examples (baricitinib KG win, GLP-1 degree explosion + EVOKE failure, SGLT2i, PROTACs), calibration numbers (Gysi 62% vs 0.8%), and what metrics can and cannot reveal.
created: 2026-08-30
updated: 2026-08-30
source: counterfactual + staged replay sims on graphify-out/graph.json, wiki-out/graph.json & web/public/data/edges.json (combined); scripts/04_node_analysis.py, 04_role_query.py, graphify CLI; web research (Cell, Nature, NEJM, Lancet, eLife, PNAS, FDA 2012-2026)
tags:
  - task-output
  - knowledge-graph
  - graph-metrics
  - typed-edges
  - ferroptosis
  - covid-19
  - link-prediction
  - metapath
  - network-medicine
  - discovery-lifecycle
author: []
---

# Reading a Discovery Arrival: How Graph Metrics and Typed Edges Behave When New Entities Enter the Graph

> [!note]
> **Task**: Suppose new entities arrive — a new mechanism (ferroptosis, named 2012), a new disease + intervention cluster (COVID/vaccines, 2019-2021). What happens to the *calculations* at introduction, as they mature, and as implications accrete? Do the metrics — and the fact that **edges carry semantics and direction** — help us understand implications, including connections nobody has stated yet (e.g., discovering a prior link between some entity X and cancer)?
> **Date**: 30_Aug_2026 12:40 PM PDT
> **Graph layers used**: Triples `graphify-out/graph.json` (typed, directed, confidence-scored extractions) · Wiki `wiki-out/graph.json` (co-mention recall layer, `links_to`) · **Combined** `web/public/data/edges.json` (37,318 edges = 3,895 typed-directed + 33,423 co-mention; the default UI dataset and the substrate the Assumptions Lab validates against).
> **Method**: staged year-by-year replay simulations (the discovery node starts empty, edges added in literature-timeline batches, metrics recomputed per batch), the repo's own tools (`04_node_analysis.py`, `04_role_query.py`, `graphify path/explain`), typed-edge extraction from the combined layer, and web research on real discovery arcs.

---

## 1 · The lifecycle: what each calculation "sees" as a discovery matures

A new discovery does not enter a graph all at once. It arrives as an **orphan**, accretes **seed edges**, gets **absorbed** by a neighboring field, starts **bridging** fields, and finally — if productive — **nucleates its own community**. Bibliometrics of real concepts show the matching curve: a **lag phase** (ferroptosis: 1 paper in 2012, dozens/yr through 2016; PROTACs: 2001→2014 dormancy), an **inflection** (one bridging paper or trial), **explosive edge growth** (ferroptosis >1,000 papers/yr by 2021, exponential fit R² = 0.95, ~8,000 cumulative by 2023), then **saturation and fragmentation** (ferroptosis keyword bursts 2023-24) ([Heliyon 10-yr bibliometrics](https://www.sciencedirect.com/science/article/pii/S2405844023061583), [2026 Scopus update](https://link.springer.com/article/10.1007/s00210-026-05021-5)).

Each metric is a different instrument pointed at that curve:

| Phase | Topology | Which calculations fire | What they tell you about *implications* |
| --- | --- | --- | --- |
| **0. Orphan** | 0-few edges; possibly outside the giant component | none — and that is the alarm: a discovery with no substrate is un-thinkable by the graph | nothing yet; the *missing* substrate is itself the finding |
| **1. Seed attachment** | 3-10 edges to discovery-paper vocabulary | **typed seeds**: the relation labels themselves (causes? inhibits? is_associated_with?) carry the first implications; **Adamic-Adar** ranks likely future neighbors; **PPR** shows which field's gravity well captured it | the attachment shortlist is a research-triage queue; the seed relation *types* decide whether the discovery reads as cause, cure, or mere association |
| **2. Absorption** | inside an existing community; k-core = neighborhood's | community detection, k-core, effective resistance vs anchors | depth contribution to a known field vs something else |
| **3. Bridging** | betweenness rises; community membership oscillates; resistance drops to distant anchors | betweenness, **cross-community typed paths** (§4), signed-triad checks | the discovery now *connects* fields — where unexpected drug interactions and repurposing hypotheses surface |
| **4. Nucleation** | own cluster splits off; satellites accrete | community-count/modularity deltas, satellite PageRank, role graduation (Periphery → Bottleneck/Master regulator) | a self-sustaining field; hub-status changes how you weigh its claims (and its review bias) |

Two rules the simulations support, stated carefully:

1. **Foreseeability decays with maturity.** Adamic-Adar against a thin node predicted 80% of ferroptosis's eventual edge set from the pre-2012 substrate alone (precision@10 = 0.8 on the wiki graph), falling to 0.6 by the 2024 stage — the "easy" attachments get drawn first. Triage a discovery's neighborhood **early**.
2. **Topology proposes, semantics dispose.** The undirected calculations (AA, PPR, k-core) tell you *where* implications will land; the **relation type, direction, confidence, and provenance on the typed edges tell you *what* the implication is** (causes vs cures vs mere association). Both layers exist in this repo — the combined graph fuses them (§4).

---

## 2 · Worked example A — "what if it were 2012?" (ferroptosis replayed)

Ferroptosis was named in one Cell paper ([Dixon et al. 2012](https://www.cell.com/fulltext/S0092-8674(12)00520-X)) from vocabulary that already existed — system x꜀ (1980), "oxytosis" (2001), erastin (2003), RSL3 (2008), GPX4, glutathione, iron. Simulated on the wiki graph: the node emptied, edges added in literature-timeline batches, metrics recomputed per batch (Louvain fixed seed; betweenness 400-pivot; AA precision vs the final 141-entity neighbor set):

| Stage (edges added) | deg | k-core | betweenness ×10⁻³ | community [size] top members | AA@10 / @25 | PPR flows to |
| --- | ---: | ---: | ---: | --- | :---: | --- |
| **2012** (Iron, Lipid Peroxidation, Glutathione, GPX4, ROS, Erastin, Regulated Cell Death, Mitochondria) | 8 | 8 | 0.01 | oxidative-stress/inflammation mega-community [508] | 0.8 / 0.8 | Lipid Peroxidation, GPX4, ROS, Glutathione |
| **2015** (+ System Xc−, p53, PUFA, Phospholipid) | 12 | 11 | 0.09 | [516] same world | 0.8 / 0.9 | unchanged — purely local |
| **2017** (+ ACSL4, Fenton Reaction, Lipid hydroperoxide) | 15 | 11 | 0.09 | [516] | 0.8 / 0.8 | unchanged |
| **2019** (+ FSP1, CoQ10, Ubiquinone, Mevalonate pathway, NADPH, Statins, Vitamin E) | 22 | 14 | 0.14 | [515] | 0.9 / 0.8 | unchanged |
| **2020** (+ NCOA4, Ferritin, SASP, Senescent Cells, Deferoxamine) | 27 | 15 | **1.56** | [514] | 0.8 / 0.8 | unchanged |
| **2022** (+ Ischemia-reperfusion Injury, Alzheimer's, Parkinson's, Huntington's, Stroke) | 32 | 15 | 1.86 | [509] | 0.7 / 0.6 | unchanged |
| **2024** (+ Acid Ceramidase, Senolytic, Artesunate, DPP4, Adrenochrome, Mitotane, MS, HMG-CoA reductase) | 40 | 17 | 2.88 | [503] | 0.6 / 0.6 | unchanged |
| **TODAY** (actual graph, 141 edges) | 141 | 19 | **9.86** | same mega-world [548] | 0.0 / 0.0 | + Oxidative Stress, **Cancer** |

Read as an instrument panel:

- **Betweenness is the maturation signal — ~1,000× growth (0.01 → 9.86 ×10⁻³)**, with the largest leap (×11) at the **2020 stage**, when the iron-autophagy edges (NCOA4 ferritinophagy, Ferritin, Deferoxamine) and senescence edges (SASP, Senescent Cells) landed — the moment ferroptosis stopped being a cell-death subtopic and started bridging fields. A betweenness jump is the graph saying "this node now carries implications for other fields."
- **k-core 8 → 19**: the node graduates into the wiki graph's maximum core tier (alongside [[SIRT1]]/[[NAD+]]/[[SASP]]). The repo's role classifier agrees: Ferroptosis = Sink + Master regulator + Bottleneck + Core backbone.
- **AA foreseeability was highest at birth (0.8)** and decayed as the node filled in (0.6 by 2024, 0.0 when fully attached). The top-25 *misses* at the 2012 snapshot are exactly the post-2012 literature: FSP1 (+7 yr), ALOX15/ALOX5, ASAH1/Acid Ceramidase (+12 yr), ARN14794/ARN14974 (senolytic candidates, 2023-26), Artesunate, Carmofur, 7-Ketocholesterol, CD44, STEAP3. **The miss list is the research agenda.**
- **PPR stayed local until maturity** — flow follows degree, so "where does its influence reach" is answerable only *after* implication edges exist. Flow metrics measure accumulated implications; local-similarity metrics measure future ones.
- Deleting the matured node (mirror experiment) drops 13 satellite nodes out of the triples-graph giant component and shifts PageRank onto the defense belt: NADPH −1,159, Statins −977 (triples); Vitamin K −315, HMG-CoA reductase −279 (wiki). A discovery's implications are visible as the satellite belt that would dangle without it.

### 2.1 What the typed edges add: from "linked to" to "what the link means"

The same ferroptosis neighborhood in the **combined graph's typed layer** (every edge: directed `from→to`, relation label, `confidence_score`, `sources` provenance):

```
statins        --sensitize_to---->  ferroptosis        (conf 0.75)
sirt3          --suppresses----->   ferroptosis        (conf 0.87)
mitohormesis   --protects_against-> ferroptosis        (conf 0.82, sources: triples+wiki)
mitophagy      --inhibits------->   ferroptosis        (conf 0.88)
glutathione    --protects_against-> ferroptosis        (conf 0.90)
ho_1           --regulates----->    ferroptosis        (conf 0.85)
cellular_senescence --transmits-->  ferroptosis_susceptibility (conf 0.80)
```

This is where "implication" becomes computable rather than readable: **statins get a *pro-ferroptotic* signed edge**, glutathione/mitohormesis/sirt3 get *anti-* edges — the undirected wiki graph merges all of these into one undifferentiated bubble, but the typed layer separates "therapeutic lever" (inhibit an upstream driver) from "toxic liability" (block a defense). The polarity census on the triples layer: Ferroptosis carries 8 pro-ferroptotic vs 6 anti-ferroptotic in-edges; CoQ10 is purely anti- (0 PRO / 2 ANTI); SIRT3 25 ANTI vs 19 PRO; and metformin needs *both signs at once* (ferroptosis inducer in tumors via SLC7A11-UFMylation, suppressor in diabetic kidney via NRF2) — a genuinely bipolar edge that must never be averaged.

Therapeutic implications the bridging topology + typed edges jointly surface (web-researched): statins (mevalonate→CoQ10/GPX4 depletion; PPR seeded at Statins ranks Ferroptosis **#3 of 2,996**), TZDs (ACSL4 inhibition), cariprazine (DHCR7 → ↑7-DHC → resistance, Nature 2024), bortezomib (NCOA4 ferritinophagy), cisplatin (efficacy *and* organ toxicity through the same gate). Conflict pairs for the Assumptions Lab (currently zero ferroptosis scenarios in `assumptions.json`): vitamin E protective-in-aging vs tumor-shielding (SELECT; HDL-delivered vit E shields tumors, STTT 2025); GPX4 inhibition kills tumors/senescent cells vs impairs CD8/CAR-T (Lip-1 rescues CAR-T in vivo, 2025); sorafenib-as-inducer contested (Zheng/Conrad 2021); DHODH-brequinar (Nature 2021) vs FSP1-off-target artifact (Nature 2023); deferiprone *worsened* PD (FAIR-PARK-II) and AD cognition. Clinical reality anchor: no purpose-built ferroptosis drug past Phase 1 (CNSI-Fe(II), NCT06048367, n=19, completed Feb 2025) ([Ubellacker & Dixon, Nat Cancer 2025](https://www.nature.com/articles/s43018-025-01037-7)).

---

## 3 · Worked example B — COVID/vaccines: a *disease cluster* arriving into a longevity graph

A pathogen arrives as a **cluster** (virus + disease + symptoms + comorbidities + eventually an intervention family), with clinical edges before mechanistic ones. Replay on the wiki graph:

| Stage | deg | k-core | btw ×10⁻³ | community [size] | PPR flows to |
| --- | ---: | ---: | ---: | --- | --- |
| 2020a clinical (COVID-19, Inflammation, Cytokines, IFN-γ, Immune System) | 5 | 5 | 0.04 | senescence/inflammation world [325] | Inflammation, Immune System, IFN-γ |
| 2020b comorbidity (Diabetes, Obesity, Hypertension, Aging) | 9 | 8 | 0.15 | [325] | Inflammation, Aging, Immune System, Obesity |
| 2021 mechanism (CD38, NAD+, PARP, NF-κB, NLRP3, Viral Replication) | 15 | 12 | 0.27 | **aging/NAD+ world [419]** — flips | Inflammation, **NAD+**, Aging, NF-κB |
| 2021b senescence (+ Cell-Fusion-Induced Senescence, ALI, Sepsis) | 18 | 13 | 0.32 | senescence world [326] — flips **back** | Inflammation, NAD+, NF-κB, Aging |
| 2023 long-covid (+ Long COVID, Mitochondrial Dysfunction, ATP, Complex I/III, Methylene blue) | 24 | 15 | 0.69 | [326] | unchanged |
| TODAY (actual, 20 edges) | 20 | 11 | 0.34 | aging/NAD+ world [399] | Inflammation, NF-κB, Aging, Immune System |

Three readings worth internalizing:

1. **Community oscillation = boundary-straddler signature.** The cluster's Louvain membership flips between the senescence/inflammation world and the aging/NAD+ world depending on which edge batch dominates. Unstable community assignment = node on a field boundary — for a longevity graph exactly where a pathogen should sit, and the fingerprint of "this discovery will reframe existing one-way edges as a feedback loop" (severe COVID → CD38↑ → NAD+↓ → sirtuin loss → inflammaging → worse outcomes → more CD38).
2. **One seed edge opens or closes an entire mechanistic corridor.** Granting the 2020 thin node a single clinical observation — **Lymphopenia** — put **CD38 at predicted-rank #6 and NAD+ at #7** (Adamic-Adar out of 2,995 candidates); without that seed both fall out of the top-25. CD38-NADase-driven NAD+ depletion in severe COVID was then confirmed by the 2020-21 literature (Heer et al., JBC 2020; Physiol Rev 2021). Careful with what this means: **the graph predicted edges that science later created and the wiki still has not drawn** — the prediction was validated against the *literature*, not today's edge list; graph and literature are two different ground truths, and the gap between them is a to-do list.
3. **Replayed vs actual wiring quantifies what's missing.** The 2021-mechanism replay (CD38/NAD+/PARP wired directly) reaches k-core 15 / betweenness 0.69 vs the actual graph's k-core 11 / 0.34 with indirect wiring via `[[Lymphopenia]]`/`[[Viral Replication]]`. The graph is *less integrated with the NAD+ core than its own content justifies* — and in the triples layer SARS-CoV-2 has 2 edges and is not even in the giant component (`graphify path "SARS-CoV-2" "NAD+"` → no path), while the combined layer carries `sars_cov_2 --[disrupts]--> NAD+_metabolism` as a typed edge. Same corpus, three layers, three different verdicts — **always check which layer a metric ran on.**

The vaccine sub-cluster adds a *stratification* lesson: the wiki has exactly one vaccine node (`shingles_vaccine`); no mRNA-vaccine/LNP/PEG/IgG4/myocarditis/ACE2/spike nodes — a future vaccine discovery would arrive as an orphan. And the highest-quality 2024-26 evidence is *conditioned* (myocarditis ~150/10⁶ second doses in males 12-15, steep age gradient; IgG4 switching dose-count-dependent, plateaus after dose 3) — a single averaged edge vaccine→myocarditis **washes out exactly the heterogeneity that is the clinical truth**; the graph needs edge attributes (dose × age × sex × evidence tier) or hyperedges ([myocarditis meta, Epidemiol Rev 2025](https://pubmed.ncbi.nlm.nih.gov/39673764/); [IgG4, Sci Immunol 2023](https://www.science.org/doi/10.1126/sciimmunol.ade2798)).

---

## 4 · Edges have semantics and direction: how typed edges reveal connections nobody has stated

This is the capability that turns the graph from an index into an inference engine. The repo's combined layer carries **3,895 typed, directed edges** among 37,318 total — 1,033 distinct relation labels, the most common typed predicates being `inhibits` (220), `activates` (170), `deacetylates` (111), `promotes` (104), `reduces` (79), `induces` (65), `causes` (64), `suppresses` (56), `regulates` (43) — each with a `confidence_score` and `sources` provenance (`triples`, `wiki`, or both). Four concrete mechanisms, all computable today:

### 4.1 Attribute transfer — a new edge moves an entire attribute cloud

When `statins --[sensitize_to]--> ferroptosis` was extracted, statins did not merely gain one neighbor: they **inherited ferroptosis's attribute cloud** — iron overload, lipid peroxidation, PUFA membranes, GPX4/CoQ10 defense, NCOA4 ferritinophagy — none of which the statin note ever mentions. Computationally: PPR/paths from statins now reach the iron/lipid-peroxidation machinery, and any *new* discovery in that cloud (say, 7-DHC in 2024) is instantly one hop from statins. This is the general form of "we didn't know X was connected to cancer": **a new edge to a hub silently pre-wires X to everything the hub already knows.** COVID demonstrates it in the repo: the single typed edge `sars_cov_2 --[disrupts]--> NAD+_metabolism` pulls the virus into the CD38/PARP/sirtuin/inflammaging attribute space with no further edges.

### 4.2 Typed-path composition — predicting connections that exist in neither layer

Relation types **compose along paths**, generating new typed hypotheses. Real chain from the repo's typed edges:

```
covid_19 --[is_associated_with]--> sirt3          (conf 0.85)
sirt3    --[suppresses]----------> ferroptosis    (conf 0.87)
⟹  hypothesis:  covid_19 --[relieves the brake on]--> ferroptosis
```

Two typed edges that existed in the graph *imply* the COVID-lung-ferroptosis connection that the experimental literature only established in 2024 ([Qiu et al., Nat Commun 15:3816](https://www.nature.com/articles/s41467-024-48055-0) — ferroptosis signature in fatal COVID lungs). No `covid_19 ↔ ferroptosis` edge exists in either repo layer; the connection is a **two-hop typed inference**. Generic form of the user's example: `X --[r1]--> Y --[r2]--> cancer` composes to `X --[inferred r1∘r2]--> cancer` — e.g. `X inhibits Y` + `Y promotes cancer` ⇒ `X --[candidate suppressor]--> cancer` (metformin/SLC7A11 is exactly this shape; so is baricitinib, §5). This is the metapath idea behind Hetionet's DWPC features and behind ROBOKOP's template queries: **relation-typed paths, not undirected similarity, are the feature engine of drug repurposing.** Adamic-Adar (undirected, untyped) cannot express "inhibits-an-activator-of"; typed path enumeration can — a missing pass in the current `04_link_prediction.py`.

### 4.3 Direction separates levers from consequences

With direction, in-edges and out-edges answer different questions. For ferroptosis: the pro-ferroptotic **in-edges** (ACSL4, NCOA4, p53, Iron, Lipid Peroxidation — and, inferred, COVID-19 via §4.2) are the **druggable upstream levers**; the anti- in-edges (GPX4, FSP1, SIRT3, Glutathione, Mitohormesis) are the **defense system** whose inhibition is a *tumor* strategy and whose support is a *healthy-aging* strategy — the same node, two opposite therapeutic programs, disambiguated only by edge sign and direction. Directed PageRank/PPR (the triples graph stores in/out degree per node: Ferroptosis in 105 / out 83 in the wiki layer) approximates "what does this drive" vs "what drives this."

### 4.4 Signed triads — inferring the sign of unknown edges

Typed signs enable balance-style inference for **unknown** edges: if A inhibits B and B inhibits C, A likely *relieves* pressure on C ("enemy of my enemy"). Repo instance: `statins --[sensitize_to]--> ferroptosis` (+) and `mitohormesis --[protects_against]--> ferroptosis` (−) ⇒ predict a **statin↔mitohormesis antagonism** edge (CoQ10 depletion undermining the hormetic defense) — no such edge exists in the graph, no paper states it directly, and it is checkable. This is the classic signed-link-prediction task (Leskovec et al. 2010) transplanted to biology, and it is the natural generator of **Assumptions Lab conflicts**. The lab has become an *applied* mechanism, not just a registry: curated scenarios live in `assumptions.json`, and the build **applies them to the graph before any metric is computed** — document-level `excludedSources` (with `keepTripleIds` exceptions) drop noisy triples, and the machine-managed `selections` block (canonical conflict stances, resolved into directional edges) removes/adds edges (removals win over extraction, adds win dedupe). Canonical selections are materialized from the DB by `07_sync_assumptions.py` *before* `03_rebuild_from_triples.py`; provenance lands in `web/public/data/assumptions-build.json` and the "Assumption State" section of GRAPH_REPORT.md. Curation aids: `03_triple_lookup.py <id>` maps triple ids → web edge keys; `03_triple_lookup.py --doc-stats` surveys documents for exclusion candidates. The consequence for this report: when a curated stance says "this extracted edge is wrong" or "these two typed edges imply a missing edge", the correction is *materialized into the graph itself* — and every downstream metric, including the replay metrics above, recomputes against the corrected topology.

### 4.5 Caveats that keep typed inference honest

- **Extraction noise**: typed edges come from LLM extraction; confidence 0.5 edges (e.g. `covid_19 --[ameliorates]--> NMN`, a case-series artifact) propagate through paths just like solid ones. Weight paths by minimum edge confidence.
- **Composition is not deduction**: two true edges do not guarantee a true composed edge (context, dose, tissue all drop out). Typed paths are *hypothesis generators* with a calibrated base rate (§5, Gysi: ~10-30% precision of top-ranked candidates vs 0.8% unguided).
- **Layer discipline**: classic centrality scripts (`04_node_analysis.py`) run on undirected projections — direction is collapsed *in those calculations*, though the typed layer remains available for path-level passes. The wiki-only layer is genuinely polarity-blind (`links_to`); the combined layer is not. State the layer with every number.

---

## 5 · More worked examples from outside the repo (web research)

**Baricitinib — typed composition as a product.** BenevolentAI's Feb-2020 query was exactly §4.2 operationalized: [endocytosis module]—inhibited-by—[approved drug]—inhibits—[cytokine module]. Baricitinib surfaced as the **only approved compound bridging both typed modules at achievable exposure**: 16 approved dual-inhibitors surfaced → 7 survived the PK filter → 1 winner. Hypothesis published [Lancet Feb 4, 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7137985/); FDA EUA Nov 19, 2020; COV-BARRIER 38% mortality reduction. **~9.5 months from graph hypothesis to authorization.** Note what the graph did *not* contain: pharmacokinetics — the decisive filter was an attribute outside the graph, applied by humans.

**GLP-1 agonists — the degree explosion across five communities.** 2005-2015: endocrine leaves. Then one community edge per outcomes trial: cardiology (LEADER 2016, MACE −13%), obesity (STEP 2021), cardiology *without* diabetes (SELECT Nov 2023, MACE −20% — [NEJM](https://www.nejm.org/doi/full/10.1056/NEJMoa2307563)), nephrology (FLOW 2024, −24%, stopped early), sleep medicine (first OSA drug, Dec 2024), hepatology (MASH 62.9% vs 34.3% resolution; FDA indication Aug 2025), addiction (semaglutide cut heavy-drinking days >70% in AUD, [Lancet May 2026](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00305-3/fulltext)). By 2026 semaglutide is one of the highest-degree, highest-bridging drug nodes in medicine. The honest metric lesson cuts both ways: the surrogate links (neuroinflammation, brain GLP-1R) generated hypotheses *after* LEADER's surprise, and the most fragile edge was **analogical** (obesity→Alzheimer's) — it **snapped when tested**: EVOKE/EVOKE+ negative (announced Nov 24, 2025; CSF biomarkers improved, CDR-SB missed; [statement](https://www.alz.org/news/2025/alzheimers-association-statement-oral-semaglutide-phase-3-topline-data-release)); exenatide failed Phase 3 in Parkinson's the same way. **Analogical edges are a graph's most profitable and most breakable links** — and §4.2's composition rule should carry an "analogical vs mechanistic" flag precisely for this reason.

**SGLT2 inhibitors — direction is not predictable from distance.** Empagliflozin was a glucose-excretion leaf when EMPA-REG (Sept 2015) delivered −38% CV death. Heart failure (DAPA-HF 2019, ~half non-diabetics), HFpEF (2021), kidney (DAPA-CKD 2020, EMPA-KIDNEY 2022 −28%) followed. Topologically the node had **no edge to myocardium at all** — network distance said nothing about benefit direction; the mechanism neighborhood (ketone bodies, NHE-1, autophagy) was reverse-engineered post hoc. The newest edge — dementia — repeats the pattern: observational ORs 0.45-0.62, pooled RCT null (23 RCTs, n≈160k, 2025). **Observational co-occurrence edges overweight confounded links; RCT-grade edges arrive years later and can erase them** — another argument for provenance/evidence-tier attributes on edges.

**PROTACs — low degree is a state, not a verdict.** Named 2001; ~18 years dormant (degree ≈ 10, zero clinical edges). First-in-human 2019, proof-of-concept 2022, Phase 3 by 2026 — and the mechanism introduced a **new relation type** ("degrades") that rewired chemistry↔ubiquitin↔oncology into its own community. During dormancy the metrics said "peripheral, k-core 1"; the correct reading was "**unrealized bridge**" — indistinguishable from "dead end" by topology alone. Node provenance (who works on it, what tools exist) must be read alongside degree.

**Calibration numbers for any implication claim:**

| Method | Validation | Number |
| --- | --- | --- |
| Gysi et al. 12 pipelines ([PNAS 2021](https://www.pnas.org/doi/10.1073/pnas.2025581118)) | 918 drugs screened | most pipelines AUC 0.52-0.66, **mutually uncorrelated top lists**; consensus 62% hit vs 0.8% unguided |
| Rephetio/Hetionet ([eLife 2017](https://elifesciences.org/articles/26726)) | post-hoc indications / trials | AUROC 85.5% / 70.0% (97.4% on own training = circular) |
| Cheng et al. ([Nat Commun 2018](https://www.nature.com/articles/s41467-018-05116-5)) | 4 proximity predictions, 220M-patient EHR | 2 of 4 confirmed |
| DRKG embeddings (2020) | all FDA drugs ranked for COVID | dexamethasone rank 5 (validated) — **ribavirin/azathioprine at ranks 1-2 failed** |
| BenevolentAI (2020) | baricitinib shortlist | 16 → 7 (PK) → 1 winner |
| Failure column | ivermectin, famotidine, hydroxychloroquine, azithromycin | top-ranked by *several* KG pipelines; all null — typed or not, proximity finds *thematic* neighbors, not efficacy |

---

## 6 · So — do the metrics (plus typed edges) aid understanding of implications?

**Yes, as triage instruments, gap detectors, and typed-inference engines — no, as oracles.** Division of labor supported by the case studies:

| Calculation | What it genuinely reveals | Failure mode |
| --- | --- | --- |
| **AA/Resource-All. attachment** (thin node) | foreseeable neighborhood — triage queue; 80% at birth, decays as node fills | polarity-blind & direction-blind; hub bias without degree-matched nulls; needs one clinically bridging seed (the Lymphopenia lesson) |
| **Typed-path composition** (§4.2) | **unknown connections with inherited semantics** (COVID→SIRT3→ferroptosis-brake-release; X→Y→cancer) | composition ≠ deduction; extraction noise propagates; flag analogical vs mechanistic paths (EVOKE) |
| **Attribute transfer via a new hub edge** (§4.1) | a single new edge pre-wires the node to the hub's whole cloud | depends on hub quality; garbage-hub edges spread garbage |
| **Signed triads / balance** (§4.4) | sign of unknown edges; Assumptions-Lab conflict mining | signs are extraction-derived; triads suggest, never prove |
| **Direction (in/out edges)** | upstream levers vs downstream consequences; two opposite therapeutic programs on one node | only as good as the extraction's orientation (is_inhibited_by vs inhibits bookkeeping) |
| **PPR from the node** | field gravity well; where influence accumulates (Statins→Ferroptosis #3) | accumulated, not future, implications; local until mature |
| **Betweenness trajectory** | maturation/bridging (×11 leap at ferroptosis-2020; baricitinib's constrained bridging) | percentile churn re-grades 21-111 nodes per insertion; needs a null |
| **Community oscillation** | boundary-straddler fingerprint (COVID flipping senescence↔NAD+ worlds) | Louvain seeds/labels differ between tools — compare membership descriptions, not ids |
| **k-core** | structural depth (ferroptosis 8→19) | inherits neighborhood's core; says nothing about evidence quality |
| **R_eff z vs anchors** | unwired-hub detector (Long COVID z = +0.4 = content-gap alarm) | sensitive to layer/density differences (triples vs wiki disagreed entirely on COVID) |
| **Satellite PageRank deltas** | dependence web (NADPH/CoQ10/HMG-CoA-reductase/Vitamin-K belt) | renormalization artifacts (RSL3 +629 when the hub is deleted) |
| **Growth-curve phase** | when triage is valuable (early) and when hub-status inflates bias (late) | low degree ≠ low value (PROTACs, 18 yr) |

**What still requires attributes, not topology**: effect size, dose/tissue/age context, evidence tier, pharmacokinetics (the baricitinib filter), and polarity *when only the wiki layer is used*. The combined graph's typed subset carries relation + direction + confidence + provenance — the substrate is already in place; the calculations that exploit it (typed-path passes, signed-triad mining) are the missing pieces.

---

## 7 · Playbook

1. **On every new note/entity**: thin-node AA attachment + PPR field assignment *immediately* (foreseeability decays); log the top-25 as the review queue — and record which *seed relation types* were granted, since they gate the mechanistic corridor (the Lymphopenia effect).
2. **Add a typed-path pass** (`04_` candidate): enumerate 2-hop compositions over the combined graph's 3,895 typed edges (min-confidence-weighted, analogical flagged), rank by composed confidence × AA support — this is the "unknown connection" engine (X→cancer class) and would have ranked COVID→ferroptosis two years early.
3. **Mine signed triads** for Assumptions-Lab conflicts (enemy-of-enemy and double-positive triangles); register them in `assumptions.json` and resolve stances — the build now *applies* the lab to the graph (selections → directional edge adds/removals; `excludedSources` for noisy documents), so resolved conflicts change every downstream metric. Run order for any triples/assumption change: `03_normalize_triples_schema.py` → `07_sync_assumptions.py` (materialize canonical selections) → `03_rebuild_from_triples.py` → `05_build_combined.py` / `05_rebuild_from_wiki.py` → `07_sync_to_db.py` + `07_sync_content.py`. Curation aids: `03_triple_lookup.py <id>` (triple → web edge key) and `03_triple_lookup.py --doc-stats` (exclusion candidates). Current registry: 1 scenario, zero ferroptosis/COVID coverage.
4. **Track betweenness/k-core trajectory per entity across rebuilds** (extend `graph-diff.json`) — the maturation signal that flagged ferroptosis-2020 and baricitinib-style bridging.
5. **Close the literature-vs-graph gaps the runs exposed**: direct SARS-CoV-2↔CD38/NAD+/PARP edges (k-core 11→15, betweenness ×2), SARS-CoV-2↔ferroptosis (Nat Commun 2024 — currently only a 2-hop typed implication), Metformin↔Long-COVID-prevention (COVID-OUT), negative-RCT annotation on COVID-19↔NMN.
6. **Carry attributes before adding vaccine/stratified nodes** (dose×age×sex, evidence tier) — averaging erases the finding.
7. **Weight every predicted implication by the §5 calibration priors**: top-K graph output is a ~10-30%-precision hypothesis stream vs 0.8% unguided — valuable, never oracular.

---

## 8 · Sources

**Repo artifacts & tools**: `graphify-out/graph.json` · `wiki-out/graph.json` · `web/public/data/edges.json` (combined; 3,895 typed edges verified) · `web/public/data/link-prediction.json` · `web/public/data/assumptions.json` (+ applied state: `assumptions-build.json`, GRAPH_REPORT "Assumption State"; canonical selections synced by `07_sync_assumptions.py`) · `04_node_analysis.py` · `04_role_query.py` · `03_triple_lookup.py` · replay/counterfactual harnesses (temp `replay_growth.py`, `sim_new_discovery.py` — promote to `scripts/` if adopted).

**Typed-edge & repurposing methods**: [Rephetio/Hetionet (DWPC metapaths), eLife 2017](https://elifesciences.org/articles/26726) · [Guney et al., Nat Commun 2016](https://www.nature.com/articles/ncomms10331) · [Cheng et al., Nat Commun 2018](https://www.nature.com/articles/s41467-018-05116-5) · [Gysi et al., PNAS 2021](https://www.pnas.org/doi/10.1073/pnas.2025581118) · [ROBOKOP (template queries, resistance ranking)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6954664/) · [DRKG](https://github.com/gnn4dr/DRKG) · [SPOKE](https://spoke.ucsf.edu/) · [signed link prediction, Leskovec et al. 2010](https://cs.stanford.edu/people/jure/pubs/signpsw.pdf) · [Insilico Phase 3 IPF, 2026](https://insilico.com/news/xmjsn4l091-insilico-initiates-phase-iii-clinical-tr)

**Discovery arcs**: [baricitinib hypothesis, Lancet 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7137985/) · [COV-BARRIER, Lancet Respir Med 2021](https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(21)00331-3/fulltext) · [SELECT, NEJM 2023](https://www.nejm.org/doi/full/10.1056/NEJMoa2307563) · [FLOW, NEJM 2024](https://www.nejm.org/doi/abs/10.1056/NEJMoa2403347) · [FDA OSA 2024](https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-obstructive-sleep-apnea) · [FDA MASH 2025](https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-serious-liver-disease-known-mash) · [AUD semaglutide, Lancet 2026](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00305-3/fulltext) · [EVOKE negative, Nov 2025](https://www.alz.org/news/2025/alzheimers-association-statement-oral-semaglutide-phase-3-topline-data-release) · [EMPA-REG, NEJM 2015](https://www.nejm.org/doi/full/10.1056/NEJMoa1507524) · [SGLT2-dementia review 2025](https://link.springer.com/article/10.1007/s40120-025-00832-9) · [Arvinas pipeline](https://www.arvinas.com/research-and-development/pipeline) · [ferroptosis bibliometrics, Heliyon 2023](https://www.sciencedirect.com/science/article/pii/S2405844023061583)

**Biology anchors**: [Dixon et al., Cell 2012](https://www.cell.com/fulltext/S0092-8674(12)00520-X) · [COVID lung ferroptosis, Nat Commun 2024](https://www.nature.com/articles/s41467-024-48055-0) · [Ubellacker & Dixon, Nat Cancer 2025](https://www.nature.com/articles/s43018-025-01037-7) · [7-DHC, Nature 2024](https://www.nature.com/articles/s41586-023-06983-9) · [deferiprone in PD, Nat Rev Neurol 2022](https://www.nature.com/articles/s41582-022-00771-1) · [CD38/NAD in COVID, PMC8805734](https://pmc.ncbi.nlm.nih.gov/articles/PMC8805734/) · [metformin LC prevention, Lancet ID 2023](https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(23)00299-2/fulltext) · [myocarditis meta, Epidemiol Rev 2025](https://pubmed.ncbi.nlm.nih.gov/39673764/) · [IgG4, Sci Immunol 2023](https://www.science.org/doi/10.1126/sciimmunol.ade2798)
