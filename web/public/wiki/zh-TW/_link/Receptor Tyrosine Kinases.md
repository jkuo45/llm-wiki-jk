---
title: Receptor Tyrosine Kinases
description: '受體酪胺酸激酶（RTKs）是由 58 個受體構成、歸為 20 個亞家族的单次跨膜受體家族；它們在配體誘導二聚化後於酪胺酸上自體磷酸化，產生磷酸酪胺酸停泊位點，向 MAPK、PI3K-Akt 與 PLCγ 路徑傳遞訊號。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor
  - signaling
aliases: [RTKs, RTK, receptor protein-tyrosine kinase, Eph receptor family]
---

# 受體酪胺酸激酶

受體酪胺酸激酶（RTKs）是具有內源性催化活性的最大單次跨膜受體家族。它們是將細胞外生長因子、胞激素與荷爾蒙轉換為細胞內磷酸化事件的主要入口。人類編碼 **58 個分屬 20 個亞家族的 RTK**，其中包括[[EGFR]]、[[HER2]]、[[Insulin Receptor|胰島素受體]]、[[IGF1R]]、[[PDGFR]]、[[VEGFR]]與[[MET]]。

> [!info] 家族說明
> RTK 是一個家族標籤，而非單一蛋白質。統一這個家族的是其架構（細胞外配體結合胞外區 → 單一跨膜 α 螺旋 → 鄰膜區 → 酪胺酸激酶結構域 → C 端尾端）與活化邏輯（配體使兩個激酶結構域聚合）。

## 分類

亞家族由胞外區架構界定，而胞外區決定配體專一性：

| 類別 | 家族 | 成員 | 胞外區 |
|---|---|---|---|
| I | EGFR/ErbB | EGFR、ERBB2/HER2、ERBB3、ERBB4 | 2 個富含半胱胺酸結構域 |
| II | 胰島素受體 | INSR、IGF1R | α2β2 異四聚體，1 個富含半胱胺酸 + 2 個 FNIII |
| III | PDGFR/CSFR/KIT | PDGFRα/β、M-CSFR、KIT、FLT3 | 5 個類 Ig 結構域 |
| IV | VEGFR | VEGFR1–3 | 7 個類 Ig 結構域 |
| V | FGFR | FGFR1–4 | 3 個類 Ig + 酸性盒 |
| VI | MET | MET、RON | Semaphorin 結構域 + PSI |
| VII | Trk | TrkA/B/C | 2 個 Ig + 1 個 FNIII + NGF 結構域 |
| XI | TAM | TYRO3、AXL、MER | 2 個類 Ig |
| XII | Tie | Tie1、Tie2 | 2 個 Ig + EGF |
| XIII | Eph | EPHA1–6、EPHB1–6 | 1 個 Ig + 1 個富含半胱胺酸 + FNIII |
| XIV | RET | RET | 富含半胱胺酸 |

其他家族包括 DDR（膠原蛋白受體）、ROR、MuSK、PTK7/CCK4、ROS、LMR、LTK 與 STYK1。

## 結構與活化

所有 RTK 都共享模組化配置：N 端糖基化胞外區；約 20 個胺基酸的跨膜 α 螺旋；鄰膜區；細胞內酪胺酸激酶（TK）結構域；以及 C 端尾端。TK 結構域具有典型的雙葉激酶摺疊（小 N 葉、大 C 葉、ATP 位於裂縫中），並帶有必須先採取活化構形才能催化的**活化環**與 **αC 螺旋**。

> [!info] 各家族的活化機制不同
> 統一的邏輯是*由二聚化解除的順式自體抑制*，但細節各異：
> - **胰島素／IGF／FGFR 受體。** 活化環本身遮蔽活性位；Y1162（胰島素受體）伸入其中，恰似蓄勢待發以進行自體磷酸化。配體驅動的該酪胺酸反式磷酸化解除此阻擋。
> - **KIT、PDGFR、Eph。** 自體抑制位於鄰膜區——鄰膜區段與 αC 螺旋及活化環接觸；鄰膜酪胺酸的磷酸化使其不穩定。
> - **Tie2。** C 端尾端阻擋活性位。
> - **EGFR/ErbB。** 不需要活化環磷酸化：兩個激酶結構域形成**不對稱二聚體**，其中「活化子」的 C 葉以異位（allosteric）方式重排「接受者」的 N 葉。這正是致瘤性 EGFR 突變 L858R 與第 19 外顯子缺失不需要配體的原因——它們破壞了同一組自體抑制接觸。

## 訊號輸出

C 端尾端（部分家族還包括鄰膜區）的自體磷酸化會產生磷酸酪胺酸位點，由含 SH2 與 PTB 結構域的蛋白質讀取。主要的輸出路徑為：

