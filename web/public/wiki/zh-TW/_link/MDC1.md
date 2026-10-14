---
title: MDC1
description: MDC1 是一種大型 BRCT 結構域支架蛋白質，能在 DNA 雙股斷裂處結合 γ-H2AX，並協調 RNF8／RNF168 介導的泛素訊號與下游修復因子的招募。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein, dna-repair, dna-damage-response, chromatin]
aliases: [Mediator of DNA damage checkpoint 1, MDC1/NFBD1, NFBD1]
---

# MDC1

**MDC1**（mediator of DNA damage checkpoint 1；歷史上稱為 **NFBD1**，即 nuclear factor binding to the DNA double-strand break factor MDC1/NFBD1）是[[DNA Damage|double-strand break]]反應的**支架蛋白質**。它不是酵素，也不是修復催化劑——它的功能是*讀取*斷裂，並*招募並放大*所有作用於斷裂的因子。MDC1 常被描述為雙股斷裂反應的組織原則，而這是個公允的總結。

## 結構域與染色質讀取器

MDC1 是一個 2089 aa（人類）的蛋白質，具有模組化架構：

- **N 端 Forkhead-associated（FHA）結構域與串聯的 BRCT 結構域**——兩者共同結合**磷酸化組蛋白 H2AX（Ser139，即[[γ-H2AX]]）**，這是 DSB 的主要染色質標記。BRCT 結構域辨識 phospho-Ser139，並將一個 Arg／Lys 側鏈插入磷酸絲胺酸的口袋；FHA 結構域則形成第二個協同交互作用。正是這個串聯讀取器在物理上將 MDC1 繫於斷裂兩側的染色質。
- **脯胺酸富集區**——無序、富含磷酸化，且是許多 DNA 損傷誘導磷酸位點（Tyr1338、Ser1941、Thr1949）的所在，作為下游因子的停靠平台。
- **C 端串聯 BRCT 結構域**——結合[[DNA]]末端、[[KAP1]]與[[53BP1]]；也參與同源二聚化。
- 散在於 C 端的 **MDC1 結合基序**，包括 PP4 磷酸酶結合位點與[[RNF8]]招募區。

> [!info] 兩步驟招募模型
> MDC1 的標準負載機制是在 2003 年 Goldberg／Huen 的原始論文中確立的：MDC1 先透過其 **FHA 結構域結合未磷酸化的 H2AX**，與染色質鬆散結合，這使 BRCT 結構域就定位；隨後由 ATM／ATR 驅動的局部 H2AX Ser139 磷酸化，**將最初的弱交互作用轉為穩定交互作用**，把 MDC1 困在斷裂處。這種「先導」機制意味著 MDC1 會專一性地累積在已磷酸化——也就是真正受損的——染色質上，而非累積在任何雙股 DNA 上。

## 放大級聯

> [!info] MDC1 讓一個修飾變成千千萬萬
> 本資料庫將 MDC1 連結到[[ATM]]、[[53BP1]]、[[H2A.X]]與[[γ-H2AX]]的核心原因，就在於 MDC1 *就是*把它們連起來的節點。級聯如下：
>
> 1. **[[ATM]]／ATR 磷酸化 H2AX Ser139** → [[γ-H2AX]]擴散至斷裂周圍千鹼基尺度的染色質。
> 2. **MDC1 透過 BRCT 結合 γ-H2AX** 並被負載（見上）。
> 3. **MDC1 招募[[PARP1]]** 並將其活化；PARP1 對自身進行單 ADP-核糖基化並生成 PAR（見[[MARylation]]），進而招募更多讀取器並在局部使染色質鬆弛。
> 4. **MDC1 招募[[RNF8]]**，後者與[[RNF168]]共同將周圍染色質泛素化。**[[RNF4]]**——這個以 SUMO 為標的 E3 連接酶——是放行此步驟的必要條件：MDC1 會被 SUMO 化，而被 SUMO 化的 MDC1 招募 RNF4，後者解除否則會阻擋 RNF8 接近的染色質緊密壓縮。
> 5. **53BP1 與[[BRCA1]]被招募至經 RNF8／RNF168 修飾的染色質上。** RNF168 直接泛素化 53BP1（K63 連結型），這既穩定其滞留，也解除其對[[Topoisomerase II|topoisomerase IIα]]與[[Shieldin|shieldin]]依賴的末端保護。MDC1 也會被 SUMO 化，以招募[[SET7/9|KMT5A]]與[[KDM5|KDM4A]]進行染色質鬆弛，而[[RNF4]]／[[KDM4A]]依賴的 I 類 HDAC[[HDAC1]]／[[HDAC2]]共抑制複合體降解則釋放轉錄。
> 6. **細胞週期檢查點**（S／G2 與 G2／M）是由 ATM／Chk2 分支獨立執行，不依賴泛素化級聯——這正是「mediator of DNA damage *checkpoint* 1」對一個支架蛋白質而言是個略為奇怪的名稱的原因：MDC1 對 S 期與 G2／M 的檢查點執行都是必要的，但這是藉由招募檢查點介在因子，而非以酵素方式自行執行停滯。

