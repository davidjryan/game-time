const Segment = require('./Segment.js');

class Apple extends Segment {
  constructor() {
    super();

    this.xPosition = 15;
    this.yPosition = 15;
    // this.yPosition = Math.floor((Math.random() * 30));
  }

  generateRandomLocation() {
    this.xPosition = Math.floor((Math.random() * 30));
    this.yPosition = Math.floor((Math.random() * 30));
  }

  draw(context) {
    context.fillStyle = 'red';
    context.fillRect(this.xPosition * 30, this.yPosition * 30, this.width, this.height);
  }
}

module.exports = Apple;
