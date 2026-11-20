---
title: Smac mimetics
description: 模擬 Smac/DIABLO IBM 基序的小分子 IAP 拮抗劑，可觸發 cIAP 自我毀滅，使 ripoptosome 得以組裝，並在癌症治療中使腫瘤細胞對死亡受體訊號敏感。
protected: true
created: 2026-09-03
updated: 2026-11-19
tags:
  - drug
  - cell-death
  - apoptosis
  - cancer
url: #
source: #
aliases: [IAP antagonists, Smac mimetic, birinapant, LCL161, xevinapant]
---

# Smac mimetics

**Smac mimetics**（凋亡抑制因子拮抗劑）是模擬粒線體 Smac/DIABLO 之 N 端 IBM（IAP 結合基序）的小分子。透過結合[[cIAPs]]的 BIR2/BIR3 結構域，它們迫使 cIAP1/2（尤其是 [[BIRC2]] 編碼的 cIAP1）快速自我泛素化並經蛋白酶體自我降解——移除阻止[[Ripoptosome]]組裝的煞車，並使腫瘤細胞對死亡配體與 TNF 驅動的殺傷敏感。

## 作用機制與途徑

- **cIAP 耗盡。** 雙價模擬物（birinapant）使 cIAP RING 結構域二聚化，在數分鐘內觸發 K48 自我泛素化；單價化合物（LCL161、xevinapant/AT-406）作用較為漸進，但抵達相同終點：TNFR1 [[TNFR1 complex I|complex I]]中[[RIPK1]]泛素化的喪失。
- **Ripoptosome 許可。** [[cIAPs]]消失後，細胞質[[RIPK1]]累積，招募[[FADD]]–[[Caspase-8]]–[[c-FLIP]]，並成核[[Ripoptosome]]——這正是 Feoktistova 等用以定義該複合體的實驗（IAP 拮抗劑 + poly I:C/TLR3）。
- **死亡品質決定。** 唯有在[[Caspase-8-c-FLIP Rheostat]]能拆解平台之處，最終死亡才會是[[Apoptosis]]；[[c-FLIP|FLIP_S]]偏高或[[RIPK3]]功能完整／[[Caspase-8]]偏低的腫瘤則改為發炎性[[Necroptosis]]。
- **自分泌 TNF 迴路。** Smac 模擬物處理在多種細胞株中誘發自分泌 TNFα 分泌，平行地供給[[TNFR1 complex II]]——形成雙重平台壓力推向死亡。

## 生理功能

內源性 Smac/DIABLO 在[[Mitochondrial outer membrane permeabilization|MOMP]]時從[[Mitochondria]]釋出，在內源性[[Apoptosis]]期間中和[[XIAP]]與[[cIAPs]]；模擬物在藥理學上重現此去抑制作用，而無需粒線體損傷。

## 病理學與臨床關聯

- **臨床試驗：** birinapant、LCL161、xevinapant（頭頸癌、卵巢癌、骨髓瘤）——單一藥物活性有限；與[[TRAIL]]激動劑、化療或檢查點阻斷合併，意在將已許可的 ripoptosome 推過死亡閾值。
- **生物標記：** 完整的[[RIPK3]]–[[MLKL]]軸、低[[c-FLIP|FLIP_S]]、TNFα 功能正常的微環境可預測反應；[[RIPK3]]沉默與[[c-FLIP]]過度表現是典型的抵抗途徑。
- **毒性邏輯：** 正常屏障上皮可耐受短暫 cIAP 喪失，因為其[[Caspase-8]]／FLIP_L 軸會拆解偶然形成的 ripoptosome——與拯救 *Casp8⁻/⁻* 小鼠相同的遺傳學機制。

> [!info]
> 來源：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> Smac 模擬物途徑是自發性、不依賴死亡受體之[[Ripoptosome]]組裝的兩種已證實觸發因子之一（另一為依托泊苷誘發的基因毒性壓力）：IAP 拮抗劑合併 poly I:C 會透過自我泛素化與蛋白酶體降解使[[cIAPs]]消除，之後 2 MDa 的 RIPK1–[[FADD]]–[[Caspase-8]]–[[c-FLIP]]複合體在沒有任何配體的情況下組裝。後續死亡形式由存在的 c-FLIP 異構體決定：在此條件下 MC159 [[vFLIP]]表現驅動 RIPK3 激酶依賴性壞死性凋亡，而 RIPK3 抑制（化學抑制或 D161N 活性位點突變體）阻斷壞死性凋亡，反而將類 ripoptosome 平台導向[[Apoptosis]]——在小鼠胚胎纖維母細胞中，此轉變受[[c-FLIP|FLIP_L]]增強。

## 文件

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - 以 IAP 拮抗劑 + poly I:C 範式定義 ripoptosome；異構體依賴的死亡品質。
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Smac 模擬物 + poly I:C 作為 cIAP 喪失觸發自發性 ripoptosome 組裝；MC159 vFLIP 壞死性凋亡對 RIPK3 激酶活性的依賴；RIPK3 抑制劑悖論中平台被導向凋亡，且受 FLIP_L 增強。

## 關聯

- [[cIAPs]]／[[BIRC2]] — 被模擬物耗盡的分子標的
- [[Ripoptosome]] — 因 cIAP 喪失而獲許可的平台
- [[RIPK1]] — 去泛素化後成核組裝的效應因子
- [[XIAP]] — 第三個 IAP 標的，在 caspase 層面直接解除抑制
- [[Caspase-8-c-FLIP Rheostat]] — 許可後決定死亡品質的開關
- [[TRAIL]] — 用於迫使凋亡輸出的合併伴侶
- [[Apoptosis]]／[[Necroptosis]] — 兩種經許可的死亡模式
- [[vFLIP]] — MC159 在經許可的 ripoptosome 中行為類似 FLIP_S，促進壞死性凋亡
- [[RIPK3]] — 其激酶活性為壞死性凋亡結果所必需，抑制它則重新導向凋亡

## 連結摘要

- 新增連結：[[cIAPs]]、[[BIRC2]]、[[Ripoptosome]]、[[RIPK1]]、[[XIAP]]、[[Caspase-8-c-FLIP Rheostat]]、[[TRAIL]]、[[Apoptosis]]、[[Necroptosis]]、[[Mitochondria]]
- 建議建立的新實體筆記：[[Smac/DIABLO]]
- 待強化的強連結：[[Smac mimetics]] ↔ [[cIAPs]]、[[Smac mimetics]] ↔ [[Ripoptosome]]
- 來源充實（2026-11-19）：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — Smac 模擬物 + poly I:C 作為 cIAP 喪失觸發自發性 ripoptosome 組裝；MC159 vFLIP 壞死性凋亡需要 RIPK3 激酶活性；RIPK3 抑制劑重新導向凋亡且受 FLIP_L 增強。新增連結：[[vFLIP]]、[[RIPK3]]。
