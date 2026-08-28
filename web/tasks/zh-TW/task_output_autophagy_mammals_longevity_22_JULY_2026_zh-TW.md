---
title: 伴侶哺乳動物（犬/貓）中的自噬與壽命
description: 關於家犬與家貓自噬–老化生物學的研究綜述，涵蓋轉譯介入、TRIAD 試驗脈絡、證據缺口，以及提出的實驗路線圖
created: 2026-07-23
updated: 2026-08-22
source: Wiki notes (autophagy/) + PubMed companion-animal literature + research-scientist synthesis
tags:
  - autophagy
  - longevity
  - canine
  - feline
  - companion-animals
  - rapamycin
  - caloric-restriction
  - mtor
  - triad
  - dog-aging-project
---
# 哺乳動物（犬/貓）中的自噬與壽命

**任務輸出：** `22_JULY_2026 06:58 PM PDT`  
**範圍：** [[Autophagy]] 與壽命之間的機制關聯；伴侶犬與貓的物種特異性證據；轉譯介入；開放問題與實驗路線圖。

---

## 執行摘要結論

自噬是橫跨酵母 → 線蟲 → 果蠅 → 小鼠的**多項長壽介入措施所必需的介導者**。伴侶犬目前是測試此假說最強的非實驗室哺乳動物系統，且是在**壽命/健康span 尺度**上進行（Dog Aging Project；TRIAD 雷帕黴素 RCT）。直接的貓自噬–壽命資料仍相當稀少。實際主張並非「自噬越多就活得越久」，而是：**與年齡相關的、稱職自噬流（autophagic flux）下降會驅動組織衰竭；恢復流動（而非僅提高 LC3-II）是犬——依同源性推及貓——一個合理的健康span 槓桿。**

---

## 第一部分 — 機制核心（取自 wiki + 既定生物學）

### 自噬對老化至關重要的功能

[[Autophagy]] 將細胞質貨物遞送至 [[Lysosome|溶酶體]]（lysosomes）進行降解與回收。與老化相關的類型：

| 類型 | 貨物 / 路徑 | 老化相關性 |
|---|---|---|
| [[Macroautophagy]] | 透過 [[Autophagosome]]（自噬體）的巨量 / 選擇性貨物 | 蛋白質穩態、胞器品質控制 |
| [[Mitophagy]] | 受損粒線體（[[PINK1]]/Parkin、BNIP3） | 限制 ROS、細胞凋亡滲漏、mtDNA 壓力 |
| [[Chaperone-Mediated Autophagy]] | 透過 [[LAMP-2A]] 的 KFERQ 基序蛋白 | 於肝臟隨年齡下降；CMA 救援可改善蛋白質穩態 |
| [[Selective Autophagy]] | 聚合體、病原體、CDKI 透過 [[p62]] | 衰老控制、發炎 |

**起始邏輯（在包括犬/貓的保守哺乳動物中）：**

```
營養/生長訊號 → mTORC1 開啟  → ULK1 受抑制 → 自噬關閉
能量壓力（↑AMP/ATP） → AMPK 開啟  → ULK1 活化 + mTORC1 關閉 → 自噬開啟
NAD+ / SIRT1 → Atg 蛋白、FOXO、TFEB 的去乙醯化 → 轉錄 + 轉譯後增幅
```

Wiki 樞紐：[[Autophagy]]、[[mTORC1]]、[[AMPK]]、[[SIRT1]]、[[TFEB]]、[[Beclin1]]、[[LC3]]、[[p62]]、[[Autophagic Flux]]。

### 因果鏈：自噬 ↔ 壽命

根據 Rubinsztein 等人（Cell 2011）以及儲存筆記中整合的後續研究：

