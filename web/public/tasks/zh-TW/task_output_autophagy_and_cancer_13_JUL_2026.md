---
title: 化療期間的自噬 — 衝突與一致的觀點
description: 關於自噬在癌症化療中雙重角色的研究發現，編纂自 wiki 筆記與網路文獻（2013–2025）
created: 2026-07-21
type: task-output
tags:
  - autophagy
  - cancer
  - chemotherapy
updated: 2026-08-22
---
# 化療期間的自噬：衝突與一致的觀點

> [!NOTE]
> **來源脈絡**
> 本報告編纂自 wiki 筆記（主要為 sirtuins、autophagy 與 cancer 目錄）以及網路文獻（2013–2025）。其觸發源自描述 SIRT5 介導的 LDHB 去乙醯化與胃癌、結直腸癌中自噬過度活化的段落。

---

## 摘要

化療期間的自噬 **尚無定論**——它是癌症生物學中最活躍辯論的問題之一。主流觀點認為，在化療壓力下，自噬於已建立的腫瘤中主要為 **促存活**，但臨床試驗結果好壞參半。該領域正轉向 **依情境而定的自噬調控**，而非全面抑制或活化。

---

## 三大陣營

### 陣營 1：自噬 = 促存活（保護腫瘤細胞免於化療）

這是 **多數觀點**，也是大多數使用羥氯喹（HCQ）作為自噬抑制劑合併化療的臨床試驗的基礎。

#### Wiki 證據

- **Ivermectin 文件**（`notes/cancer/_document_ - Ivermectin, a potential anticancer drug...`）：
  > "autophagy can help tumors adapt to the nutritional deficiency of the tumor microenvironment, and to a certain extent, protect tumor cells from chemotherapy- or radiotherapy-induced injury"

- **Hydroxychloroquine 筆記**（`notes/_link/Hydroxychloroquine.md`）：
  > "combined with chemotherapy to block cytoprotective autophagy in Cancer cells"

- **PDA 筆記**（`notes/_link/PDA.md`）：
  > "KRAS-driven autophagy supports tumor metabolism and survival; hydroxychloroquine (autophagy inhibitor) is being investigated as an adjunct to chemotherapy"

- **SIRT5 筆記**（`notes/sirtuins/SIRT5.md`）：
  > "SIRT5 desuccinylates [[LDHB]] to hyperactivate autophagy, providing cancer cells with recycled nutrients"

- **LDHB 筆記**（`notes/sirtuins/LDHB.md`）：
  > "Hyperactivation of LDHB by SIRT5 shifts the intracellular lactate/pyruvate balance, leading to metabolic stress that triggers excessive autophagy... providing cancer cells with recycled nutrients and resistance to metabolic stress."

- **Autophagy wiki**（`notes/autophagy/Autophagy.md`）：
  > "In established tumors, autophagy acts as a survival mechanism, allowing cancer cells to survive the harsh, nutrient-poor, and hypoxic conditions of the tumor microenvironment."

- **B Cell 筆記**（`notes/autophagy/B Cell.md`）：
  > "excessive or dysregulated autophagy can support survival of malignant B cells in Cancer (e.g., B-cell lymphomas, chronic lymphocytic leukemia) under hypoxia and chemotherapy pressure"

#### Web 證據

- **Dwyer & Chodosh（2024，*Breast Cancer Research*）**：
  - 自噬 *是* 乳腺腫瘤復發所 *必需*
  - 治療後存活的休眠殘餘腫瘤細胞依賴自噬存活
  - 抑制自噬（chloroquine、ATG5/ATG7 敲低、BECN1 刪除）**殺死休眠腫瘤細胞並防止復發**
  - "inhibiting autophagy results in the death of dormant mammary tumor cells in vivo"
  - URL：https://link.springer.com/article/10.1186/s13058-024-01878-7

- **Cell Death & Disease（2025）**：
  - 骨肉瘤與結直腸癌中 chloroquine + oxaliplatin
  - 自噬抑制「有效抑制腫瘤細胞死亡」且「對休眠癌細胞表現出優先細胞毒性」
  - 雙重治療優勢：抑制細胞增殖藥劑殺死增生細胞；chloroquine 專門根除休眠細胞
  - URL：https://www.nature.com/articles/s41419-025-08304-6

- **Granato et al.（2013，*PLOS ONE*）**：
  - 在 Primary Effusion Lymphoma 中，bortezomib 誘發的 JNK 與自噬活化為 **促存活**
  - 抑制 JNK 或自噬增加了 bortezomib 的細胞毒性
  - URL：https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0075965

