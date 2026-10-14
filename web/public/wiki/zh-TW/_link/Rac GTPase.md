---
title: Rac GTP酶
description: 'Rac GTP酶（RAC1、RAC2、RAC3、RHOG）是 Rho 家族小 GTP酶中約 21-25 kDa 的一個亞家族。它們以 GDP/GTP 二元開關運作，透過 GEF、GAP 與 GDI 循環核苷酸狀態，並經由 WAVE、PAK 與 NADPH 氧化酶等效應器驅動偽足、膜皺褶與細胞黏附。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - gtpase
aliases: [Rac, Rac GTPases, Rac 亞家族, RAC1, RAC2, RAC3, RHOG]
---

# Rac GTP酶

> [!info] 這是家族說明，不是單一蛋白質
> 「Rac GTPase」指的是 Rho 家族小 GTP酶的一個**亞家族**：在人類為 RAC1、RAC2、RAC3 與 RHOG。RAC1 是廣泛表現的原型成員，並有自己的筆記（[[Rac1]]）；其他成員則以組織限定性以及所接合的效應器與 GEF 加以區別。

## 分類

Rho 家族在人類約含 20 個典型成員，依序列同源性分為 RHO（RHOA、RHOB、RHOC）、RAC（RAC1、RAC1B、RAC2、RAC3、RHOG）、CDC42（CDC42、TC10、TCL、WRCH1/2）、RHOD/RIF、RND1–3、RHOH 與 RHOBTB。RAC1、RAC2 與 RAC3 的 G 區域序列同一性達 89–93%，卻產生非冗餘的輸出，因此「Rac」是家族標籤而非分子實體。

RAC1 與 RAC3 廣泛表現；RAC2 大致侷限於造血細胞，在該處為氧化爆發所必需；RHOG 則在淋巴球與上皮情境中富集。

## 結構與開關循環

Rac 蛋白質約 21–25 kDa，具有保守的 **G 區域**（P-loop 的 Gx4GKS/T、Switch I、Switch II 以及異位性的 N/TKXD 與 ExSAK 基序），以及以 **CAAX** 盒結尾的 C 端**高變異區**（HVR）。CAAX 的半胱胺酸會被香葉基香葉醛化（RhoB 與 RND 蛋白質則為法尼基化），隨後被內切蛋白酶切割並羧基甲基化，使蛋白質錨定在質膜與胞器膜上。

核苷酸狀態就是開關：

1. **關閉（結合 GDP）。** 大多數 Rac 位於細胞質中，以不活化複合體形式被 Rho GDP 解離抑制因子（RhoGDI）隔離，後者遮蔽了異戊烯基。
2. **由 GEF 活化。** RacGEFs（Dbl 家族，例如 Tiam1、β-PIX/ARHGEF7、Vav、DOCK、P-REX1）催化 GDP 釋放；GEF 通常由活化的受體（RTK、GPCR、整合素）或由 Rac 本身的夥伴[[RhoA]]招募至膜上。
3. **開啟（結合 GTP）。** Switch I 與 Switch II 重新排列，形成對效應器具有高親和力的表面。
4. **由 GAP 終止。** RacGAP 將一個精胺酸「arginine finger」插入催化位點以加速水解；RacGDI 隨後再將結合 GDP 的蛋白質從膜上抽出。

> [!info] 特異性來自 C 端
> 由於 RAC1/2/3 的 G 區域幾乎相同，特異性來自 HVR：它編碼一段多鹼性區（同時也帶有核定位序列）、一段可結合 SH3 區域（如 β-PIX 的 SH3）的脯胺酸豐富片段，以及異戊烯化基序本身。HVR 不僅僅是一個定位標籤 —— 它直接參與效應器的接合。

## 效應器與輸出

- **肌動蛋白聚合。** Rac1 透過 IRSp53 間接活化 WAVE 調控複合體，解除 WAVE2 的自抑制並使其活化 Arp2/3 —— 產生分支狀肌動蛋白，以及遷移細胞前緣的偽足與膜皺褶。此路徑也會輸入[[NF-κB]]的轉錄輸出。
- **PAK1。** Rac-GTP 結合 p21 活化激酶的 CRIB/GBD，驅動 JNK 與[[ERK]]／[[MAPK]]級聯，將運動性與增殖連結起來。
- **NADPH 氧化酶。** 膜上的 Rac 組裝 Nox 複合體並在[[Neutrophils]]中觸發呼吸爆發 —— Rac2 缺失會造成類似慢性肉芽腫疾病的免疫缺陷。
- **其他標的。** IQGAP 家族支架、formin、經由 HVR 的 PI5K/DGK，以及將 Rac 活化與泛素連接酶招募耦合的 Rac1–SmgGDS–Nedd4 軸。

