---
title: Ferroptosis
description: "鐵死亡是一種非凋亡型的受調控細胞死亡，由鐵依賴性的脂質過氧化所驅動。"
protected: true
created: 2024-01-01
updated: 2026-09-03
tags:
  - biological-process
aliases: []
---
# 鐵死亡
鐵死亡是一種非凋亡型的受調控細胞死亡，由鐵依賴性的[[Lipid Peroxidation]]所驅動。
參見 [[Ferroptosis]]。
**鐵死亡**是一種非凋亡型的受調控細胞死亡，由脂質過氧化物鐵依賴性地累積至致死水平所驅動。它在形態學、生化與遺傳上皆有別於凋亡、壞死性凋亡與自噬。
## 機制
鐵死亡的啟動發生在穀胱甘肽依賴性抗氧化酵素 [[GPX4]] 失活時——可經由基因刪除、藥理抑制（例如 RSL3、ML162），或其輔因子[[Glutathione]]耗竭（例如 erastin 介導的 system Xc⁻ 抑制）。此失活使含多元不飽和脂肪酸的磷脂（特別是磷脂醯乙醇胺）發生不受控制的鐵依賴性[[Lipid Peroxidation]]，導致膜破裂與細胞死亡。此過程需要具氧化還原活性的鐵（Fe²⁺），它驅動[[Fenton Reaction]]化學反應，使脂質自由基連鎖反應得以傳播。[[Ferritin]]ophagy——由 [[NCOA4]] 介導的鐵蛋白自噬性降解——可釋出額外的鐵來助長鐵死亡。

