
import { Question } from '../types';
import { gridSet1, gridSet2 } from './shared';

export const coordinateQuestions: Question[] = [
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
    id: 'pick_coord_1', category: '10. Helymeghatározás', difficulty: 'medium', type: 'coordinate_picker', time: 30, points: 150,
    question: 'Jelöld be a koordináta-rendszerben a P(3; -2) pontot!',
    target: { x: 3, y: -2, label: 'P' },
    explanation: 'Lépj 3-at jobbra az x tengelyen, majd 2-t lefelé az y tengely mentén.'
  },
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
    explanation: 'Y tengelyre tükrözéskor az y koordináta marad, az x az ellentettjére változik. (5; 1).'
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
    question: 'Indulj az (1;1) pontból! Lépj 2-t fel and 1-et balra! Hol vagy?',
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
  }
];
