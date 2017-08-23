const {assert, expect, should} = require('chai');
const Game = require('../lib/game');

describe('Game', function() {

  let game;

  beforeEach(function(){
    game = new Game();
  });

  it('should be a function', function() {
    assert.isFunction(Game);
  });

  it('should be an object', function(){
    assert.isObject(game);
  });

  it('should have a difficultu with a defalut value of false', function() {
    assert.equal(game.difficulty, false);
  });

  it('should be able to take a difficulty boolean argument of true', function() {
    game = new Game(true);

    assert.equal(game.difficulty, true);
  });

  it('should have a speed with a defalut value of 15', function() {
    assert.equal(game.speed, 15);
  });

  it('should have a speed of 22 if difficulty is true', function() {
    game = new Game(true);
    assert.equal(game.difficulty, true);
    game.difficultyState();
    assert.equal(game.speed,22);
  })

  it('should have a score with a default value of 0', function() {
    assert.equal(game.score, 0);
  });

  it('should have a grid with a default value of 30', function() {
    assert.equal(game.grid, 30);
  });
});
