---
title: "Parthanatos 未解問題 — 網路文獻更新"
description: "以 2014–2026 年文獻更新 Moura 等人 2024 年提出的全部 17 個未解問題，外加 Q18 PARG 執行性綜合——NAD／糖解／PARG／游離 PAR／TRPM2-Ca2+／Nudix-AMP-自噬／AIF-MIF／凋亡串擾。"
created: 2026-09-08
updated: 2026-09-09
type: task-output
tags:
  - parthanatos
  - parp1
  - nad-plus
  - glycolysis
  - parg
  - arh3
  - aif
  - mif
  - trpm2
  - nudix
  - ampk
  - autophagy
author: []
---

# Parthanatos 未解問題 — 網路文獻更新

日期：08_Sep_2026 12:00 PM PDT；09_Sep_2026 擴充至全部章節
來源框架：Moura 等人 2024，"Molecular mechanisms of cell death by parthanatos: More questions than answers"（PMC11445734）——5 個章節共 17 個問題逐字收錄，外加一個內文補充問題（Q18，非 Moura 原文）。以下更新整合 2014–2026 年文獻。

## 1. 決定 NAD 補充能否阻止 parthanatos 誘導的因素是什麼？

**現況：具脈絡依賴性，現已可用機制解釋。方向：NAD 僅能挽救 NAD 中心分支，無法挽救 PAR–hexokinase 分支。**

- NAD 中心證據（星形膠質細胞、僅含葡萄糖的培養基）：Alano 等人 2004、2010；Ying 等人 2005——外源性 NAD+、pyruvate、α-ketoglutarate 可阻止死亡；FK866 耗竭 NAD 單獨即可表型模擬。Zong 等人 2004——依賴糖解的細胞更敏感，pyruvate 可挽救。某些條件下 NR/NMN 可挽救：Nishida 等人 2022；Santofimia-Castaño 等人 2022。
- PAR 中心反證（皮質神經元、LN428 膠質母細胞瘤）：Andrabi 等人 2014（PNAS 111:10209）；Fouquerel 等人 2014（Cell Rep 8:1819）——深度 FK866 NAD 耗竭若無 PARP 過度活化，不會造成 ATP／糖解崩潰；NR 補充可恢復 NAD 池，但無法挽救 ECAR／糖解或 ATP 流失。
- 新浮現的決定因素：
  1. **PAR 負荷 vs NAD 流失**：若產生 PAR 聚合物（PARP 過度活化＋PARG 內切活性），單獨補 NAD 不足。若死亡主要由無大量游離 PAR 爆發的 NAD／能量衰竭驅動，則補 NAD 可挽救。
  2. **碳源可用性**：培養基中的 pyruvate／glutamine 可繞過 hexokinase 阻斷，掩蓋 NAD 效應（Andrabi 2014；Alano 作者群自己也標示了 aCSF 僅含葡萄糖的人為假象）。
  3. **區室化**：核／胞質 NAD 快速平衡 vs 獨立的粒線體池（Cambronne 2016；Covarrubias 2021）；粒線體 PARP1 池＋SLC25A51 NAD 轉運體（Girardi/Kory/Luongo 2020）意味全細胞 NAD 量測會誤導。胞質 NAD 決定糖解；粒線體 NAD 決定呼吸。
  4. **NAD 補救成本**：每輪 ADP-ribose 的完整 NAD 補救需耗費 4 個高能磷酸鍵（Moura Fig.2）；高 PAR 周轉下，補救本身加深 ATP 流失——補充前驅物可能餵養 PARP、加劇 PAR 爆發（參 NAMPT→NAD→PARP 在乾癬模型、斑馬魚 2021 中助長 parthanatos；NAD 生合成高的卵巢癌 PARPi 抗性 2024）。
  5. **PARG/ARH3 狀態**（見下方 2026 預印本）：完全抑制 PARG 可解除 NAD 耗竭（仍發生）與 ATP 耗竭／細胞死亡（被阻止）的耦合——單看 NAD 讀值無法預測存活。
- 實務方向：務必報告（a）培養基（僅葡萄糖 vs ＋pyruvate）、（b）區室解析的 NAD＋PAR 量、（c）PARG/ARH3 活性、（d）NR/NMN 劑量時序。以 NAD＋pyruvate vs 單獨 NAD 拆解兩分支。

## 2. 糖解抑制對 parthanatos 細胞死亡而言是必要且／或充分的嗎？

**現況：核心但單獨既非嚴格必要亦非充分。方向：糖解阻斷是相關性最佳的代謝病灶；AIF/MIF DNA 切割是平行的致死臂。**

- 支持必要性：pyruvate/α-ketoglutarate 繞道在 NAD 中心與 PAR 中心模型中皆可挽救死亡（Ying 2002/2003；Zong 2004；Andrabi 2014）——與糖解阻斷為瓶頸一致。OGD 模型 2024（FASEB J 202302559R）：PARP 抑制或 WT-HK1／PAR 結合突變 HK1 過表現可同步改善糖解＋粒線體功能＋氧化還原＋存活。
- 反對充分性：（a）Bax/calpain KO 細胞：NAD+ 下降但存活如 DPQ 處理的 WT（引自 IJMS 2022 綜述）——僅有代謝病灶而無 AIF 釋放不足以致死。（b）存在不依賴 AIF 的 parthanatos——視網膜細胞、巨噬細胞、HK-2、胰臟模型呈現 PARP 依賴性死亡而無可偵測的 AIF 轉位（Moura 2024 Table 1）。（c）PARP1 KO MCAO 中 ATP 量不總是追蹤梗塞體積（同上）。
- HK1 之外的糖解標的：腎臟 I/R 中 GAPDH PAR 化抑制糖解（Devalaraja-Narashimha 2009）；Krebs 循環酶（SDH、α-KGDH、PDH）出現於 PAR 交互作用體（Fouquerel 2014 suppl.）。
- PPP 推論：HK 阻斷餓死 PPP → NADPH/GSH 流失（Hossain 等人 2024；Andrabi 2014 Fig.5E）——氧化還原崩潰可能是糖解抑制真正的致死輸出，而非 ATP 本身。
- 方向：在單一系統中以正交挽救檢驗必要／充分性——（i）PBM 突變 HK1 knock-in、（ii）pyruvate＋GSH-ester＋NADPH 支持、（iii）MIF 核酸酶抑制劑（Park 等人 2022）± 糖解挽救。若挽救糖解而未阻斷 AIF 仍死亡（DNA 片段化持續），則糖解為促成因素而非充分條件。

