---
title: NRF1
description: '核呼吸因子 1（NRF1/NFE2L1）是一種 bZIP 轉錄因子與同源二聚體，可結合核編碼粒線體基因啟動子上的 MCB 元件，將粒線體生物合成、呼吸作用與血基質合成與粒線體基因體協調一致。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription-factor
  - mitochondria
aliases: [Nuclear Respiratory Factor 1, Nrf1, NFE2L1, alpha-PAL, TCF11]
---

# NRF1

NRF1 是協調核基因體與粒線體基因體的轉錄因子。它活化粒線體呼吸、生物合成與血基質合成所需的核編碼基因；對粒線體編碼的次單元，它則透過活化粒線體轉錄機制而間接作用。

> [!warning] 命名陷阱
> 「NRF1」是兩個無關基因共用的縮寫。**NRF1/NFE2L1** 是本頁討論的這個轉錄因子。**NRF2/NFE2L2** 則是抗氧化反應調節因子，是另一種蛋白，具有不同的結構域、不同的 DNA motif 與不同的半衰期。本文所討論基因的 HGNC 符號為 *NFE2L1*，而文獻資料庫在歷史上曾將兩者混為一談。

## 結構與結構域

人類 NRF1（NRF1a，742 aa）對轉錄因子而言有著不尋常的模組化結構。Nrf1 被描述為具有九個離散區域：

| 區域 | 特性 |
| --- | --- |
| **NTD**（N 端結構域，約殘基 1–155） | 含有一段疏水性的類跨膜區段，將 NRF1a 定位到內質網膜；可減弱核定位，因而抑制轉錄活化。NRF2 中沒有此區域。 |
| **AD1**（酸性轉錄活化結構域 1） | 組成型的轉錄活化元件。 |
| **NST 結構域** | 富含 Asn/Ser/Thr 的片段，帶有多個 N-聚醣化位點；具有品質管制與腔室滞留功能。 |
| **AD2** | 第二個酸性轉錄活化區域。 |
| **SR**（絲胺酸重複序列） | 調節性磷酸化區域；S47 位點位於此處。 |
| **NC**（核定位／鹼性結構域） | 核輸入。 |
| **bZIP** | 鹼性區域加上白胺酸拉鍊——即 DNA 結合與二聚化模組。 |

其 DNA 結合結構域與其他 Cap'n'Collar（CNC）家族 bZIP 因子共用，在結構上有別於 Fos/Jun 或 ATF 家族的 bZIP。

## 機制

> [!info] 機制
> NRF1 形成同源二聚體（也可與小型 Maf 蛋白形成異源二聚體），結合 **MCB（粒線體控制區）元件**——一個以 `YGCGCAYGCGCR` 為中心的雙重對稱共識序列——這些元件存在於核編碼粒線體基因的啟動子與遠端增強子中。NRF1 透過此途徑以轉錄方式活化呼吸鏈次單元、粒線體核糖體蛋白、血基質生合成酵素與脂質處理酵素，並驅動 **TFAM**、TFB1M 與 TFB2M 的核基因——這三者正是粒線體轉錄因子複合體的組成部分——從而也間接控制粒線體編碼的次單元。

其調節方式相當迂迴，因此常成為意外驚訝的來源：

- **內質網定位與逆轉位。** NRF1a 在內質網核糖體上合成，並藉其 N 端跨膜結構域插入內質網膜。品質管制機制（腔室內的聚醣化、[[ER Stress|內質網壓力]]／UPR 驅動的錯誤折疊蛋白降解）是 NRF1 取得轉錄能力所必需的；它必須先經逆轉位、去聚醣化、去醣基化，並在細胞質中被降解，才能輸入細胞核。因此 NRF1 將粒線體生物合成與內質網蛋白體穩態相互耦合——這是與 UPR 之間的直接機制連結。
- **O-GlcNAcylation。** NRF1 的 O-GlcNAc 修飾會隨養分／葡萄糖狀態改變，而這對其核輸入與 DNA 結合是必需的，並被提出可將養分感測與粒線體生物生成相耦合。
- **磷酸化與降解。** Cyclin D1–CDK4/6 在 S47 處磷酸化 NRF1，促進其周轉，因而將核內 DNA 合成與粒線體功能相互協調。ARF 的結合以及泛素連接酶 Mdm2 與 HUWE1 也會調節其穩定性。

## 生理角色與疾病關聯

Nrf1 廣泛且構成型地表現（與可誘導的 NRF2 不同），且幾乎所有具核細胞型態都需要它。小鼠的條件式剔除會造成粒線體功能障礙、氧化磷酸化缺陷與代謝失調；據報告 Nrf1 對心肌細胞的粒線體成熟以及視網膜感光細胞的發育皆屬必需。相較於小鼠文獻所暗示的，人類疾病的因果關係確立程度較低，雙等位或新生突變的 NRF1 變異也才剛開始被報告。

> [!info] 來源：[[_document_ - Mitohormesis - 2023_NOV]]
> 這篇 mitohormesis 綜述將 NRF1 與 NRF2 並列為酵母蛋白酶體壓力調節因子 RPN4/PDR3 在哺乳動物中最佳的候選對應物，並指出 NRF1/NRF2 會以轉錄方式調節蛋白酶體組成，而近期一項人類研究則指出，在哺乳動物的粒線體錯誤折疊蛋白反應中有一條 NRF1 與 HSF1 依賴的途徑參與——該反應由粒線體 ROS 增加加上細胞質蛋白蓄積這個雙重訊號所觸發。

