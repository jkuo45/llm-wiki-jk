---
title: Glutathione
description: Glutathione（GSH）是含量最豐富的內源性硫醇抗氧化劑，為由麩胺酸、半胱胺酸與甘胺酸組成的三肽，能緩衝細胞氧化還原狀態、透過 GPX 酶還原過氧化物，並與親電子物質結合以排出體外。
created: 2026-05-29
updated: 2026-09-24
tags: [biological-molecule, antioxidant, redox-signaling, peptide]
aliases: [GSH, GSSG, Reduced glutathione, Oxidized glutathione, gamma-glutamylcysteinylglycine]
---
# 穀胱甘肽

**穀胱甘肽**（γ-L-glutamyl-L-cysteinylglycine，GSH）是大多數細胞中含量最豐富的內源性抗氧化劑，典型濃度約 1–10 mM。它是由[[Cysteine]]、麩胺酸與甘胺酸組成的三肽，其活性硫醇使其成為細胞的核心氧化還原緩衝物——抗氧化網絡的終端還原劑，也是讓[[GPX4]]能持續對抗[[Lipid Peroxidation]]的輔因子。

## 結構與合成

穀胱甘肽的標誌性特徵是連接麩胺酸側鏈羧基與半胱胺酸胺基的 **γ-肽鍵**。這個不尋常的鍵結使其能抵抗多數肽酶，因此 GSH 能在胞質代謝週轉中存活，僅被細胞表面的 γ-穀氨酰轉肽酶降解。

合成過程需要 ATP，且受半胱胺酸限制，分為兩個步驟：

1. **穀氨酸–半胱氨酸連接酶（GCL，舊稱 γ-GCS）**——限速步驟；受 GSH 本身回饋抑制。由催化亞基（GCLC）與修飾亞基（GCLM）編碼而成。
2. **穀胱甘肽合成酶**——加入甘胺酸。

半胱胺酸的供應通常是瓶頸：它來自轉硫途徑（高半胱胺酸 → 胱硫醚 → 半胱胺酸）、蛋白質週轉，或來自胱胺酸／麩胺酸反向轉運蛋白 **system xc⁻**（[[SLC7A11]]/xCT），該轉運蛋白以輸出麩胺酸換取輸入胱胺酸。

## 穀胱甘肽氧化還原循環

> [!info] GSH 是可回收的還原劑，而非化學計量的消耗終產物
> **中和作用：**[[Glutathione Peroxidase]]（尤其是[[GPX4]]）利用 GSH 將 H₂O₂ 與脂質氫過氧化物還原為水與醇類，形成 GSSG 與蛋白質-穀胱甘肽混合二硫化物中間體。
> **再生作用：** **[[Glutathione Reductase]]** 利用來自戊糖磷酸途徑的[[NADPH]]，將 GSSG 還原回 2 分子 GSH。一個 NADPH 可再生兩個 GSH。

**GSH/GSSG 比值**是細胞主要的氧化還原狀態讀值。胞質比值通常為 30:1 至 100:1；比值偏向 GSSG 代表氧化壓力，並直接改變蛋白質半胱胺酸的氧化還原狀態——這正是氧化還原訊號傳導的語言。

三層防禦機制會消耗 GSH：

- **過氧化物還原**：GPX 家族，特別是 GPX4 對抗膜上的磷脂氫過氧化物
- **親電體共軛**：[[Glutathione S-Transferase]]s（GSTs）透過 Michael 加成反應，將 GSH 接合到外源物質、脂質過氧化產物（[[4-Hydroxynonenal]]、[[Acrolein]]、[[Malondialdehyde]]）及醌類上
- **直接清除**：GSH 與氫氧自由基、過氧亞硝酸鹽及次氯酸反應，但其速率受限於擴散極限，因此酶促途徑在體內更為重要

## 蛋白質 S-穀胱甘肽化

GSH 與蛋白質半胱胺酸硫醇形成混合二硫化物（**S-glutathionylation**），這是一種可逆的翻譯後修飾，能保護半胱胺酸免於不可逆的過度氧化，並傳導氧化還原訊號。作用標的包括 NF-κB、PKC、肌動蛋白、粒線體複合體 I 與過氧化還原酶。谷氧還原蛋白（glutaredoxin）利用 GSH 逆轉此修飾。