## 3. 游離 PAR 鏈如何抑制 hexokinase 活性？

**現況：兩種非互斥機制，最受支持的模型＝直接 PAR 結合 PBM＋VDAC 解離。方向：PBM 阻斷肽／pbmHK-1 knock-in 為決定性檢驗。**

- HK1/HK2 含有強 PAR 結合基序（PBM）（Gagné 等人 2008；Andrabi 2014 Fig.5A；Fouquerel 2014 MS）。證據：
  - MNNG 處理後 PAR 與 HK1 共免疫沉澱；總 HK 蛋白不變，活性在 15 分鐘下降——早於 NAD+ 下降（Andrabi 2014）。
  - 純化 PAR 在裂解液中直接抑制 HK 活性；經 PARG 預消化的 PAR 無此作用（Andrabi 2014 Fig.5D；Fouquerel 2014 體外試驗）。
  - 需 PBM：Fouquerel 證明 PBM 依賴性抑制；2024 OGD 論文：PAR 結合突變 HK-1（pbmHK-1）過表現相較 WT-HK1 可保護糖解／粒線體／氧化還原／存活。
- 定位機制：HK1 平時錨定於外粒線體膜 VDAC，將糖解與 OXPHOS 耦合。MNNG 造成 HK1 由粒線體 mobilize 至胞質並伴隨活性喪失（Fouquerel 2014；Saraiva 2010 前例；Ullu 2002——釋放降低膜電位、促進死亡）。模型：胞質 PAR 結合 HK1 → 構形抑制及／或 VDAC 解離。
- 未解子問題（仍無答案）：
  - 抑制劑是游離 PAR 還是蛋白結合型 PAR？PARG 內切酶產生游離鏈；外切酶產生單體（Barkauskaite 2015——外切為主）。游離鏈如何以足夠長度／複雜度逃過核內 PARG 抵達胞質仍未知；鏈長／分支度與毒性相關（Andrabi 2006 BioPorter PAR 遞送）。
  - PARG 悖論：PARG-KD 在 LN428 挽救糖解（Fouquerel），但 PARG 過表現在神經元挽救（Andrabi）——意味劑量／脈絡決定 PARG 是製造抑制劑（游離 PAR）還是摧毀它（Mashimo 2013 雙功能假說）。
  - AIF–HK 連結：Andrabi 假設 PAR 誘導的 AIF 釋放破壞 AIF–HK 交互作用，加劇 HK 流失——未驗證。
- 方向：（a）HK1–PAR 複合體冷凍電鏡／結構、鏈長滴定；（b）PAR 處理前後 VDAC–HK1 FRET；（c）具 PARG53 剪接變異意識的 PARG 操作（見 §5／2026 預印本）；（d）在同一裂解液中檢驗 GAPDH 共抑制。

## 4. NAD+ 與 ATP 耗竭在機制上相連嗎？

**現況：相連但可解離——至少三條耦合路徑加一個解耦證明。方向：視為 PAR 周轉的平行輸出，而非單一線性鏈。**

- 耦合路徑：
  1. **NAD 作為輔因子**：NAD+ 流失限制 GAPDH/LDH/TCA/NADH→OXPHOS（古典自殺假說，Berger 1985；Ha & Snyder 1999）。
  2. **補救成本**：由 NAM＋ADP-ribose 衍生 R5P/PRPP 再合成 NAD，每循環耗費 4 個 ATP 當量（Moura Fig.2；Formentini 2009；Buonvicino 2013）。高 PAR 周轉 → ATP 燃燒＋AMP 累積 → ANT 抑制（阻斷 ADP 進入粒線體）→ ATP 合成進一步衰竭。
  3. **PAR–HK 糖解阻斷**（§3）→ 糖解 ATP 衰竭 → 繼發性粒線體衰竭（pyruvate/glutamine 挽救證明神經元粒線體缺陷大半為糖解下游——Andrabi 2014）。
  4. **Nudix → AMP → AMPK–mTORC1**：ADP-ribose 經 Nudix 轉為 AMP＋R5P；AMP/ATP 上升活化 AMPK、抑制 mTORC1（Ethier 等人 2012）——連結能量狀態與自噬反應，其保護／致死角色未明。
- 解耦證明（最新）：
  - Andrabi/Fouquerel 2014：FK866 NAD 耗竭 → 僅呼吸缺陷，無糖解／ATP 崩潰；MNNG → 糖解／ATP 崩潰先於 NAD 下降。
  - **2026 預印本（de Moura/Hoch 實驗室，bioRxiv 2026.05.12.724507）**：完全抑制 PARG 阻止 ATP 耗竭與 parthanatos，但不阻止 NAD+ 耗竭——NAD 與 ATP 形式上解耦；低殘留 PARG 即足以致死；RPE1/MNNG 系統中 ARH3 KO 無效應。證明 PAR 生成＋PAR 水解皆為必要；ATP 比 NAD 更能追蹤死亡。
- 方向：同孔中時間解析、區室解析的 NAD/ATP/AMP/PAR＋ECAR/OCR；PARG 滴定（不只 KO vs WT——KO 混雜 PARP1 自身 PAR 累積／Gogola 2018）；Nudix-KD 定量 AMP 路徑貢獻；SLC25A51 操作檢驗粒線體 NAD 臂。

## 5. 凋亡與 parthanatos 之間有更廣泛的串擾，還只是相互拮抗（能量阻斷 vs PARP1 切割）？

