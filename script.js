const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const pandas = document.querySelectorAll('.panda');
const highScoreBoard = document.querySelector('.high-score');
let lastHole;
let timeUp = false;
let score = 0;
let highScore;
localStorageName = "joe"
if(localStorage.getItem(localStorageName) == null) {
    highScore = 0;
} else {
    highScore = localStorage.getItem(localStorageName);
}

window.onload = function displayHigh() {
  highScoreBoard.textContent = highScore;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(hole === lastHole) {
    return randomHole(holes)
  }
  lastHole = hole;
  return hole;
}

function popUp() {
  const time = randomTime(400, 1200);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) popUp();
  }, time)
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popUp();
  setTimeout(() => timeUp = true, 15000);
}

function whack(e) {
  if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
  highestScore(score);
}

function highestScore(score) {
  highScore = Math.max(score, highScore);
  localStorage.setItem(localStorageName, highScore);
  highScoreBoard.textContent = highScore;
}



pandas.forEach(panda => panda.addEventListener('click', whack))
