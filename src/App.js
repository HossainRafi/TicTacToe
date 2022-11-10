import "./App.css";
import { Box } from "./components/Box/Box";

function App() {
  const board= {"x", "x", "x", "x", "x", "x", "x", "x", "x",}
  return (
    <div>
      <Box value="x" onClick={null} />
    </div>
  );
}

export default App;
