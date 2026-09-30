---
title: MET
description: MET 是編碼 c-Met 的基因，c-Met 即肝細胞生長因子受體酪胺酸激酶，是一個原致癌基因，同時也是胃癌、肺癌與肝癌的治療標的。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [gene, receptor, oncogene, signal-transduction]
aliases: [c-Met, c-MET, MET proto-oncogene, HGF receptor, hepatocyte growth factor receptor, MNNGHOS]
---

# MET（間質表皮細胞生長因子受體）

**MET** 是編碼 **c-Met**（又稱 c-MET、HGFR、MNNGHOS）的人類基因；c-Met 是[[Hepatocyte Growth Factor|HGF]]的受體酪胺酸激酶。MET 最初是從一條經致癌物處理的骨肉瘤細胞系（MNNG-HOS）中分離出來的轉型致癌基因，名稱即源自此處。它是一個**原致癌基因**，而 HGF/MET 軸則是人類癌症中最持續地被活化的受體酪胺酸激酶路徑之一。

## 蛋白質結構

c-Met 是一個長 1390 個胺基酸、單次穿膜的 I 型受體：

- **Semaphorin（Sema）結構域**（N 端、胞外）——結合 **SEMA3C** 與其他 semaphorin，並透過 **[[RON|MSPRY2]] 相鄰位點**結合 [[Stromelysin|MMP1]]／[[ADAM]] 家族蛋白酶的**整合素結合區域**，藉此調節受體的脫落與活化。
- **PSI（plexin、semaphorin、integrin）結構域**——受體二聚化所必需。
- **IPT（immunoglobulin、plexin、transcription）重複序列**——三個胞外 Ig 樣結構域。
- **近膜區（juxtamembrane region）**，帶有一個**可結合 CBL 的酪胺酸**（Tyr985 相鄰的 CBL 位點、CBL-β），是向下調節的節點。
- **酪胺酸激酶結構域**——催化結構域，含有活化環與「DFG-in/out」開關。

另一種特異的**剪切酶（sheddase）** ADAM10 會釋出胞外結構域；這種切割是 HGF 驅動訊號完整且高效運作所必需的，而由非 HGF 配體引發的、不依賴蛋白酶的活化方式也已有報導。

## 活化

> [!info] HGF 以不活化的單鏈形式分泌，並經蛋白水解而活化
> HGF 先以 **pro-HGF（HGF/MNK1）**的形式製造，是一種單鏈、不活化的前驅物，必須由絲胺酸蛋白酶 **HGF 活化酶（HGFAC）**及相關蛋白酶（matriptase、hepsin、血漿激肽釋放酶）在**胞外基質**中於 **Arg** 殘基處加工才能活化。加工後的 HGF 是由**α 鏈與 β 鏈**以**雙硫鍵**相連的異二聚體，β 鏈負責與 Sema 結構域結合。HGF 結合會使**受體二聚化**，進而活化激酶。

關鍵的藥理學觀點：由於 HGF 是主要且唯一有效的配體，**HGF 必須以不活化形式分泌，並需經胞外蛋白水解才能呈現給 MET**。這個「蛋白水解悖論」正是抗 HGF 抗體與抗 MET 抗體無法互相取代的原因，也是兩者合併試驗的依據。

**二聚化 → 每個單體的 C 端酪胺酸（Tyr1230）自體磷酸化**，再反式自體磷酸化活化環（Tyr1233、Tyr1234、Tyr1235）。C 端尾部提供 SH2 結構域蛋白的停泊位點，由它們組裝出訊號複合體。

## 下游訊號

