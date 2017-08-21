class Game {
  constructor(difficulty = true, speed = 1) {
    this.difficulty = difficulty,
    this.speed = speed,
    this.score = 0,
    this.grid = 30
  }

  erase(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  borderState(snake) {
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
      if (snake.xPosition < 0) {
        snake.xPosition = this.grid / 2;
        snake.tail = 4;
      }
      if (snake.xPosition > this.grid - 1) {
        snake.xPosition = this.grid / 2;
        snake.tail = 4;
      }
      if (snake.yPosition < 0) {
        snake.yPosition = this.grid / 2;
        snake.tail = 4;
      }
      if (snake.yPosition > this.grid - 1) {
        snake.yPosition = this.grid / 2;
        snake.tail = 4;
      }
    }
  }

}

module.exports = Game;
