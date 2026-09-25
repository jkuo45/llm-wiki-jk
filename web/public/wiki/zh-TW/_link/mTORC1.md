---
title: mTORC1
description: "mTORC1（mechanistic target of rapamycin complex 1）是整合營養、能量與生長因子訊號，以協調細胞生長、蛋白質合成與代謝的多蛋白訊號複合體。"
created: 2024-01-01
updated: 2026-09-02
tags:
  - protein
aliases: [mechanistic target of rapamycin complex 1, mTOR Complex 1, mTORC1]

---

# mTORC1

**mTORC1**（mechanistic target of rapamycin complex 1）是一個多蛋白訊號複合體，整合營養、能量與生長因子訊號，以協調[[Cell Growth|細胞生長]]、[[Protein Synthesis|蛋白質合成]]、[[Lipid Synthesis|脂質合成]]、[[Ribosome Biogenesis|核糖體生合成]]與[[Autophagy|自噬]]。它是[[mTOR]]訊號網絡的中心節點，也是真核細胞中合成–分解代謝平衡的主要調節者。

## 結構與次單元

mTORC1 是一個大型（約 300 kDa）的多蛋白組裝體，以[[mTOR]]絲胺酸/蘇胺酸激酶（催化核心）為中心，包含五個核心次單元：

- **mTOR** — 屬於[[PIKK]]家族的催化次單元；含 N 端 HEAT 重複序列、FAT 結構域、FRB 結構域（rapamycin 結合）與 C 端激酶結構域
- **Raptor**（regulatory-associated protein of mTOR）— 架構蛋白，經 TOS motif 招募 mTORC1 底物（[[S6K1]]與[[4E-BP1]]）
- **mLST8**（mammalian lethal with SEC13 protein 8）— 結合 mTOR 激酶結構域並穩定催化活性
- **PRAS40**（proline-rich Akt substrate of 40 kDa）— 抑制性次單元；經 Akt 磷酸化後解離以解除抑制
- **Deptor**（DEP domain-containing mTOR-interacting protein）— 負向調節因子，結合 mTOR 並抑制激酶活性；本身受生長因子訊號抑制

Raptor 是定義 mTORC1 專一性的次單元（據以區分[[mTORC2]]）。此複合體在活化狀態下定位於[[Lysosome|溶酶體]]表面，在此遇到其上游活化因子[[Rheb]]。

## 調節與活化

mTORC1 整合來自四大輸入的訊號：

### 1. 生長因子（PI3K-Akt-TSC 軸）
[[Growth Factor|生長因子]]結合[[Receptor Tyrosine Kinases|受體酪胺酸激酶]]後活化[[Class I PI3K|第一類 PI3K]]，產生[[PIP3]]，將[[Akt]]招募至細胞質膜。Akt 磷酸化並抑制[[TSC1]]-[[TSC2]]複合體——一個對[[Rheb]]具活性的[[GTPase-activating protein|GTP 酶活化蛋白]]（GAP）。Rheb-GTP 在溶酶體表面直接活化 mTORC1。Akt 也磷酸化 PRAS40，解除其對 mTORC1 的抑制。

### 2. 胺基酸（Rag GTPase 軸）
[[Amino Acids|胺基酸]]，特別是[[Leucine|白胺酸]]與[[Arginine|精胺酸]]，經[[Ragulator]]-[[Rag GTPase]]系統傳遞訊號，將 mTORC1 招募至[[Lysosome|溶酶體]]。Rag 異源二聚體（RagA/B 結合 RagC/D）經 Raptor 相互作用把 mTORC1 繫留在溶酶體表面，使其靠近 Rheb-GTP。此胺基酸感知機制由[[GATOR1]]-GATOR2 複合體、[[Sestrins]]與[[CASTOR1]]所中介。

### 3. 能量狀態（AMPK-TSC2 / AMPK-Raptor）
細胞能量偏低（[[AMP]]/[[ATP]]比值升高）會活化[[AMPK]]，後者磷酸化：
- [[TSC2]] — 增強其對 Rheb 的 GAP 活性，抑制 mTORC1
- [[Raptor]] — 促進[[14-3-3]]結合，直接抑制 mTORC1
這提供了一個直接的能量檢查點，在 ATP 不足時防止合成代謝進行。

