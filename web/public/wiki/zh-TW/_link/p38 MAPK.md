---
title: p38 MAPK
description: p38 促分裂原活化蛋白激酶（p38 MAPK）是一種訊號分子，依細胞情境在 S211（抑制性）或 S401（活化性）位點磷酸化 TFEB 以調控其功能。
protected: false
created: 2024-01-01
updated: 2026-11-01
tags: [protein]
url: #
source: #
aliases: [p38 促分裂原活化蛋白激酶, p38 MAP kinase, p38]
---

# p38 MAPK

**p38 MAPK** 是壓力反應型促分裂原活化蛋白激酶，參與細胞分化、[[Apoptosis|凋亡]]與[[Autophagy|自噬]]，並依細胞情境決定其下游效應。

## 機制與途徑

- **TFEB 磷酸化**：p38 MAPK 在 **S211**（抑制性，造成細胞質滯留）或 **S401**（活化性）磷酸化 [[TFEB]]，依情境調控溶酶體生合成與自噬基因表現。
- **BAX 磷酸化**：在壓力下，p38 MAPK 可磷酸化 [[BAX]] 的 **Thr167**——與 [[ERK2]] 針對的同一殘基。ERK 的磷酸化促進 [[Pin1]] 結合而使 BAX 不活化；p38 的磷酸化則促進 BAX 活化與凋亡。Thr167 因此是分子層級的「巧合偵測器」，由細胞情境決定結果。
- **促進凋亡**：p38 MAPK 亦磷酸化 [[Bim]] 與 Bax，增強其促凋亡活性。
- **SASP 上游**：p38 MAPK 位於表觀遺傳 SASP 程式的上游，誘導 [[KDM4]]（SASP 基因座 H3K9 去甲基化），並與 [[AP-1]]、[[BRD4]] 協同驅動 [[NF-κB]] 調控的 [[SASP]] 轉錄；同時與 [[cGAS-STING Pathway]] 訊號交會，並拮抗 [[EZH2]] 對 SASP 的抑制。

## 紅血球：促 eryptosis

在紅血球中 p38 MAPK 具**促 [[Eryptosis|eryptosis]]** 作用。高滲透壓休克會使其磷酸化，而 p38 抑制劑 SB203580 與 p38 Inh III 可減弱隨之而來的細胞質 Ca2+ 上升、磷脂醯絲胺酸外露與細胞皺縮。香菸煙霧萃取物走同一軸線：p38 磷酸化啟動 [[Fas]] 寡聚化與 [[FADD]]／DISC 組裝，進而活化 [[Caspase-8]] 與 [[Caspase-3]]，其上游為中性鞘磷脂酶產生 [[Ceramide|神經醯胺]]——這是一條不依賴 Ca2+ 的磷脂醯絲胺酸外露路徑。吸菸者的紅血球可見升高的 p-p38 與已組裝的 Fas-FADD 複合體。

> [!warning] 抑制劑注意事項
> 吡啶基咪唑類 p38 抑制劑 SB203580 與 SB202190 在體外亦抑制 [[CK1]]，因此僅憑此類化合物推論的「p38 依賴性」可能受 CK1 抑制混淆——而 [[CK1α]] 本身即具促 eryptosis 作用。

## Documents

- [[_document_ - From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery|TFEB 調控機制與治療意涵]] — TFEB 的 S211 亦可由 p38 MAPK 磷酸化。
- [[_document_ - Kinase|Kinase]] — S211 磷酸化（p38 MAPK）造成 TFEB 細胞質滯留（PMID 34930303）。
- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression|衰老中動態表觀遺傳地景與 SASP 表現]] — 將 p38 MAPK 置於表觀遺傳 SASP 程式的上游。

## Connections

- [[Apoptosis]] — 清除受損或多餘細胞的程式性死亡；p38 MAPK 促進之
- [[Bim]]／[[Bax]] — p38 MAPK 的促凋亡受質
- [[BAX]] — Thr167 磷酸化位點，與 ERK2 競爭
- [[TFEB]] — 溶酶體生合成與自噬的主轉錄因子
- [[SASP]] — p38 MAPK 經 NF-κB 與表觀遺傳程式驅動 SASP
- [[KDM4]]／[[AP-1]]／[[BRD4]] — SASP 基因座的共作用因子
- [[NF-κB]] — p38 MAPK 下游的 SASP 轉錄因子
- [[Eryptosis]] — 紅血球中的促死亡激酶，啟動 Fas/DISC 組裝
- [[FADD]] — 在 p38 磷酸化下游被招募進入 DISC
- [[Caspase-8]]／[[Caspase-3]] — 由 p38 啟動的 DISC 所活化
- [[CK1]] — 受吡啶基咪唑類 p38 抑制劑交叉抑制

## Linking Summary

- 2026-10-23：新增紅血球／eryptosis 段落與別名；本 zh-TW 版於 2026-11-01 建立。
- 待補連結：[[MAPK Signaling]]、[[KDM4]] 與 SASP 表觀遺傳程式的雙向說明。
