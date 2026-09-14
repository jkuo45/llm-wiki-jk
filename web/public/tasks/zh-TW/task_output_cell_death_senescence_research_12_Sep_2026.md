---
title: 細胞死亡 × 細胞衰老 — 網路研究
description: 受調控細胞死亡與細胞衰老之間連結的延伸分析，奠基於知識庫筆記並以 2017–2026 年原始文獻與綜述補充（p53 動態、minority MOMP、SCAP 生物學、鐵死亡脆弱性、TIS 逃脫）。
created: 2026-09-12
updated: 2026-09-14
type: task-output
tags:
  - cell-death
  - senescence
  - apoptosis
  - ferroptosis
  - minority-momp
  - senolytics
  - therapy-induced-senescence
  - literature-review
  - cancer
author: []
---

# 細胞死亡 × 細胞衰老 — 網路研究

產生：12_Sep_2026 12:03 AM PDT。

範圍：本任務以 2017–2026 年的網路研究延伸知識庫既有框架下 [[Cellular Senescence|細胞衰老]] ↔ [[Regulated Cell Death|受調控細胞死亡]] 的連結（[[Regulated Cell Death|受調控細胞死亡]]、[[Apoptosis|細胞凋亡]]、[[Minority MOMP]]、[[Senescent Cells|衰老細胞]]、[[Senescent cell anti-apoptotic pathways|SCAP]]、[[Therapy-Induced Senescence|治療誘導性衰老]]）：原始論文（[[p53]] 動態、minority MOMP、衰老細胞中的 p53 抑制）、系統性綜述，以及治療誘導性衰老（TIS）逃脫文獻。知識庫來源以 `[[wikilinks]]` 引註；網路來源以 DOI 引註。所有 DOI 皆於搜尋過程（2026 年 9 月 12 日）期間浮現並驗證。

> [!info] 知識庫框架（摘自 [[Regulated Cell Death|受調控細胞死亡]]）
> 「細胞死亡程式與[[Cellular Senescence|細胞衰老]]之間的關係是組織恆定的核心：**衰老使潛在受損的細胞停滯，而受調控的死亡將其清除**。」下列網路研究證實此分工，但實質上加以深化——衰老如今被理解為*逃過執行者的細胞之延遲性死亡*，且以調節 [[p53]] 與 [[Bcl-2]] 家族的方式主動維持。

---

## 框架：互補的細胞宿命，而非競爭對手

- 知識庫的兄弟宿命框架與決定性框架文章一致：Childs、van Deursen、Campisi、Kirkland 等人，《"Senescence and apoptosis: dueling or complementary cell fates?"》（*EMBO Rep* 2014，doi:10.15252/embr.201439245）的結論是衰老與凋亡為**協調、互補的程式**；其選擇由細胞類型以及壓力的本質與強度決定。
- *Seminars in Cancer Biology* 的一篇 2025 年綜述（Shimizu 等人，doi:10.1016/j.semcancer.2024.11.001，〈癌症中細胞死亡與衰老的交互作用〉）將其銳化為**雙向關係**：[[Apoptosis|細胞凋亡]]、[[Necroptosis|壞死性凋亡]]、[[Pyroptosis|細胞焦亡]]與[[Ferroptosis|鐵死亡]]之*上游與下游訊號*中與年齡相關的變化，與衰老誘導本身密切相關，而升高的[[SASP]]因子可以是數種細胞死亡模式的**因**，也可以是**果**。
- [[Senescence Surveillance|衰老監視]]正落在這個框架內：衰老細胞正常會由經 SASP 募集的免疫細胞清除；知識庫的[[Senescent Cells|衰老細胞]]筆記記載了與年齡相關的監視衰退如何允許其累積。網路文獻（見 TIS 章節）另補充此監視在癌症中可被共選或逃逸。

## p53 開關：訊息動態，而非僅劑量

