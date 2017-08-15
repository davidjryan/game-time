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

function game() {

}

function keyPush() {

}
