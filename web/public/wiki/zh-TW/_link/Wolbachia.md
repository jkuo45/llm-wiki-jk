---
title: Wolbachia
description: Wolbachia 是立克次體目（Rickettsiales）艾立希氏菌科（Ehrlichiaceae）中經母系遺傳的內共生細菌屬，可感染節肢動物與絲蟲類線蟲，改變宿主生殖行為，並在絲蟲中作為專性互利共生者提供必需的代謝產物。
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - organism
  - bacteria
  - endosymbiosis
  - parasitology
aliases:
  - Wolbachia pipientis
  - wMel
---

# Wolbachia

**Wolbachia** 是艾立希氏菌科（Ehrlichiaceae；立克次體目 Rickettsiales，α-變形菌綱 Alphaproteobacteria）中的革蘭氏陰性專性細胞內細菌屬，由 Hertig 於 1936 年自 *Culex* 蚊子中首次描述。它是地球上分布最廣的內共生生物之一——存在於很大比例的昆蟲物種中，也存在於每一種具醫學重要性的絲蟲類線蟲中——其與宿主的關係橫跨從生殖寄生到專性互利共生的完整光譜。

## 分類學

屬內的物種層級分類仍然是**未定且有爭議的**。各菌株依親緣一致性被分為若干**超群（supergroups）**，大致對應宿主類群（例如感染 *Drosophila* 的 A 與 B 超群、*Aedes albopictus* 的 A 超群，以及來自 *Brugia malayi* 的絲蟲菌株 *wBm* 與來自 *Dirofilaria immitis* 的 *wDi*）。這些究竟應視為物種還是亞種，文獻中仍在爭論，因此本知識庫採用「Wolbachia」加上菌株標示（wMel、wAlbB、wBm、wDi）的方式。

> [!info] 無法培養
> 與 *Francisella*、*Bartonella* 等近緣屬不同，*Wolbachia* 從未能在無細胞培養基上可靠生長。所有機制研究都仰賴轉染細胞株與活體宿主中的經卵傳播。它同時棲息在一個**具有三重膜的「假設性液泡」**中，藉此躲避宿主的溶酶體降解。

## 在節肢動物中的生殖操控

由於細菌占據卵巢（但未占據精子），傳播嚴格經由母系。細菌藉由將宿主生殖偏推向受感染的雌性來最大化自身的散布：

- **細胞質不相容（CI）**——研究最充分的表型。受感染雄性的精子帶有染色體層面的修飾，在使未受感染的卵受精時會讓親代原核失去有絲分裂的同步性，產生無法存活的胚胎。受感染雌性與任何雄性交配都不受影響。這使受感染雌性獲得一種頻率依賴的生殖優勢，其幅度隨族群中感染率上升，也正因如此，CI 讓 *Wolbachia* 可作為族群層級的病媒控制工具。
- **殺雄**——受感染的雄性在幼蟲發育期死亡，使性比偏向受感染的雌性。
- **性轉**——受感染的遺傳雄性發育為雌性，或發育為不育的假雌性（在 *Ostrinia scapulalis* 中有詳盡記載）。
- **孤雌生殖／產雌孤雌生殖（thelytoky）**——不需雄性的繁殖。值得注意的是，*並非所有*孤雌生殖都由 *Wolbachia* 誘發；大理石紋螯蝦就是眾所周知的反例。
- **傳染性孤雌生殖**，見於 *Trichogramma* 等寄生蜂：此時蜂是宿主，而蜂自身的宿主可作為傳播轉移的載體。

> [!info] CI 的分子基礎
> 目前的主導模型將 CI 歸因於許多 *Wolbachia* 菌株所攜帶的**噬菌體 WO** 基因組，具體而言是 *cif*（cytoplasmic incompatibility factor）基因 *cifA* 與 *cifB*，它們在雄性的生殖系中作用。救援實驗（雌性 *cifA* + 雄性 *cifB*）支持一個雙因子、基於蛋白質產物的機制，涉及精子染色質的修飾。此模型在 *Nasonia* 與 *Aedes* 中獲得良好支持，但尚未被普遍接受為完整解釋。

