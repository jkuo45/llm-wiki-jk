---
title: 伊維菌素、山中因子與老化 — graphify 探索
description: 多部分探索伊維菌素與老化生物學的交會——山中因子、mTOR/TFEB 自噬、STAT3/NF-κB 發炎老化、SASP/衰老修飾（senomorphic）重疊，以及促長壽 vs. 抗回春機制的核心悖論
created: 2026-07-28
updated: 2026-07-28
tags:
  - task-output
  - ivermectin
  - yamanaka-factors
  - aging
  - autophagy
  - graphify
  - stat3
  - nf-kb
  - inflammaging
  - sasp
  - senomorphic
  - mtor
  - longevity
  - fenbendazole
source: graphify query on graphify-out/graph.json
---

# 伊維菌素、山中因子與老化 — 透過知識圖譜的探索

**方法：** 在 `graphify-out/graph.json`（預建圖譜）上執行 `graphify query`，再 grounding 於 wiki 筆記。經由 wiki 全域搜尋 STAT3、NF-κB、mTOR 與老化路徑連結來擴展。**日期：** 2026 年 7 月 28 日

---

## Q1 — 伊維菌素是否透過山中因子促進抗衰老（逆轉老化）？

**結論：wiki 中沒有伊維菌素與山中因子回春之間的直接連結。**

圖譜將 `Ivermectin`（community 26，藥物老藥新用）連結至 `Yamanaka Factors` 群集（Oct4、Sox2、Klf4、c-Myc；community 36），僅透過共享的橋接節點：

- **PAK1** — 伊維菌素是 PAK1 抑制劑（`cancer/PAK1.md:31`）
- **mTOR** — 伊維菌素抑制 Akt/mTOR（`cancer/Ivermectin.md:21`）
- **Cancer Stem Cells** — 伊維菌素透過 PAK1–STAT3 抑制 CSC（`cancer/Cancer Stem Cells.md:22`）

`Yamanaka Factors.md` 與 `Partial Reprogramming.md` 記載 OSKM 驅動的表觀遺傳回春，但**沒有任何筆記將任何回春效應歸因於伊維菌素**。這些交會點在機制上是*對立*或*正交*的，而非協同。

---

## Q2 — 伊維菌素透過 PAK1 是*幫助*還是*阻礙*山中因子回春？

**結論：阻礙（以 wiki 為據）。**

決定性節點 — `cancer/Cancer Stem Cells.md:22`：

> "**Ivermectin**：優先標靶並抑制乳癌細胞中的 CSC。它抑制 **Nanog、Oct4 與 Sox2** 的表現，並透過 **PAK1–STAT3** 軸作用。"

透過 PAK1 的路徑與回春相反：

```
Ivermectin ──(PAK1 抑制劑，蛋白酶體降解)──▶ PAK1 ──▶ STAT3
                                                              │
                                                              ▼
                                    抑制 Oct4 與 Sox2 的表現（4 個 OSKM 因子中的 2 個）
                                                              │
                                                              ▼
                                     ↓ 重編程能力 → 反對 Partial Reprogramming
```

- Oct4 與 Sox2 是核心山中因子（`Yamanaka Factors.md`）；驅動表觀遺傳回春所需的 OSKM 四人組的一半（`Partial Reprogramming.md:19`）。
- 伊維菌素直接下調 Oct4/Sox2 → 抑制回春所需的轉錄因子被「開啟」。
- 在癌症中是治療性的（殺死 CSC）；對重編程則適得其反。

**細微差別（一般知識，不在 wiki 中）：**

1. 部分重編程通常以病毒/強四環素誘導方式遞送 OSKM，不依賴內生 Oct4/Sox2 表現——因此外源因子可能繞過此抑制。
2. PAK1 是已知能提升 iPSC 生成效率的輔因子；即使有外源因子，其抑制仍可能降低重編程效率。

**收斂性（促）線索：** 伊維菌素獨立的 mTOR 抑制 / 自噬誘導（透過 TFEB）與 Rapamycin 位於相同的長壽領域——但與山中回春正交。

---

## Q3 — 伊維菌素的 mTOR/TFEB 效應能否獨立延長健康壽命（無需重編程）？

**結論：機制上可以，且獨立於重編程。但健康壽命的益處是*推論*，非 wiki 所證實。**

