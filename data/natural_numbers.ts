
import { Question } from '../types';

export const naturalNumberQuestions: Question[] = [
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
  {id:'int_theory_1',category:'1. Természetes számok',difficulty:'easy',type:'mcq',time:20,points:50,question:'Mit jelent a számok írásában a helyiérték?',options:['A számjegy alakja','A számjegy helye a számban','A számjegy színe','A szám hossza'],correct:1,explanation:'Ugyanaz a számjegy mást ér, ha hátul áll (egyes), vagy ha elöl (pl. ezres). Ezt nevezzük helyiértéknek.'},
  {id:'int_theory_2',category:'1. Természetes számok',difficulty:'medium',type:'tf',time:20,points:100,question:'Igaz vagy hamis: A 0 (nulla) természetes szám.',correct:true,explanation:'Igen, a természetes számok a 0, 1, 2, 3... és így tovább a végtelenig.'},
  {id:'int_theory_3',category:'1. Természetes számok',difficulty:'medium',type:'mcq',time:20,points:100,question:'Melyik műveletnél cserélhetjük fel a számokat (kommutativitás)?',options:['Kivonásnál','Osztásnál','Összeadásnál','Hatványozásnál'],correct:2,explanation:'5 + 3 ugyanannyi, mint 3 + 5. De a kivonásnál ez nem igaz.'},
  {id:'nat_pv_1',category:'1. Természetes számok',difficulty:'easy',type:'shortnum',time:25,points:50,question:'Melyik számjegy áll a tízezresek helyén a 452 719 számban?',correctAnswer:'5',explanation:'A helyiértékek jobbról balra: egyes, tízes, százas, ezres, tízezres. A tízezresek helyén az 5 áll.'},
  {id:'nat_pv_2',category:'1. Természetes számok',difficulty:'medium',type:'mcq',time:30,points:100,question:'Hogyan írjuk le számjegyekkel: hárommillió-ötszázezer?',options:['3 500 000','3 050 000','300 500','35 000 000'],correct:0,explanation:'3 millió és 500 ezer. Tehát: 3 500 000.'},
  {id:'nat_pv_3',category:'1. Természetes számok',difficulty:'hard',type:'mcq',time:30,points:200,question:'Melyik számában a legnagyobb a 7-es helyiértéke?',options:['7 240','3 750','9 170','2 007'],correct:0,explanation:'A 7 240-ben ezresek helyén van (értéke 7000), a többiben kevesebb. Az alaki érték mindegyikben ugyanaz (7).'},
  {id:'nat_pv_4',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Hány darab tízezres van 1 millióban?',correctAnswer:'100',explanation:'1 millióban 10 db százezer van, és minden százezerben 10 db tízezer. 10 · 10 = 100.'},
  {id:'nat_pv_5',category:'1. Természetes számok',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A legnagyobb háromjegyű szám a 999.',correct:true,explanation:'Igaz. A rákövetkező szám az 1000, ami már négyjegyű.'},
  {id:'nat_round_1',category:'1. Természetes számok',difficulty:'easy',type:'shortnum',time:20,points:50,question:'Kerekítsd a 458-at tízesre!',correctAnswer:'460',explanation:'A kerekítendő jegy mögött 8 áll. Mivel ez 5 vagy annál nagyobb, felfelé kerekítünk 460-ra.'},
  {id:'nat_round_2',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Kerekítsd a 12 345-öt ezresre!',correctAnswer:'12000',explanation:'Az ezresek helyén álló számjegy mögött 3-as van. Mivel ez kisebb 5-nél, lefelé kerekítünk (a számjegy marad, a vége nullázódik).'},
  {id:'nat_round_3',category:'1. Természetes számok',difficulty:'medium',type:'mcq',time:30,points:100,question:'Melyik szám kerekített értéke 500 (százasra kerekítve)?',options:['449','551','490','560'],correct:2,explanation:'449 -> 400 (4 miatt); 551 -> 600 (5 miatt); 490 -> 500 (9 miatt); 560 -> 600 (6 miatt).'},
  {id:'nat_round_4',category:'1. Természetes számok',difficulty:'hard',type:'tf',time:25,points:200,question:'Igaz vagy hamis: A 999 tizesre kerekítve 1000.',correct:true,explanation:'Igaz. A 9-es miatt felfelé kerekítünk. A 99 tízesből 100 tízes lesz, ami 1000.'},
  {id:'nat_round_5',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi 249 tízesre kerekítve?',correctAnswer:'250',explanation:'A végén lévő 9-es miatt felfelé kerekítünk: 250.'},
  {id:'nat_roman_1',category:'1. Természetes számok',difficulty:'medium',type:'shortnum',time:25,points:100,question:'Mennyi a római MCXL értéke arab számokkal?',correctAnswer:'1140',explanation:'M=1000, C=100. XL=40 (az X az L előtt van, tehát kivonjuk). Összeg: 1000+100+40=1140.'},
  {id:'nat_roman_2',category:'1. Természetes számok',difficulty:'easy',type:'mcq',time:25,points:50,question:'Melyik római szám jelöli az 50-et?',options:['L','C','D','X'],correct:0,explanation:'L = 50. (C=100, D=500, X=10).'},
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
    id: 'plan_multi_q', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 50, points: 200,
    question: 'Vettem 3 füzetet (egyenként 200 Ft) and egy tollat (500 Ft). Mennyit fizettem? Terv:',
    options: ['3 · 200 + 500', '(3 + 500) · 200', '3 · (200 + 500)', '200 + 500'],
    correct: 0,
    explanation: 'A füzetek ára (3*200) plusz a toll ára (500).'
  },
  {
    id: 'plan_diff_q', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: 'A 100 and 40 különbségét szorozd meg 2-vel! Melyik a jó kifejezés?',
    options: ['(100 - 40) · 2', '100 - 40 · 2', '100 · 2 - 40', '(100 + 40) · 2'],
    correct: 0,
    explanation: 'A különbséget (zárójel) kell megszorozni.'
  },
  {
    id: 'plan_remain_q', category: '1. Természetes számok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: '50 almát 6 fős csoportokba osztunk. Hány marad ki? Terv:',
    options: ['50 - (50 : 6) · 6', '50 : 6', '50 - 6', '50 · 6'],
    correct: 0,
    explanation: 'Az egészből kivonjuk a teli csoportok (8*6=48) számát.'
  },
  {
    id: 'ord_nat_q', category: '1. Természetes számok', difficulty: 'easy', type: 'ordering', time: 30, points: 100,
    question: 'Rendezd növekvő sorrendbe a számokat!',
    items: ['102', '98', '120', '89', '111'],
    correctOrder: ['89', '98', '102', '111', '120'],
    explanation: 'Alapvető nagyság szerinti sorrend.'
  }
];
