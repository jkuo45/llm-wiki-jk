---
title: ARH3 與 PAR 誘導的 AIF 釋放 — 研究綜述
description: ARH3 類 PARG 活性，以及 PAR 至 AIF 釋放的機制（直接結合 vs calpain vs BAX vs mPTP）。
created: 2026-09-06
updated: 2026-09-06
type: task-output
tags:
  - arh3
  - parg
  - par
  - aif
  - parthanatos
  - adp-ribosylation
---

# ARH3 與 PAR 誘導的 AIF 釋放 — 研究綜述

生成於 06_Sep_2026。Wiki 來源：[[ARH3]]、[[PAR]]、[[PARP1]]、[[Parthanatos]]、[[ADP-ribosylation]]。網路來源見內文引用。

## 1. ARH3 — 39-kDa 類 PARG 水解酶

最初鑑定：Oka S.、Kato J.、Moss J. *Identification and characterization of a mammalian 39-kDa poly(ADP-ribose) glycohydrolase.* J Biol Chem 2006；Mueller-Dieckmann 等人 2006 年 apo 晶體結構。

- ARH 家族：ARH1/ARH2/ARH3，皆約 39 kDa。基因 `ADPRHL2`，6 個外顯子，363 個胺基酸，N 端粒線體定位序列。
- Mg2+ 依賴性雙核中心（Asp77/Asp78/Asp314/Asp316，催化性 Glu41）；對 C-1'' 位置的 alpha 異頭物具立體專一性。
- 體外受質（2006 年觀點）：[[PAR]] O-糖苷鍵、O-acetyl-ADP-ribose、alpha-[[NAD+]]；僅在高酶量下具微量 Arg-ADPr 活性（ARH1 才是真正的 Arg 去除酶，交互 PAR 活性 <1%）。
- 結構：狹窄空腔僅能容納末端 ADP-ribose → 嚴格的**外切**糖苷酶。[[PARG]]（macrodomain，Glu755/Asp737，無金屬）兼具內切與外切活性，偏好長的蛋白結合鏈，留下末端 MAR。

2017 年以來的修正（Fontana、Palazzo、Gibbs-Seymour）：

- 主要生理受質是 [[PARP1]]/HPF1 所寫入的**絲胺酸-MAR**。ARH3 是唯一已知的 Ser 去 MAR 化酶；相較之下 PAR 裂解緩慢。
- 定位約 65% 胞質 / 25% 粒線體基質 / 10% 細胞核。唯一具活性的粒線體 PAR 降解酶（PARG55/60 缺乏第 5 外顯子，無活性）。
- `Arh3-/-`：H2O2 → 10 分鐘時核內 [[PAR]] → 30 分鐘時胞質 → [[AIF]] 釋放 → 非 caspase 依賴性死亡（[[Parthanatos]] 煞車）。
- 疾病：雙等位基因 `ADPRHL2` → CONDSIAS（壓力誘發的兒童神經退化、共濟失調、癲癇）。PARP 抑制劑可挽救。
- 治療：短 PAR 寡聚物（<5 單位）是 [[PARG]] 的不良受質；ARH3 補償 → 雙重 PARG/ARH3 抑制的理論依據。選擇性 ARH3 抑制劑處於臨床前開發階段。

Vault 變更：建立 `src/notes/_link/ARH3.md`；於 [[PAR]]、[[PARP1]]、[[Parthanatos]]、[[ADP-ribosylation]] 中連結；向 `src/notes/_link/_triples.json` 新增 10 條三元組（source_document ARH3.md）。

## 2. [[PAR]] 如何誘導 [[AIF]] 釋放 — 仍未定論

使用者假說（「mPT 或粒線體 BAX 轉位」）是當前圖景的一半。依 2025 年綜述 *More questions than answers*（PMC11445734），有四種模型：

### 模型 A — PAR-AIF 直接結合（證據最充分）

- Wang 等人 2011 Sci Signal：[[AIF]]-D3 PAR 結合模體 Arg588/Lys589/Arg592，與 DNA 結合位點不同。
- PAR 結合缺陷突變體保留氧化酶/FAD/DNA 活性，但**不被釋放、無核轉位、無死亡**。
- Yu 等人 2009：約 30% 的 [[AIF]] 位於外膜胞質側；此池以未切割的 62 kDa 形式快速釋放。解釋了 [[AIF]] 先於 cytochrome c 的現象。

### 模型 B — calpain 切割（內膜池，依模型而異）

- 支持：Polster 2005、Cao 2007 — 經由 [[TRPM2]] 的 Ca2+ → calpain I 將 62 kDa 切為 57 kDa tAIF，自內膜脫離；單獨 Bid/Bax 僅釋放 cytochrome c 而不釋放 [[AIF]]；calpeptin/CsA 可阻斷。
- 反對：Wang 2009 J Neurochem — 典型 MNNG/NMDA 釋放的是**未切割的 62 kDa**；calpastatin/KO 無法阻斷。缺血顯示切割；典型 parthanatos 並不需要切割。

### 模型 C — BAX / 外膜通透化

- Moubarak 2007：PARP1 → calpains → [[BAX]] 轉位 → OMP。Bax KO 的保護效果等同 DPQ，而 [[NAD+]] 仍下降。
- 缺口：從核內 [[PAR]] 到 [[BAX]] 活化的連結不明；無證據顯示 [[AIF]] 穿過 Bax 孔（NBK6179）。

### 模型 D — 通透性轉換孔

- CsA 在部分模型中具保護作用，但同時保留粒線體 [[NAD+]]；在分鐘級時間尺度上無法分辨方向性（mPT 釋放 [[AIF]] vs [[AIF]] 流失導致 mPT）。

工作綜述：外膜 [[AIF]] ＝直接 [[PAR]] 結合釋放；內膜 [[AIF]] 需要第二重打擊（calpain 及／或 BAX-MOMP 及／或 MPTP），依刺激與細胞類型而定。存在 [[AIF]] 非依賴性 parthanatos（視網膜、巨噬細胞）。

## 3. 開放問題 / 後續工作

- [[PARG]] 筆記仍缺失（[[PAR]]、[[PARP1]]、[[Parthanatos]]、[[ARH3]] 的連結摘要中已建議）。
- [[ARH1]] / HPF1 筆記缺失；建議作為後續實體筆記。
- 無 [[AIF]] 釋放的直接抑制劑；PAR 結合缺陷突變體僅為概念驗證；PAANIB-1 作用於下游 [[MIF]] 核酸酶。
- 性別二型性（男性 PARP/AIF vs 女性 caspase）在 [[MIF]] 步驟尚無驗證的差異。

## 來源

- Oka 等人 2006 JBC；Mueller-Dieckmann 等人 2006；Mashimo/Kato/Moss 2014 DNA Repair (PMC4241382)；Cells 2022 ARH 綜述 (MDPI 11:3853)。
- Pourfarjam 2021；Rack 2020 Genes Dev；PMC6309922、PMC6139573、PMC8141533（ARH3 機制）。
- Wang 2009 Exp Neurol；Wang 2009 J Neurochem；Wang 2011 Sci Signal；Yu 2009 ASN Neuro；Polster 2005 JBC；Cao 2007 J Neurosci；Moubarak 2007 MCB；Fatokun 2014；PMC3976618；IJMS 2022 23:7292；PMC11445734。
