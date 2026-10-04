---
title: CBP
description: "CBP（CREB-binding protein／CREBBP）是一個 2442 個殘基的轉錄共活化因子與離胺酸乙醯化轉移酶，能將結合於增強子的轉錄因子搭接到 Mediator 複合體，並乙醯化組蛋白與包括 p53 在內的非組蛋白標的。"
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription
  - histone-acetylation
  - neurodegeneration
aliases: [CREB-binding Protein, CREBBP, CBP/p300, KAT2B, p300/CBP]
---

# CBP

**概觀：** CBP——CREB-binding protein，基因 *CREBBP*，UniProt 名稱 KAT2B——是一個約 2442 個胺基酸的核內蛋白質，同時作為**轉錄共活化因子**與**離胺酸乙醯化轉移酶（KAT）**運作。它是 [[P300]] 的功能旁系同源物，兩者在催化結構域內約有 86% 的序列一致性。由於 CBP 幾乎位於所有訊號反應性轉錄路徑的交會點，它是生物學中研究最深入的共活化因子之一。

## 結構與結構域

CBP 是一個線性、模組化的支架蛋白，帶有大量固有的無序區域（殘基 1–41、74–179、266–290、794–1083、1556–1615）。其功能模組如下：

| 結構域 | 約略殘基 | 功能 |
| --- | --- | --- |
| TAZ1（CBP 交互作用結構域 1） | 347–433 | 結合 Cyclin H；媒介 TFIIH 複合體的組裝，以及與其他 CBP 交互作用蛋白之 TAZ 結構域的停靠 |
| TAZ2 | ~1240–1320 | STAT 與核受體的共活化；結合 PCAF |
| KIX 結構域 | 587–666 | 結合磷酸化的 CREB Ser133 基序及其他磷酸化轉錄因子（SREBP、Elk-1、HSF1） |
| 溴結構域 1 | 1085–1192 | 乙醯化離胺酸讀取器；結合乙醯化的組蛋白（H3K27ac 區域）與 ASF1A |
| 溴結構域 2 | ~2080–2140 | 第二個乙醯化離胺酸讀取器，具有不同的配體偏好 |
| 鋅 finger／TAZ 型 3 | 約 1100 附近 | 鋅結合模組 |
| KAT/HAT 結構域 | 1323–1700 | 催化性的離胺酸乙醯化轉移酶核心 |
| 溴結構域–SANT（BD-SANT） | 1740–1820 | 讀取乙醯化的 p53，為完整轉錄活性所必需 |
| SRC-1/HDAC 交互作用（SID） | 1935–2000 | 結合核受體；將 CBP 與共抑制因子機器偶聯 |

> [!info] 透過乙醯化進行自我調節
> CBP 會乙醯化自身的溴結構域，形成一個負回饋迴路（Acetyl-K233、Acetyl-K236、Acetyl-K868），在轉錄爆發之後將 CBP 關閉。這些位點的喪失會產生過度活化、具致癌性的 CBP。

## 作用機制

CBP 透過兩條途徑之一被招募至某個基因：

1. **與磷酸化的轉錄因子結合。** 在 Ser133 被磷酸化的活化 CREB 停靠進入 KIX 結構域；STAT、Elk-1、SREBP、HSF1 與核受體則利用相關的 KIX 依賴型或 TAZ 依賴型接觸。
2. **透過溴結構域結合乙醯化的染色質。** 溴結構域 1 讀取 H3K27ac 與增強子上的其他乙醯基標記，提供第二個不依賴序列的錨定點。

一旦結合，CBP 會同時做三件事：

- **作為支架**——其無序區域同時結合十幾種以上的蛋白質（轉錄因子、Mediator 次單元、基礎轉錄因子、染色質重塑酵素），並在實體上將它們橋接起來，使增強子在空間上連接到啟動子。這種橋接（而非酵素活性）可說是 CBP 最重要的產物：BRD4–Mediator 軸遵循同樣的原理。
- **乙醯化染色質。** KAT 結構域乙醯化組蛋白 H3 與 H4 尾部，中和離胺酸的電荷並鬆動核小體以容許轉錄。CBP 強烈乙醯化 H3K27。
- **乙醯化非組蛋白標的。** 其中包括 [[p53]]（以催化活性受損、類似乙醯化模擬的方式）、[[FOXO]] 蛋白質、SRC-1/GRIP1 等核受體共活化因子，以及數種代謝酵素，使 CBP 不僅能控制染色質狀態，還能控制蛋白質的穩定性與活性。

## 生理功能

