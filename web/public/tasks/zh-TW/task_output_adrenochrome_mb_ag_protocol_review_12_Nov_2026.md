---
title: 腎上腺色素、氨基胍與亞甲藍方案綜述
description: 彙整知識庫方案文件與公開網頁，探討腎上腺色素、氨基胍、亞甲藍與 carbazochrome，並納入截至 2026 年 11 月的近期外部研究，另與 Nesci 與 Algieri 2026 粒線體功能障礙與 inflammaging 綜述交叉比對；均標註證據層級。
created: 2026-11-12
updated: 2026-11-13
type: task-output
tags:
  - adrenochrome
  - aminoguanidine
  - methylene-blue
  - carbazochrome
  - mitohormesis
  - protocol-review
---

# 腎上腺色素、氨基胍與亞甲藍方案綜述

範圍：彙整知識庫來源，包括 `src/notes/adrenochrome/`（260 個檔案）、`src/notes/_link/` 實體與文件筆記、`src/tasks/adrenochrome_mb_ag/`（26 個檔案）、近期任務（`task_output_adrenochrome_eryptosis_crossover_04_Nov_2026`、`task_output_hardcoded_individual_biomarker_gates_26_Sep_2026`、2026 年 8 月 node-network traces）以及公開頁面 `web/public/pages/en-US/adrenochrome-protocol.html`，並與截至 2026 年 11 月 12 日的外部文獻比對。證據層級：Tier 1 = 人體隨機試驗；Tier 2 = 人體世代／關聯性或歷史臨床用途；Tier 3 = 囓齒類／體內動物；Tier 4 = 體外或離體人體血液／細胞；Tier 5 = 假說／未測試。

公開頁面標示為 `[Speculative]`，並明示 `untested in humans`（`adrenochrome-protocol.html:6-7,42,44-48`）。此標示與知識庫證據一致：MRR、GOPS 與 SRAC 組合均無直接組合研究；GOPS 自評 `7.2/10`，並承認缺乏直接組合研究（`_document_ - GOPS - glyco-oxidative proteostasis.md:29-39,93`）。

## 按化合物的證據層級

| 化合物與主張 | Tier | 狀態 |
| --- | --- | --- |
| [[Adrenochrome]] 為多巴胺能喪失的內源神經毒素 | 4 | 細胞模型中的機制支持；下文 2026 年數據強化神經毒性方向，不支持刻意曝露。 |
| [[Methylene blue]] 為變性血紅素血症解毒劑 | 1 | 已確立的臨床用途。並非長壽用途的證據。 |
| [[Methylene blue]] 為催化氧化還原循環劑與 tau 作用劑 | 3-4 | 囓齒類與細胞數據；僅有 staggered-start 小鼠數據。本次檢索未找到 2024-2026 年確認認知或 tau 效益的人體 RCT。 |
| [[Aminoguanidine]] 為 AGE 抑制劑 | 1-negative | 第三期糖尿病腎病變試驗失敗：腎小球腎炎、無顯著效益，未獲准（`_link/Aminoguanidine.md:38-45`）。2024-2026 年未找到新的 RCT。 |
| [[Carbazochrome]] 為止血劑 | 止血為 1；MRR hormesis 為 5 | 2025 年統合分析 PMID 40676674 與三盲 RCT PMID 39914600 僅處理手術止血。 |
| MRR、GOPS、SRAC 組合 | 5 | 假說。無測試過的組合；劑量為示意性估計（頁面 `:439-526,540`）。 |

## 近期外部研究與知識庫主張的關聯

### Aminochrome 與自噬體－溶小體融合，2026

Briceño et al.，*Antioxidants* 15(6):739（PMC13295424；PMID 42352045），分化後 SH-SY5Y 多巴胺能神經元曝露 50 uM aminochrome 16 小時：LC3b-LAMP1 Pearson 共定位下降 27%（`p<0.001`），LC3b-II 強度上升 81%（`p<0.01`），周核 vimentin 聚集上升 6 倍（`p<0.001`），4 小時 ubiquitin mRNA 上升 9 倍（`p<0.001`），與 bafilomycin A1 併用無額外 LC3b-II 上升，與自噬流量受損一致。Vinblastine 強化融合阻斷；rapamycin（10 uM）與 trehalose（100 mM）預處理在融合阻斷下仍部分減輕死亡。報告機制：aminochrome-tubulin 加合物、微管去穩定化、自噬體－溶小體融合阻斷、周核與核內 ubiquitin 聚集。Tier 4。該結果來自 SH-SY5Y 細胞；作為人體 Parkinson disease 因果機制仍未測試。