### 4. 壓力與缺氧（REDD1 / BNIP3）
[[Hypoxia|缺氧]]與[[DNA Damage|DNA 損傷]]誘導[[REDD1]]/DDIT4，其活化 TSC2 並抑制 mTORC1。[[Hypoxia|缺氧]]也誘導[[BNIP3]]與[[BNIP3L]]，促進[[Mitophagy|線粒體自噬]]並間接抑制 mTORC1。[[p53]]（基因組的守護者）在基因毒性壓力下壓制 mTORC1 活性。

## 下游效應器

mTORC1 磷酸化兩大家族的主要底物以驅動合成代謝：

### S6 激酶 1
mTORC1 在 Thr389 磷酸化並活化[[S6K1]]。S6K1 進而磷酸化：
- [[S6 ribosomal protein|S6 核糖體蛋白]] — 促進 5'-TOP mRNA 的翻譯
- [[eIF4B]] — 增強解旋酶活性以展開 mRNA
- [[PDCD4]] — 促進其降解，解除對 eIF4A 的抑制
- [[IRS1]] — 對 PI3K-Akt 訊號的負向回饋

### 4E-BP 家族
mTORC1 磷酸化[[4E-BP1]]、[[4E-BP2]]與[[4E-BP3]]，使其自[[eIF4E]]釋放。游離的 eIF4E 組裝成[[eIF4F]]起始複合體（eIF4E、eIF4A、eIF4G）以啟動依賴 5' 帽的翻譯。低磷酸化的 4E-BP 會扣押 eIF4E，阻斷翻譯起始。

### 其他標的
- [[Lipin-1]] — 磷酸化阻斷其進入細胞核，促進[[Lipid Synthesis|脂質合成]]
- [[TFEB]] — mTORC1 磷酸化 TFEB 將其留在[[Cytosol|胞質]]；mTORC1 抑制則允許 TFEB 進入細胞核並促進[[Lysosomal Biogenesis|溶酶體生合成]]
- [[SREBP-1c]] — mTORC1-S6K1 訊號活化 SREBP-1c，驅動[[Lipid Synthesis|脂質合成]]與[[Cholesterol|膽固醇]]生合成
- [[HIF-1α]] — mTORC1 促進 HIF-1α 翻譯，使[[Glycolysis|糖解作用]]與血管新生得以進行

## 生理功能

### 細胞生長與增殖
mTORC1 透過增加蛋白質與脂質合成驅動[[Cell Growth|細胞生長]]。缺乏 mTORC1 訊號的細胞體積較小、增殖較慢。在[[Quiescence|靜止期]]，mTORC1 被抑制，細胞維持低合成代謝的狀態。

### 自噬調節
mTORC1 在 Ser757 磷酸化[[ULK1]]與[[ULK2]]，破壞 ULK1-[[AMPK]]的相互作用，從而抑制[[Autophagy|自噬]]。mTORC1 也磷酸化 TFEB 與[[TFE3]]，阻止[[Lysosomal Biogenesis|溶酶體生合成]]。以[[Rapamycin|雷帕黴素]]或[[Torin]]進行的藥理學 mTORC1 抑制是強效的自噬誘導劑。

### 代謝
mTORC1 經由穩定 HIF-1α 促進[[Glycolysis|糖解作用]]，經[[ATF4]]訊號增加[[Nucleotide Synthesis|核苷酸合成]]，並透過[[PGC-1α]]與[[YY1]]的共同活化驅動[[Mitochondrial Biogenesis|粒線體生合成]]。

### 免疫功能
mTORC1 對[[T Cell|T 細胞]]活化、[[B Cell|B 細胞]]分化與[[Dendritic Cell|樹突細胞]]功能至關重要。在 T 細胞中，mTORC1 促進[[effector T cell|效應 T 細胞]]（Th1、Th17）分化，而 mTORC2 則有利於[[Treg]]發育。

### 飲食限制與胺基酸感知
mTORC1 是飲食胺基酸訊號的直接受體，使其處於[[Protein Restriction|蛋白質限制]]反應的中心：

