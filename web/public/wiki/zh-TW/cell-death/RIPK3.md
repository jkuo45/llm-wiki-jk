---
title: RIPK3
description: "概述：RIPK3 是一種在真核細胞中具有結構、訊號或調控功能的細胞蛋白質。它參與主導細胞命運的巨分子複合體與訊號網路..."
protected: true
created: 2026-07-04
updated: 2026-09-14
tags:
  - protein
aliases: [Receptor-Interacting Serine/Threonine-Protein Kinase 3]

---

# RIPK3

**RIPK3**（受體交互作用絲胺酸／蘇胺酸蛋白激酶 3）是 [[Necroptosis]] 的必備激酶。透過 RHIM 結構域的類澱粉樣組裝被 [[RIPK1]] 招募（或在非典型壞死小體中由 TRIF/[[ZBP1]] 招募），它磷酸化 [[MLKL]] 以驅動膜孔形成與裂解性死亡。僅過度表達 [[RIPK3]] 或誘導其二聚化，即足以在不需要 [[RIPK1]] 的情況下造成 [[MLKL]] 依賴性死亡。

> [!info]
> 來源：[[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018]]
> 關鍵磷酸化位點：Ser204（小鼠；人類 Ser199；S204A 阻斷死亡）、Ser232（MLKL 招募面，而非激酶活性）、Ser227（允許 MLKL 結合的構型）。激酶死亡的截短體會形成類澱粉纖維；磷酸化調控 RHIM 壞死小體的組裝。除了細胞死亡，[[RIPK3]] 還作為支架促進炎症小體活化（caspase-8 與 [[NLRP3]] 支臂 → IL-1β 成熟）、驅動抗菌／抗病毒防禦（鼠疫耶爾森氏菌、結核分枝桿菌、MCMV/HCMV 的免疫逃逸標的），並在肝損傷、動脈粥樣硬化、I/R 與神經退化（ALS SOD1-G93A、PD、MS、SCI）中被上調。

> [!info]
> 來源：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]]
> RIPK3 的活化主要由來自 [[RIPK1]]、[[ZBP1]] 或 [[TRIF]] 的 RHIM 介導交互作用主導，但也受到情境特異性調控者的補充：[[RSK3]] 磷酸化 RIPK3 以在缺血性視網膜損傷中促進死亡，而 [[CSNK1G2]] 結合並抑制 RIPK3（與雄性生殖老化相關）。有些病原體完全繞過 RHIM——發熱伴血小板減少症候群病毒的 NSs 結合 RIPK3 激酶結構域以促進自身磷酸化。除了 [[MLKL]] 與 [[Pyruvate Dehydrogenase]] 複合體外，RIPK3 也磷酸化 [[CaMKII]]（心肌 I/R 的粒線體功能障礙、心衰竭、神經損傷）與 [[PGAM5]]（Drp1 驅動的分裂）。

> [!info]
> 來源：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green, NEJM 2014]]
> RIPK3 是壞死性凋亡的*定義性*分子：2014 年與 NCD-2012 對齊的定義為「依賴 RIPK3 的壞死性細胞死亡」——而非所有的壞死。遺傳學證明：刪除 [[FADD]]、[[c-FLIP]] 或 [[Caspase-8]] 會使小鼠於約 e10.5 死亡，而在 RIPK3 缺陷背景下可完全獲救；組織特異性 FADD/caspase-8 缺失（角質形成細胞、腸上皮）所造成的疾病可由剔除 RIPK3 預防。牛痘病毒在 **RIPK3 缺陷**小鼠中致死，但在野生型中不致死。RIPK3 本身可獨立於細胞死亡之外促進發炎（透過 [[Retinoic-acid-inducible protein I-like receptor|RIG-I]] 與 [[NLRP3]] [[Inflammasome]]），且腎絲球 [[Endothelial Cells|內皮細胞]]（不同於腎小管細胞、系膜細胞與足細胞）高量表達 RIPK3。

## 代謝調控

除了 [[MLKL]] 磷酸化之外，[[RIPK3]] 也是代謝調控者：它活化 [[PYGL]]、[[GLUL]] 與 [[GLUD1]]，並直接磷酸化 [[Pyruvate Dehydrogenase]] 複合體（E3 亞基，Thr135）以提升需氧呼吸與粒線體 [[ROS]]。這一呼吸支臂會回饋至壞死小體，因此透過 [[MPC]] 阻斷 [[Pyruvate]] 攝取（例如使用 [[UK5099]]）可抑制 TNF 誘導的 [[Necroptosis]]（Yang et al., *Nat Cell Biol* 2018）。

## Documents

- [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018 J Neuroinflammation review]]
  - 過度表達／二聚化證明充分性；磷酸化位點圖譜（Ser204/227/232）；炎症小體支架功能；感染與神經退化中的角色。
- [[_document_ - RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis|Yang et al. 2018 — RIP3 targets PDC to increase aerobic respiration in TNF-induced necroptosis]]
  - RIPK3 在 Thr135 磷酸化 PDC-E3，驅動需氧呼吸與粒線體 ROS，進而強化壞死小體。
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - 由 RIPK1/ZBP1/TRIF 介導的 RHIM 活化，加上情境特異性調控者（RSK3、CSNK1G2）與病原體繞過機制（SFTSV NSs）；非 MLKL 受質 CaMKII、PDC 與 PGAM5。
- [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014 NEJM — Necroptosis]]
  - RIPK3 作為壞死性凋亡的定義性分子；e10.5 致死—獲救遺傳學；RIPK3-KO 小鼠對牛痘病毒的易感性；腎絲球內皮 RIPK3 表達；經 RIG-I/NLRP3 的 RIPK3 相關發炎。

#

## 連結
- [[RIPK3]] — 相關實體
- [[Pyruvate Dehydrogenase]] — RIPK3 受質（E3 Thr135）；將 RIPK3 與需氧呼吸及 ROS 連結
- [[Necroptosis]] — 由 RIPK3 依賴性壞死小體組裝與代謝放大所驅動的死亡程式
- [[MLKL]] — 下游效應器，也是 RIPK3 取得粒線體定位 PDC 所必需

## 連結摘要
- 新增連結：[[RIPK3]], [[Pyruvate Dehydrogenase]], [[Necroptosis]], [[MLKL]], [[Pyruvate]], [[MPC]], [[UK5099]], [[ROS]], [[PYGL]], [[GLUL]], [[GLUD1]]
  - 應強化的重點連結：[[RIPK3]] ↔ [[Pyruvate Dehydrogenase]] ↔ [[Necroptosis]]
- 建議建立的新實體註記：[[PYGL]], [[GLUL]], [[GLUD1]]
- 來源補充（2026-09-14）：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — 情境特異性的 RIPK3 調控者（RSK3、CSNK1G2、SFTSV NSs）與非 MLKL 受質（CaMKII、PDC、PGAM5）。新增連結：[[RSK3]], [[CSNK1G2]], [[CaMKII]], [[PGAM5]], [[TRIF]]。
- 來源補充（2026-09-14）：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014]] — RIPK3 作為定義性激酶；e10.5 獲救遺傳學；牛痘 KO 致死性；腎絲球內皮表達；經 RIG-I/NLRP3 的非壞死性凋亡發炎。新增連結：[[FADD]], [[c-FLIP]], [[Caspase-8]], [[Retinoic-acid-inducible protein I-like receptor]], [[NLRP3]], [[Inflammasome]], [[Endothelial Cells]].
