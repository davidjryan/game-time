class Snake {
  constructor(length = 4, velocity = 1) {
    this.length = length;
    this.velocity = velocity;
    this.tail = [];
  }

  draw(context){
    context.fillRect( (canvas.width / 2) - 10, (canvas.height / 2) - 10, 10, 10);
  }

  updateLocation(){

  }

  checkEdge(){

  }
}

module.exports = Snake;
