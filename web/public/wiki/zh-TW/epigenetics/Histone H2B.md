---
title: 組蛋白 H2B
description: 組蛋白 H2B 是四種典型核心組蛋白之一，每個核小體八聚體中存在兩份，擔任 H2A 不可或缺的搭檔；其最著名的修飾是 K120 單泛素化，一種共轉錄標記，也是 H3K4 與 H3K79 甲基化的必要前驅物，而其 C 端基序是 FACT 與 TFIIS 的重要停靠位點。
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, chromatin, histone, nucleosome, histone-modification]
aliases: [H2B, HIST1H2BB, H2B/type 1-B, 組蛋白 H2B type 1-B]
---

# 組蛋白 H2B

**組蛋白 H2B** 是[[Nucleosome]]的核心組蛋白，每個八聚體中有**兩份**。它是[[Histone H2A]]不可或缺的異二聚體搭檔：H2A–H2B 二聚體是一個穩定的結構單位，而 H2B 提供了在二聚體外露面上與[[DNA]]、以及與[[DNA Replication|複製]]與轉錄機器之間的大部分交互作用。

> [!important] H2BK120ub 是一個授權標記，而不僅只是調節標記
> H2B 在離胺酸 120 位的單泛素化是細胞核中功能要求最高的單一修飾之一，因為下游的 H3 甲基化（透過 COMPASS 的 H3K4me3、透過 Dot1L 的 H3K79me）在 H2BK120ub 出現並隨後被移除之前都不會發生。最好把它理解為轉錄、DNA 複製與[[DNA Damage Response]]上的動力學閘門或授權步驟 —— 這個修飾必須在正確的時間尺度上到位並被抹除，染色質才能繼續進行。

## 結構與八聚體中的位置

H2B 帶有組蛋白摺疊 —— 由迴圈連接的三段 α 螺旋 —— 但與 H2A 不同，它向纏繞二聚體外側的 DNA 呈現一個相對缺乏特徵的外部表面，因此與 H3 並列為核小體主要的 DNA 接觸表面。它那條富含離胺酸的長 N 端尾部，是細胞核中最易接觸的非結構化區域之一，並帶有高密度的鹼性電荷，參與核小體間的接觸與緊密化。

C 端尾部含有 **H2B 基序**，一段保守序列，其殘基構成一個結合位點，供包括 TFIIS 在內的因子以及 SAGA 去泛素酶模組（SGF29/USP22）使用，使 H2B 的 C 端成為一個反覆出現的結構辨識元素，與其修飾無關。

## 修飾

- **H2BK120ub（以及某些生物中的 H2BK123ub）** —— 在脊椎動物中由 RNF20/RNF40 異二聚體以共轉錄方式寫入，並由 ATP 酶[[FIP200]]維持核小體間距。它管制 H3K4me3 與 H3K79 甲基化，並由 SAGA DUB 模組移除，使延長得以進行；一個穩定存在的標記會阻斷這個循環。泛素化在轉錄起始以及[[Homologous Recombination]]相關的修復中也具有不依賴複製的角色。
- **H2BK5ac 與 H2BK12ac** —— 離胺酸 5 位（及其旁系同源位點）的乙醯化與活躍轉錄以及啟動子近端區域的核小體去穩定化相關；H2BK5ac 被用作活躍增強子的標記。
- **H2BK34ac** 在酵母文獻中與轉錄延長及增強子活性在功能上相關。
- **絲胺酸 112 位的 O-GlcNA 醯化** 已有報告指出可促進 H2BK120ub 的安裝。

> [!warning] 這裡的泛素化不是降解訊號
> 組蛋白泛素化是一套由專一結構域讀取的、密集且高度可逆的編碼；只有 K48 拓撲的多泛素鏈才會把蛋白質導向[[Proteasome]]。由於 H2BK120ub 是單泛素化，它傳遞的是局部訊號，並非降解標籤，因此把「泛素化的組蛋白」描述為「注定要被破壞的組蛋白」是錯的。

## 與 H2A 及 H3 的交互作用

H2B 是八聚體兩半之間的耦合點。H2BK120ub 直接與 H2AK119ub 相對抗，兩者互斥：PRC1 對 H2A 在 K119 位的單泛素化是抑制性的 Polycomb 標記，它會阻斷活化性的 H2BK120ub 路徑，反之亦然。由 H2A 與 H2B 共同形成的**酸性區塊**是溼素酸鹼（bromodomain）與 PHD 讀取器、以及重塑複合體 ATP 酶次單元的停靠表面，因此 H2B 對該表面的貢獻與[[Histone H2A]]的貢獻密不可分。

由於 H2B 在八聚體中直接鄰近 H3，H2B 的泛素化也會與 H3K4 及 H3K79 甲基化系統交互作用，這正是此區域跨組蛋白化學反應的基礎。

## 臨床與實驗關聯