知識庫的劑量框架（*「顯著的短期 DNA 損傷誘導凋亡，延長的輕度損傷活化衰老」*）獲證實，但被 p53 動態的單細胞研究加以精煉：

- **Purvis 等人，《Science》2012**（doi:10.1126/science.1218351）：p53 對 DNA 損傷的反應是**脈衝式振盪器**。脈衝式 p53 選擇性活化停滯／修復基因（CDKN1A、GADD45A）並允許恢復；**持續性 p53** 誘導終末程式。在相同 γ 照射劑量下，脈衝式 p53 允許分裂，而持續性 p53 驅動衰老——所以**是蛋白質動態，而非單靠損傷負載，決定宿命**。
- 系統模型〈Cell fate decision mediated by p53 pulses〉（*PNAS* 2009，doi:10.1073/pnas.0813088106）顯示數位化閾值：低於約 6 個 p53 脈衝，細胞修復並恢復；持續訊號累積 p53AIP1 並活化執行者[[Caspase-3]] → 凋亡。
- 一篇 2024 年綜述〈Determinants of p53 DNA binding, gene regulation, and cell fate decisions〉（*Cell Death Differ*，doi:10.1038/s41418-024-01326-1）證實持續性 p53 同時活化**死亡基因**（APAF1、TP53AIP1、[[BAX]]）與**衰老基因**（PML、YPEL3）——決定編碼於 p53 的閾值／動態（<span>CDKN1A</span> 誘導發生於較 BAX 低的閾值）。
- 對知識庫的相關性：這是 [[Apoptosis|細胞凋亡]] ↔ [[p53]] 連結背後的機制核心，也是 [[Apoptosis|細胞凋亡]] 中已記載之性別特異性衰老 vs 凋亡決定的機制核心。

## Minority MOMP：以亞致死方式運作的死亡機器

知識庫的 [[Minority MOMP]] 筆記如今有原始論文支撐並獲擴充：

- **Victorelli 等人，《Nature》2023/2024**（doi:10.1038/s41586-023-06621-4，〈Apoptotic stress causes mtDNA release during senescence and drives the SASP〉；PMID 37821702）：
  - 在輻射誘導與致癌基因誘導的衰老下，衰老 MRC5/IMR90 纖維母細胞中的 **BAX 被活化**。
  - BAX/BAK 大孔洞將[[mtDNA]]釋入細胞質 → [[cGAS-STING Pathway|cGAS–STING]] → [[SASP]]，且無死亡承諾。
  - **凋亡／衰老的轉折**：凋亡期間相同的大孔洞釋放 mtDNA，但活化的[[Caspases|caspase]]抑制發炎反應——凋亡在免疫學上是靜默的。衰老細胞缺乏該抑制，因此相同的孔洞事件變成慢性發炎引擎。
  - **充分性**：慢性低劑量 BH3 模擬劑（亞致死[[Navitoclax|ABT-737]]）在增殖細胞中誘導衰老與 SASP——以亞致死方式接合死亡機器本身即是衰老誘導因素。
  - **治療概念驗證**：BAX 抑制劑 BAI1 阻斷 mtDNA 釋放與 SASP；*體內*方面，MOMP 抑制減少衰老小鼠的發炎並改善健康壽命——正是知識庫筆記所預期的實驗（「中斷 miMOMP–cGAS–STING 訊號是一項策略……」）。
  - **粒線體動態為其閘門**：[[Mitochondrial Fission|分裂]]促進 miMOMP/mtDNA 釋放，而衰老細胞過度融合的粒線體網路抑制之——與知識庫的粒線體自噬／融合-分裂脈絡一致。
