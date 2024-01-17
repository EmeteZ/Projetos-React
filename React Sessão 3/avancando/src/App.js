import "./App.css";
import CarDetails from "./components/CarDetails";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
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
      <CondicionalRender />
      <ShowUserName name="Matheus" />
      <CarDetails brand="VW" km={100000} color="Azul" />
    </div>
  );
}

export default App;
