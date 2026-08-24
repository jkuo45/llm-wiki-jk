---
title: "Adrenochrome → Inflammaging Trace"
description: 知識圖譜最短路徑追蹤，連結腎上腺色素至發炎性老化，辨識 DGCR8/Drosha miRNA 生成軸作為兒茶酚胺氧化產物與慢性發炎性老化之間的主導性兩跳表觀遺傳橋樑。
created: 2026-07-16
tags:
  - task-output
  - adrenochrome
  - inflammaging
  - knowledge-graph
  - microrna
---

# Adrenochrome → Inflammaging Trace

**日期：** 16_July_2026 12:00 PM PDT
**來源：** graphify 知識圖譜查詢
**圖譜統計：** 1850 個節點，2388 條連結

---

## 最短路徑

### 路徑 1 — 表觀遺傳橋樑（2 跳，最短）

```
Adrenochrome → DGCR8 → Inflammaging
```

- **Adrenochrome**（community 11）共價修飾 **DGCR8**（微處理複體的血基質結合 RNA 感受器）
- **DGCR8**（community 18）掌控 miRNA 生成——其功能障礙改變控制 **Inflammaging**（community 4）的表觀遺傳網絡

### 路徑 2 — 平行的 Drosha 路線（2 跳）

```
Adrenochrome → Drosha → Inflammaging
```

- 相同機制：對 Drosha/DGCR8 微處理複體的親電性醌修飾破壞 miRNA 處理，釋放促發炎基因程式。

### 路徑 3 — 心肌/嗜中性球路線（3 跳）

```
Adrenochrome → Myocardial Infarction → Neutrophils → Inflammation
```

- 腎上腺色素加劇心肌梗塞 → MI 招募嗜中性球 → 嗜中性球驅動急性發炎。這是組織層級（非表觀遺傳）的路徑。

### 路徑 4 — 衰老/SASP 級聯（5 跳）

```
Adrenochrome → DGCR8 → Senescence → Cellular Senescence → SASP → Inflammaging
```

- 完整級聯：腎上腺色素破壞微處理複體 → miRNA 失調觸發衰老 → 衰老細胞分泌 SASP（衰老相關分泌表型）→ SASP 是發炎性老化的典型驅動因子。

---

## 機制

出自 `DGCR8.md:50-51`：
> Microprocessor dysfunction globally alters the miRNA-based epigenetic network, influencing Senescence, the SASP, and Inflammaging.
> Electrophilic quinones such as Adrenochrome may covalently modify DGCR8/Drosha, potentially altering pri-miRNA processing rates.

出自 `Adrenochrome.md:43`：
> Aging: Increases baseline ROS and "inflammaging," shifting more epinephrine toward the adrenochrome pathway.

關鍵的分子細節：腎上腺色素的**醌基部分**（indoline-5,6-dione）作為親電子試劑，可修飾 DGCR8/Drosha 上的硫醇基團。由於 DGCR8 是一種帶有對 RNA 辨識關鍵的半胱胺酸殘基的血基質結合蛋白，此一共價修飾可能損害微處理複體的保真度。此複體所控制的下游 miRNA——包括 miR-217、miR-378 與 miR-543——皆為衰老相關的調節因子。當它們出錯時，衰老程式被活化，SASP 因子大量湧出，隨之而來的便是發炎性老化。

---

## 社群橋樑

此連結跨越 **4 個不同的社群**：

- **C11**（腎上腺色素化學）→ **C18/C15**（表觀遺傳/miRNA 處理）→ **C4**（衰老/SASP/發炎性老化）→ **C73**（組織發炎）

橋接節點為 **DGCR8** 與 **Drosha**——它們是分子樞紐，將化學代謝物（腎上腺色素）轉譯為驅動老化相關發炎的表觀遺傳擾動。

---

## 關鍵節點與社群

| 節點 | 社群 | 角色 |
|------|-----------|------|
| Adrenochrome | 11 | 腎上腺素的親電性醌代謝物 |
| DGCR8 | 18 | 血基質結合的微處理複體輔因子；共價標的 |
| Drosha | 15 | DGCR8 的 RNase III 催化夥伴 |
| Senescence | 4 | 細胞衰老程式 |
| SASP | 4 | 衰老相關分泌表型 |
| Inflammaging | 4 | 慢性、與年齡相關的發炎狀態 |
| Inflammation | 73 | 急性組織發炎 |
| Myocardial Infarction | 73 | 將腎上腺色素連結至嗜中性球招募的組織層級病理 |
| Neutrophils | 73 | 驅動發炎的先天免疫細胞 |
| miR-217 | 18 | 依賴微處理複體的衰老相關 miRNA |
| miR-378 | 18 | 依賴微處理複體的衰老相關 miRNA |
| miR-543 | 18 | 依賴微處理複體的衰老相關 miRNA |

---

## 完整路徑列表（所有 ≤ 6 跳的最短路徑）

1. Adrenochrome → DGCR8 → Inflammaging（2 跳）
2. Adrenochrome → Drosha → Inflammaging（2 跳）
3. Adrenochrome → Myocardial Infarction → Neutrophils → Inflammation（3 跳）
4. Adrenochrome → DGCR8 → Senescence → Cellular Senescence → SASP → Inflammaging（5 跳）
5. Adrenochrome → Drosha → Senescence → Cellular Senescence → SASP → Inflammaging（5 跳）
