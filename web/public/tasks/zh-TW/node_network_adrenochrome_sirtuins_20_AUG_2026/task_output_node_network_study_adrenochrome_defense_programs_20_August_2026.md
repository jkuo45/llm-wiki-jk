---
title: "研究設計 — 單一損傷節點，三套防禦程式：Adrenochrome ↔ Mitohormesis / Autophagy / Sirtuins"
description: 知識圖譜研究設計，將腎上腺色素損傷模組耦合至三套防禦程式（mitohormesis、autophagy、sirtuins），將指標指紋與關係感知圖譜分析轉化為可證偽的假說、一項計算內擾動實驗，以及驗證臂。
created: 2026-08-20
tags:
  - task-output
  - adrenochrome
  - mitohormesis
  - autophagy
  - sirtuins
  - knowledge-graph
---

# 研究設計 — 單一損傷節點，三套防禦程式：Adrenochrome ↔ Mitohormesis / Autophagy / Sirtuins

> [!NOTE]
> **任務**：在當前知識圖譜上設計一項聚焦於四個節點——[[Adrenochrome]]、[[Mitohormesis]]、[[Autophagy]]、[[Sirtuins]]——的研究，使用 `web/pages/en-US/node-analysis-examples-biology.html` 中記錄、並由 `scripts/analysis/node_analysis.py` 實作的指標指紋與關係感知方法。以下所有基準指標均已針對即時圖譜**計算完成**；研究設計將其轉化為可證偽的假說、一項計算內擾動實驗、驗證臂，以及一項修復佇列。
> **日期**：2026 年 8 月 20 日 07:43 PM PDT
> **圖譜**：`graphify-out/graph.json` — 建構 `867a5ae5fdb8a46c`（指標計算於 2026-08-20 18:21:44）· 2,596 個節點 / 3,737 條邊 · 巨連通分量 2,110 個節點 / 3,295 條邊
> **方法基礎**：每節點指紋（`degree`、`in/out_degree`、`pagerank`、`betweenness_centrality`、`clustering_coefficient`、`k_core_number`、`community_*`）+ 關係感知電池（最短路徑倍數、Jaccard、Adamic–Adar、k-core、Fiedler/eigh、有效電阻、Personalized PageRank）
> **執行**：2 次正典 `scripts/analysis/node_analysis.py` 執行（雙向）+ 3 次補充計算（綜合分數、組態模型虛無值、橋接擾動掃描）。完整指令見 §12 可重現性。

---

## 1. 原理與研究問題

本知識庫的筆記將 [[Adrenochrome]] 描述為一種氧化還原循環的兒茶酚胺氧化產物——一個會產生 ROS、耗竭 [[Glutathione|GSH]]，並被假設會驅動心肌細胞與多巴胺能神經元中鐵死亡的*損傷效應物*。另外三個焦點節點是*防禦程式*：[[Mitohormesis]]（適應性壓力訊號）、[[Autophagy]]（溶酶體清除）、[[Sirtuins]]（依賴 [[NAD+]] 的去乙醯酶家族）。

圖譜以**四個節點之間零直接邊**來編碼這種損傷／防禦對立——所有耦合皆為透過中介橋接的多跳。這使得這個四重奏成為方法簡報核心主張的理想試驗場：*跨指標的模式即為生物角色，而關係感知方法解釋了兩個實體如何以及為何連結。*

> [!IMPORTANT]
> **主要研究問題**
> **哪一套防禦程式與腎上腺色素損傷模組耦合最緊密，經由哪些限速橋接——且獨立的指標家族（拓撲、譜、流）是否對排序達成一致？**

次要問題：(a) 這些橋接是否為單點故障（限速瓶頸）？(b) 無向投影是否在任何地方扭曲了因果方向？(c) 哪些跨程式調節因子在四個鄰域中反覆出現？

---

## 2. 假說（可證偽，源自指紋）

