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
  const [saveError, setSaveError] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  
  const hasSavedRef = useRef(false);

  const getSessionData = (userName: string) => ({
    name: userName.trim() || 'Anonymous',
    score,
    date: new Date().toISOString(),
    totalQuestions,
    correctAnswers: history.filter(h => h.correct).length,
    history: history.map(h => ({
      id: h.questionId,
      text: h.questionText,
      correct: h.correct,
      time: h.timeSpent,
      hint: h.hintUsed,
      cat: h.category,
      type: h.type
    }))
  });

  const performAutoSave = () => {
    if (hasSavedRef.current || !GAS_URL) return;
    hasSavedRef.current = true;
    const data = getSessionData('Anonymous');
    fetch(GAS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      keepalive: true
    }).catch(() => {});
  };

  useEffect(() => {
    try {
      const lb = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADERBOARD) || '[]');
      setLeaderboard(Array.isArray(lb) ? lb : []);
    } catch (error) { setLeaderboard([]); }

    const handleBeforeUnload = () => performAutoSave();
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSave = async () => {
    const finalName = name.trim() || 'Anonymous';
    setIsSaving(true);
    setSaveError(false);
    const sessionData = getSessionData(finalName);

    try {
      const newEntry: LeaderboardEntry = { name: finalName, score, date: sessionData.date };
      const localLb = [...leaderboard, newEntry]
        .sort((a, b) => b.score - a.score)
        .filter((v, i, a) => a.findIndex(t => t.name === v.name && t.score === v.score) === i)
        .slice(0, 10);
      localStorage.setItem(STORAGE_KEY_LEADERBOARD, JSON.stringify(localLb));
      setLeaderboard(localLb);

      if (GAS_URL) {
        await fetch(GAS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sessionData)
        });
      }
      setSaved(true);
      hasSavedRef.current = true;
    } catch (e) { 
      console.error("Mentési hiba:", e); 
      setSaveError(true);
    } finally {
      setIsSaving(false);
    }
  };

  const correctCount = history.filter(h => h.correct).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Kvíz Befejezve!</h2>
        <div className="inline-block p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-white/10 shadow-2xl">
          <div className="text-6xl font-black text-white mb-2">{score}</div>
          <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Összpontszám</div>
        </div>
        <p className="text-slate-300">Helyes válaszok: <strong className="text-white">{correctCount}</strong> / {totalQuestions} ({percentage}%)</p>
      </div>

      {!saved ? (
        <div className="bg-slate-800/30 p-6 rounded-xl border border-white/5 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input 
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Írd be a neved..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 w-full text-white"
              disabled={isSaving}
              aria-label="Név megadása a ranglistához"
            />
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {isSaving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : (saveError ? "Újrapróbálkozás" : "Mentés")}
            </button>
          </div>
          {saveError && <p className="text-red-400 text-xs text-center">Hiba történt a hálózati mentés során. A helyi ranglista frissült.</p>}
        </div>
      ) : (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center flex items-center justify-center gap-2 animate-bounce-subtle">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          Eredmény sikeresen rögzítve!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">Áttekintés</h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {history.map((record, i) => (
              <div key={i} className={`p-4 rounded-lg border-l-4 ${record.correct ? 'bg-emerald-500/5 border-emerald-500' : 'bg-red-500/5 border-red-500'}`}>
                <div className="font-medium text-slate-200 text-sm mb-1">{record.questionText}</div>
                <div className="text-[10px] flex justify-between items-center text-slate-500 uppercase font-bold">
                  <span className={record.correct ? 'text-emerald-400' : 'text-red-400'}>
                    {record.correct ? '✓ Helyes' : '✗ Hibás'}
                  </span>
                  <span>{record.timeSpent} mp</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Leaderboard entries={leaderboard} />
      </div>

      <div className="flex justify-center pt-8">
        <button onClick={onRestart} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-full transition-all border border-white/10">Vissza a főmenübe</button>
      </div>
    </div>
  );
};