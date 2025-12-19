
import { Question } from '../types';

export const generateDynamicQuestion = (): Question => {
  const types = ['arithmetic', 'fraction_simplification', 'integer_addition'];
  const chosenType = types[Math.floor(Math.random() * types.length)];

  const id = `dynamic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  if (chosenType === 'arithmetic') {
    const a = Math.floor(Math.random() * 90) + 10;
    const b = Math.floor(Math.random() * 90) + 10;
    const op = Math.random() > 0.5 ? '+' : '-';
    const correctAnswer = op === '+' ? a + b : a - b;

    return {
      id,
      category: '1. Természetes számok',
      difficulty: 'easy',
      type: 'shortnum',
      time: 20,
      points: 50,
      isDynamic: true,
      question: `Mennyi ${a} ${op} ${b}?`,
      correctAnswer: correctAnswer.toString(),
      explanation: `Egyszerű alapművelet: ${a} ${op} ${b} = ${correctAnswer}.`
    };
  }

  if (chosenType === 'fraction_simplification') {
    const multipliers = [2, 3, 4, 5, 10];
    const m = multipliers[Math.floor(Math.random() * multipliers.length)];
    const baseNum = Math.floor(Math.random() * 5) + 1;
    const baseDen = Math.floor(Math.random() * 7) + baseNum + 1;
    
    return {
      id,
      category: '5. A törtszámok',
      difficulty: 'medium',
      type: 'short',
      time: 30,
      points: 100,
      isDynamic: true,
      question: `Egyszerűsítsd a(z) ${baseNum * m}/${baseDen * m} törtet a legegyszerűbb alakjára! (x/y)`,
      correctAnswer: `${baseNum}/${baseDen}`,
      explanation: `Mindkét számot elosztottuk ${m}-val/vel. ${baseNum * m}:${m}=${baseNum}, ${baseDen * m}:${m}=${baseDen}.`
    };
  }

  // Alapértelmezett: Egész számok összeadása (negatív tartomány)
  const x = (Math.floor(Math.random() * 20) + 1) * -1;
  const y = Math.floor(Math.random() * 30) - 10;
  const ans = x + y;

  return {
    id,
    category: '9. Az egész számok',
    difficulty: 'medium',
    type: 'shortnum',
    time: 25,
    points: 120,
    isDynamic: true,
    question: `Mennyi (${x}) + (${y})?`,
    correctAnswer: ans.toString(),
    explanation: `A számegyenesen a ${x} értéktől indulva ${y < 0 ? 'balra' : 'jobbra'} lépünk ${Math.abs(y)} egységet. Eredmény: ${ans}.`
  };
};
