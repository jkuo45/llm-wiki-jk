---
title: E3 Ubiquitin Ligase
description: 泛素化級聯反應中第三個、負責選擇受質的酵素，人類基因組中編碼有超過 600 種。E3 連接酶決定哪一個蛋白質被修飾、以及使用何種泛素鏈拓撲，並可分為結構上各異的家族（RING、RBR、HECT），它們直接或經由共價酵素中間體轉移泛素。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein-class, ubiquitin, proteostasis, enzymology, cell-signaling]
aliases: [E3 ligase, Ubiquitin-protein ligase, E3 ubiquitin ligases, Ubiquitin ligases]
---

# E3 泛素連接酶

**E3 泛素連接酶（E3 ubiquitin ligases）**是[[Ubiquitination]]級聯反應中最後且數量最多的酵素。在三個步驟中——由[[Ubiquitin-Activating Enzyme E1]]活化、由[[Ubiquitin-Conjugating Enzyme E2]]接合、再由 E3 轉移至受質——E3 提供的是專一性。人類基因組編碼了超過 600 種 E3，而如今「可成藥蛋白組」中有很大一部分是由 E3 及其轉接蛋白構成的。

> [!info] 重點
> E1 與 E2 步驟是通用的。E1 數量很少（人類有兩種），E2 約 30 種。真正指定受質選擇、細胞內位置與鏈拓撲的是 E3。單一 E3 的缺失通常會產生特定且界定清楚的表型——這正是 E3 作為藥物標的具有吸引力的原因；反過來說，也正因如此，許多 E3 生物學知識僅由功能缺失表型而來。

## 依機制劃分的家族

E3 家族的劃分依據是泛素*如何*到達受質：

- **RING**（人類有超過 600 種，包含 U-box 蛋白——它們類似 RING 但缺乏典型的鋅配位基序）。RING 結構域同時結合受質與 E2~泛素，作為支架使兩者靠近，並以單一步驟將泛素**直接**由 E2 轉移至受質的離胺酸。無共價中間體。RING 又可分為單體型（COP1、[[MDM2]]、TRAF6）與多亞基 Cullin–RING 連接酶（CRLs），其中[[SCF Complex]]是原型，而[[Anaphase Promoting Complex-Cyclosome]]是其中最大的。[[TRIM2]]與[[Trim17]]是三部分基序（tripartite-motif）家族的 RING 型 E3。
- **RBR**（人類有 14 種，包含 ARIH1、ARIH2、[[Parkin]]、RNF14、RNF31）。在機制上是**混合型**：RING1–IBR–RING2 的三部分架構先結合 E2~Ub，再將其轉移至**RING2 中的催化半胱胺酸**（Parkin 為 C431），之後才轉移至受質——即類似 HECT 的兩步化學反應——而 RING1/IBR 這一半則賦予類似 RING 的 E2 活化能力。RBR 與**線型（M1 連結）泛素鏈**高度相關，其訊號角色與 K48 降解鏈不同。
- **HECT**（人類有 28 種，包含 Nedd4 家族）。先在催化半胱胺酸上以兩步轉硫酯化（transthiolation）形成泛素硫酯中間體，再對受質進行親核攻擊。泛素化嚴格要求先經 E1–E2–E3 裝載，因此 HECT E3 是一個**分子計時器**——讓泛素化成為 E3 停留時間的函數，而不僅僅是 E3 佔位程度的函數。

> [!warning] 家族界線並非總是乾淨
> 有些連接酶結合了多種基序（RBR，以及「RCR」／其他非典型家族），隨著更多結構被解析，分類正在修訂。正如一篇 2026 年的評述所指出的，四家族架構（RING、HECT、RBR、RCR）加上非典型家族是有用的初步切分，而非已定案的分類。

## 泛素密碼

E3 所決定的不只是*哪一個*蛋白質，還有*哪一種*泛素修飾：

- **K48 polyUb 鏈** → 由[[Proteasome]]辨識 → 降解。
- **K11 鏈** → 蛋白酶體降解，並透過 APC 在有絲分裂細胞週期調控中扮演重要角色。
- **K63 鏈** → 非降解性：訊號傳遞、DNA 損傷反應、胞吞、[[Autophagy]]受體功能。
- **線型（M1）鏈** → 主要由 LUBAC 複合體（HOIP/HO1/SHARPIN）產生，非降解性，具有獨特的 NF-κB 與自噬角色。
- **單泛素化與短的多單泛素化** → 運輸（胞吞、溶酶體分選）而非破壞。

由於同一個 E3 可以在不同條件下對不同受質構建不同的鏈，「E3」並不是固定的功能。泛素化也可透過 [[USP9X]] 與 [[USP30]] 等去泛素化酶逆轉，這使它是一層訊號，而不是單向的廢棄物滑道。

## 疾病與治療

- **神經退化。** [[Parkin]]（PARK2）突變是早發型[[Parkinson's Disease|recessive Parkinson's disease]]最常見的成因；RBR 連接酶失效 → 粒線體自噬失效。[[HUWE1]]與[[RNF168]]分別將 E3 連結到神經發育疾病與 DNA 損傷疾病。
- **癌症。** [[MDM2]]使[[p53]]泛素化；這條軸是腫瘤學中最成功的藥物標的之一，儘管直接抑制 MDM2 受到心臟毒性與耐藥路徑的限制。
- **免疫。** TRIM 家族成員（[TRIM2]]、[[Trim17]]、[[TRIM21]]）在抗病毒防禦與抗原呈現中居於核心地位。
- **代謝疾病。** E3—轉接蛋白介面是肥胖與糖尿病藥物發現的焦點。
- **標靶策略。** 對 E3 的成藥有兩種方式：佔據其受質結合位（阻斷 E3—受質介面），或以[[PROTAC]]劫持其催化位：PROTAC 是一種雙功能分子，能將特定 E3 招募至目標蛋白，把可被劫持的 E3 轉變成運送載體。一篇 2023 年的評述（Exp Mol Med）將 E3 及其轉接蛋白框定為特別針對代謝疾病的新興治療類別。