- **Chromik et al.（2024，PMC）**：
  - PDAC 中的自噬抑制增強樹突細胞交叉呈現與抗腫瘤免疫
  - 合併自噬抑制 + 樹突細胞招募誘發抗腫瘤免疫並增強免疫檢查點阻斷敏感性
  - URL：https://pmc.ncbi.nlm.nih.gov/articles/PMC11647207/

### 陣營 2：自噬 = 促死亡（在化療期間殺死腫瘤細胞）

#### Wiki 證據

- **Ivermectin 文件**：
  > "some autophagy activators can increase the sensitivity of tumors to radiotherapy and chemotherapy by inducing autophagy, and excessive activation of autophagy can also lead to tumor cell death"

- **Autophagy wiki**（`notes/autophagy/Autophagy.md`）：
  > "Excessive activation of autophagy can lead to tumor cell death. Improving autophagy activity has become a new approach in cancer therapy."

- **Caloric Restriction 文件**（`notes/autophagy/_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting.md`）：
  > "prolonged calorie restriction with excessive autophagy response is harmful and can stimulate a type II Autophagic Cell Death"

- **Autophagic Cell Death 筆記**（`notes/_link/Autophagic Cell Death.md`）：
  > "prolonged calorie restriction with excessive autophagy response is harmful and can stimulate a type II Autophagic Cell Death"

#### Web 證據

- **Galluzzi et al.（2017，*Nature Reviews Clinical Oncology*）**：
  - 活化自噬可 *增強* 免疫原性化療與放射治療
  - 自噬協助將腫瘤抗原呈現給免疫系統
  - URL：https://pubmed.ncbi.nlm.nih.gov/27845767/

- **多發性骨髓瘤中的 Bortezomib**（與 PEL 淋巴瘤發現對比）：
  - 在高基礎 ER 壓力的腫瘤（如多發性骨髓瘤）中，bortezomib 誘發的自噬 **促成細胞死亡** 而非存活
  - 此為依情境而定——同一藥物，在不同腫瘤類型中產生相反的自噬結果

- **Rapamycin for longevity 筆記**（`notes/_link/_document_ - Rapamycin for longevity...`）：
  > "while autophagy may suppress tumor initiation by clearing damaged cellular components, it can also support the survival and growth of established tumors... enhancing autophagy in aging populations with elevated cancer risks may inadvertently promote oncogenesis"

### 陣營 3（日益增長的共識）：依情境而定 — 視情況而異

#### Wiki 證據

- **Ivermectin 文件**：
  > "the specific environment of tumor cells will determine whether autophagy enhances or inhibits tumor development"

- **Autophagy wiki**：
  > "its function may vary according to several biological factors, including tumor type, progression stage and genetic landscape, along with oncogene activation and tumor suppressor inactivation"

- **SIRT1 in CRC**（`notes/sirtuins/_document_ - sirtuins in health and disease...`）：
  > "SIRT1 affects CRC in a dose-dependent manner... Heterozygous deletion induces c-Myc expression, enhancing glutamine metabolism and subsequent proliferation, autophagy and cancer formation. In contrast, homozygous deletion triggers apoptotic pathways, increases cell death, diminishes autophagy, and reduces cancer formation."

- **Caloric Restriction 文件**：
  > "autophagy can suppress or enhance cancer growth depending on the cellular microenvironment and disease stage"

#### Web 證據

- **Kinsella（2011，*Frontiers in Oncology*）**：
  > "autophagy plays a dual role of either pro-cell survival or pro-cell death in response to these cancer treatments, depending on the cellular context and the nature of the treatment"
  - URL：https://pmc.ncbi.nlm.nih.gov/articles/PMC3356061/

- **Autophagy 文獻回顧（2010，*Autophagy*）**：
  > "the current autophagy literature is often viewed as confusing, because of its dual role and association with apparently contradictory roles, such as survival and cell death"
  - URL：https://www.tandfonline.com/doi/abs/10.4161/auto.6.3.11625

- **Frontiers 編輯評論（2021/2026）**：
  > "How autophagy switch from pro-survival to pro-death signal? How selective is autophagy in controlling cell-death?"
  - URL：https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2021.684049/full

---

## 臨床試驗證據（羥氯喹 + 化療）

### 顯示效益的試驗（支持促存活陣營）