- miMOMP 原創概念（Ichim 等人，《Mol Cell》2015，〈Limited mitochondrial permeabilization causes DNA damage and genomic instability in the absence of cell death〉）確立：亞致死 MOMP 活化的低量級 caspase 會在不致死的情況下損傷 DNA——是致癌作用與衰老兩者的機制種子。
- 一篇 2025 年《Immunity》研究（Lai 等人，doi:10.1016/j.immuni.2025.03.005；PMID 40203808）將此軸延伸至 SASP 之外：衰老腫瘤細胞亦**將 mtDNA 外排出細胞外**，透過 cGAS–STING 驅動 PMN-MDSC 介導的免疫抑制——這是知識庫目前尚未承載的旁分泌、免疫重塑面向。

## 倖存於凋亡：衰老細胞如何撐住

知識庫的 [[Senescent cell anti-apoptotic pathways|SCAP]] 概念（BCL-2 家族 + PI3K/Akt）由兩篇 2022 年論文擴充：

- **結構性 SCAP 細節**——〈Why Senescent Cells Are Resistant to Apoptosis: An Insight for Senolytic Development〉（*Front Cell Dev Biol* 2022，doi:10.3389/fcell.2022.822816）：衰老細胞上調[[Bcl-2]]、[[Bcl-w]]、[[Bcl-xL]]（BCL2 基因座上帶許可性 H4K16ac／抑制性 H4K20me3 染色質標記，反向模式則抑制 BAX）；**p21 抑制 NF-κB/JNK 驅動的死亡**；**FOXO4 將[[p53]]隔離**遠離促凋亡標的；另加 HSP90、ephrin、PI3Kδ、PAI-2。這把 SCAP 網路大幅拓寬至知識庫所列的經典 BCL-2 軸之外。
- **主動 p53 節流**——〈Senescent cells limit p53 activity via multiple mechanisms to remain viable〉（*Nat Commun* 2022，doi:10.1038/s41467-022-31239-x）：衰老細胞轉錄性上調衰老相關存活強化因子——**Mdm2、[[RNASE4]]、ANG 與 Bcl2l1**——以約束細胞質 p53。同時耗盡 p53 與這些因子會殺死衰老細胞。衰老因此是一個*主動維持*的抗凋亡狀態，而非靜態的 BCL-2 抗性——這是組合式 [[Senolytic|senolytic]]（衰老溶解藥物）的理由。
- 兩種機制都解釋了知識庫的觀察（[[Apoptosis|細胞凋亡]]、[[Senescent Cells|衰老細胞]]）：衰老細胞在攜帶完好凋亡機器的情況下仍然累積。

## 鐵死亡：悖論式的致死脆弱性

- 知識庫錨點：[[Acid ceramidase|酸性神經醯胺酶]]/[[ACSL4]] 驅動的[[PUFA]]重塑，使衰老細胞透過 GPX4/GSH/鐵非依賴軸本質上對鐵死亡敏感（Soriano-Castell 等人 2026，見 [[Senescent Cells|衰老細胞]] 與 [[Ferroptosis|鐵死亡]]）。
- **Hangauer 等人，《Nature》2017**（doi:10.1038/nature24297）：藥物耐受的持留癌細胞（類衰老）**選擇性對 GPX4 抑制敏感**——鐵死亡預啟動是停滯／持留狀態的一般性質，早於 ACase 特異性發現。
- 系統性綜述〈Ferroptosis and Senescence〉（*Int J Mol Sci* 2023，Coradduzza 等人）編目連結兩狀態的共同代謝底質——**鐵恆定失調、脂質過氧化、氧化壓力**——橫跨老化、神經退化與心血管／腦血管疾病，與知識庫在[[Regulated Cell Death|受調控細胞死亡]]與[[Ferroptosis|鐵死亡]]中的框架一致。
- 知識庫所記載之 SASP → IL-6/IL-8 → ACase 傳遞，使鐵死亡脆弱性成為**可傳播的旁分泌表型**，而非純細胞內在特質。

## 雙向迴路：細胞死亡餵養衰老，反之亦然

