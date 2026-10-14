---
title: XRCC1
description: 'XRCC1 是一個催化惰性的核內支架蛋白，負責組織 DNA 單股斷裂修復。它在鹼基切除與核苷酸切除損傷處將 PARP1、DNA 聚合酶 beta、多核苷酸激酶、Aprataxin 與 DNA 連接酶 III 組裝成具功能的修復複合體。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - dna-repair
  - base-excision-repair
  - scaffold
  - aging
aliases: [X-ray Repair Cross Complementing 1, X-ray repair cross-complementing protein 1, SCAR26 protein]

---

# XRCC1

**XRCC1**（UniProt P18887；人類基因座 19q13.31，633 個胺基酸殘基）是一小群 **DNA 單股斷裂修復支架**蛋白的奠基成員。它沒有已知的內源性酵素活性。其功能純粹是架構性的：將[[Base Excision Repair|BER]]與[[Nucleotide Excision Repair|NER]]的序列性酵素依正確順序聚集在正確位置，並防止修復失控進行。

> [!info]
> **核心機制一句話說明。** [[PARP1]] 偵測單股斷裂，進行自我多聚 ADP-核糖基化，而 XRCC1 透過其中央結構域結合該多聚 ADP-核糖鏈而被招募。接著 XRCC1 將斷裂交給 DNA 聚合酶 beta 進行缺口填補、交給多核苷酸激酶進行 5′ 端磷酸處理，最後交給 DNA 連接酶 III 封合。

## 結構與結構域

XRCC1 有**三個球狀結構域，由兩個彈性連接子相連**，長度約為 150 與 120 個胺基酸殘基（London, *DNA Repair* 2015; PMID 25795425）。每個結構域服務反應中的一個步驟：

| 區域 | 殘基（約略） | 結合伙伴 | 在修復中的角色 |
| --- | --- | --- | --- |
| N 端結構域（NTD） | 1–110 | DNA 聚合酶 beta | β 三明治核心；亦結合帶缺口／帶切口的單股 DNA |
| 連接子 1 | 約 111–220 | REV1、PARP1 二聚化、核定位序列 | 核輸入；易錯性的跨損傷聚合酶停泊 |
| 中央結構域 | 約 221–400 | 多聚 ADP-核糖鏈 | 將 XRCC1 招募至損傷處的 PARP1 |
| BRCT 結構域 II | 約 471–536 | DNA 連接酶 III、PNKP、Aprataxin、APLF | 後段步驟的交接 |
| C 端 BRCT 結構域 | 538–629 | DNA 連接酶 III | 連接步驟 |

2008 年由 NMR（EBI）與水晶構造解析的結構捕捉到單一的 **β 三明治 N 端結構域**（PDB 1XNA、1XNT、1CDZ），它同時結合 DNA 缺口與聚合酶 beta 複合體。

> [!info]
> 兩個 BRCT 模組**並非都**與連接酶 III 結合。**C 端 BRCT 結構域（538–629）**才是直接結合 DNA 連接酶 III 的那一個，錨定最終的連接步驟；內部類 BRCT 區域則是 Aprataxin、PNKP 與 APLF 的停泊位。這種分工正是為何 C 端 BRCT 的點突變可廢除連接功能而缺口填補仍完整。

## 調控角色

- **PARP1 煞車。** XRCC1 不只是招募 PARP1；它會*負向調控* PARP1 的 ADP-核糖基轉移酶活性，防止過度 PAR 化，並使細胞延後至損傷可被修復的時間點之後才繼續。失去這個煞車會產生 PARP1 抑制劑抗藥性的表型。
- **氧化還原感知。** N 端結構域結合已氧化的 DNA，使 XRCC1 不僅位於烷基化與輻射損傷處，也位於[[Reactive Oxygen Species|ROS]]攻擊的產物處。
- **寡聚化。** XRCC1 形成同源二聚體；在 **Ser371** 的磷酸化會造成二聚體解離，而 CK2 的磷酸化則促進在端接合情境中使用的 Aprataxin／APLF 交互作用。
- **SUMO 化。** 可被 SUMO 化，其功能意義尚未完全釐清。
- **轉錄拴繫。** 與 PCNA、APEX1（AP endonuclease 1）、TDP1、CHEK2 及 DNA 聚合酶 iota 交互作用——APEX1 的交互作用由[[SIRT1]]誘導，並隨 APEX1 乙醯化而增強，將去乙醯化酶與鹼基切除修復連結起來。

## 生理功能與老化

由於 XRCC1 幾乎位於所有單股斷裂化學反應的匯聚點，其缺失在氧化壓力挑戰到來之前都意外地能被良好耐受。鹼基切除修復每天每個細胞要處理數千個源自正常[[Mitochondrial ROS|代謝性 ROS]]的氧化損傷鹼基。

