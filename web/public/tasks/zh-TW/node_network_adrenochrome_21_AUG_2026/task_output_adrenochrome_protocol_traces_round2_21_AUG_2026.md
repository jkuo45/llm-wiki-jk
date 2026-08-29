---
title: "腎上腺色素協定網路追蹤，第二輪"
description: 第二輪圖譜追蹤，執行五項排隊的分析——NAD+ 燃料線連線（NR 對 NMN 對 GlyNAC）、協定階梯的置信度加權 PPR 重新排序、MB-卡巴色腙 Complex-I 競爭子圖、 hormetic-window/SIRT3-SIRT4 自我圖，以及 NF-κB 實體解析重跑。
created: 2026-08-21
tags:
  - task-output
  - adrenochrome
  - knowledge-graph
  - nad-plus
  - network-analysis
---

# 任務輸出 — 腎上腺色素協定網路追蹤，第二輪（燃料線、放大器衝突、生物標記、加權重排序、NF-κB 去重）— 2026 年 8 月 21 日

**圖譜建構：** `graphify-out/graph.json` — 2,596 個節點 / 3,737 條邊（巨連通分量 2,110 / 3,295），建構 `867a5ae5fdb8a46c`（與第一輪相同，未變）
**工具：** `scripts/04_node_analysis.py` + `supplementary_traces_F_G_H_I.py`（RANDOM_SEED=1 慣例）
**目的：** 執行 `task_output_adrenochrome_protocol_traces_20_AUG_2026.md` 中排隊的五項追蹤：（E）將 NAD⁺ 燃料線併入追蹤集；（F）Phase 3 置信度加權 PPR 對完整階梯的重新排序；（G）MB ⇄ carbazochrome Complex-I 競爭子圖；（H）Hormetic Window / SIRT3-SIRT4 比值自我圖；（I）實體解析後的重跑（NF-κB 變體合併）。餵入即時頁面 `web/pages/en-US/adrenochrome-protocol-node-network-analysis.html`。

## 執行紀錄

| 紀錄 | 指令 / 方法 |
| --- | --- |
| `run_log_E_sources_fuel_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources nicotinamide_riboside nad n_acetylcysteine methylene_blue carbazochrome --targets adrenochrome` |
| `run_log_F_G_H_I_supplementary.txt` | `uv run --with networkx --with scipy python3 supplementary_traces_F_G_H_I.py`（執行 F–I，單一已種子腳本封存於此目錄） |

## 重要發現

### E. 燃料線：NR 與觸發點連線良好，NMN 是殘樁，GlyNAC 無節點

- **Nicotinamide Riboside**（度數 57，k-core 5）：經由橋接 SIRT1、SIRT3、TNFα、IL-6、Neuroinflammation、Amyloid Beta、Hematopoietic Stem Cell，有 **8 條共同最短路徑** 至腎上腺色素。@Adr 的 PPR 為 **#86**（0.00197）；有效電阻 **0.134（z −1.73）**——所有被追蹤協定藥劑中第二接近者（rapamycin 0.130 / z −1.74 仍為最接近；NR 險勝 MB 的 0.164）。Fiedler +0.0037（適應側）。Jaccard(NR, Adr) = 0.000；Adamic–Adar 0.000（未提議任何邊）。
- **方向審計注意事項：** NR 的 8 條最短路徑中有 7 條終止於既有的反向印出 `NF-κB --[inhibits|0.6]--> Adrenochrome`；儲存的三元組為 `Adrenochrome --inhibits--> NF-κB`（0.6，含混不清）。NR 表面上的緊密性搭乘了圖譜中最弱、最具爭議的邊。它的兩條不依賴 NF-κB 的路徑：`NR --reduces(0.9)--> Neuroinflammation --causes(0.95)--> Neuromelanin --sequesters(0.8)--> Adrenochrome` 以及 `NR --reduces(0.9)--> Amyloid Beta --induces(0.95)--> Lipid Peroxidation --promotes(0.7)--> Adrenochrome`。
- **NMN** 是**位於巨連通分量之外、度數為 1 的殘樁**：它唯一的二元組是 `NMN --[restores|0.9]--> Intestinal Stem Cell`。*沒有*任何儲存的連線將 NMN 連至 NAD+ 生物合成、NR 或觸發點。所有「NR/NMN」協定燃料的宣稱目前僅由 NR 節點單獨承載。
- **GlyNAC** 沒有節點。分量級追蹤：**Glycine** 本身為度數 1（`Creatine --is_synthesized_from(0.85)--> Glycine`，在 creatine 社群中的懸垂節點）；**N-Acetylcysteine**（度數 2）僅透過一條路徑到達腎上腺色素——`NAC --blocks(0.95)--> Mitohormesis --requires(0.9)--> ROS --generates(0.95)--> Adrenochrome`。**協定的氧化還原緩衝臂僅透過一條會*阻斷* hormetic 臂的邊到達觸發點**——PPR #764、Fiedler +0.0039（適應側）、k-core 2。GlyNAC 實體在能作為一體被追蹤之前，仍需要一次三元組回寫。