此架構的功能後果就是**「放大開關」**：單一斷裂，僅由一次 H2AX 磷酸化事件標記，就能招募一個任意大的訊號平台與龐大的修復人力，因此反應是一個開關而非線性滴定。

## 路徑選擇

MDC1 在兩條 DSB 修復路徑之間並非中立——它是決策中的主動參與者：

- **53BP1 對切除的拮抗。** MDC1 招募 53BP1，後者再招募 **shieldin** 複合體（53BP1、REV7／MAD2L2、SHLD1、SHLD2、SHLD3、CTIF／CTIP 交互作用因子），阻斷斷裂末端的切除。這有利於[[Non-homologous End Joining]]。
- **在 BRCA1 缺乏細胞中的拮抗。** [[BRCA1]]／[[BARD1]]抵銷 53BP1 的作用：[[BARD1]]促進 53BP1 的泛素化與降解，而 BRCA1 阻斷 53BP1 的招募並抑制 shieldin，容許切除發生並進行[[Homologous Recombination]]。具有 **53BP1 或 shieldin 喪失**的細胞可救援 BRCA1 缺乏細胞的 HR 缺陷——正是這種合成致死的邏輯，讓 53BP1–BRCA1 軸成為治療標的。
- [[Glioma]]中的拮抗——在多形性膠質母細胞瘤中，53BP1 喪失可在 IDH 突變、MGMT 甲基化的腫瘤中恢復 HR 並使其對[[PARP Inhibitor|PARP inhibitors]]敏感；相反地，在 IDH 野生型 GBM 中，53BP1 喪失反而賦予 PARPi *抗藥性*。這是過去幾年臨床後果最為顯著的 DSB 路徑發現之一，也是路徑選擇具有情境依賴性的良好例證。

## 其他值得知道的結合夥伴

- **[[Topoisomerase IIα]]** 與 **[[Ku70]]**（連同[[Ku80]]）——MDC1 將 DSB 同時連結到依賴拓撲異構酶 II 的染色體橋／去纏結，以及依賴[[Ku]]的末端加工。
- **[[NBS1]]／[[MRN complex]]**——MDC1 既是 MRN 複合體的招募對象，也會招募它；該複合體負責感知斷裂本身，這種交互作用是雙向的並構成前饋迴路。
- **[[Optineurin]]、[[USP28]]、[[RNF8]]、[[TRRAP]]**——更多的泛素與染色質機器。
- **[[Chk2]]** 與 **[[Chk1]]**——檢查點分支。
- **[[ATM]]**——除了其上游磷酸化角色之外，ATM 也會磷酸化 MDC1 本身。

## 臨床關聯

