---
title: CD38–SARM1 研究缺口 — 文獻調查
description: "針對 CD38-SARM1 橋接分析中辨識出的 4 個高優先級研究問題的標的文獻調查。檢視：(1) CD38 介導的 NMN 耗竭是否保護免於 SARM1 活化、(2) CD38 KO 對 SARM1 的致敏、(3) 合併 CD38+SARM1 抑制的協同、(4) 微膠細胞中 CD38/SARM1 共同表現。包含直接證據、矛盾發現，以及更新的圖譜邊建議。"
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - research-synthesis
  - nad-plus
  - nmn
  - axon-degeneration
  - microglia
  - literature-review
source: Web research (PubMed, PMC, Nature, Cell, ScienceDirect, Frontiers 2019-2026)
---

# CD38–SARM1 研究缺口 — 文獻調查

> 調查 `task_output_CD38_SARM1_bridging_gaps_17_JUL_2026.md` 中 4 個高優先級缺口。
> 日期：17_JUL_2026

---

## 問題 1：CD38 介導的 NMN 耗竭是否保護免於 SARM1 活化？

### 來自橋接分析的假說
CD38 降解胞外 NMN（ecto-NMNase 活性）；SARM1 由胞內 NMN 累積所活化。因此，高 CD38 活性在理論上可透過降低 NMN 可得性來保護免於 SARM1 活化。

### 文獻證據

| 發現 | 來源 | 支持度 |
|---|---|---|
| 「CD38 是在小鼠組織中降解 NMN 的主要酵素之一…CD38 在 NMN 的藥物動力學中扮演關鍵角色」 | Camacho-Pereira et al. 2016, Cell Metabolism（PMID: 27133162） | STRONG |
| 「阻斷 CD38 的胞外酵素活性可透過依賴 NMN 的過程提升 NAD+」 | Covarrubias et al. 2020, Nature Metabolism（PMID: 33028765） | STRONG |
| 「CD38 透過其胞外酵素活性降低 NMN 與 NAD+ 的濃度」 | Covarrubias et al. 2020 | STRONG |
| 「CD38 水解 NMN」的機制獲得確認 | Grozio et al. 2013，引於 Frontiers 2020 | STRONG |
| 「累積的 NMN 似乎是促退化、生成 cADPR 的酵素 SARM1 的活化因子」 | Takaso et al. 2020, Scientific Reports（PMID: 33082370） | STRONG |
| NMN/NAD+ 比值是主要的 SARM1 活化因子 | Figley et al. 2021, Neuron（PMID: 33657413） | STRONG |

### 判決：合理但未直接測試

機制在化學上成立：
- CD38 降解胞外 NMN → 經由 Slc12a8（NMN 轉運蛋白）進入細胞的 NMN 減少
- SARM1 活化需要胞內 NMN 累積（NMNAT2 缺失後）
- 因此 CD38 活性應降低可活化 SARM1 的 NMN 池

**關鍵注意事項**（來自 Takaso et al. 2020）：顏面神經軸突切斷研究指出，雖然 NAD+ 生物合成保護軸突，「累積的 NMN 似乎是促退化、生成 cADPR 的酵素 SARM1 的活化因子」。這意味著 **NAD+ 先驅物補充可能矛盾地增加 SARM1 活化風險** — 恰好與 CD38 的保護效應相反。NAD+ 與 CD38 缺失的「神經保護效應仍有待釐清」正是因為此 NMN/SARM1 張力。

**尚無研究直接測試：** 「CD38 活性（或 CD38 抑制）是否改變依賴 SARM1 的軸突退化？」這是一個真正的開放問題。

### 更新的邊建議

| 來源 | 關係 | 標的 | 信心度 | 狀態 |
|---|---|---|---|---|
| CD38 | degrades | NMN | EXTRACTED (0.90) | 文獻確認 |
| NMN | activates | SARM1 | EXTRACTED (0.95) | Figley 2021 確認 |
| CD38 | may_protect_against | SARM1 | AMBIGUOUS (0.35) | 假說 — 未直接測試 |

---

## 問題 2：CD38 KO 小鼠中的 SARM1 發生什麼？（致敏假說）

