---
title: 細胞死亡決策樹 — 壓力與細胞類型
description: 將壓力條件與細胞類型對應到細胞死亡模式的流程圖
created: 2026-09-11
updated: 2026-09-11
type: task-output
tags:
  - cell-death
  - decision-tree
  - stress-response
  - cell-type
  - sex-dimorphism
---

# 細胞死亡決策樹 — 壓力與細胞類型

資料綜合：`src/notes/cell-death/`、`src/notes/_link/` 壓力筆記、PANoptosis 綜述（2026 年 7 月）。
產生：11_Sep_2026 08:00 AM PDT。

## 主流程圖 — 壓力到死亡模式

```mermaid
flowchart TD
    S["壓力輸入"] --> ATP{"ATP 是否保留?"}
    ATP -- "否:缺血、嚴重 ATP 崩潰" --> NEC["意外性壞死 / 腫脹性壞死\nNa+/K+ 幫浦衰竭 → Ca2+ 超載 → mPTP → 破裂\n性別中性旁路"]
    ATP -- "是" --> SEX{"性別 / 荷爾蒙背景?\nXY 男性型 vs XX 女性型\nOVX / 低雌激素 → 男性型"}
    SEX -- "全部 →" --> MITO["粒線體樞紐\nMOMP? mPTP? mtROS? mtDNA 釋放?"]

    MITO --> LIG{"死亡配體 + caspase-8?"}
    LIG -- "TNFa / FasL / TRAIL\ncaspase-8 活化" --> APOP_EX["外源性凋亡\nDISC → casp-8 → casp-3/7"]
    LIG -- "Caspase-8 被阻斷\n(z-VAD、病毒、TAK1 缺失)\n+ RIPK1/3 存在" --> NECRO["壞死性凋亡\nRIPK1→RIPK3→MLKL 孔洞\nXY / 腎 IRI 男性偏高"]
    LIG -- "無配體" --> DNA{"嚴重 DNA 損傷?"}

    DNA -- "是:MNNG、ROS、NMDA/NO、\nAβ、α-syn" --> PARP{"PARP-1 過度活化?\n10-500x PAR?\nXY 偏向 YES → parthanatos\nXX 偏向 NO → 凋亡"}
    PARP -- "是,不依賴 caspase\nXY / 男性型" --> PARTH["Parthanatos\nPAR → AIF+MIF 核切割"]
    PARP -- "否,p53 驅動\nXX / 女性型" --> APOP_IN["內源性凋亡\np53→PUMA/BAX/BAK→MOMP→casp-9→casp-3\nXX 偏好;Q-VD 保護雌性"]
    DNA -- "否" --> INF{"PAMP/DAMP + 發炎體?"}

    INF -- "LPS、mtDNA、K+ 外流、\n缺氧、溶酶體損傷\nXX 雌二醇抑制 priming" --> PYRO["細胞焦亡\nNLRP3/AIM2→casp-1→GSDMD + IL-1β/18"]
    INF -- "ZBP1/AIM2/RIPK1/NLRP12\n+ IFN priming" --> PAN["PANoptosis\nXY→RIPK3/壞死分支偏斜\nXX→casp-8/凋亡分支偏斜"]
    INF -- "否" --> IRON{"鐵 + PUFA + GPX4 缺失?\nXY 易感\nXX NRF2 耐受"}

    IRON -- "Erastin、RSL3、胱胺酸飢餓\np53→SLC7A11、ACSL4/LOX" --> FERRO["鐵死亡\n脂質過氧化,無 caspase"]
    IRON -- "否" --> ER{"內質網壓力 / 飢餓?"}

    ER -- "長期 PERK-ATF4-CHOP" --> APOP_IN
    ER -- "早期 / 缺氧 /\nmTOR 抑制" --> AUTO["適應性自噬\n→ 過度則為 ADCD"]
    ER -- "再灌流 ROS 爆發\n+ mtDNA + Ca2+" --> PAN

    APOP_EX --> T12{"DISC 強度?"}
    T12 -- "強:淋巴球 Type I" --> DIE1["直接 casp-8→casp-3\nBcl-2 無抗性"]
    T12 -- "弱:肝細胞、β 細胞、\nJurkat Type II" --> DIE2["Bid→MOMP→casp-9→casp-3\nBcl-2 敏感"]

    NECRO --> K{"MLKL K+ 外流?"}
    K -- "是" --> PYRO
    PYRO --> G{"GSDMD 量?"}
    G -- "低:神經元、肥大細胞" --> APOP_IN
    G -- "高:巨噬細胞" --> DIE3["裂解性焦亡"]
```

## 細胞類型選擇器 — 誰會怎麼死