| # | 假說 | 網路基礎 | 會否證它的預測 |
| :--- | :--- | :--- | :--- |
| **H1** | 每套防禦程式都透過**恰好一個限速橋接**耦合至腎上腺色素，且每個橋接為臂專屬 | 三對的最短路徑倍數皆為 1；不同的第一跳（[[Reactive Oxygen Species|ROS]]、[[Neuromelanin]]、[[SASP]]） | 每對存在多條等長路徑；跨臂共享第一跳橋接 |
| **H2** | 腎上腺色素與三套防禦程式位於**最弱功能接縫（Fiedler 切割）的相對兩側** | Fiedler 值：Adrenochrome −0.0015 對三套程式皆為 +0.0033…+0.0043（λ₂ = 0.0463） | 防禦三重奏符號混雜 |
| **H3** | Walk-mass 耦合遵循梯度 **Mitohormesis ≈ Autophagy ≫ Sirtuins** | 以 Adrenochrome 為種子的置信度加權 PPR 排名 Mitohormesis #89 / Autophagy #93 / Sirtuins #305；反向 #60 / #58 / #147 | Sirtuins 在加權重分析中排名高於任一程式 |
| **H4** | 可藥性策略因指紋而異：Autophagy = **模組整合**（C = 0.039，k-core 6）；Adrenochrome = **在少數入邊處切橋**（C = 0.0094，出 42／入 18） | 兩個最高 PageRank 四重奏成員之間的聚類／k-core 對比 | 四重奏內聚類／k-core 輪廓相似 |
| **H5** | 四者皆為**真正的瓶頸**，而非度數人為產物 | 組態模型虛無值：z = +7.76（Autophagy）、+5.87（Adrenochrome）、+3.85（Sirtuins）、+3.22（Mitohormesis） | 任何節點的觀測介數落在與其度數保持虛無值約 2σ 以內 |

---

## 3. 基準證據（於建構 `867a5ae5fdb8a46c` 上計算）

### 3.1 每節點指紋

| 節點 | 入 | 出 | 度數 | PageRank | 介數 | 聚類 | k-core | 社群（大小） | 角色標籤（`node_roles.json`） |
| :--- | --: | --: | --: | --: | --: | --: | --: | :--- | :--- |
| **Adrenochrome** | 18 | 42 | 60 | 0.00501 | 0.0387 | 0.0094 | 4 | Adrenochrome（33） | Spreader · Master regulator · Bottleneck |
| **Mitohormesis** | 7 | 27 | 34 | 0.00083 | 0.0166 | 0.0143 | 5 | Mitohormesis（35） | Spreader · Bottleneck · Core backbone |
| **Autophagy** | 23 | 16 | 39 | 0.00429 | 0.0276 | 0.0390 | **6** | Autophagy（19） | Master regulator · Bottleneck · Core backbone |
| **Sirtuins** | 11 | 13 | 24 | 0.00203 | 0.0112 | 0.0119 | 5 | Sirtuins（17） | Spreader · Master regulator · Bottleneck · Core backbone |

依簡報的規則層解讀：

- **Adrenochrome** 是四重奏最強的*傳播者*（出 42 ≫ 入 18）：圖譜將其編碼為廣播效應（產生 ROS、參與 Redox Cycling、轉化為半醌自由基、誘發／導致損傷端點），而非被調節者。它也是唯一**位於 k-core ≥ 5 內殼之外**的四重奏成員——與錨定在 k = 4 的局部損傷模組一致。
- **Autophagy** 是唯一進入 **k-core 6 骨幹**（與 Aging/SASP/Senescent cells 同列）的四重奏成員，且擁有最高聚類——一個凝聚、全局嵌入的清除模組。
- **Mitohormesis** 是近乎純粹的來源（入 7／出 27）：介入（Exercise、Caloric Restriction、Metformin、AMPK、NRF2）流入，適應性輸出（ISR、ATF4、GDF15、FGF21、Mitochondrial Biogenesis、Longevity）流出。
- **Sirtuins** 最為平衡（入 11／出 13）——一個家族層級的中樞，收集 NAD+/抑制劑邊並廣播功能性註釋。

