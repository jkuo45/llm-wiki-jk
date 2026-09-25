---
title: Necroptosis
description: "當 caspase-8 被阻斷時，由 RIPK1-RIPK3-MLKL 壞死小體執行的調控性壞死細胞死亡；具裂解性與發炎性，連結細胞死亡、先天免疫與疾病。"
protected: true
created: 2026-07-04
updated: 2026-09-14
tags: [biological-process, cell-death, inflammation, regulated-cell-death]
url: #
source: #
aliases: [Programmed Necrosis, programmed necrosis]
---

# 壞死性凋亡

**壞死性凋亡**（Necroptosis）是[[Necrosis|壞死]]的調控形式——一種程序化、具裂解性的細胞死亡，形態上看起來像壞死（細胞腫脹、膜破裂、[[Damage-Associated Molecular Patterns|DAMP]]釋放），但實際上由一連串明確的激酶級聯執行：[[RIPK1]] → [[RIPK3]] → [[MLKL]]。它是死亡受體訊號下游的第三個選擇，當存活途徑（[[NF-κB]]）失敗且[[Apoptosis|細胞凋亡]]（[[Caspase-8]]）被阻斷時登場。

> [!info] 一句話說明壞死性凋亡
> 死亡受體結合先組裝複合體 I（存活）→ 複合體 IIa/IIb（細胞凋亡）→ 壞死小體（壞死性凋亡）。活化的[[Caspase-8]]切割[[RIPK1]]/[[RIPK3]]並抑制壞死性凋亡；[[Caspase-8]]被抑制時壞死小體得以形成，磷酸化的[[MLKL]]在膜上打孔，細胞於是破裂。

## 概述

不同於意外性壞死（ATP 崩解、創傷）與非裂解性的細胞凋亡（出泡、安靜地被清除），壞死性凋亡是**程序化卻具發炎性**的。形態學：細胞質膜破裂、胞質腫脹、中度染色質凝聚。生化：壞死小體形成、RIPK1/RIPK3/MLKL 磷酸化、DAMP 釋放。功能：當病原體或腫瘤阻斷 caspase 時作為備援死亡途徑；代價是無菌性的[[Inflammation|發炎]]——能清除碎片，但失控時會驅動疾病。

> [!info] 2014 年的經典定義
> 來源：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green, NEJM 2014]]
> 依循 2012 年細胞死亡命名委員會（NCD 2012）的建議，壞死性凋亡被精確定義為**「依賴 RIPK3 的壞死性細胞死亡」**——並不等同於所有活性壞死。[[Mitochondrial Permeability Transition|線粒體通透性轉換]]（依賴 cyclophilin D）是另一套獨立的調控性壞死程式，已由 cyclophilin D 與 RIPK3 雙基因敲除的 IRI 實驗所證明，且兩者合併阻斷（[[Necrostatin-1]] + [[Sanglifehrin A]]）具有加成效果。作為總稱的調控性壞死也涵蓋[[Ferroptosis|鐵死亡]]、[[Pyroptosis|焦亡]]、[[PARP1|PARP-1]]介導、NADPH 氧化酶介導，以及[[Lysosomal Membrane Permeabilization|溶酶體膜通透化]]驅動的壞死。

## TNFR1 途徑：三個選擇

### 複合體 I — 存活

[[TNFα]]結合[[TNFR1]]後募來[[TRADD]]、RIPK1、[[TRAF2]]、LUBAC、cIAP1/cIAP2、[[CYLD]]以及 NEMO/IKK。多聚泛素化的 RIPK1 招募[[TAK1]]與 IKK 複合體（NEMO/IKKα/IKKβ），後者降解 IκB 並啟動[[NF-κB]]的存活/發炎轉錄。第一個選擇：活下來。

### 複合體 IIa / IIb — 細胞凋亡

當[[NF-κB]]活化被抑制且 RIPK1 去泛素化時，RIPK1 會與[[FADD]]、TRADD 及 pro-[[Caspase-8]]組裝成胞質複合體 IIa（ripoptosome）→ 活性 caspase-8 → 執行者 caspase → 外源性[[Apoptosis|細胞凋亡]]，伴隨 RIPK1 被切割。若 cIAP 被耗竭，複合體 IIb（RIPK1/FADD/caspase-8，不含 TRADD）則透過 RIPK1 激酶活性達到同樣效果。第二個選擇：安靜地死亡。

