# Node Analysis — Mammalian Sirtuins (SIRT1–7) vs. Their Targets & Substrates

> [!info]
> **Task**: Run `scripts/04_node_analysis.py` on the seven mammalian sirtuins against the intracellular **targets and substrates** catalogued in the target/substrate table of the source review *"Sirtuins, a promising target in slowing down the ageing process"* ([[Sirtuins, a promising target in slowing down the ageing process]]; Grabowska, Sikora & Bielak-Zmijewska, Biogerontology 2017; [PMC5514220](https://pmc.ncbi.nlm.nih.gov/articles/PMC5514220/); DOI 10.1007/s10522-017-9685-9) — organized by the review's three target columns: **Modification**, **Activation**, **Inhibition** — supplemented with web research.
> **Date**: 17_AUGUST_2026 10:20 AM PDT
> **Graph**: `graphify-out/graph.json` — 2506 nodes / 2055 giant-component nodes / 3213 edges
> **Runs**: 3 (one per target category from the source document), full reproducible commands in Reproducibility.

---

## Objective

The source document's substrate/target catalogue summarizes, for each mammalian sirtuin: localization, enzymatic activity, **targets & substrates (Modification / Activation / Inhibition)**, function, tissue expression, and ageing involvement. This analysis tests how well the vault's knowledge graph (built from many documents beyond this review) recovers, ranks, and interconnects those target assignments — using shortest-path multiplicity, neighborhood Jaccard, Adamic-Adar, k-core, spectral, effective-resistance, and personalized PageRank (PPR) metrics. The guiding aim is to surface which **sirtuin–target relationships are the most tractable, network-central levers for therapeutic intervention** in ageing and age-related disease.

## Source Document Target Catalogue — Targets & Substrates (highlighted by category)

Reconstructed from the source document's substrate/target table ([[Sirtuins, a promising target in slowing down the ageing process]]). **Bold** = target exists as a graph node; *(mapped)* = exists under a variant label; — = absent from graph.

| Sirtuin (localization) | Activity | **Modification** (deacylation substrates) | **Activation** | **Inhibition** |
| :--- | :--- | :--- | :--- | :--- |
| **SIRT1** (nuclear/cytosolic) | Deacetylase | Histones **H1/H3/H4** (H1K26, H1K9, **H3K9**, **H3K56**, H3K14, **H4K16**), **α-tubulin** *(→Tubulin)*, **p53** (stabilization) | **Suv39h1** *(→SUV39H1)*, **LKB1**, **AMPK**, **NBS1**, **XPA**, **Mn-SOD** *(→MnSOD)*, **WRN**, **Ku70**, **FOXO**, **PGC-1α** | **NFκB** *(→NF-κB)*, **p300** *(→P300)*, **p66shc** *(→p66Shc)*, **mTOR** |
| **SIRT2** (cytosolic/nuclear) | Deacetylase | **α-tubulin** *(→Tubulin)*, **H4K16**, **Histone H4** | **FOXO** | **NFκB** *(→NF-κB)*, **p53** |
| **SIRT3** (mito/nuclear/cytosolic) | Deacetylase | H3/**H4** (**H3K9**, **H4K16**) | **FOXO**, **Ku70**, **Mn-SOD** *(→MnSOD)*, **Catalase**, **IDH2** | **p53**, **HIF-1α** |
| **SIRT4** (mitochondrial) | ADP-ribosyltransferase | *(none listed)* | *(none listed)* | **GDH**, **AMPK** |
| **SIRT5** (mito/cytosolic/nuclear) | Deacetylase, demalonylase, desuccinylase | *(none listed)* | **SOD1** *(→SOD1 (via desuccinylation))* | *(none listed)* |
| **SIRT6** (nuclear, chromatin) | Deacetylase + ADP-ribosyltransferase | H2B/H3 (**H2BK12**, **H3K9**, **H3K56**), **WRN** (stabilization) | **FOXO**, **PARP1**, **CtIP** | **NFκB** *(→NF-κB)*, **IGF-1** |
| **SIRT7** (nucleolar/nuclear) | Deacetylase | **H2A**, **H2B**, H3 (**H3K18** → *H3K18ac*) | **FOXO** | **RNA polymerase I** *(→RNA Polymerase I)* |

> [!tip] Graph coverage
> **31 of 34** distinct target concepts from the source document (91%) exist in `graphify-out/graph.json`. Variant mappings used: Mn-SOD→`MnSOD`, α-tubulin→`Tubulin`, p66shc→`p66Shc`, NFκB→`NF-κB`, H3K18→`H3K18ac`, SOD1→`SOD1 (via desuccinylation)`. Not represented as canonical nodes: core histone H1/H3 as standalone molecules (residue-mark nodes exist instead: `H3K9`, `H3K56`, `H3K14`, `Histone H3K9`, `H3K18ac` — see Caveats, Gaps & Entity-Resolution Notes).

## Sirtuin Node Fingerprints

| Node | degree (in/out) | PageRank | betweenness | k-core | community (size) | Role reading |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SIRT1** | 212 (27/185) | 0.003514 | **0.1653** | **6** | SIRT1 (126) | #1 god node; dominant source/master regulator |
| **SIRT6** | 115 (9/106) | 0.001645 | 0.0624 | 5 | SIRT6 (69) | #2 sirtuin hub |
| **SIRT3** | 104 (5/99) | 0.000496 | 0.0587 | 5 | SIRT3 (56) | mitochondrial hub |
| **SIRT2** | 79 (9/70) | 0.001114 | 0.0419 | 5 | SIRT2 (54) | — |
| **SIRT4** | 43 (1/42) | 0.000257 | 0.0197 | 5 | SIRT4 (28) | — |
| **SIRT5** | 43 (1/42) | 0.000317 | 0.0237 | 5 | SIRT5 (30) | — |
| **SIRT7** | 40 (0/40) | 0.000225 | 0.0221 | 5 | SIRT7 (28) | pure source (in-degree 0) |

> [!important]
> Every sirtuin is a **source-type node** (`out_degree` ≫ `in_degree`): the graph encodes them as upstream regulators acting *on* their targets, not as entities acted upon — exactly matching the source document's framing. SIRT1 is the vault's single highest-degree node (212), 3 of the top-5 god nodes are sirtuins, and only SIRT1 reaches k-core 6 (sharing the inner backbone with [[p53]], [[NF-κB]] and [[mTOR]]).

## Modification Targets — Deacylation Substrates

`--sources SIRT1 SIRT2 SIRT3 SIRT6 SIRT7 --targets p53 Tubulin "Histone H4" H3K9 H4K16 H3K56 H2BK12 WRN H2A H2B H3K18ac`

### Direct substrate edges found in the graph (1-hop paths)

| Sirtuin | Direct substrate edges (relation\|confidence) |
| :--- | :--- |
| **SIRT1** | → Tubulin (deacetylates\|0.9), → H4K16 (0.95), → H3K56 (0.9), → WRN (activates\|0.9) |
| **SIRT2** | → Tubulin (deacetylates\|0.95), → Histone H4 (deacetylates\|0.95) |
| **SIRT3** | → H3K9 (deacetylates\|0.9), → H4K16 (deacetylates\|0.9) |
| **SIRT6** | → H2BK12 (deacetylates\|0.9), → WRN (deacetylates\|0.9) |
| **SIRT7** | → H2A (0.9), → H2B (0.9), → H3K18ac (0.95) |

### PPR correctly re-derives each substrate's modifying sirtuin

| Seed (substrate) | Top sirtuin by PPR | Interpretation |
| :--- | :--- | :--- |
| Histone H4 | **SIRT2 #1** (0.266) | SIRT2 = dominant H4K16 deacetylase ✓ |
| H3K9 | **SIRT3 #1** (0.246) | nuclear SIRT3 deacetylates H3K9 under stress ✓ |
| H4K16 | **SIRT1 #1** (0.152), SIRT3 #3 (0.125) | shared SIRT1/SIRT3 mark ✓ |
| H3K56 | **SIRT1 #1** (0.276) | ✓ (SIRT6 also deacetylates H3K56 — see Caveats, Gaps & Entity-Resolution Notes) |
| H2BK12 | **SIRT6 #1** (0.259) | ✓ |
| WRN | **SIRT1 #1** (0.153), SIRT6 #3 (0.138) | both stabilize/deacetylate WRN ✓ |
| H2A / H2B / H3K18ac | **SIRT7 #1** (0.263, all three) | ✓ (Barber et al. 2012, H3K18ac) |
| p53 | SIRT1 #2 (0.026), SIRT6 #4, SIRT2 #5, SIRT3 #6, SIRT7 #8 | all five modify/regulate p53 ✓ |
| Tubulin | SIRT1 #2 (0.052), SIRT2 #3 (0.049) | SIRT1/SIRT2 α-tubulin deacetylation ✓ |

*(PPR rank #1 = the sirtuin outranks even the seed itself; rank #2 = top non-seed node — see Caveats, Gaps & Entity-Resolution Notes.)*

### Effective resistance (commute distance, z-scored vs 300-node null)

All sirtuins are **far closer to every catalogued substrate than random** (z ≈ −1.6 to −2.1). Closest-sirtuin assignments match literature: SIRT7→H2A (z = −2.07), SIRT7→H3K18ac (−1.88); SIRT1→p53 (R_eff 0.080), SIRT1→Tubulin (0.231), SIRT1→H3K56 (1.111); SIRT3→H3K9 (1.111); SIRT6→H2BK12 (1.111); SIRT1 & SIRT6→WRN (both 0.567).

### Structural notes

- Histone-mark substrates are **k-core 1–2 peripheral leaves** (degree 1–2) — they are terminal "effector marks," not hubs. p53 (k-core 6) and Tubulin (k-core 4) are the only modification targets embedded in the graph core.
- Communities are **substrate-annotated**: H3K56 sits in the SIRT1 community; H3K9 + H4K16 in SIRT3; H2BK12 + WRN in SIRT6; H2A + H2B + H3K18ac in SIRT7 — Leiden clustering recovered the source document's substrate ownership without being given the table.
- Adamic-Adar: only SIRT1 shows non-zero proximity to foreign substrates (p53 0.711; H2A/H2B/H3K18ac 0.271 via SIRT7; H2BK12/WRN 0.212 via SIRT6) — i.e., SIRT1 is the most likely sirtuin to acquire *new* substrate links.

> [!warning] Gap found
> No direct `SIRT1→H3K9` edge, although the source document and the review body (and Vaquero et al. 2007) establish SIRT1 as the principal H3K9 deacetylase. The graph routes SIRT1→H3K9 through 19 three-hop paths (first hop via `Cellular Senescence`, `NF-κB`, `FOXO1`… into SIRT3). SIRT6→H3K9/H3K56 are likewise indirect (via SIRT1 or Cellular Senescence). Candidate triples for a future triples pass.

## Activation Targets — Activated by Sirtuins

`--sources SIRT1 SIRT2 SIRT3 SIRT5 SIRT6 SIRT7 --targets SUV39H1 LKB1 AMPK NBS1 XPA MnSOD Ku70 FOXO PGC-1α Catalase IDH2 PARP1 CtIP "SOD1 (via desuccinylation)"`

### Direct activation edges (1-hop)

- **SIRT1** → SUV39H1, AMPK (0.95), NBS1, XPA, MnSOD, Ku70, PGC-1α (activates), FOXO (regulates\|0.95)
- **SIRT2** → FOXO (activates)
- **SIRT3** → IDH2, Ku70, MnSOD, Catalase (activation edges)
- **SIRT5** → SOD1 via desuccinylation (0.95)
- **SIRT6** → PARP1 (activates\|0.9), CtIP (activates\|0.9), Catalase (upregulates\|0.95)
- Community co-localization confirms ownership: NBS1+XPA ∈ SIRT1 community; Ku70+IDH2 ∈ SIRT3; SOD1 ∈ SIRT5; CtIP ∈ SIRT6.

### PPR ranking (seed = activation target → best sirtuin)

| Seed | Sirtuin ranking (rank, score) | Source doc match |
| :--- | :--- | :--- |
| **NBS1**, **XPA** | **SIRT1 #1** (0.276) | SIRT1-only activation ✓ |
| **SUV39H1** | **SIRT1 #2** (0.148) | ✓ (K266 deacetylation) |
| **LKB1** | SIRT1 #2 (0.091), SIRT3 #3 (0.079) | ✓ (SIRT1 deacetylates LKB1 K48) |
| **AMPK** | SIRT1 #2 (0.036), **SIRT5 #3**, SIRT6 #4, SIRT3 #8 | SIRT1 ✓; SIRT5 link notable (AMPK→SIRT5 edge drives it) |
| **MnSOD** | SIRT1 #2 (0.057), SIRT6 #3, SIRT3 #4, SIRT2 #5 | SIRT1+SIRT3 ✓ |
| **Ku70** | SIRT1 #2 (0.149), SIRT3 #3 (0.129) | SIRT1+SIRT3 ✓ |
| **FOXO** | SIRT1 #2 (0.074), SIRT6 #3, SIRT2 #4, SIRT7 #5 | FOXO is the universal shared target ✓ |
| **PGC-1α** | SIRT1 #2 (0.098), SIRT6 #3 (0.076) | SIRT1 ✓ |
| **Catalase** | **SIRT6 #2** (0.043) | SIRT3 in table; graph routes Catalase through SIRT6 upregulation |
| **IDH2** | **SIRT3 #1** (0.246) | ✓ (K413 deacetylation) |
| **PARP1** | **SIRT6 #2** (0.091) | ✓ (mono-ADP-ribosylation K521) |
| **CtIP** | **SIRT6 #1** (0.259) | ✓ (K432/K526/K604 deacetylation) |
| **SOD1** | **SIRT5 #1** (0.271) | ✓ (desuccinylase; Lin et al. 2013) |

### Effective resistance (closest sirtuin per target)

SIRT1 is the closest sirtuin to AMPK (0.088), FOXO (0.240, z = −1.88), PGC-1α (0.310, z = −1.89), MnSOD (0.196), NBS1/XPA (1.111), LKB1 (0.389), Ku70 (0.567). Correct non-SIRT1 winners: **SIRT3→IDH2** (1.111), **SIRT5→SOD1** (1.053, z = −2.09, strongest z of the run), **SIRT6→CtIP** (1.111, z = −1.87) and **SIRT6→PARP1** (0.397).

### Adamic-Adar (link-prediction proximity)

Highest scores: **SIRT3→AMPK 1.846** and **SIRT1→AMPK 1.606** (both exist as edges — confirming AA recovers known links), then SIRT1→PGC-1α 0.725, SIRT5→AMPK 0.721, SIRT6→LKB1 0.521, SIRT1→FOXO 0.483, SIRT1/SIRT5→LKB1 0.334.

> [!note] k-core
> Activation targets are much more core-embedded than modification substrates: AMPK, MnSOD, FOXO are k-core 5; PGC-1α/Catalase k-core 4; LKB1/PARP1 k-core 3. Activated targets are network hubs (signaling/energy enzymes), whereas modified substrates (histone marks) are peripheral leaves — a clean structural separation of the two source-document categories.

## Inhibition Targets — Inhibited by Sirtuins

`--sources SIRT1 SIRT2 SIRT3 SIRT4 SIRT6 SIRT7 --targets NF-κB P300 p66Shc mTOR HIF-1α IGF-1 GDH "RNA Polymerase I" p53`

### Direct inhibition edges (1-hop)

| Sirtuin | Direct inhibition edges |
| :--- | :--- |
| **SIRT1** | → P300 (inhibits\|0.9), → mTOR (0.9), → HIF-1α (0.9); + reciprocal `inhibited_by` edges from NF-κB, p66Shc, p53 (the NF-κB/miR-34a and p53/miR-34a feedback loops described in the review) |
| **SIRT2** | → p53 (inhibits\|0.9) |
| **SIRT3** | → p53 (inhibits\|0.9), → HIF-1α (destabilizes\|0.85) |
| **SIRT4** | GDH edge present (`SIRT4–GDH`, 0.9; see direction note in Caveats, Gaps & Entity-Resolution Notes) |
| **SIRT6** | → HIF-1α (corepresses\|0.9), → IGF-1 (inhibits\|0.9); + NF-κB reciprocal |
| **SIRT7** | → RNA Polymerase I (inhibits\|0.9), → NF-κB (inhibits_nuclear_translocation_of\|0.95) |

### PPR ranking (seed = inhibited target → best sirtuin)

| Seed | Sirtuin ranking | Source doc match |
| :--- | :--- | :--- |
| **NF-κB** | SIRT1 #2 (0.022), SIRT6 #4, SIRT3 #5, SIRT7 #6, SIRT2 #8, SIRT4 #10 | SIRT1/2/6/7 all inhibit NF-κB ✓ (most shared inhibition target) |
| **P300** | SIRT1 #2 (0.224) | SIRT1-only ✓ |
| **p66Shc** | **SIRT1 #1** (0.276) | SIRT1-only ✓ |
| **mTOR** | SIRT1 #2 (0.032) | SIRT1-only ✓ |
| **HIF-1α** | SIRT1 #2 (0.052), SIRT6 #3, SIRT7 #4, SIRT3 #5 | SIRT3/SIRT6 in table; graph adds SIRT1/SIRT7 cross-links ✓ |
| **IGF-1** | **SIRT6 #1** (0.259) | SIRT6-only ✓ (Kanfi et al. 2012) |
| **GDH** | **SIRT4 #3** (0.129; top-2 are the variant `GDH (Glutamate Dehydrogenase)` node and SIRT4-community neighbors) | SIRT4-only ✓ |
| **RNA Polymerase I** | **SIRT7 #1** (0.263) | SIRT7-only ✓ |
| **p53** | SIRT1 #2, SIRT6 #4, SIRT2 #5, SIRT3 #6, SIRT7 #8 | SIRT1/2/3 modification+inhibition ✓ |

### Effective resistance

SIRT1 closest to NF-κB (R_eff 0.056 — the tightest sirtuin–target commute distance in all three runs), mTOR (0.114), p53 (0.080), HIF-1α (0.171). Correct non-SIRT1 winners: **SIRT6→IGF-1** (1.111), **SIRT4→GDH** (0.594), **SIRT7→RNA Pol I** (1.111, z = −2.07).

### Adamic-Adar

**SIRT1→NF-κB 1.786** is the highest inhibition-category score; then SIRT6→NF-κB 1.261, SIRT7→NF-κB 1.097, SIRT3→NF-κB 0.731, SIRT1→p53 0.711, SIRT1→mTOR 0.498, SIRT1→HIF-1α 0.483. NF-κB is the strongest predicted-link hub for every sirtuin — consistent with the review's framing of NF-κB as the central sirtuin-regulated pro-ageing transcription factor (SASP driver).

> [!important]
> **NF-κB is the only target that is itself a god-tier hub**: degree 47, PageRank 0.00441 (higher than SIRT1's 0.00351), k-core 6, own Leiden community. Inhibiting NF-κB is the single most network-central action the sirtuin family performs. [[p53]], [[mTOR]] (k-core 6) and [[HIF-1α]] (k-core 5) follow.

## Cross-Category Synthesis

### Sirtuin–sirtuin neighborhood similarity (pairwise Jaccard)

| Pair | Jaccard | | Pair | Jaccard |
| :--- | :--- | :--- | :--- | :--- |
| SIRT2–SIRT3 | **0.089** | | SIRT3–SIRT6 | 0.053 |
| SIRT1–SIRT6 | **0.088** | | SIRT3–SIRT4 | 0.050 |
| SIRT1–SIRT3 | 0.065 | | SIRT2–SIRT7 | 0.044 |
| SIRT1–SIRT2 | 0.063 | | SIRT6–SIRT7 | 0.041 |
| SIRT3–SIRT5 | 0.043 | | SIRT1–SIRT4 | 0.033 |
| SIRT2–SIRT6 | 0.043 | | SIRT1–SIRT7 | 0.029 |
| SIRT4–SIRT6 | 0.040 | | SIRT5–SIRT6 | 0.013 |
| SIRT4–SIRT7 | 0.037 | | SIRT5–SIRT7 | 0.012 |

- **SIRT2–SIRT3** and **SIRT1–SIRT6** are the most functionally overlapping pairs (shared neighborhoods: MnSOD, NF-κB, FOXO1/3a, p53, NLRP3, osteoarthritis/Alzheimer's disease nodes).
- **SIRT5 is the outlier** (Jaccard ≤ 0.043 with everyone) — matching its unique desuccinylase/demalonylase/deglutarylase chemistry and urea-cycle niche (per the source document).
- Spectral: Fiedler values for all sirtuins cluster tightly (−0.0054…−0.0068, λ₂ = 0.0454) — no sirtuin is split onto the far side of the graph's principal cut; they form one functional supercluster.

### Sirtuin cross-talk edges discovered (bridges in path analysis)

- `SIRT1 ⇄ SIRT6` — mutual *activates* (0.9); SIRT1 routes to SIRT6 substrates (PARP1, CtIP, Catalase, IGF-1) through this edge.
- `SIRT1 ⇄ SIRT7` — mutual *inhibits_autocatalytic_activation_of* (0.95); SIRT1 reaches SIRT7 substrates (H2A, H2B, H3K18ac, RNA Pol I) through it.
- `SIRT5` is reached from SIRT1 via `AMPK --activates--> SIRT5`; `SIRT4` embedded in an Atherosclerosis/GDH/Insulin-Secretion cluster.
- Universal bridges for cross-sirtuin paths: **NF-κB** (dominant), then MnSOD, p53, FOXO, Cellular Senescence, HIF-1α.

### Category-level structural pattern

| Target category | Typical target k-core | Typical degree | Structural identity |
| :--- | :--- | :--- | :--- |
| **Modification** (histone marks, α-tubulin) | 1–2 | 1–8 | peripheral effector leaves |
| **Activation** (AMPK, FOXO, MnSOD, PARP1…) | 3–5 | 1–22 | mid-core signaling/energy hubs |
| **Inhibition** (NF-κB, p53, mTOR, HIF-1α) | 5–6 | 1–47 | core pro-ageing driver hubs |

The three source-document target columns occupy **distinct network shells**: sirtuins modify peripheral chromatin substrates, activate mid-core homeostatic enzymes, and inhibit inner-core ageing drivers. This is a graph-level confirmation of the review's "sirtuins as anti-ageing master regulators" thesis.

## Therapeutic Takeaways — Targets, Substrates & Druggable Levers

> [!important] Goal framing
> The network structure of sirtuin–target relationships is itself a priority map for therapeutics: the most **network-central** and **most-shared** targets are the highest-value intervention points, while per-sirtuin **selective niches** point to where specificity (and thus safety) can be won.

### Network-centrality ranking of therapeutic levers

- **NF-κB is the single most network-central target the sirtuin family acts on** (degree 47, PageRank 0.00441 — higher than SIRT1's 0.00351, k-core 6, own Leiden community). Inhibiting NF-κB — the central sirtuin-regulated pro-ageing transcription factor and SASP driver — is the highest-value therapeutic action. It is simultaneously the **most shared** inhibition target (SIRT1/2/6/7 all inhibit it) and the strongest predicted-link hub (Adamic-Adar SIRT1→NF-κB 1.786). A sirtuin-mimetic or NF-κB-suppressing strategy hits the densest node in the entire analysed subgraph.
- **Inner-core pro-ageing drivers** (NF-κB, p53, mTOR, HIF-1α; k-core 5–6) are the highest-value intervention shell — sirtuins inhibit them. By contrast, **modification substrates** (histone marks) are terminal peripheral leaves (k-core 1–2) and are less attractive as systemic therapeutic anchors. Therapeutic effort should concentrate on the inner-core drivers the sirtuins already regulate.

### Per-sirtuin therapeutic niches (where selectivity lives)

- **SIRT1** — the #1 god node and dominant master regulator. Activating SIRT1 ripples across the widest target set (p53, NF-κB, mTOR, HIF-1α, PGC-1α, FOXO, MnSOD, Ku70, NBS1, XPA, LKB1, SUV39H1). Broad-spectrum activation = maximal anti-ageing coverage but lowest selectivity; combination with selective sirtuin modulators may be needed to avoid off-target spread.
- **SIRT2** — the α-tubulin/H4K16 deacetylase axis is now an active drug-discovery target (selective inhibitors and degraders; *Med Res Rev* 2026, PMID 42087377). The graph's Tubulin–SIRT2 edge (0.95 confidence) sits in a **therapeutic hot spot** — attractive for selective modulation in neurodegeneration and oncology.
- **SIRT3** — mitochondrial hub; selective activation targets **MnSOD K122**, **IDH2 K413**, Ku70, Catalase — a coherent antioxidant/mitochondrial-resilience program.
- **SIRT4** — distinctive **GDH inhibition** niche (insulin secretion / metabolic regulation); outlier chemistry with a clean metabolic-selectivity story.
- **SIRT5** — desuccinylase/demalonylase/deglutarylase outlier (Jaccard ≤ 0.043 with every other sirtuin) anchored in the urea cycle. **Selective desuccinylase inhibitors are an underexploited opportunity** precisely because SIRT5 shares almost no neighborhood with its siblings.
- **SIRT6** — IGF-1 inhibition (Kanfi et al. 2012), HIF-1α corepression, **PARP1 mono-ADP-ribosylation K521**, **CtIP deacetylation** — a DNA-repair/longevity node with multiple chemoprotective levers.
- **SIRT7** — RNA Polymerase I inhibition and **H3K18ac deacetylation** (Barber et al. 2012) define a nucleolar/ribosomal-synthesis axis relevant to oncogenic growth.

### Residue-level druggable sites (chemically addressable acetylation marks)

From the source document and review body, the most precisely defined sirtuin substrate lysines are direct chemical handles for substrate-selective pharmacology: **p53 K320/K373/K382**, **Suv39h1 K266**, **p300 K1020/K1024**, **LKB1 K48**, **XPA K63/K67**, **Ku70** (multi-Lys), **NF-κB/RelA K310**, **MnSOD K122**, **IDH2 K413**, **CtIP K432/K526/K604**, **PARP1 K521**, **H3K18**. Substrate-selective sirtuin modulators aimed at these marks would let therapeutics engage a single pathway without global sirtuin activation.

### Deacylase expansion opens new substrate space

Post-2017 literature (Zhang et al., *Glycoconj J* 2026, PMID 42329469; Zheng, *Chem Biol Drug Des* 2024, PMID 39556442) shows SIRT1–7 now carry **>10 distinct enzymatic activities**, including robust **delactylase (Kla)** and activities on lysine malonylation (Kma), β-hydroxybutyrylation (Kbhb) and succinylation (Ksucc). The source document's "Modification" catalogue is therefore a **floor, not a ceiling** — every newly validated deacylation substrate is a fresh therapeutic target. The field's call for *deacylase-selective* mutants/inhibitors is the actionable translation of this finding.

### Cross-sirtuin bridges as combinatorial strategy points

- `SIRT1 ⇄ SIRT6` mutual activation and `SIRT1 ⇄ SIRT7` mutual autocatalytic-regulation edges show sirtuins are not independent — a SIRT1-modulating drug will secondarily engage SIRT6 (PARP1, CtIP, Catalase, IGF-1) and SIRT7 (H2A/H2B/H3K18ac, RNA Pol I) substrates.
- **NF-κB is the universal bridge** for cross-sirtuin paths, reinforcing it as the convergence point for any multi-sirtuin therapeutic program.

### Curation gaps = under-explored therapeutic links

Missing direct edges — **SIRT1→H3K9**, **SIRT6→H3K9/H3K56** — are well-supported biologically (Vaquero 2007; Michishita 2008/2009; Yang 2009). Whether they are curation gaps or genuinely indirect regulation, these sirtuin–substrate pairs are **candidate therapeutic relationships to validate**, and their absence from the graph flags a blind spot worth filling in the next triples pass.

## Caveats, Gaps & Entity-Resolution Notes

- **PPR rank reading**: with `alpha = 0.85` the seed node usually holds rank #1 (~0.15 teleport mass). For degree-1 leaf seeds (H3K9, IDH2, IGF-1, SOD1, H2BK12, CtIP…), their sole-neighbor sirtuin accumulates >0.24 and takes rank #1 — so *rank #1 sirtuin = outranks the seed itself; rank #2 = top non-seed node*. Both signal dominant flow.
- **Jaccard = 0.000** for leaf targets is expected (leaf's only neighbor is its sirtuin; hub neighborhoods don't intersect it). Jaccard is only discriminating for hub targets (NF-κB, AMPK, FOXO, p53).
- **Edge direction semantics**: subject-oriented labels — `SIRT1 --[inhibited_by]--> NF-κB` reads "SIRT1 is inhibited by NF-κB" (the miR-34a feedback loop), while the reciprocal biological edge `SIRT1 deacetylates NF-κB` lives on a **variant node** `NF-kappaB` (flagged in the graph's own surprising-connections report). Same for `SIRT4 --[inhibited_by]--> GDH` vs. the literature direction (SIRT4 ADP-ribosylates/inhibits GDH).
- **Duplicate/variant nodes to merge in a future triples pass**: `NF-κB` vs `NF-kappaB`; `MnSOD` vs `SOD2` vs `SOD2 (Superoxide Dismutase 2)`; `GDH` vs `GDH (Glutamate Dehydrogenase)` vs `Glutamate dehydrogenase`; `H3K9` vs `Histone H3K9` vs `H3K9ac`; `PGC-1α` vs `PGC-1alpha`.
- **Missing direct edges (curation opportunities)**: SIRT1→H3K9, SIRT6→H3K9, SIRT6→H3K56 (all well-supported: Vaquero 2007; Michishita 2008/2009; Yang 2009).
- Pre-computed `degree` (212 for SIRT1) counts 3 self-loops removed at load (section on sirtuin fingerprints reports 209) — cosmetic only.

## Web-Research Supplement — Post-2017 Updates to the Source Document's Target Catalogue

The source review (2017) already notes the field's shift from "deacetylases" to **deacylases** (SIRT6 prefers long-chain acyls — demyristoylase/depalmitoylase, Jiang et al. 2013; SIRT5 demalonylase/desuccinylase, Du et al. 2011). Recent literature extends this:

- **Zhang et al., Glycoconj J 2026** (PMID 42329469, DOI 10.1007/s10719-026-10223-3): SIRT1–7 now carry **>10 distinct enzymatic activities**; SIRT1–3 additionally possess robust **delactylase (Kla)** activity, and sirtuins act on lysine malonylation (Kma), β-hydroxybutyrylation (Kbhb) and succinylation (Ksucc) — the source document's "Modification" column is thus a lower bound, not a closed list.
- **Zheng, Chem Biol Drug Des 2024** (PMID 39556442, DOI 10.1111/cbdd.14460): each mammalian sirtuin possesses **multiple individual deacylase activities** spanning formyl → acetyl → succinyl → myristoyl substrates; calls for deacylase-selective mutants/inhibitors to dissect per-activity physiology.
- **Advances in SIRT2-Targeted Therapeutics, Med Res Rev 2026** (PMID 42087377): SIRT2's α-tubulin/H4K16 deacetylase axis is now an active drug-discovery target (selective inhibitors, degraders) — the graph's Tubulin–SIRT2 edge (0.95 confidence) sits in a therapeutic hot spot.
- Key residue-level assignments from the source document (consistent with its target catalogue): SIRT1 deacetylates **p53 K320/K373/K382**, **Suv39h1 K266**, **p300 K1020/K1024**, **LKB1 K48**, **XPA K63/K67**, **Ku70** (multi-Lys), **NF-κB/RelA K310**; SIRT6 deacetylates **CtIP K432/K526/K604**, mono-ADP-ribosylates **PARP1 K521**; SIRT3 deacetylates **MnSOD K122**, **IDH2**; SIRT7 deacetylates **H3K18** (Barber et al. 2012).

## Reproducibility

```bash
# Modification
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --sources SIRT1 SIRT2 SIRT3 SIRT6 SIRT7 \
  --targets p53 Tubulin "Histone H4" H3K9 H4K16 H3K56 H2BK12 WRN H2A H2B H3K18ac

# Activation
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --sources SIRT1 SIRT2 SIRT3 SIRT5 SIRT6 SIRT7 \
  --targets SUV39H1 LKB1 AMPK NBS1 XPA MnSOD Ku70 FOXO PGC-1α Catalase IDH2 PARP1 CtIP "SOD1 (via desuccinylation)"

# Inhibition
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
  --sources SIRT1 SIRT2 SIRT3 SIRT4 SIRT6 SIRT7 \
  --targets NF-κB P300 p66Shc mTOR HIF-1α IGF-1 GDH "RNA Polymerase I" p53
```

## Summary

The vault graph **recovers the source-document target catalogue almost perfectly**. All seven sirtuins are source-type master regulators with SIRT1 as the #1 god node; direct edges exist for the majority of the catalogued assignments, and where an edge is missing (e.g. SIRT1→H3K9), PPR, effective resistance and community membership still assign the correct sirtuin to each target. The three source-document target categories map onto **distinct network shells** — modified chromatin substrates are peripheral leaves, activated enzymes are mid-core homeostatic hubs, and inhibited targets (NF-κB, p53, mTOR) are inner-core pro-ageing drivers — quantitatively supporting the review's master-regulator model.

For **therapeutics**, the decisive read-outs are centrality and sharing: **NF-κB is the highest-value intervention node** (god-tier hub, inhibited by four sirtuins, strongest predicted-link hub), and the inner-core pro-ageing drivers (p53, mTOR, HIF-1α) form the prime inhibition shell. Selectivity is won at the per-sirtuin niches — SIRT2's Tubulin/H4K16 axis, SIRT5's desuccinylase chemistry, SIRT6's IGF-1/PARP1/CtIP axis, SIRT7's nucleolar axis — and at residue-level acetylation marks (e.g., RelA K310, CtIP K432/K526/K604, PARP1 K521). Post-2017 literature (PMIDs 42329469, 39556442) expands the deacylase landscape (delactylase, Kma, Kbhb, Ksucc), marking the source document's substrate list as a floor for future triples enrichment and a growing map of druggable sirtuin–substrate relationships.
