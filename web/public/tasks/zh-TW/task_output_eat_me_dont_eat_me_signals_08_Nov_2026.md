---
title: 吃我與不許吃我噬訊號 — 比較清單
description: 彙整促吞噬（eat-me）與抗吞噬（don't-eat-me）細胞表面訊號的清單，含受體、執行機器、生理情境與證據層級標註，綜合自知識庫筆記與已發表綜述。
created: 2026-11-08
updated: 2026-11-08
type: task-output
tags:
  - cell-death
  - efferocytosis
  - phagocytosis
  - immunology
  - cancer-immunotherapy
  - eryptosis
---

# 吃我與不許吃我噬訊號 — 比較清單

範圍：逐項清點調控胞葬作用（efferocytosis）與腫瘤細胞吞噬的促吞噬（eat-me）與抗吞噬（don't-eat-me）表面呈現分子。彙整自知識庫筆記（[[Efferocytosis]]、[[Eryptosis]]、[[Phosphatidylserine]]、[[CD47]]、[[Calreticulin]]）與已發表綜述：Birge 等人 2016（*Cell Death Differ*；PMID 26915293）、Khalaji 等人 2023（*Heliyon*；PMID 37822610）、Xiao 等人 2024（*Cancer Communications* 44(7):791–832；DOI 10.1002/cac2.12579；PMID 38923737）、Park & Kim 2017（*Exp Mol Med*；PMID 28496201）、Kelley & Ravichandran 2021（*EMBO Rep*；PMID 34041845）。證據層級：Tier 1 = 人體 RCT／已核准介入；Tier 2 = 人體試驗／關聯性研究；Tier 3 = 囓齒類／體內動物；Tier 4 = 體外／離體；Tier 5 = 假說。除非另有說明，訊號生化屬性一律為 Tier 4（細胞實驗）；臨床意涵另註。抑制型受體會提高吞噬的活化門檻；「比值」是促吞噬與抗吞噬訊號整合後的簡稱，並非實測的算術差值。

## 吃我訊號

暴露於瀕死、受壓力或受感染細胞表面、標記該細胞供吞噬的訊號。多數匯聚於細胞膜脂質不對稱性的喪失。

