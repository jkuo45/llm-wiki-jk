---
title: Lipid Nanoparticles
description: 脂質奈米顆粒是能夠自我組裝的奈米級脂質集合體，可將核酸與蛋白質包封其中，利用可電離脂質促成內體逃脫並將 mRNA 送達細胞質。它們是 mRNA 疫苗平台與多數已核准 RNA 治療的使能技術。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [nanoparticle, drug-delivery, lipids, biotechnology]
aliases: [LNPs, lipid nanoparticle, lipid-based nanoparticles, lipid nanocarriers]
---

# 脂質奈米顆粒

**脂質奈米顆粒（lipid nanoparticles，LNPs）**是[[Lipids|lipids]]的奈米級自我組裝集合體——通常由一種脂質、膽固醇、一種可電離胺基脂質與一種輔助磷脂組成——負責將核酸、蛋白質或小分子貨物送入細胞。它們是 mRNA 疫苗平台與多數已核准 RNA 治療的使能技術，也是為什麼在 patisiran、givosiran 等 [[siRNA]] 治療以及 mRNA COVID-19 疫苗中的 *LNP* 之所以表現得像藥物而非像核酸的原因。

## 為什麼選擇脂質

核酸體積大、親水性、對核酸酶敏感且無法穿透膜。LNP 同時解決了這四個問題。核心概念是**自我組裝**：把酸性的水溶性 RNA 與分散在乙醇中的脂質於低 pH 下混合，脂質便質子化、變得水溶，並在 payload 周圍塌陷。過程中不需要對 RNA 進行共價偶聯，而包封效率經常超過 90%。

- **大小與形狀。** 60–100 nm 的球體，與許多有包膜病毒相當，這是 LNP 給藥效率高的重要原因：可經由[[Lipoprotein Receptors|ldl-receptor-family]]介導的內吞以及吞噬細胞中的非內吞途徑攝入，且腎臟過濾極少。
- **保護作用。** 脂質外殼可阻擋血中核酸酶對貨物的降解。
- **相對於所載貨物的低先天免疫原性。** LNP 依設計本身在很大程度上不具免疫原性；RNA 疫苗的*佐劑*效應來自 RNA 以及可電離脂質自身的抗發炎調節活性，而非來自顆粒本身。
- **儲存與冷凍乾燥下的穩定性。** 這正是讓冷凍 mRNA 疫苗得以全球分送成為可能的原因，也是這些疫苗背後那項不顯而易見的工程成就。

> [!info] 為何可電離脂質占主導地位
> 早期的 LNP 使用永久帶正電的脂質，例如 DOTAP 或 DLin-MC3-DMA。永久電荷帶來高包封率與良好的內體破壞，但具有毒性——膜破壞、發炎、補體活化——而且會迅速被血清中的陰離子脂質與非專一性蛋白質吸附所中和，這正是造成清除並限制重複給藥的原因。
>
> **可電離**脂質（SM-102、ALC-0315、MC3）的創新之處在於它們**在生理 pH 下呈中性，在酸性 pH 下被質子化**。典型的可電離脂質具有 pKa 約 6.2–6.5 的三級胺，因此在血液中顆粒近乎中性、無毒且不具免疫原性；只有在內吞之後——在 pH 5.0–6.0 的內體中——才有一部分的脂質轉為陽離子。這就是**依 pH、組織與胞器區隔選擇性的活化**。

## 內體逃脫

內體逃脫仍是速率限制步驟：大多數 LNP 貨物從未逃出其內體而被降解。目前的共識機制是多種機制的組合，而非單一明確定義的事件：

1. 經由 clathrin 介導與非 clathrin 路徑的表面型內吞。
2. 可電離脂質被質子化，使顆粒帶有陽離子表面。
3. 內體的陰離子膜脂質（主要是[[Phospholipid]]磷脂醯絲胺酸）與顆粒結合，隨後 PEG-脂質置換與脂質混合便開始進行。
4. LNP 脂質與內體膜的混合——即「逆六角相」或非雙層相轉變——使內體膜失去穩定性。被質子化的脂質形成六角形 H_II 相區域，使膜拓撲反轉，並導致以非溶解性（lytic）方式將貨物釋放至細胞質。

