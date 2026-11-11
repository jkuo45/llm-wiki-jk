---
title: STING
description: 干擾素基因刺激因子（Stimulator of interferon genes），是一種透過感知細胞質 DNA 在先天免疫中扮演關鍵角色的訊號傳導蛋白。
created: 2024-01-01
updated: 2026-11-10
tags:
  - innate-immunity
  - cgas-sting-pathway
  - interferon
  - dna-sensing
  - autoinflammation
  - protein
aliases:
  - Stimulator of Interferon Genes
  - TMEM173
  - MITA
  - ERIS
  - MPYS
  - NET23
---

# STING

STING（Stimulator of Interferon Genes，干擾素基因刺激因子），又稱 [[STING]]、MITA、ERIS、MPYS 或 NET23，是一種位於內質網（ER）膜上、由 379 個胺基酸組成的跨膜蛋白，在先天免疫對細胞質 DNA 的反應中作為核心訊號轉接蛋白。STING 可被細菌 cGAS 產生的環狀雙核苷酸（CDNs）活化，或被宿主 cGAS 在感知細胞質 DNA 後產生的 2'3'-cGAMP 活化。STING 活化 TBK1 → IRF3 → 第 I 型干擾素（IFN-α/β）的產生，並活化 NF-κB → 促發炎細胞激素。它在對抗病毒與細菌感染、偵測受損的自體 DNA、腫瘤免疫及自發炎性疾病中扮演關鍵角色。

## 結構與結構域

STING 是一種第 III 型跨膜蛋白，其 N 端位於內質網腔內、C 端位於細胞質。其架構由兩個主要功能區域組成：

**N 端跨膜結構域**：含有四個跨膜片段（TM1–TM4），將 STING 錨定在內質網膜上。TM4 帶有膽固醇結合基序，對 STING 活化後運輸至內質網-高基氏體中間區室（ERGIC）與高基氏體相當重要。此跨膜結構域也參與寡聚合化，並媒介 STING 與內質網駐留蛋白 STIM1 的交互作用。

**C 端 STING 結構域（STING-CTD）**：形成專一的同源二聚體，含有 2'3'-cGAMP 與細菌 CDNs 的配體結合口袋。STING-CTD 也編碼 TBK1 結合基序（pLxIS 基序）與 IRF3 結合基序。當環狀雙核苷酸結合時，STING-CTD 會發生劇烈的構象變化——可撓性的蓋狀區域閉合覆蓋住已結合的配體——這會重新定位 TBK1 結合位並促成 [[TBK1]] 的招募。這個「開蓋轉閉蓋」的轉換是啟動下游訊號傳導的分子開關。

## 作用機制

典型的 cGAS-STING 路徑依下列步驟進行：

1. **DNA 感知**：細胞質中的雙股 DNA（來自病原體、粒線體或受損的細胞核）被 cGAS 偵測，cGAS 進而合成第二訊息傳遞分子 2'3'-cGAMP（環狀 GMP-AMP）。
2. **配體結合**：2'3'-cGAMP 被傳遞至內質網膜上的 STING，與其 C 端配體結合口袋結合。
3. **STING 活化**：環狀雙核苷酸的結合誘發構象變化，觸發 STING 寡聚合化，並使其從內質網轉運至內質網-高基氏體中間區室（ERGIC）與高基氏體。
4. **TBK1 招募**：在高基氏體膜上，STING 透過 pLxIS 基序招募 [[TBK1]]。TBK1 自我磷酸化並成為具有催化活性的激酶。
5. **IRF3 磷酸化**：活化的 TBK1 磷酸化 IRF3（干擾素調節因子 3），使 IRF3 形成二聚體、轉位至細胞核，並轉錄 _IFNB1_（第 I 型干擾素，主要為 IFN-β）與干擾素刺激基因（ISGs）。
6. **NF-κB 活化**：STING 也透過 [[TRAF6]]/TBK1 訊號活化 NF-κB，導致包括 TNF-α 與 IL-6 在內的促發炎細胞激素轉錄。
7. **自噬誘導**：STING 透過 LC3 脂化誘導自噬，但其確切機制仍在研究中。這可能有助於清除細胞質 DNA 並限制持續的 STING 活化。

