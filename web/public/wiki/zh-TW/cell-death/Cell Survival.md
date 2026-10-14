---
title: 細胞存活
description: 細胞存活訊號傳遞是一組促進存活的路徑 —— 主要為 PI3K-AKT-mTOR、NF-κB 與 MAPK —— 它們透過對抗凋亡、抑制死亡受體輸出以及重新編排代謝，讓細胞在壓力下維持存活。
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [cell-signaling, cancer, apoptosis, signaling, therapeutic-resistance]
aliases: [Survival, 存活訊號傳遞, 促存活訊號傳遞, cell survival]
---

# 細胞存活

**細胞存活**並不是一條獨立的路徑，而是一系列訊號迴路讓受壓細胞存活、而非執行死亡程式的淨效果。在本 vault 的用法中 —— [[Oncogene]]、[[BRAF]]、[[MEK1_2]]與[[Growth Factor]]都將其標的描述為調節增殖、分化*與存活* —— 這個詞是經典生長因子反應三元組的第三支，位於受體酪胺酸激酶與[[RAS]]–[[RAF]]–MEK–[[ERK]]級聯的下游。

> [!warning] 「存活」不只是「沒有凋亡」
> 存活訊號傳遞常被等同於對凋亡的抗性，綜述文章確實會區分兩者。但這些程式並不可互換：存活訊號也會抑制壞死性凋亡、遏制衰老、維持代謝，並阻斷死亡受體訊號傳遞中的促死亡分支，同時保留促發炎分支。這就是為什麼一個細胞可以同時具有凋亡抗性，卻容許鐵死亡或壞死性凋亡。

## 主要迴路

**PI3K-AKT-mTOR。** 受體酪胺酸激酶活化 PI3K，產生 PIP3 並招募 AKT。AKT 磷酸化並抑制促凋亡因子 —— BIM（[[Bcl-2 family|Bcl-2 家族]]成員）、BAD、FOXO 轉錄因子與 caspase-9 —— 同時活化 mTOR，後者抑制自噬並驅動合成代謝性的生長程式。這是癌症中佔主導的存活軸，也是 PI3K 與 AKT 抑制劑開發的標的。

**NF-κB。** RelA/p50（或 c-Rel）在 IKK 媒介的磷酸化觸發 IκBα 降解之前都受 IκBα 抑制。一旦進入細胞核，NF-κB 便誘導抗凋亡基因（BCL-2、BCL-XL、XIAP、survivin、c-IAPs），以及促增殖與促存活基因（cyclin D1、MYC）。構成性的 NF-κB 活化是許多血液腫瘤的特徵，也是公認的[[Drug Resistance|抗藥性]]機制。

**MAPK/ERK。** 除了驅動增殖之外，ERK 輸出會藉由磷酸化來穩定[[BIM]]與 BAD，這反而會促成凋亡，除非進一步被修飾；而 ERK 媒介的 RSK 活化決定 BIM 的穩定性。因此 ERK 訊號傳遞的存活或死亡結果取決於情境與修飾狀態，而非固定不變。

**死亡受體訊號傳遞。** 在 TNF 受體訊號傳遞中，Complex I —— 在膜上組裝 —— 對 RIPK1 進行多泛素化並活化 NF-κB，支持存活與發炎。只有當 NF-κB 輸出被抑制時，同一個受體才會轉為 Complex II，招募 FADD 與 caspase-8 以誘發凋亡，或 —— 若 caspase-8 被阻斷 —— 誘發壞死性凋亡。因此受體同時編碼存活與死亡，結果取決於哪一個複合體形成。

## 代謝耦合

存活訊號傳遞與代謝密不可分。AKT 驅動的葡萄糖攝取、[[Glycolysis]]與脂肪生成，滿足一個不被允許死亡的細胞之營養需求；mTORC1 藉由磷酸化 ULK1 阻斷[[Autophagy]]，移除原本可供應相同受質的回收途徑。衰老細胞在代謝上活躍卻永久停止生長，正處於此邊界 —— 它們的存活訊號支持[[SASP]]，而細胞週期停止則阻止分裂。

> [!important] 存活訊號傳遞是治療上的雙刃劍
> 每一條存活軸都是一種抗藥性機制。PI3K-AKT-mTOR 活化賦予對化學治療與標靶治療的抗性；NF-κB 活化賦予對誘發凋亡藥物的抗性；而抑制存活訊號傳遞可將抗藥性腫瘤轉為凋亡型 —— 同時卻會加重同一抑制在正常組織中的毒性，因為那裡的存活訊號可防範生理性凋亡並維持組織恆定。

## 文件
- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|crosstalk_cell_death_mechanisms]] — the clearest vault statement of the mechanism this note covers: TNF receptor Complex I polyubiquitinates RIPK1 and activates NF-κB to maintain cell survival, with the switch to Complex II (apoptosis) or the necrosome (necroptosis) occurring only when NF-κB output is suppressed.

## 連結
- [[Apoptosis]] —— 存活訊號傳遞的主要平衡對手；兩者在機制上相反，且在多數腫瘤中共同表現。
- [[Oncogene]] —— 致癌基因活化在促進增殖與分化的同時也促進存活，而存活正是讓一個克隆在致癌損傷後持續存在的因素。
- [[BRAF]]與[[MEK1_2]] —— MAPK 級聯的 RAF-MEK 分支傳遞調節增殖、分化與存活的生長因子訊號，也是本 vault 中 MEK 抑制劑筆記的標的。
- [[RAS]] —— 將受體酪胺酸激酶活化與 MAPK 及 PI3K 存活輸出耦合起來的上游 GTP酶。
- [[Autophagy]] —— 本身就是一種存活機制，在 AKT 訊號傳遞下被 mTORC1 抑制；是營養壓力期間與存活訊號傳遞功能上的對應物。
- [[Senescence]] —— 衰老同時需要穩定的細胞週期停止與活躍的存活訊號傳遞；缺乏後者，細胞只會直接死亡。
- [[mTORC1]] —— AKT 藉以強制生長並阻斷自噬回收途徑的節點。
- [[NF-κB]] —— 存活訊號傳遞的主要轉錄分支，同時誘導抗凋亡與生長基因。
- [[Akt]] —— PI3K 存活軸的核心激酶效應器，也是致癌訊號的直接轉錄標的。
- [[Angiogenesis]] —— 讓存活下來的克隆得以擴大而非消退的腫瘤血管供應。
- [[Drug Resistance]] —— 在臨床上，持續的存活訊號傳遞是腫瘤存活並超越其標靶治療的主要機制。

## 連結摘要
- 新增連結：[[Apoptosis]]、[[Oncogene]]、[[BRAF]]、[[MEK1_2]]、[[RAS]]、[[ERK]]、[[Autophagy]]、[[Senescence]]、[[mTORC1]]、[[NF-κB]]、[[Akt]]、[[PI3K]]、[[Angiogenesis]]、[[Glycolysis]]、[[SASP]]、[[mTOR]]
- 建議建立的筆記：[[Death Receptor Signaling]]
- 建議強化的強連結：[[Apoptosis]] ↔ [[Cell Survival]] ↔ [[Bcl-2 family]]（最明顯屬於同一迴路的三個筆記目前彼此之間都沒有邊）、[[Oncogene]] ↔ [[Cell Survival]] ↔ [[BRAF]]（生長因子反應三元組在三個筆記中被宣稱，卻沒有任何一個作為錨點）、[[Senescence]] ↔ [[Cell Survival]] ↔ [[SASP]]（衰老之所以穩定，只是因為在停止持續的情況下存活訊號仍在進行 —— 這正是讓細胞清除藥物能生效的耦合關係）