空間協調很重要：Cdc42 決定極性，Rac1 伸出偽足，而[[RhoA]]在同一個纖維母細胞中驅動後方收縮力與黏著斑的更替。Rac1 也引導[[Phagocytosis]]與嗜中性球趨化性，並為[[Integrin]]與[[Cadherin]]接合處的[[Cell Adhesion]]所必需。

## 臨床關聯

- **癌症。** RAC1 是少數會突變的 Rho GTP酶：switch I 中的 **P29S** 出現在 4–9% 的日曆曝曬[[Melanoma]]中，是快速循環、效應器親和力增強的等位基因；構成活性的突變型（G12V、Q61K）出現在生殖細胞腫瘤中。更常見的情況是 Rac 活化由上游致癌 RTK 與過量表現的 GEF 驅動，而非由突變驅動。Rac1 與 Rac1b 都與[[EMT]]及侵襲有關。
- **神經退行性疾病。** Rac1 調節失常與[[Alzheimer's Disease]]有關 —— 已有報告指出神經元族群中 RAC1 剪接改變與 RAC1B 增加。
- **發炎與血管疾病。** Rac1 位於[[TNFα]]、Ang II 與 NADPH 氧化酶在內皮與血管細胞中的下游，因此與[[Atherosclerosis]]及經由[[Reactive Oxygen Species]]的氧化還原訊號傳遞相關。

> [!warning] 治療現實的檢視
> 直接的 Rac 抑制劑仍停留在臨床前階段。可施力的節點在上游：RTK 抑制劑，以及效應器 —— PAK（FRAX597、IPA-3），以及 Rac1-GEF 交互作用（NSC23766、EHop-016）。

## 文件

- (no document notes yet)

## 連結

- [[Rac1]] —— 原型且研究最多的 Rac 成員；Rac 家族筆記應與它一起閱讀。
- [[RhoA]] —— 它的功能平衡對手：Rac1 驅動前緣突出，而 RhoA 驅動後方收縮，兩者在遷移中互相拮抗。
- [[RAS]] —— Rho GTP酶所屬的 Ras 超家族母體；Ras 透過共享的 GEF 向 Rac 傳遞訊號。
- [[Actin Cytoskeleton]] —— Rac 經由 WAVE 與 Arp2/3 活化的主要結構性輸出。
- [[PAK1]] —— 主要激酶效應器，將 Rac 與 MAPK 訊號傳遞連結起來。
- [[NADPH Oxidase]] —— Rac-GTP 是組裝氧化酶複合體並產生呼吸爆發所必需的。
- [[NF-κB]] —— Rac1 也透過 NF-κB 驅動轉錄輸出。

## 連結摘要
- 新增連結：[[Rac1]]、[[RhoA]]、[[RAS]]、[[Actin Cytoskeleton]]、[[PAK1]]、[[NADPH Oxidase]]、[[NF-κB]]、[[ERK]]、[[MAPK]]、[[EMT]]、[[Integrin]]、[[Cadherin]]、[[Cell Adhesion]]、[[Phagocytosis]]、[[Neutrophils]]、[[Chronic Granulomatous Disease]]、[[Melanoma]]、[[Alzheimer's Disease]]、[[Atherosclerosis]]、[[Reactive Oxygen Species]]、[[TNFα]]、[[Rac1b]]、[[Cdc42]]、[[Arp2/3]]、[[WAVE Regulatory Complex]]、[[IQGAP]]
- 建議建立的筆記：[[Arp2/3]]、[[WAVE Regulatory Complex]]、[[Cdc42]]、[[WASP]]、[[Rac1b]]、[[RacGEF]]、[[RacGAP]]、[[RhoGDI]]、[[IQGAP]]、[[PAK2]]、[[PAK3]]
- 建議強化的強連結：[[Rac GTPase]] ↔ [[Rac1]]、[[Rac GTPase]] ↔ [[RhoA]]