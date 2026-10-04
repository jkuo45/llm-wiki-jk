---
title: STAT1
description: 'STAT1 是潛伏的細胞質轉錄因子，也是第一型與第二型干擾素訊號的經典效應器。JAK 在 Tyr701 的磷酸化驅動互相對稱的 SH2-磷酸酪胺酸二聚化、細胞核轉位以及與 GAS 元素的結合；STAT1 可形成同源二聚體與 STAT1-STAT2 異源二聚體。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - transcription-factor
aliases: [Signal Transducer and Activator of Transcription 1, STAT1alpha, STAT1beta, pY-STAT1]
---

# STAT1

STAT1 是 [[STAT]] 家族的奠基成員，也是 [[Interferon]] 訊號的主要效應器。它是一種**潛伏的細胞質轉錄因子**：沒有酵素活性，在酪胺酸被磷酸化之前不會進入細胞核。STAT1 所做的一切——抗病毒防禦、腫瘤免疫監視、發炎基因誘導——幾乎都源自這一個開關。

## 結構

STAT1（750 個殘基）具有六個模組化區域：

- **N 端結構域（ND，1–123）。** 媒介未磷酸化狀態的二聚化，並與核心片段協同作用；亦結合輸入蛋白（importin）與 IFNAR2 受體。
- **捲曲螺旋結構域（136–317）。** 四條螺旋，帶有以親水性為主的表面，其他螺旋狀蛋白利用它進行專一性停靠；同時也在反向平行二聚體中與對方的 DNA 結合結構域形成互相對稱的介面。
- **DNA 結合結構域（318–488）。** 免疫球蛋白樣摺疊，與 [[NF-κB]] 和 p53 相關，會將其中一段深插入 DNA 大溝。
- **連接結構域（488–576）。** 具彈性；過去常被錯誤註解為 SH3 結構域，而它並非如此。
- **SH2 結構域（577–683）。** 結合磷酸酪胺酸，包括受體自身的 pTyr 與對方 STAT 的 C 端 pTyr。
- **反式活化結構域（684–750）。** 位於 **Tyr701** 之後的 C 端尾部；同一區域中的 Ser727 由 MAPK 家族激酶磷酸化，並對完整的轉錄強度有所貢獻。

pY-STAT1 與 DNA 結合的 2.9 Å 結構顯示，二聚體在雙股 DNA 周圍形成一個連續的 C 形夾鉗，由互相對稱的 pTyr–SH2 交互作用所穩定，而兩段尾部則經由 αB 與 αB′ 螺旋之間的通道形成一段短的反向平行 β-摺板。

## 作用機制

1. 干擾素與其受體結合。對於 [[Type I Interferon]]（IFN-α/β），IFNAR1/IFNAR2 招募 JAK1 與 TYK2；對於 [[Interferon-gamma|IFN-γ]]，IFNGR1/IFNGR2 招募 JAK1 與 JAK2。
2. 受體相關的 JAK 彼此磷酸化，並磷酸化受體細胞質尾部的酪胺酸。
3. STAT1 透過其 SH2 結構域停靠於受體的 pTyr，並由 JAK 在 **Tyr701** 上磷酸化。
4. 兩個 STAT1 單體之間互相對稱的 pTyr701–SH2 結合形成平行二聚體；N 端接觸因而喪失，複合體轉位進入細胞核。
5. STAT1 辨識回文序列共識 **GAS（IFN-γ-activated sequence）** TTCN2-4GAA，並在 ISGF3 的脈絡中與 STAT2 及 IRF 蛋白协同作用，驅動干擾素刺激基因（ISGs）。

> [!info] 去磷酸化是機制的一部分，而非附加的收尾工作
> 未磷酸化的 STAT1 同樣會二聚化，且其核心片段可採取**平行**或**反向平行**的排列方式。突變 ND/ND 介面或捲曲螺旋／DNA 結合介面中的任一個，都會消除未磷酸化的二聚化，並且令人驚訝地，在體內產生異常持續的磷酸化、在體外對磷酸酶產生抗性。目前的工作模型是：核內的磷酸二聚體會由平行重組為反向平行，以有效地將 pTyr701 呈現給磷酸酶，藉此終止訊號。F172W 與 T385A 等致病介面突變體會延長核內停留時間與基因專一性輸出，與此模型一致。

**STAT1 亦與 STAT2 形成異源二聚體**，這是第一型干擾素訊號中占主導地位的複合體；病毒以這個介面為標的，例如副黏液病毒 V 蛋白與狂犬病病毒 P 蛋白會藉由結合 STAT1 的 N 端結構域並阻斷磷酸化或 DNA 結合來抑制 STAT 訊號。

## 生理角色

