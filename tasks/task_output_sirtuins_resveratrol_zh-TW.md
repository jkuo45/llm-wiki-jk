---
title: "白藜蘆醇與 SIRT1 及其他 sirtuin 調節劑"
type: document
category: document
aliases:
  - Resveratrol Sirtuin Activators
  - SIRT2-SIRT7 Modulators
  - Dietary Sirtuin Sources
source: https://aistudio.google.com/u/0/prompts/1kUJDpdDMR88wWnNR_7kpQlfBdqhbzW7C
author:
published:
created: 2026-07-02
updated: 2026-07-05
description: "白藜蘆醇在 SIRT1 活化中的作用、標靶其他 sirtuins (SIRT2–SIRT7) 的化合物、膳食來源與治療劑量"
tags:
  - gemini
  - clippings
  - sirtuins
  - resveratrol
---

# 白藜蘆醇、Sirtuins 與膳食來源

## 白藜蘆醇與 SIRT1

**[白藜蘆醇](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/Resveratrol.md)**（一種天然多酚化合物，存在於葡萄、莓果和紅酒中）與 **[SIRT1](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT1.md)**（Sirtuin 1，一種 [NAD+](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/NAD+.md) 依賴性去乙醯酶）之間的相互作用，是分子生物學中研究最為透徹的路徑之一。SIRT1 在調節細胞健康、代謝恆定、發炎反應、粒線體功能及老化方面扮演關鍵角色。

早期對於白藜蘆醇活化 SIRT1 的機制曾引發科學爭議。然而，後續研究已釐清白藜蘆醇透過**直接變構活化**與**間接網路調控路徑**的組合作用來活化 SIRT1。

### SIRT1 活化的雙重機制

白藜蘆醇透過兩條主要且相互關聯的路徑活化 SIRT1：直接分子結合與間接細胞內訊號傳導。

```
[ Resveratrol ]
                      /           \
         (Direct Pathway)       (Indirect Pathway)
                |                       |
       Binds SIRT1 NTD            Inhibits [[PDE4]]
      (e.g., [[Glu230]] residue)         |
                |                  Increases [[cAMP]]
         Allosteric change              |
                |                  Activates [[Epac1]] → Ca2+ Release
     Lowers Km for substrates           |
                |                  Activates [[AMPK]]
                |                       |
                |                  Upregulates [[NAMPT]] → Increases [[NAD+]]
                |                       |
                \                       /
                 [ Hyperactivated SIRT1 ]
```

#### A. 直接（變構）活化

早期體外研究顯示白藜蘆醇直接活化 SIRT1，但隨後受到質疑，因為這些實驗使用了非生理性的螢光標記胜肽基質。批評者認為活化效果是螢光標記產生的實驗假象。

後續的結構生物學與生化研究釐清了此爭議，證實**直接變構活化確實存在，但具有基質依賴性**：

- **結合位點：** 白藜蘆醇結合於 SIRT1 N 端結構域 (NTD) 的特定區域（具體需要 **穀氨酸 230 (E230)** 殘基）。
- **構象變化：** 結合後，白藜蘆醇穩定 SIRT1 NTD 與基質之間的交互作用。
- **基質選擇性：** 此結合誘發構象變化，降低 SIRT1 對特定目標蛋白的米氏常數 (Km)。這意味著 SIRT1 對關鍵生理基質（如 **[PGC-1α](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/PGC-1α.md)** 和 **[FOXO3a](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/FOXO3a.md)**）產生更高的親和力，即使在較低的基準水平下也能促進其去乙醯化。

#### B. 間接活化（AMPK-PDE 軸）

雖然直接結合確實發生，但白藜蘆醇體內作用的大部分是透過提高細胞內菸鹼醯胺腺嘌呤二核苷酸 ([NAD+](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/NAD+.md)) 水平間接介導的，而 NAD+ 是 SIRT1 活性必需的輔基質。