1. **ATG 基因的遺傳缺失** 會縮短壽命（酵母、*C. elegans*、*Drosophila*），並在組織特異性小鼠 KO 中產生類老化的組織表型（蛋白質聚合體、脂褐質、功能障礙粒線體）。
2. **長壽介入需要自噬** —— 熱量限制、雷帕黴素、亞精胺（spermidine）、白藜蘆醇/SIRT1，以及降低的 IIS 所帶來的壽命延長，在自噬被阻斷時會消失。
3. **年齡降低自噬能力** —— ATG 表現下降、溶酶體酸化受損、CMA 下降（LAMP-2A）、自噬基因的表觀遺傳抑制。

> [!IMPORTANT]
> **流動，而非快照**
> LC3-II 或 Beclin1 升高可能意味著**誘發** *或* **清除受阻**。與壽命相關的表型是**完成的流動**（貨物 → 溶酶體 → 回收），在流動稱職時理想情況下伴隨 p62 下降。

---

## 第二部分 — 為何伴侶犬（與貓）很重要

### 犬的轉譯優勢

| 特徵 | 意涵 |
|---|---|
| 共享環境 / 暴露組（exposome） | 與飼主相同的污染物、生活方式、病原體 |
| 極端體型/品種遺傳 | 壽命的自然變異（玩具型 vs 巨型） |
| 相對人類較短的壽命 | 壽命試驗於數年而非數十年內完成 |
| 自發性老化疾病 | MMVD、CKD、認知功能障礙、癌症、肌少症 |
| 表觀遺傳時鐘 | 犬 DNA 甲基化時鐘追蹤生物年齡 |

貓共享室內暴露組與自發性老化疾病（CKD、甲狀腺功能亢進、認知功能障礙），但**聚焦自噬的研究少得多**。

### 犬作為老年科學（geroscience）模型（關鍵文獻）

- Creevy 等人，*Cold Spring Harb Perspect Med* 2016 — 伴侶犬作為長壽紅利模型（PMID 26729759）
- Kaeberlein、Creevy、Promislow — Dog Aging Project 框架（PMID 27143112）
- Horvath 等人 2022 — 犬與人類的 DNA 甲基化時鐘（PMID 35580182）
- Coleman 等人 2025 — **TRIAD** 試驗設計（PMID 39951177）

---

## 第三部分 — 犬類證據：老化組織中的自噬

### 骨骼肌 / 肌少症

**Pagano 等人，*Vet J* 2015（PMID 26257260）**  
老年犬肌肉 vs 年輕：

- 萎縮、肌漿空泡化、粒線體改變
- ↑ Beclin1、↑ LC3-II；80% 老年樣本中 p62 ↓
- 作者將**增強的自噬**解讀為年齡相關肌肉萎縮的貢獻因子

> [!WARNING]
> **解讀細微處**
> p62 降低 + LC3-II 升高符合**活躍流動**，但無合成代償的慢性分解代謝過度活化，可能會**驅動**肌少症。肌肉中的長壽目標是**平衡的**品質控制（受損胞器的粒線體自噬），而非不受控的巨量蛋白質流失——理想情況下搭配抗阻型負荷與充足的胺基酸（尤指白胺酸）。

### 心臟瓣膜老化 — MMVD（高臨床影響）

**Tang 等人，*Autophagy* 2025（PMID 39988732）** —— 具犬/人類相關性的里程碑機制論文：

- 黏液瘤性二尖瓣疾病（MMVD）= 犬（與人類）主要的年齡依賴性瓣膜疾病
- 衰老活化的瓣膜間質細胞（aVICs）表現出**受損的自噬流**與不成熟的自噬體
- 依賴 mTOR 的自噬誘發（雷帕黴素、torin-1）**減緩衰老**，降低 CDKN2A/p16 與 CDKN1A/p21，減少 SASP
- ATG7/ATG3 過表現恢復流動並逆轉衰老表型；ATG 缺失則誘發此表型
- **新穎機制：** SQSTM1/p62 介導的選擇性自噬**直接降解 p16 與 p21**（獨立於 UPS）

