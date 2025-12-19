import React, { useState } from 'react';
import { SetPlacementValue } from '../../types';

interface SetPlacementQuestionProps {
  items: { val: string; correctZone: string }[];
  setA: { label: string; rule: string };
  setB: { label: string; rule: string };
  showResult: boolean;
  onFinish: (placements: SetPlacementValue) => void;
}

export const SetPlacementQuestion: React.FC<SetPlacementQuestionProps> = ({ 
  items, setA, setB, showResult, onFinish 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placements, setPlacements] = useState<SetPlacementValue>([]);

  const handleZoneSelect = (zone: string) => {
    const newPlacements = [...placements, { val: items[currentIndex].val, zone }];
    setPlacements(newPlacements);
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(newPlacements);
    }
  };

  const zones = [
    { id: 'A', label: setA.label, color: 'bg-blue-500/20 border-blue-500/50 text-blue-400' },
    { id: 'Both', label: 'Mindkettő', color: 'bg-purple-500/20 border-purple-500/50 text-purple-400' },
    { id: 'B', label: setB.label, color: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' },
    { id: 'None', label: 'Egyik sem', color: 'bg-slate-700/20 border-slate-600 text-slate-400' }
  ];

  if (showResult) {
    return (
      <div className="grid grid-cols-1 gap-2">
        {items.map((item, i) => {
          const p = placements[i];
          const isCorrect = p?.zone === item.correctZone;
          return (
            <div key={i} className={`flex justify-between items-center p-3 rounded-lg border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
              <span className="font-bold">{item.val}</span>
              <span className="text-xs uppercase font-black">{p?.zone} {isCorrect ? '✓' : `(Helyes: ${item.correctZone})`}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col items-center">
        <div className="bg-slate-800 border-2 border-blue-500/30 px-8 py-6 rounded-2xl text-4xl font-black text-white shadow-2xl mb-6">
          {items[currentIndex].val}
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
          {zones.map(z => (
            <button 
              key={z.id} 
              onClick={() => handleZoneSelect(z.id)}
              className={`p-4 rounded-xl border-2 font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${z.color}`}
            >
              {z.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};