### 3.2 成對關係感知結果（`scripts/analysis/node_analysis.py`，雙向）

| 指標 | Mitohormesis–Adrenochrome | Autophagy–Adrenochrome | Sirtuins–Adrenochrome |
| :--- | :--- | :--- | :--- |
| 最短路徑倍數 | **1** | **1** | **1** |
| 路徑（無向遍歷） | MH —requires→ ROS —generates→ Adr | Auto —associated_with→ NM —sequesters→ Adr | Sirt —suppress→ SASP ←is_regulated_by— NF-κB ←inhibits— Adr ⚠️ |
| Jaccard（鄰域重疊） | 0.011 | 0.011 | **0.000** |
| Adamic–Adar（缺失邊提示） | 0.328 | 0.271 | **0.000** |
| 有效電阻（對隨機虛無值的 z，n=300） | 0.141（z −1.72） | **0.138（z −1.72）** | 0.227（z −1.57） |
| 以 Adrenochrome 為種子的程式 PPR 排名 | #89（0.00195） | #93（0.00174） | #305（0.00029） |
| 以程式為種子的 Adrenochrome PPR 排名 | #60（0.00304） | #58（0.00246） | #147（0.00064） |

防禦程式成對對照：Jaccard(Mitohormesis, Autophagy) = 0.076——四重奏中最高者，共享 **AMPK、Caloric Restriction、Metformin、Mitochondrial ROS、Mitophagy**；Jaccard(Mitohormesis, Sirtuins) = 0.018（僅 AMPK）；Jaccard(Autophagy, Sirtuins) = 0.034（AMPK、SASP）。**AMPK 是三套防禦程式唯一共享的鄰居。**

### 3.3 譜接縫（對 Laplacian 的稠密 `eigh`）

λ₂（代數連通度）= 0.0463。Fiedler 座標：Adrenochrome **−0.0015**；Mitohormesis +0.0034；Autophagy +0.0033；Sirtuins +0.0043。

> [!TIP]
> **H2 在基準上獲得支持**
> 損傷節點獨自位於最弱功能接縫的一側；三套防禦程式皆位於另一側。跨接縫節點——ROS、Neuromelanin、SASP/NF-κB——正是 H1 所指名的橋接，這正是簡報對被隔離在譜切割上的節點所預測的。

### 3.4 虛無模型驗證（組態模型，30 次度數保持抽樣）

| 節點 | 觀測介數¹ | 虛無均值 ± σ | z |
| :--- | --: | :--- | --: |
| Autophagy | 0.0418 | 0.0210 ± 0.0027 | **+7.76** |
| Adrenochrome | 0.0586 | 0.0367 ± 0.0037 | **+5.87** |
| Sirtuins | 0.0170 | 0.0104 ± 0.0017 | **+3.85** |
| Mitohormesis | 0.0251 | 0.0180 ± 0.0022 | **+3.22** |

¹ 為與虛無集合一致，於巨連通分量上重新計算（§3.1 中儲存的指紋值計算於完整的無向投影；尺度略有差異，表內比較為同類對比）。

四者皆通過簡報「在稱某物為瓶頸前，先對度數保持虛無值進行檢驗」的門檻。**H5 獲得支持。**

### 3.5 綜合 senolytic 式分數定位

在 2,110 個節點的巨連通分量上複製簡報的綜合分數（0.30 來源不對稱 · 0.20 介數 · 0.30 橋接比例 · 0.20 低聚類）：

| 排名 | 節點 | 分數 | 解讀 |
| --: | :--- | --: | :--- |
| **#85（前 4.0%）** | Mitohormesis | 0.537 | 極端來源不對稱 + 高橋接比例 |
| #451 | Adrenochrome | 0.455 | 強傳播者，但低聚類懲罰的支配程度低於預期 |
| #578 | Sirtuins | 0.343 | 平衡的度數稀釋了不對稱項 |
| #593 | Autophagy | 0.333 | 偏接收端輪廓 + 最高聚類（模組，而非橋接） |