### F. 置信度加權 PPR 重新排序（Phase 3）：階梯對加權具穩健性

加權 PPR（`weight = confidence_score`）對比未加權，以 Adrenochrome 為種子：

| 節點 | 未加權 | 加權 | Δ |
| --- | --- | --- | --- |
| Aminoguanidine | #4 | #4 | 0 |
| Methylene blue | #8 | #8 | 0 |
| Ascorbic Acid | #14 | #15 | +1 |
| Carbazochrome | #19* | #14 | −5 |
| Rapamycin | #63 | #59 | −4 |
| Nicotinamide Riboside | #85 | #86 | +1 |
| Mitohormesis | #87 | #89 | +2 |
| Urolithin A | #88 | #90 | +2 |
| Autophagy | #95 | #93 | −2 |
| Creatine | #96 | #95 | −1 |
| Fisetin | #149 | #147 | −2 |
| Spermidine | #176 | #174 | −2 |
| NAD+ | #229 | #224 | −5 |
| Resveratrol | #167 | #181 | +14 |
| Sirtuins | #305 | #305 | 0 |

\* 第一輪的未加權印出將 carbazochrome 報為 #14；重跑印出未加權 #19 / 加權 #14（補充腳本中的平行邊處理會摺疊重複的三元組）。**加權**值與已發布的階梯相符。

解讀：頂層（AG #4、MB #8）在置信度加權下**完全穩定**——§03 的標題排序得到強化。化學配對內部互換（ascorbate/carbazochrome #14/#15 ⇄ #15/#14）。**Resveratrol 移動最多（+14）**：它的多路徑計數取決於置信度較低的 SIRT1/SIRT3/SASP 路線，加權會壓低這些——它表面上的接近性部分是低置信度的膨脹。

### G. MB ⇄ carbazochrome Complex-I 衝突在圖譜中靜默無聲

- Carbazochrome 完整的儲存連線**只有兩條邊**：`Adrenochrome --is_an_intermediate_for(0.95)--> Carbazochrome` 以及 `Carbazochrome --is_a_type_of(0.95)--> Hemostatics`。**在 3 跳範圍內不存在任何電子傳遞鏈邊**，除非經由 Adrenochrome 本身（Carbazochrome → Adrenochrome → Complex I，倍數 1）。
- **Jaccard(Methylene blue, Carbazochrome) = 0.000**——零共享鄰居；兩個 MRR 放大器完全不共享任何中介者。
- MB 在疑似衝突一側的連線完整：`bypasses(0.9)` Complex I/III、`upregulates(0.92)` Complex IV、`shunts_electrons_to(0.95)` cytochrome c，外加先前未報告的 `suppresses(0.9)` glycolysis 與 `fails_to_protect_against(0.95)` glucose oxidase。
- 結論：`task_output_research-scientist_combo_therapy_11_JUN_2026.md` 中標記的放大器衝突假說**在計算上既無法確認也無法否定**——圖譜中不存在 carbazochrome→ETC 的連線可與 MB 的旁路競爭。這是語料的缺口，而非不存在的證據。裁決工單：carbazochrome 的氧化還原循環是否會在體內於 Complex I 抽取電子？