- **細胞死亡 → 衰老**：亞致死凋亡壓力是衰老誘導劑（上述低劑量 ABT-737 實驗將 miMOMP 原則一般化：任何粒線體死亡機器之亞致死接合，都可能將細胞推向衰老）。知識庫的 [[Paracrine Senescence|旁分泌衰老]] 捕捉了 SASP 介導的蔓延，但死亡程式觸發的路徑尚未在此陳述。
- **SASP → 細胞死亡**：Shimizu 等人（*Seminars in Cancer Biology* 2025）詳述促發炎 SASP 因子如何*既是*旁觀者受調控細胞死亡的上游驅動者、*又是*死亡細胞的下游產物——一個**前饋迴路**，而非單向街。此與知識庫的 [[SASP]] 筆記一致（SASP ↔ [[Apoptosis|細胞凋亡]] 雙向；IL-6/IL-8 鐵死亡指令），但將其定位為閉合迴路。
- 從「Cellular Senescence」與「Regulated Cell Death」出發的 Graphify 遍歷正浮現此星座：[[p53]]、[[Apoptosis|細胞凋亡]]、[[Necroptosis|壞死性凋亡]]、[[Ferroptosis|鐵死亡]]、[[Pyroptosis|細胞焦亡]]、[[SASP]]、[[Senescent Cells|衰老細胞]]、[[Senolytics|衰老溶解]]、[[Therapy-Induced Senescence|治療誘導性衰老]]、[[Minority MOMP]]、[[SIRT1]]/[[SIRT3]] 與 [[PARP1]]（ATM–PARP1–IKK 軸）。

## 治療誘導性衰老：死亡逃脫與暫時狀態

相對於知識庫，最重大的轉變：[[Therapy-Induced Senescence|治療誘導性衰老]]（TIS）如今被理解為*死亡逃脫加上暫時性*。

- **TIS 是凋亡後的倖存者**：在一篇 2025 年研究（*Mol Cancer* 2025，doi:10.1186/s12943-025-02310-0）中，僅約 0.3–8% 的 doxorubicin 處理乳癌細胞逃過凋亡——而倖存者皆衰老。TIS 就其建構而言**是一種細胞死亡逃逸狀態**。
- **TIS 可以逃脫**：評論〈Therapy-induced senescence is finally escapable, what is next?〉（*Cell Cycle* 2024，doi:10.1080/15384101.2024.2364579；PMID 38879812）與上述 *Mol Cancer* 研究顯示衰老腫瘤細胞透過 p16/p21 喪失、Cdk1/cyclin 上調、**自噬**與多倍體重新進入細胞週期——且在衰老期間對多種藥物**交叉抗藥**（篩選的 46 種藥物中有 23 種）。干擾自噬**將其轉向鐵死亡並延遲復發**（AACR 2024，Fortier 等人）。
- **TIS 與免疫系統**（*Cells* 2024 綜述，doi:10.3390/cells13151281）：TIS 細胞可以是**抗原來源／疫苗**（衰老監視，對應知識庫的 [[Senescence Surveillance|衰老監視]]），也可以是**免疫抑制儲庫**（PD-L1 上調），端視脈絡而定。
- **Senolytic 作為第二拳**：在其逃離衰老之前清除逃過死亡、易抗藥的細胞，如今是 [[Senolytic|senolytic]]（衰老溶解藥物）的核心癌症治療理由——將知識庫的 [[Senolytics|Senolytics]]/[[Senolytic Therapy|Senolytic 療法]] 筆記延伸至抗老化框架之外。〈Targeting therapy-persistent residual disease〉（*Nat Cancer* 2024，doi:10.1038/s43018-024-00819-9）將此持留細胞導向策略框定為臨床用途。

## 前沿死亡型式

