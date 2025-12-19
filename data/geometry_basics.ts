
import { Question } from '../types';

export const geometryBasicsQuestions: Question[] = [
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
  {id:'geo_poly_5',category:'2. Geometriai alapismeretek',difficulty:'hard',type:'shortnum',time:30,points:200,question:'Hány átló húzható egy csúcsból egy négyszögben?',correctAnswer:'1',explanation:'A szomszedos csucsokba oldal vezet, csak a szemközti csúcsba húzhatunk átlót. Négyszögnél ez 1 db.'},
  {id:'geo_theory_1',category:'2. Geometriai alapismeretek',difficulty:'easy',type:'tf',time:20,points:50,question:'Igaz vagy hamis: A félegyenesnek két végpontja van.',correct:false,explanation:'A félegyenesnek csak egy kezdőpontja van, a másik irányba a végtelenbe nyúlik. A szakasznak van két végpontja.'},
  {id:'geo_theory_2',category:'2. Geometriai alapismeretek',difficulty:'medium',type:'mcq',time:25,points:100,question:'Mit nevezünk a kör húrjának?',options:['A körvonalat','A kör középpontját','A kör két pontját összekötő szakaszt','A körön kívüli egyenest'],correct:2,explanation:'Bármely két pontot összeköthetsz a körvonalon, ez a húr. A leghosszabb húr az átmérő.'},
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
  }
];
