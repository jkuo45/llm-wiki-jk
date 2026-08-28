---
title: '圖譜追蹤：NAD+ 至 BNIP3 — 代謝訊號傳遞至粒線體自噬'
description: 'graphify 最短路徑追蹤，展示 NAD+ 生物合成如何透過自噬與 HIF1A 在 src/ 知識圖譜（2,733 個檔案、62,276 條邊、355 個社群）中連接至 BNIP3/BNIP3L。'
tags: [graph-trace, nad, bnip3, mitophagy, autophagy, hif1a, hypoxia, mitochondria, aging]
created: 2026-07-21
updated: 2026-07-22
---

# 圖譜追蹤：NAD+ 至 BNIP3 — 代謝訊號傳遞至粒線體自噬

**追蹤的問題：** [[NAD+]] 在知識圖譜中如何連接至 [[BNIP3]]/[[BNIP3L]]？

**方法：** 在 `graphify-out/graph.json`（26,333 個節點、62,276 條邊、355 個社群）上執行 `nx.shortest_path` BFS，於增量更新加入 28 個新的 [[Mitophagy|粒線體自噬]] 相關實體筆記（[[BNIP3]]、[[BNIP3L]]、[[PINK1]]、[[Parkin]]、[[OPTN]]、[[FUNDC1]] 等）之後。

---

## 路徑摘要

**最短路徑：[[NAD+ Biosynthesis]] → [[Autophagy]] → [[HIF1A]] → [[BNIP3L]]**（3 跳、4 節點）

