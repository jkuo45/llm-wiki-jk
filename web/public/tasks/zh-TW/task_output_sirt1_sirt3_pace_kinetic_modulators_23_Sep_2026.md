---
title: "SIRT1/SIRT3 步調與動力學調節劑 — 設定反應速度的療法（非古典開／關）"
description: 以反應速度、輔因子通量與催化效率（而非二元抑制／活化）為框架的 SIRT1 或 SIRT3 療法網路研究 — 含 Guan 2024 穩態 SIRT3 活化劑（化合物 5329973 / 5689785）與 CCM-SRX 管線。
created: 2026-09-23
updated: 2026-09-23
tags: [task-output, sirt1, sirt3, enzyme-kinetics, nad-metabolism, pace-of-aging, cd38, nampt, drug-discovery]
---

# SIRT1/SIRT3 步調與動力學調節劑

產生時間：23_Sep_2026 03:10 PM PDT。
脈絡：兩輪網路研究（23_Sep_2026），以**速度／步調**為框架探討 SIRT1/SIRT3 療法 — 葉重改變酵素運行速度（K~m~、k~cat~/K~m~、輔因子週轉）而非開關式切換的化合物。來源為外部（網路）；知識庫交叉引用另行標註。

## 框架

三條非二元路徑決定 SIRT1/SIRT3 的反應速率：

1. **動力學調節劑** — 改變酵素本身的 K~m~ 或催化效率（k~cat~/K~m~）。
2. **輔因子通量控制** — 改變 [[NAD+]]（共底物）的供應／衰减速率，在不結合 sirtuin 的情況下設定反應速度。
3. **老化步調終點指標** — 以衰減率生物標記（如 [[DunedinPACE]]）而非靶點佔有率來衡量的介入。

## 路徑一 — 動力學調節劑

### SIRT1 STAC 是 K~m~-調節劑，不是開關
- Resveratrol / SRT1720 / SRT2104 的文獻機制：**降低乙醯胜肽底物的 K~m~**，不改變 V~max~ 或 NAD+ 的 K~m~（Pacholec 2010, JBC, PMC2832982；機制綜述 PMC3327882）。
- 效應取決於底物 — 需要螢光基團或疏水性 +1/+6 殘基；天然 PGC-1α/FOXO3a 僅在部分測定中回應。
- 活化效應需要 [[Glu230]] 別構位點（知識庫：`sirtuins/Glu230.md`；結構 Nat Commun 2015, ncomms8645）。
- 結論：「SIRT1 活化劑」≈「SIRT1 動力學調節劑，其效應取決於你計時的是哪個底物」。知識庫錨點：[[STACs]]、[[Sirtuin Activators]]。

### SIRT3 穩態催化效率調節劑 — 最純粹的速度故事
- **Guan et al., *Phys Rev X* 14, 041019（2024 年 10 月 22 日）** —「SIRT3-Activating Compounds that Fully Recover Catalytic Activity under NAD+ Depletion」（DOI 10.1103/PhysRevX.14.041019）。
  - 約 120 萬化合物虛擬篩選 → 兩個命中：**5329973** 與 **5689785**。
  - 機制：*機制式活化* — 調節劑改變活性位點局部的構象自由度；**相對於 NAD+ 的催化效率約 2 倍**（k~cat~/K~m,NAD+）；據稱為首個*穩態* SIRT3 活化劑。
  - 在** 50% NAD+**（衰老狀態濃度）下完全恢復 SIRT3 活性；在多種衰老研究細胞株中有效。
  - [[Honokiol]] 重新分類：非穩態（短暫活化劑，穩態下反而*抑制*）。5689785 在 4 個 MnSOD 賴氨酸中的 3 個勝過 honokiol 與 NMN；K68 則 NMN 勝出。
- 相關骨架（獨立於 NAD+/底物，提高底物週轉）：1,4-二氫吡啶 MC2789/MC2971/3c（PMC10388363）；1,4-DHP Chem Biol 2019 綜述（PMC9653166）。
- 正交別構途徑：**SKLB-11A**（PDB 9KTK），亞微摩爾級，獨特 Leu298 位點，以心臟保護為導向。

## 路徑二 — 輔因子通量步調設定者（不結合 sirtuin）

