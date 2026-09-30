---
title: LRO
description: 溶酶體相關胞器是一類分泌與儲存區室，具有類似溶酶體的酸性腔室，但裝載專一的內容物；其中以秀麗隱桿線蟲的腸顆粒最具代表性，也包含人類的黑色素體與血小板緻密顆粒。
created: 2026-09-29
updated: 2026-09-29
tags:
  - cell-type
  - organelle
  - autophagy
  - lysosome
aliases: [Lysosome-Related Organelle, Lysosome Related Organelles, Gut Granules, LROs]
---

# LRO（溶酶體相關胞器）

**溶酶體相關胞器**（LROs）是一類區室，與溶酶體共享酸性的、含水解酶的腔室以及膜拓撲，但可藉由其*內容物*區分，並因它們是專一化生物發生程序的產物，而非經由典型的晚內體成熟路徑形成。

其定義性的構造特徵是內部界限膜。因此一個 LRO 就是一個*位於*膜包覆囊泡內的溶酶體——這正是那些內容物被送至終末、不再融合的終點（例如黑色素體或分泌顆粒）的區室之特徵。

> [!info] 為何需要這個類別
> LROs 不是「用來存放別的東西」的溶酶體；它們是被轉派去做不同工作的溶酶體。人類黑色素細胞製造黑色素體，血小板製造緻密顆粒與溶酶體，
> 細胞毒性 T 細胞製造溶解顆粒——全都來自同一套內體系統，全都需要共享的生物發生機制。為這個共享類別命名，能讓這套機制變得可讀。
> 在[[C. elegans]]中，同樣的邏輯讓這個詞有了它最有用的一個具體實例：**腸顆粒**。

## 秀麗隱桿線蟲的腸顆粒

在線蟲中，腸顆粒是腸細胞的 LROs，也是這種動物的脂肪儲存場所。它們：

- **在胚胎發育期間形成**，填充脂質，之後在攝食中的成體基本上呈惰性。
- **在[[Fasting]]與[[Starvation]]期間被動員**，此時由[[HLH-30]]（*C. elegans* 的 TFEB 直系同源物，與[[MXL-3]]協同作用）驅動的轉錄程序會在腸道中誘導溶酶體脂肪酶——主要是[[LIPL-1]]與[[LIPL-3]]。
- **對禁食期間的存活至關重要**：脂肪酶或顆粒本身缺失，會造成儲存脂質無法動員，並在飢餓條件下（而非食物充足時）產生「遲滯」的幼蟲停滯。

這使腸顆粒成為一個極為乾淨的實驗系統：脂肪儲存在一個其動員受明確轉錄調控的胞器中，並且有一個可溶性報導物（RAB-7 陽性、帶 PGP-2 標記的顆粒）可用顯微鏡計數。*C. elegans* 中的自噬與脂質儲存表型，幾乎總是以腸顆粒數量、大小或折射率的變化來測量。

> [!warning] 轉譯上的注意
> 從 *C. elegans* 腸顆粒到人類胞器的對應關係是真實但不完整的。腸顆粒確實是真正的 LRO，但最常與之相比的人類胞器——[[Melanocyte|黑色素體]]——
> 在內容物（黑色素 vs. 脂質）、發育來源上皆不同，而且人類脂肪細胞是把脂質儲存在細胞質中的[[Lipid Droplet|脂滴]]，而非 LRO 中。
> 因此不應假定腸顆粒的表型能預測人類脂肪細胞的儲存生物學。

## 生物發生機制

人類 LRO 的生物發生依賴一組不同於典型溶酶體形成的蛋白質，而它們的失效會造成具診斷意義的人類疾病：

