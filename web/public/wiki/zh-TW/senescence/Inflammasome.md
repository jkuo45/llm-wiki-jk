---
title: Inflammasome
description: 發炎小體是胞質超分子免疫複合體，可活化發炎性 caspase 以加工 IL-1 家族細胞激素並誘發細胞焦亡，是先天免疫與無菌性發炎的關鍵介導者。
created: 2026-07-11
updated: 2026-11-11
tags:
  - protein-complex
  - innate-immunity
  - inflammation
aliases: [Inflammasome, inflammasomes, Canonical Inflammasome]
---

# Inflammasome（發炎小體）

**發炎小體**是先天免疫系統的胞質超分子複合體，因應病原相關分子模式（PAMPs）與損傷相關分子模式（DAMPs）而組裝。它們活化發炎性 caspase——典型途徑中主要為 [[Caspase-1]]——由後者以蛋白水解方式將 pro-IL-1β 與 pro-IL-18 加工為成熟、可分泌的形式，並切割 gasdermin D（GSDMD）以觸發細胞焦亡，一種高度發炎性的程序性細胞死亡形式。

發炎小體活性對抗感染的宿主防禦至關重要，但當其被無菌性刺激（例如細胞衰老、代謝壓力、粒線體損傷）慢性活化時，會驅動持續性[[Inflammation|發炎]]，並促成老化相關疾病、神經退化、心血管疾病與[[Cancer|癌症]]。

## 組成與組裝

### 核心組件

一個發炎小體通常由三個要素組成：

1. **感測蛋白**——偵測活化刺激（例如 NLRP3、AIM2、NLRC4、NLRP1、pyrin）
2. **銜接蛋白 ASC**（apoptosis-associated speck-like protein containing a CARD）——經由 PYD–PYD 與 CARD–CARD 交互作用，將感測蛋白橋接至效應蛋白
3. **效應 caspase**——最常見為 [[Caspase-1]]（典型）；[[Caspase-4]]、[[Caspase-5]] 或 [[Caspase-11]]（非典型）

### 組裝機制

配體結合後，感測蛋白發生構形改變並寡聚化。含 PYD 的感測蛋白（NLRP3、AIM2、pyrin）經 PYD–PYD 交互作用招募 ASC，形成稱為 **ASC specks** 的螺旋絲狀結構——大型超分子組織中心（SMOCs）。ASC 隨後經 CARD–CARD 交互作用招募 caspase-1，誘發 caspase-1 二聚化與自體蛋白水解活化。具活性的 caspase-1 p33/p10 異二聚體切割其受質。

> [!info] 結構層面的見解
> 冷凍電顯研究顯示，具活性的 NLRP3–NEK7–ASC 複合體由約 10–11 個 NLRP3 次單元組成盤狀結構，NEK7 結合於周邊。PYD 絲狀結構自盤狀中心正交突出，經螺旋聚合招募 ASC（Fu et al., Nat Rev Immunol, 2024）。

## 主要發炎小體類型

### NLRP3 發炎小體

研究最廣泛的發炎小體。NLRP3 表現在骨髓系細胞（巨噬細胞、樹突細胞、嗜中性球），可被極多樣化的刺激活化：

- **PAMPs**：細菌毒素、病毒 RNA、真菌菌絲
- **DAMPs**：ATP、尿酸結晶、膽固醇結晶、[[mtDNA]]、[[HMGB1]]
- **內源性訊號**：amyloid-β、α-synuclein、蛋白質聚集體
- **代謝壓力**：ceramides、飽和脂肪酸、葡萄糖

NLRP3 活化需要**兩步驟過程**：
1. **Priming**（訊號 1）：NF-κB 依賴的 NLRP3 與 pro-IL-1β 轉錄上調（例如經由 TLR 接合、LPS）
2. **活化**（訊號 2）：由 K⁺ 外流、Ca²⁺ 流動、活性氧、溶酶體不穩定或粒線體功能障礙觸發組裝

> [!tip] NLRP3 與細胞衰老
> NLRP3 發炎小體活化與免疫衰老相關，並且是 SASP 的可能驅動因子。衰老細胞累積 DAMPs（HMGB1、mtDNA、氧化脂質），可在鄰近巨噬細胞中活化 NLRP3，放大發炎環境（Spadaro et al., 2016）。

### AIM2 發炎小體

感測胞質雙股 DNA（細菌、病毒，或來自受損細胞核或粒線體的自體 DNA）。AIM2 形成含 CARD 的直接複合體招募 caspase-1，誘發細胞死亡時不需 ASC，但最大化的 IL-1β 加工仍需 ASC。

### NLRC4 發炎小體

由胞質細菌 flagellin 與第三型分泌系統組件活化。NAIP 蛋白作為共同受體直接結合細菌配體，並經 NACHT–NACHT 交互作用招募 NLRC4。NLRC4 可經其 CARD 直接招募 caspase-1，但完整的 IL-1β 加工需要 ASC 招募。

### NLRP1 發炎小體

