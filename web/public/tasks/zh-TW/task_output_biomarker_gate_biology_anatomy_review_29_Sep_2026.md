---
title: 生物標記關卡 — 生物學與解剖學對應，附互動頁面的結構審查
description: 逐關卡審查 web/public/pages/en-US/hard-coded-biomarker-gates.html 中的硬編碼個體生物標記。每一關卡都說明其生物學基質、該值表現並執行作用所在的解剖構造、路徑軸，以及它所調節的療法類別（衰老溶解、衰老修飾、粒線體激效、氧化還原、藥動力學、飲食）。文末列出在該頁面中發現的結構缺陷——面板與追蹤器涵蓋範圍不一致、一項臨床上錯誤的類別歸屬、無法劃分的關卡類別、方向顛倒的 KL-VS 頻率，以及 vault 尚未承載的未定義解剖主題。
created: 2026-09-29
updated: 2026-09-29
tags:
  - task-output
  - biomarkers
  - pharmacogenomics
  - anatomy
  - cell-death
  - senescence
  - sirtuins
  - autophagy
  - oxidative-stress
  - mitohormesis
source: web/public/pages/en-US/hard-coded-biomarker-gates.html
---

# 生物標記關卡 — 生物學與解剖學對應

彙整於 29_Sep_2026 09:00 AM PDT。主題：`web/public/pages/en-US/hard-coded-biomarker-gates.html` 中的每一個關卡與每一條療法分支（GATES 陣列：17 筆；THERAPIES 陣列：23 筆），並對照 vault 中實際的筆記檔名來閱讀。

以下每一個關卡都沿四個軸做對應，而這四軸正是該頁面本身並未攜帶的：

- **基質**——其狀態被固定的基因、酵素或生物體。
- **解剖**——該值表現所在的組織、細胞類型與器官，以及後果實際執行的位置。
- **路徑軸**——該關卡實際坐落其上的 vault 機制筆記。
- **被調節的療法類別**——衰老溶解、衰老修飾、粒線體激效、氧化還原、藥動力學、飲食，或診斷。

