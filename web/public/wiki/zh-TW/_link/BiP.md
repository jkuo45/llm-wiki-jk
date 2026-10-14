---
title: BiP
description: BiP（GRP78, HSPA5）是駐留於內質網的 Hsp70 伴護蛋白，能結合錯誤摺疊蛋白而使三個未摺疊蛋白質反應感測器維持抑制狀態，同時也是 UPR 的主要轉錄標的。
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein
  - molecular-chaperone
  - endoplasmic-reticulum
aliases: [BiP, GRP78, HSPA5, 葡萄糖調節蛋白 78, Glucose-Regulated Protein 78, BiP/GRP78, 78 kDa 葡萄糖調節蛋白]
---

# BiP

**BiP**（binding immunoglobulin protein，也稱 **GRP78** 或 **HSPA5**）是 [[HSP70]] 伴護蛋白家族中駐留於內質網（ER）的成員，也是表現量最高的內質網蛋白。它執行兩項不可分割的工作：它是主要的內質網摺疊伴護蛋白，同時也是駐留於內質網的「感測器」，將三個[[Unfolded Protein Response|未摺疊蛋白質反應]]傳訊分子——[[IRE1]]、[[PERK]] 與 [[ATF6α]]——維持在不活化狀態，直到摺疊機制不堪負荷。當這種系留解除時，三條支臂同時釋放，而 BiP 本身也成為它們主要的轉錄標的——形成一個前饋迴圈：感知壓力的伴護蛋白，同時也驅動對該壓力的反應。

> [!info] 一個蛋白質、兩個別名、一個知識庫實體
> GRP78、HSPA5 與 BiP 是同一個分子，其歷史名稱反映了發現背景：最初被辨識為內質網的免疫球蛋白結合蛋白，後來被辨識為在代謝壓力情境下被誘導的葡萄糖調節蛋白，最後被複製確認為 HSPA5，即 Hsp70 家族的第五個成員。本知識庫將 GRP78 與 BiP 視為同一實體；本筆記是兩者的標準解析依據。

## 結構與結構域

- 人類 BiP 是 78 kDa、654 個胺基酸的蛋白質，由第 12 染色體上的 *HSPA5* 編碼。它帶有一個 N 端內質網訊號胜肽，在轉位時被切除，留下具有 N 端**核苷酸結合結構域（NBD，ATPase 結構域）**與 C 端**受質結合結構域（SBD）**的成熟蛋白，兩者由對 ATP 敏感的鉸鏈相連。
- NBD 是具有 actin 摺疊核苷酸結合核心的雙葉 ATPase；SBD 則是帶有螺旋狀蓋子（殘基約 386–526）的 α/β 受質結合結構域，該蓋子在 ATP 依賴、異位耦合的循環中開闔。
- BiP 另帶有 C 端 KDEL 類的內質網滞留訊號，使它在基礎狀態下維持於內質網中。
- BiP 是構成性寡聚的（二聚體／四聚體），而寡聚化有助於受質滞留與其作為感測器的角色。

> [!important] ATPase 循環就是全部的機制
> 結合 ATP、蓋子開啟的 BiP 會呈現未摺疊受質的疏水片段；水解則關閉蓋子並困住受質；ADP 釋出後蓋子再度開啟，將已摺疊或部分摺疊的受質釋出，交付下游的摺疊或降解系統。由於 SBD 必須結合外露的疏水表面——而那正是錯誤摺疊蛋白所呈現的特徵——BiP 受質結合表面的佔位情形，就是內質網未摺疊蛋白負載的直接讀值。對 UPR 感測器而言，構成「壓力」的是這種結合，而非 BiP 的豐度。

## 作用機制與路徑

