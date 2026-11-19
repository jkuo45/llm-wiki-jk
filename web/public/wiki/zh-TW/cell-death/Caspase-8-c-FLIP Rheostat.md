---
title: Caspase-8-c-FLIP Rheostat
description: "量化開關：在 DISC、complex II 與 ripoptosome 中，caspase-8 同二聚體與 c-FLIP 異二聚體之比，決定細胞走向凋亡、壞死性凋亡或存活。"
protected: true
created: 2026-09-03
updated: 2026-11-19
tags:
  - mechanism
  - cell-death
  - apoptosis
  - necroptosis
url: #
source: #
aliases: [Caspase-8/FLIP rheostat, FLIP switch, caspase-8 heterodimer switch]
---

# Caspase-8-c-FLIP Rheostat

**[[Caspase-8]]-[[c-FLIP]] 變阻器**是決定死亡受體刺激最終走向[[Apoptosis|細胞凋亡]]、[[Necroptosis|壞死性凋亡]]或存活的量化分子開關。刻度的設定值，是三個相關訊號平台——[[DISC]]、TNFR1 complex II 與 ripoptosome——內部促凋亡 [[Caspase-8]] 同二聚體與催化活性受限的 [[Caspase-8]]/[[c-FLIP]] 異二聚體之局部比例。

## 三種設定

- **同二聚體占優勢 → 凋亡。** 相鄰的 pro-[[Caspase-8]] 同二聚體完成分子間（Asp374/384）與分子內切割，釋出 p18/p10 異四聚體，進而活化 [[Caspase-3]]/[[Caspase-7]] 並切割 [[Bid]]，啟動[[Intrinsic Pathway|內在路徑]]。
- **c-FLIP_L 異二聚體 → 存活並阻斷壞死性凋亡。** 長型異構體與單一 [[Caspase-8]] 活性位點形成熱力學上較有利的異二聚體。它能有效執行鄰近同二聚體的第一個、速率決定性的分子間切割（自身亦被切成 p43-FLIP），但其偽 caspase 結構域無法完成分子內加工——因此該複合體維持 DISC 結合、不釋放凋亡訊號，卻保留足以切割 [[RIPK1]]/[[RIPK3]] 的活性，使壞死小體解體。淨結果：無[[Apoptosis|細胞凋亡]]、無[[Necroptosis|壞死性凋亡]]。
- **c-FLIP_S/R 異二聚體 → 凋亡關閉、壞死性凋亡啟動。** 短型異構體缺乏偽催化結構域，形成完全無活性的異二聚體，終止 DED 鏈延長，並且——關鍵在於——無法切割 [[RIPK1]]。[[RIPK1]] 隨後磷酸化 [[RIPK3]]，後者招募 [[MLKL]]；只要 [[RIPK1]]-[[RIPK3]]-[[MLKL]] 軸完整，細胞即預設走向[[Necroptosis|壞死性凋亡]]。

> [!important] 變阻器的原文
> Feoktistova 等（2011）的原文表述為：當 cIAPs 缺失時，「caspase 活性是由 ripoptosome 中的 cFLIP 異構體所控制的*變阻器*，決定細胞死亡是經由 RIP3 相依的壞死性凋亡，或 caspase 相依的細胞凋亡。」

## 量化調節

