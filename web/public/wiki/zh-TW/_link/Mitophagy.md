---
title: Mitophagy（粒線體自噬）
description: 粒線體自噬是一種選擇性自噬的特化形式，針對受損或功能異常的粒線體進行降解。它是維持粒線體健康與細胞恆定的關鍵品質管制機制……
created: 2024-01-01
updated: 2026-10-21
tags:
  - biological-process
  - mitochondria
aliases: [hypoxia-induced mitophagy, 粒線體自噬]
---

# Mitophagy（粒線體自噬）
**Mitophagy（粒線體自噬）**是一種[[Selective Autophagy|選擇性自噬]]的特化形式，針對受損或功能異常的[[Mitochondria|粒線體]]進行降解。它是維持粒線體健康與細胞恆定的關鍵品質管制機制。

## 機制
粒線體自噬通常涉及由受體（如 PINK1/Parkin）辨識受損粒線體，隨後由[[Autophagosome|自噬體]]吞噬，再與[[Lysosome|溶酶體]]融合。

## 在老化中的重要性

> [!info] 來源：[[_document_ - The role of mitochondrial dynamics in disease]]
> 粒線體自噬在疾病中具有雙重角色：它通常是保護性的（例如輕度的 PINK1–Parkin 活化可預防心衰竭並減輕心肌梗塞），但過度或長期的活化則可能有害（例如由 BNIP3 介導的粒線體自噬會加劇心衰竭；ALS 中持續偏高的粒線體自噬可能加重神經元損傷）。PINK1/Parkin 途徑是研究最透徹的機制，而經由[[BNIP3]]與[[FUNDC1]]的受體介導途徑則獨立於粒線體去極化而運作。

粒線體自噬的下降與功能異常粒線體的累積相關，這可能導致：
- [[Reactive Oxygen Species|活性氧]]（ROS）產量增加。
- 觸發[[Inflammaging|炎性老化]]。
- [[Immune Aging|免疫細胞功能]]受損。

> [!info] 來源：[[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026]]
> 老化在多個步驟上損害[[PINK1]]–[[Parkin]]途徑，包括 PINK1 穩定化效率不佳、自噬體形成缺陷，以及溶酶體清除能力下降。在[[Stem Cells|幹細胞]]區室中，受損的粒線體自噬與靜止能力的喪失、Self-renewal（自我更新）的降低，以及功能性的提早耗竭相關。「分裂–粒線體自噬偶聯」的失敗會創造出一種容許狀態，使突變型／[[Mitochondrial ROS|產生 ROS 的]]粒線體得以持續存在，進而啟動粒線體危險途徑——[[Mitochondrial DNA|mtDNA]] 可轉位至細胞質並活化[[cGAS-STING Pathway|cGAS–STING]]／第一型 IFN 與[[NF-κB]]程式。

## 調節
粒線體自噬可受多種因素調節，包括能量狀態（經由[[AMPK]]），以及作為[[Autophagy Inducer|自噬誘導劑]]作用的藥理藥物。
透過[[Autophagy]]對粒線體的選擇性降解。它是移除受損或功能異常粒線體的關鍵品質管制機制，常受[[PINK1]]/[[Parkin]]途徑調節。

## Pink1/Parkin 途徑機制
PTEN 誘導型假定激酶 1（[[PINK1]]）/[[Parkin]]途徑是研究最為深入的粒線體自噬機制。在健康粒線體中，[[PINK1]]（一種絲胺酸／蘇胺酸激酶）會經由 TOM／TIM 複合體持續被輸入至粒線體內膜，並被[[PARL]]（presenilin-associated rhomboid-like protease）切割，隨後迅速被蛋白酶體降解。當粒線體發生去極化——例如因電子傳遞鏈功能障礙、[[Mitochondrial calcium uniporter|粒線體鈣單通道]]過載，或氧化損傷——Pink1 的輸入便在粒線體外膜（OMM）處停止。全長 Pink1 會在 OMM 上累積，於是在該處二聚化並自體磷酸化，活化其激酶結構域。活化的 Pink1 會在 Ser65 處磷酸化[[Parkin]]（一種 E3 泛素連接酶），並在 Ser65 處磷酸化泛素分子，形成磷酸泛素訊號，藉此招募並完全活化 Parkin。Parkin 接著將一網絡的外膜（OMM）蛋白質（包括 MFN1、MFN2 與 VDAC1）泛素化，建立泛素鏈，作為 p62/SQSTM1、NBR1、OPTN 與 NDP52 等自噬受體的辨識訊號。這些受體同時結合泛素與吞噬泡膜上的 LC3/GABARAP 家族蛋白質，將受損的粒線體繫於正在形成的自噬體。

