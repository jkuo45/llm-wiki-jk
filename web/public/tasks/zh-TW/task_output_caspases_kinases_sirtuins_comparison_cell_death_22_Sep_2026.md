---
title: "Caspases vs Kinases vs Sirtuins — 酶超家族比較"
description: 三大翻譯後修飾酶超家族（caspases、kinases、sirtuins）在化學反應、可逆性、輔因子與生物角色上的比較；其串擾節點；以及它們如何調控「需要的」與「不需要的」細胞死亡。
created: 2026-09-22
updated: 2026-09-23
tags: [task-output, caspase, kinase, sirtuin, enzyme, post-translational-modification, apoptosis, pyroptosis, signaling, nad-plus, cell-death]
---

# Caspases vs Kinases vs Sirtuins — 比較

產生時間：22_Sep_2026 12:22 PM PDT。細胞死亡調控章節新增：23_Sep_2026 09:58 AM PDT。
來源：wiki 知識庫筆記 `cell-death/Caspases.md`、`_link/Kinase.md`、`sirtuins/Sirtuins.md`、`_link/Sirtuin-Caspase Crosstalk.md`，另有 `Akt.md`、`XIAP.md`、`Src.md`、`PAK2.md`、`Caspase-2.md`、`Caspase-3.md`、`PKCδ.md`、`NLRP3 Inflammasome.md`、`p53.md`、`FOXO Transcription Factors.md`、`Apoptosis.md`、`Pyroptosis.md`。以 `graphify query` 與 `graphify path` 交叉核對圖譜。綜合知識庫內容；非最新文獻檢索。

三者皆為對既有蛋白質進行翻譯後修飾的酶超家族，用以改變蛋白質的活性、定位或穩定性。它們在反應化學、修飾的可逆性、輔因子需求，以及所控制的生理過程上各不相同。

## 比較表

| | **Caspases** | **Kinases** | **Sirtuins** |
|---|---|---|---|
| **化學反應** | 半胱氨酸蛋白酶 — 於 **Asp** 殘基 C 端切斷肽鍵 | 將 ATP 的 **γ-磷酸基**轉移至 Ser/Thr/Tyr（或脂質/糖）羥基 | **NAD⁺ 依賴性**去乙醯酶/去醯基酶（部分成員亦進行 ADP-核糖基化） |
| **對標的的效應** | 蛋白質水解 — 切割後通常使受質失活或降解 | 磷酸化 — 改變活性、結合或定位；由磷酸酶逆轉 | 移除醯基標記（乙醯基、琥珀醯基、丙二醯基…）；由醯基轉移酶逆轉，受 NAD⁺ 限制 |
| **輔因子／燃料** | 無（以酶原形式合成，於活化平台上組裝） | **ATP** | **NAD⁺**（反應計量消耗 NAD⁺，產生煙鹼醯胺 + 2′-O-醯基-ADP-核糖） |
| **活化邏輯** | 以不活化的酶原合成；啟動型 caspases 於鄰近平台（PIDDosome、DISC）二聚化，再以蛋白水解活化執行型 caspases | 受磷酸化級聯、次細胞定位與支架蛋白調控 | 受 NAD⁺/煙鹼醯胺水平、翻譯後修飾、定位把關；部分經變構活化（STACs、[[Resveratrol]]） |
| **規模** | 哺乳動物約 12–17 個成員 | **最大的酶超家族**（500+ 種蛋白激酶） | 哺乳動物 7 種（SIRT1–7） |
| **主要角色** | [[Apoptosis]]、[[Pyroptosis]]、[[Inflammation]] — 執行細胞的拆解 | 訊號傳導 — 增殖、代謝、細胞週期、細胞死亡 | 代錶／表觀遺傳感測 — 抗壓、自噬、發炎、壽命 |
| **標記的可逆性** | 不可逆 — 蛋白質水解無法復原 | 可逆（激酶 ↔ 磷酸酶） | 原則上可逆（sirtuin ↔ 乙醯轉移酶）；煙鹼醯胺回饋抑制 sirtuins |

## 關鍵對比

- **不可逆 vs 可逆：** caspase 切割是終末事件，使細胞承諾進入拆解程序；磷酸化與去乙醯化則是可逆修飾，允許蛋白質功能隨訊號持續調整。
- **輔因子作為輸入：** 激酶消耗 ATP，其含量豐富、主要反映能量狀態，間接調節激酶調控因子；sirtuins 消耗 NAD⁺，其細胞濃度追蹤 NAD⁺/NADH 平衡，因此將 sirtuin 活性直接耦合至代謝狀態 — 這是在衰老脈絡下它們對熱量限制與 NAD⁺ 前體（[[NMN]]、NR）產生反應的基礎；caspase 則由損傷相關或死亡受體驅動的活化平台組裝來活化，而非小分子輔因子。
- **生理偏向：** 激酶輸出取決於脈絡（例如 [[Akt]] 磷酸化可促存活，在其他脈絡則與死亡訊號相關）；sirtuin 活性一般偏向抗壓與存活（SIRT1 去乙醯化 p53 與 FOXO4，降低促細胞凋亡轉錄）；caspase 活性一般驅動細胞死亡 — 不過發炎性 caspases 也加工 IL-1β/IL-18 並參與非致死性的發炎重塑。

