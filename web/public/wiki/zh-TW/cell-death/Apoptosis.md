---
title: Apoptosis
description: "凋亡（程式性細胞死亡）是一種高度受調控的機制，可在不引發發炎的情況下清除受損、感染、多餘或具潛在癌變風險的細胞。"
protected: true
created: 2026-05-29
updated: 2026-09-14
tags:
  - biological-process
  - apoptosis
aliases: []
---

# 凋亡

**凋亡**（程式性細胞死亡）是一種高度受調控的機制，可在不引發發炎的情況下清除受損、感染、多餘或具潛在癌變風險的細胞。

## 機制與誘發因素

- **粒線體途徑：**高濃度的[[Reactive Oxygen Species]]（ROS）會損傷[[Mitochondria]]，導致**細胞色素 c**釋放，進而活化半胱天冬酶級聯反應（例如[[Caspase-3]]），造成細胞死亡。
- **DNA 損傷反應：**嚴重的[[DNA Damage]]會活化[[p53]]，後者可將凋亡作為失效保護機制加以觸發。
- **交互作用：**凋亡常與[[Autophagy]]發生交互作用（cross-talk），以決定壓力下的細胞命運。

> [!info]
> 來源：[[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> 凋亡與[[Parthanatos]]相互拮抗，但兩者比單純的雙節點開關更為緊密交織：嚴重的[[PARP1]]過度活化會耗竭[[NAD+]]/[[ATP]]並排除凋亡的執行（DNA 損傷嚴重 → parthanatos；損傷較輕 → 暫時性下降 → 凋亡），而凋亡性的[[Caspases]]會在 PARP1 的 DNA 結合域與催化域之間切割 PARP1，以保留 ATP 供凋亡使用。這種交互作用是否延伸至此之外仍是未解問題；[[Apoptosis-Inducing Factor|AIF]]轉位在兩者中皆會發生，而[[89-kDa PARP1 Fragment]]可作為細胞質中的 PAR 載體，供給 AIF 介導的死亡。

## 在[[Aging]]與表觀遺傳學中的角色

- **表觀遺傳—凋亡軸：**[[Epigenetics]]作為決定細胞存活與否的調控層。促凋亡基因（如 *FAS*、*BAX* 或 *TP53*）的高甲基化可能阻礙受損細胞的清除，增加[[Cancer]]風險。
- **[[Sirtuins]]：**如[[SIRT1]]與[[SIRT6]]（依賴 NAD+）這類 sirtuin 可調節 p53，以平衡存活與凋亡。
- **凋亡抗性：**老化過程中，部分受損細胞會對凋亡產生抗性並進入[[Senescence]]，分泌促發炎細胞激素（[[SASP|衰老相關分泌表型]]），進而驅動**炎性衰老（Inflammaging）**。
- **神經退化：**有絲分裂後組織中過度的凋亡會導致[[Alzheimer's Disease]]與[[Parkinson's Disease]]的神經元喪失。

## 在癌症研究中的角色

- **標記：**常見標記包括[[Caspase-3|切割後的半胱天冬酶-3]]與[[Annexin V]]結合。
- **治療性誘導：**
    - 規避凋亡是癌症的特徵之一。
    - 促氧化療法（例如[[Ionizing Radiation]]、高劑量[[Ascorbic Acid]]）旨在誘導腫瘤細胞凋亡。
    - [[melittin]]與[[Honeybee venom]]可在多種癌細胞株中誘導凋亡。
    - [[Ivermectin]]透過上調[[Bax]]、下調[[Bcl-2]]，經粒線體途徑誘導凋亡。

## 在[[Cellular Reprogramming]]中的角色

- 凋亡是重編程效率的屏障。病毒轉導的壓力以及[[c-Myc]]等因子的過度表現會觸發[[p53]]介導的凋亡。
- 轉導細胞中高比例的凋亡會顯著降低製備[[Induced Pluripotent Stem Cells]]的效率。

## 凋亡效應因子的翻譯後調節

> [!important] 五個關鍵的磷酸化開關
> 凋亡網路由多個決定細胞命運的磷酸化／去磷酸化開關所調控：
> - **[[Caspase-8]]**：被[[Src]]於 Tyr380 磷酸化（阻斷凋亡、促進遷移）；被[[SHP1]]去磷酸化（恢復凋亡敏感性）
> - **[[Caspase-7]]**：被[[PAK2]]於 Ser30/Thr173/Ser239 磷酸化並抑制（驅動乳癌的化療抗性）
> - **[[BAX]]**：被[[ERK2]]於 Thr167 磷酸化並與[[Pin1]]結合（促存活）；或被[[JNK]]/[[p38 MAPK]]於同一位置磷酸化（促凋亡）
> - **[[BAK]]**：由 Tyr108 磷酸化維持失活狀態；被[[PTPN5]]去磷酸化以「授權」其活化
> - **[[XIAP]]**：經[[TBK1]]/[[IKKepsilon]]於 Ser430 磷酸化而降解（促凋亡）；經[[Akt]]於 Ser87 磷酸化而穩定（促存活）

## 細胞死亡的性別差異

> [!important] 雌性死於凋亡；雄性死於壞死
> 這可說是本知識庫中最根本的性別差異。在壓力下，雌性細胞優先進行**半胱天冬酶依賴性凋亡**（可控、非發炎性），雄性細胞則優先進行**PARP-1/AIF 依賴性壞死**（不可控、促發炎）。此分歧具**細胞自主性**（在無激素培養基與青春期前動物中依然存在），對中風、心肌梗死、神經退化與癌症治療具有重大意義。另見[[p53]]關於衰老與凋亡決策之性別特異調節。

### XX/XY 死亡途徑分歧

| 特徵 | 雌性（XX） | 雄性（XY） | 引用 |
|---------|-------------|------------|----------|
| **主要死亡模式** | 半胱天冬酶依賴性凋亡 | PARP-1/AIF 依賴性壞死 | Liu et al., *Stroke* 2009; McCullough et al., *J Cereb Blood Flow Metab* 2005 |
| **Caspase-3 活化** | 缺血後較高；泛半胱天冬酶抑制劑僅保護雌性 | 缺血後較低 | Liu et al., *Stroke* 2009 |
| **Caspase-8 活化** | 顯著較高；核轉位以 XX 為主（兩性皆增加，依 Liu 以雌性為主） | 較低；核轉位微弱或缺如 | Sharma et al., *ASN Neuro* 2011; Liu et al., *Stroke* 2009 |
| **細胞色素 C 釋放** | 較早；較強（確切時間點需查主要頁面） | 延遲 | Sharma et al., *ASN Neuro* 2011 |
| **AIF 轉位** | 延遲／極少 | 較早；強（Sharma 中約 1 小時內） | Sharma et al., *ASN Neuro* 2011 |
| **Bcl-2 表現** | 有 E2 支持時較高（OVX+E2 vs OVX-oil 設計） | 較低（成年心臟情境） | Dubal et al., *J Neurosci* 1999 (PMID 10414967) |
| **PARP-1 抑制** | 加重損傷（PARP-1 在雌性中具保護作用） | 具保護性（縮小梗死範圍） | McCullough et al., 2005 |
| **心肌梗死後凋亡** | 凋亡指數 2.6% | 25.9%（高 10 倍） | Biondi-Zoccai/Abbate et al., *Heart* 2005 |

### 機制

- **XX 神經元**：粒線體細胞色素 C → 凋亡小體 → [[Caspase-9]] → [[Caspase-3]]；[[Caspase-8]]亦被活化並轉位至細胞核切割 PARP-2。
- **XY 神經元**：[[PARP-1]]過度活化 → [[NAD+]]耗竭 → 能量衰竭 → AIF 自粒線體釋放 → 核轉位 → 大規模（50-kbp）DNA 片段化（半胱天冬酶非依賴性）。
- **Bax KO 減少 BNSTp/AVPV 的總數性別差異**（Forger et al., *PNAS* 2004；TH+ AVPV 例外仍存在）。**[[Bcl-2]]過表達減少**性別差異（Zup et al., *J Neurosci* 2003）。
- **[[XIAP]]鑲嵌現象：**X 連鎖的 XIAP（BIRC4, Xq25）使雌性終身成為鑲嵌體；攜帶者的 X 失活若偏向野生型即具保護作用，隨機偏向則使其敏感，據此設定組織層級的凋亡閾值（見[[XIAP]]；Dziadzio et al. 2015）。

### 雌激素–[[Bcl-2]]神經保護

- 雌激素透過 ERα/β 轉錄活化上調[[Bcl-2]]：E2 可防止 OVX 雌性中損傷誘導的 bcl-2 下調（Dubal et al., *J Neurosci* 1999, PMID 10414967）。完整雌性 vs 雄性的百分比已移除——Dubal 比較的是 OVX+E2 與 OVX-oil 雌性。
- 雌激素在[[Alzheimer's Disease]]情境中上調抗凋亡的 Bcl-w、下調促凋亡的[[Bim]]（Patterson et al., *J Neurosci* 2007）。

### 治療意涵

> **[[Caspases|半胱天冬酶]]抑制劑可能優先保護雌性；[[PARP-1]]/AIF 抑制劑可能優先保護雄性。**這已在中風模型中獲得實驗證實：泛半胱天冬酶抑制劑 Q-VD-OPh 僅在雌性中減少梗死體積，而 PARP-1 敲除可保護雄性、卻加重雌性的損傷。

### 參考文獻（細胞死亡的性別差異）

**核心範式 — XX 凋亡 vs XY PARP-1/AIF 壞死**

- **McCullough LD, Zeng Z, Blizzard KK, Debchoudhury I, Hurn PD.** Ischemic nitric oxide and poly(ADP-ribose) polymerase-1 in cerebral ischemia: male toxicity, female protection. *J Cereb Blood Flow Metab.* 2005;25(4):502–512. doi:[10.1038/sj.jcbfm.9600059](https://doi.org/10.1038/sj.jcbfm.9600059). PMID: [15689952](https://pubmed.ncbi.nlm.nih.gov/15689952/). — PARP-1 刪除／nNOS 抑制可保護雄性、加重雌性損傷；PARP-1 的缺失會逆轉雌二醇的神經保護作用。
- **Yuan M, Siegel C, Zeng Z, Li J, Liu F, McCullough LD.** Sex differences in the response to activation of the poly(ADP-ribose) polymerase pathway after experimental stroke. *Exp Neurol.* 2009;217(1):210–218. doi:[10.1016/j.expneurol.2009.02.012](https://doi.org/10.1016/j.expneurol.2009.02.012). — PARP-1 途徑驅動雄性的壞死性死亡；證實 PARP-1 下游存在性別特異的分歧。
- **Liu F, Li Z, Li J, Siegel C, Yuan R, McCullough LD.** Sex differences in caspase activation after experimentally induced cerebral ischemia. *Stroke.* 2009;40(5):1842–1848. doi:[10.1161/STROKEAHA.108.538686](https://doi.org/10.1161/STROKEAHA.108.538686). PMID: [19265047](https://pubmed.ncbi.nlm.nih.gov/19265047/). — 雌性在缺血後展現較高／較早的半胱天冬酶活化；泛半胱天冬酶抑制僅保護雌性。
- **McCullough LD, et al.** Sex differences in the response to PARP-1 deletion and caspase inhibition after stroke. *Stroke.* 2011;42(3):739–745. PMID: [21311064](https://pubmed.ncbi.nlm.nih.gov/21311064/); PMC[3066270](https://pmc.ncbi.nlm.nih.gov/articles/PMC3066270/). — Q-VD-OPh（泛半胱天冬酶）僅在雌性中減少梗死，並逆轉雌性中 PARP-1 刪除所造成的傷害。
- **Sharma J, Nelluru G, Wilson MA, Johnston MV, Hossain MA.** Sex-specific activation of cell death signalling pathways in cerebellar granule neurons exposed to oxygen glucose deprivation followed by reoxygenia. *ASN Neuro.* 2011;3(2):85–97. doi:[10.1042/AN20100032](https://doi.org/10.1042/AN20100032). PMID: [21382016](https://pubmed.ncbi.nlm.nih.gov/21382016/). — 細胞自主性：XX 神經元經延遲的 caspase-8/3 死亡（僅 XX 出現 caspase-8 核轉位）；XY 神經元則經 AIF–PARP-1 依賴性途徑死亡。

**性別在 Bcl-2/Bax 設定點中的作用**

- **Dubal DB, Shughrue PJ, Wilson ME, Merchenthaler I, Wise PM.** Estradiol modulates bcl-2 in cerebral ischemia: a potential contribution to neuroprotection. *J Neurosci.* 1999;19(15):6385–6393. PMID: [10414967](https://pubmed.ncbi.nlm.nih.gov/10414967/). — E2 防止 OVX 雌性中損傷誘導的 bcl-2 流失（OVX+E2 vs OVX-oil 設計）。
- **Forger NG, Rosen GJ, Waters EM, Jacob D, Simerly RB, de Vries GJ.** Deletion of Bax reduces overall-number sex differences in the mouse forebrain. *Proc Natl Acad Sci USA.* 2004;101(37):13666–13671. doi:[10.1073/pnas.0404644101](https://doi.org/10.1073/pnas.0404644101). PMID: [15342910](https://pubmed.ncbi.nlm.nih.gov/15342910/). — Bax KO 減少 BNSTp/AVPV 的二型性（TH+ AVPV 例外仍存在）。
- **Zup SL, Carrier H, Waters EM, Tabor A, Bengston L, Rosen GJ, Simerly RB, Forger NG.** Overexpression of Bcl-2 reduces sex differences in neuron number in the brain and spinal cord. *J Neurosci.* 2003;23(6):2357–2362. doi:[10.1523/JNEUROSCI.23-06-02357.2003](https://doi.org/10.1523/JNEUROSCI.23-06-02357.2003). — Bcl-2 過表達減少（但未消除）性別差異。

**臨床（人類）證據**

- **Biondi-Zoccai GG, Abbate A, Bussani R, Camilot D, De Giorgio F, Marino M-P, Silvestri F, Baldi F, Biasucci LM, Baldi A.** Reduced post-infarction myocardial apoptosis in women: a clue to their different clinical course? *Heart.* 2005;91(1):99–101. doi:[10.1136/hrt.2003.018754](https://doi.org/10.1136/hrt.2003.018754). — 人類屍檢：梗死周邊凋亡指數男性（25.9%）約為女性（2.6%）的 10 倍，且男性心臟 Bax 表現較高。*（註：第一作者為 Biondi-Zoccai；Abbate 為共同作者。）*

**更廣泛的綜合**

- **Li H, Pin S, Zeng Z, Wang MM, Andreasson KA, McCullough LD.** Sex differences in cell death. *Ann Neurol.* 2005;58(2):317–321. — 最早正式陳述 XX-半胱天冬酶／XY-PARP-1-AIF 範式。
- **Tang et al.** Sex differences during ischemic stroke. *Front Mol Neurosci.* 2022;15:860959. — 彙整細胞死亡與神經血管單元二型性的現代綜述。
- **Shen H, Holliday M, Sheikh-Hamad D, et al.** Sirtuin-3 mediates sex differences in kidney ischemia-reperfusion injury. *Transl Res.* 2021;235:15–31. — 大腦之外亦見相同的 XX-凋亡／XY-壞死模式（另見[[SIRT3]]）。

## 相關實體

- **蛋白質：**[[p53]]、[[Caspase-3]]、[[Caspase-7]]、[[Caspase-8]]、[[Caspase-9]]、[[Bax]]、[[Bcl-2]]、[[BAK]]、[[XIAP]]、[[SIRT1]]、[[Beclin1]]
- **調節因子：**[[SHP1]]、[[PAK2]]、[[Pin1]]、[[PTPN5]]、[[TBK1]]、[[Src]]、[[FAK]]
- **分子：**[[Reactive Oxygen Species]]、[[Cytochrome c]]、[[Ascorbic Acid]]、[[melittin]]、[[Ivermectin]]、[[TRAIL]]、[[FasL]]
- **過程：**[[Autophagy]]、[[Senescence]]、[[DNA Damage]]、[[Epigenetics]]、[[Inflammation]]

#

# 

## Documents

提及此實體的文件清單

  - [[_document_ - Autophagy and intermittent fasting the connection for cancer therapy?|Autophagy and intermittent fasting the connection for cancer therapy?]]
    - 綜述文章，採 Creative Commons 授權、開放取用。關鍵字：Apoptosis、Macroautophagy、Intermittent Fasting、Cancer Therapy。Autophagy: definiti

  - [[_document_ - Autophagy takes it all – autophagy inducers target immune aging|Autophagy takes it all – autophagy inducers target immune aging]]
    - 已知衰老細胞會停止分裂但不發生凋亡，並藉此預防癌症的發展（Serrano et al., 1997）。一方面，衰老細胞的長期存在對周圍...

  - [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]]
    - TFE3 的標的不僅包括自噬／溶酶體基因，還包括整合性壓力反應的關鍵主調控因子 ATF4，以及與細胞壓力反應、訊號傳導和凋亡相關的基因（Martina et al 2016）。

  - [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]
    - 儘管自噬對受損細胞具有保護作用，異常或過度的自噬反應仍會透過刺激凋亡、細胞焦亡等程式性細胞死亡，造成多種病理結果 \[, , , \].

  - [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]]
    - mTORC2 缺失後 Akt 的抑制會降低 FoxO1（FoxO1）與 FOXO3a 轉錄因子的磷酸化，從而活化它們；這些轉錄因子控制著與壓力抗性、代謝、細胞週期阻滞等相關的基因表現……

  - [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]]
    - Rebecca SY Wong 1,✉ PMCID: 摘要 凋亡是一種有序且受協調的細胞過程，發生於生理與病理條件下。它也是細胞生物學家研究最多的主題之一。

  - [[_document_ - Caspase|Caspase]]
    - Caspase 半胱天冬酶（Cysteine-aspartic proteases，半胱胺酸天門冬胺酸蛋白酶）是一個蛋白酶家族，在程式性細胞死亡（凋亡）、壞死與發炎中扮演重要角色。

  - [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
    - 在此我們討論新興證據，說明癌細胞如何採取各種策略來克服凋亡，包括放大抗凋亡機制、下調促凋亡程式，或兩者兼有。

  - [[_document_ - Honeybee venom and melittin suppress growth factor receptor activation in HER2-enriched and triple-negative breast cancer - npj Precision Oncology|Honeybee venom and melittin suppress growth factor receptor activation in HER2-enriched and triple-negative breast cancer - npj Precision Oncology]]
    - 蜂毒與 melittin 亦在 MCF7 細胞中誘導凋亡，並降低 MDA-MB-231 乳癌細胞的活力與遷移能力。

  - [[_document_ - Ivermectin, a potential anticancer drug derived from an antiparasitic drug|Ivermectin, a potential anticancer drug derived from an antiparasitic drug]]
    - 另一方面，ivermectin 促進癌細胞的程式性死亡，包括凋亡、自噬與細胞焦亡。Ivermectin 誘導的凋亡與自噬受相互調控。

  - [[_document_ - Oral Fenbendazole for Cancer Therapy in Humans and Animals 1|Oral Fenbendazole for Cancer Therapy in Humans and Animals]]
    - 本文件中提及

  - [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]]
    - 靜止期細胞的基因調控亦可防止凋亡，保護細胞免於隨時間累積損傷（Coller et al., 2006; Min and Spencer, 2019）。因此，gen...

  - [[_document_ - Epigenetic alterations—The silent indicator for early aging and age‐associated health‐risks|Epigenetic alterations—The silent indicator for early aging and age‐associated health‐risks]]
    - 在整個壽命期間，細胞分化、增殖與成熟隨後伴隨凋亡發生，而這些同步性會隨年齡失去平衡。

  - [[_document_ - Molecular Insights into Reprogramming-Initiation Events Mediated by the OSKM Gene Regulatory Network|Molecular Insights into Reprogramming-Initiation Events Mediated by the OSKM Gene Regulatory Network]]
    - 實驗證實，病毒轉導後的直接反應是先天免疫，其誘導活性氧物種、氧化性 DNA 損傷、p53 活化、衰老與凋亡，最終導致細胞重編程能力下降（Cellular Reprogra...

  - [[_document_ - Small molecule compounds that induce cellular senescence|Small molecule compounds that induce cellular senescence]]
    - 此外，IR 與 UV 輻射，以及表中多數的 DNA 損傷劑，在較高劑量下誘導的是凋亡而非衰老。這些觀察進一步強調了凋亡與衰老之間的關係。

  - [[_document_ - Neuromelanin, one of the most overlooked molecules in modern medicine, is not a spectator|Neuromelanin, one of the most overlooked molecules in modern medicine, is not a spectator]]
    - MPP+ 的隔離隨後似乎會誘導細胞凋亡，導致細胞死亡，並因先前未見抗原的釋放引發下游級聯免疫反應（Sulzer et al., 2008）。

  - [[_document_ - Oxidative Stress Harms and Benefits for Human Health|Oxidative Stress Harms and Benefits for Human Health]]
    - 蛋白質磷酸化、多種轉錄因子的活化、凋亡、免疫與分化等過程，皆依賴細胞內適當的 ROS 產生與存在，且需維持在低水平 \[\]。

  - [[_document_ - The Sirtuin System The Holy Grail of Resveratrol?|The Sirtuin System The Holy Grail of Resveratrol?]]
    - 類似地，SIRT-7 缺陷小鼠的心肌以廣泛纖維化與高基準凋亡率為特徵，導致高水平的心肌病變 \[\]。

  - [[_document_ - sirtuins (overview, CD38 KO risks, cancer therapies)|sirtuins (overview, CD38 KO risks, cancer therapies)]]
    - 豆蔻醯化參與蛋白質向膜的定位與凋亡途徑。某些 sirtuin（例如 SIRT6）展現高效的去豆蔻醯酶活性。

  - [[_document_ - sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i|sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i]]
    - SIRT1 依賴性的 p53 去乙醯化會抑制其反式活化活性，並在氧化壓力與 DNA 損傷反應中抑制凋亡。儘管 SIRT1/p53 途徑在不同疾病中可能產生有益作用，Chen et al.

  - [[_document_ - sirtuins Shedding light on structure, function and regulation of human sirtuins a comprehensive review|sirtuins Shedding light on structure, function and regulation of human sirtuins a comprehensive review]]
    - 而在肺上皮細胞中，Forkhead 蛋白 FOXO3a 的去乙醯化可抑制香菸菸萃取物誘導的凋亡（Wang et al.）。

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - 值得注意的是，此蛋白質家族在發炎、代謝、氧化壓力與凋亡等細胞生物學過程中扮演多種重要角色，因此被視為包括 c... 在內的多種病理狀況的潛在治療標的。

  - [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
    - 凋亡–parthanatos 拮抗作為未解問題：ATP 依賴的死亡模式開關與半胱天冬酶切割 PARP1，對比協作性節點（共享的 AIF 轉位、89-kDa PARP1 PAR 載體片段）。


## Connections

- [[Mitochondria]]：內源性凋亡途徑的核心胞器與感測器。
- [[Oxidative Stress]]：最常見的生理性凋亡誘發因素之一。
- [[Senescence]]：受損細胞不同於凋亡的另一種命運。
- [[Cancer]]：常在細胞未能發生凋亡時產生。
- [[Caspases]] — 執行粒線體／外源性死亡程式的執行者蛋白酶；在性別差異框架中為雌性偏好的死亡效應因子
- [[PARP1]] — 雄性偏好的死亡效應因子；XY 細胞經 PARP-1/AIF 依賴性壞死而非半胱天冬酶死亡
- [[p53]] — 受性激素調控、在衰老與凋亡兩臂之間的開關（E2↔p53 交互作用；見性別差異）
- [[Bcl-2]] — 雌激素驅動的抗凋亡設定點；雌性凋亡抗性的分子基礎

## 連結摘要（性別差異 — 細胞死亡交叉連結，2026-09-02）

- **統一的性別差異細胞死亡框架**在[[Apoptosis]] ↔ [[Caspases]] ↔ [[p53]] ↔ [[Bcl-2]]之間交叉引用，並透過[[NAD+]]連結至 PARP-1/NAD⁺ 軸。
- 新增交叉連結：[[Caspases]]、[[PARP1]]、[[p53]]、[[Bcl-2]]。
- XIAP 鑲嵌交叉連結（2026-09-03）：X 連鎖的 XIAP 鑲嵌現象設定組織層級的凋亡閾值（見[[XIAP]]；Dziadzio et al. 2015）。
- 應強化的重點連結：[[Apoptosis]] ↔ [[Caspases]]（XX-半胱天冬酶臂）、[[Apoptosis]] ↔ [[PARP1]]（XY-壞死臂）、[[Apoptosis]] ↔ [[p53]]（衰老 vs 凋亡的性別決策）、[[Apoptosis]] ↔ [[Bcl-2]]（雌激素設定點）。

## 連結摘要

- 新增連結：[[Aging]], [[Alzheimer's Disease]], [[Annexin V]], [[Ascorbic Acid]], [[Autophagy]], [[Bax]], [[Bcl-2]], [[Beclin1]], [[Cancer]], [[Cellular Reprogramming]], [[Senescence]], [[Cytochrome c]], [[DNA Damage]], [[Epigenetics]], [[Honeybee venom]], [[Induced Pluripotent Stem Cells]], [[Inflammation]], [[Ionizing Radiation]], [[Ivermectin]], [[Mitochondria]], [[Neurodegenerative Diseases]], [[Parkinson's Disease]], [[Reactive Oxygen Species]], [[SASP|衰老相關分泌表型]], [[SIRT1]], [[SIRT6]], [[Sirtuins]], [[Caspase-3]], [[melittin]], [[p53]], [[c-Myc]], [[MPP+]], [[Neuromelanin]].
- 建議建立的新實體註記：[[Cytochrome c]], [[Bax]], [[Bcl-2]], [[Annexin V]], [[Caspase-3]], [[Necrosis]], [[Caspases]].
  - 應強化的重點連結：[[Apoptosis]] ↔ [[Mitochondria]], [[Apoptosis]] ↔ 細胞衰老, [[Apoptosis]] ↔ [[p53]], [[Apoptosis]] ↔ [[Mitochondrial Dysfunction]].
- 來源補充（2026-09-14）：Moura et al. 2024 — ATP 開關與半胱天冬酶切割的拮抗作用，對比協作性的 AIF／89-kDa 片段節點。新增連結：[[Parthanatos]], [[89-kDa PARP1 Fragment]], [[PARP1]].
