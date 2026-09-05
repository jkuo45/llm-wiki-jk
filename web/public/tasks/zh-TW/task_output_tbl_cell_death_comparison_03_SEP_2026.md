---
title: 細胞死亡比較 — 細胞凋亡、Parthanatos、壞死、壞死性凋亡、鐵死亡、自噬、細胞焦亡
description: 七種主要細胞死亡程式的對照表，綜整自 wiki 筆記並輔以一般知識補充。
created: 2026-09-03
updated: 2026-09-05
type: task-output
tags:
  - apoptosis
  - necrosis
  - necroptosis
  - ferroptosis
  - autophagy
  - pyroptosis
  - parthanatos
  - cell-death
---

# 細胞死亡比較 — 細胞凋亡、Parthanatos、壞死、壞死性凋亡、鐵死亡、自噬、細胞焦亡

> [!info]
> **資料來源背景**
> 本篇的主要 wiki 來源：[[Apoptosis|細胞凋亡]]、[[Necrosis|壞死]]、[[Necroptosis|壞死性凋亡]]、[[Ferroptosis|鐵死亡]]、[[Autophagy|自噬]]、[[Autophagic Cell Death|自噬性細胞死亡]]、[[Pyroptosis|細胞焦亡]]、[[Parthanatos]]、[[Regulated Cell Death|調節性細胞死亡]]、[[PARP1]]、[[AIF]]，另含 parthanatos 原始文獻（Fatokun 2014、Wang 2009、Yang 2024）。`*` = 一般知識補充。

## ==單行定義==

- ==**[[Apoptosis|細胞凋亡]]** — 經典的程序性、非裂解性死亡。依賴 caspase、依賴 ATP、靜默清除。==
- ==**[[Parthanatos]]** — 受調控的壞死，程序性裂解死亡。[[PARP1]] 依賴，經由 [[PAR]] -> 粒線體 [[AIF]] -> 細胞核 [[MIF]] 核酸酶；不依賴 caspase、大規模 DNA 片段化、NAD+ 耗竭、無腫脹、無凋亡小體。==
- ==**[[Necrosis|壞死]]** — 意外性、非調控的被動死亡。ATP 耗竭、細胞腫脹（[[Oncosis]]）、早期破裂、DNA 塗抹狀、DAMP 釋放、無菌性[[Inflammation|發炎]]；本身無已驗證的內在性別偏倚。==
- ==**[[Necroptosis|壞死性凋亡]]** — 受調控的壞死。外觀似壞死，但由 [[RIPK1]] -> [[RIPK3]] -> [[MLKL]] necrosome 執行，發生於 [[Caspase-8]] 被阻斷時。==
- ==**[[Ferroptosis|鐵死亡]]** — 受調控的鐵依賴性死亡，起因於 [[GPX4]]／[[Glutathione|麩胱甘肽]]／[[System Xc-]] 失守後失控的[[Lipid Peroxidation|脂質過氧化]]。==
- ==**[[Autophagy|自噬]]** — 主要為存活／回收至[[Lysosome|溶酶體]]，而非死亡。過度或通量失敗才導致[[Autophagic Cell Death|自噬性細胞死亡]]（第二型）。==
- ==**[[Pyroptosis|細胞焦亡]]** — 發炎體驅動的裂解性死亡，經由 [[Caspase-1]] -> [[Gasdermin D]] 孔洞＋IL-1beta／IL-18。==

[[Regulated Cell Death|調節性細胞死亡]]涵蓋除意外性壞死之外的所有類型。

## 對照表

