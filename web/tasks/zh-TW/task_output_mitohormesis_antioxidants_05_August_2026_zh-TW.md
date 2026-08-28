---
title: 抗氧化劑會阻斷粒線體荷爾蒙效應嗎？— 證據排名與時機
description: 關於抗氧化補充是否干擾粒線體荷爾蒙適應的回答——按 NAC、維生素 C/E 與其他抗氧化劑的證據強度排名，並考量時機（長期每日使用 vs. 運動後急性使用）以及失敗臨床試驗（SELECT、HOPE、Bjelakovic 統合分析）所得到的啟示。
created: 2026-08-05
updated: 2026-08-05
source: wiki knowledge base (_triples.json confidence-scored triples + Mitohormesis document corpus)
tags:
  - task-output
  - mitohormesis
  - hormesis
  - antioxidants
  - ros
  - nac
  - exercise
  - mitochondrial-biogenesis
author: []
---
# 粒線體荷爾蒙效應與抗氧化劑干擾

**日期：** 2026 年 8 月 5 日
**查詢：** 抗氧化劑會阻斷粒線體荷爾蒙效應嗎？哪些特定抗氧化劑有最多干擾證據？時機重要嗎？

---

## 核心發現：抗氧化劑能阻斷粒線體荷爾蒙效應

- 粒線體荷爾蒙效應需要一個**短暫、急性的 ROS 脈衝**作為觸發適應性細胞保護反應（過氧化氫酶上調、伴侶表現、UPRmt、粒線體生合成）的訊號
- 抗氧化劑淬滅該 ROS 訊號，阻止荷爾蒙反應被啟動
- 這可能解釋大型抗氧化臨床試驗（SELECT、HOPE、Bjelakovic 統合分析）令人失望的結果
- wiki 明確陳述：「長期抗氧化補充可抑制荷爾芒反應，從而阻斷粒線體荷爾蒙效應通常誘導的細胞保護適應。這可能解釋抗氧化臨床試驗令人失望的結果，其中大型統合分析普遍未能顯示益處，且在部分案例中提示死亡率增加。支援證據來自人體研究，顯示抗氧化補充劑抑制運動的良性益處，而運動本身被視為一種輕度壓力源。抗氧化劑據信阻止了觸發適應反應所需的粒線體 ROS 上升。」（`_triples.json:2878`，信心 0.9，來源：`_document_ - Mitohormesis - 2014_FEB.md`）

---

## 按干擾證據排名的特定抗氧化劑

### NAC（N-乙醯半胱氨酸）— 最直接的證據

- **機制：** NAC 清除粒線體 ROS 並補充麩胱甘肽，直接淬滅觸發粒線體荷爾蒙效應的 ROS 訊號
- **關鍵實驗證據：**
  - 在 *C. elegans* 中，葡萄糖限制通常增加粒線體呼吸 → ROS → 過氧化氫酶誘導 → 壽命延長。**NAC 預處理完全消除**了 ROS 上升與長壽益處（`Mitohormesis - 2014_FEB.md:103`）
  - 「給予 2DG 但預先以抗氧化劑 N-乙醯半胱氨酸（NAC）處理的蠕蟲，未顯示 ROS 水平上升或後續過氧化氫酶表現誘導的證據。值得注意的是，抗氧化處理也阻斷了葡萄糖限制通常見到的壽命延長」（`Mitohormesis - 2014_FEB.md:103`）
- **wiki 自身註記：** 「其抗氧化益處依脈絡而定，因為完全抑制 ROS 會削弱適應性荷爾芒訊號」（`N-Acetylcysteine.md:29`）
- **在方案中的雙重角色：** NAC 被用於 [[GlyNAC]] 與 [[SASP-Remodeling Aminochrome Complex]] 方案中具有**刻意時機**——作為緩衝以防止荷爾芒脈衝跨入細胞毒性領域，而非作為長期補充劑
  - 在 SRAC 策略中，GlyNAC 在兩階段皆作為連續氧化還原緩衝：「在第一階段，它在 [[Carbazochrome]] 暴露前補充麩胱甘肽儲備，防止荷爾芒 ROS 脈衝跨入細胞毒性的『惡性』[[Redox Cycling]]。在第二階段，它保護健康組織免於 [[Fisetin]] 誘導的衰老細胞裂解與碎片清除期間的伴隨氧化壓力。」（`GlyNAC.md:17`）
