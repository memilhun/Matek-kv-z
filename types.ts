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
  // Specific properties based on type
  options?: string[]; // For MCQ
  correct?: number | boolean; // For MCQ (index) or TF (boolean)
  correctAnswer?: string; // For Short/Shortnum
  pairs?: Record<string, string>; // For Matching
  // For Coordinate System questions
  gridConfig?: {
    points: GridPoint[];
    highlight?: string; // Optional: label of point to highlight
  };
}

export interface AnswerRecord {
  questionId: string;
  questionText: string;
  given: any;
  correct: boolean;
  earned: number;
  explanation?: string;
  type: QuestionType;
  pairs?: Record<string, string>; // To show expected pairs in review
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}

export type GameState = 'MENU' | 'PLAYING' | 'FINISHED';