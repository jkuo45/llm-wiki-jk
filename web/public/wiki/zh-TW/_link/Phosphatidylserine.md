---
title: Phosphatidylserine
description: 磷脂醯絲胺酸是陰離子性胺基磷脂，在健康細胞中侷限於質膜內葉；其外露於外葉是驅動胞葬作用的通用「eat-me」訊號，同時也是膜彎曲與 Ca2+ 依賴性凝血複合體組裝所必需的負電荷。
protected: false
created: 2026-09-29
updated: 2026-10-23
tags: [lipid, cell-membrane, apoptosis]
url: #
source: #
aliases: [Phosphatidylserine, PS, PtdSer, 磷脂醯絲胺酸, 1,2-Diacyl-sn-glycero-3-phospho-L-serine]
---

# Phosphatidylserine

**磷脂醯絲胺酸**（PS；PtdSer）是陰離子性胺基磷脂——二醯甘油骨架上接絲胺酸頭基，通常 sn-1 為飽和鏈、sn-2 為不飽和鏈。人體幾乎完全在**內質網**合成，隨後運送並維持於質膜內葉。由於其頭基帶 −1 電荷且高度水合，在外葉（疏水環境）能量上不利，因此內葉濃度極高。

## 不對稱分布與其喪失

此不對稱由主動機制維持：**ATP11C** 與 ATP11B flippase 消耗 ATP 將 PS 由外葉翻回內葉，而 Ca2+ 活化的 scramblase **Xkr8** 則反向運送。健康細胞中 flippase 活性占優勢，外葉幾乎不含 PS。

> [!warning] 臨床提醒
> 這種不對稱是主動維持的脆弱梯度，而非熱力學預設狀態。任何失去 flippase 活性或取得 scramblase 活性的細胞都會成為吞噬目標——這正是 PS 外露可用於診斷（Annexin V 染色）與預後判斷的原因，也是攜帶外露 PS 的胞外囊泡往往在遞送有效載荷前即被快速清除的原因。

在[[Apoptosis|凋亡]]過程中，此機制依特定順序被拆解：**caspase 切割 ATP11C**（使 flippase 失效），同時 **caspase 活化的 Xkr8（與 TMEM16F）** 被活化，兩者合力造成快速、不可逆、全細胞性的 PS 外露。[[Necrosis|壞死]]時的外露則不同——呈斑塊狀，源自膜完整性喪失而非酵素調控——因此 PS 對凋亡的特異性遠高於對壞死。

## 「Eat-me」訊號

表面 PS 是哺乳類免疫系統中被研究最透徹的 eat-me 訊號，由一系列受體直接辨識：

- **TIM-4**（巨噬細胞與樹突細胞）——結合 PS 但不自行傳遞訊號，屬「繫留」角色，真正的吞噬訊號來自同一顆粒上的整合素
- **BAI1** 與 **MerTK**——分別經 [[GAS6]]／[[MerTK]] 與 ELMO/DOCK180/Rac 傳訊
- **Stabilin-2** 與 **MFG-E8**——將 PS 橋接至 αvβ3／αvβ5 整合素
- **Annexin V**——並非受體，而是標準實驗探針；螢光標記的 Annexin V 以高親和力、Ca2+ 依賴方式結合 PS，是流式細胞凋亡偵測得以成立的基礎

除吞噬之外，PS 亦在凋亡細胞表面攜帶趨化因子，形成「find-me」梯度招募[[Monocytes|單核球]]與嗜中性球至細胞死亡部位。

> [!info] 吞噬需要「允許」而非僅有「觸發」
> PS 外露常被描述為允許性（permissive）而非指令性（instructive）。關鍵機制是：胞葬作用是**主動且耗能**的過程，吞噬細胞必須生成膜並啟動 Rac 驅動的肌動蛋白重塑才能內化屍體。PS 辨識提供地址標籤，但下游吞噬機器必須完好；在喪失清除能力的巨噬細胞中，PS 陽性屍體會堆積而非被移除。

## 凋亡之外：凝血、膜形狀與肌纖維

