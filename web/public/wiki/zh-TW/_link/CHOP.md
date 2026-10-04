---
title: CHOP
description: "CHOP（DDIT3、GADD153）是 C/EBP 家族的壓力可誘導 bZIP 轉錄因子，位於 eIF2alpha 磷酸化與 ATF4 的下游被誘導，藉由抑制存活基因並活化促死亡標的，將內質網壓力與細胞凋亡連結起來。"
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription
  - er-stress
  - apoptosis
aliases: [DDIT3, GADD153, C/EBP homologous protein, CHOP/GADD153, transcription factor CHOP, dditt3]
---

# CHOP

**概觀：** CHOP——**C/EBP homologous protein**，基因 ***DDIT3***，又稱 **GADD153**——是一個 211 個殘基、屬於 CCAAT/enhancer-binding protein 家族的 **bZIP（basic leucine zipper）轉錄因子**。它是已知可被壓力最強烈誘導的轉錄因子之一，也是將[[ER Stress|內質網壓力]]轉化為程式性細胞死亡的主要轉錄效應器。

## 結構與結構域

- **N 端轉錄活化結構域（TAD，殘基 1–99）**——酸性異常強烈。CHOP 的促凋亡效應幾乎完全對應到此區域；僅帶有 TAD 的 CHOP 融合蛋白就足以誘導細胞死亡。
- **bZIP 結構域（殘基 ~100–211）**——一段鹼性 DNA 結合區，其後接著媒介二聚化的亮胺酸拉鍊。CHOP 可形成同源二聚體，與其他 C/EBP 家族成員形成異源二聚體，也可與 [[CREB]]、c-Jun 及 [[ATF4]] 形成異源二聚體。刪除 bZIP 區域會消除 CHOP 誘導的凋亡。
- **TAD 中互斥的亮胺酸（Leu26）** 是關鍵的調節開關。**Ser24**（由 PKA 磷酸化）與 Ser78（由 PP2A 去磷酸化）的調控會破壞與 Leu26 之間的鹽橋，使該結構域從自體抑制的分子內交互作用中釋放。一旦獲得自由，TAD 便會接觸二聚體的 DNA 結合表面——這就是典型的**「調節結構域去遮蔽」**機制。

## 作用機制

**誘導。** 在壓力下，DDIT3 的轉錄會經由[[Integrated Stress Response]]陡峭上升：

> [!info] 經典的 ISR 路徑
> 壓力 → 四種 eIF2α 激酶（**[[PERK]]**、GCN2、PKR、HRI）之一被活化 → [[eIF2α]] 磷酸化 → 大部分轉譯被減弱，而帶有上游開放閱讀框的特殊 mRNA 則得以逃逸 → [[ATF4]] 轉譯與轉錄活化 → 直接結合 DDIT3 啟動子，並與 ATF4 在 C/EBP–ATF 反應元件（CARE）上協同結合。[[ATF5]] 與 [[ATF6α]] 亦可有貢獻。

CHOP 的 mRNA 半衰期異常短，因此一旦壓力解除，DDIT3 蛋白質會迅速下降——這是一個內建的計時器，可避免錯誤的死亡訊號。

**作為活化因子與抑制因子的雙重功能。** CHOP 是其他 C/EBP 家族轉錄因子的*顯性負效應*抑制劑：它與 C/EBPβ、C/EBPδ 及 ATF4 形成異源二聚體，阻斷它們與 CRE 及 CARE 位點的結合。但當與 ATF4 或磷酸化的 c-Jun 搭配時，CHOP *確實*扮演真正的活化因子，驅動一組含有特定 12–14 bp 順式元件的不同基因。

**促死亡輸出。**

| 方向 | 標的 | 後果 |
| --- | --- | --- |
| 抑制 | BCL-2、BCL-XL、[[Mcl-1]] | 移除抗凋亡 BCL-2 家族的封鎖 |
| 活化 | Bim、[[Puma]]（BBC3）、[[Noxa]]（PMAIP1） | 直接活化 BH3-only 促凋亡效應器 |
| 活化 | DR5 與 DR4（與磷酸化的 c-Jun 一起） | 使細胞對外在型死亡受體訊號更加敏感 |
| 活化 | GADD45、ATF3、TRIB3、[[SLC7A11]] | 生長停滯、進一步的促死亡與代謝壓力訊號 |
| 抑制 | IGF1、生長／存活基因 | 促成生長停滯 |

淨效應是使[[Apoptosis|凋亡]]機器的平衡由存活轉向死亡。CHOP 缺陷的細胞對內質網壓力誘導的凋亡展現出驚人的抗性。

**非凋亡角色。** CHOP 亦可由氧化壓力、胺基酸缺乏、缺氧與 LPS 誘導，並在脂肪生成（其中 CHOP 反而*促進*分化與脂肪生成，儘管其名稱如此）與紅血球生成中扮演角色。CHOP **並非** p53 的標的；DDIT3 的表現主要由內質網／ISR 壓力驅動，而非 DNA 損傷，這也是為何它能在 p53 完整的細胞中上升。

