---
title: SASP-重塑 Aminochrome 複合物
description: SASP-重塑 Aminochrome 複合物（SRAC）是一種序列性的衰老修飾-衰老溶解策略，使用 AMM、methylene blue、rapamycin、fisetin 與 GlyNAC 來重編程衰老表型並減緩發炎老化。
created: 2026-07-04
updated: 2026-07-09
tags:
  - 科學概念
  - 老化
aliases: []
---

# SASP-重塑 Aminochrome 複合物

**SASP-重塑 Aminochrome 複合物（SRAC）** 是一種序列性的衰老修飾（senomorphic）-衰老溶解（senolytic）策略，旨在重編程衰老（senescent）表型並減緩發炎老化（inflammaging）。它採用兩階段協定：AMM + methylene blue + rapamycin 介導的 SASP 抑制（階段 1），隨後 fisetin 介導的衰老細胞清除（階段 2），並以 GlyNAC 作為連續的氧化還原緩衝。

> [!WARNING]
> **協定修訂（2026 年 7 月 8–9 日）**
> **已套用兩項修訂：**
>
> 1. **移除奈米顆粒遞送** — 改以 AMM（adrenochrome monoaminoguanidine，一種預先穩定化的複合物）＋ Methylene Blue（粒線體自我標靶）。無需物理標靶載體。
> 2. **序列性給藥** — rapamycin 與 fisetin 先後給予，而非同時，以解決衰老修飾／衰老溶解的時程衝突。
>    完整原理請見 [[task_output_SRAC_revision_log_08_JULY_2026|revision log]]。

## 策略組成

- **調節劑：** [[Adrenochrome monoaminoguanidine|AMM]]（穩定化的腎上腺紅質–aminoguanidine 複合物；次微莫耳、間歇性口服給藥）。在單一穩定分子中提供氧化還原觸發＋ AGE 抑制。
- **放大器：** [[Methylene blue|MB]]（粒線體電子循環器；每日 0.5–2 mg）。經由膜電位自我標靶粒線體；在維持激效性訊號的同時抑制 AMM 的失控 ROS。
- **煞車：** [[Rapamycin|Rapamycin]]（mTOR 抑制劑；每週 5 mg，**僅階段 1**）。
- **打擊：** [[Fisetin|Fisetin]]（衰老溶解劑；間歇性脈衝，**僅階段 2**）。
- **緩衝：** [[GlyNAC]]（Glycine + N-Acetylcysteine；每日，**兩階段連續**）。

> [!NOTE]
> **Rapamycin 呈現雙相（激效性）劑量反應**
> Cerrillo、Vidakovic 與 Míguez（2026，_bioRxiv_ 2026.04.20.719646）報告 rapamycin 產生倒 U 型反應——在約 1 nM 效力最大，於較高濃度（最高 50 nM）效果減弱，傳統上歸因於毒性，然而 100–200 nM 在體外耐受良好。在機制上，長期（>24 h）rapamycin 將 mTOR 困在 mTORC1 中，阻礙 mTORC2 組裝；因此它同時作為 mTORC2 的間接活化劑（經由 PI3K）與間接抑制劑——一個產生雙相曲線的不連貫雙價基序。對 SRAC 的意涵：rapamycin 的效應依賴濃度與持續時間，偏好中間、限時（僅階段 1）的暴露，而非高劑量或連續給藥。

## 作用機制（MOA）

### 階段 1 — 衰老修飾預置（第 1–4 週）