**現況：比兩節點教科書圖譜更廣泛。方向：BID–calpain–BAX–AIF 軸＋AIF/MIF 核酸酶＋89-kDa PARP1 片段載體為具體延伸。**

- 已確立的相互拮抗（仍成立）：
  - Parthanatos→抗凋亡：嚴重 ATP 耗竭使凋亡執行無法進行；低／中度 DNA 損傷 → 短暫 NAD/ATP 下跌 → 凋亡；高度損傷 → 長期耗竭 → parthanatos（Nishida 等人 2022）。
  - 凋亡→抗 parthanatos：caspase 切割 PARP1（Asp214/Gly215，介於 DNA 結合與催化結構域之間）使其去活化，阻止過度活化（D'Amours 2001）。
- 有證據的延伸：
  1. **Calpain–BID–BAX–AIF**：MNNG parthanatos/necroptosis 需依序 PARP1→calpain→BID 切割（calpain 不可切割 BID G70A/Δ68-71 阻斷 BAX＋死亡）→tBID→粒線體 BAX→AIF 釋放（Moubarak/Galán-Malo/Susin, Cell Death Differ 2012；Polster 2005；Norberg 2008）。BAX/BID 為典型凋亡蛋白，在此以 caspase 非依賴方式運作。Calpain 亦切割 BAX 為 p18 片段。TRPM2/ER Ca2+ 內流（Moura 綜述 §ADP-ribose/TRPM2）為候選 calpain 觸發器——但 Ca2+ 螯合防護 H2O2 而非 MNNG（Bentle 2006），故具損傷特異性。
  2. **兩邊都有 AIF**：某些凋亡刺激亦有 AIF 轉位，近期認為具 PARP 依賴性（Mashimo 2021）；凋亡 vs parthanatic AIF 釋放動力學／池不同（外膜 30% 池快速釋放先於 cytochrome c——Yu 2009）。
  3. **89-kDa PARP1 片段為 PAR 載體**：2025 年工作（Mashimo/Onishi；Zhang 等人 J Adv Res 2025 綜述）——caspase 產生的 89-kDa 片段作為胞質 PAR 載體，驅動 AIF 介導的凋亡——即凋亡切割產物主動餵養 parthanatic 訊號，將拮抗模糊為協作。2025 亦報導 RSL3 ferroptosis–凋亡經 PARP1 串擾。
  4. **HK1–VDAC–BCL2 家族**：HK–VDAC 解離敏化 BAX/BAK MOMP 與 TNF 凋亡（Ullu 2002；Shoshan-Barmatz/Front Physiol 2017）——parthanatic HK 抑制可能降低存活者的凋亡閾值。
  5. **MIF vs CypA/H2AX 核酸酶選擇**：AIF–MIF 核酸酶（Wang 2016；MIF 抑制劑在巴金森模型具保護性——Park 2022）vs AIF–CypA–H2AX 內源核酸酶（Artus 2010；Novo 2022）——形成哪種複合體可能取決於 caspase/calpain 脈絡。
  6. **組織病理對應**：高 PARP1 而無凋亡小體／壞死＝parthanatos；凋亡小體追蹤 PARP1 核→胞質重分布（Donizy 2013；Qiao 2024）——可用作組織分類器。
- 方向：在同一 MNNG/H2O2/NMDA panel 中合併 caspase 抑制（Q-VD）、calpain 抑制、BID/BAX KO、TRPM2 KO、MIF 核酸酶抑制，以及 89-kDa 片段追蹤。讀值：PAR 鏈長、HK 活性、ATP/NAD、AIF 定位、DNA 片段大小（大片段 parthanatic vs 寡核小體凋亡）。

## 6. PAR 水解酶（特別是 PARG）促進還是抑制 parthanatos 執行？

**現況：兩者皆是——劑量依賴的樞紐，現已偏向「部分促進／完全阻斷則保護」。方向：使用梯度 PARG 抑制＋PARG53 意識的基因分型。**

- 見下方 PARG 更新區塊＋原文引文：歷史 Table 1 異質性（Koh 2004 胚胎、Andrabi 2006 神經元／MCAO、Tang 2010 MMS、Santofimia 2022 胰臟中為保護性；Cuzzocrea 2005 SAO 休克、Fouquerel 2014 膠質母細胞瘤、Mashimo 2013 H2O2-MEFs 中為有害性；Blenn 2006 MNNG-MEFs、Munoz 2017 HK-2 中無效應）。
- 2026 解答（de Moura/Hoch bioRxiv 2026.05.12.724507）：完全 PARGi 阻止死亡；1–3 uM 殘留活性仍致死；RPE1/MNNG 中 ARH3 KO 中性。支持 Mashimo 雙功能：內切活性製造游離 PAR（促死），高外切活性摧毀它（保護）。外切為主（Barkauskaite 2015）。
- 混雜因素：長期 PARG KO → 自身 PAR 化的 PARP1 累積 → 可結合 DNA 的 PARP1 減少 → PAR 爆發減弱（Gogola 2018）；PARG 為必需基因——存活的 exon-3/7 KO 皆為保留 PARG53 的低效突變（Chen 團隊＋Hoch 實驗室 2026）。
- ARH3：I/R＋H2O2 病人／小鼠中具保護性（Danhauser/Ghosh 2018），但表觀遺傳替代解釋（histone-MAR 疤痕→轉錄失調，Hanzlikova 2020）仍開放；在 MNNG/RPE1 死亡中可有可無。
- 方向：PARG 滴定曲線（0.3–10 uM PDD00017273／COH34／JA2131）＋PARP1 遷移位移＋MAR vs PAR 特異 blot＋PARG53 PCR；同背景比較 H2O2 vs MNNG vs NMDA。

## 7. 游離 PAR 鏈如何以足夠量生成、逃過水解酶並運出細胞核？

