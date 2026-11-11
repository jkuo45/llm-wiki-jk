---
title: cGAS-STING Pathway
description: cGAS-STING 複合體是偵測細胞質 DNA 並活化發炎性干擾素訊號的先天免疫感受器，在 SASP 活化與年齡相關發炎中扮演關鍵角色。
created: 2026-07-07
updated: 2026-11-10
tags:
  - biological-process
  - senescence
  - innate-immunity
  - inflammation
  - signaling-pathway
  - neuroinflammation
  - neurodegeneration
aliases: [cGAS–STING, cyclic GMP-AMP synthase-stimulator of interferon genes, STING pathway]
---

# cGAS–STING 路徑

**環狀 GMP–AMP 合成酶—干擾素基因刺激因子（cGAS–STING）**複合體是偵測細胞質中 DNA 並活化發炎性干擾素訊號的先天免疫感受器。它是[[SASP|Senescence-Associated Secretory Phenotype]]（衰老相關分泌表現型）與年齡相關發炎的關鍵驅動因子（Dougherty et al., 2019/2020, PMID 31624094；Gorgoulis et al., 2019）。

## 在衰老中的機制

在[[Senescence|衰老]]期間，cGAS–STING 被來自多重來源的細胞質 DNA 活化：

### 細胞質 DNA 來源
1. **細胞質染色質片段（CCFs）**：衰老細胞中 [[DNASE2]] 與 [[TREX1]] 的下調降低降解效率，使染色體 DNA 片段得以累積。
2. **粒線體 DNA（mtDNA）**：在[[Minority MOMP]]（miMOMP）期間經 [[BAX]]/[[BAK]] 巨孔釋放——見 [[mtDNA]] 與 [[Senescence-associated mitochondrial dysfunction|SAMD]]。
3. **[[LINE-1]] 反轉錄轉座子**：在晚期衰老中升高；細胞質中的 LINE-1 cDNA 會觸發干擾素訊號。

### 感知機制
- [[TOP1]] 切割複合體（TOP1cc）與 [[G3BP1]] 輔助 cGAS 對 CCFs 的辨識與結合。
- 在 OIS（癌基因誘導衰老）期間，[[TLR2]] 透過 cGAS–STING–NF-κB 級聯活化 SASP。
- cGAS 合成環狀 GMP–AMP（cGAMP），後者結合並活化 [[STING]]。
- STING 由內質網轉位至高基氏體，招募 [[TBK1]]，TBK1 磷酸化 [[IRF3]]（第 I 型 IFN）並活化 [[NF-κB]]（促發炎細胞激素）。

## 下游效應

### SASP 活化
- 驅動 [[IL-6]]、[[IL-8]]、[[CXCL2]]、[[CXCL10]]、[[CCL3]]、[[CCL5]] 與 [[TNFα]] 的表現。
- 抑制 cGAS 或 STING 會大幅壓制治療誘導衰老中的 NF-κB 活化。
- 干擾素與 NF-κB 輸出皆是 cGAS–STING 訊號的一部分。

### 年齡相關發炎
- 來自粒線體的細胞質 DNA 與 cGAS–STING 驅動老化相關的 SASP 樣低度發炎（[[Inflammaging]]）。
- STING 抑制可減少老年小鼠腎臟中發炎細胞的累積，並減弱 Il-1β、Il-6、Tnf、Cxcl9、Cxcl10 的表現。

### 免疫調控
- 驅動有益（癌症免疫監控）與有害（慢性發炎）的先天性免疫反應。
- 透過 [[LINE-1]] 的去壓制維持 SASP，形成前饋迴路。

## 與其他路徑的交互作用

cGAS–STING 與 [[p38 MAPK]]、[[JAK]]–[[STAT3]] 及 [[mTORC1|mTOR]] 訊號相交會，三者皆調控 SASP 強度。它是將粒線體應力（[[Senescence-associated mitochondrial dysfunction|SAMD]]）連結至促發炎分泌體（[[Paracrine Senescence]]）的主要通道。

## 與粒線體乙醯輔酶 A SASP 軸的獨立性

