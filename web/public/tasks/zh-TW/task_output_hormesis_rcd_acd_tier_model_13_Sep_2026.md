---
title: "激素效應與細胞死亡 — RCD、ACD 與分層壓力反應模型"
description: 意外性（ACD）與受調控（RCD）細胞死亡能否以激素效應之鏡檢視；將激素效應窗口映射至階層式 Nrf2/NF-κB/細胞凋亡分層模型，並論證 RCD 是窗口之上的第一死亡層級，而 ACD 位於其外。
created: 2026-09-13
updated: 2026-09-14
type: task-output
tags: [task-output, hormesis, cell-death, regulated-cell-death, accidental-cell-death, apoptosis, necrosis, mitohormesis, preconditioning]
author: []
---

# 激素效應與細胞死亡 — RCD、ACD 與分層壓力反應模型

激素效應文獻綜整（Zhang 2008 分層模型；Calabrese 激素效應框架；Sies 氧化性良性壓力／不良壓力），並與知識庫的 [[Hormesis|激素效應]] 與 [[Hormetic Window|激素效應窗口]] 筆記及 [[Regulated Cell Death|受調控細胞死亡]] 中的細胞死亡分類學對照。
產生：13_Sep_2026 08:31 PM PDT。

## 摘要

激素效應是**壓力源劑量反應**的特性，而非死亡型式的特性。因此：

* **RCD 天然契合激素效應之鏡。** 激素效應窗口的上界（NOAEL）*就是* RCD 的閾值。其上，產生抗性的同一套適應性機器，轉入受調控的執行。預處理——缺血性、熱性、氧化性、熱量性——是 RCD 可經激素效應調校的實驗證據：先前的亞致死暴露會提高 RCD 閾值並拓寬窗口。
* **ACD 作為死亡模式則否。** 意外性細胞死亡是即時的、被動的、生物物理性的，沒有感測器、沒有訊號、沒有檢查點。激素效應需要感測與反應系統。ACD 沒有低劑量適應臂，也無法以預處理加以調節。*造成* ACD 的壓力源在亞致死劑量下具有激素效應，但 ACD 本身位於激素效應框架之外。

乾淨的綜合是**分層壓力反應連續體**（Xiao/Nel 階層式氧化壓力模型，由 Zhang 等人 2008 年正式化為激素效應）：第 I 層 Nrf2/ARE 抗氧化適應 → 第 II 層 NF-κB 發炎 → 第 III 層凋亡／壞死執行。激素效應窗口是第 I 層（加上第 II 層早期）；RCD 是第 III 層；ACD 是訊號之外的終末、不受控層級。

## 1. 正確的框架 — 激素效應位於死亡決定之上游

一個反覆出現的錯誤，是詢問某個*死亡型式*是否「具激素效應」。激素效應描述的是壓力源或終點之**劑量反應曲線**的形狀。死亡型式是該曲線高劑量端的*輸出*。因此正確的問題是：

> 壓力源劑量上升時，適應性（激素效應）區域在哪裡結束，而何種死亡過程開始？

可能有兩種答案，且行為不同：**RCD**（可程式的「高劑量臂」）與 **ACD**（災難性、不可程式的臂）。

## 2. 以激素效應之鏡看 RCD — 結構性契合

### 2.1 窗口以 RCD 閾值為界

[[Hormetic Window|激素效應窗口]] 將上界定義為 NOAEL：*「高於此劑量，壓力源壓垮適應性容量。損傷超過修復。」*其上即死亡。窗口上緣因此**是觸發 RCD 的閾值**——不是代謝上的奇聞，而是執行邊界。知識庫筆記已結構性編碼此轉變：>4 小時的脈衝被註記為 *「[[Apoptosis|細胞凋亡]] priming」*，並明確將「金髮姑娘區」與「既不太少（無適應）也不太多（細胞死亡）」配對。

### 2.2 分子層級激素效應 — 同一分子，劑量不同則結局相反

此鏡最終關乎**細胞位於訊號傳導曲線上的何處**，RCD 是終末、最右側的區段：

| 媒介 | 低劑量 | 高劑量 |
| --- | --- | --- |
| ROS | NRF2/ARE 抗氧化程式（良性壓力） | [[MOMP]] → 凋亡；[[Ferroptosis|鐵死亡]]；[[Necroptosis|壞死性凋亡]] |
| Ca²⁺ | 訊號傳導、粒線體去氫酶活化 | [[Calpains|鈣蛋白酶]] / [[Mitochondrial Permeability Transition Pore\|mPTP]] → [[Necrosis|壞死]] |
| NF-κB | 存活、蛋白質恆定、發炎 priming | [[Pyroptosis|細胞焦亡]] / [[Necroptosis|壞死性凋亡]] 執行脈絡 |
| AMPK/mTOR 平衡 | 分解性適應、[[Autophagy|自噬]] | 自噬性細胞死亡／能量崩潰 |

