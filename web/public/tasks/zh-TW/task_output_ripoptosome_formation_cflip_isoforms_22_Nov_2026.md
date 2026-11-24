---
title: "Feoktistova 等人，Molecular Cell 2011 — 結果與討論回顧：cIAPs 由 cFLIP 亞型調控下的 Ripoptosome 組裝"
description: "Feoktistova 等人（Molecular Cell 2011，10.1016/j.molcel.2011.06.011）結果與討論部分的摘要：cIAPs 阻斷自發 2 MDa Ripoptosome 形成；cFLIP 亞型設定凋亡與 RIPK3 依賴型壞死之間的 Caspase-8 活性擺盪器。"
created: 2026-11-22
updated: 2026-11-23
type: task-output
tags: [cell-death, ripoptosome, ciaps, cflip, apoptosis, necroptosis, 2011]
author: []
---

# Feoktistova 等人，Molecular Cell 2011 — 結果與討論回顧：cIAPs 由 cFLIP 亞型調控下的 Ripoptosome 組裝

## 概念地圖：死亡開關機制

**決策流程：組裝即授權，執行決定死亡。**

```
cIAPs present → modified RIPK1 held by the proteasome → no assembly (survival/apoptosis)

cIAPs lost (Smac mimetic, TLR3/TRIF, MG132, genotoxic stress)
  → modified RIPK1 accumulates → 2 MDa Ripoptosome "licenses" (assembly; necessary but not sufficient)
      ├─ Caspase-8 homodimers   → cleave RIPK1 → disassemble → silent apoptosis
      ├─ FLIP_L-dominant        → cleave RIPK1 → disassemble → survival
      └─ FLIP_S-dominant        → no cleavage → RIPK1 → RIPK3 → MLKL → necrosome → necroptosis
           (requires intact RIPK3 and MLKL; otherwise fully protected)
```

**術語詞典。建議順序：`[[c-FLIP]]` → `[[Caspase-8-c-FLIP Rheostat]]` → `[[Ripoptosome]]` → `[[Smac mimetics]]` → `[[Necroptosis]]` / `[[necrosome]]` / `[[MLKL]]`。每行列出該項目之深入剖析筆記。**