1. **SASP 抑制：** Rapamycin 抑制 mTOR 依賴的 IL-1α 轉譯，並經由 MK2/ZFP36L1 軸穩定 SASP 轉錄本，降低循環中的 IL-6、IL-8 與 MCP-1。
2. **氧化還原緩衝：** GlyNAC 補充穀胱甘肽儲備，在 AMM 暴露前建立保護性氧化還原緩衝。
3. **激效性預置 + AGE 抑制：** [[Adrenochrome monoaminoguanidine|AMM]] 提供雙重作用觸發——腎上腺紅質部分生成受控的粒線體超氧爆發（活化 [[NRF2]]/ARE 與 [[SIRT1]]/[[PGC-1α]]），而 aminoguanidine 部分捕捉活性二羰基並抑制 [[Advanced Glycation End Products|AGE]] 形成。與 rapamycin 共給藥阻斷 ROS 反應的 NF-κB 臂，將訊號導向靜止的「衰老修飾」狀態。
4. **粒線體電子分流：** [[Methylene blue|MB]] 繞過受損的 Complex I/III，將電子從 NADH 直接穿梭至 Cytochrome c。這防止 AMM 氧化還原循環的失控 ROS 放大，同時維持 ATP 生成。MB 在粒線體中的天然累積（膜電位驅動）提供了無需奈米顆粒的固有胞器標靶。

### 階段 2 — 衰老溶解打擊（第 5–6 週，經 1–2 週 rapamycin 洗出後）

5. **選擇性衰老溶解：** [[Fisetin]] 利用衰老細胞的敏感化代謝狀態——自噬預置、SASP 受抑、氧化還原受壓——經由 PI3K/Akt 與 BCL-2 家族抑制誘發選擇性凋亡。
6. **持續緩衝：** GlyNAC 在整個階段 2 持續，以在衰老細胞裂解與碎屑清除期間保護健康組織免於附帶的氧化壓力。

> [!IMPORTANT]
> **序列性給藥的原理**
> Rapamycin 抑制 fisetin 標靶用於選擇性衰老溶解的促存活訊號迴路。同時給藥可能屏蔽衰老細胞免於凋亡。1–2 週的洗出可恢復 fisetin 所利用的 SASP 訊號環境。

## 無須物理標靶的選擇性

SRAC 透過**三層生物選擇性**（而非奈米顆粒介導的物理標靶）來達成衰老細胞選擇性：

1. **粒線體自我標靶（MB）：** Methylene blue 天然累積於膜電位驅動的粒線體中。具有高功能障礙粒線體的衰老細胞有改變的膜電位，造成差異性的 MB 分佈。
2. **生化標靶（AMM）：** Aminoguanidine 部分捕捉在衰老細胞中因糖酵解通量與粒線體功能障礙而升高的活性二羰基（甲基乙二醛、乙二醛）。
3. **代謝脆弱性：** 衰老細胞具有升高的 ROS、停滯的自噬與高代謝需求。AMM + MB 的組合氧化還原訊號優先壓迫這些已然受損的細胞。
4. **SCAP 依賴性：** 衰老細胞依賴 BCL-2 家族與 PI3K/Akt 生存。Fisetin 阻斷這些路徑。氧化還原壓力 + SCAP 抑制創造出對衰老細胞特異的合成致死交互作用。
5. **穀胱甘肽差異：** 健康細胞維持高 GSH（由 GlyNAC 支持）。衰老細胞 GSH 耗竭，無法緩衝 AMM 氧化還原脈衝，從而創造治療窗口。
6. **自噬預置：** 階段 1 的 rapamycin 活化自噬。自噬預置的衰老細胞可能更易受 fisetin 誘發的凋亡影響。

## 預期結果

- 全身性 SASP 生物標記（IL-6、IL-1β、MCP-1）顯著降低。
- 減少 AGE 累積與蛋白交聯（AMM 的 aminoguanidine 部分）。
- 改善粒線體功能（MB 電子穿梭）。
- 改善組織再生並減少慢性「發炎老化（inflammaging）」。
- 選擇性消除高 SASP 衰老細胞而無全身性毒性。

## SRAC 監測的生物標記

> [!NOTE]
> **參考 — SASP 生物標記框架**
> 依據 [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|Wang et al. (2024, Nat Rev Mol Cell Biol)]]，單一時間點測量的 SASP 產物無法區分有益與有害的衰老，因此 SRAC 應**縱向**追蹤生物標記（階段 1 前、階段 1 結束、階段 2 後，以及洗出期間）。

### 主要的 SRAC 讀值（已指定）