- 2018 年命名委員會框架加上後續綜述（*Front Cell Dev Biol* 2025，doi:10.3389/fcell.2025.1611055）已在受調控細胞死亡目錄中加入 cuproptosis、disulfidptosis、oxeiptosis、alkaliptosis 等。
- 尚無任何型式在成熟文獻中與衰老連結——這是知識庫可以及早記載的缺口（諸如[[Gasdermin D]]/[[Gasdermin E]]、[[Caspase-4]]、[[Caspase-11]] 等相關實體在知識庫中已橋接焦亡與 SASP 調控）。

---

## 綜合 — 這項研究改變了什麼

| 知識庫主張 | 網路研究裁決 |
| --- | --- |
| 衰老 vs 凋亡 = 劑量／強度決定（[[Apoptosis|細胞凋亡]]、[[p53]]） | 證實、並精煉：**p53 動態**（脈衝 vs 持續）是機制核心（Purvis 2012；PNAS 2009） |
| Minority MOMP 為 SASP 之閘門（[[Minority MOMP]]） | **證實並於體內驗證**：BAX/BAK 大孔洞 → mtDNA → cGAS–STING；BAI1 改善衰老小鼠健康壽命（Victorelli，《Nature》2023/24） |
| SCAP = BCL-2 家族 + PI3K/Akt（[[Senescent cell anti-apoptotic pathways]]） | 擴充：主動 p53 抑制（Mdm2/RNASE4/ANG/Bcl2l1）與染色質層級 BCL-2 上調（Nat Commun 2022；Front Cell Dev Biol 2022） |
| 衰老細胞對鐵死亡脆弱（[[Senescent Cells|衰老細胞]]、[[Ferroptosis|鐵死亡]]） | 證實並一般化：GPX4 敏感的持留細胞（Hangauer，《Nature》2017）；系統性綜述 IJMS 2023 |
| 衰老 ↔ 細胞死亡串擾 | **改框為雙向／互惠**，一個前饋迴路（Shimizu，《Semin Cancer Biol》2025） |
| TIS 作為腫瘤抑制（[[Therapy-Induced Senescence|治療誘導性衰老]]） | **受挑戰**：TIS 可逃脫、逃逸死亡且抗藥——這*驗證*了 senolytic 作為第二拳（Cell Cycle 2024；Mol Cancer 2025） |

## 參考文獻