| 術語（本文） | 深入剖析筆記 | 錨定意義 |
|---|---|---|
| 2 MDa Ripoptosome | [`src/notes/cell-death/Ripoptosome.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Ripoptosome.md) | 隨機台內質蛋白（RIPK1, FADD, Caspase-8/10 與 c-FLIP）組裝出的死亡平台；凝膠過濾分類達約 2 MDa（fractions 4–6） |
| "modified RIPK1 pool" | [`Ripoptosome.md`（Regulators）](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Ripoptosome.md) | 隔室化 RIPK1 子集，以蛋白酶醌式細胞凋亡蛋白（proteasome）為目標；MG132 觸發組裝 |
| cIAP gate | [`src/notes/cell-death/cIAPs.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/cIAPs.md) | E3 酵素，存在時阻止組裝；Smac mimetics 迫使其降解 |
| cFLIPL / cFLIPS | [`src/notes/_link/c-FLIP.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/_link/c-FLIP.md) | cFLIPL = 煞車 + 組裝阻斷；cFLIPS = 組裝促進 + 凋亡/活性抑制 |
| "FLIP_L:FLIP_S ratio, not total c-FLIP" | [`src/notes/cell-death/Caspase-8-c-FLIP%20Rheostat.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Caspase-8-c-FLIP%20Rheostat.md) | 各複合體內的局部異構體對至分子畸形對濾，決定命運 |
| "Caspase-8 activity as the rheostat" | [`Caspase-8-c-FLIP%20Rheostat.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Caspase-8-c-FLIP%20Rheostat.md) | FLIP_L 異構體保留一定活性，可將 RIPK1/RIPK3 切割，低於完全活化層次 |
| 組裝與執行 | [`Ripoptosome.md`（Mechanism step 4）](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Ripoptosome.md) | 組裝授權死亡；RIPK3/MLKL 提供執行能力 |
| Necrosome | [`src/notes/cell-death/necrosome.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/necrosome.md) | RIPK1/RIPK3/MLKL 執行複合體 |
| MLKL | [`src/notes/cell-death/MLKL.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/MLKL.md) | 執行者：N 端四路螺旋捲曲，醱酵化與 IP6 輔助的膜孔 → 滲出性 DAMP 釋放 |
| Smac mimetics / IAP antagonists | [`src/notes/cell-death/Smac%20mimetics.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Smac%20mimetics.md) | 雙齒 IBM 模擬物使 cIAP RING domain 雙向化，迅速自動修飾並降解 |
| DAMP release, lytic vs silent | [`src/notes/cell-death/Necroptosis.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Necroptosis.md) | 滲出死亡釋放 ATP、HMGB1、粒線體 DNA、核殘骸，致發炎循環 |

## 總結

缺乏細胞凋亡抑制蛋白（cIAPs）時，一個 2 MDa 內質蛋白平台稱為 Ripoptosome 會自發形成——含受體相互作用激酶 1（RIPK1）、FADD、Caspase-8、Caspase-10 與 cFLIP 亞型——並誘發凋亡或 RIPK3 依賴型壞死。複合體內的 Caspase-8 活性藉由切割結構蛋白來解離複合體；長亞型（cFLIPL）阻斷形成並限制活性，短亞型（cFLIPS）促進組裝並抑制活性，因此當 cIAPs 缺失時 cFLIPS 引起的壞死。

## 結果

### 1. TLR3 誘導的細胞死亡被 cIAPs 阻斷，並經由 RIPK1 激酶依賴、獨立於 TNF 訊號

Toll 活性受體 3（TLR3）配體 poly(I:C) 在 HaCaT、MET-1 與 A5RT3 細胞中誘發細胞死亡；cIAP 對抗劑（compound A）或 TWEAK 預治療致敏 HaCaT 與 MET-1 但非 A5RT3。Caspase-8 與 RIPK1 敲低分別降低與消除 TLR3 死亡；在 cIAPs 缺失的模式下，死亡由 Nec-1（Necrostatin-1，RIPK1 激酶抑制劑）救回，但被 Z-VAD（Z-VAD-FMK，泛 caspase 抑制劑）不救回；Nec-1 單獨不能救回。HMGB1 釋放（Caspase-8 無關錯誤指稱），由 Nec-1 降低但可由 Z-VAD 完全抑制。死亡與自體 TNFR1 無關：TNFR1 敲低與使用 TNFR2-Fc、TRAILR2-Fc、CD95-Fc 阻斷，均不改變 TLR3 死亡。Caspase-8 免疫組織化學顯示 cIAPs 耗竭藥物使 Caspase-8–RIPK1 關聯在 TLR3 刺激下增加；複合體包含 FADD、Caspase-10 p47/p43 與 TRIF，而在 TNFR1 複合體 II 中不包含。原生人類角質細胞（PKs）被 cIAP／XIAP 去除致敏，獨立於 TNFR1。

### 2. cIAPs 阻斷 Ripoptosome 自發形成；RIPK1 為必要

死亡需要 TLR3 表現與 TRIF。cIAPs 缺失時 caspase-8 敲低則減低 TLR3 死亡；RIPK3 敲低不予保護，Z-VAD 獨立保護 — 兩個效應者為 Caspase-8（凋亡）與 RIPK3（壞死）；同時敲低 RIPK3 與 Caspase-8 完全保護。RIPK1 敲低完全保護；Ripoptosome 形成（Caspase-8 IP）需要 RIPK1。IAP 對抗劑單獨產生的 Caspase-8–RIPK1–FADD 關聯不足以致死；需其後 poly(I:C) 刺激將 TRIF 招募至複合體。

### 3. cFLIP 是 Ripoptosome 的關鍵調控

A5RT3（無內源 cFLIP）：cFLIP 敲低使 TLR3 死亡更敏感。在 A5RT3 中，cFLIP 敲低在 cIAPs 缺失時自發形成 Ripoptosome，由 TLR3 刺激放大，且 Caspase-10 在複合體累積。

### 4. cFLIP 亞型以 Ripoptosome 方式調控 poly(I:C) 誘導死亡

在 HaCaT（低內源 cFLIP）中：cFLIPL 在所有情況下阻斷 TLR3 死亡，而 cFLIPS 細胞在 cIAPs 缺失時自發死亡——RIPK1 激酶相依、Z-VAD 抗鬥之死亡。Ripoptosome IP：cFLIPL 在 IAP 對抗劑後抑制 RIPK1／FADD 關聯，cFLIPS 增加 RIPK1 關聯（總 RIPK1 微升）。HeLa 細胞同樣模式：cFLIPS 在 IAP 對抗劑時具阻斷作用，cFLIPL 抑制。PK 中，缺乏 cIAPs 功能時自發形成不可偵測；PK 與 HaCaT 具高內源 cFLIPL，論證自發形成取決於亞型，主要發生在轉化細胞。

### 5. 在 cIAPs 缺失下，cFLIPS 但非 cFLIPL 阻斷 Ripoptosome 內的 Caspase-8 活性

HaCaT-cFLIPS：IAP 對抗劑單獨誘導自發 Ripoptosome 形成（無 TRIF 關聯）。TNFR1 敲低、TNFR1 抗鬥反應阻斷，以及在 TNFR1 敲低細胞的 Caspase-8 IP，均顯示自發 Ripoptosome 形成與 RIPK1 關聯不變；TNFR1 複合體 I/II 分析排除經受體的 Caspase-8 招募——複合體不能稱為 TNFR1 複合體 II。Nec-1 或 RIPK3 敲低完全阻斷 IAP 對抗劑誘導之死亡；Ripoptosome 形成先於死亡偵測。凝膠過濾（Superose 6）：RIPK1、FADD 與 Caspase-8 主要為單体；系列第 4–6 之 2 MDa 複合體在較寬覆蓋范圍內偵測；cIAPs 降解後，Caspase-8／RIPK1／cFLIP 關聯僅出現在 2 MDa 內——cIAPs 阻止 2 MDa 平台的組裝。

### 6. cFLIPS（非 cFLIPL）阻止 Ripoptosome 內的 Caspase-8 活性

HaCaT-cFLIPS Ripoptosome 含未切割 RIPK1（即使存在 Z-VAD-FMK）；對照細胞含切割 RIPK1（p39），提示複合體內存在 Caspase-8 活性。Flag-IP：cFLIPS 細胞中，RIPK1、FADD 與（TLR3 後之 TRIF）共沉積；cFLIPL 細胞中較少組裝，且主要是切割 Caspase-8——Caspase-8／cFLIPL 二聚物留有催化活性（部分子策略清除 RIPK1），卻不足以完全啟動 Caspase-8——即 Caspase-8／cFLIPL 同構物。

## 討論

### 2 MDa Ripoptosome：調控平台

2 MDa 複合體整合多個上游壓力信號，匯聚於 RIPK1；在 cIAP 遺失時自發形成，是但不充分死亡所需。複合體包含 FADD、Caspase-8、Caspase-10 與 cFLIP 亞型；2011 年命名後已被 TNFR1 複合體 II 框架吸收——現代用法常將同一組件呼之為 TNFR 相依的無原責複合體 II 變體，或為 TRIF 招募的 necrosome——但該論文模型得以收斂：RIPK1 為核心支架，平台連結 TLR3（經由 TRIF）至死亡效序。

### cIAPs 的調控

cIAPs 阻止 2 MDa 平台的自發組裝；MG132（N-乙酰亮氨酪氨烯羟胺）單獨誘導自發 Ripoptosome 形成；MG132+IAP 對抗劑的複合形成被抑制。模型：cIAPs 阻止 RIPK1 之修飾池形成 2 MDa 複合體（cIAP 去除被降解的「修飾 RIPK1」）。

### Caspase-8 活性作為死亡質量調控

複合體內的 Caspase-8 活性解離結構蛋白（RIPK1）以消散複合體；cFLIPL–Caspase-8 同構物保留部分活性，足以切割 RIPK1 但不足以完全啟動 Caspase-8。cIAPs 缺失時 cFLIPS 抑制此活性，累積 RIPK1 誘導 RIPK3 依賴型壞死——Caspase-8、cFLIPL 與 cFLIPS 之間的雙穩態開關設定凋亡 vs 壞死。

### 細胞類型特異性

自發組裝主要發生在轉化細胞（HaCaT-cFLIPS）；PK 高內源 cFLIPL，未見自發組裝。

### 翻譯提案

論文建議將 TLR3 激動劑與 IAP 對抗劑（SMAC mimetic）併用；指出 cFLIP 為關鍵調控者與潛在標靶。

### 論文遺留未決問題

Caspase-8／cFLIPL／cFLIPS 在複合體內的全部立體比例；cIAPs 附加 RIPK1 之精確 ub 掛鍵；自發組裝在原生細胞中是否發生；RIPK3–MLKL 壞死機制為荷反對 RIPK1 激酶抑制之獨立藥物靶；以及現代回顧中組裝時新的 TRIF 招募 necrosome 是否對應本 2 MDa 平台。
