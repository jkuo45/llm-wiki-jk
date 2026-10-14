---
title: Manganese Superoxide Dismutase (MnSOD/SOD2)
description: Manganese Superoxide Dismutase（MnSOD/SOD2）是主要的粒線體抗氧化酵素，負責將超氧化物陰離子（O₂⁻）歧化為過氧化氫（H₂O₂）與氧氣。它由 SOD2 基因編碼，並被運送到粒線體基質中。
created: 2026-07-04
updated: 2026-09-29
tags:
  - protein
  - antioxidant
  - oxidative-stress
  - acetylation
  - sirtuin-substrate
  - sod2
  - manganese-superoxide-dismutase
  - mn-sod
  - mnsod
aliases: [SOD2, Superoxide Dismutase 2, Manganese Superoxide Dismutase, Manganese superoxide dismutase, Mn-SOD, MnSOD2]
---

# 錳超氧化物歧化酶（MnSOD/SOD2）

**Manganese Superoxide Dismutase（MnSOD/SOD2）**是主要的粒線體抗氧化酵素，負責將[[Superoxide]]（O₂⁻）歧化為過氧化氫（H₂O₂）與氧氣。它由核內的 SOD2 基因編碼，並被運送到[[Mitochondria]]基質中，在該處形成同源四聚體複合體，對[[Mitochondrial]]氧化還原恆定至關重要。藉由在電子傳遞鏈中過氧化物的生成位置將其截攔，MnSOD 構成對抗粒線體[[Oxidative Stress]]的第一道防線，也是[[Sirtuins]]調控長壽的核心節點。

## 結構與機制

MnSOD 是一個約 25 kDa、由核基因編碼的蛋白質，合成時為帶有 N 端粒線體定位序列的前驅物，該序列在運入基質時被切除。成熟酵素組裝成同源四聚體，每個單體在活性位點結合一個錳離子。催化循環在 Mn³⁺ 與 Mn²⁺ 兩種氧化態之間交替：超氧化物將 Mn³⁺ 還原為 Mn²⁺，自身則被氧化成 O₂；第二個超氧化物再將 Mn²⁺ 氧化回 Mn³⁺，自身則被還原為 H₂O₂。所產生的 H₂O₂ 隨後由[[Catalase]]與過氧化還原酶／穀胱甘肽過氧化物酶解毒。由於超氧化物本身是劣質的訊號分子，卻是下游自由基的強力來源（經由[[Fenton Reaction|Fenton chemistry]]生成羥基自由基），因此 MnSOD 的活性決定了基質的氧化還原基調。

活性位點通道周圍有一圈**11 個帶正電荷的殘基**，其中包括[[Lys68]]。這個正電荷對於將帶負電的超氧化物受質吸引進催化核心至關重要（Borgstahl et al. 1992）。

## 離胺酸乙醯化位點

MnSOD 含有數個可逆的乙醯化離胺酸殘基，用以調節其酵素活性。質譜分析在人類與小鼠中皆鑑定出四個位點：**K53、[[Lys68]]、K89 與 K122**（部分研究另報告 K130、K154、K194、K221 等位點）。這些離胺酸在從酵母到哺乳類的物種間皆高度演化保守。

### Lys68 — 人類的主要位點

[[Lys68]]是**人類 MnSOD 的主要乙醯化位點**（Chen et al. 2011, EMBO Reports）：

- 在[[Lys68]]處的乙醯化**負向調節**MnSOD 活性——K68Q 這個模擬乙醯化的突變體顯示比活性下降約 60%
- [[Lys68]]是圍繞活性位點通道的帶正電殘基環的一部分。乙醯化會中和其正電荷，降低對 Mn³⁺ 輔因子與超氧化物受質兩者的親和力
- **iTRAQ 質譜**：[[SIRT3]]過量表現使[[Lys68]]-乙醯化 MnSOD 從 54.2% → 35.7%；SIRT3 敲低則使其升高至 **87.7%**
- K68R（模擬去乙醯化）並**未**如 K122R 般提升活性——顯示 K68 除乙醯化狀態外還有結構性角色

> [!warning] [[Lys68]]的過氧化物酶開關
> [[Lys68]]-乙醯化的 MnSOD **使同源四聚體去穩定化**，轉變為**單體形式**。該單體獲得**提高 40 倍的過氧化物酶活性**（取代原本的歧化酶活性）。這意味著[[Lys68]]-乙醯化會將 MnSOD 從超氧化物清除劑轉變為**促氧化劑**——透過過氧化物酶化學生成 H₂O₂，而非清除超氧化物。這會推動 HIF2α 穩定化 → 幹性基因（Oct4、Sox2、Nanog）→ 乳癌侵襲性（Zhu et al. 2019, Nature Communications）。

