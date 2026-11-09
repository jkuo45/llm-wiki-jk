---
title: Siglec-10
description: Siglec-10（SIGLEC10）是巨噬細胞與其他白血球上的抑制性 I 型凝集素，辨識唾液酸化——以及經由 CD24 的非唾液酸化——「don't-eat-me」訊號，抑制對存活健康細胞的吞噬作用。
protected: false
created: 2026-11-08
updated: 2026-11-09
tags: [receptor, immunology, innate-immunity, phagocytosis]
aliases: [SIGLEC10, Sialic acid-binding Ig-like lectin 10]
---

## 概覽

**Siglec-10**（sialic acid-binding Ig-like lectin 10，基因 *SIGLEC10*）是 Siglec 家族的跨膜抑制性受體，在人類表現於巨噬細胞、B 細胞、嗜酸性球，以及樹突細胞與 NK 細胞的亞群（在小鼠中明顯缺席——小鼠直系同源基因 *Siglec-g* 功能不同，這對轉錄很重要）。它是健康細胞抗吞噬（「don't-eat-me」）展示層的核心讀取者：透過其細胞質 [[ITIM]] 樣訊號基序的交聯接合 SHP-1/SHP-2 磷酸酶，並抑制吞入的肌動球蛋白機器。

## 結構與結構域

- 細胞外：一個具有經典雙硫鍵環的 V-set Ig 樣結構域，加上一個或多個 C2-set Ig 結構域；V-set 結構域結合唾液酸與某些蛋白配體。
- 跨膜：單次跨膜。
- 細胞質：兩個免疫受體酪胺酸基礎抑制基序（ITIM／ITIM 樣）→ 招募 SHP 磷酸酶。

## 作用機制與路徑

- **唾液酸辨識。** Siglec-10 結合存活細胞醣蛋白上的 α2,3/α2,6-鍵結唾液酸，設定抗吞噬上限，而唾液酸酶活性會移除它——去唾液酸化將細胞轉向 eat-me 狀態（衰老 [[Erythrocyte]] 所走的路徑）。
- **CD24–Siglec-10 抗吞噬軸。** 目標細胞上的 CD24 獨立於唾液酸接合，結合巨噬細胞上的 Siglec-10，並傳遞強效的「don't-eat-me」訊號：阻斷 CD24 或 Siglec-10 任一方恢復了對受測 CD24 表現人類腫瘤細胞的巨噬細胞吞噬作用（Barkal et al. 2017, Nat Immunol；Tier 4）。此軸與 [[CD47]]–[[SIRPalpha|SIRPα]] 併存且相加。
- **凋亡細胞耐受。** Siglec-10 也參與辨識表面 calreticulin 缺失／自體情境；功能性喪失與中國族群中失調的發炎反應相關（Tier 2）。

## 生理功能

- 在巨噬細胞上設定吞噬攝取閾值，使存活、唾液酸化、CD24 陽性的自體細胞被保留。
- 透過抑制性磷酸酶招募抑制巨噬細胞與 B 細胞中的發炎訊號。
- 貢獻於維持 [[Efferocytosis]] 選擇性地針對死亡細胞的自體／非自體區分。

## 病理與臨床相關性

- **腫瘤免疫逃脫。** CD24 陽性人類腫瘤（例如卵巢、三陰性乳癌亞群）利用 Siglec-10 抵抗巨噬細胞吞噬作用；臨床前開發中的抗 CD24 或抗 Siglec-10 藥劑恢復攝取（Tier 4；見 [[Immune Evasion]]）。
- **物種差距。** 沒有功能性小鼠直系同源基因，因此目標驗證依賴人源化模型（未大規模驗證）。
- **藥理學鄰近性。** Siglec-11/Siglec-14 家族成員共享唾液酸辨識邏輯；[[PD-L1]]-巨噬細胞檢查點阻斷在相同的吞噬突觸空間中運作。

## Documents

- [[task_output_eat_me_dont_eat_me_signals_08_Nov_2026|Eat-me / don't-eat-me signal inventory]]：Siglec-10 被定位為識別 CD24 與唾液酸展示的核心抗吞噬受體。

## Connections

- [[CD24]] — CD24 是透過 Siglec-10 的巨噬細胞接合傳遞抗吞噬訊號的蛋白配體；阻斷任一邊都恢復吞噬作用。
- [[B2M]] — 平行 don't-eat-me 展示（MHC-I/B2M 由其他抑制性受體識別）；兩者在存活細胞上設定吞噬閾值。
- [[CD47]] — 平行、更知名的 don't-eat-me 軸；CD47–SIRPα 與 CD24–Siglec-10 對巨噬細胞有加成效應。
- [[Efferocytosis]] — Siglec-10 在清除決策期間強制自體保留。
- [[Immune Evasion]] — CD24 高表現腫瘤利用 Siglec-10 抵抗骨髓細胞攻擊。

## Linking Summary

- 雙向：[[CD24]]（配體軸——主要配對）、[[CD47]]（平行抑制軸）、[[B2M]]（平行抗吞噬展示）、[[Efferocytosis]]（它把關的過程）、[[Immune Evasion]]（腫瘤的病理利用）。
- 理由：Siglec-10 的特徵在於其作為巨噬細胞側 CD24 抗吞噬訊號讀取者的角色；其連結集中於與 [[CD47]] 的 don't-eat-me 平衡與 [[Efferocytosis]] 的清除決策。
