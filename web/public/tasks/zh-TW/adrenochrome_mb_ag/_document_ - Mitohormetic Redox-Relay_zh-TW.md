---
title: 粒線體激效性氧化還原中繼
description: 粒線體激效性氧化還原中繼（MRR）是一種治療策略，旨在透過受控、低振幅的氧化脈衝觸發適應性壓力反應，同時提供生物能量支持並確保受損胞器的清除，以處理粒線體功能障礙。
created: 2026-07-04
updated: 2026-07-07
tags:
  - scientific-concept
  - 粒線體
  - oxidative-stress
  - mitohormesis
aliases: []
protected: true
---

# 粒線體激效性氧化還原中繼

**粒線體激效性氧化還原中繼（MRR）** 是一種治療策略，旨在透過受控、低振幅的氧化脈衝觸發適應性壓力反應（[[Mitohormesis]]），同時提供生物能量支持並確保受損胞器的清除，以處理粒線體功能障礙。

## 策略組成

- **觸發劑：** [[Carbazochrome]]（穩定化的 [[Adrenochrome]] 衍生物），使用次微莫耳濃度以誘發受控的 [[Redox Cycling]] 並生成 [[Superoxide anion]] 訊號脈衝。
- **放大器／分流器：** [[Methylene blue]]，作為替代的粒線體電子載體，繞過受損複合體並防止失控的 ROS 生成。
- **燃料：** [[NAD+]] 前驅物如 [[Nicotinamide Riboside]] 或 [[Nicotinamide Mononucleotide]]，用以預啟 [[SIRT1]]/[[AMPK]]/[[PGC1-α]] 軸。
- **清理：** [[Urolithin A]]，誘發選擇性 [[Mitophagy]] 並確保移除功能失調的粒線體。

## 作用機制

該中繼透過活化 [[NRF2]]/ARE 抗氧化反應路徑，並經由 [[PGC1-α]] 刺激粒線體生合成來運作。氧化脈衝由 [[Methylene blue]] 的電子分流作用維持在「激效性窗口」內，即使在呼吸負擔下仍維持 ATP 生成。

## 中繼的詳細機制

### 步驟 1：局部 ROS 生成（觸發階段）

Carbazochrome（10–500 nM）主要於粒線體內膜內進行 [[Redox Cycling]]。經由 [[Complex I]] 或 [[Complex III]] 的單電子還原生成半醌自由基，將 O₂ 還原為 [[Superoxide anion]]。關鍵在於，此過程發生在**局部**位置——內膜的基質面——確保 ROS 生成在空間上受限於粒線體區室。這種空間限制至關重要：胞質 ROS 否則會無差別地氧化訊號蛋白，而侷限於粒線體的 ROS 則選擇性活化區室特異性路徑。

### 步驟 2：ROS 至 mitokine 中繼

粒線體超氧迅速被 [[SOD2]]（MnSOD）歧化為 H₂O₂。H₂O₂ 擴散至膜間隙，並經由 [[Aquaporins]]（AQP8、AQP11）進入胞質。此脈衝啟動一訊號級聯：

1. **[[HIF-1α]] 穩定化**：H₂O₂ 抑制 [[PHD2]]（prolyl hydroxylase），穩定 HIF-1α，進而上調 [[Glycolysis]] 與 [[VEGF]]。
2. **[[NRF2]] 活化**：H₂O₂ 與半醌修飾 [[Keap1]] 半胱胺酸，釋放 [[NRF2]] 以供核轉位。
3. **[[Integrated Stress Response]]（整合性壓力反應）**：基質 ROS 活化 [[OMA1]]，其切割 [[OPA1]]，從內膜釋放 [[DELE1]]。DELE1 結合 [[HRI]]，磷酸化 eIF2α 並驅動 [[ATF4]] 轉譯。

### 步驟 3：Mitokine 分泌（全身性臂）

粒線體壓力觸發受壓細胞釋放 [[Mitokines]]：