這是一個獨立的槓桿——運行於 community 14（TFEB），而非 PAK1/山中群集。

路徑（完全以 wiki 為據）：

```
Ivermectin
  └─ 抑制 PAK1 / Akt / mTOR 軸        ← Autophagy.md:113,184,368; Ivermectin.md:21
        └─ mTORC1 抑制
              └─ Calcineurin 去磷酸化 TFEB (Ser142/211)   ← TFEB.md:21-23
                    └─ TFEB 核轉位 → CLEAR network
                          └─ 溶酶體生合成 + 自噬通量   ← TFEB.md:34
                                └─ 自噬誘導 → 健康壽命    ← Autophagy.md:47,224
```

- 這與 Rapamycin、Metformin、Spermidine 與熱量限制所使用的**同一軸**——皆為文獻記載的健康壽命/壽命延長劑（`Autophagy.md:47,224,296,408`；`Rapamycin.md`）。
- 不需要任何 OSKM 因子 → 真正獨立於山中重編程。

### 誠實邊界（推論 vs. 證實）

| 連結 | wiki 中的狀態 |
|---|---|
| 伊維菌素抑制 PAK1/Akt/mTOR → 誘導自噬 | ✅ 有文獻記載，但**僅在癌細胞中**（乳癌、神經膠質瘤）（`Autophagy.md:184,368`；`Ivermectin.md:23`） |
| mTOR 抑制活化 TFEB → CLEAR/溶酶體程式 | ✅ 有文獻記載的機制（`TFEB.md:21-23`） |
| **伊維菌素本身延長健康壽命/壽命** | ⚠️ **模糊 / 由類比推論** — wiki 中*沒有*伊維菌素長壽研究；奠基於其 rapamycin 類 mTOR→自噬定位 |

### 雙面刃

自噬抑制早期腫瘤發生但支持已建立腫瘤的存活（`Autophagy.md:51,174`）。伊維菌素的自噬誘導在癌症中是細胞靜止/細胞毒性的，而*相同*的清除機制有益於老化組織。

---

## Q4 — 伊維菌素還與哪些額外與老化相關的路徑交會？

除了山中與 mTOR/TFEB，wiki 揭示數個額外路徑節點，伊維菌素的抗癌機制與老化生物學在此重疊。在 wiki 內的老化文獻中，沒有任何節點直接連結至伊維菌素——但共享節點皆有明確表徵。

### 4a. STAT3 ↔ 發炎老化 ↔ SASP

伊維菌素在癌症中破壞的 PAK1-STAT3 軸，正是驅動年齡相關免疫失調的同一軸：

- **老化的 CD4+ T 細胞** 呈現 STAT3 介導的 Th17 發炎特徵，促成發炎老化（inflammaging）與衰老（`STAT3.md:20-22`）。Metformin 透過增強自噬與粒線體生物能量學來反轉此表型。
- **SASP 驅動的幹性（stemness）**：IL-6 → JAK/STAT3 是衰老細胞促進鄰近上皮癌幹性的主導軸。STAT3 在轉錄上維持 OCT4、NANOG、SOX2 並上調 CD44。STAT3 透過誘導進一步的 IL-6 分泌形成正向回饋迴路（`Paracrine Reprogramming.md:59`）。
- **SIRT6** 抑制 JAK2/STAT3（`JAK-STAT Signaling.md`），暗示與 sirtuin 長壽網絡的潛在收斂點。

```
Ivermectin ──▶ PAK1 降解 ──▶ STAT3 抑制
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    ▼                     ▼                     ▼
            ↓ IL-6 轉錄          ↓ Th17 發炎老化          ↓ OCT4/NANOG/SOX2
            (Kim et al. 2019)     (STAT3.md:20)         (Cancer Stem Cells.md:22)
```

伊維菌素的 STAT3 抑制在原則上反對發炎老化，位於 metformin 標靶的同一節點——但透過 PAK1 而非 AMPK。

### 4b. NF-κB ↔ SASP ↔ 發炎老化

PAK1 促進 NF-κB 核活化（`PAK1.md:26`）。伊維菌素的 PAK1 降解削弱 NF-κB 訊號。在老化脈絡中：

