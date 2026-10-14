---
title: HSF1
description: 'HSF1（heat shock factor 1，HSTF1）是哺乳類的壓力活化型轉錄因子，會在熱壓力與其他蛋白毒性壓力下形成三聚體，結合熱休克元件啟動子中的反轉 NGAAN 重複序列，並誘導分子伴護蛋白網絡。它受 Hsp90 抑制而處於不活化狀態，並且是經過驗證的癌症依賴因子。'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription-factor
  - proteostasis
  - stress-response
  - cancer
aliases: [Heat Shock Factor 1, HSF 1, Heat shock transcription factor 1, HSTF1, HSF1_HUMAN]
---

# HSF1

## 概述

HSF1 是哺乳類主要的**熱休克因子**——一個壓力活化型轉錄因子，當壓力使蛋白質組錯誤摺疊時，它會誘導那些能恢復蛋白穩態的伴護蛋白基因。它屬於一個小家族（HSF1、HSF2、HSF3、HSF4；HSFY 是 Y 聯鎖變體），但 HSF1 是主要的熱誘導成員，也是唯一在熱休克反應中具有明確且必要角色的成員。

人類 HSF1 是一個 573 殘基的蛋白質（UniProt Q00613）。

## 結構與結構域

HSF1 由三個各自獨立調控的模組構成，這也是它的活化需要至少兩個不同結構轉變的原因：

- **N 端 DNA 結合結構域（DBD）**（約殘基 1–215）——一個 helix-turn-helix，帶有異常的 β-三明治「螺旋」次結構域；此處的 ATP/GTP 結合區有助於感測寡聚化狀態。
- **寡聚化結構域**（LZ1–LZ3，加上 C 端亮胺酸拉鍊區）——三段疏水性、類似亮胺酸拉鍊的重複序列。三聚化是第一個轉變：未受壓時的單體 HSF1 在壓力下變成同源三聚體，這才使 DBD 具備結合 DNA 的能力。
- **調控結構域**——LZ2 鄰近序列與 C 端**轉錄活化結構域（TAD）**。寡聚化與轉錄能力受*彼此不同*的機制控制，LZ2 及其下游序列與 TAD 相隔。這個模型是一種回摺結構，在未受壓時遮蔽 TAD，並藉由 HSF1 的修飾和／或促進因子的結合而開啟。
- **核定位訊號**——位於胺基端；它是由寡聚化而非構成性作用而解除遮蔽，因此靜止狀態下 HSF1 位於細胞質。

## 活化機制

> [!info] 三種狀態、兩次受調控的轉變
> **未受壓：** HSF1 是細胞質中、對 DNA 無活性的**單體**，由一個多伴護蛋白複合體維持於不活化構形，該複合體含有 **[[HSP90β]]**、FKBP4（[[FKBP12|FKBP52]] 家族伴護蛋白）、FKBP5、PPID（cyclophilin 40）、PPP5C（PP5）與 p23（PTGES3）。Hsp90 的結合可防止三聚化。
>
> **受壓：** HSF1 形成同源三聚體、轉位進入細胞核、結合 HSE，並在進一步磷酸化後獲得完整的轉錄能力，招募[[NRF1]]與[[NRF2]]類型的共活化因子、TTC5/STRAP，以及 p300/EP300。
>
> **衰減：** HSF1 被重新輸出，並重新被同一個 Hsp90 複合體隔離；受壓而變性的受體蛋白會與 Hsp90 競爭，因而解除對 HSF1 的抑制。

- **DNA 結合。** HSF1 結合啟動子中**五聚體 NGAAN 序列的反轉重複**（不完美與完美 NGAAN 配對的陣列），此即「熱休克元件」（HSE）。對人類 *HSPA1A*（hsp70）啟動子的全基因組定足分析，鑑定出五個連續的 NGAAN 序列作為 HSF1 結合位點。
- **標的基因。** *HSPA1A/B*、*HSPB1*、*HSPE1*、各類伴護蛋白，也包含非伴護蛋白標的，例如 FOXR1（其本身可活化 HSPA1A、HSPA6，以及依賴 NADPH 的抗氧化還原酶 DHRS2）。
- **正向與負向調控。** 在壓力下 IER5 會減弱 HSP90–HSF1 的結合，促進核內累積。DAXX 的結合可使 HSF1 脫離 Hsp90 複合體的抑制。JNK1 與 ERK 與 HSF1 的調控結構域交互作用，偏好在高度磷酸化型態下結合。IER5 驅動的 PPP2CA 介導去磷酸化（Ser121、Ser307、Ser314、Thr323、Thr367）會削弱此反應。BAG3 促進 HSF1 的核內穿梭。

