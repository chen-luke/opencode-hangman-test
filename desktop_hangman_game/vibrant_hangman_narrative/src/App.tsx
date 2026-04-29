import React, { useEffect } from 'react';
import { GameProvider, useGameContext } from './hooks/useGameState';
import { Sidebar } from './layout/Sidebar';
import { HeaderBar } from './layout/HeaderBar';
import { StartScreen } from './screens/StartScreen';
import { GameScreen } from './screens/GameScreen';
import { ResultModal } from './screens/ResultModal';

function AppContent() {
  const { phase, lives, streak, guessLetter } = useGameContext();

  // Listen for physical keyboard input
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Don't process if result modal is open
      if (phase !== 'playing') return;
      const key = e.key.toUpperCase();
      // Only process single letters A-Z
      if (/^[A-Z]$/.test(key)) {
        e.preventDefault(); // Prevent any default behavior
        guessLetter(key);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, guessLetter]);

  const isPlaying = phase === 'playing';

  return (
    <div className="app-layout">
      <Sidebar showLevel={isPlaying} />
      <div className="main-content">
        <HeaderBar
          showPills={isPlaying}
          lives={lives}
          streak={streak}
        />

        {phase === 'start' && <StartScreen />}
        {isPlaying && <GameScreen />}

        {(phase === 'won' || phase === 'lost') && <ResultModal />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
