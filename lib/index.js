const style = require('./style.css');
const Game = require('./Game.js');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let startButton = document.querySelector('.start-button');
let easyButton = document.querySelector('.easy-button');
let hardButton = document.querySelector('.hard-button');

let highScore =

startButton.addEventListener('click', startButtonPush);
hardButton.addEventListener('click', hardButtonPush);
easyButton.addEventListener('click', easyButtonPush);

document.addEventListener('keydown', keyPush);

let game = new Game(context, canvas);
let interval;

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
  if(game.snake.alive === true){
    game.run();
    displayScore();
  }
  else {
    gameOver();
    clearInterval(interval);
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
  console.log('game over');
}

function displayScore() {
  let scoreboard = document.querySelector('.scoreboard-display ');
  scoreboard.innerText = `SCORE: ${game.score}`;
}

function setScoreInLocalStorage() {

}

function pullScoreFromLocalStorage() {
  
}
