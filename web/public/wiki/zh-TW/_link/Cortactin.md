---
title: Cortactin
description: Cortactin 是一種由第 11 號染色體 11q13 上的 CTTN 編碼的 Src 家族激酶受質，可結合 F-actin 與 Arp2/3 複合體，在細胞突起處穩定分支狀肌動蛋白網絡，進而驅動細胞遷移、侵潤足形成與膜運輸。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - cytoskeleton
  - cancer
aliases: [CTTN, p80/85, EMS1, Src substrate cortactin]
---

# Cortactin（皮質肌動蛋白結合蛋白）

Cortactin 是一種 63–65 kDa 的肌動蛋白結合蛋白，1990 年代初首次在轉型化的雞胚纖維母細胞中被辨識為 v-Src 的酪胺酸磷酸化受質，因此同時得來兩個名稱：*cortactin* 來自「cortical actin」，而 *p80/85* 則來自其表觀分子量。它由染色體帶 **11q13** 上的 **CTTN** 基因（同義名 *EMS1*）編碼，而它在許多人類癌症中的擴增與過度表現，才使它從細胞生物學的趣聞變成臨床上的關注對象。

## 結構域架構

此蛋白質由四個模組構成，每個都有明確的分工：

- **N 端酸性區域（NTA）**，殘基約 15-35，含有保守的 **DDW** 基序（Asp20-Asp21-Trp22），可結合 [[Arp2/3 complex]] 的 Arp3 次單元並成核形成新的分支。DDW 在結構上所扮演的角色，與 WASP 家族的 verprolin-cofilin-acidic（VCA）結構域相同。
- **六又二分之一個串聯重複序列**，每個單元由 37 個殘基組成。第四個重複序列是主要的 F-actin 結合位；第三與第五個則是維持結合效率所必需。此區域的轉譯後修飾——由 [[PAK1]] 與 [[PAK3]] 進行的磷酸化，以及由 [[HDAC6]] 與 [[Alpha-Tubulin Acetyltransferase|ATAT1]] 進行的乙醯化——是主要的調控槓桿。
- **脯胺酸豐富區與 α 螺旋區**，長度不一，密集分布著磷酸化位點。酪胺酸 Y421、Y446、Y470 與 Y486 由 [[SRC kinase|Src]]、[[FER]]、[[c-Met]] 與 [[Nck]] 磷酸化；絲胺酸 S405 與 S418 則由 [[ERK]]、PAK 與肌凝蛋白輕鏈激酶磷酸化。
- **C 端 SH3 結構域**，使 cortactin 成為一個支架：細胞骨架、膜運輸與訊號蛋白都在此停泊。

Cortactin 是 **HS1/L-plastin** 的旁系同源物，而後者主要侷限於造血細胞。兩者源自共同的基因重複；值得注意的是，在 cortactin 中介導細胞遷移的 F-actin 結合區域，在 HS1 中介導的卻是凋亡。

## 作用機制

> [!info] 作用機制
> Cortactin 做了兩件核心成核促進因子做不好的事。第一，它直接活化 [[Arp2/3]]，但比 N-WASP 弱；結構研究顯示，它同時會改變 filament 中肌動蛋白次單元之間的側向與縱向接觸，藉此暴露新的結合位點並提高 [[Arp2/3]] 對母 filament 側面的親和力。第二，也是更具特色的一面，它會在分支形成之後**穩定分支**，並阻止 Arp2/3 複合體從既有分支上解離。因此它既是活化因子，也是動力學煞車；「釋放煞車」模型（Yang et al., *Curr Biol* 2011）更提出，cortactin 還會促進 WASP-VCA 從 Arp2/3 分支上脫離，讓活化因子得以循環再用。

SH3 結構域把這套機制延伸到訊號傳遞與運輸層面。Cortactin 結合並**解除對 N-WASP 的抑制**，暴露其 VCA 結構域，使 N-WASP 得以進一步活化 [[Arp2/3]]——這是有文獻記載的協同機制（Wave 2 及其同事，*eLife* 2013）。它也會結合 WIP/SIR2alpha，而後者本身可封端並穩定分支點；cortactin-WIP-filament 複合體是達到最大 [[Arp2/3]] 活性所必需。[[Dynamin]] 透過 SH3 結構域及其自身的脯胺酸豐富基序結合，而這種交互作用是肌動蛋白聚合所必需的。其他 SH3 交互作用對象還包括 cortactin 結合蛋白（CortBP）、ZO-1、Shank，以及膜運輸成分 Exo70。

其結果是，在膜受體、肌動蛋白細胞骨架與胞吐機制之間架起一座實體橋樑——cortactin 把訊號傳遞與形態、以及分泌耦聯在一起。

