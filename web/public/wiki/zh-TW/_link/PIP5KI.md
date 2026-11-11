---
title: PIP5KI
description: PIP5KI 指第一型磷脂醯肌醇 4-磷酸 5-激酶（PIP5K1A、PIP5K1B、PIP5K1C），將 PtdIns4P 磷酸化為 PtdIns(4,5)P2；不同的第二型家族（PIP4K2A-C，前稱 PIP5K2）反而生成 PI5P，兩者皆被作為癌症標靶研究。
protected: false
created: 2026-09-29
updated: 2026-11-10
tags:
  - enzyme
  - kinase
  - lipid-metabolism
  - signaling
aliases: [PIP5KI, Type I PIP5K, PIP5K1, Phosphatidylinositol 4-phosphate 5-kinase type 1, PI4P 5-kinase]
---

# PIP5KI

> [!warning] 命名注意事項
> "PIP5KI" 是家族層級標籤，而非單一蛋白，且易與第二型家族混淆。**第一型 PIP5K（PIP5K1A、PIP5K1B、PIP5K1C）**在 5 位磷酸化 PI(4)P 以生成 PI(4,5)P2——即[[Phospholipase C]]消耗的同一脂質。**第二型 PIP5K（PIP4K2A、PIP4K2B、PIP4K2C；前稱 PIP5K2A-C）**在 4 位磷酸化 PI 以生成 PI(5)P，受質不同、下游讀取者也不同。在受質差異釐清後，"PIP5K" 之名仍傳續用於兩家族，是文獻中持續的誤差來源。當本知識庫指 PI(4,5)P2 合成時——如在[[PtdIns(4,5)P2]]與自噬溶小體再形成中——均指**第一型**。

## 結構與催化

兩家族共享緊湊雙葉結構，具 N 端激酶域與無序 C 端尾。第一型 PIP5K 以**強制二聚體伴隨分子間受質通道**運作：一個原體的 C 端尾伸向並將 PI(4)P 呈至其夥伴的活性位點，故二聚體為功能單位且單體化會喪失活性。三種 PIP5K1 異構型皆需膜上 PI(4)P——為膜錨定脂質激酶而非可溶性激酶，作用於局部而非大量池。

此類酶對局部膜曲率與脂質組成異常敏感，且濃聚於膜域而非均勻分布。這正是 PIP5K 含量 modest 變化可導致局部 PI(4,5)P2 濃度大幅變化、訊號輸出變化更大幅的原因。

## 自噬溶小體再形成

PIP5K1B 與 PIP5K1C 為**自噬溶小體再形成（ALR）**所需——即[[Autophagy]]末端步驟，全-formed 自噬溶小體芽生原溶小體微管以再生功能性溶小體池（Yu et al., 2010, *Nat Cell Biol*; Chen et al., 2012, *Nat Cell Biol*）。自噬溶小體表面的局部 PI(4,5)P2 招募[[Clathrin]]與接合複合物[[AP2]]，驅動膜內陷與微管剪切。Kinesin-1（[[KIF5B]]）延伸新生微管。

> [!info] 對本知識庫自噬興趣的意義
> 長期飢餓後，自噬溶小體物理上喪失降解貨物的能力。若未再形成，溶小體耗竭會使自噬通量停滯，儘管起始與融合正常。PIP5K1 缺失因此產生*停滯但未阻塞*的自噬體／溶小體系統——與溶小體貯積疾病或融合受損所見累積截然不同的特徵。

## 疾病相關性

> [!warning] 臨床注意事項
> PIP5K 家族腫瘤學完全處於臨床前階段。第二型（PIP4K2）支是較活躍的藥物標靶，且上述命名混淆意味文獻中「PIP5K」抑制主張可能指任一受質。

