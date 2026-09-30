---
title: Tyrosine Kinase
description: 酪胺酸激酶是將 ATP 的磷酸基轉移至受質蛋白酪胺酸殘基上的酵素，在訊號傳遞中扮演開／關式的二元開關；此類酵素分為受體酪胺酸激酶與非受體細胞質內激酶，並構成腫瘤學中最大的單一藥物標的類別。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - enzyme
  - kinase
  - signaling
aliases: [protein tyrosine kinase, PTK, tyrosine protein kinase, TK]
---

# 酪胺酸激酶

**酪胺酸激酶（tyrosine kinase）**是一種催化酵素，能將 [[ATP]] 的 γ-磷酸基轉移至標的蛋白質上**酪胺酸**殘基的羥基。酪胺酸的磷酸化是一種可逆、二元且高度專一的共價修飾——也就是一個開關——而人類基因組所編碼的約 90 種酪胺酸激酶，使人類激酶組（kinome）成為現存最大的可成藥酵素家族。它們分為兩個結構與功能類別：嵌入質膜中的**受體酪胺酸激酶**（RTK），以及 [[SRC kinase|SRC 家族]]、ABL、JAK、SYK 與 FAK 等**非受體（細胞質內）酪胺酸激酶**。

> [!info] 為何磷酸化是一個開關
> 酪胺酸磷酸化會創造出一個停泊位點。磷酸酪胺酸是由 SH2 結構域、PTB 結構域與 14-3-3 蛋白辨識的，因此單一激酶的輸出是*誰能結合*的改變，而不是受質化學性質的改變。磷酸化可由蛋白質酪胺酸磷酸酶（PTP）如 PTP1B 與 SHP2 逆轉，而一個完全開啟的細胞則是激酶增幅、磷酸酶抵銷後的平衡。之所以重要：細胞產生的訊號量，是由每個受質上激酶與磷酸酶活性的比值所決定，這就是為何 PTP 與激酶本身同樣具有藥物相關性。

## 受體酪胺酸激酶

RTK 是單次穿膜的跨膜蛋白，具備胞外配體結合結構域、單一跨膜螺旋，以及細胞質內的酪胺酸激酶結構域。典型的活化循環如下：

1. 配體（生長因子）結合胞外結構域，通常會造成二聚化——可以是配體誘導的（胰島素受體），也可以是預先形成的二聚體經異位重排（EGFR 家族）。
2. 細胞質內的激酶結構域在活化環的酪胺酸上互相反式磷酸化，解除自體抑制並活化激酶。
3. 細胞質尾部上的磷酸酪胺酸成為 SH2 結構域與 PTB 結構域蛋白的停泊位點——包括轉接蛋白、磷酸酶，以及 Ras GEF 機制。
4. 訊號分支進入 Ras–MAPK（增殖）、PI3K–AKT–mTOR（存活、生長、代謝）、PLCγ（鈣、PKC）與 STAT（轉錄）。

> [!warning] 活化並非唯一的失效模式
> RTK 驅動的癌症，其成因是**功能獲得性活化**（擴增、活化性突變、自分泌配體迴路）以及其他任何因素，兩者發生的頻率相當；其治療後果就是 [[Targeted Therapy]] 中記載的獲得性抗藥性模式：ATP 結合口袋的次級突變、諸如 MET 擴增等下游旁通途徑的活化，以及受體家族轉換。RTK 也與功能喪失性疾病有關，例如胰島素受體突變造成 A 型胰島素抗性，以及 Hirschsprung 病中 RET 的功能喪失，相對地則是 MEN2 與甲狀腺髓樣癌中 RET 的功能獲得。

**RTK 家族**：EGFR/ERBB（4 個成員；被用於治療性開發最深的家族）、胰島素受體與 IGF-1R、PDGFR、VEGFR1–3、FGFR1–4、KIT、MET/HEPGAR、RET、TRK、ALK、AXL，以及 Ephrin 與 TAM 受體。參見 [[Receptor Tyrosine Kinases]]。

## 非受體酪胺酸激酶

它們缺乏跨膜結構域，而是透過其他方式活化——由另一個激酶驅動的自體磷酸化、轉接蛋白介導的聚集，或與磷酸化胜肽的結合。它們是 RTK *下游*的傳遞者，也是細胞激素的受體。

