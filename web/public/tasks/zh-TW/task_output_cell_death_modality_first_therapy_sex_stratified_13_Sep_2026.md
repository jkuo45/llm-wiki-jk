---
title: "以細胞死亡型式優先的療法與性別分層：框架、性別分層中風試驗設計，與 Parthanatos 轉譯落差"
description: "三部分研究撰文：(1) 型式優先／病人其次的藥物開發框架及其是否普遍或被忽視；(2) 基於知識庫證據的具體性別分層急性缺血性中風試驗設計（男性 PARP/parthanatos 組、女性泛 caspase + ER-β 組）；(3) Parthanatos 的臨床轉譯落差（JPI-289/amelparib），並附建議的筆記更新。"
created: 2026-09-13
updated: 2026-09-14
type: task-output
tags: [task-output, research, cell-death, parthanatos, apoptosis, necroptosis, ferroptosis, pyroptosis, sex-dimorphism, precision-medicine, stroke, estrogen, ER-beta, bh3-profiling, gasdermin, trial-design]
author: []
---

# 以細胞死亡型式優先的療法與性別分層

外部文獻綜整，並交叉參照知識庫筆記（`src/notes/cell-death/`、`src/notes/_link/`）。
產生：13_Sep_2026 09:08 PM PDT。
方法：定向網路搜尋（綜述、ClinicalTrials.gov、期刊原始來源）+ 知識庫筆記檢視。配套知識庫閱讀：[[Parthanatos]]、[[PARP1]]、[[Apoptosis|細胞凋亡]]、[[Pyroptosis|細胞焦亡]]、[[Estrogen Receptor|雌激素受體]]，另加 `src/tasks/task_output_sex_dimorphic_cell_death_05_Sep_2026.md`、`src/tasks/task_output_cell_death_modality_distribution_research_13_Sep_2026.md`、`src/tasks/task_output_cell_death_quadrants_controlled_inflammatory_lens_04_SEP_2026.md`。

## 摘要 / 底線

「以細胞死亡為標的的療法」名目下，常被混為一談的有兩種截然不同的實務：

1. **效應端藥物設計**——針對某型式的機制打造分子（BCL-2、RIPK1、gasdermin、GPX4、PARP-1、caspase）。這在研發管線中**司空見慣、活躍且持續成長**。
2. **病人端型式選擇**——量測（或預測）*特定病人*體內以哪條死亡途徑為主，並據此配對療法。這**罕見且才剛萌芽**，且幾乎僅限腫瘤學。
3. **以性別作為型式分層因子**——因病人的性別可預測主導的死亡執行者（男性 → PARP/AIF parthanatos；女性 → cytochrome-c/caspase 凋亡）而選擇療法。這是**真實、經反覆驗證的臨床前生物學，但在臨床試驗中幾乎完全缺席**——是此領域被剝削最少的一扇窗口。

整個生物醫學中驗證最充分的例子是缺血性腦損傷：雄性神經元死於 parthanatos，雌性神經元死於內源性凋亡，且為細胞自主性（XY vs XX），相應的抑制劑只拯救相配的性別。然而唯一以 parthanatos 為標的的臨床計畫（JPI-289/amelparib）是在雄性典型生物學基礎上建構，且未以性別分層收案。該框架**概念上成立、機制上有根據，但臨床上被忽視**。

---

## 第一部分 — 框架：「型式優先、病人其次」的開發

### 1.1 效應端標的是標準實務

