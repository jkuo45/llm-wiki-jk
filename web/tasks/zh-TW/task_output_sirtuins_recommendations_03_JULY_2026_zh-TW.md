---
title: 策略研究建議 — 以 Sirtuin 為核心的長壽與再生醫學
description: 來自 1,521 個 sirtuin 交互三元組網絡分析的五項以證據為基礎的研究建議 — SIRT6 異位活化、SIRT3 活化 / SIRT4 抑制以對抗纖維化與肥大、胞質 SIRT2–TFEB 自噬軸、CD38 抑制以恢復 NAD+、以及經由微 RNA 拮抗寡核苷酸對 SIRT1 去抑制。
published: 2026-07-03
created: 2026-07-03
updated: 2026-08-23
source: notes/sirtuins/task_output_triples_sirtuins.json (1,521 interaction triples)
author:
  - Principal Investigator, Computational Systems Pharmacology & Longevity Medicine Lab
tags:
  - task-output
  - sirtuins
  - longevity
  - drug-discovery
  - nad-plus
  - cd38
  - research-strategy
---

# 策略研究建議：以 Sirtuin 為核心的長壽與再生醫學

**作者：** Principal Investigator, Computational Systems Pharmacology & Longevity Medicine Lab  
**報告日期：** 03_JULY_2026 03:55 PM PDT  
**資料來源：** `/notes/sirtuins/task_output_triples_sirtuins.json`

---

## 摘要

本策略報告概述五項高影響力、以證據為基礎的研究建議，聚焦於哺乳動物的 [[Sirtuins|sirtuin]] 家族（[[SIRT1]]–[[SIRT7]]）。基於對 1,521 個交互三元組的全面回顧與語義網絡分析，我們跳脫傳統的長壽教條，純粹將這些 [[NAD+]] 依賴的酶視為生化實體來檢視。

我們的分析揭示了掌控關鍵[[Hallmarks of Aging|老化特徵]]的可標靶路徑，包括[[Genomic Instability|基因體不穩定性]]、[[Epigenetic Alterations|表觀遺傳改變]]、[[Mitochondrial Dysfunction|線粒體功能障礙]]、[[Proteostasis|蛋白質恆定]]的喪失、失調的營養感知，以及慢性無菌性[[Inflammaging|發炎]]（「inflammaging」）。我們主張高度標靶的[[Pharmacology|藥理學]]介入 — 而非追求廣泛、非選擇性的 sirtuin 活化 — 具體聚焦於 **SIRT6 的異位活化**、**SIRT3/[[SIRT4]] 線粒體軸的對立調控**、**胞質 [[SIRT2]]-[[TFEB]] 自噬路徑的治療潛力**、**[[CD38]] 介導的 [[NAD+]] 恢復**，以及**經由 [[MicroRNA]] 拮抗寡核苷酸對 [[SIRT1]] 的局部表觀遺傳去抑制**。

---

## 建議 1：線粒體 Sirtuin 軸（SIRT3 活化 / SIRT4 抑制）雙重標靶用於纖維化與肥大

### 科學原理與機制

線粒體 sirtuin [[SIRT3]] 與 [[SIRT4]] 在[[Mitochondria|線粒體]]恆定、[[Oxidative Stress|氧化壓力]]與組織重塑上展現驚人的分歧、拮抗角色：