**[[Lys68]]-乙醯化的疾病關聯：**

- **乳癌**：[[Lys68]]-乙醯化在 luminal B 亞型中富集；透過粒線體代謝重編程促進他莫昔芬、順鉑與多柔比星抗藥性（Gao et al. 2021）
- **幹性重編程**：[[Lys68]]-乙醯化 → mtROS → HIF2α → Oct4/Sox2/Nanog → 癌症幹細胞表型（He et al. 2019, PNAS）
- **高血壓**：SOD2-K68R 模擬去乙醯化的小鼠對血管張力素 II 誘發的高血壓具有**完全保護作用**——粒線體超氧化物未升高、內皮 NO 得以保留、血管舒張功能受保護（Dikalova et al. 2024, AJP Heart）

### Lys122 — 小鼠的主要位點

[[Lys122]]是**小鼠 MnSOD 的主要乙醯化位點**（Tao et al. 2010, Molecular Cell）：

- K122 在各物種間**演化保守**（酵母、果蠅、小鼠、大鼠、奶牛）
- K122R（模擬去乙醯化）**增加 MnSOD 活性**並**降低粒線體超氧化物**
- K122Q（模擬乙醯化）則產生**相反效果**——活性下降、超氧化物上升
- 在 Sirt3⁻/⁻ 小鼠中，K122 呈**過度乙醯化**，MnSOD 活性下降（但蛋白質含量不變）
- 36 小時禁食可使 K122 去乙醯化，將其與**營養感測**連結起來
- K122R 可阻止 Sirt3⁻/⁻ MEF 的**致癌基因（Ras）不朽化**，並抑制 IR 誘導的基因體不穩定
- [[SIRT3]]共同表現可提升野生型的 MnSOD 活性，但對 K122R 或 K122Q 突變體**毫無作用**——確認 K122 是 SIRT3 的直接標的

### 物種之謎

2010 年有三個實驗室同時發表，鑑定出不同的「主要」乙醯化位點：

- **Chen 實驗室**：[[Lys68]]（人類細胞）
- **Tao/Gius 實驗室**：K122（小鼠細胞）
- **Qiu/Chen 實驗室**：K53 與 K89（小鼠細胞）

這很可能反映乙醯化型態、細胞背景與方法學上的物種特異性差異。近期研究顯示**所有位點皆有貢獻**——MnSOD 含有數個可逆的乙醯化離胺酸，會依細胞背景、壓力類型與代謝狀態而受到差異性調控。

### [[Lys68]] 與 K122 — 功能比較

| 特性 | [[Lys68]] | K122 |
|---------|-----|------|
| **物種顯著性** | 人類（主要） | 小鼠（主要） |
| **結構位置** | 活性位點通道環（α1/α2 螺旋） | 四聚體介面 |
| **乙醯化效果** | 四聚體去穩定 → 單體 → 過氧化物酶活性提升 | 直接降低歧化酶活性 |
| **功能開關** | 歧化酶 → 過氧化物酶（促氧化） | 活化 → 不活化（功能喪失） |
| **疾病連結** | 癌幹性、高血壓、藥物抗藥性 | 癌症易感性、IR 誘導損傷 |
| **生理誘發因素** | 乙醇代謝、營養狀態 | 禁食、電離輻射 |

### 金髮姑娘問題

[[Lys68]]必須在乙醯化與去乙醯化狀態之間循環。乙醯化過多 → 癌症、藥物抗藥性、高血壓。過少 → 心肌病變、細胞衰老。MnSOD K68R 敲入小鼠（組成性去乙醯化、始終「開啟」）在 4 個月時發生**擴張型心肌病變**，伴隨細胞衰老與脂質過氧化增加（Schell et al. 2025）。任何治療都必須恢復**動態循環**，而非把開關鎖死。

## Sirtuin 調控

MnSOD 是 sirtuin 介導代謝控制的典範：

- [[SIRT3]]在 Lys68 與 Lys122 處使 MnSOD 去乙醯化，大幅提升其清除 ROS 的活性。此去乙醯化作用可由[[Honokiol]]（一種小分子 SIRT3 活化劑）加強。
- [[SIRT6]]透過活化[[AMPK]]提升 MnSOD 的表現。
- [[SIRT1]]則透過[[FOXO3a]]依賴性的 SOD2 轉錄上調間接貢獻。
- 反之，[[SIRT4]]透過 ADP-核糖基化抑制 MnSOD 活性，代表 sirtuin 網絡中的一種反向調控機制。