> [!warning] HSF1 不只是熱感測器
> HSF1 可由多種蛋白毒性與代謝壓力活化，不僅是熱：氧化壓力、粒線體輸入壓力、重金屬、某些化學治療藥物以及葡萄糖缺乏。就機制而言，將它理解為**蛋白組摺疊容量**的感測器，而非溫度的感測器，是最恰當的。

## 非轉錄功能

- 在受熱壓力的細胞中，**抑制** Ras 所誘導的 *c-FOS* 轉錄活化。
- 以依賴 SYMPK（symplekin）的方式，正向調控 HSP70 前驅 mRNA 的 3' 端加工與多腺苷酸化，並參與 HSP70 mRNA 的核輸出——也就是說 HSF1 控制的不僅是 HSP 的轉錄，還包括其成熟。
- 以 DNA 損傷依賴的方式，扮演**非同源末端接合（NHEJ）DNA 修復的負向調節因子**。
- 調控有絲分裂進程。
- 藉由結合病毒 LTR 並招募 CDK9、CCNT1 與 EP300，重新活化潛伏的 HIV-1 轉錄。

## 生理角色

- **蛋白穩態監控。** HSF1 對持續性蛋白毒性壓力下的存活是必要的；Hsf1 敲除的纖維母細胞無法累積[[HSP70]]，且對熱、氧化壓力與重金屬呈現高度敏感。
- **粒線體壓力反應。** 無法輸入的粒線體前驅蛋白在細胞質中累積——例如人工設計的「塞子」（clogger）蛋白——會迅速且強效地活化 HSF1，進而誘導細胞質伴護蛋白與泛素—蛋白酶體系統。在酵母中，HSF1 位於 RPN4（其誘導蛋白酶體次單元）與 PDR3 的上游；在哺乳類中，等價反應是由 NRF1/NRF2 驅動且依賴 HSF1，並與細胞質伴護蛋白的氧化還原改變相偶聯。
- **產熱與運動。** HSF1 是[[FoxO1]]的轉錄標的，並可由運動以及骨骼肌中的交感神經／β-腎上腺素訊號誘導，在那裡它驅動收縮所產生熱量期間的伴護蛋白生物生成。它也參與禁食與熱量限制所誘導的壓力適應。

## 病理與臨床相關性

> [!important] HSF1 是經過驗證的癌症依賴因子
> - HSF1 藉由抑制原本會殺死增殖中細胞的蛋白毒性與氧化壓力，並藉由直接抑制腫瘤抑制因子 **p53**，以支持腫瘤的起始與維持；HSF1 在許多腫瘤中過度表達，且其基因喪失在小鼠模型中會損害腫瘤形成。
> - HSF1 促進浸潤與轉移，包括一種不依賴 p53 的機制，並藉由使細胞得以在蛋白毒性治療下存活而賦予**化療抗性與放射抗性**。
> - HSF1 以**依賴 IER5** 的方式促進癌細胞增殖，並與[[MYC]]協同作用。
> - **治療地位：** HSF1 是經過驗證但難以成藥的標的。臨床候選藥物 **NXP800**（一種 HSF1 途徑抑制劑）在臨床前與早期臨床研究中已顯示抗腫瘤活性。臨床前研究中的其他作法包括 maslinic acid（促進 HSF1 泛素化與降解），以及以 BAP1 調節 HSF1 活性。
> - **與 sirtuin 的連結：** [[SIRT1]]使 HSF1 去乙醯化。白藜蘆醇透過 SIRT1 介導的 p53 與 HSF1 去乙醯化，保護小鼠免受急性壞死性胰臟炎——就機制而言，去乙醯化的 HSF1 是活性較高還是較低並不清楚，因為乙醯化是 HSF1 具備轉錄能力所必需，而 SIRT1 活性會隨年齡下降。

## Documents

