
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

// Full dataset
export const questionBank: Question[] = [
  // --- EREDETI FELADATOK (Egész számok) ---
  {id:'int_add_sub_1',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: (−5) + (−9) ?',options:['−14','4','−4','14'],correct:0,explanation:'Ha két negatív számot adunk össze, az eredmény is negatív lesz. Összeadjuk a számok abszolút értékét: 5 + 9 = 14, tehát az eredmény −14.'},
  {id:'int_add_sub_2',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: 8 + (−3) ?',options:['5','11','−5','−11'],correct:0,explanation:'Negatív szám hozzáadása olyan, mintha kivonnánk a számot. Tehát 8-ból elveszünk 3-at, ami 5.'},
  {id:'int_add_sub_3',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: (−12) + 7 ?',correctAnswer:'-5',explanation:'A −12-ről indulunk a számegyenesen, és 7-et lépünk jobbra (pozitív irányba). Még mindig a negatív oldalon vagyunk: −5.'},
  {id:'int_add_sub_4',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 15 − (−4) ?',correctAnswer:'19',explanation:'Negatív szám kivonása hozzáadást jelent (a szám ellentettjét adjuk hozzá). Tehát: 15 + 4 = 19.'},
  {id:'int_add_sub_5',category:'Egész számok',difficulty:'hard',type:'mcq',time:30,points:18,question:'Mennyi: (−27) + 15 + 12 ?',options:['0','−24','−6','6'],correct:0,explanation:'Érdemes először a pozitív számokat összeadni: 15 + 12 = 27. Így a feladat: −27 + 27, ami 0, hiszen a szám és az ellentettjének összege nulla.'},
  {id:'int_add_sub_6',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: (−4) + 10 ?',options:['6','−14','−6','14'],correct:0,explanation:'A −4-től 10 lépést megyünk jobbra a számegyenesen. Átlépjük a nullát, és a 6-hoz érkezünk.'},
  {id:'int_add_sub_7',category:'Egész számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Mennyi: 3 − (−8) ?',options:['11','−11','5','−5'],correct:0,explanation:'A "mínusz mínusz" pluszt jelent. 3 + 8 = 11.'},
  {id:'int_add_sub_8',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: (−20) + (−3) ?',correctAnswer:'-23',explanation:'Mindkét szám negatív, tehát "nő az adósságunk". 20 + 3 = 23, és mivel negatív tartományban vagyunk: −23.'},
  {id:'int_add_sub_9',category:'Egész számok',difficulty:'hard',type:'shortnum',time:30,points:16,question:'Mennyi: (−18) − (−5) ?',correctAnswer:'-13',explanation:'A kivonásból hozzáadás lesz: −18 + 5. Ha a −18-hoz adunk 5-öt, közelebb kerülünk a nullához: −13.'},
  {id:'int_add_sub_10',category:'Egész számok',difficulty:'hard',type:'mcq',time:30,points:18,question:'Mennyi: 7 + (−15) + 6 ?',options:['-2','2','-14','14'],correct:0,explanation:'Adjuk össze a pozitívokat: 7 + 6 = 13. A feladat így: 13 − 15. Mivel többet vonunk ki, mint amink van, az eredmény −2.'},
  {id:'int_add_sub_11',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −7 + 3 ?',options:['−4','4','10','−10'],correct:0,explanation:'A −7-től 3 lépést lépünk a pozitív irányba (jobbra), így a −4-hez érkezünk.'},
  {id:'int_add_sub_12',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −2 − 5 ?',options:['−7','7','3','−3'],correct:0,explanation:'A −2-ből indulunk és még 5-öt lépünk balra (kivonás). Így a −7-hez jutunk.'},
  {id:'int_add_sub_13',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: −14 + 9 ?',correctAnswer:'-5',explanation:'Mivel a negatív szám abszolút értéke (14) nagyobb, mint a pozitívé (9), az eredmény negatív marad. A különbség 5, tehát −5.'},
  {id:'int_add_sub_14',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 12 − (−6) ?',correctAnswer:'18',explanation:'Negatív számot kivonni annyi, mint a pozitív párját hozzáadni: 12 + 6 = 18.'},
  {id:'int_add_sub_15',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −5 + (−5) = −10 ?',correct:true,explanation:'Igaz. Ha 5 fok hideg van, és még 5 fokot hűl a levegő, akkor −10 fok lesz.'},
  {id:'int_add_sub_16',category:'Egész számok',difficulty:'medium',type:'tf',time:20,points:12,question:'Igaz vagy hamis: −3 − (−3) = 0 ?',correct:true,explanation:'Igaz, mert ez így írható át: −3 + 3, ami nulla.'},
  {id:'int_add_sub_17',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−2 + 7':'5','−10 + 3':'−7','6 − (−4)':'10'} ,explanation:'−2-höz 7-et adva átlépjük a nullát (5); −10-hez 3-at adva még negatív marad (−7); a kivonásból összeadás lesz (10).'},
  {id:'int_add_sub_18',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: 5 + (−8) ?',options:['−3','3','−13','13'],correct:0,explanation:'Ez ugyanaz, mint az 5 − 8. Mivel a kivonandó nagyobb, az eredmény negatív: −3.'},
  {id:'int_add_sub_19',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: −30 + 12 ?',correctAnswer:'-18',explanation:'A negatív számból "visszafelé" (jobbra) lépünk 12-t. Még mindig a nullától balra vagyunk 18 egységgel.'},
  {id:'int_add_sub_20',category:'Egész számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Mennyi: −9 − 4 ?',options:['−13','13','−5','5'],correct:0,explanation:'Már a −9-nél vagyunk, és még 4-et lépünk balra (csökken). −9 és −4 együtt −13.'},
  {id:'int_add_sub_21',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −6 + 2 ?',options:['−4','4','8','−8'],correct:0,explanation:'−6 + 2 = −4. Két lépés jobbra a számegyenesen.'},
  {id:'int_add_sub_24',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−3 + 4':'1','−12 + 2':'−10','7 − (−2)':'9'},explanation:'−3 + 4 = 1; −12 + 2 = −10; 7 + 2 = 9.'},
  {id:'int_add_sub_28',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−4 + 9':'5','−7 − 2':'−9','10 − (−5)':'15'},explanation:'−4 + 9 = 5; −7 − 2 = −9; 10 + 5 = 15.'},
  {id:'int_add_sub_34',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−8 + 3':'−5','−14 + 4':'−10','9 − (−3)':'12'},explanation:'Gyakorold a számegyenesen való lépkedést!'},
  {id:'int_add_sub_38',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd:',pairs:{'−9 + 6':'−3','−3 − 7':'−10','4 − (−1)':'5'},explanation:'−9 + 6 = −3; −3 − 7 = −10; 4 + 1 = 5.'},
  {id:'int_add_sub_41',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −3 + (−6) ?',options:['−9','9','3','−3'],correct:0,explanation:'Két negatív szám összege: −3 − 6 = −9.'},
  {id:'int_add_sub_72',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −18 − (−3) = −15 ?',correct:true,explanation:'Igaz. −18 + 3 = −15.'},
  {id:'int_add_sub_86',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −3 − 9 = −12 ?',correct:true,explanation:'Igaz. Ha 3 méter mélyen vagy, és még 9 métert ásol lefelé, 12 méter mélyen leszel (−12).'},
  {id:'abs_opp_1',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a -15 ellentettje?',correctAnswer:'15',explanation:'Az ellentett azt jelenti, hogy a nulla másik oldalán lévő, ugyanolyan távoli számot keressük. -15 ellentettje 15.'},
  {id:'abs_opp_2',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a -8 abszolút értéke?',correctAnswer:'8',explanation:'Az abszolút érték a nullától való távolságot jelenti. A -8 nyolc lépésre van a nullától, tehát 8.'},
  {id:'abs_opp_3',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mi a 42 ellentettje?',options:['-42','42','0','84'],correct:0,explanation:'Pozitív szám ellentettje a negatív párja: -42.'},
  {id:'abs_opp_4',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi |-25| értéke?',options:['25','-25','0','50'],correct:0,explanation:'Az abszolút érték jel (a két függőleges vonal) "eltünteti" a mínusz jelet. |-25| = 25.'},
  {id:'abs_opp_5',category:'Egész számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A -5 ellentettje 5.',correct:true,explanation:'Helyes, a -5 ellentettje valóban +5.'},
  {id:'abs_opp_6',category:'Egész számok',difficulty:'medium',type:'tf',time:25,points:12,question:'Igaz vagy hamis: A -7 abszolút értéke -7.',correct:false,explanation:'Hamis! Az abszolút érték (távolság) sosem lehet negatív. |-7| = 7.'},
  {id:'abs_opp_7',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Párosítsd a számokat az ellentettjükkel:',pairs:{'-2':'2','5':'-5','0':'0'},explanation:'Az ellentettnél megváltozik az előjel (pluszból mínusz, mínuszból plusz). A 0 ellentettje önmaga.'},
  {id:'abs_opp_8',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Számítsd ki az értékeket:',pairs:{'|-10|':'10','-(-3)':'3','-|4|':'-4'},explanation:'|-10| a távolság (10). -(-3) az ellentett ellentettje (3). -|4| a 4 abszolút értékének az ellentettje (-4).'},
  {id:'abs_opp_9',category:'Egész számok',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Mennyi: |-12| + |-3| ?',correctAnswer:'15',explanation:'Először számold ki az abszolút értékeket: 12 és 3. Ezek összege: 12 + 3 = 15.'},
  {id:'abs_opp_10',category:'Egész számok',difficulty:'medium',type:'mcq',time:25,points:12,question:'Melyik állítás igaz?',options:['|-5| = 5','|-5| = -5','-5 ellentettje -5','|5| = -5'],correct:0,explanation:'Csak az első állítás helyes: |-5| valóban 5.'},
  {id:'abs_opp_11',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi: |-13| ?',correctAnswer:'13',explanation:'A -13 távolsága a nullától 13 egység.'},
  {id:'abs_opp_12',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a 0 ellentettje?',correctAnswer:'0',explanation:'A nulla se nem pozitív, se nem negatív, ellentettje önmaga.'},
  {id:'abs_opp_13',category:'Egész számok',difficulty:'easy',type:'mcq',time:25,points:12,question:'Melyik szám ellentettje a -8?',options:['8','-8','0','1/8'],correct:0,explanation:'Melyik szám van a 0 másik oldalán, ugyanilyen messze? A 8.'},
  {id:'abs_opp_14',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Számítsd ki: |-5| + |-6|',correctAnswer:'11',explanation:'|-5|=5 és |-6|=6. Összeadva: 5 + 6 = 11.'},
  {id:'abs_opp_15',category:'Egész számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A nulla abszolút értéke nulla.',correct:true,explanation:'Igaz, a nulla távolsága a nullától 0.'},
  {id:'abs_opp_16',category:'Egész számok',difficulty:'medium',type:'mcq',time:25,points:12,question:'Mennyi: -(-10)?',options:['10','-10','0','-1'],correct:0,explanation:'A mínusz jel a zárójel előtt az ellentettet jelenti. -10 ellentettje 10.'},
  {id:'abs_opp_17',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Számítsd ki:',pairs:{'|-4|':'4','-|2|':'-2','-(-9)':'9'},explanation:'|-4|=4 (távolság). -|2|=-2 (a 2 abszolút értékének ellentettje). -(-9)=9 (ellentett ellentettje).'},
  {id:'abs_opp_18',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 20 − |-5| ?',correctAnswer:'15',explanation:'Először az abszolút értéket végezzük el: |-5|=5. Ezután: 20 − 5 = 15.'},
  {id:'abs_opp_19',category:'Egész számok',difficulty:'medium',type:'tf',time:20,points:10,question:'Igaz vagy hamis: Bármely negatív egész szám abszolút értéke nagyobb a számnál.',correct:true,explanation:'Igaz. Pl. |-3| = 3, és a 3 (pozitív) mindig nagyobb, mint a -3 (negatív).'},
  {id:'abs_opp_20',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi az abszolút értéke a -100-nak?',options:['100','-100','0','1'],correct:0,explanation:'A -100 pontosan 100 lépésre van a nullától.'},
  {id:'concept_tf_1',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha pozitív számból pozitív számot vonunk ki, negatív számot kapunk.',correct:false,explanation:'Nem mindig. Ha a kisebből vonjuk ki a nagyobbat, akkor negatív (pl. 2-5=-3), de ha fordítva, akkor pozitív (pl. 5-2=3).'},
  {id:'concept_tf_2',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha pozitív számból az ellentettjét vonjuk ki, pozitív számot kapunk.',correct:true,explanation:'Igaz. Pl. 5 - (-5) = 5 + 5 = 10.'},
  {id:'concept_tf_3',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha negatív számból önmagát vonjuk ki, nullát kapunk.',correct:true,explanation:'Bármely számot önmagából kivonva 0-t kapunk (pl. -5 - (-5) = -5 + 5 = 0).'},
  {id:'concept_tf_4',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha negatív számból az abszolút értékét vonjuk ki, nullát kapunk.',correct:false,explanation:'Hamis. Pl. -3 - |-3| = -3 - 3 = -6. Csak akkor lenne 0, ha hozzáadnánk.'},
  {id:'concept_tf_5',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha negatív számból az ellentettjét vonjuk ki, negatív számot kapunk.',correct:true,explanation:'Igaz. Pl. -5 - 5 = -10.'},
  
  // -- Egész számok (Elmélet) --
  {id:'int_theory_1',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mit mutat meg egy szám abszolút értéke?',options:['Hogy páros vagy páratlan','A nullától való távolságát','Hogy negatív-e','Az ellentettjét'],correct:1,explanation:'Az abszolút érték azt méri, hány lépést kell tennünk a nulláig. A távolság sosem lehet negatív.'},
  {id:'int_theory_2',category:'Egész számok',difficulty:'medium',type:'tf',time:20,points:12,question:'Igaz vagy hamis: Két negatív egész szám közül az a nagyobb, amelyiknek kisebb az abszolút értéke.',correct:true,explanation:'Gondolj a hőmérsékletre! A -2 fok melegebb (nagyobb), mint a -20 fok. A -2 közelebb van a nullához.'},


  // --- EREDETI FELADATOK (Helymeghatározás) ---
  {
    id: 'coord_1', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1, highlight: 'A' },
    question: 'Határozd meg az A pont koordinátáit!',
    options: ['(2; 3)', '(3; 2)', '(-2; 3)', '(2; -3)'],
    correct: 0,
    explanation: 'Az első szám (x) mutatja, mennyit lépünk jobbra (2), a második (y), mennyit lépünk fel (3). Tehát A(2; 3).'
  },
  {
    id: 'coord_2', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1, highlight: 'B' },
    question: 'Határozd meg a B pont koordinátáit!',
    options: ['(-4; 1)', '(4; 1)', '(-4; -1)', '(-1; 4)'],
    correct: 0,
    explanation: 'Az origóból balra lépünk 4-et (-4), majd felfelé 1-et (1). Tehát B(-4; 1).'
  },
  {
    id: 'coord_3', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1, highlight: 'C' },
    question: 'Határozd meg a C pont koordinátáit!',
    options: ['(-2; -3)', '(-3; -2)', '(2; 3)', '(-2; 3)'],
    correct: 0,
    explanation: 'Az origóból balra (-2) és lefelé (-3) kell lépni. C(-2; -3).'
  },
  {
    id: 'coord_4', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1 },
    question: 'Melyik pont található a (3; -2) koordinátán?',
    options: ['A', 'B', 'C', 'D'],
    correct: 3,
    explanation: 'x=3 jelentése: 3 lépés jobbra. y=-2 jelentése: 2 lépés lefelé. Ott a D pontot találod.'
  },
  {
    id: 'coord_5', category: 'Helymeghatározás', difficulty: 'easy', type: 'tf', time: 30, points: 10,
    gridConfig: { points: gridSet1 },
    question: 'Igaz vagy hamis: Az A és D pontok x koordinátája pozitív.',
    correct: true,
    explanation: 'Igaz, mert mindkettő a függőleges tengelytől jobbra helyezkedik el.'
  },
  {
    id: 'coord_6', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet2, highlight: 'P' },
    question: 'Hol található a P pont?',
    options: ['Az x tengelyen', 'Az y tengelyen', 'Az origóban', 'A második síknegyedben'],
    correct: 1,
    explanation: 'A P pont koordinátája (0; 5). Mivel az x=0, nem léptünk se jobbra, se balra, így rajta maradtunk az y tengelyen.'
  },
  {
    id: 'coord_7', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet2, highlight: 'Q' },
    question: 'Melyik állítás igaz a Q pontra (5; 0)?',
    options: ['Az y tengelyen van', 'Az x tengelyen van', 'Ez az origó', 'Egyik sem'],
    correct: 1,
    explanation: 'Mivel az y koordináta 0, nem léptünk se fel, se le, tehát a pont az x tengelyen (vízszintes) fekszik.'
  },
  {
    id: 'coord_8', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    gridConfig: { points: gridSet2, highlight: 'R' },
    question: 'Mi a neve a (0; 0) pontnak?',
    options: ['Középpont', 'Origó', 'Bázis', 'Zéró'],
    correct: 1,
    explanation: 'A koordináta-rendszer metszéspontját (kezdőpontját) Origónak nevezzük.'
  },
  {
    id: 'coord_9', category: 'Helymeghatározás', difficulty: 'hard', type: 'matching', time: 40, points: 20,
    gridConfig: { points: gridSet1 },
    question: 'Párosítsd a pontokat a síknegyedekkel!',
    pairs: {'A': 'I. negyed', 'B': 'II. negyed', 'C': 'III. negyed'},
    explanation: 'I. negyed: jobb-fent (+,+); II. negyed: bal-fent (-,+); III. negyed: bal-lent (-,-).'
  },
  {
    id: 'coord_10', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: [{label:'X',x:-3,y:4}, {label:'Y',x:3,y:4}] },
    question: 'Mekkora a távolság az X(-3; 4) és Y(3; 4) pontok között?',
    options: ['3', '4', '6', '0'],
    correct: 2,
    explanation: 'Mindkettő 4 egység magasan van. A távolságuk vízszintesen: a -3-tól a 3-ig 6 lépés van.'
  },
  // --- ÚJ FELADATOK: Helymeghatározás (Bővítés 10-ről 25-re) ---
  {
    id: 'coord_new_1', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Melyik tengely a vízszintes?',
    options: ['x tengely', 'y tengely', 'z tengely', 'origó'],
    correct: 0,
    explanation: 'A vízszintes tengelyt x tengelynek, a függőlegest y tengelynek nevezzük.'
  },
  {
    id: 'coord_new_2', category: 'Helymeghatározás', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A (2; 3) és a (3; 2) ugyanazt a pontot jelöli.',
    correct: false,
    explanation: 'Hamis. A sorrend számít! (2;3) azt jelenti: 2 jobbra, 3 fel. A (3;2) pedig: 3 jobbra, 2 fel.'
  },
  {
    id: 'coord_new_3', category: 'Helymeghatározás', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Milyen távol van az x tengelytől a P(5; -3) pont?',
    correctAnswer: '3',
    explanation: 'A pont y koordinátája (-3) mutatja a távolságot az x tengelytől. A távolság mindig pozitív: 3 egység.'
  },
  {
    id: 'coord_new_4', category: 'Helymeghatározás', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Milyen távol van az y tengelytől a K(-4; 7) pont?',
    correctAnswer: '4',
    explanation: 'Az y tengelytől való távolságot az x koordináta abszolút értéke adja meg. |-4| = 4.'
  },
  {
    id: 'coord_new_5', category: 'Helymeghatározás', difficulty: 'hard', type: 'mcq', time: 30, points: 15,
    question: 'Ha a (2; 3) pontot tükrözzük az x tengelyre, mi lesz a képe?',
    options: ['(2; -3)', '(-2; 3)', '(-2; -3)', '(3; 2)'],
    correct: 0,
    explanation: 'X tengelyre való tükrözéskor az x koordináta marad, az y az ellentettjére változik. (2; -3).'
  },
  {
    id: 'coord_new_6', category: 'Helymeghatározás', difficulty: 'hard', type: 'mcq', time: 30, points: 15,
    question: 'Ha a (-5; 1) pontot tükrözzük az y tengelyre, mi lesz a képe?',
    options: ['(5; 1)', '(-5; -1)', '(5; -1)', '(1; -5)'],
    correct: 0,
    explanation: 'Y tengelyre való tükrözéskor az y koordináta marad, az x az ellentettjére változik. (5; 1).'
  },
  {
    id: 'coord_new_7', category: 'Helymeghatározás', difficulty: 'hard', type: 'mcq', time: 35, points: 18,
    question: 'Mi a felezőpontja az O(0;0) és A(4;4) szakasznak?',
    options: ['(2; 2)', '(1; 1)', '(2; 4)', '(4; 2)'],
    correct: 0,
    explanation: 'Pontosan félúton van: 0 és 4 között a 2 van. Tehát (2; 2).'
  },
  {
    id: 'coord_new_8', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Ha az (1; 1) pontból 2-t lépünk jobbra, hova jutunk?',
    options: ['(3; 1)', '(1; 3)', '(-1; 1)', '(1; -1)'],
    correct: 0,
    explanation: 'Jobbra lépéskor az x koordináta nő. 1 + 2 = 3. Az y nem változik. (3; 1).'
  },
  {
    id: 'coord_new_9', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Ha a (2; 5) pontból 3-at lépünk lefelé, hova jutunk?',
    options: ['(2; 2)', '(5; 5)', '(-1; 5)', '(2; 8)'],
    correct: 0,
    explanation: 'Lefelé lépéskor az y koordináta csökken. 5 - 3 = 2. Az x nem változik. (2; 2).'
  },
  {
    id: 'coord_new_10', category: 'Helymeghatározás', difficulty: 'medium', type: 'matching', time: 35, points: 15,
    question: 'Melyik síknegyedben milyen előjelűek a számok?',
    pairs: {'I. negyed': '(+; +)', 'II. negyed': '(-; +)', 'III. negyed': '(-; -)'},
    explanation: 'I: jobb-fent (+,+); II: bal-fent (-,+); III: bal-lent (-,-); IV: jobb-lent (+,-).'
  },
  {
    id: 'coord_new_11', category: 'Helymeghatározás', difficulty: 'hard', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: Ha egy pont az egyik tengelyen van, akkor az egyik koordinátája 0.',
    correct: true,
    explanation: 'Igaz. Ha az x tengelyen van, y=0. Ha az y tengelyen van, x=0.'
  },
  {
    id: 'coord_new_12', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik pont van a II. síknegyedben?',
    options: ['(-3; 5)', '(3; 5)', '(-3; -5)', '(3; -5)'],
    correct: 0,
    explanation: 'A II. negyed balra fent van. Tehát x negatív, y pozitív.'
  },
  {
    id: 'coord_new_13', category: 'Helymeghatározás', difficulty: 'hard', type: 'shortnum', time: 40, points: 20,
    question: 'Mekkora a területe annak a téglalapnak, amelynek csúcsai: (0;0), (4;0), (4;3), (0;3)?',
    correctAnswer: '12',
    explanation: 'Az oldalai a tengelyek mentén mérhetők: szélessége 4, magassága 3. Terület = 4 · 3 = 12.'
  },
  {
    id: 'coord_new_14', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Melyik koordinátát írjuk előre?',
    options: ['x', 'y', 'mindegy', 'z'],
    correct: 0,
    explanation: 'Mindig az x koordinátával kezdünk (vízszintes), utána jön az y (függőleges).'
  },
  {
    id: 'coord_new_15', category: 'Helymeghatározás', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: 'Mennyi a távolság a (-2; 0) és a (3; 0) pontok között?',
    correctAnswer: '5',
    explanation: 'A -2-től a 0-ig 2 lépés, onnan a 3-ig még 3 lépés. Összesen 2 + 3 = 5.'
  },

  // --- EREDETI FELADATOK (Törtszámok) ---
  {
    id: 'frac_concept_1', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Hogy nevezzük a törtvonal alatti számot?',
    options: ['Számláló', 'Nevező', 'Törtvonal', 'Hányados'],
    correct: 1,
    explanation: 'A törtvonal alatti szám a nevező. Ez "nevezi meg" a törtet (pl. ötöd, hatod), és megmutatja, hány egyenlő részre osztottuk az egészet.'
  },
  {
    id: 'frac_concept_2', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Hogy nevezzük a törtvonal feletti számot?',
    options: ['Számláló', 'Nevező', 'Törtvonal', 'Hányados'],
    correct: 0,
    explanation: 'A törtvonal feletti szám a számláló. Ez "számolja meg", hogy hány darabot veszünk a részekből.'
  },
  {
    id: 'frac_concept_3', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Milyen műveletet jelöl a törtvonal?',
    options: ['Szorzást', 'Összeadást', 'Osztást', 'Kivonást'],
    correct: 2,
    explanation: 'A törtvonal mindig osztást jelöl. Pl. 1/2 ugyanaz, mint 1 osztva 2-vel.'
  },
  {
    id: 'frac_concept_4', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 20, points: 10,
    question: 'Hány ötöd alkot egy egészet?',
    correctAnswer: '5',
    explanation: 'Ha egy tortát 5 egyenlő szeletre vágunk, akkor mind az 5 szelet kell ahhoz, hogy meglegyen az egész torta. 5/5 = 1.'
  },
  {
    id: 'frac_concept_5', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A 4/3 egynél nagyobb tört.',
    correct: true,
    explanation: 'Igaz, mert a számláló (4) nagyobb, mint a nevező (3). Ez egy "ál-tört", több mint 1 egész.'
  },
  {
    id: 'frac_concept_6', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 10,
    question: 'Melyik tört értéke pontosan 1?',
    options: ['4/5', '7/7', '8/7', '0/5'],
    correct: 1,
    explanation: 'Ha a számláló és a nevező egyenlő, akkor a tört értéke 1 egész (pl. 7/7).'
  },
  {
    id: 'frac_mixed_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik vegyes szám egyenlő a 13/4 törttel?',
    options: ['2 3/4', '3 1/4', '4 1/4', '3 3/4'],
    correct: 1,
    explanation: 'Nézzük meg, hányszor van meg 13-ban a 4. Megvan 3-szor (3*4=12), és marad az 1. Tehát 3 egész és 1/4.'
  },
  {
    id: 'frac_mixed_2', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik törttel egyenlő a 2 1/5 vegyes szám?',
    options: ['3/5', '11/5', '10/5', '7/5'],
    correct: 1,
    explanation: 'Váltsuk át: 2 egész az 10 ötöd (2*5). Ehhez jön még 1 ötöd. Összesen 11/5.'
  },
  {
    id: 'frac_mixed_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Írd át vegyes számba: 8/3',
    options: ['2 2/3', '3 1/3', '1 5/3', '2 1/3'],
    correct: 0,
    explanation: '8-ban a 3 megvan 2-szer (ez 6), a maradék pedig 2. Tehát 2 egész 2/3.'
  },
  {
    id: 'frac_mixed_4', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Hány egész van a 15/4 törtben?',
    correctAnswer: '3',
    explanation: 'Csak az egész részt kérdezzük: 15-ben a 4 megvan 3-szor (mert 3*4=12), a maradékkal most nem kell foglalkozni.'
  },
  {
    id: 'frac_mixed_5', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik tört egyenlő a 3 1/2 számmal?',
    options: ['7/2', '5/2', '3/2', '4/2'],
    correct: 0,
    explanation: '3 egész az 6 fél (3*2), plusz még 1 fél, az összesen 7/2.'
  },
  {
    id: 'frac_mixed_6', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: Az 5/2 egyenlő 2 és féllel.',
    correct: true,
    explanation: 'Igaz. 5-ben a 2 megvan 2-szer, és marad 1. Tehát 2 egész 1/2.'
  },
  {
    id: 'frac_simplify_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 15,
    question: 'Egyszerűsítsd a 18/24 törtet a legegyszerűbb alakjára!',
    options: ['9/12', '6/8', '3/4', '2/3'],
    correct: 2,
    explanation: 'Keressünk egy számot, amivel mindkettő osztható. A legnagyobb ilyen a 6. 18:6=3 és 24:6=4. Így lesz 3/4.'
  },
  {
    id: 'frac_expand_1', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 10,
    question: 'Melyik szám hiányzik a számlálóból? 3/5 = ?/20',
    correctAnswer: '12',
    explanation: 'A nevező 5-ről 20-ra változott, azaz megszoroztuk 4-gyel. A számlálót is meg kell szorozni 4-gyel: 3 · 4 = 12.'
  },
  {
    id: 'frac_simp_2', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Bővítsd a 2/3 törtet 5-tel!',
    options: ['7/8', '10/15', '2/15', '10/3'],
    correct: 1,
    explanation: 'Bővítéskor a számlálót ÉS a nevezőt is megszorozzuk ugyanazzal a számmal. 2·5=10 és 3·5=15. Eredmény: 10/15.'
  },
  {
    id: 'frac_simp_3', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 12,
    question: 'Egyszerűsítsd a 6/8 törtet a legegyszerűbb alakjára! (x/y)',
    correctAnswer: '3/4',
    explanation: 'Mindkét szám páros, felezzük meg őket! 6 fele 3, 8 fele 4. Eredmény: 3/4.'
  },
  {
    id: 'frac_simp_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik tört NEM egyenlő az 1/2-vel?',
    options: ['2/4', '3/6', '3/5', '5/10'],
    correct: 2,
    explanation: '2/4, 3/6, 5/10 mind egyszerűsíthetők 1/2-re. A 3/5 viszont nem.'
  },
  {
    id: 'frac_simp_5', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Ha 2/5 = x/15, mennyi az x értéke?',
    correctAnswer: '6',
    explanation: 'Az 5-öt 3-mal szoroztuk, hogy 15 legyen. Ezért a 2-t is 3-mal kell szorozni: 2 · 3 = 6.'
  },
  {
    id: 'frac_simp_6', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A 10/20 egyszerűsítve 1/2.',
    correct: true,
    explanation: 'Igaz. Ha 20 részből 10-et veszel ki, az pont a fele.'
  },
  {
    id: 'frac_compare_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik relációjel illik a 2/3 és 3/5 közé?',
    options: ['>', '<', '='],
    correct: 0,
    explanation: 'Hozzuk közös nevezőre (15)! 2/3 = 10/15, míg 3/5 = 9/15. Mivel 10 > 9, ezért a 2/3 a nagyobb.'
  },
  {
    id: 'frac_comp_2', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Melyik tört a nagyobb: 4/7 vagy 4/9?',
    options: ['4/7', '4/9', 'Egyenlőek'],
    correct: 0,
    explanation: 'Ha a számlálók egyformák (mindkettő 4 szelet), akkor az a nagyobb, ahol nagyobbak a szeletek (kisebb a nevező). Tehát 4/7 > 4/9.'
  },
  {
    id: 'frac_comp_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik a legkisebb szám az alábbiak közül?',
    options: ['1/2', '1/3', '1/4', '1/10'],
    correct: 3,
    explanation: 'Minél több részre osztjuk az egészet, annál kisebb egy szelet. A tized a legkisebb.'
  },
  {
    id: 'frac_comp_4', category: 'Törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 18,
    question: 'Hasonlítsd össze: 3/4 és 5/8',
    options: ['3/4 > 5/8', '3/4 < 5/8', '3/4 = 5/8'],
    correct: 0,
    explanation: 'A 3/4 bővítve 6/8. Így már könnyű összehasonlítani: 6/8 > 5/8.'
  },
  {
    id: 'frac_comp_5', category: 'Törtszámok', difficulty: 'medium', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: Ha két tört nevezője azonos, a nagyobb számlálójú tört a nagyobb.',
    correct: true,
    explanation: 'Igaz. Ha a szeletek mérete egyforma, akkor abból van több, amiből több darabunk van.'
  },
  {
    id: 'frac_comp_6', category: 'Törtszámok', difficulty: 'medium', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: 1/3 nagyobb mint 1/2.',
    correct: false,
    explanation: 'Hamis. Gondolj a tortára: a fél torta (1/2) nagyobb, mint a harmad torta (1/3).'
  },
  {
    id: 'frac_add_1', category: 'Törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 10,
    question: 'Mennyi 3/8 + 2/8? (Írd be törtként: x/y)',
    correctAnswer: '5/8',
    explanation: 'Azonos nevezőjű törteknél a nevező marad (8), a számlálókat pedig összeadjuk: 3 + 2 = 5. Eredmény: 5/8.'
  },
  {
    id: 'frac_sub_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 15,
    question: 'Végezd el a kivonást: 5/6 − 1/3',
    options: ['4/3', '1/2', '2/3', '1/6'],
    correct: 1,
    explanation: 'Közös nevező kell! 1/3 = 2/6. Most már kivonhatunk: 5/6 - 2/6 = 3/6. Ez egyszerűsítve 1/2.'
  },
  {
    id: 'frac_ops_add_2', category: 'Törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 12,
    question: 'Mennyi 2/9 + 5/9? (törtként: x/y)',
    correctAnswer: '7/9',
    explanation: 'A nevező változatlan marad, csak a számlálókat adjuk össze: 2 + 5 = 7. Eredmény: 7/9.'
  },
  {
    id: 'frac_ops_add_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 15,
    question: 'Mennyi 1/4 + 1/2?',
    options: ['2/6', '3/4', '1/6', '2/4'],
    correct: 1,
    explanation: 'Az 1/2-et bővítsük negyedekre: 1/2 = 2/4. Így 1/4 + 2/4 = 3/4.'
  },
  {
    id: 'frac_ops_sub_3', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 15,
    question: 'Mennyi 1 egészből 2/5? (törtként: x/y)',
    correctAnswer: '3/5',
    explanation: 'Az 1 egészet felírhatjuk 5/5-ként. 5/5 - 2/5 = 3/5.'
  },
  {
    id: 'frac_ops_add_4', category: 'Törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 18,
    question: 'Mennyi 1 1/5 + 2 2/5?',
    options: ['3 1/5', '3 3/5', '3 3/10', '4'],
    correct: 1,
    explanation: 'Külön adjuk össze az egészeket (1+2=3) és a törteket (1/5+2/5=3/5). Eredmény: 3 egész 3/5.'
  },
  {
    id: 'frac_ops_sub_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 15,
    question: 'Mennyi 5/8 - 1/4?',
    options: ['4/4', '3/8', '4/8', '1/8'],
    correct: 1,
    explanation: 'Hozzuk közös nevezőre: 1/4 = 2/8. A kivonás: 5/8 - 2/8 = 3/8.'
  },
  {
    id: 'frac_mult_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi: (2/7) · 3?',
    options: ['6/7', '6/21', '2/21', '5/7'],
    correct: 0,
    explanation: 'Törtet egész számmal úgy szorzunk, hogy csak a számlálót szorozzuk meg. 2 · 3 = 6, a nevező marad 7. Eredmény: 6/7.'
  },
  {
    id: 'frac_div_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi: (8/9) : 2?',
    options: ['16/9', '4/9', '8/18', '4/4.5'],
    correct: 1,
    explanation: 'Ha a számláló osztható az egész számmal, egyszerűen elosztjuk: 8 : 2 = 4. A nevező marad 9. Eredmény: 4/9.'
  },
  {
    id: 'frac_ops_mult_2', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 12,
    question: 'Mennyi 3/10 · 3? (törtként: x/y)',
    correctAnswer: '9/10',
    explanation: '3 tized szorozva 3-mal az 9 tized (3 · 3 = 9).'
  },
  {
    id: 'frac_ops_div_2', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 12,
    question: 'Mennyi 6/7 : 2? (törtként: x/y)',
    correctAnswer: '3/7',
    explanation: '6 hetedet elosztjuk kétfelé, marad 3 heted (6 : 2 = 3).'
  },
  {
    id: 'frac_ops_mult_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi 2 · (2/5)?',
    options: ['4/5', '4/10', '2/10', '2/5'],
    correct: 0,
    explanation: '2-szer 2 ötöd az 4 ötöd.'
  },
  {
    id: 'frac_ops_div_3', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 25, points: 10,
    question: 'Igaz vagy hamis: A 4/5 : 2 eredménye 2/5.',
    correct: true,
    explanation: 'Igaz. 4 ötödöt elfelezve 2 ötödöt kapunk.'
  },
  {
    id: 'frac_ops_mult_4', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 12,
    question: 'Mennyi 1/2 · 4?',
    correctAnswer: '2',
    explanation: '4-nek a fele (1/2 része) pontosan 2.'
  },
  {
    id: 'frac_part_1', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 10,
    question: 'Mennyi 20-nak a 3/4 része?',
    correctAnswer: '15',
    explanation: 'Először számoljuk ki az 1/4 részt: 20 : 4 = 5. Ennek a háromszorosa a 3/4 rész: 5 · 3 = 15.'
  },
  {
    id: 'frac_part_2', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 10,
    question: 'Mennyi 60-nak az 1/3 része?',
    correctAnswer: '20',
    explanation: 'A harmadát úgy kapjuk meg, hogy elosztjuk 3-mal. 60 : 3 = 20.'
  },
  {
    id: 'frac_part_3', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: 'Hány perc 3/4 óra?',
    correctAnswer: '45',
    explanation: '1 óra = 60 perc. 1/4 óra = 15 perc (60:4). 3/4 óra = 3 · 15 = 45 perc.'
  },
  {
    id: 'frac_part_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi 24-nek a 2/3 része?',
    options: ['12', '16', '18', '8'],
    correct: 1,
    explanation: '24 egyharmada 8 (24:3). A kétharmada ennek a duplája: 16.'
  },
  {
    id: 'frac_part_5', category: 'Törtszámok', difficulty: 'hard', type: 'shortnum', time: 35, points: 18,
    question: 'Ha egy osztály 20 fős és 1/5-e hiányzik, hányan hiányoznak?',
    correctAnswer: '4',
    explanation: 'Az osztály létszámát (20) el kell osztani 5-tel, hogy megkapjuk az 1/5-ét. 20 : 5 = 4 fő.'
  },
  {
    id: 'frac_part_6', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 25, points: 10,
    question: 'Igaz vagy hamis: 100-nak a felének a fele 25.',
    correct: true,
    explanation: 'Igaz. 100 fele 50. 50 fele pedig 25.'
  },
  {
    id: 'frac_part_7', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: '1 kg 1/2 része hány gramm?',
    correctAnswer: '500',
    explanation: 'Tudjuk, hogy 1 kg = 1000 g. Ennek a fele 500 g.'
  },
  {
    id: 'frac_line_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Milyen hosszú egységet érdemes választani a számegyenesen, ha az 1/2, 1/3 és 1/6 törteket akarjuk ábrázolni?',
    options: ['6 egységet', '10 egységet', '5 egységet', '4 egységet'],
    correct: 0,
    explanation: 'Olyan számot kell választani, ami osztható 2-vel, 3-mal és 6-tal is. A 6 (vagy 12) a legjobb választás.'
  },
  {
    id: 'frac_line_2', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Hol helyezkedik el a 7/6 a számegyenesen az 1-hez képest?',
    options: ['Balra (kisebb)', 'Jobbra (nagyobb)', 'Ugyanott', 'A 0-nál'],
    correct: 1,
    explanation: 'Mivel 7/6 nagyobb, mint 6/6 (ami az 1), ezért az 1-től jobbra helyezkedik el.'
  },
  {
    id: 'frac_line_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik szám van legközelebb a 0-hoz a számegyenesen: 1/2, 2/5, 7/10?',
    options: ['1/2', '2/5', '7/10', 'Egyforma távol vannak'],
    correct: 1,
    explanation: 'Tizedekre váltva: 1/2 = 5/10, 2/5 = 4/10, 7/10 = 7/10. A 4/10 a legkisebb, így az van legközelebb a 0-hoz.'
  },
  {
    id: 'frac_line_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Melyik tört jelöli ugyanazt a pontot a számegyenesen, mint a 2/3?',
    options: ['4/6', '3/2', '5/6', '1/3'],
    correct: 0,
    explanation: 'Bővítéssel (szorozva 2-vel) a 2/3-ból 4/6 lesz. Ezek egyenlő értékű törtek.'
  },
  {
    id: 'frac_line_5', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 35, points: 15,
    question: 'Ha a számegyenesen a 0 és az 1 távolsága 10 cm, hány cm távolságra van a 0-tól a 2/5 pont?',
    correctAnswer: '4',
    explanation: '10 cm az egész (1). Ennek 1/5 része 2 cm. A 2/5 része tehát 2 · 2 = 4 cm.'
  },
  {
    id: 'frac_line_6', category: 'Törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 18,
    question: 'Egy könyv felét elolvastad. A maradék 3/4-e hányad része az egész könyvnek?',
    options: ['3/8', '1/4', '1/2', '3/4'],
    correct: 0,
    explanation: 'A maradék az 1/2. Ennek kell venni a 3/4 részét. (1/2) · (3/4) = 3/8.'
  },
  {
    id: 'frac_line_7', category: 'Törtszámok', difficulty: 'medium', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A 13/10 a számegyenesen az 1 és a 2 között helyezkedik el.',
    correct: true,
    explanation: 'Igaz. 13/10 = 1 egész 3/10, ami több mint 1, de kevesebb mint 2.'
  },
  {
    id: 'frac_line_8', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Melyik tört jelöli ugyanazt a pontot, mint az 1 egész 1/2?',
    options: ['3/2', '2/3', '1/2', '4/2'],
    correct: 0,
    explanation: 'Az 1 egész az 2/2. Ehhez jön még 1/2. Összesen 3/2.'
  },
  {
    id: 'frac_line_9', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: 'Ha egy 12 cm-es szakaszt 3 egyenlő részre osztunk, hány cm a 2/3 része?',
    correctAnswer: '8',
    explanation: 'A 12 cm harmada 4 cm. Két harmada ennek a duplája: 8 cm.'
  },
  {
    id: 'frac_line_10', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'A 4/3 és a 3/4 közül melyik van jobbra a számegyenesen?',
    options: ['4/3', '3/4', 'Egy helyen vannak', 'Nem dönthető el'],
    correct: 0,
    explanation: 'A 4/3 nagyobb 1-nél (mert 4>3), a 3/4 viszont kisebb 1-nél. A nagyobb szám van jobbra.'
  },
  // -- Törtszámok (Elmélet) --
  {id:'frac_theory_1',category:'Törtszámok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mi történik a tört értékével, ha bővítjük?',options:['Nő','Csökken','Nem változik','Nullára változik'],correct:2,explanation:'Bővítéskor csak a szeletek számát és méretét változtatjuk, de az egész mennyiség ugyanannyi marad.'},
  {id:'frac_theory_2',category:'Törtszámok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mikor nevezünk egy törtet valódi törtnek?',options:['Ha a számláló kisebb, mint a nevező','Ha a számláló nagyobb','Ha egyenlőek','Ha a nevező 1'],correct:0,explanation:'A valódi tört értéke kisebb, mint 1 egész. Ha a számláló nagyobb, az már "ál-tört".'},


  // --- ÚJ KATEGÓRIA 1: Természetes számok ---
  {id:'nat_pv_1',category:'Természetes számok',difficulty:'easy',type:'shortnum',time:25,points:10,question:'Melyik számjegy áll a tízezresek helyén a 452 719 számban?',correctAnswer:'5',explanation:'A helyiértékek jobbról balra: egyes, tízes, százas, ezres, tízezres. A tízezresek helyén az 5 áll.'},
  {id:'nat_pv_2',category:'Természetes számok',difficulty:'medium',type:'mcq',time:30,points:12,question:'Hogyan írjuk le számjegyekkel: hárommillió-ötszázezer?',options:['3 500 000','3 050 000','300 500','35 000 000'],correct:0,explanation:'3 millió és 500 ezer. Tehát: 3 500 000.'},
  {id:'nat_pv_3',category:'Természetes számok',difficulty:'hard',type:'mcq',time:30,points:15,question:'Melyik számban a legnagyobb a 7-es alaki értéke?',options:['7 240','3 750','9 170','2 007'],correct:0,explanation:'Az alaki érték magát a számjegyet jelenti, de itt a kérdés valószínűleg a helyiértékre vonatkozik. A 7 240-ben ezresek helyén van (értéke 7000), a többiben kevesebb.'},
  {id:'nat_pv_4',category:'Természetes számok',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Hány darab tízezres van 1 millióban?',correctAnswer:'100',explanation:'1 millióban 10 db százezer van, és minden százezerben 10 db tízezer. 10 · 10 = 100.'},
  {id:'nat_pv_5',category:'Természetes számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A legnagyobb háromjegyű szám a 999.',correct:true,explanation:'Igaz. A rákövetkező szám az 1000, ami már négyjegyű.'},

  // Kerekítés (5 db)
  {id:'nat_round_1',category:'Természetes számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Kerekítsd a 458-at tízesre!',correctAnswer:'460',explanation:'A kerekítendő jegy mögött 8 áll. Mivel ez 5 vagy annál nagyobb, felfelé kerekítünk 460-ra.'},
  {id:'nat_round_2',category:'Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Kerekítsd a 12 345-öt ezresre!',correctAnswer:'12000',explanation:'Az ezresek helyén álló számjegy mögött 3-as van. Mivel ez kisebb 5-nél, lefelé kerekítünk (a számjegy marad, a vége nullázódik).'},
  {id:'nat_round_3',category:'Természetes számok',difficulty:'medium',type:'mcq',time:30,points:15,question:'Melyik szám kerekített értéke 500 (százasra kerekítve)?',options:['449','551','490','560'],correct:2,explanation:'449 -> 400 (4 miatt); 551 -> 600 (5 miatt); 490 -> 500 (9 miatt); 560 -> 600 (6 miatt).'},
  {id:'nat_round_4',category:'Természetes számok',difficulty:'hard',type:'tf',time:25,points:12,question:'Igaz vagy hamis: A 999 tizesre kerekítve 1000.',correct:true,explanation:'Igaz. A 9-es miatt felfelé kerekítünk. A 99 tízesből 100 tízes lesz, ami 1000.'},
  {id:'nat_round_5',category:'Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi 249 tízesre kerekítve?',correctAnswer:'250',explanation:'A végén lévő 9-es miatt felfelé kerekítünk: 250.'},

  // Római számok (5 db)
  {id:'nat_roman_1',category:'Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi a római MCXL értéke arab számokkal?',correctAnswer:'1140',explanation:'M=1000, C=100. XL=40 (az X az L előtt van, tehát kivonjuk). Összeg: 1000+100+40=1140.'},
  {id:'nat_roman_2',category:'Természetes számok',difficulty:'easy',type:'mcq',time:25,points:10,question:'Melyik római szám jelöli az 50-et?',options:['L','C','D','X'],correct:0,explanation:'Jegyezd meg: L = 50. (C=100, D=500, X=10).'},
  {id:'nat_roman_3',category:'Természetes számok',difficulty:'hard',type:'mcq',time:30,points:15,question:'Hogyan írjuk le a 2024-et római számokkal?',options:['MMXXIV','MMXIV','MXXIV','MMXXVI'],correct:0,explanation:'MM = 2000, XX = 20, IV = 4. Egymás mellé írva: MMXXIV.'},
  {id:'nat_roman_4',category:'Természetes számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A IX értéke 11.',correct:false,explanation:'Hamis. Mivel az I (1) a X (10) előtt van, ki kell vonni. 10 - 1 = 9.'},
  {id:'nat_roman_5',category:'Természetes számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Párosítsd az értékeket:',pairs:{'XV':'15','XIX':'19','XXX':'30'},explanation:'XV = 10+5; XIX = 10+(10-1); XXX = 10+10+10.'},

  // Sorrend / Műveletek (5 db)
  {id:'nat_ord_1',category:'Természetes számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Melyik a nagyobb?',options:['10 001','9 999','Egyenlőek','Nem dönthető el'],correct:0,explanation:'A 10 001 ötjegyű szám, a 9 999 csak négyjegyű. A több számjegyű mindig nagyobb.'},
  {id:'nat_ord_2',category:'Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mi a legkisebb háromjegyű páros szám?',correctAnswer:'100',explanation:'A legkisebb háromjegyű szám a 100, és mivel 0-ra végződik, páros is.'},
  {id:'nat_ord_3',category:'Természetes számok',difficulty:'hard',type:'mcq',time:30,points:15,question:'Mennyi a különbség a legnagyobb háromjegyű és a legkisebb kétjegyű szám között?',options:['989','899','999','1009'],correct:0,explanation:'A legnagyobb háromjegyű a 999. A legkisebb kétjegyű a 10. Különbség: 999 - 10 = 989.'},
  {id:'nat_ord_4',category:'Természetes számok',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Írd le számjegyekkel: 5 ezres + 3 százas + 2 egyes.',correctAnswer:'5302',explanation:'Az ezresek helyére 5, százasok 3, tízesek 0 (mert nincs), egyesek 2. Eredmény: 5302.'},
  {id:'nat_ord_5',category:'Természetes számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: Minden természetes szám pozitív.',correct:false,explanation:'Hamis. A 0 is természetes szám, de nem pozitív (és nem is negatív).'},
  
  // -- Természetes számok (Elmélet) --
  {id:'nat_theory_1',category:'Természetes számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mit jelent a számok írásában a helyiérték?',options:['A számjegy alakja','A számjegy helye a számban','A számjegy színe','A szám hossza'],correct:1,explanation:'Ugyanaz a számjegy mást ér, ha hátul áll (egyes), vagy ha elöl (pl. ezres). Ezt nevezzük helyiértéknek.'},
  {id:'nat_theory_2',category:'Természetes számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A 0 (nulla) természetes szám.',correct:true,explanation:'Igen, a természetes számok a 0, 1, 2, 3... és így tovább a végtelenig.'},
  {id:'nat_theory_3',category:'Természetes számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Melyik műveletnél cserélhetjük fel a számokat (kommutativitás)?',options:['Kivonásnál','Osztásnál','Összeadásnál','Hatványozásnál'],correct:2,explanation:'5 + 3 ugyanannyi, mint 3 + 5. De a kivonásnál ez nem igaz.'},


  // --- ÚJ KATEGÓRIA 2: Geometriai alapismeretek ---
  {id:'geo_line_1',category:'Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány végpontja van egy egyenesnek?',correctAnswer:'0',explanation:'Az egyenes mindkét irányban a végtelenbe nyúlik, nincs vége.'},
  {id:'geo_line_2',category:'Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány végpontja van egy szakasznak?',correctAnswer:'2',explanation:'A szakasz két pont közötti legrövidebb út, mindkét végén van egy végpont.'},
  {id:'geo_line_3',category:'Geometriai alapismeretek',difficulty:'medium',type:'shortnum',time:20,points:12,question:'Hány végpontja van egy félegyenesnek?',correctAnswer:'1',explanation:'A félegyenesnek van egy kezdőpontja, de a másik irányba a végtelenbe tart.'},
  {id:'geo_line_4',category:'Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Két különböző pont hány egyenest határoz meg?',options:['Egyet','Kettőt','Végtelent','Nullát'],correct:0,explanation:'Ha két pontra vonalzót teszel, csak egyetlen egyenest tudsz húzni rajtuk keresztül.'},
  {id:'geo_line_5',category:'Geometriai alapismeretek',difficulty:'hard',type:'tf',time:25,points:12,question:'Igaz vagy hamis: Három pont mindig meghatároz egy háromszöget.',correct:false,explanation:'Hamis. Ha a három pont egy vonalban van (egy egyenesre esik), akkor nem alkotnak háromszöget.'},

  // Párhuzamos és merőleges (5 db)
  {id:'geo_rel_1',category:'Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány fokos szöget zárnak be a merőleges egyenesek?',correctAnswer:'90',explanation:'A merőleges egyenesek találkozásánál derékszög, azaz 90°-os szög keletkezik.'},
  {id:'geo_rel_2',category:'Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Mi a jele a párhuzamosságnak?',options:['||','⊥','=','∠'],correct:0,explanation:'A két egymás melletti álló vonal (||) jelöli a párhuzamosságot.'},
  {id:'geo_rel_3',category:'Geometriai alapismeretek',difficulty:'medium',type:'tf',time:20,points:12,question:'Igaz vagy hamis: A párhuzamos egyeneseknek nincs közös pontjuk a síkban.',correct:true,explanation:'Igaz. A síneket képzeld el: sosem találkoznak, bármilyen messzire mennek.'},
  {id:'geo_rel_4',category:'Geometriai alapismeretek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Ha "a" merőleges "b"-re, és "b" merőleges "c"-re (a síkban), akkor milyen "a" és "c" viszonya?',options:['Párhuzamosak','Merőlegesek','Metszők','Kitérők'],correct:0,explanation:'Rajzold le! Ha mindkét egyenes ugyanarra a harmadikra merőleges, akkor egymással párhuzamosak.'},
  {id:'geo_rel_5',category:'Geometriai alapismeretek',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mi a jele a merőlegességnek?',options:['⊥','||','/','-'],correct:0,explanation:'A fordított T betű (⊥) jelöli a merőlegességet.'},

  // A kör (5 db)
  {id:'geo_circ_1',category:'Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Mi a kapcsolat a kör sugara (r) és átmérője (d) között?',options:['d = 2 * r','r = 2 * d','d = r + 2','d = r * r'],correct:0,explanation:'Az átmérő a kör egyik felétől a másikig ér a középponton át. Ez pontosan két sugárnyi hossz. d = 2 · r.'},
  {id:'geo_circ_2',category:'Geometriai alapismeretek',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A kör középpontja egyenlő távolságra van a körvonal minden pontjától.',correct:true,explanation:'Igaz, ez a távolság a sugár.'},
  {id:'geo_circ_3',category:'Geometriai alapismeretek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Ha a sugár 5 cm, hány cm az átmérő?',correctAnswer:'10',explanation:'Az átmérő a sugár kétszerese: 5 · 2 = 10 cm.'},
  {id:'geo_circ_4',category:'Geometriai alapismeretek',difficulty:'hard',type:'matching',time:30,points:15,question:'Párosítsd a fogalmakat:',pairs:{'Sugár':'Középpont és körvonal távolsága','Átmérő':'Középponton átmenő húr','Körvonal':'A kör határvonala'},explanation:'A sugár félig ér át, az átmérő teljesen.'},
  {id:'geo_circ_5',category:'Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Hogyan nevezzük a kör két pontját összekötő szakaszt?',options:['Húr','Sugár','Érintő','Szelő'],correct:0,explanation:'Ez a húr. (A leghosszabb húr az átmérő).'},

  // Sokszögek (5 db)
  {id:'geo_poly_1',category:'Geometriai alapismeretek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány csúcsa van egy ötszögnek?',correctAnswer:'5',explanation:'Az ötszögnek 5 oldala és 5 csúcsa van.'},
  {id:'geo_poly_2',category:'Geometriai alapismeretek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány átlója van egy háromszögnek?',correctAnswer:'0',explanation:'Átlót csak nem szomszédos csúcsok közé lehet húzni. A háromszögben minden csúcs szomszédos, így nincs átló.'},
  {id:'geo_poly_3',category:'Geometriai alapismeretek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Melyik négyszögnek egyenlőek az oldalai és derékszögűek a szögei?',options:['Négyzet','Téglalap','Rombusz','Deltoid'],correct:0,explanation:'A négyzet a szabályos négyszög: minden oldala egyenlő és minden szöge 90 fok.'},
  {id:'geo_poly_4',category:'Geometriai alapismeretek',difficulty:'medium',type:'tf',time:25,points:12,question:'Igaz vagy hamis: Minden négyzet téglalap.',correct:true,explanation:'Igaz. A téglalapnak derékszögei vannak. A négyzetnek is, csak neki még az oldalai is egyenlőek.'},
  {id:'geo_poly_5',category:'Geometriai alapismeretek',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Hány átló húzható egy csúcsból egy négyszögben?',correctAnswer:'1',explanation:'A szomszédos csúcsokba oldal vezet, csak a szemközti csúcsba húzhatunk átlót. Négyszögnél ez 1 db.'},

  // -- Geometriai alapismeretek (Elmélet) --
  {id:'geo_theory_1',category:'Geometriai alapismeretek',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A félegyenesnek két végpontja van.',correct:false,explanation:'A félegyenesnek csak egy kezdőpontja van, a másik irányba a végtelenbe nyúlik. A szakasznak van két végpontja.'},
  {id:'geo_theory_2',category:'Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Mit nevezünk a kör húrjának?',options:['A körvonalat','A kör középpontját','A kör két pontját összekötő szakaszt','A körön kívüli egyenest'],correct:2,explanation:'Bármely két pontot összeköthetsz a körvonalon, ez a húr. A leghosszabb húr az átmérő.'},

  // --- ÚJ KATEGÓRIA 3: Szögek ---
  {id:'ang_type_1',category:'Szögek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány fokos a derékszög?',correctAnswer:'90',explanation:'A derékszög (mint a füzet sarka) pontosan 90 fokos.'},
  {id:'ang_type_2',category:'Szögek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány fokos az egyenesszög?',correctAnswer:'180',explanation:'Két derékszög tesz ki egy egyenesszöget: 90 + 90 = 180 fok.'},
  {id:'ang_type_3',category:'Szögek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Milyen szög a 120°?',options:['Tompaszög','Hegyesszög','Derékszög','Homorúszög'],correct:0,explanation:'Mivel nagyobb 90 foknál, de kisebb 180-nál, ezért tompaszög.'},
  {id:'ang_type_4',category:'Szögek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Milyen szög a 45°?',options:['Hegyesszög','Tompaszög','Derékszög','Teljesszög'],correct:0,explanation:'Kisebb mint a derékszög (90°), ezért hegyesszög.'},
  {id:'ang_type_5',category:'Szögek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Melyik szög nagyobb a 180°-nál?',options:['Homorúszög','Tompaszög','Hegyesszög','Egyenesszög'],correct:0,explanation:'A homorúszög "kifordul", nagyobb mint az egyenes (180°), de kisebb mint a teljes kör (360°).'},

  // Mérés és becslés (5 db)
  {id:'ang_meas_1',category:'Szögek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány fokos a teljes szög (egy kör)?',correctAnswer:'360',explanation:'Ha teljesen körbefordulsz, az 360 fok.'},
  {id:'ang_meas_2',category:'Szögek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Melyik eszköz szolgál szögek mérésére?',options:['Szögmérő','Vonalzó','Körző','Hőmérő'],correct:0,explanation:'Ahogy a nevében is benne van: szögmérő.'},
  {id:'ang_meas_3',category:'Szögek',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Hány fokos szöget zárnak be az óra mutatói 3 órakor?',correctAnswer:'90',explanation:'A kör (360°) negyedét teszi meg a nagymutatóhoz képest. 360 : 4 = 90.'},
  {id:'ang_meas_4',category:'Szögek',difficulty:'medium',type:'matching',time:30,points:15,question:'Párosítsd a fokokat a nevekkel:',pairs:{'90°':'Derékszög','180°':'Egyenesszög','360°':'Teljesszög'},explanation:'Alapvető szögfajták.'},
  {id:'ang_meas_5',category:'Szögek',difficulty:'hard',type:'shortnum',time:35,points:18,question:'Hány fokos szöget zárnak be az óra mutatói 6 órakor?',correctAnswer:'180',explanation:'A két mutató egy egyenes vonalat alkot. Ez az egyenesszög, ami 180 fok.'},

  // Háromszög szögei (5 db)
  {id:'ang_tri_1',category:'Szögek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a háromszög belső szögeinek összege?',correctAnswer:'180',explanation:'Bármilyen háromszöget rajzolsz, a belső szögei mindig 180 fokot tesznek ki.'},
  {id:'ang_tri_2',category:'Szögek',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Ha egy háromszög két szöge 60° és 50°, hány fokos a harmadik?',correctAnswer:'70',explanation:'Összesen 180-nak kell lennie. 60 + 50 = 110. A maradék: 180 - 110 = 70.'},
  {id:'ang_tri_3',category:'Szögek',difficulty:'medium',type:'mcq',time:30,points:15,question:'Lehet-e egy háromszögnek két derékszöge?',options:['Nem','Igen','Csak ha nagy','Csak ha kicsi'],correct:0,explanation:'Nem, mert 90 + 90 = 180, így a harmadik szögre nem maradna semmi.'},
  {id:'ang_tri_4',category:'Szögek',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Egy egyenlő oldalú háromszögnek hány fokosak a szögei?',correctAnswer:'60',explanation:'Mivel az oldalak egyenlőek, a szögek is. 180 : 3 = 60 fok.'},
  {id:'ang_tri_5',category:'Szögek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Milyen háromszög az, amelynek van egy tompaszöge?',options:['Tompaszögű','Hegyesszögű','Derékszögű','Szabályos'],correct:0,explanation:'A háromszögeket a legnagyobb szögük alapján nevezzük el.'},

  // -- Szögek (Elmélet) --
  {id:'ang_theory_1',category:'Szögek',difficulty:'easy',type:'mcq',time:20,points:10,question:'Milyen szöget zárnak be a téglalap szomszédos oldalai?',options:['Hegyesszöget','Tompaszöget','Derékszöget','Egyenesszöget'],correct:2,explanation:'A téglalap sarkai "szabályosak", azaz 90 fokosak (derékszögek).'},
  {id:'ang_theory_2',category:'Szögek',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A tompaszög mindig nagyobb, mint a derékszög.',correct:true,explanation:'A hegyesszög kicsi (<90°), a derékszög a "sarok" (90°), a tompaszög pedig ennél nyitottabb (>90°).'},

  // --- ÚJ FELADATOK: Szögek (Bővítés 17-ről 25-re) ---
  {
    id: 'ang_supp_1', category: 'Szögek', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Hány fokos a 120°-os szög kiegészítő szöge (egyenesszögre)?',
    options: ['60°', '90°', '180°', '30°'],
    correct: 0,
    explanation: 'A kiegészítő szögek összege 180°. 180 - 120 = 60.'
  },
  {
    id: 'ang_comp_1', category: 'Szögek', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Hány fokos a 30°-os szög pótszöge (derékszögre)?',
    options: ['60°', '90°', '150°', '45°'],
    correct: 0,
    explanation: 'A pótszögek összege 90°. 90 - 30 = 60.'
  },
  {
    id: 'ang_quad_1', category: 'Szögek', difficulty: 'hard', type: 'shortnum', time: 30, points: 18,
    question: 'Mennyi a négyszögek belső szögeinek összege?',
    correctAnswer: '360',
    explanation: 'Két háromszögre bontható, 2 · 180 = 360 fok.'
  },
  {
    id: 'ang_clock_1', category: 'Szögek', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Hány fokos szöget zárnak be az óra mutatói 9 órakor?',
    options: ['90°', '180°', '270°', '60°'],
    correct: 0,
    explanation: 'Ez ugyanaz, mint 3 órakor, csak a másik oldalon. Derékszöget zárnak be.'
  },
  {
    id: 'ang_calc_1', category: 'Szögek', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Ha egy egyenesszöget (180°) két egyenlő részre osztunk, hány fokosak lesznek?',
    correctAnswer: '90',
    explanation: '180 : 2 = 90. Két derékszöget kapunk.'
  },
  {
    id: 'ang_tri_ext', category: 'Szögek', difficulty: 'hard', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: A háromszög külső szöge egyenlő a két nem mellette fekvő belső szög összegével.',
    correct: true,
    explanation: 'Igaz. Ez egy fontos szabály a geometriában.'
  },
  {
    id: 'ang_match_1', category: 'Szögek', difficulty: 'easy', type: 'matching', time: 30, points: 15,
    question: 'Párosítsd a szögeket a fajtájukkal:',
    pairs: {'10°': 'Hegyesszög', '95°': 'Tompaszög', '180°': 'Egyenesszög'},
    explanation: 'Hegyesszög < 90°, Tompaszög > 90°, Egyenesszög = 180°.'
  },
  {
    id: 'ang_concept_2', category: 'Szögek', difficulty: 'medium', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: Egy háromszögben lehet 3 hegyesszög.',
    correct: true,
    explanation: 'Igaz, például a szabályos háromszögben mindhárom szög 60 fokos (hegyes).'
  },


  // --- ÚJ KATEGÓRIA 4: Kerület, Terület, Térfogat ---
  {id:'meas_rect_1',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:30,points:12,question:'Mennyi a 4 cm és 5 cm oldalú téglalap kerülete (cm)?',correctAnswer:'18',explanation:'A kerület az oldalak hossza körbe: 4 + 5 + 4 + 5 = 18 cm.'},
  {id:'meas_rect_2',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:30,points:12,question:'Mennyi a 4 cm és 5 cm oldalú téglalap területe (cm²)?',correctAnswer:'20',explanation:'Terület = oldal szorozva a szomszédos oldallal. 4 · 5 = 20 cm².'},
  {id:'meas_rect_3',category:'Kerület, Terület, Térfogat',difficulty:'easy',type:'shortnum',time:25,points:10,question:'Mennyi az 5 méter oldalú négyzet kerülete (m)?',correctAnswer:'20',explanation:'A négyzetnek 4 egyforma oldala van. 4 · 5 = 20 m.'},
  {id:'meas_rect_4',category:'Kerület, Terület, Térfogat',difficulty:'easy',type:'shortnum',time:25,points:10,question:'Mennyi az 5 méter oldalú négyzet területe (m²)?',correctAnswer:'25',explanation:'Terület = oldal szorozva oldallal. 5 · 5 = 25 m².'},
  {id:'meas_rect_5',category:'Kerület, Terület, Térfogat',difficulty:'hard',type:'shortnum',time:40,points:18,question:'Egy téglalap területe 24 cm², egyik oldala 4 cm. Hány cm a másik oldala?',correctAnswer:'6',explanation:'A terület (24) a két oldal szorzata. 4 · ? = 24. A hiányzó szám a 6 (mert 24:4=6).'},

  // Átváltás (5 db)
  {id:'meas_conv_1',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Hány dm² 1 m²?',correctAnswer:'100',explanation:'Mivel 1 m = 10 dm, a területnél váltószám: 10 · 10 = 100.'},
  {id:'meas_conv_2',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Hány cm² 1 dm²?',correctAnswer:'100',explanation:'1 dm = 10 cm, ezért 1 dm² = 10 · 10 = 100 cm².'},
  {id:'meas_conv_3',category:'Kerület, Terület, Térfogat',difficulty:'hard',type:'shortnum',time:35,points:18,question:'Hány m² 300 dm²?',correctAnswer:'3',explanation:'A váltószám 100. Mivel kisebb mértékegységről váltunk nagyobbra, osztani kell: 300 : 100 = 3.'},
  {id:'meas_conv_4',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'mcq',time:30,points:15,question:'Melyik nagyobb?',options:['1 m²','1000 cm²','Egyenlőek','Nem tudható'],correct:0,explanation:'1 m² = 10 000 cm². Ez sokkal nagyobb, mint 1000 cm².'},
  {id:'meas_conv_5',category:'Kerület, Terület, Térfogat',difficulty:'hard',type:'tf',time:25,points:12,question:'Igaz vagy hamis: 1 km² = 1000 m²',correct:false,explanation:'Hamis. 1 km = 1000 m. A területnél: 1000 · 1000 = 1 000 000 m².'},

  // Testek tulajdonságai (5 db)
  {id:'meas_body_1',category:'Kerület, Terület, Térfogat',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány lapja van a kockának?',correctAnswer:'6',explanation:'Gondolj a dobókockára! 6 oldala (lapja) van, 1-től 6-ig.'},
  {id:'meas_body_2',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány éle van a téglatestnek?',correctAnswer:'12',explanation:'4 él lent, 4 él fent, és 4 él oldalt a magasságnál. Összesen 12.'},
  {id:'meas_body_3',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány csúcsa van a kockának?',correctAnswer:'8',explanation:'4 sarok (csúcs) van felül, és 4 alul. Összesen 8.'},
  {id:'meas_body_4',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'mcq',time:25,points:12,question:'Milyen alakúak a téglatest lapjai?',options:['Téglalap','Kör','Háromszög','Ötszög'],correct:0,explanation:'Ahogy a neve is mutatja: téglalapok határolják.'},
  {id:'meas_body_5',category:'Kerület, Terület, Térfogat',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: Minden kocka téglatest.',correct:true,explanation:'Igaz. A kocka egy speciális téglatest, aminek minden éle egyenlő.'},

  // Felszín és térfogat (5 db)
  {id:'meas_vol_1',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:35,points:15,question:'Mennyi a 2 cm élhosszúságú kocka térfogata (cm³)?',correctAnswer:'8',explanation:'Térfogat = él · él · él. V = 2 · 2 · 2 = 8.'},
  {id:'meas_vol_2',category:'Kerület, Terület, Térfogat',difficulty:'hard',type:'shortnum',time:40,points:18,question:'Mennyi a 2 cm élhosszúságú kocka felszíne (cm²)?',correctAnswer:'24',explanation:'Egy lap területe 2·2=4. A kockának 6 lapja van. Felszín = 6 · 4 = 24.'},
  {id:'meas_vol_3',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'shortnum',time:35,points:15,question:'Egy téglatest élei 1 cm, 2 cm, 3 cm. Mennyi a térfogata (cm³)?',correctAnswer:'6',explanation:'A három különböző élt kell összeszorozni: 1 · 2 · 3 = 6.'},
  {id:'meas_vol_4',category:'Kerület, Terület, Térfogat',difficulty:'medium',type:'mcq',time:30,points:15,question:'Mivel mérjük a térfogatot?',options:['cm³','cm²','cm','kg'],correct:0,explanation:'A kis 3-as a "köb"-öt jelenti (köbcentiméter), ez a térfogat mértékegysége.'},
  {id:'meas_vol_5',category:'Kerület, Terület, Térfogat',difficulty:'hard',type:'shortnum',time:40,points:20,question:'Hány db 1 cm³-es kiskockából lehet kirakni egy 3 cm oldalú nagykockát?',correctAnswer:'27',explanation:'Az egyik sorban 3, mögötte még 3 sor (az 9), és ebből 3 réteg egymáson. 3 · 3 · 3 = 27.'},

  // --- ÚJ KATEGÓRIA 5: Tizedes törtek ---
  {id:'dec_write_1',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Írd le tizedes törtként: 5 egész 3 tized!',correctAnswer:'5,3',explanation:'Az egészeket tizedesvesszővel választjuk el a tizedektől. 5 egész, vessző, 3 tized.'},
  {id:'dec_write_2',category:'Tizedes törtek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Melyik számjegy áll a századok helyén a 12,456-ban?',options:['5','4','6','2'],correct:0,explanation:'A tizedesvessző után az első a tized, a második a század. Itt az 5-ös áll ott.'},
  {id:'dec_write_3',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi a 0,7 tört alakban? (pl. x/y)',correctAnswer:'7/10',explanation:'A 0,7 kimondva: nulla egész hét tized. Törtként: 7/10.'},
  {id:'dec_write_4',category:'Tizedes törtek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Melyik egyenlő a 3/100-dal?',options:['0,03','0,3','3,00','0,003'],correct:0,explanation:'3 század. A tizedesvessző után a második helyiérték a század. Tehát 0,03.'},
  {id:'dec_write_5',category:'Tizedes törtek',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A tizedesvessző választja el az egészet a törtrésztől.',correct:true,explanation:'Igaz. Balra vannak az egészek, jobbra a törtrészek.'},

  // Összehasonlítás (5 db)
  {id:'dec_comp_1',category:'Tizedes törtek',difficulty:'easy',type:'mcq',time:20,points:10,question:'Melyik nagyobb?',options:['0,5','0,49','Egyenlőek','Nem dönthető el'],correct:0,explanation:'Pótold ki nullával a végüket! 0,50 vagy 0,49? Az 50 nagyobb mint a 49, így a 0,5 a nagyobb.'},
  {id:'dec_comp_2',category:'Tizedes törtek',difficulty:'medium',type:'mcq',time:25,points:12,question:'Melyik a legkisebb szám?',options:['0,09','0,1','0,11','0,9'],correct:0,explanation:'Hasonlítsd össze a tizedeket! 0,0... 0,1... 0,1... 0,9... A 0,09-ben van a legkevesebb tized (0 db), így az a legkisebb.'},
  {id:'dec_comp_3',category:'Tizedes törtek',difficulty:'medium',type:'tf',time:20,points:10,question:'Igaz vagy hamis: 2,3 = 2,30',correct:true,explanation:'Igaz. A tizedes tört végére írt nullák nem változtatják meg az értéket.'},
  {id:'dec_comp_4',category:'Tizedes törtek',difficulty:'hard',type:'matching',time:30,points:15,question:'Rendezd sorba (kicsitől nagyig):',pairs:{'Kicsi':'0,3','Közepes':'0,33','Nagy':'0,4'},explanation:'Pótold ki őket: 0,30 < 0,33 < 0,40.'},
  {id:'dec_comp_5',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Melyik egész szám van legközelebb a 4,9-hez?',correctAnswer:'5',explanation:'A 4,9 csak egy tizedre van az 5-től.'},

  // Műveletek (5 db)
  {id:'dec_op_1',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Mennyi 1,2 + 3,5?',correctAnswer:'4,7',explanation:'Add össze a tizedeket (2+5=7) és az egészeket (1+3=4). Eredmény: 4,7.'},
  {id:'dec_op_2',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Mennyi 5,5 - 1,2?',correctAnswer:'4,3',explanation:'5 tizedből 2 tized az 3 tized. 5 egészből 1 egész az 4 egész. Eredmény: 4,3.'},
  {id:'dec_op_3',category:'Tizedes törtek',difficulty:'hard',type:'shortnum',time:35,points:18,question:'Mennyi 2,5 + 1,8?',correctAnswer:'4,3',explanation:'5+8=13 tized. Ez 1 egész és 3 tized. Az 1 egészet hozzáadjuk a többihez: 2+1+1=4. Eredmény: 4,3.'},
  {id:'dec_op_4',category:'Tizedes törtek',difficulty:'hard',type:'shortnum',time:35,points:18,question:'Mennyi 4 - 0,5?',correctAnswer:'3,5',explanation:'4 egészből elveszünk felet (0,5). Marad 3 és fél, azaz 3,5.'},
  {id:'dec_op_5',category:'Tizedes törtek',difficulty:'medium',type:'mcq',time:30,points:15,question:'Mennyi 0,2 * 3?',options:['0,6','0,5','6','0,06'],correct:0,explanation:'2 tizedet veszünk háromszor. 2 · 3 = 6, tehát 6 tized (0,6).'},

  // Szorzás/Osztás 10-zel, 100-zal (5 db)
  {id:'dec_mul10_1',category:'Tizedes törtek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi 3,45 * 10?',correctAnswer:'34,5',explanation:'Ha 10-zel szorzunk, a tizedesvesszőt egy hellyel JOBBRA toljuk. 3,45 -> 34,5.'},
  {id:'dec_mul10_2',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi 0,7 * 100?',correctAnswer:'70',explanation:'Ha 100-zal szorzunk, a tizedesvesszőt két hellyel JOBBRA toljuk. 0,7 -> 7 -> 70.'},
  {id:'dec_mul10_3',category:'Tizedes törtek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi 12,5 / 10?',correctAnswer:'1,25',explanation:'Ha 10-zel osztunk, a szám kisebb lesz, a vesszőt BALRA toljuk egy hellyel. 12,5 -> 1,25.'},
  {id:'dec_mul10_4',category:'Tizedes törtek',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Mennyi 2 / 100?',correctAnswer:'0,02',explanation:'Két hellyel balra toljuk a vesszőt: 2 -> 0,2 -> 0,02.'},
  {id:'dec_mul10_5',category:'Tizedes törtek',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: Ha 10-zel szorzunk, a szám értéke nő.',correct:true,explanation:'Igaz. A 10-szerese mindig nagyobb (kivéve, ha 0-t szorzunk).'},
  
  // -- Tizedes törtek (Elmélet) --
  {id:'dec_theory_1',category:'Tizedes törtek',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A 2,5 és a 2,500 értéke ugyanaz.',correct:true,explanation:'A tizedesvessző utáni számjegyek végére írt nullák nem változtatják meg a szám értékét.'},
  {id:'dec_theory_2',category:'Tizedes törtek',difficulty:'medium',type:'mcq',time:20,points:12,question:'Melyik irányba mozdul a tizedesvessző, ha 10-zel osztunk?',options:['Jobbra','Balra','Nem mozdul','Eltűnik'],correct:1,explanation:'Ha osztunk, a szám kisebb lesz, ezért a tizedesvesszőt balra toljuk.'},


  // --- ÚJ KATEGÓRIA 6: Mértékegységek ---
  {id:'unit_len_1',category:'Mértékegységek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány mm 1 cm?',correctAnswer:'10',explanation:'A vonalzódon a centik között 10 kis beosztás (mm) van.'},
  {id:'unit_len_2',category:'Mértékegységek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány m 1 km?',correctAnswer:'1000',explanation:'A "kilo" előtag ezret jelent. 1 kilométer = 1000 méter.'},
  {id:'unit_len_3',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány cm 1,5 méter?',correctAnswer:'150',explanation:'1 méter = 100 cm. A másfél méter az 100 + 50 = 150 cm.'},
  {id:'unit_len_4',category:'Mértékegységek',difficulty:'hard',type:'matching',time:30,points:15,question:'Párosítsd:',pairs:{'1000 mm':'1 m','10 dm':'1 m','100 cm':'1 m'},explanation:'Ezek mind ugyanazt a hosszúságot (1 méter) jelentik más-más mértékegységgel.'},
  {id:'unit_len_5',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány méter 30 dm?',correctAnswer:'3',explanation:'10 dm tesz ki 1 métert. 30-ban a 10 megvan 3-szor. Tehát 3 m.'},

  // Tömeg (5 db)
  {id:'unit_mass_1',category:'Mértékegységek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány dkg 1 kg?',correctAnswer:'100',explanation:'1 kilóban 100 deka van. (deka = 10, de itt a váltószám a grammhoz képest értendő, a kg és dkg között 100 a váltó).'},
  {id:'unit_mass_2',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány g 1 dkg?',correctAnswer:'10',explanation:'1 dekagramm = 10 gramm.'},
  {id:'unit_mass_3',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány kg 1 tonna?',correctAnswer:'1000',explanation:'1 tonna nagyon nehéz, pontosan 1000 kg.'},
  {id:'unit_mass_4',category:'Mértékegységek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Mennyi 500 g kg-ban?',options:['0,5 kg','5 kg','50 kg','0,05 kg'],correct:0,explanation:'500 g az 1000 g-nak a fele. Tehát fél kg, vagyis 0,5 kg.'},
  {id:'unit_mass_5',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Hány gramm fél kg?',correctAnswer:'500',explanation:'1 kg = 1000 g. Ennek a fele 500 g.'},

  // Űrtartalom (5 db)
  {id:'unit_cap_1',category:'Mértékegységek',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Hány dl 1 liter?',correctAnswer:'10',explanation:'1 literes üvegbe 10 deciliter fér.'},
  {id:'unit_cap_2',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány cl 1 dl?',correctAnswer:'10',explanation:'1 deciliterben 10 centiliter van.'},
  {id:'unit_cap_3',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Hány liter 1 hl?',correctAnswer:'100',explanation:'A hekto jelentése száz. 1 hektoliter = 100 liter.'},
  {id:'unit_cap_4',category:'Mértékegységek',difficulty:'hard',type:'mcq',time:30,points:15,question:'Melyik a legtöbb?',options:['1 liter','100 dl','1000 ml','10 cl'],correct:1,explanation:'100 dl = 10 liter, ez a legtöbb. (1 liter = 10 dl = 1000 ml).'},
  {id:'unit_cap_5',category:'Mértékegységek',difficulty:'medium',type:'shortnum',time:30,points:15,question:'Hány dl 2,5 liter?',correctAnswer:'25',explanation:'1 liter = 10 dl. 2,5 liter = 2,5 · 10 = 25 dl.'},
  
  // -- Mértékegységek (Elmélet) --
  {id:'unit_theory_1',category:'Mértékegységek',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mit jelent a "kilo" előtag (pl. kilogramm, kilométer)?',options:['Százszoros','Ezerszeres','Tizedrész','Milliomod'],correct:1,explanation:'A görög eredetű "kilo" szó ezret jelent. 1 kg = 1000 g.'},
  {id:'unit_theory_2',category:'Mértékegységek',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mi a terület alapegysége?',options:['méter (m)','négyzetméter (m²)','köbméter (m³)','liter (l)'],correct:1,explanation:'A területet kis négyzetekkel fedjük le, ezért "négyzet"-méter.'},

  // --- ÚJ FELADATOK: Mértékegységek (Bővítés 17-ről 25-re) ---
  {
    id: 'unit_time_1', category: 'Mértékegységek', difficulty: 'easy', type: 'shortnum', time: 20, points: 10,
    question: 'Hány másodperc 1 perc?',
    correctAnswer: '60',
    explanation: '1 percben 60 másodperc van.'
  },
  {
    id: 'unit_time_2', category: 'Mértékegységek', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Hány óra egy nap?',
    correctAnswer: '24',
    explanation: 'Egy nap alatt a Föld egyszer fordul meg a tengelye körül, ez 24 óra.'
  },
  {
    id: 'unit_mix_1', category: 'Mértékegységek', difficulty: 'hard', type: 'mcq', time: 35, points: 18,
    question: 'Mennyi 1 m + 50 cm + 20 mm?',
    options: ['152 cm', '170 cm', '1502 mm', '200 cm'],
    correct: 0,
    explanation: 'Váltsuk át cm-be: 100 cm + 50 cm + 2 cm = 152 cm.'
  },
  {
    id: 'unit_mix_2', category: 'Mértékegységek', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Fél tonna hány kg?',
    options: ['500 kg', '100 kg', '50 kg', '5000 kg'],
    correct: 0,
    explanation: '1 tonna = 1000 kg. Ennek a fele 500 kg.'
  },
  {
    id: 'unit_temp_1', category: 'Mértékegységek', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A víz 100 °C-on forr.',
    correct: true,
    explanation: 'Igaz, normál nyomáson a víz forráspontja 100 Celsius fok.'
  },
  {
    id: 'unit_area_1', category: 'Mértékegységek', difficulty: 'hard', type: 'shortnum', time: 35, points: 15,
    question: 'Hány mm² 1 cm²?',
    correctAnswer: '100',
    explanation: '1 cm = 10 mm. Területnél: 10 · 10 = 100.'
  },
  {
    id: 'unit_liter_1', category: 'Mértékegységek', difficulty: 'medium', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: 1000 ml pontosan 1 liter.',
    correct: true,
    explanation: 'Igaz. A "milli" ezredrészt jelent, tehát 1000 milliliter ad ki 1 litert.'
  },
  {
    id: 'unit_match_1', category: 'Mértékegységek', difficulty: 'easy', type: 'matching', time: 30, points: 15,
    question: 'Párosítsd a mennyiségeket:',
    pairs: {'Tömeg': 'kilogramm', 'Hosszúság': 'méter', 'Űrtartalom': 'liter'},
    explanation: 'Alapvető fizikai mennyiségek és mértékegységeik.'
  }

];

// Helper to shuffle questions using Fisher-Yates algorithm
export function getShuffledQuestions(count: number = 10, category: string = 'all'): Question[] {
  let pool = questionBank;
  if (category && category !== 'all') {
    pool = questionBank.filter(q => q.category === category);
  }
  
  // Create a copy to shuffle
  const shuffled = [...pool];
  
  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}
