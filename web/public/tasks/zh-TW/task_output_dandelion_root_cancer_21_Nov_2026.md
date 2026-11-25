---
title: 蒲公英根萃取物與癌症——臨床前機制圖譜、人體證據現況與安全限制
description: 綜整蒲公英（Taraxacum officinale／T. mongolicum）根萃取物在細胞株與異種移植模型中的抗癌證據（透過 caspase-8／FADD 的外源性細胞凋亡、粒線體 ROS、促死亡自噬、PI3K／Akt 抑制、代謝重編程），以及人體證據基礎（一篇個案報告、一項結果未公開的加拿大衛生部第 1 期試驗）與規範任何臨床使用的交互作用及雌激素活性限制。
created: 2026-11-21
updated: 2026-11-25
tags:
  - task-output
  - dandelion
  - taraxacum
  - oncology
  - apoptosis
  - autophagy
  - natural-product
  - clinical-evidence
  - herb-drug-interaction
author: []
type: task-output
---

# 蒲公英根萃取物與癌症——臨床前機制圖譜、人體證據現況與安全限制

日期：21_Nov_2026 09:08 PM PST

> [!warning]
> 知識庫範圍
> 知識庫中沒有蒲公英、*Taraxacum officinale* 或 taraxasterol 的實體筆記，三元圖、Wiki 圖或合併圖資料集中也都沒有這些節點。最接近的既有實體是 [[Quercetin|槲皮素]]、[[Apigenin|芹菜素]] 與 [[Polyphenols|多酚]]（黃酮類部分）、[[Inulin|菊糖]]（根部的果聚糖部分）、[[STAT3|STAT3]]、[[CYP3A4|CYP3A4]]、[[Dasatinib|達沙替尼]] 及 [[Estrogen|雌激素]]。因此，本筆記可作為在 `src/notes/_link/` 新增 `Dandelion` 實體筆記的候選來源；該筆記目前尚不存在。

## 本筆記使用的證據等級

第 1 級＝人體隨機試驗；第 2 級＝人體觀察性／個案證據；第 3 級＝囓齒類體內試驗；第 4 級＝人類或動物細胞的體外試驗；第 5 級＝未經檢驗的假說、機制預測，或缺乏實驗基礎的主張。

迄今沒有任何蒲公英製劑曾用於癌症的人體隨機試驗。人體腫瘤學證據總計包括一篇個案報告（第 2 級，n = 1），以及一項加拿大衛生部第 1 期試驗，其結果從未發表（按設計屬第 1 級，但無法判讀）。除非另有明確標示，以下所有療效主張均屬第 3 級或第 4 級。

## 根部的化學組成

蒲公英根部儲存四類據報具有活性的化合物（Wang et al.，*Nutrients* 2025，17:3769；Fan et al.，*Molecules* 2023，28:5022）。

| 類別 | 代表性化合物 | 根部含量資料 |
|---|---|---|
| 五環三萜類 | taraxasterol、ψ-taraxasterol、taraxerol、α-amyrin、β-amyrin、lupeol | 商業根部粉末中 taraxasterol 含量為 0.5–2 % w/w；根部三萜生合成透過 TcOSC1/3/4 進行 |
| 酚酸類 | caffeic acid（咖啡酸）、chlorogenic acid（綠原酸）、3,4-/3,5-O-dicaffeoylquinic acid、cichoric acid（菊苣酸）、ferulic acid（阿魏酸）、protocatechuic acid（原兒茶酸） | 咖啡醯奎寧酸含量在輕微鹽逆境下達到峰值（1 g/kg NaCl 時 isochlorogenic A 為對照組的 1.44 倍） |
| 黃酮類 | luteolin（木犀草素）、quercetin（槲皮素）、isorhamnetin（異鼠李素）、luteolin-7-O-glucoside、picrasinoside F | 葉與花萃取物中木犀草素衍生物含量為 0.385–0.535 mg/mL；本筆記未定量根部特異性含量 |
| 倍半萜內酯類 | taraxacin、taraxacerin、artecalin、arsanin、desacetylmatricarin | 苦味成分；α-methylene-γ-lactone 結構會使半胱胺酸殘基烷基化 |
| 果聚糖與多醣類 | inulin（菊糖）、2-kestose、nystose、DRP-2b（31.8 kDa）、DRP-3a（6.72 kDa） | 脫脂根部菊糖含量為 16.10 g/100 g 乾重（佔果聚糖總量 63 %）；果聚糖總量為 25.35 g/100 g 乾重 |