綜合分數是一個*傳播者偵測器*——它獎勵外向控制，因此將 mitohormetic 介入閘道排最高，將模組嵌入的清除程式排最低。這是特性而非缺陷：該分數與指紋回答的是不同的問題，正如此簡報所警告的（「絕不依單一指標排名」）。

### 3.6 PPR 種子交集：反覆出現的跨程式調節因子

出現在**≥ 4 個焦點節點中之 3 個**為種子的 PPR 前 40 名中的節點：

| 反覆出現的節點 | 解釋 |
| :--- | :--- |
| **AMPK** | 四重奏唯一共享的一階鄰居——主能量感知交聯 |
| **SIRT1、SIRT3、SIRT6** | 個別 sirtuin 亞型承載的 walk mass 多於家族層級的 [[Sirtuins]] 節點本身 |
| **Caloric Restriction** | 鄰近三套防禦程式的單一生活型態介入 |
| **Rapamycin** | 觸及自噬與 sirtuin 兩個社群的 mTOR 軸藥物 |
| **SASP** | 共享的發炎導管（也是 sirtuin 臂的橋接） |

---

## 4. 關鍵結構性發現

### 4.1 三條臂，每條皆有一個單一限速橋接

依簡報的解讀指南，*倍數為一是一個真正的、限速的瓶頸，其單一致因邊正是精確的介入標的*。三個耦合的倍數皆為 1：

```
Arm A（mitohormetic）：  Mitohormesis --requires(0.92)--> ROS --generates(0.95)--> Adrenochrome
Arm B（autophagic）：    Autophagy --associated_with(0.95)--> Neuromelanin --sequesters(0.8)--> Adrenochrome
Arm C（sirtuin/NAD+）：  Sirtuins --suppress(0.86)--> SASP <--is_regulated_by(0.96)-- NF-κB <--inhibits(0.6, AMBIGUOUS)-- Adrenochrome
```

Arm A 與 B 短、高置信度且機制直接。Arm C 較長，穿過圖譜中介數最高的節點（SASP），並終止於四重奏中置信度最低的邊。

### 4.2 ⚠️ Arm C 上的方向反轉陷阱

> [!WARNING]
> **無向最短路徑讀法反轉了終端邊**
> 分析腳本印出 `NF-κB --[inhibits|0.6]--> Adrenochrome`，但儲存的三元組為反向：**`Adrenochrome --inhibits--> NF-κB`**（置信度 0.6，標記為 AMBIGUOUS，來自 `_document_ - as senotherapeutic agent.md`）。背景：*senomorphic 假說*——腎上腺色素的親電子 o-醌化學會共價修飾 p65/IKK 半胱氨酸，削弱 NF-κB 驅動的 SASP 轉錄。
>
> 正確解讀下，Arm C 並非指「sirtuins 控制腎上腺色素的產生」。而是指 **[[Sirtuins]] 與 [[Adrenochrome]] 是作用於同一 SASP/NF-κB 軸的兩個平行槓桿**——sirtuins 從上方抑制 SASP；腎上腺色素（假設性地）透過親電子烷基化從下方抑制同一軸。這正是簡報中「無向投影喪失因果方向」的警告，在研究的自身資料中當場被抓到。任何建立在 Arm C 上的下游宣稱都必須以這些措辭重新表述。

此發現促成了 Phase 0 修復（§7）以及一條常設規則：**研究中宣稱所使用的每一條路徑邊，在引用前都須審計其儲存方向。**

### 4.3 實體碎片化壓低了 sirtuin 臂