1. **磷酸二酯酶 (PDE) 抑制：** 白藜蘆醇作為環磷酸腺苷 ([cAMP](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/cAMP.md)) 磷酸二酯酶（具體為 **[PDE4](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/PDE4.md)**）的競爭性抑制劑。
2. **cAMP 累積：** 抑制 PDE 可防止 cAMP 降解，導致細胞內 cAMP 累積。
3. **鈣訊號傳導：** 高濃度 cAMP 活化 **[Epac1](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Epac1.md)**（直接被 cAMP 活化的交換蛋白），觸發鈣離子 (Ca2+) 從內質網釋放到細胞質中。
4. **AMPK 活化：** 細胞質中 Ca2+ 的激增活化 **[CaMKKβ](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/CaMKKβ.md)**（鈣調蛋白依賴性蛋白激酶激酶 beta），進而磷酸化並活化 **[AMPK](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/AMPK.md)**（AMP 活化蛋白激酶）。
5. **NAD+ 合成：** 活化的 AMPK 增加 **[NAMPT](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/NAMPT.md)**（菸鹼醯胺磷酸核糖轉移酶）的表達，此為 [NAD+](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/NAD+.md) 補救合成途徑的限速酶。
6. **SIRT1 刺激：** 細胞 NAD+ 水平的提升為 SIRT1 提供底物，顯著增加其去乙醯酶活性。

### SIRT1 活化的下游效應

SIRT1 被白藜蘆醇活化後，會去乙醯化多種下游轉錄因子和輔活化因子，觸發一系列存活和代謝適應反應：

#### PGC-1α（粒線體生物合成）

- **機制：** SIRT1 去乙醯化 **[PGC-1α](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/PGC-1α.md)**（過氧化物酶體增殖物活化受體γ輔活化因子 1-alpha）。
- **結果：** 去乙醯化的 PGC-1α 變為活化狀態，遷移至細胞核驅動核基因和粒線體基因的轉錄。這導致 **[粒線體生物合成](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Mitochondrial Biogenesis.md)**、氧氣消耗增加以及氧化磷酸化 (OXPHOS) 增強。

#### FOXO 轉錄因子（抗壓性與自噬）

- **機制：** SIRT1 去乙醯化 **FOXO1** 和 **[FOXO3a](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/FOXO3a.md)**。
- **結果：** 這使 FOXO 介導的轉錄從促凋亡基因轉向抗壓基因。它上調內源性抗氧化酶（如 **SOD2** 和過氧化氫酶），並誘導自噬基因，使細胞能夠清除受損蛋白質和細胞器。

#### NF-κB（抗發炎效應）

- **機制：** SIRT1 去乙醯化 **[NF-κB](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/NFKB.md)**（核因子 kappa B）的 **p65 亞基**。
- **結果：** 去乙醯化抑制 NF-κB 的轉錄活性，阻止其與 DNA 結合。這下調促發炎細胞因子（如 **TNF-α**、**IL-1β** 和 **IL-6**）的表達，使白藜蘆醇成為高度有效的抗發炎劑。

#### p53（細胞存活 vs. 凋亡）

- **機制：** SIRT1 去乙醯化腫瘤抑制因子 **[p53](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/p53.md)**。
- **結果：** p53 的去乙醯化降低其轉錄活性，在中等程度的細胞壓力下抑制 p53 介導的凋亡。這使細胞有時間進行 DNA 修復，而非進行程序性細胞死亡。

### 治療意涵

白藜蘆醇-SIRT1 軸在多個健康領域已被廣泛研究：

- **代謝健康：** 透過活化 AMPK/SIRT1/PGC-1α 通路，白藜蘆醇模擬了 [熱量限制](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/Caloric Restriction.md) 的許多生理效應。在飲食誘導肥胖的動物模型中，已顯示其可改善 [胰島素敏感性](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Insulin Sensitivity.md)、減少肝脂肪變性（脂肪肝）並降低血糖水平。
- **心血管保護：** 白藜蘆醇活化內皮 SIRT1，增加 **eNOS**（內皮一氧化氮合酶）的表達和活性。這促進一氧化氮的產生，導致血管舒張、改善血壓調節並減少血管壁的氧化損傷。
- **神經保護：** 在神經退行性疾病模型中，白藜蘆醇介導的 SIRT1 活化促進錯誤摺疊蛋白聚集物的清除並增強神經元存活。

