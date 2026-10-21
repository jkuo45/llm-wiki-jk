---
title: FASN
description: FASN 是人類脂肪酸合成酶，一條 251 kDa 的多酵素多肽鏈，將一個乙醯輔酶 A、七個丙二醯輔酶 A 加上 14 個 NADPH 縮合為棕櫚酸，是從頭脂肪生成的承諾步驟酵素。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - lipid-metabolism
  - metabolism
aliases:
  - fatty acid synthase
  - FAS
  - FASN1
---

# FASN

FASN（脂肪酸合成酶）是執行大部分從頭脂肪生成的多功能酵素複合體。在人類，它由單一基因 FASN 編碼（位於 2q24 染色體），其產物是一條 2,511 殘基、約 251 kDa 的多肽鏈，摺疊成具有啞鈴狀整體架構的同源二聚體。

> [!info] 真正被保守的是什麼
> 哺乳類 FASN 是帶有所有催化活性的單一蛋白質，而酵母與植物的 type-I FAS 酵素則是大型多次單元複合體。不要把教科書上「七種酵素加一個 ACP」的圖像未經調整地帶入人類情境——那些次單元與結構域，其實是同一條多肽鏈上可分離的部件。

## 結構域架構

- **酰基載體蛋白（ACP）** — 以源自[[Coenzyme A|輔酶 A]]的 4'-磷酸泛酰巯基乙胺輔基，承載生長中的醯基鏈。這條装配線的擺臂。
- **丙二醯／乙醯轉移酶（MAT）** — 先將乙醯輔酶 A 載到 ACP 上，之後反覆載入丙二醯輔酶 A。
- **β-酮醯基合成酶（KS）** — 建立碳骨架的縮合反應；同時也是多數 FASN 抑制劑的作用位點。
- **去水酶（DH）**、**烯醯還原酶（ER）**、**β-酮醯基還原酶（KR）** — 兩個還原步驟，各消耗一個 NADPH。
- **硫酯酶（TE）** — 把完成的 C16 鏈從 ACP 上水解下來。

> [!info] 循環、化學計量，以及碳從何而來
> 反應為乙醯輔酶 A + 7 丙二醯輔酶 A + 14 NADPH + 6 H2O → 棕櫚酸 + 8 CoA + 14 NADP+ + 7 CO2。這些二碳單位來自已被運出粒線體的檸檬酸，因此 FASN 必然由檸檬酸輸出供應——這也是它在檸檬酸與 ATP 都很高的細胞中最為活躍的原因。產物棕櫚酸之後則再被延長與去飽和。

## 調節

轉錄層面的調控主要由[[SREBP1]]主導；SREBP1 本身經由[[mTORC1]]在胰島素作用下被活化，並在醣類與葡萄糖的作用下透過[[ChREBP]]被活化。LXR 與[[LXRα]]在某些情境下參與 SREBP1 的誘導，而[[LXRα]]正是[[LXR]]-[[FASN]]軸之所以成為熱門抗發炎標的的原因。

轉譯後層面的調控則透過磷酸化與降解。AMPK 與[[AMPK]]會在能量壓力下磷酸化 FASN，而 AMPK 媒介的磷酸化又會促進 AMPK-ULK1 訊號與[[Autophagy|自噬]]——低能量、關閉脂肪生成與脂肪動員之間的直接分子耦合。FASN 同時也受[[Ubiquitin|泛素]]媒介的蛋白酶體降解，其穩定性也受[[Palmitate|棕櫚酸]]本身影響。

在營養過剩的狀態下——肥胖、[[Hyperlipidemia|高脂血症]]、[[NAFLD]]／MASH、進食後，以及生長因子訊號作用後——FASN 的轉錄與蛋白質水平會陡升，而 FASN 的過度表現是[[Cancer|癌症]]中反覆出現的特徵。

## 與 ACC1、ACC2 的分工

[[ACC1|乙醯輔酶 A 羧化酶]]的兩個同工酶供應丙二醯輔酶 A，而這個分工的重要性遠比通常所述更高：

