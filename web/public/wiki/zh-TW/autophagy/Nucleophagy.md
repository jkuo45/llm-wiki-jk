---
title: Nucleophagy
description: 針對核成分的選擇性自噬，由 NIX/BNIP3、FUNDC1 等外膜受體把核被膜與核質部分送入自噬體進行溶體降解。
protected: false
created: 2026-10-22
updated: 2026-11-01
tags: [process, autophagy, selective-autophagy]
url: #
source: #
aliases: [Nuclear autophagy, Nucleophagy, nuCyp2a4, 核自噬]
---

# Nucleophagy（核自噬）

**核自噬（nucleophagy）** 是針對核物質的選擇性 [[Autophagy|自噬]]：把 [[Nucleus|細胞核]] 的一部分——[[Nuclear Envelope|核被膜]] 片段、核質蛋白聚集體，甚至整個胞器——送入自噬體進行溶體周轉。概念相對年輕（2009 年正式命名），已被視為細胞最大胞器的品質管制路徑。

## 概述

核自噬屬 [[Selective Autophagy|選擇性自噬]]，貨物為核成分。機制上需要三個共同要素：辨識貨物的受體、包覆貨物的 [[Autophagosome|自噬體]]、以及送達溶體的途徑。與胞質的巨量自噬不同，它具貨物選擇性且依賴受體。

兩種形式：

- **選擇性（典型）核自噬**：受體媒介，核被膜局部或特定核體被雙膜自噬體包覆後與溶體融合。
- **巨量核自噬**：範圍更大，整個核逐步被包覆（核被膜破裂，或「瀕死細胞的核自噬」），多見於細胞死亡情境，有時由死亡受體 [[Fas]] 或 [[Caspase-8]] 依賴、但非 caspase 依賴的路徑執行。

## 機制

- **受體**：粒線體外膜蛋白 [[BNIP3]]（及同家族 [[BNIP3L]]）、核受體 [[NIX]]、缺氧敏感的 [[FUNDC1]] 均為選擇性自噬受體。各自具 LIR 模體（[[LIR Motif]]）結合自噬體膜上的 LC3；NIX 另有 BH3 結構域，可隔離 [[BCL2L13]]／Bcl-2 家族成員以活化自噬機器。
- **核被膜辨識**：酵母由核被膜蛋白 Atg39 與外膜蛋白 Atg32 驅動；哺乳類以內質網自噬（ER-phagy）受體家族（SEC24、ATL3、SEC62、TEX264）執行類比功能，而核被膜與 ER 連續，故由同一機器降解——即「經 ER-phagy 實現的核自噬」模型。
- **典型路徑**：核仁或聚集的核蛋白被雙膜自噬體包覆，再經 HOPS/SNARE 機器與溶體融合；自噬體上帶 [[LC3]] 與 [[Atg]] 蛋白，必要時以 [[p62]] 作為貨物接附蛋白。
- **LAP 與 nuCyp2a4**：LC3 相關吞噬（LAP）為非典型、不依賴 Atg 的路徑，LC3 被招募至單膜吞噬杯；源自核被膜的變體 nuCyp2a4 以單膜、部分內體的路徑把核物質送達溶體，繞過典型自噬體形成。
- **與粒線體自噬的關聯**：NIX 與 FUNDC1 同時服務核與粒線體區室，故核自噬與 [[Mitophagy|粒線體自噬]] 機制交織；同一受體用於不同位置，一條路徑受阻常影響另一條。

## 生理功能

- **核品質管制**：選擇性清除錯誤折疊或聚集的核蛋白（多麩醯胺酸擴增的 huntingtin、TDP-43、疾病性核內包涵體），維護轉錄完整性。
- **核被膜修復**：局部核自噬移除受損或氧化的核被膜片段，並參與細胞分裂時的核被膜生成與周轉、以及損傷後的核重建。
- **染色質與轉錄調控**：降解核體（含 [[Nucleolus|核仁]] 與移位至核內的壓力顆粒）可調節轉錄與核糖體生合成。
- **發育與疾病**：胚胎形成與幹細胞分化需要核自噬；其失效涉及神經退化、肌病（核被膜損傷驅動修復）與癌症（核被膜周轉改變支持腫瘤生長）。

> [!info] 受體共用
> NIX／BNIP3／FUNDC1 同為核自噬與粒線體自噬的受體，是兩條路徑互相干擾的分子基礎。

## 臨床意義

- **癌症**：多數腫瘤上調 NIX、BNIP3 或 FUNDC1 以在缺氧下存活並維持通量；另一些則關閉核品質管制以保護致癌轉錄因子。核被膜完整性也漸成為腫瘤侵襲性的讀數。
- **神經退化**：核自噬缺陷促成 [[Parkinson's Disease|帕金森氏症]] 與 [[Huntington's Disease|亨丁頓氏症]] 的核內聚集體堆積，NIX／粒線體自噬軸為治療標的。
- **老化**：核自噬能力隨年齡與整體自噬機器一同下降，加重蛋白恆定喪失；以 [[Rapamycin|雷帕黴素]] 或類 spermidine 介入恢復仍屬實驗性。
- **發炎與感染**：入侵細胞核或破壞核被膜的病原（DNA 病毒、觸發 [[Lysosomal Membrane Permeabilization]] 相關路徑的細菌）部分由核自噬處理。

## Documents

- （尚無文件註記）

## Connections

- [[Autophagy]] / [[Selective Autophagy]] / [[Macroautophagy]] — 上層程序與典型路徑。
- [[Autophagosome]] / [[Autolysosome]] / [[Autophagosome-lysosome fusion]] — 執行核貨物周轉的區室。
- [[NIX]] / [[BNIP3]] / [[BNIP3L]] / [[FUNDC1]] — 選擇核貨物的外膜受體。
- [[LIR Motif]] / [[LC3]] / [[Atg]] / [[p62]] — 受體所招募的自噬機器。
- [[Mitophagy]] — 共用受體、同一品質管制邏輯的姊妹路徑。
- [[Nuclear Envelope]] / [[Nucleus]] / [[Nucleolus]] / [[Nuclear Pore Complex]] — 貨物與受損胞器。
- [[Endoplasmic Reticulum]] — 與核被膜連續，ER-phagy 受體來源。
- [[Fas]] / [[Caspase-8]] — 通往巨量核自噬的死亡受體路徑。
- [[Cancer]] / [[Parkinson's Disease]] / [[Huntington's Disease]] / [[Rapamycin]] — 疾病與介入情境。
- [[Chaperone-Mediated Autophagy]] / [[Proteasome]] — 核蛋白的替代降解路徑。

## Linking Summary

- 2026-11-01：建立 zh-TW 譯本。
