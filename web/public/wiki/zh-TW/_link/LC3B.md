---
title: LC3B
description: '微管相關蛋白 1B 輕鏈 3（MAP1LC3B），為哺乳類中含量最豐富的 ATG8 家族蛋白。LC3B 會被脂質化至自噬體內膜，並透過 LIR 標記辨識，作為膜上結合貨受體的結合平台；它是自噬流量的標準生化標記。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - autophagy
aliases: [MAP1LC3B, LC3-2, MAP1-LC3B, LC3B]
---

# LC3B

LC3B 是微管相關蛋白 1B 輕鏈 3，基因符號為 *MAP1LC3B*。它是哺乳類六種 ATG8 家族蛋白中含量最豐富、使用最廣泛的一種，也是幾乎所有「自噬被上調」實驗所測量的對象。

> [!warning] 術語歧義
> 文獻中未加字母後綴的「LC3」被鬆散地用來指整個家族，或專指 LC3B。本筆記僅討論 **LC3B**。哺乳類 ATG8 家族包含 LC3A、LC3B、LC3C、[[GABARAP]]、GABARAPL1 與 GABARAPL2；LC3 次家族作用於自噬體的形成，GABARAP 次家族則作用於成熟／融合階段。

## 結構與結構域

LC3B 是一種小型蛋白質（細胞質前驅物約 14 kDa，脂質化後約 26 kDa），具有泛素摺疊，其組成包括：

- 一段終止於 ATG4 蛋白酶所暴露之 `Gly` 的 **N 端臂**。
- 一個**C 端核心**表面，其上排列著兩個 LIR 結合口袋，即疏水性的 type-1（HP1）與 type-2（HP2）槽位，用以結合 WxxL 型 LIR 標記中的 Trp 與 Leu，並由一個埋藏的 Phe 側鏈提供大部分的結合能量。
- 一個與 LIR 口袋 1 重疊的**微管結合區**。這正是 LC3 最初被描述為微管相關蛋白的原因，也正是高解析度影像可能將 LC3 陽性的斑點與微管相關性混淆的原因。
- 一個 N 端**退化標記（degron）**，為關鍵的降解訊號。LC3B（以及 LC3C）帶有被 ATG4B 蛋白酶辨識的顯著 degron；LC3A 則缺乏它，這是 LC3A 在多數組織與細胞型中累積量遠高於 LC3B 的主因之一。

## 脂質化與 LC3-I / LC3-II 檢驗

LC3B 在兩種狀態之間循環，兩者之間的比值是自噬的標準代理指標：

> [!info] 機制
> 在養分充足的細胞中，LC3B 位於細胞質且未經修飾（**LC3-I**，膠體上約 16 kDa）。ATG4 切下 N 端臂，暴露出一個 Gly，該殘基隨後由 ATG12–ATG5–ATG16L1 複合體連同 ATG8 脂質化機器接至**磷脂乙醇胺**（**LC3-II**，已脂質化，約 14 kDa 加上脂質）。LC3-II 會被招募進正在形成的[[Autophagosome|自噬體]]的內膜與外膜，而位於*內*膜上的 LC3B 會在自噬體成熟並與[[Lysosome|溶酶體]]融合時被擠出至細胞質。去偶聯由 ATG4 負責；在外膜上的 LC3B 則隨自噬體一起脫落，接著被泛素化並由蛋白酶體清除。

**核心的詮釋注意事項：**由於 LC3-II 同樣會被溶酶體降解，LC3-II 偏高在意義上模稜兩可。它可能代表*形成了更多自噬體*，也可能代表*自噬體形成了但溶酶體被阻斷*（例如使用 V-ATPase 或溶酶體蛋白酶抑制劑時）。只有在搭配對流量敏感的成對測量（在有無溶酶體阻斷下的 LC3-II 周轉，或串聯 GFP-LC3 報導器）時，此測量才具有人們以為的意義。本知識庫中關於熱量限制的文件正是指出這一點：以 chloroquine 阻斷自噬體–溶酶體融合，會產生與真正流量增加時相同的 LC3-II 與 p62 上升。