- **Redox Vaccination 方案：** 列出「NAC 共處理」（N-乙醯半胱氨酸清除 ROS 並阻斷起始訊號）作為研究荷爾芒訊號的阻斷劑（`Redox Vaccination.md:74`）
- **PRDX6 交互作用：** NAC 也是 [[PRDX6]] **過氧化物酶**活性的選擇性抑制劑（IC50 ≈ 15.5 µM），不同於其 ROS 清除角色（`NAC.md:16`、`PRDX6.md:28`）

### 維生素 C（抗壞血酸）— 運動干擾最強的人體證據

- **機制：** 水溶性；在膜中再生維生素 E；清除水相 ROS；在運動前後服用時降低肌肉粒線體生合成
- **關鍵證據：**
  - **Gomez-Cabrera et al., 2008**（Am J Clin Nutr，PMID: 18175748）：「口服維生素 C 降低肌肉粒線體生合成，並妨礙訓練誘導的耐力表現適應」——在粒線體荷爾芒回顧中直接引用（`Mitohormesis - 2014_FEB.md:156`）
  - 運動-抗氧化劑干擾數據被描述為「受到部分人體實驗支援，其中運動被視為壓力，且給予抗氧化補充劑的受試者似乎其運動的良性益處受到抑制」（`Mitohormesis - 2014_FEB.md:114`）
  - 這是最乾淨的人體研究之一，顯示抗氧化劑對荷爾芒壓力源（運動）的干擾
- **促氧化潛力：** 維生素 C 在某些條件下可作為促氧化劑（與鐵的 Fenton 化學）；其對粒線體荷爾芒效應的特異性（相對於更廣泛的運動適應）在 wiki 中未如此乾淨地分離
- **附加脈絡：** 抗壞血酸透過較慢的非酵素路徑還原變性血紅素；在 G6PD 缺乏症中用作亞甲藍的替代（`Methylene Blue - StatPearls.md:60`）

### 維生素 E（α-生育酚）— 強臨床試驗證據，較弱的直接機制連結

- **機制：** 脂溶性斷鏈抗氧化劑；將氫原子捐給脂質過氧自由基，將其轉化為穩定的氫過氧化物，並產生相對不活躍的生育酚氧自由基。嵌入膜脂雙層，在過氧化位置攔截鏈傳播。生育酚氧自由基必須由維生素 C 或 CoQ10 再生；否則維生素 E 被消耗且保護耗盡。
- **關鍵證據：**
  - **SELECT 試驗**（Lippman et al., 2009, JAMA, PMID: 19066370）：維生素 E 補充（400 IU/天）使健康男性的前列腺癌風險**增加** 17%——作為抗氧化補充失敗的關鍵例子引用（`Mitohormesis - 2014_FEB.md:180`）
  - **HOPE 試驗**（Lonn et al., 2005, JAMA, PMID: 15769967）：長期維生素 E 補充未顯示心血管益處，且有心衰竭增加的趨勢——也在粒線體荷爾芒文獻中引用（`Mitohormesis - 2014_FEB.md:183`）
  - wiki 概括：「大型統合分析研究顯示，在某些案例中，某些抗氧化劑實際上可能增加死亡率」——維生素 E 是主要例子
- **COMT 基因型交互作用：** 維生素 E 的效應**依基因型而定**：
  - 慢 COMT（Met/Met）個體從維生素 E 補充獲得防癌益處
  - 快 COMT（Val/Val）個體可能經歷*增加*的癌症風險
  - 「Val158Met 調節維生素 E（α-生育酚）補充對癌症預防的效應，使得慢 COMT 個體獲得保護性益處，而快 COMT 個體可能經歷增加的癌症風險。提出的機制涉及 COMT 依賴的維生素 E 相關兒茶酚中間物代謝，以及與兒茶酚雌激素處理的交互作用。」（`comt/_triples.json:325-326`）
  - 這暗示阻斷粒線體荷爾芒效應的效應可能依個體遺傳而變
