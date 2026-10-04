---
title: PDK1
description: '3-磷酸肌醇依賴性蛋白激酶 1（基因 PDPK1），屬 AGC/CAMK 家族、含 PH 結構域的絲胺酸／蘇胺酸激酶，可磷酸化 Akt 的 Thr308，並為 AGC 家族激酶的主要上游活化因子。本條目與共享同一縮寫的丙酮酸去氫酶激酶 1（PDHK1）不同。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - kinase
  - signal-transduction
aliases: [3-Phosphoinositide-Dependent Protein Kinase 1, PDPK1, PDK-1]
---

# PDK1

> [!warning] 命名陷阱——請先閱讀
> 文獻中「PDK1」被用來指稱**兩個不同的激酶**，而此一混淆是系統性的，並非偶發：
>
> - **3-磷酸肌醇依賴性蛋白激酶 1**——基因 **PDPK1**，UniProt O15530，約 50 kDa，屬 AGC/CAMK 家族的 PH 結構域激酶。**本條目談的是這一個。**它磷酸化[[Akt]]的 Thr308。
> - **丙酮酸去氫酶激酶 1**——基因 **PDHK1**（舊別名 PDK1），UniProt Q16636，約 43 kDa，為 Ca²⁺/ATP 依賴性激酶，磷酸化[[Pyruvate Dehydrogenase|丙酮酸去氫酶]]複合體的 E1 組件。它*不是*本知識庫的條目主題，且除縮寫外，與 PDK1/PDPK1 在機制上毫無關聯。
>
> 最安全的做法是：在指稱 PI3K 路徑的激酶時寫作 **PDK1/PDPK1**，在指稱代謝型的激酶時寫作 **PDHK1**。交互作用資料庫與路徑圖過去的填載並不一致，因此路徑資源中的「PDK1 interactions」可能指的是其中任一個。

## 結構與結構域

PDK1 是一個約 50 kDa 的激酶，由兩個模組構成，而這種模組邏輯正是整個蛋白質的重點：

- **N 端pleckstrin 同源（PH）結構域**，殘基約 110–185。以典型偏好結合**PtdIns(3,4,5)P₃（PIP₃）**——[[PI3K]]的脂質產物——也能結合 PtdIns(4,5)P₂。使 PDK1 定位至質膜與晚期內體。
- **絲胺酸／蘇胺酸激酶結構域**，殘基約 400–500，其催化核心為典型的雙葉 AGC 摺疊。兩者之間是**轉角基序**（Ser218，磷酸化依賴型）與**疏水基序**（Ser233 與 Ser241），兩者皆調節激酶活性。C 端的 **PDK1 交互作用片段（PIF）**區域與內部 PIF 結合位點，使 PDK1 能反式磷酸化自身的疏水基序。
- 除此之外，PDK1 還有一個不依賴激酶活性的**核定位基序**，並可形成一個獨立於其催化活性的核內、可調控轉錄的蛋白質庫。

## 機制

> [!info] 來源：[[_document_ - mTOR signaling at a glance]]
> 該 mTOR 評述描述了核心電路：Akt 的完全活化需要**兩個位點**的磷酸化——**Ser308，由 PDK1 磷酸化**，以及 **Ser473，由 mTORC2 磷酸化**（2005 年由同一研究群組證實）。在生長因子刺激下，PtdIns(3,4,5)P₃ 與 Akt 自身的 PH 結構域結合，使 Akt 在膜上被磷酸化；**在此條件下 PDK1 亦透過其 PH 結構域被招募至膜上**，並在 Ser308 磷酸化 Akt。該評述提出，具有 C 端 PH 結構域的 mTORC2 組件 mSIN1 可能促進 mTORC2 轉位至膜上，進而促進 Ser473 的磷酸化。

> [!info] 機制
> 因此，經典序列為：生長因子 → 受體酪胺酸激酶 → [[PI3K]] → 內膜上的 PIP₃ → PDK1 與 Akt 皆透過 PH 結構域停靠 → PDK1 磷酸化 Akt Thr308 → Akt 自身的 PH 結構域被釋放，成為可自由擴散、部分具活性的激酶 → mTORC2 磷酸化 Ser473 以達成完全活化 → 受質磷酸化，包括 GSK3、FOXO、TSC2 以及 mTORC1 的輸入 PRAS40。

PDK1 的作用範圍比 Akt 更廣，而這一點常被低估：

- **AGC 家族主要激酶。**只要轉角基序與疏水基序已就位，PDK1 便能磷酸化並活化整個 AGC/CAMK 群組的活化環——包括 PKA、PKC、RSK、SGK 與 p90 核糖體 S6 激酶。它是該家族指定的「主激酶」。
- **非經典、不依賴脂質的功能。**已有報告指出，核內 PDK1 可不依賴其激酶活性來調節基因表現；PDK1 對 Na⁺/K⁺-ATPase 與 Mdm2 的磷酸化，在功能上也與 PI3K 訊號不同。
- **回饋。**PDK1 本身即為 AGC 家族與 mTORC1 介導磷酸化的標的（Ser244 由 mTORC1 磷酸化，Ser342/Ser363/Ser376 由 SGK 與 p90RSK 磷酸化），因此訊號會疊加在自身之上，該系統既可被上調也可被下調。

