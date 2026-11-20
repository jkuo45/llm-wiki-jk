---
title: MLKL
description: 混合譜系激酶結構域樣蛋白（MLKL）——壞死性凋亡的假激酶執行者；受 RIPK3 磷酸化後在質膜寡聚化使細胞破裂，同時也可作為 NLRP3 發炎小體活化的觸發因子。
protected: true
created: 2026-08-29
updated: 2026-11-19
tags:
  - protein
  - cell-death
  - necroptosis
  - inflammation
url: #
source: #
aliases:
  - Mixed lineage kinase domain-like protein
  - Mixed Lineage Kinase Domain-Like
---

# MLKL

**MLKL**（mixed lineage kinase domain-like protein，混合譜系激酶結構域樣蛋白）是[[Necroptosis|壞死性凋亡]]的終端執行者。它是一種假激酶——可結合但不水解 ATP——其功能並非訊號傳遞，而是破壞細胞膜。當[[Caspase-8]]被抑制或缺失時，[[RIPK1]]招募並活化[[RIPK3]]，後者磷酸化 MLKL；磷酸化的 MLKL 寡聚化並轉位至質膜，其四螺旋束結構域在該處形成陽離子通道，使細胞破裂並釋放損傷相關分子模式（DAMPs）。

## 作用機制

- **活化：** RIPK3 磷酸化 MLKL 的活化環（人類 Thr357/Ser358），使 N 端四螺旋束暴露。
- **執行：** MLKL 寡聚體運輸至質膜（伴隨磷脂醯肌醇磷酸結合）並形成孔洞 → 滲透性腫脹、細胞膜破裂、DAMP 釋放 → 發炎性清除；若失控，則造成慢性發炎，驅動癌症、阿茲海默症、帕金森症候群、多發性硬化症，以及肺、肝、腸道與心臟疾病。
- **抑制劑：** necrosulfonamide（亦為[[Gasdermin D|GSDMD]]的間接抑制劑——見下文），以及上游 RIPK1（necrostatin-1）與 RIPK3（GSK872、HS-1371）阻斷劑。

> [!important]
> MLKL 是細胞命運開關，而不僅僅是終點：其成孔作用引起的 K⁺ 外流活化[[NLRP3]][[Inflammasome|發炎小體]]（RIPK3/MLKL/NLRP3 軸），將壞死性凋亡與[[Pyroptosis|細胞焦亡]]連結；MLKL 與細胞內膜的締合減弱[[Autophagy|自噬]]；而 MLKL 驅動的膜脂需求使壞死性凋亡與[[Ferroptosis|鐵死亡]]透過 ACSL4 依賴的 PUFA 組成而互斥。

> [!info]
> 來源：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu 等 2026]]
> MLKL 的調控不限於 RIPK3 磷酸化：[[BRD4]]在轉錄層面促進 MLKL 表現，而[[HSP90β]]結合 MLKL 並保護其免受蛋白酶體降解，以利活化／轉位。在吞噬作用期間，被外露的磷脂醯絲胺酸活化的[[TAM Kinases]]（Tyro3、Axl、Mer）亦可磷酸化 MLKL，而 RIPK1 在特定條件下（尤其是小鼠）也能磷酸化 MLKL。鹽誘導激酶抑制劑 HG-9-91-01 透過破壞 RIPK3/MLKL 交互作用而抑制壞死性凋亡。執行過程具有異質性——青光眼軸突退化模型顯示不依賴 MLKL 成孔的類壞死性凋亡死亡，而 MLKL 亦可透過 TRPM7 等離子通道間接破壞細胞膜。

> [!info]
> 來源：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green, NEJM 2014]]
> 2014 年時 MLKL 仍被描述為「一種以尚未闡明的方式造成壞死性凋亡的假激酶」——其成孔功能當時尚未確立。當時可取得的功能證據為：[[MLKL]]缺失小鼠可免受雨蛙肽誘發的[[Pancreatitis|胰臟炎]]（Wu 等，*Cell Res* 2013），支持以 MLKL 缺失作為缺血再灌注損傷中壞死性凋亡的預期驗證。[[Necrosulfonamide]]成為首個直接針對人類 MLKL 的抑制劑，確立 MLKL 原則上為可成藥標的。

## 交互作用角色（Eskander 等，2025）

- **壞死性凋亡 → 焦亡：** MLKL 成孔觸發 K⁺ 外流，活化 NLRP3 發炎小體。
- **壞死性凋亡 → 自噬：** 活化的 MLKL 轉位至細胞內膜會抑制自噬流量。
- **壞死性凋亡 ↔ 鐵死亡：** MLKL 可能耗盡膜 PUFA（終止鐵死亡），而[[ACSL4]]過度表現使細胞膜對 MLKL 孔洞產生抵抗——ACSL4 敲低抑制鐵死亡並活化壞死性凋亡（急性腎衰竭模型）。
- **治療重疊：** necrosulfonamide 同時阻斷 MLKL 與 GSDMD 的成孔作用。

