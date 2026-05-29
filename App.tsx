import React, { useMemo, useState } from "react";

const meta = {
  title: "Lipitler",
  subtitle: "Exam-focused interactive notes",
  desc: "Veteriner biyokimya için lipitlerin tanımı, yağ asitleri, eikosanoidler, fosfolipitler, sfingolipitler, izopren türevleri ve lipoproteinler.",
};

const overview = [
  [
    "Tanım",
    "Lipitler suda çözünmez; eter, kloroform ve aseton gibi organik çözücülerde çözünür.",
  ],
  ["Enerji", "1 g yağ oksidasyonu yaklaşık 9.3 kcal enerji sağlar."],
  [
    "Yapı taşı",
    "Lipitlerin proteinler veya karbonhidratlar gibi tek tip yapı taşı yoktur.",
  ],
  [
    "Yağ asidi",
    "Yağ asitleri genelde R-COOH yapısında uzun zincirli monokarboksilik asitlerdir.",
  ],
  [
    "Amfipatik",
    "Fizyolojik pH’da -COOH → -COO⁻ olur; hidrofilik baş + hidrofobik kuyruk yapısı oluşur.",
  ],
  [
    "Cis bağ",
    "Cis çift bağlar membranda sık paketlenmeyi önler ve akışkanlığı artırır.",
  ],
  [
    "Esansiyel",
    "Linoleik ve linolenik asit besinlerle alınması gereken esansiyel yağ asitleridir.",
  ],
  [
    "Eikosanoid",
    "Araşidonik asit → COX yolu ile PG/TX; lipooksijenaz yolu ile LT oluşur.",
  ],
  ["Sfingolipit", "Seramid bütün sfingolipitlerin temel yapısal birimidir."],
  [
    "Lipoprotein",
    "Şilomikron eksojen lipitleri, VLDL endojen TG’leri, LDL kolesterolü, HDL ters kolesterolü taşır.",
  ],
];

