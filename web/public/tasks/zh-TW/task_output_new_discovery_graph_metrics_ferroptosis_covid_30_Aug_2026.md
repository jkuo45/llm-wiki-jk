---
title: "解讀一個發現的降臨 — 當新實體進入知識圖譜時，圖譜指標與型別化邊如何運作（以鐵死亡 2012 與 COVID/疫苗為實例）"
description: "當一個發現被引入並逐步成熟時，知識圖譜的計算會發生什麼——以逐年重播的方式對鐵死亡 2012→2026（介數中心性 ×1000、k-core 8→19、AA 可預見性 0.8→0.6）與 COVID/疫苗 2020→2026（社群跨越、以 Lymphopenia 種子作為通往 CD38/NAD+ 的唯一橋樑）逐項追蹤五階段生命週期。邊帶有語意與方向——合併圖譜的 3,895 條型別化邊（inhibits/activates/promotes/protects_against + confidence + provenance）將共同提及轉化為蘊含——屬性轉移（statins 繼承鐵死亡的鐵/CoQ10 屬性雲）、型別化路徑組合預測未知連結（COVID-19→SIRT3→（煞車釋放）→鐵死亡，早於 2024 年 COVID-肺-鐵死亡論文即可推得）、上游/下游杠杆分析，以及帶符號三元組推論。外部實例（baricitinib 的 KG 成功、GLP-1 度數爆炸 + EVOKE 失敗、SGLT2i、PROTAC）、校準數字（Gysi 62% 對 0.8%），以及各項指標能與不能揭示的內容。"
created: 2026-08-30
updated: 2026-08-30
source: 反事實 + 分階段重播模擬（graphify-out/graph.json、wiki-out/wiki-graph.json 與 web/public/data/edges.json 合併層）；scripts/04_node_analysis.py、04_role_query.py、graphify CLI；網路文獻（Cell、Nature、NEJM、Lancet、eLife、PNAS、FDA 2012-2026）
tags:
  - task-output
  - knowledge-graph
  - graph-metrics
  - typed-edges
  - ferroptosis
  - covid-19
  - link-prediction
  - metapath
  - network-medicine
  - discovery-lifecycle
author: []
---

# 解讀一個發現的降臨：當新實體進入圖譜時，圖譜指標與型別化邊如何運作

> [!note]
> **任務**：假設有新實體到來——一個新機制（鐵死亡 ferroptosis，2012 年命名）、一個新疾病 + 介入群集（COVID/疫苗，2019-2021）。當這個發現被引入、逐步成熟、且蘊含不斷累積時，各項*計算*會發生什麼？指標——以及**邊帶有語意與方向**這一事實——能否幫助我們理解蘊含，包括那些尚未有人明確指出的連結（例如：某實體 X 與癌症之間先前未知的關聯）？
> **日期**：30_Aug_2026 12:40 PM PDT
> **使用的圖譜層**：Triples `graphify-out/graph.json`（型別化、有向、帶置信度評分的抽取結果）· Wiki `wiki-out/wiki-graph.json`（共同提及召回層，`links_to`）· **合併層** `web/public/data/edges.json`（37,318 條邊 = 3,895 條型別化有向邊 + 33,423 條共同提及邊；預設 UI 資料集，亦是 Assumptions Lab 驗證所依據的基底）。
> **方法**：分階段的逐年重播模擬（發現節點初始為空，依文獻時間軸分批加入邊，每批重新計算指標）、本 repo 自有工具（`04_node_analysis.py`、`04_role_query.py`、`graphify path/explain`）、從合併層抽取型別化邊，以及針對真實發現軌跡的網路文獻研究。

---

## 1 · 生命週期：隨著一個發現逐步成熟，各項計算「看到」了什麼