```mermaid
flowchart LR
    C["細胞類型 + 情境"] --> N["神經元 / 多巴胺神經元\nSNpc 鐵、NMDA、α-syn"]
    C --> H["心肌細胞 / 腎小管\nI/R、doxorubicin、cisplatin"]
    C --> I["巨噬細胞 / 微膠細胞\nPAMP、LPS、OGD/R"]
    C --> E["肝細胞 / β 細胞 / PDAC\nType II、sorafenib"]
    C --> F["纖維母細胞 / 軟骨細胞\n衰老、OA"]
    C --> T["癌症 persisters / TNBC\n間質型、GPX4 成癮"]

    N --> N1["Parthanatos > 鐵死亡 > 凋亡\nXY→AIF, XX→caspase"]
    H --> H1["鐵死亡 + 壞死性凋亡\n男性 RIPK/MLKL 偏高\n女性 NRF2 耐受"]
    I --> I1["細胞焦亡 → PANoptosis\n粒線體自噬抑制"]
    E --> E1["Type II 凋亡 + 鐵死亡\nBcl-2 / venetoclax 敏感"]
    F --> F1["ACase 高 → 鐵死亡\nOA 中 NLRP3 焦亡"]
    T --> T1["GPX4 依賴性鐵死亡\nGSDME 高 → 轉為焦亡"]
```

## 性別偏好軸 — 整合於 SEX 節點，細節在此

在模式＋細胞類型確定後套用。性別改變執行者選擇，不改變壓力本身。

```mermaid
flowchart LR
    SEX{"性別 / 荷爾蒙背景"} --> XY["XY / 男性\n睪固酮、低雌二醇"]
    SEX --> XX["XX / 女性\n雌二醇、NRF2 高"]
    SEX --> OVX["OVX / 老化 / 低雌激素"]

    XY --> XY1["偏好:parthanatos\n壞死性凋亡\n鐵死亡"]
    XX --> XX1["偏好:caspase 凋亡\nNLRP3 受抑制"]
    OVX --> OVX1["男性型偏移\n↑ RIPK/MLKL, ↑ NLRP3"]

    XY1 --> RX["救援:PARP 抑制\nNec-1、Fer-1/DFO\nQ-VAD 無效"]
    XX1 --> RF["救援:Q-VD-OPh\nBcl-2 / venetoclax\nPARP 抑制有害"]
    OVX1 --> RO["救援:雌二醇恢復\nNRF2/GPX4、NLRP3 抑制"]
```

OVX＝卵巢切除（ovariectomy），停經／雌激素耗竭的動物模式。OVX 後失去雌二醇保護，轉為男性型：NLRP3 抑制解除、NRF2／GPX4 保護下降、RIPK／MLKL 與 PARP／AIF  vulnerability 上升。

| 模式 | 男性偏倚 | 女性偏倚 | 證據錨點 |
|---|---|---|---|
| [[Parthanatos]] | 強 XY — 中風／心肌梗塞、NMDA、MPTP | 弱 | PARP-1／AIF-KO 僅保護雄性；PARP 抑制傷害雌性 |
| [[Apoptosis\|細胞凋亡]] | 弱 | 強 XX — cyto c／casp-3 | Q-VD-OPh 僅保護雌性；細胞自主 XX→caspase |
| [[Necroptosis\|壞死性凋亡]] | 腎 IRI、心肌 p-MLKL 男性高 | OVX 縮小差距 | 男性 RIPK1／RIPK3／p-MLKL；cisplatin AKI SIRT2 男性 |
| [[Ferroptosis\|鐵死亡]] | 腎小管 Gpx4-KO 傷雄性 | NRF2 耐受 | 女性 NRF2／GPX4 保護；見腎／心／腦 |
| [[Pyroptosis\|細胞焦亡]] | 一旦 priming，IL-1β 輸出高 | 雌二醇抑制 priming；創傷 GSDMD 評分女性高 | 雌二醇→NLRP3 抑制；依情境判讀 |
| [[Necrosis\|壞死]] | 中性 | 中性 | 差異在受調控執行者，不在腫脹性壞死本身 |
| [[PANoptosis]] | ZBP1-RIPK3 偏向壞死臂 | Casp-8 偏向凋亡臂 | 相同刺激，不同通量；需逐細胞驗證 |

原則：男性＋神經／腎／IRI → 並行測試 PARP／AIF＋RIPK／MLKL＋Fer-1。女性＋相同情境 → 先測 caspase／Bcl-2，PARP 抑制放最後。

## 決策表

