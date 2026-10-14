---
title: Cell Signaling
description: 細胞藉由受體、第二訊使與被放大的訊息傳遞級聯反應來偵測並回應化學與物理訊號的過程；包含自分泌、旁分泌、鄰分泌與內分泌等訊號傳遞模式。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - signaling-pathway
  - scientific-concept
aliases: [cell signalling, signal transduction, intercellular communication]
---

# 細胞訊號傳遞

細胞訊號傳遞是細胞偵測外部或內部訊號、並將其轉換為自身行為改變的過程。它是普遍存在的：發育、組織修復、免疫與恆定都以它為基礎，而它的失效則會導致癌症、自體免疫與糖尿病。其核心架構是三個部分——**第一訊使**（配體）、**受體**與**訊號**——而這個領域的其他一切，不過是這三者如何連接的各種變體。

## 典型架構

- **第一訊使（配體）**——負責傳遞訊號的分子。化學上非常多樣：離子（[[Calcium]]、[[Potassium]]）、脂質（類固醇、[[Prostaglandins]]）、胜肽（[[Insulin]]、ACTH）、核苷酸（[[Cyclic Adenosine Monophosphate|cAMP]]、[[Cyclic Guanosine Monophosphate|cGMP]]），以及氣體（[[Nitric Oxide]]）。荷爾蒙大多由胜肽與脂質配體構成。
- **受體**——偵測裝置，其專一性由配體—受體結合介面所賦予。
- **效應器／傳遞**——將受體占位轉換為細胞內化學變化、並最終導致細胞反應的中繼網路。

## 受體分類

**細胞表面受體：**

1. **配體門控離子通道**——帶有配體活化閘門的大型跨膜蛋白。離子流本身就是訊號；這是最快速（微秒級）的受體，包括 [[NMDA receptor|NMDA]]、GABA-A、菸鹼型乙醯膽鹼與甘胺酸受體。大多數由物理刺激——壓力、溫度、光——活化的受體都屬於此類。
2. **G 蛋白偶聯受體**——七次跨膜蛋白。配體結合會造成構形改變，開啟細胞內的異三聚體 [[GTP|GTPase]]（[[GPCR]]-Gα-Gβγ），使後者以 [[GTP]] 交換 GDP 並解離。Gαs 刺激[[Adenylate Cyclase]]（使 cAMP 上升）；Gαi 抑制它；Gαq 活化[[Phospholipase C]]（產生 IP3 與 DAG）；Gα12/13 則向 Rho 家族 GTPase 傳遞訊號。這是哺乳動物中最大的受體超家族，也是約三分之一已核准藥物的標的。
3. **酵素偶聯受體**——具有胞外配體結構域與胞內催化結構域的跨膜蛋白。受體酪胺酸激酶（[[Receptor Tyrosine Kinases|RTKs]]），例如 [[EGFR]]、[[IGF1R]] 與 [[PDGFR]]，會在二聚化後進行自體磷酸化，並招募訊號蛋白到其磷酪胺酸殘基上；[[Cytokine]] 受體與[[Toll-like Receptor|toll-like receptors]] 則改為招募 [[JAK]]/[[STAT]] 或 [[NF-κB]] 機器。

**細胞內（核）受體：**脂溶性配體——類固醇荷爾蒙、[[Retinoic Acid]]、甲狀腺素、維生素 D——可擴散通過脂質雙層並結合於細胞質或細胞核受體，後者再轉位以直接調控基因轉錄。[[Thyroid Hormones|Thyroid hormone receptors]]是其中的典範。

> [!info] 放大作用是全部的重點
> 訊息傳遞的存在就是為了放大。少數被占位的受體就能產生大量第二訊使分子，而第二訊使又活化許多激酶分子，於是一個起始於少數幾個配體分子的訊號，變成整個細胞範圍的反應。
> 放大作用也正是路徑內建煞車的原因：磷酸酶、GTPase 活化蛋白、受體內吞，以及 [[SOCS3]] 之類的反向調節蛋白，都是為了讓反應變得短暫並設定其閾值。

## 細胞間訊號傳遞的模式