- **抗病毒防禦。** STAT1 會誘導 PKR、2'-5' 寡腺苷酸合成酶、Mx 蛋白、鳥苷酸結合蛋白以及其他 ISGs。Stat1−/− 與 Stat1 S727A 小鼠對病毒與細菌感染高度易感——Stat1 剔除小鼠甚至在 N 端二聚化被破壞時會失去對細菌的抵抗力。
- **免疫細胞的發育與功能。** STAT1 為 NK 細胞與 T 細胞效應功能所需，也是 DNA 損傷與致癌基因活化所引發[[Cellular Senescence|細胞衰老]]誘導、骨髓系分化，以及腫瘤細胞抗增殖反應所必需。
- **交互作用。** STAT1 可由 [[ERK]]/p38 在 Ser727 上磷酸化，由 [[CBP]]/[[P300]] 乙醯化，並在許多啟動子上與 [[IRF3]]、[[IRF7]] 及 [[NF-κB]] 協同作用，因此干擾素輸出會與 MAPK、乙醯化及 DNA 損傷路徑整合。

## 臨床相關性

- **先天性錯誤。** 生殖系異型合子 **STAT1** 突變會造成體染色體顯性的慢性黏膜皮膚念珠菌症與孟德爾分枝桿菌病易感症。突變集中於捲曲螺旋結構域（GAF 結構域），該處與 IFNGR1 相接觸；DNA 結合結構域的 T385M 等位基因會導致播散性組織胞漿菌病與早期支氣管擴張症。
- **癌症。** STAT1 透過其[[Cellular Senescence|細胞衰老]]與免疫監視功能扮演腫瘤抑制因子：STAT1 或 IFN-γ 訊號的喪失使腫瘤得以逃避免 CD8+ T 細胞的偵測，並與對 [[Immunotherapy]] 及 [[PD-L1]] 檢查點阻斷的抗性相關。反之，腫瘤浸潤髓系細胞中持續的 pY-STAT1 訊號會驅動免疫抑制性的轉錄程式，而 [[STAT3]] 為主的腫瘤往往 STAT1 偏低。
- **發炎。** STAT1 的喪失或訊號受損與 [[Atherosclerosis]] 以及[[Immunosenescence|免疫衰老]]中的抗病毒反應失敗有關。

## Documents

- （尚無文件註記）

## Connections

- [[STAT]] — 家族註記：STAT1 是用來定義 JAK–STAT 訊號的原型，也是唯一同時形成同源二聚體與 STAT1–STAT2 異源二聚體的 STAT。
- [[JAK]] — 受體相關的 JAK1/JAK2/TYK2 在 Tyr701 磷酸化 STAT1；沒有激酶活性就沒有 STAT1 活化。
- [[Interferon]] — STAT1 所據以定義的配體類別，位於 IFNAR 與 IFNGR 的上游。
- [[Interferon-gamma]] — 與 IFNGR1/2 結合並驅動經典的 STAT1 同源二聚體結合 GAS 元素。
- [[Type I Interferon]] — 與 IFNAR1/2 結合並驅動 STAT1–STAT2–IRF9（ISGF3）三聚體複合體。
- [[IRF3]] 與 [[IRF7]] — 在干擾素刺激基因的轉錄中與 STAT1 協同作用。
- [[Interferon-Stimulated Genes]] — STAT1 存在的目的正是要開啟的抗病毒輸出程式。
- [[STAT3]] — 另一個主要的 STAT；它與 STAT1 的相對含量，往往決定腫瘤是發炎性還是免疫抑制性的基調。
- [[ERK]] — 在 Ser727 磷酸化 STAT1，調節完整的轉錄活性。
- [[Cellular Senescence]] — STAT1 是致癌基因與 DNA 損傷誘導細胞衰老的必要節點。

## Linking Summary

- 新增連結：[[STAT]]、[[STAT2]]、[[STAT3]]、[[JAK]]、[[Interferon]]、[[Interferon-gamma]]、[[Type I Interferon]]、[[IRF3]]、[[IRF7]]、[[Interferon-Stimulated Genes]]、[[NF-κB]]、[[ERK]]、[[CBP]]、[[P300]]、[[Cellular Senescence]]、[[Innate Immunity]]、[[Immunotherapy]]、[[PD-L1]]、[[Immunosenescence]]、[[Atherosclerosis]]
- 建議建立的註記：[[Chronic Mucocutaneous Candidiasis]]、[[GAS Element]]、[[ISGF3]]、[[Natural Killer Cell]]、[[Interferon Regulatory Factor 9]]、[[Antiviral Immunity]]、[[STAT2]]
- 應強化的重點連結：[[STAT1]] ↔ [[JAK]]、[[STAT1]] ↔ [[Interferon]]、[[STAT1]] ↔ [[Interferon-Stimulated Genes]]、[[STAT1]] ↔ [[STAT3]]