SIRT3 與 SIRT4 的相反作用形成了**[[SIRT3/SIRT4 Ratio]]**，這是一個決定 MnSOD 活性與粒線體[[Hormetic Window]]的分子氧化還原旋鈕。

## [[Lys68]]乙醯化的治療標定

目前沒有直接針對[[Lys68]]的藥物。主要治療策略是**間接的——活化 SIRT3** 以恢復去乙醯化能力：

**SIRT3 活化劑（臨床前）：**

| 化合物 | 狀態 | 機制 | 主要發現 |
|----------|--------|-----------|-------------|
| [[Honokiol]] | 臨床前 | SIRT3 活化劑 | 逆轉心臟肥大；使 MnSOD 的[[Lys68]]／K122 去乙醯化 |
| C12 | 臨床前（Lu et al. 2017） | 直接 SIRT3 活化劑 | 已解出晶體結構（PDB: 5gxo）；促進[[Lys68]]去乙醯化 |
| 2-APQC | 臨床前（Fu et al. 2024） | 結構導向的 SIRT3 活化劑 | 降低心肌細胞中的[[Lys68]]與 K122 乙醯化 |
| SKLB-11A | 臨床前（2025） | 別構 SIRT3 活化劑 | 同類首創；次微莫耳親和力；可預防心臟毒性 |
| SZC-6 | 臨床前（Liu et al. 2025） | 以香豆素為骨架的別構活化劑 | 強於 C12；可防護糖尿病腎病 |
| DHP 化合物 | 工具化合物 | 以 1,4-二氫吡啶為骨架 | 約 5 倍的 SIRT3 活化；已在細胞中確認[[Lys68]]去乙醯化 |

> [!note] 臨床狀態
> 目前尚無任何以 SIRT3 為標的分子進入臨床試驗（PMC12917608, 2025）。近期最有前景的路徑是 SZC-6 或 SKLB-11A 等別構 SIRT3 活化劑，它們能恢復[[Lys68]]的動態循環，而非把開關鎖死。

**其他途徑：**

- **熱量限制／禁食**：36 小時禁食可使[[Lys68]]去乙醯化（Tao et al. 2010）——已獲驗證但受限於依從性
- **GC4419**（Galera Therapeutics）：以化學方式取代 MnSOD 功能的 SOD 擬似物；曾進入放射性食道炎的第三期試驗——完全繞過乙醯化
- **NAD+ 前驅物**（[[Nicotinamide Riboside]]、[[Nicotinamide Mononucleotide]]）：為 SIRT3 活性提供燃料；間接促成[[Lys68]]去乙醯化

## 生理與病理角色

MnSOD 是對抗粒線體[[Oxidative Stress]]的第一線防禦。MnSOD 缺失在小鼠中為胚胎致死；異型合子敲除模型顯示[[DNA Damage]]、[[Apoptosis]]增加，並對[[Cancer]]、[[Neurodegeneration]]與[[Cardiovascular Disease]]的易感性上升。未被回收的過氧化物累積會損傷粒線體 DNA、脂質（脂質過氧化）與蛋白質，加速細胞衰老。Sirtuin（尤其是 SIRT3）對 MnSOD 的活化，是[[Caloric Restriction]]與[[Exercise]]所帶來長壽效應的關鍵機制之一，也被認為是多種長壽介入措施中觀察到健康壽命延展的貢獻因素。

### Hormesis 閾值

MnSOD 處於[[Mitohormesis]]核心悖論的心臟位置。以遺傳或藥理方式*部分*降低 MnSOD 活性，會提高穩態的[[Superoxide anion]]，這反而透過活化抗壓力轉錄因子（例如[[FOXO]]、HSF-1 與[[UPRmt]]）而延長果蠅與線蟲的[[Lifespan]]。相對地，完全喪失則是災難性的——在小鼠中造成擴張型心肌病變、神經退化與早期死亡。因此 MnSOD 既是不可或缺的保護者，也是粒線體氧化還原設定點的可調變阻器；其活性水準（由[[SIRT3]]／[[SIRT4]]的相反訊號決定，並反映於[[SIRT3/SIRT4 Ratio]]）決定了細胞位於粒線體[[Hormetic Window]]的哪一位置。

