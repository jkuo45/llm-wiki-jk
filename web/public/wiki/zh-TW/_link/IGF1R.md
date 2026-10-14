---
title: IGF1R
description: 'IGF1R（CD221）是胰島素受體家族中廣泛表現的受體酪胺酸激酶。它是由雙硫鍵相連的 α2β2 四聚體，透過 IRS/ShC 訊號傳遞至 PI3K-AKT-mTOR 與 RAS-MAPK；為產前生長所必需，並且是癌症的驅動因子與已獲驗證為有效標的但難以成藥的依賴關係。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor-tyrosine-kinase
  - signaling
  - growth-factor
  - cancer
aliases: [Insulin-like Growth Factor 1 Receptor, IGF-I Receptor, CD221, IGF1R alpha, IGF1R beta]
---

# IGF1R

## 概觀

IGF1R 是[[IGF1]]的 type I 受體，並以較低親和力辨識 IGF2
與[[Insulin|胰島素]]。它是**預先組裝好的、以雙硫鍵相連的 α₂β₂ 異源四聚體**，
而非由配體誘導形成的二聚體；這是它與多數受體酪胺酸激酶
在結構上的關鍵差異，並解釋了它幾項特殊性質，其中包括它傾向與
[[Insulin Receptor|胰島素受體]]形成**雜合受體**。

它的兩條下游輸出正是 IGF1R 在各方都重要的原因：**PI3K–AKT–mTOR**
（生長、存活、合成代謝）與 **RAS–MAPK**（增殖）。

## 結構與結構域

IGF1R 是一個前驅物，其訊號胜肽會被切除，但所產生的兩條鏈仍以雙硫鍵
相連而成為必然的四聚體。

- **α 鏈（2 條）**——胞外部分，切除後每条约 130 kDa。
  胞外區域包含：
  - **L1（白胺酸富集）結構域**、**L2** 與 **FnIII（纖維連結蛋白第三型）**
    結構域，共同構成配體結合表面，與胰島素受體的胞外結構域相關；
  - 一個 **CR（半胱胺酸富集）區域**；
  - 一個跨越膜的**單一跨膜 α-螺旋**。
  兩條 α 鏈共同形成 **FnIII-1/FnIII-2 二聚化介面**，
  其結構類比於胰島素受體的 CR 區域，並帶有一個關鍵的 N-連結糖基化位點。
- **β 鏈（2 條）**——胞內部分，每條約 95 kDa。每條包含：
  - 一段短的胞外尾部；
  - **跨膜螺旋**；
  - 一個**激酶結構域**，具有典型的雙葉 Ser/Thr 激酶摺疊、一個活化環
    與 DFG 基序；
  - 一段 **C 端尾部**。
- **活化。**激酶結構域以**反式**反平行排列的方式分隔於同一個 αβ 異源二聚體上。
  配體結合會跨*不同*異源二聚體反式活化兩個激酶結構域，
  形成活性構形。
- **自體磷酸化位點。**激酶活化環中的三個酪胺酸
  （**Tyr1161、Tyr1162、Tyr1166**）必須全部被磷酸化才能達到最佳激酶活性。
  穩態動力學顯示每一次後續的自體磷酸化都會提高周轉數並降低 ATP 與胜肽的 Km
  ——這是一種自體磷酸化「棘輪」。三磷酸化激酶結構域與 ATP 類似物及胜肽受質的
  2.1 Å 結構顯示，受質辨識使用 **P+1 與 P+3 位置的疏水性殘基**。
- **成對二聚。**由於活性單元是 α₂β₂，功能性訊號常來自兩個此类四聚體的
  反式活化。

## 作用機制

1. **配體結合與反式活化。**[[IGF1]]（以及較弱的 IGF2 與
   胰島素）結合其中一個 αβ 半部的胞外區域，
   進而異位（變構）活化另一半四聚體之伴侶 αβ 半部上的激酶。
2. **自體磷酸化。**活化環與 C 端的酪胺酸發生
   自體磷酸化，創造出磷酪胺酸停靠位點。
3. **IRS 蛋白的停靠。**自體磷酸化後的受體招募胰島素受質
   **[[IRS1]]** 與 [[IRS-2]]（透過其 PTB 結構域結合 NPXY 基序，
   以及其 YXXM 基序結合受體的磷酪胺酸），另加 SHC、GRB10 與 14-3-3 蛋白。