| 試驗 | 癌症類型 | 設計 | 結果 | 來源 |
|---|---|---|---|---|
| Phase I/II（2019） | Renal cell carcinoma | Everolimus + HCQ | 45% 達成 6 個月 PFS；67% 疾病受控 | AACR *Clin Cancer Res* |
| Phase 1b/2（2024） | HR+/HER2− breast cancer | HCQ + high-dose CDK4/6i | 前景可期，毒性可控 | *Med*（Cell Press） |
| Preclinical + in vivo（2025） | Osteosarcoma、colorectal | CQ + oxaliplatin | 對休眠細胞優先細胞毒性；防止轉移 | *Cell Death & Disease* |

### 顯示無效益的試驗

| 試驗 | 癌症類型 | 設計 | 結果 | 來源 |
|---|---|---|---|---|
| Phase II（2025） | Platinum-sensitive relapsed ovarian | Chemo + HCQ vs. chemo alone | ORR：85% vs 80%（p=0.65）；PFS：12 vs 11 個月（p=0.56）；OS：16 vs 21 個月（p=0.49） | *Discover Oncology* |
| Phase 2（2019） | Advanced pancreatic | Gem/nab-paclitaxel ± HCQ | 無明顯存活改善 | *JAMA Oncol* |

### 進行中的試驗

| 試驗 | 癌症類型 | 設計 | 狀態 | 來源 |
|---|---|---|---|---|
| Phase I（ASCO 2025） | KRAS-mutant PDAC | Binimetinib + HCQ | 招募中／已完成收案 | *JCO* 43(16_suppl) |
| NCT04214418 | 多種 | Autophagy inhibitor + ICIs | 進行中 | ClinicalTrials.gov |

---

## 自噬角色的主要決定因素

文獻指出數個決定化療期間自噬為促存活或促死亡的因素：

### 腫瘤類型
- **RAS 突變癌症**（胰臟、結直腸）：強烈依賴自噬；此處自噬抑制最有前景
- **多發性骨髓瘤**：高基礎 ER 壓力 → 自噬可為促死亡
- **乳癌（休眠細胞）**：自噬對復發明確為促存活
- **卵巢癌**：結果好壞參半；phase II 中加 HCQ 未增效益

### 疾病分期
- **癌前 / 早期**：自噬為抑瘤（清除受損胞器、維持基因組穩定）
- **已建立腫瘤**：自噬轉為促存活（餵養腫瘤代謝）
- **治療後休眠細胞**：自噬強烈促存活（促成復發）

### 基因背景
- **Beclin-1 單等位基因缺失**：易生腫瘤；自噬缺失加速腫瘤發生
- **p53 狀態**：p53 突變腫瘤傾向誘發自噬以存活
- **PI3K/Akt/mTOR 路徑**：致癌基因活化抑制自噬；其抑制（如 everolimus）誘發自噬作為抵抗機制

### 時機與組合策略
- **化療後自噬抑制**：可能標靶休眠殘餘細胞（Chodosh 2024）
- **化療期間自噬抑制**：可能效果較差（卵巢癌試驗）
- **自噬抑制 + 免疫療法**：作為較強方法浮現（PDAC/DC 研究）

---

## SIRT5–LDHB 軸的脈絡

原始段落描述一個特定機制：

1. **SIRT5** 在多個離胺酸殘基去乙醯化 **LDHB**
2. 過度活化的 LDHB 改變乳酸／丙酮酸平衡
3. 代謝壓力觸發 **過度、非典型自噬**
4. 此自噬為癌細胞提供回收的營養素

這明確落入 **陣營 1**（已建立腫瘤中的促存活自噬）。SIRT5–LDHB 軸是癌細胞 **劫持** 自噬機制以存活的機制之一。關鍵連結：

- SIRT5 在 GC、CRC、HCC、NSCLC 中過表達 → 促瘤
- SIRT5 對菸鹼醯胺抑制具抗性 → 在腫瘤微環境中持續活化
- 標靶 SIRT5 介導的 LDHB 去乙醯化可抑制自噬性存活，而無須全面抑制自噬

---

## 綜合與未來方向

### 目前知識狀態
- **無單一共識** — 自噬在癌症治療中依情境而定
- **多數觀點**：在化療壓力下，自噬於已建立腫瘤中主要為促存活
- **臨床轉譯**：HCQ + 化療試驗顯示 **溫和且不一致的結果**
- **新興方法**：依情境調控而非全面抑制