### 來自橋接分析的假說
CD38 KO 小鼠具有升高的 NAD+**與**升高的 NMN（因為 CD38 降解兩者）。這可能透過提升 NMN 池來**致敏**神經元，使其更易發生 SARM1 活化。

### 文獻證據

| 發現 | 來源 | 意涵 |
|---|---|---|
| 「CD38 基因剔除小鼠在多個器官中顯示顯著更高的 NAD+ 濃度」 | Young et al. 2006；Camacho-Pereira 2016 | CD38 KO = 高 NAD+ |
| 「CD38 是在小鼠組織中降解 NMN 的主要酵素之一」 | Camacho-Pereira 2016 | CD38 KO = 高 NMN |
| CD38 KO 小鼠在顏面神經軸突切斷後顯現延遲的軸突退化 | Takaso et al. 2020（PMID: 33082370） | 保護性，非致敏 |
| 「CD38 缺失與 NAD+ 補充可能以細胞自主方式保護被切斷的軸突」 | Takaso et al. 2020 | 矛盾 |
| SARM1 KO 小鼠對 Wallerian 式退化具抗性 | Osterloh et al. 2012；Gerdts 2013 | SARM1 是執行者 |
| 無研究報告 CD38 KO 增加 SARM1 活化 | — | 缺口 |

### 判決：無致敏證據 — 事實上，具保護性

顏面神經軸突切斷模型（Takaso et al. 2020）直接處理此問題：
- CD38 KO 小鼠 → 軸突退化與去髓鞘**延遲**
- 這與 SARM1 致敏所預測的結果**相反**

**矛盾的解決：**
CD38 缺失的保護效應可能佔主導，因為：
1. CD38 缺失提升 NAD+（作為 NMNAT2 → SARM1 抑制的受質，經由低 NMN/NAD+ 比值）
2. 單獨 NMN 累積若無伴隨的 NMNAT2 缺失或損傷，可能不足以活化 SARM1
3. 觸發 SARM1 的是 NMN/NAD+ 比值 — 而非絕對 NMN 量

**對圖譜的關鍵見解：** CD38 KO 表型顯示，在未被損傷的神經元中提升 NAD+（即使伴隨升高的 NMN）並不會觸發 SARM1。SARM1 活化需要損傷特異性的 NMNAT2 缺失背景。

### 更新的邊建議

| 來源 | 關係 | 標的 | 信心度 | 狀態 |
|---|---|---|---|---|
| CD38 KO | protective_against | Axon Degeneration | EXTRACTED (0.85) | 確認（Takaso 2020） |
| CD38 KO | elevates | NAD+ | EXTRACTED (0.95) | 確認 |
| CD38 KO | elevates | NMN | INFERRED (0.80) | 可能但未在 SARM1 背景下直接測量 |

---

## 問題 3：合併 CD38 + SARM1 抑制是否協同？

### 來自橋接分析的假說
CD38 抑制（78c）為 sirtuin/PARP 保存 NAD+（慢性老化下降）；SARM1 抑制阻斷軸突中的災難性 NAD+ 損失（急性損傷）。合併抑制可同時處理兩個軸。

### 文獻證據

| 發現 | 來源 | 意涵 |
|---|---|---|
| 「合併抑制 PARP1 與 CD38 完全逆轉了 LPS 誘發的 NAD+ 下降」 | Covarrubias et al. 2020 | 多標的抑制在 NAD+ 恢復上有效 |
| 「非競爭性、形成加合物的 SARM1 抑制劑…最有效的 CD38 抑制劑（78c）也經由相同機制作用」 | Bratkowski et al. 2022, Neuron（PMID: 36087583） | CD38 與 SARM1 間共享機制 |
| 「保守的、NAD 依賴的抑制機制，針對 SARM1 與 CD38 等 NAD 水解酶作為可行治療策略」 | Nura Bio 2022 | 共享藥物類別 |
| 「78c 延長雄性小鼠壽命約 14%」 | Chini lab（wiki 中） | CD38 抑制 = 長壽 |
| Nura Bio 的 NB-4746（可穿透腦部 SARM1 抑制劑）完成第一期，2025 年進入 1b/2 期 | Synapse/Nura Bio 2024 | SARM1 抑制劑進入臨床 |
| 「NAD+ 與 NR 補充減緩軸突退化」（CD38 KO 之後） | Takaso et al. 2020 | 堆疊 CD38 + NAD+ 先驅物 = 保護 |

