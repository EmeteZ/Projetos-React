import { useState } from "react";
import "./App.css";
import Fragment from "./components/Fragment";
import CarDetails from "./components/CarDetails";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import LogoVL from "./images/corinthiansold.png";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
      <Fragment />
      <Container>
        <p>Este é o conteudo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
