---
title: Apoptosis-Inducing Factor
description: "凋亡誘導因子（AIF）是粒線體黃素蛋白，最初與 caspase 不依賴性凋亡相關；其旁系同源蛋白 AIFM2 即是鐵死亡抑制因子 FSP1。"
protected: true
created: 2026-08-24
updated: 2026-09-14
tags: [protein, mitochondria, ferroptosis, apoptosis, cell-death]
aliases: [AIF, AIFM1, apoptosis-inducing factor mitochondria-associated 1]
---
# 凋亡誘導因子

**凋亡誘導因子（Apoptosis-Inducing Factor, AIF）**由 **AIFM1** 編碼，是一種最初被鑑定為 caspase 不依賴性凋亡效應器的粒線體黃素蛋白。當 AIF 自粒線體釋放至細胞質／細胞核時，會誘導染色質凝縮與大規模 DNA 片段化。儘管 AIF 本身是凋亡的介導者，鐵死亡領域卻與 AIF 密切相關，因為其旁系同源蛋白 **AIFM2** 正是如今稱為 [[FSP1]] 的蛋白質（ferroptosis suppressor protein 1，舊稱 AIFM2/AIF-M2）。

## 結構與生化

AIF 是一種具有氧化還原酶樣摺疊與粒線體定位訊號的黃素蛋白（flavoprotein）；它位於膜間隙，錨定在粒線體內膜的外表面。其旁系同源蛋白 AIFM2/FSP1 是經豆蔻醯化的黃素蛋白，定位於細胞質膜。

## 作用機制與途徑

經典上，凋亡刺激會觸發 AIF 自粒線體轉位至細胞核，促進 caspase 不依賴性的染色質溶解。在鐵死亡中，相關的 AIF 家族成員是 **AIFM2 = FSP1**：FSP1 經豆蔻醯化被招募至細胞質膜，在此作為氧化還原酶，將[[Coenzyme Q10|CoQ10]]（ubiquinone-10）還原為其抗氧化型態（泛醇），捕獲脂質自由基，並不依賴[[GPX4]]/[[Glutathione]]地抑制[[Lipid Peroxidation]]（Bersuker et al.; Doll et al., 2019）。因此 AIF 蛋白家族連結了凋亡（AIFM1）與鐵死亡抑制（AIFM2/FSP1）。

> [!info] 命名注意事項
> 請勿混淆 AIF（AIFM1，促凋亡）與 FSP1/AIFM2（抗鐵死亡）。該綜述指出 FSP1「先前稱為 AIF-M2」，這正是 AIF 會出現於鐵死亡文獻中的原因。

## 生理功能

AIF 是粒線體呼吸複合體組裝（特別是 CI 完整性）所必需，並在釋放後介導死亡執行程序。FSP1/AIFM2 則保護膜免於脂質過氧化。

## 病理與臨床相關性

AIFM1 突變會導致粒線體疾病；FSP1 喪失使腫瘤對鐵死亡敏感，使其成為[[Cancer|癌症]]的治療標的，也是[[Hepatocellular Carcinoma|肝細胞癌]]的抗藥性因子。AIF/FSP1 軸是凋亡與鐵死亡調節因子在分子層面交織的範例。

#


**AIF**（Apoptosis-inducing factor，基因 *AIFM1*）是一種通常存在於粒線體膜間隙的黃素蛋白，在此作為 NADH 氧化酶發揮作用，參與氧化磷酸化與粒線體結構的維持。在嚴重的細胞壓力下，它被釋放並轉位至細胞核，在此執行**caspase 不依賴性**的程式化細胞死亡——這是[[Apoptosis|凋亡]]與[[Cell Death|細胞死亡]]的一個獨特分支。

## 結構與定位

AIF 含有 N 端粒線體靶向序列、一個與氧化還原酶相關的中央黃素結合結構域，以及一個在蛋白水解切割後暴露的 C 端細胞核定位序列。在健康的粒線體中，AIF 支持呼吸複合體 I 的組裝與穩定。其氧化還原活性與其致命的細胞核功能無關。

## 作用機制

在粒線體外膜通透化之後（見[[Intrinsic Pathway|內在途徑]]），AIF 被鈣蛋白酶或組織蛋白酶切割並轉位至細胞核。它在此與[[DNA]]結合，並與[[Cyclophilin A]]共同誘導大規模（約 50 kb）的染色質片段化與[[chromatin condensation|染色質凝縮]]。這條 caspase 不依賴性的路徑可確保即使 caspase 被抑制（例如被[[IAPs]]或病毒抑制劑抑制），死亡仍得以執行，提供一個失效保護的致死程式。

