
import React, { useState, useEffect, useRef } from 'react';
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

const CoordinateSystem: React.FC<{ 
  points: GridPoint[], 
  highlight?: string, 
  interactive?: boolean,
  onPointClick?: (x: number, y: number) => void,
  userSelected?: {x: number, y: number} | null
}> = ({ points, highlight, interactive, onPointClick, userSelected }) => {
  const scale = 14; 
  const center = 160; 

  const toSvg = (x: number, y: number) => ({
    cx: center + x * scale,
    cy: center - y * scale 
  });

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive || !onPointClick) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Snap to grid
    const gridX = Math.round((x - center) / scale);
    const gridY = Math.round((center - y) / scale);
    
    if (gridX >= -10 && gridX <= 10 && gridY >= -10 && gridY <= 10) {
      onPointClick(gridX, gridY);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-slate-900 rounded-xl border border-slate-700 p-2 shadow-inner overflow-hidden">
        <svg 
          width="320" height="320" viewBox="0 0 320 320" 
          className={`select-none ${interactive ? 'cursor-crosshair' : ''}`}
          onClick={handleClick}
        >
          {Array.from({ length: 21 }).map((_, i) => {
            const pos = i - 10;
            const svgPos = center + pos * scale;
            const isAxis = pos === 0;
            return (
              <React.Fragment key={i}>
                <line x1={svgPos} y1={20} x2={svgPos} y2={300} stroke={isAxis ? "#94a3b8" : "#334155"} strokeWidth={isAxis ? 2 : 1} opacity={isAxis ? 1 : 0.3} />
                <line x1={20} y1={svgPos} x2={300} y2={svgPos} stroke={isAxis ? "#94a3b8" : "#334155"} strokeWidth={isAxis ? 2 : 1} opacity={isAxis ? 1 : 0.3} />
              </React.Fragment>
            );
          })}
          <text x={310} y={center + 5} fill="#94a3b8" fontSize="12" fontWeight="bold">x</text>
          <text x={center + 5} y={15} fill="#94a3b8" fontSize="12" fontWeight="bold">y</text>
          {points.map((p, i) => {
            const { cx, cy } = toSvg(p.x, p.y);
            const isHighlighted = highlight === p.label;
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={isHighlighted ? 6 : 4} fill={isHighlighted ? "#fbbf24" : "#3b82f6"} stroke="#1e293b" strokeWidth="2" className={isHighlighted ? "animate-pulse" : ""} />
                <text x={cx + 8} y={cy - 8} fill={isHighlighted ? "#fbbf24" : "#e2e8f0"} fontSize="14" fontWeight="bold">{p.label}</text>
              </g>
            );
          })}
          {userSelected && (
             <g>
               <circle {...toSvg(userSelected.x, userSelected.y)} r="6" fill="#f43f5e" stroke="white" strokeWidth="2" />
               <text x={toSvg(userSelected.x, userSelected.y).cx + 10} y={toSvg(userSelected.x, userSelected.y).cy - 10} fill="#f43f5e" fontSize="14" fontWeight="black">?</text>
             </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, qIndex, totalQ, timeLeft, onAnswer, onNext, isLastQuestion }) => {
  const [shortAnswer, setShortAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerValue | null>(null); 
  const [hintUsed, setHintUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);

  // Matching specific
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({}); 

  // Ordering specific
  const [orderPool, setOrderPool] = useState<string[]>([]);
  const [orderResult, setOrderResult] = useState<string[]>([]);

  // Estimation specific
  const [sliderVal, setSliderVal] = useState(0);

  // Set Placement specific
  const [setItemIndex, setSetItemIndex] = useState(0);
  const [placements, setPlacements] = useState<{val: string, zone: string}[]>([]);

  // Coordinate Picker
  const [pickedPoint, setPickedPoint] = useState<{x: number, y: number} | null>(null);

  const isTimeUp = timeLeft === 0;
  const showResult = isSubmitted || isTimeUp;

  useEffect(() => {
    setHintUsed(false);
    setEliminatedOptions([]);
    setShortAnswer('');
    setIsSubmitted(false);
    setSelectedAnswer(null);
    setPairs({});
    setSelectedLeft(null);
    setSliderVal(question.min || 0);
    setOrderResult([]);
    setSetItemIndex(0);
    setPlacements([]);
    setPickedPoint(null);

    if (question.type === 'matching' && question.pairs) {
      setLeftItems(Object.keys(question.pairs));
      setRightItems([...Object.values(question.pairs)].sort(() => Math.random() - 0.5));
    }
    if (question.type === 'ordering' && question.items) {
      setOrderPool([...question.items].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  const handleHint = () => {
    if (hintUsed || isSubmitted || isTimeUp) return;
    setHintUsed(true);
    if ((question.type === 'mcq' || question.type === 'plan_selector') && question.options) {
      const incorrectIndices = question.options.map((_, idx) => idx).filter(idx => idx !== question.correct);
      if (incorrectIndices.length > 0) {
        setEliminatedOptions([incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)]]);
      }
    }
  };

  const handleMCQ = (index: number) => {
    if (isSubmitted || isTimeUp) return;
    setIsSubmitted(true);
    setSelectedAnswer(index);
    onAnswer(index, index === question.correct, hintUsed);
  };

  const handleTF = (val: boolean) => {
    if (isSubmitted || isTimeUp) return;
    setIsSubmitted(true);
    setSelectedAnswer(val);
    onAnswer(val, val === question.correct, hintUsed);
  };

  const normalizeAnswer = (str: string) => str ? str.toString().trim().replace(/\s/g, '').replace(/\./g, ',').toLowerCase() : '';

  const handleShortSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted || isTimeUp || !shortAnswer.trim()) return;
    setIsSubmitted(true);
    setSelectedAnswer(shortAnswer);
    const isCorrect = normalizeAnswer(shortAnswer) === normalizeAnswer(String(question.correctAnswer));
    onAnswer(shortAnswer, isCorrect, hintUsed);
  };

  // --- Matching ---
  const handleMatchingLeft = (item: string) => {
    if (isSubmitted || isTimeUp || pairs[item]) return;
    setSelectedLeft(item);
  };

  const handleMatchingRight = (item: string) => {
    if (isSubmitted || isTimeUp || !selectedLeft || Object.values(pairs).includes(item)) return;
    const newPairs = { ...pairs, [selectedLeft]: item };
    setPairs(newPairs);
    setSelectedLeft(null);
    if (Object.keys(newPairs).length === leftItems.length) {
      setIsSubmitted(true);
      const isPerfect = Object.entries(newPairs).every(([k, v]) => question.pairs && String(question.pairs[k]) === String(v));
      onAnswer(Object.entries(newPairs).map(([k,v]) => ({k, actual:v})), isPerfect, hintUsed);
    }
  };

  // --- Ordering ---
  const handleOrderAdd = (item: string) => {
    if (isSubmitted || isTimeUp) return;
    setOrderPool(prev => prev.filter(i => i !== item));
    setOrderResult(prev => [...prev, item]);
  };

  const handleOrderRemove = (item: string) => {
    if (isSubmitted || isTimeUp) return;
    setOrderResult(prev => prev.filter(i => i !== item));
    setOrderPool(prev => [...prev, item]);
  };

  const submitOrdering = () => {
    if (isSubmitted || isTimeUp || orderPool.length > 0) return;
    setIsSubmitted(true);
    setSelectedAnswer(orderResult);
    const isCorrect = JSON.stringify(orderResult) === JSON.stringify(question.correctOrder);
    onAnswer(orderResult, isCorrect, hintUsed);
  };

  // --- Estimation ---
  const submitEstimation = () => {
    if (isSubmitted || isTimeUp) return;
    setIsSubmitted(true);
    setSelectedAnswer(sliderVal);
    const diff = Math.abs(sliderVal - (question.correctValue || 0));
    const allowed = (question.correctValue || 0) * ((question.tolerance || 10) / 100);
    onAnswer(sliderVal, diff <= allowed, hintUsed);
  };

  // --- Set Placement ---
  const handleSetPlacement = (zone: string) => {
    if (isSubmitted || isTimeUp || !question.itemsToPlace) return;
    const currentItem = question.itemsToPlace[setItemIndex];
    const newPlacements = [...placements, { val: currentItem.val, zone }];
    setPlacements(newPlacements);
    
    if (setItemIndex < question.itemsToPlace.length - 1) {
      setSetItemIndex(prev => prev + 1);
    } else {
      setIsSubmitted(true);
      const correctCount = newPlacements.filter((p, i) => p.zone === question.itemsToPlace![i].correctZone).length;
      const isCorrect = correctCount === question.itemsToPlace.length;
      onAnswer(newPlacements, isCorrect, hintUsed);
    }
  };

  // --- Coordinate Picker ---
  const handleGridClick = (x: number, y: number) => {
    if (isSubmitted || isTimeUp || !question.target) return;
    setPickedPoint({x, y});
    setIsSubmitted(true);
    const isCorrect = x === question.target.x && y === question.target.y;
    onAnswer({x, y}, isCorrect, hintUsed);
  };

  const isCorrect = isSubmitted && (
    question.type === 'matching' ? Object.entries(pairs).every(([k, v]) => question.pairs && question.pairs[k] === v) && Object.keys(pairs).length === Object.keys(question.pairs || {}).length :
    question.type === 'ordering' ? JSON.stringify(selectedAnswer) === JSON.stringify(question.correctOrder) :
    question.type === 'estimation' ? Math.abs(Number(selectedAnswer) - (question.correctValue || 0)) <= ((question.correctValue || 0) * (question.tolerance || 10) / 100) :
    question.type === 'coordinate_picker' ? (pickedPoint?.x === question.target?.x && pickedPoint?.y === question.target?.y) :
    question.type === 'set_placement' ? placements.every((p, i) => p.zone === question.itemsToPlace?.[i].correctZone) :
    (question.type === 'short' || question.type === 'shortnum' ? normalizeAnswer(String(shortAnswer)) === normalizeAnswer(String(question.correctAnswer)) : selectedAnswer === question.correct)
  );

  const getButtonClass = (valueOrIndex: number | boolean) => {
    if (typeof valueOrIndex === 'number' && eliminatedOptions.includes(valueOrIndex)) {
      return "p-4 text-lg font-semibold rounded-xl border-2 text-left transition-all bg-slate-900 border-slate-800 text-slate-600 opacity-30 cursor-not-allowed decoration-line-through";
    }
    let cls = "p-4 text-lg font-semibold rounded-xl border-2 text-left transition-all ";
    if (showResult) {
      if (valueOrIndex === question.correct) cls += "bg-emerald-500/20 border-emerald-500 text-emerald-400";
      else if (isSubmitted && valueOrIndex === selectedAnswer) cls += "bg-red-500/20 border-red-500 text-red-400";
      else cls += "bg-slate-800 border-transparent opacity-50";
    } else {
      cls += "bg-slate-800 border-white/10 hover:border-blue-500 hover:bg-slate-700/50";
    }
    return cls;
  };

  const difficultyLabels: Record<string, {label: string, color: string}> = {
    easy: { label: 'Könnyű', color: 'bg-emerald-500/10 text-emerald-500' },
    medium: { label: 'Közepes', color: 'bg-yellow-500/10 text-yellow-500' },
    hard: { label: 'Nehéz', color: 'bg-red-500/10 text-red-500' }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in pb-10">
      <div className="flex justify-between items-start">
        <div className="text-slate-400 font-medium text-sm">
          <span>{qIndex + 1} / {totalQ} Kérdés</span>
          <div className="flex gap-2 mt-1">
            <div className="inline-block px-2 py-0.5 bg-slate-800 rounded-lg border border-white/5 text-xs">{question.category}</div>
            <div className={`inline-block px-2 py-0.5 rounded-lg border border-white/5 text-xs font-bold uppercase ${difficultyLabels[question.difficulty].color}`}>{difficultyLabels[question.difficulty].label}</div>
          </div>
        </div>
        {!showResult && (
          <button onClick={handleHint} disabled={hintUsed} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold border transition-all ${hintUsed ? "bg-amber-500/10 border-amber-500/30 text-amber-500/50 cursor-default" : "bg-amber-500/10 border-amber-500 text-amber-400 hover:bg-amber-500/20"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            {hintUsed ? "Tipp használva" : "Tipp (-50% pont)"}
          </button>
        )}
      </div>

      <div className="space-y-4">
         <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">{question.question}</h2>
         {(question.gridConfig || question.type === 'coordinate_picker') && (
           <CoordinateSystem 
            points={question.gridConfig?.points || []} 
            highlight={question.gridConfig?.highlight} 
            interactive={question.type === 'coordinate_picker' && !showResult}
            onPointClick={handleGridClick}
            userSelected={pickedPoint}
           />
         )}
      </div>

      <div className="space-y-4">
        {(question.type === 'mcq' || question.type === 'plan_selector') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options?.map((opt, i) => (
              <button key={i} onClick={() => handleMCQ(i)} disabled={showResult || eliminatedOptions.includes(i)} className={getButtonClass(i)}>{opt}</button>
            ))}
          </div>
        )}
        
        {question.type === 'tf' && (
          <div className="flex gap-4">
            {[true, false].map(val => (
               <button key={String(val)} onClick={() => handleTF(val)} disabled={showResult} className={getButtonClass(val) + " flex-1 text-xl font-bold"}>{val ? "Igaz" : "Hamis"}</button>
            ))}
          </div>
        )}

        {(question.type === 'short' || question.type === 'shortnum') && (
          <form onSubmit={handleShortSubmit} className="space-y-4 animate-fade-in">
            <input 
              autoFocus
              type="text"
              inputMode={question.type === 'shortnum' ? "decimal" : "text"}
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              disabled={showResult}
              placeholder={question.type === 'shortnum' ? "Írd be a számot..." : "Írd be a választ..."}
              className="w-full bg-slate-900 border-2 border-slate-700 focus:border-blue-500 rounded-xl px-6 py-4 text-xl text-white outline-none transition-all shadow-inner"
            />
            {!showResult && (
              <button 
                type="submit"
                disabled={!shortAnswer.trim()}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
              >
                Válasz beküldése
              </button>
            )}
          </form>
        )}

        {question.type === 'ordering' && (
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-dashed border-white/10 min-h-[80px] flex flex-wrap gap-2 items-center justify-center">
              {orderResult.length === 0 && <span className="text-slate-500 text-sm italic">Kattints az elemekre a sorrend kialakításához!</span>}
              {orderResult.map((item, idx) => (
                <button key={idx} onClick={() => handleOrderRemove(item)} disabled={showResult} className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${showResult ? (question.correctOrder?.[idx] === item ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-red-500/20 border-red-500 text-red-400') : 'bg-blue-600 border-blue-400 text-white shadow-lg'}`}>{item}</button>
              ))}
            </div>
            {!showResult && (
              <div className="flex flex-wrap gap-2 justify-center">
                {orderPool.map(item => (
                  <button key={item} onClick={() => handleOrderAdd(item)} className="px-4 py-2 bg-slate-800 border border-white/10 rounded-lg font-bold hover:border-blue-500 transition-all">{item}</button>
                ))}
              </div>
            )}
            {!showResult && orderPool.length === 0 && (
              <button onClick={submitOrdering} className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg">Sorrend beküldése</button>
            )}
          </div>
        )}

        {question.type === 'estimation' && (
          <div className="space-y-6 text-center py-6">
            <div className="text-4xl font-black text-blue-400 mb-2">{sliderVal} <span className="text-xl text-slate-500">{question.unit}</span></div>
            <input 
              type="range" min={question.min} max={question.max} step="1" 
              value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value))} 
              disabled={showResult}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-xs text-slate-500 font-bold px-1">
              <span>{question.min} {question.unit}</span>
              <span>{question.max} {question.unit}</span>
            </div>
            {!showResult && <button onClick={submitEstimation} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl">Becslés beküldése</button>}
            {showResult && (
              <div className="mt-4 text-slate-400 font-medium">Pontos érték: <span className="text-white">{question.correctValue} {question.unit}</span></div>
            )}
          </div>
        )}

        {question.type === 'set_placement' && question.itemsToPlace && (
          <div className="space-y-6">
            <div className="flex justify-center py-4 relative">
              <svg width="320" height="240" viewBox="0 0 320 240" className="drop-shadow-2xl">
                <circle cx="110" cy="120" r="90" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="210" cy="120" r="90" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" strokeWidth="2" />
                <text x="60" y="50" fill="#3b82f6" fontSize="14" fontWeight="bold">{question.setA?.label}</text>
                <text x="260" y="50" fill="#a855f7" fontSize="14" fontWeight="bold" textAnchor="end">{question.setB?.label}</text>
                {/* Zones Interaction areas */}
                {!showResult && (
                  <>
                    <path d="M110,30 A90,90 0 0,0 110,210 A90,90 0 0,1 110,30" fill="transparent" className="cursor-pointer hover:fill-blue-500/10" onClick={() => handleSetPlacement('A')} />
                    <path d="M210,30 A90,90 0 0,1 210,210 A90,90 0 0,0 210,30" fill="transparent" className="cursor-pointer hover:fill-purple-500/10" onClick={() => handleSetPlacement('B')} />
                    <path d="M110,30 A90,90 0 0,1 210,120 A90,90 0 0,1 110,210 A90,90 0 0,1 110,30" fill="transparent" className="cursor-pointer hover:fill-white/5" onClick={() => handleSetPlacement('Both')} />
                  </>
                )}
              </svg>
              {!showResult && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-white text-slate-900 px-6 py-4 rounded-2xl shadow-2xl font-black text-3xl animate-bounce pointer-events-auto">
                    {question.itemsToPlace[setItemIndex].val}
                  </div>
                </div>
              )}
            </div>
            {!showResult && (
              <div className="grid grid-cols-2 gap-2">
                 <button onClick={() => handleSetPlacement('A')} className="py-3 bg-blue-900/30 border border-blue-500/50 rounded-lg text-xs font-bold uppercase">Csak {question.setA?.label}</button>
                 <button onClick={() => handleSetPlacement('B')} className="py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg text-xs font-bold uppercase">Csak {question.setB?.label}</button>
                 <button onClick={() => handleSetPlacement('Both')} className="py-3 bg-slate-800 border border-white/10 rounded-lg text-xs font-bold uppercase col-span-2">Mindkettő</button>
                 <button onClick={() => handleSetPlacement('None')} className="py-3 bg-slate-900 border border-white/5 rounded-lg text-xs font-bold uppercase col-span-2">Egyik sem</button>
              </div>
            )}
          </div>
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
                 return <button key={item} onClick={() => handleMatchingLeft(item)} disabled={showResult || isPaired} className={cls}>{item}</button>;
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
                    } else cls += "bg-blue-900/20 border-blue-500/30 text-blue-300";
                 } else if (selectedLeft) cls += "bg-slate-800 border-white/10 hover:border-blue-500 cursor-pointer animate-pulse";
                 else cls += "bg-slate-800 border-transparent opacity-50";
                 return <button key={item} onClick={() => handleMatchingRight(item)} disabled={showResult || (isPaired && !showResult)} className={cls}>{item}</button>;
               })}
             </div>
           </div>
        )}
      </div>

      {showResult && (
        <div className={`p-6 rounded-2xl border ${isCorrect ? "bg-emerald-500/10 border-emerald-500/20" : "bg-red-500/10 border-red-500/20"} animate-fade-in`}>
          <div className="flex items-center gap-3 mb-2">
             <div className={`text-lg font-bold ${isCorrect ? "text-emerald-400" : "text-red-400"}`}>
               {isTimeUp && !isSubmitted ? "Idő lejárt!" : (isCorrect ? "Helyes Válasz!" : "Próbáld újra!")}
             </div>
          </div>
          <div className="text-slate-300 leading-relaxed mb-6">{question.explanation}</div>
          <button onClick={onNext} className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${isLastQuestion ? "bg-gradient-to-r from-emerald-600 to-green-600 shadow-emerald-900/20" : "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-900/20"}`}>
            {isLastQuestion ? "Eredmények Megtekintése" : "Következő feladat →"}
          </button>
        </div>
      )}
    </div>
  );
};
