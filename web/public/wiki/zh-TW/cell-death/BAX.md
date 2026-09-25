---
title: BAX
description: "促凋亡的 Bcl-2 家族效應蛋白質，會在粒線體外膜寡聚化，驅動粒線體外膜通透化（MOMP）並導致凋亡性細胞死亡。"
protected: true
created: 2026-07-09
updated: 2026-09-12
tags:
  - protein
  - apoptosis
  - mitochondrial
  - cell-death
  - redox
  - phosphorylation
  - isomerase
  - cancer
url: #
source: #
aliases:
  - Bcl-2-associated X protein
  - BCL2L4
---

# BAX

## 概述
[[BAX]]（Bcl-2-associated X protein）是 Bcl-2 蛋白質家族的促凋亡效應器，在健康細胞中主要位於胞質，並鬆散地結合於粒線體外膜。收到凋亡訊號後，BAX 會發生構型活化、插入 [[Mitochondrial outer membrane permeabilization|粒線體外膜]]，並與 [[BAK]] 寡聚化形成孔道，使細胞走向凋亡。

## 結構與活化
BAX 具有保守的 Bcl-2 同源（BH1–BH3）結構域。其活化由抗凋亡蛋白質（如 [[Bcl-2]]）與僅含 BH3 的活化蛋白（例如 [[Bid]]）之間的平衡所決定。在轉錄層面，[[p53]] 上調 BAX，將基因毒性壓力與死亡程式連結起來。

## 作用機制與 MOMP
活化的 BAX 轉位至粒線體，與 BAK 協同使膜通透化，將 [[Cytochrome c]] 與 [[Smac DIABLO]] 釋放至胞質，觸發 [[Caspases]] 與 [[Apoptosis]] 的執行階段。MOMP 的閾值也與 Minority MOMP 相關，後者可在不立即造成死亡的情況下誘導存活訊號。

## 依賴磷酸化的調控

> [!important] Thr167 上的 ERK-Pin1 存活開關
> 因應存活細胞激素（例如 [[GM-CSF]]），[[ERK2]] 途徑在 BAX 的 **Thr167** 上磷酸化，形成可被肽基脯氨醯異構酶 **[[Pin1]]** 認識的 pThr-Pro 基序。Pin1 的結合催化構型變化，將 Bax 鎖定在不活化狀態，阻止其轉位至粒線體以及後續的寡聚化。此機制保護細胞（特別是嗜酸性球）免於凋亡。

> [!info] Thr167 的情境依賴性磷酸化
> 雖然 ERK 介導的 Thr167 磷酸化促進存活，但在壓力下同一位置可被 **[[JNK]]** 或 **[[p38 MAPK]]** 標靶而促進凋亡。[[Pin1]] 是決定促存活結果的關鍵開關。破壞 ERK-Bax-Pin1 複合體或抑制 Pin1 會觸發 BAX 活化與 [[Mitochondrial outer membrane permeabilization|MOMP]]。

## 生理、氧化還原與長壽
除了經典凋亡之外，BAX/BAK 介導的外洩與 [[Mitophagy]] 及 [[Parkin]] 依賴性的品質管制交會，也與 [[Mitochondrial Dysfunction]] 中的 [[Reactive Oxygen Species]] 放大交會。逃脫 BAX 依賴性死亡的衰老細胞可持續存在並分泌 [[SASP|衰老相關分泌表型]]，進而驅動 [[Inflammaging]]。[[Fisetin]] 與 [[Urolithin A]] 等化合物可調節這些死亡／清除途徑，使 BAX 成為連結凋亡、線粒體自噬與長壽的節點。

> [!info] miMOMP 將 SASP 與停滯分離——體內證據
> *Bax/Bak* 基因刪除、以及 BAX 抑制劑 BAI1 與 eltrombopag 可抑制胞質 [[mtDNA]]／mtRNA、[[cGAS]]-[[STING]] 與 RIG/MDA5-[[MAVS]] 所驅動的 SASP，同時保留 Cdkn2a/Cdkn1a 與 SA-β-gal。在年老小鼠中，BAI1 減少骨／腦中的循環 SASP，改善骨量、虛弱度與神經肌肉協調（Victorelli 2023）；在 MASH 中，*Bax/Bak* 或 *Mavs* 刪除可減少 SASP 並改善肝臟指標（2025）。相較於 [[BAK]]，單獨耗竭 BAX 對 SASP 的效果最強。

## Documents

  - [[_document_ - SASP, senescent cells, grok|SASP & Senescent Cells]]
    - 描述逃脫 BAX/BAK 介導的凋亡如何允許衰老細胞積聚，以及 SASP 驅動的發炎。
  - [[_document_ - Fisetin is a senotherapeutic that extends health and lifespan|Fisetin Senotherapeutic]]
    - 非瑟酮透過動用包括 Bcl-2 家族在內的凋亡效應器，部分清除衰老細胞。
  - [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in Cancer]]
    - 涵蓋 BAX 作為腫瘤抑制效應器，被癌細胞當作逃避死亡的標的。

## 連結

  - [[Bcl-2]]：隔離並抑制活化 BAX 的抗凋亡對抗者。
  - [[BAK]]：密切相關的效應器，與 BAX 在粒線體膜上形成異源寡聚體。
  - [[Mitochondrial outer membrane permeabilization]]：BAX 所驅動、使細胞走向凋亡的結構性事件。
  - [[Cytochrome c]]：在 BAX 孔道下游釋放，以活化 caspase 級聯。
  - [[p53]]：基因毒性壓力下 BAX 的轉錄活化因子。
  - [[Mitophagy]]：BAX 外洩回饋至 Parkin 依賴性線粒體自噬與粒線體品質管制。
  - [[Senescent Cells]]：透過下調 BAX/BAK 依賴性死亡而存活的細胞。
  - [[Minority MOMP]]：亞致死的 BAX/BAK 孔道釋放 mtDNA/mtRNA，在不造成死亡的情況下驅動 SASP。
  - [[cGAS]] / [[STING]] / [[MAVS]]：BAX 驅動之 miMOMP 下游的核酸感知器。
  - [[SASP]]：可藉由抑制 BAX 而與停滯分離的發炎性分泌組。

## 連結摘要

  - 新增連結：[[BAX]], [[BAK]], [[Bcl-2]], [[Mitochondrial outer membrane permeabilization]], [[Cytochrome c]], [[Smac DIABLO]], [[Caspases]], [[p53]], [[Mitophagy]], [[Parkin]], [[Minority MOMP]], [[ERK2]], [[Pin1]], [[GM-CSF]], [[JNK]], [[p38 MAPK]], [[Cancer]]
  - 建議建立的新實體註記：[[Bid]], [[BH3-only proteins]], [[Minority MOMP]]
  - 應強化的重點連結：[[BAX]] ↔ [[Mitophagy]], [[BAX]] ↔ [[Senescent Cells]], [[BAX]] ↔ [[Pin1]], [[BAX]] ↔ [[ERK2]]
