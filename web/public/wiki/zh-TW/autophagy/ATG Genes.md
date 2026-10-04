---
title: ATG 基因
description: ATG 基因編碼自噬的核心機制，最初在酵母菌中被發現並命名為 Apg/Nir/Atg；人類約 35 個 ATG 基因編碼 ULK1、III 型 PI3K 與類泛素接合系統，負責自噬體的建構、封閉與運送。
protected: false
created: 2026-10-01
updated: 2026-10-02
tags:
  - gene
  - autophagy
  - protein
aliases: [ATG genes, Autophagy genes, Apg genes, ATG family, 自噬基因]
---

# ATG 基因

**ATG 基因**是編碼 [[Autophagy]] 核心機制的基因。此基因群是在 *Saccharomyces cerevisiae* 中透過突變篩選所定義：分別篩出自噬缺陷突變體（Apg）、在缺乏液泡蛋白酶活性下仍可自噬的突變體（Nir），最後統一在 **ATG** 命名法之下；哺乳類的直系同源基因於 1993 年被辨識，此後功能保守性已透過系統性基因敲除加以檢驗。ATG Essential 功能喪失在小鼠中通常可耐受到斷奶期，之後則致命，並可預測性地造成神經退化、免疫缺陷與腸道疾病。

> [!info] 命名慣例
> 基因與蛋白質符號在哺乳類／脊椎動物的用法為 **ATG#**，在酵母菌的用法為 **Atg#**。有數個符號有早於此慣例的公認別名：ATG1 = ULK1、ATG4 = ATG4D、ATG8 = LC3/GABARAP、ATG9 = ATG9A、ATG14 = ATG14L（Barkor）、ATG6 = BECN1（Beclin 1）。

## 依步驟劃分的核心機制

**起始（營養感測與貨物招募）**——ULK1/ATG13/FIP200/ATG101 複合體在 [[mTORC1]] 受抑制且 AMPK 活化時於 [[ULK1]] 支架上組裝；酵母菌中對應的是 Atg1–Atg13–Atg17 加上 Svp38/Scf38 複合體。

**成核**——III 型 PI3K 複合體 I（VPS34/PIK3C3–VPS15–[[Beclin1]]–[[Atg14]]）在 [[Phagophore Assembly Site]] 上產生磷脂肌醇三磷酸，招募 WIPI 蛋白質。複合體 II 以 UVRAG 取代 Atg14，位於內體——因此 ATG14 次單元決定了自噬與內體的專一性。

**延長**——兩套類泛素接合系統平行運作：
- ATG12–ATG5/ATG12–Atg16L1 複合體，由 [[Atg7]]（E1 類）與 Atg10（E2 類）作用於 [[Atg12]] 與 [[Atg5]] 所形成。
- 由 [[Atg7]] 與 [[Atg3]] 將 LC3/GABARAP 接合到磷脂乙醇胺上，這兩個步驟則由蛋白酶 [[Atg4]] 去接合再重新接合。

**封閉與運送**——外層自噬體膜上的 [[Atg8]]/LC3 招募 SNARE 機制，與 [[Lysosome]] 進行 [[Autophagosome-lysosome fusion|融合]]；[[Atg9]]、[[Atg18]]/WIPI 與 Atg2 提供擴展所需的膜與脂質。

## 調節

- [[mTORC1]] 與 AMPK 會匯聚到 ULK1；AMPK 對 ULK1–ATG13–FIP10 複合體的磷酸化會活化起始，而 mTORC1 的磷酸化則抑制它。
- ATG8/LC3 系統可作為流量報告器：在有無溶酶體阻斷下 LC3-II 的累積，可區分自噬體生成增加與清除受損。
- 轉譯後調控（磷酸化、泛素化、乙醯化）會微調各個複合體；例如 ATG4D 受 Dpf1–FAM176A 開關調控，決定 LC3 脂化是否進行。

## 非典型功能

