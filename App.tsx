
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { GameState, Question, AnswerRecord, LeaderboardEntry, AnswerValue, STORAGE_KEY_LEADERBOARD } from './types';
import { questionBank, getShuffledQuestions } from './data';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { Leaderboard } from './components/Leaderboard';
import { StatisticsScreen } from './components/StatisticsScreen';

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
        const lb = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADERBOARD) || '[]');
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
    isAnswerProcessedRef.current = false;

    // Use Date.now() for accurate timing to prevent drift
    const endTime = Date.now() + seconds * 1000;

    timerRef.current = setInterval(() => {
      const now = Date.now();
      const diff = Math.ceil((endTime - now) / 1000);

      if (diff <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeLeft(0);
        
        // Use setTimeout to break out of the state update cycle 
        setTimeout(() => {
          handleTimeOut();
        }, 0);
      } else {
        setTimeLeft(diff);
      }
    }, 250); // Check more frequently than 1s to ensure visual responsiveness
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
      points = currentQ.points + Math.max(0, timeLeft);
      
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
      <header className="p-4 md:p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setGameState('MENU')}>
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
      <main className="flex-1 p-4 md:p-6 w-full max-w-6xl mx-auto flex flex-col justify-center">
        
        {gameState === 'MENU' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in w-full">
            
            {/* Left Column: Actions */}
            <div className="lg:col-span-2 space-y-6 flex flex-col">
              
              {/* Game Config Card */}
              <div className="bg-slate-800 p-6 md:p-8 rounded-2xl border border-blue-500/20 shadow-xl flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Új Játék Indítása</h2>
                    <p className="text-slate-400 text-sm">Válassz témakört és kezdődjön a kihívás!</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase text-slate-500 font-bold mb-2 ml-1">Témakör</label>
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-all cursor-pointer hover:bg-slate-900/80"
                    >
                      <option value="all">🎲 Minden kategória (Vegyes)</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          Topic: {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={startGame}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold py-5 rounded-xl shadow-lg shadow-blue-900/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    Indítás
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                  </button>
                  
                  <div className="text-center text-xs text-slate-500 mt-2">
                    A játék 10 véletlenszerű kérdést tartalmaz.
                  </div>
                </div>
              </div>

              {/* Stats Card (as Button) */}
              <button 
                onClick={() => setGameState('STATS')}
                className="bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all text-left group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">Adatbázis és Statisztika</h3>
                     <p className="text-slate-400 text-sm">Böngészd a feladatokat és nézd meg az eloszlást.</p>
                   </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-2xl font-black text-slate-200">{questionBank.length}</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Feladat</div>
                </div>
              </button>

            </div>

            {/* Right Column: Leaderboard */}
            <div className="lg:col-span-1 h-full">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 h-full">
                <Leaderboard entries={leaderboardData} />
              </div>
            </div>
          </div>
        )}

        {gameState === 'STATS' && (
          <StatisticsScreen 
            questions={questionBank}
            onBack={() => setGameState('MENU')}
          />
        )}

        {gameState === 'PLAYING' && questions.length > 0 && (
          <QuizScreen 
            key={questions[currentIndex].id}
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
      
      {/* Footer */}
      {gameState === 'MENU' && (
        <footer className="text-center p-4 text-xs text-slate-600">
           v{APP_VERSION} &bull; Matematika gyakorló 5. osztályosoknak
        </footer>
      )}
    </div>
  );
}
