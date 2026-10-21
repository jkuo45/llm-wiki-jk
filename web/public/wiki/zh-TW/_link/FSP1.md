---
title: FSP1
description: 鐵死亡抑制蛋白 1（FSP1，舊稱 AIFM2）是一種質膜黃素蛋白，利用 NAD(P)H 將泛醌（CoQ10）還原為泛醇，一種親脂性的自由基捕捉型抗氧化劑，藉此作為不依賴 GPX4 的平行鐵死亡煞車。
created: 2026-07-04
updated: 2026-10-21
tags:
  - protein
  - enzyme
  - ferroptosis
  - antioxidant
  - lipid-metabolism
aliases: [Ferroptosis Suppressor Protein 1, AIFM2, apoptosis-inducing factor mitochondria-associated 2, 鐵死亡抑制蛋白 1]
---

# FSP1

**概述：** **FSP1**（ferroptosis suppressor protein 1，由 *AIFM2* 編碼）是一種錨定於**質膜**的**黃素蛋白 NAD(P)H:泛醌氧化還原酶**，構成保護細胞免於鐵死亡性死亡的第二大、**不依賴穀胱甘肽**的系統。FSP1 以**NAD(P)H** 為代價將**泛醌（CoQ10）**還原為**泛醇（CoQ10H₂）**，再生出一種親脂性的**自由基捕捉型抗氧化劑**，可在[[Lipid Peroxidation|脂質過氧化]]期間阻止磷脂過氧自由基的傳播。由此形成的 **FSP1–CoQ10–NAD(P)H 途徑**是一個**獨立運作的平行系統，與[[GPX4]]及[[Glutathione|穀胱甘肽]]協同**以抑制鐵死亡（Doll et al., 2019; Bersuker et al., 2019）。

## 發現

FSP1 由兩項於 2019 年接續發表的研究各自獨立發現，是一種能夠救援細胞免於 GPX4 喪失的基因。Doll、Conrad 與同僚透過在缺乏 GPX4 的人類癌細胞中進行**表現選殖互補篩選**鑑定出它，回收到的黃素蛋白先前稱為 **AIFM2（apoptosis-inducing factor mitochondria-associated 2）**，他們將其重新命名為鐵死亡抑制蛋白 1（Doll et al., *Nature* 575:693–698, 2019; doi:10.1038/s41586-019-1707-0）。與此同時，Dixon、Nomura、Bassik 與同僚在**合成致死 CRISPR–Cas9 dropout 篩選**中鑑定出同一基因，並顯示豆蔻醯化的 FSP1 會定位至質膜並在該處還原 CoQ10（Bersuker et al., *Cell* 177:1264–1279, 2019; doi:10.1016/j.cell.2019.03.049）。兩組研究皆確立：在*缺乏* GPX4 的情況下，FSP1 仍能完全對抗致死的過氧化作用，定義了一個與經典穀胱甘肽軸平行運作的非粒線體 CoQ10 抗氧化系統。

> [!info] 命名說明
> FSP1 最初被描述為促凋亡的粒線體蛋白質（AIFM2）。它的抗鐵死亡功能——是在**質膜**而非粒線體上介導——與 AIFM1 調節凋亡的活性不同。改名為 FSP1 可避免與凋亡誘導因子家族混淆。

## 結構與膜定位

- **黃素蛋白核心：** FSP1 結合一個 **FAD 輔因子**，催化 NAD(P)H 將兩電子轉移給泛醌；其酵素學即典型**NAD(P)H 依賴性泛醌氧化還原酶**的酵素學。
- **N 端豆蔻醯化基序：** N 端保守的 **N-豆蔻醯化**訊號將 FSP1 招募至**[[Plasma Membrane|質膜]]的內葉**，精準地把酵素定位在磷脂過氧化被啟動與傳播的位置。膜的結合對其抑制鐵死亡的功能至關重要。
- **藥理接觸殘基：** 首創類（first-in-class）小分子抑制劑 **iFSP1** 結合人類 FSP1 上以殘基 **F360** 為中心的凹穴，這解釋了它的人類專一性活性（IC₅₀ ≈ 103 nM）。

## 作用機制

### NAD(P)H 依賴性泛醌氧化還原酶活性

FSP1 催化下列反應：

> **泛醌（CoQ10，氧化態） + NAD(P)H + H⁺ → 泛醇（CoQ10H₂，還原態） + NAD(P)⁺**

因此，此酵素以 **NAD(P)H** 提供的還原等量體**再生 CoQ10 的還原型抗氧化劑庫**。這在機制上與 GPX4 不同——後者消耗[[Glutathione|穀胱甘肽]]以還原既已形成的脂質過氫氧化物；FSP1 則是在膜上維持**中斷鏈反應的自由基捕捉劑**。

### 泛醇作為自由基捕捉型抗氧化劑