## 脂質過氧化與鐵死亡

穀胱甘肽是鐵死亡防禦軸的限速輔因子。[[GPX4]]僅在 GSH 充足時能還原膜上的磷脂氫過氧化物；當胱胺酸經 system xc⁻ 的輸入被阻斷（[[Erastin]]）或 GSH 合成被抑制（[[BSO]]）時，脂質氫過氧化物會堆積，細胞因而以[[Ferroptosis]]方式死亡。

> [!info] 鐵死亡的兩道獨立煞車
> GPX4/GSH 軸是其中之一。**FSP1–[[Coenzyme Q10]]–[[NADPH]]** 軸是位於細胞質膜上的平行且不依賴穀胱甘肽的煞車（Doll et al., 2019；Bersuker et al., 2019）。失去其中一道仍可存活；同時抑制兩者則具協同效應。詳見[[GPX4]]。

由於穀胱甘肽耗竭會將相同的化學反應轉變為不可逆的損傷，細胞的半胱胺酸經濟學便成為適應性[[Mitohormesis|redox signaling]]與致命過氧化之間的開關。

## 生理與臨床意義

- **解毒作用**：肝臟 GSH 共軛藥物、乙醯胺酚代謝物（NAPQI）與重金屬。乙醯胺酚過量會耗竭肝臟 GSH；N-乙醯半胱胺酸（[[NAC]]）可使其恢復。
- **神經退化**：腦部 GSH 在[[Parkinson's Disease]]與[[Alzheimer's Disease]]中下降；黑質的 GSH 異常偏低且鐵含量偏高，有利於過氧化反應。
- **老化**：GSH 合成與 GSH/GSSG 比值隨年齡下降；GlyNAC（甘胺酸 + NAC）補充可使年長者兩者恢復，並改善粒線體功能。
- **肺部疾病**：上皮襯液中的 GSH 比血漿高約 100 倍，在氣喘與 COPD 中被耗竭，降低氧化損傷的閾值。
- **心血管**：GSH 維持一氧化氮的生物可利用度，並防止[[Oxidized LDL]]形成。
- **硒的關聯**：[[Selenium]]是 GPX4 催化性硒半胱胺酸所必需，因此硒缺乏會在膜層面上模擬穀胱甘肽耗竭的表型。參見[[Keshan disease]]。

## 調節

前體與支持因子：[[NAC]]、甘胺酸、[[Glutathione Synthetase]]的受質、[[Alpha-Lipoic Acid]]（可將 GSSG 再生為 GSH 並節省半胱胺酸）、硒，以及維生素 B6（胱硫醚 β-合酶的輔因子）。口服 GSH 生物可利用度有限；脂質體、舌下含片與前體形式更為有效。NRF2 活化（[[Sulforaphane]]、[[Curcumin]]）可上調 GCL 與胱胺酸反向轉運蛋白，從內源性提升 GSH 容量——這是[[Xenohormesis|adaptive]]而非替代性的策略。

## Documents

提及此實體的文件清單

  - [[_document_ - formation, chemical stability|formation, chemical stability]]
    - 關於身體如何自然減緩此過程的筆記，特別是透過 Glutathione 與酵素保護機制。環化步驟對環境條件高度敏感。

  - [[_document_ - Neuromelanin, one of the most overlooked molecules in modern medicine, is not a spectator|Neuromelanin, one of the most overlooked molecules in modern medicine, is not a spectator]]
    - 這類抗氧化劑常以硫醇形式存在，包括 Cysteine 與 Glutathione；天然神經黑色素的褐黑素核心含有半胱胺酸，外圍則由缺乏半胱胺酸的真黑素成分包覆。- [[_document_ - Oxidative Stress Harms and Benefits for Human Health|Oxidative Stress Harms and Benefits for Human Health]]
  - 細胞主要以酵素性成分構成的抗氧化防禦系統，例如 Superoxide Dismutase (SOD)、Catalase (CAT) 與 Glutathione Peroxidase (GPx)，保護自身免受 ROS 誘導的細胞損傷。

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
  - SIRT1 透過改變 Keap1 的結構活化 NRF2，促使 NRF2 轉移至細胞核，並促進抗氧化基因（例如 Glutathione S-transferase 與 glucuronyl transferase）的表現。