由此可導出兩項結果。第一，抗氧化與益生元部分（[[Inulin|菊糖]]、[[Polyphenols|多酚]]）和細胞毒性三萜／黃酮部分在化學上不同，因此蒲公英根茶與標準化根萃取物不可互換。第二，化合物含量會隨植物部位、發育階段、採收季節與萃取溶劑而改變；Windsor 團隊報告其實驗室萃取物的濃度約為市售產品的五倍。

## 臨床前機制圖譜

### 透過 caspase-8 與 FADD 的外源性細胞凋亡

特性最明確的機制是死亡受體介導的細胞死亡。在人類慢性骨髓單核細胞白血病細胞株（MV-4-11、HL-60、U-937）中，蒲公英根水萃取物（DRE）以劑量與時間依賴方式誘導 [[Apoptosis|細胞凋亡]]，早期先活化 [[Caspase-8|caspase-8]]，隨後活化 [[Caspase-3|caspase-3]]；廣效 caspase 抑制劑 Z-VAD-fmk 與顯性負型 [[FADD|FADD]] 細胞均消除此反應，而顯性負型 FADD 細胞也維持完整的粒線體膜電位（Ovadje et al.，*PLoS ONE* 2012，7:e30604，PMID 22546979）。在 Jurkat T 細胞白血病與 B16 黑色素瘤中也報告相同的 FADD 依賴性（Ovadje et al.，*J Ethnopharmacol* 2011，133:86–91）。

在人類胰臟癌（PANC-1、PANC-28）中，DRE 誘導細胞凋亡與自噬，並早期活化 caspase-8；死亡誘導訊號複合體在 [[DR5|DR5]] 上組裝並招募 calmodulin，caspase-8 抑制劑 Z-IETD-fmk 使細胞凋亡比例減半（Ovadje et al.，*Pancreas* 2012，41:1039–1047，PMID 22647733）。這些研究使用的 DRE 製備方式為新鮮根部熱水均質液（100 g 加入 200 mL 蒸餾水，冷凍乾燥，得率 7.34 %），復溶至 100 mg/mL；實驗使用濃度為 0.6–5.0 mg/mL。

同一研究也報告對惡性細胞相較正常細胞的選擇性：在可殺死腫瘤細胞株的濃度下，健康捐血者的非癌變周邊血液單核細胞、正常人體纖維母細胞，以及正常結腸黏膜上皮細胞（NCM460）均未出現細胞凋亡或自噬空泡。

### 粒線體靶向

在結腸癌細胞中，DRE 造成粒線體膜去極化，並提高分離粒線體中的 [[Mitochondrial ROS|粒線體活性氧]]；相對地，NCM460 細胞的分離粒線體未產生可測得的活性氧（Ovadje et al.，*Oncotarget* 2016，7:73080–73100，PMID 27564258）。同一研究中，caspase-8 被活化且 [[Bid|Bid]] 遭截斷，但 caspase-8 抑制劑 IETD-fmk 並未降低 HT-29 細胞的細胞毒性——也就是說，在結腸細胞中，儘管 caspase-8 被啟動，細胞死亡仍不依賴 caspase-8，這與白血病及胰臟癌模型不同。DRE 在 2.5 mg/mL 時抑制癌細胞的 cFLIP 表現，lupeol 在 40 µM 時也有相同作用，合併使用具有加成效果；cFLIP 抑制（即 [[Caspase-8-c-FLIP Rheostat|Caspase-8-c-FLIP Rheostat]] 筆記所涵蓋的節點）是連接外源性路徑的機制橋梁。DRE 未誘導 DNA 損傷。

### 自噬

在慢性骨髓單核細胞白血病（CMML）與胰臟癌細胞株中，細胞凋亡旁同時報告促死亡自噬（MDC 陽性、碘化丙錠陽性囊泡，與 tamoxifen 誘導的存活型自噬形成對比），並伴隨 [[Beclin1|Beclin1]] 上調及 LC3-I 轉換為 LC3-II。另外，ψ-taraxasterol 透過抑制 [[mTOR|mTOR]]／[[4E-BP1|4E-BP1]] 在 MCF-7 細胞中誘導自噬；taraxasterol 在 50 µg/mL 時於 HCT116 與 SW480 結腸癌細胞中誘導 RNF31 的自噬性降解，進而減輕 RNF31 介導的 [[p53|p53]] 泛素化。

### 細胞週期停滯與抗增殖

ψ-taraxasterol 在 1 µM 時使胃癌細胞株（HGC-27、NCI-N87）停滯於 G0/G1，並使 [[Cyclin D1|Cyclin D1]] 與 PCNA 下調、p21 上調。Taraxasterol 透過上調 Hint1 使 SK-Hep1 與 HepG2 肝細胞癌細胞株停滯於 G0/G1，IC50 分別為 17.0 µM 與 9.9 µM，並在 5.0–7.5 mg/kg 下以劑量依賴方式降低帶瘤小鼠的 Ki-67。蒲公英多醣在 50–400 µg/mL 範圍內提高 MCF-7 細胞的 [[p53|p53]]。