### 壞死小體 — 壞死性凋亡

當[[Caspase-8]]缺席或被抑制（z-VAD-FMK、病毒抑制劑、基因敲除）時，RIPK1 透過 RHIM 相互作用招募並活化[[RIPK3]]；RIPK3 磷酸化[[MLKL]]（人類 Thr357/Ser358）。磷酸化的 MLKL 形成寡聚體、轉位至細胞質膜、形成陽離子孔道 → 滲透性腫脹、破裂、DAMP 釋放。[[PGAM5]]錨定壞死小體並將其與[[DRP1]]驅動的粒線體分裂偶聯。第三個選擇：裂解性死亡。

> [!important] 不依賴 RIPK1 的路徑
> [[TLR3]]/[[TLR4]]活化（dsRNA/LPS）經 TRIF–RIPK3 傳遞訊號，病毒／Z 核酸感知則經[[ZBP1]]/DAI–RIPK3，形成**不需 RIPK1** 的壞死小體。[[RIPK1]]的死亡結構域通常會抑制 ZBP1 與 TRIF 介導的死亡。

> [!info]
> 來源：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]]
> 這篇綜述擴充了非經典路徑的目錄，並強調其情境依賴性。[[ZBP1]]在人類細胞中需要[[RIPK1]]作為橋接接頭，但在小鼠細胞中則否（此處 RIPK1 具抑制作用）；[[TRIF]]在[[TLR3]]/[[TLR4]]下游直接經 RHIM 招募 RIPK3；[[Caspase-6]]則在 A 型流感期間促進 ZBP1/RIPK3 組裝。[[MLKL]]以外的 RIPK3 效應器還包括[[CaMKII]]（心肌 I/R 中的 mPTP 開啟）與[[MFN2|mitofusin-2]]（內質網–粒線體錨定與 Ca2+ 超載）。該綜述也把[[PANoptosis]]/[[PANoptosome|PANoptosome]]框定為壞死性凋亡、細胞凋亡與焦亡被共同執行的整合點。

## 調節

**Caspase-8 / [[c-FLIP]] 可變電阻。** Caspase-8 同源二聚體驅動細胞凋亡並切割 RIPK1、RIPK3 與[[CYLD]]，從而阻斷壞死性凋亡。Caspase-8/[[c-FLIP]]長異構體異源二聚體保留足夠活性以切割 RIPK1/RIPK3 → 存活 + 壞死性凋亡被封鎖。短異構體異源二聚體則更完全地抑制 caspase-8，同時促進複合體 II 組裝 → 細胞凋亡被阻斷、壞死性凋亡受偏袒。遺傳學證據：caspase-8 或 FADD 缺失導致的胚胎致死，可被 RIPK3/MLKL/RIPK1 敲除完全挽救。

**泛素化。** cIAP/LUBAC 介導的 RIPK1 泛素化偏向複合體 I 的存活；CYLD 的去泛素化則為激酶依賴性死亡放行。

**ROS 與粒線體。** 粒線體 ROS 促進 RIPK1 自體磷酸化與 RIPK3 招募；ROS 驅動的 MPTP 開啟會餵養 RIPK1/RIPK3/MLKL 軸。[[PINK1]]/[[Parkin]]的[[Mitophagy|線粒體自噬]]清除 ROS 來源並抑制壞死性凋亡；嚴重損傷則使[[PGAM5]]–Drp1 這個樞軸從線粒體自噬翻轉為壞死性分裂。[[PGAM5]]透過去磷酸化 Ser637、促進 Ser616 磷酸化來完全活化 Drp1，並在與[[MLKL]]孔道平行的途徑上透過 CypD 磷酸化延長 mPTP 開啟。此效應具情境與物種依賴性（人類 PGAM5-S 異構體；在小鼠 BMDM 中較弱）。

> [!note]
> 來源：Exp Mol Med 2025 Qi et al.；iScience 2024 He et al.；J Adv Res 2026 Plantainoside D 作為首個 PGAM5 專一性抑制劑
> 疾病模型與抑制劑細節見[[PGAM5]]補充研究（2024–2026）。

