---
title: Parthanatos
description: "PARP-1 依賴的調控性細胞死亡，由 PAR 聚合物訊號傳遞至粒線體 AIF 與
  核內 MIF 核酸酶執行；不依賴 caspase，伴隨大規模 DNA 片段化與 NAD+ 耗竭。"
protected: true
created: 2026-09-03
updated: 2026-09-14
tags: [biological-process, cell-death, regulated-cell-death, neurodegeneration]
url: #
source: #
aliases: [PARP-1-dependent cell death, PAR-mediated cell death]
---

# Parthanatos

**Parthanatos**（PAR + Thanatos）是[[PARP1]]依賴的調控性死亡，其定義為：活化的[[PARP1]] → 有毒的聚（ADP-核糖）（[[PAR]]）累積 → [[PAR]]結合粒線體[[Apoptosis-Inducing Factor|AIF]] → [[Apoptosis-Inducing Factor|AIF]]釋放並與[[MIF]]（PAAN）共同轉位至細胞核 → 大規模 DNA 片段化。它不依賴 caspase、絕對依賴[[PARP1]]，且不同於[[Apoptosis|細胞凋亡]]、[[Necrosis|壞死]]、[[Necroptosis|壞死性凋亡]]、[[Ferroptosis|鐵死亡]]與[[Pyroptosis|焦亡]]。

> [!info] 一句話說明 Parthanatos
> 嚴重的 DNA 損傷使[[PARP1]]過度活化而製造長支鏈的[[PAR]]；[[PAR]]經組蛋白 H1.2 離開細胞核，抵達胞質/粒線體以抑制[[Hexokinase-1|己糖激酶-1]]，並在 Arg588/Lys589/Arg592 處結合[[Apoptosis-Inducing Factor|AIF]]，釋放[[Apoptosis-Inducing Factor|AIF]]以招募[[MIF]]核酸酶進入細胞核進行染色質溶解。

## 概述

不同於細胞凋亡（caspase 梯狀降解、無聲）與意外性壞死（ATP 崩解、腫脹），parthanatos 呈現：膜完整性喪失 + 磷脂醯絲胺酸外翻，但**沒有**細胞腫脹或凋亡小體；粒線體去極化且早期[[Apoptosis-Inducing Factor|AIF]]釋放**早於**細胞色素 c；約 50 kb 的大規模片段化；Annexin V+/PI+；在經典表格中屬能量非依賴性；且可由[[PARP1]]刪除/抑制嚴格挽救，但 z-VAD-fmk 無效。

黃金標準模型：HeLa/CHO/MEFs 中 MNNG 50-500 uM 5-25 分鐘；皮質神經元中 NMDA 500 uM 5 分鐘；H2O2、NO、過氧亞硝酸鹽、氧糖剝奪。Harlequin 小鼠（[[Apoptosis-Inducing Factor|AIF]]減少 80%）對 NMDA/[[PAR]]具抗性，但會發展出氧化性神經退化，證明[[Apoptosis-Inducing Factor|AIF]]的雙重功能。

## 核心級聯

### 1. DNA 損傷 -> [[PARP1]]過度活化

麩胺酸興奮性毒性（NMDA -> Ca2+ -> 鈣調蛋白 -> nNOS -> NO + 超氧陰離子 -> 過氧亞硝酸鹽）、ROS、烷化劑（MNNG/MMS）、缺血再灌流、病理性 α-突觸核蛋白/Abeta、MPTP。[[PARP1]] 116 kDa 經鋅指感知斷裂，動用[[NAD+]]製造 10-500 倍的[[PAR]]（數百個單元），接於自身/組蛋白/修復因子上。輕度損傷 = 修復；重度 = 死亡訊號。另有不依賴 DNA 的途徑，經 ERK2 與 AIMP2。

### 2. [[PAR]]的生成與輸出

[[PAR]]在 15 分鐘於細胞核/胞質達峰，30 分鐘於粒線體達峰（COX1 共定位），60 分鐘約 80 nM -> 約 60% 神經元死亡。純化的[[PAR]]由脂質載體遞送，依劑量/長度殺死細胞，可被[[PARG]]/磷酸二酯酶阻斷，z-VAD 無效。載體是被 PAR 化的組蛋白 H1.2；E3 連結酶[[Iduna]]泛素化 H1.2 以阻斷輸出。[[Apoptosis-Inducing Factor|AIF]]-D3 上的 PAR 結合基序（Arg588/Lys589/Arg592）與 DNA 結合位點分離；突變後仍保留氧化酶/DNA 結合，但阻斷釋放與死亡。