- **ACC1** 位於細胞質，其唯一產物就是 FASN 所消耗的丙二醯輔酶 A。它是脂肪生成型的同工酶。
- **ACC2** 結合於粒線體外膜，產生的丙二醯輔酶 A 純粹作為**調控訊號**：它抑制 CPT1，因而阻斷脂肪酸進入粒線體進行 β-氧化。它是抗脂肪生成型的同工酶。注意 ACC2 的丙二醯輔酶 A 並非細胞質 FASN 的受質。

這就是 Randle 循環上的丙二醯輔酶 A／CPT1 煞車，也是為什麼操弄 ACC 同工酶與操弄 FASN 會有完全不同的代謝後果。

> [!info] 脂自噬與 DNL 循環
> FASN 活性與[[Lipophagy|脂自噬]]在機制上互相對立，卻在代謝上相互耦合。脂自噬將脂滴送入溶酶體，釋出包括白胺酸與精胺酸在內的[[Lysosome|溶酶體]]胺基酸，進而重新活化[[mTORC1]]並重新啟動 SREBP1——因此自噬驅動的養分釋放會回饋到脂肪生成程式。DNL 與自噬這兩個程式並非單純的開／關，而是彼此交棒。

## 病理與治療

FASN 過度表現是癌症中最可重現的代謝表型之一，在乳癌、前列腺癌、結腸癌、肺癌與膠質母細胞瘤中與不良預後相關。FASN 支持細胞增殖，不僅是藉由供應膜磷脂，也透過一個「FASN signalome」——FASN 會轉位至質膜與細胞核，在那裡活化[[VEGFR]]-2 訊號並修飾 AKT，同時抑制原本會驅動[[Lipotoxicity|脂質毒性]]與細胞死亡的毒性累積。棕櫚酸也會供應[[Ceramide|神經醯胺]]的合成。

藥理學方面：

- **C75** 與 **Orlistat**（一種也會抑制 FASN 的胃脂肪酶抑制劑）是經典的藥理工具，兩者都受限於選擇性差與離靶作用。
- **Denifanstat（TVB-2640 / ASC40）** 是第一個臨床等級的 FASN 抑制劑。它以酮醯還原酶結構域為標的，可口服且具生體可用性，已進入腫瘤領域（尤其是 KRAS 突變型非小細胞肺癌）與 NASH／MASH 的第二期試驗；後者的第二期研究回報了 MRI-PDFF 肝脂肪的顯著下降。這是否會轉化為組織學層面的效益，尚未定論。
- FASN 抑制劑在臨床前研究中與紫杉烷類、拓撲異構酶抑制劑與抗血管生成藥物顯示協同作用。

> [!warning] 臨床上的注意事項
> FASN 是必需的，而不只是腫瘤選擇性的：若在未區分腫瘤與肝臟自身從頭脂肪生成的情況下加以阻斷，會造成肝脂肪變性，而那些非腫瘤的平行適應症（MASH、[[NAFLD]]）之所以被推動，正是因為此酵素在肝臟是經過充分驗證的代謝標的。截至撰寫時，尚無任何 FASN 抑制劑獲准用於任何適應症；路徑層級的臨床驗證仍在進行中。

## Connections

