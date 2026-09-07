---
title: "細胞死亡象限：調控性 vs 非調控性 × 發炎性 vs 非發炎性知識庫視角"
description: 以性別稽核中的調控性/非調控性與發炎性/非發炎性視角，將知識庫所有主要主題映射的 vault-wide 框架，含性別疊加與實用稽核流程。
created: 2026-09-04
updated: 2026-09-05
tags: [task-output, cell-death, apoptosis, necrosis, sex-differences, inflammation, senescence, ferroptosis]
---

# 細胞死亡象限：以調控性／發炎性視角檢視知識庫

## 摘要

性別稽核（`src/tasks/task_output_gender_specific_attributes_vault_topics_02_SEP_2026.md:92`）提出了種子區分：雌性偏好**半胱天冬酶依賴性細胞凋亡（調控性、非發炎性）**，而雄性偏好 **PARP-1/AIF 依賴性調控性壞死／parthanatos（程序性、溶解性、促發炎；Q3b）**，且為細胞自主性。

這一句話可推廣為適用於每個主題的 vault-wide 2×2 框架：**調控性 vs 非調控性**（程序性、ATP 依賴、膜完整 vs 生物能量崩潰、膜破裂）交叉**發炎性 vs 非發炎性**（DAMP／細胞激素釋放＋免疫招募 vs 靜默清除）。

知識庫驗證（2026-09-04）：`graphify-out/graph.json`（3403 個節點／6356 條邊）、`wiki-out/graph.json`（3067 個節點／36348 條邊），231 篇筆記提及至少一種調控性死亡術語。各象限成員皆已有專屬實體筆記：[[Apoptosis]]、[[Necrosis]]、[[Necroptosis]]、[[Parthanatos]]、[[Pyroptosis]]、[[Ferroptosis]]、[[Autophagic Cell Death]]、[[Secondary Necrosis]]、[[SASP]]、[[NLRP3]]、[[PARP1]]、[[Sirtuin-Caspase Crosstalk]]。

**性別疊加：** XX 偏向 Q1（調控性／靜默）；XY 偏向 Q3（溶解性／發炎性——Q3a 意外性＋Q3b 調控性壞死）。雌激素是將雌性維持在 Q1 的象限轉換因子，直到停經（雌激素斷崖 → Q1 轉向 Q2／Q3）。

## 定義

| 軸向 | 調控性（Controlled） | 非調控性（Uncontrolled） |
| --- | --- | --- |
| 能量學 | ATP 依賴、有序 | ATP 耗竭、被動／崩潰 |
| 細胞膜 | 在胞葬作用前保持完整；起泡、凋亡小體 | 早期破裂；腫脹（[[Oncosis]]）、DAMP 外洩 |
| 執行機制 | 明確的蛋白酶／激酶／多聚體級聯（caspases、RIPK1/3/MLKL、PAR/AIF、脂質過氧化檢查點） | 離子幫浦衰竭、calpain／cathepsin、無程序性破裂（僅 Q3a） |
| 可逆性 | 檢查點門控（Bcl-2、IAPs、GPX4/FSP1、PARG/Iduna、Necrostatin-1） | 不可逆點（mPTP、LMP）或檢查點失效下游的生物能量阻斷（HK-1 阻斷） |

| 軸向 | 非發炎性（Non-inflammatory） | 發炎性（Inflammatory） |
| --- | --- | --- |
| 訊號 | 磷脂醯絲胺酸、靜默胞葬作用 | DAMPs（[[HMGB1]]、ATP、尿酸、DNA、組蛋白）、IL-1beta／IL-18、SASP |
| 受體 | 吞噬細胞上的 MerTK、TIM4 | [[TLR2]]／[[TLR4]]／[[TLR9]]、[[RAGE]]、[[P2X7 Receptor]]、[[NLRP3]]、[[cGAS-STING Pathway]] |
| 結果 | 消退 | 無菌性發炎、修復或慢性疾病 |

## 四個象限（知識庫接地）

### Q1 — 調控性／非發炎性（靜默移除）

