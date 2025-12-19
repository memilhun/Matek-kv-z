
import { Question } from '../types';

export const decimalQuestions: Question[] = [
  {
    id: 'ord_mixed_1', category: '8. A tizedes törtek', difficulty: 'hard', type: 'ordering', time: 50, points: 200,
    question: 'Rendezd növekvő sorrendbe a számokat!',
    items: ['1/2', '0,6', '1/4', '0,25', '0,8'],
    correctOrder: ['1/4', '0,25', '1/2', '0,6', '0,8'],
    explanation: 'Tizedes törtként: 0,25; 0,25; 0,5; 0,6; 0,8. Az 1/4 és a 0,25 egyenlőek.'
  },
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
  {id:'dec_op_1',category:'8. A tizedes törtek',difficulty:'medium',type:'shortnum',time:30,points:100,question:'Mennyi 1,2 + 3,5?',correctAnswer:'4,7',explanation:'Add össze a tizedeket (2+5=7) and az egészeket (1+3=4). Eredmény: 4,7.'},
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
  {
    id: 'ord_dec_q', category: '8. A tizedes törtek', difficulty: 'medium', type: 'ordering', time: 40, points: 150,
    question: 'Rendezd csökkenő sorrendbe!',
    items: ['0,1', '0,01', '1,1', '0,11', '1,01'],
    correctOrder: ['1,1', '1,01', '0,11', '0,1', '0,01'],
    explanation: 'Pótold ki nullákkal fejben: 1,10 > 1,01 > 0,11 > 0,10 > 0,01.'
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
  }
];
