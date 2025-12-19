
export type QuestionType = 'mcq' | 'tf' | 'short' | 'shortnum' | 'matching' | 'ordering' | 'set_placement' | 'estimation' | 'plan_selector' | 'coordinate_picker';

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
  // Ordering
  items?: string[];
  correctOrder?: string[];
  // Set Placement
  setA?: { label: string; rule: string };
  setB?: { label: string; rule: string };
  itemsToPlace?: { val: string; correctZone: 'A' | 'B' | 'Both' | 'None' }[];
  // Estimation
  min?: number;
  max?: number;
  correctValue?: number;
  unit?: string;
  tolerance?: number; // percentage
  // Coordinate picker / Grid
  target?: { x: number; y: number; label: string };
  gridConfig?: {
    points: GridPoint[];
    highlight?: string;
  };
}

export type AnswerValue = 
  | string 
  | number 
  | boolean 
  | {k: string, actual: string}[] 
  | string[] 
  | {val: string, zone: string}[]
  | {x: number, y: number};

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

export const STORAGE_KEY_LEADERBOARD = 'mv_lb';
export const GAS_URL = 'https://script.google.com/macros/s/AKfycbzrA2bTOtu7dlVLREcm7zjw4eKF42GVmNBHqqyQwtobbQRE3DQ8ZsCGd-zhmd11pnzgNg/exec';