4. **兩條經典輸出。**
   - **PI3K–AKT**：IRS1/2 的磷酪胺酸結合 p85 調節次單元
     （[[PI3K]]），生成 PIP3 並招募 AKT。AKT 接著活化
     [[mTORC1]]（蛋白質合成與合成代謝）、使[[Bad]]失活
     （抗凋亡），並抑制 GSK3。此分支調控「存活、
     蛋白質合成」以及大多數代謝效應。
   - **RAS–MAPK**：IRS1/2 或 Shc 招募 GRB2/SOS，活化 RAS 與
     RAF–MEK–ERK 級聯；此分支調控增殖，並與 PI3K 協同促進
     細胞生長。
5. **其他分支。**
   - **JAK/STAT**，尤其是 **[[STAT3]]**，UniProt 將其描述為
     可能對 IGF1R 的轉化活性不可或缺；
   - **JNK**，平行地被活化；IGF1 藉由磷酸化並抑制 MAP3K5/ASK1
     來抑制 JNK 的活化，而 MAP3K5/ASK1 可直接與 IGF1R 結合。
6. **雜合受體。**IGF1R 與 INSR 形成雜合受體，由兩者各一條 α 鏈與 β 鏈組成。
   IGF1R/INSR(long) 雜合受體可被 IGF1 以高親和力、IGF2 以低親和力活化，
   且不被胰島素顯著活化；IGF1R/INSR(short) 雜合受體則可被 IGF1、IGF2
   與胰島素活化。兩項獨立研究對 INSR(long) 與 INSR(short) 雜合受體的
   結合特性是否有差異看法不一——值得標記為尚無定論的爭點。

## 生理角色

- **生長。**在小鼠中，IGF1R 訊號對**產前生長**是必需的：
  *Igf1r* 敲除動物在出生時死亡，而肝臟專一性 IGF1R 敲除
  動物則能存活且體重約為正常的 70%——顯示多數生長效應來自內分泌作用
  （肝臟衍生的 IGF1）而非局部作用。
- **代謝。**IGF1R 與 INSR 共同構成胰島素／IGF 軸，
  是觸發與能量恆定相關訊號的受體。
  [[Insulin Resistance|胰島素阻抗]]涉及兩者的失調。
- **神經生物學。**IGF 訊號對神經系統發育
  與神經元存活具有核心地位，而足細胞專一性的 IGF1R 對正常的
  腎小球與足細胞基因轉錄是必需的。
- **骨骼與軟骨。**IGF 訊號驅動軟骨細胞增殖與
  基質合成；在關節組織中，它與[[TGFβ]]驅動的程式交互作用。
- **肌肉再生。**在衛星細胞
  （[[Muscle Stem Cell|肌肉幹細胞]]）上的 IGF1R 訊號，是損傷驅動的 IGF 訊號
  支持修復的途徑之一。

## 病理與臨床關聯

> [!important] 癌症中的 IGF1R：標的高度準確，但難以成藥
> - **生物學。**UniProt 將 IGF1R 描述為對腫瘤
>   轉化與惡性細胞存活至關重要。它支持增殖、
>   存活、侵襲與治療阻抗，並賦予對
>   [[CDK4 6]]抑制劑以及 EGFR 與 KRAS 導向藥物的阻抗。
> - **分子亞型。**與[[KRAS]]（尤其是
>   *KRAS* 突變型）、EGFR、HER2 與 MET 的受體交互作用十分常見；IGF1R 軸是一條
>   常見的繞道阻抗路徑。
>   IGF1R 亦透過整合素、鈣黏著蛋白與腫瘤
>   微環境傳遞訊號，而其*細胞內定位*的重要性
>   可能不亞於其豐度。
> - **治療歷史。**針對 IGF1R 的抗體（dalotuzumab、
>   figitumumab）與 IGF1R/INSR 雙重小分子抑制劑
>   （BMS-754807）雖進入臨床試驗，但單藥活性令人失望地有限。
>   反覆出現的解釋是冗餘性——正常的葡萄糖
>   恆定需要 IGF1R 訊號，而雜合受體的儲備會削弱
>   選擇性——因此 IGF1R 阻斷如今多以合理的
>   聯合治療而非單藥方式來推進。
> - **代謝毒性。**高血糖與胰島素阻抗是
>   IGF1R/INSR 路徑抑制這類藥物的類別限制性不良效應，而這正是
>   [[Fasting|禁食]]與熱量限制可減少同一軸的訊號並改善
>   IGF 系統敏感度這項觀察的鏡像。

## Documents

