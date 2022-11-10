import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard';
import { ResetButton } from './components/ResetButton/ResetButton';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

  };
  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
