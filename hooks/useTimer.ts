import { useState, useEffect, useRef } from 'react';

interface UseTimerProps {
  initialTime: number;
  onTimeOut: () => void;
  isActive: boolean;
}

export const useTimer = ({ initialTime, onTimeOut, isActive }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onTimeOutRef = useRef(onTimeOut);
  const isActiveRef = useRef(isActive);

  // Sync refs to avoid stale closures in setInterval
  useEffect(() => {
    onTimeOutRef.current = onTimeOut;
    isActiveRef.current = isActive;
  }, [onTimeOut, isActive]);

  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setTimeLeft(initialTime);
    const startTime = Date.now();
    const durationMs = initialTime * 1000;

    timerRef.current = setInterval(() => {
      if (!isActiveRef.current) {
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
      
      if (remaining <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeLeft(0);
        onTimeOutRef.current();
      } else {
        setTimeLeft(remaining);
      }
    }, 200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [initialTime, isActive]);

  return { timeLeft, setTimeLeft };
};