- [[ACC1]] — 供應丙二醯輔酶 A 受質；ACC1 是緊接在 FASN 上游的從頭脂肪生成承諾步驟，兩者形成受質通道複合體。
- [[ACC2]] — 競爭性的羧化酶同工酶，其丙二醯輔酶 A 抑制 CPT1，因而把關的是 β-氧化而非合成。
- [[Malonyl-CoA|丙二醯輔酶 A]] — 由 ACC1 產生、被 FASN 的 MAT 結構域消耗的二碳延長單元。
- [[Fatty acid|脂肪酸]] — 受質類別與產物類別；FASN 的棕櫚酸產物在下游被延長、去飽和與再酯化。
- [[Palmitate|棕櫚酸]] — 反應的終產物，在過量時是脂質毒性與神經醯胺合成的驅動因素。
- [[LXRα]] 與 [[Liver X Receptor|肝 X 受體]] — 促成 SREBP1／FASN 誘導的核受體軸；是藥理上降低脂肪生成的標的。
- [[SREBP1]] 與 [[ChREBP]] — FASN 的兩大轉錄調節因子，分別由胰島素／mTORC1 與醣類驅動。
- [[mTORC1]] — 向 SREBP1 傳遞養分充足訊號，並磷酸化 FASN。
- [[AMPK]] — 在能量壓力下磷酸化 FASN，抑制脂肪生成並啟動自噬。
- [[Autophagy|自噬]] 與 [[Lipophagy|脂自噬]] — 對立的分解代謝程式，透過溶酶體胺基酸釋放後的 mTORC1 再活化與 FASN 相耦合。
- [[Insulin|胰島素]] 與 [[Glucagon|升糖素]] — 切換整個 DNL 程式的荷爾蒙開關；胰島素驅動 SREBP1，升糖素則與之抗衡。
- [[Hepatocyte|肝細胞]] — 生理性 DNL 的主要場所，也是 FASN 抑制的臨床關注中，其脂肪變性與傷害最關鍵的細胞。
- [[NAFLD]] 與 [[Metabolic Syndrome|代謝症候群]] — FASN 抑制正在進行臨床測試的疾病情境。
- [[Cancer|癌症]] — FASN 過度表現、FASN signalome 與 FASN 抑制劑最積極開發的情境。
- [[VEGFR]] 與 [[PI3K-Akt Signaling|PI3K-Akt 訊號]] — 位於膜上定位之 FASN 下游的促血管生成 FASN signalome。
- [[Ubiquitin|泛素]] — 媒介 FASN 的周轉，並將蛋白質穩定性與營養狀態耦合。

## Documents

- [[ACC1]] — 建立上游的羧化酶，供應 FASN 的丙二醯輔酶 A 池，並確立與 FASN 的受質通道交互作用。
- [[Fatty acid|脂肪酸]] — 提供受質化學與棕櫚酸的下游去向。
- [[LXRα]] — 其活化會透過 SREBP1 提高 FASN 表現的核受體軸。

## Linking Summary

- 新增連結：[[ACC1]]、[[ACC2]]、[[Malonyl-CoA]]、[[CPT1]]、[[Fatty acid]]、[[Palmitate]]、[[Triacylglycerol]]、[[LXRα]]、[[Liver X Receptor]]、[[LXR]]、[[SREBP1]]、[[ChREBP]]、[[mTORC1]]、[[AMPK]]、[[Autophagy]]、[[Lipophagy]]、[[Lysosome]]、[[Insulin]]、[[Glucagon]]、[[Hepatocyte]]、[[NAFLD]]、[[Metabolic Syndrome]]、[[Hyperlipidemia]]、[[Cancer]]、[[VEGFR]]、[[PI3K-Akt Signaling]]、[[Ubiquitin]]、[[Ceramide]]、[[Lipotoxicity]]、[[Coenzyme A]]、[[NADPH]]、[[Acetyl-CoA]]、[[Citrate]]、[[Statins]]、[[Denifanstat]]
- 建議建立的註記：[[ACC2]]、[[CPT1]]、[[Palmitate]]、[[Triacylglycerol]]、[[Acyl Carrier Protein]]、[[De novo lipogenesis]]、[[FASN inhibitor]] — 已存在而移除：Ceramide、Coenzyme A、Malonyl-CoA
- 應強化的重點連結：[[FASN]] ↔ [[ACC1]]（受質通道與丙二醯輔酶 A 橋接）、[[FASN]] ↔ [[Autophagy]]（脂滴 → mTORC1 → SREBP1 迴路）、[[FASN]] ↔ [[Cancer]]（FASN signalome，目前僅存在於本註記）