- **[[SRC kinase|SRC 家族]]**——SRC、FYN、YSK、BLK、HCK、LCK。在整合素黏附、骨質吸收與 TCR 訊號中居於核心地位。LCK 啟動 T 細胞受體訊號；FYN 與 SRC 則是治療抗藥性所使用的 ALK 抑制劑聯合療法中的主要藥物標的。
- **ABL**——ABL1 與 ABL2。ABL1 在費城染色體中與 BCR 融合，產生慢性骨髓性白血病與部分急性淋巴性白血病中持續活化的 BCR-ABL 激酶。它是透過 [[Imatinib]] 成功進行標靶治療的開創性案例，同時也是 imatinib 抗藥性突變目錄的來源。
- **JAK 家族**——JAK1/2/3 與 TYK2 是 I／II 型細胞激素受體的受體，將細胞激素訊號傳遞給 STAT。JAK 的功能喪失變異會造成免疫缺陷；JAK2 的功能獲得會造成真性紅血球增多症與相關的骨髓增生性腫瘤；TYK2 則是 [[Autoimmune Disease]] 中經過驗證的藥物標的（deucravacitinib）。
- **SYK、BTK、HCK、LYN**——B 細胞與骨髓系免疫受體訊號；BTK 是 B 細胞腫瘤與多發性硬化症中經過驗證的標的。
- **FAK、PYK2、ACK1/TNK2 與 TAM 家族**——整合素與黏附訊號，也就是細胞感知其所處基質的機制。
- **ZAP70**——T 細胞受體近端激酶。

## 非核內功能

除了向轉錄傳遞訊號之外，酪胺酸激酶還具有直接的結構與代謝角色。最清楚的例子是 **titin**（肌節蛋白），它擁有自己專屬的 titin kinase 結構域。膜相關的酪胺酸激酶還具有糖解功能（與 HK2 結合）與核內功能（EGFR 與 ABL 會轉位至細胞核，以調節轉錄並修復核 DNA；後者這項功能，是藉由 ABL 在受到基因毒性壓力時的核內定位而揭露的）。

## 治療關聯

酪胺酸激酶是醫學上被最密集標靶的酵素家族。第一世代所有成功的標靶性抗癌藥物都是酪胺酸激酶抑制劑（[[Tyrosine Kinase Inhibitors]]），涵蓋 BCR-ABL、EGFR、HER2、BRAF、ALK、RET、MET、KIT、PDGFR、VEGFR、JAK、BTK、CDK 與 MEK。藥理學內容在類別層級於 [[Tyrosine Kinase Inhibitors]] 中討論；此類別是 [[Targeted Therapy]] 的標準組成，而抗藥性則是此領域的定義性難題。

> [!warning] 選擇性的注意事項
> 「選擇性」激酶抑制劑很少是完全選擇性的。ATP 在人類激酶組約 500 種激酶之間結構上相當相似，而 I 型抑制劑必須與保守的 ATP 口袋結合，因此可以預期會有離標的激酶結合；這既常常是靶點本身毒性的機制（例如 VEGFR 抑制劑造成高血壓、PDGFR 抑制劑造成水腫），也是離標毒性的機制。此類別的可信度建立在藥理基因體學的選擇上——用藥是為了與腫瘤的依賴性相匹配——而不是建立在抑制劑對激酶組乾淨無瑕之上。

## Documents

提及此實體的文件清單

- [[MET gene]]——MET 是一種受體酪胺酸激酶，而本知識庫的 MET 基因筆記正是「受體型 RTK 作為癌症依賴性、並作為旁通抗藥性逃逸途徑」的案例研究。
- [[SRC kinase]]——SRC 是非受體酪胺酸激酶的典範，而其筆記提供了本筆記所綜整的整合素黏附、骨質吸收與激酶抑制劑細節。
- [[Tyrosine Kinase Inhibitors]]——類別層級的藥理學筆記，涵蓋 ATP 競爭性機制、選擇性問題、抗藥性機制與各個個別藥物。

## 連結