- **DISC 化學計量。** 定量質譜（Dickens、Schleich）顯示 DISC 中 procaspase-8 的量為 [[FADD]] 的數倍，而 [[c-FLIP]] 極少——這與短 DED 鏈寡聚體模型一致：FLIP_L:procaspase-8 約 1:1 的比例會抑制凋亡，而遠小於 1:1 的比例則讓異二聚體*加速*同二聚體的活化。
- **真正起作用的比例是局部的，而非細胞質中的。** c-FLIP 阻斷 FADD 的 DED 結合表面，因此閾值由 c-FLIP 的豐度與已活化受體數之比決定：每細胞約 40 000 個 CD95 受體，閾值接近配體：受體比 1:10²（Bentele 2004）；在模型的標準 c-FLIP 水準下，配體閾值為 7.2 ng/ml（Toivonen 2011）；每個 HeLa-CD95 細胞約 320 個 c-FLIP_L 分子（Fricker 2010）。
- **稀少的 c-FLIP 為何仍能競爭。** FLIP 結合 FADD 的 α1/α4 DED 表面，而 procaspase-8 結合 α2/α5 表面；因此即使細胞表現量遠低於 procaspase-8，FLIP 被招募至 DISC 的量仍與 procaspase-8 相當（Majkut 2014）。相對地，定量質譜卻報告原生 DISC 中的 c-FLIP 極少（Schleich 2012）——此為研究之間尚未解決的落差。
- **配體劑量。** 數學模型（Bentele、Lavrik、Neumann、Kallenberger）顯示 [[c-FLIP|FLIP_L]] 濃度決定死亡配體閾值：低於閾值的 CD95L 加上低 FLIP_L 產生 ERK/NF-κB 存活訊號；同一 FLIP_L 水準在高配體下則加速死亡。
- **周轉。** 所有 [[c-FLIP]] 異構體皆半衰期短；偶聯至[[Proteasome|泛素體]]的 E3 連接酶（Itch、Cbl／Cbl-b、Mind bomb 1、TRAF7、CHIP、TRIM21）在數分鐘內重設刻度，而磷酸化（PKC-Ser193、ROS-Thr166）與 S-亞硝基化（Cys254/259）則調節半衰期。
- **轉錄回饋。** *CFLAR* 是 NF-κB 的標的基因，因此 TNFR1 complex I 的訊號傳遞會提高 [[c-FLIP|FLIP_L]]，使 complex II 預先偏向存活。

## 變阻器運作的平台

1. **[[DISC]]**（[[Fas]]/CD95、[[DR4]]/[[DR5]]、[[TNFR1]]）——由 FADD 招募的 procaspase-8 ± [[c-FLIP]] DED 鏈（亦涉及 [[TRADD]]、[[Caspase-10]]）。
2. **TNFR1 complex II**——CYLD 將 [[RIPK1]] 自 complex I 去泛素化後，由 TRADD-[[RIPK1]]-[[FADD]]-caspase-8-[[c-FLIP]] 組成。
3. **[[Ripoptosome]]**——cIAPs 耗竭時（基因毒壓力、Smac 模擬物）自發形成的 2 MDa [[RIPK1]]-[[FADD]]-caspase-8-[[c-FLIP]] 平台；[[Caspase-8]]/[[c-FLIP|FLIP_L]] 藉由切割 [[RIPK1]] 使其解體，而 [[c-FLIP|FLIP_S]] 則穩定該平台並轉向[[Necroptosis|壞死性凋亡]]。

## 遺傳學證據

