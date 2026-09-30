---
title: 硬編碼的個體生物標記關卡 — 被缺失基因型掩蓋的、遭忽視的療法
description: 彙整那些離散、個體指派且大致不可變的生物標記（基因型、微生物代謝型、核型、功能缺失等位基因），它們決定了 vault 中追蹤的各項療法的反應。每筆條目陳述其離散取值、盛行率、所調節的 vault 主題、缺少該值時被錯失或反而受害的療法，以及證據強度。包含 vault 中已建模的三個生物標記（COMT Val158Met、尿石素代謝型 A/B/0、XX/XY）與約 25 個 vault 中缺席的候選，另附建議的最小檢測組合與分級證據評分準則。
created: 2026-09-26
updated: 2026-09-26
tags:
  - task-output
  - biomarkers
  - pharmacogenomics
  - precision-medicine
  - metabotypes
  - hormesis
  - comt
  - sirtuins
  - autophagy
  - oxidative-stress
  - senescence
source: #
---

# 硬編碼的個體生物標記關卡

## 本文件處理的問題

vault 是以機制為中心建構的：粒線體激效作用、sirtuins、自噬、衰老、氧化壓力、表觀遺傳、細胞死亡，以及兒茶酚胺軸。機制告訴你*某個化合物做了什麼*。它幾乎從不告訴你*它是否會對你產生作用*。

vault 已在三處知道這點——而且只有三處：

1. **[[Val158Met]]**（rs4680，[[COMT]] Val/Val 快 vs. Met/Met 慢）——典範性的關卡。快型 COMT 帶因者從 α-生育酚補充獲得 **+18% 癌症發生率**（HR 1.18，1.06–1.31），而 Met/Met 帶因者則減少約 12%（HR 0.88）——見 [[task_output_comt_vitamin_e_genotype_gate_24_Sep_2026]]。
2. **尿石素代謝型 A / B / 0**（[[Metabotypes]]、[[Urolithin A]]）——一個*微生物的*基因型。只有代謝型 A 轉換者（依某些世代約佔 40% 人口；某美國世代基線僅 12% 檢測得到 UA）才會製造 [[Urolithin A]]。飲食性沒食子單寧（石榴、核桃、草莓）對代謝型-0 個體毫無作用，對代謝型-B 個體也幾乎無效；只有直接補充 UA（Mitopure）對他們有效。這是 vault 中最乾淨的一個案例：一種對大多數人口會靜默失敗的療法。
3. **XX / XY**——[[Estrogen]] 作為主要介導因子。在 [[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]] 中有極詳盡的記錄：XX 神經元經 caspase-8/3 凋亡死亡，XY 神經元則經 [[PARP1]]/AIF 壞死；雷帕黴素對雌性的壽命延長較多，熱量限制對雄性較多；[[SIRT6]] 過度表現是雄性專屬的；[[NAD+]] 在雄性中下降，但在雌性中則是波動。

vault 中其餘的一切——3,174 篇筆記、12 個主題樞紐——都預設了一個無差異的人類。本文件彙整的是那些**離散、個體指派且大致不可變**、足以打破該預設的取值。

> [!important] 此處「硬編碼」的意涵
> **硬編碼的個體生物標記**是指一次指派、很早確定、並在數十年間穩定的取值：胚系基因型、體細胞功能缺失狀態、微生物的一組基因、核型。相對照的是**連續性的實驗室數值**（血清鐵蛋白、hs-CRP、空腹胰島素），那是可改變的狀態讀數。硬編碼這一類之所以重要，是因為它*可事先得知*，因此構成正當的關卡——你可以在開始療法之前就下單檢測，而不是在一次失敗的試驗之後。它同時意味著這個關卡無法用生活方式「修正」，所以被錯誤歸類的患者會永遠被錯誤歸類。

---

## 全文使用的證據評分準則

| 等級 | 意涵 |
| --- | --- |
| **A** | 在 ≥2 個隨機／獨立的人類世代中重複，或機制與人類藥物基因體學一致 |
| **B** | 單一強大人類世代，或具機制合理性的連貫人類數據；重複次數不足 |
| **C** | 僅有關聯、受血統混淆，或已記錄到基因型—表型不一致 |
| **D** | 機制上合理但屬推測——標記為研究議題，而非可行動的主張 |

---

## Tier 1 — vault 中已有（範本）

這三項建立了模式。之所以列在最前，是因為它們定下了 vault 生物標記筆記應有的撰寫標準。

### 核型 XX / XY（及其下的亞型）

**離散取值：** 46,XX · 46,XY · 45,X（Turner）· 47,XXY（Klinefelter）· 45,X/46,XX 嵌合 · 以及同一人體內的*功能性*性別狀態——停經前 XX、停經後 XX（「雌激素懸崖」）、圍絕經期、睪固酮受抑制的 XY、接受雄性素阻斷的 XY（[[Sex Steroid Ablation]]）。

**被調節的 vault 主題：** [[Sirtuins]]（SIRT3／SIRT1／SIRT6 皆對雌激素有反應）、[[NAD+]] 代謝、[[MnSOD]]／[[SIRT3-SIRT4 Ratio]] 激效窗口、[[Autophagy]]／[[mTORC1]]／[[AMPK]]、[[Apoptosis]] vs. 壞死的型式選擇、[[NF-κB]]／[[SASP]]／[[Inflammaging]]、[[Telomere]] 生物學、[[p53]]、[[Bcl-2]] 家族、癌症易感性（X 連鎖抑癌基因保護女性）。

**它所指向的、遭忽視的療法：**
- **女性，圍絕經期：** 雌激素的流失不只是一個骨／心血管事件——它是 SIRT3、SIRT1 與 MnSOD 活性同時下調的協調性降檔。人類心臟老化是女性專屬的（老年女性心室顯示 ↓SIRT1 + ↓SIRT3 + ↓SOD2 + NF-κB 位移 + ↑巨噬細胞；老年男性心臟則否——*Aging* 2019, PMC6503880）。**全身荷爾蒙替代或以 SIRT3 為標的的介入，沒有開給任何人。** 每一位 50 歲後、血脂正常且無 AD 診斷的女性，都默默處於 SIRT3 缺乏的那一臂。
- **男性，AR 阻斷後：** 「雌激素懸崖」的對應物是睪固酮抑制。接受 [[Sex Steroid Ablation]] 的 XY 會失去女性仍保留的 SIRT1/FOXO3a→[[MnSOD]]／CAT 抗氧化程式——這是支持經皮（非肝臟）睪固酮投與以維持 SIRT3／SOD2 語調的實質論據。
- **細胞死亡療法的反轉：** XX 與 XY 細胞受到同樣的傷害，卻經由*不同的*機制死亡。在 XX 背景下開發的 [[Ferroptosis]] 或 [[Apoptosis]] 致敏劑，在 XY 背景下可能表現較差，反之亦然。vault 中沒有任何一項衰老或鐵死亡誘導試驗報告過性別分層的反應者分析——見 [[task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026]]。

