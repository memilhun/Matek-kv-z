import React, { useMemo } from 'react';
import { Question } from '../types';

interface StatisticsScreenProps {
  questions: Question[];
  onBack: () => void;
}

export const StatisticsScreen: React.FC<StatisticsScreenProps> = ({ questions, onBack }) => {
  // Calculate statistics on the fly
  const stats = useMemo(() => {
    const total = questions.length;
    
    // Categories
    const categories: Record<string, number> = {};
    questions.forEach(q => {
      categories[q.category] = (categories[q.category] || 0) + 1;
    });

    // Difficulty
    const difficulty = {
      easy: questions.filter(q => q.difficulty === 'easy').length,
      medium: questions.filter(q => q.difficulty === 'medium').length,
      hard: questions.filter(q => q.difficulty === 'hard').length,
    };

    // Types
    const types: Record<string, number> = {};
    questions.forEach(q => {
      types[q.type] = (types[q.type] || 0) + 1;
    });

    return { total, categories, difficulty, types };
  }, [questions]);

  // Labels map for types
  const typeLabels: Record<string, string> = {
    mcq: 'Feleletválasztós',
    tf: 'Igaz/Hamis',
    short: 'Rövid válasz',
    shortnum: 'Szám beírása',
    matching: 'Párosítás'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Feladatbank Statisztika</h2>
        <button 
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          ← Vissza
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 shadow-lg">
          <div className="text-slate-400 text-sm uppercase font-bold">Összes kérdés</div>
          <div className="text-4xl font-black text-blue-400 mt-2">{stats.total} db</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/20 shadow-lg">
          <div className="text-slate-400 text-sm uppercase font-bold">Kategóriák száma</div>
          <div className="text-4xl font-black text-emerald-400 mt-2">{Object.keys(stats.categories).length} db</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-purple-500/20 shadow-lg">
          <div className="text-slate-400 text-sm uppercase font-bold">Feladattípusok</div>
          <div className="text-4xl font-black text-purple-400 mt-2">{Object.keys(stats.types).length} féle</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Difficulty Breakdown */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Nehézségi Szintek
          </h3>
          <div className="space-y-4">
            {/* Easy */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-emerald-400 font-bold">Könnyű</span>
                <span className="text-slate-400">{stats.difficulty.easy} db ({Math.round(stats.difficulty.easy / stats.total * 100)}%)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${(stats.difficulty.easy / stats.total) * 100}%` }}></div>
              </div>
            </div>
            {/* Medium */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-yellow-400 font-bold">Közepes</span>
                <span className="text-slate-400">{stats.difficulty.medium} db ({Math.round(stats.difficulty.medium / stats.total * 100)}%)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500" style={{ width: `${(stats.difficulty.medium / stats.total) * 100}%` }}></div>
              </div>
            </div>
            {/* Hard */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-400 font-bold">Nehéz</span>
                <span className="text-slate-400">{stats.difficulty.hard} db ({Math.round(stats.difficulty.hard / stats.total * 100)}%)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: `${(stats.difficulty.hard / stats.total) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Types */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Típus szerinti eloszlás
          </h3>
          <div className="space-y-3">
            {Object.entries(stats.types).sort((a,b) => b[1] - a[1]).map(([type, count]) => (
              <div key={type} className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-white/5">
                <span className="font-medium text-slate-200">{typeLabels[type] || type}</span>
                <span className="bg-slate-700 px-2 py-1 rounded text-xs font-bold text-white">{count} db</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          Kategóriák részletezése
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(stats.categories).sort((a, b) => b[1] - a[1]).map(([cat, count]) => (
            <div key={cat} className="p-4 bg-slate-900 rounded-lg border-l-4 border-indigo-500 flex justify-between items-center">
              <span className="font-medium text-slate-200">{cat}</span>
              <span className="text-indigo-300 font-bold">{count} db</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};