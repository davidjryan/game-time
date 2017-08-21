const {assert, expect, should} = require('chai');
const Snake = require('../lib/snake');

let snake;

beforeEach(function() {
  snake = new Snake();
});

describe('Snake', function() {
  it( 'should be a function', function(){
    assert.isFunction( Snake );
  });

  it(' should be an object', function(){
    assert.isObject( snake );
  });

  it(' should have a tail that is 4 units long', function() {
    assert.equal( snake.tail, 4 );
  });

  it(' should have an x and y position', function() {
    assert.equal( typeof(snake.xPosition), 'number' );
    assert.equal( typeof(snake.xPosition), 'number' );
  });

  it(' should have an x and y velocity', function() {
    assert.equal( typeof(snake.xVelocity), 'number' );
    assert.equal( typeof(snake.yVelocity), 'number' );
  });

  it(' should have a trail', function() {
    assert.isArray(snake.trail)
  });

  it.skip('should be able to change direction', function() {

  });

  it(' should be able to move up', function() {
    snake.moveUp();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, -1 );
  });

  it(' should be able to move left', function() {
    snake.moveUp();
    snake.moveLeft();

    assert.equal( snake.xVelocity, -1 );
    assert.equal( snake.yVelocity, 0 );
  });

  it(' should be able to move down', function() {
    snake.moveDown();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, 1 );
  });

  it(' should be able to move right', function() {
    snake.moveRight();

    assert.equal( snake.xVelocity, 1 );
    assert.equal( snake.yVelocity, 0 );
  });

  it(' should not be able to move left if moving right', function() {
    snake.moveLeft();

    assert.equal( snake.xVelocity, 1 );
    assert.equal( snake.yVelocity, 0 );
  });

  it(' should not be able to move right if moving left', function() {
    snake.moveUp();
    snake.moveLeft();
    snake.moveRight();

    assert.equal( snake.xVelocity, -1 );
    assert.equal( snake.yVelocity, 0 );
  });

  it(' should not be able to move up if moving down', function() {
    snake.moveDown();
    snake.moveUp();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, 1 );
  });

  it(' should not be able to move down if moving up', function() {
    snake.moveUp();
    snake.moveDown();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, -1 );
  });
});
