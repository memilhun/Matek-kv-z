import React, { useState, useEffect, useCallback } from 'react';
import { Question, AnswerValue, PairValue, SetPlacementValue, CoordinateValue } from '../types';
import { CoordinateSystem } from './common/CoordinateSystem';

import { MCQQuestion } from './questions/MCQQuestion';
import { TFQuestion } from './questions/TFQuestion';
import { ShortAnswerQuestion } from './questions/ShortAnswerQuestion';
import { OrderingQuestion } from './questions/OrderingQuestion';
import { EstimationQuestion } from './questions/EstimationQuestion';
import { MatchingQuestion } from './questions/MatchingQuestion';
import { SetPlacementQuestion } from './questions/SetPlacementQuestion';

interface QuizScreenProps {
  question: Question;
  qIndex: number;
  totalQ: number;
  timeLeft: number;
  onAnswer: (given: AnswerValue, correct: boolean, hintUsed: boolean) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  question, qIndex, totalQ, timeLeft, onAnswer, onNext, isLastQuestion 
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerValue | null>(null);
  const [hintUsed, setHintUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [pickedPoint, setPickedPoint] = useState<CoordinateValue | null>(null);

  const isTimeUp = timeLeft === 0;
  const showResult = isSubmitted || isTimeUp;

  useEffect(() => {
    setIsSubmitted(false);
    setSelectedAnswer(null);
    setHintUsed(false);
    setEliminatedOptions([]);
    setPickedPoint(null);
  }, [question.id]);

  const normalize = (val: any) => {
    if (val === null || val === undefined) return '';
    // Trim, collapse double spaces, swap dots to commas for consistency
    return val.toString().trim().toLowerCase().replace(/\s+/g, ' ').replace(/\./g, ',');
  };

  const checkCorrectness = (answer: AnswerValue): boolean => {
    if (answer === null) return false;
    switch (question.type) {
      case 'mcq':
      case 'plan_selector':
        return answer === question.correct;
      case 'tf':
        return answer === question.correct;
      case 'short':
      case 'shortnum':
        return normalize(answer) === normalize(question.correctAnswer);
      case 'matching':
        const pairs = answer as PairValue;
        const totalPairs = Object.keys(question.pairs).length;
        return pairs.length === totalPairs && 
               pairs.every(p => question.pairs[p.k] === p.actual);
      case 'ordering':
        return JSON.stringify(answer) === JSON.stringify(question.correctOrder);
      case 'estimation':
        const diff = Math.abs(Number(answer) - question.correctValue);
        const toleranceValue = question.correctValue * ((question.tolerance || 10) / 100);
        return diff <= toleranceValue;
      case 'set_placement':
        const placements = answer as SetPlacementValue;
        return placements.every((p, i) => p.zone === question.itemsToPlace[i].correctZone);
      case 'coordinate_picker':
        const pt = answer as CoordinateValue;
        return pt.x === question.target.x && pt.y === question.target.y;
      default:
        return false;
    }
  };

  const handleFinalAnswer = useCallback((value: AnswerValue) => {
    if (isSubmitted || isTimeUp) return;
    setIsSubmitted(true);
    setSelectedAnswer(value);
    onAnswer(value, checkCorrectness(value), hintUsed);
  }, [isSubmitted, isTimeUp, question, hintUsed, onAnswer]);

  const handleHint = () => {
    if (hintUsed || showResult) return;
    setHintUsed(true);
    if ((question.type === 'mcq' || question.type === 'plan_selector')) {
      const incorrectIndices = question.options.map((_, i) => i).filter(i => i !== question.correct);
      const randomIdx = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];
      setEliminatedOptions(prev => [...prev, randomIdx]);
    }
  };

  const difficultyLabels = {
    easy: { label: 'Könnyű', color: 'bg-emerald-500/10 text-emerald-500' },
    medium: { label: 'Közepes', color: 'bg-yellow-500/10 text-yellow-500' },
    hard: { label: 'Nehéz', color: 'bg-red-500/10 text-red-500' }
  };