多個細胞質 DNA 感受器匯集於此路徑：cGAS 是細胞質 DNA 的主要感受器；AIM2 偵測 DNA 並活化發炎體；IFI16 感知細胞核 DNA，也能在細胞核內產生 cGAMP。

## 生理功能

STING 在宿主防禦與恆定中扮演多種保護性角色：

**抗病毒防禦**：STING 對偵測 DNA 病毒至關重要，包括單純皰疹病毒（HSV）、巨細胞病毒（CMV）與腺病毒。釋放到細胞質中的病毒 DNA 活化 cGAS，產生 cGAMP 並結合 STING，觸發 IFN-α/β 的產生，在鄰近細胞建立抗病毒狀態。

**抗菌防禦**：胞內細菌（如 *Mycobacterium tuberculosis*，結核分枝桿菌）會被 cGAS-STING 路徑感知。細菌的環狀雙核苷酸（c-di-GMP、c-di-AMP、3'3'-cGAMP）可直接結合 STING，且感染期間釋放的細菌 DNA 會活化 cGAS。

**粒線體 DNA 監控**：粒線體損傷（源自氧化壓力、感染或代謝功能失調）會將粒線體 DNA（mtDNA）釋放至細胞質。cGAS 偵測此 mtDNA，活化 STING 並促進無菌性發炎。這是連結粒線體功能失調與發炎疾病的關鍵機制。

**細胞核 DNA 洩漏偵測**：在有絲分裂期間，核膜崩解使細胞核 DNA 得以接觸細胞質中的 cGAS。此過程通常具耐受性（tolerogenic），但間期細胞的核膜破裂（因機械應力或核層板缺陷）會活化 STING 並驅動與衰老相關的發炎。

**腫瘤免疫**：死亡中的癌細胞釋放 DNA，在免疫細胞與腫瘤細胞中活化 cGAS-STING，透過第 I 型干擾素的產生與樹突細胞對 CD8+ T 細胞的交叉致敏，促進抗腫瘤免疫。

## 病理與臨床意義

**嬰兒期發作的 STING 相關血管病變（SAVI）**：SAVI 由 _TMEM173_ 的功能獲得性突變（如 N154S、V155M、R284G）引起，使 STING 在不依賴 cGAMP 結合的情況下持續活化。患者表現為嚴重的全身性發炎、血管病變（網狀青斑、潰瘍）、間質性肺病與第 I 型干擾素升高。此疾病證實了不受控的 STING 訊號會造成顯著的組織損傷與發炎。

**Aicardi-Goutières 症候群（AGS）**：AGS 是一種由內源性核酸慢性活化 cGAS-STING 所造成的自發炎性干擾素病變。DNase III（TREX1）或 SAMHD1 的突變會損害 DNA 降解，導致細胞質 DNA 累積並慢性活化 cGAS-STING。

**神經退化**：受損粒線體釋放的粒線體 DNA 會活化微小膠細胞中的 cGAS-STING，驅動與阿茲海默症、帕金森氏症及肌萎縮側索硬化症（ALS）相關的神經發炎。STING 抑制已成為神經退化性疾病的治療策略之一。

**衰老—微小粒線體外膜通透（miMOMP）—SASP**：STING 是分裂—miMOMP—mtDNA 下游最主要的 SASP 驅動因子；[[MAVS]] 的作用較溫和且具冗餘性。合併抑制不具加成效應。[[BAX]] 抑制可壓制此分支，同時保留 p16/p21 造成的細胞週期停滯。

## 非典型、細胞核與情境依賴性功能