> [!warning] 此領域的誠實現況
> 文獻在細節上並無共識。在許多細胞系統中，逃脫效率通常只有幾個百分點，而它究竟是透過膜融合、脂質混合還是暫時性孔洞形成來進行，仍有爭議。
> 逃脫也高度依賴細胞類型——在專業吞噬細胞與許多細胞株中效率很高，而在原代細胞如原代人肝細胞、T 細胞與心肌細胞中往往很差，這是體內治療的重要限制。請勿把任何單一機制示意圖當成定論。

## 組成與 PEG 的問題

四成分 LNP 是標準配置：

| 成分 | 功能 | 例子 |
| --- | --- | --- |
| 可電離胺基脂質 | 包封、內體逃脫 | SM-102、ALC-0315、MC3、ALC-0159 |
| 輔助磷脂 | 結構性脂質，穩定顆粒 | DSPC |
| 膽固醇 | 擾動脂質排列、減少脂質相分離、調節大小 | 源自酵母的膽固醇 |
| PEG-脂質 | 防止製造與儲存期間的聚集；控制大小 | DMG-PEG2000、ALC-0159 |

PEG-脂質是一把雙刃劍。它能防止藥瓶中的聚集，但重複給藥後會產生**抗 PEG 抗體**，導致加速清除與再次給藥時的過敏反應。為了降低這項問題，人們嘗試降低 PEG 含量、使用注射後可脫落的選擇性可切割 PEG-脂質，或改用其他 PEG 化化學，這些都是活躍的研究方向。

## 此領域中的其他脂質與平台

- **固體脂質奈米顆粒與奈米結構脂質載體**——以脂質基質而非脂質體的形式，提供更高的載藥量與更持久的釋放，主要應用於腫瘤學與經皮給藥。
- **脂質體形式的 anthracycline**——[[Doxorubicin]] 與 daunorubicin 被包封於 PEG 化脂質體中，設計目的是藉由把生物分布從心臟改變到腫瘤來降低心臟毒性。
- **降[[Cholesterol]]的奈米顆粒**與相關的[[Antisense Oligonucleotide]]平台。
- LNP 中的**自我增幅 RNA**與環狀 RNA，以及 [[Redox Vaccination|mRNA vaccine]]脂質部分用於瘤內與吸入給藥的脂質配方。

## 應用

- **mRNA 疫苗**——[[Shingles Vaccine|SARS-CoV-2 mRNA vaccines]]含有約 50 µg 以 LNP 包封的 mRNA，編碼帶有 N1-甲基假尿苷的棘蛋白。
- **RNA 治療**——patisiran、givosiran（siRNA）、inclisiran。
- **腫瘤學**——脂質體 doxorubicin、mRNA-2416（OX40L）與新抗原疫苗、瘤內 LNP 注射如 mRNA-2759。
- **蛋白質與小分子給藥**——包括經皮真皮 LNP 給藥與吸入型 LNP 配方。
- **工具用途**——[[Antagomirs|antagomirs]] 與 [[siRNA]] 以此方式遞送；以 LNP 遞送的小型活化 RNA 是用於[[Fibrosis|anti-fibrotic]]重編程的研究工具。

> [!warning] 臨床上的注意事項
> - **反應原性**主要可歸因於可電離脂質，在約 10–20% 的 mRNA 疫苗接種者中於數劑之後發生。它與劑量及脂質種類相關。
> - **心肌炎**在 mRNA 疫苗接種後的發生率約為 1/10,000 至 1/100,000，尤其好發於青少年與年輕男性，目前仍未獲得完整解釋；心肌中的脂質累積與經由 [[Toll-like Receptor]] 路徑的先天免疫活化是主要假說，而非已確立的機制。
> - **重複給藥**受到抗 PEG 抗體，以及部分個體的補體活化相關偽性過敏（pseudoallergy）所限制。
> - **ALC-0315 與 SM-102 的反應原性**略有差異，兩者不可互換。

## Documents

