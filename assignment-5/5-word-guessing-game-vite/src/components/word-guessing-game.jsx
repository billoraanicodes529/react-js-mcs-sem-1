import { useState } from 'react';

const TARGET_WORD = 'SUMAIYA';
const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 7;

function Wordle() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  function getFeedback(guess) {
    const result = Array(WORD_LENGTH).fill('absent');
    const targetLetters = TARGET_WORD.split('');
    const guessLetters = guess.split('');

    targetLetters.forEach((letter, i) => {
      if (guessLetters[i] === letter) {
        result[i] = 'correct';
        targetLetters[i] = null;
        guessLetters[i] = null;
      }
    });

    guessLetters.forEach((letter, i) => {
      if (letter && targetLetters.includes(letter)) {
        result[i] = 'present';
        targetLetters[targetLetters.indexOf(letter)] = null;
      }
    });

    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = currentGuess.toUpperCase();

    if (guess.length !== WORD_LENGTH) {
      setMessage(`Guess must be ${WORD_LENGTH} letters.`);
      return;
    }

    if (gameOver) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setCurrentGuess('');
    setMessage('');

    if (guess === TARGET_WORD) {
      setMessage('You guessed it! Congrats!');
      setGameOver(true);
    } else if (newGuesses.length >= MAX_ATTEMPTS) {
      setMessage(`Game over! The word was ${TARGET_WORD}.`);
      setGameOver(true);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h1>Wordle (Simple)</h1>

      {guesses.map((guess, i) => {
        const feedback = getFeedback(guess);

        return (
          <div key={i} style={{ display: 'flex', marginBottom: 4, justifyContent: "center", alignItems: "center" }}>
            {guess.split('').map((letter, idx) => {
              let bg = '#ccc';

              if (feedback[idx] === 'correct') bg = 'green';
              else if (feedback[idx] === 'present') bg = 'goldenrod';

              return (
                <div
                  key={idx}
                  style={{
                    width: 40,
                    height: 40,
                    lineHeight: '40px',
                    marginRight: 4,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: bg,
                    userSelect: 'none',
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}

      {!gameOver && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={currentGuess}
            onChange={(e) =>
              setCurrentGuess(
                e.target.value.toUpperCase().slice(0, WORD_LENGTH)
              )
            }
            maxLength={WORD_LENGTH}
            style={{ fontSize: 24, textTransform: 'uppercase' }}
            disabled={gameOver}
            autoFocus
          />

          <button
            type="submit"
            disabled={gameOver}
            style={{ fontSize: 24, marginLeft: 8 }}
          >
            Guess
          </button>
        </form>
      )}

      {message && <p>{message}</p>}

      <h2>
        Attempts: {guesses.length} / {MAX_ATTEMPTS}
      </h2>
    </div>
  );
}

export default Wordle;