- **核心：** 內源性／外源性 [[Apoptosis]]（cytochrome C → apoptosome → [[Caspase-9]] → [[Caspase-3]]；[[Caspase-8]]→執行者 caspases），受 [[Bcl-2]]／Bcl-xL、[[XIAP]]、[[SIRT1]]→p53／FOXO 去乙醯化、[[SIRT3]]→CypD／IDH2、[[SIRT5]]→cytochrome C 制衡。
- **管家機制：** [[Autophagy]]／粒線體自噬（PINK1／Parkin 清除 ROS 來源）、NAD+ 補救維持 SIRTs。
- **知識庫錨點：** `src/notes/_link/Apoptosis.md:15` 將細胞凋亡定義為「不誘發發炎」的移除；`src/notes/_link/Sirtuin-Caspase Crosstalk.md:24-33` 詳述 SIRT 對 caspases 的煞車。
- **性別：** XX 預設。較高的 caspase-3／8 活化、較早的 cytochrome C、E2→Bcl-2 支持（`src/notes/_link/Apoptosis.md:50-77`）。

### Q2 — 調控性／發炎性（程序性警報）

- **核心：** [[Pyroptosis]]（PRR＋ASC＋pro-caspase-1 → caspase-1 → IL-1beta／IL-18 ＋ [[Gasdermin D]] 孔洞）、[[Necroptosis]]（[[Caspase-8]] 被阻斷時 [[RIPK1]]→[[RIPK3]]→[[MLKL]] 孔洞）、衰老停滯 ＋ [[SASP]]（NF-κB、cGAS-STING、mTOR／p38 驅動的 IL-6／IL-8／MMPs／CXCL12）。
- **橋接：** MLKL K+ 外流 → [[NLRP3]]；RIPK3 不經 MLKL 直達 NLRP3；少數 MOMP（BAX／BAK）→ mtDNA → cGAS-STING → SASP 而不死亡。
- **知識庫錨點：** `src/notes/_link/Necroptosis.md:15-22`（「程序性卻發炎」）；`src/notes/cancer/Pyroptosis.md:17-19`；`src/notes/senescence/SASP.md:88-110`（NF-κB ＋ cGAS-STING 調控）。
- **性別：** 雌激素經由 ERbeta／PELP1 抑制 NLRP3 致敏（OVX 模型），並經由 ERα-HDAC3 抑制 STING，但創傷後 [[Gasdermin D]] 執行者評分可呈雌性偏向——致敏 vs 執行者必須分開（`src/notes/cancer/Pyroptosis.md:29`）。

### Q3 — 發炎性破裂（意外性＋調控性壞死）

- **Q3a — 意外性 [[Necrosis]]（非調控性）：** ATP 耗竭 → Na+/K+-ATPase 衰竭 → 腫脹 → Ca2+ 超載 → calpain、ROS → mPTP、LMP → cathepsins。無明確級聯、無檢查點挽救。
- **Q3b — 調控性壞死（程序性、溶解性）：** [[Parthanatos]]（PARP1 過度活化 → PAR → [[Apoptosis-Inducing Factor]] ＋ [[MIF]] 核酸酶 ＋ HK-1 糖解阻斷 ＋ NAD+／ATP 耗竭；無腫脹、約 50-kb 片段化、z-VAD 抗性、PARP 抑制劑可挽救）與 [[Ferroptosis]]（GPX4／GSH 或 FSP1-CoQ10 失效 → 鐵依賴性脂質過氧化 → 膜破裂；GPX4／FSP1 支持、鐵螯合可挽救）。兩者皆如 Q2 受檢查點門控（PARG／Iduna、GPX4／FSP1），但依溶解性／發炎性結果歸入 Q3。
- **知識庫錨點：** `src/notes/_link/Necrosis.md:17,52-78`（ATP 崩潰、DAMP／無菌性發炎表）；`src/notes/_link/Parthanatos.md:17-24`（caspase 非依賴、PAR／AIF、50-kb 片段化）；`src/notes/_link/Ferroptosis.md:16,23-37`（GPX4 ＋ FSP1-CoQ10-NADPH ＋ SIRT3-SLC25A22 軸）。
- **性別：** parthanatos 為 XY 預設（PARP 缺失僅保護雄性、傷害雌性；`src/notes/_link/Parthanatos.md:60`、`src/notes/_link/PARP1.md:63`）；腎臟 IRI 中雄性偏向的 RIPK3／MLKL；Gpx4-KO 經由 NRF2 損傷雄性腎臟但放過雌性；睪固酮致敏（`src/notes/_link/Ferroptosis.md:41`）。

