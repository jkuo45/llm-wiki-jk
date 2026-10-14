---
title: EGF
description: 表皮生長因子是 EGF module 家族的 53 胺基酸、6 kDa 分泌性胜肽，也是 EGFR/ErbB 受體酪胺酸激酶系統的創始配體；它在上皮驅動增殖、分化與存活，其失調則同時推動 SASP 分泌與腫瘤生長。
protected: false
created: 2026-10-01
updated: 2026-10-02
tags: [growth-factor, protein, signaling]
aliases: [EGF, 表皮生長因子, Epidermal Growth Factor, EGF1]
---

# EGF

**表皮生長因子（EGF）**是由 53 個殘基組成、約 6 kDa 的分泌性胜肽，1961 年由 Stanley Cohen 在小鼠頜下腺進行神經生長因子研究時發現——這項連同其受體的發現開創了受體酪胺酸激酶（RTK）領域。它是活化 EGFR/ErbB 家族七種配體的原型成員，也是結構保守的 **EGF module** 的創始成員。

## 結構與加工

功能性核心是一段約 40 個殘基的 **EGF module**，由六個半胱胺酸以固定間距排列（CX7 CX4-5 CX10-13 CXCX8 C）並形成三個雙硫鍵；環 B 與環 C 之間的單一「鉸鏈」殘基使這兩段能相對移動。成熟胜肽是由大得多的前驅物（>1200 個殘基）經 **ADAM** 金屬蛋白酶的胞外區域剪切而釋放，主要由 [[ADAM17]] 與 [[ADAM10]] 執行。

> [!info] 同一前驅物的四種訊號傳遞模式
> 由於剪切是受調控而非持續進行的，EGF 家族配體以四種模式傳遞訊號：**內分泌**、**旁分泌**、**自體分泌**與**接觸型**（未剪切的膜錨定前驅物與鄰近細胞的受體接觸）。配體的身分部分決定了模式——小鼠中不可剪切的 HB-EGF 會造成嚴重心衰竭與瓣膜擴大，類似完全敲除的表型。

EGF 在唾液、乳汁、膽汁與尿液中含量豐富（50–500 ng/mL），在血漿中則偏低。它是牙齒、皮膚、胃腸道、腦與生殖道正常形態發育所必需，也是經典小鼠唾液腺切除與眼球切除實驗的基礎。

## 作用機制

EGF 與 [[EGFR]]（ErbB1/HER1）的胞外區域結合，穩定受體的一種構形，使受體的二聚化臂外露。配體誘發的同型或異型二聚化（與 [[HER2]]、ErbB3 或 ErbB4）會形成**不對稱激酶二聚體**，其中活化端激酶以異位（allosteric）方式刺激接受端激酶，後者再進行交互磷酸化 C 端酪胺酸殘基。這些磷酸酪胺酸會停靠接合蛋白與效應蛋白，啟動 [[MAPK Signaling]]、[[PI3K-Akt Signaling]] 與 JAK-STAT 訊號輸出。

> [!important] 配體身分決定受體命運
> EGF 與其同源配體並不可互換。由於配體—受體複合體在內體中的分選方式不同——結合 EGF 的 EGFR 會被降解，結合 TGF-alpha 的 EGFR 則被回收——同一個受體會依結合的是哪一個配體而產生不同的訊號強度。這正是 EGFR 配體之間「功能選擇性」的基礎。

EGF 訊號傳遞上調與[[Lung Cancer]]、[[Colorectal Cancer]]、[[Glioblastoma]]、[[Pancreatic Cancer]]有關，也與銀屑病、阿茲海默氏症與思覺失調症等非惡性疾病有關。

## 治療關聯

配體豐度與受體激酶活性是可分離的，因此衍生出兩種抗 EGF 策略：**配體阻斷**與**受體阻斷**。[[Cetuximab]] 等抗體在胞外區域進行競爭，而小分子酪胺酸激酶抑制劑——[[erlotinib]]、gefitinib——則占據細胞內的 ATP 結合位。EGFR 過度表現也可被間接利用：[[miR-7]] 主要透過抑制 EGFR 的轉譯來限制增殖。EGF 本身作為傷口癒合劑也有悠久的臨床歷史，且有報告指出尿液 EGF 是慢性腎臟病進展的獨立風險因子。

> [!warning] EGF 與衰老
> EGF 也是 [[SASP]] 的組成之一。衰老纖維母細胞會分泌 EGF，與 [[VEGF]]、[[Amphiregulin]] 及 HGF 並列，而 SASP 一律具有**促血管新生**性——血管生成抑制因子明顯缺席。這是衰老細胞雖已不再分裂卻仍能推動腫瘤血管化的一條途徑。

## 文件
- [[_document_ - The Senescence-Associated Secretory Phenotype The Dark Side of Tumor Suppression|SASP: The Dark Side of Tumor Suppression]] — tabulates EGF among the secreted growth factors of the SASP and documents its uniformly pro-angiogenic profile.

## 連結
- [[EGFR]] — EGF 的專一性受體，也是 ErbB RTK 家族的創始成員；配體結合使受體由自體抑制的單體轉為活化的不對稱激酶二聚體。
- [[Amphiregulin]] — AREG 是 SASP 中另一個 EGF module 配體，也是衰老情境下研究最透徹的 EGFR 配體；它活化同一個受體，但分選行為不同且親和力較低。
- [[ADAM17]] — 執行 EGF 家族前驅物大多數胞外區域剪切的金屬蛋白酶，因此間接決定可用的可溶性生長因子量。
- [[Receptor Tyrosine Kinases]] — EGF/EGFR 這對組合建立了整個 RTK 訊號傳遞典範；多數 RTK 相關筆記都由它推廣而來。
- [[Cortactin]] — Cortactin 自身的連結清單將 EGF 訊號傳遞列為匯入肌動蛋白重塑的上游輸入之一，與 VEGF、PAK1 並列。
- [[SASP]] — 衰老細胞將 EGF 作為其分泌表型的一部分分泌，這正是靜止細胞促進血管新生與鄰近細胞旁分泌性增殖的方式。
- [[ADAM10]] — 第二個主要的胞外區域剪切酵素；在小鼠中，兩種蛋白酶任一缺失都會表型模擬配體部分不足。

## 連結摘要
- 新增連結：[[EGFR]]、[[Amphiregulin]]、[[ADAM17]]、[[ADAM10]]、[[Receptor Tyrosine Kinases]]、[[Cortactin]]、[[SASP]]、[[Cetuximab]]、[[erlotinib]]、[[miR-7]]、[[MAPK Signaling]]、[[PI3K-Akt Signaling]]、[[HER2]]、[[Lung Cancer]]、[[Colorectal Cancer]]、[[Glioblastoma]]、[[Pancreatic Cancer]]、[[VEGF]]
- 建議建立的筆記：[[Grb2]]、[[Transforming Growth Factor-alpha]]、[[Epiregulin]]、[[Betacellulin]]、[[ErbB4]]、[[Neuregulins]]、[[Gefitinib]]、[[Osimertinib]]、[[Submandibular Gland]]
- 建議強化的強連結：[[EGF]] ↔ [[EGFR]]、[[EGF]] ↔ [[SASP]]
