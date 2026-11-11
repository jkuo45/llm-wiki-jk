---
title: GTPase
description: 鳥嘌呤核苷酸結合蛋白超類，藉由 GTP 結合與 GDP 結合狀態間的循環，把受體或機械輸入轉為細胞輸出，涵蓋 Ras、Rho、Rab、Arf 與 dynamin 家族。
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [protein, gtpase, signaling]
url: #
source: #
aliases: [Guanine nucleotide-binding protein, GTP-binding protein, GTPase superclass, GTP 酶]
---

# GTPase（GTP 酶）

**GTPase**指結合鳥嘌呤核苷酸、作為分子開關的蛋白超家族。持有[[GTP]]時為「開」，持有 GDP 時為「關」；GTP 水解的能量使開關足以驅動輸出。GTPase 是細胞快速可逆訊號傳遞的通貨，也在膜重塑中擔任機械馬達。

## 結構

典型小 GTPase（約 20–25 kDa）具：

- **P-loop（Walker A）motif** — GxxxxGK[ST] 序列，結合鳥嘌呤核苷酸的磷酸基。
- **Walker B 與 switch I／switch II** — 在 GTP 與 GDP 狀態間重排，形成效應子與 GTPase 活化蛋白的結合面。
- **G4 四聯體** — 接觸鳥嘌呤鹼基的殘基；水解需鎂離子配位。

較大的 GTPase（Ras 家族部分成員、dynamin、三聚體 G 蛋白 α 次單元）另具效應子結合區、膜標的脂質修飾（CAAX motif）或額外催化模組。

## 機制：核苷酸循環

1. **交換**：鳥嘌呤核苷酸交換因子（GEF）使 GDP 結合口袋不穩定，豐富的胞質 GTP 取代 GDP。
2. **效應子**：GTP 結合態暴露 switch I 與 switch II，招募激酶、支架蛋白、其他 GTPase 的 GEF 或膜重塑機器。
3. **水解**：GAP 提供催化性精胺酸並穩定過渡態以加速水解，將活化態轉回不活化態。Ras 與三聚體 α 次單元本身水解極慢而依賴 GAP；多數 Rab 蛋白水解則快速。
4. **重置與再定位**：GEF 亦把 GTPase 帶往目標膜，使「開/關」與「在哪裡」耦合。

## 家族概覽

- **Ras 家族** — [[RAS]]及相關蛋白（Ras、Rap、Rin、Ral、Rheb）把促分裂與生長因子訊號傳往[[ERK Signaling|ERK]]與[[PI3K-Akt Signaling|PI3K-Akt]]；致癌性 RAS 是人類癌症最常見的突變致癌基因。
- **Rho 家族** — [[RhoA]]、[[Rac1]]、[[Cdc42]]控制肌動蛋白架構、黏附、極性與[[Cell Migration]]；RhoA 經[[ROCK]]產生肌凝蛋白收縮力，Rac 與 Cdc42 驅動突出。
- **Rab 家族** — [[Rab5]]（早期內體）、[[Rab7]]（晚期內體/溶體）、[[Rab8]]定義膜身分，是[[Membrane Trafficking]]的基礎；Rab 轉換支撐[[Autophagy]]與溶體再生。
- **Arf 家族** — [[Arf1]]於高基氏體與內體招募外套蛋白與脂質修飾酶，驅動膜彎曲。
- **Dynamin 家族** — [[Dynamin]]與 mitofusin [[MFN1]]／[[MFN2]]是切斷膜的機械化學 GTPase，包括[[Mitochondrial Fission]]。
- **異三聚體 G 蛋白** — α 次單元本身即 GTPase，由 G 蛋白偶聯受體切換，把[[G Protein-Coupled Receptor|GPCRs]]與腺苷酸環化酶、磷脂酶 C 耦合。
- **轉譯因子** — EF-Tu、EF-G 與起始因子驅動核糖體循環。

## 生理功能

GTPase 組織幾乎所有快速細胞行為：受體訊號傳遞、膜運輸、細胞骨架、細胞分裂與轉譯。其優勢在於開關快速、可逆且可**放大**：一個活化態 GTPase 在關閉前可活化多個效應子分子。因此 GTPase 訊號失控是常見的致病途徑。

> [!info] 開關即放大器
> 酵素循環的時間常數決定訊號持續多久；GAP 與 GEF 的相對活性因此比 GTPase 本身更能決定輸出強度。

## 病理與臨床關聯

- **癌症**：RAS 家族活化突變與抑制性 GAP 缺失（如 NF1）是常見致癌事件；Rho 家族過度活化驅動侵襲與轉移。
- **免疫缺陷**：GTPase 缺陷（Chediak–Higashi 症候群的 Rab27A、Wiskott-Aldrich 症候群的 Cdc42 與 WASP）破壞溶體運輸、去顆粒與免疫。
- **神經退化**：Rab 與 Rho GTPase 運輸改變造成軸突運輸失敗；mitofusin/dynamin 介導的裂變缺陷與[[Neurodegeneration]]及[[Parkinson's Disease]]相關。
- **代謝疾病與老化**：粒線體 GTPase 參與粒線體品質控制網絡，其功能障礙與[[Cellular Senescence]]、[[Reactive Oxygen Species]]及[[Autophagy]]受損耦合。
- **藥理**：farnesyltransferase 抑制劑（針對 Ras 加工）、Rho 家族與 Rheb 的小分子抑制劑，以及抗病毒藥 ribavirin（經宿主酵素）皆以此類蛋白為標的。

## Documents

- （尚無文件註記）

## Connections

- [[GTP]] — 水解驅動開關的核苷酸
- [[GAP]] — 加速水解的 GTPase 活化蛋白家族
- [[RAS]]／[[RhoA]]／[[Rac GTPase]]／[[Rac1]]／[[Cdc42]]／[[Arf1]] — 主要小 GTPase 家族
- [[Rab5]]／[[Rab7]]／[[Rab8]] — 定義內膜身分的 Rab 家族
- [[Dynamin]]／[[MFN1]]／[[MFN2]]／[[Mitochondrial Fission]] — 機械化學 GTPase
- [[G Protein-Coupled Receptor]]／[[GbetaL]] — 異三聚體 G 蛋白訊號
- [[Membrane Trafficking]]／[[Vesicle Transport]]／[[Autophagy]]／[[Endocytosis]] — 建立於 GTPase 開關上的運輸過程
- [[ERK Signaling]]／[[PI3K-Akt Signaling]]／[[ROCK]] — 效應子級聯
- [[Cancer]]／[[Oncogene]]／[[Genomic Instability]] — GTPase 失調的疾病脈絡
- [[Reactive Oxygen Species]]／[[Cellular Senescence]]／[[Neurodegeneration]]／[[Parkinson's Disease]] — 下游與年齡相關後果

## Linking Summary

- 2026-11-01：建立 zh-TW 譯本。