**伴護作用。** BiP 結合新生與錯誤摺疊多胜肽的外露疏水片段，提供一個封閉的摺疊腔，並將摺疊與 ATP 水解耦合。它與內質網共同伴護蛋白及 HSP40 型 J 結構域蛋白（知識庫尚無筆記）等伴護夥伴，以及 ERp57/PDI 共同處理含雙硫鍵的受質；並與內質網品質管制三聯——摺疊、ERAD（知識庫尚無筆記），以及當兩者皆失敗時的[[Autophagy|自噬]]——相拮抗。

**感測功能。** 在穩態下，BiP 會在物理上且構成性地結合 [[IRE1]]、[[PERK]] 與 [[ATF6α]] 的腔內結構域，使三者各自維持不活化。未摺疊蛋白負載升高會將 BiP 從這些感測器上「滴定」下來；它們的釋放就是啟動[[Unfolded Protein Response|未摺疊蛋白質反應]]的開關。這個「BiP 作為變阻器」的模型，是說明漸變式壓力訊號如何轉換為離散細胞反應的主流解釋，儘管各感測器上 BiP 結合的確切化學計量仍未完全定論，其他內質網壓力感測器的貢獻也仍有爭議。

**轉錄標的。** 一旦活化，三條 UPR 支臂都會上調 BiP。ATF6 與剪接後的 [[XBP1]] 直接驅動 BiP 的轉錄；[[PERK]] 支臂則透過 [[ATF4]] 依賴的轉錄提高 BiP。BiP 是內質網壓力下誘導最強的基因之一，同時它也是自己所調控訊號的受質，這又加上一個穩定化的回饋迴圈。

> [!warning] 方向性取決於情境
> BiP 升高通常具有保護作用——恢復 BiP 活性可挽救分泌細胞功能並減少內質網壓力驅動的凋亡。但 BiP 升高同時也是腫瘤、感染與纖維化中反覆出現的特徵，在這些情境下它支持壓力下的存活並可能賦予化學抗藥性。將 GRP78 視為治療標的的报告強調疾病面向；將 GRP78 視為保護因子的報告則強調內質網面向（PMID: 42370180）。

## 生理功能

- **內質網蛋白質恆定性的守門員。** BiP 缺失為胚胎致死；即使部分缺失，也與分泌器官衰竭及糖尿病相關的 β 細胞易損性有關（PMID: 41818475）。
- **鈣離子恆定。** BiP 有助於維持內質網的鈣儲存，並參與鈣處理蛋白的鈣依賴性摺疊；內質網本身則是與粒線體鈣攝取相偶聯的鈣儲存庫。
- **內質網—細胞表面與細胞核運輸。** 在壓力下 BiP 會轉位到細胞表面（可作為受體或輔受體，包括在 CD47–BiP 軸中作為 [[CD47]] 的夥伴）以及細胞核，在核內調節轉錄因子活性——這些都是與內質網摺疊不同的非典型功能。
- **凋亡耦合。** BiP 表現量會改變[[Apoptosis|凋亡]]的閾值：BiP 持續升高會抑制 [[CHOP]] 驅動的死亡訊號，而壓力持續期間 BiP 下降則與承諾進入凋亡有關。

## 病理與臨床關聯

- **癌症。** GRP78 在多種腫瘤類型中升高，並賦予存活優勢、血管新生，以及對化學治療與放射治療的抗藥性——[[CD47]]、[[VEGF]] 與 [[PI3K-Akt Signaling]] 等軸線皆與之交會。
- **神經退化疾病。** BiP 失調的慢性內質網壓力與[[Alzheimer's Disease]]、[[Parkinson's Disease]]、[[Huntington's Disease]] 以及粒線體壓力軸線有關。
- **代謝疾病。** BiP 在[[Insulin Resistance]]、[[Type 2 Diabetes Mellitus]] 與 [[Non-alcoholic Fatty Liver Disease]] 中升高，且 BiP／BiP 功能與[[Diabetic Kidney Disease]] 有關。
- **感染與發炎。** GRP78 會被病毒入侵與免疫配體徵用，也是發炎疾病狀態中有文獻記載的介導因子（PMID: 42337188）。

> [!info] 治療標定的現況
> 針對 GRP78 的策略包括小分子調節劑、抗體（包括針對細胞表面的 GRP78 抗體）與基因層面的方法。限制在於專一性——BiP／GRP78 廣泛表現，全身性的 GRP78 調節帶有干擾整體蛋白質恆定性的不可接受風險。以細胞表面為導向與腫瘤標靶化給藥，是取得專一性的主要策略，但迄今轉譯成果仍有限（PMID: 42370180）。

## 文件
- [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]] — describes how metabolic stress signals converge on mitochondrial-epigenetic regulation of SASP, a pathway in which ER-stress and BiP status act as an upstream permissive signal.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers: Stem Cell Aging, Inflammaging]] — links mitochondrial and ER stress in aging contexts where BiP/GRP78 induction is a documented downstream response.