- **注意：** wiki 中沒有直接的實驗研究顯示維生素 E 像 NAC 在 *C. elegans* 中那樣阻斷荷爾芒 ROS 訊號。其證據更偏流行病學/試驗基礎。
- **抗氧化網絡：** 維生素 E 是協同網絡的一部分——CoQ10 透過將 α-生育酚氧自由基還原回 α-生育酚來再生維生素 E，維生素 C 在水相中再生氧化的維生素 E（`oxidative_stress/_triples.json:662`）

### 摘要表

| 抗氧化劑 | 直接機制證據 | 臨床試驗證據 | 強度 |
|---|---|---|---|
| **NAC** | 強 — 在 *C. elegans* 中完全阻斷荷爾芒 ROS 訊號（NAC + 2DG 實驗） | 治療上使用（GlyNAC/SRAC），時機謹慎 | 最強 |
| **維生素 C** | 中 — 與運動一起降低粒線體生合成 | Gomez-Cabrera 2008 人體研究（PMID: 18175748） | 強 |
| **維生素 E** | 弱（間接）— 未顯示直接荷爾芒 ROS 封鎖 | SELECT、HOPE 試驗 — 死亡率/癌症增加；COMT 基因型交互作用 | 中（臨床，非機制） |

---

## 機制詳解：為何 ROS 是訊號，而非損傷

- 粒線體荷爾芒效應是指這樣的概念：輕度、脈衝式的粒線體壓力——來自短暫熱量限制、劇烈運動、溫度極端，或某些植物化學物質——觸發強健的適應反應，透過上調內生抗氧化劑與改善粒線體品質控制，來增強細胞韌性、壽命與代謝效率（`mitohormesis, heart rate variability.md:230`）
- 粒線體荷爾芒觸發因子：「粒線體荷爾芒效應依賴創造暫時、急性的活性氧物種（ROS）增加或短暫的細胞能量虧損。這活化 AMPK、PGC-1α、SIRT1 與 NRF2 等關鍵營養感知與壓力反應路徑。這些路徑共同驅動粒線體生合成（創造新粒線體）、刺激粒線體自噬（清除老舊/功能障礙粒線體），並提升細胞內抗氧化防禦系統，留下高度有效率、具韌性的代謝引擎。」（`mitohormesis, heart rate variability.md:237`）
- 粒線體 ROS 是粒線體荷爾芒效應的活躍參與者，作為**訊號分子**而非單純的損傷因子（`Mitohormesis - 2014_FEB.md:103`）
- 在模式生物中，誘發粒線體荷爾芒效應的輕度粒線體壓力一致轉化為更長的壽命。例子包括酵母中逆向反應的活化、*C. elegans* 中透過敲低粒線體核糖體蛋白 mrps-5 或細胞色素 c 氧化酶次單元 cco-1 活化 UPRmt、蠕蟲/果蠅/小鼠中的呼吸鏈抑制，以及葡萄糖限制。在每個案例中，荷爾芒的細胞保護反應——伴侶、解毒、抗氧化防禦——似乎對壽命延長是必需的。（`_triples.json:2830`）
- 在 *C. elegans* 中，有顯著證據顯示增強的細胞保護反應——無論是伴侶、異生物解毒或抗氧化防禦的誘導——與大多數（若非全部）壽命延長緊密耦合且為所必需（Shore et al., 2012）（`Mitohormesis - 2014_FEB.md:114`）

### NAC + 2DG 實驗詳解