- **[[FGF21]]**：由 [[ATF4]] 與 [[PPARα]] 轉錄誘發。分泌出的 FGF21 作用於 [[Adipose Tissue]] 與 [[Liver]] 以誘發 [[Fatty acid oxidation]] 與 [[Ketogenesis]]。
- **[[GDF15]]**：由 [[ATF4]] 與 [[CHOP]] 驅動。GDF15 透過 [[Brainstem]] 中的 [[GFRAL]] 訊號，調節 [[Appetite]] 與 [[Energy expenditure]]。
- **[[Humanin]]**：一種編碼於 [[Mitochondrial DNA]] 的 24 胺基酸胜肽。它結合 [[FPRL2]] 與 [[IL-6 receptor β]]（gp130）以抑制 [[Apoptosis]] 與 [[Inflammation]]。

### 步驟 4：適應性轉錄反應

[[NRF2]]、[[ATF4]] 與 [[PGC1-α]] 的聯合活化驅動協調的轉錄程序：

| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 |
|---------|---------------------|-------------|----------------|
| 抗氧化 | [[NRF2]] | [[NQO1]]、[[HO-1]]、[[Glutathione]]、[[Thioredoxin]] | 強化的 [[Redox Homeostasis]] |
| ISR | [[ATF4]] | [[GDF15]]、[[CHOP]]、[[Amino acid transporters]] | [[Integrated Stress Response]]、[[Amino acid metabolism]] |
| 生合成 | [[PGC1-α]]/[[NRF1]]/[[ERRalpha]] | [[TFAM]]、[[Complex subunits]]、[[SOD2]] | [[Mitochondrial Biogenesis]] |
| 品質控制 | [[TFEB]]、[[FOXO]] | [[Cathepsins]]、[[Autophagy]] genes、[[Ubiquitin-proteasome]] | [[Mitophagy]]、[[Proteostasis]] |

### 步驟 5：Methylene Blue 分流（窗口控制）

[[Methylene blue]]（MB）在維持激效性窗口中扮演雙重角色：
1. **電子分流**：MB 從 [[NADH]]（經由 [[NADH dehydrogenase]]）或 [[FADH₂]] 接受電子，並捐給 [[Cytochrome c]]，繞過 Complex I–III 阻塞。這透過 Complex IV 維持 [[ATP production]]。
2. **ROS 緩衝**：MB 直接從半醌自由基接受電子，降低 [[Redox Cycling]] 振幅並防止 ROS 過衝。這種「自體調節」行為使 MB 獨特適合氧化還原中繼控制。
3. **[[NRF2]] 增強**：低劑量 MB 微弱活化 Nrf2，與 carbazochrome 脈衝產生協同。

## 組織間串聯

MRR 利用細胞非自主性訊號來協調全身性適應：

- **肌肉 → 大腦**：運動肌肉釋放的 [[FGF21]] 穿過 [[Blood-brain barrier]] 並增強 [[Neurogenesis]] 與 [[BDNF]] 表現。
- **肝臟 → 脂肪**：FGF21 誘發 [[Browning of white adipose tissue]]，增加能量消耗。
- **心臟 → 遠端組織**：來自 [[Cardiomyocytes]] 的壓力活化 [[FGF21]] 與 [[GDF15]] 保護遠端器官免於 [[Ischemia-reperfusion Injury]]。
- **一個組織中的粒線體壓力** 可透過 mitokine 訊號抑制另一組織的年齡相關病理。

## 激效性窗口的最佳化

有效 MRR 劑量的關鍵參數：

| 參數 | 最佳範圍 | 範圍外的後果 |
|-----------|--------------|--------------------------|
| [[Carbazochrome]] 濃度 | 50–500 nM | <50 nM：訊號不足；>500 nM：細胞毒性 |
| 脈衝持續時間 | 30 min–4 h | <30 min：無適應；>4 h：[[Apoptosis]] 啟動 |
| MB:Carbazochrome 比例 | 5:1 至 20:1 | <5:1：ROS 過衝；>20:1：Nrf2 去敏 |
| [[NAD+]] 前驅物劑量 | 250–1000 mg/d（NR/NMN） | <250 mg：sirtuin 活化不足；>1000 mg：無益處的耗費 |
| 脈衝頻率 | 每週 2–3 次 | 每日：適應與激效效應喪失；每週：維護不足 |