- **BLOC 複合體（BLOC-1、BLOC-2）**與 **HPS1–HPS5**——黑色素體成熟所必需；*HPS* 突變造成[[Hermansky-Pudlak Syndrome|Hermansky-Pudlak 症候群]]（眼皮膚白化症合併出血體質，部分型別另有肉芽腫性結腸炎與肺纖維化）。
- **AP-3 與含[[VPS33A]]的運輸模組**以及 **VPS45**——分選不同的 LRO 內容物；缺失會同時損害黑色素體與溶解顆粒。
- **LYST**——調控溶酶體大小與融合的 BEACH 結構域蛋白；*LYST* 突變造成 Chediak–Higashi 症候群，伴隨巨大顆粒與免疫缺陷。
- **Griscelli 症候群第二型（RAB27A）**——白細胞缺乏色素合併免疫缺陷，因為同一步驟的運輸同時運送黑色素體與溶解顆粒。
- **[[ABCD1]]**——過氧化體膜轉運蛋白；在 X 聯鎖性腦白質養養不良症中缺陷，而這是一種髓鞘[[Lipid Peroxidation|脂質]]的儲積病——不同的區室，但同一種疾病原型。

> [!info] C. elegans 相關因子
> 在 *C. elegans* 中，[[PGP-2]]——一種與人類 ABCG5/ABCG8 類固醇轉運蛋白相關的 ABC 家族轉運蛋白——對腸顆粒的生物生成至關重要，並被用作
> LRO 區室的標準膜標記。*pgp-2* 缺失會使腸顆粒消失。IRF 家族及類似的上游因子也是顆粒形成所必需，但 *C. elegans* 文獻對其特定生化角色的
> 記載較為稀少，我無法有把握地逐一查證個別基因的指派，因此不予斷言。

## LRO 作為人類溶酶體儲積病的模型

由於 LRO 的生物發生缺陷 (a) 為單基因、(b) 可藉由顯微鏡觀察到顆粒增大或消失、(c) 適合進行遺傳抑制篩檢，因此它是研究[[Lysosomal Storage Diseases]]相對容易處理的模型系統。這是 *C. elegans* 在儲積病基因研究上大量採用的策略，也可與以[[Neurodegeneration]]為重點的人類文獻互補——在人類那邊，相關胞器無法直接觀察。

## 連結

- [[LIPL-1]] — 其腔室定位即為 LRO 的溶酶體三酸甘油酯脂肪酶，而禁食期間由 HLH-30 誘導其表現，正是腸顆粒脂質被動員的原因。從 LRO 到儲存脂肪再到可溶性脂肪酶的這條連結，就是整個禁食反應的架構。此 stub 的入向文件連結保留於 Documents 區段。

- [[PGP-2]] — 在 *C. elegans* 中其存在定義了 LRO 的生物發生，也是用來計數與測量腸顆粒大小的標準膜標記。其缺失會使該區域消失。此 stub 的第二個入向文件連結予以保留。

- [[Lysosome]] — LROs 與溶酶體共享酸性腔室與水解酶組合，但它們不是溶酶體；LRO 這個類別的存在，正是為了標記那些生物發生、內容物與命運都不同的成員。

- [[HLH-30]] — *C. elegans* 的 TFEB 家族轉錄因子，在飢餓時轉位入細胞核，誘導分解 LRO 內容物的脂肪酶。這是 LRO 脂質動員的轉錄開關。

- [[TFEB]] — 哺乳類的直系同源家族。TFEB/TFE3 對溶酶體與 LRO 程序的保守調控，正是 *C. elegans* 禁食模型在概念上能轉移至哺乳類自噬與脂噬的原因。

- [[MXL-3]] — *C. elegans* 的轉錄因子，在養分充足時抑制 LIP 家族脂肪酶，因而避免攝食狀態下不適當的 LRO 脂質動員。

- [[LIPL-3]] — 第二種腸脂肪酶，與 LIPL-1 協同從 LRO 內容物釋放脂肪酸。兩者功能部分重疊；單一突變子的表型比雙突變子溫和。

- [[Lysosomal Lipolysis]] — LROs 存在所要服務的過程。在 *C. elegans* 中是 LIP 家族脂肪酶於 LRO 腔室內水解儲存的甘油三酸酯；在哺乳類中，等價過程發生在[[Lipid Droplet|細胞質脂滴]]上，由 ATGL 與 HSL 執行——這正是腸顆粒無法直接對應轉譯的主要原因。