**現況：大半未解；最佳線索＝無蛋白 PAR 合成＋PAR 載體片段＋胞質 PARG 亞型。方向：追蹤 PAR 物種，而非只看總 PAR。**

- 生成：PARG 內切蛋白-PAR → 游離鏈；但核內 PARG 外切為主 → 游離鏈必須快速逃逸。2024 新機制：PARP1 從頭無蛋白 PAR 合成（Langelier 等人，Mol Cell 2024）——無需蛋白錨，直接可擴散。
- 保護／運輸未知：未發現 PAR 輸出子；候選：（a）89-kDa PARP1 caspase 片段為胞質 PAR 載體（Mashimo/Onishi 2021；Zhang J Adv Res 2025）；（b）PAR 化的穿梭蛋白；（c）胞質 PARG102/99 在地產生第二波游離 PAR；（d）胞質 PAR 抗體中和可防 NMDA 死亡（Andrabi 2006），證明胞質 PAR 為致死池。
- 鏈規則：長／分支＞短／線形毒性（Andrabi 2006 BioPorter）；PARG 預消化 PAR 失去 HK 抑制＋AIF 釋放活性（Andrabi 2014；Fouquerel 2014）。
- 方向：鏈長／分支 MS＋PAR-FRET 生物感測器（核 vs 胞質 vs 粒線體）＋PARG 內切死 vs 外切死突變＋89-kDa 片段追蹤 ± caspase 抑制。

## 8. ADP-ribose 誘導的 TRPM2 開閘對 parthanatos 執行而言必要且／或充分嗎？

**現況：在氧化／腎臟／I-R 模型中為促成因素，非普世必要。方向：H2O2／TRPM2 高表現細胞中必要，MNNG／低 TRPM2 系統中可有可無。**

- 支持：H2O2＋amyloid-β 紋狀體神經元、心肌細胞、β 細胞、SH-SY5Y-TRPM2-OE、海馬神經元——TRPM2-KD/siRNA/PARPi 降低 Ca2+＋死亡（Fonfria 2004/2005；Yang 2006；Ishii 2014；An 2019；Li 2017——部分依賴 Zn2+）。腎臟 I/R：PARPi 或 Ca2+ 螯合各自阻止死亡（Zhang 2014）。ADPR 開閘需 PARG（Blenn 2011），連結 PAR 周轉與 Ca2+。
- 反對充分／必要：Ca2+ 螯合防 H2O2 而非 MNNG（Bentle 2006）；TRPM2 僅在質膜——無法解釋 ER 釋放臂（Munoz 2017；Zhong 2018，PARG 非依賴）。部分 TRPM2 可 ROS 直開而無需 ADPR（Wehage 2002）。ATM-KO＋PARGi 死亡無 AIF／無 NAD 下跌——即 PAR 累積死亡而無 TRPM2–parthanatos（J Transl Med 2026）。
- 2024–2025 機制細化：TRPM2 需 ADPR＋Ca2+ 協同＋PIP2；NUDT9-H 由酶演化為結合位；2'-deoxy-ADPR 為超級促效劑，Ca2+ 敏感度高 4 倍，靜息 Ca2+ 即可活化（Front Immunol 2024）；小膠質細胞 PKC/NOX→ROS→PARP→TRPM2→PYK2/MEK/ERK→PARP 正回饋（Redox Rep 2025）；Ca2+→溶酶體 LMP→Zn2+→粒線體 ROS→PARP→ADPR 循環，即 Ca2+ 經溶酶體 Zn2+ 而非直接粒線體 Ca2+ 致死（Biomolecules 2025 綜述）。
- 方向：同一 panel（H2O2 vs MNNG vs NMDA）：TRPM2-KO＋PARG 抑制＋2-APB vs ER-store 阻斷；讀 ADPR（LC-MS）、Ca2+（胞質＋粒線體＋ER）、PAR、死亡 ± PARP 抑制。

## 9. 是否存在 TRPM2 依賴與非依賴兩種 parthanatos 模式？

**現況：是——Table 1 已暗示；2024–2026 數據強化之。方向：以損傷＋TRPM2 表現＋Ca2+ 來源分類。**

- TRPM2 依賴：H2O2/ROS、腎臟 I/R、紋狀體／皮質／海馬神經元、心肌細胞、小膠質細胞活化／死亡——PARP/PARG→ADPR→TRPM2→Ca2+ 內流為完整死亡所需。
- TRPM2 非依賴：MNNG（Bentle 2006 螯合不敏感）、ER-store Ca2+ 臂（Munoz 2017；Zhong propofol 2018——ROS-ER-Ca2+-mito 軸，PARG 非依賴）、不依賴 AIF 的 RPE／巨噬細胞死亡（Jang 2017；Regdon 2019）、ATM-KO PARGi 複製壓力死亡。
- 混合：心肌 I/R——腦／腎／肝中 TRPM2 惡化（Ca2+/Zn2+ 過載、BBB/CD36/NMDAR），但心肌中可能經 Pyk2/Ca2+ 調節具保護性（Front Immunol 2024 綜述）——依模型／時間／麻醉而異。
- 方向：報告 TRPM2 亞型／表現＋ADPR vs 2dADPR＋胞外無 Ca2+ vs ER 耗竭條件；勿將 H2O2 推廣至 MNNG。

## 10. TRPM2 介導的胞內 Ca2+ 上升的下游分子效應為何？

**現況：至少四臂；calpain–BID–BAX–AIF 與 parthanatos 連結最緊，Zn2+/mPTP／粒線體分裂新興。方向：拆解 Ca2+→X→AIF vs Ca2+→生物能量學。**

