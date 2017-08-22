class Game {
  constructor() {
    this.difficulty = false,
    this.speed = 15,
    this.score = 0,
    this.grid = 30
  }

  erase(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  difficultyState(snake) {
    if (!this.difficulty) {
      if (snake.xPosition < 0) {
        snake.xPosition = this.grid - 1;
      }
      if (snake.xPosition > this.grid - 1) {
        snake.xPosition = 0;
      }
      if (snake.yPosition < 0) {
        snake.yPosition = this.grid - 1;
      }
      if (snake.yPosition > this.grid - 1) {
        snake.yPosition = 0;
      }
    } else {
      this.speed = 22;
      if (snake.xPosition < 0) {
        snake.death();
      }
      if (snake.xPosition > this.grid - 1) {
        snake.death();
      }
      if (snake.yPosition < 0) {
        snake.death();
      }
      if (snake.yPosition > this.grid - 1) {
        snake.death();
      }
    }
  }

}

module.exports = Game;