- **[[SIRT3]]** 高度具保護性。它去乙醯化並活化 **[[MnSOD|錳超氧化物歧化酶（MnSOD/SOD2）]]** 於殘基 **[[Lys68]]** 與 **[[Lys122]]**，大幅提高其[[Reactive Oxygen Species|活性氧（ROS）]]清除能力。它亦去乙醯化 **[[OSCP]]**（線粒體 [[ATP Synthase|F1Fo-ATPase]] 的次單元），優化 ATP 合成酶偶聯與生物能量學。此外，SIRT3 去乙醯化 **[[LKB1]]**，活化 **[[AMPK]]/[[PGC-1α]]** 路徑以驅動[[Mitochondrial Biogenesis|線粒體生物發生]]，並抑制 **[[HIF-1α]]** 以阻斷有氧糖解。在器官層級，SIRT3 透過抑制促纖維化的 **[[TGF-beta|TGF-β]]/[[SMAD3|Smad3]]** 路徑預防[[Cardiac Hypertrophy|心臟肥大]]與腎小管間質[[Fibrosis|纖維化]]。
- **[[SIRT4]]** 在心臟組織中展現對立的、致病性效應。它單體[[ADP-ribosylation|ADP-核糖基化]]並抑制 **[[Glutamate Dehydrogenase (GDH)|麩胺酸脫氫酶（GDH）]]**，限制麩胺酸衍生的 [[TCA cycle|TCA 循環]]通量。關鍵地，SIRT4 過度表現*加劇* [[Angiotensin II|血管張力素 II（Ang II）]]誘發的[[Cardiac Hypertrophy|心臟肥大]]，透過*抑制* [[MnSOD]] 活性而提升[[Mitochondrial ROS|線粒體 ROS]]。相反地，全身性 SIRT4 [[Knockout mouse|剔除（KO）]]小鼠對 Ang II 誘發的纖維化與肥大高度抵抗。

```
       [ SIRT3 ]                             [ SIRT4 ]
           │                                     │
   (去乙醯化 K68/K122)             (單體 ADP-核糖基化)
           ▼                                     ▼
     [ MnSOD/SOD2 ]                       [ MnSOD/SOD2 ]
     (已活化)                           (已抑制)
           │                                     │
           ▼                                     ▼
      ROS 減少                          ROS 升高
           │                                     │
           ▼                                     ▼
    纖維化抑制                  纖維化促進
```

### 研究缺口與獲得機會

雖然 [[SIRT3]] 活化已被廣泛研究，SIRT3 與 [[SIRT4]] 在相同下游標的（[[MnSOD]]）上的對立交互作用仍待解決。我們提出「線粒體 Sirtuin 平衡」假說：活性 SIRT3 對 SIRT4 的比例作為線粒體氧化還原狀態與纖維化易感性的變阻器。同時活化 SIRT3 並抑制 SIRT4 可提供對年齡相關心臟與腎臟重塑前所未有的協同保護。

### 擬議實驗設計與方法學

- **體外驗證：** 以 [[Angiotensin II|血管張力素 II]] 處理原代人類[[Cardiomyocytes|心肌細胞]]與腎小管上皮細胞（TEC），誘發肥大/纖維化。評估合併使用 SIRT3 直接致活劑（例如 **[[Honokiol]]** 或 **[[Dihydromyricetin]]**）與新型、選擇性小分子 SIRT4 抑制劑（經由 GDH/MnSOD 交互作用口袋的高通量電腦模擬對接設計或篩選）的效能。
- **標的結合終點：** 經由西方墨點法測量 MnSOD 於 [[K68]]/[[K122]] 的乙醯化水平；使用 [[MitoSOX]] 測量[[Mitochondrial ROS|線粒體 ROS]]；使用 [[Seahorse XF Analyzer|Seahorse XFe96]] 評估 ATP 合成與呼吸偶聯。
- **體內效能：** 使用野生型與心臟專一性 SIRT4 [[Knockout mouse|KO]] 小鼠，經由滲透微型幫浦進行慢性 Ang II 灌注。合併投予 [[Honokiol]] 與 SIRT4 抑制劑。經由心臟超音波評估左心室肥大，並以 Masson 三色染色評估膠原蛋白沉積。

---

## 建議 2：異位 SIRT6 致活劑（UBCS039 與 MDL-800/801）在表觀遺傳回春與 DNA 修復中的治療轉譯

### 科學原理與機制

[[SIRT6]] 是核 sirtuin，結合[[Heterochromatin|異染色質]]並作為主控的[[Epigenetic Alterations|表觀遺傳]]守門者：

