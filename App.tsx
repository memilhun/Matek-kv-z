import React, { useState, useEffect, useRef, useMemo } from 'react';
import { GameState, Question, AnswerRecord, LeaderboardEntry, AnswerValue } from './types';
import { questionBank, getShuffledQuestions } from './data';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { Leaderboard } from './components/Leaderboard';

const APP_VERSION = '1.0.0';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answerHistory, setAnswerHistory] = useState<AnswerRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnswerProcessedRef = useRef(false);

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(questionBank.map(q => q.category)));
  }, []);

  // Load leaderboard data
  useEffect(() => {
    if (gameState === 'MENU') {
      try {
        const lb = JSON.parse(localStorage.getItem('mv_lb') || '[]');
        if (Array.isArray(lb)) {
          setLeaderboardData(lb);
        } else {
          setLeaderboardData([]);
        }
      } catch (e) {
        console.error("Hiba a ranglista betöltésekor:", e);
        setLeaderboardData([]);
      }
    }
  }, [gameState]);

  // Start Game Logic
  const startGame = () => {
    const qSet = getShuffledQuestions(10, selectedCategory);
    if (qSet.length === 0) {
      alert("Ebben a kategóriában sajnos nincsenek kérdések.");
      return;
    }
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
        // If time is about to hit 0 (or is 1 going to 0)
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          
          // Use setTimeout to break out of the state update cycle 
          // and trigger handleTimeOut safely
          setTimeout(() => {
            handleTimeOut();
          }, 0);
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeOut = () => {
    // Automatically submit a wrong answer/no answer with 0 points
    handleAnswer(null, false);
  };

  const handleAnswer = (given: AnswerValue | null, correct: boolean) => {
    if (isAnswerProcessedRef.current) return;
    isAnswerProcessedRef.current = true;

    if (timerRef.current) clearInterval(timerRef.current);
    
    const currentQ = questions[currentIndex];
    
    // Calculate points centrally in App
    let points = 0;
    if (correct) {
      // Matching questions handled slightly differently in terms of 'correct' bool,
      // but if the QuizScreen says it's correct (or perfect), we give full points + time bonus.
      // If matching was partial, QuizScreen might need more complex logic, 
      // but for now we assume 'correct' means full success or calculated partial success logic needs to be here.
      // Since QuizScreen handles the partial matching logic internally before calling this, 
      // we'll stick to the base formula:
      
      // Note: For matching, if we want partial points, the 'correct' flag is insufficient. 
      // Ideally QuizScreen calculates 'base points' and we add time bonus.
      // But per instruction to move logic:
      // If it is matching type, we might want to check the 'given' array.
      // For simplicity and fixing the bug, we assume 'correct' means the user got points.
      // To strictly follow the fix:
      
      points = currentQ.points + Math.max(0, timeLeft);
      
      // Adjustment for matching if it wasn't a perfect match? 
      // The original code calculated points inside QuizScreen based on ratio.
      // To replicate that strictly here would require calculating ratio from `given` if type is matching.
      if (currentQ.type === 'matching' && Array.isArray(given) && currentQ.pairs) {
        let correctCount = 0;
        const givenPairs = given as {k:string, actual:string}[];
        givenPairs.forEach(p => {
           if (currentQ.pairs && currentQ.pairs[p.k] === p.actual) correctCount++;
        });
        const total = Object.keys(currentQ.pairs).length;
        const ratio = total > 0 ? correctCount / total : 0;
        const base = Math.round(currentQ.points * ratio);
        points = base + Math.max(0, timeLeft);
      }
    }

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

    // No automatic transition. User must click "Next" in QuizScreen.
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      startQuestionTimer(questions[nextIndex].time);
    } else {
      setGameState('FINISHED');
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
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold transition-colors ${timeLeft < 5 && timeLeft > 0 ? 'border-red-500 text-red-500 animate-pulse' : 'border-blue-500/30 text-slate-300'}`}>
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

            {/* Toplist Display on Start Screen */}
            <div className="pt-4 border-t border-white/10">
              <Leaderboard entries={leaderboardData} />
            </div>
            
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
            onNext={handleNext}
            isLastQuestion={currentIndex === questions.length - 1}
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