圖譜以獨立節點承載 ≥ 7 個 NF-κB 變體：`NF-κB`（nf_b，度數 48）、`NF-kB`（nf_kb，度數 1）、`NF-kappaB`（nf_kappab，度數 2）、`NF-κB p65`、`RelA/p65 (NF-κB subunit)`、`NF-kappa B signaling`、`NF-κB signaling pathway`。碎片化分裂 walk mass、拉長表面路徑，並導致 Sirtuins 與 Adrenochrome 之間的零 Jaccard 隔離。H3 中部分「sirtuins 距離遙遠」的訊號是實體解析的人為產物，而非生物學——量化為修復 Phase 0b。

### 4.4 橋接擾動掃描：每個橋接僅承載自身所屬的臂

移除每個橋接邊（或橋接節點）並重新計算置信度加權 PPR：

| 擾動 | Δ(MH→Adr) | Δ(Auto→Adr) | Δ(Sirt→Adr) | 專一性 |
| :--- | --: | --: | --: | :--- |
| 移除邊 Mitohormesis–ROS | **−22.7%** | −0.4% | −0.0% | 乾淨 |
| 移除邊 ROS–Adrenochrome | **−23.4%** | −2.4% | −7.8% | 乾淨 |
| 刪除節點 ROS | **−27.0%** | −2.4% | −9.4% | 乾淨 |
| 移除邊 Autophagy–Neuromelanin | −0.3% | **−24.8%** | −1.6% | 乾淨 |
| 移除邊 Neuromelanin–Adrenochrome | −2.3% | **−19.5%** | −3.1% | 乾淨 |
| 刪除節點 Neuromelanin | −0.7% | **−33.3%** | −3.1% | 乾淨 |
| 移除邊 Sirtuins–SASP | +0.9% | +3.3% | **−4.7%** | 微弱 |
| 刪除節點 SASP | **+2.6%** | **+3.7%** | −3.1% | 反轉！ |

兩個結果：

1. **Arm A 與 B 表現得像真正的單橋瓶頸**：切斷任一跳會使該臂約 20–33% 的 walk-mass 耦合崩解，同時不影響其他臂（跨臂 delta ≈ 0）。H1 的專一性預測對 A 與 B 成立。
2. **Arm C 幾乎不依賴其名義橋接**（−4.7%），且刪除 SASP 會略微*增加* MH/Autophagy→Adrenochrome 的流。SASP 扮演一個**競爭性吸引子**，從所有種子吸收 walk mass；移除它會重新分配流，而非切斷一條路線。結合 §4.2，Arm C 應被視為*軸共調節*，而非生產控制鏈——網路與修正後的三元組語義一致。

---

## 5. 研究臂（提議的驗證設計）

每個臂將圖譜層級操作與文獻裁決配對，並在本知識庫支援處搭配經驗性讀值。臂依 §4.4 的預期效應量排序。

| 臂 | 介入類別 | 圖譜理由 | 對腎上腺色素負擔的預測效應 | 經驗性讀值（來自知識庫筆記） |
| :--- | :--- | :--- | :--- | :--- |
| **A. Mitohormetic** | Exercise、Caloric Restriction、Metformin（AMPK/NRF2 活化劑） | 單一 ROS 橋接，切斷時耦合 −23%；MH 為前 4% 綜合傳播者 | 間接提升適應性 ROS 張力 → 提高腎上腺色素*生成*但強化下游氧化還原緩衝；淨效應可檢驗 | GDF15/FGF21 血漿濃度、HRV（依 [[Mitohormesis]] 筆記）、脂質過氧化標記 |
| **B. Autophagic** | Rapamycin、Spermidine、Intermittent Fasting | 單一 Neuromelanin 橋接；Autophagy 是 k-core-6 模組成員 | 增強兒茶酚胺氧化產物的清除／隔離 → **降低穩態腎上腺色素加合物** | LC3-II/p62 流動、多巴胺能模型中的 neuromelanin-自噬分析 |
| **C. Sirtuin/NAD+** | Nicotinamide Riboside、NAD+ 補充 | 微弱、間接、方向反轉的耦合（#305/#147 排名） | **最直接的預測最小**——效應經由 SASP 抑制介導，而非腎上腺色素化學 | SIRT1 活性、SASP 細胞激素（IL-6/IL-8）、NF-κB 乙醯化狀態 |
| **D. 控制（拮抗劑）** | 抗氧化劑巨量劑量（NAC、高劑量抗氧化劑） | 圖譜編碼 `N-Acetylcysteine --blocks(0.95)--> Mitohormesis` 與 `Mitohormesis --is_blocked_by(0.9)--> Antioxidants` | 完全解耦 Arm A——圖譜自身的負向控制 | 遲鈍的 GDF15/FGF21 反應；hormetic 調適喪失 |