const sections = [
  {
    id: "tanım",
    category: "Temel",
    weight: "Çok yüksek",
    title: "Lipitlerin Tanımı, Fonksiyonları ve Sınıflandırılması",
    summary: "Lipit kavramı, biyolojik görevleri ve sınıflandırma mantığı.",
    blocks: [
      {
        type: "note",
        label: "Mutlaka Bil",
        items: [
          "Lipitler suda çözünmeyen; eter, kloroform, aseton gibi organik çözücülerde kolay çözünen biyomoleküllerdir.",
          "Bir maddenin lipit sayılabilmesi için en azından yağ asitleriyle esterleşebilir karakterde olması gerekir.",
          "Sialik asit, fosfat, amin ve sülfat gibi gruplar bazı lipitlere çözünürlük özelliği kazandırabilir.",
        ],
      },
      {
        type: "cards",
        title: "Lipitlerin Fonksiyonları",
        cards: [
          [
            "Membran",
            "Hücresel zarların yapısal ve işlevsel bileşenidir; madde akışını kontrol eder.",
          ],
          [
            "Enerji",
            "1 g yağ oksidasyonu ile yaklaşık 9.3 kcal enerji elde edilir.",
          ],
          [
            "Depo",
            "Yağ dokuda depolanan yağlar enerji deposu olarak görev yapar.",
          ],
          [
            "Hormon / vitamin",
            "Hormonlar haberleşmede, vitaminler biyolojik regülasyonda rol oynar.",
          ],
          [
            "Koruma",
            "Deri altında ve organ çevresinde ısı yalıtımı ve mekanik koruma sağlar.",
          ],
          [
            "Sinir",
            "Özellikle sinir hücrelerinde elektriksel yalıtımda önemlidir.",
          ],
          [
            "Taşıma",
            "Proteinlerle birleşerek lipoproteinleri oluşturur ve kanda taşınır.",
          ],
        ],
      },
      {
        type: "table",
        title: "Ana Sınıflandırma",
        heads: ["Grup", "İçerik", "Sınav Notu"],
        rows: [
          [
            "Yağ asitleri",
            "Kısa, orta, uzun zincirli yağ asitleri ve eikosanoidler",
            "R-COOH, doymuş/doymamış ayrımı önemli",
          ],
          [
            "Gliserol türevleri",
            "Triaçilgliserol, mum, gliserofosfolipit",
            "Fosfatidik asit gliserofosfolipit çekirdeğidir",
          ],
          [
            "Sfingozin türevleri",
            "Sfingofosfolipit, glikolipit",
            "Temel yapı seramiddir",
          ],
          [
            "İzopren türevleri",
            "Terpen, sterol",
            "Kolesterol, safra asidi, D vitamini, steroid hormon",
          ],
          [
            "Lipoproteinler",
            "Lipit + protein kompleksleri",
            "Şilomikron, VLDL, IDL, LDL, HDL",
          ],
        ],
      },
      {
        type: "table",
        title: "Basit / Kompleks / Türev Lipit Ayrımı",
        heads: ["Sınıf", "Tanım", "Örnek"],
        rows: [
          [
            "Basit lipit",
            "Yağ asitlerinin çeşitli alkollerle esterleri",
            "Yağlar, mumlar",
          ],
          [
            "Kompleks lipit",
            "Alkol ve yağ asidine ek gruplar taşıyan esterler",
            "Fosfolipit, glikolipit, sülfolipit, aminolipit, lipoprotein",
          ],
          [
            "Öncü ve türev lipit",
            "Lipit öncülleri veya metabolik türevleri",
            "Yağ asidi, gliserol, steroid, keton cisimleri, yağda çözünen vitamin, hormon",
          ],
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Gliserofosfolipitlerde alkol gliseroldür.",
          "Sfingofosfolipitlerde alkol sfingozindir.",
          "Glikolipitlerde yapı: yağ asidi + sfingozin alkol + karbohidrat.",
          "Açil gliseroller, kolesterol ve kolesterol esterleri yüksüz oldukları için nötral lipittir.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "Lipitlerin tanımı.",
          "1 g yağın enerji değeri.",
          "Basit, kompleks ve türev lipit ayrımı.",
          "Gliserofosfolipit ile sfingofosfolipit farkı.",
          "Nötral lipit örnekleri.",
        ],
      },
    ],
  },
  {
    id: "yag-asitleri",
    category: "Yağ Asitleri",
    weight: "Çok yüksek",
    title: "Yağ Asitleri: Yapı, Adlandırma ve Numaralandırma",
    summary: "R-COOH yapısı, amfipatik özellik, Δ/ω sayımı ve sembol okuma.",
    blocks: [
      {
        type: "note",
        label: "Mutlaka Bil",
        items: [
          "Yağ asitleri genelde uzun zincirli monokarboksilik asitlerdir.",
          "Kapalı formülleri R-COOH’tur.",
          "Organizmada çoğu yağ açil esteri şeklinde, azı serbest halde bulunur.",
          "Serbest yağ asitleri dolaşımda albümine bağlı taşınır ve enerji sağlamak için oksidasyona uğrar.",
        ],
      },
      {
        type: "flow",
        title: "Fizyolojik pH’da Yağ Asidi",
        steps: [
          "-COOH pKa ≈ 4.8",
          "Fizyolojik pH",
          "-COOH → -COO⁻",
          "Hidrofilik baş + hidrofobik kuyruk",
          "Amfipatik karakter",
        ],
      },
      {
        type: "table",
        title: "Zincir Uzunluğuna Göre Sınıflandırma",
        heads: ["Karbon sayısı", "Sınıf", "Not"],
        rows: [
          ["2–6 C", "Kısa zincirli", "Suda çözünürlük daha fazladır"],
          ["8–10 C", "Orta zincirli", "Ara özellik gösterir"],
          ["12–24 C", "Uzun zincirli", "Doğada en yaygın olanlar"],
          [
            "2–80 C",
            "Genel aralık",
            "Yağ asitlerinde zincir uzunluğu geniş değişebilir",
          ],
        ],
      },
      {
        type: "table",
        title: "Yağ Asidi Sınıfları",
        heads: ["Sınıf", "Özellik", "Örnek / not"],
        rows: [
          ["Doymuş", "Çift bağ içermez", "Palmitik, stearik"],
          [
            "Doymamış",
            "Bir veya daha fazla çift bağ içerir",
            "Oleik, linoleik, linolenik, araşidonik",
          ],
          ["Hidroksi yağ asidi", "Zincirde -OH taşır", "Serebronik asit"],
          ["Eikosanoid", "20 C’lu PUFA türevi", "PG, TX, LT"],
        ],
      },
      {
        type: "note",
        label: "Adlandırma Mantığı",
        items: [
          "Karboksil karbonu 1 numaralı karbondur.",
          "Karboksile komşu karbon α-karbon; sonra β, γ, δ şeklinde devam eder.",
          "Hidrokarbon kuyruğunun son metil karbonu omega (ω) veya n-karbon olarak adlandırılır.",
          "Δ numaralandırma karboksil uçtan başlar.",
          "ω/n numaralandırma metil uçtan başlar.",
          "Doymuş yağ asitlerinde -oik; doymamışlarda -enoik eki kullanılır.",
        ],
      },
      {
        type: "table",
        title: "Sembol Okuma",
        heads: ["Sembol", "Anlam", "Örnek"],
        rows: [
          ["16:0", "16 karbon, çift bağ yok", "Palmitik asit"],
          [
            "18:1 Δ9",
            "18 karbon, 1 çift bağ, 9–10. karbonlar arası",
            "Oleik asit",
          ],
          ["18:1 Δ9 trans", "18 karbon, 1 trans çift bağ", "Elaidik asit"],
          ["16:1 n-7", "Metil uçtan 7. karbonda çift bağ", "Palmitoleik asit"],
          ["18:3 Δ9,12,15", "18 karbon, 3 çift bağ", "Linolenik asit"],
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Δ karboksil uçtan, ω metil uçtan sayılır.",
          "Cis konfigürasyon genelde ayrıca yazılmaz; trans ise belirtilir.",
          "Yağ asidinin fizyolojik özelliklerini zincir uzunluğu ve doymamışlık derecesi belirler.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "R-COOH yapısı.",
          "Fizyolojik pH’da -COOH grubunun iyonizasyonu.",
          "Δ ve ω numaralandırma farkı.",
          "16:0, 18:1 Δ9, 18:3 Δ9,12,15 sembollerini yorumlama.",
        ],
      },
    ],
  },
  {
    id: "doymus",
    category: "Yağ Asitleri",
    weight: "Çok yüksek",
    title: "Doymuş ve Doymamış Yağ Asitleri",
    summary:
      "Satüre/ansatüre ayrımı, cis-trans izomerizm, esansiyel yağ asitleri ve membran akışkanlığı.",
    blocks: [
      {
        type: "note",
        label: "Mutlaka Bil",
        items: [
          "Doymuş yağ asitlerinde çift bağ yoktur.",
          "Doymamış yağ asitlerinde bir veya daha fazla çift bağ bulunur.",
          "Doğadaki doymamış yağ asitlerinin çoğunda çift bağlar cis konumundadır.",
          "Çift bağ sayısı arttıkça erime noktası düşer.",
        ],
      },
      {
        type: "table",
        title: "Doymuş Yağ Asitleri",
        heads: ["Yağ asidi", "Karbon iskeleti", "Sınav notu"],
        rows: [
          ["Asetik", "2:0", "Kısa zincirli"],
          ["Propiyonik", "3:0", "Ruminant metabolizmasında önemli"],
          ["Butirik", "4:0", "Ruminant metabolizmasında önemli"],
          ["Kaproik", "6:0", "Süt, peynir, tereyağı ile ilişkili"],
          ["Kaprilik", "8:0", "Keçi sütü ve bazı yağlarda bulunabilir"],
          ["Kaprik", "10:0", "Orta zincir karakteri"],
          ["Laurik", "12:0", "Defne, hindistan cevizi"],
          ["Miristik", "14:0", "Doymuş yağ asidi"],
          ["Palmitik", "16:0", "Doğada en yaygın 2. yağ asidi"],
          ["Stearik", "18:0", "Hayvansal yağlarda çok bulunur"],
          ["Araşidik", "20:0", "Uzun zincirli"],
          ["Behenik", "22:0", "Uzun zincirli"],
          ["Lignoserik", "24:0", "Uzun zincirli"],
          ["Serotik", "26:0", "Uzun zincirli"],
        ],
      },
      {
        type: "table",
        title: "Doymamış Yağ Asitleri",
        heads: ["Yağ asidi", "Sembol", "Kritik bilgi"],
        rows: [
          [
            "Palmitoleik",
            "16:1 Δ9 / ω-7",
            "Suda yaşayan hayvanlarda baskın olabilir",
          ],
          ["Oleik", "18:1 Δ9 / ω-9", "Doğada en yaygın yağ asidi"],
          ["Vaksenik", "18:1 Δ11", "Bitkilerde bulunur"],
          ["Linoleik", "18:2 Δ9,12 / ω-6", "Esansiyel yağ asidi"],
          ["Linolenik", "18:3 Δ9,12,15 / ω-3", "Esansiyel yağ asidi"],
          ["Araşidonik", "20:4 Δ5,8,11,14 / ω-6", "Prostaglandinlerin öncüsü"],
          ["EPA", "20:5 Δ5,8,11,14,17 / ω-3", "Omega-3 PUFA"],
          ["DHA", "22:6 Δ4,7,10,13,16,19 / ω-3", "Omega-3 PUFA"],
          ["Nervonik", "24:1 Δ15", "Uzun zincirli doymamış yağ asidi"],
        ],
      },
      {
        type: "cards",
        title: "MUFA / PUFA",
        cards: [
          [
            "MUFA",
            "Mono Unsaturated Fatty Acid: Tek çift bağ içerir. Örnek: oleik asit.",
          ],
          [
            "PUFA",
            "Poly Unsaturated Fatty Acid: Birden fazla çift bağ içerir. Örnek: linoleik, linolenik, araşidonik.",
          ],
        ],
      },
      {
        type: "flow",
        title: "Cis Çift Bağ → Membran Akışkanlığı",
        steps: [
          "Cis çift bağ",
          "Zincirde bükülme",
          "Sık paketlenme azalır",
          "Membran akışkanlığı artar",
          "Geçirgenlik ve esneklik artar",
        ],
      },
      {
        type: "note",
        label: "Cis-Trans İzomerizm",
        items: [
          "Çift bağ çevresindeki hidrojenler aynı taraftaysa cis konfigürasyon oluşur.",
          "Hidrojenler zıt taraftaysa trans konfigürasyon oluşur.",
          "Cis çift bağ zincirde bükülme yapar.",
          "Trans çift bağ düz hidrokarbon zincirine benzer.",
          "Doymamış yağ asitleri katalizör eşliğinde ısıtılırsa cis formdan trans forma dönebilir.",
          "Oleik asidin trans formu elaidik asittir.",
        ],
      },
      {
        type: "note",
        label: "Esansiyel Yağ Asitleri",
        items: [
          "Organizmada sadece doymuş ve bir çift bağlı yağ asitleri sentezlenebilir.",
          "Birden fazla çift bağ içeren bazı gerekli yağ asitleri besinlerle alınmalıdır.",
          "Linoleik ve linolenik asit esansiyel yağ asitleridir.",
          "Kaynaklar: mısır, yer fıstığı, pamuk, soya fasulyesi, soğuk deniz balıkları.",
          "Görevler: membran akışkanlığı, sinir dokusu oluşumu, prostaglandin sentezi, oksijen difüzyonu, detoksifikasyon ve transkripsiyon faktörü düzenlenmesi.",
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Oleik: 18:1 ω-9, doğada en yaygın yağ asidi.",
          "Palmitik: 16:0, doğada en yaygın 2. yağ asidi.",
          "Linoleik: 18:2 ω-6, esansiyel.",
          "Linolenik: 18:3 ω-3, esansiyel.",
          "Araşidonik: 20:4 ω-6, prostaglandin öncüsü.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "Oleik, linoleik, linolenik ve araşidonik asidin sembolleri.",
          "Cis-trans farkı.",
          "Esansiyel yağ asitleri.",
          "Membran akışkanlığı mekanizması.",
        ],
      },
    ],
  },
  {
    id: "fizik",
    category: "Yağ Asitleri",
    weight: "Yüksek",
    title: "Yağ Asitlerinin Fiziksel ve Kimyasal Özellikleri",
    summary:
      "Erime noktası, çözünürlük, sabunlaşma, esterleşme, hidrojenasyon, halojenlenme ve oksidasyon.",
    blocks: [
      {
        type: "table",
        title: "Fiziksel Özellikler",
        heads: ["Özellik", "Kural", "Sınav yorumu"],
        rows: [
          [
            "Oda sıcaklığı",
            "C sayısı 10’a kadar olan doymuş yağ asitleri sıvı veya uçucudur",
            "10 dahil",
          ],
          [
            "Katılık",
            "C sayısı >10 olan doymuş yağ asitleri katıdır",
            "Zincir uzadıkça katılık artar",
          ],
          [
            "Erime noktası",
            "Doymuş yağ asitlerinde karbon sayısı arttıkça erime noktası yükselir",
            "Laurik 48°C, stearik 69°C",
          ],
          [
            "Suda çözünürlük",
            "2–4 C’lu yağ asitleri suyla her oranda karışır",
            "C sayısı arttıkça azalır",
          ],
          ["C >10", "Suda çözünmez", "Uzun hidrofobik zincir baskın"],
          [
            "Doymamış yağ asitleri",
            "Oda sıcaklığında sıvıdır ve suda çözünmez",
            "Çift bağ erime noktasını düşürür",
          ],
        ],
      },
      {
        type: "table",
        title: "Kimyasal Reaksiyonlar",
        heads: ["Reaksiyon", "Ne olur?", "Kritik nokta"],
        rows: [
          [
            "Esterleşme",
            "Yağ asidi + alkol → ester + su",
            "Gliserol + 3 yağ asidi → TAG + 3 su",
          ],
          [
            "Tuz oluşturma",
            "Yağ asitleri metallerle tuz oluşturur",
            "C >6 yağ asidi tuzları sabundur",
          ],
          [
            "Hidrojenasyon",
            "Çift bağ H ile doyurulur",
            "Oleik asit → stearik asit",
          ],
          [
            "Halojenlenme",
            "Çift bağ F, Cl, Br veya I ile doyurulur",
            "İyot indeksi doymamışlığı gösterir",
          ],
          [
            "Oksitlenme",
            "Doymamış yağ asitleri O₂ ile oksitlenir",
            "Peroksit/epoksit, bozunma, acılaşma",
          ],
        ],
      },
      {
        type: "cards",
        title: "Sabun ve Deterjan",
        cards: [
          [
            "Sabun",
            "6 C’dan yüksek yağ asitlerinin metallerle yaptığı tuzlardır.",
          ],
          ["Na/K sabunları", "Suda çözünür ve temizleyicidir."],
          ["Diğer metal sabunları", "Suda çözünmez ve temizleyici değildir."],
          ["Ticari sabun", "Palmitik, stearik ve oleik asidin Na tuzlarıdır."],
          ["Arap sabunu", "Palmitik, stearik ve oleik asidin K tuzlarıdır."],
          [
            "Deterjan",
            "Yağ asitlerinin yüksek alkollerinin sülfürik asit esterlerinin metal tuzlarıdır.",
          ],
        ],
      },
      {
        type: "note",
        label: "İyot İndeksi",
        items: [
          "100 g doymamış yağın gram cinsinden tuttuğu iyot miktarıdır.",
          "Çift bağ sayısı ve doymamışlık derecesi hakkında bilgi verir.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "C sayısı arttıkça erime noktası ve çözünürlük değişimi.",
          "Na/K sabunları ile diğer metal sabunları farkı.",
          "İyot indeksinin anlamı.",
          "Oleik asidin hidrojenasyon ürünü.",
          "Oksidasyon-acılaşma ilişkisi.",
        ],
      },
    ],
  },
  {
    id: "eikosanoid",
    category: "Eikosanoid",
    weight: "Çok yüksek",
    title: "Eikosanoidler: PG, PGI, TX, LT",
    summary:
      "Araşidonik asit metabolizması, COX/lipooksijenaz yolları, damar, trombosit, uterus ve astım etkileri.",
    blocks: [
      {
        type: "note",
        label: "Mutlaka Bil",
        items: [
          "Eikosanoidler araşidonik asit ve bazı 20 C’lu PUFA türevleridir.",
          "Prostaglandinler, tromboksanlar ve lökotrienler eikosanoid sınıfındadır.",
          "Lokal hormon gibi davranırlar.",
          "G-protein eşleşimli reseptörler aracılığıyla etki gösterirler.",
        ],
      },
      {
        type: "flow",
        title: "Araşidonik Asit Metabolizması",
        steps: [
          "Membran fosfolipitleri",
          "Fosfolipaz A₂",
          "Araşidonik asit",
          "COX → PG + PGI + TX",
          "Lipooksijenaz → LT + lipoksin",
        ],
      },
      {
        type: "table",
        title: "Eikosanoid Karşılaştırması",
        heads: ["Grup", "Sentez / yapı", "Başlıca etki"],
        rows: [
          [
            "Prostaglandin",
            "COX yolu; siklopentan halkalı 20 C doymamış yağ asidi",
            "Kan basıncı düşüşü, uterus/ince barsak kasılması, gastrik HCl azalması",
          ],
          [
            "Prostasiklin PGI₂",
            "Damar endoteli",
            "Damar düz kas gevşemesi, trombosit agregasyonu ve adezyonu azalması",
          ],
          [
            "Tromboksan TXA₂",
            "Trombosit",
            "Damar düz kas kasılması, trombosit agregasyonu artışı",
          ],
          [
            "Lökotrien",
            "Lökosit; lipooksijenaz yolu; halkalaşmamış",
            "Kemotaksis, inflamasyon, alerji, bronkokonstriksiyon, mukus artışı",
          ],
        ],
      },
      {
        type: "note",
        label: "Prostaglandinler",
        items: [
          "Siklopentan halkası içeren 20 C’lu doymamış yağ asitleridir.",
          "Ana iskelet prostanoik asittir.",
          "Eritrosit hariç tüm dokularda hormon benzeri etki gösterir.",
          "Kısa ömürlüdür ve sentezlendiği yerde depolanmaz.",
          "PGE eterde, PGF fosfat tamponunda çözünür.",
          "Uterus düz kas kasılmasını başlatabilir; medikal abortus ve doğum başlangıcıyla ilişkilidir.",
          "Gastrik HCl salgısını azaltabilir; hiperasidite ve peptik ülser tedavisinde kullanılabilir.",
        ],
      },
      {
        type: "table",
        title: "PGI₂ ve TXA₂ Zıtlığı",
        heads: ["Özellik", "PGI₂", "TXA₂"],
        rows: [
          ["Sentez yeri", "Damar endoteli", "Trombosit"],
          ["Damar düz kası", "Gevşetir", "Kasılmayı artırır"],
          ["Trombosit agregasyonu", "Azaltır", "Artırır"],
          [
            "Klinik not",
            "Pıhtılaşma riskini azaltabilir",
            "Düşük doz aspirinle inhibe olur",
          ],
        ],
      },
      {
        type: "flow",
        title: "Lökotrien → Astım Zinciri",
        steps: [
          "Alerjen / inflamasyon / sigara / kirlilik",
          "Lökotrien artışı",
          "Mukus artışı",
          "Düz kas kasılması",
          "Havayolu daralması",
          "Astım krizi",
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "PG ve TX = COX yolu ürünleri.",
          "LT = lipooksijenaz yolu ürünleri.",
          "PGI₂ trombosit agregasyonunu azaltır.",
          "TXA₂ trombosit agregasyonunu artırır.",
          "TXA₂ hızlıca inaktif TXB₂’ye dönüşür.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "Araşidonik asitten hangi ürünlerin oluştuğu.",
          "COX ve lipooksijenaz ürünleri.",
          "PGI₂-TXA₂ zıt etkileri.",
          "Lökotrienlerin astımdaki rolü.",
          "Aspirin ve tromboksan ilişkisi.",
        ],
      },
    ],
  },
  {
    id: "gliserol",
    category: "Gliserol",
    weight: "Çok yüksek",
    title: "Gliserol Türevleri: TAG, Mumlar ve Gliserofosfolipitler",
    summary:
      "Triaçilgliserol, mumlar, fosfatidik asit, lesitin, surfaktan, PIP₂, kardiyolipin ve PAF.",
    blocks: [
      {
        type: "note",
        label: "Triaçilgliserol",
        items: [
          "Üç molekül yağ asidinin gliserol ile yaptığı esterlere triaçilgliserol, trigliserit, nötral yağ veya basit lipit denir.",
          "Gliserol 3 hidroksil grubu içeren bir trialkoldür.",
          "Gliserol + 1 yağ asidi → monoaçilgliserol.",
          "Gliserol + 2 yağ asidi → diaçilgliserol.",
          "Gliserol + 3 yağ asidi → triaçilgliserol.",
          "TAG apolar/hidrofobiktir ve suda çözünmez.",
          "Lipitlerin depo şeklidir; sitozolde yağ damlacıkları halinde bulunur.",
          "Nötral pH’da lipaz ile hidrolize uğrar.",
          "İnce barsak mukozası, meme bezleri, adipoz doku ve karaciğerde sentezlenir.",
        ],
      },
      {
        type: "cards",
        title: "TAG Sınav Kartları",
        cards: [
          [
            "Basit gliserid",
            "TAG’de üç yağ asidi aynıysa basit gliserid oluşur.",
          ],
          [
            "Karışık gliserid",
            "Esterleşen yağ asitleri farklıysa karışık gliserid oluşur.",
          ],
          ["Depo form", "Organizmanın en önemli depo lipit formudur."],
          [
            "Stereospesifite",
            "Enzimler gliserolün 1. ve 3. karbonları arasındaki farkı ayırt edebilir.",
          ],
        ],
      },
      {
        type: "note",
        label: "Mumlar",
        items: [
          "14–36 C atomlu doymuş/doymamış yağ asitlerinin uzun zincirli alifatik alkollerle esterleridir.",
          "Erime noktaları trigliseritlerden yüksektir.",
          "Deniz hayvanlarında metabolik yakıtın depo şeklidir.",
          "Kozmetik ve endüstride kullanılır.",
          "Balmumu, karnauba mumu, balina mumu ve lanolin önemli örneklerdir.",
        ],
      },
      {
        type: "note",
        label: "Gliserofosfolipitler",
        items: [
          "Membranların başlıca lipit bileşenleridir.",
          "Fosfatidik asit türevidir.",
          "Fosfatidik asit, gliserol-3-fosfattan sentezlenir.",
          "Diaçilgliserolün 3. karbonunun fosfat grubu ile esterleşmesiyle fosfatidik asit oluşur.",
          "Fosfat grubuna X bağlı olursa molekül fosfatidil-X adını alır.",
          "Polar baş + iki apolar kuyruk içerir.",
        ],
      },
      {
        type: "table",
        title: "Gliserofosfolipitler",
        heads: ["Molekül", "Yapı", "En önemli sınav noktası"],
        rows: [
          [
            "Fosfatidilkolin / Lesitin",
            "Kolin + fosfatidik asit",
            "Membranda en fazla bulunan fosfolipit; kolin deposu",
          ],
          [
            "Dipalmitoil lesitin",
            "C1 ve C2’de palmitik asit + kolin",
            "Surfaktanın temel fosfolipit bileşeni",
          ],
          [
            "Fosfatidiletanolamin",
            "Etanolamin + fosfatidik asit",
            "Zwitterion",
          ],
          [
            "Fosfatidilserin",
            "Serin + fosfatidik asit",
            "Amino asit taşıyan tek fosfolipit; apoptoziste rol oynar",
          ],
          [
            "Fosfatidilinozitol",
            "İnozitol + fosfatidik asit",
            "PIP₂ → DAG + IP₃",
          ],
          [
            "Kardiyolipin",
            "2 fosfatidik asit + 1 gliserol",
            "Mitokondrial membranın başlıca lipiti",
          ],
          [
            "Lizofosfolipit",
            "Tek açil radikal içerir",
            "Okside lipoproteinlerde aterosklerozu hızlandırabilir",
          ],
          [
            "Plazmalojen",
            "sn-1’de eter bağı",
            "Beyin ve kasta bulunur; inflamasyon/alerji ile ilişkili",
          ],
          [
            "PAF",
            "C1 eter alkil, C2 asetil, baş kolin",
            "Trombosit agregasyonu ve serotonin salınımını artırır",
          ],
        ],
      },
      {
        type: "flow",
        title: "Surfaktan Zinciri",
        steps: [
          "Dipalmitoil lesitin",
          "Surfaktan",
          "Yüzey gerilimi azalır",
          "Alveol kollapsı önlenir",
          "Eksiklik → atelektazi / solunumsal distres",
        ],
      },
      {
        type: "flow",
        title: "PIP₂ İkinci Haberci Zinciri",
        steps: [
          "PIP₂",
          "Fosfolipaz aktivasyonu",
          "DAG + IP₃",
          "İkinci haberci sistemi",
          "Hormon iletimi",
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Lesitin = fosfatidilkolin.",
          "Sefalinler = fosfatidiletanolamin + fosfatidilserin.",
          "Fosfatidilserin amino asit taşıyan tek fosfolipittir.",
          "Kardiyolipin mitokondriye özgüdür.",
          "PAF depo edilemez; PMN hücre uyarılmasıyla sentezlenir ve salınır.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "TAG yapısı ve depo lipit olması.",
          "Fosfatidik asidin önemi.",
          "Lesitinin membranda en fazla bulunan fosfolipit olması.",
          "Dipalmitoil lesitin-surfaktan-atelektazi ilişkisi.",
          "PIP₂-DAG-IP₃ ilişkisi.",
          "Kardiyolipinin mitokondriye özgü olması.",
        ],
      },
    ],
  },
  {
    id: "sfingo",
    category: "Sfingolipit",
    weight: "Çok yüksek",
    title: "Sfingozin Türevleri: Sfingomiyelin ve Glikolipitler",
    summary:
      "Sfingozin, seramid, sfingomiyelin, glikolipitler, gangliozidler ve Niemann-Pick hastalığı.",
    blocks: [
      {
        type: "note",
        label: "Mutlaka Bil",
        items: [
          "Sfingolipitlerde gliserol yerine sfingozin bulunur.",
          "Sfingozin 18 C’lu, bir çift bağlı ve iki -OH grubu olan bir alkoldür.",
          "Sfingozinin -NH₂ grubuna uzun zincirli yağ asidinin amid bağıyla bağlanması sonucu seramid oluşur.",
          "Seramid bütün sfingolipitlerin temel yapısal birimidir.",
        ],
      },
      {
        type: "note",
        label: "Sfingomiyelin",
        items: [
          "Seramidin 1. karbonunun fosfodiester bağı ile fosfokolin veya fosfoetanolaminle esterleşmesi sonucu oluşur.",
          "Negatif fosfat ve pozitif azotlu baz taşır.",
          "Fizyolojik pH’da nötraldir.",
          "En çok sinir dokusu ve beyinde bulunur.",
          "Miyelin tabakasını sararak yalıtım görevi yapar.",
          "Hidrolizde yağ asidi + fosforik asit + kolin + sfingozin oluşur.",
        ],
      },
      {
        type: "note",
        label: "Niemann-Pick Hastalığı",
        items: [
          "Sfingomiyelinaz enziminin genetik eksikliğinde görülür.",
          "Sfingomiyelin karaciğer, dalak, lenf ve akciğerde birikir.",
          "Hepatosplenomegali, zeka geriliği ve çocukluk çağında ölüm görülebilir.",
        ],
      },
      {
        type: "note",
        label: "Glikolipitler / Glikosfingolipitler",
        items: [
          "Sinir dokusunda ve hücre membranında önemlidir.",
          "Özellikle plazma membranının dış kısmında bulunur.",
          "Polar başta fosfat kalıntısı yoktur; nötral bileşiklerdir.",
          "Temel yapı seramiddir.",
          "Seramidin 1. karbonuna bir veya daha fazla şeker ünitesi β-glikozid bağ ile bağlanır.",
          "Yapılarında 22–24 C’lu yağ asitleri bulunur.",
          "Kan grubu antijenleri ve tümör antijenlerinin kaynağı olabilir.",
          "Kolera ve difteri toksinleri ile bazı virüsler için reseptör görevi görebilir.",
        ],
      },
      {
        type: "table",
        title: "Glikolipit Grupları",
        heads: ["Grup", "Yapı", "En önemli not"],
        rows: [
          [
            "Serebrozid",
            "Seramid + mono/oligosakkarit",
            "Galaktoserebrozidler beyin ak maddesi ve periferik sinir miyelininde bulunur",
          ],
          [
            "Glikoserebrozid",
            "Glukoz içeren serebrozid",
            "Sinir dokusu dışında özellikle karaciğer ve dalakta bulunur",
          ],
          [
            "Globozid",
            "Seramid + iki veya daha fazla şeker",
            "Nötral; laktoseramid eritrosit membranında bulunur",
          ],
          [
            "Sülfatid",
            "Sülfogalaktoserebrozid",
            "Fizyolojik pH’da asidik; miyelinde yüksek oranda bulunur",
          ],
          [
            "Gangliozid",
            "Glukozil seramid türevi + NANA",
            "Negatif yüklü; reseptör fonksiyonunda önemli",
          ],
        ],
      },
      {
        type: "cards",
        title: "Gangliozid Mutlaka Bil",
        cards: [
          [
            "NANA",
            "N-asetil nöraminik asit; insan dokusundaki temel sialik asittir.",
          ],
          ["Yük", "Gangliozidler fizyolojik pH’da negatif yüklüdür."],
          [
            "Beyin",
            "Beyin gri maddesindeki lipitlerin yaklaşık %6’sı ganglioziddir.",
          ],
          [
            "GM3",
            "En basit gangliozid: seramid + glukoz + galaktoz + nöraminik asit.",
          ],
          ["GM1", "Barsakta kolera toksini reseptörü olarak bilinir."],
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Sfingozin alkol iskeletidir.",
          "Seramid = sfingozin + yağ asidi.",
          "Sfingomiyelin fosfat içerir; glikolipitlerde fosfat yoktur.",
          "Gangliozidler NANA içerir ve negatif yüklüdür.",
          "GM1 kolera toksini reseptörüdür.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "Seramid tanımı.",
          "Sfingomiyelinaz eksikliği ve Niemann-Pick.",
          "Glikolipitlerde fosfat bulunmaması.",
          "Serebrozid, globozid, sülfatid, gangliozid ayrımı.",
          "NANA ve GM1 bilgisi.",
        ],
      },
    ],
  },
  {
    id: "izopren",
    category: "İzopren",
    weight: "Yüksek",
    title: "İzopren Türevleri: Terpenler, Steroller, Kolesterol",
    summary:
      "İzopren, terpen sınıfları, karoten, steran halka, kolesterol, D vitamini, safra asitleri ve steroid hormonlar.",
    blocks: [
      {
        type: "note",
        label: "İzopren Türevleri",
        items: [
          "Terpenler ve sterol türevleri bu gruptadır.",
          "Kolesterol, safra asitleri, D vitamini ve steroid hormonlar sterol türevleridir.",
          "İzopren 5 C ve 2 çift bağ içerir.",
          "İzopren birimleri düz zincir şeklinde dizilebilir veya halkalaşabilir.",
        ],
      },
      {
        type: "table",
        title: "Terpen Sınıflandırması",
        heads: ["Sınıf", "İzopren birimi", "Örnek / not"],
        rows: [
          ["Hemiterpen", "1", "Tek izopren birimi"],
          ["Monoterpen", "2", "İki izopren"],
          ["Seskiterpen", "3", "Üç izopren"],
          [
            "Diterpen",
            "4",
            "Fitol klorofil yapısında; antibakteriyel/antiinflamatuvar özellik taşıyabilir",
          ],
          ["Sesterpen", "5", "25 karbonlu yapı"],
          ["Triterpen", "6", "Skualen kolesterol sentezinde ara üründür"],
          ["Tetraterpen", "8", "Likopen ve α, β, γ karotenler"],
        ],
      },
      {
        type: "cards",
        title: "Karoten",
        cards: [
          ["Karoten", "Halkalı tetraterpendir ve A vitamininin ön maddesidir."],
          ["β-karoten", "A vitamini β-karoten türevidir."],
          ["Depo", "Karotenler deri altı yağ dokusunda depolanır."],
          ["Pigment", "Sarı, kırmızı ve turuncu renkleri oluşturur."],
          ["Ksantofil", "Oksijenli karotenoid türevleridir."],
        ],
      },
      {
        type: "note",
        label: "Sterol Türevleri",
        items: [
          "İleri derecede halkalaşmış izopren türevleridir.",
          "Steran halka: 3 adet 6 C’lu fenantren halkası + 1 adet 5 C’lu siklopentan halkası.",
          "Steran halka toplam 17 C içerir ve A, B, C, D halkalarından oluşur.",
          "Doğal steroidlerde B-C ve C-D halkaları trans konumdadır.",
        ],
      },
      {
        type: "note",
        label: "Kolesterol",
        items: [
          "İnsan ve hayvan dokularında bulunan temel steroldür.",
          "Amfipatik steroldür.",
          "3. karbondaki -OH grubu polar baştır.",
          "3. C’daki -OH ve 5–6 C arasındaki çift bağ reaktif kısımlardır.",
          "Plazma ve intrasellüler membranların başlıca bileşenidir.",
          "Lipoproteinlerin ana bileşenidir.",
          "Suda çözünürlüğü çok düşüktür.",
          "Total kolesterolün yaklaşık 3/4’ü ester, 1/4’ü serbest formdadır.",
          "Safra asitleri, adrenokorteks hormonları, cinsiyet hormonları, D vitamini ve kardiyak glikozidlerin ön maddesidir.",
        ],
      },
      {
        type: "flow",
        title: "D Vitamini Zinciri",
        steps: [
          "Kolesterol",
          "7-dehidrokolesterol",
          "Deri altında bulunur",
          "UV etkisi",
          "D3 vitamini / kolekalsiferol",
        ],
      },
      {
        type: "table",
        title: "Safra Asitleri",
        heads: ["Tip", "Örnek", "Sentez yeri", "OH pozisyonu"],
        rows: [
          ["Primer", "Kolik asit", "Karaciğer", "3, 7, 12 C"],
          ["Primer", "Kenodeoksikolik asit", "Karaciğer", "3 ve 7 C"],
          ["Sekonder", "Deoksikolik asit", "Barsak", "3 ve 12 C"],
          ["Sekonder", "Litokolik asit", "Barsak", "3 C"],
        ],
      },
      {
        type: "note",
        label: "Safra Asitlerinin Önemi",
        items: [
          "Kolesterolün halkalı yapısı vücutta CO₂ ve H₂O’ya tamamen metabolize edilemez.",
          "Kolesterol karaciğerde safra asitlerine dönüştürülür ve ince barsağa verilir.",
          "Safra asitleri karaciğerde glisin (%80) ve taurin (%20) ile esterleşir.",
          "Kolesterol, yağ, fosfolipit ve yağda eriyen vitaminlerin emülsifikasyonunu sağlar.",
          "İnce barsakta sindirim ve emilimi kolaylaştırır.",
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Skualen = kolesterol sentezinde triterpen ara ürün.",
          "β-karoten = A vitamini ön maddesi.",
          "7-dehidrokolesterol + UV = D3 vitamini.",
          "Ergosterol = D2 vitamini ön maddesi.",
          "Safra asitleri yağların emülsifikasyonunda görev alır.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "İzoprenin 5 C ve 2 çift bağ içermesi.",
          "Terpen sınıfları.",
          "Karoten-A vitamini ilişkisi.",
          "Kolesterolün yapı özellikleri.",
          "D vitamini sentezi.",
          "Primer/sekonder safra asitleri.",
        ],
      },
    ],
  },
  {
    id: "lipoprotein",
    category: "Lipoprotein",
    weight: "Çok yüksek",
    title: "Lipoproteinler ve Apolipoproteinler",
    summary:
      "Lipitlerin kanda taşınması, apolipoprotein fonksiyonları, şilomikron, VLDL, IDL, LDL ve HDL.",
    blocks: [
      {
        type: "note",
        label: "Lipoprotein Tanımı",
        items: [
          "Lipitlerin proteinlerle oluşturdukları komplekslere lipoprotein denir.",
          "Lipitlerin ince barsak ve karaciğerden kana, kandan organ ve dokulara taşınmasını sağlar.",
          "İç çekirdek apolar lipitlerden oluşur: kolesterol esterleri ve trigliseridler.",
          "Dış kabuk polar lipitlerden oluşur: fosfolipitler, serbest kolesterol ve apolipoproteinler.",
        ],
      },
      {
        type: "cards",
        title: "Apolipoproteinlerin 3 Ana Görevi",
        cards: [
          [
            "Stabilizasyon",
            "Polar olmayan lipitlerin stabilize edilmesini sağlar.",
          ],
          [
            "Reseptör tanıma",
            "Lipoproteinlerin alınacağı/yıkılacağı bölgeleri belirler.",
          ],
          [
            "Enzim regülasyonu",
            "Lipoprotein metabolizmasındaki enzimlerin aktivitesini düzenler.",
          ],
        ],
      },
      {
        type: "table",
        title: "Lipoprotein Sınıfları",
        heads: ["Sınıf", "Temel özellik", "Fonksiyon", "Apolipoprotein"],
        rows: [
          [
            "Şilomikron",
            "En büyük; TG’den en zengin; protein en az",
            "Eksojen/diyet lipitlerini taşır",
            "Apo B48",
          ],
          [
            "VLDL",
            "Endojen TG bakımından zengin",
            "Karaciğerde sentezlenen TG ve kolesterolü ekstrahepatik dokulara taşır",
            "Apo B100",
          ],
          [
            "IDL",
            "VLDL’nin lipolitik dönüşüm ürünü",
            "Kolesterol esterlerinden zengin",
            "VLDL türevi",
          ],
          [
            "LDL",
            "Kolesterolce en zengin partikül",
            "Kolesterol taşır; artışı zararlı",
            "Apo B100 ve Apo E",
          ],
          [
            "HDL",
            "En küçük; protein oranı en yüksek",
            "Ters kolesterol transportu",
            "Protein oranı yüksek",
          ],
        ],
      },
      {
        type: "flow",
        title: "Şilomikron Metabolizması",
        steps: [
          "Diyet lipitleri",
          "Bağırsak epitel hücresi",
          "Şilomikron",
          "Lenf",
          "Dolaşım",
          "Lipoprotein lipaz",
          "TG kaybı",
          "Şilomikron kalıntısı",
        ],
      },
      {
        type: "note",
        label: "VLDL → IDL → LDL",
        items: [
          "VLDL karaciğerde sentezlenir.",
          "Endojen trigliserid bakımından zengindir.",
          "Yaklaşık %55 trigliserid ve %20 kolesterol içerir.",
          "Enerji yükü fazla olduğunda VLDL sentezi artar.",
          "VLDL’nin %50 veya daha fazlası lipolitik yolla IDL’ye çevrilir.",
          "LDL, VLDL artığı olarak damar içinde sentezlenir.",
        ],
      },
      {
        type: "flow",
        title: "LDL → Ateroskleroz Zinciri",
        steps: [
          "LDL artışı",
          "Makrofajlar fazla kolesterol alır",
          "Köpük hücreleri oluşur",
          "Ateroskleroz gelişir",
        ],
      },
      {
        type: "note",
        label: "HDL",
        items: [
          "En küçük lipoproteindir.",
          "HDL kitlesinin yaklaşık %50’si proteindir.",
          "Başlıca fonksiyonu dokulardan karaciğere kolesterol taşımaktır.",
          "Bu olay ters kolesterol transportu olarak adlandırılır.",
          "HDL antiaterojenik etki oluşturur.",
        ],
      },
      {
        type: "warn",
        title: "Karıştırma!",
        items: [
          "Şilomikron = eksojen/diyet lipitleri.",
          "VLDL = endojen trigliserid.",
          "LDL = kolesterolce en zengin, artışı zararlı.",
          "HDL = ters kolesterol transportu, antiaterojenik.",
          "Şilomikron Apo B48; VLDL ve LDL Apo B100 ile ilişkilidir.",
        ],
      },
      {
        type: "exam",
        title: "Bu bölümden sınavda ne sorulabilir?",
        items: [
          "Lipoprotein çekirdek/kabuk yapısı.",
          "Apolipoproteinlerin üç ana görevi.",
          "Şilomikron, VLDL, LDL, HDL fonksiyonları.",
          "LDL-köpük hücresi-ateroskleroz zinciri.",
          "HDL’nin ters kolesterol transportu.",
        ],
      },
    ],
  },
];