- （a）Calpain I → AIF 截切（57 kDa）＋釋放；亦 BID→tBID→BAX→AIF（Polster 2005；Norberg 2008；Vosler 2009；Sun MPP+/MPTP 2018；Moubarak/Cabon BID–BAX 軸）——但 Wang 2009 證明某些 MNNG 模型中 calpain 可有可無。
- （b）mPTP 開啟 → 腫脹／破裂 → AIF/CytC/EndoG 釋放（Yu 2006；Bernardi 2023 共識綜述——ATP 合成酶二聚體核心仍爭議）。
- （c）粒線體分裂／片段化＋去極化＋NAD/ATP 下跌（Jang RPE 2017；光感受器光損模型——mTOR/PARP 在 AIF 上游）。
- （d）激酶回饋：Ca2+→PYK2/MEK/ERK→更多 PARP/TRPM2（小膠質細胞 2025）；Ca2+→溶酶體→Zn2+→Complex-III ROS（Biomolecules 2025）；Ca2+ 以未明機制調節 PARP1 本身（Zhang 2014）——雙向。
- 方向：Ca2+ 螯合（BAPTA）vs TRPM2-KO vs calpain 抑制（calpeptin/PD150606＋calpain 抗性 AIF）vs mPTP 抑制（CsA/NIM811）vs Zn2+ 螯合（TPEN），同 MNNG/H2O2/NMDA 矩陣；讀 AIF 大小（62 vs 57 kDa）、BAX/BID 切割、OCR/ECAR、PAR。

## 11. Nudix 水解酶是 parthanatos 執行所需嗎？

**現況：尚無 parthanatos 中的直接 KO/KD 證明；酶學＋補救成本邏輯指向促成而非執行。方向：檢驗 NUDT5/9/16＋MTH1 類冗餘。**

- 已知：NUDT5（胞質二聚體，Mg2+ 依賴）＋NUDT9（粒線體基質單體）水解 ADPR→AMP＋R5P（Perraud/Shen 2003；Zha 2006/2008；Reactome R-HSA-2393939/2393954）；NUDT16 經去 ADP 核糖化調控 53BP1（Cancer Res 2020）；NUDT5 亦調節嘌呤補救 vs 從頭合成＋thiopurine 藥理（JCI 2026）——即 Nudix 位於 PAR→核苷酸代謝交界。
- 缺口：無 parthanatos 論文 KO Nudix 並證明死亡挽救；Palazzo/Daniels 的蛋白-phosphoribose 產物僅見於體外——體內意義未明。
- 方向：siNUDT5/9/12/16 ± MNNG/H2O2；讀 ADPR、AMP/ATP、PAR、AMPK-pT172、死亡 ± PARGi；過表現 NUDT5 測 AMP 臂充分性。

## 12. 相對於糖解抑制造成的 ATP 耗竭，ADP-ribose 水解產生的 AMP 對 parthanatos 中 AMPK 活化／自噬的相對貢獻為何？

**現況：兩者皆餵養 AMP/ATP 比；ATP 下跌以糖解阻斷為主，AMPK 感測以 Nudix-AMP 為輔。方向：以 HK-PBM 挽救 vs Nudix KD 解耦。**

- 糖解臂：HK1-PAR 阻斷 → 糖解 ATP 衰竭 → AMP 抑制 ANT 造成 ADP 進粒線體失敗（Formentini 2009；Buonvicino 2013）→ 粒線體 ATP 合成衰竭；pyruvate 繞道在 NAD 與 PAR 中心模型皆挽救 ATP＋死亡。
- 補救成本臂：完整 NAD 循環每 ADPR 耗 4 高能磷酸（Moura Fig.2：AMP→ATP 耗 2＋R5P→PRPP 耗 2）；NAD ~0.3 mM vs ATP ~3–4 mM——即使無 HK 阻斷，完整 NAD 周轉 alone 即可明顯壓低 ATP。
- 讀值：MNNG→AMPK→mTORC1 抑制（Ethier 2012 HEK293）；耳蝸／烷化劑模型見自噬（Zhou 2013；Jiang 2018）——但 AMPK 教條現已動搖：AMPK 可抑制 ULK1 啟動同時保存機器（Nat Commun 2023；BioEssays 2024；AJP-Cell 2025）——故 p-AMPK ≠ 自噬通量。
- 方向：同孔時間序列 ADPR/AMP/ATP/PAR/ECAR/OCR＋p-AMPK/p-ULK1/p-S6K＋LC3 通量（± bafilomycin）；比較 pbmHK-1 挽救 vs NUDT5-KD vs PARG 全阻斷；測 ANT 抑制劑（bongkrekic acid）貢獻。

## 13. AMPK 活化與自噬如何影響 parthanatos 細胞死亡？

**現況：未明——有時保護，有時伴隨；無乾淨上位性。方向：視為調節器，測通量而非標記。**

- 促存活線索：能量壓力下 AMPK 保護 ULK1 機器免於 caspase 粉碎（Nat Commun 2023）；PARG 耗竭細胞飢餓後 PAR 累積加速自噬而不致死（CDD 2016）；PD98059 恢復 parthanatos 中粒線體活性＋ATP 而不碰 DNA 損傷（Huang 2014）。
- 促死／伴隨：光感受器 parthanatos 中 mTOR-PARP 串擾——mTOR/PARP KD 各自降低核內 57-kDa AIF（Cell Commun Signal 2020）；耳蝸緣細胞 parthanatos 伴隨自噬（Jiang 2018）。
- 2026 AMPK-粒線體觀（Trends Cell Biol Shaw 2026）：AMPK 驅動分裂／mitophagy／生合成——淨效應取決於損傷負荷。
- 方向：AMPK-KO/CA＋mTORC1 操作＋自噬通量阻斷（ATG7-KO、bafilomycin），於 MNNG/H2O2／光照下；讀 AIF/MIF、PAR、ATP、大片段 vs 寡核小體 DNA；勿單以 LC3-II 推斷通量。

## 14. 促進 AIF 由粒線體釋放的精確分子事件序列為何？

**現況：雙池模型浮現——快速外膜 PAR 可釋放池（calpain 非依賴）vs 內膜截切池（calpain/mPTP/BAX 依賴）。方向：分池檢測。**