- **NF-κB 是 SASP 的主控轉錄調節因子** — 在衰老細胞中，持續的 DNA 損傷活化 IKK → 持續性 NF-κB → IL-6、IL-8、TNF-α、MCP-1 的轉錄（`NF-κB.md:73`）。
- **發炎老化**：慢性 NF-κB 活化隨年齡在組織間增加，由 AGE-RAGE、粒線體功能障礙與 DNA 損傷驅動。持續活化促進胰島素阻抗、動脈粥樣硬化、肌肉減少症、神經退化（`NF-κB.md:77`）。
- **Sirtuin 反向調節**：SIRT1 去乙醯化 RelA/p65；SIRT6 去乙醯化 NF-κB 標的上的 H3K9；SIRT7 抑制 p65 核轉位（`NF-κB.md:66-71`）。

伊維菌素透過 PAK1 缺失的 NF-κB 抑制，與衰老修飾（senomorphic）策略重疊——標靶 SASP 生成而不殺死衰老細胞（`Senomorphic Therapy.md:25`）。

### 4c. mTOR ↔ 衰老 ↔ 幹細胞耗竭

mTOR 連結超越自噬，進入老化的核心特徵：

- **mTOR 促進 SASP 轉譯** — rapamycin 抑制 mTOR 依賴的 SASP 放大，用作衰老修飾煞車（`Rapamycin.md:14`、`mTOR.md:17`）。
- **幹細胞耗竭**：mTOR 過度活化耗竭幹細胞庫；rapamycin 恢復老年小鼠造血幹細胞的自我更新（`Autophagy.md:57`）。
- **老化特徵（Hallmarks of Aging）**：失調的營養感知（mTOR）與失效的巨自噬是主要/拮抗性特徵（`Hallmarks of Aging.md:19`）。

伊維菌素透過 PAK1 降解的 mTOR 抑制，在不同的切入點（上游激酶而非直接在 mTORC1）重現 rapamycin 類介入。

### 4d. 自噬 ↔ 表觀遺傳老化

自噬下降與表觀遺傳老化形成 wiki 中記載的惡性循環：

- 表觀遺傳改變（Atg5、LC3B、Beclin1 的 DNA 甲基化；H4K16 去乙醯化；miR-34a 上調）隨年齡降低自噬（`Autophagy.md:126-161`）。
- 自噬降低未能清除受損的表觀遺傳修飾因子，加速表觀遺傳漂移。
- NAD+ 隨年齡耗竭抑制 SIRT1 活性，降低自噬能力與表觀遺傳維護（`Autophagy.md:36-43`、`NAD+.md:35-40`）。

伊維菌素的自噬誘導（PAK1 → Akt/mTOR → TFEB）在原則上可能中斷此循環——但 wiki 僅在癌細胞中記載此效應，而非老化組織。

---

## 整合路徑圖

```
IVERMECTIN
    │
    ├─▶ PAK1 降解（蛋白酶體）
    │       ├─▶ STAT3 抑制
    │       │       ├─▶ ↓ IL-6 轉錄（抗 CSC、抗發炎老化）
    │       │       ├─▶ ↓ OCT4/NANOG/SOX2（抗幹性、抗回春）
    │       │       └─▶ ↓ Th17 發炎老化特徵（老化的 CD4+ T 細胞）
    │       ├─▶ NF-κB 抑制
    │       │       ├─▶ ↓ SASP（衰老修飾重疊）
    │       │       └─▶ ↓ 發炎老化轉錄
    │       ├─▶ Akt/mTOR 抑制
    │       │       ├─▶ TFEB 活化 → 自噬/溶酶體生合成
    │       │       ├─▶ ↓ SASP 轉譯（rapamycin 類效應）
    │       │       ├─▶ 幹細胞自我更新恢復
    │       │       └─▶ ↓ HIF-1α → ↓ 糖解重編程
    │       └─▶ Wnt/β-catenin 破壞
    │               └─▶ 與幹細胞老化相關（依脈絡而定）
    │
    └─▶ YAP1 抑制（獨立於 PAK1）
            └─▶ Hippo 路徑 → 生長控制（老化角色不明）
```

---

## 核心悖論

伊維菌素的機制分裂為兩類，對老化有相反的意涵：

