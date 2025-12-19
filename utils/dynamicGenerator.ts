
import { Question } from '../types';

// Segédfüggvény római számokhoz
function toRoman(num: number): string {
  const lookup: { [key: string]: number } = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let roman = '';
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

// Segédfüggvény tizedesvesszős formázáshoz (magyar szabvány)
const fmt = (n: number) => n.toString().replace('.', ',');

// Térkép a kategóriák és a generálható típusok között
const categoryToTypes: Record<string, string[]> = {
  '1. Természetes számok': ['rounding', 'roman_numerals', 'arithmetic'],
  '3. Mérés, statisztika': ['unit_conversion'],
  '4. A szögek': ['triangle_angle'],
  '5. A törtszámok': ['calc_fraction_part', 'fraction_simplification'],
  '6. A téglalap': ['rectangle_geometry'],
  '8. A tizedes törtek': ['decimal_shift'],
  '9. Az egész számok': ['integer_addition'],
  '10. Helymeghatározás': ['coordinate_reflection']
};

export const generateDynamicQuestion = (requestedCategory?: string): Question | null => {
  let types: string[] = [];
  
  if (requestedCategory && categoryToTypes[requestedCategory]) {
    // Ha konkrét kategóriát kértek, csak az abból valókat használjuk
    types = categoryToTypes[requestedCategory];
  } else if (!requestedCategory || requestedCategory === 'all') {
    // Ha vegyes vagy nincs megadva, az összes típust használjuk
    types = Object.values(categoryToTypes).flat();
  } else {
    // Ha olyan kategóriát kértek, amihez nincs generátor
    return null;
  }

  const chosenType = types[Math.floor(Math.random() * types.length)];
  const id = `dyn_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;

  switch (chosenType) {
    case 'unit_conversion': {
      const units = [
        { name: 'hossz', list: ['mm', 'cm', 'dm', 'm'], factors: [1, 10, 100, 1000] },
        { name: 'tömeg', list: ['g', 'dkg', 'kg'], factors: [1, 10, 1000] },
        { name: 'űrtartalom', list: ['ml', 'cl', 'dl', 'l'], factors: [1, 10, 100, 1000] }
      ];
      const category = units[Math.floor(Math.random() * units.length)];
      const idx1 = Math.floor(Math.random() * category.list.length);
      let idx2 = Math.floor(Math.random() * category.list.length);
      while (idx1 === idx2) idx2 = Math.floor(Math.random() * category.list.length);

      const u1 = category.list[idx1];
      const u2 = category.list[idx2];
      const val1 = [1, 2, 5, 10, 20, 50, 100, 150, 250, 500][Math.floor(Math.random() * 10)];
      
      const valInBase = val1 * category.factors[idx1];
      const val2 = valInBase / category.factors[idx2];

      return {
        id, category: '3. Mérés, statisztika', difficulty: 'medium', type: 'shortnum', time: 30, points: 100, isDynamic: true,
        question: `Hány ${u2} van ${val1} ${u1}-ben?`,
        correctAnswer: fmt(val2),
        explanation: `${val1} ${u1} az ${fmt(val2)} ${u2}. (Váltószám: ${fmt(category.factors[idx1]/category.factors[idx2])})`
      };
    }

    case 'rounding': {
      const val = Math.floor(Math.random() * 8999) + 101;
      const modes = [
        { label: 'tízesekre', factor: 10 },
        { label: 'százasokra', factor: 100 },
        { label: 'ezreseket', factor: 1000 }
      ];
      const mode = modes[Math.floor(Math.random() * (val > 1000 ? 3 : 2))];
      const rounded = Math.round(val / mode.factor) * mode.factor;

      return {
        id, category: '1. Természetes számok', difficulty: 'easy', type: 'shortnum', time: 25, points: 80, isDynamic: true,
        question: `Kerekítsd a ${val} számot ${mode.label}!`,
        correctAnswer: rounded.toString(),
        explanation: `A(z) ${mode.label} kerekített érték: ${rounded}.`
      };
    }

    case 'decimal_shift': {
      const val = (Math.floor(Math.random() * 900) + 10) / 10;
      const op = Math.random() > 0.5 ? '*' : '/';
      const factor = Math.random() > 0.5 ? 10 : 100;
      const ans = op === '*' ? val * factor : val / factor;

      return {
        id, category: '8. A tizedes törtek', difficulty: 'medium', type: 'shortnum', time: 30, points: 100, isDynamic: true,
        question: `Mennyi ${fmt(val)} ${op === '*' ? '·' : ':'} ${factor}?`,
        correctAnswer: fmt(ans),
        explanation: `${op === '*' ? 'Szorzásnál jobbra' : 'Osztásnál balra'} toljuk a vesszőt annyi hellyel, amennyi nulla van (${factor === 10 ? '1' : '2'}).`
      };
    }

    case 'triangle_angle': {
      const a = Math.floor(Math.random() * 70) + 20;
      const b = Math.floor(Math.random() * 70) + 20;
      const c = 180 - a - b;

      return {
        id, category: '4. A szögek', difficulty: 'medium', type: 'shortnum', time: 35, points: 120, isDynamic: true,
        question: `Egy háromszög két szöge ${a}° és ${b}°. Hány fokos a harmadik szöge?`,
        correctAnswer: c.toString(),
        explanation: `A belső szögek összege 180°. 180 - (${a} + ${b}) = 180 - ${a+b} = ${c}.`
      };
    }

    case 'rectangle_geometry': {
      const a = Math.floor(Math.random() * 12) + 2;
      const b = Math.floor(Math.random() * 12) + 2;
      const isArea = Math.random() > 0.5;
      const ans = isArea ? a * b : 2 * (a + b);

      return {
        id, category: '6. A téglalap', difficulty: 'medium', type: 'shortnum', time: 35, points: 100, isDynamic: true,
        question: `Egy téglalap oldalai ${a} cm és ${b} cm. Mennyi a ${isArea ? 'területe (cm²)' : 'kerülete (cm)'}?`,
        correctAnswer: ans.toString(),
        explanation: isArea ? `Terület = a · b = ${a} · ${b} = ${ans} cm².` : `Kerület = 2 · (a + b) = 2 · (${a} + ${b}) = ${ans} cm.`
      };
    }

    case 'calc_fraction_part': {
      const den = [2, 3, 4, 5, 10][Math.floor(Math.random() * 5)];
      const num = Math.floor(Math.random() * (den - 1)) + 1;
      const base = den * (Math.floor(Math.random() * 10) + 1);
      const ans = (base / den) * num;

      return {
        id, category: '5. A törtszámok', difficulty: 'medium', type: 'shortnum', time: 35, points: 120, isDynamic: true,
        question: `Mennyi ${base}-nak a(z) ${num}/${den} része?`,
        correctAnswer: ans.toString(),
        explanation: `Előbb elosztjuk a nevezővel: ${base} : ${den} = ${base/den}. Majd szorozzuk a számlálóval: ${base/den} · ${num} = ${ans}.`
      };
    }

    case 'roman_numerals': {
      const arab = [1, 4, 5, 9, 10, 14, 19, 24, 40, 50, 90, 100, 400, 500, 900, 1000][Math.floor(Math.random() * 16)] + Math.floor(Math.random() * 5);
      const roman = toRoman(arab);

      return {
        id, category: '1. Természetes számok', difficulty: 'medium', type: 'short', time: 30, points: 100, isDynamic: true,
        question: `Írd le római számmal a(z) ${arab} számot!`,
        correctAnswer: roman,
        explanation: `A(z) ${arab} római számmal: ${roman}.`
      };
    }

    case 'coordinate_reflection': {
      const x = Math.floor(Math.random() * 9) - 4;
      const y = Math.floor(Math.random() * 9) - 4;
      const axis = Math.random() > 0.5 ? 'x' : 'y';
      const ansX = axis === 'y' ? -x : x;
      const ansY = axis === 'x' ? -y : y;

      return {
        id, category: '10. Helymeghatározás', difficulty: 'hard', type: 'short', time: 40, points: 150, isDynamic: true,
        question: `Tükrözd a P(${x}; ${y}) pontot az ${axis} tengelyre! Mi lesz az új pont? (Írd így: x; y)`,
        correctAnswer: `${ansX}; ${ansY}`,
        explanation: `${axis === 'x' ? 'X tengelyre tükrözésnél az x marad, az y előjele vált.' : 'Y tengelyre tükrözésnél az y marad, az x előjele vált.'} Eredmény: (${ansX}; ${ansY}).`
      };
    }

    case 'arithmetic': {
      const a = Math.floor(Math.random() * 90) + 10;
      const b = Math.floor(Math.random() * 90) + 10;
      const op = Math.random() > 0.5 ? '+' : '-';
      const correctAnswer = op === '+' ? a + b : a - b;

      return {
        id, category: '1. Természetes számok', difficulty: 'easy', type: 'shortnum', time: 20, points: 50, isDynamic: true,
        question: `Mennyi ${a} ${op} ${b}?`,
        correctAnswer: correctAnswer.toString(),
        explanation: `Egyszerű alapművelet: ${a} ${op} ${b} = ${correctAnswer}.`
      };
    }

    case 'fraction_simplification': {
      const multipliers = [2, 3, 4, 5, 10];
      const m = multipliers[Math.floor(Math.random() * multipliers.length)];
      const baseNum = Math.floor(Math.random() * 5) + 1;
      const baseDen = Math.floor(Math.random() * 7) + baseNum + 1;
      
      return {
        id, category: '5. A törtszámok', difficulty: 'medium', type: 'short', time: 30, points: 100, isDynamic: true,
        question: `Egyszerűsítsd a(z) ${baseNum * m}/${baseDen * m} törtet a legegyszerűbb alakjára! (x/y)`,
        correctAnswer: `${baseNum}/${baseDen}`,
        explanation: `Mindkét számot elosztottuk ${m}-val/vel. ${baseNum * m}:${m}=${baseNum}, ${baseDen * m}:${m}=${baseDen}.`
      };
    }

    case 'integer_addition':
    default: {
      const x = (Math.floor(Math.random() * 20) + 1) * -1;
      const y = Math.floor(Math.random() * 30) - 10;
      const ans = x + y;

      return {
        id, category: '9. Az egész számok', difficulty: 'medium', type: 'shortnum', time: 25, points: 120, isDynamic: true,
        question: `Mennyi (${x}) + (${y})?`,
        correctAnswer: ans.toString(),
        explanation: `A számegyenesen a ${x} értéktől indulva ${y < 0 ? 'balra' : 'jobbra'} lépünk ${Math.abs(y)} egységet. Eredmény: ${ans}.`
      };
    }
  }
};
