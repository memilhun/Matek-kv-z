
export function calculateEarnedPoints(
  basePoints: number, 
  streak: number, 
  timeLeft: number, 
  hintUsed: boolean
): number {
  const multiplier = streak >= 3 ? 1.5 : (streak === 2 ? 1.2 : 1);
  const timeBonus = Math.round(timeLeft * 0.15); 
  
  let earned = Math.round(basePoints * multiplier) + timeBonus;
  
  if (hintUsed) {
    earned = Math.round(earned / 2);
  }
  
  return earned;
}