### 訊號抑制

不同研究團隊反覆出現三條軸線。DRE 在 MDA-MB-231 細胞中抑制 PI3K/Akt（磷酸化 PI3K 與 Akt 降低），並在舌癌 Tca-8113 細胞中以劑量依賴方式抑制 PI3K/Akt；taraxasterol 在胃癌異種移植中抑制 EGFR/AKT1。在三陰性乳癌（TNBC）細胞的腫瘤活化巨噬細胞微環境下，STAT3 受到抑制，同時 PD-L1 下調、巨噬細胞由 M2 再極化為 M1。DRE 使 FAK 與 src 磷酸化下降，進而降低 [[MMP|MMP]]-2 與 MMP-9 活性。Taraxasterol 在甲狀腺乳突癌中抑制 Wnt/β-catenin 訊號及 MMP-2/MMP-9。

### 代謝重編程

蒲公英萃取物在 TNBC 中阻斷 [[Warburg Effect|Warburg 效應]]軸線，方式是下調 choline kinase alpha（CHKA），使磷酸膽鹼、磷脂醯膽鹼與磷脂醯乙醇胺降低，降低 PC／鞘磷脂比值與膜流動性，並減少 PI3K/Akt 磷酸化及 SREBP/FADS2 表現；重新添加膽鹼與磷酸膽鹼可逆轉 Akt 效應，而 CHKA 敲低可重現此效應（Wang et al.，*Front Pharmacol* 2022，13:942996）。ψ-Taraxasterol 抑制 H1299 與 A549 肺癌細胞的己糖激酶，taraxasterol 則降低 HGC-27 的甘油醛-3-磷酸去氫酶。蒲公英多醣在 200 mg/L 下降低 Huh7 與 HepG2 的鐵調素與 ferroportin 表現，並在 200 mg/kg 下減少 Hepa1-6 與 H22 帶瘤小鼠腫瘤組織的鐵沉積。

### 抗血管新生與免疫效應

蒲公英多醣降低肝細胞癌的 HIF-1α 與 [[VEGF|VEGF]]。來自根部的 isochlorogenic acid A 抑制 FAK/PI3K/Akt/mTOR 訊號，並改善 TNBC 對 PD-1/PD-L1 阻斷治療的反應。在組織層次，DRE 使腫瘤相關巨噬細胞偏向 M1 標記（TNF-α、IL-8、iNOS），並遠離 M2 標記（IL-10、CD206、arginase-1、TGF-β）。

## 附劑量之精選臨床前結果

