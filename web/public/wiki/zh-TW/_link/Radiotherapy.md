---
title: Radiotherapy
description: 運用電離輻射損傷腫瘤 DNA 的治療方式；其機制是間接的，經由水的輻解與隨後的的自由基化學將 DNA 損傷「固定」下來，而腫瘤殺傷則由線性－平方細胞存活關係與氧增強比所決定。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - therapy
  - oncology
  - radiobiology
aliases:
  - Radiation therapy
  - Radiation
  - Radiotherapy
  - Radiation oncology
  - Radiotherapeutic
---

# 放射治療

**放射治療（Radiotherapy）**以電離輻射——光子、電子或質子——治療癌症，分成一次至數十次分次給予。約有一半的癌症患者在治療過程中的某個時點會使用它，可作為根治療性療法、手術後的輔助療法，或是針對症狀性轉移的姑息性治療。與它同源的領域是[[Chemotherapy]]：兩者在機制上不同（直接的化學損傷相對於氧化作用所產生的自由基損傷），對於快速分裂細胞的影響傾向也不同，但兩者經常合併使用，並共享相同的劑量限制性毒性——[[Bone Marrow]]衍生毒性與正常組織損傷。

本註記涵蓋生物學與臨床物理學。缺氧－放射敏感性的架構則另行於[[Radiotherapy]]中展開。

## 細胞殺傷的機制

> [!info] 機制
> 電離輻射是**間接**殺死細胞的。光子與電子與水及細胞大分子交互作用以產生游離事件；隨後的激發態與游離水分子解離成羥基自由基（·OH）、氫自由基與超氧化物，以及分子過氧化氫。據估計，約有三分之二的輻射誘導 DNA 損傷是由這些次級自由基造成，而非由能量直接沉積於 DNA 上。羥基自由基的反應性極高，會在奈米範圍內損傷任何與之相鄰的物質，因此這種化學作用無法在病灶層次被修復——修復必須發生在 DNA 斷裂的層次。

致命病灶是 **DNA 雙股斷裂**，可由單一高能徑跡產生，但更常見的是由兩個在空間與時間上夠接近的獨立單股斷裂轉換而來。雙股斷裂是連結至本資料庫 DNA 損傷系列註記的機制性橋樑：細胞面對[[Non-homologous End Joining]]與[[Homologous Recombination]]兩種選項，這項決策由[[53BP1]]、[[BRCA1]]、[[MDC1]]與[[γ-H2AX]]主導，而[[RNF168]]提供招募它們的泛素結構域。

## 氧增強

**分子氧是強效的放射增敏劑。** 在無氧的情況下，次級自由基會無害地重新結合，因此損傷不會被「固定」，可以化學方式還原；有氧存在時，損傷則變成不可逆。**氧增強比**（低 LET 輻射通常為 2.5–3.0）是在缺氧與有氧條件下要達到相同效應所需的劑量比值。

這是放射腫瘤學中最重要的單一生物學事實。實體腫瘤含有嚴重[[Hypoxia]]的區域，因為其血管構造紊亂，而紊亂的血管既滲漏又分流，因此灌流不良的組織具有放射抗性。放射生物學的 4R——修復（Repair）、再分布（Reassortment）、再增殖（Repopulation）與再氧化（Reoxygenation）——正是為了描述如何克服這一點而存在：再氧化是讓分次治療得以運作的原因，因為分次之間間隔的數小時讓缺氧細胞得以重新進入含氧、對放射敏感的區室。

## 線性－平方模型

可繁殖存活用以下公式描述

    SF(D) = exp(−αD − βD²)

其中 α 捕捉單一徑跡的致命損傷，β 則捕捉兩個次致命病灶之間的交互作用（兩個相鄰的單股斷裂轉換成一個雙股斷裂）。**α/β** 比值即分次敏感性：較低的 α/β（早反應的正常組織，以及大多數腫瘤）意味著相對於腫瘤而言，分次治療能保護該組織——這就是傳統分次治療的全部基礎。

> [!warning] 模型的保留
> LQ 模型在傳統的每次分次劑量（約 2–3 Gy）下已獲良好驗證，也是計算等效劑量的通用臨床工作馬。它在放射手術與低分次立體定位治療所用的高每次分次劑量下仍有爭議，Kirkpatrick、Brenner 與 Orton 主張它會高估細胞死亡，因此必須援引額外的、非 DSB 的細胞死亡機制。Brenner 的反論是，LQ 在機制上仍以成對錯誤修復為基礎，在 2–15 Gy 區間內是足夠的。不同研究中所報的人類腫瘤 α、β 與 α/β 值差異甚大，因此任何等效劑量計算都應被視為一個區間上的估計，而非一個確定的數字。

