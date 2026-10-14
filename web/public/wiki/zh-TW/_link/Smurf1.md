---
title: Smurf1
description: 具有 HECT 結構域的 E3 泛素連接酶，藉由使受體調節型 SMAD 泛素化來限制 TGF-beta 超家族訊號傳遞；它是成骨細胞分化與骨量的負向調節因子，且在小鼠中其缺失為胚胎致死。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - enzyme
  - ubiquitin
  - signaling
aliases: [SMURF1, Smad ubiquitination regulatory factor 1, HECW1, E3 ubiquitin-protein ligase SMURF1]
---

# Smurf1（E3 泛素連接酶）

**Smurf1**（SMAD ubiquitination regulatory factor 1）是一個長 757 個胺基酸（約 86 kDa）的 HECT 結構域 E3 泛素連接酶，藉由使受體調節型 SMAD 與其他受質泛素化，設定 TGF-beta 超家族訊號傳遞的強度與持續時間。它最初在 *Xenopus* 中被選殖，作為胚胎背腹圖式建立的調節因子，而其哺乳類同源基因 [[SMURF2]] 具有部分不重疊的受質集合。

> [!info] 核心機制
> Smurf1 是 TGF-beta/BMP 軸的負回饋調節因子。與配體結合的 [[TGF-beta Receptor|TGFBR1]] 使受體調節型 SMAD 磷酸化（TGF-beta 為 SMAD2/3；[[BMP]] 為 SMAD1/5/9）；累積的 SMAD 進入細胞核並轉錄標的基因——**包括 SMAD7**，後者接著將 Smurf1（與 Smurf2）重新招募回受體複合體。Smurf1 隨後使受體與 SMAD 泛素化，終止訊號。因此 Smurf1 正是關閉 SMAD7 這個開關所打開迴路的酵素，把暫時性訊號轉為自我限制的訊號。

## 結構域架構

- **C2 結構域**（N 端）— 介導脂質結合與膜上的定位，Smurf1 便是藉此被招募到活化受體與內體路徑。
- **WW 結構域**（兩個或三個）— 結合富含脯胺酸與 PPxY 的基序；用來停靠於訊號支架上，這些結構域也會被病毒蛋白劫持。
- **HECT 結構域**（C 端）— 催化結構域。HECT E3 連接酶會與泛素形成暫時性的硫酯中間體，並將其直接轉移至受質上的離胺酸，因此 Smurf1 受到*順式*（*cis*）調控，並需要自身的自我泛素化（由 NDFIP1 刺激）才能維持催化活性與穩定性。

Smurf1 本身會被 SCF^FBXL15 泛素連接酶複合體降解，該複合體在 Lys-381 與 Lys-383（以 Lys-383 為主要位點）使其泛素化。它也會與 Smurf2 形成雙聚體，兩者在數種情境中功能上互相依存。

## SMAD 之外的受質

Smurf1 的作用遠超出 TGF-beta/BMP 訊號傳遞，这也是它不斷出現在無關文獻中的原因：

- **Runx2** — 成骨細胞分化的主控轉錄因子。Smurf1 使 Runx2 泛素化，而 Smurf1-null 或 AMPK 位點突變小鼠具有高骨量與過早的成骨細胞分化。
- **胰島素受體** — Smurf1 使其成為降解標的；Smurf1 缺失會提高成骨細胞中的胰島素訊號並增加循環中的骨鈣素，在 knock-in 小鼠中造成高胰島素血症與低血糖。
- **MEKK2** — JNK 與非典型 NF-κB 路徑中的支架激酶。
- **RhoA** — 在 TGF-β 誘發的上皮—間質轉換後被標記，參與細胞骨架重塑。
- **FGFR2** — 去泛素化酶 OTUB1 抑制 Smurf1 以維持 FGFR2 的穩定性；OTUB1 缺失會造成骨量減少，而恢復 FGFR2 可挽救此現象。
- **LATS1/2** — Smurf1 介導的 LATS 降解會活化 Hippo 效應器 YAP/TAZ 並促進成骨細胞分化。HSP90β 是防止此現象的伴護蛋白，因此抑制 HSP90 會增加骨量。
- **TRAF 家族與 [[TNF Signaling|TNFR]] 路徑轉接蛋白** — 對 TNF、IL-1 與 RANKL 的非典型 NF-κB 活化。
- **Nedd9** 與其他參與細胞遷移的支架蛋白。

