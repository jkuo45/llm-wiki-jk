---
title: 硒減輕鎘/鉛誘發壞死性凋亡 via MAPK/NF-kB — 網路研究
description: 硒對抗鎘/鉛壞死性凋亡保護作用之深入研究 — 硒蛋白氧化還原閘門、MAPK/NF-kB 煞車、金屬拮抗、劑型與安全窗。
created: 2026-09-11
updated: 2026-09-11
type: task-output
tags:
  - selenium
  - necroptosis
  - cadmium
  - lead
  - nf-kb
  - mapk
  - gpx4
  - thioredoxin-reductase
---

# 硒減輕鎘/鉛誘發壞死性凋亡 via MAPK/NF-kB — 網路研究
日期：11_Sep_2026 12:00 PM PDT
來源框架：Niu et al. 2026, "Regulatory complexity and therapeutic targeting of the necroptosis network" (PMC13171333) —— 發炎交互作用章節指出："Environmental toxins such as cadmium and lead have been shown to promote necroptosis via NF-κB dependent mechanisms, whereas protective agents like selenium can attenuate cell death by inhibiting the MAPK/NF-κB axis (93, 94)." 來源註記：`raw/_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network.md`。以下以原始研究與硒蛋白機制為該句提供依據。

## 來源主張之脈絡

Niu 綜述將鎘/鉛—硒之句嵌入前饋迴路模型：NF-kB → TNF/細胞激素 → 壞死性凋亡致敏 → DAMP 釋放 → 進一步活化 NF-kB。該主張對所引用的臨床前模型成立，但係以兩篇文獻壓縮、且多為禽類文獻之概括。目前未找到人類鎘/鉛—壞死性凋亡—硒之試驗資料。

## 毒素臂 — 鎘/鉛驅動 RIPK1/RIPK3/MLKL

雞肝/脾/腎/心研究之共同特徵：

- 氧化觸發：↓ SOD/GPx/CAT，↑ MDA/NO
- MAPK 活化：↑ ERK/JNK/p38 mRNA，及 ↑ p-ERK/p-JNK/p-p38 蛋白
- NF-kB 臂：↑ NF-kB、TNF-α、COX-2、iNOS
- 壞死體轉移：↑ RIPK1/RIPK3/MLKL，↓ Caspase-8
- 組織特異共標記：脾臟 HSP27/40/60/70/90；心臟 PPARα/Adiponectin/AdipoR1/R2/AMPKα1 受抑制；腎臟 Bax/Caspase-3 共同誘發

Vault 錨點：[[Necroptosis]] 即 Complex I [[NF-κB]] 存活失敗且 [[Caspase-8]] 受阻時之 RIPK1 → RIPK3 → [[MLKL]]；活化態 Caspase-8 可切割 RIPK1/RIPK3 以抑制壞死性凋亡。

## 支持該句之原始證據

### 鎘致肝損傷，硒酵母救援
Cai et al., Ecotox Environ Saf 2020.111329 —— 120 日齡蛋雞，鎘飲食 120 天。
鎘於 mRNA 與蛋白層面升高 MLKL/RIP1/RIP3/ERK/JNK/p38、降低 Caspase-8；硒酵母共處理恢復 SOD/GPx/CAT、降低 MDA，並使 MAPK 與壞死體標記正常化。

### 鉛致脾臟壞死性凋亡，亞硒酸鈉救援
Zhang et al., Ecotox Environ Saf 2020.111049 —— 醋酸鉛 150 mg/kg + Na2SeO3 2 mg/kg。
鉛增加脾臟鉛蓄積、RIP1/RIP3/MLKL、ERK/JNK/p38/NF-kB/TNF-α、HSPs；降低 Caspase-8 與抗氧化酶。硒減少鉛蓄積、恢復抗氧化功能、阻斷 MAPK/NF-kB 與 HSP 活化。

### 鉛致腎臟凋亡合併壞死性凋亡 via p38/JNK/ERK
Ecotox Environ Saf 2022.113176 —— 鉛上調 MAPK 基因及促凋亡與壞死性凋亡基因；硒減輕 p-P38/p-JNK/p-ERK（以 p-JNK 反應最明顯），並恢復 Bcl-2/Bax/Caspase-3 平衡及 RIPK1/RIPK3/MLKL/Caspase-8。

### 鎘致心損傷經脂聯素—壞死途徑
Cai et al., RSC Adv 2017 C7RA07952D —— 鎘升高 JNK/p-JNK/TNFα/RIPK1/MLKL，抑制 PPARα/Adiponectin/AdipoR1/R2/AMPKα1；硒使兩臂反轉。

