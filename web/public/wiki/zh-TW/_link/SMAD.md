---
title: SMAD
description: 'SMAD 蛋白是 TGF-beta 超家族的主要細胞內訊號傳遞因子。人類有八種 SMAD，分為三類：受體調節型 R-SMAD（1、2、3、5、8）、共同介導型 SMAD4，以及抑制型 SMAD（6、7）。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - transcription-factor
aliases: [Smad, SMADs, Smads, Mad-related protein, MADH]
---

# SMAD

> [!info] 家族說明
> 「SMAD」指的是人類的八種 **SMAD 蛋白**——這個名稱是 *Sma*（*C. elegans*）與 *Mad*（*Drosophila*）的縮合。SMAD2、SMAD3 與 SMAD4 各自都有獨立註記；本頁為家族總覽。

SMAD 是[[TGF-beta Signaling Pathway|TGF-β 超家族]]的訊號傳遞因子。它們沒有催化活性：純粹透過蛋白質–蛋白質與蛋白質–DNA 交互作用運作。人類編碼八種：

| 類別 | 成員 | 角色 |
|---|---|---|
| **R-SMAD**（受體調節型） | SMAD1、SMAD2、SMAD3、SMAD5、SMAD8 | 由 I 型受體直接磷酸化 |
| **Co-SMAD**（共同介導型） | SMAD4 | 所有 R-SMAD 的必然夥伴 |
| **I-SMAD**（抑制型） | SMAD6、SMAD7 | 拮抗 R-SMAD 訊號 |

R-SMAD 依啟動它們的受體進一步分支：**SMAD1/5/8** 屬 BMP 分支，**SMAD2/3** 屬 TGF-β/activin/Nodal/myostatin 分支。SMAD4 不受配體限制，可與每一種 R-SMAD 搭配。

## 結構

SMAD 約 500 個殘基，具有兩個保守的球狀結構域，由一段多變的**連接區（linker）**相連：

- **MH1（Mad 同源 1）N 端結構域。** 存在於 R-SMAD 與 SMAD4 中，SMAD6/7 則缺乏。含有一個由鋅穩定的 DNA 結合模組，其 β-髮夾辨識迴文排列的 **Smad 結合元件（SBE）**，即 5′-CAGAC。同時攜帶核定位訊號。
- **連接區（約 100–120 個殘基）。** 富含絲胺酸／脯胺酸，在各亞群之間並不保守。內含 [[CDK]]、[[MAPK]] 與 GSK3 的磷酸化位點（與其他途徑的交互作用）、一個由 SMURF 泛素連接酶的 WW 結構域辨識的 PY motif，以及——在 SMAD4 中——一個核輸出訊號。
- **MH2 C 端結構域。** 該途徑中最多樣的交互作用模組。其 L3 環與鹼性表面在 R-SMAD 中結合已活化的 I 型受體，在 SMAD4 中則結合已磷酸化的 R-SMAD 尾端。其表面有一條連續的「疏水走廊」，與細胞質內滞留蛋白、核孔蛋白與 DNA 結合輔因子接觸。在 R-SMAD 中，該結構域末端為由 I 型受體激酶磷酸化的 C 端 **SSXS motif**；SMAD4 與 I-SMAD 缺乏此 motif，也從不在該處被磷酸化。

> [!warning] SMAD2 不結合 DNA
> 全長 SMAD2 含有一段由外顯子 3 編碼的 30 殘基插入序列，會破壞 MH1 的 β-髮夾，因此無法結合 SBE。較短的 **SMAD2Δex3**（又稱 SMAD2β）異構型缺乏該插入序列，能像 SMAD3 一樣結合 DNA——而只表現 SMAD2Δex3 的小鼠仍可存活且具生殖能力。因此 SMAD2 進入轉錄複合體時，是與結合 DNA 的 SMAD3/SMAD4 並肩作為共同活化因子或共同抑制因子，而非直接結合 DNA。

## 機制

1. 分泌型的 TGF-β 家族配體與 II 型受體結合，後者招募並磷酸化一個 I 型受體（TGF-β 為 ALK5/[[TGFBR1]]；BMP 為 ALK1/2/3/6）。
2. 活化的 I 型受體停靠相符的 R-SMAD——由 SARA/endofin 支架協助——並磷酸化其 SSXS motif。
3. 磷酸化改變 MH2 構形，使 R-SMAD 從受體釋放，並暴露出 SMAD4 結合表面。
4. R-SMAD 與 SMAD4 寡聚；由兩個 R-SMAD 加一個 SMAD4 構成的異源三聚體是主要的功能單元，不過 R-SMAD 同源三聚體、R-SMAD 二聚體，以及由不同 R-SMAD 配對構成的異源三聚體也都會形成，並針對不同的基因。
5. 該複合體穿梭進入細胞核，SMAD 在此透過 SBE 發揮作用，但藉由與序列專一性轉錄因子合作——包括 FOXH1、SNAIL 與 AP-1——以及與 [[CBP]]/[[P300]]、[[SUMO]] 調控機制與染色質重塑複合體等輔因子合作來獲得專一性。