> [!info] parthanatos 的細節
> AIF-D3 上的 PAR 結合基序（Arg588/Lys589/Arg592），與 DNA 結合位點分離——突變後仍保留氧化酶／DNA 結合能力，卻阻斷 PAR 誘導的釋放與死亡。外膜池中 20–30% 的快速釋放發生於細胞色素 c 之前。鈣蛋白酶切割（62→57 kDa）對典型 parthanatos 並非必要；calpain–BID–BAX 連線（tBID → BAX → AIF）以 caspase 不依賴方式運作（Galán-Malo 2012）。細胞核內的執行經由[[MIF]]/PAAN 或 CypA–H2AX 複合體；[[HSP70]]將細胞質 AIF 隔離作為煞車。

> [!info]
> 來源：[[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> 該綜述區分**依賴 AIF** 與**不依賴 AIF** 的 parthanatos：某些 PARP1 依賴的死亡模型（視網膜細胞、巨噬細胞）偵測不到 AIF 轉位，反而經由能量崩解／粒線體分裂死亡。它列出的未解問題包括 AIF 釋放的確切序列、切割 DNA 的核酸酶，以及凋亡性與 parthanatic 的 AIF 轉位之間的差異。相互競爭的釋放模型包括直接的[[PAR]]結合、[[Calpain|calpain I]]蛋白水解（某些模型的證據反對其核心角色）以及[[Mitochondrial Permeability Transition Pore|粒線體通透性轉換孔]]；相互競爭的核酸酶則為[[MIF]]/PAAN 與 AIF–cyclophilin A–[[H2A.X]]複合體。

## 生理功能（發育與存活）

除了細胞死亡之外，AIF 亦為生命所必需：AIFM1 喪失會在人類中導致嚴重的粒線體腦病變（合併氧化磷酸化缺陷）。在發育過程中，AIF 介導的 caspase 不依賴性死亡塑造了管腔形成時的空化作用，並在特定組織中清除多餘的細胞。

## 病理與癌症相關性

- **腫瘤細胞死亡**：AIF 參與許多[[Chemotherapy|化學治療]]藥物與放射治療的致死作用，特別是當它們造成災難性氧化損傷時。可誘導活性氧種（[[Oxidative Stress|氧化壓力]]）的藥物能動用 AIF 作為備用死亡路徑。
- **抗藥性**：caspase 缺陷或對[[Apoptosis|凋亡]]具抗性的腫瘤仍可能經由 AIF 被殺死，使其成為值得注意的治療標的。反之，AIF 下調可能賦予某些細胞毒性藥物的抗藥性。
- **神經保護介面**：由於 AIF 釋放亦發生於興奮毒性與缺血性損傷，AIF 抑制劑正被探索用於神經保護——當腫瘤與正常組織共享凋亡脆弱性時，此平衡格外相關。

## 性別二態性

成年大腦缺血後，細胞核 AIF 轉位會殺死雄性而非雌性：PAR 生成與 AIF 轉位在兩性皆會發生，然而 PARP-1 刪除或 AIF 缺乏（Harlequin）僅保護雄性，雌性則偏好經由細胞色素 c/caspase-3 死亡（McCullough et al. 2005, PMID 15689952；Yuan et al. 2009, *Exp Neurol* 217:210–218；Liu et al. 2009, *Stroke*, PMID 19265047）。此分歧是細胞自主性的——體外實驗中 XY 神經元偏好 AIF 介導的死亡，XX 神經元則偏好 caspase 死亡（Du et al. 2004, *J Biol Chem*）。新生雄性在缺氧缺血後同樣受益於 PARP-1 破壞的優先保護（Hagberg et al. 2004, *J Neurochem*），但須注意 AIF 減少加上 caspase 抑制對兩性具有加成益處（Zhu et al. 2006, *Cell Death Differ*）。完整的 PARP-1/PAR/AIF 性別二態性連鎖反應見[[Parthanatos]]。

## Documents

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - 該綜述說明 FSP1 舊稱 AIFM2/AIF-M2；它在鐵死亡脈絡下重新介紹 AIF，並將 FSP1 描述為還原 CoQ10 的豆蔻醯化細胞質膜氧化還原酶。
  - [[_document_ - Parthanatos Andrabi 2008 mitochondrial nuclear crosstalk|Andrabi/Dawson 2008 Ann NY Acad Sci]]
    - AIFM1 是 parthanatos 的執行者：PARP-1-KO 細胞無法釋放 AIF；敲低／中和具保護作用；Harlequin（約 80% 減少）對 NMDA/PAR 與中風具抗性；重新表現可恢復易感性。
  - [[_document_ - Parthanatos David 2009 messenger of death|David et al. 2009 Front Biosci]]
    - AIF 成熟 67→62→57 kDa、FAD/NADH 氧化還原酶摺疊、複合體 I／氧化還原的日常職責；經 CypA 以 caspase 不依賴方式執行細胞核轉位致死；可被中和抗體/HSP70 阻斷。
  - [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]]
    - 其他自粒線體膜間隙釋放的凋亡因子包括 AIF、Smac DIABLO 與 Omi/HtrA2。
  - [[_document_ - sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i|sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i]]
    - SIRT1 透過 AIF 促進 PARP-1 介導的細胞存活；SIRT1 去乙醯化與心肌肥大相關的組蛋白變體 H2A.Z。
  - [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
    - 依賴 AIF 與不依賴 AIF 的 parthanatos；釋放路徑（PAR 結合、calpain、mPTP）與 DNA 切割模型（[[MIF]]/PAAN 對 AIF–cyclophilin A–[[H2A.X]]）被列為未解問題。

## Connections

  - [[FSP1]]：抑制鐵死亡的 AIFM2 旁系同源蛋白
  - [[Apoptosis]]：由 AIFM1 執行的經典死亡程式
  - [[Coenzyme Q10]]：被 FSP1 還原以捕獲脂質自由基
  - [[GPX4]]：平行的、不依賴 GPX4 的抗氧化軸
  - [[Lipid Peroxidation]]：受 FSP1 約束的過程
  - [[Intrinsic Pathway]]：AIF 釋放由 MOMP 觸發。
  - [[Apoptosis]]：執行 caspase 不依賴性的程式化死亡。
  - [[chromatin condensation]]：AIF 誘導的形態學特徵。
  - [[Cyclophilin A]]：AIF 在 DNA 片段化中的細胞核夥伴。
  - [[Oxidative Stress]]：促進 AIF 介導死亡的觸發因素。
  - [[Cell Death]]：涵蓋 AIF 功能的更廣泛類別。
  - [[Chemotherapy]]：許多藥物會動用 AIF。

## Linking Summary

- 新增連結：[[FSP1]]、[[Apoptosis]]、[[Coenzyme Q10]]、[[GPX4]]、[[Glutathione]]、[[Lipid Peroxidation]]、[[Cancer]]、[[Hepatocellular Carcinoma]]、[[Ferroptosis]]
- 建議建立的新實體註記：無
- 應強化的重點連結：
    - [[Apoptosis-Inducing Factor]] ↔ [[FSP1]]
    - [[Apoptosis-Inducing Factor]] ↔ [[Apoptosis]]

## Linking Summary（自 AIF.md 整併）

- 新增連結：[[Apoptosis]]、[[Intrinsic Pathway]]、[[Cell Death]]、[[chromatin condensation]]、[[Cyclophilin A]]、[[Oxidative Stress]]、[[DNA]]、[[IAPs]]、[[Chemotherapy]]、[[Mitochondrial Respiration]]
- 建議建立的新實體註記：[[Cyclophilin A]]、[[AIFM1]]、[[caspase-independent cell death]]
- 應強化的重點連結：[[Apoptosis-Inducing Factor|AIF]] ↔ [[Intrinsic Pathway]]、[[Apoptosis-Inducing Factor|AIF]] ↔ [[Oxidative Stress]]
- 性別二態性補充（2026-09-03）：AIF 轉位僅在雄性致死；細胞自主性的 XY/XX 分歧（McCullough 2005；Yuan 2009；Du 2004）。新增連結：[[Parthanatos]]、[[PARP1]]。
- 來源補充（2026-09-14）：Moura et al. 2024——依賴 AIF 與不依賴 AIF 的 parthanatos，以及未解的釋放／核酸酶模型。新增連結：[[MIF]]、[[Calpain]]、[[Mitochondrial Permeability Transition Pore]]、[[H2A.X]]、[[PAR]]。