- 最早的清晰例子之一來自這樣的研究：無論是透過藥理學將蠕蟲暴露於 2-去氧-D-葡萄糖（2DG），或簡單限制葡萄糖可用性，皆損害葡萄糖代謝（Schulz et al., 2007）。兩種操作都導致壽命延長。
- 更詳細的代謝檢視顯示，限制葡萄糖可用性導致假定代償性的粒線體呼吸增加，並有證據顯示透過 β-氧化增加脂肪利用。這些代謝改變似乎需要 *aak-2*（*C. elegans* 的 AMP 依賴激酶 AMPK 同源物）活化。
- 與觀察到的粒線體呼吸增加一致，以 2DG 處理蠕蟲導致 ROS 水平上升。在此氧化壓力之後，過氧化氫清除酵素過氧化氫酶的濃度在 2DG 暴露約一週後升高。
- **關鍵發現：** 給予 2DG 但預先以抗氧化劑 N-乙醯半胱氨酸（NAC）處理的蠕蟲，未顯示 ROS 水平上升或後續過氧化氫酶表現誘導的證據。值得注意的是，抗氧化處理也阻斷了壽命延長。（`Mitohormesis - 2014_FEB.md:103`）

### 酵母 TOR 實驗

- 在酵母中，降低 TOR 訊號導致曆時性壽命延長。仔細分析揭示，降低 TOR 訊號導致粒線體 ROS 生成的初始增加（Pan et al., 2011）。
- 這非但無害，此 mROS 生成對觀察到的壽命延長是必需的。
- 值得注意的是，抗氧化蛋白錳超氧化物歧化酶的表現**降低**了壽命，而以氧化還原循環化合物 menadione 處理**延長**了壽命。
- mROS 被兩個激酶 Tel1p 與 Rad53p（Schroeder et al., 2013，哺乳類 ATM 與 Chk2 的酵母同源物）感知。此路徑的活化導致透過 sirtuin 家族去乙醯酶機制的表觀遺傳靜默改變。（`Mitohormesis - 2014_FEB.md:107`）

---

## 時機：將抗氧化劑與運動分開能保留荷爾芒益處嗎？

### wiki 明確說了什麼

- 粒線體荷爾芒效應依賴「暫時、急性的活性氧物種（ROS）增加或短暫的細胞能量虧損」（`mitohormesis, heart rate variability.md:237`）
- 總體策略：「施加急性、標靶的壓力源，接著深度恢復，避免慢性壓力」（`mitohormesis, heart rate variability.md:230`）
- wiki 最精確的時機指引針對**運動後窗口**：「運動後高劑量合成抗氧化劑（如維生素 C 或 E 藥丸）：這些削弱粒線體荷爾芒適應所需的必要急性 ROS 訊號。讓你的身體做功。」（`mitohormesis, heart rate variability.md:252`）
- 三元組強化：「運動後服用高劑量合成抗氧化劑削弱粒線體荷爾芒適應所需的必要急性 ROS 訊號，強化短暫 ROS 脈衝是保護性反應必要觸發因子」（`_triples.json:2974`）

### 里程碑研究實際測試了什麼

- Ristow 2009（PNAS）與 Gomez-Cabrera 2008 研究皆使用**長期每日補充**（維生素 C 1000mg/天 + 維生素 E 400 IU/天，為期 4 週，搭配運動），而非運動周圍的急性時機
- 兩項研究皆未測試時間分離（如早餐吃維生素 C、晚上運動）是否保留荷爾芒益處
- Ristow 研究顯示補充抗氧化劑的組別**未能上調內生防禦酵素**（SOD、GPx），且未達成運動的胰島素增敏效應
- Ristow et al. 被引用為：「Antioxidants prevent health-promoting effects of physical exercise in humans. Proc Natl Acad Sci U S A. 2009;106:8665–8670. doi: 10.1073/pnas.0903485106」（PMID: 19433800）（`Mitohormesis - 2023_NOV.md:417`）

### 身體自身的抗氧化反應才是重點

- 粒線體荷爾芒效應的*目標*是上調**內生**抗氧化防禦；運動本身透過 NRF2 活化做到這點
- 「運動（特別是劇烈、多樣的訓練）– 驅動粒線體生合成、抗氧化上調、代謝適應與較高靜息能量消耗的急性 ROS 爆發」（`oxidative_stress/README.md:18`）
- 「中等運動是一種抗氧化劑：訓練上調抗氧化基因」（Gomez-Cabrera et al., 2008，引用於 `adrenochrome/_document_ - The role of glycation...md:154`）
- 外源抗氧化劑**阻止**此上調——外源供應發出「你不需要建構自己的」訊號
- Ristow 研究明確顯示：補充抗氧化劑的組別未能上調內生 SOD 與 GPx，而僅運動組成功做到

