
import { Question, GridPoint } from './types';

// Standard point sets for reuse in Coordinate questions
const gridSet1: GridPoint[] = [
  {label: 'A', x: 2, y: 3},
  {label: 'B', x: -4, y: 1},
  {label: 'C', x: -2, y: -3},
  {label: 'D', x: 3, y: -2}
];

const gridSet2: GridPoint[] = [
  {label: 'P', x: 0, y: 5},
  {label: 'Q', x: 5, y: 0},
  {label: 'R', x: 0, y: 0},
  {label: 'S', x: -5, y: 0}
];

export const questionBank: Question[] = [
  // --- INTERAKTÍV ÚJDONSÁGOK (BŐVÍTÉS) ---
  {
    id: 'set_div_2', category: '1. Természetes számok', difficulty: 'hard', type: 'set_placement', time: 60, points: 250,
    question: 'Helyezd el a számokat az oszthatósági halmazábrán!',
    setA: { label: '2-vel osztható', rule: 'Páros számok' },
    setB: { label: '5-tel osztható', rule: '0-ra vagy 5-re végződik' },
    itemsToPlace: [
      { val: '12', correctZone: 'A' },
      { val: '15', correctZone: 'B' },
      { val: '20', correctZone: 'Both' },
      { val: '23', correctZone: 'None' }
    ],
    explanation: 'A 12 csak páros. A 15 csak 5-tel osztható. A 20 mindkettővel osztható (10-zel is!). A 23 egyikkel sem.'
  },
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
    id: 'coord_refl_1', category: '10. Helymeghatározás', difficulty: 'hard', type: 'coordinate_picker', time: 40, points: 200,
    question: 'Tükrözd az A(2; 3) pontot az x tengelyre! Kattints a hálón a képére!',
    target: { x: 2, y: -3, label: "A'" },
    gridConfig: { points: [{label: 'A', x: 2, y: 3}] },
    explanation: 'Az x tengelyre való tükrözésnél az x koordináta marad, az y az ellentettjére változik. A(2;3) -> A\'(2;-3).'
  },
  {
    id: 'coord_const_1', category: '10. Helymeghatározás', difficulty: 'hard', type: 'coordinate_picker', time: 45, points: 250,
    question: 'Egy téglalap három csúcsa: (2;2), (6;2) és (6;5). Hol van a negyedik csúcsa? Kattints rá!',
    target: { x: 2, y: 5, label: 'D' },
    gridConfig: { points: [{label: 'A', x: 2, y: 2}, {label: 'B', x: 6, y: 2}, {label: 'C', x: 6, y: 5}] },
    explanation: 'A téglalap szemközti oldalai párhuzamosak és egyenlőek. A (2;2) felett 3 egységgel lesz a negyedik pont: (2;5).'
  },
  {
    id: 'ord_mixed_1', category: '8. A tizedes törtek', difficulty: 'hard', type: 'ordering', time: 50, points: 200,
    question: 'Rendezd növekvő sorrendbe a számokat!',
    items: ['1/2', '0,6', '1/4', '0,25', '0,8'],
    correctOrder: ['1/4', '0,25', '1/2', '0,6', '0,8'],
    explanation: 'Tizedes törtként: 0,25; 0,25; 0,5; 0,6; 0,8. Az 1/4 és a 0,25 egyenlőek.'
  },
  {
    id: 'plan_frac_1', category: '5. A törtszámok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: '24 szeletes torta 3/8 részét megették. Hány szelet MARADT? Válaszd ki a helyes tervet!',
    options: ['24 - (24 : 8 · 3)', '24 : 8 · 3', '24 - 8 · 3', '24 : 3 · 8'],
    correct: 0,
    explanation: 'Előbb kiszámoljuk a 3/8 részt (24:8*3), majd ezt kivonjuk az egészből (24).'
  },

  // --- KORÁBBI FELADATOK ---
  {
    id: 'ord_frac_1', category: '5. A törtszámok', difficulty: 'medium', type: 'ordering', time: 40, points: 150,
    question: 'Rendezd növekvő sorrendbe az alábbi törteket!',
    items: ['1/2', '1/4', '3/4', '1/8'],
    correctOrder: ['1/8', '1/4', '1/2', '3/4'],
    explanation: 'Közös nevezőre hozva (8): 4/8, 2/8, 6/8, 1/8. Sorrend: 1/8, 2/8 (1/4), 4/8 (1/2), 6/8 (3/4).'
  },
  {
    id: 'est_length_1', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'estimation', time: 25, points: 100,
    question: 'Becsüld meg egy átlagos tanterem magasságát!',
    min: 1, max: 10, correctValue: 3, unit: 'méter', tolerance: 20,
    explanation: 'Egy átlagos belmagasság 2,7 - 3,5 méter között mozog.'
  },
  {
    id: 'plan_text_1', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: '3 kg alma 1200 Ft. Mennyibe kerül 5 kg? Válaszd ki a helyes tervet!',
    options: ['1200 : 3 · 5', '1200 · 3 : 5', '1200 + 3 + 5', '1200 · 5'],
    correct: 0,
    explanation: 'Előbb kiszámoljuk 1 kg árát (1200 : 3), majd megszorozzuk 5-tel.'
  },
  {
    id: 'set_div_1', category: '1. Természetes számok', difficulty: 'hard', type: 'set_placement', time: 60, points: 250,
    question: 'Helyezd el a számokat a halmazábrán!',
    setA: { label: 'Páros', rule: 'Páros számok' },
    setB: { label: '3-mal osztható', rule: '3-mal osztható számok' },
    itemsToPlace: [
      { val: '2', correctZone: 'A' },
      { val: '3', correctZone: 'B' },
      { val: '6', correctZone: 'Both' },
      { val: '7', correctZone: 'None' }
    ],
    explanation: '2 páros de nem osztható 3-mal. 3 osztható 3-mal de nem páros. 6 mindkettő. 7 egyik sem.'
  },
  {
    id: 'pick_coord_1', category: '10. Helymeghatározás', difficulty: 'medium', type: 'coordinate_picker', time: 30, points: 150,
    question: 'Jelöld be a koordináta-rendszerben a P(3; -2) pontot!',
    target: { x: 3, y: -2, label: 'P' },
    explanation: 'Lépj 3-at jobbra az x tengelyen, majd 2-t lefelé az y tengely mentén.'
  },

  // --- 9. Az egész számok ---
  {id:'int_add_sub_1',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: (−5) + (−9) ?',options:['−14','4','−4','14'],correct:0,explanation:'Ha két negatív számot adunk össze, az eredmény is negatív lesz. Összeadjuk a számok abszolút értékét: 5 + 9 = 14, tehát az eredmény −14.'},
  {id:'int_add_sub_2',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: 8 + (−3) ?',options:['5','11','−5','−11'],correct:0,explanation:'Negatív szám hozzáadása olyan, mintha kivonnánk a számot. Tehát 8-ból elveszünk 3-at, ami 5.'},
  {id:'int_add_sub_3',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: (−12) + 7 ?',correctAnswer:'-5',explanation:'A −12-ről indulunk a számegyenesen, és 7-et lépünk jobbra (pozitív irányba). Még mindig a negatív oldalon vagyunk: −5.'},
  {id:'int_add_sub_4',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: 15 − (−4) ?',correctAnswer:'19',explanation:'Negatív szám kivonása hozzáadást jelent (a szám ellentettjét adjuk hozzá). Tehát: 15 + 4 = 19.'},
  {id:'int_add_sub_5',category:'9. Az egész számok',difficulty:'hard',type:'mcq',time:30,points:200,question:'Mennyi: (−27) + 15 + 12 ?',options:['0','−24','−6','6'],correct:0,explanation:'Érdemes először a pozitív számokat összeadni: 15 + 12 = 27. Így a feladat: −27 + 27, ami 0, hiszen a szám és az ellentettjének összege nulla.'},
  {id:'int_add_sub_6',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: (−4) + 10 ?',options:['6','−14','−6','14'],correct:0,explanation:'A −4-től 10 lépést megyünk jobbra a számegyenesen. Átlépjük a nullát, és a 6-hoz érkezünk.'},
  {id:'int_add_sub_7',category:'9. Az egész számok',difficulty:'medium',type:'mcq',time:20,points:100,question:'Mennyi: 3 − (−8) ?',options:['11','−11','5','−5'],correct:0,explanation:'A "mínusz mínusz" pluszt jelent. 3 + 8 = 11.'},
  {id:'int_add_sub_8',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: (−20) + (−3) ?',correctAnswer:'-23',explanation:'Mindkét szám negatív, tehát "nő az adósságunk". 20 + 3 = 23, és mivel negatív tartományban vagyunk: −23.'},
  {id:'int_add_sub_9',category:'9. Az egész számok',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Mennyi: (−18) − (−5) ?',correctAnswer:'-13',explanation:'A kivonásból hozzáadás lesz: −18 + 5. Ha a −18-hoz adunk 5-öt, közelebb kerülünk a nullához: −13.'},
  {id:'int_add_sub_10',category:'9. Az egész számok',difficulty:'hard',type:'mcq',time:30,points:200,question:'Mennyi: 7 + (−15) + 6 ?',options:['-2','2','-14','14'],correct:0,explanation:'Adjuk össze a pozitívokat: 7 + 6 = 13. A feladat így: 13 − 15. Mivel többet vonunk ki, mint amink van, az eredmény −2.'},
  {id:'int_add_sub_11',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: −7 + 3 ?',options:['−4','4','10','−10'],correct:0,explanation:'A −7-től 3 lépést lépünk a pozitív irányba (jobbra), így a −4-hez érkezünk.'},
  {id:'int_add_sub_12',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: −2 − 5 ?',options:['−7','7','3','−3'],correct:0,explanation:'A −2-ből indulunk és még 5-öt lépünk balra (kivonás). Így a −7-hez jutunk.'},
  {id:'int_add_sub_13',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: −14 + 9 ?',correctAnswer:'-5',explanation:'Mivel a negatív szám abszolút értéke (14) nagyobb, mint a pozitívé (9), az eredmény negatív marad. A különbség 5, tehát −5.'},
  {id:'int_add_sub_14',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: 12 − (−6) ?',correctAnswer:'18',explanation:'Negatív számot kivonni annyi, mint a pozitív párját hozzáadni: 12 + 6 = 18.'},
  {id:'int_add_sub_15',category:'9. Az egész számok',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: −5 + (−5) = −10 ?',correct:true,explanation:'Igaz. Ha 5 fok hideg van, és még 5 fokot hűl a levegő, akkor −10 fok lesz.'},
  {id:'int_add_sub_16',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: −3 − (−3) = 0 ?',correct:true,explanation:'Igaz, mert ez így írható át: −3 + 3, ami nulla.'},
  {id:'int_add_sub_17',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd az eredményeket:',pairs:{'−2 + 7':'5','−10 + 3':'−7','6 − (−4)':'10'} ,explanation:'−2-höz 7-et adva átlépjük a nullát (5); −10-hez 3-at adva még negatív marad (−7); a kivonásból összeadás lesz (10).'},
  {id:'int_add_sub_18',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: 5 + (−8) ?',options:['−3','3','−13','13'],correct:0,explanation:'Ez ugyanaz, mint az 5 − 8. Mivel a kivonandó nagyobb, az eredmény negatív: −3.'},
  {id:'int_add_sub_19',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: −30 + 12 ?',correctAnswer:'-18',explanation:'A negatív számból "visszafelé" (jobbra) lépünk 12-t. Még mindig a nullától balra vagyunk 18 egységgel.'},
  {id:'int_add_sub_20',category:'9. Az egész számok',difficulty:'medium',type:'mcq',time:20,points:100,question:'Mennyi: −9 − 4 ?',options:['−13','13','−5','5'],correct:0,explanation:'Már a −9-nél vagyunk, és még 4-et lépünk balra (csökken). −9 és −4 együtt −13.'},
  {id:'int_add_sub_21',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: −6 + 2 ?',options:['−4','4','8','−8'],correct:0,explanation:'−6 + 2 = −4. Két lépés jobbra a számegyenesen.'},
  {id:'int_add_sub_24',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd az eredményeket:',pairs:{'−3 + 4':'1','−12 + 2':'−10','7 − (−2)':'9'},explanation:'−3 + 4 = 1; −12 + 2 = −10; 7 + 2 = 9.'},
  {id:'int_add_sub_28',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd az eredményeket:',pairs:{'−4 + 9':'5','−7 − 2':'−9','10 − (−5)':'15'},explanation:'−4 + 9 = 5; −7 − 2 = −9; 10 + 5 = 15.'},
  {id:'int_add_sub_34',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd az eredményeket:',pairs:{'−8 + 3':'−5','−14 + 4':'−10','9 − (−3)':'12'},explanation:'Gyakorold a számegyenesen való lépkedést!'},
  {id:'int_add_sub_38',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd:',pairs:{'−9 + 6':'−3','−3 − 7':'−10','4 − (−1)':'5'},explanation:'−9 + 6 = −3; −3 − 7 = −10; 4 + 1 = 5.'},
  {id:'int_add_sub_41',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi: −3 + (−6) ?',options:['−9','9','3','−3'],correct:0,explanation:'Két negatív szám összege: −3 − 6 = −9.'},
  {id:'int_add_sub_72',category:'9. Az egész számok',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: −18 − (−3) = −15 ?',correct:true,explanation:'Igaz. −18 + 3 = −15.'},
  {id:'int_add_sub_86',category:'9. Az egész számok',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: −3 − 9 = −12 ?',correct:true,explanation:'Igaz. Ha 3 méter mélyen vagy, és még 9 métert ásol lefelé, 12 méter mélyen leszel (−12).'},
  {id:'abs_opp_1',category:'9. Az egész számok',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Mennyi a -15 ellentettje?',correctAnswer:'15',explanation:'Az ellentett azt jelenti, hogy a nulla másik oldalán lévő, ugyanolyan távoli számot keressük. -15 ellentettje 15.'},
  {id:'abs_opp_2',category:'9. Az egész számok',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Mennyi a -8 abszolút értéke?',correctAnswer:'8',explanation:'Az abszolút érték a nullától való távolságot jelenti. A -8 nyolc lépésre van a nullától, tehát 8.'},
  {id:'abs_opp_3',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mi a 42 ellentettje?',options:['-42','42','0','84'],correct:0,explanation:'Pozitív szám ellentettje a negatív párja: -42.'},
  {id:'abs_opp_4',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi |-25| értéke?',options:['25','-25','0','50'],correct:0,explanation:'Az abszolút érték jel (a két függőleges vonal) "eltünteti" a mínusz jelet. |-25| = 25.'},
  {id:'abs_opp_5',category:'9. Az egész számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A -5 ellentettje 5.',correct:true,explanation:'Helyes, a -5 ellentettje valóban +5.'},
  {id:'abs_opp_6',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:25,points:100,question:'Igaz vagy hamis: A -7 abszolút értéke -7.',correct:false,explanation:'Hamis! Az abszolút érték (távolság) sosem lehet negatív. |-7| = 7.'},
  {id:'abs_opp_7',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd a számokat az ellentettjükkel:',pairs:{'-2':'2','5':'-5','0':'0'},explanation:'Az ellentettnél megváltozik az előjel (pluszból mínusz, mínuszból plusz). A 0 ellentettje önmaga.'},
  {id:'abs_opp_8',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Számítsd ki az értékeket:',pairs:{'|-10|':'10','-(-3)':'3','-|4|':'-4'},explanation:'|-10| a távolság (10). -(-3) az ellentett ellentettje (3). -|4| a 4 abszolút értékének az ellentettje (-4).'},
  {id:'abs_opp_9',category:'9. Az egész számok',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Mennyi: |-12| + |-3| ?',correctAnswer:'15',explanation:'Először számold ki az abszolút értékeket: 12 és 3. Ezek összege: 12 + 3 = 15.'},
  {id:'abs_opp_10',category:'9. Az egész számok',difficulty:'medium',type:'mcq',time:25,points:100,question:'Melyik állítás igaz?',options:['|-5| = 5','|-5| = -5','-5 ellentettje -5','|5| = -5'],correct:0,explanation:'Csak az első állítás helyes: |-5| valóban 5.'},
  {id:'abs_opp_11',category:'9. Az egész számok',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Mennyi: |-13| ?',correctAnswer:'13',explanation:'A -13 távolsága a nullától 13 egység.'},
  {id:'abs_opp_12',category:'9. Az egész számok',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Mennyi a 0 ellentettje?',correctAnswer:'0',explanation:'A nulla se nem pozitív, se nem negatív, ellentettje önmaga.'},
  {id:'abs_opp_13',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:25,points:50,question:'Melyik szám ellentettje a -8?',options:['8','-8','0','1/8'],correct:0,explanation:'Melyik szám van a 0 másik oldalán, ugyanilyen messze? A 8.'},
  {id:'abs_opp_14',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Számítsd ki: |-5| + |-6|',correctAnswer:'11',explanation:'|-5|=5 és |-6|=6. Összeadva: 5 + 6 = 11.'},
  {id:'abs_opp_15',category:'9. Az egész számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A nulla abszolút értéke nulla.',correct:true,explanation:'Igaz, a nulla távolsága a nullától 0.'},
  {id:'abs_opp_16',category:'9. Az egész számok',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mennyi: -(-10)?',options:['10','-10','0','-1'],correct:0,explanation:'A mínusz jel a zárójel előtt az ellentettet jelenti. -10 ellentettje 10.'},
  {id:'abs_opp_17',category:'9. Az egész számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Számítsd ki:',pairs:{'|-4|':'4','-|2|':'-2','-(-9)':'9'},explanation:'|-4|=4 (távolság). -|2|=-2 (a 2 abszolút értékének ellentettje). -(-9)=9 (ellentett ellentettje).'},
  {id:'abs_opp_18',category:'9. Az egész számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi: 20 − |-5| ?',correctAnswer:'15',explanation:'Először az abszolút értéket végezzük el: |-5|=5. Ezután: 20 − 5 = 15.'},
  {id:'abs_opp_19',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: Bármely negatív egész szám abszolút értéke nagyobb a számnál.',correct:true,explanation:'Igaz. Pl. |-3| = 3, és a 3 (pozitív) mindig nagyobb, mint a -3 (negatív).'},
  {id:'abs_opp_20',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mennyi az abszolút értéke a -100-nak?',options:['100','-100','0','1'],correct:0,explanation:'A -100 pontosan 100 lépésre van a nullától.'},
  {id:'concept_tf_1',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:30,points:100,question:'Igaz vagy hamis: Ha pozitív számból pozitív számot vonunk ki, negatív számot kapunk.',correct:false,explanation:'Nem mindig. Ha a kisebből vonjuk ki a nagyobbat, akkor negatív (pl. 2-5=-3), de ha fordítva, akkor pozitív (pl. 5-2=3).'},
  {id:'concept_tf_2',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:30,points:100,question:'Igaz vagy hamis: Ha pozitív számból az ellentettjét vonjuk ki, pozitív számot kapunk.',correct:true,explanation:'Igaz. Pl. 5 - (-5) = 5 + 5 = 10.'},
  {id:'concept_tf_3',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:30,points:100,question:'Igaz vagy hamis: Ha negatív számból önmagát vonjuk ki, nullát kapunk.',correct:true,explanation:'Bármely számot önmagából kivonva 0-t kapunk (pl. -5 - (-5) = -5 + 5 = 0).'},
  {id:'concept_tf_4',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:30,points:100,question:'Igaz vagy hamis: Ha negatív számból az abszolút értékét vonjuk ki, nullát kapunk.',correct:false,explanation:'Hamis. Pl. -3 - |-3| = -3 - 3 = -6. Csak akkor lenne 0, ha hozzáadnánk.'},
  {id:'concept_tf_5',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:30,points:100,question:'Igaz vagy hamis: Ha negatív számból az ellentettjét vonjuk ki, negatív számot kapunk.',correct:true,explanation:'Igaz. Pl. -5 - 5 = -10.'},
  {id:'int_theory_1',category:'9. Az egész számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mit jelent a számok írásában a helyiérték?',options:['A számjegy alakja','A számjegy helye a számban','A számjegy színe','A szám hossza'],correct:1,explanation:'Ugyanaz a számjegy mást ér, ha hátul áll (egyes), vagy ha elöl (pl. ezres). Ezt nevezzük helyiértéknek.'},
  {id:'int_theory_2',category:'9. Az egész számok',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: A 0 (nulla) természetes szám.',correct:true,explanation:'Igen, a természetes számok a 0, 1, 2, 3... és így tovább a végtelenig.'},
  {id:'int_theory_3',category:'9. Az egész számok',difficulty:'medium',type:'mcq',time:20,points:100,question:'Melyik műveletnél cserélhetjük fel a számokat (kommutativitás)?',options:['Kivonásnál','Osztásnál','Összeadásnál','Hatványozásnál'],correct:2,explanation:'5 + 3 ugyanannyi, mint 3 + 5. De a kivonásnál ez nem igaz.'},

  // --- 10. Helymeghatározás ---
  {
    id: 'coord_1', category: '10. Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 30, points: 50,
    gridConfig: { points: gridSet1, highlight: 'A' },
    question: 'Határozd meg az A pont koordinátáit!',
    options: ['(2; 3)', '(3; 2)', '(-2; 3)', '(2; -3)'],
    correct: 0,
    explanation: 'Az első szám (x) mutatja, mennyit lépünk jobbra (2), a második (y), mennyit lépünk fel (3). Tehát A(2; 3).'
  },
  {
    id: 'coord_2', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    gridConfig: { points: gridSet1, highlight: 'B' },
    question: 'Határozd meg a B pont koordinátáit!',
    options: ['(-4; 1)', '(4; 1)', '(-4; -1)', '(-1; 4)'],
    correct: 0,
    explanation: 'Az origóból balra lépünk 4-et (-4), majd felfelé 1-et (1). Tehát B(-4; 1).'
  },
  {
    id: 'coord_3', category: '10. Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 30, points: 50,
    gridConfig: { points: gridSet1, highlight: 'C' },
    question: 'Határozd meg a C pont koordinátáit!',
    options: ['(-2; -3)', '(-3; -2)', '(2; 3)', '(-2; 3)'],
    correct: 0,
    explanation: 'Az origóból balra (-2) és lefelé (-3) kell lépni. C(-2; -3).'
  },
  {
    id: 'coord_4', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    gridConfig: { points: gridSet1 },
    question: 'Melyik pont található a (3; -2) koordinátán?',
    options: ['A', 'B', 'C', 'D'],
    correct: 3,
    explanation: 'x=3 jelentése: 3 lépés jobbra. y=-2 jelentése: 2 lépés lefelé. Ott a D pontot találod.'
  },
  {
    id: 'coord_5', category: '10. Helymeghatározás', difficulty: 'easy', type: 'tf', time: 30, points: 50,
    gridConfig: { points: gridSet1 },
    question: 'Igaz vagy hamis: Az A és D pontok x koordinátája pozitív.',
    correct: true,
    explanation: 'Igaz, because mindkettő a függőleges tengelytől jobbra helyezkedik el.'
  },
  {
    id: 'coord_6', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    gridConfig: { points: gridSet2, highlight: 'P' },
    question: 'Hol található a P pont?',
    options: ['Az x tengelyen', 'Az y tengelyen', 'Az origóban', 'A második síknegyedben'],
    correct: 1,
    explanation: 'A P pont koordinátája (0; 5). Mivel az x=0, nem léptünk se jobbra, se balra, így rajta maradtunk az y tengelyen.'
  },
  {
    id: 'coord_7', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    gridConfig: { points: gridSet2, highlight: 'Q' },
    question: 'Melyik állítás igaz a Q pontra (5; 0)?',
    options: ['Az y tengelyen van', 'Az x tengelyen van', 'Ez az origó', 'Egyik sem'],
    correct: 1,
    explanation: 'Mivel az y koordináta 0, nem léptünk se fel, se le, tehát a pont az x tengelyen (vízszintes) fekszik.'
  },
  {
    id: 'coord_8', category: '10. Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 20, points: 50,
    gridConfig: { points: gridSet2, highlight: 'R' },
    question: 'Mi a neve a (0; 0) pontnak?',
    options: ['Középpont', 'Origó', 'Bázis', 'Zéró'],
    correct: 1,
    explanation: 'A koordináta-rendszer metszéspontját (kezdőpontját) Origónak nevezzük.'
  },
  {
    id: 'coord_9', category: '10. Helymeghatározás', difficulty: 'hard', type: 'matching', time: 40, points: 200,
    gridConfig: { points: gridSet1 },
    question: 'Párosítsd a pontokat a síknegyedekkel!',
    pairs: {'A': 'I. negyed', 'B': 'II. negyed', 'C': 'III. negyed'},
    explanation: 'I. negyed: jobb-fent (+,+); II. negyed: bal-fent (-,+); III. negyed: bal-lent (-,-).'
  },
  {
    id: 'coord_10', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    gridConfig: { points: [{label:'X',x:-3,y:4}, {label:'Y',x:3,y:4}] },
    question: 'Mekkora a távolság az X(-3; 4) és Y(3; 4) pontok között?',
    options: ['3', '4', '6', '0'],
    correct: 2,
    explanation: 'Mindkettő 4 egység magasan van. A távolságuk vízszintesen: a -3-tól a 3-ig 6 lépés van.'
  },
  {
    id: 'coord_new_1', category: '10. Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 20, points: 50,
    question: 'Melyik tengely a vízszintes?',
    options: ['x tengely', 'y tengely', 'z tengely', 'origó'],
    correct: 0,
    explanation: 'A vízszintes tengelyt x tengelynek, a függőlegest y tengelynek nevezzük.'
  },
  {
    id: 'coord_new_2', category: '10. Helymeghatározás', difficulty: 'easy', type: 'tf', time: 20, points: 50,
    question: 'Igaz vagy hamis: A (2; 3) és a (3; 2) ugyanazt a pontot jelöli.',
    correct: false,
    explanation: 'Hamis. A sorrend számít! (2;3) azt jelenti: 2 jobbra, 3 fel. A (3;2) pedig: 3 jobbra, 2 fel.'
  },
  {
    id: 'coord_new_3', category: '10. Helymeghatározás', difficulty: 'medium', type: 'shortnum', time: 25, points: 100,
    question: 'Milyen távol van az x tengelytől a P(5; -3) pont?',
    correctAnswer: '3',
    explanation: 'A pont y koordinátája (-3) mutatja a távolságot az x tengelytől. A távolság mindig pozitív: 3 egység.'
  },
  {
    id: 'coord_new_4', category: '10. Helymeghatározás', difficulty: 'medium', type: 'shortnum', time: 25, points: 100,
    question: 'Milyen távol van az y tengelytől a K(-4; 7) pont?',
    correctAnswer: '4',
    explanation: 'Az y tengelytől való távolságot az x koordináta abszolút értéke adja meg. |-4| = 4.'
  },
  {
    id: 'coord_new_5', category: '10. Helymeghatározás', difficulty: 'hard', type: 'mcq', time: 30, points: 200,
    question: 'Ha a (2; 3) pontot tükrözzük az x tengelyre, mi lesz a képe?',
    options: ['(2; -3)', '(-2; 3)', '(-2; -3)', '(3; 2)'],
    correct: 0,
    explanation: 'X tengelyre való tükrözéskor az x koordináta marad, az y az ellentettjére változik. (2; -3).'
  },
  {
    id: 'coord_new_6', category: '10. Helymeghatározás', difficulty: 'hard', type: 'mcq', time: 30, points: 200,
    question: 'Ha a (-5; 1) pontot tükrözzük az y tengelyre, mi lesz a képe?',
    options: ['(5; 1)', '(-5; -1)', '(5; -1)', '(1; -5)'],
    correct: 0,
    explanation: 'Y tengelyre való tükrözéskor az y koordináta marad, az x az ellentettjére változik. (5; 1).'
  },
  {
    id: 'coord_new_7', category: '10. Helymeghatározás', difficulty: 'hard', type: 'mcq', time: 35, points: 200,
    question: 'Mi a felezőpontja az O(0;0) és A(4;4) szakasznak?',
    options: ['(2; 2)', '(1; 1)', '(2; 4)', '(4; 2)'],
    correct: 0,
    explanation: 'Pontosan félúton van: 0 és 4 között a 2 van. Tehát (2; 2).'
  },
  {
    id: 'coord_new_8', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Ha az (1; 1) pontból 2-t lépünk jobbra, hova jutunk?',
    options: ['(3; 1)', '(1; 3)', '(-1; 1)', '(1; -1)'],
    correct: 0,
    explanation: 'Jobbra lépéskor az x koordináta nő. 1 + 2 = 3. Az y nem változik. (3; 1).'
  },
  {
    id: 'coord_new_9', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Ha a (2; 5) pontból 3-at lépünk lefelé, hova jutunk?',
    options: ['(2; 2)', '(5; 5)', '(-1; 5)', '(2; 8)'],
    correct: 0,
    explanation: 'Lefelé lépéskor az y koordináta csökken. 5 - 3 = 2. Az x nem változik. (2; 2).'
  },
  {
    id: 'coord_new_10', category: '10. Helymeghatározás', difficulty: 'medium', type: 'matching', time: 35, points: 100,
    question: 'Melyik síknegyedben milyen előjelűek a számok?',
    pairs: {'I. negyed': '(+; +)', 'II. negyed': '(-; +)', 'III. negyed': '(-; -)'},
    explanation: 'I: jobb-fent (+,+); II: bal-fent (-,+); III: bal-lent (-,-); IV: jobb-lent (+,-).'
  },
  {
    id: 'coord_new_11', category: '10. Helymeghatározás', difficulty: 'hard', type: 'tf', time: 25, points: 200,
    question: 'Igaz vagy hamis: Ha egy pont az egyik tengelyen van, akkor az egyik koordinátája 0.',
    correct: true,
    explanation: 'Igaz. Ha az x tengelyen van, y=0. Ha az y tengelyen van, x=0.'
  },
  {
    id: 'coord_new_12', category: '10. Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik pont van a II. síknegyedben?',
    options: ['(-3; 5)', '(3; 5)', '(-3; -5)', '(3; -5)'],
    correct: 0,
    explanation: 'A II. negyed balra fent van. Tehát x negatív, y pozitív.'
  },
  {
    id: 'coord_new_13', category: '10. Helymeghatározás', difficulty: 'hard', type: 'shortnum', time: 40, points: 200,
    question: 'Mekkora a területe annak a téglalapnak, amelynek csúcsai: (0;0), (4;0), (4;3), (0;3)?',
    correctAnswer: '12',
    explanation: 'Az oldalai a tengelyek mentén mérhetők: szélessége 4, magassága 3. Terület = 4 · 3 = 12.'
  },
  {
    id: 'coord_new_14', category: '10. Helymeghatározás', difficulty: 'easy', type: 'mcq', time:20, points: 50,
    question: 'Melyik koordinátát írjuk előre?',
    options: ['x', 'y', 'mindegy', 'z'],
    correct: 0,
    explanation: 'Mindig az x koordinátával kezdünk (vízszintes), utána jön az y (függőleges).'
  },
  {
    id: 'coord_new_15', category: '10. Helymeghatározás', difficulty: 'medium', type: 'shortnum', time: 30, points: 100,
    question: 'Mennyi a távolság a (-2; 0) és a (3; 0) pontok között?',
    correctAnswer: '5',
    explanation: 'A -2-től a 0-ig 2 lépés, onnan a 3-ig még 3 lépés. Összesen 2 + 3 = 5.'
  },

  // --- 5. A törtszámok ---
  {
    id: 'frac_concept_1', category: '5. A törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 50,
    question: 'Hogy nevezzül a törtvonal alatti számot?',
    options: ['Számláló', 'Nevező', 'Törtvonal', 'Hányados'],
    correct: 1,
    explanation: 'A törtvonal alatti szám a nevező. Ez "nevezi meg" a törtet (pl. ötöd, hatod), és megmutatja, hány egyenlő részre osztottuk az egészet.'
  },
  {
    id: 'frac_concept_2', category: '5. A törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 50,
    question: 'Hogy nevezzük a törtvonal feletti számot?',
    options: ['Számláló', 'Nevező', 'Törtvonal', 'Hányados'],
    correct: 0,
    explanation: 'A törtvonal feletti szám a számláló. Ez "számolja meg", hogy hány darabot veszünk a részekből.'
  },
  {
    id: 'frac_concept_3', category: '5. A törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 50,
    question: 'Milyen műveletet jelöl a törtvonal?',
    options: ['Szorzást', 'Összeadást', 'Osztást', 'Kivonást'],
    correct: 2,
    explanation: 'A törtvonal mindig osztást jelöl. Pl. 1/2 ugyanaz, mint 1 osztva 2-vel.'
  },
  {
    id: 'frac_concept_4', category: '5. A törtszámok', difficulty: 'easy', type: 'shortnum', time: 20, points: 50,
    question: 'Hány ötöd alkot egy egészet?',
    correctAnswer: '5',
    explanation: 'Ha egy tortát 5 egyenlő szeletre vágunk, akkor mind az 5 szelet kell ahhoz, hogy meglegyen az egész torta. 5/5 = 1.'
  },
  {
    id: 'frac_concept_5', category: '5. A törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 50,
    question: 'Igaz vagy hamis: A 4/3 egynél nagyobb tört.',
    correct: true,
    explanation: 'Igaz, because a számláló (4) nagyobb, mint a nevező (3). Ez egy "ál-tört", több mint 1 egész.'
  },
  {
    id: 'frac_concept_6', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Melyik tört értéke pontosan 1?',
    options: ['4/5', '7/7', '8/7', '0/5'],
    correct: 1,
    explanation: 'Ha a számláló és a nevező egyenlő, akkor a tört értéke 1 egész (pl. 7/7).'
  },
  {
    id: 'frac_mixed_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik vegyes szám egyenlő a 13/4 törttel?',
    options: ['2 3/4', '3 1/4', '4 1/4', '3 3/4'],
    correct: 1,
    explanation: 'Nézzük meg, hányszor van meg 13-ban a 4. Megvan 3-szor (3*4=12), és marad az 1. Tehát 3 egész és 1/4.'
  },
  {
    id: 'frac_mixed_2', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik törttel egyenlő a 2 1/5 vegyes szám?',
    options: ['3/5', '11/5', '10/5', '7/5'],
    correct: 1,
    explanation: 'Váltsuk át: 2 egész az 10 ötöd (2*5). Ehhez jön még 1 ötöd. Összesen 11/5.'
  },
  {
    id: 'frac_mixed_3', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Írd át vegyes számba: 8/3',
    options: ['2 2/3', '3 1/3', '1 5/3', '2 1/3'],
    correct: 0,
    explanation: '8-ban a 3 megvan 2-szer (ez 6), a maradék pedig 2. Tehát 2 egész 2/3.'
  },
  {
    id: 'frac_mixed_4', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 25, points: 100,
    question: 'Hány egész van a 15/4 törtben?',
    correctAnswer: '3',
    explanation: 'Csak az egész részt kérdezzük: 15-ben a 4 megvan 3-szor (mert 3*4=12), a maradékkal most nem kell foglalkozni.'
  },
  {
    id: 'frac_mixed_5', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik tört egyenlő a 3 1/2 számmal?',
    options: ['7/2', '5/2', '3/2', '4/2'],
    correct: 0,
    explanation: '3 egész az 6 fél (3*2), plusz még 1 fél, az összesen 7/2.'
  },
  {
    id: 'frac_mixed_6', category: '5. A törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 50,
    question: 'Igaz vagy hamis: Az 5/2 egyenlő 2 és féllel.',
    correct: true,
    explanation: 'Igaz. 5-ben a 2 megvan 2-szer, és marad 1. Tehát 2 egész 1/2.'
  },
  {
    id: 'frac_simplify_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Egyszerűsítsd a 18/24 törtet a legegyszerűbb alakjára!',
    options: ['9/12', '6/8', '3/4', '2/3'],
    correct: 2,
    explanation: 'Keressünk egy számot, amivel mindkettő osztható. A legnagyobb ilyen a 6. 18:6=3 és 24:6=4. Így lesz 3/4.'
  },
  {
    id: 'frac_expand_1', category: '5. A törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 50,
    question: 'Melyik szám hiányzik a számlálóból? 3/5 = ?/20',
    correctAnswer: '12',
    explanation: 'A nevező 5-ről 20-ra változott, azaz megszoroztuk 4-gyel. A számlálót is meg kell szorozni 4-gyel: 3 · 4 = 12.'
  },
  {
    id: 'frac_simp_2', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Bővítsd a 2/3 törtet 5-tel!',
    options: ['7/8', '10/15', '2/15', '10/3'],
    correct: 1,
    explanation: 'Bővítéskor a számlálót ÉS a nevezőt is megszorozzuk ugyanazzal a számmal. 2·5=10 és 3·5=15. Eredmény: 10/15.'
  },
  {
    id: 'frac_simp_3', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 100,
    question: 'Egyszerűsítsd a 6/8 törtet a legegyszerűbb alakjára! (x/y)',
    correctAnswer: '3/4',
    explanation: 'Mindkét szám páros, felezzük meg őket! 6 fele 3, 8 fele 4. Eredmény: 3/4.'
  },
  {
    id: 'frac_simp_4', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik tört NEM egyenlő az 1/2-vel?',
    options: ['2/4', '3/6', '3/5', '5/10'],
    correct: 2,
    explanation: '2/4, 3/6, 5/10 mind egyszerűsíthetők 1/2-re. A 3/5 viszont nem.'
  },
  {
    id: 'frac_simp_5', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 25, points: 100,
    question: 'Ha 2/5 = x/15, mennyi az x értéke?',
    correctAnswer: '6',
    explanation: 'Az 5-öt 3-mal szoroztuk, hogy 15 legyen. Ezért a 2-t is 3-mal kell szorozni: 2 · 3 = 6.'
  },
  {
    id: 'frac_simp_6', category: '5. A törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 50,
    question: 'Igaz vagy hamis: A 10/20 egyszerűsítve 1/2.',
    correct: true,
    explanation: 'Igaz. Ha 20 részből 10-et veszel ki, az pont a fele.'
  },
  {
    id: 'frac_compare_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik relációjel illik a 2/3 és 3/5 közé?',
    options: ['>', '<', '='],
    correct: 0,
    explanation: 'Hozzuk közös nevezőre (15)! 2/3 = 10/15, míg 3/5 = 9/15. Mivel 10 > 9, ezért a 2/3 a nagyobb.'
  },
  {
    id: 'frac_comp_2', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Melyik tört a nagyobb: 4/7 vagy 4/9?',
    options: ['4/7', '4/9', 'Egyenlőek'],
    correct: 0,
    explanation: 'Ha a számlálók egyformák (mindkettő 4 szelet), akkor az a nagyobb, ahol nagyobbak a szeletek (kisebb a nevező). Tehát 4/7 > 4/9.'
  },
  {
    id: 'frac_comp_3', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik a legkisebb szám az alábbiak közül?',
    options: ['1/2', '1/3', '1/4', '1/10'],
    correct: 3,
    explanation: 'Minél több részre osztjuk az egészet, annál kisebb egy szelet. A tized a legkisebb.'
  },
  {
    id: 'frac_comp_4', category: '5. A törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 200,
    question: 'Hasonlítsd össze: 3/4 és 5/8',
    options: ['3/4 > 5/8', '3/4 < 5/8', '3/4 = 5/8'],
    correct: 0,
    explanation: 'A 3/4 bővítve 6/8. Így már könnyű összehasonlítani: 6/8 > 5/8.'
  },
  {
    id: 'frac_comp_5', category: '5. A törtszámok', difficulty: 'medium', type: 'tf', time: 25, points: 100,
    question: 'Igaz vagy hamis: Ha két tört nevezője azonos, a nagyobb számlálójú tört a nagyobb.',
    correct: true,
    explanation: 'Igaz. Ha a szeletek mérete egyforma, akkor abból van több, amiből több darabunk van.'
  },
  {
    id: 'frac_comp_6', category: '5. A törtszámok', difficulty: 'medium', type: 'tf', time: 25, points: 100,
    question: 'Igaz vagy hamis: 1/3 nagyobb mint 1/2.',
    correct: false,
    explanation: 'Hamis. Gondolj a tortára: a fél torta (1/2) nagyobb, mint a harmad torta (1/3).'
  },
  {
    id: 'frac_add_1', category: '5. A törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 50,
    question: 'Mennyi 3/8 + 2/8? (Írd be törtként: x/y)',
    correctAnswer: '5/8',
    explanation: 'Azonos nevezőjű törteknél a nevező marad (8), a számlálókat pedig összeadjuk: 3 + 2 = 5. Eredmény: 5/8.'
  },
  {
    id: 'frac_sub_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 100,
    question: 'Végezd el a kivonást: 5/6 − 1/3',
    options: ['4/3', '1/2', '2/3', '1/6'],
    correct: 1,
    explanation: 'Közös nevező kell! 1/3 = 2/6. Most már kivonhatunk: 5/6 - 2/6 = 3/6. Ez egyszerűsítve 1/2.'
  },
  {
    id: 'frac_ops_add_2', category: '5. A törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 50,
    question: 'Mennyi 2/9 + 5/9? (törtként: x/y)',
    correctAnswer: '7/9',
    explanation: 'A nevező változatlan marad, csak a számlálókat adjuk össze: 2 + 5 = 7. Eredmény: 7/9.'
  },
  {
    id: 'frac_ops_add_3', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 100,
    question: 'Mennyi 1/4 + 1/2?',
    options: ['2/6', '3/4', '1/6', '2/4'],
    correct: 1,
    explanation: 'Az 1/2-et bővítsük negyedekre: 1/2 = 2/4. Így 1/4 + 2/4 = 3/4.'
  },
  {
    id: 'frac_ops_sub_3', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Mennyi 1 egészből 2/5? (törtként: x/y)',
    correctAnswer: '3/5',
    explanation: 'Az 1 egészet felírhatjuk 5/5-ként. 5/5 - 2/5 = 3/5.'
  },
  {
    id: 'frac_ops_add_4', category: '5. A törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 200,
    question: 'Mennyi 1 1/5 + 2 2/5?',
    options: ['3 1/5', '3 3/5', '3 3/10', '4'],
    correct: 1,
    explanation: 'Külön adjuk össze az egészeket (1+2=3) és a törteket (1/5+2/5=3/5). Eredmény: 3 egész 3/5.'
  },
  {
    id: 'frac_ops_sub_4', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 100,
    question: 'Mennyi 5/8 - 1/4?',
    options: ['4/4', '3/8', '4/8', '1/8'],
    correct: 1,
    explanation: 'Hozzuk közös nevezőre: 1/4 = 2/8. A kivonás: 5/8 - 2/8 = 3/8.'
  },
  {
    id: 'frac_mult_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Mennyi: (2/7) · 3?',
    options: ['6/7', '6/21', '2/21', '5/7'],
    correct: 0,
    explanation: 'Törtet egész számmal úgy szorzunk, hogy csak a számlálót szorozzuk meg. 2 · 3 = 6, a nevező marad 7. Eredmény: 6/7.'
  },
  {
    id: 'frac_div_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Mennyi: (8/9) : 2?',
    options: ['16/9', '4/9', '8/18', '4/4.5'],
    correct: 1,
    explanation: 'Ha a számláló osztható az egész számmal, egyszerűen elosztjuk: 8 : 2 = 4. A nevező marad 9. Eredmény: 4/9.'
  },
  {
    id: 'frac_ops_mult_2', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 100,
    question: 'Mennyi 3/10 · 3? (törtként: x/y)',
    correctAnswer: '9/10',
    explanation: '3 tized szorozva 3-mal az 9 tized (3 · 3 = 9).'
  },
  {
    id: 'frac_ops_div_2', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 100,
    question: 'Mennyi 6/7 : 2? (törtként: x/y)',
    correctAnswer: '3/7',
    explanation: '6 hetedet elosztjuk kétfelé, marad 3 heted (6 : 2 = 3).'
  },
  {
    id: 'frac_ops_mult_3', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Mennyi 2 · (2/5)?',
    options: ['4/5', '4/10', '2/10', '2/5'],
    correct: 0,
    explanation: '2-szer 2 ötöd az 4 ötöd.'
  },
  {
    id: 'frac_ops_div_3', category: '5. A törtszámok', difficulty: 'easy', type: 'tf', time: 25, points: 50,
    question: 'Igaz vagy hamis: A 4/5 : 2 eredménye 2/5.',
    correct: true,
    explanation: 'Igaz. 4 ötödöt elfelezve 2 ötödöt kapunk.'
  },
  {
    id: 'frac_ops_mult_4', category: '5. A törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 50,
    question: 'Mennyi 1/2 · 4?',
    correctAnswer: '2',
    explanation: '4-nek a fele (1/2 része) pontosan 2.'
  },
  {
    id: 'frac_part_1', category: '5. A törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 50,
    question: 'Mennyi 20-nak a 3/4 része?',
    correctAnswer: '15',
    explanation: 'Először számoljuk ki az 1/4 részt: 20 : 4 = 5. Ennek a háromszorosa a 3/4 rész: 5 · 3 = 15.'
  },
  {
    id: 'frac_part_2', category: '5. A törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 50,
    question: 'Mennyi 60-nak az 1/3 része?',
    correctAnswer: '20',
    explanation: 'A harmadát úgy kapjuk meg, hogy elosztjuk 3-mal. 60 : 3 = 20.'
  },
  {
    id: 'frac_part_3', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 100,
    question: 'Hány perc 3/4 óra?',
    correctAnswer: '45',
    explanation: '1 óra = 60 perc. 1/4 óra = 15 perc (60:4). 3/4 óra = 3 · 15 = 45 perc.'
  },
  {
    id: 'frac_part_4', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 100,
    question: 'Mennyi 24-nek a 2/3 része?',
    options: ['12', '16', '18', '8'],
    correct: 1,
    explanation: '24 egyharmada 8 (24:3). A kétharmada ennek a duplája: 16.'
  },
  {
    id: 'frac_part_5', category: '5. A törtszámok', difficulty: 'hard', type: 'shortnum', time: 35, points: 200,
    question: 'Ha egy osztály 20 fős és 1/5-e hiányzik, hányan hiányoznak?',
    correctAnswer: '4',
    explanation: 'Az osztály létszámát (20) el kell osztani 5-tel, hogy megkapjuk az 1/5-ét. 20 : 5 = 4 fő.'
  },
  {
    id: 'frac_part_6', category: '5. A törtszámok', difficulty: 'easy', type: 'tf', time: 25, points: 50,
    question: 'Igaz vagy hamis: 100-nak a felének a fele 25.',
    correct: true,
    explanation: 'Igaz. 100 fele 50. 50 fele pedig 25.'
  },
  {
    id: 'frac_part_7', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 100,
    question: '1 kg 1/2 része hány gramm?',
    correctAnswer: '500',
    explanation: 'Tudjuk, hogy 1 kg = 1000 g. Ennek a fele 500 g.'
  },
  {
    id: 'frac_line_1', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Milyen hosszú egységet érdemes választani a számegyenesen, ha az 1/2, 1/3 és 1/6 törteket akarjuk ábrázolni?',
    options: ['6 egységet', '10 egységet', '5 egységet', '4 egységet'],
    correct: 0,
    explanation: 'Olyan számot kell választani, ami osztható 2-vel, 3-mal és 6-tal is. A 6 (vagy 12) a legjobb választás.'
  },
  {
    id: 'frac_line_2', category: '5. A törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 50,
    question: 'Hol helyezkedik el a 7/6 a számegyenesen az 1-hez képest?',
    options: ['Balra (kisebb)', 'Jobbra (nagyobb)', 'Ugyanott', 'A 0-nál'],
    correct: 1,
    explanation: 'Mivel 7/6 nagyobb, mint 6/6 (ami az 1), ezért az 1-től jobbra helyezkedik el.'
  },
  {
    id: 'frac_line_3', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Melyik szám van legközelebb a 0-hoz a számegyenesen: 1/2, 2/5, 7/10?',
    options: ['1/2', '2/5', '7/10', 'Egyforma távol vannak'],
    correct: 1,
    explanation: 'Tizedekre váltva: 1/2 = 5/10, 2/5 = 4/10, 7/10 = 7/10. A 4/10 a legkisebb, így az van legközelebb a 0-hoz.'
  },
  {
    id: 'frac_line_4', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Melyik tört jelöli ugyanazt a pontot a számegyenesen, mint a 2/3?',
    options: ['4/6', '3/2', '5/6', '1/3'],
    correct: 0,
    explanation: 'Bővítéssel (szorozva 2-vel) a 2/3-ból 4/6 lesz. Ezek egyenlő értékű törtek.'
  },
  {
    id: 'frac_line_5', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 35, points: 100,
    question: 'Ha a számegyenesen a 0 és az 1 távolsága 10 cm, hány cm távolságra van a 0-tól a 2/5 pont?',
    correctAnswer: '4',
    explanation: '10 cm az egész (1). Ennek 1/5 része 2 cm. A 2/5 része tehát 2 · 2 = 4 cm.'
  },
  {
    id: 'frac_line_6', category: '5. A törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 200,
    question: 'Egy könyv felét elolvastad. A maradék 3/4-e hányad része az egész könyvnek?',
    options: ['3/8', '1/4', '1/2', '3/4'],
    correct: 0,
    explanation: 'A maradék az 1/2. Ennek kell venni a 3/4 részét. (1/2) · (3/4) = 3/8.'
  },
  {
    id: 'frac_line_7', category: '5. A törtszámok', difficulty: 'medium', type: 'tf', time: 20, points: 100,
    question: 'Igaz vagy hamis: A 13/10 a számegyenesen az 1 és a 2 között helyezkedik el.',
    correct: true,
    explanation: 'Igaz. 13/10 = 1 egész 3/10, ami több mint 1, de kevesebb mint 2.'
  },
  {
    id: 'frac_line_8', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'Melyik tört jelöli ugyanazt a pontot, mint az 1 egész 1/2?',
    options: ['3/2', '2/3', '1/2', '4/2'],
    correct: 0,
    explanation: 'Az 1 egész az 2/2. Ehhez jön még 1/2. Összesen 3/2.'
  },
  {
    id: 'frac_line_9', category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 100,
    question: 'Ha egy 12 cm-es szakaszt 3 egyenlő részre osztunk, hány cm a 2/3 része?',
    correctAnswer: '8',
    explanation: 'A 12 cm harmada 4 cm. Két harmada ennek a duplája: 8 cm.'
  },
  {
    id: 'frac_line_10', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 100,
    question: 'A 4/3 és a 3/4 közül melyik van jobbra a számegyenesen?',
    options: ['4/3', '3/4', 'Egy helyen vannak', 'Nem dönthető el'],
    correct: 0,
    explanation: 'A 4/3 nagyobb 1-nél (mert 4>3), a 3/4 viszont kisebb 1-nél. A nagyobb szám van jobbra.'
  },
  {id:'frac_theory_1',category:'5. A törtszámok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mi történik a tört értékével, ha bővítjük?',options:['Nő','Csökken','Nem változik','Nullára változik'],correct:2,explanation:'Bővítéskor csak a szeletek számát és méretét változtatjuk, de az egész mennyiség ugyanannyi marad.'},
  {id:'frac_theory_2',category:'5. A törtszámok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mikor nevezünk egy törtet valódi törtnek?',options:['Ha a számláló kisebb, mint a nevező','Ha a számláló nagyobb','Ha egyenlőek','Ha a nevező 1'],correct:0,explanation:'A valódi tört értéke kisebb, mint 1 egész. Ha a számláló nagyobb, az már "ál-tört".'},

  // --- 1. Természetes számok ---
  {id:'nat_pv_1',category:'1. Természetes számok',difficulty:'easy',type:'shortnum',time:25,points:50,question:'Melyik számjegy áll a tízezresek helyén a 452 719 számban?',correctAnswer:'5',explanation:'A helyiértékek jobbról balra: egyes, tízes, százas, ezres, tízezres. A tízezresek helyén az 5 áll.'},
  {id:'nat_pv_2',category:'1. Természetes számok',difficulty:'medium',type:'mcq',time:30,points:100,question:'Hogyan írjuk le számjegyekkel: hárommillió-ötszázezer?',options:['3 500 000','3 050 000','300 500','35 000 000'],correct:0,explanation:'3 millió és 500 ezer. Tehát: 3 500 000.'},
  {id:'nat_pv_3',category:'1. Természetes számok',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik számban a legnagyobb a 7-es helyiértéke?',options:['7 240','3 750','9 170','2 007'],correct:0,explanation:'A 7 240-ben ezresek helyén van (értéke 7000), a többiben kevesebb. Az alaki érték mindegyikben ugyanaz (7).'},
  {id:'nat_pv_4',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány darab tízezres van 1 millióban?',correctAnswer:'100',explanation:'1 millióban 10 db százezer van, és minden százezerben 10 db tízezer. 10 · 10 = 100.'},
  {id:'nat_pv_5',category:'1. Természetes számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A legnagyobb háromjegyű szám a 999.',correct:true,explanation:'Igaz. A rákövetkező szám az 1000, ami már négyjegyű.'},
  {id:'nat_round_1',category:'1. Természetes számok',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Kerekítsd a 458-at tízesre!',correctAnswer:'460',explanation:'A kerekítendő jegy mögött 8 áll. Mivel ez 5 vagy annál nagyobb, felfelé kerekítünk 460-ra.'},
  {id:'nat_round_2',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Kerekítsd a 12 345-öt ezresre!',correctAnswer:'12000',explanation:'Az ezresek helyén álló számjegy mögött 3-as van. Mivel ez kisebb 5-nél, lefelé kerekítünk (a számjegy marad, a vége nullázódik).'},
  {id:'nat_round_3',category:'1. Természetes számok',difficulty:'medium',type:'mcq',time:30,points:100,question:'Melyik szám kerekített értéke 500 (százasra kerekítve)?',options:['449','551','490','560'],correct:2,explanation:'449 -> 400 (4 miatt); 551 -> 600 (5 miatt); 490 -> 500 (9 miatt); 560 -> 600 (6 miatt).'},
  {id:'nat_round_4',category:'1. Természetes számok',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: A 999 tizesre kerekítve 1000.',correct:true,explanation:'Igaz. A 9-es miatt felfelé kerekítünk. A 99 tízesből 100 tízes lesz, ami 1000.'},
  {id:'nat_round_5',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi 249 tízesre kerekítve?',correctAnswer:'250',explanation:'A végén lévő 9-es miatt felfelé kerekítünk: 250.'},
  {id:'nat_roman_1',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi a római MCXL értéke arab számokkal?',correctAnswer:'1140',explanation:'M=1000, C=100. XL=40 (az X az L előtt van, tehát kivonjuk). Összeg: 1000+100+40=1140.'},
  {id:'nat_roman_2',category:'1. Természetes számok',difficulty:'easy',type:'mcq',time:25,points:50,question:'Melyik római szám jelöli az 50-et?',options:['L','C','D','X'],correct:0,explanation:'Jegyezd meg: L = 50. (C=100, D=500, X=10).'},
  {id:'nat_roman_3',category:'1. Természetes számok',difficulty:'hard',type:'mcq',time:30,points:200,question:'Hogyan írjuk le a 2024-et római számokkal?',options:['MMXXIV','MMXIV','MXXIV','MMXXVI'],correct:0,explanation:'MM = 2000, XX = 20, IV = 4. Egymás mellé írva: MMXXIV.'},
  {id:'nat_roman_4',category:'1. Természetes számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A IX értéke 11.',correct:false,explanation:'Hamis. Mivel az I (1) a X (10) előtt van, ki kell vonni. 10 - 1 = 9.'},
  {id:'nat_roman_5',category:'1. Természetes számok',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd az értékeket:',pairs:{'XV':'15','XIX':'19','XXX':'30'},explanation:'XV = 10+5; XIX = 10+(10-1); XXX = 10+10+10.'},
  {id:'nat_ord_1',category:'1. Természetes számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Melyik a nagyobb?',options:['10 001','9 999','Egyenlőek','Nem dönthető el'],correct:0,explanation:'A 10 001 ötjegyű szám, a 9 999 csak négyjegyű. A több számjegyű mindig nagyobb.'},
  {id:'nat_ord_2',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mi a legkisebb háromjegyű páros szám?',correctAnswer:'100',explanation:'A legkisebb háromjegyű szám a 100, és mivel 0-ra végződik, páros is.'},
  {id:'nat_ord_3',category:'1. Természetes számok',difficulty:'hard',type:'mcq',time:30,points:200,question:'Mennyi a különbség a legnagyobb háromjegyű és a legkisebb kétjegyű szám között?',options:['989','899','999','1009'],correct:0,explanation:'A legnagyobb háromjegyű a 999. A legkisebb kétjegyű a 10. Különbség: 999 - 10 = 989.'},
  {id:'nat_ord_4',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Írd le számjegyekkel: 5 ezres + 3 százas + 2 egyes.',correctAnswer:'5302',explanation:'Az ezresek helyére 5, százasok 3, tízesek 0 (mert nincs), egyesek 2. Eredmény: 5302.'},
  {id:'nat_ord_5',category:'1. Természetes számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: Minden természetes szám pozitív.',correct:false,explanation:'Hamis. A 0 is természetes szám, but nem pozitív (és nem is negatív).'},
  {id:'nat_theory_1',category:'1. Természetes számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mit jelent a számok írásában a helyiérték?',options:['A számjegy alakja','A számjegy helye a számban','A számjegy színe','A szám hossza'],correct:1,explanation:'Ugyanaz a számjegy mást ér, ha hátul áll (egyes), vagy ha elöl (pl. ezres). Ezt nevezzük helyiértéknek.'},
  {id:'nat_theory_2',category:'1. Természetes számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A 0 (nulla) természetes szám.',correct:true,explanation:'Igen, a természetes számok a 0, 1, 2, 3... és így tovább a végtelenig.'},
  {id:'nat_theory_3',category:'1. Természetes számok',difficulty:'medium',type:'mcq',time:20,points:100,question:'Melyik műveletnél cserélhetjük fel a számokat (kommutativitás)?',options:['Kivonásnál','Osztásnál','Összeadásnál','Hatványozásnál'],correct:2,explanation:'5 + 3 ugyanannyi, mint 3 + 5. De a kivonásnál ez nem igaz.'},

  // --- 2. Geometriai alapismeretek ---
  {id:'geo_line_1',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány végpontja van egy egyenesnek?',correctAnswer:'0',explanation:'Az egyenes mindkét irányban a végtelenbe nyúlik, nincs vége.'},
  {id:'geo_line_2',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány végpontja van egy szakasznak?',correctAnswer:'2',explanation:'A szakasz két pont közötti legrövidebb út, mindkét végén van egy végpont.'},
  {id:'geo_line_3',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'shortnum',time:20,points:100,question:'Hány végpontja van egy félegyenesnek?',correctAnswer:'1',explanation:'A félegyenesnek van egy kezdőpontja, de a másik irányba a végtelenbe tart.'},
  {id:'geo_line_4',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Két különböző pont hány egyenest határoz meg?',options:['Egyet','Kettőt','Végtelent','Nullát'],correct:0,explanation:'Ha két pontra vonalzót teszel, csak egyetlen egyenest tudsz húzni rajtuk keresztül.'},
  {id:'geo_line_5',category:'2. Geometriai alapismeretek',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: Három pont mindig meghatároz egy háromszöget.',correct:false,explanation:'Hamis. Ha a három pont egy vonalban van (egy egyenesre esik), akkor nem alkotnak háromszöget.'},
  {id:'geo_rel_1',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány fokos szöget zárnak be a merőleges egyenesek?',correctAnswer:'90',explanation:'A merőleges egyenesek találkozásánál derékszög, azaz 90°-os szög keletkezik.'},
  {id:'geo_rel_2',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mi a jele a párhuzamosságnak?',options:['||','⊥','=','∠'],correct:0,explanation:'A két egymás melletti álló vonal (||) jelöli a párhuzamosságot.'},
  {id:'geo_rel_3',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: A párhuzamos egyeneseknek nincs közös pontjuk a síkban.',correct:true,explanation:'Igaz. A síneket képzeld el: sosem találkoznak, bármilyen messzire mennek.'},
  {id:'geo_rel_4',category:'2. Geometriai alapismeretek',difficulty:'hard',type:'mcq',time:30,points:200,question:'Ha "a" merőleges "b"-re, és "b" merőleges "c"-re (a síkban), akkor milyen "a" és "c" viszonya?',options:['Párhuzamosak','Merőlegesek','Metszők','Kitérők'],correct:0,explanation:'Rajzold le! Ha mindkét egyenes ugyanarra a harmadikra merőleges, akkor egymással párhuzamosak.'},
  {id:'geo_rel_5',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mi a jele a merőlegességnek?',options:['⊥','||','/','-'],correct:0,explanation:'A fordított T betű (⊥) jelöli a merőlegességet.'},
  {id:'geo_circ_1',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mi a kapcsolat a kör sugara (r) és átmérője (d) között?',options:['d = 2 * r','r = 2 * d','d = r + 2','d = r * r'],correct:0,explanation:'Az átmérő a kör egyik felétől a másikig ér a középponton át. Ez pontosan két sugárnyi hossz. d = 2 · r.'},
  {id:'geo_circ_2',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A kör középpontja egyenlő távolságra van a körvonal minden pontjától.',correct:true,explanation:'Igaz, ez a távolság a sugár.'},
  {id:'geo_circ_3',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Ha a sugár 5 cm, hány cm az átmérő?',correctAnswer:'10',explanation:'Az átmérő a sugár kétszerese: 5 · 2 = 10 cm.'},
  {id:'geo_circ_4',category:'2. Geometriai alapismeretek',difficulty:'hard',type:'matching',time:30,points:200,question:'Párosítsd a fogalmakat:',pairs:{'Sugár':'Középpont és körvonal távolsága','Átmérő':'Középponton átmenő húr','Körvonal':'A kör határvonala'},explanation:'A sugár félig ér át, az átmérő teljesen.'},
  {id:'geo_circ_5',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Hogyan nevezzük a kör két pontját összekötő szakaszt?',options:['Húr','Sugár','Érintő','Szelő'],correct:0,explanation:'Ez a húr. (A leghosszabb húr az átmérő).'},
  {id:'geo_poly_1',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány csúcsa van egy ötszögnek?',correctAnswer:'5',explanation:'Az ötszögnek 5 oldala és 5 csúcsa van.'},
  {id:'geo_poly_2',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány átlója van egy háromszögnek?',correctAnswer:'0',explanation:'Átlót csak nem szomszédos csúcsok közé lehet húzni. A háromszögben minden csúcs szomszédos, így nincs átló.'},
  {id:'geo_poly_3',category:'2. Geometriai alapismeretek',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik négyszögnek egyenlőek az oldalai és derékszögűek a szögei?',options:['Négyzet','Téglalap','Rombusz','Deltoid'],correct:0,explanation:'A négyzet a szabályos négyszög: minden oldala egyenlő és minden szöge 90 fok.'},
  {id:'geo_poly_4',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'tf',time:25,points:100,question:'Igaz vagy hamis: Minden négyzet téglalap.',correct:true,explanation:'Igaz. A téglalapnek derékszögei vannak. A négyzetnek is, csak neki még az oldalai is egyenlőek.'},
  {id:'geo_poly_5',category:'2. Geometriai alapismeretek',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Hány átló húzható egy csúcsból egy négyszögben?',correctAnswer:'1',explanation:'A szomszédos csúcsokba oldal vezet, csak a szemközti csúcsba húzhatunk átlót. Négyszögnél ez 1 db.'},
  {id:'geo_theory_1',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A félegyenesnek két végpontja van.',correct:false,explanation:'A félegyenesnek csak egy kezdőpontja van, a másik irányba a végtelenbe nyúlik. A szakasznak van két végpontja.'},
  {id:'geo_theory_2',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mit nevezünk a kör húrjának?',options:['A körvonalat','A kör középpontját','A kör két pontját összekötő szakaszt','A körön kívüli egyenest'],correct:2,explanation:'Bármely két pontot összeköthetsz a körvonalon, ez a húr. A leghosszabb húr az átmérő.'},

  // --- 4. A szögek ---
  {id:'ang_type_1',category:'4. A szögek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány fokos a derékszög?',correctAnswer:'90',explanation:'A derékszög (mint a füzet sarka) pontosan 90 fokos.'},
  {id:'ang_type_2',category:'4. A szögek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány fokos az egyenesszög?',correctAnswer:'180',explanation:'Két derékszög tesz ki egy egyenesszöget: 90 + 90 = 180 fok.'},
  {id:'ang_type_3',category:'4. A szögek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Milyen szög a 120°?',options:['Tompaszög','Hegyesszög','Derékszög','Homorúszög'],correct:0,explanation:'Mivel nagyobb 90 foknál, de kisebb 180-nál, ezért tompaszög.'},
  {id:'ang_type_4',category:'4. A szögek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Milyen szög a 45°?',options:['Hegyesszög','Tompaszög','Derékszög','Teljesszög'],correct:0,explanation:'Kisebb mint a derékszög (90°), ezért hegyesszög.'},
  {id:'ang_type_5',category:'4. A szögek',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik szög nagyobb a 180°-nál?',options:['Homorúszög','Tompaszög','Hegyesszög','Egyenesszög'],correct:0,explanation:'A homorúszög "kifordul", nagyobb mint az egyenes (180°), de kisebb mint a teljes kör (360°).'},
  {id:'ang_meas_1',category:'4. A szögek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány fokos a teljes szög (egy kör)?',correctAnswer:'360',explanation:'Ha teljesen körbefordulsz, az 360 fok.'},
  {id:'ang_meas_2',category:'4. A szögek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Melyik eszköz szolgál szögek mérésére?',options:['Szögmérő','Vonalzó','Körző','Hőmérő'],correct:0,explanation:'Ahogy a nevében is benne van: szögmérő.'},
  {id:'ang_meas_3',category:'4. A szögek',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Hány fokos szöget zárnak be az óra mutatói 3 órakor?',correctAnswer:'90',explanation:'A kör (360°) negyedét teszi meg a kismutató a nagymutatóhoz képest. 360 : 4 = 90.'},
  {id:'ang_meas_4',category:'4. A szögek',difficulty:'medium',type:'matching',time:30,points:100,question:'Párosítsd a fokokat a nevekkel:',pairs:{'90°':'Derékszög','180°':'Egyenesszög','360°':'Teljesszög'},explanation:'Alapvető szögfajták.'},
  {id:'ang_meas_5',category:'4. A szögek',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány fokos szöget zárnak be az óra mutatói 6 órakor?',correctAnswer:'180',explanation:'A két mutató egy egyenes vonalat alkot. Ez az egyenesszög, ami 180 fok.'},
  {id:'ang_tri_1',category:'4. A szögek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Mennyi a háromszög belső szögeinek összege?',correctAnswer:'180',explanation:'Bármilyen háromszöget rajzolsz, a belső szögei mindig 180 fokot tesznek ki.'},
  {id:'ang_tri_2',category:'4. A szögek',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Ha egy háromszög két szöge 60° és 50°, hány fokos a harmadik?',correctAnswer:'70',explanation:'Összesen 180-nak kell lennie. 60 + 50 = 110. A maradék: 180 - 110 = 70.'},
  {id:'ang_tri_3',category:'4. A szögek',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Lehet-e egy háromszögnek két derékszöge?',options:['Nem','Igen','Csak ha nagy','Csak ha kicsi'],correct:0,explanation:'Nem, because 90 + 90 = 180, így a harmadik szögre nem maradna semmi.'},
  {id:'ang_tri_4',category:'4. A szögek',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Egy egyenlő oldalú háromszögnek hány fokosak a szögei?',correctAnswer:'60',explanation:'Mivel az oldalak egyenlőek, a szögek is. 180 : 3 = 60 fok.'},
  {id:'ang_tri_5',category:'4. A szögek',difficulty:'hard',type:'mcq',time:30,points:200,question:'Milyen háromszög az, amelynek van egy tompaszöge?',options:['Tompaszögű','Hegyesszögű','Derékszögű','Szabályos'],correct:0,explanation:'A háromszögeket a legnagyobb szögük alapján nevezzük el.'},
  {id:'ang_theory_1',category:'4. A szögek',difficulty:'easy',type:'mcq',time:20,points:50,question:'Milyen szöget zárnak be a téglalap szomszédos oldalai?',options:['Hegyesszöget','Tompaszöget','Derékszöget','Egyenesszöget'],correct:2,explanation:'A téglalap sarkai "szabályosak", azaz 90 fokosak (derékszögek).'},
  {id:'ang_theory_2',category:'4. A szögek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A tompaszög mindig nagyobb, mint a derékszög.',correct:true,explanation:'A hegyesszög kicsi (<90°), a derékszög a "sarok" (90°), a tompaszög pedig ennél nyitottabb (>90°).'},
  {
    id: 'ang_supp_1', category: '4. A szögek', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Hány fokos a 120°-os szög kiegészítő szöge (egyenesszögre)?',
    options: ['60°', '90°', '180°', '30°'],
    correct: 0,
    explanation: 'A kiegészítő szögek összege 180°. 180 - 120 = 60.'
  },
  {
    id: 'ang_comp_1', category: '4. A szögek', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Hány fokos a 30°-os szög pótszöge (derékszögre)?',
    options: ['60°', '90°', '150°', '45°'],
    correct: 0,
    explanation: 'A pótszögek összege 90°. 90 - 30 = 60.'
  },
  {
    id: 'ang_quad_1', category: '4. A szögek', difficulty: 'hard', type: 'shortnum', time: 30, points: 200,
    question: 'Mennyi a négyszögek belső szögeinek összege?',
    correctAnswer: '360',
    explanation: 'Két háromszögre bontható, 2 · 180 = 360 fok.'
  },
  {
    id: 'ang_clock_1', category: '4. A szögek', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Hány fokos szöget zárnak be az óra mutatói 9 órakor?',
    options: ['90°', '180°', '270°', '60°'],
    correct: 0,
    explanation: 'Ez ugyanaz, mint 3 órakor, csak a másik oldalon. Derékszöget zárnak be.'
  },
  {
    id: 'ang_calc_1', category: '4. A szögek', difficulty: 'medium', type: 'shortnum', time: 25, points: 100,
    question: 'Ha egy egyenesszöget (180°) két egyenlő részre osztunk, hány fokosak lesznek?',
    correctAnswer: '90',
    explanation: '180 : 2 = 90. Két derékszöget kapunk.'
  },
  {
    id: 'ang_tri_ext', category: '4. A szögek', difficulty: 'hard', type: 'tf', time: 25, points: 200,
    question: 'Igaz vagy hamis: A háromszög külső szöge egyenlő a két nem mellette fekvő belső szög összegével.',
    correct: true,
    explanation: 'Igaz. Ez egy fontos szabály a geometriában.'
  },
  {
    id: 'ang_match_1', category: '4. A szögek', difficulty: 'easy', type: 'matching', time: 30, points: 50,
    question: 'Párosítsd a szögeket a fajtájukkal:',
    pairs: {'10°': 'Hegyesszög', '95°': 'Tompaszög', '180°': 'Egyenesszög'},
    explanation: 'Hegyesszög < 90°, Tompaszög > 90°, Egyenesszög = 180°.'
  },
  {
    id: 'ang_concept_2', category: '4. A szögek', difficulty: 'medium', type: 'tf', time: 20, points: 100,
    question: 'Igaz vagy hamis: Egy háromszögben lehet 3 hegyesszög.',
    correct: true,
    explanation: 'Igaz, például a szabályos háromszögben mindhárom szög 60 fokos (hegyes).'
  },

  // --- 6. A téglalap ---
  {id:'meas_rect_1',category:'6. A téglalap',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Mennyi a 4 cm és 5 cm oldalú téglalap kerülete (cm)?',correctAnswer:'18',explanation:'A kerület az oldalak hossza körbe: 4 + 5 + 4 + 5 = 18 cm.'},
  {id:'meas_rect_2',category:'6. A téglalap',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Mennyi a 4 cm és 5 cm oldalú téglalap területe (cm²)?',correctAnswer:'20',explanation:'Terület = oldal szorozva a szomszédos oldallal. 4 · 5 = 20 cm².'},
  {id:'meas_rect_3',category:'6. A téglalap',difficulty:'easy',type:'shortnum',time:25,points:50,question:'Mennyi az 5 méter oldalú négyzet kerülete (m)?',correctAnswer:'20',explanation:'A négyzetnek 4 egyforma oldala van. 4 · 5 = 20 m.'},
  {id:'meas_rect_4',category:'6. A téglalap',difficulty:'easy',type:'shortnum',time:25,points:50,question:'Mennyi az 5 méter oldalú négyzet területe (m²)?',correctAnswer:'25',explanation:'Terület = oldal szorozva oldallal. 5 · 5 = 25 m².'},
  {id:'meas_rect_5',category:'6. A téglalap',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Egy téglalap területe 24 cm², egyik oldala 4 cm. Hány cm a másik oldala?',correctAnswer:'6',explanation:'A terület (24) a két oldal szorzata. 4 · ? = 24. A hiányzó szám a 6 (mert 24:4=6).'},
  {id:'meas_conv_1',category:'6. A téglalap',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány dm² 1 m²?',correctAnswer:'100',explanation:'Mivel 1 m = 10 dm, a területnél váltószám: 10 · 10 = 100.'},
  {id:'meas_conv_2',category:'6. A téglalap',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány cm² 1 dm²?',correctAnswer:'100',explanation:'1 dm = 10 cm, ezért 1 dm² = 10 · 10 = 100 cm².'},
  {id:'meas_conv_3',category:'6. A téglalap',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány m² 300 dm²?',correctAnswer:'3',explanation:'A váltószám 100. Mivel kisebb mértékegységről váltunk nagyobbra, osztani kell: 300 : 100 = 3.'},
  {id:'meas_conv_4',category:'6. A téglalap',difficulty:'medium',type:'mcq',time:30,points:100,question:'Melyik nagyobb?',options:['1 m²','1000 cm²','Egyenlőek','Nem tudható'],correct:0,explanation:'1 m² = 10 000 cm². Ez sokkal nagyobb, mint 1000 cm².'},
  {id:'meas_conv_5',category:'6. A téglalap',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: 1 km² = 1000 m²',correct:false,explanation:'Hamis. 1 km = 1000 m. A területnél: 1000 · 1000 = 1 000 000 m².'},
  {id:'unit_area_1',category:'6. A téglalap',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány mm² 1 cm²?',correctAnswer:'100',explanation:'1 cm = 10 mm. Területnél: 10 · 10 = 100.'},
  {id:'unit_area_h1',category:'6. A téglalap',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány cm² egy 2 dm²-es terület?',correctAnswer:'200',explanation:'dm² --(100)--> cm². 2 · 100 = 200 cm².'},
  {id:'unit_area_h2',category:'6. A téglalap',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Hány m² 500 dm²?',correctAnswer:'5',explanation:'dm² --(:100)--> m². 500 : 100 = 5 m².'},

  // --- 7. A téglatest ---
  {id:'meas_body_1',category:'7. A téglatest',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Hány lapja van a kockának?',correctAnswer:'6',explanation:'Gondolj a dobókockára! 6 oldala (lapja) van, 1-től 6-ig.'},
  {id:'meas_body_2',category:'7. A téglatest',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány éle van a téglatestnek?',correctAnswer:'12',explanation:'4 él lent, 4 él fent, és 4 él oldalt a magasságnál. Összesen 12.'},
  {id:'meas_body_3',category:'7. A téglatest',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány csúcsa van a kockának?',correctAnswer:'8',explanation:'4 sarok (csúcs) van felül, és 4 alul. Összesen 8.'},
  {id:'meas_body_4',category:'7. A téglatest',difficulty:'medium',type:'mcq',time:25,points:100,question:'Milyen alakúak a téglatest lapjai?',options:['Téglalap','Kör','Háromszög','Ötszög'],correct:0,explanation:'Ahogy a neve is mutatja: téglalapok határolják.'},
  {id:'meas_body_5',category:'7. A téglatest',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: Minden kocka téglatest.',correct:true,explanation:'Igaz. A kocka egy speciális téglatest, aminek minden éle egyenlő.'},
  {id:'meas_vol_1',category:'7. A téglatest',difficulty:'medium',type:'shortnum',time:35,points:100,question:'Mennyi a 2 cm élhosszúságú kocka térfogata (cm³)?',correctAnswer:'8',explanation:'Térfogat = él · él · él. V = 2 · 2 · 2 = 8.'},
  {id:'meas_vol_2',category:'7. A téglatest',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Mennyi a 2 cm élhosszúságú kocka felszíne (cm²)?',correctAnswer:'24',explanation:'Egy lap területe 2·2=4. A kockának 6 lapja van. Felszín = 6 · 4 = 24.'},
  {id:'meas_vol_3',category:'7. A téglatest',difficulty:'medium',type:'shortnum',time:35,points:100,question:'Egy téglatest élei 1 cm, 2 cm, 3 cm. Mennyi a térfogata (cm³)?',correctAnswer:'6',explanation:'A három különböző élt kell összeszorozni: 1 · 2 · 3 = 6.'},
  {id:'meas_vol_4',category:'7. A téglatest',difficulty:'medium',type:'mcq',time:30,points:100,question:'Mivel mérjük a térfogatot?',options:['cm³','cm²','cm','kg'],correct:0,explanation:'A kis 3-as a "köb"-öt jelenti (köbcentiméter), ez a térfogat mértékegysége.'},
  {id:'meas_vol_5',category:'7. A téglatest',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Hány db 1 cm³-es kiskockából lehet kirakni egy 3 cm oldalú nagykockát?',correctAnswer:'27',explanation:'Az egyik sorban 3, mögötte még 3 sor (az 9), és ebből 3 réteg egymáson. 3 · 3 · 3 = 27.'},

  // --- 8. A tizedes törtek ---
  {id:'dec_write_1',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Írd le tizedes törtként: 5 egész 3 tized!',correctAnswer:'5,3',explanation:'Az egészeket tizedesvesszővel választjuk el a tizedektől. 5 egész, vessző, 3 tized.'},
  {id:'dec_write_2',category:'8. A tizedes törtek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Melyik számjegy áll a századok helyén a 12,456-ban?',options:['5','4','6','2'],correct:0,explanation:'A tizedesvessző után az első a tized, a második a század. Itt az 5-ös áll ott.'},
  {id:'dec_write_3',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi a 0,7 tört alakban? (pl. x/y)',correctAnswer:'7/10',explanation:'A 0,7 kimondva: nulla egész hét tized. Törtként: 7/10.'},
  {id:'dec_write_4',category:'8. A tizedes törtek',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik egyenlő a 3/100-dal?',options:['0,03','0,3','3,00','0,003'],correct:0,explanation:'3 század. A tizedesvessző után the második helyiérték a század. Tehát 0,03.'},
  {id:'dec_write_5',category:'8. A tizedes törtek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A tizedesvessző választja el az egészet a törtrésztől.',correct:true,explanation:'Igaz. Balra vannak az egészek, jobbra a törtrészek.'},
  {id:'dec_comp_1',category:'8. A tizedes törtek',difficulty:'easy',type:'mcq',time:20,points:50,question:'Melyik nagyobb?',options:['0,5','0,49','Egyenlőek','Nem dönthető el'],correct:0,explanation:'Pótold ki nullával a végüket! 0,50 vagy 0,49? Az 50 nagyobb mint a 49, így a 0,5 a nagyobb.'},
  {id:'dec_comp_2',category:'8. A tizedes törtek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Melyik a legkisebb szám?',options:['0,09','0,1','0,11','0,9'],correct:0,explanation:'Hasonlítsd össze a tizedeket! 0,0... 0,1... 0,1... 0,9... A 0,09-ben van a legkevesebb tized (0 db), így az a legkisebb.'},
  {id:'dec_comp_3',category:'8. A tizedes törtek',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: 2,3 = 2,30',correct:true,explanation:'Igaz. A tizedes tört végére írt nullák nem változtatják meg az értéket.'},
  {id:'dec_comp_4',category:'8. A tizedes törtek',difficulty:'hard',type:'matching',time:30,points:200,question:'Rendezd sorba (kicsitől nagyig):',pairs:{'Kicsi':'0,3','Közepes':'0,33','Nagy':'0,4'},explanation:'Pótold ki őket: 0,30 < 0,33 < 0,40.'},
  {id:'dec_comp_5',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Melyik egész szám van legközelebb a 4,9-hez?',correctAnswer:'5',explanation:'A 4,9 csak egy tizedre van az 5-től.'},
  {id:'dec_op_1',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Mennyi 1,2 + 3,5?',correctAnswer:'4,7',explanation:'Add össze a tizedeket (2+5=7) és az egészeket (1+3=4). Eredmény: 4,7.'},
  {id:'dec_op_2',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Mennyi 5,5 - 1,2?',correctAnswer:'4,3',explanation:'5 tizedből 2 tized az 3 tized. 5 egészből 1 egész az 4 egész. Eredmény: 4,3.'},
  {id:'dec_op_3',category:'8. A tizedes törtek',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Mennyi 2,5 + 1,8?',correctAnswer:'4,3',explanation:'5+8=13 tized. Ez 1 egész és 3 tized. Az 1 egészet hozzáadjuk a többihez: 2+1+1=4. Eredmény: 4,3.'},
  {id:'dec_op_4',category:'8. A tizedes törtek',difficulty:'hard',type:'shortnum',time:35,points:200,question:'Mennyi 4 - 0,5?',correctAnswer:'3,5',explanation:'4 egészből elveszünk felet (0,5). Marad 3 és fél, azaz 3,5.'},
  {id:'dec_op_5',category:'8. A tizedes törtek',difficulty:'medium',type:'mcq',time:30,points:100,question:'Mennyi 0,2 * 3?',options:['0,6','0,5','6','0,06'],correct:0,explanation:'2 tizedet veszünk háromszor. 2 · 3 = 6, tehát 6 tized (0,6).'},
  {id:'dec_mul10_1',category:'8. A tizedes törtek',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Mennyi 3,45 * 10?',correctAnswer:'34,5',explanation:'Ha 10-zel szorzunk, a tizedesvesszőt egy hellyel JOBBRA toljuk. 3,45 -> 34,5.'},
  {id:'dec_mul10_2',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi 0,7 * 100?',correctAnswer:'70',explanation:'Ha 100-zal szorzunk, a tizedesvesszőt két hellyel JOBBRA toljuk. 0,7 -> 7 -> 70.'},
  {id:'dec_mul10_3',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi 12,5 / 10?',correctAnswer:'1,25',explanation:'Ha 10-zel osztunk, a szám kisebb lesz, a vesszőt BALRA toljuk egy hellyel. 12,5 -> 1,25.'},
  {id:'dec_mul10_4',category:'8. A tizedes törtek',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Mennyi 2 / 100?',correctAnswer:'0,02',explanation:'Két hellyel balra toljuk a vesszőt: 2 -> 0,2 -> 0,02.'},
  {id:'dec_mul10_5',category:'8. A tizedes törtek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: Ha 10-zel szorzunk, a szám értéke nő.',correct:true,explanation:'Igaz. A 10-szerese mindig nagyobb (kivéve, ha 0-t szorzunk).'},
  {id:'dec_theory_1',category:'8. A tizedes törtek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A 2,5 és a 2,500 értéke ugyanaz.',correct:true,explanation:'A tizedesvessző utáni számjegyek végére írt nullák nem változtatják meg a szám értékét.'},
  {id:'dec_theory_2',category:'8. A tizedes törtek',difficulty:'medium',type:'mcq',time:20,points:100,question:'Melyik irányba mozdul a tizedesvessző, ha 10-zel osztunk?',options:['Jobbra','Balra','Nem mozdul','Eltűnik'],correct:1,explanation:'Ha osztunk, a szám kisebb lesz, ezért a tizedesvesszőt balra toljuk.'},

  // --- 3. Mérés, statisztika ---
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
  {id:'unit_temp_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Hány fok a különbség a -5 °C és a 15 °C között?',correctAnswer:'20',explanation:'-5-től 15-ig 20 fok különbség.'},
  {id:'unit_comp_1',category:'3. Mérés, statisztika',difficulty:'hard',type:'shortnum',time:40,points:200,question:'Mennyi 2 m és 45 cm milliméterben?',correctAnswer:'2450',explanation:'2000 + 450 = 2450 mm.'},
  {id:'unit_theory_pref',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Párosítsd a prefixumokat a jelentésükkel:',pairs:{'kilo-':'ezerszeres','milli-':'ezredrész','centi-':'századrész'},explanation:'Görög/latin előtagok.'},
  {id:'unit_theory_area',category:'3. Mérés, statisztika',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: A terület váltószámai (m², dm², cm²) 100-asával ugranak.',correct:true,explanation:'Igaz, a területnél 10·10=100 a váltó.'},
  {id:'unit_mix_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'mcq',time:30,points:100,question:'Melyik a rövidebb?',options:['150 mm','2 dm','Egyenlőek','Nem dönthető el'],correct:0,explanation:'150 mm = 1,5 dm < 2 dm.'},
  {id:'unit_mix_4',category:'3. Mérés, statisztika',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: 1 liter víz tömege kb. 1 kg.',correct:true,explanation:'Igaz, a víz sűrűsége miatt.'},
  {id:'unit_match_2',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Párosítsd a mennyiségeket:',pairs:{'1000 g':'1 kg','1000 kg':'1 t','100 dkg':'1 kg'},explanation:'Tömegegységek.'},
  {id:'unit_match_3',category:'3. Mérés, statisztika',difficulty:'medium',type:'matching',time:35,points:100,question:'Hosszúság váltások:',pairs:{'100 cm':'1 m','1000 m':'1 km','10 mm':'1 cm'},explanation:'Hosszúságok.'},

  // --- BŐVÍTÉS: HALMAZBA SOROLÁS (Még 8 db) ---
  {
    id: 'set_3', category: '1. Természetes számok', difficulty: 'medium', type: 'set_placement', time: 50, points: 200,
    question: 'Helyezd el a számokat az oszthatósági halmazábrán!',
    setA: { label: '3-mal osztható', rule: 'Számjegyek összege osztható 3-mal' },
    setB: { label: '4-gyel osztható', rule: 'Az utolsó két számjegye osztható 4-gyel' },
    itemsToPlace: [
      { val: '12', correctZone: 'Both' },
      { val: '15', correctZone: 'A' },
      { val: '16', correctZone: 'B' },
      { val: '17', correctZone: 'None' }
    ],
    explanation: '12 osztható 3-mal és 4-gyel is. 15 csak 3-mal. 16 csak 4-gyel. 17 egyikkel sem.'
  },
  {
    id: 'set_4', category: '1. Természetes számok', difficulty: 'easy', type: 'set_placement', time: 40, points: 150,
    question: 'Csoportosítsd a számokat!',
    setA: { label: 'Páratlan', rule: 'Nem osztható 2-vel' },
    setB: { label: 'Kisebb, mint 10', rule: 'x < 10' },
    itemsToPlace: [
      { val: '3', correctZone: 'Both' },
      { val: '8', correctZone: 'B' },
      { val: '11', correctZone: 'A' },
      { val: '14', correctZone: 'None' }
    ],
    explanation: '3 páratlan és <10. 8 páros de <10. 11 páratlan de >10. 14 páros és >10.'
  },
  {
    id: 'set_5', category: '1. Természetes számok', difficulty: 'medium', type: 'set_placement', time: 50, points: 200,
    question: 'Helyezd el a prímszámokat és a tizeseket!',
    setA: { label: 'Prímszám', rule: 'Csak 1-gyel és önmagával osztható' },
    setB: { label: 'Kisebb, mint 20', rule: 'Szám < 20' },
    itemsToPlace: [
      { val: '7', correctZone: 'Both' },
      { val: '23', correctZone: 'A' },
      { val: '14', correctZone: 'B' },
      { val: '25', correctZone: 'None' }
    ],
    explanation: '7 prím és <20. 23 prím de >20. 14 nem prím de <20. 25 nem prím és >20.'
  },
  {
    id: 'set_6', category: '1. Természetes számok', difficulty: 'hard', type: 'set_placement', time: 60, points: 250,
    question: 'Oszthatóság 9-cel és párosság:',
    setA: { label: '9-cel osztható', rule: 'Számjegyek összege osztható 9-cel' },
    setB: { label: 'Páros', rule: '0, 2, 4, 6, 8-ra végződik' },
    itemsToPlace: [
      { val: '18', correctZone: 'Both' },
      { val: '27', correctZone: 'A' },
      { val: '22', correctZone: 'B' },
      { val: '31', correctZone: 'None' }
    ],
    explanation: '18 mindkét feltételnek megfelel. 27 csak 9-cel osztható. 22 csak páros. 31 egyik sem.'
  },
  {
    id: 'set_7', category: '5. A törtszámok', difficulty: 'medium', type: 'set_placement', time: 50, points: 200,
    question: 'Törtek csoportosítása:',
    setA: { label: 'Valódi tört', rule: 'Számláló < Nevező' },
    setB: { label: 'Nevezője 4', rule: 'Alul 4-es áll' },
    itemsToPlace: [
      { val: '1/4', correctZone: 'Both' },
      { val: '2/3', correctZone: 'A' },
      { val: '5/4', correctZone: 'B' },
      { val: '7/2', correctZone: 'None' }
    ],
    explanation: '1/4 valódi és a nevezője 4. 2/3 valódi de nem 4 a nevező. 5/4 ál-tört de 4 a nevező.'
  },
  {
    id: 'set_8', category: '2. Geometriai alapismeretek', difficulty: 'medium', type: 'set_placement', time: 50, points: 200,
    question: 'Síkidomok és tulajdonságaik:',
    setA: { label: 'Sokszög', rule: 'Töröttvonal határolja' },
    setB: { label: '4 oldala van', rule: 'Négyszög' },
    itemsToPlace: [
      { val: 'Négyzet', correctZone: 'Both' },
      { val: 'Háromszög', correctZone: 'A' },
      { val: 'Kör', correctZone: 'None' }
    ],
    explanation: 'A négyzet sokszög és 4 oldala van. A háromszög sokszög de nincs 4 oldala. A kör nem sokszög.'
  },
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
    id: 'set_10', category: '9. Az egész számok', difficulty: 'medium', type: 'set_placement', time: 50, points: 200,
    question: 'Számok típusa:',
    setA: { label: 'Negatív', rule: 'Kisebb, mint nulla' },
    setB: { label: 'Páros', rule: 'Osztható 2-vel' },
    itemsToPlace: [
      { val: '-2', correctZone: 'Both' },
      { val: '-5', correctZone: 'A' },
      { val: '4', correctZone: 'B' },
      { val: '7', correctZone: 'None' }
    ],
    explanation: '-2 negatív és páros. -5 csak negatív. 4 csak páros. 7 egyik sem.'
  },

  // --- BŐVÍTÉS: BECSLÉS CSÚSZKÁVAL (Még 6 db) ---
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

  // --- BŐVÍTÉS: KOORDINÁTA KIJELÖLÉS (Még 7 db) ---
  {
    id: 'coord_square', category: '10. Helymeghatározás', difficulty: 'medium', type: 'coordinate_picker', time: 40, points: 200,
    question: 'Egy négyzet három csúcsa: (0;0), (4;0) és (4;4). Hol van a negyedik? Kattints rá!',
    target: { x: 0, y: 4, label: 'D' },
    gridConfig: { points: [{label: 'A', x: 0, y: 0}, {label: 'B', x: 4, y: 0}, {label: 'C', x: 4, y: 4}] },
    explanation: 'A négyzet oldalai párhuzamosak a tengelyekkel. A pont (0;4) lesz.'
  },
  {
    id: 'coord_midpoint_q', category: '10. Helymeghatározás', difficulty: 'hard', type: 'coordinate_picker', time: 45, points: 250,
    question: 'Keresd meg az A(2;2) és B(6;2) szakasz felezőpontját!',
    target: { x: 4, y: 2, label: 'F' },
    gridConfig: { points: [{label: 'A', x: 2, y: 2}, {label: 'B', x: 6, y: 2}] },
    explanation: 'A 2 és 6 között félúton a 4 van. Az y koordináta marad 2.'
  },
  {
    id: 'coord_refl_y_q', category: '10. Helymeghatározás', difficulty: 'hard', type: 'coordinate_picker', time: 40, points: 200,
    question: 'Tükrözd a P(-3; 2) pontot az y tengelyre! Kattints a helyére!',
    target: { x: 3, y: 2, label: "P'" },
    gridConfig: { points: [{label: 'P', x: -3, y: 2}] },
    explanation: 'Y tengelyre tükrözésnél az y marad, az x ellentett lesz: (-3) -> (3).'
  },
  {
    id: 'coord_step_1_q', category: '10. Helymeghatározás', difficulty: 'medium', type: 'coordinate_picker', time: 35, points: 150,
    question: 'Indulj az (1;1) pontból! Lépj 2-t fel és 1-et balra! Hol vagy?',
    target: { x: 0, y: 3, label: 'V' },
    gridConfig: { points: [{label: 'Start', x: 1, y: 1}] },
    explanation: '1-1 = 0 (balra x csökken), 1+2 = 3 (fel y nő). Pont: (0;3).'
  },
  {
    id: 'coord_quad_3_q', category: '10. Helymeghatározás', difficulty: 'easy', type: 'coordinate_picker', time: 30, points: 100,
    question: 'Kattints egy tetszőleges pontra a III. negyedben! (Pl. -2; -2)',
    target: { x: -2, y: -2, label: 'OK' },
    explanation: 'A III. negyedben mindkét koordináta negatív.'
  },
  {
    id: 'coord_triangle_q', category: '10. Helymeghatározás', difficulty: 'hard', type: 'coordinate_picker', time: 45, points: 250,
    question: 'Egy derékszögű háromszög két csúcsa: (0;0) és (5;0). Hol lehet a harmadik csúcs az y tengelyen, ha az oldala 5 egység?',
    target: { x: 0, y: 5, label: 'C' },
    gridConfig: { points: [{label: 'A', x: 0, y: 0}, {label: 'B', x: 5, y: 0}] },
    explanation: 'Az y tengelyen lévő pont x koordinátája 0. A magassága legyen 5, tehát (0;5).'
  },
  {
    id: 'coord_orig_dist_q', category: '10. Helymeghatározás', difficulty: 'medium', type: 'coordinate_picker', time: 35, points: 150,
    question: 'Jelöld meg azt a pontot az x tengelyen, amely 4 egységre van az origótól jobbra!',
    target: { x: 4, y: 0, label: 'K' },
    explanation: 'Az origótól jobbra 4 lépés az x=4. Mivel a tengelyen van, y=0.'
  },

  // --- BŐVÍTÉS: SORRENDBE RENDEZÉS (Még 8 db) ---
  {
    id: 'ord_nat_q', category: '1. Természetes számok', difficulty: 'easy', type: 'ordering', time: 30, points: 100,
    question: 'Rendezd növekvő sorrendbe a számokat!',
    items: ['102', '98', '120', '89', '111'],
    correctOrder: ['89', '98', '102', '111', '120'],
    explanation: 'Alapvető nagyság szerinti sorrend.'
  },
  {
    id: 'ord_dec_q', category: '8. A tizedes törtek', difficulty: 'medium', type: 'ordering', time: 40, points: 150,
    question: 'Rendezd csökkenő sorrendbe!',
    items: ['0,1', '0,01', '1,1', '0,11', '1,01'],
    correctOrder: ['1,1', '1,01', '0,11', '0,1', '0,01'],
    explanation: 'Pótold ki nullákkal fejben: 1,10 > 1,01 > 0,11 > 0,10 > 0,01.'
  },
  {
    id: 'ord_neg_q', category: '9. Az egész számok', difficulty: 'medium', type: 'ordering', time: 40, points: 150,
    question: 'Rendezd növekvő sorrendbe (a leghidegebbtől a legmelegebbig)!',
    items: ['-5', '-2', '0', '3', '-10'],
    correctOrder: ['-10', '-5', '-2', '0', '3'],
    explanation: 'Minél nagyobb a negatív szám abszolút értéke, annál kisebb a szám.'
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
    id: 'ord_frac_2_q', category: '5. A törtszámok', difficulty: 'medium', type: 'ordering', time: 40, points: 150,
    question: 'Rendezd növekvő sorrendbe a törteket!',
    items: ['1/2', '1/5', '1/10', '1/3', '1/4'],
    correctOrder: ['1/10', '1/5', '1/4', '1/3', '1/2'],
    explanation: 'Ha a számláló azonos, a nagyobb nevezőjű tört a kisebb.'
  },
  {
    id: 'ord_frac_3_q', category: '5. A törtszámok', difficulty: 'hard', type: 'ordering', time: 50, points: 200,
    question: 'Rendezd növekvő sorrendbe!',
    items: ['1 1/2', '5/4', '1/2', '2', '7/4'],
    correctOrder: ['1/2', '5/4', '1 1/2', '7/4', '2'],
    explanation: 'Negyedekben: 2/4, 5/4, 6/4, 7/4, 8/4.'
  },

  // --- BŐVÍTÉS: MŰVELETI TERV (Még 8 db) ---
  {
    id: 'plan_area_q', category: '6. A téglalap', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Egy 8 m hosszú és 5 m széles szoba alapterületét számoljuk. Melyik a jó terv?',
    options: ['8 · 5', '8 + 5', '(8 + 5) · 2', '8 · 8'],
    correct: 0,
    explanation: 'Terület = hosszúság szorozva szélességgel.'
  },
  {
    id: 'plan_perim_q', category: '6. A téglalap', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Melyik tervvel számoljuk ki egy 6 cm és 4 cm oldalú téglalap kerületét?',
    options: ['(6 + 4) · 2', '6 · 4', '6 + 4', '6 · 4 · 2'],
    correct: 0,
    explanation: 'Kerület = (a + b) · 2.'
  },
  {
    id: 'plan_multi_q', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 50, points: 200,
    question: 'Vettem 3 füzetet (egyenként 200 Ft) és egy tollat (500 Ft). Mennyit fizettem? Terv:',
    options: ['3 · 200 + 500', '(3 + 500) · 200', '3 · (200 + 500)', '200 + 500'],
    correct: 0,
    explanation: 'A füzetek ára (3*200) plusz a toll ára (500).'
  },
  {
    id: 'plan_diff_q', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: 'A 100 és 40 különbségét szorozd meg 2-vel! Melyik a jó kifejezés?',
    options: ['(100 - 40) · 2', '100 - 40 · 2', '100 · 2 - 40', '(100 + 40) · 2'],
    correct: 0,
    explanation: 'A különbséget (zárójel) kell megszorozni.'
  },
  {
    id: 'plan_avg_q', category: '3. Mérés, statisztika', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Három szám átlagát keressük (10, 20, 30). Terv:',
    options: ['(10 + 20 + 30) : 3', '10 + 20 + 30', '10 · 20 · 30 : 3', '(10 + 30) : 2'],
    correct: 0,
    explanation: 'Összeadjuk a számokat, majd elosztjuk annyival, ahányan vannak.'
  },
  {
    id: 'plan_remain_q', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: '50 almát 6 fős csoportokba osztunk. Hány marad ki? Terv:',
    options: ['50 - (50 : 6) · 6', '50 : 6', '50 - 6', '50 · 6'],
    correct: 0,
    explanation: 'Az egészből kivonjuk a teli csoportok (8*6=48) számát.'
  },
  {
    id: 'plan_body_vol_q', category: '7. A téglatest', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Téglatest térfogata (a=2, b=3, c=4). Melyik a terv?',
    options: ['2 · 3 · 4', '2 + 3 + 4', '(2+3+4) · 4', '2 · 3 + 4'],
    correct: 0,
    explanation: 'V = a · b · c.'
  },
  {
    id: 'plan_unit_conv_q', category: '3. Mérés, statisztika', difficulty: 'hard', type: 'plan_selector', time: 50, points: 200,
    question: 'Hány cm összesen 2 méter és 5 deciméter? Terv:',
    options: ['2 · 100 + 5 · 10', '2 · 10 + 5 · 100', '2 + 5', '200 + 5'],
    correct: 0,
    explanation: '2 méter = 200 cm, 5 dm = 50 cm. Tehát 2*100 + 5*10.'
  },

  // --- BŐVÍTÉS: SZÖVEGES VÁLASZ (Még 9 db) ---
  {
    id: 'short_1_q', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Egyszerűsítsd a 12/16 törtet! (x/y alakban)',
    correctAnswer: '3/4',
    explanation: 'Oszd el mindkettőt 4-gyel!'
  },
  {
    id: 'short_2_q', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Bővítsd a 2/5 törtet úgy, hogy a nevező 10 legyen! (x/y alakban)',
    correctAnswer: '4/10',
    explanation: 'Szorozd meg a számlálót és a nevezőt is 2-vel!'
  },
  {
    id: 'short_3_q', category: '5. A törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 100,
    question: 'Mennyi 1/2 + 1/4? (x/y alakban)',
    correctAnswer: '3/4',
    explanation: '2/4 + 1/4 = 3/4.'
  },
  {
    id: 'short_4_q', category: '8. A tizedes törtek', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Írd le az 1/4 törtet tizedes tört alakban! (Használj vesszőt)',
    correctAnswer: '0,25',
    explanation: '1 : 4 = 0,25.'
  },
  {
    id: 'short_5_q', category: '8. A tizedes törtek', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Írd le a 3/5 törtet tizedes tört alakban!',
    correctAnswer: '0,6',
    explanation: '3 : 5 = 6 : 10 = 0,6.'
  },
  {
    id: 'short_6_q', category: '8. A tizedes törtek', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Írd le a 0,8-at a legegyszerűbb tört alakban! (x/y)',
    correctAnswer: '4/5',
    explanation: '8/10 egyszerűsítve 4/5.'
  },
  {
    id: 'short_7_q', category: '8. A tizedes törtek', difficulty: 'hard', type: 'short', time: 40, points: 200,
    question: 'Írd le az 1/8 törtet tizedes tört alakban!',
    correctAnswer: '0,125',
    explanation: '1 : 8 = 0,125.'
  },
  {
    id: 'short_8_q', category: '5. A törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 100,
    question: 'Mennyi 2/3 + 1/3? (Írd le egyetlen egész számmal vagy törtként)',
    correctAnswer: '1',
    explanation: '3/3 = 1 egész.'
  },
  {
    id: 'short_9_q', category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 100,
    question: 'Egyszerűsítsd a 15/20 törtet! (x/y alakban)',
    correctAnswer: '3/4',
    explanation: 'Oszd el mindkettőt 5-tel!'
  }
];

// Helper to shuffle questions
export function getShuffledQuestions(count: number = 10, category: string = 'all'): Question[] {
  let pool = questionBank;
  if (category && category !== 'all') {
    pool = questionBank.filter(q => q.category === category);
  }
  
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}