### 限制與科學注意事項

儘管在實驗室環境中觀察到強大的生物化學效果，將白藜蘆醇的 SIRT1 活化特性轉化為人類臨床治療面臨重大障礙：

> [!warning] 生物利用度挑戰
> 白藜蘆醇具有高度親脂性，可快速被人類胃腸道吸收，但會經歷廣泛的首過代謝（在腸道和肝臟中快速葡萄糖醛酸化和硫酸化）。極低濃度的游離活性白藜蘆醇能到達體循環和目標組織。

1. **毒物興奮效應（雙相性）：** 白藜蘆醇常表現出雙相劑量反應曲線。在低至中等濃度下，它作為輕度壓力源觸發有益的適應性反應（SIRT1 活化、抗氧化酶上調）。然而，在極高濃度下，根據細胞類型不同，可能誘發脫靶效應、細胞週期停滯或促氧化狀態。
2. **臨床一致性：** 由於配方、劑量和個體代謝速率的差異，臨床試驗結果不一致。

---

## SIRT2–SIRT7 調節劑

雖然 SIRT1 是 sirtuin 家族中研究最多的成員，但哺乳動物還擁有另外六種 sirtuins（**[SIRT2](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT2.md) 到 [SIRT7](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT7.md)**），定位於不同的細胞區室。與 SIRT1 一樣，它們都是 NAD+ 依賴性酶，但展現出多樣的催化活性——包括去乙醯化、去丙二醯化、去琥珀醯化和 [ADP-核糖基化](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/ADP-ribosylation.md)。

多年來，研究者已鑑定出多種能調節這些其他 sirtuins 的天然和合成化合物。最顯著的進展出現在 **[SIRT3](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT3.md)** 和 **[SIRT6](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT6.md)** 方面，而其他 sirtuins 則呈現獨特的結構挑戰，使得抑制比活化更為可行。

### SIRT3 活化劑（粒線體去乙醯酶）

[SIRT3](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT3.md) 是粒線體內的主要去乙醯酶。它去乙醯化參與三羧酸 (TCA) 循環、脂肪酸氧化、尿素循環和氧化磷酸化的酶。

#### 關鍵化合物

- **[厚朴酚](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Honokiol.md) (HKL)：** 一種天然雙酚木脂素，提取自 *Magnolia grandiflora*（荷花玉蘭）的樹皮。
- **[二氫楊梅素](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Dihydromyricetin.md) (DHM)：** 一種天然黃酮類化合物，存在於 *Ampelopsis grossedentata*（藤茶）等植物中。
- **1,4-二氫吡啶 (DHPs)：** 合成化合物，經過工程設計可變構活化粒線體 sirtuins。

```
[ Honokiol / DHM ]
                             │
                             ▼
                    Binds Direct to [[SIRT3]]
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
    Deacetylates [[MnSOD]]            Deacetylates [[OSCP]]
            │                                 │
     Scavenges ROS /                  Boosts ATP Synthase /
    Limits Mitochondria Damage        Improves Respiration
```

#### 作用機制

- **直接結合與表達：** 已顯示厚朴酚與 SIRT3 發生物理交互作用，增加其去乙醯酶活性並上調其蛋白表達。
- **標靶 MnSOD（錳超氧化物歧化酶）：** 活化後，SIRT3 去乙醯化 MnSOD（在賴氨酸殘基 K68 和 K122 處）。去乙醯化的 MnSOD 變為高度活化狀態，將有害的超氧自由基轉化為過氧化氫，大幅降低粒線體氧化壓力。
- **增強 ATP 合成：** SIRT3 去乙醯化 **[OSCP](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/OSCP.md)**（寡黴素敏感性賦予蛋白），這是粒線體 F1Fo-ATPase 的一個亞基。此修飾優化了 ATP 合酶的偶聯效率，提升細胞能量產出同時最小化粒線體「洩漏」和分裂。

#### 生理影響

