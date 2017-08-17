class Apple {
  constructor() {
    this.color = 'rgb(213, 16, 16)';
    this.xPosition = 5;
    this.yPosition = 5;
  }

  generateRandomLocation(){
    this.xPosition = Math.floor((Math.random() * 30) + 1);
    this.yPosition = Math.floor((Math.random() * 30) + 1);
  }

  draw(ctx) {
    // generateRandomLocation();
    // ctx.fillRect( this.xPosition, this.yPosition, 30 - 2, 30 - 2 );
    // ctx.fillStyle(this.color)
    ctx.fillStyle('red');
    ctx.fillRect(50,50,10,10);
  }
}

module.exports = Apple;