**轉譯重點：** 在犬 MMVD 細胞中，恢復自噬是**抗衰老的**，而不僅是細胞保護。這是從 mTOR 抑制 → 自噬 → CDKI 清除 → 更少 SASP 的直接分子橋樑。

相關：Tang 等人 2023（*Cell Prolif*，PMID 36869852）—— TGF-β → PI3K/AKT/mTOR 驅動犬 MMVD VIC 中的肌纖維母細胞轉化與衰老；mTOR 拮抗逆轉表型。

### 間質幹細胞 / 再生老化

**Deng 等人，*Int J Mol Sci* 2021（PMID 34768788）**  
犬骨髓 MSCs：

- 傳代誘發衰老（p16/p21、SA-β-gal、TNF-α/IL-6、SOX2/Nanog 喪失）
- **薑黃素（Curcumin）**（≈1 µM）透過**自噬活化**（↑LC3-II、ULK1、ATG7/12；↓p62）延遲衰老
- 雷帕黴素表型複製；3-MA 加劇衰老；薑黃素救援 3-MA 阻斷

**Agyapong 等人，*PLoS One* 2025（PMID 40700373）**  
老年犬肺 MSCs：增殖能力降低、**自噬降低**、遷移減少、ROS 增加——靜止（quiescence）調節年齡表型。

### 其他犬類節點

- 油橄欖苦素苷元（Oleuropein aglycone）—— 犬骨骼肌細胞中的抗氧化/抗老化訊號（PMID 38555794）
- MDCK 細胞中 Beclin1 過表現——降低端粒酶活性、增強凋亡（依脈絡的雙重角色；PMID 33723159）

---

## 第四部分 — 貓類證據（薄弱但方向一致）

針對*貓自噬 + 老化*的 PubMed 特定命中相當稀少。可嚴謹陳述者：

1. **核心機制保守** —— 貓表現相同的 mTOR/AMPK/ULK1/Beclin1/LC3/p62/TFEB 軸；沒有理由預期根本不同的線路。
2. **物種生理不同** —— 專性肉食代謝（高蛋白、有限的碳水處理能力）、獨特的 CKD 流行病學、不同的身體組成老化曲線。犬身上驗證的禁食/CR 方案**不能直接 1:1 轉移**至貓而無脂肪肝風險評估。
3. **臨床老化症候群**（CKD、認知功能障礙、骨關節炎、癌症）依犬/鼠/人的同源性是「自噬合理」的標的，但**老年貓組織中的直接流動測量大致付之闕如**。
4. 伴侶動物營養文獻（例如 Hill，*Proc Nutr Soc* 2009）記載飲食限制對犬的巨大存活效益（拉布拉多 CR ~+2 年；蛋白質/P 限制在 CKD 脈絡下使中位存活加倍）—— **具有自噬終點的貓 CR 長壽 RCT 不存在於可比的嚴謹程度**。

> [!TIP]
> **研究缺口排序**
> 最缺失的高價值實驗：在貓的腎、心、骨骼肌與腦中進行年齡分層的自噬流動（LC3 週轉 ± bafilomycin、p62、TFEB 定位、LAMP-2A）—— 平行於既有的犬資料集。

---

## 第五部分 — 伴侶哺乳動物的長壽介入

### 熱量 / 飲食限制（犬類歷史資料最強）

- 拉布拉多獵犬終身食物限制：延遲骨關節炎、**~1.8–2 年壽命延長**（Kealy/Lawler 品系研究；總結於伴侶動物營養回顧）。
- 機制（一般哺乳動物，wiki 支持）：CR → AMPK↑ / IGF-1↓ / mTORC1↓ / SIRT1↑ → 自噬 + 粒線體生成 + 發炎降低。
- 自噬在模式生物中對 CR 長壽**不可或缺**；CR 期間犬組織層級的流動確認尚不完整，但在機制上可預期。