### 判決：機制上成立，尚無直接的協同研究發表

**強力支持證據：**
- CD38 與 SARM1 都是「NAD 水解酶」，具有共享的催化架構（兩者都使用 NAD+ → ADPR + NAM）
- 78c（CD38 抑制劑）與 SARM1 抑制劑都經由**形成加合物的非競爭性抑制** — 相同的藥物機制類別
- 合併 PARP1 + CD38 抑制在單一藥劑失敗處展現了完全的 NAD+ 救援
- CD38 KO + NR 堆疊展現了加成的軸突保護（Takaso 2020）

**缺失：**
- 尚無已發表的研究在同一模型中測試 CD38 抑制劑 + SARM1 抑制劑
- CD38 抑制劑（相對於可穿透腦部的 SARM1 抑制劑 NB-4746）的口服生體可用率與腦部穿透性是實際障礙
- CD38 抑制是全身性（免疫效應）；SARM1 抑制是神經特異性 — 組合在神經退化中可能具有加成效益

### 更新的邊建議

| 來源 | 關係 | 標的 | 信心度 | 狀態 |
|---|---|---|---|---|
| CD38 抑制劑 78c | shares_mechanism_with | SARM1 抑制劑 | EXTRACTED (0.80) | 確認（Bratkowski 2022） |
| 合併 CD38+SARM1 抑制 | synergistic_protection | Neurodegeneration | AMBIGUOUS (0.45) | 假說 — 未直接測試 |

---

## 問題 4：CD38 與 SARM1 是否在微膠細胞中共同表現？

### 來自橋接分析的假說
微膠細胞表現 CD38（腦中的免疫細胞）。SARM1 可能表現於膠質細胞。共同表現可能意味兩者都在 CNS 消耗 NAD+。

### 文獻證據

| 發現 | 來源 | 意涵 |
|---|---|---|
| 「CD38 在腦細胞中強烈表現，包括神經元、星狀細胞以及微膠細胞」 | Guerreiro et al. 2020, Cells（PMID: 32085567） | 微膠細胞中的 CD38 = 是 |
| 「CD38 的表現與酵素活性在初代微膠細胞經 LPS 與 IFN-γ 處理後增加」 | Guerreiro 2020 | 微膠細胞 CD38 可誘發 |
| 「CD38 缺失減少活化誘發的微膠細胞死亡」 | Guerreiro 2020 | 在微膠細胞中的功能角色 |
| 「先前報告 Sarm1 缺失會導致微膠細胞活化受損…微膠細胞並未明顯表現 Sarm1」 | Lin et al. 2014；經 Trends Pharmacol Sci 2025 確認 | 微膠細胞中的 SARM1 = 否（基礎狀態） |
| 「在 CNS 中，SARM1 並非僅限於神經元，且在膠質細胞中豐富」 | Loreto & Pérez-Navarro 2025, Trends Pharmacol Sci | 膠質細胞中的 SARM1 = 是（近期） |
| 「SARM1 也見於星狀細胞、微膠細胞與巨噬細胞中，於其中調節發炎反應」 | Molecular Neurobiology 2025（PMID: 40094658） | 微膠細胞中的 SARM1 = 是（近期） |
| 「微膠細胞在基礎條件下顯現可忽略的 SARM1 量」 | Grokipedia/HPA 數據；Lin 2014 | 微膠細胞中的 SARM1 = 低/缺乏（基礎） |
| 「未觀察到 SARM1 在巨噬細胞中的內在角色」（僅神經元） | Frontiers Immunol 2025，引用 NMNAT2 變體研究 | 骨髓系中的 SARM1 = 依背景而定 |

### 判決：矛盾 — 領域正在演進

**微膠細胞中的 CD38：穩固** — 多項研究確認表現與 LPS/IFN-γ 可誘發性。