### 有前景的方向
1. **化療後自噬抑制** 以標靶休眠殘餘細胞（Chodosh 2024）
2. **自噬抑制 + 免疫療法**（增強 DC 交叉呈現、檢查點阻斷敏感性）
3. **標靶特定自噬調節因子**（如 SIRT5–LDHB 軸）而非全域自噬
4. **生物標記驅動的病患選擇** — 辨識哪些腫瘤依賴自噬
5. **時機最佳化** — 循序而非同時的自噬調控

### 開放問題
- 如何在特定腫瘤中將自噬從促存活切換為促死亡？
- 哪些生物標記可預測自噬依賴性？
- 自噬誘發劑（熱量限制、metformin）能否在保護正常細胞的同時，使腫瘤對化療增敏？
- 相對於化療，自噬抑制的最佳時機窗口為何？

---

## 參考文獻

### Wiki 來源
- `notes/sirtuins/SIRT5.md` — SIRT5 實體筆記
- `notes/sirtuins/LDHB.md` — LDHB 實體筆記
- `notes/autophagy/Autophagy.md` — Autophagy 實體筆記
- `notes/_link/Hydroxychloroquine.md` — HCQ 實體筆記
- `notes/_link/PDA.md` — 胰管腺癌筆記
- `notes/autophagy/B Cell.md` — B 細胞自噬筆記
- `notes/_link/Autophagic Cell Death.md` — 自噬性細胞死亡筆記
- `notes/sirtuins/_document_ - sirtuins in health and disease s41392-022-01257-8.md` — Sirtuins 回顧
- `notes/cancer/_document_ - Ivermectin, a potential anticancer drug...md` — Ivermectin 回顧
- `notes/autophagy/_document_ - Autophagy and intermittent fasting...md` — Autophagy & fasting 回顧
- `notes/autophagy/_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting.md` — CR & autophagy 回顧
- `notes/_link/_document_ - Rapamycin for longevity the pros, the cons, and future perspectives.md` — Rapamycin 回顧

### Web 來源
1. Dwyer S, Chodosh LA (2024). "Autophagy is required for mammary tumor recurrence by promoting dormant tumor cell survival following therapy." *Breast Cancer Research*. https://link.springer.com/article/10.1186/s13058-024-01878-7
2. "Chloroquine Overcomes Chemotherapy Resistance and Suppresses Cancer Metastasis by Eradicating Dormant Cancer Cells." (2025) *Cell Death & Disease*. https://www.nature.com/articles/s41419-025-08304-6
3. Granato M et al. (2013). "JNK and Macroautophagy Activation by Bortezomib Has a Pro-Survival Effect in Primary Effusion Lymphoma Cells." *PLOS ONE*. https://doi.org/10.1371/journal.pone.0075965
4. Kinsella TJ (2011). "Impact of Autophagy on Chemotherapy and Radiotherapy Mediated Tumor Cytotoxicity: 'To Live or not to Live'." *Frontiers in Oncology*. PMC3356061
5. Galluzzi L et al. (2017). "Activating autophagy to potentiate immunogenic chemotherapy and radiation therapy." *Nat Rev Clin Oncol*. PMID: 27845767
6. Goenka A et al. (2025). "Targeting autophagy in platinum-sensitive relapsed ovarian cancer: randomized phase II trial of hydroxychloroquine with chemotherapy with biomarker correlation." *Discover Oncology*. https://link.springer.com/article/10.1007/s12672-025-01904-w
7. Phase I/II trial (2019). "Autophagy Inhibition to Augment mTOR Inhibition: a Phase I/II Trial of Everolimus and Hydroxychloroquine in Patients with Previously Treated Renal Cell Carcinoma." *Clin Cancer Res*. AACR
8. Phase 1b/2 trial (2024). "Targeting autophagy plus high-dose CDK4/6 inhibitors in advanced HR+HER2− breast cancer." *Med* (Cell Press). https://doi.org/10.1016/j.medj.2024.11.012
9. Haldar SD et al. (2025). "A phase I trial of binimetinib plus hydroxychloroquine in patients with previously treated metastatic pancreatic cancer." *JCO* 43(16_suppl):4152.
10. Chromik J et al. (2024). "Combined Autophagy Inhibition and Dendritic Cell Recruitment Induces Antitumor Immunity and Enhances Immune Checkpoint Blockade Sensitivity in Pancreatic Cancer." PMC11647207