> [!warning] 文獻較少但後果重大
> PS 是 **tenase 複合體**的必需輔因子——即 [[Factor XIIIa]] 活化的 Xa、[[Prothrombin|凝血酶原]]與膜表面磷脂組裝成 prothrombinase 複合體——亦與磷脂 scramblase（PLSCR1）功能相關。這說明為何活化血小板上的 PS 外露具功能意義，也為何血漿 PS 濃度可反映凝血活性：少量膜上 PS 的效率遠高於可溶性脂質，陰離子表面需求是真正的開關，而非速率的微調。

- **膜彎曲**：PS 頭基小、帶強負電且高度水合，偏好雙側彎曲的膜，這也是其集中於內葉的物理原因；它參與膜形狀的形成，而不只是被動乘客。
- **骨骼肌**：肌膜的 PS 集中於橫小管系統，對 dystrophin–醣蛋白複合體的膜交互作用不可或缺；PS 定位喪失是多種肌肉失養症報告的早期特徵。
- **膜性胞器**：PS 富集於粒線體內膜面向基質的一側，粒線體 PS 有獨立的合成與重塑酵素；它也是粒線體外膜通透化表面的一部分，參與[[Apoptosis|凋亡]]訊號。

## Eryptosis

在成熟紅血球中，PS 外露是[[Eryptosis|eryptosis]] 的定義性讀數——即無核紅血球 Ca2+ 驅動的受調控死亡。確認 eryptosis 需 PS 外露**加上**細胞質 Ca2+ 上升：Ca2+ 抑制 flippase 並活化 [[Scramblase|scramblase]]，Annexin V–FITC 結合為黃金標準檢測。由於膜仍完整且 PS 具免疫抑制性，PS 陽性細胞通常在數分鐘內即被[[Efferocytosis|胞葬作用]]吞噬，搶在任何[[Hemolysis|溶血]]釋放促發炎 DAMP 之前。PS 陽性紅血球本身亦具促凝與黏附性，在尿毒症、敗血症、糖尿病與吸菸情況下增加血栓與內皮負擔。上游驅動因素包括能量耗竭（[[PKC]] 活化）、氧化壓力，以及[[Sphingomyelinase|鞘磷脂酶]]產生的[[Ceramide|神經醯胺]]。

## Documents

- [[Annexin V]] — 建立 PS 為其配體；本條目提供該配體的生化學與背後 scramblase／flippase 機制。
- [[RAGE]] — 將 PS 列為 RAGE 配體之一，屬證據較弱、特徵化較少的配體類別；胞葬作用文獻仍是 PS 生物學更可靠的背景。

## Connections

- [[Apoptosis]] — PS 外露是凋亡的經典、caspase 調控之表面變化，使瀕死細胞可被辨識
- [[Annexin V]] — PS 外露的實用探針，也是流式與組織學凋亡偵測的基礎
- [[Annexin A1]] — 在低 pH（吞噬溶酶體內條件）下優先結合 PS，促進吞噬體成熟與清除
- [[Efferocytosis]] — PS 最為人所知的過程；與[[Necrosis|壞死]]的斑塊狀外露區分
- [[RAGE]] — 報告可結合 PS，但證據強度不及 RAGE–AGE 或 RAGE–HMGB1
- [[Prothrombin]] — PS 豐富的血小板膜組裝 prothrombinase/tenase 複合體以生成凝血酶
- [[Dystrophin]] — 橫小管系統中的肌膜 PS 為醣蛋白複體功能所必需
- [[Monocytes]] — PS 結合的趨化因子形成「find-me」梯度
- [[Apoptotic Bodies]] — 保留外露 PS 的膜性碎片，本身是重要清除途徑
- [[Eryptosis]] — PS 外露是紅血球死亡程式的定義性讀數
- [[Scramblase]] — Ca2+ 活化的 scramblase 在 eryptosis 中瓦解 PS 不對稱
- [[PKC]] — ATP 耗竭驅動的 PKCα 活化是 Ca2+ 上升與 PS 外露的上游路徑之一

## Linking Summary

- 待補連結：[[Efferocytosis]]、[[Xkr8]]、[[ATP11C]]、[[Phospholipid Asymmetry]]、[[TIM-4]]、[[MFG-E8]]、[[Platelet Activation]]
- 建議強化：[[Phosphatidylserine]] ↔ [[Apoptosis]]（caspase→Xkr8/ATP11C 的順序應雙向陳述）
- 2026-10-23：新增 eryptosis 段落；本 zh-TW 版於 2026-11-01 建立。