> [!info] 來源：[[task_output_adrenochrome_lipid_peroxidation_bridge_17_July_2026|Adrenochrome → Lipid Peroxidation Bridge]]
> [[Adrenochrome]]是一種源自[[Epinephrine]]氧化的氧化還原循環 *o*-醌，假說認為它可經由雙重機制誘導鐵死亡：(1) 經由無效氧化還原循環產生 ROS → [[Superoxide]] → [[Hydrogen Peroxide]] → [[Hydroxyl radical]] → 奪取 PUFA 的氫（引發脂質過氧化），以及 (2) 透過 *o*-醌對其催化性[[Selenocysteine]]的芳基化，直接親電性抑制[[GPX4]]，與 [[RSL3]] 類似。若獲證實，這將確立 adrenochrome 為首個內源性兒茶胺類鐵死亡誘導劑，並牽涉[[Takotsubo Cardiomyopathy|壓力性心肌病變]]、[[Catecholamine-induced cardiomyopathy]]，以及[[Parkinson's Disease]]中的多巴胺能神經元流失。
> [!info] 來源：[[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
> 新近鑑定出的、**不依賴 GPX4/GSH 與鐵**的鐵死亡軸：[[Acid ceramidase]]（ASAH1）在複製性[[Senescent Cells|衰老]]的 WI-38 纖維母細胞中上調 5 至 20 倍。ACase 將[[Ceramide|神經醯胺]]切割為游離脂肪酸，使膜[[Phospholipid|磷脂]]富集[[PUFA|PUFAs]]（過氧化的受質），從而形成促鐵死亡的脂質組成。ACase 敲低／抑制（ARN14794）可保護細胞免於[[RSL3]]，*且不*改變[[ACSL4]]、[[GPX4]]或游離的[[Iron|Fe²⁺]]——其作用在於縮減 PUFA 受質池，處於上游。關鍵的是，衰老細胞的[[SASP]]（[[IL-6]]/[[IL-8]]）會將 ACase 上調與鐵死亡敏感化傳遞給鄰近細胞。

## FSP1–CoQ10–NAD(P)H：平行於 GPX4 的獨立軸

除了 GPX4，細胞還部署**第二套獨立的鐵死亡抑制系統**，以**[[FSP1]]**（ferroptosis suppressor protein 1，舊稱 AIFM2）為核心。經豆蔻醯化的 FSP1 位於**[[Plasma Membrane|細胞質膜]]**，在此它利用**[[NADPH]]**將**[[Ubiquinone|輔酶 Q10（CoQ10）]]**還原為**泛醇（CoQ10H₂）**——一種親脂性的**自由基捕獲抗氧化劑**，可終止磷脂過氧自由基連鎖反應（Doll et al., 2019；Bersuker et al., 2019）。此**FSP1–CoQ10–NAD(P)H 途徑****不依賴穀胱甘肽**，並與 GPX4–穀胱甘肽軸協同：單獨失去其中一軸，只要另一軸仍完整即可耐受，但同時抑制兩者會產生強烈的協同效應。

> [!info] MVA 途徑的匯聚可預測鐵死亡敏感性
> FSP1 的泛醌受質是**[[Mevalonate pathway|MVA 途徑]]的非固醇產物**。凡抑制 MVA 產出流向膽固醇的介入——[[Statins]]（HMG-CoA 還原酶抑制）或 squalene synthase 的參與（例如 FIN56）——都會耗竭泛醌並**匯聚於 FSP1**，使其自由基捕獲崩解，令細胞對鐵死亡敏感。因此泛醌的流失可獨立於 GPX4 之外預測鐵死亡敏感性，這解釋了 MVA/CoQ10 軸對 NAD(P)H 的依賴性。參見 [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H 深入解析]]。

## SIRT3–SLC25A22：粒線體 SIRT3 鐵死亡防禦軸

> [!info] 來源：Wei et al., *Antioxidants* 2025;14(4):403 (doi:10.3390/antiox14040403)；綜述於 "SIRT3 at the crossroads of ferroptosis" (2026)
> 粒線體去乙醯化酶**[[SIRT3]]**是核心的抗鐵死亡檢查點，透過酵素性與非酵素性兩條臂膀運作：
> - **非酵素性臂（SLC25A22）：** SIRT3 在 K83 位點去乙醯化粒線體麩胺酸轉運體 **[[SLC25A22]]**，防止其泛素化與蛋白酶體降解。穩定後的轉運體維持粒線體的[[Glutamate|麩胺酸]]／[[Glutathione|穀胱甘肽]]供應，以及 AMPK 驅動的單元不飽和脂肪酸合成，從而在[[Lung Cancer|肺腺癌（LUAD）]]及其他代謝受限的腫瘤中阻斷鐵死亡。
> - **酵素性臂：** SIRT3 去乙醯化／活化[[IDH2]]（NADPH）、[[MnSOD]]（ROS 清除）、[[MTHFD2]]（NADPH）與[[Catalase]]，並透過再生 NADPH/GSH 還原緩衝物來支持[[GPX4]]。
> - **鐵的控制：** 透過抑制粒線體 ROS，SIRT3 維持 IRP1 的順烏頭酸酶型態，限制[[Transferrin receptor 1|TfR1]]介導的鐵輸入以及助長[[Fenton Reaction|Fenton]]化學的游離鐵池。
> 由於 SIRT3 的氧化還原護盾被偏好氧化磷酸化、高壓力的腫瘤（LUAD、膠質母細胞瘤）所利用，抑制 SIRT3 可使這類腫瘤**對鐵死亡誘導治療敏感**——這是一種腫瘤選擇性的弱點。須注意其情境依賴性：在某些情境下 SIRT3 反而*促進*鐵死亡（經由粒線體自噬，如膠質母細胞瘤），因此淨效應取決於腫瘤與情境。

## 性別差異

鐵死亡敏感性在三個節點上具有性別二態性。(1) **荷爾蒙閘控的磷脂重塑：** 溶血磷脂醯基轉移酶[[MBOAT1]]與[[MBOAT2]]以犧牲可過氧化的 PE-PUFA 為代價富集 PE-MUFA，從而不依賴 GPX4 與 FSP1 地抑制鐵死亡；MBOAT1 是雌激素受體的直接轉錄標的（雌二醇上調、tamoxifen/fulvestrant 下調），MBOAT2 則是雄激素受體的直接標的，使 ER+ 乳癌與 AR+ 攝護腺癌在合併荷爾蒙阻斷時易於被誘導鐵死亡（*Cell* 2023, PMCID PMC10330611）。(2) **腎臟：** 導管特異性 Gpx4 刪除會損傷雄性腎臟，卻顯著保護雌性腎臟；卵巢切除會部分消除此保護作用，單細胞圖譜分析鑑定出升高的[[NRF2]]抗氧化張力是雌性的韌性機制——NRF2 活化可挽救雄性腎小管（Ide et al., *Cell Rep* 2022;41:111610, doi:10.1016/j.celrep.2022.111610）。(3) **心臟：** 雌二醇驅動的 SmgGDS 誘導可保護雌性免於 isoproterenol 所致 takotsubo 樣損傷中的鐵蛋白自噬性鐵死亡（卵巢切除使 SmgGDS 降至雄性水平；補充可回復），雌二醇／2-甲氧基雌二醇可保留雌性大鼠的代謝基因程式並限制 doxorubicin 心肌病變，而卵巢切除／fulvestrant 則使其惡化（SmgGDS 研究 2023, PMCID PMC10719533；*Naunyn-Schmiedeberg's Arch Pharmacol* 2024）。在腎臟缺血中，睾酮是主要的易感因子（閹割保護雄性；補充睾酮使雌性敏感——Park et al., *J Biol Chem* 2004），這是前鐵死亡時代的結果，與雄性較易發生鐵死亡性死亡相符，但本身並非證明。未發現經證實具有性別二態性的基礎 FSP1/GPX4 表現。

## 關鍵調節因子
- **負調節因子**：[[GPX4]]（主要負調節因子）、[[FSP1]]（細胞質膜上依賴 CoQ10 的氧化還原酶；利用 NADPH 再生泛醇，為不依賴 GPX4 的自由基捕獲劑）、[[DHODH]]、[[Glutathione]]、[[System Xc⁻]]（胱胺酸／麩胺酸反向轉運蛋白）
- **正調節因子**：[[ACSL4]]（醯基 CoA 合成酶，使膜富集可氧化的 PUFA）、[[Acid ceramidase]]（ASAH1；將[[Ceramide|神經醯胺]]切割為游離脂肪酸，餵食膜的[[PUFA|PUFA]]併入——在[[Senescent Cells|衰老]]中是一條不依賴 GPX4/GSH/鐵的敏感化軸）、[[LPCAT3]]（重塑膜磷脂）、[[NOX]] 家族 NADPH 氧化酶、粒線體電子傳遞鏈
- **鐵調節因子**：[[Transferrin receptor 1|TFR1]]（鐵攝取）、[[Ferritin]]（鐵儲存）、[[NCOA4]]（鐵蛋白自噬的接合受體）、[[HO-1]]（血紅素降解釋出鐵）
## 檢測與生物標記
- [[GPX4]] 或 [[System Xc⁻]]（SLC7A11）表現的喪失
- 脂質氫過氧化物的累積（以流式細胞術檢測[[C11-BODIPY]] 581/591 的氧化）
- [[Malondialdehyde]]（MDA）與 [[4-Hydroxynonenal]]（4-HNE）加合物
- 傳輸電子顯微鏡顯示粒線體皺縮、膜密度增加
- 可被鐵螯合劑（[[Deferoxamine]]、[[Deferiprone]]）、親脂性抗氧化劑（[[Vitamin E]]、[[Ferrostatin-1]]、[[Liproxstatin-1]]）及 GPx4 模擬化合物所抑制
## 臨床相關性
鐵死亡已被認為與[[Neurodegeneration|神經退化性疾病]]（[[Parkinson's Disease]]、[[Alzheimer's Disease]]、[[Huntington's Disease]]）、[[Ischemia-reperfusion Injury]]（腎、心、腦）、[[Diabetes Mellitus]]（胰島 β 細胞流失）及[[Cancer]]有關。在腫瘤學中，鐵死亡誘導是治療抗性癌症（例如[[Breast Cancer]]、[[Renal Cell Carcinoma]]、[[Melanoma]]、[[leukemia]]）的一項具前景的治療策略，尤其是具有間質型或藥物耐受持久細胞狀態、高度依賴 GPx4 活性者。

#

# 

## Documents

List of documents that mention this entity
  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - 關於腫瘤抗藥性，沉默 SIRT6 可透過促進鐵死亡來克服 VEGF 抗藥性。因此，SIRTs 可作為胃癌的新型生物標記與治療標的。

  - [[task_output_adrenochrome_lipid_peroxidation_bridge_17_July_2026|Adrenochrome → Lipid Peroxidation Bridge]]
    - 分析[[Adrenochrome]]氧化還原循環到[[Lipid Peroxidation]]之直接機制橋梁的任務成果，提出 adrenochrome 為雙重鐵死亡誘導劑（產生 ROS ＋ 抑制 GPX4）。

  - [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
    - 主要研究顯示[[Acid ceramidase]]（ASAH1）在複製性衰老中的過度表現會驅動促鐵死亡的膜脂質組成（升高的 PL-[[PUFA|PUFAs]]），不依賴[[GPX4]]/[[Glutathione|GSH]]與[[Iron|鐵]]，並經由[[IL-6]]/[[IL-8]] SASP 胞激素傳遞給鄰近細胞。

  - [[_document_ - Could this enzyme help remove "zombie" cells from our tissues?|Salk press release — "Could this enzyme help remove 'zombie' cells…"]]
    - 公開摘要將 ACase 框架為可成藥的[[Senolytic|衰老治療]]標的，可透過鐵死亡清除衰老的「殭屍」細胞。

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - 2020 年的里程碑式綜述（Li et al., *Cell Death & Disease*），系統性總結鐵死亡機制——system Xc⁻/[[SLC7A11]] 的胱胺酸攝取、[[GPX4]] 失活、鐵代謝（[[Transferrin]]、[[Ferroportin]]、[[DMT1]]、[[STEAP3]]）、脂質重塑（[[ACSL4]]、[[LPCAT3]]、[[Phosphatidylethanolamine]]）、[[FSP1]]–[[Coenzyme Q10|CoQ10]] 軸——及其在癌症、神經退化、AKI、I/R 損傷等疾病中的角色。本批次建立實體筆記的主要來源（[[Erastin]]、[[SAT1]]、[[ALOX15]]、[[Sorafenib]]、[[Artesunate]]、[[Mitotane]]、[[Apoptosis-Inducing Factor]]、[[Mevalonate pathway]] 等）。

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - 整合 Doll et al. (2019) 的發現：FSP1 利用 NAD(P)H 在細胞質膜上再生 CoQ10/泛醇，作為不依賴 GPX4 的平行煞車，以及 MVA 途徑的泛醌流失如何匯聚於 FSP1 以預測鐵死亡敏感性。


## Connections

- [[Lipid Peroxidation]] — 相互作用
- [[GPX4]] — 相互作用
- [[Glutathione]] — 相互作用
- [[Fenton Reaction]] — 相互作用
- [[Ferritin]] — 相互作用
- [[NCOA4]] — 相互作用
- [[FSP1]] — 相互作用
- [[Ubiquinone]] — FSP1 的受質，被再生為泛醇，即膜上的自由基捕獲劑
- [[NADPH]] — FSP1 介導泛醌還原的電子供體
- [[DHODH]] — 相互作用
- [[System Xc-]] — 相互作用
- [[ACSL4]] — 相互作用
- [[Acid ceramidase]] — 衰老中的新型正調節因子：過度表現經由神經醯胺分解代謝使膜 PL-PUFAs 富集，透過一條不依賴 GPX4/GSH/鐵的軸使細胞對鐵死亡敏感；敲低具保護作用
- [[LPCAT3]] — 相互作用
- [[NOX]] — 相互作用
- [[Adrenochrome]] — 假說的雙重鐵死亡誘導劑：經氧化還原循環產生 ROS，並可能透過親電性芳基化直接抑制 GPX4，與 RSL3 類似
- [[System Xc-]] — 核心的胱胺酸／麩胺酸反向轉運蛋白；其抑制（例如經[[Erastin]]）會耗竭[[Glutathione|GSH]]，是經典的鐵死亡觸發因素
- [[SLC7A11]] — system Xc- 的催化輕鏈；受[[p53]]轉錄抑制以促進鐵死亡
- [[Erastin]] — 原型鐵死亡誘導劑；抑制 system Xc- 並啟動[[GPX4]]的分子伴侶媒介自噬
- [[ALOX15]] — 位於[[p53]]–SAT1 軸下游的花生四烯酸脂氧化酶，可放大脂質過氧化
- [[SAT1]] — 多胺分解代謝酵素、p53 的轉錄標的，可動用[[ALOX15]]驅動鐵死亡
- [[Iron]] — 具氧化還原活性的 Fe²⁺助長[[Fenton Reaction]]，使脂質自由基連鎖反應得以傳播
- [[Transferrin]] — 運鐵蛋白；經[[Transferrin receptor 1]]內吞供應鐵死亡所需的游離鐵
- [[Sorafenib]] — 肝細胞癌治療，其鐵死亡誘導需[[Retinoblastoma|Rb]]喪失才得以啟用
- [[Artesunate]] — 抗瘧藥，可在胰臟、卵巢與頭頸癌模型中啟動鐵死亡
- [[Mitotane]] — 腎上腺皮質癌治療；腎上腺皮質癌對鐵死亡誘導極為敏感
- [[Apoptosis-Inducing Factor]] — 粒線體黃素蛋白；FSP1 舊稱 AIFM2
- [[Mevalonate pathway]] — 調節硒半胱胺酸 tRNA 成熟，進而決定[[GPX4]]水平
- [[SIRT3]] — 粒線體去乙醯化酶；藉由 NADPH-GSH 再生、IRP1/TfR1 鐵控制及穩定麩胺酸轉運體[[SLC25A22]]，為核心的抗鐵死亡檢查點
- [[SLC25A22]] — 受 SIRT3 穩定（K83 去乙醯化）的粒線體麩胺酸轉運體；供應 GSH 合成所需的麩胺酸並阻斷鐵死亡
- [[IDH2]] — 被 SIRT3 去乙醯化／活化以再生 NADPH/GSH，支持鐵死亡抗性
- [[MTHFD2]] — SIRT3 鐵死亡防禦網絡中生成 NADPH 的一碳酵素
- [[Catalase]] — SIRT3 抗鐵死亡臂中的 ROS 清除酵素

## Linking Summary
- 新增連結：[[Lipid Peroxidation]]、[[GPX4]]、[[Glutathione]]、[[Fenton Reaction]]、[[Ferritin]]、[[NCOA4]]、[[FSP1]]、[[DHODH]]、[[System Xc-]]、[[ACSL4]]、[[LPCAT3]]、[[NOX]]、[[Transferrin receptor 1]]、[[HO-1]]、[[Malondialdehyde]]、[[4-Hydroxynonenal]]、[[Deferoxamine]]、[[Deferiprone]]、[[Vitamin E]]、[[Ferrostatin-1]]、[[C11-BODIPY]]、[[Adrenochrome]]、[[Acid ceramidase]]、[[Ceramide]]、[[Sphingosine]]、[[Sphingomyelin]]、[[Phospholipid]]、[[PUFA]]、[[IL-6]]、[[IL-8]]、[[SASP]]、[[Senescent Cells]]、[[SLC7A11]]、[[Erastin]]、[[SAT1]]、[[ALOX15]]、[[Transferrin]]、[[Ferroportin]]、[[DMT1]]、[[STEAP3]]、[[Sorafenib]]、[[Artesunate]]、[[Mitotane]]、[[Apoptosis-Inducing Factor]]、[[Mevalonate pathway]]、[[Phosphatidylethanolamine]]、[[CISD1]]、[[NFS1]]、[[Clear cell renal cell carcinoma]]、[[Head and neck cancer]]、[[Adrenocortical carcinomas]]、[[Pancreatic Cancer]]、[[Ovarian Cancer]]、[[Gastric Cancer]]、[[Colorectal Cancer]]、[[Lung Cancer]]、[[Stroke]]、[[Traumatic Brain Injury]]、[[Ubiquinone]]、[[NADPH]]、[[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026]]
  - 應強化的重點連結：[[Ferroptosis]] ↔ 脂質過氧化、[[Ferroptosis]] ↔ [[GPX4]]、[[Ferroptosis]] ↔ [[Glutathione]]、[[Ferroptosis]] ↔ Fenton Reaction、[[Ferroptosis]] ↔ Ferritin、[[Ferroptosis]] ↔ [[Adrenochrome]]（雙重機制假說）
  - 性別二態性補充（2026-09-03）：荷爾蒙閘控的 MBOAT1/2 重塑（Cell 2023）、Gpx4-KO 腎臟的 NRF2 韌性（Ide 2022）、心臟雌二醇/SmgGDS 與 doxorubicin 保護、腎臟的睾酮情境（Park 2004）。新增連結：[[MBOAT1]]、[[MBOAT2]]、[[NRF2]]。
