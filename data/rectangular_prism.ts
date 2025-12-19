
import { Question } from '../types';

export const rectangularPrismQuestions: Question[] = [
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
  {
    id: 'plan_body_vol_q', category: '7. A téglatest', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Téglatest térfogata (a=2, b=3, c=4). Melyik a terv?',
    options: ['2 · 3 · 4', '2 + 3 + 4', '(2+3+4) · 4', '2 · 3 + 4'],
    correct: 0,
    explanation: 'V = a · b · c.'
  }
];