- **心臟保護：** 已顯示厚朴酚介導的 SIRT3 活化可逆轉 [心臟肥大](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Cardiac Hypertrophy.md)，並在臨床前模型中保護心臟組織免受 doxorubicin 引起的心臟毒性，同時不削弱該藥物的抗腫瘤活性。
- **抗纖維化效應：** 在腎臟中，用厚朴酚活化 SIRT3 可抑制 NF-κB/TGF-β1 通路，限制腎小管間質纖維化。

### SIRT6 活化劑（細胞核去乙醯酶與去醯化酶）

[SIRT6](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT6.md) 是一種核支架蛋白，對 DNA 修復、端粒維持、糖酵解抑制和基因組穩定性至關重要。獨特的是，SIRT6 對去除組蛋白上的長鏈脂肪醯基（如豆蔻醯基和棕櫚醯基）而非簡單乙醯基具有極高的親和力。

#### 關鍵化合物

- **[UBCS039](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/UBCS039.md)：** 首個合成的、特異性 SIRT6 變構活化劑。
- **[MDL-800](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/MDL-800.md) 與 [MDL-801](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/MDL-801.md)：** 高效、可穿透細胞的合成 SIRT6 變構活化劑。
- **[矢車菊素](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Cyanidin.md)：** 一種天然花青素（存在於深色莓果中），在某些體外測試中能將 SIRT6 活性提高超過 50 倍。

```
[ UBCS039 / MDL-801 / Cyanidin ]
                                │
                                ▼
               Binds Allosteric Hydrophobic Pocket
                                │
                                ▼
            Stabilizes Active Conformation of [[NAD+]]
                 and Histone Acyl Substrates
                                │
            ┌───────────────────┴───────────────────┐
            ▼                                       ▼
  Deacetylates Histones (H3K9 / H3K56)     Induces Autophagy &
            │                              Restricts Glycolysis
     Improves DNA Repair /                          │
     Maintains Genomic Stability           Suppresses Tumor Growth
```

#### 作用機制

- **標靶獨特的疏水口袋：** SIRT6 具有「展開」的結構，包含一個獨特的 elongated 疏水口袋，用於容納長鏈脂肪醯基。晶體結構顯示 **MDL-801** 和 **UBCS039** 結合於此遠端變構口袋。
- **構象穩定化：** 此結合穩定 NAD+ 輔基質和目標乙醯化/醯化胜肽基質的催化活性構象，促進有效的去乙醯化。
- **表觀遺傳調控：** SIRT6 活化導致染色質上 **H3K9ac** 和 **H3K56ac** 的快速去乙醯化，允許染色質壓縮並促進雙股斷裂修復機制的招募。

#### 生理影響

- **腫瘤調控：** 透過抑制糖酵解（Warburg 效應）並驅動腫瘤細胞走向自噬，UBCS039 等 SIRT6 活化劑已在多種癌細胞株中展現腫瘤抑制活性。
- **器官保護：** UBCS039 已在急性肝衰竭模型中進行評估，結果顯示其以 SIRT6 依賴性方式顯著減輕氧化壓力和發炎損傷。

### SIRT5 活化劑（粒線體去琥珀醯酶與去丙二醯酶）

[SIRT5](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT5.md) 位於粒線體內，但幾乎不具去乙醯酶活性。相反，其催化口袋含有特定殘基（Arg105 和 Tyr102），傾向於帶負電荷的修飾，使 SIRT5 成為活性的**去琥珀醯酶**、**去丙二醯酶**和**去戊二醯酶**。

- **化合物：** 已合成出選擇性活化 SIRT5 的特定 **1,4-二氫吡啶 (DHP)** 衍生物，但與 SIRT1、3 和 6 相比，特定臨床候選物的研究仍處於較早期階段。
- **機制與生理影響：** SIRT5 活化去琥珀醯化 **[CPS1](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/CPS1.md)**（氨基甲醯磷酸合成酶 1），這是尿素循環的限速酶。此作用調節氨的解毒，並在禁食或高蛋白飲食條件下維持代謝通量。

### 缺乏顯著活化劑的 Sirtuins（SIRT2、SIRT4、SIRT7）

對於其餘的 sirtuins，治療策略通常側重於**抑制**而非活化，或直接小分子活化已被證明難以實現。

#### SIRT2（細胞質去乙醯酶）

