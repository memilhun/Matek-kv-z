
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LeaderboardEntry, STORAGE_KEY_LEADERBOARD, GAS_URL } from '../types';

interface GameContextType {
  leaderboardData: LeaderboardEntry[];
  isLoadingLb: boolean;
  refreshLeaderboard: () => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoadingLb, setIsLoadingLb] = useState(false);

  const refreshLeaderboard = useCallback(async () => {
    setIsLoadingLb(true);
    let localLb: LeaderboardEntry[] = [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LEADERBOARD);
      localLb = stored ? JSON.parse(stored) : [];
    } catch (e) { 
      localLb = []; 
    }

    if (GAS_URL) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        
        // cache: 'no-cache' biztosítja, hogy a legfrissebb táblázat-adatokat kapjuk
        const response = await fetch(`${GAS_URL}?action=getLeaderboard&t=${Date.now()}`, { 
          signal: controller.signal,
          cache: 'no-cache'
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const globalData = await response.json();
          if (Array.isArray(globalData) && globalData.length > 0) {
            // Globális adatok megjelölése
            setLeaderboardData(globalData.map(e => ({ ...e, isGlobal: true })));
            setIsLoadingLb(false);
            return;
          }
        }
      } catch (e) {
        console.warn("Globális ranglista nem érhető el időtúllépés vagy CORS miatt. Helyi adatok megjelenítése.");
      }
    }
    
    // Fallback a lokális adatokra
    setLeaderboardData(Array.isArray(localLb) ? localLb : []);
    setIsLoadingLb(false);
  }, []);

  useEffect(() => {
    refreshLeaderboard();
  }, [refreshLeaderboard]);

  return (
    <GameContext.Provider value={{ leaderboardData, isLoadingLb, refreshLeaderboard }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