## 交匯點（三者相遇之處）

- **激酶修飾 caspases：** Src 磷酸化並抑制 [[Caspase-8]]；Akt 於 Ser196 磷酸化 [[Caspase-9]] 並抑制其活性；PAK2 磷酸化並抑制 [[Caspase-7]]（`Caspases.md`，Post-Translational Regulation）。
- **Sirtuins 抑制 caspase 活化：** SIRT1 去乙醯化 p53 與 FOXO4，降低 Bax 表達與下游 caspase-3 活化；SIRT5 去乙醯化 [[Cytochrome c]]，減少凋亡小體形成與 caspase-3 活化；SIRT1 與 SIRT3 抑制 NLRP3 炎性小體組裝與 Caspase-1 成熟（`Sirtuin-Caspase Crosstalk.md`）。
- **Caspases 切割 sirtuins：** Caspase-3 與 Caspase-9 於 DEPDVP（殘基 704–709）切割 SIRT1，造成核至細胞質重新定位並喪失其轉錄保護功能 — 一旦死亡程序啟動便加以強化。
- **激酶與 sirtuins 共享結構特徵：** 激酶與 sirtuins 的 ATP/ADP-核糖結合口袋足夠相似，以至於某些激酶抑制劑（Ro31-8220、GW5074）亦抑制 SIRT1/SIRT2 — 藥理學上相關的脫靶考量（`Kinase.md`）。

## 調控細胞死亡 — 需要的與不需要的

三個家族構成分層控制系統：激酶設定急性訊號閾值，sirtuins 設定代謝（NAD⁺）閾值，而 caspases 將任一者轉化為不可逆的承諾 — 兩個方向皆有直接邊（`graphify path` 確認 `Akt —phosphorylates→ Caspase-9` 與 `SIRT1 —is_cleaved_by→ Caspase-3` 均為單跳）。

### 激酶 → caspases — 即時閾值

大多數激酶輸入是對 caspases 的抗死亡制動：

- **Akt** 磷酸化 [[Caspase-9]]（Ser196）並穩定 [[XIAP]]（Ser87），提高活化閾值（`Akt.md`、`XIAP.md`）。
- **Src** 磷酸化 [[Caspase-8]]（Tyr380），阻斷其成熟並將其改作促遷移/NF-κB 支架（`Src.md`、`Caspase-8.md`）。
- **PAK2** 抑制 [[Caspase-7]]（Ser30/Ser239） — 乳癌的化療抗性機制（`PAK2.md`）。
- **CDK1/CYCLIN B1** 在有絲分裂期間沉默 [[Caspase-2]]；PKA、PKCζ 與 p38 另加抑制位點。

少數為促死亡：**c-ABL** 在 DNA 損傷後促進 Caspase-9 自切割；**PKCδ** 增強 Caspase-3；JNK/p38 磷酸化 Bax（Thr167）以促進線粒體外膜通透化 — ERK2 修飾同一位置以促存活，使 Bax 成為符合偵測器（`Apoptosis.md`）。

反向調控來自磷酸酶（SHP1、PP2A、PP1α），因此激酶對 caspases 的控制確實可逆。

### Sirtuins → caspases — 代謝閾值

Sirtuins 主要將 caspases 與炎性小體約束在一定範圍內，由 NAD⁺ 把關：

- **SIRT1** 去乙醯化 p53（↓Bax、↓caspase-3）、FOXO4 與 14-3-3ζ（使 Caspase-2 保持隔離）；亦透過 XBP1s 與 NRF2/PGC-1α 抑制 NLRP3/Caspase-1（`Sirtuin-Caspase Crosstalk.md`、`Caspase-2.md`）。
- **SIRT5** 去乙醯化 [[Cytochrome c]]，減少凋亡小體驅動的 Caspase-9/-3 活化；**SIRT3** 經 CypD/Bcl-2 延遲細胞色素 c 釋放，並降低 mtROS 驅動的 NLRP3 組裝。
- 存在脈絡例外：SIRT6 經 p53/p73 在腫瘤中促細胞凋亡；細胞質 SIRT1 促死亡；SIRT3 在肝細胞癌中可增強 Caspase-9 切割。

由於活性追蹤 NAD⁺，此制動隨年齡相關的 NAD⁺ 下降而減弱 — 過度死亡隨衰老增加的原因之一（`SIRT1.md`、`Sirtuins.md`）。

### Caspases → 另兩者 — 將可逆訊號轉為承諾