- **範式：** SIRT2 去乙醯化微管蛋白，在細胞週期進展、髓鞘形成和髓鞘維持中扮演關鍵角色。
- **抑制劑優於活化劑：** 直接活化 SIRT2 很少被尋求，因為其過度活化與神經毒性相關。相反，**SIRT2 抑制劑**（如 **[AGK2](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/AGK2.md)**、**AK-7** 和 **[SirReal2](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SirReal2.md)**）正被廣泛研究用於帕金森氏症和亨廷頓氏症等神經退行性疾病，因為阻斷 SIRT2 有助於恢復微管穩定性並保護神經元免受聚集物誘發的毒性。

#### SIRT4（粒線體硫辛醯胺酶與 ADP-核糖轉移酶）

- **挑戰：** [SIRT4](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT4.md) 的去乙醯酶活性極弱。它主要作用於 ADP-核糖基化並抑制 **[麩氨酸脫氫酶](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Glutamate Dehydrogenase (GDH).md)**，與 SIRT3 相反，下調胰島素分泌和胺酸刺激的代謝。
- **化合物：** 目前尚未建立選擇性、高效的 SIRT4 直接小分子活化劑。

#### SIRT7（核仁去乙醯酶）

- **挑戰：** [SIRT7](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT7.md) 高度定位於核仁，去乙醯化組蛋白 **H3K18** 以調控核糖體生物合成。由於其高度受限的核仁特異性微環境，開發選擇性小分子活化劑在結構上仍然困難，目前沒有主導的藥物候選物進入高級開發階段。

### Sirtuin 活化劑摘要

| Sirtuin | 定位 | 活性 | 顯著活化劑 | 關鍵目標/效應 |
|---------|------|------|-----------|--------------|
| **[SIRT1](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT1.md)** | 細胞核/細胞質 | 去乙醯化 | 白藜蘆醇, [SRT1720](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SRT1720.md) | [PGC-1α](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/PGC-1α.md), [FOXO3a](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/FOXO3a.md), NF-κB; 代謝恆定 |
| **[SIRT2](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT2.md)** | 細胞質 | 去乙醯化 | 無（使用抑制劑） | 微管/微管蛋白調控 |
| **[SIRT3](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT3.md)** | 粒線體 | 去乙醯化 | 厚朴酚, 二氫楊梅素 | [MnSOD](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/MnSOD.md), [OSCP](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/OSCP.md); 粒線體生物合成、ROS 減少 |
| **[SIRT4](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT4.md)** | 粒線體 | ADP-核糖基化, 硫辛醯胺酶 | 無 | GDH 調控、胰島素分泌 |
| **[SIRT5](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT5.md)** | 粒線體 | 去琥珀醯酶, 去丙二醯酶 | DHP 衍生物（早期階段） | [CPS1](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/CPS1.md), 尿素循環調控 |
| **[SIRT6](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT6.md)** | 細胞核 | 去乙醯化, 去醯化 | [UBCS039](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/UBCS039.md), [MDL-801](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/MDL-801.md), 矢車菊素 | H3K9/H3K56, DNA 修復, 自噬 |
| **[SIRT7](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT7.md)** | 核仁 | 去乙醯化 | 無 | H3K18, 核糖體生物合成 |

> [!tip] 通用 NAD+ 提升劑
> 為提升 NAD+ 水平，前體物如 **NMN（菸鹼醯胺單核苷酸）** 和 **NR（菸鹼醯胺核糖苷）** 透過提高其所需輔基質的濃度，作為通用的間接泛 sirtuin 活化劑。

---

## 膳食來源與治療劑量

將實驗室或臨床的 sirtuin 活化數據轉化為日常飲食選擇，大多數化合物存在重大落差。雖然一些 sirtuin 活化劑需要攝入人體不可能達到的食物或飲品量，但其他化合物則可透過特定傳統茶飲和莓果驚人地輕鬆獲取。

以下概述這些 sirtuin 調節劑的關鍵膳食來源、治療研究中使用的目標劑量，以及計算達到這些水平所需的食物或飲品量。

### 白藜蘆醇（SIRT1 活化劑）