| 模式 | 範圍 | 例子 |
| --- | --- | --- |
| **自分泌（Autocrine）** | 同一細胞 | T 細胞對自身分泌的介白素-2 產生反應；[[SASP]] 作用於相鄰的衰老細胞 |
| **自內分泌（Intracrine）** | 同一細胞，胞內受體 | 荷爾蒙在分泌前作用於自身的核受體 |
| **鄰分泌（Juxtacrine）** | 直接接觸 | 相鄰細胞之間的 [[Notch]]–Delta；巨噬細胞上的 [[PD-L1]] 與 T 細胞上的 [[PD-1]] 結合 |
| **旁分泌（Paracrine）** | 鄰近細胞 | 生長因子、細胞激素、[[Prostaglandins]]；[[Paracrine Senescence]] |
| **內分泌（Endocrine）** | 遠端，經由血液 | 內分泌腺分泌的荷爾蒙 |

本知識庫中的 [[Paracrine Senescence]] 與 [[Metabolic Reprogramming|paracrine reprogramming]] 註記，是旁分泌模式的具體實例，而這兩者也是內分泌預設模式的有用反例。

## 下游效應器

除了離子通道之外，第二訊使的級聯最終以共價修飾收尾：蛋白質[[Phosphorylation]]（由[[Kinase|kinases]]催化，由磷酸酶對抗）、[[Ubiquitination]] 與蛋白質降解、甲基化與乙醯化，以及蛋白水解切割。因此訊號傳遞最終會匯聚到[[Proteasome]]、[[Nucleus]] 與[[Transcription Factor|transcription machinery]]上——這也是為什麼訊號傳遞級聯如此常以基因表現的終點來研究。

## 調節與終止

訊號會藉由以下方式終止：GTP 水解（Gα 次單元所固有者）、由 arrestin 介導的內吞所造成的受體去敏感化、磷酸酶介導的去磷酸化、反向調節蛋白（SOCS、[[SMAD7]]，以及各種誘導降解器的因子），以及第二訊使的裂解。訊號傳遞中為數可觀的「未被使用」的機制，其存在純粹是為了把一切關掉——而正是這個關閉開關的失效，造成了癌症中的構成性訊號傳遞。

## 動物之外

細胞訊號傳遞並非脊椎動物的發明：

- **細菌群體感應**——*Aliivibrio fischeri* 會隨濃度上升而產生自體誘導物，只有在族群數量足夠時才開啟發光。這是首次證明訊號傳遞是一種密度依賴行為，並且它在革蘭氏陽性菌與革蘭氏陰性菌、以及跨物種的情況下都能運作。
- **黏菌聚集**——*Dictyostelium* 細胞會對 cAMP 梯度產生反應，聚集形成多細胞的蛞蝓狀體與孢子體，是無神經系統下自體組織的主要模型。
- **植物**——使用植物荷爾蒙（auxin、cytokinin、ABA）、胜肽受體激酶系統，以及液壓與電訊號。本知識庫的[[_document_ - 2026_Mickky_salt-eustress-sunflower_BMC-Plant-Biol_ABSTRACT-STUB|salt eustress in sunflower]]來源就是植物端在壓力下進行訊號傳遞的例子。

## 訊號傳遞相關疾病

構成性活化：[[KRAS]] 與 [[BRAF]] 的活化突變、受體過度表現（[[HER2]]）、慢性發炎中的 [[NF-κB]] 活化，以及骨髓增殖性疾患中的 [[JAK-STAT Signaling|JAK2]] 突變。訊號喪失：[[Type 2 Diabetes]] 中的胰島素阻抗（[[Insulin Receptor]] 去敏感化）、先天性心臟病中受損的 [[TGF-beta Signaling Pathway|TGF-β]] 與 [[Notch]] 訊號傳遞，以及 [[Hippo Pathway]] 與 [[Wnt signaling|Wnt]] 軸的腫瘤抑制因子喪失。在本知識庫的老化脈絡中，提及最多的訊號傳遞節點是[[mTOR]]的營養感測軸、[[Integrated Stress Response]]、[[cGAS-STING Pathway]]，以及 [[Notch]]/Hes1 與 Hey2 發育程式。

## Documents

- [[BIG1]]
  - 酪蛋白激酶 2 的調節次單元；一個把膜受體連接到蛋白質組與壓力反應的訊號傳遞節點。
- [[Cell Membranes]]
  - 大多數受體、G 蛋白與第二訊使生成因子所在的物理隔室；膜脂質與蛋白質的組成本身就是一種訊號輸入。

## 連結