- 減少飲食中的[[Leucine|白胺酸]]（與其他[[Branched-Chain Amino Acids|支鏈胺基酸]]）可降低 mTORC1 活性；白胺酸是此複合體最強效的胺基酸活化劑。
- [[Methionine Restriction|甲硫胺酸限制]]同樣抑制 mTORC1，是其代謝與壽命表型的成因之一。
- mTORC1 抑制可重現蛋白質限制的多項特徵（蛋白質合成減少、誘導[[Autophagy|自噬]]、改善代謝健康），且許多蛋白質限制的益處都需要 mTORC1 訊號下降才能達成。

> [!info] 來源：[[_document_ - The-hallmarks-of-protein-and-amino-acid-restriction|The Hallmarks of Protein and Amino Acid Restriction]]
> 在各個必需胺基酸中，白胺酸（經由 mTORC1）與甲硫胺酸（部分經由 FGF21 與甲基供體效應）是蛋白質限制反應的主要驅動者。胺基酸限制的表型常可由藥理學 mTORC1 抑制所模擬。

## 性別差異 — 依性別、肌肉與進食狀態而異的 mTORC1

mTORC1 的活化具**性別與時間二態性**，而 rapamycin（典型的 mTORC1 抑制劑）在壽命藥理學上展現出最清楚的性別差異之一：

### 各性別與進食狀態的活化模式

- **進食狀態依賴性（Am J Physiol Regul Integr 2024 — 方向需查全文；Ballesteros 2016 在肝臟/心臟發現禁食狀態下雌>F 的相反結果）：** 報導指出 mTORC1 活化（p70S6K1 磷酸化）在**禁食時雄性較高**、在**進食時雌性較高**——這種反轉在解讀 mTORC1 生物標記時必須納入考量。
- **心臟專一性（Gürgen, *Hypertension* 2013）：** **雌性心臟的 mTOR 訊號由 ERβ 決定**，而雄性同時維持 mTORC1 與[[mTORC2]]；因此雌激素受體生物學塑造了心臟的生長/自噬反應。
- **癌症中由性荷爾蒙驅動的活化：** 在 KRAS 突變的胰臟癌中，**雄性素–[[Androgen Receptor|AR]]訊號被報導專一地在雄性驅動 mTORC1 活化**（Gökduman, 2023 — 未經證實，需原始文獻），把雄性荷爾蒙狀態與 mTORC1 依賴的腫瘤侵襲性連結起來。在肌肉中，[[Testosterone|睪固醇]]→AR 與 PI3K→Akt 協同驅動 mTORC1→S6K1 肥大（見[[Testosterone|睪固醇]]、[[Androgen Receptor|雄性素受體]]）。

### Rapamycin 的壽命效應具性別專一性

- **雌性從 rapamycin 獲得更大的相對壽命延長**（在三個 ITP 隊列中重現），部分原因是雌性體內藥物血中濃度較高（Miller, *Aging Cell* 2014；Harrison, *Nature* 2009）。
- **給藥方案很重要：** 為期 3 個月的**晚年（20–23 月齡）**短暫 rapamycin 僅對**雄性**有益，而終生給藥則對兩性皆有益；Bitto *eLife* 2016 的 3 個月高劑量對兩性皆有益（依品系/劑量而異）（Strong, *Aging Cell* 2020）。

### 熱量限制（抑制 mTORC1 的介入措施）

- 約 96.6% 小鼠 / 95.7% 人類 CR 研究未區分性別（Suchacki *eLife* 2023）；在有探討之處，**年輕雄性獲得較大的代謝益處**，而歷史性的 McCay 1935 CR 研究是混合性別的先驅（現代的性別分層 CR 要數十年後才出現）。

> [!note]
> 由於 mTORC1 活性會隨進食狀態在兩性間翻轉，而 rapamycin 的益處偏向雌性、早期暴露的益處偏向雄性，因此在任何 phospho-S6K1/phospho-S6 的 mTORC1 讀值、以及解讀 rapamycin/CR 壽命試驗時，**都必須報告時相（進食/禁食）與性別**。

## 病理與臨床相關性