## 疾病相關性

- **癌症。** CHOP 是一個依情境而定的雙面刃：TLS-CHOP 與 IP6K2-CHOP 融合蛋白分別在黏液樣脂肪肉瘤與軟骨肉瘤中具致癌性。高 CHOP 表現也標記著數種腫瘤（如[[Multiple Myeloma|多發性骨髓瘤]]與[[Glioblastoma|多形性膠質母細胞瘤]]）的侵襲性病程與治療抗性，並被用作 ISR／內質網壓力的讀取指標。
- **神經退化。** CHOP 的持續誘導伴隨著[[Alzheimer's Disease|Alzheimer 疾病]]、[[Parkinson's Disease|Parkinson 疾病]]、普恩病與缺血中的內質網壓力，而刪除 CHOP 可在數種模型中減少神經元死亡。
- **代謝疾病。** CHOP 將肝臟的內質網壓力與[[Insulin Resistance|胰島素阻抗]]、[[Diabetes|糖尿病]]以及酒精相關性肝損傷連結起來。
- **幹細胞與老化。** CHOP 是 [[SIRT1]] 的直接轉錄標的，將 ISR 輸出與 NAD+/sirtuin 活性連結起來；CHOP 的誘導伴隨著幹細胞耗竭與炎性老化。
- **骨髓異形成。** ATF4／CHOP 相關的內質網壓力促成[[Myelodysplastic Syndrome|骨髓異形成症候群]]中無效的紅血球生成。

> [!warning] 命名歧義
> 此處的「CHOP」是轉錄因子 DDIT3／GADD153。它與該縮寫中「CHOP／GADD153 獨立」的用法無關，而且經常與 *CHOPN*（C/EBPζ，正式名稱為 **CEBPζ**，一種不同的 bZIP 因子）混淆——後者在 C/EBP 家族中沿用了「CHOP」這個簡稱。

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk between cell death mechanisms]] — 內質網壓力會活化核內 CHOP，後者誘導 PUMA 並因而觸發凋亡，進一步強化鐵死亡。
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging]] — 將 ATF4、ATF5 與 CHOP 定位為媒介 UPR^mt^ 訊號以誘導分子伴護蛋白、蛋白酶與抗氧化物的轉錄因子。
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in health and disease]] — 圖說將 CHOP 在 sirtuin–氧化壓力網絡中定義為 C/EBP-homologous protein。

## Connections
- [[Integrated Stress Response]] — CHOP 的誘導是 eIF2α 磷酸化下游的經典 ISR 輸出。
- [[eIF2α]] — 其經 PERK／GCN2／PKR／HRI 的磷酸化會觸發 ATF4，進而觸發 DDIT3 的轉錄。
- [[PERK]] — ATF4–CHOP 分支中的內質網壓力 eIF2α 激酶。
- [[ATF4]] — DDIT3 的直接與協同轉錄活化因子；同時也是 CHOP 的異源二聚化夥伴。
- [[ER Stress]] — 經典的觸發因子；內質網壓力誘導的凋亡是 CHOP 依賴性的。
- [[Apoptosis]] — CHOP 是使內質網受壓的細胞注定走向死亡的轉錄因子，方式是改變 BCL-2 家族的平衡並啟動死亡受體。
- [[Puma]]、[[Noxa]]、[[Bim]] — 由 CHOP 在轉錄層面活化的促凋亡效應器。
- [[Mcl-1]] — 被 CHOP 抑制的抗凋亡標的，會提高 Bax:Bcl-2 比值。
- [[DR5]] — 位於 CHOP 下游被活化的死亡受體，將內在型與外在型凋亡偶聯起來。
- [[Senescence]] — CHOP 媒介的生長停滯在慢性壓力下與衰老程式有所重疊。
- [[SIRT1]] — 在轉錄層面誘導 DDIT3，將 ISR 輸出與 NAD+ 依賴性的 sirtuin 活性連結起來。
- [[Stem Cell Exhaustion]] — 慢性的 ISR／CHOP 訊號伴隨著老化組織中的幹細胞衰退。
- [[Unfolded Protein Response]] — 更廣泛的內質網壓力程式，其促死亡分支即經由 CHOP 運作。

## Linking Summary
- 新增連結：[[Integrated Stress Response]]、[[Puma]]、[[Bim]]、[[Noxa]]、[[DR5]]、[[Multiple Myeloma]]、[[Glioblastoma]]
- 建議建立的註記：[[DDIT3]]、[[bZIP]]、[[TLS-CHOP]]、[[IP6K2-CHOP]]、[[Myxoid Liposarcoma]]、[[TRIB3]]、[[ATF3]]、[[Regulatory Domain Unmasking]]、[[eIF2α Kinases]] CEBPβ、GADD45、GCN2
- 應強化的重點連結：[[CHOP]] ↔ [[Integrated Stress Response]]、[[CHOP]] ↔ [[ATF4]]、[[CHOP]] ↔ [[ER Stress]]、[[CHOP]] ↔ [[Apoptosis]]