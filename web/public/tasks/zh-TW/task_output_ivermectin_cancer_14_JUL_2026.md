---
title: 伊維菌素作為預防性 / 抗癌措施 — 知識圖譜追蹤發現
description: 關於伊維菌素抗癌老藥新用（repositioning）的追蹤發現，取自 wiki 知識圖譜（graphify 查詢 + 節點閱讀）。
created: 2026-07-21
updated: 2026-07-21
tags:
  - cancer
  - drug-repositioning
  - ivermectin
  - graphify-query
source: graphify query on graphify-out/graph.json (existing graph)
author: []
---
# 伊維菌素作為預防性 / 抗癌措施

> 透過 `/graphify` 在現有知識圖譜（`graphify-out/graph.json`）上產生。
> 分析日期：15_July_2026 12:35 PM PDT。

## 核心發現

wiki 語料將 **伊維菌素定位為「老藥新用的抗癌治療藥物」，而非初級預防手段**（針對未罹癌個體的化學預防）。所有筆記皆在治療 / 輔助療法脈絡下描述它——抑制增生、轉移、血管新生，以及逆轉多重抗藥性。**語料中沒有任何筆記涉及初級預防**（降低健康族群罹癌率）。

**誠實缺口：** 證據完全屬於臨床前階段——腫瘤細胞與異種移植（xenograft）模型。語料本身指出臨床驗證「仍是研究優先事項」（Lung Cancer.md）。「伊維菌素能*預防*癌症」的說法已超出語料範圍，屬推論。

---

## 語料中的抗癌證據

**核心節點：** `[[Ivermectin]]`（community 10）— 被評述為「源自驅蟲藥的潛在抗癌藥物」。

作用機制（Ivermectin.md:20-26）：
- **路徑調控：** Wnt/β-catenin、Akt/mTOR、MAPK。
- **分子標的：** 主要為 `[[PAK1]]` 抑制劑；亦抑制 `[[YAP1]]`、`[[HSP27]]`、`[[KPNB1]]`。
- **計畫性細胞死亡：** 誘發 `[[Apoptosis]]`、`[[Autophagy]]`、`[[Pyroptosis]]`。
- **腫瘤微環境：** 介導免疫原性細胞死亡（例如 `[[HMGB1]]` 釋放）。
- **癌症幹細胞：** 透過 `[[PAK1]]`–`[[STAT3]]` 軸抑制 `[[Cancer Stem Cells]]`。
- **多重抗藥性：** 透過抑制 `[[P-gp]]` 逆轉 `[[Multidrug Resistance]]`。

協同作用：`[[Cisplatin]]`、`[[docetaxel]]`、`[[paclitaxel]]`、`[[Daunorubicin]]`、`[[cytarabine]]`、`[[erlotinib]]`、`[[Dasatinib]]`、`[[dabrafenib]]`（Ivermectin.md:29）。

**各癌種引用的臨床前療效：**
- `[[Lung Cancer]]` — 與 erlotinib 協同；標靶 EGFR（Lung Cancer.md:22-30）。
- `[[glioblastoma]]` — 透過粒線體功能障礙 + 氧化壓力抑制血管新生 / 生長 / 存活。
- `[[Prostate Cancer]]` — 逆轉 enzalutamide / docetaxel 抗藥性；抑制 `[[HSP27]]` 磷酸化。
- `[[Hepatocellular Carcinoma]]` — 標靶 YAP1 / Hippo 路徑。
- `[[Colon Cancer]]`、`[[Cholangiocarcinoma]]`、`[[Leukemia]]`、`[[Renal Cell Carcinoma]]`。
- 歸類於 `[[Drug Repositioning]]`（community 33），與 `[[Fenbendazole]]` 及 `[[Mebendazole]]` 同群。

---

## 追蹤路徑：驅蟲起源 → 老藥新用的抗癌機制