**實用犬類建議：** 精瘦體況評分是飼主可用、證據最充分的「長壽藥物」之一。避免老年動物的蛋白質飢餓——將溫和能量限制與高品質蛋白質搭配以保護肌肉。

**實用貓類建議：** 激進禁食有**脂肪肝（hepatic lipidosis）**風險。偏好受控的分量減少、充足高蛋白、以及在獸醫監督下漸進減重——而非多日禁食。

### 雷帕黴素 / mTOR 抑制 — TRIAD

**Test of Rapamycin In Aging Dogs（TRIAD）** —— Coleman 等人，*Geroscience* 2025（PMID 39951177）：

- 平行組、雙盲、隨機、安慰劑對照、多中心
- 來自 Dog Aging Project 的健康中年犬
- 終點：**壽命 + 健康span 指標**
- 首個具有壽命終點、在實驗室外任何物種中進行的嚴謹藥理老年科學試驗

**機制預期（尚非 TRIAD 主要結果）：** 間歇低劑量雷帕黴素 → mTORC1 部分抑制 → ULK1 去抑制 → 改善自噬流動 + 免疫/代謝效應。先前小型犬心臟研究提示短期雷帕黴素改善舒張功能（TRIAD 前文献；謹慎解讀）。

**MMVD 細胞資料（Tang 2025）** 已顯示雷帕黴素/torin-1 透過犬瓣膜細胞中自噬逆轉衰老——心臟老化終點可能移動的生物合理性高。

### 其他具犬類資料的自噬連結藥物

| 藥物 | 犬類訊號 | 機制（縮寫） | 證據等級 |
|---|---|---|---|
| Rapamycin / torin-1 | MMVD VICs；MSC 衰老；TRIAD 進行中 | mTORC1↓ → autophagy↑ | 強機制 + 進行中 RCT |
| Curcumin | cBMSC 衰老救援 | 依賴自噬 | 體外 |
| Oleuropein aglycone | 肌細胞抗氧化/老化標記 | 氧化還原 + 可能的自噬交互作用 | 體外 |
| Spermidine | 強模式生物長壽；動脈老化（wiki 文件） | eIF5A/TFEB、HAT 抑制 | 伴侶動物 RCT 稀少 |
| Metformin | 理論上 AMPK→自噬 | 代謝 | 犬老化 RCT 有限 |
| Exercise | 預期 AMPK/TFEB 效益 | 多路徑 | 臨床常識；流動測量不足 |

---

## 第六部分 — 組織特異性老化地圖（犬）

| 組織 / 症候群 | 隨年齡的自噬狀態 | 與壽命相關的結果 | 介入訊號 |
|---|---|---|---|
| 骨骼肌 / 肌少症 | 標記 ↑ 但可能為分解代謝性 | 肌力、衰弱、行動力 | 平衡流動 + 負荷 + 蛋白質 |
| 二尖瓣（MMVD） | 衰老 aVICs 中流動**受損** | 心衰竭、死亡率 | 雷帕黴素恢復流動、清除 p16/p21 |
| MSCs（骨髓、肺） | 流動/功能 ↓ | 修復能力、發炎老化 | 薑黃素、雷帕黴素（體外） |
| 腎臟 | 年齡病理已描述；流動資料薄弱 | CKD 進展 | CR / 磷酸鹽控制；自噬未測量 |
| 腦（CCD） | 預期蛋白質穩態失敗 | 認知 | 同源於 AD/PD 自噬失敗 |
| 免疫系統 | 預期下降（wiki：免疫老化文件） | 感染、癌症 | 自噬誘發劑普遍研究中 |

---

## 第七部分 — 藥理學者視角：伴侶哺乳動物的高潛力組合

### 組合 A — 間歇 mTORC1 抑制 + 蛋白質定時回補（犬）