## 技術

- **外照放射**——標準做法。傳統分次治療以每週五天、每次約 1.8–2 Gy，總量 50–70 Gy 給予。低分次治療（次數更少、劑量更大）利用標的組織中較高的 α/β，保護鄰近的低 α/β 組織。
- **立體定位消融放射治療與立體定位放射手術**——單次或少數次極高且空間精確的劑量；其消融機制除直接殺傷外，還涉及血管損傷與抗腫瘤免疫反應。
- **近距放射治療**——將密封或半密封的放射源置於腫瘤內或緊鄰其處，利用輻射的短射程；用於子宮頸、攝護腺、乳房與頭頸部部位。
- **粒子治療**——質子與更重的離子藉由布拉格峰沉積能量，保護遠端正常組織；這是劑量學上而非放射生物學上的優勢。
- **放射免疫治療與標靶放射性核種治療**——與抗體或受體配體偶聯的同位素，利用腫瘤專一性的抗原密度而非解剖位置。

## 放射增敏與合併治療

將輻射與那些能損傷 DNA、阻斷修復、使細胞週期停滯於 G2（最具放射敏感性的期別），或改善腫瘤氧合的藥物結合，可擴大治療窗。放射增敏劑類別包括[[PARP inhibitors]]、鉑類藥劑、 anthracyclines、抗葉酸藥，以及 DNA 損傷檢查點抑制劑（例如[[ATM]]與[[ATR]]抑制劑）。本資料庫的[[Chemotherapy]]註記涵蓋細胞毒性軸；其合併治療的理據是相同的——殺死那些已被推入脆弱狀態的細胞。

## 毒性

急性效應與快速分裂的組織相關：黏膜炎、[[Bone Marrow]]抑制、皮膚脫屑與噁心。延遲性效應則是對緩慢增殖或不分裂構造的損傷——纖維化、毛細血管擴張、唾液腺流失造成的口乾症、血管病變、次發性腫瘤，以及顱腦照射後的認知衰退。治療指數由腫瘤控制機率與正常組織併發症機率兩條曲線之間的距離定義，而[[p53]]狀態、氧合程度與 α/β 都會移動這些曲線。

次發性腫瘤是真實且可量化的長期風險：乳房照射後實體腫瘤風險約上升 2 倍，這也是小兒科方案採用最低有效劑量的原因，以及過去高危險症候群將放射治療列為禁忌的原因。

## Documents

提及此實體的文件清單

- [[Chemotherapy]] — 癌症治療的另一根全身治療支柱，共享[[Bone Marrow]]衍生毒性，並經常與輻射合併；此組合在小細胞肺癌、食道癌、膠質瘤與頭頸癌中都是標準做法。
- [[Fenbendazole as a Potential Anticancer Drug|Fenbendazole as a Potential Anticancer Drug (Duan 2013)]]
  - 測試 fenbendazole 作為對缺氧細胞的潛在放射增敏劑；結果為陰性。無論以每日三次腹腔注射（50 mg/kg/day）給予，或以 150 ppm 混入飼料，fenbendazole 在體外都未改變有氧或缺氧[[EMT6]]細胞對輻射的反應，在體內也未改變 EMT6 腫瘤的生長或對輻射的反應。

## 連結