**Sirtuins。**[[SIRT3]]具情境依賴性：它促進[[Apoptosis|細胞凋亡]]與壞死性凋亡以抑制癌症生長，卻又能保護細胞免受壓力損傷；在糖尿病心肌病中，SIRT3 缺乏會加劇高血糖造成的粒線體損傷、ROS、壞死性凋亡與[[NLRP3]]活化。SIRT1/SIRT3 失效也會讓 PINK1/Parkin 線粒體自噬沉默，抬升的 ROS 進而餵養壞死性凋亡與[[Ferroptosis|鐵死亡]]。

## 粒線體代謝

除了作為 ROS 來源的角色，粒線體的底物代謝本身就是壞死性凋亡的正向調節者——最清楚的途徑是[[Pyruvate|丙酮酸]]氧化。[[RIPK3]]是把壞死小體與有氧呼吸偶聯起來的節點：

- **RIP3 活化 PDC。**[[RIPK3]]直接磷酸化[[Pyruvate Dehydrogenase|丙酮酸脫氫酶]]複合體（PDC）的 E3 次基 Thr135，提高 PDC 活性以及[[Pyruvate|丙酮酸]]轉化為[[Acetyl-CoA|乙醯輔酶 A]]供[[TCA cycle|檸檬酸循環]]使用的效率。這會提升有氧呼吸與粒線體[[ROS]]。
- **ROS 回饋壞死小體。** 粒線體 ROS 氧化[[RIPK1]]的半胱胺酸以促進其自體磷酸化，而這是[[RIPK3]]招募進壞死小體所必需的（Zhang et al., *Nat Commun* 2017）。結果形成自我強化的迴圈：RIP3 活性 → 呼吸/ROS → 壞死小體組裝 → 更多 RIP3 活性。
- **MLKL 把守代謝支線。**[[MLKL]]招募至壞死小體是 RIP3 抵達粒線體定位 PDC 的必要條件，將死亡效應器與代謝放大迴圈連結起來。
- **阻斷丙酮酸攝入可抑制壞死性凋亡。** 耗竭丙酮酸、抑制粒線體丙酮酸輸送（經由[[MPC]]）或阻斷 PDC，都能抑制 TNF 誘導的壞死性凋亡（Yang et al., *Nat Cell Biol* 2018）。工具化合物[[UK5099]]是此用途的標準 MPC 抑制劑，Han 實驗室的評論將證據總結為：抑制粒線體丙酮酸輸送/載體蛋白可削弱壞死性凋亡。

> [!warning] 情境依賴性與選擇性注意事項
> 這個代謝需求並非普遍存在。在大腸癌細胞的缺氧與化療誘導壞死性凋亡中，葡萄糖/丙酮酸的保護作用**並未**被[[UK5099]]逆轉：胞質丙酮酸以非酵素方式清除粒線體超氧陰離子，無需進入粒線體（Huang et al., *Cell Death Dis* 2013;4:e622）。在某些模型中，經[[Mitophagy|線粒體自噬]]廣泛清除粒線體同樣無法損害壞死性凋亡（Tait et al., *Cell Rep* 2013;5:878–885）。最後，[[UK5099]]有充分記錄的**非 MPC 依賴**效應（[[NLRP3]]炎性小體抑制、高劑量下損害 OXPHOS/麩胺酸氧化），因此 MPC 專一性的結論需要基因學驗證（MPC1/MPC2 敲低或敲除）。

> [!note]
> 來源：Yang et al., *Nat Cell Biol* 2018;20:186–197 (PMID 29358703)；Qiu, Zhang & Han, *Cell Death Differ* 2018 (doi:10.1038/s41418-018-0075-x)。
> 完整機制與證據見[[_document_ - RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis|RIP3 targets PDC to increase aerobic respiration in TNF-induced necroptosis]]。

## 生理功能

宿主防禦：當病毒阻斷 caspase 時（RIPK1–[[MAVS]]干擾素軸，或受感染細胞的壞死性犧牲）；清除對凋亡具抗性的受損細胞；由 DAMP 驅動免疫細胞招募以進行清理與修復。

## 病理與臨床相關性