| 機制 | 抗癌 | 抗衰老？ |
|---|---|---|
| mTOR 抑制 → 自噬誘導 | 腫瘤中細胞靜止/細胞毒性 | **促長壽**（與 rapamycin 相同） |
| STAT3/NF-κB 抑制 → ↓ SASP | 移除 CSC 支持的生態位 | **抗發炎老化**（衰老修飾重疊） |
| OCT4/SOX2/NANOG 抑制 | 殺死 CSC（治療性） | **抗回春**（反對部分重編程） |
| 自噬誘導 | 早期癌症中細胞靜止 | **促長壽**（清除受損蛋白/胞器） |

前兩個機制與已知的長壽介入一致。第三個——抑制山中因子三重奏——直接反對表觀遺傳回春策略。淨效應是促或抗衰老，很可能取決於脈絡：劑量、組織、時機，以及是否同時遞送外源重編程因子。

---

## 芬苯達唑 — 平行的老化分析

wiki 包含專門的 `Fenbendazole.md` 筆記，以及一份關於伊維菌素 + 芬苯達唑*抗癌*協同作用的相關任務輸出（`task_output_ivermectin_fenbendazole_mechanisms_28_JULY_2026.md`）。該著作記載芬苯達唑的主要節點——**微管去穩定化**、**糖解抑制（GLUT1/HK2）**、**p53 活化（MDM2/MdmX 抑制）**、**ROS/MEK3/6–p38 MAPK**，以及 **NF-κB 調節**。將這些相同節點重新定位到老化框架，顯現出的輪廓幾乎是伊維菌素的*反向*：伊維菌素帶有一個真正的促長壽槓桿（mTOR→TFEB 自噬）加上一項抗回春警示，而**芬苯達唑的老化足跡由癌症選擇性但可能在正常組織中抗長壽的機制主導**。它與伊維菌素唯一共享的促長壽節點是 NF-κB 抑制。

---

## Q5 — 芬苯達唑是否透過山中因子促進抗衰老（逆轉老化）？

**結論：wiki 中無直接連結。且不同於伊維菌素，芬苯達唑會透過一個*更根本*的節點——p53——來阻礙山中回春。**

伊維菌素透過抑制*下游* OSKM 因子（Oct4/Sox2）來反對重編程。芬苯達唑則活化 **p53**——而 `p53.md` 將 p53 視為重編程的主要*上游*障礙：

> "在 [[Cellular Reprogramming]] 中，[[p53]] 是生成 [[Induced Pluripotent Stem Cells]]（iPSCs）的主要障礙……此損傷活化 [[p53]]，後者反過來在轉導細胞中啟動 [[Apoptosis]] 或 [[Senescence]]，顯著降低 iPSC 誘導效率。"（`p53.md:17`）
> "[[p53]] 是高效誘導多能性最顯著的生物学障礙。"（`p53.md:119`）

芬苯達唑的機制直接餵養此障礙（`Fenbendazole.md:20`）：

```
Fenbendazole
  └─ 下調 MDM2 / MdmX (E3 連接酶)        ← Fenbendazole.md:20
        └─ p53 蛋白穩定並累積
              ├─ 轉活化 Bax, PUMA, Noxa (凋亡)
              ├─ 轉活化 p21 (細胞週期停滯)   ← p53.md:14
              └─ 在任何轉導（重編程能力強）的細胞中啟動衰老 / 凋亡  ← p53.md:17-18
                    └─ ↓ iPSC / Partial Reprogramming 產量
```

- 這比伊維菌素的 Oct4/Sox2 抑制*更*直接地反對回春：p53 使您試圖重編程的細胞停滯/凋亡，而非僅僅降低四個因子中的兩個水平。
- 在癌症中治療上可取（在 MDM2 過表達腫瘤中恢復 p53）；**對表觀遺傳回春則適得其反**，因為 p53 必須被短暫抑制。

**細微差別（一般知識，不在 wiki 中）：** 短暫/外源 OSKM 遞送不需要內生 p53 活性，但 p53 活化仍會剔除轉導細胞並降低重編程效率——因此即使有病毒/強四環素 OSKM，芬苯達唑仍會削減產量。

---

## Q6 — 芬苯達唑是否有獨立的健康壽命效應（無需重編程）？

**結論：大致推論為抗長壽或模糊。芬苯達唑完全缺乏伊維菌素的 rapamycin 類 mTOR→TFEB 自噬槓桿。**

