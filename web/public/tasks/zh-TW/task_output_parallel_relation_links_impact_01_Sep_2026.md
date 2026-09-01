---
title: 三元組圖譜中的平行關係連結 — 完整清單與指標影響
description: 由 MultiDiGraph 重建所保留、承載超額平行關係連結（3894 對節點上的 4092 條連結）的節點對清單，並附度數／PageRank 影響量化、管線下游消費方稽核，以及已套用的後續修正。
created: 2026-08-31
updated: 2026-09-01
tags: [triples, knowledge-graph, quality-control, multigraph, graph-metrics, parallel-edges]
---

# 三元組圖譜中的平行關係連結 — 完整清單與指標影響

**日期：** 01_Sep_2026 05:36 AM UTC
**範圍：** `web/public/data/triples-edges.json`（三元組模式）於
MultiDiGraph 重建之後。基線：**3894 組唯一（from, to）節點對上
的 4092 條連結 → 177 組節點對上多出 198 條超額平行關係連結**
（忽略關係、僅以節點對比對）。

## 這些是什麼

在 MultiDiGraph 修正之前，`rebuild.py` 使用的一般 `nx.DiGraph` 僅允許
每組節點對**只有一種關係**——凡是承載多於一個述詞的節點對，最後處理的
三元組都會靜默覆蓋較早的結果（全圖約流失 200 條關係）。此修正將每個
述詞各自保留為一條邊；以節點對為單位的重疊分類（wiki 差異、組合並集）
刻意維持忽略關係的作法。

## 對計算的影響

### 度數 — 受影響的 188 個節點（平行連結現在各自計入）

| 節點 | 節點對度數 | Δ（平行連結） | 多重度數 |
|---|---|---|---|
| SIRT1 | 242 | +20 | 262 |
| SASP | 102 | +13 | 115 |
| Neuromelanin | 51 | +11 | 62 |
| SIRT6 | 122 | +9 | 131 |
| SIRT3 | 186 | +9 | 195 |
| Parkinson's Disease | 33 | +9 | 42 |
| NF-κB | 54 | +9 | 63 |
| Adrenochrome | 63 | +9 | 72 |
| Dopamine | 16 | +7 | 23 |
| Cancer | 73 | +7 | 80 |
| Autophagy | 40 | +7 | 47 |
| p53 | 31 | +6 | 37 |
| NAD+ | 23 | +6 | 29 |
| Mitophagy | 15 | +6 | 21 |
| Epinephrine | 22 | +6 | 28 |
| Aminoguanidine | 32 | +6 | 38 |
| Advanced Glycation End Products | 27 | +6 | 33 |
| Rapamycin | 41 | +5 | 46 |
| COMT | 59 | +5 | 64 |
| Aging | 48 | +5 | 53 |

- 寫入 `triples-nodes.json` / `nodes.json` 中的 `degree` / `in_degree` /
  `out_degree` 與多重圖重算結果**零不符**——已儲存的指標已感知
  平行邊。
- 角色分類（以 out/in 度數百分位為閾值的 Spreader/Sink）繼承這些
  增量；樞紐節點在 Spreader/Sink 集合中排名上升。

### PageRank — 平行連結各自投票

| 節點 | 節點對投影 PR | 多重 PR | Δ |
|---|---|---|---|
| Neuroinflammation | 0.01214 | 0.01120 | -9.4e-04 |
| Hypokinesia | 0.00139 | 0.00228 | +8.9e-04 |
| SASP | 0.00694 | 0.00782 | +8.8e-04 |
| Microgliosis | 0.01123 | 0.01039 | -8.4e-04 |
| Cancer | 0.00331 | 0.00393 | +6.2e-04 |
| Autophagy | 0.00413 | 0.00464 | +5.0e-04 |
| NAD+ | 0.00304 | 0.00350 | +4.7e-04 |
| Sirtuins | 0.00200 | 0.00243 | +4.3e-04 |
| Epinephrine | 0.00496 | 0.00522 | +2.6e-04 |
| IL-6 | 0.00083 | 0.00106 | +2.4e-04 |
| Dopamine | 0.00153 | 0.00176 | +2.3e-04 |
| NF-κB | 0.00502 | 0.00523 | +2.1e-04 |

