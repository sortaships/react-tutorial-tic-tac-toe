import { useState } from "react";
import Board from "./components/Board";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button key={move} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