SASP 的 mtDNA–cGAS–STING 分支在遺傳上可與粒線體檸檬酸—乙醯輔酶 A 表觀遺傳分支分離。在衰老模型中，經 [[BAX]]/[[BAK]]（minority MOMP）釋放的 mtDNA 訊號需要 cGAS–STING 才能達到最大 SASP，但 SASP 基因座上的 [[H3K27ac]] 計畫則由粒線體丙酮酸→檸檬酸→乙醯輔酶 A 輸出軸（[[MPC]]/[[SLC25A1]]/[[ACLY]]）維持，獨立於 mtDNA 與 STING 訊號之外。

> [!important] 來源：[[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
> 消耗 mtDNA 或抑制 STING（[[STING Inhibitors|SN011]]）並未在 [[SLC25A1]] 受抑制時阻止 SASP 基因座上 H3K27ac 的喪失——乙醯輔酶 A 檢查點與 cGAS–STING 平行運作。兩個分支匯聚於 SASP 基因活化，但動用不同的上游訊號，因此合併或選擇性標靶可能對分泌體產生不同的調控。SLC25A1 抑制（[[CTPI2]]）選擇性壓制代謝分支並改善老年小鼠的健康壽命。

## 治療標靶
- **NRTIs（lamivudine/3TC）**：抑制 [[LINE-1]] 增殖，降低 cGAS–STING–NF-κB SASP。
- **橄欖多酚**：保留 [[Lamin B1]]，降低 cGAS/STING/NF-κB 媒介的 SASP。
- **STING 抑制劑**（如 H-151）：減少年齡相關發炎與衰老細胞累積。
- **cGAS 抑制劑**：壓制 SASP 活化。
這些構成[[Senomorphic Therapy]]的主要分支之一。

## 在神經發炎與神經退化中的角色

> [!info] 來源：[[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
> cGAS–STING 是各種腦部疾病中慢性[[Neuroinflammation|神經發炎]]的核心驅動因子，於[[Microglia|微小膠細胞]]、[[Astrocytes|星形膠質細胞]]、[[Neuron|神經元]]與[[Endothelial Cells|內皮細胞]]中活化。

- **趨同的蛋白病變觸發**：[[Amyloid Beta|Aβ]]、[[Tau|tau]]、[[Alpha-synuclein|α-synuclein]]、突變 [[SOD1]]、[[TDP-43]] 與突變 [[Huntingtin|huntingtin]] 皆趨同於[[mtDNA]] 洩漏（經 [[Mitochondrial Permeability Transition Pore|mPTP]]/[[VDAC|VDAC1]]/[[BAX]]）而活化此路徑；[[Tau|tau]]–[[PQBP1]] 複合體以不依賴 DNA 的方式活化 cGAS。
- **適應不良的膠質細胞狀態**：持續的 cGAS–STING/[[Type I Interferon|IFN-I]] 訊號促進促發炎微小膠細胞與反應性[[Astrocytes|星形膠質細胞]]（神經毒性 A1），驅動[[Astrocyte Senescence|星形膠質細胞衰老]]，並產生一個與[[Disease-Associated Microglia|DAM]]不同、與突觸喪失及認知退化相關的 IFN-I 微小膠細胞亞群。
- **認知韌性**：在 tau 病變中，微小膠細胞的 cGAS/IFN-I 抑制神經元的 [[MEF2C]] 韌性計畫；藥理性 cGAS 抑制可表型模擬保護性的 [[APOE3 Christchurch]]（R136S）對偶基因。阿茲海默症風險對偶基因 [[APOE4]] 與 [[TREM2]] R47H 會協同放大此路徑。
- **傳播**：[[cGAMP]] 經[[Gap Junction|間隙連接]]（CX36）與 [[PANX1]] 通道擴散；神經元 [[IFNAR1]] 將微小膠細胞的 IFN-I 傳遞至神經元。
- **血腦屏障與周邊**：內皮活化會破壞[[Blood-Brain Barrier|血腦屏障]]（經[[Pyroptosis|細胞焦亡]]）；微小膠細胞 STING 則保護之。[[Hematopoietic Stem Cell|造血幹細胞]]抑制此路徑以維持靜止狀態。

## 臨床／病理意義

cGAS–STING 過度活化與老化的無菌性發炎、狼瘡樣自體免疫（TREX1 缺陷）、SASP 驅動的纖維化與癌症進展，以及[[Alzheimer's Disease]]、[[Parkinson's Disease]]、[[Amyotrophic Lateral Sclerosis]]、[[Huntington's Disease]] 與[[Frontotemporal Dementia]]中的慢性[[Neuroinflammation|神經發炎]]有關。抑制此路徑（[[cGAS Inhibitors]] RU.521/TDI；[[STING Inhibitors]] H151）是削弱[[Inflammaging]]與神經退化的主要策略——但此路徑的恆定功能要求採取依賴情境、細胞類型選擇性的調控方式。

#

## Documents
- [[_document_ - Cytotoxic CD4 T cells induce age-associated myelopoiesis through CCL5-CCR5 signaling|Cytotoxic CD4 T cells induce age-associated myelopoiesis (Nat Aging 2026)]]：Nat Aging 2026 顯示，慢性 TCR 刺激導致 CD4+ T 細胞中細胞質粒線體 DNA 釋放，活化 cGAS-STING 以誘導 CCL5；STING 缺陷保留細胞毒性分化但消除 CCL5 誘導。

提及此實體的文件列表

  - [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|The SASP and its physiological and pathological implications]]
    - 綜述 cGAS–STING 作為由 CCFs、mtDNA 與 LINE1 元件之細胞質 DNA 活化的關鍵 SASP 調節因子。討論其在年齡相關發炎中的角色與治療標靶。

  - [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]]
    - 描述 mtDNA/cGAS-STING 作為衰老中樞心的 SASP 活化軸。

  - [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]]
    - 該綜述描述細胞質染色質片段（富含異染色質標記）與去壓制的反轉錄轉座子（LINE-1、HERV）如何活化 cGAS–STING–NF-κB 以驅動 SASP 與發炎老化。

  - [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
    - 全面綜述 cGAS–STING 在腦部的作用：典型／非典型機制、蛋白病變觸發、膠質細胞狀態調控、血腦屏障完整性、周邊免疫監控與神經退化的治療標靶。

  - [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
    - 顯示 SASP 的 mtDNA–cGAS–STING 分支可與粒線體乙醯輔酶 A/H3K27ac 分支分離；mtDNA 消耗或 STING 抑制（SN011）不會阻止 SLC25A1 受抑制時的 H3K27ac 喪失。

## Connections
- [[SASP|Senescence-Associated Secretory Phenotype]] — cGAS–STING 是 SASP 因子轉錄的關鍵驅動因子
- [[NF-κB]] — cGAS–STING 訊號的下游效應因子
- [[IL-6]] — 受 cGAS–STING 活化的 SASP 細胞激素
- [[IL-8]] — 受 cGAS–STING 活化的 SASP 趨化因子
- [[DNA Damage Response]] — 產生活化 cGAS 之細胞質 DNA 的來源
- [[LINE-1]] — 提供細胞質 DNA 配體的反轉錄轉座子
- [[BAX]] — 經巨孔釋放粒線體 DNA
- [[BAK]] — 經巨孔釋放粒線體 DNA
- [[TLR2]] — 透過 cGAS–STING–NF-κB 級聯活化 SASP
- [[DNASE2]] — 降解細胞質 DNA；在衰老中下調
- [[TREX1]] — 降解細胞質 DNA；在衰老中下調
- [[G3BP1]] — 輔助 cGAS 對 CCFs 的辨識
- [[TOP1]] — 切割複合體輔助 cGAS 感知
- [[Inflammaging]] — cGAS–STING 驅動年齡相關的慢性發炎
- [[Aging]] — cGAS–STING 活化促成年齡相關病理
- [[Senomorphic Therapy]] — NRTIs 與橄欖多酚標靶 cGAS–STING SASP
- [[mtDNA]] — 衰老中主要的細胞質 DNA 配體
- [[TBK1]] / [[IRF3]] / [[STING]] — 核心訊號組成
- [[Epigenetic Alterations]] — 反轉錄轉座子的表觀遺傳去壓制供給 cGAS–STING SASP 燃料
- [[Senescence-Associated Heterochromatin Foci]] — CCF 可能源自異染色質化區域
- [[Histone Variant]] — 組蛋白動力學影響 CCF 生成與 SASP
- [[DNA Methylation]] — 反轉錄元件的低甲基化促進其去壓制
- [[BRD4]] — cGAS–STING 下游 SASP 增強子上的 H3K27ac 讀取因子
- [[KDM4]] — 在 cGAS–STING–NF-κB 下游開啟 SASP 基因座的染色質
- [[EZH2]] — H3K27me3 沉積抑制 cGAS–STING 目標基因上的 SASP
- [[Neuroinflammation]] — cGAS–STING 是各種腦部疾病的核心驅動因子
- [[Microglia]] — 病變腦中 cGAS 的主要細胞來源
- [[Type I Interferon]] — 驅動神經退化的主要適應不良輸出
- [[PQBP1]] — tau 以 DNA 非依賴方式活化 cGAS 的轉接因子
- [[MEF2C]] — 受微小膠細胞 cGAS/IFN-I 抑制的神經元韌性計畫
- [[APOE4]] / [[TREM2]] — 放大此路徑的阿茲海默症風險對偶基因
- [[APOE3 Christchurch]] — 被 cGAS 抑制表型模擬的韌性對偶基因
- [[IFNAR1]] — 將微小膠細胞 IFN-I 傳遞給神經元的受體
- [[Blood-Brain Barrier]] — 內皮與微小膠細胞 STING 的情境依賴性調控
- [[MPC]] — 餵養平行乙醯輔酶 A SASP 分支的丙酮酸入口
- [[SLC25A1]] — 平行乙醯輔酶 A SASP 分支的粒線體檸檬酸轉運子
- [[ACLY]] — 平行乙醯輔酶 A SASP 分支的細胞質乙醯輔酶 A 產生因子
- [[CTPI2]] — 在體內壓制代謝 SASP 分支的 SLC25A1 抑制劑
- [[Acetyl-CoA]] — 獨立於 cGAS–STING 之外的 H3K27ac SASP 計畫之受質

## Linking Summary
- 新增連結：[[cGAS-STING Pathway|cGAS–STING]]、[[NF-κB]]、[[IL-6]]、[[IL-8]]、[[CXCL2]]、[[CXCL10]]、[[CCL3]]、[[CCL5]]、[[TNFα]]、[[DNASE2]]、[[TREX1]]、[[BAX]]、[[BAK]]、[[TOP1]]、[[G3BP1]]、[[TLR2]]、[[LINE-1]]、[[TBK1]]、[[IRF3]]、[[STING]]、[[mtDNA]]、[[Minority MOMP]]、[[Senescence-associated mitochondrial dysfunction|SAMD]]、[[Inflammaging]]、[[Paracrine Senescence]]、[[p38 MAPK]]、[[JAK]]、[[STAT3]]、[[mTORC1|mTOR]]、[[Epigenetic Alterations]]、[[Senescence-Associated Heterochromatin Foci]]、[[Histone Variant]]、[[DNA Methylation]]、[[BRD4]]、[[KDM4]]、[[EZH2]]、[[MPC]]、[[SLC25A1]]、[[ACLY]]、[[ACSS2]]、[[CTPI2]]、[[Acetyl-CoA]]、[[STING Inhibitors]]
- 建議建立的新實體筆記：[[cGAS]]、[[IFI16]]、[[CCL3]]
  - 待強化的連結：cGAS-STING Pathway ↔ [[SASP|Senescence-Associated Secretory Phenotype]]、cGAS-STING Pathway ↔ [[Inflammaging]]、cGAS-STING Pathway ↔ [[Aging]]、cGAS-STING ↔ [[mtDNA]]