const quiz = [
  {
    id: "q1",
    type: "mcq",
    q: "Lipitlerin en doğru genel tanımı hangisidir?",
    options: [
      "Suda çözünen protein türevleri",
      "Suda çözünmeyen, organik çözücülerde çözünen biyomoleküller",
      "Sadece fosfat içeren moleküller",
      "Sadece enerji için kullanılan karbonhidrat türevleri",
    ],
    answer: "Suda çözünmeyen, organik çözücülerde çözünen biyomoleküller",
    exp: "Lipitler suda çözünmez; eter, kloroform, aseton gibi organik çözücülerde çözünür.",
  },
  {
    id: "q2",
    type: "mcq",
    q: "18:1 Δ9 ifadesi neyi gösterir?",
    options: [
      "18 karbonlu doymuş yağ asidi",
      "18 karbonlu, 1 çift bağlı ve çift bağı 9–10. C arasında olan yağ asidi",
      "9 karbonlu, 18 çift bağlı yağ asidi",
      "Metil uçtan 18. karbonda çift bağ",
    ],
    answer:
      "18 karbonlu, 1 çift bağlı ve çift bağı 9–10. C arasında olan yağ asidi",
    exp: "Δ numaralandırma karboksil uçtan başlar.",
  },
  {
    id: "q3",
    type: "tf",
    q: "Doymamış yağ asitlerinde çift bağ sayısı arttıkça erime noktası yükselir.",
    answer: "Yanlış",
    exp: "Çift bağ sayısı arttıkça erime noktası düşer.",
  },
  {
    id: "q4",
    type: "short",
    q: "İki temel esansiyel yağ asidi hangileridir?",
    answer: "Linoleik asit ve linolenik asit",
    exp: "Linoleik ve linolenik asit organizmada sentezlenmez.",
  },
  {
    id: "q5",
    type: "mcq",
    q: "Araşidonik asitten COX yolu ile başlıca hangi ürünler oluşur?",
    options: [
      "Lökotrienler",
      "Prostaglandinler, prostasiklinler ve tromboksanlar",
      "Kolesterol ve safra asitleri",
      "Şilomikron ve HDL",
    ],
    answer: "Prostaglandinler, prostasiklinler ve tromboksanlar",
    exp: "COX yolu prostanoidleri oluşturur; LT lipooksijenaz yoludur.",
  },
  {
    id: "q6",
    type: "tf",
    q: "PGI₂ trombosit agregasyonunu azaltırken TXA₂ artırır.",
    answer: "Doğru",
    exp: "PGI₂ ve TXA₂ trombositler üzerinde zıt etkilidir.",
  },
  {
    id: "q7",
    type: "mcq",
    q: "Surfaktanın temel fosfolipit bileşeni hangisidir?",
    options: [
      "Kardiyolipin",
      "Dipalmitoil lesitin",
      "Gangliozid GM1",
      "Kolesterol esteri",
    ],
    answer: "Dipalmitoil lesitin",
    exp: "Dipalmitoil lesitin alveol yüzey gerilimini azaltır.",
  },
  {
    id: "q8",
    type: "mcq",
    q: "Sfingolipitlerin temel yapısal birimi nedir?",
    options: ["Fosfatidik asit", "Seramid", "Gliserol", "Kolesterol"],
    answer: "Seramid",
    exp: "Seramid = sfingozin + yağ asidi.",
  },
  {
    id: "q9",
    type: "mcq",
    q: "Sfingomiyelinaz eksikliği hangi hastalıkla ilişkilidir?",
    options: ["Niemann-Pick", "Barth sendromu", "Atelektazi", "Peptik ülser"],
    answer: "Niemann-Pick",
    exp: "Sfingomiyelinaz eksikliğinde sfingomiyelin birikir.",
  },
  {
    id: "q10",
    type: "tf",
    q: "Kardiyolipin mitokondrial membranların başlıca lipitidir.",
    answer: "Doğru",
    exp: "Kardiyolipin sadece mitokondride bulunur ve mitokondrial fonksiyon için önemlidir.",
  },
  {
    id: "q11",
    type: "mcq",
    q: "D3 vitamini hangi öncüden UV etkisiyle oluşur?",
    options: [
      "Ergosterol",
      "7-dehidrokolesterol",
      "Araşidonik asit",
      "Skualen",
    ],
    answer: "7-dehidrokolesterol",
    exp: "Deri altındaki 7-dehidrokolesterol UV etkisiyle kolekalsiferole dönüşür.",
  },
  {
    id: "q12",
    type: "mcq",
    q: "Eksojen/diyet kaynaklı lipitleri taşıyan lipoprotein hangisidir?",
    options: ["HDL", "LDL", "VLDL", "Şilomikron"],
    answer: "Şilomikron",
    exp: "Şilomikronlar bağırsak epitelinde sentezlenir ve diyet lipitlerini taşır.",
  },
  {
    id: "q13",
    type: "short",
    q: "LDL artışında makrofajların fazla kolesterol almasıyla oluşan hücre tipi nedir?",
    answer: "Köpük hücreleri",
    exp: "Köpük hücreleri ateroskleroz gelişiminde önemlidir.",
  },
  {
    id: "q14",
    type: "tf",
    q: "HDL ters kolesterol transportu yapar ve antiaterojenik etki gösterir.",
    answer: "Doğru",
    exp: "HDL dokulardan karaciğere kolesterol taşır.",
  },
  {
    id: "q15",
    type: "mcq",
    q: "İyot indeksi neyi ifade eder?",
    options: [
      "100 g doymamış yağın tuttuğu iyot miktarı",
      "Bir lipoproteinin protein yüzdesi",
      "Kolesterolün safra asidine dönüşüm oranı",
      "Yağ asidinin albümine bağlanma kapasitesi",
    ],
    answer: "100 g doymamış yağın tuttuğu iyot miktarı",
    exp: "İyot indeksi çift bağ ve doymamışlık derecesiyle ilişkilidir.",
  },
];

