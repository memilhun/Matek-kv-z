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

// Full dataset from the original prompt
export const questionBank: Question[] = [
  {id:'int_add_sub_1',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: (−5) + (−9) ?',options:['−14','4','−4','14'],correct:0,explanation:'Két negatív szám összege negatív: −14.'},
  {id:'int_add_sub_2',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: 8 + (−3) ?',options:['5','11','−5','−11'],correct:0,explanation:'8 + (−3) = 5.'},
  {id:'int_add_sub_3',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: (−12) + 7 ?',correctAnswer:'-5',explanation:'−12 + 7 = −5.'},
  {id:'int_add_sub_4',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 15 − (−4) ?',correctAnswer:'19',explanation:'15 − (−4) = 19.'},
  {id:'int_add_sub_5',category:'Egész számok',difficulty:'hard',type:'mcq',time:30,points:18,question:'Mennyi: (−27) + 15 + 12 ?',options:['0','−24','−6','6'],correct:0,explanation:'−27 + 15 + 12 = 0.'},
  {id:'int_add_sub_6',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: (−4) + 10 ?',options:['6','−14','−6','14'],correct:0,explanation:'−4 + 10 = 6.'},
  {id:'int_add_sub_7',category:'Egész számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Mennyi: 3 − (−8) ?',options:['11','−11','5','−5'],correct:0,explanation:'3 − (−8) = 11.'},
  {id:'int_add_sub_8',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: (−20) + (−3) ?',correctAnswer:'-23',explanation:'Két negatív szám összege negatív, −23.'},
  {id:'int_add_sub_9',category:'Egész számok',difficulty:'hard',type:'shortnum',time:30,points:16,question:'Mennyi: (−18) − (−5) ?',correctAnswer:'-13',explanation:'−18 − (−5) = −13.'},
  {id:'int_add_sub_10',category:'Egész számok',difficulty:'hard',type:'mcq',time:30,points:18,question:'Mennyi: 7 + (−15) + 6 ?',options:['-2','2','-14','14'],correct:0,explanation:'7 − 15 + 6 = -2.'},
  {id:'int_add_sub_11',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −7 + 3 ?',options:['−4','4','10','−10'],correct:0,explanation:'−7 + 3 = −4.'},
  {id:'int_add_sub_12',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −2 − 5 ?',options:['−7','7','3','−3'],correct:0,explanation:'−2 − 5 = −7.'},
  {id:'int_add_sub_13',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: −14 + 9 ?',correctAnswer:'-5',explanation:'−14 + 9 = −5.'},
  {id:'int_add_sub_14',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 12 − (−6) ?',correctAnswer:'18',explanation:'12 − (−6) = 18.'},
  {id:'int_add_sub_15',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −5 + (−5) = −10 ?',correct:true,explanation:'−5 + −5 valóban −10.'},
  {id:'int_add_sub_16',category:'Egész számok',difficulty:'medium',type:'tf',time:20,points:12,question:'Igaz vagy hamis: −3 − (−3) = 0 ?',correct:true,explanation:'−3 − (−3) = 0.'},
  {id:'int_add_sub_17',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−2 + 7':'5','−10 + 3':'−7','6 − (−4)':'10'} ,explanation:'Pozitív és negatív összeadása.'},
  {id:'int_add_sub_18',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: 5 + (−8) ?',options:['−3','3','−13','13'],correct:0,explanation:'5 − 8 = −3.'},
  {id:'int_add_sub_19',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: −30 + 12 ?',correctAnswer:'-18',explanation:'−30 + 12 = −18.'},
  {id:'int_add_sub_20',category:'Egész számok',difficulty:'medium',type:'mcq',time:20,points:12,question:'Mennyi: −9 − 4 ?',options:['−13','13','−5','5'],correct:0,explanation:'−9 − 4 = −13.'},
  {id:'int_add_sub_21',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −6 + 2 ?',options:['−4','4','8','−8'],correct:0,explanation:'−6 + 2 = −4.'},
  {id:'int_add_sub_24',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−3 + 4':'1','−12 + 2':'−10','7 − (−2)':'9'},explanation:'Vegyes műveletek.'},
  {id:'int_add_sub_28',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−4 + 9':'5','−7 − 2':'−9','10 − (−5)':'15'},explanation:'Vegyes előjelkezelés.'},
  {id:'int_add_sub_34',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd az eredményeket:',pairs:{'−8 + 3':'−5','−14 + 4':'−10','9 − (−3)':'12'},explanation:'Vegyes műveletek.'},
  {id:'int_add_sub_38',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:16,question:'Párosítsd:',pairs:{'−9 + 6':'−3','−3 − 7':'−10','4 − (−1)':'5'},explanation:'Vegyes előjelkezelés.'},
  {id:'int_add_sub_41',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi: −3 + (−6) ?',options:['−9','9','3','−3'],correct:0,explanation:'−3 − 6 = −9.'},
  {id:'int_add_sub_72',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −18 − (−3) = −15 ?',correct:true,explanation:'−18 + 3 = −15.'},
  {id:'int_add_sub_86',category:'Egész számok',difficulty:'hard',type:'tf',time:25,points:14,question:'Igaz vagy hamis: −3 − 9 = −12 ?',correct:true,explanation:'−3 − 9 valóban −12.'},

  /* Absolute Value and Opposites - Batch 1 */
  {id:'abs_opp_1',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a -15 ellentettje?',correctAnswer:'15',explanation:'Egy negatív szám ellentettje a pozitív párja.'},
  {id:'abs_opp_2',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a -8 abszolút értéke?',correctAnswer:'8',explanation:'A -8 távolsága a nullától 8 egység.'},
  {id:'abs_opp_3',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mi a 42 ellentettje?',options:['-42','42','0','84'],correct:0,explanation:'A pozitív szám ellentettje negatív.'},
  {id:'abs_opp_4',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi |-25| értéke?',options:['25','-25','0','50'],correct:0,explanation:'Az abszolút érték mindig nemnegatív.'},
  {id:'abs_opp_5',category:'Egész számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A -5 ellentettje 5.',correct:true,explanation:'Helyes, -(-5) = 5.'},
  {id:'abs_opp_6',category:'Egész számok',difficulty:'medium',type:'tf',time:25,points:12,question:'Igaz vagy hamis: A -7 abszolút értéke -7.',correct:false,explanation:'Hamis, az abszolút érték sosem negatív. |-7| = 7.'},
  {id:'abs_opp_7',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Párosítsd a számokat az ellentettjükkel:',pairs:{'-2':'2','5':'-5','0':'0'},explanation:'Az ellentett előjele fordított (kivéve a 0).'},
  {id:'abs_opp_8',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Számítsd ki az értékeket:',pairs:{'|-10|':'10','-(-3)':'3','-|4|':'-4'},explanation:'Abszolút érték és ellentett szabályai.'},
  {id:'abs_opp_9',category:'Egész számok',difficulty:'hard',type:'shortnum',time:30,points:15,question:'Mennyi: |-12| + |-3| ?',correctAnswer:'15',explanation:'12 + 3 = 15.'},
  {id:'abs_opp_10',category:'Egész számok',difficulty:'medium',type:'mcq',time:25,points:12,question:'Melyik állítás igaz?',options:['|-5| = 5','|-5| = -5','-5 ellentettje -5','|5| = -5'],correct:0,explanation:'Csak az első állítás helyes.'},

  /* Absolute Value and Opposites - Batch 2 */
  {id:'abs_opp_11',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi: |-13| ?',correctAnswer:'13',explanation:'Az abszolút érték a nullától való távolság.'},
  {id:'abs_opp_12',category:'Egész számok',difficulty:'easy',type:'shortnum',time:20,points:10,question:'Mennyi a 0 ellentettje?',correctAnswer:'0',explanation:'A nulla ellentettje önmaga.'},
  {id:'abs_opp_13',category:'Egész számok',difficulty:'easy',type:'mcq',time:25,points:12,question:'Melyik szám ellentettje a -8?',options:['8','-8','0','1/8'],correct:0,explanation:'A -8 ellentettje 8.'},
  {id:'abs_opp_14',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Számítsd ki: |-5| + |-6|',correctAnswer:'11',explanation:'5 + 6 = 11.'},
  {id:'abs_opp_15',category:'Egész számok',difficulty:'easy',type:'tf',time:20,points:10,question:'Igaz vagy hamis: A nulla abszolút értéke nulla.',correct:true,explanation:'|0| = 0.'},
  {id:'abs_opp_16',category:'Egész számok',difficulty:'medium',type:'mcq',time:25,points:12,question:'Mennyi: -(-10)?',options:['10','-10','0','-1'],correct:0,explanation:'Az ellentett ellentettje az eredeti szám.'},
  {id:'abs_opp_17',category:'Egész számok',difficulty:'medium',type:'matching',time:30,points:15,question:'Számítsd ki:',pairs:{'|-4|':'4','-|2|':'-2','-(-9)':'9'},explanation:'Gyakorold az előjeleket és abszolút értéket.'},
  {id:'abs_opp_18',category:'Egész számok',difficulty:'medium',type:'shortnum',time:25,points:12,question:'Mennyi: 20 − |-5| ?',correctAnswer:'15',explanation:'20 − 5 = 15.'},
  {id:'abs_opp_19',category:'Egész számok',difficulty:'medium',type:'tf',time:20,points:10,question:'Igaz vagy hamis: Bármely negatív egész szám abszolút értéke nagyobb a számnál.',correct:true,explanation:'Pl. |-3| = 3, és 3 > -3.'},
  {id:'abs_opp_20',category:'Egész számok',difficulty:'easy',type:'mcq',time:20,points:10,question:'Mennyi az abszolút értéke a -100-nak?',options:['100','-100','0','1'],correct:0,explanation:'|-100| = 100.'},

  /* Conceptual True/False Questions */
  {id:'concept_tf_1',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha pozitív számból pozitív számot vonunk ki, negatív számot kapunk.',correct:false,explanation:'Nem mindig. Pl. 10 - 2 = 8 (pozitív).'},
  {id:'concept_tf_2',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha pozitív számból az ellentettjét vonjuk ki, pozitív számot kapunk.',correct:true,explanation:'x - (-x) = x + x = 2x, ami pozitív.'},
  {id:'concept_tf_3',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha negatív számból önmagát vonjuk ki, nullát kapunk.',correct:true,explanation:'Bármely számot önmagából kivonva 0-t kapunk.'},
  {id:'concept_tf_4',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha negatív számból az abszolút értékét vonjuk ki, nullát kapunk.',correct:false,explanation:'Pl. -3 - |-3| = -3 - 3 = -6.'},
  {id:'concept_tf_5',category:'Egész számok',difficulty:'medium',type:'tf',time:30,points:15,question:'Igaz vagy hamis: Ha negatív számból az ellentettjét vonjuk ki, negatív számot kapunk.',correct:true,explanation:'Pl. -5 - 5 = -10.'},

  /* Coordinate System (Helymeghatározás) */
  {
    id: 'coord_1', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1, highlight: 'A' },
    question: 'Határozd meg az A pont koordinátáit!',
    options: ['(2; 3)', '(3; 2)', '(-2; 3)', '(2; -3)'],
    correct: 0,
    explanation: 'Az A pont az x-tengelyen 2-nél, az y-tengelyen 3-nál van. A(2; 3).'
  },
  {
    id: 'coord_2', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1, highlight: 'B' },
    question: 'Határozd meg a B pont koordinátáit!',
    options: ['(-4; 1)', '(4; 1)', '(-4; -1)', '(-1; 4)'],
    correct: 0,
    explanation: 'Balra 4 egység, fel 1 egység. B(-4; 1).'
  },
  {
    id: 'coord_3', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1, highlight: 'C' },
    question: 'Határozd meg a C pont koordinátáit!',
    options: ['(-2; -3)', '(-3; -2)', '(2; 3)', '(-2; 3)'],
    correct: 0,
    explanation: 'Harmadik síknegyed: negatív x és negatív y. C(-2; -3).'
  },
  {
    id: 'coord_4', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet1 },
    question: 'Melyik pont található a (3; -2) koordinátán?',
    options: ['A', 'B', 'C', 'D'],
    correct: 3,
    explanation: 'x=3 (jobbra), y=-2 (lefelé). Ez a D pont.'
  },
  {
    id: 'coord_5', category: 'Helymeghatározás', difficulty: 'easy', type: 'tf', time: 30, points: 10,
    gridConfig: { points: gridSet1 },
    question: 'Igaz vagy hamis: Az A és D pontok x koordinátája pozitív.',
    correct: true,
    explanation: 'Igaz, mivel mindkettő az y-tengelytől jobbra helyezkedik el.'
  },
  {
    id: 'coord_6', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet2, highlight: 'P' },
    question: 'Hol található a P pont?',
    options: ['Az x tengelyen', 'Az y tengelyen', 'Az origóban', 'A második síknegyedben'],
    correct: 1,
    explanation: 'A P pont koordinátája (0; 5), tehát az y tengelyen van.'
  },
  {
    id: 'coord_7', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: gridSet2, highlight: 'Q' },
    question: 'Melyik állítás igaz a Q pontra (5; 0)?',
    options: ['Az y tengelyen van', 'Az x tengelyen van', 'Ez az origó', 'Egyik sem'],
    correct: 1,
    explanation: 'Mivel az y koordináta 0, a pont az x tengelyen fekszik.'
  },
  {
    id: 'coord_8', category: 'Helymeghatározás', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    gridConfig: { points: gridSet2, highlight: 'R' },
    question: 'Mi a neve a (0; 0) pontnak?',
    options: ['Középpont', 'Origó', 'Bázis', 'Zéró'],
    correct: 1,
    explanation: 'A koordináta-rendszer kezdőpontja az origó.'
  },
  {
    id: 'coord_9', category: 'Helymeghatározás', difficulty: 'hard', type: 'matching', time: 40, points: 20,
    gridConfig: { points: gridSet1 },
    question: 'Párosítsd a pontokat a síknegyedekkel!',
    pairs: {'A': 'I. negyed', 'B': 'II. negyed', 'C': 'III. negyed'},
    explanation: 'I: (+,+), II: (-,+), III: (-,-), IV: (+,-)'
  },
  {
    id: 'coord_10', category: 'Helymeghatározás', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    gridConfig: { points: [{label:'X',x:-3,y:4}, {label:'Y',x:3,y:4}] },
    question: 'Mekkora a távolság az X(-3; 4) és Y(3; 4) pontok között?',
    options: ['3', '4', '6', '0'],
    correct: 2,
    explanation: 'A távolság a két x koordináta különbsége: 3 - (-3) = 6.'
  },

  /* Fractions (Törtszámok) - Chapter 5 */
  
  // -- Tört értelmezése --
  {
    id: 'frac_concept_1', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Hogy nevezzük a törtvonal alatti számot?',
    options: ['Számláló', 'Nevező', 'Törtvonal', 'Hányados'],
    correct: 1,
    explanation: 'A törtvonal alatti szám a nevező, ami megmutatja, hány egyenlő részre osztottuk az egészet.'
  },
  {
    id: 'frac_concept_2', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Hogy nevezzük a törtvonal feletti számot?',
    options: ['Számláló', 'Nevező', 'Törtvonal', 'Hányados'],
    correct: 0,
    explanation: 'A törtvonal feletti szám a számláló, ami megmutatja, hány darabot veszünk a részekből.'
  },
  {
    id: 'frac_concept_3', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Milyen műveletet jelöl a törtvonal?',
    options: ['Szorzást', 'Összeadást', 'Osztást', 'Kivonást'],
    correct: 2,
    explanation: 'A törtvonal osztást jelöl.'
  },
  {
    id: 'frac_concept_4', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 20, points: 10,
    question: 'Hány ötöd alkot egy egészet?',
    correctAnswer: '5',
    explanation: '5 darab ötöd tesz ki egy egészet (5/5 = 1).'
  },
  {
    id: 'frac_concept_5', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A 4/3 egynél nagyobb tört.',
    correct: true,
    explanation: 'Igaz, mivel a számláló nagyobb, mint a nevező.'
  },
  {
    id: 'frac_concept_6', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 10,
    question: 'Melyik tört értéke pontosan 1?',
    options: ['4/5', '7/7', '8/7', '0/5'],
    correct: 1,
    explanation: 'Ha a számláló és a nevező egyenlő, a tört értéke 1.'
  },

  // -- Vegyes számok --
  {
    id: 'frac_mixed_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik vegyes szám egyenlő a 13/4 törttel?',
    options: ['2 3/4', '3 1/4', '4 1/4', '3 3/4'],
    correct: 1,
    explanation: '13-ban a 4 megvan 3-szor, és marad az 1. Tehát 3 egész 1/4.'
  },
  {
    id: 'frac_mixed_2', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik törttel egyenlő a 2 1/5 vegyes szám?',
    options: ['3/5', '11/5', '10/5', '7/5'],
    correct: 1,
    explanation: '2 * 5 + 1 = 11, tehát 11/5.'
  },
  {
    id: 'frac_mixed_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Írd át vegyes számba: 8/3',
    options: ['2 2/3', '3 1/3', '1 5/3', '2 1/3'],
    correct: 0,
    explanation: '8-ban a 3 megvan 2-szer, maradék 2. Tehát 2 egész 2/3.'
  },
  {
    id: 'frac_mixed_4', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Hány egész van a 15/4 törtben?',
    correctAnswer: '3',
    explanation: '15 osztva 4-gyel az 3, maradék 3.'
  },
  {
    id: 'frac_mixed_5', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik tört egyenlő a 3 1/2 számmal?',
    options: ['7/2', '5/2', '3/2', '4/2'],
    correct: 0,
    explanation: '3 * 2 + 1 = 7, tehát 7/2.'
  },
  {
    id: 'frac_mixed_6', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: Az 5/2 egyenlő 2 és féllel.',
    correct: true,
    explanation: 'Igaz, 5/2 = 2,5 vagy 2 1/2.'
  },

  // -- Bővítés / Egyszerűsítés --
  {
    id: 'frac_simplify_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 15,
    question: 'Egyszerűsítsd a 18/24 törtet a legegyszerűbb alakjára!',
    options: ['9/12', '6/8', '3/4', '2/3'],
    correct: 2,
    explanation: 'A számlálót és a nevezőt is elosztjuk 6-tal: 18:6=3, 24:6=4. Így 3/4-et kapunk.'
  },
  {
    id: 'frac_expand_1', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 10,
    question: 'Melyik szám hiányzik a számlálóból? 3/5 = ?/20',
    correctAnswer: '12',
    explanation: 'A nevezőt 4-gyel szoroztuk (5·4=20), ezért a számlálót is 4-gyel kell: 3·4=12.'
  },
  {
    id: 'frac_simp_2', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Bővítsd a 2/3 törtet 5-tel!',
    options: ['7/8', '10/15', '2/15', '10/3'],
    correct: 1,
    explanation: 'A számlálót és a nevezőt is megszorozzuk 5-tel: 2·5=10, 3·5=15.'
  },
  {
    id: 'frac_simp_3', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 12,
    question: 'Egyszerűsítsd a 6/8 törtet a legegyszerűbb alakjára! (x/y)',
    correctAnswer: '3/4',
    explanation: 'Mindkét szám osztható 2-vel: 6:2=3, 8:2=4.'
  },
  {
    id: 'frac_simp_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik tört NEM egyenlő az 1/2-vel?',
    options: ['2/4', '3/6', '3/5', '5/10'],
    correct: 2,
    explanation: 'A 3/5 nem egyszerűsíthető 1/2-re. A többi igen.'
  },
  {
    id: 'frac_simp_5', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 25, points: 12,
    question: 'Ha 2/5 = x/15, mennyi az x értéke?',
    correctAnswer: '6',
    explanation: 'A nevezőt 3-mal szoroztuk (5->15), így a számlálót is: 2*3=6.'
  },
  {
    id: 'frac_simp_6', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A 10/20 egyszerűsítve 1/2.',
    correct: true,
    explanation: 'Igaz, 10-zel egyszerűsítve 1/2-t kapunk.'
  },

  // -- Összehasonlítás --
  {
    id: 'frac_compare_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik relációjel illik a 2/3 és 3/5 közé?',
    options: ['>', '<', '='],
    correct: 0,
    explanation: 'Közös nevezőre hozzuk (15). 2/3 = 10/15, 3/5 = 9/15. Mivel 10 > 9, ezért 2/3 > 3/5.'
  },
  {
    id: 'frac_comp_2', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Melyik tört a nagyobb: 4/7 vagy 4/9?',
    options: ['4/7', '4/9', 'Egyenlőek'],
    correct: 0,
    explanation: 'Azonos számláló esetén a kisebb nevezőjű tört a nagyobb.'
  },
  {
    id: 'frac_comp_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik a legkisebb szám az alábbiak közül?',
    options: ['1/2', '1/3', '1/4', '1/10'],
    correct: 3,
    explanation: 'Azonos számlálóknál a legnagyobb nevezőjű a legkisebb érték.'
  },
  {
    id: 'frac_comp_4', category: 'Törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 18,
    question: 'Hasonlítsd össze: 3/4 és 5/8',
    options: ['3/4 > 5/8', '3/4 < 5/8', '3/4 = 5/8'],
    correct: 0,
    explanation: '3/4 bővítve 6/8. Mivel 6/8 > 5/8, ezért 3/4 a nagyobb.'
  },
  {
    id: 'frac_comp_5', category: 'Törtszámok', difficulty: 'medium', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: Ha két tört nevezője azonos, a nagyobb számlálójú tört a nagyobb.',
    correct: true,
    explanation: 'Igaz, pl. 5/8 > 3/8.'
  },
  {
    id: 'frac_comp_6', category: 'Törtszámok', difficulty: 'medium', type: 'tf', time: 25, points: 12,
    question: 'Igaz vagy hamis: 1/3 nagyobb mint 1/2.',
    correct: false,
    explanation: 'Hamis, 1/2 (fél) nagyobb mint 1/3 (harmad).'
  },

  // -- Összeadás / Kivonás --
  {
    id: 'frac_add_1', category: 'Törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 10,
    question: 'Mennyi 3/8 + 2/8? (Írd be törtként: x/y)',
    correctAnswer: '5/8',
    explanation: 'Azonos nevezőjű törteket úgy adunk össze, hogy a számlálókat összeadjuk: 3+2=5. Az eredmény 5/8.'
  },
  {
    id: 'frac_sub_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 15,
    question: 'Végezd el a kivonást: 5/6 − 1/3',
    options: ['4/3', '1/2', '2/3', '1/6'],
    correct: 1,
    explanation: 'Közös nevező a 6. 1/3 = 2/6. 5/6 - 2/6 = 3/6, ami egyszerűsítve 1/2.'
  },
  {
    id: 'frac_ops_add_2', category: 'Törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 12,
    question: 'Mennyi 2/9 + 5/9? (törtként: x/y)',
    correctAnswer: '7/9',
    explanation: '2/9 + 5/9 = 7/9.'
  },
  {
    id: 'frac_ops_add_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 15,
    question: 'Mennyi 1/4 + 1/2?',
    options: ['2/6', '3/4', '1/6', '2/4'],
    correct: 1,
    explanation: '1/2 = 2/4. Így 1/4 + 2/4 = 3/4.'
  },
  {
    id: 'frac_ops_sub_3', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 15,
    question: 'Mennyi 1 egészből 2/5? (törtként: x/y)',
    correctAnswer: '3/5',
    explanation: '1 = 5/5. 5/5 - 2/5 = 3/5.'
  },
  {
    id: 'frac_ops_add_4', category: 'Törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 18,
    question: 'Mennyi 1 1/5 + 2 2/5?',
    options: ['3 1/5', '3 3/5', '3 3/10', '4'],
    correct: 1,
    explanation: 'Az egészeket összeadjuk (1+2=3), a törteket is (1/5+2/5=3/5). Eredmény: 3 3/5.'
  },
  {
    id: 'frac_ops_sub_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 35, points: 15,
    question: 'Mennyi 5/8 - 1/4?',
    options: ['4/4', '3/8', '4/8', '1/8'],
    correct: 1,
    explanation: '1/4 = 2/8. Így 5/8 - 2/8 = 3/8.'
  },

  // -- Szorzás / Osztás (természetes számmal) --
  {
    id: 'frac_mult_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi: (2/7) · 3?',
    options: ['6/7', '6/21', '2/21', '5/7'],
    correct: 0,
    explanation: 'Törtet természetes számmal úgy szorzunk, hogy a számlálót szorozzuk: 2·3=6. Az eredmény 6/7.'
  },
  {
    id: 'frac_div_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi: (8/9) : 2?',
    options: ['16/9', '4/9', '8/18', '4/4.5'],
    correct: 1,
    explanation: 'Törtet úgy osztunk természetes számmal, hogy a számlálót osztjuk (ha lehet): 8:2=4. Az eredmény 4/9.'
  },
  {
    id: 'frac_ops_mult_2', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 12,
    question: 'Mennyi 3/10 · 3? (törtként: x/y)',
    correctAnswer: '9/10',
    explanation: '3 · 3 = 9, a nevező marad 10. Eredmény: 9/10.'
  },
  {
    id: 'frac_ops_div_2', category: 'Törtszámok', difficulty: 'medium', type: 'short', time: 25, points: 12,
    question: 'Mennyi 6/7 : 2? (törtként: x/y)',
    correctAnswer: '3/7',
    explanation: '6 : 2 = 3, a nevező marad 7. Eredmény: 3/7.'
  },
  {
    id: 'frac_ops_mult_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi 2 · (2/5)?',
    options: ['4/5', '4/10', '2/10', '2/5'],
    correct: 0,
    explanation: '2 · 2 = 4, a nevező marad 5. Eredmény: 4/5.'
  },
  {
    id: 'frac_ops_div_3', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 25, points: 10,
    question: 'Igaz vagy hamis: A 4/5 : 2 eredménye 2/5.',
    correct: true,
    explanation: '4 : 2 = 2, tehát 2/5.'
  },
  {
    id: 'frac_ops_mult_4', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 12,
    question: 'Mennyi 1/2 · 4?',
    correctAnswer: '2',
    explanation: '4/2, ami egyenlő 2 egésszel.'
  },

  // -- Törtrész számítás --
  {
    id: 'frac_part_1', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 10,
    question: 'Mennyi 20-nak a 3/4 része?',
    correctAnswer: '15',
    explanation: '20-at elosztjuk 4-gyel (5), majd megszorozzuk 3-mal (15).'
  },
  {
    id: 'frac_part_2', category: 'Törtszámok', difficulty: 'easy', type: 'shortnum', time: 25, points: 10,
    question: 'Mennyi 60-nak az 1/3 része?',
    correctAnswer: '20',
    explanation: '60 : 3 = 20.'
  },
  {
    id: 'frac_part_3', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: 'Hány perc 3/4 óra?',
    correctAnswer: '45',
    explanation: '1 óra = 60 perc. 60 : 4 = 15, 15 * 3 = 45 perc.'
  },
  {
    id: 'frac_part_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Mennyi 24-nek a 2/3 része?',
    options: ['12', '16', '18', '8'],
    correct: 1,
    explanation: '24 : 3 = 8, 8 * 2 = 16.'
  },
  {
    id: 'frac_part_5', category: 'Törtszámok', difficulty: 'hard', type: 'shortnum', time: 35, points: 18,
    question: 'Ha egy osztály 20 fős és 1/5-e hiányzik, hányan hiányoznak?',
    correctAnswer: '4',
    explanation: '20 : 5 = 4 fő.'
  },
  {
    id: 'frac_part_6', category: 'Törtszámok', difficulty: 'easy', type: 'tf', time: 25, points: 10,
    question: 'Igaz vagy hamis: 100-nak a felének a fele 25.',
    correct: true,
    explanation: '100 fele 50, annak a fele 25.'
  },
  {
    id: 'frac_part_7', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: '1 kg 1/2 része hány gramm?',
    correctAnswer: '500',
    explanation: '1 kg = 1000 g. Ennek a fele 500 g.'
  },

  // -- A törtek helye a számegyenesen (NEW - Based on Pages 57-58) --
  {
    id: 'frac_line_1', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Milyen hosszú egységet érdemes választani a számegyenesen, ha az 1/2, 1/3 és 1/6 törteket akarjuk ábrázolni?',
    options: ['6 egységet', '10 egységet', '5 egységet', '4 egységet'],
    correct: 0,
    explanation: 'A 2, 3 és 6 legkisebb közös többszöröse a 6, így 6 egység hosszú szakasszal mindegyik pontosan ábrázolható.'
  },
  {
    id: 'frac_line_2', category: 'Törtszámok', difficulty: 'easy', type: 'mcq', time: 20, points: 10,
    question: 'Hol helyezkedik el a 7/6 a számegyenesen az 1-hez képest?',
    options: ['Balra (kisebb)', 'Jobbra (nagyobb)', 'Ugyanott', 'A 0-nál'],
    correct: 1,
    explanation: 'A 7/6 nagyobb, mint 1 (hiszen 6/6 az 1), ezért az 1-től jobbra helyezkedik el.'
  },
  {
    id: 'frac_line_3', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 15,
    question: 'Melyik szám van legközelebb a 0-hoz a számegyenesen: 1/2, 2/5, 7/10?',
    options: ['1/2', '2/5', '7/10', 'Egyforma távol vannak'],
    correct: 1,
    explanation: 'Tizedekre váltva: 1/2 = 5/10, 2/5 = 4/10, 7/10 = 7/10. A 4/10 (2/5) a legkisebb, így az van legközelebb a 0-hoz.'
  },
  {
    id: 'frac_line_4', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Melyik tört jelöli ugyanazt a pontot a számegyenesen, mint a 2/3?',
    options: ['4/6', '3/2', '5/6', '1/3'],
    correct: 0,
    explanation: 'A 2/3-at 2-vel bővítve 4/6-ot kapunk, tehát ugyanazt a pontot jelölik.'
  },
  {
    id: 'frac_line_5', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 35, points: 15,
    question: 'Ha a számegyenesen a 0 és az 1 távolsága 10 cm, hány cm távolságra van a 0-tól a 2/5 pont?',
    correctAnswer: '4',
    explanation: 'A 10 cm-t elosztjuk 5-tel (2 cm), majd megszorozzuk 2-vel. Így 4 cm-re lesz.'
  },
  {
    id: 'frac_line_6', category: 'Törtszámok', difficulty: 'hard', type: 'mcq', time: 40, points: 18,
    question: 'Egy könyv felét elolvastad. A maradék 3/4-e hányad része az egész könyvnek?',
    options: ['3/8', '1/4', '1/2', '3/4'],
    correct: 0,
    explanation: 'A maradék az 1/2. Ennek a 3/4 része: (1/2) · (3/4) = 3/8.'
  },
  {
    id: 'frac_line_7', category: 'Törtszámok', difficulty: 'medium', type: 'tf', time: 20, points: 10,
    question: 'Igaz vagy hamis: A 13/10 a számegyenesen az 1 és a 2 között helyezkedik el.',
    correct: true,
    explanation: 'Igaz, mert 13/10 = 1,3, ami nagyobb mint 1 és kisebb mint 2.'
  },
  {
    id: 'frac_line_8', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'Melyik tört jelöli ugyanazt a pontot, mint az 1 egész 1/2?',
    options: ['3/2', '2/3', '1/2', '4/2'],
    correct: 0,
    explanation: '1 egész 1/2 = 3/2.'
  },
  {
    id: 'frac_line_9', category: 'Törtszámok', difficulty: 'medium', type: 'shortnum', time: 30, points: 15,
    question: 'Ha egy 12 cm-es szakaszt 3 egyenlő részre osztunk, hány cm a 2/3 része?',
    correctAnswer: '8',
    explanation: '12 cm harmada 4 cm. Ennek a kétszerese 8 cm.'
  },
  {
    id: 'frac_line_10', category: 'Törtszámok', difficulty: 'medium', type: 'mcq', time: 25, points: 12,
    question: 'A 4/3 és a 3/4 közül melyik van jobbra a számegyenesen?',
    options: ['4/3', '3/4', 'Egy helyen vannak', 'Nem dönthető el'],
    correct: 0,
    explanation: 'A 4/3 nagyobb mint 1, míg a 3/4 kisebb mint 1. A nagyobb számok jobbra vannak.'
  }
];

// Helper to shuffle questions
export function getShuffledQuestions(count: number = 10, category: string = 'all'): Question[] {
  let pool = questionBank;
  if (category && category !== 'all') {
    pool = questionBank.filter(q => q.category === category);
  }
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}