### 3. 胞質雙重打擊

- **生物能量學：**[[PAR]]結合/抑制[[Hexokinase-1|己糖激酶-1]]並將其自粒線體釋放 -> 糖解作用阻斷、[[NAD+]]/ATP 耗竭、PPP/GSH/NADPH 下降。丙酮酸/α-酮戊二酸旁路可在星狀膠質細胞模型中挽救；皮質/多形性膠質母細胞瘤模型顯示單純 NAD+ 流失不足、HK-1 阻斷才是主因。補救合成每分子 ADP-核糖耗費 4 個 ATP，加上 Nudix 產生 AMP -> AMPK-mTORC1 訊號加上自噬的疊加層。
- **死亡：**[[PAR]]結合粒線體外的[[Apoptosis-Inducing Factor|AIF]]池（20-30% 位於外膜胞質側）-> 構型改變而釋放。成熟的[[Apoptosis-Inducing Factor|AIF]]為 62 kDa（67 kDa 前體，Met53/Ala54 切割），存在於膜間隙與外膜池；缺血時可見 62->57 kDa 的 calpain 切割，但對經典 parthanatos 並非必要。

### 4. [[Apoptosis-Inducing Factor|AIF]]-[[MIF]]核內染色質溶解

胞質的[[Apoptosis-Inducing Factor|AIF]]結合[[MIF]]（PAAN，PD-D/E(X)K 核酸酶，E22 為關鍵，與互變酶活性無關）。[[HDAC6]]使[[MIF]]保持去乙醯化以允許結合；抑制[[HDAC6]] -> 乙醯化 -> 無法轉位。兩者共同轉位；[[MIF]]對 ssDNA 具內切+外切核酸酶活性，[[Apoptosis-Inducing Factor|AIF]]增強其 DNA 親和力。另有 AIF-CypA-H2AX 核酸酶的替代假說；EndoG 在哺乳類中已被排除。HSP70（胺基酸 150-228，ATPase）在胞質中扣押[[Apoptosis-Inducing Factor|AIF]]作為煞車。

## 調節

- **[[PARG]]/[[ARH3]]：** 高度活性的擦除器。過表達具保護性（梗塞縮小）；刪除在 E3.5 致死，並使細胞對 MNNG/甲萘醌敏感。2026 Hoch 實驗室預印本（bioRxiv 2026.05.12.724507）：在 RPE1/MNNG 中 parthanatos 嚴格需要 PARG 活性——完全抑制可阻斷 ATP 流失/死亡，但不阻斷 NAD+ 流失（NAD/ATP 解偶聯）；低量殘餘 PARG 即足夠；該系統中 ARH3 KO 無效；新的 53-kDa 剪接異構體 PARG53 修正了 PARG55/60 的標註，並解釋 CRISPR 與抑制劑之間的差異。悖論：在 H2O2 模型中敲低具保護性，MNNG 模型則否；內切 vs 外切糖苷酶的平衡（多為單體、少數游離鏈）加上 PARP1 自體抑制造成混淆。[[ARH3]]喪失使細胞對缺血敏感，人類突變體表現出神經退化。
- **[[NAD+]]區室：** 核/胞質池最先受損；粒線體池經 SLC25A51，另有粒線體[[PARP1]]之爭。NR/NMN 搶救具情境依賴性。[[SIRT1]]與PARP1競爭[[NAD+]]；SIRT1-PARP1-AIF 軸把守存活 vs 死亡。
- **Ca2+：** ADP-核糖單體開啟[[TRPM2]] -> Ca2+ 內流；內質網釋放亦有貢獻。螯合可保護腎臟 I/R 與 H2O2 模型，但對 MNNG 模型無效。calpain/mPTP 為下游候選者，非必經。
- **Caspase 開關：** 低度損傷 -> 短暫 NAD+/ATP 下降 -> 細胞凋亡；高度損傷 -> 長期耗竭 -> parthanatos。凋亡性 caspase 切割[[PARP1]]以防止 parthanatos。

## 病理與臨床相關性

