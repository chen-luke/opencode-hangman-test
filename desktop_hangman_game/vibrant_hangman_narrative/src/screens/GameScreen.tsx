import React, { useCallback } from 'react';
import { useGameContext } from '../hooks/useGameState';
import { HangmanCanvas } from '../components/HangmanCanvas';
import { WordBlanks } from '../components/WordBlanks';
import { GameKeyboard } from '../components/GameKeyboard';
import { StatCard } from '../components/StatCard';
import { GameButton } from '../components/GameButton';
import { Lightbulb, Timer, BarChart3, Globe, RotateCcw } from 'lucide-react';
import { wordCategories } from '../data/words';

// Most frequent English letters, used by AUTO GUESS
const FREQUENT_LETTERS = [
  'E', 'T', 'A', 'O', 'I', 'N', 'S', 'H', 'R', 'D', 'L', 'C',
  'U', 'M', 'W', 'F', 'G', 'Y', 'P', 'B', 'V', 'K', 'J', 'X', 'Q', 'Z',
];

export function GameScreen() {
  const {
    currentWord,
    guessedLetters,
    lives,
    maxLives,
    totalGuesses,
    correctGuesses,
    roundTime,
    lastGuessed,
    selectedCategory,
    phase,
    guessLetter,
    formatTime,
  } = useGameContext();

  if (!currentWord) return null;

  const accuracy = totalGuesses > 0 ? Math.round((correctGuesses / totalGuesses) * 100) : 0;

  // AUTO GUESS: pick the next most frequent English letter not yet guessed
  const nextBestGuess = FREQUENT_LETTERS.find((l) => !guessedLetters.has(l.toLowerCase()));

  // Map category to a display label
  const categoryLabels: Record<string, string> = {
    Animals: '🦁 ANIMALS & CREATURES',
    Movies: '🎬 CLASSIC CINEMA',
    Science: '🔬 SCIENCE & NATURE',
    Geography: '🌍 GEOGRAPHY & PLACES',
    Food: '🍽️ FOOD & DRINK',
    Tech: '💻 TECHNOLOGY',
  };

  const categoryLabel = categoryLabels[selectedCategory || ''] || `📂 ${selectedCategory || 'MIXED'}`;

  const maxTime = 180; // 3 min
  const timeProgress = Math.min((roundTime / maxTime) * 100, 100);

  return (
    <div className="game-screen">
      {/* Game area: two columns */}
      <div className="game-area">
        {/* Left: Hangman */}
        <div className="hangman-card">
          <div className="hint-badge">
            <span className="pill pill-primary">💡 HINT</span>
          </div>
          <HangmanCanvas lives={lives} maxLives={maxLives} />
        </div>

        {/* Right: Word + Keyboard */}
        <div className="word-area">
          <span className="word-label">Current Word: {currentWord.word.length} letters</span>

          <WordBlanks word={currentWord.word} guessedLetters={guessedLetters} />

          <span className="pill pill-purple">{categoryLabel}</span>

          <GameKeyboard
            guessedLetters={guessedLetters}
            word={currentWord.word}
            onGuess={guessLetter}
            disabled={phase !== 'playing'}
            lastGuessed={lastGuessed}
          />

          <div className="game-controls-row">
            <GameButton
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => nextBestGuess && guessLetter(nextBestGuess)}
              disabled={!nextBestGuess || phase !== 'playing'}
            >
              AUTO GUESS
            </GameButton>
            <GameButton variant="pink-outline" size="md">
              <RotateCcw size={18} />
            </GameButton>
          </div>
        </div>
      </div>

      {/* Bottom stat cards */}
      <div className="stats-row">
        <StatCard
          icon={<Timer size={20} />}
          label="Round Time"
          value={formatTime(roundTime)}
          progress={timeProgress}
        />
        <StatCard
          icon={<BarChart3 size={20} />}
          label="Accuracy"
          value={`${accuracy}%`}
          subtext={`${correctGuesses}/${totalGuesses} correct guesses`}
        />
        <StatCard
          icon={<Globe size={20} />}
          label="Global Rank"
          value="#482"
          subtext="Top 5% this week"
        />
      </div>
    </div>
  );
}