2026 年 aminochrome 單神經元神經毒素 preprint 與此方向一致。本次檢索未找到人體 aminochrome 曝露試驗。

### Carbazochrome 止血，2025

2025 年統合分析（PMID 40676674）報告 carbazochrome sodium sulfonate 加 tranexamic acid 在止血上優於單用 tranexamic acid（檢索時被引 6 次）。2025 年靜脈 carbazochrome sodium sulfonate 隨機三盲研究（PMID 39914600）處理圍手術期止血。這些來源未報告 NRF2/SIRT1、Complex III 超氧陰離子或 hormesis 終點。止血適應症為 Tier 1；MRR 觸發作用為 Tier 5。

### Methylene blue，2024-2026

本次檢索未找到新的 methylene blue 人體隨機試驗，針對認知、tau 病理、與變性血紅素血症無關的粒線體效益或壽命。知識庫主張建立在較早研究：Atamna, FASEB J. 2008（纖維母細胞衰老）；Atamna, Redox Biol. 2015；Tucker, Mol Neurobiol. 2018；Xiong et al., Sci Rep. 2017，均引自 `senescence/_document_ - Mitochondrial dysfunction in cellular senescence...:946-966`。培養衰老延遲為 Tier 4；tau 轉基因小鼠預防數據（病理前開始治療）為 Tier 3。

### Aminoguanidine，2024-2026

2024 年糖化綜述（Uceda et al., Biophys Rev）保留 pimagedine 作為 methylglyoxal 與 glyoxal 的原型二羰基捕捉劑。未找到糖尿病腎病變計畫復活。負面人體結果（Tier 1-negative）仍為最高層級人體證據；知識庫長期用途伴隨報告毒性模式（促氧化活性、自體免疫反應、維他命 B6 耗竭；`Aminoguanidine.md:38-45`）。

## 知識庫記錄的方案結構

- **MRR（mitohormetic redox relay）**（`_document_ - MRR - mitohormesis.md`，建立 2026-06-15，更新 2026-07-09）：carbazochrome 觸發加上 methylene blue 穿梭加上 NR/NMN 燃料加上 urolithin A 清理，提議活化 NRF2/SIRT1/PGC-1a。僅有提議檢測（`:66-74`）；Tier 4-5。
- **GOPS（glyco-oxidative proteostasis）**（`_document_ - GOPS - glyco-oxidative proteostasis.md`，2026-06-19）：[[Adrenochrome monoaminoguanidine]] 加 spermidine 1-5 mg 加 carnosine 500 mg-1 g。無直接組合研究（`:39,93`）；Tier 5。
- **SRAC（SASP-remodeling aminochrome complex）**（`_document_ - SRAC - SASP-Remodeling Aminochrome Complex.md`，2026-07-04，更新 2026-07-09）：第一階段 AMM 加 methylene blue 加 rapamycin 5 mg/week 加 GlyNAC，再接入第二階段 fisetin；08-09 Jul 修訂移除奈米顆粒遞送，並將 rapamycin/fisetin 序貫化（`:18-24`）；Tier 4-5。
- **大綱劑量**（`outline_adrenochrome_mb_ag_protocol_27_JUN_2026-00.md:53-55`）：口服 methylene blue 0.5-2 mg/kg/day；aminoguanidine 150-300 mg 每日兩次；標示組織胺不耐受風險。網頁方案列 methylene blue 37-75 mg/day、rapamycin 5 mg/week、fisetin 500-1500 mg、aminoguanidine 150-300 mg 每日兩次（`:439-526`），並附免責聲明，劑量均為估計、非驗證方案（`:540`）。

## 未解的機制矛盾

### Carbazochrome 氧化還原活性

`Carbazochrome.md:43-45` 指出 semicarbazone 阻斷單電子還原，使 carbazochrome 氧化還原靜默；而 `Carbazochrome.md:49` 主張 MRR 相關的 Complex III 超氧陰離子生成。2026 年 8 月 Round-3 trace（`node_network_adrenochrome_24_AUG_2026/...:35-38`）判定 carbazochrome 為氧化還原衰減，並移除 Complex-I edge，作為證據導向的 null。以目前 semicarbazone 化學描述，MRR 觸發主張仍未示範。