| 模型 | 製備與劑量 | 結果 | 來源 |
|---|---|---|---|
| HT-29（p53−/−）、HCT116（p53 WT）、NCM460 | DRE 水萃取物，體外 | EC50 2.0 mg/mL（HCT116）、3.5 mg/mL（HT-29）；48 h 內 >95 % 的結腸癌細胞進入程式性細胞死亡，與 p53 狀態無關；NCM460 不受影響；FOLFOX 對正常細胞的影響程度相近 | Ovadje 2016，*Oncotarget* |
| HT-29／HCT116 異種移植，CD-1 nu/nu | 口服 DRE 40 mg/kg/day，飲水給予，75 天 | 腫瘤生長減緩 >90 %；體重無變化；尿蛋白不變；肝臟、腎臟、心臟組織學僅有輕微／偶發病灶 | Ovadje 2016 |
| Balb/c 正常小鼠 | 口服 DRE 40 mg/kg/day，75 天 | 體重、尿蛋白或組織病理學均無毒性訊號 | Ovadje 2016 |
| MV-4-11、HL-60、U-937（CMML） | DRE 0.6–5.0 mg/mL | 96 h 時活力下降 60 %；FADD 依賴性 caspase-8 → caspase-3；促死亡自噬；非癌變 PBMC 不受影響；第二劑殺死存活的細胞群 | Ovadje 2012，*PLoS ONE* |
| PANC-1、PANC-28 | DRE，體外 | 細胞凋亡與自噬、caspase-8 依賴性、DR5/CaM DISC 組裝 | Ovadje 2012，*Pancreas* |
| MCF-7/AZ、LNCaP | 葉、花、根的水萃取物 | 葉萃取物透過 ERK 降低 MCF-7/AZ 生長；根與花萃取物對兩種細胞株的生長均無影響；根萃取物阻斷 MCF-7/AZ 侵入 collagen I；FAK/src 磷酸化與 MMP-2/MMP-9 活性降低 | Sigstedt 2008，*Int J Oncol* 32:1085 |
| DU-145、PC-3 前列腺癌 | DRE 4 mg/mL 體外；口服 40 mg/kg/day，8 週 | 誘導細胞凋亡；DRE 在 4 mg/mL 時增強 mitoxantrone 效果，但未顯著增強 taxol；異種移植腫瘤負荷降低，耐受良好 | Nguyen 2019，*EB-CAM* 2019:2951428，PMID 31391857 |
| MDA-MB-231、MDA-MB-468、MCF-10A | 50 % 乙醇大孔樹脂萃取物 | 24 h 時 IC50 110.8 ± 9.2 µg/mL（MDA-MB-231）及 107.9 ± 5.6 µg/mL（MDA-MB-468）；MCF-10A 在 48–72 h、160 µg/mL 時才受影響 | Wang 2022，*Front Pharmacol* |
| MDA-MB-231 異種移植（NOG）、4T1（BALB/c） | 萃取物 50 與 100 mg/kg，腹腔注射，每日給藥 15–20 天 | 腫瘤體積與重量呈劑量依賴性降低；體重無差異 | Wang 2022 |
| A549 肺癌、L929 纖維母細胞 | Taraxasterol 25 µM | 48 h 時 A549 活力降至 56.26 %；L929 活力 ≥ 80 %；SEM 顯示 A549 表面受損，L929 完整 | Liu 2025，*Pharmaceuticals* 18:663，PMID 40430483 |
| 癌症幹細胞球體（2D 與 3D） | 甲醇與乙醇萃取物 | 兩者均抑制增殖；3D 球體的抗性強得多（72 h 時甲醇 IC50 142.2 ± 17.45 µg/mL，而 2D 為 1012 ± 5 µg/mL）；甲醇活性高於乙醇 | van Trinh 2016，*Biomed Res Ther* |

本表中有兩項結果反對將此萃取物視為一般抗癌藥物。Sigstedt 2008 發現根與花的水萃取物對 MCF-7/AZ 或 LNCaP 細胞生長無影響，活性僅限於侵襲；陽性的增殖結果來自其他製備、其他溶劑與其他細胞株。此外，乳癌幹細胞研究顯示，當相同細胞以球體而非單層培養時，IC50 約右移七倍，因此單層 IC50 值會低估固體腫瘤所需的劑量。

## 人體證據

### 個案報告

Rahmat 與 Damon（*Case Rep Hematol* 2018，2018:7267920）描述一名 76 歲男性，患有原本未接受治療的慢性骨髓單核細胞白血病，並有多種共病，包括已治療的前列腺癌；他自 2009 年攝取木瓜葉萃取物，並自 2015 年初攝取蒲公英根萃取物及其他商業補充品，血液學參數維持穩定，骨髓芽細胞計數改善。該萃取物未標準化，其他介入同時進行，且沒有未治療對照組。報告的臨床醫師將其定位為產生假說的觀察，而非療效證據。

該研究計畫的起源是一則軼事：一名 85 歲女性的白血球計數約 130，在飲用蒲公英根茶三個月後降至約 10，這促使 Caroline Hamm 於 2009 年聯繫 University of Windsor 的 Siyaram Pandey。

### 第 1 期試驗

加拿大衛生部於 2012 年 11 月批准一項第 1 期試驗（Hamm 於 2012 年 7 月提出申請）；該試驗於 2015 年 2 月在 Windsor Regional Cancer Centre 開放轉介，目標納入 30 名已用盡其他治療選項的末期血癌患者。已報告的狀態是：2015 年底描述的反應為短期反應，Pandey 在 2021 年表示招募困難且資金遭到削減。結果尚未發表，該試驗也未出現在 ClinicalTrials.gov 登記資料中。

於 21_Nov_2026 以「dandelion」與「Taraxacum」查詢登記資料，返回五項介入性研究，均非腫瘤學研究：汗皰疹（NCT00442091，n = 4）、神經重症照護中的譫妄組合處置（NCT02594982，其中 DANDELION 為縮寫），以及三項胃腸／腹脹補充品試驗（NCT07370740、NCT07033000、NCT06516744）。登記資料中不存在用於腫瘤學的蒲公英人體試驗。

### 「48 小時殺死 98 % 癌細胞」的主張

