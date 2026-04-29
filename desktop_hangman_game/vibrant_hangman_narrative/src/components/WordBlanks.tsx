interface WordBlanksProps {
  word: string;
  guessedLetters: Set<string>;
}

export function WordBlanks({ word, guessedLetters }: WordBlanksProps) {
  const upperWord = word.toUpperCase();

  return (
    <div className="word-blanks">
      {upperWord.split('').map((letter, i) => {
        const isRevealed = guessedLetters.has(letter.toLowerCase());
        return (
          <div key={i} className={`word-blank-letter ${isRevealed ? 'revealed' : ''}`}>
            {isRevealed ? letter : ''}
            <span className={`letter-line ${isRevealed ? '' : 'empty'}`} />
          </div>
        );
      })}
    </div>
  );
}
