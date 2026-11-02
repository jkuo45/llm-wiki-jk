---
title: Glycolysis
description: 糖解作用是將葡萄糖轉換為丙酮酸的代謝途徑。此途徑的副產物之一是甲基乙二醛（Methylglyoxal），為晚期糖化終產物的強效前驅物。
protected: false
created: 2026-07-04
updated: 2026-11-01
tags: [biological-process]
url: #
source: #
aliases: [Glycolysis, 糖解作用]
---

# Glycolysis（糖解作用）

糖解作用是將葡萄糖轉換為丙酮酸的代謝途徑。此途徑的副產物之一是[[Methylglyoxal|甲基乙二醛]]，為[[Advanced Glycation End Products|AGEs]] 的強效前驅物。

> [!warning] Parthanatos 的輸入端
> 游離的 [[PAR]] 鏈會經其 PAR 結合基序結合並抑制 [[Hexokinase-1|己糖激酶-1]]（MNNG 後約 15 分鐘 HK 活性下降，早於 [[NAD+]] 流失；PARG 預先消化的 PAR 無活性；PBM 突變的 HK1 具抗性），並促使 HK1 與 [[VDAC]] 解離，阻斷糖解與磷酸戊糖途徑（NADPH/GSH 下降）。補充丙酮酸／α-酮戊二酸可挽救下游的粒線體衰竭。完整的 NAD+ 回收每處理一個 ADP-核糖約耗 4 個 ATP；[[Nudix Hydrolases]] 產生的 AMP 則饋入 AMPK–mTORC1 的調控層。

## 糖解與癌症

- **代謝重編程**：癌細胞依賴有氧糖解以支撑快速增殖與生物量生成。
- **關鍵酵素**：[[Hexokinase 2]]（HK2）、[[Phosphofructokinase|磷酸果糖激酶]]與[[Pyruvate Kinase M2]]（PKM2）常被過度表現。
- **葡萄糖運輸**：[[GLUT1]] 等葡萄糖轉運蛋白上調，增加[[Glucose uptake|葡萄糖攝取]]。
- **標的化糖解**：包括 [[Benzimidazole|苯並咪唑]]類化合物如 [[Fenbendazole|芬苯達唑]]在內的抗癌策略，藉抑制糖解使腫瘤細胞缺乏能量。

## 紅血球中的糖解

成熟[[Erythrocytes|紅血球]]沒有粒線體，因此糖解是其**唯一**的 ATP 來源——這項依賴性源自[[Erythropoiesis|紅血球生成]]期間以粒線體自噬清除粒線體。葡萄糖經[[GLUT1]] 進入並由[[Hexokinase-1]] 決定其去路；磷酸戊糖途徑共用同一己糖-6-磷酸池，供應 NADPH 以支持 GSH／穀胱甘肽還原酶防線。

由於糖解產生的 ATP 是唯一能量預算，紅血球的死亡閾值由糖解通量決定：

- 移除葡萄糖或加入 [[2-deoxy-D-glucose|2-DG]] → ATP 快速流失 → [[PKC|PKCα]] 轉位至膜 → Ca2+ 通透性陽離子通道的絲胺酸磷酸化 → 細胞質 Ca2+ 上升 → [[Phosphatidylserine|磷脂醯絲胺酸]]外露與皺縮，即陽離子通道驅動的[[Eryptosis|eryptosis]]。
- [[AMPK]] 感測 ATP/AMP 赤字並抑制死亡（AMPKα 缺失小鼠出現脾腫大與嚴重貧血），因此 ATP 耗竭分支受到能量感測器的對抗，而非單向的觸發。
- 能量耗竭同時損害 Ca2+ 外排本身（質膜 Ca2+-ATPase 與 Na+/Ca2+ 交換器），進一步推升細胞質 Ca2+。

這使糖解成為能量代謝與陽離子通道驅動 eryptosis 之間的樞紐：沒有糖解就沒有 ATP，沒有 ATP 就沒有 PKCα 轉位、沒有 Ca2+ 內流、沒有 PS 外露。

> [!info] 來源
> [[_document_ - Current understanding of eryptosis mechanisms, physiological functions, role in disease, pharmacological applications, and nomenclature recommendations|Tkachenko et al. 2025 eryptosis 共識回顧]] — 能量代謝章節（移除葡萄糖／2-DG → ATP 流失 → PKCα → Ca2+ → PS 外露＋皺縮）與 AMPK 的平衡感測角色。

## Documents

- [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|熱量限制與斷食自噬反應的益處與不良效應]] — 經磷酸果糖激酶-2 活化與 GSK3beta 抑制誘導糖解、糖原生成與脂肪生成。
- [[_document_ - Cellular Mechanisms and Regulation of Quiescence|細胞靜止的機制與調控]] — 靜止細胞 ATP 顯著下降，部分細胞降低氧化磷酸化並改以糖解為主要代謝來源。
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease]] — SIRT 對葡萄糖代謝（無氧糖解、有氧氧化等）的影響。

## Connections

- **相關過程**：[[Warburg Effect]]、[[Metabolic Reprogramming]]、[[Oxidative Phosphorylation]]、[[Gluconeogenesis]]
- **關鍵分子**：[[Glucose]]、[[Pyruvate]]、[[Lactate]]、[[ATP]]
- **調控者**：[[p53]]、[[HIF-1α]]、[[MYC]]
- **紅血球**：無核紅血球唯一的 ATP 來源；ATP 流失經 [[PKC|PKCα]] 走向[[Eryptosis|eryptosis]]
- **能量感測**：[[AMPK]] 抑制 ATP 耗竭驅動的 eryptosis

## Linking Summary

- 建議強化：[[Glycolysis]] ↔ Methylglyoxal
- 2026-10-29：新增紅血球段落（糖解為成熟紅血球唯一 ATP 來源，以及糖解→ATP 耗竭→PKCα→陽離子通道→Ca2+→PS 外露／皺縮的 eryptosis 分支，AMPK 為對抗的能量感測器）；本 zh-TW 版於 2026-11-01 建立。
