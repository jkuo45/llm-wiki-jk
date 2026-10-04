---
title: HuR
description: 'HuR（ELAVL1，Hu antigen R）是 ELAVL 家族中廣泛表現的 RNA 結合蛋白，含有三個 RNA 辨識基序，可結合 3 端 UTR 中的 AU rich 元素並穩定所結合的 mRNA。它是 m6A 讀取蛋白，與 IGF2BP1 協同，並將環境溫度與熱休克及代謝相關 mRNA 的表現連結起來。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - rna-binding
  - post-transcriptional-regulation
  - aging
  - senescence
aliases: [ELAVL1, Hu antigen R, HuR, Hu protein R, embryonic lethal abnormal vision-like 1]
---

# HuR

## 概觀

HuR（**ELAVL1**，Hu antigen R）是 **ELAVL**（embryonic lethal abnormal vision-like）RNA 結合蛋白家族的奠基成員，同族成員還包括 ELAVL2/HuB、ELAVL3/HuC 與 ELAVL4/HuD。HuD 是在小細胞肺癌與神經母細胞瘤中被辨識到的副腫瘤性 Hu 抗原；HuR 則是其中**廣泛表現**的成員。

HuR 的核心功能很單純，而其標的集合極為龐大：它結合 3′ UTR 中的 AU rich 元素（ARE），並**穩定**所結合的 mRNA，使其免於去腺苷酸化與外切核酸分解。由於 ARE 存在於很大比例的人類轉錄本的 3′ UTR 中，HuR 就像一個廣泛的調節閥，控制 mRNA 穩定性，進而決定蛋白質組的組成。

## 結構與結構域

人類 HuR 為 326 個胺基酸殘基（UniProt Q15717），含有三個 RNA 辨識基序（RRM）：

- **RRM1**（殘基約 20–98）— 主要的 ARE 結合結構域。在體外實驗中優先結合 5′-UUUU[AG]UUU-3′。
- **RRM2**（殘基約 106–186）— 「HuD 樣」的 RRM2，與 RRM1 協同參與 ARE 辨識。
- **RRM3**（殘基約 244–322）— *定位可變*的 RRM；它參與 poly-A 尾的互動與數種蛋白質伙伴的結合，也是結合某類非典型經典 ARE 的 3′ UTR 特徵所需的結構域。
- **鉸鏈區**位於 RRM2 與 RRM3 之間（殘基約 187–243）— 一段彈性連接子，其構形在 HuR 與 HuD 之間不同，並同時參與 RNA 結合時的構形變化與穿梭行為。
- **沒有催化結構域。** HuR 不具酵素活性，純粹作為 RNP 組分作用。它在溶液中以單體作用，在 RNA 上則於*體外*以同源二聚體作用——二聚化發生在 RNA 結合之前。

RRM1/2 在無配體與 RNA 結合形態下的 X 射線結構顯示，RRM1 是主要的 ARE 結合結構域，且**RNA 結合會誘導構形變化**，使 RNA 能與結構域間連接子及 RRM2 形成次級接觸，顯著提升親和力。

## 作用機制

> [!info] ARE 辨識與穿梭
> HuR 結合多聚 U 元素與 3′ UTR 中的 AU rich 元素；它高親和力地結合 *FOS*（含 AUUUA、AUUUUA、AUUUUUA 基序的 27 nt 核心）與 *IL3* 的 ARE。這種結合將 ARE 從去腺苷酸化酵素機構中遮蔽，減慢 poly(A) 縮短，因而延緩外切核酸分解。

