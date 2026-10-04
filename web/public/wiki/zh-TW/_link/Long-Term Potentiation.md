---
title: 長期增益作用
description: 長期增益作用（LTP）是短暫高頻活動之後，突觸傳遞所產生的持續且具輸入專一性的增強，普遍被視為學習與記憶的主要細胞層級受質。
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - scientific-concept
  - neurophysiology
  - synaptic-plasticity
aliases: [LTP, Long-Term Potentiation (LTP)（長期增益作用）]
---

# 長期增益作用

**長期增益作用（LTP）**是在特定輸入途徑受到短暫高頻刺激之後，突觸強度所出現的持久增加。它最早由 Bliss 與 Lømo 於 1973 年在兔子海馬迴中描述，此後成為學習與記憶之突觸基礎的主要實驗模型。其定義性特徵為快速誘導（數秒至數分鐘）、極為持久（體外數小時至數天，體內則可終身），以及嚴格的輸入專一性——只有受刺激的途徑會被增強，而這正是最可能對應記憶之內容可定址組織的特性。

> [!warning] LTP 是一個模型，而非記憶的定義
> 從 LTP 到記憶的對應是一項強推論，而非已證實的同一性。經典 LTP 是在切片中以不自然的模式化刺激誘導，而行為動物的記憶形成涉及自然且持續調節的輸入。數種不同的可塑性機制——包括某些途徑中由內生大麻素介導的逆行增益作用——會產生功能上相似但誘導規則不同的「增益作用」，因此「LTP」並不指涉單一的分子機制（PMID: 42500746）。

## 誘導：什麼觸發增益作用

標準誘導程序為高頻刺激（HFS，通常 100 Hz 持續 1 s）或 theta-burst 刺激，施加於海馬迴的 Schaffer collateral → CA1 突觸。誘導需要兩個同時滿足的條件：

- **突觸後去極化** 解除[[NMDA receptor|NMDA 受體]]上電壓依賴性的 Mg²⁺ 阻斷，使鈣離子可經由無法阻斷的配體門控通道內流。
- 受刺激的突觸前末端釋放**麩胺酸**，占據 NMDA 受體的甘胺酸位點並提供配體。

由此產生的突觸後局部鈣離子上升——其振幅與持續時間以不同方式編碼不同階段——是整個級聯的近端觸發因素。以 D-AP5 阻斷 NMDA 受體會消除實驗誘導的絕大多數 LTP，此一觀察在 1980 年代重塑了整個領域。

> [!info] 並非所有增益作用都依賴 NMDA
> 某些形式的 LTP 由 NMDA 受體非依賴性機制介導；在 lateral perforant path → 齒狀回（dentate gyrus）突觸中，增益作用可由突觸後誘導，卻透過增加傳遞物質釋放而在突觸前表現，並由內生大麻素提供逆行訊息。CA1 的 theta-burst LTP 亦會徵召代謝型麩胺酸受體訊息傳遞，而對代謝型與離子型 NMDA 訊息傳遞的相對依賴程度在兩性之間有所差異（PMID: 42500746）。

## 表現：讀值與階段轉換

表現指的是突觸後細胞對單次測試刺激的反應，其誘發的突觸後電位比誘導前更大。表現機制會隨 LTP 的時間進程而改變：

- **早期 LTP（E-LTP，約 1–2 小時）**——主要為受體修飾：更多 AMPA 家族的[[Glutamate]]受體插入突觸後致密區、傳導增加，以及受體去敏感化減少。
- **晚期 LTP（L-LTP，數小時至數天）**——需要新的基因轉錄與蛋白質合成，涉及[[c-Fos]]等立即早期基因，以及後續的結構重塑。
- **結構階段**——樹突棘擴大、突觸後致密區擴張，以及肌動蛋白細胞骨架重組。這是與體內觀察到的極長持續時間關聯最密切的階段。

從鈣離子到轉錄的訊息傳遞經由[[Calmodulin]]與鈣／鈣調蛋白依賴性蛋白激酶[[CaMKII]]（後者同時是突觸後致密區中主要的自體磷酸化支架成分），並經由[[ERK]]／MAPK 分支進行。

> [!important] Hebbian 框架
> LTP 在「一起放電的細胞會連接在一起」這個意義上是 Hebbian 的，但其誘導規則比這句口號更精確：增益作用需要相關聯的突觸前與突觸後活動，且強度必須足以產生 coincidence detection。這個突觸後 coincidence 的要求也是聯結式學習之所以能運作的機制原因——一個只受到弱刺激的突觸，不會僅因為突觸後細胞在其他地方強烈放電就獲得任何增益。

## 調節與調控

LTP 並非固定的讀值；它受細胞生理狀態的閘控。

- **多巴胺**——一種「閘控」訊號。經由 cAMP 與 PKA 的多巴胺 D1 家族受體訊息傳遞，是海馬迴中 LTP 持久性所必需；缺乏它，增益作用會迅速衰減。這是獎賞在記憶鞏固中既定角色的機制基礎（PMID: 42500746）。
- **雌激素**——局部合成的雌二醇作用於突觸雌激素受體，會偏置 LTP 的機制；雌性較依賴此途徑，而雄性在 CA1 theta-burst 典範中較依賴代謝型 NMDA 訊息傳遞（PMID: 42500746）。
- **蛋白質合成抑制劑**——cycloheximide 與 anisomycin 會阻斷 L-LTP 卻不影響 E-LTP，證明晚期階段需要新的蛋白質。
- **發炎與氧化壓力**——[[Neuroinflammation]]與升高的[[Reactive Oxygen Species|ROS]]會同時損害誘導與表現。在慢性低度發炎的模型中，小膠細胞活化與細胞激素上升會抑制 LTP，將 LTP 直接連結到[[Inflammaging]]的認知表型。

