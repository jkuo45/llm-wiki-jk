---
title: PDGFR
description: '血小板衍生生長因子受體，一族由 PDGFRA 與 PDGFRB 組成的第三型受體酪胺酸激酶。二聚體形式的 PDGF 配體結合胞外的 Ig 樣結構域，觸發胞內激酶結構域的反式自體磷酸化，並招募 PI3K、SHP2 與 PLCγ 適應蛋白。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor-tyrosine-kinase
  - cancer
aliases: [Platelet-Derived Growth Factor Receptor, PDGFRA, PDGFRB, PDGFR-alpha, PDGFR-beta]
---

# PDGFR

> [!warning] 詞彙歧義
> 「PDGFR」是家族層級的稱呼，而非單一蛋白質。這個家族有兩個旁系同源受體——**PDGFRA** 與 **PDGFRB**——其胞外序列一致性為 58%、胞內為 82%，具有四種配體異型體，且生物學功能大致不重疊。論文中關於「PDGFR」的敘述通常是其中之一的簡稱，而這個區別往往就是治療成功與失敗的分水嶺。以下先描述一次共同的架構，再將兩者分開說明。

## 結構域架構

兩個旁系同源蛋白都是具有相同拓撲結構的第三型（class III）受體酪胺酸激酶：

- **訊號胜肽**，殘基 1–約 20。
- **胞外區域**，約 500 個殘基，包含**五個類免疫球蛋白（Ig 樣）結構域**（I1–I5）與一段短的 N 端酸性／甘胺酸富集序列。Ig 樣結構域 I1 是主要的配體接觸表面；第 IV 與第 V 結構域限定受體的幾何構形並防止配體非依賴性的自由二聚化，而第 IV 結構域中的一小段膠原蛋白結合序列則將受體錨定於纖維狀膠原蛋白。
- **單一跨膜 α-螺旋**，約 24 個殘基。
- **近膜區域**，約 50 個殘基，包含介導激酶基礎性抑制的近膜結構域。
- **激酶結構域**，由**鉸鏈區**分成 N 葉與 C 葉；活化環上帶有調控性的**小鼠 Tyr849 與 Tyr857**（Y816/Y824 的編號依對齊方式而異），其磷酸化是達成完全催化活性所必需的。

此受體並不像典型第一型受體那樣被糖基化；Ig 樣摺疊相當剛性，且受體在正常情況下**在配體結合前保持單體狀態**，活化是藉由配體誘導的二聚化與**反式自體磷酸化**而發生。

## 機制

> [!info] 機制
> 一個 PDGF 二聚體（PDGF-AA、AB、BB 或 CC）同時結合兩個受體單體，使胞內激酶結構域並置。每個激酶各自磷酸化另一方的近膜區域與激酶區域中的酪胺酸。這些磷酪胺酸隨即成為 SH2 結構域蛋白與其他適應蛋白的停靠位點，主要者為 **PI3K**（經由 p85）、**SHP2** 與 **PLCγ**——另有 Grb2/SOS、STAT 與 Dok 家族蛋白補足名單。上述三個適應蛋白下游的每一條分支，都是各自細胞型特異的輸出：增殖（PI3K–Akt、Ras–ERK）、遷移與肌動蛋白重塑（PLCγ、Rho/Rac），以及細胞激素轉錄（STAT）。

磷酸化並非唯一的調控層次。受體的內吞、降解與回收皆與此相關；同樣重要的是，配體誘導的受體二聚化是一項*前提條件*而非結果——質膜上的受體激酶活性是訊號傳遞的主要場所，而內吞可能削弱而非放大訊號。

## 生理角色

PDGFR 訊號驅動發育與修復：間質與平滑肌的增殖、遷移與分化；神經脊與顱顏面發育；造血；以及傷口癒合。它是血管中周細胞與血管平滑肌區室的重要調節因子，因此這兩種受體對血管壁完整性與血管新生皆屬必需——也正因如此，過度訊號會直接促成[[Fibrosis|纖維化]]與[[Atherosclerosis|動脈粥狀硬化]]。

> [!info] 來源：[[_document_ - mTOR signaling at a glance]]
> 該 mTOR 評述指出，TSC1/TSC2 的喪失會以對 rapamycin 敏感的方式抑制 PDGFR 表現，並明確指出當時 mTOR 訊號如何控制 PDGFR 表現仍未釐清——這是一個很好的例子，說明受體的豐度受 mTORC1 控制，而非受體的活化受其控制。