| 型式 | 藥物類別 | 臨床狀態（截至 2026 年 9 月） |
| --- | --- | --- |
| **凋亡** | BH3 模擬劑（BCL-2/MCL-1/BCL-XL：venetoclax、navitoclax、MCL-1 計畫）、死亡受體促效劑、IAP 拮抗劑（TNBC 中 LCL161 的 2018 年精準配對試驗） | Venetoclax 已核准；MCL-1/BCL-XL 於試驗中；IAP 拮抗劑 + 化療試驗以 TNF-α 相關基因特徵分層 |
| **壞死性凋亡** | RIPK1 抑制劑（GSK2982772；Sanofi/Denali SIR1-365） | 達 Ph2（乾癬、潰瘍性結腸炎、類風濕關節炎）；耐受良好但無療效分離；計畫大多降級。首例 RIPK1 藥物進入人體為 2017 年（Weisel，*Pharmacol Res Perspect*） |
| **細胞焦亡** | Gasdermin 平台（GSDMD/GSDME）；發炎體（NLRP3）抑制劑 | 早期／轉譯階段；GSDME 生物學是最乾淨的「型式切換」故事（Nature 2017） |
| **鐵死亡** | GPX4/System x_c⁻ 途徑的誘導劑與抑制劑 | 尚無核准；綜述指出病人族群選擇是欠缺的一步；首批 Ph1 展開中（例如 CNSI-Fe(II) NCT06048367；四川恩瑞/四川大學華西醫院；晚期實體腫瘤，Ph1 已完成） |
| **Parthanatos** | PARP-1 抑制劑（DPQ、PJ-34、veliparib、olaparib；中風專用：JPI-289/amelparib、MP-124） | 腫瘤學巨大成功係透過 **HRD/合成致死——而非 parthanatos**。唯一中風計畫：JPI-289 Ph2a（NCT03062397） |

所以「*透過*途徑 X 殺死細胞」是正常的藥物設計。不顯而易見的部分是*從病人身上*選擇 X。

### 1.2 病人端型式選擇：三個範例

**A. BH3 輪廓分析（凋亡 priming）——最接近已部署的型式優先醫療。** 功能性檢測（Letai 實驗室），以 BH3 胜肽或模擬劑工具組量測粒線體「priming」與 BCL-2 家族依賴性。治療前 priming 可預測化療／放療反應；*動態* BH3 輪廓分析（DBP）在細胞死亡*之前*（提早數天）量測治療誘導的 Δpriming，現已可在微流體裝置上處理切片級樣本。這是該領域證明「量測執行者狀態，再配對藥物」可行的證據——但僅限腫瘤，且尚未成為標準照護。

**B. GSDME 型式切換——一個機制實質上就是「重新鎖定死亡型式」的藥物。** 當 GSDME 被靜默（啟動子高度甲基化，見於多數癌症）時，化療藥物透過凋亡殺死細胞；當 GSDME 表現時（caspase-3 切割 GSDME → GSDME-N 孔洞），則透過*細胞焦亡*（具免疫原性）。Decitabine（DNMTi）可重啟 GSDME 表現並切換型式；GSDME 甲基化被提出作為化療反應生物標記（包括 2024 年的一項乳癌術前預測 ANN 模型）。副作用推論：正常組織中高 GSDME 表現解釋了化療毒性——所以型式選擇也有安全性軸。

**C. 鐵死亡分層——被明確標記為欠缺。** 近期綜述（例如 *Signal Transduct Target Ther* 2024；攝護腺癌精準綜述 2026）指出，辨識具反應性的病人族群（依腫瘤基因型、鐵／脂質過氧化狀態、GPX4/SLC7A11 狀態）「對成功的臨床試驗至關重要」——亦即此領域自身承認病人選擇層尚未完成。

### 1.3 以性別作為型式分層因子：真實的生物學，零試驗

知識庫已存放最強的證據集（見 [[Parthanatos]] §性別二型性、[[PARP1]]、[[Apoptosis|細胞凋亡]]、[[Pyroptosis|細胞焦亡]]、`task_output_sex_dimorphic_cell_death_05_Sep_2026.md`）：

- **雄性（XY）死亡臂——parthanatos：** nNOS → PARP-1 → PAR → AIF/MIF。PARP-1 剔除、nNOS 阻斷或 PARP 抑制僅在雄性中縮小梗塞；Harlequin（AIF 缺陷）成鼠僅雄性受保護（McCullough 2005 PMID 15689952；Yuan 2009；Hagberg 2004）。
- **雌性（XX）死亡臂——內源性凋亡：** 較高、較早的 cytochrome-c → caspase-9/3/8；泛 caspase 抑制（Q-VD-OPh）僅保護雌性；PARP-1 缺失者*惡化*雌性損傷（分流至 caspase）（Liu 2011 *Stroke* 42:739–745 PMID 21311064；Du 2004 PMID 15365098）。
- **雌激素位於同一軸上：** 17β-雌二醇的神經保護僅限雌性，且依賴 PARP-1；ERβ 促效作用（而非 ERα）約束雌性的 NLRP3/焦亡（知識庫 [[Pyroptosis|細胞焦亡]]；Xu 2016 PMID 26928197；Zhu 2026 *J Clin Invest* e196636）；ERβ 缺陷驅動巨噬細胞焦亡。