- [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis - 2023_NOV]] —— 粒線體輸入壓力（「塞子」蛋白）在酵母中迅速活化 HSF1，後者驅動 RPN4 與 PDR3 以提高細胞質伴護蛋白活性與泛素—蛋白酶體系統；哺乳類的 UPRmt 反應依賴 NRF1/NRF2 與 HSF1，並由「粒線體 ROS 加上細胞質蛋白累積」的雙重訊號觸發。
- [[_document_ - rubinsztein2011_autophagy_and_aging|rubinsztein2011_autophagy_and_aging]] —— 將 HSF1 列為 SIRT1 去乙醯化的轉錄因子之一（p53、NF-κB、HSF1、FOXO1/-3/-4、PGC1α）。
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease]] —— 白藜蘆醇藉由增強 SIRT1 介導的 p53 與 HSF1 去乙醯化，保護小鼠免受急性壞死性胰臟炎；HSF1 亦出現於 SIRT 代謝網絡圖中。

## Connections

- [[Heat Shock Proteins]] —— HSF1 的主要轉錄產物是伴護蛋白家族（HSPA1A、HSPB1、HSPE1、DNAJ、各類伴護蛋白）；沒有 HSF1，壓力反應的伴護蛋白一臂就會失效。
- [[HSP90β]] —— 在一個與 FKBP4/FKBP52、p23、cyclophilin 40 及 PP5 組成多伴護蛋白複合體中，Hsp90 將 HSF1 維持為不活化的單體；熱誘導的變性受體蛋白與其競爭，解除此抑制。
- [[SIRT1]] —— 使 HSF1 去乙醯化；SIRT1 活性隨年齡下降，而 HSF1 的乙醯化狀態決定其轉錄能力，將壓力反應與 NAD+ 可用性相偶聯。
- [[Resveratrol]] —— 活化 SIRT1，因而增加 HSF1 的去乙醯化；這是文獻報告其能防護急性壞死性胰臟炎的基礎。
- [[NRF2]] —— 在哺乳類粒線體錯誤摺疊反應中與 HSF1 協同；HSF1 驅動伴護蛋白，而 NRF1/NRF2 驅動蛋白酶體與粒線體生物生成基因。
- [[FoxO1]] —— 肌肉與肝臟中 HSF1 的上游轉錄調節因子，把禁食／AMPK 訊號與伴護蛋白生物生成連結起來。
- [[Proteasome]] —— HSF1 的誘導會在伴護蛋白之外提高泛素—蛋白酶體系統成分的表達；在酵母中，此作用是由 HSF1 下游的 RPN4 所介導。
- [[MYC]] 與 [[p53]] —— HSF1 與 MYC 協同驅動增殖，並抑制 p53 依賴性的壓力反應，使其成為致癌基因誘導性老化中的一個節點。
- [[Mitohormesis]] —— HSF1 是將粒線體輸入壓力轉換為細胞質蛋白穩態反應的轉錄執行者。
- [[FKBP12]] —— HSF1–Hsp90 複合體中的 FKBP 家族伴護蛋白 FKBP4/FKBP52 與 FKBP12 共用 FKBP 結構域；結合雷帕黴素與 FK506 的口袋，位於與「抑制 HSF1」者相同的蛋白家族中。

## Linking Summary

- 新增連結：[[Heat Shock Proteins]]、[[HSP90β]]、[[SIRT1]]、[[Resveratrol]]、[[NRF2]]、[[FoxO1]]、[[Proteasome]]、[[MYC]]、[[p53]]、[[Mitohormesis]]、[[FKBP12]]、[[HSPA8]]
- 建議建立的註記：[[HSF2]]、[[HSF4]]、[[Heat shock element]]、[[p23]]、[[PTGES3]]、[[Cyclophilin 40]]、[[PP5]]、[[PPP5C]]、[[STRAP]]、[[TTC5]]、[[IER5]]、[[BAG3]]、[[NXP800]]、[[FOXR1]]、[[DHRS2]]、[[Symplekin]]、[[HIV-1 long terminal repeat]]、[[Chaperone]] —— 因已存在而移除：DAXX、EP300、HSF1、HSP27、HSP70、Mitochondrial Unfolded Protein Response、Norepinephrine、P300、Thermogenesis、Unfolded Protein Response
- 應強化的重點連結：[[HSF1]] ↔ [[Heat Shock Proteins]]、[[HSF1]] ↔ [[HSP90β]]、[[HSF1]] ↔ [[SIRT1]] ↔ [[Resveratrol]]