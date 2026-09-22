---
title: 鄰近性導向圖譜學習 — 技術與儲存庫實作計畫
description: "將 Scandore 等人（Nature, 2026；鄰近性導向 TAPA 發現）的關鍵圖譜分析技術，映射至 llm-wiki-jk 圖譜管線的具體調整。"
created: 2026-09-21
updated: 2026-09-21
tags: [graph-analysis, link-prediction, task]
---

# 鄰近性導向圖譜學習 — 技術與儲存庫實作計畫

來源：`raw/_document_ - Proximity-guided graph learning reveals tumour-associated proximity antigens.md`
（Scandore et al., Nature 2026, s41586-026-11003-7）

## 論文中的關鍵圖譜分析技術

### 1. MAD 正規化 *t*-統計邊信心度（micromap 前處理）
248 張鄰近圖譜各自以中位數絕對偏差（MAD）正規化，以拉平跨實驗的動態範圍，再對每個蛋白計算 *t*-統計分數。高信心邊：**MAD-*t* ≥ 2.0**。這是穩健的（類 z-score）逐圖譜門檻步驟，將雜訊大的定量蛋白質體學轉為抵抗實驗特異變異的二元／加權鄰近網路。

### 2. Jaccard 鄰域相似度（錨點對錨點）
對**邊集合的成對 Jaccard 指數**（突出 0.4–0.5 區帶），找出鄰近鄰域重疊的受體——區隔結構化空間組織與隨機共定位或豐度驅動的偵測。

### 3. MetaMap — Spearman 相關性後設網路
核心非靶向推斷技巧：建立**蛋白 × micromap 矩陣**（每個蛋白在所有實驗中的富集廓型），再計算蛋白間的**成對 Spearman 秩相關**。鄰近特徵在跨錨點／細胞系共同變異的蛋白形成相關網路 → 門檻化 → **社群偵測**（空間蛋白社群）。
這可推斷從未被直接靶向之蛋白的鄰近性。

### 4. 同質多模態圖譜建構
每個實驗建立單一蛋白圖譜，堆疊三種邊／節點模態：
- **STRING 連通性**（已知／整理的互動組先驗），
- **量測的鄰近共同富集**（MAD-*t* 邊），
- **蛋白表現**（豐度特徵）。

### 5. 用於共同靶點預測的圖譜表示學習
三種架構訓練以排序 EGFR 相關共同靶點：
| 模型 | 角色 |
|---|---|
| **Node2Vec** | 僅結構基線（較雜訊、復原較弱） |
| **VGAE** | 變分圖譜自動編碼器 — 潛在重建 |
| **GAT** | 圖譜注意力網路 — 學習邊注意力權重 |

對重現重要的發現：
- **特徵消融**：去掉鄰近性*或*表現都會傷及精準度；兩者並用最佳。鄰近性攜帶超越結構＋表現的非冗餘訊號。
- **課程式排程**：逐步加難的預測任務；GAT 在數個 epoch 內收斂（注意力＋高訊噪比）。
- 架構一致（VGAE ∩ GAT）= 較高信心候選；單獨 Node2Vec 不可靠。

### 6. 正交富集驗證
預測配對對照外部層級檢查：整理資料庫（STRING/CORUM/BioGRID/IntAct）、DepMap 共必需性、臨床蛋白質體學、正常組織表現——優先排序是多層的，不是單一分數。

---

## 儲存庫差距分析

已存在者（重用，不重建）：

| 論文技術 | 儲存庫對應 |
|---|---|
| Jaccard 鄰域相似度 | `scripts/analysis/node_analysis.py` §2（巨大分量上的成對 Jaccard） |
| 社群偵測 | graphify 建置（`graphify-out/graph.json` 節點上的 `community`、`community_name`） |
| 連結候選 | `scripts/analysis/link_prediction.py`（Adamic-Adar + PPR + 可選有效電阻虛無假設） |
| 多模態圖譜 | 合併資料集 `web/public/data/nodes.json` + `edges.json`（triples ∪ wiki，`web_to_graph.py` 橋接） |
| 虛無假設基準測試 | `--validate` + `link_prediction.py` 中的隨機配對虛無假設 |

缺失者（論文的真正技術）：

1. **跨圖譜相關層（MetaMap）**——不存在 Spearman 蛋白廓型網路；wiki/triples 圖譜是單層的，但*vault 本身*就是「圖集」：每則筆記／主題就像一個 micromap 脈絡。
2. **穩健邊正規化（MAD-*t*）**——wiki 邊承載原始 `weight`（共現計數，`scripts/wiki/rebuild.py:313`）且 `confidence_score=1.0` 寫死；無脈絡內穩健縮放。
3. **學習式嵌入（Node2Vec/VGAE/GAT）**——`scripts/analysis/` 中沒有任何模型訓練；只有手工指標。
4. **特徵消融測台**——無法測試某一模態是否有貢獻。

---

## 建議的儲存庫調整（懶人版 → 完整版）

### A. MetaMap 類比 — 最高價值，零新依賴 ⭐

新模組 `scripts/analysis/meta_map.py` + `scripts/cli.py` 中的 CLI 入口 `meta-map`：