1. **原理：** 雷帕黴素開啟自噬窗口；定時胺基酸（尤指活動周圍的白胺酸）支持肌肉蛋白質合成，而不持續 mTORC1 過度活化。正向循環：更好的粒線體 → 更少 ROS → 更少衰老 → 更少 SASP。
2. **藥物：** 低劑量間歇雷帕黴素（類 TRIAD）+ 抗阻型活動 + 充足膳食蛋白質。
3. **潛力：** 肌少症 + 心臟老化 + 免疫老化。
4. **可行性評分（1–10）：** 合理性 9 · 可藥性 7 · 激效窗口 6 · 安全性 5（免疫抑制、血脂異常、癒合延遲）· 轉譯性 8（TRIAD 基礎設施）· 法規 6。
5. **風險：** 慢性每日給藥過度抑制 mTORC2；感染；傷口癒合受損。偏好間歇時程；依協議排除活動性感染/腫瘤犬。
6. **路線圖：** TRIAD 次級分析 LC3 週轉、p62、TFEB、衰弱指數、心臟超音波舒張指標、表觀遺傳年齡。

### 組合 B — 不經慢性 mTOR 阻斷的 AMPK/TFEB 軸（貓優先友善）

1. **原理：** 貓難以耐受激進 CR；需要透過 AMPK（運動、metformin 類若安全）、TFEB 活化劑（海藻糖 trehalose、亞精胺類）、以及溶酶體支持來達成自噬，而不深度關閉 mTORC1。
2. **藥物（假設性）：** 受控活動 + 高蛋白體重管理 + 亞精胺或海藻糖試驗 ± 謹慎劑量的 metformin（需獸醫 PK）。
3. **潛力：** CKD、認知老化、肥胖相關發炎。
4. **可行性：** 合理性 7 · 可藥性 5 · 激效窗口 6 · 安全性 5（貓藥物代謝）· 轉譯性 4 · 法規 3。
5. **風險：** 禁食導致的脂肪肝；許多「長壽」營養補充劑的貓 PK 未知。
6. **路線圖：** 先建立貓流動基線；接著 8–12 週營養補充劑試驗搭配腎功能面板 + 肌肉量 + 認知分數。

### 組合 C — MMVD 中的衰老樣態自噬恢復

1. **原理：** Tang 2025 —— p62 選擇性自噬降解 p16/p21。將 mTOR 抑制劑與溫和粒線體激效（運動、低劑量解偶聯研究性藥物——**尚非**臨床）及 TFEB 支持搭配。
2. **藥物：** 雷帕黴素 ± 薑黃素類多酚（生體可用率受限）± 運動。
3. **潛力：** 延遲小型犬的 MMVD 進展。
4. **可行性：** 合理性 8 · 可藥性 6 · 安全性 5 · 轉譯性 7（存在自然犬 MMVD 隊列）。
5. **風險：** 癌症中依脈絡的自噬；多酚–藥物交互作用。
6. **路線圖：** 前瞻性 MMVD B1/B2 期犬——超音波 + 循環 SASP 面板 + PBMC 自噬流動。

---

## 第八部分 — 假說（可檢測）

**H1（主要）：** 具有較高基線自噬流動（PBMCs 或肌肉）的中年犬，有較慢的表觀遺傳年齡加速與較低的 5 年死亡率，獨立於品種/體型。

**H2：** TRIAD 雷帕黴素延長健康span **取決於**可測量的自噬流動增加；流動生物標記的非反應者將呈現零臨床效益。

**H3：** 在犬 MMVD 中，循環或瓣膜的 p16/p21 蛋白負擔與 p62 介導的選擇性自噬能力呈負相關；雷帕黴素 *體內* 降低 CDKI 負擔。

**H4：** 早期 CKD 的老年貓表現出腎 CMA（LAMP-2A）與巨自噬流動降低；恢復溶酶體酸化的介入比單獨熱量削減更能減緩 creatinine/SDMA 上升。