- 最大 |Δ| = **9.38e-04**（為平均 PR 3.77e-04 的
  249%）——對受影響的樞紐而言，相對變動是實質性的（SASP ↑、
  Cancer ↑、Autophagy ↑、NAD+ ↑、Sirtuins ↑；Neuroinflammation ↓、
  Microgliosis ↓ 是經由 out 權重重新分配所致），與 Assumptions Lab
  自身的慣例（「平行邊各自投票」）一致。請注意該 Lab 頁面已於
  2026-08-31 退役；這正是其引擎使用的同一套算術。

### 依設計不變（以簡單的無向投影計算）

- `betweenness_centrality`、`clustering_coefficient`、`k_core_number`——
  `enrich_graph_metrics` 針對這些局部／結構性度量投影到
  `nx.Graph(G_und)`（平行邊在投影中塌縮，這才是正確語意）。
- `link_prediction`——建立自己的無向鄰接投影。
- **組合預設資料集**——以 `(from, to)` 取並集；平行連結合併成一條
  邊；僅有三元組的檢視承載全部 4092 條。
- **Supabase 鏡像**——`entity_edges` 以 (from, to, predicate, source,
  context) 為鍵：全部 4092 列皆已鏡像。
- **api/graph_ops.py**——載入 `nx.MultiDiGraph`；`_edge_meta` 同時處理
  兩種形狀（對一組節點對回傳第一種關係）。

## 177 組平行節點對（198 條超額連結）

