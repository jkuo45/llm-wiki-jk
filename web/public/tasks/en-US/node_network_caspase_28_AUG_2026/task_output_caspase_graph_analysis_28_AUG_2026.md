---
title: Caspases - Graph (wiki + triples) Analysis + Literature Synthesis
description: Multi-metric network analysis of all caspase nodes on the combined triples+wiki graph (sources - 13 caspase entities; targets - cell-death, senescence, and apoptosis-regulator anchors), with per-layer decomposition, paired with a literature research deep-dive on caspase classification, substrates, aging biology, and pharmacology.
created: 2026-08-28
tags:
  - task-output
  - caspases
  - apoptosis
  - pyroptosis
  - network-analysis
  - inflammaging
  - senescence
---

# Task Output - Caspase Network Deep Dive - 28 August 2026

**Scope:** Deep dive into the caspase family as represented in the vault. Two parts:
1. **Network analysis** — multi-metric (layer decomposition, community detection, centrality, role classification, path structure, personalized PageRank, link prediction) over the **combined graph** (`web/public/data/nodes.json` / `edges.json`, 4084 nodes / 31,842 edges — the canonical triples ∪ wiki union, with each edge tagged by source layer), with 13 caspase sources × 15 target anchors (cell-death modalities, senescence hubs, apoptosis machinery). Raw outputs in this directory: `raw_caspases_combined_graph.txt`, `raw_caspases_wiki_graph_node.txt`, `raw_caspases_wiki_graph_link_prediction.txt`; roles from `web/public/data/node_roles.json`.
2. **Literature deep-dive** supplementing the graph with established and emerging caspase biology (classification, activation platforms, substrates, aging, pharmacology).

Graph mode note: the **combined graph is the primary substrate** throughout; wiki-only and triples-only figures are given as layer decompositions where they differ. The triples layer under-represents caspases severely (Caspase-1/4/12 and Executioner Caspase have degree 0–1 there), so the combined view is what makes the family analysis sound — and it surfaces edges the wiki layer alone hides (see §1.1).

---

## Part 1 — Network Analysis Findings

### 1.1 Structural map: two communities, one family

Louvain community detection splits the caspases exactly along their biological class boundary:

| Community | Members | Caspases |
| --- | --- | --- |
| c16 **Apoptosis** (57 nodes) | Apoptosis, Caspase, Executioner Caspase, Apoptosome, XIAP | Caspase-2, -3, -6, -7, -8, -9, -10, -12 |
| c22 **Inflammaging** (54 nodes) | Pyroptosis, Inflammasome, Gasdermin D | Caspase-1, -4, -5, -11 |

The initiator/executioner split is *not* resolved inside c16 — extrinsic (CASP-8/10), intrinsic (CASP-9), and executioner (CASP-3/6/7) caspases share one community, correctly reflecting that the wiki treats apoptosis as one tightly cross-linked module (k-core 15–16 for CASP-3/8/9).

**Caspase-2 is an outlier in the wiki layer**: it sits in a tiny "Phosphorylation" community (id 49, size 19), not with the apoptosis module. The combined graph corrects this picture — see §1.1b.

The combined dataset's own community labels (triples-layer metadata, which the merge prefers) draw the boundaries even finer: **Caspase-2/7/10/12/Caspase group into a dedicated "Caspase-2" community**, Caspase-1/11 cluster with Pyroptosis/Inflammasome under "Senescent Cells", and only Caspase-3/6/9 + Apoptosome/XIAP sit in "Apoptosis". Either way, the two-block family structure (death program vs inflammatory wedge) is stable across all three views.

### 1.1b Layer decomposition: what the triples layer adds

Per-node degree decomposition over the combined union (T = triples edge, W = wiki edge):

