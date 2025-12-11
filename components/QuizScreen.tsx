
import React, { useState, useEffect } from 'react';
import { Question, GridPoint, AnswerValue } from '../types';

interface QuizScreenProps {
  question: Question;
  qIndex: number;
  totalQ: number;
  timeLeft: number;
  onAnswer: (given: AnswerValue, correct: boolean, hintUsed: boolean) => void;
  onNext: () => void;
  isLastQuestion: boolean;
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

  const a11yLabel = highlight 
    ? `Koordináta rendszer. A kijelölt pont: ${highlight}.` 
    : "Koordináta rendszer pontokkal.";

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-slate-900 rounded-xl border border-slate-700 p-2 shadow-inner overflow-hidden">
        <svg 
          width="320" 
          height="320" 
          viewBox="0 0 320 320" 
          className="select-none" 
          role="img" 
          aria-label={a11yLabel}
        >
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

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, qIndex, totalQ, timeLeft, onAnswer, onNext, isLastQuestion }) => {
  const [shortAnswer, setShortAnswer] = useState('');
  
  // Matching state
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({}); 

  // Feedback state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerValue | null>(null); 
  
  // Hint State
  const [hintUsed, setHintUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  
  const isTimeUp = timeLeft === 0;
  const showResult = isSubmitted || isTimeUp;

  // Initialize matching items when question changes
  // Note: Standard state reset is handled by the parent component using a unique 'key' prop
  useEffect(() => {
    if (question.type === 'matching' && question.pairs) {
      setLeftItems(Object.keys(question.pairs));
      setRightItems([...Object.values(question.pairs)].sort(() => Math.random() - 0.5));
    }
    // Reset local states
    setHintUsed(false);
    setEliminatedOptions([]);
    setShortAnswer('');
    setIsSubmitted(false);
    setSelectedAnswer(null);
    setPairs({});
    setSelectedLeft(null);
  }, [question]);

  // Hint Logic
  const handleHint = () => {
    if (hintUsed || isSubmitted || isTimeUp) return;
    setHintUsed(true);

    if (question.type === 'mcq' && question.options) {
      // Find incorrect options
      const incorrectIndices = question.options
        .map((_, idx) => idx)
        .filter(idx => idx !== question.correct);
      
      if (incorrectIndices.length > 0) {
        // Pick one random incorrect option to eliminate
        const randomIncorrect = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];
        setEliminatedOptions([randomIncorrect]);
      }
    }
    // For other types, we show the explanation text below the question (rendered in JSX)
  };

  // Handler for MCQ
  const handleMCQ = (index: number) => {
    if (isSubmitted || isTimeUp) return;
    
    setIsSubmitted(true);
    setSelectedAnswer(index);

    const isCorrect = index === question.correct;
    onAnswer(index, isCorrect, hintUsed);
  };

  // Handler for True/False
  const handleTF = (val: boolean) => {
    if (isSubmitted || isTimeUp) return;

    setIsSubmitted(true);
    setSelectedAnswer(val);

    const isCorrect = val === question.correct;
    onAnswer(val, isCorrect, hintUsed);
  };

  // Helper to normalize strings for comparison (handles 3.5 vs 3,5 and spaces)
  const normalizeAnswer = (str: string) => {
    if (!str) return '';
    return str.toString().trim().replace(/\s/g, '').replace(/\./g, ',').toLowerCase();
  };

  // Handler for Short Answer
  const handleShortSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted || isTimeUp) return;
    if (!shortAnswer.trim()) return;

    setIsSubmitted(true);
    setSelectedAnswer(shortAnswer);

    // Normalize both user answer and correct answer
    // This allows accepting "3.5" when correct is "3,5" and ignores extra spaces
    const userNorm = normalizeAnswer(shortAnswer);
    const correctNorm = normalizeAnswer(String(question.correctAnswer));

    const isCorrect = userNorm === correctNorm;
    onAnswer(shortAnswer, isCorrect, hintUsed);
  };

  // Handler for Matching Logic
  const handleMatchingLeft = (item: string) => {
    if (isSubmitted || isTimeUp) return;
    if (pairs[item]) return; // Already paired
    setSelectedLeft(item);
  };

  const handleMatchingRight = (item: string) => {
    if (isSubmitted || isTimeUp) return;
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
      const isPerfect = ratio === 1;
      
      // Delay slightly so the user sees the last match connecting
      setTimeout(() => {
        onAnswer(Object.entries(newPairs).map(([k,v]) => ({k, actual:v})), isPerfect, hintUsed);
      }, 300);
    }
  };

  // Determine if the answer is correct for feedback display
  const isCorrect = isSubmitted && (
    question.type === 'matching' 
      ? Object.entries(pairs).every(([k, v]) => question.pairs && question.pairs[k] === v) && Object.keys(pairs).length === Object.keys(question.pairs || {}).length
      : (question.type === 'short' || question.type === 'shortnum' 
          ? normalizeAnswer(String(shortAnswer)) === normalizeAnswer(String(question.correctAnswer))
          : selectedAnswer === question.correct)
  );

  // Helper for button classes
  const getButtonClass = (valueOrIndex: number | boolean) => {
    let cls = "p-4 text-lg font-semibold rounded-xl border-2 text-left transition-all ";
    
    // Check if eliminated
    if (typeof valueOrIndex === 'number' && eliminatedOptions.includes(valueOrIndex)) {
      return "p-4 text-lg font-semibold rounded-xl border-2 text-left transition-all bg-slate-900 border-slate-800 text-slate-600 opacity-30 cursor-not-allowed decoration-line-through";
    }

    if (showResult) {
      if (valueOrIndex === question.correct) cls += "bg-emerald-500/20 border-emerald-500 text-emerald-400";
      else if (isSubmitted && valueOrIndex === selectedAnswer) cls += "bg-red-500/20 border-red-500 text-red-400";
      else cls += "bg-slate-800 border-transparent opacity-50";
    } else {
      cls += "bg-slate-800 border-white/10 hover:border-blue-500 hover:bg-slate-700/50";
    }
    return cls;
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in pb-10">
      
      {/* Top Bar: Progress + Hint Button */}
      <div className="flex justify-between items-start">
        <div className="text-slate-400 font-medium text-sm">
          <span>{qIndex + 1} / {totalQ} Kérdés</span>
          <div className="mt-1 inline-block px-2 py-0.5 bg-slate-800 rounded-lg border border-white/5 text-xs">
            {question.category}
          </div>
        </div>
        
        {!showResult && (
          <button
            onClick={handleHint}
            disabled={hintUsed}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold border transition-all
              ${hintUsed 
                ? "bg-amber-500/10 border-amber-500/30 text-amber-500/50 cursor-default" 
                : "bg-amber-500/10 border-amber-500 text-amber-400 hover:bg-amber-500/20"}
            `}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            {hintUsed ? "Tipp használva" : "Tipp (-50% pont)"}
          </button>
        )}
      </div>

      {/* Question */}
      <div className="space-y-4">
         <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
           {question.question}
         </h2>
         {question.gridConfig && (
           <CoordinateSystem points={question.gridConfig.points} highlight={question.gridConfig.highlight} />
         )}
      </div>

      {/* Text Hint (For non-MCQ) */}
      {hintUsed && question.type !== 'mcq' && !showResult && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-amber-100 text-sm animate-fade-in">
          <strong className="block text-amber-400 mb-1">💡 Segítség:</strong>
          {question.explanation}
        </div>
      )}

      {/* Inputs */}
      <div className="space-y-4">
        {question.type === 'mcq' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options?.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => handleMCQ(i)} 
                disabled={showResult || eliminatedOptions.includes(i)} 
                className={getButtonClass(i)}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {question.type === 'tf' && (
          <div className="flex gap-4">
            {[true, false].map(val => (
               <button key={String(val)} onClick={() => handleTF(val)} disabled={showResult} className={getButtonClass(val) + " flex-1 text-xl font-bold"}>
                 {val ? "Igaz" : "Hamis"}
               </button>
            ))}
          </div>
        )}

        {(question.type === 'short' || question.type === 'shortnum') && (
          <form onSubmit={handleShortSubmit} className="space-y-4">
            <input 
              /* Changed type="number" to "text" to allow characters like '/' for fractions and to control decimal separators manually */
              type="text"
              /* Use text input mode to ensure availability of minus sign, comma, and slash on iOS/Android keyboards */
              inputMode="text"
              value={shortAnswer}
              onChange={e => setShortAnswer(e.target.value)}
              placeholder={question.type === 'shortnum' ? "Pl. 3,5 vagy 1/2" : "Írd be a választ..."}
              disabled={showResult}
              autoComplete="off"
              className={`w-full bg-slate-900 border-2 rounded-xl p-4 text-xl outline-none transition-colors ${
                showResult 
                  ? (isCorrect 
                      ? "border-emerald-500 text-emerald-400" 
                      : "border-red-500 text-red-400")
                  : "border-slate-700 focus:border-blue-500"
              }`}
            />
            {!showResult && (
              <button 
                type="submit" 
                disabled={!shortAnswer || isTimeUp}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors"
              >
                Beküldés
              </button>
            )}
          </form>
        )}

        {question.type === 'matching' && (
           <div className="grid grid-cols-2 gap-4 md:gap-8">
             <div className="space-y-3">
               {leftItems.map(item => {
                 const isPaired = !!pairs[item];
                 const isSelected = selectedLeft === item;
                 let cls = "w-full p-4 rounded-lg border-2 text-left font-medium transition-all text-sm md:text-base ";
                 if (isPaired) cls += "bg-blue-900/20 border-blue-500/30 text-blue-300 opacity-50";
                 else if (isSelected) cls += "bg-blue-600 border-blue-400 text-white shadow-lg scale-105";
                 else cls += "bg-slate-800 border-white/10 hover:border-blue-500";
                 return (
                   <button key={item} onClick={() => handleMatchingLeft(item)} disabled={showResult || isPaired} className={cls}>
                     {item}
                   </button>
                 );
               })}
             </div>
             <div className="space-y-3">
               {rightItems.map(item => {
                 const pairKey = Object.keys(pairs).find(k => pairs[k] === item);
                 const isPaired = !!pairKey;
                 let cls = "w-full p-4 rounded-lg border-2 text-right font-medium transition-all text-sm md:text-base ";
                 
                 if (isPaired) {
                    if (showResult) {
                       const correct = question.pairs && question.pairs[pairKey!] === item;
                       cls += correct ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-red-500/20 border-red-500 text-red-400";
                    } else {
                       cls += "bg-blue-900/20 border-blue-500/30 text-blue-300";
                    }
                 } else if (selectedLeft) {
                    cls += "bg-slate-800 border-white/10 hover:border-blue-500 cursor-pointer animate-pulse";
                 } else {
                    cls += "bg-slate-800 border-transparent opacity-50";
                 }

                 return (
                   <button key={item} onClick={() => handleMatchingRight(item)} disabled={showResult || (isPaired && !showResult)} className={cls}>
                     {item}
                   </button>
                 );
               })}
             </div>
           </div>
        )}
      </div>

      {showResult && (
        <div className={`p-6 rounded-2xl border ${
           isCorrect
           ? "bg-emerald-500/10 border-emerald-500/20"
           : "bg-red-500/10 border-red-500/20"
        } animate-fade-in`}>
          <div className="flex items-center gap-3 mb-2">
             <div className={`text-lg font-bold ${
                isCorrect ? "text-emerald-400" : "text-red-400"
             }`}>
               {isTimeUp && !isSubmitted 
                  ? "Idő lejárt!" 
                  : (question.type === 'matching' ? "Eredmény:" : (isCorrect ? "Helyes Válasz!" : "Helytelen Válasz!"))}
             </div>
             {hintUsed && isCorrect && (
               <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded border border-amber-500/30">
                 Tipp használva (-50% pont)
               </span>
             )}
          </div>
          <div className="text-slate-300 leading-relaxed mb-6">
            {question.explanation}
          </div>

          <button 
            onClick={onNext}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${
              isLastQuestion 
                ? "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-emerald-900/20" 
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-900/20"
            }`}
          >
            {isLastQuestion ? "Eredmények Megtekintése" : "Következő feladat →"}
          </button>
        </div>
      )}
    </div>
  );
};