### H. MRR 預測性生物標記是一條兩邊的殘樁，與其自身組成節點斷開

- `SIRT3/SIRT4 ratio --determines(0.95)--> Hormetic Window` 存在——**兩次**（完全相同的重複三元組；去重工單）。
- Hormetic Window 的度數為 **2**：它唯一的邊就是 SIRT3/SIRT4 比值的 `determines` 邊，以及 `Methylene blue --follows(0.95)--> Hormetic Window`。r=2 的自我圖（47 個節點）幾乎完全由 MB 的鄰域撐大。
- `SIRT3/SIRT4 ratio` 節點（度數 1×2）**未連結至 [[SIRT3]]（度數 163）或 [[SIRT4]]（度數 43）**——兩者皆與 MnSOD/SOD2 有豐富連線——也未連結至腎上腺色素／carbazochrome 訊號。SIRT4 → Hormetic Window 的最短路徑為 SIRT4 → Caspases → Cytochrome c → Methylene blue → Hormetic Window，亦即經由 MB，而非經由該比值。
- 結論：combo-therapy 文件中關於預測性生物標記的宣稱（`ratio sets the hormetic window governing whether the signal is adaptive or toxic`）在圖譜中儲存為一條長度為 1 的裸露宣稱鏈，沒有機制性基質。實體解析工單：將該比值節點連結至 SIRT3、SIRT4、MnSOD 以及觸發點家族。

### I. 實體解析後的重跑（NF-κB 合併）：量化的虛無結果

將六個非正典變體（`NF-kB`、`NF-kappaB`、`NF-κB p65`、`RelA/p65 (NF-κB subunit)`、`NF-kappa B signaling`、`NF-κB signaling pathway`）在記憶中合併為正典 `NF-κB`（nf_b，度數 48），並重跑整套測試：

- **臂結構不變：** 三條臂皆保持倍數 1，相同的橋接（ROS / Neuromelanin / SASP），相同的跳數（3/3/4）。Jaccard(Sirtuins, Adrenochrome) 仍為 **0.000**。
- **階梯實質上未移動：** 每個協定藥劑皆保持排名 ±2；Sirtuins #305 → #304；最大位移為 NAC #777 → #783。
- **Fisetin（7 條路徑）與 Resveratrol（8 條路徑）的多路徑計數前後完全相同**——相同的橋接集合。

這**否證了第一輪的預期**——即認為 NF-κB 去重會對 Arm C 以及多酚類的多路徑計數影響最大。這六個變體是度數 1/2 的懸垂節點，不承載任何最短路徑流量；碎片化壓低的是*表面*的度數／PageRank 質量，而非路徑拓撲。後果：

1. H3（「walk-mass 耦合遵循 MH ≈ Auto ≫ Sirt」）在實體解析後倖存——sirtuin 臂的距離是結構性的，而非人為產物。
2. 修復 Phase 0b 就分析目的而言可降為低優先級（為了顯示指標仍值得做）。
3. 新的整潔度發現：原始連結清單帶有 **180 個完全相同的重複無序配對**（例如 `SIRT3/SIRT4 ratio ↔ Hormetic Window ×2`、`Cancer ↔ Paracrine Senescence ×2`）。重建時去重是低成本收益（Phase 0c 工單）。

## 佇列處置

五項排隊的追蹤皆已完成。無任何項目仍處於排隊狀態；改為開啟後續工單：(a) carbazochrome→ETC 文獻裁決，(b) SIRT3/SIRT4 比值實體連結，(c) 重建時重複三元組去重，(d) GlyNAC 三元組回寫，(e) NMN 連線充實（目前為殘樁）。