- **Caspase-3/-9 於 DEPDVP（704–709）切割 SIRT1** → 核輸出、TRIM28 介導的降解，並獲得促細胞凋亡功能 — 制動被移除且被挪用（`Sirtuin-Caspase Crosstalk.md`）。
- **Caspase-3 切割 PKCδ** 為組成性活性片段 — 前饋放大（`PKCδ.md`）。
- **Caspase-1 切割 Parkin**，阻斷線粒體自噬 → ↑mtROS → 更多 NLRP3 活化（前饋焦亡迴圈，由 SIRT3 對抗）。
- Caspases 亦自我約束：Caspase-3/-7 切割 GSDMD，在啟動後關閉細胞焦亡。

### 三者相遇的共享節點

| 節點 | 誰勝出 | 效應 |
|---|---|---|
| **p53** | SIRT1 去乙醯化（關閉）；p53 驅動 Bax/PUMA → caspases | 存活 vs 細胞凋亡 |
| **FOXO** | Akt 磷酸化 → 核排除；SIRT1 去乙醯化 → 輸出轉向抗壓/自噬；JNK/AMPK → 核內 FOXO → Bim/Puma | 死亡 vs 存活基因程式 |
| **XIAP** | Akt 穩定 vs TBK1/IKKε 去穩定 | 設定 caspase-3/7/9 閾值 |
| **Bax / 細胞色素 c** | JNK/p38 vs ERK2（Bax Thr167）；SIRT1/Ku70 隔離 Bax；SIRT5 修飾細胞色素 c | MOMP 關卡 |
| **NLRP3 → Caspase-1 → GSDMD** | SIRT1/2/3 節流；caspase-1 經 Parkin 前饋 | 細胞焦亡幅度 |

### 需要的死亡

發育修剪（Caspase-3 敲除導致腦增生與圍產期致死，`Caspase-3.md`）、受感染/轉化淋巴球的免疫刪除（CASP8/CASP10 缺陷 → 自體免疫/免疫缺陷），以及釋放 IL-1β/IL-18 的適度細胞焦亡。此處 caspase 臂必須依令啟動，而 Akt/Src/PAK2 制動與 sirtuin 節流使其保持適度；Caspase-3/-7 切割 GSDMD 防止發炎分支過衝。

### 不需要的死亡 — 三種失效模式

- **Caspase 活性過高：** 神經退行性疾病（AD/PD/中風中 Caspase-3 過度活化）、缺血性損傷、SIRT3/mtROS 制動失效時的無菌性 NLRP3 發炎（`Caspase-3.md`、`NLRP3 Inflammasome.md`）。
- **Sirtuin 制動過弱：** NAD⁺ 隨年齡下降 → p53 乙醯化與炎性小體張力失控；心臟 SIRT1 具毒物興奮效應（適度過度表達具保護性，高水平則促纖維化/促細胞凋亡 — `SIRT1.md`）。
- **存活訊號過強（鏡像 — 癌症）：** 腫瘤徵用抗死亡激酶 — Akt+XIAP、Src 將 Caspase-8 留作支架、PAK2 壓住 Caspase-7、CDK1 沉默 Caspase-2 — 將系統焊死；SIRT1 抑制在許多腫瘤中具有治療價值，正因它重新釋放 caspase-2/-3。

**總結：** 激酶提供快速、可逆、脈絡依賴的 caspase 活性調節（多為抑制）；sirtuins 提供較慢、與 NAD⁺ 耦合的約束，同時作用於 caspases 與發炎性 caspase-1 軸；一旦 caspases 參與，SIRT1、PKCδ、Parkin 與 GSDMD 的切割將系統從可逆調控翻轉為不可逆（或自我終止）的執行。需要的死亡要求系統武裝完畢且可釋出；不需要的死亡則是未能約束它（神經退行性疾病、無菌性發炎），或始終無法釋出它（癌症）。

## 一句話框架

激酶利用 ATP 可逆地磷酸化標的並傳遞訊號；sirtuins 利用 NAD⁺ 可逆地移除醯基標記並將蛋白質調控耦合至代謝狀態；caspases 在天冬氨酸殘基後不可逆地切割，在細胞死亡期間拆解細胞組分。它們的路徑匯聚於共享調控因子，如 p53、FOXO 轉錄因子與粒線體細胞凋亡機制，且 sirtuin–caspase 相互作用是雙向的（sirtuins 抑制 caspase 活化；caspases 使 SIRT1 失活）。

## 知識庫交叉引用

- [[Caspases]] — 執行者蛋白酶家族。
- [[Kinase]] — 訊號磷酸轉移超家族。
- [[Sirtuins]] — NAD⁺ 依賴性去醯基酶家族。
- [[Sirtuin-Caspase Crosstalk]] — 三者中兩者之間雙向的存活/死亡調控。
- [[Apoptosis]]、[[Pyroptosis]]、[[NLRP3 Inflammasome]]、[[XIAP]] — 死亡路徑與激酶設定的 caspase 閾值。
- [[NAD+]]、[[p53]]、[[Akt]] — 共享控制節點。
