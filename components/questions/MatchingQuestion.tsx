
import React, { useState, useMemo } from 'react';
import { PairValue } from '../../types';

interface RightItem {
  id: number;
  val: string;
}

interface MatchingQuestionProps {
  pairs: Record<string, string>;
  showResult: boolean;
  onFinish: (val: PairValue) => void;
}

export const MatchingQuestion: React.FC<MatchingQuestionProps> = ({ 
  pairs, showResult, onFinish 
}) => {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [currentPairs, setCurrentPairs] = useState<Record<string, number>>({});

  const leftKeys = useMemo(() => Object.keys(pairs), [pairs]);
  
  const rightItems = useMemo(() => 
    Object.values(pairs)
      // Fix: cast val to string to resolve 'unknown' type inference and allow access to localeCompare
      .map((val, id) => ({ id, val: val as string })) // Az id garantálja az egyediséget
      .sort((a, b) => a.val.localeCompare(b.val, 'hu')), 
    [pairs]
  );

  const handleRightSelect = (right: RightItem) => {
    if (!selectedLeft) return;
    const newPairs = { ...currentPairs, [selectedLeft]: right.id };
    setCurrentPairs(newPairs);
    setSelectedLeft(null);
    
    if (Object.keys(newPairs).length === leftKeys.length) {
      const finishPayload: PairValue = Object.entries(newPairs).map(([k, rightId]) => {
        const item = rightItems.find(r => r.id === rightId);
        return { k, actual: item?.val || '' };
      });
      onFinish(finishPayload);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        {leftKeys.map(left => {
          const isSelected = selectedLeft === left;
          const isPaired = currentPairs[left] !== undefined;
          return (
            <button 
              key={left} 
              onClick={() => !showResult && !isPaired && setSelectedLeft(left)}
              disabled={showResult || isPaired}
              className={`w-full p-3 rounded-lg border-2 text-left text-sm font-bold transition-all ${
                isSelected ? "bg-blue-600 border-blue-400 text-white shadow-lg" : 
                isPaired ? "opacity-30 border-slate-700 bg-slate-900 text-slate-500" : 
                "bg-slate-800 border-white/10 hover:border-blue-500/50"
              }`}
            >
              {left}
            </button>
          );
        })}
      </div>
      <div className="space-y-2">
        {rightItems.map(right => {
          const leftKey = Object.keys(currentPairs).find(k => currentPairs[k] === right.id);
          const isPaired = leftKey !== undefined;
          
          let cls = "w-full p-3 rounded-lg border-2 text-right text-sm font-bold transition-all ";
          
          if (showResult && isPaired) {
            const isCorrect = pairs[leftKey!] === right.val;
            cls += isCorrect ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-red-500/20 border-red-500 text-red-400";
          } else if (isPaired) {
            cls += "bg-blue-900 border-blue-500 text-blue-400";
          } else {
            cls += "bg-slate-800 border-white/10 " + (selectedLeft ? "hover:border-blue-500" : "opacity-50 cursor-not-allowed");
          }
          
          return (
            <button 
              key={right.id} 
              disabled={showResult || isPaired || !selectedLeft}
              onClick={() => handleRightSelect(right)}
              className={cls}
            >
              {right.val}
            </button>
          );
        })}
      </div>
    </div>
  );
};