失控的 DAMP 釋放會把防禦轉變為慢性發炎：癌症、[[Alzheimer's Disease|阿茲海默症]]、[[Parkinson's Disease|帕金森症]]、多發性硬化症，以及肺、肝、腸道與心臟疾病。庫中重點：

- **神經退化／缺血再灌流損傷。** RIPK1 活化驅動神經元流失與梗塞損傷；[[Necrostatin-1]]在臨床前具神經保護作用。
- **糖尿病心肌病。** SIRT3 缺乏 → ROS + 壞死性凋亡 + NLRP3（Song et al. 2021）。
- **腎臟損傷。** SIRT2 敲低可調節順鉑誘導的細胞凋亡、壞死性凋亡與發炎；葉酸誘導的 AKI 由鐵死亡（而非壞死性凋亡）驅動，而複合體 I 抑制模型則顯示依賴線粒體自噬的 ROS 同時導致壞死性凋亡與鐵死亡。
- **癌症。** 規避調控性死亡是癌症特徵之一；SIRT3 驅動的壞死性凋亡可抑制腫瘤生長，而腫瘤壞死相關的發炎反而可能不利地支持[[Metastasis|轉移]]。胱胺酸剝奪（CHAC1/GCN2-eIF2α-ATF4）會在三陰性乳癌中同時誘導壞死性凋亡與鐵死亡。

### 性別二態性 — 腎臟 IRI（單一研究）

腎臟缺血再灌流顯示出偏向雄性、較早且更持久的壞死性凋亡程式：雄性 C57BL/6J 腎臟上調 RIPK1（約 10 倍，雌性約 5 倍）與 RIPK3（約 8 倍，於 72 小時達峰，雌性延遲至 48 小時達峰），伴隨 p-RIPK1/p-MLKL、較高的肌酸酐/BUN，且在 0–72 小時再灌流期間恢復延遲；卵巢切除會削弱雌性的保護作用並縮小差距，提示卵巢荷爾蒙的參與（Tran et al., *Biomedicines* 2025;13:2085, doi:10.3390/biomedicines13092085, PMCID PMC12467248）。注意事項：單一時間序列研究（每組 n=5），無敲除/抑制劑因果驗證，作者亦陳明此限制。心臟/大腦的雄性偏向壞死性凋亡、對壞死小體的睪固醇 vs 雌激素直接劑量滴定，以及 X 連鎖調節因子——均未經證實，此處不作主張。

## 工具化合物

| 標的 | 藥劑 |
|---|---|
| 活化劑 | PAMPs、[[TNFα]] + z-VAD-FMK（caspase 阻斷會把 TNF 翻轉為壞死性凋亡） |
| RIPK1 抑制 | [[Necrostatin-1]] |
| RIPK3 抑制 | GSK872、HS-1371 |
| MLKL 抑制 | Necrosulfonamide（同時阻斷[[Gasdermin D]]） |
| PGAM5 抑制（臨床前） | Plantainoside D — 阻斷磷酸酶活性與寡聚化 |
| HSP90（RIPK1/RIPK3 組裝） | Kongensin A、tanespimycin |
| NET/PADI4 軸 | DNase、Cl-amidine |

> [!tip] 死亡類型解析組合
> 合併[[Necrostatin-1]]（壞死性凋亡）+ z-VAD-FMK（細胞凋亡）+[[Ferrostatin-1]]/liproxstatin-1（鐵死亡）。若死亡被 Nec-1 阻斷而非其他，即指向 RIPK1 依賴的壞死性凋亡。

## 交互作用