vault 是以機制為組織的，幾乎沒有解剖學，因此下列解剖欄位主要是從機制筆記重建而來，而非讀自解剖筆記。[Anatomy gaps](#anatomy-gaps-in-the-vault) 一節列出了那些 tissue 筆記——它們是讓這套對應從「借來的」變成「原生」的必要條件。

---

## 核型與生殖階段（46,XX / 46,XY / 45,X / 47,XXY）

**基質。** 染色體套數，加上功能上的當前性類固醇milieu。它不是通常意義下的基因型——而是一種染色體狀態，決定哪一種類固醇為優勢者，而生殖階段又讓那種類固醇本身成為一個會變動的取值。

**解剖。** 這個關卡是*荷爾蒙的*，而荷爾蒙產生於 [[Hypothalamus]] 驅動的內分泌組織：XX 為卵巢濾泡，XY 為睪丸，而 [[Sex Steroid Ablation]] 是 XY 版的停經。在下游，讀取該荷爾蒙的組織幾乎是所有組織：[[Estrogen Receptor]] 訊號在 [[Myocardium]]（[[Cardiac Function]]）、骨骼與腦中皆有記錄。該頁面年齡相關心臟發現所描述的特定解剖病灶，是老化女性的心室——[[SIRT1]]、[[SIRT3]] 與 [[MnSOD]] 降低，伴隨 [[NF-κB]] 活化與巨噬細胞累積，存在於女性而非男性的心肌中。

**路徑軸。** 先是 sirtuin–[[NAD+]] 軸，然後是其下游的一切：[[SIRT3-SIRT4 Ratio]]、[[AMPK]]／[[mTORC1]]／[[Autophagy]]、[[Mitohormesis]]。有報告指出與年齡相關的心臟變化因性別而異：[[SIRT1]]、[[SIRT3]] 與 SOD2 降低，伴隨 [[NF-κB]] 活化與巨噬細胞累積，描述於老化女性而非老化男性的心室（*Aging*, 2019; PMC6503880）。

**被調節的療法類別。** 這是該頁面上解剖影響範圍最廣的關卡，也是使用者詢問其細胞死亡對應的那一個。它決定的是**哪些死亡機制可用**，而非其運作速度：

- 受到同樣傷害的 **XX 神經元**會啟動 **caspase**——[[Caspase-8]] 與 [[Caspase-3]]——即 [[Apoptosis]]／[[Apoptosome]] 路徑。
- **XY 神經元**則啟動 [[PARP1]] 與 [[Apoptosis-Inducing Factor]]——[[Parthanatos]] 路徑，鄰近的型式則是 [[Necroptosis]]。
- [[SIRT6]] 過度表現只在雄性中延長壽命（Kanfi, *Nature* 2012）；熱量限制與雷帕黴素分別在雄性與雌性中產生較大的延壽幅度。

因此解剖層面的陳述是：**同一個傷害，在同一個器官中，在兩種核型下，徵召了兩套不同的細胞死亡程式**——在 XX 是 caspase 依賴的凋亡程式，在 XY 是 PARP1／AIF 依賴的 parthanatos 程式。這是附在該頁面最具人口普遍性的關卡上最吃重的單一生物學主張，同時也是最難驗證的：它建立在體外傷害範式之上，而非人類結果數據，而該頁面自身的 A 級標示並未反映這一點（見 [Structural findings](#structural-findings)）。

**相關 vault 筆記。** [[Estrogen]]、[[Estrogen Receptor]]、[[Testosterone]]、[[Sex Steroid Ablation]]、[[Sirtuins]]、[[NAD+]]、[[SIRT3-SIRT4 Ratio]]、[[Apoptosis]]、[[Necroptosis]]、[[Parthanatos]]、[[Apoptosis-Inducing Factor]]、[[Caspase-8]]、[[Caspase-3]]、[[PARP1]]、[[SIRT6]]、[[MnSOD]]、[[Myocardium]]、[[Cardiac Function]]、[[Hypothalamus]]。

---

## COMT Val158Met（rs4680）

**基質。** [[COMT]]，一種可溶性與膜結合型的兒茶酚-O-甲基轉移酶。rs4680 是一個編碼區替換（Val158Met），會在熱力學上使該酵素去穩定。

**解剖。** 在 [[Liver]] 與 [[Kidney]]（典型的兒茶酚胺清除器官）表現量最高，在腦中——[[Dopamine]] 豐富的 [[Prefrontal Cortex]]——以及胎盤組織中也有大量表現。紅血球中亦有表現，這就是為何活性表型可以從口腔黏膜塗片測得，而不必做活檢。藥理後果則落在肝臟：[[Alpha-tocopherol]] 在 Val/Val 中的清除更快，而與 [[Estrogen]] 的交界是直接的——兒茶酚雌激素由 COMT 依賴的 [[Methylation]] 中和，因此慢型 COMT 意味著雌激素代謝物清除更慢。

**路徑軸。** 兒茶酚胺氧化、甲基化循環，以及 [[Oxidative Stress]] 的維生素 E 分支。三個療法類別都掛在這一個酵素上：

- **抗氧化劑**——高劑量 α-生育酚（[[Alpha-tocopherol]]）。
- **衰老溶解劑**——[[Fisetin]] 是經驗證的 COMT 受質抑制劑（IC<sub>50</sub> 2.6–5.8 µM），因此 COMT 活性直接決定衰老溶解劑的暴露量。這是該頁面上最饒味的關卡—類別耦合：一個兒茶酚-O-甲基轉移酶的基因型，卻關卡著一種黃酮類衰老溶解劑，因為該化合物的作用機制正是抑制那個清除衰老溶解機制本身所依賴的兒茶酚的酵素。
- **甲基供體**——[[Methylation Cycle]] 介入（甲基fol酸、甲基 B12、SAMe、[[Betaine]]）。

**檢測一致性——vault 最佳的案例。** 酵素活性在基因型之間相差 3–4 倍，而類別內變異有限，因此基因型是活性的充分替代指標。對比 [[PON1]]（活性在基因型*內部*的變異比*之間*更大）與 SOD2 rs4880（方向在各主要研究間不一致）。這就是為什麼 [[Val158Met]] 是範本而另兩個不是。

**相關 vault 筆記。** [[COMT]]、[[Val158Met]]、[[Alpha-tocopherol]]、[[Fisetin]]、[[Quercetin]]、[[EGCG]]、[[Dopamine]]、[[Prefrontal Cortex]]、[[Estrogen]]、[[Methylation]]、[[Methylation Cycle]]、[[Folate]]、[[Vitamin B12]]、[[Betaine]]、[[Liver]]、[[Kidney]]。

---

## 尿石素代謝型（UM-A / UM-B / UM-0）

**基質。** 不是人類基因——而是一個**細菌群集**。是否攜帶 *Gordonibacter urolithinfaciens* 決定了飲食性 [[Ellagitannins]] 是否會變成 [[Urolithin A]]。UM-B 則以 *Ellagibacter isourolithinifaciens* 與 [[Enterocloster]] 取代，產生 [[Isourolithin A]]；UM-0 則完全沒有尿石素。

**解剖。** 轉換發生在**結腸**，作用於來自石榴、核桃與草莓、進入腸腔的沒食子單寧受質——第一步不需要任何宿主組織。之後的代謝物則發揮全身性作用，而這正是解剖分布變得重要之處：[[Urolithin A]] 經由 [[AMPK-PGC-1α Pathway]]／[[PGC-1α]] 軸誘導 [[Mitophagy]]，受體密度最高者在 [[Skeletal Muscle]]、[[Adipose Tissue]]、[[Liver]] 與腦。[[Mitochondrial Uncoupling]] 效應同樣以肌肉與脂肪組織為主。

**路徑軸。** [[Mitophagy]] → [[PINK1]]／[[Parkin]]、[[AMPK-PGC-1α Pathway]]、[[mTORC1]] 訊號、[[NAD+]]。

**被調節的療法類別。** 與衰老溶解劑相鄰並屬粒線體激效性，而非嚴格意義的衰老溶解劑：尿石素 A 是已發表的粒線體自噬／抗衰老試驗所使用的代謝物，而飲食給藥在 UM-0（約 50%）中彻底失敗，在 UM-B（約 10%）中產生錯誤的化合物。直接補充 UA 可繞過結腸步驟，且適用於所有代謝型。

**該頁面處理得很好的測量提醒。** 某美國世代中僅 12% 在基線時有可檢出的 UA 葡萄糖醛酸苷，而在標準化石榴挑戰後約 40% 會轉換——因為血清值或空腹尿液值是*一餐的快照*，不是表型。在低攝取日測量的製造者會被歸類為非製造者。這是該頁面上唯一一處「測量方法而非生物學才是那個發現」的地方。

**相關 vault 筆記。** [[Metabotypes]]、[[Urolithins]]、[[Urolithin A]]、[[Ellagitannins]]、[[Isourolithin A]]、[[Gordonibacter urolithinfaciens]]、[[Ellagibacter isourolithinifaciens]]、[[Gut Microbiome]]、[[Intestinal Barrier]]、[[Gut Dysbiosis]]、[[Mitophagy]]、[[PINK1]]、[[Parkin]]、[[AMPK-PGC-1α Pathway]]、[[PGC-1α]]、[[Mitochondrial Uncoupling]]、[[Skeletal Muscle]]、[[Adipose Tissue]]、[[Liver]]。

---

## MC1R 變異類別（R 類 / r 類 / 野生型）

**基質。** [[MC1R]]，一個位於黑皮質素訊號上的七次跨膜 GPCR。R 類等位基因（R151C、R160W、D294H）為功能缺失；r 類則為部分功能。

**解剖。** 典型部位是[[黑色素細胞]]——位於表皮基底層與毛囊，而較不顯而易見的是在**視網膜**：[[Retinal Pigment Epithelium]] 與 [[Retinal Photoreceptors]] 是與黑色素細胞相鄰的色素細胞，帶有相同的生物合成程式。第二個、獨立的解剖部位是**腦**：MC1R 在神經元與 [[Astrocytes]] 上表現，而功能缺失與 [[Parkinson's Disease]] 風險、以及 [[Substantia Nigra]] 中多巴胺神經元的脆弱性相關。vault 筆記明確指出這個連結：皮膚與腦的黑色素生成共享 [[Tyrosinase]] 依賴的兒茶酚氧化路徑，而 [[Substantia Nigra]] 與 [[Locus Coeruleus]] 中的 [[Neuromelanin]] 正是腦端的終末產物。

**路徑軸。** [[Melanogenesis]]：MC1R → cAMP → [[Tyrosinase]] → [[Eumelanin]] vs [[Pheomelanin]]。褐黑素的合成是產醌的：它在*合成過程中*產生活性氧並耗竭 [[Glutathione]]，與 UV 無關。因此有與 UV 無關的 [[Melanoma]] 風險（≥2 個變異者 OR 2.13）以及較高的基線氧化負荷。

**被調節的療法類別。** 暴露／預防決策（日光浴、曬太陽），以及針對多巴胺神經元的 MC1R 激動劑神經保護。這個解剖反轉值得一提：一個**皮膚科**變異卻是一個**神經科**風險因子，而連結兩者的機制是一條在黑質而非在皮膚中運行的色素生物合成路徑。

**相關 vault 筆記。** [[MC1R]]、[[Melanocyte]]、[[Melanocytes]]、[[Melanogenesis]]、[[Tyrosinase]]、[[Eumelanin]]、[[Pheomelanin]]、[[Neuromelanin]]、[[Melanins]]、[[Dopachrome tautomerase]]、[[Substantia Nigra]]、[[Locus Coeruleus]]、[[Astrocytes]]、[[Parkinson's Disease]]、[[Alpha-synuclein]]、[[Glutathione]]、[[Retinal Pigment Epithelium]]、[[Retinal Photoreceptors]]、[[UV Light]]、[[UV-induced photoaging]]、[[Melanoma]]。

---

## NQO1 C609T（rs1800566, Pro187Ser）

**基質。** [[NQO1]]（DT-diaphorase），一種受 NRF2 調控的黃素蛋白。T/T 在功能上是 null——在唾液、[[Bone Marrow]]、肺上皮與內皮中都沒有可檢出的 NQO1 蛋白（Siegel 1999）。

**解剖。** 胞質內且普遍存在；在處理異生物的器官中最高——[[Liver]]、[[Gastrointestinal Tract]] 壁、腎與肺上皮。它所置身的兒茶酚氧化程式則屬於腎上腺髓質與中樞神經系統：[[Adrenochrome]] 與 [[Aminochromes]] 才是相關的醌，這就是為什麼 vault 的醌類材料被歸檔在兒茶酚主題之下，而非歸在一般氧化壓力之下。

**路徑軸。** 醌的氧化還原化學。分岔是絕對的：

- **酵素存在**（C/C、C/T）→ **二電子**還原成穩定、可解毒的氫醌。訊號被送達*並且*可被終止。
- **酵素缺席**（T/T）→ 由 [[Cytochrome P450]]／b5-還原酶進行單電子還原，生成會進行氧化還原循環並產生 [[Superoxide Radicals]] 的**半醌自由基**。

**被調節的療法類別。** 兩類，而第二類才是該頁面真正的主題——**氧化還原訊號**協定，把供體與終止劑配對：

- [[Methylene blue]] + [[Carbazochrome]] 作為訊號供體，[[Aminoguanidine]] 作為終止劑。在 T/T 中，設計中的*終止劑*那一半沒有受質可用，因為醌從未被轉化成可被終止的東西。這個協定於是變成單向的氧化負荷。這是**可採用性**的決定因素，而非劑量——該頁面在此的分類是正確的。
- 由 [[NQO1]] 生物活化的醌類化療（絲裂黴素、膀胱灌注）。T/T 是相反的情況：生物活化正是細胞毒機制，因此 T/T 預測該藥物**在其自身條件下無效**，而旁觀者效應持續存在。這是正確的，也很好地說明了同一個基因型在一個適應症中具有保護作用、在另一個中則構成排除事由。

**相關 vault 筆記。** [[NQO1]]、[[Quinone]]、[[Adrenochrome]]、[[Aminochromes]]、[[Carbazochrome]]、[[Aminoguanidine]]、[[Methylene blue]]、[[Cytochrome P450]]、[[NRF2]]、[[Superoxide Radicals]]、[[Reactive Oxygen Species]]、[[ROS]]、[[Glutathione]]、[[Bone Marrow]]、[[Gastrointestinal Tract]]、[[Liver]]、[[G6PD]]、[[Adrenochrome Hypothesis]]。

---

## CYP3A5 狀態與 FKBP1A 功能缺失

**基質。** [[Cytochrome P450]] 3A5 的表現狀態（*1 表現型 vs. *3/*6/*26 非表現型），另加獨立的 [[FKBP12]] 功能缺失。兩條不同路徑的兩道不同關卡，卻共用同一列療法。

**解剖。** 關卡所在之處是**肝臟與小腸壁**——清除一個可 systemic 藥物的兩個器官。FKBP1A 處處都在作用，但其功能後果只在 mTORC1 受體鄰近處才看得見：[[T Cell]] 增殖、[[Osteoclast]] 分化、肝細胞與 [[Neuron]] 的自噬程式。全血 sirolimus 谷濃度測量的是全身暴露；[[p70S6 kinase]] Thr389 讀數測量的是被抽樣有核細胞中的下游接合。

**路徑軸。** [[mTORC1]] 與 [[Autophagy]]；以及 FKBP12–sirolimus 複合物的形成，那是第一步。[[Rapamycin]] 結合 FKBP12，複合物結合 mTOR FRB，mTORC1 被抑制，ULK1 去抑制，[[Autophagy]] 得以進行。CYP3A5 的作用在更早一階且正交——它決定第一步濃度上存在多少藥物。

**被調節的療法類別。** 以 mTORC1 為標的的介入（[[Rapamycin]] 及其類似物）。兩種失敗模式在解剖上完全相同，在藥理上卻相反：

- **CYP3A5 表現型**→ 藥動力學。清除快 40–60%；在多數給藥間隔中谷濃度低於目標接合範圍；Mannick 2 mg 每週的世代中有 22% 谷濃度 < 1 ng/mL。被記錄為無反應。**可藉劑量校正。**
- **FKBP12 LOF**→ 藥效學。複合物無法形成。**在任何劑量層級都無法校正。**

該頁面堅持「沒有谷濃度與 p70S6K1 測量的無反應者分類，是關於暴露的假說而非對它的測量」，這是正確的藥動力學立場，也是可推廣的解剖要點：*肝臟決定劑量，血液決定劑量是否足夠，而兩者都不等同於標的。*

**相關 vault 筆記。** [[Cytochrome P450]]、[[Rapamycin]]、[[FKBP12]]、[[mTOR]]、[[mTORC1]]、[[mTORopathies]]、[[Autophagy]]、[[ULK1]]、[[S6K1]]、[[p70S6 kinase]]、[[AMPK]]、[[IRS1]]、[[Liver]]、[[T Cell]]、[[Osteoclast]]、[[Neuron]]、[[Hepatocyte]]、[[Skeletal Muscle]]。

---

## HFE C282Y / H63D

**基質。** [[HFE]]，一種第一型跨膜糖蛋白（MHC 第一類結構，6q21.3），它把自身呈現給 [[Ferroportin]] 以閘控 hepcidin 訊號。C282Y 破壞了 hepcidin 結合表面。

**解剖。** 有兩個部位重要。**十二指腸腸上皮細胞**是調控部位——該處的 HFE 表現控制頂端膜 [[Ferroportin]] 對飲食鐵的輸出，因而控制 hepcidin 的產生。**肝細胞**則是儲存部位與受損部位：[[Liver]] 中的實質鐵負荷正是驅動內分泌（糖尿病）、心臟（[[Myocardium]]）與皮膚科表現的原因。之後周邊負荷再波及 [[Heart]]、胰島組織、關節與皮膚。該頁面連結到鐵死亡的那個游離鐵池並非血漿濃度——而是受影響實質組織中粒線體／溶體區室內的次細胞池。

**路徑軸。** 鐵的處理：[[DMT1]] 攝取 → 胞質池 → [[Ferritin]] 隔離 vs. [[Ferroportin]] 輸出，由 hepcidin 閘控，而 hepcidin 又由 HFE 閘控。在下游，這個池是 [[Ferroptosis]] 與 [[Lipid Peroxidation]] 的 Fenton 反應受質——C282Y 同型合性自三十歲起就降低了鐵死亡誘導的門檻，且不需要任何飲食貢獻。

**被調節的療法類別。** 與鐵死亡相關的協定，兩個方向皆有。該頁面的分類正確，且略反直覺：之所以歸為*被錯過的療法*類，是因為一個已有適應症的**以鐵為標的**介入（放血療法，條件為男性與停經後女性 TSAT > 45% 且鐵蛋白 > 300 ng/mL，停經前女性 > 200 ng/mL）正在被扣住不给，而一個只做抗氧化的處方只處理了下游後果而非累積本身。鐵死亡門檻才是那道關卡；被錯過的介入是一套減除協定，而不是抗氧化劑。

**該頁面自身的解剖交叉連結。** 月經失血是一個鐵匯，因此普遍的鐵負荷過量在男性中比在停經前女性中更常見。這把 HFE 關卡連到核型關卡——也是該頁面上唯一一處顯示兩道關卡是*組合*而非僅僅並存的地方。

**相關 vault 筆記。** [[HFE]]、[[Iron]]、[[Ferritin]]、[[Ferroportin]]、[[DMT1]]、[[Fenton Reaction]]、[[Ferroptosis]]、[[GPX4]]、[[ACSL4]]、[[FSP1]]、[[Lipid Peroxidation]]、[[Lipid hydroperoxide]]、[[Lipid peroxyl radical]]、[[4-Hydroxynonenal]]、[[Liver]]、[[Hepatocyte]]、[[Myocardial Ischemia-Reperfusion Injury]]、[[Myocardium]]、[[Cellular Senescence]]。

---

## SOD2 Ala16Val（rs4880）

**基質。** MnSOD 的粒線體基質定位序列——Acp–Leu–Ala–Pro–*Val* → 第 16 位的精胺酸被移除，粒線體輸入效率下降 30–40%。

**解剖。** 位置獨特地好：SOD2 是粒線體的，因此這個變異在**每一個有核細胞**中都以全強度表現於粒線體基質——在氧化負荷最高的 [[Skeletal Muscle]]、[[Myocardium]] 與 [[Kidney]] 中功能相關性最高。這個變異是一個**轉運**病灶，而非催化病灶：抵達的酵素較少，膜間腔／基質的超氧穩態上升，而損傷部位是粒線體脂質與 mtDNA。

**路徑軸。** [[MnSOD]] 與 [[SIRT3-SIRT4 Ratio]]。該比值可行動的讀數是 MnSOD 在 Lys68/Lys122 的乙醯化——因此輸入酵素 30–40% 的變化，對應於 [[Hormesis]] 被觀察到的窗口寬度 30–40% 的變化。這個關卡設定的是**激效窗口寬度**，這與設定劑量是不同的事。

**被調節的療法類別。** 粒線體激效性劑量，分級判定。列為 C 級有其理由：rs4880 對實測 MnSOD 活性的效應方向在各主要研究間不一致，所以請測量酵素。該頁面的規則——「在基因型可預測功能之處，基因型即足夠；在不可預測之處，測量酵素」——是正確的一般政策，且應套用於每一列 C 級條目。

**相關 vault 筆記。** [[MnSOD]]、[[SIRT3-SIRT4 Ratio]]、[[SIRT3]]、[[SIRT4]]、[[Hormesis]]、[[Mitohormesis]]、[[Superoxide Radicals]]、[[Reactive Oxygen Species]]、[[Mitochondria]]、[[Skeletal Muscle]]、[[Myocardium]]、[[Kidney]]、[[Oxidative Phosphorylation]]、[[Glutathione]]。

---

## TMAO 製造者狀態

**基質。** 腸道微生物的產三甲胺菌群（CutC/CutD），相對於還原 TMA 的菌群（*Eubacterium limosum*、Lactobacillus）。

**解剖。** 與尿石素相同的雙區室結構，但方向相反。**生成**部位是結腸腸腔；**解毒**部位是肝臟，經由肝臟的含黃素單加氧酶 3（FMO3）；**標的組織**則是血管內皮與血管壁，TMAO 在此驅動內皮功能障礙，其次是 [[Skeletal Muscle]] 與 [[Kidney]]（腎臟清除是 TMAO 排除的主要途徑之一，因此腎功能不全會在與飲食無關的情況下提高暴露）。該頁面指名的機制——TMAO 加速衰老，以及血管平滑肌中由 [[SIRT1]] 介導的減弱——是在血管壁而非腸道中執行的衰老加上 sirtuin 機制。

**路徑軸。** 微生物代謝 → [[Liver]] 解毒 → 血管壁中的 [[Inflammaging]]／[[Cellular Senescence]]，以 [[SIRT1]] 為節點。

**被調節的療法類別。** 飲食型態（以膽鹼、肉鹼、紅肉為重）。解剖上的論點是：相同的飲食建議同時下給高製造者與非製造者，卻造成全身 TMAO 暴露相差一個數量級，因為該建議處理的是*受質*，而關卡是*機制*。

**相關 vault 筆記。** [[Trimethylamine N-oxide]]、[[Gut Microbiome]]、[[Akkermansia]]、[[Akkermansia muciniphila]]、[[L-Carnitine]]、[[Betaine]]、[[Liver]]、[[Hepatocyte]]、[[Inflammaging]]、[[Senescence]]、[[SIRT1]]、[[Atherosclerosis]]、[[Cardiovascular Disease]]、[[Dyslipidemia]]、[[Kidney]]。

---

## APOE ε 異構型劑量

**基質。** [[APOE4]] vs. ε3 vs. ε2——一種載脂蛋白異構型，幾乎完全由單一組織產生。

**解剖。** 由肝細胞產生並運送至腦部，而相關的細胞是**[[Microglia]]**（已被預設激發、放大 IFN-I）與 **[[Astrocytes]]**（APOE4 豐度、[[TREM2]] 配體供應、[[Blood-Brain Barrier]] 完整性）。在外周，它作用於血管內皮，並透過 [[Atherosclerosis]] 風險影響 [[Lipid Metabolism]]。AD 風險是劑量分級的：ε4/ε4 ≈ 10 倍，單一等位基因 ≈ 3 倍，而 [[Alzheimer's Disease]] 是一個*腦部*疾病，其風險等位基因卻是在*肝臟*製造的。

**路徑軸。** [[cGAS]]-[[STING]]／[[Type I Interferon]] 驅動的微膠細胞預設激發；一種帶有粒線體壓力、[[Cell Cycle]] 停滯與 [[SASP]] 的類衰老微膠細胞狀態。該頁面的 cGAS 標靶介入主張正是建立在這條軸上，而解剖上的要點是：cGAS 抑制預測上限最高的人群（ε4 帶因者）會因納入 ε3/ε3 受試者而在未分層的試驗中被稀釋掉。

**被調節的療法類別。** 兩類，而第二類是一個真正的陰性結果：

- **神經發炎／cGAS–STING** 介入：ε4 帶因者是個未被拿來試驗的候選人群。歸類為*被錯過的療法*。
- **飲食性認知**（[[Ketogenic Diet]]、MCT、飽和脂肪）：ε4 帶因者**沒有**任何益處，而飽和脂肪特別有害。隨機化人類數據與範文回顧發現生酮制剂對 ε4 帶因者無效；APOE4 小鼠的認知益處是雌性專屬的，且未能轉譯。2025 年的一份傘狀回顧只把 [[Mediterranean Diet]] 列為例外。歸類為*預測無效操作*。

**相關 vault 筆記。** [[APOE4]]、[[Klotho]]、[[Microglia]]、[[Astrocytes]]、[[cGAS]]、[[STING]]、[[Type I Interferon]]、[[SASP]]、[[Inflammaging]]、[[Atherosclerosis]]、[[Cardiovascular Disease]]、[[Dyslipidemia]]、[[Alzheimer's Disease]]、[[Beta-amyloid]]、[[Tau Pathology]]、[[Cerebrospinal Fluid]]、[[Blood-Brain Barrier]]、[[Liver]]、[[Ketogenic Diet]]、[[Metabolic Syndrome]]。

---

## ALDH2 Glu487Lys（rs671）

**基質。** ALDH2，乙醇與 4-HNE 代謝的醛類去氫酶。

**解剖。** 在 [[Liver]]（乙醇代謝器官）最高，胃與口腔黏膜亦高（首過代謝部位，也是潮紅反應的來源），在 [[Skeletal Muscle]]、[[Myocardium]] 與腦中也有高表現。在氧化壓力情境下它所清除的受質是 [[4-Hydroxynonenal]]——一種膜脂質過氧化產物，因此 \*2 帶因者的高風險組織是任何粒線體密度高且脂質含量高的組織：心肌、骨骼肌與神經元。

**路徑軸。** [[Lipid Peroxidation]] 的清除，以及 [[Mitochondrial Uncoupling]]／[[NAD+]] 池。其對乙醛的 Km 大致超出可利用的細胞內 [[NAD+]] 約 15 倍，這造成該頁面饒味的反轉：**在 \*2 帶因者中，醛類清除能力與補充原本要拉高的 [[NAD+]] 可用性朝相反方向移動。** 因此 \*2 帶因者同時是氧化負荷更高、卻又更無法把氧化訊號轉化為適應反應的人。

**被調節的療法類別。** 異種激效作用（以乙醇作為激效性暴露），並延伸到任何機制仰賴氧化還原→NAD+ 轉換的介入。\*2/\*2 歸類為*有害*；\*1/\*2 歸類為*暴露不足*。

**相關 vault 筆記。** [[4-Hydroxynonenal]]、[[Lipid Peroxidation]]、[[Glutathione]]、[[NAD+]]、[[Mitochondria]]、[[Mitochondrial Uncoupling]]、[[Hormesis]]、[[Mitohormesis]]、[[Liver]]、[[Skeletal Muscle]]、[[Myocardium]]、[[Cardiovascular Disease]]、[[Oxidative Stress]]。

---

## CYP1A2 / ADORA2A

**基質。** [[Cytochrome P450]] 1A2（肝臟咖啡因清除）與腺苷受體。

**解剖。** CYP1A2 是一個**肝臟**酵素，肝外貢獻近乎為零，因此這是該頁面上最乾淨的藥動力學關卡：單一器官的決定因素。行為後果則在皮層，透過 [[Prefrontal Cortex]] 的腺苷拮抗作用中介；而就睡眠代價而言，則透過晝夜系統。

**路徑軸。** 不是 vault 的路徑軸——這是純粹的藥動力學加上受體藥理。之所以納入，是因為該頁面的論證可以推廣：慢型代謝者的咖啡因半衰期跨度達 2–12 小時，因此*降低的感知效力*與*下午給藥後的睡眠干擾*源自同一個決定因素。表面上的效力降低，經常反映的是睡眠干擾而非藥理失敗。

**被調節的療法類別。** 認知／運動劑量（咖啡因、綠茶 [[EGCG]]），以及一般由 [[Prefrontal Cortex]] 中介的認知效應。

**相關 vault 筆記。** [[Cytochrome P450]]、[[EGCG]]、[[Dopamine]]、[[Prefrontal Cortex]]、[[Liver]]、[[Hormesis]]、[[Skeletal Muscle]]、CYP1A2 半衰期 *（無 vault 筆記——見缺口）*

---

## PON1 Q192R / L55M

**基質。** 對氧磷酶-1，一種結合於 HDL 的酯酶。

**解剖。** 在 [[Liver]] 合成，在血漿中**藉由 HDL**運送，並在**動脈內膜**執行作用，於此水解 [[MDA-LDL]] 類顆粒中的氧化磷脂。它作用於血管壁而非肝臟——這是另一個「在一個器官製造、在另一個器官執行」的關卡，與 [[APOE4]] 和 TMAO 共享同一結構。

**路徑軸。** [[Atherosclerosis]] 路徑中的 [[Lipid Peroxidation]] 防禦；經由輔酶 Q／[[Coenzyme Q10]] 與脂溶性抗氧化劑的論述，直接連結到 [[Oxidative Stress]] 的維生素 E 分支。

**被調節的療法類別。** 氧化 LDL／脂質過氧化防禦協定。列為 C 級有一個具體理由：活性排序為 RR > QR > QQ 與 LL > LM > MM，但基因型類別*內部*的變異超過類別*之間*的變異（Jarvik 2000）——某位 MM 個體可能優於某位 LL 個體。這一列是該頁面自己對「為何單靠基因型可能是錯誤測量」的實例，也是與 [[COMT]] 的直接對照。

**相關 vault 筆記。** [[PON1]]、[[MDA-LDL]]、[[Atherosclerosis]]、[[Cardiovascular Disease]]、[[Dyslipidemia]]、[[Lipid Peroxidation]]、[[Oxidative Stress]]、[[Coenzyme Q10]]、[[Liver]]、[[Metabolic Syndrome]]、[[Alpha-tocopherol]]。

---

## KLOTHO KL-VS 單倍型

**基質。** KLOTHO 啟動子／外顯子中的一段雙 SNP 單倍型，會產生一種剪接變異。KL-VS 異型合性有利；同型合性則相反。

**解剖。** Klotho 在 [[Kidney]] 與腦中最高；該頁面使用的可測量讀數是 **[[Cerebrospinal Fluid]] 中的可溶性 Klotho**——一個中樞區室的測量，而非血清測量。效應終點是神經發炎：KL-VS 異型合子會減輕 CSF IL-6、S100B、[[Alpha-synuclein]] 與 NfL，且在 AD 風險富集的世代中效應更大，這表示它與 [[APOE4]] 交互作用，而非獨立效應。這裡的解剖是腦區室液體，而該生物標記*就是*藥效學讀數。

**路徑軸。** [[Klotho]] → [[mTOR]]／胰島素-IGF 訊號、磷與維生素 D 代謝、[[NAD+]]。也是 [[Rapamycin]] 藉由保護幹細胞而拯救 Klotho 缺乏模型的途徑。

**被調節的療法類別。** 以運動因子為導向的堆疊。可溶性 Klotho 會因運動而升高（12 項 RCT 的 Hedges' g 為 1.3，N=621），因此該基因型支持一份帶有客觀讀數的運動處方——這是硬編碼關卡與可改變暴露恰為同一分析物的罕見案例。

**相關 vault 筆記。** [[Klotho]]、[[APOE4]]、[[Alzheimer's Disease]]、[[Microglia]]、[[Astrocytes]]、[[Cerebrospinal Fluid]]、[[Blood-Brain Barrier]]、[[mTOR]]、[[NAD+]]、[[Rapamycin]]、[[Osteoclast]]、[[Kidney]]。

---

## TERT 啟動子基因型（rs2853669）與體細胞 TERTp

**基質。** TERT 啟動子上一個位於胚系側的 ETS/TCF 結合位點，會被 G 等位基因破壞；另加腫瘤中體細胞性的 −124／−146 C>T 典型啟動子突變。

**解剖。** 這是該頁面上最狹窄的解剖關卡，而這正是重點。TERT 轉錄只有在**長壽且會分裂的細胞族群**中才是複製性永生的速率限制步驟——生殖細胞、[[Bone Marrow]] 與造血前驅細胞、[[Intestinal Stem Cell]]、表皮基底層的 [[Melanocyte]]，以及內皮。分裂後組織（神經元、心肌細胞）早已耗盡其儲備。因此這個關卡在解剖上被限制在幹細胞區室，而其後果——複製儲備力的上限——則以 [[Replicative Senescence]] 的形式全身性地表現。

**路徑軸。** [[Telomere Attrition]] → [[Telomere]] → [[DNA Damage Response]] → [[p53]]／[[p16]] 停滯。TERT 活化是速率限制步驟，因此 rs2853669 是**複製儲備力的上限**，且不會被 NMN、[[Rapamycin]] 或行為介入所改變。

**被調節的療法類別。** 複製性衰老／端粒標靶協定。在該頁面上列為 D 級，且是正確的：機制紮實而結果數據僅為關聯。胚系—體細胞的交互作用（胚系 rs2853669 狀態決定*帶有體細胞 TERTp 突變的患者*的生存）是一道真正的雙層關卡——一個只有在對上體細胞取值時才會表達自身的胚系取值，而任何單一檢測的組合都抓不到它。

**相關 vault 筆記。** [[Telomere]]、[[Telomerase]]、[[Telomere Attrition]]、[[Replicative Senescence]]、[[Senescence]]、[[p53]]、[[p16]]、[[DNA Damage Response]]、[[DNA Repair]]、[[Bone Marrow]]、[[Intestinal Stem Cell]]、[[Cellular Senescence]]、[[Cancer]]。

---

## SIRT3 / SIRT6 壽命變異

**基質。** SIRT3（rs11555236）與 SIRT6（rs4980329、rs117385980、rs9997679；N308K、A313S）中的 SNP。

**解剖。** 這兩個 sirtuin 位於不同的區室，而這一點比統計數字更能解釋那些性別不一致的發現。

- **[[SIRT3]]** 常駐粒線體基質，因此其變異作用在粒線體密度最高之處：[[Myocardium]]、[[Skeletal Muscle]]、[[Kidney]]、棕色脂肪與 [[T Cell]]。它去乙醯化 [[MnSOD]]——可行動的讀數是 Lys68／Lys122 乙醯化，即 [[SIRT3-SIRT4 Ratio]]。
- **[[SIRT6]]** 是核內的，作用於染色質（H3K9 去乙醯化、基因體穩定性）與 [[NAD+]] 池；它廣泛表現，以肝臟、脂肪細胞與神經元為其中較高者。

**路徑軸。** [[Sirtuins]] → [[NAD+]] → [[Mitohormesis]] 與 [[Autophagy]]；粒線體那一臂則是 [[SIRT3-SIRT4 Ratio]]。

**被調節的療法類別。** 以 SIRT 為標的的長壽堆疊。而生物學立場很清楚：**這些必須與核型一起聯合解讀。** rs11555236 在一個義大利世代中與男性壽命相關，在 pooled 世代中未被重複，且在 TRELONG 中僅在女性中顯著。[[SIRT6]] 過度表現只在雄性中延長壽命（Kanfi 2012）；Roichman 2021 報告兩性都有 SIRT6 與肝臟 [[NAD+]]；芬蘭的壽命關聯出現在芬蘭男性身上。報告這些而不同時報告性別變數，等於只報告了一項觀察的一半。

**相關 vault 筆記。** [[Sirtuins]]、[[SIRT1]]、[[SIRT3]]、[[SIRT6]]、[[SIRT3-SIRT4 Ratio]]、[[NAD+]]、[[MnSOD]]、[[Rapamycin]]、[[Autophagy]]、[[Mitohormesis]]、[[Myocardium]]、[[Skeletal Muscle]]、[[Kidney]]、[[T Cell]]、[[Liver]]。

---

## mtDNA 單倍群（D 級）

**基質。** 母系粒線體基因組。

**解剖。** 每一個有核細胞，功能上的集中處在 [[Skeletal Muscle]]、[[Myocardium]]、[[Kidney]] 與腦。單倍群在基線 [[ROS]] 產生、解偶聯能力與抗氧化反應上各不相同——而由於 mtDNA 為母系遺傳，單倍群在觀察性研究中會與母系血統的混淆因子共同分離，這解釋了文獻中大部分的不一致。

**被調節的療法類別。** 無。列在該頁面上是為了記錄在一個以粒線體為焦點的語料中，某項測量的*缺席*。D 級，且正確地被排除在任何劑量規則之外。

**相關 vault 筆記。** [[Mitochondria]]、[[Oxidative Phosphorylation]]、[[Mitohormesis]]、[[ROS]]、[[Reactive Oxygen Species]]、[[Mitochondrial Uncoupling]]、[[UCP1]]、[[Skeletal Muscle]]、[[Myocardium]]、[[Kidney]]、[[Superoxide Radicals]]。

---

## 橫跨性的解剖模式

六個模式可以解釋該頁面的大部分結構。它們比個別條目更有用，因為它們告訴你下一道關卡會落在哪裡。

**在一個器官製造，在另一個器官執行。** [[APOE4]]（肝 → 腦微膠細胞）、[[PON1]]（肝 → 動脈內膜）、TMAO（結腸 → 肝 → 血管壁）、[[Urolithin A]]（結腸 → 肌肉、脂肪、肝、腦）。對這些而言，檢測所在的區室與後果所在的區室在解剖上是分離的，這就是血漿替代指標會誤報的原因。製造 effector 的器官不是承受傷害的器官。

**設定某條路徑第一步的關卡。** [[MC1R]]（色素合成）、[[NQO1]]（醌還原路徑）、[[FKBP12]]（複合物形成）、TERT（複製性永生）。沒有劑量能補償；該頁面把這些稱為可採用性的決定因素而非量級的決定因素，是對的。

**設定暴露而非反應的關卡。** [[Cytochrome P450]] 3A5、CYP1A2／ADORA2A、[[FKBP12]] 在 [[Cytochrome P450]] 中的對應者、腸道 TMA 製造者。全部可藉劑量校正；全部目前都被誤報為無反應。

**設定窗口而非標的的關卡。** 經由 [[SIRT3-SIRT4 Ratio]] 的 [[MnSOD]] rs4880——激效窗口的*寬度*。[[Estrogen]] 狀態——是軌跡而非當前取值。這些關卡中，數值門檻是錯誤的輸出格式。

**隨適應症而翻轉符號的關卡。** [[NQO1]]：T/T 在氧化還原供體／終止劑協定中是*有害的*，在 NQO1 生物活化的化療中則是*排除性的*。[[APOE4]]：對 cGAS 抑制是*被錯過的療法*，對生酮飲食則是*預測無效操作*。任何為每個基因型指派單一嚴重度登記的系統都是錯的；嚴重度是（基因型，介入）這一對的性質，而該頁面的 `THERAPIES` 映射處理正確，關卡卡片卻沒有。

**是其他關卡的修飾因子而非獨立關卡的關卡。** TERT 胚系 rs2853669 只在對上體細胞 TERTp 突變時才表達。[[SIRT3]]／[[SIRT6]] 變異只在對上核型時才表達。KLOTHO KL-VS 只在對上 [[APOE4]] 劑量時才表達。停經狀態修飾 HFE 的鐵門檻。這是一種組合式的結構，而該頁面的扁平關卡清單並未呈現它；它也是從單一檢測組合中得出錯誤結論的最常見來源。

---

## 結構性發現

依「對結論的改變程度」排序。

**核型關卡被評為 A 級，但掛在它上面的細胞死亡主張並不是 A 級。** 該頁面 A 級的理據是路徑層級的性別差異。XX-caspase／XY-PARP1-AIF 的細胞死亡不對稱來自体外傷害範式，而 [[SIRT6]] 雄性專屬的壽命延長是轉殖基因過度表現的結果，不是人類觀察。兩個獨立且知名的結果被用來支撐一個兩者都不足以獲得的等級。那個*表型*——生殖階段決定哪些介入是適當的——確實是 A 級。具體的細胞死亡對應最好也只是 B 級。建議拆分：內分泌適應症 A 級、細胞死亡型式 B 級、SIRT6 外推 C 級。

**該頁面自身的 frontmatter 在核型上自相矛盾。** 關卡陣列把 `xxpre` 標為包含黑人／非洲血統在內每個族群的 24%，`xy` 為 48%——這個數字只有在以歐洲血統為分母時才站得住，而且四個欄位是同一個值。要麼性別關卡的人口佔比是佔位值（那應該像尿石素與 TMAO 關卡那樣明確標示），要麼血統選擇器在這一道關卡上默默誤報，卻在其他十六道上都是正確的。目前黑人血統的使用者會看到一個歐洲血統的數字，卻無從得知。

**一列療法被誤歸類為有害，而它其實是一項劑量觀察。** `fisetin` 把 Met/Met 映射為*有害*，文字是「相對於快型代謝者，暴露量約翻倍，並額外消耗 SAMe。」衰老溶解劑暴露量翻倍是一種過量風險，是*劑量*後果，而不是機制的方向性反轉——機制是變得更可用，而非被顛倒。對比 *NQO1* 的 T/T 列，那裡判定有害是正確的，因為效應確實反轉了。如果 `harm` 意指「方向反轉」，那麼 fisetin Met/Met 就不是有害；如果它意指「暴露過量」，那麼 COMT VV 列（「癌症發生率增加」）與 ALDH2 列就是出於不同的原因共享同一個標籤，而那張分類表並沒有在做它看起來在做的事。「SAME」在該頁面文字中也是一個未定義的縮寫。

**甲基供體 × COMT 的映射與該頁面其他地方使用的符號相矛盾。** `methyl` 把 Met/Met 映射為*有害*——COMT 活性降低加上甲基供體 → 焦慮與失眠。這是 B 級，且建立在沒有引文的臨床經驗文獻上，而同一個頁面卻依據兩項隨機試驗把 [[COMT]] 本身評為 A 級。這種不對稱尚可辯護，但甲基供體那一列應當帶上它實際擁有的證據，而它的兩個中性列（Val/Val、Val/Met）在沒有來源的情況下斷言「下游甲基化容量決定耐受度」。

**無法劃分的關卡類別使 Figure 3 的長條圖出錯。** `sirt` 關卡有三個取值——*common*（78%）、*SIRT3 rs11555236 G*（19%）、*SIRT6 N308K/A313S*（3%）——其中 *common* 那一桶必然包含了另外兩桶所指名變異的異型合子與同型合子帶因者，以及同時帶有兩者的個體。這些類別互相重疊，因此把它們相加以計算具後果者的比例會重複計數。Figure 3 把它們繪製成依真實人口偏移並排的分段，等於斷言了一個資料並不支持的劃分。`klotho` 與 `mtdna` 有同樣問題但較輕微（見下）。`klotho` 的取值在建構上就相加為 1.000（.979 + .02 + .001），這沒問題，但 `klotho` 與 `sirt` 是那兩列中顯示的人口佔比屬於佔位值而非世代估計值的列，而該頁面並未說明這一點——不像尿石素與 TMAO 那兩列，那裡有說明。

**mtDNA 單倍群類別重複計算了 rCRS，且這些佔比並非世代估計值。** 三個取值是 `H / rCRS`（低 ROS）、`J / T / U / K`（較高 ROS）與 `Other / rCRS-adjacent`。rCRS（re Cambridge Reference Sequence）正是 H 單倍群的*參考*序列，因此它出現在第一桶，同時又在第三桶被引用。東亞欄位是最清楚的症狀：H 為 5%、macro 為 40% 而「其他」為 55%——這不是一張單倍群頻率表，而是一個殘差。這是 D 級且被排除在劑量之外，所以影響僅在呈現層面——但同一個 `GATES` 陣列是 Figure 3 長條圖的資料來源，而那些長條圖是按比例繪製的。

**面板與追蹤器涵蓋的是不同的集合。** 「十六項的擴充面板」與 `GATES` 陣列（17 筆）在兩個方向上都不一致：

- 在追蹤器中、未在面板中：ALDH2（rs671）。
- 在面板中、未在追蹤器中：體細胞 TERTp 狀態被摺進 tert 列，但面板第 12 項只列出「A/A · G/G 加上實測 TL」——一個三取值關卡的兩取值描述；面板第 14 項加入了 CYP2C9／VKORC1、CYP2D6、ADORA2A 與 SLCO1B1 代謝者表型，其中只有 CYP1A2／ADORA2A 在追蹤器中；面板第 15 項把 PON1 描述為「Q192R × L55M 加上實測活性」，但該關卡的取值只有 192QQ／192QR／192RR，L55M 只在程式碼中被命名，從未作為一個維度使用。
- [[G6PD]] 在散文中以一道「已經決定可採用性」的關卡出現，卻既不在面板中也不在追蹤器中——對於一個比清單中任何 A 級項目都更堅定地指導行動的取值而言，這是個奇怪的位置。

**一道檢測描述錯誤的關卡，被描述為需要活性檢驗卻沒有提供。** `sod2` 的 `assay` 欄位寫著「SNP **加上**實測 MnSOD 活性（絕不單用 SNP）」，面板第 8 項也重複了這句——但追蹤器的取值選項只有三個基因型標籤，別無其他，於是該頁面告訴使用者去測量酵素，卻不給他們任何輸入結果的方式。這項測量正是讓這個關卡可解讀的東西，而工具在結構上無法接受它。`pon1`（「SNP 加上 diazoxonase 活性」）也是同樣的失敗，其取值為純基因型。該頁面自己的表述——「基因型只提供弱先驗，活性檢驗才是有資訊量的測量」——是正確的，然後卻未被實作。

**Grade 欄位有三種不同的意思。** 它出現在關卡層級（`GATES[].grade`）、療法層級（`THERAPIES[].grade`）與面板層級，而對同一個底層關係而言，這些取值經常互不相交：COMT 作為關卡是 **A**，而受它關卡的兩個療法是 **B**（`fisetin`、`methyl`）與 **A**（`vite`）。[[PON1]] 作為關卡是 **A**、作為療法是 **C**。`sirt` 是 **B** 而其療法是 **B**；`tert` 是 **B** 而其療法是 **D**。該頁面從未說明這些是同一套評分準則套用在不同解析度上，還是三套準則，而讀者拿一個關卡徽章與一個療法徽章相比時，無從得知為何不同。定義那一節只為關卡—介入的關係定義了這套準則。

**mc1r 關卡的「其他／野生型 57%」在做隱性的事。** 在歐洲血統中，R 類為 14%、r 類為 29%，該族群有 43% 至少帶有一個變異；該頁面的黑色素瘤 OR 2.13 是以「帶有兩個或更多變異」為前提引用的，而這個類別是該關卡無法表達的——它只有*類別*維度，沒有*數量*維度。兩個變異的風險陳述與單一類別的關卡不是同一項測量，因此這個 OR 無法從工具的輸出推導出來。這與 [[PON1]] L55M 是同一個結構問題：程式碼命名了第二個變異，而取值從不使用它。

**Figure 3 的「具後果者總計」欄與各分段的著色在建構上就不一致。** `wrongSide()` 把*具後果*類別的佔比相加，再除以已知總量；各分段則是依它們在整條長條上的真實人口偏移繪製。當某關卡的類別並不構成劃分（`sirt`、`mtdna`），或某療法的 `_default` 具後果而其具名取值卻不具後果時，所繪製的長條與所印出的總數是在回答兩個不同的問題。對那十五道類別乾淨且映射完整的關卡而言，兩者一致；而那些例外在圖中是不可見的，卻正是重要的那些。

**該頁面把「不可變」與「可改變」混在同一個標題下。** 定義那一節正確地把尿石素代謝型稱為一個*微生物表型*，並指出它是這組取值中唯一可能可改變的一項——然後 `Unmeasured Gates` 的結構缺陷清單（第 04 項）又把完全相同的一點當作缺陷提出（「『代謝型』一詞被套用在兩個不同的實體上」）。這兩節描述的是同一個區別；該頁面尚未決定檔案自身的資料採用哪一種表述。TMAO 製造者狀態是具有相同性質的第二道微生物關卡，同樣也沒有任何相關筆記。

**已登記但未記錄的陰性結果，與陽性結果並列卻沒有同等待遇。** 限制那一節保留了 GPX1 Pro200Leu（未修飾硒反應，Miller 2012）作為證據——這是正確且有價值的。但 [[G6PD]]、CYP2D6／CYP2C9 的 CPIC 表型，以及生酮飲食認知益效在人類中失敗的文獻記錄，都被當作發現處理，而這份登記表中沒有位置給那道「被檢驗過但*並未*分層反應」的關卡。該登記表依具後果比例排序，因此一個檢定力充足的陰性結果其具後果比例為零，會被排到最底部，在那裡被讀成不重要而非有資訊量。

**「COMT 目錄包含 46 篇筆記，且含有語料中唯一專門的基因型筆記，而共享實體池包含 1,812 篇筆記。」** 值得在該頁面上線前對照當前的目錄樹查核——這些計數在結構缺陷 01 中是以事實陳述的，而這類數字很容易過期。

---

## vault 中的解剖缺口

上述解剖欄位是從機制筆記重建而來，因為 vault 幾乎沒有組織層級的筆記。具體缺席的有以下項目，而每一項都阻擋著該頁面所需的對應：

- **體被**——Skin、Epidermis、Dermis、Keratinocyte、Hair Follicle、Nail。MC1R 的主要解剖部位在 vault 中無從指名。
- **眼**——Retina、Photoreceptor、Uvea、Iris、Ciliary Body、Choroid、Sclera。只有 [[Retinal Pigment Epithelium]] 與 [[Retinal Photoreceptors]] 存在。MC1R 與黑色素瘤既是皮膚筆記，也是眼睛筆記。
- **生殖系統**——Ovary、Testis、Uterus、Endometrium、Cervix、Prostate、Pituitary。vault 中最具後果的關卡是一道性荷爾蒙關卡，卻沒有生殖系統的解剖可供依附。[[Estrogen]]、[[Estrogen Receptor]] 與 [[Testosterone]] 以分子形式存在；產生它們的器官卻不存在。
- **血管**——Endothelium、Vascular Smooth Muscle、Microvascular。TMAO、PON1 與 [[APOE4]] 都在內膜執行作用；卻沒有內膜筆記。
- **胃腸道**——Enterocyte、Goblet Cell、Paneth Cell、Colonic mucosa。[[Gastrointestinal Tract]] 與 [[Intestinal Barrier]] 存在；承載尿石素與 TMAO 關卡的細胞類型卻不存在。沒有 Choline、Carnitine（只有 [[L-Carnitine]]）或 Trimethylamine 前驅物筆記。
- **腎臟**——Nephron、Podocyte、Urothelial。[[Kidney]] 存在；但腎元——TMAO 清除與 Klotho 論述所在的區室——卻不存在。
- **脂肪組織**——Adipocyte、Brown adipose。SIRT6 在脂肪組織與產熱中的作用無從指名。
- **免疫**——沒有 Immune、Monocyte 或 Neutrophile 筆記。衰老的免疫監察那一半、cGAS–STING 微膠細胞的論述，以及胞葬清除機制，全都缺少細胞類型的錨點。

同樣缺席、且被該頁面自身散文所引用者：咖啡因代謝（CYP1A2 半衰期被引用為 2–12 小時的跨度，背後卻沒有筆記），以及作為甲基供體的 SAME。

**建議。** 不要把生物標記審查順帶變成建立二十來篇筆記的副作用。請建立該頁面最高等級關卡所執行的四篇：**Skin**、**Endothelium**、**Enterocyte**、**Nephron**。這四篇涵蓋了 MC1R、TMAO／PON1／APOE4、兩道微生物關卡，以及 Klotho／腎臟清除——也就是該頁面大部分的具後果質量。其餘的可以等解剖—路徑的工作來要求時再說。

---

## Linking Summary

本次審查與該頁面、以及它所引用的來源任務輸出都是雙向的。`hard-coded-biomarker-gates.html` 把這些關卡呈現為分層變數；本文件則把同樣的關卡重新推導為**解剖定位**，並發現該頁面的扁平結構隱藏了三件事——區室分離（在一個器官製造、在另一個執行）、窗口與標的之別（MnSOD、生殖階段），以及隨適應症而翻轉符號（NQO1、APOE4）。上述結構性發現是該頁面自身資料與評分準則內部的矛盾，而非對機制的異議，而且每一項都連同產生它的那一行一起陳述，以便對照來源查核。vault 在該頁面機制章節最強之處同樣最強——氧化還原化學、sirtuin 區室生物學、自噬起始、鐵的處理——而在該頁面最倚賴它之處最弱，也就是完全沒有解剖學可以安置其中任何一項。解剖章節末尾的四篇筆記建議，是讓該頁面自身的主張在解剖上可查核的最小改動。