**H5：** 品種體型–壽命反向關係部分由 IGF-1/mTOR 張力介導 → 巨型犬中的慢性自噬抑制。

---

## 第九部分 — 實驗路線圖（優先順序）

### 立即（0–12 個月）

1. **標準化流動分析** 用於伴侶動物：PBMCs 中 LC3-II 週轉 ± bafilomycin；p62 ELISA/WB；TFEB 核分率；選用 LAMP-2A 測 CMA。
2. **年齡–品種矩陣** 於犬：年輕 vs 老年；小型 vs 巨型；精瘦 vs 肥胖——肌肉 + PBMC。
3. **貓基線圖譜**（每年齡層 n≥12）：腎、肌肉、PBMC 流動。

### 近期（1–3 年）

4. TRIAD / DAP 內的嵌套生物標記研究：雷帕黴素前後流動 + 衰弱 + 超音波 + 甲基化年齡。
5. MMVD 前瞻性隊列：分期分層的自噬/SASP 面板。
6. 犬 CR（體況介入）搭配流動終點——合乎倫理、飼主可執行。

### 中期（3–7 年）

7. 貓受控減重試驗搭配腎與認知終點 + 流動。
8. 組合試驗：prefrail 犬中間歇雷帕黴素 + 運動處方。
9. 遺傳/基因體：ATG/mTOR 路徑變異 vs 品種壽命。

### 生物標記面板（建議）

| 領域 | 讀值 |
|---|---|
| 自噬流動 | LC3-II ± 溶酶體抑制劑、p62、ULK1-pS555 |
| 溶酶體 | LAMP1/2、cathepsin 活性、溶酶體 pH 探針（ex vivo） |
| 粒線體自噬 | PINK1/Parkin 標記、mtDNA CN、殘餘 OCR |
| 衰老 | p16、p21、SA-β-gal（組織）、SASP（IL-6、TGF-β、MMPs） |
| 系統性老化 | 衰弱指數、肌肉量（DEXA/CT）、表觀遺傳時鐘 |
| 臨床 | 超音波（MMVD）、SDMA/creatinine、認知分數 |

---

## 第十部分 — 已確立 vs 開放

### 已確立（高信心）

- 自噬在模式生物中保守且與長壽耦合；抑制會阻斷多條長壽路徑。
- 犬自發性發展人類樣老化疾病；DAP/TRIAD 使它們成為領先的轉譯老年科學物種。
- 犬 MMVD 衰老細胞具有**缺陷自噬**；恢復 mTOR 調控的自噬透過 p62 清除 p16/p21（2025）。
- 犬 MSC 衰老對自噬敏感（薑黃素/雷帕黴素）。
- 終身食物限制大幅延長拉布拉多壽命。

### 可能但尚不完整

- TRIAD 將顯示部分透過自噬的壽命/健康span 效益（試驗進行中；勿過度主張）。
- 老年犬肌肉「自噬標記↑」反映若無合成代償可能變成適應不良的壓力適應。
- 貓將受益於類似的 mTOR/AMPK 策略，但需物種特異性劑量。

### 開放 / 薄弱

- 提升自噬**延長貓壽命**的直接證明。
- 每個組織的最佳量化「流動設定值」（肌肉 ≠ 瓣膜 ≠ 腎）。
- 亞精胺、NR/NMN、urolithin A 等是否移動寵物犬/貓的臨床終點。
- 寵物長期自噬調節的癌症風險權衡。

---

## 第十一部分 — 實用要點（非處方性）

**犬**（與獸醫討論）：

1. 維持精瘦體況——最強的現實世界長壽槓桿。
2. 保存肌肉：充足蛋白質 + 規律活動（自噬品質控制 ≠ 慢性飢餓分解代謝）。
3. 在例行 off-label 雷帕黴素用於試驗/專科照護之外之前，關注 TRIAD 結果。
4. MMVD 易發品種：早期超音波監測；自噬/mTOR 科學在此特別相關。

