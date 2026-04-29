import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { pickRandomWord, WordEntry } from '../data/words';

export type GamePhase = 'start' | 'playing' | 'won' | 'lost';

export interface GameState {
  phase: GamePhase;
  selectedCategory: string | null;
  currentWord: WordEntry | null;
  guessedLetters: Set<string>;
  lives: number;
  maxLives: number;
  wins: number;
  streak: number;
  totalGuesses: number;
  correctGuesses: number;
  roundTime: number;
  score: number;
  lastGuessed: string | null;
}

const INITIAL_STATE: GameState = {
  phase: 'start',
  selectedCategory: null,
  currentWord: null,
  guessedLetters: new Set(),
  lives: 6,
  maxLives: 6,
  wins: 24,
  streak: 5,
  totalGuesses: 0,
  correctGuesses: 0,
  roundTime: 0,
  score: 0,
  lastGuessed: null,
};

export interface GameContextType extends GameState {
  selectCategory: (category: string | null) => void;
  startGame: (category?: string) => void;
  guessLetter: (letter: string) => void;
  closeResult: () => void;
  formatTime: (seconds: number) => string;
}

const GameContext = createContext<GameContextType | null>(null);

export function useGameContext(): GameContextType {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameContext must be used within GameProvider');
  return ctx;
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, []);

  const selectCategory = useCallback((category: string | null) => {
    setState((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === category ? null : category,
    }));
  }, []);

  const startGame = useCallback((category?: string) => {
    setState((prev) => {
      const cat = category || prev.selectedCategory;
      if (!cat) return prev;
      const word = pickRandomWord(cat);
      if (!word) return prev;

      return {
        ...prev,
        phase: 'playing',
        selectedCategory: cat,
        currentWord: word,
        guessedLetters: new Set(),
        lives: prev.maxLives,
        totalGuesses: 0,
        correctGuesses: 0,
        roundTime: 0,
        score: 0,
        lastGuessed: null,
      };
    });
  }, []);

  const guessLetter = useCallback((letter: string) => {
    setState((prev) => {
      if (prev.phase !== 'playing' || !prev.currentWord) return prev;
      const lower = letter.toLowerCase();
      if (prev.guessedLetters.has(lower)) return prev;

      const upper = prev.currentWord.word.toUpperCase();
      const isCorrect = upper.includes(letter.toUpperCase());

      const newGuesses = new Set(prev.guessedLetters);
      newGuesses.add(lower);

      let newPhase: GamePhase = 'playing';
      let newLives = prev.lives;
      let newWins = prev.wins;
      let newStreak = prev.streak;

      const newTotalGuesses = prev.totalGuesses + 1;
      const newCorrectGuesses = isCorrect ? prev.correctGuesses + 1 : prev.correctGuesses;

      // Check win
      const wordHasLetter = (c: string) => upper.includes(c.toUpperCase());
      const uniqueLetters = new Set(upper.split(''));
      const allGuessed = Array.from(uniqueLetters).every((l) => newGuesses.has(l.toLowerCase()));

      if (allGuessed) {
        newPhase = 'won';
        newWins += 1;
        newStreak += 1;
      } else if (!isCorrect) {
        newLives = prev.lives - 1;
        if (newLives <= 0) {
          newPhase = 'lost';
          newStreak = 0;
        }
      }

      return {
        ...prev,
        guessedLetters: newGuesses,
        lives: newLives,
        phase: newPhase,
        wins: newWins,
        streak: newStreak,
        totalGuesses: newTotalGuesses,
        correctGuesses: newCorrectGuesses,
        lastGuessed: letter.toUpperCase(),
        score: prev.score + (isCorrect ? 100 : -25),
      };
    });
  }, []);

  // Timer: increment roundTime every second while phase is 'playing'
  useEffect(() => {
    if (state.phase !== 'playing') return;
    const intervalId = setInterval(() => {
      setState((prev) => ({
        ...prev,
        roundTime: prev.roundTime + 1,
      }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [state.phase]);

  const closeResult = useCallback(() => {
    setState((prev) => ({
      ...prev,
      phase: 'start',
      currentWord: null,
      guessedLetters: new Set(),
      lives: prev.maxLives,
      lastGuessed: null,
    }));
  }, []);

  return (
    <GameContext.Provider
      value={{
        ...state,
        selectCategory,
        startGame,
        guessLetter,
        closeResult,
        formatTime,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