| 芬苯達唑機制 | 老化意涵 | wiki 狀態 |
|---|---|---|
| **微管去穩定化**（秋水仙素位點 β-tubulin 結合） | **在分裂後細胞中可能抗長壽。** 微管完整性隨年齡下降；微管蛋白乙醯化是健康老化的標記。破壞聚合物威脅神經元/心肌細胞。（`Microtubule.md:24`） | 在癌症中有文獻記載；缺乏老化組織效應 |
| **GLUT1 / HK2 糖解抑制** | **模糊。** 表面與 CR/AMPK「減少糖解」邏輯一致，但是*非選擇性*的代謝飢餓。老化的神經元/免疫細胞已有降低的糖解儲備 → 廣泛抑制可能損害功能。 | 在癌症中有文獻記載（`Fenbendazole.md:18`） |
| **p53 活化（MDM2/MdmX ↓）** | **抗長壽。** 組成型 p53 驅動細胞衰老——老化的主要特徵（`p53.md:14`；`Hallmarks of Aging.md`）。 | 抗癌有文獻記載（`Fenbendazole.md:20`） |
| **ROS / MEK3/6–p38 MAPK 誘導** | **雙面刃。** ROS 是老化（粒線體功能障礙）的特徵；僅在*荷爾蒙性/輕微*時有益。芬苯達唑的訊號是細胞毒性的，不明確屬荷爾蒙性。 | 有文獻記載（`Fenbendazole.md:19`；Peng 2022） |
| **NF-κB 調節** | **促長壽（唯一共享節點）。** 若為抑制性，則削弱 SASP/發炎老化——與伊維菌素透過 PAK1 達成的相同衰老修飾重疊。機制較伊維菌素不明確。 | 有調節記載（`Fenbendazole.md:20`） |

**與伊維菌素的關鍵對比：** 芬苯達唑在 wiki 中**不**抑制 mTOR、不活化 TFEB、不誘導自噬。給予伊維菌素促長壽軸的 rapamycin 類健康壽命槓桿，對芬苯達唑而言*不存在*。其「代謝」作用（GLUT1/HK2 ↓）是使糖解飢餓，而非啟動營養感知長壽路徑。

```
FENBENDAZOLE — 老化淨效應
   ├─ p53 活化  ──────────────▶ 衰老 / 凋亡  (抗長壽)
   ├─ 微管去穩定化 ─▶ 神經元/心肌細胞風險 (抗長壽)
   ├─ ROS / p38 MAPK ──────────────▶ 氧化損傷 (抗長壽，除非荷爾蒙性)
   ├─ GLUT1/HK2 ↓ ────────────────▶ 代謝飢餓 (模糊；依脈絡而定)
   └─ NF-κB 調節 ────────────▶ ↓ SASP / 發炎老化 (促長壽，與伊維菌素共享)
```

---

## Q7 — 芬苯達唑的老化輪廓與伊維菌素相比如何？

**結論：兩者在長壽平衡上分歧顯著。** 兩者皆為具抗癌活性的老藥新用抗寄生蟲藥，但它們與老化相關的節點集幾乎不重疊：

| 軸 | 伊維菌素 | 芬苯達唑 |
|---|---|---|
| mTOR→TFEB 自噬（rapamycin 類健康壽命） | ✅ 是（`TFEB.md:21-23`） | ❌ wiki 中無 |
| p53 活化 | ❌ 非主要 | ✅ 是（MDM2/MdmX ↓） |
| 山中回春效應 | 阻礙（透過 PAK1 使 Oct4/Sox2 ↓） | 阻礙*更直接*（p53 路障） |
| 微管標靶 | ❌ 否 | ✅ 是（去穩定化） |
| NF-κB / SASP 衰老修飾重疊 | ✅ 是（透過 PAK1） | ✅ 是（調節，較不明確） |
| ROS / 氧化壓力 | ✅ 是（粒線體/Cl⁻） | ✅ 是（MEK3/6–p38 + NADPH 耗竭） |
| 淨老化傾向 | 混合促/抗（悖論性） | **偏抗長壽 / 癌症選擇性** |