- **細胞週期與增殖。** CBP 乙醯化並穩定 E2F 所使用的共活化因子，並與 [[RB1|Rb]]–E2F 軸協同作用；在多數情境下，CBP 的喪失會使增殖停滯。
- **分化與發育。** CBP 的基因劑量對胚胎發育至關重要；異型合子喪失是 Rubinstein-Taybi 症候群的病因。
- **記憶與認知。** 神經元中的 CBP 為長期增強與轉錄記憶所必需；在成年小鼠中條件性刪除會損害恐懼記憶。
- **代謝重編程。** 透過 [[PGC-1α]] 與 [[NRF2]]，CBP 為禁食／進食的轉錄反應、糖質新生與粒線體生物合成程式所必需。
- **免疫與發炎轉錄。** CBP 是 [[NF-κB]]、IRF 與 STAT 的重要共活化因子，也是 T 細胞活化程式所必需。

## 疾病相關性

**Rubinstein-Taybi 症候群（RSTS）。** *CREBBP*（RSTS 第 1 型，多數病例）或 *EP300*（第 2 型）的單倍不足會造成多發性先天異常症候群：智能障礙、出生後生長遲緩、特徵性顏面形態，以及寬大的拇指／大腳趾。機制同時是 HAT 活性與支架功能的單倍不足。

**癌症。** *CREBBP* 的反覆性突變在[[Lymphoma|淋巴瘤]]（尤其是濾泡性淋巴瘤與 DLBCL，其中突變比例很高）與[[Bladder Cancer|膀胱癌]]中很常見。移除 HAT 結構域的截短突變具有顯性負效應，產生過度乙醯化卻無功能的 CBP，會把 HDAC3/SMRT/NCOR 共抑制因子招募至增強子——這是一種致癌狀態，也是這些腫瘤對 EZH2 抑制劑敏感性的基礎。

**神經退化。** 透過 CREB 依賴性轉錄受損，CBP 活性下降與[[Huntington's Disease|Huntington 疾病]]、[[Alzheimer's Disease|Alzheimer 疾病]]及[[Parkinson's Disease|Parkinson 疾病]]有關，而 CBP 的喪失也促成老化神經元中可見的轉錄衰退。

> [!warning] 小分子標定仍然困難
> 針對 CBP/p300 的溴結構域抑制劑確實存在並顯示出臨床前期活性，但 CBP 的 KAT 結構域及其龐大的支架表面迄今仍難以被臨床實用的抑制劑所攻破。CBP 在正常生理功能中亦是必需的，因此全身性抑制帶有實質的毒性風險。

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk between cell death mechanisms]] — survey 死亡受體與壓力訊號中的轉錄共活化因子節點。

## Connections
- [[P300]] — 親緣相近的旁系同源物；CBP/p300 對多數結合增強子的轉錄因子而言是不可或缺的共活化因子配對，並在 KAT 結構域中約有 86% 的序列一致性。
- [[Histone Acetylation]] — KAT 結構域的核心酵素輸出，在 H3/H4 上中和離胺酸電荷以開放染色質供轉錄使用。
- [[Transcription Factor]] — CBP 透過其 KIX 結構域與溴結構域，被磷酸化或乙醯化的轉錄因子所招募。
- [[CREB]] — 奠基性的結合夥伴；CREB Ser133 的磷酸化會停靠進入 CBP 的 KIX 結構域，是 cAMP 誘導基因轉錄的經典機制。
- [[p53]] — CBP 乙醯化 p53，而其 BD-SANT 結構域讀取乙醯化的 p53；CBP 既修飾 p53，也被 p53 別構活化。
- [[Epigenetics]] 與 [[Chromatin]] — CBP 是增強子功能與增強子—啟動子成環現象的典範共活化因子。
- [[Induced Pluripotent Stem Cells]] — OSKM 網絡分析記錄了一條 CREBBP 依賴性的多能性放大路徑，將 CBP 與重編程連結起來。
- [[Nuclear Receptor]] — 許多核受體透過其 AF-2 活化結構域與 SID 結合招募 CBP/PCAF。
- [[Huntington's Disease]] — CREB/CBP 依賴性轉錄下降是 HD 紋狀體神經元的既定特徵，也是 HD 模型中的治療標的。
- [[NF-κB]] — CBP 是 NF-κB 依賴性發炎基因誘導所必需的共活化因子，將 CBP 與[[Inflammation]]連結起來。
- [[FOXO]] — CBP 乙醯化 FOXO 蛋白質，並與 SIRT1 協同作用以調控 FOXO 依賴性的抗壓力基因。

## Linking Summary
- 新增連結：[[Rubinstein-Taybi Syndrome]]、[[Bladder Cancer]]、[[EZH2]]、[[HDAC3]]
- 建議建立的註記：[[Rubinstein-Taybi Syndrome]]、[[SMRT/NCOR]]、[[Bromodomain]]、[[KAT2B]]、[[Enhancer]]、[[Dominant-Negative Mutation]]、[[SREBP]]、[[Mediator Complex]]、[[SRC-1/GRIP1]]
- 應強化的重點連結：[[CBP]] ↔ [[P300]]、[[CBP]] ↔ [[CREB]]、[[CBP]] ↔ [[Histone Acetylation]]、[[CBP]] ↔ [[Transcription Factor]]