- [[Lipophagy]] — 脂質被選擇性運送至溶酶體降解。LRO 內的脂肪酶是脂噬在 *C. elegans* 中的實作，而 LRO 系統正是為了作為哺乳類該路徑容易處理的替代模型而建立的。

- [[Lipid Droplet]] — 就脂質儲存的功能而言，它是腸顆粒在哺乳類中的對應物，但構造上不同：脂滴是由細胞質單層膜包覆的液滴，而非雙層膜的酸性 LRO。這個對比是把 *C. elegans* 的研究應用於人類脂肪儲存時最重要的一件事。

- [[Lysosomal Acid Lipase]] — 人類 LAL/LIPA 基因產物是 LIP 家族脂肪酶在 *C. elegans* LRO 內作用的功能性直系同源物；其缺失造成胆固醇酯儲積病與 Wolman 病。本資料庫的 LIPL-1 註記明確使用了此同源關係。

- [[ABCD1]] — 區室特異性脂質疾病的一個鄰近例證：一種過氧化體轉運蛋白，其缺失造成髓鞘脂質儲積病。與 LRO 儲積病並列可見，「脂質儲積障礙」指的是一族區室特異的缺陷，而不是單一路徑。

- [[Alzheimer's Disease]] 與 [[Microglia]] — 小膠細胞的溶酶體在發育上源自卵黃囊巨噬細胞譜系，因此在發育上與多數組織的溶酶體不同；神經退化模型中所報告的顆粒大小／溶酶體儲存表型，經常涉及這個與 LRO 相鄰的區室。

- [[Autophagy]] — LRO 的生物發生與巨自噬在晚內體共享分選機制。因此研究 LRO 的運輸，也就是研究自噬體形成同樣依賴的那些分選決策。

- [[C. elegans]] — LRO 生物學最易處理的研究系統，也是本註記選擇以線蟲而非人類為對象的原因。

## Documents

提及此實體的文件清單

- [[LIPL-1]]
  - 此 stub 的入向文件連結，予以保留。提供執行 LRO 內容物脂質動員的 LRO 內脂肪酶。
- [[PGP-2]]
  - 此 stub 的入向文件連結，予以保留。提供定義該區室的 LRO 膜標記與生物生成需求。

## 連結摘要

- 新增連結：[[Lysosome]]、[[LIPL-3]]、[[HLH-30]]、[[TFEB]]、[[MXL-3]]、[[Fasting]]、[[Starvation]]、[[Lipid Droplet]]、[[Lysosomal Lipolysis]]、[[Lipophagy]]、[[Lysosomal Acid Lipase]]、[[ABCD1]]、[[Melanocyte]]、[[Microglia]]、[[Autophagy]]、[[Lysosome Biogenesis]]、[[LAMP1]]、[[Rab7]]、[[C. elegans]]、[[Neuronal Ceroid Lipofuscinosis]]、[[Lysosomal Storage Diseases]]、[[Neurodegeneration]]
- 建議建立的新實體註記：[[Gut Granule]]、[[Hermansky-Pudlak Syndrome]]、[[Chediak-Higashi Syndrome]]、[[Griscelli Syndrome]]、[[LYST]]、[[BLOC Complex]]、[[Melanosome]]、[[Platelet Dense Granule]]、[[Lytic Granule]]、[[VPS33A]]、[[RAB27A]]、[[Lipa Gene]]、[[Cholesteryl Ester Storage Disease]]、[[Wolman Disease]]
- 應強化的重點連結：[[LRO]] ↔ [[PGP-2]]、[[LRO]] ↔ [[LIPL-1]]、[[LRO]] ↔ [[Lipid Droplet]]、[[LRO]] ↔ [[HLH-30]]、[[LRO]] ↔ [[Lysosome]]、[[C. elegans]] ↔ [[Autophagy]]