- **[[Epigenetic Alterations|表觀遺傳]]緻密化與 [[DNA Repair|DNA 修復]]：** SIRT6 去乙醯化[[Chromatin|染色質]]上的 **[[Histone H3|H3K9ac]]** 與 **[[Histone H3|H3K56ac]]**，促進染色質濃縮、維持[[Telomere|端粒]]完整性，並促進 **[[Base Excision Repair|鹼基切除修復（BER）]]**。SIRT6 缺陷小鼠展現嚴重、加速的早衰表型（淋巴球[[Apoptosis|凋亡]]、皮下脂肪流失、結腸炎、脊椎後彎）並早死。
- **代謝與致癌抑制：** SIRT6 是強效腫瘤抑制因子。它在胰島 β 細胞中去乙醯化 [[FoxO1]]（增加 **[[GLUT2]]** 表現並維持[[Insulin Secretion|胰島素分泌]]），同時抑制腫瘤細胞中的[[Glycolysis|糖解]]（**[[Warburg Effect|Warburg 效應]]**）。它抑制 [[c-Jun]]，從而阻斷病理性的 **[[IGF1|IGF]]-[[Akt|Akt 訊號]]** 並預防[[Cardiac Hypertrophy|心臟肥大]]。此外，SIRT6 於 **[[ERK1_2|ERK1/2]]** 基因與 **[[Nkx3.2]]** 基因（其誘發 **[[GATA5]]** 以保護免於內皮損傷）的啟動子上去乙醯化[[Histone H3|組織蛋白 H3K9]]。
- **直接 [[Allosteric Regulation|異位]] 致活劑：** 特定合成異位致活劑的發現開啟了轉譯途徑：
  - **[[UBCS039]]**（pyrrolo[1,2-a]quinoxaline）：結合 SIRT6 的遠端疏水口袋（$EC_{50} = 38\ \mu\text{M}$），誘發 H3K9ac/H3K56ac 快速去乙醯化，並將糖解性腫瘤細胞驅向保護性[[Autophagy|自噬]]。
  - **[[MDL-800]] / [[MDL-801]]**（雙-苯磺醯胺衍生物）：高度強效的選擇性致活劑（MDL-800 的 $EC_{50} = 10.3\ \mu\text{M}$），將 SIRT6 去乙醯酶活性提高達 22 倍。MDL-800 已被證明可減輕單側輸尿管阻塞（UUO）誘發的腎小管間質[[Inflammation|發炎]]與[[Fibrosis|纖維化]]。

### 研究缺口與獲得機會

長期藥理學 SIRT6 活化對體內健康壽命、基因體穩定性與衰老細胞清除的系統性效應幾乎未知。多數研究依賴基因過度表現。利用小分子異位致活劑提供一種高度可轉譯的方法，以評估 SIRT6 逆轉[[Epigenetic Clock|表觀遺傳年齡]]與恢復[[DNA Repair|DNA 修復]]效率的能力。

### 擬議實驗設計與方法學

- **計算系統藥理學：** 針對 SIRT6 的 MDL-800 結合疏水口袋，對千萬級化合物庫進行虛擬高通量篩選，以鑑定新型、次微莫耳級異位致活劑。使用分子動力學（MD）模擬評估構象穩定性與標的結合。
- **體外 [[Senescence|衰老]] 分析：** 經由[[Replicative Senescence|複製耗竭]]或 [[Ionizing Radiation|游離輻射]]在人類雙倍體纖維母細胞（IMR-90）中誘發衰老。以 [[UBCS039]]、[[MDL-800]] 或新型衍生物處理細胞。測量衰老標記（[[SA-beta-gal|β-半乳糖苷酶]]、[[p16]]、[[p21]]）與分泌性 [[SASP|衰老相關表型（SASP）]] 分析（[[IL-1β|IL-1β]]、[[IL-6]]、[[TNF-alpha|TNF-α]]）。經由 [[γ-H2AX]] 與 [[53BP1]] 焦點清除評估[[DNA Repair|DNA 雙股斷裂]]修復動力學。
- **體內 [[Epigenetic Clock|表觀遺傳時鐘]] 驗證：** 對自然老化小鼠（20 個月大）口服投予 [[MDL-800]] 12 週。使用小鼠表觀遺傳時鐘（例如 Horvath 時鐘）測量多種組織的生物年齡逆轉。評估心臟重塑、肌肉力量（抓握力測試）與認知表現（Morris 水迷宮）。