後mitotic 神經元的主要死亡方式：中風/MCAO（分鐘尺度的[[PAR]]/NO；PARP KO/抑制、[[PARG]]過表達具保護性；益處偏向雄性）、帕金森（α-突觸核蛋白 PFF -> NOS -> [[PARP1]]；[[PAR]]加速纖維化的前饋；PARP KO/抑制與 PAANIB-1 具保護性）、阿茲海默（Abeta/tau/金屬 ROS；[[PAR]]與斑塊/纖維糾纏共定位；PARP KO 保留認知）、ALS（TDP43/SOD1/FUS/C9ORF72；veliparib/olaparib 具保護性）、亨廷頓（htt 修復支架缺陷、尾狀核[[PARP1]]偏高、INO-1001 具保護性；腦脊髓液[[PAR]]悖論），另有糖尿病、結腸炎、視網膜/耳蝸 I/R、休克（性別分層保護：見下節性別二態性）。

## 性別二態性

缺血性 parthanatos 訊號具性別二態性。在成年小鼠 MCAO 中，PARP-1 刪除、nNOS 阻斷或 PARP 抑制（7-nitroindazole；PJ-34）可縮小雄性的梗塞，卻加劇雌性的損傷，且 PARP-1 喪失會廢除 17β-雌二醇的神經保護——在 PARP-1−/− 卵巢切除雌鼠中，雌二醇補充反而悖論性地增加梗塞（McCullough et al. 2005, *J Cereb Blood Flow Metab*, PMID 15689952）。PAR 形成與核內[[Apoptosis-Inducing Factor|AIF]]轉位在兩性皆會發生，但只殺死雄性：PARP-1 刪除同等抑制 PAR/AIF 卻僅保護雄性，且 Harlequin AIF 缺乏成年個體僅在雄性受保護（Yuan et al. 2009, *Exp Neurol* 217:210–218）。新生兒模式一致——PARP-1 破壞優先保護雄性免於圍產期缺氧缺血（Hagberg et al. 2004, *J Neurochem* 90:1068–1075），而雌性經細胞色素 c/caspase-3 死亡，僅在雌性被泛 caspase 抑制劑 Q-VD-OPh 挽救（*Stroke* 2011;42:739–745）。單獨的性染色體組成即可在體外重現此一分歧：XY 神經元偏好 AIF 介導的 caspase 非依賴性死亡，XX 神經元則為細胞色素 c/caspase 死亡（Du et al. 2004, *J Biol Chem* 279:38563–38570）。注意事項：新生兒 Harlequin 保護在兩性皆與 caspase 抑制具加成效果（Zhu et al. 2006, *Cell Death Differ*），因此雄性選擇性的 AIF 效應屬成年期且依賴模型。[[MIF]]/PAAN 核酸酶步驟尚無經證實的性別差異。XX-caspase 對應機制亦見[[Apoptosis|細胞凋亡]]。

**臨床轉譯落差（2026-09-13）：** 此性別分歧在臨床上仍未經檢驗。唯一以 parthanatos 為標的的中風計畫 JPI-289（amelparib，Jeil；PARP-1 IC50 18.5 nM，細胞 PAR 10.7 nM；猴 tMCAO 梗塞縮小約 49%），其 Ph1 在健康男性志願者中進行，Ph2a（NCT03062397，急性缺血性中風 + tPA）亦未做性別分層——從未以雄性選擇性的生物學設計試驗，也不存在性別分層的細胞死亡神經保護試驗。女性端候選更為落後：泛 caspase 抑制是機制相符的策略（Q-VD-OPh 僅挽救雌性），但臨床泛 caspase 數據令人卻步（emricasan Ph2b NASH 未達終點，*J Hepatol* 2020），ERβ 選擇性激動僅在非中風適應症抵達 Ph2（erteberel/LY500307 精神分裂症 + 經前症候群抑鬱；ERB-041 IBD），而不具女性化的 ER 靜默雌二醇類似物從未離開臨床前。慢性雌二醇中風試驗失敗（WEST、WHI），因此女性組設計應瞄準執行者（caspase-3）與 ERβ 軸，而非取代雌激素。完整框架與性別分層中風試驗的初步設計見 `task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026.md`。

## 工具化合物

