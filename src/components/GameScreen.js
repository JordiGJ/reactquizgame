import React from "react";
// import { nanoid } from "nanoid";
import {
  randomizeArr,
  reggexer,
  correctObj,
  incorrectObj,
} from "../functions.js";

export default function GameScreen({ questions, playAgain, gameOnOff }) {
  const [question0, setQuestion0] = React.useState([]);
  const [question1, setQuestion1] = React.useState([]);
  const [question2, setQuestion2] = React.useState([]);
  const [question3, setQuestion3] = React.useState([]);
  const [question4, setQuestion4] = React.useState([]);
  const [choices0, setChoices0] = React.useState([]);
  const [choices1, setChoices1] = React.useState([]);
  const [choices2, setChoices2] = React.useState([]);
  const [choices3, setChoices3] = React.useState([]);
  const [choices4, setChoices4] = React.useState([]);

  const [checkAllAnswers, setCheckAllAnswers] = React.useState(false);
  const [numOfCorrect, setNumOfCorrect] = React.useState(0);
  const [numOf0Selected, setNumOf0Selected] = React.useState(0);
  const [numOf1Selected, setNumOf1Selected] = React.useState(0);
  const [numOf2Selected, setNumOf2Selected] = React.useState(0);
  const [numOf3Selected, setNumOf3Selected] = React.useState(0);
  const [numOf4Selected, setNumOf4Selected] = React.useState(0);

  //
  //       effect to cook data from api
  //
  React.useEffect(() => {
    const part = questions[0];
    const arr = incorrectObj(part.incorrect_answers);
    arr.push(correctObj(part));
    const wholeSection = {
      question: reggexer(part.question),
      choices: [...arr],
    };

    setQuestion0(wholeSection.question);
    setChoices0(randomizeArr(wholeSection.choices));
  }, [questions]);

  React.useEffect(() => {
    const part = questions[1];
    const arr = incorrectObj(part.incorrect_answers);
    arr.push(correctObj(part));
    const wholeSection = {
      question: reggexer(part.question),
      choices: [...arr],
    };

    setQuestion1(wholeSection.question);
    setChoices1(randomizeArr(wholeSection.choices));
  }, [questions]);
  React.useEffect(() => {
    const part = questions[2];
    const arr = incorrectObj(part.incorrect_answers);
    arr.push(correctObj(part));
    const wholeSection = {
      question: reggexer(part.question),
      choices: [...arr],
    };

    setQuestion2(wholeSection.question);
    setChoices2(randomizeArr(wholeSection.choices));
  }, [questions]);
  React.useEffect(() => {
    const part = questions[3];
    const arr = incorrectObj(part.incorrect_answers);
    arr.push(correctObj(part));
    const wholeSection = {
      question: reggexer(part.question),
      choices: [...arr],
    };

    setQuestion3(wholeSection.question);
    setChoices3(randomizeArr(wholeSection.choices));
  }, [questions]);
  React.useEffect(() => {
    const part = questions[4];
    const arr = incorrectObj(part.incorrect_answers);
    arr.push(correctObj(part));
    const wholeSection = {
      question: reggexer(part.question),
      choices: [...arr],
    };

    setQuestion4(wholeSection.question);
    setChoices4(randomizeArr(wholeSection.choices));
  }, [questions]);

  //
  // functions to manage click events
  //
  const select = (e) => {
    setChoices0((prev) =>
      prev.map((choice) => {
        return e.target.id === choice.id
          ? { ...choice, isSelected: !choice.isSelected }
          : choice;
      })
    );
  };
  const select1 = (e) => {
    setChoices1((prev) =>
      prev.map((choice) => {
        return e.target.id === choice.id
          ? { ...choice, isSelected: !choice.isSelected }
          : choice;
      })
    );
  };
  const select2 = (e) => {
    setChoices2((prev) =>
      prev.map((choice) => {
        return e.target.id === choice.id
          ? { ...choice, isSelected: !choice.isSelected }
          : choice;
      })
    );
  };
  const select3 = (e) => {
    setChoices3((prev) =>
      prev.map((choice) => {
        return e.target.id === choice.id
          ? { ...choice, isSelected: !choice.isSelected }
          : choice;
      })
    );
  };
  const select4 = (e) => {
    setChoices4((prev) =>
      prev.map((choice) => {
        return e.target.id === choice.id
          ? { ...choice, isSelected: !choice.isSelected }
          : choice;
      })
    );
  };

  //
  // check answers
  //
  const checkAnswers = () => {
    setCheckAllAnswers((prev) => !prev);
    choices0.forEach((choice) => {
      if (choice.isSelected) {
        setNumOf0Selected((prev) => prev + 1);
      }
      if (choice.isCorrect && choice.isSelected) {
        setNumOfCorrect((prev) => (prev = prev + 1));
        return true;
      } else {
      }
    });
    choices1.forEach((choice) => {
      if (choice.isSelected) {
        setNumOf1Selected((prev) => prev + 1);
      }
      if (choice.isCorrect && choice.isSelected) {
        setNumOfCorrect((prev) => (prev = prev + 1));
        return true;
      } else {
      }
    });
    choices2.forEach((choice) => {
      if (choice.isSelected) {
        setNumOf2Selected((prev) => prev + 1);
      }
      if (choice.isCorrect && choice.isSelected) {
        setNumOfCorrect((prev) => (prev = prev + 1));
        return true;
      } else {
      }
    });
    choices3.forEach((choice) => {
      if (choice.isSelected) {
        setNumOf3Selected((prev) => prev + 1);
      }
      if (choice.isCorrect && choice.isSelected) {
        setNumOfCorrect((prev) => (prev = prev + 1));
        return true;
      } else {
      }
    });
    choices4.forEach((choice) => {
      if (choice.isSelected) {
        setNumOf4Selected((prev) => prev + 1);
      }
      if (choice.isCorrect && choice.isSelected) {
        setNumOfCorrect((prev) => (prev = prev + 1));
        return true;
      } else {
      }
    });
  };

  //
  // play again function
  //
  const playGameAgain = () => {
    setCheckAllAnswers(false);
    playAgain();
    gameOnOff();
  };

  //
  // blocks to render
  //
  const optionToRender0 = (
    <div className="optionToRender">
      <p className="gameP">{question0}</p>
      {choices0.map((opt) => {
        return (
          <button
            className={`gameButton ${
              opt.isSelected && !checkAllAnswers ? "selected" : ""
            }${
              checkAllAnswers && opt.isCorrect && opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && opt.isCorrect && !opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && opt.isSelected
                ? "incorrect"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && !opt.isSelected
                ? "opacityDown"
                : ""
            }${
              checkAllAnswers &&
              (numOf0Selected > 1 ||
                numOf0Selected < 1 ||
                numOf1Selected > 1 ||
                numOf1Selected < 1 ||
                numOf2Selected > 1 ||
                numOf2Selected < 1 ||
                numOf3Selected > 1 ||
                numOf3Selected < 1 ||
                numOf4Selected > 1 ||
                numOf4Selected < 1)
                ? "gameButton"
                : ""
            }`}
            key={opt.id}
            id={opt.id}
            onClick={select}
          >
            {opt.text}
          </button>
        );
      })}
      <hr />
    </div>
  );
  const optionToRender1 = (
    <div className="optionToRender">
      <p className="gameP">{question1}</p>
      {choices1.map((opt) => {
        return (
          <button
            className={`gameButton ${
              opt.isSelected && !checkAllAnswers ? "selected" : ""
            }${
              checkAllAnswers && opt.isCorrect && opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && opt.isCorrect && !opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && opt.isSelected
                ? "incorrect"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && !opt.isSelected
                ? "opacityDown"
                : ""
            }${
              checkAllAnswers &&
              (numOf0Selected > 1 ||
                numOf0Selected < 1 ||
                numOf1Selected > 1 ||
                numOf1Selected < 1 ||
                numOf2Selected > 1 ||
                numOf2Selected < 1 ||
                numOf3Selected > 1 ||
                numOf3Selected < 1 ||
                numOf4Selected > 1 ||
                numOf4Selected < 1)
                ? "gameButton"
                : ""
            }`}
            key={opt.id}
            id={opt.id}
            onClick={select1}
          >
            {opt.text}
          </button>
        );
      })}
      <hr />
    </div>
  );
  const optionToRender2 = (
    <div className="optionToRender">
      <p className="gameP">{question2}</p>
      {choices2.map((opt) => {
        return (
          <button
            className={`gameButton ${
              opt.isSelected && !checkAllAnswers ? "selected" : ""
            }${
              checkAllAnswers && opt.isCorrect && opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && opt.isCorrect && !opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && opt.isSelected
                ? "incorrect"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && !opt.isSelected
                ? "opacityDown"
                : ""
            }${
              checkAllAnswers &&
              (numOf0Selected > 1 ||
                numOf0Selected < 1 ||
                numOf1Selected > 1 ||
                numOf1Selected < 1 ||
                numOf2Selected > 1 ||
                numOf2Selected < 1 ||
                numOf3Selected > 1 ||
                numOf3Selected < 1 ||
                numOf4Selected > 1 ||
                numOf4Selected < 1)
                ? "gameButton"
                : ""
            }`}
            key={opt.id}
            id={opt.id}
            onClick={select2}
          >
            {opt.text}
          </button>
        );
      })}
      <hr />
    </div>
  );
  const optionToRender3 = (
    <div className="optionToRender">
      <p className="gameP">{question3}</p>
      {choices3.map((opt) => {
        return (
          <button
            className={`gameButton ${
              opt.isSelected && !checkAllAnswers ? "selected" : ""
            }${
              checkAllAnswers && opt.isCorrect && opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && opt.isCorrect && !opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && opt.isSelected
                ? "incorrect"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && !opt.isSelected
                ? "opacityDown"
                : ""
            }${
              checkAllAnswers &&
              (numOf0Selected > 1 ||
                numOf0Selected < 1 ||
                numOf1Selected > 1 ||
                numOf1Selected < 1 ||
                numOf2Selected > 1 ||
                numOf2Selected < 1 ||
                numOf3Selected > 1 ||
                numOf3Selected < 1 ||
                numOf4Selected > 1 ||
                numOf4Selected < 1)
                ? "gameButton"
                : ""
            }`}
            key={opt.id}
            id={opt.id}
            onClick={select3}
          >
            {opt.text}
          </button>
        );
      })}
      <hr />
    </div>
  );
  const optionToRender4 = (
    <div className="optionToRender">
      <p className="gameP">{question4}</p>
      {choices4.map((opt) => {
        return (
          <button
            className={`gameButton ${
              opt.isSelected && !checkAllAnswers ? "selected" : ""
            }${
              checkAllAnswers && opt.isCorrect && opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && opt.isCorrect && !opt.isSelected
                ? "correct"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && opt.isSelected
                ? "incorrect"
                : ""
            }${
              checkAllAnswers && !opt.isCorrect && !opt.isSelected
                ? "opacityDown"
                : ""
            }${
              checkAllAnswers &&
              (numOf0Selected > 1 ||
                numOf0Selected < 1 ||
                numOf1Selected > 1 ||
                numOf1Selected < 1 ||
                numOf2Selected > 1 ||
                numOf2Selected < 1 ||
                numOf3Selected > 1 ||
                numOf3Selected < 1 ||
                numOf4Selected > 1 ||
                numOf4Selected < 1)
                ? "gameButton"
                : ""
            }`}
            key={opt.id}
            id={opt.id}
            onClick={select4}
          >
            {opt.text}
          </button>
        );
      })}
      <hr />
    </div>
  );

  return (
    <main>
      {optionToRender0}
      {optionToRender1}
      {optionToRender2}
      {optionToRender3}
      {optionToRender4}
      {!checkAllAnswers && (
        <button onClick={checkAnswers} className="checkButton">
          Check Answers
        </button>
      )}
      {checkAllAnswers && (
        <span className="resultsP">
          You scored {numOfCorrect}/5 correct answers
        </span>
      )}
      {checkAllAnswers && (
        <button onClick={playGameAgain} className="playAgain">
          Play Again
        </button>
      )}
    </main>
  );
}
