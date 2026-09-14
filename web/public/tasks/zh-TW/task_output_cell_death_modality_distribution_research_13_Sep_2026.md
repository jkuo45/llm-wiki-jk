---
title: "細胞死亡型式分布 — 研究綜述：主要型式、分類軸與週轉量量化"
description: 文獻回顧：凋亡／壞死是否仍是主要細胞死亡型式、現代分類學如何沿調控性、溶裂性、發炎性與免疫原性軸分類型式、有利性如何判定，以及人類細胞死亡的量化分布實際已知為何。
created: 2026-09-13
updated: 2026-09-14
type: task-output
tags: [task-output, research, cell-death, apoptosis, necrosis, necroptosis, pyroptosis, ferroptosis, parthanatos, panoptosis, immunogenic-cell-death, turnover, eryptosis]
author: []
---

# 細胞死亡型式分布 — 研究綜述

外部文獻綜整，並交叉參照知識庫筆記（`src/notes/cell-death/`、`src/notes/_link/`）。
產生：13_Sep_2026 08:31 PM PDT。
方法：針對主要綜述的定向網路搜尋（NCCD 2018 分類學；*Nat Med* 2021 週轉普查；免疫原性細胞死亡文獻；PANoptosis 綜述；eryptosis 文獻）加上知識庫筆記檢視。

## 摘要

凋亡對壞死的二分法在歷史上具有奠基地位，但在分類學上已過時。細胞死亡命名委員會（NCCD）目前分類約 15 種死亡子程式，並將**受調控細胞死亡（RCD）**與**意外性細胞死亡（ACD）**明確分開，此為關鍵區別。「受調控 vs 不受調控」、「溶裂性 vs 非溶裂性」、「發炎性 vs 非發炎性」與「免疫原性 vs 耐受原性」是**彼此獨立、不對齊的軸**——同一型式可在各軸上占據不同位置，而有利性是在免疫終點層級判定，而非依型態。量化而言，**並無可靠的全球性「依型式死亡普查」**。最受約束的數字是全身總週轉量（**3300 ± 200 億個細胞/天**，*Nat Med* 2021）與廣為流傳的凋亡估計值（成人**500–700 億個細胞/天**）。兩者在分解上互不一致，因為約 86% 的週轉來自血球，其中多數紅血球死於**[[Eryptosis|紅血球凋亡]]**，而非依賴 caspase 的凋亡。常被引用的「≈90% 恆定狀態週轉為凋亡」至多適用於有核細胞週轉；不應將其呈現為全身性普查。

## 引言 — 為何這個問題難以乾淨回答

「各類死亡型式的細胞各占多少百分比？」這個問題預設了 (1) 穩定的分類學、(2) 明確的分母，以及 (3) 能區分型式的檢測。三者皆非完全可取得：

* **分類學漂移。**「壞死」等詞彙如今橫跨意外性死亡與多種受調控溶裂性程式。
* **分母模糊。**全身週轉以短命、特化的細胞（紅血球、嗜中性球、腸道上皮）為主，而非代表性細胞。
* **檢測限制。**TUNEL 也會標記壞死的 DNA 斷裂；caspase-3 活化也會經由 gasdermins 驅動焦亡；Annexin V/PI 無法區分[[Parthanatos]]與凋亡。因此在組織中量化「有多少細胞死於型式 X」本質上容易出錯。

## 歷史分類學及其取代

Kerr、Wyllie 與 Currie（1972）在形態學上區分了凋亡與壞死，數十年來此領域運作於以下前提：凋亡是程式性／生理性／靜默的，而壞死是被動／病理性／發炎性的。此框架仍存在於知識庫的標準比較表中（`src/notes/cell-death/Necrosis.md:19-31`），也見於知識庫陳述*「傳統上，細胞死亡被分為凋亡與壞死」*（`src/notes/cell-death/_document_ - Ferroptosis past present and future.md:47`）。

NCCD 2018 共識（Galluzzi 等人，*Cell Death Differ* 25:486–541；PMID 29362479）取代了它。其主要結構性二分法**並非**凋亡 vs 壞死，而是**RCD vs 意外性細胞死亡**：

