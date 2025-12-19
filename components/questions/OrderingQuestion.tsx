
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
    // ID alapú azonosítás a duplikátumok kezeléséhez (pl. ['1/2', '0,5', '2/4'])
    const baseItems = items.map((val, id) => ({ id, val }));
    
    // Fisher-Yates shuffle a biztos véletlenszerűségért
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
    setPool(pool.filter(p => p.id !== item.id)); // Csak az adott ID-jú elemet vesszük ki
    
    if (newResult.length === items.length) {
      onFinish(newResult.map(r => r.val));
    }
  };

  const handleDeselect = (item: OrderItem) => {
    setResult(result.filter(r => r.id !== item.id));
    setPool([...pool, item]);
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-950 p-4 rounded-xl border-2 border-slate-800 min-h-[60px] flex flex-wrap gap-2 items-center justify-center">
        {result.map((item, i) => (
          <button 
            key={item.id} 
            onClick={() => !showResult && handleDeselect(item)}
            className={`px-3 py-2 rounded-lg font-bold border-2 transition-all ${
              showResult 
                ? (correctOrder?.[i] === item.val ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-red-500/20 border-red-500 text-red-400') 
                : 'bg-blue-600 border-blue-400 text-white'
            }`}
          >
            {item.val}
          </button>
        ))}
      </div>
      {!showResult && (
        <div className="flex flex-wrap gap-2 justify-center p-4 bg-slate-800/30 rounded-xl">
          {pool.map(item => (
            <button 
              key={item.id} 
              onClick={() => handleSelect(item)} 
              className="px-4 py-2 bg-slate-800 border border-white/10 rounded-lg hover:bg-slate-700 transition-colors"
            >
              {item.val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
