---
title: Graphify 追蹤 — Adrenochrome（腎上腺紅質） → 自噬／粒線體自噬 與 泡沫細胞
description: Graphify 知識圖譜追蹤，將 adrenochrome（有益／激效性框架）經由 Mitohormetic Redox-Relay 連結至自噬／粒線體自噬，以及一條橋接氧化壓力、糖化、動脈粥狀硬化與 TFEB 控制的脂自噬的泡沫細胞追蹤。
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - graphify
  - adrenochrome
  - autophagy
  - mitophagy
  - foam-cells
  - atherosclerosis
  - mitohormesis
source: graphify-out/graph.json
---

# Graphify 追蹤 — Adrenochrome（腎上腺紅質） → 自噬／粒線體自噬 與 泡沫細胞

> [!NOTE]
> **方法**
> 追蹤經由 graphify 對 `graphify-out/graph.json` 的 BFS／最短路徑遍歷生成，並與來源 wiki 筆記交叉參考。依據誠實規則，在相關處標註邊的來源（EXTRACTED／INFERRED）。

---

## 追蹤 1：Adrenochrome → 自噬／粒線體自噬（有益／激效性框架）

在「假設有益」的框架下，相關路徑是 **[[Mitohormetic Redox-Relay]]（MRR，粒線體激效性氧化還原繼電器）** —— adrenochrome 作為一個*亞細胞毒性激效性觸發因子*，而非毒素。

### 路徑（5 跳）

```
[[Adrenochrome]] / [[Carbazochrome]]  (sub-µM, 50–500 nM)
        │ one-electron reduction at [[Complex I]]/[[Complex III]] → semiquinone
        ▼
[[Redox Cycling]] → [[Superoxide anion]]  (localized, matrix-confined)
        │ SOD2 dismutation
        ▼
[[Hydrogen Peroxide|H₂O₂]] pulse → [[Keap1]] cysteine modification
        │
        ▼
[[NRF2]] + [[ATF4]] + [[PGC1-α]]  (adaptive transcription)
        │ Quality-control arm: TFEB / FOXO
        ▼
[[Autophagy]] genes + [[Mitophagy]] ([[Urolithin A]] → [[PINK1]]/[[Parkin]])
```

### 為何「有益」是正確的限定詞

wiki 對同一化學反應持有**兩種相反的讀法**；限定詞選擇了分支：

| | 毒性分支（預設） | 有益分支（MRR） |
|---|---|---|
| **劑量** | 持續性，µM 以上 | 脈衝式，50–500 nM |
| **ROS** | 失控，細胞質內 | 局部化，侷限於基質 |
| **對粒線體自噬的效應** | *耗竭* 粒線體自噬能力 → 受損粒線體累積（`Mitophagy.md:39`） | *誘發* 選擇性粒線體自噬 → 清除受損粒線體（`Mitohormetic Redox-Relay.md:25`） |
| **結果** | 粒線體功能障礙、[[Inflammaging]] | 激效性適應、[[Healthspan]] |

### 機制橋樑（源自 `Mitohormetic Redox-Relay.md`）

1. **觸發** —— [[Carbazochrome]]（穩定化的 adrenochrome）在 [[Complex I]]/[[Complex III]] 進行氧化還原循環，釋出一個*空間受限*的超氧脈衝（`:34`）。
2. **繼電** —— [[SOD2]] → [[Hydrogen Peroxide|H₂O₂]] → 經由 [[Aquaporins]] 排出 → 修飾 [[Keap1]]，釋放 [[NRF2]]；基質內的 [[ROS]] 也驅動 [[Integrated Stress Response]]（OMA1→OPA1→DELE1→HRI→ATF4）（`:38–42`）。
3. **匯聚至自噬** —— 步驟 4 的轉錄表格（`:61`）即字面上的 來源→目標 邊：
   > **品質控制 | [[TFEB]]、[[FOXO]] | [[Autophagy]] 基因、[[Ubiquitin-Proteasome System]] | [[Mitophagy]]、[[Proteostasis]]**
4. **清理** —— [[Urolithin A]] 經由 [[PINK1]]/[[Parkin]] 軸誘發選擇性粒線體自噬，透過移除 adrenochrome 脈衝所壓力的粒線體來閉合迴圈（`:25`、`:96`）。

### 圖譜遍歷筆記

- `graphify path "Adrenochrome" "Autophagy"` → `Adrenochrome ← Oxidative Stress ← Foam Cells → Autophagy`（一條*毒性*動脈粥狀硬化路線，不同於 MRR 分支）。
- `graphify path "Adrenochrome" "Mitophagy"` → **無路徑**（無向配對器命中了模糊的 `Adrenochrome` 節點；有益橋樑僅在 `Mitohormetic Redox-Relay.md` 內共現，而模糊路徑配對器錯過了它）。
- **[[TFEB]]/[[FOXO]] → 自噬／粒線體自噬** 這一列是誠實的橋樑，將 [[Oxidative Stress]] 社群（9）連結至 [[Mitophagy]] 社群（56）。

---

## 追蹤 2：泡沫細胞

