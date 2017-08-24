const style = require('./style.css');
const Game = require('./Game.js');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let startButton = document.querySelector('.start-button');
let easyButton = document.querySelector('.easy-button');
let hardButton = document.querySelector('.hard-button');

let highScore = getScoreFromLocalStorage('highScore');

startButton.addEventListener('click', startButtonPush);
hardButton.addEventListener('click', hardButtonPush);
easyButton.addEventListener('click', easyButtonPush);

document.addEventListener('keydown', keyPush);

let game = new Game(context, canvas);
let interval;

highScoreHTML();

function startButtonPush() {
  interval = setInterval(gameLoop, 1000 / game.speed);
}

function easyButtonPush() {
  game = new Game(context, canvas);
  // remove easy && hard button
  // remove buttons
  // show start button
}

function hardButtonPush() {
  game = new Game(context, canvas);
  game.changeDifficulty();
  // remove easy && hard button
  // show start button
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
}

function setHighScore() {
  highScore = getScoreFromLocalStorage('highScore');
}

function displayScore() {
  localScoreHTML();
  highScoreHTML();
}

function localScoreHTML() {
  let localScore = document.querySelector('.scoreboard-local');
  localScore.innerText = `SCORE: ${game.score}`;
}

function highScoreHTML() {
  let globalHighScore = document.querySelector('.scoreboard-high-score');
  globalHighScore.innerText = `HIGH SCORE: ${highScore}`;
}

function setScoreInLocalStorage(key, score) {
  localStorage.setItem(key, JSON.stringify(score));
}

function getScoreFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