| 標的 | 藥劑 |
|---|---|
| [[PARP1]]過度活化 | DPQ、DHIQ、benzamide/3-aminobenzamide、PJ34、veliparib、olaparib、INO-1001、4'-methoxyflavone、3',4'-dimethoxyflavone、[[Amelparib]]（JPI-289；水溶性、臨床用） |
| [[PAR]]訊號 | 抗 PAR 抗體、[[PARG]]過表達、[[Iduna]]增強、經 NOX2/HK-1 保護的 crocetin |
| [[Apoptosis-Inducing Factor|AIF]]釋放/轉位 | 無直接抑制劑；PAR 結合缺陷型 AIF 概念驗證、HSP70 過表達、缺血模型中的 calpastatin |
| [[Apoptosis-Inducing Factor|AIF]]-[[MIF]]相互作用 | [[HDAC6]]抑制劑可破壞（乙醯化[[MIF]]） |
| [[MIF]]核酸酶 | PAANIB-1 可穿越血腦屏障的選擇性抑制劑 |
| 生物能量學 | 丙酮酸/α-酮戊二酸旁路、允許情境下的 NR/NMN、H2O2/腎臟 I/R 中的 Ca2+ 螯合 |

> [!tip] 死亡類型解析組合
> 合併 PARP 抑制劑（parthanatos）+ z-VAD-FMK（細胞凋亡）+[[Necrostatin-1]]（壞死性凋亡）+[[Ferrostatin-1]]（鐵死亡）。若死亡被 PARP 抑制而非 z-VAD 阻斷，即指向 parthanatos；以[[Apoptosis-Inducing Factor|AIF]]核轉位 + [[PAR]]累積 + NAD+ 下降確認。

## 交互作用

- **Parthanatos <-> [[Apoptosis|細胞凋亡]]：** 互相對抗（NAD+/ATP 開關；caspase 切割[[PARP1]]）加上合作節點：calpain–BID–BAX–[[Apoptosis-Inducing Factor|AIF]]軸（calpain 切割的 BID → tBID → BAX → AIF 釋放，不依賴 caspase）、作為胞質 PAR 載體驅動 AIF 死亡的[[89-kDa PARP1 Fragment|89-kDa PARP1 片段]]（2025）、以及 HK1–VDAC 解離降低凋亡閾值。細胞凋亡中的[[Apoptosis-Inducing Factor|AIF]]轉位可能是附帶現象或 PARP 依賴的次級事件。
- **Parthanatos <-> [[Necroptosis|壞死性凋亡]]：** 兩者皆被視為調控性壞死的子集；經 TNF-alpha + [[PARP1]]ATP 耗竭連結；但 PAR/[[Apoptosis-Inducing Factor|AIF]]特徵獨特。
- **Parthanatos <-> [[Autophagy|自噬]]：** 某些模型中可見 AMPK-mTORC1 活化與自噬圖像；保護性 vs 執行性角色未解。
- **Parthanatos <-> [[Ferroptosis|鐵死亡]]：** 共享上游 ROS/JNK/MAPK/mTOR，經 HK-1/PPP 造成 GSH/NADPH 下降；某些模型中自噬期間的 PARP 活性促進鐵死亡。
- **Parthanatos -> 發炎：**[[PARP1]]共同活化 NF-kB；片段化 DNA 作為 DAMP -> cGAS-STING、AIM2、[[NLRP3]]；[[MIF]]驅動 NLRP3 的 IL-1beta，且是 PD/AD 生物標記。
- **Parthanatos <-> [[Mitophagy|線粒體自噬]]：** PINK1/Parkin 清除 ROS 來源以抑制[[PARP1]]；caspase/MIF-核酸酶軸則相反。

## 未解問題