- 池 1（快，parthanatic）：20–30% AIF 鬆散附於外膜胞質面（Yu 2009）；PAR 結合 AIF 567–592（R588/K589/K592）；PAR 結合突變體無法釋放，雖 FAD/DNA／核酸酶功能完整仍阻止死亡（Wang 2011；Dawson 綜述 2024）。NAD 下跌 → 去極化＋構形變化，再 PAR 結合 C 端 → CytC/MPT 之前釋放（解釋 AIF 早、 CytC 晚）。
- 池 2（慢，混合）：內膜 62-kDa AIF → calpain/cathepsin N 端截為 57 kDa（Met53/Ala54 前序列）→ MOMP/mPTP/BAX/BID → 釋放（Polster 2005；Otera 2005；Cao OGD 2007——calpain 抗性 AIF 阻斷釋放；Cabon BID→BAX；Sacca calpain→PARP 前饋）。
- 反 calpain 中心：Wang 2009 MNNG-MEFs——calpain 抑制／KO 仍釋放 AIF／仍死亡。
- 2026 人類 PD 線索：PAR 與 VDAC1 共定位＋粒線體內 PAR，見於 SNpc DA 神經元、緊鄰成熟 Lewy 體（Cell Death Dis 2026）——即 mito-PAR 池位置恰可打中池 1。
- 方向：外 vs 內 AIF 分級分離＋PAR 結合死（R588A/K589A/K592A）vs calpain 抗性 knock-in＋活細胞 PAR/AIF-FRET＋mPTP/BAX/BID KO，同損傷比較。

## 15. AIF 轉位如何促進 DNA 片段化，實際切割 DNA 的蛋白為何？

**現況：MIF/PAAN 核酸酶為領先執行者；AIF 內源＋CypA/H2AX 為替代／脈絡性。方向：MIF 核酸酶死 vs AIF 核酸酶檢測正面對決。**

- MIF/PAAN 模型（遺傳＋藥物最強）：胞質 AIF 結合 MIF（E22 區），共轉位；MIF PD-D/E(X)K 核酸酶切 ss/stem-loop DNA，3'-endo/exo → 20–50 kb 大片段（Wang Science 2016）。MIF 核酸酶死或 PAANIB-1 具保護性：PD α-syn-PFF/MPTP/AAV-α-syn（Park Cell 2022，MNNG IC50 ~0.28 uM，腦內 ~2 uM 於 10 mg/kg，保留 tautomerase/cytokine/APE1）、MCAO、EAE/MS（Nat Neurosci 2026——PAANIB-1 預防＋治療範式，不影響上游 PAR/AIF–MIF 結合），HDAC6 調控 AIF/MIF 乙醯化閘門（Yang Dawson 2024 綜述）。
- AIF 內源模型：AIF＋CypA＋H2AX degradosome 以 AIF 為核酸酶（Artus EMBO J 2010；Novo PNAS Nexus 2022）——仍被引用但較少成藥。
- 方向：同 α-syn-PFF/MNNG 系統比較 MIF-E22Q vs MIF-tautomerase 死 vs AIF-DNA 結合死；讀片段大小（pulse-field）、MIF vs CypA 共沉澱、HDAC6 抑制效應。

## 16. 界定 AIF 依賴 vs 非依賴 parthanatos 的因素為何，非依賴中由何切割 DNA？

**現況：細胞類型＋損傷規則浮現；AIF 非依賴＝無大片段化的 PARP 依賴性能量／粒線體分裂死亡。方向：未做 AIF 檢驗勿統稱 parthanatos。**

- AIF 依賴：皮質／RGC/SH-SY5Y/MEF、HK-2-TGHQ 陰性對照成對比——AIF-KD 阻斷死亡＋片段化（Moura Table 1；661W 光模型——AIF-KD 64%→38% 死亡）。
- AIF 非依賴範例：ARPE-19/H2O2（Jang CDD 2017——無轉位、AIF-siRNA 無挽救、無 ladder，但 NAD/ATP 跌＋分裂／OPA1-L 流失＋去極化；同文 RGC-5/SH-SY5Y/MEF 對照會轉位）；BMDM-H2O2＋HK-2-TGHQ＋胰臟 ZZW-115（Table 1"No"AIF）；MNNG-MEFs（Jang 討論引用）。
- 無 AIF 何以致死：能量崩潰＋粒線體分裂／功能失常；DNA 片段化缺席或小片段；凋亡↔壞死代償平衡（視網膜：低 DFF45/40＋低 caspase-8 → 壞死偏倚）；LPS→SOD2＋糖解轉移保護巨噬細胞（Regdon 2019）。
- 方向：同株系必呈 AIF IF＋亞分級＋AIF-siRNA 挽救＋genomic gel；若 AIF 陰性，測粒線體分裂（Drp1/OPA1）、OCR/ECAR，以及 ferroptosis/oxytosis 共標記（視網膜 I/R 兩者並存——Sci Rep 2022）。

## 17. 凋亡 vs parthanatic AIF 轉位的異同為何？

**現況：同乘客、不同載具＋動力學＋核酸酶＋caspase 依賴。方向：動力學＋交互子＋片段大小三聯。**

- 相似：兩者 AIF 皆離 mito 入核（Daugas 2000 凋亡）；parthanatos 外池快速釋放可先於 CytC（Yu 2009），多數凋亡則 CytC 先。
- 差異：parthanatic＝PARP1 依賴、caspase 非依賴、需 PAR 結合（R588–592）、MIF 核酸酶大片段；凋亡＝caspase 依賴、PARP1 被切去活化（Asp214/Gly215），89-kDa 片段反可攜 PAR 餵養 AIF 凋亡（Mashimo 2021）——即協作不只是拮抗；MPT/CytC/caspase-3 典型。
- 2026 細節：PAANIB-1 保留凋亡／necroptosis／APE1 核酸酶（Park 2022 suppl.）——parthanatic DNA 切割藥理上可分。
- 方向：Q-VD vs olaparib vs PAANIB-1 矩陣＋AIF-PAR 結合突變＋89-kDa 追蹤＋片段分型＋CytC vs AIF 時序。

