---
title: Eryptosis
description: Ca2+ 驅動、磷脂醯絲胺酸外露的成熟無核紅血球受調控死亡——Gardos K+ 外排、scramblase 活化、calpain 膜出芽、對抗紅血球壞死性凋亡的 caspase-8 命運轉換、在溶血之前快速被細胞清除，以及相關的可成藥性。
protected: true
created: 2026-09-10
updated: 2026-11-04
tags: [cell-death, erythrocyte, calcium-signaling]
url: #
source: #
aliases: [Eryptotic cell death, Suicidal erythrocyte death, Eryptosis (erythrocyte apoptosis-like death)]
---

# Eryptosis

**Eryptosis** 是成熟[[Erythrocytes]]的受調控細胞死亡（RCD）——體內唯一*非*意外、有核細胞之外的死亡程式。由於紅血球在[[Erythropoiesis]]期間排出細胞核與細胞器，無法運作粒線體凋亡小體；取而代之，細胞質 **Ca2+ 上升是主控調節者**，所有特徵皆由此衍生：Gardos 通道 K+ 外排 → 細胞縮小、[[Calpain]]活化 → 細胞骨架消化與膜出芽、[[Scramblase]]活化／flippase 抑制 → [[Phosphatidylserine]]（PS）外露。PS 陽性細胞通常在任何[[Hemolysis]]釋放促發炎 DAMP 之前，就在**數分鐘內**被[[Efferocytosis]]吞噬。

> [!info]
> 來源：[[_document_ - Current understanding of eryptosis mechanisms, physiological functions, role in disease, pharmacological applications, and nomenclature recommendations|Tkachenko et al. 2025 eryptosis consensus review]]
> 確認 eryptosis 需要 **PS 外露加上細胞內 Ca2+ 上升**。該術語於 2005 年在圖賓根（Lang 等人）提出；至 2024 年底已有超過 600 篇 PubMed 論文。

## 機制核心

| 觸發因素類別 | 軸線 | 建議命名 |
| --- | --- | --- |
| 經由陽離子通道 Ca2+ 內流 | Ca2+ → Gardos/calpain/scramblase | 陽離子通道驅動的 eryptosis |
| 氧化壓力（Hb Fenton 化學、NADPH 氧化酶、黃嘌呤氧化還原酶） | ROS → Ca2+ 內流、caspase-3 | ROS 介導的 eryptosis |
| 鞘磷脂水解 → 神經醯胺 | 神經醯胺 → Fas rafts、DISC、caspase-8/-3 | 脂質驅動的 eryptosis |
| Fas/FasL 結合 | Fas → [[FADD]] → caspase-8/-3 | 外源性 eryptosis |
| 遺傳性酵素缺陷（G6PD） | 對所有誘導物易感性上升 | RBC 酵素缺乏依賴性死亡 |

- **Ca2+ 內流：** RBC 無法儲存 Ca2+，故內流為必然。候選途徑：[[TRPC6]]（人類）／TRPC4-5（小鼠）、[[NMDA receptor|NMDA]]／AMPA 受體、[[Piezo1]]（機械壓力）、Cav2.1。這些通道靜止時關閉，遇 ROS、高滲或去除 Cl−（以葡萄糖酸鹽取代）時開啟；去除細胞外 Ca2+ 可中斷 eryptosis。
- **執行：** [[Gardos Channel|Gardos 通道（KCa3.1/KCNN4）]]K+ 外排（可被 charybdotoxin/clotrimazole 阻斷），Cl− 與水隨之排出；[[Calpain]]降解膜–細胞骨架支架（但 calpain-1 剔除鼠的 RBC 壽命正常，故 calpain 是放大器而非必要執行者）。
- **能量耦合：** 去除葡萄糖或 2-deoxyglucose → ATP 耗竭 → [[PKC|PKCα]]轉位至膜 → 磷酸化陽離子通道 → Ca2+ 上升。[[AMPK]]感知缺損並抑制死亡（AMPKα 剔除鼠：脾大、嚴重貧血）；[[Glucose-6-Phosphate Dehydrogenase|G6PD]]／PPP 產生的 NADPH 供給穀胱甘肽還原酶，G6PD 抑制（dimethyl fumarate、parthenolide）會導致 GSH 耗竭與 eryptosis。
- **抗 eryptosis 支路：** [[Nitric Oxide|NO]] → 可溶性鳥苷酸環化酶 → cGMP → [[cGMP-Dependent Protein Kinase I|cGKI]]（cGKI 剔除鼠：eryptosis 增強、貧血、脾大）；[[Erythropoietin]]；MSK1/2。