因此對應關係正是使用者的直覺：**「對男性鎖定 parthanatos，對女性採 ER 依賴保護。」** 臨床上：無人檢驗。這就是第二部分的落差所在。

---

## 第二部分 — 實作範例：性別分層急性缺血性中風試驗

概念設計（稻草人式初稿；需建模、法規與意見領袖輸入——非驗證過的試驗計畫）。

### 2.1 理由

- 型式分裂是生物醫學中驗證最充分的（成體 MCAO、新生兒 HI、XY/XX 培養）。
- JPI-289（amelparib，Jeil）：水溶性 PARP-1 抑制劑，IC50 約 18.5 nM（PARP 活性）/ 10.7 nM（細胞 PAR）；猴 tMCAO 中梗塞減少 49%（MP-124 為 21%）；Ph1 於**健康雄性志願者**；Ph2a NCT03062397（急性缺血性中風，SOC + tPA）未做性別分層。
- 雌性側候選物存在但未就中風開發：泛 caspase 抑制劑（臨床前 Q-VD-OPh；臨床 emricasan 在人體驗證了此類別，但在 NASH 未達標）、ERβ 選擇性促效劑（erteberel/LY500307 在思覺失調症、良性攝護腺肥大、停經前憂鬱達 Ph2；ERB-041 於克隆氏症——皆為中止的計畫，可重用）。

### 2.2 設計

**族群：** 中至大範圍前循環 AIS（ASPECTS ≥ 6），治療窗 ≤ 6 小時（PARP 窗在再灌流後為分鐘級；意在與血栓溶解／血栓切除併用），兩性皆納入。

**隨機前分層（與組別獨立）：** 性別 × 荷爾蒙狀態：男性 / 停經前女性 / 停經周邊期女性 / 停經後女性（代理：FSH + 最後月經日期；年齡 ≥ 55 作為備援）。

**核心設計——配對、性別分層、生物標記自適應：**

| 組 | 族群 | 研究治療 | 機制配對 |
| --- | --- | --- | --- |
| A | 男性（所有荷爾蒙狀態） | PARP-1 抑制劑（amelparib 級；或 PJ-34 級 CNS 穿透型）+ SOC | 阻斷雄性主導的 parthanatos 執行者（PAR → AIF/MIF） |
| B | 女性（所有荷爾蒙狀態） | 泛 caspase-3 抑制劑（Q-VD-OPh 級；以 emricasan 作為安全性對照註冊）**±** ERβ 選擇性促效劑併用（erteberel/LY500307 級重定位；OSU-ERβ-12 級若有）+ SOC | 阻斷雌性主導的內源性凋亡；ERβ 軸約束 NLRP3/焦亡，並保留雌二醇保護所需的 PARP-1 |

每個性別組皆為隨機、雙盲、安慰劑對照比較（治療：安慰劑 = 2:1），於單一自適應平台內執行，使生物標記與安全性資料共享。

**型式驗證生物標記骨幹**（急性中風中可行，多為血液／CSF）：
- Parthanatos：血漿／CSF PAR 聚合物（ELISA）、NAD⁺ 下降；僅為周邊替代指標（核 AIF 轉位僅限組織）。
- 凋亡：血清 M30/M65（CK18 片段，經驗證的凋亡生物標記）、CSF 中 cleaved caspase-3、cfDNA 約 180-bp 階梯（核小體模式）。
- 溶裂／壞死：cfDNA 高分子量塗片、HMGB1、LDH 同功酶。
- 無論型式為何的救援判讀：24–72 小時 MRI 梗塞體積、90 天 mRS 位移。

**關鍵決策規則（此設計的全部重點）：** 主要分析是**型式分層的治療效果**——例如期待 PARP 抑制劑的 responders 為生物標記 PAR 偏高者（且為男性），caspase 抑制劑的 responders 為 cleaved-caspase-3 偏高者（且為女性）。預先指定：整體效果為零但存在性別 × 型式交互作用，*並非*失敗試驗，而是核心假說。納入貝氏自適應配置，朝每個藥物顯現訊號的層別配置，並為每個性別組預先規劃無效停滯。

