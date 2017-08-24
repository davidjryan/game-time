// const style = require('./style.css');
const Game = require('./Game.js');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let startButton = document.querySelector('.start-button');
let selectDifficultyText = document.querySelector('.select-difficulty-text');
let gameOverText = document.querySelector('.game-over-text');
let easyButton = document.querySelector('.easy-button');
let hardButton = document.querySelector('.hard-button');
let toggleAudioButton = document.querySelector('.toggle-audio-button');
let backgroundMusic = document.querySelector('.background-music');

let highScore = getScoreFromLocalStorage('highScore');

startButton.addEventListener('click', startButtonPush);
hardButton.addEventListener('click', hardButtonPush);
easyButton.addEventListener('click', easyButtonPush);
toggleAudioButton.addEventListener('click', toggleAudioButtonPush);
document.addEventListener('keydown', keyPush);

let game = new Game(context, canvas);
let interval;

if(highScore !== null){
  updateHighScoreHTML();
}

function gameLoop() {
  displayScore();
  if(game.snake.alive === true){
    game.run();
  }
  else {
    gameOver();
  }
}

function startButtonPush() {
  interval = setInterval(gameLoop, 1000 / game.speed);
  hideElement(startButton);
}

function easyButtonPush() {
  hideButtonsContainerAndShowStartButton();
  game = new Game(context, canvas);
}

function hardButtonPush() {
  hideButtonsContainerAndShowStartButton();
  game = new Game(context, canvas);
  game.changeDifficulty();
}

function toggleAudioButtonPush() {
  let icon = document.querySelector('.audio-button-icon');

  if (backgroundMusic.muted) {
  backgroundMusic.muted = false;
  icon.src = 'lib/assets/img/icon-pixel-sound.svg';
  } else {
    backgroundMusic.muted = true;
    icon.src = 'lib/assets/img/icon-pixel-mute.svg';
  }
}

function hideButtonsContainerAndShowStartButton() {
  hideElement(selectDifficultyText);
  hideElement(easyButton);
  hideElement(hardButton);
  showElement(startButton);
}

function hideElement(element) {
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = 'inline';
}


function keyPush(e) {
  switch (e.keyCode) {
  case 37:
    game.snake.moveLeft();
    break;
  case 38:
    game.snake.moveUp();
    break;
  case 39:
    game.snake.moveRight();
    break;
  case 40:
    game.snake.moveDown();
    break;
  }
}

function gameOver() {

  clearInterval(interval);

  if (game.score > highScore){
    setScoreInLocalStorage('highScore', game.score);
    setHighScore();
  }
  showElement(selectDifficultyText)
  showElement(easyButton);
  showElement(hardButton);
}

function setHighScore() {
  highScore = getScoreFromLocalStorage('highScore');
}

function displayScore() {
  updateLocalScoreHTML();
  updateHighScoreHTML();
}

function updateLocalScoreHTML() {
  let localScore = document.querySelector('.scoreboard-local');
  localScore.innerText = `SCORE: ${game.score}`;
}

function updateHighScoreHTML() {
  let globalHighScore = document.querySelector('.scoreboard-high-score');
    globalHighScore.innerText = `HIGH SCORE: ${highScore}`;
}

function setScoreInLocalStorage(key, score) {
  localStorage.setItem(key, JSON.stringify(score));
}

function getScoreFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
