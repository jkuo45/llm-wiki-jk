---
title: 細胞凋亡與 DISC 生物標記供應鏈——感測器、偵測、可得性與定價
description: 對 CD95 DISC／c-FLIP／caspase-8 生物標記組合之商用偵測途徑的採購稽核：含型號、目錄價與來源網址的抗體與試劑盒、活細胞 caspase 報導器與生物感測平台、重組蛋白、基因工具與化學探針，以及交期、出貨與冷鏈限制、價格透明度、QC 文件與折扣結構。確立 caspase-8 活性為一有庫存的商用市場，而異構體可分辨的 c-FLIP 與 c-FLIP 對 DISC 的招募則無任何商用偵測途徑。
created: 2026-11-19
updated: 2026-11-19
type: task-output
tags:
  - task-output
  - cell-death
  - apoptosis
  - procurement
  - supply-chain
  - antibodies
  - assays
  - biosensors
source: 網路研究（2026-11-19），對象為供應商型錄頁面、經銷商與機構核心設施
---

# 細胞凋亡與 DISC 生物標記供應鏈——感測器、偵測、可得性與定價

## 本文件所處理的問題

關於 procaspase-8 : c-FLIP 比例的任務輸出（[[task_output_cflip_caspase8_disc_ratio_kinetics_19_Nov_2026]]）得出的結論是：決定 CD95 媒介之細胞命運者，為 DISC 的*局部*組成——c-FLIP 佔據 FADD DED 結合位點，相對於 procaspase-8 同二聚體，並具有鐘形的 p43-FLIP 反應，其配體閾值由 c-FLIP 豐度相對於活化受體數目而定。該論證中的每一個數值皆為模型化或由文獻導出之量，而其核心變數——*位於 DISC 上*的 cFLIP : procaspase-8 比例——迄今未在任何細胞中被測量。

本稽核提出的是前一層的問題：**在一間能購買試劑的實驗室中，它能被測量嗎？其價格與交期是否符合一般計畫案的規模？**

簡短的答案分為兩部分：

> [!important] caspase 訊號的偵測市場供應充足；DISC 本身的偵測市場並不存在。
> caspase-8 的*活性*至少有八條商用途徑，已公布價格介於每項試劑 $49 與 $1,225 之間。c-FLIP *對 DISC 的招募*、作為一個物種的 p43-FLIP、作為獨立異構體的 c-FLIP_R，以及 DISC 化學計量，**完全沒有任何商用偵測途徑**——沒有抗體、沒有試劑盒、沒有重組蛋白、沒有感測器。c-FLIP_L : c-FLIP_S 比例是部分例外：Abcam 有兩個異構體可分辨的 clone（ab314747、ab323748），Santa Cruz 另有一個（sc-136160），但三者**僅限 Western blot**，且皆未附已公布的敲除驗證。所有已發表的 DISC 組成測量皆依賴定量質譜（Schleich 2012; Dickens 2012）或重組絲狀體的結構生物學（Hughes 2016; Fu 2016; Yang 2024），也就是依賴核心設施的能力，而非型錄 SKU。

## 如何閱讀本稽核

**價格。** 所有價格均為以所示貨幣計的目錄價，觀察日期為 **2026 年 11 月 19 日**，觀察位置為所列的頁面網址。當供應商未公布價格時，該項記為*價格未公開 — 需詢價*；不推斷任何價格。列出包裝規格是因為 $351 的抗體（100 µl）與 $351 的試劑盒（100 assays）並非可比較的數量。

**三種偵測化學不可互換**，而供應商的行銷經常混淆它們：

| 化學 | 可偵測 | *不*可偵測 |
| --- | --- | --- |
| 螢光產生胜肽受質（IETD-AFC, DEVD-AMC, LEHD-AFC） | 切割合成胜肽的游離酵素活性 | 被切割的細胞蛋白；該複合體；該異構體 |
| 對切割產物的抗體（切割後 caspase-8 Asp374/Asp387、切割後 caspase-3 Asp175、切割後 PARP） | 裂解液、組織或細胞中的切割片段 | 切割是否以酵素方式發生，以及發生位置 |
| 完整細胞中的共價親和標籤（FAM/FITC-IETD-FMK、LEVD-FMK） | 添加當下存在的*活性*酵素量，屬不可逆陷獲 | 連續動力學（其為端點量測），以及 DISC 佔位 |

第一種化學內部還存在一個三階的特異性問題：常見的「caspase-8」受質並非 caspase-8 專一。Cayman 將 **Ac-VEID-AMC (14989) 列為 caspase-6 *與* -8**，並將 **Ac-IEPD-pNA (27139) 列為 caspase-8 *與* granzyme B**；Enzo 的 **Ac-IETD-AMC (ALX-260-042)** 則是 caspase-8/10/6 + granzyme B 的受質。任何以胜肽讀值宣稱「caspase-8 活性」的論文，測得的是含 caspase-8 的活性，而非 caspase-8。

**證據層級。** 本知識庫的科學 tier 4 = 體外或細胞測量，tier 5 = 建模或假說；本文件中的每一項試劑宣稱皆屬 tier 4（型錄或供應商文件所載的事實）或 tier 5（關於實驗室所能測量之物的推估）。下文使用的 Tier 1–3 標籤是**採購類別**，而非證據層級。

**關於型錄異動的說明。** Novus Biologicals 現已轉址至 R&D Systems（Bio-Techne），因此小眾細胞凋亡抗體的第二條報價途徑已因整併而消失。

## 採購層級

### Tier 1 — 有庫存、有定價、今日可購買

| 需求 | 途徑 | 成本 | 交期 |
| --- | --- | --- | --- |
| 總 c-FLIP（WB） | CST FLIP (D5J1E) mAb #56343 | $161 / 20 µl; $351 / 100 µl | 次日（CST：「next-day delivery on 99% of CST products for orders received by 7:30 PM EST」） |
| c-FLIP_L 異構體專一（WB） | Abcam FLIP-L [EPR27008-110] #ab314747，重組 mAb | $220 / 20 µl; $640 / 100 µl | 標準；human |
| c-FLIP_S 異構體專一（WB） | Abcam FLIP-S short isoform [EPR29011-104] #ab323748，重組 mAb | $257 / 20 µl; $640 / 100 µl | 標準；human |
| 切割後 caspase-8（WB） | CST #9496 (Asp374, 18C8) 或 #8592 (Asp387, D5B2) | 依 CST 尺寸表 | 次日 |
| caspase-8 活性（盤式，裂解液）— 每次測定最便宜 | Cayman Ac-IETD-AFC #17480 | $49 / 1 mg; $213 / 5 mg（於 0.5 µM 下可做數千次測定） | 有庫存者 1–3 個工作天 |
| caspase-8 活性（活細胞） | Vybrant FLICA Caspase 8 #V35119 (FAM-LETD-FMK) | $350 / 25 assays | 標準 |
| caspase-8 活性（活細胞，真正 IETD） | Calbiochem Caspase-8 Detection Kit #QIA1131KIT (FITC-IETD-FMK) | $1,225 (Fisher CA) / £724 excl. VAT (UK) | 英國列表標示「being discontinued, order up to available stock」 |
| 細胞凋亡（流式） | CST Annexin V-PE Early Apoptosis Detection Kit #40295 | $570 / 100 assays | 次日 |
| caspase-3/7 即時（盤式） | Promega Caspase-Glo 3/7 #G8091 (100 assays) | €528（Promega 義大利目錄價；Promega 未於自身網站公布價格） | 標準 |
| caspase-8 活性，最便宜的試劑盒 | Beyotime C1151 / C1152（比色法, Ac-LEVD-pNA） | $94 / 20 tests; $325 / 100 tests | 全球型錄，無區域限定 |
| caspase-3/7 即時（流式） | Thermo CellEvent Caspase-3/7 #C10427 | $552 / 100 assays | 標準 |
| caspase-3/7 FRET/FLIM 生物感測器 | Evrogen Casper3-GR #FP971 | €400 | RUO；「not available in certain countries」 |

### Tier 2 — 可得但受限、有門檻，或受化學限制