### 2.3 風險與誠實的保留

- **體內的死亡型式標記並不完美：** cfDNA 與 M30/M65 無法完全分離 parthanatos 與壞死；AIF 轉位的周邊替代指標不存在。人體無法取得組織（半影帶切片）——這就是本試驗檢驗「以替代指標驗證收案」的原因。
- **計畫先例令人沮喪：** emricasan（泛 caspase）於 NASH 未達標且可能惡化纖維化（*J Hepatol* 2020）；慢性雌二醇中風試驗失敗（WEST、WHI——更多致死性中風）；JPI-289 的 Ph2a 狀態停滯／不明；RIPK1 抑制劑在免疫介導疾病中顯示標的接合但無療效（對單一型式阻斷的單藥療法構成警示）。
- **PARP 抑制劑帶有腫瘤等級的安全性（骨髓抑制、QTc）**，未針對急性中風調校；在時間關鍵疾病中做劑量探索很困難。
- **性別 × 荷爾蒙狀態是執行者狀態的代理，而非保證：** 老年女性朝向類似男性的發炎性/PARP 死亡收斂（Jog & Caricchio 2013），因此女性組可能需要依年齡分層分析，或預先指定「停經後女性 = 雙重療法」分支。
- **法規：** 一試驗一仿單使性別專屬仿單在概念上笨拙；此設計應框定為單一計畫下的兩項伴隨試驗（如同 master protocols），而非性別限制的仿單。

### 2.4 為何此事可成為旗艦「型式優先」案例

- 其生物學在兩個物種、兩個發育窗口與性別分隔培養中皆獲驗證——與此領域任何臨床前型式主張同級。
- 兩項介入皆已有臨床階段小分子（amelparib；emricasan 級；erteberel 級）——無需從零化學合成。
- 這是「男性 parthanatos / 女性 ER-caspase」唯一能以現有資產檢驗之處。

---

## 第三部分 — Parthanatos 之臨床轉譯落差（供 [[Parthanatos]] 筆記使用）

### 3.1 為筆記更新彙整的事實

- **JPI-289 / amelparib**（Jeil Pharmaceutical）：中風中唯一以 parthanatos（PARP-1）為標的的計畫。對 PARP-1 活性的 IC50 為 18.5 nM、細胞 PAR 為 10.7 nM；在大鼠 OGD、tMCAO/pMCAO 與猴 tMCAO（約 49% 梗塞減小）中具神經保護。Ph1 於健康**男性**志願者；Ph2a（NCT03062397）與登錄資料皆無性別分層設計；後續轉譯工作顯示 AIS 病人中 Treg 上調。（知識庫交叉參考：`task_output_sex_dimorphic_cell_death_05_Sep_2026.md`，其亦記錄 NCT01983358。）
- **性別分層細胞死亡中風試驗：** 截至 2026 年 9 月不存在（登錄庫搜尋）。
- **女性組分子空間：** 泛 caspase 抑制（Q-VD-OPh 僅臨床前、僅雌性救援）；emricasan（臨床泛 caspase，2020 年 NASH 未達標）；ERβ 選擇性促效劑（erteberel LY500307——思覺失調症 Ph2 NCT01874756、停經前憂鬱 NCT03689543、良性攝護腺肥大——已中止；ERB-041 克隆氏症 Ph1b/2a；OSU-ERβ-12 臨床前 2026 年，PK 優於 erteberel）；非致女化、ER 靜默的雌二醇類似物（Wise 2004）從未離開臨床前。
- **雌二醇為基礎的臨床中風試驗失敗**（WEST、WHI 慢性 E2）——女性策略應為型式配對（caspase）與 ERβ 標的，而非慢性雌激素。

### 3.2 建議的筆記文本

追加至 [[Parthanatos]] §性別二型性（本次已實作）：

