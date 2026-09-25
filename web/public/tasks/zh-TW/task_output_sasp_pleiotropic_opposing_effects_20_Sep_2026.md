---
title: 為何 SASP 產生多效且相反的效應 — 知識庫綜合與最新文獻
description: 任務輸出：沿 Birch and Gil 2020 的多效性問題，貫穿知識庫筆記與 2024–2026 年文獻——異質性軸線、雙向訊號，以及仍未解之處。
created: 2026-09-20
updated: 2026-09-20
tags:
  - senescence
  - sasp
  - pleiotropy
  - literature-review
source: src/notes/senescence/_document_ - Birch and Gil 2020 - Senescence and the SASP many therapeutic avenues.md
---

# 為何 SASP 產生多效且常相反的效應

彙編於 20_Sep_2026 12:00 AM UTC。起始問題（Birch and Gil 2020，*Genes & Development*）：

> 為何 SASP 產生如此多效且常相反的效應，難以釐清，仍多有未知。然而，衰老誘導因子、發生衰老的細胞類型、衰老階段，以及組織微環境的脈絡，可能都在形塑結果上扮演角色。

## 簡答

知識庫已編碼 Birch and Gil 的四軸答案——**誘導因子 × 細胞類型 × 階段 × 微環境**——而 2024–2026 年文獻證實了它，並加上 2020 年綜述無法看見的兩處細化：(1) SASP 輸出由**兩個可分離的輸入**把關（染色質／代謝許可 + 先天免疫活化），(2) 訊息傳遞是**雙向的**（微環境隨時間回寫 SASP，產生情境特異的「條碼」）。不存在單一 SASP；跨誘導因子與細胞類型僅約 19 個因子共有。

## 知識庫基線

- **調控線路**（[[_document_ - Birch and Gil 2020 - Senescence and the SASP many therapeutic avenues]]）：Figure 2 架構——損傷感測器（DSBs／DDR、[[Cytoplasmic Chromatin Fragments|CCF]]、mtDNA、[[LINE-1]]、[[RIG-I]]、[[TLR2]]／[[Inflammasome]]）→ 訊號（[[STING]]–[[TBK1]]、[[p38 MAPK]]–[[MAPKAPK2]]、[[mTOR]]、[[AMPK]]／[[NAMPT]]）→ 轉錄（[[NF-κB]]、[[CEBPβ|C/EBPβ]]、[[GATA4]]、[[JAK-STAT Signaling|JAK–STAT]]、[[Notch]] 抑制）外加染色質／剪接與自泌迴路。senomorphic 邏輯隨之而來：抑制分泌體而不殺死細胞。
- **組成與調控層**（[[SASP]]）：數百種蛋白、生物活性脂質、EV、非編碼核酸；細胞核（轉錄 + 染色質）vs. 細胞質（mRNA 穩定）調控；p53 抑制 vs. p16／p21 程式；cGAS–STING、miMOMP、MPC–[[SLC25A1]]–[[ACLY]] 乙醯輔酶 A 檢查點。
- **相反功能對照表**（[[_document_ - SASP (detrimental, beneficial) Table]]）：相同因子、因脈絡而結果相反——例如 [[IL-6]]／[[IL-8]]／[[TGFβ]]／[[CCL2]] 在癌前病變中驅動旁分泌衰老（有益），在正常老化組織中亦然（有害）；[[PDGFAA]]／[[CCN1]]／BMPs 急性期修復、慢性期纖維化。
- **全面框架**（[[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]]）：短暫 SASP＝免疫招募 + 重塑；持續 SASP＝發炎老化 + 促腫瘤；單一時間點的 SASP 豐度無法在體內區分有益與有害細胞。

## 2024–2026 年的新增認識

### 異質性比四軸更深

