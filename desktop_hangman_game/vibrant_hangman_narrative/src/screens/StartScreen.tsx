import React from 'react';
import { useGameContext } from '../hooks/useGameState';
import { wordCategories } from '../data/words';
import { CategoryCard } from '../components/CategoryCard';
import { GameButton } from '../components/GameButton';

export function StartScreen() {
  const { selectedCategory, selectCategory, startGame, wins, streak } = useGameContext();

  return (
    <div className="screen-content">
      {/* Hero Banner */}
      <div className="hero-banner">
        <span className="pill pill-pink hero-badge">TACTILE EDITION</span>

        {/* Faint hangman silhouette */}
        <svg className="hero-silhouette" width="200" height="220" viewBox="0 0 200 220" fill="white">
          <line x1="20" y1="200" x2="160" y2="200" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="200" x2="50" y2="20" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="20" x2="160" y2="20" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="50" x2="90" y2="20" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="20" x2="160" y2="45" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="65" r="18" fill="none" strokeWidth="3" />
          <line x1="160" y1="83" x2="160" y2="140" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="100" x2="135" y2="125" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="100" x2="185" y2="125" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="140" x2="140" y2="175" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="140" x2="180" y2="175" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <h1 className="hero-title">Hangman Tactile</h1>
        <p className="hero-subtitle">
          Guess letter by letter. Feel every move. Every word is a new adventure.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">🏆 Wins: {wins}</div>
          <div className="hero-stat">🔥 Streak: {streak}</div>
        </div>
      </div>

      {/* Category Selection */}
      <section>
        <h2 className="screen-heading">Select Category</h2>
        <div className="category-grid">
          {wordCategories.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              icon={cat.icon}
              selected={selectedCategory === cat.name}
              onClick={() => selectCategory(cat.name)}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="game-actions">
          <GameButton variant="primary" size="lg" fullWidth onClick={() => startGame()} disabled={!selectedCategory}>
            ▶ New Game
          </GameButton>
          <GameButton variant="outline" fullWidth disabled>
            ⓘ How to Play
          </GameButton>
        </div>
      </section>
    </div>
  );
}