> 性別分裂的臨床轉譯仍未受檢驗。唯一以 parthanatos 為標的的中風計畫 JPI-289（amelparib，Jeil；PARP-1 IC50 18.5 nM；猴 tMCAO 約 49% 梗塞減小），其 Ph1 於健康男性志願者執行，Ph2a（NCT03062397，急性缺血性中風）未做性別分層——雄性選擇性生物學從未被用來設計它。不存在性別分層的細胞死亡神經保護試驗。女性側候選物更落後：泛 caspase 抑制是型式配對策略（Q-VD-OPh，僅雌性救援），但臨床泛 caspase 資料（emricasan，NASH Ph2b 未達標）令人沮喪，而 ERβ 選擇性促效作用（erteberel/LY500307、ERB-041）僅在非中風適應症達 Ph2（思覺失調症、良性攝護腺肥大、克隆氏症）。慢性雌二醇中風試驗失敗（WEST、WHI），因此女性組設計應鎖定執行者（caspase-3）與 ERβ 軸，而非取代雌激素。

### 3.3 本篇撰文的維基變更狀態

- 本次已完成：`src/notes/cell-death/Parthanatos.md`——於 §性別二型性新增臨床轉譯落差段落；`updated:` 提升至 2026-09-13。
- 可選後續：在 [[PARP1]] §性別二型的 PARP-1/AIF 死亡中複製性別分層框架（加入 JPI-289 + emricasan/ERβ 候選物）；建立專屬 [[Amelparib]] 實體筆記；以 ERβ 選擇性促效劑版圖擴充 [[Estrogen Receptor|雌激素受體]]。

---

## 接下來往哪裡走（「使其成為標準」）

1. **於急性中風族群的發作時驗證型式生物標記**（血液中的 PAR/cfDNA/M30；以解剖／大範圍半球切除病例的組織型式相關聯）。
2. **執行性別分層自適應平台（第二部分）**，兩個收案層位於單一 master protocol 內；使性別 × 生物標記交互作用成為預先指定的主要分析。
3. **腫瘤學對應：** 將 BH3 輪廓分析與 GSDME 甲基化推向前瞻性試驗選擇；在鐵死亡計畫一開始即加入性別分層分析。
4. **法規框架：** 朝向型式的伴隨診斷式仿單教育，並以性別作為型式分類器的一項輸入。

## 參考文獻（選錄）

- McCullough LD 等人。Ischemic nitric oxide and poly(ADP-ribose) polymerase-1 in cerebral ischemia: male toxicity, female protection. *J Cereb Blood Flow Metab* 2005;25(4):502–512. PMID 15689952.
- Yuan M 等人。Sex differences in the response to activation of the poly(ADP-ribose) polymerase pathway after experimental stroke. *Exp Neurol* 2009;217:210–218.
- Liu F 等人。Sex differences in the response to PARP-1 deletion and intervention in experimental stroke. *Stroke* 2011;42:739–745. PMID 21311064.
- Du L 等人。Innate gender-based proclivity in response to cytotoxicity and programmed cell death pathway. *J Biol Chem* 2004;279:38563–38570.
- Hagberg H 等人。PARP-1 disruption preferentially protects males from perinatal hypoxia-ischemia. *J Neurochem* 2004;90:1068–1075.
- Wang Y 等人。(Nature 2017) Chemotherapy drugs induce pyroptosis through caspase-3 cleavage of a gasdermin. *Nature* 547:99–103（GSDME 切換）。
- Zhaorigetu S 等人。JPI-289 Ph2a, NCT03062397 (ClinicalTrials.gov)；Kim 等人 2018a（JPI-289 中風計畫）。
- Singh M 等人。Ferroptosis in cancer: mechanism and therapeutic potential. *Int J Mol Sci* 2025;26(8):3852；*Signal Transduct Target Ther* 2024（鐵死亡分層落差）。
- Weisel K 等人。RIPK1 inhibitor GSK2982772 — FIH (*Pharmacol Res Perspect* 2017) and Ph2 psoriasis (*Clin Pharmacol Ther* 2020) / UC（失敗，*BMJ Open Gastro* 2021）。
- Ryan J, Montero J, Rocco J, Letai A. iBH3: fixable BH3 profiling. *Biol Chem* 2016;397:671–678；Manzano-Muñoz A 等人。Microfluidic dynamic BH3 profiling. *npj Precis Oncol* 2022。
- Garcia-Tsao G 等人。Pan-caspase inhibition with emricasan in NASH. *J Hepatol* 2020;72:885–895.
- ERβ 促效劑：erteberel (LY500307) NCT01874756、NCT03689543；OSU-ERβ-12，*J Med Chem* 2021（臨床前）；Zhu 等人 *J Clin Invest* 2026;136(10):e196636（ERβ 與焦亡）。