### 癌症
mTORC1 在 60-80% 的人類癌症中被過度活化，途徑包括：
- [[PTEN]]缺失（最常見）
- [[PIK3CA]]活化突變
- [[Akt]]基因擴增
- [[TSC1]]/[[TSC2]]缺失（[[Tuberous Sclerosis Complex|結節性硬化症複合體]]）
- [[STK11]]/[[LKB1]]缺失（[[Peutz-Jeghers Syndrome|Peutz-Jeghers 症候群]]）

組成性的 mTORC1 訊號驅動失控的[[Cell Proliferation|細胞增殖]]、[[Angiogenesis|血管新生]]與代謝重編程。

### 結節性硬化症複合體
[[TSC1]]或[[TSC2]]的功能喪失突變導致結節性硬化症（Tuberous Sclerosis），這是一種以良性腫瘤（錯構瘤）、癲癇、[[Autism|自閉症]]與腎臟[[Angiomyolipoma|血管平滑肌脂肪瘤]]為特徵的神經發育疾病。mTORC1 過度活化是直接的致病機制。

### 代謝性疾病
[[Adipose Tissue|脂肪組織]]、[[Liver|肝臟]]與[[Pancreatic β-cells|胰臟 β 細胞]]中慢性的 mTORC1 活化，會促成[[Insulin Resistance|胰島素阻抗]]、[[Type 2 Diabetes Mellitus|第二型糖尿病]]與[[Obesity|肥胖]]。S6K1 介導的[[IRS1]]磷酸化形成負向回饋，使 PI3K-Akt 訊號去敏感化。

### 老化
mTORC1 過度活化是[[Aging|老化]]的保守性驅動因素。基因或藥理學方式抑制 mTORC1 可延長多種物種（酵母、線蟲、果蠅、小鼠）的[[Lifespan|壽命]]。[[Rapamycin|雷帕黴素]]與[[Rapalogs|Rapalog]]可延長小鼠壽命並延緩多項老化特徵，包括[[Senescence|細胞衰老]]、[[Mitochondrial Dysfunction|粒線體功能障礙]]與[[Proteostasis|蛋白質恆定]]衰退。mTORC1 抑制可重現[[Caloric Restriction|熱量限制]]的許多益處。

### 治療標的
[[Rapamycin|雷帕黴素]]（sirolimus）、[[Everolimus]]、[[Temsirolimus]]與[[Ridaforolimus]]是 FDA 核准的[[mTOR inhibitors|mTOR 抑制劑]]，經變構性 FRB 結構域結合靶向 mTORC1。第二代[[ATP-competitive mTOR inhibitors|ATP 競爭性 mTOR 抑制劑]]（Torin、[[AZD8055]]、[[INK128]]）同時靶向 mTORC1 與 mTORC2 的催化活性。[[Rapalogs|Rapalog]]用作[[Immunosuppressants|免疫抑制劑]]、抗癌藥物，並正作為[[Geroprotectors|老年保護劑]]進行研究。

#

# 

## 文件