H2BK120ub 是用於在全基因體範圍繪製活躍轉錄的讀出指標，而 FACT 複合體（[[SSRP1]]／[[SUPT16H]]）是轉錄通過核小體與複製叉前進所必需的，因此就結構而言（而非就調節而言），H2B 同時位於[[Transcription]]與[[DNA Replication]]之中。編碼 H2B 的基因之生殖系與體細胞突變十分罕見且特性不明，這本身即具資訊性：與 H3 或 H2A 變異體不同，H2B 沒有well-established（已確立）的變異體系統，其生化特性由修飾化學而非結構變異所主導。

## 文件
- [[_document_ - Epigenetic changes during aging and their reprogramming potential]] — transcriptional and chromatin programmes that shift with age, in which H2B modification status participates.
- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]] — the co-transcriptional H2B/H3 axis as part of the senescent chromatin programme.

## 連結
- [[Histone H2A]] —— H2B 不可或缺的二聚體搭檔；兩者共同形成酸性區塊，而 H2A–H2B 二聚體是 DNA 纏繞的結構單位。
- [[Histone H3]] —— H2B 是通往 H3–H4 四聚體的結構橋樑，也是 H3K4me3 與 H3K79 甲基化的起始點。
- [[Nucleosome]] —— H2B 是核心顆粒八個次單元中的兩個。
- [[Histone Modification]] —— H2BK120ub 是「功能在於其受調節的更替、而非其穩定存在」的修飾之定義性範例。
- [[FIP200]] —— 為 RNF20/RNF40 泛素連接酶設定核小體間距的 ATP 酶次單元，因此 H2BK120ub 的密度是間距的讀出指標。
- [[SSRP1]] —— FACT 複合體次單元，結合 H2B 的 C 端區域，以便在轉錄與複製過程中讓 DNA 穿過並繞過核小體。
- [[SUPT16H]] —— FACT 的催化搭檔，與 SSRP1 共同定義了 H2B 結構直接使之成為可能的核小體重組活性。
- [[HUWE1]] —— 一種在 H2A/H2B 軸上有已知活性的大型 E3 連接酶，將 H2B 與泛素更替以及核小體相關的蛋白水解連結起來。
- [[Chromatin Remodeling]] —— H2B 參與決定可及性的核小體重塑與變異體交換反應。
- [[Transcription]] —— H2BK120ub 是共轉錄性的，其循環是有效延長通過核小體所必需的。
- [[DNA Replication]] —— H2BK120ub 與 FACT 複合體是複製叉越過核小體繼續前進所必需的。
- [[DNA Damage Response]] —— H2BK120ub 參與損傷反應的染色質組織，與 H2A.X/γ-H2AX 軸並列。
- [[Polycomb Group Proteins]] —— PRC1 的抑制性 H2AK119ub 標記與活化性的 H2BK120ub 互斥，使 H2B 成為 Polycomb 與活化狀態之間相互拮抗的一部分。
- [[Chromatin]] —— H2B 的豐度與修飾狀態是染色質的結構與調節參數。
- [[Homologous Recombination]] —— H2B 泛素化參與修復路徑對染色質的調節。
- [[Histone H2A.Z]] —— 在 H2A–H2B 二聚體情境下最常被研究的 H2A 變異體；其沉積會改變 H2B 所占據二聚體的酸性區塊。
- [[E3 Ubiquitin Ligase]] —— 將泛素寫入 H2B 的 RNF20/RNF40 與 HUWE1 連接酶，就是 H2BK120ub 背後的直接酵素學。
- [[Proteasome]] —— 組蛋白泛素化編碼的語意之所以與蛋白質降解不同，原因就在於此：只有多 K48 鏈會導向蛋白酶體。

## 連結摘要
- 新增連結：[[Histone H2A]]、[[Histone H3]]、[[Nucleosome]]、[[Histone Modification]]、[[FIP200]]、[[SSRP1]]、[[SUPT16H]]、[[HUWE1]]、[[Chromatin Remodeling]]、[[Transcription]]、[[DNA Replication]]、[[DNA Damage Response]]、[[Polycomb Group Proteins]]、[[Chromatin]]、[[Homologous Recombination]]、[[Histone H2A.Z]]、[[E3 Ubiquitin Ligase]]、[[Proteasome]]、[[H3K4me3]]、[[H3K27me3]]、[[H3K9me3]]、[[H3K27ac]]、[[Histone H4]]、[[H3K79me3]]、[[Acetylation]]、[[Ubiquitination]]、[[SAGA]]、[[RNF20]]、[[RNF40]]、[[Fact]]、[[Dot1L]]
- 建議建立的筆記：[[H2BK120ub]]、[[RNF20]]、[[RNF40]]、[[SAGA]]、[[Fact]]、[[H3K79me3]]、[[TFIIS]]、[[COMPASS]]、[[Protrudin]]、[[H2B Variant]]、[[Histone H2B Ubiquitination]] —— 移除（已存在）：CTCF、DOT1L
- 建議強化的強連結：[[Histone H2B]] ↔ [[Histone H2A]]、[[Histone H2B]] ↔ [[FIP200]]、[[Histone H2B]] ↔ [[SSRP1]]