  const renderQuestionBody = () => {
    switch (question.type) {
      case 'mcq':
      case 'plan_selector':
        return <MCQQuestion 
          options={question.options} 
          onSelect={handleFinalAnswer}
          correct={question.correct}
          showResult={showResult}
          selected={selectedAnswer as number}
          eliminated={eliminatedOptions}
        />;
      case 'tf':
        return <TFQuestion 
          onSelect={handleFinalAnswer}
          correct={question.correct}
          showResult={showResult}
          selected={selectedAnswer as boolean}
        />;
      case 'short':
      case 'shortnum':
        return <ShortAnswerQuestion 
          type={question.type}
          onSubmit={handleFinalAnswer}
          showResult={showResult}
        />;
      case 'ordering':
        return <OrderingQuestion 
          items={question.items}
          correctOrder={question.correctOrder}
          showResult={showResult}
          onFinish={handleFinalAnswer}
        />;
      case 'estimation':
        return <EstimationQuestion 
          min={question.min}
          max={question.max}
          unit={question.unit}
          showResult={showResult}
          onSubmit={handleFinalAnswer}
        />;
      case 'matching':
        return <MatchingQuestion 
          pairs={question.pairs}
          showResult={showResult}
          onFinish={handleFinalAnswer}
        />;
      case 'set_placement':
        return <SetPlacementQuestion 
          items={question.itemsToPlace}
          setA={question.setA}
          setB={question.setB}
          showResult={showResult}
          onFinish={handleFinalAnswer}
        />;
      case 'coordinate_picker':
        return <div className="p-6 bg-slate-800/50 rounded-xl border border-dashed border-white/10 text-center text-sm text-slate-400 italic">
          Kattints a fenti koordináta-rendszerben a válaszodhoz!
        </div>;
      default:
        return <div className="p-4 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20">Ismeretlen feladattípus.</div>;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in pb-10">
      <div className="flex justify-between items-start" role="status">
        <div className="text-slate-400 font-medium text-sm">
          <span aria-label={`Kérdés ${qIndex + 1} a ${totalQ}-ból`}>{qIndex + 1} / {totalQ} Kérdés</span>
          <div className="flex gap-2 mt-1">
            <span className="px-2 py-0.5 bg-slate-800 rounded-lg border border-white/5 text-[10px] uppercase font-bold">{question.category}</span>
            <span className={`px-2 py-0.5 rounded-lg border border-white/5 text-[10px] font-bold uppercase ${difficultyLabels[question.difficulty].color}`}>{difficultyLabels[question.difficulty].label}</span>
          </div>
        </div>
        {!showResult && (
          <button 
            onClick={handleHint} 
            disabled={hintUsed} 
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${hintUsed ? "bg-amber-500/10 border-amber-500/30 text-amber-500/50 cursor-default" : "bg-amber-500/10 border-amber-500 text-amber-400 hover:bg-amber-500/20"}`}
            aria-label="Tipp kérése pontlevonás ellenében"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            {hintUsed ? "Tipp használva" : "Tipp (-50%)"}
          </button>
        )}
      </div>

      <div className="space-y-4">
         <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">{question.question}</h2>
         {(question.gridConfig || question.type === 'coordinate_picker') && (
           <CoordinateSystem 
            points={question.gridConfig?.points || []} 
            highlight={question.gridConfig?.highlight} 
            interactive={question.type === 'coordinate_picker' && !showResult}
            onPointClick={(x, y) => {
              setPickedPoint({x, y});
              handleFinalAnswer({x, y});
            }}
            userSelected={pickedPoint}
           />
         )}
      </div>

      <div className="min-h-[120px]" aria-live="polite">
        {renderQuestionBody()}
      </div>

      {showResult && (
        <div 
          className={`p-6 rounded-2xl border ${checkCorrectness(selectedAnswer!) ? "bg-emerald-500/10 border-emerald-500/20" : "bg-red-500/10 border-red-500/20"} animate-fade-in shadow-xl`}
          role="alert"
        >
          <div className="flex items-center gap-3 mb-2">
             <div className={`text-lg font-bold ${checkCorrectness(selectedAnswer!) ? "text-emerald-400" : "text-red-400"}`}>
               {isTimeUp && !isSubmitted ? "Lejárt az idő!" : (checkCorrectness(selectedAnswer!) ? "Helyes!" : "Nem jó...")}
             </div>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">{question.explanation}</p>
          <button 
            onClick={onNext} 
            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] ${isLastQuestion ? "bg-emerald-600 shadow-emerald-900/20" : "bg-blue-600 shadow-blue-900/20"}`}
          >
            {isLastQuestion ? "Eredmények" : "Következő feladat →"}
          </button>
        </div>
      )}
    </div>
  );
};