- **核心 vs. 可變 SASP。**SASP Atlas 譜系：纖維母細胞–上皮僅約 58 個共有因子，跨更廣誘導因子／細胞類型降至約 19 個（Giroud 等 2023 綜述；Mol Cancer 2025）。知識庫的「纖維母細胞–上皮共享 <50%」即同一發現。
- **單細胞解析度。**隨時間演變的 SASP 基因集系綜顯示早期 vs. 成熟衰老纖維母細胞表達不同子集；[[IGFBP7]] + p21 成為最穩健的跨組織纖維母細胞配對（Kim 等，*IJMS* 2026 年 3 月）。31 天多重成像發現兩個終末亞群——大核 vs. 高濃度（GATA4／PARP1 高、IL-6／JAK2／p-STAT3 高，僅約 8% 細胞）——總量檢測看不見（GeroScience 2025 年 1 月）。
- **原發 vs. 繼發衰老。**[[Notch]] 介導的繼發 SASP 經設計較弱，抑制失控擴散；AI／ML 分類器（對照 SenMayo／SenSig）現可在 scRNA-seq 與空間數據中分開這些狀態（Neretti，GSA 2024；npj Aging 2026 年 9 月 Cell Painting + 轉錄組研究）。

### 時間開關現已機制化定年

- **早期（TGFβ 豐富、NOTCH1 高、免疫抑制／促纖維化）→ 晚期（IL-6／IL-8／MMP 豐富、促炎）→ 深層（LINE1 驅動的第一型干擾素）。**Saliev 2025（*Biomolecules*）、Mol Cancer 2025 年 11 月及知識庫時間動態章節一致證實。早期 SASP 可抑制免疫以容許修復——同一抑制若清除失敗則容許腫瘤逃逸。
- **閾值未定義。**Liu 等（*Comm Biol* 2026 年 9 月，SASP–發炎老化惡性循環）：SASP 由有益翻轉為有害的劑量／時間點仍未知——此為核心轉譯瓶頸。

### 雙閘門模型（2026）：許可 + 活化

- **粒線體檸檬酸–乙醯輔酶 A 臂**（Nature 2026 年 7 月）：MPC→[[SLC25A1]]→[[ACLY]] 供應乙醯輔酶 A 以維持 SASP 位點 H3K27ac；[[CTPI2]] 抑制 SASP 並改善老齡小鼠健康壽命，且不逆轉停滯、獨立於 STING。**乙酸經 [[ACSS2]] 旁路**；單獨 mtDNA 或單獨乙酸僅部分誘導 SASP——染色質開啟*與* cGAS–STING 擊發缺一不可。知識庫 [[SASP]] 已收錄此文。
- **分泌路徑乙醯化**（bioRxiv 2026 年 7 月）：p300／CBP 驅動的 ER–高基氏運輸機具乙醯化決定*哪些*因子真正輸出；A485 抑制產生 senomorphic 樣 SASP 位移而停滯不變。
- **嘌呤軸**：ACSS2–PAICS 嘌呤代謝調控 SASP；抑制減弱 SASP 並增強肝臟免疫監控（引自 Cancer Cell 2026 年 7 月綜述）。

### 雙向、組織特異、性別二型

- **微環境回寫 SASP。**基質硬度調校 NF-κB 磷酸化；與癌共培養放大 IL-8／IL-1β／CCL2；衰老肝細胞因肝臟分區而異（Giroud 2023；Tripathi 2021，轉引自 Ageing Res Rev 2025）。訊息傳遞非單向——每種微環境各有 SASP「條碼」。
- **器官特異的發炎老化。**同一慢性 SASP → 關節退化、血管疾病、神經退化、纖維化，取決於來源細胞與受體圖譜；呼籲組織裁剪的 senomorphics（Liu 2026）。
- **性別二型**（知識庫 [[SASP]] §Sex Differences；2024–2025 試驗）：雌激素抑制 [[NF-κB]] 與 STING 轉錄；男性全身 IL-6／TNF-α／CCL5 較高；囓齒 AD／老化模型中 D+Q 僅助雌性、fisetin 僅助雄性。

### 癌症使悖論結晶