## 骨骼表型

Smurf1 最廣為人知的是它作為骨生成煞車的角色。成骨細胞特異性的 Smurf1 過量表現會減少出生後的骨形成，而全域 Smurf1 敲除會產生高骨量表型。AMPK 磷酸化位點 Ser-148 是關鍵的調節節點：阻斷 AMPK 磷酸化的 knock-in 可重現完整的敲除表型（Shimazu, Wei & Karsenty 2016），這將 Smurf1 置於骨中能量感知的下游。

> [!info] Smurf1、AMPK 與骨骼
> 這對本知識庫而言是一段真正有用的訊號架構：一個能量感測器（[[AMPK]]）使一個 E3 連接酶磷酸化，該連接酶的活性設定一個轉錄因子（Runx2）的穩態濃度，而輸出則是骨量。因此 Smurf1 是泛素—蛋白酶體系統通量作為輸出放大器（而非僅僅清廢者）最清楚的例子之一。

另一個特性明確的 Smurf1 表型是肌肉型的。Smurf1 藉由降解 Smad5 而促進肌肉分化，進而阻斷 BMP-2 誘發的成肌細胞骨源性轉換；此外，Smurf1 使鐵蛋白重鏈 1 泛素化，而 Smurf1 過量會觸發成肌細胞的鐵死亡。骨骼肌中的 Smurf1 也參與卸載誘發的肌萎縮與 ICU 獲得性肌無力（microRNA-542 藉由抑制 SMURF1 等抑制因子而提高 SMAD2/3 的磷酸化）。

## 疾病關聯與情境依賴性

Smurf1 依組織與受質不同，同時被報導為腫瘤抑制因子與腫瘤促進因子——這是 E3 連接酶常見的問題：

- 在 ERα 陽性的乳癌中 SMURF1 減少；降低 SMURF1 在體外與體內都會減少增殖，因此它在此處為腫瘤抑制因子。
- 在胃癌與透明細胞型腎細胞癌中，高 SMURF1 與較差的存活相關，在這些腫瘤中它具有致癌作用。
- 在帕金森氏症腦部與 α-突觸核蛋白模型中 SMURF1 升高，並增加 α-突觸核蛋白聚集；敲低可減少之。沉默 SMURF1 可抑制 HeLa P4/R5 細胞中的 HIV-1 複製。

> [!warning] 臨床注意事項
> Smurf1 是一個有吸引力但尚未被開發的標的——臨床上不存在以 Smurf1 為導向的療法。AMPK–Smurf1–Runx2 軸在小鼠遺傳學上機制乾淨，而 SMURF1 在神經退化與實體腫瘤中也有活躍研究，但此領域確實處於早期階段；「在一種組織中是腫瘤抑制因子、在另一種中卻是致癌基因」的模式意味著全身性抑制將難以拿捏。應將 Smurf1 視為研究標的，而非可成藥的節點。

## Documents

提及此實體的文件清單

- [[Smad7]] — Smad7 是把 Smurf1 招募到 TGF-beta 受體複合體的抑制型 SMAD；TGF-beta 訊號傳遞的抑制面基本上就是 SMAD7 加上 Smurf1（與 Smurf2）。

## 連結