* **意外性細胞死亡（ACD）**——瞬間發生、不受控、生物物理性（極端創傷、變性）。無專門分子機制；無藥理救援。
* **受調控細胞死亡（RCD）**——由基因編碼、依賴訊息傳遞、可調節。RCD 依機制（而非形態）分為內源性凋亡、外源性凋亡、MPT 驅動壞死、[[Necroptosis|壞死性凋亡]]、[[Ferroptosis|鐵死亡]]、[[Pyroptosis|細胞焦亡]]、[[Parthanatos]]、entotic death（吞噬性死亡）、NETotic death、溶酶體依賴性死亡、自噬依賴性死亡、免疫原性細胞死亡，以及作為非致死或相鄰結局的細胞衰老／分裂災難。

知識庫對齊：[[Regulated Cell Death|受調控細胞死亡]]為上位筆記；其描述已說明此家族*「有別於意外性壞死」*。

## 分類軸彼此正交

一個反覆出現的混淆來源，是將數個獨立維度併入單一維度。文獻支持至少四條可分離的軸：

| 軸 | 兩端 | 其所捕捉的內容 |
| --- | --- | --- |
| 調控 | RCD（受調控）vs ACD（意外） | 是否可調節專門的訊息傳遞 |
| 膜完整性 | 非溶裂性（凋亡）vs 溶裂性 | 質膜是否在清除前破裂 |
| 發炎 | 非發炎性／靜默 vs 發炎性 | DAMP 釋放與免疫細胞募集 |
| 免疫原性 | 耐受原性／靜默 vs 免疫原性（ICD） | 是否產生**適應性**、抗原特異性反應 |

關鍵後果：「**受調控**」不意味「靜默」，而「**發炎性**」不意味「不受控」。[[Necroptosis|壞死性凋亡]]是典型證明——*「程式性卻發炎」*（`src/notes/cell-death/Necroptosis.md:22`）。反之，意外性[[Necrosis|壞死]]在先天免疫層面具有免疫刺激作用，但往往無法產生適應性免疫，因為它缺乏由轉錄驅動的危險訊號（「可誘導 DAMP」）——這是 ICD 文獻中所作的重要區分。

知識庫已將調控×發炎的 2×2 型式正式化（[[Apoptosis|細胞凋亡]]＝受調控／靜默；[[Necroptosis|壞死性凋亡]]／[[Pyroptosis|細胞焦亡]]／[[Ferroptosis|鐵死亡]]＝受調控／溶裂性；[[Necrosis|壞死]]＝不受控／溶裂性），並附性別疊加，見 `src/tasks/task_output_cell_death_quadrants_controlled_inflammatory_lens_04_SEP_2026.md`。

另一項複雜化是**PANoptosis**（Malireddi & Kanneganti，2019）：一種獨特的先天免疫、溶裂性、發炎性死亡，由 PANoptosome 複合體（ZBP1、AIM2、RIPK1、NLRP12、NLRP3 型 PANoptosome）驅動，同時動用[[Pyroptosis|細胞焦亡]]、[[Apoptosis|細胞凋亡]]與[[Necroptosis|壞死性凋亡]]的機制。在個別路徑分子被刪除時，PANoptosis *仍持續存在*，因此目前被主張為獨立路徑，而非單純的串擾（Sun 等人，*Immunol Rev* 2024；Cell Chem Biol 2026）。這進一步瓦解任何乾淨的「依型式百分比」。

## 型式目錄與預設位置

| 型式 | 調控 | 膜 | 預設發炎 | 預設免疫判讀 | 恆定狀態盛行度 |
| --- | --- | --- | --- | --- | --- |
| [[Apoptosis|細胞凋亡]] | RCD | 非溶裂性 | 靜默 | 耐受原性（除非 ICD 啟動） | 有核細胞週轉中的優勢型式 |
| [[Necrosis|壞死]]（意外性） | ACD | 溶裂性 | 發炎性 | 常僅先天免疫，適應性差 | 健康時可忽略 |
| [[Necroptosis|壞死性凋亡]] | RCD | 溶裂性 | 發炎性 | 可具免疫原性 | 由疾病／感染門控 |
| [[Pyroptosis|細胞焦亡]] | RCD | 溶裂性 | 發炎性 | 免疫刺激 | 由感染門控 |
| [[Ferroptosis|鐵死亡]] | RCD | 溶裂性 | 發炎性 | 依脈絡而定的 ICD 樣 | 由疾病門控 |
| [[Parthanatos]] | RCD | 溶裂性（非典型） | 發炎性 | 特徵欠佳 | 由疾病門控 |
| [[Secondary Necrosis|繼發性壞死]] | 下游 | 溶裂性 | 發炎性 | 可具免疫原性 | 效胞作用失敗時發生 |
| PANoptosis | RCD | 溶裂性 | 發炎性 | 免疫刺激 | 由感染／細胞激素風暴門控 |
| [[Eryptosis|紅血球凋亡]] | RCD | 非溶裂性（PS 暴露） | 靜默 | 耐受原性 | **全身週轉的最大單一貢獻者** |

