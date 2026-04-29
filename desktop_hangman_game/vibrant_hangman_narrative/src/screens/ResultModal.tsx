import React from 'react';
import { useGameContext } from '../hooks/useGameState';
import { Trophy, Check, Share2, MoreHorizontal } from 'lucide-react';
import { GameButton } from '../components/GameButton';

export function ResultModal() {
  const {
    phase,
    currentWord,
    wins,
    streak,
    totalGuesses,
    correctGuesses,
    score,
    closeResult,
    startGame,
    selectedCategory,
    formatTime,
    roundTime,
  } = useGameContext();

  if (!currentWord) return null;

  const isWon = phase === 'won';

  const accuracy = totalGuesses > 0 ? Math.round((correctGuesses / totalGuesses) * 100) : 0;
  const earnedPoints = isWon ? Math.max(500 + score, 100) : 0;

  // Use actual elapsed round time from shared state
  const timeTaken = formatTime(roundTime);

  return (
    <div className="modal-overlay" onClick={closeResult}>
      <div className="result-modal" onClick={(e) => e.stopPropagation()}>
        {/* Left: Win/Loss area */}
        <div className="result-left">
          <div className="result-trophy">
            {isWon ? (
              <Trophy size={48} strokeWidth={2.5} />
            ) : (
              <span style={{ fontSize: 36 }}>😢</span>
            )}
          </div>

          <h2 className="result-win-title">{isWon ? 'YOU WIN!' : 'GAME OVER'}</h2>
          <p className="result-win-subtitle">
            {isWon
              ? accuracy >= 90
                ? 'Perfectly guessed!'
                : 'You cracked the word!'
              : `The word was "${currentWord.word}". Better luck next time!`}
          </p>

          <GameButton
            variant="dark"
            size="lg"
            onClick={() => { closeResult(); startGame(selectedCategory || undefined); }}
          >
            ▶ Play Again
          </GameButton>

          {!isWon && (
            <GameButton variant="outline" onClick={closeResult}>
              Back to Menu
            </GameButton>
          )}
        </div>

        {/* Right: Stats area */}
        <div className="result-right">
          <span className="result-word-label">SECRET WORD</span>
          <div className="result-word">
            {currentWord.word}
            {isWon ? <Check size={28} /> : null}
          </div>
          <p className="result-definition">{currentWord.definition}</p>

          <div style={{ display: 'flex', gap: 'var(--space-sm)', margin: 'var(--space-sm) 0' }}>
            <div className="result-stat-box" style={{ flex: 1 }}>
              <div className="stat-label">Time Taken</div>
              <div className="stat-value">{timeTaken}</div>
            </div>
            <div className="result-stat-box" style={{ flex: 1 }}>
              <div className="stat-label">Points Earned</div>
              <div className="stat-value">+{earnedPoints.toLocaleString()}</div>
            </div>
          </div>

          {/* Experience bar */}
          <div className="experience-bar">
            <div
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span className="xp-label">Experience</span>
              <span className="xp-level">Level {10 + Math.floor(wins / 4) + (isWon ? 1 : 0)}</span>
            </div>
            <div className="xp-fill">
              <div
                className="xp-fill-inner"
                style={{ width: `${isWon ? ((wins % 4) / 4 * 100) + 25 : ((wins % 4) / 4 * 100)}%` }}
              />
            </div>
          </div>

          {/* Bottom actions */}
          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <GameButton variant="outline" size="sm">
              <Share2 size={14} /> Share
            </GameButton>
            <GameButton variant="outline" size="sm">
              <MoreHorizontal size={16} />
            </GameButton>
          </div>
        </div>
      </div>
    </div>
  );
}
