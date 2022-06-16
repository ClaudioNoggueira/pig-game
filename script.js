const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Random number: ${randomNumber}`);

const diceImageEl = document.querySelector(`#diceImage`);
diceImageEl.setAttribute(`src`, `images/dice-${randomNumber}.png`);