該數字可追溯至 Ovadje 2016；此研究報告，在接受 DRE 水萃取物暴露後 48 小時內，培養皿中 >95 % 的結腸癌細胞發生程式性細胞死亡，且口服 DRE 使人類結腸異種移植腫瘤生長減緩 >90 %。此病毒式主張將培養皿中受處理細胞的比例轉換成癌細胞殺死速率，刪除細胞模型限定，並添加「immune booster」與「organ detoxifier」（Full Fact 2021；Snopes；USA Today 2021；Science Feedback 2024；AAP 2025）。MD Anderson Cancer Center（2026 年 10 月）聲明，沒有任何一項蒲公英根癌症研究在人體中進行，並引用 Meroë Morse：「許多植物在早期研究中顯示強烈作用，但這些發現往往無法轉化為對患者有意義的益處，有時甚至可能造成傷害。」Memorial Sloan Kettering 的草本專論指出，蒲公英尚未被證明可治療或預防癌症。

### 缺乏藥動學資料

目前尚無蒲公英根萃取物的體內藥動學研究報告，因此任何成分在接受治療患者體內到達腫瘤的濃度均未知。《Nutrients》2025 年綜述將此與萃取物標準化並列為主要轉譯缺口。

## 安全與交互作用限制

### 雌激素活性

*T. mongolicum* 乙醇萃取物在 MCF-7 細胞中誘導雌激素活性，並增加未成熟雌性大鼠的子宮重量（Oh et al.，*Chin J Nat Med* 2015，13:808–814）。Memorial Sloan Kettering 將此列為蒲公英可能促進荷爾蒙敏感型乳癌生長的理由。由於最強的一組臨床前主張多來自乳癌與 TNBC 細胞株，此限制直接適用於該組證據。

### 藥物代謝與轉運蛋白交互作用

蒲公英在動物研究中抑制 CYP1A2，並在體外抑制 CYP3A4；蒲公英茶萃取物在體外草本茶萃取物研究中抑制 CYP3A4（Dufay et al.，*J Pharm Pharmacol* 2014，66:1478–1470）。蒲公英在動物體內誘導 UGT 活性。兩個方向都很重要：CYP 抑制可提高併用受質的濃度，UGT 誘導則可降低其濃度。

具體已量測的交互作用：

- Dasatinib（達沙替尼）：蒲公英根萃取物在大鼠中使 dasatinib 生體可用率降低約 50 %（Alzoman et al.，*Biomed Chromatogr* 2019，33:e4674，PMID 31376170）。同一研究也探討 imatinib 與 nilotinib。
- Ciprofloxacin（環丙沙星）：*Taraxacum mongolicum* 在大鼠中使 ciprofloxacin 尖峰濃度降低 73 %（Zhu et al.，*J Pharm Sci* 1999，88:632–634）。
- 一名腎臟移植受贈者在飲用含蒲公英的茶後，免疫抑制劑血中濃度達到中毒水平（Kwan et al.，*Ren Fail* 2014，36:309–312）。
- Doxorubicin（阿黴素）：蒲公英水萃取物在所引用的臨床前研究中提高腫瘤細胞對 doxorubicin 的敏感性，並降低 doxorubicin 誘發的心臟毒性——就合併方向而言，這原本可作為支持使用的論點。
- 蒲公英根萃取物在 DU-145 與 PC-3 前列腺癌細胞中增強 mitoxantrone 的療效，但未增強 taxol 的療效；與 paclitaxel 及 mitoxantrone 合併使用可減少異種移植腫瘤體積（Nguyen 2019）。

### 已報告的不良事件

個案報告包括：含蒲公英的肝臟排毒茶導致急性肝損傷（Niazi et al.，*Case Rep Gastroenterol* 2022，16:612–617）；大量飲用蒲公英茶（每日 10–15 杯，為期 6 個月）經由高草酸尿症造成指端壞死（Moriarty et al.，*Br J Dermatol* 2013，169:227–230）；含蒲公英的減重產品後發生出血性膀胱炎（Catania et al.，*South Med J* 2010，103:90–92）；以及菊科敏感個體發生接觸性皮膚炎。常見報告的作用為輕度利尿、低血糖、胸口灼熱與消化不良；其利尿與降血糖作用會與利尿劑及降血糖藥產生加成效果。倍半萜內酯為致敏成分。

### 法規狀態

蒲公英以膳食補充品或食品銷售，並非腫瘤學藥物；沒有任何法規機構承認其為癌症治療，各產品的成分亦未標準化。

## 知識庫連結