- **GAB1 → [[RAS]]／[[RAF]]／[[MEK]]／[[ERK]]（[[MAPK]]）**——促進增殖，並透過 ERK 調節[[Cell Cycle]]。
- **GAB1／[[PI3K]] → [[Akt]] → [[mTOR]]**——存活、生長、[[EMT|epithelial–mesenchymal transition]]與對凋亡的抗性。
- **GAB1／PLCγ → [[Calcium Ions|calcium]]／[[Protein Kinase C|PKC]]**——[[Cytoskeleton]]重塑與運動性。
- **STAT3**——可直接參與，亦可經由[[JAK]]；將 MET 與包括 [[IL-6]]／[[gp130]] 軸交互作用在內的轉錄方案連結起來。
- **[[SRC]]**——在細胞骨架訊號上與 MET 協同作用。
- **CRMP2／CRMP1／CRMP4 與 [[TANKYRASE]] 連結的 [[HSP90β]] 支架**——已有文獻記載的 lapatinib 抗藥性機制之一，係經由 HGF/MET → CRMP2 → [[CRMP1]] → **SEMA3C** 軸運作，恢復運動性並賦予對 HER2 阻斷的抗性。
- **CBL**——結合近膜區的磷酸酪胺酸徵召[[CBL-B]]／CBL-β，後者使 MET 泛素化以進行內吞與降解。CBL 功能喪失是造成 MET 持續性活化的常見途徑。

## 正常生理

MET 在上皮細胞表現，且為**胚胎發育**所必需——Met 敲除小鼠在子宮內即因胎盤與肝臟缺陷而死亡。它驅動：

- **肝臟再生**——「HGF 是部分肝切除後肝臟再生的主要驅動因子」這一主張有充分的證據支持，且在相當程度上由肝細胞上的 MET 所介導。
- **傷口癒合與組織修復**，經由傷口邊緣的[[Angiogenesis]]與[[Epithelial-Mesenchymal Transition]]。
- **細胞運動性與形態發生**——也就是 HGF「分散因子（scatter factor）」活性，即最初的觀察。
- **幹細胞與前驅細胞生物學**——MET 是肝、肺與胰臟前驅細胞的標記與調節因子。

## 癌症生物學

> [!info] 四種不同的活化機制，各自具有不同的自然史
> MET 致癌並非單一現象：
>
> 1. **MET 擴增**——高層級的局部擴增（例如胃癌中 7q31 的 *MET*，與 7q21 的 [[ERBB2|HER2]] 共同擴增）會驅動受體過度活化；在肺癌中，則促成對 EGFR TKI 的獲得性抗性。*MET* 的拷貝數增加是對[[EGFR]]抑制劑產生抗性的特異性生物標記。
> 2. **MET 外顯子 14 跳讀**——一類特定的 MET 激酶結構域突變（外顯子 14 缺失，其中含有 CBL 結合位點，因而使降解受阻），在肺癌中形成一種特定且對藥物敏感的腫瘤型別——這也是已核准 MET 外顯子 14 抑制劑（capmatinib、tepotinib、savolitinib）的基礎。
> 3. **HGF 自分泌／旁分泌迴路**——腫瘤或基質的 HGF 過度表現，活化腫瘤細胞上的 MET；在胃癌與食道癌中更為相關，也是 MET 抑制劑原發性抗藥性的候選解釋。
> 4. **其他配體與受體結合**——[[RON]] 由 [[MSPRY2]]／[[HGF]] 以及 [[CD44]] 活化，[[HGFR]] 形成異二聚體，以及整合素介導的 [[CD44]] 聚集。

**與腫瘤型別的關聯。** MET 在胃癌（常與[[HER2]]一同擴增）、膠質母細胞瘤、肝細胞癌，以及部分[[Colorectal Cancer|大腸]]癌、食道癌與[[Breast Cancer|乳癌]]中會被擴增；它也反覆地在[[NSCLC|非小細胞肺癌]]中作為抗藥性機制而被活化。**c-Met 在膠質母細胞瘤中也過度表現，並透過 [[HSP90β]] 伴護蛋白軸驅動侵襲。**[[Gastric Cancer]]是 MET 最穩定地作為 HER2 共同驅動因子的腫瘤型別，也是 MET 擴增作為 HER2 導向治療抗藥性最為確立的機制所在——這是本知識庫中最清晰的 [[MET]] ↔ [[HER2]] 連結。