| 節點對 | 連結數 | 關係（信賴度） |
|---|---|---|
| SIRT1 → NF-κB | 4 | `inhibited_by` (0.9)<br>`deacetylates_and_inhibits` (0.95)<br>`deacetylates` (0.95)<br>`inhibits` (0.95) |
| Acid ceramidase → Ceramide | 3 | `cleaves` (0.95)<br>`breaks_down` (0.95)<br>`hydrolyzes` (0.95) |
| Acid ceramidase → Ferroptosis | 3 | `promotes` (0.92)<br>`sensitizes_to` (0.94)<br>`sensitizes_cells_to` (0.95) |
| Adrenochrome → Epinephrine | 3 | `derives_from` (0.9)<br>`is_formed_from` (0.9)<br>`is_formed_by_oxidation_of` (0.95) |
| Advanced Glycation End Products → Aging | 3 | `accelerate` (0.9)<br>`contributes_to` (0.94)<br>`accumulate_with` (0.95) |
| Aminoguanidine → Advanced Glycation End Products | 3 | `prevents_formation_of` (0.92)<br>`inhibits` (0.95)<br>`is_a_type_of` (0.97) |
| Aminoguanidine → Diabetic nephropathy | 3 | `targets` (0.88)<br>`treats` (0.9)<br>`investigated_for` (0.9) |
| AP-1 → SASP | 3 | `promotes` (0.86)<br>`drives` (0.9)<br>`acts_as_pioneer_factor_for` (0.95) |
| Autophagy → Cancer | 3 | `is_pro_survival_in` (0.85)<br>`supports` (0.85)<br>`has_dual_role_in` (0.95) |
| CD38 → NAD+ | 3 | `degrades` (0.92)<br>`consumes` (0.95)<br>`preserves` (0.95) |
| COMT → Dopamine | 3 | `is_direct_metabolic_gateway_to` (0.4)<br>`is_direct_metabolic_hub_for` (0.4)<br>`metabolizes` (0.96) |
| COMT → Epinephrine | 3 | `is_direct_metabolic_hub_for` (0.4)<br>`metabolizes` (0.95)<br>`methylates` (0.95) |
| mTOR → Aging | 3 | `drives` (0.94)<br>`accelerates` (0.95)<br>`regulates` (0.95) |
| Neuromelanin → Parkinson's Disease | 3 | `bidirectionally_linked_with` (0.95)<br>`is_marker_of` (0.95)<br>`risk_factor_for` (0.95) |
| Neutrophils → Reactive Oxygen Species | 3 | `generate` (0.85)<br>`produces` (0.9)<br>`produce` (0.95) |
| SIRT1 → Cardiac Hypertrophy | 3 | `protects_against` (0.9)<br>`has_a_dual_role_in` (0.9)<br>`dose_dependently_affects` (0.95) |
| SIRT4 → Glutamine metabolism | 3 | `functions_in` (0.9)<br>`suppresses` (0.9)<br>`inhibits` (0.95) |
| SIRT6 → NF-κB | 3 | `suppresses` (0.9)<br>`inhibited_by` (0.9)<br>`inhibits` (0.95) |
| Sirtuins → NAD+ | 3 | `depend_on` (0.9)<br>`use` (0.95)<br>`requires` (0.95) |
| Urolithin A → Mitophagy | 3 | `enhances` (0.88)<br>`induces` (0.91)<br>`promotes` (0.95) |
| 3-Nitrotyrosine → Nitrative Stress | 2 | `is_a_biomarker_for` (0.95)<br>`is_the_most_characteristic_modification_of` (0.95) |
| 5,6-indolequinone → Neuromelanin | 2 | `bidirectionally_linked_with` (0.95)<br>`converts_to` (0.95) |
| 6-hydroxydopamine → Parkinson's Disease | 2 | `bidirectionally_linked_with` (0.95)<br>`causes` (0.95) |
| Acid ceramidase → GPX4 | 2 | `bypasses` (0.85)<br>`acts_independently_of` (0.93) |
| Acute Stress-Associated Phenotype → ATM | 2 | `is_characterized_by` (0.9)<br>`drives` (0.9) |
| Acute Stress-Associated Phenotype → SASP | 2 | `transitions_to` (0.9)<br>`precedes` (0.9) |
| Adrenochrome → Cardiotoxicity | 2 | `associates_with` (0.7)<br>`causes` (0.9) |
| Adrenochrome → indoline-5,6-dione | 2 | `contains` (0.9)<br>`is_a` (0.95) |
| Adrenochrome → o-quinone | 2 | `has_ortho_quinoid_structure` (0.85)<br>`is_a` (0.9) |
| Adrenochrome → Oxidative Stress | 2 | `is_a_marker_of` (0.8)<br>`induces` (0.85) |
| Adrenochrome → Redox Cycling | 2 | `undergoes` (0.9)<br>`participates_in` (0.95) |
| Adrenochrome Hypothesis → Schizophrenia | 2 | `associates_with` (0.85)<br>`associates` (0.9) |
| Adrenochrome monoaminoguanidine → Hemostatics | 2 | `acts_as` (0.9)<br>`is_a_type_of` (0.95) |
| Adrenolutin → Adrenochrome | 2 | `is_a_metabolite_of` (0.7)<br>`derives_from` (0.8) |
| Advanced Glycation End Products → RAGE | 2 | `bind_to` (0.95)<br>`bind` (0.95) |
| Alagebrium → Cross-linking | 2 | `breaks` (0.88)<br>`cleaves` (0.9) |
| Amadori products → Advanced Glycation End Products | 2 | `convert_to` (0.95)<br>`rearrange_to` (0.95) |
| Amino-chrome → Alpha-synuclein | 2 | `bidirectionally_linked_with` (0.95)<br>`binds_to` (0.95) |
| Aminoguanidine → Albuminuria | 2 | `prevents` (0.92)<br>`improves` (0.93) |
| Aminoguanidine → Dicarbonyls | 2 | `scavenges` (0.9)<br>`traps` (0.9) |
| Apigenin → PRDX6 | 2 | `inhibits_ipla2_activity_of` (0.93)<br>`binds` (0.96) |
| Apigenin → SASP | 2 | `blocks_transition_to` (0.9)<br>`suppresses` (0.96) |
| Autophagy → Proteostasis | 2 | `bidirectionally_linked_with` (0.95)<br>`regulates` (0.95) |
| BRD4 → SASP | 2 | `promotes` (0.88)<br>`drives` (0.95) |
| Butein → SIRT1 | 2 | `activates_via_k_type` (0.75)<br>`activates` (0.85) |
| Cancer → Aging | 2 | `is_a_risk_factor_for` (0.95)<br>`shares_epigenetic_features_with` (0.95) |
| Cancer Stem Cells → Ivermectin | 2 | `are_inhibited_by` (0.75)<br>`is_suppressed_by` (0.9) |
| Carbazochrome → Hemostatics | 2 | `is_a` (0.9)<br>`is_a_type_of` (0.95) |
| CD73 → Nicotinamide Riboside | 2 | `converts_to` (0.9)<br>`converts` (0.9) |
| Complex I → Mitochondrial Dysfunction | 2 | `bidirectionally_linked_with` (0.95)<br>`impairs` (0.95) |
| Cytoplasmic Chromatin Fragments → cGAS-STING Pathway | 2 | `activate` (0.9)<br>`activates` (0.95) |
| Daratumumab → CD38 | 2 | `targets` (0.4)<br>`is_a` (0.95) |
| Dopamine → Dopaminochrome | 2 | `oxidizes_to` (0.85)<br>`converts_to` (0.95) |
| Dopamine → Neuromelanin | 2 | `binds_to` (0.75)<br>`converts_to` (0.95) |
| Dopamine Transporter → Striatum | 2 | `is_primary_clearance_in` (0.92)<br>`is_highly_abundant_in` (0.93) |
| Dopaminochrome → Neuromelanin | 2 | `bidirectionally_linked_with` (0.95)<br>`converts_to` (0.95) |
| Exercise → Mitohormesis | 2 | `induces` (0.9)<br>`stimulates` (0.9) |
| Fenbendazole → Microtubule | 2 | `interferes_with` (0.75)<br>`destabilizes` (0.95) |
| Fenbendazole → p53 | 2 | `activates` (0.75)<br>`stabilizes` (0.9) |
| Fenton reaction → Hydroxyl Radicals | 2 | `is_the_primary_mechanism_converting` (0.95)<br>`produces` (0.95) |
| Fisetin → SASP | 2 | `reduces` (0.5)<br>`suppresses` (0.85) |
| Fisetin → SIRT1 | 2 | `activates` (0.75)<br>`activates_via_k_type` (0.75) |
| FSP1 → Plasma Membrane | 2 | `localized_to` (0.95)<br>`tethered_to` (0.95) |
| GPX4 → Ferroptosis | 2 | `inhibits` (0.95)<br>`protects_against` (0.95) |
| Gut Microbiome → Nicotinamide Mononucleotide | 2 | `produces` (0.85)<br>`deamidates` (0.9) |
| Hormesis → Biphasic Dose-Response Curve | 2 | `is_explainable` (0.93)<br>`increases_with` (0.94) |
| Hyperglycemia → Glycation | 2 | `increases` (0.95)<br>`accelerates` (0.95) |
| IDO1 → Tryptophan | 2 | `depletes` (0.93)<br>`catalyzes` (0.96) |
| IL-6 → SASP | 2 | `is_upregulated_in` (0.95)<br>`is_a_component_of` (0.96) |
| Iron → Neuromelanin | 2 | `bidirectionally_linked_with` (0.95)<br>`binds_to` (0.95) |
| Ivermectin → Docetaxel | 2 | `reverses_resistance_to` (0.75)<br>`synergizes_with` (0.75) |
| Ivermectin → Enzalutamide | 2 | `reverses_resistance_to` (0.75)<br>`enhances` (0.8) |
| Ivermectin → PAK1 | 2 | `inhibits` (0.75)<br>`promotes_degradation_of` (0.95) |
| JNK → Bim | 2 | `activates` (0.95)<br>`phosphorylates` (0.95) |
| L-DOPA → Dopamine | 2 | `bidirectionally_linked_with` (0.95)<br>`converts_to` (0.95) |
| L-Tyrosine → L-DOPA | 2 | `bidirectionally_linked_with` (0.95)<br>`converts_to` (0.95) |
| Locus Coeruleus → Parkinson's Disease | 2 | `bidirectionally_linked_with` (0.95)<br>`degenerates_in` (0.95) |
| Luteolin → COMT | 2 | `can_inhibit` (0.92)<br>`is_metabolized_by` (0.93) |
| Manganese → Manganism | 2 | `bidirectionally_linked_with` (0.95)<br>`causes` (0.95) |
| MAO → Epinephrine | 2 | `metabolizes` (0.4)<br>`deaminates` (0.95) |
| MDM2 → p53 | 2 | `blocks` (0.95)<br>`degrades` (0.95) |
| Metformin → Mitohormesis | 2 | `activates` (0.8)<br>`exploits` (0.9) |
| Methylene blue → Methemoglobin Reductase | 2 | `activates` (0.8)<br>`is_reduced_by` (0.95) |
| Methylene blue → Mitochondrial Electron Transport Chain | 2 | `enhances` (0.9)<br>`bypasses` (0.94) |
| Methylene blue → Serotonin Syndrome | 2 | `triggers` (0.9)<br>`causes` (0.95) |
| MFN2 → Charcot-Marie-Tooth Disease Type 2A | 2 | `causes` (0.95)<br>`mutation_causes` (0.97) |
| Microgliosis → Neuroinflammation | 2 | `bidirectionally_linked_with` (0.95)<br>`causes` (0.95) |
| Mitochondrial Fission → Mitophagy | 2 | `facilitates` (0.88)<br>`is_required_for` (0.95) |
| Mitophagy → Autophagy | 2 | `is_a_subtype_of` (0.95)<br>`is_a_type_of` (0.97) |
| MPTP → Parkinson's Disease | 2 | `bidirectionally_linked_with` (0.95)<br>`causes` (0.95) |
| mTOR → SASP | 2 | `promotes` (0.93)<br>`regulates` (0.95) |
| mTORC1 → Autophagy | 2 | `suppresses` (0.9)<br>`inhibits` (0.95) |
| Myeloperoxidase → Hypochlorous acid | 2 | `produces` (0.9)<br>`converts` (0.95) |
| NAD+ → Sirtuins | 2 | `activates` (0.92)<br>`is_required_for` (0.94) |
| NADPH oxidase → Superoxide Radicals | 2 | `generates` (0.95)<br>`produces` (0.95) |
| Neuromelanin → Chemical memory | 2 | `regulates` (0.75)<br>`bidirectionally_linked_with` (0.95) |
| Neuromelanin → Dopamine | 2 | `binds_to` (0.75)<br>`bidirectionally_linked_with` (0.95) |
| Neuromelanin → Iron | 2 | `binds_to` (0.95)<br>`chelates` (0.95) |
| Neuromelanin → Locus Coeruleus | 2 | `accumulates_in` (0.95)<br>`located_in` (0.95) |
| Neuromelanin → Oxidative Stress | 2 | `causes` (0.95)<br>`protects_against` (0.95) |
| NF-κB → IL-6 | 2 | `regulates` (0.9)<br>`upregulates` (0.95) |
| NF-κB → SASP | 2 | `sustains` (0.92)<br>`regulates` (0.96) |
| Nicotinamide → Sirtuins | 2 | `inhibits` (0.9)<br>`feedback_inhibits` (0.95) |
| Nicotinamide Riboside → Insulin Sensitivity | 2 | `fails_to_improve` (0.9)<br>`improves` (0.9) |
| Nicotinamide Riboside → NAAD | 2 | `elevates` (0.9)<br>`increases` (0.95) |
| Nicotinamide Riboside → NAD+ | 2 | `increases` (0.95)<br>`converts_to` (0.95) |
| Nigrostriatal System → Parkinson's Disease | 2 | `bidirectionally_linked_with` (0.95)<br>`degenerates_in` (0.95) |
| Noncanonical Inflammasome → Inflammasome | 2 | `activates` (0.88)<br>`is_a_type_of` (0.9) |
| Oncogene-Induced Senescence → Navitoclax | 2 | `is_cleared_by` (0.85)<br>`is_susceptible_to` (0.9) |
| OPA1 → Dominant Optic Atrophy | 2 | `causes` (0.95)<br>`mutation_causes` (0.96) |
| p53 → Cancer | 2 | `is_a_tumor_suppressor` (0.95)<br>`is_mutated_in` (0.95) |
| p53 → Cellular Reprogramming | 2 | `limits` (0.95)<br>`activated_by` (0.95) |
| p53 → Puma | 2 | `activates` (0.92)<br>`induces` (0.95) |
| Paracrine Senescence → Cancer | 2 | `can_promote` (0.68)<br>`suppresses_tumor` (0.7) |
| Parkinson's Disease → Hypokinesia | 2 | `bidirectionally_linked_with` (0.95)<br>`characterized_by` (0.95) |
| Pathogenic Threshold of Neuromelanin → Parkinson's Disease | 2 | `bidirectionally_linked_with` (0.95)<br>`causes` (0.95) |
| Peroxynitrite → Nitrative Stress | 2 | `causes` (0.95)<br>`is_the_key_mediator_of` (0.95) |
| Peroxynitrite → Nitric Oxide | 2 | `depletes` (0.95)<br>`is_formed_by` (0.95) |
| PGC-1α → Mitochondrial Biogenesis | 2 | `drives` (0.92)<br>`regulates` (0.95) |
| PINK1 → Mitophagy | 2 | `regulates` (0.9)<br>`initiates` (0.95) |
| Rapamycin → Autophagy | 2 | `induces` (0.95)<br>`activates` (0.96) |
| Rapamycin → Immune System | 2 | `suppresses` (0.9)<br>`improves` (0.94) |
| Rapamycin → Longevity | 2 | `extends` (0.96)<br>`extends_lifespan_in` (0.96) |
| Rapamycin → mTORC1 | 2 | `binds` (0.96)<br>`inhibits` (0.97) |
| Rapamycin → Senescence | 2 | `delays` (0.88)<br>`reverses` (0.9) |
| Resveratrol → SIRT1 | 2 | `does_not_directly_activate_at_physiological_dose` (0.6)<br>`activates` (0.95) |
| SASP → Inflammaging | 2 | `drives` (0.94)<br>`contributes_to` (0.95) |
| SASP → NF-κB | 2 | `regulated_by` (0.95)<br>`is_regulated_by` (0.96) |
| Senescence → Cancer | 2 | `can_promote` (0.72)<br>`suppresses_tumor` (0.95) |
| Senescence → SASP | 2 | `characterized_by` (0.95)<br>`produces` (0.97) |
| Senomorphic → SASP | 2 | `suppresses` (0.93)<br>`disrupts` (0.95) |
| SIRT1 → Cellular Senescence | 2 | `functions_in_aging` (0.9)<br>`inhibits` (0.95) |
| SIRT1 → COPD | 2 | `is_decreased_in` (0.95)<br>`is_decreased_in_lungs_of_patients_with` (0.95) |
| SIRT1 → eNOS | 2 | `activated_by` (0.9)<br>`deacetylates` (0.95) |
| SIRT1 → FOXO1 | 2 | `forms_positive_feedback_loop_with` (0.95)<br>`deacetylates` (0.95) |
| SIRT1 → Insulin Secretion | 2 | `promotes` (0.9)<br>`functions_in` (0.9) |
| SIRT1 → Lifespan | 2 | `brain_specific_brasto_overexpression_extends` (0.95)<br>`global_overexpression_fails_to_extend` (0.95) |
| SIRT1 → LKB1 | 2 | `inhibited_by` (0.9)<br>`deacetylates` (0.95) |
| SIRT1 → p53 | 2 | `inhibited_by` (0.9)<br>`deacetylates` (0.95) |
| SIRT1 → p66Shc | 2 | `negatively_regulates` (0.9)<br>`inhibits` (0.9) |
| SIRT1 → PGC-1α | 2 | `regulates` (0.91)<br>`deacetylates` (0.95) |
| SIRT1 → SIRT6 | 2 | `activates` (0.9)<br>`has_lower_structural_confidence_than` (0.95) |
| SIRT1 → SREBP-1c | 2 | `deacetylates` (0.9)<br>`inhibits` (0.9) |
| SIRT2 → FOXO1 | 2 | `inhibits` (0.9)<br>`deacetylates` (0.95) |
| SIRT2 → NF-κB | 2 | `inhibited_by` (0.9)<br>`deacetylates` (0.95) |
| SIRT2 → Parkinson's Disease | 2 | `is_harmful_in` (0.85)<br>`is_overexpressed_in` (0.95) |
| SIRT2 → TFEB | 2 | `stabilizes` (0.5)<br>`promotes_mrna_stability_of` (0.95) |
| SIRT3 → Acute Kidney Injury | 2 | `is_protective_in` (0.9)<br>`protects_against` (0.95) |
| SIRT3 → Adrenochrome | 2 | `has_redundant_path_to` (0.4)<br>`has_stronger_latent_link_to` (0.4) |
| SIRT3 → COPD | 2 | `inhibits_airway_epithelial_mitochondrial_oxidative_stress_in` (0.95)<br>`is_reduced_in` (0.95) |
| SIRT3 → FOXO3a | 2 | `activated_by` (0.9)<br>`activates` (0.95) |
| SIRT3 → HIF-1α | 2 | `destabilizes` (0.95)<br>`inhibits` (0.95) |
| SIRT3 → LKB1 | 2 | `activates` (0.85)<br>`deacetylates` (0.95) |
| SIRT3 → Longevity | 2 | `is_isoform_directly_linked_to` (0.95)<br>`protective_genetic_variant_associated_with` (0.95) |
| SIRT3 → Mitophagy | 2 | `activates` (0.9)<br>`promotes` (0.95) |
| SIRT3 → MnSOD | 2 | `activates` (0.9)<br>`deacetylates` (0.95) |
| SIRT4 → AMPK | 2 | `inhibited_by` (0.9)<br>`inhibits` (0.9) |
| SIRT4 → Insulin Secretion | 2 | `inhibits` (0.85)<br>`functions_in` (0.9) |
| SIRT5 → Fatty acid oxidation | 2 | `functions_in` (0.9)<br>`functions_in_aging` (0.9) |
| SIRT5 → LDHB | 2 | `desuccinylates` (0.85)<br>`deacetylates` (0.95) |
| SIRT6 → c-Myc | 2 | `inhibits` (0.9)<br>`inhibits_transcriptional_activity_of` (0.95) |
| SIRT6 → Cardiac Hypertrophy | 2 | `is_protective_in` (0.9)<br>`protects_against` (0.9) |
| SIRT6 → GCN5 | 2 | `activates` (0.95)<br>`deacetylates` (0.95) |
| SIRT6 → Glycolysis | 2 | `suppresses` (0.9)<br>`enhances_radiosensitivity_by_inhibiting` (0.95) |
| SIRT6 → HIF-1α | 2 | `corepresses` (0.9)<br>`represses` (0.95) |
| SIRT6 → TGFβ | 2 | `inactivates` (0.85)<br>`inhibits` (0.95) |
| SIRT7 → Breast Cancer | 2 | `is_upregulated_in` (0.9)<br>`is_overexpressed_in` (0.95) |
| SIRT7 → HIF-1α | 2 | `inhibits` (0.9)<br>`inhibited_by` (0.9) |
| Sodium Metabisulfite → Epinephrine | 2 | `stabilizes` (0.85)<br>`prevents_oxidation_of` (0.9) |
| Spermidine → Autophagy | 2 | `enhances` (0.95)<br>`induces` (0.95) |
| Spermidine → eIF5A | 2 | `hypusinates` (0.95)<br>`activates_via_hypusination` (0.95) |
| synaptic plasticity → Chemical memory | 2 | `causes` (0.75)<br>`bidirectionally_linked_with` (0.95) |
| Therapy-Induced Senescence → Cancer | 2 | `can_promote` (0.7)<br>`has_dual_role_in` (0.95) |
| VEGF → Angiogenesis | 2 | `stimulates` (0.91)<br>`drives` (0.95) |
| Vesicular Monoamine Transporter 2 → Dopamine | 2 | `bidirectionally_linked_with` (0.95)<br>`transports` (0.95) |
| Vitamin E → Lipid Peroxidation | 2 | `inhibits` (0.95)<br>`terminates` (0.95) |
| Xanthine Oxidase → Superoxide Radicals | 2 | `generates` (0.95)<br>`produces` (0.95) |

