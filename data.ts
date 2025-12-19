
import { Question } from './types';
import { naturalNumberQuestions } from './data/natural_numbers';
import { geometryBasicsQuestions } from './data/geometry_basics';
import { measurementQuestions } from './data/measurement';
import { angleQuestions } from './data/angles';
import { fractionQuestions } from './data/fractions';
import { rectangleQuestions } from './data/rectangle';
import { rectangularPrismQuestions } from './data/rectangular_prism';
import { decimalQuestions } from './data/decimals';
import { integerQuestions } from './data/integers';
import { coordinateQuestions } from './data/coordinates';
import { generateDynamicQuestion } from './utils/dynamicGenerator';

const rawQuestionBank: Question[] = [
  ...naturalNumberQuestions,
  ...geometryBasicsQuestions,
  ...measurementQuestions,
  ...angleQuestions,
  ...fractionQuestions,
  ...rectangleQuestions,
  ...rectangularPrismQuestions,
  ...decimalQuestions,
  ...integerQuestions,
  ...coordinateQuestions
];

function validateQuestion(q: Question): boolean {
  if (!q.id || !q.question || !q.type || !q.category || !q.difficulty) return false;
  switch (q.type) {
    case 'mcq':
    case 'plan_selector':
      return Array.isArray(q.options) && q.options.length > 0 && typeof q.correct === 'number';
    case 'tf':
      return typeof q.correct === 'boolean';
    case 'short':
    case 'shortnum':
      return !!q.correctAnswer;
    case 'ordering':
      return Array.isArray(q.items) && Array.isArray(q.correctOrder) && q.items.length === q.correctOrder.length;
    case 'matching':
      return !!q.pairs && Object.keys(q.pairs).length > 0;
    case 'estimation':
      return typeof q.correctValue === 'number' && typeof q.min === 'number' && typeof q.max === 'number';
    case 'set_placement':
      return !!q.itemsToPlace && !!q.setA && !!q.setB;
    case 'coordinate_picker':
      return !!q.target;
    default:
      return true;
  }
}

export const questionBank: Question[] = rawQuestionBank.filter(validateQuestion);

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getShuffledQuestions(count: number = 10, category: string = 'all'): Question[] {
  let pool = category === 'all' 
    ? questionBank 
    : questionBank.filter(q => q.category === category);
  
  let selected = shuffle(pool).slice(0, count);

  // Dinamikus feladatok beszúrása (most már minden kategóriára, ahol van generátor)
  if (selected.length >= 2) {
    const requestedCat = category === 'all' ? undefined : category;
    
    // Megpróbálunk 2 dinamikus feladatot generálni az adott kategóriához
    const dyn1 = generateDynamicQuestion(requestedCat);
    const dyn2 = generateDynamicQuestion(requestedCat);

    // Csak akkor cseréljük le az utolsó elemeket, ha a generátor adott vissza érvényes feladatot
    if (dyn1) selected[selected.length - 1] = dyn1;
    if (dyn2) selected[selected.length - 2] = dyn2;
    
    // Újrakeverjük, hogy ne mindig a végén legyenek a dinamikusak
    selected = shuffle(selected);
  }

  return selected;
}