## 有利性 — 依脈絡而定，而非依型式

直覺規則（「靜默凋亡好、溶裂壞死壞」）是有用的預設，但在免疫學文獻中被明確否決為普遍法則。Krysko & Vandenabeele（*Nat Rev Immunol*）證明凋亡／壞死二分法**無法預測**免疫原性或耐受性：某些凋亡死亡具強烈免疫原性，而某些壞死死亡的免疫原性低於免疫原性凋亡。因此有利性取決於：誰死亡、在哪裡、如何死亡、哪種吞噬細胞將其吞入，以及局部細胞激素脈絡。

知識庫使用的實務取向：

* **有利預設：**[[Apoptosis|細胞凋亡]]——靜默、與效胞作用耦合、保全組織。為癌症治療、發育與恆定狀態中所期望的結果。
* **不利預設：**[[Necrosis|壞死]]與[[Secondary Necrosis|繼發性壞死]]——溶裂性、無菌性發炎，驅動[[Ischemia-reperfusion Injury|缺血再灌流損傷]]、[[Myocardial infarction|心肌梗塞]]與神經退化；腫瘤壞死可支持[[Metastasis|轉移]]。
* **條件性有利（治療雙面刃）：**[[Necroptosis|壞死性凋亡]]、[[Pyroptosis|細胞焦亡]]、[[Ferroptosis|鐵死亡]]與 PANoptosis 可被刻意誘導，以殺死抗凋亡或衰老細胞並產生抗腫瘤免疫（參見 *Nat Rev Cancer* 2024 關於壞死性凋亡驅動 CD8⁺ T 細胞交叉致敏的論述）。
* **免疫原性細胞死亡（ICD）：**是功能性、而非形態學類別。免疫原性**凋亡**是真實存在的——anthracyclines、oxaliplatin、放射治療與光動力治療會觸發鈣網蛋白、ATP 與 HMGB1 的有序排放，支持樹突狀細胞的交叉致敏。反之，意外性壞死缺乏使 ICD 產生效能的轉錄驅動「可誘導 DAMP」，因此可能引發發炎而無持久免疫。

結論：**在免疫終點而非形態層面評估有利性。**

## 量化 — 實際已知的內容

### 全身週轉普查（最受約束的數字）

Sender & Milo，*Nat Med* 2021（doi:10.1038/s41591-020-01182-9），整合所有主要細胞型別的細胞數、質量與壽命：

* 總週轉：**0.33 ± 0.02 × 10¹² 個細胞/天 = 3300 ± 200 億/天**（約每秒 400 萬個細胞）。
* 細胞質量週轉：**80 ± 20 公克/天**。
* **約 86% 的週轉來自血球；其餘幾乎全是腸道。**紅血球＋嗜中性球＋腸道／胃上皮合計約 **96%**。
* 參考細胞數：約 30 ± 0.5 × 10¹² 個人類細胞（Sender、Fuchs & Milo，*PLoS Biol* 2016），約 90% 為造血系，多數是紅血球（RBC）。
* 細胞壽命橫跨約 6 個數量級：腸道上皮 3–5 天 → 心肌細胞與神經元為終生。
* 細胞生產的能量成本約為靜息代謝率的 1%。

### 凋亡數字

常被引用的估計值是平均成人**500–700 億個細胞/天**（兒童 8–14 歲：200–300 億/天）；它反覆出現於教科書與二手來源（如 Renehan、Booth & Potten，*BMJ* 2001，doi:10.1136/bmj.322.7301.1536）。其主要來源無法嚴格追溯，且通常未附推導過程即被引用。

### 90% 宣稱