const glossary = [
  ["Açil", "Yağ asidinden hidroksil grubunun çıkarılmasıyla oluşan kalıntı."],
  [
    "Albümine bağlı taşıma",
    "Uzun zincirli serbest yağ asitlerinin dolaşımda taşınma şekli.",
  ],
  ["Amfipatik", "Hidrofilik ve hidrofobik bölgeleri birlikte taşıma özelliği."],
  ["Araşidonik asit", "20:4 ω-6; PG, TX ve LT öncüsü."],
  ["Atelektazi", "Surfaktan eksikliğinde alveol kollapsı."],
  ["DAG", "Diaçilgliserol; PIP₂ yıkımıyla oluşan ikinci haberci."],
  ["Dipalmitoil lesitin", "Surfaktanın temel fosfolipit bileşeni."],
  ["Eikosanoid", "20 C’lu PUFA türevi lokal hormon benzeri bileşik."],
  [
    "Esansiyel yağ asidi",
    "Besinle alınması gereken, sentezlenemeyen yağ asidi.",
  ],
  ["Fosfatidik asit", "Gliserofosfolipitlerin temel çekirdeği."],
  ["Gangliozid", "NANA içeren kompleks glikosfingolipit."],
  ["HDL", "Ters kolesterol transportu yapan yüksek dansiteli lipoprotein."],
  ["İyot indeksi", "100 g doymamış yağın tuttuğu iyot miktarı."],
  ["Kardiyolipin", "Mitokondrial membranın başlıca lipiti."],
  [
    "Kolesterol",
    "Hayvan dokularının temel sterolü; membran ve steroid öncüsü.",
  ],
  [
    "LDL",
    "Kolesterolce en zengin lipoprotein; artışı aterosklerozla ilişkilidir.",
  ],
  ["Lesitin", "Fosfatidilkolin; membranda en fazla bulunan fosfolipit."],
  [
    "Lipoprotein lipaz",
    "Şilomikron ve VLDL trigliseridlerini hidroliz eden enzim.",
  ],
  ["MUFA", "Tek çift bağ içeren doymamış yağ asidi."],
  ["NANA", "N-asetil nöraminik asit; temel sialik asit."],
  ["PAF", "Trombosit aktive edici faktör."],
  ["PIP₂", "DAG ve IP₃ öncüsü fosfatidilinozitol türevi."],
  ["PUFA", "Birden fazla çift bağ içeren doymamış yağ asidi."],
  ["Seramid", "Sfingozin + yağ asidi; sfingolipitlerin temel yapısı."],
  ["Sfingomiyelin", "Sinir dokusu ve miyelinde yoğun sfingofosfolipit."],
  ["Surfaktan", "Alveol yüzey gerilimini azaltan lipoprotein yapıdaki madde."],
  ["TAG", "Triaçilgliserol; gliserol + 3 yağ asidi; depo lipiti."],
  [
    "Ters kolesterol transportu",
    "HDL’nin dokulardan karaciğere kolesterol taşıması.",
  ],
  ["VLDL", "Karaciğer kaynaklı endojen trigliserid taşıyan lipoprotein."],
];

