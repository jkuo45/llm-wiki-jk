---
title: PEGylation
description: 將聚乙二醇鏈共價結合至蛋白質、胜肽或脂質表面，用以延長循環半衰期、降低免疫原性，並改善治療劑的溶解度與藥物動力學性質。
protected: false
created: 2026-10-22
updated: 2026-11-04
tags: [process, protein-engineering, drug-delivery]
url: #
source: #
aliases: [PEGylation, Pegylation, polyethylene glycol conjugation]
---

# PEGylation

**PEGylation** 是將一條或多條聚乙二醇鏈共價偶聯至生物製劑（通常為蛋白質、胜肽或脂質），以改變其體內的物理化學行為。它是臨床上最廣泛使用的半衰期延長策略，應用於 peginterferon、pegfilgrastim、pegaptanib、pegaspargase、cerdulatinib，以及近來用於核酸藥物的 PEGylated lipid nanoparticle。

## 概述

聚乙二醇鏈是一種合成的、具生物相容性且大致惰性的聚合物，由重複的 ethylene oxide 單元組成。將其接合至藥物可同時達成數項效果：

- **半衰期延長。**PEG 增加流體力學半徑、降低腎絲球過濾，並降低單核吞噬細胞系統的清除率。效果大致與接合的 PEG 總質量成正比，因此較高程度的 PEGylation 通常意味較長的暴露時間。
- **降低免疫原性。**PEG 遮蔽蛋白質表位，降低未修飾蛋白質所受的抗體辨識與補體活化——這是 asparaginase 與 interferon 等酵素的重大進展。
- **改善溶解度與穩定性。**PEG 增加親水性、降低聚集、遮蔽蛋白質免受蛋白水解與快速肝臟攝取，並可降低修飾藥物的免疫原性。
- **改變藥物動力學與藥效學。**PEGylation 通常降低尖峰濃度、延長暴露時間、改變組織分布，並降低小分子蛋白質與胜肽的腎清除率。

## 機制

- **化學。**接合通常在定義的位置進行，使產物在化學上均一。常見策略包括以活化的 succinimidyl ester 對一級胺（例如賴胺酸殘基上）反應、接合至 N 端、以 maleimide 試劑偶聯至半胱胺酸硫醇基，以及接合至羥基。定點與隨機偶聯皆存在；對蛋白質賴胺酸的隨機偶聯可得到定義明確的平均取代度，但會產生位置異構物的混合物。
- **連接子化學（linker chemistry）。**反應基團與連接子的選擇控制偶合物如何釋放。酯基連接子可水解；succinimidyl carbamate 與「第二代」連接子則穩定。連接子的選擇決定活性藥物是否於作用部位釋放。
- **脂質體與脂質 PEGylation。**在[[Liposomes]]與[[Lipid Nanoparticles]]中，DSPE-PEG 或 DSPC-PEG 脂質嵌入顆粒表面；其 PEG 鏈形成立體位阻的「刷狀」結構，防止聚集、蛋白質吸附與快速調理素化（opsonisation），並延長循環時間。
- **立體位阻穩定化。**水合的 PEG 冠層賦予膠體穩定性並降低網狀內皮系統的清除率，但過大的 PEG 可能降低細胞攝取——在循環時間與標的組織穿透之間存在取捨。

> [!warning] PEG 本身並非惰性
> PEG 鏈在化學上穩定，但並非生物學上的沉默。累積的高分子量 PEG 會造成「pegASUS」——一種延遲性、累積性的免疫複合體媒介過敏反應——而重複給藥可產生抗 PEG 抗體，使後續給藥時 PEGylated 藥物被快速清除。

## 臨床意義

- **補體活化與過敏反應。**PEGylated 產品已被發現與血清補體活化（造成輸注相關反應）以及重複暴露後的延遲性過敏（anaphylaxis）相關。這是此平台主要的安全疑慮，也促使 asparaginase 的 PEGylated 版本（pegaspargase）的開發，以及再次給藥前的過敏檢測。
- **藥物清除率降低與標的媒介性漂移。**由於 PEGylated 藥物長效，劑量探索必須計入累積效應；例如 pegfilgrastim 的有效暴露時間遠長於 filgrastim。
- **核酸與疫苗遞送。**PEG-脂質為 mRNA 疫苗與 siRNA 奈米顆粒製劑的標準成分，用以調節生物分布並降低對脂質成分的先天免疫活化。
- **製造與法規負擔。**PEG 必須充分特性化（包括高分子量與交聯物種），且抗 PEG 抗體檢測日益被要求；法規指引在這些要點上已趨嚴格。
- **治療替代方案。**由於 PEG 本身有問題——抗 PEG 免疫、腎臟蓄積與腫瘤穿透降低——polysarcosine、XTEN 與白蛋白結合域等替代方案正處於臨床開發階段。

## Documents

- （尚無文件註記）

## Connections

- [[Liposomes]] / [[Lipid Nanoparticles]] / [[Nanoparticles]] / [[Liposome Encapsulation]] — PEG-脂質主導的製劑脈絡
- [[Proteins]] / [[Antibody]] — 最常被 PEGylated 的生物分子類別
- [[Complement System]] — 某些 PEGylated 產品所活化的途徑
- [[Anaphylaxis]] — 抗 PEG 免疫的過敏終點
- [[Bioavailability]] / [[Drug Discovery]] — 藥物動力學與可開發性（developability）脈絡
- [[Exosomes]] — PEG-脂質偶合的內源性脂質化顆粒類似物
- [[Lipid Rafts]] / [[Cell Membranes]] — PEG-脂質錨點的膜交互作用
- [[Reactive Oxygen Species]] — 涉及高藥物負荷下 PEG 鏈氧化降解的報告

## Linking Summary

- `src/notes/_link/` 中的新實體筆記（跨藥理學與遞送筆記使用的共享生物偶聯製程）。
- 新增連結：[[Liposomes]]、[[Lipid Nanoparticles]]、[[Nanoparticles]]、[[Liposome Encapsulation]]、[[Proteins]]、[[Antibody]]、[[Complement System]]、[[Anaphylaxis]]、[[Bioavailability]]、[[Drug Discovery]]、[[Exosomes]]、[[Lipid Rafts]]、[[Cell Membranes]]、[[Reactive Oxygen Species]]。
- 建議新增的實體筆記：[[DSPE-PEG]]、[[Anti-PEG Antibodies]]、[[Pegylated Asparaginase]]、[[Pegfilgrastim]]、[[PegASUS]]、[[Polyethylene Glycol]]。
- 值得強化的連結：[[PEGylation]] ↔ [[Liposomes]]、[[PEGylation]] ↔ [[Complement System]]、[[PEGylation]] ↔ [[Anaphylaxis]]。
