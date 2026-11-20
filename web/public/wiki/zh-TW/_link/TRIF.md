---
title: TRIF
description: 含 TIR 結構域之干擾素 β 誘導銜接蛋白（TRIF/TICAM1），是 TLR3 訊號的專一銜接蛋白，也是 TLR4 訊號的一條關鍵分支，可活化 IRF3、NF-κB 與 STAT1。
created: 2026-07-08
updated: 2026-11-19
tags:
  - protein
  - adaptor-protein
  - innate-immunity
  - signaling
aliases:
  - TICAM1
  - Toll/interleukin-1 receptor domain-containing adapter inducing interferon-β
  - TRIF adaptor
---

# TRIF

## 概述

**TRIF**（含 TIR 結構域之銜接蛋白，誘導干擾素 β；基因 *TICAM1*）是一種細胞質銜接蛋白，在[[Toll-like Receptor|toll 樣受體]]訊號傳導中居於核心地位。它是**[[TLR3]]的專一銜接蛋白**，也是[[TLR4]]的平行銜接蛋白（與 MyD88 並列）。TRIF 將受體結合連結至抗病毒干擾素反應與發炎性轉錄程式兩條路徑。

## 結構與結構域

TRIF 含 N 端 TIR 結構域（用於與 TLR3/TLR4 的細胞質尾端交互作用）、TRAF3 結合區、受體交互作用蛋白同型交互作用基序（RHIM），以及 C 端[[TBK1]]結合結構域（招募[[TBK1]]–[[IRF3]]激酶複合體）。

## 作用機制與訊號傳導

- **干擾素分支：** TRIF 招募[[TRAF3]] → [[TBK1]]/IKKε 磷酸化[[IRF3]] → 二聚化並轉位至細胞核 → 第一型干擾素（IFN-β）轉錄。
- **發炎分支：** TRIF 結合[[RIPK1]]與[[TRAF6]] → 活化[[NF-κB|NF-κB]]與[[MAPK|MAPK]]途徑 → [[TNF-alpha|TNF-α]]、[[IL-6]]及其他細胞激素。
- **STAT1 軸：** TRIF 依賴性路徑匯聚於[[NF-κB]]／[[STAT1]]軸，放大發炎基因表現。

## 生理功能

TRIF 媒介宿主對抗病毒（透過感知 dsRNA 的[[TLR3]]）與革蘭氏陰性細菌（透過[[TLR4]]）的防禦，在干擾素誘導與受控發炎之間取得平衡。

## 病理學與臨床關聯

TRIF 訊號失調會導致過度發炎、病毒免疫病理與無菌性發炎組織損傷。調節 TRIF 是抗發炎與抗病毒治療的研究方向。

> [!important] 變阻器連結
> 在[[cIAPs]]耗盡的情況下，TLR3–TRIF 訊號會成核[[Ripoptosome]]（Feoktistova 等，2011）：TRIF 招募的[[RIPK1]]為該平台播種，隨後由[[Caspase-8-c-FLIP Rheostat]]決定[[Apoptosis|細胞凋亡]]與[[Necroptosis|壞死性凋亡]]——這是該開關不依賴死亡受體的一臂。

> [!info] TRIF–RIPK3 壞死性凋亡
> 來源：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu 等 2026]]
> TRIF 帶有 RHIM 結構域，可直接招募並活化[[RIPK3]]，形成在某些情境下可繞過[[RIPK1]]的 TRIF/RIPK3 壞死小體。在 caspase 受抑制時，[[TLR3]]激動劑（poly(I:C)）或[[TLR4]]激動劑（[[Lipopolysaccharide|LPS]]）驅動此軸；LPS 加上 caspase 抑制會在巨噬細胞中誘發 RIPK3 依賴性壞死性凋亡。[[TLR4]]同時結合[[MyD88]]與 TRIF，而 MyD88 驅動的自分泌 TNF 可正反饋進入 RIPK1/RIPK3 活化。TRIF/RIPK3 壞死性凋亡與急性胰臟炎及免疫失調有關，且 TLR4 訊號與鐵死亡存在交互作用（在心臟移植中，TLR4/TRIF/第一型干擾素軸先於壞死性凋亡波動出現）。

## 在 Urolithin A 綜述中的角色

綜述《*Pharmacological Effects of Urolithin A and Its Role in Muscle Health and Performance*》指出，[[Urolithin A]]使[[TLR3]]/TRIF 訊號失活，以阻斷[[NF-κB]]／[[STAT1]]軸，降低[[Inflammation|發炎]]並增強巨噬細胞的[[Antioxidant|抗氧化]]防禦——此機制與 UA 的肌肉恢復及抗發炎效應相關。

## 文件

- [[_document_ - Pharmacological Effects of Urolithin A and Its Role in Muscle Health and Performance Current Knowledge and Prospects|Urolithin A and Muscle Health Review]]
  - 引用 UA 阻斷 TLR3/TRIF → NF-κB/STAT1 作為抗發炎機制。
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - TRIF 的 RHIM 在 TLR3/TLR4 下游直接招募／活化 RIPK3，使壞死性凋亡得以繞過 RIPK1；MyD88 驅動的自分泌 TNF 正反饋；TLR4/TRIF 與鐵死亡的交互作用。

## 關聯

- [[RIPK3]] — TRIF 結合 RIPK3 的 RHIM 結構域，直接活化壞死性凋亡
- [[TLR3]] → 使用 → [[TRIF]]
- [[TRIF]] → 活化 → [[TRAF3]] → [[TBK1]] → [[IRF3]]
- [[TRIF]] → 活化 → [[NF-κB]]、[[STAT1]]
- [[Urolithin A]] → 使 → [[TRIF]] 失活
- [[TRIF]] → 招募 → [[RIPK1]] → 播種 → [[Ripoptosome]] → 由 → [[Caspase-8-c-FLIP Rheostat]] 決定
- [[TRIF]] → 與 → [[TLR3]] → 形成 → 與[[Caspase-8]]構成的非典型死亡複合體（RIPK1 依賴、FADD 非依賴）

## 連結摘要

- 變阻器更新（03_Sep_2026）：[[Ripoptosome]]、[[Caspase-8-c-FLIP Rheostat]]、[[cIAPs]]
- 新增連結：[[Toll-like Receptor]]、[[TLR3]]、[[TLR4]]、[[TRAF3]]、[[TBK1]]、[[IRF3]]、[[RIPK1]]、[[TRAF6]]、[[NF-κB]]、[[MAPK]]、[[STAT1]]、[[TNF-alpha]]、[[IL-6]]、[[Urolithin A]]、[[Inflammation]]、[[Antioxidant]]
- 建議建立的新實體筆記：[[TLR4]]
- 待強化的強連結：[[Urolithin A]] ↔ [[TRIF]]
- 來源充實（2026-09-14）：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu 等 2026]] — TLR3/4 下游的 TRIF–RIPK3 壞死性凋亡。新增連結：[[TLR3]]、[[TLR4]]、[[MyD88]]、[[Lipopolysaccharide]]。
- 來源充實（2026-11-19）：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — 非典型 TLR3–TRIF–caspase-8 死亡複合體需要 RIPK1 但不需要 FADD（Estornes 等）。新增連結：[[Caspase-8]]、[[FADD]]。