**通往正典 [[BNIP3]]：** [[NAD+ Biosynthesis]] → [[Autophagy]] → [[Ubiquitination]] → [[OPTN]] → [[Alzheimer's Disease]] → [[BNIP3]]（5 跳）

---

## 節點檔案

| 節點 | ID | 社群 | 度 | 來源 |
|---|---|---|---|---|
| [[NAD+ Biosynthesis]] | `notes_link_nad_biosynthesis` | 56（NAD 代謝） | 37 | `notes/_link/NAD+ Biosynthesis.md` |
| [[Autophagy]] | `autophagy` | 32（自噬） | 347 | `notes/_link/Autophagy.md`（concept 節點） |
| [[HIF1A]] | `notes_link_hif1a` | 52（缺氧與粒線體自噬） | 15 | `notes/_link/HIF1A.md` |
| [[BNIP3L]] | `bnip3l` | 52（缺氧與粒線體自噬） | 2 | `notes/_link/BNIP3L.md` |
| [[BNIP3]] | `src_notes__link_bnip3_bnip3` | 163（粒線體自噬與神經退化） | 8 | `notes/_link/BNIP3.md` |

---

## 邊詳情

### 邊 1：[[NAD+ Biosynthesis]] → [[Autophagy]]
- **關係：** `references`（EXTRACTED，信心度：1.0）
- **來源：** `notes/_link/NAD+ Biosynthesis.md`
- **機制：** [[NAD+]] 活化 [[SIRT1]]，使其去乙醯化並活化核心自噬機器（[[Atg5]]、[[Atg7]]、[[LC3]]）與轉錄因子（[[FOXO]]、[[TFEB]]）。NAD+ 耗竭抑制自噬；補充 NAD+ 先驅物（[[NMN]]、[[Nicotinamide Riboside|NR]]）可恢復之。

### 邊 2（共享鄰居）：[[NAD+ Biosynthesis]] ↔ [[HIF1A]]
- 兩個節點共享兩個共同鄰居：**[[Autophagy]]** 與 **[[Mitohormesis]]**
- NAD+ → [[Mitohormesis]]：NAD+ 依賴的 [[Sirtuins|sirtuin]] 介導粒線體壓力反應
- [[HIF1A]] → [[Mitohormesis]]：[[Hypoxia|缺氧]]反應是經典的 [[Hormesis|激效性]] 壓力路徑
- 共享的 [[Autophagy]] 連接意味著兩個訊號都收斂於自噬機器

### 邊 3：[[HIF1A]] → [[Autophagy]]
- **關係：** `references`（EXTRACTED，信心度：1.0）
- **來源：** `notes/_link/HIF1A.md`
- **機制：** [[HIF1A]] 是缺氧反應的總轉錄因子。在 [[Hypoxia|缺氧]] 下，HIF1A 穩定化會轉活化 [[BNIP3]] 與 [[BNIP3L]]，它們是將自噬機器（[[LC3]]、[[GABARAP]]）招募至受損 [[Mitochondria|粒線體]] 的粒線體自噬受體。

### 邊 4：[[HIF1A]] → [[BNIP3L]]
- **關係：** `references`（EXTRACTED，信心度：1.0）
- **來源：** `notes/_link/HIF1A.md`
- **機制：** [[HIF1A]] 直接轉活化 [[BNIP3L]]（[[BNIP3L|NIX]]），一種對粒線體清除至關重要的粒線體自噬受體。BNIP3L 含有一個 [[LIR Motif|LIR（LC3 交互作用區域）動機]]，可直接對接吞噬體上的 [[LC3]]，將去極化粒線體繫附至自噬機器。

### 邊 5：[[BNIP3L]] → [[BNIP3]]
- **關係：** `conceptually_related_to`（EXTRACTED，信心度：1.0）
- **來源：** `notes/_link/BNIP3.md`
- 兩者皆為同源的粒線體自噬受體，屬於 [[Bcl-2 family|Bcl-2 家族]]，共享 C 端跨膜域與 [[LIR Motif|LIR 動機]]。BNIP3 受 [[HIF1A]] 誘發更強；[[BNIP3L|BNIP3L/NIX]] 亦發育於粒線體自噬（紅血球成熟）中作用。

---

## 生物敘事

### NAD+ → Autophagy
[[NAD+]] 是核心代謝輔酶。其濃度隨年齡下降，驅動老化表型。NAD+ 先驅物（[[NMN]]、[[Nicotinamide Riboside|NR]]）已被證實可活化 [[SIRT1]]，一種 NAD+ 依賴的去乙醯酶。[[SIRT1]] 去乙醯化：
- **[[FOXO3a]]** → 活化自噬相關基因（[[LC3]]、[[BNIP3]]）
- **[[TFEB]]** → 促進 [[Lysosome|溶酶體]] 生成與自噬流
- **[[Atg5]]、[[Atg7]]、[[LC3]]** → 直接活化核心自噬機器

這確立了 NAD+/[[SIRT1]] 軸作為自噬的關鍵代謝恆溫器。

### Autophagy → HIF1A
這兩條路徑透過多個共享調節因子緊密互連：
- **[[Mitohormesis]]** 連接兩者（共享鄰居）：粒線體壓力同時引發 [[HIF1A]] 穩定化與自噬反應
- **[[mTOR]]** 與 **[[AMPK]]** 是 [[Autophagy]] 與 [[HIF1A]] 轉譯的共同總調節因子
- 在 [[Hypoxia|缺氧]] 下產生的 **[[Reactive Oxygen Species|活性氧]]** 穩定 [[HIF1A]] 並同時活化 [[Autophagy]]

### HIF1A → BNIP3/BNIP3L（粒線體自噬）
[[HIF1A]] 結合 [[BNIP3]] 與 [[BNIP3L]] 啟動子中的缺氧反應元件（HRE）。在 [[Hypoxia|缺氧]] 或粒線體功能障礙下穩定化後：
1. [[HIF1A|HIF1α]] 與 [[ARNT|ARNT/HIF1β]] 二聚化
2. 該二聚體結合 [[BNIP3]]/[[BNIP3L]] 啟動子中的 HRE
3. BNIP3/BNIP3L 蛋白插入粒線體外膜
4. 它們的 [[LIR Motif|LIR 動機]] 招募吞噬體上的 [[LC3]]/[[GABARAP]] 家族蛋白
5. 粒線體被吞噬並經由 [[Mitophagy|粒線體自噬]] 降解

### NAD+ → BNIP3 連接
完整的訊號軸：

```
NAD+ → SIRT1 → (FOXO/TFEB) → 自噬機器
                                       ↓
NAD+ → SIRT3/SIRT4 → 粒線體健康 → ROS/缺氧訊號
                                       ↓
                               HIF1A 穩定化
                                       ↓
                             BNIP3/BNIP3L 轉活化
                                       ↓
                               誘發粒線體自噬
```

這將 NAD+ 濃度（代謝狀態感測器）連接至粒線體品質控制（[[Mitophagy|粒線體自噬]]），解釋了為何 NAD+ 先驅物能改善粒線體健康，以及為何 NAD+ 隨年齡下降會導致功能失調粒線體的累積。

---

## 替代路徑：經由 OPTN 的 BNIP3

通往 [[BNIP3]]（而非 [[BNIP3L]]）的路徑較長且較間接：

```
NAD+ Biosynthesis → Autophagy → Ubiquitination → OPTN → Alzheimer's Disease → BNIP3
```

這反映了不同的粒線體自噬路線：**[[OPTN]]（optineurin）** 是泛素包被粒線體的自噬受體，作用於 [[PINK1]]/[[Parkin]] 級聯下游。此路徑中的 [[BNIP3]] 連接至 [[Alzheimer's Disease|阿茲海默症]]，因為 BNIP3 介導的粒線體自噬缺陷助長了神經退化中的神經元功能障礙。

---

## 擴展網絡

### [[NAD+ Biosynthesis|NAD+]] 與 [[HIF1A]] 之間的關鍵共享鄰居
- [[Autophagy]] — 兩個訊號的收斂點
- [[Mitohormesis]] — 兩者都參與適應性粒線體壓力反應

### [[BNIP3L]] 直接連接
- [[HIF1A]] — 轉錄活化因子（EXTRACTED）
- [[mTORC1]] — 蛋白質合成與自噬的上游調節因子（EXTRACTED）
- [[BNIP3]] — 同源粒線體自噬受體（conceptually_related_to）

### [[BNIP3]] 直接連接
- [[HIF1A|HIF-1alpha]] — 經典轉活化因子
- [[Mitophagy|粒線體自噬]] — 功能角色
- [[LC3]] — 物理交互夥伴（[[LIR Motif|LIR 動機]]）
- [[Bcl-2 family|Bcl-2 家族]] — 結構同源
- [[Apoptosis|細胞凋亡]] — BNIP3 亦可觸發細胞死亡
- [[Ischemia-reperfusion Injury|缺血-再灌注損傷]] — 病理生理背景
- [[Alzheimer's Disease|阿茲海默症]] — 疾病相關性

---

## 圖譜統計

- **路徑中的節點：** 4（[[NAD+ Biosynthesis]] → [[Autophagy]] → [[HIF1A]] → [[BNIP3L]]）
- **跨越的社群：** 2（56 → 32 → 52）
- **總圖譜：** 26,333 個節點、62,276 條邊、355 個社群
- **本次更新加入的節點：** 28 個新的 [[Mitophagy|粒線體自噬]] 實體筆記（[[BNIP3]]、[[BNIP3L]]、[[PINK1]]、[[Parkin]]、[[FUNDC1]]、[[OPTN]]、[[PHB2]]、[[TOM20]]、[[TRAK1]] 等）

---

## 建議進一步追蹤

1. **[[NAD+ Biosynthesis|NAD+]] → [[SIRT1]] → [[FOXO3a]] → [[BNIP3]]** — 直接轉錄軸（推論，尚未萃取）
2. **[[PINK1]]/[[Parkin]] → [[OPTN]]/[[NDP52]] → [[Ubiquitin]] → [[LC3]] → [[BNIP3]]** — 經典粒線體自噬級聯
3. **[[HIF1A]] → [[BNIP3L]] → [[ERMIT]]** — 紅血球粒線體自噬及其在老化中的角色
4. **[[NAD+ Biosynthesis|NAD+]] → [[SIRT3]] → [[SOD2]] → [[Reactive Oxygen Species|ROS]] → [[HIF1A]]** — 粒線體氧化還原分支

---

## 值得探索的連結

- [[NAD+ Biosynthesis]] — 實體筆記
- [[Autophagy]] — 實體筆記
- [[HIF1A]] — 實體筆記
- [[BNIP3]] — 實體筆記
- [[BNIP3L]] — 實體筆記
- [[Mitophagy|粒線體自噬]] — 實體筆記
- [[PINK1]] — 上游粒線體自噬激酶
- [[Parkin]] — 粒線體自噬的 E3 泛素連接酶
- [[OPTN]] — 粒線體自噬受體（泛素依賴）
- [[SIRT1]] — NAD+ 依賴的自噬活化因子
- [[Mitohormesis|粒線體激效]] — NAD+ 與 HIF1A 的共享鄰居
- [[mTORC1]] — BNIP3L 的上游調節因子

## Documents

此任務輸出是源自以下實體筆記的追蹤分析：
- [[NAD+ Biosynthesis]]
- [[Autophagy]]
- [[HIF1A]]
- [[BNIP3]]
- [[BNIP3L]]
- [[Mitohormesis]]
- [[Mitophagy]]

## Connections

- [[NAD+ Biosynthesis]] → [[Autophagy]] — NAD+/SIRT1 軸經由 FOXO、TFEB、Atg 蛋白活化核心自噬機器
- [[Autophagy]] ↔ [[HIF1A]] — 透過 Mitohormesis、mTOR、AMPK 與 ROS 訊號互連
- [[HIF1A]] → [[BNIP3L]] — HIF1A 直接轉活化 BNIP3L/NIX，一種具有 LIR 動機的粒線體自噬受體
- [[HIF1A]] → [[BNIP3]] — HIF1A 在缺氧下轉活化 BNIP3；BNIP3 插入 OMM 並招募 LC3
- [[BNIP3L]] ↔ [[BNIP3]] — 同源 Bcl-2 家族粒線體自噬受體；共享 C 端 TM 域與 LIR 動機
- [[NAD+ Biosynthesis]] ↔ [[HIF1A]] — 共享鄰居 Autophagy 與 Mitohormesis 連接代謝與缺氧訊號
- [[Ubiquitination]] → [[OPTN]] — OPTN 辨識 PINK1/Parkin 下游泛素包被的粒線體
- [[OPTN]] → [[Alzheimer's Disease]] — OPTN 經由 GSK-3β 介導的降解在 AD 中下調

## Linking Summary

- New links added: [[Ubiquitination]]、[[ARNT]]、[[GABARAP]]、[[GABARAPL1]]、[[ERMIT]]、[[SIRT3]]、[[SIRT4]]、[[Reactive Oxygen Species]]、[[Hormesis]]、[[Mitochondria]]、[[Lysosome]]、[[Sirtuins]]、[[Bcl-2 family]]、[[mTOR]]、[[Ubiquitin]]
- Suggested new entity notes to create:
  - [[Ubiquitination]] — 基礎轉譯後修飾；粒線體自噬中 OPTN 的受質
  - [[ARNT]] — HIF1A 二聚化夥伴（HIF1β）；對缺氧反應元件結合至關重要
  - [[GABARAPL1]] — LC3/GABARAP 家族成員；粒線體自噬受體的 LIR 動機結合夥伴
  - [[ERMIT]] — 紅血球粒線體自噬；紅血球成熟中依賴 BNIP3L/NIX 的粒線體清除
- Strong connections to strengthen:
  - [[NAD+ Biosynthesis]] ↔ [[Autophagy]] — 詳細的 SIRT1/FOXO/TFEB 機制軸
  - [[HIF1A]] ↔ [[BNIP3]]/[[BNIP3L]] — 粒線體自噬受體的直接轉錄活化
  - [[SIRT1]] ↔ [[Autophagy]] — SIRT1 去乙醯化 FOXO3a、TFEB 與核心 Atg 機器以驅動自噬
  - [[OPTN]] ↔ [[Ubiquitination]] — OPTN 是 PINK1/Parkin 路徑中的泛素結合粒線體自噬受體