- **IL-6、IL-1β、MCP-1（CCL2）** — 階段 1 中 rapamycin 介導 SASP 抑制的直接讀值。
- **CXCL12** — fisetin 驅動的血管老化反應；提議用於個人化 1–2 週 rapamycin 洗出持續時間。

### 採用的擴展面板（取自 SASP 回顧）

- **SASP Atlas 核心組**（衰老的組合式血漿生物標記）：[[GDF15]]、stanniocalin-1、serpin 家族蛋白，以及 [[MMP]]s。
- **與死亡率相關的 5 因子面板**：GDF15、RAGE、VEGF-A、PARC（[[CCL18]]）與 MMP-2 — 與全因死亡率強烈相關，可作為 SRAC 的全球衰老負擔指標。
- **尿液／尿來源 EV 面板**（非侵入性）：IL-6、CCL2、MMP-7、MMP-8 — 便於在分階段協定中重複取樣。
- **衰老溶解效力標記**（在 Dasatinib + Quercetin 試驗中驗證）：血漿中的 IL-6、[[MMP-9]]、[[GM-CSF]] — 適用於階段 2 的 fisetin 打擊。

### 粒線體氧化還原-撥桿生物標記 — [[SIRT3-SIRT4 Ratio]]

[[SIRT3-SIRT4 Ratio]] 是預測個體對 SRAC 自身粒線體激效性觸發劑（階段 1 中的 AMM 腎上腺紅質部分 + MB 電子循環）反應性的**預測性粒線體生物標記**。它透過調控 MnSOD（SOD2）活性，為協定的氧化還原訊號設定 [[Hormetic Window]]：

- **SIRT3** 去乙醯化並活化 MnSOD（於 Lys68/Lys122），將超氧 → H₂O₂ 以進行適應性 NRF2/ARE 訊號。
- **SIRT4** 單-ADP-核糖基化並抑制 MnSOD，維持升高的超氧。

因此，該比例決定了 AMM 生成的粒線體超氧爆發如何被處理：

- **高比例（SIRT3 主導）：** 超氧被迅速淬滅 → 窄激效性窗口；SRAC 的氧化還原預置耐受良好，但可能訊號不足以致適應性粒線體激效性。
- **低比例（SIRT4 主導）：** 超氧持續 → 寬激效性窗口；在衰老細胞裂解期間有較高的氧化損傷、SASP 發作或細胞因子風暴風險。

> [!TIP]
> **在 SRAC 中的使用**
> 由於 SRAC 氧化還原脈衝與 SASP 抑制／讀值兩者皆為氧化還原偶聯，[[SIRT3-SIRT4 Ratio]] 作為 SASP 面板的**伴隨生物標記**：它預測_誰_將耐受並受益於 AMM/MB 給藥，並可個人化 AMM 劑量與 MB 低端設定（0.5 mg），使訊號維持在每個個體的激效性窗口內。[[Caloric Restriction]] 與 NAD⁺ 前驅物（[[NMN]]/[[Nicotinamide Riboside]]）將比例推向 SIRT3 主導，與 SRAC 氧化還原-緩衝邏輯相契合。

### 機制原理

該回顧確認 rapamycin 透過 mTOR → IL-1α → MK2/ZFP36L1 軸與 NF-κB 抑制 SASP，正是階段 1 的「煞車」。追蹤擴展面板讓 SRAC 能區分真正的 SASP 重塑與衰老細胞裂解期間的短暫 SASP 發作（原始協定中標記的細胞因子風暴風險）。

## 連結

