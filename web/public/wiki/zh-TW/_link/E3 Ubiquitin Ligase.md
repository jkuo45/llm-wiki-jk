---
title: E3 泛素連接酶
description: 泛素化級聯反應中第三個、也是選擇受質的步驟，在人類基因體中編碼有超過 600 種。E3 連接酶決定哪一個蛋白質被修飾、以及以何種泛素鏈拓撲修飾，並可分為結構上截然不同的家族（RING、RBR、HECT），它們以直接方式或透過共價酵素中間體的方式轉移泛素。
protected: false
created: 2026-09-29
updated: 2026-10-01
tags: [protein-class, ubiquitin, proteostasis, enzymology, cell-signaling]
aliases: [E3 連接酶, 泛素-蛋白質連接酶, E3 泛素連接酶（複數）, 泛素連接酶]
---

# E3 泛素連接酶

**E3 泛素連接酶**是 [[Ubiquitination]] 級聯反應中最後一步、也是數量最多的酵素。在三個步驟中——由 [[Ubiquitin-Activating Enzyme E1]] 活化、由 [[Ubiquitin-Conjugating Enzyme E2]] 結合、再由 E3 轉移至受質——E3 提供了專一性。人類基因體中編碼有超過 600 種 E3，而如今「可成藥蛋白體」中有很大一部分是由 E3 及其轉接蛋白所構成。

> [!info] 重點
> E1 與 E2 步驟是一般性的。E1 數量很少（人類只有兩個），E2 約有 30 種。受質選擇、細胞內位置與鏈拓撲都是在 E3 這一層被指定的。單一 E3 的缺失通常會產生特定且界定清楚的表型——這正是 E3 作為藥物標的具吸引力的原因；反過來說，也因此有大量 E3 生物學知識僅來自功能缺失表型。

## 依機制劃分的家族

E3 家族的定義依據是泛素*如何*到達受質：

- **RING**（人類有超過 600 種，包含 U-box 蛋白；後者類似 RING 但缺乏典型的鋅配位基序）。RING 指狀結構域同時結合受質與 E2~泛素，扮演支架角色將兩者拉近，以單一步驟將泛素**直接**由 E2 轉移到受質的離胺酸上。無共價中間體。RING 又可分為單體型（COP1、[[MDM2]]、TRAF6）與多次單元 Cullin–RING 連接酶（CRL），其中 [[SCF Complex]] 是典範，而 [[Anaphase Promoting Complex-Cyclosome]] 是其中最大者。[[TRIM2]] 與 [[Trim17]] 屬於 tripartite-motif 家族的 RING 型 E3。
- **RBR**（人類有 14 種，包含 ARIH1、ARIH2、[[Parkin]]、RNF14、RNF31）。在機制上是**混合型**： tripartite 的 RING1–IBR–RING2 架構先結合 E2~Ub，並將其轉移至 **RING2 上的催化半胱胺酸**（Parkin 為 C431），再轉移給受質——即 HECT 類的兩步化學反應——同時 RING1／IBR 這一半賦予類 RING 的 E2 活化能力。RBR 與**線性（M1 連結）泛素鏈**高度相關，其訊號傳遞角色與 K48 降解鏈不同。
- **HECT**（人類有 28 種，包含 Nedd4 家族）。在催化半胱胺酸上以兩步硫醇酯轉移（transthiolation）形成泛素硫酯中間體，再對受質進行親核攻擊。泛素化嚴格要求先經過 E1–E2–E3 的charges，因此 HECT E3 是一座**分子計時器**——讓泛素化成為 E3 停留時間的函數，而不只是單看 E3 是否占位。

> [!warning] 家族邊界並非總是清晰
> 部分連接酶結合了多種基序（RBR，以及「RCR」或其他非典型家族），且隨著更多結構被解出，分類體系正在修正中。如 2026 年一篇綜述所述，四家族架構（RING、HECT、RBR、RCR）加上非典型家族是一個有用的初裁，而非已確立的分類。