**泛醇（CoQ10H₂）**是強效的**親脂性自由基捕捉型抗氧化劑（RTA）**。它向[[Lipid Peroxidation|脂質過氧化]]期間產生的**脂質過氧自由基（LOO•）**捐贈一個氫原子，產生相對穩定的泛半醌／泛醌，並在自由基鏈得以從鄰近的多不飽和磷脂抽取雙烯丙位氫之前終止該鏈。FSP1 藉此防止導致膜破裂與鐵死亡性死亡的過氧化爆炸性傳播。

> [!important] 平行，而非冗餘
> GPX4 與 FSP1 守衛的是同一結果——抑制致死的[[Lipid Peroxidation|脂質過氧化]]——但透過**獨立的化學機制與輔因子需求**來達成。GPX4 依賴 GSH／硒並修補*既已存在*的磷脂過氫氧化物；FSP1 則不依賴 GSH，並維持*預防性*的自由基捕捉劑。若其中一軸完整，細胞可耐受另一軸的喪失，因此同時抑制**兩者**（例如 iFSP1 加上 GPX4 抑制劑）具有強烈的**協同效應**。

## 與 GPX4–穀胱甘肽軸的平行關係

這項發現將鐵死亡的調控從單一的主調節者（GPX4）重新框定為**雙柱系統**：

| 特性 | GPX4–穀胱甘肽軸 | FSP1–CoQ10–NAD(P)H 軸 |
| --- | --- | --- |
| 輔因子 | GSH、硒半胱胺酸（Sec） | NAD(P)H、FAD |
| 位置 | 細胞質／膜／粒線體異構型 | 質膜（豆蔻醯化） |
| 化學機制 | 將磷脂**過氫氧化物**還原為醇 | 再生**泛醇自由基捕捉劑** |
| GSH 依賴性 | 是 | **否** |
| 獨立於 GPX4 | — | 在 GPX4 缺席時完全抑制鐵死亡 |

Doll 等人結論道：「FSP1–CoQ10–NAD(P)H 途徑以一個獨立運作的平行系統存在，與 GPX4 和穀胱甘肽協同，以抑制磷脂過氧化與鐵死亡。」

## 甲羥戊酸路徑的匯聚

FSP1 的受質——**泛醌／CoQ10**——是[[Mevalonate pathway|甲羥戊酸路徑]]的**非類固醇產物**。這形成了一個關鍵的匯聚點：抑制 MVA 流向膽固醇合成的介入，會同時**使 FSP1 缺乏其泛醌受質**，讓 FSP1 軸崩潰，並**預測鐵死亡敏感性**。

- **HMG-CoA 還原酶抑制**（例如[[Statins|他汀類]]）會降低甲羥戊酸路徑的通量，降低 CoQ10 的可得量。
- **角鯊烯合成酶活化**（例如第三類鐵死亡誘導劑 **FIN56**）會將 MVA 中間產物從 CoQ10 轉向類固醇／膽固醇生合成，耗竭 FSP1 所需的泛醌庫。
- 因此，MVA 途徑在**兩個節點**與鐵死亡交會：(1) 合成 **GPX4** 所需的硒半胱胺酸-tRNA 成熟，以及 (2) **FSP1** 功能所需的 **CoQ10 供應**。泛醌的喪失會特異性地匯聚到 FSP1，這解釋了為何 MVA 路徑的調節能如此強烈地支配鐵死亡敏感性。

> [!tip] 治療意涵
> 由於 FSP1 依賴 MVA 衍生的 CoQ10，將 MVA 路徑抑制（他汀類、角鯊烯合成酶介入）與直接的 FSP1 或 GPX4 抑制結合，是使治療抗藥性癌症對鐵死亡敏化的一項可行策略。

## 維生素 K 循環的延伸

2022 年的一項延伸研究顯示，FSP1 同時也是一種**抗華法林的維生素 K 還原酶**。FSP1 將維生素 K 還原為其氫醌態（VKH₂），維持一個**非典型維生素 K 氧化還原循環**；如同 CoQ10 循環，此循環提供不依賴 GPX4 的還原型自由基捕捉型抗氧化劑。這將 FSP1 擴展為一般的**醌還原酶型鐵死亡抑制劑**，並解釋了其對華法林中毒的解毒活性。（Mishima et al., *Nature* 608:778–783 (2022); doi:10.1038/s41586-022-05022-3.)

## 表現的調節

- **PPARα** 正向驅動 FSP1 的表現；PPARα 活化劑（例如 fenofibrate、bezafibrate）會提高 FSP1 濃度與鐵死亡抗性。
- **MDM2/MDMX** 複合體藉由抑制 PPARα 活性來抑制 FSP1，使 FSP1 降低並讓細胞對鐵死亡敏化。
- FSP1 的蛋白質濃度**在數百個癌症細胞株中與鐵死亡抗性相關**，使其同時成為鐵死亡敏感性的生物標記與可成藥標的。

## 藥理學與治療關聯

