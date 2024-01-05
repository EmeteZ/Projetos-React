import "./App.css";
import LogoVL from "./images/corinthiansold.png";

function App() {
  return (
    <div className="App">
      <h1> Avançando em React </h1>
      <div className="images">
        <img src="/corinthiansatual.png" className="LogoAT" />
      </div>
      <div>
        {" "}
        <img src={LogoVL} className="LogoVL"></img>
      </div>
    </div>
  );
}

export default App;
