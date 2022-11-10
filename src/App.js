import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  const board = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];
  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
