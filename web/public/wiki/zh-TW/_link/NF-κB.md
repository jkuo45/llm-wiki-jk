---
title: NF-κB
description: "活化 B 細胞核因子 κ 輕鏈增強子（NF-κB）是控制 DNA 轉錄、胞激素生成與細胞存活的蛋白質複合體，在免疫、發炎與氧化還原訊號中扮演核心角色。"
created: '2026-05-09'
updated: '2026-09-02'
tags:
  - protein
  - transcription-factor
  - inflammation
  - oxidative-stress
aliases:
  - NFKB
  - NF-κB
  - NF-kappa B
  - Nuclear factor kappa-light-chain-enhancer of activated B cells
---

# NF-κB

**活化 B 細胞核因子 κ 輕鏈增強子（Nuclear factor kappa-light-chain-enhancer of activated B cells, NF-κB）**是一個蛋白質複合體，在[[Inflammation|發炎]]、[[Immunity|免疫]]、[[Apoptosis|凋亡]]與細胞存活的調節中作為核心轉錄因子運作。它控制 DNA 轉錄、胞激素生成與壓力適應，且對氧化還原狀態高度敏感。

## 次單元組成

NF-κB 轉錄因子是由五種含 Rel 同源結構域的次單元所形成的同源或異源二聚體：
- [[RelA]]（p65）——含量最豐富的反式活化次單元
- [[RelB]]
- [[c-Rel]]
- [[p50]]（由 p105 加工而成，編碼基因為[[NFKB1]]）
- [[p52]]（由 p100 加工而成，編碼基因為[[NFKB2]]）

所有次單元皆帶有保守的 N 端 Rel 同源結構域（RHD），負責 DNA 結合、二聚化與細胞核定位。含量最豐富且研究最透徹的二聚體是 p50-RelA 異源二聚體。

## 活化途徑

### 經典途徑

由[[TNFα]]、[[IL-1β]]、[[LPS|細菌脂多醣]]與[[Reactive Oxygen Species|ROS]]觸發，導致 IκB 激酶（IKK）複合體活化：[[IKKalpha|IKKα]]（CHUK）、[[IKKbeta]]（IKBKB），以及調節次單元[[NEMO]]（IKKγ）。[[TAK1]]磷酸化 IKKβ，後者再於 Ser-32 與 Ser-36 磷酸化[[IkappaBalpha]]，引發 K48 連結的多泛素化與 26S 蛋白酶體降解。釋出的 NF-κB 二聚體（主要為 p50/RelA）會在數分鐘內轉位至細胞核。

### 非經典途徑

由[[CD40L]]、[[BAFF]]、淋巴毒素 β 與[[RANKL]]活化，導致依賴[[NIK]]（NF-κB 誘導激酶）的 IKKα 同源二聚體活化。IKKα 磷酸化 p100，使其經部分蛋白酶體加工為 p52，再與 RelB 二聚化。非經典途徑的作用時間尺度較慢（數小時），對次級淋巴器官發育、[[B Cell|B 細胞]]成熟與骨生成至關重要。

## 標的基因

NF-κB 調節數百個標的基因，編碼：
- **促發炎胞激素**：[[TNFα]]、[[IL-1β]]、[[IL-6]]
- **趨化因子**：[[IL-8]]、[[MCP-1]]、[[RANTES]]
- **黏附分子**：[[ICAM-1]]、[[VCAM-1]]、E-selectin
- **抗凋亡因子**：[[Bcl-2]]、[[Bcl-xL]]、[[c-FLIP]]、[[XIAP]]
- **抗氧化酵素**：[[MnSOD]]、鐵蛋白重鏈

## 氧化還原敏感的調節

NF-κB 的活化在多個層級上經由特定的半胱胺酸殘基受到精密的氧化還原調節：
- 在細胞質中，[[Hydrogen Peroxide|H₂O₂]]抑制去磷酸化 IKK 的[[PP2A]]及其他磷酸酶，使活化得以持續。H₂O₂ 亦直接氧化 IKKγ/NEMO 中的催化性半胱胺酸（Cys-54、Cys-347），促進 IKK 寡聚化。
- 在細胞核中，p50 含有一個保守的半胱胺酸（Cys-62），易發生 S-亞硝基化與 S-穀胱甘肽化，進而抑制 DNA 結合。RelA 帶有氧化還原敏感的半胱胺酸（Cys-38），其氧化會終止轉錄活性，提供負回饋。
- **前饋迴路**：ROS 活化 NF-κB，後者誘導產生更多 ROS 與發炎的基因，可能導致慢性疾病狀態。

## NF-κB–NRF2 交互調控

