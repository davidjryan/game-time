class Snake {
  constructor() {
    this.length = 4;

    this.xPosition = 0;
    this.yPosition = 0;
    
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.tail = [];
  }

  draw(context){
    context.fillRect( (canvas.width / 2) - 10, (canvas.height / 2) - 10, 10, 10);
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