### 實用推論

- ROS 脈衝持續數小時，而非數天；運動的急性尖峰在運動期間與之後立即達到峰值，然後隨內生酵素上調而消退
- 維生素 C 的組織半衰期約 10–20 天；即使在運動前數小時服用，組織濃度已升高並將削弱 ROS 訊號
- wiki 特別標記運動後抗氧化劑為問題，暗示訊號級聯在運動後數小時內最活躍
- **底線：** 很可能阻斷粒線體荷爾芒效應的是外源抗氧化劑的慢性穩態升高，而不只是運動周圍的急性時機。每日服用高劑量維生素 C 或 E——無論何時——都可能抑制訊號，因為組織濃度全天維持升高
- wiki 沒有證據顯示時間分離是否有效；這是來自機制的推論，而非經測試的假說

### 該怎麼做（來自粒線體荷爾芒方案）

- 完全跳過合成抗氧化藥丸
- 從**富含多酚的食物**（異荷爾蒙劑）獲取抗氧化劑：藍莓、黑巧克力（可可）、綠茶（EGCG）與特級初榨橄欖油——這些植物防禦化合物作為輕度壓力源，活化 NRF2 與 sirtuin 路徑（`mitohormesis, heart rate variability.md:242`）
- **十字花科蔬菜：** 青花菜芽（富含 sulforaphane）以強力活化 NRF2 並上調第二相解毒酵素（`mitohormesis, heart rate variability.md:243`）
- **Omega-3 脂肪酸（EPA/DHA）：** 野生捕獲鮭魚、沙丁魚或藻油，以最佳化粒線體膜流動性並降低全身性基礎發炎（`mitohormesis, heart rate variability.md:244`）
- **CoQ10 / Ubiquinol 與 PQQ：** 為最佳電子傳遞鏈功能與粒線體生合成的協同刺激（`mitohormesis, heart rate variability.md:245`）
- **MCT 油（辛酸 / C8）：** 提供直接、有效率的粒線體燃料，增加內生酮體生成，作為促進粒線體荷爾芒效應的訊號分子（`mitohormesis, heart rate variability.md:246`）
- **NAD+ 前驅物（NMN 或 NR）：** 支援 NAD+/SIRT1 軸，對粒線體健康與能量感知至關重要（`mitohormesis, heart rate variability.md:247`）
- 讓運動誘導的 ROS 發揮作用——身體的內生反應才是治療目標

### 應避免的食物與物質（來自粒線體荷爾芒方案）

- **精製碳水化合物與糖：** 造成過度、未耦合的 ROS 生成而無荷爾芒益處（`mitohormesis, heart rate variability.md:250`）
- **工業籽油：** 富含易氧化的亞麻油酸，損害脆弱的粒線體膜（`mitohormesis, heart rate variability.md:251`）
- **運動後高劑量合成抗氧化劑（如維生素 C 或 E 藥丸）：** 這些削弱粒線體荷爾芒適應所需的必要急性 ROS 訊號。讓你的身體做功。（`mitohormesis, heart rate variability.md:252`）
- **不斷零食 / 慢性過食：** 廢除禁食誘導的粒線體自噬所需 AMPK 訊號（`mitohormesis, heart rate variability.md:253`）

---

## 運動方案（來自粒線體荷爾芒方案）

- **HIIT 與衝刺間歇訓練（SIT）：** 每週 1–2 次。短暫、最大努力產生完美的急性 ROS 尖峰與乳酸累積，以觸發 PGC-1α（粒線體生合成的主控調節因子）（`mitohormesis, heart rate variability.md:262`）
- **第二區有氧（Zone 2 cardio）：** 每週 3–4 次（45–60 分鐘）。建立有氧基礎，增加粒線體體積，並改善脂肪氧化效率（`mitohormesis, heart rate variability.md:263`）
- **呼吸法：** 閉氣或間歇性低氧呼吸練習（如 Wim Hof 法）誘導輕度、短暫的低氧，是強效的粒線體荷爾芒壓力源（`mitohormesis, heart rate variability.md:266`）
- **冷暴露：** 冷水浴或冷水澡（1–3 分鐘）活化棕色脂肪組織並誘導解偶聯蛋白 1（UCP1），導致粒線體密度增加（`mitohormesis, heart rate variability.md:269`）

