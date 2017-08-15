const style = require('./style.css');

window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 1000/15);
}

function game() {

}

function keyPush() {

}
