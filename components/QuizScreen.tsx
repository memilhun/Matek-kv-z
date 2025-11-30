import React, { useState, useEffect } from 'react';
import { Question, GridPoint } from '../types';

interface QuizScreenProps {
  question: Question;
  qIndex: number;
  totalQ: number;
  timeLeft: number;
  onAnswer: (given: any, correct: boolean, points: number) => void;
}

// Helper Component: Coordinate Grid SVG
const CoordinateSystem: React.FC<{ points: GridPoint[], highlight?: string }> = ({ points, highlight }) => {
  const gridSize = 11; // -10 to 10 range (extra space for labels)
  const scale = 14; // pixels per unit
  const center = 160; // center of SVG (320x320 viewbox)

  // Convert logical x,y to SVG cx,cy
  const toSvg = (x: number, y: number) => ({
    cx: center + x * scale,
    cy: center - y * scale // SVG y is inverted
  });

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-slate-900 rounded-xl border border-slate-700 p-2 shadow-inner overflow-hidden">
        <svg width="320" height="320" viewBox="0 0 320 320" className="select-none">
          {/* Grid Lines */}
          {Array.from({ length: 21 }).map((_, i) => {
            const pos = i - 10;
            const svgPos = center + pos * scale;
            const isAxis = pos === 0;
            return (
              <React.Fragment key={i}>
                {/* Vertical */}
                <line 
                  x1={svgPos} y1={20} x2={svgPos} y2={300} 
                  stroke={isAxis ? "#94a3b8" : "#334155"} 
                  strokeWidth={isAxis ? 2 : 1} 
                  opacity={isAxis ? 1 : 0.3}
                />
                {/* Horizontal */}
                <line 
                  x1={20} y1={svgPos} x2={300} y2={svgPos} 
                  stroke={isAxis ? "#94a3b8" : "#334155"} 
                  strokeWidth={isAxis ? 2 : 1}
                  opacity={isAxis ? 1 : 0.3}
                />
              </React.Fragment>
            );
          })}

          {/* Axis Labels */}
          <text x={310} y={center + 5} fill="#94a3b8" fontSize="12" fontWeight="bold">x</text>
          <text x={center + 5} y={15} fill="#94a3b8" fontSize="12" fontWeight="bold">y</text>
          
          {/* Numbers (Small subset to avoid clutter) */}
          <text x={center + 5 * scale} y={center + 15} fill="#64748b" fontSize="10" textAnchor="middle">5</text>
          <text x={center - 5 * scale} y={center + 15} fill="#64748b" fontSize="10" textAnchor="middle">-5</text>
          <text x={center - 15} y={center - 5 * scale + 4} fill="#64748b" fontSize="10" textAnchor="end">5</text>
          <text x={center - 15} y={center + 5 * scale + 4} fill="#64748b" fontSize="10" textAnchor="end">-5</text>
          <text x={center - 10} y={center + 15} fill="#64748b" fontSize="10">0</text>

          {/* Points */}
          {points.map((p, i) => {
            const { cx, cy } = toSvg(p.x, p.y);
            const isHighlighted = highlight === p.label;
            return (
              <g key={i}>
                <circle 
                  cx={cx} cy={cy} r={isHighlighted ? 6 : 4} 
                  fill={isHighlighted ? "#fbbf24" : "#3b82f6"} 
                  stroke="#1e293b" strokeWidth="2"
                  className={isHighlighted ? "animate-pulse" : ""}
                />
                <text 
                  x={cx + 8} y={cy - 8} 
                  fill={isHighlighted ? "#fbbf24" : "#e2e8f0"} 
                  fontSize="14" fontWeight="bold"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, qIndex, totalQ, timeLeft, onAnswer }) => {
  const [shortAnswer, setShortAnswer] = useState('');
  
  // Matching state
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({}); 

  // Feedback state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null); // stores index for MCQ/TF, string for short
  
  // Reset local state when question changes
  useEffect(() => {
    setShortAnswer('');
    setSelectedLeft(null);
    setPairs({});
    setIsSubmitted(false);
    setSelectedAnswer(null);

    if (question.type === 'matching' && question.pairs) {
      setLeftItems(Object.keys(question.pairs));
      setRightItems([...Object.values(question.pairs)].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  // Handler for MCQ
  const handleMCQ = (index: number) => {
    if (isSubmitted) return;
    
    setIsSubmitted(true);
    setSelectedAnswer(index);

    const isCorrect = index === question.correct;
    const earned = isCorrect ? question.points + Math.max(0, timeLeft) : 0;
    
    // Call parent logic immediately (App handles the delay)
    onAnswer(index, isCorrect, earned);
  };

  // Handler for True/False
  const handleTF = (val: boolean) => {
    if (isSubmitted) return;

    setIsSubmitted(true);
    setSelectedAnswer(val);

    const isCorrect = val === question.correct;
    const earned = isCorrect ? question.points + Math.max(0, timeLeft) : 0;
    
    onAnswer(val, isCorrect, earned);
  };

  // Handler for Short Answer
  const handleShortSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) return;
    if (!shortAnswer.trim()) return;

    setIsSubmitted(true);
    setSelectedAnswer(shortAnswer);

    const isCorrect = shortAnswer.trim() === String(question.correctAnswer).trim();
    const earned = isCorrect ? question.points + Math.max(0, timeLeft) : 0;
    
    onAnswer(shortAnswer, isCorrect, earned);
  };

  // Handler for Matching Logic
  const handleMatchingLeft = (item: string) => {
    if (isSubmitted) return;
    if (pairs[item]) return; // Already paired
    setSelectedLeft(item);
  };

  const handleMatchingRight = (item: string) => {
    if (isSubmitted) return;
    if (!selectedLeft) return;
    if (Object.values(pairs).includes(item)) return;

    const newPairs = { ...pairs, [selectedLeft]: item };
    setPairs(newPairs);
    setSelectedLeft(null);

    // Check completion
    if (Object.keys(newPairs).length === leftItems.length) {
      setIsSubmitted(true);
      
      let correctCount = 0;
      Object.entries(newPairs).forEach(([k, v]) => {
        if (question.pairs && String(question.pairs[k]) === String(v)) {
          correctCount++;
        }
      });
      
      const ratio = correctCount / leftItems.length;
      const base = Math.round(question.points * ratio);
      const isPerfect = ratio === 1;
      const earned = base + Math.max(0, timeLeft);
      
      setTimeout(() => {
        onAnswer(Object.entries(newPairs).map(([k,v]) => ({k, actual:v})), isPerfect, earned);
      }, 500);
    }
  };

  // Helper to determine styles based on feedback state
  const getFeedbackStyles = (optionIndexOrValue: any, correctValue: any) => {
    if (!isSubmitted) return 'bg-slate-700/50 hover:bg-blue-600 border-white/5';
    
    if (optionIndexOrValue === correctValue) {
      return 'bg-emerald-500/80 border-emerald-500 text-white'; // Correct answer
    }
    if (optionIndexOrValue === selectedAnswer) {
      return 'bg-red-500/80 border-red-500 text-white'; // User's wrong selection
    }
    return 'bg-slate-700/50 opacity-40 border-transparent'; // Irrelevant options
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
        
        {/* Visual Content for Coordinate System */}
        {question.gridConfig && (
          <CoordinateSystem 
            points={question.gridConfig.points} 
            highlight={question.gridConfig.highlight}
          />
        )}

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 leading-tight">
          {question.question}
        </h2>

        {/* Answer Area */}
        <div className="space-y-4">
          
          {question.type === 'mcq' && question.options && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((opt, i) => {
                const styles = getFeedbackStyles(i, question.correct);
                return (
                  <button
                    key={i}
                    disabled={isSubmitted}
                    onClick={() => handleMCQ(i)}
                    className={`p-4 text-lg font-semibold rounded-xl border text-left flex items-center gap-3 transition-all duration-200 ${styles} ${!isSubmitted && 'hover:scale-[1.02]'}`}
                  >
                    <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm ${isSubmitted ? 'bg-black/20' : 'bg-slate-800'}`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {question.type === 'tf' && (
            <div className="flex gap-4">
              {/* True Button */}
              <button
                disabled={isSubmitted}
                onClick={() => handleTF(true)}
                className={`
                  flex-1 p-6 text-xl font-bold rounded-xl border transition-all
                  ${!isSubmitted 
                    ? 'bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border-emerald-500/20' 
                    : question.correct === true 
                      ? 'bg-emerald-500/80 border-emerald-500 text-white' 
                      : selectedAnswer === true 
                        ? 'bg-red-500/80 border-red-500 text-white' 
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 opacity-40'}
                `}
              >
                Igaz
              </button>
              {/* False Button */}
              <button
                disabled={isSubmitted}
                onClick={() => handleTF(false)}
                className={`
                  flex-1 p-6 text-xl font-bold rounded-xl border transition-all
                  ${!isSubmitted 
                    ? 'bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border-red-500/20' 
                    : question.correct === false
                      ? 'bg-emerald-500/80 border-emerald-500 text-white' // Note: Correct answer gets green style
                      : selectedAnswer === false
                        ? 'bg-red-500/80 border-red-500 text-white' 
                        : 'bg-red-500/10 border-red-500/20 text-red-400 opacity-40'}
                `}
              >
                Hamis
              </button>
            </div>
          )}

          {(question.type === 'short' || question.type === 'shortnum') && (
            <form onSubmit={handleShortSubmit} className="flex flex-col gap-4">
              <input
                autoFocus
                disabled={isSubmitted}
                type={question.type === 'shortnum' ? "tel" : "text"}
                value={shortAnswer}
                onChange={(e) => setShortAnswer(e.target.value)}
                placeholder="Írd ide a választ..."
                className={`
                  w-full bg-slate-900/50 border rounded-xl p-4 text-xl outline-none transition-colors
                  ${isSubmitted
                    ? String(selectedAnswer).trim() === String(question.correctAnswer).trim()
                      ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                      : 'border-red-500 text-red-400 bg-red-500/10'
                    : 'border-slate-600 focus:border-blue-500'}
                `}
              />
              
              {!isSubmitted && (
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-transform active:scale-95"
                >
                  Beküldés
                </button>
              )}

              {isSubmitted && String(selectedAnswer).trim() !== String(question.correctAnswer).trim() && (
                 <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
                    <div className="bg-emerald-500 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold">✓</div>
                    <div>
                      <span className="text-slate-400 text-sm block">Helyes válasz:</span>
                      <span className="text-emerald-400 font-bold text-lg">{question.correctAnswer}</span>
                    </div>
                 </div>
              )}
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
                      disabled={isPaired || isSubmitted}
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
                      disabled={(!selectedLeft || isUsed) || isSubmitted}
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