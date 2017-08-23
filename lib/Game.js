const Snake = require('./Snake.js');
const Apple = require('./Apple.js');

class Game {
  constructor(difficulty = false, speed = 15, context, canvas) {
    this.difficulty = difficulty,
    this.speed = speed,
    this.score = 0,
    this.grid = 30,
    this.snake = new Snake(),
    this.apple = new Apple(),
    this.context = context,
    this.canvas = canvas
  }

  run() {
    this.erase();
    this.snake.changeDirection();
    this.difficultyState(this.snake);
    this.snake.draw(this.context);
    this.snake.manageTail();
    this.snake.eatApple(this.apple);
    this.apple.draw(this.context);
    this.snake.checkSelf();
  }

  erase() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  changeDifficulty() {
    this.difficulty = !this.difficulty;
  }

  difficultyState() {
    if (!this.difficulty) {
      if (this.snake.xPosition < 0) {
        this.snake.xPosition = this.grid - 1;
      }
      if (this.snake.xPosition > this.grid - 1) {
        this.snake.xPosition = 0;
      }
      if (this.snake.yPosition < 0) {
        this.snake.yPosition = this.grid - 1;
      }
      if (this.snake.yPosition > this.grid - 1) {
        this.snake.yPosition = 0;
      }
    } else {
      this.speed = 22;
      if (this.snake.xPosition < 0) {
        this.snake.death();
      }
      if (this.snake.xPosition > this.grid - 1) {
        this.snake.death();
      }
      if (this.snake.yPosition < 0) {
        this.snake.death();
      }
      if (this.snake.yPosition > this.grid - 1) {
        this.snake.death();
      }
    }
  }

}

module.exports = Game;