- **穿梭。** HuR 恆定存在於細胞核並在核與細胞質間穿梭。經 **MK2（MAPKAPK2）** 與 **PKCδ（PRKCD）** 磷酸化可促進其由細胞核轉位至細胞質，在那裡 HuR 與游離及與細胞骨架結合的多核糖體相結合。HuR 亦定位於**應激顆粒**與 **P-body**。
- **m6A 偶聯。** HuR 優先結合*未被* N6-甲基腺苷修飾的 mRNA，穩定它們並因此促進胚胎幹細胞分化。它也能結合含 m6A 的 mRNA 並對 *MYC* mRNA 的穩定性有所貢獻。在膀胱癌中，HuR 與 m5C 讀取蛋白 YBX1 攜手穩定過度甲基化的 m5C 修飾致癌基因轉錄本；YBX1 的冷休克結構域中 W65 的吲咯環辨識 m5C，而其結合會招募 HuR。HuR 亦與 m6A 讀取蛋白 IGF2BP1–3（IGF2BP 的交互作用由一小段調控胜肽增強）、ILF3/NF90、HNRNPL、HNRNPU、PCBP2、PTBP2、STAU1/2、SYNCRIP 與 YBX1 在大型 mRNP 複合體中合作，也與 AGO1/AGO2 合作。
- **交互作用蛋白。** 已知伙伴包括 ANP32A、ZNF385A（在一個 mRNA 依賴性複合體中調控 *TP53* 與 *CCNB1* mRNA 的核輸出）、DHX9、DDX3X、TARDBP、SDCBP、PLEKHN1（將 HuR 招募至應激顆粒）、SHFL 與 FXR1。在巨噬細胞受到 LPS 刺激後，HuR 可由 **CARM1/PRMT4** 在 Arg217 上進行精胺酸甲基化。

## 生理角色

- **對溫度的反應。** 由於帶有 ARE 的轉錄本包含熱休克蛋白的 mRNA，HuR 將環境溫度與蛋白質組組成連結起來：溫暖使 HuR 傾向於在細胞質中穩定 ARE mRNA。這是冷暴露與以溫度為基礎的長壽推測之部分依據。
- **發炎與免疫訊號。** HuR 穩定編碼胞激素與黏附分子的 mRNA。小分子 HuR 抑制劑（MS-444、dehydromutactin、okicenone）可降低胞激素表現與 T 細胞活化——這是首次證明 HuR 在化學上「可成藥」。
- **代謝。** 肝臟中的 HuR 透過 C/EBPβ/PCK1 軸調節葡萄糖代謝。
- **凋亡與 DNA 修復。** HuR 穩定抗凋亡基因的 mRNA；面對氧化性 DNA 損傷時，HuR 被 Chk2 磷酸化並自 *SIRT1* mRNA 解離，使 SIRT1 下降，並將平衡由細胞衰老推向凋亡。

## 病理學

> [!important] HuR 在癌症與老化中被穩定
> - **癌症。** HuR（ELAVL1）過量表現會穩定致癌、胞激素與抗凋亡轉錄本，並與多種腫瘤的不良預後相關；它在功能上與 BRAF 驅動的程式協同。因此降解 HuR 可暴露 BRAF 驅動癌症的依賴關係。HuR 亦與 TTP/ZFP36 合作作為轉錄後調控節點，並與 YBX1 合作參與 m5C 驅動的尿路上皮癌。
> - **細胞衰老與老化。** HuR 是細胞衰老的*抑制因子*。它結合並穩定增殖基因的 mRNA——*c-Fos*、Cyclin A、Cyclin B——以及 *SIRT1* mRNA（透過 3′UTR 上的 HuR 結合位）。衰老過程中的[[AMPK]]活化會阻止 HuR 由細胞核向細胞質轉位，降低這些增殖基因的轉譯，並協助細胞週期 arrest。HuR 的量在衰老期間大幅下降，這也被認為是 SIRT1 蛋白隨年齡下降的原因之一。由於血小板是 HuR 的主要儲存庫，HuR 已被提出為透過血小板浸潤而發揮作用的全身性老化調節因子。
> - **神經退化。** 包括 HuR 在內的 ELAVL 蛋白牽涉腦老化與神經退化過程中的 mRNA 去向，以及 ALS 網路分析。

## Documents

