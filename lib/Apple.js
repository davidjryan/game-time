class Apple {
  constructor() {
    this.color = 'rgb(213, 16, 16)';
    this.xPosition = 0;
    this.yPosition = 0;
  }

  generateRandomLocation(){
    this.xPosition = Math.floor((Math.random() * 30));
    this.yPosition = Math.floor((Math.random() * 30));
  }

  draw(context) {
    context.fillStyle="red";
    context.fillRect(this.xPosition*30,this.yPosition*30,30-2,30-2);
  }
}

module.exports = Apple;