並非所有 ATG 依賴性的自噬都會降解貨物：脂滴自噬（lipophagy）、異噬（xenophagy）、聚集體自噬（aggrephagy）、粒線體自噬（[[Mitophagy]]）與內質網自噬（ER-phagy）使用相同的核心機制搭配不同的受體；所謂「非典型」功能則包括 LC3 相關的吞噬作用（LC3-associated phagocytosis, LAP）、CASM 介導的單層膜囊泡分泌，以及分泌性自噬。

## 病理與治療

ATG 缺乏或失調與發炎性腸病（尤其 Crohn's disease 中的 ATG16L1 變異）、神經退化、感染易感性、老化與癌症有關；其中自噬在早期具腫瘤抑制作用，在後期則支持腫瘤。藥理學上，VPS34 與 ULK1 抑制劑（包含臨床階段的 ULK1 抑制劑 DCC-3116）可阻斷此機制，而透過 [[Rapamycin]]、[[Trehalose]] 與抑制 [[mTORC1]] 的間接誘導則可提高自噬流量。

## 文件

提及此實體的文件列表

- [[_document_ - rubinsztein2011_autophagy_and_aging|Autophagy and aging (Rubinsztein et al.)]] — sets out the ATG machinery (Vps34–Beclin 1/Atg6–Atg14–Vps15, Atg1/ULK1–FIP200–Atg13, the Atg12–Atg5–Atg16 and Atg7/Atg3 LC3 conjugation reactions) and shows that ATG protein expression falls with age while ATG loss-of-function shortens lifespan in yeast, worms and flies.

## 連結

- [[Autophagy]]——ATG 基因即自噬的機制；個別的 ATG 筆記是這個樞紐的組成元件。
- [[ULK1]]——ATG1/ULK1 是整合營養與能量狀態並啟動自噬體形成的絲胺酸／蘇胺酸激酶。
- [[Beclin1]]——ATG6/Beclin 1 是 III 型 PI3K 複合體的支架，其與 Bcl-2 家族蛋白質的交互作用決定了自噬—凋亡的轉換開關。
- [[Atg14]]——ATG14 是將 III 型 PI3K 複合體限制於自噬體的次單元，用以區別於內體的複合體 II。
- [[Atg7]]——ATG7 是 ATG12-ATG5 與 LC3/GABARAP 兩套接合系統共用的 E1 類酵素，因此在這兩個步驟中自噬體形成皆需要它。
- [[Atg5]]——ATG5 在第一套接合系統中與 ATG12 及 ATG16L1 配對，該系統決定自噬體的成熟，也具有非自噬的支架角色。
- [[LC3]]——ATG8/LC3/GABARAP 與磷脂乙醇胺的接合，是全領域用來判讀自噬活性的指標。
- [[p62]]——p62 是研究最透徹的選擇性自噬受體，將多泛素化貨物連結到由 ATG 建構的自噬體。
- [[Mitophagy]]——粒線體自噬利用 ATG 機制清除受損的粒線體，因此 ATG 基因對非選擇性與選擇性自噬皆屬必要。
- [[mTORC1]]——mTORC1 是 ATG 起始複合體的主要負向調節因子，這也是 [[Rapamycin]] 與營養剝奪為最強藥理自噬誘導劑的原因。

## 連結摘要
- 新增連結：[[ATG10]]、[[Atg10]]、[[Atg2]]、[[ATG16L1]]、[[ATG101]]、[[FIP200]]、[[Atg9]]、[[Atg4]]、[[Phagophore Assembly Site]]、[[LC3-associated Phagocytosis]]、[[UVRAG]]、[[ATG9A]]
- 建議建立的筆記：[[ATG10]]、[[LC3-associated Phagocytosis]]、[[Aggrephagy]]、[[Xenophagy]]
- 建議強化的強連結：[[ATG Genes]] ↔ [[Autophagy]]、[[ATG Genes]] ↔ [[Lysosome]]、[[ATG Genes]] ↔ [[Selective Autophagy]]、[[ATG Genes]] ↔ [[Aging]]