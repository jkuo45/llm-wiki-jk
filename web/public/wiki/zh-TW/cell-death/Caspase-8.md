---
title: Caspase-8
description: 外源性細胞凋亡途徑的起始蛋白酶；由死亡受體訊號（FasL/TRAIL）活化，並受調控性磷酸化修飾，使其在促死亡與促存活（促遷移）功能之間切換。
protected: true
created: 2026-07-06
updated: 2026-11-19
tags:
  - enzyme
  - apoptosis
  - caspase
  - cancer
  - cell-death
url: #
source: #
aliases:
  - Caspase 8
  - FLICE
  - MACH
  - CAP4
---

# Caspase-8（半胱胺酸蛋白酶-8）

## 概述

[[Caspase-8]] 是起始蛋白酶，在[[Apoptosis|細胞凋亡]]的[[Extrinsic Pathway|外源性途徑]]中扮演核心角色。當[[Fas]]、[[TRAIL]]受體等死亡受體形成死亡誘導訊號複合體（DISC）時，Caspase-8 於該處寡聚化而被活化，並啟動半胱胺酸蛋白酶級聯，導致執行者半胱胺酸蛋白酶活化與凋亡性細胞死亡。

## 結構與活化

Caspase-8 含兩個 N 端死亡效應域（DED），介導其招募至 DISC；C 端為催化域，由大次單元（p18）與小次單元（p10）組成。當[[FasL]]或[[TRAIL]]與死亡受體結合——例如經由[[Fas]]、[[DR4]]、[[DR5]]——死亡誘導訊號複合體（[[DISC]]）隨之形成，並招募銜接蛋白（[[TRADD]]、[[FADD]]）以及 pro-caspase-8。近距離誘導的自我蛋白水解切割使其活化。活化的 Caspase-8 隨後直接活化執行者半胱胺酸蛋白酶（[[Caspase-3]]、[[Caspase-7]]），或切割僅含 BH3 的蛋白 Bid 以啟動粒線體途徑。

## 作用機制與途徑

- **外源性細胞凋亡**：Caspase-8 是死亡受體（[[Fas]]、[[TRAIL]]-R1/R2、[[TNFR1]]）下游的主要起始半胱胺酸蛋白酶。在第一型細胞中，它直接切割並活化[[Caspase-3]]、[[Caspase-7]]等執行者半胱胺酸蛋白酶。
- **粒線體放大**：在第二型細胞中，Caspase-8 將[[Bid]]切割為截短型 Bid（tBid），後者活化[[BAX]]與[[BAK]]以觸發[[Mitochondrial outer membrane permeabilization|MOMP]]，將外源性途徑與[[Intrinsic Pathway|內源性途徑]]連結。
- **非典型支架功能**：磷酸化的 Caspase-8 獲得獨立於蛋白酶活性的支架功能，促進細胞存活、遷移與治療抗性。

> [!important] 酪胺酸磷酸化開關
> 在許多癌症（大腸癌、膠質母細胞瘤）中，[[SRC kinase|Src]] 家族激酶——包括[[FYN]]與[[LYN]]——於 Tyr380（或依異構體為 Tyr397/Tyr465）磷酸化 Caspase-8。Tyr397/Tyr465 磷酸化抑制蛋白水解切割與成熟，阻斷外源性凋亡途徑。磷酸化的 Caspase-8（pY-Casp8）改以促存活支架形式作用，招募 **FAK**、**Calpain-2** 與 **PI3K**，促進細胞遷移、轉移與存活訊號傳導（NF-κB、mTORC1）。

## 調控

Caspase-8 的活性受多種激酶經由[[Phosphorylation|磷酸化]]調控：

- **[[SRC kinase|SRC]]、[[FYN]]、[[LYN]]**：於 Tyr380/397（LYN 亦作用於 Tyr465）磷酸化 Caspase-8，提供抑制[[Apoptosis|細胞凋亡]]的機制。磷酸化形式（pY-Casp8）促進細胞遷移與轉移，尤其在[[Colon Cancer|大腸癌]]與膠質母細胞瘤。
- **[[p38 MAPK]]**：於 Ser364 磷酸化 Caspase-8，抑制其活性。
- **[[SHP1]]**：一種磷酸酶，移除 Caspase-8 Tyr380/397 的磷酸化以恢復其促凋亡功能。Tyr310 的磷酸化有助於 SHP1 的招募。

