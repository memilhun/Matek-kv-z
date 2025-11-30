import React, { useState, useEffect, useRef } from 'react';
import { Question, QuestionType } from '../types';

interface QuizScreenProps {
  question: Question;
  qIndex: number;
  totalQ: number;
  timeLeft: number;
  onAnswer: (given: any, correct: boolean, points: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, qIndex, totalQ, timeLeft, onAnswer }) => {
  const [shortAnswer, setShortAnswer] = useState('');
  
  // Matching state
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({}); // user's pairs: { leftKey: rightValue }
  
  // Reset local state when question changes
  useEffect(() => {
    setShortAnswer('');
    setSelectedLeft(null);
    setPairs({});
    if (question.type === 'matching' && question.pairs) {
      setLeftItems(Object.keys(question.pairs));
      setRightItems([...Object.values(question.pairs)].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  // Handler for MCQ
  const handleMCQ = (index: number) => {
    const isCorrect = index === question.correct;
    // Bonus logic handled by parent if we pass basic points here? 
    // The prompt logic: base + bonus if correct.
    const earned = isCorrect ? question.points + Math.max(0, timeLeft) : 0;
    onAnswer(index, isCorrect, earned);
  };

  // Handler for True/False
  const handleTF = (val: boolean) => {
    const isCorrect = val === question.correct;
    const earned = isCorrect ? question.points + Math.max(0, timeLeft) : 0;
    onAnswer(val, isCorrect, earned);
  };

  // Handler for Short Answer
  const handleShortSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shortAnswer.trim()) return;
    const isCorrect = shortAnswer.trim() === String(question.correctAnswer).trim();
    const earned = isCorrect ? question.points + Math.max(0, timeLeft) : 0;
    onAnswer(shortAnswer, isCorrect, earned);
  };

  // Handler for Matching Logic
  const handleMatchingLeft = (item: string) => {
    if (pairs[item]) return; // Already paired
    setSelectedLeft(item);
  };

  const handleMatchingRight = (item: string) => {
    if (!selectedLeft) return;
    
    // Check if this right item is already used
    if (Object.values(pairs).includes(item)) return;

    const newPairs = { ...pairs, [selectedLeft]: item };
    setPairs(newPairs);
    setSelectedLeft(null);

    // Check completion
    if (Object.keys(newPairs).length === leftItems.length) {
      // Logic from original: correctCount / total * points + bonus
      let correctCount = 0;
      Object.entries(newPairs).forEach(([k, v]) => {
        if (question.pairs && String(question.pairs[k]) === String(v)) {
          correctCount++;
        }
      });
      
      const ratio = correctCount / leftItems.length;
      const base = Math.round(question.points * ratio);
      const isPerfect = ratio === 1;
      // Bonus only if perfect? Original code gave bonus simply added to base.
      // "const earned = base + bonus;"
      const earned = base + Math.max(0, timeLeft);
      
      // Delay slightly to show final pair
      setTimeout(() => {
        // Convert pairs to array format for storage if needed, or keep object
        // We'll pass the object as "given"
        // Determine "correct" boolean overall if all match
        onAnswer(Object.entries(newPairs).map(([k,v]) => ({k, actual:v})), isPerfect, earned);
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Meta Header */}
      <div className="flex justify-between items-center mb-6 text-sm text-slate-400 font-medium">
        <div className="bg-slate-800/50 px-3 py-1 rounded-full border border-white/5">
          {question.category}
        </div>
        <div>
          Kérdés <span className="text-white">{qIndex + 1}</span> / {totalQ}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-800/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 leading-tight">
          {question.question}
        </h2>

        {/* Answer Area */}
        <div className="space-y-4">
          
          {question.type === 'mcq' && question.options && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleMCQ(i)}
                  className="p-4 text-lg font-semibold bg-slate-700/50 hover:bg-blue-600 hover:scale-[1.02] transition-all duration-200 rounded-xl border border-white/5 text-left flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-blue-500 text-sm">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {question.type === 'tf' && (
            <div className="flex gap-4">
              <button
                onClick={() => handleTF(true)}
                className="flex-1 p-6 text-xl font-bold bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/20 rounded-xl transition-all"
              >
                Igaz
              </button>
              <button
                onClick={() => handleTF(false)}
                className="flex-1 p-6 text-xl font-bold bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 rounded-xl transition-all"
              >
                Hamis
              </button>
            </div>
          )}

          {(question.type === 'short' || question.type === 'shortnum') && (
            <form onSubmit={handleShortSubmit} className="flex flex-col gap-4">
              <input
                autoFocus
                type={question.type === 'shortnum' ? "tel" : "text"}
                value={shortAnswer}
                onChange={(e) => setShortAnswer(e.target.value)}
                placeholder="Írd ide a választ..."
                className="w-full bg-slate-900/50 border border-slate-600 focus:border-blue-500 rounded-xl p-4 text-xl outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-transform active:scale-95"
              >
                Beküldés
              </button>
            </form>
          )}

          {question.type === 'matching' && (
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-3">
                {leftItems.map((item) => {
                  const isPaired = !!pairs[item];
                  const isSelected = selectedLeft === item;
                  return (
                    <button
                      key={item}
                      onClick={() => handleMatchingLeft(item)}
                      disabled={isPaired}
                      className={`
                        p-3 md:p-4 rounded-xl text-sm md:text-base font-medium text-left transition-all border
                        ${isPaired 
                          ? 'opacity-40 bg-slate-800 border-transparent cursor-not-allowed' 
                          : isSelected 
                            ? 'bg-blue-600 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105' 
                            : 'bg-slate-700/50 border-white/5 hover:bg-slate-700'}
                      `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-3">
                {rightItems.map((item) => {
                  const isUsed = Object.values(pairs).includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => handleMatchingRight(item)}
                      disabled={!selectedLeft || isUsed}
                      className={`
                        p-3 md:p-4 rounded-xl text-sm md:text-base font-medium text-right transition-all border
                        ${isUsed 
                          ? 'opacity-0 pointer-events-none' 
                          : selectedLeft 
                            ? 'bg-slate-700/50 border-blue-500/30 hover:bg-blue-500/20 cursor-pointer animate-pulse' 
                            : 'bg-slate-800/30 border-transparent opacity-50 cursor-default'}
                      `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};