**證據：** A（多個獨立團隊；體內與體外人類神經元研究，加上小鼠壽命 ITP 數據）。

### COMT Val158Met（rs4680）

**離散取值：** Val/Val（G/G）快 · Val/Met（A/G）中間 · Met/Met（A/A）慢。活性跨度 3–4 倍。

**被調節的 vault 主題：** [[Dopamine]]／[[Prefrontal Cortex]]／[[Working Memory]]、[[Adrenochrome]]／[[Dopaminochrome]] 的形成、[[Methylation Cycle]] 的甲基供體耐受度、[[Alpha-tocopherol]]／[[Vitamin E]]、[[Aspirin]]、[[Fisetin]]／[[Quercetin]]／EGCG 的 COMT 抑制、[[Modafinil]]。

**它所指向的、遭忽視的療法：**
- **快型（Val/Val），歐洲血統約 23–29%，漢族約 52%：** **不要**服用高劑量 α-生育酚。兩項隨機試驗（WGHS、ATBC）中，每個 Val 等位基因在補充劑組的 HR 為 1.11、安慰劑組為 0.95，P 交互作用 <.001，姐妹 SNP rs4818 一致（G/G HR 1.29）。危害在 50 IU／日與 600 IU 隔日兩種劑量下都出現——**它在 400 IU／日上限以下仍具劑量穩健性**，因此「維生素 E 控制在 400 IU 以下以保留粒線體激效作用」的規則並不能保護這一群人。這約等於每四個服用補充劑的人中就有一人的癌症風險可測量地升高。
- **慢型（Met/Met），約 28%：** 甲基供體（[[Methylfolate]]、[[MethylB12]]、[[SAMe]]、[[Betaine]]）會誘發焦慮／失眠；[[Folinic acid]] 是變通做法。阿斯匹靈的心血管保護集中在這一類。
- **兩臂皆是：** 非瑟酮是經驗證的 COMT *受質-抑制劑*（IC₅₀ 2.6–5.8 µM），會生成 [[Geraldol]] 並消耗 SAMe。在 3–4 倍的活性跨度下，非瑟酮的衰老溶解暴露量在慢型 COMT 中翻倍、快型中減半——而**任何地方都沒有任何試驗按 COMT 基因型對衰老溶解劑做分層。**

**證據：** A（兩項 RCT，加上機制層面的 HCT116 COMT 敲低一致性）。

### 尿石素代謝型 A / B / 0

**離散取值：** UM-A（產生 [[Urolithin A]] 作為終末代謝物，帶有 [[Gordonibacter urolithinfaciens]]）· UM-B（經由 [[Ellagibacter isourolithinifaciens]] 與 [[Enterocloster]] 產生 UA 加上 [[Isourolithin A]]／uro-B）· UM-0（無可檢出的尿石素）。盛行率依世代而異：石榴汁挑戰試驗中約 40% 為 A，某美國世代基線僅 12% 有可檢出的 UA 葡萄糖醛酸苷，第三個世代中約 10% 為非製造者。

**被調節的 vault 主題：** [[Mitophagy]]、[[AMPK]]／[[mTORC1]]／[[PGC-1α]] 的粒線體品質管制、[[Oxidative Stress]]／[[NAD+]]、[[Metabolic Syndrome]]、[[Cancer]] 預防、[[Biomarker]]。

**它所指向的、遭忽視的療法：** 這是典範案例。vault 已經陳述過——「*飲食性沒食子單寧策略對大多數非 A 型個體失敗，因此必須直接補充尿石素 A 或進行代謝型篩檢*」——然而 vault 中沒有任何一項療法依此分層。具體而言：**約 60% 服用富含沒食子單寧之「粒線體健康」補充劑的人，實際上什麼都沒得到**，而那約 20% 屬 UM-B 的人則得到的是另一種分子（異尿石素 A），其藥理特性截然不同且大致未被表征。vault 的 [[Urolithins]] 筆記完全未提及 Mitopure 的劑量邏輯。未來任何亞精胺／非瑟酮／小檗鹼的堆疊邏輯也應依 UM 分層。

**證據：** 表型為 A（三個實驗室在獨立世代中重複）；下游效力主張為 B。

---

## Tier 2 — 強候選但 vault 中缺席

依「被錯過的療法人口規模 × 關卡強度」排序。

### SOD2（MnSOD）rs4880 Ala16Val

**離散取值：** Ala/Ala · Ala/Val · Val/Val。Val 等位基因的變異頻率在多數受研究的族群中是常見等位基因。