> [!info] 來源：[[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> 該 sirtuin 評述報告，SIRT3 參與了菸鹼型 α7 乙醯膽鹼受體對 PDGFR-BB 所誘導之血管平滑肌細胞遷移的抑制作用，此為一種粒線體 SIRT3 依賴性的機制。

## 臨床關聯

> [!important] 臨床重要性
> 構成性或失調的 PDGFR 訊號是醫學中最可成藥的致癌驅動因子之一，而針對它的受體酪胺酸激酶抑制劑也是有史以來最成功的標靶治療之一。[[Imatinib]]已獲核准用於 KIT 突變型胃腸道間質瘤（其中 PDGFRA D842V 尤其*阻抗*）、FIP1L1-PDGFRA 驅動的高嗜伊紅性球症候群（此處為首選用藥）、慢性骨髓性白血病，以及 PDGFR 驅動的 Philadelphia 陰性骨髓增生性腫瘤，包括合併嗜伊紅性球增多的 MDS/MPN。[[Dasatinib]]與 nilotinib 延伸了此類別；avapritinib、ripretinib 及其他藥物則專門針對 PDGFRA 或 KIT 突變型 GIST。

證據程度不一的非腫瘤學應用，包括在[[Idiopathic Pulmonary Fibrosis|特發性肺纖維化]]及其他纖維化肺部疾病中的抗 PDGFR 策略，以及在糖尿病腎病變中的應用：在 simvastatin/benzylarginine 試驗系列中，[[PDGFR]]-β 阻斷可降低蛋白尿，但在繫膜細胞增生或糖尿病腎病變的試驗中並未轉化為明確的腎臟終點。阻斷 PDGF 訊號也是老化研究中纖維化與血管重塑分支的核心，而 PDGFRB 標記的是一族研究深入的周細胞族群，已被直接作為衰老細胞清除策略的標的。

突變背景至關重要：**PDGFRA D842V** 是 GIST 常见的主要突變，它賦予對幾乎所有酪胺酸激酶抑制劑的阻抗，因為它位於 ATP 結合口袋內，藉由降低抑制劑親和力而非單純提高激酶活性來達成。

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — 報告 TSC1/TSC2 的喪失會以對 rapamycin 敏感的方式抑制 PDGFR 表現，並指出 mTOR 訊號控制 PDGFR 表現的機制尚未釐清。
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]] — 報告 SIRT3 參與 α7 菸鹼型乙醯膽鹼受體對 PDGFR-BB 所誘導之血管平滑肌遷移的抑制，這是一種粒線體 SIRT3 依賴性的效應。

## Connections

- [[Platelet-Derived Growth Factor|血小板衍生生長因子]] — 配體家族（PDGF-AA、AB、BB、CC），其二聚化結合即為活化事件；配體的身分決定哪一種受體發生二聚化，因而決定哪一種反應。
- [[Receptor Tyrosine Kinases|受體酪胺酸激酶]] — PDGFR 所屬的結構類別，共享五個 Ig 樣結構域的胞外架構與分開的活化環激酶結構域。
- [[Imatinib]] — 受體酪胺酸激酶抑制劑的原型，也是第一個針對由定義性致癌突變驅動之受體激酶獲得驗證的藥物。
- [[Dasatinib]] — 第二代抑制劑，對 ABL 與兩個 PDGFR 旁系同源蛋白皆具活性，用於面對 imatinib 阻抗或不耐受的情況。
- [[PI3K-Akt Signaling]] — PDGFR 訊號最主要的促增殖輸出，經由 p85 停靠；這也是在某些情境下受體酪胺酸激酶抑制劑與 PI3K 抑制劑能互相取代的原因。
- [[mTOR]] — mTORC1 在 TSC1/TSC2 下游控制 PDGFR 受體的豐度，在配體結合之上疊加了第二層調控。
- [[TSC1]] — TSC1/TSC2 複合體的一半，其喪失會以對 rapamycin 敏感的方式提升 PDGFR 表現；是養分感測路徑與受體層級之間的機制性連結。
- [[Fibrosis|纖維化]] — 肺部、肝臟與腎臟中慢性 PDGFR 訊號所定義的下游病理之一。
- [[Astrocytes|星狀膠細胞]] — PDGFR 訊號在損傷後中樞神經疤痕形成上是活躍的研究標的。
- [[PDGFAA]] — 兩個配體基因之一；PDGFAA 同時也餵養血小板衍生生長因子相關生物學，兩篇註記應互相交叉連結。
- [[Angiogenesis|血管新生]] — 周細胞與平滑肌中的 PDGFRβ 訊號對血管成熟是必需的，因此受體阻斷除了腫瘤細胞本身的效應外，也會損害腫瘤血管新生。
- [[Proteostasis|蛋白質恆定]] — 並非直接連結，但上述受體豐度受 mTORC1 依賴性控制，正是 PDGFR 訊號落在自噬所屬的養分感測網絡之內的原因。

## Linking Summary

- 新增連結：[[Platelet-Derived Growth Factor|血小板衍生生長因子]]、[[Receptor Tyrosine Kinases|受體酪胺酸激酶]]、[[Imatinib]]、[[Dasatinib]]、[[PI3K-Akt Signaling]]、[[mTOR]]、[[TSC1]]、[[TSC2]]、[[Fibrosis|纖維化]]、[[Astrocytes|星狀膠細胞]]、[[PDGFAA]]、[[Angiogenesis|血管新生]]、[[Atherosclerosis|動脈粥狀硬化]]、[[Idiopathic Pulmonary Fibrosis|特發性肺纖維化]]
- 建議建立的新實體註記：[[PDGFRA]]、[[PDGFRB]]（上述論述將兩個旁系同源蛋白視為彼此有別，卻共用本篇註記，因此最終各自都應擁有自己的條目）、[[FIP1L1-PDGFRA]]、[[Gastrointestinal Stromal Tumor]]、[[Eosinophilic Disorders]]、[[Tyrosine Kinase Inhibitor]]、[[Activation Loop]]、[[Pleckstrin Homology]]
- 應強化的連結：[[PDGFR]] ↔ [[PDGFAA]]（配體–受體配對尚未從配體側記錄）、[[PDGFR]] ↔ [[Fibrosis|纖維化]]（纖維化相關註記將 PDGFRB 阻斷列為近似衰老細胞清除的介入手段，卻沒有對應的標的註記）