**貓**：

1. 避免崩減式飲食 / 長期禁食（脂肪肝）。
2. 過重貓在獸醫指導下進行高蛋白、受控熱量餵食。
3. 將 CKD 與認知老化視為自噬生物標記的研究優先項——尚非已證實的補充劑標的。

---

## Wiki 交叉連結

主要：[[Autophagy]] · [[Autophagic Flux]] · [[Macroautophagy]] · [[Mitophagy]] · [[Chaperone-Mediated Autophagy]] · [[mTORC1]] · [[AMPK]] · [[SIRT1]] · [[TFEB]] · [[Beclin1]] · [[p62]] · [[LC3]] · [[Rapamycin]] · [[Caloric Restriction]] · [[Spermidine]] · [[Senescence]] · [[Aging]] · [[Autophagy Inducer]]

文件：  
[[_document_ - rubinsztein2011_autophagy_and_aging]] ·  
[[_document_ - Autophagy takes it all – autophagy inducers target immune aging]] ·  
[[_document_ - The autophagy enhancer spermidine reverses arterial aging]] ·  
[[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]

---

## 關鍵參考文獻

1. Rubinsztein DC, Mariño G, Kroemer G. Autophagy and aging. *Cell*. 2011.（vault：rubinsztein2011）
2. Pagano TB 等人。Age related skeletal muscle atrophy and upregulation of autophagy in dogs. *Vet J*. 2015. PMID 26257260
3. Tang Q 等人。Autophagy regulates cellular senescence… in myxomatous mitral valve degeneration. *Autophagy*. 2025. PMID 39988732
4. Coleman AE 等人。TRIAD：study design and rationale. *Geroscience*. 2025. PMID 39951177
5. Deng J 等人。Curcumin alleviates senescence of canine BMSCs by activating autophagy. *Int J Mol Sci*. 2021. PMID 34768788
6. Agyapong N 等人。Quiescence modulates age-related changes in canine lung MSCs. *PLoS One*. 2025. PMID 40700373
7. Tang Q 等人。TGF-β–PI3K/AKT/mTOR in canine MMVD. *Cell Prolif*. 2023. PMID 36869852
8. Creevy KE 等人。Companion dog as model for longevity dividend. *Cold Spring Harb Perspect Med*. 2016. PMID 26729759
9. Kaeberlein M 等人。Dog Aging Project. *Mamm Genome*. 2016. PMID 27143112
10. Horvath S 等人。DNA methylation clocks for dogs and humans. *PNAS*. 2022. PMID 35580182
11. Polacchini G 等人。Oleuropein aglycone in canine skeletal muscle cells. *Tissue Cell*. 2024. PMID 38555794
12. Hill RC. Nutritional therapies… lessons from companion animals. *Proc Nutr Soc*. 2009. PMID 19040782

---

## 連結摘要

- 綜述運用 vault [[Autophagy]] 網絡 + 外部伴侶動物文獻（犬 >> 貓）。
- 最強犬類機制橋樑：**MMVD 衰老 ↔ p62 選擇性自噬失敗 ↔ 雷帕黴素救援**。
- 最強族群介入：**體況 / 飲食限制**（犬）；**TRIAD** 是關鍵的進行中藥理測試。
- 建議新建實體筆記（若進一步攝取）：`Dog Aging Project`、`TRIAD`、`Myxomatous Mitral Valve Disease`、`Canine Sarcopenia`、`Feline Chronic Kidney Disease`。
- 待加強的強連結：
  - [[Rapamycin]] ↔ 犬心臟老化 / MMVD
  - [[Autophagy]] ↔ [[Senescence]]（透過 p16/p21 選擇性降解）
  - [[Caloric Restriction]] ↔ 伴侶犬壽命
  - [[mTORC1]] ↔ 品種體型 / IGF-1 長壽軸（假說）