| 訊號 | 暴露於／情境 | 識別者 | 備註（證據層級） |
| --- | --- | --- | --- |
| [[Phosphatidylserine]]（PS） | 普遍存在：凋亡、eryptotic、活化血小板與腫瘤細胞膜的胞外層；[[Apoptotic Bodies]] | 直接 PS 受體（TIM-4、BAI1、stabilin-2）與橋接分子（Gas6/Protein S → [[MerTK]] 型 TAM 受體；MFGE8 → 整聯蛋白） | 表徵最完整的哺乳動物 eat-me 訊號（Birge 2016；Tier 4）。執行需要[[Scramblase]]活化 + [[Flippase]]失活：在 [[Eryptosis]] 中 Ca²⁺ 活化 TMEM16F/ANO6；在 [[Apoptosis]] 中 caspase 切割 ATP11C 並活化 XKR8。PS 陽性吞噬使巨噬細胞傾向產生 HO-1 的抗發炎狀態（Tier 4–3） |
| [[Calreticulin]]（表面暴露） | 蒽環類化療、光動力治療、部分放射治療後的細胞表面；免疫原性細胞死亡中的主導性 eat-me 訊號 | 吞噬細胞上的 LRP1/CD91；移除對向的 [[CD47]] 煞車即核准攝取 | 表面 CRT 由 LRP1/CD91 識別（Gardai 等人 2005，*Cell* 123:321–334）。CRT 同時被報導為 C1q 結合之共受體，分泌型或裂解型 CRT 可作為調理素（Cockram 等人 2019；PNAS 2025）。雙死亡訊號邏輯：CRT 驅動攝取，而同一死亡事件釋出的腫瘤抗原觸發適應性免疫反應（Tier 4） |
| [[Cardiolipin]]（外化） | 受壓粒線體與瀕死細胞的外表面；cardiolipin 過氧化與 cytochrome c 釋出相連 | 雙相性：面向外的 cardiolipin 由吞噬細胞 CD36 識別；面向細胞質的 cardiolipin 由 LC3 進行粒線體自噬清除 | 外化 cardiolipin 為 CD36 依賴性 eat-me 訊號（Balasubramanian 等人 2015，*Sci Signal* 8:ra95；PMID 26396268）。轉位至粒線體外膜會招募 LC3 進行粒線體自噬（Chu 等人 2013，*Nat Cell Biol* 15:1197–1205；PMID 24036476）（Tier 4） |
| 氧化磷脂／氧化 LDL 表位 | 氧化壓力細胞；動脈粥樣斑塊碎屑 | 清道夫受體（CD36、SR-A、LOX-1） | 不穩定斑塊泡沫細胞攝取的主要基礎；經 oxPS 決定位與 PS 部分重疊（Tier 4） |
| 去唾液酸化聚醣（老化紅血球） | 老化 [[Erythrocyte]]——去唾液酸化是經典的老化吃我線索；神經胺酸酶處理在實驗上會驅動 PS 暴露 | 天然 IgG 自體抗體（常針對[[Anion Exchanger 1\|AE1/band 3]]）→ Fc 受體橋接 | 與 PS 路徑不同：並非 eryptosis。去唾液酸化串接兩套清除程序，因為去唾液酸化與 PS 暴露會共同發生（Tier 4） |
| 受損胞器上的泛素鏈 | Parkin 標記的粒線體（[[PINK1]]/Parkin 途徑）；亦含粒線體自噬受體 | 自噬受體 [[p62]]、NBR1、NDP52、OPTN | 粒線體自噬的「吃我」邏輯在胞器尺度上對映胞葬作用（Tier 4；PINK1/Parkin 失效 → 家族性帕金森氏症） |
| 胞外基質錨定的 [[CXCL14]] | 早期衰老分泌組，在 NF-κB/IL-6 SASP 成熟之前 | 巨噬細胞、樹突細胞、NK 與 T 細胞招募者（受體未定） | 屬「吃我／來找我」的趨化訊號而非表面標記；保留於內皮細胞糖胺聚醣上（Tier 4） |
| SLAMF7（CS1／CD319） | 造血系腫瘤細胞（骨髓瘤、部分淋巴瘤）、漿細胞、NK 細胞；亦見於巨噬細胞 | SLAMF7–SLAMF7 同質結合，經巨噬細胞上 Mac-1（CD11b/CD18）→ FcRγ/DAP12、Syk/Btk | 屬促吞噬的 eat-me 訊號而非煞車：在 CD47–SIRPα 阻斷期間，SLAMF7 為巨噬細胞吞噬造血腫瘤細胞所需（Chen 等人 2017，*Nature* 544:493–497；PMID 28424516）（Tier 4）。該必要性存在爭議（He 等人 2019，*Nat Commun* 10:533）；SLAM 家族的煞車是 SLAMF3/SLAMF4（Xiao 2024）。Elotuzumab 以 NK 細胞 ADCC 與巨噬細胞 ADCP 途徑獲准於骨髓瘤合併療法（Tier 1），而非透過中和一對抑制性配體 |
| 補體 C1q（作為橋接調理素） | 凋亡細胞；古典路徑感測器 | C1q 橋接至吞噬細胞上的表面 calreticulin／CD91（LRP1） | 呼應 CRT 連結：CRT（cC1qR）被報導為與 CD91/LRP1 搭配的 C1q 結合共受體（Ogden 等人 2001；Verneret 等人 2014）；因 CRT 無跨膜區，此歸屬仍有爭議（Park & Kim 2017）。為完整性而列出（Tier 4） |