由 *Wolbachia* 誘發的生殖扭曲也是**物種形成**的驅動力：CI 誘發的雜交不相容可在其他生殖屏障之前出現，且已觀察到性轉後的等足類族群完全失去決定雌性的染色體。

## 在絲蟲類線蟲中的互利共生

在絲蟲中，這種關係完全反轉。*Wolbachia* 是**專性內共生者**，密集集中於下皮索（hypodermal chord）與發育中的卵母細胞，並供應線蟲自身無法合成的代謝產物。以抗生素清除內共生者（經典手段為 [[Doxycycline]]）會導致成蟲死亡或不孕——沒有它，線蟲根本無法存活。

> [!warning] 特定代謝產物宣稱的出處
> *Wolbachia* 基因組是一座**配給齊全的代謝孤島**（*wBm* 基因組帶有血基質、核黃素／維生素 B2、葉酸／B9、生物素、硫胺素／B1 與吡哆醇／B6 生合成途徑的完整路徑），但它在數種胺基酸與輔因子途徑的基因上**顯著缺失**，這正是配給型代謝孤島的典型特徵。歷來的基因組途徑重建將血基質、核黃素與葉酸指為主要的補充代謝產物，而在 *Dirofilaria immitis*–*wDi* 中的轉錄體與代謝體研究也顯示出協調表現。然而，直接的生化證據仍未完整確立其中任何一項才是*限制性*的必需代謝產物，本領域也並無一致意見。誠實的說法是：*Wolbachia* 配給數種 B 群維生素與血基質，線蟲專性地依賴它——但確切的關鍵瓶頸尚未釐清。

這種依賴性即是絲蟲疾病**抗 *Wolbachia* 療法**的機制基礎。由於這些藥物作用於細菌共生者而非線蟲本身，它們可免去毒性較大的抗線蟲藥；代價是作用較慢，以及在大規模給藥時的成本。

## 抗病毒效果與病媒控制

許多菌株的感染可使蚊類宿主獲得對正股單股 RNA 病毒（arbovirus）的抵抗力——在相關模型中包括造成[[Dengue]]的病毒、[[Chikungunya]]病毒、黃熱病病毒與西尼羅病毒。此效果**依菌株與病毒而定，並非普遍存在**：

- 對數種**正股 RNA 病毒**的保護效果穩健。
- 對**DNA 病毒**則**無效**，且在某些系統中感染反而會*增強* DNA 病毒複製。
- 對**負股 RNA 病毒**尚未證明有保護作用，因此 *Wolbachia* 不適用於此類病毒。
- 某些菌株在某些宿主中會使情況惡化：*wAlbB* 在 *Culex tarsalis* 中會*增加*西尼羅病毒傳播，方式是抑制 REL1——一個 Toll 路徑的抗病毒活化因子。

利用方式有兩種。**族群替換**策略釋放感染 *wMel* 的雌雄 *Aedes*，並藉 CI 將該菌株推向高頻率；**族群抑制**策略僅釋放受感染雄性，其與未感染雌性交配會產生無法存活的卵。2020 年發表的日惹（Yogyakarta）*Aedes aegypti* *wMel* 隨機試驗報告，與對照區相比**登革熱減少 77%**，這至今仍是最強的療效證據；Townsville 則報告引入後連續四年沒有登革熱病例。要正確擴大到多個城市，仍在研究中。

## 在絲蟲病病理中的角色

除了讓線蟲得以存活，*Wolbachia* 對**病理**亦有相當大的貢獻。[[Onchocerciasis]]與[[Lymphatic Filariasis]]的大部分病變，是由微絲蟲死亡時釋出的富含 *Wolbachia* 的物質所引發的宿主發炎反應所驅動，而非線蟲本身。這將疾病重新框定為在很大程度上由細菌生物標記驅動的發炎性疾病，也解釋了為何針對共生者下手會同時改變病理與傳播。

