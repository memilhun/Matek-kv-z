
import { Question } from '../types';

export const fractionQuestions: Question[] = [
  {
    id: 'plan_frac_1', category: '5. A törtszámok', difficulty: 'hard', type: 'plan_selector', time: 45, points: 200,
    question: '24 szeletes torta 3/8 részét megették. Hány szelet MARADT? Válaszd ki a helyes tervet!',
    options: ['24 - (24 : 8 · 3)', '24 : 8 · 3', '24 - 8 · 3', '24 : 3 · 8'],
    correct: 0,
    explanation: 'Előbb kiszámoljuk a 3/8 részt (24:8*3), majd ezt kivonjuk az egészből (24).'
  },
  {
    id: 'ord_frac_1', category: '5. A törtszámok', difficulty: 'medium', type: 'ordering', time: 40, points: 150,
    question: 'Rendezd növekvő sorrendbe az alábbi törteket!',
    items: ['1/2', '1/4', '3/4', '1/8'],
    correctOrder: ['1/8', '1/4', '1/2', '3/4'],
    explanation: 'Közös nevezőre hozva (8): 4/8, 2/8, 6/8, 1/8. Sorrend: 1/8, 2/8 (1/4), 4/8 (1/2), 6/8 (3/4).'
  },
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
    id: 'frac_part_4', category: '5. A törtszámok', difficulty: 'medium', type: 'mcq', time: 30, points: 100,
    question: 'Mennyi 24-nak a 2/3 része?',
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
    question: 'Ha a 12 cm-es szakaszt 3 egyenlő részre osztunk, hány cm a 2/3 része?',
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
    explanation: 'Szorozd meg a számlálót and a nevezőt is 2-vel!'
  },
  {
    id: 'short_3_q', category: '5. A törtszámok', difficulty: 'easy', type: 'short', time: 25, points: 100,
    question: 'Mennyi 1/2 + 1/4? (x/y alakban)',
    correctAnswer: '3/4',
    explanation: '2/4 + 1/4 = 3/4.'
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