- **RAS → RAF → MEK → [[ERK]]**（[[MAPK Signaling|MAPK]]）— 增殖與分化。
- **[[PI3K]] → [[Akt]]** — 透過[[mTORC1]]與[[mTORC2]]進行存活、生長與代謝調控。
- **PLCγ** — 鈣離子與 PKC 活化。
- **STAT** — 直接的轉錄輸出。

RTK 也透過反式內吞（trans-endocytosis）傳遞訊號：內吞後的受體持續在內體中進行磷酸化，產生不同的訊號輸出，並被分選至[[Lysosome|溶體]]或[[Proteasome|蛋白酶體]]。數種 RTK 也會轉位至細胞核（ErbB、FGFR、VEGFR、胰島素／IGF1R、MET、ROR、Eph 家族）。

## 疾病與臨床關聯

RTK 是腫瘤學中被標定最多的受體類別，原因有二：其活化突變具致瘤性，且其抑制可被耐受，因為許多 RTK 以組織限定的方式表現。

| 藥物 | 標的 | 適應情境 |
|---|---|---|
| [[trastuzumab]] | HER2 | HER2 陽性[[Breast Cancer|乳癌]] |
| Cetuximab | EGFR | [[Colorectal Cancer|大腸直腸癌]] |
| [[Imatinib]] | BCR-ABL、KIT、PDGFR | CML、GIST |
| [[Sunitinib]] | VEGFR、PDGFR、KIT | RCC、GIST |
| Pazopanib | VEGFR、PDGFR、KIT | RCC、軟組織肉瘤 |
| [[Everolimus]] | PI3K 下游的 mTORC1 | TSC、多種腫瘤 |

RTK 生物學也支撐非惡性疾病：RTK 訊號驅動[[Angiogenesis|血管新生]]（[[VEGFR]]）與血管疾病中的動脈粥狀硬化、經由[[Insulin Receptor|胰島素受體]]、[[IGF1R]]處理葡萄糖（見[[Insulin Resistance|胰島素阻抗]]與[[Diabetes|糖尿病]]）、經 KIT 支持肥大細胞存活而與肥大細胞增生症相關，以及經[[MET]]/RET 與副甲狀腺機能亢進相關。作用於標靶本身的毒性也反映這一點：VEGFR 阻斷會造成高血壓與蛋白尿，EGFR 抑制會造成特有的皮膚與黏膜毒性，PDGFR 阻斷會造成骨髓抑制與體液滯留。

## Documents

- （尚無文件註記）

## Connections

- [[EGFR]] — 典範性的 RTK，也是不對稱異位激酶二聚活化機制的機制原型。
- [[Kinase|激酶]] — RTK 是龐大蛋白激酶超家族中的單次跨膜、配體調節子集合。
- [[MAPK Signaling]] — RAS–ERK 是 RTK 活化典型的增殖性輸出。
- [[PI3K-Akt Signaling]] — 存活與生長分支，向下餵入 mTORC1 與 mTORC2。
- [[mTORC1]] — 位於 RTK 驅動的 PI3K–Akt 下游，因此 RTK 抑制會降低 mTORC1 輸出。
- [[RAS]] — RTK 藉由招募適應蛋白與 SOS GAP/GEF 活性來活化 RAS。

## Linking Summary

- 新增連結：[[EGFR]]、[[HER2]]、[[Insulin Receptor]]、[[IGF1R]]、[[PDGFR]]、[[VEGFR]]、[[MET]]、[[ERK]]、[[MAPK Signaling]]、[[PI3K]]、[[Akt]]、[[PI3K-Akt Signaling]]、[[RAS]]、[[STAT]]、[[mTORC1]]、[[mTORC2]]、[[Kinase]]、[[Lysosome]]、[[Proteasome]]、[[Angiogenesis]]、[[Insulin Resistance]]、[[Diabetes]]、[[Insulin Signaling]]、[[trastuzumab]]、[[Cetuximab]]、[[Imatinib]]、[[Sunitinib]]、[[Pazopanib]]、[[Everolimus]]、[[Breast Cancer]]、[[Colorectal Cancer]]、[[PROTAC]]
- 建議建立的新實體註記：[[VEGFR2]]、[[FGFR]]、[[Ephrin]]、[[KIT]]、[[FLT3]]、[[Ret]]、[[Tie2]]、[[TrkA]]、[[ROR1]]、[[RTK Endocytosis]]、[[Dimerization]]、[[Angioimmunoblastic T-cell Lymphoma]]
- 應強化的重點連結：[[EGFR]] ↔ [[Receptor Tyrosine Kinases]]、[[Receptor Tyrosine Kinases]] ↔ [[RAS]]、[[Receptor Tyrosine Kinases]] ↔ [[mTORC1]]