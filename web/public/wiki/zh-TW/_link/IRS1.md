---
title: IRS1
description: 'IRS1（胰島素受質 1）是一個長達 1242 個殘基的細胞質訊號支架，具有 PH 結構域、PTB 結構域，以及帶有數十個磷酪胺酸與磷絲胺酸基序的大型無序尾部。它將胰島素與 IGF1R 訊號傳遞至 PI3K-AKT-mTOR 與 RAS-MAPK，而其受 S6K 磷酸化絲胺酸則是營養誘導之胰島素阻抗的經典機制。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - insulin
  - mtor
  - insulin-resistance
aliases: [Insulin Receptor Substrate 1, IRS-1, IRS1_HUMAN]
---

# IRS1

## 概觀

IRS1 既不是酵素也不是受體。它是一個**停靠支架**：一個大型、
大致無序的細胞質蛋白質，其唯一任務就是被[[Insulin Receptor|INSR]]與[[IGF1R]]磷酸化，
然後組裝出將訊號繼續往下傳遞的 SH2 結構域蛋白。胰島素幾乎
所有的代謝作用都經由 IRS1 → PI3K → [[Akt]]，而胰島素阻抗幾乎
所有的病理現象都經由 IRS1 自身的絲胺酸磷酸化。

人類 IRS1 為 1242 個殘基（UniProt P35568）；小鼠 IRS1 為 1244 個。

## 結構與結構域

- **PH 結構域**（殘基約 12–115）——一個 N 端pleckstrin 同源
  結構域。其最確立的角色是*負面*的：它與支架蛋白
  **PHIP** 的 PH 結構域結合，且 IRS1 招募至質膜以及 IRS1 之所以能發揮
  功能，都需要它。IRS1 亦可在缺乏胰島素時與 **DGKZ** 及 **PIP5K1A**
  形成三元複合體；胰島素刺激會減少此 DGKZ 交互作用。
- **IRS 型 PTB 結構域**（殘基約 160–264）——結合酪胺酸磷酸化之
  [[Insulin Receptor|胰島素受體]]與[[IGF1R]]的 **NPXY 基序**。
  鄰近的 **YXXM 基序**則是[[PI3K]]之 p85 調節次單元的結合位點。
- **大型無序 C 端尾部**（殘基約 265–1242）——IRS1 的個性就在此。
  它含有許多 YXXM 與 YXXΦ 基序（YXXM 直接結合
  p85/PI3K；其他磷酪胺酸則招募 GRB2，而 Tyr896 為
  GRB2 結合所必需），以及數十個作為抑制性磷酸化開關的絲胺酸位點。
  由於大致無序，IRS1 在極小的蛋白質中擁有巨大的組合容量——
  這同時是它的優勢，也是它成為矛盾文獻如此豐富來源的原因。
- **沒有催化結構域，也沒有跨膜區段。**IRS1 完全位於
  細胞質中，而其細胞內定位（細胞質 vs 細胞核）
  與從增殖轉向軟骨生成的分化相關聯。

## 作用機制

1. **受體接合。**與配體結合的 INSR 或 IGF1R 會自體磷酸化其
   NPXY 基序；IRS1 的 PTB 即停靠於此。
2. **酪胺酸磷酸化。**受體激酶磷酸化 IRS1
   尾部的酪胺酸；被磷酸化的 YXXM 基序隨即招募 PI3K 的 p85
   次單元、GRB2（經由 Tyr896）、NCK1、NCK2 與 SHP2。
3. **PI3K–AKT。**PI3K 在質膜上生成 PIP3；AKT 隨後
   被招募並活化。AKT 繼而：活化[[mTORC1]]並因此促進蛋白質
   合成；磷酸化並使[[Bad]]失活以促進存活；
   磷酸化並抑制 GSK3（後者驅動肝醣合成）；以及
   磷酸化[[FoxO1]]，抑制糖質新生。因此 IRS1–AKT–FoxO1
   同時*促進*周邊葡萄糖攝取並*抑制*肝臟葡萄糖輸出。
4. **RAS–MAPK。**IRS1 磷酸化招募 GRB2，後者活化 GEF
   **SOS1**，觸發 RAS → RAF → MEK → ERK，調控基因表現
   並與 PI3K 協同促進生長與分化。
5. **Wnt/β-catenin。**IRS1 是 Wnt/β-catenin
   訊號的*正向*調節因子，機制是抑制 DVL2 的自噬性降解——這是一項
   非經典、且不依賴 IRS1 磷酸化的功能。
6. **蛋白質合成與轉譯。**IRS1 亦能不依賴上述途徑而調節
   轉譯起始機器，且 IRS1 本身也是 PKR/EIF2AK2 與 ALK 的受質。

## 調節與降解——胰島素阻抗的節點