白藜蘆醇主要存在於紅葡萄皮、紅酒、花生、可可和深色莓果（如藍莓和蔓越莓）中。

- **目標治療每日劑量：** 在專注於代謝和心血管標記物的人類臨床試驗中，通常為 **150 毫克至 500 毫克**。
- **飲食中的濃度：**
  - **紅酒：** 通常範圍為 **每公升 1.5 至 3 毫克**（儘管高海拔 Malbec 或冷氣候 Pinot Noir 可達 5.8 毫克/公升）。一杯標準 5 盎司（148 毫升）含有約 **0.3 毫克** 反式白藜蘆醇。
  - **紅葡萄：** 生紅葡萄含有約 **每 100 公克 0.15 至 1.3 毫克**（主要集中在果皮中）。
- **達到 500 毫克的飲食估算：**
  - **紅酒：** 以平均濃度 ~1.9 毫克/公升計算，您需要飲用約 **263 公升**（約 1,778 標準杯）紅酒。
  - **紅葡萄：** 以平均濃度 ~1.08 毫克/100公克計算，您需要攝入約 **46 公斤（約 102 磅）** 新鮮紅葡萄。

> [!danger] 無法透過飲食達成
> **可行性：** 無法透過飲食或飲品達成。治療劑量需要補充劑。

### 二氫楊梅素 / DHM（SIRT3 活化劑）

[二氫楊梅素](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Dihydromyricetin.md) 是一種黃酮類化合物，主要存在於 **藤茶**（又稱 Rattan Tea 或 Teng Cha；*Ampelopsis grossedentata*）中，這是中國西南部飲用的傳統草本飲品。

- **目標治療每日劑量：** 通常為 **100 毫克至 300 毫克**（在代謝健康或肝臟保護方面常用 300 毫克至 600 毫克）。
- **飲食中的濃度：**
  - **藤茶葉：** 藤茶富含 DHM。未加工的乾葉含有驚人的 **重量比 20% 至 30% DHM**。
- **達到 300 毫克的飲食估算：**
  - **藤茶：** 由於其高濃度，您只需用熱水沖泡 **1 至 1.5 公克乾藤茶葉**，即可提取 300 毫克高水溶性 DHM 劑量。這相當於約 **一到兩杯** 標準沖泡茶。

> [!success] 高度可及
> **可行性：** 透過飲食高度可及。飲用一杯傳統中國藤茶即可輕鬆提供 DHM 的治療劑量。

### 矢車菊素 / 矢車菊素-3-葡萄糖苷（SIRT6 活化劑）

[矢車菊素](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Cyanidin.md) 及其主要衍生物矢車菊素-3-葡萄糖苷 (C3G) 是天然花青素，賦予深色莓果深紅、藍色和紫色色素。

- **目標治療每日劑量：** 臨床和動物外推通常目標為每日 **100 毫克至 300 毫克** 矢車菊素-3-葡萄糖苷。
- **飲食中的濃度：**
  - **黑接骨木莓：** 濃度極高，每 100 公克新鮮莓果含有約 **350 毫克至 450 毫克** 矢車菊素-3-葡萄糖苷。
  - **黑莓：** 濃度高，平均每 100 公克新鮮莓果含有約 **80 至 95 毫克** 矢車菊素-3-葡萄糖苷。
  - **黑醋栗：** 濃度高，每 100 公克可產生高達 **250 至 300 毫克** 總花青素（主要為矢車菊素和飛燕草素衍生物）。
- **達到 300 毫克的飲食估算：**
  - **黑接骨木莓：** 您需要攝入 **70 至 85 公克**（略少於 1 杯）新鮮接骨木莓。
  - **黑莓：** 您需要約 **216 至 352 公克**（約 1.5 至 2.5 杯）新鮮黑莓，取決於品種。

> [!success] 高度可及
> **可行性：** 透過飲食高度可及。一份接骨木莓或一碗適量的黑莓即可覆蓋治療閾值。

### 厚朴酚（SIRT3 活化劑）