> [!info]
> 來源：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> 該綜述依序重述執行臂：[[RIPK1]]磷酸化並活化[[RIPK3]]，活化的 RIPK3 磷酸化 MLKL，磷酸化的 MLKL 透過其 N 端四螺旋束寡聚化、轉位至質膜並在該處成孔。此級聯的閘門是[[c-FLIP]]異構體平衡——FLIP_S 異二聚體無法切割 RIPK1，因此平台持續存在，由 RIPK1–RIPK3–MLKL 執行壞死性凋亡；而 FLIP_L 異二聚體切割 RIPK1 並阻止該過程。因此，功能完整的 RIPK1–RIPK3–MLKL 軸是此死亡程式所必需：缺乏 RIPK3 的細胞株具抵抗性，而 RIPK3 抑制（化學抑制或 D161N 活性位點突變體）可阻斷壞死性凋亡。

## 文件

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - MLKL 作為壞死性凋亡執行者，以及連結壞死性凋亡與焦亡（K⁺ 外流 → NLRP3）、自噬抑制與透過膜脂組成連結鐵死亡的交互作用樞紐。
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - RIPK1→RIPK3→MLKL 執行序列與成孔；需要完整的 RIPK1–RIPK3–MLKL 軸（RIPK3 陰性細胞株具抵抗性）；c-FLIP 異構體平衡作為許可或阻斷該軸的閘門。
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - MLKL 的多層次調控（BRD4 轉錄、HSP90 穩定性、TAM 激酶／RIPK1 磷酸化）與情境依賴／非典型執行（不依賴 MLKL 成孔的青光眼軸突病變；TRPM7 相關的膜受損）。
- [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014 NEJM — Necroptosis]]
  - MLKL 作為（當時尚未闡明的）假激酶執行者；MLKL 敲除在雨蛙肽誘發胰臟炎中的保護作用；necrosulfonamide 作為首個直接人類 MLKL 抑制劑；MLKL 敲除是 IRI 壞死性凋亡預期的驗證手段。

## 關聯

- [[RIPK3]] — 磷酸化並活化 MLKL；壞死小體的輸出激酶
- [[RIPK1]] — 招募 RIPK3；其激酶活性驅動 TNF 誘導的壞死性凋亡
- [[Caspase-8]] — 活化的 caspase-8 切割 RIPK1/RIPK3，阻止 MLKL 活化；抑制 caspase-8 使命運轉為壞死性凋亡
- [[NLRP3]] — MLKL 媒介的 K⁺ 外流活化發炎小體，橋接壞死性凋亡與焦亡
- [[Pyroptosis]] — MLKL 可間接觸發的發炎性裂解死亡
- [[ACSL4]] — 膜 PUFA 組成決定 MLKL 孔洞敏感性（壞死性凋亡↔鐵死亡開關）
- [[Autophagy]] — 受 MLKL 與細胞內膜締合抑制
- [[TNFα]] — TNFR1 壞死性凋亡途徑上游的經典死亡配體刺激
- [[Inflammation]] — MLKL 驅動的破裂所釋放的 DAMP 助長發炎性疾病
- [[Sirtuin-Caspase Crosstalk]] — MLKL 將 caspase→調控因子網絡延伸為非 caspase 的裂解死亡執行者
- [[c-FLIP]] — 異構體平衡調控此軸：FLIP_S 使 RIPK1 得以持續存在，FLIP_L 則切割它
- [[Ripoptosome]] — 當 RIPK1 未被切割而平台持續存在時，交接至 RIPK3–MLKL 的平台

## 連結摘要

- 新增連結：[[RIPK3]]、[[RIPK1]]、[[Caspase-8]]、[[NLRP3]]、[[Pyroptosis]]、[[ACSL4]]、[[Autophagy]]、[[TNFα]]、[[Inflammation]]、[[Inflammasome]]、[[Ferroptosis]]、[[Necroptosis]]、[[Sirtuin-Caspase Crosstalk]]
- 建議建立的新實體筆記：[[DAMPs]]、[[necrosome]]、[[PANoptosis]]
- 待強化的強連結：[[MLKL]] ↔ [[RIPK3]]、[[MLKL]] ↔ [[NLRP3]]、[[MLKL]] ↔ [[ACSL4]]
- 來源充實（2026-09-14）：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu 等 2026]] — BRD4、HSP90、TAM 激酶與 RIPK1 對 MLKL 的調控；不依賴 MLKL 成孔的執行途徑。新增連結：[[BRD4]]、[[HSP90β]]、[[TAM Kinases]]。
- 來源充實（2026-09-14）：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014]] — 2014 年時的假激酶定位；MLKL 敲除在雨蛙肽胰臟炎中的保護作用；necrosulfonamide 作為首個直接 MLKL 抑制劑。新增連結：[[Necrosulfonamide]]、[[Pancreatitis]]。
- 來源充實（2026-11-19）：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — RIPK1→RIPK3→MLKL 執行序列與成孔；需要完整的 RIPK1–RIPK3–MLKL 軸（RIPK3 陰性細胞株具抵抗性）；c-FLIP 異構體平衡作為閘門。新增連結：[[c-FLIP]]、[[Ripoptosome]]。
