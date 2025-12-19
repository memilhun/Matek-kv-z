
import React, { useState, useRef } from 'react';

interface ShortAnswerQuestionProps {
  type: 'short' | 'shortnum';
  onSubmit: (val: string) => void;
  showResult: boolean;
}

export const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({ 
  type, onSubmit, showResult 
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
    }
  };

  const handleQuickSlash = () => {
    if (showResult) return;
    const newVal = input + '/';
    setInput(newVal);
    // Visszaadjuk a fókuszt, hogy folytathassa a gépelést
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative flex gap-2">
        <input 
          ref={inputRef}
          autoFocus
          type="text"
          // iOS-en a decimal inputMode előhozza a számokat és a tizedesvesszőt/pontot
          inputMode={type === 'shortnum' ? "decimal" : "text"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={showResult}
          placeholder={type === 'shortnum' ? "Írd be a számot..." : "Írd be a választ..."}
          className="flex-1 bg-slate-900 border-2 border-slate-700 focus:border-blue-500 rounded-xl px-4 py-4 text-xl text-white outline-none transition-all shadow-inner"
          aria-label="Válasz mező"
        />
        {/* Most már shortnum esetén is megjelenítjük a törtvonal gombot, ha a típus engedi */}
        {!showResult && (
          <button
            type="button"
            onClick={handleQuickSlash}
            className="w-14 bg-slate-800 border-2 border-slate-700 rounded-xl flex items-center justify-center text-2xl font-black text-blue-400 hover:bg-slate-700 active:scale-95 transition-all shadow-lg"
            title="Törtvonal beillesztése"
          >
            /
          </button>
        )}
      </div>
      
      {!showResult && (
        <button 
          type="submit"
          disabled={!input.trim()}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
        >
          Beküldés
        </button>
      )}
    </form>
  );
};