提及此實體的文件清單

  - [[_document_ - Autophagy takes it all – autophagy inducers target immune aging|Autophagy takes it all – autophagy inducers target immune aging]]
    - 自噬的核心過程由 mTORC1 抑制和/或 AMPK 活化所啟動，兩者皆是代謝壓力下自噬的典型誘導因子。

  - [[_document_ - From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery|From the regulatory mechanism of TFEB to its therapeutic implications - Cell Death Discovery]]
    - mechanistic target of rapamycin complex 1（mTORC1）是一種非典型的絲胺酸/蘇胺酸激酶，控制合成與分解代謝之間的平衡，並回應包括營養在內的各種訊號 \[\]。

  - [[_document_ - Kinase|Kinase]]
    - M on TFEB | References (PMID) | | ----------------------------------- | ----------------- | --------------- | -------------------------------------------------------------------------------------------- | ----------------- | | S211 | Phosphorylation | mTORC...

  - [[_document_ - Lysosome biogenesis Regulation and functions|Lysosome biogenesis Regulation and functions]]
    - mTORC1 由結合 GTP 的 RagA/B 與結合 GDP 的 RagC/D 組成的異源二聚體複合體招募至溶酶體，並在此由 Rheb GTP 酶活化（Angarola and Ferguson, 2019；Kim et al., 2008；Menon et al., 2014；Sancak et al., 2010；Sancak et al.,...

  - [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]]
    - 溶酶體也是 mTORC1 的活化位置；這是一種演化上保守的絲胺酸/蘇胺酸激酶，可回應能量水平、生長訊號與營養來調節細胞生長與分裂。

  - [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]
    - 在此情況下，AMPK 活性抑制 mTORC1 與蛋白質合成，透過控制合成與分解代謝過程將 ATP 消耗降至最低 \[\]。

  - [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]]
    - mTOR 至少組成兩個不同的多蛋白複合體，mTORC1 與 mTORC2（mTORC2）（Guertin and Sabatini, 2007 綜述）。mTORC1 mTORC1 有五個組成成分：mTOR，它是以下的催化次單元

  - [[_document_ - Evading apoptosis in cancer|Evading apoptosis in cancer]]
    - 在此方面，亦有研究顯示在小鼠淋巴瘤模型中，_Mcl-1_ mRNA 的翻譯可由 mTORC1（mammalian target of rapamycin complex 1，PI3K/Akt 訊號的下游靶點）促進（圖 2）\[\]。

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - 此外，已發現 mTORC1 途徑壓制 SIRT4 所導致的細胞增殖。


  - [[_document_ - Rapamycin for longevity opinion article|Rapamycin for longevity: opinion article]]
    - 指出 rapamycin 在任何年齡皆強力抑制 mTORC1，驅動自噬並延長壽命。
  - [[_document_ - Rapamycin for longevity the pros, the cons, and future perspectives|Rapamycin for longevity: pros, cons & future perspectives]]
    - 將 mTORC1 描述為被 rapamycin 抑制的主要激酶，並以 phospho-S6 作為生物標記。

  - [[_document_ - The Mechanistic Target of Rapamycin (mTOR) Pathway as a Target of Anti-aging Therapies The Role of Rapamycin and Its Analogs in the Regulation of Cellular Processes and Their Impact on Longevity|mTOR Pathway as Target of Anti-aging Therapies (Zerdka et al., 2025)]]
    - 詳述 mTORC1 對 ULK1（自噬）、翻譯/蛋白質恆定的抑制，以及 rapamycin 對免疫調節的作用。

  - [[_document_ - biochemical_basis_hormesis_2026.04.20.719646v1.full|The Biochemical Basis of Hormesis]]
    - 將 mTORC1 認定為[[Incoherent Bivalent Motif|不連貫雙價 motif]]的*靶點*，其兩條分支（經[[PI3K]]通往[[mTORC2]]，以及經[[SK61_2]]通往[[IRS1]]）產生 rapamycin 的[[Biphasic Dose-Response Curve|雙相劑量反應曲線]]；mTORC1→S6K1/2 的連結運作於[[Saturated Enzymatic Regime|酵素飽和區]]。

  - [[_document_ - The-hallmarks-of-protein-and-amino-acid-restriction|The Hallmarks of Protein and Amino Acid Restriction in Aging and Longevity]]
    - 將 mTORC1 定位為飲食蛋白質/白胺酸限制的關鍵胺基酸感知效應器；mTORC1 訊號下降中介了蛋白質限制的許多益處。