一篇腎臟病綜述宣稱*「依賴 caspase 的凋亡在恆定狀態條件下約占細胞週轉的 90%」*（*Nat Rev Nephrol* 2023，doi:10.1038/s41581-023-00694-0）。若視為一般恆定狀態原則，此數字**未獲獨立佐證**，且與下列算術衝突。

### 分解問題

若合併兩個最知名的數字，會暴露矛盾：

* 若總週轉為 3300 億/天，凋亡為 500–700 億/天，則凋亡約占全身週轉的 **15–21%**——而非 90%。
* 此落差主要由**紅血球**解釋。RBC 的生成／清除約為 **2000 億個細胞/天**（壽命約 120 天）。成熟的 RBC 已去核（enucleated），死於**eryptosis**——一種依賴鈣的受調控死亡，伴隨磷脂醯絲胺酸暴露與 CD47–SIRPα 喪失，由脾臟紅髓巨噬細胞清除——形態上類似凋亡，但機制上不同。
* 若將分母限於**有核細胞週轉**（去除 RBC 後約 1300 億/天），凋亡估計值變為約 40–55%。

知識庫的[[Eryptosis|紅血球凋亡]]筆記已編碼此機制區別（Ca²⁺ → calpain／脂質翻轉酶 → 磷脂醯絲胺酸暴露，不依賴 caspase、靜默的脾臟清除），因此在為全身週轉加上限定時可直接引用。

**因此可辯護的陳述是：**凋亡主導*有核細胞*的恆定狀態週轉，而「約 90%」的數字僅在狹義分母或組織特異性計算下合理——不應引為全身占比。

### 其他量化錨點

* **胸腺：**約 95% 的 T 細胞前驅在選擇過程中死亡——局部凋亡負擔遠高於全身平均。
* **發育：**約 50% 的神經元被凋亡清除；但經典的 Apaf1 基因剔除研究提示，野生型小鼠指間區高達約 **10% 的細胞**死於不依賴 caspase 的死亡，顯示非凋亡性 PCD 在發育中可能達顯著定量規模。
* **疾病：**在病理狀態下平衡反轉——例如人類心肌梗塞後梗塞周邊凋亡指數約 25.9%（男性）vs 約 2.6%（女性）（知識庫：`src/notes/cell-death/Bcl-2.md:29`）；parthanatos 在約 80 nM PAR 時產生約 60% 神經元死亡的劑量反應（`src/notes/cell-death/Parthanatos.md:36`）。

### 為何不存在普查

沒有任何研究在整個生物體層級計算依型式的死亡。現有者為：(a) 依細胞型別的週轉普查，與死亡型式無關；(b) 單一路徑的遺傳學／抑制劑研究；以及 (c) 體外型式檢測。型式解析的普查需要原位全型式報導系統，目前並不存在。

## 限制與未解問題

* **「約 90% 凋亡」的宣稱**作為一般數字未經驗證；請附其分母注意事項呈現。
* **500–700 億凋亡/天的數字缺乏嚴謹的原始推導。**
* **RBC 死亡（eryptosis）**慣例上被排除在「凋亡」計數之外，卻主導原始週轉，使全身百分比對分母敏感。
* **PANoptosis**完全抗拒型式歸屬，且無既定量化占比。
* **檢測交叉反應**（TUNEL、caspase-3、Annexin V/PI）在固定組織中有系統性地混淆型式歸屬。
* **性別、年齡與健康狀態**會改變週轉與型式組成（Sender & Milo 明確標示此點未處理）。

## 結論

1. 凋亡與壞死是**歷史性**二分法；RCD vs ACD 是**當前**組織原則，另有約 15 種命名子程式。
2. 調控、溶裂、發炎與免疫原性是**獨立軸**；有利性在免疫終點判定，而免疫原性凋亡是真實、已被治療利用的類別。
3. **不存在全球性的依型式百分比。**最受約束的錨點為成人總週轉 3300 億個細胞/天與 500–700 億/天凋亡。
4. **凋亡主導有核細胞的恆定狀態週轉**，而紅血球 eryptosis 主導原始全身週轉；溶裂性與受調控壞死性型式由疾病與感染門控。
5. 常被引用的「約 90% 凋亡」只能在有明確分母時使用。

## 來源