含 C 端 CARD，可直接招募 ASC。由 Bacillus anthracis 致死毒素與 muramyl dipeptide 活化。人類 NLRP1 亦經蛋白酶 DPP9 對胞內危險訊號 UDP 產生反應。

### Pyrin 發炎小體

感測細菌對 RhoA 的抑制（例如由 Clostridium difficile toxin B 造成）。Pyrin 形成依賴 ASC 的發炎小體，活化 caspase-1。

## 下游效應蛋白

### Gasdermin D（GSDMD）——細胞焦亡

所有發炎性 caspase（caspase-1、-4、-5、-11）皆在 N 端成孔結構域與 C 端抑制結構域之間切割 GSDMD。釋出的 N 端片段在細胞質膜寡聚化，形成孔洞（約 10–20 nm），造成滲透性腫脹、膜破裂與**細胞焦亡**。GSDMD 孔洞與 [[NINJ1]] 共同誘發高度發炎性的細胞死亡，將胞質內容物——包括成熟 IL-1β、IL-18 與 DAMPs——釋放至胞外空間。

> [!warning] 細胞焦亡放大發炎
> 細胞焦亡性死亡釋放胞內 IL-1α、HMGB1、mtDNA 與其他 DAMPs，活化周圍細胞，形成前饋式發炎循環。在[[Senescent Cells|衰老細胞]]的情境中，這可放大 SASP 驅動的發炎微環境。

### IL-1β 與 IL-18 的加工

- **Pro-IL-1β**（31 kDa）→ 由 caspase-1 切割 → 成熟 IL-1β（17 kDa）→ 分泌
- **Pro-IL-18**（24 kDa）→ 由 caspase-1 切割 → 成熟 IL-18（18 kDa）→ 分泌
- Pro-IL-18 為組成性表現；pro-IL-1β 需要轉錄層級的 priming

## 發炎小體與細胞衰老

發炎小體同時在衰老細胞與鄰近免疫細胞中運作：

### 在衰老細胞中

- **非典型發炎小體**（caspase-5/11）在細胞衰老期間切割 IL-1α——而非 IL-1β——驅動 SASP（Wiggins et al., 2019）。
- Caspase-5 表現受干擾素誘導，並由 [[cGAS-STING Pathway|cGAS–STING]] 途徑在上游調控。
- IL-1β 在衰老細胞中轉錄上調，但**未**被加工或釋放——僅發生 IL-1α 的加工。
- 在衰老細胞本身，SASP 不依賴 NLRP3/caspase-1/ASC。

> [!important] OIS 期間的典型發炎小體活化（Acosta et al., 2013）
> 發生 OIS 的細胞展現 caspase-1 活性，並分泌 IL-1α 與 IL-1β 的成熟型，顯示典型發炎小體被活化。發炎小體組件（caspase-1、ASC/PYCARD、NLRP3 蛋白量——但非 mRNA）在 OIS 期間上調，與蛋白質穩定化一致。發炎小體在 Braf[V600E] 驅動的 SSAs 與 Kras[G12D] 驅動的 PanIN 病灶中亦於*體內*被活化。Caspase-1 或 IL-1R 抑制劑——而非 TGFBR1 抑制劑——減弱 SASP 表現，將典型發炎小體活化定位於 OIS 期間 SASP 的上游。

### 在鄰近巨噬細胞中

- 被招募至衰老細胞的巨噬細胞遇到 DAMPs（HMGB1、mtDNA、氧化脂質），活化**典型 NLRP3 發炎小體**。
- NLRP3 活化 → caspase-1 → IL-1β 成熟與細胞焦亡。
- 這形成雙發炎小體軸：衰老細胞中的非典型（caspase-5/11）加上巨噬細胞中的典型（NLRP3/caspase-1），放大組織發炎。

> [!info] 動脈粥狀硬化中的發炎小體交互作用
> 在晚期動脈粥狀硬化斑塊中，衰老巨噬細胞、內皮細胞與平滑肌細胞皆累積。巨噬細胞中由膽固醇結晶引發的 NLRP3 發炎小體活化，與衰老細胞中的非典型發炎小體活化協同，驅動慢性血管發炎。

## 調控

- **NF-κB**：NLRP3 與 pro-IL-1β 的轉錄 priming
- **自噬**：清除受損粒線體與發炎小體組件，限制活化
- **cGAS–STING**：驅動干擾素訊號，上調 caspase-5 表現
- **mTOR**：促進 IL-1α 轉譯；[[Rapamycin]] 抑制發炎小體 priming
- **AMPK**：在生理性缺氧下抑制 NLRP3 活化
- **負向調節因子**：Pyrin-only proteins（POPs）、CARD-only proteins（COPs）與 MCC950（NLRP3 專一性抑制劑）

## 臨床與病理相關性