一個新的發現並不會一次性完整進入圖譜。它以**孤兒（orphan）**姿態到來，逐漸累積**種子邊**，被鄰近領域**吸收**，開始**橋接**不同領域，最終——若具生產力——**核化出自己的社群**。真實概念的文獻計量學呈現出匹配的曲線：**停滯期**（鐵死亡：2012 年 1 篇論文，直到 2016 年每年數十篇；PROTAC：2001→2014 的沉寂）、**拐點**（某篇橋接論文或試驗）、**爆炸性的邊增長**（鐵死亡到 2021 年每年 >1,000 篇論文，指數擬合 R² = 0.95，2023 年累積約 8,000 篇），最後是**飽和與碎片化**（鐵死亡關鍵詞爆發 2023-24）（[Heliyon 十年文獻計量](https://www.sciencedirect.com/science/article/pii/S2405844023061583)、[2026 年 Scopus 更新](https://link.springer.com/article/10.1007/s00210-026-05021-5)）。

每一項指標都是指向這條曲線的不同儀器：

| 階段 | 拓撲 | 哪些計算會觸發 | 關於*蘊含*，它告訴你什麼 |
| --- | --- | --- | --- |
| **0. 孤兒** | 0 至少數邊；甚至可能不在巨型連通分量內 | 無——而這本身就是警報：沒有基底的發現是圖譜無法「思考」的 | 尚無內容；*缺失的*基底本身就是發現 |
| **1. 種子附著** | 對發現-論文詞彙的 3-10 條邊 | **型別化種子**：關係標籤本身（是「造成」？「抑制」？還是「僅有關聯」？）承載了最早的蘊含；**Adamic-Adar** 排序未來可能的鄰居；**PPR** 顯示是哪個領域的引力井捕捉了它 | 附著候選清單本身就是研究分診佇列；種子關係的*型別*決定了這個發現被解讀為病因、療法、還是單純的相關 |
| **2. 吸收** | 進入既有社群內部；k-core = 鄰域的 k-core | 社群偵測、k-core、相對於錨點的有效電阻 | 對已知領域的深度貢獻，還是別的什麼 |
| **3. 橋接** | 介數上升；社群歸屬震盪；到遠處錨點的電阻下降 | 介數中心性、**跨社群型別化路徑**（§4）、帶符號三元組檢查 | 此時該發現已*連接*各領域——意外的藥物交互作用與老藥新用假說在此浮現 |
| **4. 核化** | 自身群叢分離而出；衛星節點不斷附著 | 社群數量/模組度變化、衛星節點 PageRank、角色晉級（Periphery → Bottleneck / Master regulator） | 一個自持續的領域；樞紐地位的變化會改變你如何權衡它的主張（以及它的評審偏誤） |

模擬所支持的兩條規則，需審慎陳述：

1. **可預見性隨成熟度衰減。** 對一個稀疏節點的 Adamic-Adar，僅憑 2012 年之前的基底就預測了鐵死亡其後邊集的 80%（wiki 圖譜上 precision@10 = 0.8），到 2024 階段降至 0.6——「容易」的附著會先被畫出。請在發現的鄰域上**及早**進行分診。
2. **拓撲提出提案，語意做出裁決。** 無向計算（AA、PPR、k-core）告訴你蘊含*會落在哪裡*；而**型別化邊上的關係型別、方向、置信度與來源，告訴你蘊含*是什麼***（造成 vs 治癒 vs 單純相關）。兩個層在本 repo 中皆存在——合併圖譜將它們融合（§4）。

---

## 2 · 實例 A —「如果現在是 2012 年會怎樣？」（鐵死亡重播）

鐵死亡由一篇 Cell 論文命名（[Dixon 等人 2012](https://www.cell.com/fulltext/S0092-8674(12)00520-X)），其詞彙早已存在——system x꜀（1980）、「oxytosis」（2001）、erastin（2003）、RSL3（2008）、GPX4、麩胱甘肽、鐵。在 wiki 圖譜上模擬：節點清空，邊依文獻時間軸分批加入，每批重新計算指標（Louvain 固定種子；介數 400-pivot；AA 精度對比最終的 141 實體鄰居集）：

| 階段（加入的邊） | 度 | k-core | 介數 ×10⁻³ | 社群 [規模] 主要成員 | AA@10 / @25 | PPR 流向 |
| --- | ---: | ---: | ---: | --- | :---: | --- |
| **2012**（鐵、脂質過氧化、麩胱甘肽、GPX4、ROS、Erastin、調節性細胞死亡、粒線體） | 8 | 8 | 0.01 | 氧化壓力/發炎巨型社群 [508] | 0.8 / 0.8 | 脂質過氧化、GPX4、ROS、麩胱甘肽 |
| **2015**（+ System Xc−、p53、PUFA、磷脂） | 12 | 11 | 0.09 | [516] 同一世界 | 0.8 / 0.9 | 不變——純局部 |
| **2017**（+ ACSL4、Fenton 反應、脂質氫過氧化物） | 15 | 11 | 0.09 | [516] | 0.8 / 0.8 | 不變 |
| **2019**（+ FSP1、CoQ10、泛醌、甲羥戊酸途徑、NADPH、Statins、維生素 E） | 22 | 14 | 0.14 | [515] | 0.9 / 0.8 | 不變 |
| **2020**（+ NCOA4、鐵蛋白、SASP、衰老細胞、Deferoxamine） | 27 | 15 | **1.56** | [514] | 0.8 / 0.8 | 不變 |
| **2022**（+ 缺血再灌注損傷、阿茲海默症、帕金森氏症、亨丁頓舞蹈症、中風） | 32 | 15 | 1.86 | [509] | 0.7 / 0.6 | 不變 |
| **2024**（+ 酸性神經醯胺酶、Senolytic、青蒿琥酯、DPP4、Adrenochrome、Mitotane、多發性硬化症、HMG-CoA 還原酶） | 40 | 17 | 2.88 | [503] | 0.6 / 0.6 | 不變 |
| **今日**（實際圖譜，141 邊） | 141 | 19 | **9.86** | 同一巨型世界 [548] | 0.0 / 0.0 | + 氧化壓力、**癌症** |

以儀表板來解讀：

- **介數中心性是成熟訊號——約 1,000 倍的成長（0.01 → 9.86 ×10⁻³）**，最大躍升（×11）發生在 **2020 階段**：鐵-自噬邊（NCOA4 鐵蛋白自噬、鐵蛋白、Deferoxamine）與衰老邊（SASP、衰老細胞）落地的時刻——鐵死亡從此不再是細胞死亡的子題，而是開始橋接各領域。介數躍升，就是圖譜在說「這個節點現在對其他領域承載著蘊含」。
- **k-core 8 → 19**：節點晉級到 wiki 圖譜的最高核層級（與 [[SIRT1]]/[[NAD+]]/[[SASP]] 並列）。Repo 的角色分類器同意此判斷：鐵死亡 = Sink + Master regulator + Bottleneck + Core backbone。
- **AA 可預見性在誕生時最高（0.8）**，隨節點填滿而衰減（2024 階段 0.6，完全附著後 0.0）。2012 快照下的前 25 個*漏報*，恰好就是 2012 年之後的文獻：FSP1（+7 年）、ALOX15/ALOX5、ASAH1/酸性神經醯胺酶（+12 年）、ARN14794/ARN14974（senolytic 候選，2023-26）、青蒿琥酯、Carmofur、7-Ketocholesterol、CD44、STEAP3。**漏報清單就是研究議程。**
- **PPR 在成熟前保持局部**——流量追隨度數，因此「它的影響力抵達何處」只有在蘊含邊存在之後才能回答。流量指標衡量的是已累積的蘊含；局部相似度指標衡量的是未來的蘊含。
- 刪除成熟節點（鏡像實驗）會使 triples 圖譜巨型連通分量中的 13 個衛星節點脫落，並將 PageRank 轉移到防禦帶上：NADPH −1,159、Statins −977（triples）；維生素 K −315、HMG-CoA 還原酶 −279（wiki）。一個發現的蘊含，就是那條少了它就會懸空的衛星帶。

### 2.1 型別化邊的加成：從「有連結」到「這個連結是什麼意思」

鐵死亡的同一個鄰域，在**合併圖譜的型別化層**上（每一條邊：有向 `from→to`、關係標籤、`confidence_score`、`sources` 來源）：

```
statins        --sensitize_to---->  ferroptosis        (conf 0.75)
sirt3          --suppresses----->   ferroptosis        (conf 0.87)
mitohormesis   --protects_against-> ferroptosis        (conf 0.82, sources: triples+wiki)
mitophagy      --inhibits------->   ferroptosis        (conf 0.88)
glutathione    --protects_against-> ferroptosis        (conf 0.90)
ho_1           --regulates----->    ferroptosis        (conf 0.85)
cellular_senescence --transmits-->  ferroptosis_susceptibility (conf 0.80)
```

這正是「蘊含」從可讀變為可計算之處：**statins 得到一條*促鐵死亡*的帶符號邊**，麩胱甘肽/mitohormesis/sirt3 則得到*抗-*邊——無向的 wiki 圖譜把這一切合併成一團無差異的氣泡，但型別化層將「治療性杠杆」（抑制上游驅動因子）與「毒性負擔」（阻斷一道防禦）分開。Triples 層的極性普查：鐵死亡帶有 8 條促鐵死亡對 6 條抗鐵死亡的入邊；CoQ10 是純抗-（0 PRO / 2 ANTI）；SIRT3 25 ANTI 對 19 PRO；而 metformin 需要*同時具備兩種符號*（在腫瘤中經 SLC7A11-UFMylation 是鐵死亡誘導劑，在糖尿病腎病中經 NRF2 則是抑制劑）——一條真正的雙極邊，絕不可被平均化。

由橋接拓撲 + 型別化邊共同浮現的治療蘊含（經網路文獻研究）：statins（甲羥戊酸→CoQ10/GPX4 耗竭；以 Statins 為種子的 PPR 將鐵死亡排在 **2,996 個候選中的第 3 名**）、TZDs（ACSL4 抑制）、cariprazine（DHCR7 → ↑7-DHC → 抗性，Nature 2024）、bortezomib（NCOA4 鐵蛋白自噬）、順鉑（*療效*與*器官毒性*經由同一道閘門）。供 Assumptions Lab 使用的衝突配對（目前 `assumptions.json` 中尚無鐵死亡情境）：維生素 E 在老化中保護 vs 對腫瘤庇護（SELECT；HDL 遞送的維生素 E 庇護腫瘤，STTT 2025）；GPX4 抑制殺死腫瘤/衰老細胞 vs 損害 CD8/CAR-T（Lip-1 在體內拯救 CAR-T，2025）；sorafenib 作為誘導劑仍有爭議（Zheng/Conrad 2021）；DHODH-brequinar（Nature 2021）對 FSP1 脫靶假象（Nature 2023）；deferiprone *惡化*了 PD（FAIR-PARK-II）與 AD 認知。臨床現實錨點：尚無專門設計的鐵死亡藥物通過第 1 期（CNSI-Fe(II)，NCT06048367，n=19，2025 年 2 月完成）（[Ubellacker & Dixon, Nat Cancer 2025](https://www.nature.com/articles/s43018-025-01037-7)）。

---

## 3 · 實例 B — COVID/疫苗：一個*疾病群集*進入長壽圖譜

病原體以**群集**形式到來（病毒 + 疾病 + 症狀 + 共病症 + 最終的介入家族），臨床邊先於機制邊。在 wiki 圖譜上重播：

| 階段 | 度 | k-core | btw ×10⁻³ | 社群 [規模] | PPR 流向 |
| --- | ---: | ---: | ---: | --- | --- |
| 2020a 臨床（COVID-19、發炎、細胞激素、IFN-γ、免疫系統） | 5 | 5 | 0.04 | 衰老/發炎世界 [325] | 發炎、免疫系統、IFN-γ |
| 2020b 共病症（糖尿病、肥胖、高血壓、老化） | 9 | 8 | 0.15 | [325] | 發炎、老化、免疫系統、肥胖 |
| 2021 機制（CD38、NAD+、PARP、NF-κB、NLRP3、病毒複製） | 15 | 12 | 0.27 | **老化/NAD+ 世界 [419]** — 翻轉 | 發炎、**NAD+**、老化、NF-κB |
| 2021b 衰老（+ Cell-Fusion-Induced Senescence、ALI、敗血症） | 18 | 13 | 0.32 | 衰老世界 [326] — 翻轉**回去** | 發炎、NAD+、NF-κB、老化 |
| 2023 長新冠（+ Long COVID、粒線體功能障礙、ATP、Complex I/III、Methylene blue） | 24 | 15 | 0.69 | [326] | 不變 |
| 今日（實際，20 邊） | 20 | 11 | 0.34 | 老化/NAD+ 世界 [399] | 發炎、NF-κB、老化、免疫系統 |

三個值得內化的解讀：

1. **社群震盪 = 邊界跨越者指紋。** 群集的 Louvain 歸屬，依哪一批邊佔主導而在衰老/發炎世界與老化/NAD+ 世界之間來回翻轉。不穩定的社群歸屬 = 處於領域邊界上的節點——對長壽圖譜而言，這正是病原體應該坐落的位置，也是「這個發現會把既有單向邊重構為回饋環」的指紋（重症 COVID → CD38↑ → NAD+↓ → sirtuin 失能 → 發炎老化 → 更差預後 → 更多 CD38）。
2. **一條種子邊就能開啟或關閉整條機制走廊。** 僅給予 2020 年的稀疏節點一項臨床觀察——**Lymphopenia（淋巴球減少）**——就使 **CD38 進入預測排名第 6、NAD+ 第 7**（Adamic-Adar，2,995 個候選中）；少了這條種子，兩者都跌出前 25。重症 COVID 中 CD38-NADase 驅動的 NAD+ 耗竭，隨後被 2020-21 年的文獻證實（Heer 等人，JBC 2020；Physiol Rev 2021）。謹慎對待這件事的含義：**圖譜預測了科學後來創造、而 wiki 至今仍未畫出的邊**——預測是對照*文獻*驗證的，而非今日的邊集；圖譜與文獻是兩種不同的真實基準（ground truth），兩者之間的差距就是一份待辦清單。
3. **重播 vs 實際接線，量化了缺了什麼。** 2021 機制重播（CD38/NAD+/PARP 直接接線）達到 k-core 15 / 介數 0.69，而實際圖譜為 k-core 11 / 0.34、經由 `[[Lymphopenia]]`/`[[Viral Replication]]` 的間接接線。圖譜與 NAD+ 核心的整合度*低於其內容本身所應有的水準*——而在 triples 層，SARS-CoV-2 只有 2 條邊，甚至不在巨型連通分量中（`graphify path "SARS-CoV-2" "NAD+"` → 無路徑），同時合併層卻攜帶 `sars_cov_2 --[disrupts]--> NAD+_metabolism` 這條型別化邊。同一語料、三個層、三種不同結論——**永遠確認指標是在哪一層上執行的。**

疫苗子群集補上一課*分層*教訓：wiki 中恰有一個疫苗節點（`shingles_vaccine`）；沒有 mRNA 疫苗/LNP/PEG/IgG4/心肌炎/ACE2/spike 節點——未來的疫苗發現將以孤兒姿態到來。而 2024-26 年最高品質的證據是*條件化的*（心肌炎：男性 12-15 歲第二劑約 150/10⁶，年齡梯度陡峭；IgG4 轉換依劑數而定，第 3 劑後趨於平穩）——單條被平均的「疫苗→心肌炎」邊**恰恰抹去了作為臨床真相的異質性**；圖譜需要邊屬性（劑數 × 年齡 × 性別 × 證據層級）或超邊（[心肌炎統合分析，Epidemiol Rev 2025](https://pubmed.ncbi.nlm.nih.gov/39673764/)；[IgG4，Sci Immunol 2023](https://www.science.org/doi/10.1126/sciimmunol.ade2798)）。

---

## 4 · 邊具有語意與方向：型別化邊如何揭示無人陳述過的連結

這是將圖譜從索引轉為推論引擎的能力。Repo 的合併層在 37,318 條總邊中攜帶 **3,895 條型別化有向邊**——1,033 個相異關係標籤，最常見的型別化謂詞為 `inhibits`（220）、`activates`（170）、`deacetylates`（111）、`promotes`（104）、`reduces`（79）、`induces`（65）、`causes`（64）、`suppresses`（56）、`regulates`（43）——每一條都帶有 `confidence_score` 與 `sources` 來源（`triples`、`wiki`、或兩者兼具）。四種具體機制，今日皆可計算：

### 4.1 屬性轉移——一條新邊搬動整團屬性雲

當 `statins --[sensitize_to]--> ferroptosis` 被抽取出來時，statins 得到的不只是一個新鄰居：它們**繼承了鐵死亡的整團屬性雲**——鐵過載、脂質過氧化、PUFA 膜、GPX4/CoQ10 防禦、NCOA4 鐵蛋白自噬——這些 statin 筆記從未提及。計算上：從 statins 出發的 PPR/路徑如今可抵達鐵/脂質過氧化機制，而那團雲中的任何*新*發現（例如 2024 年的 7-DHC）會瞬間距離 statins 一跳。這就是「我們原本不知道 X 與癌症有關」的通用形式：**一條通向樞紐的新邊，無聲地把 X 預接線到樞紐已知道的一切。** Repo 中的 COVID 展示了這一點：單條型別化邊 `sars_cov_2 --[disrupts]--> NAD+_metabolism` 就把病毒拉入 CD38/PARP/sirtuin/發炎老化的屬性空間，而無需任何其他邊。

### 4.2 型別化路徑組合——預測兩層中皆不存在的連結

關係型別**沿路徑組合**，生成新的型別化假說。Repo 型別化邊中的真實鏈條：

```
covid_19 --[is_associated_with]--> sirt3          (conf 0.85)
sirt3    --[suppresses]----------> ferroptosis    (conf 0.87)
⟹  假說：covid_19 --[解除對……的煞車]--> ferroptosis
```

兩條既存於圖譜中的型別化邊*蘊含*了 COVID-肺-鐵死亡連結——而實驗文獻直到 2024 年才確立它（[Qiu 等人，Nat Commun 15:3816](https://www.nature.com/articles/s41467-024-48055-0)——致命 COVID 肺中的鐵死亡特徵）。兩個 repo 層中都不存在 `covid_19 ↔ ferroptosis` 邊；這個連結是一個**兩跳型別化推論**。使用者範例的通用形式：`X --[r1]--> Y --[r2]--> cancer` 組合為 `X --[推論的 r1∘r2]--> cancer`——例如 `X 抑制 Y` + `Y 促進癌症` ⇒ `X --[候選抑制劑]--> cancer`（metformin/SLC7A11 正是這個形狀；baricitinib 亦然，§5）。這是 Hetionet 的 DWPC 特徵與 ROBOKOP 範本查詢背後的 metapath 概念：**關係型別化路徑，而非無向相似度，才是老藥新用的特徵引擎。** Adamic-Adar（無向、無型別）無法表達「抑制一個啟動子」；型別化路徑枚舉可以——這是現行 `04_link_prediction.py` 缺失的一道工序。

### 4.3 方向區分杠杆與後果

有了方向，入邊與出邊回答不同的問題。以鐵死亡為例：促鐵死亡的**入邊**（ACSL4、NCOA4、p53、鐵、脂質過氧化——以及經 §4.2 推論的 COVID-19）是**可成藥的上游杠杆**；抗-入邊（GPX4、FSP1、SIRT3、麩胱甘肽、Mitohormesis）是**防禦系統**——抑制它對*腫瘤*是策略，支持它對*健康老化*是策略。同一個節點、兩套相反的治療方案，唯有靠邊的符號與方向才能區分。有向 PageRank/PPR（triples 圖譜為每個節點儲存入/出度：鐵死亡在 wiki 層入 105 / 出 83）近似「這個節點驅動什麼」與「什麼驅動這個節點」。

### 4.4 帶符號三元組——推論未知邊的符號

型別化符號使**未知**邊的平衡式推論成為可能：若 A 抑制 B 且 B 抑制 C，A 很可能*減輕*了 C 所受的壓力（「我敵人的敵人是朋友」）。Repo 實例：`statins --[sensitize_to]--> ferroptosis`（+）與 `mitohormesis --[protects_against]--> ferroptosis`（−）⇒ 預測一條 **statin↔mitohormesis 拮抗**邊（CoQ10 耗竭侵蝕激效性防禦）——圖譜中無此邊、無論文直接陳述，且可檢驗。這是經典的帶符號連結預測任務（Leskovec 等人 2010）移植到生物學，也是 **Assumptions Lab 衝突**的天然產生器。這個實驗室已從單純的註冊表變成*應用*機制：策展情境存於 `assumptions.json`，而建構流程**在任何指標計算之前就把它們套用到圖譜上**——文件層級的 `excludedSources`（附 `keepTripleIds` 例外）剔除噪訊三元組，機器管理的 `selections` 區塊（canonical 衝突立場，解析為有向邊）增刪邊（刪除優先於抽取，新增贏過去重）。Canonical selections 由 `07_sync_assumptions.py` 在 `03_rebuild_from_triples.py` *之前*自資料庫物化；出處記錄落在 `web/public/data/assumptions-build.json` 與 GRAPH_REPORT.md 的「Assumption State」區段。策展輔助：`03_triple_lookup.py <id>` 將三元組 id 映射到 web 邊鍵；`03_triple_lookup.py --doc-stats` 勘察文件以尋找排除候選。對本報告的後果：當策展立場說「這條抽取邊是錯的」或「這兩條型別化邊蘊含一條缺失的邊」時，修正會*物化進圖譜本身*——包括上述重播指標在內的所有下游指標，都會對修正後的拓撲重新計算。

### 4.5 讓型別化推論保持誠實的注意事項

- **抽取噪訊**：型別化邊來自 LLM 抽取；置信度 0.5 的邊（例如 `covid_19 --[ameliorates]--> NMN`，一個病例系列假象）與扎實的邊一樣會沿路徑傳播。請以路徑上的最小邊置信度加權。
- **組合不是演繹**：兩條真邊不保證組合邊為真（情境、劑量、組織全部丟失）。型別化路徑是*假說產生器*，並有校準過的基準率（§5，Gysi：前段排名候選約 10-30% 精度 vs 0.8% 無引導）。
- **層紀律**：經典中心性腳本（`04_node_analysis.py`）在無向投影上執行——方向在那些計算中被折疊，儘管型別化層仍可用於路徑層級的工序。Wiki 層是真正極性盲的（`links_to`）；合併層不是。每個數字都必須註明所屬層。

---

## 5 · Repo 之外的更多實例（網路文獻研究）

**Baricitinib——型別化組合的產品化。** BenevolentAI 的 2020 年 2 月查詢正是 §4.2 的操作化：[內吞模組]—被—[已核准藥物]—抑制—[細胞激素模組]。Baricitinib 浮現為**唯一在可達暴露量下橋接兩個型別化模組的已核准化合物**：16 個已核准雙重抑制劑浮現 → 7 個通過 PK 篩選 → 1 個贏家。假說發表於 [Lancet 2020 年 2 月 4 日](https://pmc.ncbi.nlm.nih.gov/articles/PMC7137985/)；FDA EUA 2020 年 11 月 19 日；COV-BARRIER 死亡率下降 38%。**從圖譜假說到核准，約 9.5 個月。** 注意圖譜*沒有*包含什麼：藥物動力學——決定性的篩選是圖譜之外的屬性，由人類套用。

**GLP-1 受體促效劑——橫跨五個社群的度數爆炸。** 2005-2015：內分泌葉節點。之後每一項結果試驗帶來一條社群邊：心臟學（LEADER 2016，MACE −13%）、肥胖（STEP 2021）、*無*糖尿病的心臟學（SELECT 2023 年 11 月，MACE −20% — [NEJM](https://www.nejm.org/doi/full/10.1056/NEJMoa2307563)）、腎臟學（FLOW 2024，−24%，提前停止）、睡眠醫學（首個 OSA 藥物，2024 年 12 月）、肝臟學（MASH 緩解 62.9% 對 34.3%；FDA 適應症 2025 年 8 月）、成癮（semaglutide 使 AUD 重度飲酒日減少 >70%，[Lancet 2026 年 5 月](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00305-3/fulltext)）。到 2026 年，semaglutide 是醫學中最高度數、最高橋接的藥物節點之一。誠實的指標教訓是雙向的：代理連結（神經發炎、腦 GLP-1R）是在 LEADER 的意外*之後*產生假說的，而最脆弱的邊是**類比的**（肥胖→阿茲海默症）——它**在受檢驗時斷裂**：EVOKE/EVOKE+ 陰性（2025 年 11 月 24 日宣布；CSF 生物標記改善，CDR-SB 未達標；[聲明](https://www.alz.org/news/2025/alzheimers-association-statement-oral-semaglutide-phase-3-topline-data-release)）；exenatide 同年在帕金森氏症第 3 期以同樣方式失敗。**類比邊是圖譜最有利可圖也最容易斷裂的連結**——正因如此，§4.2 的組合規則應帶有「類比 vs 機制」旗標。

**SGLT2 抑制劑——方向無法由距離預測。** Empagliflozin 在 EMPA-REG（2015 年 9 月）帶來 −38% CV 死亡之前，只是一個葡萄糖排泄葉節點。心衰竭（DAPA-HF 2019，約半數非糖尿病）、HFpEF（2021）、腎臟（DAPA-CKD 2020、EMPA-KIDNEY 2022 −28%）接連而來。拓撲上，該節點**對心肌完全沒有邊**——網路距離對效益方向一無所言；機制鄰域（酮體、NHE-1、自噬）是事後逆向工程出來的。最新的邊——失智症——重複這個模式：觀察性 OR 0.45-0.62，彙整 RCT 為陰性（23 項 RCT，n≈16 萬，2025）。**觀察性共現邊會高權重混雜連結；RCT 級邊晚數年到來並可能抹除它們**——這是對邊上加來源/證據層級屬性的又一論據。

**PROTAC——低度數是一種狀態，不是判決。** 2001 年命名；約 18 年沉寂（度數 ≈ 10，零臨床邊）。2019 年首次人體試驗，2022 年概念驗證，2026 年第 3 期——且該機制引入了一種**新關係型別**（「降解」），把化學↔泛素↔腫瘤學重新接線成自己的社群。沉寂期間，指標說「周邊、k-core 1」；正確的解讀是「**未實現的橋樑**」——僅憑拓撲無法與「死路」區分。節點出處（誰在研究它、有哪些工具）必須與度數並讀。

**任何蘊含主張的校準數字：**

| 方法 | 驗證 | 數字 |
| --- | --- | --- |
| Gysi 等人 12 條管線（[PNAS 2021](https://www.pnas.org/doi/10.1073/pnas.2025581118)） | 918 種藥物篩選 | 多數管線 AUC 0.52-0.66，**前段清單互不相關**；共識 62% 命中 vs 0.8% 無引導 |
| Rephetio/Hetionet（[eLife 2017](https://elifesciences.org/articles/26726)） | 事後適應症 / 試驗 | AUROC 85.5% / 70.0%（自身訓練集上 97.4% = 循環論證） |
| Cheng 等人（[Nat Commun 2018](https://www.nature.com/articles/s41467-018-05116-5)） | 4 項鄰近性預測，2.2 億病人 EHR | 4 項中 2 項獲證實 |
| DRKG 嵌入（2020） | 所有 FDA 藥物排名 COVID | dexamethasone 排名 5（已驗證）——**ribavirin/azathioprine 排名 1-2 卻失敗** |
| BenevolentAI（2020） | baricitinib 決選 | 16 → 7（PK）→ 1 個贏家 |
| 失敗欄 | ivermectin、famotidine、hydroxychloroquine、azithromycin | 被*多條* KG 管線列為前段；全數陰性——無論是否型別化，鄰近性找到的是*主題性*鄰居，不是療效 |

---

## 6 · 所以——指標（加上型別化邊）是否真的幫助理解蘊含？

**是——作為分診儀器、缺口偵測器與型別化推論引擎；不是——作為神諭。** 案例研究所支持的分工：

| 計算 | 它真正揭示的 | 失效模式 |
| --- | --- | --- |
| **AA / 資源分配附著**（稀疏節點） | 可預見的鄰域——分診佇列；誕生時 80%，隨節點填滿而衰減 | 極性盲且方向盲；無度數匹配零假說時有樞紐偏誤；需要一條臨床橋接種子（Lymphopenia 教訓） |
| **型別化路徑組合**（§4.2） | **帶繼承語意的未知連結**（COVID→SIRT3→鐵死亡-煞車釋放；X→Y→癌症） | 組合 ≠ 演繹；抽取噪訊傳播；須標記類比 vs 機制路徑（EVOKE） |
| **經新樞紐邊的屬性轉移**（§4.1） | 一條新邊把節點預接線到樞紐的整團屬性雲 | 取決於樞紐品質；垃圾樞紐邊傳播垃圾 |
| **帶符號三元組 / 平衡**（§4.4） | 未知邊的符號；Assumptions-Lab 衝突探勘 | 符號源自抽取；三元組只建議，永不證明 |
| **方向（入/出邊）** | 上游杠杆 vs 下游後果；同一節點上兩套相反的治療方案 | 只及於抽取的定向正確性（is_inhibited_by vs inhibits 的記帳） |
| **自節點出發的 PPR** | 領域引力井；影響力在何處累積（Statins→鐵死亡 #3） | 累積的、而非未來的蘊含；成熟前保持局部 |
| **介數軌跡** | 成熟/橋接（鐵死亡-2020 的 ×11 躍升；baricitinib 式受限橋接） | 每次插入會重新分級 21-111 個節點的百分位；需要零假說 |
| **社群震盪** | 邊界跨越者指紋（COVID 在衰老↔NAD+ 世界間翻轉） | Louvain 的種子/標籤隨工具而異——比較成員描述，而非 id |
| **k-core** | 結構深度（鐵死亡 8→19） | 繼承鄰域的核心；對證據品質一無所言 |
| **R_eff z 對錨點** | 未接線樞紐偵測器（Long COVID z = +0.4 = 內容缺口警報） | 對層/密度差異敏感（triples 與 wiki 對 COVID 的結論完全相反） |
| **衛星 PageRank 變化** | 依賴網（NADPH/CoQ10/HMG-CoA 還原酶/維生素 K 帶） | 重正化假象（樞紐刪除時 RSL3 +629） |
| **成長曲線階段** | 何時分診有價值（早期）、何時樞紐地位膨脹偏誤（晚期） | 低度數 ≠ 低價值（PROTAC，18 年） |

**仍然需要屬性而非拓撲的**：效應量、劑量/組織/年齡情境、證據層級、藥物動力學（baricitinib 的篩選）、以及*僅使用 wiki 層時*的極性。合併圖譜的型別化子集已攜帶關係 + 方向 + 置信度 + 來源——基底已在位；缺的是利用它的計算（型別化路徑工序、帶符號三元組探勘）。

---

## 7 · 行動手冊

1. **每篇新筆記/實體**：立即執行稀疏節點的 AA 附著 + PPR 領域歸屬（可預見性會衰減）；記錄前 25 名作為審核佇列——並記錄獲准了哪些*種子關係型別*，因為它們決定了機制走廊的閘門（Lymphopenia 效應）。
2. **加入型別化路徑工序**（`04_` 候選）：在合併圖譜的 3,895 條型別化邊上枚舉兩跳組合（以最小置信度加權、標記類比），以組合置信度 × AA 支持度排名——這就是「未知連結」引擎（X→癌症類），而且它會提前兩年就排出 COVID→鐵死亡。
3. **探勘帶符號三元組**以尋找 Assumptions-Lab 衝突（敵人的敵人與雙正三角）；註冊進 `assumptions.json` 並解析立場——建構流程如今會把實驗室*套用*到圖譜上（selections → 有向邊增刪；噪訊文件用 `excludedSources`），因此已解析的衝突會改變所有下游指標。任何 triples/假設變更的執行順序：`03_normalize_triples_schema.py` → `07_sync_assumptions.py`（物化 canonical selections）→ `03_rebuild_from_triples.py` → `05_build_combined.py` / `05_rebuild_from_wiki.py` → `07_sync_to_db.py` + `07_sync_content.py`。策展輔助：`03_triple_lookup.py <id>`（三元組 → web 邊鍵）與 `03_triple_lookup.py --doc-stats`（排除候選）。目前註冊表：1 個情境，鐵死亡/COVID 覆蓋為零。
4. **跨重建追蹤每個實體的介數/k-core 軌跡**（擴充 `graph-diff.json`）——正是這個成熟訊號標記了鐵死亡-2020 與 baricitinib 式橋接。
5. **彌合本次執行所暴露的文獻-vs-圖譜缺口**：直接的 SARS-CoV-2↔CD38/NAD+/PARP 邊（k-core 11→15，介數 ×2）、SARS-CoV-2↔鐵死亡（Nat Commun 2024——目前僅是兩跳型別化蘊含）、Metformin↔長新冠預防（COVID-OUT）、以及 COVID-19↔NMN 上的陰性-RCT 註記。
6. **在加入疫苗/分層節點之前先具備屬性**（劑量×年齡×性別、證據層級）——平均化會抹掉發現本身。
7. **以 §5 的校準先驗為每項預測蘊含加權**：前 K 名圖譜輸出是一條約 10-30% 精度的假說流 vs 0.8% 無引導——有價值，但永遠不是神諭。

---

## 8 · 來源

**Repo 產物與工具**：`graphify-out/graph.json` · `wiki-out/wiki-graph.json` · `web/public/data/edges.json`（合併層；3,895 條型別化邊已驗證）· `web/public/data/link-prediction.json` · `web/public/data/assumptions.json`（含套用狀態：`assumptions-build.json`、GRAPH_REPORT「Assumption State」；canonical selections 由 `07_sync_assumptions.py` 同步）· `04_node_analysis.py` · `04_role_query.py` · `03_triple_lookup.py` · 重播/反事實工具（暫存 `replay_growth.py`、`sim_new_discovery.py`——若採用應晉級至 `scripts/`）。

**型別化邊與老藥新用方法**：[Rephetio/Hetionet（DWPC metapaths），eLife 2017](https://elifesciences.org/articles/26726) · [Guney 等人，Nat Commun 2016](https://www.nature.com/articles/ncomms10331) · [Cheng 等人，Nat Commun 2018](https://www.nature.com/articles/s41467-018-05116-5) · [Gysi 等人，PNAS 2021](https://www.pnas.org/doi/10.1073/pnas.2025581118) · [ROBOKOP（範本查詢、抗性排序）](https://pmc.ncbi.nlm.nih.gov/articles/PMC6954664/) · [DRKG](https://github.com/gnn4dr/DRKG) · [SPOKE](https://spoke.ucsf.edu/) · [帶符號連結預測，Leskovec 等人 2010](https://cs.stanford.edu/people/jure/pubs/signpsw.pdf) · [Insilico 第 3 期 IPF，2026](https://insilico.com/news/xmjsn4l091-insilico-initiates-phase-iii-clinical-tr)

**發現軌跡**：[baricitinib 假說，Lancet 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7137985/) · [COV-BARRIER，Lancet Respir Med 2021](https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(21)00331-3/fulltext) · [SELECT，NEJM 2023](https://www.nejm.org/doi/full/10.1056/NEJMoa2307563) · [FLOW，NEJM 2024](https://www.nejm.org/doi/abs/10.1056/NEJMoa2403347) · [FDA OSA 2024](https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-obstructive-sleep-apnea) · [FDA MASH 2025](https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-serious-liver-disease-known-mash) · [AUD semaglutide，Lancet 2026](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00305-3/fulltext) · [EVOKE 陰性，2025 年 11 月](https://www.alz.org/news/2025/alzheimers-association-statement-oral-semaglutide-phase-3-topline-data-release) · [EMPA-REG，NEJM 2015](https://www.nejm.org/doi/full/10.1056/NEJMoa1507524) · [SGLT2-失智症回顧 2025](https://link.springer.com/article/10.1007/s40120-025-00832-9) · [Arvinas 管線](https://www.arvinas.com/research-and-development/pipeline) · [鐵死亡文獻計量，Heliyon 2023](https://www.sciencedirect.com/science/article/pii/S2405844023061583)

**生物學錨點**：[Dixon 等人，Cell 2012](https://www.cell.com/fulltext/S0092-8674(12)00520-X) · [COVID 肺鐵死亡，Nat Commun 2024](https://www.nature.com/articles/s41467-024-48055-0) · [Ubellacker & Dixon，Nat Cancer 2025](https://www.nature.com/articles/s43018-025-01037-7) · [7-DHC，Nature 2024](https://www.nature.com/articles/s41586-023-06983-9) · [PD 中的 deferiprone，Nat Rev Neurol 2022](https://www.nature.com/articles/s41582-022-00771-1) · [COVID 中的 CD38/NAD，PMC8805734](https://pmc.ncbi.nlm.nih.gov/articles/PMC8805734/) · [metformin 長新冠預防，Lancet ID 2023](https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(23)00299-2/fulltext) · [心肌炎統合分析，Epidemiol Rev 2025](https://pubmed.ncbi.nlm.nih.gov/39673764/) · [IgG4，Sci Immunol 2023](https://www.science.org/doi/10.1126/sciimmunol.ade2798)
