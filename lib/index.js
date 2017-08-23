const style = require('./style.css');
const Game = require('./Game.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// var start = document.getElementById('start');
//
// start.addEventListener('click', startGame)

document.addEventListener('keydown', keyPush);

var game = new Game(context, canvas);

setInterval(gameLoop, 1000 / game.speed);

function gameLoop() {
  game.run()
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
