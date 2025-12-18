
import React, { useState, useEffect, useRef } from 'react';
import { AnswerRecord, LeaderboardEntry, STORAGE_KEY_LEADERBOARD, GAS_URL } from '../types';
import { Leaderboard } from './Leaderboard';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  history: AnswerRecord[];
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, history, onRestart }) => {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  
  // Refek a mentési állapot követéséhez, hogy elkerüljük a dupla küldést
  const hasSavedRef = useRef(false);
  const sessionDataRef = useRef<any>(null);

  // Az adatok előkészítése a mentéshez (ref-ben is tároljuk az automatikus mentéshez)
  const getSessionData = (userName: string) => {
    const data = {
      name: userName.trim() || 'Anonymous',
      score,
      date: new Date().toISOString(),
      totalQuestions,
      correctAnswers: history.filter(h => h.correct).length,
      history: history.map(h => ({
        id: h.questionId,
        correct: h.correct,
        time: h.timeSpent,
        hint: h.hintUsed,
        cat: h.category
      }))
    };
    sessionDataRef.current = data;
    return data;
  };

  // Automatikus mentés funkció (Anonymous néven, ha még nem történt mentés)
  const performAutoSave = () => {
    if (hasSavedRef.current || !GAS_URL) return;
    hasSavedRef.current = true;
    
    const data = getSessionData('Anonymous');
    
    // fetch 'keepalive: true' használatával, hogy az oldal bezárása után is végbemenjen
    fetch(GAS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      keepalive: true
    }).catch(() => {});
  };

  useEffect(() => {
    // Helyi ranglista betöltése
    try {
      const lb = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADERBOARD) || '[]');
      setLeaderboard(Array.isArray(lb) ? lb : []);
    } catch (error) { setLeaderboard([]); }

    // Eseményfigyelő az ablak bezárására / elnavigálásra
    const handleBeforeUnload = () => {
      performAutoSave();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') performAutoSave();
    });

    return () => {
      // Tisztítás: ha a komponens unmountolódik (pl. Főmenüre kattintás), de még nincs mentve
      performAutoSave();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSave = async () => {
    const finalName = name.trim() || 'Anonymous';
    if (hasSavedRef.current && saved) return; // Már sikeresen mentve manuálisan
    
    setIsSaving(true);
    const sessionData = getSessionData(finalName);
    hasSavedRef.current = true; // Megjelöljük, hogy a mentés folyamatban/kész

    // 1. Mentés helyi tárolóba
    const newEntry: LeaderboardEntry = { name: finalName, score, date: sessionData.date };
    const localLb = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .filter((v, i, a) => a.findIndex(t => t.name === v.name && t.score === v.score) === i)
      .slice(0, 10);
    localStorage.setItem(STORAGE_KEY_LEADERBOARD, JSON.stringify(localLb));
    
    // 2. Mentés hálózatra
    if (GAS_URL) {
      try {
        await fetch(GAS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sessionData)
        });
      } catch (e) { 
        console.error("Hiba a mentéskor:", e); 
        hasSavedRef.current = false; // Hiba esetén újra próbálkozhat az automatikus mentés
      }
    }

    setSaved(true);
    setIsSaving(false);
    setLeaderboard(localLb);
  };

  const correctCount = history.filter(h => h.correct).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Kvíz Befejezve!</h2>
        <div className="inline-block p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-white/10 shadow-2xl">
          <div className="text-6xl font-black text-white mb-2">{score}</div>
          <div className="text-slate-400 uppercase tracking-widest text-xs font-semibold">Összpontszám</div>
        </div>
        <p className="text-slate-300">Helyes válaszok: <strong className="text-white">{correctCount}</strong> / {totalQuestions} ({percentage}%)</p>
      </div>

      {!saved ? (
        <div className="bg-slate-800/30 p-6 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-center">
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Írd be a neved (vagy maradj Anonymous)..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 w-full"
            disabled={isSaving}
          />
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isSaving ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Mentés...</> : (name.trim() ? "Mentés névvel" : "Mentés Anonymous-ként")}
          </button>
        </div>
      ) : (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          Eredmény elmentve!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Áttekintés
          </h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {history.map((record, i) => (
              <div key={i} className={`p-4 rounded-lg border-l-4 ${record.correct ? 'bg-emerald-500/5 border-emerald-500' : 'bg-red-500/5 border-red-500'}`}>
                <div className="font-medium text-slate-200 text-sm mb-1">{record.questionText}</div>
                <div className="text-xs flex justify-between items-center">
                  <span className={record.correct ? 'text-emerald-400' : 'text-red-400'}>
                    {record.correct ? '✓ Helyes' : '✗ Hibás'}
                  </span>
                  <span className="text-slate-500">{record.timeSpent} mp</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Leaderboard entries={leaderboard} />
      </div>

      <div className="flex justify-center pt-8">
        <button onClick={onRestart} className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all border border-white/10">Főmenü</button>
      </div>
    </div>
  );
};
