import { useState } from "react";
import "./tic-tac-toe-game.css";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToeGame() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameActive, setGameActive] = useState(true);
  const [winningCells, setWinningCells] = useState([]);

  function checkWin(updatedBoard, player) {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;

      if (
        updatedBoard[a] === player &&
        updatedBoard[b] === player &&
        updatedBoard[c] === player
      ) {
        return pattern;
      }
    }

    return null;
  }

  function handleClick(index) {
    if (!gameActive || board[index] !== "") {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    const winningPattern = checkWin(updatedBoard, currentPlayer);

    if (winningPattern) {
      setWinningCells(winningPattern);
      setGameActive(false);
      return;
    }

    if (updatedBoard.every((cell) => cell !== "")) {
      setGameActive(false);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function resetBoard() {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameActive(true);
    setWinningCells([]);
  }

  const isWinner = winningCells.length > 0;
  const isDraw =
    !gameActive && !isWinner && board.every((cell) => cell !== "");

  let statusText;

  if (isWinner) {
    statusText = `${currentPlayer} Wins! 🎉`;
  } else if (isDraw) {
    statusText = "It's a Draw! 🤝";
  } else {
    statusText = `${currentPlayer}'s Turn`;
  }

  return (
    <main className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>

      <p id="status" aria-live="polite">
        {statusText}
      </p>

      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            type="button"
            className={`cell ${
              winningCells.includes(index) ? "winning" : ""
            }`}
            onClick={() => handleClick(index)}
            disabled={!gameActive || value !== ""}
            aria-label={`Cell ${index + 1}: ${value || "empty"}`}
          >
            {value}
          </button>
        ))}
      </div>

      <button
        id="resetBtn"
        type="button"
        onClick={resetBoard}
      >
        Reset
      </button>
    </main>
  );
}

export default TicTacToeGame;