即使沒有訊號，R-SMAD 仍持續在細胞核與細胞質之間穿梭，用以讀出受體活性；而在轉錄之外，它們也透過 Drosha 微處理複合體參與微 RNA 的成熟。

## 調節與專一性

- **I-SMAD。** SMAD7 結合已活化的 I 型受體並招募 SMURF1/2，使受體降解；SMAD6 偏好阻斷 BMP 訊號；SMAD7 則是廣效性的。由於 TGF-β 與 BMP 都會誘導 I-SMAD，這構成一個保守的負回饋迴路。
- **非 Smad 訊號。** II 型受體也可透過 TRAF6 → [[NF-κB]]，以及透過 [[PI3K]]、[[ERK]] 與 [[JNK]] 傳遞訊號，後者會回饋至連接區的磷酸化。
- **連接區磷酸化** 由 CDK、MAPK 與 GSK3 進行，是細胞週期狀態與其他途徑調控 SMAD 輸出的主要途徑；它控制穩定性、核內停留時間與轉錄專一性。

## 生理與疾病角色

TGF-β 超家族訊號支配胚胎發育、[[Quiescence|靜止狀態]]、免疫調節與組織恆定。其失調是纖維化、自體免疫與癌症的基礎。由於 TGF-β 在早期具有腫瘤抑制作用（生長停滯、細胞靜止），但在晚期促進腫瘤（[[EMT]]、侵襲），SMAD 的喪失會加速惡性進展而非引發腫瘤：在 *Apc* 突變小鼠中，Smad2 喪失會促進侵襲但不改變息肉數目，而 Smad4 喪失的侵襲性更強。

> [!important] 家族成員之間的因果差異
> SMAD4 是唯一具有明確腫瘤抑制角色的 SMAD
> （胰臟導管腺癌、幼年型息肉病）。SMAD2 的突變頻率較低，功能後果也不夠明確；SMAD3 在人類癌症中基本上沒有突變。

## Documents

- （尚無文件註記）

## Connections

- [[SMAD Proteins|SMAD 蛋白]]——關於本家族結構邏輯的更詳細配套註記；應與本總覽搭配使用。
- [[SMAD2]] 與 [[SMAD3]]——TGF-β/activin 分支的 R-SMAD；由於外顯子 3 插入序列，SMAD2 獨獨缺乏直接結合 DNA 的能力。
- [[SMAD4]]——唯一的 Co-SMAD，是每個 R-SMAD 的必然夥伴，也是本家族的腫瘤抑制因子。
- [[Smad7]]——廣效型 I-SMAD，是對 TGF-β 訊號的保守負回饋。
- [[TGF-beta Signaling Pathway]]——SMAD 所傳遞的途徑；受體–SMAD 架構正是經典途徑的核心所在。
- [[TGF-beta Receptor]] 與 [[TGFBR1]]——磷酸化 SSXS motif 的 II 型與 I 型激酶。
- [[TGF-beta1]]——研究最充分的配體，負責 TGF-beta 大部分抑制生長與促成纖維化的輸出。

## Linking Summary

- 新增連結：[[SMAD Proteins]]、[[SMAD2]]、[[SMAD3]]、[[SMAD4]]、[[Smad7]]、[[TGF-beta Signaling Pathway]]、[[TGF-beta Receptor]]、[[TGFBR1]]、[[TGF-beta1]]、[[CDK]]、[[MAPK]]、[[NF-κB]]、[[PI3K]]、[[ERK]]、[[JNK]]、[[CBP]]、[[P300]]、[[SUMO]]、[[EMT]]、[[Quiescence]]、[[Smad Anchor for Receptor Activation]]、[[SMURF]]
- 建議建立的註記：[[SMURF]]、[[Smad Anchor for Receptor Activation]]、[[Smad-binding Element]]、[[SMAD1]]、[[SMAD5]]、[[SMAD8]]、[[SMAD6]]、[[FOXH1]]、[[Activin]]、[[Nodal]]、[[Bone Morphogenetic Protein]]——因已存在而移除：GSK3、Myostatin
- 應強化的重點連結：[[SMAD]] ↔ [[SMAD Proteins]]、[[SMAD2]] ↔ [[SMAD4]]、[[SMAD4]] ↔ [[Pancreatic Cancer]]、[[SMAD]] ↔ [[TGF-beta Signaling Pathway]]