> [!info] 來源：[[_document_ - Roles of SIRT3 in aging and aging-related diseases]]
> 這篇 SIRT3 綜述將 NRF1 置於 AMPK/PGC-1α/ERRα/SIRT3 級聯之中，報告指出 resveratrol 可逆轉對 PGC-1α、NRF1 與 TFAM 的抑制，並在鎘損傷的細胞中恢復 PINK1/Parkin 媒介的粒線體自噬。

有兩個受到密切關注的領域：

- **氧氣感測與 HIF 途徑的交互作用。** NRF1 將粒線體生物生成與以 [[HIF-1α]] 為主的缺氧反應相互協調；在缺血期間，兩者的平衡會左右粒線體的命運。
- **炎性老化。** 2025 年 *Nature Communications* 的一項研究報告指出，NRF1 媒介的先天免疫訊號驅動炎性老化，將 NRF1 定位為一個節點而非單純的保護因子——這對補劑文獻中常見的「提升 NRF1 以促進長壽」說法提供了有用的制衡。

## Documents

- [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis - 2023_NOV]]——將 NRF1/NRF2 列為酵母 RPN4/PDR3 蛋白酶體壓力調節因子在哺乳動物中的功能性類比，並指出哺乳動物 UPRmt 反應中有一條 NRF1/HSF1 途徑參與。
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases|Roles of SIRT3 in aging and aging-related diseases]]——將 NRF1 置於 AMPK/PGC-1α/ERRα/SIRT3 軸的下游，是 resveratrol 逆轉 PGC-1α、NRF1 與 TFAM 抑制的標的之一，並伴隨 PINK1/Parkin 粒線體自噬的恢復。
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026]]——將 NRF1 的轉錄方案與 PGC-1α、FOXO 並列為 SIRT1/SIRT3 的標的，其活性在老化過程中因 NAD+ 可用性降低而受損。

## Connections

- [[NRF2]]——最常被混淆的兄弟：同為 CNC-bZIP 因子，與 NRF1 共用 DNA 結合結構域，但結合的是抗氧化反應元件，且由 [[Keap1]] 控制的降解所調節，而非 NRF1 的內質網逆轉位途徑。兩者也會競爭某些標的基因的啟動子。
- [[TFAM]]——NRF1 最具後果的下游標的；活化 TFAM 會啟動粒線體 DNA 轉錄，這就是核內 NRF1 訊號傳達至粒線體基因體的途徑。
- [[PGC-1α]]——在粒線體啟動子上共同活化 NRF1 的輔活化因子；NRF1 提供 DNA 結合功能，PGC-1α 提供依代謝狀態而定制的活化，因此兩者在粒線體生物生成中功能上不可分割。
- [[ERRalpha]]——在同一批啟動子上的另一個核受體家族輔活化因子，也是 NRF1 與 [[SIRT3]]/AMPK 軸之間的交叉點。
- [[Mitochondrial Biogenesis|粒線體生物生成]]——NRF1 是此過程的轉錄核心；缺乏它對 MCB 元件的活化，呼吸能力就不會有協調一致的提升。
- [[Mitochondrial DNA|粒線體 DNA]]——NRF1 控制粒線體基因表現的核內那一半，這是細胞核設定 13 個蛋白質編碼 mtDNA 基因轉錄速率的唯一途徑。
- [[Mitochondrial Function|粒線體功能]]——NRF1 失去功能是造成細胞呼吸能力下降最直接的遺傳途徑之一。
- [[SIRT3]]——作用於 NRF1 上游（經由 AMPK/PGC-1α/ERRα 級聯），本身也是 NAD+ 依賴性酵素，而其受質供應取決於與 NRF1 所控制的相同代謝狀態。
- [[ER Stress|內質網壓力]]——出乎意料地位於上游：NRF1a 是一種內質網膜蛋白，其轉錄能力仰賴內質網品質管制，使 UPR 成為粒線體生物生成的一項直接輸入。
- [[Mitochondrial Unfolded Protein Response|粒線體錯誤折疊蛋白反應]]——NRF1/HSF1 是此壓力反應的哺乳動物組成成分，有別於 ATF4 分支，並由粒線體 ROS 與細胞質錯誤折疊蛋白的合併訊號觸發。
- [[HIF-1α]]——缺氧期間相互競爭的轉錄方案；NRF1/HIF-1 的平衡決定細胞是進行呼吸還是糖解作用。
- [[Inflammaging|炎性老化]]——近期被提出為 NRF1 驅動的輸出，使 NRF1 從促進長壽的因子重新定位為一把雙刃劍。

## Linking Summary

- 新增連結：[[NRF2]]、[[TFAM]]、[[PGC-1α]]、[[ERRalpha]]、[[Mitochondrial Biogenesis]]、[[Mitochondrial DNA]]、[[Mitochondrial Function]]、[[SIRT3]]、[[ER Stress]]、[[Mitochondrial Unfolded Protein Response]]、[[HIF-1α]]、[[Inflammaging]]、[[Keap1]]
- 建議建立的註記：[[MCB Element]]、[[Nuclear Respiratory Factor 2]]、[[TFB1M]]、[[TFB2M]]、[[O-GlcNAcylation of NRF1]]——因已存在而移除：Cyclin D1
- 應強化的重點連結：[[NRF1]] ↔ [[NRF2]]（兩個註記都應帶有明確的「勿混淆」callout——這是此領域最常見的錯誤）、[[NRF1]] ↔ [[TFAM]]（NRF1 → TFAM → mtDNA 轉錄的因果鏈目前兩個方向都未陳述）