### Q4 — 非調控性／非發炎性（罕見對照）

- 設計上多為空集：DAMP 感測失效的嚴重 ATP 耗竭（例如體外晚期耗竭、免疫冷崩潰）。分類時作為虛無假設使用——若死亡看似非調控卻靜默，應先檢查胞葬作用 assay 失效或 DAMP 讀數缺失，而非斷言 Q4。

### 關鍵橋接：[[Secondary Necrosis]]

未被清除的 Q1 變成 Q3：凋亡細胞／凋亡小體未被胞葬 → 膜失效 → HMGB1／ATP／DNA → 與原發性壞死相同的 TLR／RAGE／NLRP3 機制（`src/notes/_link/Secondary Necrosis.md:15-17`）。這解釋了為何超過清除窗口的細胞培養「凋亡」讀起來像發炎，以及為何 Annexin V+／PI 閘控很重要。

## 知識庫主題象限映射

依性別模式分組（最後一欄），XX vs XY 分歧最強者優先。

### 核心 XX vs XY 執行者分歧

| 領域 | Q1（基線恆定） | Q2（感染、傷口、轉化細胞、急性 SASP） | Q3（Q3a 意外性／Q3b 調控性壞死） | 性別模式 |
| --- | --- | --- | --- | --- |
| Caspases／p53／Bcl-2 | Caspase-3／8／9、Bcl-2／Bcl-w 設定點 | Caspase-1／ASC／NLRP3、GSDMD／E（casp-3／7 切割 GSDMD 以阻斷 pyroptosis） | PARP-1／AIF／MIF、Bax／Bak miMOMP→STING | XX-caspase vs XY-PAR／AIF；Q-VD-OPh 僅雌性、PARP-i 僅雄性 |
| NAD+／PARP／CD38 | 補救（NR／NMN）、SIRT 競爭 NAD+ | PARP1→NF-κB、ATM-PARP1-IKK→SASP、MIF→NLRP3 | PARP 過度活化 → NAD+／ATP 耗竭 → parthanatos | 雄性 PARP 驅動的 NAD+ 下降；雌性卵巢 CD38；CD38＋PARP 合併抑制在單獨失效處挽救 |
| 自噬／mTOR／AMPK | PINK1／Parkin 粒線體自噬抑制 necroptosis／parthanatos | RIPK3-AMPK-ULK1 早期自噬接著通量阻斷；caspase-1 切割 Parkin → pyroptosis 勝出 | 過度／長期 CR 自噬 → 第二型死亡；HK-1 阻斷 → AMPK-mTORC1 疊加 | 雄性典型 Beclin-1 vs 雌性 ATG7 路線（中風後） |

### 雌激素維持 Q1，停經後釋放

| 領域 | Q1（基線恆定） | Q2（感染、傷口、轉化細胞、急性 SASP） | Q3（Q3a 意外性／Q3b 調控性壞死） | 性別模式 |
| --- | --- | --- | --- | --- |
| Sirtuins／MnSOD／Trx1 | SIRT1／3／6→p53／FOXO／CypD／IDH2／MnSOD 煞車 | SIRT 失效 → NLRP3／pyroptosis、necroptosis | SIRT 失效 → ROS／mPTP 壞死、ferroptosis | E2→SIRT1／3→SOD2 維持 Q1；停經釋放煞車 |
| NF-κB／發炎 | IκBα、SIRT6-H3K9 制衡 | MyD88／ERα-p65、TLR／ZBP1→RIPK3、cGAS-STING→IFN | DAMP 風暴（HMGB1→TLR／RAGE、ATP→P2X7→NLRP3） | E2 抑制致敏；停經後去抑制 |
| 端粒 | TERT、shelterin、E2 抗氧化 | DDR→ATM-PARP1-IKK→NF-κB→SASP；CCF→cGAS | 嚴重縮短 → 危象／壞死 | 雌性 DKC1／TERT 優勢；停經加速縮短 |

