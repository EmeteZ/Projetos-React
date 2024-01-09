import "./App.css";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import LogoVL from "./images/corinthiansold.png";

function App() {
  return (
    <div className="App">
      <h1> Avançando em React </h1>
      <div className="images">
        <img src="/corinthiansatual.png" className="LogoAT" />
        <img src={LogoVL} className="LogoVL"></img>
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