## 連結
- [[Unfolded Protein Response]] — BiP 是駐留於內質網的系留分子，在穩態下將 IRE1、PERK 與 ATF6α 維持抑制，同時在它們釋放後又是最重要的轉錄標的；這個關係是感測器—輸出雙重性的教科書範例。
- [[HSP70]] — BiP 是 Hsp70 家族中定位於內質網的成員，與細胞質中的 HSPA1A/HSPA8 及粒線體中的 HSPA9 共享其 ATPase 驅動的摺疊循環。
- [[ATF6α]] — 三個 UPR 感測器之一，其自 BiP 的釋放會啟動訊號傳遞，而釋放後又是 BiP 的主要轉錄活化因子。
- [[IRE1]] — 由 BiP 系留的三個感測器中的第二個；其支臂輸出（剪接後的 XBP1）最直接地驅動 BiP 與內質網伴護蛋白的轉錄。
- [[PERK]] — 由 BiP 系留的第三個感測器，透過 eIF2α 磷酸化與 [[ATF4]] 作用，於壓力反應基因中提高 BiP。
- [[ER Stress]] — BiP 的豐度與 BiP 對 UPR 感測器的佔位情形，就是內質網壓力嚴重程度操作性上的定義。
- [[Autophagy]] — 當內質網摺疊與 ERAD 失敗時，會聚集或持續存在的 BiP 受質交由自噬清除；這三套系統是分層的品質管制層級，而 BiP 是共用的守門員。
- [[Apoptosis]] — BiP 持續升高可緩衝細胞免受 CHOP 媒介的死亡訊號，而壓力未解時 BiP 的崩解則是承諾走向凋亡的關鍵點。
- [[CD47]] — BiP 在壓力下轉位至細胞表面並可參與 CD47 依賴的訊號傳遞，將這個內質網伴護蛋白與免疫逃脫連結起來。

## 連結摘要
- 新增連結：[[Unfolded Protein Response]]、[[HSP70]]、[[ATF6α]]、[[IRE1]]、[[PERK]]、[[XBP1]]、[[ATF4]]、[[ER Stress]]、[[Autophagy]]、[[Apoptosis]]、[[CHOP]]、[[CD47]]、[[VEGF]]、[[PI3K-Akt Signaling]]、[[Insulin Resistance]]、[[Type 2 Diabetes Mellitus]]、[[Non-alcoholic Fatty Liver Disease]]、[[Alzheimer's Disease]]、[[Parkinson's Disease]]、[[Huntington's Disease]]
- 建議建立的筆記：[[ERAD]]、[[HSP40]]、[[eIF2alpha]] — 已移除（既有筆記已存在）：Calreticulin
- 建議強化的強連結：[[Unfolded Protein Response]] ↔ [[BiP]]（構成性抑制關係目前僅由 UPR 側記載）、[[HSP70]] ↔ [[BiP]]（家族成員關係在 HSP70 筆記中已有陳述，但 BiP 當時沒有對應筆記）、[[BiP]] ↔ [[Apoptosis]]。
