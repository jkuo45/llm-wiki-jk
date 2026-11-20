---
title: Ripoptosome
description: 一種約 2 MDa、不依賴死亡受體的細胞內複合體，由 RIPK1、FADD、caspase-8、caspase-10 與 c-FLIP 異構體組成；在 cIAPs 耗盡時形成，並在細胞凋亡與壞死性凋亡之間作出決定。
protected: false
created: 2026-09-03
updated: 2026-11-19
tags:
  - protein-complex
  - cell-death
  - apoptosis
  - necroptosis
url: #
source: #
aliases: [ripoptosome, RIPoptosome, Ripoptosome complex]
---

# Ripoptosome

**ripoptosome** 是一個約 2 MDa 的細胞內死亡訊號平台，由 [[RIPK1]]、[[FADD]]、[[Caspase-8]]、[[Caspase-10]] 與 [[c-FLIP]] 異構體組成。它在沒有死亡配體參與的情況下自發組裝——每當 [[cIAPs]] 耗盡時（基因毒性壓力、Smac 模擬物、TLR3 刺激）——並且是 [[Caspase-8-c-FLIP Rheostat]] 作出[[Apoptosis|細胞凋亡]]與[[Necroptosis|壞死性凋亡]]決定的場所（Feoktistova 等，2011；Tenev 等，2011）。

## 結構與組成

- **核心：** [[RIPK1]] 是必需的支架——其死亡結構域（DD）在 RIPK1 去泛素化且 DD 暴露後與 [[FADD]] 結合；沒有 RIPK1 就沒有 ripoptosome（因此 *Ripk1⁻/⁻* 小鼠可存活，而 *Casp8⁻/⁻*／*Fadd⁻/⁻* 小鼠則不能）。
- **DED 鏈：** [[FADD]] 透過 DED–DED 交互作用（[[Death Effector Domain|DED]]）招募 procaspase-8／[[Caspase-10]]／[[c-FLIP]]，與 [[DISC]] 的組裝方式相同，但位於細胞質而非受體上。
- **大小：** 凝膠過濾顯示完全組裝的複合體約為 2 MDa（含 RIPK1 + caspase-8 + c-FLIP 的組分）；caspase-8 與 RIPK1 的締合幾乎僅限於這些高分子量組分。
- **調控因子：** [[cIAPs]]（cIAP1/cIAP2）持續泛素化區室化的 RIPK1 並將其標記降解，從而阻止組裝；單獨使用蛋白酶體阻斷劑（MG-132）即足以觸發自發形成。

## 作用機制與途徑

1. **組裝觸發。** [[cIAPs]] 缺失（或 TLR3–TRIF 訊號、依托泊苷誘發的基因毒性壓力）使 RIPK1 穩定 → DD 媒介的 FADD 招募 → DED 鏈納入 procaspase-8 與 [[c-FLIP]] 異構體。
2. **同二聚體結果 → 細胞凋亡。** Procaspase-8 同二聚體完全加工、切割並使 [[RIPK1]] 失活，使複合體解組，並釋出活化的 caspase-8 以驅動 [[Apoptosis]]。
3. **FLIP_L 結果 → 存活。** [[Caspase-8]]／FLIP_L 異二聚體切割 [[RIPK1]]（受質範圍有限，不釋出凋亡訊號），使平台解組，細胞存活。
4. **FLIP_S 結果 → 壞死性凋亡。** 無活性的異二聚體無法切割 [[RIPK1]]；平台持續存在，[[RIPK1]] 磷酸化 [[RIPK3]]，[[MLKL]] 被招募並以 [[Necroptosis]] 執行死亡。形成是必要但不充分的條件——下游效應能力決定最終結果。

> [!important] 異構體對立
> [[c-FLIP|FLIP_L]] *抑制* ripoptosome 形成，而 [[c-FLIP|FLIP_S]] *促進*其組裝——相同的兩種剪接形式將平台推向相反方向，這也是 FLIP_L:FLIP_S 比例（而非 c-FLIP 總量）才是預測參數的原因。

## 生理功能

