import React, { useState, useEffect, useRef, useMemo } from 'react';
import { GameState, Question, AnswerRecord } from './types';
import { questionBank, getShuffledQuestions } from './data';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';

const APP_VERSION = '1.0.0';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answerHistory, setAnswerHistory] = useState<AnswerRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnswerProcessedRef = useRef(false);

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(questionBank.map(q => q.category)));
  }, []);

  // Start Game Logic
  const startGame = () => {
    const qSet = getShuffledQuestions(10, selectedCategory);
    setQuestions(qSet);
    setScore(0);
    setCurrentIndex(0);
    setAnswerHistory([]);
    setGameState('PLAYING');
    startQuestionTimer(qSet[0]?.time || 30);
  };

  const startQuestionTimer = (seconds: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(seconds);
    
    // Reset processed flag for the new question
    isAnswerProcessedRef.current = false;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const newValue = prev - 1;
        if (newValue <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return newValue;
      });
    }, 1000);
  };

  // Monitor timer for timeout
  useEffect(() => {
    if (timeLeft === 0 && gameState === 'PLAYING' && !isAnswerProcessedRef.current) {
      handleTimeOut();
    }
  }, [timeLeft, gameState]);

  const handleTimeOut = () => {
    // Automatically submit a wrong answer/no answer with 0 points
    handleAnswer(null, false, 0);
  };

  const handleAnswer = (given: any, correct: boolean, points: number) => {
    if (isAnswerProcessedRef.current) return;
    isAnswerProcessedRef.current = true;

    if (timerRef.current) clearInterval(timerRef.current);
    
    const currentQ = questions[currentIndex];
    
    setScore(prev => prev + points);
    
    // Record history
    setAnswerHistory(prev => [...prev, {
      questionId: currentQ.id,
      questionText: currentQ.question,
      type: currentQ.type,
      explanation: currentQ.explanation,
      pairs: currentQ.pairs, // for matching type review
      given: given === null ? "Idő lejárt" : given,
      correct,
      earned: points
    }]);

    // Move to next
    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        startQuestionTimer(questions[nextIndex].time);
      }, 1000); // 1s delay to see feedback
    } else {
      setTimeout(() => {
        setGameState('FINISHED');
      }, 1000);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-100 flex flex-col">
      {/* Header */}
      <header className="p-4 md:p-6 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg shadow-blue-500/20">
            M5
          </div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight">Matematika 5.</h1>
        </div>
        
        {gameState === 'PLAYING' && (
          <div className="flex items-center gap-4">
            <div className="bg-slate-800/80 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2">
              <span className="text-xs uppercase text-slate-400 font-bold">Pont</span>
              <span className="font-mono text-blue-400 font-bold">{score}</span>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold transition-colors ${timeLeft < 5 ? 'border-red-500 text-red-500 animate-pulse' : 'border-blue-500/30 text-slate-300'}`}>
              {timeLeft}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 w-full max-w-5xl mx-auto flex flex-col justify-center">
        
        {gameState === 'MENU' && (
          <div className="text-center space-y-8 animate-fade-in max-w-lg mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 pb-2">
                Matek Kvíz
              </h2>
              <p className="text-slate-400 text-lg">
                Gyakorold a negatív számokat és az alapműveleteket egy interaktív kihívásban!
              </p>
            </div>

            <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm space-y-4">
              <div className="flex justify-between text-sm text-slate-400 border-b border-white/5 pb-2">
                <span>Kérdések</span>
                <span className="text-white font-semibold">10 db</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400 border-b border-white/5 pb-2">
                <span>Időkeret</span>
                <span className="text-white font-semibold">Változó</span>
              </div>
              
              <div className="pt-2">
                <label className="block text-sm text-left text-slate-400 mb-2 font-medium">Kategória választása</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="all">Minden kategória</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold py-5 rounded-2xl shadow-xl shadow-blue-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Kvíz Indítása
            </button>
            
            <div className="text-xs text-slate-500 mt-8 font-mono">
              v{APP_VERSION}
            </div>
          </div>
        )}

        {gameState === 'PLAYING' && questions.length > 0 && (
          <QuizScreen 
            question={questions[currentIndex]}
            qIndex={currentIndex}
            totalQ={questions.length}
            timeLeft={timeLeft}
            onAnswer={handleAnswer}
          />
        )}

        {gameState === 'FINISHED' && (
          <ResultScreen 
            score={score}
            totalQuestions={questions.length}
            history={answerHistory}
            onRestart={() => setGameState('MENU')}
          />
        )}
        
      </main>
    </div>
  );
}