> [!note]
> 來源：[[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> 該綜述的核心主張是：[[PARP1]]過度活化下游的步驟仍具爭議，而表面的矛盾可能反映不同細胞類型與代謝狀態下真正不同的路徑。其四個機制章節提出 17 個未解問題：(1) 什麼決定[[NAD+]]補充能否挽救；(2) 糖解抑制是否必要和/或充分；(3) 游離[[PAR]]如何抑制[[Hexokinase-1|己糖激酶-1]]；(4) NAD+ 與[[ATP]]流失在機制上是否偶聯；(5) [[Apoptosis|細胞凋亡]]–parthanatos 交互作用是否超出互相對抗；(6) [[PARG]]促進還是抑制執行；(7) 游離 PAR 如何生成、受保護並輸出細胞核；(8) [[ADP-ribose]]門控的[[TRPM2]] Ca2+ 是否必要和/或充分；(9) 是否存在 TRPM2 依賴與 TRPM2 非依賴的模式；(10) TRPM2 介導 Ca2+ 的下游效應；(11) 是否需要[[Nudix Hydrolases]]；(12) ADP-核糖衍生的 AMP 與糖解衍生的 ATP 對[[AMPK]]的相對貢獻；(13) AMPK/[[Autophagy|自噬]]是保護性還是執行性；(14) [[Apoptosis-Inducing Factor|AIF]]釋放的確切順序；(15) 哪種核酸酶切斷 DNA；(16) 什麼界定 AIF 依賴 vs AIF 非依賴的 parthanatos；以及 (17) 凋亡性 vs parthanatic 的 AIF 轉位。2014–2026 文獻更新見 `task_output_parthanatos_open_questions_08_Sep_2026.md`。

## 文件

提及此實體的文件清單

- [[_document_ - Parthanatos Fatokun 2014 mitochondrial mechanisms|Fatokun et al. 2014 Br J Pharmacol]]
  - 定義性綜述（約 597 次引用）：PARP-1/PAR/AIF 編排、MNNG/NMDA 黃金標準、PARG/AIF/PAAN 生物學、能量耗竭的排除、跨疾病表格、抑制劑世代。
- [[_document_ - Parthanatos Wang 2009 PAR signals to AIF|Wang et al. 2009 Exp Neurol]]
  - PAR 自細胞核轉位至粒線體作為承諾點；表 1 凋亡/壞死/自噬/parthanatos 特徵；AIF 異構體/池；calpain 之爭；HSP70 煞車。
- [[_document_ - Parthanatos Yang 2024 mechanisms therapeutics|Yang et al. 2024 Biochem Pharmacol]]
  - 更新：H1.2/Iduna 輸出、HK-1 生物能量學、Arg588/Lys589/Arg592 PAR 基序、AIF-MIF/HDAC6/PAANIB-1、神經發炎 cGAS/AIM2/NLRP3、PD/AD/ALS/HD/中風細節、結構導向抑制劑指南。
- [[_document_ - Parthanatos Andrabi 2006 PAR polymer death signal|Andrabi et al. 2006 PNAS]]
  - 奠基性證明：純化的 PAR 依劑量/長度殺死細胞（≥60-mer、≥20 nM，NMDA 後內源約 80 nM）；PARG/PD1 預消化、抗 PAR 血清、胞質 PARG 可使 NMDA/MNNG 死亡減半；PARG-Tg −62% vs PARG+/− +56% MCAO 梗塞。
- [[_document_ - Parthanatos Andrabi 2008 mitochondrial nuclear crosstalk|Andrabi/Dawson 2008 Ann NY Acad Sci]]
  - 提出術語（PAR + Thanatos）；PAR→AIF 核–粒線體交互作用；PARG-KO 致死；Harlequin AIF 模型；BAX/calpain/mPTP 候選者留待解答。
- [[_document_ - Parthanatos David 2009 messenger of death|David et al. 2009 Front Biosci]]
  - PAR 而非 NAD+ 的論點；PARP 結構域/合成化學；AIF 黃素蛋白生物學；PARG 異構體遺傳學；BAX/calpain/PTP 接線作為未解問題。
- [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
  - Hoch 實驗室關於下游機制及其矛盾的迷你綜述：NAD+ 區室/補救成本 vs PAR–HK1 糖解阻斷、游離 ADP-核糖–[[TRPM2]] Ca2+、[[Nudix Hydrolases]]–AMP–AMPK/mTORC1，以及 AIF 依賴 vs AIF 非依賴的 DNA 片段化；跨四個機制章節列出 17 個未解問題。

## 連結

- [[PARP1]] — 感測器/執行者；過度活化定義 parthanatos；DPQ/PJ34/veliparib/olaparib 的標的。
- [[Amelparib]] — JPI-289，唯一進入臨床的 parthanatos 標的中風計畫（Ph2a NCT03062397）；採雄性組生物學設計，未做性別分層。
- [[Apoptosis-Inducing Factor|AIF]] — 粒線體黃素蛋白；PAR 結合 -> 釋放 -> 核內承諾點；Hq 模型。
- [[PAR]] — 聚合物死亡訊號；長度/劑量毒性；由 H1.2 攜帶。
- [[MIF]] — PAAN 核酸酶；E22 依賴的 AIF 招募；PAANIB-1 標的；PD/AD 生物標記。
- [[PARG]] — PAR 擦除器；過表達具保護性、刪除致死/致敏；情境依賴的促進/抑制者。
- [[Iduna]] — PAR 依賴的 E3，阻斷 H1.2-PAR 輸出。
- [[Hexokinase-1|己糖激酶-1]] — 受 PAR 抑制的糖解閘門；生物能量衰竭節點。
- [[Nudix Hydrolases]] — ADP-核糖 → AMP/R5P；補救成本與 AMPK 疊加層。
- [[89-kDa PARP1 Fragment]] — 作為胞質 PAR 載體、橋接至 AIF 死亡的凋亡性 p89。
- [[NAD+]] — 被消耗的受質；區室特異的耗竭；SIRT 競爭；NR/NMN 搶救情境。
- [[TRPM2]] — 將 PAR 分解代謝連結至 calpain/mPTP 候選者的 ADP-核糖 Ca2+ 通道。
- [[HDAC6]] — 去乙醯化 MIF 以放行 AIF-MIF 結合/轉位。
- [[Apoptosis|細胞凋亡]] — caspase 依賴的對應機制；ATP 開關與 PARP 切割互相排斥；XX vs XY 性別分歧。
- [[Necroptosis|壞死性凋亡]] — 調控性壞死的同源過程；RIPK/MLKL vs PAR/AIF 之別。
- [[Ferroptosis|鐵死亡]] — 經 HK-1/PPP 的 ROS/GSH/NADPH 重疊。
- [[Autophagy|自噬]] — AMPK-mTORC1 疊加層；線粒體自噬的抑制。
- [[NLRP3]] — 被 PARP-1/NF-kB 與 MIF 放大的炎性小體；通往焦亡的橋樑。
- [[SIRT1]] — 把守 PARP-1/AIF 存活的 NAD+ 競爭者。
- [[Regulated Cell Death|調控性細胞死亡]] — 把 parthanatos 與凋亡/壞死性凋亡/焦亡/鐵死亡歸組的母程式。

## 連結摘要

- 於 src/notes/_link/ 新增跨主題實體註記（凋亡/氧化壓力/sirtuins/神經退化/癌症）。
- 新增連結：[[PAR]], [[MIF]], [[PARG]], [[Iduna]], [[Hexokinase-1]], [[Parthanatos]], [[Regulated Cell Death]], [[NLRP3]], [[SIRT1]], [[TRPM2]], [[HDAC6]], [[NAD+]], [[Apoptosis-Inducing Factor|AIF]], [[PARP1]], [[Apoptosis]], [[Necroptosis]], [[Ferroptosis]], [[Pyroptosis]], [[Autophagy]], [[Necrosis]].
- 建議建立的新實體註記：[[PAR]], [[MIF]], [[PARG]], [[Iduna]], [[Hexokinase-1]], [[PAANIB-1]], [[H1.2]].
- 應強化的重點連結：[[Parthanatos]] <-> [[PARP1]], [[Parthanatos]] <-> [[Apoptosis-Inducing Factor|AIF]], [[Parthanatos]] <-> [[MIF]], [[Parthanatos]] <-> [[NAD+]], [[Parthanatos]] <-> [[Apoptosis]]（性別差異支線）。
- 性別二態性增補（2026-09-03）：成年 MCAO、新生兒 HI 與 XY/XX 培養中的雄性 PARP/AIF vs 雌性 caspase 分歧（McCullough 2005；Yuan 2009；Hagberg 2004；Du 2004；Stroke 2011；Zhu 2006 注意事項）；無 MIF/PAAN 性別主張。
- 臨床轉譯增補（2026-09-13）：JPI-289（[[Amelparib]]）Ph2a NCT03062397 未分層；女性組候選（泛 caspase、ERβ 激動）尚無中風計畫；完整報告見 `task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026.md`。新增連結：[[Amelparib]]。
- 來源增補（2026-09-14）：新增 Moura et al. 2024 綜述——下游機制的未解問題（NAD+/糖解、游離[[ADP-ribose|ADP-核糖]]–[[TRPM2]] Ca2+、[[Nudix Hydrolases]]–AMP、AIF 依賴 vs 非依賴的 DNA 片段化）。新增連結：[[ADP-ribose]], [[Nudix Hydrolases]], [[TRPM2]]。文件：[[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers]].
