import "./App.css";
import Caixa from "./components/Caixa.js";

function App() {
  const n = 10;
  const redTitle = true;
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <p>Texto</p>
      <Caixa />
      <p style={{ color: "green" }}>Texo Inline</p>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS com requisito
      </h2>
      <h2 style={n < 15 ? { color: "purple" } : { color: "pink" }}>
        CSS com requisito
      </h2>

      <h2 className={redTitle ? "red-title" : "blue-title"}>TITULO KK</h2>
    </div>
  );
}

export default App;