補充類別——來找我訊號（負責招募而非吞噬）：LPC → G2A/GPR4；核苷酸 ATP/UTP → P2Y2（經 PANX1 依賴性釋放）；S1P → S1PR1–5；CX3CL1/fractalkine → CX3CR1；RP S19 → CD88；TyrRS → CXCR3；EMAPII → CXCR1/CX3CR1（Xiao 2024，Table 2；Tier 4）。部分綜述將 PS 列為來找我線索之一，但 PS 主要是吃我標記；另見 [[Monocytes]]。

## 不許吃我訊號

抗吞噬的上限。多數經吞噬細胞上帶 ITIM 的抑制型受體作用；癌症與纖維化會過度表現這些訊號。

| 訊號 | 表現於 | 識別者 | 備註（證據層級） |
| --- | --- | --- | --- |
| [[CD47]] | 幾乎所有有核細胞 + 紅血球——經典煞車 | 巨噬細胞／樹突細胞上的[[SIRPalpha\|SIRPα]] → ITIM、SHP-1/2、myosin-II 累積阻斷吞噬 | 泛在表現；部分組織中表現量隨年齡上升（動脈、肺、光老化皮膚；Rogers 等人 2020，*Cells* 9:1695；PMID 32679764）。老化紅血球失去 CD47 會鬆開煞車並加速清除（紅血球模型為 Tier 3；Khandelwal 等人 2007，PMID 17725740；整體 Tier 4）。抗 CD47 藥物（單株抗體、SIRPα 誘餌、雙特異性抗體）仍屬試驗階段、無核准品項：Gilead 於 2024 年終止 magrolimab，因 ENHANCE-3 顯示無效且死亡增加（FDA 於 AML/MDS 完全擱置）；其餘實體腫瘤試驗自研發管線移除；其他藥物在 2024–25 年亦遇挫折（Tier 2） |
| CD24 | 人類腫瘤（小鼠 Cd24a 功能上不同）、發育中的造血細胞 | 巨噬細胞上的[[Siglec-10]] → 抑制性 SHP-1 | 與 CD47 並列的另一個不許吃我訊號：CD24–Siglec-10 阻斷可增強對表現 CD24 之人類腫瘤的吞噬（Barkal 等人 2019，*Nature*；PMID 31367043）（Tier 4） |
| PD-L1（CD274） | 腫瘤細胞、發炎組織 | 吞噬突觸處巨噬細胞上的 PD-1 | PD-L1 佔據巨噬細胞上的 PD-1 會抑制吞噬；阻斷此配對即核准腫瘤細胞被攝取（Gordon 等人 2017，*Nature* 545:495–499；PMID 28514441）（Tier 4）。PD-1/PD-L1 阻斷在腫瘤學已獲核准（Tier 1），但以 T 細胞免疫檢查點為標的，而非巨噬細胞路徑 |
| 唾液酸／α2,8-多聚唾液酸 | 健康活細胞（免疫、神經譜系） | Siglec（抑制型 I 型凝集素，含 Siglec-10、Siglec-7；α2,8-多聚唾液酸由 Siglec-11 識別） | 經唾液酸酶移除後，細胞轉為吃我狀態；紅血球的年齡相關去唾液酸化連結至吃我表（Tier 4） |
| β2-微小球蛋白（＋ MHC-I 呈現） | 有核細胞；腫瘤細胞常上調此軸 | 巨噬細胞上的 LILRB1（ILT2）；小鼠中樞神經系統的 LILRB2／PirB | 表面 MHC-I/β2M 經 LILRB1 設定抗吞噬門檻；體外與小鼠模型中，破壞 MHC-I 或 LILRB1 皆會增強腫瘤細胞吞噬（Barkal 等人 2018，*Nat Immunol* 19:76–84；PMID 29180808）（Tier 3）。PILRβ 為活化型 CD99 受體，KIR 為 NK 細胞受體，不屬此煞車 |
| CD31（PECAM-1） | 內皮、血小板、白血球 | 活白血球之間的同質性 CD31–CD31 結合；凋亡細胞上失去作用能力 | 「活細胞不許吃我」徽章：僅當標的細胞仍能經 CD31 傳訊時，同質性結合才阻斷攝取（體外報導；Tier 4） |