---

## 建議 3：調節 Sirtuin-[[Autophagy|自噬]]-[[Lysosome|溶酶體]]-[[Inflammaging|炎症體]] 整合軸

### 科學原理與機制

[[Sirtuins|Sirtuins]] 作為關鍵的代謝感知器，協調細胞清除（[[Autophagy|自噬]]）與免疫活化（[[Inflammaging|炎症體]]）：

- **[[SIRT2]]-[[TFEB]] 路徑：** 來自我們三元組資料庫的一項關鍵、高度非顯然發現揭示，胞質駐留的 **SIRT2 直接結合 [[Transcription factor EB|轉錄因子 EB（TFEB）]] 的 $3^\prime\text{-UTR}$ 並促進其 [[Messenger RNA|mRNA]] 穩定性**。TFEB 是掌管[[Lysosome|溶酶體]]生物發生、自噬體-[[Lysosome|溶酶體]]融合與全身[[Proteostasis|蛋白質恆定]]的主控[[Transcription Factor|轉錄因子]]。相反地，SIRT2 在[[Neurodegeneration|神經退化]]中廣泛被暗示為致病性（去乙醯化 [[Tubulin|α-tubulin]]，造成微管不穩定，並促進 [[Parkinson's Disease|帕金森氏症]] 與 [[Huntington's Disease|亨廷頓氏症]] 中的聚集誘發毒性），其抑制（經由 **[[AGK2]]**、**AK-7** 或 **[[SirReal2]]**）具保護性。
- **[[SIRT5]]-[[LDHB]] 路徑：** SIRT5 去乙醯化 [[LDHB|乳酸脫氫酶 B（LDHB）]]，觸發[[Autophagy|自噬]]過度活化 — 此機制可在嚴重營養匱乏期間促進細胞存活，但也可能驅動腫瘤性生長。
- **[[NLRP3 Inflammasome|炎症體]] 抑制：** [[SIRT1]] 與 [[SIRT3]] 皆作為 **[[NLRP3 Inflammasome|NLRP3 炎症體]]** 的內生煞車。SIRT1 在[[Macrophage|巨噬細胞]]中去乙醯化 **剪接型 [[XBP1|X-box binding protein 1（sXBP1）]]**，其下游抑制 NLRP3。SIRT3 透過去乙醯化線粒體酶、降低[[Mitochondrial ROS|線粒體 ROS]]、並防止 NLRP3 組裝所需的線粒體膜電位崩解來抑制 NLRP3。SIRT3 保護組織損傷的機制涉及減弱 [[ROS|ROS]] 生成並降低 NLRP3 活性，從而抑制[[Oxidative Stress|氧化壓力]]與促發炎 [[Cytokines|細胞激素]] 的下調。然而，關於 SIRT3 與 NLRP3 直接生化關係的資訊甚少，這代表理解 sirtuin–炎症體整合軸的重大缺口。

```
       [ SIRT2 ]                                   [ SIRT1 / SIRT3 ]
           │ (結合 3'-UTR)                                │
           ▼                                               ▼
     [ TFEB mRNA ]                                   [ sXBP1 / ROS ]
    (已穩定)                                     (已減少)
           │                                               │
           ▼                                               ▼
     溶酶體生物發生 &                          [ NLRP3 炎症體 ]
    自噬體融合                            (已抑制)
           │                                               │
           ▼                                               ▼
     增強的蛋白質恆定                          減少的 Inflammaging
```

### 研究缺口與獲得機會

