---
title: Itch
description: HECT 家族的 E3 泛素連接酶（AIP4），以 JNK1 依賴性方式對 cFLIP_L 進行多聚泛素化，將 TNF 訊號、DNA 損傷檢查點與化療抵抗性連結至 caspase-8 變阻器的周轉。
protected: false
created: 2026-11-19
updated: 2026-11-19
tags:
  - enzyme
  - ubiquitin
  - cell-death
  - apoptosis
url: #
source: #
aliases:
  - AIP4
  - E3 ubiquitin-protein ligase Itch
  - ITCH
  - NEDD4-like Itch
---

# Itch

**Itch**（E3 泛素蛋白連接酶，別名 *AIP4*）是 HECT 結構域的 E3 泛素連接酶，負責對[[c-FLIP|cFLIP_L]]（caspase-8 變阻器的長異構體）進行多聚泛素化。由於 Itch 介導的降解會降低 cFLIP_L 的含量，Itch 雖是上游因子，卻間接決定了 TNF-α 或 DNA 損傷刺激最終走向[[Apoptosis|細胞凋亡]]、[[Necroptosis|壞死性凋亡]]或存活。

## 結構與結構域

N 端 C2 結構域（膜／細胞質定位）、兩個 WW 結構域（底物辨識），以及 C 端 HECT 催化結構域。作為 HECT 連接酶，Itch 先與泛素形成共價硫酯中間體，再將泛素轉移至底物離胺酸——此為 HECT 家族特有的兩步轉硫酸化化學（見[[E3 Ubiquitin Ligase]]）。

## 作用機制與路徑

- **cFLIP_L 降解。** 在 TNF-α 依賴性細胞死亡過程中，cFLIP_L 的降解需要 Itch，且此過程為[[JNK|JNK1]]依賴性（Chang 等）。其反向支臂為：cFLIP_L 結合[[MKK7]]並抑制 JNK 訊號，因此 cFLIP_L 的含量與 JNK 活性互相拮抗。
- **DNA 損傷路徑。** [[Cisplatin|順鉑]]可誘導形成 Itch–[[p53]]–cFLIP 複合體並隨後造成 cFLIP 多聚泛素化。[[ATM]]透過 Ser161 磷酸化活化 Itch，促進 cFLIP_L 降解，將 DNA 損傷檢查點連結至死亡受體敏感性軸。
- **Itch 本身受調控。** 在多形性膠質母細胞瘤中，Itch 以 Akt 依賴性方式被泛素化；PTEN 耗竭或 USP8（泛素特異性蛋白酶 8）過量表現會阻斷 Itch 的泛素化，而 TNF-α 介導的 USP2 下調會穩定已多聚泛素化的 Itch——在肝細胞中此現象穩定 cFLIP_L 與 cFLIP_S 兩者。
- **可及性調控。** TG interacting factor（TGIF）藉由提高 cFLIP_L 對 Itch 的可及性來促進 TNF-α 依賴性凋亡。抑肽素 B（cystatin B）減少 Itch 的含量並在黑色素瘤細胞中提高 cFLIP_L。
- **病原體的利用。** *Trypanosoma cruzi* 感染會阻斷 HeLa 細胞中的 cFLIP_L–Itch 交互作用，作者將此解釋為阻止宿主細胞凋亡的寄生蟲生存策略。

> [!info]
> 來源：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> Itch 是 cFLIP_L 最具特徵的單一 E3，但明確**不是**唯一者：[[c-FLIP|cFLIP]]會受到一組依情境而定的連接酶多聚泛素化——Itch（HECT，cFLIP_L）、Cbl（RING，cFLIP_S）、Cbl-b（RING，cFLIP_L）、Mind bomb 1（RING，cFLIP_L）、TRAF7（RING，cFLIP_L）與[[STUB1|CHIP]]（U-box，cFLIP_L）——底物選擇隨異構體、細胞類型與訊號而變化。Gelsolin 被報導為 Itch–p53–cFLIP 複合體的額外成分，其表現賦予婦科癌症對順鉑的化療抵抗性。

## 生理功能

Itch 位於 TNF-α 訊號、DNA 損傷訊號與細胞骨架周轉三者的交會處：它把壓力活化的[[JNK]]軸與[[p53]]檢查點連結至決定死亡受體刺激三種典型命運之蛋白的穩定性。

## 病理與臨床關聯

- **化療抵抗性。** Itch 介導的 cFLIP_L 降解使腫瘤細胞對死亡受體殺傷更為敏感；Itch–p53–cFLIP 模組及其 gelsolin 成分調控婦科癌症對順鉑的反應。
- **發炎。** TNF-α 依賴性的 cFLIP_L 降解將 Itch 活性與發炎訊號輸出連結，因為 cFLIP 流失會釋放 JNK 並在腫瘤細胞中提高[[Reactive Oxygen Species|ROS]]。
- **多形性膠質母細胞瘤。** Akt 依賴性的 Itch 泛素化與隨之而來的 cFLIP 周轉在此腫瘤中有所改變。

## 文獻

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Itch 作為 cFLIP_L 的 JNK1 依賴性 E3；順鉑後的 Itch–p53–cFLIP 複合體；ATM Ser161 磷酸化；USP8/PTEN/USP2 對 Itch 穩定性的控制；TGIF 與 cystatin B 的調節；*T. cruzi* 對 cFLIP_L–Itch 交互作用的阻斷。

## 關聯

- [[c-FLIP]] — 底物；Itch 介導的 cFLIP_L 多聚泛素化降低凋亡／壞死性凋亡變阻器
- [[JNK]] — JNK1 活化 Itch，而 cFLIP_L 經 MKK7 抑制 JNK（互相拮抗的環）
- [[MKK7]] — 受 cFLIP_L 結合的 MAP2K；位於賦予 Itch 活性的 JNK 支臂之上游
- [[p53]] — 順鉑誘導之 Itch–p53–cFLIP 複合體的成分
- [[ATM]] — 於 DNA 損傷後磷酸化 Itch 的 Ser161，活化 cFLIP_L 降解
- [[Cisplatin]] — 其 Itch–p53–cFLIP 路徑使細胞對死亡受體凋亡更為敏感的化療藥物
- [[Proteasome]] — 執行 Itch 指引的 cFLIP_L 降解
- [[Ubiquitin]] — 標記 cFLIP 待毀滅的轉移標記
- [[Gelsolin]] — Itch–p53–cFLIP 複合體的報導成分，與化療抵抗性相關
- [[E3 Ubiquitin Ligase]] — 說明 HECT/RING/RBR 機制與泛素密碼的家族層級筆記

## 連結摘要

- 新增連結：[[c-FLIP]]、[[JNK]]、[[MKK7]]、[[p53]]、[[ATM]]、[[Cisplatin]]、[[Proteasome]]、[[Ubiquitin]]、[[Gelsolin]]、[[E3 Ubiquitin Ligase]]、[[Reactive Oxygen Species|ROS]]、[[Apoptosis]]、[[Necroptosis]]、[[STUB1|CHIP]]
- 建議建立的新實體筆記：TRAF7、Mind bomb 1、Cbl-b
- 待強化的強連結：[[Itch]] ↔ [[c-FLIP]]、[[Itch]] ↔ [[JNK]]、[[Itch]] ↔ [[p53]]
