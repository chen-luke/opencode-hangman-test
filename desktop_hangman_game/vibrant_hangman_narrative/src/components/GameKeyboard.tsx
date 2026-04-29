import React, { useState, useEffect } from 'react';

interface GameKeyboardProps {
  guessedLetters: Set<string>;
  word: string;
  onGuess: (letter: string) => void;
  disabled?: boolean;
  lastGuessed: string | null;
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export function GameKeyboard({ guessedLetters, word: wordToCheck, onGuess, disabled, lastGuessed }: GameKeyboardProps) {
  const upperWord = wordToCheck.toUpperCase();
  const [highlightKey, setHighlightKey] = useState<string | null>(null);

  // Highlight the last guessed letter for a brief moment
  useEffect(() => {
    if (lastGuessed) {
      setHighlightKey(lastGuessed);
      const timer = setTimeout(() => setHighlightKey(null), 1500);
      return () => clearTimeout(timer);
    }
  }, [lastGuessed]);

  function getKeyClass(letter: string): string {
    const lowerLetter = letter.toLowerCase();
    if (!guessedLetters.has(lowerLetter)) {
      return ''; // available
    }
    if (highlightKey === letter) {
      return 'just-guessed';
    }
    if (upperWord.includes(letter)) {
      return 'found';
    }
    return 'used';
  }

  return (
    <div className="game-keyboard">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="keyboard-row">
          {row.map((letter) => {
            const guessed = guessedLetters.has(letter.toLowerCase());
            return (
              <button
                key={letter}
                className={`key-btn ${getKeyClass(letter)}`}
                disabled={guessed || disabled}
                onClick={() => onGuess(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
