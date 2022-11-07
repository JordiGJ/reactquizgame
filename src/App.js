import React from "react";
import WelcomeScreen from "./components/WelcomeScreen.js";
import GameScreen from "./components/GameScreen.js";
import "./style.css";

export default function App() {
  const [gameIsOn, setGameIsOn] = React.useState(false);
  const [questionsData, setQuestionsData] = React.useState();
  const [restart, setRestart] = React.useState(0);

  React.useEffect(
    function () {
      fetch(`https://opentdb.com/api.php?amount=5`)
        .then((res) => res.json())
        .then((data) => setQuestionsData(data));
    },
    [restart]
  );

  const startGame = () => {
    setGameIsOn((prev) => !prev);
  };

  const playAgain = () => {
    setGameIsOn(true);
    setRestart((prev) => (prev = prev + 1));
  };

  const gameOnOff = () => {
    setGameIsOn((prev) => !prev);
  };
  return (
    <>
      {!gameIsOn && (
        <WelcomeScreen startGame={startGame} questionsData={questionsData} />
      )}
      {gameIsOn && (
        <GameScreen
          questions={questionsData.results}
          playAgain={playAgain}
          gameOnOff={gameOnOff}
        />
      )}
    </>
  );
}