> [!info] Hormesis 閾值
> 輕度的 MnSOD 不足會發出「粒線體壓力」訊號卻不致於崩潰，因而啟動與熱量限制及其他長壽介入措施相同的適應性迴路。Sirtuin 途徑（[[Sirtuins]]）與心磷脂的[[Lipid Peroxidation]]進一步調節 MnSOD 依賴的訊號，將抗氧化能力與氧化還原偶聯的長壽網絡連結起來。

## 臨床關聯

MnSOD 的多型性（尤其是 Ala16Val 變異）會調節粒線體的運入效率，並與癌症風險及神經退化表型相關。提升 SIRT3 活性的治療物——[[Honokiol]]、[[NAD+]]前驅物、[[Resveratrol]]——是提升老化與代謝疾病中 MnSOD 功能的策略。因此 MnSOD 將[[NAD+]]–sirtuin 軸與細胞核心的氧化平衡機制連結起來。

## 性別差異

> [!important] 雌激素是 SOD2 表現與活性的主要調控者
> SOD2／MnSOD 軸在本資料庫中展現出數種最為顯著的性別依賴性調控。雌性具有較高的 SOD2 蛋白質含量、較佳的抗氧化防禦，並在更年期前受到粒線體氧化壓力的部分保護——而更年期時雌激素撤除會移除這項保護，加速心臟與血管老化。

### 雌激素依賴性的 SOD2 上調

- 雌激素（17β-雌二醇）透過 ERα／ERβ 介導的轉錄活化直接上調**SOD2 蛋白質表現**。在多種實驗背景下的雌性細胞中，SOD2 蛋白質豐度較高、抗氧化能力較強，且粒線體網絡偏向融合型（Vina et al., *Free Radic Biol Med* 2005; *Clin Sci* 2017）。
- 雌激素訊號同時增加 SOD2 的 mRNA 轉錄與轉錄後的蛋白質穩定性，貢獻了絕經前雌性較低的氧化損傷。
- 兩性之間的 SOD2 蛋白質層級與活性差異**儘管 mRNA 含量相近仍然存在**——顯示轉錄後調控（乙醯化、雌激素介導的轉譯）才是主要機制（MDPI, *Int J Mol Sci* 2025）。

### SOD2 Ala16Val（rs4880）多型性 × 性別交互作用

Ala16Val 變異會影響粒線體運入效率：**Val/Val**同型合子的粒線體 SOD2 加工量較低，導致基質抗氧化能力下降。

- **男性**：與攝護腺癌（Val/Val 的 OR 為 1.52）、肺癌及頭頸癌風險的關聯較強。
- **女性**：整體而言與乳癌並無一致的關聯（26 項研究，n=38,008，結果為零；僅在高加索白人中 TT 有邊際性的保護作用）；甲狀腺的訊號尚屬初步。
- 性別專屬的風險型態很可能反映 SOD2 運入效率與性荷爾蒙調節之粒線體代謝需求之間的交互作用（Kang, *Gene* 2013; Xu et al., *PLoS ONE* 2014）。

### 絕經後衰退：SIRT3–SOD2 軸

> [!warning] 更年期與雌激素 → SIRT3 → SOD2 軸：一個有支持性關聯的假說
> 絕經前雌性心臟的 SOD2 蛋白質豐度確實高於雄性心臟，且此優勢隨年齡增長而喪失。然而，這項優勢是否*specifically*由更年期所移除，以及此移除是否經由 Lys68 處 SIRT3 介導的去乙醯化進行，**在人類心臟中尚未確立**。以下這條鏈條是從不同研究工作中拼組而成的連貫模型；它被廣泛重複引用，彷彿其中每一環都已被證實。