### Adrenochrome monoaminoguanidine 與二羰基捕捉

[[Aminoguanidine]] 經由其游離、親核性的 hydrazine 基（`-NH-NH2`）捕捉 1,2-dicarbonyl。在 [[Adrenochrome monoaminoguanidine]] 中，該基被消耗以形成與 indoline-dione 核心的 hydrazone 鍵（`_document_ - glyco-oxidative modulation.md:38-45`）。AMM 的 AGE 抑制因此缺乏陳述機制；知識庫列出未測試的替代解釋（前藥水解、僅 guanidine 活性、金屬螯合），但 GOPS/SRAC 文件仍宣稱 AMM 在衰老細胞中捕捉二羰基。同儕文獻缺乏 AMM 在現代衰老或膠原交聯模型的系統評估（`glyco-oxidative modulation.md:55`）。

### Aminochrome 與自噬方向

2026 年 SH-SY5Y 結果報告 aminochrome 阻斷自噬體－溶小體融合，並伴隨周核與核內聚集累積。方案方向（刻意以 aminochrome 家族氧化還原循環活化自噬）與 aminochrome 本身的報告效應相反；含 rapamycin 的階段在體外減輕死亡，但未恢復融合。Briceño et al. 方法使用 50 uM aminochrome（480 nm，molar extinction coefficient 3058 M-1 cm-1）；這些數值僅屬該模型，不推廣至其他 aminochromes。

## 知識庫證據中識別的安全門檻

- **[[NQO1]] rs1800566：** C609T T/T 為功能性 null（野生型活性 2-4%，Siegel et al. 1999）。2026 年 9 月 gate 分析（`task_output_hardcoded_individual_biomarker_gates_26_Sep_2026.md:123-129`）報告東亞帶因率約 20%，而 MRR 劑量未分層；NQO1-null 受試者經單電子 CYP450/b5-reductase 循環清除醌，未經雙電子解毒。`NQO1.md:62` 記錄同一缺口。
- **[[G6PD]] 缺乏：** methylene blue 對溶血的禁忌。知識庫將其正確框定為准入門檻，但未定義篩檢方案（09 Jul 2026 gap analysis `:35-40`）。
- **血清素症候群：** methylene blue 為強效 MAO-A 抑制劑；與 SSRI/SNRI 併用屬禁忌（`_link/_document_ - methylene blue and aminguanidine.md:85`）。
- **組織胺不耐受：** aminoguanidine 抑制腸道 diamine oxidase；長期使用報告造成膳食組織胺不耐受與自體免疫反應（`_link/_document_ - methylene blue and aminguanidine.md:87,89-90`）。
- **變性血紅素血症：** methylene blue 同時為提議的穿梭體與變性血紅素血症解毒劑；檢測變性血紅素須用 co-oximetry，非 pulse oximetry（`task_output_adrenochrome_gap_analysis_09_JUL_2026.md:35-40`）。
- **[[MnSOD]] rs4880 與 [[COMT]]：** 2026 年 9 月 gate 報告 MnSOD 活性 30-40% 變化，同等改變 SIRT3/SIRT4 hormetic window（`:102-104`），以及 [[COMT]] 狀態作為 adrenochrome/dopaminochrome 形成的門檻（`:73`）。方案劑量未編入此二門檻。
- **Hoffer 假說：** 精神分裂症的 [[Adrenochrome Hypothesis]]（Hoffer/Osmond，1950 年代）未經 Canadian MRC 與 APA 試驗證實，並於 1970 年代被主流精神醫學捨棄（`Abram Hoffer.md:39`）。混合且無法複製的紅血球溶血報告仍不可靠（`Adrenochrome Hypothesis.md:31`）。

## 與 Nesci 與 Algieri 2026（inflammaging 綜述）的交叉比對

來源：Nesci S, Algieri C. Mitochondrial dysfunction and inflammaging: a mechanistic bridge between bioenergetic failure and senescence. Geroscience 2026-10-08, doi:10.1007/s11357-026-02588-y（`src/notes/senescence/_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence.md`）。該綜述除 MRR 組分 [[Urolithin A]] 外，未直接討論 [[Adrenochrome]]、[[Aminoguanidine]]、[[Carbazochrome]] 或 [[Methylene blue]]；以下交叉比對屬機制性，非直接證據。