- **老化。** 在老化的人類脂肪來源幹細胞中，受損的是 BER——而非雙股斷裂修復——而下降的因子正是 XRCC1；過量表現 XRCC1 可恢復 BER 功能（Zhang et al., *Aging Cell* 2020, PMID 31782607）。Gln399 多型性已被認為與對菸草相關及年齡相關 DNA 損傷的較高易感性有關。
- **神經保護。** XRCC1 的部分缺失會增加腦部 DNA 損傷並惡化小鼠缺血性中風的復原（Ghosh et al., *Neurobiology of Aging* 2015, PMID 25971543）——缺血期間的氧化壓力恰恰在神經元最無法承受其修復系統失效的時刻大量湧入。
- **減數分裂。** 在生殖細胞中表現，減數分裂中間產物的處理需要 XRCC1。

## 疾病與臨床關聯

XRCC1 在 DNA 修復蛋白中相當特殊：**兩個方向的改變**都與癌症有關，因為它參與兩條突變潛力相反的路徑。

> [!warning]
> **Cisplatin／PARP 抑制劑抗藥性。** XRCC1 是修復 cisplatin 所致損傷所必需的。在數種腫瘤模型中，XRCC1 缺陷細胞對 cisplatin **過度敏感**，而 XRCC1 的缺失已被用作預測鉑類反應的生物標記。這與「修復越多＝抗藥性越強」的直覺相反，也是支持將 XRCC1 當作臨床分層因子的最強烈理由。

- **脊髓小腦共濟失調，體染色體隱性，26 型（SCAR26）。** 雙等位基因 XRCC1 變異會造成進行性小腦共濟失調，伴隨動眼失用、周邊神經病變，以及遠端無力與反射消失（PMID 28002403）——是極少數由單一單股斷裂修復支架直接引起的人類孟德爾疾病之一。
- **NSCLC 中的過量表現。** 非小細胞肺癌中 XRCC1 偏高，在轉移性淋巴結中更高，是反覆出現的預後發現。
- **缺失與腫瘤抑制。** 帶有截斷型 XRCC1 等位基因的雜合小鼠，在結腸、黑色素瘤與乳腺癌致癌模型中顯示腫瘤生長受抑制。其解釋是：XRCC1 是**微同源序列介導的端接合**所需的六種蛋白之一——一條會產生缺失的易錯性替代端接合路徑。在此 XRCC1 是*促進*突變性修復的因子，因此降低它可降低癌症進展——與古典的 DNA 修復典範正好相反。
- **交互作用資料集中記載的其他伙伴：** APLF、APTX、CHEK2、POLI、TDP1。

## Documents

- [[_document_ - Roles of SIRT3 in aging and aging-related diseases]] — 將 XRCC1 置於 SIRT3 的核內 DNA 修復／基因體穩定性網路中，與 PARP1 及 NHEJ 中的 Ku70/80、mtDNA 損傷修復並列。

## Connections

- [[PARP1]] — 不可或缺的上游感知者。XRCC1 由 PARP1 的多聚 ADP-核糖鏈招募，隨後回饋以煞住 PARP1 的催化活性，因此 PARP 抑制劑抗藥性與 XRCC1 狀態在機制上互相耦合。
- [[PARP2]] — 同族的 PARP 家族成員，也與 PARP1 及 XRCC1 共同參與有效的鹼基切除修復；兩者彼此部分補償。
- [[SIRT1]] — 去乙醯化 APEX1，在無鹼基位處增強 APEX1–XRCC1 的交互作用，這是一條讓長壽因子觸及單股斷裂修復的途徑之一。
- [[Base Excision Repair]] — XRCC1 所組織的路徑。每個被氧化或烷基化的鹼基都會成為單股斷裂，必須經過由 XRCC1 拴繫的聚合酶 beta 步驟。
- [[Nucleotide Excision Repair]] — XRCC1 也在 NER 的缺口填補與連接步驟中作用，因此其受質並不限於無鹼基位。
- [[Ku70]] — 兩套系統在同一類損傷處交會：Ku70/80 將 NHEJ 機構固定在雙股斷裂處，而 XRCC1 引導單股中間產物，SIRT3 則位於兩者上游。
- [[Nucleotide Excision Repair]] 與 [[Ionizing Radiation]] — 輻射是單股斷裂與無鹼基損傷的典型來源，而 XRCC1 最初正是作為互補此類損傷的基因被辨識出來。

## Linking Summary
- 新增連結：[[PARP1]]、[[PARP2]]、[[SIRT1]]、[[Base Excision Repair]]、[[Nucleotide Excision Repair]]、[[Ku70]]、[[Ionizing Radiation]]、[[Mitochondrial ROS]]
- 建議建立的新實體註記：[[DNA Polymerase Beta]]、[[DNA Ligase III]]、[[Aprataxin]]、[[Polynucleotide Kinase]]、[[APLF]]、[[PCNA]]、[[APEX1]]、[[REV1]]、[[Microhomology-Mediated End Joining]]、[[XRCC1 Polymorphisms]]
- 應強化的重點連結：[[XRCC1]] ↔ [[PARP1]] ↔ [[Base Excision Repair]]；[[XRCC1]] ↔ [[SIRT1]] ↔ [[APEX1]]