1. 建立**節點 × 脈絡矩陣**：列 = 正規化節點 id，欄 = 脈絡（主題目錄和／或來源文件），儲存格 = 該節點在該脈絡中的出現／共現強度（主題內的邊數或提及次數）。與管線其餘部分相同的 `norm(label)` 鍵控。
2. 節點廓型間的**成對 Spearman 相關**（`scipy.stats.spearmanr`，或以 numpy 做 rank+pearson —— 分析腳本已在用 scipy）。
3. 門檻（例如 ρ ≥ 0.5 **且** 共脈絡數 ≥ 2，皆為 CLI 參數）→ 相關邊。
4. 在門檻化相關網路上做**社群偵測**（`nx.community.greedy_modularity_communities`，與 graphify 作法一致）→「空間蛋白社群」等價物 = 主題連貫的實體叢集。
5. 輸出 `wiki-out/meta-map.json`（若須在 UI 顯示則為 `web/public/data/meta-map.json`），內容含：相關邊、社群，以及**非相鄰高 ρ 配對** = 論文「非靶向鄰近性」的等價物 → 直接餵進既有的 Predicted Connections 面板。

執行形狀（沿用既有慣例）：

```bash
uv run --with networkx --with scipy python3 -m scripts.analysis.meta_map \
  --graph wiki-out/graph.json --rho 0.5 --min-contexts 2
```

為何先做這個：它是論文真正的創新引擎（MetaMap），重用 `node_analysis.py` 的圖譜載入／正規化器，且產出的候選配對格式正是 `link_prediction.py` 已驗證的格式。

### B. 穩健邊加權（MAD-*t* 精簡版）

在 `scripts/wiki/rebuild.py` 中，將 `confidence_score=1.0` 換成**各主題／社群內 `weight` 的穩健 z-score**（MAD 縮放：

```
z = 0.6745 * (w - median_w) / MAD_w
```

保留 z ≥ 2.0 的邊為「高信心」，存入 `confidence_score`。在記錄權重處（`rebuild.py:313–328`）約一行的變更，加上對各主題邊群組的一次掃描。無新依賴（rebuild 指令已有 numpy）。在腳本 docstring 中記錄門檻。這是論文原始技巧套用在共現計數而非 TMT 強度上。

### C. Node2Vec 基線（只在想要學習式嵌入時）

Ponytail 第 4 級：不要加 VGAE/GAT（torch-geometric 對 wiki 是沉重新依賴）。若想要學習式僅結構基線：

```bash
uv run --with node2vec --with networkx python3 -m scripts.analysis.embed_nodes
```

新的薄模組 `scripts/analysis/embed_nodes.py`：載入圖譜 → Node2Vec（dim=64）→ 對每個種子 god-node 取餘弦相似度 top-k 非鄰居 → 附加到 `link-prediction.json` 的 `"node2vec_similar"`，與既有的 `"ppr_similar"` 並列。這重現論文最弱的模型——僅作為對照 PPR/Adamic-Adar 的合理性基線有用。

**跳過 VGAE/GAT**，直到有帶標註的共同靶點任務與地面真值（目前沒有 —— wiki 沒有訓練標籤）。論文需要它們是因為有 248 張監督式鄰近圖譜；vault 的等價監督是文件共現，而 MetaMap（A）已無需梯度下降即消耗它。特徵消融測台（論文 §4）在這裡也沒有可消融的東西，除了 {結構, 共現, 角色} —— 而 `node_roles.json` 已涵蓋角色。

### D. 消融 + 驗證測台（小型）

擴充 `link_prediction.py --validate`，加入**模態消融旗標**：

```bash
python -m scripts predict-links --ablate cooccurrence   # 去掉 weight 邊
python -m scripts predict-links --ablate structure      # 保度數重連線虛無假設
```

每種模式去掉一個模態、重跑候選評分，並報告與留出邊集合（或與 MetaMap 的高 ρ 配對）重疊度的下降。對照論文 Fig. 4c 而無需任何 ML —— 虛無重連線變體用 `nx.double_edge_swap` 約 15 行。

### E. 選配：共同靶點配對報告

若目標明確是「TAA–TAPA 式配對」，為 `meta_map.py` 加一個模式 `--pairs --seed egfr`：對種子實體，依組合分數排序非相鄰節點：

```
score = ρ_meta * log(1 + adamic_adar) * (1 if cross-community else 0.5)
```

輸出簡短 markdown 表格 → `src/tasks/`（依 §AGENTS 任務輸出放這裡）。這是一發式的「鄰近性導向共同配對」交付物。

---

## 實作順序

| # | 變更 | 工作量 | 新依賴 |
|---|---|---|---|
| 1 | `meta_map.py` + `meta-map` CLI（技術 #3） | 中 | scipy（已使用） |
| 2 | `rebuild.py` 的 MAD 加權 `confidence_score`（技術 #1） | 小 | numpy（已使用） |
| 3 | `link_prediction.py` 的消融旗標（技術 #6） | 小 | 無 |
| 4 | Node2Vec 基線螺栓附加（技術 #5，僅基線） | 小 | `node2vec` |
| — | VGAE / GAT | 跳過 | torch-geometric — 沒有標籤可作為依據 |

每步的驗證：既有測試套件

```bash
uv run --no-build --with pytest --with pytest-asyncio --with fastapi --with httpx \
  --with networkx --with numpy --with scipy --with pydantic --with python-multipart \
  --with pillow --with graphifyy --with pyyaml python3 -m pytest tests/ -q
```

加上任何邊權變更後的 `predict-links --validate`，以及確定性檢查（兩次 `meta-map` → 位元組相同輸出，與 `link_prediction.py` 相同慣例）。

## 已跳過 / 何時補上

- 跳過 VGAE/GAT + 課程訓練：vault 沒有監督；當攝入帶標註的鄰近／共同靶點資料集時再加。
- 跳過完整 TMT/MAD-*t* 管線：vault 邊是計數而非強度；穩健 z-score 是誠實的類比。
- 跳過 meta-map 的 UI 介面：先輸出 JSON；只有當相關社群被證明優於 graphify 既有社群時才加網頁面板。
