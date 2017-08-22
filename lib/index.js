const style = require('./style.css');
const Game = require('./Game.js');
const Snake = require('./Snake.js');
const Apple = require('./Apple.js');


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var start = document.getElementById('start');

start.addEventListener('click', changeDifficulty)

document.addEventListener('keydown', keyPush);
setInterval(gameRun, 1000 / 15);

var game = new Game();
var snake = new Snake();
var apple = new Apple();

function gameRun() {

  game.erase(context, canvas);
  snake.changeDirection();
  game.borderState(snake);
  snake.draw(context);
  snake.manageTail();
  snake.eatApple(apple);
  apple.draw(context);
  snake.checkSelf();

}

function changeDifficulty() {
  
}

function keyPush(e) {
  switch (e.keyCode) {
  case 37:
    snake.moveLeft();
    break;
  case 38:
    snake.moveUp();
    break;
  case 39:
    snake.moveRight();
    break;
  case 40:
    snake.moveDown();
    break;
  }
}