> [!warning] 臨床注意事項
> 「E3 可成藥」是一個假設，而不是一項結果。E3—受質介面往往又大又平坦，而佔據它的小分子結合劑必須具選擇性地結合，同時不干擾該 E3 的其他受質。PROTAC 有紀錄齊全的體內失效模式——鉤狀效應（hook effect）、分子量過大限制組織穿透，以及快速清除。關於 E3 功能的多數人類遺傳學證據來自生殖系敲除與低效等位基因，而它們很少能預測成人在藥理學抑制下的表現。

## Documents

提及此實體的文件清單

- [[Anaphase Promoting Complex-Cyclosome]] — 一個多亞基 Cullin–RING E3；細胞週期 E3 的原型，並示範 E3 可以是大型、有序的多蛋白機器，而非單一蛋白。
- [[TRIM2]] — TRIM 家族中的三部分基序 RING E3；最大 E3 子群的成員，也是抗病毒效應器。
- [[Trim17]] — TRIM 家族的另一個 RING E3，參與抗病毒免疫訊號。
- [[Ubiquitin Ligase]] — 本知識庫關於泛素連接酶概念的通用註記；本註記專門涵蓋 E3 這一層。
- [[Proteasome]] — K48／K11 鏈的下游讀取者；E3—蛋白酶體軸是此系統的核心降解邏輯。
- [[Ubiquitination]] — 該修飾本身以及鏈拓撲密碼。
- [[Parkin]] — 特性最明確的 RBR E3，也是 RBR 在機制上之所以不同於僅屬分類學獵奇的原因。
- [[SCF Complex]] — Cullin–RING 連接酶的原型，也是與 APC 構成典型細胞週期破壞配對的另一半。

## 連結

- [[Ubiquitin]] — 連接酶的受質，也是 E3 的專一性為何以密碼（鏈連結、多重性）而非單純「開／關」形式表現的原因。
- [[Ubiquitination]] — E3 是此反應中決定專一性的步驟；若沒有 E3，泛素化將無所選擇。
- [[Proteasome]] 與[[Ubiquitin-Proteasome System]] — E3 是路由決策，把特定蛋白質送往特定的降解命運。聚集蛋白的清除——因而至整個[[Proteostasis]]領域——都經由 E3 運作。
- [[Parkin]] — 一個 RBR E3，其催化機制（C431）解決了 RING／HECT 混合型的疑問，而其失效導致體染色體隱性遺傳型[[Parkinson's Disease]]；它是 E3 機制多樣性最好的單一範例。
- [[Anaphase Promoting Complex-Cyclosome]] — 細胞週期的「DESTROY」階段完全仰賴一個 E3，把泛素與細胞週期調控以及每一個有絲分裂檢查點連結起來。
- [[MDM2]] — E3—[[p53]]軸是 E3 失调如何致癌的典範，也證明了標靶 E3—受質介面具有臨床意義。
- [[TRIM2]]與[[Trim17]] — TRIM 家族示範單一 RING E3 摺疊如何藉由相鄰的 B-box 與螺旋線圈（coiled-coil）結構域而多樣化為數十個具有不同標的的旁系同源基因，這是一種通用的 E3 多樣化策略。
- [[Autophagy]] — K63 與線型鏈主要由 RBR 與 LUBAC 連接酶構建，作為選擇性自噬受體的辨識訊號。因此粒線體自噬受體路徑直接依賴 E3。
- [[Cell Cycle]] — APC 與 SCF 這兩個 E3 都藉由使特定的 securin 與 cyclin 受質泛素化來支配期相轉換；cyclin 周轉的時機是受 E3 控制的事件。
- [[Proteotoxicity]] — 易聚集的蛋白質經由泛素依賴路徑被清除；E3 失效會把蛋白穩態問題轉化為神經退化。

## 連結摘要

- 新增連結：[[Ubiquitin]]、[[Ubiquitination]]、[[Ubiquitin-Proteasome System]]、[[Proteasome]]、[[Proteostasis]]、[[Proteotoxicity]]、[[Parkin]]、[[PARK2]]、[[MDM2]]、[[p53]]、[[TRIM21]]、[[RNF168]]、[[HUWE1]]、[[Deubiquitinase]]、[[USP9X]]、[[USP30]]、[[PROTAC]]、[[Autophagy]]、[[Cell Cycle]]、[[Parkinson's Disease]]、[[Histone H2A.Z]]、[[LUBAC]]、[[SHARPIN]]、[[Mitophagy]]、[[DNA Damage Response]]
- 建議建立的新實體註記：[[Ubiquitin-Activating Enzyme E1]]、[[Ubiquitin-Conjugating Enzyme E2]]、[[RING Finger]]、[[HECT Domain]]、[[RBR Domain]]、[[F-Box Protein]]、[[Cullin]]、[[K48 Polyubiquitin]]、[[K63 Polyubiquitin]]、[[Linear Ubiquitin]]、[[Hook Effect]]、[[Deubiquitinase]]、[[Ubiquitin Code]]、[[LUBAC]]、[[DNA Damage Response]]、[[Ubiquitin-Activating Enzyme E1]]、[[Ubiquitin-Conjugating Enzyme E2]]
- 應強化的重點連結：[[Parkin]] ↔ [[Mitophagy]]、[[Anaphase Promoting Complex-Cyclosome]] ↔ [[Cell Cycle]]、[[E3 Ubiquitin Ligase]] ↔ [[PROTAC]]