| 若看到 | 偏向 | 救援測試 |
|---|---|---|
| Caspase-3、cyto c、MOMP、無腫脹 | [[Apoptosis\|細胞凋亡]] | z-VAD／Bcl-2（僅 Type II）／venetoclax |
| p-MLKL、RIPK3、DAMPs、腫脹 | [[Necroptosis\|壞死性凋亡]] | Necrostatin-1、RIPK3／MLKL KO |
| IL-1β／IL-18、GSDMD 孔洞、ASC specks | [[Pyroptosis\|細胞焦亡]] | NLRP3 阻斷（MCC950）、casp-1 抑制 |
| Lipid-ROS、鐵、粒線體皺縮、無 caspase | [[Ferroptosis\|鐵死亡]] | Fer-1、liproxstatin-1、DFO、GPX4 救援 |
| PAR 暴增、AIF 核轉位、約 50-kb 片段、NAD+／ATP 下降 | [[Parthanatos]] | PARP 抑制（雄性）、PARG、AIF 阻斷 |
| 三臂並存，單臂阻斷無效 | [[PANoptosis]] | 合併／上游 ZBP1／TAK1／RIPK1 |
| ATP 缺失、腫脹、calpains、cathepsins | [[Necrosis\|壞死]] | 恢復 ATP／早期 Ca2+ 螯合 |
| LC3／ATG、mTOR 關閉、飢餓／缺氧 | [[Autophagic Cell Death\|自噬性細胞死亡]] | Chloroquine／mTOR 再活化 |

## 細胞類型速查

* **淋巴球 vs 肝細胞／β 細胞：** 用 Type I vs Type II 區分 — Bcl-2 僅保護 Type II。
* **神經元：** 預設懷疑 parthanatos／鐵死亡；看性別（XY→PARP／AIF，XX→caspase）與 GSDMD（低→退回凋亡）。
* **腎／心 IRI：** 先測鐵死亡（Fer-1），再測壞死性凋亡；預期男性偏倚。
* **巨噬細胞：** 預設焦亡／PANoptosis；IFN priming＋TNF-α／IFN-γ 協同為閘門。
* **衰老纖維母細胞／軟骨細胞：** 並行測 ACase／鐵死亡與 NLRP3。
* **間質型癌症：** 測 GPX4 成癮；GSDME 高 → 化療觸發焦亡。

## 壓力進入點

* **[[Endoplasmic Reticulum Stress\|內質網壓力]]／[[Integrated Stress Response\|整合壓力反應]]** → CHOP 持續時間決定自噬 vs 凋亡。
* **[[Reactive Oxygen Species\|活性氧]]／[[Hypoxia\|缺氧]]／[[Ischemia\|缺血]]** → ROS→RIPK1 vs HIF-自噬 vs ATP-壞死。
* **[[Ischemia-reperfusion Injury\|缺血再灌流損傷]]** → 視為混合死亡；驗證 PANoptosome（ASC／casp-8／RIPK3 共定位），勿只看單一標記。
* **[[DNA Damage\|DNA 損傷]]／[[Genotoxic Stress\|基因毒壓力]]** → PARP 過度活化閾值決定 parthanatos vs p53 凋亡。
* **[[Ca2+ overload\|鈣超載]]／[[Excitotoxicity\|興奮毒性]]** → calpain／mPTP 壞死＋NMDA-parthanatos 前饋。

## 文件

* [[Regulated Cell Death\|調節性細胞死亡]]
* [[Apoptosis\|細胞凋亡]]／[[Necroptosis\|壞死性凋亡]]／[[Pyroptosis\|細胞焦亡]]／[[Ferroptosis\|鐵死亡]]／[[Parthanatos]]／[[PANoptosis]]／[[Necrosis\|壞死]]／[[Autophagic Cell Death\|自噬性細胞死亡]]
* [[Type I vs Type II Cells]]

## 連結

* [[ZBP1]]／[[RIPK1]]／[[RIPK3]]／[[MLKL]] — 壞死性凋亡／PANoptosome 核心
* [[NLRP3]]／[[Caspase-1]]／[[Gasdermin D]]／[[Gasdermin E]] — 焦亡臂
* [[Caspase-8]]／[[Caspase-8-c-FLIP Rheostat]]／[[TAK1]] — 凋亡／壞死性凋亡開關
* [[PARP1]]／[[Apoptosis-Inducing Factor\|AIF]] — parthanatos 軸
* [[GPX4]]／[[System Xc-]]／[[SLC7A11]]／[[ACSL4]] — 鐵死亡軸
* [[Mitochondrial outer membrane permeabilization\|MOMP]]／[[Mitochondrial Permeability Transition Pore\|mPTP]]／[[Calcium Signaling\|鈣訊號]]

## 連結摘要

* 決策邏輯：ATP → caspase-8 → DNA／PARP → 發炎體／PANoptosome → 鐵／GPX4 → ER／CHOP。
* 細胞類型疊加決定閾值，不決定路徑身份；性別決定執行者（caspase vs PARP／AIF）。
