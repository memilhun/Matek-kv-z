
import { Question } from '../types';

export const angleQuestions: Question[] = [
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
  {id:'ang_tri_3',category:'4. A szögek',difficulty:'medium',type:'mcq',time:30,points:100,question:'Lehet-e egy háromszögnek két derékszöge?',options:['Nem','Igen','Csak ha nagy','Csak ha kicsi'],correct:0,explanation:'Nem, because 90 + 90 = 180, így a harmadik szögre nem maradna semmi.'},
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
  }
];