## Caspase 屬次要，但 caspase-8 是開關

Caspase（[[Caspase-3]]、[[Caspase-8]]）是紅系譜的遺傳保留，但對 eryptosis 非必需：PS 外露常在未招募 caspase-3 時發生，且 staurosporine（典型凋亡觸發物）殺不死 RBC，而 Ca2+ 離子載體 ionomycin 可以。若 caspase 參與，則位於 Fas 下游：在老化 RBC 中，[[Fas]]與脂質 raft 標記（Gαs、CD59）共定位，氧化壓力驅動 Fas 轉入 rafts、DISC 組裝與 caspase-8/-3 活化（NAC 可阻斷，calpain 不行）。砷與鉛中毒、以及香菸萃取物經[[p38 MAPK]]走的是同一途徑。

> [!important]
> **紅血球壞死性凋亡（erythrocyte necroptosis）經由 RIPK1/FADD/caspase-8 壞死小體運作，其中 caspase-8 活性可防止死亡**——這與有核細胞恰好相反。eryptosis 與[[Erythronecroptosis]]看來互斥，故 caspase-8 決定死亡模式。RBC 會整合外源死亡訊號這一事實，挑戰了「RBC 既無生也無死」的看法。

## 關鍵區分

- **與[[Apoptosis]]之別：** 無 APAF-1、cytochrome c、caspase-2/-6/-7/-9；Ca2+ 直接作用而非經 MOMP；ROS 途徑較少；無脂質序崩解（無內膜可交換脂質）；無 DNA 片段化；無轉錄／表觀遺傳調控。
- **與[[Senescence|紅血球衰老]]之別：** 清除時間常數——eryptotic 細胞以分鐘計，衰老細胞以日計。老化細胞本來就比較氧化備戰，故衰老的 PS 陽性細胞應以 eryptotic 評分。
- **與[[Hemolysis]]之別：** 溶血是意外細胞死亡（ACD），機械受體驅動、不可成藥、釋放 DAMP；eryptosis 是受調控、非裂解、抗發炎（PS 具免疫抑制性），且先於溶血發生。
- **與[[Erythronecroptosis]]之別：** 見上。
- **與[[Ferroptosis]]之別：** 鐵負荷的血紅蛋白與 GPX4 雖存在，但轉錄／執行層面的鐵死亡機制並不存在；鐵過載死亡更宜稱為「鐵過載驅動的細胞死亡」。

## 生理角色與清除

- Eryptosis 縮短受損、能量耗竭、氧化或滲透壓力細胞的存活；健康的紅血球總量反映[[Erythropoiesis]]與 eryptotic 清除之間的平衡。代償不足的 eryptosis → [[Anemia]]。
- 宿主防禦：*Plasmodium* 感染的紅血球發生氧化壓力驅動的 eryptosis，宿主細胞與寄生蟲一同清除；G6PD 缺乏、鐮狀細胞性狀、地中海貧血性狀、GLUT1／AE1 缺乏皆可降低 eryptotic 閾值而部分保護。
- 清除：PS 作為「吃我」訊號被巨噬細胞讀取；去唾液酸化也會引發 PS；衰老細胞則由天然 IgG 自體抗體清除，常見抗[[Anion Exchanger 1|AE1/Band 3]]。病理中以肝竇（竇內皮 stabilize-1/2）與[[Kupffer Cell|Kupffer 細胞]]為主；[[CD47]]–SIRPα 提供「別吃我」煞車。
- 免疫原性：無 DAMP 釋放的證據（膜完整），但 eryptosis 驅動細胞外囊泡（EV）脫落，其 EV 相關 DAMP 出現於儲存的紅血球製劑中；PS 驅動的 efferocytosis 使巨噬細胞重編程為抗發炎、HO-1 上調的表型（在實驗性腦出血中有益）。

