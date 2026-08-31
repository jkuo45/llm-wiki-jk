---
title: "腎上腺素紅協定網路追蹤，第三輪 — 三元組修復"
description: 為下一次圖譜建構所做的第三輪準備 — 完全在 src/**/_triples.json 內解決第二輪的後續事項（NMN／GlyNAC／比例／NF-κB／Complex I），並以初級文獻為依據。
created: 2026-08-24
tags:
  - task-output
  - adrenochrome
  - knowledge-graph
  - nad-plus
  - network-analysis
---

# 任務輸出 - 腎上腺素紅協定網路追蹤，第三輪（三元組修復）- 2026年8月24日

**範圍：** 第二輪的後續事項 (a)–(e)，外加第 6 項 NF-κB 裁決，全部**僅**實作於 `src/**/_triples.json`。未手動編輯 graph.json。圖譜重建由 Graphify 外掛觸發（此處無法從 bash 重現，因為 `graphify` 是 opencode 外掛，而 `scripts/triples/rebuild.py` 會匯入一個未安裝於此環境的模組）。

**驗證方式：** 模擬 Graphify 的節點正規化（`norm(label) = lower, non-alnum → '_'`），從全部 11 個 `_triples.json` 檔重建節點／邊集合，並確認第二輪的每個缺陷都已解決。`scripts/triples/normalize.py` 執行乾淨（4084 個三元組，0 個驗證問題，0 個重複 id）。

## 依事項的變更內容

### (e) NMN 連線 / 實體統一
- `src/notes/_link/_triples.json`：將 `restores → Intestinal Stem Cell` 三元組的主詞 `NMN` → `Nicotinamide Mononucleotide`。
- `src/notes/sirtuins/_triples.json`：將 `NMN (Nicotinamide Mononucleotide)` 與 `NR (Nicotinamide Riboside)` 重新命名為正規標籤；將 `NAMPT → Nicotinamide to NMN` 改寫為 `→ Nicotinamide Mononucleotide`；將複合主詞 `CD38 inhibitor 78c → NMN and NR` 與 `NAD-boosting molecules (NMN, NR) → all seven sirtuins` 各自拆分為兩個正規三元組（目標為 `Nicotinamide Mononucleotide`／`Nicotinamide Riboside` 與 `Sirtuins` 中樞節點）。
- `src/notes/adrenochrome/_triples.json`：新增 `Nicotinamide Riboside --converts_to(0.95)--> Nicotinamide Mononucleotide`（連接 NR 與 NMN 燃料子圖、原本缺失的 NMRK 橋樑）。
- **結果：** 單一 NMN 節點，度數 **31**（原先為度數 1 的 `nmn` 孤立點）。下一輪的 run-E 重追蹤必須改用來源 `nicotinamide_mononucleotide`。

### (d) GlyNAC 三元組回寫
- `src/notes/adrenochrome/_triples.json`：新增 `GlyNAC` 節點，度數 **10**。10 條直接三元組（組成 `Glycine`／`N-Acetylcysteine`；`increases → Glutathione`；相對於氧化壓力、粒線體功能、發炎、胰島素敏感性的臨床效應；`buffers → Adrenochrome`（0.8，初級文獻支持）、`synergizes_with → Carbazochrome`（0.5，SRAC 協定假說）、`activates → NRF2`）+ 5 條前驅物鏈結邊（`Glycine/N-Acetylcysteine/Cysteine → Glutathione`、`N-Acetylcysteine → Cysteine / replenishes Glutathione / reduces Oxidative Stress`）。
- **結果：** 將 `Glycine`（原先是 `Creatine` 的懸垂點）與 `N-Acetylcysteine`（原先僅能透過 `blocks → Mitohormesis` 到達觸發點）拉入協定子圖的穀胱甘肽／氧化還原緩衝臂。

### (b) SIRT3/SIRT4 比例連結
- `src/notes/sirtuins/_triples.json`：將 `SIRT3/SIRT4 ratio` → `SIRT3-SIRT4 Ratio`（符合實體筆記 `notes/sirtuins/SIRT3-SIRT4 Ratio.md`）；將 `Hormetic window` 正規化為 `Hormetic Window`。新增 `SIRT3 --determines→`、`SIRT4 --determines→` 與 `SIRT3-SIRT4 Ratio --correlates_with→ MnSOD (0.85)`，為生物標記鏈提供機制基質。
- **結果：** 比例節點度數 **4**，鄰居為 `sirt3`、`sirt4`、`mnsod`、`hormetic_window`。

