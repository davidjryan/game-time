const Segment = require('./Segment.js');

class Snake extends Segment {
  constructor() {
    super();

    this.color = '#222d24';
    this.xVelocity = 1;
    this.yVelocity = 0;

    this.tail = 4;
    this.trail = [];

    this.alive = true;
  }

  draw(context) {
    for (let i = 0; i < this.trail.length; i++) {
      context.fillStyle = this.color;
      context.fillRect(this.trail[i].x * 30, this.trail[i].y * 30, this.width, this.height)
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

  checkApple(apple) {
    if (apple.xPosition == this.xPosition && apple.yPosition == this.yPosition) {
      this.tail++;
      apple.generateRandomLocation();
    }
  }

  collision(ele) {

    return (ele.x === this.trail[0].x) && (ele.y === this.trail[0].y)
  }

  checkSelf() {

    const headless = this.trail.slice(1, this.trail.length)

    if (headless.some(this.collision.bind(this))) {
      this.death();
    }
  }

  death() {
    this.xPosition = 15;
    this.yPosition = 14;
    this.alive = false;
  }
}

module.exports = Snake;
