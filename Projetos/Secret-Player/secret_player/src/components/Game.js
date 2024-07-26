import React from "react";
import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="Game">
      <p className="Points">
        <span>Pontuação: 000</span>
      </p>

      <h1>Adivinhe o Jogador</h1>
      <h3 className="Tip">
        Dica: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="Letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra do jogador:</p>
        <form>
          <input
            type="text"
            className="letterInput"
            name="letter"
            maxLength={1}
            required
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <spam>a,</spam>
        <spam>b,</spam>
      </div>
    </div>
  );
};

export default Game;