- [[Cell Membranes]] — 質膜是訊號的平台：它容納 GPCR、配體門控通道、酵素偶聯受體與脂質筏，而其脂質組成（膽固醇、鞘脂、PIP 各類）是受體運輸與第二訊使生成的閘門。
- [[BIG1]] — BIG1 是酪蛋白激酶 2 的調節性 β 次單元，該激酶具有構成性活性，會在訊號傳遞、轉錄與蛋白質穩定等範疇磷酸化受質。它位於受體訊號輸出與壓力反應的交會處，使其成為訊息傳遞與本知識庫老化模組之間的橋樑。
- [[Calcium]] — 鈣離子是第二訊使的原型：其濃度在細胞質中維持低濃度，而其暫時性的上升會編碼訊號身分（振幅、持續時間與頻率都攜帶資訊）。
- [[Notch]] — Notch 是典型的鄰分泌路徑——一側細胞的膜結合配體與相鄰細胞的受體結合，經切割後釋出胞內結構域作為訊號。它同時也是「兩個例外證明規則」中的例外之一：Notch 訊號傳遞是由配體流量與內吞速率調控，而非由典型的第二訊使調控。
- [[mTOR]] — 營養感測本身就是訊號傳遞：胺基酸、生長因子與能量狀態匯聚到 mTORC1，後者把營養可得性與蛋白質合成、自噬及代謝耦合在一起。它是本知識庫中連結最密集的訊號傳遞節點。
- [[Integrated Stress Response]] — 四種激酶（PERK、GCN2、HRI、ATF6）匯聚到 eIF2-alpha 磷酸化，造成蛋白質合成的全面轉移，並選擇性上調壓力反應 mRNA——一套建立在放大作用與共同效應器之上的訊號架構。
- [[Kinase]] — 激酶是主要的訊息傳遞酵素：它們安裝可逆的轉譯後標記（磷酸化），這些標記負責傳遞與終止訊號，也是細胞讀取為狀態的資訊。
- [[Phosphorylation]] — 磷酸化是主導性的可逆訊號標記，它區分活化性與抑制性修飾、創造結合位點，並因單一殘基可被不同效應器以不同方式解讀而使開關式行為成為可能。
- [[Transcription Factor]] — 大多數訊號傳遞級聯的最終輸出都是基因表現的改變，這也是訊號傳遞生物學主要在整體轉錄體實驗中研究的首要原因。
- [[STAT]] — STAT 蛋白是最精簡的訊號傳遞模組——一個直接被招募至已活化受體複合體上的轉錄因子——使細胞激素訊號傳遞從膜到核的追蹤格外容易。
- [[Hes1 and Hey2]] — Hes1 與 Hey2 是 Notch 在發育中心臟的轉錄輸出，說明單一路徑如何依賴細胞既有的轉錄因子組合而產生組織特異性效果。

## 連結摘要

- 新增連結：[[Calcium]]、[[Potassium]]、[[Prostaglandins]]、[[Insulin]]、[[Cyclic Adenosine Monophosphate]]、[[Cyclic Guanosine Monophosphate]]、[[Nitric Oxide]]、[[GTP]]、[[Adenylate Cyclase]]、[[Phospholipase C]]、[[Receptor Tyrosine Kinases]]、[[EGFR]]、[[IGF1R]]、[[PDGFR]]、[[JAK]]、[[STAT]]、[[NF-κB]]、[[Toll-like Receptor]]、[[NMDA receptor]]、[[Retinoic Acid]]、[[Thyroid Hormones]]、[[SOCS3]]、[[SMAD7]]、[[Ubiquitination]]、[[Proteasome]]、[[Kinase]]、[[Phosphorylation]]、[[Transcription Factor]]、[[Quorum sensing]]、[[Paracrine Senescence]]、[[Metabolic Reprogramming]]、[[mTOR]]、[[Integrated Stress Response]]、[[cGAS-STING Pathway]]、[[Wnt signaling]]、[[Hippo Pathway]]、[[JAK-STAT Signaling]]、[[Type 2 Diabetes]]、[[Insulin Receptor]]、[[TGF-beta Signaling Pathway]]、[[Notch]]
- 建議建立的新實體註記：[[GPCR]]、[[Ligand]]、[[Second Messenger]]、[[Cytokine]]、[[Hormone]]、[[Autocrine Signaling]]、[[Paracrine Signaling]]、[[Juxtacrine Signaling]]、[[Endocrine Signaling]]、[[Adenylate Cyclase]]、[[G Protein]]、[[Second Messenger System]]、[[Dictyostelium]]、[[Aliivibrio fischeri]]
- 應強化的重點連結：[[Cell Signaling]] ↔ [[Cell Membranes]]、[[Cell Signaling]] ↔ [[BIG1]]、[[Cell Signaling]] ↔ [[mTOR]]、[[Cell Signaling]] ↔ [[Notch]]