- **急性／短暫：**p53 恢復的免疫原性 SASP（CSF1、CCL2、IL-15、CXCL1／9／10／11／14、IGFBP3、MICB）招募巨噬細胞／NK／CD4／CD8 → 消退（淋巴瘤、肉瘤、肝、Kras-肺 T／P 模型）。
- **慢性／持續：**NF-κB 型 SASP（IL-6／IL-8／VEGF／CCL2／CCL5／CXCL5／CXCL12／HGF／MMPs／TGFβ／IL-33／cathepsin B）驅動增殖、EMT、血管新生、MDSC／Treg 招募、HLA-E 致 NK 鈍化、治療抗性（Ther Adv／Mol Cancer 2025 綜述；*Cancer Cell* 2025 年 7 月「SASPome」框架）。
- **分子開關存在：**PTEN 缺失攝護腺中 TIMP1 喪失使 SASP 由抑瘤翻轉為促轉移；KRAS-巨噬細胞 SASP 連早期致瘤都促進（早期＝好規則的例外）。
- **治療誘導衰老（TIS）：**化療／放療／CDK4／6i 停住腫瘤卻留下促瘤 SASP → 「誘導–啟動–清除」（促衰老 → 免疫療法 → senolytic／senomorphic）試驗中；給藥順序與 SASP 異質性監控未解（Egypt J NCI 2025 年 12 月綜述）。

## 仍未解之處（回答 Birch and Gil）

1. **有益↔有害閾值**——時間、劑量或組成轉折點未定義；單一時間點生物標誌無法區分（Wang 等 2024 結論，Liu 2026 重申）。
2. **非發炎 SASP 臂**——促纖維化／促血管新生／ECM 模組的調控者大抵未知；多數 senomorphics 只打 IL-6／IL-8，可能扭曲其餘（Dong 2024；Mol Cancer 2024 年 8 月）。
3. **SASP vs. 一般發炎**——可分離的體內標誌與限於衰老細胞的 SASP 操控模型仍缺（Birch and Gil 自家的收尾之問，至今未解）。
4. **旁觀者規則**——反應如何隨受體組織、年齡、疾病狀態而變；ECM／接觸介導（非可溶性）SASP 效應研究不足。
5. **臨床轉譯**——無經臨床驗證、可別於一般發炎的衰老負荷 panel；脫靶毒性（如 navitoclax 血小板減少）、性別特異反應、過早清除損及修復皆未解。

## 治療推論（自 2020 未變，但更銳利）

永不全面清除 SASP；**按臂、按情境調節**：JAK1／2（ruxolitinib）、mTOR（rapamycin）、p38／MK2、cGAS–STING、NAMPT、SLC25A1／CTPI2、BAX／miMOMP、NRTIs／LINE1、anti-IL-6／IL-8／IL-11、PTBP1——給藥時機須保留急性修復與癌前監控。新興教義：**適應性／情境特異 senomorphism**——容許短暫 SASP 以促再生／招募，再關閉（Saliev 2025）。

## 諮詢的關鍵來源

- 知識庫：[[SASP]]、[[_document_ - Birch and Gil 2020 - Senescence and the SASP many therapeutic avenues]]、[[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]]、[[_document_ - SASP (detrimental, beneficial) Table]]、[[_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities]]。
- Birch & Gil 2020 (Genes Dev)；Wang 等 2024 (NRMCB)；Giroud 等 2023 (Cells)；Dong 等 2024 (Mol Cancer 13:187)；Saliev & Singh 2025 (Biomolecules 15:860)；Cancer Cell 2025 年 7 月（Senescence in cancer）；Mol Cancer 2025 年 4 月／11 月（SASP 爭議；調控綜述）；Oncology Lett 2025 年 10 月（雙重角色綜述）；Theranostics 2025 年 2 月（TME 衰老）；Liu 等 2026 年 9 月（Comm Biol，SASP–發炎老化循環）；Nature 2026 年 7 月（粒線體檸檬酸–乙醯輔酶 A SASP）；Kim 等 2026 年 3 月（IJMS，隨時間演變 SASP 系綜）；GeroScience 2025 年 1 月（單細胞 SASP 亞群）；npj Aging 2026 年 9 月（Cell Painting + 轉錄組）；bioRxiv 2026 年 7 月（分泌路徑乙醯化）。

## 連結摘要

- 起始：[[_document_ - Birch and Gil 2020 - Senescence and the SASP many therapeutic avenues]]
- 核心：[[SASP]]、[[Senescence]]、[[Paracrine Senescence]]、[[Senomorphic Therapy]]、[[Senolytic Therapy]]、[[Inflammaging]]
- 軸線：[[NF-κB]]、[[cGAS-STING Pathway]]、[[p38 MAPK]]、[[mTORC1]]、[[IL-6]]、[[IL-8]]、[[TGFβ]]、[[Notch]]、[[LINE-1]]、[[SLC25A1]]、[[IGFBP7]]
