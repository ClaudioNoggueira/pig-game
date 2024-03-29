// ELEMENTS
// Images
const diceImageEl = document.querySelector(`#diceImage`);

// Buttons
const btnRollEl = document.querySelector(`#rollDice`);
const btnHoldEl = document.querySelector(`#hold`);
const btnNewGameEl = document.querySelector(`#btnNewGame`);
const bntCloseModal = document.querySelector(`#btnCloseModal`);

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

let gameIsFinished = false;

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

function playerWins() {
  document.querySelector(`#totalScore--${currentPlayer}`).textContent =
    totalScore[currentPlayer - 1];

  document
    .querySelector(`#sectionPlayer${currentPlayer}`)
    .classList.add(`player--winner`);
  document
    .querySelector(`#sectionPlayer${currentPlayer}`)
    .classList.remove(`player--active`);

  diceImageEl.classList.add(`hidden`);

  gameIsFinished = true;
}

function hold() {
  if (gameIsFinished) return alert(`Player ${currentPlayer} is the winner!!!`);

  let playerIndex = currentPlayer - 1;
  totalScore[playerIndex] += currentScore;

  if (currentPlayer === 1) totalScore1El.textContent = totalScore[playerIndex];
  if (currentPlayer === 2) totalScore2El.textContent = totalScore[playerIndex];

  totalScore[playerIndex] >= 100 ? playerWins() : switchPlayer();

  currentScore1El.textContent = currentScore;
  currentScore2El.textContent = currentScore;
}

function rollDice() {
  if (gameIsFinished) return alert(`Player ${currentPlayer} is the winner!!!`);

  const randomNumber = Math.floor(Math.random() * 6) + 1;

  diceImageEl.classList.remove(`hidden`);
  diceImageEl.setAttribute(`src`, `images/dice-${randomNumber}.png`);

  randomNumber != 1 ? (currentScore += randomNumber) : switchPlayer();

  displayCurrentScore();
}

function closeModal() {
  document.querySelector(`.modal`).classList.add(`hidden`);
  document.querySelector(`.overlay`).classList.add(`hidden`);
}

btnRollEl.addEventListener(`click`, rollDice);

btnHoldEl.addEventListener(`click`, hold);

btnNewGameEl.addEventListener(`click`, newGame);

bntCloseModal.addEventListener(`click`, closeModal);
document.querySelector(`.overlay`).addEventListener(`click`, closeModal);