## 連結

- [[Glutathione Peroxidase]]：以 GSH 中和過氧化物；GPX4 負責處理膜脂質過氧化氫。
- [[GPX4]]：與 ferroptosis 相關的含硒酵素，其活性完全仰賴 GSH 的供應。
- [[Glutathione Reductase]]：以 NADPH 將 GSSG 再生為 GSH。
- [[Glutathione S-Transferase]]：與親電子物質（含脂質過氧化醛類）進行結合反應。
- [[Glutathione Synthetase]]：生物合成的第二個步驟；缺乏會導致溶血性貧血。
- [[Cysteine]]：速率限制性受質；由 system xc⁻ 或轉硫途徑供應。
- [[SLC7A11]]：胱胺酸／麩胺酸反向轉運蛋白，決定 GSH 的合成能力。
- [[NADPH]]：GSSG 再生與 FSP1–CoQ10 軸的電子供體。
- [[Lipid Peroxidation]]：GSH 經 GPX4 終止膜脂質過氧化的連鎖傳播。
- [[Ferroptosis]]：GSH 耗竭使 GPX4 的抑制機制瓦解，觸發 ferroptosis 性細胞死亡。
- [[Erastin]]：system xc⁻ 抑制劑，會耗竭 GSH 並誘導 ferroptosis。
- [[4-Hydroxynonenal]]：可被 GST 結合的親電子物質；GSH 狀態決定它被解毒，或與蛋白質形成加成物。
- [[Acrolein]]：消耗巰基的烯醛，經 GSH 結合清除。
- [[Malondialdehyde]]：雙醛，部分經 GSH 結合解毒。
- [[NAC]]：半胱胺酸供體，可在耗竭後恢復 GSH。
- [[Alpha-Lipoic Acid]]：將 GSSG 再生為 GSH，並節省半胱胺酸。
- [[Selenium]]：GPX4 硒半胱胺酸所必需；缺乏時會出現與 GSH 流失相同的表型。
- [[Oxidative Stress]]：GSH/GSSG 比值是細胞氧化狀態的主要指標。
- [[Adrenochrome]]：進行氧化還原循環的醌類，會消耗 GSH 並損害膜修復。
- [[Mitohormesis]]：GSH 緩衝所調節的適應性氧化還原訊號。
- [[NRF2]]：提升 GCL、GST 與 xCT 表現的轉錄因子。
- [[Sulforaphane]] / [[Curcumin]]：內源性提升 GSH 容量的 NRF2 活化劑。
- [[Glutathione Reductase]] / [[Glutathione Synthetase]]：合成—再循環迴路中的酵素夥伴。

## 連結摘要

- 新增連結：[[Cysteine]], [[SLC7A11]], [[Glutathione Reductase]], [[Glutathione S-Transferase]], [[Glutathione Synthetase]], [[GPX4]], [[NADPH]], [[Lipid Peroxidation]], [[Ferroptosis]], [[Erastin]], [[4-Hydroxynonenal]], [[Acrolein]], [[Malondialdehyde]], [[NAC]], [[Selenium]], [[Keshan disease]], [[NRF2]], [[Sulforaphane]], [[Curcumin]], [[Mitohormesis]], [[Xenohormesis]], [[Parkinson's Disease]], [[Alzheimer's Disease]], [[Oxidized LDL]], [[Coenzyme Q10]]
- 建議建立的新實體註記：[[S-Glutathionylation]], [[GCL]], [[BSO]]
- 應強化的重點連結：[[Glutathione]] ↔ [[Glutathione Peroxidase]], [[Glutathione]] ↔ [[Lipid Peroxidation]], [[Glutathione]] ↔ [[Ferroptosis]], [[Glutathione]] ↔ [[Adrenochrome]]