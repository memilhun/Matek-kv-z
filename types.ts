
export type QuestionType = 'mcq' | 'tf' | 'short' | 'shortnum' | 'matching';

export interface GridPoint {
  label: string;
  x: number;
  y: number;
}

export interface Question {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: QuestionType;
  time: number;
  points: number;
  question: string;
  explanation?: string;
  options?: string[];
  correct?: number | boolean;
  correctAnswer?: string;
  pairs?: Record<string, string>;
  gridConfig?: {
    points: GridPoint[];
    highlight?: string;
  };
}

export type AnswerValue = string | number | boolean | {k: string, actual: string}[];

export interface AnswerRecord {
  questionId: string;
  questionText: string;
  given: AnswerValue;
  correct: boolean;
  earned: number;
  explanation?: string;
  type: QuestionType;
  category?: string; // Bővítve a statisztikához
  timeSpent?: number; // Bővítve a statisztikához
  hintUsed?: boolean;
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
  isGlobal?: boolean;
}

export interface GlobalStats {
  totalCompletions: number;
  avgScore: number;
  categorySuccess: Record<string, number>; // Category -> Success %
  typeSuccess: Record<string, number>;     // Type -> Success %
  difficultQuestions: {id: string, text: string, failRate: number}[];
}

export type GameState = 'MENU' | 'PLAYING' | 'FINISHED' | 'STATS';

export const STORAGE_KEY_LEADERBOARD = 'mv_lb';
// Ez a helyőrző a Google Apps Script URL-jéhez
export const GAS_URL = 'https://script.google.com/macros/s/AKfycbyWtF9JUQBcSGYVQ9e809e8dORXg8u0t64JnMlsj2rknZ1AhnES5W72tGjv98m2-YmpIA/exec'; 