## 平衡法則及其失效模式

胞葬作用並非由單一訊號觸發，而是由吃我與不許吃我配體的整合呈現決定；[[Calreticulin]] 對 [[CD47]] 即為原型（Tier 4）。抑制型受體會提高吞噬所需的活化門檻（Kelley & Ravichandran 2021）；比值是定性簡稱，不是實測量。路徑邏輯：

1. 健康細胞 → 不對稱性維持（PS 經[[Flippase]]保持在內側；[[CD47]]、唾液酸、MHC-I 在外側）→ 無吞噬。
2. 死亡或壓力 → flippase 關閉 + [[Scramblase]] 活化（[[Eryptosis]] 為 Ca²⁺ 驅動；[[Apoptosis]] 為 caspase 驅動）→ PS 翻向外側；老化細胞中 CD47 常隨年齡流失 → 跨越門檻 → 吞噬，PS 途徑者為非發炎性。
3. 疾病狀態利用錯誤的一端：
   - 癌症過量表現煞車（CD47、CD24、PD-L1）——「不許吃我」阻斷是癌症免疫治療策略（Khalaji 2023）。
   - 纖維化與動脈粥樣硬化在下游損害胞葬作用（損害吃我識別），造成壞死核心與持續性發炎（動脈粥樣硬化胞葬作用資料，Tier 4–3）。
   - [[Eryptosis]] 過量（CKD、敗血症、血紅素病變）使清除飽和，並釋出 PS 陽性的促凝血細胞——另見 [[Eryptosis]] 與 eryptosis 過量／清除不足的任務輸出。
4. 免疫原性細胞死亡療法利用吃我端：蒽環類、光動力治療、部分放射治療後出現表面[[Calreticulin]]呈現。吃我訊號也會偏移適應性反應，因為除非同時搭配 CRT 與危險訊號，樹突細胞對 PS 陽性屍體的攝取是耐受原性的。

## 未解問題

- 特定組織中哪些細胞讀取哪一組訊號（CD47 vs CD24 vs C1q–CRT）取決於情境，且在體內尚未完整定位（跨組織為 Tier 5）。
- 在纖維化或動脈粥樣硬化中阻斷不許吃我煞車在機制上合理，但未經人體驗證；現有抗 CD47 臨床資料僅限腫瘤學（Tier 5）。
- 在單細胞解析度量測組織的 CD47:唾液酸:PS 比值是尚未解決的技術缺口（非自引用文獻重新推導）。

## 相關知識庫條目

[[Phosphatidylserine]] · [[CD47]] · [[Calreticulin]] · [[Efferocytosis]] · [[Eryptosis]] · [[Flippase]] · [[Scramblase]] · [[Apoptotic Bodies]] · [[Kupffer Cell]] · [[Cardiolipin]] · [[CXCL14]] · [[SIRPalpha]] · [[Annexin V]] · [[PINK1]] · [[p62]]

## 建議的後續工作

- 以試驗階段細節與 CD24–Siglec-10 軸擴充 [[CD47]]、[[Calreticulin]]、[[Efferocytosis]]。
- 候選新實體筆記：Siglec-10、MerTK（可視偏好以「Axl/Mer/Tyro3 TAM 家族」單一筆記處理）、β2-微小球蛋白（抗吞噬功能）、CD31 活細胞抗吞噬功能、PD-L1 巨噬細胞路徑、SLAMF7（eat-me 訊號，經 Mac-1）。依第 7 節規則放置：CD24/Siglec-10 → `_link/`，除非有符合的主題歸屬；MerTK → 免疫／胞葬作用主題。
