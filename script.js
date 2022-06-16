let randomNumber = 1;

// ELEMENTS
const diceImageEl = document.querySelector(`#diceImage`);
const btnRollEl = document.querySelector(`#rollDice`);
const btnNewGameEl = document.querySelector(`#btnNewGame`);

function newGame() {
  window.location.reload();
}

function rollDice() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Random number: ${randomNumber}`);

  diceImageEl.setAttribute(`src`, `images/dice-${randomNumber}.png`);
}

window.onload = rollDice();

btnRollEl.addEventListener(`click`, () => {
  rollDice();
});

btnNewGameEl.addEventListener(`click`, newGame);