### c-FLIP 變阻器

除磷酸化之外，決定細胞命運的主要控制機制是與[[c-FLIP]]形成異二聚體
（完整說明見 [[Caspase-8-c-FLIP Rheostat]]）：

- **[[Homodimerization|同二聚體]] → 死亡。** 完全加工後的 p18/p10 異四聚體活化[[Caspase-3]]/[[Caspase-7]]
  與[[Bid]]；當死亡配體輸入超過可用的 c-FLIP_L 時，此為預設結果。
- **c-FLIP_L 異二聚體 → 受抑的殺手。** 在能量上優於同二聚體；執行二聚體間切割（產生 p43-FLIP），
  但無法完成二聚體內加工，因此持續結合於[[DISC]]、不釋放凋亡訊號，並切割[[RIPK1]]/[[RIPK3]]以阻斷
  [[Necroptosis|壞死性凋亡]]（Micheau 2002；Oberst 2011）。
- **c-FLIP_S/R 異二聚體 → 允許壞死性凋亡。** 催化功能缺失，封閉 DED 鏈，無法
  切割[[RIPK1]]——ripoptosome 持續存在，由[[MLKL]]執行[[Necroptosis|壞死性凋亡]]（Feoktistova 2011）。
- 切割功能缺失的 Caspase-8 D387A 同二聚體無法執行凋亡，但 D387A/c-FLIP_L
  異二聚體仍可傳遞訊號——此異二聚體不需要結構域間切割（Newton 2025）。

## 生理功能

Caspase-8 為胚胎發育、免疫系統恆定，以及清除病毒感染細胞或受損細胞所必需。功能缺失突變造成嚴重免疫缺陷（體染色體隱性 CASP8 缺陷），伴隨 T 細胞、B 細胞與 NK 細胞活化受損。Caspase-8 亦具非凋亡性功能，包括活化 NF-κB 與抑制壞死性凋亡（經由切割 RIPK1）。

## 病理與臨床相關性

- **癌症**：許多腫瘤以表觀遺傳方式靜默 _CASP8_，或經由 Src 介導的磷酸化使 Caspase-8 維持在促遷移、抗凋亡狀態。神經母細胞瘤與絨毛膜癌可見 Caspase-8 下調或靜默，助長凋亡逃逸與治療抗性。靜默 _PTPN6_（SHP1）的腫瘤則特別保留促存活的 Caspase-8 狀態。
- **病毒免疫逃逸**：痘病毒與疱疹病毒編碼 caspase-8 抑制劑（例如 CrmA、vFLIP），以抑制宿主細胞凋亡。
- **治療標的**：恢復 Caspase-8 活性（例如重新活化 SHP1 或抑制 Src）正被探索為使抗性腫瘤對死亡配體（[[TRAIL]]、[[FasL]]）敏感化的策略。

## 文獻

- [[task_output_caspase_01_JUN_2026|Molecular Mechanisms of Caspase and Bcl-2 Family Regulation]]
  - 詳述 SHP1 介導的去磷酸化開關如何在癌細胞中恢復 Caspase-8 的促凋亡功能。

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]]
  - 死亡受體具有胞內死亡域，可招募 TRADD、FADD 等銜接蛋白，以及 Caspase-8 等半胱胺酸蛋白酶。

- [[_document_ - Caspase|Caspase]]
  - 半胱胺酸蛋白酶大致分為起始型（例如 Caspase-2、Caspase-8、Caspase-9、Caspase-10）與執行型（例如 Caspase-3、Caspase-6、Caspase-7）。

- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
  - 面對各種凋亡刺激時，「起始型」半胱胺酸蛋白酶（Caspase-2、Caspase-8、Caspase-9 或 Caspase-10）被活化，隨後切割並活化「執行型」半胱胺酸蛋白酶的酶原形式。