## 細胞功能

Cortactin 會聚集在動態肌動蛋白組裝的位點，因此它被用作**葉狀偽足與侵潤足的標記**。葉狀偽足驅動 2D 遷移中的片狀突出；而**侵潤足（invadopodia）**則是能分解基質、使細胞得以突破基底膜的突出。Cortactin 也會組裝黏著連接（adherens junction），在其中穩定以 E-cadherin 為基礎的細胞－細胞黏附——而這對一個遷移驅動因子而言相當不尋常：cortactin 促進而非削弱細胞－細胞連接，因此正是其失活（而非活化）看來是完成上皮－間質轉換所必需的。

在內皮細胞中，cortactin 對屏障功能是必需的：它會因應 [[Sphingosine-1-phosphate]] 與肝細胞生長因子而轉位到細胞周邊，形成一個皮質環，而其喪失會增加血管通透性與組織水腫。本知識庫中的 [[HDACs]] 關聯即源自此處：[[HDAC6]] 透過 cortactin 的去乙醯化來調節自噬體－溶酶體融合，而 ATAT1／HDAC6 對 α-tubulin 的乙醯化則調節同一個 F-actin 結合區域。

## 病理與預後

Cortactin 是癌細胞侵襲的驅動因子中特性最明確者之一，而且各腫瘤型別之間的證據一致性也異常地高。

**表現。** 在頭頸鱗狀細胞癌、口腔與肺部鱗狀癌、乳癌、肝細胞癌、食道癌、胃癌、卵巢癌、大腸癌與黑色素瘤中，皆有過度表現或擴增的報導，主要透過 11q13 擴增——該區域同時也含有 [[Cyclin D1]]、數個 FGF 家族成員與 FADD，這就是為何在各項研究中，該擴增的效應並非都能單獨歸因於 cortactin。

**預後。** Cortactin 的表現可預測局部復發、無病存活、總存活與疾病特異性死亡率，在許多情況下獨立於 [[EGFR]] 與 Cyclin D1 之外。喉癌、食道鱗狀癌、肝細胞癌、卵巢癌、胃癌、大腸癌與黑色素瘤，以及非小細胞肺癌都已證實其獨立的預後價值；在後者中，CTTN（與 SIRT1）的高表現與淋巴結轉移及較短的存活期相關。這種對 EGFR 的獨立性很重要：它意味著 cortactin 對 EGFR 訊號的作用並非全貌。

**功能。** 在已建立的癌細胞系中過度表現 cortactin，會增加遷移、侵襲與基質降解，並在小鼠模型中增加向骨、肺與肝的轉移。與 Cyclin D1 不同，在小鼠乳腺中以轉殖方式表現 cortactin 本身並不會誘發過度增生或腫瘤，因此 cortactin 最適切的描述是**侵襲與轉移的驅動因子，而非腫瘤起始因子**。它也會促進不依賴錨定與血清的生長，合理推測是藉由調節自分泌分泌。

> [!info] 機制：侵潤足
> Cortactin 以兩個可區分的步驟促進侵潤足處的 ECM 降解。它藉由調節高基氏體後運輸與囊泡捕捉，把 [[Matrix Metalloproteinase|MMPs]] 徵召到突出處，並使分泌機制與肌動蛋白核心對位。Cortactin 與 Exo70 對 MMP 分泌具有協同作用，儘管其交互作用機制尚未完全釐清。由於侵潤足會降解基質、解除空間限制，這被認為是 cortactin 在某些腫瘤型別（而非其他）影響腫瘤大小的途徑。

> [!warning] 臨床上的注意事項
> Cortactin 是一個經過驗證的預後生物標記，也是一個頗具吸引力的抗侵襲標的，但並非治療標的。目前沒有任何以 cortactin 為導向的藥物用於臨床，而其原因是結構性的：cortactin 沒有明顯專屬於它的小分子結合口袋，因此抑制必須針對它的交互作用或其磷酸化位點，而磷酸化模擬位點的專一性又難以達成。近期此領域中 CTTN 較實際的角色，是作為生物標記，以及作為位於其上游的 [[EGF|EGFR]] 與 miRNA（miR-182、miR-509）調控軸的標的。

## Documents

提及此實體的文件清單

- [[HDACs]]
  - 本知識庫的 HDAC 筆記記載，HDAC6 透過 cortactin 的去乙醯化來調節自噬體－溶酶體融合，這使 cortactin 除了遷移與侵襲之外，也置於自噬－溶酶體路徑之中。

## 連結