**起源分支（community 10 — 驅蟲）：**
1. `[[Ivermectin]]` 是 `[[Avermectin]]` 的半合成二氫衍生物（Avermectin.md:13）— 一種 16 元大環內酯，源自 *Streptomyces avermectinius*，由 `[[Kitasato Institute]]` 的 `[[Satoshi Ōmura]]` 與 `[[William C. Campbell]]` 發現（2015 年諾貝爾獎）。
2. 驅蟲機制：`[[Glutamate-gated Cl- channels]]`（GluCls）的異位（allosteric）激動劑 — 僅見於無脊椎動物的通道；Cl⁻ 內流使膜超極化並麻痺寄生蟲（Glutamate-gated Cl- channels.md:17）。
3. **轉折點：** 人類*缺乏* GluCls。脊椎動物的 GABA_A / 甘胺酸受體需要約 100 倍更高的伊維菌素濃度；治療性血漿濃度足以避開宿主（Glutamate-gated Cl- channels.md:21）。此安全邊際使老藥新用成為可能。

**老藥新用分支（跨入致癌性社群）：**
同樣的分子在治療濃度下，作用於*哺乳類*標的而非 GluCls（Glutamate-gated Cl- channels.md:25）：
- **`[[PAK1]]`** — 伊維菌素的主要宿主激酶標的；驅動增生並透過 `[[PAK1]]`–`[[STAT3]]` 軸助長 `[[Cancer Stem Cells]]`（Ivermectin.md:22,25）。
- **`[[YAP1]]`** — 在胃癌與肝癌中被抑制的 Hippo 效應子致癌基因（Ivermectin.md:45）；亦見於 `[[Hepatocellular Carcinoma]]`、`[[Lung Cancer]]`。
- **`[[Akt]]`/`[[mTOR]]`** — 被抑制以誘發 `[[Autophagy]]` 與 `[[Apoptosis]]`（Ivermectin.md:21,44），匯聚至 PI3K-Akt/mTOR 訊號社群（community 42）。

**橋接節點：** `[[Glutamate-gated Cl- channels]]` 明確列出哺乳類標的（Glutamate-gated Cl- channels.md:25）。其連結是*藥理學上的*，而非機制連續性——同一個具備「脊椎動物豁免標的輪廓」的安全大環支架，*且*恰好對保守的哺乳類存活激酶具有親和力。數十年大規模藥物投與（OCP、APOC、Mectizan）的安全資料，支撐了老藥新用的試驗。

---

## 圖譜遍歷摘要

- 查詢 1（「ivermectin as preventative cancer measure」）：BFS depth=2，起始節點 `[Ivermectin, Cancer]`，找到 148 個節點。
- 查詢 2（追蹤路徑）：BFS depth=2，起始節點 `[YAP1, PAK1, Ivermectin, Akt, mTOR]`，找到 185 個節點。
- 觸及的相關社群：10（伊維菌素 / 阿維菌素驅蟲）、33（藥物老藥新用）、42（PI3K-Akt 訊號）、18（肺癌 / 膠質母細胞瘤群集）、6（肝癌 / 腫瘤發生）、85（Wnt / 結腸癌）。

## 關鍵節點

| 節點 | 社群 | 角色 |
|------|-----------|------|
| `[[Ivermectin]]` | 10 | 核心老藥新用藥物 |
| `[[Avermectin]]` | 10 | 母體大環內酯 |
| `[[Glutamate-gated Cl- channels]]` | 10 | 驅蟲標的；通往哺乳類標的的橋樑 |
| `[[PAK1]]` | 15 | 主要宿主激酶標的 |
| `[[YAP1]]` | — | Hippo 效應子致癌基因標的 |
| `[[Akt]]`/`[[mTOR]]` | 42 | 被抑制的存活路徑 |
| `[[Drug Repositioning]]` | 33 | 與 Fenbendazole / Mebendazole 同群的策略群集 |

## 開放問題 / 注意事項

- 語料中無初級預防證據；皆屬臨床前階段。
- 臨床驗證被明確標示為研究優先事項。
- 安全邊際建立在驅蟲劑量上；抗癌劑量 / 時程於語料中未建立。

## 參考來源筆記

- notes/cancer/Ivermectin.md
- notes/cancer/Avermectin.md
- notes/cancer/Glutamate-gated Cl- channels.md
- notes/cancer/Lung Cancer.md
- notes/cancer/Prostate Cancer.md
- notes/cancer/Hepatocellular Carcinoma.md
- notes/cancer/Fenbendazole.md、notes/cancer/Mebendazole.md（Drug Repositioning 群集）