> [!important] IRS1 的絲胺酸磷酸化是教科書式的
> S6K 依賴性負回饋迴路
> - **S6K 回饋。**[[mTORC1]]活化[[S6K1]]/S6K2（p70S6K），後者
>   在 **Ser270、Ser636 與 Ser1101**（小鼠編號）磷酸化 IRS1，
>   誘導 IRS1 加速降解。mTORC1 → S6K → IRS1
>   的負回饋迴路對代謝疾病與腫瘤生成都具有深遠影響，
>   因為保護細胞免於過度生長的同一個迴路，
>   也會削弱胰島素訊號。
> - **位點專一性抑制。**Ser307、Ser312、Ser315 與 Ser323
>   的磷酸化**透過破壞 IRS1 與 INSR 的交互作用來抑制胰島素作用**——
>   也就是說，這些抑制位點的作用方式是將 IRS1 與受體實體解偶聯，
>   而不只是降解 IRS1。
> - **CUL7 介導的 mTOR 依賴性降解。****CUL7–RBF–FBW8**
>   泛素連接酶複合體以 mTOR 與 S6K 依賴性的方式將 IRS1
>   指向泛素依賴性降解，並在 S6K 磷酸化*之後*才與 IRS1 結合。
>   Cul7−/− 胚胎纖維母細胞會累積 IRS1
>   並顯示下游 AKT 與 MEK/ERK 活化增加，卻生長不佳，
>   且出現類似致癌基因誘導衰老的表型——
>   提醒我們移除一個負調節因子並不會單純讓你獲得更多
>   生長。
> - **Tensin 介導的去磷酸化。**在合成代謝條件下的骨骼肌中，
>   **tensin-2（TNS2）** 會在 **Tyr612** 對 IRS1 去磷酸化，
>   從而觸發 IRS1 的蛋白酶體降解。
> - **其他降解途徑。**IRS1 由 **TRAF4** 透過
>   Lys-29 連結泛素化；此機制調控 IGF1 刺激下 IRS1 與 IGF1R 的交互作用
>   以及 IRS1 的酪胺酸磷酸化。
> - **S-亞硝基化。**IRS1 被 **BLVRB** S-亞硝基化會抑制其
>   活性——這是一種氧化還原敏感的調控輸入。

## 疾病關聯

- **第二型糖尿病。**UniProt 將 *IRS1* 列為可能參與
  T2D 致病機轉（MIM 125853）——是*多因子疾病的促成因子*，
  而非孟德爾式疾病基因。
- **Arg971 多型性。**一種常見的 IRS1 變異（Arg971）會降低 IRS1
  磷酸化，並在某些情境下讓 IRS1 充當 PI3K 的*抑制因子*，
  造成全面性的胰島素阻抗。它與體內胰島素阻抗相關聯，
  也與第二型糖尿病中促成動脈粥狀硬化性心血管疾病風險的一群
  胰島素阻抗相關代謝異常相關聯。在機制上，帶因者的 IRS1/PI3K/PDPK1/AKT1
  訊號受損，伴隨胰島素刺激下的內皮一氧化氮釋放減少——
  這是內皮功能失調的一項候選機制。
- **肝臟與支鏈胺基酸。**代謝功能失調相關脂肪性肝病中的
  肝臟胰島素阻抗與脂肪變性，以及支鏈胺基酸對胰島素阻抗的效應，
  都是以 IRS1 絲胺酸磷酸化狀態作為標準讀出的領域。
- **致癌。**IRS1 位於營養失調的 PI3K/AKT/mTOR 軸
  與生長因子訊號的交會處，因此其降解在某些情境下是腫瘤抑制事件
  （CUL7 喪失），而其持續存在則在另一些情境下具有促存活作用。
  這種雙重角色使 IRS1 成為一個很好的例子，說明為何單憑路徑歸屬
  並不足以預測一個蛋白質是否具有致癌性。

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — 胰島素結合其受體會促進 INSR 酪胺酸激酶活性、IRS1 的招募、經由 PI3K 活化產生 PIP3，以及 AKT 在質膜上的招募；mTORC1 在 PI3K 上游強烈抑制 PI3K–AKT 軸，而 mTORC1 活化 S6K1 會促進 IRS1 磷酸化並降低其穩定性——即 S6K1 依賴性的負回饋迴路，對代謝疾病與腫瘤生成具有影響。
- [[_document_ - biochemical_basis_hormesis_2026.04.20.719646v1.full|The Biochemical Basis of Hormesis]] — 將 IRS1 定位為由胰島素活化、並被 S6K（SK61_2）磷酸化所失活的上游 Input 節點，同時也是非一致性雙價基序之 mTORC1→IRS1 反向連結的下游終點，該基序的飽和酵素區正是產生 rapamycin hormesis 的來源。

## Connections

