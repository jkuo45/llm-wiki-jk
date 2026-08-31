---
title: "Sirtuin–Caspase 串擾 — 研究綜合（Wiki、圖譜、Web）"
description: "跨來源研究報告，探討 sirtuins 與 caspases 之間的雙向調控，結合 wiki 知識庫筆記、graphify 知識圖譜與當前網路文獻（附 PMID）。"
published: 2026-08-28
created: 2026-08-28
source: tasks/task_output_sirtuin_caspase_crosstalk_28_AUG_2026.md
author: []
tags:
  - sirtuin
  - caspase
  - apoptosis
  - cell-death
  - research-synthesis
updated: 2026-08-28
---

# 研究綜合：Sirtuin–Caspase 串擾（Wiki · 圖譜 · Web）

*編纂於 28_Aug_2026 11:17 PM PDT。範圍：七種哺乳動物 sirtuins 與 caspase 家族如何在細胞凋亡、細胞焦亡（pyroptosis）與 DNA 損傷反應中相互調控。*

## 1. 摘要

Sirtuin–caspase 的關係是**雙向的**，並作為細胞命運的開關：

- **Sirtuins → Caspases：** sirtuins（以 NAD⁺ 為燃料的去乙醯酶）一般*抑制*依賴 caspase 的細胞凋亡——SIRT1 經 FOXO4/p53，SIRT3 經 CypD/IDH2/Bcl-2，SIRT4/5 則將前 caspase-3/9 與細胞色素 c（Cytochrome c）控制在一定範圍內。SIRT2 是例外（可促進細胞凋亡）。
- **Caspases → Sirtuins：** caspases 回饋以*切割並去活化* sirtuins——Caspase-9/-3 在 DEPDVP(704–709) 位點切割 SIRT1，將其從細胞核重新定位至細胞質，並翻轉為促細胞凋亡、不依賴去乙醯酶的形式，隨後被 TRIM28 泛素化並降解。Caspases 同時也是 SIRT4 的上游負調控因子。

網路文獻**精煉**了 wiki 僅暗示的三件事：(a) 確切的 SIRT1 切割位點及其與 DNA 損傷反應中 TRIM28 的耦合；(b) SIRT1 的核內-抗/細胞質-促命運翻轉；以及 (c) 一條 SIRT1→14-3-3ζ→Caspase-2 軸。

## 2. Wiki（知識庫）現況

**Sirtuins → Caspases（多為抗細胞凋亡）**
- **SIRT1** 經 **FOXO4** 抑制 **Caspase-3 / Caspase-7**（轉化細胞）；去乙醯化 **p53** → 下調 **Bax** + caspase-3；經 NRF2/PGC-1α 抑制 **Caspase-1**（pyroptosis）（`SIRT1.md`、`Caspase-3.md`、`sirtuins in health and disease`）。
- **SIRT2** 是促細胞凋亡的：過度表現提高被切割的 caspase-3 + Bax、降低 Bcl-2；抑制劑 **AGK2** 經 JNK/FOXO3a→Bim 阻斷它（`AGK2.md`）。
- **SIRT3** 具雙重性：在壓力下抗細胞凋亡（延遲 Cyt-C 釋放 →「隨後的 caspase 活化」），在癌症中促細胞凋亡（增強 caspase-9 切割）（`SIRT3.md`、`Roles of SIRT3…`）。
- **SIRT4** 透過 pro-caspase-9/caspase-9 與 procaspase-3/caspase-3 比值預防細胞凋亡（`sirtuins in health and disease` L217）。
- **SIRT5** 去乙醯化 Cyt-C，阻斷 caspase-3 活化。

**Caspases → Sirtuins（回饋）**
- **Caspase-9 + Bcl-xL 在細胞凋亡期間切割 SIRT1**，將其自細胞核移位至細胞質（Ohsawa & Miura 2006，見 `SIRT1.md` 引用）。
- `SIRT4.md` 中，**caspases 被列為 SIRT4 的負調控因子**。

## 3. 圖譜（graphify triples 圖譜）

- **SIRT1** 具 223 度數樞紐，其 caspase 軸經由 FOXO4/p53/Bcl-2 邊連接（`SIRT1.md` 鄰域）。
- 圖譜帶有明確邊 `Caspases --inhibited_by--> SIRT4` —— caspases 位於 SIRT4 的*上游*。
- 最短路徑（graphify）：
  - `SIRT1 → Caspase-3`：**3 跳**（SIRT1 → 心臟肥大 ← Honokiol → Caspase-3）
  - `SIRT1 → Caspase-9`：**3 跳**（SIRT1 → TFEB → Akt → Caspase-9）—— Akt 磷酸化 Caspase-9 的抑制路線。
- 自 {Caspases, Sirtuins, Apoptosis} 的 BFS 回傳 99 個節點，橫跨 MOMP、Apoptosome、XIAP、內在/外在途徑，以及 IAP/caspase 調控層——證實串擾嵌入於核心細胞凋亡圖譜之中。

## 4. Web（當前文獻）— 超越 wiki 的新細節

**(a) SIRT1 的 caspase 切割在機制上被鎖定。** 超越 Ohsawa & Miura（FEBS Lett 2006：caspase-9 *與* -3 切割 Sir2α → 核輸出），一篇 2022 年 *Int. J. Biol. Sci.* 研究（PMID 35541916）顯示：在嚴重 DNA 損傷下，SIRT1 被多種 caspases 於 **C 端位點 DEPDVP(704–709)** 切割，*且*同時被 **TRIM28** 多泛素化。這兩種 PTM 是**相互的**：被切割的 SIRT1 與 TRIM28 結合更好 → 更快降解。這將 SIRT1 切割與 PARP、ATM、DNA-PKcs 的切割並列——一套保守的「拆除修復機器」程序。Wiki 記錄了切割/重定位，但未記錄位點或 TRIM28 耦合。