## 臨床關聯

- **阿茲海默氏症。** LTP 受損是 AD 模型中最早可測量的突觸缺失之一，出現於明顯的神經元流失之前。可溶性類澱粉β 寡聚體藉由結合 NMDA 與 AMPA 受體並破壞棘突結構而壓抑 LTP；與認知衰退相關性最佳的是海馬迴可溶性類澱粉β 寡聚體，而非斑塊（PMID: 42645161）。Tau 的過度磷酸化同樣會干擾 LTP。海馬迴樹突棘密度降低是一項一致的屍檢發現。
- **帕金森氏症。** 多巴胺能訊息傳遞喪失會損害 LTP 的多巴胺依賴性穩定化，促成可能先於運動症狀出現的學習與記憶缺失（PMID: 42645161）。
- **癲癇。** 反覆發作會產生*興奮性*突觸增益作用（一種發作點燃過程）——同一套編碼記憶的 NMDA 依賴性機器，卻在沒有正常限制它的閘控下運作。這就是為何[[NMDA receptor|NMDA 受體]]拮抗劑如 memantine 與 perampanel 被用於抗癲癇，也是為何過度的麩胺酸訊息傳遞是[[Excitotoxicity]]的基礎。
- **認知老化。** 海馬迴 LTP 的年齡相關衰退是重複性良好的發現，且可透過環境豐富化、運動與飲食介入部分逆轉。

> [!warning] 應避免的常見錯誤陳述
> LTP 並不單純是「更多神經傳遞物質」。它主要是突觸後受體數量與功能的改變，而非釋放增加。它也不是永遠依賴 NMDAR、永遠不可逆，或侷限於海馬迴。而在切片製備中能增強 LTP 的藥物，並不因此就被證明能改善人類記憶。

## 文件

- [[_document_ - Creatine in Health and Disease|Creatine in Health and Disease]] — discusses brain creatine deficiency across creatine synthesis and transporter disorders, framed in terms of the cognitive consequences of reduced brain energy substrate availability; LTP is the mechanistic link between brain energy status and cognition.
- [[_document_ - Mitochondrial dysfunction in cellular senescence a bridge to neurodegenerative disease|Mitochondrial dysfunction in cellular senescence: a bridge to neurodegenerative disease]] — connects mitochondrial impairment to synaptic dysfunction, providing the energetic upstream of impaired LTP induction.

## 連結

- [[NMDA receptor]] — 負責 coincidence detection 的鈣離子通道，其無法阻斷的活化是絕大多數經典 LTP 的近端誘導觸發因素；對它的藥理學阻斷是本領域的奠基性工具。
- [[Glutamate]] — 突觸前傳遞物質，其釋放與突觸後去極化同時發生，滿足了 NMDA 受體活化所需的配體條件。
- [[Hippocampus]] — LTP 被發現且研究最多的製備，尤其是 Schaffer collateral → CA1 突觸；其迴路架構使輸入專一性在實驗上可被測量。
- [[CaMKII]] — 鈣活化的激酶，既將誘導訊號轉導為 AMPA 受體插入，又藉由自體磷酸化在突觸後致密區內形成增益狀態的穩定分子記憶。
- [[c-Fos]] — 一種立即早期基因，其誘導是判斷刺激是否被轉換為持久轉錄記憶痕跡的標準讀值，也是 LTP 穩定性的常用實驗標記。
- [[Excitotoxicity]] — 疾病與發作中過度的 NMDA 受體活化，會產生同一套可塑性機制的病理版本；在[[Epilepsy]]與神經退化中針對 NMDA 拮抗劑的治療邏輯，皆立足於此重疊。
- [[Alzheimer's Disease]] — 可溶性類澱粉β 寡聚體與 tau 病變會抑制 LTP 與棘突密度，使增益作用受損成為認知衰退的早期突觸相關表現。
- [[Inflammaging]] — 慢性低度神經發炎會損害 LTP 的誘導與表現，提供全身免疫老化導致認知損害的一項機制。

## 連結摘要

- 新增連結：[[NMDA receptor]]、[[Glutamate]]、[[Hippocampus]]、[[CaMKII]]、[[c-Fos]]、[[ERK]]、[[Calmodulin]]、[[Excitotoxicity]]、[[Epilepsy]]、[[Alzheimer's Disease]]、[[Parkinson's Disease]]、[[Tau]]、[[Inflammaging]]、[[Neuroinflammation]]、[[Reactive Oxygen Species]]、[[Synapse]]、[[Neuron]]
- 建議建立的筆記：[[AMPA Receptor]]（表現側受體；目前尚未建立，且為完成 NMDA／AMPA 誘導—表現配對所必需）、[[Memory Consolidation]]、[[Synaptic Plasticity]]、[[Dendritic Spine]]、[[Immediate Early Genes]]、[[Metabotropic Glutamate Receptor]]、[[Long-Term Depression]]、[[Protein Synthesis]]（晚期 LTP 的機制基礎）
- 建議強化的強連結：[[Alzheimer's Disease]] ↔ [[Long-Term Potentiation]]（本筆記中臨床意涵最重的一條連結，目前僅在阿茲海默氏症那一側有記載）、[[Excitotoxicity]] ↔ [[Long-Term Potentiation]]（同一套機器，相反的輸出）。