### 雄性早期負擔，雌性停經後加速

| 領域 | Q1（基線恆定） | Q2（感染、傷口、轉化細胞、急性 SASP） | Q3（Q3a 意外性／Q3b 調控性壞死） | 性別模式 |
| --- | --- | --- | --- | --- |
| 衰老／SASP | p16／p21 停滯、p53 抑制 SASP | SASP（IL-6／IL-8／CCL2／CXCL12／MMPs）、LINE1→IFN、IL-6／8→ACase→ferroptotic 擴散 | 持續衰老 → 組織壞死／纖維化微環境 | 雄性全身性 SASP 較高；雌性停經後加速；D+Q 雌性偏向、fisetin 雄性偏向 |
| 癌症 | 凋亡逃逸為標誌；SIRT6 在腫瘤中促凋亡 | 治療誘導的衰老／SASP、pyroptosis／necroptosis 為治療目標 | 腫瘤壞死 → 促轉移發炎；TNBC 中胱胺酸飢餓共誘導 necroptosis＋ferroptosis | MBOAT1-ER／MBOAT2-AR 門控 ferroptosis ＋ 激素阻斷協同；EXITS X 保護 |

### 關鍵串擾棘輪（雙向，源自知識庫）

- SIRT↔caspase：SIRTs 抑制 caspases；caspase-3／9 在 DEPDVP(704-709) 切割 SIRT1→TRIM28 降解，鎖定死亡；caspase-3／7 切割 GSDMD 以阻斷 pyroptosis。
- SIRT3↔caspase-1↔Parkin：SIRT3 降低 mtROS→抑制 NLRP3；caspase-1 切割 Parkin→阻斷粒線體自噬→更多 ROS→更多 NLRP3（朝 Q2 的前饋）。
- PARP1↔SIRT1：共享 NAD+ 池；慢性 PARP 抑制 SIRT 去乙醯化（PGC-1α／FOXO／p53）；caspases 切割 PARP1 以防止 parthanatos（依損傷劑量切換 Q1 vs Q3）。
- Necroptosis↔ferroptosis：共享 ROS／cysteine／HSP90；MLKL 耗竭 PUFA→ halt ferroptosis，而 ACSL4 過度表現抵抗 MLKL（膜脂質門控）。

### 留在 Q1 與 Q2

- **Q1（基線恆定）：** Q1 為調控性／非發炎性——經由 [[Apoptosis]]、粒線體自噬與 SIRT／NAD+ 管家的靜默移除，膜完整且胞葬作用導向消退。維持在此是治療方向：所列機制是將細胞維持在 Q1、防止漂向 Q2 或 Q3 的煞車。
- **靜息 Q1 即基線恆定：** 日常更新保持靜默、無急性威脅。感染、受傷或轉化時，暫時離開 Q1 進入 Q2 警報再消退回來。
- **健康目標不是永久鎖死 Q1：** 靜息維持 Q1、按需發動有能力的短暫 Q2、快速消退回 Q1，避免慢性 Q2 或任何 Q3。Q2 短暫存在為宿主防禦、腫瘤抑制與傷口癒合所需，而過多的 Q1 死亡本身亦致病（如神經元喪失）。
- **Q4 為近空對照：** 真正的非調控性破裂而無發炎訊號基本上是空集合，因為破裂在物理上必然外洩 DAMPs。表觀 Q4 通常是遺漏的讀數、降解的 DAMPs、感測器耐受，或誤分類的 [[Secondary Necrosis]]。

## 如何以此視角閱讀任何知識庫筆記

