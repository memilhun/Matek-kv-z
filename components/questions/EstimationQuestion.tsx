import React, { useState } from 'react';

interface EstimationQuestionProps {
  min: number;
  max: number;
  unit: string;
  showResult: boolean;
  onSubmit: (val: number) => void;
}

export const EstimationQuestion: React.FC<EstimationQuestionProps> = ({ 
  min, max, unit, showResult, onSubmit 
}) => {
  const [val, setVal] = useState(min);

  return (
    <div className="space-y-6 text-center py-4">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-black text-blue-400">{val}</div>
        <div className="text-sm uppercase tracking-widest text-slate-500 font-bold">{unit}</div>
      </div>
      <input 
        type="range" min={min} max={max} 
        value={val} onChange={(e) => setVal(parseInt(e.target.value))} 
        disabled={showResult}
        className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 shadow-inner"
      />
      {!showResult && (
        <button 
          onClick={() => onSubmit(val)} 
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-500 transition-all"
        >
          Beküldés
        </button>
      )}
    </div>
  );
};