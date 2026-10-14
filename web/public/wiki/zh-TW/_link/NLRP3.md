---
title: NLRP3
description: 'NOD-like receptor pyrin domain-containing protein 3（NLRP3，cryopyrin），為 NLRP3 發炎小體的感測器成分。它是一個由 PYD-NACHT-LRR 三部分組成的蛋白，透過「先致敏（priming）、後活化」的兩步驟過程被活化，最終導致 caspase-1 活化與細胞焦亡（pyroptosis）。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - inflammation
  - innate-immunity
aliases: [NLR Family Pyrin Domain Containing 3, Cryopyrin, NALP3, CIAS1]
---

# NLRP3

NLRP3 是[[NLRP3 Inflammasome|NLRP3 發炎小體]]的感測蛋白，也是醫學界研究最密集的發炎節點之一。它之所以重要，直接源於其活化的多效性：它所回應的並非單一分子模式，而是極為廣泛的微生物、宿主來源與環境刺激。

> [!warning] 因果歸因十分困難
> 由於 NLRP3 會同時被鉀離子外流、溶酶體破壞、粒線體 ROS、結晶結構與代謝壓力活化，論文中「NLRP3 發炎小體被活化」通常只是細胞壓力的*讀值（readout）*，而非機制。宣稱某藥物或某基因「透過 NLRP3」作用的主張，應以遺傳學證據（Nlrp3/ASC/caspase-1 敲除）而非僅靠藥理學證據來檢驗，因為 NLRP3 抑制劑大多是間接且專一性不佳的。

## 結構與結構域

NLRP3 是一個約 100 kDa 的 NOD-like 受體，具有三個結構域，且中間的結構域帶有 ATPase 活性：

| 結構域 | 功能 |
| --- | --- |
| **N 端 PYD**（pyrin domain） | 作為 PYD–PYD 同型相互作用支架，促進[[ASC]]（PYCARD）的成核；ASC 是招募 pro-caspase-1 的接合蛋白。許多 NLRP3 配體（例如 MCC950）即結合於此。 |
| **中央 NACHT 結構域** | 含有具 **Walker A/B ATPase 標記的 NBD（核苷酸結合結構域）**，另有一個翼狀 C 端結構域（WHD）與螺旋狀結構域（HD2）。ATP 的結合與水解驅動 NLRP3 的自我結合——這是 NBD/HD2 的構形開關，而非典型的 GEF 型 ATPase。LRR–NACHT 交互作用亦賦予自我抑制。 |
| **C 端 LRR**（leucine-rich repeat） | 亮胺酸重複序列，為界定此家族的辨識模組。參與自我抑制，且末端殘基為 NEK7 交互作用所必需。截短一個使 LRR 縮短的 exon 會阻斷 NLRP3–NEK7 結合並消除活化能力。 |

冷卻電子顯微鏡（cryo-EM）研究顯示，未活化的蛋白並非鬆散的單體：NLRP3 會形成**由 12 至 16 個次單元構成的雙環籠狀（double-ring cage）**結構，由 LRR–LRR 交互作用維繫整體組裝，且 PYD 結構域被**遮蔽於內部**，以防止過早招募 ASC。因此，活化並非單純的「展開」，而是從籠狀到圓盤狀的重組：在活性發炎小體中，NLRP3–NEK7–ASC 的圓盤涉及 NACHT 次結構域約 85° 的旋轉。

## 兩步驟活化

