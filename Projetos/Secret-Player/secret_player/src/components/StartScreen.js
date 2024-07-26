import React from "react";
import "./StartScreen.css";
import icon from "../images/icon.png";

const StartScreen = ({ startGame }) => {
  return (
    <div className="Start">
      <div className="Titulo">
        <img src={icon} alt="Logo" />
        <h1>Secret Player</h1>
      </div>
      <p>Clique no botão abaixo para iniciar o jogo</p>
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
};

export default StartScreen;
