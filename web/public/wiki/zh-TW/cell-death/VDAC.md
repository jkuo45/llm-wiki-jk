---
title: VDAC
description: 'VDAC（voltage-dependent anion channel，電位依賴性陰離子通道；又稱粒線體 porin）是一家族由約 280 個胺基酸殘基組成、具 19 條 β-股的外層粒線體膜蛋白，形成代謝物的通用擴散孔道。人類 VDAC1 為主要異型體，扮演代謝檢查點、Ca2+ 處理閘門、通透性轉換孔複合體的組成成分，以及線粒體自噬中 PINK1-Parkin 的受質。'
protected: true
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - ion-channel
  - mitochondrial-membrane
  - metabolism
  - apoptosis
aliases: [Voltage-Dependent Anion Channel, mitochondrial porin, Porin, VDAC1, VDAC2, VDAC3, eukporin]

---

# VDAC

**VDAC**（voltage-dependent anion channel，電位依賴性陰離子通道；「粒線體 porin」；Pfam PF01459）是一族**外層粒線體膜的 β-桶狀 porin**，構成膜間隙與細胞質之間的主要水性通道。哺乳類表達三種異型體——**VDAC1、VDAC2、VDAC3**——其中 VDAC1 占壓倒性主流。

> [!warning]
> **歧義：蛋白家族與異型體之別。**「VDAC」這個名稱同時指蛋白家族，以及在大多數實驗用語中专指 VDAC1。以下幾乎所有機制性主張都是關於 **VDAC1** 的；VDAC2 與 VDAC3 含量較少、特性較不明確，且行為不同（VDAC3 尤其具有獨特的氧化還原調控，且比 VDAC1 對陰離子更具選擇性）。凡未指明異型體的「VDAC」主張，都應理解為 VDAC1 的主張。

第二項歧義：VDAC 是否也存在於**細胞質膜**而不僅在粒線體外膜，仍有**真正的爭議**。UniProt 兩者皆標註；細胞質膜／maxi-anion channel 的文獻存在分歧。粒線體定位則無疑義。

## 結構

- **約 280 個殘基**，形成貫穿外膜的**19 股反平行 β-桶**。奇數股數以及反覆出現的短 β-股，使 VDAC 在結構上成為外膜蛋白中獨具一格的一類。
- **E73**——一個朝向疏水性膜的帶負電側鏈——是關鍵殘基，其位置獨特，適合進行質子轉移與氧化還原感測。
- **螺旋狀 N 端**回摺進入孔口，是決定電位門控行為的主要因素。
- 2008 年透過 NMR 與 X 射線結晶學解析出三個獨立的三維結構（小鼠與人類 VDAC1；PDB 1XNA 系列時期以及 3LQC/2W3O/3K75/5E6Q）；皆一致支持 19 股的架構。2010 年的一項分析確認這些結構代表具生物相關性的天然構形，而非結晶學假象。
- **寡聚化。** VDAC1 形成同源二聚體與同源三聚體。寡聚化是 scramblase 活性所必需，並被提出為使孔道擴大到足以讓[[Cytochrome c]]通過的機制。

## 作用機制

> [!info]
> **電位門控。** VDAC 在低膜電位或零膜電位時開啟，並在超過 **30–40 mV** 時關閉。關鍵在於：兩種狀態都能通過簡單鹽類，差異存在於**有機陰離子**——多數代謝物都屬於這一類。開啟狀態具有陰離子選擇性與高代謝物電導；關閉狀態則轉為陽離子選擇性，代謝物通過受限。因此，「關閉」VDAC 在電生理學意義上並非關於離子——而是由一台類離子通道裝置造成的代謝飢餓。

電位感涉及數個 [[Lysine]] 殘基與 **Glu152**；電位與構形變化之間的耦合尚未完全釐清。經典模型（Colombini、Blachly-Dyson 與 Forte）認為，關閉會使蛋白質的一大段離開孔道，縮小有效孔半徑。活性**受[[Nitric Oxide]]抑制**。

**磷脂 scramblase。** VDAC1 也催化磷脂在外膜兩側的 scrambling——轉位陰離性與兩性離子性脂質——而此功能在機制上與通道活性**無關**。寡聚化為其必要條件。這是同一蛋白的第二種非通道功能。

## 代謝功能

VDAC 最合理的理解是一個**代謝檢查點控制器**，因為由哪一種代謝物離開膜間隙，決定了細胞質中會運行哪一條代謝途徑。