- [[Apoptosis|細胞凋亡]] 與 [[Caspase-8|caspase-8]]——承擔大部分根萃取物選擇性細胞毒性的外源性、FADD 依賴性軸線；知識庫的 [[Caspase-8-c-FLIP Rheostat|Caspase-8-c-FLIP Rheostat]] 筆記涵蓋 DRE 抑制的 cFLIP 節點。
- [[Autophagy|自噬]] 與 [[Beclin1|Beclin1]]——在 CMML 與胰臟癌細胞株中，促死亡自噬與細胞凋亡同時被報告；連結至知識庫的 [[Autophagy|自噬]] 與 [[Autophagic Cell Death|自噬性細胞死亡]] 筆記，以及 ψ-taraxasterol 對 [[mTOR|mTOR]]／[[4E-BP1|4E-BP1]] 的抑制。
- [[Mitochondrial ROS|粒線體活性氧]] 與 [[Oxidative Stress|氧化壓力]]——分離粒線體在癌細胞中生成活性氧，但在正常細胞中不生成。
- [[Warburg Effect|Warburg 效應]]、[[Metabolic Reprogramming|代謝重編程]]、[[Hexokinase 2|Hexokinase 2]]、[[Glycolysis|糖解]]——CHKA／磷酸膽鹼與己糖激酶的作用點；知識庫既有的代謝重編程資料是收錄蒲公英筆記的合適位置。
- [[PI3K-Akt Signaling|PI3K-Akt 訊號]]、[[Akt|Akt]]、[[STAT3|STAT3]]、[[p53|p53]]、[[Cyclin D1|Cyclin D1]]、[[Wnt|Wnt]]——反覆出現的訊號軸線；[[STAT3|STAT3]] 已連結至腫瘤微環境脈絡。
- [[Cancer Stem Cells|癌症幹細胞]]——2D 與 3D 球體的 IC50 位移，以及側群／EMT 表現型，是知識庫中最接近球體抗性結果的依據。
- [[Tumor Microenvironment|腫瘤微環境]] 與 [[Macrophage|巨噬細胞]]——TAM 條件下的 M1/M2 再極化及 STAT3/PD-L1 軸線。
- [[Quercetin|槲皮素]]、[[Apigenin|芹菜素]]、[[Polyphenols|多酚]]——黃酮類部分；知識庫的 [[_document_ - Plant flavone apigenin An emerging anticancer agent|植物黃酮 apigenin：新興抗癌藥物]] 已處理 apigenin 自身的生體可用率限制，而這也是限制任何含顯著黃酮負荷之蒲公英萃取物的同一限制。
- [[Inulin|菊糖]]——根部的主要果聚糖（16.1 g/100 g 乾重）；屬於益生元與腸道微生物體軸線，而非直接細胞毒性，也是蒲公英根茶與細胞毒性萃取物為何是不同產品的原因。[[_document_ - Natural Bioactive Compounds Spermidine Fisetin Berberine Urolithin A|天然生物活性化合物——亞精胺、非瑟酮、小檗鹼、尿石素 A]] 架構涵蓋菊糖所屬的代謝–微生物體分支。
- [[CYP3A4|CYP3A4]]、[[Dasatinib|達沙替尼]]、[[Estrogen|雌激素]]——交互作用與雌激素活性限制；知識庫的老化細胞清除試驗筆記中已同時出現 [[Dasatinib|達沙替尼]] 與 [[Quercetin|槲皮素]]，而 dasatinib 生體可用率降低約 50 % 是對一種血液學惡性腫瘤藥物的直接量測。
- 疾病節點：[[Colon Cancer|結腸癌]]、[[Gastric Cancer|胃癌]]、[[Lung Cancer|肺癌]]、[[Prostate Cancer|前列腺癌]]、[[Hepatocellular Carcinoma|肝細胞癌]]、[[Pancreatic Ductal Adenocarcinoma|胰管腺癌]]、[[triple-negative breast cancer|三陰性乳癌]]、[[leukemia|白血病]]、[[Melanoma|黑色素瘤]]、[[Cancer|癌症]]——全都載有蒲公英的臨床前資料；沒有任何一項載有人體療效證據。
- [[FOLFOX|FOLFOX]] 與 [[paclitaxel|紫杉醇]]——Ovadje 與 Nguyen 研究使用的化療比較組；在 DRE 具選擇性的相同劑量下，FOLFOX 對正常結腸上皮無選擇性。

## 來源

原始研究與綜述

