import { nanoid } from "nanoid";

//
// function to randomize elements inside an array
//
function randomizeArr(arr) {
  const randomizedArr = [];
  if (arr.length > 2) {
    for (let i = 0; i <= arr.length; i++) {
      const index = Math.floor(Math.random() * arr.length);
      const iToPush = arr.splice(index, 1);
      randomizedArr.push(iToPush);
    }
    randomizedArr.push(arr[0]);
    return randomizedArr.flat();
  } else {
    for (let i = 0; i <= arr.length; i++) {
      const index = Math.floor(Math.random() * arr.length);
      const iToPush = arr.splice(index, 1);
      randomizedArr.push(iToPush);
    }
    return randomizedArr.flat();
  }
}

function reggexer(str) {
  const quotationRegex = /&quot;/gm;
  const quotationRegex2 = /&#039;/gm;
  const quotationRegex3 = /&eacute;/gm;
  const quotationRegex4 = /&amp;/gm;
  const quotationRegex5 = /&rsquo;/gm;
  const quotationRegex6 = /&#039;/gm; // "'"
  const quotationRegex7 = /&atilde;/gm; // "ã"
  const quotationRegex8 = /&ntilde;/gm; // "ñ"
  const quotationRegex9 = /&uuml;/gm; // "ü"
  const quotationRegex10 = /&Uuml;/gm; // "Ü"
  const quotationRegex11 = /&ldquo/gm; // "“"
  const quotationRegex12 = /&rdquo/gm; // "”"
  return str
    .replace(quotationRegex, '"')
    .replace(quotationRegex2, "'")
    .replace(quotationRegex3, "é")
    .replace(quotationRegex4, "&")
    .replace(quotationRegex5, "'")
    .replace(quotationRegex6, "'")
    .replace(quotationRegex7, "ã")
    .replace(quotationRegex8, "ñ")
    .replace(quotationRegex9, "ü")
    .replace(quotationRegex10, "Ü")
    .replace(quotationRegex11, "“")
    .replace(quotationRegex12, "”");
}

//
// function to create an object from the correct answer
//
const correctObj = (data) => {
  return {
    text: reggexer(data.correct_answer),
    isCorrect: true,
    isSelected: false,
    id: nanoid(),
  };
};

//
// function to create an object from the incorrect answers
//
const incorrectObj = (arr) => {
  const incArr = arr.map((option) => {
    return {
      text: reggexer(option),
      isCorrect: false,
      isSelected: false,
      id: nanoid(),
    };
  });
  return incArr;
};

export { randomizeArr, reggexer, correctObj, incorrectObj };