## 疾病關聯

加速的 eryptosis 造成貧血（快速清除），增加凝血風險（PS 陽性 RBC 促凝且具黏附性）並損傷內皮。文獻記載的升高：[[Chronic Kidney Disease]]／ESRD（尿毒毒素——indoxyl sulfate、acrolein、p-cresol、urea、IL-1β/IL-6；血液透析與腹膜透析、腹膜炎）、肝衰竭與高膽紅素血症（bilinrubin 惡性循環）、[[Sepsis]]、[[Diabetes]]、未治療的[[Hypertension]]、[[Systemic Lupus Erythematosus|SLE]]與自體免疫溶血性貧血（冷 IgM/IgA、補體 C5 依賴）、抗磷脂症候群、[[Long COVID]]（fibrin amyloid 微血栓）、肺癌與化療（[Cisplatin]、topotecan、tamoxifen）、[[Malaria]]、遺傳性血液病（鐮狀細胞貧血、地中海貧血、G6PD 缺乏、遺傳性球形紅血球增多症），以及[[Parkinson's Disease|Parkinson's]]／[[Alzheimer's Disease|Alzheimer's]]。

## 偵測與藥理

- 讀值：流式細胞術 annexin V–FITC（黃金標準）、Ca2+ 染劑（Fluo-4/AM、X-Rhod-1）、FSC 縮小、SSC 顆粒度、經 NBD-PS 的轉位酶活性、ROS panel、ceramide、calpain、ATP/GSH。RBC 無法做基因操作，故藥理是歸屬路徑的唯一工具；RIPK1/3/MLKL 抑制（Nec-1、GSK'872、NSA）而非 Z-VAD-FMK 可區分[[Necroptosis]]。
- **毒理用途：** 超過 110 種化合物在亞溶血濃度下觸發 eryptosis，使其成為比溶血更敏感、可重現且更具機制資訊的血液相容性終點——用於汙染物排序（鉛、鎳、六價鉻、BPA/BPF/BPS/BPAF、溴化與有機磷阻燃劑、鄰苯二甲酸鹽、DEET、魚藤酮）、替代化學品驗證（TBBPS 比 TBBPA 安全；BPS **不是**安全的 BPA 替代品）、職業暴露評估與奈米材料血液相容性測試。
- **治療：** 可操作的節點是 PS 外露——阻斷它（抗氧化劑、NO/cGMP、EPO、離子通道調節）以保護 RBC，或驅動 eryptosis 以清除感染細胞（β-cryptoxanthin）。Teriflunomide 是雙重作用：腫瘤細胞凋亡加 eryptosis 抑制，可能減輕化療誘發的貧血。證據多為 ex vivo／臨床前；人類體內驗證是主要缺口。

## Documents

- [[_document_ - Current understanding of eryptosis mechanisms, physiological functions, role in disease, pharmacological applications, and nomenclature recommendations|Tkachenko et al. 2025 eryptosis consensus review]] — Ca2+/Gardos/scramblase/calpain 軸、caspase-8 作為 eryptosis 與 erythronecroptosis 命運開關、疾病圖譜、命名、成藥性、檢測指南。
- [[_document_ - Current understanding of eryptosis supplementary material (MOESM1)|Tkachenko et al. 2025 supplementary material (MOESM1)]] — Ringer buffer 組成；依標的類別的調節劑目錄；檢測方法；140+ 誘導物與主要抑制物連同劑量／時間／Ca2+／ceramide 讀值。
- 細胞死亡比較頁面（eryptosis 列加動畫）：Ca2+ → scramblase → PS 軸；以小時計的病程；除非隨後發生壓倒性溶血，否則靜默清除。

## Connections

