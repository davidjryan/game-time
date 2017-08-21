const Segment = require('./Segment.js');

class Snake extends Segment {
  constructor() {
    super();

    this.xVelocity = 1;
    this.yVelocity = 0;

    this.tail = 4;
    this.trail = [];
  }

  draw(context) {
    for (let i = 0; i < this.trail.length; i++) {
      context.fillStyle = 'green';
      context.fillRect(this.trail[i].x * 30, this.trail[i].y * 30, 30 - 2, 30 - 2)
    }
  }

  changeDirection() {
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;
  }

  moveLeft() {
    if (this.xVelocity !== 1) {
      this.xVelocity = -1;
      this.yVelocity = 0;
    }
  }

  moveRight() {
    if (this.xVelocity !== -1) {
      this.xVelocity = 1;
      this.yVelocity = 0;
    }
  }

  moveUp() {
    if (this.yVelocity !== 1) {
      this.yVelocity = -1;
      this.xVelocity = 0;
    }
  }

  moveDown() {
    if (this.yVelocity !== -1) {
      this.yVelocity = 1;
      this.xVelocity = 0;
    }
  }

  manageTail() {
    this.trail.push({x: this.xPosition, y: this.yPosition});
    while (this.trail.length > this.tail) {
      this.trail.shift();
    }
  }

  eatApple(apple) {
    if (apple.xPosition == this.xPosition && apple.yPosition == this.yPosition) {
      this.tail++;
      apple.generateRandomLocation();
    }
  }

  collision(ele, index) {
    return ele.x == this.trail[index].x && ele.y == this.trail[index].y
  }

  checkSelf() {

    const headless = this.trail.slice(1, this.trail.length)

    if (headless.some(this.collision())) {
      this.tail = 4;
    }
  }
}

module.exports = Snake;
