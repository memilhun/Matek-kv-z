
import React from 'react';
import { GridPoint } from '../../types';

interface CoordinateSystemProps {
  points: GridPoint[];
  highlight?: string;
  interactive?: boolean;
  onPointClick?: (x: number, y: number) => void;
  userSelected?: { x: number; y: number } | null;
  correctTarget?: { x: number; y: number } | null;
}

export const CoordinateSystem: React.FC<CoordinateSystemProps> = ({
  points,
  highlight,
  interactive,
  onPointClick,
  userSelected,
  correctTarget
}) => {
  const scale = 14;
  const center = 160;
  const size = 320;

  const toSvg = (x: number, y: number) => ({
    cx: center + x * scale,
    cy: center - y * scale,
  });

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!interactive || !onPointClick) return;
    
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    
    // ClientX/Y relative to the element, correctly handles scaling
    const xInSvg = (e.clientX - rect.left) * (size / rect.width);
    const yInSvg = (e.clientY - rect.top) * (size / rect.height);

    const gridX = Math.round((xInSvg - center) / scale);
    const gridY = Math.round((center - yInSvg) / scale);

    if (gridX >= -10 && gridX <= 10 && gridY >= -10 && gridY <= 10) {
      onPointClick(gridX, gridY);
    }
  };

  return (
    <div className="flex justify-center w-full max-w-[320px] mx-auto mb-4 px-2">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 p-1.5 shadow-2xl overflow-hidden w-full aspect-square">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          preserveAspectRatio="xMidYMid meet"
          className={`w-full h-full select-none touch-none ${interactive ? 'cursor-crosshair active:scale-[0.99] transition-transform' : ''}`}
          onPointerDown={handlePointerDown}
          aria-label="Koordináta-háló"
          role="application"
        >
          {/* Rács háló */}
          {Array.from({ length: 21 }).map((_, i) => {
            const pos = i - 10;
            const svgPos = center + pos * scale;
            const isAxis = pos === 0;
            return (
              <React.Fragment key={i}>
                <line 
                  x1={svgPos} y1={10} x2={svgPos} y2={310} 
                  stroke={isAxis ? "#94a3b8" : "#334155"} 
                  strokeWidth={isAxis ? 2 : 1} 
                  opacity={isAxis ? 0.8 : 0.15} 
                />
                <line 
                  x1={10} y1={svgPos} x2={310} y2={svgPos} 
                  stroke={isAxis ? "#94a3b8" : "#334155"} 
                  strokeWidth={isAxis ? 2 : 1} 
                  opacity={isAxis ? 0.8 : 0.15} 
                />
              </React.Fragment>
            );
          })}
          
          <text x={305} y={center - 5} fill="#64748b" fontSize="10" fontWeight="bold">x</text>
          <text x={center + 5} y={15} fill="#64748b" fontSize="10" fontWeight="bold">y</text>

          {/* Feladat pontjai */}
          {points.map((p, i) => {
            const { cx, cy } = toSvg(p.x, p.y);
            const isHighlighted = highlight === p.label;
            return (
              <g key={`${p.label}-${i}`}>
                <circle 
                  cx={cx} cy={cy} r={isHighlighted ? 6 : 4} 
                  fill={isHighlighted ? "#fbbf24" : "#3b82f6"} 
                  stroke="#0f172a" strokeWidth="2" 
                  className={isHighlighted ? "animate-pulse" : ""} 
                />
                <text 
                  x={cx + 7} y={cy - 7} 
                  fill={isHighlighted ? "#fbbf24" : "#e2e8f0"} 
                  fontSize="10" fontWeight="bold"
                  className="pointer-events-none drop-shadow-md"
                >
                  {p.label}
                </text>
              </g>
            );
          })}

          {/* Felhasználó választása */}
          {userSelected && (
            <g className="animate-fade-in">
              <circle {...toSvg(userSelected.x, userSelected.y)} r="6" fill="#f43f5e" stroke="white" strokeWidth="2" />
              <line 
                x1={toSvg(userSelected.x, userSelected.y).cx - 8} y1={toSvg(userSelected.x, userSelected.y).cy}
                x2={toSvg(userSelected.x, userSelected.y).cx + 8} y2={toSvg(userSelected.x, userSelected.y).cy}
                stroke="white" strokeWidth="1.5"
              />
              <line 
                x1={toSvg(userSelected.x, userSelected.y).cx} y1={toSvg(userSelected.x, userSelected.y).cy - 8}
                x2={toSvg(userSelected.x, userSelected.y).cx} y2={toSvg(userSelected.x, userSelected.y).cy + 8}
                stroke="white" strokeWidth="1.5"
              />
            </g>
          )}

          {/* Helyes válasz mutatása kiértékeléskor */}
          {correctTarget && (
            <g className="animate-fade-in">
              <circle {...toSvg(correctTarget.x, correctTarget.y)} r="8" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="2,2" />
              <circle {...toSvg(correctTarget.x, correctTarget.y)} r="3" fill="#10b981" />
              <text 
                x={toSvg(correctTarget.x, correctTarget.y).cx + 10} 
                y={toSvg(correctTarget.x, correctTarget.y).cy + 15} 
                fill="#10b981" fontSize="10" fontWeight="black"
              >
                Helyes
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