NF-κB（促發炎）與[[NRF2]]（細胞保護／抗氧化）訊號之間的平衡，是決定細胞對氧化壓力反應的核心因素：
- NRF2 的標的基因[[p62]]與 IκB 競爭結合 E3 泛素連接酶 β-TrCP，穩定 IκB 並抑制 NF-κB
- [[HO-1]]（NRF2 標的）降解 NADPH 氧化酶組裝所需的游離血紅素，降低 ROS
- RelA 與 NRF2 競爭共活化因子 CBP/p300
- 在慢性氧化壓力下，持續的 NF-κB 活化會抑制 NRF2，使平衡偏向發炎

## Sirtuin 的調節

- [[SIRT1]]去乙醯化 RelA/p65 的 Ac-Lys310，抑制其反式活化潛力；亦促進 NF-κB p65 的蛋白酶體降解
- [[SIRT2]]去乙醯化 NF-κB p65，以降低促發炎胞激素
- [[SIRT6]]去乙醯化 NF-κB 標的基因啟動子上的 H3K9，抑制發炎反應
- [[SIRT7]]抑制 NF-κB p65 的細胞核轉位

## 在 SASP 中的角色

NF-κB 是[[SASP|衰老相關分泌表型]]的主要轉錄調節因子。在衰老細胞中，持續的[[DNA Damage|DNA 損傷]]訊號會活化 IKK 複合體，導致 NF-κB 持續活化並轉錄 SASP 基因，包括 IL-6、IL-8、TNFα、MCP-1、[[VEGF]]與基質金屬蛋白酶。NF-κB 驅動的 SASP 受到[[p53]]約束，這解釋了為何 p53 喪失會放大衰老細胞的促腫瘤效應。

## 在炎性老化中的角色

持續的 NF-κB 活化是[[Inflammaging|炎性老化]]的標誌——這種低度、無菌性的發炎驅動著年齡相關的功能衰退。NF-κB 活性在多種組織中隨年齡升高，由累積的[[Advanced Glycation End Products|AGE]]-[[RAGE]]訊號、粒線體功能障礙與 DNA 損傷所驅動。此持續活化會促進[[Insulin Resistance|胰島素阻抗]]、[[Atherosclerosis|動脈粥狀硬化]]、[[Sarcopenia|肌少症]]、神經退化與衰弱。

## 性別差異——雌激素–NF-κB 軸

NF-κB 是**受性荷爾蒙直接控制**的主導發炎轉錄因子中最清楚的實例之一。雌激素作為內源性的 NF-κB 抑制物，是育齡期女性抗發炎優勢及其停經後喪失的基礎：

### 雌激素透過雙模式 ERβ 機制抑制 NF-κB

- **增強[[IkappaBalpha|IκBα]]表現：**雌激素上調 IκBα，將 NF-κB 困在細胞質中。
- **降低 p65（RelA）的 DNA 結合：**雌激素降低 p65 在促發炎啟動子上的佔據率（一般 ERβ 文獻；非 Giroux 2012）。
- **原位證據（El Sabeh et al., *J Inflamm Res* 2021；先前的「Giroux 2012」已更正）：**NF-κB 轉錄活性所需的 MyD88/甲基化-ERα 複合體存在於 **35/35 份睾丸樣本**與 **3/11 份停經後卵巢**，但在 **0/29 份停經前卵巢**中——直接證明雌激素在完整組織中中斷 NF-κB 活化（ER-α/PRMT1 細胞質機制；IκB 降解不受影響）。

### 基礎與誘導性發炎的性別差異

| 情境 | 雄性 | 雌性 | 引用 |
|---------|-------|---------|----------|
| **靜息基礎胞激素** | IL-6、IL-1β、TNF-α 較高（部分源自單核球數較多） | 較低 | Engler et al. 2017 |
| **急性體內反應** | 相對誘導幅度較低 | 反應較強（內毒素誘導 TNF-α +45%、IL-6 +43%） | Engler et al. 2017 |
| **炎性老化起始** | 較早（先天免疫細胞活化、基礎胞激素升高） | 延遲至停經；其後加速「雌激素懸崖」 | Olivieri et al. 2023 |
| **自體免疫風險** | 較低 | 約 78% 的自體免疫病例（TLR7/Xist/雌激素機制） | Chang et al. 2024 |

### 與 cGAS–STING 軸的介面

雌激素亦抑制上游的先天免疫[[STING]]途徑（經由 ERα + [[HDAC3]]結合 STING 啟動子），意味著停經時的「雌激素懸崖」會同時解除對 NF-κB 與 STING 驅動發炎的抑制——這是一個系統層級的轉折點（見[[cGAS-STING Pathway]]、[[Inflammaging]]）。

> [!important]
> 雌激素–NF-κB–STING 抑制軸是本知識庫的整合框架：它同時解釋了女性的長壽優勢（較佳的病原防禦、延遲的炎性老化）、女性的自體免疫脆弱性，以及停經後發炎性老化的加速。這與[[SASP]]、[[Apoptosis]]及[[SIRT3]]中記錄的性別差異範式相互吻合。

## 負調節