| 節點 | 機制 | 狀態 |
| --- | --- | --- |
| [[CD38]] | 隨年齡升高的 NADase；**經由 [[SIRT3]]** 驅動年齡相關的 NAD 下降（Camacho-Pereira, *Cell Metab* 2016） | 臨床前：`CD38 inhibitor 78c`、芹菜素（知識庫：`sirtuins/CD38 inhibitor 78c.md`） |
| [[NAMPT]] | 速率限制的補救合成酵素；2025 年發現的 AMP/ATP 能量壓力開關（Mol Cell, PMID 40505662） | 工具化合物 P7C3 / FK866；無與臨床 sirtuin 連結的藥物 |
| [[NMN]] / [[Nicotinamide Riboside]] / MIB-626 | 提高 [NAD+] → 在不結合酵素的情況下提高反應速度 | HK-660S Phase 2a（PSC；牽動 SIRT1+SIRT3，ALP −15.2%，PMC12016592）；MIB-626 Phase 1/2 AD（[NCT05040321](https://clinicaltrials.gov/study/NCT05040321)，2026 年完成） |
| NAD+ 週轉速率 | 追蹤老年成人是否消耗 NAD+ 更快的試驗 | [NCT06882096](https://clinicaltrials.gov/study/NCT06882096)（Brigham，2025–27） |
| 前體動力學 | 供應側的頭對頭數據 | Cuenoud 2026 *Nat Metab*：NMN ≈ NR 在 14 天內使全血 NAD+ 翻倍（經腸道菌群 → NA）；NAM 僅短暫效果 |

古典 STAC 臨床結果（多已終止）：GSK/Sirtris SRT2104/2379/3025 — 約 8 項試驗多為中性，開發停止（Frontiers 2021, fphys.2021.752117）。Selisistat/EX-527（SIRT1 抑制劑，亨廷頓病）劣於安慰劑 — 抑制途徑，僅作對照（知識庫：[[EX-527]]）。

## 路徑三 — 老化步調終點指標

- [[DunedinPACE]]（Belsky 2022, eLife 73420）為標準步調指標；熱量限制減緩了老化步調（Belsky 2018）。
- **尚無以 DunedinPACE 為主要終點的已發表 SIRT1/SIRT3 靶向試驗** — NAD+ 試驗測的是 NAD 水平，不是步調。

## 深入探討 — 化合物 5329973 / 5689785

### 鑑定（PubChem 確認）

| | **5329973** | **5689785** |
| --- | --- | --- |
| 分子式 / MW | C₁₄H₁₁Cl₃N₄O₂S / 405.7 | C₂₂H₃₀N₃O₃S / 416.6 |
| 骨架 | 吡唑並[3,4-d]嘧啶-4-酮；2,4,6-三氯苯基；3-甲硫基；6-(1-羥乙基) | 苯磺醯胺–苯甲醯胺；二乙氨基乙基尾部；二甲苯基 |
| XLogP / TPSA | 3.5 / 103 Å² | 3.6 / 75.9 Å² |
| InChIKey | `KXGQXXLNTIYYLU-UHFFFAOYSA-N` | `LJKKGHCHTDPEOF-UHFFFAOYSA-N` |
| 立體中心 | 1 個未定義立體中心 | 無 |

GeneCards 已將 **「SIRT3 activator 5329973」** 列為策展的靶點交互作用（類別：合成有機物；機制：活化）。

### 來源
- 論文：Guan, Dumpati, Munshi, Chall, Bose, Rahnamoun, Reverdy, Errasti, Delacroix, Ghosh、**Chakrabarti**（2024）。所屬：Chakrabarti Advanced Technology（新澤西／印度）、PMC Isochem（法國）、McGill。
- 伴隨 PDB 條目：[8V5U](https://www.rcsb.org/structure/8V5U)（1.48 Å，SIRT3+p53-AMC+honokiol）、8V15、8V2N — 均為 honokiol/carbaNAD 複合物；**無 5329973/5689785 與 SIRT3 的共晶結構**，與「無固定別構位點」這一宣稱要點一致。
- 前驅篩選論文：Reverdy et al., *Bioorg Med Chem* 73:116999（2022），PMID 36191547 — DEL + 虛擬篩選，「最佳活化劑強於 honokiol」，非典型結合位點。

### 開發狀態（23_Sep_2026 查核）
- **公司**：CCM Biosciences（Chakrabarti Capital Management）；創辦人兼執行長即論文資深作者 — 科學即公司平台（EurekAlert 新聞稿 2025 年 1 月 8 日）。
- **主力資產 CCM-SRX**：SIRT3 激動劑；適應症阿茲海默症、帕金森氏症、不孕症（IVM/IVF/niPGT）。**最高階段：臨床前**（PatSnap Synapse，2026 年 8 月更新）。公司網站宣稱 1 µM 下 200% 活化；小鼠試驗進行中；「優於 NAD+ 補充劑與其他 sirtuin 活化劑」。
- **試驗宣稱 vs 現實**：2025 年 1 月新聞稿稱管線「於 2025 年進入療效臨床試驗」。**ClinicalTrials.gov 上不存在 CCM-SRX 或這些化合物的註冊**（2026 年 9 月再查證；nmn.com 於 2025 年 3 月已指出同一落差）。
- **尚無已發表的 5329973/5689785 體內療效論文** — 小鼠數據僅存在於新聞稿。公開紀錄中無 PK、EC₅₀ 或口服生物利用度數據。

### 結論
兩個出自已發表動力學機制論文的工具化合物，目前以 CCM-SRX 之名預臨床保存於作者的公司內。「2025 年臨床試驗」的宣稱在約 18 個月後仍未經證實。它們是目前最好的例子：**在輔因子衰退下改變催化速度**來靶向 SIRT3，而非古典活化。

## 知識庫交叉引用

- [[SIRT1]]、[[SIRT3]] — 兩個靶點酵素。
- [[STACs]]、[[Sirtuin Activators]]、[[Glu230]] — SIRT1 K~m~-調節機制。
- [[Honokiol]] — Guan 2024 重新分類為非穩態；知識庫筆記可補上此動力學註記。
- [[CD38]]、`sirtuins/CD38 inhibitor 78c.md`、[[NAMPT]] — 輔因子通量步調設定者。
- [[NMN]]、[[Nicotinamide Riboside]]、[[NAD+]] — 供應側動力學。
- [[DunedinPACE]] — 老化步調終點指標（SIRT 試驗尚未使用）。
- [[EX-527]] — 抑制途徑對照（亨廷頓病失敗）。
- 若由此任務升格的新實體建議：`Compound 5329973`、`Compound 5689785`、`CCM-SRX`（或合併為一則 `SIRT3 Steady-State Activators` 筆記）。

## 相關任務

- `task_output_sirt1_ktype_allosteric_activation_14_August_2026.md` — SIRT1 K 型（降低 K~m~）機制；本任務的路徑一是該發現加上 SIRT3 對應物的速率／步調推廣。
- `task_output_turnover_rate_tradeoffs_22_Sep_2026.md` — 細胞週轉率框架（「步調」的相鄰用法）。
