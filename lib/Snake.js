class Snake {
  constructor() {
    this.length = 4;

    this.xPosition = 450;
    this.yPosition = 450;

    this.xVelocity = 0.2;
    this.yVelocity = 0.2;
    this.trail = [];
  }

  draw(context){
    context.fillRect( this.xPosition, this.yPosition, 30, 30 );
  }

  changeDirection() {
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;

    this.trail.push({x: this.xPosition, y: this.yPosition});
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

  checkEdge(){

  }
}

module.exports = Snake;
