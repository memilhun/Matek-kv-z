import React from 'react';
import { GridPoint } from '../../types';

interface CoordinateSystemProps {
  points: GridPoint[];
  highlight?: string;
  interactive?: boolean;
  onPointClick?: (x: number, y: number) => void;
  userSelected?: { x: number; y: number } | null;
}

export const CoordinateSystem: React.FC<CoordinateSystemProps> = ({
  points,
  highlight,
  interactive,
  onPointClick,
  userSelected,
}) => {
  const scale = 14;
  const center = 160;
  const size = 320;

  const toSvg = (x: number, y: number) => ({
    cx: center + x * scale,
    cy: center - y * scale,
  });

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive || !onPointClick) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    
    // Viewport-to-SVG viewBox ratio calculation
    const xRatio = size / rect.width;
    const yRatio = size / rect.height;
    
    const clickX = (e.clientX - rect.left) * xRatio;
    const clickY = (e.clientY - rect.top) * yRatio;

    const gridX = Math.round((clickX - center) / scale);
    const gridY = Math.round((center - clickY) / scale);

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
          className={`w-full h-full select-none touch-none ${interactive ? 'cursor-crosshair active:scale-[0.98] transition-transform' : ''}`}
          onClick={handleClick}
          aria-label="Interaktív koordináta-háló"
          role="application"
        >
          {/* Grid lines */}
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
                  opacity={isAxis ? 0.8 : 0.2} 
                />
                <line 
                  x1={10} y1={svgPos} x2={310} y2={svgPos} 
                  stroke={isAxis ? "#94a3b8" : "#334155"} 
                  strokeWidth={isAxis ? 2 : 1} 
                  opacity={isAxis ? 0.8 : 0.2} 
                />
              </React.Fragment>
            );
          })}
          
          <text x={305} y={center - 5} fill="#64748b" fontSize="10" fontWeight="bold">x</text>
          <text x={center + 5} y={15} fill="#64748b" fontSize="10" fontWeight="bold">y</text>

          {/* Points */}
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

          {userSelected && (
            <g className="animate-fade-in">
              <circle {...toSvg(userSelected.x, userSelected.y)} r="6" fill="#f43f5e" stroke="white" strokeWidth="2" />
              <text x={toSvg(userSelected.x, userSelected.y).cx + 10} y={toSvg(userSelected.x, userSelected.y).cy - 10} fill="#f43f5e" fontSize="14" fontWeight="black">?</text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};