- [[Insulin Receptor|胰島素受體]] — 主要的受體激酶；IRS1 的 PTB 結構域結合受體的 NPXY 基序，而抑制性絲胺酸磷酸化（Ser307/312/315/323）正是透過破壞這一交互作用而發揮功能。
- [[IGF1R]] — 磷酸化 IRS1 的第二個受體；IRS1 是讓胰島素軸與 IGF 軸匯流至 PI3K 與 MAPK 的共同受質。
- [[PI3K]] — IRS1 被磷酸化的 YXXM 基序招募其 p85 調節次單元，生成 PIP3 並招募 AKT；這是承載胰島素幾乎所有代謝效應的步驟。
- [[Akt]] — IRS1 驅動的 PI3K 的直接效應器；活化[[mTORC1]]、使[[Bad]]失活、抑制 GSK3，並磷酸化[[FoxO1]]以抑制糖質新生。
- [[mTORC1]] — 回饋節點：mTORC1 活化 S6K，S6K 磷酸化並使 IRS1 去穩定化，而 mTORC1 亦在 PI3K 上游反向作用於 PI3K–AKT 軸，形成有文獻記載的雙重負回饋架構。
- [[S6K1]] — 在 Ser270/636/1101 磷酸化 IRS1 並觸發其加速降解的激酶；是 S6K 依賴性負回饋迴路的機制核心。
- [[SK61_2]] — S6K2 的旁系同源蛋白，在 hormesis 模型中被指認為使 IRS1 失活、進而閉合 mTORC1→IRS1 反向連結的磷酸酶－激酶。
- [[Insulin Signaling|胰島素訊號]] — IRS1 是使 IRS1 成為經典胰島素訊號實體、而非眾多路徑之一的那個節點。
- [[Insulin Resistance|胰島素阻抗]] — IRS1 的絲胺酸磷酸化是其經典分子機制；S6K 回饋迴路正是慢性養分過量造成胰島素阻抗的原因。
- [[Type 2 Diabetes|第二型糖尿病]] — IRS1 絲胺酸過度磷酸化，以及 Arg971 變異與胰島素阻抗和心血管風險相關聯的臨床終點。
- [[Insulin Sensitivity|胰島素敏感度]] — IRS1 磷酸化狀態所支配、且[[Fasting|禁食]]與熱量限制可改善的功能性讀出。
- [[Incoherent Bivalent Motif|非一致性雙價基序]] — 在 hormesis 網絡模型中，IRS1 是 Input 節點，也是 mTORC1→IRS1 反向連結的終點，其飽和產生 rapamycin hormesis。
- [[Saturated Enzymatic Regime|飽和酵素區]] 與 [[Biphasic Dose-Response Curve|雙相劑量反應曲線]] — 該模型中賦予 mTORC1/S6K/IRS1 軸的區態與曲線型態。
- [[Autophagy Inducer|自噬誘導物]] — 熱量限制與間歇性[[Fasting|禁食]]降低胰島素／IGF 訊號，解除 mTORC1，進而恢復自噬並改善 IRS1 訊號。
- [[Wnt]] 與 [[β-Catenin]] — IRS1 藉由抑制 DVL2 的自噬性降解而正向調節 Wnt/β-catenin，這是一項不依賴其磷酸化狀態的非經典功能。

## Linking Summary

- 新增連結：[[Insulin Receptor|胰島素受體]]、[[IGF1R]]、[[PI3K]]、[[Akt]]、[[mTORC1]]、[[S6K1]]、[[SK61_2]]、[[Insulin Signaling|胰島素訊號]]、[[Insulin Resistance|胰島素阻抗]]、[[Insulin Sensitivity|胰島素敏感度]]、[[Type 2 Diabetes|第二型糖尿病]]、[[Incoherent Bivalent Motif|非一致性雙價基序]]、[[Saturated Enzymatic Regime|飽和酵素區]]、[[Biphasic Dose-Response Curve|雙相劑量反應曲線]]、[[Autophagy Inducer|自噬誘導物]]、[[Wnt]]、[[β-Catenin]]、[[Bad]]、[[FoxO1]]、[[Fasting|禁食]]
- 建議建立的新實體註記：[[IRS1]]、[[IRS-type PTB domain]]、[[Plecksrtrin homology domain]]、[[PHIP]]、[[DGKZ]]、[[PIP5K1A]]、[[SOS1]]、[[GRB2]]、[[SHC]]、[[NCK1]]、[[SHP2]]、[[PTPN11]]、[[DVL2]]、[[Tensin-2]]、[[TNS2]]、[[CUL7]]、[[FBW8]]、[[RBF]]、[[Skp1]]、[[TRAF4]]、[[BLVRB]]、[[S-nitrosylation]]、[[Serine 307]]、[[Serine 636]]、[[Serine 1101]]、[[Arg971]]、[[Nitric oxide]]、[[Gluconeogenesis]]、[[Glycogen synthesis]]、[[FOXO1]]、[[Insulin receptor substrate family]]、[[IRS1–4]]
- 應強化的連結：[[IRS1]] ↔ [[S6K1]] ↔ [[mTORC1]]、[[IRS1]] ↔ [[PI3K]] ↔ [[Akt]]、[[IRS1]] ↔ [[Insulin Resistance|胰島素阻抗]]