## 18. PARG 在 parthanatos 中具執行性嗎——即 PARG 活性是執行死亡，而非僅調節 PAR 周轉？

> 內文補充問題（非 Moura 等人 2024 的 17 問之一）。

**現況：是——具執行性、劑量依賴的樞紐。方向：將 PARG 內切活性視為游離 PAR 生成的必要執行步驟。**

- 執行性證據（2026）：de Moura/Hoch bioRxiv 2026.05.12.724507——完全 PARG 抑制（10 uM PDD00017273）在 RPE1/HeLa/A549 中如 olaparib 阻止 MNNG 死亡；1–3 uM 殘留活性仍致死；完全阻斷阻止 ATP 流失但不阻止 NAD+ 流失——NAD/ATP 解耦，ATP 追蹤死亡。同系統 ARH3 KO 中性。
- 歷史衝突解為劑量效應（Moura Table 1）：保護性／PARG 必要——Lu 2003 腦缺血、Blenn 2006 H2O2-MEFs（非 MNNG）、Fouquerel 2014 膠質母細胞瘤 HK 挽救、Mashimo 2013 H2O2-MEFs、Cuzzocrea 2005 SAO 休克；抑制性／PARG 保護——Andrabi 2006 神經元過表現／KD＋PARG+/- vs 過表現 MCAO、Yu 2006 NMDA-AIF、Zhou 2011 滋養層 UV、Koh 2004 胚胎、Tang 2010 MMS、Santofimia 2022 胰臟；無效應——Blenn 2006 MNNG-MEFs、Munoz 2017 HK-2。
- 機制：部分 PARG 內切活性產生游離 PAR 執行者（HK1-PBM 抑制＋AIF 567–592 結合）；完全阻斷餓死游離 PAR 池；極高外切活性摧毀游離 PAR（Mashimo 2013 雙功能；Barkauskaite 2015 外切為主）。新 PARG53 剪接亞型（exon-1→8，具催化活性）解釋存活的 exon-3/7 KO 低效株保留活性（Chen 團隊＋Hoch 實驗室 2026）；長期 KO 混雜自身 PAR 化 PARP1 累積（Gogola 2018）。
- 原文註記（Moura 等人 2024，逐字）：> There is extensive but conflicting evidence as to the role of PARG in parthanatos, with several studies suggesting that PARG can either prevent or promote PARP1-dependent cell death. In favour of an inhibitory role, PARG overexpression reduced MNNG-induced cell death in mouse neuronal cultures (Andrabi et al., 2006) and reduced NMDA-induced AIF release from mitochondria (Yu et al., 2006) [...] In contrast, other studies suggest that PARG is necessary for, or at least contributes to, the process of parthanatos. PARG inhibition protected mice against brain ischaemia (Lu et al., 2003), and PARG silencing rendered cells more resistant to treatment with H2O2 but not MNNG (Blenn et al., 2006).
- 方向：PARG 滴定（0.3–10 uM PDD00017273/COH34/JA2131）＋PARG53 意識 PCR＋MAR-vs-PAR blot＋同孔 NAD/ATP/PAR＋HK 活性＋AIF 定位；比較 H2O2 vs MNNG vs NMDA。

## 橫切最新指針（2024–2026）

- **PARG 是樞紐**：2026 Hoch 實驗室預印本解開部分 Table-1 異質性——PARG 活性為 parthanatos 執行所需（ATP 流失臂），新的 53-kDa 剪接亞型（PARG53；修正 PARG55/60 註釋）解釋 CRISPR-vs-抑制劑差異。未來任何 NAD／糖解／凋亡實驗必須基因分型／定量 PARG 亞型，並使用梯度抑制，而非僅 KO。
- **ARH3 具保護性而非執行性**，至少在受測的人類 RPE1/MNNG 系統中（ARH3 KO 對死亡無效應）——但 ARH3 缺陷病人／小鼠對 I/R-H2O2 parthanatos 過敏感（Danhauser/Ghosh 2018）——損傷／細胞類型重要；表觀遺傳（histone MAR）替代解釋仍開放（Hanzlikova 2020）。
- **治療推論**：HK-PBM 阻斷、PARG 精調抑制、MIF 核酸酶抑制，以及 TRPM2/calpain/BID 攔截為 NAD 非依賴標的——適用於 NAD 補充失敗之處（§1）。

### PARG 更新 — 網路研究 08_Sep_2026

樞紐規則：部分 PARG＝促 parthanatic（製造游離 PAR）；完全阻斷＝保護性（阻止 ATP 流失臂，NAD 仍跌）；ARH3 在 I/R/H2O2 具保護性但在 MNNG/RPE1 可有可無。