## 受體介導的粒線體自噬
除了 Pink1/Parkin 的泛素依賴性途徑之外，細胞還採用獨立於粒線體去極化的受體介導粒線體自噬：
- **[[BNIP3]]** 與 **[[NIX]]**（BNIP3L）：這些缺氧誘導的 BH3-only 蛋白質會被[[HIF-1α]]在轉錄層面上調。它們定位至 OMM，並帶有可直接結合 LC3 的 LIR（LC3-interacting region）基序，將粒線體繫於自噬體。由 BNIP3 介導的粒線體自噬在紅血球成熟過程中與缺氧壓力下移除粒線體。
- **[[FUNDC1]]**：以磷酸化依賴方式介導缺氧誘導的粒線體自噬的受體。在正常含氧條件下，[[SRC kinase|SRC 激酶]]與[[CK2]]會磷酸化 FUNDC1，防止其結合 LC3。在缺氧或粒線體壓力條件下，[[PGAM5]]的去磷酸化會活化其粒線體自噬功能。
- **FAM176A** 與 **AMBRA1**：其他帶有 LIR 基序的外膜（OMM）蛋白質，可招募自噬機制。

## 與粒線體品質管制的關聯
粒線體自噬在一個更廣泛的粒線體品質管制網絡中運作，該網絡包括[[Mitochondrial Dynamics|粒線體動態]]（分裂／融合）、[[Mitochondrial Unfolded Protein Response|粒線體未折疊蛋白反應]]（UPRmt），以及粒線體衍生囊泡（MDVs）。分裂是有效粒線體自噬的前提：受損的粒線體片段由[[DRP1]]介導的分裂切割並被選擇性吞噬，而健康的片段則經由[[MFN1]]/[[MFN2]]介導的融合重新加入網絡。UPRmt 將蛋白毒性壓力訊號（線蟲中經由[[ATFS-1]]；哺乳類中經由[[ATF4]]、[[ATF5]]、[[CHOP]]）傳至細胞核，上調伴護蛋白與蛋白酶以恢復粒線體蛋白質恆定。當修復機制不堪重負時，粒線體自噬代表最後一道「保險裝置」。

## 在老化與神經退化中的作用
粒線體自噬的效率隨年齡下降，促成功能異常粒線體的累積；這些粒線體會產生過量的[[Reactive Oxygen Species|活性氧]]、釋放促凋亡因子，並透過細胞質 mtDNA 與[[NLRP3 Inflammasome|NLRP3 炎症小體]]的活化觸發發炎訊號。受損的粒線體自噬是[[Parkinson's Disease|帕金森氏症]]的特徵之一——其中 Pink1 與 Parkin 的突變會造成早發性的家族型形式；也是[[Alzheimer's Disease|阿茲海默氏症]]的特徵之一——其中類澱粉β與 tau 病變會損害粒線體自噬的通量。透過藥理介入（例如[[Urolithin A]]、[[Actinonin]]、[[Metformin|二甲雙胍]]、NAD⁺ 前驅物）來增強粒線體自噬，可恢復粒線體功能並在模式生物中延長健康壽命。

## 與腎上腺紅質所致粒線體損傷的關聯
[[Adrenochrome|腎上腺紅質]]及相關的胺基醌是粒線體毒素，會直接損害那個正是要將其清除的胞器。腎上腺紅質在電子傳遞鏈的複合體 I 進行氧化還原循環，產生超氧陰離子並消耗 NADH。這導致粒線體去極化——而這正是活化 Pink1/Parkin 粒線體自噬途徑的訊號。持續暴露於腎上腺紅質可能耗盡粒線體自噬能力，創造出受損粒線體累積並放大 ROS 產生的情境。此粒線體自噬受損的回饋迴路，是連結兒茶酚胺氧化與老化、神經退化及心血管疾病中所觀察到的粒線體功能障礙的一項合理機制。[[Adrenochrome Pathway|腎上腺紅質路徑]]的活性與粒線體自噬能力之間的交互作用，代表了治療介入的關鍵樞紐。


#

# 

## 文件