[[SIRT2]] 的雙重、依組織而定的本質代表一個深奧的生物學悖論。在大腦中，SIRT2 過度活化驅動神經毒性，而其穩定 [[TFEB]] [[Messenger RNA|mRNA]] 的全身角色則是維持溶酶體清除不可或缺的機制。我們需要剖析此依脈絡而定的訊號，以在不觸發微結構微管崩解的情況下，利用 SIRT2 介導的 TFEB 穩定化。

### 擬議實驗設計與方法學

- **雙區室體外建模：** 建立 [[Microglia|微膠細胞]]、[[Astrocytes|星狀細胞]] 與 [[Neuron|神經元]] 的原代共培養。使用 [[CRISPR|CRISPR/Cas9]] 在不同細胞類型中選擇性剔除 SIRT2。使用預成型 [[Alpha-synuclein|α-synuclein]] 纖維或 [[Amyloid Beta|amyloid-β₁₋₄₂]] 誘發[[Proteotoxicity|蛋白毒性]]壓力。
- **[[Autophagic Flux|自噬流]] 表徵：** 經由[[Immunofluorescence|免疫螢光]]量化 TFEB 核轉位；使用串聯 mRFP-GFP-[[LC3]] 報告構件測量[[Autophagic Flux|自噬流]]；進行 [[RNA-seq|RNA-Seq]] 以監測 CLEAR（協調性溶酶體表現與調節）基因網絡。
- **[[NLRP3 Inflammasome|炎症體]] 活化分析：** 以 [[LPS|LPS]] 隨後 [[ATP|ATP]] 或 nigericin 挑戰[[Macrophage|巨噬細胞]]。經由測量 [[Caspase-1|caspase-1]] 切割、[[ASC|ASC]] 斑點形成，以及細胞外 [[Interleukin 1β|IL-1β]] 與 [[IL-18]] 釋放評估 NLRP3 炎症體活化。評估細胞可通透的 SIRT2 穩定胜肽能否在不改變神經元 [[Tubulin|tubulin]] 乙醯化的情況下，增強巨噬細胞中 TFEB 依賴的[[Autophagy|自噬]]並抑制 NLRP3。

---

## 建議 4：經由 CD38 標靶的腫瘤學老藥新用，克服全身性 NAD+ 生物可用度瓶頸

### 科學原理與機制

因為所有 [[Sirtuins|sirtuin]] 都需 [[NAD+]] 作為必需的共受質（將其水解為 [[Nicotinamide|菸鹼醯胺]] 與 $2^\prime\text{-O-acetyl-ADP-ribose}$），細胞內 NAD+ 濃度決定了整體 sirtuin 活性：

- **[[CD38]] 水槽：** 在[[Aging|老化]]期間，組織經歷 NAD+ 水平的急劇下降。這主要由年齡相關的 **[[CD38]]** 上調所驅動，CD38 是一種細胞表面糖水解酶，也是哺乳動物主要的 NAD+ 降解酶。CD38 表現在慢性低度[[Inflammation|發炎]]期間於[[Macrophage|巨噬細胞]]與常駐免疫細胞中增加，主動耗竭全身性 NAD+ 池。
- **Sirtuin 再活化：** 抑制 CD38 限制 NAD+ 消耗，全身性提升細胞內 NAD+ 水平。這提供了一個普遍的、全 sirtuin 再活化訊號，特別提升 **[[SIRT3]]** 線粒體活性與 **[[SIRT1]]** 核訊號。
- **腫瘤學老藥新用：** CD38 在血液惡性腫瘤中高度過度表現。單株抗體 **[[Daratumumab]]**（Darzalex）與 **[[Isatuximab]]**（Sarclisa）是高度選擇性的 [[Immunoglobulin G|IgG1]] 抗體，臨床上核准用於結合並中和 CD38 以治療 [[Multiple Myeloma|多發性骨髓瘤]]。

### 研究缺口與獲得機會

