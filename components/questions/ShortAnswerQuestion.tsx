import React, { useState } from 'react';

interface ShortAnswerQuestionProps {
  type: 'short' | 'shortnum';
  onSubmit: (val: string) => void;
  showResult: boolean;
}

export const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({ 
  type, onSubmit, showResult 
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        autoFocus
        type="text"
        inputMode={type === 'shortnum' ? "decimal" : "text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={showResult}
        placeholder={type === 'shortnum' ? "Írd be a számot..." : "Írd be a választ..."}
        className="w-full bg-slate-900 border-2 border-slate-700 focus:border-blue-500 rounded-xl px-6 py-4 text-xl text-white outline-none transition-all shadow-inner"
        aria-label="Válasz mező"
      />
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