
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

export class QuestionFactory {
  private static validatedBank: Question[] | null = null;

  static validate(q: Question): boolean {
    const qId = q.id;
    if (!qId || !q.question || !q.type || !q.category || !q.difficulty) {
      console.warn(`Hiányzó alapvető mező a kérdésnél (ID: ${qId || 'unknown'})`);
      return false;
    }

    switch (q.type) {
      case 'mcq':
      case 'plan_selector':
        if (!q.options || q.options.length === 0 || typeof q.correct !== 'number') {
          console.warn(`Érvénytelen MCQ/Plan kérdés (ID: ${qId})`);
          return false;
        }
        break;
      case 'tf':
        if (typeof q.correct !== 'boolean') {
          console.warn(`Érvénytelen Igaz/Hamis kérdés (ID: ${qId})`);
          return false;
        }
        break;
      case 'short':
      case 'shortnum':
        if (!q.correctAnswer) {
          console.warn(`Hiányzó válasz a ShortAnswer kérdésnél (ID: ${qId})`);
          return false;
        }
        break;
      case 'ordering':
        if (!q.items || !q.correctOrder || q.items.length !== q.correctOrder.length) {
          console.warn(`Érvénytelen Ordering kérdés (ID: ${qId})`);
          return false;
        }
        break;
      case 'matching':
        if (!q.pairs || Object.keys(q.pairs).length === 0) {
          console.warn(`Érvénytelen Matching kérdés (ID: ${qId})`);
          return false;
        }
        break;
      case 'estimation':
        if (typeof q.correctValue !== 'number' || typeof q.min !== 'number' || typeof q.max !== 'number') {
          console.warn(`Érvénytelen Estimation kérdés (ID: ${qId})`);
          return false;
        }
        break;
      case 'set_placement':
        if (!q.itemsToPlace || !q.setA || !q.setB) {
          console.warn(`Érvénytelen SetPlacement kérdés (ID: ${qId})`);
          return false;
        }
        break;
      case 'coordinate_picker':
        if (!q.target) {
          console.warn(`Hiányzó célpont a CoordinatePicker kérdésnél (ID: ${qId})`);
          return false;
        }
        break;
    }
    return true;
  }

  static getBank(): Question[] {
    if (!this.validatedBank) {
      this.validatedBank = rawQuestionBank.filter(q => this.validate(q));
    }
    return this.validatedBank;
  }
}

export const questionBank = QuestionFactory.getBank();

export function getShuffledQuestions(count: number = 10, category: string = 'all'): Question[] {
  let pool = questionBank;
  if (category && category !== 'all') {
    pool = questionBank.filter(q => q.category === category);
  }
  
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}
