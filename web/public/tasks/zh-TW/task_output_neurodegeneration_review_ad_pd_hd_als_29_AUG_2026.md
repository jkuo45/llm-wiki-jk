---
title: "神經退化性疾病綜述：AD、PD、HD、ALS/FTD — 來自 Wiki、圖譜與 2025–2026 文獻的比較綜合"
description: "神經退化性疾病（阿茲海默症、帕金森氏症、亨丁頓舞蹈症、ALS/FTD 譜系）的比較綜述，整合 wiki 筆記、triples 圖譜與 wiki 圖譜分析，以及 2025–2026 年治療與生物標記版圖的網路文獻研究。聚焦共享的收斂機制，與疾病特異的觸發、易損細胞類型、擴散與治療邏輯差異。"
created: 2026-08-29
updated: 2026-08-29
type: task-output
tags:
  - neurodegeneration
  - alzheimers-disease
  - parkinsons-disease
  - huntingtons-disease
  - als
  - tauopathy
  - proteinopathy
  - comparative-review
---

# 神經退化性疾病綜述 — AD、PD、HD、ALS/FTD

> [!info]
> **來源脈絡。** 主要依據：wiki 自身的筆記 — [[Neurodegeneration]]、[[Alzheimer's Disease]]、[[Parkinson's Disease]]、[[Huntington's Disease]]、[[Amyotrophic Lateral Sclerosis]]、[[Tau]]、[[Tauopathy]]、[[TDP-43]]、[[C9orf72]]、[[SOD1]]、[[HTT]]、[[Alpha-synuclein]]、[[Frontotemporal Dementia]]，加上氧化壓力（[[Oxidative Stress]]、[[Ferroptosis]]、[[Lipid Peroxidation]]）、神經黑色素（[[Neuromelanin]]、[[Lewy Bodies]]、[[Pathogenic Threshold of Neuromelanin]]）、自噬（[[Autophagy]]、[[TFEB]]）、sirtuins（[[SIRT1]]–[[SIRT7]]）、衰老（[[Senescence]]、[[SASP]]、[[Inflammaging]]）、COMT、表觀遺傳學與 adrenochrome 主題。關於「圖譜」的量化陳述來自 `wiki-out/graph.json`（3,007 節點 / 35,150 條 wiki 連結邊）與 `graphify-out/graph.json` 的 BFS 走訪。治療/生物標記更新（2024–2026）來自網路研究（FDA/EMA 公告、uniQure/Roche/Biogen 新聞稿、*JAMA Neurology*、*Nature Medicine*、*Molecular Psychiatry* 2025–2026 綜述）——各項以 **[web]** 標記並列於來源。Wiki 來源的陳述連結至相關筆記。

---

## 執行摘要

[[Neurodegeneration]] — 神經元結構與功能的漸進性喪失 — 臨床上表現為一組截然不同的疾病，但在機制上收斂於少數幾個與老化相關的失效模式：**蛋白穩態崩潰**、**粒線體功能障礙**、**氧化與硝化壓力**、**神經發炎**，以及**錯誤摺疊蛋白的類普恩樣散播**。Wiki 自身的圖譜讓這種收斂清晰可見：[[Oxidative Stress]] 是整個知識庫中最大的樞紐（591 條邊），且每個主要疾病節點都共享一個共同的鄰居核心（[[SIRT1]]、[[Autophagy]]、[[cGAS-STING Pathway]]、[[TFEB]]、[[Ferroptosis]]）。

但 [[Alzheimer's Disease]]（AD）、[[Parkinson's Disease]]（PD）、[[Huntington's Disease]]（HD）與 [[Amyotrophic Lateral Sclerosis]]/[[Frontotemporal Dementia]]（ALS/FTD）之間的*差異*至少與相似性同樣重要，且沿著四個軸線分布：

1. **觸發**：冗餘的年齡驅動蛋白病變（AD）vs. 自我氧化的神經傳遞物（PD）vs. 確定性重複擴增（HD）vs. RNA 結合蛋白穩態失效（ALS/FTD）。
2. **易損細胞類型**：海馬/內嗅皮質記憶迴路 vs. 富含神經黑色素的 [[Substantia Nigra]] 多巴胺神經元 vs. 紋狀體中型多棘神經元 vs. 運動神經元——各自被不同的局部化學所摧毀。
3. **擴散拓撲**：邊緣系→皮質（AD）、尾端腦幹→邊緣系→皮質（PD）、紋狀體為中心（HD）、皮質脊髓 ± 額葉（ALS）。
4. **治療邏輯**：細胞外免疫治療在標靶為細胞外時有效（AD 抗類澱粉抗體——已核准）；細胞內且基因定義明確的標靶需要基因靜默（HD 的 AMT-130、ALS 的 tofersen——2025–2026 的突破）；PD 缺乏單一主導標靶，因此推進最廣的管線（抗 [[Alpha-synuclein]] 抗體 prasinezumab 進入第 3 期、以 ambroxol 活化 GCase、LRRK2 抑制）。

> [!important]
> 2024–2026 是一個轉折點：AD 獲得兩個已核准的抗類澱粉抗體（lecanemab、donanemab）與 FDA 審核通過的血液生物標記；HD 報告了史上第一個疾病延緩結果（AMT-130，36 個月時 75% 減緩，BLA 已於 2026 年第一季提交）；ALS 展示了精準神經學（tofersen 治療 SOD1-ALS，ATLAS 試驗的症狀前治療）；PD 的第一個 α-synuclein 抗體進入第 3 期。同時，TDP-43 蛋白病變（LATE）成為老年失智的第三大貢獻者，在物理上連接了下表中 AD 與 ALS/FTD 兩欄。

---

## 1. 收斂的框架：所有神經退化共享什麼

Wiki 的 [[Neurodegeneration]] 筆記與其鄰居描述了五種交互作用的失效模式。它們為各疾病共享——但帶有疾病特異的權重。

### 1.1 蛋白穩態崩潰

每個主要神經退化性疾病都由一個錯誤摺疊的蛋白定義：[[Amyloid Beta]] + [[Tau]]（AD）、[[Alpha-synuclein]]（PD）、突變 huntingtin（[[HTT]]）（HD）、[[TDP-43]] 與 [[SOD1]]（ALS）。清除途徑經由 [[Autophagy]]–溶酶體系統與泛素–蛋白酶體系統；wiki 的自噬主題顯示 [[TFEB]] 介導的自噬可拯救多巴胺神經元免於 α-synuclein 毒性（PD），並減輕 tau/類澱粉負擔（AD），而 [[PGC-1α]] 驅動的 TFEB 活化可拯救 HD 的蛋白毒性。提高自噬流量的介入（[[Intermittent Fasting]]、[[Caloric Restriction]]、運動）在 wiki 的 AD、PD 與 HD 筆記中反覆出現，作為共享的治療下注。

### 1.2 粒線體功能障礙

Wiki 記錄的疾病特異模式包括：PD 中 [[Substantia Nigra]] 的 Complex I 缺陷（由 [[MPTP]]、[[Rotenone]]、百草枯重現）；AD 中的 Aβ–粒線體交互作用；HD 中 mHTT 驅動的 [[PGC-1α]] 抑制；ALS 中 SOD1/TDP-43 造成的粒線體損害（[[Mitochondrial Dysfunction]] 筆記）。五個經典 PD 基因（SNCA、LRRK2、PRKN、PINK1、DJ-1）皆具有粒線體調控角色；LRRK2 直接磷酸化 [[DRP1]] 以驅動過度分裂。受損的 [[Mitophagy]]（PINK1/Parkin）既是 PD 機制，也——依 wiki 的衰老文件（Hruby & Higuchi-Sanabria 2025）——是 [[Mitochondrial Dysfunction|粒線體功能障礙]] 誘導 [[Senescence]] 與 [[SASP]]、進而餵養 [[Inflammaging]] 的*橋樑*。

### 1.3 氧化與硝化壓力

[[Oxidative Stress]] 主題是 wiki 最大的樞紐，其來有自：大腦結合了高 O₂ 通量、富含脂質的膜（[[Lipid Peroxidation]] → [[Malondialdehyde]]、[[4-Hydroxynonenal]]），以及有限的抗氧化儲備。[[Nitrative Stress]] 增加了 [[Peroxynitrite]] 介導的硝酸化——PD 中的 α-synuclein、AD 中的 tau/Aβ、ALS 中的 TDP-43 與神經絲（[[Reactive Nitrogen Species]]）。[[Ferroptosis]]——鐵催化的脂質過氧化死亡——是圖譜的共享鄰居百搭牌，與全部四種疾病相連。

### 1.4 神經發炎與先天免疫

活化的微膠細胞（NOX2 呼吸爆發、iNOS → [[Peroxynitrite]]）與反應性 A1 星形膠細胞在全部四種疾病中放大損傷（[[Neuroinflammation]]）。Wiki 在此最獨特的貢獻是 **[[cGAS-STING Pathway]]** 群集：細胞質 [[Mitochondrial DNA|mtDNA]] 與細胞質染色質片段（衰老）或 TDP-43 驅動的粒線體破裂啟動 cGAS-STING → 第一型干擾素訊號。在 wiki 圖譜中，整個 AD/tau/FTD/TDP-43/C9orf72 陣營坐落於一個以此途徑命名的社群——先天免疫軸是圖譜為 tau/TDP-43 疾病給出的組織原則。

### 1.5 老化作為主風險因子

老化是 AD、PD 與 ALS 的主導風險因子，而 wiki 的衰老主題提供了機制：衰老膠細胞累積、分泌促發炎的 SASP（[[IL-6]]、[[IL-1β]]），並與蛋白病變形成前饋迴路。PD 筆記記錄了尿路外泌體中可區分 PD 病人與對照組的循環 SASP 特徵；AD 筆記記錄了 AD 腦中的表觀遺傳年齡加速（[[Epigenetic Clock]]、[[DNA Methylation]] 漂移）。

---

## 2. 疾病輪廓

### 2.1 阿茲海默症 — 類澱粉/tau（± TDP-43）失智症

**臨床病理。** 漸進性遺忘型失智；失智最常見的成因，也是最常見的神經退化性疾病。特徵：細胞外 [[Amyloid Beta]] 斑塊（Aβ1–42）與細胞內 [[Tau]] 神經纖維纏結，始於內側顳葉，並在約 20 年的臨床前生物標記期內沿邊緣系→聯合皮質擴散。

**Wiki 立論的機制。** [[Neurodegeneration]] 筆記詳述了金屬–氧化還原引擎：Aβ（經 His6/13/14）結合 Cu²⁺/Fe³⁺ 並催化 [[Fenton Reaction]] 化學，產生使脂質過氧化、蛋白羰基化、核酸氧化（8-oxo-dG）的 H₂O₂——且 H₂O₂ 抑制 [[PP2A]]（主要的 tau 磷酸酶），將 tau 鎖定於其過度磷酸化、易聚集的狀態。氧化 tau 種子以類普恩方式跨突觸傳播。AD 筆記補充表觀遺傳層：全面低甲基化、組蛋白去乙醯化（記憶基因上的「關閉」染色質）、miRNA 失調；以及 sirtuin 層——[[SIRT1]]（保護性：Beclin-1 去乙醯化 → 自噬；CREB 介導的 tau O-GlcNAc 調控）、[[SIRT3]]（粒線體保護，與 Aβ 沉積相映）、[[SIRT2]]（有害——抑制它是活躍的治療策略），血清 SIRT1/3/6 與 AD 呈反向相關。

**2025–2026 現況 [web]。** 兩個抗類澱粉單株抗體已獲 FDA 核准用於確認類澱粉陽性的早期症狀性 AD：**lecanemab**（Leqembi；2023 年 7 月傳統核准；2025 年 1 月核准靜脈維持給藥；2025 年核准皮下自行注射；2025/2026 年歐盟核准）與 **donanemab**（Kisunla；2024 年 7 月完全核准；TRAILBLAZER-ALZ 2 中 76 週時 iADRS 約 35% 減緩；每月給藥，斑塊清除後即停藥）。兩者皆適度減緩衰退（約 25–35%）而非逆轉；兩者皆帶有 ARIA（水腫/微出血）風險，在 APOE ε4 同型合子中最高，必須 MRI 監測。Aducanumab 已於 2024 年初退市。此領域如今由**血液診斷**定義——血漿 p-tau217 檢測於 2025 年獲 FDA 審核通過——以及中期試驗中的抗 tau 免疫治療/ASO。關鍵地，**TDP-43 蛋白病變（LATE）**如今被視為主要共病變：約三分之一的 85 歲以上大腦中存在，它模仿或加重 AD，與 ADNC 共病時加速衰退，並預測較差的抗類澱粉反應——這是類澱粉陽性試驗呈現異質性效益的原因之一。

### 2.2 帕金森氏症 — 自我中毒的多巴胺神經元

**臨床病理。** 第二常見的神經退化性疾病；動作遲緩、僵硬、靜止顫抖、姿勢不穩，加上前驅非動作症狀（REM 睡眠行為障礙、嗅覺喪失、便秘）。定義特徵是 [[Substantia Nigra|substantia nigra pars compacta]] 富含神經黑色素的多巴胺神經元喪失與 [[Lewy Bodies]]（α-synuclein 聚集），呈尾端腦幹→邊緣系→皮質的擴散模式，並有腸道/迷走神經進入假說（[[Dorsal Motor Nucleus of the Vagus]]）。

**Wiki 立論的機制。** PD 是 wiki 中註釋最密集的疾病（352 次檔案提及；293 邊節點）。三條交叉的氧化機制（[[Neurodegeneration]] 筆記）：**（1）多巴胺自氧化**——兒茶酚環（經鐵或 [[Monoamine oxidase|MAO]]）氧化為多巴胺醌，與 α-synuclein 半胱胺酸殘基共價加成並消耗 GSH；**（2）Complex I 缺陷**（以 MPTP/魚藤酮/百草枯模型重現）；**（3）微膠細胞 NOX2 + 超氧化物 → 過氧亞硝酸鹽 → 硝酸化 α-synuclein 與 [[Lewy Bodies]]**。UniQure——不，是 wiki 的 **[[Pathogenic Threshold of Neuromelanin]]** 模型：[[Neuromelanin]] 是保護性的（緩衝兒茶酚與氧化還原活性金屬），直到細胞內負荷跨越晚年天花板，此後蛋白穩態崩潰、溶酶體失效、金屬氧化還原循環與粒線體壓力收斂——解釋了 PD 為何選擇性殺死*神經黑色素含量最高*的神經元。COMT 主題補充藥理學視角：[[COMT Inhibitors]]（entacapone、opicapone、tolcapone）延長 [[Levodopa]] 作用，但藉阻斷兒茶酚出口路徑，理論上可能在氧化壓力下提高 aminochrome/adrenochrome 負荷——即 [[Adrenochrome]] 主題的 PD 相關性。Sirtuin 層與 AD 相映：[[SIRT1]] 促進 α-synuclein 的自噬降解、[[SIRT3]] 對抗 α-synuclein 的粒線體毒性（於 SNpc 中隨年齡下降）、[[SIRT2]] 有害（刪除具保護性）。

**2025–2026 現況 [web]。** 尚無疾病修飾療法獲得核准。管線是神經學中最廣的：**prasinezumab**（抗 α-synuclein 抗體）在第 2 期顯示於生物標記定義的*快速進展者*中有減緩效果後（Nat. Med. 2024/2025），已進入**第 3 期（PARAISO，約 900 名參與者，2025 年 11 月）**；**ambroxol**（GCase 伴護蛋白——見 wiki 的 [[Glucocerebrosidase]] 與 [[Ambroxol]] 筆記）在第 2 期 PD 失智試驗顯示安全但效益不明確後（JAMA Neurol. 2025），進入**第 3 期（ASPro-PD，UCL，330 名參與者，GBA1 富集，2025）**；腦穿透性 **LRRK2 抑制劑**（如 GSK3357679）持續推進，GPNMB 浮現為溶酶體壓力的藥效學生物標記；α-synuclein **種子擴增檢測（SAA）**獲得生物標記資格認定意見（2024），使生物學確認的試驗入組成為可能。多巴胺替代（[[Levodopa]] + [[COMT Inhibitors]] + MAO-B 抑制劑 + DBS）仍是純症狀治療。

### 2.3 亨丁頓舞蹈症 — 確定性的重複擴增

**臨床病理。** 體染色體顯性遺傳；*HTT* 外顯子 1 的 CAG 重複擴增（>36）→ 功能獲得型突變 huntingtin（mHTT），造成紋狀體中型多棘神經元（間接路徑）退化；舞蹈症、精神症狀、認知衰退；中年發病並有遺傳預期。唯一一種*基因型完全預測疾病*的常見神經退化性疾病——這也是為何它的治療故事是基因靜默典範的最純粹檢驗。

**Wiki 立論的機制。** Wiki 的 HD 筆記是四者中最薄的（§5 記為缺口）但掌握了要點：[[Autophagy]] 是 mHTT 的主要清除途徑，增強 [[Autophagic Flux]] 是主要研究方向；經 [[PGC-1α]] 活化 [[TFEB]] 可拯救蛋白毒性；[[SIRT1]] 強力保護——腦特異性基因剔除*加重* HD，過度表現可拯救存活與 [[BDNF]] 轉錄（經 CRTC1–CREB 軸；BDNF 於皮質產生並轉運至紋狀體；mHTT 破壞此過程）——同時 [[SIRT2]] 抑制具神經保護性。圖譜上，HD 位於 wiki 的「SIRT1」社群（社群 8），與 TFEB、[[PGC-1α]]、[[Ferroptosis]]、[[Caloric Restriction]] 同群——是*代謝/表觀遺傳*群集而非免疫群集。

**2025–2026 現況 [web]。** 2025 年 9 月帶來了此領域首個陽性的疾病修飾關鍵試驗結果：**AMT-130**（uniQure）——一次性 AAV5-microRNA 基因治療，經 MRI 導引對流增強輸注進入紋狀體——相較 Enroll-HD 傾向匹配的外部對照，顯示 **36 個月時 cUHDRS 下降 75% 減緩**（p=0.003）、Total Functional Capacity 60% 減緩（p=0.033），以及 CSF NfL *低於基線*（−8.2%，對比預期的 +30–45%/3 年）。BLA 目標為 2026 年第一季，可能於 2026 年底核准。保留意見：治療人數少（高劑量 12 人），開放標籤對外部對照。Roche 的 **tominersen**（HTT ASO）在第 3 期失敗後仍於限縮的成年顯症試驗中持續，口服/靜默計畫接續其後。症狀照護（舞蹈症的 VMAT2 抑制劑）不變。

### 2.4 ALS 與 ALS–FTD 譜系 — RNA 結合蛋白穩態失效

**臨床病理。** 漸進性運動神經元退化（皮質脊髓 ± 前角），診斷後中位存活 2–5 年；約 10% 為家族性。**約 97% 的 ALS 呈現 TDP-43 病理**，約 40% 的家族性 ALS（加上約 10% 散發性）由 C9orf72 重複驅動；C9orf72 亦造成 FTD。ALS 與 FTD 如今是同一疾病譜系——TDP-43 蛋白病變在不同解剖中心。Wiki 圖譜直接編碼了這一點：ALS↔FTD、ALS↔TDP-43、ALS↔C9orf72、FTD↔TDP-43、FTD↔Tau 皆為直接邊，且 TDP-43 的最高 Jaccard 鄰居是 C9orf72（0.250）與 [[Tauopathy]]（0.182）。

**Wiki 立論的機制。** [[Neurodegeneration]] 筆記詳述了運動神經元特異的級聯：突變 [[SOD1]]（A4V、G93A；>180 個變異）獲得毒性功能——異常銅化學加上不溶性聚集——並經 Derlin-1 觸發 ER 壓力/UPR；星形膠細胞 EAAT2 喪失 → [[Excitotoxicity|興奮毒性]] Ca²⁺ 過載 → [[NADPH Oxidase]]（NOX2）與 calpain 活化。[[TDP-43]] 筆記補充現代層：細胞質錯誤定位 → 核內 RNA 剪接抑制喪失（*STMN2*、*UNC13A* 中的隱密外顯子）→ 軸突不穩定，加上粒線體破裂啟動 [[cGAS-STING Pathway]]；[[C9orf72]] 在單倍體不足之上再加上毒性 RNA 灶 + 二肽重複蛋白（正常的 C9orf72 蛋白*調控自噬*——與 §1.1 形成整齊的機制迴路）。[[SARM1]]（軸突摧毀 NADase）是 wiki 的 ALS 鄰域中一個可成藥節點。ALS 節點位於 wiki 的「Inflammation」社群——符合一個膠細胞（微膠/星形膠）貢獻具決定性的疾病。

**2025–2026 現況 [web]。** 存在四個 FDA 核准藥物：riluzole（1995）、edaravone（2017）、sodium phenylbutyrate/taurursodiol（RELYVRIO——**2024 年 4 月**在第 3 期失敗後退市）、以及 **tofersen**（Qalsody，2023 年 4 月）——首個*精準*神經退化治療：鞘內 SOD1 ASO，以**生物標記**為基準核准（血漿 NfL −55%），並正在 ATLAS 試驗中對症狀前 SOD1 攜帶者（NfL 升高者）進行測試（首例 2026 年）。ASO 波持續：C9orf72 ASO（WVE-004，第 3 期，2025 年 11 月）、FUS ASO（ION363，FUSION 試驗），以及——可能適用於約 97% 的 ALS——**ATXN2 ASO**（穩定 TDP-43）與 **UNC13A 隱密外顯子 ASO（FUNCtion）**。抗發炎的 masitinib（肥大細胞/酪胺酸激酶）進入確認性第 3 期（AB23005，408 名參與者，2025）。截至 2026 年中約有 295 項 ALS 試驗活躍；血漿 **NfL** 如今是此領域已驗證的藥效學代理指標。

---

## 3. 正面對決比較

| 向度 | **阿茲海默症** | **帕金森氏症** | **亨丁頓舞蹈症** | **ALS / FTD** |
|---|---|---|---|---|
| **核心蛋白病變** | [[Amyloid Beta]]（細胞外）+ [[Tau]]（細胞內）；± [[TDP-43]]（LATE）、± Lewy | [[Alpha-synuclein]]（[[Lewy Bodies]]） | 突變 [[HTT]]（polyQ，核內/包涵體） | [[TDP-43]]（約 97% ALS；約 45% FTD）；亞群中的 [[SOD1]]、[[FUS]]、[[C9orf72]] DPR；FTD-tau 中的 [[Tau]] |
| **主要觸發** | 年齡驅動的冗餘蛋白病變；APOE ε4；金屬-氧化還原放大 | 多巴胺的內在自氧化 + Complex I 缺陷 + 神經黑色素閾值 | *HTT* 的**確定性** CAG 擴增（>36） | 重複擴增（C9orf72）、SOD1/FUS/TARDBP 突變；TDP-43 蛋白穩態失效（散發性） |
| **遺傳度** | 約 1–5%（PSEN1/2、APP）；APOE ε4 為常見風險 | 約 5–10% 單基因（SNCA、LRRK2、GBA1、PRKN、PINK1、DJ-1）；多為散發 | 100% 體染色體顯性 | 約 10% 家族性；C9orf72 = 約 40% fALS |
| **易損細胞類型** | 海馬/內嗅與聯合皮質麩胺酸神經元 | 富含神經黑色素的 SNpc [[Dopaminergic Neurons]] | 紋狀體**中型多棘神經元**（間接路徑） | 上 + 下**運動神經元**（ALS）；額/顳葉神經元（FTD） |
| **為何是該細胞** | Aβ-金屬 Fenton 化學；PP2A 氧化 → tau；突觸可塑性依賴 | 多巴胺氧化化學在多巴胺神經元中無可避免；鐵/nm 負荷；閾值模型 | mHTT 轉錄失調（CRTC1–CREB→BDNF）、蛋白穩態、皮質-紋狀體麩胺酸 | 最高代謝需求；最弱的 EAAT2 清除 → 興奮毒性；長軸突/SARM1 |
| **擴散拓撲** | 跨內嗅 → 邊緣系 → 新皮質（Braak），tau 類普恩樣 | 尾端腦幹 → 藍斑核 → SNpc → 邊緣系 → 皮質（Braak）；腸道/迷走進入 | 紋狀體為中心；皮質擴散較晚 | 運動皮質 + 脊髓（ALS）；額/顳葉（FTD）；TDP-43 遍布譜系 |
| **前驅/節奏** | 約 20 年無症狀類澱粉期；緩慢認知衰退（數十年） | 長達十年的前驅期（RBD、嗅覺喪失、便秘）；緩慢動作進展 | 出生即知基因型；約 30–50 歲發病；15–20 年病程 | 突然；四者中最快（診斷後中位 2–5 年） |
| **關鍵生物標記 [web]** | 類澱粉/tau PET；CSF Aβ42/40、p-tau181/Aβ42；**血漿 p-tau217（2025 年 FDA 審核通過）** | α-syn **SAA**（2024 年資格認定意見）；DAT-SPECT；神經黑色素 MRI；GPNMB | CAG 基因型；CSF/血漿 **NfL**；紋狀體體積 MRI | **血漿 NfL**（已驗證代理指標）；遺傳學；STMN2/UNC13A 隱密外顯子檢測（浮現中） |
| **已核准疾病修飾 [web]** | Lecanemab（2023）、donanemab（2024）——約 25–35% 減緩、ARIA 風險 | **無** | **無**（AMT-130 BLA 已於 2026 年 Q1 提交） | Tofersen（2023，僅 SOD1-ALS，生物標記基準） |
| **症狀治療標準** | 膽鹼酯酶抑制劑（Zunveyl 2025）、memantine | Levodopa/carbidopa、MAO-B、[[COMT Inhibitors]]、多巴胺促效劑、DBS | VMAT2 抑制劑（舞蹈症） | Riluzole、edaravone（RELYVRIO 已於 2024 退市） |
| **晚期管線 [web]** | 抗 tau 免疫治療/ASO；血液生物標記引導的早期治療 | Prasinezumab 第 3 期（PARAISO）；ambroxol 第 3 期（ASPro-PD）；LRRK2 抑制劑（GSK）；幹細胞（bemdaneprocel） | AMT-130（BLA 2026 Q1）；tominersen（限縮）；口服 HTT 下降 | C9orf72 ASO（WVE-004）；FUS ASO（ION363）；ATXN2 ASO；UNC13A ASO（FUNCtion）；masitinib 第 3 期；STMN2 修復（QRL-201） |
| **主導 wiki 主題** | 氧化壓力、表觀遺傳、sirtuins、自噬 | 神經黑色素、adrenochrome/COMT、衰老/SASP | Sirtuins（SIRT1）、自噬/TFEB | 發炎、cGAS-STING、氧化壓力 |

---

## 4. 為何差異重要 — 選擇性易損性與治療邏輯

### 4.1 選擇性易損性是局部化學，而非全面性損傷

Wiki 最強的單一解釋資產是：每種疾病的易損神經元死於*同一壓力的局部版本*。多巴胺神經元被它們自己攜帶的神經傳遞物毒殺（自氧化 → 醌 → α-synuclein 加成物；[[Neuromelanin]] 作為劑量依賴的雙面間諜）；運動神經元在 EAAT2 依賴的麩胺酸清除失效後，被自己的興奮性驅動殺死；紋狀體 MSN 死於轉錄/營養政變（皮質 BDNF 喪失 + mHTT）；海馬神經元臣服於由 Aβ 播種的緩慢金屬-氧化還原/tau 級聯。這重構了「蛋白無所不在，為何只有一種細胞類型消失？」——答案是：*蛋白是火種，而細胞的局部化學是火花*。

### 4.2 治療典範跟隨標靶拓撲

> [!tip]
> **2025–2026 神經學的統一規則 [web]：** 你可以對*細胞外*聚集物進行免疫治療（AD Aβ——已核准；PD α-syn——第 3 期），但*細胞內*毒性蛋白需要核酸療法——ASO（tofersen、tominersen、WVE-004、ION363）或 AAV-microRNA（AMT-130）。凡無單一主導毒性物種之處（散發性 AD、散發性 ALS），領域便退回共享軸介入：蛋白穩態（TFEB/自噬）、粒線體（CoQ10/[[MitoQ]]、肌酸——wiki 的跨 PD/HD/ALS 主題），與抗發炎途徑（masitinib；senolytic/senomorphic，依 wiki 的 PD-衰老工作）。

這解釋了觀察到的成功/失敗模式：HD——純單基因細胞內疾病——最終只有在治療直取核酸（AMT-130）而非蛋白聚集時才成功；AD——細胞外斑塊——以抗體成功但僅適度，因為 tau/TDP-43/血管共病變獨立推進；PD——混合標靶生物學——其管線分散於抗體、伴護蛋白、激酶與代謝下注；ALS——共享最終共同 TDP-43 途徑的多種分子病因*譜系*——按亞型成功（SOD1），如今正收斂於途徑級標靶（ATXN2/TDP-43、UNC13A）。

### 4.3 生物標記革命是共同使能者

上述每一項 2024–2026 突破都倚賴生物標記：donanemab 的以斑塊清除為基準的給藥（類澱粉 PET）、prasinezumab 的快速進展者富集（SAA）、AMT-130 的外部對照方法學（NfL）、tofersen 的加速核准（pNfL）、ATLAS 的症狀前入組（症狀前 NfL 升高）。Wiki 自身的 sirtuin 筆記早已預見此點（血清 SIRT1/3/6 作為 AD 反向相關指標）；圖譜的生物標記節點（[[Positron Emission Tomography]]、[[Magnetic Resonance Imaging]]、[[Flortaucipir]]）是下一步該擴充的結締組織。

---

## 5. Wiki 的圖譜顯示了什麼

### 5.1 Wiki 圖譜拓撲（3,007 節點 / 35,150 邊）

- **樞紐層級**：[[Oxidative Stress]]（591 邊）> [[Parkinson's Disease]]（293）> [[Alzheimer's Disease]]（203）> [[Neurodegeneration]]（189）> [[Neuromelanin]]（134）> [[COMT|COMT（兒茶酚-O-甲基轉移酶）]]（122）> [[Dopamine]]（124）/ [[Mitochondrial Dysfunction]]（136）> [[Alpha-synuclein]]（65）> [[Tau Protein|Tau]]（69）> ALS（50）> [[Huntington's Disease]]（38）。PD 的邊數超過 HD 的 5 倍、FTD 的 6 倍——結構上，這個語料是以 PD 與氧化為中心的語料，AD 是其認知疾病的鏡像。
- **帶機制意涵的社群切分**：PD + [[Alpha-synuclein]] + [[Neuromelanin]] + [[Lewy Bodies]] + COMT/adrenochrome 共享一個社群（1，「Parkinson's Disease」——兒茶酚胺氧化區塊），而 **AD、[[Tau]]、[[Tauopathy]]、[[TDP-43]]、[[C9orf72]]、[[Frontotemporal Dementia]] 皆群聚於社群 7，名為「[[cGAS-STING Pathway]]」**——即圖譜獨立重現了現代洞見：tau/TDP-43 蛋白病變家族是圍繞先天免疫/干擾素訊號組織的。ALS 位於「Inflammation」社群（3）、HD 位於「SIRT1」（8）——圖譜以此表示 ALS 由膠細胞主導、HD 由代謝/表觀遺傳主導。
- **直接的疾病互鎖符合臨床現實**：AD↔FTD、ALS↔FTD、AD↔[[Tau]]、PD↔[[Alpha-synuclein]]、ALS↔[[TDP-43]]↔[[C9orf72]]、FTD↔[[Tau]]/[[Tauopathy]]——圖譜已編碼了 ALS–FTD 譜系與 AD–tauopathy 連續體。

### 5.2 疾病配對的共享鄰居（Jaccard）分析

| 配對 | 共享鄰居 | Jaccard | 重疊最多的概念 |
|---|---|---|---|
| AD 與 PD | 94 | **0.263** | [[Oxidative Stress]]、[[SIRT1]]、[[Autophagy]]、[[Aging]]、[[SIRT3]]、[[Inflammaging]]、[[cGAS-STING Pathway]]、[[Ferroptosis]]、[[Mitophagy]] |
| TDP-43 與 C9orf72 | 7 | **0.250** | [[cGAS-STING Pathway]]、cGAS、STING、第一型干擾素、ALS、FTD |
| PD 與 α-synuclein | 58 | 0.216 | [[Autophagy]]、[[TFEB]]、[[Neuromelanin]]、[[Dopamine]]、[[Substantia Nigra Pars Compacta]]、[[Peroxynitrite]] |
| TDP-43 與 Tauopathy | 6 | 0.182 | cGAS-STING、mtDNA、第一型干擾素、蛋白病變、FTD |
| AD 與 ALS | 29 | 0.143 | [[SIRT1]]、[[SIRT3]]、[[SIRT6]]、cGAS-STING、DNA 損傷、[[Lipid Peroxidation]]、[[Peroxynitrite]] |
| AD 與 HD | 25 | 0.128 | [[SIRT1]]、[[Autophagy]]、[[TFEB]]、[[PGC-1α]]、[[SIRT2]]、[[Unfolded Protein Response]]、[[Calcium]] |
| HD 與 ALS | 6 | 0.080 | [[SIRT1]]、cGAS-STING、UPR、蛋白病變、phenylbutyrate |

解讀：AD–PD 是 wiki 中最糾纏的疾病配對（共享老化/氧化/sirtuin 軸）；HD 最為*獨特*（純遺傳的代謝輪廓）；而 TDP-43–C9orf72–FTD 三元組在圖譜中基本不可分——這是對 ALS–FTD 譜系的準確描繪。

### 5.3 各疾病在 repo 主題中的分布（檔案提及次數）

| 主題 | AD | PD | HD | ALS |
|---|---|---|---|---|
| `_link/`（共享實體） | 158 | 156 | 40 | 30 |
| oxidative_stress | 27 | 26 | 1 | 3 |
| sirtuins | 17 | 19 | 13 | 6 |
| adrenochrome | 16 | 27 | – | 1 |
| epigenetics | 16 | 15 | 5 | 7 |
| autophagy | 15 | 15 | 8 | 2 |
| **neuromelanin** | 4 | **74** | 2 | – |
| comt | 2 | 11 | – | – |
| senescence | 3 | 5 | 2 | 1 |

[[Parkinson's Disease]] 整體上是 repo 中被交叉引用最多的疾病（352 檔案），由神經黑色素與 adrenochrome 主題驅動；[[Alzheimer's Disease]]（264 檔案）在氧化壓力、sirtuin、表觀遺傳與自噬主題間分布最均勻；HD 偏向 sirtuin/自噬；ALS 則最集中於共享的 `_link/` 實體（cGAS-STING/TDP-43 文件）。

### 5.4 Graphify 走訪發現（triples 圖譜）

對 `graphify-out/graph.json` 的 BFS 走訪顯示了四種疾病共享的樞紐集——[[Oxidative Stress]]、[[Mitochondrial Dysfunction]]、[[Mitophagy]]、溶酶體功能障礙、[[Neuroinflammation]]、[[cGAS-STING Pathway]]、[[SIRT1]]、[[TFEB]]、[[Ferroptosis]]——加上疾病特異的口袋：PD 口袋（[[Substantia Nigra Pars Compacta]]、[[MPTP]]、[[Lewy Bodies]]、[[Pathogenic Threshold of Neuromelanin]]、[[Glucocerebrosidase]]）、AD 口袋（[[Amyloid Beta]]、[[Tau]]、[[APOE4]]、[[APOE3 Christchurch]]、[[5xFAD]]、疾病相關微膠細胞）、以及 ALS/FTD 口袋（[[SARM1]]、[[Excitotoxicity]]、[[TDP-43]]、應力顆粒）。Sirtuin 文件三元組另外將 SIRT1/SIRT3 活化與 PD/HD/ALS 的運動神經元代謝異常相連——與 §5.3 的 HD sirtuin 偏向一致。

---

## 6. 收斂 vs. 分歧 — 綜合

> [!important]
> **一句話版本：** 神經退化性疾病共享一個*矩陣*（老化 + 蛋白穩態失效 + 粒線體/氧化壓力 + 先天免疫活化），但在*初始條件*上彼此不同（哪個蛋白錯誤摺疊、在哪個細胞、在什麼局部化學之下），而治療只有在與初始條件匹配時才會成功——細胞外聚集 → 抗體；基因定義的細胞內毒素 → ASO/基因靜默；無主導物種 → 代謝/senolytic/抗發炎的共享軸下注。

| 收斂（共享） | 分歧（疾病特異） |
|---|---|
| 蛋白穩態崩潰；[[Autophagy]]/溶酶體 + UPS 失效 | 哪個蛋白，及其亞細胞/細胞外位置 |
| [[Mitochondrial Dysfunction]] + 受損的 [[Mitophagy]] | Complex I（PD）vs mtDNA-破裂/TDP-43（ALS）vs Δψm/PGC-1α（HD）vs Aβ-ETC（AD） |
| 氧化/硝化壓力、脂質過氧化、[[Ferroptosis]] | 多巴胺自氧化（PD，獨特的化學特異性）vs Fenton-金屬 Aβ（AD）vs NOX2/calpain 興奮毒性（ALS） |
| [[Neuroinflammation]]；微膠/星形膠細胞；cGAS-STING | 疾病的社群權重：免疫主導（ALS/FTD/tau）vs 化學主導（PD）vs 表觀遺傳主導（HD） |
| [[Senescence]]/[[SASP]]/[[Inflammaging]] 經老化膠細胞橋接 | 症狀拓撲：認知（AD）vs 動作（PD/HD）vs 運動神經元喪失（ALS） |
| 錯誤摺疊蛋白的類普恩樣模板化散播 | 散播路徑與節奏：Braak 邊緣-皮質（AD/PD）vs 紋狀體（HD）vs 皮質脊髓（ALS）；數十年 vs 數年 |
| 生物標記作為試驗使能者（NfL、PET、SAA、p-tau217） | 哪個生物標記把關哪種治療：類澱粉-PET → 抗體資格；基因型/NfL → ASO/基因治療 |

---

## 7. Wiki 缺口與建議的充實（後續任務）

1. **HD 建置不足。** [[Huntington's Disease]] 筆記（約 60 行）與 [[HTT]]/[[Huntingtin]] 筆記早於 AMT-130 結果；沒有筆記深入紋狀體 MSN 易損性（[[Medium spiny neurons]] 筆記位於 COMT 主題且以多巴胺為中心）。建議：以 AMT-130/tominersen 傳奇、CAG 閾值/預期、體細胞重複擴增與 BDNF 轉運生物學充實 HD。
2. **無 LATE 筆記。** 老化中的 TDP-43（LATE）如今是晚發型失智的第三大貢獻者，橋接 AD 與 ALS/FTD 兩欄；一篇 [[LATE]] 筆記將創造圖譜目前缺失的直接 AD↔TDP-43 邊（AD 與 TDP-43 僅共享 10 個鄰居，Jaccard 0.051——臨床上重要配對中最弱的一對）。
3. **重複的實體筆記。** `Amyotrophic Lateral Sclerosis` vs `Amyotrophic Lateral Sclerosis (ALS)`、`Huntington's Disease` vs `Huntington's Disease (HD)`、`Tau` vs `Tau Protein`、以及 `Neurodegeneration` vs `Neurodegenerative Disease(s)` 是分開的檔案（§2 檔名唯一性 / §7 合併候選）。整合可清理疾病鄰域。
4. **缺失的治療實體**：[[tofersen|Tofersen]]、prasinezumab、AMT-130、tominersen、masitinib、seed amplification assay、neurofilament light chain（無 `Neurofilament*.md` 存在）、p-tau217——本文中以純文字提及但未連結，因為尚無筆記；依 ≥10 連結規則，它們都是未來的高頻候選。
5. **FTD 深度**：[[Frontotemporal Dementia]] 筆記（表觀遺傳主題）比其圖譜中心性（25 邊，直接的 ALS/AD 橋接）所應有的更薄；bvFTD 行為現象學、GRN/C9orf72 生物學、以及 tau-vs-TDP-43 亞型分類值得專文擴充。

---

## 8. 來源

**Wiki（主要）**：`src/notes/_link/` — [[Neurodegeneration]]、[[Alzheimer's Disease]]、[[Parkinson's Disease]]、[[Huntington's Disease]]、[[Amyotrophic Lateral Sclerosis]]、[[Tau]]、[[Tauopathy]]、[[TDP-43]]、[[C9orf72]]、[[SOD1]]、[[HTT]]、[[Huntingtin]]、[[Alpha-synuclein]]、[[Frontotemporal Dementia]]、[[cGAS-STING Pathway]]、[[SARM1]]、[[Excitotoxicity]]、[[Amyloid Beta]]；`src/notes/neuromelanin/` — [[Neuromelanin]]、[[Pathogenic Threshold of Neuromelanin]]、[[Lewy Bodies]]、[[Glucocerebrosidase]]、[[Ambroxol]]、[[Substantia Nigra Pars Compacta]]、[[MPTP]]、[[6-hydroxydopamine]]；`src/notes/oxidative_stress/` — [[Oxidative Stress]]、[[Reactive Nitrogen Species]]、[[4-Hydroxynonenal]]、[[Malondialdehyde]]、[[S-Nitrosylation]]、[[Ferroptosis]]；`src/notes/senescence/` — 衰老中的粒線體功能障礙文件（Hruby & Higuchi-Sanabria 2025）；`src/notes/sirtuins/`、`src/notes/autophagy/`、`src/notes/comt/`、`src/notes/epigenetics/` 主題筆記。圖譜資料：`wiki-out/graph.json`、`graphify-out/graph.json`（BFS 走訪）。

**Web [web]（2024–2026，2026 年 8 月 29 日存取）：**
- FDA 新聞公告 — Kisunla（donanemab）核准，2024 年 7 月 2 日；lecanemab 转为传统核准；Eisai/Biogen lecanemab 維持給藥（2025 年 1 月）與皮下核准；EMA 授權 2025–2026；aducanumab 市場退出（2024）。fda.gov；alzforum.org；biogen.com；sciencedirect.com（S0092867424001383 / S3050840126000383）
- Nana 等人，「The mechanisms underlying TDP-43-associated neurodegeneration in Alzheimer's disease and related dementias」，*Mol Psychiatry* 30:5500–5512（2025），doi:10.1038/s41380-025-03089-8；Wolk 等人，「Clinical criteria for limbic-predominant age-related TDP-43 encephalopathy」，*Alzheimer's & Dementia*（2025），doi:10.1002/alz.14202；LATE 綜述（*Acta Neuropathologica* 2026，doi:10.1007/s00401-026-03027-0；*Discover Neuroscience* 2026）。
- Pagano 等人，「Prasinezumab slows motor progression in rapidly progressing early-stage Parkinson's disease」，*Nature Medicine*（2024/2025）；Roche PARAISO 第 3 期啟動（2025 年 11 月，約 900 名參與者）；Alzforum prasinezumab 治療頁面。
- Silveira 等人，「Ambroxol as a Treatment for Parkinson Disease Dementia: A Randomized Clinical Trial」，*JAMA Neurology*（2025），doi:10.1001/jamaneurol.2025.1687；Cure Parkinson's ASPro-PD 第 3 期頁面（UCL，330 名參與者，2025）；The Science of Parkinson's 每月回顧（2025 年 12 月）——GSK3357679 LRRK2 抑制劑、GPNMB 溶酶體壓力生物標記；Critical Path Institute α-syn SAA 資格認定意見（2024）。
- uniQure 新聞稿，「Positive Topline Results from Pivotal Phase I/II Study of AMT-130」，2025 年 9 月 24 日（36 個月 cUHDRS 減緩 75%，p=0.003；TFC 減緩 60%，p=0.033；CSF NfL −8.2%；BLA 2026 Q1）；Scientific American，「First Treatment That Slows Huntington's Disease」（2025 年 10 月）；MedCity News 與 huntingtonsdiseasenews.com 報導。
- ClinicalMetric，「ALS Clinical Trials 2026」（tofersen/VALOR/ATLAS、pNfL −55%、C9orf72 ASO 計畫、ION363 FUSION、IONIS-ATXN2Rx、UNC13A FUNCtion）；alsnewstoday.com — masitinib 第 3 期 AB23005 啟動（2025 年 7 月，408 名參與者）；BriefGlance/DelveInsight ALS 管線報告（2025 年 12 月 — RELYVRIO 於 2024 年 4 月退市，四個 FDA 核准 ALS 藥物）；datalookout.com ALS 試驗追蹤器（2026 年 8 月，295 項活躍試驗）；Nature Communications Biology 表 1 — FDA 核准與研究中的 ALS 介入（2025）。
