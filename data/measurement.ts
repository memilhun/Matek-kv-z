
import { Question } from '../types';

export const measurementQuestions: Question[] = [
  {
    id: 'est_apple_1', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'estimation', time: 25, points: 100,
    question: 'Becsüld meg egy átlagos szem alma tömegét!',
    min: 50, max: 500, correctValue: 150, unit: 'gramm', tolerance: 30,
    explanation: 'Egy átlagos alma kb. 15-20 dkg, azaz 150-200 gramm.'
  },
  {
    id: 'est_desk_1', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'estimation', time: 25, points: 100,
    question: 'Milyen hosszú egy szabványos iskolai íróasztal?',
    min: 50, max: 250, correctValue: 120, unit: 'cm', tolerance: 20,
    explanation: 'Az egyszemélyes iskolapadok általában 70 cm, a kétszemélyesek 120-130 cm hosszúak.'
  },
  {
    id: 'est_pool_1', category: '3. Mérés, statisztika', difficulty: 'hard', type: 'estimation', time: 30, points: 200,
    question: 'Becsüld meg, hány liter víz fér egy kisebb kerti felfújható medencébe!',
    min: 500, max: 15000, correctValue: 5000, unit: 'liter', tolerance: 40,
    explanation: 'Egy 3 méter átmérőjű kerti medence kb. 4000-6000 liter vizet tartalmaz.'
  },
  {
    id: 'est_length_1', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'estimation', time: 25, points: 100,
    question: 'Becsüld meg egy átlagos tanterem magasságát!',
    min: 1, max: 10, correctValue: 3, unit: 'méter', tolerance: 20,
    explanation: 'Egy átlagos belmagasság 2,7 - 3,5 méter között mozog.'
  },
  {id:'unit_len_1',category:'3. Mérés, statisztika',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány mm 1 cm?',correctAnswer:'10',explanation:'A vonalzódon a centik között 10 kis beosztás (mm) van.'},
  {id:'unit_len_2',category:'3. Mérés, statisztika',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány m 1 km?',correctAnswer:'1000',explanation:'A "kilo" előtag ezret jelent. 1 kilométer = 1000 méter.'},
  {id:'unit_len_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány cm 1,5 méter?',correctAnswer:'150',explanation:'1 méter = 100 cm. A másfél méter az 100 + 50 = 150 cm.'},
  {id:'unit_len_4',category:'3. Mérés, statisztika',difficulty:'hard',type:'matching',time:30,points:200,question:'Párosítsd:',pairs:{'1000 mm':'1 m','10 dm':'1 m','100 cm':'1 m'},explanation:'Ezek mind ugyanazt a hosszúságot (1 méter) jelentik más-más mértékegységgel.'},
  {id:'unit_len_5',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány méter 30 dm?',correctAnswer:'3',explanation:'10 dm tesz ki 1 métert. 30-ban a 10 megvan 3-szor. Tehát 3 m.'},
  {id:'unit_mass_1',category:'3. Mérés, statisztika',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány dkg 1 kg?',correctAnswer:'100',explanation:'1 kilóban 100 deka van.'},
  {id:'unit_mass_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány g 1 dkg?',correctAnswer:'10',explanation:'1 dekagramm = 10 gramm.'},
  {id:'unit_mass_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány kg 1 tonna?',correctAnswer:'1000',explanation:'1 tonna nagyon nehéz, pontosan 1000 kg.'},
  {id:'unit_mass_4',category:'3. Mérés, statisztika',difficulty:'hard',type:'mcq',time:30,points:200,question:'Mennyi 500 g kg-ban?',options:['0,5 kg','5 kg','50 kg','0,05 kg'],correct:0,explanation:'500 g az 1000 g-nak a fele. Tehát fél kg, vagyis 0,5 kg.'},
  {id:'unit_mass_5',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány gramm fél kg?',correctAnswer:'500',explanation:'1 kg = 1000 g. Ennek a fele 500 g.'},
  {id:'unit_cap_1',category:'3. Mérés, statisztika',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány dl 1 liter?',correctAnswer:'10',explanation:'1 literes üvegbe 10 deciliter fér.'},
  {id:'unit_cap_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány cl 1 dl?',correctAnswer:'10',explanation:'1 deciliterben 10 centiliter van.'},
  {id:'unit_cap_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány liter 1 hl?',correctAnswer:'100',explanation:'A hekto jelentése száz. 1 hektoliter = 100 liter.'},
  {id:'unit_cap_4',category:'3. Mérés, statisztika',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik a legtöbb?',options:['1 liter','100 dl','1000 ml','10 cl'],correct:1,explanation:'100 dl = 10 liter, ez a legtöbb.'},
  {id:'unit_cap_5',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány dl 2,5 liter?',correctAnswer:'25',explanation:'1 liter = 10 dl. 2,5 liter = 2,5 · 10 = 25 dl.'},
  {id:'unit_theory_1',category:'3. Mérés, statisztika',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mit jelent a "kilo" előtag (pl. kilogramm, kilométer)?',options:['Százszoros','Ezerszeres','Tizedrész','Milliomod'],correct:1,explanation:'A görög eredetű "kilo" szó ezret jelent. 1 kg = 1000 g.'},
  {id:'unit_theory_2',category:'3. Mérés, statisztika',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mi a terület alapegysége?',options:['méter (m)','négyzetméter (m²)','köbméter (m³)','liter (l)'],correct:1,explanation:'A területet kis négyzetekkel fedjük le, ezért "négyzet"-méter.'},
  {
    id: 'unit_time_1', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'shortnum', time: 20, points: 50,
    question: 'Hány másodperc 1 perc?',
    correctAnswer: '60',
    explanation: '1 percben 60 másodperc van.'
  },
  {
    id: 'unit_time_2', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'shortnum', time: 25, points: 100,
    question: 'Hány óra egy nap?',
    correctAnswer: '24',
    explanation: 'Egy nap alatt a Föld egyszer fordul meg a tengelye körül, ez 24 óra.'
  },
  {
    id: 'unit_mix_1', category: '3. Mérés, statisztika', difficulty: 'hard', type: 'mcq', time: 35, points: 200,
    question: 'Mennyi 1 m + 50 cm + 20 mm?',
    options: ['152 cm', '170 cm', '1502 mm', '200 cm'],
    correct: 0,
    explanation: 'Váltsuk át cm-be: 100 cm + 50 cm + 2 cm = 152 cm.'
  },
  {
    id: 'unit_mix_2', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Fél tonna hány kg?',
    options: ['500 kg', '100 kg', '50 kg', '5000 kg'],
    correct: 0,
    explanation: '1 tonna = 1000 kg. Ennek a fele 500 kg.'
  },
  {
    id: 'unit_temp_1', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'tf', time: 20, points: 50,
    question: 'Igaz vagy hamis: A víz 100 °C-on forr.',
    correct: true,
    explanation: 'Igaz, normál nyomáson a víz forráspontja 100 Celsius fok.'
  },
  {
    id: 'unit_liter_1', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'tf', time: 25, points: 100,
    question: 'Igaz vagy hamis: 1000 ml pontosan 1 liter.',
    correct: true,
    explanation: 'Igaz. A "milli" ezredrészt jelent, tehát 1000 milliliter ad ki 1 litert.'
  },
  {
    id: 'unit_match_1', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'matching', time: 30, points: 50,
    question: 'Párosítsd a mennyiségeket:',
    pairs: {'Tömeg': 'kilogramm', 'Hosszúság': 'méter', 'Űrtartalom': 'liter'},
    explanation: 'Alapvető fizikai mennyiségek és mértékegységeik.'
  },
  {id:'unit_len_h1',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány dm 2 kilométer?',correctAnswer:'20000',explanation:'2 · 1000 · 10 = 20 000 dm.'},
  {id:'unit_len_h2',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány cm 0,5 kilométer?',correctAnswer:'50000',explanation:'500 m = 50 000 cm.'},
  {id:'unit_mass_m1',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány kg negyed tonna (1/4 t)?',correctAnswer:'250',explanation:'1 t = 1000 kg. 1000 : 4 = 250 kg.'},
  {id:'unit_mass_h1',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány gramm 3 kg és 20 dkg együtt?',correctAnswer:'3200',explanation:'3 kg = 3000 g, 20 dkg = 200 g.'},
  {id:'unit_mass_h2',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány dkg 2,5 tonna?',correctAnswer:'250000',explanation:'2500 kg = 250 000 dkg.'},
  {id:'unit_cap_h1',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány cl 2 hektoliter (hl)?',correctAnswer:'20000',explanation:'200 l = 2000 dl = 20 000 cl.'},
  {id:'unit_cap_h2',category:'3. Mérés, statisztika',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik a több: 1 liter vagy 12 dl?',options:['12 dl','1 liter','Egyenlőek','Nem dönthető el'],correct:0,explanation:'1 liter = 10 dl.'},
  {id:'unit_time_3',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Hány óra 3 nap és 4 óra összesen?',correctAnswer:'76',explanation:'3 · 24 + 4 = 76 óra.'},
  {id:'unit_time_4',category:'3. Mérés, statisztika',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány másodperc fél perc?',correctAnswer:'30',explanation:'60 : 2 = 30 mp.'},
  {id:'unit_time_5',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány óra egy negyed nap?',correctAnswer:'6',explanation:'24 óra : 4 = 6 óra.'},
  {id:'unit_time_6',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Párosítsd az időtartamokat:',pairs:{'negyed óra':'15 perc','fél óra':'30 perc','háromnegyed óra':'45 perc'},explanation:'Az óra törtrészei.'},
  {id:'unit_time_7',category:'3. Mérés, statisztika',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: Egy évben 12 hónap van.',correct:true,explanation:'Januártól decemberig 12 hónap.'},
  {id:'unit_time_8',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Hány másodperc 10 perc?',correctAnswer:'600',explanation:'10 · 60 = 600.'},
  {id:'unit_est_1',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:25,points:100,question:'Milyen egységben mérjük legcélszerűbben egy radír tömegét?',options:['gramm (g)','kilogramm (kg)','tonna (t)','dekagramm (dkg)'],correct:0,explanation:'Egy radír könnyű, grammban a legpraktikusabb mérni.'},
  {id:'unit_est_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:25,points:100,question:'Milyen hosszú egy átlagos új ceruza?',options:['18 cm','18 mm','18 dm','1,8 m'],correct:0,explanation:'Egy ceruza kb. arasznyi, tehát 18 cm.'},
  {id:'unit_est_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: Egy felnőtt elefánt tömege kb. 5 tonna.',correct:true,explanation:'Az elefántokat tonnában mérjük.'},
  {id:'unit_est_4',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mennyi folyadék fér egy átlagos vizespohárba?',options:['2 dl','2 l','2 cl','2 ml'],correct:0,explanation:'A poharak űrtartalma kb. 2 dl.'},
  {id:'unit_est_5',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:25,points:100,question:'Milyen magas egy átlagos tanterem?',options:['3 m','30 cm','30 m','3 km'],correct:0,explanation:'Egy szoba magassága kb. 3 méter.'},
  {id:'unit_est_6',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mennyi egy kg kenyér tömege dkg-ban?',options:['100 dkg','10 dkg','1000 dkg','50 dkg'],correct:0,explanation:'1 kg = 100 dkg.'},
  {id:'unit_temp_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány fok a különbség a -5 °C and a 15 °C között?',correctAnswer:'20',explanation:'-5-től 15-ig 20 fok különbség.'},
  {id:'unit_comp_1',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Mennyi 2 m and 45 cm milliméterben?',correctAnswer:'2450',explanation:'2000 + 450 = 2450 mm.'},
  {id:'unit_theory_pref',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Párosítsd a prefixumokat a jelentésükkel:',pairs:{'kilo-':'ezerszeres','milli-':'ezredrész','centi-':'századrész'},explanation:'Görög/latin előtagok.'},
  {id:'unit_theory_area',category:'3. Mérés, statisztika',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: A terület váltószámai (m², dm², cm²) 100-asával ugranak.',correct:true,explanation:'Igaz, a területnél 10·10=100 a váltó.'},
  {id:'unit_mix_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:30,points:100,question:'Melyik a rövidebb?',options:['150 mm','2 dm','Egyenlőek','Nem dönthető el'],correct:0,explanation:'150 mm = 1,5 dm < 2 dm.'},
  {id:'unit_mix_4',category:'3. Mérés, statisztika',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: 1 liter víz tömege kb. 1 kg.',correct:true,explanation:'Igaz, a víz sűrűsége miatt.'},
  {id:'unit_match_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Párosítsd a mennyiségeket:',pairs:{'1000 g':'1 kg','1000 kg':'1 t','100 dkg':'1 kg'},explanation:'Tömegegységek.'},
  {id:'unit_match_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Hosszúság váltások:',pairs:{'100 cm':'1 m','1000 m':'1 km','10 mm':'1 cm'},explanation:'Hosszúságok.'},
  {
    id: 'set_9', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'set_placement', time: 40, points: 150,
    question: 'Mértékegységek rendszerezése:',
    setA: { label: 'Hosszúság', rule: 'Távolság mérésére' },
    setB: { label: 'Idő', rule: 'Időtartam mérésére' },
    itemsToPlace: [
      { val: 'méter', correctZone: 'A' },
      { val: 'perc', correctZone: 'B' },
      { val: 'kilométer', correctZone: 'A' },
      { val: 'óra', correctZone: 'B' }
    ],
    explanation: 'A méter és km távolság, a perc és óra időegység.'
  },
  {
    id: 'est_elephant', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'estimation', time: 30, points: 150,
    question: 'Becsüld meg egy felnőtt afrikai elefánt átlagos tömegét (tonna)!',
    min: 1, max: 15, correctValue: 6, unit: 'tonna', tolerance: 30,
    explanation: 'A bikák akár 6 tonnát is nyomhatnak.'
  },
  {
    id: 'est_human_height', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'estimation', time: 25, points: 100,
    question: 'Milyen magas egy átlagos felnőtt férfi (cm)?',
    min: 140, max: 210, correctValue: 180, unit: 'cm', tolerance: 10,
    explanation: 'Az átlagmagasság Magyarországon kb. 175-180 cm.'
  },
  {
    id: 'est_milk_carton', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'estimation', time: 25, points: 100,
    question: 'Milyen magas egy 1 literes tejesdoboz (cm)?',
    min: 10, max: 40, correctValue: 22, unit: 'cm', tolerance: 20,
    explanation: 'A szabványos dobozok kb. 20-25 cm magasak.'
  },
  {
    id: 'est_football_field', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'estimation', time: 30, points: 150,
    question: 'Becsüld meg egy szabványos focipálya hosszát (méter)!',
    min: 50, max: 150, correctValue: 105, unit: 'méter', tolerance: 15,
    explanation: 'A FIFA szabvány szerint a hossza 100-110 méter.'
  },
  {
    id: 'est_classroom_temp', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'estimation', time: 20, points: 100,
    question: 'Mennyi egy tanterem ideális hőmérséklete télen (Celsius)?',
    min: 10, max: 35, correctValue: 22, unit: '°C', tolerance: 15,
    explanation: 'Általában 20-22 fok az előírt hőmérséklet.'
  },
  {
    id: 'est_bread_mass', category: '3. Mérés, statisztika', difficulty: 'easy', type: 'estimation', time: 25, points: 100,
    question: 'Becsüld meg egy nagy vekni kenyér tömegét (gramm)!',
    min: 100, max: 2000, correctValue: 1000, unit: 'gramm', tolerance: 20,
    explanation: 'A leggyakoribb kiszerelés az 1 kg-os (1000 g).'
  },
  {
    id: 'ord_mass_q', category: '3. Mérés, statisztika', difficulty: 'hard', type: 'ordering', time: 50, points: 200,
    question: 'Tömegek növekvő sorrendje:',
    items: ['1 kg', '50 dkg', '200 g', '1,5 kg', '120 dkg'],
    correctOrder: ['200 g', '50 dkg', '1 kg', '120 dkg', '1,5 kg'],
    explanation: 'Váltsunk grammba: 200, 500, 1000, 1200, 1500.'
  },
  {
    id: 'ord_len_q', category: '3. Mérés, statisztika', difficulty: 'hard', type: 'ordering', time: 50, points: 200,
    question: 'Hosszúságok növekvő sorrendje:',
    items: ['2 m', '150 cm', '25 dm', '300 mm', '12 dm'],
    correctOrder: ['300 mm', '12 dm', '150 cm', '2 m', '25 dm'],
    explanation: 'Váltsunk cm-be: 30, 120, 150, 200, 250.'
  },
  {
    id: 'ord_time_q', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'ordering', time: 45, points: 150,
    question: 'Időtartamok növekvő sorrendje:',
    items: ['1 óra', '45 perc', '100 perc', '2 óra', '75 perc'],
    correctOrder: ['45 perc', '1 óra', '75 perc', '100 perc', '2 óra'],
    explanation: '1 óra = 60 perc, 2 óra = 120 perc.'
  },
  {
    id: 'plan_avg_q', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Három szám átlagát keressük (10, 20, 30). Terv:',
    options: ['(10 + 20 + 30) : 3', '10 + 20 + 30', '10 · 20 · 30 : 3', '(10 + 30) : 2'],
    correct: 0,
    explanation: 'Összeadjuk a számokat, majd elosztjuk annyival, ahányan vannak.'
  },
  {
    id: 'plan_unit_conv_q', category: '3. Mérés, statisztika', difficulty: 'hard', type: 'plan_selector', time: 50, points: 200,
    question: 'Hány cm összesen 2 méter and 5 deciméter? Terv:',
    options: ['2 · 100 + 5 · 10', '2 · 10 + 5 · 100', '2 + 5', '200 + 5'],
    correct: 0,
    explanation: '2 méter = 200 cm, 5 dm = 50 cm. Tehát 2*100 + 5*10.'
  }
];