- [[MET gene]]——MET 編碼一種受體酪胺酸激酶，是本筆記所列舉的 RTK 家族之一。它同時也是旁通抗藥性機制的標準實例：MET 擴增是肺癌中逃離 EGFR 抑制的常見途徑，這使它同時是標的與抗藥性節點。
- [[SRC kinase]]——SRC 是開創性的非受體酪胺酸激酶，以肉瘤病毒致癌基因的形式被發現。其筆記涵蓋本筆記所壓縮的黏附、破骨細胞與 T 細胞訊號生物學，而 SRC 本身也是與 ALK 抑制劑併用時的藥物標的。
- [[Tyrosine Kinase Inhibitors]]——此酵素類別的抑制劑是腫瘤學中最大的藥物家族，也是 [[Targeted Therapy]] 的核心。類別筆記容納藥理學、抗藥性目錄與各個個別藥物；本筆記則容納這些抑制劑所利用的酵素學與訊號架構。
- [[Receptor Tyrosine Kinases]]——此酵素類別中的受體子集合，是藥物開發最為集中的地方。RTK 這個家族的成員同時是藥物標的、生物標記（某項擴增或突變），以及獲得性抗藥性突變的來源。
- [[Kinase]]——酪胺酸激酶是更大的激酶超家族的一個分支，該超家族還包括絲胺酸／蘇胺酸激酶與脂質激酶。共用的磷酸轉移化學，正是 ATP 競爭性抑制在整個家族中成為主流藥物設計策略的原因。
- [[Kinase Inhibitor]]——酪胺酸激酶抑制劑所屬的一般性藥物類別，而它是其中最大且研究最充分的實例。ATP 位點競爭的化學，以及各激酶之間 ATP 口袋的結構相似性，是這兩則筆記共有的內容。
- [[Phosphorylation]]——酪胺酸磷酸化是此酵素執行的受質層級事件，而它被磷酸酶逆轉，正是使這個開關之所以為開關的原因。細胞中幾乎所有的訊號增幅、記憶與交互作用都經由激酶－磷酸酶平衡而運作。
- [[ATP]]——整個激酶超家族的磷酸基供應者。由於 ATP 位點高度保守，與其結合的競爭性抑制劑不可能完全具有選擇性，這正是此類別的核心藥理化學問題。
- [[Targeted Therapy]]——酪胺酸激酶是標靶治療的主要標的類別；此酵素家族與該治療模式在腫瘤學中幾乎是同義詞，且每種激酶藥物都需要一個相對應的基因組生物標記。
- [[Imatinib]]——Imatinib 是整個類別的概念驗證：BCR-ABL 是一種持續活化的融合酪胺酸激酶，而對它的抑制把 CML 從致命疾病轉為可管理的疾病。它所選出的抗藥性突變，是此領域的範本。
- [[Oncogene Activation]]——活化的酪胺酸激酶是最常見的致癌基因之一。原致癌基因（由擴增／點突變／融合而活化）與腫瘤抑制基因（失活）之間的區分，勾勒出為何激酶抑制在癌症中如此有效：標的可以被誘導成依賴成癮的狀態。
- FAK 是能機械感應整合素黏附與細胞－基質交互作用的非受體酪胺酸激酶，因此是此酵素類別與機械力轉導之間的直接連結。
- [[Reactive Oxygen Species]]——酪胺酸激酶與磷酸酶都是巰基反應性酵素，而 H₂O₂ 對催化性半胱胺酸的可逆氧化，是氧化還原狀態直接決定激酶活性的一種機制。這是 ROS 訊號與磷酸化訊號之間一個具體且在機制上真實的連結。

## 連結摘要

- 新增連結：[[Kinase]]、[[Kinase Inhibitor]]、[[Phosphorylation]]、[[ATP]]、[[Targeted Therapy]]、[[Imatinib]]、[[Focal Adhesion Kinase]]、[[Reactive Oxygen Species]]、[[Oncogene Activation]]
- 建議建立的新實體註記：[[Protein Tyrosine Phosphatase]]、[[SH2 Domain]]、[[Phosphotyrosine]]、[[ABR Tyrosine Kinase]]、[[BCR-ABL]]、[[Receptor Dimerization]]、[[RTK Negative Regulation]]、[[Kinome]]、[[Structural Biology of the ATP Site]]、[[Tyrosine Kinase Autoinhibition]]
- 應強化的重點連結：[[Tyrosine Kinase]] ↔ [[Receptor Tyrosine Kinases]]、[[Tyrosine Kinase]] ↔ [[Kinase]]、[[Tyrosine Kinase Inhibitors]] ↔ [[Targeted Therapy]]
