const Snake = require('./Snake.js');
const Apple = require('./Apple.js');

class Game {
  constructor(difficulty = false) {
    this.difficulty = difficulty,
    this.speed = 15,
    this.score = 0,
    this.grid = 30,
    this.snake = new Snake(),
    this.apple = new Apple()
  }

  run(context, canvas) {
    this.erase(context, canvas);
    this.snake.changeDirection();
    this.difficultyState(this.snake);
    this.snake.draw(context);
    this.snake.manageTail();
    this.snake.eatApple(this.apple);
    this.apple.draw(context);
    this.snake.checkSelf();
  }

  erase(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
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
