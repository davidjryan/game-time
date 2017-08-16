class Snake {
  constructor() {
    this.tail = 4;

    this.xPosition = 450;
    this.yPosition = 450;

    this.xVelocity = 1;
    this.yVelocity = 0;
    this.trail = [];
  }

  draw(context){
    context.fillRect( this.xPosition, this.yPosition, 30, 30 );
  }

  changeDirection() {
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;
  }

  moveLeft() {
    this.xVelocity = -1;
    this.yVelocity = 0;
  }

  moveRight() {
    this.xVelocity = 1;
    this.yVelocity = 0;
  }

  moveUp() {
    this.yVelocity = -1;
    this.xVelocity = 0;
  }

  moveDown() {
    this.yVelocity = 1;
    this.xVelocity = 0;
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