- Ovadje P, Ammar S, Guerrero JA, Arnason JT, Pandey S. 蒲公英根萃取物透過活化多條死亡訊號路徑影響結腸癌增殖與存活。*Oncotarget* 2016;7(45):73080–73100. PMID 27564258. PMC5341965.
- Ovadje P, Hamm C, Pandey S. 蒲公英根萃取物在人類慢性骨髓單核細胞白血病（CMML）細胞中有效誘導外源性細胞死亡。*PLoS ONE* 2012;7(2):e30604. PMID 22546979.
- Ovadje P, Chochkeh M, Akbari-Asl P, Hamm C, Pandey S. 以蒲公英根萃取物處理人類胰臟癌細胞，選擇性誘導細胞凋亡與自噬。*Pancreas* 2012;41(7):1039–1047. PMID 22647733.
- Ovadje P, Chatterjee S, Griffin C, Tran C, Hamm C, Pandey S. 蒲公英根萃取物透過活化 caspase-8，在人類白血病細胞（Jurkat）中選擇性誘導細胞凋亡。*J Ethnopharmacol* 2011;133(1):86–91.
- Sigstedt SC, Hooten CJ, Callewaert MC, et al. 評估 Taraxacum officinale 水萃取物對乳癌與前列腺癌細胞生長及侵襲的影響。*Int J Oncol* 2008;32(5):1085–1090. PMID 18425335.
- Nguyen C, Mehaidli A, Baskaran K, et al. 蒲公英根與檸檬草萃取物在前列腺癌中誘導細胞凋亡、增強化療療效，並減少體內腫瘤異種移植生長。*Evid Based Complement Alternat Med* 2019;2019:2951428. PMID 31391857. PMC6662490.
- Wang S, Hao HF, Jiao YN, et al. 蒲公英萃取物透過干擾甘油磷脂與不飽和脂肪酸代謝抑制三陰性乳癌細胞增殖。*Front Pharmacol* 2022;13:942996.
- Wang A, Xiong W, Cheng C, Zou L, Niu B, Liu Y. 蒲公英治療癌症的證據追蹤：從化學組成、生物活性、癌細胞訊號路徑到前瞻性研究。*Nutrients* 2025;17(23):3769. PMID 41374059. PMC12694484.
- Liu J, Yang H, Liu R, et al. 以網路藥理學與多維度實驗驗證探討 Taraxacum officinale 的抗肺癌機制。*Pharmaceuticals* 2025;18(5):663. PMID 40430483. PMC12114748.
- Renna M. Taraxacum officinale L. 在白血病與淋巴瘤中的現有知識及園藝學展望。*Front Plant Sci* 2026;16:1740142.
- Zhu H, Zhao H, Zhang L, et al. 蒲公英根萃取物透過靶向 lncRNA-CCAT1 抑制胃癌細胞增殖與遷移。*Biomed Pharmacother* 2017;93:1010–1017. PMID 28724210.
- Alzoman NZ, Maher HM, Shehata SM, Abanmy NO. UPLC–MS/MS 研究蒲公英根萃取物對大鼠選擇性不可逆酪胺酸激酶抑制劑 dasatinib、imatinib 與 nilotinib 血漿濃度的影響：藥動學交互作用之潛在風險。*Biomed Chromatogr* 2019;33:e4674. PMID 31376170.
- Zhu M, Wong PY, Li RC. Taraxacum mongolicum 對大鼠 ciprofloxacin 生體可用率與分布之影響。*J Pharm Sci* 1999;88(6):632–634.
- Oh SM, Kim HR, Park YJ, et al. 蒲公英（Taraxacum mongolicum）乙醇萃取物在 MCF-7 細胞與未成熟大鼠中誘導雌激素活性。*Chin J Nat Med* 2015;13(11):808–814.
- Niazi B, Ahmed K, Ahmed M, Ali S, Song K, Elias S. 草本肝臟排毒茶導致藥物誘發性肝損傷。*Case Rep Gastroenterol* 2022;16(3):612–617.
- Moriarty B, Pinney JH, Owen-Casey MP, et al. 蒲公英茶導致數位壞死。*Br J Dermatol* 2013;169(1):227–230.
- Kwan LP, Mok MM, Ma MK, et al. 腎臟移植受贈者飲用草本茶相關急性藥物毒性。*Ren Fail* 2014;36(2):309–312.
- Dufay S, Worsley A, Monteillier A, et al. 草本茶萃取物在體外抑制 cytochrome P450 3A4。*J Pharm Pharmacol* 2014;66(10):1478–1490.
- Rahmat LT, Damon LE. 在原本未接受治療的慢性骨髓單核細胞白血病中使用天然健康產品，特別是木瓜葉萃取物與蒲公英根萃取物。*Case Rep Hematol* 2018;2018:7267920.
- Fan M, Zhang X, Song H, Zhang Y. 蒲公英（Taraxacum 屬）：化學成分與藥理作用綜述。*Molecules* 2023;28:5022.
- Schütz K, Carle R, Schieber A. Taraxacum：植物化學與藥理特性綜述。*J Ethnopharmacol* 2006;107:313–323.
- Appl Sci 2025;15:4091. 以「綠色」萃取技術從蒲公英（Taraxacum officinale）根部分離之菊糖型果聚糖的物理化學、功能性與抗菌特性。
- Fulga A, Casian A, Casian I, Protopop S, Gudumac V, Tagadiuc O. Taraxacum officinale 對膠質母細胞瘤細胞培養之作用及其與羥基肉桂酸含量之相關性。*Med Sci Forum* 2023;21(1):18.
- Chen Q, Wang M, Shen C. Bauerane 透過 PI3K/AKT 與 STAT3 訊號路徑，誘導 A549 人類肺癌細胞 S 期細胞週期停滯、細胞凋亡並抑制增殖。*Med Sci Monit* 2020;26:1–7.
- Wang T, Sun J, Wang L, et al. Taraxacum officinale 中 isochlorogenic acid A 改善免疫反應並增強 PD-1/PD-L1 阻斷療效於三陰性乳癌的治療潛力。*Front Immunol* 2025;16:1529710.