> [!info] 來源：[[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
> STING 的訊號遠超過典型的 [[IRF3]]/[[Type I Interferon|IFN-I]] 輸出：
> - **自噬與溶酶體**：活化的 STING 驅動源自 [[ERGIC]] 膜的 [[LC3]] 脂化，並促進 [[TFEB]] 去磷酸化與核轉位，誘導[[Lysosomal Biogenesis|溶酶體]]與自噬基因。
> - **核膜 STING 儲池**：定位於[[Nuclear Envelope|核膜]]的 STING 儲池會與[[Aryl Hydrocarbon Receptor|芳香烴受體]]交互作用，增強其轉錄活性。
> - **cGAS 非依賴性活化**：胞器應力（[[Endoplasmic Reticulum Stress|內質網壓力]]、內溶酶體功能失調、STING 降解受損）可在不依賴 cGAS 的情況下活化 STING——此機制獲得 [[NPC1]] 缺陷與 [[C9orf72]] 功能喪失的支持——使 STING 成為細胞應力的廣域整合者。

> [!warning] STING 在老化腦中並非全然有害
> 雖然內皮細胞的 STING 活化會破壞[[Blood-Brain Barrier|血腦屏障]]，微小膠細胞的 STING 在老化過程中反而**維持**海馬迴血腦屏障的完整性。遺傳性 STING 缺失會減少[[Senescence|衰老]]，卻矛盾地加速認知與運動功能退化，並提高 DNA 損傷標記 γH2A.X 的量（[[H2A.X]]）。在周邊免疫中，STING 活化可能具保護性——誘導[[Regulatory T cells|調節性 T 細胞]]與調節性[[B Cells|B 細胞]]反應，並維持[[Hematopoietic Stem Cell|造血幹細胞]]的靜止狀態。

## 神經元 STING

STING 雖主要是免疫轉接蛋白，神經元 STING 在_果蠅_中可限制病毒複製，並在[[Retinal Ganglion Cells|視網膜神經節細胞]]與[[Dorsal Root Ganglion|背根神經節]]神經元中促進軸突再生；其缺失會透過失調的 IFN-I 造成[[Nociceptor|傷害感受器]]過度興奮。STING 抑制可降低經 [[TDP-43]] 處理之 iPSC 分化運動神經元的死亡。

**癌症免疫治療**：STING 致效劑——包括 diABZI（一種強效的非核苷酸致效劑）、MSA-2（一種全身性 CDN 類似物）與 ADU-S100（一種瘤內注射 CDN）——正被開發用於在腫瘤微環境中刺激第 I 型干擾素的產生，以活化抗腫瘤免疫。這些藥物正在多種實體腫瘤與血液惡性腫瘤中進行臨床試驗。

**自體免疫疾病**：不恰當的 STING 活化會導致狼瘡樣自體免疫，凋亡細胞的自體 DNA 觸發慢性 cGAS-STING 訊號。開發中的治療策略包括 STING 拮抗劑（如 HCl-560）、中和性抗體，以及抑制上游 cGAS 活性。

## 性別差異——雌激素對 STING 的抑制

> [!important] 雌激素直接抑制 STING 轉錄——一種女性免疫煞車
> STING 的轉錄受到雌激素抑制：與 E₂ 結合的 [[Estrogen Receptor|ERα]] 會招募 [[HDAC3]] 至 STING/`TMEM173` 啟動子，使組蛋白去乙醯化並降低 STING 表現（Chen et al., *Cancers* 2022）。這使得 [[cGAS-STING Pathway|cGAS–STING→SASP]] 級聯成為性別敏感的放大器：在糖尿病腎病大鼠模型中，老年雄性顯示較高的 cGAS/STING 活性（較低的 mtTFA/TREX1；Feng et al., *JCI Insight* 2024），而停經前女性則受 ERα–HDAC3 媒介的壓制保護。

- **停經後的去壓制**——停經時雌激素的喪失解除 HDAC3 對 STING 的轉錄壓制，促成「雌激素斷崖」中放大輸出的 [[SASP]] 與第 I 型干擾素；此軸與 [[NF-κB]]、[[SASP]]、[[SIRT1]]、[[Inflammaging]] 與 [[NAD+]] 的變化相通（見 [[Inflammaging]]）。
- **cGAS–STING↔SASP↔性別軸**——透過這種性別偏倚的 STING 張力，粒線體 DNA 洩漏（見 [[cGAS]]、[[mtDNA]]）轉譯為性別特異的無菌性發炎與衰老負擔；因此 STING 位於靜止-性別與發炎老化框架的交界處，並與 [[SASP]] 和 [[Inflammaging]] 相互引用。

# 

## Documents
- [[_document_ - Cytotoxic CD4 T cells induce age-associated myelopoiesis through CCL5-CCR5 signaling|Cytotoxic CD4 T cells induce age-associated myelopoiesis (Nat Aging 2026)]]：Nat Aging 2026 研究指出，STING 是持續活化的 CD4+ T 細胞中誘導 CCL5 所需的粒線體 DNA 應力感受器；Sting 缺陷細胞保留 EOMES/細胞毒性分化，但失去 CCL5，且體內 STING 缺陷會減少老年骨髓中 CCL5+CD4+ CTL 的累積。

提及此實體的文件列表

  - [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]]
    - 研究提出，TREX1 缺陷細胞中 TFEB 的活化造成溶酶體系統擴增，導致 STING、TBK1 及轉錄因子 IRF3 與 IRF7 的活化，並促使 ISGs 表現（Hasan et al 2013）。

  - [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
    - 綜述 STING 的非典型自噬/溶酶體（TFEB、LC3）與核膜（AHR）功能、胞器應力引起的 cGAS 非依賴性活化，及其在老化中樞神經系統與周邊免疫中具情境依賴性、有時具保護性的角色。


## Connections

- [[Immune System]] — STING 是先天免疫 DNA 感知的核心組成
- [[TBK1]] — STING 招募以磷酸化 IRF3 的激酶
- [[TRAF6]] — 媒介 STING 活化 NF-κB 的轉接蛋白
- [[Autophagy]] — STING 透過 LC3 脂化誘導自噬
- [[LC3]] — 自噬體形成的標記，在 STING 媒介的自噬中被脂化
- [[Inflammation]] — STING 透過 NF-κB 驅動促發炎細胞激素的產生
- [[TFEB]] — 溶酶體生成的轉錄因子，受 STING 運輸活化
- [[Aryl Hydrocarbon Receptor]] — 核膜 STING 增強 AHR 的轉錄活性
- [[Blood-Brain Barrier]] — 微小膠細胞 STING 維持血腦屏障完整性；內皮 STING 則破壞之
- [[Hematopoietic Stem Cell]] — 造血幹細胞抑制 STING 以維持靜止狀態
- [[NPC1]] / [[C9orf72]] — 溶酶體缺陷驅動 cGAS 非依賴性的 STING 活化
- [[Nociceptor]] — 神經元 STING 缺失造成傷害感受器過度興奮
- [[SASP|Senescence-Associated Secretory Phenotype]] — STING 驅動 cGAS-STING→SASP 級聯，在雄性中放大並於停經後去壓制
- [[Estrogen Receptor|ERα]] — 招募 HDAC3 以抑制 STING 轉錄的雌激素受體
- [[HDAC3]] — 媒介雌激素對 STING 轉錄壓制的去乙醯化酶
- [[Inflammaging]] — 雌激素調控的 STING 張力下游的性別二態性發炎負擔
- [[mtDNA]] — 活化 cGAS–STING 並產生性別特異後果的粒線體 DNA 洩漏

## Linking Summary

- 新增連結：[[ERGIC]]、[[Nuclear Envelope]]、[[Aryl Hydrocarbon Receptor]]、[[NPC1]]、[[C9orf72]]、[[Endoplasmic Reticulum Stress]]、[[Blood-Brain Barrier]]、[[H2A.X]]、[[Regulatory T cells]]、[[B Cells]]、[[Hematopoietic Stem Cell]]、[[Retinal Ganglion Cells]]、[[Dorsal Root Ganglion]]、[[Nociceptor]]、[[TDP-43]]、[[Type I Interferon]]、[[Senescence]]
- 建議建立的新實體筆記：[[cGAMP]]、[[STING]]、[[STING]]、[[STING Inhibitors]]
  - 待強化的連結：[[STING]] ↔ [[TFEB]]、[[STING]] ↔ [[Blood-Brain Barrier]]、[[STING]] ↔ [[Aryl Hydrocarbon Receptor]]

## Linking Summary (Sex Differences — Estrogen Suppression of STING, 2026-09-02)

- **新增「性別差異」章節**，將 STING 定位為雌激素壓制的、性別敏感的 cGAS-STING→SASP→發炎老化軸放大器（Chen et al., *Cancers* 2022；Feng et al., *JCI Insight* 2024）。
- 新增交叉連結：[[Estrogen Receptor|ERα]]、[[HDAC3]]、[[cGAS-STING Pathway]]、[[cGAS]]、[[SASP]]、[[Inflammaging]]、[[SIRT1]]、[[NF-κB]]、[[NAD+]]、[[mtDNA]]。
- 待強化的連結：[[STING]] ↔ [[SASP]]（雌激素壓制的放大）、[[STING]] ↔ [[Inflammaging]]（雌激素斷崖）、[[STING]] ↔ [[cGAS]]（性別偏倚的 DNA 感知）。