> [!info] 來源：[[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> 該 SIRT1/sirtuin 綜述引用證據指出，SIRT1 活化劑會以濃度依賴的方式增加 LC3B 表現並促進 p62/SQSTM1 的降解；AMPK/SIRT1 路徑的活化則透過 p62 的下調促進自噬流量。

## 非典型功能

LC3B 所做的事遠多於標記自噬體：

- **選擇性自噬。** LC3B 是自噬體膜上供可溶性貨受體停靠的平台——[[p62]]、NBR1、NDP52、optineurin——各自透過泛素結合（UBA/UIM）結構域將多泛素化的貨載物繫住，再經由結合於 LC3B 口袋的 LIR 標記連接。Parkin 依賴性的[[Mitophagy|粒線體自噬]]即以此方式進行：PINK1 在外膜蛋白上建立泛素鏈，而與 parkin 相關的受體則將該泛素鏈橋接至 LC3B。
- **脂滴與溶酶體相關的自噬。** 已有報告指出 LC3B 可獨立於自噬體形成之外，脂質化至大型脂滴的表面。
- **非典型分泌路徑。** LC3B 可獨立於核心自噬機器，偶聯到分泌路徑的單層膜囊泡上（包括 LAMP1 陽性的囊泡）。
- **微管與免疫訊號。** LC3B 會與 tubulin 及訊號複合體相關聯，而核膜損傷後與無菌性發炎相關的 LC3B／lamin B1 核膜結合作用是依賴 LIR 的。

## 病理與臨床關聯

> [!info] 來源：[[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> 該 sirtuin 綜述將 LC3B 置於一個涉及 SIRT1、Atg5、Atg7、Atg8、p62 與 AMPK 的多步驟自噬級聯反應中，並指出 SIRT1 被報導會與 Atg5、Atg7 與 Atg8 形成分子複合體，且單靠它本身就足以刺激基礎自噬速率。

涉及 LC3B 的自噬缺陷已在神經退化疾病中被描述，其表現為本應帶有 LIR 標記並被交予自噬體的聚集物發生累積。在臨床上，LC3B 免疫組織化學染色、GFP-LC3 斑點計數以及 phospho-S65 LC3 染色都被用作研究讀值，而 phospho-S65 是比總 LC3B 更具專一性的活化標記。在生物學上，提升 LC3B 究竟有益（送達更多貨載物）還是有害（LC3B 同時也是自噬受質與可干擾素誘導的發炎支架）仍是長久以來的開放問題；多數證據支持情境依賴性。

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]——將 LC3B 置於 cAMP/PKA–AMPK–SIRT1 軸中 SIRT1 的下游，報告 SIRT1 驅動的 LC3B 表現增加與 p62 降解，並描述 SIRT1 與 Atg5/Atg7/Atg8 形成複合體以刺激基礎自噬。

## Connections

- [[LC3]]——涵蓋 LC3A、LC3B、LC3C 與 GABARAP 次家族的家族層級筆記；LC3B 是 LC3 次家族中的主要成員。
- [[GABARAP]]——同源的 ATG8 次家族；LC3 蛋白作用於自噬體生成的較早階段，GABARAP 蛋白則作用於成熟與融合。
- [[LIR Motif]]——LC3B 的兩個疏水性口袋所結合的 WxxL 共識序列；這是所有 LC3B 依賴性選擇性貨載物辨識的分子基礎。
- [[p62]]——可溶性貨受體的原型，將多泛素化的聚集物連結至脂質化的 LC3B；是標準 LC3-II/p62 流量配對中的另一半。
- [[Autophagosome]]——LC3B 是自噬體的構成性膜標記，襯於內外兩層界限膜上。
- [[Mitophagy]]——受體媒介與 parkin 依賴性的粒線體自噬都匯入 LC3B：NIX、BNIP3、FUNDC1 與 p62 都利用 LIR 標記停靠於 LC3B。
- [[Parkin]]——Parkin 在受損粒線體上建立泛素訊號；粒線體自噬受體隨後將該訊號橋接至 LC3B 以進行吞噬。
- [[Atg4B]]——既創造 LC3B 成熟位點、又對脂質化 LC3-II 進行去偶聯的蛋白酶；也是 LC3B 自身 degron 使其成為偏好受質的原因。
- [[Autophagy]]——LC3B 的脂質化是大自噬起始的典型生化讀值。
- [[Selective Autophagy]]——LC3B 的 LIR 結合表面，是所有選擇性自噬路徑匯聚的共用膜平台。

## Linking Summary
- 新增連結：[[LC3]]、[[GABARAP]]、[[LIR Motif]]、[[p62]]、[[Autophagosome]]、[[Mitophagy]]、[[Parkin]]、[[Atg4B]]、[[Selective Autophagy]]、[[Lysosome]]、[[Lipid Droplet]]
- 建議建立的筆記：[[MAP1LC3A]]、[[MAP1LC3C]]、[[ATG8 Family]]、[[LC3-interacting Region]]、[[Phospho-S65 LC3]]
- 應加強的強連結：[[LC3B]] ↔ [[LC3]]（家族筆記應明確說明哪個成員對應哪個）、[[LC3B]] ↔ [[p62]]（流量配對的邏輯記錄於 p62 側，但此處未提及）