## 治療

- **Ib 型 MET 抑制劑**（capmatinib、tepotinib、savolitinib）——已核准用於 **MET 外顯子 14 跳讀**的非小細胞肺癌。
- **IIa 型抑制劑**（crizotinib 及其同類藥物）——已核准用於 [[ALCL]] 以及 PDGFRA 或 ROS1 重排腫瘤，MET 活性則為次要的作用依據。
- **I 型／ATP 競爭性選擇性抑制劑**（savolitinib、tepotinib）與雙重 **MET/VEGFR-2** 抑制劑（capmatinib、[[Foretinib]]、[[Tivantinib]]、[[Glesatinib]]）。
- 以 **MET 衣殼（capsid）修飾**改造的**溶瘤腺病毒**，用來標靶表現 MET 的腫瘤——一種獨特且在生物學上相當精巧的策略。
- **HGF/MET 雙特異性抗體**（onartuzumab、savolitinib 加上免疫療法）與**抗 HGF 抗體**（fitusiran、AMG 337）——即上文提到的抗 HGF 與抗 MET 之別。

> [!warning] 臨床上的注意事項
> - **原發性抗藥性很常見，且機制上頗具啟發性。**
>   在[[Gastric Cancer]]中，大多數 MET 擴增腫瘤*並不會*對 MET 抑制劑產生反應；主要的解釋包括共存的 [[KRAS]]／[[EGFR]]／[[ERBB2]] 驅動突變、平行旁通途徑的活化，以及藥物動力學與受體降解動態無法持續地關閉訊號。
>   值得注意的是，Ib 型 MET 抑制劑常只造成**暫時性**的腫瘤反應，隨後腫瘤再度生長——MET 軸具有令人矚目的適應性再活化能力。
> - **靶點本身的毒性**：MET 抑制會造成**周邊水腫、低白蛋白血症、噁心、疲勞與肝毒性**；水腫在機制上是可預期的（MET 促進淋巴管與內皮通透性），並在某些試驗中構成劑量限制。
> - 對 MET 抑制劑的**抗藥性**可透過 MET 擴增、MET 激酶結構域突變（如 G1197、L1198、Y1230），以及 [[STAT3]]／[[ERK]] 旁通途徑的活化而產生。
> - [[HSP90β]] 伴護蛋白的關聯在模型中確實存在，但其在患者中的治療可及性尚未確立。

## Documents

提及此實體的文件清單

- [[EMT]]——MET 訊號經由 MAPK 與 PI3K 兩條分支，是上皮－間質轉換的主要驅動因子，這也是 MET 抑制能在本知識庫的癌症筆記中降低侵襲的原因。
- [[Gastric Cancer]]——MET 擴增最為確立、且 MET 單藥治療臨床失敗最明確的腫瘤型別；[[HER2]]共同擴增與抗藥性的關聯即源自此處。
- [[Glioblastoma]]——GBM 中的 MET 過度表現，以及本知識庫記載的 [[HSP90β]] 伴護蛋白交互作用。
- [[HSP90β]]——MET 在 GBM 侵襲方案中與之交互作用的伴護蛋白，將 MET 連結至熱休克伴護蛋白網絡。

## 連結

