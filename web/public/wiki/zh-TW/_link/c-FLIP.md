---
title: c-FLIP
description: FLICE 樣抑制蛋白（c-FLIP/CFLAR）——一種酵素活性缺失的 caspase-8 同源物，其異構體藉由調節死亡受體與發炎體複合體內的 caspase-8 活性，設定細胞凋亡／壞死性凋亡／焦亡的開關。
protected: false
created: 2026-08-29
updated: 2026-11-19
tags:
  - protein
  - cell-death
  - apoptosis
  - necroptosis
url: #
source: #
aliases:
  - FLICE-like inhibitory protein
  - CFLAR
  - CASP8 and FADD-like apoptosis regulator
  - c-FLIPL
  - c-FLIPS
---

# c-FLIP

**c-FLIP**（FLICE 樣抑制蛋白，由 *CFLAR* 編碼）是[[Caspase-8]]的酵素活性缺失同源物，可與之形成異二聚體，因而決定死亡受體刺激最終走向[[Apoptosis|細胞凋亡]]、[[Necroptosis|壞死性凋亡]]或細胞存活。它是 caspase-8 分子開關上的調節旋鈕。

## 基因與異構體

> [!info]
> 來源：[[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP]]
> *CFLAR* 位於人類第 2 號染色體 2q33-34，跨 14 個外顯子，與 *CASP8* 及 *CASP10* 相鄰——這三個基因源自古老的基因重複。選擇性剪接產生 cFLIP_L（55 kDa，含兩個 DED 與一個催化功能缺失的類 caspase 結構域）、cFLIP_S（27 kDa，僅含 DED）與 cFLIP_R（25 kDa）。小鼠缺乏 cFLIP_S（無對應外顯子）；人類的 cFLIP_S/cFLIP_R 選擇由 SNP rs10190751 決定。Caspase-8 切割產生 p43-FLIP（Asp376；小鼠為 Asp377）與 p22-FLIP（Asp196，僅人類）。

- 異構體表現具細胞類型限制：cFLIP_R 見於 Raji 與 SKW6.4 細胞株及人類初代 T 細胞，而 cFLIP_S 則是 rs10190751 帶原者的剪接產物。
- 所有異構體皆為短壽命蛋白；參與的連接酶具異構體特異性（Itch→cFLIP_L，Cbl→cFLIP_S，Cbl-b/Mind bomb 1/TRAF7/CHIP→cFLIP_L），因此決定命運的參數是 FLIP_L:FLIP_S 比例，而非 cFLIP 總量。

## 機制

- **c-FLIP_L（長異構體）**：caspase-8/c-FLIP_L 異二聚體藉由降低 caspase-8 催化活性，同時抑制細胞凋亡與壞死性凋亡——但仍保留*足以*切割並去活化 **[[RIPK1]] 與 [[RIPK3]]** 的殘餘活性，此二者為壞死性凋亡的關鍵受質。淨效應為存活加上壞死性凋亡阻斷。
- **c-FLIP_S（短異構體）**：與短異構體形成的異二聚體更完全地抑制 caspase-8，同時*增強*複合體 II（ripoptosome）的組裝——抑制細胞凋亡並**促進壞死性凋亡**。
- **開關節點**：以藥理或病毒方式抑制 caspase-8（z-VAD-FMK、病毒 c-FLIP 模擬物）會使 TNF 訊號轉向壞死性凋亡；在基礎 caspase-8 受抑制的狀態下高表現[[RIPK3]]亦產生相同結果。
- **焦亡分支**：caspase-8/c-FLIP 複合體亦參與[[NLRP3]] [[Inflammasome|發炎體]]活化，且帶有 c-FLIP 的複合體可促進 caspase-8 介導的[[Gasdermin D|GSDMD]]切割——因此 c-FLIP 涉及 TNFR1 的全部三種命運。

> [!info]
> 該開關的遺傳學證據：caspase-8 或 FADD 缺陷小鼠的胚胎致死性可被 RIPK3/MLKL/RIPK1 敲除完全挽救——此一致死表型源於 caspase-8/c-FLIP 剎車移除後壞死性凋亡失去控制。

## 變阻器邏輯（定量調節）

完整說明見[[Caspase-8-c-FLIP Rheostat]]；要點如下：

- **異二聚體能量學偏向抑制。** [[Caspase-8]]/FLIP_L 異二聚體（PDB 3H13）的形成活化能低於
  [[Caspase-8]]同二聚體，因此在受體佔用率低時，複合體以異二聚體為主，[[Apoptosis|細胞凋亡]]被阻斷；
  在高佔用率下，稀少的 FLIP_L 被滴定耗盡，剩餘的異二聚體反而*加速*同二聚體活化（Micheau 2002；Smyth 2020）。