- **受質：** ATP、ADP、丙酮酸、蘋果酸及其他代謝物——因此 VDAC 與細胞質及粒線體的代謝酵素有廣泛溝通。
- **己糖激酶結合。** 細胞質己糖激酶（HK1、HK2）與葡萄糖激酶會結合 VDAC，將糖解作用定位在通道口。肌酸激酶在基質側亦然。此** HK–VDAC 複合體**是[[Glycolysis|糖解作用]]與[[Oxidative Phosphorylation|氧化磷酸化]]偶聯的經典形式。
- **Warburg 效應。** HK1–VDAC 交互作用是 1974 年 Warburg 觀察到腫瘤細胞即使在正常氧分壓下仍進行糖解的機制基礎：己糖激酶驅動的糖解通量需要 VDAC，因此 VDAC 過度表達是轉化型代謝表型的常見特徵。
- **鈣。** VDAC 是調控 Ca²⁺ 進出粒線體的主要調節因子。由於 Ca²⁺ 是丙酮酸去氫酶與異檸檬酸去氫酶的輔因子，VDAC 的通透性同時決定能量產生與代謝恆定。

> [!info]
> **MAM 接點。** VDAC1 是內質網—粒線體接觸位點處 HSPA9（GRP75）–IP3R1–VDAC1 複合體（[[Mitochondria-Associated Membranes|MAM]]）的一部分，該複合體將 Ca²⁺ 由內質網腔運送至膜間隙，再交予[[MCU]]。SIRT3 正是藉由抑制此 VDAC1/GRP75/IP3R 複合體，保護神經元免受高血糖引起的 Ca²⁺ 超載。這是 VDAC 作為訊號傳遞平台而非孔道最清楚的例子。

## 在受調控細胞死亡中的角色

VDAC 位於三種死亡機制的交會點：

1. **凋亡。** VDAC 介導[[Cytochrome c]]外流。它與 Bcl-2 家族形成功能單元：**[[BAX]]**直接與 VDAC 交互作用以增加孔徑、促進細胞色素 c 釋放，而抗凋亡的 Bcl-xL 則產生相反效果（Shimizu et al., *Nature* 1999）。抗 VDAC 抗體會干擾 Bax 介導的釋放。由於寡聚化可能形成容許性孔道，VDAC 是具吸引力的化學治療開發標的——儘管它並非[[Mitochondrial Permeability Transition Pore|mPTP]]的必要組成成分。
2. **通透性轉換。** VDAC 是 mPTP 複合體的組成成分（與 SPG7/Afg3L2 及 PPIF/cyclophilin D 一起），並與[[Cyclophilin D]]交互作用。注意其限制：VDAC *可能參與* PTP 的形成，但並非其形成所必需。
3. **鐵死亡。** Erastin 除了作用於[[System Xc-|System Xc⁻]]之外也作用於 VDAC，而涉及 VDAC 的 RAS–RAF–MEK 驅動性氧化死亡（Yagoda et al., *Nature* 2007）是通往粒線體功能失調的典型非凋亡路徑。

**轉譯後調控。**
- **Parkin。** 在去極化的粒線體中，VDAC1 作用於[[PINK1]]與[[Parkin]]的下游：Parkin 的多泛素化促進[[Mitophagy|線粒體自噬]]，而**單泛素化則減少粒線體 Ca²⁺ 內流，進而抑制凋亡**。[[USP30]]對 VDAC1 去泛素化。這使 VDAC1 成為線粒體自噬與凋亡兩項決定的交會點。
- **NEK1 在 Ser193 的磷酸化**驅動*關閉*構形，限制通透性並防止損傷後的凋亡性死亡。
- **AKT–GSK3B** 磷酸化可穩定 VDAC1，可能是藉由阻斷泛素介導的蛋白酶體降解。
- 與神經醯胺、磷脂醯膽鹼、[[Cholesterol|膽固醇]]及氧化固醇結合；與類澱粉β及 APP 交互作用。

## 臨床相關性

- **神經退化。** 藥理抑制 mPTP 或 VDAC1 可在 TDP-43 蛋白病模型中減輕神經退化，方式是阻止細胞質內的[[mtDNA]]外逸及其後續由[[STING]]驅動的微膠細胞老化。注意其模型依賴性：在帶有另一種 TDP-43 突變的神經元細胞株中，mPTP 抑制並未降低細胞質 mtDNA，因此 mtDNA 釋放的路徑具有觸發因素與細胞類型專一性。
- **MAM 鈣超載。** 高血糖驅動的 VDAC1/GRP75/IP3R 活化，是糖尿病中海馬迴神經元凋亡與認知缺損的基礎。
- **癌症。** VDAC1 過度表達支持糖解通量與存活；它是具潛力的代謝標的，且 BCL2L1 與 BAK1 都*透過* VDAC1 作用。
- **缺血。** NEK1 介導的 VDAC1 關閉在損傷後具有保護作用，是少數「關閉 VDAC」為治療方向的案例之一。
- **診斷用途。** VDAC1 是標準的 Western blot 上樣對照，這在文獻中是真正的混淆因素：許多已發表的「VDAC1 不變」主張其實是上樣對照假象，而非真實測量結果。

## Documents

