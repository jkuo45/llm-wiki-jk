---
title: Separase
description: 在後期（anaphase）開始時切割黏連蛋白、釋放姊妹染色單體使各自移向子細胞的半胱胺酸蛋白酶；其活性由 APC/C 依賴的 securin 降解所把關。
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [enzyme, cell-cycle, mitosis]
url: #
source: #
aliases: [ESPA1, Separase, Separin, ESP45, 分離酶]
---

# Separase（分離酶）

**Separase** 是有絲分裂關鍵事件的執行者：切割維繫姊妹染色單體的[[Cohesin|黏連蛋白]]複合體，使染色單體得以分別移向兩極。其活性是嚴格控制、不可逆的開關，失準即造成染色體錯誤分離，構成[[Aneuploidy|非整倍體]]的基礎。

## 結構與結構域

Separase 是約 200 kDa 的類天門冬胺酸半胱胺酸蛋白酶，由兩個以柔性連結區相連的結構域組成：

- **N 端類磷酸酶結構域（PLC）**——採開放「B 域」構形，活性位點於此組裝；無已知磷酸酶活性，角色為調控與結構性。
- **C 端蛋白酶結構域（C 域）**——含催化三聯體（His、Asp、Cys）與 SEPARASE 基序。
- **連結區／「安全栓」**——未活化時 C 域貼靠 PLC 域而埋住活性位點，連結區另一段保守區形成自抑制的「安全栓」。兩項限制都須解除，酵素才能切割受質。
- Separase 以二聚體運作；N 端結構域亦結合調控蛋白 securin。

## 機制與途徑

1. **黏連蛋白裝載**：含 [[Cohesin|SMC1/3]] 的黏連蛋白環於 G1 裝載至染色體，kleisin 次單元（SCC1/Rad21）保護著絲點區；黏連蛋白維繫姊妹染色單體並為紡錘體組裝檢查點的張力感測所必需。
2. **由 APC/C 解除保險**：中期至後期轉換時，[[Anaphase Promoting Complex-Cyclosome|APC/C]] 與其共活化因子 [[CDC20]]、Cdh1 使 [[Securin]] 泛素化並被蛋白酶體降解——在此之前 securin 一直抑制 separase。
3. **活化**：securin 消失使安全栓鬆脫，PLC 與 C 域轉為活性構形；完整活性另需 Ca²⁺／鈣調素以及 Cdk1 與 Plk1 的磷酸化。
4. **切割黏連蛋白**：Separase 於兩個位點切割 kleisin 次單元（哺乳類為 SCC1/Rad21），黏連蛋白環打開、姊妹染色單體解連，紡錘體得以將各染色單體拉向子細胞。
5. **下游**：黏連蛋白移除亦解除對[[Centromere|著絲點]]的束縛，容許後期紡錘體完整伸長。

## 生理功能

Separase 是染色單體分離的單一控制點，對 G2 期姊妹染色單體黏連的維持與中期→後期轉換不可或缺；它在減數分裂中亦釋放軸向元件，使第一次減數分裂得以進行。其活性並參與紡錘體解組與有絲分裂退出，且與 DNA 損傷反應互動：未修復的 DNA 損傷活化紡錘體檢查點並阻斷 APC/C，使 separase 持續受抑。

## 病理與臨床意義

- **染色體不穩定與非整倍體**：separase 過度表現或定位錯誤造成染色單體提前分離，產生非整倍體子細胞與[[Genomic Instability|基因體不穩定]]——[[Cancer|癌症]]與多種年齡相關疾病的標誌。
- **癌症**：separase 過度表現與乳癌、大腸直腸癌與卵巢癌的預後不良相關；被視為治療標的，以小分子抑制劑與疫苗策略（SEP2 胜肽免疫治療已進入試驗）推進。
- **先天疾病**：活化 separase 的輔因子 *ESCO2* 雙等位突變造成[[Charcot-Marie-Tooth Disease Type 2A|CMT2A]] 系列神經病變，*ESCO1* 突變造成 Cornelia de Lange 症候群，確認 separase 功能對發育的重要性。
- **老化**：染色體錯誤分離隨年齡在幹細胞與前驅細胞中累積，將 separase 的保真度與[[Cellular Senescence|細胞衰老]]及組織再生連結起來。

## Documents

- （尚無文件註記）

## Connections

- [[Cohesin]] — 被切割以釋放姊妹染色單體的受質
- [[Securin]] — 直到後期才抑制 separase 的 APC/C 受質
- [[Anaphase Promoting Complex-Cyclosome]]／[[APC-C]]／[[CDC20]] — 經分解 securin 來「解除保險」的 E3 連接酶
- [[Sister Chromatids]] — separase 所執行分離的結構
- [[Mitosis]]／[[Cell Division]]／[[Cell Cycle]] — separase 作用的過程
- [[Aneuploidy]]／[[Genomic Instability]] — 染色單體分離失調的後果
- [[Spindle Assembly Checkpoint]]／[[Mad2]]／[[BubR1]] — 防止 separase 提前活化的監視系統
- [[Centromere]]／[[CENP-A]] — 束縛黏連蛋白並於後期釋放的染色質區域
- [[Condensin]]／[[KIF5B]] — 黏連解除後運作的機器
- [[Cancer]]／[[Charcot-Marie-Tooth Disease Type 2A]] — separase 與其輔因子的疾病情境

## Linking Summary

- 於 `src/notes/_link/` 建立（無單一主題歸屬的共享細胞週期蛋白酶）。
- 待補連結：[[ESCO2]]、[[Separase Inhibitor]]、[[SCC1]]、[[Precocious Sister Chromatid Separation]]
- 建議強化：[[Separase]] ↔ [[Cohesin]]、↔ [[Securin]]、↔ [[Anaphase Promoting Complex-Cyclosome]]
- 2026-11-01：建立 zh-TW 譯本。