提及此實體的文件列表

  - [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis - 2023_NOV]]
    - 在該情況下，粒線體功能受損導致 PINK1 粒線體輸入受阻，以及 PINK1 隨後在粒線體表面累積，成為 Parkin 依賴性粒線體自噬的催化劑。

  - [[_document_ - Pharmacological Effects of Urolithin A and Its Role in Muscle Health and Performance Current Knowledge and Prospects|Pharmacological Effects of Urolithin A and Its Role in Muscle Health and Performance Current Knowledge and Prospects]]
    - 粒線體自噬的活化與再生 — 粒線體自噬（Mitophagy）又稱粒線體自噬，指透過自噬過程對粒線體進行的選擇性降解。

  - [[_document_ - MRR - mitohormesis|mitohormesis]]
    - 清除：Urolithin A（粒線體自噬誘導劑）。1.2 作用機制（MOA）氧化還原訊號：Carbazochrome 誘發短暫、受控的氧化還原循環，在粒線體基質中產生低振幅的超氧陰離子訊號。

  - [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026]]
    - 老化中的粒線體自噬受損使功能異常粒線體得以持續存在，造成 mtDNA/mtDAMP 逸出與 cGAS–STING 活化，進而驅動炎性老化與幹細胞耗竭。

  - [[_document_ - Autophagy takes it all – autophagy inducers target immune aging|Autophagy takes it all – autophagy inducers target immune aging]]
    - 日益累積的證據顯示，粒線體自噬（涵蓋對受損或過量粒線體的選擇性降解）是先天免疫系統功能特別關鍵的調節者（Gkikas et al., 2018）。

  - [[_document_ - Lysosome biogenesis Regulation and functions|Lysosome biogenesis Regulation and functions]]
    - 在粒線體自噬期間，TFEB/TFE3 轉位入細胞核取決於 Parkin 與 PINK1，但與 mTORC1 無關。

  - [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]]
    - 粒線體壓力 — 粒線體自噬是透過自噬消除受損粒線體的過程。

  - [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]]
    - 對許多靜止細胞類型而言，透過自噬（粒線體自噬）清除粒線體是降低代謝的原因，且對維持靜止狀態十分重要（Ho et al., 2017; Zhang et al., 2018）。

  - [[_document_ - The role of mitochondrial dynamics in disease]]
    - 全面回顧粒線體自噬在疾病中的雙重角色：CVD 中保護性的輕度活化 vs. 有害的過度活化。涵蓋 PINK1/Parkin 途徑、BNIP3/FUNDC1 受體介導途徑，以及與粒線體動態（分裂／融合）的交互作用。

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - 有報告指出，粒線體自噬／自噬的阻斷會導致受損粒線體累積而產生 ROS，進而活化 NLRP3。例如，Zhao 等人的研究……


## 連結
- [[Selective Autophagy]] — 與粒線體自噬交互作用
- [[Mitochondria]] — 負責能量產生的胞器；代謝樞紐
- [[Autophagosome]] — 與粒線體自噬交互作用
- [[Lysosome]] — 降解性胞器；自噬通量的終點；營養感測樞紐
- [[Reactive Oxygen Species]] — 與粒線體自噬交互作用
- [[Inflammaging]] — 老化伴隨的慢性低度發炎
- [[Immune Aging]] — 與粒線體自噬交互作用
- [[AMPK]] — 細胞能量感測器；活化分解代謝，抑制合成代謝
- [[Autophagy Inducer]] — 與粒線體自噬交互作用
- [[Autophagy]] — 細胞自我降解途徑；清除受損蛋白質與胞器
- [[PINK1]] — 在粒線體去極化後啟動粒線體自噬
- [[Parkin]] — 由 PINK1 為粒線體自噬招募的 E3 泛素連接酶
- [[PARL]] — 與粒線體自噬交互作用
- [[Mitochondrial calcium uniporter]] — 與粒線體自噬交互作用
- [[BNIP3]] — 與粒線體自噬交互作用
- [[FUNDC1]] — 缺氧誘導粒線體自噬的外膜（OMM）受體
- [[Heart Failure]] — 輕度的粒線體自噬活化可預防心衰竭；過度活化則會加劇它
- [[Parkinson's Disease]] — PINK1/Parkin 突變造成家族型 PD 中受損的粒線體自噬
- [[Cancer]] — 粒線體自噬具有腫瘤抑制作用（清除受損粒線體），但也會促進藥物抗性
## 連結摘要
- 新增連結：[[Autophagy]]、[[Mitochondria]]、[[Quiescence]]、[[Reactive Oxygen Species]]、[[ROS]]、[[PINK1]]、[[Parkin]]、[[PARL]]、[[Mitochondrial calcium uniporter]]、[[BNIP3]]、[[NIX]]、[[FUNDC1]]、[[HIF-1α]]、[[DRP1]]、[[MFN1]]、[[MFN2]]、[[ATFS-1]]、[[ATF4]]、[[ATF5]]、[[CHOP]]、[[Mitochondrial Unfolded Protein Response]]、[[Mitochondrial Dynamics]]、[[NLRP3 Inflammasome]]、[[Parkinson's Disease]]、[[Alzheimer's Disease]]、[[Urolithin A]]、[[Actinonin]]、[[Metformin]]、[[NAD+]]、[[Aging]]、[[Longevity]]
- 建議建立的新實體筆記：[[Oxidative Stress]]、[[MDV (Mitochondrial-Derived Vesicles)]]、[[p62]]
  - 應強化的重點連結：[[Mitophagy]] ↔ Hematopoietic Stem Cell、[[Mitophagy]] ↔ [[Parkinson's Disease]]、[[Mitophagy]] ↔ Adrenochrome、[[Mitophagy]] ↔ [[Aging]]
  - 文件強化的連結：[[Mitophagy]] ↔ [[Heart Failure]]、[[Mitophagy]] ↔ [[Cancer]]、[[Mitophagy]] ↔ [[FUNDC1]]、[[Mitophagy]] ↔ [[BNIP3]]