- [[HDACs]]——HDAC6 在 cortactin 的 F-actin 重複序列區域對其去乙醯化，而據報 cortactin 反過來會結合 HDAC6；此去乙醯化步驟調節自噬體－溶酶體融合，也調節 cortactin 的肌動蛋白結合。正是這個直接連結，把 cortactin 放進本知識庫的自噬章節。
- [[HDAC6]]——HDAC6 是同時對 cortactin 與 tubulin 去乙醯化的特定酵素，而 cortactin 與該 tubulin 共享同一套調控邏輯的乙醯化狀態；[[Alpha-Tubulin Acetyltransferase|ATAT1]]則是方向相反的乙醯轉移酶。
- [[Arp2/3 complex]]——cortactin N 端酸性區域中的 DDW 基序結合 Arp3 並成核形成新分支，而 cortactin 之後又穩定這些分支。正是這個雙重角色，使它同時是成核促進因子與分支穩定因子，而非僅具其中之一。
- [[Actin]]——Cortactin 透過 6.5 個串聯重複序列中的第四個結合 F-actin，這就是它位於細胞皮質與突發處的原因，也是為何肌動蛋白結合的轉譯後修飾是主要的調控控制點。
- [[SRC kinase|Src]]——Src 對 cortactin 的磷酸化既是 cortactin 被發現的方式，也是它被活化的方式；它同時也是一個回饋迴路的起始點，在該迴路中 Src 活性既需要 cortactin 所建構的肌動蛋白網絡，也被其促進。
- [[Cell Migration]]——Cortactin 是一般性運動性的驅動因子，不僅限於癌細胞；內皮遷移、神經突生長與免疫細胞運輸都依賴它。
- [[Matrix Metalloproteinase|MMPs]]——Cortactin 將 MMPs 徵召並運送至侵潤足，這就是它得以促成基底膜突破的機制。
- [[Metastasis]]——Cortactin 過度表現會增加實驗性模型中向骨、肺與肝的轉移，其表現也是人類腫瘤中遠端轉移的獨立預測因子。
- [[Plasma Membrane]]——質膜是 cortactin 高度富集之處，是其 SH3 結構域停泊膜近端支架之處，也是葉狀偽足與侵潤足構建之處。
- [[Epithelial-to-mesenchymal transition]]——由於 cortactin 促進細胞－細胞連接的形成以及遷移，因此完成 EMT 所需的看來是其失活而非活化——這是一種值得注意的不尋常關係。
- [[Dynamin]]——Dynamin 結合 cortactin 的 SH3 結構域及其脯胺酸豐富基序，而這種交互作用是肌動蛋白聚合所必需的。
- [[VEGF]]——內皮細胞中的 VEGF 訊號會增加 cortactin 與 Arp2/3 複合體的結合，把 cortactin 連結至腫瘤進展的血管新生分支。
- [[PAK1]]——PAK1 對 cortactin 重複序列區域的磷酸化調節 F-actin 結合，使 cortactin 在多種遷移細胞類型中都置於 PAK 訊號軸的下游。
- [[Cyclin D1]]——Cyclin D1 與 cortactin 並列於被擴增的 11q13 區域並共同擴增，但兩者行為不同：Cyclin D1 驅動增殖，cortactin 驅動侵襲。
- [[SIRT1]]——CTTN 與 SIRT1 的表現在非小細胞肺癌中同步升高，並與淋巴結轉移及較短的存活期相關。

## 連結摘要

- 新增連結：[[Arp2/3 complex]]、[[Actin]]、[[SRC kinase]]、[[Cell Migration]]、[[Matrix Metalloproteinase|MMPs]]、[[Metastasis]]、[[Plasma Membrane]]、[[Epithelial-to-mesenchymal transition]]、[[Dynamin]]、[[VEGF]]、[[PAK1]]、[[Cyclin D1]]、[[SIRT1]]、[[HDAC6]]、[[Alpha-Tubulin Acetyltransferase|ATAT1]]、[[Sphingosine-1-phosphate]]、[[c-Met]]、[[ERK]]、[[EGF|EGFR]]、[[FER]]
- 建議建立的新實體註記：[[Arp2/3 complex]]、[[Invadopodia]]、[[Lamellipodia]]、[[N-WASP]]、[[WIP]]、[[Dynamin]]、[[PAK3]]、[[FER]]、[[11q13 Amplification]]、[[Cell Junction]]——因已存在而移除：Adherens Junction、Cytoskeleton、PAK1
- 應強化的重點連結：[[HDACs]] ↔ [[Cortactin]]（已為雙向）、[[Arp2/3 complex]] ↔ [[Actin]]、[[Cortactin]] ↔ [[Cell Migration]]、[[Cortactin]] ↔ [[Metastasis]]
