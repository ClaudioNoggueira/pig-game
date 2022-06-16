// ELEMENTS
const diceImageEl = document.querySelector(`#diceImage`);
const btnRollEl = document.querySelector(`#rollDice`);
const btnNewGameEl = document.querySelector(`#btnNewGame`);

function newGame() {
  window.location.reload();
}

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Random number: ${randomNumber}`);

  diceImageEl.classList.remove(`hidden`);
  diceImageEl.setAttribute(`src`, `images/dice-${randomNumber}.png`);
}

btnRollEl.addEventListener(`click`, () => {
  rollDice();
});

btnNewGameEl.addEventListener(`click`, newGame);

// STARTING CONDITIONS
document.querySelector(`#currentScore--1`).textContent = 0;
document.querySelector(`#totalScore--1`).textContent = 0;
document.querySelector(`#currentScore--2`).textContent = 0;
document.querySelector(`#totalScore--2`).textContent = 0;
diceImageEl.classList.add(`hidden`);