**微膠細胞中的 SARM1：矛盾**
- **較舊研究（2014-2021）：** SARM1 不存在於微膠細胞；SARM1 KO 中的微膠細胞活化受損是非細胞自主的（由神經元驅動）
- **較新研究（2025）：** SARM1「在包括微膠細胞在內的膠質細胞中豐富」，調節發炎反應
- **解決：** SARM1 可能在病理/疾病條件下於膠質細胞中表現，但基礎狀態下缺乏。2025 年的回顧可能誇大了基礎膠質表現，或反映了近期的重新分析。

### 對圖譜的關鍵發現

CD38 與 SARM1 在微膠細胞中的重疊為：
- **CD38：** 明確表現（免疫細胞，可誘發）
- **SARM1：** 有爭議 — 基礎狀態下可能低/缺乏，病理中可能誘發

這意味微膠細胞中的 NAD+ 消耗是**CD38 主導**，而非 SARM1 主導。SARM1 的角色仍以保持神經元為中心。

### 更新的邊建議

| 來源 | 關係 | 標的 | 信心度 | 狀態 |
|---|---|---|---|---|
| CD38 | expressed_in | Microglia | EXTRACTED (0.90) | 確認 |
| SARM1 | expressed_in | Microglia | AMBIGUOUS (0.40) | 矛盾 — 基礎低，病理可能 |
| CD38 | co-localizes_with | SARM1（microglia） | AMBIGUOUS (0.20) | 基礎層級不太可能 |

---

## 摘要表：所有四個問題

| # | 問題 | 判決 | 信心度 |
|---|---|---|---|
| 1 | CD38 NMN 耗竭是否保護 SARM1？ | 合理，未直接測試 | AMBIGUOUS (0.35) |
| 2 | CD38 KO 是否致敏 SARM1？ | 否 — CD38 KO 具保護性 | EXTRACTED (0.85) |
| 3 | CD38+SARM1 抑制是否協同？ | 機制成立，未測試 | AMBIGUOUS (0.45) |
| 4 | 微膠細胞中共同表現？ | CD38 是，SARM1 有爭議 | AMBIGUOUS (0.40) |

---

## 新確認的圖譜邊（自橋接分析升級）

| 來源 | 關係 | 標的 | 信心度 | 證據 |
|---|---|---|---|---|
| CD38 | degrades | NMN | EXTRACTED (0.90) | Camacho-Pereira 2016 |
| CD38 KO | protective_against | Axon Degeneration | EXTRACTED (0.85) | Takaso 2020 |
| CD38 抑制劑 78c | shares_mechanism_with | SARM1 抑制劑 | EXTRACTED (0.80) | Bratkowski 2022 |
| CD38 | expressed_in | Microglia | EXTRACTED (0.90) | Guerreiro 2020 |
| NAD+ 先驅物（NR） | stacks_with | CD38 KO | EXTRACTED (0.80) | Takaso 2020 |

## 修訂的超邊

**NAD+ 消耗者競爭網絡** → 確認為真實的研究概念：
- 節點：CD38、PARP1、SARM1、Sirtuins、CD73、NAD+
- 關係：compete_for_substrate
- 信心度：EXTRACTED (0.85)
- 證據：合併 PARP1+CD38 抑制完全救援 NAD+（Covarrubias 2020）；形成加合物的抑制劑在 CD38+SARM1 上有效（Bratkowski 2022）

---

## 後續步驟建議

1. **將確認的邊加入圖譜**（上述 5 條邊）— 這些有文獻背書，非假設性
2. **將假設性邊保持為 AMBIGUOUS**（CD38↔SARM1 直接邊、微膠細胞共同表現）— 誠實面對不確定性
3. **更新 CD38.md wiki 筆記** 以納入：「CD38 亦降解胞外 NMN（ecto-NMNase），調節先驅物可得性」
4. **更新 SARM1.md wiki 筆記** 以納入：「SARM1 活化依賴 NMN/NAD+ 比值（Figley 2021）；CD38 缺失保護軸突（Takaso 2020）」
5. **標記研究優先級：** CD38-NMN-SARM1 軸是單一最重要的未測試假說 — 一項比較 CD38 WT 與 KO 神經元在依賴 SARM1 的 Wallerian 式退化上的研究將直接解決問題 1。