- [[Fenbendazole]] — 在 Duan 2013 的 EMT6 研究中作為放射增敏劑加以測試，結果為陰性；它在體外與體內都未改變有氧或缺氧細胞對輻射的反應。這是一項有用且有紀錄的失敗，而非機制性連結。
- [[EMT6]] — 該放射增敏研究中所使用的小鼠乳腺腫瘤模型。
- [[Hypoxia]] — 內在放射抗性的主導機制，因為氧的固定作用才是將初始 DNA 病灶轉換為致命雙股斷裂的因素。
- [[Radiosensitizer]] — 針對氧固定問題設計的藥物類別；與上述討論的合併治療策略有所重疊。
- [[Chemotherapy]] — 非輻射的全身治療分支；兩者具協同作用，因為化療把週期中的細胞推入 G2／M（最具放射敏感性的期別），而輻射則殺死那些否則會修復化療誘導損傷的細胞。
- [[Radiotherapy]] — 本資料庫中關於缺氧與放射增敏的註記，與本註記的機制相同；兩者應予合併，而這正是連結摘要所標示的重複之處。
- [[Ionizing Radiation]] — 這個物理作用者，其 DNA 損傷產出會啟動整個[[DNA Damage Response]]機器。
- [[DNA Damage]] — 主要病灶；致命事件是雙股斷裂，因此[[DNA Repair]]系列註記中的一切都在輻射事件的下游。
- [[Non-homologous End Joining]] — 受照射細胞可用的兩種修復結果之一，也是 G1 期以及缺乏同源重組細胞中所偏好的路徑；NHEJ 缺乏的腫瘤對輻射高度敏感。
- [[53BP1]] — 照射後使細胞走向 NHEJ，這也是為何 53BP1 狀態與 BRCA1 缺乏腫瘤中的 53BP1 喪失會調節輻射與 PARP 抑制劑反應。
- [[BRCA1]] — HR 缺乏使細胞對交聯與電離輻射損傷高度敏感，也是利用 PARP 抑制劑來放大放射敏感性的基礎。
- [[PARP inhibitors]] — 一領先的放射增敏劑類別：PARP 抑制可防止那些會轉變為雙股斷裂的單股中間體被修復，並在 HR 缺乏腫瘤中鎖定合成致死。
- [[p53]] — 狀態是決定輻射反應最強的因素之一；野生型 p53 細胞會停滯並死亡，突變細胞則可能持續分裂穿過損傷。
- [[Cell Cycle]] — G2／M 是最具放射敏感性的期別，S 期最具抗性，這是化療先行同步化再行輻射之理據的基礎。
- [[Reactive Oxygen Species]] — 最近的殺傷者是水輻解所產生的羥基自由基，這正是輻射構成氧化壓力的原因，也將它連結至本資料庫其他部分的氧化還原與粒線體 hormesis 生物學。
- [[Apoptosis]] — 輻射後的主要死亡路徑之一，另有有絲分裂災難與細胞衰老；其平衡取決於 p53 與組織。
- [[Cellular Senescence]] — 受照射腫瘤微環境中一個顯著且長久的成分，因為存活的衰老細胞會分泌 SASP 因子，可能促進腫瘤復發。
- [[Hypoxia]] — 放射抗性的決定因素，也是缺氧細胞增敏劑與氧合策略的標的；另見[[Radiosensitizer]]。
- [[Radiosensitizer]] — 其存在目的就是擴大治療指數的藥物類別；本資料庫的 Radiation Therapy 註記在此引用了一項陰性的 fenbendazole 結果。
- [[Mitochondrial Function]] — 粒線體 ROS 與 NAD+ 依賴性 sirtuin 活化的放射保護作用，是從輻射通往本資料庫其餘部分主導的 sirtuin 生物學的機制橋樑。

## 連結摘要

- 新增連結：[[Chemotherapy]]、[[Radiotherapy]]、[[Ionizing Radiation]]、[[DNA Damage]]、[[Non-homologous End Joining]]、[[53BP1]]、[[BRCA1]]、[[PARP inhibitors]]、[[p53]]、[[Cell Cycle]]、[[Reactive Oxygen Species]]、[[Apoptosis]]、[[Cellular Senescence]]、[[Hypoxia]]、[[Radiosensitizer]]、[[Mitochondrial Function]]、[[DNA Repair]]、[[γ-H2AX]]
- 建議建立的新實體註記：[[Oxygen Enhancement Ratio]]、[[Linear-Quadratic Model]]、[[Brachytherapy]]、[[Stereotactic Body Radiotherapy]]、[[Radiofrequency Ablation]]、[[Dose Fractionation]]、[[Radiation Dose]]、[[4Rs of Radiobiology]]、[[Radiation-Induced Fibrosis]]、[[Second Malignancy]]、[[Neutron Therapy]]、[[Proton Therapy]]、[[Platinum]]、[[Anthracyclines]]、[[ATR Kinase]]、[[Normal Tissue Complication Probability]]、[[Tumour Control Probability]]、[[Radiation Recall]]、[[Bystander Effect]]、[[Radioimmunotherapy]]
- 應強化的重點連結：[[Radiotherapy]] ↔ [[Radiotherapy]]（重複註記——Radiation Therapy 中的缺氧與放射增敏內容應合併至此，孤兒連結也應重新導向）、[[Radiotherapy]] ↔ [[Chemotherapy]]、[[Radiotherapy]] ↔ [[DNA Damage]]、[[Radiotherapy]] ↔ [[PARP inhibitors]]