**被調節的 vault 主題：** [[MnSOD]]、[[SIRT3-SIRT4 Ratio]]（SIRT3 在 Lys68/Lys122 去乙醯化 MnSOD——這是 vault 自己「氧化還原轉盤」生物標記的*主要*標的）、[[Oxidative Stress]]、[[Adrenochrome]]、[[Mitohormesis]] 窗口寬度、[[Parkinson's Disease]]／[[Neuromelanin]]。

**為何重要：** vault 的核心操作性生物標記是 SIRT3/SIRT4 比值，而它明確承認可行動的讀數是「*MnSOD 在 Lys68/Lys122 的乙醯化狀態*」。rs4880 是唯一會改變 MnSOD 輸入效率與穩態活性的常見胚系變異，而且改變幅度達 30–40%。設定 SIRT3/SIRT4 比值的那個酵素若位移 30–40%，就是**激效窗口位移 30–40%**——而 vault 正是說，在 MRR 協定中給 [[Carbazochrome]] 或 [[Methylene blue]] 定劑量之前，必須先校準這個參數。vault 沒有這篇筆記，而 `src/tasks/adrenochrome_mb_ag/` 中的 MRR 文件只按組織校準劑量，從不按基因型。

> [!warning] 基因型—表型的方向確實有爭議
> 在常見的表述中，Val 被報告為*降低* MnSOD 活性（基質超氧陰離子較多、氧化壓力較高），但一項測量研究卻發現 T/T 個體的 SOD2 活性比 C/C 個體*高* 33%（PMID 16538174）。不要把某個方向硬編碼進協定。請測量活性，不要從 rs4880 推論。相關聯想：rs4880 Val/Val 與糖尿病視網膜病變（OR 1.87，1.42–2.46，*Electron J Gen Med* 2024）、CALGB-10102 中天冬醯胺酶的肝毒性（CC 基因型）、特發性心肌病變、伴顱顱自律神經症狀的偏頭痛。

**證據：** C（基因型—表型不一致在主要文獻中已有記錄；表型可測量，就該測量）。

### mTOR 路徑／sirolimus 的藥物基因體學

**離散取值：** CYP3A5 \*1 表現型 vs. 非表現型 · CYP3A4 LOF vs. GOF · FKBP1A（FKBP12）功能缺失帶因 · ABCB1 高表現 · 基線胰島素抗性 vs. 胰島素敏感。

**被調節的 vault 主題：** [[mTORC1]]、[[Autophagy]]、[[mTORopathies]]、[[AMPK]]、[[IRS1]]、經由 mTORC1 依賴性免疫再生的衰老溶解劑。

**為何重要：** 雷帕黴素是 vault 中重複驗證最多的單一延壽化合物，而**約 20–40% 的超指示用途使用者回報無益處**。主因是藥動力學而非藥理學：sirolimus 的 AUC 個體間變異係數 >40%，CYP3A5 \*1 表現型者（歐洲血統 15–25%、非洲血統 60–70%）清除速度快 40–60%，需要按比例更高的劑量，而在 Mannick 2021 的劑量爬升研究中，以「每週 2 mg」給藥的受試者有 22% 的谷濃度 <1 ng/mL。**每週 2 mg 的 CYP3A5 表現型者在藥動力學上劑量不足，卻會被記錄為 mTOR 的「無反應者」——這是一種對有效藥物的假陰性。** 這是整個 mTOR 領域中最乾淨的遭忽視療法案例：該個體並非對療法有抗藥性，而是從未被有效暴露。

FKBP12 LOF 變異是真正的第二類：它們破壞機制的第一步（FKBP12–雷帕黴素複合物的形成），因此劑量爬升*無法*拯救他們。任何在沒有全血谷濃度與 p70S6K1（Thr389）抑制測量的情況下回報「無反應」的雷帕黴素協定，都是在測量錯的東西。

**證據：** B（移植世代中特性良好的 PK 基因體學；外推至超指示的長壽用劑量屬推論）。

### NQO1 C609T（rs1800566, Pro187Ser）

**離散取值：** C/C（完全活性）· C/T（約降低 3 倍）· T/T（**NQO1-null**，活性僅為野生型的 2–4%）。T/T 在歐洲／白種人與黑人族群中為 2–5%，**在亞洲族群則約 20%**。

**被調節的 vault 主題：** [[NQO1]]（位於 `adrenochrome/`）、[[Oxidative Stress]]、[[Adrenochrome]]／[[Aminochromes]]——這個酵素決定了醌是被**二電子還原成穩定的氫醌（解毒）**，還是被**單電子還原成會循環並產生超氧陰離子的半醌**。另有 [[Hormesis]]（醌驅動的氧化還原中繼正是 MRR 機制）、[[Cancer]]／[[p53]] 的活化。

**為何重要：** NQO1 狀態會翻轉醌暴露的*符號*。T/T 個體在功能上是 NQO1-null——在唾液、骨髓、肺上皮與內皮中皆無可檢出的 NQO1 蛋白（Siegel et al. 1999）。他們改以 CYP450／b5-還原酶的單電子途徑來解毒醌類，包括 [[Adrenochrome]] 及相關的 aminochrome。vault 的 MRR 協定以 [[Methylene blue]] 與 [[Carbazochrome]] 遞送氧化還原訊號，並以 [[Aminoguanidine]] 終止它——**而那整套劑量邏輯完全沒有考量受試者是否根本有能力清除這種醌。** 在 MRR 協定中的 NQO1-null 個體，是最可能把適應性脈衝轉化為氧化損傷的人。這是一道具有明確機制、且在東亞族群的帶因率約 20% 的硬關卡。

次要而言：NQO1 C609T 是癌症易感性的修飾因子（膀胱、結直腸、食道、胃竇門、心臟、白血病），證據有正有反但有統合分析支持；null 基因型在絲裂黴素 C／膀胱灌注醌類化療中也是**旁觀者效應**的放大器，因為 NQO1 的生物活化正是該療法的細胞毒機制。

**證據：** 酵素-null 表型為 A（已在人類組織中直接測量）；癌症關聯為 C。

### KEAP1／NRF2 誘導性單倍型

**離散取值：** 高誘導性 vs. 低誘導性單倍型區塊（例如 rs356219 G vs. A、rs6723482 T vs. C、rs11081354）。

**被調節的 vault 主題：** [[Keap1]]（位於 `adrenochrome/`）、[[NRF2]]、[[Oxidative Stress]]，以及 vault 中每一個激效性劑量的問題。

**為何重要：** NRF2 誘導*就是*激效作用的適應臂。低誘導性單倍型意味著同樣的 ROS 脈衝只產生較小的 NRF2／ARE 轉錄反應，因此 vault 反覆劃出的「適應 vs. 毒性」邊界——[[Hormetic Window]]——被往下移。這是激效劑量文獻如此難以重現的族群層級解釋：**不同的人有不同的激效窗口，而 vault 沒有對應的變數。** 注意 rs356219 已經出現在 vault 中，卻是孤立無援的，沒有任何生物標記詮釋。

**證據：** B（單倍型結構已確立；臨床劑量後果未經證實）。

### MC1R 功能缺失（紅髮／褐黑素表型）

**離散取值：** R 類變異（R151C、R160W、D294H、R142H、Ins86_87A）vs. r 類（V60L、D84E、V92M、I155T、R163Q）vs. 野生型。**超過 80% 的 Fitzpatrick 皮膚型-I 紅髮個體在兩個等位基因上都帶有失能的 MC1R 變異。** 約 70% 的一般人口帶有至少 1 個 MC1R 變異（Leiden 研究中 1 個：45.2%、2 個：24.8%、3 個：0.9%）。

**被調節的 vault 主題：** [[MC1R]]（位於 `neuromelanin/`）、[[Pheomelanin]]／[[Neuromelanin]]、[[Melanins]]／[[Tyrosinase]]、[[Parkinson's Disease]]、[[Melanoma]]、[[Oxidative Stress]]。

**為何重要：** vault 的 `neuromelanin/` 樞紐已把 MC1R 變異連結到更早的 PD 發病與較低的星狀膠細胞保護——然後就停住了。有操作價值的是氧化化學層面的連結：**褐黑素不僅無法抵禦 UV，它在合成過程中會主動產生 ROS 並耗竭穀胱甘肽。** 因此 R 類帶因者就是一個由色素合成路徑造成構因性較高氧化負荷的人，而且其黑色素瘤風險約為 2 倍且**與 UV 暴露無關**（≥2 個變異者 OR 2.13；校正 UV 後為 1.5–2.6 倍）。vault 中沒有任何人據以行動的兩項具體後果：

- **日曬／日光浴暴露對 R 類帶因者的傷害，遠大於其 Fitzpatrick 型別所暗示的程度**——標準建議（「你容易曬傷，別曬太陽」）低估了這種與 UV-*無關*的內在風險。
- **在 SIRT3／SIRT4 氧化還原轉盤的框架下，MC1R 狀態是激效窗口的一個未被測量的輸入。** MC1R 激動正在被探索用於神經保護；正確的第一個問題不是「MC1R 激動有效嗎」，而是「受試者身上是哪一個等位基因」。

同樣被低估的：MC1R 功能缺失在高緯度促進維生素 D 生合成（演化上的選擇壓力），同時在低 UV 環境下耗竭葉酸——意味著帶因者的維生素 D／葉酸處理方式有所不同，這又繞回 [[Methylation]] 與 [[Vitamin D]] 筆記。

**證據：** 變異→功能的對應為 A（Beaumont 2007 對 9 個等位基因所做的系統性體外功能分析）以及與 UV 無關的黑色素瘤風險為 A；PD 風險交互作用為 B。

### TMAO 製造者狀態（微生物基因型）

**離散取值：** 高製造者（膽鹼／肉鹼挑戰後尿液 TMAO 陡升）· 低製造者 · 非製造者。帶有產 TMA 的 *Cutibacterium*／*Prevotella* 等，vs. 具有還原 TMA 菌群（*Lactobacillus*、*Eubacterium limosum*）。

**被調節的 vault 主題：** [[Trimethylamine N-oxide]]（位於 `_link/`）、[[SIRT1]]（vault 筆記已記錄 SIRT1 在血管平滑肌中減弱 TMAO 的作用）、[[Oxidative Stress]]、[[Inflammaging]]、[[Cellular Senescence]]（TMAO 加速衰老是實際運作的機制）、[[Atherosclerosis]]。

**為何重要：** 這是第二個微生物代謝型關卡，而 vault 有 TMAO 筆記卻**沒有**製造者分層的邏輯——與尿石素的結構性遺漏完全相同。高製造者會從紅肉／蛋／膽鹼飲食獲得 TMAO 負荷，低製造者則不會，而標準飲食建議卻對兩者一視同仁。與 UM-A 的類比完全精確：表型是二元的、檢測便宜（標準化挑戰後的尿液 TMAO）、穩定，且它決定了某項飲食介入是否根本是無效操作。

**證據：** 表型為 A；下游臨床效量為 C。

### HFE C282Y（與 H63D）

**離散取值：** C/C 野生型 · C/H 或 H/H（單一異型合子，輕微）· **C282Y/C282Y（同型合子，唯一與一般血鐵質沈著有 >80% 歸因的基因型）** · C282Y/H63D 複合型。C282Y 同型合子於北歐血統約 0.5%，在北歐地區族群中更高。

**被調節的 vault 主題：** [[Ferritin]]（位於 `oxidative-stress/`）、[[GPX4]]、鐵死亡（整個 `cell-death/` 的鐵死亡群）、[[Lipid Peroxidation]]、[[Oxidative Stress]]、[[Cancer]]（C282Y 同型合子者的乳癌與結直腸癌風險升高）。

**為何重要：** vault 的鐵死亡內容是一份機制目錄——GPX4、ACSL4、FSP1、鐵。**它從未提到鐵負荷過量是一個帶因率 1–3% 的孟德爾式疾病。** C282Y/C282Y 同型合子者的實質鐵長期偏高，因此游離鐵池長期擴大，因此 vault 中每一套鐵死亡誘導策略的門檻都位移了。臨床推論既真實又有證據基礎：轉鐵蛋白飽和度 >45% 加上鐵蛋白 >300（男性／停經後）或 >200（停經前）是既定的治療觸發條件——**放血療法**。因此 C282Y 同型合子者就是那種對鐵死亡相關介入（鐵螯合、去鐵胺）已有適應症的人，而對其施行以抗氧化為主的協定，等於在治療一個遺傳性鐵病變的症狀。男性風險高於停經前女性，因為月經本身就是一個鐵的匯——這又把這個生物標記連結回 XX/XY。

**證據：** 基因型→鐵負荷的關係與治療門檻為 A（Hemochromatosis International／BIOIRON 建議）；鐵死亡門檻的外推為 B。

### APOE ε4（劑量：ε2/ε3 · ε3/ε3 · ε3/ε4 · ε4/ε4）

**離散取值：** ε2/3/4 異構型劑量。ε4 同型合子約 10 倍 AD 風險；單一等位基因約 3 倍。

**被調節的 vault 主題：** [[APOE4]]、[[APOE3 Christchurch]]、[[cGAS]]–[[STING]]／IFN-I 微膠細胞訊號（vault 自己的表述——APOE4「使微膠細胞預設激發並放大 IFN-I」）、[[SASP]]、微膠細胞中的 [[Mitochondria]]、[[Inflammaging]]、[[Aging]]。

**為何重要：** vault 把 APOE4 描述為 cGAS-STING 的*致敏等位基因*——一個沒有附帶任何治療後果的機制陳述。但它同時意味著：**在 ε4 帶因者體內，cGAS 抑制的預測上限遠高於非帶因者**，而一項收錄未分層受試者的 cGAS 抑制劑試驗會被稀釋。這正是 [[task_output_comt_vitamin_e_genotype_gate_24_Sep_2026]] 那個範本套用在另一個基因上。

飲食文獻是這個陷阱最鮮明的例證。直覺動作——ε4 帶因者腦葡萄糖代謝受損，所以給他們生酮——**被人類 RCT 證據否定**：在 AC-1202（TRIAD，*Nutr Metab* 2009）中，MCT／酮體補充在*非* ε4 帶因者中更有效；一份 2022 年的範文回顧發現生酮制剂對 ε4 帶因者無效，而高飽和脂肪飲食特別有害；一份 2025 年的傘狀回顧則結論（地中海 diet 除外）「飲食介入…在老年 APOE ε4 帶因者中通常無效」。與此同時，*小鼠* 數據（GeroScience 2025）顯示生酮飲食可改善雌性 APOE4 小鼠的記憶——透過 CREB/ERK 與發炎機制，且在雌性中尤為明顯。囓齒動物結果與人類結果之間的落差，加上雌性專屬效應，再加上 cGAS-STING 敏感性，意味著**APOE4 是一個至少有三重不同關卡的分層變數——而 vault 目前只把它當成一個風險等位基因。**

**證據：** AD 風險劑量關係為 A；cGAS-STING 預設激發機制為 A；飲食結論為 B；任何特定 ε4 標靶療法為 D。

### KLOTHO KL-VS 單倍型

**離散取值：** rs9536314 + rs9527025 → KL-VS 異型合子（功能上有利，klotho 略高）vs. 非帶因者 vs. KL-VS 同型合子（罕見，klotho *較低*、壽命較短、認知較差）。

**被調節的 vault 主題：** [[Klotho]]、[[Aging]]、[[ApoE]]／[[APOE4]]（KL-VS 異型合子與*較低的* AD 風險相關，且這點*特別*見於 ε4 帶因者）、[[cGAS]]／[[STING]]／[[Inflammaging]]、[[Neuroinflammation]]。

**為何重要：** 兩件事。第一，交互作用才是重點：**KL-VS 異型合性可減輕與年齡相關的神經發炎（CSF IL-6、S100B）與神經退化（α-syn、NfL）——而且這種保護在 AD 風險富集的世代中更大**，意味著它與 APOE ε4 交互作用，而非獨立於它。在 vault 的衰老／SASP 表述中，這是一個*SASP 鄰近神經發炎表型的可測量修飾因子*——可說是人類遺傳學中最接近「抗衰老基因型」的東西。第二，可溶性 Klotho 是一種運動因子（exerkine）：規律運動會提升 s-Klotho（12 項 RCT 的 Hedges' g 為 1.3，N=621），且在訓練量上可能有倒 U 型，峰值約在每週 150 分鐘。因此 KL-VS 狀態既是基因型，也是一個*可測量的運動因子反應標的*——這是生物標記與藥效學讀數為同一分子的罕見案例。

**證據：** B（多個人類世代，含一個有 CSF 數據的 AD 風險富集世代；同型合子 N 數小）。

### TERT 啟動子基因型（胚系 rs2853669）與 TERTp 突變狀態

**離散取值：** 胚系 rs2853669 A/A vs. G/G · 體細胞 TERT 啟動子 −124 C>T／−146 C>T 有無。

**被調節的 vault 主題：** [[Telomere]]／[[Telomere Attrition]]、[[Replicative Senescence]]、[[p53]]／[[p16]]、癌症（TERTp 是 >50 種癌症中最反覆出現的突變之一，膠質母細胞瘤中約 62–83%）、壽命。

**為何重要：** vault 把端粒耗損當作典型的衰老時鐘，而一個*胚系* TERT 啟動子等位基因就是該時鐘終生的設定值。rs2853669 的 G 破壞了 TERT 轉錄起始位點上游的一個 ETS/TCF 結合位點（Ets2），降低 TERT 轉錄並削弱體細胞熱點突變的效應。在*帶有*體細胞 TERTp 突變的患者中，胚系 rs2853669 狀態會改變存活：**TT 基因型標示較差的生存**，而常見等位基因在膀胱癌與膠質瘤中與較低的總生存期與較高的復發率相關。這是教科書式的預測性生物標記情境——胚系 × 體細胞的交互作用——而 vault 完全沒有 TERT 筆記。

長壽面的解讀則令人不安。由於 TERT 活化是複製性永生的速率限制步驟，**胚系 TERT／轉錄狀態就是複製儲備力的硬編碼上限**，任何生活方式、任何 NMN、任何雷帕黴素都改變不了它。每一個正在建構衰老介入協定的人都該知道自己落在這個分布的哪一臂。

**證據：** 啟動子突變的盛行率與預後交互作用為 A；單看胚系的效應為 B（統合分析對單獨的 rs2853669 是陰性的——它是一個*修飾因子*，不是風險基因，這正是 COMT 的模式）。

### SIRT3 rs11555236 與 SIRT6 rs9997679／N308K／A313S

**離散取值：** rs11555236 A/G（與推定 SIRT3 增強子中的一段 VNTR 連鎖不平衡）· rs4980329 · rs9997679 · SIRT6 N308K 與 A313S 蛋白變異（在百歲人瑞中富集）。

**被調節的 vault 主題：** [[Sirtuins]] 本身、[[SIRT3]]、[[SIRT6]]、[[MnSOD]]（SIRT3 → SOD2 Lys68 去乙醯化）、[[Centenarians]]、[[Senescence]]（依 vault 自己的文件筆記，SIRT6 變異「延緩衰老」）。

**為何重要：** vault 其實已經有這些——只是不*可行動*。rs11555236 在一個義大利世代中與男性壽命相關，在一個較大的 pooled 世代中未能通過驗證，接著在 TRELONG 中被重新找到，但經性別分層後**僅在女性中**具有顯著性。純合者在 PBMC 中顯示 SIRT3 表現量增加。因此 vault 中重複驗證最多的人類 sirtuin—壽命發現，在一項研究中是性別專屬的，在另一項中則是性別相反的——而這正是 XX/XY 生物標記與 SIRT3 生物標記必須聯合而非分開解讀的情境。

SIRT6 更為尖銳：SIRT6 過度表現**只在雄性**中延長壽命（Kanfi 2012），芬蘭 rs117385980 的壽命關聯出現在**芬蘭男性**身上，而與 rs9997679 連結的 N308K／A313S 變異會提升 SIRT6 活性並延緩衰老。**一個慢代謝型的 SIRT6 變異，加上 XY，再加上雄性專屬的壽命效應，是一個自洽的三方對齊——而 vault 把這三件事放在三篇獨立筆記裡，從未把它們整合在一起。**

**證據：** B（關聯有重複，但效應量不一致；性別交互作用才是穩定的特徵）。

---

## Tier 3 — 合理但大致不在 vault 中，關卡較弱或較窄

| 生物標記 | 離散取值 | 被調節的 vault 主題 | 遭忽視療法的故事 | 等級 |
| --- | --- | --- | --- | --- |
| **ALDH2 rs671（Glu487Lys）** | \*1/\*1 · \*1/\*2 · \*2/\*2（東亞族群中至多約 40% 帶有至少一個） | [[Oxidative Stress]]（4-HNE）、[[Adrenochrome]]／aminochrome 清除、[[Aging]]、激效作用 | ALDH2 在高粒線體組織中清除脂質過氧化醛類（4-HNE）。\*2 對乙醛的 Km **超出可利用的細胞 NAD+ 約 15 倍**。由於 ALDH2 依賴 NAD+，而 NAD+ 正是 NMN／NR 與 SIRT 軸所操控的對象，低活性的 \*2 帶因者就是一個其 NAD+ **補充標的與醛類清除能力呈反比**的個體。這也是已知最清楚的低激效／低壓力耐受基因型。vault 中沒有 ALDH2 筆記。 | B |
| **CYP1A2 rs762551 + ADORA2A rs5751876** | CYP1A2 A/A 快 · A/C 或 C/C 慢 · ADORA2A T/T 高敏感／易焦慮 vs. C/C 睡眠敏感 | [[Green tea]]（vault：「適度影響咖啡因清除」）、[[Dopamine]]／[[Prefrontal Cortex]]、焦慮、經由運動的激效作用 | 慢型咖啡因代謝者若採用以咖啡因為基礎的訓練前補充劑，其半衰期跨度達 2–12 小時；CYP1A2 AA 從咖啡因獲得的*認知*益處較多（反應時間 −18 vs. −1.0 ms），儘管運動增益效果相同。此外，咖啡與 PD 的關聯在 CYP1A2 慢型代謝者中**最強**——這是 vault 的 PD 材料中一個藥物基因體學 × 藥物基因體學的交互作用。 | A（PK）、B（結果） |
| **PON1 Q192R（rs662）+ L55M（rs854560）** | 192 QQ/QR/RR · 55 LL/LM/MM，另加可測量的 diazoxonase 表型 | [[PON1]]、[[Lipid Peroxidation]]／氧化 LDL、[[Oxidative Stress]]、[[Aging]] | PON1 活性排序為 RR > QR > QQ 與 LL > LM > MM——但 **Jarvik 2000 顯示表型在*基因型內部*變異極大**，某位 MM 個體可以優於某位 LL 個體。這是 vault 中關於「基因型不足、*必須測量活性*」最乾淨的論證。PON1 活性低是冠心病事件的獨立風險因子。與 vault 的 [[Lipid Peroxidation]]／維生素 E 群直接相關。 | A（酵素）／C（疾病） |
| **CYP2C9／VKORC1／CYP2D6／SLCO1B1** | 代謝者表型分箱 | [[Modafinil]]／[[nootropic]]、[[Aspirin]]、[[Warfarin]] 相關、一般藥理學 | 這些是臨床*已驗證*的藥物基因體學關卡（CPIC 等級），而 vault 使用了這四類藥物卻完全沒有基因型關卡。[[Modafinil]] 已被註明與 COMT 基因型相關；再加上 CYP2D6 就成了一個雙基因預測因子。 | A |
| **GPX1 Pro200Leu（rs1050450）+ CAT −262T** | LL/LP/PP · CC/CT/TT | [[GPX4]]、[[Lipid Peroxidation]]、硒的處理、[[Oxidative Stress]] | GPX1 Pro200Leu 是*硒*反應的遺傳修飾因子。RCT 證據（Miller 2012，*Am J Clin Nutr*）發現該變異**並不**實質修飾全血 GPx 對硒補充的反應——這是有用的陰性結果：一個已經被檢驗過、證明確實不構成關卡的關卡。CAT −262T TT 較不易發生自發性流產。 | C |
| **HFE 之外的鐵：hepcidin／ferroportin、轉鐵蛋白飽和度** | 連續，但有孟德爾修飾基因（HAMP、TFR2、SLC40A1） | 鐵死亡群 | 非 HFE 的孟德爾式血鐵質沈著症基因是少數族裔鐵負荷過量的成因，而 vault 中完全缺席。若正在設計鐵死亡協定，這些人就是「沒有 HFE C282Y 但仍然鐵負荷過量」的個體。 | B |
| **PON1 + GPX1 + SOD2 + NQO1 作為複合式「氧化還原容量」組合** | 四向 | [[Mitohormesis]]／[[Hormetic Window]] | 個別來看這些都是 C 級。合起來它們界定了一個人的*還原當量回收能力*，而這正是 vault 自己的激效窗口模型所需要的機制變數。複合指標可能比任何單一 SNP 更穩健——而 vault 從未以這種方式來框定它。 | D（作為構建概念） |
| **PPARG Pro12Ala（rs1801282）／FTO rs9939609／PNPLA3 I148M／TCF7L2** | 各 SNP 的基因型分箱 | [[Insulin Resistance]]、[[AMPK]]／[[mTORC1]]、[[Metabolic Syndrome]]、[[Adiponectin]]、[[Liver]] | PNPLA3 I148M 在 NAFLD 中**減弱菸酸的有益效果**（Front Nutr 2023），且在 2026 年被證實會把肝細胞脂質代謝重新接線至 VLCFA 累積與程式性細胞死亡（*JCI Insight* 2026）——一個同時改變治療反應與細胞死亡型式的基因型。PPARG G 等位基因帶因者在高脂攝取下減重較少，但在高 MUFA 下較不肥胖。FTO rs9939609 純合者在某項統合分析中減重*較多*，在另一項（Livingstone 2016）中則*無*效應——一個已記錄在案的反應者標記不一致案例。 | B/C |
| **MTHFR C677T（rs1801133）+ MTRR A66G + MTHFD1** | TT/CT/CC 等 | [[Methylation Cycle]]、[[Homocysteine]]、[[COMT]] | vault 中已有筆記，但被框定為*補充劑耐受度*建議，而非關卡。真正重要的交互作用是**聯合的**（MTHFR × COMT）甲基供體表型：慢型 COMT 的 TT 個體與慢型 COMT 的 CC 個體是不同的處方問題。 | B |
| **VDR FokI（rs1079756）／GC（rs1800897）** | FF/Ff/ff | [[Vitamin D]]、[[Calcium]]、骨、[[Oxidative Stress]] | 儘管 [[Vitamin D]] 存在，vault 中卻沒有 VDR 筆記。對 vault 的主題而言優先度低。 | C |
| **mtDNA 單倍群（H, J, T, U, K, rCRS）** | 單倍群指派 | [[mtDNA]]、[[Mitochondrial DNA]]、[[Oxidative Phosphorylation]]、[[Mitohormesis]] | 對一個以粒線體為中心的 vault 而言，這是最被嚴重低估的硬編碼生物標記。單倍群在基線 ROS 產生、解偶聯能力與抗氧化反應上各不相同，且為母系遺傳（因此在每項研究中都與母系血統的混淆因子共同分離）。高 ROS 單倍群者與低 ROS 單倍群者的粒線體激效閾值不同，目前卻受到完全相同的對待。文獻真實但重複次數不足、且高度混淆——故列為 D。 | D |
| **G6PD 缺乏** | 基因型專屬的酵素活性類別（地中海型、非洲型、亞洲型變異） | [[Oxidative Stress]]／溶血、methylene blue 安全性、氧化劑挑戰 | vault 中已有（`adrenochrome/G6PD deficiency.md`），作為 [[Methylene blue]] 的*禁忌症*。框定正確。此處列出以求完整——它正是「改變某項 vault 療法是否可被採用的硬關卡」的範本。 | A |
| **TREM2 R47H** | R/R · R/H · H/H | [[Neuroinflammation]]、微膠細胞、[[SASP]] | 與 [[APOE4]] 配對——vault 的 APOE4 筆記已點名這項協同。R47H 帶因者在每一項以微膠細胞為標的的介入上，都有不同的預期上限。 | B |
| **XIST／XCI 偏斜；45,X 嵌合；47,XXY** | 偏斜比例；核型 | [[X-Chromosome Inactivation]]、[[XIST]]、[[Aneuploidy]]、[[Trisomy]] | vault 有 `X-Chromosome Inactivation.md` 與 `Aneuploidy.md`，但都是機制筆記，沒有個體劑量內容。嚴重偏斜的 XCI 型態會改變每個細胞的有效 X 連鎖基因劑量，是一部分「特發性」女性好發自體免疫與神經發炎表型的候選解釋——而那正是 vault 的 [[SASP]]／[[Inflammaging]] 領域。 | D |
| **KL／可溶性 klotho 濃度；FGF21 濃度；hs-CRP；HOMA-IR** | 連續 | [[Klotho]]、[[FGF21]]、[[hs-CRP]]、[[Insulin Resistance]] | 列出是為了標示**邊界**：這些是 vault 的*狀態*讀數，不是硬編碼關卡。它們是正確的藥效學監測指標，卻是錯誤的分層變數。兩類必須分開。 | — |

---

## 橫跨性發現

### 1. vault 的荷爾蒙／生物標記覆蓋相對於其機制覆蓋是倒置的

`comt/` 有 46 篇筆記，卻是 vault 中唯一真正的基因型筆記（[[Val158Met]]）。`_link/` 有 1,812 篇筆記。機制的發展極為充分；個體層級的分層除了那一個目錄之外，實質上是缺席的。vault 中每一篇描述*某化合物做什麼*的筆記，都隱含著未說出口的第二個子句：*對誰*。

### 2. 即使在已有基因型筆記之處，基因型與表型的區別仍被低估

[[PON1]] 與 [[MnSOD]] 兩個案例都顯示，一個基因型分箱內可以包含實際酵素活性相差 2 倍以上的個體。[[Val158Met]] 之所以運作良好，是因為 COMT 活性被 rs4680 *嚴格*決定（3–4 倍的乾淨分佈，箱內變異很小）。這很罕見。**建立這份清單時的一個實用分診規則：優先選擇基因型→功能近乎決定性的生物標記；當其非如此時，則優先使用活性檢驗。** [[PON1]]（diazoxonase）與 SOD2（MnSOD 活性）都有經驗證的活性檢驗——vault 應把這些視為一級筆記。

### 3. 最受忽視的生物標記類別是微生物的，不是胚系的

vault 有一個發展完善的微生物代謝型（尿石素，位於 `adrenochrome/Urolithins.md` 與 `_link/Metabotypes.md`）與一個完全未觸及的（TMAO）。但 vault 的補充劑堆疊——亞精胺、非瑟酮、小檗鹼、尿石素、槲皮素、白藜蘆醇——在很大程度上是靠多酚與微生物組介導的。**如果代謝型不對，整個堆疊就是無效操作**，而 vault 的劑量邏輯從不提出這個問題。`_link/Metabotypes.md` 甚至點出了這個模式（「NAD+ 代謝型… 飲食反應代謝型… 內型」），然後就停住了。

### 4. vault 中幾乎沒有任何東西在反應者層級做性別分層

[[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]] 已記錄性別差異在每個路徑層級都是根本性的。本次回顧顯示其*後果*並未被推導出來：除了 SIRT3／SIRT6 的壽命 SNP 之外，vault 的基因型發現都沒有與 XX/XY 交叉。SIRT3 的案例正是此點重要的證明——同一個 SNP 在一個世代中對男性顯著，在另一個中對女性顯著。

### 5. 「代謝型」目前是一個裝了兩種不同東西的容器

[[Metabotypes]] 把 (a) **胚系基因型**（分子層次）與 (b) **微生物轉換者表型**（生態層次）混在同一個標題下。它們的穩定性、測量方式與可改變性都不同——胚系基因型無法改變，微生物表型則可以（益生菌、依 2017 年異尿石素 A 分離工作所開發的次世代益生菌、抗生素、益生元）。把兩者拆開會讓這個概念變得可行動。

---

## 建議的最小檢測組合

若要為一位 vault 追蹤中的個人下單一套檢測以下是那些同時符合 (a) 取值離散、(b) 可事先得知、(c) 改變的是一項*可採用*的療法而非邊緣性療法、且 (d) vault 有機制理由相信其重要的項目。

| # | 檢測 | 離散取值 | 改變什麼 |
| --- | --- | --- | --- |
| 1 | 核型 + 生殖狀態（XX/XY、停經階段） | 類別 | [[Estrogen]] 依賴型療法（全身 HRT、SIRT3 活化）是否構成適應症；對每一項細胞死亡與 mTOR 結果做性別分層 |
| 2 | COMT rs4680 | Val/Val · Val/Met · Met/Met | 高劑量 [[Alpha-tocopherol]] 是保護（+12%）還是有害（+18%） |
| 3 | 尿石素代謝型（石榴挑戰後的尿液 UA-葡萄糖醛酸苷） | A · B · 0 | 飲食性沒食子單寧是否有效，或需要直接給予 UA |
| 4 | MC1R 變異類別 | R 類 · r 類 · 野生型 | 來自褐黑素的基線氧化負荷；PD 風險；與 UV 無關的黑色素瘤風險 |
| 5 | NQO1 rs1800566 | C/C · C/T · T/T（null） | 以醌為基礎的激效作用（[[Methylene blue]]／[[Carbazochrome]]／MRR）能否被清除，還是會循環成氧化損傷 |
| 6 | CYP3A5（加上 CYP3A4、ABCB1）與 FKBP1A | 表現型／非表現型 · LOF 帶因 | 雷帕黴素是否曾被有效*暴露*；可區分 PK 無反應與真正的無反應 |
| 7 | HFE C282Y／H63D + 鐵蛋白 + 轉鐵蛋白飽和度 | 基因型 + 生化 | 放血／鐵管理是否已構成適應症；位移鐵死亡門檻 |
| 8 | SOD2 rs4880 **加上** MnSOD 活性 | 基因型 + 實測活性 | 校準 [[SIRT3-SIRT4 Ratio]] 的氧化還原轉盤，進而校準每一個 MRR／激效性劑量 |
| 9 | TMAO 製造者狀態 | 高 · 低 · 無 | 那份產生 TMAO 的飲食是否正被交給一個高製造者 |
| 10 | APOE ε4 劑量 | ε2/ε3 · ε3/ε3 · ε3/ε4 · ε4/ε4 | 對 cGAS-STING 標靶試驗做分層；讓飲食關卡朝*正確*方向運行（遠離飽和脂肪生酮、轉向地中海飲食） |
| 11 | KL-VS 單倍型 + s-Klotho | HET · NC ·（罕見） homo | 預期的神經發炎保護；運動因子反應標的 |
| 12 | TERT rs2853669 + 端粒長度 | A/A · G/G + 實測 TL | 設定複製儲備；修飾任何 TERT 突變癌症的預後 |
| 13 | SIRT3 rs11555236／rs4980329、SIRT6 rs117385980／rs9997679 | 基因型 | 與 #1 交叉——vault 中唯一的 sirtuin—壽命發現都是性別專屬的 |
| 14 | CYP2C9／VKORC1 · CYP2D6 · CYP1A2+ADORA2A · SLCO1B1 | 代謝者分箱 | 對 vault 中既有藥物（[[Modafinil]]、[[Aspirin]]、[[Green tea]]／EGCG）臨床上已驗證的關卡 |
| 15 | PON1 基因型**加上** diazoxonase 活性 | 基因型 + 活性 | vault 中「為何兩者都需要」的實例 |
| 16 | mtDNA 單倍群 | 群組指派 | 粒線體 vault 從未指派的唯一硬編碼變數——D 級，但概念上缺口最大 |

一套**捕捉最大遺漏療法質量的最小三項篩檢**：**#2（COMT）+ #3（尿石素代謝型）+ #6（CYP3A5）**，因為三者合起來涵蓋 (a) 一種可測量地傷害約 25% 使用者的療法、(b) 一種在約 60% 人群中靜默無效的療法，以及 (c) 一種其表面上的「無反應」通常只是暴露量不足的療法。

---

## 本文件並未主張的事

- **此處沒有任何一項是處方。** 有幾道關卡（快型 COMT 中的 α-生育酚、MRR 中的 NQO1-null）具有足夠的*機制 + 觀察性*依據，可作為嚴肅的警示，但尚非經驗證的臨床規則。請為主張評級，而不是為情緒評級。
- **血統是硬限制。** COMT／維生素 E 關卡是在兩個歐洲血統世代中證明的，而其等位基因頻率依族群差異極大（Val/Val 為 29% 歐洲 vs. 52% 漢族）。NQO1 T/T 在歐洲／黑人族群中為 2–5%，在亞洲則約 20%——這個關卡*在曾被研究的族群中罕見，在未被研究的族群中卻常見*。任何套用在血統來源地之外的組合都屬外推。
- **遺傳決定論不是失敗模式；缺席才是。** COMT 的結果並不是說 α-生育酚不好，而是說約 25% 的人根本不該服用它，而沒有人知道。可行動的步驟是測量，不是重新詮釋。
- **連續性生物標記被刻意排除**，除非列為邊界標記。空腹胰島素、hs-CRP、s-Klotho、鐵蛋白與表觀遺傳時鐘是正確的*藥效學*監測指標；把他們硬編碼成分層變數會是類別錯誤。
- **D 級項目（mtDNA 單倍群、作為劑量變數的 KEAP1／NRF2 單倍型、XCI 偏斜）是研究議題，不是協定。** 它們出現在本文件中，是因為在一個粒線體與激效作用的 vault 中，某項測量的*缺席*本身就是那個發現。

## 建議的 vault 擴充（尚未執行）

- 建立 `_link/Hard-Coded Biomarker.md` 樞紐，帶有 tier-1／tier-2 結構，並從 [[Biomarker]] 與 [[Biomarkers]] 做交叉引用。
- 將 [[Metabotypes]] 拆成胚系基因型與微生物轉換者兩半。
- 將 [[NQO1]] rs1800566 C609T 的內容加入 `adrenochrome/NQO1.md`，連同其對 MRR 劑量關卡的意涵。
- 在 `adrenochrome/` 的 MnSOD 筆記中加入一節 MnSOD 活性，把 rs4880 與 [[SIRT3-SIRT4 Ratio]] 氧化還原轉盤交叉連結。
- 在 `comt/COMT.md` 加入「基因型關卡」一節，交叉引用維生素 E 任務輸出與非瑟酮的分層缺口。
- 在 [[SIRT3]] 與 [[SIRT6]] 中為 rs11555236／rs117385980／rs9997679 加入性別交叉。
- 建立 `cell-death/Hemochromatosis.md` 或 `oxidative-stress/Hereditary Hemochromatosis.md` 作為鐵死亡門檻的入口（vault 中任何地方都沒有 HFE、血鐵質沈著症或 C282Y 筆記）。

## 來源

主要：Hall KT et al.，*JNCI* 111(7):684–694，2019（doi:10.1093/jnci/djy204, PMID 30624689）— COMT × α-生育酚，WGHS + ATBC。| Hall KT et al.，*ATVB* 34(9):2160–2167，2014 — COMT × aspirin，β-胡蘿蔔素。| Beaumont YA et al.，*Hum Mol Genet* 16(18):2249–2260，2007（doi:10.1093/hmg/ddm177）— MC1R 變異的系統性功能分析。| Wendt AK et al.，*JAMA Dermatol* 2016 — 與 UV 無關的 MC1R 黑色素瘤風險。| Siegel D et al.，*Pharmacogenetics* 9(1):113–121，1999 — 人類組織中的 NQO1 C609T 基因型—表型。| Jarvik GP et al.，*ATVB* 20(11):2441–2447，2000 — PON1 表型 > 基因型。| Diederichsen M et al.，*PLoS One* 2013 — APOE／KL-VS，AD 風險富集世代中的 CSF 生物標記。| Taub H et al.，2016（PEARL）／Mannick JB et al.，*Sci Transl Med*／*Aging Cell* — sirolimus 劑量、谷濃度、PD-1。| Adam-Vizi V & Tretter L. — ALDH2 的 Km 超出可利用的 NAD+。| Andreux PA et al.，*Nat Metab* 1(6):595–603，2019 — 尿石素 A 人類 RCT。| Del Rio D et al.，2020 — 跨代謝型的尿石素 A 直接補充（*Eur J Clin Nutr*）。| Kanfi S et al.，*Nature* 2012 — SIRT6 的雄性專屬壽命效應。| Roichman R et al.，*Nat Commun* 2021，PMID 34050173 — SIRT6 在兩性、肝臟 NAD+。| Goronzy JJ et al.，*Trends Genet* 2014 — SIRT3／SIRT6 壽命 SNP。| Giunco S et al.，*Oncotarget* 2017 — TERT 啟動子 rs2853669 統合分析。| Tennent W et al.，*J Caffeine Adenosine Res* 10(4):371–381，2020 — CYP1A2／ADORA2A／AHR。| Nehlig A，*Eur J Appl Physiol* 2018 — 咖啡因快／慢代謝者。| Lamming DW et al.，*Science* 335:1638–1643，2012 — 經由 mTORC2 流失造成的雷帕黴素誘導性胰島素抗性。

次要：Yardimci et al. 關於 APOE ε4 飲食模式的傘狀回顧（2025）。| APOE ε4 帶因者中飲食因素的範文回顧，*J Nutr Health Aging* 2022。| GeroScience 2025 — 生酮飲食、雌性 APOE4 小鼠。| Thompson M et al.，*Aging Cell* 2023 — PNPLA3 I148M、菸酸與 NAFLD。| JCI Insight 2026 — PNPLA3-I148M 將肝細胞脂質代謝重新接線至程式性細胞死亡。| Miller JC et al.，*Am J Clin Nutr* 2012 — GPX1 Pro200Leu 與硒反應（陰性試驗）。| Krikorian D et al.；Nutrition & Metabolism 6:31，2009（TRIAD AC-1202）。| Adams PC et al.，*Haematologica* 2017 — Hemochromatosis International 治療建議。| Won Kim et al.／Malov S et al.，*Eur J Appl Physiol* 2020 — CYP1A2 × 咖啡因認知。| Hirvonen M et al.，2017 — SIRT6 rs117385980，芬蘭男性。| TRELONG 聯盟 — rs11555236、rs4980329。

**vault 交叉引用：** [[Val158Met]] · [[COMT]] · [[Metabotypes]] · [[Urolithin A]] · [[MC1R]] · [[NQO1]] · [[PON1]] · [[MnSOD]]／[[MnSOD]] · [[SIRT3-SIRT4 Ratio]] · [[APOE4]] · [[Klotho]] · [[mTORC1]] · [[Telomere Attrition]] · [[task_output_comt_vitamin_e_genotype_gate_24_Sep_2026]] · [[task_output_gender_specific_attributes_vault_topics_02_SEP_2026]] · [[task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026]] · [[task_output_sex_dimorphic_cell_death_05_Sep_2026]] · [[task_output_male_distributed_topology_vs_estrogen_hub_05_SEP_2026]]