- [[c-Met]]——同一個實體；本筆記是基因層級的條目，而 [[c-Met]] 則是蛋白質層級的條目。
- [[Hepatocellular Carcinoma]]——MET 在 HCC 中反覆被活化，而 HGF 是肝細胞增殖與再生的關鍵驅動因子；這是本知識庫中最清晰的生理－癌症重疊。
- [[Gastric Cancer]]——MET 擴增是特性最明確的 MET 驅動型腫瘤，於第 7 號染色體上與 [[HER2]] 共同擴增，也是 HER2 阻斷的主要抗藥性機制。
- [[Glioblastoma]]——MET 過度表現透過 HSP90 依賴軸驅動 GBM 的侵襲；也與 HGF 自分泌微環境相關。
- [[HSP90β]]——MET 在 GBM 侵襲方案中的伴護蛋白關聯；是受體酪胺酸激酶訊號與熱休克反應之間的直接連結。
- [[HER2]]——在 7q 上與 MET 共同擴增；MET 擴增是 HER2 導向治療之後主要的旁通抗藥性途徑，也是本知識庫最強的 MET－腫瘤學關係。
- [[EMT]]——MET → MAPK/PI3K → EMT 是把受體酪胺酸激酶連結至侵襲、重複驗證次數最多的訊號鏈之一。
- [[PI3K]]、[[Akt]]、[[mTOR]]、[[MAPK]] 與 [[MEK]]——經由 GAB1 的主要下游分支。
- [[RAS]]、[[RAF]] 與 [[ERK]]——MAPK 分支，也是與 EGFR 等其他 RTK 的匯聚點，這正是 MET 活化為何是 EGFR 抑制劑典型抗藥性機制的原因。
- [[c-Met]]——[[Liver Regeneration]]與[[Wound Healing]]中的 HGF/Met 訊號，是致癌軸所劫持的生理功能。
- [[Epithelial-Mesenchymal Transition]] 與 [[Invasion]]——使 MET 成為運動性受體而非僅是促分裂原的表型輸出。
- [[Angiogenesis]]——HGF/MET 具有促血管新生作用，並與 VEGF 軸交互作用；這是 MET/VEGFR 雙重抑制劑的依據。
- [[Stem Cells]]——MET 標記並調節肝、肺與胰臟的前驅細胞群，將腫瘤起始細胞的概念連結至發育方案。
- [[Protease]]——配體成熟需要 HGF 活化酶，這就是胞外蛋白水解在此路徑中成為藥理學標的原因。
- [[Lymphedema]]——間接但在機制上真實存在：MET 驅動的內皮與淋巴管通透性，正是 MET 抑制劑所引起的周邊水腫與 HGF 驅動的淋巴管新生背後的同一套生物學。

## 連結摘要

- 新增連結：[[Hepatocellular Carcinoma]]、[[RAS]]、[[RAF]]、[[ERK]]、[[PI3K]]、[[Akt]]、[[mTOR]]、[[MAPK]]、[[MEK]]、[[STAT3]]、[[HSP90β]]、[[Colorectal Cancer]]、[[Breast Cancer]]、[[Angiogenesis]]、[[Stem Cells]]、[[Liver Regeneration]]、[[Wound Healing]]、[[Epithelial-Mesenchymal Transition]]、[[KRAS]]、[[EGFR]]
- 建議建立的新實體註記：[[MET Exon 14 Splice]]、[[Capmatinib]]、[[Tepotinib]]、[[Savolitinib]]、[[Crizotinib]]、[[HGF Activator]]、[[SEMA3C]]、[[CRMP1]]、[[CRMP2]]、[[GAB1]]、[[CBL]]、[[PIK3CA]]、[[RON]]、[[MSPRY2]]、[[ERBB2]]、[[Oncolytic Adenovirus]]、[[Receptor Tyrosine Kinase]]、[[ADAM]]、[[ALCL]]、[[CBL-B]]、[[Calcium Ions]]、[[Foretinib]]、[[Glesatinib]]、[[HGFR]]、[[Invasion]]、[[NSCLC]]、[[Protease]]、[[Protein Kinase C]]、[[Stromelysin]]、[[TANKYRASE]]、[[Tivantinib]]——因已存在而移除：Src
- 應強化的重點連結：[[MET]] ↔ [[Hepatocyte Growth Factor]]、[[MET]] ↔ [[HER2]]、[[MET]] ↔ [[Gastric Cancer]]、[[MET]] ↔ [[c-Met]]