- **短異構體終止、長異構體栓繫。** FLIP_S/R 的納入在[[DISC]]封閉 DED 鏈延伸；FLIP_L 促進短鏈寡聚化，
  同時藉由其不可切割的假性 caspase 結構域使複合體維持膜結合（無 Asp210/216/223 對應位點，無二聚體內切割）。
- **周轉率重設刻度。** 快速的[[Proteasome|蛋白酶體]]介導降解（Itch、Cbl/Cbl-b、Mind bomb 1、
  TRAF7、CHIP）加上 PKC/ROS 磷酸化與 S-亞硝醯化開關，可在數分鐘的時間尺度上改變 FLIP_L:procaspase-8
  比例——此即每個數學模型（Bentele、Lavrik、Neumann、Kallenberger）所指認的命運決定參數。
- **Ripoptosome 推論。** 在缺乏 cIAP 時，caspase 活性本身成為變阻器：FLIP_L
  異二聚體切割[[RIPK1]]並使 ripoptosome 解組（存活），FLIP_S 異二聚體則無法（→ 經由[[RIPK3]]/[[MLKL]]走向[[Necroptosis|壞死性凋亡]]）——Feoktistova 2011。

## 文獻

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - c-FLIP 異構體作為設定細胞凋亡／壞死性凋亡平衡的 caspase-8 變阻器，其中 c-FLIP_S 偏向壞死性凋亡，c-FLIP_L 則僅保留足以切割 RIPK1/RIPK3 的 caspase-8 活性。

- [[_document_ - The Long Form of FLIP Is an Activator of Caspase-8 at the Fas DISC|Micheau et al. 2002]]
  - 變阻器的生化基礎：FLIP_L 在 Fas DISC 上與 procaspase-8 形成異二聚體，驅動二聚體間切割，阻斷二聚體內加工。

- [[_document_ - cIAPs Block Ripoptosome Formation Differentially Regulated by cFLIP Isoforms|Feoktistova et al. 2011]]
  - 變阻器原始論文：2 MDa 的 ripoptosome；由 cFLIP 異構體控制的 caspase 活性決定細胞凋亡或壞死性凋亡；FLIP_L 抑制、FLIP_S 促進組裝。

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - 系統性回顧：DISC 化學計量、泛素–蛋白酶體調節、動力學模型，以及該開關的條件性基因敲除生理學。

## 關聯

- [[Caspase-8-c-FLIP Rheostat]] — 定量開關的專屬樞紐筆記
- [[FADD]] — 促成 c-FLIP 所調控 DED 鏈成核的銜接蛋白
- [[DISC]] — 讀出異構體比例的膜平台
- [[Caspase-10]] — FLIP_L 異二聚體的第二個旁系同源夥伴（Beclin-1/BCLAF1 軸）

- [[Caspase-8]] — 異二聚體夥伴；c-FLIP 是其活性缺失的旁系同源物與變阻器
- [[RIPK1]] / [[RIPK3]] — 其切割由殘餘 caspase-8/c-FLIP_L 活性執行，藉此阻斷壞死性凋亡
- [[Necroptosis]] — 當 c-FLIP（或 caspase-8）活性降至切割閾值以下時被釋放
- [[Apoptosis]] — 受兩種異構體抑制，但經由不同的複合體動態
- [[NLRP3]] — caspase-8/c-FLIP 複合體參與發炎體活化（焦亡分支）
- [[TNFα]] — c-FLIP 變阻器運作的死亡配體情境
- [[Sirtuin-Caspase Crosstalk]] — c-FLIP 在 caspase 開關網絡上增加一層轉譯後變阻器，與 caspase-1 切割[[Parkin]]、caspase-3/-7 去活化[[Gasdermin D|GSDMD]]並列

## 連結摘要

- 新增連結：[[Caspase-8]]、[[RIPK1]]、[[RIPK3]]、[[Necroptosis]]、[[Apoptosis]]、[[NLRP3]]、[[TNFα]]、[[Inflammasome]]、[[Sirtuin-Caspase Crosstalk]]
- 變阻器更新（03_Sep_2026）：[[Caspase-8-c-FLIP Rheostat]]、[[FADD]]、[[DISC]]、[[Caspase-10]]、[[Proteasome]]、[[MLKL]]；文獻 Micheau 2002、Feoktistova 2011、Tsuchiya 2015
- 建議建立的新實體筆記：（已於 03_Sep_2026 完成：[[Ripoptosome]]）
- 待強化的強連結：[[c-FLIP]] ↔ [[Caspase-8]]、[[c-FLIP]] ↔ [[RIPK3]]