ripoptosome 解釋了外在途徑看似矛盾的遺傳學現象：FADD 與 caspase-8 敲除小鼠因 ripoptosome 無法再經 caspase-8 媒介的 RIPK1 切割而解組，死於失控的 RIPK1–RIPK3 壞死性凋亡。它也在 IAP 拮抗劑治療下將促發炎細胞激素訊號轉為促死亡訊號，並在不依賴 TNF 訊號的情況下將 TLR3/dsRNA 感知連結至 [[Caspase-8]] 活化。

## 病理學與臨床關聯

- **癌症治療：** Smac 模擬物（IAP 拮抗劑）刻意誘導 ripoptosome 形成以殺死腫瘤細胞；腫瘤最終經[[Apoptosis|細胞凋亡]]或發炎性[[Necroptosis|壞死性凋亡]]死亡，取決於其 [[c-FLIP]] 異構體比例與 [[RIPK3]] 表現——可作為分層生物標記。
- **發炎：** 角質細胞（HaCaT）模型顯示，在 [[cIAPs]] 缺失時 c-FLIP_S 使 RIPK3 依賴性壞死性凋亡得以發生，與不依賴 TNF 的皮膚發炎相關。
- **RIPK3 抑制劑悖論：** 激酶死型 RIPK3（D161N）或 RIPK3 抑制劑阻斷 [[Necroptosis]]，但可能以 FLIP_L 增強的方式將 ripoptosome 導向 [[Apoptosis]]。

## 文件

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - 奠基研究：2 MDa 複合體、cIAP 調控、異構體對立調節，以及變阻器表述。
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - 綜述綜合：ripoptosome 模型圖、c-FLIP_S 作為組裝促進因子、壞死小體交接。
- [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018]]
  - 將 ripoptosome 衍生的 RIPK1/RIPK3 訊號置於更廣泛的壞死性凋亡圖景中。

## 關聯

- [[Caspase-8-c-FLIP Rheostat]] — 在此平台內運作的開關
- [[RIPK1]] — 複合體必需的核心支架
- [[RIPK3]]／[[MLKL]] — 平台持續存在時被招募的下游壞死性凋亡效應因子
- [[FADD]] — 橋接 RIPK1 與 DED 鏈的銜接蛋白
- [[Caspase-8]]／[[c-FLIP]]／[[Caspase-10]] — DED 鏈的三個成員，其化學計量決定命運
- [[cIAPs]] — 存在即阻止組裝的 E3 連接酶
- [[DISC]] — 受體結合的對應平台
- [[Death Effector Domain|DED]] — 建構複合體的 DED 鏈共享二聚化模組
- [[TLR3]]／[[TRIF]] — 不同於 ripoptosome 的 RIPK1 依賴、FADD 非依賴之 caspase-8 活化途徑
- [[TNFR1 complex II]] — 相關的 TNFR1 衍生次級複合體
- [[Necroptosis]]／[[Apoptosis]] — 兩種死亡輸出

## 連結摘要

- 新增連結：[[RIPK1]]、[[RIPK3]]、[[MLKL]]、[[FADD]]、[[Caspase-8]]、[[c-FLIP]]、[[Caspase-10]]、[[cIAPs]]、[[DISC]]、[[TNFR1 complex II]]、[[Necroptosis]]、[[Apoptosis]]、[[Caspase-8-c-FLIP Rheostat]]
- 建議建立的新實體筆記：（已於 03_Sep_2026 完成：[[TRIF]]、[[Smac mimetics]]）
- 來源充實（2026-11-19）：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — ripoptosome 的 DED 鏈組裝；MC159 vFLIP 因無法切割 RIPK1 而促進壞死性凋亡；TLR3–TRIF 非典型複合體（RIPK1 依賴、FADD 非依賴）。新增連結：[[Death Effector Domain|DED]]、[[TLR3]]。
- 待強化的強連結：[[Ripoptosome]] ↔ [[Caspase-8-c-FLIP Rheostat]]、[[Ripoptosome]] ↔ [[RIPK1]]、[[Ripoptosome]] ↔ [[cIAPs]]