## 連結
- [[Incoherent Bivalent Motif]] — mTORC1 是 rapamycin 毒物興奮效應 motif 的中心靶點節點
- [[Biphasic Dose-Response Curve]] — rapamycin 的非單調效價（峰值約 1 nM）
- [[Saturated Enzymatic Regime]] — 低 K 的 mTORC1→S6K1/2 反向連結放大毒物興奮效應
- [[mTORC2]] — 以 mTORC1 為中心的不連貫雙價迴圈的輸出讀值
- [[SK61_2]] — 中介飽和反向連結（mTORC1→IRS1）
- [[IRS1]] — 反向連結所控制的節點
- [[mTOR]] — mTORC1 的催化核心；直接受 rapamycin-FKBP12 抑制
- [[mTORC2]] — 第二個 mTOR 複合體；對急性 rapamycin 不敏感，調節 Act 與細胞骨架動態
- [[Raptor]] — mTORC1 專一架構；底物招募所必需
- [[Rheb]] — mTORC1 直接活化因子；結合 GTP 的 Rheb 結合 mTOR 激酶結構域
- [[TSC1]]/[[TSC2]] — 經 GAP 活性使 Rheb 失活的負向調節因子
- [[AMPK]] — 經 TSC2 與 Raptor 磷酸化抑制 mTORC1 的能量感測器
- [[Autophagy]] — mTORC1 是自噬的主要抑制者；抑制 mTORC1 會誘導自噬
- [[Rapamycin]] — 典型的 mTORC1 抑制劑；結合 FKBP12-FRB 界面
- [[S6K1]] — 關鍵下游效應器；磷酸化多種翻譯調節因子
- [[4E-BP1]] — 翻譯抑制子；經 mTORC1 磷酸化後自 eIF4E 釋放
- [[TFEB]] — 溶酶體基因的轉錄因子；被 mTORC1 留在胞質
- [[Senescence]] — mTORC1 驅動衰老相關分泌表型；抑制可減少 SASP
- [[Aging]] — mTORC1 過度活化加速老化；抑制延長壽命
- [[Tuberous Sclerosis]] — 單基因的 mTORC1 過度活化症候群
- [[Protein Restriction]] — 經由降低白胺酸/胺基酸供應減少 mTORC1 活性
- [[Leucine]] — mTORC1 的主要胺基酸活化劑；限制可抑制之
- [[Methionine Restriction]] — 抑制 mTORC1，是其益處的成因之一
- [[Branched-Chain Amino Acids]] — BCAA 限制降低 mTORC1 訊號
- [[Estrogen Receptor]] — 雌性心臟的 mTOR 訊號由 ERβ 決定；雌激素調節 mTORC1
- [[Androgen Receptor]] — 雄性素–AR 在雄性 KRAS 突變胰臟癌中驅動 mTORC1 活化
- [[Rapamycin]] — 雌性偏向的壽命延長；早期暴露僅對雄性有益
- [[AMPK]] — 互為對應的能量感測器，其肝臟活化偏向雄性

## 連結摘要
- 新增連結：[[mTOR]], [[Raptor]], [[mLST8]], [[PRAS40]], [[Deptor]], [[Cell Growth]], [[Protein Synthesis]], [[Lipid Synthesis]], [[Ribosome Biogenesis]], [[Autophagy]], [[Rheb]], [[Rag proteins]], [[AMPK]], [[TSC1]], [[TSC2]], [[S6K1]], [[4E-BP1]], [[TFEB]], [[ULK1]], [[HIF-1α]], [[SREBP-1c]], [[PGC-1α]], [[Cancer]], [[Tuberous Sclerosis Complex]], [[Rapamycin]], [[Everolimus]], [[Caloric Restriction]], [[Aging]], [[Insulin Resistance]], [[Leucine]], [[Ragulator]], [[GATOR1]], [[REDD1]], [[BNIP3]], [[Lipin-1]], [[ATF4]], [[PIK3CA]], [[PTEN]], [[STK11]], [[LKB1]], [[IRS1]], [[T Cell]], [[Immunosuppressants]], [[Incoherent Bivalent Motif]], [[Biphasic Dose-Response Curve]], [[Saturated Enzymatic Regime]], [[mTORC2]], [[SK61_2]], [[PI3K]], [[Akt]], [[FKBP12]], [[Protein Restriction]], [[Branched-Chain Amino Acids]], [[Methionine Restriction]]
- 建議建立的新實體註記：[[TOR signaling]], [[Rag GTPase]], [[Akt]], [[PI3K]], [[FKBP12]], [[Rapalogs]], [[Geroprotectors]]
  - 性別差異增補（2026-09-02）：新增進食/禁食下性別反轉的 mTORC1 活化、ERβ 決定的雌性心臟訊號、雄性素–AR 的雄性專一活化，以及 rapamycin/CR 的性別專一壽命效應。
  - 應強化的重點連結：[[mTORC1]] ↔ mTORC2, [[mTORC1]] ↔ Autophagy, [[mTORC1]] ↔ TSC2, [[mTORC1]] ↔ [[Aging]], [[mTORC1]] ↔ [[Rapamycin]]