## 稽核清單期間已套用的修正（2026-09-01）

1. **殘留的無意義繫詞（T2-5 型態）— 已排除。** 清查清單浮現另外兩條
   `--is--> COMT` 繫詞，其本身的語境描述的是非抑制關係
   （正確的 `does_not_inhibit` 邊已存在）：
   - `Berberine --is--> COMT` (0.72，id `91e5dcc28f1e`) — 已移除
   - `Hesperidin --is--> COMT` (0.72，id `5426859675fa`) — 已移除
   修正後建置：3894 組節點對上的 4092 條連結（198 條超額連結、177 組平行節點對）。

## 其餘待辦候選項目

1. **動詞形式的重複（T3-1 型態）：** 承載 generate/produces/
   produce 這類近乎重複述詞的節點對——在未來的處理中對照標準動詞
   去重複：

| 節點對 | 近乎重複的述詞 |
|---|---|
| NADPH oxidase → Superoxide Radicals | generates / produces |
| Neutrophils → Reactive Oxygen Species | generate / produce / produces |
| Xanthine Oxidase → Superoxide Radicals | generates / produces |

2. **同節點對內的極性矛盾刻意保留：** 例如
   `rapamycin → immune_system`（suppresses 0.9 / improves 0.94，開放性
   衝突 T1-4）、`nicotinamide_riboside → insulin_sensitivity`
   （fails_to_improve / improves，T1-5）、`senescence/paracrine_senescence
   → cancer`（雙重角色，T3-4a）、`resveratrol → sirt1`（具爭議的直接
   活化，T3-3a）——這些才是科學上有價值的內容，並非去重複的候選。
3. **平行節點對上的低於 0.5 推測性邊：** 例如
   `SIRT3 → Adrenochrome`（`has_redundant_path_to` 0.4 /
   `has_stronger_latent_link_to` 0.4）——為下一輪審查的候選項目。

**成品：** `wiki-out/graph-diff.json` 現已承載 `triples_edge_pairs` /
`wiki_edge_pairs`；`GRAPH_DIFF.md` 明確陳述節點對 vs 連結的細微差異。
