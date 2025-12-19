
import { Question } from '../types';

export const rectangleQuestions: Question[] = [
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
  {
    id: 'plan_area_q', category: '6. A téglalap', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Egy 8 m hosszú and 5 m széles szoba alapterületét számoljuk. Melyik a jó terv?',
    options: ['8 · 5', '8 + 5', '(8 + 5) · 2', '8 · 8'],
    correct: 0,
    explanation: 'Terület = hosszúság szorozva szélességgel.'
  },
  {
    id: 'plan_perim_q', category: '6. A téglalap', difficulty: 'medium', type: 'plan_selector', time: 40, points: 150,
    question: 'Melyik tervvel számoljuk ki egy 6 cm and 4 cm oldalú téglalap kerületét?',
    options: ['(6 + 4) · 2', '6 · 4', '6 + 4', '6 · 4 · 2'],
    correct: 0,
    explanation: 'Kerület = (a + b) · 2.'
  }
];