登記資料、機構與事實查核來源

- ClinicalTrials.gov API v2，查詢「dandelion」與「Taraxacum」，取得日期 21_Nov_2026（5 項研究，均非腫瘤學研究：NCT00442091、NCT02594982、NCT07370740、NCT07033000、NCT06516744）。
- Memorial Sloan Kettering Cancer Center。蒲公英——宣稱的益處、副作用及其他資訊。更新於 2025 年 5 月 23 日。
- MD Anderson Cancer Center。蒲公英根：益處、副作用與如何使用。2026 年 10 月 21 日。
- University of Windsor Daily News。用於癌症的蒲公英萃取物人體臨床試驗。2015 年 2 月 19 日。CBC News。加拿大衛生部批准人體蒲公英萃取物試驗。2012 年 11 月 12 日。CBC News。30 名患者將測試蒲公英殺死癌症的潛力。2015 年 2 月 17 日。
- Full Fact。蒲公英根並非已證實的癌症療法。2021 年 5 月 21 日。Science Feedback。沒有研究顯示蒲公英可殺死癌細胞或治療人體癌症。2024 年 5 月 13 日。USA Today。事實查核：關於蒲公英根抗癌潛力的有限研究。2021 年 5 月 4 日。AAP。蒲公英茶治癌主張遭推翻。2025 年 6 月 12 日。

## 連結摘要

- [[Dandelion|蒲公英]]——目前沒有筆記。適合在 `src/notes/_link/` 新增的候選實體筆記，內容包括三萜／黃酮／果聚糖化學組成、FADD-caspase-8 機制、缺乏人體試驗資料，以及交互作用限制。
- [[Taraxasterol|Taraxasterol]]——目前沒有筆記；此為根部主要且已分離出的抗癌三萜，在體外對胃癌、肝細胞癌、結腸癌、肺癌、子宮頸及膀胱細胞株具有活性。
- [[Luteolin|木犀草素]]——筆記位於 `src/notes/comt/Luteolin.md`；在 TNBC 網路藥理學分析中，於排名前列的化合物裡 degree 與 betweenness 皆居首，且是 CHKA 最佳對接候選（−6.94 kcal/mol），並降低 MDA-MB-231 的 CHKA、SREBP 與磷酸化 Akt。
- [[Caffeic Acid Phenethyl Ester|咖啡酸苯乙酯]]——知識庫中的咖啡酸酚類條目；一般咖啡酸（根部的酚酸）沒有筆記。
- 五環三萜、[[Chlorogenic Acid|綠原酸]]、[[Chicoric Acid|菊苣酸]]、[[Isorhamnetin|異鼠李素]]、倍半萜內酯——皆無筆記。
- 建議加強的連結：[[Apoptosis|細胞凋亡]] ↔ [[Caspase-8|caspase-8]] ↔ [[FADD|FADD]]（DRE 軸線）；[[Autophagy|自噬]] ↔ [[mTOR|mTOR]]（ψ-taraxasterol）；[[Warburg Effect|Warburg 效應]] ↔ [[Hexokinase 2|Hexokinase 2]]（DRE 與 taraxasterol）；[[Tumor Microenvironment|腫瘤微環境]] ↔ [[STAT3|STAT3]] ↔ [[Macrophage|巨噬細胞]]（TAM 再極化）；[[CYP3A4|CYP3A4]] ↔ [[Dasatinib|達沙替尼]]（已量測交互作用）；[[Estrogen|雌激素]] ↔ [[triple-negative breast cancer|三陰性乳癌]]（針對最強療效主張的雌激素活性限制）。