- [[Antagomirs]] — antagomir 與 siRNA 治療是最早且最重要的 LNP 遞送核酸產品之一；這個連結記錄了該平台最早的臨床驗證。

## 連結

- [[siRNA]] — LNP 包封是讓 siRNA 成為藥物的關鍵：patisiran（轉甲狀腺素蛋白澱粉樣變）與 givosiran（急性肝臟卟啉症）是臨床使用的 LNP–siRNA 偶聯物，而肝臟因具有有孔內皮與 Kupffer 細胞清除作用，是 LNP 最可靠的標的器官。
- [[Antagomirs]] — Antagomir（anti-miR）是最早的 LNP 貨物之一，而用於心臟纖維化的 [[Antagomirs|mRNA-1341]] 類構造體，是最早進入臨床的微 RNA 治療之一。
- [[Cholesterol]] — 膽固醇是四種標準 LNP 成分之一，且並非被動填充物：它限制脂質排列，進而決定顆粒大小、穩定性與逃脫效率。
- [[Nanoparticles]] — LNP 是更廣泛奈米顆粒給藥分類中的一支；本知識庫中的一般奈米顆粒文獻（金屬、聚合物、[[Ligand-conjugated Nanoparticles]]）與 LNP 所代表的自我組裝、非共價、生物相容途徑形成對比。
- [[Phospholipid]] — 提供顆粒結構骨架的輔助磷脂類（DSPC），以及與陽離子 LNP 互動、成為逃脫近因觸發器的陰離子內體磷脂。
- [[Liposomes]] — LNP 與脂質體都是脂質的自我組裝體；差別在於 LNP 是非雙層、可電離且以 PEG-脂質穩定的形式，而非典型的雙層囊泡。
- [[Shingles Vaccine]] — mRNA 疫苗平台完全依賴 LNP 給藥，而疫情規模的分送也確立了該平台所依賴的製造能力與冷鏈工程。
- [[Cardiotoxicity]] — 脂質體形式的 anthracycline 正是為了把藥物暴露與心肌組織解耦而設計；這是配方與毒性之間一個已確立良好的連結。
- [[Doxorubicin]] — 脂質體貨物的典範，也是 PEG 化脂質體 doxorubicin 的心臟毒性明顯低於游離藥物的原因。
- [[Fibrosis]] — 以 LNP 遞送的小型活化 RNA 將活化成纖維母細胞重新編程回靜止狀態，是一項活躍的抗纖維化策略。
- [[Toll-like Receptor]] — 可電離脂質以及 LNP 本身在數種情境下都透過 TLR4 與 TLR2 傳遞訊號，同時促成佐劑效應與反應原性。
- [[Antisense Oligonucleotide]] — [[siRNA]] 與反義寡核苷酸是最常見的 LNP 貨物，而 mRNA、siRNA 與反義平台之間共享相同的化學架構。

## 連結摘要

- 新增連結：[[Lipids]]、[[siRNA]]、[[Nanoparticles]]、[[Cholesterol]]、[[Phospholipid]]、[[Antisense Oligonucleotide]]、[[Redox Vaccination]]、[[Shingles Vaccine]]、[[Fibrosis]]、[[Toll-like Receptor]]、[[Doxorubicin]]、[[Liposomes]]
- 建議建立的新實體註記：[[Ionizable Lipid]]、[[SM-102]]、[[ALC-0315]]、[[MC3]]、[[DLin-MC3-DMA]]、[[Endosomal Escape]]、[[Anti-PEG Antibody]]、[[Patisiran]]、[[Givosiran]]、[[DSPC]]、[[Pegylated Liposomes]]、[[Solid Lipid Nanoparticles]]、[[Soluble Interferon]]、[[mRNA Vaccine]]、[[Cationic Lipid]]、[[DOTAP]]、[[Liposomal Doxorubicin]]、[[LNPs]]、[[Lipoprotein Receptors]]
- 應強化的重點連結：[[Lipid Nanoparticles]] ↔ [[siRNA]]、[[Lipid Nanoparticles]] ↔ [[Nanoparticles]]、[[Lipid Nanoparticles]] ↔ [[Antagomirs]]
