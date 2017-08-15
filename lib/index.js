const style = require('./style.css');

window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 1000/15);
  context.fillRect( (canvas.width / 2) - 10, (canvas.height / 2) - 10, 10, 10);
}

function game() {

}

function keyPush() {

}