> [!info] 來源：[[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> 該 sirtuin 綜述明確陳述了兩步驟模型：NLRP3 發炎小體「必須先被致敏（priming），再被活化」，並描述 TLR4 的接合驅動[[NF-κB]]活化與 NLRP3 表現量增加，進而產生下游的 IL-1β、IL-18、TNF-α 與 TGF-β。該綜述同時指出 SIRT1 與 SIRT3 作用於 NLRP3 而產生抗發炎效應，SIRT3 可削弱 ROS 並降低 NLRP3 活性，以及粒線體自噬／自噬阻斷途徑——受損粒線體累積後產生 ROS，進而活化 NLRP3 發炎小體。

> [!info] 機制
> **步驟一（priming）。** 模式辨識受體（如 [[Toll-like Receptor|TLR4]]）或細胞激素受體活化 [[NF-κB]] 與 [[AP-1]]，使 NLRP3 mRNA 上升並解除去泛素化所造成的抑制，並驅動 pro-IL-1β 與 pro-IL-18 的表現。此步驟依賴轉錄，需時數小時。
>
> **步驟二（活化）。** 需要第二個基本上不依賴轉錄的刺激。已確立的第二訊號包括：**鉀離子外流**（經由 P2X7 或 TWIK2，以及對強心配糖體敏感的 Na⁺/K⁺-ATPase）、**顆粒吞噬後溶酶體 cathepsin B 的釋放**、**粒線體 ROS** 與透過心磷脂及 TXNIP 感測的粒線體損傷、經 [[AIFM2]] 媒介的 PI3P–ATPase 解離所導致的**反面網絡崩解**，以及經 RIPK3 的**壞死性凋亡相關膜損傷**。激酶 **NEK7** 結合 NLRP3 的 LRR，將 NLRP3 與 ASC 橋接起來，且為組裝所必需。
>
> **輸出。** 組裝完成的發炎小體招募並活化 pro-**[[Caspase-1]]**，後者將 pro-IL-1β 與 pro-IL-18 切割為成熟型、切割 gasdermin D 以誘發[[Pyroptosis|細胞焦亡]]，並切割 [[Akt]]。隨後 IL-1β 與 IL-18 被釋放——這是一種發炎性、溶解性且代謝代價高昂的細胞死亡。

priming／活化的區分解釋了相關藥理學：抑制基因表現的藥物（類固醇、上游的 IL-1 阻斷劑）作用於步驟一，而 NLRP3 專一性抑制劑（MCC950 及其後繼者）則作用於步驟二。

## 疾病關聯

> [!important] 臨床意義
> **Cryopyrin 相關性週期性症候群（CAPS）。** 增益型功能的 NLRP3 突變——最常見為 R260W，以及位於 NBD/NACHT 結構域的 L266P、Q705K、Y749C——會造成 CAPS，其包含家族性寒冷自發炎症症候群、Muckle–Wells 症候群與 NOMID/CINCA。這些疾病證明了單憑 NLRP3 的錯誤活化即足以致病。介白素-1 阻斷（[[Anakinra]]、[[Canakinumab]]）在 CAPS 中有效，這驗證了 IL-1β 軸作為治療標的，並反過來驗證了 NLRP3 作為其上游守門員的角色。
>
> **常見疾病。** NLRP3 的活化以不等的證據強度被認為與痛風（尿酸單鈉結晶）、[[Atherosclerosis|動脈粥樣硬化]]、[[Alzheimer's Disease|阿茲海默氏症]]及其他神經退化疾病、[[Type 2 Diabetes Mellitus]]、[[NASH]]、[[Fibrosis]]、敗血症與[[Cytokine Storm|細胞激素風暴]]相關；此外——對本知識庫的興趣而言日益核心——也與[[Inflammaging]]及 SASP 相關，其中衰老細胞中的粒線體功能障礙與 ROS 是導致 NLRP3 持續活化的一條已知途徑。sirtuin 綜述中關於 SIRT3／粒線體自噬的發現，正是粒線體品質管制與發炎小體張力之間的機制連結。
>
> **治療藥物。** 除了 MCC950 及其相關化合物，標的空間還包括 P2X7 拮抗劑、不依賴 K⁺ 外流的 NEK7 抑制、gasdermin D 孔道阻斷劑，以及——與老化最相關者——能恢復粒線體品質並降低 ROS 的上游介入手段，其中[[Mitophagy|粒線體自噬]]與 SIRT3 活化是最主要的例子。

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]——陳述兩步驟的 priming／活化模型，描述 TLR4→NF-κB 驅動的 NLRP3 上調與 IL-1β/IL-18/TNF-α 的生成，並報告 SIRT1/SIRT3 藉由降低 ROS 而削弱 NLRP3 活性，以及粒線體自噬阻斷 → 粒線體 ROS → NLRP3 的途徑。

## Connections

- [[NLRP3 Inflammasome]]——由 NLRP3 成核的多蛋白複合體；感測器與發炎小體的區別是此領域最常見的混淆來源，兩篇筆記必須分開。
- [[Inflammasome]]——家族層級的框架；NLRP3 是特性最明確的發炎小體，也是唯一具有增益型功能單基因疾病的成員。
- [[Caspase-1]]——發炎小體所活化的效應蛋白酶；切割 pro-IL-1β、pro-IL-18 與 gasdermin D。
- [[IL-1β]]——主要的細胞激素輸出；IL-1 阻斷在 CAPS 中已獲證實，這是發炎小體治療學中最強的因果鏈。
- [[IL-18]]——第二個典型輸出，總是與 IL-1β 一同釋放；注意 IL-18 需經發炎小體切割才具活性，與 IL-1 不同。
- [[ASC]]——將 NLRP3 的 PYD 與 pro-caspase-1 橋接起來的接合蛋白；是發炎小體圓盤不可或缺的成核因子。
- [[Pyroptosis]]——伴隨發炎小體活化發生的溶解性細胞死亡，透過 gasdermin D 孔道執行；這正是 NLRP3 活化具有細胞毒性而非僅是發炎性的原因。
- [[Gasdermin D]]——由 caspase-1 切割所形成的執行者，構成釋放細胞激素並裂解細胞的孔道。
- [[MCC950]]——驗證最為充分的小分子 NLRP3 抑制劑，也是確立發炎小體為可成藥標的（而非僅為描述性概念）的化合物。
- [[Canakinumab]]——抗 IL-1β 抗體，已核准用於 CAPS；是整條 NLRP3 → caspase-1 → IL-1β 軸的臨床驗證。
- [[Anakinra]]——IL-1 受體拮抗劑，同樣核准用於 CAPS 及其他遺傳性自發炎症症候群。
- [[Autoinflammation]]——CAPS 是第一個被描述的遺傳性自發炎症症候群，也是發炎小體驅動疾病最清楚的證明。
- [[Gout]]——一種結晶誘導的 NLRP3 活化劑，也是確立「顆粒／吞噬溶酶體損傷為活化途徑」的案例。
- [[Toll-like Receptor]]——TLR4 與其他 TLR 在步驟一提供 priming 訊號；TLR–NLRP3 的協同作用是教科書式的雙訊號軸。
- [[NF-κB]]——提升 NLRP3 表現量的 priming 轉錄因子；NLRP3 是其典型標的之一，與 IL-6、TNF 並列。
- [[Inflammaging]]——NLRP3 在老年學之所以重要的主因之一：由粒線體 ROS 驅動的慢性低度 NLRP3 活化，被提出為年齡相關發炎的核心機制。
- [[SASP]]——衰老細胞會持續維持 NLRP3 活化，而由此產生的 IL-1β/IL-18 分泌，正是使 SASP 具有促發炎性（而非僅是靜默）的部分原因。
- [[SIRT3]]——依本知識庫中 sirtuin 文件所述，其缺失會透過過量的粒線體 ROS 增加 NLRP3 活化。
- [[Mitophagy]]——粒線體自噬的缺失會使受損粒線體累積、升高 ROS 並活化 NLRP3；這是粒線體品質管制與發炎小體張力之間的直接連結。
- [[Microglia]]——一種常駐發炎細胞類型，在神經發炎模型中 NLRP3 活化反覆出現，與上述神經退化疾病相關。

## Linking Summary
- 新增連結：[[NLRP3 Inflammasome]]、[[Inflammasome]]、[[Caspase-1]]、[[IL-1β]]、[[IL-18]]、[[ASC]]、[[Pyroptosis]]、[[Gasdermin D]]、[[MCC950]]、[[Canakinumab]]、[[Anakinra]]、[[Autoinflammation]]、[[Gout]]、[[Toll-like Receptor]]、[[NF-κB]]、[[Inflammaging]]、[[SASP]]、[[SIRT3]]、[[Mitophagy]]、[[Microglia]]
- 建議建立的筆記：[[NEK7]]、[[Cryopyrin-Associated Periodic Syndrome]]、[[Muckle-Wells Syndrome]]、[[NOMID]]、[[PYCARD]]、[[Lysosomal Rupture]]、[[Potassium Efflux]]——因已存在而移除者：AIFM2、P2X7 Receptor、TXNIP
- 應加強的強連結：[[NLRP3]] ↔ [[NLRP3 Inflammasome]]（感測器／複合體的區別是此文獻中最常見的錯誤，兩側都必須明確寫出）、[[NLRP3]] ↔ [[Inflammaging]]（SIRT3／粒線體自噬 → ROS → NLRP3 的鏈結記錄於 sirtuin 文件中，但未記錄於老年學筆記中）