- **壞死性凋亡 → [[Pyroptosis|焦亡]]**：MLKL 的 K+ 外流活化[[NLRP3]][[Inflammasome|炎性小體]]（RIPK3/MLKL/NLRP3 軸）；RIPK3 也可不經 MLKL 直接活化 NLRP3。
- **壞死性凋亡 ↔ [[Autophagy|自噬]]**：RIPK3–AMPK–ULK1/beclin-1 觸發早期自噬，但 TNF 壞死性凋亡會阻斷晚期末體–溶酶體融合；MLKL 的膜結合抑制自噬流。
- **壞死性凋亡 ↔ [[Ferroptosis|鐵死亡]]**：共享 ROS/半胱胺酸/HSP90 節點；MLKL 驅動的 PUFA 耗竭會停止鐵死亡，而[[ACSL4]]過表達使膜對 MLKL 具抗性（ACSL4 敲低抑制鐵死亡、活化壞死性凋亡）。
- **壞死性凋亡 ↔ [[Mitophagy|線粒體自噬]]**：PINK1/Parkin 線粒體自噬降低 mtROS 並抑制壞死性凋亡；RIPK3–PGAM5–Drp1 分裂在輕度損傷時服務於線粒體自噬，在重度損傷時則服務於壞死性破裂。
- **壞死性凋亡 ↔ [[Apoptosis|細胞凋亡]]**：互相代償——阻斷 RIPK3/MLKL 會改道至細胞凋亡，且動力學改變；RIPK3 激酶失活突變體轉為接頭驅動的細胞凋亡。

## 文件

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - 經典的 TNFR1 複合體 I/IIa/IIb/壞死小體架構；不依賴 RIPK1 的 TRIF/ZBP1 支線；PGAM5 壞死小體錨定；caspase-8/c-FLIP 可變電阻；MLKL 對焦亡/自噬/鐵死亡的交互作用；活化劑/抑制劑表格。
- [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014 NEJM — Necroptosis]]
  - 2014 年的經典定義（依 NCD 2012 的 RIPK3 依賴性壞死細胞死亡）；歷史脈絡（Virchow 的壞死 vs 凋亡）；FADD–caspase–FLIP 胚胎致死的挽救；Nec-1 的 IDO 雙重性與脫靶時間注意事項；「所有壞死都是調控性的嗎？」總稱（MPT/cyclophilin D、鐵死亡、焦亡、PARP-1、NADPH 氧化酶、LMP）以及 IRI 中 Nec-1 + sanglifehrin A 的合併療法。
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
  - SIRT3 促進細胞凋亡與壞死性凋亡以抑制癌症生長，但在壓力損傷中具保護作用；SIRT3 缺乏在糖尿病心肌病中促進壞死性凋亡與 NLRP3；SIRT2 調節順鉑腎臟細胞凋亡/壞死性凋亡。
- [[_document_ - Ferroptosis past present and future|Ferroptosis past present and future]]
  - 表 1 鐵死亡/細胞凋亡/自噬/壞死性凋亡的對比；複合體 I 抑制的 ROS 共同觸發壞死性凋亡 + 鐵死亡；葉酸 AKI 作為鐵死亡而非壞死性凋亡的對照。
- [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018 review]]
  - 時間線整合：TNFR1 複合體 I/II/壞死小體、非經典 TRIF/ZBP1 支線、RIPK1/RIPK3 磷酸化位點圖、RIPK3 炎性小體支架、細菌/病毒免疫逃逸、神經退化（ALS/PD/MS/SCI），以及 Nec-1/SAHA/24S-OHC 藥劑。
- [[_document_ - RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis|Yang et al. 2018 — RIP3 targets PDC to increase aerobic respiration in TNF-induced necroptosis]]
  - RIP3 磷酸化 PDC-E3 的 Thr135 以提升有氧呼吸與粒線體 ROS，後者回饋壞死小體；阻斷丙酮酸攝入/MPC 可抑制 TNF 誘導的壞死性凋亡。
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - 經典 vs 非經典誘導（TNFR1、ZBP1 的 RIPK1 需求具物種依賴性、TRIF/TLR3/4），以及 RIPK1/RIPK3/MLKL 的多層次 PTM/轉錄調控（DAPK1、PTPN6、PI3K/Akt、TRIM21、CYLD、OTULIN、RSK3、CSNK1G2、CaMKII、PDC、PGAM5、BRD4、HSP90、TAM 激酶）；與細胞凋亡/自噬/發炎/代謝及 PANoptosome 的交互作用；抑制 vs 誘導壞死性凋亡的治療雙面性。

## 連結