- [[_document_ - Mitochondrial dysfunction in cellular senescence a bridge to neurodegenerative disease|Mitochondrial dysfunction in cellular senescence a bridge to neurodegenerative disease]] — AMPK 活化阻止 HuR 由細胞核向細胞質轉位；HuR 穩定增殖基因的 mRNA（c-Fos、Cyclin A、Cyclin B），因此其自細胞質撤出會降低這些基因的轉譯並有助增殖性 arrest。
- [[_document_ - Sirtuins, a promising target in slowing down the ageing process|Sirtuins, a promising target in slowing down the ageing process]] — SIRT1 轉錄本的 3′UTR 中存在 HuR 結合位；HuR 穩定它，HuR 的量在衰老期間下降，而氧化性 DNA 損傷引起的 Chk2 磷酸化會使 HuR 自 SIRT1 mRNA 解離，使細胞推向凋亡。

## Connections

- [[Cellular Senescence|細胞衰老]] — HuR 穩定增殖性 mRNA 與 *SIRT1* mRNA；其 AMPK 活化時自細胞質撤出，以及隨衰老而下降，都是衰老抑制增殖的機制之一部分。
- [[AMPK]] — 活化的 AMPK 阻止 HuR 由細胞核向細胞質轉位，這是從能量壓力通往 HuR 穩定的增殖性 mRNA 轉譯減少的直接機制途徑。
- [[SIRT1]] — HuR 結合並穩定 *SIRT1* 的 3′UTR；氧化性 DNA 損傷後 Chk2 介導的磷酸化使 HuR 自 *SIRT1* mRNA 解離。由於 SIRT1 活性隨年齡下降，HuR 的減少促成 SIRT1 蛋白的年齡相關流失。
- [[Cell Cycle|細胞週期]] — HuR 穩定 Cyclin A 與 Cyclin B 的 mRNA，使其成為細胞週期進程的直接轉錄後支持因子。
- [[MYC]] — HuR 透過結合含 m6A 的轉錄本而對 MYC mRNA 穩定性有所貢獻，將 HuR 與核心增殖程式連結。
- [[SASP]] — HuR 穩定胞激素 mRNA，因此間接支持發炎性分泌程式；當 SASP 組件是帶有 ARE 的轉錄本時，HuR 有助於其持續存在。
- [[IGF1R]] — 並非直接標的，但 IGF2BP1 是 HuR 的 m6A 讀取伙伴；IGF2BP 軸與 HuR 軸在穩定相同的致癌轉錄本上匯聚。
- [[Heat Shock Proteins|熱休克蛋白]] — 帶有 ARE 的 HSP mRNA 是 HuR 的標的，這是 HuR 溫度感知角色的分子基礎。
- [[DNA Repair|DNA 修復]] — 面對氧化性 DNA 損傷時 Chk2 對 HuR 的磷酸化，是把 DNA 損傷與 SIRT1 下降、以及從細胞衰老轉向凋亡連結起來的開關。

## Linking Summary

- 新增連結：[[Cellular Senescence]]、[[AMPK]]、[[SIRT1]]、[[Cell Cycle]]、[[MYC]]、[[SASP]]、[[IGF1R]]、[[Heat Shock Proteins]]、[[DNA Repair]]
- 建議建立的新實體註記：[[ELAVL1]]、[[ELAVL family]]、[[ELAVL2]]、[[ELAVL3]]、[[ELAVL4]]、[[HuD]]、[[Paraneoplastic neurologic syndrome]]、[[RNA recognition motif]]、[[AU-rich element]]、[[YBX1]]、[[CARM1]]、[[PRMT4]]、[[m6A]]、[[IGF2BP1]]、[[mRNA decay]]、[[Deadenylation]]、[[Stress granule]]、[[P-body]]、[[MK2]]、[[PRKCD]]、[[ILF3]]、[[Zinc finger protein 385A]]、[[Neuropeptide Y]]、[[PCK1]] — 已移除（已存在）：CEBPβ、CHK2、MAPKAPK2、PKCδ、Small-cell lung cancer
- 應強化的重點連結：[[HuR]] ↔ [[SIRT1]]、[[HuR]] ↔ [[AMPK]] ↔ [[Cellular Senescence]]、[[HuR]] ↔ [[Cell Cycle]]