- **iFSP1** — 首個被描述的 FSP1 抑制劑（IC₅₀ ≈ 103 nM），經由 F360 凹穴而具人類專一性；在體外與 HCC 模型中誘導鐵死亡，常與 GPX4 抑制劑協同。
- **合併邏輯：** 多數 FSP1 抑制劑在高 GPX4 細胞中單獨使用並不足夠，但與 GPX4／system Xc− 抑制搭配時可作為**鐵死亡增強劑**。
- **癌症：** FSP1 的高表現標記出具有鐵死亡抗性、往往是間質型或藥物耐受的腫瘤細胞；針對 FSP1 的標定正在 HCC 及其他疾病中進行研究。
- **癌症之外：** 此不依賴 GPX4 的軸在所有脂質過氧化驅動的細胞死亡具有關聯之處皆具相關性（神經退化、缺血再灌流、腎損傷）。

## 未解問題

- FSP1 在泛醌與維生素 K 之間的選擇性如何在空間與時間上受到調控。
- 組織特異性的 FSP1 旁系同源物或輔因子是否在體內調節此軸。
- 在不同膜與細胞狀態下，FSP1 軸相對於 DHODH（粒線體 CoQ10）的確切貢獻。

#

## 文件

提及此實體的文件列表

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - 綜合 Doll 等人（2019）的發現與 FSP1–CoQ10–NAD(P)H 途徑、其與 GPX4／穀胱甘肽的平行關係，以及預測鐵死亡敏感性的 MVA 路徑匯聚。

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - 系統性總結鐵死亡機制的里程碑式回顧，其中包含[[FSP1]]–[[Coenzyme Q10|CoQ10]]軸作為 GPX4 非依賴性的抑制劑。

## 連結

  - [[GPX4]]：經典的、GSH 依賴性的鐵死亡煞車；FSP1 與之平行作用，並與 GPX4 抑制產生協同。
  - [[Glutathione]]：GPX4 的輔因子；FSP1 則不依賴 GSH 而抑制鐵死亡。
  - [[Coenzyme Q10]]：FSP1 的受質 — 被還原為泛醇，即膜上的自由基捕捉劑。
  - [[Ubiquinone]]：氧化態的 CoQ10；FSP1 的直接電子接受者。
  - [[NADPH]]：FSP1 泛醌還原活性的電子供體（亦透過穀胱甘肽還原酶回收 GSH）。
  - [[Mevalonate pathway]]：供應 CoQ10／泛醌；MVA 輸出的喪失匯聚到 FSP1，用以預測鐵死亡敏感性。
  - [[Lipid Peroxidation]]：FSP1 藉由維持泛醇所抑制的過程。
  - [[Ferroptosis]]：受 FSP1 軸制約的受調控細胞死亡。
  - [[Plasma Membrane]]：豆蔻醯化 FSP1 定位與自由基捕捉的場所。
  - [[PPARα]]：FSP1 表現的轉錄活化因子。
  - [[Statins]]：降低 CoQ10 的 HMG-CoA 還原酶抑制劑，可能經由 FSP1 產生敏化作用。
  - [[System Xc-]]：供應 GSH 合成的胱胺酸反向運輸蛋白；平行 GPX4 軸的上游節點。

## 連結摘要

- 新增連結：[[GPX4]]、[[Glutathione]]、[[Coenzyme Q10]]、[[Ubiquinone]]、[[NADPH]]、[[Mevalonate pathway]]、[[Lipid Peroxidation]]、[[Ferroptosis]]、[[Plasma Membrane]]、[[PPARα]]、[[Statins]]、[[System Xc-]]、[[FSP1]]
- 建議建立的新實體筆記：
    - [[Vitamin K]] — FSP1 維持一個抗華法林的非典型維生素 K 循環（2022）。
    - [[AIFM2]] — FSP1 改名前的基因符號；值得建立一個轉址／歷史註記。
    - [[FIN56]] — 介入角鯊烯合成酶、耗竭 CoQ10 並匯聚到 FSP1 的第三類 FIN。
    - [[iFSP1]] — 首創類 FSP1 抑制劑（F360 凹穴，IC₅₀ ≈ 103 nM）。
    - [[Radical-trapping Antioxidant]] — 終止過氧化鏈的機制類別（泛醇、維生素 K 氫醌、ferrostatin）。
    - [[Myristoylation]] — 將 FSP1 固定於質膜的 N 端修飾。
    - [[HMG-CoA reductase]] — MVA 的限速酵素；其抑制會降低 CoQ10／FSP1 的受質。
- 應強化的重點連結：
    - [[FSP1]] ↔ [[Coenzyme Q10]]（直接受質／產物）
    - [[FSP1]] ↔ [[Mevalonate pathway]]（CoQ10 供應的匯聚）
    - [[FSP1]] ↔ [[GPX4]]（平行且協同的抑制）
    - [[FSP1]] ↔ [[NADPH]]（電子供體）