- **小鼠：** 在年老大鼠心臟中，SIRT3 與 SOD2 的蛋白質含量下降幅度比同齡雄性更陡峭，並伴隨粒線體抗氧化防禦的衰退（*Aging & Disease*, 2024）。
- **人類：** 老年雌性心室的 SIRT1、SIRT3 與 SOD2 **蛋白質表現**較低，並伴隨 NF-κB p50 上升、CD68+ 巨噬細胞累積與 IL-18 上調；雄性心臟則未見 SIRT1／SIRT3 變化（Barcena de Arellano et al., *Aging* 2019;11:1918–33; PMC6503880）。該研究**未能**確立的是：
  - 它測量的是**表現**而非活性，也未測量 MnSOD 在 Lys68 的乙醯化狀態。其唯一的活性替代指標 AMPK 磷酸化在兩性中都下降。
  - **從未記錄更年期狀態**——捐贈者被分為 17–40 歲與 50–68 歲兩組，而上方區間跨越了約 51 歲的平均更年期年齡，因此「老年雌性」不等於「絕經後雌性」。
  - 年老雄性心臟並非未改變：SOD2 與觸酶（catalase）反而**升高**，NF-κB p50 明顯下降。性別差異來自兩性中相反方向的調控。
  - 每組 n=6–8、橫斷性研究，且作者自己就提出了小樣本的保留意見。PGC-1α 與 TFAM 未改變，這不支持 PGC-1α→SOD2 的路徑。
  - 另需注意，同一作者報告**雌激素在男性中隨年齡上升**，這會使荷爾蒙軸在 XY 個體中朝相反方向移動。
- 該模型以假說形式表述：雌激素撤除 → ERα 介導的 SIRT3 轉錄減少 → SIRT3 的粒線體運入減少 → MnSOD 去乙醯化減少 → 粒線體超氧化物增加 → 氧化損傷累積。每一個箭頭都在某處獲得支持，但整條鏈尚未在人類心肌中接受檢驗。
- 「絕經前女性透過此軸維持較高的 SOD2，並在絕經後崩解」是小鼠資料在*方向*上的合理總結。它並不是關於人類心臟的既確立陳述，而「崩解」一詞也誇大了實際測量的內容。

### SOD2 敲除小鼠表型

- **Sod2⁻/⁻ 小鼠**在出生後第一個月內即因氧化損傷而死亡（擴張型心肌病變、神經退化、肝臟脂質累積）。
- **Sod2⁺/⁻ 異型合子**顯示 DNA 損傷增加、癌症易感性升高與老化加速——部分證據顯示嚴重程度具有性別依賴性，儘管多數研究使用混合性別的群隊。

### 治療意涵

- SIRT3 活化劑（honokiol、NAD+ 前驅物）的**性別專屬給藥**可能有其必要：絕經後雌性可能需要較高劑量以補償流失的雌激素介導之 SIRT3 表現。
- **SOD2 多型性基因分型**可用以指導性別專屬的癌症風險評估與抗氧化補充策略。

## Documents

提及此實體的文件清單

  - [[_document_ - sirtuins (resveratrol), gemini|sirtuins (resveratrol), gemini]]
    - 提及於本文獻中

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - SIRT6 也促進 AMPK 的表現，進而提升 MnSOD 與 Catalase 等抗氧化基因的表現，從而抑制氧化壓力。

  - [[_document_ - MRR - mitohormesis|mitohormesis]]
    - 粒線體 hormetic 氧化還原接力（Mitohormetic Redox-Relay）利用 carbazochrome（腎上腺素紅的衍生物）產生受控的 ROS 脈衝，再由 MnSOD／SOD2 加以處理，將腎上腺素紅代謝與 sirtuin 介導的抗氧化防禦連結起來。

  - [[_document_ - Mitohormesis - 2014_FEB|Mitohormesis (2014)]]
    - 討論 MnSOD 作為一個節點性抗氧化劑，其部分抑制可促進粒線體 hormesis。

  - [[_document_ - Fisetin—In Search of Better Bioavailability—From Macro to Nano Modifications A Review|Fisetin review]]
    - 提及非那丁對氧化壓力防禦的調控以及 MnSOD 作為生物標記的上調。

- Barcena de Arellano et al., *Aging* 2019;11(7):1918–1933 (PMC6503880, PMID 30964749)——人類捐贈者心室；這是 SOD2 **表現**性別分歧的唯一人類心臟證據。橫斷性研究，每組 n=6–8，未記錄更年期狀態，且年老雄性心臟的 SOD2／觸酶是*上升*而非下降。未測量 Lys68 乙醯化。此處作為原始文獻在文中引用，而非視為資料庫文件。

## 連結