## 遺傳學與疾病

PDK1 對發育而言是必需的：同型合子 *Pdpk1* 敲除小鼠在子宮內死亡。資訊量最大的人類病變是一個敲入等位基因，其**PH 結構域被一段無功能的序列取代**——這消除了磷酸肌醇結合能力，因而阻斷了脂質依賴性的招募，但並未移除激酶本身。該突變體在膜上不具激酶能力，卻保有核內與非脂質的功能，而所產生的表型正好區分兩者：PH 結構域突變動物可存活，且顯示出大幅升高的胰島素敏感度與減少的脂肪量，而完全-null 動物則為胚胎致死。這是最乾淨的遺傳學證據，顯示**PH 結構域是脂質感測模組，而非催化模組**，也顯示 PDK1 在胰島素作用中的角色部分是脂質依賴性的。

臨床上，PDK1 是經過驗證但尚未被充分開發的腫瘤學標的：它在[[Breast Cancer|乳癌]]、[[Prostate Cancer|前列腺癌]]與[[Lung Cancer|肺癌]]中常被擴增或過度表現，且相對減少對上游受體或 PI3K 病變的依賴；而 PDK1 抑制——透過小分子 ATP 競爭性抑制劑，或透過降解該蛋白——可在 PI3K 或 Akt 抑制失敗的情況下產生反應。其相較於 PI3K 或 Akt 而被選為標的的理據，正在於它位於兩者的*下游*且許多路徑的上游。小分子 PDK1 抑制劑目前仍處於臨床前階段。

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — 確認 PDK1 為負責 Akt Ser308 的激酶，解釋生長因子刺激下 PH 結構域的膜招募機制，並建立由 mTORC2 磷酸化 Ser473 的互補性磷酸化模型。

## Connections

- [[Akt]] — 經典受質，也是 PDK1 在各處皆重要的原因；Thr308（PDK1）加上 Ser473（mTORC2）構成 Akt 的完全活化。
- [[PI3K]] — 產生 PDK1 之 PH 結構域所結合脂質的上游來源；PI3K→PIP₃→PDK1→Akt 這條鏈是生長因子訊號的骨幹。
- [[mTORC2]] — Akt Ser473 的互補性激酶，也是 PDK1 最直接的訊號夥伴；兩者唯有協同作用才能使 Akt 完全活化。
- [[mSIN1]] — mTORC2 的 PH 結構域組件，本知識庫的 mTOR 文件類比 PDK1 而提出它可能介導 mTORC2 自身的膜招募。
- [[PI3K-Akt Signaling]] — PDK1 在養分感測與生長網絡中所為之事的路徑層級框架。
- [[FOXO]] — 位於 Akt 下游，因此也在 PDK1 下游；Akt 活性喪失會釋放 FOXO，這也是為何 mTORC2/PDK1 狀態可傳遞至壓力耐受、代謝與凋亡基因。
- Akt Ser473 — mTORC2 的互補位點；Ser473/Ser308 的分工是關於 PDK1 最實用的一件事，值得獨立成篇。
- [[Pyruvate Dehydrogenase|丙酮酸去氫酶]] — 指向*另一個*PDK1（PDHK1），其磷酸化此複合體的 E1 次單元；在此特別標示，是為了防止縮寫衝突擴散。
- [[Insulin Resistance|胰島素阻抗]] — PDK1 正位於胰島素訊號軸上，而 PH 結構域突變表型是針對此軸的直接遺傳學探針。
- [[Breast Cancer|乳癌]] — 常見 PDK1 擴增並產生 PDK1 依賴性的腫瘤類型之一。
- [[Kinase|激酶]] — 家族層級的通論性條目；PDK1 是不尋常的激酶，因為其受質選擇性是由脂質感測結構域而非辨識序列所界定。

## Linking Summary

- 新增連結：[[Akt]]、[[PI3K]]、[[mTORC2]]、[[mSIN1]]、[[PI3K-Akt Signaling]]、[[FOXO]]、[[Pyruvate Dehydrogenase|丙酮酸去氫酶]]、[[Insulin Resistance|胰島素阻抗]]、[[Breast Cancer|乳癌]]、[[Kinase|激酶]]
- 建議建立的新實體註記：[[PDHK1]]、[[Pleckstrin Homology]]、[[PtdIns(3,4,5)P3]]、[[AGC Kinase Family]]、[[Turn Motif]]、[[Hydrophobic Motif]]、[[Akt Ser473]]、[[SGK]] — 已存在故移除：RSK
- 應強化的連結：[[PDK1]] ↔ [[Akt]]（Akt 的條目應說明哪個激酶負責 Thr308、哪個負責 Ser473——雙位點活化模型目前分散於不同文件中）、[[PDK1]] ↔ [[PI3K]]（PH 結構域／脂質辨識的關係是唯一的機制性連結，但兩側皆未陳述）