| 需求 | 途徑 | 限制 |
| --- | --- | --- |
| caspase-8 活性，比色法 | RayBiotech #MACO-CASP8-1 $349; APExBIO #K2012 $179 (25 tests); MyBioSource #MBS9718958 $205 (20 tests) | 受質交叉反應（見上） |
| caspase-8 活性，3/7+8+9 多重 | AAT Bioquest #22820 | $594 / 100 tests；單一孔內三個螢光通道 |
| caspase-8 活細胞親和標籤 | Bio-Rad ICT099 $321; FAM-FLICA (ICT) F0015 $354 / 25, $1,020 / 100; AAT Cell Meter #20115 $355 | Bio-Rad SKU 標示 *NotForSaleInCountries: KR*；共價、僅端點 |
| caspase-8 基因擾動 | Horizon HAP1 CFLAR KO (2 clones); Ubigene CASP8 KO「starting at $1,490」(promo $990); EditCo CASP8/FAS KO 僅報價 | Horizon 每條單基因 HAP1 KO 品系約 $3,000 |
| c-FLIP 敲低 | Thermo Silencer siRNA CFLAR #AM16708 $233; OriGene shRNA $1,013/kit; Santa Cruz Cas9 plasmid #sc-400147 $397 | 病毒／CRISPR 交付格式需 2–5 週 |
| c-FLIP 過度表現 | Addgene pLJM1 flag-cFLIP #211529 $94（學術價）; Ad-FLIP 腺病毒 (Vector BioLabs #1525) $475 | 非異構體專一；Addgene 僅供學術／非營利使用 |
| caspase-8/c-FLIP_L 異二聚體探針 | ProbeChem FLIPinB #PC-23804; FLIPinBγ #PC-23805; Ambinter Amb1202053 / Amb37832612（原始供應商） | 各尺寸均僅能報價；MedChemExpress、Selleck、Cayman 或 Tocris **均未**列出 |
| caspase-8 FRET/FLIM 報導器 | **無商用產品** | 僅能訂製克隆（學術先例：Porubský et al. 2022） |
| 經典 caspase 活性試劑盒（品類收縮） | Biotium #30008, #30011, #30012; Thermo/Invitrogen C12440, C12441, B21240, A13279, F21970, 13031, 13221, K117, A13148, B8884 | Biotium 的頁面顯示為已停產且價格 $0；Thermofisher.com 回傳 `SKU_NOT_FOUND`。兩者皆須重新尋源，而非重新下單 |
| caspase-8 / -9 活性試劑盒 | Cayman 僅出貨受質 (Ac-IETD-AFC #17480, Ac-LEHD-pNA #24570) | Cayman 無試劑盒；須以受質搭配自訂 protocol 自行組裝 |
| 多重死亡 panel | MSD U-PLEX（僅 Caspase-1、Caspase-3、PARP）；RayBiotech arrays (cytokine/proteome/MAPK)；Olink PEA（無價格） | 無任何可取得的 panel 涵蓋 caspase-3/8/9 切割型 + PARP + RIPK1/3/pMLKL |

### Tier 3 — 無商用途徑；須靠核心設施或訂製

| 需求 | 缺席的原因 | 最接近的途徑 |
| --- | --- | --- |
| c-FLIP_R 異構體專一抗體 | 在所查核的任何供應商皆未找到產品；只有 c-FLIP_L (Abcam #ab314747) 與 c-FLIP_S (Abcam #ab323748) 具有異構體可分辨的 clone | 異構體可分辨的質譜（Schleich 2016：在 DED 鏈中 c-FLIP 與 procaspase-10 比 procaspase-8 低約 10 倍） |
| Western blot 以外任何應用中的異構體分辨 | 這兩個 Abcam 異構體 clone 與 SCBT sc-136160 僅以 WB 驗證；其 IF、流式、IHC 或 ELISA 驗證均未公布，且三個頁面皆未宣稱敲除驗證 | 客製偶聯，或在內部完成這些 clone 的驗證 |
| Phospho-RIPK3 (Ser358) 與 phospho-MLKL (Ser16) | 這兩個位點在抗體所使用的人類編號中都不存在（RIPK3 Ser358 為小鼠等效位點；MLKL Ser16 根本不是 MLKL 的位點） | 改買人類等效產品：RIPK3 Ser227 (CST #93654, Abcam #ab209384)；MLKL Thr357/Ser358 (CST #91689, Abcam #ab187091) |
| 作為一個物種的細胞色素 c「釋出」 | 所有供應商僅銷售總細胞色素 c；SCBT A-8 (#sc-13156) 同時辨識 holo- **與** apo 細胞色素 c，故無法由其讀出釋出 | 分級加上總蛋白對照，或 APExBIO K2104（唯一找到的釋出偵測試劑盒） |
| 作為一個物種的 p43-FLIP | 沒有 p43-FLIP 專一抗體是型錄產品；CST #56343 僅將「subunit p43」列為別名，並報導 MW 55/25 kDa，而非 43 kDa 物種 | 對 Asp376 切割之 c-FLIP_L 製作客製抗體 + 自行驗證 |
| 參考論文實際使用的抗體 | c-FLIP clone NF6、caspase-8 clone C15 與 FADD clone 1C4 為 DKFZ 內製 clone，須透過合作取得（Krammer 實驗室），並非型錄 SKU；NF6 正是可分辨 p43-FLIP 條帶者 | 以合作取得，或以型錄 clone 加上自行驗證重現 DISC panel |
| c-FLIP 招募／DISC 佔位 | 無任何感測器、試劑盒或結合分子可回報佔位 | 重組 DED 絲狀體的結構生物學（Hughes 2016; Yang 2024）或 proximity labelling + MS |
| 異構體純且具功能驗證的重組 c-FLIP | 所有型錄中的「FLIP」蛋白皆為全長 (L) 且未經功能驗證、已變性，或籠統標為「transcript variant 3」 | 自行表現：Salvesen ΔDED FLIP-L (Addgene #13790) 與抗切割的 ΔDED FLIP-L D375A (#13791)，或委託 CDMO |
| 作為獨立蛋白的 caspase-8 前驅物域 | 未銷售 | 自行製備，或使用 Salvesen 質體 |
| caspase-8 電化學／FET 生物感測器 | 所有已發表的裝置皆為學術設計 | 學術文獻（ACS Omega 2025, 10:34106–34122） |
| 切割後 caspase-8 / -9 夾心 ELISA | 範圍內無供應商銷售；RayBiotech 的「Caspase-8 ELISA」(ELH-CASP8-1) 為總蛋白 | 抗體 Western (Beyotime AG1330 / AG1334) |
| DISC 組裝或死亡受體訊號試劑盒 | 在所接觸的任何供應商皆未找到 | 免疫沉澱 DISC 後再行免疫印跡 |
| APExBIO K2104 以外的商用細胞色素-c 釋放試劑盒 | 其他所有供應商僅銷售細胞色素-c 抗體 | APExBIO K2104, $1,095 |

## 抗體

### 依標的、供應商、型號與價格排列的抗體

*(型錄層級的概覽；價格透明度的注意事項見可得性一節)*

| 標的 | 供應商 | 型號 | Clone／宿主／偶聯 | 已驗證的應用 | 目錄價 (USD) | 來源網址（2026 年 11 月 19 日） |
| --- | --- | --- | --- | --- | --- | --- |
| 總 c-FLIP（所有異構體） | Cell Signaling Technology | 56343 (20 µl 56343T / 100 µl 56343S) | FLIP (D5J1E) Rabbit mAb，重組 | WB, IP; H/M/R；「recognizes both the long and short isoforms of FLIP」 | $161 / $351 | cellsignal.com/products/56343 |
| 總 c-FLIP，無載體 | Cell Signaling Technology | 96297 | FLIP (D5J1E) Rabbit mAb (BSA/azide free) | WB | 依 CST 尺寸表 | cellsignal.com/products/96297 |
| c-FLIP（偶聯, IF） | Proteintech | CL488-10394 | CoraLite Plus 488 CFLAR/FLIP Polyclonal (RRID AB_3672439; immunogen aa 31–184) | IF/ICC；KD/KO 已驗證標章；H/M | 頁面未公布價格（僅批量報價） | ptglab.com/products/CFLAR-FLIP-Antibody-CL488-10394.htm |
| 切割後 caspase-8（Asp374） | Cell Signaling Technology | 9496 | 18C8 Rabbit mAb | WB; H | 依 CST 尺寸表 | cellsignal.com/products/9496 |
| 切割後 caspase-8（Asp387） | Cell Signaling Technology | 8592 (14071 PE conjugate) | D5B2 Rabbit mAb | WB; IF; flow (14071) | 依 CST 尺寸表 | cellsignal.com/products/8592 |
| 切割後 caspase-3（Asp175） | Cell Signaling Technology | 9664 (14070 conjugate) | 5A1E Rabbit mAb | WB, IP, IHC, IF, flow | $274 / 100 µl（Labome 列表；CST 目錄價依尺寸表） | labome.com/product/Cell-Signaling-Technology/9664S.html |
| **c-FLIP_L 異構體專一** | Abcam | ab314747 | FLIP-L [EPR27008-110] Rabbit recombinant mAb | WB (human) | $220 (20 µl); $640 (100 µl) | abcam.com/en-us/products/primary-antibodies/flip-l-antibody-epr27008-110-ab314747 |
| **c-FLIP_S 異構體專一** | Abcam | ab323748 | FLIP-S short isoform [EPR29011-104] Rabbit recombinant mAb | WB (human) | $257 (20 µl); $640 (100 µl) | abcam.com/en-us/products/primary-antibodies/flips-short-isoform-antibody-epr29011-104-ab323748 |
| c-FLIP_L（標示為異構體專一） | Santa Cruz | sc-136160 | FLIP-L (5D8) Mouse mAb, 50 µg/0.5 ml | WB, IP, ELISA | $322 | scbt.com/p/flipl-antibody-5d8 |
| c-FLIP 總量 | Proteintech | 10394-1-AP | Rabbit polyclonal (RRID AB_2081087) | WB, IHC, IF/ICC, IP, ELISA；KD/KO 標章 | $149 (20 µl); $449 (150 µl) | ptglab.com/products/CFLAR-FLIP-Antibody-10394-1-AP.htm |
| procaspase-8 | Abcam | ab108333 | [EPR162] Rabbit recombinant mAb | WB, IHC-P | $225 起 | abcam.com/en-us/products/primary-antibodies/pro-caspase-8-antibody-epr162-ab108333 |
| procaspase-8 | Cell Signaling Technology | 4790 / 8873 / 9746 | D35G2 / F5K9P / 1C12 | WB; WB, WB-simple, IHC; WB | $151 / $161 / $147 (20 µl) | cellsignal.com/products/4790 |
| 切割後 caspase-8（Asp387），小鼠 | Cell Signaling Technology | 8592 | D5B2 Rabbit mAb | WB, IF, F | $179 (20 µl); $446 (100 µl) | cellsignal.com/products/8592 |
| 切割後 caspase-8（Asp387），p10 次單元 | Cell Signaling Technology | 16709 | E8K5S Rabbit mAb | WB, IP | $194 (20 µl) | cellsignal.com/products/16709 |
| Caspase-8 p43/p18 | Proteintech | 66093-1-Ig | Mouse recombinant mAb | WB, IHC, IF/ICC, IP, CoIP, ELISA | $149 (20 µl); $449 (150 µl) | ptglab.com/products/Caspase-8-p43-p18-Antibody-66093-1-Ig.htm |
| 切割後 caspase-3（Asp175） | Cell Signaling Technology | 9664 / 9661 | 5A1E mAb / polyclonal | WB, IP, IHC-P, IF/ICC, F | $169 / $148 (20 µl) | cellsignal.com/products/9664 |
| 切割後 caspase-3（Asp175），已敲除驗證 | Abcam | ab32042 | [E83-77] Rabbit mAb | WB, IF | $230 起 (20 µl); $675 (100 µl) | abcam.com/en-us/products/primary-antibodies/cleaved-caspase-3-antibody-e83-77-ab32042 |
| 切割後 PARP1（Asp214） | Cell Signaling Technology | 9541 / 5625 | polyclonal / D64E10 mAb | WB; WB, IF/ICC, F | $148 / $186 (20 µl) | cellsignal.com/products/9541 |
| 切割後 PARP1（Asp214），已敲除驗證 | Abcam | ab32064 | [E51] Rabbit mAb | WB, IHC | $140 起 | abcam.com/en-us/products/primary-antibodies/cleaved-parp1-antibody-e51-ab32064 |
| RIPK1 | Cell Signaling Technology | 3493 / 73271 | D94C12 / E8S7U | WB, IF/ICC, F; WB, IP, IHC, IF | $161 / $204 (20 µl) | cellsignal.com/products/3493 |
| Phospho-RIPK1 (Ser166)，人類 | Cell Signaling Technology | 65746 / 44590 | D1L3S / D8I3A | WB; WB, IF/ICC, F | $223 / $178 (20 µl) | cellsignal.com/products/65746 |
| RIPK3 | Cell Signaling Technology | 10188 / 13526 | E7A7F / E1Z1D | WB, IP, IHC, IF, F; WB | $187 / $161 (20 µl) | cellsignal.com/products/10188 |
| Phospho-RIPK3 (Ser227)，人類 | Cell Signaling Technology | 93654 | D6W2T Rabbit mAb | WB, IF | $197 (20 µl); $417 (100 µl) | cellsignal.com/products/93654 |
| Phospho-MLKL (Ser358)，人類 | Cell Signaling Technology | 91689 | D6H3V Rabbit mAb | WB | $197 (20 µl); $415 (100 µl) | cellsignal.com/products/91689 |
| Phospho-MLKL (Ser345)，小鼠 | Cell Signaling Technology | 37333 | D6E3G Rabbit mAb | WB, IF/ICC | $197 (20 µl); $415 (100l) | cellsignal.com/products/37333 |
| BID（總量 + 15 kDa 切割型） | Cell Signaling Technology | 2002 | Rabbit polyclonal | WB | $136 (20 µl) | cellsignal.com/products/2002 |
| tBid 導向 | Abcam | ab10640 | Rabbit polyclonal (BID cleavage site) | WB, ICC/IF | $535 起 | abcam.com/en-us/products/primary-antibodies/bid-cleavage-site-antibody-ab10640 |
| AIF | Cell Signaling Technology | 4642 / 5318 | polyclonal / D39D2 | WB, IF; WB, IP, IHC, IF/ICC | $368 (100 µl) / $159 (20 µl) | cellsignal.com/products/5318 |
| FADD | Cell Signaling Technology | 2782 | Rabbit polyclonal | WB | $135 (20 µl) | cellsignal.com/products/2782 |
| ASC/TMS1 | Cell Signaling Technology | 13833 | E1E3I Rabbit mAb | WB, IP, IHC | $161 (20 µl) | cellsignal.com/products/13833 |
| XIAP | Cell Signaling Technology | 14334 | D2Z8W Rabbit mAb | WB, IP, IHC | $167 (20 µl) | cellsignal.com/products/14334 |
| c-IAP1 | Cell Signaling Technology | 96099 | F7C3U Rabbit mAb——唯一有記載不與 c-IAP2 交叉反應的 c-IAP1 產品 | WB, IP, F | $161 (20 µl) | cellsignal.com/products/96099 |
| c-IAP2 | Proteintech | 24304-1-AP | Rabbit polyclonal (RRID AB_2879485) | WB, IHC, IF/ICC, IP, ELISA | $149 (20 µl); $449 (150 µl) | ptglab.com/products/BIRC3-Antibody-24304-1-AP.htm |
| 切割後 caspase-8（Asp384） | GeneTex | GTX86893 | Rabbit mAb (RRID AB_10722501) | WB, IHC-P | $419 (100 µg) | genetex.com/Product/Detail/Caspase-8-cleaved-Asp384-antibody/GTX86893 |
| Caspase-8 總量 | Enzo | ADI-90576 | 5F7 Mouse mAb | WB | $439 | enzo.com/product/caspase-8-monoclonal-antibody-5f7/ |

**異構體分辨——部分可得。** 這是本型錄優於本稽核先前草稿所稱的唯一之處。存在兩個異構體可分辨的 clone：Abcam **ab314747**（FLIP-L, [EPR27008-110]）與 **ab323748**（FLIP-S short isoform, [EPR29011-104]），兩者皆為兔子重組單株抗體，兩者在人類皆**僅以 Western blot 驗證**，20 µl 價格分別為 $220 與 $257。Santa Cruz **sc-136160**（5D8, FLIP-L）雖標示為異構體專一，但其表位（aa 1–376）橫跨兩種異構體；Santa Cruz 自身的客服答覆承認該 blot 僅顯示 55 kDa 的長型，因此其專一性是經驗性而非基於表位。CST 整個 CFLAR 型錄仍只有兩個總 FLIP SKU（56343、96297；另有 8510 與已停產的多株抗體 3210），產品頁面上**沒有任何敲除宣稱**。在所查核的任何供應商皆未找到 c-FLIP_R 專一抗體，而 CST 的 `productsitemap.xml` 只以 tdp43／gap43 的形式出現「p43」——不存在 p43-FLIP 產品。

### 應納入採購檔案的驗證注意事項

「已驗證」不等於「已敲除驗證」。明確的 KO／KD 標記由 Abcam ab32042（切割後 caspase-3）、ab32064（切割後 PARP）、ab110315、ab191217 (PARP1)、ab125072 (RIPK1) 以及 Proteintech 各產品線所帶；CST 會驗證應用與反應性，但一般不公布敲除證據。對此 panel 而言重要的供應商特定注意事項如下：

- CST #8510 (D16A8) 會偵測到一條 ~70 kDa 的未知條帶；#4790 (D35G2) 可能與過度表現的 caspase-10 交叉反應；#14993 (MLKL) 與一個未辨識的 130 kDa 蛋白交叉反應；#9661 會偵測到非專一的 caspase 受質；#9496 會偵測到一條未知的 25 kDa 條帶；#8762 (BID 3C5) **不**辨識內源性 tBid。
- Abcam ab316923 (phospho-RIPK1 Ser166) 會與轉染裂解液及合成磷酸化胜肽反應；頁面上並未展示內源性專一性。
- 引用數偏低的 clone：Abcam ab2236 (ASC)、ab227194 (FLIP)、ab226297 (RIPK3)、ab62469 (BID) 的引用次數介於 1–9 次之間。

### 用於議價的價格基準

| 供應商 | 20 µl／小量 | 100 µl | 300 µl／大量 |
| --- | --- | --- | --- |
| Cell Signaling Technology | $135–$186 | $314–$482 | $761–$1,043 (300 µl)；無載體 #96297 為 $865 / 100 µl |
| Proteintech | $149 (20 µl) | $449 (150 µl) | $3,592 (10 × 150 µl)；僅 PBS 格式 $699 / 100 µg |
| Abcam | $140–$670「starts from」 | $530–$675 (buy box) | 以 µg 為單位的格式 |
| Santa Cruz | $322 單一價 (200 µg/ml) | — | 偶聯產品 $336–$424 |
| GeneTex | — | $419 / 100 µg | — |

CST 與 Santa Cruz 銷售以體積（µl）計算的格式，而 Abcam 與 Proteintech 銷售以質量（µg）計算的格式，因此在未標明濃度的前提下，單位價格無法直接比較。所稽核的任何供應商皆未公布常設的量級價目表；上述數字皆為單一數量的目錄價。

### 本領域自身論文所使用的抗體

主要 DISC 論文的方法段落會指明實際產生圖像的試劑，而其中相當一部分**並非型錄產品**：

| 標的 | 文獻所使用的試劑 | 商用途徑 |
| --- | --- | --- |
| c-FLIP | Clone NF6 (DKFZ, Krammer lab)——亦為可分辨 p43-FLIP 條帶的抗體 | **僅能贈與／合作取得**；型錄上的等效品為總 FLIP，且未列出 43 kDa 物種 |
| procaspase-8 | Clone C15 (DKFZ) | 合作取得；CST 4790 / 9746 為型錄替代品 |
| FADD | Clone 1C4 (DKFZ) | 合作取得；CST 6002 為型錄替代品 |
| 切割後 caspase-8 | 18C8, CST #9496 (Asp374) | 型錄 |
| 切割後 caspase-3 | 5A1E, CST #9664 / 9661 (Asp175) | 型錄 |
| CD95 | sc-715 (C-20), Santa Cruz | 型錄 |
| pMLKL | ab187091, Abcam; CST #14933 | 型錄 |
| RIPK3 | ab226297, Abcam; phospho-RIPK3 Ser227 CST #93654 | 型錄 |
| caspase-10 | M059-3, MBL International | 型錄 |
| Bid、XIAP、PARP、RIPK1 | CST #2002, #14334, #9542, #3493 | 型錄 |

其實務後果是，已發表 DISC 圖像背後的試劑有一部分無法取得，因此即使從相同的 protocol 出發，重現嘗試也不會從相同的試劑組合開始。

## 試劑盒與活性試劑

### Caspase 活性試劑盒 — 化學 A（合成胜肽）

| 產品 | 供應商 | 型號 | 格式 | 包裝 | 價格 (USD) | 來源網址（2026 年 11 月 19 日） |
| --- | --- | --- | --- | --- | --- | --- |
| Caspase 8 Activity Assay Kit（比色法, **Ac-LEVD-pNA**） | Beyotime | C1151 / C1152 | 比色法 405 nm | 20T / 100T | $94.06 / $325.46 | beyotime.com/product/C1151.htm |
| Fluorometric Caspase 8 Activity Assay Kit | Beyotime | C1155S / C1155M | 螢光法 | 20T / 100T | $109.08 / $357.30 | beyotime.com |
| Caspase-8 Activity Assay Kit（比色法） | Elabscience | E-CK-A388 | 比色法 | 20 / 100 assays | $68 / $228 | elabscience.com/p/caspase-8-activity-assay-kit-colorimetric-method--e-ck-a388 |
| Caspase-8 Colorimetric Assay Kit | APExBIO | K2013 | 比色法，IETD 類 | 25 / 100 assays | $179 / $403 | apexbt.com/caspase-8-colorimetric-assay-kit.html |
| Caspase-8 Fluorometric Assay Kit | APExBIO | K2012 | 螢光法 IETD-AFC | 25 / 100 / 200 / 400 | $179 / $403 / $615 / $986 | apexbt.com/caspase-8-fluorometric-assay-kit.html |
| Caspase-8 Activity Assay Kit（比色法） | RayBiotech | MACO-CASP8-1 | IETD-pNA，裂解液 | — | $349 | raybiotech.com/caspase-8-activity-assay-kit-ma-casp8 |
| Caspase-8 Activity Assay Kit（比色法） | MyBioSource | MBS9718958 | Ac-IETD-pNA | 20 / 50 / 100 | $205 / $235 / $305 | mybiosource.com/assay-kits/caspase-8/9718958 |
| Caspase-8 Activity Assay Kit | Tribioscience | TBS2037F-1 | 螢光法（頁面文字寫 DEVD-AFC — **文件錯誤**） | 100 tests | $360 | tribioscience.com |
| AffiASSAY Caspase-8 Fluorometric Kit | AffiGEN | AFG-BV-0177 | IETD-AFC | 100 assays | $525 | affiassay.com |
| Caspase-8,10 Activity Fluorometric Kit | UBP Bio | J7110 | IETD-AFC + DEVD-AFC + Z-VAD-FMK + TRAIL 裂解對照 | 250 assays | $430 | ubpbio.com |
| Caspase 3/7 Cell-Based Activity Assay Kit | Cayman | 702790 | 螢光法 DEVD-AFC；−80 °C, ECCN 0 | 96 孔盤 | $385 (€492) | caymanchem.com（取代舊版 10009135） |
| Caspase-3/7 Activity Assay Kit | Beyotime | C1115 / C1116 | 比色法 | 20T / 100T | $86.55 / $301.29 | beyotime.com |
| Caspase-9 Activity Assay Kit | Beyotime | C1157 / C1158 | 比色法 LEHD-pNA | 20T / 100T | $96.51 / $327.42 | beyotime.com/product/C1157.htm |
| Caspase 3/7 Activity Assay Kit | Elabscience | E-CK-A383 | 比色法 DEVD-pNA | 20 / 100 | $68 / $228 | elabscience.com |
| Caspase-3 Activity Assay | Enzo | AKR-MA-0191 | 比色法 | 25 wells / 96-well | $155 / $439 | enzo.com/product/caspase-3-activity-assay/ |
| Caspase-3 Colorimetric Assay Kit | APExBIO | K2008 | 比色法 | 25 / 100 | $179 / $403 | apexbt.com/caspase-3-colorimetric-assay-kit.html |
| Caspase-Glo 3/7 Assay System | Promega | G8090 (25 assays) / G8091 (100) / G8092 (1,000) | 發光法，DEVD-amidino-luciferin | — | G8091 於 Promega 義大利目錄價表中為 €528；**promega.com 未公布價格** | promega.com/products/cell-health-assays/apoptosis-assays/caspase_glo-3_7-assay-systems/ |
| Caspase-Glo 8 Assay | Promega | G8202 (100 mL) | 發光法 | — | 價格未公開 — 需詢價 | promega.com（型錄頁面經 cell-notes PDF 取得） |

**此品類中的三項型錄收縮**（每一項皆於 2026 年 11 月 19 日查證）：

- **Biotium 已撤回其 caspase 受質試劑盒。** #30008 (caspase-3 DEVD-R110)、#30011 (caspase-8 IETD-R110) 與 #30012 (caspase-8 HTS) 皆顯示為「discontinued」、價格 $0、無庫存。其 NucView 活細胞 caspase-3 系列（#30029，自 $118 起）與 Annexin／JC-1 系列仍在。
- **Thermo Fisher／Invitrogen 的經典 caspase 試劑盒已下架。** C12440、C12441、B21240、A13279、F21970、13031、13221、K117、A13148 與 B8884 在 thermofisher.com 自身的產品 JSON 中皆回傳 `SKU_NOT_FOUND`。不應從較舊的論文引用其價格。
- **Cayman 以試劑盒形式銷售 caspase-3/7 (702790)，但 caspase-8 與 caspase-9 僅有受質** — Ac-IETD-AFC #17480、Ac-IETD-pNA #24568、Ac-LEHD-pNA #24570、Ac-LETD-AFC #14991、Ac-VEID-AMC #14989。

### 細胞內報導器 — 化學 C（完整細胞中的活性）

| 產品 | 供應商 | 型號 | 化學 | 包裝 | 價格 (USD) | 來源網址 |
| --- | --- | --- | --- | --- | --- | --- |
| Vybrant FLICA Caspase 8 Kit | Thermo Fisher | V35119 | FAM-LETD-FMK 共價親和標籤 | 25 assays | $350 | thermofisher.com/order/catalog/product/V35119 |
| Calbiochem Caspase-8 Detection Kit | MilliporeSigma | QIA1131KIT | FITC-IETD-FMK；含 Z-VAD-FMK 競爭物 | — | $1,225 (Fisher CA); £724 excl. VAT (UK, "being discontinued") | fishersci.ca/shop/products/calbiochem-caspase-8-detection-kit-fitc-ietd-fmk/QIA1131KIT |
| FAM-FLICA Caspase 8 Assay Kit | ICT | F0015 | FAM-LETD-FMK | 25 / 100 tests | $354 / $1,020 | lktlabs.com/product/fam-flica-caspase-8-assay-kit |
| FAM FLICA Caspase-8 Kit | Bio-Rad (ICT) | ICT099 | FAM-LETD-FMK | 25 tests | $321 | labome.com/product/Bio-Rad/ICT099.html |
| Cell Meter Live Cell Caspase 8 Binding Kit | AAT Bioquest | 20115 / 20116 | FAM-LETD-FMK / iFluor647-LETD-FMK | 25 tests | $355（綠色） | vareum.com |
| Cell Meter Caspase 8 Activity Kit (Red/Green/Blue) | AAT Bioquest | 22816 / 22798 / 22812 | Ac-IETD-ProRed / (Ac-IETD)₂-R110 | 100 / 200 tests | $237 / $237（紅色、綠色） | vareum.com |
| Cell Meter Multiplexing Caspase 3/7, 8, 9 Kit | AAT Bioquest | 22820 | DEVD-ProRed + IETD-R110 + LEHD-AMC，單一孔 | 100 tests | $594 | vareum.com |
| Caspase-8 Activity Detection Substrate for Flow | Elabscience | E-CK-A488 | 細胞內流式 | 20 / 100 assays | $210 / $480 | elabscience.com |
| FLICA Caspase-8 Assay Kit | ICT | #99 / #910 | FAM-LETD-FMK | 25T / 100T | $246.30 / $647.45 | immunochemistry.com/products/fam-flica-caspase-8-assay-kit-99 |
| CellEvent Caspase-3/7 Green Flow Kit | Thermo Fisher | C10427 / C10740 | DEVD-dye，無須清洗 | 100 / 20 assays | $552 / $158 | thermofisher.com/order/catalog/product/C10427 |
| Magic Red caspase-3/7 | Bio-Rad (ICT) | 936 / 935 | MR-(DEVD)₂，無細胞毒性 | 100 / 25 tests | $572.95 / $210.20 | antibodiesinc.com |
| Muse Caspase-3/7 Kit | Cytek | MCH100108 | 無須清洗，混合即讀 | 100 tests | $679 | cytekbio.com/products/muse-caspase-37-kit |
| GreenNuc caspase-3 (live cell) | Beyotime | C1168S / C1168M | 細胞內螢光產生 DEVD | 20–40T / 100–200T | $72.02 / $280.06 | beyotime.com |
| NucView 488 caspase-3 (live cell) | Biotium | 30029 | 細胞內螢光產生 | 25 / 100 assays | 自 $118 起 | biotium.com/product/nucviewtm-488-caspase-3-assay-kit-for-live-cells/ |
| Casper3-GR FRET/FLIM sensor | Evrogen | FP971 | TagGFP–DEVD–TagRFP；FLIM 1.5→2.5 ns | 20 µg | €400 | evrogen.com/products/Casper3-GR/Casper3-GR.shtml |

### 切割蛋白偵測（化學 B）與細胞凋亡／存活試劑盒

| 產品 | 供應商 | 型號 | 可偵測 | 包裝 | 價格 (USD) | 來源網址 |
| --- | --- | --- | --- | --- | --- | --- |
| Cleaved-Caspase-3 (D175) ELISA Kit | RayBiotech | PTE-CASP3-D175-1 | 切割後 caspase-3 蛋白 | 1 plate | $521 | raybiotech.com/cleaved-caspase-3-d175-elisa-kit-pte-casp3-d175 |
| Cleaved caspase-3 + total caspase-3 ratio ELISA | RayBiotech | PTE-CASP3-D175-T | 切割型對總量之比 | 1 / 2 / 5 plates | 頁面標價 | raybiotech.com |
| "Human Caspase-3 ELISA Kit" | RayBiotech | ELH-CASP3-1 | **總** caspase-3（非切割型專一） | 1 / 2 / 5 plates | $499 | raybiotech.com |
| "Human Caspase-8 ELISA Kit" | RayBiotech | ELH-CASP8-1 | **總** caspase-8 | 1 / 2 / 5 plates | $519 | raybiotech.com |
| Cleaved Caspase-8 / -9 antibodies | Beyotime; Elabscience | AG1330 / AG1334; AN302522L / AN302526L | 切割後 caspase-8 / -9 | 50 µl | 每支抗體 $115–163 | beyotime.com; elabscience.com |
| Cleaved PARP-1 (Asp214) mAb; p85 mAb | Beyotime | AG1043; AG1050 | 切割後 PARP-1 | 50 µl | 每支 $162.97 | beyotime.com |
| Cleaved Caspase-3 mAb | Beyotime | AC033 | 切割後 caspase-3 | 50 µl | $165.42 | beyotime.com |
| Annexin V FITC / APC / PE Assay Kits | Cayman | 600300 / 601410 / 601420 | PS 外翻 | 100 tests | $359 / $447 / $447 | caymanchem.com |
| Early Apoptosis Detection Kit (Annexin V + TMRE + DAPI + TO-PRO-3) | Cayman | 601360 | PS + ΔΨm + 通透性，四參數 | 100 samples | $659 | caymanchem.com |
| Multi-Parameter Apoptosis Kit | Cayman | 601280 | PS + ΔΨm + 壞死 | 100 samples | $468 | caymanchem.com |
| Annexin V-FITC/PI Apoptosis Kit | Elabscience | E-CK-A211 | PS + PI | 20 / 50 / 100 / 200 | $65 / $135 / $210 / $350 | elabscience.com |
| Annexin V-FITC/PI Apoptosis Kit | APExBIO | K2003 | PS + PI | 20 / 50 / 100 | $70 / $140 / $220 | apexbt.com |
| Annexin V-FITC Apoptosis Detection Kit | Abcam | ab14085 | PS | — | $765 ("Starts from $755"); abcam.cn ¥9,022 | abcam.com/en-us/products/ab14085 |
| TUNEL In Situ Kit (HRP-DAB / green FITC) | Elabscience | E-CK-A331 / A320 | DNA 片段化 | 20 / 50 / 100 | $280 / $198 (20T) | elabscience.com |
| TUNEL Apoptosis Detection Kit (DAB) | APExBIO | K2271 | DNA 片段化 | 20 / 50 rxns | $210 / $420 | apexbt.com |
| One-step TUNEL / BeyoClick EdUTP kits | Beyotime | C1086 / C1088 / C1170 series | DNA 片段化 | 20T–100T | $240–$914 | beyotime.com |
| LDH Cytotoxicity Assay Kit | Beyotime | C0016 / C0017 | LDH 釋放 | 100T / 500T | $36.42 / $100.76 | beyotime.com |
| LDH Cytotoxicity Assay Kit | Cayman | 601170 | LDH 釋放 | 96 / 480 wells | $219 / $548 | caymanchem.com |
| JC-1 MitoMP Detection Kit | APExBIO | K2002 | ΔΨm | 100 tests | $113 | apexbt.com |
| JC-1 MitoMP Flow Assay Kit | Cayman | 701560 | ΔΨm（紅:綠） | 500 tests | $381 | caymanchem.com |
| TMRE MitoMP Assay Kit | Cayman | 701310 | ΔΨm | 500 wells | $373 | caymanchem.com |
| **Cytochrome c Apoptosis Assay Kit** | APExBIO | K2104 | **釋出**的細胞色素 c | 200 µg | $1,095 — 唯一找到的此類試劑盒 | apexbt.com/cytochrome-c-apoptosis-assay-kit.html |
| Mitochondrial PT Pore Assay Kit | Cayman | 601430 | MPTP 開啟 | 100 tests | $536 | caymanchem.com |
| MTT / CCK-8 metabolic viability | Beyotime; Dojindo | C0009S/M; CK04 | 代謝存活 | 500T / 100T | $41.31 / $59 | beyotime.com; dojindo.com/products/CK04/ |
| Dead Cell Stain Kits (LIVE/DEAD Fixable) | Thermo Fisher | L34959 / L34955 | 存活 | 200 assays | $403 / $378 | thermofisher.com/order/catalog/product/L34959 |
| RealTime-Glo Annexin V; ApoTox-Glo Triplex; CellTiter-Glo 2.0 | Promega | G8741–G8713; G9241/G9242 | PS 動力學；三聯檢測；ATP | — | 價格未公開 — 需詢價 | promega.com |

### 每次測定的經濟性 — 各生物標記類別中最便宜且可信的途徑

| 標的 | 最便宜且可信的產品 | 100 單位時的價格 | 化學 |
| --- | --- | --- | --- |
| caspase-8 活性 | Beyotime C1152 | $325 / 100T | 活性 |
| caspase-3/7 活性 | Beyotime C1116 | $301 / 100T | 活性 |
| caspase-3/7 活性，含重組對照的試劑盒 | Cayman 702790 | $385 / 96-well plate ($4.01/well) | 活性 |
| 細胞內 caspase-8 活性（流式） | Elabscience E-CK-A488 | $480 / 100 assays | 活性 |
| 切割後 caspase-3（蛋白） | RayBiotech PTE-CASP3-D175-1 | $521 / plate | 抗體 |
| 切割後 caspase-8 / -9 | 僅有抗體 — Beyotime AG1330 / AG1334 | 每支 $115–163 | 抗體 |
| 切割後 PARP-1 | Beyotime AG1043 | $163 | 抗體 |
| Annexin V（PS），流式 | Elabscience E-CK-A211 | $1.75 / test（200-test pack） | PS |
| TUNEL，螢光 | Elabscience E-CK-A320 | $4.98 / test | DNA 片段化 |
| ΔΨm（JC-1） | APExBIO K2002 | $1.13 / test | 電位 |
| LDH 釋放 | Beyotime C0016 | $0.36 / test | 酵素 |
| 代謝存活 | Beyotime C0009S | $0.08 / test | 酵素 |
| 細胞色素 c 釋出 | APExBIO K2104 | $1,095（試劑盒） | 抗體 |
| DISC 組裝／死亡受體訊號 | **未找到商用試劑盒** | — | — |

### 應納入採購檔案的化學警告

1. **活性不等於切割後的蛋白。** 上列表格中的每個 pNA／AFC 試劑盒讀取的都是合成胜肽。陽性結果並不證明細胞內的 zymogen 已被切割，且這些測試無法在固定組織上執行。
2. **兩款 RayBiotech ELISA 是以細胞凋亡為名的總蛋白檢測**（ELH-CASP3-1、ELH-CASP8-1）。若需要切割型專一偵測，應使用 PTE-CASP3-D175 或 D175-T 比例試劑盒。
3. **APExBIO 的 Caspase-4 試劑盒 K2199 被描述為「LEVD-dependent」** — LEVD 是 caspase-8 的四胜肽，而非 caspase-4 的（LETD）。應將其專一性宣稱視為未經驗證，並要求提供選擇性 panel。
4. **LETD 標籤同時標記 caspase-6 與 caspase-8。** Vybrant FLICA Caspase 8 (V35119)、FAM-FLICA #99 與 AAT 20115/20116 皆使用 LETD。只有 Calbiochem QIA1131KIT 使用真正的 IETD——而該試劑盒被標示為「being discontinued」。
5. **Annexin V 試劑盒僅回報 PS 外翻**，在任何破壞細胞膜的傷害下都會呈陽性。應搭配 caspase 讀值與存活染劑使用。
6. **Cayman 的網域已變更為 caymanchem.com。** `www.caymanchemical.com` 目前顯示的是另一個 hostname 的憑證且無法通過 TLS 驗證——對任何持有書籤網址的人而言，這是一種無聲的採購攔截風險。
7. **Abcam 的 .com 與 .cn 型錄對同一試劑盒標價不同**（ab14085：$765 vs ¥9,022），且數款 Annexin V 試劑盒在 .com 上已停產（ab273274、ab14086）。

### 多重偵測：無商用死亡 panel

MSD 已公布的 U-PLEX 分析物型錄僅含 **Caspase-1、Caspase-3 與 PARP**——沒有切割型成員，也沒有 RIPK1／RIPK3／pMLKL。RayBiotech 的 arrays 為 cytokine／proteome／MAPK。Bio-Techne 的 Quantikine 型錄自稽核主機無法連線，仍未經查證。Olink 未公布價格。**沒有任何單一多重 panel 涵蓋切割後 caspase-3 + 切割後 caspase-8 + 切割後 caspase-9 + 切割後 PARP + RIPK1 + RIPK3 + pMLKL 而可被商用取得。** 最接近的組合是 RayBiotech 的切割後 caspase-3／總量比例 ELISA，加上針對切割後 caspase-8／-9、切割後 PARP 與磷酸化 RIPK1／RIPK3／pMLKL 的個別抗體 Western。

### 小分子抑制劑與佔位對照

APExBIO Q-VD-OPh hydrate #A1901（$55 / 1 mg；$265 / 25 mg；$780 / 100 mg）與 Z-VAD-FMK #A1902（$61 / 1 mg；$749 / 100 mg）有庫存；Cayman Z-VAD(OMe)-FMK #14463 為 $120 / 1 mg、$510 / 5 mg；Enzo Ac-IETD-AMC #ALX-260-042-M001 為 $62 / 1 mg，Ac-IETD-AFC #ALX-260-110-M010 為 $417 / 10 mg。Bachem 的 Z-VAD-FMK（N-1510 / 4026865）透過其經銷商名單出貨至中國大陸。

**不存在商用的生物素化活性探針。** 每一種商用 caspase「探針」皆為螢光產生的親和標籤。生物素化是透過 Bachem／CPC 客製合成或內部自行進行 FMK→biotin-CP 偶聯的客製化工作。

## 重組蛋白、基因工具與化學探針

| 需求 | 產品 | 供應商 | 型號 | 是什麼 | 價格 (USD) | 來源網址（2026 年 11 月 19 日） |
| --- | --- | --- | --- | --- | --- | --- |
| c-FLIP（功能性） | **無商用產品** | — | — | 所有型錄中的 FLIP 蛋白皆為全長 (480 aa) 且未經驗證、在 6 M 尿素／去污劑中變性，或籠統標為「transcript variant 3」 | RayBiotech 230-00717-10 為 $94 / 10 µg — 資料表載明：「not recommended for enzyme activity, ligand-receptor binding, cell-based functional assays, or SPR/BLI kinetic studies」 | raybiotech.com/recombinant-human-flip-protein-230-00717 |
| c-FLIP（構體） | ΔDED FLIP-L；ΔDED FLIP-L D375A | Addgene (Salvesen) | 13790; 13791 | 細菌表現載體，8×His；D375A 抗切割 | 每個 $94（學術價，agar stab）；20 µg DNA 為 $413 | addgene.org/13790 |
| c-FLIP 短異構體蛋白 | CFLAR/FLIP (Myc-DDK, HEK293), variant 3 | LSBio | LS-G67530-20 | 221 aa；異構體歸屬不明確 | $1,130 / 20 µg | lsbio.com |
| Caspase-8（活性） | Caspase-8, human | Enzo | BML-SE172-5000 (5000 U); ALX-201-062-U100 | 相對於 IETD-AFC 已確認活性 | $563；ALX 需詢價 | enzo.com/product/caspase-8-human-recombinant |
| FADD | FADD (1–208), His | ProteoGenix / Boster / ProSpec | ARO-P13443; PROTQ13158; pro-733 | *E. coli* | $230 / 50 µg；$265 / 10 µg；$60 / 2 µg（ProSpec 每 µg 價格最佳） | us.proteogenix.science |
| Caspase-8 前驅物域 | **無** | — | — | — | — | — |
| CFLAR KO | HAP1 CFLAR KO (2 clones) | Horizon Discovery | HZGHC…c002 / c004 | CRISPR 近單倍體 | ≈$3,000（可比的單基因 HAP1 KO 列表）；7 個工作天；IATA 適用 UN3245 GMMO | horizondiscovery.com |
| CASP8 KO | AC16 / 293T / U-2932 | Ubigene | YKO-HB35181 等 | CRISPR，Sanger 驗證 | 「starting at $1,490」(promo $990)；1 週；中國境內供應商 | ubigene.us |
| FAS/CD95 KO | FAS KO HEK293 / HeLa | EditCo | EDJ-KQ657 / EDJ-KQ19167 | CRISPR | 僅報價 | editxor.com |
| CFLAR 敲低 | Silencer siRNA set | Thermo Fisher | AM16708 | 已編目 87 支 siRNA | $233 | thermofisher.com |
| CFLAR 敲低 | shRNA / Cas9 gRNA | OriGene | TL-series; ABIN5230641/2 | 慢病毒 | $1,013 / kit；$822.92 (300 µL)；31–42 個工作天 | origene.com |
| 異二聚體探針 | FLIPinB / FLIPinBγ | ProbeChem; Ambinter（原始供應商） | PC-23804 / PC-23805; Amb1202053 / Amb37832612 | caspase-8／c-FLIP_L 異二聚體穩定劑；CAS 380335-00-2 | 各尺寸均僅能報價 | probechem.com/products_FLIPinB.html; ambinter.com |
| 生物感測平台 | SPR：Biacore CM5 sensor chip | Cytiva | 05858 | 葡聚糖表面，10 片晶片 | $2,473（T200 已停產，由 Biacore 1 取代） | cytivalifesciences.com |
| 生物感測平台 | BLI：Octet SA / SAX / ARC sensors | Sartorius | 18-5019 / 18-5118 / 18-5168 | Streptavidin / anti-avidin | $898 / $4,850 / $941 | shop.sartorius.com |
| 數位免疫分析 | Simoa 平台 + 試劑盒 | Quanterix | HD-1/HD-X/SR-X/SP-X | 單分子；已有一款 TRAIL 檢測（LoD 0.0083 pg/mL） | 儀器報價；HD-X 於 instrument.com.cn 為 CNY 3.0–5.0 M | quanterix.com |

**這些平台能做與不能做的事。** SPR、BLI 與 QCM-D 測量結合動力學，因此它們可望提供 caspase-8:c-FLIP_L 親和力與 DED 絲狀體組裝動力學——**若**這些蛋白能以原生摺疊形式取得，而它們並非如此（見 c-FLIP 一列）。Simoa 會回報 c-FLIP 的*豐度*，而非招募。兩者都不是針對細胞內複合體的感測器。

## 可得性與採購機制

### 交期與履約

| 供應商 | 已公布的服務水準 | 來源 |
| --- | --- | --- |
| CST | 型錄頁面上的逐產品出貨日期（觀察值：下一個工作天）；「next-day delivery on 99% of CST products for orders received by 7:30 PM EST」；客製抗體：**交期未公開** | cellsignal.com/product-information/new-lab-startup-discount |
| Abcam | 「For orders to the UK and US, we provide next business day delivery. For orders to other regions, delivery will take 3–5 business days. For orders to APAC, delivery may take approximately 1–2 weeks」 | abcam.com/en-us/support/shipping-storage-support |
| Santa Cruz | 「Orders are generally shipped within 24 hours upon acceptance」；Express Blue Ice／Dry Ice「Ships Monday through Thursday」；客製訂單：**交期未公開** | scbt.com/customer-care/shipping-information |
| Cayman | 「In stock and ready to ship! … will ship from Cayman within 1–3 business days」；「Ships in 3 to 5 days」；「Contact for availability」；週一至週四 2 PM EST 前下單者當日出貨 | caymanchem.com/faq/how-do-i-know-if-a-product-is-available-to-ship |
| Bio-Techne／R&D | **交期未公開**；僅有缺貨預購措辭（「Made to Order products will appear out of stock」） | rndsystems.com/resources/customer-service-ordering-info |
| Proteintech | **型錄交期未公開**；報價回覆時間「within 1 business day」 | ptglab.com/products/custom-order-requests |
| GeneTex | 無交期聲明；確認信於「within one business day」 | genetex.com/FAQ |
| Fisher／Promega／Sigma-Aldrich／BioLegend | **無法稽核** — 每個路徑皆回傳 HTTP 403 bot 阻擋或 404 | — |

### 出貨限制、冷鏈與區域可得性

- **Abcam**：出貨至 143 個國家；抗體的常溫出貨適用於美國與 EMEA，但「**China and Japan** — Ambient temperature shipping is not yet available in these regions. Orders will continue to ship with ice packs」；乾冰出貨僅限**週一至週三**。部分區域由經銷商服務而非直接出貨。
- **CST**：抗體以常溫出貨（室溫與 37 °C 穩定性已測試一週），設有專屬的中國危險品下單管道與獨立的中國採購條款文件包。
- **Santa Cruz**：危險品項目收取危害品費用並需簽收；部分動物保健、實驗器皿與化學品無法出貨至加拿大、波多黎各或美國屬地；Express Blue／Dry Ice 於週一至週四出貨。
- **Bio-Techne**：在中國大陸（上海）與香港設直營銷售辦公室。
- **Cayman**：逐產品的出貨聲明（「Room temperature in continental US; may vary elsewhere」）、逐批 CoA、SDS 與產品說明 PDF，以及國際經銷商名單。
- **沒有任何供應商就此類試劑公布明確的俄羅斯／中國大陸排除清單**，也**沒有任何供應商說明** zVAD-FMK、cycloheximide、staurosporine、7-AAD、propidium iodide 或 ethidium bromide 的出口管制狀態。分類必須逐產品進行。

### 價格透明度 — 哪些供應商實際可被稽核

| 供應商 | 是否公布目錄價？ | 呈現方式 |
| --- | --- | --- |
| CST | **是** | 依尺寸標示並附出貨日期（20 µl $161；100 µl $351）；試劑盒 $570 / 100 assays |
| Abcam | **是** | 「Price: Starts from $235」；量大折扣橫幅「Savings from $100 to $1,250」 |
| Cayman | **是** | 依尺寸（Z-VAD(OMe)-FMK 1 mg $120, 5 mg $510）；以購物車即時報價 |
| Thermo Fisher | 部分 | 目錄價公開；合約／機構價格需登入；「online exclusive price」 |
| GeneTex | 弱 | 「Please contact us for bulk pricing」 |
| Santa Cruz | 未查證 | 最終價格於接受訂單後以電子郵件寄送 |
| Proteintech | 未查證 | 產品頁價格無法擷取；批量僅能報價 |
| Bio-Techne／R&D | 未查證 | 型錄價格置於登入後；補貨費聲明為「20% of list price」 |
| MSD | **僅報價** | 每個試劑盒皆導向「How to Request a Quote」 |
| Olink | **未公布價格** | Panels 僅能報價；未找到切割型配對 |
| Promega | **完全未公布目錄價** | 任何 Promega 產品 HTML 中皆未出現價格字串；上述 €528 數字來自 Promega 義大利的促銷價格表 |
| Enzo（部分） | 混合 | Annexin V 試劑盒標示「Inquire For Pricing」；頁面上的價格列可能屬於相關產品而非該項目本身 |
| Biotium | 已停產的產品線顯示 $0 | #30008 / #30011 / #30012 顯示為已停產 |
| Fisher／Promega／Sigma／BioLegend | 無法稽核 | 被 bot 阻擋 |

**對本稽核的後果。** 本領域最大的三家細胞凋亡試劑供應商——Fisher（因而也包括 Promega 的採購）、Merck／Sigma-Aldrich 與 BioLegend——完全無法以自動抓取讀取。它們的交期、DG 狀態與 QC 宣稱必須在本次稽核定案之前，由帳號持有者或人工瀏覽器補齊。

### 觀察到的區域與冷鏈細節

- **Dojindo**：「Online orders are available only for the United States. For other regions, please see 'How to order'」。上述價格為美洲區域的目錄價；存在區域站點（dojindo.co.jp、.com/ASIA、.com/EUROPE）。
- **Beyotime 與 Elabscience**：型號在全球網域與美國網域上解析結果相同，以 USD 計價，無區域型錄分割，也未公布對中國的出貨限制。Elabscience 表示「ship in 3 days」。
- **Abcam**：同一試劑盒在各地區站點的定價不同（ab14085：.com 為 $765，.cn 為 ¥9,022），且 .cn 站點僅接受人民幣。
- **Cayman**：運行兩個定價區域 — `cch`（美國／歐洲的美元目錄價並附歐元等值，上文所採用者）與 `ce`（Cayman Europe）。儲存類別從 −80 °C（caspase-3/7 試劑盒 702790）到 −20 °C（LDH、自噬試劑盒）再到 4 °C（Annexin 試劑盒，冷藏出貨）；601360 與 601280 以室溫出貨。
- **APExBIO**：細胞色素-c 試劑盒 K2104 與 TUNEL DAB 試劑盒 K2271 以乾冰出貨；caspase 試劑盒為 −20 °C；JC-1 K2002 以藍冰出貨。
- **出口管制**：在所抓取的任何頁面上，唯一浮現的分類是所查核之細胞凋亡試劑盒的 **ECCN 0**（Cayman）。在包含中國境內供應商在內的任何 caspase、細胞毒性或細胞凋亡產品頁面上，皆未觀察到出口管制、許可或受限出貨的通知。
- **RUO**：Enzo 在每個 apoptosis／caspase 頁面上標示「RUO – Research Use Only」，MSD 標示「MSD products are for Research Use Only. Not for use in diagnostic procedures」，Elabscience 標示「For research use only」。

### 品質文件

- **CST** 公布逐產品的驗證資料與逐批分析證明書（Certificate of Analysis，例如 media.cellsignal.com/coa/56343/5/），並在其自身的驗證原則頁面提出此限定：「No single assay is sufficient to validate an antibody, including knockout」與「Knockout specificity in WB does not predict specificity in IHC」。**在 FLIP #56343 或切割後 caspase-8 #8592 的產品頁面上，未出現任何敲除宣稱。**
- **Proteintech** 以「knockout (KO) and knockdown (KD) genetic controls, and epitope mapping」驗證每一批次，可依要求提供原始資料，並以附出版篇數的 KD/KO 已驗證標章標示產品。
- **Abcam** 表示超過 4,400 支重組抗體具有敲除驗證，並提供逐 SKU 的應用 × 物種對照表。
- **Cayman** 提供逐批 CoA、SDS 與產品說明文件；另提供以每瓶 $55 手續費的精確重量分裝。

### 折扣結構

| 供應商 | 已公布的優惠 |
| --- | --- |
| CST | New Lab Start-Up Program：3 個月內 20% 折扣，僅限美國，限新的型錄訂單，2026 年 12 月 31 日到期；論文致謝優惠：單一 20 µl 試用裝 50% 折扣。**未公布任何常設的機構或「公開折扣」價目表。** |
| Abcam | 100 µL／µg 抗體 20% 折扣；「Buy More, Save More. Savings from $100 to $1,250」 |
| Proteintech | 「Buy any two antibodies, get a third free」（代碼 3FOR2AB）；首次自行詢價 5% 折扣 |
| GeneTex | 數量 ≥10 才有量價折扣；未公布百分比 |
| Thermo Fisher | 需登入的合約定價；網站橫幅「Buy 3 qualifying products for the price of 2」（12 月 31 日截止） |
| Bio-Techne、Cayman、Santa Cruz | 僅能報價或未公布（Santa Cruz 的「Cruz Credit」價格無法取得） |

### 此 panel 特有的供應鏈風險

1. **整併移除了第二條報價途徑。** Novus Biologicals 現已解析至 R&D Systems，因此原先可透過 Novus 報價的小眾細胞凋亡抗體，現為單一供應商（Bio-Techne）的品項。
2. **旗艦產品線為單一來源。** CST 僅有一個 FLIP clone 系列（56343／96297）與一對切割後 caspase-8（8592／9496）；批次出現問題即意味著必須更換供應商*並*重新驗證。
3. **p43-FLIP 完全沒有型錄產品**，因此 DISC 模型所依賴的該物種之偵測無法採購。
4. **冷鏈的區域不對稱。** Abcam 的常溫出貨升級止於中國與日本，在該兩地同一批貨物須以冰袋運送且需約 1–2 週。
5. **週末截止時點。** SCBT 乾冰為週一至週四，Abcam 乾冰為週一至週三，Cayman 當日出貨為週一至週四——週四或週五下的單會閒置 2–4 天，而乾冰出貨有週末昇華的風險。
6. **任何地方都沒有庫存保證。** SCBT「all orders are subject to availability」；Cayman「availability of all products is subject to prior sale」；Bio-Techne「made to order products will appear out of stock」。
7. **RUO 是普遍情況。** CST、SCBT、GeneTex 與 Cayman 皆將這些試劑標示為僅供研究使用；在稽核範圍內，沒有任何細胞凋亡試劑轉為更受限的狀態，也沒有任何一項成為診斷用途。
8. **批次間變異風險。** 融合瘤衍生的抗體（Santa Cruz、Cayman、Sigma 的單株抗體）帶有典型的批次差異，而僅有 CST 與 Proteintech 公布付費的批次保留服務。
9. **經典 caspase 試劑盒品類已收縮。** Biotium 已停產其 caspase-3 與 caspase-8 受質試劑盒，Thermo Fisher 已下架十個舊版 caspase 試劑盒 SKU。若某實驗室是依 2018 年的方法段落補貨，將會發現這兩個 SKU 都已失效；可用的替代品為 Beyotime、APExBIO、Elabscience、Cayman 受質，以及 ICT FLICA。
10. **供應商網域空間中的採購攔截風險。** Cayman 的舊網域 `caymanchemical.com` 目前顯示的是另一個網域的憑證且無法通過 TLS 驗證，而 Abcam 的 .com／.cn 價差極大且未見記載。下單數百美元的訂單之前，應先查核憑證與區域價格。
11. **每個標的僅有一款試劑盒的模式普遍存在。** 整份稽核中找到的唯一專用細胞色素-c 釋放試劑盒是 APExBIO K2104，售價 $1,095；而唯一未被 caspase-6 混淆的專用 caspase-8 活性試劑盒，是一個標示為「being discontinued」的 Calbiochem SKU。

## 最便宜且可信的 panel — 及其仍無法做到的事

一間想問「這個細胞是否透過 caspase-8 路徑死亡，以及存在多少 c-FLIP？」的實驗室，可以用在目錄價約 **$1,000–1,500** 的試劑完成：

| 項目 | 途徑 | 成本 |
| --- | --- | --- |
| 總 c-FLIP，WB | CST #56343, 20 µl | $161 |
| 切割後 caspase-8，WB | CST #9496 或 #8592, 20 µl | ~$161 |
| caspase-8 活性，盤式 | Beyotime C1152, 100 tests | $325 |
| 細胞凋亡確認，流式 | Elabscience E-CK-A211 (Annexin V-FITC/PI), 200 assays | $350 |
| 選用的活細胞 caspase-8 | Vybrant FLICA Caspase 8 #V35119, 25 assays | $350 |

加上**異構體分辨**約需多花 $480（Abcam ab314747 $220 + ab323748 $257，各 20 µl），而買到的只是一張 Western blot，而非流式 panel 或已敲除驗證的試劑。

量體經濟會改變答案的形狀而非其規模：同一組 panel 若放大至 100 次 Annexin V 測定（Elabscience，$1.75/test）、100 次 LDH 測定（Beyotime C0016，$0.36/test）與 500 次代謝存活測定（Beyotime C0009S，$0.08/test），耗材成本為 **$200–300**。固定成本在於抗體與驗證工作，而非試劑盒。

該 panel 可回答「caspase-8 是否活化、c-FLIP 是否存在」。它**無法**回答 DISC 模型實際所提的問題：

- 它可區分 c-FLIP_L 與 c-FLIP_S，但僅限在 Western blot 上，使用的是對人類有反應的重組 clone，且無已公布的敲除驗證，也完全沒有 c-FLIP_R 試劑；
- 它無法測量*位於* DISC 上的 c-FLIP，因為不存在商用的佔位探針；
- 它無法偵測 p43-FLIP，因為它不是型錄產品；
- 它無法回報 DISC 化學計量，因為那需要定量質譜（核心設施）或重組實驗；
- 其 caspase-8 讀值是*胜肽*讀值——除非謹慎使用 IETD 與競爭性抑制劑，否則會與 caspase-6 交叉反應——因此它是含 caspase-8 活性的證據，而非 procaspase-8 在細胞內被切割的證明。

這兩個問題之間的成本差距不是價格差距。第一個問題是一筆約 $1,000 的型錄訂單；第二個則是一項核心設施計畫案，其成本結構完全不同——這正是 DISC 比例任務輸出中的相圖仍然是模型預測而非測量的原因。

## 採購實驗室的查核清單

1. 在訂購 c-FLIP 之前，以書面確認該抗體的**異構體涵蓋範圍**：總量、L，或 L+S。
2. 索取**該批號在該特定應用上的敲除驗證**（CST 自身的指引：WB 中的敲除專一性不會轉移至 IHC）。
3. 在訂單列上指定**應用與 clone** — 在同一標的編號下更換 clone 並非等效替代。
4. 對 caspase-8 活性，指定 **IETD** 並要求提供**競爭性抑制劑**（Z-VAD-FMK）以對照非專一切割。
5. 對活細胞 caspase-8，指定 **IETD 而非 LETD** — LETD（Vybrant、FAM-FLICA）也會標記 caspase-6；並須註明親和標籤為端點量測，而非動力學追蹤。
6. 在週初提早下乾冰訂單（Abcam 為週一至週三，SCBT 為週一至週四），並在承諾中國境內交付之前先確認 APAC 的交期。
7. 進行重組實驗時，不要購買型錄中的 c-FLIP 蛋白：使用 Salvesen 的 ΔDED 構體（#13790／#13791）或 CDMO。
8. 對 FLIPinB，同時向 Ambinter（原始供應商）與 ProbeChem 詢價；MedChemExpress、Selleck、Cayman 與 Tocris 均未備貨。
9. 下單前重新查核每一個型號：Biotium 的 caspase 試劑盒（#30008／#30011／#30012）已停產，Thermo Fisher 的舊版 caspase 試劑盒（C12440、C12441、B21240、A13279 等）回傳 `SKU_NOT_FOUND`。
10. 先讀受質，再讀試劑盒名稱。RayBiotech 的 ELH-CASP3-1 與 ELH-CASP8-1 是總蛋白 ELISA；APExBIO 的 caspase-4 試劑盒 K2199 描述時使用了 caspase-8 的 LEVD 四胜肽；ICT 與 AAT 的 caspase-8 活細胞試劑盒使用 LETD，而它也會標記 caspase-6。
11. 以憑證而非書籤查核供應商的 hostname — Cayman 的網域已變更為 caymanchem.com，舊網域無法通過 TLS 驗證。
12. 詢問你所要購買的 c-FLIP 產品是總 FLIP 抗體還是異構體可分辨的抗體，並查核應用清單：異構體可分辨的 clone（Abcam ab314747、ab323748；Santa Cruz sc-136160）是 Western blot 產品，因此若要用於 IF、流式或 ELISA，即屬於客製工作。
13. 下單前查核供應商的注意事項清單。CST 的 #8510、#4790、#9496、#9661、#14933／#14993 與 #8762 皆附有已記載的交叉反應或未知條帶說明；Abcam ab316923 僅以磷酸化胜肽／過度表現裂解液驗證。

## 相關知識庫條目

- [[task_output_cflip_caspase8_disc_ratio_kinetics_19_Nov_2026]] — 本稽核發現其核心變數無法以型錄試劑測量的建模論證。
- [[Caspase-8-c-FLIP Rheostat]] — 知識庫中此開關的節點；其「quantitative tuning」項目帶有本稽核據以定價的拷貝數。
- [[c-FLIP]]、[[Caspase-8]]、[[p43-FLIP]]、[[DISC]]、[[FADD]]、[[Bid]] — 分子參與者。
- [[Apoptosis]]、[[Necroptosis]]、[[Caspase-3]]、[[Caspase-7]]、[[Caspase-10]]、[[RIPK1]]、[[RIPK3]]、[[MLKL]]、[[PARP1]]、[[XIAP]]、[[cIAPs]] — 所涵蓋的生物標記標的。
- [[Annexin V]]、[[Cytochrome c]]、[[TUNEL]]、[[Apoptosis-Inducing Factor]] — 具有型錄途徑的偵測標的。
- [[Proteasome]] — 此 panel 中變化最快的分析物背後的周轉機構。