> [!warning] 兩個方向的臨床重要性
> **MDC1 作為依賴關係。** MDC1 對 HR 缺乏腫瘤細胞的存活是必要的，*但僅限於 HR 具功能的背景*——也就是說 MDC1 並非普遍的合成致死夥伴。MDC1 喪失會使 HR 具功能的[[BRCA1]]／[[BRCA2]]突變細胞對[[Cisplatin]]與 PARP 抑制劑敏感，且已在患者來源異種移植模型中獲得驗證。這是一個真實但適用範圍狹窄的依賴關係，而其適用性取決於腫瘤的 HR 狀態。
>
> **MDC1 作為腫瘤抑制因子。** MDC1 缺乏的小鼠易發生癌症，且 MDC1 喪失會加速淋巴瘤發生，這與 MDC1 在基因體穩定與檢查點執行中的角色一致。
>
> **人類的癌症風險。** 罕見的 MDC1 雙等位基因變異會造成 **Nijmegen breakage syndrome-like** 免疫缺陷，合併免疫缺陷、放射敏感性、生長遲緩與染色體不穩定——這是 DSB 修復障礙的疾病譜，其中也包含[[Nijmegen Breakage Syndrome]]與[[Ataxia Telangiectasia]]。

> [!warning] 證據的保留
> - RNF4 → RNF8 這一步在細胞與小鼠中已確立良好，但斷裂處**每一項**染色質修飾的完整排序——哪一個是[[SUMO]]化、哪一種[[Ubiquitin|ubiquitylation]]連結、依循什麼順序——仍在修訂之中，不同實驗室的流程在邊界處並不一致。
> - MDC1 是一種大型無序蛋白質，其脯胺酸富集區有很大一部分本質上是無序的；其絕大多數殘基的結構／功能歸屬都尚未確立。關於特定 MDC1 磷酸位點的主張，應被視為支持程度不一的位點專一性主張。

## Documents

提及此實體的文件清單

- [[53BP1]] — 最顯眼的 MDC1 招募因子；53BP1–BRCA1 的拮抗是 MDC1 影響修復路徑選擇的功能性原因，而本註記提供了其中的招募機制。
- [[ATM]] — 磷酸化 H2AX 以製造 MDC1 所讀取之 γ-H2AX 平台的激酶；MDC1 位於同一級聯的下游，本身也是 ATM 的受質。
- [[DNA Damage]] — MDC1 作為組織節點所嵌入的整體框架（偵測、訊號、檢查點、修復）。
- [[H2A.X]] — 其磷酸化是 MDC1 負載前提條件的組蛋白受質，讓 BRCT 讀取器有東西可結合。
- [[γ-H2AX]] — MDC1 直接結合的磷酸型態，也是用於定位損傷的可量化 DSB 標記。

## 連結