[厚朴酚](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Honokiol.md) 不存在於標準超市食品中。其主要來源是 **木蘭樹**（*Magnolia grandiflora* 或 *Magnolia officinalis*）的樹皮，常用於傳統亞洲醫學作為煎煮草本飲劑（茶）。

- **目標治療每日劑量：** 通常為每日 **100 毫克至 300 毫克**。
- **飲食中的濃度：**
  - **木蘭樹皮：** 乾燥粗樹皮通常含有約 **1% 至 5% 厚朴酚**（與其結構異構體厚朴醇並存）。
- **達到 200 毫克的飲食估算：**
  - **木蘭樹皮茶：** 您需要用 **4 至 20 公克 raw 乾燥木蘭樹皮** 煮製並飲用濃茶。
- **溶解度注意事項：** 厚朴酚具有高度親脂性，在純水中的溶解度極差。傳統熱水茶僅能提取極少部分可用的厚朴酚。要達到治療劑量，必須使用乙醇（酊劑）或超臨界 CO2 等溶劑提取。

> [!warning] 透過茶飲難以達成
> **可行性:** 中等困難且具生物化學活性。雖然沖泡 raw 樹皮是可行的，但木蘭化合物具有高度鎮靜作用，並與 GABA 受體強烈交互作用。透過自製茶飲攝入大量劑量難以標準化，可能導致不想要的嗜睡，因此純化提取物是更安全的選擇。

### 摘要清查表

| 化合物（Sirtuin 標靶） | 目標劑量 | 全食物可行性 | 每日所需攝入量 |
|------------------------|---------|-------------|--------------|
| **白藜蘆醇** (SIRT1) | 500 毫克 | **否** | ~1,778 杯紅酒 或 ~102 磅紅葡萄 |
| **二氫楊梅素** (SIRT3) | 300 毫克 | **是** | 1–2 杯沖泡藤茶 |
| **矢車菊素** (SIRT6) | 300 毫克 | **是** | ~1 杯接骨木莓 或 ~2.5 杯黑莓 |
| **厚朴酚** (SIRT3) | 200 毫克 | **困難** | 4–20g raw 木蘭樹皮（水溶性差；使用提取物） |

為驗證這些數據，我們可以查看原始化學成分資料庫和逐步數學計算。由於天然化合物因農業因素、土壤品質和製備方法而異，這些數字代表的是合理估計而非靜態絕對值。

以下說明每種化合物的基礎數據和數學驗證。

---

### 1. [白藜蘆醇](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/Resveratrol.md) ([SIRT1](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT1.md))
*   **目標劑量：** 500 毫克
*   **紅酒數據：** 系統性綜述和資料庫（如 *Phenol-Explorer*）顯示，紅酒中反式白藜蘆醇的平均濃度約為 **每公升 1.9 毫克**（通常範圍為 0.5 至 4.0 毫克/公升，取決於葡萄品種和發酵過程中的果皮接觸時間）。
    *   **計算：**
        $$\frac{500\text{ 毫克}}{1.9\text{ 毫克/公升}} \approx 263.15\text{ 公升紅酒}$$
    *   一杯標準美式紅酒為 5 液量盎司（148 毫升）。
        $$\frac{263,150\text{ 毫升}}{148\text{ 毫升/杯}} \approx 1,778\text{ 杯}$$
*   **紅葡萄數據：** 根據營養資料庫，生黑/紅葡萄平均每 100 公克新鮮重量 (FW) 含有 **1.08 毫克反式白藜蘆醇**，但部分品種產量可低至 0.15 毫克/100公克。
    *   **計算（以平均產量計）：**
        $$\frac{500\text{ 毫克}}{1.08\text{ 毫克/100公克}} = 46,296\text{ 公克} \approx 46.3\text{ 公斤 (102 磅)}$$
    *   **計算（以低產量 0.15 毫克/100公克計）：**
        $$\frac{500\text{ 毫克}}{0.15\text{ 毫克/100公克}} = 333,333\text{ 公克} \approx 333.3\text{ 公斤 (734 磅)}$$
    *   **結論：** **約 150 磅葡萄** 的估計代表了超市葡萄平均產量的保守合理中間值。

---