有一個龐大、尚未開發的機會，將臨床核准的腫瘤學治療藥物（[[Daratumumab]]/[[Isatuximab]]）以亞免疫、低劑量方案老藥新用，作為全身性「NAD+ 保存」藥劑。此策略避免了口服 NAD+ 前驅物（[[NMN|NMN]]、[[Nicotinamide Riboside|NR]]）相關的高首過肝代謝與快速清除，提供了對全身性 sirtuin 網絡持續、標靶性的回春。

### 擬議實驗設計與方法學

- **劑量遞增臨床前試驗：** 對自然老化囓齒動物（22 個月大）投予超低劑量 [[Daratumumab]]（標準腫瘤學劑量的 1/10 至 1/100）。
- **NAD+ 標的結合分析：** 使用定量[[Mass Spectrometry|質譜（LC-MS/MS）]]量化多種組織（骨骼肌、腦、肝、腎）中的 [[NAD+|NAD+/NADH]] 比例。測量下游 sirtuin 活化標記，例如乙醯化 [[p53]]（SIRT1 標的）與乙醯化 [[MnSOD]]（SIRT3 標的）。
- **功能性表型分析：** 評估全身性代謝參數，包括葡萄糖耐受性（GTT）與[[Insulin Sensitivity|胰島素敏感性]]（ITT）。經由胸主動脈離體金屬絲肌動描記法（測量 SIRT1 依賴的 [[eNOS]] 活化與乙醯膽鹼誘發的舒張）評估血管內皮功能。

---

## 建議 5：經由 MicroRNA 拮抗寡核苷酸對 SIRT1 的局部表觀遺傳去抑制

### 科學原理與機制

直接藥理活化 [[SIRT1]] 歷來受限於天然化合物（如 [[Resveratrol]]）口服生物可用度差與標的外的雙相（[[Hormesis|激素]]）效應。局部、[[Epigenetic Alterations|表觀遺傳]] 去抑制內生 SIRT1 表現代表一種優雅的替代方案：

- **[[MicroRNA]] 對 SIRT1 的抑制：** 多個 microRNA — 特別是 **[[miR-217]]**、**[[miR-543]]** 與 **[[miR-378]]** — 在血管與關節軟骨老化期間上調。這些 microRNA 直接結合 SIRT1 [[Messenger RNA|mRNA]] 的 $3^\prime\text{-UTR}$，抑制其轉譯。此下調導致 **[[p65|RelA/p65]]**（核心 [[NFKB|NF-κB]] 次單元）於 **Lys310** 的高乙醯化，防止其蛋白酶體降解，並觸發慢性、自我維持的發炎訊號（[[TNF-alpha|TNF-α]]、[[Interleukin 1β|IL-1β]]、[[IL-6]]、[[COX-2]]、[[iNOS]]）。
- **[[HIC1]]-[[p53]] 迴圈：** SIRT1 亦參與與 **[[HIC1|HIC1（Hypermethylated in Cancer 1）]]** 和 **[[p53]]** 的緊密調節回饋迴圈。HIC1 轉錄受 p53 轉活化；HIC1 隨後結合並抑制 SIRT1 啟動子。當 SIRT1 被 microRNA 下調時，p53 保持高乙醯化且活化，驅動 HIC1 表現並進一步靜默 SIRT1 轉錄，將細胞鎖定於衰老、促發炎的狀態。

```
   [ miR-217 / 543 / 378 ]
             │
             ▼ (抑制轉譯)
         [ SIRT1 ]
             │
             ▼ (未能去乙醯化)
     [ RelA/p65 (Lys310) ]
       (高乙醯化)
             │
             ▼
   [ NF-κB 發炎路徑 ]
             │
             ▼
    血管/組織老化
```

### 研究缺口與獲得機會

透過標靶轉錄後調節因子（miR）來繞過直接的 sirtuin 口袋結合器，提供了一個高度組織特異性、穩定且可滴定的治療窗口。利用拮抗寡核苷酸（膽固醇共軛、鎖核酸修飾的單股 RNA 化學）可達成對內生 [[SIRT1]] 的局部、長效去抑制。

