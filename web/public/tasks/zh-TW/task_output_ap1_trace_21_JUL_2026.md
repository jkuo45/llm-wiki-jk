---
title: '圖譜追蹤：AP-1 作為 Src 知識圖譜中的跨社群橋樑'
description: '關於 AP-1 如何經由 src/ 知識圖譜（2,711 個檔案、63,384 條邊、413 個社群）橋接 Autophagic Cell Death、Senescence、NRF2 與 Neuroinflammation 的 graphify 追蹤。建構於 21_JUL_2026，使用 --mode deep --directed。'
tags: [graph-trace, ap-1, senescence, sasp, nrf2, autophagy, neuroinflammation, transcription-factor, aging]
created: 2026-07-21
updated: 2026-07-22
---
# 圖譜追蹤：AP-1 作為跨社群橋樑

**追蹤的問題：** 為什麼 AP-1 會橋接 Autophagic Cell Death、Senescence、NRF2 與 Neuroinflammation？

**方法：** 在 `graphify-out/graph.json`（26,473 個節點、63,384 條邊、413 個社群）上執行 `graphify query` BFS 遍歷 + `graphify explain` + `graphify path`。

---

## AP-1 節點檔案

- **ID：** `notes_link_ap_1`
- **來源：** `notes/_link/AP-1.md`
- **類型：** concept
- **社群：** 45
- **度數：** 66 個連接

## 直接連接（擷取自 — wiki 連結）

| 鄰居                                                                                        | 關係                       | 註記                                           |
| ----------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------- |
| [[SASP\|Senescence-Associated Secretory Phenotype]]                                             | references (bidirectional) | AP-1 驅動 SASP 增強子                      |
| [[NF-κB]]                                                                                       | references (bidirectional) | 發炎型 SASP 基因的共調節因子         |
| [[BRD4]]                                                                                        | references                 | 在 SASP 超級增強子上共結合 H3K27ac      |
| [[cGAS-STING Pathway]]                                                                          | references                 | 通往 SASP 的上游 DNA 感知路徑         |
| [[IL-6]]                                                                                        | references                 | 核心 SASP 細胞激素，AP-1 標的         |
| [[IL-8]]                                                                                        | references                 | 核心 SASP 趨化因子，AP-1 標的          |
| [[TNFα]]                                                                                        | references                 | 活化 AP-1 的細胞激素                       |
| [[Catalase]]                                                                                    | references                 | 抗氧化酶，AP-1 標的                        |
| [[Oxidative Stress]]                                                                            | references (bidirectional) | ROS 經由 JNK/p38 活化 AP-1              |
| [[RAGE]]                                                                                        | references                 | AGE-RAGE → MAPK → AP-1 軸                  |
| [[Senescent Cells\|Cellular Senescence]]                                                        | references                 | AP-1 是衰老程式的先驅因子           |
| [[Replicative Senescence]]                                                                      | references                 | AP-1 開啟 RS SASP 增強子                 |
| [[Oncogene-Induced Senescence]]                                                                 | references                 | AP-1 在 OIS 中的先驅因子                  |
| [[Senescence-Associated Secretory Phenotype\|The senescence-associated secretory phenotype...]] | references                 | 文件連結                                   |
| [[_document_ - The role of the dynamic epigenetic landscape in senescence...]]                  | references                 | 文件連結                                   |

完整鄰居清單（共 66 個）：見 `graphify explain "AP-1"`。

## 社群跨越

AP-1（社群 45）橋接入：

1. **Senescence & Tumor Microenvironment（C10）** — 經由 SASP、IL-6、IL-8、TGFβ
2. **NRF2 & Antioxidant Response（C26）** — 經由 Catalase、Oxidative Stress、Keap1/NRF2 競爭
3. **Autophagic Cell Death（C7/C8）** — 經由 CXCL5 → Inflammaging → CR → Autophagic Cell Death
4. **Neurodegeneration & Neuroinflammation（C5）** — 經由 cGAS-STING、IL-6、TNFα、NF-κB

## 路徑追蹤

### AP-1 → NRF2（3 跳）
```
AP-1 ← SASP → Resveratrol → NRF2
```
AP-1 調節 SASP；SASP 文件將 Resveratrol 標示為調節因子；Resveratrol 經由 Keap1 修飾活化 NRF2。這形成一個調節三角形，其中 AP-1 驅動的發炎與 NRF2 驅動的抗氧化防禦競爭共享的共活化因子（CBP/p300）。

### AP-1 → Autophagic Cell Death（4 跳）
```
AP-1 ← CXCL5 → Inflammaging ← Caloric Restriction → Autophagic Cell Death
```
AP-1 轉錄活化 CXCL5（一種 SASP 趨化因子）；CXCL5 餵入 inflammaging；Caloric Restriction 抑制 inflammaging 並活化自噬（經由 mTOR/AMPK），將平衡移向自噬性細胞死亡。

### AP-1 → Neuroinflammation（直接 + 2 跳）
```
AP-1 → cGAS-STING Pathway (直接邊)
AP-1 → IL-6 → Neuroinflammation
AP-1 → TNFα → Neuroinflammation
```
AP-1 直接連接到 cGAS-STING（在老化微膠細胞中活化的胞質 DNA 感知路徑），以及發炎細胞激素 IL-6 與 TNFα，兩者皆為神經發炎的主要驅動因子。

## 機制摘要

AP-1 作為一個位於四個老化特徵交會處的 **壓力反應型先驅轉錄因子**：

1. **Senescence：** 作為先驅因子，在 SASP 超級增強子上開啟緊密染色質（與 BRD4 和 C/EBPα 共結合）。其活性通常受 HDAC4 緩衝；進入衰老時，HDAC4 被降解，釋放 AP-1 驅動的 SASP 程式。

2. **Antioxidant/NRF2：** AP-1 的標的 genes 包含抗氧化酶（Catalase）。NRF2 與 AP-1 競爭有限的轉錄共活化因子（CBP/p300），形成一個對 redox 敏感的調節開關。

3. **Autophagy：** AP-1 驅動的 SASP 細胞激素（CXCL5、IL-6）促進 inflammaging，而 CR 予以抑制。CR 對自噬的活化（經由 AMPK/mTOR）將 AP-1 訊號連接到自噬性細胞命運決策。

4. **Neuroinflammation：** AP-1 下游標的（TNFα、IL-6）及其與 cGAS-STING 的連接，使它在神經退化疾病的微膠細胞發炎反應中居於中心。

## 值得探索的連結

- [[AP-1]] — 實體筆記
- [[SASP|Senescence-Associated Secretory Phenotype]]
- [[NF-κB]] — AP-1 在 SASP 中的共調節因子
- [[BRD4]] — 在 AP-1 開啟的增強子上共結合
- [[HDAC4]] — 在年輕細胞中約束 AP-1 的緩衝因子
- [[cGAS-STING Pathway]] — 餵入 AP-1 的上游感測器
- [[NRF2]] — 抗調節性的抗氧化轉錄因子
- [[Caloric Restriction]] — 經由 AP-1 軸抑制 inflammaging