### 鎘心毒性之硒劑型比較
Sci Total Environ 2021 —— 逆轉鎘蓄積、離子失衡（K+/Na+、Mg2+/Ca2+）、組織病理及經 NF-kB/IkB 之 iNOS：Nano-Se > 硒酵母 > 亞硒酸鈉。單一直接比較研究。

### 平行之鉛焦亡模型
Fish Shellfish Immunol 2023.109101 —— 草魚腎細胞 Pb 500 μM：ROS → IRAK1/TAK1/IKK → NLRP3/GSDMD/IL-1β/IL-18；Se 20 nM 降低 ROS 與焦亡/發炎標記。支持 MAPK/NF-kB 相關保護不限於壞死性凋亡。

## 硒為何具保護性 — 硒蛋白邏輯

硒並非直接清除劑，而是約 25 種硒蛋白之催化性 Sec 殘基。

- [[Glutathione Peroxidase]] 家族：Sec⁻ 還原 H2O2/ROOH → Sec-SeOH → 由 2 分子 [[Glutathione]] 再生；硒供應速率限制其活性。[[GPX4]] 獨特地還原膜磷脂/膽固醇/心磷脂氫過氧化物，為鐵死亡煞車。
- [[Thioredoxin reductase]] TXNRD1（胞質）/ TXNRD2（粒線體）：NADPH → FAD → Sec → 還原型 [[Thioredoxin]] → 還原型過氧化還原酶；還原型 Trx 抑制 [[ASK1]]，氧化型 Trx 則釋放之。
- 臨床錨點：[[Keshan disease]] —— 缺硒地區 → 心肌 GPx 衰竭 → 壞死/纖維化；補硒後預防成功。

於鎘/鉛脈絡下之保護層次：

- 氧化還原 sink：恢復 GPx/TXNRD 張力，降低驅動 ASK1-MAPK 之過氧化物負荷
- 訊號煞車：ROS 下降 → IKK/IkB 磷酸化下降 → NF-kB 下降；超營養劑量下，硒代謝物氧化 NF-kB/AP-1/JNK/PKC/caspase-3 關鍵 Cys → DNA 結合與激酶活性下降；巨噬細胞研究顯示硒充足降低 NF-kB/TNF-α/COX-2/PGE2，並升高促緩解 15d-PGJ2
- 毒物動力學拮抗：降低組織鎘/鉛蓄積、恢復離子恆定，可能經硒—金屬錯合與轉運保存

淨效應：Caspase-8 保存 → RIPK1/RIPK3 被切割 → MLKL 不被磷酸化 → 壞死體中止。

## 劑量劑型與安全窗

- 成人 RDA 55 μg/d；GPx/TXNRD 於充足即飽和 —— 超充足效益屬藥理性硫醇氧化與二十烷酸轉移作用，而非更多 GPx
- 無機硒（亞硒酸鹽/硒酸鹽）：便宜，安全窗較窄
- 有機硒（硒酵母/硒甲硫胺酸）：滯留較佳，用於肝臟救援研究
- 奈米硒：於單一雞隻比較中最強，仍屬試驗性
- 過量 → 硒中毒；高劑量硒具促氧化性，可觸發凋亡/DNA 損傷 —— GPx1 過表現致胰島素阻抗（過度淬滅 H2O2 訊號）亦為同類抗氧化悖論

## 限制與未解問題

- 幾乎全為雞脾/肝/腎/心加一魚類細胞系；哺乳類/人類轉譯未證實
- 鉛—脾論文之 HSP 誘發僅為相關性，非證實驅動者
- 脂聯素—PPARα—AMPK 途徑為心臟特異之鎘發現
- 雞 Na2SeO3 2 mg/kg 飲食等劑量不能直接對應人類 UL 400 μg/d
- 各組織中介導 MAPK/NF-kB 效應之硒蛋白為何仍未解；SELENOP 轉運與內質網硒蛋白於此文獻中研究不足

## Wiki 整合註記

- 候選交互連結：[[Necroptosis]]、[[RIPK1]]、[[RIPK3]]、[[MLKL]]、[[Caspase-8]]、[[NF-κB]]、[[p38 MAPK]]、[[GPX4]]、[[Glutathione Peroxidase]]、[[Thioredoxin reductase]]、[[Selenium]]、[[Keshan disease]]、[[Ferroptosis]]、[[Inflammation]]
- 建議新實體筆記：`src/notes/_link/` 下之 [[Selenium]] —— 建立前確認無同名檔案；納入 Sec 催化機制、GPx/TXNRD 對 ASK1-MAPK/NF-kB 之煞車、鎘/鉛拮抗摘要、劑型與安全窗表
- 實體筆記勿誇大人類相關性；雞模型證據應明確標示