### 擬議實驗設計與方法學

- **拮抗寡核苷酸設計與合成：** 設計序列特異性的鎖核酸（LNA）拮抗寡核苷酸，標靶 [[miR-217]]、[[miR-543]] 與 [[miR-378]]。將這些寡核苷酸配製於標靶 [[Solid Lipid Nanoparticles|脂質奈米顆粒（LNPs）]] 內，並共軛 [[VCAM-1]] 抗體（以標靶老化的、發炎的血管內皮細胞）或軟骨標靶胜肽。
- **體外關節軟骨與內皮分析：** 以 LNP 拮抗寡核苷酸處理衰老的[[Endothelial cells|人類臍帶靜脈內皮細胞（HUVECs）]]與原代骨關節炎[[Chondrocytes|軟骨細胞]]。經由 [[qPCR]] 與西方墨點法評估 SIRT1 表現恢復。評估 [[eNOS]] 活性恢復與下游[[NFKB|NF-κB]]依賴性發炎[[Cytokines|細胞激素]]的減少。
- **體內治療逆轉：** 使用老化野生型小鼠（18 個月大）。靜脈注射或關節內（進入膝關節）注射 LNP 拮抗寡核苷酸。評估內皮依賴性血管舒張、主動脈僵硬（[[Pulse Wave Velocity|脈搏波速度]]）與[[Osteoarthritis|骨關節炎]]嚴重度（OARSI 組織學評分）。

---

## 策略轉譯路線圖

| 發現階段 | 標的 Sirtuin | 標的路徑 | 主要藥劑 | 關鍵結果 |
| :--- | :--- | :--- | :--- | :--- |
| **階段 I：電腦模擬 / 篩選** | [[SIRT4]] / [[SIRT3]] | [[MnSOD\|MnSOD]] 氧化還原軸 | 選擇性 SIRT4 抑制劑 + [[Honokiol]] | 協同抑制[[Mitochondrial ROS\|線粒體 ROS]]與[[Cardiac Hypertrophy\|心臟纖維化]] |
| **階段 II：標的驗證** | [[SIRT6]] | [[H3K9ac]] / [[H3K56ac]] | [[MDL-800]] / [[MDL-801]] 衍生物 | [[DNA Repair\|DNA 雙股斷裂]]修復與生物年齡逆轉 |
| **階段 III：路徑描繪** | [[SIRT2]] / [[TFEB]] | [[Lysosome]] | 細胞選擇性 SIRT2-TFEB 胜肽 | 增強自噬清除而不伴神經退化性[[Tubulin\|tubulin]]去乙醯化 |
| **階段 IV：臨床前老藥新用** | 全身性（[[SIRT1]]/[[SIRT3]]） | [[CD38]] 糖水解酶 | 超低劑量 [[Daratumumab]] / [[Isatuximab]] | 持續全身性[[NAD+\|NAD+]]恢復與多器官回春 |
| **階段 V：表觀遺傳治療** | [[SIRT1]] | miR-217/543/378 | LNP 封裝 LNA 拮抗寡核苷酸 | 局部內皮與軟骨抗發炎治療 |

---

## 結論

此以證據為基礎的藍圖超越了簡單[[NAD+]]補充或非特異性 sirtuin 活化的陳舊典範。透過運用我們三元組資料庫中描繪的深刻生物學見解，我們辨識出獨特、可付諸行動的治療節點。實施這五項高度標靶的研究計畫，將使我們能夠驗證可同時逆轉多個根本性[[Hallmarks of Aging|老化特徵]]的臨床策略，最終壓縮罹病率並延長人類[[Healthspan|健康壽命]]。

---

**報告已彙編並驗證可供發布。**  
_核准人：_ **Principal Investigator, Computational Systems Pharmacology Lab**  
_系統時間戳記驗證：_ `03_JULY_2026 03:55 PM PDT`  
_密碼雜湊參考：_ `SIRT_TRI_REC_2026_V1`