### (a) Carbazochrome → Complex I（已裁決，含初級文獻）
- 文獻（Genova 等，*Arch Biochem Biophys* 2006，PMID 16487923；Bindoli 等，*BBA Bioenergetics* 1990，PMID 2158818）顯示 Complex I 將腎上腺素紅還原為其半醌，後者自氧化產生超氧陰離子，形成放大 ROS 的氧化還原循環。因此腎上腺素紅是 Complex I 上的電子受體。`Adrenochrome --redox_cycles_at(0.9)--> Complex I` 保留，並引用上述初級文獻。
- Carbazochrome 是**腎上腺素紅一縮胺基脲**（PubChem CID 2557；日本藥學會誌 1956 結構論文；美國專利 2506294），由腎上腺素紅的醌羰基與縮胺基脲縮合而成，目的正是使其「相對化學不活潑」。因此先前基於類比的 `Carbazochrome --redox_cycles_at(0.5)--> Complex I` 邊**缺少支持證據且已移除**；取而代之新增 `Carbazochrome --is_derivative_of(0.95)--> Adrenochrome`（以初級文獻為依據）。
- **結果：** 此舉裁決了第二輪事項 G（MB ⇄ carbazochrome 擴增器衝突）。作為氧化還原活性被削弱的類似物，carbazochrome 在 Complex I 與 MB 競爭的可能性**更低** — 這是以證據為基礎的「無效」結論，而非可疑的邊。

### (b-add) NF-κB 裁決（第二輪方向陷阱，NR 路徑的 7/8）
- 儲存的 `Adrenochrome --inhibits(0.6, AMBIGUOUS)--> NF-κB` 邊是 **senomorphic 假說**（SRAC 框架），並非普遍生物學。將信心值下調至 **0.5**，並重寫脈絡，標註其具爭議性，對照廣泛證據支持的方向。
- 新增具證據支持、方向明確的邊：`Oxidative Stress --activates(0.9)--> NF-κB`（位於 `oxidative_stress/_triples.json`），驅動 SASP／發炎。這為燃料線提供一條不單獨依賴該具爭議邊的證據路徑。

### (c) + 實體解析：去重與 NF-κB 變體合併
- 將 6 個裸 NF-κB 變體合併為正規 `NF-κB`：`NF-kB`、`NF-kappaB`、`NF-kappa B signaling`、`NF-κB p65`、`NF-κB signaling pathway`、`RelA/p65 (NF-κB subunit)`（橫跨 `_link`、`sirtuins`、`oxidative_stress`、`senescence`、`tasks`）。正規 `nf_b` 節點度數由 **48 → 64**。
- 對全部 11 個檔案執行檔內對稱／重複摺疊（即第二輪在建構時的「180 組重複配對」；跨檔案的同方向重複是建構本身已會摺疊的平行證據）。不再有完全重複的三元組或重複 id。

## 下一次建構的預期

| 缺陷（第二輪） | 之前 | 本次修復後 |
| --- | --- | --- |
| NMN 連線 | 度數 1 的 `nmn` 孤立點，在巨型連通分量之外 | 單一 `nicotinamide_mononucleotide`，度數 31 |
| GlyNAC | 無節點 | `glynac`，度數 10，位於穀胱甘肽臂 |
| SIRT3/SIRT4 比例 | 度數 1×2，與 SIRT3/SIRT4/MnSOD 斷開 | 度數 4，連結前述三者 + Hormetic Window |
| Carbazochrome→ETC | 圖譜沈默 | `is_derivative_of → Adrenochrome`（0.95）；衝突假說裁決為以證據為基礎的無效 |
| NF-κB 方向 | 單一 AMBIGUOUS 邊承載 NR 的 7/8 路徑 | 具爭議邊已標註（0.5）+ 新增正規 `Oxidative Stress → NF-κB` |
| NF-κB 碎片 | 6 個裸變體 | 合併為正規 `nf_b`（度數 64） |

**對下一次建構的建議重追蹤：** `scripts/analysis/node_analysis.py --sources nicotinamide_riboside nicotinamide_mononucleotide n_acetylcysteine glynac methylene_blue carbazochrome --targets adrenochrome`，接續信心加權的 PPR 重新排名（F），以確認頂層（AG #4／MB #8）保持穩定，且 NR 的多路徑計數不再依賴具爭議的 NF-κB 邊。

## 殘餘缺口／建議（此處未變更）

- **跨檔案平行邊**（同一 A→B 在兩個檔案中各被主張）仍然存在；建構會將其摺疊，但若能有建構期的去重旗標（Phase 0c）會更明確，而非依賴外掛行為。
- **NF-κB 的「blocked NF-kappaB」／「VCAM-1 transcription」子節點** 刻意保留為獨立概念。
- `GlyNAC --buffers → Adrenochrome`（0.8）現已有初級文獻支持（DT-diaphorase 將腎上腺素紅維持於還原態白形式，PMID 2113029；胺基色體耗竭穀胱甘肽，PMID 2665188）；粒線體激素性氧化還原繼電器模型中「2 倍 GSH 偏移」的具體數值仍屬理論推測。
- `GlyNAC --synergizes_with → Carbazochrome`（0.5）是一項協定設計假說（SRAC／combo-therapy 文件），並非直接由基礎醫學文獻確立；其依據來自各自獨立支持的 `GlyNAC → Glutathione` 與 `Carbazochrome → Adrenochrome (is_derivative_of)` 邊。