> [!NOTE]
> **為什麼 Arm D 重要**
> 本知識庫已記錄抗氧化劑對 mitohormesis 的悖論（`task_output_mitohormesis_antioxidants_05_August_2026.md`）。圖譜獨立地將此封鎖編碼為進入 Mitohormesis 的兩條高置信度邊。若 Arm D 在經驗上未能解耦 Arm A 的標記，則三元組與研究的橋接邏輯皆需重新檢視——簡報的規則：*若檢驗失敗，是分數錯了，而非生物學。*

---

## 6. 端點與決策規則

主要端點（計算性）：經 (a) 置信度加權重分析與 (b) 實體解析修復後的 **ΔPPR(腎上腺色素 ↔ 程式)**——對照 §3.2 基準測量。

決策規則：

- **H3 倖存**，若梯度 Mitohormesis ≈ Autophagy ≫ Sirtuins 在加權 + NF-κB 去重後持續（預測：Sirtuins 從 #305 改善但仍比另外兩者排名遠 3 倍以上）。
- **H1 倖存**，若修復後 Arm A/B 的路徑倍數仍為 1；Arm C 倍數在 NF-κB 去重後可能升至 1 以上（重新分類為「冗餘連線」會被記錄，而非強制）。
- **橋接裁決** 僅在每條 Arm A/B 橋接三元組於原典文獻中確認後成功；任何失敗的三元組在研究的宣稱定稿*前*（絕非之後）被修正或刪除。
- **綜合分數檢驗**：Mitohormesis 在修復後必須維持前十分位；若下降，則橋接比例項正被碎片化人為產物操弄。

---

## 7. 階段計畫

| 階段 | 工作 | 工具 | 輸出 |
| :--- | :--- | :--- | :--- |
| **0a. 方向審計** | 以儲存邊方向重新表述每條研究引用的路徑；在行文中修正 Arm C 反轉並將三元組標記供策展者審查（AMBIGUOUS，0.6） | 手動 + `graph.json` 連結檢視 | 修正後的路徑表（已於 §4.2 完成） |
| **0b. 實體解析** | 將 NF-κB 變體（§4.3 列出 ≥ 7 個節點）合併為正典 `NF-κB`；審計類似碎片（例如 ROS 對 Reactive Oxygen Species 對 Mitochondrial ROS） | 擴充 `scripts/triples/normalize.py` / 重建管線 | 重建後圖譜；重跑 §3.2 電池；量化 ΔH3 |
| **1. 加權重分析** | 將 `weight="weight"` 傳入 PageRank（強度），並將反向置信度 `1/confidence` 作為 `distance` 傳入介數／有效電阻（簡報中記錄的既有開放限制） | 修改 `scripts/analysis/node_analysis.py` 旗標 | 加權對未加權比較表 |
| **2. 完整虛無包絡** | 將組態模型 z 分數（30 → 100–1,000 次抽樣）擴展至聚類與 PageRank，而非僅介數 | 補充腳本（已種子、版本化） | 四個節點的虛無包絡表 |
| **3. 正式 PPR 交集** | 來自全部四個種子的置信度加權 PPR；交集 top-K（K ∈ {25, 40, 100}）；報告跨 K 的穩定性 | `scripts/analysis/node_analysis.py` + 包裝器 | 帶穩健性註記的反覆效應物清單 |
| **4. 文獻裁決** | 將六條橋接三元組（§4.1）加上 AMPK 共享鄰域宣稱對照原典來源；依 AGENTS.md 記錄 PMID/DOI | 手動審查佇列 | 確認／修正／刪除裁決；三元組回寫 |
| **5. 經驗映射** | 將每個臂綁定至可測量生物標記（§5 表）；依擾動幅度（耦合 −20% 至 −33%）指定方向與量級預期 | 知識庫筆記 + 外部文獻 | 預先註冊的預測文件 |