- [[_document_ - The Long Form of FLIP Is an Activator of Caspase-8 at the Fas DISC|Micheau et al. 2002]]
  - FLIP_L 在 Fas DISC 上與 procaspase-8 形成異二聚體：進行二聚體間切割而不進行二聚體內加工——此為變阻器的生化基礎。

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - Caspase-8/c-FLIP_L 活性經由切割 RIPK1 使 ripoptosome 解組；c-FLIP_S 則將其導向壞死性凋亡。

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - 回顧 DISC 化學計量、c-FLIP 含量的泛素–蛋白酶體調控，以及 caspase-8/c-FLIP 開關的小鼠遺傳學。

## 關聯

- [[Caspase-8-c-FLIP Rheostat]] — 定量開關的專屬樞紐筆記
- [[c-FLIP]] — 調節 Caspase-8 在死亡與存活之間切換的假性半胱胺酸蛋白酶旁系同源物

- [[Extrinsic Pathway]] — 主要的起始半胱胺酸蛋白酶。
- [[FasL]] — 在 DISC 上觸發 Caspase-8 活化的配體。
- [[TRAIL]] — 另一個觸發 Caspase-8 活化的配體。
- [[Fas]] / [[DR4]] / [[DR5]] — 與 Caspase-8 結合的死亡受體。
- [[DISC]] — Caspase-8 被活化的死亡誘導訊號複合體。
- [[Bid]] — 被 Caspase-8 切割以連結至[[Intrinsic Pathway|內源性途徑]]。
- [[Caspase-3]] — 由 Caspase-8 活化的主要下游執行者半胱胺酸蛋白酶。
- [[Caspase-7]] — 第一型細胞中由 Caspase-8 活化的下游執行者半胱胺酸蛋白酶。
- [[Caspase-9]] — 內源性途徑的起始半胱胺酸蛋白酶；Caspase-8 經由切割 Bid 與之連結。
- [[SRC kinase]] / [[FYN]] / [[LYN]] — Caspase-8 的抑制性激酶。
- [[SHP1]] — 恢復 Caspase-8 凋亡功能的調控性磷酸酶。
- [[FAK]] — 由磷酸化 Caspase-8 招募以促進遷移與存活。
- [[PI3K]] — 在 pY-Casp8 支架複合體中與 FAK 共同被招募。
- [[BAX]] / [[BAK]] — 第二型細胞中由 Caspase-8 切割之 Bid 所活化的效應蛋白。
- [[NF-κB]] — 由磷酸化 Caspase-8 支架功能啟動的存活途徑。

## 連結摘要

- 變阻器更新（03_Sep_2026）：[[Caspase-8-c-FLIP Rheostat]]、[[c-FLIP]]、[[RIPK1]]、[[RIPK3]]、[[MLKL]]、[[Necroptosis]]；文獻 Micheau 2002、Feoktistova 2011、Tsuchiya 2015
- 新增連結：[[SHP1]]、[[Src]]/[[SRC kinase]]、[[FYN]]、[[LYN]]、[[Caspase-7]]、[[Caspase-3]]、[[Caspase-9]]、[[TRAIL]]、[[FasL]]、[[FAK]]、[[BAX]]、[[BAK]]、[[Apoptosis]]、[[DISC]]、[[Bid]]、[[Colon Cancer]]、[[Phosphorylation]]、[[p38 MAPK]]
- 建議建立的新實體筆記：（已於 03_Sep_2026 完成：[[Type I vs Type II Cells]]、[[Calpain-2]]、[[vFLIP]]）
- 待強化的強連結：
    - [[Caspase-8]] ↔ [[SHP1]]
    - [[Caspase-8]] ↔ [[SRC kinase]]
    - [[Caspase-8]] ↔ [[Caspase-8-c-FLIP Rheostat]]
    - [[Caspase-8]] ↔ [[Apoptosis]]
    - [[Caspase-8]] ↔ [[Extrinsic Pathway]]
    - [[Caspase-8]] ↔ [[Type I vs Type II Cells]]
    - [[Caspase-8]] ↔ [[Calpain-2]]
    - [[Caspase-8]] ↔ [[vFLIP]]（c-FLIP 阻斷的病毒表型複本）
