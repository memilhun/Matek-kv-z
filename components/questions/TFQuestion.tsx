import React from 'react';

interface TFQuestionProps {
  onSelect: (val: boolean) => void;
  correct: boolean;
  showResult: boolean;
  selected: boolean | null;
}

export const TFQuestion: React.FC<TFQuestionProps> = ({ 
  onSelect, correct, showResult, selected 
}) => {
  return (
    <div className="flex gap-4">
      {[true, false].map(val => (
         <button 
          key={String(val)} 
          onClick={() => !showResult && onSelect(val)} 
          disabled={showResult} 
          className={`flex-1 p-5 text-xl font-bold rounded-xl border-2 transition-all ${
            showResult 
              ? (val === correct ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : (val === selected ? "bg-red-500/20 border-red-500 text-red-400" : "bg-slate-800 border-transparent opacity-50")) 
              : "bg-slate-800 border-white/10 hover:border-blue-500 hover:bg-slate-700"
          }`}
         >
           {val ? "Igaz" : "Hamis"}
         </button>
      ))}
    </div>
  );
};