**[[Foam Cells]]（泡沫細胞）** 是 adrenochrome 主題中的一個橋接節點（`社群 42`），將**氧化壓力／糖化叢集**（社群 9/80）連結至**動脈粥狀硬化／脂質叢集**（社群 27）與**自噬／溶體叢集**（社群 8/25）。

### 它是什麼

充滿脂質的 [[Macrophages]]（巨噬細胞）——早期 [[Atherosclerosis]]（動脈粥狀硬化）的標誌性病變。[[Monocytes]]（單核細胞）進入動脈內膜，成為巨噬細胞，並經由清道夫受體（SR-A、[[CD36]]）吞噬修飾過的 [[Low-Density Lipoprotein|LDL]]，而這些受體——不同於典型 LDL 受體——*不會*因膽固醇負載而關閉。結果：不受控的膽固醇酯堆積 → 「泡沫狀」形態（`Foam Cells.md:15`）。

### 圖譜路徑（三條匯聚路線）

```
                    ┌── [[Methylglyoxal]] → [[Advanced Glycation End Products]] (AGEs on ApoB-100)
                    │        │ (glycation branch, community 42/80)
[[Low-Density      ─┤        ▼
  Lipoprotein]]     │   glycated/[[Oxidized LDL|oxidized LDL]] → scavenger receptor ligand
                    │        │
                    └── [[Oxidative Stress]] ────┐ (redox branch, community 9)
                                                  ▼
                                          [[FOAM CELLS]]  (community 42)
                                                  │
                    ┌─────────────────────────────┼─────────────────────────────┐
                    ▼                              ▼                              ▼
          [[Atherosclerosis]]            impaired [[Autophagy]]           necrosis →
          (plaque, community 27)         (defective efflux/clearance)     necrotic core +
                                          │ regulated by [[TFEB]]          efferocytosis failure
                                          ▼                                → [[Inflammation]]
                                    [[Lysosome]] / [[Lipophagy]]
                                    (community 8)
```

### 三個機制分支

1. **糖化分支**（社群 42/80）——在 [[Hyperglycemia|高血糖]]／促氧化條件下，[[Methylglyoxal]] 與 [[Glucose]] 在 [[Apolipoprotein B|ApoB-100]] 上形成 [[Advanced Glycation End Products|AGEs]]，氧化 LDL 並使其成為高親和力的清道夫受體配體——這是代謝功能障礙 → 血管疾病的連結（`:17`）。
2. **氧化還原＋清除分支**（社群 9 → 8）——泡沫細胞的形成被 [[Oxidative Stress]]**與受損的 [[Autophagy]]（自噬）**（低效的 [[Cholesterol Efflux|膽固醇外排]]、缺陷的自噬清除）所放大。這是 [[TFEB]] 控制的溶體／[[Lipophagy|脂自噬]] 臂——與 adrenochrome→粒線體自噬追蹤相同的 [[TFEB]]/[[FOXO]] 品質控制樞紐（`:20`）。
3. **終端／發炎分支**（社群 27）——泡沫細胞 [[Cell necrosis|壞死]]，播下斑塊壞死核心；胞葬作用（efferocytosis）失敗使 [[Inflammation]]（發炎）持續（`:22`）。

### 跨追蹤連結

泡沫細胞位於**三個社群**的交會處：
- **[[Oxidative Stress]]**（9）——與 adrenochrome 的氧化還原循環共享上游
- **[[TFEB]]/[[Autophagy]]**（8）——與追蹤 1 粒線體自噬分支*相同*的溶體品質控制樞紐
- **[[Atherosclerosis]]／脂質**（27）——其自身的疾病社群

誠實免責聲明：此處的邊為 `EXTRACTED --references-->` 自單一筆記，加上 `INFERRED` 至動脈粥狀硬化叢集的概念性連結。[[TFEB]] 連結是最強的跨社群橋樑，源自兩份文件（氧化壓力 ＋ TFEB 調控機制）。

---

## 關鍵匯聚點：TFEB 作為三社群的上帝節點

兩條追蹤都匯聚於 **[[TFEB]]**，即自噬／[[Lysosomal Biogenesis|溶體生合成]]（[[CLEAR Element|CLEAR 網絡]]）的轉錄主控調節因子。它橋接：
- 泡沫細胞的**脂自噬**（膽固醇外排／清除）
- adrenochrome 驅動的**粒線體自噬**（MRR 品質控制臂）
- **[[Parkinson's Disease]]（帕金森氏症）**（[[PINK1]]/[[Parkin]] 粒線體自噬）

這使 TFEB 成為當前圖譜中橫跨氧化壓力、自噬、動脈粥狀硬化與神經退化社群連結最緊密的唯一橋樑。

## 引用的來源筆記

- [[Adrenochrome]] — `notes/adrenochrome/Adrenochrome.md`
- [[_document_ - Mitohormetic Redox-Relay]] — `notes/adrenochrome/Mitohormetic Redox-Relay.md`
- [[Mitophagy]] — `notes/_link/Mitophagy.md`
- [[Foam Cells]] — `notes/adrenochrome/Foam Cells.md`
