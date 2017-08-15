const style = require('./style.css');
const Snake = require('./Snake.js')

window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 1000/15);

  snake = new Snake();
  snake.draw(context);
}

// x
let gridSize = 30;

//y
let tileCount = 30;

function game() {
  // Wrapping 
  snake.xPosition += snake.xVelocity;
  snake.yPosition += snake.yVelocity;

  if(snake.xPosition < 0) {
    snake.xPosition = tileCount -1;
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
