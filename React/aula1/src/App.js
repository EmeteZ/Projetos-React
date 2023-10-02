import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h1 className="Titulo">START</h1>
      </div>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>

      <Events />
    </div>
  );
}

export default App;