- [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]] — 胰島素結合膜上的受體酪胺酸激酶 INSR 與 IGF1R，以觸發與能量恆定相關的訊號；兩者的活化會透過 PI3K/Akt 增加葡萄糖攝取、誘導糖解、糖原生成與脂肪生成，經由 FoxO1 磷酸化抑制糖質新生，並經由 mTORC1 與 ULK1 磷酸化抑制自噬。

## Connections

- [[Insulin Receptor|胰島素受體]] — IGF1R 最接近的親緣蛋白與其雜合受體夥伴；INSR/IGF1R 軸是將養分狀態與生長耦合起來的系統，而雜合受體使所有選擇性阻斷的嘗試都變得複雜。
- [[IRS1]] 與 [[IRS-2]] — 停靠至磷酸化 IGF1R 並將訊號傳遞給 PI3K 與 GRB2/SOS 的主要受質；IRS1 是生長與代謝兩條分支匯合之處。
- [[PI3K]] 與 [[Akt]] — 存活與合成代謝分支；AKT 驅動[[mTORC1]]的蛋白質合成並使 Bad 失活。
- [[mTORC1]] — IGF1R–PI3K–AKT 的下游效應器，這也是為何 IGF1R 活化具有抗自噬作用，以及為何 IGF1R 阻斷可讓腫瘤對 mTOR 或 CDK4/6 導向治療更加敏感。
- [[RAS]] 與 [[ERK]] — 增殖分支，經由 Shc/IRS1–GRB2–SOS 啟動。
- [[STAT3]] — JAK/STAT 分支，UniProt 標示其可能對 IGF1R 的轉化活性不可或缺。
- [[IGF1]] — 同源的配體；IGF1/IGF1R 軸兼具內分泌（肝臟製造的 IGF1 作用於遠端組織）與旁分泌特性。
- [[IGF-Akt Signaling]] — 概括本知識庫中 IGF1R → IRS → PI3K → AKT 這條鏈的路徑層級節點。
- [[Insulin|胰島素]] 與 [[Insulin Signaling|胰島素訊號]] — 胰島素以低親和力結合 IGF1R；共享的訊號邏輯正是 IGF1R 阻斷會造成高血糖的原因。
- [[Insulin Resistance|胰島素阻抗]] 與 [[Type 2 Diabetes|第二型糖尿病]] — 衡量 IGF 軸失調的代謝脈絡；慢性高胰島素血症與 IGF 訊號都會餵養這個迴路。
- [[CDK4 6]] — IGF1R 軸是對 CDK4/6 抑制劑的阻抗機制，經由 cyclin D–CDK4/6 與 RB–E2F 節點。
- [[Muscle Stem Cell|肌肉幹細胞]] 與 [[Cell Proliferation|細胞增殖]] — IGF 訊號是誘導損傷後衛星細胞增殖的促有絲分裂輸入之一。
- [[Autophagy Inducer|自噬誘導物]] — 熱量限制與禁食會降低 IGF1R/INSR 訊號，解除 mTORC1 介導的自噬抑制。

## Linking Summary

- 新增連結：[[Insulin Receptor|胰島素受體]]、[[IRS1]]、[[IRS-2]]、[[PI3K]]、[[Akt]]、[[mTORC1]]、[[RAS]]、[[ERK]]、[[STAT3]]、[[IGF1]]、[[IGF-Akt Signaling]]、[[Insulin|胰島素]]、[[Insulin Signaling|胰島素訊號]]、[[Insulin Resistance|胰島素阻抗]]、[[Type 2 Diabetes|第二型糖尿病]]、[[CDK4 6]]、[[Muscle Stem Cell|肌肉幹細胞]]、[[Autophagy Inducer|自噬誘導物]]、[[Bad]]
- 建議建立的新實體註記：[[IGF2]]、[[INSR]]、[[Hybrid receptor]]、[[PIK3R1]]、[[SHC]]、[[GRB2]]、[[SOS1]]、[[MAP3K5]]、[[CD221]]、[[Albuminoid]]、[[Igf1r knockout]]、[[Podocyte]]、[[Dalotuzumab]]、[[Figitumumab]]、[[BMS-754807]]、[[Pixantrone]]、[[METABOLIC toxicity]] — 已存在故移除：ASK1、Bad、GSK3、Hyperglycemia、IGF1R、IRS-2、JAK、Satellite Cell、TSC1、TSC2
- 應強化的連結：[[IGF1R]] ↔ [[IRS1]] ↔ [[PI3K]] ↔ [[Akt]]、[[IGF1R]] ↔ [[Insulin Receptor|胰島素受體]]、[[IGF1R]] ↔ [[mTORC1]] ↔ [[Autophagy|自噬]]