- **分類所述死亡：** 程序性／檢查點門控（具名蛋白酶／激酶／多聚體級聯：caspases、RIPK1／3／MLKL、PAR／AIF／MIF、GPX4／FSP1）vs 意外性（腫脹、破裂、ATP 下降、無明確級聯的 mPTP／LMP）；發炎性（DAMPs、IL-1beta／IL-18、SASP、免疫招募）vs 靜默（胞葬作用、消退）。注意 Q3b 為程序性卻溶解——先依級聯分類，再依結果分類。
- **定位橋接：** 是否有清除失效（→ [[Secondary Necrosis]]）、caspase-8 抑制（→ necrosome）、GSH／GPX4 或 CoQ10／FSP1 失效（→ ferroptosis）、PAR 累積 ＋ AIF 入核 ＋ NAD+ 下降合併 z-VAD 抗性（→ parthanatos）、CCF／mtDNA ＋ STING ＋ IFN（→ SASP）？
- **套用性別疊加：** 機制使用 XX 效應器（caspase-3／8、Bcl-2、XIAP 鑲嵌）或 XY 效應器（PARP1／AIF／MIF、RIPK3／MLKL、低 NRF2）？雌激素制衡（ERbeta→NLRP3、ERα-HDAC3→STING、E2→SIRT／SOD2／Bcl-2）是否存在，停經／OVX 是否翻轉象限？
- **圖譜檢查：** `graphify query "<entity> cell death inflammation"`（BFS；`--dfs` 追鏈、`--budget N` 限額）、`graphify path "<entity>" "Apoptosis"` vs `graphify path "<entity>" "Parthanatos"`／`"Ferroptosis"`／`"Pyroptosis"`、`graphify explain "<entity>"` 引用 `source_location`。斷言串擾前先確認 wikilink 路徑存在於 `wiki-out/graph.json`。

最小 dissect panel（源自知識庫工具表）：PARP 抑制劑（parthanatos）＋ z-VAD-FMK／Q-VD-OPh（apoptosis）＋ [[Necrostatin-1]]（necroptosis）＋ [[Ferrostatin-1]]／liproxstatin-1（ferroptosis）；懷疑 Q2 時加 VX-765（caspase-1）與 PAANIB-1（[[MIF]] 核酸酶）。以 AIF 入核 ＋ PAR ＋ NAD+（parthanatos）、p-MLKL（necroptosis）、GSDMD-NT ＋ IL-1beta（pyroptosis）、BODIPY-lipid-ROS ＋ MDA／4-HNE 合併 DFO 挽救（ferroptosis）、Annexin V+／PI− vs PI+（apoptosis vs secondary necrosis）確認。

## 治療推論

- Q1 治療旨在恢復靜默移除（BH3 mimetics、SIRT 活化、NAD+ 補救）——優先關聯 XX 生物學；caspase 抑制劑在中風模型僅保護雌性。
- Q2 治療旨在調節警報（NLRP3／GSDMD、RIPK1／3／MLKL、STING、SASP／senomorphics：rapamycin、metformin、apigenin、針對 LINE1 的 NRTIs、針對 SLC25A1 acetyl-CoA 臂的 CTPI2）——依致敏（雌激素制衡）vs 執行者（GSDMD 可雌性偏向）分層。
- Q3 治療旨在防止破裂——Q3a：防止崩潰（ATP 支持、Ca2+／mPTP／LMP 控制）；Q3b：檢查點挽救（PARP 抑制劑、PAANIB-1、MIF 的 HDAC6 調節、PARG／Iduna 增強、GPX4／FSP1 支持、鐵螯合、MBOAT 導向的激素組合）——PARP 抑制保護雄性但惡化雌性；Gpx4 挽救在雌性為 NRF2 依賴。
- 避免 Q1→Q3 轉換誤差：體外晚期「凋亡」常為 [[Secondary Necrosis]]；無 RIPK3／MLKL 覆蓋的 caspase 阻斷會將 Q1 翻轉為 Q2。

### 停經前後藥物的鈍化 vs 加劇

僅教育用途，非醫療建議。鈍化維持 Q1 或抑制 Q2；加劇推動 Q2→Q3。