- [[Smad7]] — Smad7 單獨本身毫無作用：它是一個停靠轉接蛋白，其主要生化角色是結合 TGFBR1 並招募 Smurf1/Smurf2 來使受體泛素化。Smurf1 是酵素，Smad7 是標定機制，兩者共同構成 TGF-beta 訊號傳遞中的典型負回饋迴路。
- [[SMURF2]] — Smurf2 是最接近的旁系同源基因，受質重疊但不完全相同，功能也部分不可替代。關於 Smurf1 在任一系統中的任何宣稱，都應與 Smurf2 的功能缺失資料互相對照，因為雙重敲除常常產生單獨敲除所沒有的表型。
- [[TGF-beta]] — Smurf1 的定義性角色是作為 TGF-beta 超家族訊號傳遞強度與持續時間的煞車。在 TGF-beta 訊號持續活化之處——纖維化、[[Aging]]相關的組織功能障礙、某些腫瘤——Smurf1 的缺失或錯定位就移除了這個煞車。
- [[TGF-beta Receptor]] — TGFBR1 是直接的合作對象：Smurf1 被招募到活化的受體（通常透過 Smad7），並使受體及其 SMAD 受質泛素化，驅動受體進入內體降解路徑。
- [[SMAD2]] — 受體調節型 SMAD2 是 Smurf1 的直接受質，介導 TGF-beta 訊號傳遞器本身的降解。
- [[SMAD3]] — Smurf1 對 SMAD3 的降解終止典型（canonical）TGF-beta 訊號傳遞，而這正是本知識庫 SMAD3 註記從轉錄層面所涵蓋的同一條軸。
- [[BMP]] — Smad1/5/9 是 Smurf1 所標記的 BMP 路徑 SMAD。這條途徑是 Smurf1 阻斷 BMP-2 誘發成肌細胞骨生成、並限制成骨細胞分化的方式。
- [[Ubiquitin]] — Smurf1 是 HECT E3 連接酶，因此它直接催化泛素轉移，而非作為支架作用。它對自我泛素化的需求，以及經 SCF^FBXL15 介導的周轉，兩者都是泛素系統的現象。
- [[Proteasome]] — Smurf1 的輸出是其受質的蛋白酶體降解，因此它設定的是蛋白質的穩態濃度，而非扮演開關的角色。泛素—蛋白酶體通量在訊號傳遞中確實是輸出放大器。
- [[Osteoporosis]] — Smurf1 的功能缺失會提高小鼠骨量，而 Smurf1/OTUB1/FGFR2 與 Smurf1/LATS/YAP 兩條軸在成骨細胞生物學中都是活躍的。這是最直接的轉譯接點，儘管 Smurf1 本身並非藥物標的。
- [[Ferroptosis]] — Smurf1 使鐵蛋白重鏈 1 泛素化，破壞鐵的儲存並將成肌細胞推向鐵死亡。這透過鐵的處理而非脂質過氧化酶，將 Smurf1 與本知識庫的鐵死亡群集連結起來。
- [[Inflammation]] — Smurf1 經由 MEKK2 與非典型 NF-κB 位於 TNFR 路徑下游，其活性受細胞激素訊號調節；發炎性細胞激素的暴露會改變 Smurf1 受質的可得性與定位。
- [[Parkinson's Disease]] — SMURF1 在患者腦部升高，並與 α-突觸核蛋白的負擔相關，且在細胞模型中調節其表現，因此它是神經退化中一個候選的蛋白穩態節點。

## 連結摘要

- 新增連結：[[SMURF2]]、[[TGF-beta]]、[[TGF-beta Receptor]]、[[SMAD2]]、[[SMAD3]]、[[BMP]]、[[Ubiquitin]]、[[Proteasome]]、[[Osteoporosis]]、[[Ferroptosis]]、[[Inflammation]]、[[Parkinson's Disease]]、[[AMPK]]、[[Runx2]]
- 建議建立的新實體註記：[[Runx2]]、[[Skeletal Muscle Atrophy]]、[[YAP/TAZ]]、[[Non-canonical NF-κB]]、[[MEKK2]]、[[Osteocalcin]]、[[FBXL15]] — 因已存在而移除：Hippo Pathway, SERCA2a
- 應強化的重點連結：[[Smurf1]] ↔ [[SMURF2]]、[[Ubiquitin]] ↔ [[Proteasome]]、[[TGF-beta Receptor]] ↔ [[Smad7]]
