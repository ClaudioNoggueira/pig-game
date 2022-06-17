// ELEMENTS
// Images
const diceImageEl = document.querySelector(`#diceImage`);

// Buttons
const btnRollEl = document.querySelector(`#rollDice`);
const btnHoldEl = document.querySelector(`#hold`);
const btnNewGameEl = document.querySelector(`#btnNewGame`);

// Texts
const currentScore1El = document.querySelector(`#currentScore--1`);
const totalScore1El = document.querySelector(`#totalScore--1`);
const currentScore2El = document.querySelector(`#currentScore--2`);
const totalScore2El = document.querySelector(`#totalScore--2`);

// Sections
const sectionPlayer1 = document.querySelector(`#sectionPlayer1`);
const sectionPlayer2 = document.querySelector(`#sectionPlayer2`);

// STARTING CONDITIONS
currentScore1El.textContent = 0;
totalScore1El.textContent = 0;
currentScore2El.textContent = 0;
totalScore2El.textContent = 0;
diceImageEl.classList.add(`hidden`);

let currentScore = 0;
let currentPlayer = 1;
const totalScore = [0, 0];

function newGame() {
  window.location.reload();
}

function displayCurrentScore() {
  if (currentPlayer === 1) currentScore1El.textContent = currentScore;
  if (currentPlayer === 2) currentScore2El.textContent = currentScore;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  currentScore1El.textContent = 0;
  currentScore2El.textContent = 0;

  sectionPlayer1.classList.toggle(`player--active`);
  sectionPlayer2.classList.toggle(`player--active`);

  currentScore = 0;
}

function hold() {
  totalScore[currentPlayer - 1] += currentScore;

  if (currentPlayer === 1) totalScore1El.textContent = totalScore[0];
  if (currentPlayer === 2) totalScore2El.textContent = totalScore[1];

  switchPlayer();

  currentScore1El.textContent = currentScore;
  currentScore2El.textContent = currentScore;
}

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Random number: ${randomNumber}`);

  diceImageEl.classList.remove(`hidden`);
  diceImageEl.setAttribute(`src`, `images/dice-${randomNumber}.png`);

  randomNumber != 1 ? (currentScore += randomNumber) : switchPlayer();

  displayCurrentScore();
}

btnRollEl.addEventListener(`click`, rollDice);

btnHoldEl.addEventListener(`click`, hold);

btnNewGameEl.addEventListener(`click`, newGame);
