interface SquareProps {
  value: string | null;
  isWinning: () => boolean;
  onSquareClick: () => void;
}

function Square({ value, isWinning, onSquareClick }: SquareProps) {
  return (
    <button
      className={
        (value !== null
          ? value === "O"
            ? "selected_o square"
            : "selected_x square"
          : "square") + (isWinning() ? " winning" : "")
      }
      onClick={onSquareClick}
    >
      {value === null ? "\u2060" : value}
    </button>
  );
}

export default Square;