> [!WARNING]
> ****脈絡具決定性。** 在腫瘤脈絡中兩種化合物都可取。在*長壽/抗衰老*脈絡中，伊維菌素至少帶有一個乾淨的促長壽機制（自噬誘導）與一個衰老修飾機制（NF-κB/STAT3 抑制）；芬苯達唑的主導性老化相關作用（p53 驅動的衰老、微管去穩定化、ROS）指向相反方向，只留下 NF-κB 調節作為其唯一以 wiki 為據的促長壽節點。**

---

## 建議的芬苯達唑後續追蹤（尚未執行）

- 芬苯達唑的 p53 穩定是否加速*正常組織*衰老（可從 `p53.md:14` + `Senescence.md` 測試）——關鍵的抗長壽假說。
- 芬苯達唑的微管去穩定化是否損害分裂後細胞（神經元/心肌細胞），其中微管蛋白乙醯化是健康老化標記。
- 芬苯達唑的 NF-κB 調節是否抑制性強到足以被歸類為衰老修飾（平行於伊維菌素的 NF-κB 問題）。
- 芬苯達唑 + 伊維菌素併用，雖在癌症中協同，是否在非癌組織中加重抗長壽風險（p53 衰老 + 微管破壞）。
- 芬苯達唑的糖解抑制是否模仿任何 CR/AMPK 健康壽命訊號，或純屬分解代謝/細胞毒性。

---

## 摘要表（擴展）

| 問題 | 答案 | 信心 | 關鍵 wiki 引用 |
|---|---|---|---|
| 伊維菌素 → 山中回春？ | 無直接連結；交會點反對/正交 | 高（缺席） | `Ivermectin.md`、`Yamanaka Factors.md` |
| 透過 PAK1 是幫助或阻礙？ | **阻礙**（抑制 Oct4/Sox2） | 高 | `Cancer Stem Cells.md:22` |
| 獨立 mTOR/TFEB 健康壽命？ | 機制上可以；益處為推論 | 中（推論） | `TFEB.md:21-23`、`Autophagy.md:184,368`、`Rapamycin.md` |
| STAT3/發炎老化重疊？ | 與 metformin 標靶同一軸；伊維菌素經由 PAK1 進入 | 中（路徑重疊） | `STAT3.md:20-22`、`Paracrine Reprogramming.md:59` |
| NF-κB/SASP 衰老修飾重疊？ | PAK1 缺失削弱 NF-κB → ↓ SASP 轉錄 | 中（路徑重疊） | `NF-κB.md:73-77`、`PAK1.md:26` |
| 對老化的淨效應？ | **悖論性** — 促長壽機制 + 抗回春機制 | 低（未解決） | 多項 |
| 芬苯達唑 → 山中回春？ | 無直接連結；p53 活化是*直接*路障 | 高（機制性） | `p53.md:17,119`、`Fenbendazole.md:20` |
| 芬苯達唑獨立健康壽命？ | 大致抗長壽/模糊；缺乏 mTOR→TFEB 自噬槓桿 | 低（推論） | `Fenbendazole.md:18-20`、`Microtubule.md:24` |
| 芬苯達唑 ↔ 伊維菌素老化比較？ | 伊維菌素有促長壽軸；芬苯達唑偏抗長壽 | 中（比較性） | `TFEB.md:21-23`、`Fenbendazole.md` |

## 建議的後續追蹤（尚未執行）

- TFEB ↔ Calcineurin ↔ CLEAR Element 核轉位細節
- 伊維菌素是否與 Rapamycin 共享其倒 U 型荷爾蒙性劑量，透過 mTORC1 `Incoherent Bivalent Motif`（`Rapamycin.md:63`）
- 伊維菌素的自噬軸與 Senolytic/Senomorphic 策略合併（`Fisetin`、`Senolytics.md`）
- 伊維菌素的 NF-κB 抑制是否足以被歸類為衰老修飾（vs. 衰老溶解）
- 伊維菌素 + NAD+ 前驅物（NMN/NR）併用：自噬誘導 + sirtuin 活化作為收斂性長壽堆疊
- 伊維菌素的 STAT3 抑制是否反轉老化的 CD4+ T 細胞 Th17 表型（可從 `STAT3.md:20` 測試的假說）
- PAK1 在 iPSC 生成效率中的角色——PAK1 抑制是否降低重編程產量？（`Cancer Stem Cells.md:22`、`Partial Reprogramming.md:19`）
