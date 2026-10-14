---
title: Ferroptosis
description: 鐵死亡是一種由鐵依賴性脂質過氧化所驅動的非凋亡型受調控細胞死亡形式。
protected: true
created: 2024-01-01
updated: 2026-09-26
tags:
  - biological-process
aliases: []
---
# Ferroptosis
鐵死亡是一種由鐵依賴性[[Lipid Peroxidation]]所驅動的非凋亡型受調控細胞死亡形式。
見[[Ferroptosis]]。
**鐵死亡**是一種非凋亡型受調控細胞死亡形式，由鐵依賴性的脂質過氧化產物累積至致死程度所驅動。在形態學、生物化學與遺傳學上都與凋亡、壞死性凋亡及自噬截然不同。
## 機制
當穀胱甘肽依賴性的抗氧化酵素[[GPX4]]失活時，鐵死亡即被啟動——失活可由基因刪除、藥理抑制（例如 RSL3、ML162），或其輔因子[[Glutathione]]被耗竭（例如經由 erastin 抑制 system Xc⁻）所造成。此種失活使含多不飽和脂肪酸的磷脂（尤其是磷脂醯乙醇胺）發生不受控制的鐵依賴性[[Lipid Peroxidation]]，導致膜破裂與細胞死亡。此過程需要氧化還原活性鐵（Fe²⁺），它驅動[[Fenton Reaction]]化學反應以傳播脂質自由基鏈式反應。[[Ferritin]]自噬——由[[NCOA4]]介導的鐵蛋白自噬降解——可釋出額外的鐵以供養鐵死亡。