- [[Erythrocytes]] — 無核、無細胞器的細胞，其截斷的死亡機制定義了 eryptosis
- [[Erythronecroptosis]] — 裂解性的 RIPK1/RIPK3/MLKL 對應物；經 caspase-8 與 eryptosis 互斥
- [[Apoptosis]] — 共享 PS 外露與靜默清除，但不共享 caspase／核內機制
- [[Ferroptosis]] — 共享脂質過氧化觸發物；執行者不同（GPX4／鐵 對 Ca2+/scramblase）；在成熟 RBC 中未被證實
- [[Gardos Channel]] — 執行縮小的 Ca2+ 活化 K+ 通道
- [[Piezo1]]／[[TRPC6]] — 機械敏感與 TRP Ca2+ 內流途徑
- [[Scramblase]]／[[Flippase]]／[[Phosphatidylserine]] — 「吃我」訊號機制；PS 既是標記也是藥物標的
- [[Calpain]] — Ca2+ 依賴的細胞骨架蛋白酶，產生出芽與 AE1 切割
- [[Caspase-8]]／[[Caspase-3]] — 來自紅系譜的保留；位於 Fas/DISC 下游並是相對壞死性凋亡的命運開關
- [[Fas]]／[[FasL]]／[[FADD]]／[[Lipid Rafts]] — 外源性 eryptosis 平台；ceramide 驅動 rafts 中的 Fas 寡聚化，FADD 組裝 DISC
- [[CK1α]]／[[p38 MAPK]]／[[PKC]]／[[cGMP-Dependent Protein Kinase I|cGKI]] — 紅血球激酶組：CK1α、p38 MAPK 與 PKC 促 eryptosis，cGKI 抗 eryptosis
- [[Ceramide]]／[[Sphingomyelin]]／[[Sphingomyelinase|SMases]]／[[Acid Sphingomyelinase]] — 脂質驅動支路
- [[Reactive Oxygen Species|ROS]]／[[Glutathione]]／[[Glucose-6-Phosphate Dehydrogenase]]／[[Glycolysis]]／[[AMPK]] — 氧化還原與能量支路
- [[Efferocytosis]]／[[Macrophage]]／[[Kupffer Cell]]／[[Phagocytosis]]／[[CD47]]／[[Anion Exchanger 1]] — 清除機制及其煞車
- [[Hemolysis]]／[[Damage-Associated Molecular Patterns|DAMPs]] — eryptosis 所防止的促發炎替代結果
- [[Chronic Kidney Disease]]／[[Sepsis]]／[[Anemia]]／[[Diabetes]]／[[Malaria]]／[[Erythropoietin]] — 疾病與治療脈絡
- [[Annexin V]] — PS 偵測試劑

## Linking Summary

- 由 `_link/` 依 §7 移至 `src/notes/cell-death/`（eryptosis 是核心死亡機制；現為 `protected: true`）。
- 新增連結：[[Erythrocytes]]、[[Erythronecroptosis]]、[[Gardos Channel]]、[[Piezo1]]、[[TRPC6]]、[[Efferocytosis]]、[[Kupffer Cell]]、[[CD47]]、[[Anion Exchanger 1]]、[[Lipid Rafts]]、[[AMPK]]、[[Glycolysis]]、[[Glucose-6-Phosphate Dehydrogenase]]、[[Nitric Oxide]]、[[Erythropoietin]]、[[Erythropoiesis]]、[[Sepsis]]、[[Diabetes]]、[[Long COVID]]、[[Systemic Lupus Erythematosus]]、[[Malaria]]、[[Parkinson's Disease]]、[[Alzheimer's Disease]]、[[Cisplatin]]、[[Hemolysis]]。
- 建議新建的實體筆記：[[Kupffer Cell]]、[[TRPC6]]、[[Duffy Antigen Receptor for Chemokines]]、[[Carbonic Anhydrase]]。
- 應強化的強連結：[[Eryptosis]] ↔ [[Erythronecroptosis]]（caspase-8 開關）、[[Eryptosis]] ↔ [[Erythrocytes]]（細胞器流失 → Ca2+ 主導）、[[Eryptosis]] ↔ [[Phosphatidylserine]]（藥物標的）。