- [[RIPK1]] — 主開關；存活/凋亡的支架、壞死小體組裝的激酶；[[Necrostatin-1]]的靶點。
- [[RIPK3]] — 磷酸化 MLKL 的壞死小體激酶；接頭 vs 激酶的雙重性控制凋亡 vs 壞死性凋亡。
- [[MLKL]] — 形成膜孔的假激酶執行者；通往 NLRP3/焦亡的 K+ 外流橋樑。
- [[Caspase-8]] — 活性形式切割 RIPK1/RIPK3/CYLD 以抑制壞死性凋亡；其被抑制正是壞死性凋亡的觸發點。
- [[c-FLIP]] — 調控 caspase-8 的無活性同源物；長異構體阻斷壞死性凋亡，短異構體促進之。
- [[FADD]] — 把 TRADD/RIPK1 耦連到 caspase-8 的 DISC 接頭；其缺失可由 RIPK3/MLKL 刪除挽救。
- [[TRADD]] — 區分複合體 I（存活）與複合體 II（死亡）的 TNFR1 接頭。
- [[TNFR1]] — 發起複合體 I → II → 壞死小體序列的經典死亡受體。
- [[TNFα]] — 當 NF-κB 被阻斷且 caspase-8 被抑制時，其訊號翻轉為壞死性凋亡的配體。
- [[ZBP1]] — 形成不依賴 RIPK1 的 ZBP1–RIPK3 壞死小體的 Z 核酸感測器。
- [[PGAM5]] — 錨定壞死小體、並經 Drp1 把守線粒體自噬↔壞死性凋亡樞軸的粒線體磷酸酶。
- [[Necrosis|壞死]] — 無調控的母過程，壞死性凋亡是其程序化形式。
- [[Apoptosis|細胞凋亡]] — 安靜的替代方案，依 caspase-8 狀態而被壓制或取代。
- [[Pyroptosis|焦亡]] — 經 MLKL–NLRP3 次級觸發的發炎性裂解死亡。
- [[Ferroptosis|鐵死亡]] — 由 ROS 與 ACSL4 膜脂狀態把守的、互相替代的裂解命運。
- [[Mitophagy|線粒體自噬]] — 經 PINK1/Parkin 清除 ROS 對壞死性凋亡的抑制。
- [[NLRP3]] — 被 MLKL 孔道活化的炎性小體，把壞死性凋亡連結到焦亡細胞激素。
- [[Inflammation|發炎]] — DAMP 驅動的結果，急性具保護性、慢性具致病性。
- [[Necrostatin-1]] — 用以區分壞死性凋亡與凋亡/鐵死亡的定義性 RIPK1 工具抑制劑。
- [[NF-κB]] — 複合體 I 的存活輸出，其被阻斷即為複合體 II/壞死小體形成放行。
- [[SIRT3]] — 情境依賴的閘門：在癌症中促壞死性凋亡，在代謝/壓力損傷中抑壞死性凋亡。
- [[Regulated Cell Death|調控性細胞死亡]] — 把壞死性凋亡與細胞凋亡、焦亡、鐵死亡歸組的母程式。
- [[Pyruvate Dehydrogenase|丙酮酸脫氫酶]] — RIPK3 底物（E3 Thr135）；將丙酮酸轉為乙醯輔酶 A 以驅動呼吸–ROS 放大迴圈。
- [[Pyruvate|丙酮酸]] — 其氧化與 PDC 依賴的分解代謝促進壞死性凋亡的粒線體底物。
- [[MPC]] — 粒線體丙酮酸載體；阻斷丙酮酸輸入可抑制代謝支線。
- [[UK5099]] — 在丙酮酸依賴模型中抑制壞死性凋亡的工具性 MPC 抑制劑（解讀時需注意非 MPC 依賴的注意事項）。
- [[TCA cycle|檸檬酸循環]] — 在呼吸/ROS 回饋迴圈中接收 PDC 產生的乙醯輔酶 A。
- [[Glycolysis|糖解作用]] — 供應粒線體支線的丙酮酸上游來源。
- [[Acetyl-CoA|乙醯輔酶 A]] — PDC 產物，供應檸檬酸循環。
- [[ROS]] — 氧化 RIPK1 以強化壞死小體組裝的粒線體訊號。
- [[Mitochondrial Permeability Transition|線粒體通透性轉換]] — 獨立的 RIPK3 非依賴性調控壞死程式（cyclophilin D/MPTP）；在 IRI 中與壞死性凋亡雙重阻斷具加成效果。
- [[Cyclophilin D]] — MPT 效應器，其與 RIPK3 雙重刪除證明壞死性凋亡/MPT 互相獨立。
- [[Cyclosporine A|環孢靈 A]] — MPT 阻斷劑（亦為免疫抑制劑）；移植保護可能部分反映 MPT 的預防。
- [[Sanglifehrin A]] — MPT 抑制劑；IRI 中 Nec-1 + SfA 合併具保護效果。
- [[Inflammatory Bowel Disease|炎症性腸病]] / [[Crohn's Disease|克隆氏症]] — 腸上皮壞死性凋亡（FADD/caspase-8 缺失 → RIPK3 依賴的類結腸炎病理）。
- [[Sepsis|敗血症]] — 未解問題：CLP 模型數據對 Nec-1/RIPK3 消除的益處互相矛盾。
- [[SHARPIN]] — LUBAC/RIPK1 調節因子，其缺失導致 TNFR1 依賴的增生性皮膚炎。

## 連結摘要

- 新增連結：[[RIPK1]], [[RIPK3]], [[MLKL]], [[Caspase-8]], [[c-FLIP]], [[FADD]], [[TRADD]], [[TNFR1]], [[TNFα]], [[ZBP1]], [[PGAM5]], [[Necrosis]], [[Apoptosis]], [[Pyroptosis]], [[Ferroptosis]], [[Mitophagy]], [[NLRP3]], [[Inflammation]], [[Necrostatin-1]], [[NF-κB]], [[SIRT3]], [[Regulated Cell Death]], [[Damage-Associated Molecular Patterns]], [[TLR3]], [[TLR4]], [[DRP1]], [[PINK1]], [[Parkin]], [[CYLD]], [[TAK1]], [[ACSL4]], [[Metastasis]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[MAVS]]
- 建議建立的新實體註記：[[RHIM domain]], [[TNFR1 complex I]], [[Complex IIa (RIPK1)]], [[GSK872]], [[Necrosulfonamide]]
- 應強化的重點連結：[[Necroptosis]] ↔ [[RIPK3]], [[Necroptosis]] ↔ [[MLKL]], [[Necroptosis]] ↔ [[Caspase-8]], [[Necroptosis]] ↔ [[PGAM5]], [[Necroptosis]] ↔ [[NLRP3]]
- 粒線體代謝增補（2026-09-12）：新增[[Pyruvate Dehydrogenase]]、[[Pyruvate]]、[[MPC]]、[[UK5099]]、[[TCA cycle]]、[[Glycolysis]]、[[Acetyl-CoA]]、[[ROS]]；新增章節「粒線體代謝」（RIP3→PDC-E3 Thr135 → 呼吸/ROS → 壞死小體回饋迴圈；情境依賴性與 UK5099 選擇性注意事項）。
- 性別二態性增補（2026-09-03）：腎臟 IRI 中偏向雄性的 RIPK1/RIPK3/p-MLKL，OVX 可縮小差距（Tran 2025，單一研究，無 KO 因果驗證）；心臟/大腦/睪固醇/X 連鎖的說法因未經證實而排除。
- 來源增補（2026-09-14）：[[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — 非經典 ZBP1/TRIF 路徑及其物種/情境依賴性、RIPK1/RIPK3/MLKL 的 PTM 調控、PANoptosome 共同執行，以及治療雙面性。新增連結：[[PANoptosome]], [[CaMKII]], [[MFN2]], [[CSNK1G2]], [[RSK3]], [[BRD4]], [[Hsp90]], [[TAM Kinases]], [[TRIM21]], [[OTULIN]], [[DAPK]], [[SHP1]]。
- 來源增補（2026-09-14）：[[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014 NEJM]] — 經典定義（RIPK3 依賴性）、Virchow/凋亡歷史、胚胎致死挽救（FADD/FLIP/caspase-8→RIPK3）、Nec-1 的 IDO 雙重性與再灌流後時間注意事項、調控性壞死總稱以及 Nec-1 + SfA 合併。新增連結：[[Mitochondrial Permeability Transition]], [[Cyclophilin D]], [[Cyclosporine A]], [[Sanglifehrin A]], [[Inflammatory Bowel Disease]], [[Crohn's Disease]], [[Sepsis]], [[SHARPIN]]。