const finalChains = [
  "Linoleik asit → Araşidonik asit → Prostaglandinler / Tromboksanlar / Lökotrienler",
  "Membran fosfolipidi → Fosfolipaz A₂ → Araşidonik asit → COX yolu → PG + TX",
  "Araşidonik asit → Lipooksijenaz yolu → Lökotrienler → Bronkokonstriksiyon + mukus artışı",
  "PIP₂ → DAG + IP₃ → Hormon iletiminde ikinci haberci",
  "Dipalmitoil lesitin eksikliği → Surfaktan azalması → Alveol kollapsı → Atelektazi",
  "Sfingomiyelinaz eksikliği → Sfingomiyelin birikimi → Niemann-Pick hastalığı",
  "LDL artışı → Makrofaj kolesterol alımı → Köpük hücresi → Ateroskleroz",
  "HDL → Dokulardan kolesterol alımı → Karaciğere taşıma → Antiaterojenik etki",
  "7-dehidrokolesterol + UV → Kolekalsiferol / D3 vitamini",
  "Kolesterol → Safra asitleri → Yağların ve yağda çözünen vitaminlerin emülsifikasyonu",
];

const mistakes = [
  "Δ ve ω numaralandırmayı ters saymak.",
  "Linoleik ve linolenik asidin esansiyel olduğunu unutmak.",
  "Oleik asit ile elaidik asit ilişkisini kaçırmak.",
  "PGI₂ ile TXA₂ etkilerini ters ezberlemek.",
  "Şilomikronu endojen TG taşıyıcısı sanmak.",
  "VLDL ile LDL’nin temel yükünü karıştırmak.",
  "HDL’yi aterojenik sanmak.",
  "Glikolipitlerde fosfat var sanmak.",
  "Seramid ile sfingozini aynı kabul etmek.",
  "Kardiyolipinin mitokondriye özgü olduğunu unutmak.",
  "Dipalmitoil lesitin-surfaktan-atelektazi zincirini kaçırmak.",
  "İyot indeksinin çift bağ/doymamışlıkla ilişkisini unutmak.",
];

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