階段 0–3 可立即在知識庫上執行；階段 4–5 把關任何離開知識庫的生物學宣稱。

---

## 8. 限制

- **無向投影喪失因果方向**——由 Arm C 反轉具體示範（§4.2）。本研究中所有路徑讀值皆已針對儲存方向重新審計；未來的執行應預設發出方向已審計的路徑。
- **儲存的中央性是未加權拓撲**；置信度分數在重建時附加於中央性之後。§7 Phase 1 處理此問題；在此之前，加權 PPR（確實使用 `weight`）是電池中唯一具置信度感知的流指標。
- **語料偏誤**：度數與 PageRank 偏好註釋良好的實體。Adrenochrome 的 60 條邊包含 PubChem 衍生的屬性三元組（約 3 條純中繼資料邊：xlogp、分子量、分子式）以及數條化學分類 `is_a` 邊；純生物關係的指紋會更緊湊。拒絕清單移除了類型中樞，但未移除每節點的中繼資料雜訊。
- **家族層級對亞型節點**：[[Sirtuins]] 與自身的子節點競爭（SIRT1/3/6 在各地主導 PPR）。關於「sirtuins」作為一類的宣稱繼承了此壓縮。
- **綜合權重是任意的**（0.30/0.20/0.30/0.20）；它們曾對 Acid ceramidase 驗證一次並在此沿用而未重新調校。將 §3.5 視為序數，而非基數。
- **虛無抽樣（30 次）** 足以區分 z ≈ ±3，但對尾部宣稱統計力不足；Phase 2 將其提高至 100–1,000 次。

---

## 9. 文獻裁決佇列（Phase 4 進場工單）

| 三元組 | 置信度 | 知識庫來源 | 裁決問題 |
| :--- | :--: | :--- | :--- |
| `Mitohormesis --requires--> ROS` | 0.92 | Mitohormesis 文件（2014_FEB、2023_NOV） | 已確立：mROS 作為訊號需求（綜述級共識） |
| `ROS --generates--> Adrenochrome` | 0.95 | [[Adrenochrome]] 筆記；PubChem 文件 | 確認超氧／H₂O₂ 驅動的腎上腺素氧化動力學（需原典參考） |
| `Autophagy --associated_with--> Neuromelanin` | 0.95 | Autophagy 語料 | 確認兒茶酚胺能神經元中的 neuromelanin–自噬連結 |
| `Neuromelanin --sequesters--> Adrenochrome` | 0.80 | [[Adrenochrome Pathway]] 文件 | 確認腎上腺色素聚合／併入 neuromelanin |
| `Sirtuins --suppress--> SASP` | 0.86 | Sirtuin 綜述 | 確認 SIRT1/NF-κB 去乙醯化 → SASP 減弱 |
| `Adrenochrome --inhibits--> NF-κB` | 0.60 ⚠️ AMBIGUOUS | `_document_ - as senotherapeutic agent.md` | **優先**：senomorphic 假說在來源中明確為推測性；驗證是否有任何原典數據支持腎上腺色素（相對於 aminochrome）對 p65/IKK 的親電子烷基化 |

未為 Sirtuins–Adrenochrome 編造任何缺失邊假說：Adamic–Adar = 0.000 表示圖譜未提議任何內容，且依簡報的警告，連結預測輸出是待讀清單，絕非發現。

---

## 10. 預期影響

若 H1–H5 在修復後倖存，本研究將交付：