| Caspase | triples deg | wiki deg | combined deg | Combined community |
| --- | --- | --- | --- | --- |
| Caspase-3 | 7 | 50 | **57** | Apoptosis |
| Caspase-8 | 4 | 37 | **41** | Caspase-8 |
| Caspase-9 | 7 | 30 | **37** | Apoptosis |
| Caspase-7 | 1 | 21 | **22** | Caspase-2 |
| Caspase-2 | 4 | 10 | **14** | Caspase-2 |
| Caspase-10 | 2 | 12 | **14** | Caspase-2 |
| Caspases | 2 | 16 | **18** | Apoptosis |
| Caspase-6 | 3 | 9 | **12** | Apoptosis |
| Caspase-1 | 1 | 24 | **25** | Senescent Cells |
| Caspase-5 / -11 | 2 / 1 | 8 / 9 | **10 / 10** | Paracrine Senescence / Senescent Cells |
| Caspase-4, Caspase-12, Executioner Caspase | 0–0–0 | 10 / 6 / 10 | **10** | Inflammaging / Caspase-2 / Apoptosis |

(The merge rule prefers the triples community label for shared nodes, so e.g. Caspase-1 carries its triples assignment "Senescent Cells" — the wiki Inflammaging wedge from §1.1 is unchanged topologically.)

**Edges only the combined view exposes** (T-flagged, absent from the wiki layer):

- **`Caspase-2 → PIDDosome / PIDD / RAIDD` (deg-2 each) and `→ CDK1`** — the PIDDosome activation axis **does exist in the vault, in the triples layer only**. Caspase-2's wiki community-orphaning is therefore a *layer artifact*, not missing knowledge (this revises the wiki-only finding in §1.1).
- `Caspase-9 → c-ABL / ERK / Akt`, `Caspase-8 → SHP1 / SRC/LYN kinases`, `Caspase-3 → Ivermectin / melittin` (the repurposing cluster), `Caspase-6 → Lamins` — phosphorylation/kinase wiring is the triples layer's distinctive contribution.
- `Caspase-1 / -11 / -5 → Inflammasome / Noncanonical Inflammasome / IL-1α` — the only triples-layer inflammasome edges; CASP-1 has degree 1 there.

**Takeaway:** the triples layer contributes the caspases' *regulatory/kinase and inflammasome-scaffold* edges; the wiki layer contributes the *death-program* edges. Any caspase analysis that uses only one layer will systematically miss half the story — e.g. a wiki-only run falsely reports "no PIDDosome".

### 1.2 Centrality, k-core nesting, and biological roles

Role classes come from the vault's per-node classifier (`scripts/_node_roles_lib.py`); roles are computed on the triples layer, so role *classes* (not magnitudes) are the signal — read them alongside the centrality tiers below. Note on provenance: the combined dataset's *stored* degree/PageRank/k-core fields carry the triples layer's values (the merge prefers triples metadata), so the degree column here is the true combined union (§1.1b) while PageRank/k-core are layer artifacts — the union recomputation in `raw_caspases_combined_graph.txt` confirms the same ordering:

| Caspase | Degree | k-core | Roles | Reading |
| --- | --- | --- | --- | --- |
| **Caspase-3** | 57 | 16 | **Sink**, Bottleneck | Highest-degree caspase, top PageRank (0.00129) — the family's hub; terminal demolition protease everything drains into |
| **Caspase-8** | 41 | 15 | **Sink, Master regulator, Bottleneck** | Highest out-degree (30); the only caspase rated a master regulator — the death-receptor convergence point the whole family routes through |
| **Caspase-9** | 37 | 15 | **Sink**, Bottleneck | Top PageRank after CASP-3 (0.00120); apoptosome anchor, same sink signature as CASP-3 on the intrinsic arm |
| Caspase-1 | 25 | 13 | Periphery | Anchors the inflammasome side; *Periphery* reflects its degree-1 triples stub — the triples layer's biggest caspase blind spot (combined degree 25) |
| Caspase-7 | 22 | 12 | Spreader | Embedded in the apoptosis core |
| Caspase-2 | 14 | 10 | Bottleneck | Small but non-redundant connector — and the combined graph restores its PIDDosome axis (§1.1b), consistent with its DDR position |
| Caspases | 18 | 12 | Spreader | Out-bound definitional hub |
| Caspase-10 | 14 | 10 | Spreader, Bottleneck | Broadcasts more than it receives (matches its weak Adamic-Adar standing) |
| Caspase-5 / -11 / -4 | 10 | 10 | Spreader (5), Periphery (11), Spreader+Module (4) | Near-duplicates (Jaccard 0.82 between each pair) — the noncanonical-inflammasome trio is one wedge of context |
| Caspase-6 | 12 | 9 | Spreader | Executioner arm's periphery |
| Caspase-12 | 6 | 5 | Spreader | Weakest caspase in the graph |

