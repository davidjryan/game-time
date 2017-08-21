const {assert, expect, should} = require('chai');
const Snake = require('../lib/snake');

describe('Snake', function() {
  it( 'should be a function', function(){
    const snake = new Snake();

    assert.isFunction( Snake );
  });
  it(' should be an object', function(){
    const snake = new Snake();

    assert.isObject( snake );
  });
  it(' should have a color', function() {
    const snake = new Snake();

    assert.equal( snake.color, 'rgb(16, 213, 16)' );
  });
  it(' should have a tail that is 4 units long', function() {
    const snake = new Snake();
    assert.equal( snake.tail, 4 );
  });
  it(' should have an x and y position', function() {
    const snake = new Snake();

    assert.equal( typeof(snake.xPosition), 'number' );
    assert.equal( typeof(snake.xPosition), 'number' );
  });
  it(' should have an x and y velocity', function() {
    const snake = new Snake();

    assert.equal( typeof(snake.xVelocity), 'number' );
    assert.equal( typeof(snake.yVelocity), 'number' );
  });
  it(' should have a trail', function() {
    const snake = new Snake();

    assert.isArray(snake.trail)
  });
  it.skip('should be able to change direction', function() {
    const snake = new Snake();
  });
  it(' should be able to move up', function() {
    const snake = new Snake();

    snake.moveUp();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, -1 );
  });
  it(' should be able to move left', function() {
    const snake = new Snake();

    snake.moveUp();
    snake.moveLeft();

    assert.equal( snake.xVelocity, -1 );
    assert.equal( snake.yVelocity, 0 );
  });
  it(' should be able to move down', function() {
    const snake = new Snake();

    snake.moveDown();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, 1 );
  });
  it(' should be able to move right', function() {
    const snake = new Snake();

    snake.moveRight();

    assert.equal( snake.xVelocity, 1 );
    assert.equal( snake.yVelocity, 0 );
  });
  it(' should not be able to move left if moving right', function() {
    const snake = new Snake();

    snake.moveLeft();

    assert.equal( snake.xVelocity, 1 );
    assert.equal( snake.yVelocity, 0 );
  });
  it(' should not be able to move right if moving left', function() {
    const snake = new Snake();

    snake.moveUp();
    snake.moveLeft();
    snake.moveRight();

    assert.equal( snake.xVelocity, -1 );
    assert.equal( snake.yVelocity, 0 );
  })
  it(' should not be able to move up if moving down', function() {
    const snake = new Snake();

    snake.moveDown();
    snake.moveUp();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, 1 );
  });
  it(' should not be able to move down if moving up', function() {
    const snake = new Snake();

    snake.moveUp();
    snake.moveDown();

    assert.equal( snake.xVelocity, 0 );
    assert.equal( snake.yVelocity, -1 );
  });
  it.skip('should be able to draw itself', function() {
    const snake = new Snake();
    snake.draw();
  });

});
