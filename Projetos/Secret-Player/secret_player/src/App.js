//CSS
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //Pick Random Category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Pick Random Word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };
  //Start Game
  const startGame = () => {
    //Pick Word and Category
    const { word, category } = pickWordAndCategory();

    //Create Array of Letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    console.log(wordLetters);
    console.log(category, word);

    //Fill States
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  };

  //Process Letter
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //Restart
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
