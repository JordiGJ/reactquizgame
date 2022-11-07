import React from "react";

export default function WelcomeScreen({ startGame, questionsData }) {
  return (
    <section>
      <h1 className="welcome--title">Quizzical</h1>
      <p className="welcome--p">The quiz to squeeze your brain</p>
      {questionsData !== undefined ? (
        <button onClick={() => startGame()} className="welcome--button">
          Start Quiz
        </button>
      ) : (
        <p className="welcome--p">Game will be available soon</p>
      )}
    </section>
  );
}
