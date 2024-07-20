import "./App.css";
import Carros from "./components/Carros";

function App() {
  const carList = [
    { name: "Uno", km: 1000, color: "Branca" },
    { name: "Palio", km: 3000, color: "Preto" },
    { name: "Fiat", km: 10000, color: "Laranja" },
  ];

  return (
    <div className="App">
      <h1>Estante Carros</h1>
      <div className="Carros-Container">
        {carList.map((car, index) => (
          <Carros key={index} Carros={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
