---
title: NAD+ Metabolic Reprogramming
description: NAD+ 代謝重編程是黏膜 NAD+ 生物合成受損及 NAD+ 消耗增加的失衡，導致潰瘍性結腸炎中 NAD+ 耗竭，並經粒線體功能障礙及 cGAS-STING 訊號驅動 CD8+ T 細胞衰老。
protected: false
created: 2026-11-10
updated: 2026-11-10
tags:
  - biological-process
  - nad-metabolism
  - senescence
  - immunosenescence
  - ulcerative-colitis
aliases: [NAD+ metabolic dysregulation, NAD+ dysregulation, NAD+ exhaustion, Hyperconsumptive NAD+ state]
---

# NAD+ Metabolic Reprogramming

**NAD+ 代謝重編程**（NAD+ 代謝失調）是 [[NAD+ Salvage Pathway|菸醯胺腺嘌呤雙核苷酸代謝]] 的紊亂，Ye 等人（2026）將其鑑定為 [[Ulcerative Colitis|潰瘍性結腸炎]] 中 CD8+ T 細胞衰老的上游代謝驅動者。其特徵為生物合成受損與 NAD+ 消耗酶表現增加之間的失衡，形成高消耗狀態，耗竭黏膜 NAD+ 池。

## 代謝特徵

> [!info] Source: [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]
> 對結腸炎小鼠黏膜的非標靶代謝體學顯示菸酸與菸醯胺代謝路徑富集，NAD+ 生物合成前驅物（色胺酸、菸酸）減少，分解產物（菸醯胺、ADP-ribose）累積，且直接定量 NAD+ 含量較低。[[NAMPT]]、[[SIRT1]]、[[CD38]] 及 [[PARP1]] 表現上調（HSS CD8+ T 細胞內 [[NAMPT]] 下調），顯示 NAD+ 高消耗。

單細胞代謝評分及 bulk RNA-seq 證實該路徑在高衰老評分 [[Senescent CD8+ T Cells|CD8+ T 細胞]] 中顯著上調（NAMPT 降低，CD38/SIRT1/PARP1 升高）。這些細胞的浸潤評分與 UC 病人（GSE87466）NAD+ 代謝路徑評分正相關；空間轉錄體學（GSE189184）顯示 HSS^high/NAD^high「衰老微環境」由健康結腸的 5.6% 擴增至 UC 組織的 16.7%。

## 後果

以 [[FK866]]（NAMPT 抑制劑）、[[SRT1720]]（SIRT1 激動劑）或 NAMPT siRNA 降低細胞內 [[NAD+]]，足以誘導 CD8+ T 細胞衰老；而 [[NMN]] 補充大致可消除此效應。NAD+ 耗竭抑制 [[Oxidative Phosphorylation|氧化磷酸化]]、增加 [[Glycolysis|糖解]]、降低 ATP 及粒線體量、升高 [[Mitochondrial ROS|粒線體 ROS]]，並經 [[VDAC|VDAC1]] 寡聚化造成 [[mtDNA]] 洩漏。胞質 mtDNA 活化 [[cGAS-STING Pathway]]–[[IRF3]]，上調 [[p16]]/[[p21 CIP1|p21]] 及促發炎 [[SASP]]。

## 臨床相關性

基線 NAD+ 代謝及衰老 CD8+ T 細胞浸潤評分與內視鏡/Mayo 疾病活性相關，且可預測對 [[Infliximab]] 及 [[Vedolizumab]] 的無反應，將此軸定位為候選預後生物標誌及治療切入點。作者指出其背景依賴性：NAD+ 前驅物補充曾報告對腸上皮有保護作用，故提出以靶向而非全身性 NAD+ 調節為宜。

## Documents

- [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]：定義該重編程、將其空間定位至衰老微環境，並確立其為 CD8+ T 細胞衰老的原因。

## Connections

- [[NAD+]], [[NAD+ Salvage Pathway]] — 被耗竭的代謝物及其生物合成途徑
- [[NAMPT]], [[CD38]], [[SIRT1]], [[PARP1]] — 其失衡定義高消耗狀態的挽救/消耗酶
- [[Senescent CD8+ T Cells]], [[Ulcerative Colitis]] — 該重編程驅動的衰老細胞群及疾病
- [[FK866]], [[SRT1720]], [[NMN]] — 耗竭或恢復 NAD+，分別誘導/挽救衰老的藥理工具
- [[Mitochondrial Dysfunction]], [[mtDNA]], [[cGAS-STING Pathway]] — 下游粒線體至先天免疫的級聯
- [[Oxidative Phosphorylation]], [[Glycolysis]], [[Mitochondrial ROS]] — 伴隨 NAD+ 喪失的代謝及氧化還原變化
- [[Infliximab]], [[Vedolizumab]] — 其無反應由該特徵預測的生物製劑

## Linking Summary

- 新增連結：[[NAD+]], [[NAD+ Salvage Pathway]], [[NAMPT]], [[CD38]], [[SIRT1]], [[PARP1]], [[FK866]], [[SRT1720]], [[NMN]], [[Senescent CD8+ T Cells]], [[Ulcerative Colitis]], [[Oxidative Phosphorylation]], [[Glycolysis]], [[Mitochondrial Dysfunction]], [[Mitochondrial ROS]], [[mtDNA]], [[VDAC]], [[cGAS-STING Pathway]], [[IRF3]], [[p16]], [[p21 CIP1]], [[SASP]], [[Infliximab]], [[Vedolizumab]]
- 建議新建的實體筆記：[[Kynurenine Pathway]], [[Preiss-Handler Pathway]]
- 建議強化的強連結：[[NAD+ Metabolic Reprogramming]] ↔ [[Senescent CD8+ T Cells]], [[NAD+ Metabolic Reprogramming]] ↔ [[cGAS-STING Pathway]], [[NAD+ Metabolic Reprogramming]] ↔ [[NAD+]]
