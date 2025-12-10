import React from 'react';
import { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  className?: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        Ranglista (Top 10)
      </h3>
      <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-white/5 text-left">
        {entries.slice(0, 10).map((entry, i) => (
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
        {entries.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-sm">Még nincs mentett eredmény.</div>
        )}
      </div>
    </div>
  );
};
