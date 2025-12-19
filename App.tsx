
import React, { useState, useMemo, useCallback, useRef } from 'react';
import { GameState, Question, AnswerRecord, AnswerValue } from './types';
import { questionBank, getShuffledQuestions } from './data';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { StatisticsScreen } from './components/StatisticsScreen';
import { Leaderboard } from './components/Leaderboard';
import { useTimer } from './hooks/useTimer';
import { GameProvider, useGameContext } from './context/GameContext';
import { calculateEarnedPoints } from './utils/scoreCalculator';
import { PlayIcon, StatsIcon, BookIcon } from './components/Icons';
import { APP_VERSION } from './constants';

function AppContent() {
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0); 
  const [answerHistory, setAnswerHistory] = useState<AnswerRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const { leaderboardData, isLoadingLb, refreshLeaderboard } = useGameContext();
  const isAnswerProcessedRef = useRef(false);

  const handleTimeOut = useCallback(() => {
    if (gameState === 'PLAYING' && !isAnswerProcessedRef.current) {
      handleAnswer(null, false, false);
    }
  }, [gameState]);

  const { timeLeft } = useTimer({
    initialTime: questions[currentIndex]?.time || 30,
    onTimeOut: handleTimeOut,
    isActive: gameState === 'PLAYING' && !isAnswerProcessedRef.current
  });

  const categories = useMemo(() => {
    return Array.from(new Set(questionBank.map(q => q.category)))
      .sort((a, b) => {
        const numA = parseInt(a.split('.')[0]) || 0;
        const numB = parseInt(b.split('.')[0]) || 0;
        return numA - numB;
      });
  }, []);

  const startGame = () => {
    const qSet = getShuffledQuestions(10, selectedCategory);
    if (qSet.length === 0) { alert("Nincs kérdés ebben a témakörben."); return; }
    setQuestions(qSet);
    setScore(0);
    setStreak(0);
    setCurrentIndex(0);
    setAnswerHistory([]);
    isAnswerProcessedRef.current = false;
    setGameState('PLAYING');
  };

  const handleAnswer = (given: AnswerValue | null, correct: boolean, hintUsed: boolean) => {
    if (isAnswerProcessedRef.current) return;
    isAnswerProcessedRef.current = true;
    
    const currentQ = questions[currentIndex];
    const timeSpent = currentQ.time - timeLeft;

    let currentStreak = correct ? streak + 1 : 0;
    setStreak(currentStreak);

    const earnedPoints = correct 
      ? calculateEarnedPoints(currentQ.points, currentStreak, timeLeft, hintUsed) 
      : 0;

    setScore(prev => prev + earnedPoints);
    setAnswerHistory(prev => [...prev, {
      questionId: currentQ.id,
      questionText: currentQ.question,
      category: currentQ.category,
      type: currentQ.type,
      explanation: currentQ.explanation,
      given: given === null ? "Lejárt idő" : given,
      correct,
      earned: earnedPoints,
      hintUsed,
      timeSpent
    }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      isAnswerProcessedRef.current = false;
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameState('FINISHED');
      refreshLeaderboard();
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-100 flex flex-col overflow-x-hidden">
      <header className="p-4 md:p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setGameState('MENU')} aria-label="Vissza a főmenübe">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">M5</div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight hidden xs:block">Matematika 5.</h1>
        </div>
        
        {gameState === 'PLAYING' && (
          <div className="flex items-center gap-2 sm:gap-4" role="status" aria-live="polite">
            <div className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-white/5 flex flex-col items-center">
              <span className="text-[10px] uppercase text-slate-500 font-bold leading-none mb-1">Pont</span>
              <span className="font-mono text-blue-400 font-bold leading-none">{score}</span>
            </div>
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-all ${timeLeft < 5 && timeLeft > 0 ? 'border-red-500 text-red-500 animate-pulse-fast' : 'border-blue-500/30 text-slate-300'}`}
              role="timer"
              aria-label={`Hátralévő idő: ${timeLeft} másodperc`}
            >
              {timeLeft}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 p-4 md:p-6 w-full max-w-6xl mx-auto flex flex-col">
        {gameState === 'MENU' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in w-full">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-800 p-6 md:p-10 rounded-2xl border border-blue-500/20 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                    <PlayIcon />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Új Gyakorlás</h2>
                    <p className="text-slate-400 text-sm">Válassz egy fejezetet!</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase text-slate-500 font-black mb-2 ml-1" id="category-label">Témakör Kiválasztása</label>
                    <select 
                      value={selectedCategory} 
                      onChange={(e) => setSelectedCategory(e.target.value)} 
                      aria-labelledby="category-label"
                      className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="all">🎲 Vegyes feladatok (Összes)</option>
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  
                  <button 
                    onClick={startGame} 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold py-5 rounded-2xl shadow-xl shadow-blue-900/30 transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Indítás
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setGameState('STATS')} 
                  className="bg-slate-800/50 hover:bg-slate-800 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all flex items-center gap-4 text-left group"
                >
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                    <StatsIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">Statisztika</h3>
                    <p className="text-slate-500 text-xs">Eredmények elemzése</p>
                  </div>
                </button>
                
                <div className="bg-slate-800/30 p-5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                    <BookIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">{questionBank.length} Feladat</h3>
                    <p className="text-slate-500 text-xs">A teljes adatbázisban</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/5 h-full">
                <Leaderboard entries={leaderboardData} isLoading={isLoadingLb} />
              </div>
            </div>
          </div>
        )}

        {gameState === 'STATS' && <StatisticsScreen questions={questionBank} onBack={() => setGameState('MENU')} />}
        
        {gameState === 'PLAYING' && questions[currentIndex] && (
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

      {gameState === 'MENU' && (
        <footer className="text-center p-6 text-[10px] text-slate-600 uppercase font-black tracking-widest" aria-hidden="true">
          M5 Kvíz &bull; v{APP_VERSION} &bull; Matematika Gyakorló
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