---

## 臨床試驗證據：抗氧化補充的失敗

- 眾多隨機研究普遍未能證明抗氧化療法的益處，且大型統合分析研究顯示在某些案例中某些抗氧化劑實際上可能增加死亡率（Bjelakovic et al., 2007；Lippman et al., 2009；Lonn et al., 2005）（`Mitohormesis - 2014_FEB.md:114`）
- 抗氧化劑普遍無效有若干可能解釋，包括劑量不當或未能充分定位至 ROS 的粒線體來源
- 抗氧化劑可能增加癌症發生率的暗示，可能是因為抗氧化劑保護基因受損的癌前細胞免於經歷凋亡
- 也有可能慢性低劑量抗氧化劑抑制正常的荷爾芒反應，從而阻斷生物體通常會進行的廣泛細胞保護措施誘導
- 如 Ristow 所言，抗氧化劑「比無用更糟」——在兩項非常大的隨機對照試驗中，抗氧化劑增加了癌症發生率，特別是吸煙者的肺癌。抗氧化劑也增加了全因死亡率。結果令人不安到兩項試驗提前停止。同樣令人不安的是發現抗氧化劑加速癌症進展並促進轉移。（`Rapamycin for longevity opinion article.md:100`）

### 引用的特定試驗

| 試驗 | 年份 | 介入 | 結果 | 引用 |
|---|---|---|---|---|
| **SELECT**（Lippman et al.） | 2009 | 維生素 E 400 IU/天 + 硒 | 前列腺癌風險增加 17% | PMID: 19066370, JAMA |
| **HOPE**（Lonn et al.） | 2005 | 維生素 E 400 IU/天 | 無心血管益處；心衰竭增加趨勢 | PMID: 15769967, JAMA |
| **Bjelakovic 統合分析** | 2007 | 各種抗氧化劑 | 部分分析中死亡率增加 | 引用於 `Mitohormesis - 2014_FEB.md:114` |
| **Ristow et al.** | 2009 | 維生素 C 1000mg + 維生素 E 400 IU/天 × 4 週，搭配運動 | 阻斷運動誘導的胰島素增敏與內生抗氧化上調 | PMID: 19433800, PNAS |
| **Gomez-Cabrera et al.** | 2008 | 運動時口服維生素 C 補充 | 降低肌肉粒線體生合成；妨礙訓練適應 | PMID: 18175748, Am J Clin Nutr |

---

## 治療方案中的 NAC（依脈絡而定的使用）

- NAC 並非普遍有害——它依脈絡而有**雙重角色**：
  - **作為長期補充：** 可能透過淬滅 ROS 訊號阻斷粒線體荷爾芒效應
  - **作為荷爾芒方案中的定時緩衝：** 刻意使用以防止荷爾芒脈衝變為細胞毒性
- 在 [[SASP-Remodeling Aminochrome Complex]] 策略中，GlyNAC 在兩階段皆作為連續氧化還原緩衝：
  - 第一階段：在 [[Carbazochrome]] 暴露前補充麩胱甘肽儲備，防止荷爾芒 ROS 脈衝跨入細胞毒性的「惡性」氧化還原循環
  - 第二階段：在 [[Fisetin]] 誘導的衰老細胞裂解與碎片清除期間，保護健康組織免於伴隨氧化壓力（`GlyNAC.md:17`）
- GlyNAC 是唯一跨兩階段連續投與的 SRAC 成分
- Sekhar 與同事在老年人（65–80 歲）的臨床研究：GlyNAC 補充（100 mg/kg NAC + 100 mg/kg 甘氨酸，每日，為期 24 週）在氧化壓力（F2-isoprostanes 降低 40%）、粒線體功能（ATP 生成增加 60%）、胰島素阻抗（HOMA-IR 降低 30%）、發炎（TNFα、IL-6、CRP 降低 25–40%）與身體功能（6 分鐘行走 +12%、握力 +8%）方面產生改善（`GlyNAC.md:32`）

