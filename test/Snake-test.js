const {assert, expect, should} = require('chai');
const Snake = require('../lib/snake');
const Game = require('../lib/game');

let game;

beforeEach(function() {
  game = new Game();
});

describe('Snake', function() {
  it('should be a function', function(){
    assert.isFunction( Snake );
  });

  it('should be an object', function(){
    assert.isObject( game.snake );
  });

  it('should have a tail that is 4 units long', function() {
    assert.equal( game.snake.tail, 4 );
  });

  it('should have an x and y position', function() {
    assert.equal( typeof(game.snake.xPosition), 'number' );
    assert.equal( typeof(game.snake.xPosition), 'number' );
  });

  it('should have an x and y velocity', function() {
    assert.equal( typeof(game.snake.xVelocity), 'number' );
    assert.equal( typeof(game.snake.yVelocity), 'number' );
  });

  it('should have a trail', function() {
    assert.isArray(game.snake.trail)
  });

  it('should be able to change direction', function() {
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

  it('should be able to move up', function() {
    game.snake.moveUp();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, -1 );
  });

  it('should be able to move left', function() {
    game.snake.moveUp();
    game.snake.moveLeft();

    assert.equal( game.snake.xVelocity, -1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should be able to move down', function() {
    game.snake.moveDown();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, 1 );
  });

  it('should be able to move right', function() {
    game.snake.moveRight();

    assert.equal( game.snake.xVelocity, 1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should not be able to move left if moving right', function() {
    game.snake.moveLeft();

    assert.equal( game.snake.xVelocity, 1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should not be able to move right if moving left', function() {
    game.snake.moveUp();
    game.snake.moveLeft();
    game.snake.moveRight();

    assert.equal( game.snake.xVelocity, -1 );
    assert.equal( game.snake.yVelocity, 0 );
  });

  it('should not be able to move up if moving down', function() {
    game.snake.moveDown();
    game.snake.moveUp();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, 1 );
  });

  it('should not be able to move down if moving up', function() {
    game.snake.moveUp();
    game.snake.moveDown();

    assert.equal( game.snake.xVelocity, 0 );
    assert.equal( game.snake.yVelocity, -1 );
  });

  it('should wrap to other edge of x axis if game difficulty is false', function() {
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

  it('should wrap to the other edge of the y axis if game difficulty is false', function() {
    game.snake.xPosition = 0;
    game.snake.yPosition = 29;

    assert.equal(game.difficulty, false);
    assert.equal(game.snake.yPosition, 29);

    game.snake.yPosition = 30;
    game.difficultyState();
    assert.equal(game.snake.yPosition, 0);
    assert.equal(game.snake.alive, true);
  });

  it('should die if hit edge of x axis', function() {
    game = new Game(true);

    game.snake.xPosition = 29;
    game.snake.yPosition = 0;

    assert.equal(game.difficulty, true);
    assert.equal(game.snake.xPosition, 29);
    assert.equal(game.snake.alive, true);

    game.snake.xPosition = 30;
    game.difficultyState();
    assert.equal(game.snake.alive, false);
  });

  it('should die if hit edge of y axis', function() {
    game = new Game(true);

    game.snake.xPosition = 0;
    game.snake.yPosition = 29;

    assert.equal(game.difficulty, true);
    assert.equal(game.snake.alive, true);
  });

  it('should be able to detect collision with apple', function() {
    game.snake.xPosition = 0;
    game.snake.yPosition = 0;

    game.apple.xPosition = 1;
    game.apple.yPosition = 1;

    game.snake.eatApple(game.apple);

    assert.equal(game.apple.xPosition, 1);
    assert.equal(game.apple.yPosition, 1);

    game.apple.xPosition = 0;
    game.apple.yPosition = 0;
    game.snake.eatApple(game.apple);

    assert.notEqual(game.apple.xPosition, 0);
    assert.notEqual(game.apple.yPosition, 0);
  });
  it('should increase tail length after collision with apple', function() {
    game.snake.xPosition = 0;
    game.snake.yPosition = 0;

    game.apple.xPosition = 1;
    game.apple.yPosition = 1;

    game.snake.eatApple(game.apple);
    assert.equal(game.snake.tail, 4);

    game.apple.xPosition = 0;
    game.apple.yPosition = 0;

    game.snake.eatApple(game.apple);
    assert.equal(game.snake.tail, 5);
  });
});