## Documents

提及此實體的文件清單

- [[Brugia timori]]
  - 確立了專性共生者依賴關係，對象是一種分布於印尼東部的淋巴絲蟲病病原；該檔中的抗生素與藥物相關筆記提及抗 *Wolbachia* 策略。
- [[Onchocerca volvulus]]
  - 河盲症的結節內寄生病原，其成蟲在下皮層中容納 *Wolbachia*，而微絲蟲死亡驅動了發炎性的眼部與皮膚疾病。
- [[Onchocerciasis]]
  - 將此疾病框定為在很大程度上是宿主對 *Wolbachia* 抗原的反應，這是抗內共生者療法的機制依據。
- [[Onchocerciasis Chemotherapy Research Centre]]
  - 社區導向大規模給藥的機構／運作節點，在其中抗 *Wolbachia*（doxycycline）策略需與 ivermectin 權衡。
- [[Wuchereria bancrofti]]
  - 淋巴絲蟲病最常見的病原，帶有作為專性內共生者的 *Wolbachia*；是配給型代謝產物互利共生的例證。

## 連結

- [[Onchocerca volvulus]] — *Wolbachia* 生活在雌性成蟲的下皮索與發育中的卵母細胞中；微絲蟲死亡時會釋出大量細菌，隨後的宿主發炎反應是硬化性角膜炎與失明的近因。只殺死線蟲而不殺死 *Wolbachia*，仍會留下大部分病理。
- [[Brugia timori]] 與 [[Wuchereria bancrofti]] — 這些絲蟲沒有 *Wolbachia* 配給的代謝產物就無法完成生活史或繁殖，因此 *Wolbachia* 本身就是藥物標的，攻擊它可讓病人免用毒性較大的直接驅蟲藥。
- [[Doxycycline]] — 抗 *Wolbachia* 策略的首選抗生素，因為它殺死共生者，進而殺死或使線蟲不孕；它作用緩慢，這就是它被用作大規模 ivermectin 的輔助而非取代品的原因。
- [[Microfilariae]] — *Wolbachia* 密度與微絲蟲釋出同步變化，而微絲蟲死亡正是釋出細菌抗原、引發絲蟲病免疫介導病理的事件。
- [[Simulium]] — *O. volvulus* 的黑蠅病媒；與以蚊子為主的 *Wolbachia* 策略不同，此處的病媒控制是藉由移除傳播途徑，而非利用 CI。
- [[Ivermectin]] — 標準的殺微絲蟲藥物，有效但不影響 *Wolbachia*；ivermectin（快速、殺死微絲蟲）與 doxycycline（緩慢、殺死共生者）的互補性，正是合併策略的基礎。
- [[Lymphatic Filariasis]] — 此病的大部分病變是由 *Wolbachia* 驅動的發炎反應，這將根除目標重新框定為必須同時殺死線蟲與抑制共生者。

## 連結摘要

- 新增連結：[[Doxycycline]]、[[Microfilariae]]、[[Simulium]]、[[Ivermectin]]
- 建議建立的新實體註記：[[Dengue]]、[[Aedes aegypti]]、[[Chikungunya virus]]、[[West Nile virus]]、[[Cytoplasmic incompatibility]]、[[Bacteriophage WO]]、[[Dirofilaria immitis]]、[[Filarial nematodes]]、[[Vector control]]、[[Riboflavin]]、[[Heme]]、[[Rickettsiales]]
- 應強化的重點連結：[[Onchocerca volvulus]] ↔ [[Doxycycline]]（共生者作為藥物標的）；[[Brugia malayi]] ↔ [[Wuchereria bancrofti]]（共享專性共生關係）
