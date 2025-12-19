
import React, { useMemo, useState, useEffect } from 'react';
import { Question, GlobalStats, GAS_URL } from '../types';
import { BankIcon, TypeIcon } from './Icons';

interface StatisticsScreenProps {
  questions: Question[];
  initialTab?: 'bank' | 'global';
  onBack: () => void;
}

export const StatisticsScreen: React.FC<StatisticsScreenProps> = ({ questions, initialTab = 'bank', onBack }) => {
  const [tab, setTab] = useState<'bank' | 'global'>(initialTab);
  const [globalData, setGlobalData] = useState<GlobalStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tab === 'global' && !globalData && GAS_URL) {
      setLoading(true);
      fetch(`${GAS_URL}?action=getStats`)
        .then(res => res.json())
        .then(data => {
          setGlobalData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Hiba a statisztika lekérésekor:", err);
          setLoading(false);
        });
    }
  }, [tab, globalData]);

  const bankStats = useMemo(() => {
    const categories: Record<string, number> = {};
    const types: Record<string, number> = {};
    questions.forEach(q => {
      categories[q.category] = (categories[q.category] || 0) + 1;
      types[q.type] = (types[q.type] || 0) + 1;
    });
    return { categories, types };
  }, [questions]);

  const typeLabels: Record<string, string> = {
    mcq: 'Feleletválasztós',
    tf: 'Igaz/Hamis',
    short: 'Szöveges válasz',
    shortnum: 'Számbeírás',
    matching: 'Párosítás',
    ordering: 'Sorrendbe rendezés',
    set_placement: 'Halmazba sorolás',
    estimation: 'Becslés csúszkával',
    plan_selector: 'Műveleti terv',
    coordinate_picker: 'Koordináta-kijelölés'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Statisztikai Elemzés</h2>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">← Vissza</button>
      </div>

      <div className="flex p-1 bg-slate-900 rounded-xl border border-white/5">
        <button onClick={() => setTab('bank')} className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${tab === 'bank' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Feladatbank Eloszlása</button>
        <button onClick={() => setTab('global')} className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${tab === 'global' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Globális Teljesítmény</button>
      </div>

      <div className="min-h-[400px]">
        {tab === 'bank' ? (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2"><BankIcon /> Témakörök ({Object.keys(bankStats.categories).length})</h3>
              <div className="space-y-2">
                {Object.entries(bankStats.categories).sort((a,b) => b[1] - a[1]).map(([cat, count]) => (
                  <div key={cat} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-white/5">
                    <span className="text-sm text-slate-300">{cat}</span>
                    <span className="text-xs font-bold bg-slate-800 px-2 py-1 rounded text-blue-400">{count} db</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2"><TypeIcon /> Feladattípusok</h3>
              <div className="space-y-2">
                {Object.entries(bankStats.types).sort((a,b) => b[1] - a[1]).map(([type, count]) => (
                  <div key={type} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-white/5">
                    <span className="text-sm text-slate-300">{typeLabels[type] || type}</span>
                    <span className="text-xs font-bold bg-slate-800 px-2 py-1 rounded text-purple-400">{count} db</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in space-y-6">
            {!GAS_URL ? (
              <div className="p-12 text-center bg-slate-800/50 rounded-2xl border border-dashed border-white/10 text-slate-500">
                Hálózati statisztika nincs konfigurálva. (GAS_URL hiányzik)
              </div>
            ) : loading ? (
              <div className="p-20 flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-slate-400 animate-pulse">Adatok betöltése a felhőből...</p>
              </div>
            ) : globalData ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Összes kitöltés</div>
                    <div className="text-2xl font-black text-white">{globalData.totalCompletions}</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Átlagpont</div>
                    <div className="text-2xl font-black text-blue-400">{globalData.avgScore}</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Legjobb témakör</div>
                    <div className="text-sm font-bold text-emerald-400 truncate mt-2">
                      {/* Explicitly cast entry values to number to fix arithmetic type errors */}
                      {Object.entries(globalData.categorySuccess).sort((a,b) => (b[1] as number) - (a[1] as number))[0]?.[0] || '-'}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Leggyengébb típus</div>
                    <div className="text-sm font-bold text-red-400 truncate mt-2">
                      {/* Explicitly cast entry values to number to fix arithmetic type errors */}
                      {Object.entries(globalData.typeSuccess).sort((a,b) => (b[1] as number) - (a[1] as number))[0]?.[0] || '-'}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">Sikerességi ráta témakörönként</h3>
                  <div className="space-y-4">
                    {Object.entries(globalData.categorySuccess)
                      /* Explicitly cast entry values to number for sorting */
                      .sort((a, b) => (b[1] as number) - (a[1] as number))
                      .map(([cat, rate]) => (
                      <div key={cat}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300 font-medium">{cat}</span>
                          <span className="text-blue-400 font-bold">{rate}%</span>
                        </div>
                        <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                          <div 
                            className={`h-full shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-1000 ${Number(rate) > 80 ? 'bg-emerald-500' : Number(rate) > 50 ? 'bg-blue-500' : 'bg-orange-500'}`} 
                            style={{ width: `${rate}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">Legnehezebb kérdések</h3>
                  <div className="space-y-3">
                    {globalData.difficultQuestions.length > 0 ? globalData.difficultQuestions.map((q, i) => (
                      <div key={i} className="p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                        <div className="text-[10px] text-red-400 font-bold uppercase mb-1">Hibaarány: {q.failRate}%</div>
                        <div className="text-xs text-slate-300 line-clamp-2">{q.text}</div>
                      </div>
                    )) : (
                      <div className="text-center py-8 text-slate-500 text-xs italic">Nincs még elég adat.</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-500">Nincs elérhető globális adat.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