Sies 的氧化性「良性壓力 vs 不良壓力」框架是其經典陳述：中度的 ROS 驅動適應性訊號，而較高劑量下的氧化性不良壓力被用於觸發凋亡、鐵死亡與自噬。

### 2.3 分層模型 — 適應如何變成死亡

最有用的形式化是**階層式壓力反應分層模型**（Xiao 等人 2003，階層式氧化壓力；由 Zhang、Pi、Woods、Jarabek、Clewell 與 Andersen 改編為激素效應，*Dose-Response* 2008）：

| 層級 | 壓力量級 | 主導程式 | 細胞狀態 |
| --- | --- | --- | --- |
| **I** | 低（激素效應區） | [[NRF2]]/[[ARE]] 抗氧化 + 第二相酶、[[Glutathione|穀胱甘肽]]恢復 | **適應性**——可逆、接近正常功能 |
| **II** | 中度 | [[NF-κB]] 驅動的發炎反應、細胞週期停滯 | **受壓**——移除壓力源後可逆 |
| **III** | 高 | 凋亡與壞死執行 | **毒性**——不可逆 |

Zhang 等人直接陳述 *「非常高劑量的壓力源很可能將細胞不可逆地驅至毒性狀態，其中發生凋亡或壞死。」* 關鍵在於，第 I 層 → 第 III 層序列**是同一控制網路飽和**：低劑量下產生激素效應的負回饋抗壓電路在高劑量下被壓垮，而受控變數（ROS、加合物等）發生*災難性*上升。

### 2.4 RCD 是激素效應的失效模式，而非分離現象

激素效應與 RCD 是一個劑量反應的兩種結局：

* 窗口內的壓力 → 適應性狀態 → **死亡閾值提高／抗性**。
* 窗口外的壓力 → **RCD** 執行（先是凋亡，凋亡受阻後是受調控壞死）。

這就是為何兩套文獻不斷交會：「激素效應失敗」的終點，正是細胞死亡生物學的入口。

### 2.5 預處理是 RCD 可經激素效應調校的證據

Calabrese 的術語論文將**適應性反應、預處理與 priming** 明確收編進激素效應劑量反應框架。經典示範：

* **缺血性預處理**——短暫的亞致死缺血提高心臟與大腦後續致死缺血發作之閾值；知識庫的自噬來源陳述 *「缺血性預處理是激素效應中探索最透徹的範例之一。」* 這直接調校[[Necrosis|壞死]]／受調控壞死的閾值。
* **熱休克預處理**——亞致死熱誘導[[HSP70]]/[[HSF1]]，並保護對抗後續致死壓力。
* **氧化性預處理**——Zhang 等人顯示，先前的低劑量 HOCl 或 tert-butylhydroquinone 會*將存活性劑量反應曲線右移*，同時保持其雙相形狀；亦即拓寬窗口。
* **熱量限制／運動／禁食**——以 [[AMPK]]、[[SIRT1]]、[[PGC-1α]]、[[NRF2]] 提高壓力抗性的慢性與急性粒線體激素效應壓力源。

所有這些都作用於 **RCD 閾值**，而非 ACD。

### 2.6 自噬 — 約束 RCD 的激素效應執行者

自噬是「在適應劑量下具保護性、過度驅動即致死」之途徑最乾淨的例子。知識庫的自噬與老化來源明確框定：自噬參與激素效應，預處理的益處部分依賴自噬。輕度自噬清除受損的粒線體，降低本會承諾細胞走向 RCD 的 ROS；過度自噬變成自噬性細胞死亡。

### 2.7 能量成本／過度補償基礎

Zhang 等人提出，激素效應源於適應性反應與其能量成本之間的**取捨**：輕度壓力大幅上調抗壓基因表現（熱休克*大腸桿菌*中[[HSP70]]可達總蛋白的 20%）並過度補償，而高壓力使受控變數脫離控制。這是知識庫過度補償假說與分層模型之間的量化橋樑。

## 3. 以激素效應之鏡看 ACD — 類別錯配

### 3.1 無感測器、無適應、無窗口

[[Regulated Cell Death|受調控細胞死亡筆記中的 ACD]] 依定義是即時的、被動的、生物物理性的——由壓倒性侵襲造成的膜破裂或蛋白質變性。它沒有專屬訊息級聯、沒有檢查點、沒有轉錄程式。激素效應**需要**感測與反應架構（Keap1-Nrf2、HSF1、AMPK、DNA 損傷反應）。ACD 則完全沒有。ACD 的劑量反應因此是單調的；沒有「有益的低劑量 ACD」，也沒有任何預處理能使細胞在物理上抵抗災難性創傷。