- [[Adrenochrome monoaminoguanidine]]：提供激效性 ROS 觸發 + AGE 抑制的穩定化腎上腺紅質–aminoguanidine 複合物。
- [[Methylene blue]]：放大並控制氧化還原訊號的粒線體電子循環器。
- [[Rapamycin]]：在階段 1 抑制 SASP 的 mTOR 抑制劑。
- [[Fisetin]]：在階段 2 利用預置衰老狀態的衰老溶解劑。
- [[GlyNAC]]：在兩階段全程保護健康組織的氧化還原緩衝。
- [[NRF2]]：由 AMM 激效性 ROS 活化的抗氧化轉錄因子。
- [[SIRT1]]：由氧化還原訊號活化的去乙醯酶；連結至 PGC-1α。
- [[SASP]]：在階段 1 由 rapamycin 標靶的促發炎分泌組。
- [[Advanced Glycation End Products]]：由 AMM 的 aminoguanidine 部分抑制。
- [[Senescence]]：兩階段策略標靶的生物學狀態。
- [[_document_ - Mitohormetic Redox-Relay]]：與 SRAC 階段 1 共享 MB 與氧化還原-激效性邏輯。
- [[Glyco-Oxidative Proteostasis Shield]]：與 SRAC 共享 AMM；GOPS 聚焦糖化／蛋白穩態，而 SRAC 聚焦衰老／SASP。
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]]：支撐 SRAC 監測面板的權威 SASP 生物標記框架（Wang et al., 2024）。
- [[GDF15]]：核心 SASP Atlas 標記與死亡率相關面板成員；追蹤全球衰老負擔。
- [[MMP-9]]：衰老溶解-效力標記（Dasatinib+Quercetin 試驗）；適用於階段 2 fisetin 打擊。
- [[GM-CSF]]：依 SASP 回顧的血漿衰老溶解-效力標記。
- [[CCL18]]：PARC — 死亡率相關 5 因子面板成員。
- [[CXCL12]]：fisetin 驅動的血管老化反應；提議用於個人化 rapamycin 洗出。
- [[MMP-2]]：死亡率相關面板成員；基質重塑 SASP 因子。
- [[SIRT3-SIRT4 Ratio]]：預測個體對 AMM/MB 激效性觸發劑與 SRAC 安全激效性窗口反應的粒線體氧化還原-撥桿生物標記。
- [[SIRT3]]：去乙醯化／活化 MnSOD；高 SIRT3/SIRT4 比例 → 超氧淬滅 → 保護性。
- [[SIRT4]]：經由單-ADP-核糖基化抑制 MnSOD；低 SIRT3/SIRT4 比例 → 持續超氧 → 氧化風險。
- [[MnSOD]]：其活性由 SIRT3/SIRT4 比例設定的共享受質；處理 AMM 衍生的超氧爆發。
- [[Hormetic Window]]：由 SIRT3/SIRT4 比例決定；定義 SRAC 氧化還原預置的安全劑量範圍。

## 文件

- [[task_output_research-scientist_combo_therapy_11_JUN_2026|SRAC Outline]]
- [[_document_ - SRAC - SASP-Remodeling Aminochrome Complex|SRAC Protocol (Original)]]
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Review (Wang et al., 2024)]]：擴展 SRAC 生物標記面板的來源。

## 連結摘要

- 新增的連結：[[Adrenochrome monoaminoguanidine]]、[[Methylene blue]]、[[Rapamycin]]、[[Fisetin]]、[[GlyNAC]]、[[NRF2]]、[[SIRT1]]、[[PGC-1α]]、[[SASP]]、[[Glutathione]]、[[Inflammaging]]、[[Advanced Glycation End Products]]、[[GDF15]]、[[MMP-9]]、[[GM-CSF]]、[[CCL18]]、[[CXCL12]]、[[MMP-2]]、[[SASP Atlas]]、[[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]]、[[SIRT3-SIRT4 Ratio]]、[[SIRT3]]、[[SIRT4]]、[[MnSOD]]、[[Hormetic Window]]
- 建議建立的新實體筆記：[[GDF15]]、[[MMP-9]]、[[GM-CSF]]、[[CCL18]]、[[CXCL12]]、[[MMP-2]]、[[SASP Atlas]]
- 待加強的強連結：[[SASP-Remodeling Aminochrome Complex]] ↔ [[Senescence]]、[[SASP-Remodeling Aminochrome Complex]] ↔ [[Adrenochrome monoaminoguanidine]]、[[SASP-Remodeling Aminochrome Complex]] ↔ [[Methylene blue]]、[[SASP-Remodeling Aminochrome Complex]] ↔ [[SASP]]（生物標記框架）