- [[γ-H2AX]] — MDC1 的 N 端 BRCT 結構域辨識 H2AX 上的 pSer139；這一個交互作用就是 MDC1 定位的物理基礎，兩者耦合得如此緊密，以至於常被當成一個整體來討論。
- [[H2A.X]] — 提供磷酸化表位的基因產物；「先由 FHA、再由 BRCT」的負載模型，是一個關於 H2AX 磷酸化狀態如何閘控 MDC1 佔據的直接機制性主張。
- [[ATM]] — 創造 γ-H2AX 並磷酸化 MDC1 本身的上游激酶；ATM → γ-H2AX → MDC1 → RNF8／RNF168 的階層順序，是 DDR 中被引用最多的路徑排序。
- [[53BP1]] — 被招募至經 MDC1 修飾的染色質；是 MDC1 影響末端切除與路徑選擇的效應因子，也是[[BRCA1]]的對手方。
- [[DNA Damage]] — MDC1 是把一個被磷酸化的斷裂組蛋白轉換成龐大修復平台的放大節點。
- [[DNA Repair]] — 總括性註記；MDC1 協調[[Non-homologous End Joining]]與[[Homologous Recombination]]之間的選擇與執行。
- [[Non-homologous End Joining]] — 當 MDC1 招募的 53BP1 與 shieldin 保護 DNA 末端免於切除時有利於此路徑。
- [[Homologous Recombination]] — 當 53BP1 分支被抵銷（主要藉由[[BRCA1]]／BARD1）時有利於此路徑。
- [[BRCA1]] — 與 53BP1 在功能上互相拮抗，因此透過 MDC1 招募 53BP1，也與 MDC1 本身拮抗；這是 53BP1 喪失之救援與 PARPi 敏感化兩項發現的基礎。
- [[Ubiquitin]] 與 [[RNF8]]／[[RNF168]] — MDC1 藉由招募 RNF8 並放行 RNF4 依賴的染色質去壓縮所啟動的泛素化級聯。
- [[SUMO]] — MDC1 會被 SUMO 化，而正是這種 SUMO 化招募 RNF4，使 RNF8 得以接近；在同一位置，SUMO 步驟先於泛素步驟。
- [[NBS1]] 與 [[MRN complex]] — MDC1 與 MRN 斷裂感知複合體之間的相互招募形成前饋迴路。
- [[Chromatin Remodeling]] — MDC1 的泛素化級聯也會使染色質鬆弛並去壓縮，招募 HDAC 與 H3K9 甲基轉移酶活性，因此修復是與局部染色質狀態協同進行的。
- [[Optineurin]] — 一個與 MDC1 交互作用的轉接蛋白，將 DSB 反應連結到自噬與運輸，使本註記與本資料庫的自噬文獻相連。
- [[PARP1]] 與 [[MARylation]] — MDC1 在斷裂處招募並活化 PARP1，這是反應中 ADP-核糖基化分支的入口。
- [[Cisplatin]] — MDC1 喪失使 HR 具功能的 BRCA 突變細胞對鉑類藥劑敏感，是已確立的合成致死關係之一。
- [[Glioma]] — 53BP1 喪失可在多形性膠質母細胞瘤中恢復 HR 並決定對 PARP 抑制劑的敏感性，使 MDC1–53BP1 分支在腦腫瘤中具臨床可操作性。
- [[Topoisomerase IIα]] 與 [[Ku70]] — MDC1 將 DSB 連結到依賴拓撲異構酶 II 的染色質通過，以及 Ku 介導的末端加工。

## 連結摘要

- 新增連結：[[DNA Damage]]、[[DNA Repair]]、[[PARP1]]、[[MARylation]]、[[RNF8]]、[[RNF168]]、[[RNF4]]、[[SET7/9]]、[[KDM4A]]、[[BRCA1]]、[[HDAC1]]、[[HDAC2]]、[[Non-homologous End Joining]]、[[Homologous Recombination]]、[[Optineurin]]、[[USP28]]、[[TRRAP]]、[[SUMO]]、[[Ubiquitin]]、[[Shieldin]]、[[Topoisomerase IIα]]、[[Ku70]]、[[Ku80]]、[[NBS1]]、[[MRN complex]]、[[Chk1]]、[[Chk2]]、[[Nijmegen Breakage Syndrome]]、[[Ataxia Telangiectasia]]、[[Cisplatin]]、[[Glioma]]、[[PARP Inhibitor]]、[[Topoisomerase IIα]]
- 建議建立的新實體註記：[[RNF8]]、[[RNF4]]、[[Shieldin]]、[[SET7/9]]、[[KDM4A]]、[[KDM5]]、[[MRN Complex]]、[[Ku80]]、[[Topoisomerase IIα]]、[[USP28]]、[[TRRAP]]、[[BARD1]]、[[MAD2L2]]、[[Nijmegen Breakage Syndrome-Like Immunodeficiency]]、[[Nijmegen Breakage Syndrome]]、[[Ataxia Telangiectasia]]、[[HDAC2]]、[[PARP Inhibitor]]——因已存在而移除：CHK1、CHK2、CtIP、Glioma、HDAC1、Ku70、NBS1、RNF168、[[Ku]]、[[Topoisomerase II]]
- 應強化的重點連結：[[MDC1]] ↔ [[γ-H2AX]]、[[MDC1]] ↔ [[53BP1]]、[[MDC1]] ↔ [[ATM]]、[[MDC1]] ↔ [[DNA Damage]]
