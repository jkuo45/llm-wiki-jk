---
title: Kinetochore
description: 組裝於著絲點染色質上的多聚蛋白複合體，負責捕捉紡錘體微管、產生並感知附著張力，並承載守護染色體分配的紡錘體組裝檢查點。
protected: false
created: 2026-10-22
updated: 2026-11-01
tags: [structure, cell-cycle, mitosis]
url: #
source: #
aliases: [Kinetochore complex, KIN, kinetochore microtubule attachment site, 著絲點, 動粒]
---

# Kinetochore（著絲點）

**著絲點（kinetochore）** 是建構在每條染色體著絲點（centromere）上的三層蛋白質複合體，同時承擔兩項功能：捕捉紡錘體微管的結構，以及判定該染色體是否正確附著、可否放行分離的訊號平台。染色體的精確分配、基因組穩定性與 [[Aneuploidy|非整倍體]] 的防止，全繫於著絲點的正常運作。

## 結構與結構域

著絲點依階層式組裝於著絲點 [[Chromatin|染色質]] 上：

- **內層**：CENP-A 取代著絲點核小體中的 histone H3，提供染色質基礎；CENP-C、CENP-H/I/K/M 與 CENP-T 構成內層。
- **中層**：CENP-F 與 CENP-E。
- **外層（Ndc80 複合體、Mis13/Mis14、Knl1、ZWINT）**：著絲點–微管界面。Ndc80 複合體（Ndc80、Nuf2、Spindly、Cdc80）以異二聚體抓住微管晶格並與 CENP-F 耦合。
- **附著方式**：主要由 Ndc80 與 Ska 複合體附著，Dam1/CENP-I–CENP-H/I/K/M（類 Dam1）複合體作為備援。
- **動力機械**：kinesin-8（[[KIF5B]]）與 kinesin-6（CENP-E）沿微管產生方向性運動，驅動染色體移動與排列至中期板；紡錘體本身由 [[Microtubule|微管]] 組成。

## 作用機制與路徑

1. **組裝**：含 CENP-A 的著絲點啟動內層，再由 CENP-H/I/K/M、CENP-F、Ndc80、Mis13/Mis14 及 SKA/KNL1 複合體成熟化。
2. **捕捉**：外層先以側向附著抓住微管，再經 SKA 與 Ndc80 轉為端向附著。
3. **錯誤校正**：紡錘體組裝檢查點（SAC）錨定於未附著的著絲點；Mad2–BubR1–Bub3–Cdc20（有絲分裂檢查點複合體）抑制 [[Anaphase Promoting Complex-Cyclosome|APC/C]]，阻止 securin 降解與 separase 活化，直到所有染色體雙向定向。
4. **張力感知**：附著幾何被轉譯為生化訊號。BUB3 招募可解除 Mad2 抑制，p31^comet 促進 Mad2 釋放，Mps1 與 PLK1 磷酸化 BUB1 後招募 PP2A–B56 去磷酸化受質；張力依賴的 Aurora B 則磷酸化 Ndc80，破壞錯誤附著。
5. **錯誤附著**：merotelic 附著（單一著絲點同時連接兩極）、落後染色體與染色質橋是著絲點缺陷的物理後果，產生非整倍體子細胞。

## 生理功能

著絲點是 mitosis 的「節律器」：把機械訊息（附著、張力、幾何）轉為引導中期進展的生化訊號，也是把紡錘體力量轉譯為染色體運動的機械耦合器。其完整性同樣關乎減數分裂保真度與 DNA 損傷檢查點——未附著的著絲點會在 [[DNA Damage|DNA 損傷]] 時觸發有絲分裂停滯。

## 病理與臨床關聯

- **非整倍體與癌症**：著絲點／著絲點染色質缺陷（CENP-A 染色質薄弱、Ndc80 錯位、BUB1/Mad2 訊號改變）在腫瘤中常見，驅動染色體不穩定，與預後不良及治療抗性相關。
- **老化**：幹細胞中著絲點組裝缺陷與微核隨年齡累積，著絲點–紡錘體附著異常是年齡相關組織退化的主因之一，連結 [[Cellular Senescence|細胞衰老]] 與 [[Genomic Instability|基因組不穩定]]。
- **先天性疾病**：著絲點組分突變（如 *CENP-A*、*KIF2*、*BUB1B*）造成原發性小頭症等神經發育症候群。
- **抗有絲分裂治療**：taxanes、vinca 生物鹼及新興 CENP-E、KIF18A、MPS1/PLK1 抑制劑均利用此依賴性；著絲點擴增是已知的抗藥機制。

> [!warning] 抗藥與毒性
> 抗有絲分裂藥物雖以著絲點依賴性為標靶，但著絲點擴增與 SAC 訊號改變可致抗藥；腫瘤中的染色體不穩定同時也是突變與治療逃逸的來源。

## Documents

- （尚無文件註記）

## Connections

- [[CENP-A]] / [[Centromere]] / [[Pericentromeric Satellite Repeats]] — 著絲點所依附的染色質基礎
- [[Microtubule]] / [[KIF5B]] / [[Condensin]] — 著絲點所連接的紡錘體機械
- [[Spindle Assembly Checkpoint]] / [[Mad2]] / [[BubR1]] — 駐留於未附著著絲點的檢查點
- [[Anaphase Promoting Complex-Cyclosome]] / [[Securin]] / [[Separase]] — 被檢查點延遲的下游事件
- [[Mitosis]] / [[Cell Division]] / [[Cell Cycle]] / [[Sister Chromatids]] — 所處的過程脈絡
- [[Aneuploidy]] / [[Genomic Instability]] / [[Micronuclei]] — 著絲點失效的後果
- [[Cancer]] — 缺陷與抗有絲分裂治療的疾病脈絡
- [[Cellular Senescence]] / [[DNA Damage]] — 與著絲點完整性交互作用的檢查點
- [[Chromatin]] / [[Chromosome]] — 組裝的基質與脈絡

## Linking Summary

- 2026-11-01：建立 zh-TW 譯本。