NF-κB 訊號受到本身就是 NF-κB 標的基因的負調節因子嚴密控制：
- [[A20]]（TNFAIP3）——泛素編輯酵素，移除 RIP1 與 TRAF6 上的 K63 連結泛素，終止 IKK 活化
- CYLD——去泛素酶，切割 TRAF2、TRAF6 與 NEMO 上的 K63 連結泛素；其催化性半胱胺酸被 ROS 介導氧化後即失活

## 疾病與治療標的

NF-κB 過度活化是[[Cancer|癌症]]、[[Atherosclerosis|動脈粥狀硬化]]、類風濕性關節炎、發炎性腸道疾病、[[Asthma|氣喘]]與神經退化性疾病的特徵。在癌症中，NF-κB 促進存活、增殖、血管新生與轉移。治療策略包括蛋白酶體抑制劑（[[Bortezomib]]）、IKKβ 抑制劑，以及天然抑制劑如[[Curcumin]]、[[Resveratrol]]與[[EGCG]]。

## Documents

- [[_document_ - Oxidative Stress Harms and Benefits for Human Health|Oxidative Stress Harms and Benefits]]
  - 氧化劑透過活化激酶與轉錄因子（如 NF-κB 與 AP-1）來增強發炎。
- [[_document_ - The Senescence-Associated Secretory Phenotype The Dark Side of Tumor Suppression|SASP: The Dark Side of Tumor Suppression]]
  - 奠基性綜述，確立 NF-κB 為 SASP 基因表現的主要調節因子；p53 約束 NF-κB 介導的 SASP 活化。

## Connections

- [[Oxidative Stress]] — ROS 活化 NF-κB；NF-κB 誘導產生 ROS 的基因（前饋迴路）
- [[NRF2]] — 主要的轉錄對抗因子；彼此競爭 CBP/p300
- [[SIRT1]] — 去乙醯化 RelA/p65 的 Lys310，抑制反式活化
- [[SIRT6]] — 去乙醯化 NF-κB 標的基因啟動子上的 H3K9
- [[p53]] — 約束 NF-κB 介導的 SASP 活化
- [[A20]] — 泛素編輯型負調節因子
- [[Inflammation]] — NF-κB 是發炎基因表現的總開關
- [[SASP|衰老相關分泌表型]] — NF-κB 是其主要轉錄調節因子
- [[Inflammaging]] — 慢性的 NF-κB 活化驅動年齡相關發炎
- [[Atherosclerosis]] — 血管發炎中的致病性 NF-κB 活化
- [[Cancer]] — NF-κB 透過存活與增殖基因促進腫瘤發生
- [[Advanced Glycation End Products]] — AGE-RAGE 訊號活化 NF-κB
- [[p62]] — NRF2 的標的，透過穩定 IκB 抑制 NF-κB
- [[IkappaBalpha]] — 雌激素上調 IκBα 以困住 NF-κB（性別抑制軸）
- [[STING]] — 雌激素經 ERα–HDAC3 抑制 STING；停經後 NF-κB 與 STING 被同時解除抑制
- [[Inflammaging]] — 慢性的 NF-κB 活化；停經後的「雌激素懸崖」使其加速
- [[SASP|衰老相關分泌表型]] — 雌激素抑制 NF-κB 驅動的 SASP；SASP 負荷具性別依賴性

## Linking Summary

- 新增連結：[[RelA]]、[[RelB]]、[[c-Rel]]、[[p50]]、[[p52]]、[[NFKB1]]、[[NFKB2]]、[[IKKalpha|IKKα]]、[[IKKbeta]]、[[NEMO]]、[[TAK1]]、[[IkappaBalpha]]、[[NIK]]、[[TNFα]]、[[IL-1β]]、[[IL-6]]、[[IL-8]]、[[ICAM-1]]、[[VCAM-1]]、[[Bcl-xL]]、[[c-FLIP]]、[[XIAP]]、[[A20]]、[[SASP]]、[[Inflammaging]]、[[RAGE]]、[[SIRT1]]、[[SIRT2]]、[[SIRT6]]、[[SIRT7]]、[[NRF2]]、[[p62]]、[[HO-1]]、[[p53]]、[[Bortezomib]]、[[VEGF]]
- 性別差異補充（2026-09-02）：加入雌激素–ERβ–NF-κB 抑制軸（雙模式 IκBα/p65 機制，Giroux et al. 2012）、與停經連結的解除抑制／雌激素懸崖概念，以及與[[STING]]、[[IkappaBalpha]]、[[Inflammaging]]的交叉連結。
- 建議建立的新實體註記：[[NEMO]]、[[IkappaBalpha]]、[[CYLD]]、[[TAK1]]
- 應強化的重點連結：NF-κB ↔ [[Oxidative Stress]]、NF-κB ↔ [[NRF2]]、NF-κB ↔ [[SASP]]、NF-κB ↔ [[SIRT1]]