* Galluzzi L, et al. Molecular mechanisms of cell death: recommendations of the NCCD 2018. *Cell Death Differ.* 2018;25:486–541. PMID 29362479.
* Sender R, Milo R. The distribution of cellular turnover in the human body. *Nat Med.* 2021;27:45–48. doi:10.1038/s41591-020-01182-9.
* Sender R, Fuchs S, Milo R. Revised estimates for the number of human and bacteria cells in the body. *PLoS Biol.* 2016;14:e1002533. doi:10.1371/journal.pbio.1002533.
* Bianconi E, et al. An estimation of the number of cells in the human body. *Ann Hum Biol.* 2013;40:463–471.
* Nagata S. Apoptosis and clearance of apoptotic cells. *Annu Rev Immunol.* 2018;36:489–517. doi:10.1146/annurev-immunol-042617-053010.
* Green DR, et al. Cell death. *Cell.* 2023. S0092-8674(23)01332-6.
* Regulated cell death pathways in kidney disease. *Nat Rev Nephrol.* 2023. doi:10.1038/s41581-023-00694-0.
* Krysko DV, Vandenabeele P, et al. Immunogenic and tolerogenic cell death. *Nat Rev Immunol.* doi:10.1038/nri2545.
* Galluzzi L, et al. Immunogenic cell death in cancer: concept and therapeutic implications. 2023. PMC9979428.
* Immunogenic cell death in cancer: targeting necroptosis to induce antitumour immunity. *Nat Rev Cancer.* 2024. doi:10.1038/s41568-024-00674-x.
* Sun X, et al. PANoptosis: mechanisms, biology, and role in disease. *Immunol Rev.* 2024. doi:10.1111/imr.13279.
* PANoptosis in life and death across cell types. *Cell Chem Biol.* 2026. S2451-9456(26)00231-X.
* Renehan AG, Booth C, Potten CS. What is apoptosis, and why is it important? *BMJ.* 2001;322:1536. doi:10.1136/bmj.322.7301.1536.
* Current understanding of eryptosis: mechanisms and nomenclature recommendations. 2025. PMC12216432.
* Thiagarajan P, et al. How do red blood cells die? 2021.
* Galluzzi L, et al. Control of cell death in health and disease. *Annu Rev Pathol.* (apoptosis/necroptosis/pyroptosis programs).

## 連結

* [[Regulated Cell Death|受調控細胞死亡]] — 取代凋亡／壞死配對的上位家族。
* [[Apoptosis|細胞凋亡]] — 有核細胞的優勢恆定狀態型式；為靜默／耐受原性預設。
* [[Necrosis|壞死]] — 意外性／不受控角落；DAMP → 無菌性[[Inflammation|發炎]]。
* [[Necroptosis|壞死性凋亡]]、[[Pyroptosis|細胞焦亡]]、[[Ferroptosis|鐵死亡]]、[[Parthanatos]] — 受調控溶裂性型式，由疾病門控且在治療上可利用。
* [[Secondary Necrosis|繼發性壞死]] — 當效胞作用失敗時，將靜默凋亡轉為發炎性死亡的橋樑。
* [[Oncosis]]、[[Damage-Associated Molecular Patterns]] — 不受控角落的機制錨點。
* [[Ischemia-reperfusion Injury|缺血再灌流損傷]]、[[Myocardial infarction|心肌梗塞]]、[[Metastasis|轉移]] — 溶裂性死亡主導的疾病脈絡。

## 建議後續行動

* 將分母注意事項推廣至[[Apoptosis|細胞凋亡]]與[[Necrosis|壞死]]實體筆記（切勿在未加限定下陳述「凋亡＝所有細胞死亡的 90%」）。
* 以 *Nat Med* 2021 週轉錨點充實[[Eryptosis|紅血球凋亡]]（位於 `src/notes/_link/Eryptosis.md`）：約 2000 億 RBC/天，約占 3300 億/天全身週轉的 61%。
* 建立[[Immunogenic Cell Death|免疫原性細胞死亡]]實體筆記（目前不存在）——ICD 文獻（鈣網蛋白／ATP／HMGB1、壞死性凋亡交叉致敏）是知識庫中持續成長的主題。
* 此處使用而未解的連結：[[Oncosis]]（已從[[Necrosis|壞死]]連結，尚無筆記）。