### 3.2 觸發因素具激素效應，儘管終點不具

熱、放射、缺血與創傷在亞致死劑量下都被用作**激素效應引發因子**。因此：

* **激素效應作用於通往 ACD 的路徑**，方法是提高細胞從 RCD 轉入崩潰的閾值（或防止侵襲達到災難性強度）。
* **ACD 本身仍在窗口之外。** 你無法以預處理使細胞對抗變性；只能預處理使它更能承受亞致死侵襲的*受調控*後果。

### 3.3 ACD/RCD 邊界並不清晰

這是 ACD 的重要微妙之處。某些看似意外的死亡具有**受調控、可調節的成分**——MPT 驅動的壞死與受調控壞死（[[Necroptosis|壞死性凋亡]]、[[Ferroptosis|鐵死亡]]）模糊了分界。NCCD 明確以「MPT 驅動壞死」作為受調控子程式命名，使之清晰。因此激素效應之鏡**透過其受調控成分**可以觸及「看似意外」的死亡，但永遠碰不到純生物物理性的 ACD。

## 4. 統一模型 — 激素效應作為死亡決定的劑量反應

| 層級 | 相對於窗口的劑量 | 程式 | 死亡型式 | 可經激素效應調節？ |
| --- | --- | --- | --- | --- |
| I | 低於 LOAEL | 恆定 | — | — |
| II | 窗口內 | Nrf2/ARE、HSF1、自噬、DNA 修復 | — | 是（適應拓寬窗口） |
| III | 高於 NOAEL，分數化／訊號化 | NF-κB → caspase/RIPK/GPX4 檢查點 | **RCD**（[[Apoptosis|細胞凋亡]] → [[Necroptosis|壞死性凋亡]]/[[Pyroptosis|細胞焦亡]]/[[Ferroptosis|鐵死亡]]） | 是（預處理提高閾值） |
| IV | 災難性／即時 | 無（生物物理性） | **ACD**（[[Necrosis|壞死]]） | 否 |

**論點陳述：** RCD 是激素效應窗口之上的第一個死亡層級，與其完全整合；ACD 是訊號之外的終末、不受控層級，位於激素效應框架之外——僅能藉由*防止*激素效應觸發因素變成災難性，才能觸及。

## 5. 組織、性別與脈絡修飾因子

* **窗口寬度具組織特異性**（[[Hormetic Window|激素效應窗口]]）：腦與胰臟 β 細胞窄，肝臟與骨骼肌寬。同一壓力源在肝臟具激素效應、在腦中卻造成 ACD。
* **性別修飾死亡模式偏倚。** 知識庫的 XX/XY 範式（雌性 → caspase 凋亡；雄性 → PARP-1/AIF 受調控壞死）意味著 RCD 閾值存在性別差異位置，因此潛在的有效窗口寬度也不同——這是一個明確可檢驗的預測，在知識庫中尚未確立。
* **需要時間。** 轉錄適應需要數分鐘至數小時，這就是為何預處理有窗口、而單次即時侵襲沒有。
* **激素效應可能適應不良。** 提高凋亡閾值（例如經 SIRT1/p53 去乙醯化或慢性 NF-κB）可保護正常組織，同時促進腫瘤生成——同一窗口位移利弊兼具。

## 6. 注意事項

* 分層模型是**框架**，而非普遍法則：層級邊界重疊，某些細胞繞過 NF-κB，直接從 Nrf2 到凋亡。Zhang 的公式明確是以原型壓力源（氯氣/HOCl）檢驗的假說。
* ACD/RCD 區別是**操作性且模糊的**；NCCD 承認中間／受調控壞死類別。
* 激素效應窗口是**劑量 × 時間**現象；未附持續時間引用單一閾值是不完整的。
* 知識庫的 [[Hormetic Window|激素效應窗口]] 先前僅將上界框為「毒性」。本任務輸出（與隨附的筆記編輯）在此邊界區分 RCD 與 ACD。

## 7. 結論

1. 激素效應組織**上游劑量反應**；死亡型式是其高劑量輸出。
2. **RCD 與激素效應整合：** 窗口上界即 RCD 閾值，而預處理（一項激素效應介入）可證明地提高之。
3. **ACD 未與激素效應整合：** 它沒有適應臂、也沒有檢查點；只有其*觸發因素*具激素效應。
4. **分層模型**（Nrf2 → NF-κB → 凋亡／壞死）是激素效應與細胞死亡生物學之間的機制橋樑。
5. 正確序列是**恆定 → 激素效應適應 → RCD → ACD**，激素效應窗口完全位於前兩個階段之內。

