const {assert, expect, should} = require('chai');
const Snake = require('../lib/snake');
const Game = require('../lib/game');

let game;

beforeEach(() => {
  game = new Game();
});

describe('Snake', () => {
  it('should be a function', () =>{
    assert.isFunction( Snake );
  });

  it('should be an object', () =>{
    assert.isObject( game.snake );
  });

  it('should have a tail that is 4 units long', () => {
    assert.equal( game.snake.tail, 4 );
  });

  it('should have a segment height and width of 28', () => {
    assert.equal(game.snake.width, 28);
    assert.equal(game.snake.height, 28);
  });

  it('should have an x and y position', () => {
    assert.equal( typeof(game.snake.xPosition), 'number' );
    assert.equal( typeof(game.snake.xPosition), 'number' );
  });

  it('should have an x and y velocity', () => {
    assert.equal( typeof(game.snake.xVelocity), 'number' );
    assert.equal( typeof(game.snake.yVelocity), 'number' );
  });

  it('should have a trail', () => {
    assert.isArray(game.snake.trail)
  });

  it('should be able to change direction', () => {
    game.snake.xPosition = 0;
    game.snake.yPosition = 0;

    game.snake.xVelocity = 0;
    game.snake.yVelocity = 0;

    game.snake.moveRight();
    assert.equal(game.snake.xVelocity, 1);
    game.snake.changeDirection();
    assert.equal(game.snake.xPosition, 1);
    assert.equal(game.snake.yPosition, 0);
  });

  it('should be able to move up', () => {
    game.snake.moveUp();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, -1 );
  });

  it('should be able to move left', () => {
    game.snake.moveUp();
    game.snake.moveLeft();

    assert.equal( game.snake.xVelocity, -1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should be able to move down', () => {
    game.snake.moveDown();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, 1 );
  });

  it('should be able to move right', () => {
    game.snake.moveRight();

    assert.equal( game.snake.xVelocity, 1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should not be able to move left if moving right', () => {
    game.snake.moveLeft();

    assert.equal( game.snake.xVelocity, 1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should not be able to move right if moving left', () => {
    game.snake.moveUp();
    game.snake.moveLeft();
    game.snake.moveRight();

    assert.equal( game.snake.xVelocity, -1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should not be able to move up if moving down', () => {
    game.snake.moveDown();
    game.snake.moveUp();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, 1 );
  });

  it('should not be able to move down if moving up', () => {
    game.snake.moveUp();
    game.snake.moveDown();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, -1 );
  });

  it('should wrap to other edge of x axis if game difficulty is false', () => {
    game.snake.xPosition = 29;
    game.snake.yPosition = 0;

    assert.equal(game.difficulty, false);
    assert.equal(game.snake.xPosition, 29);
    assert.equal(game.snake.alive, true);


    game.snake.xPosition = 30;
    game.difficultyState();
    assert.equal(game.snake.xPosition, 0);
    assert.equal(game.snake.alive, true);
  });

  it('should wrap to other edge of the y axis if game difficulty is false', () => {
    game.snake.xPosition = 0;
    game.snake.yPosition = 29;

    assert.equal(game.difficulty, false);
    assert.equal(game.snake.yPosition, 29);

    game.snake.yPosition = 30;
    game.difficultyState();
    assert.equal(game.snake.yPosition, 0);
    assert.equal(game.snake.alive, true);
  });

  it('should die if hit edge of x axis', () => {
    game = new Game();

    game.snake.xPosition = 29;
    game.snake.yPosition = 0;

    game.changeDifficulty();

    assert.equal(game.difficulty, true)
    assert.equal(game.snake.xPosition, 29);
    assert.equal(game.snake.alive, true);

    game.snake.xPosition = 30;
    game.difficultyState();
    assert.equal(game.snake.alive, false);
  });

  it('should die if hit edge of y axis', () => {
    game = new Game();

    game.snake.xPosition = 0;
    game.snake.yPosition = 29;

    game.changeDifficulty();

    assert.equal(game.difficulty, true);
    assert.equal(game.snake.alive, true);

    game.snake.yPosition = 30;
    game.difficultyState();
    assert.equal(game.snake.alive, false);
  });

  it('should be able to detect collision with apple', () => {
    game.snake.xPosition = 0;
    game.snake.yPosition = 0;

    game.apple.xPosition = 1;
    game.apple.yPosition = 1;

    game.snake.checkApple(game.apple);

    assert.equal(game.apple.xPosition, 1);
    assert.equal(game.apple.yPosition, 1);

    game.apple.xPosition = 0;
    game.apple.yPosition = 0;
    game.snake.checkApple(game.apple);

    assert.notEqual(game.apple.xPosition, 0);
    assert.notEqual(game.apple.yPosition, 0);
  });
  it('should increase tail length after collision with apple', () => {
    game.snake.xPosition = 0;
    game.snake.yPosition = 0;

    game.apple.xPosition = 1;
    game.apple.yPosition = 1;

    game.snake.checkApple(game.apple);
    assert.equal(game.snake.tail, 4);

    game.apple.xPosition = 0;
    game.apple.yPosition = 0;

    game.snake.checkApple(game.apple);
    assert.equal(game.snake.tail, 5);
  });
});