**(b) SIRT1 的位置決定其判決。** 核內 SIRT1 = 抗細胞凋亡（去乙醯化 p53）；細胞質 SIRT1 = 促細胞凋亡，*依賴 caspase 但不依賴去乙醯酶*（Jin 等人 2007；2025 *Biochem. Biophys. Res. Commun.*「核定位 SIRT1 經去乙醯化 p53 抑制細胞凋亡」）。因此 caspase 切割不只是降解——它把 SIRT1 翻轉為死亡促進者。這將 wiki 單向的「caspases 調控 SIRT1」筆記升級為真正的回饋開關。

**(c) SIRT1 也經 14-3-3ζ 把關 Caspase-2。** 一篇 2011 年 *J. Biol. Chem.* 論文（PMID 21884983）顯示 SIRT1 去乙醯化 **14-3-3ζ**——caspase-2 的直接調控因子；抑制 SIRT1 使細胞對**依賴 caspase-2** 的死亡致敏，並凌駕營養介導的 caspase-2 抑制。Wiki 有 Caspase-2（PIDDosome/DNA 損傷起始者）但缺乏這條 SIRT1→14-3-3ζ→Caspase-2 連結。

**(d) SIRT3 的特定去乙醯化標的被繪出**（Frontiers Cell Dev Biol 2022，PMC9354933）：**CypD**（去乙醯化防止 MPT 孔開啟）、**IDH2**（淬滅 ROS → 心肌細胞中抗細胞凋亡）、**Mcl-1**（去穩定 → 促細胞凋亡）、**GSK-3β**（活化 → Bax 轉位 → 促細胞凋亡）。這在酵素-受質層級解釋了 wiki 的「雙重角色」。

**(e) 但書 — sirtuin 抑制可以是 caspase 非依賴的。** 在血小板中，sirtinol/EX-527/AGK2 經 p53–Bax 觸發類細胞凋亡死亡，但**沒有 caspase-3**（calpain 介導；PMC4424360）。因此「抑制 sirtuin → caspase 活化」是細胞類型依賴的。

**(f) Pyroptosis 交叉連結。** 一篇 2025 年 *Exp. Mol. Med.* caspases 綜述指出 Caspase-3/-7 在非典型 D87 位點切割 **GSDMD**，主動*抑制* pyroptosis——作為 wiki 的 SIRT1→Caspase-1（pyroptosis）抑制筆記的相關脈絡。

## 5. 整合模型

```
Sirtuins（NAD+ 為燃料）──抑制──> Caspase 活化
   SIRT1: FOXO4→↓Casp-3/7；p53 去乙醯化→↓Bax/Casp-3；↓Casp-1（pyroptosis）；14-3-3ζ→↓Casp-2
   SIRT3: CypD/IDH2→抗細胞凋亡；Mcl-1/GSK-3β→促細胞凋亡（視情境）
   SIRT2: 促細胞凋亡（↑被切割的 Casp-3，經 JNK/FOXO3a→Bim）
   SIRT4/5: 將前 caspase-9/3 與 Cyt-C 維持在控制範圍

Caspases ──回饋──> Sirtuins
   Casp-9 + Casp-3 於 DEPDVP(704-709) 切割 SIRT1 → 核→質翻轉
      → 細胞質 SIRT1 轉為「促」細胞凋亡（caspase 依賴、去乙醯酶非依賴）
      → 被切割的 SIRT1 + TRIM28 → 泛素化/降解（DDR，ATM 依賴）
   Caspases 被列為 SIRT4 的負調控因子
```

## 6. 缺口與建議

- Wiki 的「SIRT4 受 caspases 負調控」基於有限的研究；沒有強力的新主要論文浮現——標記為*浮現中*而非已確立。
- **筆記中缺失**：Caspase-2（SIRT1/14-3-3ζ）軸、SIRT1 的 DEPDVP(704-709)/TRIM28 切割耦合，以及核/質命運翻轉。
- **已採取的行動**：建立了 `src/notes/_link/Sirtuin-Caspase Crosstalk.md`，並以發現 (a)–(c) 充實 `SIRT1.md` + `Caspase-3.md`。建議的新實體筆記：[[14-3-3ζ]]、[[TRIM28]]、[[CypD]]、[[IDH2]]、[[AGK2]]。

## 7. 關鍵參考文獻

- Ohsawa S, Miura M. Caspase-mediated changes in Sir2α during apoptosis. *FEBS Lett.* 2006;580(25):5875-9.
- Int J Biol Sci 2022;18:2655-2670 (PMID 35541916) — SIRT1 C 端 caspase 切割 + TRIM28。
- J Biol Chem 2011 (PMID 21884983) — SIRT1 去乙醯化 14-3-3ζ 以調控 Caspase-2。
- Front Cell Dev Biol 2022;10:947357 (PMC9354933) — SIRT3 的粒線體細胞死亡標的。
- Exp Mol Med 2025;57:1470+ — Caspases 作為程序性細胞死亡的主調控因子（GSDMD D87）。
- PMC4424360 — Sirtuin 抑制在血小板中誘導 caspase 非依賴的類細胞凋亡變化。