- [[_document_ - Ferroptosis past present and future]] —— erastin 的第二個標的是 VDAC，可誘導粒線體功能失調；以及涉及 VDAC 的 RAS–RAF–MEK 相依賴性氧化細胞死亡路徑。
- [[_document_ - s41514-026-00424-3_reference_mitophagy_neuroprotection]] —— Parkin 將包括 VDAC1 在內的外膜蛋白泛素化，為粒線體標記以供自噬清除。
- [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation]] —— VDAC1 開啟是 TDP-43 得以進入粒線體的路徑之一，促使氧化壓力、mPTP/VDAC1 開啟與 mtDNA 外逸；抑制 VDAC1 可減輕神經退化。
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases]] —— SIRT3 藉由抑制 VDAC1/GRP75/IP3R 複合體並減少 MAM 形成，保護海馬迴神經元免受高血糖誘導的凋亡。
- [[_document_ - Parthanatos Andrabi 2008 mitochondrial nuclear crosstalk]] —— 將 VDAC 與 ANT 及 cyclophilin D 並列，視為通透性轉換中一個機制上開放的候選因子。

## Connections

- [[PINK1]] 與 [[Parkin]]——泛素化 VDAC1 的線粒體自噬軸；多泛素化觸發清除，單泛素化則藉由限制 Ca²⁺ 進入阻斷凋亡，因此 VDAC1 的泛素狀態編碼了「線粒體自噬 vs. 凋亡」的決定。
- [[Cytochrome c]]——VDAC1 介導其外流；這是使細胞命定於 caspase 相依賴性死亡的釋放步驟。
- [[BAX]]——促凋亡的 Bcl-2 家族成員，透過結合 VDAC1 並擴大孔道而作用；Bcl-xL 則與之拮抗。
- [[Mitochondrial Permeability Transition Pore]]——VDAC1 是 mPTP 複合體的組成成分，但對孔道功能並非必需，這是所有 mPTP 討論中的標準注意事項。
- [[Mitochondria-Associated Membranes]]——內質網—粒線體接觸處的 HSPA9/GRP75–IP3R1–VDAC1 複合體是細胞質 Ca²⁺ 抵達[[MCU]]的路徑，也是 SIRT3 作用的節點。
- [[SIRT3]]——藉由抑制 VDAC1/GRP75/IP3R 複合體保護神經元；是粒線體去乙醯化酶與 Ca²⁺ 相依賴性細胞死亡之間的直接連結。
- [[Hexokinase-1]]——錨定於 VDAC 上、將[[Glycolysis|糖解作用]]與[[Oxidative Phosphorylation|氧化磷酸化]]偶聯的糖解酵素；Warburg 效應仰賴此交互作用。
- [[Warburg Effect]]——VDAC 過度表達與 HK–VDAC 複合體是癌症中 aerobic 糖解的機制基礎。
- [[mtDNA]] 與 [[STING]]——VDAC1 開啟是粒線體 DNA 抵達細胞質的路徑，在該處活化[[cGAS-STING Pathway]]並驅動微膠細胞老化。
- [[Ferroptosis]]——erastin 與 System Xc⁻ 共同針對 VDAC；RAS–RAF–MEK 驅動、依賴 VDAC 的氧化死亡是典型的鐵死亡鄰近機制。
- [[Translocase of the Outer Mitochondrial Membrane]]——VDAC 與 TOM40 構成一個演化上相關的外膜 β-桶蛋白家族，即同一膜上輸入與輸出機制的兩個組成成分。

## Linking Summary
- 新增連結：[[PINK1]]、[[Parkin]]、[[USP30]]、[[Cytochrome c]]、[[BAX]]、[[Bcl-2]]、[[Mitochondrial Permeability Transition Pore]]、[[Cyclophilin D]]、[[Mitochondria-Associated Membranes]]、[[MCU]]、[[SIRT3]]、[[Hexokinase-1]]、[[Glucokinase]]、[[Creatine Kinase]]、[[Warburg Effect]]、[[Glycolysis]]、[[Oxidative Phosphorylation]]、[[mtDNA]]、[[STING]]、[[Ferroptosis]]、[[System Xc-]]、[[Nitric Oxide]]、[[Cholesterol]]、[[Translocase of the Outer Mitochondrial Membrane]]、[[Mitochondrial outer membrane permeabilization]]
- 建議建立的註記：[[VDAC Family]]、[[Porin]]、[[VDAC2]]、[[VDAC3]]、[[Phospholipid Scramblase]]、[[NEK1]]、[[Maxi-Anion Channel]]、[[SPG7]]、[[IP3R1]]、[[E73]]
- 應強化的重點連結：[[VDAC]] ↔ [[Parkin]] ↔ [[PINK1]] ↔ [[USP30]]；[[VDAC]] ↔ [[BAX]] ↔ [[Cytochrome c]] ↔ [[Apoptosis]]；[[VDAC]] ↔ [[SIRT3]] ↔ [[Mitochondria-Associated Membranes]] ↔ [[MCU]]