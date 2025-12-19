import React from 'react';

interface MCQQuestionProps {
  options: string[];
  onSelect: (idx: number) => void;
  correct: number;
  showResult: boolean;
  selected: number | null;
  eliminated: number[];
}

export const MCQQuestion: React.FC<MCQQuestionProps> = ({ 
  options, onSelect, correct, showResult, selected, eliminated 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((opt, i) => {
        const isEliminated = eliminated.includes(i);
        let cls = "p-4 text-lg font-semibold rounded-xl border-2 text-left transition-all ";
        
        if (isEliminated) {
          cls += "bg-slate-900 border-slate-800 text-slate-600 opacity-30 cursor-not-allowed decoration-line-through";
        } else if (showResult) {
          if (i === correct) cls += "bg-emerald-500/20 border-emerald-500 text-emerald-400";
          else if (i === selected) cls += "bg-red-500/20 border-red-500 text-red-400";
          else cls += "bg-slate-800 border-transparent opacity-50";
        } else {
          cls += "bg-slate-800 border-white/10 hover:border-blue-500 hover:bg-slate-700/50";
        }
        
        return (
          <button 
            key={i} 
            onClick={() => !showResult && !isEliminated && onSelect(i)} 
            disabled={showResult || isEliminated} 
            className={cls}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};