---

## 關鍵 wiki 節點與連結

- [[Mitohormesis]] — 核心概念；短暫粒線體壓力觸發適應反應
- [[Antioxidants]] — 可阻斷荷爾芒訊號的外源清除劑
- [[N-Acetylcysteine]] — 阻斷的最強直接證據；也以定時方式治療性使用
- [[Vitamin C]] — 運動干擾的最強人體證據
- [[Vitamin E]] — 臨床試驗失敗；COMT 基因型交互作用
- [[GlyNAC]] — NAC 在 SRAC 方案中的治療性使用，具刻意時機
- [[NRF2]] — 運動活化的內生抗氧化路徑；多酚標靶
- [[AMPK]] — 由粒線體荷爾芒壓力活化的能量感知器
- [[PGC-1α]] — 粒線體生合成的主控調節因子，由運動 ROS 活化
- [[SIRT1]] — 由 NAD+ 與粒線體荷爾芒訊號活化的 sirtuin
- [[Catalase]] — 由粒線體荷爾芒效應上調的過氧化氫清除酵素
- [[Superoxide Dismutase]] — 由運動訓練上調的內生抗氧化劑
- [[Glutathione]] — 內生抗氧化劑；NAC 補充此池
- [[Exercise]] — 主要荷爾芒壓力源；透過 ROS 驅動粒線體生合成
- [[Caloric Restriction]] — 另一個活化 AMPK/粒線體自噬的荷爾芒壓力源
- [[Hormesis]] — 更廣的概念；粒線體荷爾芒效應是粒線體特異變體

---

## 來源

- `src/notes/_link/_document_ - Mitohormesis - 2014_FEB.md` — 基礎回顧；NAC + 2DG 實驗；酵母 TOR 實驗；運動 + 抗氧化劑干擾；SELECT/HOPE 引用
- `src/notes/_link/_document_ - Mitohormesis - 2023_NOV.md` — DELE1-OMA1-HRI-ATF4 軸；metformin 作為粒線體荷爾芒劑；Ristow 2009 引用；運動作為低成本荷爾芒介入
- `src/notes/_link/_document_ - mitohormesis, heart rate variability.md` — 實用方案；運動後抗氧化劑警告；飲食與行為建議
- `src/notes/_link/_triples.json` — 結構化三元組：「Mitohormesis is_blocked_by Antioxidants」（信心 0.9）；運動後抗氧化劑警告三元組
- `src/notes/oxidative_stress/Oxidative Stress.md` — 粒線體荷爾芒/氧化荷爾芒框架；臨床試驗注意；NRF2 作為主控調節因子
- `src/notes/_link/N-Acetylcysteine.md` — NAC 機制；荷爾芒訊號削弱註記；GlyNAC 脈絡
- `src/notes/_link/NAC.md` — NAC 作為選擇性 PRDX6 過氧化物酶抑制劑
- `src/notes/_link/Redox Vaccination.md` — NAC 作為荷爾芒研究中的阻斷劑
- `src/notes/adrenochrome/GlyNAC.md` — SRAC 方案中的 NAC/GlyNAC 時機；臨床試驗數據
- `src/notes/comt/_triples.json` — 維生素 E + COMT 基因型交互作用
- `src/notes/_link/_document_ - Rapamycin for longevity opinion article.md` — Ristow 關於抗氧化劑「比無用更糟」的引言
- `src/notes/_link/PRDX6.md` — NAC 作為 PRDX6 過氧化物酶抑制劑（IC50 15.5 µM）
- `src/notes/adrenochrome/_document_ - The role of glycation...md` — Gomez-Cabrera「中等運動是一種抗氧化劑」引用
- `src/notes/oxidative_stress/README.md` — 運動作為驅動適應的急性 ROS 爆發
- `src/notes/senescence/_document_ - Mitochondrial dysfunction in cellular senescence...md` — *C. elegans* 中慢性膳食硫醇降低壽命；ROS 生成化合物增加壽命