> [!info] 來源：[[task_output_adrenochrome_lipid_peroxidation_bridge_17_July_2026|Adrenochrome → Lipid Peroxidation Bridge]]
> [[Adrenochrome]]是源自[[Epinephrine]]氧化的氧化還原循環型*鄰*醌，據假設可透過雙重機制誘發鐵死亡：(1) 經由無效的氧化還原循環產生 ROS → [[Superoxide]] → [[Hydrogen Peroxide]] → [[Hydroxyl radical]] → PUFA 氫抽離（脂質過氧化起始）；(2) 經由*鄰*醌對其催化性[[Selenocysteine]]的芳香基化，直接親電抑制[[GPX4]]，類似[[RSL3]]。若獲證實，將確立腎上腺素為第一個內源性、兒茶酚胺衍生的鐵死亡誘導劑，並對[[Takotsubo Cardiomyopathy|壓力性心肌病變]]、[[Catecholamine-induced cardiomyopathy]]以及[[Parkinson's Disease]]中的多巴胺能神經元喪失具有意義。
> [!info] 來源：[[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
> 一條新近被辨識出的、**不依賴 GPX4／GSH 與鐵**的鐵死亡軸：[[Acid ceramidase]]（ASAH1）在複製性[[Senescent Cells|衰老]]的 WI-38 纖維母細胞中過度表達 5 至 20 倍。ACase 將[[Ceramide|神經醯胺]]切割為游離脂肪酸，使膜上[[Phospholipid|磷脂]]富集[[PUFA|PUFA]]（過氧化受質），創造促鐵死亡的脂質組成。敲低／抑制 ACase（ARN14794）可在**不**改變[[ACSL4]]、[[GPX4]]或活性[[Iron|Fe²⁺]]的情況下保護細胞免受[[RSL3]]傷害——其作用在上游，藉由縮小 PUFA 受質池。關鍵在於，衰老細胞的[[SASP]]（[[IL-6]]／[[IL-8]]）會將 ACase 上調與鐵死亡敏化傳遞給鄰近細胞。

## FSP1–CoQ10–NAD(P)H：不依賴 GPX4 的平行軸

除了 GPX4 之外，細胞還部署了一套以 **[[FSP1]]**（鐵死亡抑制蛋白 1，原名 AIFM2）為核心的**第二套獨立鐵死亡抑制系統**。經肉豆蔻醯化修飾的 FSP1 定位於**[[Plasma Membrane]]**，並利用**[[NADPH]]**將**[[Ubiquinone]]（CoQ10）**還原為**泛醇（CoQ10H₂）**——一種親脂性的**自由基捕捉型抗氧化劑**，可終止磷脂過氧自由基鏈（Doll 等，2019；Bersuker 等，2019）。這條 **FSP1–CoQ10–NAD(P)H 路徑**是**不依賴穀胱甘肽的**，並與 GPX4–穀胱甘肽軸協同：單獨失去其中一軸尚可耐受，但同時抑制兩軸則具有強烈協同效應。

> [!info] MVA 路徑的匯聚可預測鐵死亡敏感性
> FSP1 的泛酮受質是[[Mevalonate pathway|甲羥戊酸路徑]]的**非類固醇產物**。抑制 MVA 輸出流向膽固醇的介入——[[Statins]]（抑制 HMG-CoA 還原酶）或 squalene 合成酶的介入（例如 FIN56）——會耗竭泛酮並**匯聚於 FSP1**，使其自由基捕捉能力崩潰並使細胞對鐵死亡敏化。因此，泛酮的喪失可獨立於 GPX4 預測鐵死亡敏感性，這解釋了 MVA／CoQ10 軸對 NAD(P)H 的依賴性。見 [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H 深度解析]]。

## SIRT3–SLC25A22：粒線體 SIRT3 鐵死亡防禦軸

> [!info] 來源：Wei 等，*Antioxidants* 2025;14(4):403（doi:10.3390/antiox14040403）；於「SIRT3 at the crossroads of ferroptosis」（2026）中回顧
> 粒線體去乙醯化酶 **[[SIRT3]]** 是居中的抗鐵死亡檢查點，同時透過酵素性與非酵素性兩條支路運作：
> - **非酵素性支路（SLC25A22）：**SIRT3 在 K83 上去乙醯化粒線體麩胺酸運輸蛋白 **[[SLC25A22]]**，防止其泛素化與蛋白酶體降解。經穩定化的運輸蛋白維持粒線體[[Glutamate]]／[[Glutathione]]供應與 AMPK 驅動的單不飽和脂肪酸合成，阻斷[[Lung Cancer|肺腺癌（LUAD）]]及其他代謝受限腫瘤中的鐵死亡。
> - **酵素性支路：**SIRT3 去乙醯化／活化[[IDH2]]（NADPH）、[[MnSOD]]（ROS 清除）、[[MTHFD2]]（NADPH）與[[Catalase]]，並藉由再生 NADPH／GSH 還原緩衝系統來支持[[GPX4]]。
> - **鐵的控制：**藉由抑制粒線體 ROS，SIRT3 使 IRP1 維持在 aconitase 型態，限制[[Transferrin receptor 1|TfR1]]介導的鐵輸入以及供養[[Fenton Reaction|Fenton]]化學反應的活性鐵池。
> 由於 SIRT3 的氧化還原防護會被偏好 OXPHOS、高壓力的腫瘤（LUAD、膠質母細胞瘤）利用，因此抑制 SIRT3 可使此類腫瘤對誘發鐵死亡的療法**敏化**——這是一種腫瘤選擇性的弱點。請注意其脈絡依賴性：在某些設定下 SIRT3 反而會*促進*鐵死亡（經由粒線體自噬，如在膠質母細胞瘤中），因此淨效應是腫瘤與脈絡特定的。

## 性別差異

鐵死亡敏感性在三個節點上具有性別二型性。(1) **荷爾蒙閘控的磷脂重塑：**溶血磷脂醯基轉移酶[[MBOAT1]]與[[MBOAT2]]以富集 PE-MUFA（代價是可供過氧化的 PE-PUFA）的方式，以不依賴 GPX4 與 FSP1 的途徑抑制鐵死亡；MBOAT1 是雌激素受體的直接轉錄標的（雌二醇使之上調，他莫昔芬／氟維司群使其下調），MBOAT2 則是雄性素受體的直接標的，使 ER+ 乳癌與 AR+ 攝護腺癌在鐵死亡誘導合併荷爾蒙阻斷時更為敏化（*Cell* 2023，PMCID PMC10330611）。(2) **腎臟：**腎小管專一性的 Gpx4 刪除會傷害雄性腎臟，卻驚人地完全不傷女性腎臟；卵巢切除會部分消除此保護，而單細胞分析鑑定出[[NRF2]]抗氧化張力升高為女性的韌性機制——NRF2 活化可挽救雄性腎小管（Ide 等，*Cell Rep* 2022;41:111610，doi:10.1016/j.celrep.2022.111610）。(3) **心臟：**雌二醇驅動的 SmgGDS 誘導可在異丙腎上腺素造成的類 Takotsubo 損傷中保護雌性免受鐵蛋白自噬介導的鐵死亡（卵巢切除會將 SmgGDS 降至雄性水準；補充則可恢復）；雌二醇／2-methoxyestradiol 則在雌性大鼠中保留代謝基因程式並限制 doxorubicin 心肌病變，而卵巢切除／氟維司群使其惡化（SmgGDS 研究 2023，PMCID PMC10719533；*Naunyn-Schmiedeberg's Arch Pharmacol* 2024）。睪固酮是腎缺血中主要的易感因子（去勢可保護雄性；睪固酮負荷則使雌性敏化——Park 等，*J Biol Chem* 2004），這是鐵死亡概念提出之前的結果，與雄性鐵死亡易感性一致，但其本身並非證明。未發現經查證的性別二型性基礎 FSP1／GPX4 表現。

## 飲食性自由基捕捉層級：哪一種維生素勝出

除了酵素性的 GPX4 軸與 FSP1–CoQ10 軸之外，細胞還部署了一套由飲食供應的**親脂性自由基捕捉型抗氧化劑層級**——其中大部分來自[[Vitamin E]]與[[Vitamin A]]。此層級之所以重要，是因為它作用於 GPX4 反應的*上游*：它直接攔截 LOO• 與 LO• 鏈，因此即使 GSH 合成或 GPX4 本身受損（如在 erastin 或 RSL3 處理下），仍能維持膜的安全。

**生育三烯酚 ≫ 生育酚。**Yang、Ito 等（*Sci Rep* 2026;16:4497，doi:10.1038/s41598-025-34673-1；PMID 41501350）以 RSL3、erastin、BSO 與 *Gpx4* 基因刪除對全部九種 tocochromanol 類似物進行基準測試：

| 模式 | 生育三烯酚 EC₅₀（α/β/γ/δ） | 生育酚 EC₅₀（α/β/γ/δ） | Trolox |
| --- | --- | --- | --- |
| *Gpx4* 刪除（Pfa1） | **0.12 / 0.12 / 0.13 / 0.36 μM** | 2.0 / 2.1 / 2.3 / 1.0 μM | 29 μM |
| RSL3（HT-1080） | 完全保護 **<1 μM** | 完全保護 **>10 μM** | — |

此排序在無細胞的脂雙層自氧化以及以[[C11-BODIPY]]氧化測定中都獲得重現，顯示起作用的是雙層自由基捕捉效率（farnesyl 尾端在膜中更深的嵌入）而非訊號傳遞。α-TTP 會主動滯留 α-tocopherol，因此這項體外效力優勢並不會自動轉化為更優的*體內*組織保護。

**維生素 A 代謝物的自由基捕捉效力超過 α-tocopherol。**Retinol 與 all-*trans* retinal 抑制鐵死亡的效力高於 α-tocopherol（EC₅₀ 0.4–4.8 μM 與 0.7–1.1 μM，vs 7.4–36.1 μM），而 all-*trans* [[Retinoic Acid]]主要透過轉錄作用發揮功能（Jakaria 等 2023，PMID 37236031；Studer 等，*Nat Commun* 2024，doi:10.1038/s41467-024-51996-1，其中 ATRA 上調 GPX4、FSP1、GCH1、ACSL3、SCD1、PPARα，且在發育中神經元裡維生素 A 訊號的喪失*本身*就是一種鐵死亡表型）。

**類胡蘿蔔素填充同一膜相。**[[Carotenoids]]中的 β-／α-胡蘿蔔素與葉黃素可在同一雙層中猝滅[[Singlet Oxygen]]並捕捉脂質自由基，並作為受回饋調節、無毒性的維生素 A 前驅物儲存庫，供應上方的類視黃酸支路——[[Red Palm Oil]]的組成（約 600–750 ppm 類胡蘿蔔素 + 約 70% 生育三烯酚型維生素 E + 18–25 ppm CoQ10）是罕見的、能以單一食物配送整個層級的例子。

> [!info] 實務解讀
> 本 Wiki 的「食物優先」排程（見 [[task_output_anti_ferroptosis_intake_schedule_26_Sep_2026]]）直接源自此排序：優先選擇富含生育三烯酚與類胡蘿蔔素的油脂（紅棕櫚油）而非純 α 補充劑；將劑量與飲食脂肪一同安排；避免在運動或禁食前後約 3–4 小時內使用抗氧化*補充劑*，以免削弱[[Mitohormesis]]；並記住鐵狀態（鐵蛋白、[[Iron]]）是任何抗氧化層級都無法取代的上游受質。

## 關鍵調節因子
- **負向調節因子**：[[GPX4]]（主要的負向調節因子）、[[FSP1]]（位於細胞膜、依賴 CoQ10 的氧化還原酶；利用 NADPH 再生泛醇，是不依賴 GPX4 的自由基捕捉劑）、[[DHODH]]、[[Glutathione]]、[[System Xc⁻]]（胱胺酸／麩胺酸反向運輸蛋白）
- **正向調節因子**：[[ACSL4]]（以可氧化 PUFA 富集膜的醯基輔酶 A 合成酶）、[[Acid ceramidase]]（ASAH1；將[[Ceramide|神經醯胺]]切割為游離脂肪酸，供應膜上[[PUFA|PUFA]]的摻入——在[[Senescent Cells|衰老]]中一條不依賴 GPX4／GSH／鐵的敏化軸）、[[LPCAT3]]（重塑膜磷脂）、[[NOX]] 家族 NADPH 氧化酶、粒線體電子傳遞鏈
- **鐵調節因子**：[[Transferrin receptor 1|TFR1]]（鐵攝取）、[[Ferritin]]（鐵儲存）、[[NCOA4]]（鐵蛋白自噬的受質運輸蛋白）、[[HO-1]]（血基質降解釋放鐵）、[[HFE]]（全身性鐵吸收；C282Y 同型合子自約人生第三個十年起提高活性鐵池，是一種孟德爾式的既存鐵死亡閾值位移）

> [!warning] 鐵受質有時是遺傳性的，而非飲食性的
> 本庫中每一份鐵死亡實驗方案都將活性鐵視為飲食性或發炎性變因來推理。但對 **C282Y/C282Y [[HFE]]** 同型合子而言，兩者皆非如此：由於鐵調素輸出不適當地偏低，十二指腸的鐵閥門在構造上就是開著的，因此活性鐵池終生擴大。由此帶來兩項後果，而任何抗氧化層級都無法處理。(a) **該個體的鐵死亡閾值較低**——同樣的脂質過氧化壓力，或同樣程度的 GPX4 障礙，會更早造成死亡。(b) 一個不涉及氧化還原或螯合的方案只是在治療症狀，而上游驅動因素仍然存在；已確立的治療是靜脈切血（鐵蛋白飽和度 >45%，且鐵蛋白 >300［男性／停經後］、>200［停經前］）。見[[HFE]]與[[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]]。

## 檢測與生物標記
- [[GPX4]]或[[System Xc⁻]]（SLC7A11）表現喪失
- 脂質過氧化物累積（以流式細胞儀測定[[C11-BODIPY]] 581/591 氧化）
- [[Malondialdehyde]]（MDA）與[[4-Hydroxynonenal]]（4-HNE）加合物
- 透視電子顯微鏡可見粒線體縮小、膜密度增加
- 可被鐵螯合劑（[[Deferoxamine]]、[[Deferiprone]]）、親脂性抗氧化劑（[[Vitamin E]]、[[Ferrostatin-1]]、[[Liproxstatin-1]]）與 GPx4 模擬化合物所抑制
## 臨床關聯

鐵死亡已被發現與[[Neurodegeneration|神經退化性疾病]]（[[Parkinson's Disease]]、[[Alzheimer's Disease]]、[[Huntington's Disease]]）、[[Ischemia-reperfusion Injury]]（腎臟、心臟、腦）、[[Diabetes Mellitus]]（胰臟 β 細胞喪失）以及[[Cancer]]有關。在腫瘤學上，誘發鐵死亡是對抗抗藥性癌症（例如[[Breast Cancer]]、[[Renal Cell Carcinoma]]、[[Melanoma]]、[[leukemia]]）的一項有前景的治療策略，特別適用於那些具有間質型或藥物耐受持續細胞（persister cell）狀態、因而高度依賴 GPx4 活性的腫瘤。

## 文件

提及此實體的文件列表
  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - Regarding tumor resistance, SIRT6 silencing can overcome VEGF resistance by promoting Ferroptosis. Thus, SIRTs could act as novel biomarkers and therapeutic targets of GC.

  - [[task_output_adrenochrome_lipid_peroxidation_bridge_17_July_2026|Adrenochrome → Lipid Peroxidation Bridge]]
    - A task output analyzing the direct mechanistic bridge from [[Adrenochrome]] redox cycling to [[Lipid Peroxidation]], proposing adrenochrome as a dual ferroptosis inducer (ROS generation + GPX4 inhibition).

  - [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
    - Primary study showing [[Acid ceramidase]] (ASAH1) over-expression in replicative senescence drives a pro-ferroptotic membrane lipid profile (elevated PL-[[PUFA|PUFAs]]), independent of [[GPX4]]/[[Glutathione|GSH]] and [[Iron|iron]], and is transmitted to neighbors via [[IL-6]]/[[IL-8]] SASP cytokines.

  - [[_document_ - Could this enzyme help remove "zombie" cells from our tissues?|Salk press release — "Could this enzyme help remove 'zombie' cells…"]]
    - Public summary framing ACase as a druggable [[Senolytic|senotherapeutic]] target for clearing senescent "zombie" cells via ferroptosis.

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - Landmark 2020 review (Li et al., *Cell Death & Disease*) systematically summarizing ferroptosis mechanisms — system Xc⁻/[[SLC7A11]] cystine uptake, [[GPX4]] inactivation, iron metabolism ([[Transferrin]], [[Ferroportin]], [[DMT1]], [[STEAP3]]), lipid remodeling ([[ACSL4]], [[LPCAT3]], [[Phosphatidylethanolamine]]), the [[FSP1]]–[[Coenzyme Q10|CoQ10]] axis — and its roles across cancer, neurodegeneration, AKI, I/R injury and other diseases. Primary source for the entity notes created in this ingestion ([[Erastin]], [[SAT1]], [[ALOX15]], [[Sorafenib]], [[Artesunate]], [[Mitotane]], [[Apoptosis-Inducing Factor]], [[Mevalonate pathway]], etc.).

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - Synthesis of the Doll et al. (2019) discovery that FSP1 uses NAD(P)H to regenerate CoQ10/ubiquinol at the plasma membrane, acting as a GPX4-independent parallel brake, and how MVA-pathway loss of ubiquinone converges on FSP1 to predict ferroptosis sensitivity.

  - [[task_output_anti_ferroptosis_intake_schedule_26_Sep_2026|Anti-Ferroptosis Intake Schedule]]
    - Wiki-coverage assessment plus the food-first daily schedule for vitamin E, vitamin A, and red palm oil; source of the tocotrienol-vs-tocopherol and vitamin-A potency tables now recorded in this note.


## 連結

- [[Lipid Peroxidation]]——與之交互作用
- [[GPX4]]——與之交互作用
- [[Glutathione]]——與之交互作用
- [[Fenton Reaction]]——與之交互作用
- [[Ferritin]]——與之交互作用
- [[NCOA4]]——與之交互作用
- [[FSP1]]——與之交互作用
- [[Ubiquinone]]——被 FSP1 還原為泛醇（膜上的自由基捕捉劑）的受質
- [[NADPH]]——FSP1 介導泛酮還原的電子供體
- [[DHODH]]——與之交互作用
- [[System Xc-]]——與之交互作用
- [[ACSL4]]——與之交互作用
- [[Acid ceramidase]]——衰老中的新型正向調節因子：透過神經醯胺分解代謝使膜上 PL-PUFAs 富集，經由不依賴 GPX4／GSH／鐵的軸使細胞對鐵死亡敏化；敲低則具保護作用
- [[LPCAT3]]——與之交互作用
- [[NOX]]——與之交互作用
- [[Adrenochrome]]——假設中的雙重鐵死亡誘導劑：經由氧化還原循環產生 ROS，並可能透過親電性芳香基化直接抑制 GPX4，類似 RSL3
- [[System Xc-]]——核心的胱胺酸／麩胺酸反向運輸蛋白；其抑制（例如由[[Erastin]]造成）會耗竭[[Glutathione|GSH]]，是經典的鐵死亡觸發因素
- [[SLC7A11]]——system Xc- 的催化性輕鏈；受[[p53]]在轉錄層級抑制以促進鐵死亡
- [[Erastin]]——鐵死亡誘導劑的原型；抑制 system Xc- 並活化[[GPX4]]的分子伴護介導自噬
- [[ALOX15]]——位於[[p53]]–SAT1 軸下游的花生四烯酸脂氧合酶，可放大脂質過氧化
- [[SAT1]]——多胺分解代謝酵素、p53 的轉錄標的，藉由啟動[[ALOX15]]驅動鐵死亡
- [[Iron]]——氧化還原活性 Fe²⁺ 供養傳播脂質自由基鏈式反應的[[Fenton Reaction]]
- [[HFE]]——鐵吸收的全身性控制器；C282Y 同型合子是活性鐵池終生擴大的孟德爾式狀態，因此是既存的鐵死亡閾值位移。在僅處理抗氧化煞車（[[GPX4]]）或受質（[[ACSL4]]）的氧化還原方案中未被處理
- [[Transferrin]]——鐵運送蛋白；經[[Transferrin receptor 1]]的內吞作用提供鐵死亡所需的活性鐵
- [[Sorafenib]]——其鐵死亡誘導作用由[[Retinoblastoma|Rb]]喪失所促成的 HCC 治療
- [[Artesunate]]——在胰臟、卵巢與頭頸癌模式中活化鐵死亡的抗瘧疾藥物
- [[Mitotane]]——ACC 治療；ACC 對鐵死亡誘導表現出極其敏感的反應
- [[Apoptosis-Inducing Factor]]——粒線體黃素蛋白；FSP1 原名 AIFM2
- [[Mevalonate pathway]]——調節硒半胱胺酸 tRNA 的成熟，因而影響[[GPX4]]水平
- [[SIRT3]]——粒線體去乙醯化酶；透過 NADPH-GSH 再生、IRP1/TfR1 鐵控制以及穩定麩胺酸運輸蛋白[[SLC25A22]]，成為居中的抗鐵死亡檢查點
- [[SLC25A22]]——由 SIRT3 穩定（K83 去乙醯化）的粒線體麩胺酸運輸蛋白；供應 GSH 合成所需的麩胺酸並阻斷鐵死亡
- [[IDH2]]——由 SIRT3 去乙醯化／活化以再生 NADPH／GSH，支持鐵死亡抗性
- [[MTHFD2]]——SIRT3 鐵死亡防禦網絡中產生 NADPH 的一碳單位酵素
- [[Catalase]]——SIRT3 抗鐵死亡支路中的 ROS 清除酵素
- [[Tocotrienols]]——對抗鐵死亡效力最強的飲食性維生素 E 類別（EC₅₀ 0.12–0.36 μM，vs 生育酚 1.0–2.3 μM）；不依賴 GPX4 的膜自由基捕捉劑
- [[Vitamin A]]——Retinol／retinal 是比 α-tocopherol 更強效的直接脂質自由基捕捉劑；ATRA 在轉錄層級上調 GPX4、FSP1、GCH1、ACSL3
- [[Carotenoids]]——與 tocochromanols 占據同一雙層的維生素 A 前驅物與 ¹O₂ 猝滅劑
- [[Red Palm Oil]]——以油酸／棕櫚酸為載體、以單一食物共同配送飲食性自由基捕捉層級（生育三烯酚、類胡蘿蔔素、CoQ10）
- [[Mitohormesis]]——為何飲食性抗氧化劑的給藥時間要避開運動／禁食時段

## 連結摘要
- 新增連結：[[Lipid Peroxidation]]、[[GPX4]]、[[Glutathione]]、[[Fenton Reaction]]、[[Ferritin]]、[[NCOA4]]、[[FSP1]]、[[DHODH]]、[[System Xc-]]、[[ACSL4]]、[[LPCAT3]]、[[NOX]]、[[Transferrin receptor 1]]、[[HO-1]]、[[Malondialdehyde]]、[[4-Hydroxynonenal]]、[[Deferoxamine]]、[[Deferiprone]]、[[Vitamin E]]、[[Ferrostatin-1]]、[[C11-BODIPY]]、[[Adrenochrome]]、[[Acid ceramidase]]、[[Ceramide]]、[[Sphingosine]]、[[Sphingomyelin]]、[[Phospholipid]]、[[PUFA]]、[[IL-6]]、[[IL-8]]、[[SASP]]、[[Senescent Cells]]、[[SLC7A11]]、[[Erastin]]、[[SAT1]]、[[ALOX15]]、[[Transferrin]]、[[Ferroportin]]、[[DMT1]]、[[STEAP3]]、[[Sorafenib]]、[[Artesunate]]、[[Mitotane]]、[[Apoptosis-Inducing Factor]]、[[Mevalonate pathway]]、[[Phosphatidylethanolamine]]、[[CISD1]]、[[NFS1]]、[[Clear cell renal cell carcinoma]]、[[Head and neck cancer]]、[[Adrenocortical carcinomas]]、[[Pancreatic Cancer]]、[[Ovarian Cancer]]、[[Gastric Cancer]]、[[Colorectal Cancer]]、[[Lung Cancer]]、[[Stroke]]、[[Traumatic Brain Injury]]、[[Ubiquinone]]、[[NADPH]]、[[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026]]
  - 建議強化的強連結：[[Ferroptosis]] ↔ 脂質過氧化、[[Ferroptosis]] ↔ [[GPX4]]、[[Ferroptosis]] ↔ 穀胱甘肽、[[Ferroptosis]] ↔ Fenton Reaction、[[Ferroptosis]] ↔ 鐵蛋白、[[Ferroptosis]] ↔ [[Adrenochrome]]（雙重機制假說）
  - HFE 補充（2026-09-26）：將[[HFE]]加入「關鍵調節因子」與「連結」——鐵受質有時是孟德爾式的，而非飲食性的。新增連結：[[HFE]]。
  - 性別二型性補充（2026-09-03）：荷爾蒙閘控的 MBOAT1/2 重塑（Cell 2023）、Gpx4-KO 腎臟的 NRF2 韌性（Ide 2022）、心臟雌二醇／SmgGDS 與 doxorubicin 保護、睪固酮的腎臟脈絡（Park 2004）。新增連結：[[MBOAT1]]、[[MBOAT2]]、[[NRF2]]。