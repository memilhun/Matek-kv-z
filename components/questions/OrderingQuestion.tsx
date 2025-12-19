
import React, { useState, useEffect } from 'react';

interface OrderItem {
  id: number;
  val: string;
}

interface OrderingQuestionProps {
  items: string[];
  correctOrder: string[];
  showResult: boolean;
  onFinish: (order: string[]) => void;
}

export const OrderingQuestion: React.FC<OrderingQuestionProps> = ({ 
  items, correctOrder, showResult, onFinish 
}) => {
  const [pool, setPool] = useState<OrderItem[]>([]);
  const [result, setResult] = useState<OrderItem[]>([]);

  useEffect(() => {
    const baseItems = items.map((val, id) => ({ id, val }));
    const shuffled = [...baseItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPool(shuffled);
    setResult([]);
  }, [items]);

  const handleSelect = (item: OrderItem) => {
    const newResult = [...result, item];
    setResult(newResult);
    setPool(pool.filter(p => p.id !== item.id));
    
    if (newResult.length === items.length) {
      onFinish(newResult.map(r => r.val));
    }
  };

  const handleUndo = () => {
    if (result.length === 0 || showResult) return;
    const lastItem = result[result.length - 1];
    setResult(result.slice(0, -1));
    setPool([...pool, lastItem]);
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-950 p-4 rounded-xl border-2 border-slate-800 min-h-[70px] flex flex-wrap gap-2 items-center justify-center relative">
        {result.length > 0 && !showResult && (
          <button 
            onClick={handleUndo}
            className="absolute -top-3 -right-2 bg-slate-700 hover:bg-slate-600 text-white text-[10px] px-2 py-1 rounded-md border border-white/10 shadow-lg transition-colors z-10"
          >
            Visszavonás ↶
          </button>
        )}
        {result.map((item, i) => (
          <div 
            key={item.id} 
            className={`px-3 py-2 rounded-lg font-bold border-2 transition-all ${
              showResult 
                ? (correctOrder?.[i] === item.val ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-red-500/20 border-red-500 text-red-400') 
                : 'bg-blue-600 border-blue-400 text-white shadow-md'
            }`}
          >
            {item.val}
          </div>
        ))}
        {result.length === 0 && <span className="text-slate-600 text-sm italic">Kattints az elemekre a sorrendhez...</span>}
      </div>
      
      {!showResult && (
        <div className="flex flex-wrap gap-2 justify-center p-4 bg-slate-800/30 rounded-xl border border-white/5">
          {pool.map(item => (
            <button 
              key={item.id} 
              onClick={() => handleSelect(item)} 
              className="px-4 py-2 bg-slate-800 border border-white/10 rounded-lg hover:bg-slate-700 hover:border-blue-500/50 transition-all active:scale-95"
            >
              {item.val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