- **PARG 必要＋NAD/ATP 解耦＋PARG53（de Moura 等人，bioRxiv 2026.05.12.724507，doi:10.64898/2026.05.12.724507）：**RPE1/HeLa/A549 MNNG——完全 PARG 抑制（10 uM PDD00017273）如 olaparib 阻止死亡；ARH3 KO 無效應。1–3 uM PARGi 減慢 PAR 周轉但仍致死——僅完全阻斷具保護性，解釋存活的 exon-3 KO 低效株仍死亡。完全 PARGi 阻止 ATP 流失但不阻止 NAD+ 流失。新 exon-1→8 剪接變異 PARG53（53 kDa，具催化活性）——註釋的 PARG55/60 錯誤／無活性；exon 2–7 的 KO/siRNA 可遺留 PARG53。
- **BER 缺陷／非分裂細胞的毒性 PAR 超載（ResearchSquare rs.3.rs-10223032/v1，2026 年 7 月，MOD568/MOD582）：**XRCC1-KO MCF7——漸進 PAR 累積 → 6 小時早期 OCR/mitoATP 跌而無 ECAR 代償 → 晚期 AIF 轉位。NRH 恢復 NAD+ 反惡化 PAR＋死亡——死亡追蹤 PAR 而非 NAD。G1 停滯／衰老樣細胞仍有效。
- **凝聚體扣押模型（bioRxiv 2026.03.18.712393，2026 年 3 月）：**平行 CRISPR PARGi vs PARPi——PARGi 合成致死 XRCC1-LIG3-POLB、ALC1、ARH3、PARG 本身，而非 HR 缺陷。長期 PARGi 將 PARP1/XRCC1 凝聚體困於修復後，耗竭游離修復池。PARP1／NMNAT1／UNG 缺失賦予抗性。
- **無 parthanatos 的 PARGi——ATM 缺陷前列腺癌（J Transl Med 2026，s12967-026-08208-9）：**PDD00017273 經 TOP1 處理的錯摻 ribonucleotide → S 停滯、複製叉減速、DSB。無 AIF 轉位、無顯著 NAD 耗竭。PAR 累積 alone 不等於 parthanatos。
- **代謝臂 2024：**腦 I/R——PARPi 降低 HK-1 與 LDH 的 PAR 化，恢復糖解（Chen 等人，Eur J Pharmacol 2024，176377）；PARP1 從頭無蛋白 PAR 合成（Langelier 等人，Mol Cell 2024）；PARG 直接逆轉 Glu/Asp-MAR（Longarini & Matic，Nat Commun 2024，15:4239）——Ser-PAR 仍需 ARH3。
- 實務：務必報告 PARG 亞型（PARG53 意識）、抑制劑劑量滴定（不只 KO vs WT），以及同實驗 NAD＋ATP＋PAR。

### 關鍵文獻（最新優先）

- 人類 PD 黑質 mito 內 PAR＋VDAC1 共定位 — Cell Death Dis 2026，s41419-026-08880-1。
- EAE/MS 中 MIF 核酸酶阻斷的神經保護 — Nat Neurosci 2026，s41593-026-02201-7。
- PARG 必要、NAD/ATP 解耦、PARG53 亞型 — de Moura 等人，bioRxiv 2026.05.12.724507，doi:10.64898/2026.05.12.724507。
- BER 缺陷／G1／衰老樣細胞的 PARGi 毒性 PAR 超載 — ResearchSquare rs.3.rs-10223032/v1（MOD568/MOD582，2026 年 7 月）。
- PARGi 凝聚體扣押、XRCC1-LIG3-POLB — bioRxiv 2026.03.18.712393。
- ATM 缺陷前列腺癌 PARGi、無 parthanatos — J Transl Med 2026，s12967-026-08208-9。
- TRPM2–溶酶體–Zn2+–粒線體 ROS 循環 — Biomolecules 2025，15:1193；TRPM2 演化／NUDT9-H — Sci Bull 2024；2dADPR 超級促效劑 — Front Immunol 2024；小膠質細胞 PKC/NOX–PYK2/MEK/ERK 回饋 — Redox Rep 2025。
- NUDT5/9 酶學 — Zha 2006/2008；Perraud/Shen 2003；NUDT5 嘌呤／TP 藥理 — JCI 2026。
- AMPK 再思考 — Nat Commun 2023（AMPK 抑制 ULK1、保存機器）；BioEssays 2024；AJP-Cell 2025；AMPK-粒線體 — Trends Cell Biol 2026。
- MIF/PAAN 核酸酶＋PAANIB-1 — Wang Science 2016；Park Cell 2022；Dawson Mov Disord 2024 綜述；PAAN/MIF 章節 2025（PMID 39929577）。
- AIF–PAR 結合位／外膜池 — Wang Sci Signal 2011；Yu ASN Neuro 2009；calpain-AIF OGD — J Neurosci 2007；mPTP 共識 — Bernardi Cell Death Differ 2023；AIF-CypA-H2AX 核酸酶 — Artus 2010；Novo 2022。
- 不依賴 AIF 的 RPE／巨噬細胞 — Jang CDD 2017；Regdon 2019；視網膜 I/R 多重死亡 — Sci Rep 2022；光感受器 mTOR-PARP-AIF — Cell Commun Signal 2020。
- OGD/HK-1 PBM 突變挽救 — FASEB J 2024.03.18（FJ.202302559R）；Hossain 等人 2024（GSH/NADPH）。
- Moura 等人 2024 綜述（PMC11445734）——全部 17 問題來源；Fig.1–2、Table 1。
- CNS 損傷 parthanatos＋89-kDa PARP1 PAR 載體 — Zhang 等人 J Adv Res 2025；Mashimo/Onishi 2025。
- BID–calpain–BAX–AIF — Galán-Malo 等人 Cell Death Differ 2012；Moubarak 等人。
- HK 抑制機制 — Andrabi 等人 PNAS 2014；Fouquerel 等人 Cell Rep 2014。
- NAD 挽救陽性 — Alano 2004/2010；Ying 2005；Zong 2004；Nishida 2022；Santofimia-Castaño 2022。
- MIF 核酸酶 — Wang 等人 2016；Park 等人 2022。
- 區室化 — Cambronne 2016；Covarrubias 2021；SLC25A51 Girardi/Kory/Luongo 2020；mtPARP1 Szczesny 2014/Herrmann 2021/Lee 2022。

## Wiki 整合註記

- 候選 [[Parthanatos]]、[[PARP1]]、[[Hexokinase-1]]、[[PARG]]、[[ARH3]]、[[AIF]]、[[MIF]]、[[TRPM2]]、[[NAD+]]、[[Glycolysis]]、[[Calpain]]、[[AMPK]]、[[Autophagy]]、[[Nudix Hydrolases]]、[[Mitochondrial Permeability Transition Pore]] 交叉連結；建議以 §1–17 決定因素豐富實體筆記，而非新增筆記。
- Step 3（孤兒解析）可考慮的新實體：[[PARG53]]、[[SLC25A51]]、[[Nudix Hydrolases]]、[[89-kDa PARP1 Fragment]]、[[PAANIB-1]]、[[2'-Deoxy-ADPR]]——建立前先驗證標準檔名。