### 共享機制：OXPHOS 下降與 Complex I/III 電子漏出

Nesci 與 Algieri 將衰老框定為惡性循環：受損 OXPHOS 降低 ATP 輸出與膜電位，同時在 [[Complex I]] 與 [[Complex III]] 增加電子漏出，產生 [[Reactive Oxygen Species]] 進一步損傷 mtDNA、脂質與蛋白。知識庫 MRR 方案提議 [[Methylene blue]] 作為 Complex I 至 Complex IV 的電子穿梭，並以 carbazochrome/MB 脈衝作為 hormetic ROS 訊號。此綜述架構與知識庫自身的劑量翻轉觀察一致（MB 健康窗約 0.5-4 mg；2 mg/kg 以上促氧化翻轉，`_link/Methylene blue.md:32-33`）：在抗氧化緩衝受損且 [[Iron|鐵]] 恆態改變的老化粒線體中，外加氧化還原循環報告為使細胞對脂質過氧化與鐵死亡敏感，而非保持適應性。該綜述以鐵依賴性磷脂過氧化定義 [[Ferroptosis]]，粒線體參與視刺激而定（所檢系統中直接抑制 [[GPX4]] 後可有可無），而知識庫 adrenochrome 誘導鐵死亡主張（GPX4 硒半胱胺酸芳基化，類似 RSL3）仍為 Tier 5。

### NAD+/NADH 比值與 MiDAS 分泌表型

MiDAS 中，[[NAD+]]/[[NADH]] 比值下降觸發 [[AMPK]] 依賴的 [[p53]] 活化：此軸維持 [[p21]] 依賴性停滯，同時抑制 [[SASP]] 的 [[IL-1beta|IL-1]] 依賴臂，產生重寫而非放大的分泌表型。氧化還原平衡恢復（例如實驗系統中 pyruvate 補充）部分挽救 IL-1 臂，使 MiDAS 趨向更典型的 SASP。知識庫方案納入 NR/NMN 以提高 NAD+ 狀態，並預期降低衰老負擔。依 MiDAS 模型，NAD+ 補充預測 SASP 組成的質性轉移，而非已量測的衰老細胞清除。該綜述未報告人類數據證實 NAD+ 恢復可移除衰老細胞或延緩衰老。

### 自噬、mitophagy 與溶小體流量

Nesci 與 Algieri 指出，自噬標誌物豐度上升不可等同分解流量上升；酸化或蛋白水解受損限制粒線體週轉，儘管上游 mitophagy 訊號仍在，且巨噬細胞系統中 mitophagic 清除抑制 [[NLRP3 inflammasome|NLRP3]] 活化。2026 年 aminochrome 數據（50 uM，LC3b-LAMP1 共定位 -27%，與 bafilomycin A1 併用無額外 LC3b-II）符合流量阻斷模式。MRR/SRAC 將 rapamycin、[[Urolithin A]] 與 trehalose 類誘導賦予清理角色。該 RCT（urolithin A，n=66 老年人，2 個月），肌肉耐力改善，但主要終點（6 分鐘步行距離、最大 ATP 產能）組間差異未達統計顯著，作者表明數據未證實減緩衰老或 mitophagy 介導。因此方案的清理步驟在人體中與 aminoguanidine 同為 Tier 1-negative。

### Minority MOMP、mtDNA DAMPs 與方案缺失的讀數

該綜述描述 [[Minority MOMP|minority MOMP]] 使 BAX/BAK 依賴性 mtDNA 釋放與 [[cGAS-STING Pathway|cGAS-STING]] 介導的 SASP 調控，不伴隨細胞死亡；mtDNA、[[Cardiolipin]]、[[N-Formyl Peptides|N-formyl peptides]] 與粒線體 ROS 觸動 [[TLR9]]、[[NLRP3]] 與 cGAS-STING 而產生無菌發炎。作者表明 minority MOMP 在生理性人體衰老中的盛行率與定量貢獻未確立，且發炎輸出應聯合代謝狀態、膜完整性、DAMP 可近性與鄰近感知能力解讀。知識庫方案提議的讀數（SIRT3/SIRT4 比值、HRV 閘控劑量、co-oximetry 變性血紅素）未納入胞質 mtDNA、cGAS-STING 活性或 NLRP3 讀數。未納入 DAMP 感知的醌脈衝方案將漏掉該綜述的核心放大迴路。