- *Casp8⁻/⁻* 與 *Fadd⁻/⁻* 的胚胎致死表型可由 *Ripk3*（或 *Mlkl*/*Ripk1*）剔除挽救——致死表型即未受控制的[[Necroptosis|壞死性凋亡]]，顯示該異二聚體的抗壞死性凋亡切割屬於發育必要條件，而非附屬功能。
- *Cflip⁻/⁻* 的致死需要 *Fadd⁻/⁻Ripk3⁻/⁻* 的合併挽救：缺少 RIPK3 時，[[c-FLIP]] 仍是用以約束 [[Caspase-8]]/[[FADD]] 相依[[Apoptosis|細胞凋亡]]的必要因子——亦即 [[c-FLIP|FLIP_L]] 同時煞住*兩種*死亡程式。
- 切割失能的 [[Caspase-8]] D387A 同二聚體無法驅動[[Apoptosis|細胞凋亡]]，但 D387A/[[c-FLIP|FLIP_L]] 異二聚體可以——該異二聚體不需要分子間切割（Newton 2025；Shaw 2025）。

## 治療意義

[[c-FLIP]] 過量表現在多種癌症中賦予 [[TRAIL]]／FasL 與化療抗性（並藉由 Atg3／LC3 與 [[Beclin1]]-BCLAF1 軸抑制[[Autophagy|自噬]]）；降低刻度——對泛素體敏感的周轉、HDAC 抑制劑、cisplatin／Itch-p53 軸——可重新使腫瘤對死亡配體敏感。反之，穩定 [[c-FLIP|FLIP_L]] 可保護肝臟、腸道與皮膚上皮免受 TNF 驅動的損傷，代价是同時阻斷抗腫瘤的[[Apoptosis|細胞凋亡]]。

## Documents

- [[_document_ - The Long Form of FLIP Is an Activator of Caspase-8 at the Fas DISC|Micheau et al. 2002]]
  - 奠基之作：FLIP_L／caspase-8 異二聚體執行分子間切割但不執行分子內切割——即變阻器的生化機制（被引 686 次以上）。
- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - 定義 ripoptosome，並將 caspase 活性稱為受 cFLIP 控制的變阻器；FLIP_L 抑制而 FLIP_S 促進 ripoptosome 組裝（被引 830–1000 次以上）。
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - 系統性綜述：DISC 化學計量、泛素－泛素體調控、數學模型，以及此開關的條件式敲除生理學。
- [[task_output_cflip_caspase8_disc_ratio_kinetics_19_Nov_2026]]
  - 任務成果：procaspase-8 : c-FLIP 比例與 c-FLIP_L 招募動力學實際控制的內容，附量測到的分子數、閾值的算術推導，以及來源段落所需的限定條件。互動式探索器：[DISC 比例與招募動力學探索器](https://graph.johnnykuo.com/pages/zh-TW/disc-rheostat-sim.html)。
- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - 將此變阻器置於凋亡／壞死性凋亡／焦亡的交互作用網絡中。

## Connections

- [[Caspase-8]] — 其同二聚化與異二聚化即是刻度本身的酵素
- [[c-FLIP]] — 設定刻度的偽 caspase 旁系同源物
- [[FADD]] — 在三個平台中成核 DED 鏈的接合蛋白
- [[DISC]] — 比例最先被讀出的膜平台
- [[RIPK1]] / [[RIPK3]] / [[MLKL]] — 由殘餘異二聚體活性控管的壞死性凋亡軸
- [[TRAIL]] / [[FasL]] / [[TNFα]] — 死亡配體的輸入
- [[Apoptosis]] / [[Necroptosis]] — 兩種死亡輸出
- [[Ripoptosome]] — 承載此開關的受體非依賴平台
- [[TNFR1 complex II]] — 承載此開關的受體衍生平台
- [[cIAPs]] — 控管平台組裝的 E3 連接酶
- [[p43-FLIP]] — 標記異二聚體模式發火的 DISC 滞留片段
- [[Proteasome]] — 重設異構體濃度的周轉機制
- [[Sirtuin-Caspase Crosstalk]] — 更廣泛的 caspase 開關轉譯後調控網絡

## Linking Summary

- 新增連結：[[Caspase-8]]、[[c-FLIP]]、[[FADD]]、[[DISC]]、[[RIPK1]]、[[RIPK3]]、[[MLKL]]、[[TRAIL]]、[[FasL]]、[[TNFα]]、[[Apoptosis]]、[[Necroptosis]]、[[Proteasome]]、[[Sirtuin-Caspase Crosstalk]]
- 建議新增的實體筆記：（四者皆已於 03_Sep_2026 建立：[[Ripoptosome]]、[[cIAPs]]、[[TNFR1 complex II]]、[[p43-FLIP]]）
- 應加強的連結：[[Caspase-8-c-FLIP Rheostat]] ↔ [[Caspase-8]]、[[Caspase-8-c-FLIP Rheostat]] ↔ [[c-FLIP]]、[[Caspase-8-c-FLIP Rheostat]] ↔ [[RIPK3]]
