// ELEMENTS
// Images
const diceImageEl = document.querySelector(`#diceImage`);

// Buttons
const btnRollEl = document.querySelector(`#rollDice`);
const btnNewGameEl = document.querySelector(`#btnNewGame`);

// Texts
const currentScore1El = document.querySelector(`#currentScore--1`);
const totalScore1El = document.querySelector(`#totalScore--1`);
const currentScore2El = document.querySelector(`#currentScore--2`);
const totalScore2El = document.querySelector(`#totalScore--2`);

// STARTING CONDITIONS
currentScore1El.textContent = 0;
totalScore1El.textContent = 0;
currentScore2El.textContent = 0;
totalScore2El.textContent = 0;
diceImageEl.classList.add(`hidden`);

let currentScore = 0;

function newGame() {
  window.location.reload();
}

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Random number: ${randomNumber}`);

  diceImageEl.classList.remove(`hidden`);
  diceImageEl.setAttribute(`src`, `images/dice-${randomNumber}.png`);

  if (randomNumber != 1) {
    currentScore += randomNumber;
    currentScore1El.textContent = currentScore;
  }
}

btnRollEl.addEventListener(`click`, () => {
  rollDice();
});

btnNewGameEl.addEventListener(`click`, newGame);