## 泛素密碼

E3 所決定的不只是*哪一個*蛋白質，而是*哪一種*泛素修飾：

- **K48 polyUb 鏈** → 由 [[Proteasome]] 辨識 → 降解。
- **K11 鏈** → 蛋白酶體降解，並透過 APC 在有絲分裂細胞週期控制中扮演重要角色。
- **K63 鏈** → 非降解性：訊號傳遞、DNA 損傷反應、胞吞、[[Autophagy]] 受體功能。
- **線性（M1）鏈** → 主要由 LUBAC 複合體（HOIP/HO1/SHARPIN）產生，非降解性，具有獨特的 NF-κB 與自噬角色。
- **單泛素化與短的多單泛素化** → 轉運（胞吞、溶酶體分選）而非破壞。

由於同一個 E3 可以在不同受質與不同條件下建構不同的鏈，「E3」並非固定的功能。泛素化也可透過 [[USP9X]]、[[USP30]] 等去泛素化酵素逆轉，這使它成為一個訊號傳遞層，而非單向的廢棄物滑道。

## 疾病與治療

- **神經退化。** [[Parkin]]（PARK2）突變是早發性[[Parkinson's Disease|隱性帕金森氏症]]最常見的成因；RBR 連接酶失效 → 粒線體自噬失效。[[HUWE1]] 與 [[RNF168]] 分別將 E3 與神經發育疾病及 DNA 損傷疾病連結起來。
- **癌症。** [[MDM2]] 將 [[p53]] 泛素化；此軸線是腫瘤學中最成功的藥物標的之一，雖然直接抑制 MDM2 受到心臟毒性與抗藥性路徑的限制。
- **免疫。** TRIM 家族成員（[TRIM2]]、[[Trim17]]、[[TRIM21]]）在抗病毒防禦與抗原呈現中居於核心地位。
- **代謝疾病。** E3–轉接蛋白介面是肥胖與糖尿病藥物開發的重點。
- **標定策略。** 要讓 E3 成為可成藥標的，可以占據其受質結合位點（阻斷 E3–受質介面），也可以用 [[PROTAC]] 劫持其催化位點：一種雙功能分子，將特定 E3 招募到目標蛋白，把可被劫持的 E3 轉化為運送載體。2023 年一篇綜述（Exp Mol Med）特別將 E3 及其轉接蛋白定位為代謝疾病的新興治療類別。

> [!warning] 臨床上的注意事項
> 「E3 可成藥」是一項假設，而非既得結果。E3–受質介面往往又大又平坦，能占據該介面的小分子結合劑必須具選擇性地結合，且不能擾動 E3 的其他受質。PROTAC 在體內有一種有充分紀錄的失效模式——鉤效應（hook effect）、分子量過大限制組織穿透，以及快速清除。關於 E3 功能的多數人類遺傳學證據來自生殖系敲除與低功能等位基因，而它們很少能預測成年人的藥理抑制效果。

## 文件

- [[Anaphase Promoting Complex-Cyclosome]] — a multisubunit Cullin–RING E3; the archetypal cell-cycle E3, and a demonstration that an E3 can act as a large, ordered multi-protein machine rather than a single protein.
- [[TRIM2]] — a tripartite-motif RING E3 in the TRIM family; member of the largest E3 subgroup and an antiviral effector.
- [[Trim17]] — another TRIM-family RING E3, involved in antiviral immune signalling.
- [[Ubiquitin Ligase]] — the vault's general note on the ubiquitin-ligase concept; this note covers the E3 tier specifically.
- [[Proteasome]] — the downstream reader of K48/K11 chains; the E3–proteasome axis is the core degradative logic of the system.
- [[Ubiquitination]] — the modification itself and the chain-topology code.
- [[Parkin]] — the best-characterised RBR E3, and the reason RBR is mechanistically distinct rather than a taxonomic curiosity.
- [[SCF Complex]] — the prototype Cullin–RING ligase, and the other half of the canonical cell-cycle destruction pair with APC.

## 連結

- [[Ubiquitin]] — 連接酶的受質，也是 E3 的專一性之所以以密碼形式（鏈連結、多重性）而非單純「開／關」表現的原因。
- [[Ubiquitination]] — E3 是此反應中決定專一性的步驟；沒有 E3，泛素化將是無差別的。
- [[Proteasome]] 與 [[Ubiquitin-Proteasome System]] — E3 是把特定蛋白質送往特定降解命運的路徑決定。聚集蛋白質的清除，因而整個 [[Proteostasis]] 領域，都以 E3 為核心。
- [[Parkin]] — 一個 RBR E3，其催化機制（C431）解決了 RING／HECT 混合型的問題，而其失效會造成隱性 [[Parkinson's Disease]]；它是 E3 機制多樣性最好的單一典範。
- [[Anaphase Promoting Complex-Cyclosome]] — 細胞週期的「DESTROY」階段完全依賴一個 E3，將泛素與細胞週期控制以及每個有絲分裂檢查點連結起來。
- [[MDM2]] — E3–[[p53]] 軸線是 E3 失調如何導致癌症的典範，也證明標定 E3–受質介面具有臨床意義。
- [[TRIM2]] 與 [[Trim17]] — TRIM 家族說明單一 RING E3 折疊如何藉由鄰近的 B-box 與 coiled-coil 結構域分化為數十個具有不同標的物種似蛋白，是一種普遍的 E3 多樣化策略。
- [[Autophagy]] — K63 與線性鏈主要由 RBR 與 LUBAC 連接酶建構，作為選擇性自噬的受體辨識訊號。因此粒線體自噬的受體路徑直接依賴 E3。
- [[Cell Cycle]] — APC 與 SCF 這兩個 E3 都藉由泛素化特定的 securin 與 cyclin 受質來控制相位轉換；cyclin 周轉的時機是 E3 所控的事件。
- [[Proteotoxicity]] — 易聚集的蛋白質經由泛素依賴途徑被清除；E3 失效會把蛋白質恆定問題轉化為神經退化性疾病。

## 連結摘要
- 新增連結：[[Ubiquitin]]、[[Ubiquitination]]、[[Ubiquitin-Proteasome System]]、[[Proteasome]]、[[Proteostasis]]、[[Proteotoxicity]]、[[Parkin]]、[[Parkin]]、[[MDM2]]、[[p53]]、[[TRIM21]]、[[RNF168]]、[[HUWE1]]、[[Deubiquitinase]]、[[USP9X]]、[[USP30]]、[[PROTAC]]、[[Autophagy]]、[[Cell Cycle]]、[[Parkinson's Disease]]、[[Histone H2A.Z]]、[[LUBAC]]、[[SHARPIN]]、[[Mitophagy]]、[[DNA Damage Response]]
- 建議建立的筆記：[[Ubiquitin-Activating Enzyme E1]]、[[Ubiquitin-Conjugating Enzyme E2]]、[[RING Finger]]、[[HECT Domain]]、[[RBR Domain]]、[[F-Box Protein]]、[[Cullin]]、[[K48 Polyubiquitin]]、[[K63 Polyubiquitin]]、[[Linear Ubiquitin]]、[[Hook Effect]]、[[Deubiquitinase]]、[[Ubiquitin Code]]、[[LUBAC]]、[[DNA Damage Response]]、[[Ubiquitin-Activating Enzyme E1]]、[[Ubiquitin-Conjugating Enzyme E2]]
- 建議強化的強連結：[[Parkin]] ↔ [[Mitophagy]]、[[Anaphase Promoting Complex-Cyclosome]] ↔ [[Cell Cycle]]、[[E3 Ubiquitin Ligase]] ↔ [[PROTAC]]