## 治療開發潛力

MRR 框架提出數項臨床應用：

- **[[Mitochondrial myopathy]]**：MB + NAD⁺ 前驅物繞過 ETC 缺陷。
- **[[Parkinson's Disease]]**：[[Urolithin A]] 增強 [[PINK1]]/[[Parkin]] 粒線體自噬路徑。
- **[[Heart Failure]]**：透過 FGF21 誘發保留 [[Mitochondrial energetics]]。
- **[[Metabolic Syndrome]]**：透過 AMPK-PGC1α 活化改善 [[Insulin Sensitivity]]。
- **[[Neuroprotection]]**：透過 FGF21 訊號上調 [[BDNF]]。
- **[[Aging]]**：受控 ROS 訊號的衰老修飾（senomorphic）效應，結合間歇性粒線體自噬誘發的衰老溶解（senolytic）清除。

## 文件

提及此實體的文件清單

  - [[_document_ - MRR - mitohormesis|mitohormesis]]
    - 策略一：粒線體激效性氧化還原中繼（MRR）主要標靶：粒線體功能障礙與能量衰竭 1.1 組成 觸發劑：Carbazochrome（穩定化的腎上腺紅質衍生物），次微莫耳濃度。

## 連結

- [[Mitohormesis]]：粒線體激效性氧化還原中繼（MRR）是一種治療策略，旨在透過受控、低振幅的氧化脈衝觸發適應性壓力反應，以處理粒線體功能障礙……
- [[Carbazochrome]]：## 策略組成 - **觸發劑：** Carbazochrome（穩定化的 [[Adrenochrome]] 衍生物），使用次微莫耳濃度……
- [[Adrenochrome]]：## 策略組成 - **觸發劑：** [[Carbazochrome]]（穩定化的 Adrenochrome 衍生物），使用次微莫耳濃度……
- [[Redox Cycling]]：## 策略組成 - **觸發劑：** [[Carbazochrome]]（穩定化的 [[Adrenochrome]] 衍生物），使用次微莫耳濃度……
- [[Superoxide anion]]：## 策略組成 - **觸發劑：** [[Carbazochrome]]（穩定化的 [[Adrenochrome]] 衍生物），使用次微莫耳濃度……
- [[Methylene blue]]：- **放大器／分流器：** Methylene blue，作為替代的粒線體電子載體，繞過受損……
- [[NAD+]]：- **燃料：** NAD+ 前驅物如 [[Nicotinamide Riboside]] 或 [[Nicotinamide Mononucleotide]]，用以預啟 [[SIRT1]]/……
- [[Nicotinamide Riboside]]：- **燃料：** [[NAD+]] 前驅物如 Nicotinamide Riboside 或 [[Nicotinamide Mononucleotide]]，用以預啟 [[SIRT1]]/……
- [[Nicotinamide Mononucleotide]]：- **燃料：** [[NAD+]] 前驅物如 [[Nicotinamide Riboside]] 或 Nicotinamide Mononucleotide，用以預啟 [[SIRT1]]/……
- [[SIRT1]]：- **燃料：** [[NAD+]] 前驅物如 [[Nicotinamide Riboside]] 或 [[Nicotinamide Mononucleotide]]，用以預啟 SIRT1/……
- [[AMPK]]：- **燃料：** [[NAD+]] 前驅物如 [[Nicotinamide Riboside]] 或 [[Nicotinamide Mononucleotide]]，用以預啟 [[SIRT……
- [[PGC1-α]]：- **燃料：** [[NAD+]] 前驅物如 [[Nicotinamide Riboside]] 或 [[Nicotinamide Mononucleotide]]，用以預啟 [[SIRT……
- [[Urolithin A]]：- **清理：** Urolithin A 誘發選擇性 [[Mitophagy]] 並確保移除功能失調的粒線體。
- [[Mitophagy]]：- **清理：** [[Urolithin A]] 誘發選擇性 Mitophagy 並確保移除功能失調的粒線體。
- [[NRF2]]：## 作用機制 中繼透過活化 NRF2/ARE 抗氧化反應路徑並刺激粒線體……
- [[Complex I]]：經由 Complex I 或 [[Complex III]] 的單電子還原生成半醌自由基，將 O₂ 還原為 [[Super……
- [[Complex III]]：經由 [[Complex I]] 或 Complex III 的單電子還原生成半醌自由基，將 O₂ 還原為 [[Super……
- [[SOD2]]：粒線體超氧迅速被 SOD2（MnSOD）歧化為 H₂O₂。
- [[Aquaporins]]：H₂O₂ 擴散至膜間隙，並經由 Aquaporins（AQP8、AQP11）進入胞質。
- [[HIF-1α]]：**HIF-1α 穩定化**：H₂O₂ 抑制 [[PHD2]]（prolyl hydroxylase），穩定 HIF-1α，進而上調 [[Glycol……
- [[PHD2]]：**[[HIF-1α]] 穩定化**：H₂O₂ 抑制 PHD2（prolyl hydroxylase），穩定 HIF-1α，進而上調 [[Glycol……
- [[Glycolysis]]：**[[HIF-1α]] 穩定化**：H₂O₂ 抑制 [[PHD2]]（prolyl hydroxylase），穩定 HIF-1α，進而上調 Glyc……
- [[VEGF]]：**[[HIF-1α]] 穩定化**：H₂O₂ 抑制 [[PHD2]]（prolyl hydroxylase），穩定 HIF-1α，進而上調 [[Gl……
- [[Keap1]]：**[[NRF2]] 活化**：H₂O₂ 與半醌修飾 Keap1 半胱胺酸，釋放 [[NRF2]] 以供核轉位。
- [[Integrated Stress Response]]：**整合性壓力反應**：基質 ROS 活化 [[OMA1]]，其切割 [[OPA1]]，從內膜釋放 [[DELE1]]……
- [[OMA1]]：**[[Integrated Stress Response]]**：基質 ROS 活化 OMA1，其切割 [[OPA1]]，從內膜釋放 [[DELE1]]……
- [[OPA1]]：**[[Integrated Stress Response]]**：基質 ROS 活化 [[OMA1]]，其切割 OPA1，從內膜釋放 [[DELE1]]……
- [[DELE1]]：**[[Integrated Stress Response]]**：基質 ROS 活化 [[OMA1]]，其切割 [[OPA1]]，從內膜釋放 DELE1……
- [[HRI]]：DELE1 結合 HRI，磷酸化 eIF2α 並驅動 [[ATF4]] 轉譯。
- [[ATF4]]：DELE1 結合 [[HRI]]，磷酸化 eIF2α 並驅動 ATF4 轉譯。
- [[Mitokines]]：粒線體壓力觸發受壓細胞釋放 Mitokines：
- [[FGF21]]：- **FGF21**：由 [[ATF4]] 與 [[PPARα]] 轉錄誘發。
- [[PPARα]]：- **[[FGF21]]**：由 [[ATF4]] 與 PPARα 轉錄誘發。
- [[Adipose Tissue]]：分泌出的 FGF21 作用於 Adipose Tissue 與 [[Liver]] 以誘發 [[Fatty acid oxidation]] 與 [[Ketogenesis]]。
- [[Liver]]：分泌出的 FGF21 作用於 [[Adipose Tissue]] 與 Liver 以誘發 [[Fatty acid oxidation]] 與 [[Ketogenesis]]。
- [[Fatty acid oxidation]]：分泌出的 FGF21 作用於 [[Adipose Tissue]] 與 [[Liver]] 以誘發 Fatty acid oxidation 與 [[Ketogenesis]]。
- [[Ketogenesis]]：分泌出的 FGF21 作用於 [[Adipose Tissue]] 與 [[Liver]] 以誘發 [[Fatty acid oxidation]] 與 Ketogenesis。
- [[GDF15]]：- **GDF15**：由 [[ATF4]] 與 [[CHOP]] 驅動。
- [[CHOP]]：- **[[GDF15]]**：由 [[ATF4]] 與 CHOP 驅動。
- [[GFRAL]]：GDF15 透過 Brainstem 中的 GFRAL 訊號，調節 [[Appetite]] 與 [[Energy expenditure]]。
- [[Brainstem]]：GDF15 透過 [[GFRAL]] 在 Brainstem 中訊號，調節 [[Appetite]] 與 [[Energy expenditure]]。
- [[Appetite]]：GDF15 透過 [[GFRAL]] 在 [[Brainstem]] 中訊號，調節 Appetite 與 [[Energy expenditure]]。
- [[Energy expenditure]]：GDF15 透過 [[GFRAL]] 在 [[Brainstem]] 中訊號，調節 [[Appetite]] 與 Energy expenditure。
- [[Humanin]]：- **Humanin**：一種編碼於 [[Mitochondrial DNA]] 的 24 胺基酸胜肽。
- [[Mitochondrial DNA]]：- **[[Humanin]]**：一種編碼於 Mitochondrial DNA 的 24 胺基酸胜肽。
- [[FPRL2]]：它結合 FPRL2 與 [[IL-6 receptor β]]（gp130）以抑制 [[Apoptosis]] 與 [[Inflammation]]。
- [[IL-6 receptor β]]：它結合 [[FPRL2]] 與 IL-6 receptor β（gp130）以抑制 [[Apoptosis]] 與 [[Inflammation]]。
- [[Apoptosis]]：它結合 [[FPRL2]] 與 [[IL-6 receptor β]]（gp130）以抑制 Apoptosis 與 [[Inflammation]]。
- [[Inflammation]]：它結合 [[FPRL2]] 與 [[IL-6 receptor β]]（gp130）以抑制 [[Apoptosis]] 與 Inflammation。
- [[NQO1]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[HO-1]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Glutathione]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Thioredoxin]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Redox Homeostasis]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Amino acid transporters]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Amino acid metabolism]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[NRF1]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[ERRalpha]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[TFAM]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Complex subunits]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Mitochondrial Biogenesis]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[TFEB]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[FOXO]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Cathepsins]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Autophagy]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Ubiquitin-proteasome]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[Proteostasis]]：| 路徑 | 轉錄因子 | 標的基因 | 適應性效應 | |---------|---------------------|-------------|……
- [[NADH]]：**電子分流**：MB 從 NADH（經由 [[NADH dehydrogenase]]）或 [[FADH₂]] 接受電子並捐給 [[Cy……
- [[NADH dehydrogenase]]：**電子分流**：MB 從 [[NADH]]（經由 NADH dehydrogenase）或 [[FADH₂]] 接受電子並捐給 [[Cy……
- [[FADH₂]]：**電子分流**：MB 從 [[NADH]]（經由 [[NADH dehydrogenase]]）或 FADH₂ 接受電子並捐給 [[Cy……
- [[Cytochrome c]]：**電子分流**：MB 從 [[NADH]]（經由 [[NADH dehydrogenase]]）或 [[FADH₂]] 接受電子並捐給……
- [[ATP production]]：這透過 Complex IV 維持 ATP 生成。
- [[Blood-brain barrier]]：- **肌肉 → 大腦**：運動肌肉釋放的 [[FGF21]] 穿過 Blood-brain barrier 並增強 [[Neurogenesis]]……
- [[Neurogenesis]]：- **肌肉 → 大腦**：運動肌肉釋放的 [[FGF21]] 穿過 [[Blood-brain barrier]] 並增強 Neurogenesis……
- [[BDNF]]：- **肌肉 → 大腦**：運動肌肉釋放的 [[FGF21]] 穿過 [[Blood-brain barrier]] 並增強 [[Neurogenesi……
- [[Browning of white adipose tissue]]：- **肝臟 → 脂肪**：FGF21 誘發 Browning of white adipose tissue，增加能量消耗。
- [[Cardiomyocytes]]：- **心臟 → 遠端組織**：來自 Cardiomyocytes 的壓力活化 [[FGF21]] 與 [[GDF15]] 保護免於 [[Ischemia……
- [[Ischemia-reperfusion Injury]]：- **心臟 → 遠端組織**：來自 [[Cardiomyocytes]] 的壓力活化 [[FGF21]] 與 [[GDF15]] 保護免於 Ischem……
- [[Mitochondrial myopathy]]：- **Mitochondrial myopathy**：MB + NAD⁺ 前驅物繞過 ETC 缺陷。
- [[Parkinson's Disease]]：- **Parkinson's Disease**：[[Urolithin A]] 增強 [[PINK1]]/[[Parkin]] 粒線體自噬路徑。
- [[PINK1]]：- **[[Parkinson's Disease]]**：PINK1/[[Parkin]] 粒線體自噬路徑增強由 [[Urolithin A]]。
- [[Parkin]]：- **[[Parkinson's Disease]]**：[[PINK1]]/Parkin 粒線體自噬路徑增強由 [[Urolithin A]]。
- [[Heart Failure]]：- **Heart Failure**：透過 FGF21 誘發保留 [[Mitochondrial energetics]]。
- [[Mitochondrial energetics]]：- **[[Heart Failure]]**：保留 Mitochondrial energetics 透過 FGF21 誘發。
- [[Metabolic Syndrome]]：- **Metabolic Syndrome**：[[Insulin Sensitivity]] 改善透過 AMPK-PGC1α 活化。
- [[Insulin Sensitivity]]：- **[[Metabolic Syndrome]]**：Insulin Sensitivity 改善透過 AMPK-PGC1α 活化。
- [[Neuroprotection]]：- **Neuroprotection**：[[BDNF]] 上調透過 FGF21 訊號。
- [[Aging]]：- **Aging**：受控 ROS 訊號的衰老修飾效應結合間歇性粒線體自噬的衰老溶解清除……

## 連結摘要

- 新增的連結：[[Mitohormesis]]、[[Carbazochrome]]、[[Adrenochrome]]、[[Redox Cycling]]、[[Superoxide anion]]、[[Methylene blue]]、[[NAD+]]、[[Nicotinamide Riboside]]、[[Nicotinamide Mononucleotide]]、[[SIRT1]]、[[AMPK]]、[[PGC1-α]]、[[Urolithin A]]、[[Mitophagy]]、[[NRF2]]、[[Mitochondrial Biogenesis]]、[[Complex I]]、[[Complex III]]、[[SOD2]]、[[Aquaporins]]、[[HIF-1α]]、[[PHD2]]、[[Glycolysis]]、[[VEGF]]、[[Keap1]]、[[Integrated Stress Response]]、[[OMA1]]、[[OPA1]]、[[DELE1]]、[[HRI]]、[[ATF4]]、[[Mitokines]]、[[FGF21]]、[[PPARα]]、[[Adipose Tissue]]、[[Liver]]、[[Fatty acid oxidation]]、[[Ketogenesis]]、[[GDF15]]、[[CHOP]]、[[GFRAL]]、[[Brainstem]]、[[Humanin]]、[[FPRL2]]、[[IL-6 receptor β]]、[[Apoptosis]]、[[Inflammation]]、[[TFAM]]、[[TFEB]]、[[FOXO]]、[[Cathepsins]]、[[Ubiquitin-proteasome]]、[[NADH]]、[[NADH dehydrogenase]]、[[Cytochrome c]]、[[ATP]]、[[Neurogenesis]]、[[BDNF]]、[[Browning of white adipose tissue]]、[[Cardiomyocytes]]、[[Ischemia-reperfusion Injury]]、[[Mitochondrial myopathy]]、[[Parkinson's Disease]]、[[PINK1]]、[[Parkin]]、[[Heart Failure]]、[[Metabolic Syndrome]]、[[Insulin Sensitivity]]、[[Neuroprotection]]、[[Aging]]、[[NQO1]]、[[HO-1]]、[[Glutathione]]、[[Thioredoxin]]、[[Redox Homeostasis]]、[[Amino acid metabolism]]、[[NRF1]]、[[ERRalpha]]、[[Proteostasis]]、[[Hormetic Window]]、[[Redox Vaccination]]、[[SIRT3]]/[[SIRT4]] ratio
- 建議建立的新實體筆記：[[Redox Relay Therapeutics]]
- 待加強的強連結：[[_document_ - Mitohormetic Redox-Relay]] ↔ [[Mitochondrial Dysfunction]]
