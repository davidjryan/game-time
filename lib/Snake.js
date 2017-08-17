class Snake {
  constructor() {
    this.color = 'rgb(16, 213, 16)';
    this.tail = 4;

    this.xPosition = 450;
    this.yPosition = 450;

    this.xVelocity = 1;
    this.yVelocity = 0;
    this.trail = [];
  }

  draw(context){
    for (let i = 0; i < this.trail.length; i++){
      context.fillStyle = 'green';
      context.fillRect(this.trail[i].x * 30, this.trail[i].y * 30, 30-2, 30-2)
    }
  }

  changeDirection() {
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;
  }

  moveLeft() {
    if(this.xVelocity !== 1){
      this.xVelocity = -1;
      this.yVelocity = 0;
    }
  }

  moveRight() {
    if(this.xVelocity !== -1){
      this.xVelocity = 1;
      this.yVelocity = 0;
    }
  }

  moveUp() {
    if(this.yVelocity !== 1){
      this.yVelocity = -1;
      this.xVelocity = 0;
    }
  }

  moveDown() {
    if(this.yVelocity !== -1){
      this.yVelocity = 1;
      this.xVelocity = 0;
    }
  }

  manageTail() {
    this.trail.push({x: this.xPosition, y: this.yPosition});
    while(this.trail.length > this.tail) {
      this.trail.shift();
    }
  }

  checkEdge(){

  }
}

module.exports = Snake;