## 來源

* Zhang Q, Pi J, Woods CG, Jarabek AM, Clewell HJ III, Andersen ME. Hormesis and adaptive cellular control systems. *Dose-Response.* 2008;6(2):196–208. doi:10.2203/dose-response.07-028.Zhang. PMC2478522.（第 I 層 Nrf2 / 第 II 層 NF-κB / 第 III 層凋亡-壞死；細胞狀態轉變；能量成本假說。）
* Xiao GG, Wang M, Li N, Loo JA, Nel AE. Use of proteomics to demonstrate a hierarchical oxidative stress response to diesel exhaust particle chemicals in a macrophage cell line. *J Biol Chem.* 2003;278:50781–50790.（階層式氧化壓力分層模型的起源。）
* Calabrese EJ, Baldwin LA. Hormesis: the dose-response revolution. *Annu Rev Pharmacol Toxicol.* 2003;43:175–197. doi:10.1146/annurev.pharmtox.43.100901.140223.
* Calabrese EJ, Bachmann KA, Bailer AJ, et al. Biological stress response terminology: integrating the concepts of adaptive response and preconditioning stress within a hormetic dose-response framework. *Toxicol Appl Pharmacol.* 2007;222(1):122–128. doi:10.1016/j.taap.2007.02.015.
* Calabrese EJ. Hormesis: a fundamental concept in biology. *Microbial Cell.* 2014;1(5):145–149. doi:10.15698/mic2014.05.145.（量化特徵：30–60% 峰值、約 10–20 倍窗口、37% 頻率。）
* Calabrese V, Cornelius C, Dinkova-Kostova AT, et al. Cellular stress responses, the hormesis paradigm, and vitagenes. *Antioxid Redox Signal.* 2010;13(11):1763–1811.（Vitagenes 作為激素效應執行者。）
* Sies H, et al. Hormesis and oxidative distress: pathophysiology of reactive oxygen species and the open question of antioxidant modulation and supplementation. *Antioxidants (Basel).* 2022;11(8):1613. doi:10.3390/antiox11081613.（氧化性良性壓力 vs 不良壓力；不良壓力觸發凋亡／鐵死亡／自噬。）
* Galluzzi L, et al. Molecular mechanisms of cell death: recommendations of the NCCD 2018. *Cell Death Differ.* 2018;25:486–541. PMID 29362479.（RCD vs ACD 定義；MPT 驅動壞死。）
* 知識庫：`src/notes/_link/Hormesis.md`、`src/notes/_link/Hormetic Window.md`、`src/notes/autophagy/_document_ - rubinsztein2011_autophagy_and_aging.md`（自噬參與激素效應；缺血性預處理）。

## 連結

* [[Hormesis|激素效應]] — 上層概念；劑量反應框架。
* [[Hormetic Window|激素效應窗口]] — 適應發生的量化區域；其上界即 RCD 閾值。
* [[Regulated Cell Death|受調控細胞死亡]] — 構成窗口上界（第 III 層）的可程式死亡家族。
* [[Apoptosis|細胞凋亡]] — 第一個 RCD 層級；預處理調校其閾值。
* [[Necrosis|壞死]] — 意外性（ACD）死亡；終末、非激素效應層級。
* [[Necroptosis|壞死性凋亡]]、[[Pyroptosis|細胞焦亡]]、[[Ferroptosis|鐵死亡]]、[[Parthanatos]] — 超出窗口後接續凋亡的受調控溶裂型式。
* [[Autophagy|自噬]]、[[Mitohormesis|粒線體激素效應]] — 約束 RCD 的適應性執行者。
* [[NRF2]]、[[NF-κB]] — 分別為第 I 層與第 II 層壓力程式。
* [[Ischemia-reperfusion Injury|缺血再灌流損傷]] — 經典預處理脈絡。
* [[HSP70]]、[[HSF1]] — 熱性激素效應執行者。

## 建議後續

* 將 RCD/ACD 區別加入 [[Hormetic Window|激素效應窗口]]（隨本輸出一起完成）。
* 考慮專屬的 [[Cell Death Decision Tree|細胞死亡決策樹]] 交叉連結——現有 `task_output_cell_death_decision_tree_11_Sep_2026.md` 將壓力映射到型式，可以用分層模型加以註記。
* 值得記錄的可檢驗預測：性別差異性 RCD 閾值（XX caspase vs XY PARP/AIF）意味著性別差異性的有效激素效應窗口寬度。