1. 一份**方向已審計、虛無值驗證過**的說明，描述知識庫的損傷模組（腎上腺色素）如何連結至其三套防禦程式——並預測自噬臂為最直接的槓桿，以及將 sirtuin 臂明確重構為 SASP 軸共調節。
2. 兩項**資料整潔度修正**（邊方向審計；NF-κB 實體解析），改善的不只是本研究，而是所有下游分析。
3. 一個**四節點研究**的模板：指紋分流 → 關係感知電池 → 擾動掃描 → 裁決佇列，全部可從已提交的腳本與種子重現。

---

## 11. 交付物

- 本研究設計：`src/task_output/task_output_four_node_network_study_adrenochrome_defense_programs_20_August_2026.md`
- 封存執行紀錄（同目錄）：
  - `run_log_A_sources_mitohormesis_autophagy_sirtuins_targets_adrenochrome.txt` — 正典電池，防禦→損傷方向
  - `run_log_B_sources_adrenochrome_targets_mitohormesis_autophagy_sirtuins.txt` — 正典電池，損傷→防禦方向
  - `run_log_C_supplementary_edge_wiring_and_partial_composite.txt` — 每焦點節點的入／出邊普查；直接邊檢查
  - `run_log_D_composite_score_ppr_intersection_null_zscores.txt` — 綜合分數排名、PPR 掃描 + 前 40 交集、組態模型虛無值
- 修復工單：§4.2（方向反轉）、§4.3（NF-κB 碎片化）、§9（三元組裁決佇列）
- 後續任務輸出（提議）：Phase 1 加權重分析；Phase 0b 解析後重跑

---

## 12. 可重現性

```bash
# 正典關係感知電池（雙向）
uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py \
    --sources mitohormesis autophagy sirtuins --targets adrenochrome
uv run --with networkx --with scipy python3 scripts/analysis/node_analysis.py \
    --sources adrenochrome --targets mitohormesis autophagy sirtuins

# 補充計算（本文件）：
#   - 綜合分數（巨連通分量上權重 .30/.20/.30/.20）
#   - 未加權 PPR 掃描 + 4 個種子的前 40 交集
#   - 組態模型介數虛無值（30 次抽樣，種子 2..31）
#   - 橋接邊／節點移除掃描（含置信度加權 PPR）
# 實作為針對 graphify-out/graph.json 的內聯腳本，
# 採用與 scripts/analysis/node_analysis.py 一致的 RANDOM_SEED=1 慣例。
# 原始輸出封存為 src/task_output/ 中的 run_log_A..D。
```

環境：Python 3.14、NetworkX 3.x、SciPy 1.x（`uv run --with networkx --with scipy`）。圖譜建構 `867a5ae5fdb8a46c`；任何重建都會改變排名，需完整重跑 §3。

## 參考文獻

1. 知識庫方法簡報，2026 年 8 月 16 日。*Node-level network analysis for biological prioritization.* `web/pages/en-US/node-analysis-examples-biology.html`。
2. 多節點分析工具。`scripts/analysis/node_analysis.py` — 巨連通分量限制、路徑倍數、Jaccard、Adamic–Adar、稠密 `eigh` Fiedler、有效電阻、置信度加權 PPR。
3. 重建管線。`scripts/triples/rebuild.py` — `DENYLIST`、`enrich_graph_metrics()`、Leiden 社群、角色標籤 → `web/data/node_roles.json`。
4. Jeong H, et al. Lethality and centrality in protein networks. *Nature* 2001;411:41–42.
5. Yu H, et al. The importance of bottlenecks in protein networks. *PLoS Comput Biol* 2007;3:e59.
6. Wuchty S, Almaas E. Peeling the yeast protein network. *Proteomics* 2005;5:444–449.
7. 知識庫既有技術：`task_output_node_sirtuins_adrenochrome_15_August_2026.md`；`task_output_mitohormesis_antioxidants_05_August_2026.md`；`task_output_autophagy_vs_mitophagy_17_JUL_2026.md`；`task_output_node_analysis_biology_16_AUG_2026.md`。