|  | **[[Apoptosis|細胞凋亡]]** | **[[Parthanatos]]** | **[[Necrosis|壞死]]** | **[[Necroptosis|壞死性凋亡]]** | **[[Ferroptosis|鐵死亡]]** | **[[Autophagy|自噬]]** | **[[Pyroptosis|細胞焦亡]]** |
|---|---|---|---|---|---|---|---|
| **受調控？** | 是 | 是 | 否，意外性 | 是 | 是 | 是，促存活；僅在過度時致死 | 是 |
| **能量** | 依賴 ATP | 消耗 NAD+ —— PARP1 耗竭 NAD+／ATP | ATP 耗竭 | 依賴 ATP 的激酶級聯 | 依賴 GSH／NADPH | mTORC1 抑制、AMPK 活化 | 依賴 ATP 的發炎體組裝 |
| **型態** | 萎縮、起泡完整、凋亡小體、DNA 梯狀片段 | 染色質凝集、50-kbp 片段、去極化、無凋亡小體、無腫脹* | [[Oncosis|腫脹]]、早期破裂、DNA 塗抹狀 | 如壞死的腫脹＋破裂、中度凝集 | 粒線體皺縮緻密、無核片段化、破裂 | 雙層膜[[Autophagosome|自噬體]] -> 自噬溶酶體 | 腫脹、10–20nm 孔洞、破裂、無梯狀片段 |
| **免疫** | 靜默，[[Annexin V]]+ | 經 NAD+ 崩解＋DAMP 而發炎* | 高度發炎：[[HMGB1]]、[[ATP]]、[[Uric Acid|尿酸]] -> TLR／RAGE／[[NLRP3]] | 設計上即促發炎，DAMP 釋放 | 發炎性脂質 [[Malondialdehyde|丙二醛]]／[[4-Hydroxynonenal|4-羥基壬烯醛]] | 保護性，清除 DAMP 來源 | 高度發炎：IL-1beta／IL-18 ＋ [[HMGB1]]、[[IL-1α]]、經孔洞釋出的 mtDNA |
| **核心機制** | 外源性 Caspase-8 -> Caspase-3；內源性 [[p53]] -> [[Bax]]／[[BAK]] -> [[Cytochrome c|細胞色素 c]] -> Caspase-9 -> Caspase-3；受 [[Bcl-2]]／[[XIAP]] 抑制 | 重度 DNA 損傷 -> [[PARP1]] 過度活化 -> [[PAR]] -> [[AIF]] 釋放 -> [[MIF]] 核轉位 -> 大規模片段化，不依賴 caspase | 鈉鉀泵衰竭 -> [[Ca2+ overload|鈣超載]] -> [[Calpains|鈣蛋白酶]]；ROS -> [[mPTP]]；[[LMP]] -> [[Cathepsins|組織蛋白酶]] | TNFα -> Complex I [[NF-κB]] -> Complex II 凋亡 -> necrosome [[RIPK1]]->[[RIPK3]]->[[MLKL]]（若 Caspase-8 被阻斷）；TRIF／[[ZBP1]] 旁路 | System Xc-[[SLC7A11]] -> GSH -> [[GPX4]]；平行 [[FSP1]]-[[Ubiquinone|泛醌]]-NADPH；驅動因子 [[ACSL4]]、Fe2+ [[Fenton Reaction|芬頓反應]]、[[NCOA4]] | ULK1-[[FIP200]]；[[Beclin1]]-[[Vps34]]；Atg5-12-16L1 ＋ [[LC3]]；經 [[SIRT1]] 的 [[TFEB]] | 典型：PRR＋[[ASC]]＋pro-Caspase-1 -> [[Caspase-1]] -> [[Gasdermin D]] 孔洞＋IL-1beta／IL-18；非典型：Caspase-4／5／11 感測 LPS -> GSDMD -> K+ 外流 -> NLRP3；Caspase-3／[[Gasdermin E]] 支線 |
| **抑制方式** | z-VAD-FMK、Bcl-2 | PARP 抑制劑、AIF 阻斷、NAD+ 保存* | 無特異性抑制劑 | [[Necrostatin-1]]、GSK872、necrosulfonamide | [[Ferrostatin-1]]、liproxstatin-1、[[Deferoxamine|去鐵胺]] | 3-MA／chloroquine；由 [[Rapamycin|雷帕黴素]]誘導 | NLRP3 抑制劑、Caspase-1 抑制劑、disulfiram／GSDMD 阻斷* |
| **交互作用** | Caspase-8 切割 RIPK1／3 以阻斷壞死性凋亡；Caspase-3／7 切割 GSDMD 以阻斷細胞焦亡 | SIRT1 經 AIF 促進 PARP1 存活；PARP1 與 SIRTs 競爭 NAD+* | 若凋亡小體未被清除則轉為次發性壞死 | MLKL 活化 NLRP3 -> 細胞焦亡；RIPK3-AMPK 觸發早期自噬隨後阻斷通量 | [[SIRT3]] 失守經 ROS 同時助長壞死性凋亡＋鐵死亡 | PINK1／Parkin 粒線體自噬抑制壞死性凋亡／NLRP3；Caspase-1 切割 Parkin 以解除抑制 | GSDMD 孔洞促使 NLRP3 活化；[[SIRT3]] 降低 mtROS 以抑制 NLRP3 |

## 結論

> 細胞凋亡＝安靜拆解；Parthanatos＝因無法修復的 DNA 損傷而起的 PARP／AIF／MIF 自殺，無腫脹；壞死＝意外性能量崩潰而爆裂；壞死性凋亡＝經 RIPK／MLKL 蓄意爆裂；鐵死亡＝經鐵＋脂質由內鏽蝕；自噬＝吃掉自己以求生，僅在過度時致死；細胞焦亡＝經發炎體／Gasdermin 爆裂以警示免疫。
