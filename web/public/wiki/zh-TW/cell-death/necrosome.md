---
title: necrosome
description: 執行壞死性凋亡的 RIPK1–RIPK3–MLKL 訊號複合體——在 caspase-8 缺席或被抑制時組裝，將死亡受體刺激轉換為裂解性、釋放 DAMP 的發炎性細胞死亡。
protected: true
created: 2026-08-29
updated: 2026-11-19
tags:
  - biological-process
  - necroptosis
  - cell-death
  - inflammation
url: #
source: #
aliases:
  - Necrosome complex
  - RIPK1-RIPK3-MLKL complex
---

# necrosome（壞死小體）

**壞死小體**（necrosome）是執行[[Necroptosis|壞死性凋亡]]的類澱粉樣訊號複合體。它形成於 TNFR1 訊號的第三個分支點：當存活分支（複合體 I → NF-κB）與兩條凋亡分支（複合體 IIa 與 IIb → [[Caspase-8]]）皆不可用時——典型情況為 caspase-8 缺席、被去活化，或受藥理或病毒方式抑制——[[RIPK1]]招募並磷酸化[[RIPK3]]，後者再招募並磷酸化 **[[MLKL]]**。

## 組裝與執行

1. **成核**：RIPK1–RIPK3 經由 RHIM 結構域交互作用；RIPK3 自體磷酸化並招募 MLKL。
2. **錨定**：[[PGAM5]]將複合體錨定於粒線體，並支持 RIPK3–PGAM5–[[DRP1]] 分裂軸。
3. **執行**：磷酸化的 MLKL 寡聚化、轉位至細胞質膜、形成陽離子孔道 → 滲透性破裂與 DAMP 釋放。
4. **替代組裝**：TRIF–RIPK3（TLR3/4）與 ZBP1/DAI–RIPK3 複合體可**獨立於 RIPK1** 組裝壞死小體。

> [!info]
> 壞死小體是命運決定的輸出階段，而非起點——c-FLIP/caspase-8 活性是使 RIPK1/RIPK3 持續被切割、壞死小體無從形成的變阻器。

> [!info]
> 來源：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]]
> 該回顧詳述替代組裝路徑：[[TRIF]]直接結合[[TLR3]]/[[TLR4]]下游的 RIPK3 RHIM，而[[ZBP1]]經由 RHIM 招募 RIPK3——在人類細胞中需要[[RIPK1]]作為橋接銜接蛋白，在小鼠細胞中則非必需／具抑制作用。壞死小體的輸出受 RHIM 非依賴性調節因子（[[RSK3]]、[[CSNK1G2]]）以及病原蛋白（例如 SFTSV NSs）調控，後者可在不經 RHIM 結合的情況下活化 RIPK3。

> [!info]
> 來源：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green, NEJM 2014]]
> 壞死小體（Li et al., *Cell* 2012）被確立為「一種胞內**類澱粉樣結構**，作為壞死性訊號的傳導器」，於[[Caspase-8]]或[[c-FLIP]]喪失或其活化被中斷時組裝。人類基因體中僅有四種 RHIM 結構域蛋白——RIPK1、RIPK3、[[TRIF]]與[[DAI]]——因此壞死小體的 RHIM 交互作用體很小且被大量重複使用：TRIF 在 Toll 樣受體下游活化它，DAI 整合病毒 RNA 感測訊號，而 JAK/STAT 依賴性的[[Protein Kinase R]]路徑（PKR → 磷酸化的[[FADD]]）提供一條干擾素驅動的組裝途徑。由於壞死小體組裝迅速，疾病中的治療窗口狹窄。

> [!info]
> 來源：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> 由哪一種 c-FLIP 異構體佔據 caspase-8 異二聚體，決定上游平台是否成為壞死小體。Caspase-8/FLIP_L 異二聚體切割[[RIPK1]]與[[RIPK3]]並使複合體解組（凋亡或存活）；caspase-8/FLIP_S 異二聚體無法切割它們，因此 RIPK1 保持完整、磷酸化 RIPK3，細胞走向[[Necroptosis|壞死性凋亡]]——病毒 FLIP MC159 產生相同結果。激酶阻斷並非單純阻止死亡：RIPK3 D161N 突變體或 RIPK3 抑制劑雖停止壞死性凋亡，卻將該平台導向凋亡，此一轉向在小鼠胚胎纖維母細胞中會被 FLIP_L 增強。

## 文獻

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - 壞死小體形成作為 TNFR1 訊號在 caspase-8 被阻斷時的第三種選擇，涉及 PGAM5 錨定與 MLKL 驅動的膜破裂。
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - TRIF–RIPK3 與 ZBP1–RIPK3 替代性壞死小體組裝（RIPK1 角色具物種差異）；RSK3/CSNK1G2/病原蛋白的 RHIM 非依賴性活化。
- [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014 NEJM — Necroptosis]]
  - 壞死小體作為功能性類澱粉樣訊號複合體；僅含四種 RHIM 蛋白的基因體（RIPK1、RIPK3、DAI、TRIF）；TRIF/DAI/PKR 組裝路徑；快速組裝導致治療窗口狹窄的警示。
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - 異構體特異性授權：FLIP_S（與 MC159）因無法切割 RIPK1/RIPK3 而允許壞死小體組裝；FLIP_L 則強制解組；RIPK3-D161N 或 RIPK3 抑制會將死亡導向凋亡。

## 關聯

- [[RIPK1]] / [[RIPK3]] — 複合體的激酶核心
- [[MLKL]] — 被釋出以破裂細胞膜的磷酸化執行者
- [[PGAM5]] — 將壞死小體與粒線體分裂連結的粒線體錨定蛋白
- [[Caspase-8]] / [[c-FLIP]] — 其失效即允許組裝的抑制性變阻器
- [[p43-FLIP]] — 異二聚體在上游 DISC 啟動後留下的 FLIP_L 片段
- [[vFLIP]] — 行為類似 FLIP_S、將死亡受體訊號導向壞死性凋亡的病毒 FLIP（MC159）
- [[TNFα]] — 典型的起始配體（TNFR1）
- [[Necroptosis]] — 壞死小體所執行的死亡程式
- [[Inflammation]] — 壞死性破裂所釋放的 DAMP 引發的發炎

## 連結摘要

- 新增連結：[[RIPK1]]、[[RIPK3]]、[[MLKL]]、[[PGAM5]]、[[Caspase-8]]、[[c-FLIP]]、[[TNFα]]、[[Necroptosis]]、[[Inflammation]]
- 待強化的強連結：[[necrosome]] ↔ [[RIPK3]]、[[necrosome]] ↔ [[MLKL]]、[[necrosome]] ↔ [[PGAM5]]
- 來源補充（2026-09-14）：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — TRIF/ZBP1 組裝與 RHIM 非依賴性調控。新增連結：[[TRIF]]、[[ZBP1]]、[[RSK3]]、[[CSNK1G2]]。
- 來源補充（2026-09-14）：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014]] — 類澱粉樣壞死小體結構（Li 2012）；僅含四種 RHIM 蛋白的基因體（RIPK1、RIPK3、DAI、TRIF）；TRIF/DAI/PKR 路徑；快速組裝。新增連結：[[DAI]]、[[Protein Kinase R]]、[[c-FLIP]]、[[JAK-STAT Signaling]]。
- 來源補充（2026-11-19）：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — 異構體特異性授權組裝（FLIP_S/MC159 允許、FLIP_L 解組）以及 RIPK3-D161N 造成的凋亡轉向。新增連結：[[p43-FLIP]]、[[vFLIP]]。
