import React, { useState, useEffect } from 'react';
import { AnswerRecord, LeaderboardEntry } from '../types';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  history: AnswerRecord[];
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, history, onRestart }) => {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const lb = JSON.parse(localStorage.getItem('mv_lb') || '[]');
    setLeaderboard(lb);
  }, []);

  const handleSave = () => {
    if (!name.trim()) return;
    const newEntry: LeaderboardEntry = {
      name: name.trim(),
      score,
      date: new Date().toISOString()
    };
    const newLb = [...leaderboard, newEntry].sort((a, b) => b.score - a.score).slice(0, 50); // keep top 50
    localStorage.setItem('mv_lb', JSON.stringify(newLb));
    setLeaderboard(newLb);
    setSaved(true);
  };

  const correctCount = history.filter(h => h.correct).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-12">
      
      {/* Score Card */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Kvíz Befejezve!
        </h2>
        <div className="inline-block p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-white/10 shadow-2xl">
          <div className="text-6xl font-black text-white mb-2">{score}</div>
          <div className="text-slate-400 uppercase tracking-widest text-xs font-semibold">Összpontszám</div>
        </div>
        <p className="text-slate-300">
          Helyes válaszok: <strong className="text-white">{correctCount}</strong> / {totalQuestions} ({percentage}%)
        </p>
      </div>

      {/* Leaderboard Input */}
      {!saved ? (
        <div className="bg-slate-800/30 p-6 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-center">
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Írd be a neved a ranglistához..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 w-full"
          />
          <button 
            onClick={handleSave}
            disabled={!name.trim()}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Mentés
          </button>
        </div>
      ) : (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center">
          Eredmény sikeresen mentve!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Review Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Válaszok áttekintése
          </h3>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {history.map((record, i) => (
              <div 
                key={i} 
                className={`p-4 rounded-lg border-l-4 ${record.correct ? 'bg-emerald-500/5 border-emerald-500' : 'bg-red-500/5 border-red-500'}`}
              >
                <div className="text-sm text-slate-400 mb-1">#{i + 1} Kérdés</div>
                <div className="font-medium text-slate-200 mb-2">{record.questionText}</div>
                
                <div className="text-sm">
                  <span className="text-slate-400">Te válaszod: </span>
                  <span className={record.correct ? 'text-emerald-400' : 'text-red-400 font-bold'}>
                    {record.type === 'matching' && Array.isArray(record.given) 
                      ? record.given.map((p: any) => `${p.k} → ${p.actual}`).join(', ') 
                      : String(record.given)}
                  </span>
                </div>
                
                {!record.correct && (
                   <div className="text-sm mt-1 text-slate-400">
                     <span className="text-slate-500">Magyarázat: </span>
                     {record.explanation}
                   </div>
                )}
                 <div className="text-xs text-slate-500 mt-2 text-right">
                    Pont: {record.earned}
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard Display */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            Ranglista (Top 10)
          </h3>
          <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-white/5">
            {leaderboard.slice(0, 10).map((entry, i) => (
              <div key={i} className="flex justify-between items-center p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${i === 0 ? 'bg-yellow-500 text-yellow-950' : 
                      i === 1 ? 'bg-slate-300 text-slate-900' : 
                      i === 2 ? 'bg-amber-700 text-amber-100' : 'bg-slate-800 text-slate-400'}
                  `}>
                    {i + 1}
                  </div>
                  <div className="font-medium text-slate-200">{entry.name}</div>
                </div>
                <div className="font-mono text-blue-400 font-bold">{entry.score}</div>
              </div>
            ))}
            {leaderboard.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-sm">Még nincs mentett eredmény.</div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onRestart}
          className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all border border-white/10"
        >
          Újra a főmenübe
        </button>
      </div>
    </div>
  );
};