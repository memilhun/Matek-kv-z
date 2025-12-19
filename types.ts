
export type QuestionType = 
  | 'mcq' 
  | 'tf' 
  | 'short' 
  | 'shortnum' 
  | 'matching' 
  | 'ordering' 
  | 'set_placement' 
  | 'estimation' 
  | 'plan_selector' 
  | 'coordinate_picker';

export interface GridPoint {
  label: string;
  x: number;
  y: number;
}

interface BaseQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  time: number;
  points: number;
  question: string;
  explanation?: string;
  isDynamic?: boolean;
  gridConfig?: {
    points: GridPoint[];
    highlight?: string;
  };
}

export type Question = BaseQuestion & (
  | { type: 'mcq' | 'plan_selector'; options: string[]; correct: number; }
  | { type: 'tf'; correct: boolean; }
  | { type: 'short' | 'shortnum'; correctAnswer: string; }
  | { type: 'matching'; pairs: Record<string, string>; }
  | { type: 'ordering'; items: string[]; correctOrder: string[]; }
  | { type: 'set_placement'; setA: { label: string; rule: string }; setB: { label: string; rule: string }; itemsToPlace: { val: string; correctZone: string }[]; }
  | { type: 'estimation'; min: number; max: number; correctValue: number; unit: string; tolerance?: number; }
  | { type: 'coordinate_picker'; target: { x: number; y: number; label: string }; }
);

export type CoordinateValue = { x: number; y: number };
export type PairValue = { k: string; actual: string }[];
export type SetPlacementValue = { val: string; zone: string }[];

export type AnswerValue = 
  | string 
  | number 
  | boolean 
  | PairValue 
  | string[] 
  | SetPlacementValue
  | CoordinateValue
  | null;

export interface AnswerRecord {
  questionId: string;
  questionText: string;
  given: AnswerValue;
  correct: boolean;
  earned: number;
  explanation?: string;
  type: QuestionType;
  category?: string;
  timeSpent?: number;
  hintUsed?: boolean;
  isDynamic?: boolean;
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
  categorySuccess: Record<string, number>;
  typeSuccess: Record<string, number>;
  difficultQuestions: {id: string, text: string, failRate: number}[];
}

export type GameState = 'MENU' | 'PLAYING' | 'FINISHED' | 'STATS';

// Verziózott kulcs a biztonságos helyi tároláshoz
export const STORAGE_KEY_LEADERBOARD = 'mv_lb_v2.1_stable';
export const GAS_URL = 'https://script.google.com/macros/s/AKfycbzrA2bTOtu7dlVLREcm7zjw4eKF42GVmNBHqqyQwtobbQRE3DQ8ZsCGd-zhmd11pnzgNg/exec';
