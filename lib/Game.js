class Game {
  constructor(difficulty = false, speed = 1) {
    this.difficulty = difficulty,
    this.speed = speed,
    this.score = 0
  }

  erase(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  borderState() {
    //If difficulty === false {wrapping}

    //else No Wrap
  }

}

module.exports = Game;
