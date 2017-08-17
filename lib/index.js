const style = require('./style.css');
const Snake = require('./Snake.js');
const Apple = require('./Apple.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
document.addEventListener('keydown', keyPush);
setInterval(game, 1000/15);

var snake = new Snake();
var apple = new Apple();

// apple.draw(context);
// context.fillStyle = 'blue';
// context.fillRect(20,20,10,10)

// x
let gridSize = 30;

//y
var tileCount = 30;



function game() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  snake.changeDirection();
  // Wrapping
  if(snake.xPosition < 0) {
    snake.xPosition = tileCount - 1;
  }
  if(snake.xPosition > tileCount - 1) {
    snake.xPosition = 0;
  }
  if(snake.yPosition < 0) {
    snake.yPosition = tileCount -1;
  }
  if(snake.yPosition > tileCount -1) {
    snake.yPosition = 0;
  }

  snake.draw(context);
  snake.manageTail();

  if(apple.xPosition==snake.xPosition && apple.yPosition==snake.yPosition) {
      snake.tail++;
      apple.generateRandomLocation();
  }

  apple.draw(context);

  // requestAnimationFrame(game);
}

function keyPush(e) {
  switch(e.keyCode) {
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