**Caspase-4/5/11 Jaccard = 0.818** — the highest redundancy in the entire source set. Their notes are interchangeable in link topology; if consolidation is ever desired, these three form a natural `_link/`-style merged treatment (though distinct entity notes are biologically defensible: 4/5 human, 11 murine).

**Cross-layer coherence:** CASP-8/3/9 are the load-bearing spine in both layers' metrics, while CASP-1 — the flagship of inflammaging — is a triples-layer artifact of near-absent `_triples.json` wiring. Any triples rebuild should prioritize the inflammasome wedge.

### 1.3 Shortest-path structure: who bridges to what

Computed on the **combined giant component** (3839 nodes; routing unchanged from the wiki layer — the triples layer's extra caspase edges attach outside all shortest paths reported below).

- **Caspase-1 → Pyroptosis / Inflammasome**: direct 1-hop edges (its native territory). Reaching **Ferroptosis** takes 81 distinct shortest paths through ~20 bridge nodes (NLRP3 Inflammasome, IL-1β/IL-18, AIM2, Cardiolipin, MCC950…), and reaching **Cellular Senescence** runs through only 5 bridges (Inflammaging, Inflammation, Paracrine Senescence, Idiopathic Pulmonary Fibrosis, Drosha). The sparse senescence bridge set is a genuine graph finding: **CASP-1's connection to senescence is mediated almost entirely by the inflammaging narrative**, not by direct molecular links.
- **Caspase-3/8/9 → Apoptosis**: combined Adamic-Adar proximity dominates (CASP-3 15.9, CASP-8 12.3, CASP-9 10.7, CASP-7 6.6) — the death module's spine is well covered, and the union *raises* CASP-3 to the top (triples-layer kinase edges sharpen its shared-neighbor overlap).
- **Weakest apoptotic wiring**: Caspase-12 (AA 1.94, no inflammasome/pyroptosis proximity at all); Caspase-10 (AA 4.3 but low degree, Jaccard with CASP-8 only 0.26).
- **Caspase-2's strongest combined anchor is Apoptosis itself (AA 4.18)** — ahead of p53 (1.38) and SASP (0.33). The union (which carries its PIDDosome/CDK1 edges) confirms CASP-2 belongs in the death program; the missing direct edge to Apoptosis is the defect, not the biology.

### 1.4 Cross-modal death pathways (PPR flow seeded at each target)

Personalized PageRank on the **combined giant component** reveals which caspases each death modality "flows" to:

| Seeded at | Top caspases (rank / score) | Interpretation |
| --- | --- | --- |
| Pyroptosis | **CASP-1 #5 (0.0095)**, CASP-4 #10, CASP-11 #11, CASP-5 #12 | clean inflammatory-caspase signature |
| Inflammasome | CASP-1 #7 (0.0075), CASP-4 #16, CASP-11 #18, CASP-5 #19 | same wedge |
| Apoptosis | CASP-3 #22 (0.0023), CASP-8 #29, CASP-9 #47 | clean apoptotic signature; CASP-4/5/11 sink to rank ~1400+ |
| Necroptosis | **CASP-8 #25 (0.0029)** | correct — CASP-8 is the known necroptosis gatekeeper (inhibits RIPK1/RIPK3); nice emergent capture |
| Gasdermin D | CASP-4 #7 (0.0148), CASP-11 #8, CASP-5 #9, CASP-1 #16 | GSDMD cleavage partners correctly grouped |
| Apoptosome / XIAP / Executioner Caspase | CASP-3 #3, CASP-7 #5–8, CASP-9 #5–6 | intrinsic-pathway machinery recovered exactly |
| Ferroptosis | all caspases rank #286–2167 | **no caspase owns ferroptosis** in this graph — correct (caspase-independent death), though CASP-8/GSDMD/caspase-3–mediated ferroptosis potentiation in the literature is a coverage gap |
| Senescence / SASP / Autophagy | all caspases rank #278–2167, best is always CASP-3 (#278/#411/#455) | **senescence–caspase linkage is the graph's weakest region** |

Combined-graph ranks track the wiki-layer run within a few places throughout — the conclusions are layer-robust; the union's extra edges sharpen scores without reordering tiers.

### 1.5 Predicted missing connections (link prediction)

Adamic-Adar over non-adjacent pairs, from complementary views: the canonical artifact (`04_link_prediction.py` → `web/public/data/link-prediction.json`, top-150 global pairs over the triples layer), the wiki-layer sweep (`raw_caspases_wiki_graph_link_prediction.txt`), and the **primary combined-graph sweep** (`raw_caspases_combined_graph.txt`, full per-caspase lists). Combined-union scores are reported below (full pipeline run: `raw_caspases_combined_graph.txt`); they absorb the wiki-layer figures (e.g. the wiki sweep's CASP-3→Senescence 0.54 becomes 0.52 (12) over the union, CASP-1→SASP 0.69 (13) unchanged). The full combined run also adds a headline the layer runs could not see: **Caspase-3 → Apoptosis AA 15.9 — the highest caspase–target proximity in the graph**.

**From the global artifact** (4 caspase-involving pairs survive the top-150 cutoff):

1. **Caspase-3 ↔ Caspase-6** (AA 2.31, shared: Caspase-9/8, Lamins) — real biology; CASP-6 is activated by CASP-3 and cleaves Lamins
2. **Inhibitor of Apoptosis Proteins ↔ XIAP** (AA 2.08) — XIAP is the IAP family archetype; a `is_member_of` edge is warranted
3. **Cancer ↔ Caspase-3** (AA 1.82, cross-community) — and **Ivermectin ↔ melittin** (AA 2.00, cross-community; both are direct combined-graph neighbors of CASP-3) — the cancer repurposing cluster again implicating caspase-3-mediated apoptosis as its mechanistic bridge

**From the combined-graph sweep**, the most actionable predictions (adjudicated against literature):

| Prediction | AA (shared) | Adjudication |
| --- | --- | --- |
| **Caspase-9 → Cancer** | 0.90 (16) | Strongest caspase prediction in the graph; the clinical-relevance arm carried transitively (see cross-cutting pattern below). |
| **Caspase-3 → Cancer / Chemotherapy** | 0.82 (20) / 0.60 (10) | Strong — top unlinked neighbors; consolidation edge candidates. |
| **Caspase-2 → Apoptosis** | 0.82 (11) | Strong. CASP-2's apoptotic/DDR role is documented; it lacks a direct link to Apoptosis — a normalization defect, not a knowledge gap. |
| **Caspase-1 → SASP** | 0.69 (13) | **Strong.** CASP-1 is a core SASP amplifier (IL-1β→NF-κB). Currently connected only transitively via Inflammaging. |
| **Caspase-3 → Oxidative Stress / Senescence / NF-κB** | 0.53 (14) / 0.52 (12) / 0.46 (15) | **Strong.** Non-apoptotic CASP-3 senescence-reinforcing role (Tang 2012, PMID 22863278); ROS-caspase amplification loop well documented. Directly fills gap (4) below. |
| **Caspase-9 → BAX / Bim / Bad** | 0.33/0.30/0.31 (9–13) | Missing explicit BCL-2-family-upstream wiring on the intrinsic arm; BH3-mimetic (ABT-263) senolytic path would route through here. |
| **Caspase-8 → BH3 mimetics / Dasatinib** | 0.24 / 0.23 | Senolytic edge candidates: D+Q re-engages CASP-8/3; dasatinib is a graph neighbor awaiting a direct link. |
| **Caspase-10 → TRAIL** | 0.44 (9) | TRAIL-R/DISC biology; CASP-10 is the TRAIL-pathway initiator — surprisingly uncited directly. |
| **Caspase-12 → Unfolded Protein Response** | 0.12 (3) | Low score but textbook ER-stress caspase; connects to the UPR node that exists in-graph. |
| **Caspase-4/5/11 → NLRP3 Inflammasome, IL-18, cGAS-STING** | 0.17/0.15/0.14 | The trio's upstream sensors (NLRP3, cGAS-STING→noncanonical priming) and IL-18 substrate are all shared-neighbor-rich but unlinked. |
| **Caspase-1 → Canakinumab / Anakinra** | 0.15 / 0.14 | Therapeutic arm: IL-1β/IL-1R blockers (CANTOS context) exist as nodes but have no edge to their target pathway's effector protease. |

Cross-cutting pattern: **"Cancer" and "Chemotherapy" are the top unlinked neighbors of CASP-2, -3, -8, and -9 simultaneously** (CASP-9→Cancer AA 0.90 is the single strongest score in the combined caspase sweep) — the apoptosis-execution arm's clinical relevance is carried entirely transitively. Adding `Caspase-3 --executes--> Cancer cell death` / `Chemotherapy --activates--> Caspase-9/3` style edges would consolidate four separate weak-score pathways into one evidence-backed module.

### 1.6 Graph gaps surfaced (candidate enrichment targets)

1. **PIDDosome lives only in the triples layer** — the `Caspase-2 → PIDDosome/PIDD/RAIDD` axis exists there (§1.1b) but has no wiki-layer representation; any wiki-only view falsely reports it missing. Wiki notes should cross-link the axis.
2. **No Caspase-14 node** — epidermal differentiation caspase entirely absent.
3. **Ferroptosis–caspase crosstalk missing**: literature-supported edges (CASP-8 promotes ferroptosis via inhibitory phosphorylation contexts; GSDME cleavage by CASP-3 converts apoptosis→pyroptosis and is ferroptosis-modulating) are unrepresented. **Gasdermin E** has no node.
4. **Senescence bridges are narrative-level only** (Inflammaging, Paracrine Senescence) — molecular bridges like CASP-3→GSDME, CASP-1→IL-1α (non-canonical SASP driver), CASP-8/RIPK1 senescence exit are absent.
5. **Apoptosis resistance of senescent cells** — the BCL-2/BCL-xL/ABT-263 (navitoclax) senolytic arm exists (Bcl-2 family node, k-core 15) but is **topologically disjoint from caspases** (CASP-4/5/11 vs Bcl-2 family Jaccard = 0.000; CASP-3's AA to Bcl-2 family is low). The senolytic re-activation-of-apoptosis story is not wired as an edge path.
6. **Caspase-3 (at Ser150)** exists as a degree-1 stub in the triples graph (phospho-inactivation by PAK2 context) — a normalization candidate.

### 1.7 Enrichment queue (literature support × graph impact, ordered)

1. `Caspase-2 → Apoptosis` direct link (fixes the orphan adjacency defect)
2. `Caspase-3 ↔ Cellular Senescence` (non-apoptotic role; PMID 22863278)
3. `Caspase-1 → SASP` (IL-1β/NF-κB amplifier; PMID 23562091)
4. BCL-2-family wiring on the intrinsic arm: `Caspase-9 → BAX/Bim/Bad`, `BH3 mimetics → Caspase-9` (senolytic bridge)
5. `Caspase-8 → Necroptosis` (RIPK1 gatekeeper — PPR already detects it, no edge states it)
6. Noncanonical trio upstream: `NLRP3 / cGAS-STING → Caspase-4/5/11`, `Caspase-1 → IL-18`
7. New entities: Gasdermin E, Caspase-14 (PIDDosome already exists in the triples layer — cross-link it from the wiki Caspase-2 note instead)
8. Therapeutic edges: Canakinumab/Anakinra → IL-1β axis; Dasatinib → Caspase-8

---

## Part 2 — Literature Deep Dive: Caspases

### 2.1 Classification

The 14 human caspases (cysteine-aspartic proteases, CASP1–CASP14) group by function and homology:

- **Initiators** — CASP-8, -9, -10, -2. Long N-terminal prodomains recruit them to activation platforms; activation is by induced-proximity **dimerization**, not proteolysis.
- **Executioners** — CASP-3, -6, -7. Short prodomains, inactive zymogen dimers; activated by initiator-mediated cleavage of their interdomain linkers.
- **Inflammatory** — CASP-1, -4, -5, -11 (murine ortholog of human 4/5), -12. CASP-12 is truncated/pseudogene-derived in most humans and negatively regulates CASP-1.
- **CASP-14** — epidermal differentiation; neither apoptotic nor inflammatory.

### 2.2 Domain structure & activation platforms

Conserved architecture: prodomain (CARD in CASP-1/2/4/5/9/12; DED in CASP-8/10; none in executioners) + large (p20) + small (p10) catalytic subunits; active enzyme is a (p20/p10)₂ heterotetramer.

1. **Apoptosome** (intrinsic): Cytochrome c + Apaf-1 + dATP → heptameric platform → CARD–CARD recruitment of pro-CASP-9 (Li et al. 2000, PMID 10529249; Riedl & Salvesen 2007, PMID 17344876).
2. **DISC** (extrinsic): death receptors (FasL/TRAIL/TNF-α) → FADD → pro-CASP-8/10 DED clustering; type-II cells amplify via CASP-8 cleavage of Bid (Li et al. 1998, PMID 9808642).
3. **Inflammasomes**: NLRP3/NLRP1/NLRC4/AIM2/pyrin + ASC → pro-CASP-1; **non-canonical** CASP-4/5/11 bind cytosolic LPS directly via CARD (Shi et al. 2014, PMID 25043016).

**Regulation:** XIAP inhibits CASP-3/-7/-9; Smac/DIABLO (mitochondrial) neutralizes XIAP; viral serpins CrmA/SPI-2 target CASP-1/-8.

### 2.3 Key substrates

| Substrate | Caspase | Consequence |
| --- | --- | --- |
| Bid | CASP-8 | tBid → MOMP, intrinsic amplification |
| PARP1 | CASP-3/-7 | 89 kDa fragment; DNA-repair ablation; apoptosis hallmark (PMID 8168123) |
| Gasdermin D | CASP-1/4/5/11 | GSDMD-N pore-former → pyroptosis (PMID 26375003) |
| Pro-IL-1β / Pro-IL-18 | CASP-1 | cytokine maturation |
| ROCK1 | CASP-3 | blebbing/apoptotic bodies (PMID 11792848) |
| Tau | CASP-6 (-3) | D402 truncation, Alzheimer's aggregates (PMID 29398122) |
| ICAD | CASP-3 | CAD release → DNA fragmentation |
| Lamin A/B, gelsolin | CASP-3/6 | cytoskeletal/nuclear collapse |
| p62/SQSTM1, Beclin-1 | CASP-3/-8/-2 | apoptosis–autophagy crosstalk |

> [!info] Substrate space
> 1,000+ caspase substrates catalogued by N-terminomics (Mahrus et al. 2008, PMID 18636095; CASBAH database). Non-canonical executioner roles (CASP-3 in macrophage alternative activation, myoblast differentiation) continue to emerge.

### 2.4 Caspases in aging biology

**Apoptosis resistance in senescent cells** — senescent cells upregulate BCL-2/BCL-xL/BCL-W, downregulate Bim/Puma/Noxa, and show blunted CASP-8/3 activation; senolytics (dasatinib+quercetin, navitoclax/ABT-263) partly work by re-engaging this machinery (de Keizer 2017, PMID 28266040). *Graph echo: §1.6(5) — this axis is topologically unwired even in the combined graph.*

**CASP-3 / senescence** — CASP-3 is activated early in oncogene-induced senescence and exerts non-apoptotic, senescence-reinforcing functions (Tang et al. 2012, PMID 22863278); contested and actively researched. This matches CASP-3 being the *only* caspase with non-trivial PPR flow into Senescence/SASP/Autophagy in §1.4.

**CASP-1 / NLRP3 / inflammaging** — NLRP3→CASP-1→IL-1β signaling increases with age and drives inflammaging, immunosenescence (Youm et al. 2013, PMID 23562091), atherosclerosis (PMID 31153200), metabolic decline (PMID 21802169), and Alzheimer's pathology (Heneka et al. 2013, PMID 23233273). CASP-1 is a core SASP amplifier via IL-1β→NF-κB→IL-6/IL-8. *Graph echo: our c22 "Inflammaging" community captures exactly this wedge.*

**CASP-2** — bona fide tumor suppressor (KO mice: centrosome excess, aneuploidy, carcinogen-hypersensitive tumorigenesis); cleaves Beclin-1, linking tumor suppression, autophagy suppression, and apoptosis; implicated in oocyte loss and DDR upstream of p53 (PMID 19339967, 31209125, 22940864). *Graph echo: its orphan-community status (§1.1) is accurate but the p53/SASP adjacency (§1.3) is the right lead to expand.*

**CASP-14** — keratinocyte differentiation, filaggrin processing, UVB protection (PMID 17481861); reduced in aged/photodamaged skin (marker vs driver unresolved). Absent from the vault.

### 2.5 Pharmacology

| Agent | Targets | Status |
| --- | --- | --- |
| **Emricasan (IDN-6556)** | pan-caspase | Best clinically advanced; Phase 2b ENCORE-NFH in NASH fibrosis **missed primary endpoint**; no approved indication |
| **VX-765 (belnacasan)** | CASP-1/4 | Phase 2 (epilepsy, RA, psoriasis; recent CNS interest); no approval |
| **Pralnacasan (VX-740)** | CASP-1 | Discontinued (PK/safety) |
| Z-VAD-FMK, Ac-YVAD-CMK | pan / CASP-1 | Research tools only (off-targets incl. calpain) |
| MCC950, dapansutrile (OLT1177) | NLRP3 upstream | Indirect CASP-1 modulation; dapansutrile in Phase 2 (OA, HF) |
| Disulfiram, necrosulfonamide | GSDMD | Downstream-of-caspase pyroptosis blockers |
| Navitoclax / D+Q senolytics | BCL-2 family | Indirectly restore caspase-3/8 sensitivity in senescent cells |

> [!important] Translational gap
> **No caspase inhibitor has achieved regulatory approval as of 2026.** Pan-caspase inhibition risks dampening apoptotic clearance of damaged cells; the most active clinical arena is NLRP3/inflammasome modulation rather than direct caspase targeting. Pro-caspase "senolytic re-activation" remains an aspiration, not a realized pharmacology.

### 2.6 Key takeaways

1. Caspases are not solely death proteases — inflammation (1/4/5/11), differentiation (14), tumor suppression (2), and senescence regulation (3) are all represented.
2. Activation is scaffolded (apoptosome/DISC/inflammasome) — platform identity determines outcome.
3. Aging biology is caspase-entangled at three axes: CASP-1 inflammaging, CASP-2 genome stability, and senescent-cell apoptosis resistance.
4. The combined graph faithfully reproduces the family's two-community structure and the pyroptosis/necroptosis/apoptosis role assignments, but is thin on: CASP-14, GSDME, ferroptosis crosstalk, and the senolytic BCL-2↔caspase axis — concrete enrichment targets (§1.6–1.7). The PIDDosome axis exists but only in the triples layer (§1.6(1)).

---

## Method

All metrics were computed on the **combined graph** (`web/public/data/nodes.json` / `edges.json`, the canonical triples ∪ wiki union with per-edge source tags — the schema-compatible input for the whole `scripts/04_` series), with wiki-layer and triples-layer figures given as decompositions where they differ:

```bash
# Multi-metric source×target analysis (shortest-path multiplicity, neighbor
# Jaccard/signature, Adamic-Adar, k-core, spectral, effective-resistance,
# personalized PageRank) — full raw outputs: raw_caspases_combined_graph.txt
# (combined union) and raw_caspases_wiki_graph_node.txt (wiki layer)
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --graph <combined union serialized to graph.json schema> \
  --sources caspase_1 caspase_2 caspase_3 caspase_4 caspase_5 caspase_6 \
            caspase_7 caspase_8 caspase_9 caspase_10 caspase_11 caspase_12 caspases \
  --targets apoptosis pyroptosis necroptosis inflammasome ferroptosis senescence \
            sasp p53 bcl_2_family autophagy caspase executioner_caspase \
            gasdermin_d apoptosome xiap

# Canonical link-prediction artifact (top-150 global Adamic-Adar pairs over the
# triples layer) + caspase-targeted AA sweeps on the wiki layer
# (raw_caspases_wiki_graph_link_prediction.txt) and the combined graph
# (raw_caspases_combined_graph.txt, incl. per-layer degree decomposition)
uv run --with networkx python3 scripts/04_link_prediction.py

# Biological role classes (Sink/Spreader/Bottleneck/etc., triples-graph
# classifier via scripts/_node_roles_lib.py) — web/public/data/node_roles.json
uv run python3 scripts/04_role_query.py --node "Caspase-3"
```

Spectral parameters: combined giant component λ₂ = 0.188 (4084 nodes / 3839 giant-component nodes / 31,719 edges); wiki-layer giant component λ₂ = 0.802; PPR damping α = 0.85; effective-resistance null sample n = 300.