- **第二型 / PIP4K2A。** 藥理抑制 PI5P 4-kinase α/β 耗竭 PI5P、擾亂能量代謝，並選擇性殺死 p53-null 腫瘤細胞。
- **PIP4K2C。** 在大腸直腸癌、乳癌及其他癌症中升高；降解劑與抑制劑計畫（包括首創降解劑 LRK-4189）針對微衛星穩定大腸直腸癌。
- **第一型 / PIP5K1A。** 為轉移性乳癌模型中 invadopodia 形成與存活所需，是第一型激酶作為抗轉移標靶的主要依據。
- **傳染病。** 第二型 PIP5K2C 為 SARS-CoV-2 與 MERS-CoV 複製的宿主因子報告，且 PIP4K2C 抑制可恢復冠狀病毒感染模型中的自噬通量。

## SIRT1 調控（TSH 分泌）

[[SIRT1]] 經由對 PIP5Kγ（phosphatidylinositol 4-phosphate 5-kinase type-1 gamma）去乙醯化正向調控腦下垂體甲狀腺刺激激素（TSH）分泌，為 TSH 胞吐所需（Akieda-Asai et al., 2010；引自[[_document_ - Sirtuins at a glance|Sirtuins at a Glance (Nakagawa & Guarente 2011)]]）。

## 文獻

- [[PtdIns(4,5)P2]] — 第一型酶產出的受質，也是此家族所定義的樞紐脂質；本筆記是該樞紐代謝的激酶側。

## 連結

- [[PtdIns(4,5)P2]] — PIP5KI 為 PI(4)P → PI(4,5)P2 轉換的末端、限速步驟。膜上局部 PI(4,5)P2 梯度的陡峭程度由 PIP5KI 活性量 vs [[Phospholipase C]]與磷酸酶消耗速度決定。
- [[Phospholipase C]] — PLC 為第一型產出 PI(4,5)P2 的主要消耗者，將其切割為 IP3 與 DAG。PIP5KI 與 PLC 位於同一脂質通量的兩側，決定[[Calcium Signaling]]與[[PKC]]活化的形狀。
- [[Autophagic Lysosome Reformation]] — PIP5K1B/1C 經由生成局部 PI(4,5)P2 招募 clathrin 與 AP2 至芽生的自噬溶小體，為 ALR 所需。這是本知識庫中此家族機制最明確的角色。
- [[Autophagy]] — 經由控制溶小體再形成，PIP5KI 決定細胞在長期飢餓期間可維持的降解能力上限。
- [[Cholesterol]] — PI(4,5)P2 為內質網膽固醇穩態的關鍵調控脂質，OSBP 家族 sterol 轉運蛋白（見[[ORP1L]]）受招募至 PI(4,5)P2 富集的 ER 膜。故 PIP5KI 活性間接閘控 sterol 轉運。
- [[KIF5B]] — kinesin-1 為延伸原溶小體微管的馬達，其剪切依賴 PIP5KI 產出的 PI(4,5)P2；KIF5B 缺失在 ALR 檢測中複製 PIP5K1B 缺失表現型。
- [[Clathrin]] — 經典 clathrin 包被坑機制，在自噬溶小體表面重新用於 ALR 微管剪切。
- [[AP2]] — 連結 clathrin 包被組裝與 PIP5KI 創造的 PI(4,5)P2 富集膜曲率的接合複合物。

## 連結摘要

- 新增連結：[[PtdIns(4,5)P2]]、[[Phospholipase C]]、[[Autophagic Lysosome Reformation]]、[[Autophagy]]、[[Cholesterol]]、[[ORP1L]]、[[KIF5B]]、[[Clathrin]]、[[AP2]]、[[Calcium Signaling]]、[[PKC]]
- 建議新增筆記：[[Clathrin]]、[[PIP4K2C]]、[[PtdIns4P]]、[[PI5P]]、[[Phospholipid Kinase]]、[[Clathrin-mediated Endocytosis]]、[[Invadopodia]]
- 應加強的強連結：[[PIP5KI]] ↔ [[Autophagic Lysosome Reformation]]（ALR 筆記應指明具體 PIP5K1 異構型，而非僅「PIP5K」）、[[PIP5KI]] ↔ [[PtdIns(4,5)P2]]
