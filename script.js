'use strict';
const slipNumberEl = document.querySelector('.slip-number');
const adviceEl = document.querySelector('.advice-text');
const dice = document.querySelector('.dice');
let slip, advice;

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(blob => blob.json())
    .then(res => {
      console.log(res);
      slip = res.slip.id;
      advice = res.slip.advice;
      slipNumberEl.textContent = `ADVICE #${slip}`;
      adviceEl.textContent = `"${advice}"`;
      console.log(slip, advice);
    });
}

getAdvice();

dice.addEventListener('click', getAdvice);
