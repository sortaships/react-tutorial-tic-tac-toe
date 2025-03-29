import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (arg0: Array<string | null>) => void;
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `The Winner is Player ${winner[0]}`;
  } else {
    status = `The next player is ${xIsNext ? "X" : "O"}`;
  }

  function isWinning(index: number) {
    if (winner) return winner[1].includes(index);
    return false;
  }

  return (
    <>
      <h1 className="status">{status}</h1>
      <div className="board">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              isWinning={() => isWinning(index)}
              value={square}
              onSquareClick={() => handleClick(index)}
            ></Square>
          );
        })}
      </div>
    </>
  );
}

export default Board;
