---
title: Fas
description: Fas（CD95／APO-1／FasR／TNFRSF6）是 TNF 超家族死亡受體，與 FADD 及 Caspase-8 組裝 DISC 以啟動外在凋亡；當 Caspase-8 被阻斷時，訊號轉向 RIPK1/RIPK3/MLKL 壞死性凋亡。
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [receptor, apoptosis, cell-death, immunology]
url: #
source: #
aliases: [CD95, FasR, TNFRSF6, APO-1]
---

# Fas

## 概述

**Fas**（CD95，又稱 FasR、TNFRSF6、APO-1）是 TNF 受體超家族中死亡受體亞群的典型成員。它是第一型跨膜糖蛋白，被配體[[FasL]] 結合後傳遞外在凋亡訊號，也是少數能將細胞激素訊號直接轉為執行型 caspase 活化的受體之一。Fas 位於三種過程的交會處：典型外在[[Apoptosis|凋亡]]、caspase 分支受阻時啟動的[[Necroptosis|壞死性凋亡]]開關，以及由細胞毒性淋巴球維持的免疫恆定。

## 結構與結構域

Fas 是 335 個殘基的第一型膜蛋白，具胞外富含半胱胺酸配體結合結構域（三個富含雙硫鍵的 CRD 模組）與單一跨膜螺旋。胞質尾端含**死亡結構域（DD）**，約 80 個胺基酸，透過同型交互作用招募訊號銜接蛋白。與 [[TNFR1]] 不同，Fas 的死亡結構域是受體的構成部分，而非附加於 C 端的模組，因此其訊號複合體較簡單，且在配體結合後自發形成。

## 機制與途徑

- **DISC 組裝**：三聚體 [[FasL]] 結合 Fas 使胞內尾端聚集，銜接蛋白 [[FADD]] 以自身的死亡結構域停泊，pro-caspase-8 再經死亡效應結構域結合 FADD。形成的 [[DISC]] 引發[[Caspase-8]] 的近接誘導自體活化。
- **執行**：活化態 Caspase-8 直接切割執行型 caspase（[[Caspase-3]]、[[Caspase-7]]），或切割 [[Bid]] 以啟動粒線體放大迴路，把有限的外在訊號轉為完整的内在凋亡程式。
- **壞死性凋亡開關**：當 Caspase-8 活性被藥理（如 [[Z-VAD-FMK]]）或基因方法阻斷，Fas 訊號改走 RIPK1–RIPK3 壞死小體，磷酸化 [[MLKL]] 並執行[[Necroptosis|壞死性凋亡]]。Caspase-8 因此是壞死小體的煞車，其缺失在 caspase-8 缺陷動物中造成致命的 RIPK1/RIPK3 依賴性發炎。

> [!info] Caspase-8 作為命運選擇者
> 同一 Fas/FasL 輸入在有 Caspase-8 時走向凋亡、缺失時走向壞死性凋亡——這與紅血球中[[Erythronecroptosis]] 與[[Eryptosis|eryptosis]] 之間的二元邏輯相同。

## 生理功能

Fas 構成性表現於多數有核細胞，對長期受刺激之 T 細胞的活化誘導性細胞死亡、[[Natural Killer Cells|自然殺手細胞]]與細胞毒性 T 細胞清除病毒感染與轉化細胞，以及眼、睪丸與胎盤的免疫豁免維持皆為必需。在成熟[[Erythrocytes|紅血球]]中，Fas 是少數被保留的死亡受體型蛋白之一，Fas/FasL 交互作用是 eryptosis 與 erythronecroptosis 公認的誘導路徑。

## 病理與臨床意義

- **癌症**：Fas 表面表現喪失、*FAS* 突變與誘餌受體上調，是腫瘤在[[Cancer|癌症]]、白血病與子宮頸癌中逃避免疫毒殺最被了解的機制之一；反之 Fas 表現標記化療敏感性，其下調常伴隨後天性藥物抗性。
- **自體免疫**：Fas/FasL 訊號缺陷造成自體免疫淋巴增生症候群，表現為淋巴結腫大、脾腫大與自體抗體生成。
- **治療**：Fas 標的促效受制於 FasL 半衰期短與正常組織毒性；此路徑改以間接方式利用，例如在具抗性的腫瘤中經 [[SHP1]] 去磷酸化恢復 Caspase-8 活性。

## Documents

- [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer: from pathogenesis to treatment]] — Fas（CD95）與 TNFR1 同列為經典死亡受體。
- [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]] — Fas 作為外在途徑的細胞表面觸發者。

## Connections

- [[FasL]] — 其三聚化使 Fas 聚集並成核 DISC 的配體
- [[FADD]] — 在 DISC 上橋接 Fas 與 pro-Caspase-8 的銜接蛋白
- [[Caspase-8]] — 起始型 caspase，也是阻止壞死性凋亡的煞車
- [[RIPK1]]／[[RIPK3]]／[[MLKL]] — Caspase-8 受阻時啟動的壞死小體分支
- [[Necroptosis]] — 缺乏 Caspase-8 時 Fas 訊號的替代命運
- [[Apoptosis]]／[[Extrinsic Pathway]] — Fas 活化的經典結果
- [[Erythrocytes]]／[[Erythronecroptosis]]／[[Eryptosis]] — 共用 Fas/FasL 進入點的紅血球死亡模式
- [[Cancer]] — 經 Fas 喪失與誘餌受體上調的腫瘤逃逸
- [[Bid]] — 被 Caspase-8 切割以連結外在與粒線體途徑

## Linking Summary

- 由 `src/notes/cancer/` 遷移至 `src/notes/cell-death/`（死亡受體核心機器），內容擴充至完整實體深度。
- 待補連結：[[Death Domain]]、[[Autoimmune Lymphoproliferative Syndrome]]
- 建議強化：[[Fas]] ↔ [[FasL]]、↔ [[Caspase-8]]、↔ [[Necroptosis]]
- 2026-11-01：建立 zh-TW 譯本。
