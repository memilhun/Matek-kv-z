import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { GameState, Question, AnswerRecord, LeaderboardEntry, AnswerValue, STORAGE_KEY_LEADERBOARD, GAS_URL } from './types';
import { questionBank, getShuffledQuestions } from './data';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { StatisticsScreen } from './components/StatisticsScreen';
import { Leaderboard } from './components/Leaderboard';
import { useTimer } from './hooks/useTimer';

const APP_VERSION = '1.2.0';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0); 
  const [answerHistory, setAnswerHistory] = useState<AnswerRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoadingLb, setIsLoadingLb] = useState(false);
  
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

  const fetchLeaderboard = async () => {
    setIsLoadingLb(true);
    let localLb: LeaderboardEntry[] = [];
    try {
      localLb = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADERBOARD) || '[]');
    } catch (e) { localLb = []; }

    if (GAS_URL) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        const response = await fetch(`${GAS_URL}?action=getLeaderboard`, { signal: controller.signal });
        clearTimeout(timeoutId);
        const globalData = await response.json();
        if (Array.isArray(globalData)) {
          setLeaderboardData(globalData.map(e => ({ ...e, isGlobal: true })));
          setIsLoadingLb(false);
          return;
        }
      } catch (e) {
        console.warn("Globális ranglista nem érhető el, helyi adatok használata.");
      }
    }
    setLeaderboardData(Array.isArray(localLb) ? localLb : []);
    setIsLoadingLb(false);
  };

  useEffect(() => {
    if (gameState === 'MENU') fetchLeaderboard();
  }, [gameState]);

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

    let earnedPoints = 0;
    if (correct) {
      let basePoints = currentQ.points;
      const multiplier = currentStreak >= 3 ? 1.5 : (currentStreak === 2 ? 1.2 : 1);
      const timeBonus = Math.round(timeLeft * 0.15); 
      earnedPoints = Math.round(basePoints * multiplier) + timeBonus;
      if (hintUsed) earnedPoints = Math.round(earnedPoints / 2);
    }

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
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">Statisztika</h3>
                    <p className="text-slate-500 text-xs">Eredmények elemzése</p>
                  </div>
                </button>
                
                <div className="bg-slate-800/30 p-5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
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