- **自體發炎疾病**：Cryopyrin 相關週期性症候群（CAPS）——NLRP3 功能增益突變造成組成性發炎小體活化
- **心血管疾病**：動脈粥狀硬化中 NLRP3 被膽固醇結晶與氧化 LDL 活化
- **神經退化**：amyloid-β 與 α-synuclein 在微膠細胞中活化 NLRP3
- **第 2 型糖尿病**：胰島類澱粉在胰島 β 細胞中活化 NLRP3
- **癌症**：雙重角色——發炎小體可抑制腫瘤生成（免疫監視），亦可促進腫瘤生成（慢性發炎、免疫抑制微環境）
- **老化**：發炎小體活化促成[[Inflammaging|發炎性老化]]與老化相關組織退化

> [!info] 來源：[[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026]]
> 粒線體作為細胞焦亡訊號的超分子組織中心：[[NLRP3]] 與 [[Caspase-1]] 與 [[Cardiolipin|cardiolipin]] 交互作用並在粒線體膜上組裝，而 [[Mitochondrial ROS|ROS]]、cardiolipin 暴露與 mtDNA 釋放促進發炎小體活化。[[Mitophagy|粒線體自噬]]的限制作用與兩步驟 priming/活化模式仍是核心。

## 文獻

列出 wiki 中提及此實體的文獻

- [[_document_ - Senecent cell activate neighboring macrophages|Senescent cells activate neighbouring macrophages]]
  - 詳述衰老細胞–巨噬細胞交互作用中的雙發炎小體軸：衰老細胞中的非典型（caspase-5/11）與被招募巨噬細胞中的典型（NLRP3/caspase-1）。

- [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]]
  - 討論發炎小體介導的 SASP 活化，以及 IL-1 訊號在建立衰老相關分泌表型中的角色。

- [[_document_ - acosta2013_paracrine_senescence|Acosta et al., 2013 — Inflammasome controls paracrine senescence]]
  - 證明 OIS 期間典型發炎小體（caspase-1/ASC/NLRP3）活化，伴隨 caspase-1 活性與成熟 IL-1α/IL-1β 分泌。顯示 Braf[V600E] SSAs 與 Kras[G12D] PanIN 病灶中發炎小體於體內活化。Caspase-1 抑制劑可阻止 SASP 表現與旁分泌衰老。
- [[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026 — Mitochondrial dysfunction and inflammaging]]：描述粒線體 cardiolipin 作為發炎小體組裝平台，以及粒線體自噬作為活化的限制機制。

## 連結

- [[SASP|Senescence-Associated Secretory Phenotype]] — SASP 在衰老細胞中由非典型發炎小體介導的 IL-1α 切割所驅動
- [[Caspase-1]] — 典型效應 caspase；加工 pro-IL-1β、pro-IL-18 與 GSDMD
- [[Caspase-5]] / [[Caspase-11]] — 非典型效應 caspase；直接切割 IL-1α 與 GSDMD
- [[IL-1α]] — 非典型發炎小體受質；其切割與表面轉位驅動 SASP
- [[Interleukin 1β|IL-1β]] — 典型發炎小體受質；在巨噬細胞中由 caspase-1 加工
- [[IL-18]] — 典型發炎小體受質；促進 TH1 反應
- [[NF-κB|NF-κB]] — NLRP3 與 pro-IL-1β 的轉錄 priming
- [[cGAS-STING Pathway|cGAS–STING]] — 在上游驅動干擾素依賴的 caspase-5 表現
- [[HMGB1]] — 細胞焦亡期間釋放的 DAMP；活化 TLR4 與 RAGE
- [[mtDNA]] — 可同時活化 cGAS–STING 與 NLRP3 的粒線體 DNA DAMP
- [[Macrophages]] — 發炎小體活化的主要細胞類型；被招募至衰老細胞
- [[Senescent Cells]] — 活化非典型發炎小體（caspase-5/11）以加工 IL-1α
- [[Inflammaging]] — 老化期間慢性、低度、發炎小體驅動的發炎
- [[Autophagy]] — 清除受損胞器與發炎小體組件，限制活化
- [[mTOR]] — 調控 IL-1α 轉譯與發炎小體 priming
- [[Calpain]] — 衰老細胞中替代性的 IL-1α 加工酵素

## 連結摘要

- 新增連結：[[Caspase-1]]、[[Caspase-5]]、[[Caspase-11]]、[[IL-1α]]、[[Interleukin 1β|IL-1β]]、[[IL-18]]、[[NF-κB|NF-κB]]、[[cGAS-STING Pathway|cGAS–STING]]、[[HMGB1]]、[[mtDNA]]、[[Macrophages]]、[[Senescent Cells]]、[[Inflammaging]]、[[Autophagy]]、[[mTOR]]、[[Calpain]]、[[NINJ1]]
- 建議建立的新實體註記：[[Gasdermin D]]、[[NLRP3]]、[[AIM2]]、[[NLRC4]]、[[ASC Speck]]
- 待強化的強連結：
    - [[Inflammasome]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]
    - [[Inflammasome]] ↔ [[Macrophages]]
    - [[Inflammasome]] ↔ [[Senescent Cells]]
    - [[Inflammasome]] ↔ [[Inflammaging]]