- [[SIRT3]] — 直接在[[Lys68]]／K122 處使 MnSOD 去乙醯化，提升酵素活性
- [[SIRT1]] — 透過 FOXO3a 訊號上調 SOD2 轉錄
- [[SIRT6]] — 透過 AMPK 依賴路徑上調 MnSOD
- [[SIRT4]] — 透過 ADP-核糖基化抑制 MnSOD 活性
- [[SIRT3/SIRT4 Ratio]] — 決定 MnSOD 活性與粒線體 hormesis 窗口
- [[Resveratrol]] — 活化 SIRT1／FOXO3a 軸以提升 MnSOD
- [[Honokiol]] — SIRT3 的小分子活化劑，增強 MnSOD 去乙醯化
- [[AMPK]] — 媒介 SIRT6 驅動的 MnSOD 上調
- [[FOXO3a]] — 媒介 SIRT1 依賴性 SOD2 表現的轉錄因子
- [[Oxidative Stress]] — 主要防護對象，靠超氧化物歧化作用達成
- [[Mitochondria]] — 主要的次細胞定位與作用位置
- [[Adrenochrome]] — 腎上腺素紅的氧化還原循環會生成超氧化物，由 MnSOD 歧化；連結至粒線體 hormetic 氧化還原接力
- [[Superoxide]] — MnSOD 在 ETC 中其生成位置所歧化的受質（O₂⁻ → H₂O₂）
- [[Hydrogen Peroxide]] — MnSOD 的酵素產物；供應同一氧化還原接力的過氧化還原酶／硫氧還蛋白產水分支
- [[Peroxiredoxin 3]] — 主要的基質 H₂O₂ 清除劑，消耗 MnSOD 產生的 H₂O₂；由 Trx2 再生——MnSOD 與 Prx3／Trx 是粒線體過氧化物接力彼此偶聯的兩半（`SOD2 → H₂O₂ → Prx3/Trx2 → H₂O`）
- [[Thioredoxin-2]] — 再生 Prx3 的主宰；由 MnSOD 驅動的基質過氧化物接力的粒線體產水分支
- [[Thioredoxin-1]] — 同一抗壓力程式的細胞質並行氧化還原分支；Trx1 與 MnSOD 在衰竭心臟中同步下降，並受 sirtuin／FOXO／Nrf2 調控（獨立的氧化還原分支，無直接蛋白質交互作用）
- [[Glutaredoxin]] — 逆轉 MnSOD（及基質蛋白質）的 S-穀胱甘肽化，恢復酵素活性——Grx／GSH 重設直接作用在 MnSOD 本身
- [[Mitohormesis]] — 部分抑制 MnSOD 透過適應性壓力訊號延長壽命（hormetic-threshold 悖論）
- [[Superoxide anion]] — MnSOD 在粒線體基質中歧化的受質（O₂⁻ → H₂O₂ + O₂）
- [[Sirtuins]] — 氧化還原與 sirtuin 途徑（SIRT3／SIRT4、SIRT1／FOXO3a、SIRT6）共同調控 MnSOD 的表現與活性
- [[Lifespan]] — 以遺傳／藥理方式滴定 MnSOD 活性可在果蠅、線蟲與小鼠中調節壽命
- [[Lipid Peroxidation]] — 心磷脂過氧化既是訊號，也是 MnSOD 依賴之氧化還原基調的結果

## 連結摘要

- 新增連結：[[MnSOD]]、[[Catalase]]、[[Fenton Reaction]]、[[DNA Damage]]、[[Apoptosis]]、[[Neurodegeneration]]、[[Cardiovascular Disease]]、[[Caloric Restriction]]、[[Exercise]]、[[FOXO3a]]、[[Lys68]]、[[Lys122]]、[[Adrenochrome]]、[[Superoxide]]、[[Hydrogen Peroxide]]、[[Peroxiredoxin 3]]、[[Thioredoxin-2]]、[[Thioredoxin-1]]、[[Glutaredoxin]]、[[Mitohormesis]]、[[Superoxide anion]]、[[Sirtuins]]、[[Lifespan]]、[[Lipid Peroxidation]]、[[FOXO]]、[[UPRmt]]、[[Hormetic Window]]
- 建議建立的新實體註記：[[Mitochondrial Antioxidant Defense]]、[[Superoxide]]、[[SIRT3/SIRT4 Ratio]]
- 應強化的重點連結：[[SIRT3]] ↔ [[MnSOD]]、[[SIRT1]]／[[FOXO3a]] ↔ [[MnSOD]]、[[SIRT3/SIRT4 Ratio]] ↔ [[MnSOD]]、[[Adrenochrome]] ↔ [[MnSOD]]、[[MnSOD]] ↔ [[Peroxiredoxin 3]]（過氧化物接力）、[[MnSOD]] ↔ [[Thioredoxin-1]]／[[Thioredoxin-2]]（共享的抗壓力程式）、[[MnSOD]] ↔ [[Mitohormesis]]（hormetic-threshold 悖論）+ [[Mitohormesis]] ↔ [[Sirtuins]]