| 藥物／類別 | 方向 | 象限機制 | 知識庫錨點 |
| --- | --- | --- | --- |
| 停經激素治療（estradiol） | 鈍化 | ERβ→NLRP3 制衡、ERα-HDAC3→STING 制衡、E2→SIRT／SOD2／Bcl-2 維持 Q1 | KEEPS GDF15／TNFR1／FAS 下降；OVX NLRP3／STING 模型 |
| 糖皮質激素（短程） | 鈍化 | 經由 IL-1α→NF-κB 阻斷 SASP | [[Senomorphic Therapy]] SASP 抑制 |
| [[Metformin]]／[[Rapamycin]] | 鈍化 | AMPK 活化、mTOR SASP 轉譯阻斷、NF-κB 抑制 | SASP／mTOR 節；星狀膠質細胞衰老延遲 |
| [[Statins]] 抗發炎臂 | 鈍化 | Rac1／Nox 阻斷、eNOS→NO→NF-κB 抑制、VCAM-1 下降 | [[VCAM-1]] statin 筆記 |
| 芳香酶抑制劑／tamoxifen／fulvestrant | 加劇朝 Q3 | ER 阻斷 → MBOAT1 下降 → MUFA 屏蔽喪失 → ferroptosis 敏感；NLRP3／STING 去抑制 | [[Ferroptosis]] MBOAT1-ER 軸 |
| [[Statins]] CoQ10 耗竭臂 | 加劇朝 Q3 | Mevalonate 阻斷 → CoQ10 喪失 → [[FSP1]] 陷阱失效 → ferroptosis | _triples.json FSP1-CoQ10；[[Coenzyme Q10]] statin 筆記 |
| [[Doxorubicin]]／anthracyclines | 加劇朝 Q3 | p53／Fas 凋亡超射加鐵驅動的 ferroptotic 心肌病變 | SIRT6／SIRT4 心臟保護筆記 |
| Acetaminophen／isoniazid（肝臟脈絡） | 加劇朝 Q3 | Glutathione 耗竭 → GPX4 弱化加 NLRP3 活化 | SIRT6 glutathione／SIRT1-NLRP3 肝臟筆記 |
| 慢性糖皮質激素 | 加劇朝 Q3 | 急性 SASP 阻斷之外的長期骨髓脂肪衰老 | 旁分泌衰老 glucocorticoid 筆記 |

疊加規則：雌激素訊號喪失加 CoQ10／GSH 喪失一次合併三個 Q3 門控——STING／NLRP3 去抑制、FSP1 挨餓、GPX4 弱化。

## 缺口與後續行動

- 無 vault-wide 象限標籤——考慮 frontmatter 加 `cell-death:Q1/Q2/Q3` ＋ `inflammation:yes/no` 或象限索引筆記（檔名唯一，依 AGENTS.md §3 frontmatter 不放 [[links]]）。
- [[Autophagic Cell Death]] 為 stub（`src/notes/_link/Autophagic Cell Death.md:16-22`）——需自 [[Necroptosis]] 補上 PINK1／Parkin vs RIPK3-PGAM5-Drp1 樞紐細節。
- 無性別分層的 navitoclax 數據；無驗證的 MIF／PAAN 性別差異；心臟／腦 necroptosis 性別主張仍為單一研究（Tran 2025）——暫不作定論。
- 建議追蹤：為約 231 篇死亡模式筆記加上象限標籤；在 [[Apoptosis]]、[[Parthanatos]]、[[Ferroptosis]]、[[SASP]] Connections 加 Q1→Q2→Q3 轉換圖；rebuild-triples ＋ rebuild-wiki 傳播新連結。

## 來源

- 知識庫：[[Apoptosis]]、[[Necrosis]]、[[Necroptosis]]、[[Parthanatos]]、[[Pyroptosis]]、[[Ferroptosis]]、[[Secondary Necrosis]]、[[Autophagic Cell Death]]、[[SASP]]、[[PARP1]]、[[Sirtuin-Caspase Crosstalk]]、[[NLRP3]]、[[Gasdermin D]]、[[MLKL]]、[[Apoptosis-Inducing Factor]]、[[Inflammaging]]、[[STING]]、[[cGAS]]。
- 性別稽核：`src/tasks/task_output_gender_specific_attributes_vault_topics_02_SEP_2026.md`。
- 圖譜產物：`graphify-out/graph.json`、`wiki-out/graph.json`、`web/public/data/nodes.json`。