### Heteroplasmy 閾值與基因型門檻

該綜述的 mtDNA 閾值模型（功能性隱性，直至突變與組織特異的 heteroplasmy 閾值，受 copy number 調節）與知識庫 NQO1 rs1800566 門檻（T/T 功能性 null，單電子循環而非雙電子解毒）結構平行。兩者均描述由亞臨床負荷轉為明顯功能障礙的勝任閾值，但方案劑量未編入此二閾值。Nesci 與 Algieri 警示，單一細胞呼吸缺陷不蘊含 ROS、衰老與發炎發生在同一細胞；方案按組織校準的 hormetic window 反向作出同一未陳述假設。

### 與 SRAC 共享的臨床轉譯限制

該綜述報告 dasatinib 加 quercetin 隨機第二期試驗（n=60 停經後女性）骨吸收標誌無顯著組間差異、阿茲海默病 dasatinib 加 quercetin 開放標示第一期（n=5，僅可行性，CSF 僅測得 dasatinib），以及急性痛風未對照 dapansutrile 研究。SRAC 序貫使用 fisetin 而非 dasatinib 加 quercetin，故所引試驗為類比而非直接；但轉譯缺口共享：人體未驗證衰老負擔、mitophagy 或 mtDAMP 活性的組織生物標誌，未定義反應族群，且報告慢性 inflammasome 或核酸感知抑制可能損害宿主防禦。該綜述結論指出，循環生物標誌或單一表現量測的變化，未證實粒線體品質控制恢復或衰老減緩；同一結論適用知識庫方案的生物標誌主張。

## 總結

近期證據未將 adrenochrome 家族化合物定位為人體驗證方案劑。最高層級人體數據對 aminoguanidine 為陰性（第三期失敗），對 methylene blue（變性血紅素血症）與 carbazochrome（止血）僅限窄非長壽適應症為陽性。最新機制研究（2026，Tier 4）將 aminochrome 描述為多巴胺能細胞中自噬體－溶小體融合阻斷劑與蛋白毒性劑。知識庫 MRR/GOPS/SRAC 構築仍為 Tier 5 假說，具三處承重內在矛盾（carbazochrome 氧化還原靜默 vs 觸發；hydrazine 消耗 vs AGE 捕捉；NQO1/G6PD 基因型未納入劑量）。任何未來方案修訂至少需要：AMM 的游離 hydrazine 檢測、結合物的體內水解動力學、在陳述奈莫爾 carbazochrome 劑量下直接量測 Complex III 超氧陰離子，以及基因型分層（NQO1、G6PD、rs4880）劑量範圍，方能提議人體曝露。

## 來源

- 知識庫：`src/notes/adrenochrome/Adrenochrome.md`、`Carbazochrome.md`、`NQO1.md`、`_document_ - glyco-oxidative modulation.md`、`Abram Hoffer.md`、`Adrenochrome Hypothesis.md`；`src/notes/_link/Methylene blue.md`、`Aminoguanidine.md`、`_document_ - methylene blue and aminguanidine.md`；`src/tasks/adrenochrome_mb_ag/` MRR/GOPS/SRAC 文件及 `outline_adrenochrome_mb_ag_protocol_27_JUN_2026-00.md`、`task_output_adrenochrome_gap_analysis_09_JUL_2026.md`；`src/tasks/task_output_adrenochrome_eryptosis_crossover_04_Nov_2026.md`、`task_output_hardcoded_individual_biomarker_gates_26_Sep_2026.md`；`web/public/pages/en-US/adrenochrome-protocol.html`、`adrenochrome-articles-and-figures.html`。
- 外部：Briceño et al., Antioxidants 2026;15(6):739（PMC13295424）；Alsaied et al. 2025 carbazochrome 統合分析（PMID 40676674）；Shi et al. 2025 carbazochrome RCT（PMID 39914600）；Uceda et al., Biophys Rev 2024；Thornalley 2003 pimagedine 綜述（PMID 14568006）。
- 交叉比對：Nesci & Algieri, Geroscience 2026-10-08, doi:10.1007/s11357-026-02588-y；知識庫副本 `src/notes/senescence/_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence.md`。