function blockText(b) {
  return [
    b.title,
    b.label,
    ...(b.items || []),
    ...(b.steps || []),
    ...(b.cards || []).flat(),
    ...(b.rows || []).flat(),
  ].join(" ");
}

function sectionText(s) {
  return norm(
    [s.title, s.category, s.summary, ...s.blocks.map(blockText)].join(" ")
  );
}

function Block({ block }) {
  if (block.type === "note") {
    return (
      <div className="card note-card">
        <div className="eyebrow">{block.label}</div>
        <ul className="bullet-list">
          {block.items.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "warn") {
    return (
      <div className="card warn-card">
        <div className="block-head">
          <h3>{block.title}</h3>
          <span>Karıştırma</span>
        </div>
        <ul className="bullet-list warn-list">
          {block.items.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "exam") {
    return (
      <div className="card exam-card">
        <h3>{block.title}</h3>
        <div className="exam-grid">
          {block.items.map((x, i) => (
            <div key={i} className="exam-item">
              {x}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "cards") {
    return (
      <div>
        <h3 className="sub-title">{block.title}</h3>
        <div className="mini-grid">
          {block.cards.map(([t, x], i) => (
            <div key={i} className="mini-card">
              <h4>{t}</h4>
              <p>{x}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "flow") {
    return (
      <div className="card flow-card">
        <h3>{block.title}</h3>
        <div className="flow">
          {block.steps.map((x, i) => (
            <React.Fragment key={i}>
              <div className="flow-step">{x}</div>
              {i < block.steps.length - 1 && <div className="arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="table-card">
        <div className="table-title">{block.title}</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {block.heads.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j} className={j === 0 ? "first-col" : ""}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
}

export default function App() {
  const [view, setView] = useState("study");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tümü");
  const [quickMode, setQuickMode] = useState(false);
  const [open, setOpen] = useState(() => new Set(["tanım", "yag-asitleri"]));
  const [learned, setLearned] = useState({});
  const [quizState, setQuizState] = useState({});

  const categories = useMemo(
    () => ["Tümü", ...Array.from(new Set(sections.map((s) => s.category)))],
    []
  );

  const filteredSections = useMemo(() => {
    const q = norm(query);
    return sections.filter((s) => {
      const okCat = category === "Tümü" || s.category === category;
      const okQ = !q || sectionText(s).includes(q);
      const okQuick = !quickMode || s.weight.includes("Çok");
      return okCat && okQ && okQuick;
    });
  }, [query, category, quickMode]);

  const learnedTotal = sections.length + overview.length;
  const learnedCount =
    sections.filter((s) => learned[s.id]).length +
    overview.filter((_, i) => learned[`ov-${i}`]).length;
  const progress = Math.round((learnedCount / learnedTotal) * 100);

  const toggleOpen = (id) => {
    setOpen((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const toggleLearned = (id) => setLearned((p) => ({ ...p, [id]: !p[id] }));

  const setAnswer = (id, val) => {
    setQuizState((p) => ({ ...p, [id]: { selected: val, revealed: false } }));
  };

  const reveal = (id) => {
    setQuizState((p) => ({ ...p, [id]: { ...(p[id] || {}), revealed: true } }));
  };

  const isCorrect = (q, selected) => {
    if (q.type === "short") {
      const a = norm(q.answer);
      const s = norm(selected);
      return (
        s.includes(a.split(" ve ")[0]) && s.includes(a.split(" ve ")[1] || a)
      );
    }
    return selected === q.answer;
  };

  const quizRevealed = quiz.filter((q) => quizState[q.id]?.revealed).length;
  const quizScore = quiz.filter(
    (q) =>
      quizState[q.id]?.revealed && isCorrect(q, quizState[q.id]?.selected || "")
  ).length;

  return (
    <div className="app">
      <style>{css}</style>

      <header className="topbar">
        <div>
          <div className="top-kicker">{meta.subtitle}</div>
          <div className="top-title">{meta.title}</div>
        </div>
        <nav className="top-nav">
          {[
            ["study", "Notlar"],
            ["quiz", "Quiz"],
            ["glossary", "Glossary"],
            ["revision", "Final Revision"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className={view === id ? "active" : ""}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="pill">
              Veteriner Biyokimya · Sınav Odaklı İnteraktif Çalışma
            </div>
            <h1>{meta.title}</h1>
            <p>{meta.desc}</p>
            <div className="stats">
              <div>
                <strong>{sections.length}</strong>
                <span>Ana bölüm</span>
              </div>
              <div>
                <strong>{quiz.length}</strong>
                <span>Sınav sorusu</span>
              </div>
              <div>
                <strong>{glossary.length}</strong>
                <span>Terim</span>
              </div>
              <div>
                <strong>
                  {learnedCount}/{learnedTotal}
                </strong>
                <span>Öğrenildi</span>
              </div>
            </div>
          </div>
          <div className="progress-card">
            <div>
              <span>Genel ilerleme</span>
              <strong>{progress}%</strong>
              <p>
                Quick overview ve ana bölümleri işaretleyerek son tekrar
                takibini yap.
              </p>
            </div>
            <div className="progress-ring">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="48" className="ring-bg" />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  className="ring-fg"
                  style={{ strokeDashoffset: 302 - (302 * progress) / 100 }}
                />
              </svg>
              <b>{progress}%</b>
            </div>
          </div>
        </div>
      </section>

      <div className="layout">
        <aside className="sidebar">
          <label className="side-label">Arama</label>
          <input
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="araşidonik, HDL, seramid..."
          />

          <div className="mobile-tabs">
            {[
              ["study", "Notlar"],
              ["quiz", "Quiz"],
              ["glossary", "Glossary"],
              ["revision", "Revision"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setView(id)}
                className={view === id ? "active" : ""}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="filter-box">
            <div className="side-label">Kategori</div>
            <div className="chips">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={category === c ? "chip active" : "chip"}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="switch-row">
            <div>
              <strong>Quick revision</strong>
              <span>Sadece çok yüksek ağırlık</span>
            </div>
            <button
              className={quickMode ? "toggle active" : "toggle"}
              onClick={() => setQuickMode(!quickMode)}
            >
              {quickMode ? "Açık" : "Kapalı"}
            </button>
          </div>

          <div className="side-actions">
            <button
              onClick={() =>
                setOpen(new Set(filteredSections.map((s) => s.id)))
              }
            >
              Hepsini aç
            </button>
            <button onClick={() => setOpen(new Set())}>Kapat</button>
          </div>

          <div className="section-nav">
            <div className="side-label">Bölümler</div>
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  setView("study");
                  setOpen((p) => new Set([...p, s.id]));
                  setTimeout(
                    () =>
                      document
                        .getElementById(s.id)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        }),
                    50
                  );
                }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="main">
          {view === "study" && (
            <>
              <section className="overview-card">
                <div className="section-heading">
                  <div>
                    <h2>Quick Overview</h2>
                    <p>Sınavdan önce ilk bakılacak en kritik fikirler.</p>
                  </div>
                  <span>High-yield summary</span>
                </div>
                <div className="overview-grid">
                  {overview.map(([tag, text], i) => (
                    <label
                      key={i}
                      className={
                        learned[`ov-${i}`]
                          ? "overview-item learned"
                          : "overview-item"
                      }
                    >
                      <input
                        type="checkbox"
                        checked={!!learned[`ov-${i}`]}
                        onChange={() => toggleLearned(`ov-${i}`)}
                      />
                      <div>
                        <b>{tag}</b>
                        <p>{text}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {filteredSections.length === 0 && (
                <div className="empty">
                  <h2>Sonuç bulunamadı</h2>
                  <p>Arama kelimesini değiştir veya filtreleri kapat.</p>
                </div>
              )}

              {filteredSections.map((section, idx) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="study-section"
                >
                  <button
                    className="section-toggle"
                    onClick={() => toggleOpen(section.id)}
                  >
                    <div>
                      <div className="badges">
                        <span>{String(idx + 1).padStart(2, "0")}</span>
                        <span>{section.category}</span>
                        <span>Sınav ağırlığı: {section.weight}</span>
                        {learned[section.id] && (
                          <span className="green">Öğrenildi</span>
                        )}
                      </div>
                      <h2>{section.title}</h2>
                      <p>{section.summary}</p>
                    </div>
                    <strong>{open.has(section.id) ? "−" : "+"}</strong>
                  </button>

                  {open.has(section.id) && (
                    <div className="section-body">
                      <div className="learn-row">
                        <div>
                          <b>Bölüm takip</b>
                          <span>
                            Bu ana başlığı tamamen tekrar ettiysen işaretle.
                          </span>
                        </div>
                        <button
                          className={
                            learned[section.id]
                              ? "learned-btn active"
                              : "learned-btn"
                          }
                          onClick={() => toggleLearned(section.id)}
                        >
                          {learned[section.id] ? "Öğrenildi" : "Öğrendim"}
                        </button>
                      </div>
                      {section.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </>
          )}

          {view === "quiz" && (
            <section>
              <div className="quiz-head">
                <div>
                  <h2>Mini Quiz</h2>
                  <p>Sınav tuzaklarına odaklanan karma soru seti.</p>
                </div>
                <div className="score">
                  <span>Skor</span>
                  <b>
                    {quizScore}/{quizRevealed}
                  </b>
                </div>
              </div>

              {quiz.map((q, i) => {
                const st = quizState[q.id] || {};
                const selected = st.selected || "";
                const revealed = !!st.revealed;
                const ok = isCorrect(q, selected);

                return (
                  <div key={q.id} className="quiz-card">
                    <div className="quiz-meta">
                      <span>Soru {i + 1}</span>
                      <span>
                        {q.type === "mcq"
                          ? "Çoktan seçmeli"
                          : q.type === "tf"
                          ? "Doğru / Yanlış"
                          : "Kısa cevap"}
                      </span>
                      {revealed && (
                        <span className={ok ? "ok" : "bad"}>
                          {ok ? "Doğru" : "Tekrar bak"}
                        </span>
                      )}
                    </div>
                    <h3>{q.q}</h3>

                    {q.type === "mcq" && (
                      <div className="options">
                        {q.options.map((op) => (
                          <label
                            key={op}
                            className={selected === op ? "selected" : ""}
                          >
                            <input
                              type="radio"
                              checked={selected === op}
                              onChange={() => setAnswer(q.id, op)}
                            />
                            {op}
                          </label>
                        ))}
                      </div>
                    )}

                    {q.type === "tf" && (
                      <div className="tf">
                        {["Doğru", "Yanlış"].map((op) => (
                          <button
                            key={op}
                            onClick={() => setAnswer(q.id, op)}
                            className={selected === op ? "selected" : ""}
                          >
                            {op}
                          </button>
                        ))}
                      </div>
                    )}

                    {q.type === "short" && (
                      <input
                        className="short-input"
                        value={selected}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        placeholder="Cevabını yaz..."
                      />
                    )}

                    <button className="reveal-btn" onClick={() => reveal(q.id)}>
                      Cevabı Göster / Kontrol Et
                    </button>

                    {revealed && (
                      <div className="answer-box">
                        <b>Doğru cevap: {q.answer}</b>
                        <p>{q.exp}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          )}

          {view === "glossary" && (
            <section>
              <div className="quiz-head">
                <div>
                  <h2>Glossary</h2>
                  <p>Sınavda hızlı hatırlama için kısa terim tanımları.</p>
                </div>
              </div>
              <div className="gloss-grid">
                {glossary
                  .filter(
                    ([t, d]) =>
                      !query || norm(`${t} ${d}`).includes(norm(query))
                  )
                  .map(([t, d]) => (
                    <div key={t} className="gloss-card">
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {view === "revision" && (
            <section className="revision">
              <div className="quiz-head">
                <div>
                  <h2>Final Revision</h2>
                  <p>
                    Sınavdan hemen önce bakılacak zincirler, checklist ve kritik
                    hatalar.
                  </p>
                </div>
              </div>

              <div className="card note-card">
                <div className="eyebrow">Before exam, know these perfectly</div>
                <div className="overview-grid">
                  {overview.map(([tag, text], i) => (
                    <label
                      key={i}
                      className={
                        learned[`ov-${i}`]
                          ? "overview-item learned"
                          : "overview-item"
                      }
                    >
                      <input
                        type="checkbox"
                        checked={!!learned[`ov-${i}`]}
                        onChange={() => toggleLearned(`ov-${i}`)}
                      />
                      <div>
                        <b>{tag}</b>
                        <p>{text}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="sub-title">En Önemli Cause–Effect Zincirleri</h3>
                <div className="chain-list">
                  {finalChains.map((x, i) => (
                    <div key={i}>{x}</div>
                  ))}
                </div>
              </div>

              <div className="card warn-card">
                <h3 className="sub-title">
                  En Tehlikeli / Yaygın Sınav Hataları
                </h3>
                <div className="mistake-grid">
                  {mistakes.map((x, i) => (
                    <div key={i}>{x}</div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="sub-title">Ana Bölüm Checklist</h3>
                <div className="check-grid">
                  {sections.map((s) => (
                    <label key={s.id}>
                      <input
                        type="checkbox"
                        checked={!!learned[s.id]}
                        onChange={() => toggleLearned(s.id)}
                      />
                      {s.title}
                    </label>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

const css = `
:root{
  --bg:#f5f2ec;
  --paper:#ffffff;
  --ink:#0f172a;
  --muted:#64748b;
  --line:#e2e8f0;
  --soft:#f8fafc;
  --teal:#0f766e;
  --teal2:#ccfbf1;
  --amber:#92400e;
  --amber2:#fef3c7;
  --rose:#9f1239;
  --rose2:#ffe4e6;
  --indigo:#3730a3;
  --indigo2:#e0e7ff;
  --shadow:0 14px 40px rgba(15,23,42,.08);
  --shadow2:0 8px 24px rgba(15,23,42,.06);
  --radius:28px;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
button,input{font:inherit}
button{cursor:pointer}
.app{min-height:100vh}
.topbar{
  position:sticky;top:0;z-index:50;
  display:flex;align-items:center;justify-content:space-between;gap:20px;
  padding:12px 28px;background:rgba(255,255,255,.86);backdrop-filter:blur(18px);
  border-bottom:1px solid rgba(226,232,240,.9)
}
.top-kicker{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.22em;color:var(--teal)}
.top-title{font-size:19px;font-weight:950;letter-spacing:-.03em}
.top-nav{display:flex;gap:8px}
.top-nav button,.mobile-tabs button{
  border:0;border-radius:16px;padding:9px 14px;background:transparent;color:#475569;font-weight:850
}
.top-nav button.active,.mobile-tabs button.active{background:#0f172a;color:white}
.hero{background:#0f172a;color:white;position:relative;overflow:hidden}
.hero:before{
  content:"";position:absolute;inset:0;
  background:
    radial-gradient(circle at 10% 0%,rgba(20,184,166,.35),transparent 34%),
    radial-gradient(circle at 92% 80%,rgba(245,158,11,.22),transparent 30%);
}
.hero-inner{position:relative;max-width:1240px;margin:0 auto;padding:56px 28px;display:grid;grid-template-columns:1fr 340px;gap:34px;align-items:end}
.pill{display:inline-flex;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.1);padding:10px 16px;border-radius:999px;font-weight:800;color:#ccfbf1;margin-bottom:22px}
.hero h1{font-size:72px;line-height:.95;margin:0 0 18px;font-weight:950;letter-spacing:-.06em}
.hero p{max-width:760px;color:#cbd5e1;font-size:18px;line-height:1.75;margin:0}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:30px}
.stats div{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.1);border-radius:24px;padding:18px}
.stats strong{display:block;font-size:34px;line-height:1;font-weight:950}
.stats span{display:block;color:#cbd5e1;font-size:13px;margin-top:8px}
.progress-card{border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.1);border-radius:32px;padding:22px;display:flex;align-items:center;justify-content:space-between;gap:18px;backdrop-filter:blur(14px)}
.progress-card span{color:#cbd5e1;font-weight:800;font-size:14px}
.progress-card strong{display:block;font-size:38px;margin:5px 0;font-weight:950}
.progress-card p{font-size:14px;line-height:1.55;margin:0;color:#cbd5e1}
.progress-ring{width:116px;height:116px;border-radius:999px;background:white;position:relative;display:grid;place-items:center;flex:0 0 auto}
.progress-ring svg{width:106px;height:106px;transform:rotate(-90deg)}
.progress-ring circle{fill:none;stroke-width:11;stroke-linecap:round}
.ring-bg{stroke:#e2e8f0}
.ring-fg{stroke:#14b8a6;stroke-dasharray:302;transition:.4s}
.progress-ring b{position:absolute;color:#0f172a;font-size:22px;font-weight:950}
.layout{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:300px 1fr;gap:24px;padding:28px}
.sidebar{position:sticky;top:74px;align-self:start;background:white;border:1px solid var(--line);border-radius:32px;padding:18px;box-shadow:var(--shadow2);max-height:calc(100vh - 96px);overflow:auto}
.side-label{font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.16em;color:#64748b;margin-bottom:8px;display:block}
.search{width:100%;border:1px solid var(--line);background:#f8fafc;border-radius:18px;padding:13px 14px;outline:none}
.search:focus{border-color:#2dd4bf;box-shadow:0 0 0 4px #ccfbf1;background:white}
.mobile-tabs{display:none}
.filter-box{margin-top:18px;background:#f8fafc;border-radius:24px;padding:14px}
.chips{display:flex;gap:7px;flex-wrap:wrap}
.chip{border:1px solid var(--line);background:white;color:#475569;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:850}
.chip.active{background:#0f766e;color:white;border-color:#0f766e}
.switch-row{display:flex;justify-content:space-between;align-items:center;gap:12px;background:#f8fafc;border-radius:24px;padding:14px;margin-top:14px}
.switch-row strong{display:block;font-size:14px}
.switch-row span{display:block;font-size:12px;color:#64748b;margin-top:2px}
.toggle{border:1px solid var(--line);border-radius:999px;padding:7px 10px;background:white;color:#475569;font-size:12px;font-weight:900}
.toggle.active{background:#0f766e;color:white;border-color:#0f766e}
.side-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}
.side-actions button{border:0;border-radius:16px;padding:10px;background:#0f172a;color:white;font-weight:900}
.side-actions button+button{background:#f1f5f9;color:#334155}
.section-nav{margin-top:20px;border-top:1px solid #f1f5f9;padding-top:16px}
.section-nav button{display:block;width:100%;border:0;background:transparent;text-align:left;border-radius:16px;padding:9px 10px;color:#475569;font-size:12px;font-weight:850;line-height:1.45}
.section-nav button:hover{background:#f8fafc;color:#0f172a}
.section-nav span{color:#94a3b8;margin-right:8px}
.main{min-width:0}
.overview-card,.study-section,.quiz-head,.quiz-card,.empty,.gloss-card,.card{background:white;border:1px solid var(--line);border-radius:32px;box-shadow:var(--shadow2)}
.overview-card{padding:22px;margin-bottom:24px}
.section-heading{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:18px}
.section-heading h2,.quiz-head h2{margin:0;font-size:28px;letter-spacing:-.04em}
.section-heading p,.quiz-head p{margin:5px 0 0;color:#64748b;line-height:1.55}
.section-heading span{background:#ccfbf1;color:#0f766e;border-radius:999px;padding:9px 13px;font-size:13px;font-weight:950;white-space:nowrap}
.overview-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.overview-item{display:flex;gap:13px;border:1px solid var(--line);background:#f8fafc;border-radius:24px;padding:15px;cursor:pointer;transition:.2s}
.overview-item:hover{transform:translateY(-2px);box-shadow:var(--shadow2)}
.overview-item.learned{background:#ecfdf5;border-color:#99f6e4}
.overview-item input{accent-color:#0f766e;margin-top:3px}
.overview-item b{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#0f766e;margin-bottom:6px}
.overview-item p{margin:0;color:#475569;font-size:14px;line-height:1.55}
.study-section{overflow:hidden;margin-bottom:18px}
.section-toggle{width:100%;border:0;background:white;text-align:left;padding:22px;display:flex;justify-content:space-between;gap:20px;align-items:flex-start}
.section-toggle:hover{background:#f8fafc}
.badges{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:13px}
.badges span{border-radius:999px;background:#f1f5f9;color:#475569;padding:6px 10px;font-size:12px;font-weight:950}
.badges .green{background:#dcfce7;color:#166534}
.section-toggle h2{font-size:24px;line-height:1.15;letter-spacing:-.04em;margin:0}
.section-toggle p{margin:8px 0 0;color:#64748b;line-height:1.55}
.section-toggle strong{background:#f1f5f9;border-radius:16px;min-width:42px;height:42px;display:grid;place-items:center;font-size:28px}
.section-body{border-top:1px solid #f1f5f9;padding:22px;display:flex;flex-direction:column;gap:18px}
.learn-row{display:flex;justify-content:space-between;gap:14px;align-items:center;background:#f8fafc;border-radius:24px;padding:14px}
.learn-row b{display:block}
.learn-row span{display:block;color:#64748b;font-size:13px;margin-top:2px}
.learned-btn{border:1px solid var(--line);background:white;border-radius:16px;padding:10px 14px;font-weight:950;color:#334155}
.learned-btn.active{background:#0f766e;color:white;border-color:#0f766e}
.card{padding:20px}
.note-card{background:#f0fdfa;border-color:#99f6e4}
.warn-card{background:#fffbeb;border-color:#fde68a}
.exam-card{background:#0f172a;color:white;border-color:#0f172a}
.eyebrow{display:inline-flex;background:rgba(255,255,255,.75);border-radius:999px;padding:7px 11px;font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.13em;color:#0f766e;margin-bottom:14px}
.bullet-list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px}
.bullet-list li{position:relative;padding-left:18px;color:#334155;line-height:1.65;font-size:14px}
.bullet-list li:before{content:"";position:absolute;left:0;top:.7em;width:6px;height:6px;border-radius:999px;background:#64748b}
.warn-list li:before{background:#d97706}
.block-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:12px}
.block-head h3,.flow-card h3,.exam-card h3,.sub-title{margin:0;font-size:18px;letter-spacing:-.02em}
.block-head span{background:white;border-radius:999px;padding:7px 11px;color:#92400e;font-size:12px;font-weight:950;text-transform:uppercase}
.exam-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:14px}
.exam-item{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:13px;font-size:14px;line-height:1.55;color:#e2e8f0}
.sub-title{margin-bottom:14px}
.mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.mini-card{background:white;border:1px solid var(--line);border-radius:24px;padding:17px;box-shadow:var(--shadow2)}
.mini-card h4{margin:0 0 7px;font-size:15px}
.mini-card p{margin:0;color:#475569;line-height:1.55;font-size:14px}
.flow-card{background:#eff6ff;border-color:#bfdbfe}
.flow{display:flex;gap:9px;align-items:center;flex-wrap:wrap;margin-top:14px}
.flow-step{background:white;border-radius:18px;padding:12px 14px;font-size:14px;font-weight:850;color:#334155;box-shadow:var(--shadow2)}
.arrow{font-size:22px;font-weight:950;color:#0284c7}
.table-card{background:white;border:1px solid var(--line);border-radius:28px;overflow:hidden;box-shadow:var(--shadow2)}
.table-title{background:#f8fafc;border-bottom:1px solid var(--line);padding:16px 18px;font-weight:950}
.table-wrap{overflow-x:auto}
table{width:100%;min-width:760px;border-collapse:collapse}
th{background:#f1f5f9;color:#64748b;text-transform:uppercase;letter-spacing:.12em;font-size:12px;text-align:left;padding:13px 16px}
td{padding:14px 16px;border-top:1px solid #f1f5f9;color:#475569;font-size:14px;line-height:1.55;vertical-align:top}
.first-col{font-weight:950;color:#0f172a}
tbody tr:hover{background:#f8fafc}
.empty{padding:42px;text-align:center}
.empty h2{margin:0}
.empty p{color:#64748b}
.quiz-head{padding:22px;margin-bottom:18px;display:flex;justify-content:space-between;gap:16px;align-items:center}
.score{background:#0f172a;color:white;border-radius:24px;padding:14px 18px;min-width:110px}
.score span{display:block;color:#cbd5e1;font-size:12px;font-weight:850}
.score b{font-size:28px;font-weight:950}
.quiz-card{padding:22px;margin-bottom:16px}
.quiz-meta{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:13px}
.quiz-meta span{background:#f1f5f9;color:#475569;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:950}
.quiz-meta .ok{background:#dcfce7;color:#166534}
.quiz-meta .bad{background:#ffe4e6;color:#9f1239}
.quiz-card h3{margin:0 0 16px;font-size:18px;line-height:1.45}
.options{display:flex;flex-direction:column;gap:9px}
.options label{display:flex;gap:10px;border:1px solid var(--line);background:#f8fafc;border-radius:18px;padding:13px;color:#334155;line-height:1.5}
.options label.selected{background:#f0fdfa;border-color:#5eead4}
.options input{accent-color:#0f766e;margin-top:4px}
.tf{display:flex;gap:9px}
.tf button{border:1px solid var(--line);background:#f8fafc;border-radius:16px;padding:11px 17px;font-weight:950;color:#334155}
.tf button.selected{background:#f0fdfa;border-color:#5eead4;color:#0f766e}
.short-input{width:100%;border:1px solid var(--line);background:#f8fafc;border-radius:18px;padding:13px;outline:none}
.short-input:focus{border-color:#2dd4bf;box-shadow:0 0 0 4px #ccfbf1;background:white}
.reveal-btn{border:0;background:#0f172a;color:white;border-radius:17px;padding:12px 16px;font-weight:950;margin-top:14px}
.answer-box{background:#f8fafc;border:1px solid var(--line);border-radius:22px;padding:15px;margin-top:14px}
.answer-box p{margin:8px 0 0;color:#475569;line-height:1.55}
.gloss-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.gloss-card{padding:18px}
.gloss-card h3{margin:0 0 7px;font-size:17px}
.gloss-card p{margin:0;color:#475569;line-height:1.55}
.revision{display:flex;flex-direction:column;gap:18px}
.chain-list,.mistake-grid,.check-grid{display:grid;gap:10px;margin-top:14px}
.chain-list div,.mistake-grid div,.check-grid label{background:#f8fafc;border:1px solid var(--line);border-radius:18px;padding:13px;font-size:14px;font-weight:750;line-height:1.55;color:#334155}
.mistake-grid,.check-grid{grid-template-columns:repeat(2,1fr)}
.check-grid label{display:flex;gap:10px;align-items:flex-start}
.check-grid input{accent-color:#4f46e5;margin-top:4px}
@media (max-width: 980px){
  .top-nav{display:none}
  .hero-inner{grid-template-columns:1fr;padding:44px 18px}
  .hero h1{font-size:54px}
  .stats{grid-template-columns:repeat(2,1fr)}
  .layout{grid-template-columns:1fr;padding:18px}
  .sidebar{position:relative;top:auto;max-height:none}
  .mobile-tabs{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:14px}
  .overview-grid,.gloss-grid,.exam-grid,.mistake-grid,.check-grid{grid-template-columns:1fr}
  .mini-grid{grid-template-columns:1fr}
}
@media (max-width: 560px){
  .topbar{padding:10px 14px}
  .hero h1{font-size:42px}
  .hero p{font-size:15px}
  .stats{grid-template-columns:1fr}
  .progress-card{flex-direction:column;align-items:flex-start}
  .layout{padding:12px}
  .section-toggle{padding:18px}
  .section-body{padding:18px}
  .section-heading{flex-direction:column}
  table{min-width:680px}
}
`;