- Victorelli S, Salmonowicz H, Chapman J, et al. "Apoptotic stress causes mtDNA release during senescence and drives the SASP." *Nature.* 2023;622(7983):627–636. doi:10.1038/s41586-023-06621-4. PMID 37821702
- Lai P, Liu L, Bancaro N, et al. "Mitochondrial DNA released by senescent tumor cells enhances PMN-MDSC-driven immunosuppression through the cGAS-STING pathway." *Immunity.* 2025;58(4):811–825.e7. doi:10.1016/j.immuni.2025.03.005. PMID 40203808
- Ichim G, Lopez J, Ahmed SU, et al. "Limited mitochondrial permeabilization causes DNA damage and genomic instability in the absence of cell death." *Mol Cell.* 2015;57(5):860–872. doi:10.1016/j.molcel.2015.01.018. PMID 25702873（miMOMP 一詞之起源）
- Purvis JE, Karhohs KW, Mock C, et al. "p53 dynamics control cell fate." *Science.* 2012;336(6087):1440–1444. doi:10.1126/science.1218351. PMID 22700930
- Zhang XP, Liu F, Wang W. "Cell fate decision mediated by p53 pulses." *Proc Natl Acad Sci U S A.* 2009;106(30):12245–12250. doi:10.1073/pnas.0813088106. PMID 19617533
- Fischer M, Sammons MA. "Determinants of p53 DNA binding, gene regulation, and cell fate decisions." *Cell Death Differ.* 2024;31(7):836–843. doi:10.1038/s41418-024-01326-1. PMID 38951700
- Childs BG, Baker DJ, Kirkland JL, et al. "Senescence and apoptosis: dueling or complementary cell fates?" *EMBO Rep.* 2014;15(11):1139–1153. doi:10.15252/embr.201439245. PMID 25312810
- Shimizu K, Inuzuka H, Tokunaga F. "The interplay between cell death and senescence in cancer." *Semin Cancer Biol.* 2025;108:1–16. doi:10.1016/j.semcancer.2024.11.001. PMID 39557316
- Hu L, Li H, Zi M, et al. "Why senescent cells are resistant to apoptosis: an insight for senolytic development." *Front Cell Dev Biol.* 2022;10:822816. doi:10.3389/fcell.2022.822816. PMID 35252191
- Sturmlechner I, Sine CC, Jeganathan KB, et al. "Senescent cells limit p53 activity via multiple mechanisms to remain viable." *Nat Commun.* 2022;13(1):3722. doi:10.1038/s41467-022-31239-x. PMID 35764649
- Hangauer MJ, Viswanathan VS, Ryan MJ, et al. "Drug-tolerant persister cancer cells are vulnerable to GPX4 inhibition." *Nature.* 2017;551(7679):247–250. doi:10.1038/nature24297. PMID 29088702
- Coradduzza D, Congiargiu A, Chen Z, et al. "Ferroptosis and senescence: a systematic review." *Int J Mol Sci.* 2023;24(4):3658. doi:10.3390/ijms24043658. PMID 36835065
- Bajtai E, Kiss C, Bakos É, et al. "Therapy-induced senescence is a transient drug resistance mechanism in breast cancer." *Mol Cancer.* 2025;24(1):128. doi:10.1186/s12943-025-02310-0. PMID 40312750
- Saleh T. "Therapy-induced senescence is finally escapable, what is next?" *Cell Cycle.* 2024;23(6):713–721. doi:10.1080/15384101.2024.2364579. PMID 38879812
- Liu Y, Lomeli I, Kron SJ. "Therapy-induced cellular senescence: potentiating tumor elimination or driving cancer resistance and recurrence?" *Cells.* 2024;13(15):1281. doi:10.3390/cells13151281. PMID 39120312
- Sun X, Wu LF, Altschuler SJ. "Targeting therapy-persistent residual disease." *Nat Cancer.* 2024;5(9):1298–1304. doi:10.1038/s43018-024-00819-9. PMID 39289594
- Qi K, Mu Y, Hu Y, et al. "Comprehensive landscape of cell death mechanisms: from molecular cross-talk to therapeutic innovation in oncology." *Front Cell Dev Biol.* 2025;13:1611055. doi:10.3389/fcell.2025.1611055. PMID 40741332

## 知識庫整合筆記

- 本任務未修改任何知識庫檔案；此僅為研究調查輸出。
- 建議的充實標的（攝取工作流程第 2 步）：[[Minority MOMP]]（加入 Victorelli 2023/24 機制 + Lai 2025 細胞外 mtDNA）、[[BAX]]/[[BAK]]（大孔洞 → mtDNA → SASP）、[[Senescent Cells|衰老細胞]]（SASE p53 節流）、[[Senescent cell anti-apoptotic pathways]]（Front Cell Dev Biol 2022 + Nat Commun 2022）、[[Therapy-Induced Senescence|治療誘導性衰老]]（逃脫 + 交叉抗藥 + 第二拳理由）、[[SASP]]（雙向細胞死亡迴路，Shimizu 2025）、[[Apoptosis|細胞凋亡]]/[[p53]]（脈衝 vs 持續動態）、[[Ferroptosis|鐵死亡]]（Hangauer 持留細胞敏感性）。
- 建議的新 `_document_` 筆記：Victorelli 2023（*Nature*）至 `senescence/`；Saleh 2024 與 Bajtai 2025 TIS 逃脫研究（*Mol Cancer*）至 `senescence/`（或 `cancer/`）。
- 建議的新實體筆記候選：[[RNASE4]]、[[Bcl2l1]]（建立前先檢查 `_link/`）、[[BAI1]]。