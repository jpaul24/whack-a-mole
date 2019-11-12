const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const pandas = document.querySelectorAll('.panda');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const holes = holes[idx];

}

function peep() {

}

function startGame() {

}

function bonk(e) {

}

pandas.forEach(panda => panda.addEventListener('click', bonk))
