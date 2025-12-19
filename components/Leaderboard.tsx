
import React from 'react';
import { LeaderboardEntry } from '../types';
import { TrophyIcon } from './Icons';
import { Z_INDEX } from '../constants';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  isLoading?: boolean;
  className?: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, isLoading, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <TrophyIcon />
          Ranglista
        </h3>
        {entries.some(e => e.isGlobal) && (
          <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30 font-bold uppercase tracking-wider">Globális</span>
        )}
      </div>
      
      <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-white/5 relative min-h-[200px]">
        {isLoading && (
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
            style={{ zIndex: Z_INDEX.OVERLAY }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-3 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="text-xs text-slate-400 font-medium">Frissítés...</span>
            </div>
          </div>
        )}

        {entries.slice(0, 10).map((entry, i) => (
          <div key={i} className="flex justify-between items-center p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`
                w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs
                ${i === 0 ? 'bg-yellow-500 text-yellow-950' : 
                  i === 1 ? 'bg-slate-300 text-slate-900' : 
                  i === 2 ? 'bg-amber-700 text-amber-100' : 'bg-slate-800 text-slate-400'}
              `}>
                {i + 1}
              </div>
              <div className="font-medium text-slate-200 truncate max-w-[120px]">{entry.name}</div>
            </div>
            <div className="font-mono text-blue-400 font-bold">{entry.score}</div>
          </div>
        ))}
        
        {!isLoading && entries.length === 0 && (
          <div className="p-12 text-center text-slate-500 text-sm italic">Még nincs mentett eredmény.</div>
        )}
      </div>
    </div>
  );
};