### 2. [二氫楊梅素](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Dihydromyricetin.md) / DHM ([SIRT3](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT3.md))
*   **目標劑量：** 300 毫克
*   **藤茶 (*Ampelopsis grossedentata*) 數據：** 此特定植物的乾葉富含 DHM，乾葉樣本中 DHM 含量經常檢測在 **重量比 20% 至 30%** 之間。
    *   **計算（以 20% DHM 含量計）：**
        $$1.5\text{ 公克乾葉} \times 0.20 = 0.3\text{ 公克 (300 毫克) DHM}$$
    *   **計算（以 30% DHM 含量計）：**
        $$1.0\text{ 公克乾葉} \times 0.30 = 0.3\text{ 公克 (300 毫克) DHM}$$
    *   **結論：** 由於 DHM 在熱水中溶解度高，沖泡 **1.0 至 1.5 公克乾葉** 即可成功產出約 300 毫克 DHM。這使藤茶成為少數能透過單杯茶輕鬆達到治療劑量的天然來源之一。

---

### 3. 矢車菊素-3-葡萄糖苷 / C3G ([SIRT6](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/SIRT6.md))
*   **目標劑量：** 300 毫克
*   **黑莓數據：** *Phenol-Explorer* 資料庫列出黑莓中矢車菊素-3-葡萄糖苷的平均濃度為 **每 100 公克 FW 138.72 毫克**，最低記錄為 **85.21 毫克/100公克 FW**。
    *   **計算（以平均濃度計）：**
        $$\frac{300\text{ 毫克}}{138.72\text{ 毫克/100公克}} \approx 216\text{ 公克黑莓}$$
    *   **計算（以最低濃度計）：**
        $$\frac{300\text{ 毫克}}{85.21\text{ 毫克/100公克}} \approx 352\text{ 公克黑莓}$$
    *   一杯標準新鮮黑莓重約 140 公克。
        $$\frac{352\text{ 公克}}{140\text{ 公克/杯}} \approx 2.5\text{ 杯}$$
    *   **結論：** 攝入 **2 至 3 杯黑莓**（約 315 至 375 公克）可可靠地覆蓋治療閾值，即使考慮低產量品種。
*   **黑接骨木莓數據：** *Phenol-Explorer* 列出 C3G 平均濃度為 **每 100 公克 FW 794.13 毫克**，最低為 **361.00 毫克/100公克 FW**。
    *   **計算（以最低濃度計）：**
        $$\frac{300\text{ 毫克}}{361.00\text{ 毫克/100公克}} \approx 83\text{ 公克接骨木莓}$$
    *   **結論：** **70 至 85 公克烹煮接骨木莓**（約 1/2 至 2/3 杯）的估計經數學驗證可提供 300 毫克 C3G。

---

### 4. [厚朴酚](https://github.com/jkuo45/llm-wiki/blob/dev/notes/sirtuins/Honokiol.md) ([SIRT3](https://github.com/jkuo45/llm-wiki/blob/dev/notes/_link/SIRT3.md)) — *溶解度修正*
經更深入的物理化學檢查，厚朴酚的 raw 茶估計需要就**溶解度**進行重要的科學說明：

*   **目標劑量：** 200 毫克
*   **木蘭樹皮數據：** raw 乾燥木蘭樹皮含有約 1% 至 5% 總雙酚（厚朴酚和厚朴醇合計）。
*   **溶解度問題：** 與 DHM 不同，厚朴酚具有高度親脂性（油溶性），在**純水中溶解度極差**。
    *   雖然 10 公克 raw 樹皮技術上含有大量厚朴酚，但傳統熱水茶（煎劑）僅能提取極小部分。
    *   要將 200 毫克活性厚朴酚轉化為可飲用液體，必須使用乙醇（酊劑）或超臨界 $CO_2$ 等溶劑提取。
    *   試圖沖泡足夠的水基茶以達到 200 毫克生物可利用厚朴酚，需要大量不安全的 raw 樹皮量。
*   **結論：** 雖然 raw 樹皮的分子數學是正確的，但**厚朴酚無法透過標準水沖泡茶有效或安全地給藥。** 需要標準化溶劑提取補充劑才能繞過其差的水溶性。
